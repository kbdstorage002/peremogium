#!/usr/bin/env node
// Оновлює data/data.json і data/data.js для сторінки.
//
// Джерела:
//   • Втрати рф — щоденні зведення Генштабу ЗСУ через архів russianwarship.rip
//   • Територія — знімки карти DeepState (deepstatemap.live): площа окупованого
//     на 1-ше число кожного місяця; приріст за місяць = різниця двох знімків
//   • Нафтогазові доходи рф — вручну, data/manual.json
//
// Запуск: npm run update

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as turf from '@turf/turf';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');
const CACHE = path.join(DATA, 'cache', 'deepstate');
const YEARS = [2025, 2026];
const UA = 'Mozilla/5.0 (compatible; peremogium-updater/1.0)';

const log = (...a) => console.log('·', ...a);
const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;

async function getJSON(url, tries = 3) {
  for (let i = 1; ; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      if (i >= tries) throw new Error(`${url}: ${e.message}`);
      await new Promise(res => setTimeout(res, 1500 * i));
    }
  }
}

// ---------- Генштаб ЗСУ ----------
async function fetchGenStaff(from, to) {
  const recs = {};
  for (let offset = 0; ; offset += 50) {
    const url = `https://russianwarship.rip/api/v2/statistics?date_from=${from}&date_to=${to}&limit=50&offset=${offset}`;
    const page = (await getJSON(url)).data.records;
    for (const r of page) recs[r.date] = r.stats;
    if (page.length < 50) break;
  }
  return recs;
}

// Кількість за місяць = накопичений підсумок на 1-ше число наступного місяця
// мінус підсумок на 1-ше число цього місяця.
function genStaffMonthly(recs, key, today) {
  const out = {}, partial = {};
  const lastDate = Object.keys(recs).sort().pop();
  for (const y of YEARS) {
    out[y] = [];
    for (let m = 1; m <= 12; m++) {
      const a = `${y}-${pad(m)}-01`;
      const b = m === 12 ? `${y + 1}-01-01` : `${y}-${pad(m + 1)}-01`;
      if (!recs[a]) break;
      if (recs[b]) out[y].push(recs[b][key] - recs[a][key]);
      else { partial[y] = { month: m, value: recs[lastDate][key] - recs[a][key], asOf: lastDate }; break; }
    }
  }
  return { monthly: out, partial, lastDate, total: recs[lastDate][key] };
}

// Втрати за календарний день D = підсумок у зведенні D+1 мінус підсумок у зведенні D
// (ранкове зведення Генштабу підбиває попередню добу). Так сума днів місяця
// точно дорівнює місячному значенню вище.
function genStaffDaily(recs, key, start) {
  const values = [];
  const d = new Date(start + 'T00:00:00Z');
  for (;;) {
    const a = ymd(d);
    d.setUTCDate(d.getUTCDate() + 1);
    const b = ymd(d);
    if (!recs[a] || !recs[b]) break;
    values.push(recs[b][key] - recs[a][key]);
  }
  return { start, values };
}

// ---------- DeepState ----------
const isOccupied = name =>
  /geoJSON\.status\.occupied/.test(name) ||
  /geoJSON\.territories\.(crimea|ordlo|tuzla)/.test(name);

const strip2d = g => g.type === 'Polygon'
  ? { type: 'Polygon', coordinates: g.coordinates.map(r => r.map(p => [p[0], p[1]])) }
  : { type: 'MultiPolygon', coordinates: g.coordinates.map(pp => pp.map(r => r.map(p => [p[0], p[1]]))) };

async function snapshotArea(id) {
  await fs.mkdir(CACHE, { recursive: true });
  const file = path.join(CACHE, `${id}.json`);
  try { return JSON.parse(await fs.readFile(file, 'utf8')).areaKm2; } catch {}
  const g = await getJSON(`https://deepstatemap.live/api/history/${id}/geojson`);
  const polys = g.features
    .filter(f => /Polygon/.test(f.geometry?.type) && isOccupied(f.properties?.name || ''))
    .map(f => turf.feature(strip2d(f.geometry)));
  // Об'єднуємо, щоб не рахувати двічі ділянки, які можуть перекриватися.
  const merged = polys.length > 1 ? turf.union(turf.featureCollection(polys)) : polys[0];
  const areaKm2 = +(turf.area(merged) / 1e6).toFixed(2);
  await fs.writeFile(file, JSON.stringify({ id, areaKm2, polygons: polys.length }));
  return areaKm2;
}

async function fetchDeepState(today) {
  const hist = (await getJSON('https://deepstatemap.live/api/history/public'))
    .filter(h => h.status !== false)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  // Останній знімок перед північчю 1-го числа за київським часом (≈ UTC+2/+3).
  const before = iso => hist.filter(h => h.createdAt < iso).pop();
  const boundary = (y, m) => new Date(Date.UTC(y, m - 1, 1, -2)).toISOString();

  const areas = {}; // 'YYYY-MM' -> { area, snapshotId, snapshotAt }
  const months = [];
  for (const y of YEARS) for (let m = 1; m <= 12; m++) months.push([y, m]);
  months.push([YEARS.at(-1) + 1, 1]);
  for (const [y, m] of months) {
    const iso = boundary(y, m);
    if (iso > today.toISOString()) break;
    const s = before(iso);
    if (!s) continue;
    areas[`${y}-${pad(m)}`] = { area: await snapshotArea(s.id), snapshotId: s.id, snapshotAt: s.createdAt };
    log(`DeepState ${y}-${pad(m)}-01: ${areas[`${y}-${pad(m)}`].area} км² (знімок ${s.createdAt})`);
  }
  const latest = hist.at(-1);
  const latestArea = await snapshotArea(latest.id);

  const monthly = {}, partial = {};
  for (const y of YEARS) {
    monthly[y] = [];
    for (let m = 1; m <= 12; m++) {
      const a = areas[`${y}-${pad(m)}`];
      const b = areas[m === 12 ? `${y + 1}-01` : `${y}-${pad(m + 1)}`];
      if (!a) break;
      if (b) monthly[y].push(+(b.area - a.area).toFixed(1));
      else { partial[y] = { month: m, value: +(latestArea - a.area).toFixed(1), asOf: latest.createdAt.slice(0, 10) }; break; }
    }
  }
  // Для неповного поточного місяця — той самий відрізок торік (від 1-го числа
  // до тієї самої дати), щоб порівнювати однакову кількість днів.
  const partialPrevYear = {};
  for (const [y, p] of Object.entries(partial)) {
    const start = areas[`${+y - 1}-${pad(p.month)}`];
    if (!start) continue;
    const t = new Date(latest.createdAt); t.setUTCFullYear(t.getUTCFullYear() - 1);
    const s = before(t.toISOString());
    if (!s || s.createdAt < start.snapshotAt) continue;
    partialPrevYear[+y - 1] = { month: p.month, value: +((await snapshotArea(s.id)) - start.area).toFixed(1), asOf: s.createdAt.slice(0, 10) };
    log(`DeepState: той самий період торік (${p.month}.${+y - 1} до ${s.createdAt.slice(0, 10)}): ${partialPrevYear[+y - 1].value} км²`);
  }
  return { monthly, partial, partialPrevYear, latest: { area: latestArea, at: latest.createdAt }, boundaries: areas };
}

// ---------- main ----------
async function main() {
  const today = new Date();
  const manual = JSON.parse(await fs.readFile(path.join(DATA, 'manual.json'), 'utf8'));

  log('Генштаб ЗСУ…');
  const gsRecs = await fetchGenStaff(`${YEARS[0] - 1}-12-31`, ymd(today));
  const personnel = genStaffMonthly(gsRecs, 'personnel_units', today);
  log(`Генштаб: дані до ${personnel.lastDate}`);

  log('DeepState…');
  const territory = await fetchDeepState(today);

  const data = {
    generatedAt: today.toISOString(),
    years: YEARS,
    personnel: {
      source: 'Генштаб ЗСУ (через russianwarship.rip)',
      unit: 'осіб',
      monthly: personnel.monthly,
      partial: personnel.partial,
      asOf: personnel.lastDate,
      totalSinceInvasion: personnel.total,
      daily: genStaffDaily(gsRecs, 'personnel_units', `${YEARS[0]}-01-01`),
    },
    territory: {
      source: 'DeepState (deepstatemap.live), різниця знімків карти на 1-ше число',
      unit: 'км²',
      monthly: territory.monthly,
      partial: territory.partial,
      partialPrevYear: territory.partialPrevYear,
      occupiedNow: territory.latest.area,
      asOf: territory.latest.at.slice(0, 10),
      boundaries: territory.boundaries,
    },
    oilGas: manual.oilGas,
  };

  // Невелика самоперевірка: щоб збій джерела не зіпсував сторінку.
  const problems = [];
  for (const y of YEARS) {
    if (!data.personnel.monthly[y]?.length) problems.push(`немає втрат за ${y}`);
    if (!data.territory.monthly[y]?.length) problems.push(`немає території за ${y}`);
  }
  if (data.territory.occupiedNow < 100000 || data.territory.occupiedNow > 140000) problems.push(`дивна загальна площа: ${data.territory.occupiedNow}`);
  if (problems.length) throw new Error('Дані не пройшли перевірку: ' + problems.join('; '));

  await fs.writeFile(path.join(DATA, 'data.json'), JSON.stringify(data, null, 2));
  await fs.writeFile(path.join(DATA, 'data.js'), `// Згенеровано scripts/update-data.mjs — не редагувати вручну\nwindow.PEREMOGIUM_DATA = ${JSON.stringify(data)};\n`);
  log(`Готово: data/data.json, data/data.js (${data.generatedAt})`);
}

main().catch(e => { console.error('✗', e.message); process.exit(1); });

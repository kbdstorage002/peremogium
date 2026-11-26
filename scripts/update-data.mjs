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
// Уся повномасштабна війна: з 2022-го до поточного року (новий рік додається сам 1 січня).
// Дата — за Києвом (UTC+2), щоб у ніч на 1 січня рік не «відставав».
const THIS_YEAR = new Date(Date.now() + 2 * 3600e3).getUTCFullYear();
const YEARS = Array.from({ length: THIS_YEAR - 2022 + 1 }, (_, i) => 2022 + i);
const DAILY_FROM = '2022-02-25';               // щоденний ряд (календар втрат): з першого зведення Генштабу
const EQUIPMENT = ['uav_systems', 'vehicles_fuel_tanks', 'artillery_systems', 'armoured_fighting_vehicles', 'tanks', 'mlrs', 'aa_warfare_systems', 'special_military_equip'];
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
  const dates = Object.keys(recs).sort(), lastDate = dates.at(-1), firstDate = dates[0];
  for (const y of YEARS) {
    out[y] = [];
    for (let m = 1; m <= 12; m++) {
      const a = `${y}-${pad(m)}-01`;
      const b = m === 12 ? `${y + 1}-01-01` : `${y}-${pad(m + 1)}-01`;
      if (!recs[a]) {
        // До початку зведень (до 25.02.2022): перший місяць війни рахуємо від нуля
        if (a < firstDate) { out[y].push(recs[b] ? recs[b][key] : null); continue; }
        break;
      }
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
  // Якщо якогось дня зведення немає (буває у 2022-му), різницю між сусідніми
  // зведеннями рівномірно розподіляємо на пропущені дні; такі дні позначаємо.
  const dates = Object.keys(recs).filter(k => k >= start).sort();
  const values = [], gaps = [];
  for (let i = 0; i + 1 < dates.length; i++) {
    const a = new Date(dates[i] + 'T00:00:00Z'), b = new Date(dates[i + 1] + 'T00:00:00Z');
    const n = Math.round((b - a) / 864e5), diff = recs[dates[i + 1]][key] - recs[dates[i]][key];
    for (let j = 0; j < n; j++) {
      if (n > 1) gaps.push(values.length);
      values.push(n > 1 ? Math.round(diff / n) : diff);
    }
  }
  return { start: dates[0], values, estimated: gaps };
}

// ---------- DeepState ----------
// Окупована територія України: окуповане з 2022 року + Крим, ОРДЛО, Тузла.
// Підходить і для нових знімків (мітки geoJSON.status.*), і для старих (лише назви).
// На карті є й жартівливі «окуповані» чужі землі (Курили, Петсамо тощо) — їх відсікаємо
// і за назвою, і за координатами (лише в межах України).
const isOccupied = name =>
  /geoJSON\.status\.occupied|geoJSON\.territories\.(crimea|ordlo|tuzla)/.test(name) ||
  (!/geoJSON\./.test(name) && (/^\s*([^.]*\.\s*)?окуповано/i.test(name) || /окупований крим|ордло|острів тузла|зайняті ворогом/i.test(name)));
const IN_UKRAINE = ([lon, lat]) => lon > 22 && lon < 40.5 && lat > 44 && lat < 52.6;

const ring2d = r => r.map(p => [p[0], p[1]]);
// Повертає список полігонів (2D) з Polygon / MultiPolygon / GeometryCollection
function polygonsOf(g) {
  if (!g) return [];
  if (g.type === 'Polygon') return [g.coordinates.map(ring2d)];
  if (g.type === 'MultiPolygon') return g.coordinates.map(pp => pp.map(ring2d));
  if (g.type === 'GeometryCollection') return (g.geometries || []).flatMap(polygonsOf);
  return [];
}

const AREA_VERSION = 3; // змінювати, якщо змінюється правило підрахунку, щоб перерахувати кеш

// Окупована площа знімка як один (мульти)полігон; тримаємо в пам'яті на час запуску.
const shapes = new Map();
async function occupiedShape(id) {
  if (shapes.has(id)) return shapes.get(id);
  const g = await getJSON(`https://deepstatemap.live/api/history/${id}/geojson`);
  const polys = g.features
    .filter(f => isOccupied(String(f.properties?.name || '')))
    .flatMap(f => polygonsOf(f.geometry))
    .filter(c => c.length && c[0].length >= 4)
    .map(c => turf.polygon(c))
    .filter(p => IN_UKRAINE(turf.centroid(p).geometry.coordinates));
  // Об'єднуємо, щоб не рахувати двічі ділянки, які можуть перекриватися.
  const merged = polys.length > 1 ? turf.union(turf.featureCollection(polys)) : polys[0];
  shapes.set(id, merged);
  return merged;
}

async function snapshotArea(id) {
  await fs.mkdir(CACHE, { recursive: true });
  const file = path.join(CACHE, `${id}.json`);
  try { const c = JSON.parse(await fs.readFile(file, 'utf8')); if (c.v === AREA_VERSION) return c.areaKm2; } catch {}
  const areaKm2 = +(turf.area(await occupiedShape(id)) / 1e6).toFixed(2);
  await fs.writeFile(file, JSON.stringify({ id, v: AREA_VERSION, areaKm2 }));
  return areaKm2;
}

// Між двома знімками окремо: що рф захопила (є в B, немає в A) і що звільнено (є в A, немає в B).
// Чиста зміна = захоплено − звільнено.
const DIFF_CACHE = path.join(DATA, 'cache', 'deepstate-diff');
async function snapshotDiff(idA, idB) {
  await fs.mkdir(DIFF_CACHE, { recursive: true });
  const file = path.join(DIFF_CACHE, `${idA}-${idB}.json`);
  try { const c = JSON.parse(await fs.readFile(file, 'utf8')); if (c.v === AREA_VERSION) return c; } catch {}
  const A = await occupiedShape(idA), B = await occupiedShape(idB);
  const km2 = f => (f ? turf.area(f) / 1e6 : 0);
  const res = { v: AREA_VERSION, idA, idB,
    gained: +km2(turf.difference(turf.featureCollection([B, A]))).toFixed(1),
    lost: +km2(turf.difference(turf.featureCollection([A, B]))).toFixed(1) };
  await fs.writeFile(file, JSON.stringify(res));
  return res;
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
  let seen = false; // до першого знімка карти (квітень 2022) місяці порожні
  for (const y of YEARS) {
    monthly[y] = [];
    for (let m = 1; m <= 12; m++) {
      const a = areas[`${y}-${pad(m)}`];
      const b = areas[m === 12 ? `${y + 1}-01` : `${y}-${pad(m + 1)}`];
      if (!a && !seen) { monthly[y].push(null); continue; }
      seen = true;
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
  // Захоплено / звільнено по місяцях (геометрично)
  const gained = {}, liberated = {}, partialGained = {}, partialLiberated = {};
  for (const y of YEARS) {
    gained[y] = []; liberated[y] = [];
    for (let m = 1; m <= 12; m++) {
      const a = areas[`${y}-${pad(m)}`];
      const b = areas[m === 12 ? `${y + 1}-01` : `${y}-${pad(m + 1)}`];
      if (monthly[y][m - 1] === undefined) break;
      if (!a || !b) { gained[y].push(null); liberated[y].push(null); continue; }
      const d = await snapshotDiff(a.snapshotId, b.snapshotId);
      gained[y].push(d.gained); liberated[y].push(d.lost);
    }
    if (partial[y]) {
      const a = areas[`${y}-${pad(partial[y].month)}`];
      const d = await snapshotDiff(a.snapshotId, latest.id);
      partialGained[y] = { ...partial[y], value: d.gained }; partialLiberated[y] = { ...partial[y], value: d.lost };
    }
  }
  // Ковзні тижні для головної: від останнього знімка назад по 7 діб (знімки бувають не щодня —
  // беремо останній знімок не пізніше потрібного моменту). Найсвіжіший тиждень — ще й захоплене/звільнене окремо.
  const WEEKS_BACK = 8, weekSnaps = [];
  for (let k = 0; k <= WEEKS_BACK; k++) {
    const t = new Date(Date.parse(latest.createdAt) - k * 7 * 864e5 + 60e3).toISOString();
    const s = before(t);
    if (s) weekSnaps.push(s);
  }
  const weekly = [];
  for (let k = 0; k + 1 < weekSnaps.length; k++) {
    const b = weekSnaps[k], a = weekSnaps[k + 1];
    if (a.id === b.id) continue;
    weekly.unshift({ from: a.createdAt.slice(0, 10), to: b.createdAt.slice(0, 10),
      net: +((await snapshotArea(b.id)) - (await snapshotArea(a.id))).toFixed(1) });
  }
  let lastWeek = null;
  if (weekSnaps.length > 1) {
    const d = await snapshotDiff(weekSnaps[1].id, weekSnaps[0].id);
    lastWeek = { from: weekSnaps[1].createdAt.slice(0, 10), to: weekSnaps[0].createdAt.slice(0, 10), gained: d.gained, liberated: d.lost };
    log(`DeepState: останній тиждень ${lastWeek.from}…${lastWeek.to}: +${d.gained} / −${d.lost} км²`);
  }
  // Останні 4 тижні — для «ціни 1 км²» на головній (втрати за ці дні ÷ захоплене)
  let last4w = null;
  if (weekSnaps.length > 4) {
    const d = await snapshotDiff(weekSnaps[4].id, weekSnaps[0].id);
    last4w = { from: weekSnaps[4].createdAt.slice(0, 10), to: weekSnaps[0].createdAt.slice(0, 10), gained: d.gained, liberated: d.lost };
    log(`DeepState: останні 4 тижні ${last4w.from}…${last4w.to}: +${d.gained} / −${d.lost} км²`);
  }
  return { monthly, partial, partialPrevYear, gained, liberated, partialGained, partialLiberated, weekly, lastWeek, last4w,
    latest: { area: latestArea, at: latest.createdAt }, boundaries: areas };
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
      daily: genStaffDaily(gsRecs, 'personnel_units', DAILY_FROM),
    },
    territory: {
      source: 'DeepState (deepstatemap.live), різниця знімків карти на 1-ше число',
      unit: 'км²',
      monthly: territory.monthly,
      partial: territory.partial,
      partialPrevYear: territory.partialPrevYear,
      gained: territory.gained,            // захоплено рф за місяць, км²
      liberated: territory.liberated,      // звільнено за місяць, км²
      partialGained: territory.partialGained,
      partialLiberated: territory.partialLiberated,
      occupiedNow: territory.latest.area,
      asOf: territory.latest.at.slice(0, 10),
      boundaries: territory.boundaries,
      weekly: territory.weekly,            // ковзні тижні до останнього знімка, км² (захоплене мінус звільнене)
      lastWeek: territory.lastWeek,        // найсвіжіший тиждень: захоплено / звільнено окремо
      last4w: territory.last4w,            // останні 4 тижні: захоплено / звільнено окремо
    },
    // Техніка рф за добу (останні 60 днів), та сама логіка днів, що й у personnel.daily
    equipment: (() => {
      const out = {};
      for (const k of EQUIPMENT) {
        const d = genStaffDaily(gsRecs, k, ymd(new Date(Date.parse(personnel.lastDate) - 61 * 864e5)));
        out[k] = d.values.slice(-60);
        out.start ??= ymd(new Date(Date.parse(d.start) + (d.values.length - out[k].length) * 864e5));
      }
      out.totals = Object.fromEntries(EQUIPMENT.map(k => [k, gsRecs[personnel.lastDate][k]]));   // накопичено з початку війни
      return out;
    })(),
    oilGas: manual.oilGas,
    oilGasYears: manual.oilGasYears,
  };

  // Невелика самоперевірка: щоб збій джерела не зіпсував сторінку.
  const problems = [];
  for (const y of YEARS) {
    // Поточний рік на початку січня ще не має жодного повного місяця — тоді досить неповного.
    const ok = (src) => src.monthly[y]?.some(v => v != null) || (y === THIS_YEAR && (src.partial?.[y] || !src.monthly[y]?.length));
    if (!ok(data.personnel)) problems.push(`немає втрат за ${y}`);
    if (!ok(data.territory)) problems.push(`немає території за ${y}`);
  }
  if (data.territory.occupiedNow < 100000 || data.territory.occupiedNow > 140000) problems.push(`дивна загальна площа: ${data.territory.occupiedNow}`);
  if (problems.length) throw new Error('Дані не пройшли перевірку: ' + problems.join('; '));

  await fs.writeFile(path.join(DATA, 'data.json'), JSON.stringify(data, null, 2));
  await fs.writeFile(path.join(DATA, 'data.js'), `// Згенеровано scripts/update-data.mjs — не редагувати вручну\nwindow.PEREMOGIUM_DATA = ${JSON.stringify(data)};\n`);
  log(`Готово: data/data.json, data/data.js (${data.generatedAt})`);
}

main().catch(e => { console.error('✗', e.message); process.exit(1); });

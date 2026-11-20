// Оновлення ударів по НПЗ рф для сторінки «НПЗдець».
//
// Джерело: українська Вікіпедія, «Перелік атак БпЛА по російських цілях (РІК)» — таблиця, де є лише
// удари з документально підтвердженими наслідками, і кожен рядок має посилання на джерело.
// Скрипт бере таблицю поточного (і попереднього) року, знаходить рядки про НПЗ, зіставляє їх із заводами
// з data/npz.js (поле match) і ДОДАЄ нові удари. Нічого не видаляє і не змінює вже наявні рядки,
// тож ручні правки в data/npz.js не губляться.
//
// Запуск: npm run update:npz   (у GitHub Actions — щодня разом з основним оновленням)
// Якщо Вікіпедія недоступна, скрипт пише попередження і завершується без змін (не ламає публікацію).

import { readFile, writeFile } from 'node:fs/promises';

const FILE = new URL('../data/npz.js', import.meta.url);
const UA = 'Mozilla/5.0 (compatible; peremogium-bot/1.0)';
const PREFIX = 'window.NPZ_DATA = ';

// Рядок про НПЗ, якщо об'єкт або опис згадує нафтопереробку
const IS_REFINERY = /НПЗ|нафтоперероб|ТАНЕКО|Танеко|ТАІФ|Кінеф|КІНЕФ|ЯНОС|Уфанєфтєхім|Новойл|Салават/i;
// Не НПЗ, хоч і схожі слова
const NOT_REFINERY = /нафтобаз|нафтоперекачув|нафтопереробн(а|і) станц|нафтохімічн|Нижньокамськнафтохім|Тольятті|термінал(?!.*НПЗ)/i;
// Спроби без наслідків не рахуємо
const FAILED = /невдала спроба|РЕБ|спроба атаки|без пошкоджень/i;

function clean(s) {
  return s
    .replace(/<ref[^>]*\/>/g, '')
    .replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '')
    .replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, '$1')
    .replace(/'''?/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchWikitext(title) {
  const url = 'https://uk.wikipedia.org/w/api.php?' + new URLSearchParams({
    action: 'parse', page: title, prop: 'wikitext', format: 'json', formatversion: '2',
  });
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const j = await res.json();
  if (j.error) return null;                // сторінки ще немає (напр. новий рік)
  return j.parse.wikitext;
}

// Розбір таблиць розділу «Перелік атак»: колонки дата | регіон | об'єкт | влучання, з rowspan
function parseStrikes(t) {
  const named = {};
  for (const m of t.matchAll(/<ref name="?([^">/]+)"?\s*>\s*\{\{Cite web[^}]*?\|url=([^ |}]+)/g)) named[m[1]] = m[2];
  let sec = t.slice(Math.max(0, t.indexOf('== Перелік атак ==')));
  const cut = sec.indexOf('надводними');
  if (cut > 0) sec = sec.slice(0, cut);
  const out = [];
  for (const tbl of sec.match(/\{\|[\s\S]*?\n\|\}/g) || []) {
    let date = null;
    const carry = [['', 0], ['', 0], ['', 0]];
    for (const row of tbl.split(/\n\|-[^\n]*/).slice(1)) {
      const cells = ('\n' + row.replace(/^\n+|\n+$/g, '')).split(/\n\|/).map(c => c.trim()).filter(Boolean);
      if (cells[0] && /\d\d\.\d\d\.\d{4}/.test(cells[0])) {
        const [, d, m, y] = cells[0].match(/(\d\d)\.(\d\d)\.(\d{4})/);
        date = `${y}-${m}-${d}`;
        cells.shift();
      }
      const vals = [];
      for (let ci = 0; ci < 3; ci++) {
        if (carry[ci][1] > 0) { vals.push(carry[ci][0]); carry[ci][1]--; continue; }
        if (!cells.length) { vals.push(''); continue; }
        let c = cells.shift();
        const rs = c.match(/^\s*rowspan="?(\d+)"?\s*\|([\s\S]*)$/);
        if (rs) { c = rs[2]; carry[ci] = [c, +rs[1] - 1]; }
        vals.push(c);
      }
      if (cells.length) vals[2] += ' ' + cells.join(' ');
      const [region, obj, hit] = vals;
      if (!date || !obj) continue;
      let src = (hit.match(/url=(https?:\/\/[^ |}]+)/) || [])[1];
      if (!src) { const n = hit.match(/<ref name="?([^">/]+)"?\s*\/>/); if (n) src = named[n[1]]; }
      out.push({ date, region: clean(region), obj: clean(obj), hit: clean(hit), src });
    }
  }
  return out;
}

async function main() {
  const raw = await readFile(FILE, 'utf8');
  const head = raw.slice(0, raw.indexOf(PREFIX));
  const data = JSON.parse(raw.slice(raw.indexOf(PREFIX) + PREFIX.length).trim().replace(/;$/, ''));
  const refs = data.refineries.filter(r => r.match).map(r => ({ id: r.id, re: new RegExp(r.match) }));
  const find = s => refs.find(r => r.re.test(s))?.id;

  const today = new Date(Date.now() + 2 * 3600e3).toISOString().slice(0, 10); // ≈ київська дата
  const year = +today.slice(0, 4);
  const day = s => Date.parse(s + 'T00:00:00Z') / 864e5;
  const added = [], unknown = [];
  let checked = 0;

  for (const y of [year - 1, year]) {
    const title = `Перелік атак БпЛА по російських цілях (${y})`;
    let text;
    try { text = await fetchWikitext(title); }
    catch (e) { console.warn(`⚠️  Не вдалося завантажити «${title}»: ${e.message}`); continue; }
    if (!text) continue;
    checked++;
    const pageUrl = 'https://uk.wikipedia.org/wiki/' + encodeURIComponent(title.replace(/ /g, '_'));
    for (const x of parseStrikes(text)) {
      if (!IS_REFINERY.test(x.obj + ' ' + x.hit) || NOT_REFINERY.test(x.obj) || FAILED.test(x.hit)) continue;
      if (x.date > today) continue;
      const id = find(x.obj) || find(x.region + ' ' + x.obj);
      if (!id) { unknown.push(x); continue; }
      // той самий завод ±1 доба — вже є (перехід через північ, різні заводи Уфи за одну ніч тощо)
      if (data.strikes.some(s => s.id === id && Math.abs(day(s.date) - day(x.date)) <= 1)) continue;
      const s = { date: x.date, id, note: x.hit.slice(0, 200), src: x.src || pageUrl };
      data.strikes.push(s); added.push(s);
    }
  }

  if (!checked) { console.warn('⚠️  Жодної сторінки не перевірено — data/npz.js не змінено.'); return; }

  data.strikes.sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
  data.asOf = today;
  await writeFile(FILE, head + PREFIX + JSON.stringify(data, null, 1) + ';\n');

  console.log(`НПЗ: перевірено станом на ${today}. Нових ударів: ${added.length}.`);
  for (const s of added) console.log(`  + ${s.date} ${s.id}: ${s.note}`);
  if (unknown.length) {
    console.log(`Рядки про НПЗ, які не вдалося зіставити із заводом (додайте завод або поправте match у data/npz.js):`);
    for (const x of unknown) console.log(`  ? ${x.date} ${x.region} — ${x.obj}`);
  }
}

main().catch(e => { console.warn('⚠️  update-npz:', e.message); });

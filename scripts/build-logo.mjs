#!/usr/bin/env node
// Генерує логотип у кривих (SVG без залежності від шрифту).
// Шрифт: Unbounded (SIL Open Font License 1.1), https://github.com/googlefonts/unbounded
// Запуск: npm run logo

import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets');
const require = createRequire(import.meta.url);
const fontFile = w => require.resolve(`@fontsource/unbounded/files/unbounded-cyrillic-${w}-normal.woff`);

const SIZE = 100;          // кегль у одиницях SVG
const TRACKING = 0.04;     // розрядка, частка кегля
const r = n => +n.toFixed(2);

function textPath(font, text, size, tracking) {
  let x = 0, d = '';
  const glyphs = font.stringToGlyphs(text);
  glyphs.forEach((g, i) => {
    d += g.getPath(x, 0, size).toPathData(2);
    x += g.advanceWidth / font.unitsPerEm * size;
    if (i < glyphs.length - 1) x += font.getKerningValue(g, glyphs[i + 1]) / font.unitsPerEm * size + tracking * size;
  });
  const bb = new opentype.Path(); // габарити рахуємо по кривих
  glyphs.reduce((xx, g, i) => {
    const p = g.getPath(xx, 0, size); bb.extend(p);
    return xx + g.advanceWidth / font.unitsPerEm * size + (i < glyphs.length - 1 ? font.getKerningValue(g, glyphs[i + 1]) / font.unitsPerEm * size + tracking * size : 0);
  }, 0);
  return { d, box: bb.getBoundingBox() };
}

const svg = (vb, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;

const font = opentype.parse((await fs.readFile(fontFile(800))).buffer);
await fs.mkdir(OUT, { recursive: true });

// 1. Словесний знак — колір успадковується (currentColor)
const word = textPath(font, 'ПЕРЕМОГІУМ', SIZE, TRACKING);
const { x1, y1, x2, y2 } = word.box;
const vbWord = `${r(x1)} ${r(y1)} ${r(x2 - x1)} ${r(y2 - y1)}`;
await fs.writeFile(path.join(OUT, 'logo.svg'),
  svg(vbWord, `<path fill="currentColor" d="${word.d}"/>`, 'Перемогіум'));

// 2. Фавіконка — «П» на бурштиновому квадраті
const p = textPath(font, 'П', 64, 0);
const pw = p.box.x2 - p.box.x1, ph = p.box.y2 - p.box.y1;
const tx = 50 - p.box.x1 - pw / 2, ty = 50 - p.box.y1 - ph / 2;
await fs.writeFile(path.join(OUT, 'favicon.svg'), svg('0 0 100 100',
  `<rect width="100" height="100" rx="22" fill="#c98500"/><path fill="#080a0f" transform="translate(${r(tx)} ${r(ty)})" d="${p.d}"/>`,
  'Перемогіум'));

// 3. Вбудовуємо словесний знак у сторінку, щоб він брав колір із CSS
const inline = `<svg viewBox="${vbWord}" aria-hidden="true" focusable="false"><path fill="currentColor" d="${word.d}"/></svg>`;
for (const page of ['index.html', 'calendar.html', 'war.html']) {
  const file = path.join(ROOT, page);
  const html = await fs.readFile(file, 'utf8');
  if (!html.includes('<!--logo:start-->')) throw new Error(`У ${page} немає міток <!--logo:start--><!--logo:end-->`);
  await fs.writeFile(file, html.replace(/<!--logo:start-->[\s\S]*?<!--logo:end-->/, `<!--logo:start-->${inline}<!--logo:end-->`));
}

console.log('assets/logo.svg', vbWord);
console.log('assets/favicon.svg');

// Роки Перемогіуму: з 2022-го до останнього року в даних (новий рік з'являється сам 1 січня).
// Кольори років задаються тут, щоб усі сторінки фарбували той самий рік однаково.
// Підключати в <head> після data/data.js (якщо сторінка його використовує).
(() => {
  const PAL = { 2022: '#199e70', 2023: '#9085e9', 2024: '#d55181', 2025: '#3987e5', 2026: '#c98500', 2027: '#22b8cf' };
  const EXTRA = ['#8bc34a', '#eb6834', '#b07cc6', '#e05d8c'];   // 2028 і далі
  const color = y => PAL[y] || EXTRA[(y - 2028) % EXTRA.length];
  const kyivYear = new Date(Date.now() + 2 * 3600e3).getUTCFullYear();
  const D = window.PEREMOGIUM_DATA;
  const latest = D?.years?.length ? Math.max(...D.years) : kyivYear;
  const all = [];
  for (let y = 2022; y <= latest; y++) all.push(y);
  const root = document.documentElement;
  for (const y of all) root.style.setProperty('--y' + y, color(y));
  // Сторінки «рік проти попереднього»: з 2026 проти 2025 до останнього року, новіші — першими.
  const pairs = all.filter(y => y >= 2026).reverse();
  window.PEREMOGIUM_YEARS = { all, latest, color, pairs };
})();

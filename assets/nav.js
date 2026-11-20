// Закріплене меню: коли основне меню сторінки прокручене за верхній край,
// згори з'являється тонка смужка з логотипом і тими самими вкладками.
// Вкладки беруться з <nav class="tabs"> сторінки, тож нові розділи додаються лише туди.
(() => {
  const nav = document.querySelector('nav.tabs');
  if (!nav) return;

  const bar = document.createElement('div');
  bar.className = 'stickybar';
  bar.setAttribute('aria-hidden', 'true'); // для читачів екрана вже є основне меню
  const logo = document.querySelector('.logo svg');
  bar.innerHTML = `<div class="stickybar-in">
      <a class="stickybar-logo" href="./" tabindex="-1"><span class="word">${logo ? logo.outerHTML : 'Перемогіум'}</span><img class="mark" src="assets/favicon.svg" alt=""></a>
      <div class="stickybar-tabs"></div>
    </div>`;
  const tabs = bar.querySelector('.stickybar-tabs');
  nav.querySelectorAll('a').forEach(a => {
    const c = a.cloneNode(true);
    c.tabIndex = -1;
    c.removeAttribute('aria-current');
    tabs.appendChild(c);
  });
  document.body.appendChild(bar);

  // Активна вкладка завжди в полі зору, навіть якщо розділів багато і смужка прокручується вбік
  const showActive = () => {
    const on = tabs.querySelector('a.on');
    if (on) tabs.scrollLeft = on.offsetLeft - (tabs.clientWidth - on.offsetWidth) / 2;
  };

  // Тінь-підказка «є ще вкладки» з того боку, куди можна прокрутити
  const edges = () => {
    bar.classList.toggle('more-left', tabs.scrollLeft > 4);
    bar.classList.toggle('more-right', tabs.scrollLeft + tabs.clientWidth < tabs.scrollWidth - 4);
  };
  tabs.addEventListener('scroll', edges, { passive: true });
  addEventListener('resize', edges);

  new IntersectionObserver(([e]) => {
    const show = !e.isIntersecting && e.boundingClientRect.top < 0;
    bar.classList.toggle('show', show);
    if (show) { showActive(); edges(); }
  }).observe(nav);
})();

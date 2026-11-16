/* Stable scene IDs remain link targets; visible numbers follow the actual deck order. */
window.createPptLocator = function ({section, pages, url = 'index.html'}) {
  const normalized = section.split('.').map(n => /^\d+$/.test(n) ? Number(n) : n).join('.');
  const pad = n => String(n).padStart(2, '0');
  const entries = new Map(pages.map((page, index) => [page.id, {...page, page: index + 1}]));
  function label(id, step) {
    const page = entries.get(id);
    if (!page) return null;
    if (step !== undefined && (!Number.isInteger(step) || step < 0 || step >= Math.max(1, page.steps?.length || 0))) return null;
    return `P${normalized}-${pad(page.page)}` + (step === undefined ? '' : `-${pad(step + 1)}`);
  }
  function href(id, step = 0) {
    if (!label(id, step)) return null;
    const target = new URL(url, location.href);
    target.searchParams.set('mode', 'slides'); target.searchParams.set('step', step); target.hash = id;
    return target.href;
  }
  function bindPlayer() {
    const sync = event => {
      const params = new URLSearchParams(location.search);
      const mode = event?.detail?.mode || params.get('mode') || 'scroll';
      const step = mode === 'slides' ? (event?.detail?.step ?? Number(params.get('step') || 0)) : undefined;
      const value = label(location.hash.slice(1), step); if (!value) return;
      const badge = document.querySelector('#page-badge'); if (badge) badge.textContent = value;
      const position = document.querySelector('#position');
      if (position && !position.textContent.startsWith(value)) position.textContent = value + ' · ' + position.textContent;
    };
    document.addEventListener('lesson-position', sync);
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => sync(), {once:true});
    else sync();
  }
  return {label, href, entries, bindPlayer};
};

/* Show the archived source and navigate the lecture locations. */
(() => {
  const nav = document.querySelector('[data-evidence-stops]');
  if (!nav) return;
  const stops = JSON.parse(nav.dataset.evidenceStops);
  if (!stops.length || stops.some(stop => !document.getElementById(stop.id) || (stop.end && !document.getElementById(stop.end)))) {
    nav.textContent = '原文件定位缺失，请核对来源';
    return;
  }
  nav.id = 'course-source-nav';
  nav.setAttribute('aria-label', '原文件讲述定位');
  nav.innerHTML = '<span class="source-identity"></span><button data-prev>← 上一处</button><label>定位 <select aria-label="讲述位置"></select></label><button data-next>下一处 →</button><button data-locate>回到高亮</button><a data-original target="_blank" rel="noopener">查看原文件 ↗</a><a data-return>返回讲述页 ↗</a>';
  nav.querySelector('.source-identity').textContent = '本机归档 · ' + document.title;
  const original = nav.querySelector('[data-original]');
  if (nav.dataset.source) original.href = nav.dataset.source;
  else original.remove();
  nav.querySelector('[data-return]').href = '../../speaker.html';
  const select = nav.querySelector('select');
  stops.forEach((stop, i) => select.add(new Option(`${i + 1}/${stops.length} · ${stop.label}`, stop.id)));
  let at = Math.max(0, stops.findIndex(stop => '#' + stop.id === location.hash));
  const previous = nav.querySelector('[data-prev]'), next = nav.querySelector('[data-next]');
  function locate() { document.getElementById(stops[at].id).scrollIntoView({block:'center'}); }
  function show(scroll) {
    previous.disabled = at === 0;
    next.disabled = at === stops.length - 1;
    select.value = stops[at].id;
    document.querySelectorAll('[data-course-current]').forEach(node => node.removeAttribute('data-course-current'));
    CSS.highlights.delete('course-evidence-range');
    const start = document.getElementById(stops[at].id);
    if (stops[at].end) {
      const end = document.getElementById(stops[at].end);
      const range = document.createRange();
      range.setStartBefore(start); range.setEndAfter(end);
      CSS.highlights.set('course-evidence-range', new Highlight(range));
    } else start.setAttribute('data-course-current', '');
    if (scroll) locate();
  }
  function go(index) { location.hash = stops[index].id; }
  previous.onclick = () => go(at - 1);
  next.onclick = () => go(at + 1);
  select.onchange = () => { location.hash = select.value; };
  nav.querySelector('[data-locate]').onclick = locate;
  addEventListener('hashchange', () => {
    const index = stops.findIndex(stop => '#' + stop.id === location.hash);
    if (index >= 0) { at = index; show(true); }
  });
  const style = document.createElement('style');
  style.textContent = '::highlight(course-evidence-range){background:#ffedab;color:inherit}#course-source-nav{position:fixed;z-index:10000;bottom:12px;top:auto;left:50%;transform:translateX(-50%);width:max-content;max-width:calc(100vw - 24px);display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 14px;border:1px solid #b9c4b6;border-radius:8px;background:#f5f5ed;box-shadow:0 3px 18px #0002;color:#243c31;font:14px/1.5 system-ui,sans-serif}#course-source-nav button,#course-source-nav select{font:inherit;color:inherit;background:#fff;border:1px solid #b9c4b6;border-radius:4px;padding:5px 8px;cursor:pointer}#course-source-nav button:disabled{opacity:.45;cursor:default}#course-source-nav a{color:#24633c;text-decoration:underline;white-space:nowrap}#course-source-nav label{display:flex;align-items:center;gap:6px}#course-source-nav .source-identity{font-size:12px;color:#657061;white-space:nowrap}[data-course-current]{background:#ffedab;outline:2px solid #b78b28}@media(max-width:900px){#course-source-nav{flex-wrap:wrap;width:calc(100vw - 24px);box-sizing:border-box;gap:6px;padding:8px}#course-source-nav .source-identity{width:100%;text-align:center}}';
  document.head.append(style);
  show(Boolean(location.hash));
})();

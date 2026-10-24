/* 零件 .p-evidence：在课件页里沿真实请求记录定位（HTML 由 courseware/tools/tracekit.py 生成）。
 * 左侧观察点与播放器步骤一一对应（data-ev-steps）；右侧阅读视图写在页面里，原始记录是懒加载的
 * claude-tap 静态查看器，只通过 postMessage 定位（通道 course-trace-v1，见 trace-bridge.js），不读 iframe 的 DOM，file:// 下也能用。
 * 点带分组（data-ev-in）时，左侧先出分组标签：换组时停在新组里同一位置的观察点（2.1 p07 的 A/C/D 依据链）。
 * 放大窗口全页共用一个，带同样的观察点与视图切换；Esc 收起，在查看器里按 Esc 也收起。 */
(() => {
  const channel = 'course-trace-v1';
  const stages = [...document.querySelectorAll('.p-evidence[data-ev-steps]')];
  if (!stages.length) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'p-ev-dialog';
  dialog.setAttribute('aria-label', '放大查看本次请求记录');
  dialog.innerHTML = '<div class="p-ev-dialog-bar"><div class="p-ev-dialog-points" role="group" aria-label="定位观察点"></div>'
    + '<div class="p-ev-actions"><div class="p-ev-views" role="group" aria-label="记录展示方式"><button type="button" data-ev-view="reader">阅读视图</button><button type="button" data-ev-view="raw">原始记录</button></div>'
    + '<a data-ev-open target="_blank" rel="noopener">单独打开 ↗</a><button type="button" data-ev-close>收起记录 · Esc</button></div></div>'
    + '<div class="p-ev-reading"></div><iframe title="放大的 claude-tap 静态记录"></iframe>';
  document.body.append(dialog);
  const big = dialog.querySelector('iframe'), bigPoints = dialog.querySelector('.p-ev-dialog-points'), bigViews = dialog.querySelector('.p-ev-views');
  let active = null, returnFocus;
  const send = (target, key, expanded = false) => target?.contentWindow?.postMessage({ channel, key, expanded }, '*');
  const scenes = new Map();

  stages.forEach(stage => {
    const frame = stage.querySelector('iframe'), reading = stage.querySelector('.p-ev-reading');
    const s = {
      stage, frame, reading, steps: JSON.parse(stage.dataset.evSteps), viewer: stage.dataset.evViewer,
      buttons: [...stage.querySelectorAll('[data-ev-key]')], view: reading ? stage.dataset.evView : 'raw',
      scene: stage.closest('section'),
    };
    s.key = s.steps[0];
    scenes.set(stage, s);
    // 查看器加载时会抢焦点：演示模式翻到这一页、阅读模式滚到附近，或点了按钮才加载
    s.load = () => { if (!frame.getAttribute('src')) frame.src = frame.dataset.src; };
    if ('IntersectionObserver' in window) new IntersectionObserver((entries, o) => {
      if (document.body.dataset.mode !== 'slides' && entries.some(e => e.isIntersecting)) { s.load(); o.disconnect(); }
    }, { rootMargin: '300px' }).observe(stage);
    else s.load();
    // 首次加载也定位当前观察点；外层页面不跟着滚动由 tracekit 注入的 keep_scroll_inside 保证
    frame.addEventListener('load', () => send(frame, s.key));
    stage.querySelectorAll('[data-ev-view]').forEach(b => b.addEventListener('click', () => { s.view = b.dataset.evView; select(s, s.key); }));
    s.buttons.forEach(b => b.addEventListener('click', () => choose(s, b.dataset.evKey)));
    stage.querySelectorAll('[data-ev-group]').forEach(tab => tab.addEventListener('click', () => toGroup(s, tab.dataset.evGroup)));
    stage.querySelector('[data-ev-expand]').addEventListener('click', () => {
      active = s; returnFocus = document.activeElement;
      const tabs = [...stage.querySelectorAll('[data-ev-group]')].map(t => {
        const x = document.createElement('button');
        x.type = 'button'; x.dataset.evGroup = t.dataset.evGroup; x.textContent = t.textContent; x.title = t.title;
        x.addEventListener('click', () => toGroup(s, x.dataset.evGroup));
        return x;
      });
      bigPoints.replaceChildren(...tabs, ...s.buttons.map(b => {
        const x = document.createElement('button');
        x.type = 'button'; x.dataset.evKey = b.dataset.evKey; x.textContent = b.querySelector('b').textContent;
        if (b.dataset.evIn) x.dataset.evIn = b.dataset.evIn;
        x.addEventListener('click', () => choose(s, x.dataset.evKey));
        return x;
      }));
      bigViews.hidden = !reading;
      dialog.querySelector('.p-ev-reading').innerHTML = reading ? reading.innerHTML : '';
      s.load();
      if (big.dataset.src !== frame.dataset.src) { big.dataset.src = frame.dataset.src; big.src = frame.dataset.src; }
      dialog.showModal(); select(s, s.key);
    });
  });

  // 演示模式下点观察点 = 跳到对应步骤（播放器再派发 lesson-position）；不在步骤里的点和阅读模式只切换，不改地址
  function choose(s, key) {
    const i = s.steps.indexOf(key);
    if (document.body.dataset.mode === 'slides' && i >= 0 && s.scene) {
      const url = new URL(location.href); url.searchParams.set('step', String(i)); url.hash = s.scene.id;
      history.replaceState(null, '', url); window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else select(s, key);
  }
  // 换组：停在新组里同一位置的观察点
  function toGroup(s, group) {
    const from = s.buttons.find(b => b.dataset.evKey === s.key);
    const place = s.buttons.filter(b => b.dataset.evIn === from?.dataset.evIn).indexOf(from);
    const inNew = s.buttons.filter(b => b.dataset.evIn === group);
    if (inNew.length) choose(s, (inNew[place] || inNew[0]).dataset.evKey);
  }
  // 分组标签、本组按钮与观察说明跟着当前观察点（页面上和放大窗口里各一份）
  function mark(s, root = s.stage) {
    const group = s.buttons.find(b => b.dataset.evKey === s.key)?.dataset.evIn;
    root.querySelectorAll('[data-ev-key]').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.evKey === s.key)); if (b.dataset.evIn) b.hidden = b.dataset.evIn !== group; });
    root.querySelectorAll('[data-ev-group]').forEach(t => t.setAttribute('aria-pressed', String(t.dataset.evGroup === group)));
    root.querySelectorAll('[data-ev-observe]').forEach(o => { o.hidden = o.dataset.evObserve !== s.key; });
  }
  function show(s, root, frame) {
    root.querySelectorAll('[data-ev-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.evView === s.view)));
    const reading = root.querySelector('.p-ev-reading');
    if (reading) reading.hidden = s.view !== 'reader';
    frame.hidden = s.view !== 'raw';
    root.querySelectorAll('[data-ev-reading]').forEach(p => { p.hidden = p.dataset.evReading !== s.key; });
  }
  function select(s, key) {
    s.key = key; s.load();
    mark(s);
    show(s, s.stage, s.frame);
    const href = s.viewer + '&point=' + key;
    s.stage.querySelectorAll('[data-ev-open]').forEach(a => { a.href = href; });
    send(s.frame, key);
    if (active === s) {
      mark(s, bigPoints);
      show(s, dialog, big);
      dialog.querySelector('[data-ev-open]').href = href;
      if (dialog.open) send(big, key, true);
    }
  }
  function close() { if (dialog.open) dialog.close(); active = null; returnFocus?.focus(); }
  dialog.querySelector('[data-ev-close]').addEventListener('click', close);
  dialog.addEventListener('cancel', e => { e.preventDefault(); close(); });
  bigViews.querySelectorAll('[data-ev-view]').forEach(b => b.addEventListener('click', () => { if (active) { active.view = b.dataset.evView; select(active, active.key); } }));
  // 放大时按键不传给播放器，免得翻页；Esc 由 dialog 自己的 cancel 处理
  document.addEventListener('keydown', e => { if (dialog.open) e.stopImmediatePropagation(); }, true);
  big.addEventListener('load', () => { if (active) send(big, active.key, true); });

  window.addEventListener('message', event => {
    if (event.data?.channel !== channel) return;
    if (event.source === big.contentWindow) {
      if (event.data.escape) close();
      else if (active && event.data.ready && !event.data.key) send(big, active.key, true);
      return;
    }
    for (const s of scenes.values()) {
      if (event.source !== s.frame.contentWindow) continue;
      if (event.data.ready && !event.data.key) send(s.frame, s.key);
    }
  });
  document.addEventListener('lesson-position', event => {
    const id = window.lesson.scenes[event.detail.current]?.id;
    const s = [...scenes.values()].find(x => x.scene?.id === id);
    if (s && document.body.dataset.mode === 'slides') select(s, s.steps[Math.min(s.steps.length - 1, event.detail.step)]);
    else if (!s && dialog.open) close();
  });
  // 初始状态只更新按钮与视图，不加载查看器
  scenes.forEach(s => { mark(s); show(s, s.stage, s.frame); });
  // 直接打开某页某步（地址里带 #p22 和 step）时，播放器的第一次定位早于本脚本，这里补一次
  const first = [...scenes.values()].find(x => x.scene?.id === location.hash.slice(1));
  if (first && document.body.dataset.mode === 'slides') {
    const n = Number(new URLSearchParams(location.search).get('step')) || 0;
    select(first, first.steps[Math.min(first.steps.length - 1, n)]);
  }
})();

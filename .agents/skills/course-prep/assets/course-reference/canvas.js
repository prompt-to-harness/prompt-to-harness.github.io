/* 白板页（草稿用）：一页里的一块白板随步骤画出新内容，镜头跟着移动。
 * data-on="a-b"：只在第 a 到第 b 步显示（省略 b 表示到最后一步）；没讲到的内容不出现。
 * data-cams='[[x, y, w, h], …]'：每一步镜头框住白板上的哪块，按当前视口的比例等比放进去并居中；步数超过列表长度时沿用最后一个。
 * 白板右上角的“全屏”按钮把白板铺满屏幕（留出底部的上一步、下一步），镜头按屏幕比例重算；Esc 或再点一次退出。
 * 阅读模式只显示最后一步的画面。过渡动画只在页面排好版之后打开（.x-ready）：
 * 载入时就带着过渡，Chrome 会沿用缩放前画好的文字，位置和实际对不上。播放器每次推进都会派发 lesson-position（shared/app.js）。 */
(() => {
  const boards = [...document.querySelectorAll('.scene')].map((section, index) => ({ index, canvas: section.querySelector('.x-canvas') })).filter(b => b.canvas);
  let position = { current: 0, step: 0, mode: document.body.dataset.mode };

  const fit = (svg, [x, y, w, h]) => {
    const [, , vw, vh] = svg.getAttribute('viewBox').split(' ').map(Number);
    const s = Math.min(vw / w, vh / h);
    return `translate(${(vw - w * s) / 2 - x * s}px,${(vh - h * s) / 2 - y * s}px) scale(${s})`;
  };

  const apply = () => {
    const scenes = window.lesson ? window.lesson.scenes : [];
    boards.forEach(({ index, canvas }) => {
      const last = Math.max(0, (scenes[index]?.steps?.length || 1) - 1);
      const s = position.mode === 'slides' && index === position.current ? position.step : last;
      const svg = canvas.querySelector('svg');
      canvas.querySelectorAll('[data-on]').forEach(el => {
        const [a, b] = el.dataset.on.split('-');
        el.classList.toggle('x-off', !(s >= Number(a) && s <= (b ? Number(b) : last)));
        if (el.dataset.cams) {
          const cams = JSON.parse(el.dataset.cams);
          el.style.transform = fit(svg, cams[Math.min(s, cams.length - 1)]);
        }
      });
    });
  };

  // 全屏：把白板挪进一个铺满屏幕的层（底部留给播放器的按钮），视口高度按屏幕比例改，退出时挪回原处
  const layer = Object.assign(document.createElement('div'), { className: 'x-full-layer' });
  const style = document.createElement('style');
  style.textContent = '.x-full-btn{position:absolute;top:6px;right:6px;z-index:2;font:inherit;font-size:14px;padding:4px 10px;border:1px solid #243042;border-radius:6px;background:#FFFDF7;color:#243042;cursor:pointer;opacity:.75}'
    + '.x-full-btn:hover{opacity:1}body[data-mode=scroll] .x-full-btn{display:none}'
    + '.x-full-layer{position:fixed;left:0;right:0;top:0;z-index:50;background:#F5F4ED;padding:12px 24px;box-sizing:border-box;display:none}'
    + '.x-full-layer.is-open{display:block}.x-full-layer .x-canvas,.x-full-layer svg{width:100%;height:100%}';
  document.head.append(style);
  document.body.append(layer);
  let open = null;

  const settle = canvas => {
    canvas.classList.remove('x-ready');
    apply();
    setTimeout(() => canvas.classList.add('x-ready'), 300);
  };
  const enter = canvas => {
    const footer = document.querySelector('.lesson-footer');
    layer.style.bottom = `${footer ? window.innerHeight - footer.getBoundingClientRect().top : 0}px`;
    const svg = canvas.querySelector('svg');
    open = { canvas, home: canvas.parentNode, next: canvas.nextSibling, viewBox: svg.getAttribute('viewBox') };
    layer.classList.add('is-open');
    layer.append(canvas);
    const r = layer.getBoundingClientRect();
    const vw = Number(open.viewBox.split(' ')[2]);
    svg.setAttribute('viewBox', `0 0 ${vw} ${Math.round(vw * (r.height - 24) / (r.width - 48))}`);
    canvas.querySelector('.x-full-btn').textContent = '退出全屏';
    settle(canvas);
    document.documentElement.requestFullscreen?.().catch(() => {});
  };
  const leave = () => {
    if (!open) return;
    const { canvas, home, next, viewBox } = open;
    open = null;
    canvas.querySelector('svg').setAttribute('viewBox', viewBox);
    home.insertBefore(canvas, next);
    layer.classList.remove('is-open');
    canvas.querySelector('.x-full-btn').textContent = '全屏';
    settle(canvas);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };
  boards.forEach(({ canvas }) => {
    const button = Object.assign(document.createElement('button'), { type: 'button', className: 'x-full-btn', textContent: '全屏' });
    button.addEventListener('click', event => { event.stopPropagation(); open ? leave() : enter(canvas); });
    canvas.append(button);
  });
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) leave(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') leave(); });

  document.addEventListener('lesson-position', e => {
    position = e.detail;
    if (open && (position.mode !== 'slides' || boards.find(b => b.canvas === open.canvas).index !== position.current)) leave();
    apply();
  });
  // 本脚本在播放器之后加载，首次派发可能已错过：按当前画面补算一次
  const visible = [...document.querySelectorAll('.scene')].findIndex(s => !s.hidden);
  position = { current: Math.max(0, visible), step: Number(new URLSearchParams(location.search).get('step')) || 0, mode: document.body.dataset.mode };
  apply();
  window.addEventListener('load', () => setTimeout(() => boards.forEach(b => b.canvas.classList.add('x-ready')), 300));
})();

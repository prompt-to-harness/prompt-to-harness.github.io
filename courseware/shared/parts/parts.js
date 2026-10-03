/* 课件零件库 v0.1 的运行部分：
 * 1. 注入一次手绘抖动滤镜 #p-rough，供零件的边框使用；
 * 2. 标注了 expressive 的页，在阅读模式里显示一行提示，提醒这页等待定制重刷。
 * 零件本身都是 HTML + CSS，不依赖这里的脚本也能显示（只是边框不抖）。 */
(() => {
  if (!document.getElementById('p-rough')) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    svg.innerHTML = '<filter id="p-rough" x="-5%" y="-5%" width="110%" height="110%">'
      + '<feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="7"/>'
      + '<feDisplacementMap in="SourceGraphic" scale="3"/></filter>';
    document.body.prepend(svg);
  }
  // data-only="n"：高亮带、括号等只在第 n 步出现；其余步骤与阅读模式隐藏。
  // 正式播放器每次翻页/推进都会派发 lesson-position（shared/app.js）。
  const applyOnly = (current, step, mode) => {
    document.querySelectorAll('.scene').forEach((section, index) => {
      section.querySelectorAll('[data-only]').forEach(el => {
        el.classList.toggle('p-only-off', !(mode === 'slides' && index === current && Number(el.dataset.only) === step));
      });
    });
  };
  document.addEventListener('lesson-position', event => applyOnly(event.detail.current, event.detail.step, event.detail.mode));
  // 本脚本在播放器之后加载，首次派发可能已错过：按当前画面补算一次。
  const scenes = [...document.querySelectorAll('.scene')];
  const visible = scenes.findIndex(s => !s.hidden);
  if (visible >= 0) applyOnly(visible, Number(new URLSearchParams(location.search).get('step')) || 0, document.body.dataset.mode);
  // 终端块 .p-term[data-copy]：右上角加复制按钮，复制属性里的原始命令（不含提示符 $ 与画面换行）。
  const addCopy = () => document.querySelectorAll('.p-term[data-copy]').forEach(term => {
    if (term.querySelector('.p-term-copy')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'p-term-copy';
    button.textContent = '复制';
    button.setAttribute('aria-label', '复制命令');
    button.addEventListener('click', async event => {
      event.stopPropagation();
      const text = term.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const area = Object.assign(document.createElement('textarea'), { value: text });
        document.body.append(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      button.textContent = '已复制';
      setTimeout(() => { button.textContent = '复制'; }, 1500);
    });
    term.append(button);
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addCopy); else addCopy();
  const lesson = window.lesson;
  if (!lesson) return;
  const mark = () => lesson.scenes.forEach(scene => {
    if (!scene.expressive) return;
    const section = document.getElementById(scene.id);
    if (!section || section.querySelector('.p-expressive-note')) return;
    const note = document.createElement('p');
    note.className = 'p-expressive-note';
    note.textContent = `待定制：${scene.expressive}`;
    section.querySelector('.scene-content')?.append(note);
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mark); else mark();
})();

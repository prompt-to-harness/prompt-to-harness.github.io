/* Canvas and chapter progress for 1.2; navigation remains in shared/app.js. */
(() => {
  const lesson = window.lesson;
  const sections = [...document.querySelectorAll('.scene')];
  const root = document.documentElement;
  let lastScale;
  let position = {current: Math.max(0, lesson.scenes.findIndex(s => `#${s.id}` === location.hash)), step: Number(new URLSearchParams(location.search).get('step')) || 0, mode: document.body.dataset.mode};
  sections.forEach(section => {
    const bar = document.createElement('div');
    bar.className = 'segment-bar';
    bar.setAttribute('aria-label', '本节学习进度');
    lesson.segments.forEach(segment => {
      const node = document.createElement('div');
      node.className = 'segment'; node.style.flex = segment.seconds;
      const label = document.createElement('span'); label.textContent = segment.label;
      const track = document.createElement('div'); track.className = 'segment-track';
      const fill = document.createElement('div'); fill.className = 'segment-fill';
      track.append(fill); node.append(label, track); bar.append(node);
    });
    const status = document.createElement('p'); status.className = 'step-status';
    section.append(status, bar);
    section.querySelectorAll('.lesson-diagram').forEach(svg => {
      const wrapper = document.createElement('div'); wrapper.className = 'diagram-scroll';
      wrapper.tabIndex = 0; wrapper.setAttribute('role', 'region');
      wrapper.setAttribute('aria-label', '图示；窄屏可左右滚动查看');
      svg.replaceWith(wrapper); wrapper.append(svg);
    });
  });
  function update() {
    const active = lesson.scenes[position.current];
    sections.forEach((section, index) => {
      section.querySelector('.step-status').textContent = position.mode === 'slides'
        ? `第 ${position.step + 1} / ${active.steps.length} 步 · 方向键推进，末步看全图`
        : `${lesson.scenes[index].steps.length} 个讲述步骤 · 阅读模式已展开全部内容`;
      section.querySelectorAll('.segment').forEach((node, i) => {
        const segment = lesson.segments[i];
        const indices = lesson.scenes.map((s, n) => s.segment === segment.label ? n : -1).filter(n => n >= 0);
        let elapsed = 0;
        for (const n of indices) {
          if (n < position.current) elapsed += lesson.scenes[n].seconds;
          else if (n === position.current) elapsed += lesson.scenes[n].seconds * (position.step + 1) / lesson.scenes[n].steps.length;
        }
        node.querySelector('.segment-fill').style.width = `${Math.min(100, elapsed / segment.seconds * 100)}%`;
        node.classList.toggle('current', active.segment === segment.label);
        if (active.segment === segment.label) node.setAttribute('aria-current', 'step'); else node.removeAttribute('aria-current');
      });
    });
    fit();
  }
  function fit() {
    if (document.body.dataset.mode !== 'slides') { lastScale = undefined; return; }
    const toolbar = document.querySelector('.toolbar').getBoundingClientRect().height;
    const footer = document.querySelector('.lesson-footer').getBoundingClientRect().height;
    const height = Math.max(1, innerHeight - toolbar - footer);
    const scale = Math.min(innerWidth / 1280, height / 720);
    const left = (innerWidth - 1280 * scale) / 2;
    const top = (height - 720 * scale) / 2;
    root.style.setProperty('--slide-scale', scale);
    root.style.setProperty('--frame-height', `${height}px`);
    root.style.setProperty('--frame-left', `${left}px`);
    root.style.setProperty('--frame-top', `${top}px`);
    root.style.setProperty('--camera-left', `${left + 956 * scale}px`);
    root.style.setProperty('--camera-top', `${toolbar + top + 24 * scale}px`);
    // Chromium can retain stale SVG text paint coordinates across ancestor
    // scale changes. Fresh SVG nodes keep text and shapes on the same canvas.
    if (lastScale !== scale) {
      document.querySelectorAll('.lesson-diagram').forEach(svg => svg.replaceWith(svg.cloneNode(true)));
      lastScale = scale;
    }
  }
  document.addEventListener('lesson-position', event => { position = event.detail; update(); });
  window.addEventListener('resize', fit);
  document.fonts.ready.then(fit);
  update();
})();

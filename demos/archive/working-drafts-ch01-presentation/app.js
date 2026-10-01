/* One set of lesson nodes, two presentation modes. No external services. */
(() => {
  const scenes = window.lesson.scenes;
  const lesson = document.querySelector('#lesson');
  const nav = document.querySelector('#scene-nav');
  const feedback = document.querySelector('#feedback');
  const escape = (value) => value.replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const renderCommands = (commands = []) => commands.length ? `<dl class="command-list">${commands.map(item => `<div><dt>${escape(item.label)}</dt><dd><code>${escape(item.command)}</code>${escape(item.description)}</dd></div>`).join('')}</dl>` : '';
  let mode = new URLSearchParams(location.search).get('mode') === 'slides' ? 'slides' : 'scroll';
  let current = Math.max(0, scenes.findIndex(scene => `#${scene.id}` === location.hash));
  let observer;
  let feedbackTimer;

  lesson.innerHTML = scenes.map((scene, index) => `<section class="scene" id="${scene.id}" aria-labelledby="heading-${scene.id}" data-index="${index}">
    <p class="scene-kicker">${scene.kicker}</p>
    <h2 id="heading-${scene.id}" tabindex="-1">${scene.title}</h2>
    <p class="lede">${scene.lead}</p>
    <div class="scene-content">${scene.prompt ? `<div class="prompt"><div class="prompt-label"><span>发给 Codex 的请求</span><button type="button" class="copy-button" data-copy="${index}">复制请求</button></div><pre>${escape(scene.prompt)}</pre></div>` : ''}${renderCommands(scene.commands)}${scene.html}</div>
  </section>`).join('');
  nav.innerHTML = scenes.map((scene, index) => `<a href="#${scene.id}" data-index="${index}"><span>${String(index + 1).padStart(2, '0')}</span>${scene.label}</a>`).join('');
  const sections = [...lesson.querySelectorAll('.scene')];

  function announce(message) {
    clearTimeout(feedbackTimer);
    feedback.textContent = message;
    feedbackTimer = setTimeout(() => { feedback.textContent = ''; }, 5500);
  }
  function writeUrl() {
    const url = new URL(location.href);
    url.searchParams.set('mode', mode);
    url.hash = scenes[current].id;
    // Some file:// browsers reject History API writes; navigation still works.
    try { history.replaceState(null, '', url); } catch (_) { /* Direct-file preview. */ }
  }
  function updatePosition() {
    nav.querySelectorAll('a').forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    document.querySelector('#position').textContent = `${String(current + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')} · ${scenes[current].label}`;
    document.querySelector('#previous').disabled = current === 0;
    document.querySelector('#next').disabled = current === scenes.length - 1;
    document.querySelector('#previous').textContent = mode === 'slides' ? '← 上一页' : '← 上一段';
    document.querySelector('#next').textContent = mode === 'slides' ? '下一页 →' : '下一段 →';
    writeUrl();
  }
  function watchScroll() {
    observer?.disconnect();
    if (mode !== 'scroll') return;
    observer = new IntersectionObserver(() => {
      if (mode !== 'scroll') return;
      const readingLine = Math.min(240, innerHeight * .3);
      let index = 0;
      sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= readingLine) index = i; });
      if (index !== current) { current = index; updatePosition(); }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
  function go(index, focus = false) {
    current = Math.max(0, Math.min(index, scenes.length - 1));
    sections.forEach((section, i) => { section.hidden = mode === 'slides' && i !== current; });
    updatePosition();
    if (mode === 'scroll') sections[current].scrollIntoView({ block: 'start', behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
    if (focus) sections[current].querySelector('h2').focus({ preventScroll: true });
  }
  function setMode(nextMode) {
    observer?.disconnect();
    const settings = document.querySelector('.presentation-tools');
    const focusInSettings = settings.contains(document.activeElement);
    settings.open = false;
    mode = nextMode;
    document.body.dataset.mode = mode;
    if (mode === 'scroll') {
      document.body.classList.remove('recording');
      document.querySelector('#record-toggle').setAttribute('aria-pressed', 'false');
      document.querySelector('#exit-recording').hidden = true;
    }
    document.querySelectorAll('[data-mode-button]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.modeButton === mode)));
    document.querySelector('.keyboard-hint').textContent = mode === 'slides' ? '← → 翻页 · T 切换展示方式' : 'T 切换展示方式';
    go(current, focusInSettings || document.activeElement.hidden);
    requestAnimationFrame(watchScroll);
  }
  nav.addEventListener('click', event => {
    const link = event.target.closest('a[data-index]');
    if (!link) return;
    event.preventDefault();
    go(Number(link.dataset.index), true);
  });
  document.querySelectorAll('[data-mode-button]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.modeButton)));
  document.querySelector('#previous').addEventListener('click', () => go(current - 1));
  document.querySelector('#next').addEventListener('click', () => go(current + 1));

  lesson.addEventListener('click', async event => {
    const copy = event.target.closest('[data-copy]');
    if (copy) {
      copy.disabled = true;
      copy.textContent = '复制中';
      try {
        await navigator.clipboard.writeText(scenes[Number(copy.dataset.copy)].prompt);
        copy.textContent = '已复制';
      } catch (_) {
        copy.textContent = '复制请求';
        announce('浏览器未允许自动复制，请直接选中请求文字复制。');
      } finally { copy.disabled = false; }
    }
    const reveal = event.target.closest('.reveal-button');
    if (reveal) {
      const answer = document.getElementById(reveal.getAttribute('aria-controls'));
      answer.hidden = !answer.hidden;
      reveal.setAttribute('aria-expanded', String(!answer.hidden));
      reveal.textContent = answer.hidden ? '查看解析' : '收起解析';
    }
  });
  const cameraToggle = document.querySelector('#camera-toggle');
  cameraToggle.addEventListener('click', () => {
    const hidden = document.body.classList.toggle('camera-hidden');
    cameraToggle.setAttribute('aria-pressed', String(!hidden));
    cameraToggle.textContent = hidden ? '显示人像辅助框' : '隐藏人像辅助框';
  });
  function toggleRecording() {
    const recording = !document.body.classList.contains('recording');
    if (recording && mode !== 'slides') setMode('slides');
    document.body.classList.toggle('recording', recording);
    document.querySelector('.presentation-tools').open = false;
    document.querySelector('#record-toggle').setAttribute('aria-pressed', String(recording));
    const exit = document.querySelector('#exit-recording');
    exit.hidden = !recording;
    requestAnimationFrame(() => {
      go(current, !recording);
      if (recording) exit.focus({ preventScroll: true });
    });
  }
  document.querySelector('#record-toggle').addEventListener('click', toggleRecording);
  document.querySelector('#exit-recording').addEventListener('click', toggleRecording);
  const fullscreen = document.querySelector('#fullscreen');
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch (_) { announce('当前浏览器未允许网页全屏，请使用浏览器菜单中的全屏功能。'); }
  });
  document.addEventListener('fullscreenchange', () => { fullscreen.textContent = document.fullscreenElement ? '退出全屏' : '全屏'; });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    const interactive = event.target.closest('button, a, summary');
    if (event.key.toLowerCase() === 't') { event.preventDefault(); setMode(mode === 'slides' ? 'scroll' : 'slides'); }
    if (event.key.toLowerCase() === 'r') { event.preventDefault(); toggleRecording(); }
    if (mode === 'slides') {
      if (['ArrowRight', 'PageDown'].includes(event.key) || (event.key === ' ' && !interactive)) { event.preventDefault(); go(current + 1); }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); go(current - 1); }
      if (event.key === 'Home') { event.preventDefault(); go(0); }
      if (event.key === 'End') { event.preventDefault(); go(scenes.length - 1); }
    }
  });
  window.addEventListener('hashchange', () => {
    const index = scenes.findIndex(scene => `#${scene.id}` === location.hash);
    if (index !== -1) go(index);
  });
  setMode(mode);
  document.fonts.ready.then(() => { if (mode === 'scroll') go(current); });
})();

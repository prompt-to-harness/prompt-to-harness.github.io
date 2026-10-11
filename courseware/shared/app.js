/* One set of lesson nodes, two presentation modes. No external services. */
(() => {
  const scenes = window.lesson.scenes;
  const lesson = document.querySelector('#lesson');
  const nav = document.querySelector('#scene-nav');
  const feedback = document.querySelector('#feedback');
  const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
  const adjacentLessons = {
    previous: chapterLinks.find(link => link.textContent.includes('上一节')),
    next: chapterLinks.find(link => link.textContent.includes('下一节')),
  };
  const lessonButtons = {};
  for (const [id, label, direction] of [['previous', '← 上一节', -1], ['next', '下一节 →', 1]]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `${id}-lesson`;
    button.textContent = label;
    button.setAttribute('aria-label', direction < 0 ? '上一节' : '下一节');
    button.hidden = true;
    button.addEventListener('click', () => navigateLesson(direction));
    document.querySelector(`#${id}`).insertAdjacentElement(direction < 0 ? 'beforebegin' : 'afterend', button);
    lessonButtons[id] = button;
  }
  const escape = (value) => value.replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  // 每页的原文链接（scene.refs）：live 在画面最下一行随最后一步出现，录制时点开；
  // read 只在阅读模式列出（source-note 在演示模式隐藏）。说明见 docs/production/lesson-authoring-playbook.md。
  const renderRefs = (scene) => {
    const refs = scene.refs || [];
    const row = (items, attrs, fallback) => {
      if (!items.length) return '';
      const groups = [];
      items.forEach(ref => {
        const group = ref.group || fallback;
        if (!groups.length || groups[groups.length - 1].group !== group) groups.push({ group, items: [] });
        groups[groups.length - 1].items.push(ref);
      });
      const inner = groups.map(g => `<b>${escape(g.group)}</b>` + g.items.map(ref => `<a href="${escape(ref.url)}" title="${escape(ref.url.split('/').pop())}" target="_blank" rel="noopener">${escape(ref.text)}</a>`).join('')).join('');
      return `<p ${attrs}>${inner}</p>`;
    };
    const last = Math.max(0, (scene.steps?.length || 1) - 1);
    return row(refs.filter(ref => ref.kind === 'live'), `class="p-refs" data-reveal="${last}"`, '原文')
      + row(refs.filter(ref => ref.kind !== 'live'), 'class="p-refs source-note"', '延伸阅读');
  };
  // 复现步骤（scene.repro）：折叠按钮，点开才显示；演示模式下在标题上方一行，展开后叠在画面上方。见 docs/production/parts.md 的 .p-repro。
  const renderRepro = (repro) => repro ? `<details class="p-repro"><summary>${escape(repro.label)}</summary><div class="p-repro-body"><ol>${repro.steps.map(step => `<li><span>${escape(step.text)}</span>${step.code ? `<pre><code>${escape(step.code)}</code></pre>` : ''}</li>`).join('')}</ol>${repro.note ? `<p>${escape(repro.note)}</p>` : ''}</div></details>` : '';
  const renderCommands = (commands = []) => commands.length ? `<dl class="command-list">${commands.map(item => `<div><dt>${escape(item.label)}</dt><dd><code>${escape(item.command)}</code>${escape(item.description)}</dd></div>`).join('')}</dl>` : '';
  let mode = new URLSearchParams(location.search).get('mode') === 'slides' ? 'slides' : 'scroll';
  let current = Math.max(0, scenes.findIndex(scene => `#${scene.id}` === location.hash));
  const hasSteps = scenes.some(scene => scene.steps?.length);
  const lastStep = index => Math.max(0, (scenes[index].steps?.length || 1) - 1);
  let currentStep = Math.max(0, Math.min(lastStep(current), Math.trunc(Number(new URLSearchParams(location.search).get('step')) || 0)));
  let observer;
  let resume = null;
  let feedbackTimer;

  const sceneClass = (scene) => ['scene', ...(scene.layout ? [scene.layout] : [])].join(' ');
  lesson.innerHTML = scenes.map((scene, index) => `<section class="${sceneClass(scene)}" id="${scene.id}" aria-labelledby="heading-${scene.id}" data-index="${index}">
    <p class="scene-kicker">${scene.kicker}</p>
    <h2 id="heading-${scene.id}" tabindex="-1">${scene.title}</h2>
    <p class="lede">${scene.lead}</p>${renderRepro(scene.repro)}
    <div class="scene-content">${scene.prompt ? `<div class="prompt"><div class="prompt-label"><span>发给 Codex 的请求</span><button type="button" class="copy-button" data-copy="${index}">复制请求</button></div><pre><code class="language-text">${escape(scene.prompt)}</code></pre></div>` : ''}${renderCommands(scene.commands)}${scene.html}${renderRefs(scene)}</div>
  </section>`).join('');
  nav.innerHTML = scenes.map((scene, index) => `<a href="#${scene.id}" data-index="${index}">${window.lesson.navNumbers === false ? '' : `<span>${String(index + 1).padStart(2, '0')}</span>`}${scene.label}</a>`).join('');
  const sections = [...lesson.querySelectorAll('.scene')];

  function announce(message) {
    clearTimeout(feedbackTimer);
    feedback.textContent = message;
    feedbackTimer = setTimeout(() => { feedback.textContent = ''; }, 5500);
  }
  function writeUrl() {
    const url = new URL(location.href);
    url.searchParams.set('mode', mode);
    if (hasSteps) url.searchParams.set('step', currentStep);
    url.hash = scenes[current].id;
    // Some file:// browsers reject History API writes; navigation still works.
    try { history.replaceState(null, '', url); } catch (_) { /* Direct-file preview. */ }
  }
  // 专注演示会隐藏页脚；左下角留一个淡色页码，方便和逐字稿对照。
  const pageBadge = document.createElement('p');
  pageBadge.id = 'page-badge';
  pageBadge.setAttribute('aria-hidden', 'true');
  document.body.append(pageBadge);
  function updatePosition() {
    nav.querySelectorAll('a').forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    document.querySelector('#position').textContent = `${String(current + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')} · ${scenes[current].label}`;
    pageBadge.textContent = `${String(current + 1).padStart(2, '0')}/${String(scenes.length).padStart(2, '0')}`;
    if (hasSteps && mode === 'slides') document.querySelector('#position').textContent += ` · ${currentStep + 1}/${lastStep(current) + 1} 步`;
    document.querySelector('#previous').disabled = mode === 'slides' ? current === 0 && currentStep === 0 : !adjacentLessons.previous;
    document.querySelector('#next').disabled = mode === 'slides' ? current === scenes.length - 1 && currentStep === lastStep(current) : !adjacentLessons.next;
    document.querySelector('#previous').textContent = mode === 'slides' ? (hasSteps ? '← 上一步' : '← 上一页') : '← 上一节';
    document.querySelector('#next').textContent = mode === 'slides' ? (hasSteps ? '下一步 →' : '下一页 →') : '下一节 →';
    for (const id of ['previous', 'next']) {
      const button = document.querySelector(`#${id}`);
      button.setAttribute('aria-label', button.textContent.replace(/[←→]/g, '').trim());
      lessonButtons[id].hidden = mode !== 'slides';
      lessonButtons[id].disabled = !adjacentLessons[id];
    }
    writeUrl();
    document.dispatchEvent(new CustomEvent('lesson-position', { detail: { current, step: currentStep, mode } }));
  }
  function renderSteps() {
    sections.forEach((section, index) => {
      section.querySelectorAll('[data-reveal]').forEach(element => {
        const step = Number(element.dataset.reveal);
        const concealed = mode === 'slides' && step > currentStep;
        element.classList.toggle('step-hidden', concealed);
        const containsCurrent = [...element.querySelectorAll('[data-reveal]')].some(child => Number(child.dataset.reveal) >= currentStep);
        element.classList.toggle('step-past', mode === 'slides' && currentStep < lastStep(index) && step < currentStep && !containsCurrent);
        if (concealed) { element.setAttribute('aria-hidden', 'true'); element.setAttribute('inert', ''); }
        else { element.removeAttribute('aria-hidden'); element.removeAttribute('inert'); }
      });
    });
  }
  function advance(direction) {
    if (mode === 'slides' && direction > 0 && currentStep < lastStep(current)) go(current, false, currentStep + 1);
    else if (mode === 'slides' && direction < 0 && currentStep > 0) go(current, false, currentStep - 1);
    else if (direction < 0 && current > 0) go(current - 1, false, mode === 'slides' ? lastStep(current - 1) : 0);
    else if (direction > 0 && current < scenes.length - 1) go(current + 1);
  }
  function watchScroll() {
    observer?.disconnect();
    if (mode !== 'scroll') return;
    observer = new IntersectionObserver(() => {
      if (mode !== 'scroll') return;
      const readingLine = Math.min(240, innerHeight * .3);
      let index = 0;
      sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= readingLine) index = i; });
      if (index !== current) { current = index; currentStep = 0; updatePosition(); }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
  function go(index, focus = false, step = 0) {
    current = Math.max(0, Math.min(index, scenes.length - 1));
    currentStep = Math.max(0, Math.min(lastStep(current), step));
    sections.forEach((section, i) => { section.hidden = mode === 'slides' && i !== current; });
    renderSteps();
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
    // Remember where the slides stopped, so reading → slides returns to the same step.
    if (mode === 'slides' && nextMode !== 'slides') resume = { index: current, step: currentStep };
    const step = nextMode === 'slides' && resume && resume.index === current ? resume.step : currentStep;
    mode = nextMode;
    document.body.dataset.mode = mode;
    if (mode === 'scroll') {
      document.body.classList.remove('recording');
      document.querySelector('#record-toggle').setAttribute('aria-pressed', 'false');
      document.querySelector('#exit-recording').hidden = true;
    }
    document.querySelectorAll('[data-mode-button]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.modeButton === mode)));
    document.querySelector('.keyboard-hint').textContent = mode === 'slides' ? (hasSteps ? '← → 分步 · T 阅读 · R 专注' : '← → 翻页 · T 切换展示方式') : 'T 切换展示方式';
    go(current, focusInSettings || document.activeElement.hidden, step);
    requestAnimationFrame(watchScroll);
  }
  nav.addEventListener('click', event => {
    const link = event.target.closest('a[data-index]');
    if (!link) return;
    event.preventDefault();
    go(Number(link.dataset.index), true);
  });
  document.querySelectorAll('[data-mode-button]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.modeButton)));
  function navigateFooter(direction) {
    if (mode === 'slides') { advance(direction); return; }
    navigateLesson(direction);
  }
  function navigateLesson(direction) {
    const link = adjacentLessons[direction < 0 ? 'previous' : 'next'];
    if (!link) return;
    const url = new URL(link.href);
    url.searchParams.set('mode', mode);
    url.searchParams.delete('step');
    url.hash = '';
    location.assign(url.href);
  }
  document.querySelector('#previous').addEventListener('click', () => navigateFooter(-1));
  document.querySelector('#next').addEventListener('click', () => navigateFooter(1));

  lesson.addEventListener('click', async event => {
    const connect = event.target.closest('[data-demo-connect]');
    if (connect) {
      const panel = connect.closest('.welcome-demo');
      const url = 'http://localhost:4174/setup-check/';
      panel.querySelector('iframe').src = url;
      panel.querySelector('a').href = url;
      panel.querySelector('[data-demo-status]').textContent = '练习副本 · localhost:4174（请核对实际加载）';
    }
    const reload = event.target.closest('[data-demo-reload]');
    if (reload) {
      const frame = reload.closest('.welcome-demo').querySelector('iframe');
      frame.src = frame.src;
    }
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
  // 人像区域只是录制时的位置参考：成片用真实画面替换，所以默认隐藏（页面带 camera-hidden），
  // 由「演示设置」里的按钮显示或隐藏。按钮文字和状态始终以 body 上的类为准。
  const cameraToggle = document.querySelector('#camera-toggle');
  function syncCameraToggle() {
    const hidden = document.body.classList.contains('camera-hidden');
    cameraToggle.setAttribute('aria-pressed', String(!hidden));
    cameraToggle.textContent = hidden ? '显示人像辅助框' : '隐藏人像辅助框';
  }
  cameraToggle.addEventListener('click', () => {
    document.body.classList.toggle('camera-hidden');
    syncCameraToggle();
  });
  syncCameraToggle();
  function toggleRecording() {
    const recording = !document.body.classList.contains('recording');
    if (recording && mode !== 'slides') setMode('slides');
    document.body.classList.toggle('recording', recording);
    document.querySelector('.presentation-tools').open = false;
    document.querySelector('#record-toggle').setAttribute('aria-pressed', String(recording));
    const exit = document.querySelector('#exit-recording');
    exit.hidden = !recording;
    requestAnimationFrame(() => {
      go(current, !recording, currentStep);
      if (recording) (hasSteps ? lesson : exit).focus({ preventScroll: true });
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
      if (['ArrowRight', 'PageDown'].includes(event.key) || (event.key === ' ' && !interactive)) { event.preventDefault(); advance(1); }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); advance(-1); }
      if (event.key === 'Home') { event.preventDefault(); go(0); }
      if (event.key === 'End') { event.preventDefault(); go(scenes.length - 1, false, lastStep(scenes.length - 1)); }
    }
  });
  window.addEventListener('hashchange', () => {
    const index = scenes.findIndex(scene => `#${scene.id}` === location.hash);
    if (index !== -1) go(index, false, Math.trunc(Number(new URLSearchParams(location.search).get('step')) || 0));
  });
  setMode(mode);
  document.fonts.ready.then(() => { if (mode === 'scroll') go(current); });
})();

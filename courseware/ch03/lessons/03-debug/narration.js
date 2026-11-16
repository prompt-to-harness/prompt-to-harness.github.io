/* Copy this shell; feed it chapter data instead of rewriting navigation per chapter. */
(() => {
  const data = window.narrationData;
  const nav = document.querySelector('nav'), article = document.querySelector('article'), panel = document.querySelector('.panel');
  document.querySelector('aside h1').textContent = data.title;
  const entries = new Map(), links = new Map(), sections = new Map();
  const deck = window.lesson;
  const locator = createPptLocator({section: deck.section, pages: deck.scenes});
  const slides = new Map(deck.scenes.map(scene => [scene.id, scene]));
  const node = (tag, text) => { const e = document.createElement(tag); if (text !== undefined) e.textContent = text; return e; };
  const title = item => `${item.number} ${item.title}`;
  function anchor(item, parent) {
    entries.set(item.id, item);
    const a = node('a', title(item)); a.href = '#' + item.id; parent.append(a); links.set(item.id, a); return a;
  }
  for (const part of data.parts) {
    const section = node('section'), heading = node('h2'); anchor(part, heading); section.append(heading);
    for (const group of part.groups || []) {
      const details = node('details'), summary = node('summary');
      anchor(group, summary);
      const list = node('ul');
      // Text navigates; the disclosure area folds the TOC.
      for (const screen of group.screens || []) { const li = node('li'); anchor(screen, li); list.append(li); }
      details.append(summary, list); section.append(details);
    }
    nav.append(section);
  }
  function render(item) {
    const article = node('section');
    article.id = item.id;
    article.className = 'narration-entry';
    article.tabIndex = -1;
    article.append(node('h2', title(item)));
    sections.set(item.id, article);
    if (item.content) article.append(node('p', item.content));
    if (item.effect) article.append(node('h3', '应达到的效果'), node('p', item.effect));
    if (item.screen) {
      const surface = node('div'); surface.className = 'screen'; surface.append(node('strong', '当前画面'), node('p', item.screen));
      if (item.ppt && locator) {
        const label = locator.label(item.ppt.id, item.ppt.step), href = locator.href(item.ppt.id, item.ppt.step);
        if (!label || !href) throw new Error('PPT 定位无效：' + item.id);
        const a = node('a', label); a.href = href; a.target = '_blank'; a.rel = 'noopener'; a.className = 'ppt-location'; surface.append(a);
      }
      article.append(surface);
    }
    if (item.operation) { const p = node('p', '操作：' + item.operation); p.className = 'operation'; article.append(p); }
    if (item.materials?.length) {
      const list = node('p'); list.className = 'materials';
      for (const material of item.materials) { const a = node('a', material.label); a.href = material.url; a.target = '_blank'; a.rel = 'noopener'; list.append(a); }
      article.append(list);
    }
    if (item.preflight) {
      article.append(node('h3', item.preflight.title), node('p', item.preflight.summary));
      const checks = node('ol'); checks.className = 'task-actions';
      for (const check of item.preflight.steps) {
        const li = node('li');
        li.append(node('p', check.action), node('p', '通过标准：' + check.pass));
        checks.append(li);
      }
      article.append(checks, node('p', '当前验证状态：' + item.preflight.status));
    }
    if (item.task) {
      article.append(node('h3', '实验上下文与 Codex 操作'), node('p', item.task.context));
      const actions = node('ol'); actions.className = 'task-actions';
      for (const action of item.task.actions) actions.append(node('li', action));
      article.append(actions, node('p', '收到结果后：' + item.task.result));
      const source = node('details'); source.append(node('summary', '原始记录定位（备课核对）'), node('p', item.task.source)); article.append(source);
    }
    const prompts = item.prompts || (item.prompt ? [{label: '实际开发请求', text: item.prompt}] : []);
    for (const prompt of prompts) {
      const box = node('div'); box.className = 'prompt-material';
      const details = node('details'), pre = node('pre', prompt.text);
      details.append(node('summary', prompt.label), pre);
      const button = node('button', '复制：' + prompt.label), status = node('span'); status.setAttribute('role', 'status');
      button.onclick = async () => { try { await navigator.clipboard.writeText(prompt.text); status.textContent = '已复制'; } catch { details.open = true; const range = document.createRange(); range.selectNodeContents(pre); getSelection().removeAllRanges(); getSelection().addRange(range); status.textContent = '已选中，请复制'; } };
      const select = node('button', '选中原文');
      select.onclick = () => { details.open = true; const range = document.createRange(); range.selectNodeContents(pre); getSelection().removeAllRanges(); getSelection().addRange(range); status.textContent = '已选中，可用系统复制快捷键'; };
      box.append(details, button, select, status); article.append(box);
    }
    if (item.points) article.append(node('h3', '本步讲解安排'), node('p', item.points));
    if (item.transition) article.append(node('h3', '停留与下一步'), node('p', item.transition));
    if (item.status) article.append(node('p', item.status));
    // Optional adapter must return existing editable nodes, not copied text.
    const source = window.narrationAdapters?.renderScript?.(item);
    if (source) article.append(source);
    else if (item.ppt) {
      const script = slides.get(item.ppt.id).script[item.ppt.step];
      article.append(node('h3', '逐字稿'));
      for (const [part, paragraph] of script.split('\n\n').entries()) {
        const isCue = /^【(?:操作提示|切换)｜/.test(paragraph);
        const block = node(isCue ? 'p' : 'blockquote', paragraph);
        if (isCue) block.className = 'operation';
        else Object.assign(block.dataset, {scene: item.ppt.id, step: item.ppt.step, part});
        article.append(block);
      }
    } else if (item.script) {
      article.append(node('h3', '逐字稿'));
      for (const [part, paragraph] of item.script.split('\n\n').entries()) {
        const isCue = /^【(?:操作提示|切换)｜/.test(paragraph);
        const block = node(isCue ? 'p' : 'blockquote', paragraph);
        if (isCue) block.className = 'operation';
        else Object.assign(block.dataset, {screen: item.id, part});
        article.append(block);
      }
    }
    else if (item.points && !item.status) article.append(node('p', '逐字稿待补'));
    const children = item.groups || item.screens || [];
    if (children.length) {
      const list = node('ul'); list.className = 'steps';
      for (const child of children) { const li = node('li'), a = node('a', title(child)); a.href = '#' + child.id; li.append(a); list.append(li); } article.append(list);
    }
    return article;
  }
  // Mount original nodes once; navigation must never replace the body.
  for (const item of entries.values()) article.append(render(item));
  article.querySelectorAll('blockquote[data-part]').forEach(block => { block.dataset.scriptEdit = ''; });
  if (location.protocol !== 'file:') import(new URL('../../../shared/script-editor.js', document.currentScript.src).href)
    .then(module => module.enableScriptEditing(article, {commentsEnabled: false}));
  function mark(id) {
    for (const [key, a] of links) {
      if (key === id) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    }
    for (const details of nav.querySelectorAll('details')) {
      details.classList.toggle('contains-current', details.contains(links.get(id)));
    }
  }
  let queued = false;
  function follow() {
    queued = false;
    const top = panel.getBoundingClientRect().top + 24;
    let current = sections.keys().next().value;
    for (const [id, section] of sections) {
      if (section.getBoundingClientRect().top > top) break;
      current = id;
    }
    mark(current);
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(follow); }
  }
  function jump(hash, focus = false) {
    const target = sections.get(hash.slice(1)) || sections.values().next().value;
    panel.scrollTop += target.getBoundingClientRect().top - panel.getBoundingClientRect().top - 16;
    if (focus) target.focus({preventScroll: true});
    mark(target.id);
  }
  document.addEventListener('click', event => {
    const a = event.target.closest('a[href^="#"]');
    if (!a || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== a.hash) history.pushState(null, '', a.hash);
    jump(a.hash, true);
  });
  addEventListener('hashchange', () => jump(location.hash));
  addEventListener('popstate', () => jump(location.hash));
  panel.addEventListener('scroll', schedule, {passive: true});
  new ResizeObserver(schedule).observe(article);
  addEventListener('resize', schedule);
  requestAnimationFrame(() => jump(location.hash));
})();

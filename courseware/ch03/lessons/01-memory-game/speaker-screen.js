/* 画面与要点就近对应原逐字稿；移动原节点，保留编辑及评论坐标。 */
(() => {
  const root = document.querySelector('#script'), plan = window.screenPlan;
  const params = new URLSearchParams(location.search);
  const recordingView = plan.recordingReady === true && params.get('view') === 'recording';
  if (params.has('legacy')) {
    document.querySelector('header h1').textContent = '3.1 逐字稿源文件分组';
    document.querySelector('header h1 + p').textContent = '按源文件分组查看和编辑，含备用片段；实际讲述顺序请看五段对照页。';
    document.querySelector('.review-status').textContent = '当前五段逐字稿已补齐，尚未试讲；现场结果按实际运行核对。';
    const current = document.querySelector('header a[href="?legacy=1"]');
    current.href = 'speaker.html'; current.textContent = '返回画面与讲述提纲 ↗';
    return;
  }
  const paragraphs = new Map([...root.querySelectorAll('[data-scene]')].map(node => [
    `${node.dataset.scene}:${node.dataset.step}:${node.dataset.part}`, node
  ]));
  document.body.classList.add('screen-outline');
  const frames = new Map(plan.frames.map(frame => [frame.id, frame]));
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const link = (text, url) => {
    const node = el('a', '', text); node.href = url;
    node.target = '_blank'; node.rel = 'noopener'; return node;
  };
  const overview = el('details', 'lesson-overview');
  overview.append(el('summary', '', '教学目标与学生收获'), el('p', '', plan.overview.purpose));
  const outcomes = el('ul');
  plan.overview.outcomes.forEach(text => outcomes.append(el('li', '', text)));
  overview.append(outcomes);
  const nav = el('nav', 'screen-nav'); nav.setAttribute('aria-label', '五段画面顺序');
  const sections = [];
  plan.units.forEach((unit, index) => {
    const sequence = plan.overview.sequence[index];
    const section = el('section', 'screen-frame'); section.id = unit.frames[0]; section.dataset.unit = unit.id;
    unit.frames.slice(1).forEach(id => { const anchor = el('span', 'frame-anchor'); anchor.id = id; section.append(anchor); });
    section.append(el('h2', '', `3.1.${index + 1} · ${sequence.title}`));
    const layout = el('div', 'stage-layout'), teaching = el('div', 'stage-teaching');
    if (unit.script_blocks.some(block => block.prompt === 'initial-request')) {
      teaching.append(el('h3', '', '请求'), el('pre', 'initial-request', plan.prompts['initial-request'].text));
    }
    teaching.append(el('h3', '', '具体讲法'), el('p', '', sequence.text), el('p', '', unit.note));
    const pages = plan.design.ppt_pages.filter(page => page.unit === unit.id);
    if (pages.length) {
      teaching.append(el('h3', '', `PPT 逐页安排 · 全节 ${plan.design.ppt_pages.length} 页`));
      for (const page of pages) teaching.append(link(page.title + ' ↗', `index.html?mode=slides#${page.id}`));
    }
    const script = el('div', 'stage-script');
    script.append(el('h3', '', '逐字稿'));
    let passage = null;
    for (const [blockIndex, block] of unit.script_blocks.entries()) {
      const beat = el('div', 'script-beat'); beat.id = `screen-${unit.id}-${blockIndex + 1}`;
      script.append(beat);
      if (block.cue) {
        passage = null;
        beat.append(el('p', 'script-cue', block.cue));
      }
      if (block.materials?.length) {
        const entries = el('p', 'cue-links');
        block.materials.forEach(([frameId, position], i) => {
          const [title, url] = frames.get(frameId).links[position];
          if (i) entries.append(document.createTextNode(' · '));
          entries.append(link(title + ' ↗', url));
        });
        beat.append(entries);
      }
      if (block.visual) {
        const visual = plan.visuals[block.visual], figure = el('figure', 'screen-preview');
        const preview = link('', visual.src), img = el('img');
        img.src = visual.src; img.alt = visual.alt; img.loading = 'lazy';
        img.width = visual.width; img.height = visual.height;
        preview.append(img); figure.append(preview, el('figcaption', '', visual.caption));
        beat.append(figure);
      }
      const appendPoints = () => {
        if (!block.points?.length) return;
        if (block.pending) beat.append(el('p', 'points-label', `讲述要点 · ${block.pending}`));
        const points = el('ul', 'talk-points');
        block.points.forEach(point => points.append(el('li', '', point)));
        beat.append(points);
      };
      if (!block.points_after) appendPoints();
      if (block.pending && !block.points?.length) {
        beat.append(el('p', 'points-label', block.pending));
      }
      if (block.prompt) {
        const prompt = plan.prompts[block.prompt], request = el('div', 'visible-prompt');
        request.append(el('p', 'points-label', prompt.title), el('pre', '', prompt.text));
        const copy = el('button', 'copy-prompt', '复制 Prompt'); copy.type = 'button';
        copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(prompt.text); copy.textContent = '已复制'; } catch { copy.textContent = '请选中上方原文复制'; } });
        request.append(copy); beat.append(request);
      }
      if (block.refs?.length) {
        if (!passage) {
          passage = el('div', 'script-passage');
          beat.append(passage);
        }
        for (const ref of block.refs) {
          const key = ref.join(':'), paragraph = paragraphs.get(key);
          if (!paragraph) throw Error(`逐字稿映射缺失或重复：${key}`);
          passage.append(paragraph); paragraphs.delete(key);
        }
      }
      if (block.points_after) appendPoints();
    }
    layout.append(teaching, script); section.append(layout);
    const material = el('details', 'screen-material');
    material.append(el('summary', '', '材料与原稿参考'), el('p', '', unit.note));
    for (const block of unit.script_blocks.filter(block => block.prompt)) {
      const prompt = plan.prompts[block.prompt];
      material.append(el('p', 'prompt-note', `${prompt.title}：${prompt.note}`));
    }
    const links = el('ul', 'screen-links'), urls = new Set();
    unit.frames.forEach(id => frames.get(id).links.forEach(([title, url]) => {
      if (urls.has(url)) return; urls.add(url);
      const item = el('li'); item.append(link(title + ' ↗', url)); links.append(item);
    }));
    if (links.childElementCount) material.append(links);
    const refs = [...new Set(unit.script_blocks.flatMap(block => (block.refs || []).map(ref => ref[0])))];
    if (refs.length) {
      material.append(el('p', '', '以下入口按源文件分组显示口播及备用片段；实际讲述顺序以本页为准。'));
      const original = el('p', 'original-links');
      refs.forEach((id, i) => {
        if (i) original.append(document.createTextNode(' · '));
        const title = plan.parts.find(part => part.id === id)?.title || id;
        original.append(link(title, `?legacy=1#${id}`));
      });
      material.append(original);
    }
    section.append(material); sections.push(section);
    const jump = el('a', '', `${String(index + 1).padStart(2, '0')} ${['PPT', 'Codex', '真实记录', 'PPT', 'Codex'][index]}`);
    jump.href = '#' + section.id; nav.append(jump);
  });
  document.body.classList.add('discussion-layout');
  const sidebar = el('aside', 'discussion-sidebar'), panel = el('div', 'discussion-panel');
  panel.tabIndex = 0;
  const brand = el('div', 'discussion-brand');
  brand.append(el('h1', '', recordingView ? '3.1 · 录制讲师页' : '3.1 · 讲述页'));
  brand.append(link('PPT ↗', 'index.html?mode=slides#p01'));
  if (plan.recordingReady === true) {
    const mode = el('a', '', recordingView ? '备课讲述页' : '录制讲师页');
    mode.href = recordingView ? 'speaker.html' : 'speaker.html?view=recording';
    brand.append(mode, document.createTextNode(' · '));
  }
  brand.append(link('← 课程首页', '../../../index.html'), link('Discussion 原文', '../../../../docs/outline/ch03-discussion.md#:~:text=3.1%20经历一次真实的游戏开发'), overview);
  sidebar.append(brand);
  const tree = el('nav', 'discussion-tree'); tree.setAttribute('aria-label', '全部内容目录');
  const screenLinks = new Map();
  const entries = sections.map((section, unitIndex) => {
    const directory = window.speakerNavigation[unitIndex];
    const unit = plan.units[unitIndex];
    const group = el('section', 'discussion-tree-group'), heading = el('h2');
    const jump = el('a', '', directory.title); jump.href = '#content-' + section.id;
    heading.append(jump); group.append(heading); tree.append(group);
    const mapped = directory.groups.flatMap(([, blocks]) => blocks);
    if (mapped.length !== unit.script_blocks.length || new Set(mapped).size !== mapped.length || mapped.some(i => !unit.script_blocks[i])) throw Error('目录与画面不一致：' + unit.id);
    directory.groups.forEach(([title, blocks], groupIndex) => {
      const details = el('details', 'discussion-tree-section'), summary = el('summary', '', `3.1.${unitIndex + 1}.${groupIndex + 1} ${title}`), list = el('ul');
      blocks.forEach((blockIndex, index) => {
        const id = `screen-${unit.id}-${blockIndex + 1}`, row = el('li');
        const a = el('a', '', `3.1.${unitIndex + 1}.${groupIndex + 1}.${index + 1} ${directory.screens[blockIndex]}`);
        a.href = '#' + id; row.append(a); list.append(row); screenLinks.set(id, a);
      });
      details.append(summary, list); group.append(details);
    });
    const teaching = section.querySelector('.stage-teaching'), script = section.querySelector('.stage-script');
    const order = el('ol', 'discussion-unit-order');
    directory.groups.forEach(([title, blocks], groupIndex) => {
      const row = el('li'), a = el('a', '', `3.1.${unitIndex + 1}.${groupIndex + 1} ${title}`);
      a.href = '#screen-' + unit.id + '-' + (blocks[0] + 1); row.append(a); order.append(row);
    });
    teaching.append(order);
    const modes = el('nav', 'discussion-modes');
    const design = el('a', '', '讲述安排'), recording = el('a', '', '画面与口播');
    design.href = '#content-' + section.id; recording.href = '#' + section.id;
    if (!recordingView) {
      modes.append(design, recording);
      section.querySelector('h2').after(modes);
    }
    section.querySelector('.stage-layout').replaceWith(teaching, script);
    section.classList.add('discussion-content'); panel.append(section);
    return {section, teaching, script, design, recording, jump};
  });
  const pptPanel = el('section', 'screen-frame ppt-plan'); pptPanel.id = 'ppt-plan'; pptPanel.hidden = false;
  pptPanel.append(el('h2', '', `PPT 逐页安排 · 共 ${plan.design.ppt_pages.length} 页`), el('p', '', '七页均为完整静态画面。下面依实际讲述顺序列出 PPT、演示和材料；点击对应部分进入操作与口播。'));
  const table = el('table'); const head = el('tr');
  ['画面与讲述段', '讲解内容', '展开与切换'].forEach(text => head.append(el('th', '', text))); table.append(head);
  for (const unit of plan.units) for (const [i, block] of unit.script_blocks.entries()) {
    const row = el('tr'), cell = el('td');
    cell.append(link(window.speakerNavigation[plan.units.indexOf(unit)].screens[i], `speaker.html#screen-${unit.id}-${i+1}`));
    row.append(cell, el('td', '', block.summary || block.cue), el('td', '', block.cue)); table.append(row);
  }
  pptPanel.append(table); panel.prepend(pptPanel);
  const pptJump = el('a', 'ppt-plan-jump', 'PPT 与演示完整顺序 · 7 页'); pptJump.href = '#ppt-plan'; brand.append(pptJump);
  sidebar.append(tree); root.replaceChildren(sidebar, panel);
  // Resize the existing columns without remounting scripts or comment anchors.
  const divider = el('div', 'discussion-resizer');
  divider.tabIndex = 0;
  divider.setAttribute('role', 'separator');
  divider.setAttribute('aria-label', '调整目录宽度');
  divider.setAttribute('aria-orientation', 'vertical');
  divider.title = '左右拖动调整目录宽度；方向键微调，双击恢复默认';
  sidebar.id = 'discussion-sidebar';
  divider.setAttribute('aria-controls', sidebar.id);
  sidebar.after(divider);
  const widthKey = 'narration-sidebar-width:' + location.pathname;
  let preferredWidth = null, drag = null;
  try {
    const saved = Number(localStorage.getItem(widthKey));
    if (Number.isFinite(saved) && saved > 0) preferredWidth = saved;
  } catch (_) { /* Storage can be unavailable in private/local contexts. */ }
  const limits = () => {
    const width = root.clientWidth;
    const min = width <= 600 ? 120 : 200;
    return {min, max: Math.max(min, Math.min(600, width - (width <= 600 ? 220 : 400) - 8))};
  };
  const applyWidth = () => {
    const {min, max} = limits();
    const width = Math.round(Math.max(min, Math.min(max, preferredWidth ?? (root.clientWidth <= 600 ? 165 : 330))));
    root.style.setProperty('--directory-width', width + 'px');
    divider.setAttribute('aria-valuemin', min);
    divider.setAttribute('aria-valuemax', max);
    divider.setAttribute('aria-valuenow', width);
    divider.setAttribute('aria-valuetext', width + ' 像素');
  };
  const saveWidth = () => {
    try {
      if (preferredWidth === null) localStorage.removeItem(widthKey);
      else localStorage.setItem(widthKey, preferredWidth);
    } catch (_) {}
  };
  const changeWidth = value => {
    const {min, max} = limits();
    preferredWidth = Math.max(min, Math.min(max, value));
    applyWidth();
  };
  divider.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    event.preventDefault();
    divider.focus();
    drag = {id:event.pointerId, x:event.clientX, width:sidebar.getBoundingClientRect().width};
    divider.setPointerCapture(event.pointerId);
    document.body.classList.add('resizing-directory');
  });
  divider.addEventListener('pointermove', event => {
    if (drag?.id === event.pointerId) changeWidth(drag.width + event.clientX - drag.x);
  });
  const finishDrag = event => {
    if (drag?.id !== event.pointerId) return;
    drag = null;
    document.body.classList.remove('resizing-directory');
    if (divider.hasPointerCapture(event.pointerId)) divider.releasePointerCapture(event.pointerId);
    saveWidth();
  };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => divider.addEventListener(type, finishDrag));
  divider.addEventListener('keydown', event => {
    const {min, max} = limits();
    const current = sidebar.getBoundingClientRect().width;
    const values = {ArrowLeft:current - 10, ArrowRight:current + 10, Home:min, End:max};
    if (!(event.key in values)) return;
    event.preventDefault(); changeWidth(values[event.key]); saveWidth();
  });
  divider.addEventListener('dblclick', () => { preferredWidth = null; applyWidth(); saveWidth(); });
  new ResizeObserver(applyWidth).observe(root);
  applyWidth();

  // Stable section/beat IDs keep review annotations separate from editable scripts.
  for (const area of panel.querySelectorAll('.stage-teaching, .script-beat, .screen-material, .ppt-plan')) {
    const base = area.id || `${area.closest('[data-unit]')?.dataset.unit}-${area.className}`;
    let n = 0;
    for (const node of area.querySelectorAll('p:not([data-scene]), pre, li, h2, h3, td, figcaption')) {
      if (node.querySelector('p, pre, li, [data-scene]')) continue;
      node.dataset.review = `review-${base}-${n++}`;
    }
    if (area.classList.contains('script-beat')) {
      const cue = area.querySelector('.script-cue');
      if (cue) {
        const action = el('button', 'review-screen-button', '评论画面');
        action.type = 'button'; action.dataset.reviewTrigger = cue.dataset.review;
        action.title = '对这个画面的内容、布局或演示安排提出建议';
        cue.after(action);
      }
    }
  }
  const commentHelp = el('p', 'review-comment-help', '选中右侧文字可添加评论；对画面、布局或演示的建议，点击“评论画面”。评论独立保存，不会改动逐字稿。');
  panel.prepend(commentHelp);
  let scriptMode = true;
  let selectedScreen = null;
  const mark = entry => {
    entries.forEach(item => item.jump.toggleAttribute('aria-current', item === entry));
    for (const [id, a] of screenLinks) a.toggleAttribute('aria-current', id === selectedScreen);
    for (const details of tree.querySelectorAll('details')) details.classList.toggle('contains-current', !!selectedScreen && details.contains(screenLinks.get(selectedScreen)));
    // Explicit navigation keeps the directory's scroll position independent of the content.

  };
  const followHash = () => {
    const hash = location.hash.slice(1), id = hash.replace(/^content-/, '');

    const entry = entries.find(item => item.section.id === id || [...item.section.querySelectorAll('[id]')].some(node => node.id === id)) || entries[0];
    scriptMode = recordingView || !hash.startsWith('content-');
    for (const item of entries) {
      item.section.hidden = false;
      item.teaching.hidden = recordingView; item.script.hidden = false;
      item.design.toggleAttribute('aria-current', !scriptMode);
      item.recording.toggleAttribute('aria-current', scriptMode);
    }
    if (hash === 'ppt-plan') { selectedScreen = null; panel.scrollTop = 0; mark(null); return; }
    selectedScreen = screenLinks.has(id) ? id : null;
    const target = selectedScreen ? document.getElementById(selectedScreen) : (hash.startsWith('content-') ? entry.section : entry.script);
    panel.scrollTop += target.getBoundingClientRect().top - panel.getBoundingClientRect().top - 36;
    mark(entry);
  };
  panel.addEventListener('scroll', () => {
    if (entries[0].section.getBoundingClientRect().top > panel.getBoundingClientRect().top + 100) { selectedScreen = null; mark(null); return; }
    const top = panel.getBoundingClientRect().top + 100;
    const current = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 2 ? entries.at(-1) : entries.filter(item => item.section.getBoundingClientRect().top <= top).at(-1) || entries[0];
    const beats = [...current.script.querySelectorAll('.script-beat')];
    const beat = beats.filter(node => node.getBoundingClientRect().top <= top).at(-1) || beats[0];
    selectedScreen = current.script.getBoundingClientRect().top <= top ? beat?.id || null : null;
    mark(current);

  }, {passive:true});
  window.pptLocator?.decorate(root);
  root.addEventListener('click', event => {
    const a = event.target.closest('a[href^="#"]');
    if (!a || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== a.hash) history.pushState(null, '', a.hash);
    followHash();
  });
  window.addEventListener('popstate', followHash);
  window.addEventListener('hashchange', followHash);
  window.addEventListener('load', followHash, {once:true});
  followHash();
})();

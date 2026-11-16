// 评论标记放在正文之外，避免进入 contenteditable 或被保存进口播。
export function enableComments(root) {
  const endpoint = '/__script/comments';
  const page = location.pathname;
  const blocks = () => [...root.querySelectorAll('p[data-scene], p[data-intro], [data-review]')];
  const layer = document.createElement('div'); layer.className = 'comment-markers';
  const add = document.createElement('button'); add.type = 'button';
  add.className = 'comment-add'; add.textContent = '添加评论'; add.hidden = true;
  const notice = document.createElement('div'); notice.className = 'comment-notice';
  notice.setAttribute('role', 'status'); notice.hidden = true;
  document.body.append(layer, add, notice);
  const help = document.createElement('p'); help.className = 'edit-banner';
  help.textContent = '选中文字后点击“添加评论”；红点位于选中文字末尾的左上角，点击可查看、编辑或删除。已解决的评论会自动隐藏。';
  document.querySelector('.script-page header')?.append(help);
  let comments = [], pending = null, panel = null, panelId = null, busy = false;
  let signature = '', refreshing = false, frame = 0, generation = 0;
  const markers = new Map();

  function message(text) { notice.textContent = text; notice.hidden = !text; }
  function locationOf(p) {
    if (p.dataset.review) return { review: p.dataset.review, snapshot: p.textContent };
    if (p.dataset.intro !== undefined) return { intro: Number(p.dataset.intro) };
    return { scene: p.dataset.scene, step: Number(p.dataset.step), part: Number(p.dataset.part) };
  }
  function sameLocation(p, a) {
    const loc = locationOf(p);
    if (a.review !== undefined) return loc.review === a.review;
    return a.intro !== undefined ? loc.intro === a.intro
      : loc.scene === a.scene && loc.step === a.step && loc.part === a.part;
  }
  function rangeAt(p, start, end) {
    const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
    let node, offset = 0, from = null, to = null;
    while ((node = walker.nextNode())) {
      const limit = offset + node.textContent.length;
      if (!from && start <= limit) from = [node, Math.max(0, start - offset)];
      if (end <= limit) { to = [node, Math.max(0, end - offset)]; break; }
      offset = limit;
    }
    if (!from || !to) return null;
    const range = document.createRange(); range.setStart(...from); range.setEnd(...to); return range;
  }
  function lastRect(range) {
    // 最后一个字的左上角；末尾在下个文本节点开头时，退回最后一个可见矩形。
    const tail = range.cloneRange();
    if (tail.endContainer.nodeType === Node.TEXT_NODE && tail.endOffset > 0) {
      tail.setStart(tail.endContainer, tail.endOffset - 1);
      const rect = [...tail.getClientRects()].find(r => r.width && r.height);
      if (rect) return rect;
    }
    return [...range.getClientRects()].filter(r => r.width && r.height).at(-1);
  }
  function selectionTarget() {
    const selection = getSelection();
    if (!selection?.rangeCount || selection.isCollapsed) return null;
    const selected = selection.getRangeAt(0);
    if (!root.contains(selected.startContainer) || !root.contains(selected.endContainer)) return null;
    const anchors = [];
    let endRange;
    for (const p of blocks()) {
      if (!selected.intersectsNode(p)) continue;
      const range = document.createRange(); range.selectNodeContents(p);
      if (selected.compareBoundaryPoints(Range.START_TO_START, range) > 0)
        range.setStart(selected.startContainer, selected.startOffset);
      if (selected.compareBoundaryPoints(Range.END_TO_END, range) < 0)
        range.setEnd(selected.endContainer, selected.endOffset);
      const quote = range.toString();
      if (!quote.trim()) continue;
      const prefix = document.createRange(); prefix.selectNodeContents(p);
      prefix.setEnd(range.startContainer, range.startOffset);
      const start = prefix.toString().length;
      anchors.push({ ...locationOf(p), start, end: start + quote.length, quote });
      endRange = range;
    }
    const rect = endRange && lastRect(endRange);
    return anchors.length && rect ? { anchors, rect } : null;
  }
  function showSelection() {
    if (panel) { add.hidden = true; return; }
    pending = selectionTarget(); add.hidden = !pending;
    if (!pending) return;
    add.style.left = `${Math.max(8, Math.min(innerWidth - 120, pending.rect.right))}px`;
    add.style.top = `${Math.max(8, Math.min(innerHeight - 46, pending.rect.bottom + 6))}px`;
  }
  function locate(anchor) {
    const all = blocks();
    const original = all.find(p => sameLocation(p, anchor));
    if (anchor.review && original && !original.textContent.includes(anchor.quote)) {
      return { range: rangeAt(original, 0, original.textContent.length), changed: true };
    }
    const candidates = all.filter(p => p === original || (!anchor.review && (anchor.intro !== undefined
      ? p.dataset.intro !== undefined : p.dataset.scene === anchor.scene)));
    const matches = [];
    for (const p of candidates) {
      const text = p.textContent;
      for (let at = text.indexOf(anchor.quote); at !== -1; at = text.indexOf(anchor.quote, at + 1)) {
        const before = text.slice(0, at), after = text.slice(at + anchor.quote.length);
        const score = (p === original ? 4 : 0) + (at === anchor.start ? 1 : 0)
          + (anchor.prefix && before.endsWith(anchor.prefix) ? 8 : 0)
          + (anchor.suffix && after.startsWith(anchor.suffix) ? 8 : 0);
        matches.push({ p, at, score });
      }
    }
    matches.sort((a, b) => b.score - a.score);
    if (matches.length && (matches.length === 1 || matches[0].score > matches[1].score)) {
      const { p, at } = matches[0];
      return { range: rangeAt(p, at, at + anchor.quote.length), changed: false };
    }
    // 无原文时不再回退到其他段落；服务端依据完整源稿清理孤立评论。
    return null;
  }
  function placePanel() {
    if (!panel) return;
    const marker = panelId ? markers.get(panelId) : null;
    const rect = marker?.getBoundingClientRect() || pending?.rect;
    if (!rect) return;
    const width = panel.offsetWidth, height = panel.offsetHeight;
    panel.style.left = `${Math.max(8, Math.min(innerWidth - width - 8, rect.left))}px`;
    panel.style.top = `${Math.max(8, Math.min(innerHeight - height - 8, rect.bottom + 8))}px`;
  }
  function positionMarkers() {
    const occupied = new Map();
    for (const comment of comments) {
      const marker = markers.get(comment.id);
      if (!marker) continue;
      const target = locate(comment.anchors.at(-1));
      const rect = target?.range && lastRect(target.range);
      marker.hidden = !rect;
      if (!rect) continue;
      const key = `${Math.round(rect.left)},${Math.round(rect.top)}`;
      const overlap = occupied.get(key) || 0; occupied.set(key, overlap + 1);
      marker.style.left = `${scrollX + rect.left - 12 + overlap * 16}px`;
      marker.style.top = `${scrollY + rect.top - 12}px`;
      marker.dataset.changed = String(target.changed);
      marker.title = (target.changed ? '原文位置有变化 · ' : '') + comment.body;
    }
    placePanel();
  }
  function schedule() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { positionMarkers(); showSelection(); });
  }
  function closePanel() {
    if (busy) return;
    const trigger = panelId && markers.get(panelId);
    panel?.remove(); panel = null; panelId = null;
    if (trigger) trigger.focus({ preventScroll: true });
    add.hidden = true;
  }
  function renderMarkers() {
    layer.replaceChildren(); markers.clear();
    for (const comment of comments.filter(c => c.status === 'open')) {
      const marker = document.createElement('button'); marker.type = 'button';
      marker.className = 'comment-dot'; marker.dataset.commentId = comment.id;
      marker.setAttribute('aria-label', `查看评论：${comment.body.slice(0, 80)}`);
      marker.addEventListener('click', () => openPanel(comment));
      layer.append(marker); markers.set(comment.id, marker);
    }
    if (panelId && !markers.has(panelId)) closePanel();
    positionMarkers();
  }
  async function refresh() {
    if (refreshing || busy) return;
    refreshing = true;
    const started = generation;
    try {
      const response = await fetch(`${endpoint}?page=${encodeURIComponent(page)}`, { cache: 'no-store' });
      if (!response.ok) throw new Error('无法读取评论，请确认课件服务仍在运行');
      const data = await response.json();
      if (started !== generation) return;
      const next = JSON.stringify(data.comments);
      if (next !== signature) { comments = data.comments; signature = next; renderMarkers(); }
      message('');
    } catch (error) { message(error.message); }
    finally { refreshing = false; }
  }
  async function mutate(payload) {
    const response = await fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, ...payload }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || '评论未保存');
    generation++;
    comments = data.comments; signature = JSON.stringify(comments);
  }
  function button(text, action, className = '') {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = text;
    b.className = className; b.addEventListener('click', action); return b;
  }
  function openPanel(comment = null, editing = false, target = null) {
    if (busy) return;
    panel?.remove(); panel = document.createElement('div'); panel.className = 'comment-panel';
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', comment ? '评论' : '添加评论');
    panelId = comment?.id || null; add.hidden = true;
    const head = document.createElement('div'); head.className = 'comment-panel-head';
    const title = document.createElement('strong'); title.textContent = comment ? '评论' : '添加评论';
    const close = button('×', closePanel); close.setAttribute('aria-label', '关闭评论');
    head.append(title, close);
    const quote = document.createElement('blockquote'); quote.className = 'comment-quote';
    quote.textContent = comment?.quote || target.anchors.map(a => a.quote).join('\n\n');
    const error = document.createElement('p'); error.className = 'comment-error'; error.setAttribute('role', 'alert');
    const actions = document.createElement('div'); actions.className = 'comment-actions';
    panel.append(head, quote);
    if (comment && markers.get(comment.id)?.dataset.changed === 'true') {
      const changed = document.createElement('p'); changed.className = 'comment-anchor-note';
      changed.textContent = '原文位置有变化，评论暂时显示在原段落附近。'; panel.append(changed);
    }
    const perform = async payload => {
      busy = true; panel.setAttribute('aria-busy', 'true');
      panel.querySelectorAll('button, textarea').forEach(el => { el.disabled = true; });
      try {
        await mutate(payload);
        busy = false; closePanel(); getSelection()?.removeAllRanges();
        renderMarkers(); message('');
      } catch (e) {
        busy = false; error.textContent = e.message;
        panel.removeAttribute('aria-busy');
        panel.querySelectorAll('button, textarea').forEach(el => { el.disabled = false; });
        placePanel();
      }
    };
    let editor;
    if (!comment || editing) {
      editor = document.createElement('textarea'); editor.className = 'comment-editor';
      editor.setAttribute('aria-label', '评论内容'); editor.placeholder = '写下修改意见';
      editor.maxLength = 10000; editor.rows = 5; editor.value = comment?.body || '';
      panel.append(editor);
      const save = () => {
        if (!editor.value.trim()) { error.textContent = '请填写评论内容'; editor.focus(); return; }
        perform(comment ? { action: 'edit', id: comment.id, revision: comment.revision, body: editor.value }
          : { action: 'create', anchors: target.anchors, body: editor.value });
      };
      actions.append(button('保存', save, 'comment-save'), button('取消', closePanel));
      editor.addEventListener('keydown', event => {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && !event.isComposing) {
          event.preventDefault(); save();
        }
      });
    } else {
      const body = document.createElement('p'); body.className = 'comment-body'; body.textContent = comment.body;
      panel.append(body);
      actions.append(button('编辑', () => openPanel(comment, true)),
        button('删除', () => perform({ action: 'delete', id: comment.id, revision: comment.revision }), 'comment-delete'));
    }
    panel.append(error, actions); document.body.append(panel); placePanel();
    (editor || close).focus({ preventScroll: true });
  }
  add.addEventListener('pointerdown', e => e.preventDefault());
  add.addEventListener('click', () => { if (pending) openPanel(null, true, pending); });
  document.addEventListener('selectionchange', schedule);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel) { e.preventDefault(); closePanel(); } });
  root.addEventListener('click', event => {
    const trigger = event.target.closest('[data-review-trigger]');
    if (!trigger) return;
    const node = blocks().find(p => p.dataset.review === trigger.dataset.reviewTrigger);
    if (!node) return;
    pending = { anchors: [{ ...locationOf(node), start: 0, end: node.textContent.length, quote: node.textContent }], rect: trigger.getBoundingClientRect() };
    openPanel(null, true, pending);
  });
  root.classList.add('comments-enabled');
  document.addEventListener('scroll', schedule, { capture: true, passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('scroll', () => { placePanel(); add.hidden = true; }, { passive: true });
  root.addEventListener('script:changed', schedule);
  new MutationObserver(schedule).observe(root, { childList: true, characterData: true, subtree: true });
  window.addEventListener('focus', refresh);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  setInterval(() => { if (!document.hidden) refresh(); }, 5000);
  refresh();
}

/* Overlay only: source HTML and assets are captured into the ignored local archive. */
(() => {
  const guide = window.courseOfficialGuide;
  const root = document.querySelector(guide.root);
  if (!root) throw new Error('原文区域缺失：' + guide.root);
  function findText(text) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = []; let node, full = '';
    while ((node = walker.nextNode())) { nodes.push({node, offset:full.length}); full += node.textContent; }
    const start = full.indexOf(text), end = start + text.length;
    if (start < 0) throw new Error('原文边界未匹配：' + text);
    const first = nodes.find(x => x.offset + x.node.length > start);
    const last = nodes.find(x => x.offset + x.node.length >= end);
    return {node:first.node, index:start-first.offset, endNode:last.node, endIndex:end-last.offset};
  }
  function makeRange(step) {
    const range = document.createRange();
    if (step.start) {
      const element = root.querySelector(step.start);
      if (!element) throw new Error('原文起点缺失：' + step.start);
      range.setStartBefore(element);
    } else {
      const match = findText(step.startText);
      range.setStart(match.node, match.index);
    }
    if (step.endAfter) {
      const element = root.querySelector(step.endAfter);
      if (!element) throw new Error('原文终点缺失：' + step.endAfter);
      range.setEndAfter(element);
    } else if (step.endBefore) {
      const element = root.querySelector(step.endBefore);
      if (!element) throw new Error('原文终点缺失：' + step.endBefore);
      range.setEndBefore(element);
    } else {
      const match = findText(step.endText);
      range.setEnd(step.endExclusive ? match.node : match.endNode, step.endExclusive ? match.index : match.endIndex);
    }
    if (range.collapsed || !range.toString().trim()) throw new Error('高亮范围为空：' + step.id);
    return range;
  }
  // Fail visibly if an upstream document changes, rather than silently opening its top.
  const bar = document.createElement('nav');
  bar.id = 'course-source-nav'; bar.setAttribute('aria-label', '文章讲述定位');
  bar.innerHTML = '<span class="source-identity"></span><button data-prev>← 上一处</button><label>定位 <select aria-label="讲述位置"></select></label><button data-next>下一处 →</button><button data-locate>回到高亮</button><a data-original target="_blank" rel="noopener">官方原页 ↗</a><a data-return>返回讲述页 ↗</a>';
  document.body.append(bar);
  bar.querySelector('.source-identity').textContent = '本机原页快照 · ' + guide.capturedAt.slice(0,10);
  bar.querySelector('[data-original]').href = guide.url;
  bar.querySelector('[data-return]').href = guide.returnTo;
  const select = bar.querySelector('select');
  guide.steps.forEach((step, index) => select.add(new Option(`${index+1}/${guide.steps.length} · ${step.label}`, step.id)));
  let ranges;
  try { ranges = guide.steps.map(makeRange); }
  catch (error) {
    bar.dataset.error = 'true'; bar.prepend(document.createTextNode(error.message + '；请回官方原页核对。'));
    throw error;
  }
  let current = 0;
  function locate() {
    const range = ranges[current];
    // Get the first text rectangle, not the bounding box of a multi-screen range.
    const first = [...range.getClientRects()].find(rect => rect.width > 0 && rect.height > 0);
    if (!first) throw new Error('原文没有可见位置：' + guide.steps[current].id);
    let scroller = range.startContainer.nodeType === Node.ELEMENT_NODE ? range.startContainer : range.startContainer.parentElement;
    while (scroller && !(scroller.scrollHeight > scroller.clientHeight + 1 && /auto|scroll/.test(getComputedStyle(scroller).overflowY))) scroller = scroller.parentElement;
    (scroller || window).scrollBy({top: first.top - (guide.topOffset || 112), behavior:'instant'});
  }
  function show() {
    const requested = location.hash.slice(1);
    const index = guide.steps.findIndex(step => step.id === requested);
    // The original table of contents stays usable for looking outside this route.
    if (requested && index < 0) return;
    current = index < 0 ? 0 : index;
    CSS.highlights.set('course-source', new Highlight(ranges[current]));
    root.querySelectorAll('.course-source-object').forEach(element => element.classList.remove('course-source-object'));
    if (guide.steps[current].highlightElement) root.querySelector(guide.steps[current].highlightElement).classList.add('course-source-object');
    select.value = guide.steps[current].id;
    bar.querySelector('[data-return]').href = guide.steps[current].returnTo || guide.returnTo;
    bar.querySelector('[data-prev]').disabled = current === 0;
    bar.querySelector('[data-next]').textContent = current === ranges.length-1 ? (guide.nextGuide.startsWith('http') ? '回到总结 PPT →' : '继续 OpenAI 指南 →') : '下一处 →';
    bar.dataset.step = guide.steps[current].id;
    requestAnimationFrame(locate);
  }
  select.onchange = () => { location.hash = select.value; };
  bar.querySelector('[data-prev]').onclick = () => { location.hash = guide.steps[current-1].id; };
  bar.querySelector('[data-next]').onclick = () => {
    if (current === ranges.length-1) location.href = guide.nextGuide;
    else location.hash = guide.steps[current+1].id;
  };
  bar.querySelector('[data-locate]').onclick = locate;
  window.addEventListener('hashchange', show);
  // An image above the target may settle after initial navigation.
  Promise.all([document.fonts.ready, ...[...document.images].map(img => img.complete ? Promise.resolve() : new Promise(resolve => {img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});}))]).then(show);
  show();
  window.courseSourceRanges = ranges;
})();

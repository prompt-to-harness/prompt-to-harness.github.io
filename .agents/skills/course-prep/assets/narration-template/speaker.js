/* Render once: navigation must not destroy editable source nodes or local state. */
(() => {
  'use strict';
  const data = window.narrationData;
  const nav = document.querySelector('aside nav'), article = document.querySelector('article');
  const panel = document.querySelector('.panel'), aside = document.querySelector('aside');
  const entries = new Map(), links = new Map(), aliases = new Map(), parents = new Map(), mounted = new WeakSet();
  let mode = 'design';
  const locator = data.ppt && createPptLocator(data.ppt);
  const node = (tag, text, cls) => {
    const el = document.createElement(tag);
    if (text !== undefined) el.textContent = text;
    if (cls) el.className = cls;
    return el;
  };
  // Resize the existing columns without remounting scripts or comment anchors.
  const root = document.querySelector('main'), sidebar = aside;
  const divider = node('div', '', 'discussion-resizer');
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
    const min = width <= 520 ? 100 : 180;
    return {min, max: Math.max(min, Math.min(600, width - (width <= 520 ? 220 : 360) - 8))};
  };
  const applyWidth = () => {
    const {min, max} = limits();
    const width = Math.round(Math.max(min, Math.min(max, preferredWidth ?? (root.clientWidth <= 520 ? 110 : root.clientWidth <= 800 ? 210 : 280))));
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


  const title = item => [item.number, item.title].filter(Boolean).join(' ');
  const own = (item, key) => Object.prototype.hasOwnProperty.call(item, key);
  const status = node('p', '', 'navigation-status'); status.setAttribute('role', 'status');
  panel.prepend(status);
  document.querySelector('aside h1').textContent = data.title || '讲述页';
  document.title = data.title || '讲述页';
  function safeUrl(value) {
    const url = new URL(value, location.href);
    if (!['http:', 'https:', 'file:'].includes(url.protocol)) throw new Error('不支持的材料地址：' + value);
    return url.href;
  }
  function externalLink(label, url) {
    const a = node('a', label); a.href = safeUrl(url); a.target = '_blank'; a.rel = 'noopener'; return a;
  }
  function details(label, text, open = false, cls = '') {
    const el = node('details', undefined, cls); el.open = open;
    el.append(node('summary', label));
    if (text !== undefined) el.append(node('div', text, 'detail-text'));
    return el;
  }
  function register(item, el) {
    if (!item.id || entries.has(item.id) || aliases.has(item.id)) throw new Error('缺少或重复的稳定 ID：' + item.id);
    el.id = item.id; el.tabIndex = -1;
    entries.set(item.id, el);
    for (const alias of item.aliases || []) {
      if (entries.has(alias) || aliases.has(alias)) throw new Error('重复的旧锚点：' + alias);
      aliases.set(alias, item.id);
    }
  }
  function toc(item, parent) {
    const a = node('a', title(item)); a.href = '#' + encodeURIComponent(item.id);
    parent.append(a); links.set(item.id, a); return a;
  }
  function pptLocation(parent, ppt) {
    if (!ppt) return;
    const label = locator?.label(ppt.id, ppt.step), href = locator?.href(ppt.id, ppt.step);
    if (!label || !href) {
      parent.append(node('span', 'PPT 定位待核对：' + ppt.id, 'warning'));
      return;
    }
    const a = externalLink(label, href); a.className = 'ppt-location'; parent.append(a);
  }
  function promptBlock(block) {
    const wrap = node('div', undefined, 'prompt-block'), row = node('div', undefined, 'resource-row');
    const label = block.label || 'Prompt', raw = block.text ?? '';
    row.append(block.url ? externalLink(label,block.url) : node('strong', label));
    if (block.purpose) row.append(node('span', block.purpose, 'muted'));
    if (block.location) row.append(node('span', block.location));
    const button = node('button', '复制 ' + label); button.type = 'button';
    const feedback = node('span', '', 'copy-status'); feedback.setAttribute('role', 'status');
    const fold = details('查看原文'); const pre = node('pre', raw); fold.append(pre);
    let fallback;
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(raw); feedback.textContent = '已复制'; }
      catch {
        fold.open = true;
        // A rendered <pre> selection can omit its final newline in Chromium.
        // A readonly control selects the exact source value for manual copying.
        if (!fallback) {
          fallback = node('textarea', undefined, 'copy-selection');
          fallback.readOnly = true; fallback.value = raw;
          fallback.setAttribute('aria-label', label + '原文（只读）');
          fallback.rows = Math.min(12, Math.max(3, raw.split('\n').length));
          pre.hidden = true; fold.append(fallback);
        }
        fallback.focus(); fallback.select();
        feedback.textContent = '已选中原文，请复制';
      }
    });
    wrap.append(node('p', '旧输入待迁移：接好 PPT 展示与复制后再撤下此块', 'warning'));
    row.append(button, feedback); wrap.append(row, fold); return wrap;
  }
  function materialBlock(items) {
    const wrap = node('div', undefined, 'materials');
    for (const item of items || []) {
      if (own(item, 'text')) { wrap.append(promptBlock(item)); continue; }
      const row = node('div', undefined, 'resource-row');
      if (item.url) row.append(externalLink(item.label, item.url)); else row.append(node('strong', item.label));
      if (item.purpose) row.append(node('span', item.purpose, 'muted'));
      if (item.location) row.append(node('span', item.location));
      wrap.append(row);
    }
    return wrap;
  }
  function resourceItems(ids) {
    return (ids || []).map(id => {
      const resource = data.resources?.[id];
      if (!resource) throw new Error('材料或 Prompt 未登记：' + id);
      return resource;
    });
  }
  function resourceLinks(ids) {
    const wrap = node('div', undefined, 'materials');
    for (const item of resourceItems(ids)) {
      const row = node('div', undefined, 'resource-row');
      row.append(item.url ? externalLink(item.label, item.url) : node('strong', item.label));
      if (item.purpose) row.append(node('span', item.purpose, 'muted'));
      if (item.location) row.append(node('span', item.location));
      pptLocation(row, item.ppt);
      if (item.kind === 'prompt' && !item.ppt) throw new Error('Prompt 缺少 PPT 入口：' + item.label);
      wrap.append(row);
    }
    return wrap;
  }
  function cueBlock(block) {
    const labels = {ppt:'PPT',browser:'网页',terminal:'终端',inspect:'Inspect',other:'画面'};
    if (!labels[block.surface]) throw new Error('未知画面对象：' + block.surface);
    const el = node('div', undefined, 'object-cue object-cue-' + block.surface);
    el.append(node('strong', block.label || labels[block.surface], 'object-cue-label'));
    const content = node('div', undefined, 'object-cue-content');
    if (block.text) content.append(node('div', block.text));
    pptLocation(content, block.ppt);
    if (block.resources) content.append(resourceLinks(block.resources));
    el.append(content); return el;
  }
  function renderBlocks(parent, blocks, owner, segment) {
    for (const block of blocks) {
      let el;
      switch (block.type) {
        case 'cue': el = cueBlock(block); break;
        case 'location':
          el = node('div', block.text, 'location'); pptLocation(el, block.ppt); break;
        case 'operation': {
          el = node('div', undefined, 'operation');
          if (block.timing) el.append(node('strong', block.timing, 'timing'));
          const list = node('ol');
          for (const step of block.steps || [block.text || '']) list.append(node('li', step));
          el.append(list); break;
        }
        case 'script': {
          el = node('div', undefined, 'script');
          // Legacy item callback still receives the original item; new sources resolve block.ref.
          const source = window.narrationAdapters?.renderScript?.(owner, block, segment);
          if (source) {
            if (!(source instanceof Node) || source instanceof DocumentFragment || mounted.has(source)) {
              throw new Error('适配器须返回未重复挂载的原始节点：' + (block.ref || owner.id));
            }
            mounted.add(source); el.append(source);
          } else if (block.ref) {
            el.append(node('p', '口播源未接入：' + block.ref, 'warning'));
          } else if (own(block, 'text')) el.append(node('blockquote', block.text));
          else if (block._probe) continue;
          else el.append(node('p', '逐字稿待补', 'pending'));
          break;
        }
        case 'prompt': el = promptBlock(block); break;
        case 'materials': el = materialBlock(block.items); break;
        case 'note': el = node('p', block.text, 'notice'); break;
        case 'preview': {
          el = details(block.label || '画面预览', undefined, false, 'preview');
          el.append(externalLink('打开原画面', block.url));
          let loaded = false;
          el.addEventListener('toggle', () => {
            if (!el.open || loaded) return;
            loaded = true;
            const frame = node('iframe'); frame.title = block.label || '画面预览';
            frame.loading = 'lazy'; frame.src = safeUrl(block.url); el.append(frame);
          });
          break;
        }
        case 'branch':
          el = node('div', undefined, 'branch');
          el.append(node('p', '备用条件：' + block.condition, 'condition'));
          { const fold = details(block.label || '展开备用路线'); renderBlocks(fold, block.blocks || [], owner, segment); el.append(fold); }
          break;
        default: throw new Error('未知模块类型：' + block.type);
      }
      el.dataset.block = block.type;
      const previous=parent.lastElementChild;
      if (block.type==='script' && previous?.dataset.block==='script') previous.append(...el.childNodes);
      else parent.append(el);
    }
  }
  function segmentView(owner, segment, legacy = false) {
    const el = node('section', undefined, 'segment');
    if (segment.id) { register(segment, el); parents.set(segment.id, owner.id); }
    if (segment.title) el.append(node('h5', segment.title));
    const blocks = segment.blocks || [];
    if (segment.status) el.append(node('p', segment.status, 'pending'));
    if (segment.limits) el.append(node('p', segment.limits, 'notice'));
    const design = node('div', undefined, 'design-view'); design.dataset.view = 'design';
    if (segment.design) design.append(node('p', segment.design, 'design-text'));
    if (segment.resources) design.append(resourceLinks(segment.resources));
    if (segment.preparation) design.append(details('录前准备', segment.preparation, false, 'preparation'));
    if (legacy && own(owner, 'points')) design.append(details('原讲述要点（待辨别）', owner.points, true, 'legacy-points'));
    el.append(design);
    const recording = node('div', undefined, 'script-view'); recording.dataset.view = 'script';
    renderBlocks(recording, blocks, owner, segment);
    const scriptPresent = Boolean(recording.querySelector('.script'));
    if (!scriptPresent && (segment.design || (legacy && own(owner, 'points')))) {
      recording.append(node('p', segment.narration === 'none' ? '本段无需口播' : '逐字稿待补 · 可切换到讲述安排查看当前设计', 'pending'));
    }
    el.append(recording);
    if (!design.textContent && !segment.status && !segment.limits) el.dataset.view = 'script';
    return el;
  }
  function legacyBlocks(item) {
    const blocks = [];
    if (item.screen || item.ppt) blocks.push({type:'location', text:item.screen || '', ppt:item.ppt});
    if (item.operation) blocks.push({type:'operation', text:item.operation});
    if (item.materials) blocks.push({type:'materials', items:item.materials});
    if (own(item,'prompt')) blocks.push({type:'prompt', text:item.prompt});
    if (own(item,'script') || item.scriptRef || (!item.segments && window.narrationAdapters?.renderScript)) {
      blocks.push({type:'script', _probe:!own(item,'script') && !item.scriptRef, ...(own(item,'script') ? {text:item.script} : {}), ...(item.scriptRef ? {ref:item.scriptRef} : {})});
    }
    return blocks;
  }
  function entry(item, level, parentId) {
    const section = node('section', undefined, 'entry level-' + level); register(item, section);
    if (parentId) parents.set(item.id, parentId);
    section.append(node('h' + level, title(item)));
    const arrangement = node('div', undefined, 'arrangement'); arrangement.dataset.view = 'design';
    if (item.content) arrangement.append(node('p', item.content, 'overview'));
    if (item.effect) arrangement.append(node('p', '学生收获：' + item.effect, 'overview'));
    if (item.arrangement) {
      for (const text of [item.arrangement.explanation, item.arrangement.transition]) {
        if (text) arrangement.append(node('p', text, 'design-text'));
      }
      if (item.arrangement.resources?.length) {
        arrangement.append(node('h4', '涉及材料与 Prompt'), resourceLinks(item.arrangement.resources));
      }
    }
    section.append(arrangement);
    if (item.arrangement && !item.segments?.length && !item.screens?.length && !item.groups?.length && !own(item,'script') && !item.scriptRef) {
      const pending=node('p',item.narration==='none'?'本环节无需口播':'逐字稿待补 · 可切换到讲述安排查看当前设计','pending');
      pending.dataset.view='script';section.append(pending);
    }
    if (item.status) section.append(node('p', item.status, 'pending'));
    const legacy = legacyBlocks(item);
    // Mixing old top-level body with new segments renders both explicitly, never drops fields.
    if (legacy.length || own(item,'points') || item.design) {
      if (item.segments?.length) section.append(node('p', '兼容内容：请核对旧字段与新讲解段是否重复', 'warning'));
      const legacyView=segmentView(item, {blocks:legacy, design:item.design, limits:item.limits, preparation:item.preparation}, true);
      if (legacyView.childNodes.length) section.append(legacyView);
    } else {
      if (item.limits) section.append(node('p', item.limits, 'notice'));
      if (item.preparation) section.append(details('录前准备',item.preparation));
    }
    for (const segment of item.segments || []) section.append(segmentView(item, segment));
    if (level === 4 && !arrangement.textContent && !item.status && !item.limits && !item.preparation && !item.design && !own(item, 'points') &&
        !(item.segments || []).some(segment => segment.design || segment.status || segment.limits || segment.preparation || segment.resources?.length)) {
      section.dataset.view = 'script';
    }
    article.append(section);
  }
  function overview() {
    const item = {id:'ppt-plan',title:'PPT 逐页安排'}, section = node('section',undefined,'entry level-2');
    register(item,section);toc(item,nav);section.append(node('h2',item.title));
    const plan = data.pptPlan;
    if (!plan) section.append(node('p','PPT 页数与逐页安排待定','pending'));
    else {
      section.append(node('p',`PPT 共 ${plan.pages.length} 页`));
      if (plan.status) section.append(node('p',plan.status,'pending'));
      if (plan.pages.length) {
        const table=node('table',undefined,'ppt-plan'), header=table.createTHead().insertRow();
        for (const label of ['页与关联位置','内容与用途','展示与口播']) {const th=node('th',label);th.scope='col';header.append(th);}
        const body=table.createTBody();
        plan.pages.forEach((page,i)=>{
          const row=body.insertRow(), cell=row.insertCell(), href=locator?.href(page.id);
          cell.append(href ? externalLink(locator.label(page.id),href) : node('span',`第 ${i+1} 页（计划）`));
          cell.append(node('div',page.frames || page.supports || ''));
          const purpose=row.insertCell(); purpose.append(node('div',page.content));
          if (page.role) purpose.append(node('div',page.role,'muted'));
          const presentation=row.insertCell();
          if (page.presentation) presentation.append(node('div',page.presentation));
          if (page.progression) presentation.append(node('div',page.progression));
          if (page.narration) {
            const labels={required:'需要口播',none:'无需口播',pending:'逐字稿待补'};
            if (!labels[page.narration]) throw new Error('未知口播安排：'+page.narration);
            presentation.append(node('div',labels[page.narration],'muted'));
          }
        });section.append(table);
      }
    }
    article.append(section);
  }
  overview();
  for (const part of data.parts || []) {
    const section=node('section',undefined,'nav-part');toc(part,section);entry(part,2);
    for (const group of part.groups || []) {
      const row=node('div',undefined,'nav-row');toc(group,row);section.append(row);entry(group,3,part.id);
      const screens=group.screens || [];
      if (screens.length) {
        const list=node('div',undefined,'nav-children');list.hidden=true;
        const toggle=node('button','›');toggle.type='button';toggle.setAttribute('aria-label','展开 '+title(group));toggle.setAttribute('aria-expanded','false');
        // Controls IDs are independent of content IDs and checked for collisions below.
        list.id='toc-children-'+links.size;toggle.setAttribute('aria-controls',list.id);
        toggle.addEventListener('click',()=>{list.hidden=!list.hidden;toggle.textContent=list.hidden?'›':'⌄';toggle.setAttribute('aria-expanded',String(!list.hidden));toggle.setAttribute('aria-label',(list.hidden?'展开 ':'收起 ')+title(group));});
        row.prepend(toggle);section.append(list);
        for (const screen of screens) {toc(screen,list);entry(screen,4,group.id);}
      }
    }
    nav.append(section);
  }
  const allIDs = new Set();
  for (const el of document.querySelectorAll('[id]')) {
    if (allIDs.has(el.id) || aliases.has(el.id)) throw new Error('页面 ID 冲突：'+el.id);
    allIDs.add(el.id);
  }
  function mark(id) {
    for (const [key,a] of links) {
      if (key===id) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
    }
    for (const list of nav.querySelectorAll('.nav-children')) {
      list.previousElementSibling.classList.toggle('contains-current',Boolean(list.querySelector('[aria-current]')));
    }
  }
  let queued=false;
  function follow() {
    queued=false;
    const top=panel.getBoundingClientRect().top+24;
    let current=null;
    for (const [id,el] of entries) {
      if (!links.has(id) || !el.getClientRects().length) continue;
      if (!current || el.getBoundingClientRect().top<=top) current=id;
      else break;
    }
    if (current) mark(current);
  }
  const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(follow);}};
  function jump(raw,focus=false) {
    let id;
    try {id=decodeURIComponent(raw.replace(/^#/,''));} catch {id=raw.replace(/^#/,'');}
    id=aliases.get(id)||id;
    if (!id) id='ppt-plan';
    let target=entries.get(id) || document.getElementById(id);
    if (!target || !article.contains(target)) {status.textContent='未找到定位：'+id;return;}
    status.textContent='';
    // A hidden detail in design mode resolves to its segment/scene, then its owning group.
    for (let ancestor=target.parentElement; ancestor && ancestor!==article; ancestor=ancestor.parentElement) {
      if (ancestor.tagName==='DETAILS') ancestor.open=true;
    }
    let visibleId=id;
    while (target && !target.getClientRects().length) {
      const enclosing=target.parentElement?.closest('.segment, .entry');
      visibleId=parents.get(visibleId) || enclosing?.id;
      target=entries.get(visibleId) || enclosing;
      if (!target) break;
    }
    if (!target) { status.textContent='当前模式下没有对应位置：'+id; return; }
    for (let ancestor=target.parentElement; ancestor && ancestor!==article; ancestor=ancestor.parentElement) {
      if (ancestor.tagName==='DETAILS') ancestor.open=true;
    }
    const sidebarTop=aside.scrollTop;
    panel.scrollTop+=target.getBoundingClientRect().top-panel.getBoundingClientRect().top-16;
    if(focus) {target.focus({preventScroll:true});aside.scrollTop=sidebarTop;}
    schedule();
  }
  const toolbar = node('nav', undefined, 'mode-toolbar'); toolbar.setAttribute('aria-label', '讲述页显示模式');
  toolbar.append(node('strong', '显示模式'));
  const modeButtons = new Map();
  for (const [value, label] of [['design','讲述安排'],['script','画面与口播']]) {
    const button=node('button',label); button.type='button'; button.dataset.mode=value;
    button.addEventListener('click',()=>{
      if (mode===value) return;
      const top=panel.getBoundingClientRect().top+24;
      const visible=[...entries].filter(([,el])=>el.getClientRects().length);
      const current=visible.filter(([,el])=>el.getBoundingClientRect().top<=top).at(-1) || visible[0];
      const url=new URL(location.href);url.searchParams.set('mode',value);
      if(current) url.hash=current[0];
      history.pushState(null,'',url); applyMode(); jump(url.hash);
    });
    toolbar.append(button); modeButtons.set(value,button);
  }
  document.body.prepend(toolbar);
  function applyMode() {
    const requested=new URLSearchParams(location.search).get('mode');
    mode=['design','script'].includes(requested) ? requested : article.querySelector('.script') ? 'script' : 'design';
    document.body.dataset.mode=mode;
    for (const [value,button] of modeButtons) button.setAttribute('aria-pressed',String(value===mode));
    for (const el of article.querySelectorAll('[data-view]')) el.hidden=el.dataset.view!==mode;
  }
  function restoreLocation() { applyMode(); jump(location.hash); }
  document.addEventListener('click',event=>{
    const a=event.target.closest('a[href^="#"]');
    if (!a || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if(location.hash!==a.hash) history.pushState(null,'',a.hash);
    jump(a.hash,true);
  });
  addEventListener('popstate',restoreLocation);
  addEventListener('hashchange',restoreLocation);
  panel.addEventListener('scroll',schedule,{passive:true});
  new ResizeObserver(schedule).observe(article);
  addEventListener('resize',schedule);
  // Passive scroll only marks the TOC; it never adds history or changes its scroll/folds.
  applyMode();
  requestAnimationFrame(()=>jump(location.hash));
  // Formal course adapters attach the shared editor after original nodes are mounted.
  if (location.protocol !== 'file:') window.narrationAdapters?.enableEditing?.(article);
})();

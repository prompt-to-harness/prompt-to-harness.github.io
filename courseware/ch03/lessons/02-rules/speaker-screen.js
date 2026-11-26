/* 两部分共用画面与讲述模板；移动共享讲师页原节点，保留编辑、评论和源坐标。 */
(() => {
  const params = new URLSearchParams(location.search);
  const unified = window.unifiedSpeakerPlan;
  const recordingReady = !!unified && window.screenPlan.recordingReady === true;
  const recordingView = recordingReady && params.get('view') === 'recording';
  const authoring = !!unified || params.get('part') === '2';
  if (!authoring && (params.has('legacy') || window.lesson.scenes.length > window.lesson.activeSceneIds.length)) {
    document.querySelector('header h1').textContent = '3.2 源稿分组与旧稿取材';
    document.querySelector('header .script-meta').textContent = '讲师备课 · 按源文件分组';
    document.querySelector('header h1+p').textContent = '保留原 p08–p14 供取材，并附第二部分新增稿的源文件分组；本页顺序不作为当前教学设计。当前讲述请使用第一部分、第二部分对照入口。';
    return;
  }
  const root = document.querySelector('#script');
  const plan = unified || (authoring ? window.screenPlan.authoring : window.screenPlan);
  const nodes = new Map([...root.querySelectorAll('[data-scene]')].map(p => [
    [p.dataset.scene, p.dataset.step, p.dataset.part].join(':'), p
  ]));
  // Validate every sequence before moving source nodes, so a stale mapping
  // cannot leave the fallback page missing narration when initialization fails.
  for (const frame of plan.frames) {
    if (frame.presentation !== 'sequence') continue;
    for (const [index, screen] of frame.screens.entries()) {
      if (!screen.beats) continue;
      const used = screen.beats.flatMap(beat => beat.paragraphs || []);
      const count = (screen.reuse || []).length;
      if (used.length !== count || new Set(used).size !== count ||
          used.some(part => !Number.isInteger(part) || part < 0 || part >= count)) {
        throw new Error('口播映射不完整或重复：' + frame.id + ' / 画面 ' + (index + 1));
      }
    }
  }
  document.body.classList.add('screen-outline');
  document.documentElement.classList.add('screen-outline-page');
  document.title = recordingView ? '3.2 · 录制讲师页' : unified ? '3.2 · 讲述页' : '3.2 · 历史取材';
  document.querySelector('header .script-meta').textContent = plan.scope + ' · 讲师审阅';
  document.querySelector('header h1+p').textContent = plan.intro;
  const partLink = document.querySelector('.section-links a[href="' + (authoring ? 'speaker.html?part=2' : 'speaker.html') + '"]');
  partLink?.setAttribute('aria-current', 'page');

  function el(tag, className = '', text) {
    const element = document.createElement(tag);
    element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  function screenSurface(screen) {
    if (!/^PPT\b/.test(screen.surface)) return screen.surface;
    let target = screen.ppt;
    if (!target) {
      for (const key of screen.materials || []) {
        const material = plan.materials[key]; if (!material) continue;
        const url = new URL(material.url, location.href);
        if (url.pathname !== new URL('index.html', location.href).pathname) continue;
        const id = url.hash.slice(1), step = Number(url.searchParams.get('step') || 0);
        if (window.pptLocator?.label(id, step)) { target = {id, step}; break; }
      }
    }
    const label = target && window.pptLocator?.label(target.id, target.step);
    if (!label) return screen.surface;
    const title = screen.surface.replace(/^PPT\s*(?:(?:第\s*\d+\s*页|p\d+[a-z\d-]*|P[\d.-]+)\s*)?[·：]?\s*/, '');
    return 'PPT ' + label + (title ? ' · ' + title : '');
  }
  function paragraph(parent, text, className = '') {
    const p = el('p', className, text); parent.append(p); return p;
  }
  function materials(parent, keys = [], compact = false) {
    for (const key of keys) {
      const item = plan.materials[key];
      if (!item) throw new Error('材料入口缺失：' + key);
      const a = el('a', '', (compact ? item.label.replace(/^PPT\s*·\s*/, '') : item.label) + ' ↗');
      a.href = item.url; a.target = '_blank'; a.rel = 'noopener'; parent.append(a);
    }
  }
  function materialLinks(parent, keys) {
    if (!keys?.length) return;
    const links = el('p', 'cue-links'); materials(links, keys); parent.append(links);
  }
  function details(parent, label) {
    const element = el('details', 'frame-materials frame-preparation');
    element.append(el('summary', '', label)); parent.append(element); return element;
  }
  function takeSource(scene, step, part) {
    const key = [scene, step, part].join(':');
    const node = nodes.get(key);
    if (!node) throw new Error('原稿节点缺失或重复：' + key);
    nodes.delete(key); return node;
  }
  function originalLink(parent, scene) {
    const a = el('a', '', scene + ' · 按源文件分组查看 ↗');
    a.href = '?legacy=1#' + scene; a.target = '_blank'; a.rel = 'noopener'; parent.append(a);
  }

  paragraph(details(document.querySelector('header'), '本部分备课状态'), plan.status);
  const nav = el('nav', 'screen-nav');
  nav.setAttribute('aria-label', unified ? '本节讲述环节' : (authoring ? '第二部分' : '第一部分') + '六个环节');
  const groups = el('div', 'screen-groups'), controls = el('div', 'screen-controls');
  const select = el('select'); select.id = 'screen-location';
  const label = el('label', '', '定位画面'); label.htmlFor = select.id;
  select.onchange = () => { location.hash = select.value; };
  const toggle = el('button', '', '只看讲述内容'); toggle.type = 'button'; toggle.setAttribute('aria-pressed', 'false');
  toggle.onclick = () => {
    const reading = document.body.classList.toggle('narration-only');
    toggle.textContent = reading ? '显示画面对照' : '只看讲述内容';
    toggle.setAttribute('aria-pressed', String(reading));
  };
  controls.append(label, select, toggle); nav.append(groups, controls);
  const units = [];
  let unit, groupName, script;

  for (const [index, frame] of plan.frames.entries()) {
    if (frame.group !== groupName) {
      groupName = frame.group;
      const guide = plan.units.find(item => item.group === groupName);
      if (!guide) throw new Error('讲述环节缺失：' + groupName);
      unit = el('section', 'screen-unit'); unit.dataset.firstFrame = frame.id;
      unit.append(el('h2', 'screen-unit-title', String(units.length + 1).padStart(2, '0') + ' · ' + groupName));
      units.push(unit);
      const layout = el('div', 'stage-layout'), teaching = el('aside', 'stage-teaching');
      for (const [label, value] of [['具体讲法', guide.explanation], ['承接', guide.transition]]) {
        teaching.append(el('h3', '', label)); paragraph(teaching, value);
      }
      script = el('div', 'stage-script');
      script.append(el('h3', '', authoring && !plan.scriptComplete ? '逐字稿与讲述要点' : '逐字稿'));
      layout.append(teaching, script); unit.append(layout);
      const link = el('a', '', groupName); link.href = '#' + frame.id; groups.append(link);
    }
    const section = el('section', 'screen-frame'); section.id = frame.id;
    if (frame.historical) section.dataset.historical = 'true';
    const heading = el('h4', 'screen-frame-title');
    // 旧版逐画面链接移到同号标题，地址与打开方式保持；主导航按讨论稿的六个环节组织。
    const selfLink = el('a', '', String(index + 1).padStart(2, '0'));
    selfLink.href = '#' + frame.id; selfLink.title = frame.title;
    heading.append(selfLink, document.createTextNode(' · ' + frame.title)); section.append(heading);
    if (frame.boundary && frame.presentation !== 'sequence') paragraph(section, frame.boundary, 'screen-boundary');

    if (frame.selectionFrame && (frame.recordingBeats || ['p07b', 'p07c'].includes(frame.scene))) {
      heading.remove();
      function objectCue(kind, title) {
        const block = el('div', 'object-cue object-cue-' + kind);
        block.append(el('strong', 'object-cue-label', title));
        const content = el('div', 'object-cue-content');
        block.append(content); section.append(block);
        return content;
      }
      function spoken(part) {
        const passage = el('div', 'script-passage');
        passage.append(takeSource(frame.scene, frame.step, part));
        section.append(passage);
      }
      if (frame.recordingBeats) {
        const spokenParts = new Set(frame.recordingBeats.map(beat => beat.part));
        for (let part = frame.start; part <= frame.end; part++) {
          if (!spokenParts.has(part)) takeSource(frame.scene, frame.step, part);
        }
        const cueLabels = {ppt: 'PPT', browser: '网页', terminal: '终端', inspect: 'Inspect'};
        for (const beat of frame.recordingBeats) {
          if (beat.part !== undefined) {
            spoken(beat.part);
            continue;
          }
          const cue = objectCue(beat.kind, cueLabels[beat.kind]);
          if (beat.material) {
            materials(cue, [beat.material]);
            if (beat.text) cue.append(document.createTextNode(beat.text));
          } else if (beat.kind === 'ppt') {
            const link = el('a', '', beat.text + ' ↗');
            link.href = 'index.html?mode=slides&step=' + (beat.step ?? frame.step) + '#' + frame.scene;
            link.target = '_blank'; link.rel = 'noopener';
            cue.append(link);
          } else {
            cue.textContent = beat.text;
          }
        }
      } else if (frame.id === 'f06') {
        takeSource(frame.scene, frame.step, frame.start);
        objectCue('terminal', '终端').append(document.createTextNode('选中 Game Playtest'));
        spoken(frame.start + 1);
        const ppt = objectCue('ppt', 'PPT');
        const link = el('a', '', '复制提示词 ↗');
        link.href = 'index.html?mode=slides&step=0#p07b';
        link.target = '_blank'; link.rel = 'noopener';
        ppt.append(link);
        const prompt = details(ppt, '提示词原文');
        prompt.append(takeSource(frame.scene, frame.step, frame.start + 2));
        objectCue('terminal', '终端').append(document.createTextNode('粘贴请求并发送'));
        spoken(frame.start + 3);
      } else if (frame.id === 'f10') {
        takeSource(frame.scene, frame.step, frame.start);
        const ppt = objectCue('ppt', 'PPT');
        const link = el('a', '', '复制同一段提示词 ↗');
        link.href = 'index.html?mode=slides&step=0#p07b';
        link.target = '_blank'; link.rel = 'noopener';
        ppt.append(link);
        objectCue('terminal', '终端').append(
          document.createTextNode('同一项目开新会话，粘贴原请求并发送'));
        spoken(frame.start + 1);
        materials(objectCue('inspect', 'Inspect'), ['autoStep1']);
        spoken(frame.start + 2);
      } else if (frame.id === 'f11') {
        takeSource(frame.scene, frame.step, frame.start);
        materials(objectCue('inspect', 'Inspect'), ['autoStep2']);
        spoken(frame.start + 1);
        materials(objectCue('inspect', 'Inspect'), ['autoStep3']);
        spoken(frame.start + 2);
      } else {
        materials(objectCue('inspect', 'Inspect'), frame.materials);
        const passage = el('div', 'script-passage');
        for (let part = frame.start; part <= frame.end; part++) {
          const node = takeSource(frame.scene, frame.step, part);
          if (node.classList.contains('narration')) passage.append(node);
        }
        section.append(passage);
      }
    } else if (frame.presentation === 'sequence') {
      heading.remove();
      section.classList.add('sequence-frame');
      for (const screen of frame.screens) {
        const beats = screen.beats || [
          {kind:screen.kind || (screen.ppt ? 'ppt' : 'browser'), materials:screen.materials, text:screen.action},
          {paragraphs:(screen.reuse || []).map((_, index) => index)}
        ];
        let destination = section;
        let optionalLabel = '';
        function optionalDestination(label) {
          if (label === optionalLabel) return;
          optionalLabel = label;
          destination = details(section, label + '（主讲可跳过；原稿与定位保留）');
          destination.classList.remove('frame-preparation');
          destination.dataset.optionalNarration = 'true';
        }
        if (screen.optional) optionalDestination(screen.optional);
        const used = new Set();
        for (const beat of beats) {
          if (beat.optional) optionalDestination(beat.optional);
          if (beat.paragraphs) {
            const passage = el('div', 'script-passage');
            for (const index of beat.paragraphs) {
              if (used.has(index)) throw new Error('口播重复映射：' + frame.id + '/' + index);
              used.add(index);
              const source = frame.reuse[screen.reuse[index]];
              if (!source) throw new Error('口播映射缺失：' + frame.id + '/' + index);
              passage.append(takeSource(source.scene, source.step, source.part));
            }
            // 已由就近对象提示承接的旧切换节点仍保留源坐标，但不重复展示。
            if (beat.hidden) passage.hidden = true;
            destination.append(passage);
          } else {
            const labels = {ppt:'PPT',browser:'网页',terminal:'终端',inspect:'Inspect'};
            if (!labels[beat.kind]) throw new Error('未知画面类型：' + beat.kind);
            const cue = el('div', 'object-cue object-cue-' + beat.kind);
            if (beat.materials?.length) {
              cue.id = 'cue-' + beat.materials[0];
              cue.dataset.cueTarget = 'true';
            }
            cue.append(el('strong', 'object-cue-label', labels[beat.kind]));
            const content = el('div', 'object-cue-content');
            materials(content, beat.materials, true);
            if (beat.text) {
              let action = beat.text.replace(/^(网页|PPT|Inspect|终端)\s*·\s*/, '');
              if (beat.kind === 'ppt') action = action.replace(/^(?:打开|推进|回到)\s+p\d+[a-z\d-]*(?:\s*第\s*\d+\s*步)?[，、]?\s*/i, '');
              paragraph(content, action, 'object-cue-action');
            }
            if (beat.jumpTo) {
              const jump = el('a', '', beat.jumpLabel || '继续主讲');
              jump.href = '#' + beat.jumpTo;
              content.append(jump);
            }
            cue.append(content); destination.append(cue);
          }
        }
        if (used.size !== (screen.reuse || []).length) throw new Error('尚有口播未显示：' + frame.id);
      }
    } else if (authoring && !frame.selectionFrame) {
      for (const screen of frame.screens) {
        const row = el('div', 'script-beat'), cue = el('p', 'script-cue');
        cue.append(el('strong', '', screenSurface(screen)), el('span', '', screen.action)); row.append(cue);
        if (screen.visible) paragraph(row, screen.visible, 'script-visible');
        materialLinks(row, screen.materials);
        const sources = screen.reuse || [];
        if (sources.length) {
          const passage = el('div', 'script-passage spoken-block');
          for (const sourceIndex of sources) {
            const source = frame.reuse[sourceIndex];
            passage.append(takeSource(source.scene, source.step, source.part));
          }
          row.append(passage);
        }
        if (screen.points?.length) {
          paragraph(row, sources.length ? '接续要点' : '讲述要点', 'points-label');
          const points = el('ul', 'talk-points');
          screen.points.forEach(point => points.append(el('li', '', point))); row.append(points);
        }
        section.append(row);
      }
      const prep = details(section, '备课说明与来源');
      paragraph(prep, frame.status);
      if (frame.prep) paragraph(prep, frame.prep);
      materials(prep, frame.prepMaterials);
      for (const source of frame.reuse) {
        paragraph(prep, '原稿定位：' + source.scene + ' / 第 ' + (source.step + 1) + ' 步 / 段 ' + source.part + '（空行分段，段索引从 0 起）');
      }
      for (const source of frame.previousReuse || []) {
        paragraph(prep, '历史 game-playtest 口播：' + source.scene + ' / 第 ' + (source.step + 1) + ' 步 / 段 ' + source.part);
        // 历史取材也从共享节点移动，编辑与评论仍写回同一份原稿。
        const passage = el('div', 'script-passage');
        passage.append(takeSource(source.scene, source.step, source.part)); prep.append(passage);
      }
      for (const scene of new Set([...frame.reuse, ...(frame.previousReuse || [])].map(source => source.scene))) originalLink(prep, scene);
    } else {
      let passage = null, linked = false;
      for (let part = frame.start; part <= frame.end; part++) {
        const node = takeSource(frame.scene, frame.step, part);
        if (!node.classList.contains('narration')) {
          passage = null;
          const cue = el('div', 'script-cue');
          if (!linked) cue.append(el('strong', '', frame.surface));
          cue.append(node); section.append(cue);
          if (!linked) { materialLinks(section, frame.materials); linked = true; }
        } else {
          if (!passage) { passage = el('div', 'script-passage'); section.append(passage); }
          passage.append(node);
        }
      }
      const prep = details(section, '备课说明与来源');
      for (const [label, value] of [['画面内容', frame.visible], ['解释与判断', frame.explain], ['推进参考', frame.action], ['复用来源', frame.reuse]]) {
        paragraph(prep, label + '：' + value);
      }
      originalLink(prep, frame.scene);
    }
    script.append(section);
    const option = el('option', '', heading.textContent); option.value = frame.id; select.append(option);
  }
  if (!authoring && nodes.size) throw new Error('尚有 ' + nodes.size + ' 段未匹配画面');
  if (authoring && plan.contentDesign) {
    document.body.classList.add('discussion-layout');
    const sidebar = el('aside', 'discussion-sidebar');
    const top = el('div', 'discussion-brand');
    top.append(el('h1', '', document.title));
    if (recordingReady) {
      const mode = el('a', '', recordingView ? '备课讲述页' : '录制讲师页');
      mode.href = recordingView ? 'speaker.html' : 'speaker.html?view=recording';
      top.append(mode, document.createTextNode(' · '));
    }
    if (unified) {
      const ppt = el('a', '', 'PPT ↗'); ppt.href = 'index.html?mode=slides#p07'; ppt.target = '_blank'; top.append(ppt, document.createTextNode(' · '));
    }
    const back = el('a', '', unified ? '← 课程首页' : '← 当前讲述线'); back.href = unified ? '../../../index.html' : 'speaker.html'; top.append(back);
    sidebar.append(top);
    if (recordingView) document.body.classList.add('recording-view');
    const tree = el('nav', 'discussion-tree'); tree.setAttribute('aria-label', '全部内容目录');
    const panel = el('div', 'discussion-panel'); panel.tabIndex = -1;
    const articles = new Map(), links = new Map(), frameAliases = new Map();
    const screenTargets = new Map(), screenNavLinks = new Map();
    const frameNodes = new Map(units.flatMap(unit => [...unit.querySelectorAll('.screen-frame')])
      .map(frame => [frame.id, frame]));
    for (const [groupIndex, guide] of plan.contentDesign.units.entries()) {
      if (recordingView && !guide.items.length) continue;
      const unitId = 'unit-' + (groupIndex + 1);
      const overview = el('article', 'discussion-content'); overview.id = unitId;
      overview.append(el('h2', '', guide.title));
      if (guide.sourcePlanning?.content) paragraph(overview, guide.sourcePlanning.content, 'discussion-unit-goal');
      if (guide.sourcePlanning?.purpose) paragraph(overview, guide.sourcePlanning.purpose, 'discussion-unit-purpose');
      for (const source of guide.guides || []) {
        overview.append(el('h3', '', source.group));
        paragraph(overview, source.explanation);
        paragraph(overview, source.transition);
      }
      if (guide.status) paragraph(overview, guide.status);
      if (guide.pptPlan) {
        overview.append(el('h3', '', 'PPT 共 ' + guide.pptPlan.total + ' 页 · 逐页讲述安排'));
        paragraph(overview, guide.pptPlan.status);
        const table = el('table', 'ppt-plan-table');
        const head = el('tr');
        for (const title of ['页与讲述段', '讲解内容', '展开与切换']) head.append(el('th', '', title));
        const thead = el('thead'); thead.append(head); table.append(thead);
        const tbody = el('tbody');
        for (const page of guide.pptPlan.pages) {
          const row = el('tr'), cell = el('td');
          const link = el('a', '', window.pptLocator?.label(page.scene) || ('第 ' + page.page + ' 页 · ' + page.scene));
          link.href = 'index.html?mode=slides&step=0#' + page.scene;
          link.target = '_blank'; link.rel = 'noopener'; cell.append(link);
          paragraph(cell, page.frames); row.append(cell);
          const content = el('td'); paragraph(content, page.content); paragraph(content, page.status);
          row.append(content, el('td', '', page.progression)); tbody.append(row);
        }
        table.append(tbody); overview.append(table);
      }
      if (guide.discussion) {
        const source = el('a', '', '查看 Discussion 原文 ↗');
        source.href = guide.discussion; source.target = '_blank'; source.rel = 'noopener';
        overview.append(source);
      }
      const order = el('ol', 'discussion-unit-order');
      for (const item of guide.items) {
        const row = el('li'), link = el('a', '', item.title);
        link.href = '#content-' + item.frame; row.append(link); order.append(row);
      }
      overview.append(order); panel.append(overview); articles.set(unitId, { article: overview });
      const group = el('section', 'discussion-tree-group');
      const groupHeading = el('h2'), groupLink = el('a', '', guide.directoryTitle || guide.title);
      groupLink.href = '#' + (recordingView ? guide.items[0].frame : unitId); groupHeading.append(groupLink); group.append(groupHeading);
      links.set(unitId, groupLink);
      const list = el('ul'); group.append(list); tree.append(group);
      const directoryLists = new Map(), directoryNumbers = new Map();
      for (const section of guide.directoryGroups || []) {
        const row = el('li', 'discussion-tree-section');
        const details = el('details'), heading = el('summary', 'directory-section-heading'), children = el('ul');
        const toggle = el('button', 'directory-section-toggle', '›');
        toggle.type = 'button';
        toggle.setAttribute('aria-label', '展开或收起 ' + section.title);
        toggle.setAttribute('aria-expanded', 'false');
        toggle.onclick = event => { event.preventDefault(); details.open = !details.open; };
        details.addEventListener('toggle', () => {
          toggle.setAttribute('aria-expanded', String(details.open));
          toggle.textContent = details.open ? '⌄' : '›';
        });
        const sectionLink = el('a', '', section.title);
        sectionLink.href = '#' + section.frames[0];
        sectionLink.dataset.directoryAction = 'locate';
        sectionLink.onclick = event => {
          event.preventDefault();
          history.pushState(null, '', sectionLink.hash);
          showItem();
        };
        heading.onclick = event => event.preventDefault();
        heading.append(toggle, sectionLink);
        details.append(heading, children); row.append(details); list.append(row);
        section.frames.forEach((frame, index) => {
          directoryLists.set(frame, children);
          directoryNumbers.set(frame, section.title.split(' ')[0] + '.' + (index + 1));
        });
      }
      for (const item of guide.items) {
        const li = el('li'), link = el('a', '', directoryNumbers.has(item.frame) ? directoryNumbers.get(item.frame) + ' ' + item.title : item.title);
        link.href = (recordingView ? '#' : '#content-') + item.frame;
        // 同一项也可以从逐字稿视图回到内容设计，不依赖重复 hashchange。
        link.onclick = () => { if (location.hash === link.hash) showItem(); };
        li.append(link);
        if (!guide.directoryGroups && item.screens?.length) {
          li.classList.add('discussion-tree-section');
          const disclosure = el('details'), summary = el('summary'), children = el('ul');
          link.onclick = null;
          summary.append(link); disclosure.append(summary, children); li.replaceChildren(disclosure);
          item.screens.forEach((screen, index) => {
            const row = el('li'), child = el('a', '', item.title.split(' ')[0] + '.' + (index + 1) + ' ' + screenSurface(screen));
            const screenId = 'directory-screen-' + item.frame + '-' + index;
            child.href = '#' + screenId;
            screenTargets.set(screenId, item.frame); screenNavLinks.set(screenId, child);
            row.append(child); children.append(row);
          });
        }
        (directoryLists.get(item.frame) || list).append(li); links.set(item.frame, link);
        const article = el('article', 'discussion-content'); article.id = 'content-' + item.frame;
        if (!guide.directoryGroups && item.presentation !== 'sequence') paragraph(article, guide.title, 'discussion-parent');
        const directorySection = guide.directoryGroups?.find(group => group.frames.includes(item.frame));
        const isDetail = directorySection && directorySection.frames[0] !== item.frame;
        article.append(el('h2', isDetail ? 'discussion-detail-title' : '', item.title));
        const modes = el('nav', 'discussion-modes'); modes.setAttribute('aria-label', '查看层级');
        const designLink = el('a', '', unified ? '讲述安排' : '内容设计'); designLink.href = '#content-' + item.frame;
        const scriptLink = el('a', '', unified ? '画面与口播' : '画面与逐字稿'); scriptLink.href = '#' + item.frame;
        designLink.onclick = () => { location.hash = 'content-' + item.frame; showItem(); };
        scriptLink.onclick = () => { location.hash = item.frame; showItem(); };
        modes.append(designLink, scriptLink); article.append(modes);
        const design = el('div', 'discussion-design');
        if (item.presentation === 'sequence') {
          const arrangement = item.arrangement?.length ? item.arrangement : (item.content ? [item.content] : []);
          for (const text of arrangement) paragraph(design, text, 'discussion-main-content');
          if (item.transition) paragraph(design, item.transition);
          design.append(el('h3', '', '涉及材料'));
          const list = el('ul', 'arrangement-materials');
          const keys = [...new Set((item.screens || []).flatMap(screen => screen.materials || []))];
          const listedPages = new Set();
          for (const key of keys) {
            const material = plan.materials[key], url = new URL(material.url, location.href);
            const pageId = url.hash.slice(1);
            const wholePage = url.pathname === new URL('index.html',location.href).pathname && window.pptLocator?.label(pageId);
            if (wholePage && listedPages.has(pageId)) continue;
            const row = el('li');
            if (wholePage) {
              listedPages.add(pageId);
              const title = window.lesson.scenes.find(scene => scene.id === pageId)?.title || material.label;
              const link = el('a','',wholePage + ' · ' + title + ' ↗');
              link.href = window.pptLocator.href(pageId,0); link.target='_blank'; link.rel='noopener'; row.append(link);
            } else materials(row, [key]);
            if (plan.materials[key].purpose) row.append(el('span', '', ' — ' + plan.materials[key].purpose));
            list.append(row);
          }
          design.append(list);
        } else if (item.screens && !item.content) {
          const order = el('ol', 'discussion-unit-order');
          for (const [screenIndex, screen] of item.screens.entries()) {
            const step = el('li');
            step.id = 'directory-screen-' + item.frame + '-' + screenIndex;
            step.append(el('strong', '', screenSurface(screen)));
            paragraph(step, screen.action);
            if (screen.points?.length) {
              const points = el('ul', 'talk-points');
              screen.points.forEach(point => points.append(el('li', '', point)));
              step.append(points);
            }
            materialLinks(step, screen.materials);
            order.append(step);
          }
          design.append(order);
        } else {
          paragraph(design, item.content, 'discussion-main-content');
          const reason = el('aside', 'discussion-reason');
          reason.append(el('h3', '', '这段的作用与边界')); paragraph(reason, item.reason); design.append(reason);
          if (item.screens?.length) {
            design.append(el('h3', '', '涉及材料'));
            materialLinks(design, [...new Set(item.screens.flatMap(screen => screen.materials || []))]);
          }
        }
        if (plan.frames.find(frame => frame.id === item.frame)?.selectionFrame) {
          design.replaceChildren();
          const section = guide.directoryGroups?.find(group => group.frames.includes(item.frame));
          const firstFrame = section?.frames[0];
          if (firstFrame === item.frame) {
            article.querySelector('h2').textContent = section.title;
            const frame = plan.frames.find(frame => frame.id === item.frame);
            const arrangement = plan.units.find(unit => unit.group === frame.group);
            paragraph(design, arrangement?.explanation, 'discussion-main-content');
            paragraph(design, arrangement?.transition);
            design.append(el('h3', '', '涉及材料'));
            const keys = [...new Set(section.frames.flatMap(id =>
              plan.frames.find(frame => frame.id === id)?.materials || []))];
            materialLinks(design, keys);
          } else {
            modes.remove();
          }
        }
        article.append(design);
        const recording = el('div', 'discussion-recording');
        for (const id of item.recordingFrames || [item.frame]) {
          const frame = frameNodes.get(id);
          if (!frame) continue;
          if (frame.dataset.historical) {
            if (recordingView) continue;
            const archive = details(recording, '历史口播取材（不在本次录制顺序内）');
            archive.append(frame);
            if (location.hash === '#' + id) archive.open = true;
          } else {
            const optional = plan.frames.find(entry => entry.id === id)?.optional;
            if (optional) {
              const archive = details(recording, optional + '（主讲可跳过；原稿与定位保留）');
              archive.classList.remove('frame-preparation');
              archive.dataset.optionalNarration = 'true';
              archive.append(frame);
            } else recording.append(frame);
          }
          if (id !== item.frame) frameAliases.set(id, item.frame);
        }
        article.append(recording); panel.append(article);
        for (const cue of recording.querySelectorAll('[data-cue-target]')) screenTargets.set(cue.id, item.frame);
        articles.set(item.frame, { article, recording, design, designLink, scriptLink });
      }
    }
    sidebar.append(tree);
    sidebar.id = 'discussion-sidebar';
    const splitter = el('div', 'discussion-splitter');
    splitter.tabIndex = 0;
    splitter.setAttribute('role', 'separator');
    splitter.setAttribute('aria-label', '调整目录宽度，向左拖至边缘收起');
    splitter.setAttribute('aria-orientation', 'vertical');
    splitter.setAttribute('aria-controls', sidebar.id);
    const directoryToggle = el('button', 'discussion-directory-toggle', '收起目录');
    directoryToggle.type = 'button';
    directoryToggle.setAttribute('aria-controls', sidebar.id);
    root.replaceChildren(sidebar, splitter, panel);
    const widthKey = 'ch03-rules-discussion-sidebar';
    let width = innerWidth > 900 ? 360 : innerWidth > 600 ? 260 : 165;
    let lastOpenWidth = width;
    const maximum = () => Math.max(160, Math.min(640, root.clientWidth - 280));
    const applyWidth = value => {
      width = value < 100 ? 0 : Math.max(160, Math.min(maximum(), value));
      if (width) lastOpenWidth = width;
      root.style.setProperty('--discussion-sidebar-width', width + 'px');
      root.classList.toggle('sidebar-collapsed', width === 0);
      sidebar.inert = width === 0;
      sidebar.setAttribute('aria-hidden', String(width === 0));
      directoryToggle.textContent = width ? '收起目录' : '展开目录';
      directoryToggle.setAttribute('aria-expanded', String(width !== 0));
      splitter.setAttribute('aria-valuemin', '0');
      splitter.setAttribute('aria-valuemax', String(maximum()));
      splitter.setAttribute('aria-valuenow', String(Math.round(width)));
      splitter.setAttribute('aria-valuetext', width ? Math.round(width) + ' 像素' : '目录已收起');
    };
    const saveWidth = () => {
      try { localStorage.setItem(widthKey, JSON.stringify({ width, lastOpenWidth })); } catch { /* 仍可在当前页面调整 */ }
    };
    try {
      const saved = JSON.parse(localStorage.getItem(widthKey));
      if (saved && Number.isFinite(saved.width) && saved.width >= 0) {
        width = saved.width;
        if (Number.isFinite(saved.lastOpenWidth) && saved.lastOpenWidth >= 160) lastOpenWidth = saved.lastOpenWidth;
      }
    } catch { /* 使用默认宽度 */ }
    applyWidth(width);
    directoryToggle.onclick = () => { applyWidth(width ? 0 : lastOpenWidth); saveWidth(); };
    let dragStart = null;
    splitter.onpointerdown = event => {
      if (event.button !== 0) return;
      event.preventDefault(); dragStart = width;
      splitter.setPointerCapture(event.pointerId);
      document.body.classList.add('resizing-directory');
    };
    splitter.onpointermove = event => {
      if (dragStart === null) return;
      applyWidth(event.clientX - root.getBoundingClientRect().left);
    };
    const endDrag = event => {
      if (dragStart === null) return;
      if (event.type === 'pointercancel') applyWidth(dragStart);
      else if (width === 0 && dragStart > 0) lastOpenWidth = dragStart;
      dragStart = null; document.body.classList.remove('resizing-directory');
      saveWidth();
    };
    splitter.onpointerup = endDrag;
    splitter.onpointercancel = endDrag;
    splitter.onlostpointercapture = endDrag;
    splitter.onkeydown = event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'Enter'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') applyWidth(0);
      else if (event.key === 'Enter') applyWidth(width ? 0 : lastOpenWidth);
      else if (event.key === 'ArrowLeft') applyWidth(width <= 160 ? 0 : width - 20);
      else applyWidth(width ? width + 20 : lastOpenWidth);
      saveWidth();
    };
    window.addEventListener('resize', () => applyWidth(width));
    let scriptMode = recordingView || (params.get('mode') ?
      params.get('mode') === 'script' : !location.hash.startsWith('#content-') && !location.hash.startsWith('#unit-'));
    const toolbar = el('nav', 'speaker-mode-toolbar');
    toolbar.setAttribute('aria-label', '讲述页显示模式');
    toolbar.append(directoryToggle, el('strong', '', '显示模式'));
    const designModeButton = el('button', '', '讲述安排');
    const scriptModeButton = el('button', '', '画面与口播');
    toolbar.append(designModeButton, scriptModeButton);
    document.body.append(toolbar);
    document.body.classList.add('has-speaker-mode-toolbar');
    function setMode(value) {
      const visible = [...articles].filter(([, item]) => !item.article.hidden);
      const top = panel.getBoundingClientRect().top + 100;
      const current = visible.filter(([, item]) => item.article.getBoundingClientRect().top <= top).at(-1) || visible[0];
      scriptMode = value;
      const url = new URL(location.href);
      url.searchParams.set('mode', value ? 'script' : 'design');
      if (current) url.hash = (value ? '' : 'content-') + current[0];
      history.replaceState(null, '', url);
      showItem();
    }
    designModeButton.onclick = () => setMode(false);
    scriptModeButton.onclick = () => setMode(true);
    const markItem = (selected, currentScreen = '') => {
      for (const [key, link] of links) link.toggleAttribute('aria-current', key === selected);
      for (const [id, a] of screenNavLinks) a.toggleAttribute('aria-current', id === currentScreen);
      const selectedLink = screenNavLinks.get(currentScreen) || links.get(selected);
      for (const section of tree.querySelectorAll('.discussion-tree-section')) {
        section.classList.toggle('contains-current', section.contains(selectedLink));
      }
      // Keep the sidebar scroll independent from content navigation.
    };
    const showItem = () => {
      const currentMode = new URLSearchParams(location.search).get('mode');
      if (currentMode) scriptMode = recordingView || currentMode === 'script';
      const hash = location.hash.slice(1);
      const originalRequested = hash.startsWith('content-') ? hash.slice(8) : hash;
      const legacyItem = plan.contentDesign.units.flatMap(unit => unit.items).find(item => item.legacyAliases?.includes(originalRequested));
      const requested = legacyItem?.frame || originalRequested;
      // 已有具体讲述项优先；仅尚无内容的旧地址回退到部分概览。
      const pendingPlugin = unified && !articles.has(requested) && /^3\.2\.4(?:\.\d+)?$/.test(requested);
      const screenTarget = screenTargets.get(requested);
      let id = screenTarget || (pendingPlugin ? 'unit-4' : frameAliases.get(requested) || requested);
      // 口播模式隐藏部分概览；一级目录应定位到该部分首个环节，不能回退到全节开头。
      const unitIndex = /^unit-(\d+)$/.exec(id);
      if (scriptMode && unitIndex) {
        const guide = plan.contentDesign.units[Number(unitIndex[1]) - 1];
        const firstItem = guide?.items.find(item => articles.get(item.frame)?.recording);
        if (firstItem) id = firstItem.frame;
      }
      const hasTarget = articles.has(id) && (!recordingView || articles.get(id).recording);
      const selected = hasTarget ? id : plan.frames[0].id;
      designModeButton.setAttribute('aria-pressed', String(!scriptMode));
      scriptModeButton.setAttribute('aria-pressed', String(scriptMode));
      for (const [, item] of articles) {
        if (item.recording) {
          item.recording.hidden = !scriptMode;
          item.design.hidden = scriptMode;
          item.article.hidden = !scriptMode && !item.design.textContent.trim();
          item.designLink.parentElement.hidden = true;
        } else {
          item.article.hidden = scriptMode;
        }
      }
      let current = articles.get(selected);
      if (current.article.hidden) {
        const group = plan.contentDesign.units.flatMap(unit => unit.directoryGroups || [])
          .find(group => group.frames.includes(selected));
        const parent = group && articles.get(group.frames[0]);
        current = parent && !parent.article.hidden ? parent :
          [...articles.values()].find(item => !item.article.hidden);
      }
      const target = scriptMode && !unitIndex ? current.recording || current.article : current.article;
      panel.scrollTop += target.getBoundingClientRect().top - panel.getBoundingClientRect().top - 24;
      if (screenTarget && !recordingView) {
        const screen = document.getElementById(requested);
        if (screen) {
          for (let node = screen.parentElement; node; node = node.parentElement) {
            if (node.matches('details[data-optional-narration]')) node.open = true;
          }
        }
        if (screen && screen.getClientRects().length) {
          panel.scrollTop += screen.getBoundingClientRect().top - panel.getBoundingClientRect().top - 24;
        }
      }
      markItem(selected, requested);
    };
    panel.addEventListener('scroll', () => {
      const visible = [...articles].filter(([, item]) => !item.article.hidden);
      const top = panel.getBoundingClientRect().top + 100;
      const current = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 2 ? visible.at(-1) : visible.filter(([, item]) => item.article.getBoundingClientRect().top <= top).at(-1) || visible[0];
      const screens = [...current[1].article.querySelectorAll('[id^="directory-screen-"]')];
      const screen = screens.filter(node => node.getBoundingClientRect().top <= top).at(-1);
      markItem(current[0], screen?.id);

    }, {passive:true});
    // 全部正文节点持续挂载；导航只定位，被动滚动只更新目录标记。
    if (unified || plan.scope.startsWith('3.2.2')) {
      for (const link of root.querySelectorAll('a[href^="#"]')) {
        if (link.dataset.directoryAction) continue;
        link.onclick = event => {
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          if (location.hash !== link.hash) history.pushState(null, '', link.getAttribute('href'));
          showItem();
        };
      }
    }
    window.pptLocator?.decorate(root);
    window.addEventListener('popstate', showItem);
    window.addEventListener('hashchange', showItem);
    window.addEventListener('load', showItem, {once:true});
    showItem();
    return;
  }
  let contentDirectory;
  root.replaceChildren(nav, ...units);

  const syncNavHeight = () => {
    const height = getComputedStyle(nav).position === 'sticky' ? nav.getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty('--screen-nav-offset', (height + 20) + 'px');
  };
  new ResizeObserver(syncNavHeight).observe(nav);
  const followHash = () => {
    syncNavHeight();
    if (contentDirectory && location.hash.startsWith('#content-b')) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        contentDirectory.open = true;
        target.closest('.directory-unit').open = true;
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
      return;
    }
    if (contentDirectory && location.hash === '#content-directory') {
      contentDirectory.open = true;
      [...groups.children].forEach(link => link.removeAttribute('aria-current'));
      contentDirectory.scrollIntoView({ block: 'start', behavior: 'instant' });
      return;
    }
    const frame = plan.frames.find(item => '#' + item.id === location.hash);
    // 兼容第一部分原 PPT 页号深链，定位到它在讲述线中的首个画面。
    const sceneFrame = !authoring && plan.frames.find(item => '#' + item.scene === location.hash);
    const current = frame || sceneFrame || (!location.hash && plan.frames[0]);
    if (!current) return;
    select.value = current.id;
    const target = document.getElementById(current.id);
    const owner = target.closest('.screen-unit');
    for (const [index, link] of [...groups.children].entries()) {
      if (units[index] === owner) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    if (location.hash) (owner.dataset.firstFrame === current.id ? owner : target).scrollIntoView({ block: 'start', behavior: 'instant' });
  };
  window.addEventListener('scroll', () => {
    const offset = nav.getBoundingClientRect().height + 24;
    const current = plan.frames.filter(frame => document.getElementById(frame.id).getBoundingClientRect().top <= offset).at(-1);
    if (!current) return;
    select.value = current.id;
    const owner = document.getElementById(current.id).closest('.screen-unit');
    [...groups.children].forEach((link, index) => link.toggleAttribute('aria-current', units[index] === owner));
  }, {passive:true});
  window.addEventListener('hashchange', followHash);
  window.addEventListener('load', followHash, { once: true });
  document.fonts.ready.then(followHash);
  followHash();
})();

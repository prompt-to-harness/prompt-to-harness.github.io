/* Presentation navigation only: never replace or summarise source messages. */
(async () => {
  const query = new URLSearchParams(location.search);
  let itinerary = null, showAll = false;
  let topicPosition = Number(query.get('position') || 0);
  if (query.has('topic')) {
    const topicsResponse = await fetch('course-topics.json');
    if (!topicsResponse.ok) throw new Error('无法加载讲述定位');
    itinerary = (await topicsResponse.json())[query.get('topic')];
    if (!itinerary || !Number.isInteger(topicPosition) || !itinerary.steps[topicPosition]) throw new Error('讲述位置不存在');
    const target = itinerary.steps[topicPosition];
    showAll = target.show_all === true;
    for (const key of ['run','sample','message','mark','label']) {
      if (target[key] !== undefined) query.set(key,target[key]);
      else query.delete(key);
    }
  }
  const run = query.get('run');
  if (!run) return;
  const response = await fetch('course-manifest.json');
  if (!response.ok) throw new Error('无法加载原始记录索引');
  const manifest = await response.json();
  const record = manifest[run];
  if (!record) throw new Error('没有这个归档案例');
  let sample = query.get('sample') || (run === 'old5' ? 'archive' : 'session');
  let message = query.get('message');
  if (query.has('event')) {
    const target = record.events[query.get('event')];
    if (!target) throw new Error('原始记录中没有这个事件');
    ({sample, message} = target);
  }
  if (query.has('line')) message = record.maps[sample]?.[query.get('line')];
  if (!record.maps[sample] || (query.has('line') && !message)) throw new Error('原始记录定位不存在');
  const hash = `#/logs/${record.file}/samples/sample/${sample}/1/messages${message ? '?message='+encodeURIComponent(message) : ''}`;
  if (!location.hash) location.hash = hash;
  const bar = document.createElement('div');
  bar.id = 'course-source-bar';
  const label = document.createElement('span');
  label.textContent = `${record.title} · ${record.boundary || (record.full ? '原始记录' : '历史导出 · 完整运行日志缺失')}`;
  label.title = `原始名称：${record.original_name}；归档 ID：${record.archive_id}`;
  const position = document.createElement('span');
  position.textContent = query.get('label') || (query.has('line') ? `源文件第 ${query.get('line')} 行` : message || '完整记录');
  const source = document.createElement('a');
  source.href = record.raw_paths?.[sample] || `raw/${run}-${sample}.${sample === 'archive' ? 'json' : 'jsonl'}`;
  source.textContent = '查看源记录'; source.target='_blank'; source.rel='noopener';
  const locate = document.createElement('button');
  locate.textContent='回到标记'; locate.type='button';
  locate.onclick=()=>{location.hash=hash; highlight(true);};
  bar.append(label, position, locate, source);
  const promptSource = record.prompt_source?.[sample];
  if (promptSource) {
    const originalPrompt = source.cloneNode();
    originalPrompt.href = promptSource;
    originalPrompt.textContent = '查看历史 Prompt';
    bar.append(originalPrompt);
  }
  if (itinerary) {
    const back = document.createElement('button'), forward = document.createElement('button');
    const caption = document.createElement('span');
    const positions = itinerary.main_positions || itinerary.steps.map((_, index) => index);
    const mainIndex = positions.indexOf(topicPosition);
    const before = positions.findLast(index => index < topicPosition);
    const after = positions.find(index => index > topicPosition);
    const progress = itinerary.main_positions
      ? (mainIndex >= 0 ? `主讲 ${mainIndex+1}/${positions.length}` : '备查记录')
      : `记录 ${topicPosition+1}/${positions.length}`;
    caption.textContent = `${itinerary.title} · ${progress}`;
    back.textContent = '上一条记录'; forward.textContent = '下一条记录';
    back.disabled = before === undefined; forward.disabled = after === undefined;
    const go = index => { const url = new URL(location.href); url.hash=''; url.search='';
      url.searchParams.set('topic', query.get('topic')); url.searchParams.set('position', index); location.assign(url); };
    back.onclick=()=>go(before); forward.onclick=()=>go(after);
    const jump = document.createElement('select');
    jump.setAttribute('aria-label','跳转到讲述标记');
    itinerary.steps.forEach((step,index) => jump.add(new Option(step.label, index)));
    jump.value = topicPosition;
    jump.onchange = () => go(jump.value);
    bar.append(caption,back,jump,forward);
  }
  document.body.append(bar);
  const style = document.createElement('style');
  style.textContent = `
  #course-source-bar{position:fixed;bottom:0;left:0;right:0;z-index:10000;background:#edf5ef;color:#183a2b;border-top:1px solid #b6cbbb;padding:8px 16px;display:flex;gap:18px;align-items:center;font:14px/1.5 system-ui;flex-wrap:wrap}
  #course-source-bar a{color:#185c42} #course-source-bar button{border:1px solid #b6cbbb;background:white;color:#185c42;border-radius:4px;padding:3px 10px}
  body{padding-bottom:58px!important}
  @media(max-width:600px){html,body{min-width:0!important;width:100%}#app{min-width:0!important;width:100%} .header-nav{overflow-x:auto} [id^="sample-heading"]{overflow-x:auto} #course-source-bar{gap:8px;font-size:12px}}
  [data-course-focus]{scroll-margin-top:80px}
  `;
  document.head.append(style);
  new ResizeObserver(()=>{document.body.style.setProperty('padding-bottom',`${bar.getBoundingClientRect().height+12}px`,'important');}).observe(bar);
  let expanded = 0, located = false, currentPassage = 0;
  const focusKey = `${sample}/${message}${query.has('mark') ? '/'+query.get('mark') : ''}`;
  const passages = record.focus?.[focusKey] || (query.has('find') ? [{text:query.get('find'),occurrence:1}] : []);
  style.textContent += '::highlight(course-match){background:#ffcf64;color:#17281e}';
  const previous=document.createElement('button'), next=document.createElement('button');
  previous.textContent='上一处';next.textContent='下一处';
  previous.onclick=()=>{currentPassage=Math.max(0,currentPassage-1);highlight(true);};
  next.onclick=()=>{currentPassage=Math.min(passages.length-1,currentPassage+1);highlight(true);};
  if (!showAll) bar.append(previous,next);
  const status=document.createElement('span');status.id='course-focus-status';bar.append(status);

  // Keep source-character offsets while comparing across markdown/code spans,
  // whitespace and escaped newlines. Only the matched text ranges receive color.
  function canonical(text) {
    const chars=[], offsets=[];
    for(let i=0;i<text.length;) {
      const escaped=text.slice(i).match(/^\\+[nrt]/);
      if(escaped){i+=escaped[0].length;continue;}
      const char=String.fromCodePoint(text.codePointAt(i));
      if(/[\p{L}\p{N}]/u.test(char)){chars.push(char.toLowerCase());for(let n=0;n<char.length;n++)offsets.push(i+n);}
      i+=char.length;
    }
    return {text:chars.join(''),offsets};
  }
  function textRanges(node) {
    const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);
    const entries=[];let text='',part;
    while((part=walker.nextNode())) {
      if(part.parentElement.closest('button,#course-source-bar'))continue;
      entries.push({node:part,start:text.length,end:text.length+part.data.length});text+=part.data;
    }
    const flat=canonical(text),ranges=[];let matched=0;
    for(const passage of passages) {
      const needle=canonical(passage.text.replace(/^\d+\.\s+/, '')).text;
      let at=-1;
      for(let n=0;n<(passage.occurrence||1);n++) {at=flat.text.indexOf(needle,at+1);if(at<0)break;}
      if(at===false || at<0)continue;
      const start=flat.offsets[at],end=flat.offsets[at+needle.length-1]+1;
      const first=entries.find(x=>x.start<=start&&x.end>start);
      const last=entries.find(x=>x.start<end&&x.end>=end);
      if(!first||!last)continue;
      const range=new Range();range.setStart(first.node,start-first.start);range.setEnd(last.node,end-last.start);
      ranges.push(range);matched++;
    }
    return {ranges,matched};
  }
  function highlight(scroll=false) {
    if (!message) return;
    const original = record.tool_targets?.[sample]?.[message];
    const signature = original && canonical(original).text.slice(0,280);
    const input = signature && [...document.querySelectorAll('.tool-call-input')].find(el=>canonical(el.textContent).text.includes(signature));
    const candidates = signature ? [...document.querySelectorAll('[id*="-tool-call-"]')].filter(el=>canonical(el.textContent).text.includes(signature)) : [];
    const mappedRow = record.rows?.[sample]?.[message];
    const toolNode = candidates.find(el=>el.id===`${mappedRow}-tool-call-0`) || candidates[0];
    const systemPrefix = record.system_prefixes?.[sample]?.[message];
    const systemNode = systemPrefix && [...document.querySelectorAll('.system[data-message-id]')].find(el=>canonical(el.textContent).text.includes(canonical(systemPrefix).text));
    const node=document.querySelector(`[data-message-id="${CSS.escape(message)}"]`) || input?.closest('[id*="-tool-call-"]') || toolNode || systemNode;
    if(!node)return;
    document.querySelectorAll('[data-course-focus]').forEach(el=>{if(el!==node)el.removeAttribute('data-course-focus');});
    node.setAttribute('data-course-focus','');
    const more=[...node.querySelectorAll('button')].find(b=>b.textContent.trim()==='more...');
    if(more&&expanded<12){expanded++;more.click();}
    const {ranges,matched}=textRanges(node);
    CSS.highlights.set('course-match',new Highlight(...ranges));
    const label=showAll ? `已定位 ${matched}/${passages.length} 处` : passages.length ? `第 ${currentPassage+1}/${passages.length} 处 · 已定位 ${matched} 处` : '完整记录 · 未指定文字标记';
    if(status.textContent!==label)status.textContent=label;
    status.dataset.matched=matched;status.dataset.expected=passages.length;
    previous.disabled=currentPassage===0;next.disabled=currentPassage>=passages.length-1;
    if(ranges.length&&(!located||scroll)) {
      const range=ranges[Math.min(currentPassage,ranges.length-1)];let parent=range.startContainer.parentElement;
      while(parent&&!(parent.scrollHeight>parent.clientHeight&&/auto|scroll/.test(getComputedStyle(parent).overflowY)))parent=parent.parentElement;
      if(parent)parent.scrollTop+=range.getBoundingClientRect().top-parent.getBoundingClientRect().top-180;
      else range.startContainer.parentElement.scrollIntoView({block:'center'});
      located=true;
    }
  }
  let scheduled=false;
  new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{scheduled=false;highlight();});}}).observe(document.getElementById('app') || document.body,{childList:true,subtree:true});
  highlight();
  setTimeout(()=>highlight(true),1200);
})().catch(error=>{
  const alert=document.createElement('p');alert.setAttribute('role','alert');alert.textContent=`日志定位失败：${error.message}`;document.body.prepend(alert);
});

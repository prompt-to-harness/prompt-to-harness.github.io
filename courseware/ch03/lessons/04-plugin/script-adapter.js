/* Display adaptation only; screen-plan.js and script.json remain the sources. */
(() => {
  const data = window.narrationData;
  if (location.hash === '#creator-gallery') history.replaceState(null, '', location.pathname + location.search + '#ui-opening');
  const editorUrl = new URL('../../../shared/script-editor.js', document.currentScript.src);
  const nodes = new Map();
  const resources = {};
  const links = {
    'web-search:0':['搜索入口'], 'web-search:1':['候选详情','Anthropic 源仓库'],
    'web-topic:0':['Trending'], 'web-topic:1':['Design & UI'],
    'web-mp:0':['SkillsMP 搜索'], 'web-repo:0':['Vercel agent-skills'], 'web-repo:1':['Vercel agent-skills'],
    'web-gallery:0':['Gallery'], 'web-official:0':['Code with Claude'],
    'web-author:0':['AI Hero 视频与文章'],
    'web-reverse:0':['Matt 的 Skills 仓库'], 'web-reverse:1':['AI Hero Skills']
  };
  function materials(blocks) {
    return blocks.flatMap(b => b.type === 'materials' ? b.items : b.type === 'branch' ? materials(b.blocks) : []);
  }
  function adapt(blocks, ids) {
    const output = [];
    let location;
    for (const block of blocks) {
      if (block.type === 'materials') continue;
      if (block.type === 'location') { location = block; continue; }
      if (block.type === 'branch') {
        output.push({...block, blocks:adapt(block.blocks, ids)}); continue;
      }
      if (block.type !== 'script') { output.push(block); continue; }
      const [scene, rawStep] = block.ref.split(':');
      const step = Number(rawStep);
      const text = window.narrationScripts[scene]?.[step];
      if (typeof text !== 'string') throw new Error('口播引用不存在：' + block.ref);
      let after;
      text.split('\n\n').forEach((paragraph, part) => {
        if (/^【(?:操作提示|切换)｜/.test(paragraph)) {
          let cue = paragraph.replace(/^【(?:操作提示|切换)｜/, '').replace(/】$/, '');
          const tail = cue.match(/[，；]讲完(.*)$/);
          if (tail) { after = `讲完后${tail[1]}`; cue = cue.slice(0, tail.index); }
          const names = links[block.ref];
          const selected = names ? ids.filter(id => names.includes(resources[id].label)) : [];
          output.push({type:'cue',surface:scene.startsWith('web-')?'browser':scene.startsWith('app-')?'other':'ppt',...(scene.startsWith('app-') ? {label:'Codex 桌面端'} : {}),text:cue,
            ...(location?.ppt ? {ppt:location.ppt} : {}),resources:selected});
          location = undefined;
        } else if (paragraph) {
          const ref = `${scene}:${step}:${part}`;
          if (nodes.has(ref)) throw new Error('重复口播引用：' + ref);
          const node = document.createElement('blockquote');
          node.textContent = paragraph;
          Object.assign(node.dataset,{scene,step,part,scriptEdit:''});
          nodes.set(ref,node);
          output.push({type:'script',ref});
        }
      });
      if (after) output.push({type:'cue',surface:'ppt',text:after});
    }
    if (location) output.push(location);
    return output;
  }
  for (const part of data.parts) for (const group of part.groups) {
    const ids = [];
    for (const screen of group.screens) for (const segment of screen.segments) {
      const local = materials(segment.blocks).map((item,index) => {
        const id = `${segment.id}-material-${index}`;
        resources[id] = {...item,kind:'material'};
        ids.push(id); return id;
      });
      segment.blocks = adapt(segment.blocks,local);
    }
    group.arrangement = {resources:ids};
  }
  data.resources = resources;
  data.ppt = {section:'3.4',pages:window.lesson.scenes,url:'index.html'};
  for (const page of data.pptPlan.pages) Object.assign(page,{role:'主讲',narration:'required'});
  window.narrationAdapters = {
    renderScript(_owner,block) { return nodes.get(block.ref); },
    async enableEditing(article) {
      const {enableScriptEditing} = await import(editorUrl.href);
      await enableScriptEditing(article,{commentsEnabled:false});
    }
  };
})();

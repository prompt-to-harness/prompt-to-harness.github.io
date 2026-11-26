/* Display-only adaptation: screen-plan.js remains the editable narration source. */
(() => {
  const source = window.narrationData;
  const editable = new Map();
  const resources = {};
  const editorUrl = new URL('../../../shared/script-editor.js', document.currentScript.src);
  const materialKeys = (items, prefix) => (items || []).map((item, index) => {
    const key = `${prefix}-material-${index}`;
    resources[key] = {...item, kind: 'material'};
    return key;
  });
  const surface = text => /Inspect|读取记录|原始命令/.test(text) ? 'inspect' : /终端|CLI/.test(text) ? 'terminal' : /PPT/.test(text) ? 'ppt' : 'browser';
  function screenView(screen) {
    const materials = materialKeys(screen.materials, screen.id);
    const blocks = [];
    const paragraphs = (screen.script || '').split('\n\n');
    // The first cue carries the material entrances; following cues preserve actual timing.
    let linked = false;
    if (screen.task) blocks.push({type:'note', text:`实验上下文：${screen.task.context}\n结果与边界：${screen.task.result}`});
    const prompts = screen.prompts || (screen.prompt ? [{label:'实际开发请求',text:screen.prompt}] : []);
    for (const prompt of prompts) blocks.push({type:'prompt', ...prompt});
    paragraphs.forEach((text, part) => {
      if (!text) return;
      for (const [index, location] of (screen.inspectBefore || []).filter(item => item.part === part).entries()) {
        const key = materialKeys([{label:location.label,url:location.url}], `${screen.id}-inspect-${part}-${index}`)[0];
        blocks.push({type:'cue',surface:'inspect',...(location.text ? {text:location.text} : {}),resources:[key]});
      }
      if (/^【(?:操作提示|切换)｜/.test(text)) {
        if ((screen.suppressCues || []).includes(part)) { linked = true; return; }
        const cueRule=(screen.cueMaterials || []).find(rule=>text.includes(rule.match));
        const location = screen.cuePpt?.[part];
        const ppt = location && {...location,description:window.lesson.scenes.find(scene=>scene.id===location.id)?.title};
        const cueLinks=(cueRule ? materials.filter((key,index)=>cueRule.labels.includes(screen.materials[index].label)) : (!linked ? materials : []))
          .filter(key => !ppt || !/^index\.html\?mode=slides#/.test(resources[key].url || ''));
        const cueText=screen.displayCueOverrides?.[part] ?? text.replace(/^【(?:操作提示|切换)｜/,'').replace(/】$/,'');
        blocks.push({type:'cue',surface:ppt ? 'ppt' : surface(cueText),text:cueText,...(ppt ? {ppt} : {}),...(cueLinks.length ? {resources:cueLinks} : {})});
        linked = true;
      } else {
        const ref = `${screen.id}:${part}`;
        const original = document.createElement('blockquote');
        original.textContent = text;
        Object.assign(original.dataset,{scriptEdit:'',screen:screen.id,part});
        editable.set(ref, original);
        blocks.push({type:'script',ref});
      }
    });
    if (!linked && !screen.inspectBefore?.length) blocks.unshift({type:'cue',surface:surface(screen.screen || ''),text:screen.screen,resources:materials});
    const preparation = [];
    if (screen.preflight) {
      const p=screen.preflight;
      preparation.push(p.title,p.summary,...p.steps.map(x=>`${x.action}\n通过标准：${x.pass}`),`当前验证状态：${p.status}`);
    }
    if (screen.task) preparation.push('回放与重演操作',...screen.task.actions,`原始记录定位：${screen.task.source}`);
    return {
      id:screen.id,number:screen.number,title:screen.title,
      preparation:preparation.join('\n\n') || undefined,
      segments:[{design:`当前画面：${screen.screen}\n操作：${screen.operation}\n${screen.points}\n承接：${screen.transition}`,resources:materials,
        blocks}]
    };
  }
  const parts=source.parts.map(part=>({
    id:part.id,number:part.number,title:part.title,content:part.content,effect:part.effect,
    arrangement:{resources:materialKeys(part.materials,part.id)},
    status:part.id===source.parts[0].id ? '工作稿：三种生成集中比较；两款游戏复用，一款补跑。后半段人工试听、录屏收音与讲师试讲待完成。' : undefined,
    groups:part.groups.map(group=>({
      id:group.id,number:group.number,title:group.title,
      arrangement:{explanation:group.screens.map(s=>`${s.title}：${s.points}`).join('\n\n'),
        transition:group.screens.at(-1).transition,
        resources:group.screens.flatMap(s=>materialKeys([...(s.materials || []),...(s.prompts || (s.prompt ? [{label:'实际开发请求'}] : [])).map(p=>({label:p.label,url:`?mode=script#${s.id}`,purpose:'历史请求与复制入口；对应 PPT 待同步'}))],`${group.id}-${s.id}`))},
      screens:group.screens.map(screenView)
    }))
  }));
  window.narrationData={...source,parts,resources,
    ppt:{section:window.lesson.section,pages:window.lesson.scenes,url:'index.html'},
    pptPlan:{status:`共 ${window.lesson.scenes.length} 页；音效人工试听与录屏收音待完成。`,pages:window.lesson.scenes.map(scene=>{
      const current={
        'creation-evidence':['3.3.1.1 上下文准备','先说明材料与 Prompt 的关系'],
        'create-direct':['3.3.1.2.1 直接提炼','截图 → 展开讲解 Prompt → 复制 → direct 终端'],
        'create-creator':['3.3.1.2.2 内置创建工具','截图 → 展开讲解 Prompt → 复制 → creator 终端'],
        'create-reference':['3.3.1.2.3 补充 Reference','截图 → 展开讲解 Prompt → 复制 → reference 终端'],
        'skill-inputs':['review-defaults / slide-2','安装第三份 → 新会话发送请求 → 保存的 Skill 和游戏短比 → 进入界面过小例子'],
        'skill-files':['size-problem','问题截图 → 实际游戏'],
        'size-request':['size-diagnosis','请求重点 → 展开与复制 → 已有材料'],
        'size-cause':['size-diagnosis','分析位置 → 原 Skill 与生成日志'],
        'size-revision':['size-change','修改请求 → 修订原文与差异预留'],
        'size-check':['size-revalidate','原请求 → 新游戏 → 回看 Skill'],
        'size-summary':['size-summary','两个案例之后回顾优化步骤与三项注意事项'],
        'audio-goal':['iteration-need / iteration-criteria','提出声音目标，明确新增与保留'],
        'audio-result':['audio-regenerate → audio-verdict','修改版请求 → 试玩、试听与回归 → 回 PPT 收束']
      }[scene.id];
      return {id:scene.id,content:scene.title || scene.id,role:current?'主讲':'历史保留',
        supports:current?.[0] || '旧双份比较，仅供备查',
        presentation:current?.[1] || '本轮录制跳过，不按翻页顺序自动播放',
        narration:current?'required':'none'};
    })}

  };

  window.narrationAdapters={
    renderScript(_item,block){return editable.get(block?.ref);},
    async enableEditing(article){
      if(location.protocol!=='file:') {
        const {enableScriptEditing}=await import(editorUrl.href);
        await enableScriptEditing(article,{commentsEnabled:false});
      }
    }
  };
})();

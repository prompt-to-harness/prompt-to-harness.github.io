'use strict';
const $ = (s, root=document) => root.querySelector(s);
const all = (s, root=document) => [...root.querySelectorAll(s)];
const records = window.GALLERY_DATA;
const byId = Object.fromEntries(records.map(r=>[r.id,r]));
const groups=[
 {id:'repeat-a',title:'A · 一句话，同条件跑两次',label:'同 Prompt 重复',description:'Codex 0.163.0 → MiniMax-M3.1-Flash · max · 第二章主页 848f059 · 未见游戏 Skill 读取。A1 与 A2 请求原文及已归档的运行配置一致。'},
 {id:'repeat-b',title:'B · 写清规则，同条件跑两次',label:'同 Prompt 重复',description:'与 A 组使用同一运行配置，Prompt 改为明确的 12 张牌与规则。B1 与 B2 请求相同；跨 A/B 组比较的是请求变化。'},
 {id:'repeat-c',title:'C · 四要素，同条件跑两次',label:'同 Prompt 重复',description:'同一运行配置，Prompt 加入目标、背景、约束和验收。C1 与 C2 请求相同；不与 A/B 混称为同一句话。'},
 {id:'interactive',title:'多轮交互 · 确认、反馈与收尾',label:'过程样本',description:'7 个 Codex + MiniMax 主页版本，未见游戏 Skill 读取。对话由脚本代输入或模拟学员推动，多数预设先计划、确认后实施。轮次包含确认、真实修正和收尾，具体原因见卡片与“关于”。'},
 {id:'early',title:'早期复跑 · 10 月 7 日历史样本',label:'记录不完整',description:'Codex 0.160.1 → MiniMax-M3.1-Flash-Preview · 第二章主页。先计划，再按推荐确认；模型与 CLI 版本不同于 A/B/C，完整原始输出缺失。'},
 {id:'minimax-standalone',title:'MiniMax 独立开发 · 两个不同任务',label:'不是 Skill 开关对照',description:'两份均为 Codex 0.163.0 → MiniMax-M3.1-Flash，从空目录开始。翻牌明确不加载游戏 Skill；躲避读取 Game Studio。玩法和需求也变了，不能据此推断 Skill 的净效果。'},
 {id:'agent-standalone',title:'原开发 Agent · 独立探索初版',label:'模型未核定',description:'11 月 5 日的两个独立项目，不能确认为 MiniMax 生成。复盘记载先写翻牌、再读 Game Studio 做躲避；原始生成会话尚未定位。'}
];
let filter='全部', current=null, playerId=null, phaseIndex=0, requestId=0, playerToken=0;
let visibleIds=records.map(r=>r.id), allExpanded=false;
const expandedIds=new Set();
function el(tag, cls, text) { const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n; }
function button(text, action, cls) {const b=el('button',cls,text);b.type='button';b.addEventListener('click',action);return b;}
function image(r,cls=''){const n=el('img',cls);n.src=r.preview;n.alt=r.title+'的最终游戏画面';n.loading='lazy';return n;}
function rawDetails(title,text){const d=el('details','raw-details');d.append(el('summary','',title),el('pre','',text||'未归档'));return d;}
function render(){
 const query=$('#search').value.trim().toLowerCase(),only=$('#complete-only').checked;
 const list=records.filter(r=>(filter==='全部'||r.category===filter)&&(!only||r.full)&&[r.title,r.summary,r.model,r.tags.join(' '),r.group,r.category,r.skill,r.provider].join(' ').toLowerCase().includes(query));
 $('#result-count').textContent=`${list.length} 个版本${only?' · 完整记录':''} · 点击画面试玩`;
 visibleIds=list.map(r=>r.id);
 $('#empty').hidden=!!list.length;$('#grid').replaceChildren();
 for(const group of groups){
  const members=list.filter(r=>r.comparison_group===group.id);if(!members.length)continue;
  const section=el('section','experiment-group');section.dataset.group=group.id;
  const header=el('div','group-heading'),heading=el('div');heading.append(el('h2','',group.title));const scope=el('details','group-scope');scope.append(el('summary','','比较说明'),el('p','',group.description));header.append(heading,el('span','group-label',group.label));
  const grid=el('div','grid'+(members.length===2?' pair-grid':''));section.append(header,scope,grid);$('#grid').append(section);
 for(const r of members){
  const card=el('article','card');card.dataset.id=r.id;
  const cover=button('',()=>play(r.id),'cover');cover.setAttribute('aria-label','试玩 '+r.title);cover.append(image(r),el('span','cover-cta','试玩 ↗'));
  const body=el('div','card-content'),meta=el('div','card-meta');meta.append(el('span','card-id',`${r.id.toUpperCase()} / ${r.batch}`),el('span','',r.date));
  const facts=el('dl','process-facts');
  for(const [label,value] of [
   ['模型',r.model],['执行器',r.tool+' / '+(r.provider.startsWith('MiniMax')?'MiniMax API':'调用来源未核定')],
   ['游戏 Skill',r.skill],['用户输入',r.round_label+' · '+r.conversation_source],['轮次构成',r.round_breakdown],
   ['起点 / 配置',r.baseline_short+' / 推理档位 '+r.effort],['方案确认',r.plan_behavior],
   ['实现组织',r.architecture],['实际验证',r.validation_summary],['主要修正',r.iteration_summary]
  ]){facts.append(el('dt','',label),el('dd',label==='游戏 Skill'?'skill-status skill-'+r.skill_status:label==='用户输入'?'rounds-value':'',value));}
  const bottom=el('div','card-bottom');bottom.append(el('span','',r.phase_count?`${r.phase_count} 个阶段 · ${r.coverage}`:r.coverage));
  const about=button('',()=>openAbout(r.id),'about-button');about.setAttribute('aria-label','关于 '+r.title);about.append(el('span','','i'),document.createTextNode('关于'));bottom.append(about);
  const disclosure=el('details','process-details');disclosure.open=expandedIds.has(r.id);const summary=el('summary');summary.append(el('span','','开发过程与实验条件'),el('span','disclosure-hint',disclosure.open?'收起':'点击展开'));disclosure.append(summary,facts);disclosure.addEventListener('toggle',()=>{if(disclosure.open)expandedIds.add(r.id);else expandedIds.delete(r.id);$('.disclosure-hint',disclosure).textContent=disclosure.open?'收起':'点击展开';syncExpandButton();});
  const caption=el('p','game-caption',r.tags.filter(t=>!t.includes('Skill')).slice(0,2).join(' · '));
  body.append(meta,el('h2','',r.experiment_title),caption,disclosure,bottom);card.append(cover,body);grid.append(card);
 }
 }
 syncExpandButton();
}
function syncExpandButton(){const ds=all('.process-details');allExpanded=ds.length>0&&ds.every(d=>d.open);$('#expand-all').textContent=allExpanded?'收起全部过程 ↑':'展开全部过程 ↓';$('#expand-all').setAttribute('aria-pressed',String(allExpanded));}
function selectTab(name){for(const t of ['summary','trace']){$('#'+t+'-panel').hidden=t!==name;$('#'+t+'-tab').classList.toggle('active',t===name);$('#'+t+'-tab').setAttribute('aria-pressed',String(t===name));}if(name==='trace')loadTrace();}
function openAbout(id){
 current=byId[id];requestId++;phaseIndex=0;const r=current;
 $('#about-kicker').textContent=`${id.toUpperCase()} / ${r.date} / ${r.batch}`;$('#about-title').textContent=r.title;$('#about-subtitle').textContent=r.summary;$('#trace-count').textContent=r.phase_count?`${r.phase_count} 阶段`:'记录缺失';
 const layout=el('div','summary-layout'),left=el('div'),right=el('div');left.append(image(r,'summary-picture'),el('h3','','为什么保留这一版'),el('p','body-copy',r.why));
 right.append(el('h3','','版本档案'));const dl=el('dl','fact-grid');
 for(const [k,v] of [['模型',r.model],['调用来源',r.provider],['开发工具',r.tool],['推理档位',r.effort],['游戏 Skill',r.skill],['用户输入',r.round_label],['对话来源',r.conversation_source],['轮次构成',r.round_breakdown],['为何继续',r.round_reason],['方案确认',r.plan_behavior],['主要修正',r.iteration_summary],['项目起点',r.base],['主要规则',r.tags.join(' / ')],['记录范围',`${r.coverage}${r.event_count?` · ${r.event_count} 条事件 / ${r.call_count} 次工具调用`:''}`]])dl.append(el('dt','',k),el('dd','',v));
 right.append(dl,el('h3','','能做什么比较'),el('p','body-copy',r.compare),el('h3','','已有检查'),el('p','body-copy',r.checks));if(r.caveat)right.append(el('p','note',r.caveat));layout.append(left,right);
 const panel=$('#summary-panel');panel.replaceChildren(layout);
 if(r.phases.length){panel.append(el('h3','',`生成过程 · 已标记 ${r.phases.length} 个阶段`));const phases=el('div','phase-overview');r.phases.forEach((p,i)=>{const b=button('',()=>{phaseIndex=i;selectTab('trace')},'phase-pill');b.append(el('b','',String(i+1).padStart(2,'0')),document.createTextNode(p.title));phases.append(b)});panel.append(phases,button('查看逐阶段完整记录 →',()=>selectTab('trace'),'primary-button'));}
 else panel.append(el('p','note','该版本原始生成会话未定位。目前只能展示开发复盘，无法提供完整执行链路或可靠的阶段划分。'),button('查看现有开发复盘 →',()=>selectTab('trace'),'primary-button'));
 panel.append(rawDetails('原始任务输入',r.prompt));if(r.round_inputs.length)panel.append(rawDetails('用户输入逐轮明细（含确认、追加反馈和收尾）',r.round_inputs.map(x=>`第 ${x.n} 轮 · 事件 ${x.event}\n${x.text}`).join('\n\n────────\n\n')));panel.append(rawDetails('实验条件与核验依据',`调用来源：${r.provider}\n模型：${r.model}\n执行器：${r.tool}\n推理档位：${r.effort}\n起点提交：${r.base_commit}\n配置：${r.config_note}\n游戏 Skill：${r.skill}\n核验：${r.skill_evidence}\n来源：${r.control_source}${r.prompt_sha256?'\nPrompt SHA-256：'+r.prompt_sha256:''}\n比较边界：${r.compare}`));
 $('#trace-panel').replaceChildren();selectTab('summary');if(!$('#about').open)$('#about').showModal();$('#about').scrollTop=0;
}
const loading={};
function getTrace(id){if(window.GAME_TRACES[id])return Promise.resolve(window.GAME_TRACES[id]);if(loading[id])return loading[id];return loading[id]=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=`traces/${id}.js`;s.onload=()=>resolve(window.GAME_TRACES[id]);s.onerror=()=>{delete loading[id];s.remove();reject(new Error('记录文件未能加载，请通过本地服务打开汇总页。'));};document.head.append(s)});}
async function loadTrace(){
 const id=current.id,token=requestId;$('#trace-panel').replaceChildren(el('p','body-copy','正在打开运行记录…'));
 try{const trace=await getTrace(id);if(current.id!==id||token!==requestId)return;renderTrace(trace);}catch(e){if(current.id===id)$('#trace-panel').replaceChildren(el('p','load-error',e.message));}
}
function renderTrace(trace){
 const r=current,panel=$('#trace-panel');panel.replaceChildren();
 panel.append(el('p','trace-intro',r.full?`本次运行按实际执行顺序划为 ${trace.phases.length} 个阶段。阶段名与摘要是后补的整理说明；展开事件可看用户输入、助手公开回复、工具调用及返回原文。未列入系统注入、内部推理和重复传输事件；凭据、本机路径及图片二进制已处理。原记录自身截断的工具输出无法补回。`:'记录不完整：下方只呈现已留存的历史材料。阶段是对现存节选的整理，不能替代缺失的原始执行日志。'));
 if(!trace.events.length){if(trace.recap)panel.append(rawDetails('开发与试玩复盘原文（不是生成日志）',trace.recap));else panel.append(el('p','note','原始会话未定位。已有产品与检查摘要见“版本摘要”。'));if(trace.recap_source)panel.append(el('p','source-footer','复盘来源：'+trace.recap_source));return;}
 const layout=el('div','trace-layout'),nav=el('nav','phase-nav');nav.setAttribute('aria-label','运行阶段');const content=el('div','phase-detail');
 trace.phases.forEach((p,i)=>{const b=button('',()=>{phaseIndex=i;renderTrace(trace)},i===phaseIndex?'active':'');b.append(el('b','',`${String(i+1).padStart(2,'0')} / 事件 ${p.start}—${p.end}`),document.createTextNode(p.title));b.setAttribute('aria-current',i===phaseIndex?'step':'false');nav.append(b);});
 const p=trace.phases[phaseIndex],controls=el('div','trace-controls');controls.append(el('span','',`${phaseIndex+1} / ${trace.phases.length} 阶段 · 本阶段 ${p.end-p.start+1} 条事件`));const download=el('a','','下载整理记录');download.href=`traces/${r.id}.json`;download.download=r.id+'-trace.json';controls.append(download);
 content.append(controls,el('h3','',p.title),el('p','body-copy','整理说明：'+p.summary));
 const events=el('div','events');for(const e of trace.events.slice(p.start-1,p.end)){
  const d=el('details','event '+e.kind),s=el('summary'),text=el('div','event-summary');text.append(el('span','event-title',e.title),el('span','event-preview',e.text.slice(0,220)));
  s.append(el('span','event-number',String(e.n).padStart(3,'0')),el('span','event-kind',({context:'环境',user:'用户',assistant:'助手',call:'调用',result:'返回',error:'异常'})[e.kind]||e.kind),text);
  const source=el('div','event-source',`${e.source}${e.line?' · L'+e.line:' · 历史导出'}${e.time?' · '+e.time:''}${e.note?'\n'+e.note:''}`);
  d.append(s,source);d.addEventListener('toggle',()=>{if(d.open&&!$('pre',d))d.append(el('pre','',e.text))});events.append(d);
 }
 content.append(events);const pagination=el('div','phase-pagination');const prev=button('← 上一阶段',()=>{phaseIndex--;renderTrace(trace)}),next=button('下一阶段 →',()=>{phaseIndex++;renderTrace(trace)});prev.disabled=phaseIndex===0;next.disabled=phaseIndex===trace.phases.length-1;pagination.append(prev,next);content.append(pagination);
 layout.append(nav,content);panel.append(layout);
 if(trace.final)panel.append(rawDetails('最终交付回复',trace.final));if(trace.diff)panel.append(rawDetails('最终代码差异（归档 diff）',trace.diff));
 if(trace.source_file)panel.append(el('p','source-footer',`原始记录：${trace.source_file}\nSHA-256：${trace.source_sha256}`));
}
async function checkService(){
 try{const response=await fetch('__showcase/health',{cache:'no-store',signal:AbortSignal.timeout(3500)});const data=await response.json();if(!response.ok||data.app!=='ch03-showcase'||data.missing.length)throw new Error('服务未就绪');$('#service-status').textContent='● 全部游戏已就绪';$('#service-status').classList.remove('offline');$('#service-notice').hidden=true;return true;}
 catch(error){$('#service-status').textContent='○ 试玩服务未连接';$('#service-status').classList.add('offline');$('#service-notice').hidden=false;return false;}
}
function showPlayerError(message,token){if(token!==playerToken||!$('#player').open)return;$('#player-loading').hidden=true;$('#player-error-message').textContent=message;$('#player-error').hidden=false;}
async function play(id){
 playerId=id;const token=++playerToken,r=byId[id];const position=visibleIds.indexOf(id);$('#player-title').textContent=r.experiment_title;$('#player-position').textContent=`${position+1} / ${visibleIds.length} · ${r.tags.slice(0,2).join(' · ')}`;
 $('#player-prev').disabled=position<=0;$('#player-next').disabled=position<0||position>=visibleIds.length-1;
 $('#game-new-tab').href=r.game;$('#player-error-link').href=r.game;$('#game-frame').title=r.title+' · 试玩';$('#player-loading').hidden=false;$('#player-error').hidden=true;
 if(!$('#player').open)$('#player').showModal();
 try{const response=await fetch(r.game,{cache:'no-store',signal:AbortSignal.timeout(5000)});if(!response.ok)throw new Error('产物无法读取');if(token!==playerToken)return;$('#game-frame').src=r.game+'?play='+token;}
 catch(error){showPlayerError('本地服务或游戏文件暂不可用。启动“打开游戏汇总.command”后点击重新加载。',token);checkService();return;}
 setTimeout(()=>{if(token===playerToken&&!$('#player-loading').hidden)showPlayerError('页面尚未完成启动，请重试，或在独立窗口查看。',token)},10000);
}
$('#game-frame').addEventListener('load',()=>{
 const token=playerToken;let attempts=0;
 const ready=()=>{
  if(token!==playerToken||!playerId)return;
  try{const frame=$('#game-frame'),doc=frame.contentDocument;if(!doc||doc.location.pathname!==new URL(byId[playerId].game,location.href).pathname||new URL(doc.location.href).searchParams.get('play')!==String(token))return;
   if(!doc.querySelector('button,canvas')){if(attempts++<40)setTimeout(ready,100);return;}
   if(byId[playerId].batch!=='独立项目'){
    const heading=[...doc.querySelectorAll('h1,h2,h3')].find(h=>/记忆|翻牌/.test(h.textContent));
    const target=heading?.closest('section')||heading;if(target)target.scrollIntoView({block:'start'});
   }
   $('#player-loading').hidden=true;$('#player-error').hidden=true;
   frame.contentWindow.focus();
  }catch(error){showPlayerError('无法访问内嵌游戏。请从同一个本地汇总服务打开，或选择独立打开。',token);}
 };ready();
});
$('#player').addEventListener('close',()=>{playerToken++;$('#game-frame').src='about:blank';playerId=null;if(document.fullscreenElement===document.documentElement)document.exitFullscreen().catch(()=>{});});
$('#player-prev').addEventListener('click',()=>{const i=visibleIds.indexOf(playerId);if(i>0)play(visibleIds[i-1]);});
$('#player-next').addEventListener('click',()=>{const i=visibleIds.indexOf(playerId);if(i>=0&&i<visibleIds.length-1)play(visibleIds[i+1]);});
$('#player-reload').addEventListener('click',()=>play(playerId));$('#player-retry').addEventListener('click',()=>play(playerId));
$('#player-fullscreen').hidden=!document.fullscreenEnabled;
$('#player-fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(error){$('#player-fullscreen').hidden=true;}});
document.addEventListener('fullscreenchange',()=>{$('#player-fullscreen').textContent=document.fullscreenElement?'退出全屏':'全屏';});
$('#player-about').addEventListener('click',()=>{const id=playerId;$('#player').close();openAbout(id)});
$('#about-play').addEventListener('click',()=>play(current.id));
$('#summary-tab').addEventListener('click',()=>selectTab('summary'));$('#trace-tab').addEventListener('click',()=>selectTab('trace'));
all('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#'+b.dataset.close).close()));
all('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;all('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render()}));
$('#search').addEventListener('input',render);$('#complete-only').addEventListener('change',render);
$('#expand-all').addEventListener('click',()=>{const expand=!allExpanded;all('.process-details').forEach(d=>{d.open=expand;const id=d.closest('.card').dataset.id;if(expand)expandedIds.add(id);else expandedIds.delete(id);});syncExpandButton();});
for(const id of ['about','player'])$('#'+id).addEventListener('click',e=>{if(e.target===$('#'+id)){const b=e.target.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)e.target.close();}});
render();checkService();setInterval(()=>{if(!document.hidden)checkService();},30000);

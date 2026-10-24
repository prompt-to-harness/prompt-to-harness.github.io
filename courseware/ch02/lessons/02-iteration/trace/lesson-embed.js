// 2.2 本节适配：p22、p24、p27 各嵌一份同源静态记录，播放器每一步对应一个定位点。
// 与 2.1 p07 的 lesson-embed.js 同一套交互（左侧定位按钮、放大、单独打开、Esc），不读 iframe 的 DOM，只用 postMessage。
(() => {
 const channel='ch02-static-trace-v1';
 const stages=[...document.querySelectorAll('.tl2-stage[data-trace-steps]')];
 if(!stages.length)return;
 const viewer='trace/viewer.html?embed=1&hidePath=1&hideHistory=1&theme=light';
 const dialog=document.createElement('dialog');dialog.className='trace-lesson-dialog';dialog.setAttribute('aria-label','放大查看本次请求记录');
 dialog.innerHTML='<div class="dialog-bar"><span>同一次真实记录 · 可自由查看</span><div class="dialog-points" role="group" aria-label="定位观察点"></div><div class="trace-lesson-actions"><a data-trace-open target="_blank" rel="noopener">单独打开 ↗</a><button type="button" data-close>收起记录 · Esc</button></div></div><iframe title="放大的 claude-tap 静态记录"></iframe>';
 document.body.append(dialog);
 const big=dialog.querySelector('iframe'),bigPoints=dialog.querySelector('.dialog-points');
 let active=null,returnFocus;
 function send(target,key,expanded=false){if(target?.contentWindow)target.contentWindow.postMessage({channel,key,expanded},'*');}
 const state=new Map();
 stages.forEach(stage=>{
  const steps=JSON.parse(stage.dataset.traceSteps),frame=stage.querySelector('iframe'),status=stage.querySelector('[data-trace-status]');
  const buttons=[...stage.querySelectorAll('[data-trace-key]')];
  const s={stage,steps,frame,status,buttons,key:steps[0],armed:false};state.set(stage,s);
  // 查看器加载时会抢焦点、滚动外层页面：演示模式翻到这一页、阅读模式滚到附近才加载
  s.load=()=>{if(!frame.getAttribute('src'))frame.src=frame.dataset.src;};
  if('IntersectionObserver' in window)new IntersectionObserver((es,o)=>{if(document.body.dataset.mode!=='slides'&&es.some(e=>e.isIntersecting)){s.load();o.disconnect();}},{rootMargin:'300px'}).observe(stage);else s.load();
  frame.addEventListener('load',()=>{if(s.armed)send(frame,s.key);});
  buttons.forEach(b=>b.addEventListener('click',()=>{
   const i=steps.indexOf(b.dataset.traceKey),scene=stage.closest('section');
   if(document.body.dataset.mode==='slides'&&i>=0&&scene){const url=new URL(location.href);url.searchParams.set('step',String(i));url.hash=scene.id;history.replaceState(null,'',url);window.dispatchEvent(new HashChangeEvent('hashchange'));}
   else select(s,b.dataset.traceKey);
  }));
  stage.querySelector('[data-trace-expand]').addEventListener('click',()=>{
   active=s;returnFocus=document.activeElement;
   bigPoints.innerHTML='';buttons.forEach(b=>{const x=document.createElement('button');x.type='button';x.dataset.dialogKey=b.dataset.traceKey;x.textContent=b.querySelector('b').textContent;x.addEventListener('click',()=>select(s,x.dataset.dialogKey));bigPoints.append(x);});
   s.load();if(!big.hasAttribute('src'))big.src=frame.dataset.src;dialog.showModal();select(s,s.key);
  });
 });
 // 查看器定位会滚动外层页面：阅读模式只在点按钮时定位，演示模式只定位当前页
 function select(s,key,arm=true){s.key=key;if(arm){s.armed=true;s.load();}
  s.buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.traceKey===key)));
  if(active===s)bigPoints.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.dialogKey===key)));
  const href=viewer+'&point='+key;
  s.stage.querySelectorAll('[data-trace-open]').forEach(a=>a.href=href);if(active===s)dialog.querySelector('[data-trace-open]').href=href;
  if(s.armed)send(s.frame,key);if(dialog.open&&active===s)send(big,key,true);
 }
 function close(){if(dialog.open)dialog.close();active=null;returnFocus?.focus();}
 dialog.querySelector('[data-close]').addEventListener('click',close);dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 big.addEventListener('load',()=>{if(active)send(big,active.key,true);});
 window.addEventListener('message',event=>{
  if(event.data?.channel!==channel)return;
  if(event.data.escape){close();return;}
  for(const s of state.values()){
   if(event.source===s.frame.contentWindow){if(event.data.ready&&!event.data.key){if(s.armed)send(s.frame,s.key);}else if(event.data.key){const b=s.buttons.find(x=>x.dataset.traceKey===event.data.key);if(b&&s.status)s.status.textContent='本次真实记录 · '+b.querySelector('b').textContent;}}
  }
  if(active&&event.source===big.contentWindow&&event.data.ready&&!event.data.key)send(big,active.key,true);
 });
 document.addEventListener('lesson-position',event=>{
  const scene=window.lesson.scenes[event.detail.current];
  const s=[...state.values()].find(x=>x.stage.closest('section')?.id===scene?.id);
  if(s&&document.body.dataset.mode==='slides'){select(s,s.steps[Math.min(s.steps.length-1,event.detail.step)]);}else if(!s&&dialog.open)close();
 });
 state.forEach(s=>select(s,s.key,false));
 // 直接打开某页某步（地址里带 #p22 和 step）时，播放器的第一次定位早于本脚本，这里补一次
 const first=[...state.values()].find(x=>x.stage.closest('section')?.id===location.hash.slice(1));
 if(first&&document.body.dataset.mode==='slides'){const n=Number(new URLSearchParams(location.search).get('step'))||0;select(first,first.steps[Math.min(first.steps.length-1,n)]);}
})();

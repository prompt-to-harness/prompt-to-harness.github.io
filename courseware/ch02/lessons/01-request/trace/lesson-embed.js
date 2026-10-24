// Local lesson adapter: no fetch, shared-player changes, or parent/iframe DOM access.
(() => {
 const scene=document.getElementById('p07'),frame=document.getElementById('trace-lesson-frame');
 if(!scene||!frame)return;
 const channel='ch02-static-trace-v1',points=['answer','call','result'];
 // 播放器的 5 步：A 走完三步，再看 C、D 两条链的返回；讲师也可以点标签和按钮自由切换
 const steps=[['A','answer'],['A','call'],['A','result'],['C','result'],['D','result']];
 const labels={answer:'看回答',call:'找读取调用',result:'看后续请求'};
 let [chain,current]=steps[Math.min(steps.length-1,Number(new URLSearchParams(location.search).get('step'))||0)];
 const expand=document.getElementById('trace-lesson-expand'),status=document.getElementById('trace-lesson-status');
 const dialog=document.createElement('dialog');dialog.className='trace-lesson-dialog';dialog.setAttribute('aria-label','放大查看本次请求记录');
 dialog.innerHTML='<div class="dialog-bar"><span>同一次真实记录 · 可自由查看</span><div class="dialog-points" role="group" aria-label="定位观察点"><button type="button" data-dialog-chain="A">A</button><button type="button" data-dialog-chain="C">C</button><button type="button" data-dialog-chain="D">D</button><button type="button" data-dialog-point="answer">① 看回答</button><button type="button" data-dialog-point="call">② 找读取调用</button><button type="button" data-dialog-point="result">③ 看后续请求</button></div><div class="trace-lesson-actions"><a data-trace-open target="_blank" rel="noopener">单独打开 ↗</a><button type="button">收起记录 · Esc</button></div></div><iframe title="放大的 claude-tap 静态记录"></iframe>';
 document.body.append(dialog);const big=dialog.querySelector('iframe');let returnFocus;
 const key=()=>chain+'-'+current;
 function send(target,expanded=false){if(target?.contentWindow)target.contentWindow.postMessage({channel,key:key(),expanded},'*');}
 function select(nextChain,nextPoint){chain=nextChain;current=nextPoint;
  scene.querySelectorAll('[data-trace-chain]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.traceChain===chain)));
  scene.querySelectorAll('[data-trace-point]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tracePoint===current)));
  dialog.querySelectorAll('[data-dialog-chain]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.dialogChain===chain)));
  dialog.querySelectorAll('[data-dialog-point]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.dialogPoint===current)));
  document.querySelectorAll('[data-trace-open]').forEach(a=>a.href='trace/viewer.html?embed=1&hidePath=1&hideHistory=1&theme=light&point='+key());
  send(frame);if(dialog.open)send(big,true);}
 function close(){if(dialog.open)dialog.close();returnFocus?.focus();}
 expand.addEventListener('click',()=>{returnFocus=document.activeElement;if(!big.hasAttribute('src'))big.src=frame.getAttribute('src');dialog.showModal();send(big,true);});
 dialog.querySelector('.trace-lesson-actions button').addEventListener('click',close);dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 // 放大后保留同样的定位按钮；只换观察点，不改变播放器的步骤
 dialog.querySelectorAll('[data-dialog-chain]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.dialogChain,current)));
 dialog.querySelectorAll('[data-dialog-point]').forEach(b=>b.addEventListener('click',()=>select(chain,b.dataset.dialogPoint)));
 frame.addEventListener('load',()=>send(frame));big.addEventListener('load',()=>send(big,true));
 scene.querySelectorAll('[data-trace-chain]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.traceChain,current)));
 scene.querySelectorAll('[data-trace-point]').forEach(button=>button.addEventListener('click',()=>{
  const point=button.dataset.tracePoint,i=steps.findIndex(([c,p])=>c===chain&&p===point);
  if(document.body.dataset.mode==='slides'&&i>=0){
   const url=new URL(location.href);url.searchParams.set('step',String(i));url.hash='p07';history.replaceState(null,'',url);window.dispatchEvent(new HashChangeEvent('hashchange'));
  }else select(chain,point);
 }));
 window.addEventListener('message',event=>{
  if(event.data?.channel!==channel)return;
  if(event.source!==frame.contentWindow&&event.source!==big.contentWindow)return;
  if(event.data.escape){close();return;}
  if(event.data.ready&&!event.data.key){send(event.source===big.contentWindow?big:frame,event.source===big.contentWindow);return;}
  if(event.data.key){const [c,p]=event.data.key.split('-');status.textContent='本次真实记录 · 依据链 '+c+' · '+(labels[p]||'');}
 });
 document.addEventListener('lesson-position',event=>{
  const active=window.lesson.scenes[event.detail.current];
  if(active?.id==='p07'){const [c,p]=steps[Math.min(steps.length-1,event.detail.step)]||steps[0];select(c,p);}else if(dialog.open)close();
 });
 // Retired page links keep working without retaining a second registered page.
 function redirectRetired(){if(location.hash==='#p14'){const url=new URL(location.href);url.hash='p07';url.searchParams.set('step','1');history.replaceState(null,'',url);window.dispatchEvent(new HashChangeEvent('hashchange'));}}
 window.addEventListener('hashchange',redirectRetired);redirectRetired();
 select(chain,current);
})();

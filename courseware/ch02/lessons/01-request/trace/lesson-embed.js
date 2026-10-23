// Local lesson adapter: no fetch, shared-player changes, or parent/iframe DOM access.
(() => {
 const scene=document.getElementById('p07'),frame=document.getElementById('trace-lesson-frame');
 if(!scene||!frame)return;
 const channel='ch02-static-trace-v1',keys=['answer','call','result'];let current=keys[Math.min(2,Number(new URLSearchParams(location.search).get('step'))||0)];
 const expand=document.getElementById('trace-lesson-expand'),status=document.getElementById('trace-lesson-status');
 const dialog=document.createElement('dialog');dialog.className='trace-lesson-dialog';dialog.setAttribute('aria-label','放大查看本次请求记录');
 dialog.innerHTML='<div class="dialog-bar"><span>同一次真实记录 · 可自由查看</span><div class="trace-lesson-actions"><a data-trace-open target="_blank" rel="noopener">单独打开 ↗</a><button type="button">收起记录 · Esc</button></div></div><iframe title="放大的 claude-tap 静态记录"></iframe>';
 document.body.append(dialog);const big=dialog.querySelector('iframe');let returnFocus;
 function send(target,expanded=false){if(target?.contentWindow)target.contentWindow.postMessage({channel,key:current,expanded},'*');}
 function select(key){current=key;scene.querySelectorAll('[data-trace-point]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tracePoint===key)));document.querySelectorAll('[data-trace-open]').forEach(a=>a.href='trace/viewer.html?embed=1&hidePath=1&hideHistory=1&theme=light&point='+key);send(frame);if(dialog.open)send(big,true);}
 function close(){if(dialog.open)dialog.close();returnFocus?.focus();}
 expand.addEventListener('click',()=>{returnFocus=document.activeElement;if(!big.hasAttribute('src'))big.src=frame.getAttribute('src');dialog.showModal();send(big,true);});
 dialog.querySelector('button').addEventListener('click',close);dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 frame.addEventListener('load',()=>send(frame));big.addEventListener('load',()=>send(big,true));
 scene.querySelectorAll('[data-trace-point]').forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.tracePoint;
  if(document.body.dataset.mode==='slides'){
   const url=new URL(location.href);url.searchParams.set('step',String(keys.indexOf(key)));url.hash='p07';history.replaceState(null,'',url);window.dispatchEvent(new HashChangeEvent('hashchange'));
  }else select(key);
 }));
 window.addEventListener('message',event=>{
  if(event.data?.channel!==channel)return;
  if(event.source!==frame.contentWindow&&event.source!==big.contentWindow)return;
  if(event.data.escape){close();return;}
  if(event.data.ready&&!event.data.key){send(event.source===big.contentWindow?big:frame,event.source===big.contentWindow);return;}
  if(event.data.key)status.textContent='本次真实记录 · '+({answer:'看回答',call:'找读取调用',result:'看后续请求'}[event.data.key]||'');
 });
 document.addEventListener('lesson-position',event=>{
  const active=window.lesson.scenes[event.detail.current];
  if(active?.id==='p07')select(keys[Math.min(2,event.detail.step)]||keys[0]);else if(dialog.open)close();
 });
 // Retired page links keep working without retaining a second registered page.
 function redirectRetired(){if(location.hash==='#p14'){const url=new URL(location.href);url.hash='p07';url.searchParams.set('step','1');history.replaceState(null,'',url);window.dispatchEvent(new HashChangeEvent('hashchange'));}}
 window.addEventListener('hashchange',redirectRetired);redirectRetired();
 select(current);
})();

// Match the continuous request viewer to the shared player's six steps.
(()=>{
 const scene=document.getElementById('p08a'),frame=document.getElementById('request-walk-frame');if(!frame)return;
 const channel='ch02-request-lesson-v1',keys=['identity','skills','permissions','environment','tools','response'];let key=keys[Math.min(5,Number(new URLSearchParams(location.search).get('step'))||0)];
 const dialog=document.createElement('dialog');dialog.className='trace-lesson-dialog';dialog.setAttribute('aria-label','放大查看初始请求');dialog.innerHTML='<div class="dialog-bar"><span>同一份初始请求 · 阅读与原文</span><button type="button">收起 · Esc</button></div><iframe title="放大的连续请求查看"></iframe>';document.body.append(dialog);const big=dialog.querySelector('iframe');let returnFocus;const close=()=>{dialog.close();returnFocus?.focus();};dialog.querySelector('button').addEventListener('click',close);dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 const send=()=>frame.contentWindow?.postMessage({channel,key},'*');frame.addEventListener('load',send);
 document.addEventListener('lesson-position',e=>{if(window.lesson.scenes[e.detail.current]?.id==='p08a'){key=keys[Math.min(5,e.detail.step)]||keys[0];send();}else if(dialog.open)close();});
 window.addEventListener('message',e=>{if(![frame.contentWindow,big.contentWindow].includes(e.source)||e.data?.channel!==channel)return;if(e.data.escape){if(dialog.open)close();return;}if(e.data.expand){if(!dialog.open){returnFocus=document.activeElement;big.src='request/index.html?embed=1&point='+e.data.key+'&view='+e.data.view;dialog.showModal();}return;}if(e.source===big.contentWindow)return;if(e.data.ready){send();return;}if(keys.includes(e.data.key)&&document.body.dataset.mode==='slides'){const u=new URL(location.href);u.hash='p08a';u.searchParams.set('step',keys.indexOf(e.data.key));history.replaceState(null,'',u);window.dispatchEvent(new HashChangeEvent('hashchange'));}});
 send();
})();

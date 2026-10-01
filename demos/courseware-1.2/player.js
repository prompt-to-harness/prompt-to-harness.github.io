/* Independent migration prototype: page content stays separate from playback. */
(() => {
 const $=id=>document.getElementById(id);
 let pg=0,step=1,reading=false,safe=false,recording=false;
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
 function restore(){const params=new URLSearchParams(location.hash.slice(1));pg=clamp((Number(params.get('p'))||1)-1,0,P.length-1);step=clamp(Number(params.get('s'))||1,1,P[pg].steps);}
 restore();
 $('pages').innerHTML=P.map((p,i)=>`<option value="${i}">${String(i+1).padStart(2,'0')} · ${esc(p.n)}</option>`).join('');
 function progress(i,s){const group=P[i].seg,indices=P.map((p,j)=>p.seg===group?j:-1).filter(j=>j>=0),frac=(indices.indexOf(i)+s/P[i].steps)/indices.length;
 return `<div class="chap">${SEGS.map(([name,minutes],k)=>`<div class="sg ${k===group?'c':''}" style="flex:${minutes}"><div class="lb">${name}</div><div class="tr"><div class="fl" style="width:${k<group?100:k===group?frac*100:0}%"></div></div></div>`).join('')}</div>`;}
 function markup(i,s){const p=P[i];return `<header class="hd"><p class="kick">第 1 章 · 1.2　${SEGS[p.seg][0]}</p><h2${p.cover?' style="font-family:Long Cang,cursive;font-size:76px;line-height:1.05"':''}>${p.h}</h2></header><div class="bd">${p.ev()}</div><div class="cam" aria-hidden="true"><div class="camera-note"><b>讲师画面</b><span>录制时叠加于此</span></div></div><div class="subtitle-safe" aria-hidden="true">字幕安全区</div>${progress(i,s)}`;}
 function applySteps(stage,s,max){stage.querySelectorAll('[data-s]').forEach(el=>{const n=Number(el.dataset.s),hidden=n>s;el.classList.toggle('hide',hidden);el.classList.toggle('past',n<s&&s<max);el.setAttribute('aria-hidden',String(hidden));});}
 function notes(i,s){const p=P[i];return `<h2>${i+1}. ${esc(p.n)}</h2><h3>逐步讲述</h3><ol>${p.cues.map((t,j)=>`<li${j+1===s?' class="current" aria-current="step"':''}>${esc(t)}</li>`).join('')}</ol><h3>内容对应</h3><p>原 1.2 节 ${esc(p.source)} · 总时长暂估 15 分钟，待试讲。</p><h3>使用提示</h3><p>点画面或按 → 推进；← 回看。页内讲完才翻页。完整阅读显示全部内容与讲述提示。</p>`;}
 function fit(){document.querySelectorAll('.frame').forEach(frame=>{const available=reading?Math.min(1100,$('view').clientWidth-48):$('view').clientWidth-(recording?0:28),height=reading?Infinity:$('view').clientHeight-(recording?0:28);const scale=Math.max(.1,Math.min(available/1280,height/720));frame.style.width=1280*scale+'px';frame.style.height=720*scale+'px';frame.querySelector('.stage').style.transform=`scale(${scale})`;});}
 function render(){document.body.classList.toggle('read-mode',reading);document.body.classList.toggle('record-mode',recording);$('exit').hidden=!recording;
 if(reading){$('view').innerHTML=P.map((p,i)=>`<section class="reading-page" id="read-${i}"><div class="frame"><article class="stage skin-handT ${safe?'showsafe':''}" aria-label="${esc(p.n)}">${markup(i,p.steps)}</article></div><div class="reading-notes">${notes(i,0)}</div></section>`).join('');}
 else{$('view').innerHTML=`<div class="frame" id="frame"><article class="stage skin-handT ${safe?'showsafe':''}" id="stage" aria-label="${esc(P[pg].n)}">${markup(pg,step)}</article></div>`;applySteps($('stage'),step,P[pg].steps);}
 $('info').innerHTML=notes(pg,step);$('pages').value=String(pg);$('position').textContent=`${pg+1} / ${P.length} 页 · ${step} / ${P[pg].steps} 步`;
 $('prev').disabled=reading||(pg===0&&step===1);$('next').disabled=reading||(pg===P.length-1&&step===P[pg].steps);$('record').disabled=reading;
 $('mode').textContent=reading?'返回演示':'完整阅读';$('mode').setAttribute('aria-pressed',String(reading));$('safe').setAttribute('aria-pressed',String(safe));
 try{history.replaceState(null,'',`#p=${pg+1}&s=${step}`);}catch(_){}fit();}
 function go(d){if(reading)return;const old=pg;if(d>0){if(step<P[pg].steps)step++;else if(pg<P.length-1){pg++;step=1;}}else{if(step>1)step--;else if(pg>0){pg--;step=P[pg].steps;}}
 // Preserve the DOM during a reveal, so CSS transitions actually run.
 if(old===pg){applySteps($('stage'),step,P[pg].steps);$('stage').querySelector('.chap').outerHTML=progress(pg,step);$('info').innerHTML=notes(pg,step);$('position').textContent=`${pg+1} / ${P.length} 页 · ${step} / ${P[pg].steps} 步`;$('prev').disabled=pg===0&&step===1;$('next').disabled=pg===P.length-1&&step===P[pg].steps;try{history.replaceState(null,'',`#p=${pg+1}&s=${step}`);}catch(_){}}else render();}
 $('prev').onclick=()=>go(-1);$('next').onclick=()=>go(1);$('view').onclick=e=>{if(!reading&&!e.target.closest('a,button'))go(1);};
 $('pages').onchange=()=>{pg=Number($('pages').value);step=1;if(reading){render();$('read-'+pg).scrollIntoView({block:'start'});}else render();};
 const toggleMode=()=>{reading=!reading;recording=false;render();if(!reading)window.scrollTo(0,0);};
 $('mode').onclick=toggleMode;$('safe').onclick=()=>{safe=!safe;render();};$('record').onclick=()=>{recording=true;render();};$('exit').onclick=()=>{recording=false;render();};
 document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select')||(e.key===' '&&e.target.closest('button,a'))||e.ctrlKey||e.metaKey||e.altKey)return;
 if(e.key==='Escape'){recording=false;render();}else if(e.key.toLowerCase()==='t'){toggleMode();}else if(e.key.toLowerCase()==='s'){safe=!safe;render();}else if(!reading&&['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(1);}else if(!reading&&['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(-1);}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&recording){recording=false;render();}});
 addEventListener('hashchange',()=>{restore();render();});addEventListener('resize',fit);render();document.fonts.ready.then(fit);
})();

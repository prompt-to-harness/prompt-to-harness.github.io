/* SVG primitives adapted from ../visual-system/index.html. */

const C={ink:'#18202B',muted:'#5B6573',rule:'#D9DEE5',us:'#243042',agent:'#5A51D1',agentL:'#EDEBFB',agentM:'#ABA6E9',agentD:'#2A2380',tool:'#0F8A7A',toolL:'#E0F3EF',toolT:'#0B6B5F',evid:'#B45309',evidL:'#FDF0D5',ctx:'#9C8B66',ctxL:'#F2EDE1',ctxT:'#6E6043',gate:'#D9481C',gateL:'#FCE6DD',ok:'#15803D',okL:'#E3F2E6',white:'#FFFFFF'};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function T(x,y,lines,o={}){const L=Array.isArray(lines)?lines:[lines];const fs=o.fs||22,lh=o.lh||fs*1.4,a=o.a||'start';
 const cls=[o.mono?'mono':'',(!o.mono&&fs>=24&&(o.fw||500)>=800)?'big':'',o.hw?'hw':''].filter(Boolean).join(' ');
 return `<text x="${x}" y="${y}" font-size="${fs}" font-weight="${o.fw||500}" fill="${o.c||C.ink}" text-anchor="${a}"${cls?` class="${cls}"`:''}>${L.map((l,i)=>`<tspan x="${x}" dy="${i?lh:0}">${esc(l)}</tspan>`).join('')}</text>`}
const R=(x,y,w,h,f,s,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx??10}" fill="${f}"${s?` stroke="${s}" stroke-width="${o.sw||2.5}"`:''}${o.dash?` stroke-dasharray="${o.dash}"`:''}${o.cls?` class="${o.cls}"`:''}/>`;
const A=(d,c=C.muted,o={})=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${o.sw||2.5}"${o.dash?` stroke-dasharray="${o.dash}"`:''} marker-end="url(#m-${o.m||'g'})"${o.cls?` class="${o.cls}"`:''}/>`;
const defs=`<defs>${[['g',C.muted],['r',C.gate],['a',C.agent],['t',C.tool],['k','#111']].map(([k,c])=>`<marker id="m-${k}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join('')}</defs>`;
const G=(s,inner)=>`<g data-s="${s}">${inner}</g>`;
const check=(x,y,ok)=>'<g class="nf">'+check0(x,y,ok)+'</g>';
const check0=(x,y,ok)=>ok===true?`<circle cx="${x}" cy="${y}" r="15" fill="${C.ok}"/><path d="M${x-7} ${y}l5 5l9-10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
 :ok===false?`<circle cx="${x}" cy="${y}" r="15" fill="${C.gate}"/><path d="M${x-6} ${y-6}l12 12M${x+6} ${y-6}l-12 12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>`
 :`<circle cx="${x}" cy="${y}" r="15" fill="none" stroke="${C.muted}" stroke-width="2.5"/><path d="M${x-7} ${y}h14" stroke="${C.muted}" stroke-width="3" stroke-linecap="round"/>`;


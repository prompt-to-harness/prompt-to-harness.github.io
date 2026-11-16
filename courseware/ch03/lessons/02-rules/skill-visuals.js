// Chromium 在画布切换缩放后偶尔沿旧比例绘制 SVG 字形，坐标测量仍正常。
// 缩放稳定后重建本节图形的绘制节点；普通逐步推进不重建，保留内容移动。
(() => {
  let scheduled = false;
  function repaint() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll('.skill-visual').forEach(svg => {
        svg.replaceWith(svg.cloneNode(true));
      });
      scheduled = false;
    }));
  }
  new MutationObserver(repaint).observe(document.body, {
    attributes: true, attributeFilter: ['class', 'data-mode']
  });
  window.addEventListener('resize', repaint);
  // 第一部分页间切换后，重绘 SVG，避免 Chromium 复用旧缩放字形。
  document.addEventListener('lesson-position', () => {
    if (['p07','p07a','p07install','p07b','p07c','p07d'].includes(location.hash.slice(1))) repaint();
  });
  document.fonts.ready.then(repaint);
})();

// Center the actual complete content group; keep positions stable across reveals.
(() => {
 const ids=['p07','p07a','p07install','p07b','p07c','p07d'];
 function layout(){
  if(document.body.dataset.mode !== 'slides')return;
  for(const id of ids){
   const scene=document.getElementById(id),svg=scene?.querySelector('svg.skill-visual');if(!svg)continue;
   const bounds=[...svg.children].filter(n=>n.tagName!=='defs').map(n=>{const b=n.getBBox(),m=n.transform.baseVal.consolidate()?.matrix;return {y:b.y*(m?.d||1)+(m?.f||0),height:b.height*(m?.d||1)}});
   const top=Math.min(...bounds.map(b=>b.y)),bottom=Math.max(...bounds.map(b=>b.y+b.height));
   svg.setAttribute('viewBox',`0 ${top-3} 1168 ${bottom-top+6}`);
   const content=scene.querySelector('.scene-content');
   const titleBottom=82+scene.querySelector('h2').offsetHeight;
   const gap=(640-titleBottom-content.scrollHeight)/2;
   content.style.setProperty('top',`${titleBottom+gap}px`,'important');
   scene.dataset.layoutGap=gap.toFixed(1);
  }
 }
 document.fonts.ready.then(()=>setTimeout(layout,100));
 document.addEventListener('lesson-position',()=>requestAnimationFrame(()=>requestAnimationFrame(layout)));
 window.addEventListener('resize',layout);new MutationObserver(()=>requestAnimationFrame(()=>requestAnimationFrame(layout))).observe(document.body,{attributes:true,attributeFilter:['data-mode','class']});
})();

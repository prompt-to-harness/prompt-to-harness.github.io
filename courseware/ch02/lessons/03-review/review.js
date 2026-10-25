/* 分镜的镜头切换：阅读模式保留全部镜头，演示模式只显示当前步骤的镜头。 */
(() => {
  function show(step,mode){document.querySelectorAll('.review-panel').forEach(el=>{el.hidden=mode==='slides'&&(step<Number(el.dataset.panelStart)||step>Number(el.dataset.panelEnd));});}
  document.addEventListener('lesson-position',e=>show(e.detail.step,e.detail.mode));
  show(Number(new URLSearchParams(location.search).get('step'))||0,document.body.dataset.mode);
})();

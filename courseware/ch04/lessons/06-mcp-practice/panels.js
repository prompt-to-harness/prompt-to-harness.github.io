/* p68 阅读模式：展开层放在四格下方，按实际高度留出空间。 */
(() => {
  const wrap = document.querySelector('#p68 .p-wrap');
  if (!wrap) return;

  const update = () => {
    const panel = wrap.querySelector('.p-pop[open] .p-pop-body');
    // 用外边距占位，避免 top:100% 把展开层推到占位空间之后。
    const space = panel && document.body.dataset.mode === 'scroll' ? panel.offsetHeight + 8 : 0;
    wrap.style.setProperty('--p-pop-space', `${space}px`);
  };
  const observer = new ResizeObserver(update);
  wrap.querySelectorAll('.p-pop').forEach(details => {
    details.addEventListener('toggle', update);
    observer.observe(details.querySelector('.p-pop-body'));
  });
  document.addEventListener('lesson-position', update);
  update();
})();

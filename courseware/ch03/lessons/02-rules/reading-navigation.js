// 由当前知识页返回相应讲述线，避免“讲解全文”落到第一部分。
(() => {
  const frames = {p07t1:'plan323-2',p07t2:'plan323-3',p07t3:'plan323-4',p07i:'b31',p07j:'b31',p07j1:'b32',p07k:'b35',p07l:'plan323-6',p07m:'plan323-6',p07n:'b36',p07o:'plan323-5',p07p:'plan323-5',p07q:'plan323-6'};
  const sync = () => {
    const frame = frames[location.hash.slice(1)];
    if (!frame) return;
    const link = document.querySelector('.script-link');
    if (link) link.href = 'speaker.html#' + frame;
  };
  document.addEventListener('lesson-position', sync);
  addEventListener('hashchange', sync);
  sync();
})();

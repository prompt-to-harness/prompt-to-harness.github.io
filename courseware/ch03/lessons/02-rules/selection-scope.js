// 默认 PPT 展示两部分；讲师页继续从原源坐标编辑，旧稿深链保留。
(() => {
  const params = new URLSearchParams(location.search);
  const speaker = /\/speaker(?:-archive)?\.html$/.test(location.pathname);
  if (speaker) window.lesson.scenes = window.lesson.scenes.filter(s => !window.lesson.authoringSceneIds.includes(s.id));
  // 第二部分从完整原稿移动对应节点，沿用共享编辑与评论；不要先过滤掉 p08。
  if (speaker) return;
  const ids = new Set(window.lesson.pptSceneIds);
  const anchor=location.hash.slice(1);
  if (new URLSearchParams(location.search).has('legacy') || (anchor && !ids.has(anchor) && window.lesson.scenes.some(s=>s.id===anchor))) return;
  window.lesson.scenes = window.lesson.scenes.filter(scene => ids.has(scene.id));
  window.lesson.segments = [];
  for (const scene of window.lesson.scenes) {
    let segment = window.lesson.segments.at(-1);
    if (!segment || segment.label !== scene.segment) window.lesson.segments.push(segment = {label:scene.segment, seconds:0});
    segment.seconds += scene.seconds;
  }
  document.addEventListener('click', async event => {
    const button=event.target.closest('[data-selection-copy]');
    if(!button)return;
    try{await navigator.clipboard.writeText(button.closest('.prompt').querySelector('pre').textContent);button.textContent='已复制'}
    catch{button.textContent='请选中请求复制'}
  });
})();

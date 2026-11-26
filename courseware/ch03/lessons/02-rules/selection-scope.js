// 默认 PPT 展示两部分；讲师页继续从原源坐标编辑，旧稿深链保留。
(() => {
  const params = new URLSearchParams(location.search);
  const speaker = /\/speaker(?:-archive)?\.html$/.test(location.pathname);
  if (speaker) window.lesson.scenes = window.lesson.scenes.filter(s => !window.lesson.authoringSceneIds.includes(s.id));
  // 第二部分从完整原稿移动对应节点，沿用共享编辑与评论；不要先过滤掉 p08。
  if (speaker) return;
  // Removed MCP/Hook teaching page now lands on the unified Plugin summary.
  if (location.hash === '#p324b' || (location.hash === '#p324a' && Number(params.get('step')) > 1)) {
    const target = new URL(location.href);
    target.hash = 'p324a'; target.searchParams.set('step', '1');
    history.replaceState(null, '', target);
  }
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

// Keep the full installation request readable without crowding its step card.
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-install-preview]');
  if (!trigger) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'install-prompt-dialog';
  const title = document.createElement('h2'); title.textContent = '安装到当前项目';
  const pre = document.createElement('pre'); pre.textContent = trigger.closest('.prompt').querySelector('pre').textContent;
  const close = document.createElement('button'); close.textContent = '关闭'; close.addEventListener('click', () => dialog.close());
  const copy = document.createElement('button'); copy.textContent = '复制 Prompt';
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(pre.textContent); copy.textContent = '已复制'; }
    catch { copy.textContent = '请选中文字复制'; }
  });
  const actions = document.createElement('div'); actions.className = 'install-dialog-actions'; actions.append(copy, close);
  dialog.append(title, pre, actions); document.body.append(dialog);
  dialog.addEventListener('close', () => dialog.remove(), {once:true}); dialog.showModal();
});

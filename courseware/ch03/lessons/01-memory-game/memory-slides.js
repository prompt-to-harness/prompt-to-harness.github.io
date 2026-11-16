// 旧观察页已并入案例后的过程归纳。
if (location.hash === '#p01a') history.replaceState(null, '', location.pathname + location.search + '#p05');
// 本机录制入口依赖讲师材料服务；公开站点只呈现自包含的知识页。
if (!['', 'localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
  window.lesson.scenes.forEach(scene => { delete scene.repro; });
}

// 临时标注只在它负责的状态出现；指导正文的位置跨状态保持不变。
document.addEventListener('lesson-position', ({ detail }) => {
  document.querySelectorAll('.memory-slide').forEach((scene, index) => {
    const step = detail.mode === 'scroll' ? window.lesson.scenes[index].steps.length - 1 : detail.step;
    scene.dataset.memoryStep = String(step);
    scene.querySelectorAll('[data-memory-on]').forEach(element => {
      const [start, end = start] = element.dataset.memoryOn.split('-').map(Number);
      const hidden = step < start || step > end;
      element.classList.toggle('memory-state-hidden', hidden);
      if (hidden) element.setAttribute('aria-hidden', 'true');
      else element.removeAttribute('aria-hidden');
    });
  });
});

/* workflow 流程图（flow.py）用：框随步骤滑动。data-tf='["", "translate(..px,..px)"]' 是每一步的 CSS transform，步数超过列表长度时沿用最后一个。
 * 显示和隐藏（data-on）仍由 ../canvas.js 负责；阅读模式只显示最后一步。 */
(() => {
  // 白板全屏会暂时移出 .scene；保留原场景与节点的对应，推进仍能移动原节点。
  const scenesWithTransforms = [...document.querySelectorAll('.scene')].map(section => [...section.querySelectorAll('[data-tf]')]);
  let position = { current: 0, step: 0, mode: document.body.dataset.mode };
  const apply = () => {
    const scenes = window.lesson ? window.lesson.scenes : [];
    scenesWithTransforms.forEach((elements, index) => {
      const last = Math.max(0, (scenes[index]?.steps?.length || 1) - 1);
      const s = position.mode === 'slides' && index === position.current ? position.step : last;
      elements.forEach(el => {
        const tf = JSON.parse(el.dataset.tf);
        el.style.transform = tf[Math.min(s, tf.length - 1)] || 'none';
      });
    });
  };
  document.addEventListener('lesson-position', e => { position = e.detail; apply(); });
  const visible = [...document.querySelectorAll('.scene')].findIndex(s => !s.hidden);
  position = { current: Math.max(0, visible), step: Number(new URLSearchParams(location.search).get('step')) || 0, mode: document.body.dataset.mode };
  apply();
})();

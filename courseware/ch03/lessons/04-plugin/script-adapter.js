/* Generated script data is read from script.json by tools/build-lesson.py. */
window.narrationAdapters = {
  renderScript(owner, block) {
    if (!block.ref) return null;
    const [scene, rawStep] = block.ref.split(':');
    const step = Number(rawStep), text = window.narrationScripts[scene]?.[step];
    if (typeof text !== 'string') throw new Error('口播引用不存在：' + block.ref);
    const element = document.createElement('div');
    text.split('\n\n').forEach((paragraph, part) => {
      const cue = /^【(?:操作提示|切换)｜/.test(paragraph);
      const quote = document.createElement(cue ? 'p' : 'blockquote');
      quote.textContent = paragraph;
      if (cue) quote.className = 'operation';
      else Object.assign(quote.dataset, {scene, step, part, scriptEdit: ''});
      element.append(quote);
    });
    return element;
  }
};
window.narrationData.ppt = {section:'3.4',pages:window.lesson.scenes,url:'index.html'};

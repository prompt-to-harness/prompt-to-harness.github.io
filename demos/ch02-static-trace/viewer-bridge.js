// Small course adapter around claude-tap 0.1.146. Source renderer remains intact.
(() => {
  const channel = 'ch02-static-trace-v1';
  const guide = __COURSE_GUIDE_POINTS__;
  const style = document.createElement('style');
  style.textContent = '.pre-text,.tool-input-view{font-size:14px!important;line-height:1.55!important}body.course-expanded .pre-text,body.course-expanded .tool-input-view{font-size:20px!important;max-height:none!important}';
  document.head.append(style);
  // The parent can be a file: page with an opaque origin. Validate the sender window.
  window.addEventListener('message', event => {
    if (event.source !== parent || event.data?.channel !== channel || event.data.ready) return;
    if (typeof event.data.expanded === 'boolean') document.body.classList.toggle('course-expanded',event.data.expanded);
    if (!guide[event.data.key]) return;
    const key = event.data.key, point = guide[key];
    const idx = filtered.findIndex(entry => entry.request_id === point.request);
    if (idx < 0) return;
    detailViewMode = 'default';
    selectEntry(idx);
    requestAnimationFrame(() => {
      const sections = [...document.querySelectorAll('#detail .section')];
      let chosen;
      for (const section of sections) {
        const title = section.querySelector('.section-header .title')?.textContent;
        const open = title === t(point.section);
        section.querySelector('.section-body')?.classList.toggle('open', open);
        section.querySelector('.chevron')?.classList.toggle('open', open);
        if (open) chosen = section;
      }
      let target = chosen;
      if (key === 'result' && chosen) {
        target = [...chosen.querySelectorAll('.msg')].find(el => el.textContent.includes("name: '学习笔记'")) || chosen;
      }
      // Unwrap the original input_text blocks for reading; Full JSON keeps the wire structure.
      if (key === 'result' && target) {
        const item = filtered[idx].request.body.input.find(item => item.type === 'custom_tool_call_output' && item.call_id === point.callId);
        if (Array.isArray(item?.output)) {
          const text = item.output.filter(block => block.type === 'input_text').map(block => block.text).join('\n');
          const pre = document.createElement('div');pre.className='pre-text';pre.textContent=text;
          target.querySelectorAll('pre,.pre-text').forEach(node=>node.remove());target.append(pre);
        }
      }
      if (key === 'call') chosen?.querySelector('.tool-input-toggle')?.click();
      const detail = document.getElementById('detail');
      if (detail && target) detail.scrollTop += target.getBoundingClientRect().top - detail.getBoundingClientRect().top - 12;
      target?.animate([{outline:'3px solid #c2a76e'},{outline:'3px solid transparent'}],{duration:1100});
      parent.postMessage({channel,ready:true,key},'*');
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') parent.postMessage({channel,escape:true},'*');
  });
  parent.postMessage({channel,ready:true},'*');
  const initialPoint = new URLSearchParams(location.search).get('point');
  if (parent === window && guide[initialPoint]) window.postMessage({channel,key:initialPoint},'*');
})();

// Small course adapter around claude-tap 0.1.146. Source renderer remains intact.
(() => {
  const channel = 'ch02-static-trace-v1';
  const guide = __COURSE_GUIDE_POINTS__;
  const style = document.createElement('style');
  style.textContent = '::highlight(course-evidence){background:#f5d97a;color:inherit}.pre-text,.tool-input-view{font-size:14px!important;line-height:1.55!important}.msg .pre-text{max-height:none!important;overflow:visible!important}body.course-expanded .pre-text,body.course-expanded .tool-input-view{font-size:20px!important;max-height:none!important}';
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
      const step = key.split('-').pop();
      // Return points: show the matching tool output's input_text blocks as plain text, then find the quoted line.
      if (step === 'result' && chosen) {
        const item = filtered[idx].request.body.input.find(item => item.type === 'custom_tool_call_output' && item.call_id === point.callId);
        const msgs = [...chosen.querySelectorAll('.msg')];
        const holder = msgs.find(el => el.textContent.includes('result (' + point.callId)) ||
                       msgs.find(el => el.textContent.includes(point.callId) && el.textContent.includes(point.needle));
        if (holder && Array.isArray(item?.output)) {
          const text = item.output.filter(block => block.type === 'input_text').map(block => block.text).join('\n');
          const pre = document.createElement('div');pre.className='pre-text';pre.textContent=text;
          holder.querySelectorAll('pre,.pre-text').forEach(node=>node.remove());holder.append(pre);
        }
        target = holder || chosen;
      }
      if (step === 'call') {
        const blocks = [...(chosen?.querySelectorAll('.tool-input-toggle') || [])];
        blocks.forEach(b => b.click());
      }
      // Answer and return points: scroll to the quoted line itself; long outputs are one text node.
      const detail = document.getElementById('detail');
      let mark;
      if (point.needle && target) {
        const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
        for (let node; (node = walker.nextNode());) {
          const at = node.textContent.indexOf(point.needle);
          if (at >= 0) { mark = document.createRange(); mark.setStart(node, at); mark.setEnd(node, at + point.needle.length); break; }
        }
      }
      const box = (mark || target)?.getBoundingClientRect();
      if (detail && box) detail.scrollTop += box.top - detail.getBoundingClientRect().top - (mark ? 120 : 12);
      if (mark && CSS.highlights) { CSS.highlights.set('course-evidence', new Highlight(mark)); }
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

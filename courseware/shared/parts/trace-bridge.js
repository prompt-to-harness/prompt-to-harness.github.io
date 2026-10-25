// 课件定位适配：注入 claude-tap 0.1.146 静态查看器（由 courseware/tools/tracekit.py 生成），原版渲染器不改。
// 依赖查看器的全局变量 filtered、selectEntry、t、detailViewMode；升级 claude-tap 只核对这一个文件。
// 消息（通道 course-trace-v1）：课件发 {key, expanded}；查看器回 {ready, key?}；在查看器里按 Esc 回 {escape}。
(() => {
  const channel = 'course-trace-v1';
  const guide = __COURSE_GUIDE_POINTS__;
  const style = document.createElement('style');
  style.textContent = '::highlight(course-evidence){background:#f5d97a;color:inherit}.pre-text,.tool-input-view,.content-block-text,.tb-full-desc{font-size:15px!important;line-height:1.55!important}.msg .pre-text,.content-block-text,.tb-full-desc{max-height:none!important;overflow:visible!important;white-space:pre-wrap!important}body.course-expanded .pre-text,body.course-expanded .tool-input-view,body.course-expanded .content-block-text,body.course-expanded .tb-full-desc{font-size:20px!important;max-height:none!important}[data-course-role]::before{content:attr(data-course-role);display:block;font:600 12px/1.6 sans-serif;color:#74540e;margin-bottom:8px}';
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
      // kind 由 tracekit 写入：call（模型发出的调用）、result（工具返回）、answer、tool（工具定义）、text
      const step = point.kind;
      document.querySelectorAll('[data-course-role]').forEach(node => node.removeAttribute('data-course-role'));
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
      // 工具定义：展开同名的工具块
      if (step === 'tool' && chosen) {
        const block = [...chosen.querySelectorAll('.tool-block')].find(x => x.querySelector('.tb-name')?.textContent === point.tool);
        block?.querySelector('.tool-block-body')?.classList.add('open');
        block?.querySelector('.tb-arrow')?.classList.add('open');
        target = block || chosen;
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
      // 标出原文所在消息的角色（developer / user …），学员不用自己往上找
      const role = (mark?.startContainer.parentElement || target)?.closest?.('.msg')?.querySelector('.msg-role')?.textContent;
      if (role && step !== 'result') (mark?.startContainer.parentElement?.closest('.content-block-text,.pre-text') || target).dataset.courseRole = '所属消息：' + role;
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

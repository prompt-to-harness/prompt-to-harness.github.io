// Course guide only. Data and renderer are the original static claude-tap export.
(() => {
 const channel='ch02-request-walkthrough-v1';
 const points={identity:{section:'section_messages',needle:'You are Codex'},tools:{section:'section_tools',needle:'exec'},skills:{section:'section_messages',needle:'<skills_instructions>'},environment:{section:'section_messages',needle:'<environment_context>'},permissions:{section:'section_messages',needle:'<permissions instructions>'},response:{section:'section_response',needle:'exec_command'}};
 const style=document.createElement('style');style.textContent='.pre-text,.content-block-text,.tb-full-desc{font-size:15px!important;line-height:1.55!important;max-height:none!important;white-space:pre-wrap!important}body.course-expanded .pre-text,body.course-expanded .content-block-text,body.course-expanded .tb-full-desc{font-size:20px!important}.course-focus[data-course-role]::before{content:attr(data-course-role);display:block;font:600 12px/1.6 sans-serif;color:#74540e;margin-bottom:8px}.course-focus{outline:2px solid #b28c43;outline-offset:4px;border-radius:3px}';document.head.append(style);
 function focusPoint(key,expanded){
  const point=points[key];if(!point)return;
  document.body.classList.toggle('course-expanded',!!expanded);
  document.body.dataset.coursePoint='';detailViewMode='default';selectEntry(0);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
   let section;
   for(const node of document.querySelectorAll('#detail .section')){
    const open=node.querySelector('.title')?.textContent===t(point.section);node.querySelector('.section-body')?.classList.toggle('open',open);node.querySelector('.chevron')?.classList.toggle('open',open);if(open)section=node;
   }
   if(!section)return;
   let target;
   if(key==='tools'){
    target=[...section.querySelectorAll('.tool-block')].find(x=>x.querySelector('.tb-name')?.textContent==='exec');
    target?.querySelector('.tool-block-body')?.classList.add('open');target?.querySelector('.tb-arrow')?.classList.add('open');
   }else target=[...section.querySelectorAll('.content-block-text,.pre-text')].find(x=>x.textContent.includes(point.needle));
   target=target||section;const role=target.closest('.msg')?.querySelector('.msg-role')?.textContent;if(role)target.dataset.courseRole='所属消息：'+role;target.classList.add('course-focus');const detail=document.getElementById('detail');detail.scrollTop+=target.getBoundingClientRect().top-detail.getBoundingClientRect().top-64;
   document.body.dataset.coursePoint=key;parent.postMessage({channel,ready:true,key},'*');
  }));
 }
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.channel!==channel||event.data.ready)return;
  focusPoint(event.data.key,event.data.expanded);
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape')parent.postMessage({channel,escape:true},'*');});
 parent.postMessage({channel,ready:true},'*');
 const standalone=new URLSearchParams(location.search);if(parent===window)focusPoint(standalone.get('point')||'identity',true);
})();

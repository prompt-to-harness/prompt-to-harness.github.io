/* Demonstrate actual input display/copy and a route that skips a supplementary page. */
(() => {
  const data=window.narrationData, pages=data.ppt.pages, locator=createPptLocator(data.ppt);
  const content=document.querySelector('#slide-content');
  const element=(tag,text)=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=text;return el;};
  for(const page of pages){const a=element('a',page.title);a.href=locator.href(page.id);document.querySelector('nav').append(a);}
  function navigate(id,step=0){history.pushState(null,'',locator.href(id,step));render();}
  function input(resource){
    if(!resource || typeof resource.text!=='string')throw new Error('输入原文未接入');
    const section=element('section');section.className='input-section';
    section.append(element('h2',resource.label),element('p',resource.purpose));
    const pre=element('pre',resource.text);pre.className='input-text';section.append(pre);
    const copy=element('button','复制 '+resource.label);copy.type='button';
    const status=element('span');status.setAttribute('role','status');let fallback;
    copy.onclick=async()=>{
      try{await navigator.clipboard.writeText(resource.text);status.textContent='已复制';}
      catch{
        if(!fallback){fallback=element('textarea');fallback.readOnly=true;fallback.value=resource.text;fallback.className='copy-selection';fallback.setAttribute('aria-label',resource.label+'原文（只读）');section.append(fallback);}
        fallback.focus();fallback.select();status.textContent='已选中完整原文，请复制';
      }
    };
    section.append(copy,status);return section;
  }
  function render(){
    const page=pages.find(p=>p.id===location.hash.slice(1)) || pages[0];
    const count=Math.max(1,page.steps?.length||0), raw=Number(new URLSearchParams(location.search).get('step')||0);
    const step=Number.isInteger(raw)?Math.max(0,Math.min(count-1,raw)):0;
    document.querySelector('h1').textContent=page.title;document.querySelector('#position').textContent=locator.label(page.id,step);
    content.replaceChildren();
    if(page.body)content.append(element('p',page.body));
    if(page.steps)for(const text of page.steps.slice(0,step+1))content.append(element('p',text));
    for(const text of page.observations||[])content.append(element('p',text));
    for(const id of page.resources||[])content.append(input(data.resources[id]));
    const plan=data.pptPlan.pages.find(p=>p.id===page.id);
    document.querySelector('#route').textContent=plan.presentation+' · '+(plan.narration==='none'?'无需口播':'对应主讲口播');
    const route=pages.filter(p=>data.pptPlan.pages.find(item=>item.id===p.id)?.role!=='补充页');
    const index=route.indexOf(page), prev=document.querySelector('#previous'),next=document.querySelector('#next');
    prev.disabled=step===0 && index<=0;next.disabled=step===count-1 && (index<0||index===route.length-1);
    prev.onclick=()=>step>0?navigate(page.id,step-1):navigate(route[index-1].id);
    next.onclick=()=>step<count-1?navigate(page.id,step+1):navigate(route[index+1].id);
    document.querySelector('#return').href='index.html?mode=script#'+(page.id==='input-slide'?'step-01':page.id==='example-slide'?'step-03':'ppt-plan');
  }
  addEventListener('popstate',render);addEventListener('hashchange',render);render();
})();

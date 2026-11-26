document.addEventListener('click',async event=>{
  const button=event.target.closest('[data-creation-copy]');if(!button)return;
  const key=button.dataset.creationCopy;
  const box=key ? document.getElementById('creation-prompt-'+key) : button.closest('.creation-prompt');
  const text=box.querySelector('pre').textContent;
  const status=(key ? button.closest('.creation-actions') : box).querySelector(':scope > [role=status]');
  try{await navigator.clipboard.writeText(text);status.textContent='已复制';}
  catch{
    const details=box.closest('details');if(details)details.open=true;
    const range=document.createRange();range.selectNodeContents(box.querySelector('pre'));getSelection().removeAllRanges();getSelection().addRange(range);status.textContent='已选中，请复制';
  }
});

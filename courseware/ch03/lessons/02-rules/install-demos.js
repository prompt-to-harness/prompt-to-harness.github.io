(() => {
  const base = new URL('.', document.currentScript.src);
  let dataPromise;
  const load = () => dataPromise ||= fetch(new URL('install-demos.json', base)).then(r => {
    if (!r.ok) throw new Error('无法读取演示资料');
    return r.json();
  });
  async function info(id) {
    const item = (await load()).find(x => x.id === id);
    if (!item) throw new Error('未知安装演示');
    const r = await fetch(new URL(item.promptFile, base));
    if (!r.ok) throw new Error('无法读取 Prompt');
    return {...item, prompt: (await r.text()).trim()};
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); }
    catch (_) {
      const input = document.createElement('textarea'); input.value = text;
      document.body.append(input); input.select();
      const ok = document.execCommand('copy'); input.remove();
      if (!ok) throw new Error('复制失败，请选择全文手动复制');
    }
  }
  async function terminal(id, status, button) {
    button.disabled = true;
    status.textContent = '正在打开新的独立终端…';
    try {
      if (!['localhost', '127.0.0.1'].includes(location.hostname)) throw new Error('请在讲师电脑的本地课件服务中打开终端');
      const response = await fetch('/__demo/install-terminal', {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({demo:id})
      });
      if (response.status === 404) throw new Error('请重启本地课件服务以启用终端入口');
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || '终端未打开');
      status.textContent = '已打开独立终端：' + result.project + '。首次提示时确认目录；粘贴 Prompt 后自行发送。';
    } catch (error) { status.textContent = error.message; }
    finally { button.disabled = false; }
  }
  function button(label, action) {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    b.addEventListener('click', action); return b;
  }
  async function show(id) {
    const item = await info(id);
    const dialog = document.createElement('dialog'); dialog.className = 'install-demo-dialog';
    const title = document.createElement('h2'); title.textContent = item.title;
    const note = document.createElement('p'); note.textContent = item.note;
    const pre = document.createElement('pre'); pre.textContent = item.prompt;
    const row = document.createElement('div'); row.className = 'install-demo-controls';
    const status = document.createElement('p'); status.className = 'install-demo-status'; status.setAttribute('role','status');
    row.append(button('复制 Prompt', async () => {try {await copy(item.prompt); status.textContent='已复制完整 Prompt';} catch(e) {status.textContent=e.message;}}));
    row.append(button('打开独立终端', e => terminal(id,status,e.currentTarget)));
    const source=document.createElement('a'); source.href=item.url; source.target='_blank'; source.rel='noopener'; source.textContent='打开来源 ↗'; row.append(source);
    row.append(button('关闭', () => dialog.close()));
    const hint=document.createElement('p'); hint.className='install-demo-note';
    hint.textContent='每次打开都会创建空项目与独立 Codex 配置，不自动发送请求。环境之间分开保存文件；这不是虚拟机级隔离。';
    dialog.append(title,note,pre,row,status,hint); document.body.append(dialog);
    dialog.addEventListener('close',()=>dialog.remove(),{once:true});
    dialog.addEventListener('keydown',e=>e.stopPropagation());
    dialog.showModal();
  }
  document.addEventListener('click', e => {
    const a=e.target.closest('a[href*="install-demo.html?demo="]');
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    show(new URL(a.href).searchParams.get('demo')).catch(error=>alert(error.message));
  });
  // Narration keeps its existing text and edit coordinates; controls sit beside material links.
  function attachNarration() {
    if (!location.pathname.endsWith('/speaker.html')) return;
    document.querySelectorAll('a[href*="install-demo.html?demo="]').forEach(a=>{
      if (a.dataset.installReady) return;
      a.dataset.installReady='true';
      const id=new URL(a.href).searchParams.get('demo');
      const span=document.createElement('span'); span.className='install-demo-inline';
      const status=document.createElement('span');status.className='install-demo-status';status.setAttribute('role','status');
      span.append(button('复制 Prompt',async()=>{try {await copy((await info(id)).prompt);status.textContent='已复制';}catch(e){status.textContent=e.message;}}));
      span.append(button('打开独立终端',e=>terminal(id,status,e.currentTarget)),status);a.after(span);
    });
  }
  new MutationObserver(attachNarration).observe(document.body,{childList:true,subtree:true});
  attachNarration();
  if (location.pathname.endsWith('/install-demo.html')) show(new URLSearchParams(location.search).get('demo') || 'github').catch(e=>alert(e.message));
})();

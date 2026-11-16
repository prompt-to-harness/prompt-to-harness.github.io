// Shared editor: source coordinates stay on the original paragraph nodes.
export async function enableScriptEditing(root, {commentsEnabled = true} = {}) {
  const commentsModule = new URL('speaker-comments.js', import.meta.url);
  // 口播存在本节 script.json。只有 tools/serve-courseware.py（sh tools/edit-courseware.sh 启动）提供
  // /__script/edit，写回后由 rebuild-lesson.py 重建 lesson.js；其他打开方式保持只读。
  async function enableEditing() {
    if (!['localhost', '127.0.0.1'].includes(location.hostname)) {
      if (location.protocol !== 'file:') enableReader();
      return;
    }
    let server = false, comments = false;
    try {
      const ping = await fetch('/__script/ping', { cache: 'no-store' });
      server = ping.ok;
      if (server) { const info = await ping.json(); server = info.ok === true; comments = info.comments === true; }
    } catch { /* 不是通过服务打开的 */ }
    if (!server) {
      if (['localhost', '127.0.0.1'].includes(location.hostname)) addBanner('当前是只读页面。要改口播，运行 sh tools/edit-courseware.sh，从打开的浏览器进入逐字稿页。');
      return;
    }
    makeEditable(async ({ intro, scene, screen, step, part, old, text, onDraft }) => {
      while (true) {
        const response = await fetch('/__script/edit', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: location.pathname, intro, scene, screen, step, part, old, new: text }),
        });
        const result = await response.json();
        if (response.status === 409 && typeof result.current === 'string') {
          const merged = await resolveConflict(result.current, text, onDraft);
          if (merged.cancelled) {
            const error = new Error('暂未保存，草稿已保留，可再次编辑后保存');
            error.draft = merged.text;
            throw error;
          }
          old = result.current;
          text = merged.text;
          continue; // 再次比较最新值；对照期间发生的更新也不能被覆盖。
        }
        if (!response.ok) throw new Error(result.error);
        return { text: result.text, note: `已写回 ${result.source}` };
      }
    }, '逐字稿可点击修改。Shift+Enter 换行，Enter 或点别处自动保存，Esc 撤销当前修改。');
    if (comments && commentsEnabled) {
      try { (await import(commentsModule.href)).enableComments(root); }
      catch { addBanner('评论功能加载失败，请刷新页面重试。'); }
    } else if (commentsEnabled) {
      addBanner('如需选中文字评论，请重启课件预览服务后刷新页面。');
    }
  }

  // 经局域网在 Pad / 手机上照稿录制：服务端对非本机只读，这里调整整页字号并给一组 A−/A+，字号记在这台设备上。
  // 档位覆盖手机横屏（0.45–0.85）到 Pad 远距离照稿（到 2.1）；没记过字号时，短边小于 600px 的设备（手机）从 0.65 起，其余从 1.4 起。
  function enableReader() {
    const KEY = 'speaker-reader-scale-v2';
    const STEPS = [0.45, 0.55, 0.65, 0.75, 0.85, 1, 1.2, 1.4, 1.6, 1.8, 2.1];
    let index = Math.min(screen.width, screen.height) < 600 ? 2 : 7;
    try {
      const stored = Number(localStorage.getItem(KEY));
      if (stored) index = STEPS.reduce((best, step, i) => Math.abs(step - stored) < Math.abs(STEPS[best] - stored) ? i : best, 0);
    } catch { /* 隐私模式下读不到就用默认 */ }
    document.body.classList.add('script-reader');
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('speaker-reader.css', import.meta.url);
    document.head.append(stylesheet);
    const apply = () => {
      const scale = STEPS[index];
      document.documentElement.style.setProperty('--reader-scale', scale);
      try { localStorage.setItem(KEY, scale); } catch { /* 记不住也不影响阅读 */ }
    };
    const bar = document.createElement('div');
    bar.className = 'reader-size'; bar.setAttribute('aria-label', '阅读设置');
    const sidebar = document.querySelector('#script > aside, main > aside');
    if (sidebar && !sidebar.parentElement.querySelector('.discussion-restore')) {
      const layout = sidebar.parentElement;
      const toggle = document.createElement('button');
      sidebar.id ||= 'reader-directory';
      toggle.type = 'button';
      toggle.setAttribute('aria-controls', sidebar.id);
      const updateDirectory = collapsed => {
        layout.classList.toggle('reader-directory-collapsed', collapsed);
        toggle.setAttribute('aria-expanded', String(!collapsed));
        toggle.textContent = collapsed ? '展开目录' : '收起目录';
      };
      toggle.addEventListener('click', () => updateDirectory(!layout.classList.contains('reader-directory-collapsed')));
      updateDirectory(false);
      bar.append(toggle);
    }
    [['A−', -1], ['A+', 1]].forEach(([label, delta]) => {
      const button = document.createElement('button');
      button.type = 'button'; button.textContent = label;
      button.addEventListener('click', () => { index = Math.min(Math.max(index + delta, 0), STEPS.length - 1); apply(); });
      bar.append(button);
    });
    document.body.append(bar);
    apply();
  }

  function addBanner(text) {
    const banner = document.createElement('p');
    banner.className = 'edit-banner'; banner.textContent = text;
    (document.querySelector('.script-page header') || root).prepend(banner);
  }

  function resolveConflict(current, draft, onDraft) {
    return new Promise(resolve => {
      const dialog = document.createElement('dialog');
      dialog.className = 'script-conflict';
      dialog.style.cssText = 'width:min(900px,90vw);max-height:85vh;overflow:auto;padding:24px;color:#243042;background:#f4f2eb;border:1px solid #aaa;border-radius:12px';
      const title = document.createElement('h2'); title.textContent = '这段口播有新的修改';
      const hint = document.createElement('p'); hint.textContent = '对照源文件最新稿，整理下方要保存的文字。只替换这一段，其余内容不动。';
      const label = document.createElement('h3'); label.textContent = '源文件最新稿';
      const source = document.createElement('pre'); source.textContent = current || '（空段落）';
      source.style.cssText = 'white-space:pre-wrap;font:inherit;padding:16px;background:white';
      const fieldLabel = document.createElement('label'); fieldLabel.textContent = '本次要保存的文字';
      const field = document.createElement('textarea'); field.value = draft;
      field.setAttribute('aria-label', '本次要保存的文字');
      field.addEventListener('input', () => onDraft(field.value));
      field.style.cssText = 'display:block;box-sizing:border-box;width:100%;min-height:180px;font:inherit;margin:12px 0';
      fieldLabel.append(field);
      const cancel = document.createElement('button'); cancel.textContent = '保留草稿，稍后处理';
      const submit = document.createElement('button'); submit.textContent = '保存整理后的这一段';
      const finish = value => { dialog.close(); dialog.remove(); resolve(value); };
      cancel.onclick = () => finish({cancelled:true, text:field.value}); submit.onclick = () => finish({text:field.value});
      dialog.addEventListener('cancel', event => { event.preventDefault(); finish({cancelled:true, text:field.value}); });
      dialog.append(title, hint, label, source, fieldLabel, cancel, submit);
      document.body.append(dialog); dialog.showModal(); field.focus();
    });
  }

  function makeEditable(save, bannerText) {
    document.body.classList.add('script-editable');
    addBanner(bannerText);
    root.querySelectorAll('p.narration, [data-script-edit]').forEach(p => {
      p.contentEditable = 'plaintext-only';
      p.setAttribute('role', 'textbox');
      p.setAttribute('aria-multiline', 'true');
      p.setAttribute('aria-label', p.dataset.intro === undefined
        ? `${p.dataset.screen || p.dataset.scene} 第 ${Number(p.dataset.step) + 1} 步 · 口播 ${Number(p.dataset.part) + 1}`
        : `开场白 ${Number(p.dataset.intro) + 1}`);
      p.title = '点击编辑，Shift+Enter 换行，Enter 或点别处保存，Esc 撤销';
      p.spellcheck = false;
      let saved = p.textContent;
      let saving = false;
      const draftKey = 'script-draft:' + location.pathname + ':' + JSON.stringify([p.dataset.intro, p.dataset.scene, p.dataset.screen, p.dataset.step, p.dataset.part]);
      const keepDraft = () => {
        try { sessionStorage.setItem(draftKey, JSON.stringify({old: saved, text: p.innerText})); } catch { /* 仍保留页面文字 */ }
      };
      const clearDraft = () => { try { sessionStorage.removeItem(draftKey); } catch {} };
      try {
        const draft = JSON.parse(sessionStorage.getItem(draftKey) || 'null');
        if (draft && draft.text !== saved) {
          p.textContent = draft.text; saved = draft.old;
          p.dataset.state = 'error'; p.title = '已恢复未保存草稿，编辑后按 Enter 保存；Esc 撤销';
        } else if (draft) clearDraft();
      } catch { /* 无可恢复草稿 */ }
      p.addEventListener('input', keepDraft);
      const intro = p.dataset.intro === undefined ? undefined : Number(p.dataset.intro);
      p.addEventListener('focus', () => { p.dataset.state = 'editing'; });
      p.addEventListener('keydown', event => {
        if (event.isComposing || event.keyCode === 229) return;
        if (event.key === 'Escape') { event.preventDefault(); p.textContent = saved; clearDraft(); p.blur(); }
        if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); p.blur(); }
      });
      p.addEventListener('blur', async () => {
        if (saving) return;
        const text = p.innerText.replace(/\r\n?/g, '\n').replace(/\n{2,}/g, '\n').trim();
        if (text === saved) { p.textContent = saved; clearDraft(); delete p.dataset.state; return; }
        keepDraft();
        saving = true;
        p.contentEditable = 'false';
        p.dataset.state = 'saving';
        try {
          const result = await save({ intro, scene: p.dataset.scene, screen: p.dataset.screen, step: Number(p.dataset.step), part: Number(p.dataset.part), old: saved, text, onDraft: draft => { p.textContent = draft; keepDraft(); } });
          p.textContent = saved = result.text;
          clearDraft();
          p.dataset.state = 'saved'; p.title = result.note;
          root.dispatchEvent(new Event('script:changed'));
        } catch (error) {
          if (typeof error.draft === 'string') p.textContent = error.draft;
          keepDraft();
          p.dataset.state = 'error'; p.title = error.message;
          alert(`没有保存：${error.message}\n\n页面上保留了你的改动，刷新后也会恢复草稿，可再次编辑后保存。`);
        } finally {
          saving = false;
          p.contentEditable = 'plaintext-only';
        }
      });
    });
  }

  await enableEditing();
}

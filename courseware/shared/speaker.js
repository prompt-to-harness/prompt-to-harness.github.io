(() => {
  const root = document.querySelector('#script');
  const addParagraph = (parent, text, className) => {
    const p = document.createElement('p'); p.textContent = text;
    if (className) p.className = className;
    parent.append(p);
  };
  const addCommands = (parent, commands = []) => {
    if (!commands.length) return;
    const list = document.createElement('dl'); list.className = 'command-list';
    commands.forEach(item => {
      const row = document.createElement('div');
      const label = document.createElement('dt'); label.textContent = item.label;
      const description = document.createElement('dd');
      const command = document.createElement('code'); command.textContent = item.command;
      description.append(command, document.createTextNode(item.description));
      row.append(label, description); list.append(row);
    });
    parent.append(list);
  };
  if (window.lesson.intro?.length) {
    const intro = document.createElement('div'); intro.id = 'chapter-intro';
    window.lesson.intro.forEach(paragraph => addParagraph(intro, paragraph));
    root.append(intro);
  }
  window.lesson.scenes.forEach((scene, index) => {
    const section = document.createElement('section'); section.id = scene.id;
    const title = document.createElement('h2'); title.textContent = `${String(index + 1).padStart(2, '0')} · ${scene.label}`;
    section.append(title);
    scene.script.forEach((paragraph, step) => {
      if (scene.steps?.[step]) {
        const heading = document.createElement('h3');
        heading.textContent = `第 ${step + 1} 步 · ${scene.steps[step]}`;
        const link = document.createElement('a');
        link.href = `${document.body.dataset.lessonPage || 'index.html'}?mode=slides&step=${step}#${scene.id}`;
        link.textContent = '查看这一步 →';
        section.append(heading, link);
      }
      // 一步口播可含多段（以空行分隔）；【操作提示｜…】是给讲师的操作说明，单独排版、不可编辑
      paragraph.split('\n\n').forEach((text, part) => {
        const stage = text.startsWith('【操作提示｜');
        addParagraph(section, text, stage ? 'stage-direction' : 'narration');
        Object.assign(section.lastChild.dataset, { scene: scene.id, step, part });
      });
    });
    addCommands(section, scene.commands);
    if (scene.prompt) {
      const prompt = document.createElement('div');
      prompt.className = 'prompt';
      const label = document.createElement('div');
      label.className = 'prompt-label'; label.textContent = '发给 Codex 的请求';
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.className = 'language-text'; code.textContent = scene.prompt;
      pre.append(code); prompt.append(label, pre);
      section.append(prompt);
    }
    const details = document.createElement('details');
    details.className = 'teaching-notes';
    const summary = document.createElement('summary'); summary.textContent = '操作、提问解析与备课备注';
    details.append(summary);
    (scene.teaching || []).forEach(item => {
      const h = document.createElement('h3'); h.textContent = item.title; details.append(h);
      item.text.split('\n\n').forEach(text => addParagraph(details, text));
    });
    if (scene.refs?.length) {
      const h = document.createElement('h3'); h.textContent = '原文与链接'; details.append(h);
      const list = document.createElement('ul'); list.className = 'ref-list';
      scene.refs.forEach(ref => {
        const li = document.createElement('li');
        const a = document.createElement('a'); a.href = ref.url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = ref.text;
        li.append(`${ref.kind === 'live' ? '画面上 · ' : '延伸 · '}${ref.group ? ref.group + ' · ' : ''}`, a);
        list.append(li);
      });
      details.append(list);
    }
    if (scene.notes) {
      const notes = document.createElement('div'); notes.innerHTML = scene.notes; details.append(notes);
    }
    section.append(details);
    const link = document.createElement('a'); link.href = `${document.body.dataset.lessonPage || 'index.html'}#${scene.id}`; link.textContent = '查看本段要点 →'; section.append(link);
    root.append(section);
  });
  enableEditing();

  // 口播存在本节 script.json。只有 tools/serve-courseware.py（sh tools/edit-courseware.sh 启动）提供
  // /__script/edit，写回后由 rebuild-lesson.py 重建 lesson.js 与 script.md；其他打开方式保持只读。
  async function enableEditing() {
    let server = false;
    try { server = (await fetch('/__script/ping', { cache: 'no-store' })).ok; } catch { /* 不是通过服务打开的 */ }
    if (!server) {
      if (location.protocol === 'file:') addBanner('当前是只读页面。要改口播，运行 sh tools/edit-courseware.sh，从打开的浏览器进入逐字稿页。');
      return;
    }
    makeEditable(async ({ scene, step, part, old, text }) => {
      const response = await fetch('/__script/edit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: location.pathname, scene, step, part, old, new: text }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      return { text: result.text, note: `已写回 ${result.source}` };
    }, '本地编辑：点任一句口播直接改，Enter 或点别处保存，Esc 撤销；每句下方可展开对应的画面对照。保存会写回本节 script.json 并重建 lesson.js 与 script.md。只能改句子，增删步骤请改源文件。');
  }

  function addBanner(text) {
    const banner = document.createElement('p');
    banner.className = 'edit-banner'; banner.textContent = text;
    document.querySelector('.script-page header')?.append(banner);
  }

  function makeEditable(save, bannerText) {
    document.body.classList.add('script-editable');
    addBanner(bannerText);
    root.querySelectorAll('p.narration').forEach(p => {
      p.contentEditable = 'plaintext-only';
      p.spellcheck = false;
      let saved = p.textContent;
      const peek = document.createElement('button');
      peek.type = 'button'; peek.className = 'peek'; peek.textContent = '对照画面';
      peek.addEventListener('click', () => {
        const open = p.parentElement.querySelector(`iframe[data-scene="${p.dataset.scene}"][data-step="${p.dataset.step}"]`);
        if (open) { open.remove(); peek.textContent = '对照画面'; return; }
        const frame = document.createElement('iframe');
        frame.className = 'peek-frame'; frame.title = `第 ${Number(p.dataset.step) + 1} 步的画面`;
        frame.dataset.scene = p.dataset.scene; frame.dataset.step = p.dataset.step;
        frame.src = `${document.body.dataset.lessonPage || 'index.html'}?mode=slides&step=${p.dataset.step}#${p.dataset.scene}`;
        peek.after(frame); peek.textContent = '收起画面';
      });
      p.after(peek);
      p.addEventListener('focus', () => { p.dataset.state = 'editing'; });
      p.addEventListener('keydown', event => {
        if (event.key === 'Escape') { p.textContent = saved; p.blur(); }
        if (event.key === 'Enter' && !event.isComposing) { event.preventDefault(); p.blur(); }
      });
      p.addEventListener('blur', async () => {
        const text = p.innerText.replace(/\s*\n\s*/g, '').trim();
        if (text === saved) { p.textContent = saved; delete p.dataset.state; return; }
        p.dataset.state = 'saving';
        try {
          const result = await save({ scene: p.dataset.scene, step: Number(p.dataset.step), part: Number(p.dataset.part), old: saved, text });
          p.textContent = saved = result.text;
          p.dataset.state = 'saved'; p.title = result.note;
        } catch (error) {
          p.dataset.state = 'error'; p.title = error.message;
          alert(`没有保存：${error.message}\n\n页面上保留了你的改动，可以复制后去源文件里改。`);
        }
      });
    });
  }
})();

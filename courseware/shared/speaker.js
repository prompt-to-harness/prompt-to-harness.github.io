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
  // 录前准备：一节只出现一次，开录前逐条做完；录制中要做的事写在各步操作提示里
  if (window.lesson.prep?.length) {
    const prep = document.createElement('div'); prep.className = 'prep';
    const h = document.createElement('h2'); h.textContent = '录前准备'; prep.append(h);
    const list = document.createElement('ul');
    window.lesson.prep.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
    prep.append(list); root.append(prep);
  }
  if (window.lesson.intro?.length) {
    const intro = document.createElement('div'); intro.id = 'chapter-intro';
    // 开场白不属于任何页面，存在 lesson.js 的 intro 里；可编辑，但没有对应画面
    window.lesson.intro.forEach((paragraph, index) => {
      addParagraph(intro, paragraph, 'narration');
      intro.lastChild.dataset.intro = index;
    });
    root.append(intro);
  }
  window.lesson.scenes.forEach((scene, index) => {
    const section = document.createElement('section'); section.id = scene.id;
    const title = document.createElement('h2'); title.textContent = `${String(index + 1).padStart(2, '0')} · ${scene.label ?? scene.title.replace(/<[^>]+>/g, '')}`;
    section.append(title);
    scene.script.forEach((paragraph, step) => {
      if (scene.steps?.[step]) {
        const heading = document.createElement('h3');
        heading.textContent = `第 ${step + 1} 步 · ${scene.steps[step]}`;
        section.append(heading);
      }
      // 一步口播可含多段（以空行分隔）；【操作提示｜…】是给讲师的操作说明，【切换｜…】标出口播中途切窗口的位置，
      // 两者都单独排版、不念、不可编辑
      paragraph.split('\n\n').forEach((text, part) => {
        const stage = text.startsWith('【操作提示｜');
        const cue = text.match(/^【切换｜(.+)】$/);
        addParagraph(section, cue ? `⇄ ${cue[1]}` : text, stage ? 'stage-direction' : cue ? 'switch-cue' : 'narration');
        const form = stage && text.match(/^【操作提示｜(现场回看|现场|回放)｜/);
        if (form) section.lastChild.dataset.form = form[1];
        // 切到哪类窗口按目标开头分色：课件、终端（Codex、Terminal）、浏览器、编辑器；写法见制作手册“讲稿与转场”
        if (cue) {
          const to = cue[1];
          const target = /课件/.test(to) ? 'slides' : /^(Codex|Terminal)/.test(to) ? 'terminal'
            : /^(浏览器|claude-tap 查看器)/.test(to) ? 'browser' : /^(编辑器|VS Code)/.test(to) ? 'editor' : '';
          if (target) section.lastChild.dataset.target = target;
        }
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
    // 还没分流的旧备注（teaching、notes）：展开显示、灰色排版，Pad 照稿录制时不显示（styles.css .script-reader）。
    // 分流规则见制作手册“讲稿与转场”：录制时要做的并进操作提示，录前一次做完的进 prep，来源与核验进分镜
    if (scene.teaching?.length || scene.notes) {
      const notes = document.createElement('div'); notes.className = 'teaching-notes';
      const label = document.createElement('p'); label.className = 'teaching-label'; label.textContent = '备课备注（待分流，录制页不显示）';
      notes.append(label);
      (scene.teaching || []).forEach(item => {
        const h = document.createElement('h3'); h.textContent = item.title; notes.append(h);
        item.text.split('\n\n').forEach(text => addParagraph(notes, text));
      });
      if (scene.notes) {
        const extra = document.createElement('div'); extra.innerHTML = scene.notes; notes.append(extra);
      }
      section.append(notes);
    }
    root.append(section);
  });
  if (location.protocol !== 'file:') import(new URL('script-editor.js', document.currentScript.src).href)
    .then(module => module.enableScriptEditing(root));
})();

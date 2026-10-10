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
      paragraph.split('\n\n').forEach(text => {
        addParagraph(section, text, text.startsWith('【操作提示｜') ? 'stage-direction' : undefined);
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
})();

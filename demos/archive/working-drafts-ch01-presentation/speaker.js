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
  window.lesson.scenes.forEach((scene, index) => {
    const section = document.createElement('section'); section.id = scene.id;
    const title = document.createElement('h2'); title.textContent = `${String(index + 1).padStart(2, '0')} · ${scene.label}`;
    section.append(title);
    scene.script.forEach(paragraph => addParagraph(section, paragraph));
    addCommands(section, scene.commands);
    if (scene.prompt) {
      const prompt = document.createElement('pre');
      prompt.className = 'prompt'; prompt.textContent = scene.prompt;
      section.append(prompt);
    }
    const link = document.createElement('a'); link.href = `${document.body.dataset.lessonPage || 'index.html'}#${scene.id}`; link.textContent = '查看本段要点 →'; section.append(link);
    root.append(section);
  });
})();

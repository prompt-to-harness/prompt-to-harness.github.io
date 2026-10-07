// Use the course's existing recording canvas and reveal controls.
if (document.body.dataset.mode === 'slides') {
  if (window === window.top) {
    document.querySelector('#record-toggle').click();
  } else {
    document.body.classList.add('recording');
    window.dispatchEvent(new Event('resize'));
  }
}
document.title = `${window.lesson.chapter} ${window.lesson.scenes[0].id} · ${pilotParams.get('variant') === 'original' ? '现版' : '生图版'} · 课程试验`;
document.querySelector('#lesson').setAttribute('aria-label', `${window.lesson.chapter} · ${window.lesson.scenes[0].title}`);
document.querySelector('.chapter-label').textContent = window.lesson.chapter;
document.querySelector('.sidebar-title').textContent = window.lesson.title;
document.querySelector('.sidebar-meta').textContent = '独立试验 · 正式课件未替换';
const pilotChapter = window.lesson.pilotSource.match(/ch\d+/)[0];
for (const link of document.querySelectorAll('.chapter-link')) {
  link.href = `../../courseware/${pilotChapter}/index.html`;
  link.textContent = window.lesson.chapter.split(' · ')[0];
}
const pilotSourceLink = document.querySelector('.script-link');
pilotSourceLink.href = window.lesson.pilotSource;
pilotSourceLink.textContent = '对应正式页';
const pilotNav = document.querySelector('.chapter-nav');
pilotNav.replaceChildren();
for (const [label, href] of [['试验对照', 'index.html'], ['对应正式页', window.lesson.pilotSource]]) {
  const link = document.createElement('a');
  link.textContent = label;
  link.href = href;
  pilotNav.append(link);
}

/* Capture the real PPT before speaker-data loads the independent narration sources. */
(() => {
  const pages = window.lesson.scenes;
  const locator = window.pptLocator = createPptLocator({section:'3.1', pages});
  const speaker = /speaker\.html$/.test(location.pathname);
  if (!speaker) { locator.bindPlayer(); return; }
  const number = text => /^\d+$/.test(text) ? Number(text) : '一二三四五六七八九'.indexOf(text) + 1;
  locator.decorate = root => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement.closest('script,style,textarea,pre,code,[data-scene],[contenteditable],.script-passage')) nodes.push(node);
    }
    for (const node of nodes) {
      const text = node.textContent;
      const pattern = /第\s*([\d一二三四五六七八九]+)\s*页(?:\s*[·，]?\s*第\s*([\d一二三四五六七八九]+)\s*步)?|\b(p\d+[a-z\d-]*)(?:\s*第\s*([\d一二三四五六七八九]+)\s*步)?/g;
      let offset = 0; const fragment = document.createDocumentFragment();
      for (const match of text.matchAll(pattern)) {
        const page = match[3] ? pages.find(page => page.id === match[3]) : pages[number(match[1]) - 1];
        const stepText = match[2] || match[4], step = stepText ? number(stepText) - 1 : undefined;
        const label = page && locator.label(page.id, step); if (!label) continue;
        fragment.append(document.createTextNode(text.slice(offset, match.index)));
        const a = document.createElement('a'); a.textContent = label; a.href = locator.href(page.id, step ?? 0); a.target = '_blank'; a.rel = 'noopener'; a.className = 'ppt-location';
        fragment.append(node.parentElement.closest('a') ? document.createTextNode(label) : a); offset = match.index + match[0].length;
      }
      if (offset) { fragment.append(document.createTextNode(text.slice(offset))); node.replaceWith(fragment); }
    }
    for (const a of root.querySelectorAll('a[href]')) {
      const url = new URL(a.href, location.href);
      if (url.pathname !== new URL('index.html', location.href).pathname) continue;
      const id = url.hash.slice(1), step = Number(url.searchParams.get('step') || 0), label = locator.label(id, step);
      if (!label) continue;
      a.href = locator.href(id, step);
      if (!/P3\.1-\d+/.test(a.textContent)) a.prepend(document.createTextNode(label + ' · '));
    }
  };
})();

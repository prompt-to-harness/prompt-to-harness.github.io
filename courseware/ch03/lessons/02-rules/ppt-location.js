/* Presentation-only labels; source text, scene IDs, script coordinates and comments stay intact. */
(() => {
  const ids = new Set(window.lesson.pptSceneIds);
  // Loaded before selection-scope filters speaker scenes.
  const pages = window.lesson.scenes.filter(scene => ids.has(scene.id));
  const locator = window.pptLocator = createPptLocator({section: window.lesson.section, pages});
  const speaker = /speaker\.html$/.test(location.pathname);
  if (!speaker) { locator.bindPlayer(); return; }
  // Only explicit internal PPT references are formatted; spoken source nodes are excluded.
  const pattern = /\bp\d+[a-z\d-]*(?:\s*第\s*(\d+)\s*步)?/gi;
  locator.decorate = root => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement.closest('script,style,textarea,pre,code,[contenteditable],[data-scene],.spoken-block,.script-passage,.frame-source,.screen-sources')) nodes.push(node);
    }
    for (const node of nodes) {
      const text = node.textContent;
      const matches = [...text.matchAll(pattern)].filter(match => locator.entries.has(match[0].match(/^p\d+[a-z\d-]*/i)[0]));
      if (!matches.length) continue;
      const fragment = document.createDocumentFragment(); let offset = 0;
      for (const match of matches) {
        const id = match[0].match(/^p\d+[a-z\d-]*/i)[0], step = match[1] ? Number(match[1]) - 1 : undefined;
        const label = locator.label(id, step); if (!label) continue;
        fragment.append(document.createTextNode(text.slice(offset, match.index)));
        if (node.parentElement.closest('a')) fragment.append(document.createTextNode(label));
        else { const a = document.createElement('a'); a.textContent = label; a.href = locator.href(id, step ?? 0); a.target = '_blank'; a.rel = 'noopener'; a.className = 'ppt-location'; fragment.append(a); }
        offset = match.index + match[0].length;
      }
      fragment.append(document.createTextNode(text.slice(offset))); node.replaceWith(fragment);
    }
    for (const a of root.querySelectorAll('a[href]')) {
      const url = new URL(a.href, location.href);
      if (url.pathname !== new URL('index.html', location.href).pathname) continue;
      const id = url.hash.slice(1), step = Number(url.searchParams.get('step') || 0), label = locator.label(id, step);
      if (!label) continue;
      a.href = locator.href(id, step);
      // Generated reading material labels previously used a part-local ordinal.
      if (/^PPT\s+(?:第\s*)?\d+\s*(?:页)?\s*·/.test(a.textContent)) a.textContent = a.textContent.replace(/^PPT\s+(?:第\s*)?\d+\s*(?:页)?\s*·/, 'PPT ·');
      // Keep the material title and prepend a usable step locator if it had no explicit reference.
      if (!/P3\.2-\d+/.test(a.textContent)) a.prepend(document.createTextNode(label + ' · '));
    }
  };
})();

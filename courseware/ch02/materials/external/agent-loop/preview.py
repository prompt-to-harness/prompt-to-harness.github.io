"""只在浏览器内制作 p07-loop 候选样稿：借 p16b 的证据页版式换入重画图，不修改正式课件。uv run 本文件。"""
from pathlib import Path
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parents[5]
out = Path(__file__).resolve().parent
with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={'width': 1440, 'height': 900}, device_scale_factor=1)
    for style in ('course', 'excalidraw'):
        page.goto((root / 'courseware/ch02/lessons/01-request/index.html').as_uri() + '?mode=slides&step=9#p16b')
        page.evaluate('document.fonts.ready')
        svg = (out / f'redraw-codex-agent-loop-{style}.svg').read_text()
        print(style, page.evaluate('''([svg]) => {
          const s = document.querySelector('#p16b');
          s.querySelector('h2').textContent = '只说了一句，为什么有好几次请求？';
          const fig = s.querySelector('svg.lesson-diagram');
          const box = fig.parentElement; fig.outerHTML = svg;
          const n = s.querySelector('svg.lesson-diagram'); n.style.maxHeight = '400px'; n.style.width = '100%';
          s.querySelectorAll('.p-bar, .p-takeaway, .p-conclusion').forEach(e => e.remove());
          s.querySelectorAll('[data-reveal]').forEach(e => e.classList.add('is-revealed'));
          const c = s.querySelector('.scene-content');
          return {content: [c.clientHeight, c.scrollHeight], fig: [n.getBoundingClientRect().width|0, n.getBoundingClientRect().height|0]};
        }''', [svg]))
        page.wait_for_timeout(300)
        page.locator('#p16b').screenshot(path=str(out / f'preview-codex-agent-loop-{style}.png'))
    b.close()

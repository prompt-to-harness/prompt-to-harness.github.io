#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Check the shared presentation shell on every lesson page in every chapter, using Chromium.

check-progressive.py walks chapter 1 scene by scene; this script is deliberately
chapter-agnostic and shallow: it opens each lesson page that has the presentation
settings (camera guide, recording mode) and verifies what must hold everywhere.
It also walks every scene to its last step on the wide viewport and reports text
that overlaps other text, or content cut off by an overflow:hidden box (scroll
panels are allowed). A content-bottom measurement alone misses both.
Requires Playwright and its Chromium browser.
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

courseware = Path(__file__).resolve().parents[1]
pages = sorted(
    p for p in courseware.rglob('index.html')
    if 'archive' not in p.parts and 'id="camera-toggle"' in p.read_text()
)
assert pages, 'no lesson pages found'

# 60rem = 960px is where styles.css switches to the desktop layout; the guide must
# behave the same on both sides of it (the first regression hid only above 960px).
viewports = {'narrow': (800, 700), 'wide': (1280, 848)}
errors, network = [], []

# Runs in the page; returns {seen: [scene ids], issues: [messages]}. Compares the boxes of
# rendered text (not element boxes), so decorations beside text, such as stamps, do not count.
LAYOUT_JS = r"""
async () => {
  const frame = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const key = k => document.body.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }));
  const shown = e => e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden' && Number(getComputedStyle(e).opacity) > 0;
  const label = e => `“${e.textContent.trim().replace(/\s+/g, ' ').slice(0, 16)}”`;
  // Text boxes of an element's own text nodes, cut to what its clipping ancestors let through.
  function textBoxes(e) {
    let view = { left: -1e9, top: -1e9, right: 1e9, bottom: 1e9 };
    for (let a = e.parentElement; a; a = a.parentElement) {
      if (getComputedStyle(a).overflow === 'visible') continue;
      const r = a.getBoundingClientRect();
      view = { left: Math.max(view.left, r.left), top: Math.max(view.top, r.top), right: Math.min(view.right, r.right), bottom: Math.min(view.bottom, r.bottom) };
    }
    const boxes = [];
    for (const n of e.childNodes) {
      if (n.nodeType !== 3 || !n.textContent.trim()) continue;
      const range = document.createRange(); range.selectNodeContents(n);
      for (const r of range.getClientRects()) {
        const b = { left: Math.max(r.left, view.left), top: Math.max(r.top, view.top), right: Math.min(r.right, view.right), bottom: Math.min(r.bottom, view.bottom) };
        if (b.right - b.left > 1 && b.bottom - b.top > 1) boxes.push(b);
      }
    }
    return boxes;
  }
  key('Home'); await frame();
  const seen = [], issues = [];
  for (let guard = 0; guard < 500; guard++) {
    const scene = document.querySelector('.scene:not([hidden])');
    if (!scene.querySelector('.step-hidden') && !seen.includes(scene.id)) {
      seen.push(scene.id);
      const texts = [...scene.querySelectorAll('*')].filter(shown).map(e => [e, textBoxes(e)]).filter(([, b]) => b.length);
      const reported = new Set();
      for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) {
        const [[a, ra], [b, rb]] = [texts[i], texts[j]];
        if (a.contains(b) || b.contains(a)) continue;
        const oy = Math.max(0, ...ra.flatMap(r => rb.map(s =>
          Math.min(r.right, s.right) - Math.max(r.left, s.left) > 4 ? Math.min(r.bottom, s.bottom) - Math.max(r.top, s.top) : 0)));
        const pair = label(a) + label(b);
        if (oy > 3 && !reported.has(pair)) { reported.add(pair); issues.push(`${scene.id}: 文字重叠 ${Math.round(oy)}px ${label(a)} / ${label(b)}`); }
      }
      // Scroll panels (overflow auto/scroll) are allowed; hidden or clipped text is not reachable at all.
      for (const e of scene.querySelectorAll('*')) {
        const cs = getComputedStyle(e);
        if (shown(e) && /hidden|clip/.test(cs.overflowY + cs.overflowX) && (e.scrollHeight > e.clientHeight + 4 || e.scrollWidth > e.clientWidth + 4))
          issues.push(`${scene.id}: 内容被裁掉 ${Math.max(e.scrollHeight - e.clientHeight, e.scrollWidth - e.clientWidth)}px ${label(e)}`);
      }
    }
    const before = location.href; key('ArrowRight'); await frame();
    if (location.href === before) break;
  }
  return { seen, issues };
}
"""


def visible(page):
    return page.evaluate("getComputedStyle(document.querySelector('.camera-guide')).visibility") == 'visible'


with sync_playwright() as p:
    browser = p.chromium.launch()
    for path in pages:
        name = str(path.relative_to(courseware.parent))
        for label, (width, height) in viewports.items():
            context = browser.new_context(viewport={'width': width, 'height': height}, reduced_motion='reduce')
            page = context.new_page()
            page.on('pageerror', lambda e, n=name: errors.append(f'{n}: {e}'))
            page.route('http://**/*', lambda route: (network.append(route.request.url), route.abort()))
            page.route('https://**/*', lambda route: (network.append(route.request.url), route.abort()))
            page.goto(path.as_uri() + '?mode=slides')
            page.evaluate('document.fonts.ready')
            where = f'{name} [{label}]'
            toggle = page.locator('#camera-toggle')
            if visible(page):
                errors.append(f'{where}: 人像辅助框默认可见，应默认隐藏')
            if toggle.text_content() != '显示人像辅助框' or toggle.get_attribute('aria-pressed') != 'false':
                errors.append(f'{where}: 默认状态下按钮应为“显示人像辅助框”且 aria-pressed=false')
            toggle.evaluate('(b) => b.click()')  # the settings menu may be collapsed; click programmatically
            if not visible(page) or toggle.text_content() != '隐藏人像辅助框' or toggle.get_attribute('aria-pressed') != 'true':
                errors.append(f'{where}: 点“显示人像辅助框”后应显示辅助框，按钮变为“隐藏人像辅助框”')
            toggle.evaluate('(b) => b.click()')
            if visible(page):
                errors.append(f'{where}: 再次点击后辅助框应重新隐藏')
            if page.locator('.scene:not([hidden])').count() != 1:
                errors.append(f'{where}: 演示模式应恰有一个当前页面')
            if label == 'wide':
                layout = page.evaluate(LAYOUT_JS)
                if len(layout['seen']) != page.locator('.scene').count():
                    errors.append(f'{where}: 逐步前进只走到 {len(layout["seen"])} 页，未覆盖全部页面')
                errors += [f'{where} {issue}' for issue in layout['issues']]
            context.close()
        # Reading mode on a phone: no page-level horizontal scrolling.
        context = browser.new_context(viewport={'width': 390, 'height': 844}, reduced_motion='reduce')
        page = context.new_page()
        page.goto(path.as_uri() + '?mode=scroll')
        page.evaluate('document.fonts.ready')
        if not page.evaluate('document.documentElement.scrollWidth <= innerWidth'):
            errors.append(f'{name} [phone]: 阅读模式出现页面级横向滚动')
        context.close()
    browser.close()

if network:
    errors.append(f'页面请求了外部网络（应离线可用）：{sorted(set(network))[:3]}')
for error in errors:
    print(error)
print(f'{len(pages)} lesson pages checked, {len(errors)} errors')
sys.exit(bool(errors))

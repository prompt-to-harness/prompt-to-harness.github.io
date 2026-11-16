#!/usr/bin/env python3
"""Check continuous narration on actual chapter 3 pages, not only the template."""
from pathlib import Path
from playwright.sync_api import sync_playwright

page_path = Path(__file__).resolve().parents[1] / 'ch03/lessons/03-debug/speaker.html'
with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    for width in (1280, 390):
        page = browser.new_page(viewport={'width': width, 'height': 850})
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.goto(page_path.as_uri())
        page.wait_for_selector('.narration-entry')
        ids = page.evaluate('''() => narrationData.parts.flatMap(p =>
          [p.id, ...(p.groups || []).flatMap(g => [g.id, ...(g.screens || []).map(s => s.id)])])''')
        assert page.locator('.narration-entry').count() == len(ids)
        page.evaluate('window.originalEntries = [...document.querySelectorAll(".narration-entry")]')
        sidebar = page.evaluate("document.querySelector('aside').scrollTop")
        folds = page.evaluate("[...document.querySelectorAll('nav details')].map(e => e.open)")
        # Exercise every boundary without navigation or replacing any content.
        initial_history = page.evaluate('history.length')
        for entry_id in ids:
            page.evaluate('''id => {
              const panel = document.querySelector('.panel'), target = document.getElementById(id);
              panel.scrollTop += target.getBoundingClientRect().top - panel.getBoundingClientRect().top - 16;
            }''', entry_id)
            page.wait_for_function('id => document.querySelector("nav [aria-current]")?.hash === "#" + id', arg=entry_id)
        assert page.evaluate('history.length') == initial_history
        assert page.evaluate('originalEntries.every(e => e.isConnected)')
        assert page.evaluate("document.querySelector('aside').scrollTop") == sidebar
        assert page.evaluate("[...document.querySelectorAll('nav details')].map(e => e.open)") == folds
        # Deep link, reload, navigation, and back/forward retain all original nodes.
        target, following = ids[len(ids)//2:len(ids)//2+2]
        page.goto(page_path.as_uri() + '#' + target)
        page.reload()
        page.wait_for_function('id => document.querySelector("nav [aria-current]")?.hash === "#" + id', arg=target)
        page.evaluate('window.originalEntries = [...document.querySelectorAll(".narration-entry")]')
        for entry_id in (following, target):
            page.evaluate('id => document.querySelector(`nav a[href="#${id}"]`).click()', entry_id)
        page.go_back()
        page.wait_for_function('id => document.querySelector("nav [aria-current]")?.hash === "#" + id', arg=following)
        page.go_forward()
        page.wait_for_function('id => document.querySelector("nav [aria-current]")?.hash === "#" + id', arg=target)
        assert page.evaluate('originalEntries.every(e => e.isConnected)')
        assert page.evaluate('document.querySelector(".panel").scrollWidth <= document.querySelector(".panel").clientWidth')
        assert not errors, errors
        page.close()
    browser.close()
print('Narration: continuous boundaries, TOC, history, deep links, original nodes and narrow layout passed')

# The older adapters have separate design/script routes. Both must keep the
# complete lesson mounted, including after visiting an overview or a deep link.
lessons = {
    '01-memory-game': ('.discussion-panel', '.discussion-panel > section'),
    '02-rules': ('.discussion-panel', '.discussion-panel > article, .discussion-panel > section'),
    '04-plugin': ('.panel', 'article.content > section'),
    '06-sources': (None, '#script > section'),
    '07-cleanup': (None, '#script > section'),
}
with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    for folder, (panel_selector, entry_selector) in lessons.items():
        for width in (1280, 390):
            page = browser.new_page(viewport={'width': width, 'height': 850})
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            url = page_path.parents[1] / folder / 'speaker.html'
            page.goto(url.as_uri())
            page.wait_for_selector(entry_selector)
            page.evaluate('''({panel, entries}) => {
              window.readingPanel = panel ? document.querySelector(panel) : document.scrollingElement;
              window.originalEntries = [...document.querySelectorAll(entries)];
              window.originalScripts = [...document.querySelectorAll('[data-scene]')].map(node =>
                ({node, text:node.textContent, scene:node.dataset.scene, step:node.dataset.step, part:node.dataset.part}));
              window.checkContinuity = () => originalEntries.every(node => node.isConnected && node.getBoundingClientRect().height > 0)
                && originalScripts.every(({node,text,scene,step,part}) => node.isConnected && node.textContent === text
                  && node.dataset.scene === scene && node.dataset.step === step && node.dataset.part === part);
            }''', {'panel': panel_selector, 'entries': entry_selector})
            expected = page.evaluate('''() => window.narrationData ? 1 + narrationData.parts.reduce((n,p)=> n+1+(p.groups||[]).reduce((m,g)=>m+1+(g.screens||[]).length,0),0)
              : window.unifiedSpeakerPlan ? unifiedSpeakerPlan.contentDesign.units.reduce((n,u)=>n+1+u.items.length,0)
              : window.screenPlan ? screenPlan.units.length+1 : lesson.scenes.length''')
            assert page.locator(entry_selector).count() == expected, folder
            hashes = page.eval_on_selector_all('aside a[href^="#"]', 'nodes => [...new Set(nodes.map(n => n.hash))]')
            for hash_value in hashes:
                page.evaluate('hash => [...document.querySelectorAll("aside a[href]")].find(a=>a.hash===hash).click()', hash_value)
                assert page.evaluate('checkContinuity()'), (folder, hash_value)
            # A real wheel gesture crosses a section boundary with no directory click.
            if panel_selector:
                page.evaluate('''() => {
                  const next = originalEntries[1];
                  readingPanel.scrollTop += next.getBoundingClientRect().top-readingPanel.getBoundingClientRect().top-160;
                }''')
                page.wait_for_timeout(50)
                before = page.evaluate('''() => ({history:history.length, hash:location.hash,
                  sidebar:document.querySelector('aside').scrollTop,
                  folds:[...document.querySelectorAll('aside details')].map(e=>e.open),
                  scroll:readingPanel.scrollTop})''')
                page.locator(panel_selector).hover()
                page.mouse.wheel(0, 500)
                page.wait_for_function('previous => readingPanel.scrollTop > previous', arg=before['scroll'])
                page.wait_for_timeout(80)
                assert page.evaluate('originalEntries[1].getBoundingClientRect().top < readingPanel.getBoundingClientRect().top+100'), folder
                after = page.evaluate('''() => ({history:history.length, hash:location.hash,
                  sidebar:document.querySelector('aside').scrollTop,
                  folds:[...document.querySelectorAll('aside details')].map(e=>e.open)})''')
                assert after == {k:v for k,v in before.items() if k != 'scroll'}, (folder, before, after)
                assert page.evaluate('readingPanel.scrollWidth <= readingPanel.clientWidth+1'), (folder, width, 'horizontal overflow')
                # Back/forward and reload must preserve the requested route and content.
                first, second = hashes[0], hashes[-1]
                for hash_value in (first, second):
                    page.evaluate('hash => [...document.querySelectorAll("aside a[href]")].find(a=>a.hash===hash).click()', hash_value)
                page.go_back()
                page.wait_for_function('hash => location.hash === hash', arg=first)
                assert page.evaluate('checkContinuity()'), folder
                page.go_forward()
                page.wait_for_function('hash => location.hash === hash', arg=second)
                assert page.evaluate('checkContinuity()'), folder
                page.reload()
                page.wait_for_selector(entry_selector)
                assert page.locator(entry_selector).count() == expected
                assert page.eval_on_selector_all(entry_selector, 'nodes => nodes.every(node => node.getBoundingClientRect().height > 0)'), folder
            else:
                for index in range(expected):
                    page.evaluate('index => originalEntries[index].scrollIntoView()', index)
                    assert page.evaluate('checkContinuity()'), folder
            assert not errors, (folder, errors)
            print(f'{folder} {width}px: continuous content, navigation and original script nodes passed')
            page.close()
    # The current 3.5 entry is deliberately a placeholder, not an old lesson.
    page = browser.new_page()
    page.goto((page_path.parents[1] / '05-game-studio/speaker.html').as_uri())
    assert '占位' in page.locator('h1').inner_text()
    browser.close()

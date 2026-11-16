"""Check lecture highlights, legacy routes and sequential record navigation.

Requires the local course server (8876) and showcase server (4397).
"""
import json
from pathlib import Path
from urllib.parse import urlparse, parse_qs
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
CONFIG = json.loads((Path(__file__).parent / 'inspect-process.json').read_text())
OUT = ROOT / 'lab-runs/ch03-showcase'
FOCUSED = """() => {
    const s = document.querySelector('#course-focus-status');
    return Number(s?.dataset.expected)>0 && s.dataset.expected===s.dataset.matched;
}"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 1000})
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    count = 0
    for topic, spec in CONFIG['topics'].items():
        for position, step in enumerate(spec['steps']):
            page.goto(f'http://127.0.0.1:4397/inspect/?topic={topic}&position={position}')
            page.wait_for_function(FOCUSED, timeout=20000)
            assert page.evaluate("CSS.highlights.get('course-match').size > 0")
            count += 1
    for route, topic in CONFIG['routes'].items():
        page.goto('http://localhost:8876/' + route)
        page.wait_for_url(lambda url: parse_qs(urlparse(url).query).get('topic') == [topic])
        page.wait_for_function(FOCUSED, timeout=20000)
    page.goto('http://127.0.0.1:4397/inspect/?topic=selection-description')
    page.wait_for_function(FOCUSED)
    page.get_by_role('button', name='下一条记录', exact=True).click()
    page.wait_for_url(lambda url: parse_qs(urlparse(url).query).get('position') == ['1'])
    page.wait_for_function(FOCUSED)
    page.get_by_role('button', name='上一条记录', exact=True).click()
    page.wait_for_url(lambda url: parse_qs(urlparse(url).query).get('position') == ['0'])
    page.reload()
    page.wait_for_function(FOCUSED)
    page.screenshot(path=str(OUT / 'inspect-process-desktop.png'))
    page.set_viewport_size({'width': 390, 'height': 844})
    page.wait_for_function(FOCUSED)
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.screenshot(path=str(OUT / 'inspect-process-mobile.png'))
    assert not errors, errors
    browser.close()
print(f'PASS: {count} highlights; {len(CONFIG["routes"])} legacy routes; next/previous, refresh, narrow screen')

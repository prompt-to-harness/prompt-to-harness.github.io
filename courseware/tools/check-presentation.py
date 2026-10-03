#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Check the shared presentation shell on every lesson page in every chapter, using Chromium.

check-progressive.py walks chapter 1 scene by scene; this script is deliberately
chapter-agnostic and shallow: it opens each lesson page that has the presentation
settings (camera guide, recording mode) and verifies what must hold everywhere.
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

#!/usr/bin/env python3
"""为 3.1–3.3 课件拍证据图：在排练实现的构建产物上复现关键画面，截游戏区。

用法：uv run courseware/ch03/materials/mainline/shoot.py   # 需要先在各运行目录 npm run build
输出到 courseware/ch03/lessons/02-rules/evidence/。每张图对应 README 里的一条观察，不改任何代码。
"""
import functools, http.server, threading
from pathlib import Path
from playwright.sync_api import sync_playwright

REPO = Path(__file__).resolve().parents[4]
RUNS = REPO / 'lab-runs' / 'ch03-mainline'
OUT = REPO / 'courseware' / 'ch03' / 'lessons' / '02-rules' / 'evidence'


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def serve(dist):
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=str(dist)))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return f'http://127.0.0.1:{srv.server_address[1]}/'


FIND = """() => { const g = {}; for (const b of document.querySelectorAll('button')) (g[(b.className || '').split(' ')[0]] ||= []).push(b);
  return Object.entries(g).sort((a, b) => b[1].length - a[1].length)[0][0]; }"""


def game(pg, cls):
    return pg.locator(f'button.{cls}').first.locator("xpath=ancestor::*[contains(., '步数')][1]")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        br = p.chromium.launch()
        pg = br.new_page(viewport={'width': 1100, 'height': 900}, device_scale_factor=2)
        # 第 8 轮：初始画面；翻错一次后步数仍为 0
        pg.goto(serve(RUNS / 'v2-run8/repo/dist'))
        cls = pg.evaluate(FIND); sec = game(pg, cls)
        sec.scroll_into_view_if_needed(); sec.screenshot(path=OUT / 'run8-start.png')
        cards = pg.locator(f'button.{cls}')
        cards.nth(0).click(); cards.nth(1).click(); pg.wait_for_timeout(300)
        sec.screenshot(path=OUT / 'run8-mismatch.png')
        faces = []
        pg.wait_for_timeout(1200)
        for i in range(0, 12, 2):
            cards.nth(i).click(); faces.append(cards.nth(i).get_attribute('aria-label'))
            cards.nth(i + 1).click(); faces.append(cards.nth(i + 1).get_attribute('aria-label'))
            pg.wait_for_timeout(1200)
        print('第 8 轮 12 张牌面：', faces)
        # 第 4 轮：第一次翻牌时计时显示 -1:-1（不到 1 秒）
        pg.goto(serve(RUNS / 'v2-run4/repo/dist'))
        pg.wait_for_timeout(1500)
        cls = pg.evaluate(FIND); pg.locator(f'button.{cls}').nth(0).click()
        game(pg, cls).screenshot(path=OUT / 'run4-negative-timer.png')
        br.close()
    print('写到', OUT)


if __name__ == '__main__':
    main()

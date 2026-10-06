#!/usr/bin/env python3
"""3.7 预备版本的核对：翻错 → 立刻重开 → 新一局翻一张 → 等旧计时器到点 → 再翻一张，记录每一刻的画面状态。

用法：uv run courseware/ch03/materials/prepared/stale-timer-check.py <首页目录>   # 需要先 npm run build
每次重新打开页面，只看牌面（aria-label）和提示文字，不判定对错。
"""
import functools, http.server, json, sys, threading
from pathlib import Path
from playwright.sync_api import sync_playwright


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def main():
    dist = Path(sys.argv[1]).resolve() / 'dist'
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=str(dist)))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    out = []
    with sync_playwright() as p:
        pg = p.chromium.launch().new_page()
        for attempt in range(6):
            pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/')
            cards = pg.locator('.memory-board button')
            snap = lambda: {'up': [i for i in range(cards.count()) if '未翻开' not in (cards.nth(i).get_attribute('aria-label') or '') and '卡片内容' in (cards.nth(i).get_attribute('aria-label') or '')],
                            'status': pg.locator('[role=status]').first.inner_text()}
            cards.nth(0).click(); cards.nth(1).click()
            if '不是一对' not in snap()['status']:
                continue
            pg.get_by_role('button', name='重新开始').click()
            log = {'重开后': snap()}
            cards.nth(0).click(); log['新一局翻开第 1 张'] = snap()
            pg.wait_for_timeout(1200); log['1.2 秒后（旧计时器已到点）'] = snap()
            cards.nth(1).click(); log['翻开第 2 张'] = snap()
            pg.wait_for_timeout(1500); log['再等 1.5 秒'] = snap()
            out.append(log)
            break
    print(json.dumps(out, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()

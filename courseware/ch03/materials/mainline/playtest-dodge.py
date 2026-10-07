#!/usr/bin/env python3
"""3.5 讲师批量重跑用的试玩代检：按 Brief 走一遍移动、收集、碰撞、HUD、结束、重开，记录 HUD 文字并截图。

用法：uv run courseware/ch03/materials/mainline/playtest-dodge.py <首页目录> [截图目录]   # 需要先 npm run build
课上的试玩由人完成。脚本先朝最近的圆点走 10 秒，再按方向键乱走到结束，不判断手感。
"""
import functools, http.server, json, sys, threading, time
from pathlib import Path
from playwright.sync_api import sync_playwright


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def main():
    repo = Path(sys.argv[1]).resolve()
    shots = Path(sys.argv[2]) if len(sys.argv) > 2 else None
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=str(repo / 'dist')))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    log = []
    with sync_playwright() as p:
        br = p.chromium.launch()
        pg = br.new_page(viewport={'width': 1280, 'height': 900}, device_scale_factor=2)
        errors = []
        pg.on('pageerror', lambda e: errors.append(str(e)))
        pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/')
        game = pg.locator('.dodge-game')
        hud = lambda: game.locator('.dodge-game__stats').inner_text().replace('\n', ' ')
        game.scroll_into_view_if_needed()
        log.append(('开始前', hud()))
        game.get_by_role('button', name='开始游戏').click()
        t0 = time.time()
        # 先朝最近的圆点走 10 秒，看收集能不能加分
        seek = '''() => { const c = e => { const r = e.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; };
          const p = c(document.querySelector('.dodge-game__player'));
          const t = [...document.querySelectorAll('.dodge-game__collectible')].map(c).sort((a, b) => Math.hypot(a[0]-p[0], a[1]-p[1]) - Math.hypot(b[0]-p[0], b[1]-p[1]))[0];
          return t ? [t[0] - p[0], t[1] - p[1]] : [0, 0]; }'''
        while time.time() - t0 < 10:
            dx, dy = pg.evaluate(seek)
            k = ('ArrowRight' if dx > 0 else 'ArrowLeft') if abs(dx) > abs(dy) else ('ArrowDown' if dy > 0 else 'ArrowUp')
            pg.keyboard.down(k); pg.wait_for_timeout(120); pg.keyboard.up(k)
        log.append(('朝圆点走 10 秒后', hud()))
        keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'd', 's', 'a', 'w']
        i = 0
        shot_mid = False
        while time.time() - t0 < 75:
            k = keys[i % len(keys)]; i += 1
            pg.keyboard.down(k); pg.wait_for_timeout(700); pg.keyboard.up(k)
            if not shot_mid and time.time() - t0 > 11:
                log.append(('约 11 秒', hud()))
                if shots:
                    game.screenshot(path=shots / 'dodge-playing.png')
                shot_mid = True
            if game.locator('.dodge-game__panel-title').count() and game.locator('.dodge-game__panel-title').is_visible():
                break
        log.append((f'结束（{time.time() - t0:.0f} 秒）', hud() + ' | ' + game.locator('.dodge-game__panel').inner_text().replace('\n', ' ')))
        if shots:
            game.screenshot(path=shots / 'dodge-over.png')
        game.locator('.dodge-game__panel-button').click(); pg.wait_for_timeout(500)
        log.append(('重开后', hud()))
        # 记忆翻牌还在
        log.append(('记忆翻牌', f"{pg.locator('.memory-board button').count()} 张牌"))
        log.append(('页面错误', errors))
        br.close()
    print(json.dumps(log, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()

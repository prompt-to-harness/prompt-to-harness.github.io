#!/usr/bin/env python3
"""对记忆翻牌构建产物做 3.2 的两条固定探查，输出 JSON（讲师批量重跑用；课上由人操作）。

用法：uv run courseware/ch03/materials/mainline/probe.py <首页仓库目录>   # 需要先 npm run build
探查一：翻两张不匹配的牌，立刻点第三张，记录第三张是否翻开、之后几张朝上。
探查二：翻两张不匹配的牌，立刻点“重开”，再点一张牌，等 1.5 秒看它是否被旧计时器翻回。
卡片按“同一 class 的按钮里数量最多的一组”识别、按位置定位（React 重新生成元素后仍能找到），牌面按按钮及其父元素的标记变化判断；识别不了时如实报告。
"""
import functools, http.server, json, sys, threading
from pathlib import Path
from playwright.sync_api import sync_playwright

FIND = """() => {
  const groups = {};
  for (const b of document.querySelectorAll('button')) {
    const k = (b.className || '').split(' ')[0];
    (groups[k] ||= []).push(b);
  }
  const best = Object.entries(groups).sort((a, b) => b[1].length - a[1].length)[0];
  best[1].forEach((b, i) => b.setAttribute('data-probe-card', i));
  const restart = [...document.querySelectorAll('button')].find(b => /重新|重开|再玩|再来|restart/i.test(b.textContent));
  if (restart) restart.setAttribute('data-probe-restart', '1');
  return {cardClass: best[0], count: best[1].length, restart: restart ? restart.textContent.trim() : null};
}"""
STATE = """(cls) => [...document.querySelectorAll('button.' + cls)].map(b => b.parentElement.className + '|' + b.outerHTML)"""


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def main():
    repo = Path(sys.argv[1]).resolve()
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=str(repo / 'dist')))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    url = f'http://127.0.0.1:{srv.server_address[1]}/'
    out = {'repo': str(repo)}
    with sync_playwright() as p:
        br = p.chromium.launch()
        pg = br.new_page(viewport={'width': 1440, 'height': 900})
        errors = []
        pg.on('pageerror', lambda e: errors.append(str(e)))
        pg.goto(url)
        info = pg.evaluate(FIND)
        out['found'] = info
        cls = info['cardClass']
        card = lambda i: pg.locator(f'button.{cls}').nth(i)
        base = pg.evaluate(STATE, cls)

        def faceup(state):
            return [i for i, (a, b) in enumerate(zip(base, state)) if a != b]

        def mismatch_pair():
            # 翻 0 号，再找一张翻开后两张都朝上、且 800ms 后都翻回的牌
            for j in range(1, info['count']):
                card(0).click(); card(j).click()
                up = faceup(pg.evaluate(STATE, cls))
                pg.wait_for_timeout(1500)
                back = faceup(pg.evaluate(STATE, cls))
                if len(up) == 2 and not back:
                    return j
                if back:  # 配对成功，重开再试
                    pg.locator('[data-probe-restart]').click(); pg.wait_for_timeout(300)
                    pg.evaluate(FIND)
            return None

        j = mismatch_pair()
        if j is None:
            out['error'] = '找不到一对不匹配的牌'
        else:
            k = next(x for x in range(1, info['count']) if x != j)
            card(0).click(); card(j).click(); card(k).click(force=True)
            s1 = faceup(pg.evaluate(STATE, cls))
            pg.wait_for_timeout(1500)
            s2 = faceup(pg.evaluate(STATE, cls))
            out['third_click'] = {'faceup_right_after': s1, 'faceup_after_1500ms': s2,
                                  'third_opened': k in s1}
            if info['restart']:
                card(0).click(); card(j).click()
                pg.locator('[data-probe-restart]').click()
                pg.evaluate(FIND)
                base = pg.evaluate(STATE, cls)
                card(0).click(force=True)
                r1 = faceup(pg.evaluate(STATE, cls))
                pg.wait_for_timeout(1500)
                r2 = faceup(pg.evaluate(STATE, cls))
                out['restart_during_wait'] = {'faceup_right_after': r1, 'faceup_after_1500ms': r2,
                                              'stale_timer_flipped_back': bool(r1) and not r2}
                # 探查三：不匹配 → 立刻重开 → 点一张 → 等旧计时器到点 → 再点一张 → 看两张是否正常比较、翻回
                card(0).click(); card(j).click()
                pg.locator('[data-probe-restart]').click()
                pg.evaluate(FIND)
                base = pg.evaluate(STATE)
                card(0).click(force=True); pg.wait_for_timeout(1200)
                card(1).click(force=True); pg.wait_for_timeout(1600)
                out['restart_then_two_clicks'] = {'faceup_after': faceup(pg.evaluate(STATE)),
                                                  'note': '正常：两张比较后或配对、或都翻回；旧计时器清空了“已翻开”时，第一张会一直朝上'}
        out['page_errors'] = errors
        br.close()
    print(json.dumps(out, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()

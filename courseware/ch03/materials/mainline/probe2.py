#!/usr/bin/env python3
"""3.2 扩展探查：在记忆翻牌构建产物上跑一组“纸面上难推演”的玩法，记录每一步之后游戏区的文字，供人判断。

用法：uv run courseware/ch03/materials/mainline/probe2.py <首页仓库目录>   # 需要先 npm run build
不自动判定缺陷：输出每个场景前后的游戏区文字（步数、时间、提示、最佳成绩）和朝上的牌，由人对照期望。
牌面按 aria-label 识别；先逐对翻开记下每张牌的图案，再按需要配对或制造不匹配。
"""
import functools, http.server, json, sys, threading
from pathlib import Path
from playwright.sync_api import sync_playwright

FIND = """() => {
  const groups = {};
  for (const b of document.querySelectorAll('button')) (groups[(b.className || '').split(' ')[0]] ||= []).push(b);
  const best = Object.entries(groups).sort((a, b) => b[1].length - a[1].length)[0];
  const sec = best[1][0].closest('section') || document.body;
  return {cls: best[0], count: best[1].length};
}"""
SNAP = """(cls) => {
  const cards = [...document.querySelectorAll('button.' + cls)];
  const sec = cards[0].closest('section') || document.body;
  const clone = sec.cloneNode(true);
  clone.querySelectorAll('button.' + cls).forEach(b => b.remove());
  return {text: clone.innerText.replace(/\\s+/g, ' ').trim(),
          cards: cards.map(b => (b.getAttribute('aria-label') || '') + '|' + b.disabled + '|' + b.className + '|' + (b.parentElement.className || '')),
          overflow: document.documentElement.scrollWidth > window.innerWidth};
}"""


import re as _re


def restart(pg):
    pg.get_by_role('button', name=_re.compile('重新开始|重开|再玩|再来|restart', _re.I)).first.click()


def tap(card, i):  # 已配对的牌通常被禁用，跳过
    if not card(i).is_disabled():
        card(i).click()


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def run(pg, url, out, label, scenario):
    pg.goto(url)
    pg.evaluate("() => localStorage.clear()")
    pg.goto(url)
    info = pg.evaluate(FIND)
    cls = info['cls']
    card = lambda i: pg.locator(f'button.{cls}').nth(i)
    snap = lambda: pg.evaluate(SNAP, cls)
    base = snap()['cards']
    up = lambda: [i for i, (a, b) in enumerate(zip(base, snap()['cards'])) if a != b]

    def learn():  # 逐对翻开（相邻两张碰巧相同就直接配上了），记下每张牌朝上时的 aria-label
        faces = {}
        n = info['count']
        for i in range(0, n - 1, 2):
            tap(card, i); faces[i] = card(i).get_attribute('aria-label')
            tap(card, i + 1); faces[i + 1] = card(i + 1).get_attribute('aria-label')
            pg.wait_for_timeout(1500)
        return faces  # 不重开：重开会重新洗牌，记下的位置就失效了

    log = []
    def note(step):
        s = snap(); log.append({'step': step, 'text': s['text'], 'faceup': up(), 'overflow': s['overflow']})

    scenario(pg, card, learn, note, info)
    out[label] = log


def pairs_of(faces):
    import re
    norm = {i: re.sub(r'第\s*\d+\s*张|已配对|已匹配|配对成功|正面|[，,：:。（）()\s]', '', f or '') for i, f in faces.items()}
    groups = {}
    for i, f in norm.items():
        groups.setdefault(f, []).append(i)
    return [g for g in groups.values() if len(g) == 2], norm


def s_double_click(pg, card, learn, note, info):
    note('开始')
    card(0).dblclick(); pg.wait_for_timeout(200); note('同一张牌快速双击')
    pg.wait_for_timeout(1500); note('1.5 秒后')


def s_click_matched_and_win(pg, card, learn, note, info):
    faces = learn(); pairs, _ = pairs_of(faces)
    note(f'逐对翻开记下牌面（识别出 {len(pairs)} 对）')
    if not pairs:
        return
    a, b = pairs[0]; tap(card, a); tap(card, b); pg.wait_for_timeout(300); note('配对第一对')
    card(a).click(force=True); pg.wait_for_timeout(300); note('再点已配对的牌')
    for a, b in pairs[1:]:
        tap(card, a); tap(card, b); pg.wait_for_timeout(250)
    note('全部配对（通关）')
    pg.wait_for_timeout(3000); note('通关 3 秒后（计时是否停住）')
    restart(pg); pg.wait_for_timeout(300); note('通关后重开')
    pg.wait_for_timeout(2500); note('重开后不点牌等 2.5 秒（计时是否已在走）')


def s_restart_midgame(pg, card, learn, note, info):
    card(0).click(); pg.wait_for_timeout(2500); note('翻一张后等 2.5 秒')
    restart(pg); pg.wait_for_timeout(300); note('局中重开')
    pg.wait_for_timeout(2500); note('重开后不点牌等 2.5 秒')


def s_keyboard(pg, card, learn, note, info):
    card(0).focus(); pg.keyboard.press('Space'); pg.keyboard.press('Space'); pg.wait_for_timeout(200); note('键盘：同一张牌连按两次空格')
    pg.keyboard.press('Tab'); pg.keyboard.press('Enter'); pg.wait_for_timeout(200); note('Tab 到下一张按回车')
    pg.wait_for_timeout(1500); note('1.5 秒后')


def s_best_score(pg, card, learn, note, info):
    faces = learn(); pairs, _ = pairs_of(faces)
    if not pairs:
        note('识别不出牌对'); return
    for a, b in pairs:
        tap(card, a); tap(card, b); pg.wait_for_timeout(250)
    note('第一局：最少步数通关')
    restart(pg); pg.wait_for_timeout(300)
    faces = learn(); pairs, _ = pairs_of(faces)
    if pairs:
        x = pairs[0][0]; y = pairs[1][0]
        tap(card, x); tap(card, y); pg.wait_for_timeout(1500)  # 故意多走一步
        for a, b in pairs:
            tap(card, a); tap(card, b); pg.wait_for_timeout(250)
    note('第二局：多走几步通关（最佳成绩是否被覆盖）')


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
        for label, sc in [('双击同一张', s_double_click), ('点已配对与通关', s_click_matched_and_win),
                          ('局中重开', s_restart_midgame), ('键盘', s_keyboard), ('最佳成绩', s_best_score)]:
            try:
                run(pg, url, out, label, sc)
            except Exception as e:
                out[label] = {'error': str(e)[:300]}
        mob = br.new_page(viewport={'width': 360, 'height': 800}, has_touch=True, is_mobile=True)
        mob.goto(url)
        info = mob.evaluate(FIND)
        c = mob.locator(f"button.{info['cls']}")
        c.nth(0).tap(); c.nth(0).tap(); mob.wait_for_timeout(200)
        out['手机'] = {'overflow': mob.evaluate(SNAP, info['cls'])['overflow'],
                       'after_double_tap': mob.evaluate(SNAP, info['cls'])['text']}
        out['page_errors'] = errors
        br.close()
    print(json.dumps(out, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()

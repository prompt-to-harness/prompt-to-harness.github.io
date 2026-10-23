#!/usr/bin/env python3
"""给外部素材（X 帖子、官方文章段落、文章里的图）截一张可复现的图。

截图存进 courseware/<章>/materials/external/<主题>/，登记表见章级 external/README.md，用法见
docs/production/external-sources.md。不登录、不点同意横幅，只截公开可见的部分。X 帖子自动改走官方嵌入页
（platform.twitter.com/embed），不登录也能渲染。遇到要人工验证的站点（如 openai.com
的 Cloudflare 验证），加 --headed 开一个可见窗口，由人点过验证，脚本等目标出现再截；
脚本自己不绕过任何验证。

    uv run courseware/tools/capture-source.py URL OUT.png                     # 自动：X 帖子截帖子，其他截首屏
    uv run courseware/tools/capture-source.py URL OUT.png --selector 'figure:nth-of-type(2)'
    uv run courseware/tools/capture-source.py URL OUT.png --text '智能体循环'  # 截包含这段文字的最近块元素
    uv run courseware/tools/capture-source.py URL OUT.png --full-page --hide '.cookie-banner'
    uv run courseware/tools/capture-source.py URL OUT.png --text '构建初始提示' --headed

截完打印尺寸和截取时间，把这一行抄进登记表。
"""
import argparse
import sys
from datetime import date
from pathlib import Path
from playwright.sync_api import sync_playwright

import re

# 各站点默认要截的元素、视口宽度和要藏的遮挡物
SITES = {
    'platform.twitter.com': {'selector': 'article', 'width': 560},
}
PROFILE = Path.home() / '.cache' / 'capture-source-profile'  # --headed 用，过一次验证后保留


def embed(url):
    """x.com / twitter.com 的帖子地址改成官方嵌入页。"""
    m = re.match(r'https?://(?:www\.)?(?:x|twitter)\.com/[^/]+/status/(\d+)', url)
    return f'https://platform.twitter.com/embed/Tweet.html?id={m[1]}&lang=zh-cn&dnt=true' if m else url

# 找到文字后向上取第一个块级元素，避免只截到一行
NEAREST_BLOCK_JS = """
([text, mark]) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!n.textContent.includes(text)) continue;
    let e = n.parentElement;
    while (e && !['P', 'LI', 'FIGURE', 'SECTION', 'BLOCKQUOTE', 'PRE', 'TABLE', 'DIV'].includes(e.tagName)) e = e.parentElement;
    if (!e) return false;
    e.setAttribute(mark, '');
    return true;
  }
  return false;
}
"""

# 从起点块到终点块：取两者之间（按文档顺序）所有可见元素的并集，代码块不会被裁
RANGE_JS = """
() => {
  const a = document.querySelector('[data-capture-target]'), b = document.querySelector('[data-capture-until]');
  const box = { top: 1e9, bottom: -1e9, left: 1e9, right: -1e9 };
  const add = e => {
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) return;
    box.top = Math.min(box.top, r.top + scrollY); box.bottom = Math.max(box.bottom, r.bottom + scrollY);
    box.left = Math.min(box.left, r.left + scrollX); box.right = Math.max(box.right, r.right + scrollX);
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  walker.currentNode = a;
  for (let e = a; e; e = walker.nextNode()) {
    add(e);
    if (e === b || (b.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING && !b.contains(e))) break;
  }
  return box;
}
"""

# 固定或粘性定位的浮层（Cookie 横幅、顶栏、登录条）会压在截图上，截图前统一藏掉
HIDE_FIXED_JS = """
() => { for (const e of document.querySelectorAll('body *')) {
  const p = getComputedStyle(e).position;
  if (p === 'fixed' || p === 'sticky') e.style.setProperty('display', 'none', 'important');
} }
"""


def site(url):
    return SITES.get(url.split('/')[2].removeprefix('www.'), {})


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('url')
    ap.add_argument('out', type=Path)
    pick = ap.add_mutually_exclusive_group()
    pick.add_argument('--selector', help='截这个 CSS 选择器匹配的第一个元素')
    pick.add_argument('--text', help='截包含这段文字的最近块元素')
    pick.add_argument('--full-page', action='store_true', help='截整页')
    ap.add_argument('--until', help='和 --text 连用：一直截到包含这段文字的块元素（含）')
    ap.add_argument('--pad', type=int, default=16, help='--until 截区域时四周留白，默认 16')
    ap.add_argument('--keep-fixed', action='store_true', help='不隐藏固定定位的浮层（默认隐藏）')
    ap.add_argument('--hide', action='append', default=[], help='截图前隐藏的元素，可重复')
    ap.add_argument('--width', type=int, help='视口宽度，默认 1100（X 帖子 560）')
    ap.add_argument('--scale', type=float, default=2, help='设备像素比，默认 2，上屏够清楚')
    ap.add_argument('--dark', action='store_true', help='用深色模式打开')
    ap.add_argument('--lang', default='zh-CN', help='浏览器语言，默认 zh-CN')
    ap.add_argument('--wait', type=float, default=2.5, help='加载后再等几秒，等图片和字体，默认 2.5')
    ap.add_argument('--headed', action='store_true', help='开可见窗口，人工过验证；最多等 3 分钟目标出现')
    args = ap.parse_args()

    url = embed(args.url)
    preset = site(url)
    width = args.width or preset.get('width', 1100)
    selector = args.selector or (None if args.text or args.full_page else preset.get('selector'))
    hide = preset.get('hide', []) + args.hide
    args.out.parent.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        options = dict(
            viewport={'width': width, 'height': 900},
            device_scale_factor=args.scale,
            color_scheme='dark' if args.dark else 'light',
            locale=args.lang,
        )
        if args.headed:
            browser = p.chromium.launch_persistent_context(PROFILE, headless=False, **options)
            page = browser.pages[0] if browser.pages else browser.new_page()
        else:
            browser = p.chromium.launch()
            page = browser.new_page(**options)
        page.goto(url, wait_until='domcontentloaded', timeout=45000)
        if args.headed:
            print('窗口已打开；如有人工验证请手动完成，脚本等目标出现后自动截图', file=sys.stderr)
        # 页面常是脚本渲染的（X 嵌入页有时要好几秒），先等目标出现
        probe = f'text={args.text}' if args.text else (selector or 'body *:visible >> nth=20')
        try:
            page.wait_for_selector(probe, timeout=180000 if args.headed else 30000)
        except Exception:
            sys.exit(f'等不到目标：{probe}（页面可能要求登录或人工验证，可加 --headed）')
        page.wait_for_timeout(args.wait * 1000)
        if not args.keep_fixed:
            page.evaluate(HIDE_FIXED_JS)
        if hide:
            page.add_style_tag(content=', '.join(hide) + ' { display: none !important; }')

        if args.text:
            for text, mark in ((args.text, 'data-capture-target'), (args.until, 'data-capture-until')):
                if text and not page.evaluate(NEAREST_BLOCK_JS, [text, mark]):
                    sys.exit(f'页面上找不到文字：{text}')
            selector = '[data-capture-target]'
        if args.until:
            boxes = [page.locator(f'[{m}]').first for m in ('data-capture-target', 'data-capture-until')]
            boxes[0].scroll_into_view_if_needed()
            page.wait_for_timeout(500)
            box = page.evaluate(RANGE_JS)
            x0, y0 = max(box['left'] - args.pad, 0), max(box['top'] - args.pad, 0)
            clip = {'x': x0, 'y': y0, 'width': box['right'] + args.pad - x0, 'height': box['bottom'] + args.pad - y0}
            if clip['height'] <= 0:
                sys.exit('--until 的文字在 --text 之前')
            page.screenshot(path=args.out, full_page=True, clip=clip)
        elif selector:
            target = page.locator(selector).first
            try:
                target.wait_for(state='visible', timeout=15000)
            except Exception:
                sys.exit(f'找不到可见元素：{selector}（页面可能要求登录，或选择器变了）')
            target.scroll_into_view_if_needed()
            page.wait_for_timeout(500)
            target.screenshot(path=args.out)
        else:
            page.screenshot(path=args.out, full_page=args.full_page)
        browser.close()

    from struct import unpack
    w, h = unpack('>II', args.out.read_bytes()[16:24])
    print(f'{args.out}  {w}×{h}  截取于 {date.today().isoformat()}  来源 {args.url}')


if __name__ == '__main__':
    main()

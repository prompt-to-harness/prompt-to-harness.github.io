#!/usr/bin/env python3
"""对首页构建产物做 2.1 / 2.2 的人工检查项，输出 JSON：三种视口是否横向溢出、项目区文字、Tab 停留顺序。

用法：uv run courseware/ch02/materials/mainline/verify.py <首页仓库目录> [期望项目文字文件]
需要先在该目录 npm run build 生成 dist/。期望文件每行一条“名称：描述”，给出时逐字核对项目区。
环境变量 VERIFY_TEXTS 用 | 分隔要在页面上找到的整句（例如首屏文字）。另输出 h1、链接与内容宽度。
这是讲师批量重跑用的辅助检查；课上的检查由人完成（2.2 p31）。
"""
import functools
import http.server
import json
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

VIEWPORTS = [(360, 800), (768, 1024), (1440, 900)]
WANTED_TEXTS = [l.strip() for l in __import__("os").environ.get("VERIFY_TEXTS", "").split("|") if l.strip()]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def serve(root):
    handler = functools.partial(QuietHandler, directory=str(root))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


def main():
    repo = Path(sys.argv[1]).resolve()
    expected = []
    if len(sys.argv) > 2:
        expected = [l.strip() for l in Path(sys.argv[2]).read_text().splitlines() if l.strip()]
    server = serve(repo / "dist")
    url = f"http://127.0.0.1:{server.server_address[1]}/"
    result = {"viewports": {}, "console_errors": []}
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for w, h in VIEWPORTS:
            page = browser.new_page(viewport={"width": w, "height": h})
            page.on("console", lambda m: m.type == "error" and result["console_errors"].append(m.text))
            page.goto(url)
            page.wait_for_load_state("networkidle")
            m = page.evaluate("""() => ({
                scrollWidth: document.documentElement.scrollWidth,
                clientWidth: document.documentElement.clientWidth,
                pageHeight: document.documentElement.scrollHeight,
                cards: [...document.querySelectorAll('#projects li').length ? document.querySelectorAll('#projects li') : document.querySelectorAll('#projects article')]
                    .map(e => e.innerText.replace(/\\s+/g, ' ').trim()),
                projectsText: (document.querySelector('#projects') || document.body).innerText,
                h1: (document.querySelector('h1') || {}).innerText || null,
                links: [...document.querySelectorAll('a')].map(a => ({text: a.innerText.trim(), href: a.getAttribute('href')})),
                contentWidth: Math.max(0, ...['h1', '#projects'].map(q => document.querySelector(q))
                    .filter(Boolean).map(e => Math.round(e.getBoundingClientRect().width))),
                bodyText: document.body.innerText,
            })""")
            m["horizontal_overflow"] = m["scrollWidth"] > m["clientWidth"]
            if w == 1440:
                stops = []
                for _ in range(8):
                    page.keyboard.press("Tab")
                    t = page.evaluate("() => { const a = document.activeElement; return a && a !== document.body ? (a.tagName + ':' + a.innerText.trim()).slice(0, 60) : null }")
                    if t is None or t in stops:
                        break
                    stops.append(t)
                result["tab_stops"] = stops
            if expected:
                flat = " ".join(m["projectsText"].split())
                m["expected_missing"] = [e for e in expected if " ".join(e.replace("：", " ").split()) not in flat.replace("：", " ")
                                          and not all(part.strip() in flat for part in e.split("：", 1))]
            del m["projectsText"]
            body = " ".join(m.pop("bodyText").split())
            m["texts_found"] = {t: t in body for t in WANTED_TEXTS}
            result["viewports"][f"{w}x{h}"] = m
            page.close()
        browser.close()
    server.shutdown()
    print(json.dumps(result, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()

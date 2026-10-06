"""给 2.5 的五张卡拍证据图，并核对行为（每张卡单独应用在同一份 homepage-v1 上）。

用法（仓库根目录）：
    uv run python courseware/ch02/materials/refactor-cards/shoot.py [homepage-v1 目录]

默认基线是 starters/personal-homepage/ch02-candidate（v1 冻结候选）；录制版换成讲师冻结的 homepage-v1。
工作目录在 lab-runs/refactor-cards/（不提交），每张卡复制基线、git apply、npm ci、npm run build，
再用静态服务器打开构建产物，Playwright Chromium 在 1440×900、DPR 2 下截图，写到
courseware/ch02/lessons/05-refactor/evidence/，并打印核对结果（#root 是否与基线逐字相同、卡高、Tab 落点）。
"""
import shutil
import subprocess
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[4]
CARDS = Path(__file__).resolve().parent
BASE = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else ROOT / "starters/personal-homepage/ch02-candidate"
WORK = ROOT / "lab-runs/refactor-cards"
OUT = ROOT / "courseware/ch02/lessons/05-refactor/evidence"
NAMES = ["01-extract-component", "02-move-data", "03-sort-by-name", "04-short-class-name", "05-tabindex"]


def build(name, diff=None):
    d = WORK / name
    shutil.rmtree(d, ignore_errors=True)
    shutil.copytree(BASE, d, ignore=shutil.ignore_patterns("node_modules", "dist"))
    if diff:
        # 工作目录在课程仓库里面，git apply 会按仓库根解析路径，所以用 patch
        subprocess.run(["patch", "-p1", "-s", "-i", str(diff)], cwd=d, check=True)
    subprocess.run(["npm", "ci", "--silent"], cwd=d, check=True, stdout=subprocess.DEVNULL)
    subprocess.run(["npm", "run", "build", "--silent"], cwd=d, check=True, stdout=subprocess.DEVNULL)
    return d / "dist"


def main():
    WORK.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    dists = {"v1": build("v1")}
    for n in NAMES:
        dists[n] = build(n, CARDS / f"{n}.diff")
    procs, ports = [], {}
    for i, (n, dist) in enumerate(dists.items()):
        ports[n] = 8890 + i
        procs.append(subprocess.Popen([sys.executable, "-m", "http.server", str(ports[n]), "--bind", "127.0.0.1", "--directory", str(dist)],
                                      stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL))
    time.sleep(1)
    try:
        with sync_playwright() as pw:
            browser = pw.chromium.launch()
            page = browser.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=2)

            def open_(n):
                page.goto(f"http://127.0.0.1:{ports[n]}/")
                page.wait_for_selector(".project-card")

            def card(i):
                return page.locator(".project-card").nth(i).bounding_box()

            def tab_stops():
                stops = []
                for _ in range(4):
                    page.keyboard.press("Tab")
                    stops.append(page.evaluate("document.activeElement === document.body ? 'body' : (document.activeElement.className || document.activeElement.tagName)"))
                return stops

            roots = {}
            for n in dists:
                open_(n)
                roots[n] = page.inner_html("#root")
                names = [page.locator(".project-card__name").nth(i).inner_text() for i in range(3)]
                height = round(card(0)["height"])
                print(f"{n:22} #root 与基线相同={roots[n] == roots['v1']}  卡高={height}px  顺序={'、'.join(names)}  Tab={tab_stops()}")

            # ③ 项目列表：改前、改后，只截标题所在的左侧
            for n, f in (("v1", "card3-before.png"), ("03-sort-by-name", "card3-after.png")):
                open_(n)
                first, last = card(0), card(2)
                page.screenshot(path=str(OUT / f), clip={"x": first["x"] - 8, "y": first["y"] - 8, "width": 300,
                                                         "height": last["y"] + last["height"] - first["y"] + 16})
            # ④ 第一张卡：改前、改后，按同一区域截，高度差直接可见
            for n, f in (("v1", "card4-before.png"), ("04-short-class-name", "card4-after.png")):
                open_(n)
                c = card(0)
                page.screenshot(path=str(OUT / f), clip={"x": c["x"] - 7, "y": c["y"] - 5, "width": 442, "height": 157})
            # ⑤ 从页面顶部连续按 Tab，第 2、3 次时截第 1、2 张卡
            open_("05-tabindex")
            for k in (1, 2, 3):
                page.keyboard.press("Tab")
                if k > 1:
                    c = card(k - 2)
                    page.screenshot(path=str(OUT / f"card5-tab{k}.png"), clip={"x": c["x"] - 10, "y": c["y"] - 10, "width": 660, "height": c["height"] + 20})
            browser.close()
    finally:
        for p in procs:
            p.terminate()
    print("截图写到", OUT.relative_to(ROOT))


if __name__ == "__main__":
    main()

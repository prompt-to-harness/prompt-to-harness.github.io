#!/usr/bin/env python3
"""Build isolated comparison pages from the current canonical lesson scenes."""
import json
import os
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
SOURCES = {
    "prompt": (ROOT / "courseware/ch01/lessons/04-prompt", "p20"),
    "comic": (ROOT / "courseware/ch02/lessons/01-feedback", "p03"),
    "ch01-open": (ROOT / "courseware/ch01/lessons/01-environment", "p01"),
    "ch01-close": (ROOT / "courseware/ch01/lessons/06-permissions", "p36-recap"),
    "ch02-open": (ROOT / "courseware/ch02/lessons/01-feedback", "p01"),
    "ch02-close": (ROOT / "courseware/ch02/lessons/05-refactor", "p58"),
}

PROMPT_HTML = '''<ol class="p-map"><li class="is-done"><b>1.1</b>首次闭环</li><li class="is-done"><b>1.2</b>拆开执行过程</li><li class="is-done"><b>1.3</b>工具与权限</li><li class="is-now"><b>1.4</b>写清任务</li><li><b>1.5</b>完成首页</li><li><b>1.6</b>最小权限</li></ol>
<div class="pilot-prompt-layout">
 <div class="pilot-request" data-reveal="0"><span class="p-tag" data-role="us">同一句请求</span><p class="p-bubble">帮我做一个好看的个人主页</p><p class="pilot-note">两种都好看<br>你想要哪一种？</p></div>
 <div class="pilot-concepts" data-reveal="0">
  <figure class="pilot-concept"><img src="assets/portfolio.jpg" alt="设计示意：留白充足、色彩克制的个人作品集"><figcaption>克制的作品集 · 设计示意</figcaption></figure>
  <figure class="pilot-concept"><img src="assets/game-gallery.jpg" alt="设计示意：色彩活泼、插画丰富的小游戏展厅"><figcaption>活泼的游戏展厅 · 设计示意</figcaption></figure>
 </div>
</div>
<div class="pilot-questions">
 <div class="pilot-question" data-reveal="1"><b>1 目标</b><span>给谁看？显示什么？</span></div>
 <div class="pilot-question" data-reveal="2"><b>2 范围</b><span>改哪里？什么时候停？</span></div>
 <div class="pilot-question" data-reveal="3"><b>3 标准</b><span>怎样算可以接受？</span></div>
</div>'''

COMIC_HTML = '''<div class="pilot-comic">
 <div class="pilot-comic-panel" data-reveal="0"><div class="pilot-comic-art first" role="img" aria-label="情景插画：作者把笔记本电脑上的主页展示给熟人"></div><span class="pilot-comic-cap">在我电脑上</span><p class="pilot-comic-dialogue">帮我看看我的个人主页？</p></div>
 <div class="pilot-comic-panel" data-reveal="1"><div class="pilot-comic-art second" role="img" aria-label="情景插画：熟人指着页面给反馈，作者倾听"></div><span class="pilot-comic-cap">示例反馈</span><p class="pilot-comic-dialogue">有点挤 · 卡片点了没反应 · 看不出你做过什么</p></div>
 <div class="pilot-comic-panel" data-reveal="2"><div class="pilot-comic-art third" role="img" aria-label="情景插画：作者回到电脑前，准备提出修改请求"></div><span class="pilot-comic-cap">我的第一反应</span><p class="pilot-comic-dialogue">都交给 AI 改掉吧？</p></div>
</div>'''

BOUNDARIES = {
    "ch01-open": (
        [("先看目标", "欢迎语现在是什么，要改成什么"),
         ("只改这一句", "先确认任务，再允许修改"),
         ("怎样证明改对", "浏览器里的文字与 Git diff")],
        "从一个小任务开始，逐步走到首页 v0", "当前问题", "查看任务卡、页面与改动记录"),
    "ch01-close": (
        [("先确认 · 小步做", "任务写清楚，才让 Agent 动手"),
         ("看页面和 Diff", "结果与范围分别检查，不符就复验"),
         ("只给必要能力", "意图与实际限制分开看，受阻时明确停")],
        "下一章：带着本地 v0，按真实反馈迭代", "回收判断", "回到同一张任务卡、页面与改动记录"),
    "ch02-open": (
        [("现在", "首页 v0 · 只在本机"),
         ("本章目标", "首页 v1 · 公开 URL"),
         ("先别急着改", "别人的建议，哪些是真问题？")],
        "从反馈出发，走到能公开访问的首页", "当前问题", "查看反馈卡、手机页面与改动记录"),
    "ch02-close": (
        [("手工重查有成本", "文字、样式、点击、Tab 与视口都要核对"),
         ("一轮留一份证据", "反馈、小改、审查、发布与重构"),
         ("保留可回退的版本", "提交 · 公开 URL 与 tag")],
        "下一章：给首页加一个小游戏", "回收判断", "回到同一张反馈卡、手机页面与改动记录"),
}


def boundary_html(key, scene):
    rows, next_line, phase, image_alt = BOUNDARIES[key]
    chapter = key[:4]
    opening = key.endswith("open")
    # Retain the existing section map; the image replaces only the scene's body.
    found = re.search(r'<ol class="p-map".*?</ol>', scene["html"], re.S)
    map_html = found.group(0) if opening and found else ""
    cards = "".join(
        f'<div class="boundary-point" data-reveal="{i}"><b>{title}</b><p>{body}</p></div>'
        for i, (title, body) in enumerate(rows)
    )
    return (map_html
            + f'<div class="boundary-layout {"has-map" if map_html else ""}">'
            + f'<figure class="boundary-art" data-reveal="0"><img src="assets/{chapter}-workbench.jpg" alt="情景插画：{image_alt}"><figcaption>{phase} · 情景插画</figcaption></figure>'
            + f'<div class="boundary-points">{cards}</div></div>'
            + ("" if opening else f'<div class="boundary-handoff" data-reveal="2">{next_line}</div>'))


def main():
    data = {}
    variants = {"prompt": PROMPT_HTML, "comic": COMIC_HTML}
    for key, (source, scene_id) in SOURCES.items():
        text = (source / "lesson.js").read_text()
        lesson = json.loads(text[text.index("{"):].strip().removesuffix(";"))
        lesson["pilotSource"] = os.path.relpath(source / "index.html", HERE)
        scene = next(scene for scene in lesson["scenes"] if scene["id"] == scene_id)
        if key in BOUNDARIES:
            variants[key] = boundary_html(key, scene)
            # Sample-specific reveal steps; do not change official source scenes.
            lesson["pilotSteps"] = ["看当前对象", "看任务与判断", "看关键判断" if key.endswith("open") else "看交接"]
        lesson["scenes"] = [scene]
        data[key] = lesson
    source = SOURCES["prompt"][0]
    shell = (source / "index.html").read_text()

    def rewrite(match):
        attr, ref = match.groups()
        if ref == "lesson.js":
            return match.group(0)
        if ref.startswith(("#", "data:", "http:", "https:")):
            return match.group(0)
        return f'{attr}="{os.path.relpath((source / ref).resolve(), HERE)}"'

    shell = re.sub(r'(href|src)="([^"]+)"', rewrite, shell)
    shell = shell.replace("</head>", '<link rel="stylesheet" href="pilot.css"><script src="preview.js" defer></script></head>')
    (HERE / "render.html").write_text(shell)
    (HERE / "lesson.js").write_text(
        "// Generated by build-preview.py; canonical lessons remain unchanged.\n"
        + "const pilotData = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
        + "const pilotParams = new URLSearchParams(location.search);\n"
        + "const pilotTopic = Object.hasOwn(pilotData, pilotParams.get('lesson')) ? pilotParams.get('lesson') : 'prompt';\n"
        + "window.lesson = pilotData[pilotTopic];\n"
        + "if (pilotParams.get('variant') !== 'original') {\n"
        + "  const variants = " + json.dumps(variants, ensure_ascii=False) + ";\n"
        + "  window.lesson.scenes[0].html = variants[pilotTopic];\n"
        + "  if (window.lesson.pilotSteps) window.lesson.scenes[0].steps = window.lesson.pilotSteps;\n"
        + "}\n"
    )


if __name__ == "__main__":
    main()

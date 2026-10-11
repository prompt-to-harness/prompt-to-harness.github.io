#!/usr/bin/env python3
"""生成第 3 章各节的播放页外壳（index.html、speaker.html）、节说明 README.md 与章节首页 index.html。

外壳从第 2 章 2.3 的 index.html / speaker.html 复制，只替换标题、章节名、节号与上下节链接，
保证各章共用同一套播放器文件（check-courseware.py 会核对）。内容仍由各节 tools/build-lesson.py 生成。
用法：python3 courseware/ch03/tools/make-shells.py
"""
import re
from pathlib import Path

CH = Path(__file__).resolve().parents[1]
TEMPLATE = CH.parent / "ch02" / "lessons" / "03-review"
CHAPTER = "第 3 章 · Vibe Coding + Plugin"
TITLE = "用小游戏体验快速迭代与 Plugin"
LESSONS = [
    ("01-memory-game", "一句话加一个记忆翻牌", "一句话就能加出一个能玩的游戏；能玩是起点，不是验收", "加个游戏", "us"),
    ("02-rules", "这条规则是谁定的", "换几种玩法、完整打完一局；把缺陷和 AI 替你定的规则分开记", "谁定的规则", "agent"),
    ("03-debug", "挑一个缺陷，按证据修", "先复现，再让 Codex 只调查，由人定规则，最后最小修改", "按证据修", "tool"),
    ("04-plugin", "做游戏的经验，有人打包好了吗", "分清 Plugin 与 Skill，装之前先审；看懂 Skill 怎样按需进入请求", "审插件", "gate"),
    ("05-game-studio", "插件有自己的主张", "插件的默认和 Brief 冲突时由人按证据决定；停用插件不撤销它写的代码", "插件的主张", "ctx"),
    ("06-sources", "那条规则，下次 Codex 从哪里知道", "对照对话、Skill、Memory、仓库四处说明；没落档的就是需求债务", "说明在哪", "us"),
    ("07-cleanup", "重开时，还有什么要清理", "界面重置不等于资源重置；谁创建计时器和实例，谁负责清理", "重开清理", "agent"),
]


def shell(text, i, name, title, summary):
    prev_link = f'../{LESSONS[i - 1][0]}/index.html' if i else None
    next_link = f'../{LESSONS[i + 1][0]}/index.html' if i + 1 < len(LESSONS) else None
    text = text.replace("AI 交回的改动，收不收", title)
    text = text.replace("先看范围再看内容，决定接受、缩小还是拒绝；用提交让“拒绝”变便宜。", summary + "。")
    text = text.replace("第 2 章 · Vibe Coding", CHAPTER)
    text = text.replace("第 2 章 · 第 3 节", f"第 3 章 · 第 {i + 1} 节")
    text = text.replace('<p class="sidebar-meta">第 3 节</p>', f'<p class="sidebar-meta">第 {i + 1} 节</p>')
    text = text.replace('aria-label="第 3 节课程内容"', f'aria-label="第 {i + 1} 节课程内容"')
    text = text.replace('>第 2 章</a>', '>第 3 章</a>')
    nav = (f'<a href="{prev_link}">← 上一节</a>' if prev_link else '') + (f'<a href="{next_link}">下一节 →</a>' if next_link else '')
    text = re.sub(r'<a href="\.\./02-iteration/index\.html">← 上一节</a><a href="\.\./04-publish/index\.html">下一节 →</a>', nav, text)
    return text


def chapter_home():
    route = "".join(
        f'<li><a class="p-box" data-role="{role}" href="lessons/{d}/index.html"><span class="route-num">{i + 1:02d}</span><h3>{short}</h3></a></li>'
        for i, (d, _t, _s, short, role) in enumerate(LESSONS)
    )
    cards = "".join(
        f'<article class="section-card"><span class="section-number">{i + 1:02d}</span><strong><a href="lessons/{d}/index.html">{t}</a></strong><p>{s}</p>'
        f'<span class="card-links"><a href="lessons/{d}/index.html">阅读与演示</a><a href="lessons/{d}/speaker.html">讲解全文</a></span></article>'
        for i, (d, t, s, _short, _role) in enumerate(LESSONS)
    )
    home = (CH.parent / "ch02" / "index.html").read_text()
    head = home[: home.index("<body>")].replace("第 2 章 · Vibe Coding", CHAPTER)
    # 左侧目录与小节页同款（2026-10-11，平台 reviewer R25）：先看本章概览，再进具体小节
    nav = "".join(f'<a href="lessons/{d}/index.html"><span>{i + 1:02d}</span>{short}</a>' for i, (d, _t, _s, short, _role) in enumerate(LESSONS))
    sidebar = (
        '<aside class="sidebar" aria-label="课程目录">\n'
        '<a class="wordmark" href="../index.html" aria-label="回到课程首页"><img class="brand-mark" src="../shared/assets/ph_logo.png" alt="" width="400" height="400"><span>从 Prompt<br/>到 Harness</span></a>\n'
        f'<div class="chapter-label"><a href="../index.html">课程首页</a> › {CHAPTER}</div>\n'
        f'<p class="sidebar-meta">本章 {len(LESSONS)} 节</p>\n<p class="sidebar-title">{TITLE}</p>\n'
        f'<nav id="scene-nav" aria-label="本章目录">{nav}</nav>\n'
        '<div class="sidebar-bottom"><div class="chapter-nav"><a href="../ch02/index.html">← 上一章：第 2 章</a></div><span class="edition">深蓝学院 · Vibe Coding</span></div>\n'
        '</aside>\n'
    )
    return head + (
        '<body>\n' + sidebar + '<div class="workspace"><main class="chapter-home p-root">\n<header class="chapter-home-header">\n'
        '<a class="institution-link" href="https://www.shenlanxueyuan.com/course/913" target="_blank" rel="noopener" aria-label="在深蓝学院查看课程"><img class="institution-logo" src="../shared/assets/shenlanxueyuan_logo.png" alt="深蓝学院" width="2420" height="744"/></a>\n'
        '<a aria-label="回到课程首页" class="wordmark home-wordmark" href="../index.html"><img class="brand-mark" src="../shared/assets/ph_logo.png" alt="" width="400" height="400"><span>从 Prompt<br/>到 Harness</span></a>\n'
        '<p class="script-meta">深蓝学院 · Vibe Coding</p>\n'
        f'<p class="chapter-kicker">{CHAPTER}</p>\n<h1>{TITLE}</h1>\n'
        '<p class="chapter-lede">把只有首页的个人站点变成能玩两个小游戏的实验室，并发现“能玩”背后有一串没人亲自定过、也没写下来的规则</p>\n</header>\n'
        '<section class="chapter-route" aria-labelledby="route-title">\n'
        '<div class="chapter-section-heading"><p class="scene-kicker">本章路线</p><h2 id="route-title">加游戏、查规则、修缺陷、用插件，再问说明在哪</h2></div>\n'
        f'<ol class="chapter-route-list">{route}</ol>\n'
        '<div class="p-bar is-light chapter-route-note">每一节都问一句：<b>这条规则是谁定的？</b></div>\n</section>\n'
        '<section aria-labelledby="sections-title">\n<div class="chapter-section-heading"><p class="scene-kicker">章节导航</p><h2 id="sections-title">七节首版</h2></div>\n'
        f'<div class="section-grid">{cards}</div>\n<p>首版课件（2026-10-06），未经讲师审阅，未试讲、未录制</p>\n</section>\n'
        '<footer class="chapter-home-footer"><a href="../index.html">← 课程首页</a><a href="../ch02/index.html">← 第 2 章</a><span>草稿，未试讲</span></footer>\n'
        '</main></div></body>\n</html>\n'
    )


def main():
    index_t = (TEMPLATE / "index.html").read_text()
    speaker_t = (TEMPLATE / "speaker.html").read_text()
    for i, (d, title, summary, _short, _role) in enumerate(LESSONS):
        here = CH / "lessons" / d
        (here / "index.html").write_text(shell(index_t, i, d, title, summary))
        (here / "speaker.html").write_text(shell(speaker_t, i, d, title, summary))
        readme = here / "README.md"
        readme.write_text(
            f"# 3.{i + 1} {title}\n\n[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)\n\n"
            f"{summary}。依据[第 3 章故事线提案](../../../../docs/outline/proposals/2026-10-05-ch03-storyline.md)第五版与本节分镜。"
            "首版（2026-10-06），未经讲师审阅，未试讲、未录制；画面中的输出来自排练运行，见 [materials](../../materials/README.md)。\n\n"
            "## 维护\n\n`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。"
            "播放页外壳由 [`../../tools/make-shells.py`](../../tools/make-shells.py) 生成。\n\n"
            f"```sh\npython3 courseware/ch03/lessons/{d}/tools/build-lesson.py\nuv run courseware/tools/check-courseware.py\n```\n"
        )
    (CH / "index.html").write_text(chapter_home())
    print(f"{len(LESSONS)} lessons")


if __name__ == "__main__":
    main()

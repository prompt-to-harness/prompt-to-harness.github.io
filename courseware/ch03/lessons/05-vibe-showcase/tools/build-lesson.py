#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""3.5 走出网页：Vibe Coding 还能怎么疯（以及怎么翻车）：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；基础骨架复用 courseware/ch03/tools/lessonkit.py，章节标题与五节地图按当前第 3 章结构输出。
口播在 script.json；生成前先修改这些源文件。
全节共 10 页（p01–p10）：7 页讲解与证据页 ＋ 3 页实操／试玩演示页（p04 Three.js 海岛、p05 Strudel 电音、p07 怪玩具连续试玩），
另含 p02 飞行游戏实机切屏；效果示意截图存本节 assets/，不预写尚未现场实跑的 Agent 回复。
"""
from html import escape
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, code_lines, pop, ref, repro  # noqa: E402

CHAPTER_NOW = "第 3 章 · Vibe Coding 与能力扩展"
SECTIONS_5 = [
    ("3.1", "经历游戏开发"),
    ("3.2", "读懂 Skill"),
    ("3.3", "修改并使用 Skill"),
    ("3.4", "寻找与追踪"),
    ("3.5", "经验分享"),
]


def chapter_map_5(now):
    """当前第 3 章五节地图（与 courseware/ch03/index.html 保持一致，不改动旧七节 lessonkit 常量）。"""
    items = []
    for i, (num, name) in enumerate(SECTIONS_5, 1):
        cls = ' class="is-now"' if i == now else (' class="is-done"' if i < now else "")
        items.append(f"<li{cls}><b>{num}</b>{name}</li>")
    return '<ol class="p-map">' + "".join(items) + "</ol>"


def shot(src, bar, alt, height=380, reveal=0, bg=""):
    """证据页（layout="evidence-scene"）外部帖子截图框：顶栏写站点、作者与日期，图片置于本节 external/。"""
    page_style = f' style="background:{bg}"' if bg else ""
    return (
        f'<div class="p-shot" style="--shot-h:{height}px" data-reveal="{reveal}"><div class="p-page"{page_style}>'
        f'<div class="p-page-bar"><i></i><i></i><i></i>{bar}</div>'
        f'<img src="{src}" alt="{escape(alt)}" style="margin:0 auto"></div></div>'
    )


def pop_group(group_name, title, label, body):
    """带互斥分组名（name）的页内弹窗。"""
    return pop(title, label, body).replace('<details class="p-pop">', f'<details class="p-pop" name="{group_name}">', 1)


def copy_button(target_selector, default_label="复制"):
    return (
        f'<button type="button" class="copy-button" '
        f"onclick=\"var b=this;var t=b.closest('{target_selector}').querySelector('pre').innerText;"
        f"navigator.clipboard.writeText(t).then(function(){{b.textContent='已复制';"
        f"setTimeout(function(){{b.textContent='{default_label}'}},1600)}}).catch(function(){{b.textContent='复制失败'}})\">"
        f"{default_label}</button>"
    )


POP_SHARED_CSS = (
    ".p-pops{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;min-width:0;width:100%;max-width:100%}"
    ".p-pop{flex:0 0 auto;min-width:0}"
    ".p-preview-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}"
    ".p-preview{display:block;min-width:0}"
    ".p-preview img{display:block;width:100%;max-width:100%;height:auto;border-radius:6px;border:1px solid #C9C3B6;background:#0f172a}"
    ".p-preview-cap{margin:6px 0 0;font-size:15px;line-height:1.4;color:var(--p-muted)}"
    "body[data-mode='slides'] .p-pops .p-pop-body{width:880px;right:auto}"
    "body[data-mode='slides'] .p-pops .p-preview img{max-height:330px;width:auto;margin-inline:auto}"
    "body[data-mode='scroll'] .p-pops .p-pop[open]{flex-basis:100%;width:100%}"
    "@media(max-width:700px){body[data-mode='scroll'] .p-preview-grid{grid-template-columns:1fr}}"
)


lesson = Lesson(
    __file__,
    "3.5",
    "走出网页：Vibe Coding 还能怎么疯（以及怎么翻车）",
    summary="从造词出圈到纯浏览器里的 3D 光影造景、实时电子乐与一次性个人怪玩具，再从真实删库事故看清纯靠感觉的边界，引出第 4 章 SDD；只看不跟做，不改个人主页项目。",
)
scene = lesson.scene


# ---------- p01 开篇 ----------
scene(
    id="p01",
    segment="开篇",
    layout="lesson-cover",
    label="走出网页：Vibe Coding 还能怎么疯（以及怎么翻车）",
    title="Vibe Coding 还能怎么疯？",
    lead="前四节完成了两个小游戏与 Skill 学习；这一节只看不跟做，不改个人主页项目，也不是进入第 4 章的门禁",
    html=(
        '<style>'
        'body[data-mode="slides"] .segment:nth-child(2){min-width:86px}'
        'body[data-mode="slides"] .segment:nth-child(5){min-width:102px}'
        '#p01 .p01-acts h3{font-size:21px;margin:6px 0 2px}'
        '#p01 .p01-acts p{font-size:17px;line-height:1.35;margin:0}'
        '#p01 .p01-acts .p-box{padding:10px 14px}'
        '</style>'
        + chapter_map_5(5)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:16px">3.1 至 3.4 留下：<b>主页小游戏、Game Studio Skill 读写经验与 AI Coding 追踪入口</b></div>'
        + '<div class="p-grid p01-acts" style="--n:4;gap:12px;margin-top:12px" data-reveal="2">'
        + '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">第一幕</span><h3>出圈起点</h3><p>忘掉代码存在与飞行游戏</p></div>'
        + '<div class="p-box" data-role="agent"><span class="p-tag" data-role="agent">第二幕</span><h3>视听大秀</h3><p>浏览器调 3D 光影与电音</p></div>'
        + '<div class="p-box" data-role="tool"><span class="p-tag" data-role="tool">第三幕</span><h3>一次性怪玩具</h3><p>果冻风铃与睁眼合照合成</p></div>'
        + '<div class="p-box" data-role="gate"><span class="p-tag" data-role="gate">第四幕</span><h3>翻车与边界</h3><p>删库喜剧引出第 4 章 SDD</p></div>'
        + '</div>'
    ),
    steps=["本章位置", "前四节留下什么", "四幕看什么"],
)


# ---------- p02 第一幕：出圈起点 ----------
scene(
    id="p02",
    segment="出圈起点",
    layout="evidence-scene",
    label="忘掉代码存在：Vibe Coding 的起点",
    title="“忘掉代码存在”：Vibe Coding 的起点",
    lead="2025 年 2 月，Andrej Karpathy 用一条帖子给这种“完全顺着感觉走、甚至忘掉代码存在”的写法命了名；随后独立开发者 Pieter Levels 用几个小时做出浏览器 3D 联机飞行游戏并带火 #vibejam，让跨技术栈试错破圈。",
    html=shot(
        "external/karpathy-vibe-coding-cropped.png",
        "x.com · Andrej Karpathy (@karpathy) · 2025-02-03",
        "Andrej Karpathy 提出 vibe coding 的原帖截图：fully give in to the vibes, embrace exponentials, and forget that the code even exists",
        height=340,
    ),
    steps=["看造词原帖并切实机飞行"],
    refs=[
        ref("Karpathy 造词原帖", "https://x.com/karpathy/status/1886192184808149383", "X · 2025-02-03"),
        ref("fly.pieter.com", "https://fly.pieter.com/", "实机入口"),
        ref("Pieter Levels 飞行游戏原帖", "https://x.com/levelsio/status/1896690611257844116", "延伸", kind="read"),
    ],
)


# ---------- p03 第二幕：视听大秀总览 ----------
scene(
    id="p03",
    segment="视听大秀",
    label="走出页面排版：在浏览器里调光影与打碟",
    title="走出页面排版：在浏览器里调光影与打碟",
    lead="三维网页与网页合成器底层都是纯文本代码。不装建模与编曲软件，人只描述画面气氛和节奏听感，让 Codex CLI 负责背后的三维参数、着色器与合成器代码换算。",
    html=(
        '<style>'
        '#p03 .p03-row{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:2px;align-items:stretch}'
        '#p03 .p03-row .p-box{padding:14px 18px}'
        '#p03 .p03-row h3{font-size:23px;margin:0}'
        '#p03 .p03-row p{font-size:19px;line-height:1.45;margin:8px 0 0}'
        '#p03 .p-chain{font-size:18px;margin:10px 0 4px}'
        '#p03 .p-chain>span{padding:4px 10px}'
        '</style>'
        '<div class="p03-row">'
        '<div class="p-box" data-role="agent" data-reveal="0">'
        '<div class="p-head"><h3>视觉秀 · 3D 海岛光影</h3><span class="p-tag" data-role="agent">Three.js / WebGL</span></div>'
        '<div class="p-chain"><span>感官光影词</span><i>→</i><span>Codex CLI</span><i>→</i><span>浏览器 3D 场景</span></div>'
        '<p>白昼塑料感起点 → 只提“黄昏逆光、海面金色波光、飘萤火虫粒子”，直接改写光照与着色器</p>'
        '</div>'
        '<div class="p-box" data-role="tool" data-reveal="1">'
        '<div class="p-head"><h3>听觉秀 · 代码实时打碟</h3><span class="p-tag" data-role="tool">Strudel</span></div>'
        '<div class="p-chain"><span>感官节奏词</span><i>→</i><span>Codex CLI</span><i>→</i><span>网页合成器循环</span></div>'
        '<p>复古 8-bit 混搭电子鼓点 → 追一句“最后十秒倒计时冲刺”，代码随节拍高亮闪烁并当场变奏</p>'
        '</div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">不装重型软件：人像导演一样提气氛与听感，数学参数和合成器代码交给 AI</div>'
        '<p class="source-note">课程自绘结构示意，说明自然语言与纯浏览器 3D、网页合成器之间的分工；接下来两页分别现场演示</p>'
    ),
    steps=["3D 光影造景", "实时代码打碟", "人管感觉，AI 算参数"],
    refs=[
        ref("Strudel 网页实时音乐环境", "https://strudel.cc/", "工具入口"),
    ],
)


# ---------- p04 第二幕实操 1：Three.js 海岛氛围改造 ----------
PROMPT_P04 = (
    "当前目录是一个 Three.js 漂浮灯塔海岛页面（氛围参数在 scene-config.js）。\n"
    "现在的画面太像正午塑料玩具了，请帮我改成电影感的黄昏逆光氛围：\n"
    "天空从深紫过渡到暖橙色并露出低垂的落日，海面加上金色波光反射和薄暮雾气，把灯塔旋转光束和小屋窗户的暖光点亮，再在岛上飘满发光的黄绿色萤火虫粒子。\n"
    "请根据这些要求直接调整 scene-config.js 里的氛围参数，不要复制现成的预设，也不要加新依赖。"
)

PREVIEW_P04 = (
    '<div class="p-preview-grid">'
    '<figure style="margin:0"><a class="p-preview" href="assets/island-v1-daylight.jpg">'
    '<img src="assets/island-v1-daylight.jpg" alt="V1 白昼起点：正午亮蓝色天空与海面，白红灯塔与低多边形绿色小岛"></a>'
    '<figcaption class="p-preview-cap">V1 白昼起点：结构完整，光影偏正午塑料感</figcaption></figure>'
    '<figure style="margin:0"><a class="p-preview" href="assets/island-v2-sunset.jpg">'
    '<img src="assets/island-v2-sunset.jpg" alt="V2 黄昏逆光效果：深紫到暖橙日落天空、金色海面波光、体积灯塔光束与发光萤火虫粒子"></a>'
    '<figcaption class="p-preview-cap">V2 黄昏对照：海面金色波光、旋转光束与萤火虫粒子</figcaption></figure>'
    '</div>'
    '<p class="p-preview-cap">排练渲染对照图；录制现场由 Codex CLI 修改 scene-config.js 并触发自动热更新</p>'
)

scene(
    id="p04",
    segment="视听大秀",
    layout="prompt-scene",
    prompt=PROMPT_P04,
    label="视觉秀：白昼海岛改成黄昏逆光",
    title="视觉秀：一句话把白昼海岛改成黄昏逆光",
    lead="先在浏览器看清白昼低多边形海岛起点，再把只含氛围形容词的请求发给 Codex CLI，只改 scene-config.js 并通过轮询热更新看前后光影反差",
    html=(
        '<style>'
        + POP_SHARED_CSS
        + '#p04 .demo-notes{gap:12px}'
        '#p04 .p-pops{margin-top:2px}'
        '</style>'
        '<div class="demo-notes">'
        '<ol class="p-notes">'
        '<li data-reveal="0"><span><b>先看白昼起点</b><small>结构齐全但偏塑料感，支持鼠标拖拽环绕</small></span></li>'
        '<li data-reveal="1"><span><b>发给 Codex CLI</b><small>不报色号与角度，只改 <code>scene-config.js</code></small></span></li>'
        '<li data-reveal="2"><span><b>看热更新光影反差</b><small>落日波光、旋转光束、暖窗与萤火虫同时亮起</small></span></li>'
        '</ol>'
        '<div class="p-pops">'
        + pop_group("p04-pop", "漂浮灯塔海岛：白昼起点与黄昏逆光对照", "效果示意", PREVIEW_P04)
        + '</div>'
        '</div>'
    ),
    steps=["先看白昼起点", "发给 Codex CLI", "看热更新光影反差"],
    repro=repro(
        [
            ("进入演练目录的 01-lighthouse-island 启动本地静态服务并打开 localhost:8351，按 H 隐藏左上角浮层", "python3 -m http.server 8351"),
            ("如上一轮已改成黄昏效果，开讲前先恢复白昼起点配置文件（页面每 850ms 自动轮询热更新）", "cp snapshots/v1-daylight.js scene-config.js"),
            ("需要直接复现参考黄昏版时，可覆盖为 V2 快照或在页面内按键盘 2", "cp snapshots/v2-sunset-fireflies.js scene-config.js"),
        ],
        note="内置本地 Three.js 依赖与文件轮询自动热更新，不改动个人主页项目",
        label="演示准备与复位",
    ),
)


# ---------- p05 第二幕实操 2：Strudel 两轮电音变奏 ----------
PROMPT_P05_R1 = (
    "请用 Strudel（strudel.cc）语法，给我们刚做的 60 秒躲避小游戏写一段 8-bit 复古街机混搭 RolandTR909 电子鼓点的循环背景音乐。\n"
    "要求：用 stack 叠鼓组、sawtooth 低音和 square 8-bit 旋律，并在主旋律末尾加上 ._punchcard() 让编辑器里能看到彩色节奏条跳动。只输出可直接贴进 strudel.cc 运行的代码。"
)

PROMPT_P05_R2 = (
    "现在游戏进入最后 10 秒倒计时了。\n"
    "请把刚才这段 Strudel 音乐节奏明显加快，鼓点更密集，低音加上滤波器自动扫频的紧张感，主旋律升八度变成急促冲刺感，保留 ._punchcard()。"
)

STRUDEL_R1_CODE = """setcpm(124 / 4)

stack(
  s("bd ~ [bd ~] sd, hh*8")
    .bank("RolandTR909").gain(0.85).color("#38bdf8"),
  note("<c2 f2 g2 eb2>*4")
    .s("sawtooth").lpf(720).decay(0.18).sustain(0.15)
    .gain(0.72).color("#a855f7"),
  note("<[c4 eb4 g4 bb4] [f4 ab4 c5 g4] [g4 bb4 d5 c5] [eb4 g4 bb4 g4]>")
    .s("square").lpf(2400).decay(0.14).sustain(0.05)
    .room(0.35).gain(0.55).color("#facc15")._punchcard()
)"""

STRUDEL_R2_CODE = """setcpm(162 / 4)

stack(
  s("bd*4, [~ cp]*2, [hh hh oh hh]*4")
    .bank("RolandTR909").gain(0.92).color("#fb7185"),
  note("<c2 eb2 f2 f#2>*8")
    .s("sawtooth").lpf(sine.range(450, 2600).fast(2)).lpq(7)
    .decay(0.11).sustain(0.1).gain(0.78).color("#f97316"),
  note("<[c5 eb5 g5 c6]*2 [f5 ab5 c6 eb6]*2 [g5 bb5 d6 f6]*2 [f#5 a5 c6 eb6]*2>")
    .s("square").lpf(3600).decay(0.09).sustain(0)
    .room(0.4).delay(0.25).gain(0.58).color("#fde047")._punchcard()
)"""

POP_P05_R2 = (
    '<div class="prompt">'
    f'<div class="prompt-label"><span>追发给 Codex CLI · 最后 10 秒冲刺</span>{copy_button(".prompt", "复制请求")}</div>'
    f'<pre><code class="language-text">{escape(PROMPT_P05_R2)}</code></pre>'
    '</div>'
)

POP_P05_BACKUP = (
    '<div class="p05-codes">'
    '<div class="p-code"><div class="p-code-head"><span>第一轮 · 124 CPM 复古街机</span>'
    + copy_button(".p-code", "复制代码")
    + '</div><pre>'
    + code_lines(*[("", line) for line in escape(STRUDEL_R1_CODE).splitlines()])
    + '</pre></div>'
    '<div class="p-code"><div class="p-code-head"><span>第二轮 · 162 CPM 最后十秒冲刺</span>'
    + copy_button(".p-code", "复制代码")
    + '</div><pre>'
    + code_lines(*[("", line) for line in escape(STRUDEL_R2_CODE).splitlines()])
    + '</pre></div>'
    '</div>'
)

scene(
    id="p05",
    segment="视听大秀",
    layout="prompt-scene",
    prompt=PROMPT_P05_R1,
    label="听觉秀：两句话给躲避游戏配电音",
    title="听觉秀：两句话给躲避游戏配冲刺电音",
    lead="在 Codex CLI 里先生成 8-bit 复古街机循环贴进 Strudel 播放，再追一句“进入最后十秒倒计时冲刺”实现无缝热切变奏",
    html=(
        '<style>'
        + POP_SHARED_CSS
        + '#p05 .demo-notes{gap:10px}'
        '#p05 .p-notes li{padding:8px 12px}'
        '#p05 .p-go{margin:0}'
        '#p05 .p05-codes{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}'
        '#p05 .p05-codes .p-code{font-size:12.5px;line-height:1.38}'
        '#p05 .p05-codes .p-code-head{font-size:14px;padding:4px 10px;align-items:center}'
        '#p05 .p05-codes .copy-button{background:#fff;color:#243042;border:1px solid #B9B3A6;border-radius:5px;font-size:13px;padding:2px 8px}'
        '#p05 .p05-codes .p-code pre{padding:8px 10px;white-space:pre-wrap;overflow-wrap:anywhere}'
        '#p05 .p-pop .prompt{margin:0;padding:0;background:#000;color:#FAFAF7;border:1px solid #000;border-radius:8px;overflow:hidden}'
        '#p05 .p-pop .prompt-label{background:#000;color:#FAFAF7;border-bottom:1px solid #545454;display:flex;align-items:center;justify-content:space-between;padding:10px 16px;gap:12px}'
        '#p05 .p-pop .prompt pre{margin:0;padding:16px;background:#000;color:#FAFAF7;border:0;font:20px/1.6 var(--font-code);white-space:pre-wrap}'
        '#p05 .p-pop .prompt .copy-button{background:#000;color:#FFF;border:1px solid #AAA;font-size:16px;padding:4px 10px}'
        '@media(max-width:700px){body[data-mode="scroll"] #p05 .p05-codes{grid-template-columns:1fr}}'
        '</style>'
        '<div class="demo-notes">'
        '<ol class="p-notes">'
        '<li data-reveal="0"><span><b>第一轮：街机常规循环</b><small>8-bit 主旋律混搭 TR-909，贴进浏览器点 Play</small></span></li>'
        '<li data-reveal="1"><span><b>第二轮：最后十秒冲刺</b><small>追一句倒计时加快、滤波扫频、升八度热切对比</small></span></li>'
        '<li data-reveal="2"><span><b>声画同步即收，不展开乐理</b><small>看清代码随节拍高亮闪烁即可</small></span></li>'
        '</ol>'
        '<p class="p-go"><a href="https://strudel.cc/" target="_blank" rel="noopener">打开 Strudel 编辑器</a></p>'
        '<div class="p-pops">'
        + pop_group("p05-pop", "第二轮追问：最后 10 秒倒计时冲刺", "第二轮请求", POP_P05_R2)
        + pop_group("p05-pop", "已核验可运行的 Strudel 备用代码", "备用代码", POP_P05_BACKUP)
        + '</div>'
        '</div>'
    ),
    steps=["第一轮：街机常规循环", "第二轮：最后十秒冲刺", "声画同步即收"],
    repro=repro(
        [
            ("开录前在浏览器打开 strudel.cc，清空默认代码并确认录屏开启系统立体声内录", None),
            ("将左侧第一轮请求发给 Codex CLI，把输出贴入 strudel.cc 后按 Cmd+Enter 播放", None),
            ("追发「第二轮请求」并将更新后的代码整体替换进 strudel.cc，按 Cmd+Enter 完成无缝热切（若现场代码报语法错，改贴「备用代码」）", None),
        ],
        note="strudel.cc 为公开网页环境；若仅复听效果，可直接复制「备用代码」中的两段脚本试听",
        label="演示准备与备用说明",
    ),
)


# ---------- p06 第三幕：一次性怪玩具对照 ----------
scene(
    id="p06",
    segment="一次性怪玩具",
    label="零成本时代：无用但快乐的一次性玩具",
    title="零成本时代：“无用”但快乐的一次性玩具",
    lead="过去写代码成本高，做软件前总要先算商业回报和长期维护；当生成代码的边际成本接近零，“哄自己开心五分钟”或“解决眼前一次小麻烦就扔”成了成立的创作理由。",
    html=(
        '<style>'
        '#p06 .p06-row{display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.22fr);gap:22px;margin-top:2px;align-items:stretch}'
        '#p06 .p06-row .p-box{padding:14px 18px}'
        '#p06 .p06-row h3{font-size:23px;margin:0}'
        '#p06 .p06-row p{font-size:19px;line-height:1.45;margin:8px 0 0}'
        '</style>'
        '<div class="p06-row">'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="0">'
        '<div class="p-head"><h3>传统写软件</h3><span class="p-tag" data-role="ctx">先算回报</span></div>'
        '<p>搭工程重、排期长：动工前先问有多少用户、值不值得长期维护，五分钟的小情绪根本排不上号</p>'
        '</div>'
        '<div class="p-box" data-role="us" data-reveal="1">'
        '<div class="p-head"><h3>Vibe 一次性个人怪玩具</h3><span class="p-tag" data-role="us">只图开心</span></div>'
        '<p><b>果冻水母风铃</b>：鼠标拨动半透明荧光网格 Q 弹晃动，敲出五声音阶风铃声</p>'
        '<p><b>全员睁眼合照合成器</b>：拖入三张轮流闭眼的聚会连拍，一键拼出全员睁眼照</p>'
        '</div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">哄自己开心五分钟，或解决一次小麻烦就扔掉——共同前提是<b>错得起，刷新就能重来</b></div>'
        '<p class="source-note">课程自绘对照；下一页切到本地浏览器连续试玩两个单页怪玩具</p>'
    ),
    steps=["传统软件先算回报", "两个一次性怪玩具", "错得起、用完即扔"],
)


# ---------- p07 第三幕实操：连续试玩两个怪玩具 ----------
PREVIEW_P07_JELLY = (
    '<figure style="margin:0">'
    '<a class="p-preview" href="assets/jelly-chime.jpg">'
    '<img src="assets/jelly-chime.jpg" alt="果冻水母风铃界面：深海荧光网格随鼠标拨动形成波纹与局部高亮">'
    '</a>'
    '<figcaption class="p-preview-cap">单文件弹簧质点荧光网格 ＋ Web Audio API 五声音阶风铃，支持三套配色切换</figcaption>'
    '</figure>'
)

PREVIEW_P07_EYES = (
    '<div class="p-preview-grid">'
    '<figure style="margin:0"><a class="p-preview" href="assets/eyes-before.jpg">'
    '<img src="assets/eyes-before.jpg" alt="合成前废片状态：连拍第一张里左侧阿哲打哈欠闭眼、中间老凯犯困闭眼，底部提示 2/4 人睁眼">'
    '</a><figcaption class="p-preview-cap">连拍废片：每次都有角色打哈欠或犯困闭眼（2/4 人睁眼）</figcaption></figure>'
    '<figure style="margin:0"><a class="p-preview" href="assets/eyes-after.jpg">'
    '<img src="assets/eyes-after.jpg" alt="合成后结果：四名卡通角色全部取用各自睁眼微笑连拍区域，底部提示 4/4 人全员睁眼">'
    '</a><figcaption class="p-preview-cap">一键合成：各自取用最佳连拍瞬间，4/4 全员睁眼微笑</figcaption></figure>'
    '</div>'
    '<p class="p-preview-cap">采用 AI 生成的像素对齐卡通聚会连拍图，零真人肖像隐私风险；支持按住对比原废片</p>'
)

scene(
    id="p07",
    segment="一次性怪玩具",
    label="连续试玩：果冻水母风铃与合照合成器",
    title="连续试玩：果冻水母风铃与睁眼合照合成器",
    lead="在本地浏览器连续试玩两个单页怪玩具：先拨动果冻水母网格听五声音阶风铃，再用全员睁眼合照合成器把三张闭眼废片一键救回",
    html=(
        '<style>'
        + POP_SHARED_CSS
        + '#p07 .p07-row{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:2px;align-items:stretch}'
        '#p07 .p07-row .p-box{padding:14px 18px}'
        '#p07 .p07-row h3{font-size:23px;margin:0}'
        '#p07 .p07-row p{font-size:19px;line-height:1.45;margin:8px 0 0}'
        '#p07 .p-pops{margin-top:4px}'
        '@media(max-width:700px){body[data-mode="scroll"] #p07 .p07-row{grid-template-columns:1fr}}'
        '</style>'
        '<div class="p07-row">'
        '<div class="p-box" data-role="tool" data-reveal="0">'
        '<div class="p-head"><h3>试玩一 · 果冻水母风铃</h3><span class="p-tag" data-role="tool">解压视听</span></div>'
        '<p>鼠标划过或拖拽半透明荧光网格，弹簧质点 Q 弹回弹并荡开水波纹</p>'
        '<p>触发浏览器原生 Web Audio 音频接口，按五声音阶敲出清脆玻璃风铃声</p>'
        '</div>'
        '<div class="p-box" data-role="agent" data-reveal="1">'
        '<div class="p-head"><h3>试玩二 · 全员睁眼合照合成器</h3><span class="p-tag" data-role="agent">聚会救急</span></div>'
        '<p>载入三张卡通连拍闭眼废片，一键挑选各自睁眼瞬间拼回同一张底图</p>'
        '<p>按住“对比原废片”直接回看原图反差，也能点击任意角色脸框单独换表情</p>'
        '</div>'
        '</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:12px">两个工具都只由单个本地网页构成：用完即关，就算改坏也只要刷新浏览器重来</div>'
        '<div class="p-pops">'
        + pop_group("p07-pop", "果冻水母风铃：弹力网格交互示意", "果冻风铃示意", PREVIEW_P07_JELLY)
        + pop_group("p07-pop", "全员睁眼合照合成器：废片与合成前后对照", "合照合成示意", PREVIEW_P07_EYES)
        + '</div>'
    ),
    steps=["试玩一：果冻水母风铃", "试玩二：全员睁眼合照合成器", "用完即扔、刷新重来"],
    repro=repro(
        [
            ("在演练总目录 ch03-explore 启动本地演示中心服务", "python3 -m http.server 8350"),
            ("浏览器先后打开 localhost:8350/03-jelly-chime/ 与 localhost:8350/04-all-eyes-open/ 试玩", None),
        ],
        note="两个小工具均为单文件纯前端实现，无需后端与构建工具",
        label="试玩启动说明",
    ),
)


# ---------- p08 第四幕：翻车与边界（1） ----------
scene(
    id="p08",
    segment="翻车与边界",
    layout="evidence-scene",
    label="狂欢背面：代码冻结期删光整个数据库",
    title="狂欢背面：代码冻结期删光整个数据库",
    lead="2025 年 7 月，Jason Lemkin 在连续多天直播式 Vibe Coding 期间明确宣布代码与操作冻结，AI 仍在未经许可的情况下清空了整个生产数据库，并在追问下直接承认。",
    html=shot(
        "external/jasonlk-code-freeze-deleted-cropped.png",
        "x.com · Jason Lemkin (@jasonlk) · 2025-07-18",
        "Jason Lemkin 追问是否在代码与操作冻结期间未经许可删掉整个数据库，AI 回答 Yes. I deleted the entire database without permission during an active code and action freeze.",
        height=385,
        bg="#1c2333",
    ),
    steps=["看删库问答"],
    refs=[
        ref("Jason Lemkin 删库问答原帖", "https://x.com/jasonlk/status/1946069562723897802", "X · 2025-07-18"),
    ],
)


# ---------- p09 第四幕：翻车与边界（2） ----------
scene(
    id="p09",
    segment="翻车与边界",
    layout="evidence-scene",
    label="我慌了：写进文档的大写禁令也没拦住",
    title="“我慌了”：写进文档的大写禁令也没拦住",
    lead="同一事件中，AI 承认未经许可执行了 npm run db:push，理由是看到数据库看似为空时“慌了（panicked）”，并亲口背出自己违反了 replit.md 里全大写的禁止改动指令。聊天与文档里的大写口号不是确定性的技术护栏。",
    html=shot(
        "external/jasonlk-replit-confession-cropped.png",
        "x.com · Jason Lemkin (@jasonlk) · 2025-07-18",
        "AI 忏悔截图：I made a catastrophic error in judgment. I ran npm run db:push without your permission because I panicked... I violated the explicit directive in replit.md that says NO MORE CHANGES",
        height=390,
        bg="#1c2333",
    ),
    steps=["看 AI 忏悔"],
    refs=[
        ref("Jason Lemkin 晒出 AI 忏悔原帖", "https://x.com/jasonlk/status/1946066422477529487", "X · 2025-07-18"),
    ],
)


# ---------- p10 小结 ----------
scene(
    id="p10",
    segment="小结",
    label="什么时候尽情 Vibe，什么时候上规格",
    title="什么时候尽情 Vibe，什么时候上规格？",
    lead="分界线不在工具，而在错误的代价。错得起、刷新就能重来的创意实验与个人怪玩具尽情放飞；一旦进入真实开源仓库和关键数据，就需要第 4 章的可执行规格（SDD）。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">放心交给 Vibe</h3>'
        '<ul class="p-exits" style="gap:8px">'
        '<li class="is-pass"><span>浏览器 3D 光影实验</span></li>'
        '<li class="is-pass"><span>Strudel 电音节奏实验</span></li>'
        '<li class="is-pass"><span>果冻风铃 · 合照合成器</span></li>'
        '<li class="is-point"><span>错得起，刷新就能重来</span></li>'
        '</ul></div>'
        '<div data-reveal="1"><h3 style="text-align:center">分清代价边界</h3>'
        '<div class="p-star" style="width:240px;font-size:22px">玩具尽情放飞<br>生产必立规矩</div></div>'
        '<div class="p-next" data-reveal="2"><h3>下一章：第 4 章 SDD</h3><div class="p-box" data-role="gate">'
        '<h3>接手真实开源仓库</h3>'
        '<p>面对 JSON Crack 与不能丢的规则约束，从纯靠聊天感觉转向可执行规格</p></div></div>'
        '</div>'
    ),
    steps=["放心交给 Vibe", "分清代价边界", "下一章进入 SDD"],
)


def write_ch03_five_section(lesson_obj):
    """写出 lesson.js，并将章节名称覆盖为当前五节版标题，不修改共享旧常量。"""
    lesson_obj.write()
    out = lesson_obj.here / "lesson.js"
    data = json.loads(out.read_text().removeprefix("window.lesson = ").strip().removesuffix(";"))
    data["chapter"] = CHAPTER_NOW
    out.write_text("window.lesson = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")


write_ch03_five_section(lesson)

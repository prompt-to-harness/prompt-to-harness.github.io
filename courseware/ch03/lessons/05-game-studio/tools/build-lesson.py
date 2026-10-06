#!/usr/bin/env python3
"""3.5 插件有自己的主张：本节唯一的内容源，生成 lesson.js 与 script.md。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch03/tools/lessonkit.py。
Game Studio 实跑见 courseware/ch03/materials/mainline/run-v3.sh 与 reference/3.5-*；体积对比见 materials/bundle/。
"""
import json
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, MEASURED, chapter_map, repro, teach  # noqa: E402

lesson = Lesson(__file__, "3.5", "插件有自己的主张", summary="插件的默认和 Brief 冲突时由人按证据决定；停用插件不撤销它写的代码。")
scene, KICK = lesson.scene, lesson.kick

MAT = Path(__file__).resolve().parents[3] / "materials"
REF = MAT / "mainline" / "reference"
BRIEF = (MAT / "mainline" / "fixtures" / "brief-3.5.md").read_text().strip()
PROMPT = (MAT / "mainline" / "fixtures" / "prompt-3.5.txt").read_text().strip()
E = json.loads((REF / "3.5-summary.json").read_text()) if (REF / "3.5-summary.json").exists() else {}
RUN = "计划与改动来自排练（courseware/ch03/materials/mainline/run-v3.sh，基线为 3.3 修复后的 v1）。" + MEASURED


def li(items):
    return "".join(f'<li data-reveal="{r}"><span><b>{escape(t)}</b><small>{escape(s)}</small></span></li>' for r, t, s in items)


scene(
    id="p30", segment="开篇", layout="lesson-cover",
    label="插件会照我的意思做吗", title="插件会照我的意思做吗？", kicker="第 3 章 · 3.5 · 开篇",
    lead="它的默认和我们的 Brief，听谁的",
    html=(
        chapter_map(5) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="tool" data-reveal="1"><span class="p-tag" data-role="tool">插件的默认</span><p>2D 走 Phaser，除非用户另有要求</p></div>'
        '<div class="p-join" data-reveal="2"><span>?</span></div>'
        '<div class="p-box" data-role="us" data-reveal="2"><span class="p-tag" data-role="us">我们的 Brief</span><p>接进现有仓库；新依赖先说理由</p></div></div>'
    ),
    steps=["地图", "插件的默认", "我们的 Brief"],
    script=[
        "3.4 我们审过并装好了 Game Studio。这一节真的用它做第二个游戏。",
        "3.4 读到 Skill 原文里的一句：2D 游戏默认走 Phaser，除非用户另有要求。这是插件的主张。",
        "我们的 Brief 会写：接进现有仓库，新增依赖要先说理由。这两者会不会冲突？冲突时听谁的？这一节的转折来自插件原文，可以预期；判断留给我们。",
    ],
)

scene(
    id="p31", segment="Brief",
    label="第二个游戏要什么", title="Brief 写进仓库", kicker=KICK + "Brief",
    lead="这一次先写 Brief，放进仓库的 docs/briefs/。它会跟着仓库走，3.6 查规则来源时还会用到。",
    html=(
        '<div class="p-task" style="grid-template-columns:repeat(4,minmax(0,1fr))">'
        '<div class="p-box" data-reveal="0"><h3>玩法</h3><p>方向键移动；收集加分；碰障碍扣命；60 秒或三条命用完结束；可重开</p></div>'
        '<div class="p-box" data-reveal="1"><h3>素材</h3><p>只用几何图形或 CSS</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="2"><h3>约束</h3><p>接进现有仓库；不新建项目、不加路由、不做 3D；新依赖先说理由</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="3"><h3>完成标准</h3><p>build 成功；试玩由我做；记忆翻牌和首页不受影响</p></div></div>'
    ),
    repro=repro([("Brief 全文，存为 docs/briefs/CH03_DODGE_BRIEF.md", BRIEF)], label="Brief 原文"),
    steps=["玩法", "素材", "约束", "完成标准"],
    script=[
        "第二个游戏，60 秒躲避与收集。玩法：方向键移动，收集目标加分，碰到障碍扣一条命；60 秒倒计时结束或三条命用完，游戏结束，可以重开。",
        "素材只用几何图形或 CSS，不用图片和音频。",
        "约束最重要：接进现有的仓库和页面，不新建项目，不加路由，不做 3D；新增依赖要先说明理由。",
        "完成标准：build 成功，试玩由我们做，记忆翻牌和首页不受影响。这一次我们先把 Brief 写成文件，放进仓库的 docs/briefs。请暂停视频，写下你的 Brief。",
    ],
)

plan = E.get("plan", [])
plan_html = li(plan) if plan else '<li><span><b>（排练计划待补）</b></span></li>'
scene(
    id="p32", segment="插件的计划",
    label="Game Studio 给了什么计划", title="Game Studio 给了什么计划", kicker=KICK + "插件的计划",
    lead=E.get("plan_lead", "用 Game Studio 的 Skill 出计划，逐项对照 Brief。以排练实际计划为准。"),
    html=(
        '<div class="p-claim" style="grid-template-columns:minmax(0,1.1fr) minmax(0,1fr)">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">计划</span><ol class="p-notes" style="margin-top:8px">' + plan_html + '</ol></div>'
        '<ul class="p-checks">' + "".join(
            f'<li class="{"is-no" if not ok else ""}" data-reveal="{r}">{escape(t)}<small>{escape(s)}</small></li>' for r, t, s, ok in E.get("checks", [])
        ) + '</ul></div>'
        '<p class="source-note">' + RUN + '</p>'
    ),
    repro=repro([("装好插件后开新会话，发这段请求", PROMPT)], label="请求原文"),
    steps=E.get("plan_steps", ["计划", "对照 Brief"]),
    script=E.get("plan_script", ["（排练计划待补）", "（对照待补）"]),
    teaching=teach(("讲师提示", "以录制当天的真实计划为准。插件读了哪些 Skill 全文，可在请求记录里看到它读取 SKILL.md 的命令。")),
)

scene(
    id="p33", segment="插件的计划",
    label="要不要引擎", title="要不要引擎？2D 不等于更轻", kicker=KICK + "插件的计划",
    lead="在同一个首页上分别懒加载一个最小场景，只画一个方块：首页主包几乎不变，游戏分包差别很大。Phaser 是完整的游戏引擎，比 3D 方案还大约 30%。这个游戏只需要矩形、键盘和碰撞判断。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>方案</span><span>游戏分包（gzip）</span><span>新增依赖</span></div>'
        '<div data-reveal="0"><span>不用引擎（Canvas）</span><span>—</span><span>无</span></div>'
        '<div data-reveal="1"><span>Phaser 最小场景</span><span>332 kB</span><span>phaser</span></div>'
        '<div data-reveal="1"><span>React Three Fiber 最小场景</span><span>249 kB</span><span>three、@react-three/fiber</span></div></div>'
        '<div class="p-bar is-light" data-reveal="2">要不要多下载 300 多 kB，<b>由人按 Brief 决定</b></div>'
        '<p class="source-note">courseware/ch03/materials/bundle/：phaser 3.90.0、three 0.186.1、@react-three/fiber 9.8.1，Vite 构建，2026-10-06 一次运行；只测引入引擎本身，不是完整游戏</p>'
    ),
    steps=["基线", "两种引擎", "谁来决定"],
    script=[
        "插件的默认是 Phaser，要不要接受？先看一组数字。讲师在同一个首页上，分别懒加载一个最小场景，只画一个方块。不用引擎时，没有游戏分包，也没有新依赖。",
        "用 Phaser，游戏分包 gzip 后 332 kB；用 React Three Fiber 做 3D，是 249 kB。2D 不等于更轻：Phaser 是一个完整的游戏引擎，渲染、物理、输入、场景都带上了。首页主包因为懒加载，几乎没变。",
        "我们的游戏只需要几个矩形、键盘输入和碰撞判断，用浏览器自带的 Canvas 就能写。要不要为它多下载 300 多 kB？这不是插件替我们定的，是我们按 Brief 决定的：Brief 写了“新依赖先说理由”，这组数字就是理由要回答的问题。",
    ],
    repro=repro([("在课程仓库根目录，用一份记忆翻牌首页比较三种方案的构建产物", "courseware/ch03/materials/bundle/compare.sh <记忆翻牌首页目录>")], note="需要能访问 npm 仓库。"),
)

scene(
    id="p34", segment="试玩",
    label="做出来能玩吗", title="确认，执行，再由人试玩", kicker=KICK + "试玩",
    lead="按我们的决定确认计划，让它执行。试玩由人做，按 Brief 逐项过：移动、收集、碰撞、HUD、结束、重开。",
    html=(
        '<div class="p-handoff"><div class="p-handoff-card" data-reveal="0"><h3>确认计划</h3><p>按我们的技术选择执行</p><span class="p-env">同一会话</span><span class="p-env">workspace-write</span></div>'
        '<ol class="p-watch"><li data-reveal="1">移动与收集<small>方向键、WASD；分数增加</small></li>'
        '<li data-reveal="2">碰撞与 HUD<small>扣命；时间、分数、生命都显示</small></li>'
        '<li data-reveal="3">结束与重开<small>60 秒或三条命；重开后全部归零</small></li></ol></div>'
    ),
    steps=["确认", "移动与收集", "碰撞与 HUD", "结束与重开"],
    script=[
        "按我们的决定确认计划，让它执行。",
        "做完以后，试玩由我们做。按 Brief 逐项过：方向键和 WASD 都能移动，碰到目标分数增加。",
        "碰到障碍扣一条命；时间、分数、生命都显示在 HUD 上。",
        "60 秒到或者三条命用完，游戏结束；点重开，全部归零。再回去玩一局记忆翻牌，确认它没被影响。请暂停视频，试玩你的第二个游戏，按这张表记录。",
    ],
    teaching=teach(("讲师提示", "排练中执行结果见 reference/3.5-*；录制以当天为准。发现问题沿用 3.3 的流程，不顺手扩需求。")),
)

diff_items = E.get("review", [])
scene(
    id="p35", segment="评审",
    label="改动收不收", title="交回来的改动，收不收", kicker=KICK + "评审",
    lead="沿用 2.3：先看范围，再看内容。这一次多查三项：有没有新依赖；离开页面或组件卸载时，计时器、键盘监听和游戏实例有没有清理；首页和记忆翻牌有没有被改动。",
    html=(
        '<div class="p-term" data-reveal="0"><div class="dim">$ git diff --stat</div>' + "".join(f"<div>{escape(r)}</div>" for r in E.get("diffstat", ["（排练 diff 待补）"])) + '</div>'
        '<ul class="p-checks" style="margin-top:12px">' + "".join(
            f'<li class="{"is-no" if not ok else ""}" data-reveal="{r}">{escape(t)}<small>{escape(s)}</small></li>' for r, t, s, ok in diff_items
        ) + '</ul>'
        '<p class="source-note">' + RUN + '</p>'
    ),
    steps=E.get("review_steps", ["范围", "逐项"]),
    script=E.get("review_script", ["（评审待补）", "（评审待补）"]),
)

scene(
    id="p36", segment="停用",
    label="停用插件后还剩什么", title="停用插件后，还剩什么", kicker=KICK + "停用",
    lead="停用插件，开新会话：请求里不再有 game-studio 的 9 行。它写的代码还在仓库里，项目不依赖插件也要能构建、能玩。停用不等于撤销。",
    html=(
        '<div class="p-rec" style="grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);row-gap:10px;--rf:20px">'
        '<div class="is-head" data-reveal="0"><span>动作</span><span>结果</span></div>'
        '<div data-reveal="0"><span class="p-cell p-mono">enabled = false</span><span class="p-cell">plugin list：installed, disabled</span></div>'
        '<div data-reveal="1"><span class="p-cell">新会话的请求</span><span class="p-cell">game-studio 出现 0 次（装着时 12 次）</span></div>'
        '<div data-reveal="2"><span class="p-cell">仓库</span><span class="p-cell">第二个游戏的代码还在</span></div>'
        '<div data-reveal="3"><span class="p-cell p-mono">npm run build</span><span class="p-cell">成功；两个游戏和首页都能用</span></div></div>'
        '<p class="source-note">停用与请求检查在课程基线下实测（2026-10-06，materials/plugin/README.md）；卸载用 codex plugin remove，同样实测</p>'
    ),
    steps=["停用", "新会话", "代码还在", "没有插件也能跑"],
    script=[
        "最后一步：停用插件。把配置里它的 enabled 改成 false；plugin list 显示已安装、已停用。想彻底移除，就用 codex plugin remove 卸载。",
        "开一个新会话，看请求：game-studio 一次都没有出现。装着的时候，它出现了 12 次。",
        "可是它写的代码还在仓库里。停用插件，不等于撤销它做过的事。",
        "所以最后要证明：没有插件，项目也能构建、能玩。npm run build 成功，两个游戏和首页都能用。请暂停视频，停用插件，开新会话，再 build 一次。",
    ],
)

scene(
    id="p37", segment="小结",
    label="本节小结", title="插件的主张，我们的决定", kicker=KICK + "小结",
    lead="本节留下第二个游戏、插件计划与 Brief 的对照、评审结论，以及停用后的复验证据，写进 CH03_GAME_STUDIO_PLUGIN_LAB.md。Skill 是经验，不是规则。下一节：本章这些规则，下次 Codex 从哪里知道？",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">三样东西</h3>'
        '<ul class="p-exits" style="gap:10px"><li class="is-point">插件的主张：默认 Phaser</li><li class="is-point">我们的决定：按 Brief 和数字</li><li class="is-point">留下的证据：计划、diff、停用复验</li></ul></div>'
        '<div data-reveal="1"><h3 style="text-align:center">一句话</h3><div class="p-star" style="width:240px;font-size:22px">停用<br>≠ 撤销</div></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>3.6 说明在哪</h3><p>下次 Codex 从哪里知道？</p></div></div></div>'
    ),
    steps=["三样东西", "一句话", "下一节"],
    script=[
        "这一节有三样东西：插件的主张，2D 默认 Phaser；我们的决定，按 Brief 和数字来；留下的证据，计划、diff 和停用后的复验。",
        "一句话：停用插件不等于撤销它写的代码，项目没有插件也要能跑。",
        "到这里，这一章已经定下了好几条规则：有 AI 定的，有我们定的，有插件带来的。下一节问：下次开新会话，Codex 从哪里知道它们？",
    ],
    teaching=teach(("跟做产出", "第二个游戏；CH03_GAME_STUDIO_PLUGIN_LAB.md 中的插件计划对照、技术选择及理由、评审结论、停用与无插件复验证据。")),
)

lesson.write()

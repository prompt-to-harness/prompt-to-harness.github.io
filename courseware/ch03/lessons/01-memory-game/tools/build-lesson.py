#!/usr/bin/env python3
"""3.1 一句话加一个记忆翻牌：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch03/tools/lessonkit.py。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, MEASURED, chapter_map, repro, teach  # noqa: E402

# 落后时进入第 3 章的追赶 Prompt：与 materials/catchup 的实验同一份，代入参考起点（ch03-start-v1 尚未发布）
CATCHUP_PROMPT = (Path(__file__).resolve().parents[3] / "materials/catchup/prompt-ch03.txt").read_text().strip() \
    .replace("{URL}", "https://github.com/prompt-to-harness/course-starter.git").replace("{TAG}", "ch03-start-v1")

lesson = Lesson(__file__, "3.1", "一句话加一个记忆翻牌", summary="一句话就能加出一个能玩的游戏；能玩是起点，不是验收。")
scene = lesson.scene

RUN = "画面中的计划与改动来自排练第 8 轮（courseware/ch03/materials/mainline/run-v2.sh）。" + MEASURED

PROMPT = (
    "在主页加入一个记忆翻牌小游戏。\n"
    "先告诉我你的计划；有需要我决定的问题，最多问三个，每个问题附上你推荐的做法。我确认后再改。\n"
    "完成标准：你跑 build 成功；浏览器里的试玩和三种宽度的检查由我来做，你不用自己打开浏览器。"
)

# ---------- 开篇 ----------
scene(
    id="p01", segment="开篇", layout="lesson-cover",
    label="一句话，能加出一个小游戏吗", title="一句话，能加个游戏吗？",
    lead="本章把首页变成能玩两个小游戏的实验室",
    html=(
        chapter_map(1) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">3.1–3.3</span><h3>记忆翻牌</h3><p>一句话需求 · 普通 Vibe Coding</p></div>'
        '<div class="p-join" data-reveal="2"><span>再加一个</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="tool" data-reveal="2"><span class="p-tag" data-role="tool">3.4–3.5</span><h3>60 秒躲避与收集</h3><p>用 Game Studio 插件</p></div></div>'
        '<div class="p-bar is-light" data-reveal="3">贯穿全章的问题：<b>这条规则是谁定的？</b></div>'
    ),
    repro=repro([
        ("先在自己的仓库里保存当前的工作（没有改动时会提示无可提交，不影响）", "git add -A && git commit -m \"保存：开始第 3 章之前\""),
        ("在仓库根目录启动 Codex，粘贴这段 Prompt", CATCHUP_PROMPT),
        ("Codex 可能申请联网克隆参考起点、在临时目录里试构建。看清整条命令作用在哪个目录，只动临时目录的再同意；不要选“以后不再问”", None),
        ("读它的逐条判断，只确认补齐前提所必需的改动", "只做补齐第 3 章前提所必需的改动，可选的建议先不做；我的个人内容、仓库名和已有的决定保持不变。我的 GitHub 仓库名是 <你的仓库名>，Vite 的 base 按 2.4 的写法用它。改完告诉我需要我运行哪些命令。"),
        ("构建并在浏览器里看一遍首页；需要发布时按 2.4 的步骤推送", "npm install && npm run build && npm run preview"),
        ("核对无误后提交", "git add -A && git commit -m \"对照 ch03-start-v1 补齐第 3 章前提\""),
    ], note="没做完第 2 章、或想直接从第 3 章开始时用。参考起点 ch03-start-v1 要等第 2 章录制版发布后制作，目前还不存在；讲师 2026-10-06 用本地草案在两种起点上试过（courseware/ch03/materials/catchup/）。", label="从这一章开始？"),
    steps=["本章地图", "第一个游戏", "第二个游戏", "贯穿的问题"],
)

scene(
    id="p02", segment="写请求",
    label="这一次的请求", title="这一次只写一句话",
    lead="刻意不写规格，先体验 Vibe Coding 的速度。但保留两个习惯：先给计划、问题最多三个；完成标准写清分工：build 由 Codex 跑，试玩由我们做（沿用 2.2 p29）。",
    html=(
        '<div class="p-prompt">'
        '<div class="p-seg" data-key="goal" data-reveal="0"><b>Goal</b>在主页加入一个记忆翻牌小游戏</div>'
        '<div class="p-seg" data-key="limit" data-reveal="1"><b>Constraints</b>先给计划；需要我决定的最多问三个，附上推荐做法；我确认后再改</div>'
        '<div class="p-seg" data-key="done" data-reveal="2"><b>Done when</b>你跑 build 成功；试玩和三种宽度由我检查，你不用自己打开浏览器</div></div>'
        '<div class="p-bar is-light" data-reveal="3">没写的：<b>玩法细节、计分、出错时怎么办</b></div>'
    ),
    repro=repro([("把这段请求发给 Codex（新会话）", PROMPT)], label="请求原文"),
    steps=["一句话", "先给计划", "完成标准", "没写的"],
    teaching=teach(
        ("备课参考", "排练第 1–4 轮的需求句没有 Done when，执行 8–22 分钟，每轮有 4–10 条自行验证浏览器的命令；加上后重跑的第 5–8 轮都被上游错误中断，改句效果尚无有效数据（materials/mainline/README.md）。"),
    ),
)

scene(
    id="p03", segment="写请求",
    label="它问了什么，又定了什么", title="它问了什么，又自己定了什么",
    lead="Codex 的三个问题都是外观和位置；游戏怎么运转的规则，它在计划里自己定了，没有问。先记下来，3.2 回来查。",
    html=(
        '<div class="p-claim" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">问了我们</span>'
        '<ol class="p-notes" style="margin-top:10px"><li><span><b>卡面用什么</b><small>推荐：主页上的中文短词</small></span></li>'
        '<li><span><b>难度</b><small>推荐：固定 6 对 12 张</small></span></li>'
        '<li><span><b>放哪、怎么进</b><small>推荐：项目区下方，首屏加次级链接</small></span></li></ol></div>'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">没问，自己定了</span>'
        '<ol class="p-notes" style="margin-top:10px"><li><span><b>翻错 900ms 后自动翻回</b><small>期间锁住输入</small></span></li>'
        '<li data-reveal="2"><span><b>步数、计时、最佳成绩</b><small>步数怎么算？计划里没写</small></span></li></ol></div></div>'
        '<p class="source-note">' + RUN + '</p>'
    ),
    steps=["它问的", "它定的", "没写的"],
    teaching=teach(
        ("备课参考", "排练 8 轮中，第 1–4 轮有 3 轮把“等待翻回期间锁输入”写在计划里但没当作问题问人（其中一轮列在“我自行定的默认”下），1 轮计划里没写、代码照样加锁。录制时以当天的真实计划为准。"),
    ),
)

scene(
    id="p04", segment="让它动手",
    label="确认后它做了什么", title="把选择交给它，本身就是一个决定",
    lead="确认语是“问题都按你推荐的做法处理”。这样回答很常见，也很快；记住它的含义：三个问题的答案，也是 AI 定的。",
    html=(
        '<div class="p-handoff"><div class="p-handoff-card" data-reveal="0"><h3>回复计划</h3><p class="p-mono" style="font-size:20px">确认，按计划执行；你问的问题都按你推荐的做法处理</p>'
        '<span class="p-env">同一会话</span><span class="p-env">workspace-write</span></div>'
        '<ol class="p-watch"><li data-reveal="1">改了哪些文件<small>预期：一个游戏组件、它的样式、App.tsx 挂载</small></li>'
        '<li data-reveal="2">有没有新依赖<small>看 package.json 有没有变</small></li>'
        '<li data-reveal="3">build 成功了吗<small>Codex 跑，回答里要有结果</small></li></ol></div>'
    ),
    steps=["确认", "改了哪些文件", "新依赖", "build"],
)

scene(
    id="p05", segment="让它动手",
    label="交回来的是什么", title="交回来的是什么",
    lead="两个新文件、一处修改，没有新依赖，build 成功。打开页面，翻牌、配对、重开都能用，首页原样。能玩了。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:16px;align-items:start">'
        '<div><div class="p-term" data-reveal="0" data-copy="git status --short"><div class="dim">$ git status --short</div><div> M src/App.tsx</div><div>?? src/components/</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:8px"><div class="dim">$ npm run build</div><div class="ok">✓ built</div></div>'
        '<ul class="p-checks" style="margin-top:12px" data-reveal="2"><li>没有新依赖<small>package.json 没变</small></li><li>首页原样<small>项目区三条经历都在</small></li></ul></div>'
        '<div class="p-page" data-reveal="1"><img src="../02-rules/evidence/run8-start.png" alt="记忆翻牌初始画面：12 张背面朝上的绿色卡片，上方显示步数 0、用时 0:00、剩余 6/6 对" style="display:block;width:100%"></div></div>'
        '<p class="source-note">' + RUN + ' src/components/ 下是 MemoryGame.tsx 与 memory-game.css。</p>'
    ),
    steps=["改了什么", "能构建、能打开", "没碰别的"],
    teaching=teach(
        ("讲师提示", "这里只玩几下，不要完整打完一局：讲师这一份实现一局打不完，3.2 的“完整打完一局”才揭示。录制时以当天实现为准，不预设有没有缺陷。"),
    ),
)

scene(
    id="p06", segment="小结",
    label="本节小结", title="能玩了，然后呢",
    lead="本节留下记忆翻牌 v0：能翻、能配对、能重开，build 成功。照 2.3 的做法，代码和记录分两次提交；记录里写下请求、它问的三个问题和它自己定的规则。“能玩”是起点，不是验收。下一节：换几种玩法试试。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">一个判断</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">能玩<br>≠ 验收</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:12px"><li class="is-pass">记忆翻牌 v0 提交</li><li class="is-pass">记录：它问的、它定的</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>3.2 谁定的规则</h3><p>第二张还没翻回去，我又点了第三张</p></div></div></div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
    teaching=teach(("跟做产出", "记忆翻牌 v0 的代码提交与记录提交；记录里有请求、三个问题与回答、它自己定的规则。")),
)

lesson.write()

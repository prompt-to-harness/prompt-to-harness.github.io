#!/usr/bin/env python3
"""3.7 重开时，还有什么要清理：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch03/tools/lessonkit.py。
预备版本与核对见 courseware/ch03/materials/prepared/README.md。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, repro, teach  # noqa: E402

lesson = Lesson(__file__, "3.7", "重开时，还有什么要清理", summary="界面重置不等于资源重置；谁创建计时器和实例，谁负责清理。")
scene = lesson.scene

PREP = "教学预备版本：在 3.3 修复后的记忆翻牌上删掉一行清理代码（courseware/ch03/materials/prepared/stale-timer.diff），2026-10-06 用脚本核对一次。不是自然出现的缺陷。"

scene(
    id="p45", segment="开篇", layout="lesson-cover",
    label="重开时什么被重置了", title="点“重新开始”，什么被重置了？",
    lead="看得见的归零了，看不见的呢",
    html=(
        chapter_map(7) +
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:18px">'
        '<div class="p-box" data-role="ok" data-reveal="1"><span class="p-tag" data-role="ok">看得见的</span><p>牌面、步数、用时、提示</p></div>'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="2"><span class="p-tag" data-role="gate">看不见的</span><p>还在倒数的计时器 · 事件监听 · 游戏实例</p></div></div>'
    ),
    steps=["地图", "看得见的", "看不见的"],
)

scene(
    id="p46", segment="我们的实现",
    label="我们的实现有这个问题吗", title="我们的实现，其实都清理了",
    lead="排练的 6 份实现，重开时都清理了计时器。为了看清没清理会怎样，我们用一份明确标注的预备版本：在修复后的记忆翻牌上删掉一行。这不是自然出现的事故。",
    html=(
        '<div class="p-code" data-reveal="0"><div class="p-code-head"><span>有计时器清理 · 等待翻回的 effect</span></div>'
        '<pre><span style="display:block">const timer = window.setTimeout(() =&gt; { …翻回、清空“已翻开” }, 900)</span>'
        '<span class="hl">return () =&gt; window.clearTimeout(timer)   // 清理</span></pre></div>'
        '<div class="p-code" data-reveal="1" style="margin-top:12px"><div class="p-code-head"><span>教学预备版本（未清理计时器）</span><span>−1 行</span></div>'
        '<pre><span style="display:block">window.setTimeout(() =&gt; { …翻回、清空“已翻开” }, 900)</span>'
        '<span class="del">-return () =&gt; window.clearTimeout(timer)</span></pre></div>'
        '<p class="p-links" data-reveal="1" style="margin-top:12px"><a href="../../practice/memory-v1/index.html" target="_blank" rel="noopener">试玩有清理的版本</a><a href="../../practice/memory-stale-timer/index.html" target="_blank" rel="noopener">试玩未清理的教学预备版本</a></p>'
        '<p class="source-note">' + PREP + '</p>'
    ),
    steps=["计时器清理", "教学预备版本"],
    teaching=teach(("讲师提示", "画面和口播都要说明“教学预备”；不把它说成现场发现。")),
)

scene(
    id="p47", segment="时间线",
    label="旧计时器做了什么", title="先预测，再看：旧计时器做了什么",
    lead="翻错 → 计时器开始倒数 → 立刻重开 → 新一局翻开一张 → 900ms 到，旧回调执行：它清空的是新一局的“已翻开”记录 → 再翻一张，游戏不再比较这两张，它们一直朝上。",
    html=(
        '<div class="p-flow" style="--n:5;font-size:18px">'
        '<div class="p-node" data-reveal="0"><b>0 ms</b><small>翻错，计时器开始</small></div>'
        '<div class="p-node" data-role="us" data-reveal="0"><b>约 50 ms</b><small>点重开</small></div>'
        '<div class="p-node" data-reveal="1"><b>约 100 ms</b><small>新一局翻开第 1 张</small></div>'
        '<div class="p-node" data-role="gate" data-reveal="2"><b>900 ms</b><small>旧回调：清空“已翻开”</small></div>'
        '<div class="p-node" data-role="gate" data-reveal="3"><b>之后</b><small>翻第 2 张：两张一直朝上</small></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px" data-reveal="3">'
        '<div class="p-box is-soft" data-role="ok"><h3>有计时器清理</h3><p>“不是一对”，两张翻回</p></div>'
        '<div class="p-box is-soft" data-role="gate"><h3>教学预备：未清理</h3><p>两张一直朝上，提示不变</p></div></div>'
    ),
    steps=["翻错后重开", "新一局翻一张", "旧回调", "结果"],
    repro=repro([
        ("在课程仓库根目录，基于修复后的记忆翻牌做出教学预备版本并构建", "cp -R <记忆翻牌 v1 目录> lab-runs/ch03-prepared && cd lab-runs/ch03-prepared\ngit apply ../../courseware/ch03/materials/prepared/stale-timer.diff && npm ci && npm run build && cd ../.."),
        ("按“翻错 → 重开 → 翻一张 → 等 1.2 秒 → 再翻一张”核对每一刻的牌面", "uv run courseware/ch03/materials/prepared/stale-timer-check.py lab-runs/ch03-prepared"),
    ], note="命令中的 <记忆翻牌 v1 目录> 指 3.3 修复后的记忆翻牌目录；对照时把同一条核对命令用在有清理的版本上。"),
)

scene(
    id="p48", segment="清理责任",
    label="还有什么要清理", title="谁创建，谁清理",
    lead="状态是数据，重开时归零就行；副作用是正在运行的东西：计时器、事件监听、动画帧、观察器、游戏引擎实例。它们由谁创建，就由谁在结束或重来时清理。3.5 的躲避游戏里，帧循环和尺寸观察器都在组件卸载时清理了。",
    html=(
        '<div class="p-set" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">'
        '<div class="p-item" data-reveal="0"><b>计时器</b> · setTimeout / setInterval → clearTimeout</div>'
        '<div class="p-item" data-reveal="1"><b>事件监听</b> · addEventListener('"'"'keydown'"'"') → removeEventListener</div>'
        '<div class="p-item" data-reveal="1"><b>动画帧</b> · requestAnimationFrame → cancelAnimationFrame</div>'
        '<div class="p-item is-picked" data-reveal="2"><b>3.5 的躲避游戏</b> · cancelAnimationFrame、observer.disconnect()；用引擎时还有 game.destroy()</div></div>'
        '<div class="p-bar is-light" data-reveal="3">界面重置 ≠ <b>资源重置</b></div>'
    ),
    steps=["计时器", "监听与动画帧", "3.5 的游戏", "一句话"],
)

scene(
    id="p49", segment="本章收尾",
    label="本章小结", title="第 3 章：能玩，以及能玩背后的规则",
    lead="本章交付：两个可玩、已发布的游戏；状态图与问题清单；一次复现、调查、定规则、修复、复验的闭环；插件审查与生命周期证据；信息来源表与需求债务清单；本节的清理判断。下一章：换一个真实的开源项目，用规格把决定写下来。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3>本章交付</h3><ul class="p-exits" style="gap:8px;font-size:18px">'
        '<li class="is-pass">两个游戏，已发布</li><li class="is-pass">缺陷闭环与两条规则</li><li class="is-pass">插件审查与停用证据</li><li class="is-pass">需求债务清单</li></ul></div>'
        '<div data-reveal="1"><h3 style="text-align:center">一个问题</h3><div class="p-star" style="width:260px;font-size:22px">这条规则<br>是谁定的？</div></div>'
        '<div class="p-next" data-reveal="2"><h3>第 4 章</h3><div class="p-box" data-role="us"><h3>SDD</h3><p>为 JSON Diff 建立可执行规格</p></div></div></div>'
        '<p class="p-links" data-reveal="2" style="margin-top:12px"><a href="../../practice/homepage-v2/index.html" target="_blank" rel="noopener">试玩讲师的本章成品</a></p>'
    ),
    steps=["交付", "贯穿的问题", "下一章"],
    teaching=teach(("跟做产出", "在 CH03_MEMORY_GAME.md 的缺陷记录中补充：重开前后需要清理的资源、预测与核对结果；运行 production build 并更新公开版本。")),
)

lesson.write()

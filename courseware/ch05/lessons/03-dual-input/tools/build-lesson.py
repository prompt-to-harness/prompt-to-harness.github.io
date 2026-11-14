#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.3 一边输入错了，已经得到的结果怎么办：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch05/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p26、p27 先占位，待备课实跑后再写。不预写 Agent 回答或运行结果。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, pop  # noqa: E402

lesson = Lesson(
    __file__, "5.3", "一边输入错了，已经得到的结果怎么办",
    summary="先用同一组嵌套素材做一次正常比较，立住两侧输入和一张结果图，再看一侧输入出错时，错误状态和上次成功结果是两件事，错误不能把已有结果冲掉。",
)
scene = lesson.scene

JSON_BEFORE = '{"user":{"name":"Lin","age":20},"active":true}'
JSON_AFTER = '{"user":{"name":"Lin","age":21},"role":"student"}'
JSON_INVALID_BEFORE = '{"user": }'

# 同一张能表达状态的合并图（课程自绘示意，图的内容来自已经完成的映射）
TREE_MERGE = (
    '<ul class="p-tree">'
    '<li class="is-open"><span class="p-path">user</span><span class="p-note">unchanged · 下面有变化</span>'
    '<ul>'
    '<li><span class="p-path">name: Lin</span></li>'
    '<li class="is-target"><span class="p-path">age: 20 → 21</span><span class="p-note">changed</span></li>'
    '</ul></li>'
    '<li class="is-block"><span class="p-path">active: true</span><span class="p-note">removed</span></li>'
    '<li class="is-allow"><span class="p-path">role: student</span><span class="p-note">added</span></li>'
    '</ul>'
)


def input_box(label, payload, error=False):
    """课程自绘的输入位置示意，不固化产品布局。"""
    err = " is-error" if error else ""
    role = 'gate' if error else 'ink'
    tag = '<span class="p-tag" data-role="gate">出错侧</span>' if error else ""
    return (
        f'<div class="p53-field{err}" data-role="{role}"><div class="p53-field-head"><h3>{label}</h3>{tag}</div>'
        f'<pre>{payload}</pre></div>'
    )


# ---------- 开篇 ----------
scene(
    id="p21", segment="开篇", layout="lesson-cover",
    label="一边输入错了，已经得到的结果怎么办", title="已经得到的结果怎么办？",
    lead="前两节留下了已验证的差异模型和合并图映射，网页里还不能同时输入两份 JSON。这一节要回答：一边输入错了，已经得到的结果怎么办？",
    html=(
        chapter_map(3)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">5.1、5.2 留下：<b>已验证的差异模型和合并图映射</b>；网页里还不能同时输入两份 JSON</div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节要留下：可操作的双输入和错误路径，并更新 <code>CH05_IMPLEMENTATION.md</code></div>'
    ),
    steps=["本章位置", "5.1、5.2 留下什么", "本节要留下什么"],
)


# ---------- 已经得到的结果 ----------
scene(
    id="p22", segment="已经得到的结果",
    label="一次正常比较，界面上要同时看见什么", title="一次正常比较，界面上要同时看见什么？",
    lead="先不要讲错误处理。用同一组 fixtures/nested 做一次正常比较，把两侧输入和一张结果图立住，作为后面对照的「已经得到的结果」。",
    html=(
        '<style>'
        '#p22 .p22-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;margin-top:8px;align-items:stretch}'
        '#p22 .p22-inputs{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:stretch;min-width:0}'
        '#p22 .p53-field,#p22 .p22-result{display:flex;flex-direction:column;min-width:0;height:100%;box-sizing:border-box}'
        '#p22 .p53-field{border:1px solid var(--p-rule);border-radius:12px;padding:10px 12px;background:var(--p-card)}#p22 .p53-field-head .p-tag{margin:0}'
        '#p22 .p53-field-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px}'
        '#p22 .p53-field h3,#p22 .p22-result h3{font-size:18px;margin:0}'
        '#p22 .p53-field pre{margin:0;flex:1;font-family:var(--p-mono);font-size:15px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}'
        '#p22 .p22-result .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p22 .p-tree li{padding:1px 0}#p22 .p-tree ul{padding-left:24px;margin-left:8px}'
        '</style>'
        '<div class="p22-row">'
        '<div data-reveal="0"><h3 style="font-size:20px;margin:0 0 8px">两个可编辑输入</h3>'
        '<div class="p22-inputs">'
        + input_box("Before", JSON_BEFORE) + input_box("After", JSON_AFTER)
        + '</div></div>'
        '<div class="p22-result" data-reveal="1"><h3 style="font-size:20px;margin:0 0 8px">一张结果图</h3>'
        + TREE_MERGE
        + '<div class="p-bar is-light" style="margin-top:10px">差异数 <b>3</b> · <code>/active</code>、<code>/role</code>、<code>/user/age</code></div>'
        '</div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">输入 → 解析 → 已有模型与映射 → 更新界面；UI 只调用已有逻辑，不复制算法</div>'
        '<p class="source-note">输入区为课程自绘示意，不固化布局；结果图用来对照要看见的内容，不是产品界面</p>'
    ),
    steps=["两侧输入", "一张结果图", "输入怎样变成界面"],
)

scene(
    id="p23", segment="已经得到的结果",
    label="一边输入错了，已经得到的结果怎么办", title="一边输入错了，已经得到的结果怎么办？",
    lead="有了已经得到的结果图，再把 Before 改成非法 JSON。请对照「被清空成空状态」和「错误和结果分开」。这一页把现象讲清，不展开实现细节。",
    html=(
        '<style>'
        '#p23 .p23-input{margin-top:4px}'
        '#p23 .p53-field{border:1px solid var(--p-rule);border-radius:12px;padding:10px 14px;background:var(--p-card);max-width:420px}'
        '#p23 .p53-field.is-error{border-color:var(--c);background:var(--cl)}'
        '#p23 .p53-field-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px}'
        '#p23 .p53-field-head .p-tag{margin:0}'
        '#p23 .p53-field h3{font-size:18px;margin:0}'
        '#p23 .p53-field pre{margin:0;font-family:var(--p-mono);font-size:18px;line-height:1.45}'
        '#p23 .p23-row{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:14px;align-items:stretch}'
        '#p23 .p23-col{display:flex;flex-direction:column;min-width:0}'
        '#p23 .p23-col h3{font-size:20px;margin:0 0 8px}'
        '#p23 .p23-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;min-height:168px;border:1.5px dashed var(--p-rule);border-radius:12px;color:var(--p-muted);font-size:20px;padding:16px}'
        '#p23 .p23-col .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p23 .p-tree li{padding:1px 0}#p23 .p-tree ul{padding-left:24px;margin-left:8px}'
        'body[data-mode="slides"] #p23 .scene-content{top:220px;height:440px;gap:10px}'
        'body[data-mode="slides"] #p23 .p53-field{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 12px}'
        'body[data-mode="slides"] #p23 .p53-field-head{margin:0}'
        'body[data-mode="slides"] #p23 .p53-field pre{padding:6px 12px}'
        'body[data-mode="slides"] #p23 .p23-row{margin-top:0}'
        'body[data-mode="slides"] #p23 .p23-col .p-bar{padding:8px 12px;font-size:18px;line-height:1.4}'
        'body[data-mode="slides"] #p23 .p23-col .p-tree{line-height:1.3}'
        'body[data-mode="slides"] #p23 .scene-content>.p-bar{margin-top:0!important;padding:8px 12px;font-size:20px;line-height:1.4}'
        '</style>'
        '<div class="p23-input" data-reveal="0">'
        + input_box("Before", JSON_INVALID_BEFORE, error=True)
        + '</div>'
        '<div class="p23-row">'
        '<div class="p23-col" data-reveal="1"><h3>被清空成空状态</h3>'
        '<div class="p23-empty">上次结果消失</div></div>'
        '<div class="p23-col" data-reveal="2"><h3>错误和结果分开</h3>'
        '<div class="p-bar is-light" style="margin-bottom:10px">错误提示指向 <b>Before</b></div>'
        + TREE_MERGE
        + '<div class="p-bar is-light" style="margin-top:10px">合并图仍在，差异数仍为 <b>3</b></div></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">错误状态和上次成功结果是两件事，错误不能把已有结果冲掉</div>'
        '<p class="source-note">非法输入来自 docs/specs/fixtures/error/invalid-before.json；对照为课程自绘示意，不是产品界面</p>'
    ),
    steps=["Before 改成非法 JSON", "被清空成空状态", "错误和结果分开"],
)

scene(
    id="p24", segment="已经得到的结果",
    label="本节要检查到哪一步，才算双输入和错误路径做完", title="本节要检查到哪一步，才算双输入和错误路径做完？",
    lead="这一页先说明本节还要核对的错误路径，先不下完成结论。本节检查的是可操作的双输入和错误恢复，不是整功能验收。",
    html=(
        '<div class="p-grid" style="--n:2">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">首次即出错</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">空状态，提示指向 Before</h3>'
        '<p>从未成功比较过，界面上不能出现比较结果</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">After 侧出错</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">提示指向 After</h3>'
        '<p>不能同时把 Before 说成出错方</p></div></div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:14px">恢复成合法的 nested 输入后，结果按<b>当前两侧</b>更新，不停留在上一轮错误或旧结果上</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px">「只看变化」、摘要、超限提示和 360px 正式走查属于 <b>5.4</b>；差异数仍能读到，不等于摘要区已经完成</div>'
        '<p class="source-note">期望表放到看完检查之后再完整对照；编号以当前规格基线的实际文件为准</p>'
    ),
    steps=["还要核对的错误路径", "恢复合法输入后要更新", "摘要和筛选留给 5.4"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p25", segment="怎样发出请求",
    label="怎样让 Agent 只完成双输入和错误恢复，不顺手做筛选", title="怎样让 Agent 只完成双输入和错误恢复，不顺手做筛选？",
    lead="有了要核对的界面范围，再确定这次怎么让 Agent 只完成双输入和错误恢复。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
    html=(
        '<div class="p-grid" style="--n:3">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">起点</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">接着 5.2 的功能分支</h3>'
        '<p>核对模型与映射仍在，工作区可继续</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">验证</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">lint，再走查网页</h3>'
        '<p>按错误路径走查，并用 <code>?json=</code> 与导入弹窗做单输入回归；不引入测试框架</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2"><span class="p-tag" data-role="agent">请求要素</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">任务、案例和允许范围</h3>'
        '<p>输入是已验证的模型与映射；产出可操作的双输入和错误恢复</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">允许新增两份输入区、独立 Diff 状态和 Diff 视图分支；不改 <code>useJson</code> 与单输入链路，也不改既有 Graph / Tree / 导入 / <code>?json=</code> / widget。不要把「只看变化」、摘要、超限或 360px 走查当作本节完成条件</div>'
        + '<div style="margin-top:12px" data-reveal="2">'
        + pop(
            "演示请求草案（按自己的规格调整）",
            "一份请求草案",
            '<p style="margin:0 0 8px">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p>'
            '<p style="margin:0 0 8px">要写清：只完成当前的双输入与错误状态任务；输入是已验证的差异模型和图映射；用 <code>nested</code> 和 <code>error</code> 素材在界面上核对正常比较、出错后保留上次结果、首次出错、After 侧出错和恢复后更新，不要用正在实现的界面逻辑生成期望；然后运行 <code>pnpm --filter www run lint</code>，再启动 <code>pnpm dev:www</code> 走查，并用 <code>?json=</code> 与导入弹窗各走一次。执行比较时可以打开网络面板，核对比对请求里不出现这两份 JSON 的内容；不要切换「只看变化」，也不要把摘要、超限提示或 360px 走查作为这次的完成条件。</p>'
            '<p style="margin:0">布局与输入方式仍是未决项，不要固化。第 6 章才会批准「明确提示当前图是上次有效结果」，不要把该提示设为必做，也不要刻意移除已经有的等价行为。</p>',
        )
        + '</div>'
    ),
    steps=["确定起点", "怎样验证", "请求里要写清什么"],
)


def pending(pid, segment, question, note):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html=f'<div class="p-bar is-light" data-reveal="0">{note}</div>',
        steps=["待演练后制作"],
    )


pending(
    "p26", "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "待备课实跑后再写；不预写 Agent 回答",
)


# ---------- 完成边界 ----------
pending(
    "p27", "完成边界",
    "怎样判断双输入和错误路径做到了完成边界？",
    "待备课实跑后再写；不预写运行结果",
)

scene(
    id="p28", segment="完成边界",
    label="一侧输入非法时，错误状态与上次成功结果各由什么证据确认",
    title="一侧输入非法时，错误状态与上次成功结果各由什么证据确认？",
    lead="一侧输入非法时，错误状态与上次成功的比较结果各由什么证据确认？请先判断，再看要核对的对象。这是本节的学员判断，先不要下结论。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">一侧输入非法时，错误状态与上次成功结果各由什么证据确认？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:14px">要看页面和刚才的输入操作：错误提示指向哪一侧；上次结果是否仍在——合并图还在，差异数仍为 <b>3</b>，没有变成空状态</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:10px">只看 Agent 回复或一次正常路径，还不够；筛选、摘要和窄屏留给 5.4</div>'
        '<p class="source-note">期望以当前规格基线的实际文件为准</p>'
    ),
    steps=["先判断", "错误和结果各看什么", "只看回复还不够"],
)


# ---------- 自检与交接 ----------
scene(
    id="p29", segment="自检与交接",
    label="刚打开页面、还从未成功比较过，一侧输入就非法，这两种做法哪样对",
    title="刚打开页面、还从未成功比较过，一侧输入就非法，这两种做法哪样对？",
    lead="刚打开页面、还从未成功比较过，一侧输入就非法。这一问和上一页「成功后再出错」不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div>'
        '<h3>界面上还可以留着某次演示用过的旧结果</h3>'
        '<div data-reveal="1"><p>不对。此时没有可保留的上次结果，不能拿别的结果来充数</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        '<h3>此时没有历史结果，应显示空状态和指向出错侧的提示，不能拿别的结果来充数</h3>'
        '<div data-reveal="2"><p>对。首次出错和「成功后再出错」不是同一件事</p></div></div></div>'
        '</div>'
        '<p class="source-note">教学对照，不是某一次实际运行</p>'
    ),
    steps=["两种做法", "第一种", "第二种"],
)

scene(
    id="p30", segment="自检与交接",
    label="带着什么进入 5.4", title="带着什么进入 5.4？",
    lead="实现可以与讲师不同，但要能解释固定输入、预期、实际界面和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.4。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3>'
        '<div class="p-star" style="width:280px;font-size:22px">错误和上次结果是两件事<br>错误不能把已有结果冲掉</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">可操作的双输入和错误路径</li>'
        '<li class="is-pass">更新后的 CH05_IMPLEMENTATION.md</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>5.4 整体验收</h3>'
        '<p>再补上摘要与筛选，对照整组验收判断整个功能有没有做完</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()

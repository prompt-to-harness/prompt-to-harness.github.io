#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.3 一边输入错了，已经得到的结果怎么办：页面源，生成 lesson.js。"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import (  # noqa: E402
    Lesson,
    cover_handoff,
    diff_arch,
    json_card,
    pending,
    pop,
    quiz_cards,
    sketch_recap,
    sym_badge,
)

lesson = Lesson(
    __file__,
    "5.3",
    "一边输入错了，已经得到的结果怎么办",
    summary="先用同一组嵌套素材做一次正常比较，立住两侧输入和一张结果图，再看一侧输入出错时，错误状态和上次成功结果是两件事，错误不能把已有结果冲掉。",
    prep=[
        "确认教学副本处于同一功能分支，TASK-01 模型与 TASK-02 合并图映射已完成且共享包已 build",
        "准备启动 pnpm dev:www 本地服务，编辑器定位 docs/specs/TASKS.md（TASK-03）与 fixtures/error/",
    ],
)
scene = lesson.scene

NESTED_BEFORE = [
    "{",
    '  "user": { "name": "Lin", "age": 20 },',
    '  "active": true',
    "}",
]

NESTED_AFTER = [
    "{",
    '  "user": { "name": "Lin", "age": 21 },',
    '  "role": "student"',
    "}",
]

TREE_MERGE = (
    '<ul class="p-tree ch5-tree">'
    f'<li class="is-open"><span class="p-path">user</span>{sym_badge("anc")}'
    "<ul>"
    '<li><span class="p-path">name: Lin</span></li>'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg")}</li>'
    "</ul></li>"
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add")}</li>'
    "</ul>"
)


# ---------- 开篇 ----------
scene(
    id="p21",
    segment="开篇",
    layout="lesson-cover",
    label="一边输入错了，已经得到的结果怎么办",
    title="已经得到的结果怎么办？",
    lead="模型与合并图数据已就绪；这一节在网页接入双输入，处理单侧输入报错",
    html=cover_handoff(
        3,
        "5.1–5.2 已就位",
        "共享包已有差异模型与合并图映射",
        "底层比较与图数据已打通，但网页版尚无双输入视图",
        "5.3 完成后留下",
        [
            "可编辑的 Before / After 双输入视图",
            "独立 Diff 状态与单侧报错保留结果路径",
            "更新后的 <code>CH05_IMPLEMENTATION.md</code>",
        ],
    ),
    steps=["本章位置", "5.1–5.2 已就位", "本节要留下什么"],
)


# ---------- 已经得到的结果 ----------
scene(
    id="p22",
    segment="已经得到的结果",
    label="一次正常比较，界面上要看见什么",
    title="一次正常比较，界面上要看见什么？",
    lead="先用 fixtures/nested 完成一次成功比较，立住后续错误对照时要保护的「上次有效结果」。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:20px;align-items:stretch">'
        '<div data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 6px">两个可编辑输入位置（REQ-001）</h3>'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
        + json_card("Before", NESTED_BEFORE, "可编辑")
        + json_card("After", NESTED_AFTER, "可编辑")
        + "</div></div>"
        '<div data-reveal="1" style="display:flex;flex-direction:column;justify-content:space-between">'
        '<div><h3 style="font-size:20px;margin:0 0 6px">唯一一张结果合并图（AC-001）</h3>'
        + TREE_MERGE
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:8px;padding:7px 14px;font-size:19px">当前有效结果：差异数 <b>3</b> · <code>/active</code>、<code>/role</code>、<code>/user/age</code></div>'
        "</div></div>"
        '<div class="p-bar" data-reveal="2">两侧文本 → 既有 <code>jsonc-parser</code> 解析 → 共享包模型与映射 → 更新画布（UI 不复制比较算法）</div>'
        '<p class="source-note">输入区布局属未决项 REQ-032，此处仅示意两个输入位置与单张合并图的关系</p>'
    ),
    steps=["Before 与 After 双输入", "唯一一张合并结果图", "UI 调用共享包逻辑"],
)

scene(
    id="p23",
    segment="已经得到的结果",
    label="一边输入错了，已有结果该怎么办",
    title="一边输入错了，已有结果该怎么办？",
    lead="成功比较一次后，把 Before 改成非法 JSON，对照两种处理方式。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1.1fr .9fr;gap:14px;align-items:center" data-reveal="0">'
        + json_card("Before · invalid-before.json", [("del", '{"user": }')], "语法错误", error=True)
        + '<div class="p-bar is-light" style="padding:10px 16px;font-size:19px">After 仍为合法 <code>nested/after.json</code>；此时上一轮已有 3 处差异结果</div>'
        "</div>"
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:20px;align-items:stretch">'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="1" style="padding:14px 18px;display:flex;flex-direction:column;justify-content:center">'
        '<div class="p-head"><h3>冲掉已有结果</h3><span class="p-tag" data-role="gate">✗ 违反规格</span></div>'
        '<p style="font-size:19.5px;color:#A8350F">画布被清空成空白状态，上一轮算出的合并图与差异数全部丢失</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">错误提示与上次结果分开</h3><span class="p-tag" data-role="ok">✓ REQ-020 / 021</span></div>'
        '<p style="font-size:18.5px;margin-bottom:6px">1. 错误提示明确指向 <b>Before</b>（不连坐 After）</p>'
        '<p style="font-size:18.5px">2. 上次成功的<b>合并图与差异数 3</b> 原样保留在界面上</p></div></div>'
        '<p class="source-note">非法输入素材：docs/specs/fixtures/error/invalid-before.json</p>'
    ),
    steps=["把 Before 改成非法 JSON", "错误做法：清空已有结果", "规格要求：报错与保留结果分开"],
)

scene(
    id="p24",
    segment="已经得到的结果",
    label="双输入与错误恢复，还要核对哪些场景",
    title="双输入与错误恢复，还要核对哪些场景？",
    lead="除「成功后再改坏 Before」外，TASK-03 还要走通其余三类状态转换与隔离检查。",
    html=(
        '<div class="p-grid" style="--n:2;gap:12px 18px">'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">首次打开即输入非法 JSON</h3><span class="p-tag" data-role="ctx">AC-012</span></div>'
        '<p style="font-size:18.5px">尚无历史结果可留，必须显示<b>空状态</b>与指向出错侧的提示，不能出现比较图</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">After 侧单独出错</h3><span class="p-tag" data-role="ctx">AC-013</span></div>'
        '<p style="font-size:18.5px">错误提示精准指向 <b>After</b>，绝不能同时把合法的 Before 也标成出错方</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">非法输入恢复为合法</h3><span class="p-tag" data-role="tool">状态恢复</span></div>'
        '<p style="font-size:18.5px">按当前两侧最新内容重新比较并刷新结果图，不卡在旧错误或旧图上</p></div>'
        '<div class="p-box" data-role="us" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">隔离初查与 5.4 分工</h3><span class="p-tag" data-role="us">阶段边界</span></div>'
        '<p style="font-size:18.5px">核对 <code>?json=</code>、导入弹窗与比对零外发；摘要、筛选、超限与 360px 留给 <b>5.4</b></p></div></div>'
    ),
    steps=["首次即错与 After 出错", "恢复合法输入后刷新", "单输入隔离与阶段边界"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p25",
    segment="怎样发出请求",
    label="怎样接入双输入，又不污染单输入链路",
    title="怎样接入双输入，又不污染单输入链路？",
    lead="在 apps/www 独立建立 DiffView 与 Diff 状态，严禁改写共用的 useJson。",
    html=(
        diff_arch(active="input", done=("model", "graph"), reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">lint + 网页实操走查</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:18.5px">跑通 <code>pnpm --filter www run lint</code>，起 <code>pnpm dev:www</code> 走查四类错误恢复及 <code>?json=</code> / 导入弹窗回归</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">未决布局与 CR-01 边界</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:18.5px">输入布局 <code>REQ-032</code> 保持可调整不固化；旧结果可见提示文案属第 6 章 <code>CR-01</code>，本节不设必做</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-03 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-03</code> 及关联 Spec、Acceptance 与固定素材，基于已验证的模型与合并图映射接入网页双输入与错误状态</p>'
            '<p style="margin:0 0 8px">允许范围：在 <code>apps/www</code> 新增 <code>DiffView</code> 两份输入区、独立 Diff store（第二份输入、最后一次有效结果、错误信息）及编辑器视图分支。不改 <code>useJson</code>、不改单输入链路与插件端，不在 UI 复制比较算法，布局保持可调</p>'
            '<p style="margin:0">运行 <code>pnpm --filter www run lint</code>，启动 <code>pnpm dev:www</code> 核对正常比较、单侧出错保留结果、首次即错空状态、恢复刷新及 <code>?json=</code> 与导入弹窗无污染</p>',
        )
        + "</div></div></div>"
    ),
    steps=["独立状态隔离 useJson", "网页走查与单输入回归", "未决项与第 6 章边界"],
)

pending(
    scene,
    "p26",
    "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 5.2 分支基础上发出 TASK-03 双输入请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p27",
    "完成边界",
    "怎样判断双输入和错误路径做到了完成边界？",
    "实操页占位：正式录制时在浏览器走查正常比较、报错保留与单输入回归",
)

scene(
    id="p28",
    segment="完成边界",
    label="出错保留结果，要看哪两项页面证据",
    title="出错保留结果，要看哪两项页面证据？",
    lead="单侧输入非法时，必须同时在页面上亲眼核实错误归属与历史结果保留。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch">'
        '<div class="p-box" data-role="gate" data-reveal="0" style="padding:20px 22px">'
        '<div class="p-head"><h3>证据一：错误归属准确</h3><span class="p-tag" data-role="gate">看报错框</span></div>'
        '<p style="font-size:19.5px">分别改坏 Before 与 After，确认提示只指向出错的那一侧，不误报对侧</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="1" style="padding:20px 22px">'
        '<div class="p-head"><h3>证据二：上次结果仍在</h3><span class="p-tag" data-role="ok">看结果图</span></div>'
        '<p style="font-size:19.5px">成功比出 3 处差异后再改坏输入，确认合并图与差异数 <b>3</b> 依然显示在画面上</p></div></div>'
        '<div class="p-bar" data-reveal="2">只看 Agent 回复或只跑一次合法输入，不足以证明错误恢复符合验收</div>'
    ),
    steps=["核对错误提示归属", "核对上次合并图未丢失", "拒绝只看口头完成汇报"],
)


# ---------- 自检与交接 ----------
scene(
    id="p29",
    segment="自检与交接",
    label="首次打开就输入非法 JSON，哪种做法对",
    title="首次打开就输入非法 JSON，哪种做法对？",
    lead="刚打开页面、从未成功比较过，一侧输入就是非法 JSON，先判断界面该如何表现。",
    html=quiz_cards(
        "界面上展示一份默认示例图或之前残留的旧比较结果",
        "不对。从未成功比较过就没有历史结果，摆出任何比较图都会误导用户",
        "界面显示空状态，并给出明确指向出错侧的错误提示",
        "对。「首次即错」与「成功后再出错」前提不同，无历史结果时必须显示空状态（AC-012）",
        right=2,
    ),
    steps=["暂停比较两种表现", "表现一为什么错", "表现二为什么对"],
)

scene(
    id="p30",
    segment="自检与交接",
    label="带着什么进入 5.4",
    title="带着什么进入 5.4？",
    lead="网页端已能输入两份 JSON 并妥善处理报错，且没有污染原有单输入链路。",
    html=sketch_recap(
        "本节核心判断",
        ["报错与上次结果分开", "改坏一侧不冲掉旧图", "首次即错才显示空状态"],
        "本节留下",
        [
            "独立于 <code>useJson</code> 的双输入视图",
            "通过走查的单侧报错与恢复路径",
            "更新后的 <code>CH05_IMPLEMENTATION.md</code>",
        ],
        "下一节 5.4",
        "收尾与整体验收",
        "补齐差异摘要与「只看变化」，对照全套验收和 Review 收口整章功能",
    ),
    steps=["核心判断", "本节留下的成果", "进入 5.4 整体验收"],
)

lesson.write()

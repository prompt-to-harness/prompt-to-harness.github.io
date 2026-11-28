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
    summary="先用同一组嵌套素材在独立 /diff 路由做一次正常比较，立住两侧输入和一张结果图，再看一侧输入出错时，错误状态和上次成功结果是两件事。",
    prep=[
        "确认教学副本处于同一功能分支，TASK-01 模型与 TASK-02 合并图映射 / DiffGraph 已完成且共享包已最新 build",
        "准备启动 pnpm dev:www 本地服务，编辑器定位 docs/specs/TASKS.md（TASK-03）、PLAN.md §3 与 fixtures/c03、c14~c18",
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
    lead="模型与 DiffGraph 已就绪；本节新建独立 /diff 路由接入双输入与报错保留",
    html=cover_handoff(
        3,
        "5.1–5.2 已就位",
        "共享包已有差异模型、映射与 DiffGraph",
        "底层比较与合并图组件已打通，但网页版尚无 <code>/diff</code> 独立路由",
        "5.3 完成后留下",
        [
            "独立路由 <code>pages/diff.tsx</code>、导航入口与 <code>features/diff</code>",
            "仅存内存的 <code>useDiff.ts</code> 与报错保留结果路径",
            "Diff 专用无外链超限提示（不复用 <code>NotSupported</code>）",
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
    lead="先用 fixtures/c03-nested 在 /diff 完成一次成功比较，立住后续要保护的「上次有效结果」。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:20px;align-items:stretch">'
        '<div data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 6px">两个可编辑输入区（REQ-020）</h3>'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
        + json_card("Before", NESTED_BEFORE, "互不串写")
        + json_card("After", NESTED_AFTER, "互不串写")
        + "</div></div>"
        '<div data-reveal="1" style="display:flex;flex-direction:column;justify-content:space-between">'
        '<div><h3 style="font-size:20px;margin:0 0 6px">唯一一张结果合并图（REQ-007）</h3>'
        + TREE_MERGE
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:8px;padding:7px 14px;font-size:19px">当前有效结果：差异数 <b>3</b> · <code>/active</code>、<code>/role</code>、<code>/user/age</code></div>'
        "</div></div>"
        '<div class="p-bar" data-reveal="2">独立路由 <code>/diff</code> 在浏览器本地调用 <code>jsonc-parser</code> 与共享包 <code>DiffGraph</code>（<code>REQ-028/029</code>），零修改 <code>/editor</code></div>'
        '<p class="source-note">状态仅存在内存（REQ-033 未决不写入本地存储）；不复用旧 NotSupported 超限组件</p>'
    ),
    steps=["Before 与 After 双输入", "唯一一张合并结果图", "本地计算且隔离 /editor"],
)

scene(
    id="p23",
    segment="已经得到的结果",
    label="一边输入错了，已有结果该怎么办",
    title="一边输入错了，已有结果该怎么办？",
    lead="成功比较一次后，把 Before 换成非法 JSON（c14-invalid-before），对照两种处理方式。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1.1fr .9fr;gap:14px;align-items:center" data-reveal="0">'
        + json_card("Before · c14-invalid-before.before.json", [("del", '{"user": {"name": "Lin"')], "对象未闭合", error=True)
        + '<div class="p-bar is-light" style="padding:10px 16px;font-size:19px">After 仍为合法 <code>c03-nested.after.json</code>；此时上一轮已有 3 处差异结果</div>'
        "</div>"
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:20px;align-items:stretch">'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="1" style="padding:14px 18px;display:flex;flex-direction:column;justify-content:center">'
        '<div class="p-head"><h3>冲掉已有结果</h3><span class="p-tag" data-role="gate">✗ 违反规格</span></div>'
        '<p style="font-size:19.5px;color:#A8350F">画布被清空成空白状态，上一轮算出的合并图与差异数全部丢失</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">错误提示与上次结果分开</h3><span class="p-tag" data-role="ok">✓ REQ-021 / 022</span></div>'
        '<p style="font-size:18.5px;margin-bottom:6px">1. 错误提示明确指向 <b>Before</b>（不连坐 After）</p>'
        '<p style="font-size:18.5px">2. 上次成功的<b>合并图与差异数 3</b> 原样保留（<code>AC-14</code>）</p></div></div>'
        '<p class="source-note">非法输入素材：docs/specs/fixtures/c14-invalid-before.before.json</p>'
    ),
    steps=["把 Before 改成非法 JSON", "错误做法：清空已有结果", "规格要求：报错与保留结果分开"],
)

scene(
    id="p24",
    segment="已经得到的结果",
    label="双输入与错误恢复，还要核对哪些场景",
    title="双输入与错误恢复，还要核对哪些场景？",
    lead="除 AC-14（Before 出错）外，TASK-03 还要走通其余报错、超限提示、网络本地性与恢复路径。",
    html=(
        '<div class="p-grid" style="--n:2;gap:12px 18px">'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">首次打开即输入非法 JSON</h3><span class="p-tag" data-role="ctx">AC-16</span></div>'
        '<p style="font-size:18.5px">尚无历史结果可留，必须显示<b>空状态</b>与指向出错侧的提示，不显示合并图（<code>c16</code>）</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">After 侧单独出错</h3><span class="p-tag" data-role="ctx">AC-15</span></div>'
        '<p style="font-size:18.5px">错误提示精准指向 <b>After</b>，绝不能同时把合法的 Before 也标成出错方（<code>c15</code>）</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">无外链超限提示与恢复刷新</h3><span class="p-tag" data-role="tool">AC-17/18</span></div>'
        '<p style="font-size:18.5px">传入 <code>SUPPORTED_LIMIT</code>，超限只提示图太大、<b>禁现外部链接</b>；改回合法后刷新</p></div>'
        '<div class="p-box" data-role="us" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">网络零外发与 5.4 分工</h3><span class="p-tag" data-role="us">AC-20</span></div>'
        '<p style="font-size:18.5px">Network 面板核对 JSON 内容零外发；摘要、筛选、360px 与 <code>AC-23</code> 留给 <b>5.4</b></p></div></div>'
    ),
    steps=["首次即错与 After 出错", "无外链超限与恢复刷新", "网络本地性与 5.4 分工"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p25",
    segment="怎样发出请求",
    label="怎样接入双输入，又不污染单输入链路",
    title="怎样接入双输入，又不污染单输入链路？",
    lead="在 apps/www 新增独立 /diff 路由与内存态 useDiff，严禁碰 editor 链路与 NotSupported。",
    html=(
        diff_arch(active="input", done=("model", "graph"), reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">www 构建 + /diff 实操走查</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:18.5px">跑通 <code>www lint / build</code>，起 <code>dev:www</code> 走查 <code>AC-14~18</code>、<code>AC-20</code> 与恢复刷新，查禁区零改动</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">独立路由、禁区与未决边界</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:18.5px">仅内存保存 <code>useDiff</code>（<code>REQ-033</code> 不持久化），不绑节点详情；旧结果提示文案属第 6 章 <code>CR-01</code></p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-03 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-03</code> 及关联 Spec、Acceptance、Plan §3 与素材（<code>c03</code>、<code>c14</code>–<code>c18</code>），为网页版接入独立 <code>/diff</code> 路由、双输入与错误状态</p>'
            '<p style="margin:0 0 8px">允许范围：新增 <code>apps/www/src/pages/diff.tsx</code>、<code>features/diff/**</code>、内存态 <code>store/useDiff.ts</code>，并在 <code>Navbar.tsx</code> 加入口链接；向共享包映射与 <code>DiffGraph</code> 传入 <code>constants/graph.ts</code> 的 <code>SUPPORTED_LIMIT</code>，自建无外链超限提示</p>'
            '<p style="margin:0 0 8px">禁止改动：<code>pages/editor.tsx</code>、<code>features/editor/**</code>、<code>useFile.ts</code>、<code>useJson.ts</code>、<code>parser.ts</code>、<code>JSONCrackComponent.tsx</code> 及 <code>NotSupported.tsx</code>；不做 <code>useDiff</code> 本地持久化与节点点击详情（REQ-033 / 034），不提前做第 6 章 <code>CR-01</code></p>'
            '<p style="margin:0">在 <code>dev:www</code> 走完 <code>AC-14</code>–<code>18</code>、<code>AC-20</code> 与 <code>git diff --stat</code> 核查，跑通 <code>pnpm --filter www lint</code> 与 <code>build</code></p>',
        )
        + "</div></div></div>"
    ),
    steps=["独立路由与内存态隔离", "www 构建与 AC-14~18/20 走查", "禁区清单与第 6 章边界"],
)

pending(
    scene,
    "p26",
    "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 5.2 分支基础上发出 TASK-03 独立 /diff 路由请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p27",
    "完成边界",
    "怎样判断双输入和错误路径做到了完成边界？",
    "实操页占位：正式录制时在 /diff 走查 AC-14~18、AC-20 与禁区零改动核对",
)

scene(
    id="p28",
    segment="完成边界",
    label="出错保留结果，要看哪两项页面证据",
    title="出错保留结果，要看哪两项页面证据？",
    lead="单侧输入非法时，必须同时在页面上亲眼核实错误归属与历史结果保留（AC-14 / AC-15）。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch">'
        '<div class="p-box" data-role="gate" data-reveal="0" style="padding:20px 22px">'
        '<div class="p-head"><h3>证据一：错误归属准确</h3><span class="p-tag" data-role="gate">看报错框</span></div>'
        '<p style="font-size:19.5px">分别改坏 Before 与 After（<code>c14 / c15</code>），确认提示只指向出错那一侧，不误报对侧</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="1" style="padding:20px 22px">'
        '<div class="p-head"><h3>证据二：上次结果仍在</h3><span class="p-tag" data-role="ok">看结果图</span></div>'
        '<p style="font-size:19.5px">用 <code>c03</code> 比出 3 处差异后再改坏一侧，确认合并图与差异数 <b>3</b> 依然显示在画面上</p></div></div>'
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
    lead="刚打开页面、从未成功比较过，一侧输入就是非法 JSON（c16），先判断界面该如何表现。",
    html=quiz_cards(
        "界面上展示一份默认示例图或之前残留的旧比较结果",
        "不对。从未成功比较过就没有历史结果，摆出任何比较图都会误导用户",
        "界面显示空状态，并给出明确指向出错侧的错误提示",
        "对。「首次即错」与「成功后再出错」前提不同，无历史结果时必须显示空状态（AC-16）",
        right=2,
    ),
    steps=["暂停比较两种表现", "表现一为什么错", "表现二为什么对"],
)

scene(
    id="p30",
    segment="自检与交接",
    label="带着什么进入 5.4",
    title="带着什么进入 5.4？",
    lead="独立 /diff 路由已能输入两份 JSON、处理单侧报错并展示无外链超限提示，/editor 零改动。",
    html=sketch_recap(
        "本节核心判断",
        ["报错与上次结果分开", "改坏一侧不冲掉旧图", "首次即错才显示空状态"],
        "本节留下",
        [
            "独立路由 <code>/diff</code>、导航入口与内存态 <code>useDiff</code>",
            "通过走查的 <code>AC-14~18</code>、<code>AC-20</code> 与无外链超限",
            "六项单输入禁区零改动记录",
        ],
        "下一节 5.4",
        "收尾与整体验收",
        "补齐摘要、「只看变化」与状态符号定稿，跑通 AC-01~23、三端构建和 Review",
    ),
    steps=["核心判断", "本节留下的成果", "进入 5.4 整体验收"],
)

lesson.write()

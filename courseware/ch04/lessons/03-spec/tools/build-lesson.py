#!/usr/bin/env python3
"""4.3 要求写得再细，为什么还会跑偏：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
决定清单与 STORYBOARD“讲师作为需求负责人逐项决定”“其余行为的决定清单”一致，改动时两处同步。
实跑请求保存在分镜；页面展示组织请求的要素和短示例。
"""
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import (  # noqa: E402
    Lesson,
    cover_handoff,
    pop,
    quiz_cards,
    repro,
    review_board,
    sketch_recap,
    spec_delegation,
    sym_badge,
)

# 讲师作为需求负责人逐项决定：(问题, 决定, 代价或范围)
CORE = [
    ("对象键换序算不算差异", "不算，对象键顺序忽略", "真正关心字段顺序的场景不在本次范围"),
    ("数组怎样比较", "按索引逐项比较", "中间插入一项，后面的项可能显示为改动；按元素对齐、移动检测留在非目标"),
    ("<code>1</code> 变成 <code>\"1\"</code>", "值或类型改变都记为 changed", "不再细分“只是类型变了”"),
]
# 其余行为的决定清单（屏幕短句版）：(揭示组, 行为, 决定)
REST = [
    (0, "差异计数", "只数直接差异；仅带派生标记的祖先不计；整个对象或数组增删根计 1 处、子节点仍标状态"),
    (0, "只看变化", "隐藏未变化的节点，保留通向差异的祖先和 removed 节点；筛选不改变差异数"),
    (0, "null 与字段缺失", "值为 null 等同于该路径不存在，按同样增删规则处理"),
    (1, "输入出错", "指明是 Before 还是 After 出错，保留最后一次有效结果；还没比较过时显示空状态"),
    (1, "节点上限", "沿用现有上限设定，removed 节点计入；超限时不画图，只提示图太大"),
    (2, "本地处理", "比较在浏览器本地完成，JSON 内容不发送到网络"),
    (2, "可辨认、可操作", "状态除颜色外还有文字或符号；360px 宽的窗口里都能操作"),
    (2, "其他客户端、格式", "VS Code 插件、其他数据格式标为 Deferred"),
]

PROMPT_P35_TEACHER = """请先阅读 docs/specs/BRIEF.md，再根据这份 Brief 和下面由需求负责人确认的决定清单，起草 docs/specs/SPEC.md。

本次目标是网页版 JSON Diff：同时输入 Before 和 After 两份 JSON，比较并高亮差异，提供差异摘要和“只看变化”。请把已经确认的产品行为写成规则；具体代码放在哪里、改现有页面还是新增入口、使用哪个组件或函数，留给后续 Plan。

规则与状态要求：

1. 每条规则使用 REQ- 编号，描述用户能观察、能够检查的行为。规则正文不规定文件名、组件名或函数名。
2. 根据已确认的目标或下方明确决定写出的规则，标为 Approved；明确暂缓或本次不做的内容，标为 Deferred；会改变本次产品行为、但尚未决定的内容，标为 Draft，并说明还缺什么决定。
3. Brief 中 Agent 提出的建议只是建议，不要自动写成 Approved。不要自行补充决定清单未覆盖的行为。
4. 每条规则注明来源：Brief 的相关小节、Open 问题（OQ 编号），或下面的课程决定；有多个来源时可以同时列出，不要编造出处。
5. 这里的 Approved 是按已确认决定起草的状态，最终还要由我逐条审查。

课程决定清单：

1. 对象键换序不算差异，忽略对象键顺序。真正关心字段顺序的场景不在本次范围。
2. 数组按索引逐项比较（索引从 0 开始）。中间插入一项后，后面的项可能显示为改动；按元素对齐（含按 id / 业务主键、LCS）和移动检测是本次非目标。
3. 同一路径的原始值或类型改变（如 1 变成 "1"）都记为 changed，不再细分“只是类型变了”。（1 与 1.0 等数值字面量是否算变化尚未决定，保留 Draft。）
4. 差异有 added、removed、changed、unchanged 四种直接状态。结果画在一张合并图里，Before 独有、已删除的节点标为 removed 并保留在图上。
5. 两侧都存在且容器类型相同的祖先保持 unchanged；如果下层有变化，额外带 hasDiffDescendant 派生标记，用于帮助找到下层变化。只带这个派生标记的祖先不计入差异数。
6. 差异数统计直接差异。新增或删除一整个对象或数组时，只在它的根计 1 处，其中的子节点仍逐个标为 added 或 removed。
7. “只看变化”隐藏未变化的节点，但保留通向差异所必需的祖先和 removed 节点；切换筛选不改变差异数。
8. 字段值为 null 等同于该路径不存在，按同样的增删规则处理。
9. 输入错误时，指明出错的是 Before 还是 After，并保留最后一次有效的比较结果；还没有成功比较过且输入出错时，显示空状态和错误提示。
10. 合并图沿用 JSON Crack 现有的节点上限设定，不另定新数值；removed 节点也计入上限。超过上限时不渲染合并图，只提示图太大，不沿用现有提示里的外部产品升级链接。
11. 比较在浏览器本地完成，JSON 内容不因比较功能发送到网络。
12. 每种状态除颜色外还有文字或符号可以辨认；在 360px 宽的窗口里，两侧输入、错误提示和结果都能操作。
13. VS Code 插件、其他数据格式（YAML/XML/CSV）以及结果写回、导出或分享标为 Deferred。

请在 SPEC.md 末尾列一张 Open 问题去向表，逐条列出 Brief 中实际存在的每个 Open 问题（OQ-1 到 OQ-13），并分别说明：

- 哪些部分已由课程决定或 REQ 规则处理；
- 哪些会改变产品行为的部分仍未决定（保留 Draft，例如浏览器本地存储、节点点击弹窗细节、数值字面量等）；
- 哪些属于具体实现安排，需要留给后续 Plan（例如入口位置与页面改造落点）。

一个 Open 问题可以对应多条规则，一条规则也可以回应多个问题。对于只处理了一部分的问题，请把已决定和未决定的部分分开写，不要为了凑对应关系自行补决定。

如果 Brief 中的目标、非目标或其他内容与上述决定有冲突，请在 SPEC.md 中列出冲突供我审查，不要自行忽略，也不要修改 Brief。

只新建 docs/specs/SPEC.md，不修改其他文件。完成后运行 git status --short --untracked-files=all 给我看。"""

PROMPT_P36_REVISE = """请按以下 4 条审查意见修改 docs/specs/SPEC.md，只改 docs/specs/SPEC.md，不要修改 BRIEF.md 或任何代码文件：
1. 收紧计数口径（术语「直接差异」与 REQ-012）：第 19 行把「直接差异」写成“状态为 added、removed、changed 的节点”，与 REQ-013、REQ-014“整棵对象或数组增删时子节点也标状态，但只在根计 1 处”存在字面歧义。请在术语和 REQ-012 中写明：按 REQ-013 规则统计直接差异，整棵新增或删除的子树只在根计 1 处，其内部子节点虽标为 added 或 removed，但不重复计入差异数。
2. 补齐筛选例外（REQ-016）：REQ-016 写“开启后，状态为 unchanged 的节点不再显示”，与 REQ-017 保留通向差异所必需的祖先（按 REQ-009 自身为 unchanged）字面冲突。请改为：开启后，除 REQ-017 保留的通向差异所必需的祖先节点外，其余状态为 unchanged 的节点不再显示。
3. 批准 REQ-038 的行为底线（衔接后续单输入回归）：把 REQ-038 从 Draft 改为 Approved，明确“新增 JSON Diff 功能不得破坏现有的单份 JSON 查看链路”；具体是改造现有页面还是新增独立入口，继续留在 OQ-10 的“留给 Plan”列，规则正文不写文件名或路由。同时更新 §12 Open 问题去向表和规则统计。
4. 确认 §11 冲突结论：CF-1 按课程决定 3（REQ-002）执行，CF-2 按课程决定 10（REQ-024）执行，在 §11 注明已由需求负责人确认，BRIEF.md 保持不变；其余 Draft（REQ-032~REQ-037）继续保留为 Draft，不要自行补充决定。
改完后汇总改动点，并运行 git status --short --untracked-files=all 给我看。"""

lesson = Lesson(__file__, "4.3", "要求写得再细，为什么还会跑偏", summary="用几段小 JSON 看清同一句需求的几种合理结果，由人决定行为，再让 Agent 起草、讲师逐条审，写成第二份规格 Spec。")
scene = lesson.scene


def json_box(label, text, role="ink"):
    """一段 Before 或 After 的 JSON。"""
    return (f'<div class="p-code" data-role="{role}"><div class="p-code-head"><span>{label}</span></div>'
            f'<pre style="font-size:19px;padding:8px 12px">{escape(text)}</pre></div>')


def verdict(tag, role, title, note):
    return (f'<div class="p-box" data-role="{role}" style="padding:8px 14px"><span class="p-tag" data-role="{role}">{tag}</span>'
            f'<h3 style="font-size:20px;margin:4px 0 2px">{title}</h3><p style="font-size:17.5px;margin:0">{note}</p></div>')


# ---------- 开篇 ----------
scene(
    id="p26", segment="开篇", layout="lesson-cover",
    label="要求写得再细，为什么还会跑偏", title="写细了，怎么还会跑偏？",
    lead="Brief 最后列着 Open 问题。这一节逐条看清它们有几种合理做法，由人决定，写成第二份规格 Spec",
    html=cover_handoff(
        now=3, lit=("Spec",), done=("Brief",),
        prev_tag="4.2 承接", prev_title="Brief 与 Open 问题",
        prev_desc="需求原文快照 · 源码调查 · 未决问题清单",
        next_tag="4.3 产出",
        deliverables=[
            "由人决定的核心规则与代价",
            "<code>SPEC.md</code>（REQ 编号 / 状态 / 来源）",
            "每条 Open 问题的明确去向",
        ],
    ),
    steps=["本章位置", "这一节补哪一层", "从 Open 问题开始"],
)

scene(
    id="p27", segment="开篇",
    label="Open 问题里还剩什么", title="Open 问题里，还剩什么？",
    lead="打开 4.2 形成的 BRIEF.md，找到 Open 问题。每个人得到的问题条数和编号可能不同，按主题寻找；Agent 写的建议仍需人决定。",
    html=(
        '<div class="ch4-2col">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">BRIEF.md · Open 问题</span>'
        '<h3 style="margin:8px 0">先看问题和依据</h3>'
        '<p style="font-size:18.5px;margin:0">这条会影响什么结果？<br>原文和调查提供了什么依据？</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">Agent 的建议</span>'
        '<h3 style="margin:8px 0">再判断建议</h3>'
        '<p style="font-size:18.5px;margin:0">行为怎么选，由人决定<br>代码怎么改，留给 Plan</p></div></div>'
        '<div class="ch4-pop-dock" data-reveal="2" style="margin-top:14px;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap">'
        '<span class="p-chip" data-role="us">从自己的 Brief 找对应主题</span>'
        + pop("Open 问题：一条实跑片段", "示例：一条 Open 问题",
              '<p style="margin:0 0 8px;font-size:17px">备课时的一个问题；每个人的 Brief 以实际内容为准</p>'
              '<div><a href="assets/brief-open-20261109.png"><img src="assets/brief-open-20261109.png" '
              'alt="一次实跑中关于数组对齐的 Open 问题：包含原文出处、现状影响和标为非决定的建议" '
              'style="display:block;max-width:100%;max-height:360px;width:auto;height:auto;margin:auto"></a></div>')
        + '</div>'
    ),
    steps=["打开 Brief", "识别问题和建议", "从自己的问题开始"],
)

# ---------- 几种合理结果 ----------
scene(
    id="p28", segment="几种结果",
    label="键换序与类型变化", title="键换了顺序，1 变成 \"1\"，算不算变？",
    lead="两组很小的输入，每组都有两种说得通的结论。字段顺序原文还没定；1 变成 \"1\"，原文希望看见，只是还没说归成哪一类",
    html=(
        '<div class="ch4-split" style="--cols:minmax(0,0.92fr) minmax(0,1.22fr);gap:10px 18px;align-items:center">'
        '<div class="ch4-2col" data-reveal="0" style="gap:10px">'
        + json_box("Before", '{"a":1,"b":2}') + json_box("After", '{"b":2,"a":1}') + '</div>'
        '<div class="ch4-2col" data-reveal="1" style="gap:10px">'
        + verdict("逐个比字段", "ctx", "没有差异", "两个字段的值都没变")
        + verdict("逐行比文本", "gate", "两行改动", "顺序换了，两行都不一样") + '</div>'
        '<div class="ch4-2col" data-reveal="2" style="gap:10px">'
        + json_box("Before", '{"n":1}') + json_box("After", '{"n":"1"}') + '</div>'
        '<div class="ch4-2col" data-reveal="3" style="gap:10px">'
        + verdict("看显示", "ctx", "没变", "界面上都显示成 1")
        + verdict("看值和类型", "gate", "变了", "数字变成了字符串") + '</div>'
        '</div>'
        '<div class="p-bar" data-reveal="4" style="margin-top:12px">原文：字段顺序“组里意见不太一致”；<code>1</code> 变成 <code>"1"</code>“这种我们也想知道”</div>'
    ),
    steps=["键换了顺序", "两种结论", "1 变成 \"1\"", "两种结论", "原文怎么说"],
)

scene(
    id="p29", segment="几种结果",
    label="数组插入", title="数组插一项，后面怎么对上？",
    lead="按位置比，还是先认出同一个元素再比，结果差别很大。后一种更符合直觉，但要先回答“怎样算同一个元素”",
    html=(
        '<div class="ch4-split" style="--cols:minmax(0,0.78fr) minmax(0,1.08fr) minmax(0,1.08fr);gap:16px;align-items:start">'
        '<div data-reveal="0" style="display:flex;flex-direction:column;gap:10px">'
        + json_box("Before", "[10,20]") + json_box("After", "[5,10,20]") + '</div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">按索引</span>'
        '<ul style="margin:8px 0;padding-left:20px;font-size:19px;line-height:1.55;font-family:var(--p-mono)">'
        '<li>[0] 10 → 5　changed</li><li>[1] 20 → 10　changed</li><li>[2] + 20　added</li></ul>'
        '<h3 style="font-size:22px;margin:0">3 处差异</h3></div>'
        '<div class="p-box" data-role="us" data-reveal="2"><span class="p-tag" data-role="us">按元素对齐</span>'
        '<ul style="margin:8px 0;padding-left:20px;font-size:19px;line-height:1.55;font-family:var(--p-mono)">'
        '<li>+ 5　added</li><li>10　不变</li><li>20　不变</li></ul>'
        '<h3 style="font-size:22px;margin:0">1 处差异</h3></div>'
        '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:14px">商品列表里的对象，<b>按哪个字段认是同一个</b>？LCS、业务主键都是对齐办法，选不选由人定</div>'
    ),
    steps=["插入一项", "按索引", "按元素对齐", "怎样算同一个"],
)

scene(
    id="p30", segment="几种结果",
    label="为什么还会跑偏", title="写细了，为什么还会跑偏？",
    lead="原文已经写了要高亮不同、要支持数组，也说了 1 变成 \"1\" 想被看见。没定的是键序算不算变化、这种变化归哪一类、元素怎样对上。空白处，每个实现者都会用自己的默认做法补上",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 18px">'
        '<span class="p-tag" data-role="us">需求原文</span>'
        '<h3 style="font-size:23px;margin:6px 0 0">“把不同的地方高亮出来”　“数组也要支持”</h3></div>'
        '<div class="ch4-3col" style="margin-top:14px" data-reveal="1">'
        '<div class="p-box" data-role="ink"><h3 style="font-size:21px;margin:0 0 6px">实现者 A</h3><p style="font-size:18px;margin:0">键序算变化，按索引比</p></div>'
        '<div class="p-box" data-role="ink"><h3 style="font-size:21px;margin:0 0 6px">实现者 B</h3><p style="font-size:18px;margin:0">键序不算，按元素对齐</p></div>'
        '<div class="p-box" data-role="agent"><h3 style="font-size:21px;margin:0 0 6px">Agent</h3><p style="font-size:18px;margin:0">按它采用的常见做法补上</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">能消除分歧的，是<b>人看过结果和代价后作出的决定</b>，写成规则</div>'
    ),
    steps=["原文写了什么", "各自补上默认", "由人决定，写成规则"],
)

# ---------- 人来决定 ----------
scene(
    id="p31", segment="人来决定",
    label="课程怎么定", title="三个问题，课程这样定",
    lead="本课程由讲师担任需求负责人，对每个问题说明选择和代价。按索引是控制范围的取舍：规则简单、结果容易人工核算，代价也要写进 Spec",
    html=(
        '<div class="p-qlist" style="gap:10px">'
        + "".join(
            f'<div class="p-qrow" data-reveal="{i}"><span class="p-n">{i + 1}</span><div><h3>{q}</h3>'
            f'<p style="font-size:18.5px;margin:3px 0 0"><b>决定</b>　{d}</p><p style="color:var(--p-muted);font-size:17.5px;margin:2px 0 0"><b>代价或范围</b>　{c}</p></div></div>'
            for i, (q, d, c) in enumerate(CORE))
        + '</div>'
    ),
    steps=["键换序", "数组", "类型变化"],
)

TREE_AFTER = (
    '<ul class="p-tree"><li><span class="p-path">config</span>'
    '<ul><li><span class="p-path">retry: 5</span></li></ul></li></ul>'
)
TREE_MERGED = (
    '<ul class="p-tree">'
    f'<li class="is-open"><span class="p-path">config</span>{sym_badge("anc", "▽ 下面有变化")}{sym_badge("nocnt", "不计入")}'
    '<ul>'
    f'<li class="is-target"><span class="p-path">retry: 3 → 5</span>{sym_badge("chg", "~ changed")}</li>'
    f'<li class="is-block"><span class="p-path">debug: true</span>{sym_badge("rem", "− removed")}</li>'
    '</ul></li></ul>'
)
scene(
    id="p32", segment="人来决定",
    label="删掉的字段画在哪", title="删掉的字段，画在哪？",
    lead="只画 After，删掉的字段就从图上消失了。差异要画在一张合并图里：Before 独有的节点保留下来，祖先节点带一个派生标记，帮用户顺着找到下面的改动",
    html=(
        '<div class="ch4-split" style="--cols:minmax(0,0.88fr) minmax(0,0.74fr) minmax(0,1.32fr);gap:14px;align-items:start">'
        '<div data-reveal="0" style="display:flex;flex-direction:column;gap:8px">'
        + json_box("Before", '{"config":{"retry":3,"debug":true}}') + json_box("After", '{"config":{"retry":5}}') + '</div>'
        f'<div data-reveal="1"><h3 style="font-size:19px;margin:0 0 6px">只画 After</h3>{TREE_AFTER}'
        '<p style="font-size:18px;color:var(--p-muted);margin:6px 0 0">debug 不见了</p></div>'
        f'<div data-reveal="2"><h3 style="font-size:19px;margin:0 0 6px">合并图（示意）</h3>{TREE_MERGED}</div>'
        '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:12px">直接差异 <b>2 处</b>；config 带 <code>hasDiffDescendant</code>，不计入</div>'
        '<p class="source-note" style="margin-top:4px">合并图为课程自绘示意，JSON Diff 尚未实现</p>'
    ),
    steps=["一个嵌套例子", "只画 After", "合并图", "数一数"],
)

scene(
    id="p33", segment="人来决定",
    label="其余行为", title="筛选、输错、大文件与 null，怎么办？",
    lead="差异怎样判定、怎样画出来已经定了。用户还会筛选、输错、贴进很大的文件，也会遇到字段值为 null，这些行为都要在交给验收前定下来。节点上限沿用现有设定，具体数值留给 4.4 按运行环境核算",
    html=(
        '<style>#p33 .p-matrix span{padding:4px 10px}</style>'
        '<div class="p-matrix" style="grid-template-columns:195px minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>行为</span><span>课程决定</span></div>'
        + "".join(
            f'<div data-reveal="{g}"><span style="font-weight:700;font-size:17.5px">{b}</span><span style="font-size:17.5px">{d}</span></div>'
            for g, b, d in REST)
        + '</div>'
    ),
    steps=["计数、筛选与 null", "出错与上限", "本地、可辨认与暂缓"],
)

# ---------- 写成 Spec ----------
scene(
    id="p34", segment="写成 Spec",
    label="Spec 里写什么", title="Spec 里，写什么？",
    lead="4.1 立过一条分工：Spec 写用户能观察到的行为，代码改哪里留给 Plan。每条规则再带上编号、状态和来源，Brief 里的每个问题就都有了去处",
    html=(
        '<div class="ch4-split" style="--cols:minmax(0,1fr) 52px minmax(0,1fr)">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">行为规则 · 进 Spec</span>'
        '<h3 style="margin:6px 0">“对象键顺序不同，不产生差异”</h3><p style="font-size:18px;margin:0">用户能看到、能检查；换一种实现也不用改</p></div>'
        '<div class="ch4-arrow" data-reveal="1"><span style="font-size:24px;font-weight:700">≠</span></div>'
        '<div class="p-box" data-role="ink" data-reveal="1"><span class="p-tag" data-role="ink">实现安排 · 留给 Plan</span>'
        '<h3 style="margin:6px 0">“在解析函数里先把键排序再比较”</h3><p style="font-size:18px;margin:0">换一种实现就要重写，4.5 结合源码决定</p></div>'
        '</div>'
        '<div class="ch4-3col" style="margin-top:14px" data-reveal="2">'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">编号</span><h3 style="font-size:20px;margin:6px 0 0">REQ-01、REQ-02……</h3></div>'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">状态</span><h3 style="font-size:20px;margin:6px 0 0">Approved · Draft · Deferred</h3></div>'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">来源</span><h3 style="font-size:20px;margin:6px 0 0">Brief 的哪一节、哪个 Open 问题</h3></div>'
        '</div>'
    ),
    steps=["行为规则", "实现安排", "编号、状态、来源"],
)

scene(
    id="p35", segment="写成 Spec",
    label="让 Agent 起草 Spec", title="让 Agent 起草 Spec",
    lead="结合自己的 Brief 组织请求：把本章已经确认的决定逐条写进发给 Agent 的请求，说明依据和目标文件，要求规则写清编号、行为、状态、来源与 Open 问题去向；尚未决定的保留待定。",
    html=spec_delegation(
        inputs=[("docs/specs/BRIEF.md", "已审过的问题与依据"), ("课程决定清单", "含键序、数组、类型与 null 规则")],
        inputs_note="把已确认的决定逐条写进发给 Agent 的请求；未决定的标待定",
        elements=[
            (0, "依据与目标", "依据与产出", "按我的 Brief，起草 <code>docs/specs/SPEC.md</code>"),
            (1, "规则要求", "每条规则", "REQ 编号 · 可观察可检查 · Approved/Draft/Deferred · 来源"),
            (2, "边界分流", "Open 问题", "全部写明去向；未决定的留给人决定，不写代码改法"),
            (3, "请求约束", "改完核对", "只新建 <code>SPEC.md</code>，完成后看 <code>git status</code>"),
        ],
        output_title="请 Agent 起草",
        output_files=[("docs/specs/SPEC.md", "供下一页逐条审查")],
        pop_title="请求表达示例",
        pop_label="示例：按实际 Brief 调整请求",
        pop_body=(
            '<p style="margin:0 0 8px;font-size:17px">按你自己的 Brief 与决定清单改写，下面先给简版表达方式，再附课堂演练时教师使用的完整 Prompt 供参考</p>'
            '<div class="p-code"><div class="p-code-head"><span>请求示例（简版）</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:17px;line-height:1.55">'
            '依据 docs/specs/BRIEF.md 起草 docs/specs/SPEC.md。\n'
            '已确认的决定包括：对象键顺序忽略；数组按索引比较；值或类型改变都记为 changed；'
            '字段值为 null 按该路径不存在处理；筛选不改变差异数；沿用节点上限。\n'
            '每条规则带 REQ 编号、状态和 Brief 来源；尚未决定的保留 Draft，不混入文件名或函数名。'
            '</pre></div>'
            '<p style="margin:12px 0 6px;font-size:17px"><b>课堂演练时教师 Prompt（供参考）</b>：按自己的 Brief 编号与实际决定调整，不必逐字照抄</p>'
            '<div class="p-code"><div class="p-code-head"><span>课堂演练时教师 Prompt（供参考）</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55">'
            + escape(PROMPT_P35_TEACHER)
            + '</pre></div>'
        ),
        pop_hint="把决定写进请求，示例仅供参考",
    ),
    steps=["依据与产出", "规则怎么写", "Open 问题去向", "按实际组织请求"],
    repro=repro([
        ("打开自己在 4.2 写的 Brief，对照 p31–p33，整理已确认的课程决定与仍未决定的问题。", None),
        ("把已确认的决定逐条写进发给 Agent 的请求，说明依据、目标文件和规则要求；未决定的标明待定。", None),
        ("打开得到的 SPEC.md，按下一页的五项逐条审查。", None),
    ], note="请求措辞和问题编号会因 Brief 不同而变化；规则的状态和内容仍需人审。", label="跟做：起草 Spec"),
)

scene(
    id="p36", segment="写成 Spec",
    label="Spec 审什么", title="Spec 写好了，审什么？",
    lead="打开 Agent 生成的 SPEC.md，结合 Brief 和决定清单逐条审。问题去向、状态与正文都要核对；审出的问题按实际情况修改。",
    html=review_board(
        doc_tag="docs/specs/SPEC.md（按五项逐条审）",
        docs=[
            ("Open 问题去向表", "已决定对应 REQ；暂缓标 Deferred；未决写清缺什么"),
            ("REQ 规则条目", "行为可观察可检查，不混入文件名、组件或函数"),
        ],
        doc_note="没有审出问题时继续核对，不必为了演示编造修改",
        checks=[
            (0, "Open 问题", "每条有去处，未决定的写清"),
            (1, "可检查与实现分离", "用户能观察且不矛盾；文件/函数留给 Plan"),
            (2, "状态与默认做法", "与决定一致；清单没定的不让 Agent 自己补"),
        ],
        footer_bar="审完看 <b>git status</b>：新增只在 docs/specs/",
        example_pop=pop("一次实跑：审查差异计数", "示例：差异计数",
              '<p style="margin:0 0 10px;font-size:17px">2026-11-09 备课实跑；以下是初稿和修改稿的摘录。每次生成的编号和内容可能不同</p>'
              '<div class="ch4-2col">'
              '<div class="p-box" data-role="gate"><span class="p-tag" data-role="gate">初稿</span>'
              '<h3 style="font-size:20px">两条规则怎样一起算？</h3>'
              '<p>REQ-014：整棵对象只在根计 1 处，子节点仍标为 added</p>'
              '<p>REQ-015：差异数“等于直接差异的条数”</p></div>'
              '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">修改后</span>'
              '<h3 style="font-size:20px">区分状态和计数</h3>'
              '<p>子节点仍逐个标状态；整棵新增或删除的子树只贡献 1 处</p>'
              '<p>再核对摘要与计数规则是否一致</p></div></div>'),
    ),
    steps=["Open 问题去向", "可观察与实现细节", "状态和默认做法", "修改并检查"],
    repro=repro([
        ("打开自己的 SPEC.md，对照 Brief、课程决定和页面上的审查项；先看 Open 问题去向表。", None),
        ("审出问题时，指出具体内容、对照依据、修改要求和范围，按实际情况交给 Agent 修改。下面附上教师演示时的修正 Prompt（仅供参考，请按自己 SPEC.md 的实际编号与审查结果调整）：", PROMPT_P36_REVISE),
        ("回看修改处与相关规则，确认未决事项没有被擅自批准，再检查工作区。", "git status --short --untracked-files=all"),
    ], note="实际问题和编号可能不同；没有审出问题时继续核对，不必编造修改。", label="跟做：审查与修改"),
)

# ---------- 自检与交接 ----------
scene(
    id="p37", segment="自检与交接",
    label="哪条该留在 Spec", title="这两条，哪条该留在 Spec？",
    lead="先问这句话在决定什么：用户能看到的行为，还是代码怎么改。",
    html=quiz_cards(
        "“两个值类型不同，标记为 changed”",
        "<b>留在 Spec</b>：用户能在图上看到，能用具体输入检查",
        "“在合并图组件里调用比较函数”",
        '<b>回到 Plan</b>：说的是代码怎么改；审 Spec 时，同时找还没决定的边界和混进来的实现安排<br><a href="#p34">回看 Spec 写什么</a>',
        right=1,
        stamps=("✓ 留在 Spec", "✗ 回到 Plan"),
        labels=("规则一", "规则二"),
        verdicts=(True, False),
    ),
    steps=["两条规则", "类型不同", "调用比较函数"],
)

scene(
    id="p38", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="同一句需求有几种合理结果，人看过代价后作出决定，写成带编号、状态和来源的 Spec。下一节拿具体输入逐项核算，检查这些规则能不能给出一致的答案。",
    html=sketch_recap(
        "一个判断", "KEY",
        ["几种结果", "谁来决定", "写成规则"],
        "留下的",
        ["经过审查的 SPEC.md", "每个 Open 问题的去处"],
        "下一节", "4.4 光靠文字规则，拿什么判对错？", "用具体输入核算这些规则",
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()

#!/usr/bin/env python3
"""4.3 要求写得再细，为什么还会跑偏：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
决定清单与 STORYBOARD“讲师作为需求负责人逐项决定”“其余行为的决定清单”一致，改动时两处同步。
有演示的 p27、p35、p36 等讲师演练后再做。
"""
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map  # noqa: E402

# 讲师作为需求负责人逐项决定：(问题, 决定, 代价或范围)
CORE = [
    ("对象键换序算不算差异", "不算，对象键顺序忽略", "真正关心字段顺序的场景不在本次范围"),
    ("数组怎样比较", "按索引逐项比较", "中间插入一项，后面各项都显示为改动；按元素对齐、移动检测留在非目标"),
    ("<code>1</code> 变成 <code>\"1\"</code>", "值或类型改变都记为 changed", "不再细分“只是类型变了”"),
]
# 其余行为的决定清单（屏幕短句版）：(揭示组, 行为, 决定)
REST = [
    (0, "差异计数", "只数直接差异；带派生标记的祖先不计；整个对象或数组增删，只在根计 1 处"),
    (0, "只看变化", "隐藏未变化的节点，保留通向差异的祖先和 removed 节点；筛选不改变差异数"),
    (1, "输入出错", "指明是 Before 还是 After 出错，保留最后一次有效结果；还没比较过时显示空状态"),
    (1, "节点上限", "沿用现有上限设定，removed 节点计入；超限时不画图，只提示图太大"),
    (2, "本地处理", "比较在浏览器本地完成，JSON 内容不发送到网络"),
    (2, "可辨认、可操作", "状态除颜色外还有文字或符号；360px 宽的窗口里都能操作"),
    (2, "其他客户端、格式", "VS Code 插件、其他数据格式标为 Deferred"),
]

lesson = Lesson(__file__, "4.3", "要求写得再细，为什么还会跑偏", summary="用几段小 JSON 看清同一句需求的几种合理结果，由人决定行为，再让 Agent 起草、讲师逐条审，写成第二份规格 Spec。")
scene = lesson.scene


def json_box(label, text, role="ink"):
    """一段 Before 或 After 的 JSON。"""
    return (f'<div class="p-code" data-role="{role}"><div class="p-code-head"><span>{label}</span></div>'
            f'<pre style="font-size:21px">{escape(text)}</pre></div>')


def verdict(tag, role, title, note):
    return (f'<div class="p-box" data-role="{role}" style="padding:10px 16px"><span class="p-tag" data-role="{role}">{tag}</span>'
            f'<h3 style="font-size:22px;margin:6px 0 2px">{title}</h3><p style="font-size:18px;margin:0">{note}</p></div>')


# ---------- 开篇 ----------
scene(
    id="p26", segment="开篇", layout="lesson-cover",
    label="要求写得再细，为什么还会跑偏", title="写细了，怎么还会跑偏？",
    lead="Brief 最后列着 Open 问题。这一节逐条看清它们有几种合理做法，由人决定，写成第二份规格 Spec",
    html=(
        chapter_map(3)
        + '<div style="margin-top:26px">' + anchor(lit=("Spec",), done=("Brief",), mini=True, reveal=1) + '</div>'
        + '<div class="p-bar is-light" data-reveal="2" style="margin-top:18px">手里有：<b>原文快照 · BRIEF.md · Open 问题</b></div>'
    ),
    steps=["本章位置", "这一节补哪一层", "从 Open 问题开始"],
)

# ---------- 几种合理结果 ----------
scene(
    id="p28", segment="几种结果",
    label="键换序与类型变化", title="键换了顺序，1 变成 \"1\"，算不算变？",
    lead="两组很小的输入。每组都有两种说得通的结论，需求原文自己也没有定下来",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:14px 22px;align-items:center">'
        '<div data-reveal="0" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
        + json_box("Before", '{"a":1,"b":2}') + json_box("After", '{"b":2,"a":1}') + '</div>'
        '<div data-reveal="1" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
        + verdict("逐个比字段", "ctx", "没有差异", "两个字段的值都没变")
        + verdict("逐行比文本", "gate", "两行改动", "顺序换了，两行都不一样") + '</div>'
        '<div data-reveal="2" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
        + json_box("Before", '{"n":1}') + json_box("After", '{"n":"1"}') + '</div>'
        '<div data-reveal="3" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
        + verdict("看显示", "ctx", "没变", "界面上都显示成 1")
        + verdict("看值和类型", "gate", "变了", "数字变成了字符串") + '</div>'
        '</div>'
        '<div class="p-bar" data-reveal="4" style="margin-top:16px">原文：字段顺序“组里意见不太一致”；<code>1</code> 变成 <code>"1"</code>“这种我们也想知道”</div>'
    ),
    steps=["键换了顺序", "两种结论", "1 变成 \"1\"", "两种结论", "原文怎么说"],
)

scene(
    id="p29", segment="几种结果",
    label="数组插入", title="数组中间插一项，后面怎么对上？",
    lead="按位置比，还是先认出同一个元素再比，结果差别很大。后一种更符合直觉，但要先回答“怎样算同一个元素”",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start">'
        '<div data-reveal="0" style="display:flex;flex-direction:column;gap:10px">'
        + json_box("Before", "[10,20]") + json_box("After", "[5,10,20]") + '</div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">按索引</span>'
        '<ul style="margin:10px 0 8px;padding-left:20px;font-size:20px;line-height:1.6;font-family:var(--p-mono)">'
        '<li>[0] 10 → 5　changed</li><li>[1] 20 → 10　changed</li><li>[2] + 20　added</li></ul>'
        '<h3 style="font-size:24px;margin:0">3 处差异</h3></div>'
        '<div class="p-box" data-role="us" data-reveal="2"><span class="p-tag" data-role="us">按元素对齐</span>'
        '<ul style="margin:10px 0 8px;padding-left:20px;font-size:20px;line-height:1.6;font-family:var(--p-mono)">'
        '<li>+ 5　added</li><li>10　不变</li><li>20　不变</li></ul>'
        '<h3 style="font-size:24px;margin:0">1 处差异</h3></div>'
        '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:18px">商品列表里的对象，<b>按哪个字段认是同一个</b>？LCS、业务主键都是对齐办法，选不选由人定</div>'
    ),
    steps=["插入一项", "按索引", "按元素对齐", "怎样算同一个"],
)

scene(
    id="p30", segment="几种结果",
    label="为什么还会跑偏", title="写细了，为什么还会跑偏？",
    lead="原文已经写了要高亮不同、要支持数组，但没说什么算不同、元素怎样对上。空白处，每个实现者都会用自己的默认做法补上",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="us">需求原文</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">“把不同的地方高亮出来”　“数组也要支持”</h3></div>'
        '<div class="p-grid" style="--n:3;margin-top:16px" data-reveal="1">'
        '<div class="p-box" data-role="ink"><h3 style="font-size:22px">实现者 A</h3><p>键序算变化，按索引比</p></div>'
        '<div class="p-box" data-role="ink"><h3 style="font-size:22px">实现者 B</h3><p>键序不算，按元素对齐</p></div>'
        '<div class="p-box" data-role="agent"><h3 style="font-size:22px">Agent</h3><p>按它采用的常见做法补上</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:18px">能消除分歧的，是<b>人看过结果和代价后作出的决定</b>，写成规则</div>'
    ),
    steps=["原文写了什么", "各自补上默认", "由人决定，写成规则"],
)

# ---------- 人来决定 ----------
scene(
    id="p31", segment="人来决定",
    label="课程怎么定", title="三个问题，课程这样定",
    lead="本课程由讲师担任需求负责人，对每个问题说明选择和代价。按索引是控制范围的取舍：规则简单、结果容易人工核算，代价也要写进 Spec",
    html=(
        '<div class="p-qlist">'
        + "".join(
            f'<div class="p-qrow" data-reveal="{i}"><span class="p-n">{i + 1}</span><div><h3>{q}</h3>'
            f'<p><b>决定</b>　{d}</p><p style="color:var(--p-muted)"><b>代价或范围</b>　{c}</p></div></div>'
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
    '<ul class="p-tree"><li class="is-open"><span class="p-path">config</span><span class="p-note">unchanged · 下面有变化</span>'
    '<ul><li class="is-target"><span class="p-path">retry: 3 → 5</span><span class="p-note">changed</span></li>'
    '<li class="is-block"><span class="p-path">debug: true</span><span class="p-note">removed</span></li></ul></li></ul>'
)
scene(
    id="p32", segment="人来决定",
    label="删掉的字段画在哪", title="删掉的字段，画在哪？",
    lead="只画 After，删掉的字段就从图上消失了。差异要画在一张合并图里：Before 独有的节点保留下来，祖先节点带一个派生标记，帮用户顺着找到下面的改动",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,.8fr) minmax(0,1.2fr);gap:20px;align-items:start">'
        '<div data-reveal="0" style="display:flex;flex-direction:column;gap:10px">'
        + json_box("Before", '{"config":{"retry":3,"debug":true}}') + json_box("After", '{"config":{"retry":5}}') + '</div>'
        f'<div data-reveal="1"><h3 style="font-size:20px;margin:0 0 8px">只画 After</h3>{TREE_AFTER}'
        '<p style="font-size:18px;color:var(--p-muted);margin:8px 0 0">debug 不见了</p></div>'
        f'<div data-reveal="2"><h3 style="font-size:20px;margin:0 0 8px">合并图（示意）</h3>{TREE_MERGED}</div>'
        '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:16px">直接差异 <b>2 处</b>；config 带 <code>hasDiffDescendant</code>，不计入</div>'
        '<p class="source-note">合并图为课程自绘示意，JSON Diff 尚未实现</p>'
    ),
    steps=["一个嵌套例子", "只画 After", "合并图", "数一数"],
)

scene(
    id="p33", segment="人来决定",
    label="其余行为", title="筛选、输错、大文件，怎么办？",
    lead="差异怎样判定、怎样画出来已经定了。用户还会筛选、输错、贴进很大的文件，这些行为也要在交给验收前定下来。节点上限沿用现有设定，具体数值留给 4.4 按运行环境核算",
    html=(
        '<style>#p33 .p-matrix span{padding:6px 12px}</style>'
        '<div class="p-matrix" style="grid-template-columns:200px minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>行为</span><span>课程决定</span></div>'
        + "".join(
            f'<div data-reveal="{g}"><span style="font-weight:700;font-size:19px">{b}</span><span style="font-size:19px">{d}</span></div>'
            for g, b, d in REST)
        + '</div>'
    ),
    steps=["计数与筛选", "出错与上限", "本地、可辨认与暂缓"],
)

# ---------- 写成 Spec ----------
scene(
    id="p34", segment="写成 Spec",
    label="Spec 里写什么", title="Spec 里，写什么？",
    lead="4.1 立过一条分工：Spec 写用户能观察到的行为，代码改哪里留给 Plan。每条规则再带上编号、状态和来源，Brief 里的每个问题就都有了去处",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">行为规则 · 进 Spec</span>'
        '<h3 style="margin:8px 0 6px">“对象键顺序不同，不产生差异”</h3><p>用户能看到、能检查；换一种实现也不用改</p></div>'
        '<div class="p-join" data-reveal="1"><b>≠</b></div>'
        '<div class="p-box" data-role="ink" data-reveal="1"><span class="p-tag" data-role="ink">实现安排 · 留给 Plan</span>'
        '<h3 style="margin:8px 0 6px">“在解析函数里先把键排序再比较”</h3><p>换一种实现就要重写，4.5 结合源码决定</p></div>'
        '</div>'
        '<div class="p-grid" style="--n:3;margin-top:18px" data-reveal="2">'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">编号</span><h3 style="font-size:22px;margin:8px 0 0">REQ-01、REQ-02……</h3></div>'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">状态</span><h3 style="font-size:22px;margin:8px 0 0">Approved · Draft · Deferred</h3></div>'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">来源</span><h3 style="font-size:22px;margin:8px 0 0">Brief 的哪一节、哪个 Open 问题</h3></div>'
        '</div>'
    ),
    steps=["行为规则", "实现安排", "编号、状态、来源"],
)

# ---------- 自检与交接 ----------
scene(
    id="p37", segment="自检与交接",
    label="哪条该留在 Spec", title="这两条，哪条该留在 Spec？",
    lead="先问这句话在决定什么：用户能看到的行为，还是代码怎么改。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>“两个值类型不同，标记为 changed”</h3>'
        '<div data-reveal="1"><p>留在 Spec。用户能在图上看到，能用具体输入检查</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>“在合并图组件里调用比较函数”</h3>'
        '<div data-reveal="2"><p>回到 Plan。它说的是代码怎么改；审 Spec 时，同时找还没决定的边界和混进来的实现安排<br><a href="#p34">回看 Spec 写什么</a></p></div></div></div>'
        '</div>'
    ),
    steps=["两条规则", "类型不同", "调用比较函数"],
)

scene(
    id="p38", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="同一句需求有几种合理结果，人看过代价后作出决定，写成带编号、状态和来源的 Spec。下一节拿具体输入逐项核算，检查这些规则能不能给出一致的答案。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3><div class="p-star" style="width:250px;font-size:22px">几种结果<br>谁来决定<br>写成规则</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px"><li class="is-pass">经过审查的 SPEC.md</li><li class="is-pass">每个 Open 问题的去处</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>4.4 光靠文字规则，拿什么判对错？</h3><p>用具体输入核算这些规则</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()

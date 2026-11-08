#!/usr/bin/env python3
"""4.2 贴上需求原文，就能直接写吗：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。需求原文只在 materials/requirement-note/note.md 维护，本页面源读取它。
p16、p17、p19、p20、p22、p23 等基线副本实跑后再做。
"""
import re
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, repro  # noqa: E402

NOTE_FILE = Path(__file__).resolve().parents[3] / "materials/requirement-note/note.md"
NOTE = NOTE_FILE.read_text(encoding="utf-8").strip()
SNAPSHOT = "docs/specs/sources/requirement-note.md"

lesson = Lesson(__file__, "4.2", "贴上需求原文，就能直接写吗", summary="用 MCP 读取需求原文并核对来源，带着需求调查源码，把愿望、事实和未决问题分开，写成第一份规格 Brief。")
scene = lesson.scene


def note_parts():
    """把 note.md 拆成标题、提出信息和各二级小节（小节名 → 条目或段落列表）。"""
    title = re.search(r"^# (.+)$", NOTE, re.M).group(1)
    meta = re.findall(r"^\*\*(.+?)\*\*：(.+)$", NOTE, re.M)
    sections = {}
    for block in re.split(r"^## ", NOTE, flags=re.M)[1:]:
        name, _, body = block.partition("\n")
        items = [re.sub(r"^(\d+\.|-)\s*", "", line).strip() for line in body.strip().splitlines() if line.strip()]
        sections[name.strip()] = items
    return title, meta, sections


def inline(text):
    """note.md 里的反引号转成 <code>。"""
    return re.sub(r"`([^`]+)`", r"<code>\1</code>", escape(text, quote=False))


TITLE, META, SECTIONS = note_parts()

# ---------- 开篇 ----------
scene(
    id="p13", segment="开篇", layout="lesson-cover",
    label="贴上需求原文，就能直接写吗", title="贴上原文，就能直接写吗？",
    lead="需求方把想法写进了飞书里的一份需求笔记。这一节把原文取回仓库，带着它调查源码，写出第一份规格 Brief",
    html=(
        chapter_map(2)
        + '<div style="margin-top:26px">' + anchor(lit=("Brief",), mini=True, reveal=1) + '</div>'
        + '<div class="p-bar is-light" data-reveal="2" style="margin-top:18px">这一节点亮 <b>Brief</b>：谁在什么场景下用，这次做到哪</div>'
    ),
    steps=["本章位置", "这一节补哪一层", "Brief 回答什么"],
)

# ---------- 需求原文 ----------
want = SECTIONS["希望做到"]
html_p14 = (
    '<style>#p14 .x-note p,#p14 .x-note li{font-size:15px;line-height:1.4;margin:0}#p14 .x-note b,#p14 .x-note code{font-size:15px}</style>'
    '<blockquote data-quote="需求笔记 note.md" style="margin:0;padding:0;border:0;font-size:inherit;line-height:inherit">'
    '<div class="p-box x-note" data-role="us" style="padding:12px 18px">'
    '<div style="display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:22px">'
    '<div>'
    f'<div data-reveal="0"><h3 style="font-size:20px;margin:0 0 2px">{escape(TITLE)}</h3>'
    f'<p style="margin:0 0 6px;color:var(--p-muted)">{" · ".join(escape(v) for _, v in META)}</p>'
    f'<p style="margin:0"><b>背景</b>　{inline(" ".join(SECTIONS["背景"]))}</p></div>'
    '<div data-reveal="1" style="margin-top:6px"><b>希望做到</b><ol style="margin:2px 0 0;padding-left:22px">'
    + "".join(f"<li>{inline(x)}</li>" for x in want) +
    '</ol></div></div>'
    '<div data-reveal="2"><b>还没想清楚的</b><ul style="margin:4px 0 10px;padding-left:20px">'
    + "".join(f"<li>{inline(x)}</li>" for x in SECTIONS["还没想清楚的"]) +
    '</ul><b>怎样算做好了</b>'
    + "".join(f'<p style="margin:4px 0 0">{inline(x)}</p>' for x in SECTIONS["怎样算做好了"]) +
    '</div></div></div></blockquote>'
    '<div class="p-bar" data-reveal="3" style="margin-top:10px">它在飞书里，不在仓库里：<b>Agent 怎样读到它？</b></div>'
)
scene(
    id="p14", segment="需求原文",
    label="需求方写了什么", title="需求方写了什么？",
    lead="这是需求方写在飞书里的需求笔记（课程合成材料）。先把原文读一遍，再看 Agent 怎样读到它。没有接入飞书 MCP 时，按实验说明把原文保存成快照，后面的步骤都一样。",
    html=html_p14,
    steps=["背景", "希望做到", "还没想清楚的", "它在哪里"],
    repro=repro([
        ("在基线副本的根目录建好存放规格文档的目录。", "mkdir -p docs/specs/sources"),
        (f"把下面的原文原样保存为 {SNAPSHOT}，不要改写。", NOTE),
        ("稍后写 Brief 时，在“来源”一节写明：原文来自课程快照，并记下保存时间。", None),
    ], note="讲师现场用飞书 MCP 读取同一份原文；用快照的学员，后面的调查与 Brief 步骤完全相同。", label="实验说明：用课程快照取得原文"),
)

# ---------- MCP ----------
scene(
    id="p15", segment="需求原文",
    label="MCP 是什么", title="MCP：让 Agent 调用外部工具",
    lead="MCP（Model Context Protocol）是让 Agent 连接外部工具的一种约定。客户端连上 MCP 服务，服务列出它提供的工具；Agent 决定调用哪个，工具的返回进入对话。讲师已在本机接好飞书 MCP，接入步骤与更多用法在 4.6。",
    html=(
        '<div class="p-flow" style="--n:3;column-gap:60px" data-reveal="0">'
        '<div class="p-node" data-role="agent"><h3>Codex</h3><p>MCP 客户端</p></div>'
        '<div class="p-node" data-role="tool"><h3>lark-mcp</h3><p>MCP 服务，在本机运行</p></div>'
        '<div class="p-node" data-role="ink"><h3>飞书</h3><p>需求笔记所在的文档</p></div>'
        '</div>'
        '<div class="p-set is-solid" data-role="tool" data-reveal="1" style="margin-top:14px;padding:10px 18px">'
        '<h3 style="font-size:20px;margin:0 0 8px">它列出的工具：名称、参数、说明</h3>'
        '<div class="p-items" style="display:flex;flex-direction:column;gap:6px">'
        '<div class="p-item" style="font-size:18px"><code>wiki_v2_space_getNode</code>　解析知识库节点，拿到文档 ID</div>'
        '<div class="p-item" style="font-size:18px"><code>docx_v1_document_rawContent</code>　按文档 ID 读取正文</div>'
        '</div></div>'
        '<p data-reveal="2" style="margin:10px 0 0;font-size:19px">Agent 决定调用哪个工具，返回进入对话，和第 2 章看到的工具返回是同一回事</p>'
        '<div class="p-bar" data-reveal="3" style="margin-top:10px">它在本机运行、带着讲师的凭证，所以<b>只开放这两个读取工具</b></div>'
    ),
    steps=["三方", "工具列表", "调用与返回", "只开放读取"],
)

# ---------- 原文够不够 ----------
ROWS = [
    ("在 JSON Crack 里同时放两份 JSON……把不同的地方高亮出来", "愿望", "us"),
    ("数组也要支持", "愿望", "us"),
    ("最好能只看变化的部分", "愿望", "us"),
    ("数据里可能有内部配置，最好不要上传到别的地方", "约束", "ink"),
    ("后端返回的字段顺序有时会变，这算不算改动，组里意见不太一致", "没想清楚", "gate"),
    ("文件可能比较大，几千行的那种", "要回代码看", "ctx"),
]
scene(
    id="p18", segment="够不够",
    label="原文够不够决定行为", title="原文够不够让人决定行为？",
    lead="逐句看原文，会发现几种不同的话：愿望、约束、连需求方也没想清楚的，还有要回到代码里才能判断的。话写得再顺，也不会自己变成规则。",
    html=(
        '<style>#p18 .p-matrix span{padding:5px 10px}#p18 .p-chip{font-size:15px;padding:2px 10px}</style>'
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) 150px">'
        '<div class="is-head" data-reveal="0"><span>原文</span><span>这句话是</span></div>'
        + "".join(
            f'<div><span data-reveal="0" style="font-size:18px">“{escape(q)}”</span>'
            f'<span data-reveal="1"><span class="p-chip" data-role="{role}">{tag}</span></span></div>'
            for q, tag, role in ROWS)
        + '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px">还没说清：<b>什么算不同 · 数组怎样对上 · 只看变化时留下哪些</b></div>'
    ),
    steps=["逐句读", "这句话是什么", "还没说清的"],
)

# ---------- 三类信息 ----------
scene(
    id="p21", segment="分开三类",
    label="事实与要人决定的", title="哪些是事实，哪些要人决定？",
    lead="有了原文和调查结果，就能把三类信息分开：愿望来自原文，事实要有源码或配置的出处，未决问题要人来决定。Agent 的建议可以连同依据记下，但仍是未决问题。",
    html=(
        '<div class="p-grid" style="--n:3">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">愿望与目标</span><h3 style="margin:8px 0 6px">同时放两份 JSON，对比后高亮不同</h3><p>依据：需求原文</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">已查实的事实</span><h3 style="margin:8px 0 6px">图数据从哪个入口产生，节点上限由什么设定</h3><p>依据：源码与配置，附出处</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="2"><span class="p-tag" data-role="gate">未决问题</span><h3 style="margin:8px 0 6px">键换序算不算差异，数组怎样对齐，删除的字段怎样显示</h3><p>依据：要人决定，留给 4.3</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:16px">Agent 建议“数组按索引比较”：<b>记下建议和依据，它仍是未决问题</b></div>'
    ),
    steps=["愿望与目标", "已查实的事实", "未决问题", "Agent 的建议"],
)

# ---------- 自检与交接 ----------
scene(
    id="p24", segment="自检与交接",
    label="两句话能当规则或授权吗", title="这两句话，能当规则或授权吗？",
    lead="判断一句话能不能直接用，先问它出自谁、有没有依据、由谁决定。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>Agent 建议“数组按索引比较”，能直接写进 Brief 当作已批准规则吗？</h3>'
        '<div data-reveal="1"><p>不能。记下建议和依据，采用与否要人决定，留在 Open 问题里，交给 4.3</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>原文最后一句“开发同学看完可以直接动手做”，算不算可以跳过 Open 问题的授权？</h3>'
        '<div data-reveal="2"><p>不算。这是需求方的说法，记下即可；会改变实现的问题还没定，就不能动手<br><a href="#p21">回看三类信息</a></p></div></div></div>'
        '</div>'
    ),
    steps=["两个问题", "Agent 的建议", "原文里的“直接动手”"],
)

scene(
    id="p25", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="原文取回仓库并核对了来源，带着需求查清了相关的源码事实，写出了带出处的 Brief。下一节逐项决定 Open 问题里的行为。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3><div class="p-star" style="width:250px;font-size:22px">出自谁<br>有没有依据<br>由谁决定</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px"><li class="is-pass">需求原文快照</li><li class="is-pass">带来源和事实的 Brief</li><li class="is-pass">Open 问题清单</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>4.3 要求写得再细，为什么还会跑偏？</h3><p>逐项决定 Open 问题里的行为</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()

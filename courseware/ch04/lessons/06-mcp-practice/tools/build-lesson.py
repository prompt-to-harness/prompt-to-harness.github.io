#!/usr/bin/env python3
"""4.6 除了读一份需求，MCP 日常还能怎么帮我们干活：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p61–p68 先占位，待教学材料准备并实跑后再写。不预写 Agent 回复。
飞书主案例用官方 CLI，其他短演示仍用 MCP；不要把 CLI 写成 MCP。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map  # noqa: E402

lesson = Lesson(
    __file__, "4.6", "除了读一份需求，MCP 日常还能怎么帮我们干活",
    summary="用独立的“开发者分享会”材料做演示，看懂工具用途、实际结果和选用条件；JSON Diff 仍从 4.5 规格基线进入第 5 章。",
)
scene = lesson.scene


# ---------- 开篇 ----------
scene(
    id="p59", segment="开篇", layout="lesson-cover",
    label="除了读一份需求，MCP 日常还能怎么帮我们干活", title="还能怎么帮我们干活？",
    lead="上一节已经提交规格基线。这一节不再改 JSON Diff，用独立材料做演示",
    html=(
        chapter_map(6)
        + '<div style="margin-top:26px">' + anchor(lit=(), done=("Brief", "Spec", "Acceptance", "Plan", "Tasks"), mini=True, reveal=1) + '</div>'
        + '<div class="p-bar is-light" data-reveal="2" style="margin-top:18px">本节用独立的“开发者分享会”材料，<b>偏重演示</b>；以看懂为主，按需要选做即可</div>'
    ),
    steps=["本章位置", "规格主线交给第 5 章", "用独立材料做演示"],
)


# ---------- 接入飞书 ----------
scene(
    id="p60", segment="接入飞书",
    label="怎样把飞书接到这次要用的工具上", title="怎样把飞书接到这次要用的工具上？",
    lead="4.2 用 MCP 读过需求。飞书这边，官方目前给个人用户的推荐是命令行工具。没接上也可以看后面的演示",
    html=(
        '<div class="p-qlist" data-reveal="0">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>按官方文档安装飞书命令行工具</h3></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>重启 Codex，让对应技能加载</h3></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>用本人身份登录一次</h3></div></div>'
        '</div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:10px">这不是 MCP。Agent 通过技能调用命令行，<b>不需要启动 MCP 服务</b></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:8px">凭证和密钥不进公开材料和画面。能力以演练时的实际结果为准</div>'
    ),
    steps=["接入时要做的事", "这不是 MCP", "凭证不进画面"],
)


def pending(pid, segment, question):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html='<div class="p-bar is-light" data-reveal="0">教学材料和演示还没有实跑，本页待演练后制作</div>',
        steps=["待演练后制作"],
    )


pending("p61", "云文档主案例", "怎样把一组云文档整理成可核对的结果？")
pending("p62", "云文档主案例", "整理结果对得上原文和评论吗？")
pending("p63", "云文档主案例", "整理稿怎样创建，又怎样改一处？")
pending("p64", "短演示", "电子表格和云文档里的表是一回事吗？")
pending("p65", "短演示", "多维表格这一次做什么、怎样核对？")
pending("p66", "短演示", "同一份数据怎样变成图？")
pending("p67", "短演示", "出行约束怎样落到地点和路线？")
pending("p68", "短演示", "这几个常用 MCP 各能看见什么结果？")


# ---------- 选用条件、自检与小结 ----------
scene(
    id="p69", segment="选用条件",
    label="怎样按要做的事选工具", title="怎样按要做的事选工具？",
    lead="选工具时先看要完成的动作，再看来源、范围和条件。不要求装齐这些工具",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="us">选择顺序</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">先看要完成的动作，再看来源、范围、账号、网络和数据条件</h3>'
        '<p style="margin:6px 0 0">整理文档、改表格、画图、查路线，要做的事不同，该看的工具也不同</p></div>'
        '<div class="p-grid" style="--n:3;margin-top:10px" data-reveal="1">'
        '<div class="p-box" data-role="ctx" style="padding:10px 12px"><span class="p-tag" data-role="ctx">来源</span>'
        '<h3 style="font-size:20px;margin:6px 0 0">分清官方和社区</h3>'
        '<p style="margin:4px 0 0">12306-mcp 是社区实现<br>不是购票工具</p></div>'
        '<div class="p-box" data-role="ctx" style="padding:10px 12px"><span class="p-tag" data-role="ctx">数据条件</span>'
        '<h3 style="font-size:20px;margin:6px 0 0">本机有服务，不等于数据只留在本机</h3>'
        '<p style="margin:4px 0 0">AntV 默认远程渲染</p></div>'
        '<div class="p-box" data-role="ctx" style="padding:10px 12px"><span class="p-tag" data-role="ctx">接入形式</span>'
        '<h3 style="font-size:20px;margin:6px 0 0">飞书用官方命令行，不是 MCP</h3>'
        '<p style="margin:4px 0 0">其他短演示仍用 MCP</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:8px">不要求装齐。百度地图只作高德的替代说明；来源和能力录制前再复核</div>'
    ),
    steps=["选择顺序", "要分清的界限", "不要求装齐"],
)

scene(
    id="p70", segment="自检与交接",
    label="整理稿已创建，接下来检查什么", title="整理稿已创建，接下来检查什么？",
    lead="请先判断，再看参考结论。这是本节的学员判断",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:16px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:26px;margin:10px 0 0">如果对话里出现“整理稿已创建”，下一步该做什么？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:16px">打开实际文档，核对<b>位置、标题、正文、来源和待决定事项</b>。不能只看对话里的“已完成”</div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2" style="padding:12px 18px;margin-top:14px">'
        '<span class="p-tag" data-role="ctx">同样适用于后面的演示</span>'
        '<p style="font-size:20px;margin:8px 0 0">定点更新之后，也要回到实际文档看变化。对话说明和可见结果，各有要核对的对象</p></div>'
    ),
    steps=["先判断", "打开实际文档核对", "更新后也要再看"],
)

scene(
    id="p71", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="看懂即可。选做的成果和规格主线分开，不打断这次交接",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3><div class="p-star" style="font-size:22px">对照来源<br>和实际结果<br>不能只看对话</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">带来源与结果核对的材料</li>'
        '<li class="is-pass">附使用条件的工具清单</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一章</h3><div class="p-box" data-role="us">'
        '<h3>第 5 章按任务实现</h3><p>JSON Diff 仍从 4.5 已提交的规格基线进入第 5 章</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "交给第 5 章"],
)

lesson.write()

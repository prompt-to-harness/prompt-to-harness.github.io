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
    lead="接入飞书有两种方式。后面演示用更适合个人使用的飞书 CLI",
    html=(
        '<style>'
        '#p60 .scene-content{gap:10px}'
        '#p60 .p-grid{gap:14px}'
        '#p60 .p-grid .p-box{padding:14px 18px}'
        '#p60 .p-grid h3{font-size:24px;margin:8px 0 0}'
        '#p60 .p-grid p{margin:6px 0 0;font-size:20px;line-height:1.45}'
        '#p60 .p-bar{margin-top:4px;padding:10px 18px}'
        '</style>'
        '<div class="p-grid" style="--n:2" data-reveal="0">'
        '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">个人使用</span>'
        '<h3>推荐飞书 CLI</h3>'
        '<p>本质上是一组技能。Agent 通过技能调用，<br>适合个人使用</p></div>'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">团队环境</span>'
        '<h3>推荐飞书 MCP</h3>'
        '<p>在团队里要搭建 Agent 工作流时<br>更适合</p></div></div>'
        '<div class="p-bar" data-reveal="1">主要区别：CLI 本质上是一组技能，适合个人使用；团队里搭建 Agent 工作流时，MCP 更适合</div>'
        '<div class="p-bar is-light" data-reveal="2">后面用更适合个人使用的飞书 CLI 作演示。没接上也可以看</div>'
    ),
    steps=["两种接入方式", "两者的区别", "后面用飞书 CLI 演示"],
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


# ---------- 其他推荐、自检与小结 ----------
scene(
    id="p69", segment="其他推荐",
    label="还可以再看这三个", title="还可以再看这三个？",
    lead="画面来自项目公开演示，不是这一节已经实跑的结果。不要求装齐",
    html=(
        '<style>'
        'body[data-mode="slides"] #p69 .scene-content{top:236px;height:432px;gap:10px}'
        'body[data-mode="slides"] #p69 .lede{width:1168px}'
        '#p69 .p-grid{gap:14px;height:100%;align-items:stretch}'
        '#p69 .p-grid .p-box{padding:10px 12px;display:flex;flex-direction:column;min-height:0}'
        '#p69 .p-tag{margin-bottom:6px;font-size:16px;padding:4px 8px}'
        '#p69 .p-grid h3{font-size:22px;margin:0;line-height:1.3}'
        '#p69 .p-grid .hint{margin:4px 0 8px;font-size:16px;line-height:1.35}'
        '#p69 .shot{flex:1;min-height:0;overflow:hidden;border-radius:6px;background:#111}'
        '#p69 .shot a,#p69 .shot img{display:block;width:100%;height:100%}'
        '#p69 .shot img{object-fit:contain}'
        '#p69 .src{font-size:13px;color:var(--p-muted);margin:6px 0 0;line-height:1.3}'
        '</style>'
        '<div class="p-grid" style="--n:3">'
        '<div class="p-box" data-role="us" data-reveal="0">'
        '<span class="p-tag" data-role="us">官方</span>'
        '<h3>GitHub MCP</h3>'
        '<p class="hint">在仓库里列出 Issue、再开新 Issue。写操作要确认</p>'
        '<div class="shot"><a href="assets/github-mcp-open-issue-official.gif">'
        '<img src="assets/github-mcp-open-issue-official.gif" '
        'alt="VS Code Copilot 调用 GitHub MCP：已列出 Issue，创建新 Issue 前出现 Continue 确认"></a></div>'
        '<p class="src">官方 v0.3.0 发布页演示</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1">'
        '<span class="p-tag" data-role="ctx">官方</span>'
        '<h3>MiniMax MCP</h3>'
        '<p class="hint">生成图、语音或视频后，打开文件来看</p>'
        '<div class="shot"><a href="assets/minimax-mcp-video-result-official.jpg">'
        '<img src="assets/minimax-mcp-video-result-official.jpg" '
        'alt="系统播放器正在播放 MiniMax 生成的冲浪视频 video_25659_20250409_195209.mp4"></a></div>'
        '<p class="src">官方说明里打开生成视频后的画面</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2">'
        '<span class="p-tag" data-role="ctx">社区</span>'
        '<h3>FreeCAD MCP</h3>'
        '<p class="hint">建模过程要在 FreeCAD 窗口里看见</p>'
        '<div class="shot"><a href="assets/freecad-mcp-flange-official.gif">'
        '<img src="assets/freecad-mcp-flange-official.gif" '
        'alt="对话里调用 FreeCAD MCP，右侧窗口逐步出现法兰盘三维模型"></a></div>'
        '<p class="src">项目仓库里的法兰盘建模演示</p></div>'
        '</div>'
    ),
    steps=["GitHub 官方 MCP", "MiniMax 官方 MCP", "FreeCAD 社区 MCP"],
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

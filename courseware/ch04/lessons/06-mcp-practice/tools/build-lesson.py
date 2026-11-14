#!/usr/bin/env python3
"""4.6 除了读一份需求，MCP 日常还能怎么帮我们干活：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p59、p60、p70、p71 已按 2026-11-14 口径改过；p61 已按新分镜重写接入演示，画面不展示凭证；p62 已按新分镜写出首版，画面不预写文档正文或 Agent 转述，请求里使用活动方案链接占位符；p63 已按新分镜写出首版，画面不预写更新后的正文或上传结果，请求里使用评审补充和演示目录链接占位符；p64 已按新分镜写出首版，画面不预写改后的格子，请求里使用分场次报名统计链接占位符，人数用当场给出的占位；p65 已按新分镜写出首版，画面不预写创建结果或示例记录，请求里使用演示目录链接占位符；p66–p68 仍先占位。不预写尚未实跑的 Agent 回复。
飞书读写演示用官方 CLI，实用推荐短演示仍用 MCP；不要把 CLI 写成 MCP。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, repro  # noqa: E402

lesson = Lesson(
    __file__, "4.6", "除了读一份需求，MCP 日常还能怎么帮我们干活",
    summary="先做飞书 CLI 主演示，再做实用 MCP 工具推荐；看懂工具用途、实际结果和选用条件；JSON Diff 仍从 4.5 规格基线进入第 5 章。",
)
scene = lesson.scene


# ---------- 开篇 ----------
scene(
    id="p59", segment="开篇", layout="lesson-cover",
    label="除了读一份需求，MCP 日常还能怎么帮我们干活", title="还能怎么帮我们干活？",
    lead="上一节已经提交规格基线。这一节不再改 JSON Diff，先做飞书 CLI 主演示，再做实用 MCP 工具推荐",
    html=(
        '<style>body[data-mode="slides"] .segment:nth-child(4){min-width:190px}</style>'
        + chapter_map(6)
        + '<div style="margin-top:26px">' + anchor(lit=(), done=("Brief", "Spec", "Acceptance", "Plan", "Tasks"), mini=True, reveal=1) + '</div>'
        + '<div class="p-bar is-light" data-reveal="2" style="margin-top:18px">本节先做<b>飞书 CLI 主演示</b>，再做<b>实用 MCP 工具推荐</b>；以看懂为主，按需要选做即可</div>'
    ),
    steps=["本章位置", "规格主线交给第 5 章", "先飞书主演示，再推荐短演示"],
)


# ---------- 接入飞书 ----------
scene(
    id="p60", segment="接入飞书",
    label="怎样把飞书接到这次要用的工具上", title="怎样把飞书接到这次要用的工具上？",
    lead="接入飞书有两种方式。下一页把两套都接上，后面的读写演示用飞书 CLI",
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
        '<div class="p-bar is-light" data-reveal="2">下一页把两套都接上；后面的读写演示用飞书 CLI。没接上也可以看</div>'
    ),
    steps=["两种接入方式", "两者的区别", "下一页接入，后面用 CLI 演示"],
)


def pending(pid, segment, question):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html='<div class="p-bar is-light" data-reveal="0">教学材料和演示还没有实跑，本页待演练后制作</div>',
        steps=["待演练后制作"],
    )


MCP_DOC = "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/mcp_installation"
APP_DOC = "https://open.feishu.cn/document/uQjL04CN/ukzM04SOzQjL5MDN"
CLI_DOC = "https://open.feishu.cn/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu"
PROMPT_P61_CLI = (
    f"请阅读 {CLI_DOC}，按文档在本机自助安装飞书 CLI 对应的 Skill。"
    "安装完成后，给出授权链接，由我手动完成授权。"
)


def jump(text, url):
    """展开层顶部的官方入口按钮，由播放器按 repro.steps[].jump 渲染。"""
    return {"jump": True, "text": text, "links": [{"text": text, "url": url}]}


# ---------- 飞书 CLI 主演示 ----------
scene(
    id="p61", segment="飞书 CLI 主演示",
    label="怎样登录并接上飞书 MCP 和飞书 CLI",
    title="怎样登录并接上飞书 MCP 和飞书 CLI？",
    lead="这一页要把两套都接上。接好之后，后面的读写演示用飞书 CLI。不要把密钥或授权详情贴进对话。",
    html=(
        '<style>'
        '#p61 .scene-content{gap:10px}'
        'body[data-mode="slides"] #p61 .scene-content{grid-template-columns:1fr 1fr;gap:14px}'
        'body[data-mode="slides"] #p61 .scene-content>.p-bar{grid-column:1/-1}'
        '#p61 .p-box{padding:14px 18px}'
        '#p61 .p-box h3{font-size:24px;margin:8px 0 0}'
        '#p61 .p-box p{margin:6px 0 0;font-size:20px;line-height:1.45}'
        '#p61 .p-bar{margin-top:4px;padding:10px 18px}'
        '#p61 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}'
        '#p61 .p-repro .p-jumps{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 14px}'
        '#p61 .p-repro .p-jumps a{display:inline-flex;align-items:center;gap:6px;'
        'padding:8px 14px;border:1.5px solid #243042;border-radius:8px;'
        'background:#FFFDF7;color:#243042;font-weight:700;text-decoration:none}'
        '#p61 .p-repro .p-jumps a::after{content:"↗";color:#5B6573;font-weight:400}'
        '#p61 .p-repro .p-jumps a:hover,#p61 .p-repro .p-jumps a:focus-visible{background:#F1EEE4}'
        '#p61 .p-repro .p-jumps a:focus-visible{outline:2px solid #243042;outline-offset:2px}'
        '</style>'
        '<div class="p-bar is-light" data-reveal="0">一套是飞书 MCP，一套是飞书官方 CLI。以看懂为主，按需要选做；没接上也可以看后面的演示</div>'
        '<div class="p-box" data-role="ctx" data-reveal="1">'
        '<span class="p-tag" data-role="ctx">飞书 MCP</span>'
        '<h3>从创建应用讲到配置</h3>'
        '<p>创建应用 → 安装并配置 lark-mcp</p>'
        '<p>完成标志：应用已创建，本地已配置，Agent 能调用飞书工具</p>'
        f'<p class="p-go"><a href="{MCP_DOC}" target="_blank" rel="noopener">打开官方接入文档</a></p></div>'
        '<div class="p-box" data-role="us" data-reveal="2">'
        '<span class="p-tag" data-role="us">飞书 CLI</span>'
        '<h3>把文档链接交给 Agent</h3>'
        '<p>交给官方文档链接 → 自助安装 Skill → 返回授权链接，由人完成授权</p>'
        f'<p class="p-go"><a href="{CLI_DOC}" target="_blank" rel="noopener">打开官方说明</a></p></div>'
    ),
    steps=["两套都要接上", "接上飞书 MCP", "接上飞书 CLI"],
    repro={
        "label": "接入指引",
        "note": "飞书 CLI 是一组技能，不要把它说成 MCP。不要把密钥或授权详情发给别人，也不要贴进对话。",
        "steps": [
            jump("本地调用 OpenAPI MCP", MCP_DOC),
            jump("创建企业自建应用", APP_DOC),
            jump("飞书 CLI 官方说明", CLI_DOC),
            {
                "text": (
                    "飞书 MCP：按官方文档《本地调用 OpenAPI MCP》操作，从在开放者后台创建企业自建应用，讲到安装并配置 lark-mcp。"
                    "文档里有逐步说明和授权截图。创建应用的更细说明见《创建企业自建应用》。"
                    "完成后，应能在 Agent 里调用飞书工具。不要把应用密钥贴进对话。"
                ),
                "links": [
                    {"text": "《本地调用 OpenAPI MCP》", "url": MCP_DOC},
                    {"text": "《创建企业自建应用》", "url": APP_DOC},
                ],
            },
            {
                "text": "飞书 CLI：把下面这段请求发给本地 Agent，让它按官方文档自助安装 Skill。官方说明见《飞书 CLI 官方说明》。",
                "code": PROMPT_P61_CLI,
                "links": [{"text": "《飞书 CLI 官方说明》", "url": CLI_DOC}],
            },
            {"text": "打开 Agent 返回的授权链接，在浏览器里完成授权。之后可以用这套 CLI 读写飞书文档。"},
        ],
    },
)


PROMPT_P62 = "请阅读 <活动方案链接> 这个飞书文档，告诉我这个文档中写了什么。"


scene(
    id="p62", segment="飞书 CLI 主演示", layout="prompt-scene", prompt=PROMPT_P62,
    label="怎样用一句话加一个链接，让 Agent 读出飞书云文档",
    title="怎样用一句话加一个链接，让 Agent 读出飞书云文档？",
    lead="将占位符换成你有权访问的活动方案链接，再发给本地 Agent。不要改写这篇用于阅读的文档",
    html=(
        '<style>#p62 .prompt{height:220px}</style>'
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>先看清这句请求</b><small>只要一句话和一个链接</small></span></li>'
        '<li data-reveal="1"><span><b>发给本地 Agent</b><small>看它有没有去读这份文档</small></span></li>'
        '<li data-reveal="2"><span><b>打开原文核对</b><small>转述要对得上原文，不能只看对话</small></span></li>'
        '</ol></div>'
    ),
    steps=["先看清这句请求", "发给本地 Agent", "打开原文核对"],
)




DOC_REVIEW = "<评审补充链接>"
DIR_DEMO = "<演示目录链接>"
PROMPT_P63_UPDATE = (
    "请使用飞书官方 CLI，以本人身份，更新这份飞书云文档：\n"
    f"{DOC_REVIEW}\n\n"
    "只改「补充建议」里的第 2 条，把它改成：建议每个主题结束后安排 10 分钟答疑，方便现场控制节奏。\n"
    "不要改其他条目，不要改活动方案，也不要向群聊发送消息。改完后告诉我改了哪一处。"
)
PROMPT_P63_CREATE = (
    "请使用飞书官方 CLI，以本人身份，在知识库目录\n"
    f"{DIR_DEMO}\n"
    "下新建一篇云文档，标题为「开发者分享会 · 签到和入场说明」。\n\n"
    "正文只写三项，都标明是教学演示、不是正式通知：\n"
    "1. 入场时间：活动开始前 15 分钟\n"
    "2. 签到方式：现场扫码签到\n"
    "3. 请随身携带学生证\n\n"
    "不要修改该目录里的其他文档。创建完成后，给出文档链接。"
)


scene(
    id="p63", segment="飞书 CLI 主演示",
    label="除了读取，怎样让 Agent 更新、上传飞书云文档",
    title="除了读取，怎样让 Agent 更新、上传飞书云文档？",
    lead="要写清改哪一份、改什么，不要覆盖无关内容。更新和上传是两件事，都要回到实际位置核对。不要改活动方案，也不要改 4.2 的需求笔记",
    html=(
        '<style>'
        '#p63 .scene-content{gap:10px}'
        '#p63 .p-box{padding:14px 18px}'
        '#p63 .p-box h3{font-size:24px;margin:8px 0 0}'
        '#p63 .p-box p{margin:6px 0 0;font-size:20px;line-height:1.45}'
        '#p63 .p-bar{margin-top:4px;padding:10px 18px}'
        '#p63 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}'
        '#p63 .p-repro .p-jumps{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 14px}'
        '#p63 .p-repro .p-jumps a{display:inline-flex;align-items:center;gap:6px;'
        'padding:8px 14px;border:1.5px solid #243042;border-radius:8px;'
        'background:#FFFDF7;color:#243042;font-weight:700;text-decoration:none}'
        '#p63 .p-repro .p-jumps a::after{content:"↗";color:#5B6573;font-weight:400}'
        '#p63 .p-repro .p-jumps a:hover,#p63 .p-repro .p-jumps a:focus-visible{background:#F1EEE4}'
        '#p63 .p-repro .p-jumps a:focus-visible{outline:2px solid #243042;outline-offset:2px}'
        '</style>'
        '<div class="p-box" data-role="ctx" data-reveal="0">'
        '<span class="p-tag" data-role="ctx">更新</span>'
        '<h3>只改评审补充的第 2 条</h3>'
        '<p>把第 2 条改成“每个主题结束后安排 10 分钟答疑”。不要改其他条目，也不要改活动方案</p>'
        '</div>'
        '<div class="p-bar is-light" data-reveal="1">打开实际文档，核对第 2 条是否写成了 10 分钟答疑。对话里说“已更新”还不够</div>'
        '<div class="p-box" data-role="us" data-reveal="2">'
        '<span class="p-tag" data-role="us">新建</span>'
        '<h3>在演示目录新建签到说明</h3>'
        '<p>新建「开发者分享会 · 签到和入场说明」。更新和上传是两件事，都要回到实际位置核对</p>'
        '</div>'
    ),
    steps=["指定文档和改动范围", "打开实际文档核对", "新建后再核对位置和内容"],
    repro={
        "label": "发给 Agent 的请求",
        "note": "将占位符换成你有权访问的教学文档和目录链接。只改指定的教学文档，不要改活动方案，也不要改 4.2 的需求笔记。不要向群聊发消息。",
        "steps": [
            {
                "text": "先发出下面这段更新请求。只改评审补充的第 2 条。",
                "code": PROMPT_P63_UPDATE,
            },
            {
                "text": "打开实际文档，确认第 2 条已经改成 10 分钟答疑，再发出下面这段新建请求。",
                "code": PROMPT_P63_CREATE,
            },
            {"text": "打开演示目录，确认新文档的位置、标题和正文。哪一步做不到，就按实际完成范围讲，不换别的工具顶上。"},
        ],
    },
)




SHEET_DOC = "<分场次报名统计链接>"
PROMPT_P64 = (
    "请使用飞书官方 CLI，以本人身份，修改这份飞书电子表格：\n"
    f"{SHEET_DOC}\n\n"
    "只改工作表「报名统计」里场次 C · 开源协作 的「已报名」，改成 <当场给出的人数>。\n"
    "不要改其他格子，不要改名额，也不要新增列。改完后告诉我改了哪一格。"
)


scene(
    id="p64", segment="飞书 CLI 主演示", layout="prompt-scene", prompt=PROMPT_P64,
    label="怎样用一段 prompt 修改飞书电子表格",
    title="怎样用一段 prompt 修改飞书电子表格？",
    lead="先分清这是单独的电子表格，不要用云文档里的普通表格代替。只改一个格子，再打开实际表格核对",
    html=(
        '<style>'
        '#p64 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}'
        '</style>'
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>先看清这是电子表格</b><small>不要用云文档里的普通表格代替</small></span></li>'
        '<li data-reveal="1"><span><b>发给本地 Agent</b><small>只改场次 C 的已报名，人数由讲师当场给出</small></span></li>'
        '<li data-reveal="2"><span><b>打开实际表格核对</b><small>看刚才改的那一格，不能只看对话</small></span></li>'
        '</ol>'
        '<p>将占位符换成你有权访问的报名统计链接，再填写人数</p></div>'
    ),
    steps=["先看清这是电子表格", "发给本地 Agent", "打开实际表格核对"],
)




PROMPT_P65 = (
    "请使用飞书官方 CLI，以本人身份，在知识库目录\n"
    f"{DIR_DEMO}\n"
    "下新建一个多维表格，标题为「开发者分享会 · 任务追踪」。\n\n"
    "用于追踪分摊到各个团队成员的任务，字段为：成员任务、创建时间、优先级、当前进度。\n"
    "不要改该目录里的其他文档或表格，也不要用已有表格顶替。如需放入示例记录，请标明是教学演示。创建完成后，给出表格链接。"
)


scene(
    id="p65", segment="飞书 CLI 主演示", layout="prompt-scene", prompt=PROMPT_P65,
    label="怎样用一段 prompt 创建任务追踪多维表格",
    title="怎样用一段 prompt 创建任务追踪多维表格？",
    lead="用一段 prompt 新建多维表格，用来追踪团队任务。这一页是创建，不要用已有表顶替。建好后打开实际表格核对",
    html=(
        '<style>'
        '#p65 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}'
        '</style>'
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>先看清要建什么</b><small>成员任务、创建时间、优先级、当前进度</small></span></li>'
        '<li data-reveal="1"><span><b>发给本地 Agent</b><small>建在演示目录，不要用已有表顶替</small></span></li>'
        '<li data-reveal="2"><span><b>打开实际多维表格核对</b><small>看位置、字段和记录，不能只看对话</small></span></li>'
        '</ol>'
        '<p>将占位符换成你有权访问的演示目录链接</p></div>'
    ),
    steps=["先看清要建什么", "发给本地 Agent", "打开实际多维表格核对"],
)


pending("p66", "实用 MCP 工具推荐", "同一份数据怎样变成图？")
pending("p67", "实用 MCP 工具推荐", "出行约束怎样落到地点和路线？")
pending("p68", "实用 MCP 工具推荐", "这几个常用 MCP 各能看见什么结果？")


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
    label="文档已经改好了，接下来检查什么", title="文档已经改好了，接下来检查什么？",
    lead="请先判断，再看参考结论。这是本节的学员判断",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:16px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:26px;margin:10px 0 0">如果对话里出现“文档已经改好了”或“多维表格已创建”，下一步该做什么？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:16px">打开实际文档或多维表格，核对<b>位置、标题或字段、正文或记录</b>是否符合刚才的请求。不能只看对话里的“已完成”</div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2" style="padding:12px 18px;margin-top:14px">'
        '<span class="p-tag" data-role="ctx">同样适用于后面的演示</span>'
        '<p style="font-size:20px;margin:8px 0 0">更新或创建之后，也要回到实际结果看变化。对话说明和可见结果，各有要核对的对象</p></div>'
    ),
    steps=["先判断", "打开实际结果核对", "更新或创建后也要再看"],
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

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""4.6 除了读一份需求，MCP 日常还能怎么帮我们干活：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p59、p60、p70、p71 已按 2026-11-14 口径改过；p61 已按新分镜重写接入演示，画面不展示凭证；p62 已按新分镜写出首版，画面不预写文档正文或 Agent 转述，请求里使用活动方案链接占位符；p63 已按新分镜写出首版，画面不预写更新后的正文或上传结果，请求里使用评审补充和演示目录链接占位符；p64 已按新分镜写出首版，画面不预写改后的格子，请求里使用分场次报名统计链接占位符，人数用当场给出的占位；p65 已按新分镜写出首版，画面不预写创建结果或示例记录，请求里使用演示目录链接占位符；p66 已按实跑结果补上「效果示意」按钮，主画面不预写图表，安装指引与效果示意均用页内按钮展开，并写明默认远程渲染与数据安全；p67 已按第二次实跑补上「效果示意」按钮，主画面不预写行程或地图，安装指引与效果示意均用页内按钮展开，Key 不进入公开材料；p68 已按四次实跑写出，主画面以田字四格介绍四个 MCP，安装指引、测试请求和效果示意分别用各格内按钮展开；主画面不预写车次、页面内容、文档原文或三维结果；不把 Key 写入公开材料。不预写尚未实跑的 Agent 回复。
飞书读写演示用官方 CLI，实用推荐短演示仍用 MCP；不要把 CLI 写成 MCP。
"""
import html
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, pop, repro  # noqa: E402

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



ANTV_REPO = "https://github.com/antvis/mcp-server-chart"
CODEX_MCP_DOC = "https://learn.chatgpt.com/docs/extend/mcp.md"
ANTV_RENDER = "https://antv-studio.alipay.com/api/gpt-vis"
PROMPT_P66 = (
    "请使用 AntV Chart MCP，根据下面这组教学数据生成柱状图。\n"
    "\n"
    "- AI 编程入门：40\n"
    "- 前端项目实践：25\n"
    "- 开源协作：15\n"
    "\n"
    "请使用中文类别标签，并给图表加上能说明含义的标题。生成后，把图片文件保存在当前项目根目录，不要把图表写回飞书。"
)
GUIDE_P66 = (
    '<div class="p-guide">'
    "<p>这一页用的是官方 AntV Chart MCP，npm 包是 <code>@antv/mcp-server-chart</code>。"
    "本机先要有 Node.js 和 <code>npx</code>。默认不用申请密钥</p>"
    f'<p class="p-go"><a href="{ANTV_REPO}" target="_blank" rel="noopener">打开 GitHub 仓库</a>'
    f'<a href="{CODEX_MCP_DOC}" target="_blank" rel="noopener">打开 Codex 的 MCP 说明</a></p>'
    "<h3>在 Codex 里安装</h3>"
    "<p>可以执行下面这条命令。也可以把配置写进 <code>~/.codex/config.toml</code>，保存后重新打开 Codex</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    "<pre><span style=\"display:block\">codex mcp add mcp-server-chart -- npx -y @antv/mcp-server-chart</span></pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.mcp-server-chart]</span>"
    "<span style=\"display:block\">command = \"npx\"</span>"
    "<span style=\"display:block\">args = [\"-y\", \"@antv/mcp-server-chart\"]</span>"
    "</pre></div>"
    "<h3>在其他桌面应用里配置</h3>"
    "<p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p>"
    '<div class="p-code"><div class="p-code-head"><span>MCP 配置</span></div>'
    "<pre>"
    "<span style=\"display:block\">{</span>"
    "<span style=\"display:block\">  \"mcpServers\": {</span>"
    "<span style=\"display:block\">    \"mcp-server-chart\": {</span>"
    "<span style=\"display:block\">      \"command\": \"npx\",</span>"
    "<span style=\"display:block\">      \"args\": [\"-y\", \"@antv/mcp-server-chart\"]</span>"
    "<span style=\"display:block\">    }</span>"
    "<span style=\"display:block\">  }</span>"
    "<span style=\"display:block\">}</span>"
    "</pre></div>"
    "<p>接上后，在 Agent 里应能看到绘图工具，例如 <code>generate_column_chart</code></p>"
    "<h3>数据安全</h3>"
    f"<p>默认会把图表交到远程服务 <a href=\"{ANTV_RENDER}\" target=\"_blank\" rel=\"noopener\">{ANTV_RENDER}</a> 去渲染。"
    "本机启动了 MCP，并不等于数据只留在本机。课上按默认配置即可，不必改渲染地址。"
    "如果数据不能离开本机，不要把真实数据交给默认配置</p>"
    "</div>"
)
PREVIEW_P66 = (
    '<a class="p-preview" href="assets/antv-column-chart-20261115.png">'
    '<img src="assets/antv-column-chart-20261115.png" '
    'alt="柱状图标题为各课程模块参与人数对比，横轴是课程模块，纵轴是人数（人）；'
    'AI 编程入门为 40，前端项目实践为 25，开源协作为 15"></a>'
    '<p class="p-preview-cap">一次实跑生成的柱状图，用来对照类别、数值、中文标签和标题。'
    "课上仍要打开项目根目录里当场保存的图片核对</p>"
)


scene(
    id="p66", segment="实用 MCP 工具推荐", layout="prompt-scene", prompt=PROMPT_P66,
    label="同一份数据怎样变成图",
    title="同一份数据怎样变成图？",
    lead="先核对照入的三个教学数据，再用 AntV Chart MCP 生成柱状图。生成后打开项目根目录里的图片核对，不能只看对话。默认会把图表交到远程服务去渲染，本机启动了 MCP，并不等于数据只留在本机。不要把图表回写到飞书当作必须完成的环节",
    html=(
        "<style>"
        "#p66 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}"
        "#p66 .p-risk{padding:10px 14px;border:2px solid #D9481C;border-radius:10px 8px 11px 9px;"
        "background:#FCE6DD;font-size:16px;line-height:1.45;color:#243042}"
        "#p66 .p-risk a{color:inherit;overflow-wrap:anywhere}"
        "#p66 .p-pop .p-guide{display:grid;gap:10px;font-size:16px;line-height:1.5}"
        "#p66 .p-pop .p-guide p,#p66 .p-pop .p-guide h3{margin:0}"
        "#p66 .p-pop .p-guide h3{font-size:18px}"
        "#p66 .p-pops{display:flex;flex-wrap:nowrap;gap:8px;align-items:flex-start;"
        "min-width:0;width:100%;max-width:100%}"
        "#p66 .p-pop{flex:0 0 auto;min-width:0}"
        "#p66 .p-preview,#p66 .p-guide{min-width:0;max-width:100%}"
        "#p66 .p-preview{display:block}"
        "#p66 .p-preview img{display:block;width:100%;max-width:100%;height:auto;background:#fff}"
        "#p66 .p-preview-cap{margin:0;font-size:16px;color:var(--p-muted)}"
        "body[data-mode='slides'] #p66 .p-preview img{max-height:390px;width:auto;margin-inline:auto}"
        "body[data-mode='scroll'] #p66 .p-pops{position:relative}"
        "body[data-mode='scroll'] #p66 .p-pop-body{position:absolute;left:0;right:0;width:auto;"
        "max-width:100%;min-width:0;box-sizing:border-box;z-index:2}"
        "body[data-mode='scroll'] #p66 .p-pops:has(.p-pop[open] .p-preview){"
        "padding-bottom:calc((100% - 32px) * 1260 / 2160 + 140px)}"
        "body[data-mode='scroll'] #p66 .p-pops:has(.p-pop[open] .p-guide){"
        "padding-bottom:calc(min(70vh,640px) + 8px)}"
        "body[data-mode='scroll'] #p66 .p-pops:has(.p-pop[open] .p-guide) .p-pop[open] .p-pop-body{"
        "max-height:min(70vh,640px);overflow:auto}"
        "</style>"
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>先核对照入数据</b><small>教学数据，不是实测人数</small></span></li>'
        '<li data-reveal="1"><span><b>发给本地 Agent</b><small>用 AntV 生成柱状图</small></span></li>'
        '<li data-reveal="2"><span><b>打开结果核对</b><small>打开项目根目录里的图片，不能只看对话</small></span></li>'
        "</ol>"
        f'<div class="p-risk">默认会把图表交到远程服务 <a href="{ANTV_RENDER}" target="_blank" rel="noopener">{ANTV_RENDER}</a> 去渲染。本机启动了 MCP，并不等于数据只留在本机</div>'
        '<div class="p-pops">'
        + pop("AntV Chart MCP 安装指引", "安装指引", GUIDE_P66)
        + pop("柱状图效果示意", "效果示意", PREVIEW_P66)
        + "</div></div>"
    ),
    steps=["先核对照入数据", "发给本地 Agent", "打开结果核对"],
)



AMAP_DOC = "https://developer.amap.com/api/mcp-server/gettingstarted"
AMAP_KEY_DOC = "https://developer.amap.com/api/mcp-server/create-project-and-key"
AMAP_HTTP = "https://mcp.amap.com/mcp?key=你的Key"
PROMPT_P67 = (
    "请使用高德地图 MCP，根据下面这些约束安排一次出行。\n"
    "\n"
    "- 周末从杭州东站出发\n"
    "- 安排两个适合步行串联的景点\n"
    "- 要区分车站到景点的交通段，以及景点之间的步行段\n"
    "\n"
    "请按真实查询来选地点和路线。生成后，为交通段和步行段分别给出能在电脑浏览器里直接打开并看到路线的高德路径规划链接"
    "（https://uri.amap.com/navigation，并带上起终点坐标、出行方式和 callnative=0；交通段用 mode=bus，步行段用 mode=walk）。"
    "不要只用专属地图的 https 等价链接代替。如果还能生成可在高德 App 打开的专属地图，可以一并给出。"
)
GUIDE_P67 = (
    '<div class="p-guide">'
    "<p>这一页用的是官方高德地图 MCP Server。先要在高德开放平台申请「Web服务」Key。"
    "官方推荐用 Streamable HTTP 接入。Key 不要写进公开仓库，也不要出现在课件或录屏里</p>"
    f'<p class="p-go"><a href="{AMAP_DOC}" target="_blank" rel="noopener">打开快速接入</a>'
    f'<a href="{AMAP_KEY_DOC}" target="_blank" rel="noopener">打开创建应用和 Key</a>'
    f'<a href="{CODEX_MCP_DOC}" target="_blank" rel="noopener">打开 Codex 的 MCP 说明</a></p>'
    "<h3>申请 Key</h3>"
    "<p>登录高德开放平台控制台。在「应用管理」里创建应用，再添加 Key。表单里的「服务平台」必须选「Web服务」，不要选「Web端(JS API)」。创建后妥善保管 Key</p>"
    '<a class="p-preview" href="assets/amap-key-web-service-20261115.png">'
    '<img src="assets/amap-key-web-service-20261115.png" '
    'alt="添加 Key 时的服务平台选项，箭头指向 Web服务，不要选 Web端(JS API)"></a>'
    '<p class="p-preview-cap">「服务平台」要选「Web服务」，不要选「Web端(JS API)」</p>'
    "<h3>在 Codex 里安装（推荐）</h3>"
    "<p>可以执行下面这条命令。也可以把配置写进 <code>~/.codex/config.toml</code>，把其中的 Key 换成你自己的，保存后重新打开 Codex</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    f"<pre><span style=\"display:block\">codex mcp add amap-maps-streamableHTTP --url \"{AMAP_HTTP}\"</span></pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.amap-maps-streamableHTTP]</span>"
    f"<span style=\"display:block\">url = \"{AMAP_HTTP}\"</span>"
    "</pre></div>"
    "<h3>在其他桌面应用里配置</h3>"
    "<p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置，并把 Key 换成你自己的</p>"
    '<div class="p-code"><div class="p-code-head"><span>MCP 配置</span></div>'
    "<pre>"
    "<span style=\"display:block\">{</span>"
    "<span style=\"display:block\">  \"mcpServers\": {</span>"
    "<span style=\"display:block\">    \"amap-maps-streamableHTTP\": {</span>"
    f"<span style=\"display:block\">      \"url\": \"{AMAP_HTTP}\"</span>"
    "<span style=\"display:block\">    }</span>"
    "<span style=\"display:block\">  }</span>"
    "<span style=\"display:block\">}</span>"
    "</pre></div>"
    "<h3>如果客户端只支持本地 stdio</h3>"
    "<p>可以用官方 npm 包 <code>@amap/amap-maps-mcp-server</code>，并把 Key 放在环境变量 <code>AMAP_MAPS_API_KEY</code> 里。"
    "这条路径需要 Node.js v22.14.0 或更高版本</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    "<pre><span style=\"display:block\">codex mcp add amap-maps --env AMAP_MAPS_API_KEY=你的Key -- npx -y @amap/amap-maps-mcp-server</span></pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.amap-maps]</span>"
    "<span style=\"display:block\">command = \"npx\"</span>"
    "<span style=\"display:block\">args = [\"-y\", \"@amap/amap-maps-mcp-server\"]</span>"
    "<span style=\"display:block\"></span>"
    "<span style=\"display:block\">[mcp_servers.amap-maps.env]</span>"
    "<span style=\"display:block\">AMAP_MAPS_API_KEY = \"你的Key\"</span>"
    "</pre></div>"
    "<p>接上后，用 <code>/mcp</code> 或设置页确认已经能看到地点搜索、路径规划等工具。"
    "这一页还要用到生成专属地图，建议按官方推荐走 Streamable HTTP</p>"
    "</div>"
)

PREVIEW_P67 = (
    '<div class="p-preview-stack">'
    '<a class="p-preview" href="assets/amap-nav-bus-20261115.jpg">'
    '<img src="assets/amap-nav-bus-20261115.jpg" '
    'alt="电脑浏览器打开交通段路径规划后，起点是杭州东站，终点是杭州博物馆（吴山馆区），左侧列出公交和地铁方案，地图上画出路线"></a>'
    '<p class="p-preview-cap">一次实跑在电脑浏览器里打开后的交通段路线</p>'
    '<a class="p-preview" href="assets/amap-nav-walk-20261115.jpg">'
    '<img src="assets/amap-nav-walk-20261115.jpg" '
    'alt="电脑浏览器打开步行段路径规划后，起点是杭州博物馆（吴山馆区），终点是鼓楼，左侧是步行指引，地图上画出步行路线"></a>'
    '<p class="p-preview-cap">一次实跑在电脑浏览器里打开后的步行段路线。课上仍要打开当场给出的链接核对</p>'
    "</div>"
)


scene(
    id="p67", segment="实用 MCP 工具推荐", layout="prompt-scene", prompt=PROMPT_P67,
    label="出行约束怎样落到地点和路线",
    title="出行约束怎样落到地点和路线？",
    lead="先看清这几条出行约束，再用高德地图 MCP 做一次真实查询。生成后分别核对文字行程、电脑浏览器里的路线，以及能否在 APP 里打开专属地图。专属地图的 https 等价链接常常只打开官网首页，不等于已经看到路线；返回一个链接，也不等于手机已经打开",
    html=(
        "<style>"
        "#p67 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}"
        "#p67 .p-pop .p-guide{display:grid;gap:10px;font-size:16px;line-height:1.5}"
        "#p67 .p-pop .p-guide p,#p67 .p-pop .p-guide h3{margin:0}"
        "#p67 .p-pop .p-guide h3{font-size:18px}"
        "#p67 .p-pops{display:flex;flex-wrap:nowrap;gap:8px;align-items:flex-start;"
        "min-width:0;width:100%;max-width:100%}"
        "#p67 .p-pop{flex:0 0 auto;min-width:0}"
        "#p67 .p-preview,#p67 .p-guide,#p67 .p-preview-stack{min-width:0;max-width:100%}"
        "#p67 .p-preview-stack{display:grid;gap:10px}"
        "#p67 .p-preview{display:block}"
        "#p67 .p-preview img{display:block;width:100%;max-width:100%;height:auto;background:#fff}"
        "#p67 .p-preview-cap{margin:0;font-size:16px;color:var(--p-muted)}"
        "body[data-mode='slides'] #p67 .p-pop[open] .p-pop-body{max-height:100%;overflow:auto}"
        "body[data-mode='scroll'] #p67 .p-pops{position:relative}"
        "body[data-mode='scroll'] #p67 .p-pop-body{position:absolute;left:0;right:0;width:auto;"
        "max-width:100%;min-width:0;box-sizing:border-box;z-index:2}"
        "body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-preview-stack),"
        "body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-guide){"
        "padding-bottom:calc(min(70vh,640px) + 8px)}"
        "body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-preview-stack) .p-pop[open] .p-pop-body,"
        "body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-guide) .p-pop[open] .p-pop-body{"
        "max-height:min(70vh,640px);overflow:auto}"
        "</style>"
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>先看清约束</b><small>不预先指定哪两个景点</small></span></li>'
        '<li data-reveal="1"><span><b>发给本地 Agent</b><small>用高德做真实查询</small></span></li>'
        '<li data-reveal="2"><span><b>分别核对结果</b><small>文字行程、浏览器路线和 APP 要分开看</small></span></li>'
        "</ol>"
        '<div class="p-pops">'
        + pop("高德地图 MCP 安装指引", "安装指引", GUIDE_P67)
        + pop("浏览器路线效果示意", "效果示意", PREVIEW_P67)
        + "</div></div>"
    ),
    steps=["先看清约束", "发给本地 Agent", "分别核对结果"],
)


DOC_12306 = "https://github.com/Joooook/12306-mcp"
DOC_PLAYWRIGHT = "https://github.com/microsoft/playwright-mcp"
DOC_PLAYWRIGHT_START = "https://playwright.dev/docs/getting-started-mcp"
DOC_CONTEXT7 = "https://context7.com/docs/clients/codex"
DOC_CONTEXT7_DASH = "https://context7.com/dashboard"
DOC_BLENDER = "https://github.com/ahujasid/mcp-for-blender"
DOC_BLENDER_LAB = "https://www.blender.org/lab/mcp-server/"
DOC_BLENDER_DL = "https://www.blender.org/download/"

PROMPT_P68_12306 = (
    "请使用 12306-mcp，查询明天从杭州东到上海虹桥的高铁或动车车次。\n"
    "\n"
    "请列出 2 到 3 趟可选车次，每趟写清车次号、出发和到达时刻、历时。"
    "请核对出发站和到达站是否就是杭州东和上海虹桥。不要购票，也不要改签。"
)
PROMPT_P68_PLAYWRIGHT = (
    "请使用 Playwright MCP，在本机弹出可见的浏览器窗口（不要使用无头模式），"
    "打开 https://playwright.dev/docs/intro ，核对页面中是否出现 Installation 或安装相关标题，"
    "并把你在页面上实际看到的这一项原文告诉我。不要登录，也不要修改页面。"
)
PROMPT_P68_CONTEXT7 = (
    "请使用 Context7，查阅 Playwright 中 page.goto 的用法。\n"
    "\n"
    "请先解析对应的库 ID，再查询文档，核对返回内容是否针对 Playwright 的 page.goto，而不是其他同名 API。"
    "请摘录文档中关于该 API 的关键说明（例如参数或默认行为），并注明库名和版本。"
    "如果返回了文档链接，请打开链接核对。不要把任何 API Key 写进对话。"
)
PROMPT_P68_BLENDER = (
    "请先确认本机 Blender 已经打开，并且 MCP for Blender 服务已启动。操作前请先保存当前 Blender 文件。\n"
    "\n"
    "请使用 MCP for Blender，在当前场景里创建一个圆环（Torus），放在默认立方体旁边，"
    "并确保能在 Blender 窗口的 3D 视窗中看见它。创建后告诉我这个物体的名称和位置。"
    "不要删除现有场景里的其他内容，也不要执行与这次演示无关的 Python 代码。"
)

_COPY_BTN = (
    '<button type="button" class="copy-button" '
    "onclick=\"var b=this;var t=b.closest('.prompt').querySelector('code').innerText;"
    "navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';"
    "setTimeout(function(){b.textContent='复制请求'},1600)}).catch(function(){b.textContent='复制失败'})\">"
    "复制请求</button>"
)


def pop68(title, label, body):
    return pop(title, label, body).replace(
        '<details class="p-pop">',
        '<details class="p-pop" name="p68-pop">',
        1,
    )


def prompt_pop(title, text):
    body = (
        '<div class="prompt">'
        f'<div class="prompt-label"><span>{html.escape(title)}</span>{_COPY_BTN}</div>'
        f'<pre><code class="language-text">{html.escape(text)}</code></pre></div>'
    )
    return pop68(title, "测试请求", body)


def preview_img(src, alt, cap):
    return (
        f'<a class="p-preview" href="{src}">'
        f'<img src="{src}" alt="{html.escape(alt)}"></a>'
        f'<p class="p-preview-cap">{cap}</p>'
    )


def mcp_card(role, tag, title, hint, prompt_title, prompt_text, preview_title, preview_html, guide_html):
    return (
        f'<div class="p-box p-mcp" data-role="{role}">'
        f'<span class="p-tag" data-role="{role}">{html.escape(tag)}</span>'
        f"<h3>{html.escape(title)}</h3>"
        f'<p class="hint">{hint}</p>'
        '<div class="p-acts">'
        + pop68(f"{title} 安装指引", "安装指引", guide_html)
        + prompt_pop(prompt_title, prompt_text)
        + pop68(preview_title, "效果示意", preview_html)
        + "</div></div>"
    )


def install_guide68(title, url, server, command, args, body, needs_node=True):
    config = json.dumps(
        {"mcpServers": {server: {"command": command, "args": args}}},
        ensure_ascii=False, indent=2,
    )
    prerequisites = (
        "<p>本机先准备符合项目版本要求的 Node.js 和 <code>npx</code></p>"
        if needs_node else ""
    )
    return (
        '<div class="p-guide">'
        f'<p class="p-go"><a href="{url}" target="_blank" rel="noopener">打开 {title} 说明</a>'
        f'<a href="{CODEX_MCP_DOC}" target="_blank" rel="noopener">打开 Codex 的 MCP 说明</a></p>'
        + prerequisites
        + body
        + "<p>接上后可用 <code>codex mcp list</code> 确认</p>"
        "<h3>在其他桌面应用里配置</h3>"
        "<p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p>"
        '<div class="p-code"><div class="p-code-head"><span>MCP 配置</span></div>'
        f'<pre>{html.escape(config)}</pre></div></div>'
    )


GUIDE_P68_12306 = install_guide68(
    "12306-mcp", DOC_12306, "12306-mcp", "npx", ["-y", "12306-mcp"],
    "<p>只查询车次和中转，依赖上游接口，不是购票或抢票工具，也不需要 Key。"
    "启动时会请求 12306 官网；若在 <code>/mcp</code> 里显示 failed，可先在终端运行一次 "
    "<code>npx -y 12306-mcp@latest</code>，并在配置里加上 <code>startup_timeout_sec = 60</code>。"
    "查询结果里有时会混进同城其他车站，要核对应出发站和到达站</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    "<pre><span style=\"display:block\">codex mcp add 12306-mcp -- npx -y 12306-mcp</span></pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.12306-mcp]</span>"
    "<span style=\"display:block\">command = \"npx\"</span>"
    "<span style=\"display:block\">args = [\"-y\", \"12306-mcp\"]</span>"
    "<span style=\"display:block\">startup_timeout_sec = 60</span>"
    "</pre></div>"
)

GUIDE_P68_PLAYWRIGHT = install_guide68(
    "Playwright MCP", DOC_PLAYWRIGHT, "playwright", "npx", ["@playwright/mcp@latest"],
    f"<p>官方文档也可看 <a href=\"{DOC_PLAYWRIGHT_START}\" target=\"_blank\" rel=\"noopener\">Playwright 入门</a>。"
    "默认会弹出可见的浏览器窗口，适合课上核对；不要加 <code>--headless</code>。"
    "第一次启动可能会下载浏览器，稍等即可</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    "<pre><span style=\"display:block\">codex mcp add playwright npx \"@playwright/mcp@latest\"</span></pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.playwright]</span>"
    "<span style=\"display:block\">command = \"npx\"</span>"
    "<span style=\"display:block\">args = [\"@playwright/mcp@latest\"]</span>"
    "</pre></div>"
)

GUIDE_P68_CONTEXT7 = install_guide68(
    "Context7", DOC_CONTEXT7, "context7", "npx", ["-y", "@upstash/context7-mcp"],
    "<p>文档检索会发到 Context7 的在线服务。本机启动了 MCP，并不等于查询只留在本机。"
    "可以先不加 Key；需要更高额度时，到 "
    f'<a href="{DOC_CONTEXT7_DASH}" target="_blank" rel="noopener">Context7 后台</a> 申请免费 Key，'
    "只放进本机配置，不要发到对话或公开材料里。"
    "官方还有一键命令 <code>npx ctx7 setup --codex</code>，它可能改本机 <code>AGENTS.md</code>，课堂演示更建议只用下面这种手动接入</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    "<pre><span style=\"display:block\">codex mcp add context7 -- npx -y @upstash/context7-mcp</span></pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.context7]</span>"
    "<span style=\"display:block\">command = \"npx\"</span>"
    "<span style=\"display:block\">args = [\"-y\", \"@upstash/context7-mcp\"]</span>"
    "<span style=\"display:block\">startup_timeout_sec = 20</span>"
    "</pre></div>"
)

GUIDE_P68_BLENDER = install_guide68(
    "MCP for Blender", DOC_BLENDER, "blender", "uvx", ["mcp-for-blender"],
    "<p>这次短演示用社区插件 MCP for Blender，不要和 Blender Lab 的"
    f'<a href="{DOC_BLENDER_LAB}" target="_blank" rel="noopener">官方 MCP</a> 搞混，官方那套需要 Blender 5.1 或更高。'
    f'本机先安装 Blender 3.0 或更高版本，可到 <a href="{DOC_BLENDER_DL}" target="_blank" rel="noopener">官方下载页</a>，'
    "或用 <code>brew install --cask blender</code>。"
    "再安装 <code>uv</code>（macOS 可用 <code>brew install uv</code>，不要用 <code>pip install uv</code>），然后执行：</p>"
    '<div class="p-code"><div class="p-code-head"><span>Codex 命令</span></div>'
    "<pre>"
    "<span style=\"display:block\">codex mcp add blender -- uvx mcp-for-blender</span>"
    "<span style=\"display:block\">uvx mcp-for-blender install-addon</span>"
    "</pre></div>"
    '<div class="p-code"><div class="p-code-head"><span>~/.codex/config.toml</span></div>'
    "<pre>"
    "<span style=\"display:block\">[mcp_servers.blender]</span>"
    "<span style=\"display:block\">command = \"uvx\"</span>"
    "<span style=\"display:block\">args = [\"mcp-for-blender\"]</span>"
    "</pre></div>"
    "<p>然后在 Blender 里打开 Edit → Preferences → Add-ons，启用 Interface: MCP for Blender。"
    "演示时要先打开 Blender，在 3D 视窗按 <code>N</code>，确认 MCP for Blender 面板里的服务已启动。"
    "结果必须在 Blender 窗口里看见，不能只看对话。"
    "操作前先保存 Blender 文件，因为它可以在软件里执行 Python 代码。"
    "这个插件默认会记一条匿名使用记录（工具名、是否成功、版本等），提示词和场景内容默认不采集；"
    "不想记的话，可在配置的 <code>env</code> 里加上 <code>DISABLE_TELEMETRY = \"true\"</code></p>",
    needs_node=False,
)

PREVIEW_P68_12306 = preview_img(
    "assets/12306-trains-20261116.jpg",
    "一次实跑查出明天从杭州东到上海虹桥的 3 趟车次：D942、G7344、G256，并写清了出发、到达时刻和历时",
    "一次实跑查出的车次。课上仍以当场查询为准，余票和票价会变动",
)
PREVIEW_P68_PLAYWRIGHT = preview_img(
    "assets/playwright-docs-intro-20261116.jpg",
    "可见浏览器窗口打开 Playwright 入门文档后，页面主标题是 Installation",
    "一次实跑在可见浏览器窗口里打开后的页面。课上仍要在当场弹出的窗口里核对",
)
PREVIEW_P68_CONTEXT7 = (
    "<p>一次实跑查到的是 Playwright 的 page.goto，并打开了返回的官方文档链接做核对。"
    "课上仍要打开当场返回的链接，检查库名、版本和内容是否对得上当前问题</p>"
)
PREVIEW_P68_BLENDER = preview_img(
    "assets/blender-torus-20261116.jpg",
    "Blender 的 3D 视窗里，默认立方体旁边有一个圆环 Torus",
    "一次实跑在 Blender 窗口里看到的圆环。课上仍要在本机 Blender 窗口里核对",
)


scene(
    id="p68", segment="实用 MCP 工具推荐",
    label="这几个常用 MCP 各能看见什么结果",
    title="这几个常用 MCP 各能看见什么结果？",
    lead="四个常用 MCP 排成田字。各格内的安装指引、测试请求和效果示意可按需要展开。课上仍以当场看见的结果为准",
    html=(
        "<style>"
        "body[data-mode='slides'] #p68 .scene-content{top:236px;height:432px;gap:10px}"
        "body[data-mode='slides'] #p68 .lede{width:1168px}"
        "#p68 .p-wrap{display:flex;flex-direction:column;gap:10px;height:100%;min-width:0}"
        "#p68 .p-grid{flex:1;gap:12px;align-items:stretch;min-height:0;"
        "grid-template-columns:1fr 1fr}"
        "body[data-mode='scroll'] #p68 .p-grid{grid-template-columns:1fr 1fr!important}"
        "@media(max-width:700px){body[data-mode='scroll'] #p68 .p-grid{grid-template-columns:1fr!important}}"
        "#p68 .p-mcp{display:flex;flex-direction:column;min-height:0;padding:12px 16px;"
        "position:static;isolation:auto;border:2px solid var(--c,#243042);"
        "border-radius:14px 10px 15px 11px;background:var(--cl,#FFFDF7)}"
        "#p68 .p-mcp::before{content:none;display:none}"
        "#p68 .p-mcp .p-tag{margin-bottom:6px;font-size:16px;padding:4px 8px}"
        "#p68 .p-mcp h3{font-size:22px;margin:0 0 4px;line-height:1.3}"
        "#p68 .p-mcp .hint{margin:0;font-size:16px;line-height:1.4;flex:1;color:var(--p-ink)}"
        "#p68 .p-acts{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}"
        "#p68 .p-foot{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center}"
        "#p68 .p-foot .p-note{margin:0;font-size:16px;line-height:1.35;color:var(--p-muted);flex:1;min-width:0}"
        "#p68 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}"
        "#p68 .p-pop .p-guide{display:grid;gap:10px;font-size:16px;line-height:1.5}"
        "#p68 .p-pop .p-guide p,#p68 .p-pop .p-guide h3{margin:0}"
        "#p68 .p-pop .p-guide h3{font-size:18px}"
        "#p68 .p-pop .p-guide .p-code pre{white-space:pre-wrap;overflow-wrap:anywhere}"
        "#p68 .p-preview,#p68 .p-guide{min-width:0;max-width:100%}"
        "#p68 .p-preview{display:block}"
        "#p68 .p-preview img{display:block;width:100%;max-width:100%;height:auto;background:#fff}"
        "#p68 .p-preview-cap{margin:0;font-size:16px;color:var(--p-muted)}"
        "#p68 .p-pop .prompt{margin:0;padding:0;background:#000;color:#FAFAF7;"
        "border:1px solid #000;border-radius:8px;overflow:hidden}"
        "#p68 .p-pop .prompt-label{background:#000;color:#FAFAF7;border-bottom:1px solid #545454;"
        "display:flex;align-items:center;justify-content:space-between;padding:12px 18px;gap:12px}"
        "#p68 .p-pop .copy-button{background:#000;color:#FFF;border:1px solid #AAA;"
        "font-size:18px;padding:5px 12px;white-space:nowrap}"
        "#p68 .p-pop .copy-button:hover{background:#303030}"
        "#p68 .p-pop .prompt pre{display:block;margin:0;padding:18px;background:#000;color:#FAFAF7;"
        "border:0;border-radius:0;font:20px/1.6 var(--font-code,var(--p-mono,monospace));"
        "white-space:pre-wrap;overflow-wrap:anywhere}"
        "#p68 .p-pop .prompt code{background:none;color:inherit;font:inherit;padding:0;border:0}"
        "body[data-mode='slides'] #p68 .p-preview img{max-height:360px;width:auto;margin-inline:auto}"
        "body[data-mode='slides'] #p68 .p-pop[open] .p-pop-body{overflow:auto}"
        "body[data-mode='scroll'] #p68 .p-wrap{position:relative;height:auto;"
        "margin-bottom:var(--p-pop-space,0px)}"
        "body[data-mode='scroll'] #p68 .p-pop-body{position:absolute;left:0;right:0;top:100%;"
        "width:auto;max-width:100%;min-width:0;box-sizing:border-box;margin-top:8px;"
        "max-height:min(70vh,640px);overflow:auto;z-index:2}"
        "</style>"
        '<div class="p-wrap">'
        '<div class="p-grid" style="--n:2">'
        + mcp_card(
            "ctx", "社区", "12306-mcp",
            "查询 12306 的列车时刻、余票和中转，只查不买",
            "发给 Codex 的请求 · 12306", PROMPT_P68_12306,
            "12306-mcp 效果示意", PREVIEW_P68_12306,
            GUIDE_P68_12306,
        )
        + mcp_card(
            "tool", "官方", "Playwright MCP",
            "控制本机浏览器，打开网页并查看或操作页面内容",
            "发给 Codex 的请求 · Playwright", PROMPT_P68_PLAYWRIGHT,
            "Playwright MCP 效果示意", PREVIEW_P68_PLAYWRIGHT,
            GUIDE_P68_PLAYWRIGHT,
        )
        + mcp_card(
            "tool", "官方", "Context7",
            "查阅指定库的最新文档。查询会发到线上服务。",
            "发给 Codex 的请求 · Context7", PROMPT_P68_CONTEXT7,
            "Context7 效果示意", PREVIEW_P68_CONTEXT7,
            GUIDE_P68_CONTEXT7,
        )
        + mcp_card(
            "ctx", "社区", "MCP for Blender",
            "操作本机已打开的 Blender，在 3D 视窗里创建或修改场景",
            "发给 Codex 的请求 · Blender", PROMPT_P68_BLENDER,
            "MCP for Blender 效果示意", PREVIEW_P68_BLENDER,
            GUIDE_P68_BLENDER,
        )
        + "</div>"
        '<div class="p-foot">'
        + '<p class="p-note">四个都要看见实际结果，不能只看对话。哪一个当时做不到，就按实际范围讲，不换别的工具顶上</p>'
        + "</div></div>"
    ),
    steps=["12306 查车次或中转", "Playwright 打开页面核对", "Context7 查接口文档", "Blender 在本机看到圆环"],
)



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

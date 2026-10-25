#!/usr/bin/env python3
"""2.1 只说了一句话，模型收到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
import json
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, anchor, chapter_map, redrawn, ref, repro, shot  # noqa: E402
sys.path.insert(0, str(Path(__file__).resolve().parents[4] / "tools"))
from tracekit import Evidence  # noqa: E402
from request_reading import MINIMAX_DOC, greeting_reading  # noqa: E402

# 落后时进入第 2 章的追赶 Prompt：与 materials/catchup 的实验同一份，代入真实的参考起点
CATCHUP_PROMPT = (Path(__file__).resolve().parents[3] / "materials/catchup/prompt-ch02.txt").read_text().strip() \
    .replace("{URL}", "https://github.com/prompt-to-harness/course-starter.git").replace("{TAG}", "ch02-start-v1")

lesson = Lesson(__file__, "2.1", "只说了一句话，模型收到了什么", summary="用 claude-tap 打开 Codex 实际发出的请求：只说一句话，模型收到的远不止这句话；读文件时一句话会变成好几次请求，每次都带着前面的全部内容。这些加在一起就是 context，已知的信息主动给，它就能少走弯路。", prep=[
    "在课程仓库根目录运行 sh courseware/ch02/lessons/01-request/tools/demo.sh record 标签：它新建项目目录和专用课程环境，检查 Codex、Key、Node，打印各终端标签页要粘贴的命令和手机照稿地址。同一标签不会重置，重录换一个标签。",
    "uv、Codex CLI 0.163.0 已装好，Agent Lab 已按 p06-tap 的展开入口从课程仓库 main 安装；MINIMAX_API_KEY 配在终端里，不写进项目。",
    "Terminal 备好“个人主页开发服务”标签页，项目依赖已安装。",
    "Codex 启动时如果提示有新版本，选 Skip：直接回车会把 Codex 全局升级。",
    "查看器里有本机路径和用户名，上屏前遮盖或缩写；config.toml 和完整密钥不上屏。",
])
scene = lesson.scene

# 录制时还没有实际记录的数字，画面上统一用这个占位（只写占的是什么，不写给讲师的指令），讲师提示里写明按记录替换
TBD = "〔实测〕"

# 2026-10-20 15:16 课程基线实测；仅用于既有基线说明，不覆盖当前逐页实测材料
RUN1020 = "数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。"
RUN1021 = "数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-21，codex exec，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构。"

# 第一步：与项目无关的一句话，只看 context 的基本组成（分镜“两步 Prompt”）
FIRST_PROMPT = "你好，用一句话介绍你能帮我做什么。"

# 第二步：与项目相关的只读问题，不提示文件名
READONLY_PROMPT = """只读任务，不修改任何文件。
这个个人主页的项目区现在显示什么？数据写在哪个文件里？
请说明依据来自哪个文件的哪几行；
不确定就写“不确定”，不要猜。"""

# p08a、p07 的真实记录：同一份 materials/request/run-20261024/interactive.json，观察点在 trace/evidence.json，
# 页面零件是全课共用的 .p-evidence（shared/parts/evidence-trace.js），查看器由 make viewers 生成
EVIDENCE = Evidence(Path(__file__).resolve().parents[1] / "trace/evidence.json")


ANTHROPIC_CE = "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents#context-engineering-vs-prompt-engineering"

TAP_CMD = "uvx claude-tap@0.1.146 --tap-client codex --tap-target https://api.minimax.cn/v1"
# Agent Lab 从 main 安装一次，之后用短命令启动（2026-10-24 讲师确认，暂不固定 tag）
AGENT_LAB_INSTALL = 'uv tool install "git+https://github.com/prompt-to-harness/prompt-to-harness.github.io#subdirectory=tools/agent-lab"'
AGENT_LAB_CMD = "agent-lab codex --tap"


# ---------- 开始这一章 ----------
scene(
    id="p01", segment="开始这一章", layout="lesson-cover",
    label="这一章做什么", title="补完整，改风格，发布上线",
    lead="补入自己的内容，参考主页改风格，再发布成公开网址",
    closing="在自己的个人主页项目目录运行 npm run dev，用终端输出的 Local 地址查看首屏和项目区。接下来给 Codex 写 Prompt 时，我们还会查看模型实际拿到了哪些信息。",
    html=(
        chapter_map(1) +
        '<style>#p01 .opening-start{margin-top:16px;padding:12px 18px;border:2px dashed #9C8B66;border-radius:10px}'
        '#p01 .opening-start p{margin:0;font-size:22px}'
        '#p01 .opening-start code{font-size:22px}'
        '#p01 .opening-goal{margin-top:16px;font-size:25px}'
        'body[data-mode="slides"] #p01 h2{font-size:46px}'
        '@media(max-width:600px){#p01 .opening-start p,#p01 .opening-start code{font-size:19px}}'
        '</style>'
        '<div class="opening-start" data-reveal="1"><p><code>npm run dev</code> → 打开 Local 地址 → 看首屏和项目区</p></div>'
        '<div class="p-chain opening-goal" data-reveal="2"><span>补入自己的内容</span><i>→</i><span>参考主页改风格</span><i>→</i><span>发布上线</span></div>'
        '<div style="margin-top:12px">' + anchor(lit=("新的 Prompt",), title="模型每一步拿到的，只有我们写的 Prompt 吗？", reveal=3) + '</div>'
    ),
    repro=repro([
        ("先在自己的仓库里保存当前的工作（没有改动时会提示无可提交，不影响）", "git add -A && git commit -m \"保存：开始第 2 章之前\""),
        ("在仓库根目录启动 Codex，粘贴这段 Prompt", CATCHUP_PROMPT),
        ("Codex 可能连续申请几次：联网克隆参考起点、在临时目录里复制项目试构建、清理临时目录。每次看清整条命令作用在哪个目录，只动临时目录的再选 Yes, proceed；不要选“以后不再问”。只有写明要联网的那次申请同意后才能联网", None),
        ("读它的逐条判断，只确认补齐前提所必需的改动", "只做补齐第 2 章前提所必需的改动，可选的建议先不做；我的个人内容和已有的决定保持不变。改完告诉我需要我运行哪些命令。"),
        ("装依赖、构建，然后在浏览器里看一遍首屏、项目区和“查看项目”", "npm install && npm run build && npm run preview"),
        ("让 Codex 在回复里说明这次补齐的情况，不新建记录文件；我们逐句核对，只留下确认过的内容", "在回复里说明这次补齐：对照了哪个参考起点、补了什么、保留了什么。不要新建记录文件，不要写本机路径和用户名。"),
        ("核对无误后提交，把确认过的补齐情况写进提交说明的正文", "git add -A && git commit -m \"对照 ch02-start-v1 补齐第 2 章前提\" -m \"补了什么、保留了什么（换成核对过的内容）\""),
    ], note="没做完第 1 章、或想直接从第 2 章开始时用；已经做完的跳过。参考起点是 course-starter 的 ch02-start-v1 标签，只放在临时目录里对照，不进我们的仓库。不想用 Codex 时，可在 GitHub 上下载这个标签的 ZIP 对照。讲师 2026-10-06 用三种起点各试两次，Codex 都能判断对；笼统地说“按你的建议执行”时，它会连可选建议一起做，所以要只确认必需项。", label="从这一章开始？"),
    steps=["本章地图", "打开个人主页", "这一章做什么", "从 Prompt 看信息"],
)

# ---------- 打开请求 ----------
scene(
    id="p05a", segment="打开请求", layout="evidence-scene",
    label="Context Engineering", title="模型版本既定，任务信息由我们组织",
    lead="模型训练时学到的知识与能力，与这次任务能用的信息是两回事。使用既定模型版本时，普通对话不会实时改写模型参数；我们的目标、当前代码和相关材料，需要进入当前 Context，才能参与这一步的回答或行动。我们与 Codex 一起组织这些信息。Karpathy 的帖子也用 Context Engineering 描述为模型每一步组织合适信息的工作。",
    closing="模型每一步实际拿到的，只有我们主动提供的这些吗？下一页用本地代理记录一次请求，随后打开记录核对。",
    html=(
        '<style>'
        '#p05a .p05a-overview{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:32px;align-items:center}'
        '#p05a .p05a-overview>*{min-width:0}'
        '#p05a .p05a-tweet-label{font-size:19px;color:#5B6573;margin:0 0 7px}'
        '#p05a .p05a-tweet img{display:block;width:100%;height:auto;border:1px solid #D5D0C5;border-radius:9px}'
        '#p05a .p05a-caption{font-size:20px;color:#6E6043;margin:12px 0 0}'
        'body[data-mode="slides"] #p05a h2{font-size:40px}'
        'body[data-mode="slides"] #p05a .scene-content{width:1168px;height:510px}'
        'body[data-mode="slides"] #p05a .p05a-overview{display:block;position:relative;height:480px}'
        'body[data-mode="slides"] #p05a .p05a-diagram{position:absolute;left:0;top:30px;width:460px}'
        'body[data-mode="slides"] #p05a .p05a-diagram .p-shot-note{display:none}'
        'body[data-mode="slides"] #p05a .p05a-tweet{position:absolute;left:574px;top:60px;width:530px}'
        'body[data-mode="slides"] #p05a .p05a-tweet img{position:absolute;top:32px}'
        'body[data-mode="slides"] #p05a .p05a-caption{position:absolute;left:0;top:478px;margin:0}'
        'body[data-mode="slides"] #p05a .p-refs:not(.source-note){position:absolute;left:574px;top:480px;margin:0;font-size:17px}'
        'body[data-mode="slides"] #p05a .p-refs a{padding:1px 8px;line-height:1.3}'
        '@media(max-width:700px){body[data-mode="scroll"] #p05a .p05a-overview{grid-template-columns:minmax(0,1fr);gap:20px}body[data-mode="scroll"] #p05a .lesson-diagram{min-width:0;width:100%}}'
        '</style>'
        '<div class="p05a-overview">'
        '<div class="p05a-diagram">' +
        redrawn("context-engineering", "context-vertical", "course", "课程自绘概览，参考 Claude Academy 对训练知识与当前 Context 的区分", max_height=446) +
        '</div><div class="p05a-tweet" data-reveal="1">'
        '<p class="p05a-tweet-label">Andrej Karpathy · X · 2025-06-25</p>'
        '<img src="external/x-karpathy-context-engineering-text.png" alt="Karpathy 关于 Context Engineering 的帖子，包含他引用的 Tobi 原帖">'
        '</div><p class="p05a-caption" data-reveal="2">Context Engineering：组织当前可用的信息</p></div>'
    ),
    refs=[ref("Karpathy 原帖", "https://x.com/karpathy/status/1937902205765607626", "X · 2025-06-25"),
          ref("Tobi Lütke 原帖", "https://x.com/tobi/status/1935533422589399127", "X · 2025-06-19", kind="read"),
          ref("训练知识与当前 Context", "https://academy.claude.com/tutorials/parametric-memory-and-context", "Claude Academy", kind="read")],
    steps=["模型与任务信息", "看 Karpathy 的说法", "打开一次实际请求"],
)

scene(
    id="p06-tap", segment="打开请求",
    label="用本地代理记录请求", title="用本地代理，看请求怎样发出去",
    lead="正常对话时，我们看不到 Codex 发给模型的请求。claude-tap 是一个开源的本地代理，像中间人一样站在 Codex 和模型服务之间：请求和返回都经过它，被记录下来，再用查看器打开。讲师用下面的 Agent Lab 命令启动一个干净的课程环境并接入代理，结果和学员的环境一致。鉴权信息也会经过代理，它只记录经过这里的内容；学员运行选做。",
    html=(
        '<style>#p06-tap .tap-proxy-content{display:flex;flex-direction:column;gap:6px}'
        '#p06-tap .tap-proxy-content svg{display:block;width:100%;height:220px}'
        '#p06-tap .tap-proxy-command{font-size:17px;padding:8px 90px 8px 14px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere;word-break:break-all}'
        '#p06-tap .tap-proxy-source{font-size:14px;color:#5B6573;margin:0}'
        'body[data-mode="scroll"] #p06-tap .tap-proxy-scroll{overflow-x:auto}'
        'body[data-mode="scroll"] #p06-tap .tap-proxy-content svg{min-width:1000px}'
        '</style><div class="tap-proxy-content"><div class="tap-proxy-scroll">'
        + (Path(__file__).resolve().parents[3] / "materials/external/request-capture/redraw-tap-proxy-excalidraw.svg").read_text().strip()
        + '</div><div class="p-term tap-proxy-command" data-copy="' + escape(AGENT_LAB_CMD, quote=True) + '" data-reveal="2">'
        + '$ ' + escape(AGENT_LAB_CMD) + '</div>'
        '<p class="tap-proxy-source" data-reveal="2">先装一次 Agent Lab（见“使用课程独立环境”）· --tap 接入 claude-tap 0.1.146</p>'
        '</div>'
    ),
    refs=[ref("claude-tap 原理说明", "https://github.com/liaohch3/claude-tap/blob/v0.1.146/README.md#architecture")],
    steps=["请求", "返回", "查看记录"],
    repro=repro([
        ("先装好 uv、Codex CLI，并在当前终端设置 MINIMAX_API_KEY；不要把 Key 粘进对话或录屏", None),
        ("安装一次 Agent Lab（从课程仓库 main 安装；以后更新用 uv tool upgrade agent-lab）", AGENT_LAB_INSTALL),
        ("在个人主页项目目录启动课程独立环境，同时记录请求", AGENT_LAB_CMD),
        ("第一次在这个目录启动时，Codex 会问是否信任这个文件夹，选信任；选否会直接退出", None),
        ("进入 Codex 后先给会话起个名字，看到名字显示出来再开始对话；不起名时，Codex 会另外发请求让模型起标题，记录里会多出和对话无关的请求", "/rename ch02-demo"),
        ("先找到启动输出中的查看器地址；在 Codex 发完问候、回答结束后，再打开查看器", None),
        ("若已有配置好的 MiniMax 环境，也可直接启动代理；讲师演示使用上面的课程环境命令", TAP_CMD),
    ], note="Agent Lab 固定 MiniMax 课程配置并调用 claude-tap 0.1.146，课程会话单独保留；它减少个人配置混入，不提供额外的文件安全沙箱。请求记录可能包含项目内容，不公开分享未经检查的记录。", label="使用课程独立环境"),
)

scene(
    id="p08", segment="打开请求", layout="prompt-scene", prompt=FIRST_PROMPT,
    label="一句话与实际请求", title="写的是一句话，模型还收到了什么？",
    lead="仍在刚才的个人主页项目里发送问候。课件里留了一份同一句问候的记录（2026-10-24）：先看这一份请求有多大，再找到我们写的这一句，观察除此之外发出了什么。自己运行时，结果可以和这份对比。",
    closing="这次问候一次请求就回答了，没有读文件；模型也可能为一句问候先去读文件，那时就会有后续请求。不把整段会话的累计输入量当作这一次请求的输入量。",
    html=(
        '<style>#p08 .scene-content{align-items:center}'
        '#p08 .source-note,#p08 .closing{grid-column:1/-1}'
        'body[data-mode="slides"] #p08 .prompt{height:220px}'
        '#p08 .prompt-label span::after{content:""}'
        '#p08 .request-observation{display:grid;gap:16px}'
        '#p08 .request-observation .p-box{padding:20px 24px}'
        'body[data-mode="slides"] #p08 h2{font-size:42px}'
        '</style>'
        '<div class="request-observation">'
        '<div class="p-box" data-role="agent" data-reveal="1">'
        '<span class="p-tag" data-role="agent">回答问候的这一份请求</span>'
        '<p class="p-big">远不止这一句</p>'
        '<p class="p-sub">课件留存的这次：输入 8,709 token</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2">'
        '<p class="p-big">先找到原句</p><p>再看指令、工具、环境</p></div>'
        '</div>'
        '<p class="source-note">依据：2026-10-24，ch02-start-v1 起点、专用课程 HOME，Codex CLI 0.163.0 + MiniMax-M3.1-Flash，max，claude-tap 0.1.146。8,709 是这份请求的 input_tokens；只代表这次运行。</p>'
    ),
    steps=["现场发出问候", "课件里的这一份请求", "原句之外还有什么"],
)


# ---------- 逐块拆开 ----------
stack = (
    '<style>.x-stack{display:flex;gap:6px;height:64px}.x-stack>div{position:relative;border:2.5px solid var(--c);background:var(--cl);border-radius:10px 8px 11px 9px;'
    'display:flex;align-items:center;justify-content:center;font-size:19px;color:var(--ct);min-width:14px;overflow:hidden;white-space:nowrap}'
    '.x-key{display:flex;justify-content:flex-end;align-items:center;gap:18px;margin:8px 0 0;font-size:18px;color:var(--p-muted)}'
    '.x-key i{display:inline-block;width:9px;height:24px;margin-right:7px;vertical-align:-6px;border:2.5px solid var(--c);background:var(--cl);border-radius:4px 3px 4px 3px}'
    '@media(max-width:600px){body[data-mode=scroll] .x-stack{height:96px}body[data-mode=scroll] .x-stack>div{white-space:normal;font-size:14px;line-height:1.25;text-align:center;padding:2px}'
    'body[data-mode=scroll] .x-key{flex-wrap:wrap;justify-content:flex-start;gap:4px 14px;font-size:15px}body[data-mode=scroll] .x-key span{white-space:nowrap}}</style>'
)

scene(
    id="p08a", segment="逐块拆开",
    label="按顺序看同一请求", title="沿着同一份请求，按顺序往下看",
    lead="刚才找到了我们写的 Prompt。现在沿同一份初始请求，按它实际的顺序往下看：系统指令、Skills 列表、权限说明、协作模式与团队说明、环境信息，然后是我们的问候；消息之后是工具定义，最后看这一次的返回。阅读视图将长段落折叠，完整原文保留所有消息正文和工具定义。系统指令的首句来自模型能力目录，第一步的阅读视图里有 MiniMax 官方接入说明的链接，可以对照。",
    html=(
        '<style>#p08a .scene-content{display:block}body[data-mode="scroll"] #p08a .p-evidence{height:680px}body[data-mode="slides"] #p08a h2{font-size:40px}body[data-mode="slides"] #p08a .scene-content{top:160px;height:455px}body[data-mode="slides"] #p08a .p-evidence{height:455px}</style>'
        + EVIDENCE.stage("p08a", note="同一份初始请求", reading=greeting_reading())
    ),
    closing="同一份请求里，有我们输入的一句，也有 Codex 组织的大部分内容；这次模型一次就答完了。",
    refs=[ref("MiniMax Codex 接入说明", MINIMAX_DOC, "MiniMax · 模型能力目录", kind="read")],
    steps=["系统指令", "Skills 列表", "权限说明", "协作模式与团队", "环境信息", "工具定义", "这一次的返回"],
)


scene(
    id="p09", segment="逐块拆开",
    label="请求的组成与来源", title="按作用分六类，哪些不是我写的？",
    lead="先按作用辨认初始请求的六类内容：系统与协作指令、工具定义、Skills 列表、环境信息、权限说明、我们这次的提问。分类不等于消息条数，一条消息可以同时包含多类内容。再看消息的角色：只有 developer 和 user 两种，标着 user 的也不都是我们写的。",
    closing="六类内容里，只有一句是我们写的，其余都由 Codex 组织。",
    refs=[ref("developer 取代 system 消息", "https://developers.openai.com/api/reference/resources/chat", "OpenAI API 参考"),
          ref("Codex：基础指令改为 developer 消息", "https://github.com/openai/codex/pull/51156", "openai/codex PR #51156")],
    html=(
        '<style>#p09 .scene-content{gap:0}#p09 .request-map{display:grid;gap:6px;margin:0}'
        '#p09 .request-map-row{display:grid;grid-template-columns:290px minmax(0,1fr);gap:20px;align-items:center;min-height:39px;padding:3px 16px;border:1px solid var(--p-rule);border-radius:7px;background:var(--p-card)}'
        '#p09 .request-map dt{margin:0;font-size:22px;line-height:1.3;font-weight:700;color:var(--ct)}'
        '#p09 .request-map dd{margin:0;font-size:22px;line-height:1.35}'
        '#p09 .map-caption{margin:0;font-size:24px;line-height:1.4}'
        '#p09 .p09-stage{display:grid;gap:14px}#p09 .p09-stage h3{font-size:28px}'
        '#p09 .p09-stage p{line-height:1.5}#p09 .p09-note{font-size:22px}'
        '#p09 .source-pair{display:grid;grid-template-columns:110px 180px 1fr;gap:20px;align-items:center;padding:24px;border:1px solid var(--p-rule);border-radius:9px;background:var(--p-card);font-size:24px}'
        'body[data-mode="slides"] #p09 h2{font-size:42px}'
        'body[data-mode="slides"] #p09 .p09-stage.step-hidden{display:none}'
        'body[data-mode="slides"] #p09:has(.p09-stage[data-reveal="1"]:not(.step-hidden)) .p09-stage[data-reveal="0"]{display:none}'
        'body[data-mode="scroll"] #p09 .p09-stage{margin-bottom:24px}'
        '@media(max-width:600px){body[data-mode="scroll"] #p09 .request-map-row{grid-template-columns:1fr;gap:3px;padding:9px 12px}'
        'body[data-mode="scroll"] #p09 .request-map dt,body[data-mode="scroll"] #p09 .request-map dd{font-size:19px}'
        'body[data-mode="scroll"] #p09 .source-pair{grid-template-columns:55px 90px minmax(0,1fr);gap:10px;padding:12px;font-size:16px}'
        'body[data-mode="scroll"] #p09 .map-caption,body[data-mode="scroll"] #p09 .p09-note{font-size:20px}}</style>'
        '<div class="p09-stage" data-reveal="0"><p class="map-caption">按作用认出六类内容</p>'
        '<dl class="request-map">'
        '<div class="request-map-row" data-role="agent"><dt>系统与协作指令</dt><dd>它是谁、怎样工作</dd></div>'
        '<div class="request-map-row" data-role="tool"><dt>工具定义</dt><dd>有哪些工具、怎样调用</dd></div>'
        '<div class="request-map-row" data-role="ctx"><dt>Skills 列表</dt><dd>有哪些技能、全文在哪里</dd></div>'
        '<div class="request-map-row" data-role="ink"><dt>环境信息</dt><dd>当前目录、日期等现场信息</dd></div>'
        '<div class="request-map-row" data-role="gate"><dt>权限说明</dt><dd>这次允许怎样操作</dd></div>'
        '<div class="request-map-row" data-role="us"><dt>我们这次的提问</dt><dd>人这次提出的要求</dd></div></dl></div>'
        '<div class="p09-stage" data-reveal="1"><p class="map-caption">消息只有两种角色：<code>developer</code> 和 <code>user</code></p>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="agent"><span class="p-tag"><code>developer</code></span><p>身份、Skills、权限、协作说明</p><p class="p-sub">都由 Codex 加入</p></div>'
        '<div class="p-box" data-role="us"><span class="p-tag"><code>user</code></span><p>环境信息 <span class="p-sub">· Codex 加入</span></p><p>“你好，用一句话介绍你能帮我做什么。” <span class="p-sub">· 我们输入</span></p></div></div>'
        '<p class="p09-note">标着 <code>user</code> 的，也不都是我们写的</p></div>'
        '<p class="source-note">六类内容与来源对照来自 2026-10-24 的问候请求；没有项目 AGENTS.md 或项目 Skills。消息内容为摘要，未展示本机路径。</p>'
    ),
    steps=["六类内容与作用", "两种角色，谁写的"],
)


scene(
    id="p07", segment="代码进入请求",
    label="代码怎样进入请求", title="读到的代码，怎样进入下一次请求？",
    lead="在问候后的同一会话发出项目区只读问题。这一次，一句话引出了好几次请求：模型读完文件以后，代码作为工具返回进入下一次请求。回答总在最后一次请求的返回里，它引用的代码是更早某一次读回来的，所以核对时从回答倒着往回找：看回答 → 找读取调用 → 找工具返回。本页在 2026-10-24 的真实记录里核对其中一处：项目卡写在哪（src/App.tsx）；放大后同样可以切换。",
    html=(
        EVIDENCE.stage("p07")
    ),
    closing="这里核对的是回答里的一处引用；回答还引用了项目说明文档 PLACEHOLDER_CONTENT.md，依据不一定都来自代码。模型没有用浏览器验证页面。记录完整保留请求、调用、返回与回答，只去掉了鉴权、本机路径、会话标识和推理的加密部分。",
    repro=repro([("在同一会话接着问；只读，不点名文件", READONLY_PROMPT)], label="本次怎样提问？", note="记录来自 2026-10-24 的一次真实交互会话：问候之后接着问。想看完整结构，可在查看器中展开‘完整 JSON’；不要求记住请求编号或工具字段。"),
    steps=["看回答", "找读取调用", "找工具返回"],
)

scene(
    id="p07-loop", segment="代码进入请求", layout="evidence-scene",
    label="一句话，几次请求", title="刚才那几次请求，是怎样一次接一次发出的？",
    lead="把刚才在记录里看到的连起来：模型提出调用，Codex 执行，把模型这一轮的推理、调用和返回追加到请求末尾，再发一次；直到模型不再调用工具，给出最终回答。每一次请求都带着上一次的全部内容，前面一字不改，只在后面增加。",
    html=(
        redrawn("agent-loop", "codex-agent-loop", "excalidraw", "据 OpenAI《深入解析 Codex 智能体循环》的循环图与 Snapshot 2 重画；中文标签，不抄字段名", max_height=380)
    ),
    closing="刚才对比相邻两次请求，看到的正是这样：前面不变，末尾多了模型的推理、一条工具调用和一条工具返回。推理和调用是上一次请求的返回，下一次原样带回去；工具返回是 Codex 执行后加的。developer、user、assistant 是消息的角色，工具调用和工具返回是单独的条目。",
    refs=[ref("深入解析 Codex 智能体循环", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23", quote="其核心都是一套称为")],
    steps=["一句话怎样变成几次请求", "第 1 次请求", "第 2 次：前面不变，后面追加", "第 3 次，直到最终回答"],
)

scene(
    id="p16a", segment="代码进入请求",
    label="这些合起来叫 Context", title="模型这一次可用的信息，合起来叫 Context",
    lead="问候时，我们已经拆过系统指令、工具和环境。项目问答又让我们沿着代码返回核对了回答依据。把这两次观察放到同一张图上，看看后续请求还带入了什么。",
    html=(
        '<style>body[data-mode="slides"] .segment-bar .segment:first-child{min-width:90px}</style>' +
        anchor(lit=("系统指令", "工具", "环境", "对话历史", "工具返回", "新的 Prompt"), absent=("规则",), note="身份、Skills、权限、协作说明都算系统指令；这个项目还没有 AGENTS.md，规则这一块是空的", reveal=0) +
        '<div class="p-bar" data-reveal="1" style="margin-top:10px"><b>Context</b>：模型这一次可用的信息</div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:10px">'
        '<div class="p-box" data-role="ink" data-reveal="2"><span class="p-tag" data-role="ink">Anthropic 的说法</span><p>Context 是从大模型采样时包含的那一组 token</p><p class="p-sub">系统指令、工具、外部数据、消息历史等 · <a href="' + ANTHROPIC_CE + '" target="_blank" rel="noopener">原文 ↗</a></p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="3"><span class="p-tag" data-role="ctx">课程地图</span><p>第 2 章：<b>Context</b><br>从当前请求，继续看信息怎样变化</p></div></div>'
    ),
    closing="锚点图按信息的作用分类，不表示请求字段必须按图排列。项目问答的后续请求已包含历史和工具返回；规则是否存在以实际记录为准。刚才没有给出源码路径，模型先查找，才拿到相关代码。Context 是有限的资源，既然这些信息要进入 Context，我们已经知道文件在哪里时，能不能提前告诉它，缩短查找过程？",
    refs=[ref("Effective context engineering for AI agents", ANTHROPIC_CE, "Anthropic，2025-09-29", kind="read")],
    steps=["合看两次观察", "叫它 Context", "对照文字定义", "定位与下一问"],
    expressive="复用全章锚点图，对照问候与项目问答的后续请求",
)

# ---------- 同条件点名文件对照 ----------
scene(
    id="p14a", segment="代码进入请求",
    label="知道文件在哪", title="已经知道文件在哪，要不要告诉它？",
    lead="刚才，模型先查找文件，才把相关代码带进 Context。每多一次查找，就多一次请求，前面的内容又整段重发一遍。如果我们已经知道路径，可以主动提供。保持源码起点和配置相同，另开两个独立新会话，只给点名组增加 src/App.tsx 路径；先核对两边的回答和依据，再比较请求轮次与累计输入。",
    closing="这次两边核心事实均有源码依据，点名组请求更少、累计输入较少，但仍读取其他文件。已知且相关的信息可以主动提供；给出路径以后，仍要核对回答和依据。",
    html=(
        '<style>body[data-mode="slides"] #p14a .p-matrix span{padding:7px 10px}body[data-mode="slides"] #p14a .p-refs{margin-top:12px!important}</style>'
        '<p class="p-bar" data-reveal="0">同一起点 · 相同配置 · 两个独立新会话</p>'
        '<p data-reveal="0" style="margin:10px 0;font-size:23px">先核对回答与依据，再比较查找过程和代价</p>'
        '<div class="p-matrix" data-reveal="1" style="grid-template-columns:1.2fr 1fr 1fr">'
        '<div class="is-head"><span>本次实测</span><span>不点名</span><span>给出相关文件名</span></div>'
        '<div><span>模型请求轮次</span><span>7</span><span>4</span></div>'
        '<div><span>累计输入 token</span><span>70,523</span><span>32,879</span></div></div>'
        '<p class="p-refs" data-reveal="2" style="margin-top:20px">'
        '<a href="trace/compare-plain.html" target="_blank" rel="noopener">单独打开：不点名记录</a> '
        '<a href="trace/compare-named.html" target="_blank" rel="noopener">单独打开：点名记录</a></p>'
        '<p class="source-note" data-reveal="1">2026-10-24，各一次；累计输入是每次请求输入之和，含缓存，不是单次 Context 长度；不推固定比例</p>'
    ),
    steps=["已知路径能帮什么", "本次量化对照", "回看真实记录"],
)



# ---------- 小结 ----------
scene(
    id="p16b", segment="小结", layout="evidence-scene",
    label="谁组织请求", title="Codex 组织请求，我们提供与核对",
    lead="把这一节的观察放回整体：我们提出任务，Codex 根据模型配置、权限、项目环境和此前的对话，组织发给模型的信息。OpenAI 的请求示意图为这件事提供机制上的对照。我们能做的，是提供已知的相关信息，查看模型实际读到了什么，再核对回答的依据。",
    html=(
        redrawn("context-engineering", "openai-codex-request", "excalidraw", "据 OpenAI《深入解析 Codex 智能体循环》（2026-01-23）重画；只对照本次请求的组织者", max_height=300,
                note="文章写于 2026-01；当前 Codex 已把基础指令改为第一条 developer 消息") +
        '<div class="p-bar" style="margin-top:12px">提供已知的相关信息 → 查看实际读取 → 核对回答依据</div>'
    ),
    closing="图示帮助说明 Codex 的组织作用，具体字段、角色和内容以实际版本记录为准。",
    refs=[ref("深入解析 Codex 智能体循环", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23", quote="在添加用户消息之前")],
    steps=["谁组织，我们做什么"],
)


scene(
    id="p18", segment="小结",
    label="暂停自检", title="暂停自检：认组成、看循环、做选择",
    lead="先暂停视频，独立回答三道题，再逐步查看参考答案。不要求背工具数量、请求编号、行号或配置字段；能结合刚才的记录解释判断即可。",
    html=(
        '<style>#p18 .p-qlist{gap:14px}#p18 .p-qrow h3{font-size:24px}#p18 .p-qrow p{font-size:19px;line-height:1.4}#p18 .p-pause{margin-bottom:12px}@media(max-width:600px){body[data-mode="scroll"] #p18 .p-qrow h3{font-size:20px}body[data-mode="scroll"] #p18 .p-qrow p{font-size:18px}}</style>'
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答，再往下看解析</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>我们只发了一句问候。请求里举出一条不是我们写的信息：它从哪来，起什么作用？</h3>'
        '<div data-reveal="1"><p>例如环境信息：标为 user，却是 Codex 加入的，告诉模型当前目录和日期；权限说明、工具定义同理'
        '<br><a href="#p09">回看六类内容与来源</a></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>Codex 替模型读了一个文件。下一次请求和上一次相比，多了什么，少了什么？</h3>'
        '<div data-reveal="2"><p>前面的内容原样重发，一样不少；末尾多了模型的推理、一条工具调用和一条工具返回，返回里就是读到的代码'
        '<br><a href="#p07-loop">回看循环示意</a> · <a href="#p07">回看真实记录</a></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>我们已经知道要改的代码在哪个文件。怎样提问？</h3>'
        '<div data-reveal="3"><p>把路径写进问题，帮模型少找几轮；路径只是线索，它仍可能去读别的文件'
        '<br><a href="#p14a">回看点名文件对照</a></p></div></div></div></div>'
    ),
    closing="能举例说明请求里哪些不是我们写的、说清每次请求怎样在上一次基础上追加，并知道什么时候主动提供路径，就完成了本节的判断练习。",
    steps=["暂停独立作答", "认组成", "看循环", "做选择"],
)

scene(
    id="p19", segment="小结",
    label="前面的还要带上吗", title="再说一句，前面的还要带上吗？",
    lead="刚才我们让 Codex 读懂了当前项目区。接下来继续做同一个个人主页，把自己的项目经历补进去。同一个会话里，之前的问题、回答和读过的代码，都会跟着进入下一次请求。新的要求发出去时，我们要不要它们跟着？",
    html=(
        '<div class="p-pair" data-reveal="0" style="grid-template-columns:1fr 1fr;gap:28px">'
        '<div class="p-box" data-role="ink"><span class="p-tag" data-role="ink">刚才</span><p class="p-big">读懂当前项目区</p></div>'
        '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">接下来 · 2.2</span><p class="p-big">补入自己的项目经历</p></div></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="margin-top:30px"><p style="font-size:30px">前面的问答和读过的代码都会跟着发出去，还要不要它们跟着？</p></div>'
    ),
    closing="带着这个问题进入 2.2：继续修改个人主页，先决定这一轮要不要带着前面的对话，再沿连续几次请求观察前面的信息怎样留下、新的信息怎样加入。本页只提出观察问题，多轮累积、清空与压缩留给下一节的实际过程。",
    steps=["接回个人主页任务", "留下下一问"],
)




lesson.write()

#!/usr/bin/env python3
"""2.1 只说了一句话，模型收到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
import json
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, anchor, chapter_map, keep_scroll_inside, redrawn, ref, repro, shot, teach  # noqa: E402

# 落后时进入第 2 章的追赶 Prompt：与 materials/catchup 的实验同一份，代入真实的参考起点
CATCHUP_PROMPT = (Path(__file__).resolve().parents[3] / "materials/catchup/prompt-ch02.txt").read_text().strip() \
    .replace("{URL}", "https://github.com/prompt-to-harness/course-starter.git").replace("{TAG}", "ch02-start-v1")

lesson = Lesson(__file__, "2.1", "只说了一句话，模型收到了什么", summary="用 claude-tap 打开 Codex 实际发出的请求：只说一句话，模型收到的远不止这句话；读文件时一句话会变成好几次请求，每次都带着前面的全部内容。这些加在一起就是 context，已知的信息主动给，它就能少走弯路。")
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

# 固定记录的自包含查看器来自已核验样稿；构建时发布到本节目录，不依赖服务。
TRACE_SOURCE = Path(__file__).resolve().parents[5] / "demos/ch02-static-trace"


def publish_static_trace():
    import re
    import hashlib
    manifest = json.loads((TRACE_SOURCE / "viewer-manifest.json").read_text())
    assert manifest["trace_sha256"] == hashlib.sha256((TRACE_SOURCE / "trace.json").read_bytes()).hexdigest(), "记录已变化：请先列候选，经讲师确认后重建静态查看器"
    assert manifest["selection"] == json.loads((TRACE_SOURCE / "selection.json").read_text()), "依据链选择已变化：请先重建静态查看器"
    target = lesson.here / "trace"
    target.mkdir(exist_ok=True)
    raw = keep_scroll_inside((TRACE_SOURCE / "trace.html").read_text())
    # Unicode escaping keeps bundled data equivalent while the native viewer owns its fonts.
    # Authoring sources remain UTF-8; this is only the generated vendor payload serialization.
    def script_ascii(match):
        return match[1] + re.sub(r"[\u4e00-\u9fff]", lambda m: "\\u%04x" % ord(m[0]), match[2]) + match[3]
    raw = re.sub(r"(<script\b[^>]*>)([\s\S]*?)(</script>)", script_ascii, raw)
    raw = re.sub(r"[\u4e00-\u9fff]", lambda m: "&#x%x;" % ord(m[0]), raw)
    (target / "viewer.html").write_text(raw)
    for name in ("trace.json", "LICENSE-claude-tap.txt"):
        (target / name).write_bytes((TRACE_SOURCE / name).read_bytes())


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
        '<div style="margin-top:12px">' + anchor(lit=("新的 Prompt",), title="除了我们写的 Prompt，模型每一步还拿到了什么？", reveal=3) + '</div>'
    ),
    repro=repro([
        ("先在自己的仓库里保存当前的工作（没有改动时会提示无可提交，不影响）", "git add -A && git commit -m \"保存：开始第 2 章之前\""),
        ("在仓库根目录启动 Codex，粘贴这段 Prompt", CATCHUP_PROMPT),
        ("Codex 可能连续申请几次：联网克隆参考起点、在临时目录里复制项目试构建、清理临时目录。每次看清整条命令作用在哪个目录，只动临时目录的再选 Yes, proceed；不要选“以后不再问”。只有写明要联网的那次申请同意后才能联网", None),
        ("读它的逐条判断，只确认补齐前提所必需的改动", "只做补齐第 2 章前提所必需的改动，可选的建议先不做；我的个人内容和已有的决定保持不变。改完告诉我需要我运行哪些命令。"),
        ("装依赖、构建，然后在浏览器里看一遍首屏、项目区和“查看项目”", "npm install && npm run build && npm run preview"),
        ("让 Codex 在回复里说明这次补齐的情况，不新建记录文件；你逐句核对，只留下确认过的内容", "在回复里说明这次补齐：对照了哪个参考起点、补了什么、保留了什么。不要新建记录文件，不要写本机路径和用户名。"),
        ("核对无误后提交，把确认过的补齐情况写进提交说明的正文", "git add -A && git commit -m \"对照 ch02-start-v1 补齐第 2 章前提\" -m \"补了什么、保留了什么（换成你核对过的内容）\""),
    ], note="没做完第 1 章、或想直接从第 2 章开始时用；已经做完的跳过。参考起点是 course-starter 的 ch02-start-v1 标签，只放在临时目录里对照，不进你的仓库。不想用 Codex 时，可在 GitHub 上下载这个标签的 ZIP 对照。讲师 2026-10-06 用三种起点各试两次，Codex 都能判断对；笼统地说“按你的建议执行”时，它会连可选建议一起做，所以要只确认必需项。", label="从这一章开始？"),
    steps=["本章地图", "打开个人主页", "这一章做什么", "从 Prompt 看信息"],
    teaching=teach(("讲师提示", "讲师先用现有 ch02-start-v1 checkpoint（8e9a323）查看主页；已验证安装、开发服务与构建，浏览器效果录制前另核对。依赖录前安装好，服务已运行时用实际 Local 地址。先打开主页再回课件讲本章成果，地图只定位、不逐行念。学员继续自己的项目。")),
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
    teaching=teach(
        ("讲师提示", "先讲左图，再揭示右侧帖子。先指模型解释既定版本，再指左图上方的当前任务信息；Context 不只由人手写，后面用请求实录拆开。右帖保留现有截图，作者与日期可见，简短意译，不逐行翻译。概览是课程自绘，不是 Karpathy 的原图；普通对话不实时改写参数的区分依据 Claude Academy，不把它说成帖子的结论。模型更新与微调不在本页展开。"),
    ),
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
        ("先找到启动输出中的查看器地址；在 Codex 发完问候、回答结束后，再打开查看器", None),
        ("若已有配置好的 MiniMax 环境，也可直接启动代理；讲师演示使用上面的课程环境命令", TAP_CMD),
    ], note="Agent Lab 固定 MiniMax 课程配置并调用 claude-tap 0.1.146，课程会话单独保留；它减少个人配置混入，不提供额外的文件安全沙箱。请求记录可能包含项目内容，不公开分享未经检查的记录。", label="使用课程独立环境"),
    teaching=teach(
        ("图示来源", "据 liaohch3/claude-tap v0.1.146 README 整理，只展示本章使用的反向代理路径；来源与图元已在章素材登记表留存。演示只显示一条可点击原理说明链接。"),
        ("课程启动器", "Agent Lab 已在 main，2026-10-24 核对 tools/agent-lab 与原固定提交 691d15c 内容一致；改为从 main 安装一次、用 agent-lab codex --tap 启动。暂不固定 tag，main 上的 agent-lab 改动会影响学员装到的版本，正式录制前再决定是否打 tag。"),
        ("切到实操", "主画面、复制内容、展开入口与口播统一使用 agent-lab codex --tap，讲师录前已安装；直接启动代理只作为展开入口中的备选。沿用工具验证记录，不把原直接启动命令的旧实测日期套在新入口上。录前准备 uv、Codex CLI 与终端密钥，命令在个人主页项目根目录执行；停在输入处并指出实际查看器地址，下一页发问候后才查看记录。"),
        ("讲师提示", "API 密钥会经过本地代理；claude-tap 导出与存储时只保留鉴权头前缀。画面上不要出现 config.toml 或完整密钥。学员自己运行算选做，不计入验收，不另做排障文档。"),
    ),
)

scene(
    id="p08", segment="打开请求", layout="prompt-scene", prompt=FIRST_PROMPT,
    label="一句话与实际请求", title="写的是一句话，模型还收到了什么？",
    lead="仍在刚才的个人主页项目里发送问候。回答结束后打开记录，找到回答问候的这一份请求，再定位我们写的这一句，观察除此之外发出了什么。会话开头先用 /rename 起好名字，记录里就不会多出自动起标题的辅助请求。",
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
        '<p class="p-sub">这一次输入：8,709 token</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2">'
        '<p class="p-big">先找到原句</p><p>再看指令、工具、环境</p></div>'
        '</div>'
        '<p class="source-note">依据：2026-10-24，ch02-start-v1 起点、专用课程 HOME，Codex CLI 0.163.0 + MiniMax-M3.1-Flash，max，claude-tap 0.1.146。8,709 是这份请求的 input_tokens；只代表这次运行。</p>'
    ),
    steps=["发出问候", "找到第一份主请求", "原句之外还有什么"],
    teaching=teach(
        ("录前准备", "按本节 tools/README-demo.md 准备仓库外的 ch02-start-v1 项目与专用 AGENT_LAB_HOME；本次实测快照没有项目或上级 AGENTS.md，也没有项目 Skills。p06 启动后保持同一项目目录，不在课上安装依赖或配置 Key。"),
        ("记录定位", "采用 2026-10-24 重跑的交互会话（原始记录在私有仓库 prompt-to-harness/lab-runs 的 ch02/2.1-20261024/interactive/）：首句前 /rename ch02-demo，问候是会话里第 1 条记录，没有标题请求。公开数据见 materials/request/run-20261024/interactive.json 第 1 条。"),
        ("实测边界", "这份请求输入 8709 token，6 条 input 消息，5 个工具定义；响应直接是文字回答，没有工具调用。上一次（10-23）同一句问候曾先读 package.json，说明同一句话不保证每次都一样。录制当次数字不同就按当次记录更新，不重跑凑结果。"),
        ("展示", "先等回答结束才打开查看器，定位原句，再向前观察大块内容；若忘了 /rename、记录里出现标题任务，用一句话交代。查看器含本机路径与用户名，录屏前遮盖或缩写；不展示 Key 或鉴权配置。"),
    ),
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
    lead="刚才找到了我们写的 Prompt。现在沿同一份初始请求，按它实际的顺序往下看：系统指令、Skills 列表、权限说明、环境信息，然后是我们的问候；消息之后是工具定义，最后看这一次的返回。阅读视图将长段落折叠，完整原文保留所有消息正文和工具定义。系统指令的首句来自模型能力目录，可对照 MiniMax 官方接入说明。",
    html=(
        '<style>#p08a .scene-content{display:block}#p08a .request-walk-frame{display:block;width:100%;height:420px;border:0;background:#fffdf7;border-radius:8px}body[data-mode="scroll"] #p08a .request-walk-frame{height:680px}@media(max-width:600px){body[data-mode="scroll"] #p08a .request-walk-frame{height:1150px}}body[data-mode="slides"] #p08a h2{font-size:40px}body[data-mode="slides"] #p08a .scene-content{top:160px;height:455px}body[data-mode="slides"] #p08a .request-walk-frame{height:455px}</style>'
        '<iframe class="request-walk-frame" id="request-walk-frame" title="连续查看真实请求：阅读视图与完整原文" src="request/index.html?embed=1"></iframe>'
    ),
    closing="同一份请求里，有我们输入的一句，也有 Codex 组织的大部分内容；这次模型一次就答完了。接下来按作用归类，看哪些不是我们写的。",
    refs=[ref("MiniMax Codex 接入说明", "https://platform.minimax.cn/docs/m-plan/codex", "MiniMax · 模型能力目录"),
          ref("developer 取代 system 消息", "https://developers.openai.com/api/reference/resources/chat", "OpenAI API 参考", kind="read"),
          ref("Codex：基础指令改为 developer 消息", "https://github.com/openai/codex/pull/51156", "openai/codex PR #51156", kind="read")],
    steps=["系统指令", "Skills 列表", "权限说明", "环境信息", "工具定义", "这一次的返回"],
    teaching=teach(
        ("同源与展示", "使用 2026-10-24 重跑交互会话的问候请求；六条消息正文、五个顶层工具定义完整保留，仅路径占位，排除鉴权请求头、缓存与会话标识。阅读视图只折叠不删除，完整原文为原版静态查看器，可自由展开。顺序按请求实际排列：developer 身份 → developer（Skills、权限、Default 模式）→ developer 团队说明 → developer 多代理限制 → user 环境 → user 问候，tools 在 input 之后。"),
        ("系统指令首句", "“You are Codex, a coding agent based on MiniMax-M3.1-Flash…”是模型能力目录里 base_instructions 的原文，与 MiniMax 官方说明“配置模型能力目录（可选）”一节的示例一致（2026-10-24 核对）。不配目录时是 Codex 默认的长指令，学员记录可能不同。只对照这一句，不教配置。团队说明与多代理限制在第一步的展开里，口播一句交代。"),
        ("为什么没有 system", "第一步口播顺带一句，不上屏：你可能听说过 system、developer、user 三种消息；在 OpenAI 的 API 里，开发者写的指令逐渐统一叫 developer（o1 及更新的模型用它取代 system 消息），Codex 0.162 起也把基础指令作为第一条 developer 消息（PR #51156）。口播限定为“在 OpenAI 的 API 和这个 Codex 版本里”；不说 o1 的具体日期，不推断 MiniMax 服务端是否另加 system。两处原文作为阅读链接。"),
        ("彩蛋", "环境里的时区 Asia/Shanghai 可以口播一句：社区常讨论工具能否判断用户在哪，这类字段确实可能透露信息。只说“可能”，不说 Codex 实际这样用，不上屏。"),
        ("这一次的返回", "这次的响应直接是文字回答，没有工具调用（10-23 那次曾先读 package.json）。读文件引出多次请求，留到 p07-loop 用项目问题讲。"),
        ("来源与发布", "源在 demos/ch02-request-walkthrough，本节构建时验证数据和生成物指纹后复制到 request/；不需要服务或模型调用。完整调用链在后面的 p07，使用另一组项目问题记录，不能说成问候后续。"),
    ),
)


scene(
    id="p09", segment="逐块拆开",
    label="请求的组成与来源", title="按作用分六类，哪些不是我写的？",
    lead="先按作用辨认初始请求的六类内容：系统与协作指令、工具定义、Skills 列表、环境信息、权限说明、我们这次的提问。分类不等于消息条数，一条消息可以同时包含多类内容。再看消息的角色：只有 developer 和 user 两种，标着 user 的也不都是我们写的。",
    closing="六类内容里，只有一句是我们写的，其余都由 Codex 组织。接下来回到个人主页：项目区现在显示什么、数据在哪个文件？模型要先读文件，一句话就会变成好几次请求。",
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
    teaching=teach(
        ("与记录对应", "沿用 p08 同一份初始主请求。developer input 0 是身份；input 1 同时包含 Skills、权限、Default 模式；input 2/3 是团队说明和多代理限制。user input 4 是环境，input 5 才是问候。工具定义另在 tools 中。归成六类不等于六条消息各自对应一类。"),
        ("转场", "第二步可切查看器核对环境和问候的 user 角色；随后进入项目问题，p07-loop 先讲一句话为什么会变成几次请求。p07 使用另一组已核对的项目问答排练，不说成此前组问候的后续结果。"),
    ),
)


scene(
    id="p07-loop", segment="代码进入请求", layout="evidence-scene",
    label="一句话，几次请求", title="只说了一句，为什么有好几次请求？",
    lead="问候一次请求就答完了。要读文件的任务不一样：模型提出调用，Codex 执行，把模型这一轮的推理、调用和返回追加到请求末尾，再发一次；直到模型不再调用工具，给出最终回答。每一次请求都带着上一次的全部内容，前面一字不改，只在后面增加。",
    html=(
        redrawn("agent-loop", "codex-agent-loop", "excalidraw", "据 OpenAI《深入解析 Codex 智能体循环》的循环图与 Snapshot 2 重画；中文标签，不抄字段名", max_height=380)
    ),
    closing="下一页在真实记录里对比相邻两次请求：前面不变，末尾多了模型的推理、一条工具调用和一条工具返回。developer、user、assistant 是消息的角色；工具调用和工具返回是单独的条目，上一问的回答以 assistant 进入后面的请求。",
    refs=[ref("深入解析 Codex 智能体循环", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23")],
    steps=["一句话怎样变成几次请求", "第 1 次请求", "第 2 次：前面不变，后面追加", "第 3 次，直到最终回答"],
    teaching=teach(
        ("讲师提示", "先讲左侧循环，再依次揭示右侧三次请求。图是示意，轮数以实际记录为准。2026-10-24 重跑记录里每轮在末尾追加三条：reasoning（推理）、custom_tool_call、custom_tool_call_output，与文章 Snapshot 2 一致；旧的 10-23 公开记录删掉了推理，看起来像两条，不再沿用。图例不用 System，避免和本次只有 developer、user 的记录对不上。"),
        ("对比相邻两轮", "到 p07 放大记录后，用 claude-tap 查看器的对比功能选相邻两次请求，推荐用读取 App.tsx 前后的两次：前面不变，末尾多三条，最后一条就是返回的代码。前几轮的部分工具返回在静态记录里是教学删节标记，对比时末条显示为“[教学删节…]”，不要选这两轮来讲。"),
    ),
)

scene(
    id="p07", segment="代码进入请求",
    label="代码怎样进入请求", title="读到的代码，怎样进入下一次请求？",
    lead="在问候后的同一会话发出项目区只读问题。按刚才的循环，模型读完文件以后，代码作为工具返回进入下一次请求。本页从 2026-10-24 的真实记录里挑三条依据链：A 项目卡写在哪（src/App.tsx），C 页面标题写在哪（index.html），D 内容从哪来（PLACEHOLDER_CONTENT.md）。每一条都可以按“看回答 → 找读取调用 → 看后续请求”核对；放大后同样可以切换。",
    html=(
        '<div class="trace-lesson-stage">'
        '<nav class="trace-lesson-guide" aria-label="本次记录的观察顺序"><p class="trace-chain-note">三条真实依据链</p>'
        '<div class="trace-chain-tabs" role="group" aria-label="依据链"><button type="button" data-trace-chain="A" aria-pressed="true" title="项目卡写在哪">A 项目卡</button><button type="button" data-trace-chain="C" aria-pressed="false" title="页面标题写在哪">C 标题</button><button type="button" data-trace-chain="D" aria-pressed="false" title="内容从哪来">D 来源</button></div>'
        '<button type="button" data-trace-point="answer" aria-pressed="true"><b>① 看回答</b><span>它说了什么，引用了哪里？</span></button>'
        '<button type="button" data-trace-point="call" aria-pressed="false"><b>② 找读取调用</b><span>模型让 Codex 去读了什么？</span></button>'
        '<button type="button" data-trace-point="result" aria-pressed="false"><b>③ 看后续请求</b><span>返回的代码怎样带了回来？</span></button>'
        '</nav><div class="trace-lesson-viewer">'
        '<div class="trace-lesson-bar"><span id="trace-lesson-status">本次真实记录</span>'
        '<div class="trace-lesson-actions"><a data-trace-open href="trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=A-answer" target="_blank" rel="noopener">单独打开 ↗</a><button type="button" id="trace-lesson-expand" aria-haspopup="dialog">放大记录</button></div></div>'
        '<iframe id="trace-lesson-frame" title="claude-tap 静态记录：回答、调用与工具返回" src="trace/viewer.html?embed=1&amp;hideHeader=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light"></iframe>'
        '</div></div>'
    ),
    closing="这里核对的是回答里的三处引用，模型没有用浏览器验证页面。记录完整保留请求、调用、返回与回答，只去掉了鉴权、本机路径、会话标识和推理的加密部分。核对完依据，再到下一页归纳 Context。",
    repro=repro([("在同一会话接着问；只读，不点名文件", READONLY_PROMPT)], label="本次怎样提问？", note="记录来自 2026-10-24 的一次真实交互会话：问候之后接着问。想看完整结构，可在查看器中展开‘完整 JSON’；不要求记住请求编号或工具字段。"),
    steps=["A：看回答", "A：找读取调用", "A：看后续请求", "C：页面标题的依据", "D：内容来源的依据"],
    teaching=teach(
        ("排练来源", "2026-10-24 重跑：ch02-start-v1（8e9a323）新克隆、Agent Lab 从 main 运行、Codex CLI 0.163.0、MiniMax-M3.1-Flash、max、claude-tap 0.1.146；交互会话首句前 /rename，问候后接项目问题。项目问题 8 次请求、7 次工具调用。公开数据见 materials/request/run-20261024/，原始记录在私有仓库 prompt-to-harness/lab-runs。"),
        ("三条依据链", "讲师 2026-10-24 选定：A 读 App.tsx（第 4 次请求提出调用，第 5 次请求带回代码，回答引用 src/App.tsx:1-6）；C 读 index.html（第 3 次提出，第 4 次带回，回答引用 index.html:6）；D 读 PLACEHOLDER_CONTENT.md（第 5 次提出，第 6 次带回，回答引用 PLACEHOLDER_CONTENT.md:9-10）。编号是这次记录的位置，不口播。播放器 5 步：A 走完三步，再直接看 C、D 的返回；需要时点上方标签和按钮看 C、D 的回答与调用。模型还自己拿 dist 和源码比对（第 6–8 次），可一句带过。"),
        ("讲师提示", "主画面只放观察入口，代码、回复与调用交给原生静态查看器。以后重跑先运行 build-viewer.py --list-candidates 列出调用、返回与回答，经讲师确认再写 selection.json；记录指纹变化时停止，不自动沿用。放大后文字增大，顶部同样有 A/C/D 和三个定位按钮，Esc 收起。"),
        ("事实边界", "记录无教学删节：推理只去掉加密部分，可读的推理文字保留。回答里“唯一数据源”“dist 未落后于 src”等扩大判断不因本页的三条依据而视为已核实。"),
    ),
)

scene(
    id="p16a", segment="代码进入请求",
    label="这些合起来叫 Context", title="模型这一次可用的信息，合起来叫 Context",
    lead="问候时，我们已经拆过系统指令、工具和环境。项目问答又让我们沿着代码返回核对了回答依据。把这两次观察放到同一张图上，看看后续请求还带入了什么。",
    html=(
        '<style>body[data-mode="slides"] .segment-bar .segment:first-child{min-width:90px}</style>' +
        anchor(lit=("系统指令", "工具", "环境", "对话历史", "工具返回", "新的 Prompt"), absent=("规则",), note="身份、Skills、权限说明都算系统指令；这个项目还没有 AGENTS.md，规则这一块是空的", reveal=0) +
        '<div class="p-bar" data-reveal="1" style="margin-top:10px"><b>Context</b>：模型这一次可用的信息</div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:10px">'
        '<div class="p-box" data-role="ink" data-reveal="2"><span class="p-tag" data-role="ink">Anthropic 的说法</span><p>Context 是从大模型采样时包含的那一组 token</p><p class="p-sub">系统指令、工具、外部数据、消息历史等</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="3"><span class="p-tag" data-role="ctx">课程地图</span><p>第 2 章：<b>Context</b><br>从当前请求，继续看信息怎样变化</p></div></div>'
    ),
    closing="锚点图按信息的作用分类，不表示请求字段必须按图排列。项目问答的后续请求已包含历史和工具返回；规则是否存在以实际记录为准。刚才没有给出源码路径，模型先查找，才拿到相关代码。Context 是有限的资源，既然这些信息要进入 Context，我们已经知道文件在哪里时，能不能提前告诉它，缩短查找过程？",
    refs=[ref("Effective context engineering for AI agents", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents", "Anthropic，2025-09-29", kind="read")],
    steps=["合看两次观察", "叫它 Context", "对照文字定义", "定位与下一问"],
    teaching=teach(
        ("录制说明", "先指问候时已拆过的组成，再指项目问答后续请求中的历史与工具返回。锚点图是分类示意，不是新运行截图。本次实际请求没有项目 AGENTS.md，规则块画成虚线“这次没有”；历史和工具返回已由本次排练核实。录制当天仍按实际请求更新。"),
        ("定义依据", "沿用 2026-10-20 已核对的 Anthropic 2025-09-29 文章。中文意译及列举仅用于简短对照，具体拆解留在前面的记录，不新增外部事实核验。"),
    ),
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
    teaching=teach(
        ("实测记录", "2026-10-24 重跑；course-starter ch02-start-v1 源码快照 8e9a323；Codex 0.163.0、MiniMax-M3.1-Flash、能力目录开、max、read-only、claude-tap 0.1.146，Agent Lab 从 main 运行。两个独立 codex exec、各自新 HOME，无前置问候，同一个干净工作目录，串行运行后均无改动。不点名 7 次请求、14 次工具调用（常一次并行两三个）、累计输入 70,523 token；点名 4 次请求、3 次工具调用、累计输入 32,879 token。详见 materials/request/run-20261024/summary.json。"),
        ("数字口径", "累计输入 = 每次请求的输入 token 相加；因为每次都重发前面的内容，所以请求越多累加越快。其中大部分命中缓存，claude-tap 面板里会分开显示总输入、缓存、新输入和输出，口播只讲累计输入这一列，不和单次 Context 长度混说。整次耗时两次差别受网络影响，不上屏、不讲。"),
        ("讲师提示", "先打开两边最后回复，核对项目名称、描述及 App.tsx 行号，再回看完整调用过程。两边核心事实有依据；模型额外的唯一数据源等断言不自动视为已核实。点名组先读 App.tsx，之后仍列目录、全项目检索；不点名组还读了 PLACEHOLDER_CONTENT.md、PROJECT_BRIEF.md、index.css、git 记录和 dist。展示这些实际差异后才看代价，不念固定倍数，不推成永远要点名。"),
    ),
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
    closing="图示帮助说明 Codex 的组织作用，具体字段、角色和内容以实际版本记录为准。接下来暂停一下，用刚才的实际例子检验自己。",
    refs=[ref("深入解析 Codex 智能体循环", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23")],
    steps=["谁组织，我们做什么"],
    teaching=teach(
        ("讲师提示", "复用已核对的官方请求示意重画图，只画文章的顺序，不再对到锚点图（C2-88），只指请求整体和 Codex 的组织作用，不逐字段、按角色再拆 Context，不念工具名或数量。图里第一行 instructions 是 1 月文章的写法，现在基础指令在第一条 developer 消息，图旁已注明。底部做法条用 p07 与 p14a 收住：路径是帮助定位的线索，是否相关、是否足够、回答是否有依据仍需核对。"),
    ),
)


scene(
    id="p18", segment="小结",
    label="暂停自检", title="暂停自检：认组成、看循环、做选择",
    lead="先暂停视频，独立回答三道题，再逐步查看参考答案。不要求背工具数量、请求编号、行号或配置字段；能结合刚才的记录解释判断即可。",
    html=(
        '<style>#p18 .p-qlist{gap:14px}#p18 .p-qrow h3{font-size:24px}#p18 .p-qrow p{font-size:19px;line-height:1.4}#p18 .p-pause{margin-bottom:12px}@media(max-width:600px){body[data-mode="scroll"] #p18 .p-qrow h3{font-size:20px}body[data-mode="scroll"] #p18 .p-qrow p{font-size:18px}}</style>'
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答，再往下看解析</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>你只发了一句问候。请求里举出一条不是你写的信息：它从哪来，起什么作用？</h3>'
        '<div data-reveal="1"><p>例如环境信息：标为 user，却是 Codex 加入的，告诉模型当前目录和日期；权限说明、工具定义同理'
        '<br><a href="#p09">回看六类内容与来源</a></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>Codex 替模型读了一个文件。下一次请求和上一次相比，多了什么，少了什么？</h3>'
        '<div data-reveal="2"><p>前面的内容原样重发，一样不少；末尾多了模型的推理、一条工具调用和一条工具返回，返回里就是读到的代码'
        '<br><a href="#p07-loop">回看循环示意</a> · <a href="#p07">回看真实记录</a></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>你已经知道要改的代码在哪个文件。怎样提问？给出路径以后还要检查什么？</h3>'
        '<div data-reveal="3"><p>把路径写进问题，帮模型少找几轮；仍要核对回答的依据、有没有遗漏，路径不代表它只能读这个文件'
        '<br><a href="#p14a">回看点名文件对照</a></p></div></div></div></div>'
    ),
    closing="能举例说明请求里哪些不是你写的、说清每次请求怎样在上一次基础上追加，并知道什么时候主动提供路径，就完成了本节的判断练习。",
    steps=["暂停独立作答", "认组成", "看循环", "做选择"],
    teaching=teach(
        ("自检验收", "第一题能举出一条非本人输入的信息并说明来源与作用即可，不按类别数评分。第二题要说出“前面不变、末尾追加推理、调用与返回”，不要求说出字段名或条目类型。第三题接受先提供已确认相关路径、再检查依据与遗漏的回答；不把点名路径理解为禁止读取其他文件。"),
        ("范围", "题面自带情境，不引用学员没见过的具体名称；不考权限和模型配置。参考答案逐步揭示；不依赖录播中的课堂互动。"),
    ),
)

scene(
    id="p19", segment="小结",
    label="前面的还要带上吗", title="再说一句，前面的还要带上吗？",
    lead="刚才我们让 Codex 读懂了当前项目区。接下来继续做同一个个人主页，把自己的项目经历补进去。新的问题发出去时，之前的问题、回答和读过的代码，还会跟着进入下一次请求吗？我们要不要它们跟着？",
    html=(
        '<div class="p-pair" data-reveal="0" style="grid-template-columns:1fr 1fr;gap:28px">'
        '<div class="p-box" data-role="ink"><span class="p-tag" data-role="ink">刚才</span><p class="p-big">读懂当前项目区</p></div>'
        '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">接下来 · 2.2</span><p class="p-big">补入自己的项目经历</p></div></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="margin-top:30px"><p style="font-size:30px">刚才的问答和读过的代码，还会跟着发出去吗？要不要它们跟着？</p></div>'
    ),
    closing="带着这个问题进入 2.2：继续修改个人主页，先决定这一轮要不要带着前面的对话，再沿连续几次请求观察前面的信息怎样留下、新的信息怎样加入。本页只提出观察问题，多轮累积、清空与压缩留给下一节的实际过程。",
    steps=["接回个人主页任务", "留下下一问"],
    teaching=teach(("转场", "从 p18 的自检接回项目任务，不复述 Context 组成、定义、机制或做法。第一步看任务从读取到修改，第二步只问下一次请求会不会带上前面的内容、要不要带；p07-loop 已讲过一轮内的追加，多轮对话的累积、清空与压缩留给 2.2。末步使用播放器已有的下一节按钮进入 2.2 p20。")),
)




WALK_SOURCE = Path(__file__).resolve().parents[5] / "demos/ch02-request-walkthrough"
def publish_request_walkthrough():
    import hashlib,re
    manifest=json.loads((WALK_SOURCE/"viewer-manifest.json").read_text())
    for name,digest in manifest["files"].items():
        assert hashlib.sha256((WALK_SOURCE/name).read_bytes()).hexdigest()==digest, "连续查看请求的源或生成物已变，请先重建样稿"
    target=lesson.here/"request";target.mkdir(exist_ok=True)
    (target/"lesson-adapter.js").write_bytes((lesson.here/"tools/request-lesson.js").read_bytes())
    for name in ("index.html","page.js","reader.html","viewer.html","trace.json","LICENSE-claude-tap.txt"):
        text=(WALK_SOURCE/name).read_text()
        if name=="index.html":
            text=text.replace("../../courseware/shared/","../../../../shared/").replace("../../courseware/ch02/lessons/01-request/index.html","../index.html")
            text=re.sub(r'<details><summary>本页讲解与前后衔接</summary>[\s\S]*?</details>','',text)
        if name=="viewer.html":
            text=keep_scroll_inside(text)
        if name.endswith(".html"):
            def encode_script(m):return m[1]+re.sub(r'[\u4e00-\u9fff]',lambda x:'\\u%04x'%ord(x[0]),m[2])+m[3]
            text=re.sub(r'(<script\b[^>]*>)([\s\S]*?)(</script>)',encode_script,text)
            text=re.sub(r'[\u4e00-\u9fff]',lambda m:'&#x%x;'%ord(m[0]),text)
        (target/name).write_text(text)

publish_request_walkthrough()
publish_static_trace()
lesson.write()

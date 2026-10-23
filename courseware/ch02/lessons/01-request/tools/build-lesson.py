#!/usr/bin/env python3
"""2.1 只说了一句话，模型收到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
import json
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, anchor, chapter_map, redrawn, ref, repro, shot, teach  # noqa: E402

# 落后时进入第 2 章的追赶 Prompt：与 materials/catchup 的实验同一份，代入真实的参考起点
CATCHUP_PROMPT = (Path(__file__).resolve().parents[3] / "materials/catchup/prompt-ch02.txt").read_text().strip() \
    .replace("{URL}", "https://github.com/prompt-to-harness/course-starter.git").replace("{TAG}", "ch02-start-v1")

lesson = Lesson(__file__, "2.1", "只说了一句话，模型收到了什么", summary="用 claude-tap 打开 Codex 实际发出的请求：只说一句话，模型收到的远不止这句话；这些加在一起就是 context，换权限、换模型配置，它就不同。")
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
    raw = (TRACE_SOURCE / "trace.html").read_text()
    # Unicode escaping keeps bundled data equivalent while the native viewer owns its fonts.
    # Authoring sources remain UTF-8; this is only the generated vendor payload serialization.
    def script_ascii(match):
        return match[1] + re.sub(r"[\u4e00-\u9fff]", lambda m: "\\u%04x" % ord(m[0]), match[2]) + match[3]
    raw = re.sub(r"(<script\b[^>]*>)([\s\S]*?)(</script>)", script_ascii, raw)
    raw = re.sub(r"[\u4e00-\u9fff]", lambda m: "&#x%x;" % ord(m[0]), raw)
    (target / "viewer.html").write_text(raw)
    for name in ("trace.json", "LICENSE-claude-tap.txt"):
        (target / name).write_bytes((TRACE_SOURCE / name).read_bytes())


# New configuration evidence and all displayed figures come from one capture summary.
CONFIG_PAIR_SOURCE = Path(__file__).resolve().parents[3] / "materials/request/config-pairs-20261023"
CONFIG_PAIRS = json.loads((CONFIG_PAIR_SOURCE / "summary.json").read_text())
def config_figure(arm, field):
    return format(CONFIG_PAIRS["arms"][arm][field], ",")

def verify_config_records():
    import hashlib
    manifest = json.loads((CONFIG_PAIR_SOURCE / "viewer-manifest.json").read_text())
    assert manifest["summary_sha256"] == hashlib.sha256((CONFIG_PAIR_SOURCE / "summary.json").read_bytes()).hexdigest(), "配置实测数据已变，请重建独立记录"
    for arm in ("perm-read", "perm-write", "model-on", "model-off"):
        assert manifest[arm]["source_sha256"] == hashlib.sha256((CONFIG_PAIR_SOURCE / f"{arm}.json").read_bytes()).hexdigest()
    for key, name in (("permissions", "permissions-compare"), ("model", "model-compare"), *[(a,a) for a in ("perm-read", "perm-write", "model-on", "model-off")]):
        assert manifest[key]["html_sha256"] == hashlib.sha256((lesson.here / "trace" / f"config-{name}.html").read_bytes()).hexdigest(), "独立记录输出已变，请核对来源"


TAP_CMD = "uvx claude-tap@0.1.146 --tap-client codex --tap-target https://api.minimax.cn/v1"
AGENT_LAB_REV = "691d15c58a3b89abc36bfcf90bc6b7072423ad4c"
AGENT_LAB_CMD = (
    "uvx --from 'https://github.com/prompt-to-harness/prompt-to-harness.github.io/archive/"
    + AGENT_LAB_REV + ".tar.gz#subdirectory=tools/agent-lab' agent-lab codex --tap"
)


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
        '#p01 .opening-question{margin-top:18px;padding:14px 18px;background:#F2EDE1;border:2px solid #9C8B66;border-radius:10px}'
        '#p01 .opening-question p{margin:0;font-size:25px}'
        'body[data-mode="slides"] #p01 h2{font-size:46px}'
        '@media(max-width:600px){#p01 .opening-start p,#p01 .opening-start code,#p01 .opening-question p{font-size:19px}}'
        '</style>'
        '<div class="opening-start" data-reveal="1"><p><code>npm run dev</code> → 打开 Local 地址 → 看首屏和项目区</p></div>'
        '<div class="p-chain opening-goal" data-reveal="2"><span>补入自己的内容</span><i>→</i><span>参考主页改风格</span><i>→</i><span>发布上线</span></div>'
        '<div class="opening-question" data-reveal="3"><p>除了我们写的 Prompt，模型每一步还拿到了什么？</p></div>'
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
    lead="要核对模型实际收到什么，我们用 claude-tap 这个本地代理记录请求。Codex 组装的请求先到代理，再到模型服务；返回也经过代理回到 Codex。本地查看器读取这些记录。讲师使用下面的 Agent Lab 命令准备课程独立 MiniMax 环境，--tap 接入代理。鉴权信息也会经过代理，它只记录经过这里的内容；学员运行选做。",
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
        '<p class="tap-proxy-source" data-reveal="2">Agent Lab 准备课程环境 · --tap 接入 claude-tap 0.1.146</p>'
        '</div>'
    ),
    refs=[ref("claude-tap 原理说明", "https://github.com/liaohch3/claude-tap/blob/v0.1.146/README.md#architecture")],
    steps=["请求", "返回", "查看记录"],
    repro=repro([
        ("先装好 uv、Codex CLI，并在当前终端设置 MINIMAX_API_KEY；不要把 Key 粘进对话或录屏", None),
        ("在个人主页项目目录启动课程独立环境，同时记录请求", AGENT_LAB_CMD),
        ("先找到启动输出中的查看器地址；在 Codex 发完问候、回答结束后，再打开查看器", None),
        ("若已有配置好的 MiniMax 环境，也可直接启动代理；讲师演示使用上面的课程环境命令", TAP_CMD),
    ], note="Agent Lab 固定 MiniMax 课程配置并调用 claude-tap 0.1.146，课程会话单独保留；它减少个人配置混入，不提供额外的文件安全沙箱。请求记录可能包含项目内容，不公开分享未经检查的记录。", label="使用课程独立环境"),
    teaching=teach(
        ("图示来源", "据 liaohch3/claude-tap v0.1.146 README 整理，只展示本章使用的反向代理路径；来源与图元已在章素材登记表留存。演示只显示一条可点击原理说明链接。"),
        ("课程启动器", "讲师与学员可用“使用课程独立环境”里的固定 SHA 命令。当前从独立分发提交安装；本组正式合入并确认 main 包含工具修复后，再更新为 main 的源码包地址。不要提前使用 main；主线数字仍取原实测，不因更换启动入口自动视为重录。"),
        ("切到实操", "主画面、复制内容、展开入口与口播统一使用 AGENT_LAB_CMD 的固定分发提交；直接启动代理只作为展开入口中的备选。沿用工具验证记录，不把原直接启动命令的旧实测日期套在新入口上。录前准备 uv、Codex CLI 与终端密钥，命令在个人主页项目根目录执行；停在输入处并指出实际查看器地址，下一页发问候后才查看记录。"),
        ("讲师提示", "API 密钥会经过本地代理；claude-tap 导出与存储时只保留鉴权头前缀。画面上不要出现 config.toml 或完整密钥。学员自己运行算选做，不计入验收，不另做排障文档。"),
    ),
)

scene(
    id="p08", segment="打开请求", layout="prompt-scene", prompt=FIRST_PROMPT,
    label="一句话与实际请求", title="写的是一句话，模型还收到了什么？",
    lead="仍在刚才的个人主页项目里发送问候。回答结束后打开记录，找到回答问候的第一份主请求，再定位用户原句，观察除此之外发出了什么。会话里也可能记录到自动起标题的辅助请求；通过任务内容辨认，不把记录编号当作人工输入次数。",
    closing="本页先看工具执行前的初始请求。问候也可能触发读文件；后续工具调用和返回另行观察，不把整段会话的累计输入量当作这一次请求的输入量。",
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
        '<span class="p-tag" data-role="agent">回答问候的第一份主请求</span>'
        '<p class="p-big">远不止这一句</p>'
        '<p class="p-sub">这一次输入：8,651 token</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2">'
        '<p class="p-big">先找到原句</p><p>再看指令、工具、环境</p></div>'
        '</div>'
        '<p class="source-note">依据：2026-10-23，ch02-start-v1 起点、专用课程 HOME，Codex CLI 0.163.0 + MiniMax-M3.1-Flash，max，claude-tap 0.1.146。8,651 是第一份主请求的 input_tokens，不含单独起标题的请求；只代表这次运行。</p>'
    ),
    steps=["发出问候", "找到第一份主请求", "原句之外还有什么"],
    teaching=teach(
        ("录前准备", "按本节 tools/README-demo.md 准备仓库外的 ch02-start-v1 项目与专用 AGENT_LAB_HOME；本次实测快照没有项目或上级 AGENTS.md，也没有项目 Skills。p06 启动后保持同一项目目录，不在课上安装依赖或配置 Key。"),
        ("记录定位", "采用 2026-10-23 专用 HOME 的问候实测，代理会话 cd9397f2-7b5e-4bfb-b01e-c0002f804590，数据库 record_index 2；当次完整 Viewer 显示为 Turn 2。用末句正好是 FIRST_PROMPT 且没有工具返回来定位，不固定记编号。标题请求末句以 Generate a concise, single-line task title 开头。后台任务可能在不同位置出现，编号与分组机制不进主讲。"),
        ("实测边界", "第一份主请求输入 8651 token，6 条 input 消息，5 个工具定义；响应提出了一次 exec 调用，内调 exec_command 列目录并读 package.json，后续主请求才返回介绍。不能讲成整个问候只有一次请求、没有读文件或调用次数固定。录制当次数字不同就按当次记录更新，不重跑凑结果。"),
        ("展示", "先等回答结束才打开查看器，辨认主任务、定位原句，再向前观察大块内容；若有标题任务，用一句话交代。查看器含本机路径与用户名，录屏前遮盖或缩写；不展示 Key 或鉴权配置。"),
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
    label="连续查看同一请求", title="沿着同一份请求，连续看四处",
    lead="刚才找到了我们写的 Prompt。现在沿同一份初始请求，看系统指令、工具定义、Skills 列表，以及环境与权限。阅读视图将长段落折叠，完整原文保留所有消息正文和工具定义。Skills 里的展开对照来自另一个实际文件，不是这次请求中已经读入的内容。",
    html=(
        '<style>#p08a .scene-content{display:block}#p08a .request-walk-frame{display:block;width:100%;height:420px;border:0;background:#fffdf7;border-radius:8px}body[data-mode="scroll"] #p08a .request-walk-frame{height:620px}@media(max-width:600px){body[data-mode="scroll"] #p08a .request-walk-frame{height:1050px}}body[data-mode="slides"] #p08a h2{font-size:40px}body[data-mode="slides"] #p08a .scene-content{top:160px;height:510px}body[data-mode="slides"] #p08a .request-walk-frame{height:510px}</style>'
        '<iframe class="request-walk-frame" id="request-walk-frame" title="连续查看真实请求：阅读视图与完整原文" src="request/index.html?embed=1"></iframe>'
    ),
    closing="同一份请求里，有我们输入的，也有 Codex 组织的内容。接下来归纳它们的作用与来源；完整工具调用、执行返回与回答的关系，在项目问题中沿记录核对。",
    steps=["系统指令", "工具定义", "Skills 列表与文件对照", "环境信息", "权限说明"],
    teaching=teach(
        ("同源与展示", "使用前半组已有真实初始请求；六条消息正文、五个顶层工具定义完整保留，仅路径占位，排除鉴权请求头、客户端关联元数据和推理内容。阅读视图只折叠不删除，完整原文为原版静态查看器，可自由展开；初始响应含真实读文件调用，不说问候没有调用工具。"),
        ("Skills 对照", "Skills 入口展开对应 SKILL.md 的原文片段，核对列表只有名字、简述和位置；片段取自同一课程 HOME 的真实文件并核对指纹，明确它不在初始请求内，也不是本次问候实际读取。"),
        ("来源与发布", "源在 demos/ch02-request-walkthrough，本节构建时验证数据和生成物指纹后复制到 request/；不需要服务或模型调用，不从正式页面跨目录依赖 demos。完整调用链在后面的 p07，使用另一组项目问题记录，不能说成问候后续。"),
    ),
)


scene(
    id="p09", segment="逐块拆开",
    label="请求的组成与来源", title="这些内容是谁组织进去的？",
    lead="先按作用辨认初始请求的六类内容：系统与协作指令、工具定义、Skills 列表、环境信息、权限说明、用户原句。分类不等于消息条数，一条消息可以同时包含多类内容。Codex 负责组织这份请求。",
    closing="认出了组成与组织者，接下来回到个人主页：项目区现在显示什么、数据在哪个文件？沿一次真实项目问答，区分工具定义、实际调用和执行后带回的结果。",
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
        'body[data-mode="slides"] #p09 .p09-stage.step-hidden,body[data-mode="slides"] #p09 .scene-content>.p-refs.step-hidden{display:none}'
        'body[data-mode="slides"] #p09:has(.p09-stage[data-reveal="1"]:not(.step-hidden)) .p09-stage[data-reveal="0"]{display:none}'
        'body[data-mode="slides"] #p09:has(.p09-stage[data-reveal="2"]:not(.step-hidden)) .p09-stage[data-reveal="1"]{display:none}'
        'body[data-mode="scroll"] #p09 .p09-stage{margin-bottom:24px}body[data-mode="scroll"] #p09 .p09-harness-refs{display:none}'
        '@media(max-width:600px){body[data-mode="scroll"] #p09 .request-map-row{grid-template-columns:1fr;gap:3px;padding:9px 12px}'
        'body[data-mode="scroll"] #p09 .request-map dt,body[data-mode="scroll"] #p09 .request-map dd{font-size:19px}'
        'body[data-mode="scroll"] #p09 .source-pair{grid-template-columns:55px 90px minmax(0,1fr);gap:10px;padding:12px;font-size:16px}'
        'body[data-mode="scroll"] #p09 .map-caption,body[data-mode="scroll"] #p09 .p09-note{font-size:20px}}</style>'
        '<div class="p09-stage" data-reveal="0"><p class="map-caption">Codex 组织这份请求 · 按作用认出六类内容</p>'
        '<dl class="request-map">'
        '<div class="request-map-row" data-role="agent"><dt>系统与协作指令</dt><dd>它是谁、怎样工作</dd></div>'
        '<div class="request-map-row" data-role="tool"><dt>工具定义</dt><dd>有哪些工具、怎样调用</dd></div>'
        '<div class="request-map-row" data-role="ctx"><dt>Skills 列表</dt><dd>有哪些技能、全文在哪里</dd></div>'
        '<div class="request-map-row" data-role="ink"><dt>环境信息</dt><dd>当前目录、日期等现场信息</dd></div>'
        '<div class="request-map-row" data-role="gate"><dt>权限说明</dt><dd>这次允许怎样操作</dd></div>'
        '<div class="request-map-row" data-role="us"><dt>用户原句</dt><dd>人这次提出的要求</dd></div></dl></div>'
        '<div class="p09-stage" data-reveal="1"><p class="map-caption">Harness：两个使用层面</p>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="agent"><span class="p-tag">现在：拆开 Codex</span><h3>工具的运行框架</h3><p>组织请求、调用模型<br>执行工具、带回结果</p></div>'
        '<div class="p-box" data-role="ctx"><span class="p-tag">后面：围绕项目建设</span><h3>项目的工作环境</h3><p>项目知识、工具与约束<br>检查、反馈与改进</p></div></div>'
        '<p class="p09-note">两个使用层面，相互配合</p>'
        '<div class="p-refs p09-harness-refs"><b>原文</b>'
        '<a href="https://openai.com/index/unrolling-the-codex-agent-loop/" target="_blank" rel="noopener">Codex agent loop</a>'
        '<a href="https://openai.com/index/harness-engineering/" target="_blank" rel="noopener">Harness engineering</a></div></div>'
        '<div class="p09-stage" data-reveal="2"><p class="map-caption">同样标为 <code>user</code>，文字来源可以不同</p>'
        '<div class="source-pair"><b>角色</b><b>来源</b><b>本次消息的内容</b>'
        '<code>user</code><span>Codex 加入</span><span>当前目录、Shell、日期、时区……</span>'
        '<code>user</code><span>人输入</span><span>“你好，用一句话介绍你能帮我做什么。”</span></div>'
        '<p class="p09-note">交互继续时，还会组织新的消息和工具结果<br>新增内容不都属于 <code>user</code></p></div>'
        '<p class="source-note">六类内容与来源对照来自 2026-10-23 初始主请求；没有项目 AGENTS.md 或项目 Skills。Harness 两个层面为课程据官方文章归纳，不是排他的标准定义。消息内容为摘要，未展示本机路径。</p>'
    ),
    steps=["六类内容与作用", "Harness 的两个层面", "user 的角色与来源"],
    refs=[ref("Codex agent loop", "https://openai.com/index/unrolling-the-codex-agent-loop/"),
          ref("Harness engineering", "https://openai.com/index/harness-engineering/")],
    teaching=teach(
        ("与记录对应", "沿用 p08 同一份初始主请求。developer input 0 是身份；input 1 同时包含 Skills、权限、Default 模式；input 2/3 是团队说明和多代理限制。user input 4 是环境，input 5 才是问候。工具定义另在 tools 中。归成六类不等于六条消息各自对应一类。"),
        ("术语与来源", "Harness 两个使用层面据两篇官方文章归纳，先讲运行框架，再预告项目环境，不讲成两个排他定义。画面为课程整理，不是官方原图。底部链接可现场打开，不依赖文章截图。"),
        ("转场", "第三步可切查看器核对环境和问候的 user 角色；随后进入项目问题，p07 查看工具结果进入下一次请求。p08a 与 p08 使用同一份初始主请求；p07 使用另一组已核对的项目问答排练，不说成此前组问候的后续结果。"),
    ),
)


scene(
    id="p07", segment="代码进入请求",
    label="代码怎样进入请求", title="读到的代码，怎样进入下一次请求？",
    lead="在问候后的同一会话发出项目区只读问题。模型读完文件以后，代码怎样成为下一次请求可用的信息？本页从 2026-10-23 的真实排练里挑一条依据链来看：先看回答，再定位读取调用和后续请求中的工具返回。这轮还有其他调用。左侧入口与演示步骤对应，记录可以放大查看。",
    html=(
        '<div class="trace-lesson-stage">'
        '<nav class="trace-lesson-guide" aria-label="本次记录的观察顺序"><p class="trace-chain-note">挑一条真实依据链来看<br>这轮还有其他调用</p>'
        '<button type="button" data-trace-point="answer" aria-pressed="true"><b>① 看回答</b><span>它说了什么，引用了哪里？</span></button>'
        '<button type="button" data-trace-point="call" aria-pressed="false"><b>② 找读取调用</b><span>模型让 Codex 去读了什么？</span></button>'
        '<button type="button" data-trace-point="result" aria-pressed="false"><b>③ 看后续请求</b><span>返回的代码怎样带了回来？</span></button>'
        '</nav><div class="trace-lesson-viewer">'
        '<div class="trace-lesson-bar"><span id="trace-lesson-status">本次真实记录 · 教学脱敏</span>'
        '<div class="trace-lesson-actions"><a data-trace-open href="trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=answer" target="_blank" rel="noopener">单独打开 ↗</a><button type="button" id="trace-lesson-expand" aria-haspopup="dialog">放大记录</button></div></div>'
        '<iframe id="trace-lesson-frame" title="claude-tap 静态记录：回答、调用与工具返回" src="trace/viewer.html?embed=1&amp;hideHeader=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light"></iframe>'
        '</div></div>'
    ),
    closing="这里核对的是项目名称、描述与数据位置，模型没有用浏览器验证页面。静态查看器包含本次记录的教学脱敏版；删节处有标记，调用顺序、核心代码返回与最终回答保留。核对完这一条依据，再到下一页归纳 Context。",
    repro=repro([("在同一会话接着问；只读，不点名文件", READONLY_PROMPT)], label="本次怎样提问？", note="记录来自 2026-10-23 一次真实交互排练。想看完整结构，可在查看器中展开‘完整 JSON’；不要求记住请求编号或工具字段。"),
    steps=["看实际回答", "找读取调用", "看返回进入请求"],
    teaching=teach(
        ("排练来源", "ch02-start-v1（8e9a323）、固定来源 Agent Lab 691d15c、Codex CLI 0.163.0、MiniMax-M3.1-Flash、max、read-only、claude-tap 0.1.146；与问候同一交互会话。静态记录来自 demos/ch02-static-trace，构建时复制到本节 trace/。原始数据库与终端记录不提交。"),
        ("讲师提示", "主画面只放观察入口，代码、回复与调用交给原生静态查看器。以后重跑先列出调用、返回位置、回答候选，经讲师确认再写 selection.json；记录指纹变化时停止，不自动选第一条。方向键推进时自动定位，左侧按钮也可定位。放大后文字增大，Esc 收起；直接打开本地 index.html 可用。采用已有真实排练回放，不宣称是当场产生的新输出。以后现场演示时完整替换同一组证据。"),
        ("事实边界", "鉴权、环境、系统说明全文和非核心工具输出已作教学删节，记录中有标记。核心 34 行代码返回与快照一致；本页挑选一条真实依据链，不是只有这一条调用；仅核对名称、描述和数据位置，不据此认可完整回复中的‘唯一数据源’等扩大判断。模型还读了其他文件，不能把教学删节当成原请求没有这些部分。"),
    ),
)

scene(
    id="p16a", segment="代码进入请求",
    label="这些合起来叫 Context", title="模型这一次可用的信息，合起来叫 Context",
    lead="问候时，我们已经拆过系统指令、工具和环境。项目问答又让我们沿着代码返回核对了回答依据。把这两次观察放到同一张图上，看看后续请求还带入了什么。",
    html=(
        '<style>body[data-mode="slides"] .segment-bar .segment:first-child{min-width:90px}</style>' +
        anchor(lit=("系统指令", "工具", "环境", "对话历史", "工具返回", "这一句"), note="对照问候与项目问答的后续请求；规则按实际记录标注", reveal=0) +
        '<div class="p-bar" data-reveal="1" style="margin-top:10px"><b>Context</b>：模型这一次可用的信息</div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:10px">'
        '<div class="p-box" data-role="ink" data-reveal="2"><span class="p-tag" data-role="ink">Anthropic 的说法</span><p>Context 是从大模型采样时包含的那一组 token</p><p class="p-sub">系统指令、工具、外部数据、消息历史等</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="3"><span class="p-tag" data-role="ctx">课程地图</span><p>第 2 章：<b>Context</b><br>从当前请求，继续看信息怎样变化</p></div></div>'
    ),
    closing="锚点图按信息的作用分类，不表示请求字段必须按图排列。项目问答的后续请求已包含历史和工具返回；规则是否存在以实际记录为准。刚才没有给出源码路径，模型先查找，才拿到相关代码。既然这些信息要进入 Context，我们已经知道文件在哪里时，能不能提前告诉它，缩短查找过程？",
    refs=[ref("Effective context engineering for AI agents", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents", "Anthropic，2025-09-29", kind="read")],
    steps=["合看两次观察", "叫它 Context", "对照文字定义", "定位与下一问"],
    teaching=teach(
        ("录制说明", "先指问候时已拆过的组成，再指项目问答后续请求中的历史与工具返回。锚点图是分类示意，不是新运行截图。本次实际请求没有项目 AGENTS.md 规则块，保持未点亮；历史和工具返回已由本次排练核实。录制当天仍按实际请求更新。"),
        ("定义依据", "沿用 2026-10-20 已核对的 Anthropic 2025-09-29 文章。中文意译及列举仅用于简短对照，具体拆解留在前面的记录，不新增外部事实核验。"),
    ),
    expressive="复用全章锚点图，对照问候与项目问答的后续请求",
)

# ---------- 同条件点名文件对照 ----------
scene(
    id="p14a", segment="代码进入请求",
    label="知道文件在哪", title="已经知道文件在哪，要不要告诉它？",
    lead="刚才，模型先查找文件，才把相关代码带进 Context。如果我们已经知道路径，可以主动提供。保持源码起点和配置相同，另开两个独立新会话，只给点名组增加 src/App.tsx 路径；先核对两边的回答和依据，再比较查找过程与代价。",
    closing="这次两边核心事实均有源码依据，点名组请求更少、累计输入较少，但仍读取其他文件。已知且相关的信息可以主动提供。刚才改变的是我们给的信息，接下来保持问句不变，看看权限配置还会怎样改变 Context。",
    html=(
        '<style>body[data-mode="slides"] #p14a .p-matrix span{padding:7px 10px}body[data-mode="slides"] #p14a .p-refs{margin-top:12px!important}</style>'
        '<p class="p-bar" data-reveal="0">同一起点 · 相同配置 · 两个独立新会话</p>'
        '<p data-reveal="0" style="margin:10px 0;font-size:23px">先核对回答与依据，再比较查找过程和代价</p>'
        '<div class="p-matrix" data-reveal="1" style="grid-template-columns:1.2fr 1fr 1fr">'
        '<div class="is-head"><span>本次实测</span><span>不点名</span><span>给出相关文件名</span></div>'
        '<div><span>模型请求轮次</span><span>7</span><span>4</span></div>'
        '<div><span>累计输入 token</span><span>66,315</span><span>34,894</span></div>'
        '<div><span>整次运行耗时</span><span>34.4 秒</span><span>17.9 秒</span></div></div>'
        '<p class="p-refs" data-reveal="2" style="margin-top:20px">'
        '<a href="trace/compare-plain.html" target="_blank" rel="noopener">单独打开：不点名记录</a> '
        '<a href="trace/compare-named.html" target="_blank" rel="noopener">单独打开：点名记录</a></p>'
        '<p class="source-note" data-reveal="1">2026-10-23，各一次；累计输入含缓存，不是单次 Context 长度；耗时为本次观察，不推固定比例</p>'
    ),
    steps=["已知路径能帮什么", "本次量化对照", "回看真实记录"],
    teaching=teach(
        ("实测记录", "2026-10-23；course-starter ch02-start-v1 源码快照 8e9a323；Codex 0.163.0、MiniMax-M3.1-Flash、能力目录开、max、read-only、claude-tap 0.1.146。两个独立 codex exec，无前置问候，同一个干净工作目录，串行运行后均无改动。不点名 7 次请求、6 次外层 exec 调用、输入合计 66,315 token；点名 4 次请求、3 次外层 exec 调用、输入合计 34,894 token。输入合计是多请求累计，包含缓存输入，不是单次 Context 长度或费用。详见 materials/request/file-choice-20261023/summary.json。"),
        ("讲师提示", "先打开两边最后回复，核对项目名称、描述及 App.tsx 行号，再回看完整调用过程。两边核心事实有依据；模型额外的唯一数据源等断言不自动视为已核实。点名组仍读了其他文件，不点名组还查了过程文档。展示这些实际差异后才看代价，不念固定倍数，不推成永远要点名。两份完整记录没有默认挑选一条调用。"),
    ),
)

scene(
    id="p16", segment="换个配置",
    label="换个权限", title="同一句话，换个权限，说明文字也变了",
    lead="上一页改变的是我们主动提供的信息。现在保持问句不变，换只读／可写权限，观察 Codex 加入请求的说明。沙箱决定允许的操作范围，审批策略决定何时申请批准；这些配置会影响权限说明，获准执行后产生的工具返回也会进入后续 Context。本页使用 2026-10-23 重跑记录，只比较沙箱差异，审批均为 never；独立记录直接定位权限段与可写目录，统计来自同一份原始请求。",
    closing="检查代码时可以只读；需要修改可信项目时，建议工作区可写并按需审批（Auto），超出允许范围再核对申请。课程不推荐关闭沙箱和审批的 YOLO。权限说明进入 Context，实际执行边界由本地机制落实。允许做什么已经选好；接下来看看，接入 MiniMax 后，还需要给 Codex 补上哪些模型适配信息。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">同一句问候 · 只读</span><p>权限说明：允许读取文件</p><p class="p-sub"><code>read-only</code></p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">同一句问候 · 工作区可写</span><p>权限说明：允许修改工作区文件</p><p class="p-sub"><code>workspace-write</code> · 列出可写目录</p></div></div>'
        '<p class="p-refs" data-reveal="1" style="margin:16px 0"><a href="trace/config-permissions-compare.html#permissions" target="_blank" rel="noopener">单独打开：权限说明与可写目录差异</a></p>'
        '<p class="p-sub" data-reveal="1">本次权限说明字符：' + config_figure("perm-read", "permission_chars") + ' → ' + config_figure("perm-write", "permission_chars") + ' · 完整统计在独立记录中</p>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="2"><p><b>改项目：Auto</b> · 工作区可写，越界按需申请批准</p><p>只做检查可用只读；课程不推荐 YOLO</p></div>'
        '<p class="source-note">2026-10-23 两个独立会话，审批均为 never；Auto 建议据官方说明，不属于审批效率实测</p>'
    ),
    refs=[ref("Agent approvals & security", "https://learn.chatgpt.com/docs/agent-approvals-security", "OpenAI，2026-10-23 核对", kind="read")],
    steps=["从信息到权限", "请求说明随配置变", "按任务选择权限"],
    teaching=teach(
        ("权限核实", "2026-10-23 核对本机 Codex 0.163.0 --help 及 OpenAI Agent approvals & security：Auto 预设对应 workspace-write + on-request；YOLO 绕过沙箱与审批。Auto-review 只改变审批审核者，不扩大权限，与 Auto 分开。已有 exec 对照审批为 never，不能说成 Auto 审批流程实测；本页不增加未录制的审批演示。"),
        ("新实测来源", "2026-10-23 config-pairs-20261023：同一起点、同一句问候、固定 CLI 0.163.0 / MiniMax-M3.1-Flash / tap 0.1.146，每边一个新 HOME、新会话，只改变沙箱。权限字符和 API usage 从 summary.json 读取，统计在脱敏前生成；公开文本的路径替换不影响原统计。没有审批弹窗实测。"),
        ("核对记录", "模板位于 codex-rs/prompts/templates/permissions/（sandbox_mode/*.md、approval_policy/*.md），2026-01 起由固定段落改为按配置拼装（提交 87f7226cca）。旧数据来自 codex exec，审批策略为 never；交互界面中的审批文字会不同。"),

    ),
)

scene(
    id="p15b", segment="换个配置",
    label="配好模型接入", title="接上模型后，还需要配好什么？",
    lead="权限决定允许做什么。我们接入的是 MiniMax，Codex 还需要对应的模型适配信息；连通 API 不代表这些信息已经齐全。MiniMax 官方提供模型能力目录，课程脚本默认写入对应配置。在 2026-10-23 固定版本对照中，缺少目录时 Codex 会采用后备信息，基础指令、工具和实际发送的推理参数随之不同。",
    closing="推荐使用课程脚本或 MiniMax 官方接入方式，让 Codex 按明确的模型配置工作，避免无意中使用后备配置。不要求记住目录字段，也不把这次请求差异说成任务质量一定更好。回到本节的问题：除了我们的 Prompt，Codex 还按哪些规则组织模型收到的信息？",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="ok" data-reveal="0"><span class="p-tag" data-role="ok">配置 MiniMax 模型能力目录</span>'
        '<p>基础指令 · 工具模式 · 推理参数</p><p class="p-sub">课程脚本默认写入对应适配信息</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">本次对照：缺少目录</span>'
        '<p>Codex 找不到模型元数据，采用后备内容</p><p class="p-sub">基础说明更长；工具和推理参数也不同</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:24px">推荐：课程脚本或官方配置 · 无需手写和记忆目录字段</div>'
        '<p class="p-refs" data-reveal="1" style="margin-top:14px"><a href="trace/config-model-compare.html#base" target="_blank" rel="noopener">看基础指令差异</a> <a href="trace/config-model-compare.html#tools" target="_blank" rel="noopener">看工具与数量</a> <a href="trace/config-model-compare.html#reasoning" target="_blank" rel="noopener">看实际推理参数</a></p>'
        '<p class="p-sub" data-reveal="1">本次顶层工具：' + config_figure("model-on", "tools_top_level") + ' → ' + config_figure("model-off", "tools_top_level") + ' 项 · API 输入：' + config_figure("model-on", "input_tokens") + ' → ' + config_figure("model-off", "input_tokens") + ' token</p>'
        '<p class="p-refs" data-reveal="2"><a href="#p06-tap">回看课程脚本启动入口</a></p>'
        '<p class="source-note">2026-10-23，每边一次；只移除目录引用，其余配置相同；数字来自同一记录，不用于质量排名</p>'
    ),
    refs=[ref("MiniMax Codex 接入说明", "https://platform.minimax.cn/docs/m-plan/codex", "MiniMax，2026-10-23 核对", kind="read")],
    steps=["接入还需要适配", "缺少时使用后备内容", "推荐的配置入口"],
    teaching=teach(
        ("新实测来源", "config-pairs-20261023：独立新会话，只删除 model_catalog_json 引用，保留同样的上下文窗口与显式 max，其余配置相同。新结果：两边都发送 effort=max，后备组多 summary=auto。不能沿用旧稿未发送档位的结论。第一条基础指令、工具项数、API 输入都从 summary.json 生成；不把基础指令长度当全部系统说明长度。"),
        ("讲师提示", "先打开对应差异锚点，不现场重跑或临时搜索；独立对照页保留原请求的摘录与原生查看器入口。原始完整系统指令和工具定义不大段公开，删节位置已标注。旧小样本质量实验不作为当前版本质量证明。课程脚本入口回 p06-tap，官方链接提供配置方式。"),

    ),
)

# ---------- 小结 ----------
scene(
    id="p16b", segment="小结", layout="evidence-scene",
    label="谁组织请求", title="请求里的信息，由 Codex 组织",
    lead="刚才看到，权限和模型适配都会改变请求。把这些观察放回整体：我们提出任务，Codex 根据模型配置、权限、项目环境和已有过程，组织发给模型的信息。OpenAI 的请求示意图为这件事提供机制上的对照，这里不再逐字段拆解。",
    html=(
        redrawn("context-engineering", "openai-codex-request", "excalidraw", "据 OpenAI《深入解析 Codex 智能体循环》（2026-01-23）重画；只对照本次请求的组织者", max_height=330) +
        '<div class="p-bar" style="margin-top:12px">我们提出任务，Codex 按配置与现场信息组织请求</div>'
    ),
    closing="图示帮助说明 Codex 的组织作用，具体字段、角色和内容以实际版本记录为准。认出了组织者，接下来回到我们能做的事：怎样提供信息，并检查模型有没有拿到回答需要的依据。",
    refs=[ref("深入解析 Codex 智能体循环", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23")],
    steps=["收住机制：谁组织请求"],
    teaching=teach(
        ("讲师提示", "复用已核对的官方请求示意重画图，只指请求整体和 Codex 的组织作用，不逐字段、按角色再拆 Context，不念工具名或数量。图是文章示意，消息角色与本次记录可能不同。图底关于下一轮的提示不在本页展开，后续请求的变化留给 2.2。"),
    ),
)

scene(
    id="p16c", segment="小结", layout="evidence-scene",
    label="怎样提供与核对信息", title="提供相关信息，再核对回答依据",
    lead="知道 Codex 会组织请求以后，我们的做法也要跟上：提供已知且相关的信息，查看模型实际读到了什么，再核对回答有没有依据。Anthropic 的对照图只用来提示：除了写好一句 Prompt，还要关注任务信息怎样进入当前 Context。",
    html=(
        redrawn("context-engineering", "anthropic-prompt-vs-context", "excalidraw", "据 Anthropic《Effective context engineering for AI agents》（2025-09-29）第一张图重画", max_height=300) +
        '<div class="p-bar" style="margin-top:12px">提供已知的相关信息 → 查看实际读取 → 核对回答依据</div>'
    ),
    closing="这些做法已在项目区问答中出现：提供相关路径，沿读取调用与返回核对“学习笔记”的依据。接下来暂时不看示意图，用刚才的实际例子检验自己能否认组成、找依据、做选择。",
    refs=[ref("Effective context engineering for AI agents", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents", "Anthropic，2025-09-29")],
    steps=["收住做法：提供与核对"],
    teaching=teach(
        ("讲师提示", "复用已核对的对照图，只指从写一句话到关注相关任务信息的变化，不再定义 Context，也不逐个介绍文档、记忆、工具等类别。用 p07 与 p14a 的实践收住：路径是帮助定位的线索，是否相关、是否足够、回答是否有依据仍需核对。图中示例数量不作为知识点。"),
    ),
)

scene(
    id="p18", segment="小结",
    label="暂停自检", title="暂停自检：认组成、找依据、做选择",
    lead="先暂停视频，独立回答三道题，再逐步查看参考答案。不要求背工具数量、请求编号、行号或配置字段；能结合刚才的记录解释判断即可。",
    html=(
        '<style>#p18 .p-qlist{gap:14px}#p18 .p-qrow h3{font-size:24px}#p18 .p-qrow p{font-size:19px;line-height:1.4}#p18 .p-pause{margin-bottom:12px}@media(max-width:600px){body[data-mode="scroll"] #p18 .p-qrow h3{font-size:20px}body[data-mode="scroll"] #p18 .p-qrow p{font-size:18px}}</style>'
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答，再往下看解析</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>认组成：Codex 还放进了什么信息，它们有什么用？</h3>'
        '<div data-reveal="1"><p>例如工具定义、权限说明、环境信息；结合例子说明它们的作用'
        '<br><a href="#p09">回看请求组成</a> · <a href="#p16b">谁组织这些信息</a></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>找依据：回答中的“学习笔记”，去记录哪里核对？</h3>'
        '<div data-reveal="2"><p>找读取调用 → 看工具返回的代码及其进入后续请求 → 对照回答'
        '<br><a href="#p07">回看项目区问答的真实依据链</a></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>做选择：已知相关文件，怎样帮助定位并检查结果？</h3>'
        '<div data-reveal="3"><p>明确提供路径；先核对回答、依据与遗漏，再比较读取范围和代价'
        '<br><a href="#p14a">回看点名文件对照</a> · 给出路径后仍需检查结果</p></div></div></div></div>'
    ),
    closing="能举例说明请求组成、沿真实记录核对依据，并说明什么时候主动提供路径，就完成了本节的判断练习。权限与模型配置是解释请求差异的线索，不要求凭工具数量猜配置。",
    steps=["暂停独立作答", "认组成", "找依据", "做选择"],
    teaching=teach(
        ("自检验收", "第一题能举出非用户原句的信息并说明作用，不按背出类别数评分；可补一句由 Codex 按配置和现场组织。第二题要指向实际调用与代码返回、后续请求中的返回及回答，而不只是重复模型给的路径；不背固定 request 编号、call_id 或行号。第三题接受先提供已确认相关路径、必要任务说明，再检查依据与缺失项的回答；不把点名路径理解为禁止读取其他文件。"),
        ("范围", "移除旧完成标准与 PROJECT_BRIEF.md 题目、按工具数量猜配置的题。权限和模型适配仅作解释请求可能不同的例子，不另加第四题，不要求重跑实验。参考答案逐步揭示；不依赖录播中的课堂互动。"),
    ),
)

scene(
    id="p19", segment="小结",
    label="再说一句会带上什么", title="再说一句，模型会带上什么？",
    lead="刚才我们让 Codex 读懂了当前项目区。接下来继续做同一个个人主页，把自己的项目经历补进去。新的问题发出去时，之前的问题、回答和读过的代码，还会跟着进入下一次请求吗？",
    html=(
        '<div class="p-pair" data-reveal="0" style="grid-template-columns:1fr 1fr;gap:28px">'
        '<div class="p-box" data-role="ink"><span class="p-tag" data-role="ink">刚才</span><p class="p-big">读懂当前项目区</p></div>'
        '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">接下来 · 2.2</span><p class="p-big">补入自己的项目经历</p></div></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="margin-top:30px"><p style="font-size:30px">下一次请求里，哪些是之前的，哪些是新加入的？</p></div>'
    ),
    closing="带着这个问题进入 2.2：继续修改个人主页，沿连续几次请求观察前面的信息怎样留下、新的信息怎样加入。本页只提出观察问题，多轮累积、清空与压缩留给下一节的实际过程。",
    steps=["接回个人主页任务", "留下下一问"],
    teaching=teach(("转场", "从 p18 的信息选择判断接回项目任务，不复述 Context 组成、定义、机制或做法。第一步看任务从读取到修改，第二步只问下一次请求会带什么；不在这里提前讲完历史重发、清空或压缩。末步使用播放器已有的下一节按钮进入 2.2 p20。")),
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
        if name.endswith(".html"):
            def encode_script(m):return m[1]+re.sub(r'[\u4e00-\u9fff]',lambda x:'\\u%04x'%ord(x[0]),m[2])+m[3]
            text=re.sub(r'(<script\b[^>]*>)([\s\S]*?)(</script>)',encode_script,text)
            text=re.sub(r'[\u4e00-\u9fff]',lambda m:'&#x%x;'%ord(m[0]),text)
        (target/name).write_text(text)

publish_request_walkthrough()
publish_static_trace()
verify_config_records()
lesson.write()

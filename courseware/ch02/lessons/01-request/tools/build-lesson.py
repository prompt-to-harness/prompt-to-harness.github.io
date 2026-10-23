#!/usr/bin/env python3
"""2.1 只说了一句话，模型收到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
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

# 2026-10-20 15:16 课程基线（tools/clean-codex.sh --tap，隔离 HOME，能力目录开，推理档位 max）实测；p07–p16 用它
RUN1020 = "数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。"
RUN1021 = "数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-21，codex exec，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构。"

# 第一步：与项目无关的一句话，只看 context 的基本组成（分镜“两步 Prompt”）
FIRST_PROMPT = "你好，用一句话介绍你能帮我做什么。"

# 第二步：与项目相关的只读问题，不提示文件名
READONLY_PROMPT = """只读任务，不修改任何文件。
这个个人主页当初定了哪些要求和完成标准？
请说明依据来自哪个文件的哪一段；
不确定就写“不确定”，不要猜。"""

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
    id="p09", segment="逐块拆开",
    label="请求的组成与来源", title="这些内容是谁组织进去的？",
    lead="先按作用辨认初始请求的六类内容：系统与协作指令、工具定义、Skills 列表、环境信息、权限说明、用户原句。分类不等于消息条数，一条消息可以同时包含多类内容。Codex 负责组织这份请求。",
    closing="Harness 可从两个使用层面理解：现在拆开的是 Codex 提供的运行框架；课程后面要围绕项目建设知识、工具、约束、检查与反馈环境。两者相互配合，这是课程据官方文章做的教学归纳。这次请求的环境信息与人工问候都标为 user，角色标签不能单独证明文字由谁输入。交互继续时，Codex 还会组织新的消息和工具结果；新增内容不都属于 user，也不是每轮重新读取整个项目。接下来先逐块定位初始请求，再看工具调用怎样带入新内容。",
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
        ("转场", "第三步可切查看器核对环境和问候的 user 角色；随后回课件，先从系统指令逐块定位。p11 点出定义与实际返回的区别，p13 接项目问题，p14 查看工具结果进入下一次请求。p10–p13 与 p08 使用同一份初始主请求；p14 的旧运行数字尚未替换，不说成此次问候的结果。"),
    ),
)


scene(
    id="p10", segment="逐块拆开",
    label="身份与协作指令", title="系统指令在告诉模型什么？",
    lead="回到同一份问候的初始主请求。这里把身份与协作要求归为系统与协作指令；本次身份指令实际位于一条 developer 消息中。先看它怎样描述 Codex，再定位同一请求里的团队角色、协作模式等说明。",
    closing="本页辨认的是请求中实际存在的指令，没有做移除指令的实验。团队角色、模式与多代理限制分别有说明，不代表这次问候启动了子代理。接下来定位工具定义，看模型怎样得知工具的名字和用法。",
    html=(
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag">身份指令 · 请求原文</span>'
        '<p lang="en" style="font-size:27px;line-height:1.55;margin-top:10px">You are Codex, a coding agent based on MiniMax-M3.1-Flash. You and the user share the same workspace and collaborate to achieve the user\'s goals.</p></div>'
        '<div class="p-bar is-light" data-reveal="1">同一请求还有：<b>团队角色、协作模式与多代理限制</b></div>'
        '<div class="p-bar" data-reveal="2">要调用工具，还要知道它的<b>名字与用法</b></div>'
        '<p class="source-note">依据：2026-10-23，ch02-start-v1 项目、专用课程 HOME，与 p08 同一份初始主请求。上框为 input 0 的 developer 身份消息全文；团队说明、模式与限制仅标出位置，见其他 developer 消息。</p>'
    ),
    steps=["读身份指令", "定位协作说明", "接着找工具定义"],
    teaching=teach(
        ("记录定位", "使用 p08 相同代理会话的 record_index 2，不用辅助标题请求。input 0 身份指令 145 字符；input 1 包含 Default 模式，input 2 为团队说明，input 3 为多代理限制。仅作为定位，不口播长度。"),
        ("讲述边界", "系统与协作指令是按作用归类，不把它们都说成 role=system。本页没有做移除对照，不宣称没有这句话模型就只会续写或不知道身份；不推断产品内部动机，不把团队说明讲成已启动子代理。"),
    ),
)


scene(
    id="p11", segment="逐块拆开",
    label="工具定义与执行", title="模型怎样知道工具的名字和用法？",
    lead="同一请求的 tools 中列出了工具定义。本次用 exec 组织调用，它的说明里还描述了 exec_command 等工具怎样使用。下面把定义的结构与这次问候后实际发生的调用分开看；代码摘录只保留定位所需的几行。",
    closing="模型根据可用的工具说明提出调用，由 Codex 执行；结果再作为工具返回项进入后续请求，通常不属于 user 消息。本页只辨认定义与调用，实际返回怎样被使用留到后面的项目问题，不要求记工具清单或 JavaScript 语法。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="tool" data-reveal="0"><span class="p-tag">工具定义 · 结构摘录</span>'
        '<pre class="p-code" style="margin-top:12px;font-size:21px;line-height:1.5">{ "type": "custom",\n  "name": "exec",\n  "description": "…" }</pre>'
        '<p class="p-sub">说明里还描述了 exec_command 的命令参数和用法</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag">这次问候后实际发生的调用</span>'
        '<p style="font-size:23px;line-height:1.6;margin-top:12px">exec 内调用 exec_command<br>列目录，再读 package.json</p>'
        '<pre class="p-code" style="margin-top:12px;font-size:18px;line-height:1.5;white-space:pre-wrap">ls -la &amp;&amp; cat package.json 2&gt;/dev/null | head -40</pre></div></div>'
        '<div class="p-bar" data-reveal="1">模型提出调用 → <b>Codex 执行</b> → 工具结果进入后续请求</div>'
        '<p class="source-note">依据：2026-10-23 与 p08 相同的问候记录。左侧为初始请求里的定义结构，description 用省略号，不是全文；右侧为该请求之后的实际命令。</p>'
    ),
    steps=["定位工具定义", "区分定义与实际调用"],
    teaching=teach(
        ("记录定位", "初始主请求 tools 中找 name=exec，description 内定位 exec_command 和 cmd 参数；本次顶层有五个工具入口，但不要求记名称或数量。实际调用在这一份请求的响应中，exec 内执行 tools.exec_command，cmd 为 ls -la && cat package.json 2>/dev/null | head -40。屏幕命令按版面自动换行。"),
        ("展示", "可切查看器先找 tools，再找这次问候的调用；不把工具定义说成执行记录。没有修改项目文件。更完整的调用、返回与回答对照留到 p14，新项目问题仍需重录。"),
    ),
)


scene(
    id="p12", segment="逐块拆开",
    label="Skills 列表与全文", title="Skills 列表等于技能全文吗？",
    lead="这次初始请求中的 Skills 列表包含技能名、简述和文件位置。例如 skill-creator 的条目指向一个 SKILL.md 文件；实际文件还包含原则、创建步骤与验证等内容，全文没有出现在这份初始请求里。",
    closing="本次条目来自专用课程 HOME 的内置技能目录，个人主页项目没有项目 Skills。目录与全文是两种内容：列表帮助识别可用技能，任务需要时可按说明读取全文。这里只比较本次列表与实际文件，不把所有版本都概括成同一种加载方式；使用技能留到后续章节。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1.2fr 1fr">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag">初始请求中的一条 · 实际摘录</span>'
        '<p class="p-mono" style="font-size:20px;margin-top:12px;line-height:1.55;overflow-wrap:anywhere">skill-creator: Create or update a Codex skill with appropriately scoped instructions and any needed supporting resources.</p>'
        '<p class="p-mono" style="font-size:19px;margin-top:10px;overflow-wrap:anywhere">file: r0/skill-creator/SKILL.md</p></div>'
        '<div class="p-box is-dashed" data-role="ctx" data-reveal="1"><span class="p-tag">对应的 SKILL.md 文件</span>'
        '<p style="font-size:25px;line-height:1.65;margin-top:12px">原则、创建步骤、验证……</p><p class="p-sub">全文不在这份初始请求中</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">这次看到的是<b>内置技能列表</b> · 项目本身没有 Skills</div>'
        '<p class="source-note">依据：2026-10-23 与 p08 同一份初始主请求中的 developer 消息及实际 skill-creator/SKILL.md。r0 是专用课程 HOME 内置目录的路径别名；项目快照和实际项目均无 .agents/skills。列表条目为原文，文件内容用中文概括。</p>'
    ),
    steps=["读列表条目", "对照实际文件", "辨认列表来源"],
    teaching=teach(
        ("文件对照", "录前打开专用课程 HOME 的 .codex/skills/.system/skill-creator/SKILL.md，核对其 Core Principles、Create or Update a Skill、Validate and Iterate 等章节；录制时与查看器中的对应条目并排，不朗读全文或展示带用户名的绝对路径。完整文件未包含于本次初始请求。"),
        ("事实边界", "本次列表的四个条目都来自内置目录，项目没有 Skills。本次问候没有读取技能全文，不把本页文件对照说成问候实际调用。不要由条目增加直接推导固定 token 变化或每次请求必定更重。"),
    ),
)


scene(
    id="p13", segment="逐块拆开",
    label="环境与权限", title="工作目录、日期和权限从哪里来？",
    lead="同一请求里，Codex 用 user 消息加入环境信息，并用 developer 消息说明权限。本次运行的目录是个人主页项目，日期为 2026-10-23，沙箱模式是 workspace-write，允许读取文件和在指定范围内写入。",
    closing="环境信息描述运行现场，权限说明告诉模型操作边界；实际约束由运行时的权限机制落实。本页核对的是请求文字，没有实测越界拒绝，不把这段说明当作所有工具的统一限制。接下来换一个需要查项目依据的问题，查看工具调用、返回和回答的关系。",
    html=(
        '<style>@media(max-width:600px){body[data-mode="scroll"] #p13 .p-code{font-size:17px!important}}</style>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag">环境信息 · user 消息摘录</span>'
        '<pre class="p-code" style="margin-top:12px;font-size:20px;line-height:1.5">cwd: …/personal-homepage\nshell: zsh\ncurrent_date: 2026-10-23\ntimezone: Asia/Shanghai</pre></div>'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag">权限说明 · developer 消息</span>'
        '<p class="p-mono" style="font-size:25px;margin-top:12px">sandbox_mode: workspace-write</p>'
        '<p style="font-size:23px;line-height:1.6;margin-top:12px">允许读取文件<br>在当前目录和指定范围内写入</p></div></div>'
        '<div class="p-bar" data-reveal="2">文字告诉模型边界 · <b>运行时权限机制落实约束</b></div>'
        '<p class="source-note">依据：2026-10-23 与 p08 同一份初始主请求，目录已缩写；环境字段保留原值，省略 XML 标签和文件访问范围。权限为中文摘要，原文还包含网络限制与审批等内容。这里只核对请求，未实测越界拒绝。</p>'
    ),
    steps=["核对运行环境", "核对本次权限", "区分说明与执行约束"],
    teaching=teach(
        ("记录定位", "环境为 input 4 的 user 消息，含 cwd、shell、current_date、timezone 及文件访问范围；权限在 input 1 的 developer 消息，sandbox_mode 为 workspace-write，允许读文件及在 cwd/writable_roots 中编辑，网络受限。初始请求没有加入已有批准规则；不使用旧 read-only 记录。"),
        ("展示与转场", "录制时遮盖用户名和绝对路径，页面只缩写路径；不做越界写入实验。先区分权限说明与执行机制，再接 p07 项目只读问题；p07/p14 的旧素材尚待新问法重录，不能称为本次问候的后续结果。"),
    ),
)


# ---------- 工具调用 ----------
scene(
    id="p07", segment="工具调用", layout="prompt-scene", prompt=READONLY_PROMPT,
    label="问一个项目问题", title="问一个和项目有关的问题，请求会多出什么？",
    lead="第二步换一个和项目有关的只读问题。Prompt 不提示文件名，Codex 要自己去找依据；回答里说出的文件，就是下一页在记录里要找的东西。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>只读，不给文件名</b><small>让它自己去找</small></span></li>'
        '<li data-reveal="1"><span><b>回复逐句看</b><small>哪句是要求，哪句是完成标准，哪句不确定</small></span></li>'
        '<li data-reveal="2"><span><b>它说依据在哪</b><small>这次：PROJECT_BRIEF.md 的“首页 v0 的验收依据”（第 31–39 行）、PROMPT_V1.md 的“人工决定”“任务”两段</small></span></li></ol></div>'
        '<p class="source-note">' + RUN1020 + ' 回答还指出 PROMPT_V1.md 第 3 行自称排练记录。</p>'
    ),
    steps=["只读提问", "看回复", "圈出依据"],
    teaching=teach(
        ("切到实操", "在同一个 claude-tap 启动的 Codex 里提交此 Prompt，保留完整记录供 p14 使用。Codex 的回复录制时按实际记录截图，逐句贴标签，高亮它说出的依据文件。"),
        ("实测记录", "2026-10-20 15:16 课程基线（隔离 HOME，能力目录开，推理档位 max，Codex 0.163.0 + MiniMax-M3.1-Flash，codex exec -s read-only）在 starter 的 ch01-complete 快照（没有 AGENTS.md）上跑过一次：回答说要求在 PROMPT_V1.md 的“人工决定”“任务”两段；范围在 PROJECT_BRIEF.md 的“已确定的目标与范围”“1.5 的实现范围”；完成标准在 PROJECT_BRIEF.md 的“首页 v0 的验收依据”（第 31–39 行）；还指出 PROMPT_V1.md 第 3 行自称排练记录。全部给了文件、段落和行号。讲师自己的仓库录制时内容会不同，按实际回复讲。工作区没有被修改。"),
        ("讲师提示", "Prompt 不出现 PROMPT_V1.md 等文件名，这样“它是怎么知道的”这个问题才是真的。只读，不修改文件。"),
    ),
)

scene(
    id="p14", segment="工具调用",
    label="它是怎么知道的", title="它到底是怎么“知道”的？",
    lead="回到请求记录：Codex 提出读文件的工具调用，Harness 执行后把返回的内容放进下一次请求，模型再据此回答。工具调用和返回也进了 context。再对照回答，看它有没有正确使用这段返回。",
    html=(
        '<div class="p-flow" style="--n:3">'
        '<div class="p-node" data-role="agent" data-reveal="0"><h3>提出调用</h3><p>exec 里调用 exec_command：<code>cat -n PROJECT_BRIEF.md</code> 等</p></div>'
        '<div class="p-node" data-role="tool" data-reveal="0"><h3>Harness 执行</h3><p>返回带行号的文件内容</p></div>'
        '<div class="p-node" data-role="ctx" data-reveal="1"><h3>下一次请求</h3><p>带上这段调用和返回</p></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>这一问：8 次请求</h3><p>15 次调用，都是 exec 里调 exec_command 跑 cat、git log 等；input 从 6 项涨到 43 项</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="2"><h3>读到了</h3><p>回答里的文件和行号，都能在返回里找到；再看它理解得对不对</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">下一步从<b>上一步的返回</b>里来</div>'
        '<p class="source-note">' + RUN1021.rstrip("。") + '</p>'
    ),
    steps=["调用和返回", "进入下一次请求", "对照回答"],
    teaching=teach(
        ("演示分支", "按录制实际选用：\n\n读到了：在记录中指认读取文件的那次工具调用、工具返回，以及下一次请求中出现的文件内容；再对照回答，检查来源与理解是否相符。\n\n没读文件，凭目录名或代码猜：核对完整请求与工具返回后指出依据缺失，这正是 Prompt 要求“说明依据”的原因。\n\n读到了但理解错了，或没找到依据、回答不确定或继续查找：均按实际结果讲。仅凭没有读取某一个文件，不能断言所有来源中都没有依据。保留原始记录，不重跑凑结果。"),
        ("实测记录", "2026-10-21 课程基线（能力目录开）重跑，问句去掉“v0”：8 次请求、15 次工具调用，都是 exec 里调 exec_command：ls、find、逐个 cat PROJECT_BRIEF.md、PROMPT_V1.md、CHECKPOINTS.md、README.md 等，git log / tag / status，再读 index.html、package.json、src/ 和 setup-check，最后 cat -n 几份要求文件取行号。input 6、11、20、27、32、37、40、43 项；input_tokens 7610 → 24961，缓存命中 5063 → 23328。回答仍引用 PROJECT_BRIEF.md“首页 v0 的验收依据”第 31–39 行和 PROMPT_V1.md 的人工决定表，比上一次铺得更开（还列了未完成的证据文件、缺失的 tag）。运行目录 lab-runs/ch02-context/2.1-step2-20261021-150635，不提交。"
         "上一次：2026-10-20 15:16 课程基线（能力目录开）一次运行：7 次请求、6 次工具调用，全部是 exec 里的 JavaScript 调 tools.exec_command：pwd / ls / git log；cat -n PROJECT_BRIEF.md、PROMPT_V1.md、CHECKPOINTS.md、TASK_01_01.md；README.md、PLACEHOLDER_CONTENT.md；docs/setup/TOOLCHAIN.md 与 git tag；grep；git status。没有专门的读文件工具，读文件就是跑 cat。每次请求的 input 都带上前面全部的调用和返回：6、9、12、15、18、21、24 项；input_tokens 7603、8450、11778、13852、16630、18198、18896，其中缓存命中 6395、7765、8614、12118、14438、17591、18815。录制版本或讲师仓库不同，次数和数字会变，按实际记录改。"),
        ("讲师提示", "学员的要求和完成标准可能记在 PROMPT_V1.md 或其他文件里。回扣第 1 章的 Agent 循环。“input 一项项变长”只点一句，2.2 p22–p23 再展开。"),
    ),
)

# ---------- 换个配置 ----------
scene(
    id="p14a", segment="工具调用",
    label="放什么由谁决定", title="点名文件，和让它自己找，差多少？",
    lead="刚才那一问没告诉它看哪个文件，它自己找了一圈。换个问法，在 Prompt 里点名“要求在 PROJECT_BRIEF.md，人工决定在 PROMPT_V1.md”，再问一次：请求从 8 次降到 3 次，工具调用从 15 次降到 2 次，输入 token 合计只有原来的五分之一左右；回答引用的段落和行号没变。没读的文件，它直接说不确定。往 context 里放什么，可以由我们来决定。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>同一个问题</span><span>不点名，让它自己找</span><span>点名两个文件</span></div>'
        '<div data-reveal="0"><span>请求</span><span>8 次</span><span>3 次</span></div>'
        '<div data-reveal="0"><span>工具调用</span><span>15 次</span><span>2 次</span></div>'
        '<div data-reveal="0" class="is-key"><span>输入 token 合计</span><span>约 12.6 万</span><span>约 2.6 万</span></div>'
        '<div data-reveal="1"><span>回答的依据</span><span>两个文件的同几段</span><span>同上；没读的直接说“不确定”</span></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px">往 context 里放什么，<b>可以由我们来决定</b></div>'
        '<p class="source-note">' + RUN1021.rstrip("。") + '；两次各一次运行</p>'
    ),
    steps=["两次对比", "依据一样吗", "放什么由谁决定"],
    teaching=teach(
        ("实测记录", "2026-10-21 课程基线 codex exec -s read-only，起点第 1 章参考快照。不点名：本页前面那一问（lab-runs/ch02-context/2.1-step2-20261021-150635），8 次请求、15 次调用，claude-tap 汇总输入 126,466 token。点名：问句加上“要求在 PROJECT_BRIEF.md，人工决定在 PROMPT_V1.md，只读这两个文件回答”（lab-runs/ch02-context/views-20261021-194716/named），3 次请求、2 次调用（ls 与 wc、cat -n 两个文件），输入 25,656 token；回答引用 PROJECT_BRIEF.md“首页 v0 的验收依据”与 PROMPT_V1.md 人工决定表，和不点名时一致；颜色等两个文件里没有的内容，它写“不确定，引用源需看别的文件”。"),
        ("讲师提示", "不点名不是错：不知道该看哪里时，让它找也合理，代价就在请求里。只讲“放什么可以由我们决定”，不推成“永远要点名”。"),
    ),
)

scene(
    id="p16", segment="换个配置",
    label="换个权限", title="同一句话，换个权限，说明文字也变了",
    lead="第一步那句话，用只读和可写各发一次，权限说明是两段不同的文字；可写时还会列出可写目录，环境信息也随之变长。Codex 按配置从不同模板拼出这段说明。这是讲师示例，可自主尝试。",
    html=(
        NARROW +
        '<style>.x-w16{grid-template-columns:1.5fr 1fr}</style>'
        '<div class="p-term" data-reveal="0" style="margin-bottom:12px;font-size:17px" data-copy="' + TAP_CMD + ' -s read-only">'
        '<div class="dim">$ uvx claude-tap@0.1.146 --tap-client codex --tap-target … -s read-only</div>'
        '<div class="dim">$ uvx claude-tap@0.1.146 --tap-client codex --tap-target … -s workspace-write</div></div>'
        '<div class="p-walk x-w16"><div data-reveal="1"><div class="p-src" style="--lh:40px">'
        '<div class="p-fn">permissions instructions <span class="add">+1</span><span class="del">−1</span></div>'
        '<div class="p-ln del"><i>−</i><code>`sandbox_mode` is `read-only`: … only permits reading files.</code></div>'
        '<div class="p-ln add"><i>+</i><code>`sandbox_mode` is `workspace-write`: … editing files in `cwd` …</code></div>'
        '<div class="p-ln add"><i>+</i><code>The writable roots are `…/repo`, …</code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="1"><span><b>341 → 630 字符</b><small>可写时多出可写目录；环境信息 550 → 1306</small></span></li>'
        '<li class="is-ok" data-reveal="2"><span><b>按配置拼装</b><small>仓库里按沙箱模式分模板</small></span></li></ol></div>'
        '<p class="source-note" data-reveal="2">模板位置：openai/codex 仓库 codex-rs/prompts/templates/permissions/。' + RUN1020 + '</p>'
    ),
    repro=repro([
        ("在课程仓库根目录建一个带 Git 的练习目录；有自己的 .git，Codex 才不会读到课程仓库的 AGENTS.md", "mkdir -p lab-runs/perm && cd lab-runs/perm && git init -q && echo '<h1>hello</h1>' > index.html"),
        ("用课程基线（隔离 HOME + MiniMax）以只读权限跑一次；需要 MINIMAX_API_KEY，浏览器会打开请求面板", f"../../tools/clean-codex.sh --tap -- exec -s read-only \"{FIRST_PROMPT}\" < /dev/null"),
        ("同一句话换成可写权限再跑一次", f"../../tools/clean-codex.sh --tap -- exec -s workspace-write \"{FIRST_PROMPT}\" < /dev/null"),
        ("在面板里对照两次请求：developer 消息中 <permissions instructions> 一段，以及环境信息里的可写目录", None),
    ], note="讲师 2026-10-20 在 Codex 0.163.0 上按这几步用第一步那句话实测过（课程基线默认写入模型能力目录；2026-10-05 在 0.160.0 上用另一句只读提问也测过）；权限说明与提问内容无关。字符数随版本和配置变化，只看两段说明的差别。末尾的 < /dev/null 让 codex exec 不再等待额外输入。"),
    steps=["两次启动", "两段说明", "按配置拼装"],
    teaching=teach(
        ("数字来源", "2026-10-20 15:16 课程基线（能力目录开）实测第一步那句话：权限说明 341 → 630 字符，环境信息 550 → 1306 字符（可写时 permission_profile 里多出可写路径）；input_tokens 7519 → 7899；系统指令、工具定义、Skills 列表、多代理说明两次完全相同。较早一次能力目录关的记录是 341 → 676、642 → 1628，不再使用。录制版本定下后复测。"),
        ("核对记录", "模板位于 codex-rs/prompts/templates/permissions/（sandbox_mode/*.md、approval_policy/*.md），2026-01 起由固定段落改为按配置拼装（提交 87f7226cca）。旧数据来自 codex exec，审批策略为 never；交互界面中的审批文字会不同。"),
        ("命令说明", "已核对：Codex 0.160.0 与 0.163.0 的 -s/--sandbox 取值为 read-only、workspace-write、danger-full-access；claude-tap 0.1.145 的帮助写明未列出的参数会转发给所启动的客户端；2026-10-20 用课程固定的 0.1.146 按这两条命令实测，-s 参数同样转给了 Codex。复制按钮复制的是只读那一条，可写时把最后一个参数换掉。会话中途也能在 Codex 界面里改权限，但前面的对话仍在上下文里，对比不干净，所以用启动参数，两次各开新会话。"),
    ),
)

scene(
    id="p15b", segment="换个配置",
    label="换个模型能力目录", title="同一句话，换一份模型能力目录，请求大变样",
    lead="Codex 要为所用的模型找一份元数据，我们叫它模型能力目录：这个模型配哪套系统指令、哪种工具、什么推理档位。课程默认写入 MiniMax 官方 Codex 接入文档给的那份目录；去掉它再发同一句话，Codex 启动时提示找不到模型元数据，改用后备值，请求就大不一样。请求还会随个人配置（~/.codex、个人 Skills）、项目里的 AGENTS.md 和这次的权限变化，所以每个人在自己电脑上看到的都会和讲师的不同。这是讲师的对比示例，可自主尝试。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="ok" data-reveal="0"><span class="p-tag" data-role="ok">能力目录开（课程默认）</span>'
        '<p style="margin-top:8px;line-height:1.6">系统指令：一句话 + 团队说明<br>工具 5 个 ≈2.2 万字符（命令套在 exec 里）<br>推理档位 max<br><b>约 7.5 千 token</b></p></div>'
        '<div class="p-join" data-reveal="1"><span>只改这一项</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">能力目录关</span>'
        '<p style="margin-top:8px;line-height:1.6">启动提示：找不到模型元数据<br>系统指令 ≈1.7 万字符<br>工具 9 个 ≈1.8 万字符（不套 exec）<br>不发推理档位<br><b>约 9 千 token</b></p>'
        '<p class="p-sub" style="margin-top:6px">基础指令的章节：工作方式 · 性格 · AGENTS.md 规范 · 执行任务 · 验证 · 汇报</p></div></div>'
        '<div class="p-bar" data-reveal="2">只改了一项配置，<b>模型看到的 context 就大不相同</b> · 课程默认打开能力目录</div>'
        '<p class="source-note">两次都是讲师用课程基线（隔离 HOME）发第一步那句话（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，codex exec），只差是否写入模型能力目录；章节名为中文意译</p>'
    ),
    repro=repro([
        ("沿用上一页的练习目录 lab-runs/perm", "cd lab-runs/perm"),
        ("用课程基线跑一次，默认写入模型能力目录；需要 MINIMAX_API_KEY，浏览器会打开请求面板", f"../../tools/clean-codex.sh --tap -- exec -s read-only \"{FIRST_PROMPT}\" < /dev/null"),
        ("去掉能力目录，再跑同一句；启动时会提示找不到模型元数据", f"CLEAN_CODEX_CATALOG=0 ../../tools/clean-codex.sh --tap -- exec -s read-only \"{FIRST_PROMPT}\" < /dev/null"),
        ("在面板里对照两次请求：input 里的系统指令、顶层 tools 的个数，以及 reasoning 字段", None),
    ], note="讲师 2026-10-20 在 Codex 0.163.0 上按这几步实测过。能力目录是仓库里的 tools/codex-model-catalog.json，来自 MiniMax 官方 Codex 接入文档；CLEAN_CODEX_CATALOG=0 时脚本不写入它。换别的模型或版本，两边的差别会不同。", label="自己对比一次"),
    steps=["能力目录开", "能力目录关", "只改了一项"],
    teaching=teach(
        ("数字来源", "2026-10-20 15:16 两次运行，只差 CLEAN_CODEX_CATALOG。开：input_tokens 7519；系统指令 145 字符 + 多代理团队说明 2235 + 开关说明 271；工具 5 个 22028 字符（exec 为 custom，code mode）；reasoning 为 {\"effort\": \"max\"}。关：启动提示 Model metadata … not found，用后备元数据；input_tokens 8994；input 4 项，系统指令 16979 字符（Codex 内置完整基础指令，章节有 How you work、Personality、AGENTS.md spec、Task execution、Validating your work、Presenting your work 等），没有多代理团队说明；工具 9 个 17767 字符，都是普通函数工具：exec_command、write_stdin、request_user_input、view_image、multi_agent_v1、get_goal、create_goal、update_goal、web_search；reasoning 为 {\"summary\":\"auto\"}，不发档位。Skills 列表 1985、权限说明 341、环境信息 550、我们的话 17 两边相同。"),
        ("讲师提示", "质量 A/B（开 / 关各 5 次，用 2.2 的 Prompt）见 courseware/ch02/materials/model-config/README.md：样本小，差异可能只是偶然，不上画面，不说哪种配置“更好”。codex exec 头部显示的 reasoning effort 与实际发出的不一致，以请求记录为准。关时的基础指令对应 openai/codex 仓库 codex-rs/protocol/src/prompts/base_instructions/default.md，只列章节名的中文意译，不大段引用原文。"),
        ("讲师提示", "原 p15 的“个人 / 项目 / 本次”三层来源与隔离 HOME 对比移到配套页，这里只在第 3 步口播里用一句话带过。不现场重跑。"),
    ),
)

scene(
    id="p16a", segment="小结",
    label="这些加在一起", title="这些加在一起，就是 context",
    lead="系统指令、工具（含 Skills 列表）、环境（含权限说明）、规则、对话历史、工具返回，再加上我们这一句，模型这一次能看到的全部内容，就是 context。规则和对话历史这一次还是空的，下一节会填上。第 1 章说 context 里该放什么，这里第一次看到它的实际样子；这一列方块是全章的锚点图，后面四节都回到它。",
    html=(
        anchor(lit=("系统指令", "工具", "环境", "工具返回", "这一句"), note="规则、对话历史这一次还是空的，2.2 填上", reveal=0) +
        '<div class="p-bar" data-reveal="1" style="margin-top:10px"><b>Context</b>：模型这一次能看到的全部内容</div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:10px">'
        '<div class="p-box" data-role="ink" data-reveal="2"><span class="p-tag" data-role="ink">Anthropic 的说法</span><p>Context 是从大模型采样时包含的那一组 token</p><p class="p-sub">包括系统指令、工具、MCP、外部数据、消息历史等 · 2025-09</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="3"><span class="p-tag" data-role="ctx">课程地图</span><p>第 1 章：Agent 循环 · 权限<br><b>第 2 章：Context</b> 点亮<span class="p-sub">，后面几章还没走到</span></p></div></div>'
    ),
    refs=[ref("Effective context engineering for AI agents", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents", "Anthropic，2025-09-29", kind="read")],
    steps=["整体框起", "叫它 context", "官方说法", "点亮地图"],
    teaching=teach(
        ("讲师提示", "“模型这一次能看到的全部内容”是我们自己的一句话定义。官方说法取自 Anthropic 2025-09-29 的文章 Effective context engineering for AI agents，画面是中文意译：原句把 context 定义为从大模型采样时包含的那一组 token，并列出 context 状态里有系统指令、工具、MCP、外部数据、消息历史等。2026-10-20 核对原文。可以顺带说一句：这篇文章讲的“context engineering”就是第 1 章说的“context 里该放什么”，本课后面几章还会用到。"),
        ("讲师提示", "最后一行是课程概念地图的保底版本，地图定稿后换成地图局部，只点亮 Context。"),
    ),
    expressive="把 p09 的请求带整体框起来，再接上课程概念地图，点亮 Context 这座城市",
)

# ---------- 小结 ----------
scene(
    id="p16b", segment="小结", layout="evidence-scene",
    label="Codex 官方也这样拼", title="Codex 官方也是这样拼请求的",
    lead="OpenAI 的工程博客《深入解析 Codex 智能体循环》（2026-01-23）写了 Codex 怎样拼一次请求：先是模型的基础指令和工具，再是沙箱权限说明、AGENTS.md 与技能列表、目录和 shell 等环境信息，最后才是我们这一句。和我们从请求记录里拆出来的对得上。下一次请求会把这一整段原样再发一遍，2.2 接着看。",
    html=redrawn("context-engineering", "openai-codex-request", "excalidraw", "据 OpenAI《深入解析 Codex 智能体循环》（Michael Bolin，2026-01-23）重画"),
    refs=[ref("深入解析 Codex 智能体循环", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23")],
    steps=["对上锚点图"],
    teaching=teach(
        ("讲师提示", "图按文章“构建初始提示”一节重画（Excalidraw 风格，courseware/tools/redraw.py 生成，图元在 materials/external/context-engineering/figures.py），2026-10-22 核对原文。文章讲的是 Codex 一般怎样拼请求；具体内容以我们这次的请求记录为准，比如文章里 AGENTS.md 合计默认上限 32 KiB。"),
    ),
)

scene(
    id="p16c", segment="小结", layout="evidence-scene",
    label="从写 Prompt 到管 Context", title="从写 Prompt 到管 Context",
    lead="Anthropic 在《Effective context engineering for AI agents》（2025-09-29）里用一张图对比：只写 Prompt 时，窗口里是系统提示词和用户这一句；做 Agent 时，每一轮都要从文档、工具、记忆文件、对话历史里挑出要放进去的，工具返回又成了下一轮可以放的东西。这就是开头说的 context engineering。",
    html=redrawn("context-engineering", "anthropic-prompt-vs-context", "excalidraw", "据 Anthropic《Effective context engineering for AI agents》（2025-09-29）第一张图重画"),
    refs=[ref("Effective context engineering for AI agents", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents", "Anthropic，2025-09-29")],
    steps=["每一轮都挑一遍"],
    teaching=teach(
        ("讲师提示", "据原文第一张图（Prompt engineering vs. context engineering）中文重画，Excalidraw 风格，2026-10-22 核对原文。原图英文标签：System prompt、User message、Doc、Tool、Memory file、Comprehensive instructions、Domain knowledge、Message history，重画时合并为中文的几类。试讲时 2.1 超时，先砍这一页（C2-64）。"),
    ),
)

scene(
    id="p18", segment="小结",
    label="暂停自检", title="暂停自检",
    lead="先独立作答，再看解析。答案后面标出回到哪一页。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>从请求记录中指出四类不是你写的内容，缺了其中一类会怎样？</h3>'
        '<div data-reveal="1"><p>系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类说出后果<span class="p-back-to" data-role="agent">回到 拆开这份请求</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>同一句话，有位同学的请求里系统指令很长、有 9 个工具，讲师的只有一句话和 5 个工具。最可能是哪里不同？</h3>'
        '<div data-reveal="2"><p>最可能是他的 Codex 没有为这个模型写入能力目录（启动时会提示找不到模型元数据），用了后备的系统指令和工具<span class="p-back-to" data-role="us">回到 换个模型能力目录</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>讲师第二步的记录里，模型是从哪里知道完成标准的？它在记录里的什么位置？</h3>'
        '<div data-reveal="3"><p>从读文件那次工具调用的返回：cat -n PROJECT_BRIEF.md 返回带行号的内容，紧跟在调用后面，之后每次请求都带着；回答里的“首页 v0 的验收依据”（第 31–39 行）就出自这里<span class="p-back-to" data-role="ctx">回到 它是怎么知道的</span></p></div></div></div></div>'
    ),
    steps=["暂停", "第 1 题", "第 2 题", "第 3 题"],
)

scene(
    id="p19", segment="小结",
    label="本节小结", title="模型收到的，远不止我们那句话",
    lead="只说一句话，Codex 发出的请求里有系统指令、工具定义、Skills 列表、环境信息和权限说明；工具调用和返回也会进入 context；换权限、换模型配置，同一句话的 context 就不同。下一节回答：对话多几轮，context 怎么变？",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">一张地图</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">Context<br>六块，加上工具返回</div><p class="p-sub" style="text-align:center">我们的话只是最后一格</p></div>'
        '<div><h3 data-reveal="1">两个认识</h3><ul class="p-exits" style="gap:12px"><li class="is-point" data-reveal="1">工具调用和返回也会进入 context</li><li class="is-point" data-reveal="2">换权限、换模型配置，context 就不同</li></ul></div>'
        '<div class="p-next" data-reveal="3"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.2 补上个人经历</h3><p>对话多几轮，context 怎么变？</p></div></div></div>'
    ),
    steps=["拆开的请求", "工具调用也进来", "换配置就不同", "下一节"],
)


lesson.write()

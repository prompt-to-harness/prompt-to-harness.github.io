#!/usr/bin/env python3
"""2.1 只说了一句话，模型收到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, MEASURED, chapter_map, ref, repro, teach  # noqa: E402

# 落后时进入第 2 章的追赶 Prompt：与 materials/catchup 的实验同一份，代入真实的参考起点
CATCHUP_PROMPT = (Path(__file__).resolve().parents[3] / "materials/catchup/prompt-ch02.txt").read_text().strip() \
    .replace("{URL}", "https://github.com/prompt-to-harness/course-starter.git").replace("{TAG}", "ch02-start-v1")

lesson = Lesson(__file__, "2.1", "只说了一句话，模型收到了什么", summary="用 claude-tap 打开 Codex 实际发出的请求：只说一句话，模型收到的远不止这句话；这些加在一起就是 context，换权限、换环境，它就不同。")
scene = lesson.scene

# 录制时还没有实际记录的数字，画面上统一用这个占位，讲师提示里写明按记录替换
TBD = "〔按录制记录〕"

# 第一步：与项目无关的一句话，只看 context 的基本组成（分镜“两步 Prompt”）
FIRST_PROMPT = "你好，用一句话介绍你能帮我做什么。"

# 第二步：与项目相关的只读问题，不提示文件名
READONLY_PROMPT = """只读任务，不修改任何文件。
这个首页 v0 当初定了哪些要求和完成标准？
请说明依据来自哪个文件的哪一段；
不确定就写“不确定”，不要猜。"""

TAP_CMD = "uvx claude-tap --tap-client codex --tap-target https://api.minimax.cn/v1"


# ---------- 开始这一章 ----------
scene(
    id="p01", segment="开始这一章", layout="lesson-cover",
    label="这一章做什么", title="补完整，发布上线",
    lead="把个人主页 v0 补完整、发布上线，一路打开请求看清 context",
    html=(
        chapter_map(1) +
        '<div class="p-chain" data-reveal="1" style="margin-top:12px;font-size:20px"><span>补完整</span><i>→</i><span>发布上线</span><i>·</i><span>一路看清 context</span></div>'
        '<style>.x-p01 span{padding:6px 10px;font-size:19px}.x-p01 .is-head span{font-size:16px}</style>'
        '<div class="p-matrix x-p01" data-reveal="2" style="margin-top:10px;grid-template-columns:minmax(0,.35fr) minmax(0,1.2fr) minmax(0,1.6fr)">'
        '<div class="is-head"><span>节</span><span>项目动作</span><span>用请求记录回答</span></div>'
        '<div class="is-key"><span>2.1</span><span>用 claude-tap 启动 Codex</span><span>只说一句话，模型收到了什么？</span></div>'
        '<div><span>2.2</span><span>补上项目经历</span><span>多聊几轮，context 怎么变长？</span></div>'
        '<div><span>2.3</span><span>审查改动，决定要不要接受</span><span>它是根据哪些内容改的？</span></div>'
        '<div><span>2.4</span><span>发布到 GitHub Pages</span><span>Codex 怎样调用 gh？</span></div>'
        '<div><span>2.5</span><span>分拣“只是重构”的改动</span><span>没有测试，它能证明行为没变吗？</span></div></div>'
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
    steps=["本章地图", "一句话主线", "五节各做什么"],
    teaching=teach(("讲师提示", "本章只有这一处开篇地图；后续各节开篇沿用同一张地图，只移动当前位置。直接交代目标，不铺情节。")),
)

scene(
    id="p02", segment="开始这一章",
    label="昨天的页面去哪了", title="昨天的页面，怎么打不开了？",
    lead="隔了一天回到项目，本地地址打不开。在第 1 章做出个人主页 v0 的那个项目目录里重新运行 npm run dev，页面就回来了。为什么要重新启动，下一节再讲。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="gate" data-reveal="0"><span class="p-tag" data-role="gate">浏览器</span>'
        '<div class="p-term" style="margin-top:10px"><div class="err">localhost 拒绝连接</div></div></div>'
        '<div class="p-join" data-reveal="1"><span>终端</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ok" data-reveal="1"><span class="p-tag" data-role="ok">重新启动</span>'
        '<div class="p-term" data-copy="npm run dev" style="margin-top:10px"><div class="dim">$ npm run dev</div><div class="ok">Local: http://localhost:5173/</div></div></div></div>'
        '<div class="p-bar is-light" data-reveal="1">在自己的项目目录里，重新运行 <b>npm run dev</b></div>'
    ),
    steps=["打不开", "重新启动"],
    teaching=teach(
        ("讲师提示", "开发服务器的端口以学员自己的 Vite 输出为准，画面上的 5173 是常见默认值。这里只操作，为什么要重启留到 2.2 p21。"),
    ),
)

# ---------- 打开请求 ----------
scene(
    id="p06-tap", segment="打开请求",
    label="用 claude-tap 启动 Codex", title="怎样看到 Codex 实际发出的请求？",
    lead="claude-tap 是一个开源的本地代理，夹在 Codex 和模型服务之间，把每一次请求记录下来；启动之后，Codex 的用法和平时一样。它会经手 API 密钥，也只看得到经过它的内容。这一节由讲师演示，自己运行是选做。",
    html=(
        '<div class="p-term" data-copy="' + TAP_CMD + '" data-reveal="0"><div class="dim">$ uvx claude-tap --tap-client codex \\</div><div class="dim">    --tap-target https://api.minimax.cn/v1</div></div>'
        '<div class="p-grid" style="--n:3;gap:12px;margin-top:16px">'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>本地代理</h3><p>夹在 Codex 和模型服务之间</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1"><h3>会经手 API 密钥</h3><p>画面上不露配置和密钥</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1"><h3>只看得到经过它的</h3><p>Codex 发出的请求和模型的返回</p></div></div>'
        '<ol class="p-watch is-row" style="margin-top:16px"><li data-reveal="2">切到终端<small>用它启动 Codex</small></li>'
        '<li data-reveal="3">打开查看器<small>每次请求都被记下来</small></li></ol>'
    ),
    refs=[ref("liaohch3/claude-tap", "https://github.com/liaohch3/claude-tap", "项目主页")],
    steps=["启动方式", "三条说明", "启动 Codex", "打开查看器"],
    teaching=teach(
        ("切到实操", "画面命令已于 2026-10-02 在 Codex 0.160.0 + MiniMax 自定义 provider 下实测，trace 写入 ~/.local/share/claude-tap/traces.sqlite3。需要先装好 uv。命令以录制时的 claude-tap 版本为准；录制用隔离 HOME 启动（做法见 tools/clean-codex.sh 的 --tap），查看器地址以工具输出为准。"),
        ("讲师提示", "API 密钥会经过本地代理；claude-tap 导出与存储时只保留鉴权头前缀。画面上不要出现 config.toml 或完整密钥。学员自己运行算选做，不计入验收，不另做排障文档。"),
    ),
)

scene(
    id="p08", segment="打开请求", layout="prompt-scene", prompt=FIRST_PROMPT,
    label="只说了一句话", title="只说了一句话，模型收到了什么？",
    lead="先发一句和项目无关的话，再打开查看器，看 Codex 为这句话实际发出的请求。我们写的那句只占很小一部分，排在最末尾。",
    html=(
        '<div class="p-pair" style="grid-template-columns:.8fr auto 1.3fr">'
        f'<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">我们写的</span><p class="p-big">一句话</p><p class="p-sub">{len(FIRST_PROMPT)} 个字</p><p class="p-sub" data-reveal="2"><b>排在整份请求的最末尾</b></p></div>'
        '<div class="p-join" data-reveal="1"><span>Codex 发出</span><i class="p-arrow"></i></div>'
        f'<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">这一次请求</span><p class="p-big">远不止这一句</p><p class="p-sub">约 {TBD} token · {TBD} 字符</p></div></div>'
    ),
    steps=["只发一句话", "实际发出", "我们那句在末尾"],
    teaching=teach(
        ("切到实操", "在 p06-tap 启动的 Codex 中提交这句话，等回答结束，打开查看器里这一次请求。录制前确认这一句在冻结版本下不会触发读文件；若触发，换成更短的问候并记下原因。"),
        ("数字来源", "画面上的 token 数和字符数录制时按实际记录替换，标“一次运行”。旧版“34 字读标题任务、约 1.15 万 token”来自另一个 Prompt，不沿用。"),
        ("讲师提示", "画面截图需检查本机路径、用户名和个人 Skills 名称。这一页先让学员看到“远不止这句话”，不急着命名。"),
    ),
)

# ---------- 逐块拆开 ----------
stack = (
    '<style>.x-stack{display:flex;gap:6px;height:64px}.x-stack>div{position:relative;border:2.5px solid var(--c);background:var(--cl);border-radius:10px 8px 11px 9px;'
    'display:flex;align-items:center;justify-content:center;font-size:19px;color:var(--ct);min-width:14px;overflow:hidden;white-space:nowrap}'
    '.x-key{display:flex;justify-content:flex-end;align-items:center;gap:18px;margin:8px 0 0;font-size:18px;color:var(--p-muted)}'
    '.x-key i{display:inline-block;width:9px;height:24px;margin-right:7px;vertical-align:-6px;border:2.5px solid var(--c);background:var(--cl);border-radius:4px 3px 4px 3px}</style>'
)
scene(
    id="p09", segment="逐块拆开",
    label="拆开这份请求", title="拆开这份请求：六块内容",
    lead="Harness 是包在模型外面的那一层程序，Codex 就是一个 Harness：它管着系统指令、工具和上下文，把它们组装成请求。这份请求可以拆成六块：系统指令、工具定义、Skills 列表、环境信息、权限说明，最后才是我们写的话。下面几页逐块回答“如果没有它会怎样”。" + MEASURED,
    html=(
        stack +
        '<div class="p-grid" style="--n:3;gap:12px" data-reveal="0">'
        '<div class="p-box is-soft" data-role="agent"><h3>系统指令</h3><p>怎么做事</p></div>'
        '<div class="p-box is-soft" data-role="tool"><h3>工具</h3><p>能做什么</p></div>'
        '<div class="p-box is-soft" data-role="ctx"><h3>上下文</h3><p>这一次的情况</p></div></div>'
        '<p class="p-sub" data-reveal="0" style="margin:6px 0 14px">Codex 这层 Harness 组装请求时管的三样</p>'
        '<div class="x-stack" data-reveal="1">'
        '<div data-role="agent" style="flex:17">系统指令 ≈1.7 万字符</div>'
        '<div data-role="tool" style="flex:18">工具定义 9 个 ≈1.8 万</div>'
        '<div data-role="ctx" style="flex:12">Skills 列表 ≈1.2 万</div>'
        '<div data-role="ink" style="flex:1.2" title="环境信息"></div>'
        '<div data-role="gate" style="flex:1" title="权限说明"></div>'
        '<div data-role="us" style="flex:.6" title="我们的话"></div></div>'
        '<p class="x-key" data-reveal="1">末尾三小格：<span data-role="ink"><i></i>环境信息</span><span data-role="gate"><i></i>权限说明</span><span data-role="us"><i></i>我们的话</span></p>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:16px">我们写的，只是<b>最右边最小的一格</b></div>'
        '<p class="source-note">下排是讲师日常环境的一次记录，宽度大致对应大小；右侧三小格依次是环境信息（约 600 字符）、权限说明（约 340 字符）和我们的话。' + MEASURED + '</p>'
    ),
    steps=["Harness 管的三样", "逐块标注", "我们那一格"],
    teaching=teach(
        ("数字来源", "字符数来自讲师日常环境的一次 claude-tap 记录：instructions 16979 字符，tools 的 JSON 约 17767 字符，Skills 说明 12431 字符，环境信息约 622 字符，权限说明 341 字符。这几块和用户输入无关，换成第一步那句话仍然成立；录制时按冻结记录核对，有出入就按实际记录替换。Skills 列表大是因为讲师装了较多个人 Skills，p15 会对比隔离环境。"),
        ("讲师提示", "第一次正式出现“Harness”这个词，先指着图说它做了什么，再给名字。这张图是本节的请求解剖地图，后面几页逐块放大，p16a 再整体框起来。"),
    ),
    expressive="按大小比例排开的一条请求带，后续页逐块放大",
)

scene(
    id="p10", segment="逐块拆开",
    label="如果没有系统指令", title="如果没有系统指令，模型不知道自己是谁",
    lead="模型本身只会接着往下写。系统指令告诉它：你是一个在终端里写代码的 Agent，该怎样工作、怎样验证、怎样汇报。Codex 是开源的，它的基础指令就放在公开仓库里。",
    html=(
        '<div class="p-pair" style="grid-template-columns:.9fr auto 1.3fr">'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="0"><span class="p-tag" data-role="gate">没有它</span><p class="p-big" style="font-weight:500">只会接着往下写</p><p class="p-sub">不知道要读仓库、改文件、停下来请示</p></div>'
        '<div class="p-join" data-reveal="1"><span>Codex 基础指令</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">章节目录（摘出几节）</span>'
        '<p style="margin-top:10px;line-height:1.8">工作方式 · 性格<br><b>AGENTS.md 规范</b><br>计划 · 执行任务<br>验证工作 · 汇报进度与结果</p></div></div>'
        '<div class="p-bar" data-reveal="2">同一个模型，换一个 Harness，<b>行为就不同</b></div>'
        '<p class="source-note">来源：openai/codex 仓库 codex-rs/protocol/src/prompts/base_instructions/default.md（Apache-2.0），2026-10-02 核对；章节名为中文意译</p>'
    ),
    steps=["没有它", "Codex 的基础指令", "行为来自这里"],
    teaching=teach(
        ("核对记录", "讲师环境实际发出的指令与 default.md 一致，只少了 Planning 及其示例和 update_plan 两节：0.160.0 默认关闭计划工具，Harness 发送前删掉讲计划工具的章节（core/src/session/mod.rs，prompts/src/update_plan_instructions.rs）。若学员问起，可作为“指令和工具保持一致”的例子。画面以实际请求为准，仓库文件作对照。"),
        ("讲师提示", "只展示章节目录，不大段引用原文；不推断 OpenAI 写这些指令的内部动机。"),
    ),
)

scene(
    id="p11", segment="逐块拆开",
    label="如果没有工具定义", title="如果没有工具定义，模型只能说，不能做",
    lead="工具定义用 JSON 结构写清名字、用途和参数。模型只能可靠地调用被描述过的工具；它只是提出调用，真正执行的是 Harness。" + MEASURED,
    html=(
        '<div class="p-pair" style="grid-template-columns:1.25fr 1fr">'
        '<div class="p-box" data-role="tool" data-reveal="0"><span class="p-tag" data-role="tool">一个工具的定义（只摘几行）</span>'
        '<pre class="p-code" style="margin-top:8px;font-size:17px;line-height:1.55">{ "name": "exec_command",\n  "description": "Runs a command …",\n  "parameters": { "cmd": "string", … } }</pre></div>'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="1" style="align-self:start"><span class="p-tag" data-role="gate">没有它</span><p class="p-big" style="font-weight:500">只能说，不能做</p><p class="p-sub">没描述过的工具，调用不可靠</p></div></div>'
        '<div class="p-bar" data-reveal="1">模型提出调用，<b>Harness 执行</b>，再把结果放回下一次请求</div>'
    ),
    steps=["工具长什么样", "谁在执行"],
    teaching=teach(
        ("讲师提示", "调用了不存在的工具会怎样（read_file 一例），留到 2.2 p24，这里不展开。"),
    ),
)

scene(
    id="p12", segment="逐块拆开",
    label="Skills 只是一份目录", title="Skills 不是整份塞进去，只是一份目录",
    lead="请求里的 Skills 列表只有名字、一句描述和文件位置。模型判断用得上时，再去读那个 SKILL.md 全文。这叫渐进披露；装得越多，目录越长，每次请求都更重。Skill 本身留到第 3 章。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1.2fr auto 1fr">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">请求里的一条</span>'
        '<p class="p-mono" style="margin-top:8px;line-height:1.55;overflow-wrap:anywhere">- skill-creator: Create or update a Codex skill … (file: r0/skill-creator/SKILL.md)</p></div>'
        '<div class="p-join" data-reveal="1"><span>用得上才读</span><i class="p-arrow"></i></div>'
        '<div class="p-box is-dashed" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">SKILL.md 全文</span><p>步骤 · 规则 · 参考资料</p><p class="p-sub">不在这次请求里</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">目录是指针 · 装得越多，<b>每次请求越重</b></div>'
        '<p class="source-note">示例条目是 Codex 自带的 Skill，取自 2026-10-02 隔离环境的一次运行</p>'
    ),
    steps=["目录里的一条", "用到才读全文", "代价"],
    teaching=teach(
        ("讲师提示", "画面只用 Codex 自带 Skill 的条目，不展示讲师个人 Skills 的名字。这里只指出“列在这里”，Skill 的编写与开关留到第 3 章。"),
    ),
)

scene(
    id="p13", segment="逐块拆开",
    label="环境信息与权限说明", title="模型不知道它在哪台电脑、今天几号",
    lead="模型的知识停在训练截止的时候，也看不到我们的电脑。Harness 要把当前目录、Shell、日期、时区，以及这次的沙箱和审批设置写成文字放进请求。权限说明只是文字，真正的限制由本地沙箱执行。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">环境信息</span>'
        '<pre class="p-code" style="margin-top:8px;font-size:17px;line-height:1.55">&lt;cwd&gt;…/work&lt;/cwd&gt;\n&lt;shell&gt;zsh&lt;/shell&gt;\n&lt;current_date&gt;2026-10-02&lt;/current_date&gt;\n&lt;timezone&gt;Asia/Shanghai&lt;/timezone&gt;</pre></div>'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">权限说明（摘一句）</span>'
        '<p class="p-mono" style="margin-top:8px;line-height:1.55">`sandbox_mode` is `read-only`: The sandbox only permits reading files.</p></div></div>'
        '<div class="p-bar" data-reveal="2">权限说明是<b>写给模型看的文字</b> · 真正拦住越界的是本地沙箱</div>'
        '<p class="source-note">取自 2026-10-02 隔离环境的一次运行，路径已缩写</p>'
    ),
    steps=["环境信息", "权限说明", "回扣 1.6"],
    teaching=teach(
        ("核对记录", "环境信息与 AGENTS.md 以 user 角色注入，权限说明和 Skills 列表是 developer 角色；所以不能只按消息角色区分“我写的”和“Harness 加的”。若学员在工具里看到 user 角色的环境信息，用这一点解释。"),
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
        '<li data-reveal="2"><span><b>它说依据在哪</b><small>圈出回答里的文件名和段落</small></span></li></ol></div>'
    ),
    steps=["只读提问", "看回复", "圈出依据"],
    teaching=teach(
        ("切到实操", "在同一个 claude-tap 启动的 Codex 里提交此 Prompt，保留完整记录供 p14 使用。Codex 的回复录制时按实际记录截图，逐句贴标签，高亮它说出的依据文件；画面不预写回复。"),
        ("讲师提示", "Prompt 不出现 PROMPT_V1.md 等文件名，这样“它是怎么知道的”这个问题才是真的。只读，不修改文件。"),
    ),
)

scene(
    id="p14", segment="工具调用",
    label="它是怎么知道的", title="它到底是怎么“知道”的？",
    lead="回到请求记录：Codex 提出读文件的工具调用，Harness 执行后把返回的内容放进下一次请求，模型再据此回答。工具调用和返回也进了 context。再对照回答，看它有没有正确使用这段返回。",
    html=(
        '<div class="p-flow" style="--n:3">'
        '<div class="p-node" data-role="agent" data-reveal="0"><h3>提出调用</h3><p class="p-mono">读 PROMPT_V1.md</p></div>'
        '<div class="p-node" data-role="tool" data-reveal="0"><h3>Harness 执行</h3><p>返回文件内容</p></div>'
        '<div class="p-node" data-role="ctx" data-reveal="1"><h3>下一次请求</h3><p>带上这段返回</p></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="2"><h3>读到了</h3><p>对照返回和回答，看理解对不对</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2"><h3>没读到</h3><p>回答缺了依据，所以要它说明依据</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">下一步从<b>上一步的返回</b>里来</div>'
    ),
    steps=["调用和返回", "进入下一次请求", "对照回答"],
    teaching=teach(
        ("演示分支", "按录制实际选用：\n\n读到了：在记录中指认读取文件的那次工具调用、工具返回，以及下一次请求中出现的文件内容；再对照回答，检查来源与理解是否相符。\n\n没读文件，凭目录名或代码猜：核对完整请求与工具返回后指出依据缺失，这正是 Prompt 要求“说明依据”的原因。\n\n读到了但理解错了，或没找到依据、回答不确定或继续查找：均按实际结果讲。仅凭没有读取某一个文件，不能断言所有来源中都没有依据。保留原始记录，不重跑凑结果。"),
        ("讲师提示", "画面上的文件名按实际读取的文件替换；学员的要求和完成标准可能记在 PROMPT_V1.md 或其他文件里。回扣 1.2 的循环。"),
    ),
)

# ---------- 换个配置 ----------
scene(
    id="p16", segment="换个配置",
    label="换个权限", title="同一句话，换个权限，说明文字也变了",
    lead="第一步那句话，用只读和可写各发一次，权限说明是两段不同的文字；可写时还会列出可写目录，环境信息也随之变长。Codex 按配置从不同模板拼出这段说明。这是讲师示例，可自主尝试。",
    html=(
        '<style>.x-w16{grid-template-columns:1.5fr 1fr}@media(max-width:600px){body[data-mode=scroll] .x-w16{grid-template-columns:1fr}body[data-mode=scroll] .x-w16 code{white-space:pre-wrap;overflow-wrap:anywhere}}</style>'
        '<div class="p-term" data-reveal="0" style="margin-bottom:12px;font-size:17px" data-copy="' + TAP_CMD + ' -s read-only">'
        '<div class="dim">$ uvx claude-tap --tap-client codex --tap-target … -s read-only</div>'
        '<div class="dim">$ uvx claude-tap --tap-client codex --tap-target … -s workspace-write</div></div>'
        '<div class="p-walk x-w16"><div data-reveal="1"><div class="p-src" style="--lh:40px">'
        '<div class="p-fn">permissions instructions <span class="add">+1</span><span class="del">−1</span></div>'
        '<div class="p-ln del"><i>−</i><code>`sandbox_mode` is `read-only`: … only permits reading files.</code></div>'
        '<div class="p-ln add"><i>+</i><code>`sandbox_mode` is `workspace-write`: … editing files in `cwd` …</code></div>'
        '<div class="p-ln add"><i>+</i><code>The writable roots are `…/work`, …</code></div></div></div>'
        f'<ol class="p-notes"><li data-reveal="1"><span><b>{TBD} → {TBD} 字符</b><small>可写时多出可写目录</small></span></li>'
        '<li class="is-ok" data-reveal="2"><span><b>按配置拼装</b><small>仓库里按沙箱模式分模板</small></span></li></ol></div>'
        '<p class="source-note" data-reveal="2">模板位置：openai/codex 仓库 codex-rs/prompts/templates/permissions/</p>'
    ),
    repro=repro([
        ("在课程仓库根目录建一个带 Git 的练习目录；有自己的 .git，Codex 才不会读到课程仓库的 AGENTS.md", "mkdir -p lab-runs/perm && cd lab-runs/perm && git init -q && echo '<h1>hello</h1>' > index.html"),
        ("用课程基线（隔离 HOME + MiniMax）以只读权限跑一次；需要 MINIMAX_API_KEY，浏览器会打开请求面板", f"../../tools/clean-codex.sh --tap -- exec -s read-only \"{FIRST_PROMPT}\" < /dev/null"),
        ("同一句话换成可写权限再跑一次", f"../../tools/clean-codex.sh --tap -- exec -s workspace-write \"{FIRST_PROMPT}\" < /dev/null"),
        ("在面板里对照两次请求：developer 消息中 <permissions instructions> 一段，以及环境信息里的可写目录", None),
    ], note="讲师 2026-10-05 用另一句只读提问按这几步在 Codex 0.160.0 上实测过；权限说明与提问内容无关。字符数随版本和配置变化，只看两段说明的差别。末尾的 < /dev/null 让 codex exec 不再等待额外输入。"),
    steps=["两次启动", "两段说明", "按配置拼装"],
    teaching=teach(
        ("数字来源", "字符数录制时按实际记录替换（2026-10-02 的旧记录约 340 → 670，来自另一个 Prompt，不沿用）。"),
        ("核对记录", "模板位于 codex-rs/prompts/templates/permissions/（sandbox_mode/*.md、approval_policy/*.md），2026-01 起由固定段落改为按配置拼装（提交 87f7226cca）。旧数据来自 codex exec，审批策略为 never；交互界面中的审批文字会不同。"),
        ("命令说明", "已核对：Codex 0.160.0 的 -s/--sandbox 取值为 read-only、workspace-write、danger-full-access；claude-tap 0.1.145 的帮助写明未列出的参数会转发给所启动的客户端。复制按钮复制的是只读那一条，可写时把最后一个参数换掉。会话中途也能在 Codex 界面里改权限，但前面的对话仍在上下文里，对比不干净，所以用启动参数，两次各开新会话。"),
    ),
)

scene(
    id="p15", segment="换个配置",
    label="换个 HOME 目录", title="同一句话，换个干净的 HOME 目录，请求就变了",
    lead="请求由三层来源拼成：个人（~/.codex 的配置、登录、全局 AGENTS.md，~/.agents/skills 的个人 Skills）、项目（仓库里的 AGENTS.md 与 .agents/skills）、本次（目录、日期、权限）。换一个隔离的 HOME 运行，个人那一层就没了，所以你在自己电脑上看到的请求会和讲师的不同。这是讲师的环境对比示例，不要求跟做。" + MEASURED,
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">日常环境</span><p>Skills 列表 ≈1.24 万字符</p><p class="p-sub">含讲师的个人 Skills</p></div>'
        '<div class="p-join" data-reveal="0"><span>隔离 HOME</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ok" data-reveal="0"><span class="p-tag" data-role="ok">隔离环境</span><p>Skills 列表 ≈2 千字符</p><p class="p-sub">只剩 Codex 自带的，请求变短</p></div></div>'
        '<div class="p-grid" style="--n:3;gap:12px;margin-top:14px">'
        '<div class="p-box is-soft" data-role="us" data-reveal="1"><h3>个人</h3><p>~/.codex · ~/.agents/skills</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1"><h3>项目</h3><p>AGENTS.md · .agents/skills</p></div>'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>本次</h3><p>目录 · 日期 · 权限</p></div></div>'
        '<div class="p-bar is-light" data-reveal="1">换掉 HOME，<b>个人那一层</b>就不在请求里了</div>'
    ),
    repro=repro([
        ("沿用上一页的练习目录 lab-runs/perm", "cd lab-runs/perm"),
        ("用你平时的配置经 claude-tap 跑一次", f"uvx claude-tap --tap-client codex -- exec -s read-only \"{FIRST_PROMPT}\" < /dev/null"),
        ("用隔离 HOME 再跑同一句；脚本每次新建一个 HOME，不读你的 ~/.codex，个人 Skills 也不会带进来", f"../../tools/clean-codex.sh --tap -- exec -s read-only \"{FIRST_PROMPT}\" < /dev/null"),
        ("在面板里对照两次请求的 Skills 列表与环境信息", None),
    ], note="只设 CODEX_HOME 不够：个人 Skills 读自 HOME 下的 .agents/skills，要连 HOME 一起换，tools/clean-codex.sh 就是这样做的。各人配置不同，第 2 步的结果会不一样。", label="自己对比一次"),
    steps=["对比两次", "三层来源"],
    teaching=teach(
        ("数字来源", "Skills 列表的大小与提问内容无关，沿用 2026-10-02 两次运行的记录；旧版画面上的首次请求 token 数来自读标题任务，已去掉，录制时如要展示按实际记录补。"),
        ("核对记录", "Codex 0.160.0 源码 codex-rs/ext/skills/src/host_roots.rs：个人 Skills 读自 $HOME/.agents/skills；$CODEX_HOME/skills 为兼容保留的旧位置；项目 Skills 读自仓库 .agents/skills。"),
        ("讲师提示", "不现场重跑，不打开日常环境的 Skills 列表。不要在画面上展示 config.toml 内容，里面可能有 API 密钥。"),
    ),
)

scene(
    id="p16a", segment="小结",
    label="这些加在一起", title="这些加在一起，就是 context",
    lead="系统指令、工具定义、Skills 列表、环境信息、权限说明、我们的话，再加上工具调用和返回，模型这一次能看到的全部内容，就是 context。第 1 章说 context 里该放什么，这里第一次看到它的实际样子；后面四节都回到这份记录。",
    html=(
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">这一次请求</span>'
        '<div class="p-chain" style="margin-top:10px;font-size:20px"><span>系统指令</span><i>·</i><span>工具定义</span><i>·</i><span>Skills 列表</span><i>·</i><span>环境信息</span><i>·</i><span>权限说明</span><i>·</i><span>工具调用和返回</span><i>·</i><span>我们的话</span></div></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:14px"><b>Context</b>：模型这一次能看到的全部内容</div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-dashed" data-role="ink" data-reveal="2"><span class="p-tag" data-role="ink">官方说法</span><p class="p-sub">引用待选定，录制前核对</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="3"><span class="p-tag" data-role="ctx">课程地图</span><p>第 1 章：Agent 循环 · 权限<br><b>第 2 章：Context</b> 点亮<br><span class="p-sub">后面几章还没走到</span></p></div></div>'
    ),
    steps=["整体框起", "叫它 context", "官方说法", "点亮地图"],
    teaching=teach(
        ("讲师提示", "“模型这一次能看到的全部内容”是我们自己的一句话定义。官方对 context 的解释尚未选定：定稿时选一份，引用不超过一两句，写明来源，录制前核对原文后替换虚线框；不自造引文。"),
        ("讲师提示", "最后一行是课程概念地图的保底版本，地图定稿后换成地图局部，只点亮 Context。"),
    ),
    expressive="把 p09 的请求带整体框起来，再接上课程概念地图，点亮 Context 这座城市",
)

# ---------- 小结 ----------
scene(
    id="p18", segment="小结",
    label="暂停自检", title="暂停自检",
    lead="先独立作答，再看解析。答案后面标出回到哪一页。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>从请求记录中指出四类不是你写的内容，缺了其中一类会怎样？</h3>'
        '<div data-reveal="1"><p>系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类说出后果<span class="p-back-to" data-role="agent">回到 拆开这份请求</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>你在自己电脑上用 claude-tap 看同一句话，Skills 列表比讲师的长得多。这说明什么？</h3>'
        '<div data-reveal="2"><p>请求按各人的环境现场拼装：你装的个人 Skills 多，列表就长。数字不同，结构一样<span class="p-back-to" data-role="us">回到 换个 HOME 目录</span></p></div></div></div></div>'
    ),
    steps=["暂停", "第 1 题", "第 2 题"],
)

scene(
    id="p19", segment="小结",
    label="本节小结", title="模型收到的，远不止我们那句话",
    lead="只说一句话，Codex 发出的请求里有系统指令、工具定义、Skills 列表、环境信息和权限说明；工具调用和返回也会进入 context；换权限、换环境，同一句话的 context 就不同。下一节回答：对话多几轮，context 怎么变？",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">一张地图</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">Context<br>= 六块 + 返回</div><p class="p-sub" style="text-align:center">我们的话只是最后一格</p></div>'
        '<div><h3 data-reveal="1">两个认识</h3><ul class="p-exits" style="gap:12px"><li class="is-point" data-reveal="1">工具调用和返回也会进入 context</li><li class="is-point" data-reveal="2">换权限、换环境，context 就不同</li></ul></div>'
        '<div class="p-next" data-reveal="3"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.2 补上项目经历</h3><p>对话多几轮，context 怎么变？</p></div></div></div>'
    ),
    steps=["请求解剖地图", "工具调用也进来", "换配置就不同", "下一节"],
)


lesson.write()

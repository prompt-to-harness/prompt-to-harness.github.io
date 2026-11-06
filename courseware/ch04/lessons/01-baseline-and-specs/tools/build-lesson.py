#!/usr/bin/env python3
"""4.1 接手大项目，还能边聊边改吗：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。A、B 请求现场发送，页面不预写 Agent 的回答。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from html import escape

from lessonkit import NARROW, Lesson, anchor, chapter_map, ref, repro  # noqa: E402

lesson = Lesson(__file__, "4.1", "接手大项目，还能边聊边改吗", summary="核对固定基线，用新人简报和最小用例认识已有工程，再由新增需求引出五层规格。")
scene = lesson.scene

UPSTREAM = "https://github.com/AykutSarac/jsoncrack.com"
RELEASE = "v5.0.0"
SHA = "e99288b4eff060dcd53428f2a3a5c2f28eecffa6"
BRANCH = "course/ch04-baseline"
# 请求只有几行：降低 prompt-scene 的请求框高度，给底部原文链接留出一行
SHORT_PROMPT = "<style>#{id} .prompt{{height:290px}}</style>"
# 锚点图风格：讲师 2026-11-05 从三种样稿中选定阶梯（stairs），4.2–4.5 沿用
ANCHOR = "stairs"
REQUIREMENT = "为 JSON Crack 增加 JSON 对比功能，把不同的地方高亮出来"
# A、B 两条请求，与 STORYBOARD“演示请求草案”一致
PROMPT_A = (
    "我刚接手这个项目。先看 README、项目文档、目录和启动配置，简要介绍它做什么、主要目录各做什么、怎样启动 Web 应用。"
    "关键结论给出处，不确定的直接说明。仅通过阅读文档与配置回答，暂时不要执行安装或启动命令，先不深入实现代码，也不修改文件。"
)
PROMPT_B = (
    "按当前版本仓库里的说明，带我启动 Web 应用，用一段简单 JSON 体验现有功能。告诉我怎样操作、看什么，"
    "区分建议步骤和实际验证到的结果。遇到阻塞先说明，暂时不修改源码或升级依赖。"
)
SAMPLE = '{\n  "name": "Alice",\n  "skills": ["JavaScript", "Python"],\n  "profile": { "city": "Hangzhou" }\n}'
PNPM = "10.20.0"  # 根 package.json 的 packageManager

# ---------- 开篇 ----------
scene(
    id="p01", segment="开篇", layout="lesson-cover",
    label="接手大项目，还能边聊边改吗", title="大项目，还能边聊边改吗？",
    lead="本章接手开源工程 JSON Crack，为新增的 JSON 对比功能准备规格",
    html=(
        chapter_map(1) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">前三章</span><h3>从想法出发</h3><p>个人主页与小游戏，边做边补要求</p></div>'
        '<div class="p-join" data-reveal="1"><span>这一章</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ink" data-reveal="1"><span class="p-tag" data-role="ink">第 4 章</span><h3>接手已有工程</h3><p>JSON Crack：正在维护的开源项目</p></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:14px" data-reveal="2">'
        '<div class="p-box is-soft" data-role="ink"><h3>现有能力</h3><p>把 JSON 转成交互图，浏览结构</p></div>'
        '<div class="p-join"><span>在它上面加</span><i class="p-arrow"></i></div>'
        '<div class="p-box is-dashed" data-role="ink"><h3>要加的功能</h3><p>JSON Diff：比较两份 JSON，高亮不同</p></div></div>'
    ),
    steps=["本章位置", "换一种情境", "现有能力与要加的功能"],
)

# ---------- 固定起点 ----------
scene(
    id="p02", segment="固定起点",
    label="取得并核对基线", title="先拿到同一份起点",
    lead="课件给出上游仓库、Release 和完整 commit。依据它们取得副本，再核对手里的这一份是不是这一版。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;align-items:start">'
        '<div class="p-matrix" data-reveal="0" style="grid-template-columns:minmax(0,.55fr) minmax(0,1.45fr)">'
        '<div class="is-head"><span>课件给出</span><span>内容</span></div>'
        '<div><span>上游仓库</span><span>AykutSarac/jsoncrack.com</span></div>'
        f'<div><span>Release</span><span>{RELEASE}</span></div>'
        f'<div class="is-key"><span>完整 commit</span><span style="font-family:var(--p-mono);font-size:17px;overflow-wrap:anywhere">{SHA}</span></div>'
        '</div>'
        '<div class="p-matrix" data-reveal="1" style="grid-template-columns:minmax(0,.6fr) minmax(0,1.4fr)">'
        '<div class="is-head"><span>本地核对</span><span>应该是</span></div>'
        '<div><span>HEAD</span><span>等于完整 commit</span></div>'
        f'<div><span>分支</span><span>{BRANCH}</span></div>'
        '<div><span>工作区</span><span>干净，没有未提交的改动</span></div>'
        '</div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:22px">Release 帮助识别版本，<b>完整 commit</b> 固定实际使用的代码；后面的结论都对应这一版</div>'
    ),
    steps=["课件给出的三项信息", "取得副本并核对", "为什么固定这一版"],
    refs=[
        ref("JSON Crack 上游仓库", UPSTREAM, "基线"),
        ref(f"Release {RELEASE}", f"{UPSTREAM}/releases/tag/{RELEASE}", "基线"),
        ref("完整 commit", f"{UPSTREAM}/commit/{SHA}", "基线"),
    ],
    repro=repro([
        ("在已有项目之外准备一个空目录，在这里克隆上游仓库并进入仓库目录。", f"git clone {UPSTREAM}.git\ncd jsoncrack.com"),
        (f"确认 Release 标签指向课件给出的完整 commit。输出应为 {SHA}。", f"git rev-parse '{RELEASE}^{{commit}}'"),
        ("从完整 commit 创建本地课程分支。main 会继续前进，标签也可能被移动；完整 commit 指向的代码不会变，所以分支从它创建。", f"git checkout -b {BRANCH} {SHA}"),
        (f"逐项核对：第一行等于完整 commit；第二行是 {RELEASE}，说明当前提交正好是这个 Release；第三行是刚建的课程分支；最后一条没有输出，表示工作区干净。", "git rev-parse HEAD\ngit describe --tags --exact-match\ngit branch --show-current\ngit status --short"),
        ("把核对结果记下来：上游地址、Release、完整 commit、课程分支、工作区状态和核对日期。后面的启动方式、目录介绍和调查结论都对应这份记录。", None),
        ("本地已有这个仓库且做过修改时，保留原目录，不要 reset 或丢弃改动；换一个目录另克隆一份练习副本，再从第 2 步做起。", f"git clone {UPSTREAM}.git jsoncrack-ch04\ncd jsoncrack-ch04"),
    ], note="本流程只取得并核对代码，不安装依赖、不启动；环境要求与启动在后面说明。", label="实验说明：取得并核对固定基线"),
)

# ---------- 认识工程 ----------
scene(
    id="p03", segment="认识工程", layout="prompt-scene", prompt=PROMPT_A,
    label="先要一份新人简报", title="陌生工程，先要一份带出处的简报",
    lead="基线核对后，眼前仍是陌生工程。先让 Agent 读 README、项目文档、目录和启动配置，给出能核对的简报；运行留到下一步。",
    html=(
        SHORT_PROMPT.format(id="p03") +
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>读什么</b><small>README、项目文档、目录和启动配置</small></span></li>'
        '<li data-reveal="1"><span><b>要什么</b><small>做什么、主要目录、怎样启动 Web 应用</small></span></li>'
        '<li data-reveal="2"><span><b>给出处</b><small>关键结论能打开核对，不确定的直接说</small></span></li>'
        '<li class="is-risk" data-reveal="3"><span><b>先不动手</b><small>不安装、不启动、不改文件</small></span></li></ol></div>'
    ),
    steps=["读什么", "要什么", "给出处", "先不动手"],
    refs=[
        ref("GitHub：探索代码库", "https://docs.github.com/en/copilot/tutorials/explore-a-codebase#example-prompts", "方法依据"),
        ref("Claude Code：代码库概览", "https://code.claude.com/docs/en/common-workflows#get-a-quick-codebase-overview", "方法依据"),
    ],
)

scene(
    id="p04", segment="认识工程",
    label="抽查简报的一条依据", title="简报里说的，能对上原文吗？",
    lead="从现场回复里挑一条和启动有关的结论，打开它给的出处，再和这一版仓库里的原文对照。目录用途以文档能支持的为限，函数入口留到 4.2。",
    html=(
        NARROW +
        '<div class="p-walk"><div>'
        '<div class="p-src" data-reveal="1" style="--lh:30px">'
        '<div class="p-fn">README.md（固定版本，第 108–119 行）</div>'
        '<div class="p-ln"><i>108</i><code>3. Install packages</code></div>'
        '<div class="p-ln"><i>111</i><code>   pnpm install</code></div>'
        '<div class="p-ln"><i>114</i><code>4. Run the web app</code></div>'
        '<div class="p-ln"><i>117</i><code>   pnpm dev:www</code></div>'
        '<div class="p-ln"><i>119</i><code><span class="c">   # Running on http://localhost:3000/</span></code></div></div>'
        '<div class="p-src" data-reveal="2" style="--lh:30px;margin-top:12px">'
        '<div class="p-fn">package.json（固定版本，第 15、31–35 行）</div>'
        '<div class="p-ln"><i>15</i><code>"dev:www": "turbo run dev --filter=www",</code></div>'
        '<div class="p-ln"><i>32</i><code>"node": "&gt;=24",</code></div>'
        '<div class="p-ln"><i>33</i><code>"pnpm": "&gt;=10"</code></div>'
        f'<div class="p-ln"><i>35</i><code>"packageManager": "pnpm@{PNPM}",</code></div></div>'
        '</div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>挑一条启动结论</b><small>来自现场回复</small></span></li>'
        '<li data-reveal="1"><span><b>打开它给的出处</b><small>README 的 Development 段</small></span></li>'
        '<li data-reveal="2"><span><b>命令定义在哪</b><small>根 package.json 的脚本和环境要求</small></span></li></ol></div>'
    ),
    steps=["挑一条结论", "对上 README", "对上 package.json"],
    refs=[
        ref("README.md 第 92–119 行", f"{UPSTREAM}/blob/{SHA}/README.md#L92-L119", "固定版本原文"),
        ref("package.json", f"{UPSTREAM}/blob/{SHA}/package.json#L13-L35", "固定版本原文"),
    ],
)

scene(
    id="p05", segment="认识工程", layout="prompt-scene", prompt=PROMPT_B,
    label="带跑一个最小用例", title="让 Agent 带我们用起来一次",
    lead="有了启动依据，再让 Agent 按这一版仓库的说明带跑 Web 应用，用一段简单 JSON 体验现有功能。依赖安装在录制前完成，步骤见实验说明。",
    html=(
        SHORT_PROMPT.format(id="p05") +
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>按这一版的说明</b><small>启动 Web 应用</small></span></li>'
        '<li data-reveal="1"><span><b>一段简单 JSON</b><small>告诉我怎样操作、看什么</small></span></li>'
        '<li data-reveal="2"><span><b>分清两类结果</b><small>建议的步骤 · 实际验证到的</small></span></li>'
        '<li class="is-risk" data-reveal="3"><span><b>遇到阻塞先说明</b><small>不改源码，不升级依赖</small></span></li></ol></div>'
    ),
    steps=["按这一版的说明", "一段简单 JSON", "分清两类结果", "遇到阻塞先说明"],
    refs=[
        ref("OpenAI：测试与审查", "https://learn.chatgpt.com/guides/best-practices#improve-reliability-with-testing-and-review", "方法依据"),
        ref("Claude Code：可运行的检查", "https://code.claude.com/docs/en/best-practices#give-claude-a-check-to-run", "方法依据"),
    ],
    repro=repro([
        ("确认 Node.js 版本不低于 24。", "node -v"),
        (f"安装 pnpm。这个仓库在 package.json 里锁定了 pnpm@{PNPM}，安装时指定同一个版本；不写版本会装上最新的大版本。", f"npm install -g pnpm@{PNPM}"),
        ("如果你习惯用 Node.js 自带的 corepack 管理 pnpm，可以用下面这条代替上一步；下一步同样要核对版本。", "corepack enable pnpm"),
        (f"进入基线副本的根目录，确认 pnpm 版本是 {PNPM}。", "cd jsoncrack.com\npnpm -v"),
        ("安装项目依赖。需要联网，耗时取决于网络；装完后工作区应仍然干净。", "pnpm install\ngit status --short"),
        ("启动 Web 应用。终端出现 Ready 和 http://localhost:3000 后，在浏览器打开编辑器页面；这个终端保持运行。", "pnpm dev:www"),
        ("打开编辑器页面。第一次打开可能先弹出一个说明对话框，关掉后再把示例 JSON 粘进左侧编辑器。", "http://localhost:3000/editor"),
    ], note="本流程只准备运行环境，不修改源码，也不升级依赖。启动受阻时的处理见下一页的实验说明。", label="实验说明：安装 pnpm 与项目依赖"),
)

scene(
    id="p06", segment="认识工程",
    label="这次实际走到了哪一步", title="这次实际走到了哪一步？",
    lead="Agent 建议运行某条命令，说明它提出了一个步骤；命令输出和浏览器画面，才说明这次走到了哪里。浏览器里的输入与观察由讲师完成，按实际执行者记录。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:26px;align-items:start">'
        '<div class="p-code" data-reveal="1"><div class="p-code-head"><span>示例 JSON</span><span>粘进左侧编辑器</span></div>'
        f'<pre style="padding:10px 14px">{escape(SAMPLE)}</pre></div>'
        '<ol class="p-watch">'
        '<li data-reveal="0">命令与输出<small>哪个副本 · 出现 Ready · 地址</small></li>'
        '<li data-reveal="1">输入<small>普通字段、数组、嵌套对象</small></li>'
        '<li data-reveal="2">画面<small>每个字段在图里的哪个节点</small></li></ol></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:20px">命令输出和画面，才说明<b>这次走到了哪里</b></div>'
    ),
    steps=["命令与输出", "输入", "画面"],
    repro=repro([
        ("保留完整的错误输出，记下执行的命令和所在目录，先不要急着换命令重试。", None),
        ("核对环境：Node.js 与 pnpm 的版本，是否在基线副本的根目录，工作区是否干净。", "node -v\npnpm -v\npwd\ngit status --short"),
        ("提示 3000 端口被占用时，先查是哪个进程在用，关掉它或换一个空闲端口再试。", "lsof -i :3000"),
        ("Next.js 提示“inferred your workspace root”时，通常是上级目录里另有 lockfile；只要后面出现 Ready，就可以继续。", None),
        ("不要通过修改锁文件、升降依赖或改源码来绕过问题；这一节的任务是认识固定基线。", None),
        ("暂时跑不起来时，先跟着课件画面看懂演示；后面的规格内容不依赖本地运行。", None),
    ], label="实验说明：启动受阻时怎么做"),
)

# ---------- 新增需求 ----------
scene(
    id="p07", segment="新增需求",
    label="初始需求", title="要加的功能，说清楚了吗？",
    lead="看过现有能力，再看本章唯一的初始需求。它指向了具体产品和改动方向，下面四个问题还没有答案。",
    html=(
        f'<div class="p-box" data-role="us" data-reveal="0" style="padding:18px 24px"><span class="p-tag" data-role="us">初始需求</span>'
        f'<h3 style="font-size:32px;margin:10px 0 0">“{REQUIREMENT}”</h3></div>'
        '<div class="p-grid" style="--n:4;margin-top:20px" data-reveal="1">'
        '<div class="p-box is-dashed" data-role="ink"><h3>谁在用？</h3><p>什么场景下比较两份 JSON</p></div>'
        '<div class="p-box is-dashed" data-role="ink"><h3>什么算不同？</h3><p>换顺序、换类型、删字段</p></div>'
        '<div class="p-box is-dashed" data-role="ink"><h3>怎样检查？</h3><p>给定输入，结果对不对</p></div>'
        '<div class="p-box is-dashed" data-role="ink"><h3>怎么改？</h3><p>在现有工程里选什么改法</p></div>'
        '</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:20px">方向已经明确，还不足以<b>直接动手</b></div>'
    ),
    steps=["一句需求", "四个还不知道的问题", "还不能直接动手"],
)

scene(
    id="p08", segment="新增需求",
    label="长 Prompt 能当规格吗", title="把 Prompt 写到三千字，行不行？",
    lead="长 Prompt 做完四件事，也能当规格用。但这类工作往往伴随长上下文，压缩之后，早先写下的约束容易丢失或变淡。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1.1fr">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">可以</span><h3>做完四件事的长 Prompt</h3>'
        '<ul style="margin:8px 0 6px;padding-left:22px;font-size:21px;line-height:1.6"><li>事实核验</li><li>规则批准</li><li>验收设计</li><li>实施拆分</li></ul>'
        '<p>字数写长，不会自动完成它们</p></div>'
        '<div class="p-join" data-reveal="1"><span>多轮补充<br>和执行</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">不推荐</span><h3>长上下文被压缩之后</h3>'
        '<div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;font-size:19px">'
        '<span class="p-item">约束：对象键换序……</span>'
        '<span class="p-item" style="opacity:.45;border-style:dashed">约束：数组插入……</span>'
        '<span class="p-item" style="opacity:.25;border-style:dashed;text-decoration:line-through">约束：删除的字段……</span>'
        '</div><p style="margin-top:8px">少了哪一条，事后不容易发现</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:18px">把约定写成<b>能单独查阅、按版本维护的文件</b>：SDD，规格驱动开发</div>'
        '<p class="source-note">右栏为课程自绘示意，不代表某个产品的具体压缩方式</p>'
    ),
    steps=["做完四件事也能用", "长上下文里的风险", "写成文件：SDD"],
)

# ---------- 五层规格 ----------
scene(
    id="p09", segment="五层规格",
    label="五层规格", title="五份文档，各回答一个问题",
    lead="围绕同一句 JSON Diff 需求，依次展开 Brief、Spec、Acceptance、Plan、Tasks。各层的具体内容在 4.2–4.5 逐步形成。",
    html=anchor(ANCHOR, reveal_each=True, loops=True, loop_reveal=5),
    steps=["Brief", "Spec", "Acceptance", "Plan", "Tasks", "两条返回回路"],
)

scene(
    id="p10", segment="五层规格",
    label="对应与返回", title="写好以后，怎么对上？",
    lead="验收案例对应需求，实现任务指向相关需求和验收。发现问题时，先判断它在决定什么，再回到对应的层。",
    html=(
        '<div class="p-flow" style="--n:3;column-gap:60px" data-reveal="0">'
        '<div class="p-node" data-role="ctx"><h3>实现任务</h3><p>Tasks</p></div>'
        '<div class="p-node" data-role="ctx"><h3>验收案例</h3><p>Acceptance</p></div>'
        '<div class="p-node" data-role="ctx"><h3>需求规则</h3><p>Spec</p></div>'
        '</div>'
        '<p style="font-size:19px;color:var(--p-muted);margin:6px 0 0" data-reveal="0">箭头表示“对应到”：改一条需求时，能找到要复核的案例和任务</p>'
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:16px" data-reveal="1">'
        '<div class="p-box" data-role="us"><h3>案例暴露规则没定</h3><p>回 Spec，由人决定，再同步验收</p></div>'
        '<div class="p-join"><b>或</b></div>'
        '<div class="p-box" data-role="ink"><h3>只是改法要调</h3><p>回 Plan，核对相关任务</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:16px">Spec 写<b>用户能观察到的行为</b>，Plan 写<b>代码怎么改</b></div>'
    ),
    steps=["对应关系", "两种返回", "行为与改法分开"],
)

# ---------- 自检与交接 ----------
scene(
    id="p11", segment="自检与交接",
    label="三个问题放哪一层", title="这三个问题，各放哪一层？",
    lead="先判断每句话正在决定什么，再放进对应的层。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>“谁需要这个功能？”</h3><div data-reveal="1"><p>Brief：说明使用者、场景和目标</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>“键换顺序算不算变？”</h3><div data-reveal="2"><p>Spec：由人决定可观察行为，随后再配验收案例</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>“先改哪里？”</h3><div data-reveal="3"><p>Plan：结合现有代码选择方案<br><a href="#p09">回看五层规格</a></p></div></div></div>'
        '</div>'
    ),
    steps=["三个问题", "谁需要", "键换顺序", "先改哪里"],
)

scene(
    id="p12", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="固定起点、认识工程，再把新增需求的问题放回五层。下一节从需求原文开始，形成 Brief。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3><div class="p-star" style="width:250px;font-size:24px">先问在决定什么<br>再放进对应层</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px"><li class="is-pass">固定基线记录</li><li class="is-pass">带出处的新人简报</li><li class="is-pass">运行或阻塞记录</li><li class="is-pass">五层关系图</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>4.2 贴上需求原文，就能直接写吗？</h3><p>从飞书里的需求笔记开始</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()

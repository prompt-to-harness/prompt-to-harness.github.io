#!/usr/bin/env python3
"""2.2 只改一处，并证明改好了：本节唯一的内容源，生成 lesson.js 与 script.md。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, MEASURED, NARROW, chapter_map, ref, teach  # noqa: E402

lesson = Lesson(__file__, "2.2", "只改一处，并证明改好了", summary="先弄清模型、会话、文件与进程各记住什么，再选会话；用当前证据让 Codex 只改项目区，并用三种视口、键盘和构建证明没弄坏别的。")
scene, KICK = lesson.scene, lesson.kick


REPO = "数据来自 openai/codex 仓库（Apache-2.0）的提交历史，2026-10-02 核对、10-03 复核、10-05 在子模块 third_party/codex 逐版重算；大小为文件字节数。"

# openai/codex 中系统指令的固定版本链接（完整哈希，内容不随 main 变化）。
# 本仓库把 openai/codex 作为子模块放在 third_party/codex，固定在 PINNED，可离线对比。
GH = "https://github.com/openai/codex"
PINNED = "b741e480e203f037ca726bc2a76d99a8e8668e66"
V160 = "a956835d020762cb2b570053af06f643a11c0ecc"  # rust-v0.160.0，讲师机器上的 codex-cli 版本
OLD_PROMPT = "codex-rs/core/prompt.md"  # 2026-01-19 起搬到 BASE_PROMPT
BASE_PROMPT = "codex-rs/protocol/src/prompts/base_instructions/default.md"
PROMPT_VERSIONS = [  # (标签, 提交, 路径)
    ("2025-04 首版", "31d0d7a305305ad557035a2edcab60b6be5018d8", OLD_PROMPT),
    ("2025-08-05", "d31e149cb1b4439f47393115d7a85b3c8ab8c90d", OLD_PROMPT),
    ("2025-08-07 重写后", "81b148bda271615b37f7e04b3135e9d552df8111", OLD_PROMPT),
    ("2026-10-03 当前", PINNED, BASE_PROMPT),
]


def blob(commit, path):
    return f"{GH}/blob/{commit}/{path}"



ROUND_PROMPT = """Goal：在项目区呈现我的项目经历，解决反馈第 3 条。
Context：见 docs/evidence/CH02_VIBE_ITERATIONS.md；
项目卡不跳转是既有决定，本轮不改。
项目内容（原文照用）：<每行一条：项目名称：一句描述>
Constraints：只用上面的文字，不补写；不加链接、依赖；
只改项目区；先说计划，等我确认再改。
Done when：360/768/1440 宽可读；Tab 顺序不变；
build 成功；diff 只含项目区。"""

RECORD = """## 第 1 轮

- 问题证据：反馈第 3 条；1440×900 下项目区只有一句“记录课程练习”
- 本轮目标：在项目区呈现我提供的三条项目经历
- 会话选择与理由：
- 改动文件：
- 验证结果（三种视口 / 键盘 / build）：
- 剩余问题：
- 回退点：本轮开始前的最后一次提交（git log --oneline -1；2.3 提交后更新）"""


# ---------- 三种状态 ----------
scene(
    id="p20", segment="三种状态", layout="lesson-cover",
    label="开始改之前", title="先决定，在哪个会话里改", kicker="第 2 章 · 2.2 · 开篇",
    lead="继续 2.1 的会话、恢复它，还是新建一个？",
    html=(
        chapter_map(2) +
        '<div class="p-grid" style="--n:3;gap:16px;margin-top:22px">'
        '<div class="p-box" data-role="agent" data-reveal="1"><h3>继续</h3><p>接着 2.1 那个会话往下说</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><h3>恢复</h3><p>关掉以后再把它找回来</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="1"><h3>新建</h3><p>开一个干净的会话</p></div></div>'
        '<p class="p-hand" data-reveal="2">要选对，先弄清：会话里到底存了什么？</p>'
    ),
    steps=["回到地图", "三个选项", "本节问题"],
    script=[
        "2.1 我们没改一行代码，留下了一份反馈清单，选定了第 3 条：看不出你做过什么。这一节就来改它，而且只改它。",
        "动手之前，先面对一个很日常的选择。2.1 那个 Codex 会话还开着，我们可以继续在里面说；也可以关掉以后再恢复；或者干脆新建一个。",
        "怎么选？凭感觉不行。得先弄清楚，一个会话里到底保存了什么，多次请求之间又发生了什么。2.1 我们拆开看了一次请求，这一节看多次。",
    ],
    teaching=teach(("讲师提示", "开篇地图沿用 2.1 的五节，2.1 标为已完成。")),
)

scene(
    id="p21", segment="三种状态",
    label="三种状态", title="模型、会话、文件与进程，各记住什么", kicker=KICK + "三种状态",
    lead="模型本身不保存任何状态；会话由 Harness 保存，每次请求时重发；文件和运行中的程序独立存在于电脑上。2.1 开场要重启开发服务器，就是第三栏的事。",
    html=(
        '<div class="p-grid" style="--n:3;gap:16px">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">模型</span><p class="p-big">什么都不记，只看这一次请求</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">会话</span><p class="p-big">Harness 保存，下次重发</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="0"><span class="p-tag" data-role="tool">文件与进程</span><p class="p-big">在电脑上，与会话无关</p></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>2.1 开场</h3><p>关掉终端 → 开发服务器停了 → 代码文件还在</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2"><h3>换个目录恢复会话</h3><p>它仍答得出上轮读的是 index.html<br>可新目录里没有这个文件</p></div></div>'
        '<div class="p-bar" data-reveal="2">恢复对话，<b>不等于恢复文件或服务</b></div>'
    ),
    steps=["三栏", "开场那一幕", "恢复会话的实验"],
    script=[
        "先把三样东西分开。第一，模型：它什么都不记，每次只看这一次请求里的内容。第二，会话：由 Harness 保存，也就是 Codex 把我们说过的话、它做过的事存下来，下一次请求时再发出去。第三，文件和运行中的程序：它们在我们的电脑上，和会话没有关系。",
        "回想 2.1 开场：隔了一天，本地地址打不开，重新运行 npm run dev 才好。现在可以给它归类了：开发服务器是一个运行中的程序，属于第三栏。关掉终端它就停了，代码文件还在硬盘上。",
        "讲师做过一个实验：在另一个目录里，用 codex exec resume 恢复 2.1 那种只读任务的会话，再问它上一轮读的是什么文件。它答得出来：index.html。可新目录里根本没有这个文件。会话被恢复了，但文件和服务不会跟着回来。所以恢复对话，不等于恢复文件或服务。",
    ],
    teaching=teach(
        ("核对记录", "Codex 0.160.0，MiniMax 自定义 provider：在另一目录 codex exec resume <会话 id>，模型仍答出 index.html；Harness 追加了新的权限说明和新的环境信息，cwd 已是新目录。--last 默认只在当前目录的会话中挑选，--all 取消过滤。见提案“第二轮实测”。"),
        ("讲师提示", "这一页只建立三栏。会话里“存了什么、怎么发”下一页用请求对比展示。"),
    ),
)

scene(
    id="p22", segment="三种状态",
    label="会话保存了什么", title="下一次请求，带上了前面的全部历史", kicker=KICK + "三种状态",
    lead="把同一次任务里相邻两次请求放在一起比：后一次把前一次的内容原样带上，再接上模型的工具调用和工具返回。模型之所以“接得上话”，是因为 Harness 每次都把历史重新发给它。" + MEASURED,
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:40px">'
        '<div class="p-fn">第 1 次 → 第 2 次请求的 input <span class="add">+2</span></div>'
        '<div class="p-ln"><i>1</i><code>developer · 权限说明、Skills 列表</code></div>'
        '<div class="p-ln"><i>2</i><code>user · 环境信息</code></div>'
        '<div class="p-ln"><i>3</i><code>user · 我们的那句话</code></div>'
        '<div class="p-ln add" data-reveal="1"><i>4</i><code>模型 · 调用 exec_command: cat index.html</code></div>'
        '<div class="p-ln add" data-reveal="1"><i>5</i><code>工具返回 · index.html 的内容</code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>前 3 项原样重发</b><small>不是“接着上次”，而是从头再发</small></span></li>'
        '<li data-reveal="1"><span><b>新增在末尾</b><small>调用和返回都进了历史</small></span></li>'
        '<li class="is-risk" data-reveal="2"><span><b>只在这次运行里看到</b><small>MiniMax 配置下 store 为 false</small></span></li></ol></div>'
        '<p class="source-note">示意图按记录结构整理，条目名为中文概括。' + MEASURED + '</p>'
    ),
    steps=["第 1 次请求", "第 2 次多了什么", "适用范围"],
    script=[
        "打开 claude-tap 的查看器，选同一次任务里相邻的两次请求做对比。左边是第一次请求的 input，一共三项：权限说明和 Skills 列表，环境信息，还有我们那句话。",
        "第二次请求，前三项原样都在，末尾多了两项：模型上一次提出的工具调用，cat index.html；还有工具返回的文件内容。模型并没有“记得”刚才做了什么，是 Harness 把整段历史重新发了一遍。",
        "有一个范围要说清：这是我们在这一次运行里看到的。讲师用的是 MiniMax 自定义 provider，请求里 store 是 false，也没有引用上一次响应的编号，所以每次都带上完整输入。换别的服务或登录方式，细节可能不同。",
    ],
    teaching=teach(
        ("核对记录", "MiniMax 配置下请求体 store 为 false、没有 previous_response_id；OpenAI 官方 provider 与 ChatGPT 登录未核实（决定 28 不作为本章核实项）。前 3 项的角色划分见 2.1 p13 的核对记录。"),
        ("讲师提示", "画面用 claude-tap 的相邻请求 diff 视图截图替换示意图；截图前检查路径和个人 Skills 名称。"),
    ),
)

scene(
    id="p23", segment="代价与不确定",
    label="每次都重发，贵不贵", title="每次都重发，代价是 token 和注意力", kicker=KICK + "代价与不确定",
    lead="一次提问产生了 4 次请求，input 从 3 项涨到 10 项。重复的开头部分可以被缓存，算起来更便宜；但模型每次仍要读完整段历史，注意力不会因为缓存而变多。" + MEASURED,
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)">'
        '<div class="is-head" data-reveal="0"><span>请求</span><span>input 项数</span><span>缓存命中</span></div>'
        '<div data-reveal="0"><span>第 1 次</span><span>3 项</span><span>约 1 千 token</span></div>'
        '<div data-reveal="0"><span class="p-sub">第 2、3 次</span><span>未记录</span><span>未记录</span></div>'
        '<div data-reveal="0" class="is-key"><span>第 4 次</span><span>10 项</span><span>约 1.18 万 token</span></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>token</h3><p>重复的前缀能被缓存，按更低的价格算</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2"><h3>注意力</h3><p>历史越长，早先的需求越容易被淹没</p></div></div>'
        '<p class="source-note">' + MEASURED[:-1] + '</p>'
    ),
    steps=["4 次请求", "token 与缓存", "注意力"],
    script=[
        "既然每次都重发，那贵不贵？看那次只读提问的记录：我们问了一句，Codex 一共发了 4 次请求。input 从第一次的 3 项，涨到第四次的 10 项。缓存命中从大约 1 千 token，涨到大约 1.18 万。",
        "代价有两种。第一种是 token。好在重复的开头部分可以被缓存：服务端认出“这一段上次发过”，就按更低的价格算。所以历史变长，账单不一定同比例变高。具体怎么计费，看你用的服务，这里不展开。",
        "第二种代价是注意力，缓存帮不上忙。模型每次都得把整段历史读一遍，历史越长，早先说过的需求越容易被淹没在大量工具输出里。这是我们挑会话时真正要考虑的。",
    ],
    teaching=teach(
        ("数字来源", MEASURED + " 中间两次请求的数字未在提案中记录，画面写“未记录”，不推断它们的走势；录制时可从 claude-tap 记录补齐。"),
        ("讲师提示", "前缀缓存的计费细节放配套页，主课只讲“重复部分更便宜，注意力不变”。不要据此断言每次费用一定增加。"),
    ),
)

scene(
    id="p24", segment="代价与不确定",
    label="再问一次，一样吗", title="同一个问题再问一次，过程不一样", kicker=KICK + "代价与不确定",
    lead="同一句只读提问跑了两次：第一次 4 次请求，中途还调用了一个不存在的工具；第二次只用了 2 次请求。模型的输出有不确定性，所以判断要看这一次的证据，而不是“上次是这样”。" + MEASURED,
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">第一次运行</span><p class="p-big">4 次请求</p><p class="p-sub">先调用 read_file 报错，再改用 cat</p></div>'
        '<div class="p-join" data-reveal="1"><span>同一句话</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ink" data-reveal="1"><span class="p-tag" data-role="ink">第二次运行</span><p class="p-big">2 次请求</p><p class="p-sub">直接读到文件，没有报错</p></div></div>'
        '<div class="p-bar" data-reveal="2">看这一次的证据，<b>不靠“上次是这样”</b></div>'
        '<p class="source-note">' + MEASURED[:-1] + '</p>'
    ),
    steps=["第一次", "第二次", "结论"],
    script=[
        "还有一件事。2.1 里我们看到，模型调用了一个不存在的 read_file 工具，报错以后才改用 cat。那一次，一句提问产生了 4 次请求。",
        "同一句话，讲师又跑了一次。这次只用了 2 次请求，直接读到了文件，没有报错。",
        "模型的输出有不确定性，过程也会不一样。所以 2.1 我们说数字只说明结构；改代码也一样，“上次它这么做没问题”不能当证据，每一轮都要看这一轮的 diff 和检查结果。",
    ],
)

scene(
    id="p25", segment="请求会变",
    label="Codex 自己也在变", title="不只输出会变，系统指令也在变", kicker=KICK + "请求会变",
    lead="Codex 的通用系统指令在开源仓库里有完整历史。它没有一路变短：2025 年 8 月一次重写后变成原来的两倍多，此后在 21–24 KB 间波动；权限说明后来拆成按配置拼装的模板。" + REPO,
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="ink" data-reveal="0"><span class="p-num">2025-04</span><h3>≈5.7 KB</h3><p>首版</p></div>'
        '<div class="p-node" data-role="ink" data-reveal="0"><span class="p-num">2025-08-05</span><h3>≈9.8 KB</h3><p>逐步补充</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="1"><span class="p-num">2025-08-07</span><h3>≈23.6 KB</h3><p>重写：工作方式、性格、汇报格式</p></div>'
        '<div class="p-node" data-role="ink" data-reveal="1"><span class="p-num">之后</span><h3>21–24 KB</h3><p>2026-01 约 20.9 KB</p></div></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2" style="margin-top:18px"><h3>2026-01-12 · 权限说明拆出去</h3><p>从固定段落改为按沙箱模式、审批策略分别放模板，运行时拼装（2.1 p16 看过的那段文字）</p></div>'
        + '<p class="source-note">' + REPO[:-1] + '</p>'
    ),
    refs=[ref(label, blob(c, path), "原文") for label, c, path in PROMPT_VERSIONS] + [
        ref("重写", f"{GH}/commit/81b148bda271615b37f7e04b3135e9d552df8111", "diff"),
        ref("权限拆出", f"{GH}/commit/87f7226cca12df04596938f58625de84e976309a", "diff"),
    ],
    steps=["早期", "一次重写", "权限说明拆出"],
    script=[
        "不只是模型的输出会变，Codex 自己也在变。它是开源的，系统指令的每一次修改都留在仓库历史里。我们看通用指令文件的大小：2025 年 4 月首版大约 5.7 KB，到 8 月 5 日补到大约 9.8 KB。",
        "两天后，8 月 7 日，有一次提交把它整个重写，一下变成大约 23.6 KB，新增了工作方式、性格、计划示例、汇报格式这些章节。此后一直在 21 到 24 KB 之间来回，到 2026 年 1 月大约 20.9 KB。所以它不是越写越短，也不是越写越长。",
        "2026 年 1 月还有一次结构变化：权限说明从固定段落里拆出去，按沙箱模式和审批策略分别放模板，运行时再拼。2.1 我们对比只读和可写时看到的那段文字，就是这么来的。同样是权限说明，版本变化后，组装进请求的方式也变了。",
    ],
    teaching=teach(
        ("核对记录", "首版到 2025-08-05 的大小、重写提交 81b148bda2（“update system prompt”）、按模型分文件提交 916fdc2a37、权限模板化提交 87f7226cca，见提案“Codex 开源仓库中的系统指令”。通用指令当前位于 codex-rs/protocol/src/prompts/base_instructions/default.md；2026-10-03 复核 main（b741e48）大小为 20903 字节。"),
        ("原文与 diff", "每个版本的原文和两次关键提交的 diff，在画面底部有直达链接（固定到完整提交哈希）。重写那次提交 81b148bda2 只改了 prompt.md 一个文件（+270 −80），GitHub 的提交页就是“重写前 vs 重写后”的文件 diff。\n\n本仓库把 openai/codex 作为子模块放在 third_party/codex（固定在 b741e48），可以离线对比：git submodule update --init --filter=blob:none third_party/codex 取下子模块，再运行 git -C third_party/codex diff 31d0d7a305:codex-rs/core/prompt.md b741e48:codex-rs/protocol/src/prompts/base_instructions/default.md 看首版到当前的全部变化。文件在 2026-01-19 从 codex-rs/core/prompt.md 搬到现在的位置，所以早期版本要用旧路径。"),
        ("切到实操", "可在录制时打开重写那次提交的 GitHub 页面，滚动展示新增的章节标题；不逐行读。"),
        ("讲师提示", "这一页与下一页是“版本线”示例，看懂即可，不要求学员背数字；想看原文的学员从画面底部的链接打开。"),
    ),
)

scene(
    id="p26", segment="请求会变",
    label="换个模型名", title="同一个 Codex，换个模型名，指令换了一份", kicker=KICK + "请求会变",
    lead="Codex 按模型名在自带的模型目录（models.json）里查指令。讲师用 claude-tap 抓了两次请求，配置相同，只改模型名：目录里没有的 MiniMax-M3 拿到通用指令，目录里的 gpt-5.5 拿到为它单独写的一份。" + REPO,
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">MiniMax-M3 · 不在目录 · 通用指令</span>'
        '<p style="margin-top:8px;line-height:1.6">工作方式 · 性格 · <b>AGENTS.md 规范</b><br>响应 · 执行任务 · <b>验证工作</b> · 目标与精度<br>进度更新 · 汇报 · <b>工具指南</b></p>'
        '<p class="p-sub">约 1.7 万字符 · “You are a coding agent running in the Codex CLI”</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">gpt-5.5 · 目录里的专属指令</span>'
        '<p style="margin-top:8px;line-height:1.6">性格 · 通用 · <b>工程判断</b> · <b>前端指南</b><br>编辑约束 · 特殊请求 · 自主与坚持<br><b>与用户协作</b> · 格式规则 · 最终回答</p>'
        '<p class="p-sub">约 2.1 万字符 · “You are Codex, a coding agent based on GPT-5”</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">换一个模型，Codex 配给它的<b>指令内容也会变化</b></div>'
        '<p class="source-note">两份指令都是 2026-10-05 在隔离 HOME 下用 claude-tap 抓到的真实请求（Codex 0.160.0，--tap-export-prompt 本地应答、不访问上游）；章节名为中文意译。抓到的内容与源码只差 update_plan 相关段落：codex exec 下未启用 update_plan，Codex 会删去这些段落。</p>'
    ),
    refs=[
        ref("通用指令 prompt.md", blob(V160, "codex-rs/models-manager/prompt.md"), "0.160.0 源码"),
        ref("模型目录 models.json", blob(V160, "codex-rs/models-manager/models.json"), "0.160.0 源码"),
    ] + [ref(t, blob(PINNED, "codex-rs/core/" + f), "2026-01 前按文件分模型（已不使用）", kind="read") for t, f in (("GPT-5.2", "gpt_5_2_prompt.md"), ("GPT-5.2-Codex", "gpt-5.2-codex_prompt.md"))],
    steps=["不在目录的模型", "目录里的 gpt-5.5", "模型与指令配置"],
    script=[
        "Codex 还有一份模型目录，叫 models.json，它按模型名在里面查该发哪份指令。讲师用 claude-tap 抓了两次请求，配置完全一样，只改了模型名。左边写的是 MiniMax-M3，目录里没有，Codex 就发通用指令，开头一句是“You are a coding agent running in the Codex CLI”，大约 1.7 万字符。章节有工作方式、性格、AGENTS.md 规范、验证工作、工具指南这些，2.1 我们见过。",
        "右边只把模型名改成 gpt-5.5，目录里有它，Codex 就换成为它单独写的一份，开头变成“You are Codex, a coding agent based on GPT-5”，大约 2.1 万字符。章节也不一样：多了工程判断、前端指南、与用户协作；AGENTS.md 规范、验证工作和工具指南这几节，没有单独出现。",
        "两次请求只差一个模型名，指令就换了一份。结合上一页的版本历史，我们看到，版本和模型配置都会影响 Codex 发出的请求。接下来回到本轮修改：旧会话里已经积累了反馈和检查结果，压缩一下继续，够不够？",
    ],
    teaching=teach(
        ("核对记录", "2026-10-05 本机 codex-cli 0.160.0，隔离 HOME，自定义 provider 写法与 MiniMax 相同、密钥为假值，claude-tap 0.1.145 以 --tap-export-prompt 本地应答，不访问上游；codex exec -s read-only，各 1 次请求。MiniMax-M3：instructions 16979 字符，与 2.1 的记录一致，等于 rust-v0.160.0 的 models-manager/prompt.md 删去 Planning、Examples、update_plan 三段（逐字相同）。gpt-5.5：21299 字符，等于 models.json 中 gpt-5.5 的 instructions_template 删去一行更新清单状态的说明。删段落的规则见 codex-rs/prompts/src/update_plan_instructions.rs。按模型名查目录的逻辑见 models-manager/src/manager.rs 的 construct_model_info_from_candidates（最长前缀匹配，与 provider 无关）。"),
        ("原文与 diff", "源码链接在画面底部，固定在 rust-v0.160.0（a956835d02）。复现：建临时 HOME，在 .codex/config.toml 写 model 与自定义 provider，运行 HOME=<临时目录> uvx claude-tap --tap-client codex --tap-target <provider 地址> --tap-export-prompt <输出.md> -- exec --skip-git-repo-check -s read-only \"Reply with OK only.\" < /dev/null，只改 model 再跑一次，对比两份导出的 instructions。把模型名写成目录里的名字只用于查看请求：真实发给 MiniMax 时，它不认识这个模型名。2026-01 之前 Codex 按文件给模型配指令（codex-rs/core/gpt_*_prompt.md），这些文件仍留在仓库里但已无代码引用，链接放在延伸阅读。"),
        ("切到实操", "录制时现场跑这两次，或打开 claude-tap 导出的两份 Markdown 并排展示 instructions 开头和章节；画面截图前检查路径与用户名。"),
        ("讲师提示", "只讲两份指令可见的差异。文件长度和目录没有提供模型能力评测或设计动机的证据；如另讲这些问题，应补相应证据。"),
    ),
)

scene(
    id="p27", segment="压缩与交接",
    label="压缩一下继续", title="压缩以后，模型看到的是摘要", kicker=KICK + "压缩与交接",
    lead="主线会话通常不够长，压缩单独做一个小实验看。在讲师的配置下，/compact 让模型自己写一份“交接摘要”。按 Codex 源码，压缩后的历史只留用户消息、这份摘要和重新插入的初始上下文，工具调用和返回全部移走；原始证据还剩多少，取决于摘要怎么写。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">压缩前</span>'
        '<p style="line-height:1.7">我们的提问 · 模型的工具调用<br><b>工具返回的原文</b>（文件内容、命令输出）<br>模型的回答</p></div>'
        '<div class="p-join" data-reveal="1"><span>/compact</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">压缩后</span>'
        '<p style="line-height:1.7">我们发过的用户消息<br><b>一份交接摘要</b><br>初始上下文（重新插入）</p></div></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2" style="margin-top:14px"><h3>讲师跑了 5 次</h3><p>grep 的 10 行原文：4 次摘要只留下行号或计数，追问时模型答不出；1 次摘要整段抄了下来。我们写下的决定是用户消息，5 次原文都在</p></div>'
        '<p class="source-note">压缩后保留什么由源码决定（core/src/compact.rs）；摘要内容来自讲师独立实验，2026-10-05，Codex 0.160.0，clean-codex.sh（MiniMax，本地压缩），见 ch02/materials/compact</p>'
        '<p class="source-note">自己重复（选做）：在课程仓库根目录运行 <code>courseware/ch02/materials/compact/setup.sh</code>，再 <code>cd lab-runs/compact-lab</code>，用 <code>../../tools/clean-codex.sh --tap</code> 启动 Codex，依次输入同目录 <code>steps.txt</code> 的五行。需要 MiniMax 密钥；完整说明和讲师 5 次运行的汇总见该目录的 README.md。</p>'
    ),
    refs=[
        ref("压缩逻辑 compact.rs", blob(V160, "codex-rs/core/src/compact.rs"), "0.160.0 源码"),
        ref("压缩提示 prompt.md", blob(V160, "codex-rs/prompts/templates/compact/prompt.md"), "0.160.0 源码"),
    ],
    steps=["压缩前", "压缩后", "丢掉了什么"],
    script=[
        "如果不想新建会话，可以在 Codex 里输入 /compact 压缩一下再继续。我们的主线会话通常不够长，所以单独做一个小实验：先让 Codex 读两个文件，再跑一次 grep、把输出原样贴出来，最后写下一条我们自己的决定。这时历史里有我们的提问、模型的工具调用、工具返回的原文，还有模型的回答。",
        "然后输入 /compact。压缩做了什么？在讲师的配置下，Codex 让模型按一段固定提示，写一份给“下一个接手的模型”的交接摘要：进度、关键决定、约束、下一步。压缩后的历史只剩三样：我们发过的用户消息，这份摘要，和重新插入的初始上下文。这一步每次都一样，是 Codex 源码写定的：工具调用、工具返回和模型的回答，都不会留下。",
        "那原始证据还剩多少？要看摘要怎么写。讲师用同样的步骤跑了 5 次：grep 输出了 10 行，其中 4 次摘要只留下行号或“共 10 处匹配”，我们追问第 1 行是什么，模型说手里没有原文，写不出来；只有 1 次，摘要把 10 行整段抄了下来。我们自己写下的决定是用户消息，5 次原文都在。所以压缩后模型看到的是摘要，不是原始证据；需要原始证据，就让它重新读。摘要每次写得不一样，好不好，我们得自己读一遍才知道。想自己重复这个实验，步骤放在本页的阅读模式里，选做。",
    ],
    teaching=teach(
        ("核对记录", "压缩提示位于 codex-rs/prompts/templates/compact/prompt.md（要求写进度与决定、约束、下一步、关键数据）；本地压缩保留最近用户消息（上限约 2 万 token）、摘要和重新插入的初始上下文；OpenAI 与 Azure provider 走远程压缩（model-provider/src/provider.rs）。"),
        ("切到实操", "不在 2.1 的主线会话上执行。按 courseware/ch02/materials/compact/README.md 用 setup.sh 建独立目录，clean-codex.sh --tap 启动，输入 steps.txt 的五步，截取压缩前、压缩请求和压缩后三次请求。摘要每次不同；若本次保留了 grep 原文或模型编出了原文，如实改写右下方框和口播。"),
        ("实验记录", "2026-10-05 压缩 5 次、不压缩对照 2 次（另有 2 次因上游超时或脚本出错不计入）。5 次压缩后都是 7 条 input：3 条用户消息、摘要、权限说明与 Skills、环境信息、新问题，没有工具调用和返回，与 compact.rs 一致（手动压缩用 DoNotInject，下一轮再注入初始上下文；用户消息从新往旧最多保留约 2 万 token）。摘要：4 次只留行号或计数，1 次抄下 grep 原文；5 次追问都没有编造。对照组 2 次都答出了 grep 原文。汇总表与参考记录见 materials/compact/。"),
        ("讲师提示", "本页是试讲过满时第一个移到配套页的内容；移走时同步移走 p33 第 2 题，并在 p28 给出配套页入口。"),
    ),
)

scene(
    id="p28", segment="压缩与交接",
    label="这次该怎么选", title="四种做法，这一次选哪个", kicker=KICK + "压缩与交接",
    lead="继续、恢复、压缩后继续、新建并交接，各有适用情境。先看 2.1 的实际会话再决定：与修改无关的探索很多，就新建，用反馈清单交接；上下文仍然集中，继续也合理。把选择和理由写进本轮记录。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1.5fr) minmax(0,1.5fr)">'
        '<div class="is-head" data-reveal="0"><span>做法</span><span>适合</span><span>风险</span></div>'
        '<div data-reveal="0"><span>继续</span><span>刚做完、上下文集中</span><span>无关历史越积越多</span></div>'
        '<div data-reveal="0"><span>恢复</span><span>中断后接着同一件事</span><span>文件和服务不会跟着回来</span></div>'
        '<div data-reveal="1"><span>压缩后继续</span><span>历史长、但方向没变</span><span>原始证据变成摘要</span></div>'
        '<div data-reveal="1" class="is-key"><span>新建 + 交接</span><span>换了一件事、前面多是探索</span><span>交接文件要写清</span></div></div>'
        '<div class="p-bar is-light" data-reveal="2">讲师这次：<b>新建</b>，用 CH02_VIBE_ITERATIONS.md 交接</div>'
    ),
    steps=["继续与恢复", "压缩与新建", "这一次"],
    script=[
        "把四种做法放在一起。继续，适合刚做完、上下文还集中的时候，风险是无关历史越积越多。恢复，适合中断以后接着做同一件事，但记住，文件和服务不会跟着回来。",
        "压缩后继续，适合历史很长、方向没变的时候，代价是原始证据变成摘要。新建加交接，适合换了一件事，前面的历史大多是探索的时候，前提是交接文件写清楚。",
        "讲师这次的 2.1 会话，主要是只读核对和看请求，和“往项目区加内容”关系不大，所以选新建，用 CH02_VIBE_ITERATIONS.md 交接。反馈清单本身就是一份对账单：新会话从当前证据出发，不靠旧会话里的记忆。你的会话如果很短、很集中，继续也合理。请暂停视频，在记录里写下你的选择，理由要指向具体状态，比如“2.1 会话里大多是请求查看，与本轮修改无关”。",
    ],
    teaching=teach(
        ("讲师提示", "不预设唯一正确答案；验收看理由是否引用具体状态（会话内容、历史长度、文件是否已更新），不看选了哪一种。"),
        ("跟做产出", "本轮记录的“会话选择与理由”一项。"),
    ),
)

# ---------- 本轮迭代 ----------
scene(
    id="p29", segment="本轮迭代", layout="prompt-scene", prompt=ROUND_PROMPT,
    label="写本轮 Prompt", title="让 Codex 只改这一处", kicker=KICK + "本轮迭代",
    lead="在新会话里提交本轮 Prompt。它引用反馈清单这份当前证据，项目内容由人提供并要求原文照用，范围只到项目区，完成标准写成可以检查的四件事。讲师演示的项目区借用两位讲师的真实经历；首屏沿用第 1 章的示例，本轮不改。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>引用当前证据</b><small>反馈清单第 3 条</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>内容由人提供</b><small>讲师演示借用两位讲师的经历</small></span></li>'
        '<li data-reveal="2"><span><b>只写愿意公开的</b><small>2.4 之后所有人都看得到</small></span></li>'
        '<li class="is-ok" data-reveal="3"><span><b>可检查的完成标准</b><small>视口 · 键盘 · build · diff 范围</small></span></li></ol></div>'
    ),
    steps=["引用证据", "内容由人提供", "只写愿意公开的", "完成标准"],
    script=[
        "新建会话，提交这段 Prompt。先看 Goal 和 Context：目标写的是解决反馈第 3 条，Context 点名反馈清单的位置。新会话没有 2.1 的历史，它要从这份文件里拿到当前证据。我们还顺手写明：项目卡点了不跳转，是第 1 章做首页时定下的，这一轮不改。",
        "中间是项目内容，尖括号那一行换成你自己的项目经历，每行一条，要求原文照用。讲师这里填的是我们两位讲师自己的三条经历，合在第 1 章那个“示例同学”的页面上。首屏还是示例同学，这一轮只改项目区，所以先不动它。项目经历是关于你自己的事实，AI 不知道，也不该替你编。所以 Constraints 里写死：只用上面的文字，不补写、不润色事实。",
        "写自己的内容时多想一步：到 2.4，这个仓库和页面会公开，所有人都能看到。只写你愿意公开的内容，不写别人的姓名和联系方式。",
        "最后是 Done when，四件可以检查的事：三种视口内容完整可读；Tab 焦点顺序和改前一样；npm run build 成功；diff 只含项目区的改动。我们还要求它先说计划、等确认再改。请暂停视频，换上你自己的内容，提交 Prompt。",
    ],
    teaching=teach(
        ("切到实操", "讲师在新会话中提交本 Prompt，尖括号一行替换为两位讲师经历聚合的三条（courseware/ch02/materials/README.md，取自已公开的讲师简介，2026-10-05 讲师确认），提前写好，不在镜头前现写：\n\n- 红绿灯感知量产：城市 NOA 红绿灯感知模块的量产方案设计、部署与加速\n- 端侧多模态推理引擎：在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产\n- RoboHarness：把自然语言需求转成可执行、可验证、可持续迭代的研发流程"),
        ("讲师提示", "学员项目区已完整时，按分镜“内容已完整时的跟做分支”：Goal 改为呈现一条新批准的补充，不追认原页面有缺陷；没有补充需求时在独立练习副本使用课程合成示例。"),
    ),
)

scene(
    id="p30", segment="本轮迭代",
    label="确认计划再执行", title="先看计划，再让它动手", kicker=KICK + "本轮迭代",
    lead="Codex 先回复计划。确认三件事再放行：计划只涉及项目区；要放进页面的内容和我们给的原文一致；没有新依赖、没有链接。小改动的计划可能只有一两句，这正常。",
    html=(
        '<div class="p-handoff"><div class="p-handoff-card" data-reveal="0"><h3>看 Codex 的计划</h3><p>它说要改哪些文件、怎么改</p>'
        '<span class="p-env">新会话</span><span class="p-env">workspace-write</span></div>'
        '<ol class="p-watch"><li data-reveal="1">只涉及项目区<small>预期只改 src/App.tsx 的项目数据</small></li>'
        '<li data-reveal="2">内容与原文一致<small>一个字一个字对</small></li>'
        '<li data-reveal="3">没有新依赖、没有链接<small>有就先停，问清楚</small></li></ol></div>'
    ),
    steps=["看计划", "范围", "内容", "依赖与链接"],
    script=[
        "提交以后，Codex 会先回复计划：要改哪些文件、怎么改。这一轮改动很小，计划可能只有一两句话，这很正常，不必为了走流程写一大段。",
        "第一看范围。讲师的首页里，项目数据就在 src/App.tsx 顶部的一个数组里，预期只改这一处。计划里要是出现了样式重写、新组件，先问它为什么。",
        "第二看内容。它准备放进页面的文字，和我们给的原文一致吗？有没有被改写成更漂亮的说法？",
        "第三看有没有新依赖、有没有链接。我们明确说了不加。有的话，先停下来问清楚，不放行。三项都没问题，再让它动手。",
    ],
    teaching=teach(
        ("切到实操", "Codex 的计划以录制实际为准。若计划越界，就地让它收窄并保留原始回复，2.3 可作为“范围扩大”的真实素材；不准备越界的计划。"),
        ("备课参考", "按排练快照预估，内容迭代只改 src/App.tsx：10 行新增、2 行删除（materials/homepage-v1.diff）。真实 diff 以录制为准。"),
    ),
)

scene(
    id="p31", segment="本轮迭代",
    label="改好了吗", title="改好了吗？有没有弄坏别的？", kicker=KICK + "本轮迭代",
    lead="改完由人检查，不只看新内容：三种视口下内容完整可读；Tab 焦点顺序与改前一致；npm run build 成功。内容变多后第 1 条“手机上挤”若出现，记为剩余问题，不在这一轮顺手修。",
    html=(
        '<div class="p-rec" style="grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) minmax(0,1.3fr);row-gap:12px;--rf:21px">'
        '<div class="is-head" data-reveal="0"><span>检查</span><span>结果</span><span>能说明什么</span></div>'
        '<div data-reveal="0"><span class="p-cell">360 · 768 · 1440</span><span class="p-cell">三条经历都完整显示</span><span class="p-why">第 3 条已解决；布局没被挤坏</span></div>'
        '<div data-reveal="1"><span class="p-cell">Tab 键</span><span class="p-cell">仍只停在“查看项目”</span><span class="p-why">键盘行为与改前一致</span></div>'
        '<div data-reveal="2"><span class="p-cell p-mono">npm run build</span><span class="p-cell">退出码 0</span><span class="p-why">构建流程成功完成</span></div></div>'
        '<div class="p-bar is-light" data-reveal="3">新出现的问题：<b>记下来，不顺手修</b></div>'
    ),
    steps=["三种视口", "键盘", "构建", "新问题"],
    script=[
        "Codex 说改完了。我们自己检查，不只看新内容有没有出来。先切三种视口：360、768、1440，三条经历都完整显示，没有被截断或挤坏。这说明第 3 条反馈解决了。",
        "再按 Tab。改之前，焦点只会停在“查看项目”按钮上，现在还是一样。键盘行为没有变，这正是我们要的。",
        "最后在终端运行 npm run build，退出码是 0，构建流程成功完成。三项检查各有对象：视口检查文字和排版，Tab 检查焦点顺序，build 检查项目能否生成构建产物。把三项结果一起记进本轮记录。",
        "内容变多了，第 1 条“手机上挤”会不会出现？讲师的页面在 360 下没有横向滚动，仍然没复现。如果你的页面出现了，记成剩余问题，留到下一轮。这一轮只解决一个结果。请暂停视频，按这三项检查你自己的页面。",
    ],
    teaching=teach(
        ("备课参考", "排练版 homepage-v1（materials/homepage-v1.diff）2026-10-03 核对：360×800 下页面高 827px、无横向滚动；Tab 只停在“查看项目”；build 成功。"),
        ("讲师提示", "检查由人完成；让 AI 打开浏览器自验证留到 Harness 章节（决定 10）。结果列以录制实际为准。"),
    ),
)

scene(
    id="p32", segment="本轮迭代",
    label="记录本轮", title="写下本轮，下一次才接得上", kicker=KICK + "本轮迭代",
    lead="在 CH02_VIBE_ITERATIONS.md 末尾追加本轮记录。它是下一轮的交接，也是 2.3 审查 diff 时要对照的目标。回退点此时是本轮开始前的最后一次提交，2.3 提交后更新。",
    html=(
        NARROW +
        '<div class="p-aside" style="display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:16px;align-items:start">'
        '<div class="p-code" data-reveal="0"><div class="p-code-head"><span>docs/evidence/CH02_VIBE_ITERATIONS.md</span><span>追加</span></div>'
        '<pre style="color:inherit">## 第 1 轮\n- 问题证据：反馈第 3 条；项目区只有一句\n- 本轮目标：呈现我提供的三条项目经历\n'
        '<span class="hl">- 会话选择与理由：新建；2.1 会话多为请求查看</span>- 改动文件：src/App.tsx\n'
        '- 验证结果：视口完整 / Tab 不变 / build 成功\n<span class="hl">- 剩余问题：无（第 1 条在 360 下未复现）</span>'
        '- 回退点：本轮开始前的提交</pre></div>'
        '<div style="display:grid;gap:12px"><div class="p-box is-soft" data-role="ctx" data-reveal="1"><p><b>下一轮</b> · 新会话的交接文件</p></div>'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><p><b>2.3</b> · 审查 diff 的对照目标</p></div></div></div>'
    ),
    steps=["逐项填写", "它用来做什么"],
    script=[
        "最后把这一轮记下来。在 CH02_VIBE_ITERATIONS.md 末尾追加一段“第 1 轮”。问题证据、本轮目标、改动文件、验证结果，刚才都做过，照实填。其中两项是这一章新加的：会话选择与理由，还有剩余问题，画面上标黄了。回退点写本轮开始前的最后一次提交，运行 git log --oneline -1 就能看到它的短哈希；这一轮还没提交，所以回退点还是它。",
        "这份记录有两个用处。下一次新建会话时，它就是交接文件；下一节 2.3 审查 diff 时，它就是对照的目标。请暂停视频，把你的第 1 轮写完。",
    ],
    teaching=teach(
        ("跟做产出", "本轮记录七项：问题证据、本轮目标、会话选择与理由、改动文件、验证结果、剩余问题、回退点。模板（前两项为讲师示例）：\n\n```markdown\n" + RECORD + "\n```"),
        ("讲师提示", "画面上的记录是讲师示例，各项以录制实际为准。"),
    ),
)

# ---------- 小结 ----------
scene(
    id="p33", segment="小结",
    label="暂停自检", title="暂停自检", kicker=KICK + "小结",
    lead="先独立作答，再看解析。答案后面标出回到哪一页。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>关掉终端，第二天恢复 Codex 会话，页面会自动回来吗？</h3>'
        '<div data-reveal="1"><p>不会。会话由 Harness 保存，开发服务器是另一个程序，要重新 npm run dev<span class="p-back-to" data-role="ctx">回到 三种状态</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>压缩以后，模型不再看到哪些原始信息？</h3>'
        '<div data-reveal="2"><p>工具返回的原文和中间过程，只剩用户消息和一份摘要<span class="p-back-to" data-role="gate">回到 压缩</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>对话越来越长，每次花的钱一定越来越多吗？</h3>'
        '<div data-reveal="3"><p>不一定。input 在变长，但重复前缀可被缓存；费用要看服务的计费，不能只凭对话长度断言<span class="p-back-to" data-role="ok">回到 代价</span></p></div></div></div></div>'
    ),
    steps=["暂停", "第 1 题", "第 2 题", "第 3 题"],
    script=[
        "暂停一下，回答三个问题。第一，关掉终端，第二天恢复 Codex 会话，页面会自动回来吗？第二，压缩以后，模型不再看到哪些原始信息？第三，对话越来越长，每次花的钱一定越来越多吗？",
        "第一题，不会。会话由 Harness 保存，开发服务器是另一个程序，关掉终端就停了，要重新运行 npm run dev。恢复对话，不等于恢复文件或服务。",
        "第二题，工具调用和工具返回都会被移走，比如读到的文件内容、grep 的输出，这是 Codex 源码写定的。剩下的是用户消息和一份交接摘要；原始内容还能留下多少，要看摘要有没有抄进去。换别的服务或版本，细节可能不同，但摘要都替代不了原始证据。",
        "第三题，不一定。每次请求的 input 确实在变长，但重复的前缀可以被缓存，按更低的价格算。具体花多少，要看你用的服务怎么计费，不能只凭对话长度下结论。",
    ],
)

scene(
    id="p34", segment="小结",
    label="本节小结", title="一轮，一个结果，一份证据", kicker=KICK + "小结",
    lead="本节留下一轮内容迭代、三项检查结果和一份本轮记录。下一节：Codex 说完成了，手上是一份 diff，收不收？课后可以再做 0–2 轮，不计分。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3>三种状态</h3>'
        '<ul class="p-exits" style="gap:12px"><li class="is-point">模型不记</li><li class="is-point">会话由 Harness 重发</li><li class="is-point">文件与进程各自存在</li></ul></div>'
        '<div data-reveal="1"><h3 style="text-align:center">一个习惯</h3><div class="p-star" style="width:260px;font-size:24px">一轮一个结果<br>引用当前证据</div></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.3 审改动</h3><p>Codex 说完成了，收不收？</p></div></div></div>'
    ),
    steps=["三种状态", "一个习惯", "下一节"],
    script=[
        "这一节先回答了一个看似简单的问题：在哪个会话里改。模型什么都不记；会话由 Harness 保存，在我们看到的那次运行里，每次请求都重发了完整历史；文件和运行中的程序各自存在。所以选会话，看的是历史里有什么，而交接靠的是文件里的证据。",
        "然后我们完成了一轮完整的迭代：Prompt 引用当前证据，内容由人提供，只改项目区，再用三种视口、键盘和构建证明没弄坏别的。一轮只解决一个结果，新发现的问题记下来留给下一轮。课后想再做一两轮可以，不计分。",
        "现在 Codex 说完成了，我们手上是一份还没提交的改动。下一节的问题是：这份 diff，收不收？",
    ],
)


lesson.write()

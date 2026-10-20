#!/usr/bin/env python3
"""2.2 补上项目经历，看对话怎么变长：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
页序按分镜（id 不按页序）：p20 p21 p22 p23 p24 p27a p28 p29 p30 p30a p31 p27 p32 p33 p34。
原 p25、p26（Codex 版本与模型指令对比）已移出主课，素材与核对记录见 git 历史和分镜“移到配套页的内容”。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, MEASURED, NARROW, chapter_map, ref, repro, teach  # noqa: E402

lesson = Lesson(__file__, "2.2", "补上项目经历，看对话怎么变长", summary="对话每多一轮，前面的内容都会被重发；清空和压缩之后还剩什么，在请求记录里看得到。项目上，把自己的项目经历加进首页，并用三种视口、键盘和构建证明没弄坏别的。")
scene = lesson.scene

# openai/codex 的固定版本链接（完整哈希，内容不随 main 变化）
GH = "https://github.com/openai/codex"

# 2026-10-20 课程基线在交互界面里的一次运行（lab-runs/ch02-context/2.2-20261020-104407，不提交）：p22、p23、p27a、p27 用它
RUN1020 = "数字来自讲师用课程基线（隔离 HOME）在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构"
V160 = "a956835d020762cb2b570053af06f643a11c0ecc"  # rust-v0.160.0，讲师机器上的 codex-cli 版本


def blob(commit, path):
    return f"{GH}/blob/{commit}/{path}"


ROUND_PROMPT = """Goal：在项目区呈现我的项目经历。
Context：首页 v0 的项目区目前只有占位内容；
项目卡不跳转，本轮不改。
项目内容（原文照用）：<每行一条：项目名称：一句描述>
Constraints：只用上面的文字，不补写；不加链接、依赖；
只改项目区；先说计划，等我确认再改。
Done when：我在浏览器查 360/768/1440 宽可读、
Tab 顺序不变；你跑 build 成功；diff 只含项目区。"""


# ---------- 会话里存了什么 ----------
scene(
    id="p20", segment="会话里存了什么", layout="lesson-cover",
    label="这一节做什么", title="对话多几轮，context 会怎样",
    lead="补上项目经历，同时看对话怎么变长、怎么清空",
    html=(
        chapter_map(2) +
        '<div class="p-grid" style="--n:2;gap:16px;margin-top:22px">'
        '<div class="p-box" data-role="us" data-reveal="1"><h3>补上项目经历</h3><p>内容由我们提供，Codex 只负责放进项目区</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><h3>看对话怎么变长</h3><p>多聊几轮、清空、压缩，请求里各剩什么</p></div></div>'
        '<p class="p-hand" data-reveal="2">上一节看了一次请求，这一节看多次请求之间</p>'
    ),
    steps=["回到地图", "本节两件事", "本节问题"],
    teaching=teach(("讲师提示", "开篇地图沿用本章五节，2.1 标为已完成。")),
)

scene(
    id="p21", segment="会话里存了什么",
    label="三种状态", title="关掉终端再回来，什么还在，什么没了",
    lead="模型本身不保存任何状态；会话由 Harness 保存，每次请求时重发；文件和运行中的程序独立存在于电脑上。上一节开头要重启开发服务器，就是第三栏的事。",
    html=(
        '<div class="p-grid" style="--n:3;gap:16px">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">模型</span><p class="p-big">什么都不记，只看这一次请求</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">会话</span><p class="p-big">Harness 保存，下次重发</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="0"><span class="p-tag" data-role="tool">文件与进程</span><p class="p-big">在电脑上，与会话无关</p></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>上一节开头</h3><p>关掉终端 → 开发服务器停了 → 代码文件还在</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2"><h3>换个目录恢复会话</h3><p>它仍答得出上轮读的是 index.html<br>可新目录里没有这个文件</p></div></div>'
        '<div class="p-bar" data-reveal="2">恢复对话，<b>不等于恢复文件或服务</b></div>'
    ),
    repro=repro([
        ("在课程仓库根目录建目录 A，放一个文件；目录要有自己的 .git", "mkdir -p lab-runs/resume-a && cd lab-runs/resume-a && git init -q && echo '<h1>hello</h1>' > index.html"),
        ("另开一个终端，在目录 A 启动一个本地服务器（相当于 npm run dev），浏览器打开 localhost:8765 能看到页面", "cd lab-runs/resume-a && python3 -m http.server 8765"),
        ("回到第一个终端，用固定的 HOME 让 Codex 读文件，并告诉它服务器开着；固定 HOME 才能在后面找到这次会话。需要 MINIMAX_API_KEY", "CLEAN_CODEX_HOME=~/.cache/clean-codex/resume ../../tools/clean-codex.sh -- exec \"只读：读一下 index.html，告诉我它的第一行。另外记住：这个页面我已经用 python3 -m http.server 在 8765 端口打开了。\" < /dev/null"),
        ("到第二个终端按 Ctrl-C 关掉服务器，相当于关掉终端或第二天重新开机", None),
        ("换到空目录 B，恢复刚才的会话再问；--all 取消“只找当前目录的会话”", "mkdir -p ../resume-b && cd ../resume-b && git init -q\nCLEAN_CODEX_HOME=~/.cache/clean-codex/resume ../../tools/clean-codex.sh -- exec resume --last --all \"不要运行命令，只凭记忆回答：刚才你读的是哪个文件？它的第一行是什么？8765 端口上的那个页面现在还能打开吗？\" < /dev/null"),
        ("核对：目录 B 里有没有这个文件，页面还能不能打开（000 表示打不开）", "ls -A; curl -s -o /dev/null -w \"%{http_code}\\n\" localhost:8765 || true"),
    ], note="讲师 2026-10-05 实测：模型答出 index.html 和它的第一行；目录 B 里没有这个文件，服务器关掉后页面打不开。问到端口时，模型两次都说无法确认、只记得“你说过它开着”；其他运行也可能直接说还开着。会话、文件、进程三者各自存在。"),
    refs=[ref("Conversation state：每次请求独立、无状态，历史要再发一遍", "https://developers.openai.com/api/docs/guides/conversation-state", "OpenAI 文档", kind="read")],
    steps=["三栏", "上一节开头那一幕", "恢复会话的实验"],
    teaching=teach(
        ("核对记录", "Codex 0.160.0，MiniMax 自定义 provider：在另一目录 codex exec resume <会话 id>，模型仍答出 index.html；Harness 追加了新的权限说明和新的环境信息，cwd 已是新目录。--last 默认只在当前目录的会话中挑选，--all 取消过滤。见 2026-10-02 第 2 章提案“第二轮实测”。"),
        ("讲师提示", "这一页只建立三栏。会话里“存了什么、怎么发”下一页用请求对比展示。"),
    ),
)

scene(
    id="p22", segment="会话里存了什么",
    label="第二句话带上了什么", title="第二句话发出去，带上了第一句的全部内容",
    lead="同一个会话里先后发两句话，把这两次请求放在一起比：第二次请求的开头，和第一次一模一样；第一句话和 Codex 的回答也原样带上，最后才是第二句话。模型“接得上话”，是因为 Harness 每次都把历史重新发给它。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:40px">'
        '<div class="p-fn">第一句 → 第二句请求的 input <span class="add">+2</span></div>'
        '<div class="p-ln"><i>1–4</i><code>developer · 系统指令、Skills 与权限、团队说明…</code></div>'
        '<div class="p-ln"><i>5</i><code>user · 环境信息</code></div>'
        '<div class="p-ln"><i>6</i><code>user · 第一句：你好，用一句话介绍…</code></div>'
        '<div class="p-ln add" data-reveal="1"><i>7</i><code>assistant · Codex 对第一句的回答</code></div>'
        '<div class="p-ln add" data-reveal="1"><i>8</i><code>user · 第二句：Goal：在项目区呈现…</code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>前 6 项逐字相同</b><small>不是“接着上次”，而是从头再发</small></span></li>'
        '<li data-reveal="1"><span><b>新增在末尾</b><small>上一轮的回答和这一句</small></span></li>'
        '<li class="is-risk" data-reveal="2"><span><b>在讲师的配置下看到</b><small>MiniMax 自定义 provider，store 为 false；换服务可能不同</small></span></li></ol></div>'
        '<p class="source-note">条目名为中文概括。' + RUN1020 + '</p>'
    ),
    steps=["第一步的请求", "第二步多了什么", "适用范围"],
    teaching=teach(
        ("核对记录", "2026-10-20 交互界面实测（能力目录开）：/clear 之后的第一句“你好”请求 6 项（约 8.9 千 token）；接着发本轮 Prompt，请求 8 项（约 9.1 千 token），前 6 项与上一次逐字相同，末尾多了 assistant 回答和新的一句。能力目录开时 Skills 与权限说明那条 developer 消息约 7500 字符，比 codex exec 长，所以 token 数和 2.1 p08 不同。界面另发的“给会话起标题”请求，在能力目录开时也会自己调用工具、越涨越长，看记录时一律跳过。MiniMax 配置下请求体 store 为 false、没有 previous_response_id。"),
        ("讲师提示", "录制时用 claude-tap 选 2.1 两步的相邻请求做 diff 截图；截图前检查路径和个人 Skills 名称。条目和本页不同就按实际改。带工具调用的轮次里，模型的推理摘要（reasoning）也会被重发，可以在 p23 指一下。"),
    ),
)

# ---------- 重发的代价 ----------
scene(
    id="p23", segment="重发的代价",
    label="每次都重发，贵不贵", title="每次都重发，代价是 token 和注意力",
    lead="2.1 第二步那一问产生了 6 次请求，input 从 6 项涨到 27 项，输入 token 涨到将近 3 倍。重复的开头部分可以被缓存，算起来更便宜；但模型每次仍要读完整段历史，这份注意力上的负担，缓存帮不上。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)">'
        '<div class="is-head" data-reveal="0"><span>请求</span><span>input 项数 · token</span><span>缓存命中</span></div>'
        '<div data-reveal="0"><span>第 1 次</span><span>6 项 · 约 8.9 千</span><span>约 230 token</span></div>'
        '<div data-reveal="0"><span>第 3 次</span><span>16 项 · 约 1.72 万</span><span>约 1.21 万 token</span></div>'
        '<div data-reveal="0" class="is-key"><span>第 6 次</span><span>27 项 · 约 2.42 万</span><span>约 2.31 万 token</span></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>token</h3><p>重复的前缀能被缓存，按更低的价格算</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2"><h3>注意力</h3><p>历史越长，早先的需求越容易被淹没</p></div></div>'
        '<p class="source-note">' + RUN1020 + '</p>'
    ),
    steps=["6 次请求", "token 与缓存", "注意力"],
    teaching=teach(
        ("数字来源", "2026-10-20 交互界面实测（能力目录开），2.1 第二步那一问的 6 次请求：input 6、11、16、21、24、27 项；input_tokens 8892、12052、17229、20632、23108、24207；缓存命中 229、8892、12052、17229、20632、23108——每次都正好命中上一次的全部输入。第 1 次只有 229，是会话里第一条请求，缓存还是冷的。画面取第 1、3、6 次。录制版本定下后复测。"),
        ("讲师提示", "前缀缓存的计费细节放配套页，主课只讲“重复部分更便宜，注意力不变”。不要据此断言每次费用一定增加。"),
    ),
)

scene(
    id="p24", segment="重发的代价",
    label="弯路也会被重发", title="走过的弯路，也留在历史里",
    lead="开场访谈里看过，同一个 Prompt，结果会变；过程也一样，每次走的弯路不同。讲师这次加项目经历，Codex 在确认之后调用了 33 次工具，其中有不少弯路：自己起预览服务器失败、写的截图脚本有语法错、截图文件没生成。这些失败的返回和成功的一样，留在之后每一次请求里，对完成任务没有用，却一直占着 context。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">这一轮的几次弯路</span>'
        '<div class="p-term" style="margin-top:10px"><div style="color:#8A93A0">npm run preview --port 4173</div><div class="err">退出码 1</div><div style="color:#8A93A0">截图脚本</div><div class="err">SyntaxError</div><div style="color:#8A93A0">ls /tmp/shot-360.png</div><div class="err">No such file</div></div></div>'
        '<div class="p-join" data-reveal="1"><span>之后每次请求</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ink" data-reveal="1"><span class="p-tag" data-role="ink">最后一次请求</span><p class="p-big" style="margin-top:10px">135 项 · 约 5.9 万 token</p><p class="p-sub">前面 39 次调用的返回都在里面，失败的也在</p></div></div>'
        '<div class="p-bar" data-reveal="2">返回有没有用，<b>之后每次请求都带着</b></div>'
        '<p class="source-note">' + RUN1020 + '。弯路的次数只是这一次运行的观察；返回会一直留在后面的请求里，是每次都一样的规则</p>'
    ),
    steps=["这一轮的弯路", "之后每次都带着", "弯路也被重发"],
    teaching=teach(
        ("核对记录", "2026-10-20 交互界面实测（能力目录开、推理档位 max），2.2 本轮“确认”之后：33 次工具调用（加上出计划那一轮的 6 次，会话里累计 39 次），其中至少 9 次失败或白跑（npm run preview 两次退出码 1、shell 脚本被当成 JavaScript 报 SyntaxError、截图文件不存在、CDP 脚本解析错等），全部是 Codex 自己为了查视口而做的，Prompt 写明了浏览器由人检查。每次请求都带着之前全部调用和返回，最后一次请求 135 项、59271 token。原来的 read_file 例子来自 2026-10-02 能力目录关的运行，已不再上屏。"),
        ("讲师提示", "不重讲随机性，只回指开场访谈的鹈鹕例子。录制时弯路不一定一样：按当次记录指认就行，没有弯路也没关系，要讲的是“返回会一直留着”这条规则。“它为什么自己去查浏览器”可以留给 2.3 看范围时就地用。"),
    ),
)

scene(
    id="p27a", segment="选在哪个会话里改",
    label="/clear 之后还剩什么", title="执行 /clear 之后，还剩什么",
    lead="在上一节的会话里执行 /clear，再发一句话。Codex 对这条命令的说明是“清屏并开始新对话”；另一条 /new 是“开始新对话”，不清屏。讲师实测：/clear 之后再发第一句那句话，请求只有 6 项：前 5 项和这个会话最开始那次请求逐字相同，最后一项是刚发的这句话；前面两步的问答、工具调用和返回都没了。开发服务器和改过的文件不受影响：/clear 清的是对话，不是文件。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-term">› /clear<br><span style="color:#8A93A0">（屏幕清空，开始新对话）</span><br>› 再发一句话</div></div>'
        '<div data-reveal="1"><div class="p-src" style="--lh:40px">'
        '<div class="p-fn">/clear 之后的请求：6 项</div>'
        '<div class="p-ln"><i>1–4</i><code>developer · 初始内容 4 条</code></div>'
        '<div class="p-ln"><i>5</i><code>user · 环境信息</code></div>'
        '<div class="p-ln add"><i>6</i><code>user · 刚发的这一句</code></div>'
        '</div></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1"><h3>对话</h3><p>前面的问答、工具调用和返回，共 21 项，不再随请求发出</p></div>'
        '<div class="p-box is-soft" data-role="tool" data-reveal="2"><h3>文件与开发服务器</h3><p>都还在，页面照常打开</p></div></div>'
        '<p class="source-note">命令说明见 openai/codex main 的 codex-rs/tui/src/slash_command.rs（2026-10-19 核对）。' + RUN1020 + '</p>'
    ),
    steps=["执行 /clear", "清空后的请求", "文件和服务器"],
    teaching=teach(
        ("核对记录", "2026-10-19 在 openai/codex main 的 codex-rs/tui/src/slash_command.rs 中核对：/clear 的描述为“clear the terminal and start a new chat”，/new 为“start a new chat during a conversation”。录制所用版本再确认一次。2026-10-20 交互界面实测（能力目录开）：/clear 前最后一次请求 27 项、约 2.42 万 token；/clear 后再发第一句那句话，请求 6 项、约 8.9 千 token，前 5 项（系统指令、Skills 与权限、团队说明、多代理开关说明、环境信息）与会话最开始那次请求逐字相同；请求元数据里 history_initialization 由 new 变为 cleared。"),
        ("切到实操", "在 2.1 的会话里执行 /clear，再发一句与项目无关的话；切 claude-tap 查看器看这次请求，对照画面；结果和画面不同就按实际讲。最后切浏览器刷新首页，说明开发服务器和文件都不受影响。"),
    ),
)

scene(
    id="p28", segment="选在哪个会话里改",
    label="这次该怎么选", title="四种做法，这一次选哪个",
    lead="继续、/clear、压缩后继续、新建并交接，各有适用的情况。先看上一节会话里有什么再决定：讲师的那个会话全是看请求的探索，和本轮修改无关，用 /clear 或新建都合理，讲师用 /clear 开始本轮。理由要说出会话里的具体状态。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1.4fr) minmax(0,1.4fr) minmax(0,1.2fr)">'
        '<div class="is-head" data-reveal="0"><span>做法</span><span>适合</span><span>风险</span><span>讲师这次</span></div>'
        '<div data-reveal="0"><span>继续</span><span>刚做完、内容集中</span><span>无关历史越积越多</span><span>不选：里面全是看请求</span></div>'
        '<div data-reveal="0" class="is-key"><span>/clear</span><span>换一件事，前面用不上</span><span>需要的信息得重新给</span><span>选它</span></div>'
        '<div data-reveal="1"><span>压缩后继续</span><span>历史长，还在做同一件事</span><span>原始内容变成摘要</span><span>不需要：本轮换了一件事</span></div>'
        '<div data-reveal="1"><span>新建 + 交接</span><span>换一件事，要带上部分结论</span><span>交接内容要写清</span><span>也合理</span></div></div>'
        '<div class="p-bar is-light" data-reveal="2">讲师这次：<b>/clear</b>，上一节的会话和本轮修改无关</div>'
    ),
    steps=["继续与 /clear", "压缩与新建", "这一次"],
    teaching=teach(
        ("讲师提示", "不预设唯一正确答案；看理由是否引用具体状态（会话里有什么、历史多长、文件是否已更新），不看选了哪一种。压缩在本轮修改之后用真实会话演示，这里只列出。"),
        ("跟做", "学员暂停，写下自己的选择和理由，答在自己的笔记里（自检第 4 题回到这一页）。"),
    ),
)

# ---------- 补上项目经历 ----------
scene(
    id="p29", segment="补上项目经历", layout="prompt-scene", prompt=ROUND_PROMPT,
    label="写本轮 Prompt", title="让 Codex 只改这一处",
    lead="在 /clear 之后的新对话里提交本轮 Prompt。Context 直接写出项目区的现状；项目内容由人提供，要求原文照用；范围只到项目区；完成标准写成可以检查的四件事。讲师演示的项目区借用两位讲师的真实经历；首屏沿用第 1 章的示例，本轮不改。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>写清现状</b><small>项目区目前只有占位内容</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>内容由人提供</b><small>讲师演示借用两位讲师的经历</small></span></li>'
        '<li data-reveal="2"><span><b>只写愿意公开的</b><small>2.4 之后所有人都看得到</small></span></li>'
        '<li class="is-ok" data-reveal="3"><span><b>可检查的完成标准</b><small>视口 · 键盘 · build · diff 范围</small></span></li></ol></div>'
    ),
    steps=["写清现状", "内容由人提供", "只写愿意公开的", "完成标准"],
    teaching=teach(
        ("切到实操", "讲师在 /clear 之后的新对话中提交本 Prompt，尖括号一行替换为两位讲师经历聚合的三条（courseware/ch02/materials/README.md，取自已公开的讲师简介，2026-10-05 讲师确认），提前写好，不在镜头前现写：\n\n- 红绿灯感知量产：城市 NOA 红绿灯感知模块的量产方案设计、部署与加速\n- 端侧多模态推理引擎：在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产\n- RoboHarness：把自然语言需求转成可执行、可验证、可持续迭代的研发流程"),
        ("讲师提示", "“项目卡不跳转，本轮不改”只是约束，不展开讲这条决定（2.5 再就地复述）。学员项目区已完整时，按分镜“内容已完整时的跟做分支”：Goal 改为呈现一条新确认的补充；没有补充需求时在独立练习副本使用课程合成示例。"),
    ),
)

# p30、p31 的计划与检查结果来自 2026-10-20 15:58 那次运行（能力目录开），见分镜“事实边界”
RUN22 = "讲师用课程基线在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）"

scene(
    id="p30", segment="补上项目经历",
    label="确认计划再执行", title="先看计划，再让它动手",
    lead="Codex 先回复计划。确认三件事再放行：计划只涉及项目区；要放进页面的内容和我们给的原文一致；没有新依赖、没有链接。讲师这次的计划说：只改 src/App.tsx 里的 projects 数组，把 1 条占位换成 3 条；按原文第一个冒号拆成标题和描述，其余一字不改；卡片结构不变，不加链接、按钮和依赖；首屏、index.html 和样式都不动。三件事都对得上。小改动的计划可能只有一两句，这也正常。",
    html=(
        '<div class="p-handoff"><div class="p-handoff-card" data-reveal="0"><h3>Codex 的计划</h3>'
        '<p style="font-size:19px;line-height:1.6;margin-bottom:14px">只改 src/App.tsx 的 projects 数组：1 条占位换成 3 条<br>按原文第一个“：”拆成标题和描述，其余一字不改<br>卡片沿用 h3 + p，不加链接、按钮、依赖<br>首屏、index.html、CSS 都不动</p>'
        '<span class="p-env">/clear 之后的新对话</span></div>'
        '<ol class="p-watch"><li class="is-done" data-reveal="1">只涉及项目区<small>只动 App.tsx 里的项目数据</small></li>'
        '<li class="is-done" data-reveal="2">内容与原文一致<small>计划里列出的三条，逐字对过</small></li>'
        '<li class="is-done" data-reveal="3">没有新依赖、没有链接<small>计划写明不加；有的话先停，问清楚</small></li></ol></div>'
        '<p class="source-note">计划节选并压缩自' + RUN22 + '；你的计划以自己收到的回复为准</p>'
    ),
    steps=["看计划", "范围", "内容", "依赖与链接"],
    teaching=teach(
        ("切到实操", "Codex 的计划以录制实际为准。若计划越界，就地让它收窄并保留原始回复，2.3 可作为“范围扩大”的真实素材；不准备越界的计划。"),
        ("核对记录", "2026-10-20 15:58 那次运行（能力目录开）：计划前 Codex 调用 6 次工具读仓库，计划正文列出三条原文并写明只改 src/App.tsx 的 projects 数组；它还写了“两个不打算自作主张的点”：默认不改 CSS、不更新 PROMPT_V1.md / CHECKPOINTS.md。计划的“验收怎么做”里，它打算自己起 npm run preview、用无头 Chrome 截三档宽度、用 DOM 快照核对焦点顺序，超出了 Prompt 里“浏览器由人查”的分工；讲师照常回复“确认，按你的计划改。”，之后的弯路见本节“走过的弯路”那页。实际 diff 只改 src/App.tsx（+10 −2），与 materials/homepage-v1.diff 逐字相同。"),
        ("讲师提示", "录制时若计划里也出现“自己开浏览器验收”，可以指一句它和 Prompt 的分工不一致，再决定是否让它去掉；不展开。"),
    ),
)

scene(
    id="p30a", segment="补上项目经历",
    label="三种视口", title="三种视口：在电脑上模拟手机和平板",
    lead="视口是浏览器里网页实际能显示的区域。不用找真机，Chrome 开发者工具的设备工具栏可以把视口改成指定宽高。尺寸用的是 CSS 像素，不是屏幕的物理像素。自带机型的尺寸和这三种不一致，所以选 Responsive 手填宽高；常用的话可以加成自定义设备，选做。设备模拟只作用于当前标签页，要在自己首页的标签页里打开。",
    html=(
        '<div class="p-pair" style="grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:28px;align-items:start">'
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>尺寸</span><span>模拟</span></div>'
        '<div data-reveal="0"><span class="p-mono">360×800</span><span>手机竖屏</span></div>'
        '<div data-reveal="0"><span class="p-mono">768×1024</span><span>平板竖屏</span></div>'
        '<div data-reveal="0"><span class="p-mono">1440×900</span><span>笔记本</span></div></div>'
        '<div class="p-handoff-card" data-reveal="1" style="padding:20px 26px"><h3>在自己的页面上切</h3>'
        '<p style="font-size:20px;line-height:1.6">① 新标签页打开 npm run dev 给出的本地地址<br>② 就在这个标签页按 ⌥⌘I，再按 ⇧⌘M<br>③ 顶部选 Responsive，手填宽高<br>④ 页面没变化就 ⌘R 刷新一次</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">只模拟<b>当前标签页</b>：在课件页里开，模拟的就是课件</div>'
    ),
    steps=["三种尺寸", "怎么切", "在自己的页面上演示"],
    teaching=teach(
        ("切到实操", "在讲师首页上完整演示一遍：新开标签页打开本地地址 → ⌥⌘I → ⇧⌘M → 选 Responsive 填 360×800 → 观察 → 改填 1440×900。镜头要让标签页地址栏和设备工具栏同时入画。设置入口与快捷键按录制时 Chrome 版本核对。"),
        ("讲师提示", "常见卡点：在别的标签页里开了设备工具栏；缩放比例不是 100% 误以为页面变小；页面缺少 viewport meta 时手机视口会按约 980px 排版再缩小，看起来“挤”。自定义设备在开发者工具设置 → Devices → Add custom device，选做。原 2.1 p05、p05-live 合并移来。"),
    ),
)

scene(
    id="p31", segment="补上项目经历",
    label="改好了吗", title="改好了吗？有没有弄坏别的？",
    lead="改完要检查，不只看新内容：三种视口下内容完整可读；Tab 焦点顺序与改前一致；npm run build 成功。讲师这次三项都通过：三种宽度都没有横向滚动，360 宽时每条描述折成两行；能用 Tab 停下的仍只有“查看项目”；构建完成。其中视口和 Tab 的结果是 Codex 自己用无头 Chrome 查的，Prompt 里这两项写的是由人查，前面看到的那些弯路就出在这里；自己的页面要在浏览器里亲手查。内容变多后出现的新问题，比如手机上出现横向滚动，记为剩余问题，不在这一轮顺手修。",
    html=(
        '<div class="p-rec" style="grid-template-columns:minmax(0,1fr) minmax(0,1.3fr) minmax(0,1.1fr);row-gap:12px;--rf:21px">'
        '<div class="is-head" data-reveal="0"><span>检查</span><span>讲师这次的结果</span><span>能说明什么</span></div>'
        '<div data-reveal="0"><span class="p-cell">360 · 768 · 1440</span><span class="p-cell">都没有横向滚动；360 宽时描述折成两行</span><span class="p-why">文字和排版没被挤坏</span></div>'
        '<div data-reveal="1"><span class="p-cell">Tab 键</span><span class="p-cell">能停下的仍只有“查看项目”</span><span class="p-why">键盘行为与改前一致</span></div>'
        '<div data-reveal="2"><span class="p-cell p-mono">npm run build</span><span class="p-cell">tsc 与 vite 都通过：✓ built</span><span class="p-why">构建流程成功完成</span></div></div>'
        '<div class="p-bar is-light" data-reveal="3">新出现的问题：<b>记下来，不顺手修</b></div>'
        '<p class="source-note">结果来自' + RUN22 + '；视口和 Tab 这两项是 Codex 自己查的，Prompt 里写的是由人查</p>'
    ),
    steps=["三种视口", "键盘", "构建", "新问题"],
    teaching=teach(
        ("核对记录", "2026-10-20 15:58 那次运行（能力目录开）：npm run build（tsc -b && vite build）输出“✓ built in 265ms”。视口：Codex 发现 macOS 无头 Chrome 的 --window-size=360 实际得到 500px 宽，改用同源 iframe 测，360 / 768 / 1440 下 scrollWidth 等于视口宽、无横向溢出，卡片宽 320 / 720 / 860，描述 2 / 1 / 1 行。Tab：渲染后全页只有 1 个可聚焦元素（首屏“查看项目”链接），项目卡内 0 个。截图存在临时目录，未保留。"),
        ("讲师提示", "录制时视口和 Tab 由讲师在 Chrome 里亲手查，结果列按实际显示讲；让 AI 打开浏览器自验证留到 Harness 章节（决定 10）。Codex 这次自己查了，只点一句，不展开。"),
    ),
)

# ---------- 压缩 ----------
scene(
    id="p27", segment="压缩",
    label="压缩一下继续", title="压缩以后，模型看到的是摘要",
    lead="本轮会话已经有了计划、读文件、改文件、构建输出。对它执行 /compact：Codex 先把整段历史连同一段“写交接摘要”的要求发给模型，再用这份摘要换掉历史。讲师这次的结果：压缩前最后一次请求 135 项、约 5.9 万 token；压缩后只剩 10 项、约 1.06 万 token。我们发过的消息原文都在，39 次工具调用和返回都没了。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr">'
        '<div class="p-box" data-role="ink" data-reveal="0"><span class="p-tag" data-role="ink">压缩前</span>'
        '<p style="line-height:1.7">我们的提问 · 39 次工具调用<br><b>工具返回的原文</b>（文件内容、build 输出）<br>模型的回答 · 135 项</p></div>'
        '<div class="p-join" data-reveal="1"><span>/compact</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">压缩后</span>'
        '<p style="line-height:1.7">我们发过的 3 条消息（原文）<br><b>一份交接摘要</b>（约 3400 字符）<br>初始内容（重新插入）· 10 项</p></div></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2" style="margin-top:14px"><h3>追问：npm run build 的最后一行是什么？</h3><p>它答不出原文：摘要里只记了“build 成功”，它说要重跑才能确认；三条项目经历是我们的消息，原文都答对了</p></div>'
        '<p class="source-note">压缩后保留什么由源码决定（core/src/compact.rs）。' + RUN1020 + '</p>'
    ),
    refs=[
        ref("压缩逻辑 compact.rs", blob(V160, "codex-rs/core/src/compact.rs"), "0.160.0 源码"),
        ref("压缩提示 prompt.md", blob(V160, "codex-rs/prompts/templates/compact/prompt.md"), "0.160.0 源码"),
    ],
    repro=repro([
        ("下载课程仓库，以下命令都在仓库根目录运行", "git clone --depth 1 https://github.com/prompt-to-harness/prompt-to-harness.github.io.git && cd prompt-to-harness.github.io"),
        ("建一个独立的实验目录（在 lab-runs/ 下，不会提交）", "courseware/ch02/materials/compact/setup.sh"),
        ("用课程基线启动 Codex；需要 MINIMAX_API_KEY，浏览器会打开请求面板", "cd lab-runs/compact-lab && ../../tools/clean-codex.sh --tap"),
        ("依次输入 steps.txt 的五行，每条等回答结束再发；第 4 行是 /compact", "cat courseware/ch02/materials/compact/steps.txt"),
        ("或者自动跑一轮，另开终端只读旁观", "LAB_SESSION=compact-demo LAB_HOLD=60 courseware/ch02/materials/compact/run-tmux.sh\ntmux attach -r -t compact-demo"),
        ("不跑也能看：用浏览器打开讲师运行的前后对照", "courseware/ch02/materials/compact/compare.html"),
    ], note="这是独立实验的复现步骤。完整说明、5 次运行的汇总和超时处理见 courseware/ch02/materials/compact/README.md。界面停在 Working 时，Codex 会在 5 分钟后自动重试。"),
    steps=["压缩前", "压缩后", "被换成摘要的内容"],
    teaching=teach(
        ("核对记录", "压缩提示位于 codex-rs/prompts/templates/compact/prompt.md（要求写进度与决定、约束、下一步、关键数据）；本地压缩保留最近用户消息（上限约 2 万 token）、摘要和重新插入的初始上下文；OpenAI 与 Azure provider 走远程压缩（model-provider/src/provider.rs）。"),
        ("切到实操", "在本轮修改的会话里执行 /compact，切 claude-tap 查看器对比压缩前、压缩请求、压缩后三次请求，指出本轮哪些具体内容（如读到的 src/App.tsx、build 输出）被换成了摘要；再问一句“不读文件、不跑命令，build 输出最后一行是什么”。结果和画面不同就按实际讲。上游卡住或压缩失败时，改用 materials/compact/ 的独立实验（复现按钮第 1–5 步，或第 6 步的 compare.html），画面和口播如实说明“这是另一次专门做的实验”。"),
        ("实测记录", "2026-10-20 交互界面，本节真实会话（能力目录开、推理档位 max）：确认之后 Codex 调用 33 次工具（会话累计 39 次），除了改 src/App.tsx、跑 build，还自己起预览服务器、驱动无头 Chrome 去查三种视口（Prompt 写明了浏览器由人检查）。压缩前最后一次请求 135 项、59271 token；压缩请求 request_kind 为 compaction，带全部 138 项加一段 CONTEXT CHECKPOINT COMPACTION 提示；压缩后的请求 10 项、10635 token：系统指令、3 条用户消息原文（/clear 后的第一句、本轮 Prompt、“确认”）、Skills 与权限说明、团队说明、多代理开关说明、环境信息、交接摘要（约 3400 字符，作为 user 消息，开头说明“另一个模型已经开始解决这个问题”）和新问题。追问 build 输出最后一行时，模型说摘要里只记了 build 成功，没有编造；它还把答案分成“亲眼看到的原文”“只来自摘要的”“不知道的”三类。/clear 之前的问答不在压缩后的历史里。"),
        ("备用画面", "上游卡住（界面停在 Working 超过 5 分钟）时，打开复现按钮第 6 步的 compare.html：用独立实验第 1 次运行的真实记录并排列出压缩前 25 条和压缩后 7 条，标出保留、移走、新增、重新注入，不调用模型。"),
        ("实验记录", "独立实验 2026-10-05 压缩 5 次、不压缩对照 2 次（另有 2 次因上游超时或脚本出错不计入）。5 次压缩后都是 7 条 input：3 条用户消息、摘要、权限说明与 Skills、环境信息、新问题，没有工具调用和返回，与 compact.rs 一致。摘要：4 次只留行号或计数，1 次抄下 grep 原文；5 次追问都没有编造。对照组 2 次都答出了 grep 原文。汇总表与参考记录见 materials/compact/。"),
    ),
)

# ---------- 小结 ----------
scene(
    id="p32", segment="小结",
    label="记下本轮", title="想下次接得上，可以记下这几项",
    lead="这是一页建议，不计入验收。用笔记还是截图，按自己的习惯。本轮目标和改动文件，2.3 提交时写进提交说明。",
    html=(
        '<div class="p-pair" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:20px;align-items:start">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">可以记</span>'
        '<ol class="p-notes" style="margin-top:10px"><li><span><b>本轮目标</b><small>这一轮只解决的那一个结果</small></span></li>'
        '<li><span><b>会话选择与理由</b><small>继续、/clear、压缩还是新建，为什么</small></span></li>'
        '<li><span><b>验证结果</b><small>三种视口、Tab、build</small></span></li>'
        '<li><span><b>剩余问题</b><small>发现了、但这一轮没修的</small></span></li></ol></div>'
        '<div style="display:grid;gap:12px"><div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>2.3 的提交说明</h3><p>写进本轮目标和改动文件</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>不计入验收</h3><p>笔记或截图都行</p></div></div></div>'
    ),
    steps=["可以记哪几项", "提交说明"],
    teaching=teach(
        ("讲师提示", "第 2 章不设固定记录文件（2026-10-19）。不要求学员建文件或按格式填写；这一页只给建议。"),
    ),
)

scene(
    id="p33", segment="小结",
    label="暂停自检", title="暂停自检",
    lead="先独立作答，再看解析。答案后面标出回到哪一页。第 4 题答在自己的笔记里。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>关掉终端再恢复会话，页面会自动回来吗？</h3>'
        '<div data-reveal="1"><p>不会。会话由 Harness 保存，开发服务器是另一个程序，要重新 npm run dev<span class="p-back-to" data-role="ctx">回到 三种状态</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>执行 /clear 之后，刚才改过的文件还在吗？</h3>'
        '<div data-reveal="2"><p>还在。/clear 清的是对话，文件和开发服务器不受影响<span class="p-back-to" data-role="tool">回到 /clear 之后还剩什么</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">3</span><div><h3>压缩以后，模型看不到哪些原始信息？</h3>'
        '<div data-reveal="3"><p>工具调用和返回的原文，比如读到的文件内容、命令输出；留下的是用户消息、一份摘要和初始内容<span class="p-back-to" data-role="gate">回到 压缩一下继续</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">4</span><div><h3>你这一轮为什么选继续、/clear、压缩还是新建？</h3>'
        '<div data-reveal="4"><p>没有唯一答案，理由要说出会话里的具体状态<span class="p-back-to" data-role="ok">回到 这次该怎么选</span></p></div></div></div></div>'
    ),
    steps=["暂停", "第 1 题", "第 2 题", "第 3 题", "第 4 题"],
)

scene(
    id="p34", segment="小结",
    label="本节小结", title="对话会变长，文件不跟着变",
    lead="本节留下一轮内容迭代和三项检查结果。对话每多一轮，前面的内容连同弯路都会重发；/clear 清的是对话、不是文件；压缩后，工具调用和返回换成了一份摘要。下一节：AI 交回的改动，要不要接受？课后可以再做 0–2 轮，不计分。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div><div data-reveal="0"><h3>三种状态</h3>'
        '<ul class="p-exits" style="gap:8px"><li class="is-point">模型不记</li><li class="is-point">会话由 Harness 重发</li><li class="is-point">文件与进程各自存在</li></ul></div>'
        '<div data-reveal="1" style="margin-top:14px"><h3>context 怎么变</h3>'
        '<ul class="p-exits" style="gap:8px"><li class="is-point">每轮都重发，弯路也在</li><li class="is-point">/clear 清对话，不清文件</li><li class="is-point">压缩后看到的是摘要</li></ul></div></div>'
        '<div data-reveal="2"><h3 style="text-align:center">一个习惯</h3><div class="p-star" style="width:260px;font-size:23px">一轮一个结果<br>Prompt 写清<br>现状</div></div>'
        '<div class="p-next" data-reveal="3"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.3 审改动</h3><p>AI 交回的改动，要不要接受？</p></div></div></div>'
    ),
    steps=["三种状态", "context 怎么变", "一个习惯", "下一节"],
)


lesson.write()

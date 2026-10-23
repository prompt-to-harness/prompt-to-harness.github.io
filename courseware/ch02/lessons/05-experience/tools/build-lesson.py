#!/usr/bin/env python3
"""2.5 工程经验分享：用好 context 的三个做法。本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
2026-10-21 按章文件 C2-37 重做：最后一节改为另一位讲师的经验分享，页面 id 从 p59 起新编，
原 p53–p58（五张分拣卡）转入软件工程候选池，原文见 git 历史。数字来自 2026-10-21 各一次实测，见分镜“实测记录”。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import NARROW, Lesson, chapter_map, code_lines, ref, teach  # noqa: E402

lesson = Lesson(__file__, "2.5", "用好 context 的三个做法", summary="另一位讲师分享三条平时用好 context 的做法：看懂重发的代价，换会话时自己写交接，换一个工具看它往 context 里放了什么。每条都回到本章的请求记录，看懂即可。")
scene = lesson.scene

RUN = "数字来自讲师的一次运行（2026-10-21，课程基线，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）；随版本、模型、配置和任务变化，只说明结构"
PRICE = ref("MiniMax 开放平台：定价", "https://platform.minimax.cn/docs/guides/pricing", "价格（2026-10-21 查阅）")

SECTION_QS = [
    ("2.1", "只说了一句话，模型收到了什么", "us"),
    ("2.2", "补上个人经历，看对话怎么变长", "agent"),
    ("2.3", "参考一个主页改风格：它看到了什么", "tool"),
    ("2.4", "发布上线，看 Codex 怎么用 gh", "ok"),
    ("2.5", "用好 context 的三个做法", "ctx"),
]

HANDOFF = [
    "交接（上一轮会话写的）",
    "- 本轮目标：在项目区呈现三条项目经历，原文照用",
    "- 已做：只改了 src/App.tsx 的 projects 数组，build 通过，未提交",
    "- 还剩：360 宽下三条经历的换行，人还没检查",
    "- 关键文件：src/App.tsx、src/index.css",
]


# ---------- 开场 ----------
scene(
    id="p59", segment="开场", layout="lesson-cover",
    label="换一位讲师", title="平时怎么用好 context？",
    lead="换一位讲师，分享三条平时的做法",
    html=(
        chapter_map(5) +
        '<div class="p-grid" style="--n:3;gap:14px;margin-top:22px">'
        '<div class="p-box" data-role="ink" data-reveal="2"><span class="p-tag" data-role="ink">一</span><h3>看懂重发的代价</h3><p>一问花了多少，缓存省了多少</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2"><span class="p-tag" data-role="ctx">二</span><h3>换会话时自己写交接</h3><p>决定下一轮带上什么</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="2"><span class="p-tag" data-role="tool">三</span><h3>换一个工具看请求</h3><p>同一句话，context 不一样</p></div></div>'
    ),
    steps=["最后一节", "换一位讲师", "三条做法"],
    teaching=teach(
        ("讲师提示", "本节由另一位讲师讲（章文件 C2-37）。开场一句说明换了人、这一节是经验分享；讲师切换的画面衔接（小窗、开场语）按 docs/production/ 的约定，未定稿前口播一句即可。三条都只回到本章的请求记录，不要求学员安装或操作新工具。"),
    ),
)

# ---------- 一：看代价 ----------
scene(
    id="p60", segment="看懂代价",
    label="重发的代价", title="一问花了多少，缓存省了多少",
    lead="2.1 第二步只问了一句，Codex 读了一圈文件，前后发了 8 次请求；每次都把前面的内容重发，输入一次比一次长，但大部分命中了缓存。按 MiniMax 官方价格算，这一问大约 0.055 元；没有缓存，大约 0.15 元。缓存让重复的部分便宜，但不是免费，模型也仍要读完整段历史。所以话题换了就 /clear，长期规则写进 AGENTS.md，不要指望一个长会话记住一切。",
    html=(
        '<div class="p-pair" style="grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:22px;align-items:start">'
        '<div class="p-matrix" style="grid-template-columns:minmax(0,0.8fr) minmax(0,1fr) minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>2.1 那一问</span><span>输入 token</span><span>其中缓存命中</span></div>'
        '<div data-reveal="0"><span>第 1 次</span><span>约 7.6 千</span><span>约 5.1 千</span></div>'
        '<div data-reveal="0"><span>第 4 次</span><span>约 1.55 万</span><span>约 1.11 万</span></div>'
        '<div data-reveal="0"><span>第 8 次</span><span>约 2.50 万</span><span>约 2.33 万</span></div>'
        '<div data-reveal="0" class="is-key"><span>8 次合计</span><span>约 12.6 万</span><span>约 11.1 万</span></div></div>'
        '<div class="p-grid" style="--n:1;gap:10px">'
        '<div class="p-box is-soft" data-role="ink" data-reveal="1"><h3>官方价格（元 / 百万 token）</h3><p>输入 1.00 · 缓存命中 0.10 · 输出 4.00</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>这一问约 0.055 元</h3><p>没有缓存约 0.15 元</p></div></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">话题换了就 <b>/clear</b>，长期规则写进 <b>AGENTS.md</b></div>'
        '<p class="source-note">' + RUN + '</p>'
    ),
    refs=[PRICE],
    steps=["一问的 8 次请求", "按价格换算", "一个习惯"],
    teaching=teach(
        ("实测记录", "2026-10-21 重跑 2.1 第二步（codex exec，lab-runs/ch02-context/2.1-step2-20261021-150635）：8 次请求、15 次工具调用；claude-tap 汇总 126,466 输入 / 110,501 缓存读取 / 6,995 输出 token。逐次输入 7610、8561、10786、15483、17193、19763、22109、24961，缓存命中 5063、7745、8686、11054、16033、17935、20657、23328。估算：(126466 − 110501) × 1 + 110501 × 0.10 + 6995 × 4，单位元/百万 token，约 0.016 + 0.011 + 0.028 ≈ 0.055 元；全按未命中算约 0.126 + 0.028 ≈ 0.154 元。"),
        ("讲师提示", "价格取自 MiniMax 开放平台定价页（2026-10-21 查阅：MiniMax-M3.1-Flash 输入 1.00、输出 4.00、缓存读取 0.10 元/百万 token，页面没有列缓存写入价格），录制当天再查一次，变了就按新价格重算。缓存是否另有计费规则、Codex 界面能否直接看到用量，录制前核对；核对不了就只讲“重复部分更便宜”，不报具体金额。"),
    ),
)

# ---------- 二：换会话写交接 ----------
scene(
    id="p61", segment="接着做",
    label="换会话时写交接", title="换个新会话接着做，怎样不丢东西？",
    lead="2.2 压缩时，Codex 自己写了一份交接摘要，留什么由它决定。换一个新会话接着做时，也可以由我们自己写交接：本轮目标、已做、还剩、关键文件，几行就够。讲师试了一次：新会话的第一次请求只有 6 项，交接就是那条用户消息；Codex 没有照单全收，先重新读了 App.tsx、index.css 和 git diff，回答里把“交接里写的”“刚读到的”“自己推算的”分开。长期规则放 AGENTS.md，这一轮的进度放交接。",
    html=(
        NARROW +
        '<div class="p-pair" style="grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:20px;align-items:start">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">压缩</span><h3>Codex 写的交接摘要</h3><p>2.2 那次约 2550 字符；留什么由它决定</p></div>'
        '<div data-reveal="0"><div class="p-code" style="font-size:14px;line-height:1.45"><div class="p-code-head"><span>新会话的第一句</span><span>我们写的交接</span></div>'
        '<pre style="padding:6px 12px;white-space:pre-wrap">' + code_lines(*[("", line) for line in HANDOFF]) + '</pre></div></div></div>'
        '<div class="p-grid" style="--n:3;gap:12px;margin-top:10px">'
        '<div class="p-box is-soft" data-role="ink" data-reveal="1" style="padding:8px 14px"><h3>第一次请求 6 项</h3><p>交接就是那条用户消息</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1" style="padding:8px 14px"><h3>先重新读文件</h3><p>App.tsx、index.css、git diff</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1" style="padding:8px 14px"><h3>依据分开写</h3><p>交接 · 刚读到的 · 推算的</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px">长期规则放 <b>AGENTS.md</b>，这一轮的进度放<b>交接</b></div>'
        '<p class="source-note">' + RUN + '。重新读文件核对是这一次的观察，不是每次都会这样</p>'
    ),
    steps=["两种交接", "新会话怎么用它", "放在哪里"],
    teaching=teach(
        ("实测记录", "2026-10-21，起点是 2026-10-20 那次 2.2 改完、还没提交的仓库，codex exec -s read-only 发“交接 + 继续：只读，三条经历在 360 宽下会不会难看地换行？先说要看哪些文件，结论注明依据来自交接还是刚读到的”。11 次请求、约 21 万输入 token；第 1 次请求 6 项。它先读了 App.tsx、index.css、git diff、PROJECT_BRIEF.md，没有浏览器，就写 node 脚本估算字宽和断行，回答末尾分“交接里写的”“我刚读到的”“我自己算的”三类，并说明没有真的渲染。运行目录在讲师本机 ~/.cache/p2h-lab/2.5-handoff-20261021-151326。"),
        ("讲师提示", "交接的写法只给一个例子，不立模板。和 2.2 压缩的区别只讲一句：留什么由谁决定。它这次花了 11 次请求估算字宽，可以顺带一句“没有浏览器时它会想办法，代价就在请求里”，不展开。"),
    ),
)

# ---------- 三：换工具 ----------
scene(
    id="p62", segment="换个工具",
    label="换一个工具看请求", title="换一个工具，同一句话发出去是什么样？",
    lead="同一句问候，用 Codex 和 Claude Code 各发一次，都走 MiniMax，都经 claude-tap 记录。Claude Code 的系统指令更长、工具更多，整份请求约 4.5 万字符；Codex 的系统指令只有一句，整份约 3 万字符。规则文件找法也不同：Codex 只在当前 Git 仓库里找 AGENTS.md；Claude Code 会一直往上级目录找，讲师第一次把实验目录放在课程仓库里面，它就把课程仓库的 AGENTS.md 也读进了请求。工具不同，组装出的 context 就不同，同一句 Prompt 的效果也就可能不同。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)">'
        '<div class="is-head" data-reveal="0"><span>同一句问候</span><span>Codex</span><span>Claude Code</span></div>'
        '<div data-reveal="0"><span>系统指令</span><span>1 句，约 150 字符</span><span>3 段，约 5800 字符</span></div>'
        '<div data-reveal="0"><span>工具</span><span>5 个，约 2.2 万字符</span><span>12 个，约 2.8 万字符</span></div>'
        '<div data-reveal="0" class="is-key"><span>整份请求</span><span>约 3 万字符 · 约 7.5 千 token</span><span>约 4.5 万字符 · 约 1.08 万 token</span></div>'
        '<div data-reveal="1"><span>规则文件</span><span>AGENTS.md，只在当前 Git 仓库里找</span><span>一直往上级目录找</span></div></div>'
        '<div class="p-pair" style="grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:12px;margin-top:10px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1" style="padding:8px 14px"><h3>在课程仓库里面做实验时</h3><p>Claude Code 把课程仓库的 AGENTS.md 也带进了请求</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="2" style="padding:8px 14px"><h3>工具不同</h3><p>组装出的 context 就不同</p></div></div>'
        '<p class="source-note">' + RUN + '；Claude Code 2.1.304，用课程仓库的 tools/clean-claude.sh 启动，也走 MiniMax</p>'
    ),
    steps=["同一句问候", "规则文件从哪找", "结论"],
    teaching=teach(
        ("实测记录", "2026-10-21，同一目录（课程仓库之外，第 1 章参考快照的副本），同一句“你好，用一句话介绍你能帮我做什么。”：tools/clean-claude.sh --tap -- -p 与 tools/clean-codex.sh --tap -- exec -s read-only。Claude Code 第一次请求：system 3 段约 5800 字符，12 个工具约 2.8 万字符，整份约 4.5 万字符，输入 10830 token；Codex：系统指令 145 字符，5 个工具约 2.2 万字符，整份约 3 万字符，输入 7510 token。第一次把实验目录放在 lab-runs/ 下时，Claude Code 的请求里出现了“Contents of …/prompt-to-harness.github.io/AGENTS.md”。"),
        ("讲师提示", "只做对照，不比较哪个工具更好，不要求学员安装 Claude Code。截图前检查请求里有没有个人信息：从另一个 Claude Code 会话里跑脚本时，会继承 CLAUDE_CODE_USER_EMAIL 等变量，Claude Code 会把邮箱写进请求；两个 clean-*.sh 2026-10-21 起已清掉这些变量，录制仍用讲师自己的终端。Claude Code 读取上级目录的规则文件是官方文档写明的行为（How Claude remembers your project：从当前目录逐层往上读 CLAUDE.md，没有 CLAUDE.md 时读 AGENTS.md；可用 claudeMdExcludes 排除），不是 clean-claude.sh 隔离不够：脚本隔离的是 HOME 下的个人配置。"),
    ),
)

# ---------- 小结 ----------
scene(
    id="p63", segment="小结",
    label="本节小结", title="三条做法，和这一章",
    lead="三条做法：看懂重发的代价，换会话时自己写交接，换一个工具先看它往 context 里放了什么。回看这一章：每一节都回到请求记录里找答案；项目上留下了审过的提交、公开 URL 和 ch02-homepage-live tag。下一章，给个人主页加一个小游戏。",
    html=(
        '<div class="p-grid" style="--n:3;gap:12px">'
        '<div class="p-box is-soft" data-role="ink" data-reveal="0" style="padding:8px 14px"><h3>看代价</h3><p>重发要钱，缓存只让它便宜</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="0" style="padding:8px 14px"><h3>写交接</h3><p>留什么由我们决定</p></div>'
        '<div class="p-box is-soft" data-role="tool" data-reveal="0" style="padding:8px 14px"><h3>换工具</h3><p>先看它放了什么</p></div></div>'
        '<div class="p-flow" style="--n:5;margin-top:14px">'
        + "".join(f'<div class="p-node" data-role="{role}" data-reveal="1"><h3>{num}</h3><p>{q}</p></div>' for num, q, role in SECTION_QS) +
        '</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">下一章 · 第 3 章：给个人主页加一个小游戏</div>'
    ),
    steps=["三条做法", "回看本章", "下一章"],
    teaching=teach(("讲师提示", "全章回看原在 2.5 p58，随本节重做移到这里。第 3 章预告按第 3 章定稿调整。")),
)

# 章末自检：讲透问题与负责的节以 courseware/ch02/README.md 为准
CHAPTER_QS = [
    ("我只说了一句话，模型收到了哪些别的东西？", "2.1"),
    ("这些东西是谁、按什么规则放进去的？", "2.1"),
    ("怎样让它少读、读对？", "2.1"),
    ("第二句话发出去时，带上了什么？代价是什么？", "2.2"),
    ("/clear、压缩、新会话之后，分别还剩什么？文件呢？", "2.2"),
    ("它这样改，依据在请求里的哪一块？它看全了吗，有什么看不见？", "2.3"),
    ("这些内容最后发到了哪里？", "2.4"),
]

scene(
    id="p63a", segment="小结",
    label="章末自检", title="章末自检：这一章的七个问题",
    lead="这七个问题就是第 2 章的目标。先独立作答，答在自己的笔记里；哪一题答不上来，就回到右边那一节再看一遍。不计分。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答</span>'
        '<style>.x-p63a span{padding:3px 10px;font-size:17px;line-height:1.35}</style>'
        '<div class="p-matrix x-p63a" data-reveal="1" style="margin-top:6px;grid-template-columns:minmax(0,.2fr) minmax(0,2.4fr) minmax(0,.5fr)">'
        '<div class="is-head"><span>#</span><span>问题</span><span>回到</span></div>'
        + "".join(f'<div><span>{i}</span><span>{q}</span><span>{sec}</span></div>' for i, (q, sec) in enumerate(CHAPTER_QS, 1)) +
        '</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:8px">答不上来的，回到那一节；第 2 章到此结束</div>'
    ),
    steps=["暂停", "七个问题", "答不上来就回去"],
    teaching=teach(("讲师提示", "七个问题取自第 2 章文件的“讲透问题”（C2-51），改问题时两处一起改。2.5 本身不设自检，这一页属于全章。")),
)


lesson.write()

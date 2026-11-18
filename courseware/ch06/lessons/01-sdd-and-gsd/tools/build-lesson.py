#!/usr/bin/env python3
"""6.1 已有规格，为什么还要再接一套框架：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图、外部截图与重画图内联见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页已完成视觉重设计与图文佐证接入（含 p03a、p05a）；p06、p07 先占位，待备课实跑后再写。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, code_lines, redrawn, ref, repro, shot  # noqa: E402

GSD_REPO = "https://github.com/open-gsd/gsd-core"
GSD_TAG = "v1.13.0"
GSD_SHA = "b5b9814f033b6d32810562fd4068e1f107da29ec"
ALL_LAYERS = ("Brief", "Spec", "Acceptance", "Plan", "Tasks")

lesson = Lesson(
    __file__, "6.1", "已有规格，为什么还要再接一套框架",
    summary="先用一页回顾第 4、5 章已经是规格驱动，再认清 GSD 是用来接手已有规格的社区实现，立住不能另起规划覆盖已有文档的边界。",
    prep=[
        "在通过第 5 章验收的 JSON Crack 课程副本上确认 git status --short 无未提交改动，docs/specs/ 五份规格齐全。",
        "确认本机 node --version 为 v24+、npm --version 为 10+，满足 @opengsd/gsd-core@1.13.0 的运行门槛。",
        "开录前单独检查 npx @opengsd/gsd-core@1.13.0 --codex --local 的写入目录与权限声明，不在上屏命令中改用 @latest。",
        "若当前录制环境 Sub-agent 派发受限，提前备好标明来源的回放记录，并在口播中如实区分实际派发与降级观察。",
    ],
)
scene = lesson.scene


def pending(pid, segment, question, note):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html=f'<div class="p-bar is-light" data-reveal="0">{note}</div>',
        steps=["待演练后制作"],
    )


# ---------- 开篇 ----------
scene(
    id="p01", segment="开篇", layout="lesson-cover",
    label="已有规格，为什么还要再接一套框架",
    title="已有规格，为什么还要再接一套框架？",
    lead="第 4、5 章已经留下五层规格和通过验收的 JSON Diff；本章在已有项目上接工作流，不推倒重来",
    html=(
        chapter_map(1)
        + '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px" data-reveal="1">'
        '<div class="p-box" data-role="ctx" style="padding:14px 18px">'
        '<div class="p-head"><h3>第 4、5 章已交出</h3><span class="p-tag" data-role="ctx">既有成果</span></div>'
        '<p><code>docs/specs/</code> 五层规格 ＋ 已验收的 JSON Diff</p></div>'
        '<div class="p-join"><span>第 6 章接着做</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="us" style="padding:14px 18px">'
        '<div class="p-head"><h3>接入社区工作流</h3><span class="p-tag" data-role="us">增量变更</span></div>'
        '<p>组织摸底、验证与规则变更，不从零再建一套</p></div></div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:12px">本节问题：手里已有规格，为什么还要再接一套框架？先认清名字和边界，再上手</div>'
    ),
    steps=["本章位置", "第 4、5 章交出什么", "本节问题"],
)


# ---------- 认清 SDD 与 GSD ----------
scene(
    id="p02", segment="认清 SDD 与 GSD",
    label="第 4、5 章已经在做的，为什么叫 SDD",
    title="前面两章在做的，为什么叫 SDD？",
    lead="用三句话收住对 SDD 的回顾，不再重讲第 4 章的五层定义；说完立刻进入 GSD。",
    html=(
        anchor(style="stairs", mini=True, done=ALL_LAYERS, reveal=0)
        + '<div class="p-grid" style="--n:3;margin-top:8px">'
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:10px 14px">'
        '<span class="p-tag" data-role="us" style="margin-bottom:6px">1 · 名字定位</span>'
        '<h3 style="font-size:23px;margin-bottom:4px">前面两章已是 SDD</h3>'
        '<p style="font-size:18px">不依赖特定框架，照样是规格驱动开发</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:10px 14px">'
        '<span class="p-tag" data-role="ctx" style="margin-bottom:6px">2 · 工作顺序</span>'
        '<h3 style="font-size:23px;margin-bottom:4px">先写清行为再改码</h3>'
        '<p style="font-size:18px">由人批准可观察规则与案例，再分片实现</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="2" style="padding:10px 14px">'
        '<span class="p-tag" data-role="ok" style="margin-bottom:6px">3 · 权威位置</span>'
        '<h3 style="font-size:23px;margin-bottom:4px">规格留在 docs/specs/</h3>'
        '<p style="font-size:18px">换工具或接框架，都不重写已批准的文档</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:8px;padding:7px 18px;font-size:20px">三句话定位完毕：前面已经是工具无关的 SDD；接下来看社区实现 <b>GSD</b> 管什么</div>'
    ),
    steps=["前面两章已是 SDD", "先写清行为再改码", "规格不随工具重写"],
)

scene(
    id="p03", segment="认清 SDD 与 GSD",
    label="那么 GSD 是什么", title="那么 GSD 是什么？",
    lead="GSD 是开源社区里的一套 SDD 工作流实现，用来接手已有规格，把调查、规划、执行和验证串起来。课程锁定固定版本，使用前先审查。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;gap:18px">'
        '<div class="p-box is-dashed" data-role="gate" data-reveal="0" style="padding:14px 18px">'
        '<div class="p-head"><h3>它不是什么</h3><span class="p-tag" data-role="gate">别混淆</span></div>'
        '<p>不是另一份产品需求，也不是用来替代 <code>docs/specs/</code> 的新规格</p></div>'
        '<div class="p-join" data-reveal="1"><b>≠</b><span>角色边界</span></div>'
        '<div class="p-box" data-role="tool" data-reveal="1" style="padding:14px 18px">'
        '<div class="p-head"><h3>它是什么</h3><span class="p-tag" data-role="tool">社区实现</span></div>'
        '<p>接手已有项目与规格，把调查、规划、执行和验证组织成固定阶段</p></div></div>'
        '<div class="p-code" data-reveal="2" style="margin-top:12px">'
        '<div class="p-code-head"><span>课程锁定版本（先审查再安装，不追 @latest）</span><span>MIT · Node.js &gt;= 24</span></div>'
        f'<pre>{code_lines(("", f"repo:   open-gsd/gsd-core ({GSD_TAG})"), ("hl", f"commit: {GSD_SHA}"), ("", "note:   录制前须实机核验安装与派发，未实测前不宣称已走通"))}</pre></div>'
    ),
    steps=["它不是新需求", "它是社区工作流实现", "锁定版本，先看再装"],
    repro=repro([
        ("在安装前先核对本机 Node.js 与 npm 版本（GSD 1.13.0 发布包要求 Node.js 24+、npm 10+）。", "node --version\nnpm --version"),
        ("查看固定版本包信息与许可证声明，不使用浮动的 @latest。", "npm view @opengsd/gsd-core@1.13.0 version license engines"),
        ("在 JSON Crack 课程副本根目录做本地安装示例；安装后需新开 Codex CLI 会话。正式实操留在 p06 演练。", "npx @opengsd/gsd-core@1.13.0 --codex --local"),
    ], note="本折叠框仅供核对固定版本与环境门槛；本页只做概念定位，尚不执行安装。", label="参考命令：版本核对与本地安装"),
    refs=[
        ref(f"GSD Core {GSD_TAG} Release", f"{GSD_REPO}/releases/tag/{GSD_TAG}", "版本依据"),
    ],
)

scene(
    id="p03a", segment="认清 SDD 与 GSD", layout="evidence-scene",
    label="官方仓库怎么定位 GSD Core",
    title="官方仓库怎么定位 GSD Core？",
    lead="打开固定提交下的官方 README，看它怎样描述自己的定位、为什么拆给独立 subagent，以及每个阶段重复哪五步。",
    html=shot(
        "external/github-gsd-core-overview.png",
        "github.com · open-gsd/gsd-core · v1.13.0 README",
        "GSD Core 官方 README 中 What is GSD Core 与 How it works 截图",
        height=340,
        note="五步循环 Discuss → Plan → Execute → Verify → Ship；课程固定锁在 v1.13.0，不追 @latest",
        reveal=0,
        note_reveal=1,
    ),
    steps=["看官方定位与五步循环", "锁固定版本，不追 latest"],
    refs=[
        ref("GSD Core 固定提交 README", f"{GSD_REPO}/tree/{GSD_SHA}#what-is-gsd-core", "官方说明"),
    ],
)

scene(
    id="p04", segment="认清 SDD 与 GSD",
    label="GSD 能接手什么，不能推翻什么",
    title="GSD 能接手什么，不能推翻什么？",
    lead="进场前立住全章最硬的一条边界：框架用来接手既有规格和代码，绝不能另起一套规划去覆盖已经批准的文档。",
    html=(
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:stretch">'
        '<div class="p-set is-solid" data-role="ok" data-reveal="0">'
        '<h3>能接手的既有资产</h3>'
        '<div class="p-items">'
        '<div class="p-item is-picked"><code>docs/specs/</code> 已批准的五层规格<span class="p-mark">需求依据</span></div>'
        '<div class="p-item">第 5 章已通过验收的 JSON Diff 实现</div>'
        '<div class="p-item">本地可定位、可回看的提交检查点</div>'
        '</div></div>'
        '<div class="p-set" data-role="gate" data-reveal="1">'
        '<h3>不能推翻的三条红线</h3>'
        '<div class="p-items">'
        '<div class="p-item is-wrong">另起一套规划，覆盖 <code>docs/specs/</code></div>'
        '<div class="p-item is-wrong">把框架生成的流程文件当成新产品需求</div>'
        '<div class="p-item is-wrong">把已完成的 JSON Diff 重列成全套新任务</div>'
        '</div></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">权威需求始终留在 <code>docs/specs/</code>；GSD 负责组织后续工作，无权改写既有依据</div>'
    ),
    steps=["能接手的既有资产", "不能推翻的三条红线", "权威需求留在 docs/specs/"],
)


# ---------- 第一次上手 ----------
scene(
    id="p05", segment="第一次上手",
    label="第一次上手，应该看什么、不做什么",
    title="第一次上手，先看什么、不做什么？",
    lead="切去现场前先核对四项检查点，并划清本节只做只读摸底（onboard 与一次 mapper 委派），不导入改规格，也不改生产代码。",
    html=(
        '<div class="p-bar is-light" data-reveal="0" style="font-size:20px">上手前四项检查点：<b>v1.13.0 版本与权限</b> · <b>第 5 章检查点可定位</b> · <b>docs/specs/ 完好</b> · <b>工作区干净</b></div>'
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:12px">'
        '<div class="p-box" data-role="tool" data-reveal="1" style="padding:16px 20px">'
        '<div class="p-head"><h3>本节只做（只读摸底）</h3><span class="p-tag" data-role="tool">6.1 范围</span></div>'
        '<ul class="p-exits" style="margin-top:10px;gap:8px">'
        '<li class="is-pass" style="font-size:20px">运行 <code>$gsd-onboard</code> 认识现有仓库</li>'
        '<li class="is-pass" style="font-size:20px">发起一次实际 mapper 调查，生产代码只读</li>'
        '<li class="is-pass" style="font-size:20px">主 Agent 抽查源码出处与跨文档结论</li></ul></div>'
        '<div class="p-box" data-role="gate" data-reveal="2" style="padding:16px 20px">'
        '<div class="p-head"><h3>本节不做（留给后续）</h3><span class="p-tag" data-role="gate">严守边界</span></div>'
        '<ul class="p-exits" style="margin-top:10px;gap:8px">'
        '<li class="is-stop" style="font-size:20px">不执行完整规格导入，不提前批准 CR-01</li>'
        '<li class="is-stop" style="font-size:20px">不修改任何生产代码或已有五层规格</li>'
        '<li class="is-stop" style="font-size:20px">不把已验收功能重拆成全套待开发任务</li></ul></div></div>'
    ),
    steps=["上手前四项检查点", "本节只做只读摸底", "本节不越界改代码"],
)

scene(
    id="p05a", segment="第一次上手",
    label="四个 mapper 怎么分工，谁来核对结果",
    title="四个 mapper 怎么分工，谁来核对？",
    lead="GSD 的完整调查把任务按 tech、arch、quality、concerns 分给四个独立上下文角色，分别写入 .planning/codebase/ 的七份文档；主 Agent 与人仍须抽查源码依据。",
    html=redrawn(
        "gsd-workflow",
        "gsd-mapper-roles",
        style="course",
        max_height=306,
        source="据 open-gsd/gsd-core v1.13.0 固定提交 codebase mapper 分区设计与 OpenAI Codex Subagents 文档绘制；Brooks/Conway 为协作成本类比",
    ),
    steps=["左侧源码只读与规格禁改", "四个角色分区写七份文档", "主 Agent 与人抽查把关"],
    refs=[
        ref("Codex 官方文档：Subagents", "https://learn.chatgpt.com/codex/agent-configuration/subagents", "官方依据"),
        ref(f"GSD Core {GSD_TAG} 固定源码", f"{GSD_REPO}/tree/{GSD_SHA}", "框架源码"),
    ],
)

pending(
    "p06", "第一次上手",
    "当前副本对得上起点吗？第一次接触该怎么发出？",
    "待备课实跑后再写；不预写 Agent 回答或运行结果",
)

pending(
    "p07", "第一次上手",
    "怎样判断这次上手没有把已有规格覆盖掉？",
    "待备课实跑后再写；不预写 Agent 回答或运行结果",
)


# ---------- 判断与自检 ----------
scene(
    id="p08", segment="判断与自检",
    label="第一次接触做完了，是不是就可以开始改规则了",
    title="摸底做完了，现在就能改规则吗？",
    lead="第一次接触做完后，先看我们处在本章四步路线里的哪一格，判断现在能不能直接动手改规则和生产代码。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 18px">'
        '<div class="p-head"><h3 style="font-size:24px">学员判断：摸底文档生成好了，现在就能直接改规则和代码吗？</h3><span class="p-tag" data-role="us">先想一步</span></div></div>'
        '<div class="p-flow" style="--n:4;column-gap:32px;margin-top:12px" data-reveal="1">'
        '<div class="p-node" data-role="ok"><span class="p-num">6.1 · 当前停在这</span><h3>认清边界与摸底</h3><p>规格未丢，完成只读抽查</p></div>'
        '<div class="p-node" data-role="ctx" style="opacity:.65"><span class="p-num">6.2 · 下一步</span><h3>明确 CR-01 并建流</h3><p>导入规格，排验证矩阵</p></div>'
        '<div class="p-node" data-role="ctx" style="opacity:.65"><span class="p-num">6.3 · 再下一步</span><h3>验收工作流</h3><p>核对去向，拦住跑偏</p></div>'
        '<div class="p-node" data-role="ctx" style="opacity:.65"><span class="p-num">6.4 · 最后实施</span><h3>红绿测试与 UAT</h3><p>最小修改并人工验收</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px"><b>还不可以</b>：本节只完成定位与只读摸底；指向 CR-01 的工作流要到 6.2 才建立</div>'
    ),
    steps=["先做判断", "看清四步路线位置", "本节还不改规则"],
)

scene(
    id="p09", segment="判断与自检",
    label="框架初始化时生成了另一套规划文档，哪种做法对",
    title="初始化多出一套规划文档，怎么处理？",
    lead="框架初始化时若生成了新的规划材料，请先暂停判断下面两种做法哪一种守住了本章边界，再看盖章结论。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先比较两种做法，自己选定再往下看</span>'
        '<div class="p-quiz" style="margin-top:12px">'
        '<div class="p-q" data-role="gate">'
        '<div class="p-say">做法 A：用框架新生成的规划覆盖原来的五层规格，后面全按新的走</div>'
        '<span class="p-stamp" data-role="gate" data-reveal="1">✗ 越界覆盖</span>'
        '<div style="margin-top:8px;font-size:19px;color:#A8350F" data-reveal="1">已批准的 <code>docs/specs/</code> 是需求依据，覆盖后会丢失前面锁定的产品边界</div></div>'
        '<div class="p-q" data-role="ok">'
        '<div class="p-say">做法 B：保留已有规格作为需求依据，把新生成的材料当成待核对的工作资产</div>'
        '<span class="p-stamp" data-role="ok" data-reveal="2">✓ 守住依据</span>'
        '<div style="margin-top:8px;font-size:19px;color:#11652F" data-reveal="2">框架产物只管辅助调查与执行进度，每一条都须对回既有规格核对</div></div></div>'
    ),
    steps=["暂停比较两种做法", "做法 A：越界覆盖", "做法 B：守住既有依据"],
)

scene(
    id="p10", segment="小结",
    label="带着什么进入 6.2", title="带着什么进入 6.2？",
    lead="收束 6.1 的核心判断与三项产出，准备在 6.2 明确变更目标 CR-01 并建立工作流。",
    html=(
        '<div class="p-sketch">'
        '<div class="p-ribbon" data-reveal="0">6.1 小结 · 先立住规格主权，再接社区框架</div>'
        '<div data-reveal="0"><h3 style="text-align:center">一个核心判断</h3>'
        '<div class="p-star" style="width:220px;font-size:22px">再接一套框架<br>是为了接手规格<br>不是另起炉灶</div></div>'
        '<div data-reveal="1"><h3>本节留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass" style="font-size:21px">SDD 与 GSD 的角色定位</li>'
        '<li class="is-pass" style="font-size:21px">不覆盖 <code>docs/specs/</code> 的硬边界</li>'
        '<li class="is-pass" style="font-size:21px">固定版本与一次经抽查的摸底</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>6.2 构建工作流</h3>'
        '<p>亮出目标 CR-01，把已有规格接进 GSD 工作流</p></div></div>'
        '</div>'
    ),
    steps=["一个核心判断", "本节留下的", "下一节 6.2"],
)

lesson.write()

#!/usr/bin/env python3
"""2.3 参考一个主页改风格：它看到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
from html import escape
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, anchor, chapter_map, ref, repro, teach  # noqa: E402

lesson = Lesson(__file__, "2.3", "参考一个主页改风格：它看到了什么", summary="先给 2.2 的内容留一个检查点：只看范围和出处，提交 homepage-v1。再找一个喜欢的主页，分两轮改出自己的风格；每一轮都回到请求记录，看它拿到的参考到底是什么、有什么看不见，审过再提交或 git restore。")
scene = lesson.scene


# 2026-10-21 20:30 那次 2.2 运行（Done when 已简化）留下的工作区与请求记录，和 2.2 p23、p24、p27、p30、p31 是同一次，见分镜“事实边界与素材”
RUN = "讲师用课程基线在交互界面里的一次运行（2026-10-21 20:30，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max），和 2.2 是同一次"
SAMPLE = "画面中的命令输出来自" + RUN + "留下的工作区，Git 2.50.1；你的输出以自己的 diff 为准。"
RECORD = "来自产生这份 diff 的那次运行的请求记录，命令有删节；工具名、命令和次数随每次运行变化"
RUN1021 = "讲师用课程基线的一次运行（2026-10-21，codex exec，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）"


# ---------- 拿到 diff ----------
scene(
    id="p35", segment="先留检查点", layout="lesson-cover",
    label="这一节做什么", title="参考主页，改出自己的风格",
    lead="先给 2.2 留检查点，再参考主页改风格；每一轮都问它看到了什么",
    html=(
        chapter_map(3) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="ok" data-reveal="1"><span class="p-tag" data-role="ok">先</span><p class="p-big" style="font-weight:500">看范围和出处，提交 homepage-v1</p></div>'
        '<div class="p-join" data-reveal="2"><span>再</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="us" data-reveal="2"><span class="p-tag" data-role="us">重点</span><p class="p-big" style="font-weight:500">参考一个主页，改两轮风格</p></div></div>' +
        '<div style="margin-top:14px">' + anchor(lit=("规则", "工具返回", "这一句"), outside=("没读的文件", "浏览器里的页面", "参考主页"), reveal=2) + '</div>'
    ),
    steps=["回到地图", "先留检查点", "再改风格"],
    teaching=teach(("讲师提示", "本节重点是改风格（章文件 C2-61）；审 2.2 内容只看范围和出处，两页带过。")),
)

scene(
    id="p36", segment="先留检查点",
    label="范围和出处", title="先看范围和出处",
    lead="先用两条命令看范围，再对照 Done when 看内容：页面上的每一句，都能在 profile.md 里找到吗？git status --short 列出所有变化，包括还没被 Git 跟踪的新文件；git diff --stat 只统计已跟踪文件还没暂存的修改：新文件要另外打开看，已经 git add 的改动要用 git diff --cached --stat 看。讲师这次多了一行 ?? AGENTS.md：它是 2.2 我们自己写的规则，不是 Codex 建的，--stat 里看不到它。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px">'
        '<div class="p-term" data-copy="git status --short" data-reveal="0"><div class="dim">$ git status --short</div><div> M src/App.tsx</div><div>?? AGENTS.md</div></div>'
        '<div class="p-term" data-copy="git diff --stat" data-reveal="1"><div class="dim">$ git diff --stat</div><div> src/App.tsx | 12 ++++++++++--</div><div> 1 file changed, 10 insertions(+), 2 deletions(-)</div></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="2"><h3>src/App.tsx</h3><p>预期之内：项目数据就在这里</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2"><h3>?? AGENTS.md</h3><p>新文件，不在 --stat 里；是我们在 2.2 写的规则，打开看一眼，一起提交</p></div></div>'
        '<p class="source-note">' + SAMPLE[:-1] + '</p>'
    ),
    steps=["status", "diff --stat", "对得上吗"],
    teaching=teach(
        ("命令说明", "未跟踪文件所在目录整个都是新的时，git status --short 只显示目录名（如 ?? src/components/），加 --untracked-files=all 可列出目录里的每个文件。"),
        ("核对记录", "2026-10-21 20:30 那次运行（lab-runs/ch02-context/2.2-simple-20261021-203050）结束后，在它的工作区运行 git status --short 和 git diff --stat，输出与画面一致：改了 src/App.tsx（+10 −2），另有未跟踪的 AGENTS.md（4 行，2.2 p27a 讲师写的）。Codex 在完成报告里说明 AGENTS.md 是它开工前就存在的未跟踪文件。16:22 那次输出相同。src/App.tsx 的改动与 materials/homepage-v1.diff 逐行相同。学员没写 AGENTS.md 时没有这一行。"),
        ("讲师提示", "若 2.2 的真实 diff 出现了无关文件或 package.json 变化，在这里就地指出，并在 p40 之前走“缩小”或“拒绝”（三种处置见 p40c）。"),
    ),
)

STYLE_PROMPT = """Goal：参考 Hyperspace 的风格，把我的主页改出新样子：配色和版式都可以改。
Context：参考 https://html5up.net/uploads/demos/hyperspace/ 。先用 curl 取这个页面的 HTML
和它引用的 CSS（要联网，会弹申请，我来批准），告诉我它的风格是怎样的
（配色、各区块怎么铺、版式），再提计划，等我确认再改。
Constraints：页面上的文字不变，每一句都要能在 profile.md 里找到；不加依赖，
不引入远程字体和图片；改结构时尽量沿用现有组件；正文和背景的对比度要够。
Done when：我在浏览器里看过、觉得像；你跑 build 成功；页脚注明风格参考的出处；
告诉我改了哪些区块、为什么。"""

COMMIT = 'git commit -m "homepage-v1: 补充项目经历" -m "本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx、AGENTS.md"'

scene(
    id="p40", segment="先留检查点",
    label="留下检查点", title="提交一次，留下检查点",
    lead="范围对、每处改动都找得到依据、Prompt 之外的动作也都经过我们同意，就接受；三种处置（接受、缩小、拒绝）留到后面的风格改动再细讲，那里更可能用上。审过了就提交：只暂存审过的文件，这次是 src/App.tsx 和我们自己写的 AGENTS.md；再看一遍待提交的内容，然后提交，提交说明写本轮目标和改动文件。这次提交就是检查点。接受错了也回得去：还没提交的用 git restore 放弃修改，已经提交的用 git revert 加一个撤回提交，原来的提交留在历史里。/clear 和压缩只动对话，不动文件；回退靠 git。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git add src/App.tsx AGENTS.md"><div class="dim">$ git add src/App.tsx AGENTS.md</div><div class="dim">$ git diff --cached --stat</div><div> AGENTS.md   |  4 ++++</div><div> src/App.tsx | 12 ++++++++++--</div><div> 2 files changed, 14 insertions(+), 2 deletions(-)</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:8px" data-copy="' + escape(COMMIT) + '"><div class="dim">$ git commit -m "homepage-v1: 补充项目经历" \\</div>'
        '<div class="dim">    -m "本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx、AGENTS.md"</div><div class="ok">[main 7ce0e9f] homepage-v1: 补充项目经历</div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:10px">接受错了：还没提交用 <b>git restore</b>，已经提交用 <b>git revert</b> · 回退靠 git，不靠对话</div>'
        '<p class="source-note">' + SAMPLE + ' 7ce0e9f 是示例短哈希，每次提交都不同。</p>'
    ),
    repro=repro([
        ("在课程仓库根目录，用第 1 章参考快照建一个练习仓库，不动你自己的个人主页", "cp -R starters/personal-homepage/ch01-complete lab-runs/revert && cd lab-runs/revert\ngit init -q -b main && git add -A && git commit -qm baseline"),
        ("应用 homepage-v1 的改动并提交一次，提交说明写本轮目标与改动文件", "git apply ../../courseware/ch02/materials/homepage-v1.diff && git add src/App.tsx\ngit commit -q -m 'homepage-v1: 补充项目经历' -m '本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx'"),
        ("在演示分支上撤回这次提交", "git switch -c demo-revert && git revert --no-edit HEAD && git log --oneline -3 && git show --stat HEAD"),
        ("检查：撤回提交只改了 src/App.tsx，原来的提交还在历史里；然后回到 main，删掉演示分支", "git switch main && git branch -D demo-revert"),
    ], note="讲师 2026-10-20 按此实测（Git 2.50.1）。需要已配置 git user.name 与 user.email。"),
    steps=["暂存并再看一遍", "提交并写清说明", "接受错了怎么回去"],
    teaching=teach(
        ("讲师提示", "这一页只讲提交一次留检查点；restore 和 revert 各一句，revert 的完整步骤在页面上的复现按钮里，讲师可在临时分支演示，学员看懂即可。不教改写历史（reset、amend）。哈希每次不同，按实际输出讲。"),
    ),
)

# 2.3 风格参考的候选主页（截图与许可见 materials/external/README.md 的“2.3 风格参考”一节，2026-10-23 截取）
REFS = [
    ("ref-hyperspace.png", "html5up.net · CC BY 3.0", "Hyperspace 模板首屏：整块紫色", True),
    ("ref-brittanychiang.png", "brittanychiang.com · 注明出处", "Brittany Chiang 的主页：深蓝两栏", False),
    ("ref-freelancer.png", "Start Bootstrap · MIT", "Freelancer 模板首屏：青绿页头", False),
    ("ref-jonbarron.png", "jonbarron.info · 欢迎复用", "Jon Barron 的主页：白底蓝链接", False),
]


def ref_card(src, bar, alt, picked):
    tag = '<span class="p-tag" data-role="us" data-reveal="1" style="position:absolute;right:8px;top:36px">这次用</span>' if picked else ""
    edge = ";outline:3px solid #D9481C;outline-offset:3px" if picked else ""
    return (f'<div class="p-page" style="position:relative{edge}">'
            f'<div class="p-page-bar" style="font-size:13px"><i></i><i></i><i></i>{bar}</div>'
            f'<img src="external/{src}" alt="{escape(alt)}" style="display:block;width:100%;height:200px;object-fit:cover;object-position:top">{tag}</div>')


scene(
    id="p40a0", segment="改风格",
    label="几个参考主页", title="想要什么样的主页？先看几个参考",
    lead="同一份 profile.md，可以做成完全不同的样子。这里有四个公开的主页或模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。这次的示例用 Hyperspace，它和我们现在的主页差别最大，改完一眼看得出来。你可以选别的，也可以找自己喜欢的主页；参考的是风格，用的时候按各自的许可注明出处。",
    html=(
        '<div class="p-grid" style="--n:4;gap:14px" data-reveal="0">'
        + "".join(ref_card(*r) for r in REFS) +
        '</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:16px">学的是风格，<b>不照搬别人的代码和文字</b> · 用的时候注明出处</div>'
    ),
    refs=[
        ref("Hyperspace", "https://html5up.net/uploads/demos/hyperspace/", "参考主页"),
        ref("Brittany Chiang", "https://brittanychiang.com/", "参考主页"),
        ref("Freelancer", "https://startbootstrap.github.io/startbootstrap-freelancer/", "参考主页"),
        ref("Jon Barron", "https://jonbarron.info/", "参考主页"),
        ref("HTML5 UP 许可（CC BY 3.0）", "https://html5up.net/license", "许可", kind="read"),
        ref("bchiang7/v4 的 README", "https://github.com/bchiang7/v4", "许可", kind="read"),
        ref("startbootstrap-freelancer（MIT）", "https://github.com/StartBootstrap/startbootstrap-freelancer", "许可", kind="read"),
    ],
    steps=["四个参考", "这次用哪个", "注明出处"],
    teaching=teach(
        ("讲师提示", "四张都是首屏截图（courseware/tools/capture-source.py，2026-10-23），Jon Barron 那张只截到第一篇论文，下面的合影不截。录制时可以在浏览器里点开第一行的链接，往下滚一屏让学员看整页。可剪辑时，换一个参考再跑一组，最后把两组结果并排给学员看（分镜 p40a0）。"),
    ),
)

scene(
    id="p40a", segment="改风格", layout="prompt-scene", prompt=STYLE_PROMPT,
    label="照着参考改", title="照着参考改，样子可以变，内容不能变",
    lead="这次照着 Hyperspace 改，配色和版式都可以变。约束只留四条：页面上的文字不变，每一句都要能在 profile.md 里找到；不加依赖，不引入远程字体和图片；改结构时尽量沿用现有组件；正文和背景的对比度要够。守住的是“内容是我的”，不是“样子不变”。Prompt 里点明让它用 curl 取参考页面的 HTML 和 CSS，联网我们来批准；取回来以后先说看到的风格和计划，等我们确认再改。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>样子可以变</b><small>配色和版式都可以改</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>用 curl 取 HTML 和 CSS</b><small>要联网，我们来批准</small></span></li>'
        '<li class="is-ok" data-reveal="2"><span><b>内容不能变</b><small>文字都在 profile.md 里；先说计划</small></span></li></ol></div>'
    ),
    steps=["样子可以变", "用 curl 取", "内容不能变"],
    teaching=teach(
        ("切到实操", "参考主页用 Hyperspace（p40a0 圈出的那个），排练脚本 materials/mainline/run-2.2.sh 用的是同一份 Prompt。批准框出现时，读清它要访问的网址再同意。它说完看到的风格和计划后，确认再执行；第一轮约 9 分钟（排练：说风格和计划约 3.6 分钟，执行约 5 分钟），录制时剪掉等待，口播提一句“这一步要等几分钟”（C2-74）。页脚注明出处写进了 Done when（CC BY 3.0 要求署名，2026-10-23 排练里没要求时它没写），p40c 审查时核对。"),
        ("讲师提示", "2026-10-23 改为参考 Hyperspace、放开版式（C2-72）：只改颜色或只改一处时效果弱，放开后前后差别明显，文字约束都守住了（LOG.md 实测记录）。网页搜索在 MiniMax 下只拿到首屏摘要，所以仍点明用 curl。"),
    ),
)

scene(
    id="p40b", segment="改风格",
    label="它拿到了什么参考", title="它拿到的“参考”，到底是什么",
    lead="我们在浏览器里看到的主页，不会自己进入 context。把参考送进去有三条路：网页搜索、curl、截图。网页搜索是默认的工具，在 MiniMax 下由服务端执行，只返回首屏摘要，取回的内容也不进请求记录；这次我们让它用 curl 在本地取，联网由我们批准，取回的 HTML 和 CSS 作为工具返回进了 context，请求记录里看得见。可它拿到的是代码，不是我们看到的页面：样子要靠它读 CSS 推出来。截图正好相反，它看到的是样子，看不到代码。",
    html=(
        '<div class="p-grid" style="--n:3;gap:14px">'
        '<div class="p-box" data-role="tool" data-reveal="0"><span class="p-tag" data-role="tool">网页搜索</span><p>默认工具，只拿到摘要</p><p class="p-sub">服务端执行，内容不进记录</p></div>'
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">curl（这次）</span><p>拿到 HTML 和 CSS</p><p class="p-sub">我们批准联网，内容进记录</p></div>'
        '<div class="p-box" data-role="ink" data-reveal="1"><span class="p-tag" data-role="ink">截图</span><p>拿到的是样子</p><p class="p-sub">这个模型能读图（实测）</p></div></div>'
        '<div style="margin-top:12px">' + anchor(lit=("工具返回", "这一句"), note="这次：curl 取回的 HTML 和 CSS 在“工具返回”这一块，记录里看得见", reveal=2) + '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:10px">它拿到的是代码，<b>不是我们看到的页面</b>；先问它看到了什么</div>'
    ),
    steps=["网页搜索", "curl 和截图", "这次在哪一块", "结论"],
    teaching=teach(
        ("切到实操", "第 3 步切 claude-tap 查看器，找这一轮里 curl 的那几次调用和返回：HTML 和 CSS 的原文就在工具返回里（长的会被截断，可以顺带指一下）。再指 p40a 那一轮它说“看到了什么”的那段回答，对照返回里的 class。如果它没用 curl、改用了网页搜索，就按实际讲：记录里只有打开的网址，内容看不到。"),
        ("核对记录", "2026-10-22 讲师机器上用 curl 实测两个主页：brittanychiang.com 的 HTML 里有经历的文字（服务端渲染），但版式靠 Tailwind 的 class 名和 CSS 文件，HTML 本身看不出长什么样；miaodx.com 的在线简历页 HTML 里没有正文，只有“浏览器未启用 JavaScript”的提示，正文由脚本渲染。默认沙箱不联网见 2.4 的实测（2026-10-07）。2026-10-22 用 run-2.2.sh 排练两次（参考 brittanyc"
                 "hiang.com、jonbarron.info，lab-runs/ch02-context/2.2-profile-*-20261022-174731，claude-tap 会话 87745911、bf2d2e01）：它用 Codex 的 web_search 工具打开了地址（brittanychiang.com 那次 4 次，jonbarron.info 那次 3 次，动作是 open_page），这个工具在模型服务那一侧执行，不经本地沙箱，也不用人批准；请求里这个工具的配置是 `exter"
                 "nal_web_access: false`。取回的只有首页摘要，brittanychiang.com 那次没拿到 Experience 区块，jonbarron.info 的 cv.html 没打开；缺的部分，它用 Prompt 里的描述加上自己“记得”的那个网站补齐（推理里写出了一段它以为的页面结构，没有核实）。取回的内容不在 claude-tap 记录的请求里，记录里只有“打开了哪个网址”。两次做出的时间线样式相近。最初只看画面记录，误记为“没有取地址”，已按请求记录更正（章文件 C2-6"
                 "2）。截图：2026-10-22 用 codex exec -i 实测，MiniMax-M3.1-Flash 读出了截图里的日期、职位和文字颜色，没调用工具，约 1 万 token；交互界面里怎样贴图录制前核对。网页搜索 cached 与 live 两种模式在 MiniMax 下实测看不出区别；关掉网页搜索、打开联网让它用 curl 取，Experience 第一条和左右两列的 class 全部答对，约 15 万 token。见章文件实测记录。录制时可以把 p40a 的 Prompt 写成“用 "
                 "curl 取这个地址的 HTML 和 CSS”，人在批准框里同意联网。"),
    ),
)

scene(
    id="p40d", segment="改风格",
    label="第二轮：说清哪里不像", title="第二轮：说清哪里不像",
    lead="第一轮改完，在浏览器里把自己的页面和参考并排看。哪里不像，用话说出来：哪一块、差在哪、想要什么样子，一次只说一两处。它看不见我们的浏览器，也看不见参考页面，我们说出来的这几句，就是它这一轮能拿到的全部参考。第二轮的请求会带着第一轮的对话历史，所以不用重复上一轮的要求。",
    html=(
        '<div class="p-flow" style="--n:3">'
        '<div class="p-node" data-role="us" data-reveal="0"><span class="p-num">1</span><h3>并排看</h3><p>自己的页面和参考</p></div>'
        '<div class="p-node" data-role="us" data-reveal="1"><span class="p-num">2</span><h3>说清差别</h3><p>哪一块、差在哪、要什么样</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="1"><span class="p-num">3</span><h3>再改一轮</h3><p>还是先说计划</p></div></div>'
        '<div style="margin-top:14px">' + anchor(lit=("对话历史", "这一句"), outside=("浏览器里的效果", "参考页面"), note="第二轮：对话历史里有第一轮，这一句是我们说的差别", reveal=2) + '</div>'
    ),
    steps=["并排看", "说清差别", "第二轮带着什么"],
    teaching=teach(
        ("切到实操", "第二轮的话按录制时实际看到的差别现场说，例如“首屏的紫色太暗”“项目卡要更像参考的三宫格”；一次只说一两处。改完同样先看计划，再看 diff。"),
        ("讲师提示", "截图实测能读（2026-10-22，codex exec -i）；交互界面里怎样贴图录制前核对，核对后第二轮可以直接贴参考和自己页面的截图。第二轮还没排练过（run-2.2.sh 只跑了第一轮）。"),
    ),
)

scene(
    id="p40c", segment="改风格",
    label="风格要不要接受", title="风格改得对吗，要不要接受",
    lead="这一轮的 diff 会很大，不逐行读。先看范围：动了哪些文件和区块；再看文字：和 profile.md 对一遍，它说自己核对过，也要抽查；再看有没有新加的行为，比如进场动画、滚动监听、新的脚本，它说明了没有；页脚有没有注明风格参考的出处；最后看像不像，这一项 diff 里看不出来，要在浏览器里和参考并排看。接受就再提交一次；缩小，就让它收回越界或没说明的部分；拒绝，就 git restore 回到 homepage-v1。前面有检查点，拒绝也很便宜。",
    html=(
        '<div class="p-claim"><div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">Codex 说</span><p class="p-big" style="font-weight:500">“已按参考改好了”</p></div>'
        '<ul class="p-checks">'
        '<li data-reveal="1">动了哪些文件和区块<small>git diff --stat，对照它的改动清单</small></li>'
        '<li data-reveal="1">文字没变<small>和 profile.md 对，抽查</small></li>'
        '<li data-reveal="1">新加的行为说明了吗<small>动画、滚动监听、新脚本</small></li>'
        '<li data-reveal="1">出处写了吗<small>页脚注明风格参考</small></li>'
        '<li class="is-no" data-reveal="2">像不像参考<small>diff 里看不出来，由我们在浏览器里看</small></li></ul></div>'
        '<div class="p-bar is-light" data-reveal="3" style="margin-top:12px">接受：再提交一次 · 缩小：让它收回越界的部分 · 拒绝：<b>git restore</b> 回到 homepage-v1</div>'
    ),
    steps=["它的报告", "范围和文字", "好不好看", "接受或放弃"],
    teaching=teach(
        ("讲师提示", "按录制时的实际 diff 讲。排练里出现过“滚动到才显现”的进场动画：内容默认透明，不滚动、截整页图时看起来是空白，这类改动要它说明，或者让它去掉。学员选做的样式改动只要求审过再决定，不要求一定接受。"),
        ("跟做产出", "风格改动的处置：接受并提交，或用 git restore 放弃。"),
    ),
)

scene(
    id="p42", segment="小结",
    label="本节小结", title="改风格之前，先问它看到了什么",
    lead="本节先留下 homepage-v1 这个检查点，再参考一个主页，分两轮改出了自己的风格。我们看到的参考页面和浏览器里的效果，都不在它的 context 里；给了地址，它取到的也不是我们看到的样子，缺的它会自己补。每一轮都先问它实际拿到了什么，审过再提交，不满意就 git restore。下一节：发布上线。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">先留检查点</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">范围和出处<br>提交一次</div>'
        '<p class="p-sub" style="text-align:center;margin-top:10px">回退靠 git，不靠对话</p></div>'
        '<div data-reveal="1"><h3>它看到了什么</h3><ul class="p-exits" style="gap:12px"><li class="is-point">参考：取到的不是我们看到的样子</li><li class="is-point">看不见：浏览器里的效果、参考页面</li><li class="is-point">第二轮：带着第一轮，说清差别</li><li class="is-point">看全了吗：长输出会被截断</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.4 发布上线</h3><p>context 发给了谁，又怎样送出去</p></div></div></div>'
    ),
    steps=["先留检查点", "它看到了什么", "下一节"],
)


lesson.write()

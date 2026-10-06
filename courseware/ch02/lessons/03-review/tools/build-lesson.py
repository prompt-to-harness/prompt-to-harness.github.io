#!/usr/bin/env python3
"""2.3 AI 交回的改动，收不收：本节唯一的内容源，生成 lesson.js 与 script.md。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, chapter_map, teach  # noqa: E402

lesson = Lesson(__file__, "2.3", "AI 交回的改动，收不收", summary="先看范围再看内容，决定接受、缩小还是拒绝；用提交让“拒绝”变便宜。")
scene, KICK = lesson.scene, lesson.kick


SAMPLE = "画面中的命令输出来自排练版 homepage-v1（courseware/ch02/materials/homepage-v1.diff）在 Git 2.50.1 下的一次运行；录制时换成 2.2 的真实 diff。"


# ---------- 拿到 diff ----------
scene(
    id="p35", segment="拿到 diff", layout="lesson-cover",
    label="说完成了，就能收吗", title="Codex 说完成了，就能收吗？", kicker="第 2 章 · 2.3 · 开篇",
    lead="改动还在工作区：先读懂 diff，再决定接受、缩小还是拒绝",
    html=(
        chapter_map(3) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">Codex 说</span><p class="p-big" style="font-weight:500">“已完成，项目区已更新”</p></div>'
        '<div class="p-join" data-reveal="2"><span>还差</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="us" data-reveal="2"><span class="p-tag" data-role="us">我们要做</span><p class="p-big" style="font-weight:500">读懂 diff，再决定</p></div></div>'
    ),
    steps=["回到地图", "Codex 的报告", "我们的决定"],
    script=[
        "2.2 我们完成了一轮迭代，三项检查也都过了。不过到现在为止，改动只在工作区里，还没有提交。",
        "Codex 的最后一句话大概是：已完成，项目区已更新。这是它对自己工作的描述。",
        "前面的检查核对了内容呈现、键盘行为和构建；接下来读 diff，核对改动的文件、具体内容和任务范围。这一节先读懂 diff，再决定：接受、缩小，还是拒绝。",
    ],
    teaching=teach(("讲师提示", "Codex 的完成报告以 2.2 录制实际为准。")),
)

scene(
    id="p36", segment="拿到 diff",
    label="改了哪些文件", title="先看范围：改了哪些文件", kicker=KICK + "拿到 diff",
    lead="先用两条命令看范围，再看内容。git status --short 列出所有变化，包括还没被 Git 跟踪的新文件；git diff --stat 只统计已跟踪文件还没暂存的修改：新文件要另外打开看，已经 git add 的改动要用 git diff --cached --stat 看。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px">'
        '<div class="p-term" data-copy="git status --short" data-reveal="0"><div class="dim">$ git status --short</div><div> M src/App.tsx</div><div>?? docs/evidence/CH02_…</div></div>'
        '<div class="p-term" data-copy="git diff --stat" data-reveal="1"><div class="dim">$ git diff --stat</div><div> src/App.tsx | 12 ++++++++++--</div><div> 1 file changed, 10 insertions(+), 2 deletions(-)</div></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="2"><h3>src/App.tsx</h3><p>预期之内：项目数据就在这里</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2"><h3>?? 记录文件</h3><p>我们自己在 2.1 新建的，不在 --stat 里</p></div></div>'
        '<p class="source-note">' + SAMPLE[:-1] + '</p>'
    ),
    steps=["status", "diff --stat", "对得上吗"],
    script=[
        "先看范围，再看内容。在项目目录运行 git status --short。M 开头的是已跟踪文件被修改了，这里是 src/App.tsx；两个问号开头的是 Git 还没跟踪的新文件，这里是我们在 2.1 新建的记录文件。",
        "再运行 git diff --stat，它统计每个文件改了多少行：App.tsx 新增 10 行、删除 2 行。注意，它只统计已跟踪、而且还没暂存的修改：问号那个新文件不在里面，如果 Codex 新建了文件，只看 --stat 就会漏掉；已经 git add 过的改动也不在里面，要加 --cached 才看得到。我们现在还没暂存任何东西。",
        "对照本轮目标：App.tsx 是项目数据所在的文件，预期之内；记录文件是我们自己写的。没有出现别的文件，没有 package.json 的变化，也就没有新依赖。范围对得上，再看内容。请暂停视频，在自己的项目里运行这两条命令。",
    ],
    teaching=teach(
        ("命令说明", "未跟踪文件所在目录整个都是新的时，git status --short 只显示目录名（如 ?? docs/evidence/），加 --untracked-files=all 可列出目录里的每个文件。docs/evidence/ 里已有被跟踪的文件时（例如之前各章留下的记录），会直接显示具体文件名。"),
        ("讲师提示", "若 2.2 的真实 diff 出现了无关文件或 package.json 变化，在这里就地指出，并在 p39 走“缩小”或“拒绝”。"),
    ),
)

scene(
    id="p37", segment="走读 diff",
    label="改动做了什么", title="再看内容：每一处改动做了什么", kicker=KICK + "走读 diff",
    lead="git diff 显示逐行改动。按“数据在哪 → 怎样渲染 → 影响哪些样式”读：这一轮只改了项目数组里的数据，渲染逻辑和样式都没动。排版规则没变，但内容变多了，有没有挤坏仍以 2.2 的视口检查为准。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:36px">'
        '<div class="p-fn">src/App.tsx <span class="add">+10</span><span class="del">−2</span></div>'
        '<div class="p-ln"><i>1</i><code>const projects = [</code></div>'
        '<div class="p-ln del"><i>3</i><code>    name: <span class="s">\'学习笔记\'</span>,</code></div>'
        '<div class="p-ln del"><i>4</i><code>    description: <span class="s">\'记录课程练习\'</span>,</code></div>'
        '<div class="p-ln add"><i>3</i><code>    name: <span class="s">\'红绿灯感知量产\'</span>,</code></div>'
        '<div class="p-ln add"><i>4</i><code>    description: <span class="s">\'城市 NOA 红绿灯…\'</span>,</code></div>'
        '<div class="p-ln add"><i>6</i><code>  { name: <span class="s">\'端侧多模态推理引擎\'</span>, … },</code></div>'
        '<div class="p-ln add"><i>10</i><code>  { name: <span class="s">\'RoboHarness\'</span>, … },</code></div>'
        '<div class="p-ln"><i>15</i><code>]</code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>数据</b><small>换掉一条，又加了两条</small></span></li>'
        '<li data-reveal="1"><span><b>渲染</b><small>projects.map 那段没动</small></span></li>'
        '<li data-reveal="2"><span><b>样式</b><small>index.css 没动 · 挤没挤坏看 2.2 的检查</small></span></li>'
        '<li class="is-ok" data-reveal="3"><span><b>文字与原文一致</b><small>逐字对过</small></span></li></ol></div>'
        '<p class="source-note">新增的两项各占 4 行，画面折叠为一行。' + SAMPLE + '</p>'
    ),
    steps=["数据", "渲染", "样式", "文字"],
    script=[
        "运行 git diff，看逐行改动。按三个问题读。第一，数据在哪？项目信息放在 App.tsx 顶部的 projects 数组里。红色两行是旧的那一条，“学习笔记：记录课程练习”，被整条换掉了；绿色是新的第一条。后面又加了两条项目，画面上各折成了一行。",
        "第二，怎样渲染？页面下方用 projects.map 把数组里的每一项变成一张卡片。这段代码这次没有出现在 diff 里，说明渲染方式没变，只是多了两项数据。",
        "第三，影响哪些样式？index.css 没有改动，排版规则和原来一样。文字和卡片变多后，会占用更多空间；是否被截断或挤坏，要对照 2.2 在三种视口下的检查结果。",
        "最后逐字对一遍文字，和我们给的原文一致，没有被润色。一处很小的改动，用这三个问题读完，就能说清它的目的和影响面。",
    ],
    teaching=teach(
        ("讲师提示", "按 2.2 的真实 diff 讲，不预设结构。若 Codex 改了渲染或样式，就在第 2、3 步指出，并说清它对三种视口和键盘的影响。"),
    ),
)

scene(
    id="p38", segment="走读 diff",
    label="对得上本轮目标吗", title="逐项对照本轮的完成标准", kicker=KICK + "走读 diff",
    lead="把 2.2 Prompt 的 Done when 逐项拿来对照：前三项看本轮记录里的检查结果，第四项看刚读过的 diff。四项都有证据，才进入处置判断。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">Done when</span>'
        '<p style="margin-top:8px;line-height:1.7">三种视口可读<br>Tab 顺序不变<br>build 成功<br>diff 只含项目区</p></div>'
        '<ul class="p-checks"><li data-reveal="1">三种视口<small>本轮记录：三条经历完整显示</small></li>'
        '<li data-reveal="1">键盘<small>本轮记录：Tab 仍只停在“查看项目”</small></li>'
        '<li data-reveal="1">构建<small>本轮记录：退出码 0</small></li>'
        '<li data-reveal="2">diff 范围<small>刚才读过：只有 App.tsx 的项目数据</small></li></ul></div>'
    ),
    steps=["完成标准", "检查结果", "diff 范围"],
    script=[
        "回到 2.2 我们写的 Done when，一共四项。它当时是给 Codex 的要求，现在变成我们的验收清单。",
        "前三项，三种视口、键盘、构建，证据在本轮记录里，2.2 都检查过。",
        "第四项，diff 只含项目区相关改动，证据就是刚才读过的 diff。四项都有证据，才进入下一步：决定怎么处置。如果你的 diff 多出了无关文件、改了样式，或者加了依赖，这一项就打叉，那就是范围扩大。",
    ],
)

scene(
    id="p39", segment="处置",
    label="接受、缩小还是拒绝", title="接受、缩小，还是拒绝", kicker=KICK + "处置",
    lead="三种处置看两个条件：改动是否都在目标之内，越界的部分能不能单独去掉。讲师这次的 diff 干净，选接受。范围扩大真的出现时，就地处理，不为了教学去制造。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,.7fr) minmax(0,1.4fr) minmax(0,1.6fr)">'
        '<div class="is-head" data-reveal="0"><span>处置</span><span>什么情况</span><span>怎么做</span></div>'
        '<div data-reveal="0" class="is-key"><span>接受</span><span>都在目标内，四项有证据</span><span>暂存、检查、提交</span></div>'
        '<div data-reveal="1"><span>缩小</span><span>主体对，夹带了无关修改</span><span>放弃越界的文件，或让 Codex 收回</span></div>'
        '<div data-reveal="1"><span>拒绝</span><span>方向错，或改得太多读不懂</span><span>放弃全部改动，重写 Prompt</span></div></div>'
        '<div class="p-bar is-light" data-reveal="2">本次：<b>接受</b> · 理由写进记录</div>'
    ),
    steps=["接受", "缩小与拒绝", "本次结论"],
    script=[
        "处置有三种。接受：改动都在目标之内，四项完成标准都有证据。那就暂存、检查、提交。",
        "缩小：主体是对的，但夹带了无关的修改，比如顺手改了样式或别的文件。可以放弃越界的那部分，或者让 Codex 把它收回。拒绝：方向错了，或者改得太多，我们读不懂。那就放弃全部改动，重新写 Prompt，怎么回去本节最后会讲。",
        "讲师这次的 diff 很干净，只改了项目数据，选接受。如果你的 diff 出现了范围扩大，这里就是处理它的时候。把结论和理由写进本轮记录，然后提交。",
    ],
    teaching=teach(
        ("讲师提示", "不准备坏 diff（决定 7）。真实 diff 干净时，本页快速带过，2.3 以 p41 演示回到检查点为主（决定 21）。"),
        ("跟做产出", "评审结论：接受 / 缩小 / 拒绝及理由，追加到本轮记录。"),
    ),
)

scene(
    id="p40", segment="处置",
    label="留下检查点", title="提交，留下一个检查点", kicker=KICK + "处置",
    lead="和第 1 章保存检查点时一样：只暂存审过的文件，用 git diff --cached 再看一遍待提交内容，然后提交。代码和记录分两次提交：代码那次就是新的回退点，它的短哈希写进记录，再单独提交记录。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git add src/App.tsx"><div class="dim">$ git add src/App.tsx</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:8px" data-copy="git diff --cached --stat"><div class="dim">$ git diff --cached --stat</div><div> src/App.tsx | 12 ++++++++++--</div></div>'
        '<div class="p-term" data-reveal="2" style="margin-top:8px" data-copy="git commit -m &quot;homepage-v1: 补充项目经历&quot;"><div class="dim">$ git commit -m "homepage-v1: 补充项目经历"</div><div class="ok">[main 85c5fcb] homepage-v1: 补充项目经历</div></div>'
        '<div class="p-term" data-reveal="3" style="margin-top:8px" data-copy="git add docs/evidence/CH02_VIBE_ITERATIONS.md &amp;&amp; git commit -m &quot;记录第 1 轮&quot;"><div class="dim">$ git add docs/evidence/CH02_VIBE_ITERATIONS.md &amp;&amp; git commit -m "记录第 1 轮"</div><div class="ok">[main 3e1d0a7] 记录第 1 轮</div></div>'
        '<p class="source-note">' + SAMPLE + ' 提交哈希每次不同。</p>'
    ),
    steps=["暂存代码", "再看一遍", "提交代码", "单独提交记录"],
    script=[
        "决定接受，就提交。做法和第 1 章保存检查点时一样：只暂存审过的文件，写清楚文件名，不用 git add 点号一把全加。先只暂存代码：src/App.tsx。",
        "暂存以后运行 git diff --cached --stat，看看即将提交的是不是只有 App.tsx。这一步能拦住手滑多加的文件。",
        "然后提交，提交说明写清楚这一轮做了什么：homepage-v1，补充项目经历。",
        "这个提交就是新的回退点。把终端显示的短哈希写进记录的“回退点”一项，评审结论也写进去，然后单独提交记录文件。代码一次、记录一次，一次提交只放一件事，下一页撤回时就能看到好处。提交完，git status 应该是干净的。请暂停视频，完成你的两次提交。",
    ],
    teaching=teach(
        ("讲师提示", "两次提交的哈希每次不同；记录提交里的回退点写代码那次的哈希。分支名以学员仓库为准，course-starter 默认分支为 main。"),
    ),
)

# ---------- 回到检查点 ----------
scene(
    id="p41", segment="回到检查点",
    label="收错了怎么回去", title="万一收错了，怎样回去", kicker=KICK + "回到检查点",
    lead="还没提交：用 git restore 放弃选定文件还没暂存的修改，已经 git add 的先用 git restore --staged 取消暂存；它不处理未跟踪的新文件，放弃的内容也找不回来。已经提交：用 git revert 加提交哈希，新建一个“撤回提交”，历史保留，不改写。不教 git reset --hard：2.4 要公开历史。",
    html=(
        '<div class="p-chain" data-reveal="0"><span>改动</span><i>→</i><span>审查</span><i>→</i><span>提交 = 检查点</span></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">还没提交</span>'
        '<div class="p-term" data-copy="git restore -- src/App.tsx" style="margin-top:8px"><div class="dim">$ git restore -- src/App.tsx</div></div>'
        '<p class="p-sub" style="margin-top:8px">已 add 的先 --staged · 新文件不管 · 放弃了就找不回</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2"><span class="p-tag" data-role="ctx">已经提交</span>'
        '<div class="p-term" data-copy="git revert --no-edit 85c5fcb" style="margin-top:8px"><div class="dim">$ git revert --no-edit 85c5fcb</div><div class="ok">Revert "homepage-v1: 补充项目经历"</div></div>'
        '<p class="p-sub" style="margin-top:8px">新增一个撤回提交 · 只撤回代码那次</p></div></div>'
        '<div class="p-bar" data-reveal="3">commit 让<b>“拒绝”变便宜</b></div>'
    ),
    steps=["主流程", "还没提交", "已经提交", "为什么要提交"],
    script=[
        "最后一个问题：万一收错了，怎样回去？先看主流程：改动、审查、提交。回去的方法取决于走到了哪一步。",
        "还没提交，想放弃某个文件的修改，用 git restore，后面写清楚文件路径。先确认路径对，再执行。它放弃的是还没暂存的修改；如果已经 git add 过，要先用 git restore --staged 取消暂存，再 restore。还有两个边界：一是只管 Git 已经跟踪的文件，Codex 新建的文件它不管；二是放弃的内容找不回来，想留的先另存。",
        "已经提交了，用 git revert，后面跟要撤回的那次提交的短哈希，也就是记录里写的回退点。它不会把那次提交从历史里抹掉，而是新建一个“撤回提交”，内容正好相反。讲师在一个临时分支上演示一下。它撤回的是整次提交：因为代码和记录分开提交，撤回只影响 App.tsx，记录文件还在。这就是一次提交只放一件事的好处。为什么不教 git reset --hard？因为下一节要公开整段历史，改写历史容易出事，不在本课范围。",
        "回头看，commit 的价值在这里：它让“拒绝”变得便宜。有了检查点，接受一份改动就不再是不可回头的决定。能说出本次的回退点和回到它的命令，是这一节的验收要求。",
    ],
    teaching=teach(
        ("切到实操", "在临时分支演示，不在学员主线上做，开始前 git status 必须干净：git switch -c demo-revert → git revert --no-edit <homepage-v1 的短哈希> → git log --oneline -3 → git switch main → git branch -D demo-revert（-D 用于删除未合并的演示分支）。2026-10-05 在临时仓库按“代码、记录分两次提交”实测：撤回只改 App.tsx，记录文件保留；已暂存的修改 git restore 不生效，先 git restore --staged 再 restore 生效。"),
        ("讲师提示", "改写历史的方法（reset、amend、filter 类工具）不进主课；需要时参考 GitHub 官方文档，用之前人工复核。"),
    ),
)

scene(
    id="p42", segment="回到检查点",
    label="本节小结", title="读懂再收，收了也能退", kicker=KICK + "回到检查点",
    lead="本节留下一个审过、可回退的 homepage-v1 提交和一条评审结论。2.3 判断范围：该不该收；2.5 判断性质：是不是保持了行为。检查分三层：自动检查、自动 Review、人工 Review。本章已有构建这一项自动检查，Review 全靠人工。下一节：第一次推送。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h4 style="text-align:center">一个习惯</h4>'
        '<div class="p-star" style="width:260px;font-size:24px">先看范围<br>再看内容</div></div>'
        '<div data-reveal="1"><h4>三层检查</h4><ul class="p-exits" style="gap:12px"><li class="is-pass">自动检查 · 本章只有构建</li><li class="is-stop">自动 Review · 以后</li><li class="is-pass">人工 Review · 本章</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h4>下一节</h4><div class="p-box" data-role="us"><h3>2.4 公开发布</h3><p>推送之后，谁能看到什么？</p></div></div></div>'
    ),
    steps=["一个习惯", "三层检查", "下一节"],
    script=[
        "这一节的习惯只有一句：先看范围，再看内容。status 和 --stat 看范围，diff 看内容，再对照完成标准决定怎么处置。提交以后，收错了也能退回去。",
        "检查可以有三层：自动检查，比如测试和构建脚本；自动 Review，让另一个程序或 Agent 审代码；还有人工 Review。本章的自动检查只有 npm run build，它只证明能构建；Review 全靠人工。行为测试和自动 Review，后面的章节再补上。另外，这一节判断的是范围，该不该收；2.5 会判断性质，AI 说“只是重构”时，行为到底变没变。",
        "现在我们有了一个审过的提交。但它还只在自己电脑上。下一节第一次推送到公开仓库：推送之后，谁能看到什么？",
    ],
)


lesson.write()

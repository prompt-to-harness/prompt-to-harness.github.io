#!/usr/bin/env python3
"""2.3 AI 交回的改动，收不收：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, chapter_map, repro, teach  # noqa: E402

lesson = Lesson(__file__, "2.3", "AI 交回的改动，收不收", summary="先看范围再看内容，决定接受、缩小还是拒绝；用提交让“拒绝”变便宜。")
scene = lesson.scene


SAMPLE = "画面中的命令输出来自排练版 homepage-v1（courseware/ch02/materials/homepage-v1.diff）在 Git 2.50.1 下的一次运行；录制时换成 2.2 的真实 diff。"


# ---------- 拿到 diff ----------
scene(
    id="p35", segment="拿到 diff", layout="lesson-cover",
    label="说完成了，就能收吗", title="Codex 说完成了，就能收吗？",
    lead="改动还在工作区：先读懂 diff，再决定接受、缩小还是拒绝",
    html=(
        chapter_map(3) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">Codex 说</span><p class="p-big" style="font-weight:500">“已完成，项目区已更新”</p></div>'
        '<div class="p-join" data-reveal="2"><span>还差</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="us" data-reveal="2"><span class="p-tag" data-role="us">我们要做</span><p class="p-big" style="font-weight:500">读懂 diff，再决定</p></div></div>'
    ),
    steps=["回到地图", "Codex 的报告", "我们的决定"],
    teaching=teach(("讲师提示", "Codex 的完成报告以 2.2 录制实际为准。")),
)

scene(
    id="p36", segment="拿到 diff",
    label="改了哪些文件", title="先看范围：改了哪些文件",
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
    teaching=teach(
        ("命令说明", "未跟踪文件所在目录整个都是新的时，git status --short 只显示目录名（如 ?? docs/evidence/），加 --untracked-files=all 可列出目录里的每个文件。docs/evidence/ 里已有被跟踪的文件时（例如之前各章留下的记录），会直接显示具体文件名。"),
        ("讲师提示", "若 2.2 的真实 diff 出现了无关文件或 package.json 变化，在这里就地指出，并在 p39 走“缩小”或“拒绝”。"),
    ),
)

scene(
    id="p37", segment="走读 diff",
    label="改动做了什么", title="再看内容：每一处改动做了什么",
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
    teaching=teach(
        ("讲师提示", "按 2.2 的真实 diff 讲，不预设结构。若 Codex 改了渲染或样式，就在第 2、3 步指出，并说清它对三种视口和键盘的影响。"),
    ),
)

scene(
    id="p38", segment="走读 diff",
    label="对得上本轮目标吗", title="逐项对照本轮的完成标准",
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
)

scene(
    id="p39", segment="处置",
    label="接受、缩小还是拒绝", title="接受、缩小，还是拒绝",
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
    teaching=teach(
        ("讲师提示", "不准备坏 diff（决定 7）。真实 diff 干净时，本页快速带过，2.3 以 p41 演示回到检查点为主（决定 21）。"),
        ("跟做产出", "评审结论：接受 / 缩小 / 拒绝及理由，追加到本轮记录。"),
    ),
)

scene(
    id="p40", segment="处置",
    label="留下检查点", title="提交，留下一个检查点",
    lead="和第 1 章保存检查点时一样：只暂存审过的文件，用 git diff --cached 再看一遍待提交内容，然后提交。代码和记录分两次提交：代码那次就是新的回退点，它的短哈希写进记录，再单独提交记录。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git add src/App.tsx"><div class="dim">$ git add src/App.tsx</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:8px" data-copy="git diff --cached --stat"><div class="dim">$ git diff --cached --stat</div><div> src/App.tsx | 12 ++++++++++--</div></div>'
        '<div class="p-term" data-reveal="2" style="margin-top:8px" data-copy="git commit -m &quot;homepage-v1: 补充项目经历&quot;"><div class="dim">$ git commit -m "homepage-v1: 补充项目经历"</div><div class="ok">[main 85c5fcb] homepage-v1: 补充项目经历</div></div>'
        '<div class="p-term" data-reveal="3" style="margin-top:8px" data-copy="git add docs/evidence/CH02_VIBE_ITERATIONS.md &amp;&amp; git commit -m &quot;记录第 1 轮&quot;"><div class="dim">$ git add docs/evidence/CH02_VIBE_ITERATIONS.md &amp;&amp; git commit -m "记录第 1 轮"</div><div class="ok">[main 3e1d0a7] 记录第 1 轮</div></div>'
        '<p class="source-note">' + SAMPLE + ' 提交哈希每次不同。</p>'
    ),
    steps=["暂存代码", "再看一遍", "提交代码", "单独提交记录"],
    teaching=teach(
        ("讲师提示", "两次提交的哈希每次不同；记录提交里的回退点写代码那次的哈希。分支名以学员仓库为准，course-starter 默认分支为 main。"),
    ),
)

# ---------- 回到检查点 ----------
scene(
    id="p41", segment="回到检查点",
    label="收错了怎么回去", title="万一收错了，怎样回去",
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
    repro=repro([
        ("在课程仓库根目录，用第 1 章参考快照建一个练习仓库，不动你自己的首页", "cp -R starters/personal-homepage/ch01-complete lab-runs/revert && cd lab-runs/revert\ngit init -q -b main && git add -A && git commit -qm baseline"),
        ("提交一次代码改动（homepage-v1），再单独提交一份记录", "git apply ../../courseware/ch02/materials/homepage-v1.diff && git commit -qam homepage-v1\necho '# 本轮记录' > CH02_VIBE_ITERATIONS.md && git add CH02_VIBE_ITERATIONS.md && git commit -qm 'docs: 本轮记录'"),
        ("在演示分支上撤回代码那次提交（记录之前的那一次，即 HEAD~1）", "git switch -c demo-revert && git revert --no-edit HEAD~1 && git log --oneline -3 && git show --stat HEAD"),
        ("检查：撤回只改了 src/App.tsx，记录文件还在；然后回到 main，删掉演示分支", "ls CH02_VIBE_ITERATIONS.md && git switch main && git branch -D demo-revert"),
    ], note="讲师 2026-10-05 按此实测。需要已配置 git user.name 与 user.email。"),
    steps=["主流程", "还没提交", "已经提交", "为什么要提交"],
    teaching=teach(
        ("切到实操", "在临时分支演示，不在学员主线上做，开始前 git status 必须干净：git switch -c demo-revert → git revert --no-edit <homepage-v1 的短哈希> → git log --oneline -3 → git switch main → git branch -D demo-revert（-D 用于删除未合并的演示分支）。2026-10-05 在临时仓库按“代码、记录分两次提交”实测：撤回只改 App.tsx，记录文件保留；已暂存的修改 git restore 不生效，先 git restore --staged 再 restore 生效。"),
        ("讲师提示", "改写历史的方法（reset、amend、filter 类工具）不进主课；需要时参考 GitHub 官方文档，用之前人工复核。"),
    ),
)

scene(
    id="p42", segment="回到检查点",
    label="本节小结", title="读懂再收，收了也能退",
    lead="本节留下一个审过、可回退的 homepage-v1 提交和一条评审结论。2.3 判断范围：该不该收；2.5 判断性质：是不是保持了行为。检查分三层：自动检查、自动 Review、人工 Review。本章已有构建这一项自动检查，Review 全靠人工。下一节：第一次推送。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">一个习惯</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">先看范围<br>再看内容</div></div>'
        '<div data-reveal="1"><h3>三层检查</h3><ul class="p-exits" style="gap:12px"><li class="is-pass">自动检查 · 本章只有构建</li><li class="is-stop">自动 Review · 以后</li><li class="is-pass">人工 Review · 本章</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.4 公开发布</h3><p>推送之后，谁能看到什么？</p></div></div></div>'
    ),
    steps=["一个习惯", "三层检查", "下一节"],
)


lesson.write()

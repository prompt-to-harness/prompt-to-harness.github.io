#!/usr/bin/env python3
"""2.3 AI 交回的改动，要不要接受：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
from html import escape
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, chapter_map, repro, teach  # noqa: E402

lesson = Lesson(__file__, "2.3", "AI 交回的改动，要不要接受", summary="先看范围再看内容，回看 Codex 当时看到了什么，再决定接受、缩小还是拒绝；提交以后，接受错了也能撤回。")
scene = lesson.scene


# 2026-10-20 15:58 那次 2.2 运行（能力目录开）留下的工作区与请求记录，见分镜“事实边界与素材”
RUN = "讲师用课程基线在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）"
SAMPLE = "画面中的命令输出来自" + RUN + "留下的工作区，Git 2.50.1；你的输出以自己的 diff 为准。"
RECORD = "来自产生这份 diff 的那次运行的请求记录，命令有删节；工具名、命令和次数随每次运行变化"


# ---------- 拿到 diff ----------
scene(
    id="p35", segment="拿到 diff", layout="lesson-cover",
    label="说完成了，就能接受吗", title="Codex 说完成了，就能接受吗？",
    lead="改动还在工作区：先读懂 diff，回看它当时看到了什么，再决定接受、缩小还是拒绝",
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
        '<div class="p-term" data-copy="git status --short" data-reveal="0"><div class="dim">$ git status --short</div><div> M src/App.tsx</div></div>'
        '<div class="p-term" data-copy="git diff --stat" data-reveal="1"><div class="dim">$ git diff --stat</div><div> src/App.tsx | 12 ++++++++++--</div><div> 1 file changed, 10 insertions(+), 2 deletions(-)</div></div></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box is-soft" data-role="ok" data-reveal="2"><h3>src/App.tsx</h3><p>预期之内：项目数据就在这里</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2"><h3>没有 ?? 开头的行</h3><p>这次没有新建文件；有的话不在 --stat 里，要另外打开看</p></div></div>'
        '<p class="source-note">' + SAMPLE[:-1] + '</p>'
    ),
    steps=["status", "diff --stat", "对得上吗"],
    teaching=teach(
        ("命令说明", "未跟踪文件所在目录整个都是新的时，git status --short 只显示目录名（如 ?? src/components/），加 --untracked-files=all 可列出目录里的每个文件。"),
        ("核对记录", "2026-10-20 15:58 那次运行结束后，在它的工作区运行 git status --short 和 git diff --stat，输出与画面一致：只改 src/App.tsx，+10 −2，没有未跟踪文件。这份 diff 与 materials/homepage-v1.diff 逐字相同。"),
        ("讲师提示", "若 2.2 的真实 diff 出现了无关文件或 package.json 变化，在这里就地指出，并在 p39 走“缩小”或“拒绝”。"),
    ),
)

scene(
    id="p37", segment="走读 diff",
    label="改动做了什么", title="再看内容：每一处改动做了什么",
    lead="git diff 显示逐行改动。按“数据在哪 → 怎样渲染 → 影响哪些样式”读：这一轮只改了项目数组里的数据，渲染逻辑和样式都没动。排版规则没变，但内容变多了，有没有挤坏仍以 2.2 的屏幕尺寸检查为准。",
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
        ("讲师提示", "按 2.2 的真实 diff 讲，不预设结构。若 Codex 改了渲染或样式，就在第 2、3 步指出，并说清它对三种屏幕尺寸和键盘的影响。2026-10-20 能力目录关的那次运行改过 src/index.css（项目列表栅格，+23 −2），录制时遇到类似情况就在第 3 步讲。"),
    ),
)

scene(
    id="p38", segment="走读 diff",
    label="对得上本轮目标吗", title="逐项对照本轮的完成标准",
    lead="把 2.2 Prompt 的 Done when 逐项拿来对照：前三项看 2.2 做过的检查，第四项看刚读过的 diff。再加一问：有没有做 Prompt 没让它做的事？讲师这次有：Prompt 写明浏览器由人检查，Codex 仍自己起预览服务器、用无头 Chrome 截图查三种屏幕尺寸。这些不留文件改动，diff 里看不到，下一页到请求记录里去找。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">Done when</span>'
        '<p style="margin-top:8px;line-height:1.7">三种屏幕尺寸可读<br>Tab 顺序不变<br>build 成功<br>diff 只含项目区</p>'
        '<p class="p-sub" data-reveal="3" style="margin-top:10px">Prompt 还写了：浏览器由人检查</p></div>'
        '<ul class="p-checks"><li data-reveal="1">三种屏幕尺寸<small>2.2 检查：三条经历完整显示</small></li>'
        '<li data-reveal="1">键盘<small>2.2 检查：Tab 仍只停在“查看项目”</small></li>'
        '<li data-reveal="1">构建<small>2.2 检查：退出码 0</small></li>'
        '<li data-reveal="2">diff 范围<small>刚才读过：只有 App.tsx 的项目数据</small></li>'
        '<li class="is-no" data-reveal="3">Prompt 没让做的事<small>有：自己起预览、截图 · diff 里看不到</small></li></ul></div>'
    ),
    steps=["完成标准", "检查结果", "diff 范围", "Prompt 之外"],
    teaching=teach(("讲师提示", "第 4 行取自 2026-10-20 15:58 那次运行：确认之后 33 次调用里，Codex 自己起预览服务器（npm run preview 两次退出码 1）、写脚本驱动无头 Chrome 截图查三种屏幕尺寸（SyntaxError、截图文件不存在等），都不留文件改动。录制时没出现这类调用，第 4 步就说“这次没有”，不按画面讲。")),
)

scene(
    id="p38a", segment="回看请求记录",
    label="它是根据什么改的", title="Codex 是根据什么改的？",
    lead="打开 2.2 这一轮的请求记录（和 2.1 看的是同一套配置下的请求记录），找到这一轮的工具调用。看三件事：Codex 读了哪些文件；diff 里改动的每个文件，改之前读过没有；每处改动的依据，来自 Prompt 原文，还是读到的文件。讲师这次的记录里，读文件都发生在出计划之前：6 次调用读了 11 个文件，包括 src/App.tsx 和 index.css，也读了 PROMPT_V1.md 这类和本轮无关的文档。“确认”之后的第一次调用就是修改 src/App.tsx，没有再读；它用的是计划那一轮读到的内容，这些内容一直留在 context 里。diff 里只有 App.tsx，改前读过；三条文字来自 Prompt 原文，数组的位置和结构来自读到的 App.tsx。多读的文档没有让范围扩大。还有一类调用 diff 里看不到：“确认”之后一共 33 次调用，其中 Codex 自己起预览服务器（npm run preview 两次退出码 1），又写脚本驱动无头 Chrome 截图、查三种屏幕尺寸，中间报了 SyntaxError、截图文件不存在等错误。Prompt 写明浏览器由人检查，这些是它自己加的；它们不留文件改动，所以 diff 里只有 App.tsx。同一个 Prompt，每次走的过程都可能不同，所以判断看这一轮的记录。范围扩大时，常能在这里找到原因：多读了无关内容，或者 Prompt 里缺了本轮目标。记录里找不到依据的改动，按“无法解释”处理。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:31px">'
        '<div class="p-fn">2.2 本轮的工具调用（节选）</div>'
        '<div class="p-ln"><i>1</i><code>ls -la · git status · git log</code></div>'
        '<div class="p-ln"><i>2</i><code>find src docs … · cat package.json PLACEHOLDER_CONTENT.md</code></div>'
        '<div class="p-ln add"><i>3</i><code>cat src/App.tsx src/index.css</code></div>'
        '<div class="p-ln"><i>4</i><code>cat PROJECT_BRIEF.md PROMPT_V1.md CHECKPOINTS.md</code></div>'
        '<div class="p-ln"><i>5</i><code>cat README.md index.html .nvmrc</code></div>'
        '<div class="p-ln"><i>6</i><code>cat .gitignore · ls .traces · 找 Chrome</code></div>'
        '<div class="p-ln" data-reveal="1"><i>·</i><code>回复计划 → 我们回复“确认”</code></div>'
        '<div class="p-ln del" data-reveal="2"><i>7</i><code>apply_patch：改 src/App.tsx</code></div>'
        '<div class="p-ln" data-reveal="2"><i>8</i><code>cat src/App.tsx · git diff（改后复查）</code></div>'
        '<div class="p-ln del" data-reveal="4"><i>…</i><code>npm run preview ×2 → 退出码 1</code></div>'
        '<div class="p-ln del" data-reveal="4"><i>…</i><code>脚本驱动无头 Chrome 截图 → SyntaxError</code></div>'
        '<div class="p-ln del" data-reveal="4"><i>…</i><code>ls 截图文件 → No such file</code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>读了哪些文件</b><small>出计划前读了 11 个，含几份无关文档</small></span></li>'
        '<li data-reveal="1"><span><b>确认之后</b><small>没有再读，第一次调用就是修改</small></span></li>'
        '<li class="is-ok" data-reveal="2"><span><b>改的文件，之前读过吗</b><small>diff 只有 App.tsx，第 3 次调用读过</small></span></li>'
        '<li class="is-ok" data-reveal="3"><span><b>依据从哪来</b><small>文字：Prompt 原文 · 结构：读到的 App.tsx</small></span></li>'
        '<li class="is-risk" data-reveal="4"><span><b>Prompt 没让它做的</b><small>自己起预览、截图 · diff 里看不到</small></span></li></ol></div>'
        '<p class="source-note">' + RECORD + '；' + RUN + '</p>'
    ),
    steps=["读了哪些文件", "确认之后", "改前读过吗", "依据从哪来", "Prompt 之外"],
    teaching=teach(
        ("核对记录", "取自 2026-10-20 15:58 那次运行的请求记录（能力目录开时工具调用是 custom_tool_call，命令在 tools.exec_command 的 cmd 里），跳过界面“给会话起标题”的旁路请求。出计划前 6 次调用读的 11 个文件：package.json、PLACEHOLDER_CONTENT.md、src/App.tsx、src/index.css、PROJECT_BRIEF.md、PROMPT_V1.md、CHECKPOINTS.md、README.md、index.html、.nvmrc、.gitignore；另有 ls、find、git log、node -v 等列目录和查环境的命令，第 6 次还在找本机的 Chrome。“确认”之后第 1 次调用就是 apply_patch 改 src/App.tsx，改前没有再读任何文件；第 2 次 cat src/App.tsx 并看 git diff，是改后复查。确认之后共 33 次调用，加上计划那一轮的 6 次，最后一次请求里一共 39 次。第 5 步的三行取自这 33 次里的几次：npm run preview 两次退出码 1，写脚本驱动无头 Chrome 截图查三种屏幕尺寸，出过 SyntaxError、截图文件不存在等错误；它们不留文件改动，diff 只有 src/App.tsx（+10 −2）。画面上用“…”代替序号，没有逐条标出是第几次调用。"),
        ("讲师提示", "录制时打开 claude-tap 里 2.2 本轮那几次请求，按实际的工具调用和返回逐条指认，工具名、命令和次数以当次记录为准，截图前检查路径和用户名。讲师的 diff 干净时，本页说明“每处改动都找得到依据”即可；记录里真的有多读或缺目标的情况，就地指出，留到 p39 处置。第 5 步只讲当次记录里真的出现的、Prompt 没让它做的调用；录制时没出现，就说“这次没有”，不按画面讲。"),
    ),
)

scene(
    id="p39", segment="处置",
    label="接受、缩小还是拒绝", title="接受、缩小，还是拒绝",
    lead="接受还是不接受，看两件事：改动是否都在本轮目标之内、说得清依据；越界或说不清的部分能不能单独去掉。讲师这次的 diff 干净，选接受；Codex 自己多做的那些检查没有留下文件改动，不影响这次接受，下次在它的计划里看到，就让它去掉。范围扩大真的出现时，就地处理，不为了教学去制造。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:minmax(0,.7fr) minmax(0,1.4fr) minmax(0,1.6fr)">'
        '<div class="is-head" data-reveal="0"><span>处置</span><span>什么情况</span><span>怎么做</span></div>'
        '<div data-reveal="0" class="is-key"><span>接受</span><span>都在目标内，四项对得上，依据找得到</span><span>暂存、检查、提交</span></div>'
        '<div data-reveal="1"><span>缩小</span><span>主体对，夹带了无关或说不清依据的修改</span><span>放弃越界的文件，或让 Codex 收回</span></div>'
        '<div data-reveal="1"><span>拒绝</span><span>方向错，或改得太多，读不懂也验不了</span><span>放弃全部改动，重写 Prompt</span></div></div>'
        '<div class="p-bar is-light" data-reveal="2">本次：<b>接受</b> · 只改了项目数据，每处都找得到依据 · 多做的检查没留下文件</div>'
    ),
    steps=["接受", "缩小与拒绝", "本次结论"],
    teaching=teach(
        ("讲师提示", "不准备坏 diff（决定 7）。真实 diff 干净时，本页快速带过，2.3 以 p41 演示回到检查点为主（决定 21）。"),
        ("跟做产出", "评审结论：接受 / 缩小 / 拒绝及理由，记在自己的笔记里。"),
    ),
)

COMMIT = 'git commit -m "homepage-v1: 补充项目经历" -m "本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx"'

scene(
    id="p40", segment="处置",
    label="留下检查点", title="提交，留下一个检查点",
    lead="和第 1 章保存检查点时一样：只暂存审过的文件，用 git diff --cached 再看一遍待提交内容，然后提交。第一个 -m 是标题，第二个 -m 写本轮目标和改动文件。这次提交就是新的检查点：提交时输出的那一行里有它的短哈希。提交完再用 git status 看一遍，应该没有剩下的改动。以后要再找这个哈希，可以用 git log --oneline。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;align-items:start">'
        '<div class="p-term" data-reveal="0" data-copy="git add src/App.tsx"><div class="dim">$ git add src/App.tsx</div></div>'
        '<div class="p-term" data-reveal="1" data-copy="git diff --cached --stat"><div class="dim">$ git diff --cached --stat</div><div> src/App.tsx | 12 ++++++++++--</div></div></div>'
        '<div class="p-term" data-reveal="2" style="margin-top:8px" data-copy="' + escape(COMMIT) + '"><div class="dim">$ git commit -m "homepage-v1: 补充项目经历" \\</div>'
        '<div class="dim">    -m "本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx"</div><div class="ok">[main 7ce0e9f] homepage-v1: 补充项目经历</div></div>'
        '<div class="p-term" data-reveal="3" style="margin-top:8px" data-copy="git status"><div class="dim">$ git status</div><div>On branch main</div><div class="ok">nothing to commit, working tree clean</div></div>'
        '<p class="source-note">' + SAMPLE + ' 这次运行没有提交，7ce0e9f 是示例短哈希，每次提交都不同。</p>'
    ),
    steps=["暂存", "再看一遍", "提交并写清说明", "检查点"],
    teaching=teach(
        ("讲师提示", "哈希每次不同，按实际输出讲。分支名以学员仓库为准，course-starter 默认分支为 main。提交说明的第二段写本轮目标和改动文件，用 git log -1 能完整看到（讲师可演示，不计入跟做命令）。第 4 步原为 git log --oneline -1，2026-10-20 按讲师决定把跟做命令收到六条，改为提交输出里的短哈希加 git status。2026-10-20 那次运行的改动停在工作区，git add 与 git diff --cached --stat 的输出按它的 diff 写出，提交行与哈希是示例。"),
    ),
)

# ---------- 回到检查点 ----------
scene(
    id="p41", segment="回到检查点",
    label="接受错了怎么回去", title="万一接受错了，怎样回去",
    lead="还没提交：用 git restore 放弃选定文件还没暂存的修改，已经 git add 的先用 git restore --staged 取消暂存；它不处理未跟踪的新文件，放弃的内容也找不回来。已经提交：用 git revert 加提交哈希，新建一个“撤回提交”，历史保留，不改写；这一条讲师在临时分支上演示，看懂即可。这里不用 git reset --hard：下一节要公开整段历史，改写历史容易出事。/clear 和压缩改的是对话，不会撤销文件改动；回退靠 git。",
    html=(
        '<div class="p-chain" data-reveal="0"><span>改动</span><i>→</i><span>审查</span><i>→</i><span>提交 = 检查点</span></div>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;margin-top:14px">'
        '<div class="p-box" data-role="gate" data-reveal="1"><span class="p-tag" data-role="gate">还没提交</span>'
        '<div class="p-term" data-copy="git restore -- src/App.tsx" style="margin-top:8px"><div class="dim">$ git restore -- src/App.tsx</div></div>'
        '<p class="p-sub" style="margin-top:8px">已 add 的先 --staged · 新文件不管 · 放弃了就找不回</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2"><span class="p-tag" data-role="ctx">已经提交</span>'
        '<div class="p-term" data-copy="git revert --no-edit 7ce0e9f" style="margin-top:8px"><div class="dim">$ git revert --no-edit 7ce0e9f</div><div class="ok">Revert "homepage-v1: 补充项目经历"</div></div>'
        '<p class="p-sub" style="margin-top:8px">新增一个撤回提交 · 原来的提交还在历史里<br>7ce0e9f 是示例，换成自己的检查点</p></div></div>'
        '<div class="p-bar" data-reveal="3">提交过的改动，<b>接受错了也能撤回</b> · /clear 和压缩不撤销文件，回退靠 git</div>'
    ),
    repro=repro([
        ("在课程仓库根目录，用第 1 章参考快照建一个练习仓库，不动你自己的个人主页", "cp -R starters/personal-homepage/ch01-complete lab-runs/revert && cd lab-runs/revert\ngit init -q -b main && git add -A && git commit -qm baseline"),
        ("应用 homepage-v1 的改动并提交一次，提交说明写本轮目标与改动文件", "git apply ../../courseware/ch02/materials/homepage-v1.diff && git add src/App.tsx\ngit commit -q -m 'homepage-v1: 补充项目经历' -m '本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx'"),
        ("在演示分支上撤回这次提交", "git switch -c demo-revert && git revert --no-edit HEAD && git log --oneline -3 && git show --stat HEAD"),
        ("检查：撤回提交只改了 src/App.tsx，原来的提交还在历史里；然后回到 main，删掉演示分支", "git switch main && git branch -D demo-revert"),
    ], note="讲师 2026-10-20 按此实测（Git 2.50.1）。需要已配置 git user.name 与 user.email。"),
    steps=["主流程", "还没提交", "已经提交", "为什么要提交"],
    teaching=teach(
        ("切到实操", "在临时分支演示，不在学员主线上做，开始前 git status 必须干净：git switch -c demo-revert → git revert --no-edit <homepage-v1 的短哈希> → git log --oneline -3 → git show --stat HEAD → git switch main → git branch -D demo-revert（-D 用于删除未合并的演示分支）。2026-10-20 在临时仓库按“一次提交”实测：撤回提交只改 App.tsx（+2 −10），原提交保留在历史里。2026-10-05 另测过：已暂存的修改 git restore 不生效，先 git restore --staged 再 restore 生效。"),
        ("讲师提示", "改写历史的方法（reset、amend、filter 类工具）不进主课；需要时参考 GitHub 官方文档，用之前人工复核。"),
    ),
)

GIT_MAP_STYLE = (
    '<style>'
    '.x-git{display:grid;grid-template-columns:minmax(0,1fr) 196px minmax(0,1fr) 196px minmax(0,1fr) 120px minmax(0,1fr);row-gap:6px;align-items:center;margin-top:0}'
    '.x-git .p-node{grid-row:2}'
    '.x-git .p-node{padding:10px 8px}.x-git .p-node h3{margin:0 0 2px}.x-git .p-node p{font-size:19px}'
    '.x-edge{grid-row:2;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center}'
    '.x-edge .p-join{min-width:0;gap:0}'
    '.x-edge .p-join small,.x-look small,.x-git .p-hang small{display:block;font-size:17px;color:var(--p-muted);line-height:1.3}'
    '.x-edge .p-mono{font-size:17px}.x-back .p-arrow{transform:scaleX(-1)}'
    '.x-look{border-top:2px dashed #9AA0A8;padding-top:2px;line-height:1.25}'
    '.x-span{grid-row:1;grid-column:1/6;position:relative;height:18px;margin:16px 9% 0;border:2px dashed #5B6573;border-bottom:0;border-radius:12px 12px 0 0}'
    '.x-span>span{position:absolute;left:50%;top:-16px;transform:translateX(-50%);white-space:nowrap;background:var(--p-paper);padding:0 10px;font-size:18px;color:var(--p-muted)}'
    '.x-git .p-hang{grid-row:3;grid-column:4/7;justify-self:center;width:300px;margin-top:14px}'
    '.x-git .p-hang .p-box{padding:4px 12px;text-align:center}'
    '@media(max-width:600px){body[data-mode=scroll] .x-git{grid-template-columns:minmax(0,1fr)}'
    'body[data-mode=scroll] .x-git>*{grid-column:auto!important;grid-row:auto!important}'
    'body[data-mode=scroll] .x-span{height:auto;margin:0;border:0}body[data-mode=scroll] .x-span>span{position:static;transform:none;white-space:normal}'
    'body[data-mode=scroll] .x-edge .p-arrow{transform:rotate(90deg);margin:20px 0}body[data-mode=scroll] .x-back .p-arrow{transform:rotate(-90deg)}'
    'body[data-mode=scroll] .x-git .p-hang::after{display:none}}'
    '</style>'
)

scene(
    id="p41a", segment="回到检查点",
    label="这些命令在哪两处之间", title="这一节的 Git 命令，各走哪一段",
    lead="改动在 Git 里会经过四个位置：工作区是正在改的文件；暂存区放下次提交要带上的改动；本地提交是存在自己电脑上的检查点；远端是 GitHub 上的仓库。git add <路径> 把工作区的修改放进暂存区，git commit 把暂存区存成一次提交。git diff 比较工作区和暂存区，也就是还没 add 的修改；git diff --cached 比较暂存区和最近一次提交，也就是将要提交的内容；git status 一次列出这几处之间哪些文件不同，包括还没被跟踪的新文件。往回走：git restore <路径> 用暂存区里的版本盖掉工作区里还没 add 的修改；已经提交的，用 git revert <哈希> 再加一个撤回提交，原来的提交留在历史里，这一条看讲师演示即可。git push 把本地提交推到远端，下一节再做。本节自己动手的是六条：git status、git diff、git add <路径>、git diff --cached、git commit、git restore。",
    html=(
        GIT_MAP_STYLE +
        '<div class="x-git">'
        '<div class="x-span" data-reveal="1"><span><span class="p-mono">git status</span> · 这三处之间哪些文件不同</span></div>'
        '<div class="p-node" data-role="ink" data-node="work" data-reveal="0" style="grid-column:1"><h3>工作区</h3><p>正在改的文件</p></div>'
        '<div class="x-edge" style="grid-column:2">'
        '<div class="p-join" data-edge="work:stage" data-reveal="0"><span class="p-mono">git add &lt;路径&gt;</span><i class="p-arrow"></i></div>'
        '<div class="p-join x-back" data-edge="stage:work" data-reveal="2"><i class="p-arrow"></i><span class="p-mono">git restore &lt;路径&gt;</span><small>放弃还没 add 的修改</small></div>'
        '<div class="x-look" data-reveal="1"><span class="p-mono">git diff</span><small>比较这两处</small></div></div>'
        '<div class="p-node" data-role="ink" data-node="stage" data-reveal="0" style="grid-column:3"><h3>暂存区</h3><p>下次要提交的</p></div>'
        '<div class="x-edge" style="grid-column:4">'
        '<div class="p-join" data-edge="stage:commit" data-reveal="0"><span class="p-mono">git commit</span><i class="p-arrow"></i></div>'
        '<div class="x-look" data-reveal="1"><span class="p-mono">git diff --cached</span><small>比较这两处</small></div></div>'
        '<div class="p-node" data-role="ok" data-node="commit" data-reveal="0" style="grid-column:5"><h3>本地提交</h3><p>本机的检查点</p></div>'
        '<div class="x-edge" style="grid-column:6">'
        '<div class="p-join" data-edge="commit:remote" data-reveal="3"><span class="p-mono">git push</span><i class="p-arrow"></i><small>下一节</small></div></div>'
        '<div class="p-node" data-role="ink" data-node="remote" data-reveal="3" style="grid-column:7"><h3>远端</h3><p>GitHub 仓库</p></div>'
        '<div class="p-hang" data-role="gate" data-edge="commit:commit" data-reveal="2"><div class="p-box is-soft" data-role="gate"><span class="p-mono">git revert &lt;哈希&gt;</span><small>再加一个撤回提交 · 看讲师演示</small></div></div>'
        '</div>'
        '<div class="p-bar is-light" data-reveal="3" style="margin-top:10px;padding-top:8px;padding-bottom:8px">自己动手的六条：<b>status · diff · add · diff --cached · commit · restore</b></div>'
    ),
    steps=["往前走", "看差异", "往回走", "下一节"],
    teaching=teach(
        ("核对记录", "节点与边按 Git 语义写：git add <路径> 把工作区的修改写进暂存区（index）；git commit 把暂存区存成新提交；git diff 无参数时比较工作区与暂存区；git diff --cached 比较暂存区与 HEAD；git status 同时报告这两组差异和未跟踪文件；git restore <路径> 默认用暂存区的内容覆盖工作区（暂存区与 HEAD 一致时，就是回到最近一次提交的版本）；git restore --staged <路径> 用 HEAD 覆盖暂存区，p40、p41 里作为取消暂存的办法提到，不画在图上；git revert 在当前分支上新增一个反向提交，不移动也不删除已有提交；git push 把本地提交推到远端，2.4 用的是 git push -u origin HEAD。git status --short、git diff --stat、git diff --cached --stat 是同一条命令换一种输出，不另算。git log、git switch、git branch -D 只在讲师演示里出现。仓库规范要求流程图用 pretty-mermaid 制作，本次环境没有这个 skill，图用现有页面零件拼成，节点与边上标了 data-node / data-edge，没有 .mmd 逻辑源。"),
        ("讲师提示", "这一页是回顾，不再切工具窗口。按步骤讲：先讲 p36–p40 走过的往前两步，再讲三条看差异的命令，再讲 p41 往回的两条，最后指一下下一节的 push。"),
    ),
)

scene(
    id="p42", segment="回到检查点",
    label="本节小结", title="读懂再接受，接受了也能退",
    lead="本节留下一个审过、可回退的 homepage-v1 提交和一条评审结论。接受之前先看范围再看内容，再回看请求记录：Codex 当时看到了什么。提交以后，接受错了也能用 git 退回去；/clear 和压缩只动对话，不动文件。这一节判断范围：该不该接受；本章最后一节判断性质：AI 说“只是重构”时，行为变没变。检查分三层：自动检查、自动 Review、人工 Review。本章已有构建这一项自动检查，Review 全靠人工。下一节：发布上线。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">接受之前</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">先看范围<br>再看内容</div>'
        '<p class="p-sub" style="text-align:center;margin-top:10px">回看记录：它当时看到了什么</p>'
        '<p class="p-sub" data-reveal="1" style="text-align:center;margin-top:6px"><b>接受之后</b> · 回退靠 git，不靠对话</p></div>'
        '<div data-reveal="2"><h3>三层检查</h3><ul class="p-exits" style="gap:12px"><li class="is-pass">自动检查 · 本章只有构建</li><li class="is-stop">自动 Review · 以后</li><li class="is-pass">人工 Review · 本章</li></ul></div>'
        '<div class="p-next" data-reveal="3"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.4 发布上线</h3><p>看 Codex 用 GitHub CLI 改设置</p></div></div></div>'
    ),
    steps=["接受之前", "接受之后", "三层检查", "下一节"],
)


lesson.write()

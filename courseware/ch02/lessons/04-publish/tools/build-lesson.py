#!/usr/bin/env python3
"""2.4 公开的不只是页面：本节唯一的内容源，生成 lesson.js 与 script.md。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
from html import escape
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, chapter_map, teach  # noqa: E402

lesson = Lesson(__file__, "2.4", "公开的不只是页面", summary="第一次推送前看清即将公开的整段历史；发布后用公开 URL 证明页面可用。")
scene, KICK = lesson.scene, lesson.kick


PREPUSH = """git fetch origin
git log --stat origin/main..HEAD
git log -p origin/main..HEAD
git log --format='%an <%ae>' origin/main..HEAD | sort -u"""

DEPLOY_PROMPT = """Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。
Context：仓库名是 <我的仓库名>，
Pages 地址是 https://<用户名>.github.io/<仓库名>/。
Constraints：只新增工作流文件和必要的 Vite 配置；
不推送、不修改仓库设置；说明每个权限为什么需要。
Done when：本地 npm run build 成功；我能逐项解释工作流做了什么。"""


# ---------- 公开之前 ----------
scene(
    id="p43", segment="公开之前", layout="lesson-cover",
    label="推送之后谁能看到", title="推送之后，谁能看到什么？", kicker="第 2 章 · 2.4 · 开篇",
    lead="到现在为止，所有提交和 tag 都只在自己电脑上",
    html=(
        chapter_map(4) +
        '<div class="p-grid" style="--n:3;gap:16px;margin-top:22px">'
        '<div class="p-box" data-role="ok" data-reveal="1"><h3>页面</h3><p>公开 URL，任何人能打开</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><h3>源码</h3><p>仓库里当前的每个文件</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="2"><h3>整段历史</h3><p>每一次提交，包括后来删掉的文件</p></div></div>'
        '<p class="p-hand" data-reveal="2">公开的不只是页面，还有历史</p>'
    ),
    steps=["回到地图", "页面和源码", "还有历史"],
    script=[
        "到现在为止，我们所有的提交都只在自己电脑上，tag 也是本地的。这一节要第一次推送到 GitHub，并把页面发布出去。",
        "推送以后，别人能看到什么？最直观的是页面，有了公开 URL，任何人都能打开。仓库是公开的，所以源码也能看到，每个文件都能点开。",
        "第三层最容易忘：整段提交历史。每一次提交的内容都会公开，包括某次提交里出现过、后来又删掉的文件。推送和本地提交不一样，它是我们这门课第一个对外的副作用，推出去就收不回来。所以推送之前，先看清即将公开的是什么。",
    ],
    teaching=teach(("讲师提示", "主转折在本节：无论历史里有没有问题，“公开的不只是页面”这个认识都成立，不依赖录制时的实际内容。")),
)

scene(
    id="p44", segment="公开之前",
    label="仓库是公开的吗", title="先看一眼：仓库现在是公开还是私有", kicker=KICK + "公开之前",
    lead="打开 GitHub 上自己的仓库，看名字旁边的标记是 Public 还是 Private。GitHub Pages 发布要求仓库公开（课前准备页已提前说明）。此时只查看，不改设置；看清待公开内容以后再决定。",
    html=(
        '<div class="p-handoff"><div class="p-handoff-card" data-reveal="0"><h3>切到 GitHub</h3><p>打开自己的仓库首页</p>'
        '<span class="p-env">Public</span><span class="p-env">Private</span></div>'
        '<ol class="p-watch"><li data-reveal="1">仓库名旁的标记<small>Public 还是 Private</small></li>'
        '<li data-reveal="1">远端已有什么<small>Template 生成的初始提交</small></li>'
        '<li class="is-miss" data-reveal="2">现在先不改<small>查清待公开内容后再决定</small></li></ol></div>'
    ),
    steps=["打开仓库", "看什么", "先不改"],
    script=[
        "切到浏览器，打开 GitHub 上自己的仓库首页。这个仓库是课程开始时用 Template 生成的。",
        "看两样东西。仓库名旁边的标记，是 Public 还是 Private。再看远端现在有什么：应该只有 Template 生成的那个初始提交，我们后来的提交都还没推上来。",
        "本课用 GitHub Pages 发布，要求仓库是公开的，课前准备页已经提醒过。如果你的仓库现在是私有的，先别急着改成公开。看清楚即将公开的内容，再做决定。",
    ],
    teaching=teach(
        ("讲师提示", "GitHub 免费账号的 Pages 需要公开仓库；仓库设置界面按录制时 GitHub 版本核对。若学员仓库是私有的，改成公开前还要检查远端已有的内容与历史，不能只看 origin/main..HEAD。"),
    ),
)

scene(
    id="p45", segment="推送前检查",
    label="即将公开的历史", title="列出即将公开的提交、文件和作者", kicker=KICK + "推送前检查",
    lead="先取回远端的最新状态，再列出本地有、远端没有的提交。--stat 列出每个提交涉及的文件，包括后来删掉的；-p 展开每一行实际文字；最后一条列出这些提交的作者姓名和邮箱，它们也会随提交公开。截图等二进制文件要另外打开看。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="' + escape(PREPUSH) + '"><div class="dim">$ git fetch origin</div><div class="dim">$ git log --stat origin/main..HEAD</div>'
        '<div>homepage-v1: 补充项目经历</div><div>  docs/evidence/CH02_VIBE_ITERATIONS.md · src/App.tsx</div>'
        '<div class="dim">$ git log --format=\'%an &lt;%ae&gt;\' origin/main..HEAD | sort -u</div><div>示例同学 &lt;student@example.com&gt;</div></div>'
        '<div class="p-grid" style="--n:3;gap:12px;margin-top:14px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1"><h3>docs/evidence/</h3><p>本章的过程记录</p></div>'
        '<div class="p-box is-soft" data-role="us" data-reveal="2"><h3>2.2 的项目经历</h3><p>关于具体的人的事实</p></div></div>'
        '<p class="source-note">输出为示意，作者为占位；命令已在本地裸仓库模拟 Template 远端实测（2026-10-02、10-03）</p>'
    ),
    steps=["列出提交与作者", "作者与过程记录", "个人内容"],
    script=[
        "在项目目录运行这几条命令。git fetch origin，先取回远端的最新状态。git log --stat origin/main..HEAD，意思是：列出本地有、远端 main 还没有的提交，也就是即将公开的提交，每个提交下面列出它动过的文件。某次提交加进来、后来又删掉的文件也会列出来，推上去同样能看到。最后一条只看作者：列出这些提交里出现过的姓名和邮箱。",
        "看看列出了什么。第一样很容易被忽略：每个提交都记着作者的姓名和邮箱，那是你本机 Git 配置里写的，推送以后所有人都能看到。第二样是 docs/evidence 下本章的过程记录，这是我们的工作过程，也一起公开。",
        "还有 2.2 刚写进去的项目经历，这是关于具体的人的事实。文件列表只能告诉我们“有什么”，不能告诉我们“能不能公开”。所以还要运行第三条，git log -p，把每一处实际改动的文字展开读一遍。截图这类二进制文件，要另外打开看。请暂停视频，在自己的项目里运行这几条命令。",
    ],
    teaching=teach(
        ("命令说明", "远端已有 GitHub Template 生成的初始提交；origin/main..HEAD 只列出本地新增提交（Git 2.50.1 实测）。作者命令 2026-10-03 在本地裸仓库实测：只列出本地新增提交的作者，Template 初始提交的作者不在其中。course-starter 默认分支为 main，学员分支名不同时相应替换。"),
        ("讲师提示", "本页只依赖本章产生的内容（提交作者、CH02 记录、2.2 的项目经历），不要求学员保留之前各章的证据文件；学员仓库里有更早的记录时，一并按同样方法检查。画面中的作者用占位，不展示讲师真实邮箱。"),
    ),
)

scene(
    id="p46", segment="推送前检查",
    label="能让所有人看到吗", title="这些内容，可以让所有人看到吗？", kicker=KICK + "推送前检查",
    lead="逐项对照判断清单，由人决定。以提交作者邮箱为例：它是不是你愿意公开的邮箱？不愿意，就先停下，不推送。项目经历借用了两位讲师的经历，是本人同意公开的内容。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,1fr) minmax(0,1.1fr)">'
        '<div class="p-box" data-role="gate" data-reveal="0"><span class="p-tag" data-role="gate">每个提交里都有</span>'
        '<p class="p-mono" style="margin-top:8px;line-height:1.6">Author: 示例同学<br>&lt;<b>你的邮箱</b>&gt;</p><p class="p-sub">不想公开：先停，换成 GitHub 的 noreply 邮箱</p></div>'
        '<ul class="p-checks"><li class="is-no" data-reveal="1">有没有 secret<small>API 密钥、令牌、配置文件</small></li>'
        '<li class="is-no" data-reveal="1">有没有未经同意的他人信息<small>别人的姓名、联系方式、经历、照片</small></li>'
        '<li class="is-no" data-reveal="1">截图里有没有隐私<small>桌面、通知、浏览器标签</small></li>'
        '<li data-reveal="2">本人愿意公开<small>包括作者邮箱</small></li></ul></div>'
        '<div class="p-bar" data-reveal="3">有一项不行，<b>先停下，不推送</b></div>'
        '<p class="source-note">改写历史不在本课范围，做之前人工复核。GitHub 官方文档：'
        '<a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address" target="_blank" rel="noopener">设置提交邮箱</a> · '
        '<a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" target="_blank" rel="noopener">从仓库历史中删除敏感数据</a></p>'
    ),
    steps=["作者邮箱", "三项排查", "本人意愿", "停止条件"],
    script=[
        "先看刚才列出的作者。每个提交里都写着作者的姓名和邮箱，来自你本机的 Git 配置。如果那是你的私人邮箱，推送以后它就挂在公开历史里了。不想公开，就先停下，把 Git 的邮箱换成 GitHub 提供的 noreply 邮箱。注意，改配置只影响之后的提交，已经做过的提交还带着旧邮箱，要换掉它们就得改写历史。改写历史不在本课范围，GitHub 官方文档有说明，链接放在阅读模式这一页的底部。",
        "再对照判断清单，前三项要确认“没有”：有没有 secret，比如 API 密钥、令牌，或者整份配置文件；有没有未经同意的他人信息，比如别人的姓名、联系方式、经历和照片；截图里有没有隐私，比如桌面上的文件名、弹出的通知。2.2 的项目经历借用了我们两位讲师的经历，这是本人同意公开的；你如果写了别人的事，要先问过对方。",
        "第四项是本人愿不愿意公开，作者邮箱也算在里面。这是每个人对自己内容的判断，没有标准答案：有人愿意用常用邮箱，有人只用 noreply，都合理。",
        "只要有一项不行，就先停下，不推送。推出去就收不回来了。怎样从历史里去掉一个文件、换掉旧邮箱，看 GitHub 官方文档；那些操作会改写历史，不在本课范围，做之前要人工复核。请暂停视频，逐项判断你的内容，把结论写进记录。",
    ],
    teaching=teach(
        ("参考链接", "设置提交邮箱与 noreply 邮箱：https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address；从仓库历史中删除敏感数据：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository。两者都会涉及改写历史，主课不演示，做之前人工复核（2026-10-05 讲师确认：不做配套页，口播指向官方文档）。"),
        ("核对记录", "GitHub 文档（2026-10-03 查阅）：从命令行推送的提交使用本地 Git 配置的 user.email；修改配置只影响之后的提交；GitHub 为账号提供 noreply 邮箱。noreply 地址的具体格式与相关隐私设置按录制时的 GitHub 设置页核对，画面不写具体格式。"),
        ("讲师提示", "2026-10-03 讲师确认：示范例子由“第 1 章环境记录中的系统用户名”（提案决定 18）改为提交作者邮箱，使本节不依赖之前各章的证据文件。录制时按讲师实际情况判断，不预写“可以公开”。"),
        ("跟做产出", "推送前检查记录：列出的提交、文件与作者，四项判断结果，结论（推送 / 暂停及原因）。"),
    ),
)

# ---------- 部署配置 ----------
scene(
    id="p47", segment="部署配置", layout="prompt-scene", prompt=DEPLOY_PROMPT,
    label="让 Codex 写部署工作流", title="让 Codex 写部署工作流，但不让它推送", kicker=KICK + "部署配置",
    lead="部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。Codex 只负责写文件，推送和改仓库设置由人来做。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>写清仓库名和地址</b><small>别让它猜，也别抄讲师的</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>不推送、不改设置</b><small>对外副作用留给人</small></span></li>'
        '<li data-reveal="2"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>'
    ),
    steps=["仓库名", "不推送", "解释权限"],
    script=[
        "部署需要两样东西。一个是 GitHub Actions 工作流：每次推送后，GitHub 在它自己的机器上安装依赖、构建，再把 dist 发布成页面。另一个是 Vite 的 base 配置：页面放在仓库名这一级路径下，资源路径要跟着改。Context 里写清自己的仓库名和 Pages 地址，不要让它猜，更不要照抄讲师的仓库名。",
        "Constraints 里最重要的一句：不推送、不修改仓库设置。推送和启用 Pages 是对外的副作用，这类操作由人确认，不交给 Codex。",
        "我们还要求它说明每个权限为什么需要，下一页要逐项审查。请暂停视频，把仓库名和地址换成你自己的，提交 Prompt。",
    ],
    teaching=teach(
        ("切到实操", "Codex 生成的文件以录制实际为准；不提供兜底参考工作流（决定 2），出错时让 Codex 再试。"),
    ),
)

scene(
    id="p48", segment="部署配置",
    label="工作流能直接用吗", title="Codex 写的配置，逐项审查再推送", kicker=KICK + "部署配置",
    lead="四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是自己的默认分支。有一项不对就不推送，让 Codex 改。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:34px">'
        '<div class="p-fn">vite.config.ts · .github/workflows/deploy.yml（示意）</div>'
        '<div class="p-ln"><i>1</i><code>base: <span class="s">\'/&lt;仓库名&gt;/\'</span>,</code></div>'
        '<div class="p-ln"><i>2</i><code>on:</code></div>'
        '<div class="p-ln"><i>3</i><code>  push:</code></div>'
        '<div class="p-ln"><i>4</i><code>    branches: [main]</code></div>'
        '<div class="p-ln"><i>5</i><code>permissions:</code></div>'
        '<div class="p-ln"><i>6</i><code>  contents: read</code></div>'
        '<div class="p-ln"><i>7</i><code>  pages: write</code></div>'
        '<div class="p-ln"><i>8</i><code>  id-token: write</code></div>'
        '<div class="p-ln"><i>9</i><code><span class="c"># … npm ci → npm run build → 上传 dist</span></code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li>'
        '<li data-reveal="1"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li>'
        '<li data-reveal="2"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li>'
        '<li class="is-risk" data-reveal="3"><span><b>触发分支</b><small>等于自己的默认分支</small></span></li></ol></div>'
        '<p class="source-note">左侧为常见结构的示意，不是 Codex 的实际输出；字段与写法以录制时生成的文件为准</p>'
    ),
    steps=["base", "资源路径", "权限", "触发分支"],
    script=[
        "Codex 生成了两处改动。第一项看 vite.config.ts 里的 base。页面发布后的地址是“用户名点 github 点 io 斜杠仓库名”，所以 base 必须是斜杠、你的仓库名、斜杠。抄错一个字母，页面就会白屏。",
        "第二项，资源路径。本地运行 npm run build，打开 dist/index.html，看引用的 CSS 和 JS 路径是不是以斜杠仓库名开头。这是检查 base 有没有生效的直接证据。",
        "第三项，工作流权限。常见的是三项：读取仓库内容；写入 Pages；获取部署用的身份令牌。每一项都应该能说出用途，这就是我们让 Codex 解释权限的原因。多出来的写权限，比如能改仓库内容，要问清楚为什么。",
        "第四项，触发分支：推送到哪个分支时运行。要和你仓库的默认分支一致，course-starter 默认是 main。四项有一项不对，就不推送，让 Codex 改，改完再审一遍。工作流和配置也是即将公开的内容，下一页提交以后，还要再看一遍待推送的提交。",
    ],
    teaching=teach(
        ("讲师提示", "左侧示意采用 GitHub 官方 Pages 工作流的常见权限组合，录制时换成 Codex 实际生成的文件并逐行讲。Node 版本若与 .nvmrc 不一致，也在这里指出。不准备错误的 base 分支（决定 7）。"),
        ("跟做产出", "工作流与 Vite 配置的审查结论，随推送前检查记录一起写。"),
    ),
)

# ---------- 推送与发布 ----------
scene(
    id="p49", segment="推送与发布",
    label="推送并启用 Pages", title="由人确认，推送并启用 Pages", kicker=KICK + "推送与发布",
    lead="提交部署配置，再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开时现在再改，并先把 Pages 的来源设为 GitHub Actions，最后由人执行推送、看 Actions 日志。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="us" data-reveal="0"><span class="p-num">1</span><h3>提交配置</h3><p>审过的两处改动</p></div>'
        '<div class="p-node" data-role="tool" data-reveal="0"><span class="p-num">2</span><h3>再看历史</h3><p>待推送的全部提交</p></div>'
        '<div class="p-node" data-role="ctx" data-reveal="1"><span class="p-num">3</span><h3>先设来源</h3><p>Pages → GitHub Actions</p></div>'
        '<div class="p-node" data-role="gate" data-reveal="1"><span class="p-num">4</span><h3>人来推送</h3><p class="p-mono">git push</p></div></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2" style="margin-top:18px"><h3>失败时出在哪一环</h3><p>Actions 日志：哪一步红了 → build 输出：本地能复现吗 → Network：哪个资源 404</p></div>'
    ),
    steps=["提交并复查", "先设来源再推送", "失败时"],
    script=[
        "检查都过了，先提交部署配置。提交以后，再运行一遍推送前检查的那几条命令：这次列出的才是最终要公开的全部提交，包括刚提交的工作流和配置。",
        "推送之前先把 GitHub 这边准备好。仓库如果还是私有的，现在才改成公开，因为待公开的内容已经看过了。然后打开仓库的 Settings，找到 Pages，把来源设成 GitHub Actions：工作流要在启用之后才能部署。最后由我们自己在终端执行 git push。切到 Actions 页，能看到工作流正在运行，点进去可以看每一步的日志。",
        "第一次部署不一定成功。失败了，按顺序找出在哪一环：Actions 日志里哪一步红了；同样的 build 在本地能不能复现；页面打开了，Network 面板里哪个资源是 404。",
    ],
    teaching=teach(
        ("切到实操", "顺序是提交 → 复查待推送提交 → 必要时改为公开 → 设置 Pages 来源 → 推送；GitHub 文档要求先为仓库启用自定义工作流（2026-10-05 查阅 Using custom workflows with GitHub Pages）。若录制时先推送了，在 Actions 页对失败的运行点 Re-run，并确认新运行成功。Pages 来源设置界面按录制时 GitHub 版本核对。讲师录制时若真的失败，失败过程保留在本页。首次部署若自然出错，就地从 Actions 日志、build 输出和 Network 定位并保留；没有出错不伪造（决定 7）。"),
        ("讲师提示", "推送和启用 Pages 由人执行，不交给 Codex（回扣 1.6）。"),
    ),
)

scene(
    id="p50", segment="推送与发布",
    label="Actions 绿了就行吗", title="Actions 成功了，页面就能用了吗？", kicker=KICK + "推送与发布",
    lead="Actions 显示部署流程成功完成。接着检查公开页面：未登录窗口打开公开 URL；Network 面板没有 404；停用缓存后刷新仍然正常。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)">'
        '<div class="p-box" data-role="ok" data-reveal="0"><span class="p-tag" data-role="ok">Actions</span><p class="p-big">✓ deploy 成功</p><p class="p-sub">部署流程成功完成</p></div>'
        '<ul class="p-checks"><li data-reveal="1">未登录窗口打开 URL<small>别人看到的就是这样</small></li>'
        '<li data-reveal="2">Network 没有 404<small>CSS、JS、图片都加载了</small></li>'
        '<li data-reveal="3">停用缓存后刷新仍正常<small>看到的是服务器上的版本</small></li></ul></div>'
    ),
    steps=["绿色对勾", "未登录窗口", "Network", "停用缓存再刷新"],
    script=[
        "Actions 显示绿色对勾，部署流程成功完成。接下来打开公开 URL，检查实际访问和资源加载。比如 base 写错时，部署流程可能完成，页面却因为资源路径错误显示为空白。",
        "第一项，用浏览器的无痕窗口，也就是未登录状态，打开公开 URL。别人第一次访问时看到的就是这个样子。",
        "第二项，打开开发者工具的 Network 面板，刷新一次，看有没有状态是 404 的资源。CSS、JS 有一个没加载上，页面就会走样。",
        "第三项，在 Network 面板勾选 Disable cache，也就是停用缓存，再刷新一次，页面仍然正常。普通刷新可能还在用浏览器缓存里的旧文件，停用缓存以后，看到的才是服务器上现在的版本。三项都过了，才能说发布成功。把结果写进记录。",
    ],
    teaching=teach(
        ("跟做产出", "三项发布检查结果与公开 URL；URL 是必做自检项，课程不统一收取。"),
    ),
)

scene(
    id="p51", segment="推送与发布",
    label="标记这个版本", title="给这个版本打 tag，只推送它", kicker=KICK + "推送与发布",
    lead="给公开的版本打上 ch02-homepage-live，然后只推送这一个 tag。用 --tags 会把所有本地 tag 一并公开，包括练习时随手打的。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git tag ch02-homepage-live"><div class="dim">$ git tag ch02-homepage-live</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:10px" data-copy="git push origin ch02-homepage-live"><div class="dim">$ git push origin ch02-homepage-live</div><div class="ok"> * [new tag] ch02-homepage-live -> ch02-homepage-live</div></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2" style="margin-top:14px"><h3>不用 git push --tags</h3><p>它会把所有本地 tag 一起推上去</p></div>'
    ),
    steps=["打 tag", "只推送这一个", "为什么不用 --tags"],
    script=[
        "发布检查通过了，给这个版本做个标记。运行 git tag ch02-homepage-live。",
        "然后只推送这一个 tag：git push origin，后面跟 tag 的名字。远端只会多出这一个 tag。",
        "为什么不用 git push --tags？它会把所有本地 tag 一起推上去，包括之前各章的检查点，和练习时随手打的。推送 tag 也是公开，一样要知道推的是什么。",
    ],
    teaching=teach(
        ("核对记录", "2026-10-02 用本地裸仓库实测：只推送单个 tag 时远端只出现该 tag（Git 2.50.1）。"),
    ),
)

scene(
    id="p52", segment="推送与发布",
    label="本节小结", title="公开的不只是页面，还有历史", kicker=KICK + "推送与发布",
    lead="本节留下推送前检查记录、审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。",
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="gate" data-reveal="0"><h3>看清历史</h3><p>提交、文件、作者</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="0"><h3>审查配置</h3><p>base、权限、分支</p></div>'
        '<div class="p-node" data-role="us" data-reveal="0"><h3>人来推送</h3><p>先设来源再推送</p></div>'
        '<div class="p-node" data-role="ok" data-reveal="0"><h3>证明可用</h3><p>三项检查与 tag</p></div></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:18px">推送前先看历史 · <b>发布后检查访问、资源与刷新</b></div>'
    ),
    steps=["本节做了什么", "两个认识"],
    script=[
        "回看这一节：推送之前，先列出即将公开的提交、文件和作者，由人判断能不能公开；Codex 写的部署配置逐项审过再提交；GitHub 这边设好 Pages 来源，再由我们自己推送；最后用三项检查证明页面可用，只推送 ch02-homepage-live 这一个 tag。首页现在有了一个公开 URL。",
        "推送之前，检查即将公开的文件和整段历史。部署完成后，再用未登录窗口访问、资源加载和停用缓存后刷新这三项检查确认发布结果。",
    ],
)

lesson.write()

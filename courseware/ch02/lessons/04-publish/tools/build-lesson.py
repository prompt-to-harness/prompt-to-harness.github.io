#!/usr/bin/env python3
"""2.4 发布上线，看 Codex 怎么用 gh：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
"""
from html import escape
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, NARROW, chapter_map, ref, repro, teach  # noqa: E402

lesson = Lesson(__file__, "2.4", "发布上线，看 Codex 怎么用 gh", summary="第一次推送前看清即将公开的整段历史；Pages 来源交给 Codex 用 gh 设置，再在请求记录里看清这次调用；发布后用公开 URL 证明页面可用。")

# 2026-10-20 实测：临时公开仓库 + 真实 HOME（gh 用钥匙串登录）+ 独立 CODEX_HOME（MiniMax），交互界面；p49a 用它
RUN1020 = "讲师在组织下临时仓库上的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max，交互界面）；命令写法和调用次数随版本、模型和仓库状态变化"
scene = lesson.scene


PREPUSH = """git log --stat HEAD
git log -p HEAD
git log --format='%an <%ae>' HEAD | sort -u"""

DEPLOY_PROMPT = """Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。
Context：仓库名是 <我的仓库名>，
Pages 地址是 https://<用户名>.github.io/<仓库名>/。
Constraints：只新增工作流文件和必要的 Vite 配置；
不推送，这一轮不改仓库设置；说明每个权限为什么需要。
Done when：本地 npm run build 成功；我能逐项解释工作流做了什么。"""

SOURCE_PROMPT = """请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查有没有 Pages 站点：没有就用 POST 创建，已有就用 PUT 修改，都设 build_type=workflow。执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。"""


# ---------- 公开之前 ----------
scene(
    id="p43", segment="公开之前", layout="lesson-cover",
    label="这一节做哪几步", title="这一节要做哪几步？",
    lead="第 1 章只在本地提交，这是第一次推送。推送以后，页面、源码和整段提交历史都会公开",
    html=(
        chapter_map(4) +
        '<div class="p-flow" style="--n:4;margin-top:22px">'
        '<div class="p-node" data-role="gate" data-reveal="1"><span class="p-num">1</span><h3>看清历史</h3><p>即将公开的提交、文件、作者</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="1"><span class="p-num">2</span><h3>审查配置</h3><p>Codex 写的部署工作流</p></div>'
        '<div class="p-node" data-role="us" data-reveal="2"><span class="p-num">3</span><h3>设置与推送</h3><p>Codex 用 GitHub CLI（gh）改设置，人来推送</p></div>'
        '<div class="p-node" data-role="ok" data-reveal="2"><span class="p-num">4</span><h3>证明可用</h3><p>公开 URL 上查三项</p></div></div>'
    ),
    steps=["回到地图", "推送之前", "推送与之后"],
    teaching=teach(("讲师提示", "推送前看清整段历史是发布前的一项检查，按实际内容判断，不预设有没有问题。第 3 步之后会回到请求记录，看 Codex 怎样调用 gh。")),
)

scene(
    id="p44", segment="公开之前",
    label="推到哪里", title="推到哪里？仓库是公开的吗？",
    lead="前面只把课程模板克隆到本地。发布前先在自己的 GitHub 账号下新建空仓库，核对 origin 指向自己的仓库；此时不推送。再看仓库公开范围，检查待公开内容以后才决定是否公开。",
    html=(
        '<div class="p-handoff"><div class="p-handoff-card" data-reveal="0"><h3>切到 GitHub</h3><p>新建或打开自己的空仓库</p>'
        '<span class="p-env">Public</span><span class="p-env">Private</span></div>'
        '<ol class="p-watch"><li data-reveal="1">仓库名旁的标记<small>Public 还是 Private</small></li>'
        '<li data-reveal="1">远端已有什么<small>首次发布前应为空仓库</small></li>'
        '<li class="is-miss" data-reveal="2">现在先不改<small>查清待公开内容后再决定</small></li></ol></div>'
    ),
    steps=["建立个人远端", "核对目标与历史", "先不公开"],
    teaching=teach(
        ("讲师提示", "使用学员自己的空远端仓库；从课程模板直接克隆的本地历史会随首次推送一起公开。已有远端含提交时先核对历史和分支，不覆盖或强推。"),
    ),
    repro=repro([
        ("在自己的 GitHub 账号下新建空仓库，暂选 Private；不初始化 README、.gitignore 或许可证。已有远端包含内容时先核对来源和历史，不覆盖、不强推。", ""),
        ("复制新仓库的 HTTPS 地址，在练习项目根目录先查看原来的 origin。", "git remote -v"),
        ("把命令中的“你自己的仓库地址”替换为刚复制的地址。这里只改本地 origin 的目标，不推送、不改变文件或提交。", "git remote set-url origin 你自己的仓库地址\ngit remote -v"),
        ("核对 origin 的 fetch、push 地址都属于自己的仓库，GitHub 页面没有已有提交。原来的课程模板只用来取得起始材料。", ""),
    ], label="发布前：建立个人远端"),
)

scene(
    id="p45", segment="推送前检查",
    label="即将公开的历史", title="列出即将公开的提交、文件和作者",
    lead="首次向个人空仓库推送时，当前分支的全部历史都会公开。检查每次提交改过的文件、实际内容和作者信息，包含后来删掉的文件；不能只看当前目录或与课程模板相比的新增提交。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="' + escape(PREPUSH) + '"><div class="dim">$ git log --stat HEAD</div>'
        '<div>homepage-v1: 补充项目经历</div><div>  src/App.tsx</div><div class="dim">  …… 再往下是课程模板带来的提交</div>'
        '<div class="dim">$ git log -p HEAD</div>'
        '<div class="dim">$ git log --format=\'%an &lt;%ae&gt;\' HEAD | sort -u</div><div>示例同学 &lt;student@example.com&gt;</div></div>'
        '<div class="p-grid" style="--n:3;gap:12px;margin-top:14px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1"><h3>课程模板带来的提交</h3><p>克隆时就有的历史，也会一起公开</p></div>'
        '<div class="p-box is-soft" data-role="us" data-reveal="2"><h3>2.2 的项目经历</h3><p>关于具体的人的事实</p></div></div>'
        '<p class="source-note">输出为示意，作者为占位；实际检查当前分支的完整历史</p>'
    ),
    steps=["列出提交与作者", "作者与模板提交", "个人内容"],
    teaching=teach(
        ("命令说明", "HEAD 表示当前分支版本；三个 log 命令检查其全部可达历史，不依赖个人空仓库是否已有 origin/main，也不遗漏课程模板带来的提交。已有远端内容时另核对远端历史；不强推。"),
        ("讲师提示", "本页只依赖本章产生的内容（提交作者、课程模板带来的提交、2.2 的项目经历），不要求学员保留之前各章的证据文件；学员仓库里有更早的记录文件时，一并按同样方法检查。画面中的作者用占位，不展示讲师真实邮箱。"),
    ),
    repro=repro([
        ("在练习项目根目录运行。用 --stat 查看提交和文件，再用 -p 查看每次改动；作者命令列出当前分支历史里的姓名与邮箱。", PREPUSH),
        ("已有远端提交时，先核对远端历史与当前分支，再决定如何继续；不要强推绕过历史冲突。", ""),
    ], label="推送前：检查完整历史"),
)

scene(
    id="p46", segment="推送前检查",
    label="能让所有人看到吗", title="这些内容，可以让所有人看到吗？",
    lead="逐项对照判断清单，由人决定。以提交作者邮箱为例：它是不是你愿意公开的邮箱？不愿意，就先停下，不推送。改用 GitHub 的 noreply 邮箱只影响之后的提交，已有提交里的邮箱要改写历史才能换掉，做法见本页链接。讲师演示里的项目经历借自两位讲师，本人同意公开；写到别人的事，要先问过对方。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr)">'
        '<div class="p-box" data-role="gate" data-reveal="0"><span class="p-tag" data-role="gate">每个提交里都有</span>'
        '<p class="p-mono" style="margin-top:8px;line-height:1.6">Author: 示例同学<br>&lt;<b>你的邮箱</b>&gt;</p><p class="p-sub">不想公开：先停；换 noreply 只管以后的提交</p></div>'
        '<ul class="p-checks" style="gap:6px"><li class="is-no" data-reveal="1">有没有 secret<small>API 密钥、令牌、配置文件</small></li>'
        '<li class="is-no" data-reveal="1">有没有未经同意的他人信息<small>别人的姓名、联系方式、经历、照片</small></li>'
        '<li class="is-no" data-reveal="1">截图里有没有隐私<small>桌面、通知、浏览器标签</small></li>'
        '<li data-reveal="2">首屏的名字和简介，是你自己的吗<small>还是课程示例里的“示例同学”</small></li>'
        '<li data-reveal="2">本人愿意公开<small>包括作者邮箱</small></li></ul></div>'
        '<div class="p-bar" data-reveal="3">有一项不行，<b>先停下，不推送</b></div>'
    ),
    refs=[
        ref("设置提交邮箱", "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address", "GitHub 官方文档（改写历史不在本课范围，做之前人工复核）", kind="read"),
        ref("从仓库历史中删除敏感数据", "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository", "GitHub 官方文档（改写历史不在本课范围，做之前人工复核）", kind="read"),
    ],
    steps=["作者邮箱", "三项排查", "是不是你自己的", "停止条件"],
    teaching=teach(
        ("参考链接", "设置提交邮箱、从仓库历史中删除敏感数据两篇 GitHub 官方文档，见本页“原文与链接”。两者都会涉及改写历史，主课不演示，做之前人工复核（2026-10-05 讲师确认：不做配套页，口播指向官方文档）。"),
        ("核对记录", "GitHub 文档（2026-10-03 查阅）：从命令行推送的提交使用本地 Git 配置的 user.email；修改配置只影响之后的提交；GitHub 为账号提供 noreply 邮箱。noreply 地址的具体格式与相关隐私设置按录制时的 GitHub 设置页核对，画面不写具体格式。"),
        ("讲师提示", "2026-10-03 讲师确认：示范例子由“第 1 章环境记录中的系统用户名”（提案决定 18）改为提交作者邮箱，使本节不依赖之前各章的证据文件。录制时按讲师实际情况判断，不预写“可以公开”。"),
        ("跟做产出", "做过推送前检查：终端输出自己看过即可，不写记录文件；五项判断由自己作出，结论是推送还是暂停。"),
    ),
)

# ---------- 部署配置 ----------
scene(
    id="p47", segment="部署配置", layout="prompt-scene", prompt=DEPLOY_PROMPT,
    label="让 Codex 写部署工作流", title="让 Codex 写部署工作流，但不让它推送",
    lead="部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。这一轮 Codex 只写文件；仓库设置留到推送前单独一步，推送始终由人来做。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>写清仓库名和地址</b><small>别让它猜，也别抄讲师的</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>不推送，这轮不改设置</b><small>设置单独一步，推送留给人</small></span></li>'
        '<li data-reveal="2"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>'
    ),
    steps=["仓库名", "不推送", "解释权限"],
    teaching=teach(
        ("切到实操", "Codex 生成的文件以录制实际为准；不提供兜底参考工作流（决定 2），出错时让 Codex 再试。"),
    ),
)

scene(
    id="p48", segment="部署配置",
    label="工作流能直接用吗", title="Codex 写的配置，逐项审查再推送",
    lead="四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是自己的默认分支。有一项不对就不推送，让 Codex 改。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:34px">'
        '<div class="p-fn">vite.config.ts · .github/workflows/deploy.yml（摘录）</div>'
        '<div class="p-ln"><i>1</i><code>base: <span class="s">\'/my-homepage/\'</span>,</code></div>'
        '<div class="p-ln"><i>2</i><code>on:</code></div>'
        '<div class="p-ln"><i>3</i><code>  push:</code></div>'
        '<div class="p-ln"><i>4</i><code>    branches: [main]</code></div>'
        '<div class="p-ln"><i>5</i><code>permissions:</code></div>'
        '<div class="p-ln"><i>6</i><code>  contents: read</code></div>'
        '<div class="p-ln"><i>7</i><code>  pages: write</code></div>'
        '<div class="p-ln"><i>8</i><code>  id-token: write</code></div>'
        '<div class="p-ln"><i>9</i><code><span class="c"># … npm ci → build → 核对前缀 → 上传 dist</span></code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li>'
        '<li data-reveal="1"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li>'
        '<li data-reveal="2"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li>'
        '<li class="is-risk" data-reveal="3"><span><b>触发分支</b><small>等于自己的默认分支</small></span></li></ol></div>'
        '<p class="source-note">左侧摘自 Codex 按 p47 的 Prompt 实际生成的文件（仓库名用示例 my-homepage）；2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开。你的文件写法会不同，按实际审</p>'
    ),
    steps=["base", "资源路径", "权限", "触发分支"],
    teaching=teach(
        ("讲师提示", "左侧是 2026-10-20 一次实际生成的摘录，录制时换成当次生成的文件逐行讲。Node 版本若与 .nvmrc 不一致，也在这里指出。不准备错误的 base 分支（决定 7）。"),
        ("实测记录", "2026-10-20 课程基线（能力目录开、推理档位 max，codex exec -s workspace-write）在 2.2 改好的首页上跑 p47 的 Prompt，仓库名填 my-homepage：只改了 vite.config.ts（加 base: '/my-homepage/'，并附中文注释）和新增 .github/workflows/deploy.yml。权限是 contents: read、pages: write、id-token: write，每项都写了理由；触发是推送 main 和手动触发；Node 版本读 .nvmrc；还自己加了一步“核对资源前缀与 Pages 路径一致”的检查。它调用了 14 次网页搜索工具（其中 5 次打开各个 action 的 GitHub releases/latest，其余查了官方 starter 工作流和 configure-pages 的说明），确认用 checkout v7、setup-node v7、configure-pages v6、upload-pages-artifact v5、deploy-pages v5（讲师同日用 gh 核对，与最新版本一致）。本地 npm run build 通过，产物资源以 /my-homepage/assets/ 开头。那次运行里依赖目录因讲师准备失误不完整，Codex 为补齐依赖读过工作区外的目录（另一个项目的 node_modules 和 ~/.npm 缓存）：可写权限限制的是写入位置，读取几乎不受限。"),
        ("跟做产出", "工作流与 Vite 配置的审查结论：四项是否都对，不对的让 Codex 改完再审。"),
    ),
)

# ---------- 推送与发布 ----------
scene(
    id="p49", segment="推送与发布",
    label="设置来源并推送", title="Codex 改 Pages 设置，推送由我们来做",
    lead="提交部署配置，再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开时现在再改。Pages 的来源交给 Codex 用 gh 设为 GitHub Actions：每条命令弹出批准框，读过再批；改完在网页上刷新确认。最后由人把当前分支推到自己的 origin、看 Actions 日志。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="us" data-reveal="0"><span class="p-num">1</span><h3>提交配置</h3><p>审过的两处改动</p></div>'
        '<div class="p-node" data-role="tool" data-reveal="0"><span class="p-num">2</span><h3>再看历史</h3><p>待推送的全部提交</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="1"><span class="p-num">3</span><h3>Codex 改设置</h3><p>每条命令由你批准</p></div>'
        '<div class="p-node" data-role="gate" data-reveal="2"><span class="p-num">4</span><h3>人来推送</h3><p class="p-mono">git push -u origin HEAD</p></div></div>'
        '<div class="p-grid" style="--n:3;gap:14px;margin-top:16px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1"><h3>批准框里看什么</h3><p>命令和理由；修改类命令看清方法和对象</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>网页上确认</h3><p>Settings → Pages，刷新后来源是 GitHub Actions</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="3"><h3>失败时出在哪一环</h3><p>Actions 日志 → build 输出 → Network 里哪个资源 404</p></div></div>'
    ),
    steps=["提交并复查", "Codex 改设置", "人来推送", "失败时"],
    teaching=teach(
        ("切到实操", "顺序是提交 → 复查待推送提交 → 必要时改为公开 → Codex 设置 Pages 来源（人批准、网页确认）→ 推送；GitHub 文档要求先为仓库启用自定义工作流（2026-10-05 查阅 Using custom workflows with GitHub Pages）。若录制时先推送了，在 Actions 页对失败的运行点 Re-run，并确认新运行成功。Pages 来源设置界面按录制时 GitHub 版本核对。讲师录制时若真的失败，失败过程保留在本页。首次部署若自然出错，就地从 Actions 日志、build 输出和 Network 定位并保留；没有出错不伪造（决定 7）。"),
        ("讲师提示", "推送由人执行；设置交给 Codex 时，批准框就是人机边界（回扣 1.6）。gh 由学员本人登录（环境检查单），令牌不贴进对话、不放环境变量。预检见 courseware/ch02/materials/pages-source/：临时仓库上 13 次批准，修改命令先错用 POST 再改 PUT；录制仓库的实际次数和说法以当天为准，画面不预告。"),
    ),
    repro=repro([("新开 Codex 会话，发送这段请求；每条命令弹出批准框时先读命令和理由", SOURCE_PROMPT),
                 ("改完在网页上确认（没装 GitHub CLI 时直接在这里手动选择 GitHub Actions）", "仓库页 → Settings → Pages → Build and deployment → Source")],
                note="交给 Codex 的请求不推送。若个人空仓库暂时不能启用 Pages 来源，先由人推送已检查的内容，再完成来源设置并在 Actions 重新运行部署；推送目标必须是自己的 origin。", label="请求原文"),
)

scene(
    id="p49a", segment="推送与发布",
    label="Codex 怎样调用 gh", title="刚才 Codex 是怎样调用 gh 的？",
    lead="打开刚才设置 Pages 来源那次会话的请求记录，找到相关的那几次请求。模型发出的工具调用里是一条完整的 gh 命令；需要批准的调用，还带着“要在沙箱外运行”的标记和一句理由，就是批准框里显示的那句。我们点了同意，记录里看不到这一下，只看到命令随后执行、返回了输出；下一次请求把这段返回带上，模型据此决定下一步。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:40px">'
        '<div class="p-fn">记录里的一次 gh 调用（exec 里的一段代码）</div>'
        '<div class="p-ln"><i>1</i><code>exec_command({ cmd: "gh api repos/…/pages",</code></div>'
        '<div class="p-ln add" data-reveal="1"><i>2</i><code>sandbox_permissions: "require_escalated",</code></div>'
        '<div class="p-ln add" data-reveal="1"><i>3</i><code>justification: "Allow gh CLI to query … Pages …?" })</code></div>'
        '<div class="p-ln" data-reveal="2"><i>4</i><code>返回：{"message":"Not Found", … "404"}</code></div>'
        '<div class="p-ln add" data-reveal="2"><i>5</i><code>下一次：用 POST 创建站点，再查一次</code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>完整命令</b><small>模型提出的调用，一字不差</small></span></li>'
        '<li data-reveal="1"><span><b>批准申请写在调用里</b><small>标记加理由，批准框照着显示</small></span></li>'
        '<li data-reveal="2"><span><b>下一次请求带上返回</b><small>模型据此决定下一步</small></span></li>'
        '<li class="is-risk" data-reveal="3"><span><b>点同意的是我们</b><small>记录里只看到命令执行了；这次批了 9 次</small></span></li></ol></div>'
        '<p class="source-note">字段名照记录原样，值有删节。' + RUN1020 + '</p>'
    ),
    steps=["完整命令", "批准申请", "下一次请求", "谁点的同意"],
    teaching=teach(
        ("实测记录", "2026-10-20 在组织下的临时公开仓库（Pages 尚未开启）上用交互界面发 p49 的原话，能力目录开、推理档位 max：15 次对话请求、16 次工具调用，其中 9 次申请在沙箱外运行，都由人批准。能力目录开时是 code mode：每次调用是 exec 工具里的一小段 JavaScript，调 tools.exec_command，申请批准的标记 sandbox_permissions: require_escalated、justification（这次是英文）、prefix_rule 写在这段代码的参数里。过程：沙箱里 gh auth status 误报登录无效、gh api 连不上网；检查环境变量时自己用 sed 把值遮住；申请在沙箱外运行后确认仓库权限，查到 Pages 还不存在（404）；看了 workflow 文件；列出要执行的命令后没有停下等人；第一次 POST 把参数写成 gh 不支持的 -d，看到报错后改成 -f，创建成功；复查 build_type 为 workflow；还主动查了推送时那次失败的部署和日志。批准这一下本身不出现在请求里。同日能力目录关的两次运行：个人仓库 7 次批准（先 PUT 404 再 POST），组织仓库 6 次批准（直接 POST）。"),


        ("讲师提示", "录制时在 claude-tap 里打开 p49 那次会话的请求，按实际记录逐条指认；命令写法、调用次数和 PUT/POST 的先后以录制为准。复查返回里的 html_url 会露出账号或域名，截图前检查；gh auth status 和 gh api user 的输出含账号名，令牌不能出镜。同日一次能力目录关的运行里，它为确认登录申请过一条含 gh auth token 的命令（自己接了 sed 只露前 4 个字符和长度，没有泄露）：读到令牌的命令哪怕看起来做了遮盖，也值得在批准框前停一下，这是本页“批不批由我们定”最好的例子；录制时出现就就地讲，不出现不提。“执行修改前告诉我”没有让它停下，真正停住它的是批准框：这一句可以回扣 1.3。"),
    ),
)

scene(
    id="p50", segment="推送与发布",
    label="Actions 绿了就行吗", title="Actions 成功了，页面就能用了吗？",
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
    teaching=teach(
        ("跟做产出", "三项发布检查结果与公开 URL；URL 是必做自检项，课程不统一收取。"),
    ),
)

scene(
    id="p51", segment="推送与发布",
    label="标记这个版本", title="给这个版本打 tag，只推送它",
    lead="给公开的版本打上 ch02-homepage-live，然后只推送这一个 tag。用 --tags 会把所有本地 tag 一并公开，包括练习时随手打的。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git tag ch02-homepage-live"><div class="dim">$ git tag ch02-homepage-live</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:10px" data-copy="git push origin ch02-homepage-live"><div class="dim">$ git push origin ch02-homepage-live</div><div class="ok"> * [new tag] ch02-homepage-live -> ch02-homepage-live</div></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="2" style="margin-top:14px"><h3>不用 git push --tags</h3><p>它会把所有本地 tag 一起推上去</p></div>'
    ),
    steps=["打 tag", "只推送这一个", "为什么不用 --tags"],
    teaching=teach(
        ("核对记录", "2026-10-02 用本地裸仓库实测：只推送单个 tag 时远端只出现该 tag（Git 2.50.1）。"),
    ),
)

scene(
    id="p52", segment="推送与发布",
    label="本节小结", title="从本地提交到公开 URL",
    lead="本节推送前看过完整历史，留下审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。还在请求记录里看清了一次 gh 调用：模型提出命令，我们在终端批准，返回再带进下一次请求。",
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="gate" data-reveal="0"><h3>看清历史</h3><p>提交、文件、作者</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="0"><h3>审查配置</h3><p>base、权限、分支</p></div>'
        '<div class="p-node" data-role="us" data-reveal="0"><h3>设置与推送</h3><p>Codex 改设置<br>人批准、人推送</p></div>'
        '<div class="p-node" data-role="ok" data-reveal="0"><h3>证明可用</h3><p>三项检查与 tag</p></div></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:18px">一次 gh 调用：<b>模型提出命令 → 我们批准 → 返回带进下一次请求</b></div>'
    ),
    steps=["本节做了什么", "一次 CLI 调用"],
)

lesson.write()

#!/usr/bin/env python3
"""2.4 发布上线，看 Codex 怎么用 gh：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py；口播见 ../script.json。
从 2.3 的结束快照（homepage-v2）开始；画面证据来自 2026-10-25 发布排练（lab-runs ch02/2.4-20261025-claude）和推送后用 gh 读部署的补跑（同目录 ghrun/），录制时每段先讲 PPT，再切现场讲相同和不同。
"""
from html import escape
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
sys.path.insert(0, str(Path(__file__).resolve().parents[4] / "tools"))
from lessonkit import Lesson, NARROW, anchor, chapter_map, ref, repro  # noqa: E402
from tracekit import Evidence  # noqa: E402

lesson = Lesson(__file__, "2.4", "发布上线，看 Codex 怎么用 gh", summary="从上一节的 homepage-v2 开始第一次推送：推送前看清即将公开的整段历史；Codex 写部署配置，用工具列表里没有的 gh 设置 Pages 来源、推送后读部署状态，每条命令由我们批准，推送由我们来做；最后用公开 URL 证明页面可用。", prep=[
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "定好讲师个人空仓库的名字和 Pages 地址，p47 Prompt 里的 <我的仓库名>、<用户名> 先替换好。",
    "Chrome 备好“GitHub 仓库”标签页，GitHub 已登录，账号资料、通知不入镜。",
    "作者邮箱、gh 输出里的账号名和 html_url 上屏前检查；真实邮箱不出镜，画面上的作者用占位。",
    "p49b 推送后马上发：运行可能还没结束，先讲 p50 的三项检查也可以，回来再看它读到的结果。",
])
scene = lesson.scene

# p49a 的观察点和阅读节选在 trace/evidence.json；p49b 的原文取自 ghrun.json（补跑的最后一条记录）；公开数据见 materials/publish/run-20261025
E = Evidence(Path(__file__).resolve().parents[1] / "trace/evidence.json")
RUN = "2026-10-25 排练：从 homepage-v2 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash，Agent Lab"
GHRUN = json.loads((Path(__file__).resolve().parents[3] / "materials/publish/run-20261025/ghrun.json").read_text())[0]


PREPUSH = """git log --stat HEAD
git log -p HEAD
git log --format='%an <%ae>' HEAD | sort -u"""

DEPLOY_PROMPT = """Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。
Context：仓库名是 <我的仓库名>，
Pages 地址是 https://<用户名>.github.io/<仓库名>/。
Constraints：只新增工作流文件和必要的 Vite 配置；
不推送，这一轮不改仓库设置；说明每个权限为什么需要。
Done when：本地 npm run build 成功；我能逐项解释工作流做了什么。"""

# 排练原文（记录 25；没有导出，原文在 lab-runs 的 prompt-commit.txt）
COMMIT_PROMPT = """我审过了，接受这两处改动。先列出 git status 给我看，再提交 vite.config.ts 和工作流文件；
提交说明第一行写 deploy: 用 GitHub Actions 发布到 Pages，正文写改了哪些文件。"""

SOURCE_PROMPT = """请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查有没有 Pages 站点：没有就用 POST 创建，已有就用 PUT 修改，都设 build_type=workflow。执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。"""

assert SOURCE_PROMPT in E._source("session-33", {"message": "请用 GitHub CLI"})

# 补跑原文（ghrun 记录 2；lab-runs 的 prompt-ghrun.txt）
GHRUN_PROMPT = """我刚把当前分支推到了 origin。请用 GitHub CLI（gh）看这次推送触发的部署：运行有没有成功、每个 job 的结果，日志里有没有警告或错误，有就把原文摘给我。只查看，不重跑或触发部署，不改设置和文件。"""



# ---------- 公开之前 ----------
scene(
    id="p43", segment="公开之前", layout="lesson-cover",
    label="这一节做哪几步", title="这一节要做哪几步？",
    lead="这是第一次推送：页面、源码和整段提交历史都会公开。发布时 Codex 要用一个工具列表里没有的工具：GitHub CLI（gh）。",
    html=(
        chapter_map(4) +
        '<div class="p-flow" style="--n:4;margin-top:12px">'
        '<div class="p-node" data-role="gate" data-reveal="1"><span class="p-num">1</span><h3>看清历史</h3><p>即将公开的提交、文件、作者</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="1"><span class="p-num">2</span><h3>审查配置</h3><p>Codex 写的部署工作流</p></div>'
        '<div class="p-node" data-role="us" data-reveal="2"><span class="p-num">3</span><h3>设置与推送</h3><p>Codex 用 GitHub CLI（gh）改设置，我们来推送</p></div>'
        '<div class="p-node" data-role="ok" data-reveal="2"><span class="p-num">4</span><h3>看部署、证明可用</h3><p>Codex 用 gh 读结果，我们查公开 URL</p></div></div>' +
        '<div style="margin-top:10px">' + anchor(lit=("工具", "工具返回"), note="工具里没有 gh，它经 exec 在本机运行；GitHub 上的设置和部署状态，gh 查过才作为工具返回进来", reveal=2) + '</div>'
    ),
    steps=["回到地图", "推送之前", "推送与之后"],
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
    lead="首次向个人空仓库推送时，当前分支的全部历史都会公开：我们自己的两个检查点，课程模板带来的提交，以及其中后来删掉的文件。检查每次提交改过的文件、实际内容和作者信息；不能只看当前目录，也不能只看自己新增的提交。排练这次，模板历史里有三个后来删掉的文件（BRIEF.md 等），推送后照样能看到；git log -p 有 8934 行，大半是 package-lock.json 的依赖清单，可以先排除它读其余约 3300 行，见本页展开步骤。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="' + escape(PREPUSH) + '"><div class="dim">$ git log --stat HEAD</div>'
        '<div>homepage-v2: 参考 Hyperspace 调整主页风格 <span class="dim">· 样式与页面 4 个文件</span></div>'
        '<div>homepage-v1: 放进个人信息、经历和项目</div><div class="dim">  profile.md · AGENTS.md · src/App.tsx · src/index.css · index.html</div>'
        '<div class="dim">  …… 再往下是课程模板带来的提交</div>'
        '<div class="dim">$ git log -p HEAD</div>'
        '<div class="dim">$ git log --format=\'%an &lt;%ae&gt;\' HEAD | sort -u</div><div>示例同学 &lt;你的邮箱&gt;<span class="dim"> · </span>课程模板的作者 &lt;……&gt;</div></div>'
        '<div class="p-grid" style="--n:3;gap:12px;margin-top:14px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1"><h3>课程模板带来的提交</h3><p>作者是别人，克隆时就在历史里</p></div>'
        '<div class="p-box is-soft" data-role="us" data-reveal="2"><h3>profile.md 和页面</h3><p>关于具体的人的事实</p></div></div>'
        '<p class="source-note">提交说明和文件取自讲师排练的项目（上一节结束时的 homepage-v2），作者为占位；实际检查自己当前分支的完整历史</p>'
    ),
    steps=["列出提交与作者", "作者与模板提交", "个人内容"],
    repro=repro([
        ("在练习项目根目录运行。用 --stat 查看提交和文件，再用 -p 查看每次改动；作者命令列出当前分支历史里的姓名与邮箱。", PREPUSH),
        ("-p 的输出太长时，先排除依赖锁文件读其余改动；锁文件里是依赖名、版本和下载地址，另外扫一眼即可。", "git log -p HEAD -- . ':!package-lock.json'"),
        ("已有远端提交时，先核对远端历史与当前分支，再决定如何继续；不要强推绕过历史冲突。", ""),
    ], label="推送前：检查完整历史"),
)

scene(
    id="p46", segment="推送前检查",
    label="能让所有人看到吗", title="这些内容，可以让所有人看到吗？",
    lead="逐项对照判断清单，由我们自己决定。以提交作者邮箱为例：它是不是我们愿意公开的邮箱？不愿意，就先停下，不推送。改用 GitHub 的 noreply 邮箱只影响之后的提交，已有提交里的邮箱要改写历史才能换掉，做法见本页链接。讲师演示的个人信息是讲师本人的，取自自己网站上已经公开的内容；写到别人的事，要先问过对方。参考主页的出处写在页脚，公开以后也要还在。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr)">'
        '<div class="p-box" data-role="gate" data-reveal="0"><span class="p-tag" data-role="gate">每个提交里都有</span>'
        '<p class="p-mono" style="margin-top:8px;line-height:1.6">Author: 示例同学<br>&lt;<b>你的邮箱</b>&gt;</p><p class="p-sub">不想公开：先停；换 noreply 只管以后的提交</p></div>'
        '<ul class="p-checks" style="gap:6px"><li class="is-no" data-reveal="1">有没有 secret<small>API 密钥、令牌、配置文件</small></li>'
        '<li class="is-no" data-reveal="1">有没有未经同意的他人信息<small>别人的姓名、联系方式、经历、照片</small></li>'
        '<li class="is-no" data-reveal="1">截图里有没有隐私<small>桌面、通知、浏览器标签</small></li>'
        '<li data-reveal="2">首屏的名字和简介，是自己的吗<small>还是课程示例里的“示例同学”</small></li>'
        '<li data-reveal="2">本人愿意公开<small>包括作者邮箱</small></li></ul></div>'
        '<div class="p-bar" data-reveal="3">有一项不行，<b>先停下，不推送</b></div>'
    ),
    refs=[
        ref("设置提交邮箱", "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address", "GitHub 官方文档（改写历史不在本课范围，做之前人工复核）", kind="read"),
        ref("从仓库历史中删除敏感数据", "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository", "GitHub 官方文档（改写历史不在本课范围，做之前人工复核）", kind="read"),
    ],
    steps=["作者邮箱", "三项排查", "是不是自己的", "停止条件"],
)

# ---------- 部署配置 ----------
scene(
    id="p47", segment="部署配置", layout="prompt-scene", prompt=DEPLOY_PROMPT,
    label="让 Codex 写部署工作流", title="让 Codex 写部署工作流，但不让它推送",
    lead="部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。这一轮 Codex 只写文件；仓库设置留到推送前单独一步，推送始终由我们来做。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>写清仓库名和地址</b><small>别让它猜，也别抄讲师的</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>不推送，这轮不改设置</b><small>设置单独一步，推送留给我们</small></span></li>'
        '<li data-reveal="2"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>'
    ),
    steps=["仓库名", "不推送", "解释权限"],
)

scene(
    id="p48", segment="部署配置",
    label="工作流能直接用吗", title="Codex 写的配置，逐项审查再推送",
    lead="四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是自己的默认分支。有一项不对就不推送，让 Codex 改。左侧是排练这次的最终文件：第一版用的 action 版本偏旧，我们追问后它升到了最新大版本。",
    html=(
        NARROW +
        '<div class="p-walk"><div data-reveal="0"><div class="p-src" style="--lh:34px">'
        '<div class="p-fn">vite.config.ts · .github/workflows/deploy-pages.yml（摘录）</div>'
        '<div class="p-ln"><i>1</i><code>base: <span class="s">\'/ch02-pages-lab-20261025-claude/\'</span>,</code></div>'
        '<div class="p-ln"><i>2</i><code>on:</code></div>'
        '<div class="p-ln"><i>3</i><code>  push:</code></div>'
        '<div class="p-ln"><i>4</i><code>    branches: [main]</code></div>'
        '<div class="p-ln"><i>5</i><code>permissions:</code></div>'
        '<div class="p-ln"><i>6</i><code>  contents: read</code></div>'
        '<div class="p-ln"><i>7</i><code>  pages: write</code></div>'
        '<div class="p-ln"><i>8</i><code>  id-token: write</code></div>'
        '<div class="p-ln"><i>9</i><code><span class="c"># … npm ci → build → configure-pages → 上传 dist → deploy</span></code></div></div></div>'
        '<ol class="p-notes"><li data-reveal="0"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li>'
        '<li data-reveal="1"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li>'
        '<li data-reveal="2"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li>'
        '<li class="is-risk" data-reveal="3"><span><b>触发分支</b><small>等于自己的默认分支</small></span></li></ol></div>'
        '<p class="source-note">左侧摘自 Codex 按 p47 的 Prompt 生成、追问后升级 action 版本的文件；仓库名是排练用的临时仓库。' + RUN + '。我们的文件写法会不同，按实际审</p>'
    ),
    steps=["base", "资源路径", "权限", "触发分支"],
)


def tools_reading():
    """记录 33：请求的 tools 字段只有这几个通用工具，没有 gh；系统指令里提到 gh 的只有 prefix_rule 的一个例子。"""
    r = E._record("session-33")["request"]["body"]
    names = [t.get("name") or t.get("type") for t in r["tools"]]
    assert names == ["exec", "wait", "request_user_input", "collaboration", "web_search"], names
    gh = [line for x in r["input"] if x.get("type") == "message" for c in x["content"]
          for line in c.get("text", "").splitlines() if '"gh"' in line]
    assert gh == ['- ["gh", "pr", "check"]'], gh
    return ('<p class="p-ev-source">10-25 排练 · 设置 Pages 来源时的请求</p>'
            '<article><h3>请求里的工具（tools 字段）</h3><pre>' + escape("\n".join(names)) + '</pre></article>'
            '<article><h3>系统指令里提到 gh 的唯一一处（申请批准时 prefix_rule 的例子）</h3><pre>' + escape(gh[0]) + '</pre></article>')


def recheck_reading():
    """记录 36：POST 与复查的返回是两段很长的 JSON，只摘出要看的字段，完整原文在“原始记录”。"""
    raw = E._source("session-36", {"result": "call_b6e283844a574995a3b1e4db"})
    parts = re.findall(r"=== (.+?) ===\n(\{.*?\})EXIT=0", raw)
    assert [t for t, _ in parts] == ["POST 创建 Pages 站点", "复查 GET pages"], parts
    rows = []
    for title, body in parts:
        d = json.loads(body)
        assert d["build_type"] == "workflow", d
        rows.append(f"=== {title} ===\nhtml_url: {d['html_url']}\nbuild_type: {d['build_type']}")
    return ('<p class="p-ev-source">10-25 排练 · 真实记录节选 · 复查结果</p>'
            '<article><h3>创建与复查的返回（摘出两个字段，完整 JSON 在原始记录）</h3><pre>' + escape("\n\n".join(rows)) + '</pre></article>')


# ---------- 推送与发布 ----------
scene(
    id="p49", segment="推送与发布",
    label="设置来源并推送", title="Codex 改 Pages 设置，推送由我们来做",
    lead="审过的部署配置让 Codex 提交，批准框里看清文件和提交说明；再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开的话，现在再改。Pages 的来源交给 Codex 用 gh 设为 GitHub Actions：每条命令弹出批准框，读过再批；改完在网页上刷新确认。最后由我们把当前分支推到自己的 origin，部署跑得怎么样，下一步交给 Codex 用 gh 去看。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="agent" data-reveal="0"><span class="p-num">1</span><h3>提交配置</h3><p>Codex 提交，我们批准</p></div>'
        '<div class="p-node" data-role="tool" data-reveal="0"><span class="p-num">2</span><h3>再看历史</h3><p>待推送的全部提交</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="1"><span class="p-num">3</span><h3>Codex 改设置</h3><p>每条命令由我们批准</p></div>'
        '<div class="p-node" data-role="gate" data-reveal="2"><span class="p-num">4</span><h3>我们来推送</h3><p class="p-mono">git push -u origin HEAD</p></div></div>'
        '<div class="p-grid" style="--n:3;gap:14px;margin-top:16px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1"><h3>批准框里看什么</h3><p>命令和理由；修改类命令看清方法和对象</p></div>'
        '<div class="p-box is-soft" data-role="ok" data-reveal="1"><h3>网页上确认</h3><p>Settings → Pages，刷新后来源是 GitHub Actions</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="3"><h3>失败时出在哪一环</h3><p>Actions 日志 → build 输出 → Network 里哪个资源 404</p></div></div>'
    ),
    steps=["提交并复查", "Codex 改设置", "我们来推送", "失败时"],
    repro=repro([("还在写部署配置的那个 Codex 会话里，发送提交请求；git add、git commit 弹出批准框时，看清是这两个文件、提交说明对得上", COMMIT_PROMPT),
                 ("再发设置 Pages 来源的请求；每条命令弹出批准框时先读命令和理由", SOURCE_PROMPT),
                 ("改完在网页上确认（没装 GitHub CLI 时直接在这里手动选择 GitHub Actions）", "仓库页 → Settings → Pages → Build and deployment → Source")],
                note="交给 Codex 的请求不推送。10-25 排练时仓库还没推送过任何提交，也能直接创建 Pages；万一创建失败，先由我们推送已检查的内容，再设置来源，并在 Actions 重新运行部署。推送目标必须是自己的 origin。", label="请求原文"),
)

scene(
    id="p49a", segment="推送与发布",
    label="Codex 怎样调用 gh", title="工具里没有 gh，它是怎样调用的？",
    lead="回看排练这次设置 Pages 来源的记录。请求里的工具只有 exec、wait 这类通用工具，没有 gh；gh 是我们电脑上装好、登录好的一个命令，Codex 用 exec 运行它，会不会用、命令怎么写，靠模型自己的知识。模型发出的调用里是一条完整的 gh 命令，还带着“要在沙箱外运行”的标记和一句理由，批准框显示的就是这句。我们批准后命令执行，返回 404，站点还不存在；这段返回进了下一次请求，它据此改用 POST 创建，又申请一次，复查得到 build_type: workflow。它说了“执行修改前告诉我”也没有停下等回话，停住它的是批准框；我们点的同意本身不在记录里。排练这次一共批了两次。左侧按钮切换观察点，阅读视图展示原文节选。",
    html=E.stage("p49a", reading={"gh-tools": tools_reading(), "post-result": recheck_reading()}),
    steps=["工具列表", "完整命令", "工具返回", "据此创建", "复查"],
)


def ghrun_parts():
    """ghrun 记录 18：请求里带着补跑的全部调用和返回，响应是最后的回答。只摘原文里的子串，不重排命令。"""
    raw = json.dumps(GHRUN["request"]["body"]["input"], ensure_ascii=False)
    cmds = ["gh run list --limit 20 --json databaseId,name,displayTitle,event,status,conclusion,headSha,createdAt,url",
            "gh run view 40183596663 --json jobs,conclusion,status,headSha,event,createdAt,updatedAt,url",
            "gh run view 40183596663 --log 2>&1 | tee /tmp/run-40183596663.log | wc -l"]
    for c in cmds:
        assert c in raw, c
    assert "aborted by user" in raw and "npm audit" in raw and "346" in raw
    assert GHRUN_PROMPT in raw
    answer = "".join(c.get("text", "") for o in GHRUN["response"]["body"]["output"] if o.get("type") == "message" for c in o["content"])
    picks = ["| **Build**", "| **Deploy**", "1 high severity vulnerability", "DeprecationWarning: The `punycode`"]
    lines = [next(line for line in answer.splitlines() if k in line) for k in picks]
    # 表格两行去掉“步骤”一列；只去 Markdown 的 ** 和反引号，文字不改
    lines[0:2] = [re.sub(r"\|\s*Set up job.*", "|", line).rstrip() for line in lines[0:2]]
    lines = [line.replace("**", "").replace("`", "") for line in lines]
    return cmds, lines


GH_CMDS, GH_ANSWER = ghrun_parts()

scene(
    id="p49b", segment="推送与发布",
    label="用 gh 看这次部署", title="推送之后，让 Codex 用 gh 看这次部署",
    lead="部署在 GitHub 的机器上跑，结果不在项目文件里，也不在 context 里。推送后让 Codex 用 gh 去看：运行列表、每个 job、日志里的警告和错误。排练补跑这次，它先列出运行，再看两个 job，最后把 346 行日志存成文件、grep 后分段读；这些都是 gh 查回来的文本，作为工具返回进到请求里，读了多少就进来多少。它还想跑 npm audit 查日志里提到的漏洞，这已经在请求之外，我们在批准框说不。",
    html=(
        NARROW +
        '<div class="p-pair" style="grid-template-columns:minmax(0,.62fr) minmax(0,1.38fr);gap:18px">'
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:10px 16px"><span class="p-tag" data-role="us">我们的请求</span><h3>只看，不改</h3><p>成没成功、每个 job、警告原文；不重跑、不改文件</p></div>'
        '<div class="p-term" data-reveal="1" style="font-size:15px">' + "".join(f'<div>$ {escape(c)}</div>' for c in GH_CMDS) + '</div></div>'
        '<div class="p-term" data-reveal="2" style="margin-top:8px;font-size:15px"><div class="dim">它带回来的（回答节选）</div>' + "".join(f'<div>{escape(line)}</div>' for line in GH_ANSWER) + '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:8px">想再跑 npm audit：请求外的事，<b>在批准框说不</b></div>'
        '<p class="source-note">2026-10-25 补跑：同一个项目、新会话，运行已在推送后结束；共批 5 次、拒 1 次。日志里有哪些警告，每次不同</p>'
    ),
    steps=["只让它看", "它跑的 gh", "带回来的文本", "请求外的事"],
    repro=repro([("推送以后，在同一个 Codex 会话里发送；每条 gh 命令弹出批准框时看清是读取这次运行，只批本次", GHRUN_PROMPT)],
                note="只读：它申请重跑部署、查依赖漏洞或改文件时拒绝。运行还没结束时，可以先做下一页的三项检查，再回来看它读到的结果。", label="请求原文"),
)

scene(
    id="p50", segment="推送与发布",
    label="部署成功就行吗", title="gh 说部署成功了，页面就能用了吗？",
    lead="gh 读到的是部署流程成功完成。别人能不能正常打开，要我们自己看：未登录窗口打开公开 URL；Network 面板没有 404；停用缓存后刷新仍然正常。",
    html=(
        NARROW +
        '<div class="p-claim" style="grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)">'
        '<div class="p-box" data-role="ok" data-reveal="0"><span class="p-tag" data-role="ok">Actions</span><p class="p-big">✓ Build ✓ Deploy</p><p class="p-sub">gh 读到两个 job 都是 success（排练这次 37 秒）</p></div>'
        '<ul class="p-checks"><li data-reveal="1">未登录窗口打开 URL<small>别人看到的就是这样</small></li>'
        '<li data-reveal="2">Network 没有 404<small>CSS、JS、图片都加载了</small></li>'
        '<li data-reveal="3">停用缓存后刷新仍正常<small>看到的是服务器上的版本</small></li></ul></div>'
        '<p class="source-note">排练这次：首次部署一次成功；全新的浏览器上下文（未登录）打开公开 URL，页面、CSS、JS 三个请求都是 200，停用缓存后刷新相同</p>'
    ),
    steps=["绿色对勾", "未登录窗口", "Network", "停用缓存再刷新"],
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
)

# 三题只考机制，换一次运行也成立（ED-020）
QUESTIONS = [
    ("请求的工具列表里没有 gh，Codex 是怎样运行 gh 的？",
     "用 exec 这样的通用工具运行本机命令：gh 是我们电脑上装好、登录好的命令；会不会用、命令怎么写，靠模型自己的知识，装没装、登没登录要它自己先跑命令看", "回看：工具里没有 gh，它是怎样调用的"),
    ("这次部署成没成功、日志里有什么，Codex 是从哪里知道的？",
     "部署在 GitHub 的机器上跑，结果本来不在 context 里；它运行 gh run list、gh run view，输出作为工具返回进了下一次请求，读了多少就进来多少", "回看：推送之后，让 Codex 用 gh 看这次部署"),
    ("Pages 设置是 Codex 用 gh 改的，在哪一步由我们说了算？请求记录里看得到吗？",
     "在批准框：命令和理由写在模型发出的工具调用里，看得到；我们点的同意不在记录里，只能看到命令随后执行了。Prompt 里的“先告诉我”停不住它。推送由我们自己执行", "回看：工具里没有 gh，它是怎样调用的"),
]

scene(
    id="p51b", segment="推送与发布",
    label="暂停自检", title="暂停自检：gh 是怎样用上的？",
    lead="每题先暂停，写出我们的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
    html='<style>body[data-mode="slides"] #p51b .x-answer{display:none}body[data-mode="slides"] #p51b .p-qrow h3{font-size:24px}body[data-mode="slides"] #p51b .p-back-to{font-size:16px}</style><div class="p-qlist">'
    + "".join(f'<div class="p-qrow" data-reveal="{i}"><span class="p-n">{i + 1}</span><div><h3>{escape(q)}</h3><p class="x-answer">{escape(a)}</p><span class="p-back-to">{escape(b)}</span></div></div>'
              for i, (q, a, b) in enumerate(QUESTIONS))
    + '</div>',
    steps=["怎样运行", "状态怎样进来", "谁说了算"],
)

scene(
    id="p52", segment="推送与发布",
    label="本节小结", title="从本地提交到公开 URL",
    lead="本节推送前看过完整历史，留下审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。工具列表里没有 gh，Codex 用 exec 在我们电脑上运行它；GitHub 上的设置和部署状态本来不在 context 里，gh 查过才作为工具返回进来；改 GitHub 的每一步，都经我们批准。",
    html=(
        '<div class="p-flow" style="--n:4">'
        '<div class="p-node" data-role="gate" data-reveal="0"><h3>看清历史</h3><p>提交、文件、作者</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="0"><h3>审查配置</h3><p>base、权限、分支</p></div>'
        '<div class="p-node" data-role="us" data-reveal="0"><h3>设置与推送</h3><p>Codex 改设置<br>我们批准、我们推送</p></div>'
        '<div class="p-node" data-role="ok" data-reveal="0"><h3>看部署、证明可用</h3><p>gh 读结果，三项检查与 tag</p></div></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:18px">gh 经 exec 在本机运行：<b>GitHub 的状态作为工具返回进来，改动经我们批准</b></div>'
    ),
    steps=["本节做了什么", "gh 在请求里"],
)

lesson.write()

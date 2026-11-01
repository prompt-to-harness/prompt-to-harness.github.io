#!/usr/bin/env python3
"""2.4 发布上线，看 Codex 怎么用 gh：本节页面源，生成 lesson.js。

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

lesson = Lesson(__file__, "2.4", "发布上线，看 Codex 怎么用 gh", summary="从 homepage-v2 发布到公开 URL：确认可公开、审查部署配置，Codex 用 gh 查询 Pages、依据返回完成设置并复查；人推送后，再取得对应提交的部署结果，最后在浏览器确认页面可用。", prep=[
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "定好讲师个人空仓库的名字和 Pages 地址，p47 Prompt 里的 <我的仓库名>、<用户名> 先替换好。",
    "Chrome 备好“GitHub 仓库”标签页，GitHub 已登录，账号资料、通知不入镜。",
    "作者邮箱、gh 输出里的账号名和 html_url 上屏前检查；真实邮箱不出镜，画面上的作者用占位。",
    "gh 用较新的稳定版；安装和登录由本人完成，不在课上展开安装教程。p48b 两条官方公告录前打开备用，不要求现场访问。",
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
    label="从本地到公开 URL", title="把本地主页发布成公开 URL",
    lead="主页在本地已经做好。现在让别人也能打开，并确认它真的可用。",
    html=(chapter_map(4) +
        '<div class="p-grid" style="--n:2;gap:14px;margin-top:14px">'
        '<div class="p-box" data-role="us" data-reveal="1"><h3>先准备好</h3><p>确认可公开，审查部署配置</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="1"><h3>再取得结果</h3><p>查远端设置、部署结果，打开页面检查</p></div></div>' +
        '<div style="margin-top:12px">' + anchor(lit=("工具", "工具返回"), note="为了完成下一步，它现在需要知道什么？这些信息从哪里来？", reveal=2) + '</div>'),
    steps=["接住本地主页", "发布需要什么", "带着问题往下走"],
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
    lead="第一次推到个人空仓库，会带上当前分支的完整历史。用 HEAD 检查提交、实际改动和作者信息，包括后来删除的文件与个人资料。文件名只能帮助定位，能不能公开还要看内容；命令与长输出的查看方法在展开步骤里。",
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
    lead="由人判断源码、完整历史和截图能否公开：有没有 secret、未经同意的他人信息、不愿公开的个人信息；首屏身份是否正确，参考素材的出处是否保留。作者邮箱也在判断范围内。发现问题先停下；改邮箱只影响以后的提交，历史处理帮助见本页链接。",
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
    label="工作流能直接用吗", title="审过部署配置，再让 Codex 提交",
    lead="四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是准备推送的分支。有一项不对就不推送，让 Codex 改。左侧是排练这次的最终文件：第一版用的 action 版本偏旧，我们追问后它升到了最新大版本。",
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
        '<li class="is-risk" data-reveal="3"><span><b>触发分支</b><small>等于准备推送的分支</small></span></li></ol></div>'
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
    id="p49", segment="部署配置",
    label="提交已审配置", title="提交已审配置，确认最终公开内容",
    lead="四项审查通过后，让 Codex 提交配置，核对文件和提交说明。再检查最终要推送的历史；需要公开仓库时，此时再改可见性。本地配置准备好了，GitHub 上的 Pages 来源是否就绪，还需要查询。",
    html=(
        '<div class="p-box" data-role="agent" data-reveal="0"><h3>提交已经审过的配置</h3><p>vite.config.ts 与工作流文件；核对提交说明</p></div>'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1" style="margin-top:16px"><h3>确认最终要公开的内容</h3><p>包括刚提交的配置；需要时再把仓库改为公开</p></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:16px">本地已准备好，<b>GitHub 上的 Pages 来源呢？</b></div>'),
    steps=["提交配置", "最终公开判断"],
    repro=repro([("在写配置的 Codex 会话里发送；批准提交时核对文件和说明", COMMIT_PROMPT),
                 ("提交后重新核对完整历史；有问题先停，不推送", PREPUSH)], label="提交与最终检查"),
)

scene(
    id="p48b", segment="远端设置",
    label="认识 GitHub CLI", title="用 gh 查询 GitHub 上的状态",
    lead="GitHub CLI（命令 gh）把 GitHub 平台功能带到终端。git 管版本和提交的推送、拉取；gh 可以查询或操作仓库、Issue、PR、Actions，也能通过通用 API 入口访问 Pages 设置。能力在逐步增加，建议使用较新的稳定版，具体命令仍以当前版本和实际返回为准。API 是平台提供的程序接口，CLI 是命令行入口，SDK 是供代码使用的开发工具包；平台逐步开放更多功能，人和 coding agent 都能更方便地通过工具完成操作。",
    html=(
        '<div class="p-grid" style="--n:2;gap:16px">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><h3>git</h3><p>版本记录，推送与拉取</p></div>'
        '<div class="p-box" data-role="tool" data-reveal="0"><h3>GitHub CLI · gh</h3><p>在终端操作 GitHub 平台功能</p></div></div>'
        '<div class="p-grid" style="--n:2;gap:16px;margin-top:14px">'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>2020.09 · 1.0</h3><p>已有通用 API 调用</p></div>'
        '<div class="p-box is-soft" data-role="tool" data-reveal="1"><h3>2021.04 · 1.9</h3><p>加入 Actions 状态与日志查询</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">平台开放更多功能，<b>人和 agent 都能通过工具调用</b></div>'),
    refs=[ref("GitHub CLI 1.0 公告", "https://github.blog/changelog/2020-09-17-github-cli-is-generally-available/", kind="read"),
          ref("GitHub CLI 1.9 公告", "https://github.blog/changelog/2021-04-15-github-cli-1-9-enables-you-to-work-with-github-actions-from-your-terminal/", kind="read"),
          ref("GitHub CLI 官方手册", "https://cli.github.com/manual/", kind="read")],
    steps=["git 与 gh 的分工", "能力逐步增加", "这次先查 Pages"],
    repro=repro([("使用本人已登录的 gh；在写配置的 Codex 会话里发送。查询后按需要修改，每个批准申请核对范围", SOURCE_PROMPT),
                 ("完成后在网页刷新确认；没装 gh 的学员可手动选择 GitHub Actions", "仓库页 → Settings → Pages → Build and deployment → Source")],
                note="先查状态，再按需要设置；已正确则确认即可。课程环境的 gh 联网需要批准。", label="查询并设置 Pages"),
)

scene(
    id="p49a", segment="远端设置",
    label="查询怎样支持下一步", title="查到当前状态，才知道下一步做什么",
    lead="沿排练记录看查询怎样支持下一步判断：Codex 经 exec 运行本机 gh，输出作为工具返回进入下一次请求。排练这次查到 404，于是申请 POST 创建，再复查到 build_type: workflow；已有正确设置时可以直接确认，不要求每次都出现 404。在本章排练环境里，gh 联网要申请到沙箱外运行，由人核对命令、理由和对象后批准。批准动作不在请求记录里。最后对照现场这次的实际查询与返回。",
    html=E.stage("p49a", reading={"gh-tools": tools_reading(), "post-result": recheck_reading()}),
    steps=["工具列表", "完整命令", "工具返回", "据此创建", "复查"],
)


scene(
    id="p49c", segment="发布与验收",
    label="由人推送", title="来源已确认，由我们推送",
    lead="Pages 来源已确认，待公开内容和配置也已审过。由我们把当前分支推到自己的 origin，触发 GitHub 上的部署。接下来要取得这次提交的运行结果，不能用之前的设置查询代替。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git push -u origin HEAD"><div class="dim">$ git push -u origin HEAD</div></div>'
        '<div class="p-box is-soft" data-role="tool" data-reveal="0" style="margin-top:18px"><h3>部署在 GitHub 的机器上运行</h3><p>这次提交跑得怎么样？需要取得执行后的新状态</p></div>'),
    steps=["推送并触发部署"],
    repro=repro([("由本人在项目根目录运行，核对目标是自己的仓库", "git remote -v\ngit push -u origin HEAD")],
                note="空仓库设置来源失败时，可先推送已审内容，再完成设置并人工确认重跑部署；已推送则不重复执行。", label="推送命令"),
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
    id="p49b", segment="发布与验收",
    label="取得这次部署结果", title="取得对应这次提交的部署结果",
    lead="推送后让 Codex 用 gh 找到对应这次提交的运行，查询状态，再按需要读各个 job 和日志。运行中就等后再查，失败则依据失败步骤定位，成功再检查页面。结果作为工具返回进入请求；日志存成文件以后，实际读取的部分才进入 context。下方是 2026-10-25 新会话补跑的真实节选，当时运行已经结束，不是刚才设置 Pages 的同一次会话。日志里的警告与批准次数只说明这次运行。",
    html=(
        NARROW +
        '<div class="p-pair" style="grid-template-columns:minmax(0,.62fr) minmax(0,1.38fr);gap:18px">'
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:10px 16px"><span class="p-tag" data-role="us">我们的请求</span><h3>只看，不改</h3><p>成没成功、每个 job、警告原文；不重跑、不改文件</p></div>'
        '<div class="p-term" data-reveal="1" style="font-size:15px">' + "".join(f'<div>$ {escape(c)}</div>' for c in GH_CMDS) + '</div></div>'
        '<div class="p-term" data-reveal="2" style="margin-top:8px;font-size:15px"><div class="dim">它带回来的（回答节选）</div>' + "".join(f'<div>{escape(line)}</div>' for line in GH_ANSWER) + '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:8px">想再跑 npm audit：请求外的事，<b>在批准框说不</b></div>'
        '<p class="source-note">2026-10-25 补跑：同一个项目、新会话，运行已在推送后结束；共批 5 次、拒 1 次。日志里有哪些警告，每次不同</p>'
    ),
    steps=["只让它看", "它跑的 gh", "结果依据", "范围与现场结果"],
    repro=repro([("推送以后，在同一个 Codex 会话里发送；每条 gh 命令弹出批准框时看清是读取这次运行，只批本次", GHRUN_PROMPT)],
                note="只读：它申请重跑部署、查依赖漏洞或改文件时拒绝。运行还没结束时，可以先做下一页的三项检查，再回来看它读到的结果。", label="请求原文"),
)

scene(
    id="p50", segment="发布与验收",
    label="部署成功就行吗", title="打开公开页面，确认别人能正常使用",
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
    id="p51", segment="发布与验收",
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
    ("本地部署配置已经写好，Codex 还需要查询 Pages 的什么信息？怎样查？",
     "查询当前来源是否就绪。它经 exec 运行本机 gh，输出作为工具返回进入下一次请求，再决定确认还是修改；知道命令用法不能代替查询远端状态。", "回看：查询怎样支持下一步"),
    ("Pages 设置已正确，能据此判断刚才那次推送已部署成功吗？",
     "还需要取得对应这次提交的运行结果，按需要读 job 和日志。这些返回支持部署判断；页面是否可用还要在浏览器里检查。", "回看：取得这次部署结果"),
    ("Codex 查到需要修改 Pages，在哪一步由人决定是否执行？",
     "本章环境在批准框核对命令、理由、目标仓库与修改范围后批准。记录能看到申请和执行后的返回，看不到点击同意；推送由人执行。", "回看：查询怎样支持下一步"),
]

scene(
    id="p51b", segment="发布与验收",
    label="暂停自检", title="暂停自检：下一步的依据在哪里？",
    lead="每题先暂停，写出我们的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
    html='<style>body[data-mode="slides"] #p51b .x-answer{display:none}body[data-mode="slides"] #p51b .p-qrow h3{font-size:24px}body[data-mode="slides"] #p51b .p-back-to{font-size:16px}</style><div class="p-qlist">'
    + "".join(f'<div class="p-qrow" data-reveal="{i}"><span class="p-n">{i + 1}</span><div><h3>{escape(q)}</h3><p class="x-answer">{escape(a)}</p><span class="p-back-to">{escape(b)}</span></div></div>'
              for i, (q, a, b) in enumerate(QUESTIONS))
    + '</div>',
    steps=["还要查什么", "还缺什么结果", "谁决定执行"],
)

scene(
    id="p52", segment="发布与验收",
    label="本节小结", title="依据实际状态，完成一次发布",
    lead="从可公开的主页和已审配置开始，查询 Pages 现状、按需要设置并复查；人推送后，取得对应提交的部署结果，再在浏览器确认页面可用，保存发布 tag。gh 经 exec 运行，返回进入 context 支持下一步判断；执行后要取得新的结果，修改与公开由人确认。",
    html=(
        '<div class="p-grid" style="--n:2;gap:16px">'
        '<div class="p-box" data-role="tool" data-reveal="0"><h3>执行之前</h3><p>查当前设置，依据返回决定是否修改</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="0"><h3>执行之后</h3><p>查这次结果，打开页面确认可用</p></div></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:18px">工具返回进入 context：<b>支持判断，指导下一步行动</b></div>'),
    steps=["从准备到交付", "Context 怎样推动发布"],
)

lesson.write()

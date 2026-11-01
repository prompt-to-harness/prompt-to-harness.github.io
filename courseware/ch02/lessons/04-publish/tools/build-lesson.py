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
from lessonkit import Lesson, NARROW, anchor, chapter_map, redrawn, ref, repro  # noqa: E402
from tracekit import Evidence  # noqa: E402

lesson = Lesson(__file__, "2.4", "发布上线，看 Codex 怎么用 gh", summary="从 homepage-v2 发布到公开 URL：确认可公开、审查部署配置，Codex 用 gh 查询 Pages、依据返回完成设置并复查；人推送后，再取得对应提交的部署结果，最后在浏览器确认页面可用。", prep=[
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "讲师远端放在 prompt-to-harness 组织下，命名 ch02-pages-release-<录制日期>-<场次>（本次为 ch02-pages-release-20261101-01）；每次完整重录用新名字。本次已用 gh 建好公开空仓库，不加初始文件、不推送；准备好它的 HTTPS 地址，p44 现场修改 origin；步骤见 tools/README-recording.md。",
    "p47 Prompt 使用这次仓库名，账号或组织名填 prompt-to-harness，Pages 地址为 https://prompt-to-harness.github.io/<仓库名>/；学员用自己的账号与仓库。先核对本人有组织仓库创建、设置和推送权限，Pages/Actions 未被组织策略禁用。",
    "本节直接使用 Public 空仓库，没有可见性切换；本地源码与历史检查后才推送。发布 tag 用 ch02-homepage-release；不要把旧排练的 tag 当成本次已经创建的结果。",
    "本次使用讲师指定的既有录制项目，已是 homepage-v2（f5a7315），工作区干净；保留实际录制成果，不用旧排练快照覆盖。分支为 codex/ch02-recording，部署触发分支按实际核对。启动命令和目录见本机录制卡；p44 现场查看、修改并复查 origin，不重复建仓与登录。",
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
Pages 地址是 https://<账号或组织名>.github.io/<仓库名>/。
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
    id="p43", segment="准备发布", layout="lesson-cover",
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
    id="p44", segment="准备发布",
    label="核对目标与内容", title="把什么内容，推到哪个仓库？",
    lead="录前已建好公开空仓库。讲师使用 prompt-to-harness 组织下的日期与场次仓库，学员使用自己的仓库。现场核对远端仍为空，先看原 origin，再改成这次的地址，最后核对 fetch 与 push；再让 Codex 只读检查当前源码、完整历史、作者邮箱与个人资料，列出位置和待确认项，由人核对并决定是否公开。后来删掉的文件也可能在历史里，参考素材的出处要保留。命令和历史处理帮助在展开步骤与阅读链接中。",
    html=(
        '<div class="p-grid" style="--n:2;gap:18px">'
        '<div class="p-box" data-role="us" data-reveal="0"><h3>推到哪里</h3><p>本次公开空仓库<br>核对 origin 地址</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="1"><h3>准备公开什么</h3><p>当前源码与完整历史<br>作者邮箱、个人资料、截图和出处</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:18px">有不愿公开或未经同意的内容，<b>先处理，再推送</b></div>'),
    steps=["核对发布目标", "检查公开内容", "决定能否继续"],
    repro=repro([
        ("尚未准备远端的学员：先在 GitHub 自己的账号下建 Public 空仓库，不初始化文件，复制它的 HTTPS 地址。讲师在录前建好仓库；origin 留在现场修改", ""),
        ("在本地项目根目录先看原地址，再把下方地址换成刚复制的 HTTPS 地址；改完核对 fetch、push 目标，这里不推送", "git remote -v\ngit remote set-url origin https://github.com/账号/仓库名.git\ngit remote -v"),
        ("交给 Codex 的公开前检查请求；先读报告，再核对依据和待确认项", '我准备把当前分支推到公开的 GitHub 仓库。请帮我做一次公开前检查：看当前文件和 HEAD 可达的完整提交历史，包括后来删掉的内容、提交作者邮箱、个人资料，以及参考素材的出处。找出可能的密钥、隐私或需要我确认是否公开的信息；每项给出文件位置或提交依据，敏感值不要原样打印。说明实际检查了哪些范围、哪些还不能判断。只做本地只读检查，不联网、不改文件或历史、不提交、不推送。'),
        ("人工核对入口：查看当前分支完整历史；先看文件，再读改动和作者；二进制文件另行打开", PREPUSH),
        ("长输出可先排除依赖锁文件，锁文件仍需另外查看", "git log -p HEAD -- . ':!package-lock.json'"),
    ], label="推送前检查命令"),
    refs=[ref("设置提交邮箱", "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address", kind="read"),
          ref("处理历史中的敏感数据", "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository", kind="read")],
)





# ---------- 部署配置 ----------
scene(
    id="p47", segment="部署配置", layout="prompt-scene", prompt=DEPLOY_PROMPT,
    label="让 Codex 写部署工作流", title="让 Codex 写部署工作流，但不让它推送",
    lead="部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。本节用项目站点的默认地址 https://<账号或组织名>.github.io/<仓库名>/：账号或组织名决定域名，仓库名决定路径。Prompt 中的仓库名和地址需要替换为自己的。这一轮 Codex 只写文件；仓库设置留到推送前单独一步，推送始终由我们来做。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>写清仓库名和地址</b><small>域名用账号或组织名，路径用仓库名</small></span></li>'
        '<li class="is-risk" data-reveal="1"><span><b>不推送，这轮不改设置</b><small>设置单独一步，推送留给我们</small></span></li>'
        '<li data-reveal="2"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>'
    ),
    steps=["仓库名", "不推送", "解释权限"],
    refs=[ref("本次发布地址（部署后核对）", "https://prompt-to-harness.github.io/ch02-pages-release-20261101-01/", kind="read")],
)

scene(
    id="p48", segment="部署配置",
    label="工作流能直接用吗", title="审过部署配置，再让 Codex 提交",
    lead="左侧是排练文件，用来说明检查位置：base 和资源路径对上发布地址，触发分支对上准备推送的分支，权限只要发布所需。回现场运行 build，按同一清单审实际文件；有问题先改，审过后让 Codex 提交，再核对新增提交。文件准备好了，远端 Pages 来源还需查询。",
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
    steps=["base", "资源路径", "权限", "现场审查并提交"],
    repro=repro([("审过实际文件以后，在同一 Codex 会话里发送，核对提交文件与说明", COMMIT_PROMPT),
                 ("提交后检查新增的改动，确认仍可公开", PREPUSH)], label="审过后提交"),
)


def pages_reading():
    """全部节选由已有原文核对；不改写或重导出原始记录。"""
    query = "gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages"
    create = "gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow"
    assert query in E._source("session-33", {"response": "custom_tool_call"})
    assert create in E._source("session-35", {"response": "custom_tool_call"})
    output = E._source("session-35", {"result": "call_597e8882fca2455288fbbdff"})
    not_found = next(line for line in output.splitlines() if "Not Found" in line)
    result = E._source("session-36", {"result": "call_b6e283844a574995a3b1e4db"})
    parts = re.findall(r"=== (.+?) ===\n(\{.*?\})EXIT=0", result)
    checked = next(json.loads(body) for title, body in parts if title == "复查 GET pages")
    assert checked["build_type"] == "workflow"
    tools = [t.get("name") or t.get("type") for t in E._record("session-33")["request"]["body"]["tools"]]
    assert "exec" in tools and "gh" not in tools
    source = '<p class="p-ev-source">2026-10-25 排练 · 真实记录节选</p>'
    def card(title, body):
        return '<article><h3>' + title + '</h3><pre>' + escape(body) + '</pre></article>'
    return {
        "gh-call": source + card("工具列表没有单独的 gh，命令经 exec 运行", ", ".join(tools)) + card("这次查询的命令（调用中的节选）", query),
        "gh-result": source + card("下一次请求里的工具返回", not_found),
        "post-call": source + card("据此发出的创建命令（节选）", create) + card("执行后又复查（返回字段节选）", "build_type: " + checked["build_type"]),
    }


# ---------- 推送与发布 ----------


scene(
    id="p48b", segment="查询设置",
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
    id="p49a", segment="查询设置",
    label="调用、返回与下一步", title="查到什么，就根据什么继续",
    lead="看排练里的三个观察点：exec 运行 gh 查询，404 返回进入下一次请求，模型据此创建并复查。完整调用与批准参数可在原始记录中查看。联网与修改按本章环境的批准申请核对，人在执行时决定是否放行；人的点击不在请求记录里。现场结果独立核对，已有正确来源时可以直接确认，不要求出现同样的 404。",
    html=E.stage("p49a", reading=pages_reading()),
    steps=["发起调用", "返回进入请求", "依据返回继续"],
)




def deployment_return():
    assert GHRUN_PROMPT in json.dumps(GHRUN["request"]["body"]["input"], ensure_ascii=False)
    def output_text(item):
        value = item.get("output", "")
        return value if isinstance(value, str) else "\n".join(x.get("text", "") for x in value)
    returned = [output_text(x) for x in GHRUN["request"]["body"]["input"] if x.get("type", "").endswith("_output")]
    job_text = next(x for x in returned if "=== jobs ===" in x)
    data = json.loads(re.search(r"^\{.*\}$", job_text, re.M).group())
    assert data["headSha"] == "529f11aab44eff2d42a51f63e0273d7859aafe10"
    assert data["status"] == "completed" and data["conclusion"] == "success"
    rows = ["headSha: " + data["headSha"], "status: " + data["status"], "conclusion: " + data["conclusion"]]
    for name in ("Build", "Deploy"):
        job = next(j for j in data["jobs"] if j["name"] == name)
        assert job["conclusion"] == "success"
        rows.append(name + ": " + job["conclusion"])
    return "\n".join(rows)



scene(
    id="p49b", segment="查询部署",
    label="推送并查询结果", title="这次推送，部署成功了吗？",
    lead="设置确认后由人推送，再让 Codex 用 gh 查询对应这次提交的部署。中间的字段直接从补跑记录的工具返回提取，进入下一次请求后支持模型的结论；完整命令和日志留在原始材料。补跑是同一项目的新会话，当时部署已结束；现场查询在推送后发出，运行中就等待再查，失败则根据实际日志定位。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git push -u origin HEAD"><div>$ git push -u origin HEAD</div></div>'
        '<div class="p-pair" style="grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:18px;margin-top:14px">'
        '<div class="p-term" data-reveal="1" style="font-size:16px"><div class="dim">下一次请求的工具返回 · 字段节选</div><pre style="margin:8px 0 0;white-space:pre-wrap;overflow-wrap:anywhere">' + escape(deployment_return()) + '</pre></div>'
        '<div class="p-box" data-role="ok" data-reveal="2"><h3>回答有了依据</h3><p>对应这次提交<br>构建与部署成功</p><p class="p-sub">接着打开页面检查</p></div></div>'
        '<p class="source-note">2026-10-25 补跑 · 同项目、新会话，运行当时已结束；展示原始工具返回中的字段，不是现场结果。<a href="../../materials/publish/run-20261025/ghrun.json">完整请求、调用与返回</a></p>'),
    steps=["推送并发起查询", "取得这次运行的状态", "根据返回判断"],
    repro=repro([("由本人核对目标后推送；已推送则不重复", "git remote -v\ngit push -u origin HEAD"),
                 ("推送后在同一 Codex 会话里发送，读取这次部署，不重跑、不改文件", GHRUN_PROMPT)],
                note="运行中则等待后查，失败看实际日志。空仓库设置来源失败时，可先推送已审内容，再完成设置并人工确认重跑。", label="推送与查询请求"),
)

scene(
    id="p49d", segment="查询部署", layout="evidence-scene",
    label="根据环境反馈判断", title="下一步怎么走，要看实际返回",
    lead="把发布前后两次查询并排看：先取得外部状态，让返回进入 Context，再判断下一步。环境反馈原则据 Anthropic《Building effective agents》；gh、Pages 与两次查询的关系来自本课演示，图为课程自绘。",
    html=redrawn("environment-feedback", "environment-feedback", "course",
                 source="课程自绘：据 Anthropic 的环境反馈原则与本课发布演示整理，不是官方原图", max_height=410),
    steps=["回顾发布前查询", "对照推送后查询"],
    refs=[ref("Anthropic · Building effective agents · Agents",
              "https://www.anthropic.com/research/building-effective-agents#agents")],
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
    refs=[ref("本次发布地址（部署后核对）", "https://prompt-to-harness.github.io/ch02-pages-release-20261101-01/", kind="read")],
)

scene(
    id="p51", segment="发布与验收",
    label="标记这个版本", title="给这个版本打 tag，只推送它",
    lead="给公开的版本打上 ch02-homepage-release，然后只推送这一个 tag。用 --tags 会把所有本地 tag 一并公开，包括练习时随手打的。",
    html=(
        '<div class="p-term" data-reveal="0" data-copy="git tag ch02-homepage-release"><div class="dim">$ git tag ch02-homepage-release</div></div>'
        '<div class="p-term" data-reveal="1" style="margin-top:10px" data-copy="git push origin ch02-homepage-release"><div class="dim">$ git push origin ch02-homepage-release</div></div>'

    ),
    steps=["打 tag", "只推送这个版本"],
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

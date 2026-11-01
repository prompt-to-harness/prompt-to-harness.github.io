window.lesson = {
  "title": "发布上线，看 Codex 怎么用 gh",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.04",
  "summary": "从 homepage-v2 发布到公开 URL：确认可公开、审查部署配置，Codex 用 gh 查询 Pages、依据返回完成设置并复查；人推送后，再取得对应提交的部署结果，最后在浏览器确认页面可用。",
  "prep": [
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "讲师远端放在 prompt-to-harness 组织下，命名 ch02-pages-release-<录制日期>-<场次>（本次为 ch02-pages-release-20261101-01）；每次完整重录用新名字。本次已用 gh 建好公开空仓库，不加初始文件、不推送；准备好它的 HTTPS 地址，p44 现场修改 origin；步骤见 tools/README-recording.md。",
    "p47 Prompt 使用这次仓库名，账号或组织名填 prompt-to-harness，Pages 地址为 https://prompt-to-harness.github.io/<仓库名>/；学员用自己的账号与仓库。先核对本人有组织仓库创建、设置和推送权限，Pages/Actions 未被组织策略禁用。",
    "本节直接使用 Public 空仓库，没有可见性切换；本地源码与历史检查后才推送。发布 tag 用 ch02-homepage-release；不要把旧排练的 tag 当成本次已经创建的结果。",
    "本次使用讲师指定的既有录制项目，已是 homepage-v2（f5a7315），工作区干净；保留实际录制成果，不用旧排练快照覆盖。分支为 codex/ch02-recording，部署触发分支按实际核对。启动命令和目录见本机录制卡；p44 现场查看、修改并复查 origin，不重复建仓与登录。",
    "Chrome 备好“GitHub 仓库”标签页，GitHub 已登录，账号资料、通知不入镜。",
    "作者邮箱、gh 输出里的账号名和 html_url 上屏前检查；真实邮箱不出镜，画面上的作者用占位。",
    "gh 用较新的稳定版；安装和登录由本人完成，不在课上展开安装教程。p48b 两条官方公告录前打开备用，不要求现场访问。",
    "p49b 推送后马上发：运行可能还没结束，先讲 p50 的三项检查也可以，回来再看它读到的结果。"
  ],
  "scenes": [
    {
      "id": "p43",
      "segment": "准备发布",
      "layout": "lesson-cover",
      "label": "从本地到公开 URL",
      "title": "把本地主页发布成公开 URL",
      "lead": "主页在本地已经做好。现在让别人也能打开，并确认它真的可用。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>改风格</li><li class=\"is-now\"><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-grid\" style=\"--n:2;gap:14px;margin-top:14px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>先准备好</h3><p>确认可公开，审查部署配置</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>再取得结果</h3><p>查远端设置、部署结果，打开页面检查</p></div></div><div style=\"margin-top:12px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">系统指令</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">规则</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具返回</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">新的 Prompt</div></div><div class=\"p-foot\">为了完成下一步，它现在需要知道什么？这些信息从哪里来？</div></div></div>",
      "steps": [
        "接住本地主页",
        "发布需要什么",
        "带着问题往下走"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指章节地图的 2.4，不切窗口】\n\n上一节我们参考 Hyperspace 调整了主页风格，让 Codex 提交了我们 v2 版本的主页。内容和样子已经在本地看过了。现在要让别人也能通过一个公开地址打开它，并确认页面真的能用。",
        "【操作提示｜推进课件 p43 第 2 步，指准备和结果两张卡片，不切窗口】\n\n发布要先准备好内容和配置，再到 GitHub 上执行。我们重点看两处：发布前查 Pages 设置，推送后查这次部署的结果。最后打开页面，确认别人能用。",
        "【操作提示｜推进课件 p43 第 3 步，指工具与工具返回，不切窗口】\n\nGitHub 上的设置和运行结果，原本都不在这一列里。Codex 怎么知道现在是什么状态？我们跟着这两次查询，看工具返回怎样支持它继续做事。"
      ],
      "teaching": [],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "准备发布",
      "label": "核对目标与内容",
      "title": "把什么内容，推到哪个仓库？",
      "lead": "录前已建好公开空仓库。讲师使用 prompt-to-harness 组织下的日期与场次仓库，学员使用自己的仓库。现场核对远端仍为空，先看原 origin，再改成这次的地址，最后核对 fetch 与 push；再让 Codex 只读检查当前源码、完整历史、作者邮箱与个人资料，列出位置和待确认项，由人核对并决定是否公开。后来删掉的文件也可能在历史里，参考素材的出处要保留。命令和历史处理帮助在展开步骤与阅读链接中。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><h3>推到哪里</h3><p>本次公开空仓库<br>核对 origin 地址</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><h3>准备公开什么</h3><p>当前源码与完整历史<br>作者邮箱、个人资料、截图和出处</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:18px\">有不愿公开或未经同意的内容，<b>先处理，再推送</b></div>",
      "steps": [
        "核对发布目标",
        "检查公开内容",
        "决定能否继续"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p44 第 1 步 → 浏览器打开录前建好的 prompt-to-harness/ch02-pages-release-20261101-01 Public 空仓库，复制 HTTPS 地址。切到本次录制项目根目录，先 git remote -v 展示原 origin，再 git remote set-url origin <刚复制的 HTTPS 地址>，最后 git remote -v 核对 fetch/push 目标。只改本地连接地址，不推送。不开建仓或登录流程，账号资料不入镜】\n\n我提前在课程组织下面建好了一个公开空仓库，接下来把本地项目的 origin 指向它。大家跟做时，用自己的仓库地址就可以。\n\n【切换｜浏览器 · 本次发布仓库】\n\n先核对这次的目标，仓库还是空的，把这里的 HTTPS 地址复制下来。\n\n【切换｜Terminal · 项目根目录】\n\n先运行 git remote -v，现在的 origin 还指向课程模板仓库。origin 是这个远端的名字，我们现在用 git remote set-url，把它换成刚才复制的地址。\n\n改完再看一次。fetch 是取回的地址，push 是推送的地址，都要对上这次的仓库。这里改的是本地连接地址，还没有把代码推上去。",
        "【操作提示｜从 Terminal 回课件 p44 第 2 步，指完整历史与资料，本步只解释检查范围；下一步交给 Codex 做只读检查，三条历史命令保留作人工核对入口。邮箱与资料已离屏看过，隐私不上屏；长输出方法留在展开步骤，不逐行讲依赖清单】\n\n【切换｜回课件 p44】\n\n第一次推送会带上当前分支的完整历史，我们在中途删掉的文件、我们的的提交作者的邮箱，以及我们自己的个人资料，如果也被推送的话，那会随着一起公开。所以这个可能大家得注意一下。比如，并不是说我们最后这个项目中还剩什么文件，而是说我们整个被 commit 的历史都能被看到。如果大家并没有做过太多编程开发，这点要特别注意。\n\n除了历史，我们还要看现在的源码、个人资料和截图，以及参考素材的出处。接下来试试把这件事交给 Codex，让它先帮我们找需要确认的地方。",
        "【操作提示｜现场实验｜停留 p44 第 3 步，在讲师指定的录制项目打开 Codex；沿用当前会话，尚未启动则在该目录运行 agent-lab codex --tap。发送以下请求，不提前跑或预写发现：我准备把当前分支推到公开的 GitHub 仓库。请帮我做一次公开前检查：看当前文件和 HEAD 可达的完整提交历史，包括后来删掉的内容、提交作者邮箱、个人资料，以及参考素材的出处。找出可能的密钥、隐私或需要我确认是否公开的信息；每项给出文件位置或提交依据，敏感值不要原样打印。说明实际检查了哪些范围、哪些还不能判断。只做本地只读检查，不联网、不改文件或历史、不提交、不推送。 等待实际报告后核对一两条依据，隐私不上屏；不另造敏感数据或删除文件来构造结果。有问题先处理，不推送，尚未完成检查不进入部署。结束回课件】\n\n我们来做个小实验。刚才说要检查的这些内容，能不能让 Codex 先帮我们找一遍？\"我准备把当前分支推到公开的 GitHub 仓库。请帮我做一次公开前检查：看当前文件和 HEAD 可达的完整提交历史，包括后来删掉的内容、提交作者邮箱、个人资料，以及参考素材的出处。找出可能的密钥、隐私或需要我确认是否公开的信息；每项给出文件位置或提交依据，敏感值不要原样打印。\"\n\n【切换｜Terminal · Codex 会话】\n\n我们把要公开这件事告诉它，请它检查当前文件和完整历史，包括后来删掉的内容。找到需要注意的地方，要给出文件位置或者提交依据；敏感信息不要原样贴出来。这一轮只检查，不修改，也不推送。\n\n先看看它实际查了什么，再挑一两条结果，回到对应的文件或者提交里核对。它说需要我们确认的资料，也要由我们自己决定是否公开。\n\n【切换｜回课件 p44】\n\n大家跟做时，也可以把这条请求交给 Codex，看看它会提醒什么。它没有发现问题，也要看清实际检查了哪些范围；还不能确认的地方先处理。确认可以继续，再准备部署配置。"
      ],
      "repro": {
        "label": "推送前检查命令",
        "steps": [
          {
            "text": "尚未准备远端的学员：先在 GitHub 自己的账号下建 Public 空仓库，不初始化文件，复制它的 HTTPS 地址。讲师在录前建好仓库；origin 留在现场修改",
            "code": ""
          },
          {
            "text": "在本地项目根目录先看原地址，再把下方地址换成刚复制的 HTTPS 地址；改完核对 fetch、push 目标，这里不推送",
            "code": "git remote -v\ngit remote set-url origin https://github.com/账号/仓库名.git\ngit remote -v"
          },
          {
            "text": "交给 Codex 的公开前检查请求；先读报告，再核对依据和待确认项",
            "code": "我准备把当前分支推到公开的 GitHub 仓库。请帮我做一次公开前检查：看当前文件和 HEAD 可达的完整提交历史，包括后来删掉的内容、提交作者邮箱、个人资料，以及参考素材的出处。找出可能的密钥、隐私或需要我确认是否公开的信息；每项给出文件位置或提交依据，敏感值不要原样打印。说明实际检查了哪些范围、哪些还不能判断。只做本地只读检查，不联网、不改文件或历史、不提交、不推送。"
          },
          {
            "text": "人工核对入口：查看当前分支完整历史；先看文件，再读改动和作者；二进制文件另行打开",
            "code": "git log --stat HEAD\ngit log -p HEAD\ngit log --format='%an <%ae>' HEAD | sort -u"
          },
          {
            "text": "长输出可先排除依赖锁文件，锁文件仍需另外查看",
            "code": "git log -p HEAD -- . ':!package-lock.json'"
          }
        ],
        "note": ""
      },
      "refs": [
        {
          "kind": "read",
          "group": "",
          "text": "设置提交邮箱",
          "url": "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address"
        },
        {
          "kind": "read",
          "group": "",
          "text": "处理历史中的敏感数据",
          "url": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository"
        }
      ],
      "teaching": [],
      "source": "index.html#p44",
      "seconds": 90
    },
    {
      "id": "p47",
      "segment": "部署配置",
      "layout": "prompt-scene",
      "prompt": "Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。\nContext：仓库名是 <我的仓库名>，\nPages 地址是 https://<账号或组织名>.github.io/<仓库名>/。\nConstraints：只新增工作流文件和必要的 Vite 配置；\n不推送，这一轮不改仓库设置；说明每个权限为什么需要。\nDone when：本地 npm run build 成功；我能逐项解释工作流做了什么。",
      "label": "让 Codex 写部署工作流",
      "title": "让 Codex 写部署工作流，但不让它推送",
      "lead": "部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。本节用项目站点的默认地址 https://<账号或组织名>.github.io/<仓库名>/：账号或组织名决定域名，仓库名决定路径。Prompt 中的仓库名和地址需要替换为自己的。这一轮 Codex 只写文件；仓库设置留到推送前单独一步，推送始终由我们来做。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>写清仓库名和地址</b><small>域名用账号或组织名，路径用仓库名</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>不推送，这轮不改设置</b><small>设置单独一步，推送留给我们</small></span></li><li data-reveal=\"2\"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>",
      "steps": [
        "仓库名",
        "不推送",
        "解释权限"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p47 第 1 步，指 Prompt 的 Context；发送在第 3 步进行，PPT 保留占位符，填好本次目标的完整请求在第 3 步操作提示中】\n\n部署要准备两样东西。第一是 GitHub Actions 工作流，也就是让 GitHub 在自己的机器上执行的一组步骤：安装依赖、构建，再发布页面。第二是 Vite 的 base 配置，用来对上发布后的资源路径。这里需要把仓库名和页面地址写清楚，用自己的，不要照抄我们的示例。\n\n这个地址从哪里来呢？我们这次用的是 GitHub Pages 的项目站点，也没有配置自定义域名。地址前半段，是账号或者组织名，加上点 github 点 io；后面斜杠这一段，是仓库名。\n\n我们用的是 prompt-to-harness 这个组织，所以域名就是 prompt-to-harness 点 github 点 io，后面再接这次的仓库名。它也对应了下一页要检查的 Vite base，页面资源得能从这个仓库路径下面加载。",
        "【操作提示｜推进课件 p47 第 2 步，指 Prompt 的 Constraints，不切窗口】\n\n再看我们给 Codex 的约束：这一轮只新增工作流和必要的 Vite 配置，不推送，也不改仓库设置。先让它把文件写出来，我们先本地 review 之后，再继续。",
        "【操作提示｜推进课件 p47 第 3 步 → Terminal 沿用 p44 公开前检查的 Codex 会话，不 /clear；发送下方填好目标的部署 Prompt，PPT 继续保留占位符。只批准范围内操作。发出后回课件 p48 讲排练文件，末尾再看现场；不在此等待整个任务。本次可复制请求（只复制以下 Goal 到 Done when，不复制操作提示）： Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。 Context：仓库是 prompt-to-harness/ch02-pages-release-20261101-01， Pages 地址是 prompt-to-harness.github.io/ch02-pages-release-20261101-01/。 Constraints：只新增工作流文件和必要的 Vite 配置； 不推送，这一轮不改仓库设置；说明每个权限为什么需要。 Done when：本地 npm run build 成功；我能逐项解释工作流做了什么。】\n\n最后还要求它解释每个权限为什么需要，方便我们审查。现在发出这条请求。\n\n【切换｜Terminal · Codex 会话】\n\n公开前检查做完了，我们接着让它准备部署配置。发出这条已经填好仓库名和地址的 Prompt。大家跟做时，也记得把这两处换成自己的。\n\n生成要跑一会儿，我们先看课件里排练那次的配置。"
      ],
      "refs": [
        {
          "kind": "read",
          "group": "",
          "text": "本次发布地址（部署后核对）",
          "url": "https://prompt-to-harness.github.io/ch02-pages-release-20261101-01/"
        }
      ],
      "teaching": [],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "部署配置",
      "label": "工作流能直接用吗",
      "title": "审过部署配置，再让 Codex 提交",
      "lead": "左侧是排练文件，用来说明检查位置：base 和资源路径对上发布地址，触发分支对上准备推送的分支，权限只要发布所需。回现场运行 build，按同一清单审实际文件；有问题先改，审过后让 Codex 提交，再核对新增提交。文件准备好了，远端 Pages 来源还需查询。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:34px\"><div class=\"p-fn\">vite.config.ts · .github/workflows/deploy-pages.yml（摘录）</div><div class=\"p-ln\"><i>1</i><code>base: <span class=\"s\">'/ch02-pages-lab-20261025-claude/'</span>,</code></div><div class=\"p-ln\"><i>2</i><code>on:</code></div><div class=\"p-ln\"><i>3</i><code>  push:</code></div><div class=\"p-ln\"><i>4</i><code>    branches: [main]</code></div><div class=\"p-ln\"><i>5</i><code>permissions:</code></div><div class=\"p-ln\"><i>6</i><code>  contents: read</code></div><div class=\"p-ln\"><i>7</i><code>  pages: write</code></div><div class=\"p-ln\"><i>8</i><code>  id-token: write</code></div><div class=\"p-ln\"><i>9</i><code><span class=\"c\"># … npm ci → build → configure-pages → 上传 dist → deploy</span></code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li><li data-reveal=\"1\"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li><li data-reveal=\"2\"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>触发分支</b><small>等于准备推送的分支</small></span></li></ol></div><p class=\"source-note\">左侧摘自 Codex 按 p47 的 Prompt 生成、追问后升级 action 版本的文件；仓库名是排练用的临时仓库。2026-10-25 排练：从 homepage-v2 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash，Agent Lab。我们的文件写法会不同，按实际审</p>",
      "steps": [
        "base",
        "资源路径",
        "权限",
        "现场审查并提交"
      ],
      "script": [
        "【操作提示｜回放｜从 Codex 回课件 p48 第 1 步，指排练文件的 base。生成已在 p47 发出；先讲文件检查位置，不展开 action 版本升级经过】\n\n【切换｜回课件 p48】\n\n看排练那次的文件。我们要拿它和自己的发布目标对一下。先看 base，这个示例放在仓库名对应的路径下，所以前后各有一个斜杠，中间是仓库名。大家核对自己的名字，不照抄示例。",
        "【操作提示｜推进课件 p48 第 2 步，指资源路径；本步先解释检查方法，不切终端，现场 build 放在第 4 步】\n\n第二项看 build 以后的资源路径。运行 npm run build，再打开构建出来的 dist/index.html，看它引用的 CSS 和 JavaScript 路径，是不是以自己的仓库名开头。这能帮助我们确认 base 有没有生效。",
        "【操作提示｜推进课件 p48 第 3 步，指 permissions 的三行，不切窗口】\n\n第三项是权限。这里三行，分别是读仓库内容、写 Pages、获取部署用的身份令牌。我们让 Codex 解释用途，就是要拿生成的配置和这些用途对一下。多出来的权限，要问清楚再决定。",
        "【操作提示｜现场回看｜推进课件 p48 第 4 步；VS Code 核对本次 base、分支、权限；Terminal 跑 npm run build，编辑器看 dist/index.html 路径。审过后切同一 Codex 会话发送本页提交请求，核对文件与说明再批准；再看新增提交是否可公开。发现问题先改再审，结束回课件，不推送】\n\n再看触发分支，和我们准备推送的分支是否一致。\n\n【切换｜VS Code · 本次部署配置】\n\n现在按这些位置看我这次生成的文件，核对路径、分支和权限。\n\n【切换｜Terminal · 项目根目录】\n\n跑一次 build。\n\n【切换｜VS Code · dist/index.html】\n\n构建以后，再看引用的资源路径和发布地址对不对。有问题就让 Codex 改，改完再审。\n\n【切换｜Terminal · Codex 会话】\n\n审过以后，发这里的提交请求，看清文件和说明，再批准提交。新增的这次改动，也要确认可以公开。\n\n【切换｜回课件 p48】\n\n文件准备好了。GitHub 上的 Pages 来源设置，现在是什么状态？"
      ],
      "repro": {
        "label": "审过后提交",
        "steps": [
          {
            "text": "审过实际文件以后，在同一 Codex 会话里发送，核对提交文件与说明",
            "code": "我审过了，接受这两处改动。先列出 git status 给我看，再提交 vite.config.ts 和工作流文件；\n提交说明第一行写 deploy: 用 GitHub Actions 发布到 Pages，正文写改了哪些文件。"
          },
          {
            "text": "提交后检查新增的改动，确认仍可公开",
            "code": "git log --stat HEAD\ngit log -p HEAD\ngit log --format='%an <%ae>' HEAD | sort -u"
          }
        ],
        "note": ""
      },
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p48b",
      "segment": "查询设置",
      "label": "认识 GitHub CLI",
      "title": "用 gh 查询 GitHub 上的状态",
      "lead": "GitHub CLI（命令 gh）把 GitHub 平台功能带到终端。git 管版本和提交的推送、拉取；gh 可以查询或操作仓库、Issue、PR、Actions，也能通过通用 API 入口访问 Pages 设置。能力在逐步增加，建议使用较新的稳定版，具体命令仍以当前版本和实际返回为准。API 是平台提供的程序接口，CLI 是命令行入口，SDK 是供代码使用的开发工具包；平台逐步开放更多功能，人和 coding agent 都能更方便地通过工具完成操作。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><h3>git</h3><p>版本记录，推送与拉取</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>GitHub CLI · gh</h3><p>在终端操作 GitHub 平台功能</p></div></div><div class=\"p-grid\" style=\"--n:2;gap:16px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>2020.09 · 1.0</h3><p>已有通用 API 调用</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>2021.04 · 1.9</h3><p>加入 Actions 状态与日志查询</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">平台开放更多功能，<b>人和 agent 都能通过工具调用</b></div>",
      "refs": [
        {
          "kind": "read",
          "group": "",
          "text": "GitHub CLI 1.0 公告",
          "url": "https://github.blog/changelog/2020-09-17-github-cli-is-generally-available/"
        },
        {
          "kind": "read",
          "group": "",
          "text": "GitHub CLI 1.9 公告",
          "url": "https://github.blog/changelog/2021-04-15-github-cli-1-9-enables-you-to-work-with-github-actions-from-your-terminal/"
        },
        {
          "kind": "read",
          "group": "",
          "text": "GitHub CLI 官方手册",
          "url": "https://cli.github.com/manual/"
        }
      ],
      "steps": [
        "git 与 gh 的分工",
        "能力逐步增加",
        "这次先查 Pages"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p48b 第 1 步，指 git 和 gh 两张卡片；本页第 3 步发请求，不安装或登录 gh】\n\nPages 设置可以在网页里看，也可以用 GitHub 官方的命令行工具，GitHub CLI，命令叫 gh。左边的 git，管版本记录和提交的推送、拉取。右边的 gh，把 GitHub 平台上的功能带到了终端，我们和 Codex 都可以用命令访问。",
        "【操作提示｜推进课件 p48b 第 2 步，指两个时间点；官方出处留在阅读模式，不切网页】\n\n这些能力也是逐步加进来的。二零二零年九月，一点零版本已经有通用的 API 调用；到了二零二一年四月，一点九版本又加入了 Actions 的专用命令，可以查运行状态和日志。所以建议用较新的稳定版，旧版本可能还没有我们演示的命令或参数。",
        "【操作提示｜推进课件 p48b 第 3 步 → Terminal 同一 Codex 会话发送本页 Pages 请求。第一次联网或修改申请，看清命令、理由、仓库与范围，只批本次；身份或凭据异常时停下处理。发出后讲 p49a 固定记录，不提前等完所有调用】\n\n现在通过专用命令和通用 API 入口，已经能完成许多常见 GitHub 操作，比如仓库、Issue、PR，以及 Pages 设置和部署查询。API 是平台给程序的接口，CLI 是命令行入口，SDK 是供代码使用的工具包。平台开放更多功能，人和 coding agent 就能通过工具做更多事。\n\n【切换｜Terminal · Codex 会话】\n\n我们可以切到命令行看一下 gh 有什么能力，也可以让 codex 给简单介绍下。我们这次让它查询 Pages，按需要把来源设为 GitHub Actions，改完再查一次。出现批准框，先看清它要操作哪个仓库、做什么，它查询的时候，我们先看排练记录。"
      ],
      "repro": {
        "label": "查询并设置 Pages",
        "steps": [
          {
            "text": "使用本人已登录的 gh；在写配置的 Codex 会话里发送。查询后按需要修改，每个批准申请核对范围",
            "code": "请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查有没有 Pages 站点：没有就用 POST 创建，已有就用 PUT 修改，都设 build_type=workflow。执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。"
          },
          {
            "text": "完成后在网页刷新确认；没装 gh 的学员可手动选择 GitHub Actions",
            "code": "仓库页 → Settings → Pages → Build and deployment → Source"
          }
        ],
        "note": "先查状态，再按需要设置；已正确则确认即可。课程环境的 gh 联网需要批准。"
      },
      "teaching": [],
      "source": "index.html#p48b",
      "seconds": 90
    },
    {
      "id": "p49a",
      "segment": "查询设置",
      "label": "调用、返回与下一步",
      "title": "查到什么，就根据什么继续",
      "lead": "看排练里的三个观察点：exec 运行 gh 查询，404 返回进入下一次请求，模型据此创建并复查。完整调用与批准参数可在原始记录中查看。联网与修改按本章环境的批准申请核对，人在执行时决定是否放行；人的点击不在请求记录里。现场结果独立核对，已有正确来源时可以直接确认，不要求出现同样的 404。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;gh-call&quot;, &quot;gh-result&quot;, &quot;post-call&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"gh-call\" aria-pressed=\"true\"><b>调用</b><span>exec 运行 gh 查询</span></button><button type=\"button\" data-ev-key=\"gh-result\" aria-pressed=\"false\"><b>返回</b><span>当前状态进入下一次请求</span></button><button type=\"button\" data-ev-key=\"post-call\" aria-pressed=\"false\"><b>下一步</b><span>据此创建，再复查</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=gh-call\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"gh-call\" ><p class=\"p-ev-source\">2026-10-25 排练 · 真实记录节选</p><article><h3>工具列表没有单独的 gh，命令经 exec 运行</h3><pre>exec, wait, request_user_input, collaboration, web_search</pre></article><article><h3>这次查询的命令（调用中的节选）</h3><pre>gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages</pre></article></section><section data-ev-reading=\"gh-result\" hidden><p class=\"p-ev-source\">2026-10-25 排练 · 真实记录节选</p><article><h3>下一次请求里的工具返回</h3><pre>{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)</pre></article></section><section data-ev-reading=\"post-call\" hidden><p class=\"p-ev-source\">2026-10-25 排练 · 真实记录节选</p><article><h3>据此发出的创建命令（节选）</h3><pre>gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow</pre></article><article><h3>执行后又复查（返回字段节选）</h3><pre>build_type: workflow</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "发起调用",
        "返回进入请求",
        "依据返回继续"
      ],
      "script": [
        "【操作提示｜回放｜从 Codex 回课件 p49a 第 1 步，指工具列表与 gh 查询命令；默认阅读视图，只看主节选，不切完整批准参数。需要核对时再开原始记录】\n\n【切换｜回课件 p49a】\n\n这次只看三处，先看调用。工具列表里没有单独的 gh，它通过 exec 运行本机的 gh 命令，查询 GitHub 上的 Pages。完整命令和批准申请，在原始记录里都能找到。",
        "【操作提示｜推进课件 p49a 第 2 步，指下一次请求里的 404 返回，不切窗口】\n\n接着看返回。排练这次查到四零四，站点还不存在。这段输出作为“工具返回”进入下一次请求，模型就有了当前状态，可以据此判断下一步。",
        "【操作提示｜现场回看｜推进课件 p49a 第 3 步，指创建命令和复查字段；随后切现场 claude-tap 查询记录，再到浏览器 Pages 刷新确认来源。来源未就绪时按实际返回处理，不要求重现 404；来源确认后回课件，下一页开始推送】\n\n所以它按我们 Prompt 里写的创建站点，做完又查了一次，返回的 build_type 已经是 workflow。调用、返回、下一步，这三处就连起来了。已有正确来源时，可以直接确认，不要求走同样的分支。\n\n【切换｜claude-tap 查看器】\n\n现在看现场这次：查到了什么，接下来做了什么，复查结果是什么。\n\n【切换｜浏览器 · GitHub Pages 设置】\n\n我们自己也刷新确认，来源是不是 GitHub Actions。"
      ],
      "teaching": [],
      "source": "index.html#p49a",
      "seconds": 90
    },
    {
      "id": "p49b",
      "segment": "查询部署",
      "label": "推送并查询结果",
      "title": "这次推送，部署成功了吗？",
      "lead": "设置确认后由人推送，再让 Codex 用 gh 查询对应这次提交的部署。中间的字段直接从补跑记录的工具返回提取，进入下一次请求后支持模型的结论；完整命令和日志留在原始材料。补跑是同一项目的新会话，当时部署已结束；现场查询在推送后发出，运行中就等待再查，失败则根据实际日志定位。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git push -u origin HEAD\"><div>$ git push -u origin HEAD</div></div><div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:18px;margin-top:14px\"><div class=\"p-term\" data-reveal=\"1\" style=\"font-size:16px\"><div class=\"dim\">下一次请求的工具返回 · 字段节选</div><pre style=\"margin:8px 0 0;white-space:pre-wrap;overflow-wrap:anywhere\">headSha: 529f11aab44eff2d42a51f63e0273d7859aafe10\nstatus: completed\nconclusion: success\nBuild: success\nDeploy: success</pre></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><h3>回答有了依据</h3><p>对应这次提交<br>构建与部署成功</p><p class=\"p-sub\">接着打开页面检查</p></div></div><p class=\"source-note\">2026-10-25 补跑 · 同项目、新会话，运行当时已结束；展示原始工具返回中的字段，不是现场结果。<a href=\"../../materials/publish/run-20261025/ghrun.json\">完整请求、调用与返回</a></p>",
      "steps": [
        "推送并发起查询",
        "取得这次运行的状态",
        "根据返回判断"
      ],
      "script": [
        "【操作提示｜现场｜从浏览器回课件 p49b 第 1 步；Terminal 项目根目录本人核对 origin 后 git push -u origin HEAD，再切同一 Codex 会话发送本页只读部署请求。备用分支已推送则不重复；不要先讲完全部排练才发请求】\n\n【切换｜回课件 p49b】\n\n设置确认了，现在由我们推送这份已经审过的提交。\n\n【切换｜Terminal · 项目根目录】\n\n核对目标，再运行这条推送命令。它会触发 GitHub 上的部署。\n\n【切换｜Terminal · Codex 会话】\n\n接着让 Codex 查刚才这次提交的运行：成没成功，各个 job 的结果，日志里有没有警告或错误。job 就是一组任务，比如构建和部署。这一步只查看。发出以后，我们先看已有记录里它拿到了什么。",
        "【操作提示｜回放｜从 Codex 回课件 p49b 第 2 步，指字段节选。来源为 10-25 同项目新会话补跑的实际工具返回，当时运行已结束；完整 JSON 链接只作备用，不在主讲展开长参数和警告】\n\n【切换｜回课件 p49b】\n\n这里用的是同一个项目、新会话的补跑，当时部署已经结束。我们直接看工具返回里的几个字段。headSha 是提交标识，先用它核对是不是要查的提交；status 是 completed，运行已经结束；conclusion 是 success，Build 和 Deploy 也都成功。\n\n这些状态被带进下一次请求，模型才有了回答的依据。",
        "【操作提示｜现场回看｜推进课件 p49b 第 3 步，指根据返回判断；再到 Terminal 看现场这次结果与提交对应关系。运行中等后再查，可先讲 p50 检查办法；失败读实际日志。请求外的重跑、audit、改文件申请拒绝。结束回 p49d】\n\n根据这些返回，它报告了构建和部署成功，接下来就可以打开页面检查。需要看日志时，读回来的部分也会进入请求；日志只是存在文件里，还不能直接当作模型已经读过的内容。\n\n【切换｜Terminal · 现场这次的部署结果】\n\n看我这次取得的状态，先对上提交，再看运行结果。还没结束就等后再查；有失败就按眼前的日志定位。"
      ],
      "repro": {
        "label": "推送与查询请求",
        "steps": [
          {
            "text": "由本人核对目标后推送；已推送则不重复",
            "code": "git remote -v\ngit push -u origin HEAD"
          },
          {
            "text": "推送后在同一 Codex 会话里发送，读取这次部署，不重跑、不改文件",
            "code": "我刚把当前分支推到了 origin。请用 GitHub CLI（gh）看这次推送触发的部署：运行有没有成功、每个 job 的结果，日志里有没有警告或错误，有就把原文摘给我。只查看，不重跑或触发部署，不改设置和文件。"
          }
        ],
        "note": "运行中则等待后查，失败看实际日志。空仓库设置来源失败时，可先推送已审内容，再完成设置并人工确认重跑。"
      },
      "teaching": [],
      "source": "index.html#p49b",
      "seconds": 90
    },
    {
      "id": "p49d",
      "segment": "查询部署",
      "layout": "evidence-scene",
      "label": "根据环境反馈判断",
      "title": "下一步怎么走，要看实际返回",
      "lead": "把发布前后两次查询并排看：先取得外部状态，让返回进入 Context，再判断下一步。环境反馈原则据 Anthropic《Building effective agents》；gh、Pages 与两次查询的关系来自本课演示，图为课程自绘。",
      "html": "<div class=\"p-shot\" data-reveal=\"0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:410px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 880 410\" width=\"880\" height=\"410\"><defs><marker id=\"rd-arrow-environment-feedback\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><text x=\"212\" y=\"30\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"28\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">发布前</text></g><g data-reveal=\"0\"><rect x=\"12\" y=\"52\" width=\"400\" height=\"66\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#5B6573\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/><text x=\"212.0\" y=\"93.64\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"24\" font-weight=\"500\" fill=\"#243042\" text-anchor=\"middle\">GitHub 当前 Pages 设置</text></g><g data-reveal=\"0\"><path d=\"M212 126L212 180\" stroke=\"#5B6573\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-environment-feedback)\"/></g><g data-reveal=\"0\"><text x=\"232\" y=\"160\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">用 gh 查询</text></g><g data-reveal=\"0\"><rect x=\"12\" y=\"192\" width=\"400\" height=\"66\" rx=\"10\" fill=\"#DDF1EC\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/><text x=\"212.0\" y=\"234.72\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"27\" font-weight=\"500\" fill=\"#243042\" text-anchor=\"middle\">返回进入 Context</text></g><g data-reveal=\"0\"><path d=\"M212 268L212 310\" stroke=\"#5B6573\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-environment-feedback)\"/></g><g data-reveal=\"0\"><rect x=\"12\" y=\"322\" width=\"400\" height=\"66\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#5B6573\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/><text x=\"212.0\" y=\"363.28\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"23\" font-weight=\"500\" fill=\"#243042\" text-anchor=\"middle\">判断是否需要修改设置</text></g><g data-reveal=\"1\"><text x=\"662\" y=\"30\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"28\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">推送后</text></g><g data-reveal=\"1\"><rect x=\"462\" y=\"52\" width=\"400\" height=\"66\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#5B6573\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/><text x=\"662.0\" y=\"93.64\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"24\" font-weight=\"500\" fill=\"#243042\" text-anchor=\"middle\">这次提交的部署状态</text></g><g data-reveal=\"1\"><path d=\"M662 126L662 180\" stroke=\"#5B6573\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-environment-feedback)\"/></g><g data-reveal=\"1\"><text x=\"682\" y=\"160\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">用 gh 查询</text></g><g data-reveal=\"1\"><rect x=\"462\" y=\"192\" width=\"400\" height=\"66\" rx=\"10\" fill=\"#DDF1EC\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/><text x=\"662.0\" y=\"234.72\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"27\" font-weight=\"500\" fill=\"#243042\" text-anchor=\"middle\">返回进入 Context</text></g><g data-reveal=\"1\"><path d=\"M662 268L662 310\" stroke=\"#5B6573\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-environment-feedback)\"/></g><g data-reveal=\"1\"><rect x=\"462\" y=\"322\" width=\"400\" height=\"66\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#5B6573\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/><text x=\"662.0\" y=\"363.28\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"23\" font-weight=\"500\" fill=\"#243042\" text-anchor=\"middle\">判断等待、排错或继续验收</text></g></svg><p class=\"source-note\">课程自绘：据 Anthropic 的环境反馈原则与本课发布演示整理，不是官方原图</p></div>",
      "steps": [
        "回顾发布前查询",
        "对照推送后查询"
      ],
      "script": [
        "【操作提示｜回课件 p49d 第 1 步，依次指左列的设置、gh 查询、绿色返回框与判断；这里只归纳已有过程，不运行命令】\n\n回头看刚才的两次查询。发布之前，Codex 要先知道 GitHub 上的 Pages 当前是什么设置。它通过 gh 去查，返回进入下一次请求，才有依据判断要不要修改。知道设置命令怎么写，还不够，还要查清这个仓库现在是什么状态。",
        "【操作提示｜推进 p49d 第 2 步，揭示右列与出处链接；对照两个绿色框，再转 p50。原文链接备用，不要求现场打开】\n\n推送之后也是一样。先查这次提交的部署状态，把实际返回带进来，再判断是继续等、按日志排错，还是进入验收。Anthropic 这篇文章也强调，agent 执行中要从环境取得实际反馈，才能判断进展。图里的两次查询，就是我们刚才看到的例子。现在部署返回成功了，页面实际能不能用，接下来还要打开看。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "",
          "text": "Anthropic · Building effective agents · Agents",
          "url": "https://www.anthropic.com/research/building-effective-agents#agents"
        }
      ],
      "teaching": [],
      "source": "index.html#p49d",
      "seconds": 60
    },
    {
      "id": "p50",
      "segment": "发布与验收",
      "label": "部署成功就行吗",
      "title": "打开公开页面，确认别人能正常使用",
      "lead": "gh 读到的是部署流程成功完成。别人能不能正常打开，要我们自己看：未登录窗口打开公开 URL；Network 面板没有 404；停用缓存后刷新仍然正常。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">Actions</span><p class=\"p-big\">✓ Build ✓ Deploy</p><p class=\"p-sub\">gh 读到两个 job 都是 success（排练这次 37 秒）</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">未登录窗口打开 URL<small>别人看到的就是这样</small></li><li data-reveal=\"2\">Network 没有 404<small>CSS、JS、图片都加载了</small></li><li data-reveal=\"3\">停用缓存后刷新仍正常<small>看到的是服务器上的版本</small></li></ul></div><p class=\"source-note\">排练这次：首次部署一次成功；全新的浏览器上下文（未登录）打开公开 URL，页面、CSS、JS 三个请求都是 200，停用缓存后刷新相同</p>",
      "steps": [
        "绿色对勾",
        "未登录窗口",
        "Network",
        "停用缓存再刷新"
      ],
      "script": [
        "【操作提示｜现场｜从 Terminal 回课件 p50 第 1 步，指左边排练的 Build、Deploy success；现场未通过时不宣布通过，不打发布 tag】\n\n【切换｜回课件 p50】\n\n左边是排练那次的结果，Build 和 Deploy 都成功了。它回答的是构建和发布有没有完成。别人能不能正常打开页面，还要我们自己去看，右边这三项都要检查。",
        "【操作提示｜推进课件 p50 第 2 步 → 浏览器新建未登录窗口，打开本次地址 prompt-to-harness.github.io/ch02-pages-release-20261101-01/；这是部署完成后要访问的目标，现场以 Pages 设置或部署输出给出的实际 URL 再核对；后续保留这个窗口做 Network 与刷新检查】\n\n第一项，用未登录窗口打开公开地址。我们这次要打开的，就是刚才填进部署请求的那个地址：组织的域名，后面接这次的仓库名。\n\n【切换｜浏览器 · 未登录窗口】\n\n看这个页面能不能正常访问，内容和样式是不是刚才发布的那一版。",
        "【操作提示｜从浏览器回课件 p50 第 3 步，再切同一个未登录窗口，打开开发者工具 Network 并刷新，检查 CSS、JS、图片请求】\n\n【切换｜回课件 p50】\n\n第二项，看 Network，也就是浏览器的网络请求面板，检查页面资源有没有加载失败。\n\n【切换｜浏览器 · 开发者工具 Network】\n\n（这里不需要）（刷新一下，看看 CSS、JavaScript 和图片的请求，有没有四零四。）",
        "【操作提示｜从浏览器回课件 p50 第 4 步，再切 Network 勾 Disable cache 后刷新；逐项核对，发现问题继续定位，三项未过不进入发布 tag。结束回课件】\n\n【切换｜回课件 p50】\n\n这里不需要（第三项，停用缓存以后再刷新，确认看到的是服务器上的版本。）\n\n【切换｜浏览器 · 开发者工具 Network】\n\n不需要（勾上 Disable cache，保持开发者工具打开，再刷新一次，看看页面和资源请求。）\n\n【切换｜回课件 p50】\n\n这三项都过了，才算发布完成。"
      ],
      "refs": [
        {
          "kind": "read",
          "group": "",
          "text": "本次发布地址（部署后核对）",
          "url": "https://prompt-to-harness.github.io/ch02-pages-release-20261101-01/"
        }
      ],
      "teaching": [],
      "source": "index.html#p50",
      "seconds": 120
    },
    {
      "id": "p51",
      "segment": "发布与验收",
      "label": "标记这个版本",
      "title": "给这个版本打 tag，只推送它",
      "lead": "给公开的版本打上 ch02-homepage-release，然后只推送这一个 tag。用 --tags 会把所有本地 tag 一并公开，包括练习时随手打的。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git tag ch02-homepage-release\"><div class=\"dim\">$ git tag ch02-homepage-release</div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:10px\" data-copy=\"git push origin ch02-homepage-release\"><div class=\"dim\">$ git push origin ch02-homepage-release</div></div>",
      "steps": [
        "打 tag",
        "只推送这个版本"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p51 第 1 步 → Terminal 项目根目录；在通过验收的提交上 git tag ch02-homepage-release。tag 已存在则核对，不覆盖；未通过验收不执行】\n\n检查通过以后，给这个发布版本打一个 tag，也就是给当前提交起一个固定的名字。\n\n【切换｜Terminal · 项目根目录】\n\n这次用页面上的 ch02-homepage-release。之后通过这个名字，就能找到这一版。",
        "【操作提示｜从 Terminal 回课件 p51 第 2 步，再由本人执行 git push origin ch02-homepage-release；只推这个 tag，不运行 --tags。实际输出不套固定结果，结束回课件进入自检】\n\n【切换｜回课件 p51】\n\n然后只推送这个 tag，命令在这里。写明名字，就只推这一个；不用 --tags 把其他练习 tag 一起推上去。\n\n【切换｜Terminal · 项目根目录】\n\n推送以后，这一版就可以通过刚才的名字定位了。\n\n【切换｜回课件 p51】"
      ],
      "teaching": [],
      "source": "index.html#p51",
      "seconds": 60
    },
    {
      "id": "p51b",
      "segment": "发布与验收",
      "label": "暂停自检",
      "title": "暂停自检：下一步的依据在哪里？",
      "lead": "每题先暂停，写出我们的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
      "html": "<style>body[data-mode=\"slides\"] #p51b .x-answer{display:none}body[data-mode=\"slides\"] #p51b .p-qrow h3{font-size:24px}body[data-mode=\"slides\"] #p51b .p-back-to{font-size:16px}</style><div class=\"p-qlist\"><div class=\"p-qrow\" data-reveal=\"0\"><span class=\"p-n\">1</span><div><h3>本地部署配置已经写好，Codex 还需要查询 Pages 的什么信息？怎样查？</h3><p class=\"x-answer\">查询当前来源是否就绪。它经 exec 运行本机 gh，输出作为工具返回进入下一次请求，再决定确认还是修改；知道命令用法不能代替查询远端状态。</p><span class=\"p-back-to\">回看：查询怎样支持下一步</span></div></div><div class=\"p-qrow\" data-reveal=\"1\"><span class=\"p-n\">2</span><div><h3>Pages 设置已正确，能据此判断刚才那次推送已部署成功吗？</h3><p class=\"x-answer\">还需要取得对应这次提交的运行结果，按需要读 job 和日志。这些返回支持部署判断；页面是否可用还要在浏览器里检查。</p><span class=\"p-back-to\">回看：取得这次部署结果</span></div></div><div class=\"p-qrow\" data-reveal=\"2\"><span class=\"p-n\">3</span><div><h3>Codex 查到需要修改 Pages，在哪一步由人决定是否执行？</h3><p class=\"x-answer\">本章环境在批准框核对命令、理由、目标仓库与修改范围后批准。记录能看到申请和执行后的返回，看不到点击同意；推送由人执行。</p><span class=\"p-back-to\">回看：查询怎样支持下一步</span></div></div></div>",
      "steps": [
        "还要查什么",
        "还缺什么结果",
        "谁决定执行"
      ],
      "script": [
        "【操作提示｜停留课件 p51b 第 1 步，读题后提示暂停，留出停顿，再讲参考判断；不切窗口】\n\n第一题，本地部署配置已经写好，Codex 还需要查询 Pages 的什么信息，怎样查？大家可以暂停一下，想好判断和依据，再继续。\n\n要查的是 GitHub 上的 Pages 来源是否就绪。Codex 通过 exec 运行 gh，查询的输出进入下一次请求，再根据这个状态决定是否修改。",
        "【操作提示｜推进课件 p51b 第 2 步，读题后留停顿，再讲参考判断，不切窗口】\n\n第二题，Pages 设置已经正确，能据此判断刚才那次推送已经部署成功吗？先暂停想一下。\n\n还要取得对应这次提交的运行结果，按需要读各个 job 和日志。部署成功以后，再到浏览器里检查页面是否可用。",
        "【操作提示｜推进课件 p51b 第 3 步，读题后留停顿，再讲参考判断，不切窗口】\n\n第三题，Codex 查到需要修改 Pages，在哪一步由我们决定是否执行？大家也先暂停判断一下。\n\n在我们这套课程环境的批准框里，核对命令、理由、目标仓库和修改范围，再决定放不放行。请求记录里能看到申请和执行后的返回，看不到我们点击同意的动作。推送由我们自己执行。"
      ],
      "teaching": [],
      "source": "index.html#p51b",
      "seconds": 90
    },
    {
      "id": "p52",
      "segment": "发布与验收",
      "label": "本节小结",
      "title": "依据实际状态，完成一次发布",
      "lead": "从可公开的主页和已审配置开始，查询 Pages 现状、按需要设置并复查；人推送后，取得对应提交的部署结果，再在浏览器确认页面可用，保存发布 tag。gh 经 exec 运行，返回进入 context 支持下一步判断；执行后要取得新的结果，修改与公开由人确认。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>执行之前</h3><p>查当前设置，依据返回决定是否修改</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><h3>执行之后</h3><p>查这次结果，打开页面确认可用</p></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:18px\">工具返回进入 context：<b>支持判断，指导下一步行动</b></div>",
      "steps": [
        "从准备到交付",
        "Context 怎样推动发布"
      ],
      "script": [
        "【操作提示｜停留课件 p52 第 1 步，指执行之前和执行之后两张卡片，不切窗口】\n\n这一节，我们把本地的主页发布成了公开地址。执行之前，看清要公开的内容、审过配置，再查询 Pages 的来源。执行之后，取得这次提交的部署结果，打开页面检查，最后留下发布 tag。",
        "【操作提示｜推进课件 p52 第 2 步，指工具返回与 context 的关系，不切窗口】\n\n回到 Context，刚才这些远端状态，都是工具查回来以后，才进入请求里的。模型根据返回判断下一步，执行以后再查询新的结果。我们看请求里的“工具返回”，也就能找到它这一步判断的依据。"
      ],
      "teaching": [],
      "source": "index.html#p52",
      "seconds": 60
    }
  ],
  "segments": [
    {
      "label": "准备发布",
      "seconds": 180
    },
    {
      "label": "部署配置",
      "seconds": 210
    },
    {
      "label": "查询设置",
      "seconds": 180
    },
    {
      "label": "查询部署",
      "seconds": 150
    },
    {
      "label": "发布与验收",
      "seconds": 330
    }
  ]
};

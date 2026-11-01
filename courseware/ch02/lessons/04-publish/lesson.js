window.lesson = {
  "title": "发布上线，看 Codex 怎么用 gh",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.04",
  "summary": "从 homepage-v2 发布到公开 URL：确认可公开、审查部署配置，Codex 用 gh 查询 Pages、依据返回完成设置并复查；人推送后，再取得对应提交的部署结果，最后在浏览器确认页面可用。",
  "prep": [
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "定好讲师个人空仓库的名字和 Pages 地址，p47 Prompt 里的 <我的仓库名>、<用户名> 先替换好。",
    "Chrome 备好“GitHub 仓库”标签页，GitHub 已登录，账号资料、通知不入镜。",
    "作者邮箱、gh 输出里的账号名和 html_url 上屏前检查；真实邮箱不出镜，画面上的作者用占位。",
    "gh 用较新的稳定版；安装和登录由本人完成，不在课上展开安装教程。p48b 两条官方公告录前打开备用，不要求现场访问。",
    "p49b 推送后马上发：运行可能还没结束，先讲 p50 的三项检查也可以，回来再看它读到的结果。"
  ],
  "scenes": [
    {
      "id": "p43",
      "segment": "公开之前",
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
        "【操作提示｜停留课件 p43 第 1 步，指章节地图的 2.4，不切窗口】\n\n上一节我们参考 Hyperspace 调整了主页风格，让 Codex 提交了 homepage-v2。内容和样子已经在本地看过了。现在要让别人也能通过一个公开地址打开它，并确认页面真的能用。",
        "【操作提示｜推进第 2 步，指两张卡片】\n\n发布之前，我们先判断这份项目能不能公开，审过部署配置。然后查清 GitHub 上的设置，推送以后再查这次部署的结果，最后打开页面检查。",
        "【操作提示｜推进第 3 步，指锚点图的工具与工具返回】\n\n还是本章这一列方块。接下来我们带着一个问题往下走：为了完成下一步，Codex 现在需要知道什么？这些信息从哪里来？"
      ],
      "teaching": [],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "公开之前",
      "label": "推到哪里",
      "title": "推到哪里？仓库是公开的吗？",
      "lead": "前面只把课程模板克隆到本地。发布前先在自己的 GitHub 账号下新建空仓库，核对 origin 指向自己的仓库；此时不推送。再看仓库公开范围，检查待公开内容以后才决定是否公开。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到 GitHub</h3><p>新建或打开自己的空仓库</p><span class=\"p-env\">Public</span><span class=\"p-env\">Private</span></div><ol class=\"p-watch\"><li data-reveal=\"1\">仓库名旁的标记<small>Public 还是 Private</small></li><li data-reveal=\"1\">远端已有什么<small>首次发布前应为空仓库</small></li><li class=\"is-miss\" data-reveal=\"2\">现在先不改<small>查清待公开内容后再决定</small></li></ol></div>",
      "steps": [
        "建立个人远端",
        "核对目标与历史",
        "先不公开"
      ],
      "script": [
        "【操作提示｜现场｜课件 p44 第 1 步 → Chrome“GitHub 仓库”标签页；在本人账号下新建空仓库，暂选 Private，不初始化 README、.gitignore 或许可证；账号资料不入镜。已有个人空仓库则直接打开】\n\n前面克隆的是课程模板，一直在本地练习。现在先建立自己的远端仓库，暂时设为私有，不初始化文件。后面把检查过的源码和提交推到这里。",
        "【操作提示｜推进第 2 步 → Terminal 项目根目录运行 git remote -v，按展开步骤修改 origin，再核对 fetch 与 push 地址；远端已有内容时先停，不覆盖、不强推】\n\n把 origin 从课程模板改成自己的仓库地址，再核对取回和推送的目标都属于自己的账号。这里仅仅改了本地连接地址，还没有推送。首次发布用空仓库，已经有内容就先查清来源和历史。",
        "【操作提示｜回课件推进第 3 步；暂不改仓库可见性】\n\n这条免费账号的 Pages 发布路径需要公开仓库。现在先不改，等我们看清待公开的内容，再决定是否继续。"
      ],
      "repro": {
        "label": "发布前：建立个人远端",
        "steps": [
          {
            "text": "在自己的 GitHub 账号下新建空仓库，暂选 Private；不初始化 README、.gitignore 或许可证。已有远端包含内容时先核对来源和历史，不覆盖、不强推。",
            "code": ""
          },
          {
            "text": "复制新仓库的 HTTPS 地址，在练习项目根目录先查看原来的 origin。",
            "code": "git remote -v"
          },
          {
            "text": "把命令中的“你自己的仓库地址”替换为刚复制的地址。这里只改本地 origin 的目标，不推送、不改变文件或提交。",
            "code": "git remote set-url origin 你自己的仓库地址\ngit remote -v"
          },
          {
            "text": "核对 origin 的 fetch、push 地址都属于自己的仓库，GitHub 页面没有已有提交。原来的课程模板只用来取得起始材料。",
            "code": ""
          }
        ],
        "note": ""
      },
      "teaching": [],
      "source": "index.html#p44",
      "seconds": 90
    },
    {
      "id": "p45",
      "segment": "推送前检查",
      "label": "即将公开的历史",
      "title": "列出即将公开的提交、文件和作者",
      "lead": "第一次推到个人空仓库，会带上当前分支的完整历史。用 HEAD 检查提交、实际改动和作者信息，包括后来删除的文件与个人资料。文件名只能帮助定位，能不能公开还要看内容；命令与长输出的查看方法在展开步骤里。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git log --stat HEAD\ngit log -p HEAD\ngit log --format=&#x27;%an &lt;%ae&gt;&#x27; HEAD | sort -u\"><div class=\"dim\">$ git log --stat HEAD</div><div>homepage-v2: 参考 Hyperspace 调整主页风格 <span class=\"dim\">· 样式与页面 4 个文件</span></div><div>homepage-v1: 放进个人信息、经历和项目</div><div class=\"dim\">  profile.md · AGENTS.md · src/App.tsx · src/index.css · index.html</div><div class=\"dim\">  …… 再往下是课程模板带来的提交</div><div class=\"dim\">$ git log -p HEAD</div><div class=\"dim\">$ git log --format='%an &lt;%ae&gt;' HEAD | sort -u</div><div>示例同学 &lt;你的邮箱&gt;<span class=\"dim\"> · </span>课程模板的作者 &lt;……&gt;</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>课程模板带来的提交</h3><p>作者是别人，克隆时就在历史里</p></div><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>profile.md 和页面</h3><p>关于具体的人的事实</p></div></div><p class=\"source-note\">提交说明和文件取自讲师排练的项目（上一节结束时的 homepage-v2），作者为占位；实际检查自己当前分支的完整历史</p>",
      "steps": [
        "列出提交与作者",
        "作者与模板提交",
        "个人内容"
      ],
      "script": [
        "【操作提示｜现场｜p45 第 1 步 → Terminal 运行本页展开的三条历史检查命令；邮箱录前已离屏核对，真实邮箱不出镜；不使用 origin/main..HEAD 限定范围】\n\n第一次推到个人空仓库，会带上当前分支的完整历史。检查范围是 HEAD，包括自己的改动和课程模板带来的提交。先看每个提交动过哪些文件，再读实际改动；后来删掉的文件，也可能还在早先的提交里。命令放在展开步骤里。",
        "【操作提示｜回课件第 2 步，指作者与模板提交，不念真实邮箱】\n\n作者的姓名和邮箱也记在每个提交里。模板带来的作者信息原本就在公开模板中，我们自己提交时用的邮箱，也要确认是否愿意公开。",
        "【操作提示｜推进第 3 步，指 profile.md；需要时在 git log -p 中定位该文件。长输出可按展开命令排除锁文件，二进制文件另开；不逐行讲依赖清单，结束回课件】\n\n还有我们自己的 profile.md，以及页面上的资料，都要一起看。文件名只能帮助定位，能不能公开要读内容。请暂停视频，检查自己的完整历史，接下来按同一份清单判断。"
      ],
      "repro": {
        "label": "推送前：检查完整历史",
        "steps": [
          {
            "text": "在练习项目根目录运行。用 --stat 查看提交和文件，再用 -p 查看每次改动；作者命令列出当前分支历史里的姓名与邮箱。",
            "code": "git log --stat HEAD\ngit log -p HEAD\ngit log --format='%an <%ae>' HEAD | sort -u"
          },
          {
            "text": "-p 的输出太长时，先排除依赖锁文件读其余改动；锁文件里是依赖名、版本和下载地址，另外扫一眼即可。",
            "code": "git log -p HEAD -- . ':!package-lock.json'"
          },
          {
            "text": "已有远端提交时，先核对远端历史与当前分支，再决定如何继续；不要强推绕过历史冲突。",
            "code": ""
          }
        ],
        "note": ""
      },
      "teaching": [],
      "source": "index.html#p45",
      "seconds": 90
    },
    {
      "id": "p46",
      "segment": "推送前检查",
      "label": "能让所有人看到吗",
      "title": "这些内容，可以让所有人看到吗？",
      "lead": "由人判断源码、完整历史和截图能否公开：有没有 secret、未经同意的他人信息、不愿公开的个人信息；首屏身份是否正确，参考素材的出处是否保留。作者邮箱也在判断范围内。发现问题先停下；改邮箱只影响以后的提交，历史处理帮助见本页链接。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr)\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">每个提交里都有</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.6\">Author: 示例同学<br>&lt;<b>你的邮箱</b>&gt;</p><p class=\"p-sub\">不想公开：先停；换 noreply 只管以后的提交</p></div><ul class=\"p-checks\" style=\"gap:6px\"><li class=\"is-no\" data-reveal=\"1\">有没有 secret<small>API 密钥、令牌、配置文件</small></li><li class=\"is-no\" data-reveal=\"1\">有没有未经同意的他人信息<small>别人的姓名、联系方式、经历、照片</small></li><li class=\"is-no\" data-reveal=\"1\">截图里有没有隐私<small>桌面、通知、浏览器标签</small></li><li data-reveal=\"2\">首屏的名字和简介，是自己的吗<small>还是课程示例里的“示例同学”</small></li><li data-reveal=\"2\">本人愿意公开<small>包括作者邮箱</small></li></ul></div><div class=\"p-bar\" data-reveal=\"3\">有一项不行，<b>先停下，不推送</b></div>",
      "refs": [
        {
          "kind": "read",
          "group": "GitHub 官方文档（改写历史不在本课范围，做之前人工复核）",
          "text": "设置提交邮箱",
          "url": "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address"
        },
        {
          "kind": "read",
          "group": "GitHub 官方文档（改写历史不在本课范围，做之前人工复核）",
          "text": "从仓库历史中删除敏感数据",
          "url": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository"
        }
      ],
      "steps": [
        "作者邮箱",
        "三项排查",
        "是不是自己的",
        "停止条件"
      ],
      "script": [
        "【操作提示｜停留 p46 第 1 步，指 Author；不现场改写历史，帮助链接留在阅读模式】\n\n作者邮箱也在公开范围里。不愿意公开就先停下。改 Git 配置只影响以后的提交，已有历史怎样处理，帮助链接在这一页，不在这里展开。",
        "【操作提示｜推进第 2 步，指前三项；发现 secret 立刻停录处理，不展示原值】\n\n看源码、完整历史和截图：有没有密钥或令牌，有没有未经同意的他人信息，有没有不想公开的个人资料。判断由我们自己来做。",
        "【操作提示｜推进第 3 步，指身份与公开意愿；补看页脚的参考出处】\n\n首屏的名字和简介要是自己的，参考素材要求保留的出处也要还在。最后确认，这些内容确实是本人愿意公开的。",
        "【操作提示｜推进第 4 步；实际发现问题则暂停后续发布，不预写“已通过”】\n\n有一项不行，就先处理，不推送。确认可以公开，我们才继续准备部署。"
      ],
      "teaching": [],
      "source": "index.html#p46",
      "seconds": 120
    },
    {
      "id": "p47",
      "segment": "部署配置",
      "layout": "prompt-scene",
      "prompt": "Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。\nContext：仓库名是 <我的仓库名>，\nPages 地址是 https://<用户名>.github.io/<仓库名>/。\nConstraints：只新增工作流文件和必要的 Vite 配置；\n不推送，这一轮不改仓库设置；说明每个权限为什么需要。\nDone when：本地 npm run build 成功；我能逐项解释工作流做了什么。",
      "label": "让 Codex 写部署工作流",
      "title": "让 Codex 写部署工作流，但不让它推送",
      "lead": "部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。这一轮 Codex 只写文件；仓库设置留到推送前单独一步，推送始终由我们来做。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>写清仓库名和地址</b><small>别让它猜，也别抄讲师的</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>不推送，这轮不改设置</b><small>设置单独一步，推送留给我们</small></span></li><li data-reveal=\"2\"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>",
      "steps": [
        "仓库名",
        "不推送",
        "解释权限"
      ],
      "script": [
        "【操作提示｜停留 p47 第 1 步，指部署 Prompt 的 Context；仓库名和地址复制前替换成本人值】\n\n部署要准备两样东西。一个是 GitHub Actions 工作流，让 GitHub 在自己的机器上安装依赖、构建和发布。另一个是 Vite 的 base，让资源路径对上发布地址。把自己的仓库名和地址告诉 Codex，不能让它猜。",
        "【操作提示｜推进第 2 步，指 Constraints】\n\n这一轮只新增工作流和必要的 Vite 配置，不推送，也不改远端设置。先把文件准备好，后面逐项审。",
        "【操作提示｜现场｜推进第 3 步 → Terminal 的 Codex 会话先 /clear；已退出则 agent-lab codex --tap 启动。发替换好的 DEPLOY_PROMPT。超出范围的操作不批准；生成需等待时先讲 p48 的排练文件，末尾再看现场结果】\n\n还要它解释每个权限为什么需要。这一轮开始新的部署任务，先清空前面改风格的对话，再发请求。请暂停视频，把仓库名和地址换成自己的。生成的配置我们按下一页四项审查。"
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
      "lead": "四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是准备推送的分支。有一项不对就不推送，让 Codex 改。左侧是排练这次的最终文件：第一版用的 action 版本偏旧，我们追问后它升到了最新大版本。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:34px\"><div class=\"p-fn\">vite.config.ts · .github/workflows/deploy-pages.yml（摘录）</div><div class=\"p-ln\"><i>1</i><code>base: <span class=\"s\">'/ch02-pages-lab-20261025-claude/'</span>,</code></div><div class=\"p-ln\"><i>2</i><code>on:</code></div><div class=\"p-ln\"><i>3</i><code>  push:</code></div><div class=\"p-ln\"><i>4</i><code>    branches: [main]</code></div><div class=\"p-ln\"><i>5</i><code>permissions:</code></div><div class=\"p-ln\"><i>6</i><code>  contents: read</code></div><div class=\"p-ln\"><i>7</i><code>  pages: write</code></div><div class=\"p-ln\"><i>8</i><code>  id-token: write</code></div><div class=\"p-ln\"><i>9</i><code><span class=\"c\"># … npm ci → build → configure-pages → 上传 dist → deploy</span></code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li><li data-reveal=\"1\"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li><li data-reveal=\"2\"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>触发分支</b><small>等于准备推送的分支</small></span></li></ol></div><p class=\"source-note\">左侧摘自 Codex 按 p47 的 Prompt 生成、追问后升级 action 版本的文件；仓库名是排练用的临时仓库。2026-10-25 排练：从 homepage-v2 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash，Agent Lab。我们的文件写法会不同，按实际审</p>",
      "steps": [
        "base",
        "资源路径",
        "权限",
        "触发分支"
      ],
      "script": [
        "【操作提示｜回放｜停留 p48 第 1 步，指左侧 base；现场生成仍在进行时讲排练文件，不等待同样结果】\n\n左边是已有排练里最终生成的配置。第一项看 base，要和自己的发布路径对得上，这次是斜杠、仓库名、斜杠。不要照抄示例仓库名。",
        "【操作提示｜推进第 2 步，指资源路径】\n\n第二项，本地运行 npm run build，再看 dist/index.html 里引用的 CSS 和 JavaScript 路径，确认 base 已经生效。",
        "【操作提示｜推进第 3 步，指 permissions 三行】\n\n第三项看权限。这里分别是读仓库内容、写 Pages、获取部署身份。多出来的权限要问清用途，再决定是否接受。",
        "【操作提示｜推进第 4 步 → VS Code 看本次 vite.config.ts 和工作流，Terminal 跑 npm run build、核对当前分支和 dist 资源路径。有问题在原范围内修改再审；只在解释可疑时追问依据，不展开版本升级。结束回 p49】\n\n第四项看触发分支，和准备推送的分支是否一致。四项有问题就让它改，改完再审。\n\n【切换｜VS Code · 这次生成的配置】\n\n现在看我们自己这次的文件。写法可以不同，还是按这四项核对。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p49",
      "segment": "部署配置",
      "label": "提交已审配置",
      "title": "提交已审配置，确认最终公开内容",
      "lead": "四项审查通过后，让 Codex 提交配置，核对文件和提交说明。再检查最终要推送的历史；需要公开仓库时，此时再改可见性。本地配置准备好了，GitHub 上的 Pages 来源是否就绪，还需要查询。",
      "html": "<div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><h3>提交已经审过的配置</h3><p>vite.config.ts 与工作流文件；核对提交说明</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\" style=\"margin-top:16px\"><h3>确认最终要公开的内容</h3><p>包括刚提交的配置；需要时再把仓库改为公开</p></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:16px\">本地已准备好，<b>GitHub 上的 Pages 来源呢？</b></div>",
      "steps": [
        "提交配置",
        "最终公开判断"
      ],
      "script": [
        "【操作提示｜现场｜p49 第 1 步 → 同一 Codex 会话发送本页 COMMIT_PROMPT；提交申请核对两个文件与说明，只批本次。沙箱失败后有提权申请时按实际处理，不预设必然失败】\n\n四项审查通过以后，让 Codex 提交这两处改动。批准的时候，看清文件和提交说明。",
        "【操作提示｜推进第 2 步 → Terminal 重跑历史检查，包含新提交；需要时在 Chrome Settings 改为公开。发现问题先停，尚不推送，结束回 p48b】\n\n提交之后，再看一遍最终要公开的历史，包括刚提交的工作流。需要公开仓库的话，现在再改。\n\n本地已经准备好怎么部署了。GitHub 上的 Pages 来源设置是不是也准备好了？这还要查。"
      ],
      "repro": {
        "label": "提交与最终检查",
        "steps": [
          {
            "text": "在写配置的 Codex 会话里发送；批准提交时核对文件和说明",
            "code": "我审过了，接受这两处改动。先列出 git status 给我看，再提交 vite.config.ts 和工作流文件；\n提交说明第一行写 deploy: 用 GitHub Actions 发布到 Pages，正文写改了哪些文件。"
          },
          {
            "text": "提交后重新核对完整历史；有问题先停，不推送",
            "code": "git log --stat HEAD\ngit log -p HEAD\ngit log --format='%an <%ae>' HEAD | sort -u"
          }
        ],
        "note": ""
      },
      "teaching": [],
      "source": "index.html#p49",
      "seconds": 60
    },
    {
      "id": "p48b",
      "segment": "远端设置",
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
        "【操作提示｜停留 p48b 第 1 步，指 git 与 gh 的两张卡片；不现场安装或登录】\n\n我们可以在网页里查，也可以用 GitHub 官方的命令行工具，GitHub CLI，命令叫 gh。前面用的 git 管版本记录和提交的推送、拉取。gh 把 GitHub 平台上的功能带到终端，让我们和 Codex 都能用命令访问。",
        "【操作提示｜推进第 2 步，指两个时间点；官方出处在阅读模式，不强制现场开网页】\n\n这些能力是逐步加进来的。二零二零年九月的 一点零版本，已经有通用的 API 调用；二零二一年四月的 一点九版本，又加入了 Actions 的专用命令，可以查运行状态和日志。建议用较新的稳定版，旧版本可能还没有我们演示的命令或参数。",
        "【操作提示｜现场｜推进第 3 步 → Terminal 同一 Codex 会话发送本页 SOURCE_PROMPT，开始查询；出现批准框先核对命令、理由和目标仓库，只批本次，修改核对范围。gh 未登录或找别处凭据时拒绝，由本人离屏处理；等待时回 p49a 讲已有记录。页面只展示两个已核实时间点，不追加功能史】\n\n现在，通过专用命令和通用 API 入口，已经能完成许多常见 GitHub 操作，比如仓库、Issue、PR，以及这次的 Pages 设置和部署查询。API 是平台给程序的接口，CLI 是命令行入口，SDK 是供代码使用的工具包。平台逐步开放更多功能，人和 coding agent 就能通过工具完成更多操作，再由人审查和确认。\n\n【切换｜Terminal · Codex 会话】\n\n我们这次先让它查 Pages 的当前状态，按需要把来源设为 GitHub Actions，改完再查一次。发送展开步骤里的请求，每次申请先看清命令和目标。"
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
      "segment": "远端设置",
      "label": "查询怎样支持下一步",
      "title": "查到当前状态，才知道下一步做什么",
      "lead": "沿排练记录看查询怎样支持下一步判断：Codex 经 exec 运行本机 gh，输出作为工具返回进入下一次请求。排练这次查到 404，于是申请 POST 创建，再复查到 build_type: workflow；已有正确设置时可以直接确认，不要求每次都出现 404。在本章排练环境里，gh 联网要申请到沙箱外运行，由人核对命令、理由和对象后批准。批准动作不在请求记录里。最后对照现场这次的实际查询与返回。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;gh-tools&quot;, &quot;gh-call&quot;, &quot;gh-result&quot;, &quot;post-call&quot;, &quot;post-result&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"gh-tools\" aria-pressed=\"true\"><b>工具列表</b><span>里面没有 gh，只有 exec 这类通用工具</span></button><button type=\"button\" data-ev-key=\"gh-call\" aria-pressed=\"false\"><b>完整命令</b><span>带着沙箱外标记和理由</span></button><button type=\"button\" data-ev-key=\"gh-result\" aria-pressed=\"false\"><b>工具返回</b><span>404：还没有站点</span></button><button type=\"button\" data-ev-key=\"post-call\" aria-pressed=\"false\"><b>据此创建</b><span>看到 404，改用 POST</span></button><button type=\"button\" data-ev-key=\"post-result\" aria-pressed=\"false\"><b>复查结果</b><span>build_type 是 workflow</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=gh-tools\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"gh-tools\" ><p class=\"p-ev-source\">10-25 排练 · 设置 Pages 来源时的请求</p><article><h3>请求里的工具（tools 字段）</h3><pre>exec\nwait\nrequest_user_input\ncollaboration\nweb_search</pre></article><article><h3>系统指令里提到 gh 的唯一一处（申请批准时 prefix_rule 的例子）</h3><pre>- [&quot;gh&quot;, &quot;pr&quot;, &quot;check&quot;]</pre></article></section><section data-ev-reading=\"gh-call\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 完整命令</p><article><h3>它发出的调用（exec 里的一段代码）</h3><pre>  cmd: &quot;echo &#x27;=== gh auth status (联网) ===&#x27;; gh auth status 2&gt;&amp;1; echo; echo &#x27;=== 环境变量里的 token(只看是否存在,不打印值) ===&#x27;; for v in GH_TOKEN GITHUB_TOKEN GH_ENTERPRISE_TOKEN; do if [ -n \\&quot;$(printenv $v)\\&quot; ]; then echo \\&quot;$v: 已设置\\&quot;; else echo \\&quot;$v: 未设置\\&quot;; fi; done; echo; echo &#x27;=== GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;&quot;,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态？&quot;,</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({\n  cmd: &quot;echo &#x27;=== gh auth status (联网) ===&#x27;; gh auth status 2&gt;&amp;1; echo; echo &#x27;=== 环境变量里的 token(只看是否存在,不打印值) ===&#x27;; for v in GH_TOKEN GITHUB_TOKEN GH_ENTERPRISE_TOKEN; do if [ -n \\&quot;$(printenv $v)\\&quot; ]; then echo \\&quot;$v: 已设置\\&quot;; else echo \\&quot;$v: 未设置\\&quot;; fi; done; echo; echo &#x27;=== GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;&quot;,\n  workdir: &quot;[project]&quot;,\n  yield_time_ms: 30000,\n  max_output_tokens: 6000,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态？&quot;,\n  prefix_rule: [&quot;gh&quot;, &quot;api&quot;]\n});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"gh-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 工具返回</p><article><h3>下一次请求带上的返回</h3><pre>  ✓ Logged in to github.com account MiaoDX (keyring)\n=== GET pages ===\n{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)</pre><details><summary>展开该项完整原文</summary><pre>Script completed\nWall time 0.0 seconds\nOutput:\n\n=== gh auth status (联网) ===\ngithub.com\n  ✓ Logged in to github.com account MiaoDX (keyring)\n  - Active account: true\n  - Git operations protocol: https\n  - Token: gh*_[token-masked]\n  - Token scopes: &#x27;gist&#x27;, &#x27;read:org&#x27;, &#x27;repo&#x27;, &#x27;workflow&#x27;\n\n=== 环境变量里的 token(只看是否存在,不打印值) ===\nGH_TOKEN: 未设置\nGITHUB_TOKEN: 未设置\nGH_ENTERPRISE_TOKEN: 未设置\n\n=== GET pages ===\n{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)\nEXIT=1\n</pre></details></article></section><section data-ev-reading=\"post-call\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 据此创建</p><article><h3>它的回答</h3><pre>- `GET /repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages` → **HTTP 404 Not Found**，说明**这个仓库还没有 Pages 站点**\n- 所以走**创建**路径（POST），不是 PUT 修改\ngh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow</pre><details><summary>展开该项完整原文</summary><pre>查清楚了：\n\n- `gh` 已登录，token 有效（scopes: `repo` / `workflow` / `read:org` / `gist`）——刚才那句 &quot;token 无效&quot; 是沙箱没网导致校验失败，不是真的坏了\n- `GET /repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages` → **HTTP 404 Not Found**，说明**这个仓库还没有 Pages 站点**\n- 所以走**创建**路径（POST），不是 PUT 修改\n\n要执行的两条命令：\n\n```bash\n# 1) 创建 Pages 站点，build_type=workflow（即 Source 选 &quot;GitHub Actions&quot;）\ngh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow\n\n# 2) 复查\ngh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages\n```</pre></details></article><article><h3>接着发出的调用，又申请到沙箱外</h3><pre>  cmd: &quot;echo &#x27;=== POST 创建 Pages 站点 ===&#x27;; gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 复查 GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 仓库默认分支 ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude --jq &#x27;.default_branch&#x27; 2&gt;&amp;1&quot;,\n  justification: &quot;是否允许 gh 调用 GitHub API 创建该仓库的 Pages 站点并设置 build_type=workflow？&quot;,</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({\n  cmd: &quot;echo &#x27;=== POST 创建 Pages 站点 ===&#x27;; gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 复查 GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 仓库默认分支 ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude --jq &#x27;.default_branch&#x27; 2&gt;&amp;1&quot;,\n  workdir: &quot;[project]&quot;,\n  yield_time_ms: 60000,\n  max_output_tokens: 6000,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 调用 GitHub API 创建该仓库的 Pages 站点并设置 build_type=workflow？&quot;,\n  prefix_rule: [&quot;gh&quot;, &quot;api&quot;]\n});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"post-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 复查结果</p><article><h3>创建与复查的返回（摘出两个字段，完整 JSON 在原始记录）</h3><pre>=== POST 创建 Pages 站点 ===\nhtml_url: https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/\nbuild_type: workflow\n\n=== 复查 GET pages ===\nhtml_url: https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/\nbuild_type: workflow</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "工具列表",
        "完整命令",
        "工具返回",
        "据此创建",
        "复查"
      ],
      "script": [
        "【操作提示｜回放｜停留 p49a 第 1 步，指工具列表；现场任务进行时先讲 10-25 固定记录，不要求重现同样返回】\n\n查询已经发出。先用排练记录看清它是怎么查的：请求工具里没有单独的 gh，Codex 是通过 exec 运行本机的命令。这和上一节通过命令取参考网站的代码，用的是同一种调用方式。知道怎样写命令，还不能代替查询现在的状态。",
        "【操作提示｜推进第 2 步，指 gh 命令、sandbox_permissions、justification；对应排练环境说明，不泛化到所有配置】\n\n这里是一条完整的 gh 查询命令，带着到沙箱外运行的标记和理由。在我们排练的课程环境里，gh 联网需要批准。我们核对它要访问什么，才允许执行；修改类命令还要看清方法和范围。",
        "【操作提示｜推进第 3 步，指下一次请求中的 GET 返回】\n\n批准以后，gh 和 GitHub 通信，输出作为工具返回进入下一次请求。排练这次查到的是四零四，Pages 站点还不存在。模型现在有了当前状态，才有依据决定下一步。",
        "【操作提示｜推进第 4 步，指据此创建的回答与 POST 调用；不用“必然 404”过渡】\n\n所以这次它按我们请求里写的，用 POST 创建，再申请执行。要是已经有站点，就根据实际来源决定是否修改；已经正确，也可以直接确认。我们看的是依据返回作判断，不要求每次都走相同分支。它列出命令后会继续申请执行，真正决定是否放行的地方是批准框。",
        "【操作提示｜现场回看｜推进第 5 步，指 workflow；再切 Terminal claude-tap 现场查询的工具与返回，不重发任务。设置完成后 Chrome Settings → Pages 刷新核对；html_url 和账号上屏先检查。未结束则按实际等候，不套排练结论，确认后回 p49c】\n\n创建之后还要复查。这次返回的 build_type 是 workflow，来源已经设成 GitHub Actions。记录里能看到申请和执行后的返回，看不到我们点击同意的动作。\n\n【切换｜Terminal · claude-tap · 现场这次的记录】\n\n现在对照现场这次：查到了什么，接着做了什么，复查是否生效。最后我们也到网页里刷新确认来源。"
      ],
      "teaching": [],
      "source": "index.html#p49a",
      "seconds": 150
    },
    {
      "id": "p49c",
      "segment": "发布与验收",
      "label": "由人推送",
      "title": "来源已确认，由我们推送",
      "lead": "Pages 来源已确认，待公开内容和配置也已审过。由我们把当前分支推到自己的 origin，触发 GitHub 上的部署。接下来要取得这次提交的运行结果，不能用之前的设置查询代替。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git push -u origin HEAD\"><div class=\"dim\">$ git push -u origin HEAD</div></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"0\" style=\"margin-top:18px\"><h3>部署在 GitHub 的机器上运行</h3><p>这次提交跑得怎么样？需要取得执行后的新状态</p></div>",
      "steps": [
        "推送并触发部署"
      ],
      "script": [
        "【操作提示｜现场｜停留 p49c 第 1 步 → Terminal 项目根目录，由本人运行 git remote -v 核对目标，再 git push -u origin HEAD；若空仓库设置失败已按备用分支推送则不重复。工作流推送被拒时离屏核对 workflow 权限。完成回 p49b】\n\n来源确认了，待公开内容和配置也都审过了。现在由我们自己推送，命令是 git push，后面这些参数在页面上可以复制。\n\n【切换｜Terminal · 项目根目录】\n\n这一步把当前分支推到自己的 origin，并触发 GitHub 上的部署。接下来还要查，这次提交到底跑得怎么样。"
      ],
      "repro": {
        "label": "推送命令",
        "steps": [
          {
            "text": "由本人在项目根目录运行，核对目标是自己的仓库",
            "code": "git remote -v\ngit push -u origin HEAD"
          }
        ],
        "note": "空仓库设置来源失败时，可先推送已审内容，再完成设置并人工确认重跑部署；已推送则不重复执行。"
      },
      "teaching": [],
      "source": "index.html#p49c",
      "seconds": 30
    },
    {
      "id": "p49b",
      "segment": "发布与验收",
      "label": "取得这次部署结果",
      "title": "取得对应这次提交的部署结果",
      "lead": "推送后让 Codex 用 gh 找到对应这次提交的运行，查询状态，再按需要读各个 job 和日志。运行中就等后再查，失败则依据失败步骤定位，成功再检查页面。结果作为工具返回进入请求；日志存成文件以后，实际读取的部分才进入 context。下方是 2026-10-25 新会话补跑的真实节选，当时运行已经结束，不是刚才设置 Pages 的同一次会话。日志里的警告与批准次数只说明这次运行。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-pair\" style=\"grid-template-columns:minmax(0,.62fr) minmax(0,1.38fr);gap:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"us\">我们的请求</span><h3>只看，不改</h3><p>成没成功、每个 job、警告原文；不重跑、不改文件</p></div><div class=\"p-term\" data-reveal=\"1\" style=\"font-size:15px\"><div>$ gh run list --limit 20 --json databaseId,name,displayTitle,event,status,conclusion,headSha,createdAt,url</div><div>$ gh run view 40183596663 --json jobs,conclusion,status,headSha,event,createdAt,updatedAt,url</div><div>$ gh run view 40183596663 --log 2&gt;&amp;1 | tee /tmp/run-40183596663.log | wc -l</div></div></div><div class=\"p-term\" data-reveal=\"2\" style=\"margin-top:8px;font-size:15px\"><div class=\"dim\">它带回来的（回答节选）</div><div>| Build (121139603221) | ✅ success | 21s |</div><div>| Deploy (121139684344) | ✅ success | 9s |</div><div>1 high severity vulnerability</div><div>(node:1943) [DEP0040] DeprecationWarning: The punycode module is deprecated. Please use a userland alternative instead.</div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:8px\">想再跑 npm audit：请求外的事，<b>在批准框说不</b></div><p class=\"source-note\">2026-10-25 补跑：同一个项目、新会话，运行已在推送后结束；共批 5 次、拒 1 次。日志里有哪些警告，每次不同</p>",
      "steps": [
        "只让它看",
        "它跑的 gh",
        "结果依据",
        "范围与现场结果"
      ],
      "script": [
        "【操作提示｜现场｜停留 p49b 第 1 步 → Terminal 同一 Codex 会话发送本页 GHRUN_PROMPT；只允许读取这次运行，不重跑、不改文件。发出后回课件讲补跑证据，不在启动请求前讲完所有步骤】\n\nPages 设置正确，还不能说明刚才那次推送已经部署成功。我们要取得执行之后的新状态，让 Codex 找到对应这次提交的运行，查结果，再按需要读各个 job 和日志。这一步只查看。\n\n【切换｜Terminal · Codex 会话】\n\n发送这一页展开步骤里的请求，再来看已有记录里它怎样取得这些信息。",
        "【操作提示｜回放｜推进第 2 步，指三条 gh 命令；说明是补跑的新会话，不能称为刚才连续会话】\n\n这里用的是二零二六年十月二十五日的补跑记录。它和 Pages 设置是同一个项目，但另开了新会话，部署当时已经结束。它先列运行，再看 job，最后取得日志。这几条命令都是原始记录里的节选。",
        "【操作提示｜推进第 3 步，指 headSha 字段及成功与警告的回答节选】\n\n查到的运行要对上这次提交，命令里的 headSha 就是提交标识。补跑这次两个 job 都成功，日志里还有警告。日志有三百四十多行，先存成文件，再筛选和分段读。实际读回来的内容才进入 context，不能因为文件在电脑上，就说整份日志已经在请求里了。",
        "【操作提示｜推进第 4 步，指拒绝 audit；随后 Terminal 看现场结果与对应提交，不预写成功。运行中则等待后查，可先讲 p50 检查办法；失败按实际日志定位。出现重跑、audit、改文件申请拒绝，设置正确不替代运行结果；结束回 p50】\n\n补跑这次它还申请跑 npm audit 查依赖漏洞，超出了只看部署的请求，我们拒绝了。\n\n【切换｜Terminal · 现场这次的部署结果】\n\n现在看现场这次，确认是不是刚推送的提交。还在运行就等后再查；失败就看失败步骤和日志；成功再继续检查页面。具体警告按这次的原文看，不套用补跑的结果。"
      ],
      "repro": {
        "label": "请求原文",
        "steps": [
          {
            "text": "推送以后，在同一个 Codex 会话里发送；每条 gh 命令弹出批准框时看清是读取这次运行，只批本次",
            "code": "我刚把当前分支推到了 origin。请用 GitHub CLI（gh）看这次推送触发的部署：运行有没有成功、每个 job 的结果，日志里有没有警告或错误，有就把原文摘给我。只查看，不重跑或触发部署，不改设置和文件。"
          }
        ],
        "note": "只读：它申请重跑部署、查依赖漏洞或改文件时拒绝。运行还没结束时，可以先做下一页的三项检查，再回来看它读到的结果。"
      },
      "teaching": [],
      "source": "index.html#p49b",
      "seconds": 120
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
        "【操作提示｜停留 p50 第 1 步，指排练的 Build、Deploy success；明确画面是旧排练，现场失败时不宣读通过】\n\n部署状态和日志回答的是：这次构建和发布有没有完成。页面能不能让别人正常使用，我们还要在浏览器里看。左边是排练那次的成功结果，接下来检查自己的页面。",
        "【操作提示｜现场｜推进第 2 步 → Chrome 新建未登录窗口打开本人的公开 URL，不用已登录 GitHub 窗口作唯一证据】\n\n第一项，用未登录窗口打开公开地址，看看别人能不能正常访问。",
        "【操作提示｜推进第 3 步 → 打开开发者工具 Network、刷新，检查 CSS、JS、图片请求】\n\n第二项，看 Network 面板，有没有四零四的资源。页面上的样式、脚本和图片都要正常加载。",
        "【操作提示｜推进第 4 步 → Network 勾 Disable cache 后刷新并核对；发现问题按实际问题继续定位，三项未过不打发布 tag。结束回 p51】\n\n第三项，停用缓存以后再刷新，确认仍然正常。三项都过，才算这次发布完成。"
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
      "lead": "给公开的版本打上 ch02-homepage-live，然后只推送这一个 tag。用 --tags 会把所有本地 tag 一并公开，包括练习时随手打的。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git tag ch02-homepage-live\"><div class=\"dim\">$ git tag ch02-homepage-live</div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:10px\" data-copy=\"git push origin ch02-homepage-live\"><div class=\"dim\">$ git push origin ch02-homepage-live</div><div class=\"ok\"> * [new tag] ch02-homepage-live -> ch02-homepage-live</div></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:14px\"><h3>不用 git push --tags</h3><p>它会把所有本地 tag 一起推上去</p></div>",
      "steps": [
        "打 tag",
        "只推送这一个",
        "为什么不用 --tags"
      ],
      "script": [
        "【操作提示｜现场｜p51 第 1 步 → Terminal 项目根目录，在验收通过的提交上 git tag ch02-homepage-live；tag 已存在则先核对，不覆盖】\n\n页面检查通过以后，给这个版本打上 ch02-homepage-live，留下可定位的发布版本。",
        "【操作提示｜推进第 2 步 → 本人执行 git push origin ch02-homepage-live；输出按实际，不修改旧证据】\n\n只推送这一个 tag，命令可以直接从页面复制。",
        "【操作提示｜回课件推进第 3 步】\n\n不用 git push --tags，它会把其他本地 tag 一起推上去，包括练习时随手打的那些。"
      ],
      "teaching": [],
      "source": "index.html#p51",
      "seconds": 90
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
        "【操作提示｜停留 p51b 第 1 步，读题后提示暂停，再口述判断；不切工具】\n\n第一题，本地配置已经写好，Codex 还需要查 Pages 的什么信息，怎样查？请暂停想一下。\n\n要查远端当前来源是否就绪。它通过 exec 运行 gh，返回进入下一次请求，才能根据当前状态判断是否修改。",
        "【操作提示｜推进第 2 步，读题、暂停，再讲判断】\n\n第二题，Pages 设置已经正确，能据此判断刚才那次推送已部署成功吗？\n\n还需要取得对应这次提交的运行结果，按需要看 job 和日志；页面是否可用，还要由人在浏览器里检查。",
        "【操作提示｜推进第 3 步，读题、暂停，再讲判断】\n\n第三题，查到需要修改 Pages，在哪一步由我们决定是否执行？\n\n在本章的批准框里，核对命令、理由、仓库和范围后再批准。请求记录能看到申请与返回，看不到点击同意；推送仍由我们自己执行。"
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
        "【操作提示｜停留 p52 第 1 步，指执行之前、执行之后两张卡片，不预告 2.5】\n\n这一节，我们从本地主页走到了公开地址。发布前确认可公开、审配置，查询远端来源再按需要设置；推送以后取得这次部署的结果，最后打开页面确认可用，留下发布 tag。",
        "【操作提示｜推进第 2 步，指工具返回与 context 的关系】\n\n回到 Context：工具取得的当前状态，作为返回进入请求，支持下一步判断；执行以后，还要取得新的结果来核对。这就是工具和 Context 怎样一起推动一次真实发布。"
      ],
      "teaching": [],
      "source": "index.html#p52",
      "seconds": 60
    }
  ],
  "segments": [
    {
      "label": "公开之前",
      "seconds": 180
    },
    {
      "label": "推送前检查",
      "seconds": 210
    },
    {
      "label": "部署配置",
      "seconds": 270
    },
    {
      "label": "远端设置",
      "seconds": 240
    },
    {
      "label": "发布与验收",
      "seconds": 510
    }
  ]
};

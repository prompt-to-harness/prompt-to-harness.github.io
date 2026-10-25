window.lesson = {
  "title": "发布上线，看 Codex 怎么用 gh",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.04",
  "summary": "从上一节的 homepage-v2 开始第一次推送：推送前看清即将公开的整段历史；Codex 写部署配置，用工具列表里没有的 gh 设置 Pages 来源、推送后读部署状态，每条命令由我们批准，推送由我们来做；最后用公开 URL 证明页面可用。",
  "prep": [
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "定好讲师个人空仓库的名字和 Pages 地址，p47 Prompt 里的 <我的仓库名>、<用户名> 先替换好。",
    "Chrome 备好“GitHub 仓库”标签页，GitHub 已登录，账号资料、通知不入镜。",
    "作者邮箱、gh 输出里的账号名和 html_url 上屏前检查；真实邮箱不出镜，画面上的作者用占位。",
    "p49b 推送后马上发：运行可能还没结束，先讲 p50 的三项检查也可以，回来再看它读到的结果。"
  ],
  "scenes": [
    {
      "id": "p43",
      "segment": "公开之前",
      "layout": "lesson-cover",
      "label": "这一节做哪几步",
      "title": "这一节要做哪几步？",
      "lead": "这是第一次推送：页面、源码和整段提交历史都会公开。发布时 Codex 要用一个工具列表里没有的工具：GitHub CLI（gh）。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>改风格</li><li class=\"is-now\"><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-flow\" style=\"--n:4;margin-top:12px\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-num\">1</span><h3>看清历史</h3><p>即将公开的提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">2</span><h3>审查配置</h3><p>Codex 写的部署工作流</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-num\">3</span><h3>设置与推送</h3><p>Codex 用 GitHub CLI（gh）改设置，我们来推送</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><span class=\"p-num\">4</span><h3>看部署、证明可用</h3><p>Codex 用 gh 读结果，我们查公开 URL</p></div></div><div style=\"margin-top:10px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">系统指令</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">规则</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具返回</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">新的 Prompt</div></div><div class=\"p-foot\">工具里没有 gh，它经 exec 在本机运行；GitHub 上的设置和部署状态，gh 查过才作为工具返回进来</div></div></div>",
      "steps": [
        "回到地图",
        "推送之前",
        "推送与之后"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向章节地图上的 2.4，不切工具窗口】\n\n上一节我们参考 Hyperspace 改了两轮风格，让 Codex 提交了 homepage-v2。到现在为止，所有提交都只在自己电脑上，tag 也是本地的。这一节要第一次推送到 GitHub，把页面发布出去。",
        "【操作提示｜推进第 2 步，留在课件，指向前两步；本页不打开 GitHub】\n\n一共四步。推送之前先做两件事：第一，看清即将公开的历史。推送以后公开的有三样：页面、当前的源码，还有每一次提交，包括某次提交里出现过、后来又删掉的文件。第二，审查 Codex 写的部署配置。",
        "【操作提示｜推进第 3 步，留在课件，指向后两步，再指下方的锚点图和底注；讲完进入 p44 再切 Chrome】\n\n第三步，Pages 的设置交给 Codex 用 GitHub CLI，也就是 gh 命令来改，每条命令由我们批准；推送由我们自己来做，推出去就收不回来。第四步，推送以后让 Codex 用 gh 看部署跑得怎么样，我们再在公开 URL 上检查页面真的能用。\n\n还是那一列方块。这一节第一次用到一个工具列表里没有的工具：gh。我们要看清两件事：它是怎样用上 gh 的；GitHub 上的设置和部署状态，本来不在这一列里，又是怎样进来的。"
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
        "【操作提示｜现场｜课件 p44 第 1 步 → Chrome“GitHub 仓库”标签页，在讲师自己的账号下新建空仓库，暂选 Private，不勾选 README、.gitignore 或许可证；账号资料不入镜。已有个人空仓库时直接打开，不重复创建。保留课件标签页，此时不推送】\n\n前面我们直接克隆了课程模板，一直在本地练习。现在要发布，先建立自己的远端仓库。在 GitHub 上新建一个空仓库，暂时设为私有，不初始化文件。我们已有源码和提交，后面会把检查过的这一份推过去。",
        "【操作提示｜推进第 2 步 → 复制个人空仓库的 HTTPS 地址；Terminal 在练习项目根目录运行 git remote -v，核对原来的 origin。按展开步骤执行 git remote set-url origin 个人仓库地址，再运行 git remote -v，核对 fetch 与 push 目标。回 GitHub 检查仓库为空；已有内容时停止并核对，不覆盖、不强推】\n\n刚克隆时，origin 指向课程模板。现在把它改成自己的仓库地址，再看一次，确认取回和推送的目标都属于自己的账号。这里只改本地连接地址，没有推送。\n\n再看 GitHub 上的仓库：公开还是私有，里面有没有已有内容。首次发布使用空仓库；如果已经有提交，就先查清来源和历史，不能当作空仓库直接覆盖。",
        "【操作提示｜回课件 p44 第 3 步；本页不进 Settings 改可见性。讲师仓库已是公开时，说明私有的同学到 p49 再改】\n\n免费账号用 GitHub Pages，仓库要是公开的，所以发布之前要改成公开。如果自己的仓库现在是私有的，先别急着改。看清楚即将公开的内容，再做决定。"
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
      "lead": "首次向个人空仓库推送时，当前分支的全部历史都会公开：我们自己的两个检查点，课程模板带来的提交，以及其中后来删掉的文件。检查每次提交改过的文件、实际内容和作者信息；不能只看当前目录，也不能只看自己新增的提交。排练这次，模板历史里有三个后来删掉的文件（BRIEF.md 等），推送后照样能看到；git log -p 有 8934 行，大半是 package-lock.json 的依赖清单，可以先排除它读其余约 3300 行，见本页展开步骤。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git log --stat HEAD\ngit log -p HEAD\ngit log --format=&#x27;%an &lt;%ae&gt;&#x27; HEAD | sort -u\"><div class=\"dim\">$ git log --stat HEAD</div><div>homepage-v2: 参考 Hyperspace 调整主页风格 <span class=\"dim\">· 样式与页面 4 个文件</span></div><div>homepage-v1: 放进个人信息、经历和项目</div><div class=\"dim\">  profile.md · AGENTS.md · src/App.tsx · src/index.css · index.html</div><div class=\"dim\">  …… 再往下是课程模板带来的提交</div><div class=\"dim\">$ git log -p HEAD</div><div class=\"dim\">$ git log --format='%an &lt;%ae&gt;' HEAD | sort -u</div><div>示例同学 &lt;你的邮箱&gt;<span class=\"dim\"> · </span>课程模板的作者 &lt;……&gt;</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>课程模板带来的提交</h3><p>作者是别人，克隆时就在历史里</p></div><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>profile.md 和页面</h3><p>关于具体的人的事实</p></div></div><p class=\"source-note\">提交说明和文件取自讲师排练的项目（上一节结束时的 homepage-v2），作者为占位；实际检查自己当前分支的完整历史</p>",
      "steps": [
        "列出提交与作者",
        "作者与模板提交",
        "个人内容"
      ],
      "script": [
        "【操作提示｜现场｜课件 p45 第 1 步 → Terminal 在练习项目根目录依次运行 git log --stat HEAD、git log --format='%an <%ae>' HEAD | sort -u。作者输出录前已离屏看过，真实邮箱不出镜；画面中的姓名和邮箱仍用占位。本页不以 origin/main..HEAD 限定检查范围】\n\n个人远端现在是空仓库，第一次推送会带过去当前分支的完整历史。我们先运行 git log --stat HEAD，列出这些提交和每次动过的文件。最上面是我们自己的两个检查点，homepage-v2 和 homepage-v1；再往下，是课程模板带来的提交。某个文件后来删掉了，早先提交里的内容仍会跟着公开。再用作者命令列出整段历史里的姓名和邮箱。",
        "【操作提示｜回课件推进第 2 步；可切回 Terminal，在 --stat 输出里指认课程模板带来的较早提交，作者行只指位置、不念出邮箱】\n\n看看列出了什么。第一样很容易被忽略：每个提交都记着作者的姓名和邮箱，那是本机 Git 配置里写的，推送以后所有人都能看到。第二样是课程模板带来的提交：作者是课程的讲师，不是我们，推送以后也一起公开；这些本来就在公开的课程模板里。",
        "【操作提示｜推进第 3 步 → 同一 Terminal 运行 git log -p HEAD，翻到 homepage-v1 里 profile.md 的新增行，按 q 退出分页；历史里有截图等二进制文件时另行打开查看。说完暂停提示后回课件】\n\n还有我们自己放进去的个人信息：profile.md 这个文件本身在 homepage-v1 里，页面上的经历和项目也来自它，这是关于具体的人的事实。文件列表只能告诉我们“有什么”，不能告诉我们“能不能公开”。所以还要运行第三条，git log -p，把每一处实际改动的文字展开读一遍。它会很长，讲师这次有八千多行，大半是 package-lock.json 这个依赖清单；可以先把它排除掉，读剩下的三千多行，命令在展开步骤里。截图这类二进制文件，要另外打开看。请暂停视频，在自己的项目里运行这几条命令。"
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
      "lead": "逐项对照判断清单，由我们自己决定。以提交作者邮箱为例：它是不是我们愿意公开的邮箱？不愿意，就先停下，不推送。改用 GitHub 的 noreply 邮箱只影响之后的提交，已有提交里的邮箱要改写历史才能换掉，做法见本页链接。讲师演示的个人信息是讲师本人的，取自自己网站上已经公开的内容；写到别人的事，要先问过对方。参考主页的出处写在页脚，公开以后也要还在。",
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
        "【操作提示｜停留课件 p46 第 1 步，指向左侧 Author；不现场改 git config，不演示改写历史。官方文档链接在阅读模式本页底部，录制时不打开】\n\n先看刚才列出的作者邮箱。如果那是私人邮箱，推送以后它就挂在公开历史里了。不想公开，就先停下，把 Git 的邮箱换成 GitHub 提供的 noreply 邮箱。注意，改配置只影响之后的提交，已经做过的提交还带着旧邮箱，要换掉它们就得改写历史。改写历史不在本课范围，GitHub 官方文档有说明，链接放在阅读模式这一页的底部。",
        "【操作提示｜推进第 2 步；需要举证时切回 Terminal 的 git log -p 输出，按实际内容逐项判断，不预写“没有”。发现 secret 立即停录处理，不展示具体值】\n\n再对照判断清单，前三项要确认“没有”：有没有 secret，比如 API 密钥、令牌，或者整份配置文件；有没有未经同意的他人信息，比如别人的姓名、联系方式、经历和照片；截图里有没有隐私，比如桌面上的文件名、弹出的通知。讲师演示的个人信息是讲师本人的，是从自己网站上挑的、本来就公开的内容；我们如果写了别人的事，要先问过对方。还有一样，上一节参考的 Hyperspace 要求注明出处，页脚那行出处公开以后也要还在。",
        "【操作提示｜推进第 3 步，留在课件；按讲师本人的实际意愿判断，不预写“可以公开”】\n\n接下来两项，问的是我们自己。第一项：首屏的名字和简介，是自己的，还是课程示例里的“示例同学”？讲师的首屏已经换成了自己的名字和简介；没有换的同学，公开之前先换成自己的。\n\n最后一项，是本人愿不愿意公开，作者邮箱也算在里面。这是每个人对自己内容的判断，没有标准答案：有人愿意用常用邮箱，有人只用 noreply，都合理。",
        "【操作提示｜推进第 4 步，留在课件。实际结论是暂停时如实说明，后续推送不录】\n\n只要有一项不行，就先停下，不推送，推出去就收不回来了。要从历史里去掉一个文件，同样看那两篇官方文档，做之前要人工复核。请暂停视频，逐项判断自己的内容，决定推送还是先停下。"
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
        "【操作提示｜停留课件 p47 第 1 步，指向 Prompt 的 Context；Prompt 里的 <我的仓库名>、<用户名> 录前已替换成讲师录制仓库的实际值，复制前再核对一次】\n\n部署需要两样东西。一个是 GitHub Actions 工作流：每次推送后，GitHub 在它自己的机器上安装依赖、构建，再把 dist 发布成页面。另一个是 Vite 的 base 配置：页面放在仓库名这一级路径下，资源路径要跟着改。Context 里写清自己的仓库名和 Pages 地址，不要让它猜，更不要照抄讲师的仓库名。",
        "【操作提示｜推进第 2 步，留在课件，指向 Constraints；本步不打开 GitHub 设置】\n\nConstraints 里最重要的一句：不推送，这一轮也不改仓库设置。推送是把内容公开出去的那一下，始终由我们自己执行。仓库设置稍后也会交给 Codex，但那是单独的一步，每条命令都要我们批准。",
        "【操作提示｜现场｜推进第 3 步 → 切 Terminal 的 claude-tap 标签页，在练习项目根目录的 Codex 会话里先 /clear（会话已退出时重新运行 agent-lab codex --tap），粘贴替换好的部署 Prompt 并发送；本节后面的提交和 gh 都用这一个会话。生成的文件以实际为准。出现推送、改仓库设置或安装依赖这类超出 Prompt 的请求，不批准。生成结束后回课件 p48】\n\n我们还要求它说明每个权限为什么需要，下一页要逐项审查。这一轮和上一节的风格没有关系，先清空对话再发。请暂停视频，把仓库名和地址换成自己的，提交 Prompt。"
      ],
      "teaching": [],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "部署配置",
      "label": "工作流能直接用吗",
      "title": "Codex 写的配置，逐项审查再推送",
      "lead": "四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是自己的默认分支。有一项不对就不推送，让 Codex 改。左侧是排练这次的最终文件：第一版用的 action 版本偏旧，我们追问后它升到了最新大版本。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:34px\"><div class=\"p-fn\">vite.config.ts · .github/workflows/deploy-pages.yml（摘录）</div><div class=\"p-ln\"><i>1</i><code>base: <span class=\"s\">'/ch02-pages-lab-20261025-claude/'</span>,</code></div><div class=\"p-ln\"><i>2</i><code>on:</code></div><div class=\"p-ln\"><i>3</i><code>  push:</code></div><div class=\"p-ln\"><i>4</i><code>    branches: [main]</code></div><div class=\"p-ln\"><i>5</i><code>permissions:</code></div><div class=\"p-ln\"><i>6</i><code>  contents: read</code></div><div class=\"p-ln\"><i>7</i><code>  pages: write</code></div><div class=\"p-ln\"><i>8</i><code>  id-token: write</code></div><div class=\"p-ln\"><i>9</i><code><span class=\"c\"># … npm ci → build → configure-pages → 上传 dist → deploy</span></code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li><li data-reveal=\"1\"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li><li data-reveal=\"2\"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>触发分支</b><small>等于自己的默认分支</small></span></li></ol></div><p class=\"source-note\">左侧摘自 Codex 按 p47 的 Prompt 生成、追问后升级 action 版本的文件；仓库名是排练用的临时仓库。2026-10-25 排练：从 homepage-v2 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash，Agent Lab。我们的文件写法会不同，按实际审</p>",
      "steps": [
        "base",
        "资源路径",
        "权限",
        "触发分支"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p48 第 1 步，指左侧摘录的 base 一行】\n\n左边是排练这次 Codex 最终生成的两处改动，我们先在课件上看审什么，再去看自己这次的文件。第一项看 vite.config.ts 里的 base。页面发布后的地址是“用户名点 github 点 io 斜杠仓库名”，所以 base 必须是斜杠、自己的仓库名、斜杠。抄错一个字母，页面就会白屏。",
        "【操作提示｜推进第 2 步，指资源路径一条】\n\n第二项，资源路径。本地运行 npm run build，打开 dist/index.html，看引用的 CSS 和 JS 路径是不是以斜杠仓库名开头。这是检查 base 有没有生效的直接证据。",
        "【操作提示｜推进第 3 步，指左侧 permissions 三行】\n\n第三项，工作流权限。常见的是三项：读取仓库内容；写入 Pages；获取部署用的身份令牌。每一项都应该能说出用途，这就是我们让 Codex 解释权限的原因。多出来的写权限，比如能改仓库内容，要问清楚为什么。",
        "【操作提示｜推进第 4 步，指 branches 一行；讲完切现场：VS Code 打开 Codex 这次实际改的 vite.config.ts 和 .github/workflows/ 下的工作流文件，按四项逐一指认；Terminal 运行 npm run build，打开 dist/index.html 看资源路径，git branch --show-current 核对触发分支。有一项不对就回 Codex 在原范围内改，改完重审；Node 版本与 .nvmrc 不一致也在这里指出。它的报告里有关于 action 默认行为、版本的说法时，可以追问一句“依据是什么”，不展开。随后回课件 p49】\n\n第四项，触发分支：推送到哪个分支时运行。要和仓库的默认分支一致，course-starter 默认是 main。四项有一项不对，就不推送，让 Codex 改，改完再审一遍。\n\n【切换｜VS Code · Codex 这次生成的两个文件】\n\n现在看我们自己这次生成的文件，写法不会和排练那次一样，就按这四项一项一项对。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p49",
      "segment": "推送与发布",
      "label": "设置来源并推送",
      "title": "Codex 改 Pages 设置，推送由我们来做",
      "lead": "审过的部署配置让 Codex 提交，批准框里看清文件和提交说明；再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开的话，现在再改。Pages 的来源交给 Codex 用 gh 设为 GitHub Actions：每条命令弹出批准框，读过再批；改完在网页上刷新确认。最后由我们把当前分支推到自己的 origin，部署跑得怎么样，下一步交给 Codex 用 gh 去看。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-num\">1</span><h3>提交配置</h3><p>Codex 提交，我们批准</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-num\">2</span><h3>再看历史</h3><p>待推送的全部提交</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">3</span><h3>Codex 改设置</h3><p>每条命令由我们批准</p></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"2\"><span class=\"p-num\">4</span><h3>我们来推送</h3><p class=\"p-mono\">git push -u origin HEAD</p></div></div><div class=\"p-grid\" style=\"--n:3;gap:14px;margin-top:16px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>批准框里看什么</h3><p>命令和理由；修改类命令看清方法和对象</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>网页上确认</h3><p>Settings → Pages，刷新后来源是 GitHub Actions</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"3\"><h3>失败时出在哪一环</h3><p>Actions 日志 → build 输出 → Network 里哪个资源 404</p></div></div>",
      "steps": [
        "提交并复查",
        "Codex 改设置",
        "我们来推送",
        "失败时"
      ],
      "script": [
        "【操作提示｜现场｜课件 p49 第 1 步 → Terminal 回到同一个 Codex 会话，粘贴本页“请求原文”第 1 条；它先在沙箱里 git add 失败（.git 只读），说明后申请提权，排练这次 add 和 commit 合成一条、批一次，看清是 vite.config.ts 和工作流文件、提交说明第一行对得上再批。提交后在同一 Terminal 的另一个标签页重跑 p45 的三条推送前检查命令，核对新增的提交】\n\n检查都过了，先让 Codex 提交部署配置。和前两节一样，批准框里看清提交的是哪几个文件、提交说明写了什么，再确认。提交以后，我们自己再运行一遍推送前检查的那几条命令：这次列出的才是最终要公开的全部提交，包括刚提交的工作流和配置。",
        "【操作提示｜推进第 2 步。仓库需公开时，先在 Chrome“GitHub 仓库”标签页的 Settings 改可见性。Terminal 回同一个 Codex 会话，粘贴“请求原文”第 2 条；每个批准框先读命令和理由，只批本次、不选以后不再询问，修改类命令核对方法和仓库。本机 gh 没登录时，它可能申请 gh auth login，也可能去找环境外的登录信息、改 GH_CONFIG_DIR 再联网（10-25 实验）：都拒绝，退出 Codex，自己运行 gh auth login --scopes workflow 再回来。它申请 gh workflow run 补跑部署这类超出请求的命令时停一下讲，不批准；读到令牌的命令即使看起来做了遮盖，也停一下讲。10-25 排练在没推送过的空仓库上直接创建成功；万一创建失败，先由讲师执行第 3 步的已审查推送，再完成来源设置，并在 Actions 重新运行部署；这一分支口播不讲。完成后回 Chrome 打开 Settings → Pages 并刷新，确认 Source 为 GitHub Actions。没装 gh 时在网页手动设置的做法只在展开步骤里，口播不讲。界面按录制时的 GitHub 版本核对】\n\n推送之前，先把 GitHub 这边准备好。仓库如果还是私有的，现在再改成公开，因为待公开的内容已经看过了。\n\n接着把 Pages 的来源设成 GitHub Actions，工作流要在启用之后才能部署。这一步也交给 Codex，课程环境会用我们本机已经登录的 gh。发送页面上“请求原文”里的第二段话。\n\nCodex 每次访问 GitHub 都会弹出批准框，写着命令和理由。查询类的读一遍就批；修改类的看清方法和对象：改的是不是自己的仓库，是不是 Pages。它要做请求里没说的事，比如去触发一次部署，或者去用别的地方的登录信息，批准框就是我们说“不”的地方。\n\n改完以后，它会用命令再查一次，但它看不到网页。我们自己打开 Settings 里的 Pages，刷新，确认来源已经是 GitHub Actions。",
        "【操作提示｜推进第 3 步 → 回练习项目根目录的 Terminal，由讲师本人执行 git push -u origin HEAD，不交给 Codex；推送 .github/workflows/ 被拒时核对 gh 登录是否带 workflow 权限。若第 2 步已为初始化空仓库推送过，不重复推送。随后回课件 p49a，部署结果留到 p49b 让 Codex 用 gh 去看】\n\n最后由我们自己在终端执行 git push -u origin HEAD，把当前分支推到自己的仓库，并建立后续使用的跟踪关系。推送会触发部署，它在 GitHub 的机器上跑。跑得怎么样，等一下交给 Codex 用 gh 去看；先回头看看，刚才它是怎样调用 gh 的。",
        "【操作提示｜推进第 4 步；实际失败时保留真实过程，按 Actions 日志 → 本地 npm run build → Network 的顺序定位。若先推送后才设来源导致失败，在 Actions 页对失败的运行点 Re-run 并确认新运行成功。没有失败只讲课件，不伪造】\n\n第一次部署不一定成功。失败了，按顺序找出在哪一环：Actions 日志里哪一步红了；同样的 build 在本地能不能复现；页面打开了，Network 面板里哪个资源是 404。"
      ],
      "repro": {
        "label": "请求原文",
        "steps": [
          {
            "text": "还在写部署配置的那个 Codex 会话里，发送提交请求；git add、git commit 弹出批准框时，看清是这两个文件、提交说明对得上",
            "code": "我审过了，接受这两处改动。先列出 git status 给我看，再提交 vite.config.ts 和工作流文件；\n提交说明第一行写 deploy: 用 GitHub Actions 发布到 Pages，正文写改了哪些文件。"
          },
          {
            "text": "再发设置 Pages 来源的请求；每条命令弹出批准框时先读命令和理由",
            "code": "请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查有没有 Pages 站点：没有就用 POST 创建，已有就用 PUT 修改，都设 build_type=workflow。执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。"
          },
          {
            "text": "改完在网页上确认（没装 GitHub CLI 时直接在这里手动选择 GitHub Actions）",
            "code": "仓库页 → Settings → Pages → Build and deployment → Source"
          }
        ],
        "note": "交给 Codex 的请求不推送。10-25 排练时仓库还没推送过任何提交，也能直接创建 Pages；万一创建失败，先由我们推送已检查的内容，再设置来源，并在 Actions 重新运行部署。推送目标必须是自己的 origin。"
      },
      "teaching": [],
      "source": "index.html#p49",
      "seconds": 120
    },
    {
      "id": "p49a",
      "segment": "推送与发布",
      "label": "Codex 怎样调用 gh",
      "title": "工具里没有 gh，它是怎样调用的？",
      "lead": "回看排练这次设置 Pages 来源的记录。请求里的工具只有 exec、wait 这类通用工具，没有 gh；gh 是我们电脑上装好、登录好的一个命令，Codex 用 exec 运行它，会不会用、命令怎么写，靠模型自己的知识。模型发出的调用里是一条完整的 gh 命令，还带着“要在沙箱外运行”的标记和一句理由，批准框显示的就是这句。我们批准后命令执行，返回 404，站点还不存在；这段返回进了下一次请求，它据此改用 POST 创建，又申请一次，复查得到 build_type: workflow。它说了“执行修改前告诉我”也没有停下等回话，停住它的是批准框；我们点的同意本身不在记录里。排练这次一共批了两次。左侧按钮切换观察点，阅读视图展示原文节选。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;gh-tools&quot;, &quot;gh-call&quot;, &quot;gh-result&quot;, &quot;post-call&quot;, &quot;post-result&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"gh-tools\" aria-pressed=\"true\"><b>工具列表</b><span>里面没有 gh，只有 exec 这类通用工具</span></button><button type=\"button\" data-ev-key=\"gh-call\" aria-pressed=\"false\"><b>完整命令</b><span>带着沙箱外标记和理由</span></button><button type=\"button\" data-ev-key=\"gh-result\" aria-pressed=\"false\"><b>工具返回</b><span>404：还没有站点</span></button><button type=\"button\" data-ev-key=\"post-call\" aria-pressed=\"false\"><b>据此创建</b><span>看到 404，改用 POST</span></button><button type=\"button\" data-ev-key=\"post-result\" aria-pressed=\"false\"><b>复查结果</b><span>build_type 是 workflow</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=gh-tools\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"gh-tools\" ><p class=\"p-ev-source\">10-25 排练 · 设置 Pages 来源时的请求</p><article><h3>请求里的工具（tools 字段）</h3><pre>exec\nwait\nrequest_user_input\ncollaboration\nweb_search</pre></article><article><h3>系统指令里提到 gh 的唯一一处（申请批准时 prefix_rule 的例子）</h3><pre>- [&quot;gh&quot;, &quot;pr&quot;, &quot;check&quot;]</pre></article></section><section data-ev-reading=\"gh-call\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 完整命令</p><article><h3>它发出的调用（exec 里的一段代码）</h3><pre>  cmd: &quot;echo &#x27;=== gh auth status (联网) ===&#x27;; gh auth status 2&gt;&amp;1; echo; echo &#x27;=== 环境变量里的 token(只看是否存在,不打印值) ===&#x27;; for v in GH_TOKEN GITHUB_TOKEN GH_ENTERPRISE_TOKEN; do if [ -n \\&quot;$(printenv $v)\\&quot; ]; then echo \\&quot;$v: 已设置\\&quot;; else echo \\&quot;$v: 未设置\\&quot;; fi; done; echo; echo &#x27;=== GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;&quot;,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态？&quot;,</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({\n  cmd: &quot;echo &#x27;=== gh auth status (联网) ===&#x27;; gh auth status 2&gt;&amp;1; echo; echo &#x27;=== 环境变量里的 token(只看是否存在,不打印值) ===&#x27;; for v in GH_TOKEN GITHUB_TOKEN GH_ENTERPRISE_TOKEN; do if [ -n \\&quot;$(printenv $v)\\&quot; ]; then echo \\&quot;$v: 已设置\\&quot;; else echo \\&quot;$v: 未设置\\&quot;; fi; done; echo; echo &#x27;=== GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;&quot;,\n  workdir: &quot;[project]&quot;,\n  yield_time_ms: 30000,\n  max_output_tokens: 6000,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态？&quot;,\n  prefix_rule: [&quot;gh&quot;, &quot;api&quot;]\n});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"gh-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 工具返回</p><article><h3>下一次请求带上的返回</h3><pre>  ✓ Logged in to github.com account MiaoDX (keyring)\n=== GET pages ===\n{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)</pre><details><summary>展开该项完整原文</summary><pre>Script completed\nWall time 0.0 seconds\nOutput:\n\n=== gh auth status (联网) ===\ngithub.com\n  ✓ Logged in to github.com account MiaoDX (keyring)\n  - Active account: true\n  - Git operations protocol: https\n  - Token: gh*_[token-masked]\n  - Token scopes: &#x27;gist&#x27;, &#x27;read:org&#x27;, &#x27;repo&#x27;, &#x27;workflow&#x27;\n\n=== 环境变量里的 token(只看是否存在,不打印值) ===\nGH_TOKEN: 未设置\nGITHUB_TOKEN: 未设置\nGH_ENTERPRISE_TOKEN: 未设置\n\n=== GET pages ===\n{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)\nEXIT=1\n</pre></details></article></section><section data-ev-reading=\"post-call\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 据此创建</p><article><h3>它的回答</h3><pre>- `GET /repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages` → **HTTP 404 Not Found**，说明**这个仓库还没有 Pages 站点**\n- 所以走**创建**路径（POST），不是 PUT 修改\ngh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow</pre><details><summary>展开该项完整原文</summary><pre>查清楚了：\n\n- `gh` 已登录，token 有效（scopes: `repo` / `workflow` / `read:org` / `gist`）——刚才那句 &quot;token 无效&quot; 是沙箱没网导致校验失败，不是真的坏了\n- `GET /repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages` → **HTTP 404 Not Found**，说明**这个仓库还没有 Pages 站点**\n- 所以走**创建**路径（POST），不是 PUT 修改\n\n要执行的两条命令：\n\n```bash\n# 1) 创建 Pages 站点，build_type=workflow（即 Source 选 &quot;GitHub Actions&quot;）\ngh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow\n\n# 2) 复查\ngh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages\n```</pre></details></article><article><h3>接着发出的调用，又申请到沙箱外</h3><pre>  cmd: &quot;echo &#x27;=== POST 创建 Pages 站点 ===&#x27;; gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 复查 GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 仓库默认分支 ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude --jq &#x27;.default_branch&#x27; 2&gt;&amp;1&quot;,\n  justification: &quot;是否允许 gh 调用 GitHub API 创建该仓库的 Pages 站点并设置 build_type=workflow？&quot;,</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({\n  cmd: &quot;echo &#x27;=== POST 创建 Pages 站点 ===&#x27;; gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 复查 GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 仓库默认分支 ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude --jq &#x27;.default_branch&#x27; 2&gt;&amp;1&quot;,\n  workdir: &quot;[project]&quot;,\n  yield_time_ms: 60000,\n  max_output_tokens: 6000,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 调用 GitHub API 创建该仓库的 Pages 站点并设置 build_type=workflow？&quot;,\n  prefix_rule: [&quot;gh&quot;, &quot;api&quot;]\n});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"post-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 复查结果</p><article><h3>创建与复查的返回（摘出两个字段，完整 JSON 在原始记录）</h3><pre>=== POST 创建 Pages 站点 ===\nhtml_url: https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/\nbuild_type: workflow\n\n=== 复查 GET pages ===\nhtml_url: https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/\nbuild_type: workflow</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "工具列表",
        "完整命令",
        "工具返回",
        "据此创建",
        "复查"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p49a 第 1 步，阅读视图指工具列表和 prefix_rule 那一行】\n\n刚才 Pages 的设置是 Codex 用 gh 改的。先看排练这次的请求：工具列表里只有 exec、wait 这几个通用工具，没有 gh。整个请求里提到 gh 的只有一处，是系统指令里申请批准时举的一个例子。gh 是我们电脑上装好、登录好的一个命令，Codex 用 exec 去运行它；会不会用 gh、命令怎么写，靠的是模型自己的知识。",
        "【操作提示｜推进第 2 步，阅读视图指 gh api 那一行，再指 sandbox_permissions 和 justification】\n\n模型发出的是一个 exec 调用，里面是一条完整的 gh 命令，一字不差，可以和批准框里看到的那条对一对。参数里还多了两样：一个标记，说要在沙箱外运行；一句理由，“是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态”。批准框里显示的就是这句。默认沙箱没有网络，所以连只读的查询，也要我们批准。",
        "【操作提示｜推进第 3 步，阅读视图指 Not Found】\n\n我们批准以后，命令在我们电脑上执行，gh 去和 GitHub 通信。返回的是 gh 的输出：已经登录，查 Pages 得到 404，站点还不存在。GitHub 上的这个状态，本来不在请求里；这段输出作为工具返回，进了下一次请求。",
        "【操作提示｜推进第 4 步，阅读视图指它的回答和 POST 那一行】\n\n模型就是看着这段返回决定下一步：站点不存在，按我们 Prompt 里写的，用 POST 创建。它把要运行的命令列了出来，可并没有停下来等我们回话，紧接着就申请执行。Prompt 里写的“执行修改前告诉我”停不住它，停住它的是批准框。",
        "【操作提示｜现场回看｜推进第 5 步，阅读视图指 build_type workflow；讲完切 Terminal 的 claude-tap 标签页，打开现场这次设置 Pages 来源的请求，先指 tools 里没有 gh，再指一条 gh 调用的命令、理由和下一次请求里的返回，数一数这次批了几次；截图前检查 gh 输出里的账号名和 html_url。随后回课件 p49b】\n\n创建以后它又查了一次，build_type 已经是 workflow。那我们点的同意在哪里？记录里找不到这一下，只能看到批准之后命令真的执行了。排练这次一共批了两次。\n\n【切换｜Terminal · claude-tap 标签页 · 现场这次的记录】\n\n再看现场这次：工具列表里同样没有 gh。找一条 gh 调用，看命令、看理由，再看下一次请求里的返回。批了几次、命令怎么写，和排练那次比一比。"
      ],
      "teaching": [],
      "source": "index.html#p49a",
      "seconds": 150
    },
    {
      "id": "p49b",
      "segment": "推送与发布",
      "label": "用 gh 看这次部署",
      "title": "推送之后，让 Codex 用 gh 看这次部署",
      "lead": "部署在 GitHub 的机器上跑，结果不在项目文件里，也不在 context 里。推送后让 Codex 用 gh 去看：运行列表、每个 job、日志里的警告和错误。排练补跑这次，它先列出运行，再看两个 job，最后把 346 行日志存成文件、grep 后分段读；这些都是 gh 查回来的文本，作为工具返回进到请求里，读了多少就进来多少。它还想跑 npm audit 查日志里提到的漏洞，这已经在请求之外，我们在批准框说不。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-pair\" style=\"grid-template-columns:minmax(0,.62fr) minmax(0,1.38fr);gap:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"us\">我们的请求</span><h3>只看，不改</h3><p>成没成功、每个 job、警告原文；不重跑、不改文件</p></div><div class=\"p-term\" data-reveal=\"1\" style=\"font-size:15px\"><div>$ gh run list --limit 20 --json databaseId,name,displayTitle,event,status,conclusion,headSha,createdAt,url</div><div>$ gh run view 40183596663 --json jobs,conclusion,status,headSha,event,createdAt,updatedAt,url</div><div>$ gh run view 40183596663 --log 2&gt;&amp;1 | tee /tmp/run-40183596663.log | wc -l</div></div></div><div class=\"p-term\" data-reveal=\"2\" style=\"margin-top:8px;font-size:15px\"><div class=\"dim\">它带回来的（回答节选）</div><div>| Build (121139603221) | ✅ success | 21s |</div><div>| Deploy (121139684344) | ✅ success | 9s |</div><div>1 high severity vulnerability</div><div>(node:1943) [DEP0040] DeprecationWarning: The punycode module is deprecated. Please use a userland alternative instead.</div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:8px\">想再跑 npm audit：请求外的事，<b>在批准框说不</b></div><p class=\"source-note\">2026-10-25 补跑：同一个项目、新会话，运行已在推送后结束；共批 5 次、拒 1 次。日志里有哪些警告，每次不同</p>",
      "steps": [
        "只让它看",
        "它跑的 gh",
        "带回来的文本",
        "请求外的事"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p49b 第 1 步，指左侧“我们的请求”；请求原文在本页展开步骤】\n\n推送以后，部署在 GitHub 的机器上跑。它跑得怎么样，不在我们的项目文件里，也不在 context 里，和上一节页面的样子一样。我们让 Codex 用 gh 去看：运行有没有成功、每个 job 的结果，日志里有没有警告或错误。只看，不重跑，不改设置和文件。",
        "【操作提示｜推进第 2 步，指右侧三条命令】\n\n排练补跑这次，它先列出最近的运行，找到这次推送触发的那一个；再看两个 job 的结果；最后把日志下载下来。每一条 gh 命令都和刚才一样，申请到沙箱外运行，由我们批准。日志有三百四十多行，它没有一下子全读，先存成文件，用 grep 挑出警告，再一段一段读。",
        "【操作提示｜推进第 3 步，指下方的回答节选】\n\n它带回来的，是 gh 查到的文本：两个 job 都是 success，日志里有一条依赖漏洞的提示、一条 Node 模块的弃用警告。这些文字作为工具返回进了请求，它读了多少，就进来多少。日志里有什么，每次都不一样，我们按现场看到的说。",
        "【操作提示｜现场｜推进第 4 步 → Terminal 回同一个 Codex 会话，粘贴“请求原文”并发送；每个批准框看清是读取这次运行，只批本次。它申请重跑部署、npm audit 或改依赖时按 esc 拒绝，说“这一步只看部署”。运行还没结束时，可以先做 p50 的三项检查再回来。读完回课件 p50】\n\n排练这次它还想跑 npm audit，去查日志里提到的那条漏洞。这已经在我们的请求之外，就在批准框说不，告诉它这一步只看部署。请暂停视频，在自己的会话里发这段话，看看它读到了什么。"
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
      "segment": "推送与发布",
      "label": "部署成功就行吗",
      "title": "gh 说部署成功了，页面就能用了吗？",
      "lead": "gh 读到的是部署流程成功完成。别人能不能正常打开，要我们自己看：未登录窗口打开公开 URL；Network 面板没有 404；停用缓存后刷新仍然正常。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">Actions</span><p class=\"p-big\">✓ Build ✓ Deploy</p><p class=\"p-sub\">gh 读到两个 job 都是 success（排练这次 37 秒）</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">未登录窗口打开 URL<small>别人看到的就是这样</small></li><li data-reveal=\"2\">Network 没有 404<small>CSS、JS、图片都加载了</small></li><li data-reveal=\"3\">停用缓存后刷新仍正常<small>看到的是服务器上的版本</small></li></ul></div><p class=\"source-note\">排练这次：首次部署一次成功；全新的浏览器上下文（未登录）打开公开 URL，页面、CSS、JS 三个请求都是 200，停用缓存后刷新相同</p>",
      "steps": [
        "绿色对勾",
        "未登录窗口",
        "Network",
        "停用缓存再刷新"
      ],
      "script": [
        "【操作提示｜现场｜课件 p50 第 1 步，指左侧；可切 Chrome“GitHub 仓库”标签页的 Actions 对一下同一次运行，再回课件。录前从仓库 Settings → Pages 记下实际公开 URL】\n\ngh 读到的是，两个 job 都成功了，部署流程跑完了。讲师排练这次，Build 和 Deploy 一共三十多秒。可这只说明流程跑完，别人能不能正常打开，要我们自己看。比如 base 写错时，部署照样成功，页面却因为资源路径错误显示为空白。",
        "【操作提示｜推进第 2 步 → Chrome 新开无痕窗口，打开公开 URL，不登录 GitHub；页面实际空白或走样时如实展示，进入第 3 步定位】\n\n第一项，用浏览器的无痕窗口，也就是未登录状态，打开公开 URL。别人第一次访问时看到的就是这个样子。",
        "【操作提示｜推进第 3 步 → 在无痕窗口打开开发者工具的 Network 面板，刷新一次，按 Status 查 404；有 404 就指认资源路径，回到 p48 的 base 检查】\n\n第二项，打开开发者工具的 Network 面板，刷新一次，看有没有状态是 404 的资源。CSS、JS 有一个没加载上，页面就会走样。",
        "【操作提示｜推进第 4 步 → 同一面板勾选 Disable cache 再刷新。记下公开 URL；关闭无痕窗口，回课件】\n\n第三项，在 Network 面板勾选 Disable cache，也就是停用缓存，再刷新一次，页面仍然正常。普通刷新可能还在用浏览器缓存里的旧文件，停用缓存以后，看到的才是服务器上现在的版本。三项都过了，才能说发布成功。记下自己的公开 URL 和这三项的结果。"
      ],
      "teaching": [],
      "source": "index.html#p50",
      "seconds": 120
    },
    {
      "id": "p51",
      "segment": "推送与发布",
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
        "【操作提示｜现场｜课件 p51 第 1 步 → Terminal 在练习项目根目录先运行 git tag --list ch02-homepage-live 确认不存在，再运行 git tag ch02-homepage-live；已存在时核对它指向的提交，不强制覆盖】\n\n发布检查通过了，给这个版本做个标记。运行 git tag ch02-homepage-live。",
        "【操作提示｜推进第 2 步，同一 Terminal 运行 git push origin ch02-homepage-live，指认实际输出；可在 Chrome“GitHub 仓库”标签页的 tags 列表确认只多出这一个】\n\n然后只推送这一个 tag：git push origin，后面跟 tag 的名字。远端只会多出这一个 tag。",
        "【操作提示｜回课件推进第 3 步；不运行 git push --tags】\n\n为什么不用 git push --tags？它会把所有本地 tag 一起推上去，包括练习时随手打的。推送 tag 也是公开，一样要知道推的是什么。"
      ],
      "teaching": [],
      "source": "index.html#p51",
      "seconds": 90
    },
    {
      "id": "p51b",
      "segment": "推送与发布",
      "label": "暂停自检",
      "title": "暂停自检：gh 是怎样用上的？",
      "lead": "每题先暂停，写出我们的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
      "html": "<style>body[data-mode=\"slides\"] #p51b .x-answer{display:none}body[data-mode=\"slides\"] #p51b .p-qrow h3{font-size:24px}body[data-mode=\"slides\"] #p51b .p-back-to{font-size:16px}</style><div class=\"p-qlist\"><div class=\"p-qrow\" data-reveal=\"0\"><span class=\"p-n\">1</span><div><h3>请求的工具列表里没有 gh，Codex 是怎样运行 gh 的？</h3><p class=\"x-answer\">用 exec 这样的通用工具运行本机命令：gh 是我们电脑上装好、登录好的命令；会不会用、命令怎么写，靠模型自己的知识，装没装、登没登录要它自己先跑命令看</p><span class=\"p-back-to\">回看：工具里没有 gh，它是怎样调用的</span></div></div><div class=\"p-qrow\" data-reveal=\"1\"><span class=\"p-n\">2</span><div><h3>这次部署成没成功、日志里有什么，Codex 是从哪里知道的？</h3><p class=\"x-answer\">部署在 GitHub 的机器上跑，结果本来不在 context 里；它运行 gh run list、gh run view，输出作为工具返回进了下一次请求，读了多少就进来多少</p><span class=\"p-back-to\">回看：推送之后，让 Codex 用 gh 看这次部署</span></div></div><div class=\"p-qrow\" data-reveal=\"2\"><span class=\"p-n\">3</span><div><h3>Pages 设置是 Codex 用 gh 改的，在哪一步由我们说了算？请求记录里看得到吗？</h3><p class=\"x-answer\">在批准框：命令和理由写在模型发出的工具调用里，看得到；我们点的同意不在记录里，只能看到命令随后执行了。Prompt 里的“先告诉我”停不住它。推送由我们自己执行</p><span class=\"p-back-to\">回看：工具里没有 gh，它是怎样调用的</span></div></div></div>",
      "steps": [
        "怎样运行",
        "状态怎样进来",
        "谁说了算"
      ],
      "script": [
        "【操作提示｜停留课件 p51b 第 1 步；读题后暂停】\n\n停一下，自己答三个问题。第一题：请求的工具列表里没有 gh，Codex 是怎样运行 gh 的？",
        "【操作提示｜推进第 2 步】\n\n第二题：这次部署成没成功、日志里有什么，Codex 是从哪里知道的？",
        "【操作提示｜推进第 3 步；参考答案在阅读模式，口播不念答案】\n\n第三题：Pages 设置是 Codex 用 gh 改的，在哪一步由我们说了算？请求记录里看得到吗？请暂停视频，写下你的答案。"
      ],
      "teaching": [],
      "source": "index.html#p51b",
      "seconds": 90
    },
    {
      "id": "p52",
      "segment": "推送与发布",
      "label": "本节小结",
      "title": "从本地提交到公开 URL",
      "lead": "本节推送前看过完整历史，留下审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。工具列表里没有 gh，Codex 用 exec 在我们电脑上运行它；GitHub 上的设置和部署状态本来不在 context 里，gh 查过才作为工具返回进来；改 GitHub 的每一步，都经我们批准。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"0\"><h3>看清历史</h3><p>提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>审查配置</h3><p>base、权限、分支</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><h3>设置与推送</h3><p>Codex 改设置<br>我们批准、我们推送</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><h3>看部署、证明可用</h3><p>gh 读结果，三项检查与 tag</p></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:18px\">gh 经 exec 在本机运行：<b>GitHub 的状态作为工具返回进来，改动经我们批准</b></div>",
      "steps": [
        "本节做了什么",
        "gh 在请求里"
      ],
      "script": [
        "【操作提示｜停留课件 p52 第 1 步，不切工具窗口】\n\n回看这一节：推送前看清整段历史，由我们判断能不能公开；Codex 写的配置审过再提交；Pages 来源交给 Codex 用 gh 设置，我们批准、我们推送；推送后让它用 gh 看部署，我们再用三项检查证明页面可用，只推送一个 tag。个人主页现在有了一个公开 URL。",
        "【操作提示｜推进第 2 步，留在课件；本节到此结束，不预告 2.5】\n\n这一节也看清了一个工具列表里没有的工具，是怎样用起来的：gh 是我们电脑上的命令，Codex 用 exec 运行它；GitHub 上的设置和部署状态，本来不在请求里，gh 查过，才作为工具返回进来；改 GitHub 的每一步，都经过我们批准。以后让 Codex 用别的命令行工具，也可以这样看。"
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
      "seconds": 210
    },
    {
      "label": "推送与发布",
      "seconds": 750
    }
  ]
};

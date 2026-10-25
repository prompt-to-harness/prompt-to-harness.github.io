window.lesson = {
  "title": "发布上线，看 Codex 怎么用 gh",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.04",
  "summary": "从上一节的 homepage-v2 开始第一次推送：推送前看清即将公开的整段历史，也看清 context 早已发给了模型服务；Codex 写部署配置、用 gh 设置 Pages 来源，每条命令由我们批准，推送由我们来做；最后用公开 URL 证明页面可用。",
  "prep": [
    "练习项目从 2.3 的结束状态开始（homepage-v2，快照分支 ch02/2.3-done-20261025），git status 干净，此前没有推送过本地提交和 tag。",
    "gh 已由讲师本人登录（gh auth login --scopes workflow）；令牌不放环境变量、不贴进对话。Agent Lab 默认复用本机 gh 登录，启动 Codex 不用另加开关。",
    "定好讲师个人空仓库的名字和 Pages 地址，p47 Prompt 里的 <我的仓库名>、<用户名> 先替换好。",
    "Chrome 备好“GitHub 仓库”标签页，GitHub 已登录，账号资料、通知不入镜。",
    "作者邮箱、gh 输出里的账号名和 html_url 上屏前检查；真实邮箱不出镜，画面上的作者用占位。"
  ],
  "scenes": [
    {
      "id": "p43",
      "segment": "公开之前",
      "layout": "lesson-cover",
      "label": "这一节做哪几步",
      "title": "这一节要做哪几步？",
      "lead": "到现在为止，提交都只在自己电脑上，这是第一次推送：页面、源码和整段提交历史都会公开。本节也回答本章最后一问：这一列内容最后发到了哪里？",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>改风格</li><li class=\"is-now\"><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-flow\" style=\"--n:4;margin-top:12px\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-num\">1</span><h3>看清历史</h3><p>即将公开的提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">2</span><h3>审查配置</h3><p>Codex 写的部署工作流</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-num\">3</span><h3>设置与推送</h3><p>Codex 用 GitHub CLI（gh）改设置，我们来推送</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><span class=\"p-num\">4</span><h3>证明可用</h3><p>公开 URL 上查三项</p></div></div><div style=\"margin-top:10px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">系统指令</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">环境</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">规则</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具返回</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">新的 Prompt</div></div><div class=\"p-foot\">整列每次都发给模型服务；仓库要等推送才公开</div></div></div>",
      "steps": [
        "回到地图",
        "推送之前",
        "推送与之后"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向章节地图上的 2.4，不切工具窗口】\n\n上一节我们参考 Hyperspace 改了两轮风格，让 Codex 提交了 homepage-v2。到现在为止，所有提交都只在自己电脑上，tag 也是本地的。这一节要第一次推送到 GitHub，把页面发布出去。",
        "【操作提示｜推进第 2 步，留在课件，指向前两步；本页不打开 GitHub】\n\n一共四步。推送之前先做两件事：第一，看清即将公开的历史。推送以后公开的有三样：页面、当前的源码，还有每一次提交，包括某次提交里出现过、后来又删掉的文件。第二，审查 Codex 写的部署配置。",
        "【操作提示｜推进第 3 步，留在课件，指向后两步，再指下方的锚点图和底注；讲完进入 p44 再切 Chrome】\n\n第三步，Pages 的设置交给 Codex 用 GitHub CLI，也就是 gh 命令来改，每条命令由我们批准；推送由我们自己来做，推出去就收不回来。第四步，在公开 URL 上检查页面真的能用。\n\n还是那一列方块，这一节问本章最后一个问题：这些内容，最后发到了哪里？推送之前，这一整列每次都已经发给了模型服务；GitHub 上的仓库，要等我们推送才公开。这两件事，我们分开看。"
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
      "id": "p46a",
      "segment": "推送前检查",
      "label": "context 发给了谁",
      "title": "推送之前，context 早就发出去了",
      "lead": "推送是把仓库公开给所有人，由我们决定、先看历史。context 不一样：Codex 读过的文件、命令的输出，每次请求都原样发给模型服务，不用等推送。Codex 的请求不在服务端接着上一次，每次都带上全部内容，OpenAI 的文章里写了原因（见本页链接）。讲师这一章用的是 MiniMax：第一次问项目区时读的 App.tsx，放个人信息时读的 profile.md 全文，都已经随请求到了 api.minimax.cn。所以 secret、别人的信息，不只是不能推送，也不该让它读进 context。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"us\">推送</span><h3>公开给所有人</h3><p>由我们决定什么时候推；推之前看清整段历史</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"ctx\">context</span><h3>发给模型服务</h3><p>它读过的文件、命令输出，每次请求都发出去；不用等推送</p></div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:10px\"><div>POST https://api.minimax.cn/v1/responses</div><div class=\"dim\">input 里：src/App.tsx、profile.md 的全文 …</div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">secret 和别人的信息：<b>不推送，也别让它读进 context</b></div><p class=\"source-note\">讲师用课程基线（MiniMax 自定义 provider）的请求记录；换服务，发往的地址不同，道理一样</p>",
      "refs": [
        {
          "kind": "read",
          "group": "OpenAI，2026-01-23",
          "text": "深入解析 Codex 智能体循环",
          "url": "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/#:~:text=%E9%80%89%E6%8B%A9%E4%B8%8D%E4%BD%BF%E7%94%A8%20previous_response_id"
        }
      ],
      "steps": [
        "推送公开给谁",
        "context 发给谁",
        "两边都要管"
      ],
      "script": [
        "【操作提示｜停留课件 p46a 第 1 步，指左边“推送”】\n\n推送前我们查了这么多，因为推送是把仓库公开给所有人。什么时候推、推什么，由我们决定。",
        "【操作提示｜推进第 2 步，指右边“context”和下面的请求去向；可切 claude-tap 查看器，指一次请求的地址和 input 里 profile.md 的全文，再回课件】\n\n可还有一样东西，早就发出去了：context。Codex 读过的文件、命令的输出，每一次请求都原样发给模型服务。Codex 的请求不在服务端接着上一次，每次都把全部内容带上，OpenAI 介绍 Codex 智能体循环的文章里专门写了这一点，链接在阅读模式。讲师这一章用的是 MiniMax：第一次问项目区时读的 App.tsx，放个人信息时读的 profile.md 全文，都已经随请求发到了它的服务器上，根本不用等推送。",
        "【操作提示｜推进第 3 步，指底部横条；讲完进入 p47】\n\n所以 secret、别人的信息，不只是不能推送，也别让它读进 context。换别的模型服务，地址不同，道理一样。服务端怎样保存这些数据，要看各家的条款，这里不展开。"
      ],
      "teaching": [],
      "source": "index.html#p46a",
      "seconds": 90
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
      "lead": "四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是自己的默认分支。有一项不对就不推送，让 Codex 改。左侧是排练这次的最终文件：第一版用的 action 版本偏旧，我们追问后它查过网页，升到了最新大版本。文件要审，它在回答里说的话也要核对，下一页看排练里的一个例子。",
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
        "【操作提示｜推进第 4 步，指 branches 一行；讲完切现场：VS Code 打开 Codex 这次实际改的 vite.config.ts 和 .github/workflows/ 下的工作流文件，按四项逐一指认；Terminal 运行 npm run build，打开 dist/index.html 看资源路径，git branch --show-current 核对触发分支。有一项不对就回 Codex 在原范围内改，改完重审；Node 版本与 .nvmrc 不一致也在这里指出。它的报告里有关于 action 默认行为、版本的说法时，记下来，下一页讲完再回来追问。随后回课件 p48a】\n\n第四项，触发分支：推送到哪个分支时运行。要和仓库的默认分支一致，course-starter 默认是 main。四项有一项不对，就不推送，让 Codex 改，改完再审一遍。\n\n【切换｜VS Code · Codex 这次生成的两个文件】\n\n现在看我们自己这次生成的文件，写法不会和排练那次一样，就按这四项一项一项对。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p48a",
      "segment": "部署配置",
      "label": "它说的依据在哪",
      "title": "它说的话，依据在请求的哪一块？",
      "lead": "排练这次，第一轮报告里它说：configure-pages 默认 enablement: true，首次运行会自动帮我们开 Pages。那时请求里还没有任何网页，这句话只能来自模型自己记得的东西，而且是错的：官方 action.yml 写的默认值是 false。我们追问依据，它才去查：一次回答里打开了 27 个网页，这一次的输入有 50 万 token，前后两次都只有两万左右。网页是模型服务那边打开的，不弹批准框，正文作为引用附在它的回答里，之后每次请求都带着。用量超过窗口的九成，Codex 在下一轮之前自动压缩：先要一份交接摘要，之后的请求里只剩我们说过的话和这份摘要。外面的信息要进 context 才算数，进来也有代价。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;claim-answer&quot;, &quot;search-text&quot;, &quot;compact-message&quot;, &quot;after-compact&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"claim-answer\" aria-pressed=\"true\"><b>它说</b><span>没查网页，就说了默认值</span></button><button type=\"button\" data-ev-key=\"search-text\" aria-pressed=\"false\"><b>去查网页</b><span>一次回答打开 27 个网页</span></button><button type=\"button\" data-ev-key=\"compact-message\" aria-pressed=\"false\"><b>自动压缩</b><span>下一轮之前先要交接摘要</span></button><button type=\"button\" data-ev-key=\"after-compact\" aria-pressed=\"false\"><b>压缩之后</b><span>只剩我们的话和一份摘要</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=claim-answer\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"claim-answer\" ><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 它说</p><article><h3>第一轮报告里的一句（这时请求里还没有任何网页）</h3><pre>- **没有改仓库设置** — 有一处想提醒你：`actions/configure-pages@v5` 默认 `enablement: true`，首次运行时若仓库还没开 Pages，它会**自动帮你启用** Pages（build_type 设为 workflow）。如果你希望必须手动在 Settings → Pages 里把 Source 选成 &quot;GitHub Actions&quot;，我可以把该步骤改成 `with: enablement: false`。</pre><details><summary>展开该项完整原文</summary><pre>清理干净了（临时服务已停、临时目录已删）。以下是完整交付说明。\n\n## 改了什么\n\n只动了 2 个文件，**没有新增任何依赖**：\n\n| 文件 | 类型 | 改动 |\n|---|---|---|\n| `vite.config.ts` | 修改 | 加了 `base: &#x27;/ch02-pages-lab-20261025-claude/&#x27;` |\n| `.github/workflows/deploy-pages.yml` | 新增 | 整个工作流 |\n\n### 为什么要改 Vite 配置\n\n原来的配置没有 `base`，构建产物是站点根路径：\n\n```html\n&lt;script src=&quot;/assets/index-DbiQgJB1.js&quot;&gt;&lt;/script&gt;   &lt;!-- ❌ --&gt;\n```\n\nPages 项目页挂在 `/ch02-pages-lab-20261025-claude/` 子路径下，`/assets/...` 会 404。加上 `base` 后产物变成：\n\n```html\n&lt;script src=&quot;/ch02-pages-lab-20261025-claude/assets/index-DbiQgJB1.js&quot;&gt;&lt;/script&gt;   &lt;!-- ✅ --&gt;\n```\n\n`src/index.css` 里的 `hero-lines.svg` 是相对路径引用，Vite 会内联成 data URI，不受 base 影响，不需要额外处理。\n\n---\n\n## 工作流逐项说明\n\n`.github/workflows/deploy-pages.yml`\n\n**触发器** — `push` 到 `main` 自动跑；`workflow_dispatch` 让你在 Actions 页面手动重跑（不用重新推送就能重新部署）。当前分支就是 `main`。\n\n**并发控制** — `group: pages` + `cancel-in-progress: false`。同一时间只允许一个 Pages 部署在跑；后到的推送排队而不是把正在进行的部署取消掉，避免把部署到一半的版本顶掉。\n\n**Job 1 `build`（ ubuntu-latest）：**\n1. `actions/checkout@v4` — 把仓库代码拉到 runner 上。\n2. `actions/setup-node@v4` — 用 `.nvmrc`（22.19.0）装 Node，`cache: &#x27;npm&#x27;` 缓存 npm 下载目录，重复构建时省时间。它靠 `package-lock.json` 定位缓存 key，仓库里有这个文件。\n3. `npm ci` — 严格按 lock 文件安装。我本地校验过 lock 与 `package.json` 完全一致（react 19.1.1 / vite 7.3.6 等 7 个包版本全部对得上），`npm ci --dry-run` 通过，所以 CI 里不会因 lock 不同步而失败。\n4. `npm run build` — 走 `tsc -b &amp;&amp; vite build`，先类型检查再打包。类型错误会直接让构建失败，避免把坏代码发布上线。\n5. `actions/configure-pages@v5` — 确认 Pages 站点存在并拿到站点配置。\n6. `actions/upload-pages-artifact@v3`，`path: dist` — 把 `dist/` 打包成特殊 artifact。`dist` 正是 Vite 默认输出目录，无需额外配置。\n\n**Job 2 `deploy`（`needs: build`）：**\n- `environment: github-pages`，url 取 `${{ steps.deployment.outputs.page_url }}` — 部署后环境里会直接显示线上地址。\n- `actions/deploy-pages@v4` — 真正的发布动作：把 build job 传的 artifact 推上线。\n\n拆成两个 job 的意义是**权限隔离**：build 只需要读代码，deploy 才需要写 Pages 和 OIDC 权限。\n\n---\n\n## 每个权限为什么需要\n\n```yaml\npermissions:\n  contents: read   # actions/checkout 读取仓库源码与 lock 文件\n  pages: write     # 向 GitHub Pages API 创建 / 更新部署\n  id-token: write  # 申请 OIDC token，让 GitHub 校验部署者身份（无需 PAT）\n```\n\n- **`contents: read`** — `actions/checkout` 用 `GITHUB_TOKEN` 读取仓库内容（源码、`package.json`、`package-lock.json`）。只要读，给最小权限。\n- **`pages: write`** — `actions/deploy-pages` 要调用 Pages API 创建 Deployment、把 artifact 内容变成站点内容并更新线上版本。没有它 deploy job 必然失败。\n- **`id-token: write`** — deploy 时 GitHub 需要向 runner 发一张 OIDC token，用来证明「这次部署确实来自本仓库的这次工作流运行」。这是 Pages 部署的强制项，好处是**不需要配置 PAT 或任何长期密钥**，凭据由 GitHub 现场签发、且自动轮换。\n\n这三项之外没申请 `actions: write` 之类的写权限，作用域是最小的。\n\n---\n\n## 构建结果\n\n```\n&gt; tsc -b &amp;&amp; vite build\nvite v7.3.6 building client environment...\n✓ 29 modules transformed.\ndist/index.html                   0.53 kB │ gzip:   0.35 kB\ndist/assets/index-DfSJ3ydZ.css    8.52 kB │ gzip:   2.43 kB\ndist/assets/index-DbiQgJB1.js   191.18 kB │ gzip:  60.52 kB\n✓ built in 297ms\n```\n\n**`npm run build` 成功**，无 TS 报错、无 Vite 警告。改动前的基线构建也是通过的。\n\n---\n\n## 按约束，这一轮我没做的事\n\n- **没有推送** — 文件留在工作区（`git status`：`M vite.config.ts`、`?? .github/`），需要你自己 commit + push，工作流才会跑。\n- **没有改仓库设置** — 有一处想提醒你：`actions/configure-pages@v5` 默认 `enablement: true`，首次运行时若仓库还没开 Pages，它会**自动帮你启用** Pages（build_type 设为 workflow）。如果你希望必须手动在 Settings → Pages 里把 Source 选成 &quot;GitHub Actions&quot;，我可以把该步骤改成 `with: enablement: false`。\n\n推上去后第一次运行的成功标志：Actions 里 `Deploy to GitHub Pages` 两个 job 全绿，environment `github-pages` 显示 `https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/`。</pre></details></article></section><section data-ev-reading=\"search-text\" hidden><p class=\"p-ev-source\">10-25 排练 · 我们追问依据之后的那一次回答</p><article><h3>这一次回答的输入</h3><pre>input_tokens 503,843（第一轮报告那次 19,567，压缩后第一次 10,461）</pre></article><article><h3>它的结论</h3><pre>已经查完官方仓库和文档了。先说结论：**我上一轮那句「`enablement` 默认 `true`」是错的**，而且它直接影响你这轮的可行性。</pre></article><article><h3>它打开的网页（27 个，节选前 6 个）</h3><pre>https://raw.githubusercontent.com/actions/configure-pages/main/README.md\nhttps://raw.githubusercontent.com/actions/configure-pages/main/action.yml\nhttps://raw.githubusercontent.com/actions/configure-pages/v5/action.yml\nhttps://api.github.com/repos/actions/configure-pages/releases/latest\nhttps://api.github.com/repos/actions/deploy-pages/releases/latest\nhttps://api.github.com/repos/actions/upload-pages-artifact/releases/latest\n……</pre></article></section><section data-ev-reading=\"compact-message\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 自动压缩</p><article><h3>Codex 先发的这一条（不是我们写的）</h3><pre>You are performing a CONTEXT CHECKPOINT COMPACTION. Create a handoff summary for another LLM that will resume the task.\n\nInclude:\n- Current progress and key decisions made\n- Important context, constraints, or user preferences\n- What remains to be done (clear next steps)\n- Any critical data, examples, or references needed to continue\n\nBe concise, structured, and focused on helping the next LLM seamlessly continue the work.\n</pre></article></section><section data-ev-reading=\"after-compact\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 压缩之后</p><article><h3>交接摘要（开头）</h3><pre>Another language model started to solve this problem and produced a summary of its thinking process. You also have access to the state of the tools that were used by that language model. Use this to build on the work that has already been done and avoid duplicating work. Here is the summary produced by the other language model, use the information in this summary to assist with your own analysis:</pre><details><summary>展开该项完整原文</summary><pre>Another language model started to solve this problem and produced a summary of its thinking process. You also have access to the state of the tools that were used by that language model. Use this to build on the work that has already been done and avoid duplicating work. Here is the summary produced by the other language model, use the information in this summary to assist with your own analysis:\n## 任务目标\n用 GitHub Actions 把 Vite 项目发布到 GitHub Pages。\n\n- 仓库：`prompt-to-harness/ch02-pages-lab-20261025-claude`（remote 已配置，分支 `main`）\n- Pages 地址：`https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/`\n- 约束：只加工作流文件 + 必要的 Vite 配置；**不推送**；**这一轮不改仓库设置**；说明每个权限为什么需要\n- AGENTS.md 规则：**不新增依赖**；改代码后必须跑 `npm run build` 并报告结果\n\n## 已完成的改动（工作区，未 commit、未 push）\n\n**1. `vite.config.ts`（已修改）** — 加了 `base`，解决子路径部署资源 404：\n```ts\nexport default defineConfig({\n  base: &#x27;/ch02-pages-lab-20261025-claude/&#x27;,\n  plugins: [react()],\n})\n```\n改前产物是 `/assets/...`（站点根路径，❌）；改后是 `/ch02-pages-lab-20261025-claude/assets/...`（✅）。\n`src/index.css` 里的 `hero-lines.svg` 被 Vite 内联成 data URI，不受 base 影响。\n\n**2. `.github/workflows/deploy-pages.yml`（新增）** — 当前内容用\n`actions/checkout@v4`、`actions/setup-node@v4`（`node-version-file: &#x27;.nvmrc&#x27;` + `cache: &#x27;npm&#x27;`）、\n`actions/configure-pages@v5`、`actions/upload-pages-artifact@v3`（`path: dist`）、\n`actions/deploy-pages@v4`；顶层 `permissions: contents: read / pages: write / id-token: write`；\n`concurrency: {group: pages, cancel-in-progress: false}`；两个 job `build` + `deploy`（`needs: build`、\n`environment: github-pages`、`url: ${{ steps.deployment.outputs.page_url }}`）。\n\n`git status`：`M vite.config.ts`、`?? .github/`\n\n## 构建验证结果（已跑）\n- 基线构建：成功\n- 改 base 后 `npm run build`：**成功**，`tsc -b &amp;&amp; vite build`，29 modules transformed，\n  dist/index.html 0.53 kB / CSS 8.52 kB / JS 191.18 kB，built in 297ms，无 TS 报错无 Vite 警告\n- `npm ci --dry-run` 通过；lockfile 与 package.json 完全一致（react 19.1.1、react-dom 19.1.1、\n  @types/react 19.1.10、@types/react-dom 19.1.7、@vitejs/plugin-react 5.0.4、typescript 5.9.2、vite 7.3.6）\n- `.nvmrc` = 22.19.0\n\n## 已查证的官方结论（重要）\n- **我先前说「`configure-pages` 的 `enablement` 默认 `true`」是错的，已撤回。** 实际默认 `&#x27;false&#x27;`\n  （v3/v4/v5/v6/main 一致）。commit `5d8963e8`（2023-01-18）把默认从 true 翻成 false。\n  `src/context.js`: `core.getInput(&#x27;enablement&#x27;) === &#x27;true&#x27;`；`src/api-client.js` 的 JS 默认参数 `= true`\n  只在 undefined 时生效，context.js 永远传布尔值，故不可达。\n- enablement=false 且 Pages 未启用 → 步骤直接失败，报错\n  `Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions`\n- enablement 描述还写明需要**非 GITHUB_TOKEN** 的 token（PAT/GitHub App）。\n- **→ 用户必须手动设 Settings → Pages → Source = &quot;GitHub Actions&quot;**，否则首次运行会失败。\n- 最新 release（截至 2026-10-25）：checkout **v7.0.1**、setup-node **v7.1.0**、configure-pages **v6.0.0**、\n  upload-pages-artifact **v5.0.0**、deploy-pages **v5.0.1**；对应 major tag v7/v7/v6/v5/v5 均存在。\n- 官方 `starter-workflows/pages/static.yml` 用 checkout@v4 / configure-pages@v5 /\n  upload-pages-artifact@v3 / deploy-pages@v5；GitHub Docs 页用 checkout@v6 / upload-pages-artifact@v4 /\n  deploy-pages@v4 —— 官方自身版本号就不一致。\n- `starter-workflows/pages/` **无 Vite 模板**（仅 astro/gatsby/hugo/jekyll×2/mdbook/nextjs/nuxtjs/static）。\n- deploy-pages README 把 v4 标 &quot;Incompatible at this time&quot;，但那是 **GHES 列**，github.com 上无碍。\n- upload-pages-artifact v5 默认 `name: &#x27;github-pages&#x27;` 与 deploy-pages v5 默认 `artifact_name: &#x27;github-pages&#x27;` 一致，无需显式传。\n- configure-pages 另导出 `base_url/origin/host/base_path` 并设 `GITHUB_PAGES=true`（本工作流未用）。\n- setup-node v7.1.0 仍支持 `node-version-file` 与 `cache: &#x27;npm&#x27;`；其 NODE_AUTH_TOKEN 变更不影响 public registry。\n- 权限三项、needs/environment/url 结构已对 Docs 与 README 逐条核对无误。\n\n## 待用户决定（已把三个选项摆出，用户说&quot;要不要改等我决定&quot;）\n- **A** 保持现状 v4/v4/v5/v3/v4\n- **B** 只升 Pages 三件套：configure-pages@v6、upload-pages-artifact@v5、deploy-pages@v5\n- **C** 全升最新 major：v7/v7/v6/v5/v5\n\n## 下一步\n1. 等用户选 A/B/C —— **在此之前不要改文件**\n2. 按选择改 `.github/workflows/deploy-pages.yml` 的版本号\n3. 改完重跑 `npm run build` 并报告结果（AGENTS.md 硬性要求）\n4. 提醒用户手动设置 Settings → Pages → Source = &quot;GitHub Actions&quot;\n5. 不 push、不 commit、不改仓库设置\n\n## 用户偏好\n- 中文交流；要求逐项解释；要结论先行、别擅自动手\n- 曾质疑我的论断依据 → 涉及事实断言必须先查官方仓库/文档再回答\n- 明确说过&quot;不用起服务，dist 里的资源路径和页面我自己看&quot; → 不要起本地服务器（临时 server 已停、/tmp/pagesim 已删）</pre></details></article><article><h3>我们这一轮的话，接在摘要后面</h3><pre>按 C 改，改完跑一次 npm run build 告诉我结果。</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "refs": [
        {
          "kind": "read",
          "group": "GitHub Actions 官方仓库",
          "text": "configure-pages 的 action.yml（enablement 默认 'false'）",
          "url": "https://github.com/actions/configure-pages/blob/v6/action.yml"
        }
      ],
      "steps": [
        "它说了一句",
        "去查网页",
        "自动压缩",
        "压缩之后"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p48a 第 1 步，阅读视图指那一句 enablement】\n\n文件审完了，它在报告里说的话呢？排练这次，第一轮报告里有一句：configure-pages 默认 enablement 是 true，第一次运行会自动帮我们开 Pages。听起来很确定。可这时候请求里一个网页都没有，它没查过。这句话只能来自模型自己记得的东西。官方的 action.yml 写得很清楚，默认值是 false，链接在阅读模式。它记错了。",
        "【操作提示｜推进第 2 步，阅读视图指网页列表和 input_tokens 那一行】\n\n我们追问一句：依据是什么？查一下官方说明。它这才去查，一次回答里打开了 27 个网页，查完自己改口：上一轮那句是错的。注意两件事。第一，这些网页是模型服务那边打开的，没有弹批准框，和 gh 不一样。第二，这一次回答的输入有五十万 token，前一次只有两万左右：打开的网页都算进了 context，正文还作为引用附在它的回答里，之后每次请求都带着。",
        "【操作提示｜推进第 3 步，阅读视图指 CONTEXT CHECKPOINT COMPACTION 这条】\n\n这么一撑，用量超过了窗口的九成。我们发下一句话之前，Codex 先自动发了这一条：请写一份交接摘要。这就是前面讲过的压缩，这次是自动发生的。",
        "【操作提示｜现场回看｜推进第 4 步，阅读视图指交接摘要和我们那句话；讲完切 Terminal 的 claude-tap 标签页，看现场这次第一轮报告里有没有类似的说法、有没有查网页，讲相同和不同；现场没有出现就只讲课件。随后回课件 p49】\n\n压缩之后的请求里，只剩下我们说过的话、系统说明，和这份摘要；它打开过的网页、调用过的工具，都不在了。外面的信息，要进到请求里才算数：它没查，就只能凭记忆说；查了，进来的东西也有代价。所以它说的话，我们要问一句依据在哪一块。\n\n【切换｜Terminal · claude-tap 标签页 · 现场这次的记录】\n\n看看现场这一次：它的报告里有没有这类说法，有没有去查网页。"
      ],
      "teaching": [],
      "source": "index.html#p48a",
      "seconds": 120
    },
    {
      "id": "p49",
      "segment": "推送与发布",
      "label": "设置来源并推送",
      "title": "Codex 改 Pages 设置，推送由我们来做",
      "lead": "审过的部署配置让 Codex 提交，批准框里看清文件和提交说明；再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开的话，现在再改。Pages 的来源交给 Codex 用 gh 设为 GitHub Actions：每条命令弹出批准框，读过再批；改完在网页上刷新确认。最后由我们把当前分支推到自己的 origin、看 Actions 日志。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
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
        "【操作提示｜推进第 3 步 → 回练习项目根目录的 Terminal，由讲师本人执行 git push -u origin HEAD，不交给 Codex；推送 .github/workflows/ 被拒时核对 gh 登录是否带 workflow 权限。若第 2 步已为初始化空仓库推送过，直接查看重新运行的结果，不重复推送。随后在 Chrome“GitHub 仓库”标签页打开 Actions，点进本次运行看各步日志】\n\n最后由我们自己在终端执行 git push -u origin HEAD，把当前分支推到自己的仓库，并建立后续使用的跟踪关系。切到 Actions 页，能看到工作流正在运行，点进去可以看每一步的日志。",
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
      "title": "Codex 是怎样调用 gh 的？",
      "lead": "回看排练这次设置 Pages 来源的记录。模型发出的工具调用里是一条完整的 gh 命令，还带着“要在沙箱外运行”的标记和一句理由，批准框显示的就是这句。我们批准后命令执行，返回 404，站点还不存在；这段返回进了下一次请求，它据此改用 POST 创建，又申请一次，复查得到 build_type: workflow。它说了“执行修改前告诉我”也没有停下等回话，停住它的是批准框；我们点的同意本身不在记录里。排练这次一共批了两次。左侧按钮切换观察点，阅读视图展示原文节选。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;gh-call&quot;, &quot;gh-result&quot;, &quot;post-call&quot;, &quot;post-result&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"gh-call\" aria-pressed=\"true\"><b>完整命令</b><span>带着沙箱外标记和理由</span></button><button type=\"button\" data-ev-key=\"gh-result\" aria-pressed=\"false\"><b>工具返回</b><span>404：还没有站点</span></button><button type=\"button\" data-ev-key=\"post-call\" aria-pressed=\"false\"><b>据此创建</b><span>看到 404，改用 POST</span></button><button type=\"button\" data-ev-key=\"post-result\" aria-pressed=\"false\"><b>复查结果</b><span>build_type 是 workflow</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=gh-call\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"gh-call\" ><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 完整命令</p><article><h3>它发出的调用（exec 里的一段代码）</h3><pre>  cmd: &quot;echo &#x27;=== gh auth status (联网) ===&#x27;; gh auth status 2&gt;&amp;1; echo; echo &#x27;=== 环境变量里的 token(只看是否存在,不打印值) ===&#x27;; for v in GH_TOKEN GITHUB_TOKEN GH_ENTERPRISE_TOKEN; do if [ -n \\&quot;$(printenv $v)\\&quot; ]; then echo \\&quot;$v: 已设置\\&quot;; else echo \\&quot;$v: 未设置\\&quot;; fi; done; echo; echo &#x27;=== GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;&quot;,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态？&quot;,</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({\n  cmd: &quot;echo &#x27;=== gh auth status (联网) ===&#x27;; gh auth status 2&gt;&amp;1; echo; echo &#x27;=== 环境变量里的 token(只看是否存在,不打印值) ===&#x27;; for v in GH_TOKEN GITHUB_TOKEN GH_ENTERPRISE_TOKEN; do if [ -n \\&quot;$(printenv $v)\\&quot; ]; then echo \\&quot;$v: 已设置\\&quot;; else echo \\&quot;$v: 未设置\\&quot;; fi; done; echo; echo &#x27;=== GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;&quot;,\n  workdir: &quot;[project]&quot;,\n  yield_time_ms: 30000,\n  max_output_tokens: 6000,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态？&quot;,\n  prefix_rule: [&quot;gh&quot;, &quot;api&quot;]\n});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"gh-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 工具返回</p><article><h3>下一次请求带上的返回</h3><pre>  ✓ Logged in to github.com account MiaoDX (keyring)\n=== GET pages ===\n{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)</pre><details><summary>展开该项完整原文</summary><pre>Script completed\nWall time 0.0 seconds\nOutput:\n\n=== gh auth status (联网) ===\ngithub.com\n  ✓ Logged in to github.com account MiaoDX (keyring)\n  - Active account: true\n  - Git operations protocol: https\n  - Token: gh*_[token-masked]\n  - Token scopes: &#x27;gist&#x27;, &#x27;read:org&#x27;, &#x27;repo&#x27;, &#x27;workflow&#x27;\n\n=== 环境变量里的 token(只看是否存在,不打印值) ===\nGH_TOKEN: 未设置\nGITHUB_TOKEN: 未设置\nGH_ENTERPRISE_TOKEN: 未设置\n\n=== GET pages ===\n{&quot;message&quot;:&quot;Not Found&quot;,&quot;documentation_url&quot;:&quot;https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site&quot;,&quot;status&quot;:&quot;404&quot;}gh: Not Found (HTTP 404)\nEXIT=1\n</pre></details></article></section><section data-ev-reading=\"post-call\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 据此创建</p><article><h3>它的回答</h3><pre>- `GET /repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages` → **HTTP 404 Not Found**，说明**这个仓库还没有 Pages 站点**\n- 所以走**创建**路径（POST），不是 PUT 修改\ngh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow</pre><details><summary>展开该项完整原文</summary><pre>查清楚了：\n\n- `gh` 已登录，token 有效（scopes: `repo` / `workflow` / `read:org` / `gist`）——刚才那句 &quot;token 无效&quot; 是沙箱没网导致校验失败，不是真的坏了\n- `GET /repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages` → **HTTP 404 Not Found**，说明**这个仓库还没有 Pages 站点**\n- 所以走**创建**路径（POST），不是 PUT 修改\n\n要执行的两条命令：\n\n```bash\n# 1) 创建 Pages 站点，build_type=workflow（即 Source 选 &quot;GitHub Actions&quot;）\ngh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow\n\n# 2) 复查\ngh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages\n```</pre></details></article><article><h3>接着发出的调用，又申请到沙箱外</h3><pre>  cmd: &quot;echo &#x27;=== POST 创建 Pages 站点 ===&#x27;; gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 复查 GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 仓库默认分支 ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude --jq &#x27;.default_branch&#x27; 2&gt;&amp;1&quot;,\n  justification: &quot;是否允许 gh 调用 GitHub API 创建该仓库的 Pages 站点并设置 build_type=workflow？&quot;,</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({\n  cmd: &quot;echo &#x27;=== POST 创建 Pages 站点 ===&#x27;; gh api --method POST repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages -f build_type=workflow 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 复查 GET pages ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude/pages 2&gt;&amp;1; echo \\&quot;EXIT=$?\\&quot;; echo; echo &#x27;=== 仓库默认分支 ===&#x27;; gh api repos/prompt-to-harness/ch02-pages-lab-20261025-claude --jq &#x27;.default_branch&#x27; 2&gt;&amp;1&quot;,\n  workdir: &quot;[project]&quot;,\n  yield_time_ms: 60000,\n  max_output_tokens: 6000,\n  sandbox_permissions: &quot;require_escalated&quot;,\n  justification: &quot;是否允许 gh 调用 GitHub API 创建该仓库的 Pages 站点并设置 build_type=workflow？&quot;,\n  prefix_rule: [&quot;gh&quot;, &quot;api&quot;]\n});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"post-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 复查结果</p><article><h3>创建与复查的返回（摘出两个字段，完整 JSON 在原始记录）</h3><pre>=== POST 创建 Pages 站点 ===\nhtml_url: https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/\nbuild_type: workflow\n\n=== 复查 GET pages ===\nhtml_url: https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/\nbuild_type: workflow</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "完整命令",
        "工具返回",
        "据此创建",
        "复查"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p49a 第 1 步，阅读视图指 gh api 那一行，再指 sandbox_permissions 和 justification】\n\n刚才 Pages 的设置是 Codex 用 gh 改的。先看排练这次的记录。模型发出的是一个工具调用，里面是一条完整的 gh 命令，一字不差，可以和批准框里看到的那条对一对。参数里还多了两样：一个标记，说要在沙箱外运行；一句理由，“是否允许 gh 访问 api.github.com，以查询仓库的 Pages 站点状态”。批准框里显示的就是这句。默认沙箱没有网络，所以连只读的查询，也要我们批准。",
        "【操作提示｜推进第 2 步，阅读视图指 Not Found】\n\n我们批准以后，命令执行了。返回的是 gh 的输出：已经登录，查 Pages 得到 404，站点还不存在。这段返回进了下一次请求。",
        "【操作提示｜推进第 3 步，阅读视图指它的回答和 POST 那一行】\n\n模型就是看着这段返回决定下一步：站点不存在，按我们 Prompt 里写的，用 POST 创建。它把要运行的命令列了出来，可并没有停下来等我们回话，紧接着就申请执行。Prompt 里写的“执行修改前告诉我”停不住它，停住它的是批准框。",
        "【操作提示｜现场回看｜推进第 4 步，阅读视图指 build_type workflow；讲完切 Terminal 的 claude-tap 标签页，打开现场这次设置 Pages 来源的请求，指一条 gh 调用的命令、理由和下一次请求里的返回，数一数这次批了几次；截图前检查 gh 输出里的账号名和 html_url。随后回课件 p50】\n\n创建以后它又查了一次，build_type 已经是 workflow。那我们点的同意在哪里？记录里找不到这一下，只能看到批准之后命令真的执行了。排练这次一共批了两次。模型提出动作，工具执行，结果返回，再决定下一步，还是本章一开始看到的那个循环；模型只提出调用，执行由 Codex 负责，批不批由我们定。\n\n【切换｜Terminal · claude-tap 标签页 · 现场这次的记录】\n\n再看现场这次：找一条 gh 调用，看命令、看理由，再看下一次请求里的返回。批了几次、命令怎么写，和排练那次比一比。"
      ],
      "teaching": [],
      "source": "index.html#p49a",
      "seconds": 120
    },
    {
      "id": "p50",
      "segment": "推送与发布",
      "label": "Actions 绿了就行吗",
      "title": "Actions 成功了，页面就能用了吗？",
      "lead": "Actions 显示部署流程成功完成。接着检查公开页面：未登录窗口打开公开 URL；Network 面板没有 404；停用缓存后刷新仍然正常。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">Actions</span><p class=\"p-big\">✓ Build ✓ Deploy</p><p class=\"p-sub\">部署流程成功完成（排练这次 37 秒）</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">未登录窗口打开 URL<small>别人看到的就是这样</small></li><li data-reveal=\"2\">Network 没有 404<small>CSS、JS、图片都加载了</small></li><li data-reveal=\"3\">停用缓存后刷新仍正常<small>看到的是服务器上的版本</small></li></ul></div><p class=\"source-note\">排练这次：首次部署一次成功；全新的浏览器上下文（未登录）打开公开 URL，页面、CSS、JS 三个请求都是 200，停用缓存后刷新相同</p>",
      "steps": [
        "绿色对勾",
        "未登录窗口",
        "Network",
        "停用缓存再刷新"
      ],
      "script": [
        "【操作提示｜现场｜课件 p50 第 1 步；可切 Chrome“GitHub 仓库”标签页的 Actions，指认本次运行的实际绿色对勾，再回课件。录前从仓库 Settings → Pages 记下实际公开 URL】\n\nActions 显示绿色对勾，部署流程成功完成。讲师排练这次，Build 和 Deploy 两步一共三十多秒。接下来打开公开 URL，检查实际访问和资源加载。比如 base 写错时，部署流程可能完成，页面却因为资源路径错误显示为空白。",
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
      "title": "暂停自检：这些内容发到了哪里？",
      "lead": "每题先暂停，写出我们的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
      "html": "<style>body[data-mode=\"slides\"] #p51b .x-answer{display:none}body[data-mode=\"slides\"] #p51b .p-qrow h3{font-size:24px}body[data-mode=\"slides\"] #p51b .p-back-to{font-size:16px}</style><div class=\"p-qlist\"><div class=\"p-qrow\" data-reveal=\"0\"><span class=\"p-n\">1</span><div><h3>推送之前，profile.md 的内容离开过我们的电脑吗？去了哪里？</h3><p class=\"x-answer\">离开过：放个人信息时 Codex 读了这个文件，全文进了工具返回，之后每次请求都发给模型服务（讲师这里是 api.minimax.cn）。推送是另一件事，把仓库公开给所有人</p><span class=\"p-back-to\">回看：推送之前，context 早就发出去了</span></div></div><div class=\"p-qrow\" data-reveal=\"1\"><span class=\"p-n\">2</span><div><h3>它用 gh 查到的、用网页搜索查到的，分别是怎样进到请求里的？哪一个要我们批准？</h3><p class=\"x-answer\">gh 在我们电脑上执行，输出作为工具返回进入下一次请求，执行前要我们批准；网页由模型服务那边打开，不弹批准框，正文作为引用附在它的回答里，之后每次请求都带着</p><span class=\"p-back-to\">回看：它说的话，依据在哪一块；Codex 是怎样调用 gh 的</span></div></div><div class=\"p-qrow\" data-reveal=\"2\"><span class=\"p-n\">3</span><div><h3>Pages 设置是 Codex 用 gh 改的，在哪一步由我们说了算？请求记录里看得到吗？</h3><p class=\"x-answer\">在批准框：命令和理由写在模型发出的工具调用里，看得到；我们点的同意不在记录里，只能看到命令随后执行了。推送由我们自己执行</p><span class=\"p-back-to\">回看：Codex 是怎样调用 gh 的</span></div></div></div>",
      "steps": [
        "发给了谁",
        "外面的进来",
        "谁说了算"
      ],
      "script": [
        "【操作提示｜停留课件 p51b 第 1 步；读题后暂停】\n\n停一下，自己答三个问题。第一题：推送之前，profile.md 的内容离开过我们的电脑吗？去了哪里？",
        "【操作提示｜推进第 2 步】\n\n第二题：它用 gh 查到的、用网页搜索查到的，分别是怎样进到请求里的？哪一个要我们批准？",
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
      "lead": "本节推送前看过完整历史，留下审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。这一列内容发到了哪里：context 每次请求都发给模型服务，推送才把仓库公开给所有人；外面的信息要进到请求里才算数：gh 的输出作为工具返回进来，网页由模型服务去打开；gh 把动作送出去，每一条都经我们批准。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"0\"><h3>看清历史</h3><p>提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>审查配置</h3><p>base、权限、分支</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><h3>设置与推送</h3><p>Codex 改设置<br>我们批准、我们推送</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><h3>证明可用</h3><p>三项检查与 tag</p></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:18px\">发到了哪里：<b>context 每次发给模型服务；推送才公开；gh 的动作经我们批准</b></div>",
      "steps": [
        "本节做了什么",
        "发到了哪里"
      ],
      "script": [
        "【操作提示｜停留课件 p52 第 1 步，不切工具窗口】\n\n回看这一节：推送前看清整段历史，由我们判断能不能公开；Codex 写的配置审过再提交；Pages 来源交给 Codex 用 gh 设置，我们批准、我们推送；最后用三项检查证明页面可用，只推送一个 tag。个人主页现在有了一个公开 URL。",
        "【操作提示｜推进第 2 步，留在课件；本节到此结束，不预告 2.5】\n\n这一节也回答了本章最后一个问题：这些内容发到了哪里？context 每一次请求都发给模型服务，推送才把仓库公开给所有人。外面的信息要进到请求里才算数：gh 的输出作为工具返回进来；网页由模型服务去打开，正文附在回答里，会把 context 撑大；gh 把动作送出去，每一条都经过我们批准。以后让 Codex 替我们跑命令，都可以这样看。"
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
      "seconds": 300
    },
    {
      "label": "部署配置",
      "seconds": 330
    },
    {
      "label": "推送与发布",
      "seconds": 600
    }
  ]
};

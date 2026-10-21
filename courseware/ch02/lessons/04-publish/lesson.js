window.lesson = {
  "title": "发布上线，看 Codex 怎么用 gh",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.04",
  "summary": "第一次推送前看清即将公开的整段历史；Pages 来源交给 Codex 用 gh 设置，再在请求记录里看清这次调用；发布后用公开 URL 证明页面可用。",
  "scenes": [
    {
      "id": "p43",
      "segment": "公开之前",
      "layout": "lesson-cover",
      "label": "这一节做哪几步",
      "title": "这一节要做哪几步？",
      "lead": "第 1 章只在本地提交，这是第一次推送。推送以后，页面、源码和整段提交历史都会公开",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>审改动</li><li class=\"is-now\"><b>2.4</b>发布上线</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-flow\" style=\"--n:4;margin-top:22px\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-num\">1</span><h3>看清历史</h3><p>即将公开的提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">2</span><h3>审查配置</h3><p>Codex 写的部署工作流</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-num\">3</span><h3>设置与推送</h3><p>Codex 用 GitHub CLI（gh）改设置，人来推送</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><span class=\"p-num\">4</span><h3>证明可用</h3><p>公开 URL 上查三项</p></div></div>",
      "steps": [
        "回到地图",
        "推送之前",
        "推送与之后"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向章节地图上的 2.4，不切工具窗口。录前核对：2.3 的提交已完成、git status 干净，练习仓库此前没有推送过本地提交和 tag】\n\n到现在为止，我们所有的提交都只在自己电脑上，tag 也是本地的。这一节要第一次推送到 GitHub，把页面发布出去。",
        "【操作提示｜推进第 2 步，留在课件，指向前两步；本页不打开 GitHub】\n\n一共四步。推送之前先做两件事：第一，看清即将公开的历史。推送以后公开的有三样：页面、当前的源码，还有每一次提交，包括某次提交里出现过、后来又删掉的文件。第二，审查 Codex 写的部署配置。",
        "【操作提示｜推进第 3 步，留在课件，指向后两步；讲完进入 p44 再切 Chrome】\n\n第三步，Pages 的设置交给 Codex 用 GitHub CLI，也就是 gh 命令来改，每条命令由我们批准；推送由我们自己来做，它是这门课第一个对外的副作用，推出去就收不回来。改完之后，还会回到请求记录，看看 Codex 是怎样调用 gh 的。第四步，在公开 URL 上检查页面真的能用。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "推送前看清整段历史是发布前的一项检查，按实际内容判断，不预设有没有问题。第 3 步之后会回到请求记录，看 Codex 怎样调用 gh。"
        }
      ],
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
        "【操作提示｜课件 p44 第 1 步 → Chrome 新建“GitHub 仓库”标签页，在讲师自己的账号下新建空仓库，暂选 Private，不勾选 README、.gitignore 或许可证；账号资料不入镜。已有个人空仓库时直接打开，不重复创建。保留课件标签页，此时不推送】\n\n前面我们直接克隆了课程模板，一直在本地练习。现在要发布，先建立自己的远端仓库。在 GitHub 上新建一个空仓库，暂时设为私有，不初始化文件。我们已有源码和提交，后面会把检查过的这一份推过去。",
        "【操作提示｜推进第 2 步 → 复制个人空仓库的 HTTPS 地址；Terminal 在练习项目根目录运行 git remote -v，核对原来的 origin。按展开步骤执行 git remote set-url origin 个人仓库地址，再运行 git remote -v，核对 fetch 与 push 目标。回 GitHub 检查仓库为空；已有内容时停止并核对，不覆盖、不强推】\n\n刚克隆时，origin 指向课程模板。现在把它改成自己的仓库地址，再看一次，确认取回和推送的目标都属于自己的账号。这里只改本地连接地址，没有推送。\n\n再看 GitHub 上的仓库：公开还是私有，里面有没有已有内容。首次发布使用空仓库；如果已经有提交，就先查清来源和历史，不能当作空仓库直接覆盖。",
        "【操作提示｜回课件 p44 第 3 步；本页不进 Settings 改可见性。讲师仓库已是公开时，说明私有的同学到 p49 再改】\n\n本课用 GitHub Pages 发布，要求仓库是公开的，这里先说明发布时需要的公开范围。如果自己的仓库现在是私有的，先别急着改成公开。看清楚即将公开的内容，再做决定。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "使用学员自己的空远端仓库；从课程模板直接克隆的本地历史会随首次推送一起公开。已有远端含提交时先核对历史和分支，不覆盖或强推。"
        }
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
      "source": "index.html#p44",
      "seconds": 90
    },
    {
      "id": "p45",
      "segment": "推送前检查",
      "label": "即将公开的历史",
      "title": "列出即将公开的提交、文件和作者",
      "lead": "首次向个人空仓库推送时，当前分支的全部历史都会公开。检查每次提交改过的文件、实际内容和作者信息，包含后来删掉的文件；不能只看当前目录或与课程模板相比的新增提交。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git log --stat HEAD\ngit log -p HEAD\ngit log --format=&#x27;%an &lt;%ae&gt;&#x27; HEAD | sort -u\"><div class=\"dim\">$ git log --stat HEAD</div><div>homepage-v1: 补充项目经历</div><div>  src/App.tsx</div><div class=\"dim\">  …… 再往下是课程模板带来的提交</div><div class=\"dim\">$ git log -p HEAD</div><div class=\"dim\">$ git log --format='%an &lt;%ae&gt;' HEAD | sort -u</div><div>示例同学 &lt;student@example.com&gt;</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>课程模板带来的提交</h3><p>克隆时就有的历史，也会一起公开</p></div><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>2.2 的项目经历</h3><p>关于具体的人的事实</p></div></div><p class=\"source-note\">输出为示意，作者为占位；实际检查当前分支的完整历史</p>",
      "steps": [
        "列出提交与作者",
        "作者与模板提交",
        "个人内容"
      ],
      "script": [
        "【操作提示｜课件 p45 第 1 步 → Terminal 在练习项目根目录依次运行 git log --stat HEAD、git log --format='%an <%ae>' HEAD | sort -u。录前离屏检查作者输出，真实邮箱不出镜；画面中的姓名和邮箱仍用占位示意。本页不以 origin/main..HEAD 限定检查范围】\n\n个人远端现在是空仓库，第一次推送会带过去当前分支的完整历史。我们先运行 git log --stat HEAD，列出这些提交和每次动过的文件。某个文件后来删掉了，早先提交里的内容仍会跟着公开。\n\n作者命令列出整段历史里的姓名和邮箱，包括课程模板原有的提交。先把将公开的范围看完整，不能只查自己后来新增的提交。",
        "【操作提示｜回课件推进第 2 步；可切回 Terminal，在 --stat 输出里指认课程模板带来的较早提交，作者行只指位置、不念出邮箱】\n\n看看列出了什么。第一样很容易被忽略：每个提交都记着作者的姓名和邮箱，那是本机 Git 配置里写的，推送以后所有人都能看到。第二样是课程模板带来的提交：克隆时就在历史里，不是我们写的，但推送以后也一起公开。",
        "【操作提示｜推进第 3 步 → 同一 Terminal 运行 git log -p HEAD，翻到 src/App.tsx 里项目经历的新增行，按 q 退出分页；历史里有截图等二进制文件时另行打开查看。说完暂停提示后回课件】\n\n还有 2.2 刚写进去的项目经历，这是关于具体的人的事实。文件列表只能告诉我们“有什么”，不能告诉我们“能不能公开”。所以还要运行第三条，git log -p，把每一处实际改动的文字展开读一遍。截图这类二进制文件，要另外打开看。请暂停视频，在自己的项目里运行这几条命令。"
      ],
      "teaching": [
        {
          "title": "命令说明",
          "text": "HEAD 表示当前分支版本；三个 log 命令检查其全部可达历史，不依赖个人空仓库是否已有 origin/main，也不遗漏课程模板带来的提交。已有远端内容时另核对远端历史；不强推。"
        },
        {
          "title": "讲师提示",
          "text": "本页只依赖本章产生的内容（提交作者、课程模板带来的提交、2.2 的项目经历），不要求学员保留之前各章的证据文件；学员仓库里有更早的记录文件时，一并按同样方法检查。画面中的作者用占位，不展示讲师真实邮箱。"
        }
      ],
      "repro": {
        "label": "推送前：检查完整历史",
        "steps": [
          {
            "text": "在练习项目根目录运行。用 --stat 查看提交和文件，再用 -p 查看每次改动；作者命令列出当前分支历史里的姓名与邮箱。",
            "code": "git log --stat HEAD\ngit log -p HEAD\ngit log --format='%an <%ae>' HEAD | sort -u"
          },
          {
            "text": "已有远端提交时，先核对远端历史与当前分支，再决定如何继续；不要强推绕过历史冲突。",
            "code": ""
          }
        ],
        "note": ""
      },
      "source": "index.html#p45",
      "seconds": 90
    },
    {
      "id": "p46",
      "segment": "推送前检查",
      "label": "能让所有人看到吗",
      "title": "这些内容，可以让所有人看到吗？",
      "lead": "逐项对照判断清单，由人决定。以提交作者邮箱为例：它是不是你愿意公开的邮箱？不愿意，就先停下，不推送。改用 GitHub 的 noreply 邮箱只影响之后的提交，已有提交里的邮箱要改写历史才能换掉，做法见本页链接。讲师演示里的项目经历借自两位讲师，本人同意公开；写到别人的事，要先问过对方。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr)\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">每个提交里都有</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.6\">Author: 示例同学<br>&lt;<b>你的邮箱</b>&gt;</p><p class=\"p-sub\">不想公开：先停；换 noreply 只管以后的提交</p></div><ul class=\"p-checks\" style=\"gap:6px\"><li class=\"is-no\" data-reveal=\"1\">有没有 secret<small>API 密钥、令牌、配置文件</small></li><li class=\"is-no\" data-reveal=\"1\">有没有未经同意的他人信息<small>别人的姓名、联系方式、经历、照片</small></li><li class=\"is-no\" data-reveal=\"1\">截图里有没有隐私<small>桌面、通知、浏览器标签</small></li><li data-reveal=\"2\">首屏的名字和简介，是你自己的吗<small>还是课程示例里的“示例同学”</small></li><li data-reveal=\"2\">本人愿意公开<small>包括作者邮箱</small></li></ul></div><div class=\"p-bar\" data-reveal=\"3\">有一项不行，<b>先停下，不推送</b></div>",
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
        "是不是你自己的",
        "停止条件"
      ],
      "script": [
        "【操作提示｜停留课件 p46 第 1 步，指向左侧 Author；不现场改 git config，不演示改写历史。官方文档链接在阅读模式本页底部，录制时不打开】\n\n先看刚才列出的作者。每个提交里都写着作者的姓名和邮箱，来自本机的 Git 配置。如果那是私人邮箱，推送以后它就挂在公开历史里了。不想公开，就先停下，把 Git 的邮箱换成 GitHub 提供的 noreply 邮箱。注意，改配置只影响之后的提交，已经做过的提交还带着旧邮箱，要换掉它们就得改写历史。改写历史不在本课范围，GitHub 官方文档有说明，链接放在阅读模式这一页的底部。",
        "【操作提示｜推进第 2 步；需要举证时切回 Terminal 的 git log -p 输出，按实际内容逐项判断，不预写“没有”。发现 secret 立即停录处理，不展示具体值】\n\n再对照判断清单，前三项要确认“没有”：有没有 secret，比如 API 密钥、令牌，或者整份配置文件；有没有未经同意的他人信息，比如别人的姓名、联系方式、经历和照片；截图里有没有隐私，比如桌面上的文件名、弹出的通知。2.2 的项目经历借用了我们两位讲师的经历，这是本人同意公开的；我们如果写了别人的事，要先问过对方。",
        "【操作提示｜推进第 3 步，留在课件；按讲师本人的实际意愿判断，不预写“可以公开”。讲师演示的首屏沿用课程示例，如实说明】\n\n接下来两项，问的是你自己。第一项：首屏的名字和简介，是你自己的，还是课程示例里的“示例同学”？讲师演示的首屏沿用的是课程示例；你的页面要公开，首屏写的应该是你自己。\n\n最后一项，是本人愿不愿意公开，作者邮箱也算在里面。这是每个人对自己内容的判断，没有标准答案：有人愿意用常用邮箱，有人只用 noreply，都合理。",
        "【操作提示｜推进第 4 步，留在课件。实际结论是暂停时如实说明，后续推送不录】\n\n只要有一项不行，就先停下，不推送。推出去就收不回来了。怎样从历史里去掉一个文件、换掉旧邮箱，看 GitHub 官方文档；那些操作会改写历史，不在本课范围，做之前要人工复核。请暂停视频，逐项判断自己的内容，决定推送还是先停下。"
      ],
      "teaching": [
        {
          "title": "参考链接",
          "text": "设置提交邮箱、从仓库历史中删除敏感数据两篇 GitHub 官方文档，见本页“原文与链接”。两者都会涉及改写历史，主课不演示，做之前人工复核（2026-10-05 讲师确认：不做配套页，口播指向官方文档）。"
        },
        {
          "title": "核对记录",
          "text": "GitHub 文档（2026-10-03 查阅）：从命令行推送的提交使用本地 Git 配置的 user.email；修改配置只影响之后的提交；GitHub 为账号提供 noreply 邮箱。noreply 地址的具体格式与相关隐私设置按录制时的 GitHub 设置页核对，画面不写具体格式。"
        },
        {
          "title": "讲师提示",
          "text": "2026-10-03 讲师确认：示范例子由“第 1 章环境记录中的系统用户名”改为提交作者邮箱，使本节不依赖之前各章的证据文件。录制时按讲师实际情况判断，不预写“可以公开”。"
        },
        {
          "title": "跟做产出",
          "text": "做过推送前检查：终端输出自己看过即可，不写记录文件；五项判断由自己作出，结论是推送还是暂停。"
        }
      ],
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
      "lead": "部署要两样东西：一个 GitHub Actions 工作流，在 GitHub 的机器上构建并发布页面；还有 Vite 的 base 配置，让资源路径对上仓库名。这一轮 Codex 只写文件；仓库设置留到推送前单独一步，推送始终由人来做。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>写清仓库名和地址</b><small>别让它猜，也别抄讲师的</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>不推送，这轮不改设置</b><small>设置单独一步，推送留给人</small></span></li><li data-reveal=\"2\"><span><b>说明每个权限</b><small>下一页逐项审查</small></span></li></ol></div>",
      "steps": [
        "仓库名",
        "不推送",
        "解释权限"
      ],
      "script": [
        "【操作提示｜停留课件 p47 第 1 步，指向 Prompt 的 Context；录前把 <我的仓库名>、<用户名> 换成讲师录制仓库的实际值，复制前再核对一次】\n\n部署需要两样东西。一个是 GitHub Actions 工作流：每次推送后，GitHub 在它自己的机器上安装依赖、构建，再把 dist 发布成页面。另一个是 Vite 的 base 配置：页面放在仓库名这一级路径下，资源路径要跟着改。Context 里写清自己的仓库名和 Pages 地址，不要让它猜，更不要照抄讲师的仓库名。",
        "【操作提示｜推进第 2 步，留在课件，指向 Constraints；本步不打开 GitHub 设置】\n\nConstraints 里最重要的一句：不推送，这一轮也不改仓库设置。推送是把内容公开出去的那一下，始终由我们自己执行。仓库设置稍后也会交给 Codex，但那是单独的一步，每条命令都要我们批准。",
        "【操作提示｜推进第 3 步 → 切 Terminal，在练习项目根目录的 Codex 会话里粘贴替换好的部署 Prompt 并发送；生成的文件以实际为准。出现推送、改仓库设置或安装依赖这类超出 Prompt 的请求，不批准。生成结束后回课件 p48】\n\n我们还要求它说明每个权限为什么需要，下一页要逐项审查。请暂停视频，把仓库名和地址换成自己的，提交 Prompt。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "Codex 生成的文件以录制实际为准；不提供兜底参考工作流，出错时让 Codex 再试。"
        }
      ],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "部署配置",
      "label": "工作流能直接用吗",
      "title": "Codex 写的配置，逐项审查再推送",
      "lead": "四项逐一核对：base 是否等于自己的仓库名；资源路径会不会因此对上；工作流权限是不是只要了发布所需的；触发分支是不是自己的默认分支。有一项不对就不推送，让 Codex 改。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:34px\"><div class=\"p-fn\">vite.config.ts · .github/workflows/deploy.yml（摘录）</div><div class=\"p-ln\"><i>1</i><code>base: <span class=\"s\">'/my-homepage/'</span>,</code></div><div class=\"p-ln\"><i>2</i><code>on:</code></div><div class=\"p-ln\"><i>3</i><code>  push:</code></div><div class=\"p-ln\"><i>4</i><code>    branches: [main]</code></div><div class=\"p-ln\"><i>5</i><code>permissions:</code></div><div class=\"p-ln\"><i>6</i><code>  contents: read</code></div><div class=\"p-ln\"><i>7</i><code>  pages: write</code></div><div class=\"p-ln\"><i>8</i><code>  id-token: write</code></div><div class=\"p-ln\"><i>9</i><code><span class=\"c\"># … npm ci → build → 核对前缀 → 上传 dist</span></code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li><li data-reveal=\"1\"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li><li data-reveal=\"2\"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>触发分支</b><small>等于自己的默认分支</small></span></li></ol></div><p class=\"source-note\">左侧摘自 Codex 按 p47 的 Prompt 实际生成的文件（仓库名用示例 my-homepage）；2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开。你的文件写法会不同，按实际审</p>",
      "steps": [
        "base",
        "资源路径",
        "权限",
        "触发分支"
      ],
      "script": [
        "【操作提示｜课件 p48 第 1 步 → 切 VS Code 打开 Codex 实际改动的 vite.config.ts，指认 base 的值；左侧是一次实际生成的摘录，按当次文件讲】\n\nCodex 生成了两处改动。第一项看 vite.config.ts 里的 base。页面发布后的地址是“用户名点 github 点 io 斜杠仓库名”，所以 base 必须是斜杠、自己的仓库名、斜杠。抄错一个字母，页面就会白屏。",
        "【操作提示｜推进第 2 步 → Terminal 在练习项目根目录运行 npm run build，VS Code 打开 dist/index.html，指认 CSS、JS 引用是否以 /<仓库名>/ 开头；build 失败时展示第一条有用报错，让 Codex 在原范围内修，修完重跑】\n\n第二项，资源路径。本地运行 npm run build，打开 dist/index.html，看引用的 CSS 和 JS 路径是不是以斜杠仓库名开头。这是检查 base 有没有生效的直接证据。",
        "【操作提示｜推进第 3 步 → VS Code 打开 .github/workflows/ 下实际生成的工作流文件（文件名以实际为准），指认 permissions 段，对照 Codex 回复里的权限说明；多出写权限就地追问。Node 版本与 .nvmrc 不一致也在这里指出】\n\n第三项，工作流权限。常见的是三项：读取仓库内容；写入 Pages；获取部署用的身份令牌。每一项都应该能说出用途，这就是我们让 Codex 解释权限的原因。多出来的写权限，比如能改仓库内容，要问清楚为什么。讲师这次，Codex 在文件里给每项权限都写了一句理由，正好对照着读。",
        "【操作提示｜推进第 4 步，同一文件定位 on → push → branches，与 Terminal 的 git branch --show-current 核对；有一项不对就回 Codex 改，改完重审。随后回课件 p49】\n\n第四项，触发分支：推送到哪个分支时运行。要和仓库的默认分支一致，course-starter 默认是 main。四项有一项不对，就不推送，让 Codex 改，改完再审一遍。工作流和配置也是即将公开的内容，下一页提交以后，还要再看一遍待推送的提交。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "左侧是 2026-10-20 一次实际生成的摘录，录制时换成当次生成的文件逐行讲。Node 版本若与 .nvmrc 不一致，也在这里指出。不准备错误的 base 分支。"
        },
        {
          "title": "实测记录",
          "text": "2026-10-20 课程基线（能力目录开、推理档位 max，codex exec -s workspace-write）在 2.2 改好的个人主页上跑 p47 的 Prompt，仓库名填 my-homepage：只改了 vite.config.ts（加 base: '/my-homepage/'，并附中文注释）和新增 .github/workflows/deploy.yml。权限是 contents: read、pages: write、id-token: write，每项都写了理由；触发是推送 main 和手动触发；Node 版本读 .nvmrc；还自己加了一步“核对资源前缀与 Pages 路径一致”的检查。它调用了 14 次网页搜索工具（其中 5 次打开各个 action 的 GitHub releases/latest，其余查了官方 starter 工作流和 configure-pages 的说明），确认用 checkout v7、setup-node v7、configure-pages v6、upload-pages-artifact v5、deploy-pages v5（讲师同日用 gh 核对，与最新版本一致）。本地 npm run build 通过，产物资源以 /my-homepage/assets/ 开头。那次运行里依赖目录因讲师准备失误不完整，Codex 为补齐依赖读过工作区外的目录（另一个项目的 node_modules 和 ~/.npm 缓存）：可写权限限制的是写入位置，读取几乎不受限。"
        },
        {
          "title": "跟做产出",
          "text": "工作流与 Vite 配置的审查结论：四项是否都对，不对的让 Codex 改完再审。"
        }
      ],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p49",
      "segment": "推送与发布",
      "label": "设置来源并推送",
      "title": "Codex 改 Pages 设置，推送由我们来做",
      "lead": "提交部署配置，再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开时现在再改。Pages 的来源交给 Codex 用 gh 设为 GitHub Actions：每条命令弹出批准框，读过再批；改完在网页上刷新确认。最后由人把当前分支推到自己的 origin、看 Actions 日志。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-num\">1</span><h3>提交配置</h3><p>审过的两处改动</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-num\">2</span><h3>再看历史</h3><p>待推送的全部提交</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">3</span><h3>Codex 改设置</h3><p>每条命令由你批准</p></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"2\"><span class=\"p-num\">4</span><h3>人来推送</h3><p class=\"p-mono\">git push -u origin HEAD</p></div></div><div class=\"p-grid\" style=\"--n:3;gap:14px;margin-top:16px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>批准框里看什么</h3><p>命令和理由；修改类命令看清方法和对象</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>网页上确认</h3><p>Settings → Pages，刷新后来源是 GitHub Actions</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"3\"><h3>失败时出在哪一环</h3><p>Actions 日志 → build 输出 → Network 里哪个资源 404</p></div></div>",
      "steps": [
        "提交并复查",
        "Codex 改设置",
        "人来推送",
        "失败时"
      ],
      "script": [
        "【操作提示｜课件 p49 第 1 步 → Terminal 在练习项目根目录 git add 审过的工作流文件和 vite.config.ts（写明路径，不用 git add .），git diff --cached 看过再提交，提交说明按实际写；然后重跑 p45 的三条推送前检查命令，核对新增的提交】\n\n检查都过了，先提交部署配置。提交以后，再运行一遍推送前检查的那几条命令：这次列出的才是最终要公开的全部提交，包括刚提交的工作流和配置。",
        "【操作提示｜推进第 2 步。录前确认 gh 已由讲师本人登录（gh auth login --scopes workflow），令牌不放环境变量、不贴进对话。仓库需公开时，先在 Chrome“GitHub 仓库”标签页的 Settings 改可见性。Terminal 另开标签页，在练习项目根目录运行 CLEAN_CODEX_GH=1 tools/clean-codex.sh --tap 新开 Codex 会话（学员不必加 --tap），粘贴本页“请求原文”第 1 条；批准框里出现 gh auth login 说明启动时没带开关，拒绝、退出后带上开关重开；每个批准框先读命令和理由，只批本次、不选以后不再询问，修改类命令核对方法和仓库。若个人空仓库暂时不能启用来源，先由讲师执行第 3 步的已审查推送，再完成来源设置，并在 Actions 重新运行部署；目标必须是个人 origin；这一分支口播不讲。完成后回 Chrome 打开 Settings → Pages 并刷新，确认 Source 为 GitHub Actions。批准次数以当天为准，不预告。没装 gh 时在网页手动设置的做法只在展开步骤里，口播不讲。界面按录制时的 GitHub 版本核对】\n\n推送之前，先把 GitHub 这边准备好。仓库如果还是私有的，现在再改成公开，因为待公开的内容已经看过了。\n\n接着把 Pages 的来源设成 GitHub Actions，工作流要在启用之后才能部署。这一步交给 Codex。启动时在命令前面加上 CLEAN_CODEX_GH=1，让干净环境里的 Codex 用上你本机已经登录的 gh；然后发送页面上“请求原文”里的这段话。\n\nCodex 每次访问 GitHub，都会弹出批准框，写着一条命令和它给的理由。查询类的，读一遍就批。修改类的，看清方法和对象：改的是不是自己的仓库，是不是 Pages。\n\n改完以后，它会用命令再查一次，但它看不到网页。我们自己打开 Settings 里的 Pages，刷新，确认来源已经是 GitHub Actions。",
        "【操作提示｜推进第 3 步 → 回练习项目根目录的 Terminal，由讲师本人执行 git push -u origin HEAD，不交给 Codex；推送 .github/workflows/ 被拒时核对 gh 登录是否带 workflow 权限。若第 2 步已为初始化空仓库推送过，直接查看重新运行的结果，不重复推送。随后在 Chrome“GitHub 仓库”标签页打开 Actions，点进本次运行看各步日志】\n\n最后由我们自己在终端执行 git push -u origin HEAD，把当前分支推到自己的仓库，并建立后续使用的跟踪关系。切到 Actions 页，能看到工作流正在运行，点进去可以看每一步的日志。",
        "【操作提示｜推进第 4 步；实际失败时保留真实过程，按 Actions 日志 → 本地 npm run build → Network 的顺序定位。若先推送后才设来源导致失败，在 Actions 页对失败的运行点 Re-run 并确认新运行成功。没有失败只讲课件，不伪造】\n\n第一次部署不一定成功。失败了，按顺序找出在哪一环：Actions 日志里哪一步红了；同样的 build 在本地能不能复现；页面打开了，Network 面板里哪个资源是 404。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "顺序是提交 → 复查待推送提交 → 必要时改为公开 → Codex 设置 Pages 来源（人批准、网页确认）→ 推送；GitHub 文档要求先为仓库启用自定义工作流（2026-10-05 查阅 Using custom workflows with GitHub Pages）。若录制时先推送了，在 Actions 页对失败的运行点 Re-run，并确认新运行成功。Pages 来源设置界面按录制时 GitHub 版本核对。讲师录制时若真的失败，失败过程保留在本页。首次部署若自然出错，就地从 Actions 日志、build 输出和 Network 定位并保留；没有出错不伪造。"
        },
        {
          "title": "讲师提示",
          "text": "推送由人执行；设置交给 Codex 时，批准框就是人机边界（回扣 1.6）。gh 由学员本人登录（环境检查单），令牌不贴进对话、不放环境变量。Codex 用 CLEAN_CODEX_GH=1 tools/clean-codex.sh 启动，干净环境里才读得到本机的 gh 登录（2026-10-21 实测）；不带开关时 gh 报未登录，Codex 会自己申请运行 gh auth login，这一条要拒绝。预检见 courseware/ch02/materials/pages-source/：临时仓库上 13 次批准，修改命令先错用 POST 再改 PUT；录制仓库的实际次数和说法以当天为准，画面不预告。"
        }
      ],
      "repro": {
        "label": "请求原文",
        "steps": [
          {
            "text": "用 CLEAN_CODEX_GH=1 tools/clean-codex.sh 新开 Codex 会话（让它用上本机的 gh 登录），发送这段请求；每条命令弹出批准框时先读命令和理由",
            "code": "请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查有没有 Pages 站点：没有就用 POST 创建，已有就用 PUT 修改，都设 build_type=workflow。执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。"
          },
          {
            "text": "改完在网页上确认（没装 GitHub CLI 时直接在这里手动选择 GitHub Actions）",
            "code": "仓库页 → Settings → Pages → Build and deployment → Source"
          }
        ],
        "note": "交给 Codex 的请求不推送。若个人空仓库暂时不能启用 Pages 来源，先由人推送已检查的内容，再完成来源设置并在 Actions 重新运行部署；推送目标必须是自己的 origin。"
      },
      "source": "index.html#p49",
      "seconds": 120
    },
    {
      "id": "p49a",
      "segment": "推送与发布",
      "label": "Codex 怎样调用 gh",
      "title": "刚才 Codex 是怎样调用 gh 的？",
      "lead": "打开刚才设置 Pages 来源那次会话的请求记录，找到相关的那几次请求。模型发出的工具调用里是一条完整的 gh 命令；需要批准的调用，还带着“要在沙箱外运行”的标记和一句理由，就是批准框里显示的那句。我们点了同意，记录里看不到这一下，只看到命令随后执行、返回了输出；下一次请求把这段返回带上，模型据此决定下一步。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">记录里的一次 gh 调用（exec 里的一段代码）</div><div class=\"p-ln\"><i>1</i><code>exec_command({ cmd: \"gh api repos/…/pages\",</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>2</i><code>sandbox_permissions: \"require_escalated\",</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>3</i><code>justification: \"Allow gh CLI to query … Pages …?\" })</code></div><div class=\"p-ln\" data-reveal=\"2\"><i>4</i><code>返回：{\"message\":\"Not Found\", … \"404\"}</code></div><div class=\"p-ln add\" data-reveal=\"2\"><i>5</i><code>下一次：用 POST 创建站点，再查一次</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>完整命令</b><small>模型提出的调用，一字不差</small></span></li><li data-reveal=\"1\"><span><b>批准申请写在调用里</b><small>标记加理由，批准框照着显示</small></span></li><li data-reveal=\"2\"><span><b>下一次请求带上返回</b><small>模型据此决定下一步</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>点同意的是我们</b><small>记录里只看到命令执行了；这次批了 9 次</small></span></li></ol></div><p class=\"source-note\">字段名照记录原样，值有删节。讲师在组织下临时仓库上的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max，交互界面）；命令写法和调用次数随版本、模型和仓库状态变化</p>",
      "steps": [
        "完整命令",
        "批准申请",
        "下一次请求",
        "谁点的同意"
      ],
      "script": [
        "【操作提示｜课件 p49a 第 1 步 → 切浏览器的 claude-tap 查看器，打开 p49 设置 Pages 来源那次会话的请求，指认一条 gh 工具调用里的完整命令；按实际记录讲。截图前检查 gh 输出里的账号信息和域名，令牌不出镜】\n\n刚才 Pages 的设置是 Codex 用 gh 改的。回到请求记录，找到那几次请求。模型这一侧发出的是一个工具调用，里面是一条完整的 gh 命令，一字不差，可以和刚才批准框里看到的那条对一对。",
        "【操作提示｜推进第 2 步，在查看器里指认这段代码参数里的 sandbox_permissions 和 justification 两个字段】\n\n再看这条调用的参数。讲师用的配置下，模型写的是一小段代码，去调用执行命令的工具；除了命令本身，参数里还多了两样：一个标记，说要在沙箱外运行；一句理由，大意是“允许 gh 访问 GitHub 去查 Pages 设置吗”。这就是批准框里显示的那句话。默认沙箱没有网络，所以连只读的查询，也要我们批准。",
        "【操作提示｜推进第 3 步，在查看器里打开下一次请求，指认上一条命令和返回出现在请求里】\n\n命令执行完，返回的是 gh 的输出：这次是 404，站点还不存在。再看下一次请求：这条命令和它的返回都被带上了。模型就是看着这段返回，决定下一步：站点还不存在，就按我们 Prompt 里写的，用 POST 把它创建出来。讲师这次，它第一次把参数写错了，看到 gh 的报错，自己改对了，再查一次确认。这就是第 1 章拆开执行过程时看过的那个循环。",
        "【操作提示｜推进课件第 4 步；按讲师这份记录讲，录制版本不同就按实际说】\n\n那我们点的同意在哪里？记录里找不到这一下。我们只能看到，批准之后命令真的执行了，返回了输出。讲师这次一共批了 9 次，连只读的查询也要批。还有一点：Prompt 里说了“执行修改前告诉我要运行的命令”，它列出命令以后并没有停下来等我们回话，真正让它停住的，是批准框。模型只提出调用，执行由 Codex 负责，批不批由我们定。"
      ],
      "teaching": [
        {
          "title": "实测记录",
          "text": "2026-10-20 在组织下的临时公开仓库（Pages 尚未开启）上用交互界面发 p49 的原话，能力目录开、推理档位 max：15 次对话请求、16 次工具调用，其中 9 次申请在沙箱外运行，都由人批准。能力目录开时是 code mode：每次调用是 exec 工具里的一小段 JavaScript，调 tools.exec_command，申请批准的标记 sandbox_permissions: require_escalated、justification（这次是英文）、prefix_rule 写在这段代码的参数里。过程：沙箱里 gh auth status 误报登录无效、gh api 连不上网；检查环境变量时自己用 sed 把值遮住；申请在沙箱外运行后确认仓库权限，查到 Pages 还不存在（404）；看了 workflow 文件；列出要执行的命令后没有停下等人；第一次 POST 把参数写成 gh 不支持的 -d，看到报错后改成 -f，创建成功；复查 build_type 为 workflow；还主动查了推送时那次失败的部署和日志。批准这一下本身不出现在请求里。同日能力目录关的两次运行：个人仓库 7 次批准（先 PUT 404 再 POST），组织仓库 6 次批准（直接 POST）。"
        },
        {
          "title": "讲师提示",
          "text": "录制时在 claude-tap 里打开 p49 那次会话的请求，按实际记录逐条指认；命令写法、调用次数和 PUT/POST 的先后以录制为准。复查返回里的 html_url 会露出账号或域名，截图前检查；gh auth status 和 gh api user 的输出含账号名，令牌不能出镜。同日一次能力目录关的运行里，它为确认登录申请过一条含 gh auth token 的命令（自己接了 sed 只露前 4 个字符和长度，没有泄露）：读到令牌的命令哪怕看起来做了遮盖，也值得在批准框前停一下，这是本页“批不批由我们定”最好的例子；录制时出现就就地讲，不出现不提。“执行修改前告诉我”没有让它停下，真正停住它的是批准框：这一句可以回扣 1.3。"
        }
      ],
      "source": "index.html#p49a",
      "seconds": 120
    },
    {
      "id": "p50",
      "segment": "推送与发布",
      "label": "Actions 绿了就行吗",
      "title": "Actions 成功了，页面就能用了吗？",
      "lead": "Actions 显示部署流程成功完成。接着检查公开页面：未登录窗口打开公开 URL；Network 面板没有 404；停用缓存后刷新仍然正常。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">Actions</span><p class=\"p-big\">✓ deploy 成功</p><p class=\"p-sub\">部署流程成功完成</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">未登录窗口打开 URL<small>别人看到的就是这样</small></li><li data-reveal=\"2\">Network 没有 404<small>CSS、JS、图片都加载了</small></li><li data-reveal=\"3\">停用缓存后刷新仍正常<small>看到的是服务器上的版本</small></li></ul></div>",
      "steps": [
        "绿色对勾",
        "未登录窗口",
        "Network",
        "停用缓存再刷新"
      ],
      "script": [
        "【操作提示｜课件 p50 第 1 步；可切 Chrome“GitHub 仓库”标签页的 Actions，指认本次运行的实际绿色对勾，再回课件。录前从仓库 Settings → Pages 记下实际公开 URL】\n\nActions 显示绿色对勾，部署流程成功完成。接下来打开公开 URL，检查实际访问和资源加载。比如 base 写错时，部署流程可能完成，页面却因为资源路径错误显示为空白。",
        "【操作提示｜推进第 2 步 → Chrome 新开无痕窗口，打开公开 URL，不登录 GitHub；页面实际空白或走样时如实展示，进入第 3 步定位】\n\n第一项，用浏览器的无痕窗口，也就是未登录状态，打开公开 URL。别人第一次访问时看到的就是这个样子。",
        "【操作提示｜推进第 3 步 → 在无痕窗口打开开发者工具的 Network 面板，刷新一次，按 Status 查 404；有 404 就指认资源路径，回到 p48 的 base 检查】\n\n第二项，打开开发者工具的 Network 面板，刷新一次，看有没有状态是 404 的资源。CSS、JS 有一个没加载上，页面就会走样。",
        "【操作提示｜推进第 4 步 → 同一面板勾选 Disable cache 再刷新。记下公开 URL；关闭无痕窗口，回课件】\n\n第三项，在 Network 面板勾选 Disable cache，也就是停用缓存，再刷新一次，页面仍然正常。普通刷新可能还在用浏览器缓存里的旧文件，停用缓存以后，看到的才是服务器上现在的版本。三项都过了，才能说发布成功。记下自己的公开 URL 和这三项的结果。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "三项发布检查结果与公开 URL；URL 是必做自检项，课程不统一收取。"
        }
      ],
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
        "【操作提示｜课件 p51 第 1 步 → Terminal 在练习项目根目录先运行 git tag --list ch02-homepage-live 确认不存在，再运行 git tag ch02-homepage-live；已存在时核对它指向的提交，不强制覆盖】\n\n发布检查通过了，给这个版本做个标记。运行 git tag ch02-homepage-live。",
        "【操作提示｜推进第 2 步，同一 Terminal 运行 git push origin ch02-homepage-live，指认实际输出；可在 Chrome“GitHub 仓库”标签页的 tags 列表确认只多出这一个】\n\n然后只推送这一个 tag：git push origin，后面跟 tag 的名字。远端只会多出这一个 tag。",
        "【操作提示｜回课件推进第 3 步；不运行 git push --tags】\n\n为什么不用 git push --tags？它会把所有本地 tag 一起推上去，包括之前各章的检查点，和练习时随手打的。推送 tag 也是公开，一样要知道推的是什么。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-02 用本地裸仓库实测：只推送单个 tag 时远端只出现该 tag（Git 2.50.1）。"
        }
      ],
      "source": "index.html#p51",
      "seconds": 90
    },
    {
      "id": "p52",
      "segment": "推送与发布",
      "label": "本节小结",
      "title": "从本地提交到公开 URL",
      "lead": "本节推送前看过完整历史，留下审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。还在请求记录里看清了一次 gh 调用：模型提出命令，我们在终端批准，返回再带进下一次请求。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"0\"><h3>看清历史</h3><p>提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>审查配置</h3><p>base、权限、分支</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><h3>设置与推送</h3><p>Codex 改设置<br>人批准、人推送</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><h3>证明可用</h3><p>三项检查与 tag</p></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:18px\">一次 gh 调用：<b>模型提出命令 → 我们批准 → 返回带进下一次请求</b></div>",
      "steps": [
        "本节做了什么",
        "一次 CLI 调用"
      ],
      "script": [
        "【操作提示｜停留课件 p52 第 1 步，不切工具窗口】\n\n回看这一节：推送之前，先列出即将公开的提交、文件和作者，由人判断能不能公开；Codex 写的部署配置逐项审过再提交；Pages 来源交给 Codex 用 gh 设置，每条命令由我们批准、在网页上确认，再由我们自己推送；最后用三项检查证明页面可用，只推送 ch02-homepage-live 这一个 tag。个人主页现在有了一个公开 URL。",
        "【操作提示｜推进第 2 步，留在课件；本节到此结束，不预告 2.5】\n\n我们还在请求记录里看清了一次 gh 调用：模型提出一条命令，我们在终端批准，执行的输出作为工具返回，带进下一次请求。以后让 Codex 替你跑命令，都可以这样看。"
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
      "seconds": 510
    }
  ]
};

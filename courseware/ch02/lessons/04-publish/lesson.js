window.lesson = {
  "title": "公开的不只是页面",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.04",
  "summary": "第一次推送前看清即将公开的整段历史；发布后用公开 URL 证明页面可用。",
  "scenes": [
    {
      "id": "p43",
      "segment": "公开之前",
      "layout": "lesson-cover",
      "label": "推送之后谁能看到",
      "title": "推送之后，谁能看到什么？",
      "lead": "到现在为止，所有提交和 tag 都只在自己电脑上",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>听反馈</li><li class=\"is-done\"><b>2.2</b>改一处</li><li class=\"is-done\"><b>2.3</b>审改动</li><li class=\"is-now\"><b>2.4</b>公开发布</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-grid\" style=\"--n:3;gap:16px;margin-top:22px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><h3>页面</h3><p>公开 URL，任何人能打开</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>源码</h3><p>仓库里当前的每个文件</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><h3>整段历史</h3><p>每一次提交，包括后来删掉的文件</p></div></div><p class=\"p-hand\" data-reveal=\"2\">公开的不只是页面，还有历史</p>",
      "steps": [
        "回到地图",
        "页面和源码",
        "还有历史"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向章节地图上的 2.4，不切工具窗口。录前核对：2.3 的提交已完成、git status 干净，练习仓库此前没有推送过本地提交和 tag】\n\n到现在为止，我们所有的提交都只在自己电脑上，tag 也是本地的。这一节要第一次推送到 GitHub，并把页面发布出去。",
        "【操作提示｜推进第 2 步，留在课件；本页不打开 GitHub】\n\n推送以后，别人能看到什么？最直观的是页面，有了公开 URL，任何人都能打开。仓库是公开的，所以源码也能看到，每个文件都能点开。",
        "【操作提示｜推进第 3 步，留在课件；讲完进入 p44 再切 Chrome】\n\n第三层最容易忘：整段提交历史。每一次提交的内容都会公开，包括某次提交里出现过、后来又删掉的文件。推送和本地提交不一样，它是我们这门课第一个对外的副作用，推出去就收不回来。所以推送之前，先看清即将公开的是什么。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "主转折在本节：无论历史里有没有问题，“公开的不只是页面”这个认识都成立，不依赖录制时的实际内容。"
        }
      ],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "公开之前",
      "label": "仓库是公开的吗",
      "title": "先看一眼：仓库现在是公开还是私有",
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
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git log --stat HEAD\ngit log -p HEAD\ngit log --format=&#x27;%an &lt;%ae&gt;&#x27; HEAD | sort -u\"><div class=\"dim\">$ git log --stat HEAD</div><div>homepage-v1: 补充项目经历</div><div>  docs/evidence/CH02_VIBE_ITERATIONS.md · src/App.tsx</div><div class=\"dim\">$ git log -p HEAD</div><div class=\"dim\">$ git log --format='%an &lt;%ae&gt;' HEAD | sort -u</div><div>示例同学 &lt;student@example.com&gt;</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>提交作者</h3><p>每个提交都带着姓名和邮箱</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>docs/evidence/</h3><p>本章的过程记录</p></div><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>2.2 的项目经历</h3><p>关于具体的人的事实</p></div></div><p class=\"source-note\">输出为示意，作者为占位；实际检查当前分支的完整历史</p>",
      "steps": [
        "列出提交与作者",
        "作者与过程记录",
        "个人内容"
      ],
      "script": [
        "【操作提示｜课件 p45 第 1 步 → Terminal 在练习项目根目录依次运行 git log --stat HEAD、git log --format='%an <%ae>' HEAD | sort -u。录前离屏检查作者输出，真实邮箱不出镜；画面中的姓名和邮箱仍用占位示意。本页不以 origin/main..HEAD 限定检查范围】\n\n个人远端现在是空仓库，第一次推送会带过去当前分支的完整历史。我们先运行 git log --stat HEAD，列出这些提交和每次动过的文件。某个文件后来删掉了，早先提交里的内容仍会跟着公开。\n\n作者命令列出整段历史里的姓名和邮箱，包括课程模板原有的提交。先把将公开的范围看完整，不能只查自己后来新增的提交。",
        "【操作提示｜回课件推进第 2 步；可切回 Terminal，在 --stat 输出里指认 docs/evidence/CH02_VIBE_ITERATIONS.md，作者行只指位置、不念出邮箱】\n\n看看列出了什么。第一样很容易被忽略：每个提交都记着作者的姓名和邮箱，那是本机 Git 配置里写的，推送以后所有人都能看到。第二样是 docs/evidence 下本章的过程记录，这是我们的工作过程，也一起公开。",
        "【操作提示｜推进第 3 步 → 同一 Terminal 运行 git log -p HEAD，翻到 src/App.tsx 里项目经历的新增行，按 q 退出分页；历史里有截图等二进制文件时另行打开查看。说完暂停提示后回课件】\n\n还有 2.2 刚写进去的项目经历，这是关于具体的人的事实。文件列表只能告诉我们“有什么”，不能告诉我们“能不能公开”。所以还要运行第三条，git log -p，把每一处实际改动的文字展开读一遍。截图这类二进制文件，要另外打开看。请暂停视频，在自己的项目里运行这几条命令。"
      ],
      "teaching": [
        {
          "title": "命令说明",
          "text": "HEAD 表示当前分支版本；三个 log 命令检查其全部可达历史，不依赖个人空仓库是否已有 origin/main，也不遗漏课程模板带来的提交。已有远端内容时另核对远端历史；不强推。"
        },
        {
          "title": "讲师提示",
          "text": "本页只依赖本章产生的内容（提交作者、CH02 记录、2.2 的项目经历），不要求学员保留之前各章的证据文件；学员仓库里有更早的记录时，一并按同样方法检查。画面中的作者用占位，不展示讲师真实邮箱。"
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
      "lead": "逐项对照判断清单，由人决定。以提交作者邮箱为例：它是不是你愿意公开的邮箱？不愿意，就先停下，不推送。项目经历借用了两位讲师的经历，是本人同意公开的内容。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.1fr)\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">每个提交里都有</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.6\">Author: 示例同学<br>&lt;<b>你的邮箱</b>&gt;</p><p class=\"p-sub\">不想公开：先停，换成 GitHub 的 noreply 邮箱</p></div><ul class=\"p-checks\"><li class=\"is-no\" data-reveal=\"1\">有没有 secret<small>API 密钥、令牌、配置文件</small></li><li class=\"is-no\" data-reveal=\"1\">有没有未经同意的他人信息<small>别人的姓名、联系方式、经历、照片</small></li><li class=\"is-no\" data-reveal=\"1\">截图里有没有隐私<small>桌面、通知、浏览器标签</small></li><li data-reveal=\"2\">本人愿意公开<small>包括作者邮箱</small></li></ul></div><div class=\"p-bar\" data-reveal=\"3\">有一项不行，<b>先停下，不推送</b></div>",
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
        "本人意愿",
        "停止条件"
      ],
      "script": [
        "【操作提示｜停留课件 p46 第 1 步，指向左侧 Author；不现场改 git config，不演示改写历史。官方文档链接在阅读模式本页底部，录制时不打开】\n\n先看刚才列出的作者。每个提交里都写着作者的姓名和邮箱，来自本机的 Git 配置。如果那是私人邮箱，推送以后它就挂在公开历史里了。不想公开，就先停下，把 Git 的邮箱换成 GitHub 提供的 noreply 邮箱。注意，改配置只影响之后的提交，已经做过的提交还带着旧邮箱，要换掉它们就得改写历史。改写历史不在本课范围，GitHub 官方文档有说明，链接放在阅读模式这一页的底部。",
        "【操作提示｜推进第 2 步；需要举证时切回 Terminal 的 git log -p 输出，按实际内容逐项判断，不预写“没有”。发现 secret 立即停录处理，不展示具体值】\n\n再对照判断清单，前三项要确认“没有”：有没有 secret，比如 API 密钥、令牌，或者整份配置文件；有没有未经同意的他人信息，比如别人的姓名、联系方式、经历和照片；截图里有没有隐私，比如桌面上的文件名、弹出的通知。2.2 的项目经历借用了我们两位讲师的经历，这是本人同意公开的；我们如果写了别人的事，要先问过对方。",
        "【操作提示｜推进第 3 步，留在课件；按讲师本人的实际意愿判断，不预写“可以公开”】\n\n第四项是本人愿不愿意公开，作者邮箱也算在里面。这是每个人对自己内容的判断，没有标准答案：有人愿意用常用邮箱，有人只用 noreply，都合理。",
        "【操作提示｜推进第 4 步 → 切 VS Code 打开 docs/evidence/CH02_VIBE_ITERATIONS.md，写推送前检查记录：列出的提交、文件与作者，四项判断，结论（推送 / 暂停及原因）。实际结论是暂停时如实保留，后续推送不录】\n\n只要有一项不行，就先停下，不推送。推出去就收不回来了。怎样从历史里去掉一个文件、换掉旧邮箱，看 GitHub 官方文档；那些操作会改写历史，不在本课范围，做之前要人工复核。请暂停视频，逐项判断自己的内容，把结论写进记录。"
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
          "text": "2026-10-03 讲师确认：示范例子由“第 1 章环境记录中的系统用户名”（提案决定 18）改为提交作者邮箱，使本节不依赖之前各章的证据文件。录制时按讲师实际情况判断，不预写“可以公开”。"
        },
        {
          "title": "跟做产出",
          "text": "推送前检查记录：列出的提交、文件与作者，四项判断结果，结论（推送 / 暂停及原因）。"
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
          "text": "Codex 生成的文件以录制实际为准；不提供兜底参考工作流（决定 2），出错时让 Codex 再试。"
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
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:34px\"><div class=\"p-fn\">vite.config.ts · .github/workflows/deploy.yml（示意）</div><div class=\"p-ln\"><i>1</i><code>base: <span class=\"s\">'/&lt;仓库名&gt;/'</span>,</code></div><div class=\"p-ln\"><i>2</i><code>on:</code></div><div class=\"p-ln\"><i>3</i><code>  push:</code></div><div class=\"p-ln\"><i>4</i><code>    branches: [main]</code></div><div class=\"p-ln\"><i>5</i><code>permissions:</code></div><div class=\"p-ln\"><i>6</i><code>  contents: read</code></div><div class=\"p-ln\"><i>7</i><code>  pages: write</code></div><div class=\"p-ln\"><i>8</i><code>  id-token: write</code></div><div class=\"p-ln\"><i>9</i><code><span class=\"c\"># … npm ci → npm run build → 上传 dist</span></code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>base = 自己的仓库名</b><small>前后都有斜杠</small></span></li><li data-reveal=\"1\"><span><b>资源路径</b><small>build 后，资源路径以 /&lt;仓库名&gt;/ 开头</small></span></li><li data-reveal=\"2\"><span><b>权限只要发布所需</b><small>读代码、写 Pages、取部署身份</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>触发分支</b><small>等于自己的默认分支</small></span></li></ol></div><p class=\"source-note\">左侧为常见结构的示意，不是 Codex 的实际输出；字段与写法以录制时生成的文件为准</p>",
      "steps": [
        "base",
        "资源路径",
        "权限",
        "触发分支"
      ],
      "script": [
        "【操作提示｜课件 p48 第 1 步 → 切 VS Code 打开 Codex 实际改动的 vite.config.ts，指认 base 的值；左侧代码是常见结构示意，不是实际输出，按实际文件讲】\n\nCodex 生成了两处改动。第一项看 vite.config.ts 里的 base。页面发布后的地址是“用户名点 github 点 io 斜杠仓库名”，所以 base 必须是斜杠、自己的仓库名、斜杠。抄错一个字母，页面就会白屏。",
        "【操作提示｜推进第 2 步 → Terminal 在练习项目根目录运行 npm run build，VS Code 打开 dist/index.html，指认 CSS、JS 引用是否以 /<仓库名>/ 开头；build 失败时展示第一条有用报错，让 Codex 在原范围内修，修完重跑】\n\n第二项，资源路径。本地运行 npm run build，打开 dist/index.html，看引用的 CSS 和 JS 路径是不是以斜杠仓库名开头。这是检查 base 有没有生效的直接证据。",
        "【操作提示｜推进第 3 步 → VS Code 打开 .github/workflows/ 下实际生成的工作流文件（文件名以实际为准），指认 permissions 段，对照 Codex 回复里的权限说明；多出写权限就地追问。Node 版本与 .nvmrc 不一致也在这里指出】\n\n第三项，工作流权限。常见的是三项：读取仓库内容；写入 Pages；获取部署用的身份令牌。每一项都应该能说出用途，这就是我们让 Codex 解释权限的原因。多出来的写权限，比如能改仓库内容，要问清楚为什么。",
        "【操作提示｜推进第 4 步，同一文件定位 on → push → branches，与 Terminal 的 git branch --show-current 核对；有一项不对就回 Codex 改，改完重审。随后回课件 p49】\n\n第四项，触发分支：推送到哪个分支时运行。要和仓库的默认分支一致，course-starter 默认是 main。四项有一项不对，就不推送，让 Codex 改，改完再审一遍。工作流和配置也是即将公开的内容，下一页提交以后，还要再看一遍待推送的提交。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "左侧示意采用 GitHub 官方 Pages 工作流的常见权限组合，录制时换成 Codex 实际生成的文件并逐行讲。Node 版本若与 .nvmrc 不一致，也在这里指出。不准备错误的 base 分支（决定 7）。"
        },
        {
          "title": "跟做产出",
          "text": "工作流与 Vite 配置的审查结论，随推送前检查记录一起写。"
        }
      ],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p49",
      "segment": "推送与发布",
      "label": "推送并启用 Pages",
      "title": "Codex 设来源，人来推送",
      "lead": "提交部署配置，再用推送前检查的命令看一遍最终要公开的提交。仓库需要公开时现在再改。Pages 的来源交给 Codex 用 GitHub CLI 设为 GitHub Actions：每条命令弹出批准框，读过再批；改完在网页上刷新确认。最后由人把当前分支推到自己的 origin、看 Actions 日志。首次部署若失败，按日志、build 输出、Network 的顺序定位出在哪一环。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-num\">1</span><h3>提交配置</h3><p>审过的两处改动</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-num\">2</span><h3>再看历史</h3><p>待推送的全部提交</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">3</span><h3>Codex 设来源</h3><p>每条命令由你批准</p></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"2\"><span class=\"p-num\">4</span><h3>人来推送</h3><p class=\"p-mono\">git push -u origin HEAD</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:16px\" data-reveal=\"1\"><div class=\"p-box is-soft\" data-role=\"gate\"><h3>批准框里看什么</h3><p>命令和理由；修改类命令看清方法和对象</p></div><div class=\"p-box is-soft\" data-role=\"ok\"><h3>网页上确认</h3><p>Settings → Pages，刷新后来源是 GitHub Actions</p></div></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"3\" style=\"margin-top:12px\"><h3>失败时出在哪一环</h3><p>Actions 日志 → build 输出 → Network 里哪个资源 404</p></div>",
      "steps": [
        "提交并复查",
        "Codex 设来源",
        "人来推送",
        "失败时"
      ],
      "script": [
        "【操作提示｜课件 p49 第 1 步 → Terminal 在练习项目根目录 git add 审过的工作流文件和 vite.config.ts（写明路径，不用 git add .），git diff --cached 看过再提交，提交说明按实际写；然后重跑 p45 的三条推送前检查命令，新增内容补进推送前检查记录】\n\n检查都过了，先提交部署配置。提交以后，再运行一遍推送前检查的那几条命令：这次列出的才是最终要公开的全部提交，包括刚提交的工作流和配置。",
        "【操作提示｜推进第 2 步。录前确认 gh 已由讲师本人登录（gh auth login --scopes workflow），令牌不放环境变量、不贴进对话。仓库需公开时，先在 Chrome“GitHub 仓库”标签页的 Settings 改可见性。Terminal 另开标签页，在练习项目根目录新开 Codex 会话，粘贴本页“请求原文”第 1 条；每个批准框先读命令和理由，只批本次、不选以后不再询问，修改类命令核对方法和仓库。若个人空仓库暂时不能启用来源，先由讲师执行第 3 步的已审查推送，再完成来源设置，并在 Actions 重新运行部署；目标必须是个人 origin。完成后回 Chrome 打开 Settings → Pages 并刷新，确认 Source 为 GitHub Actions。批准次数以当天为准，不预告；没装 gh 的分支只讲，在该页手动选择。界面按录制时的 GitHub 版本核对】\n\n推送之前先把 GitHub 这边准备好。仓库如果还是私有的，现在才在网页上改成公开，因为待公开的内容已经看过了。然后要把 Pages 的来源设成 GitHub Actions，工作流要在启用之后才能部署。这一步交给 Codex：新开一个会话，用页面上“请求原文”里的这段话。仓库设置不只能在网页上点，GitHub CLI 也能改。Codex 要访问 GitHub，会弹出批准框，每次一条命令，写着命令和它给的理由。查询类的读一遍就批；修改类的看清楚方法和对象：改的是不是自己的仓库、是不是 Pages。讲师预检那一次，它说完“先告诉你要运行的命令”，紧接着就去执行了，真正停住它的是批准框。若空仓库暂时不能启用来源，就先由我们推送已检查的内容，再完成来源设置，并在 Actions 重新运行部署。设置完成后，它会用命令再查一次，但它看不到网页：我们自己打开 Settings 里的 Pages，刷新，看到来源变成 GitHub Actions。没装 GitHub CLI 的同学，就在这个页面上手动选。",
        "【操作提示｜推进第 3 步 → 回练习项目根目录的 Terminal，由讲师本人执行 git push -u origin HEAD，不交给 Codex；推送 .github/workflows/ 被拒时核对 gh 登录是否带 workflow 权限。若第 2 步已为初始化空仓库推送过，直接查看重新运行的结果，不重复推送。随后在 Chrome“GitHub 仓库”标签页打开 Actions，点进本次运行看各步日志】\n\n最后由我们自己在终端执行 git push -u origin HEAD，把当前分支推到自己的仓库，并建立后续使用的跟踪关系。切到 Actions 页，能看到工作流正在运行，点进去可以看每一步的日志。",
        "【操作提示｜推进第 4 步；实际失败时保留真实过程，按 Actions 日志 → 本地 npm run build → Network 的顺序定位。若先推送后才设来源导致失败，在 Actions 页对失败的运行点 Re-run 并确认新运行成功。没有失败只讲课件，不伪造】\n\n第一次部署不一定成功。失败了，按顺序找出在哪一环：Actions 日志里哪一步红了；同样的 build 在本地能不能复现；页面打开了，Network 面板里哪个资源是 404。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "顺序是提交 → 复查待推送提交 → 必要时改为公开 → Codex 设置 Pages 来源（人批准、网页确认）→ 推送；GitHub 文档要求先为仓库启用自定义工作流（2026-10-05 查阅 Using custom workflows with GitHub Pages）。若录制时先推送了，在 Actions 页对失败的运行点 Re-run，并确认新运行成功。Pages 来源设置界面按录制时 GitHub 版本核对。讲师录制时若真的失败，失败过程保留在本页。首次部署若自然出错，就地从 Actions 日志、build 输出和 Network 定位并保留；没有出错不伪造（决定 7）。"
        },
        {
          "title": "讲师提示",
          "text": "推送由人执行；设置交给 Codex 时，批准框就是人机边界（回扣 1.6）。gh 由学员本人登录（环境检查单），令牌不贴进对话、不放环境变量。预检见 courseware/ch02/materials/pages-source/：临时仓库上 13 次批准，修改命令先错用 POST 再改 PUT；录制仓库的实际次数和说法以当天为准，画面不预告。"
        }
      ],
      "repro": {
        "label": "请求原文",
        "steps": [
          {
            "text": "新开 Codex 会话，发送这段请求；每条命令弹出批准框时先读命令和理由",
            "code": "请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查现在的设置，执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。"
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
        "【操作提示｜推进第 4 步 → 同一面板勾选 Disable cache 再刷新。切 VS Code 在 docs/evidence/CH02_VIBE_ITERATIONS.md 写下公开 URL 和三项检查结果；关闭无痕窗口，回课件】\n\n第三项，在 Network 面板勾选 Disable cache，也就是停用缓存，再刷新一次，页面仍然正常。普通刷新可能还在用浏览器缓存里的旧文件，停用缓存以后，看到的才是服务器上现在的版本。三项都过了，才能说发布成功。把结果写进记录。"
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
      "title": "公开的不只是页面，还有历史",
      "lead": "本节留下推送前检查记录、审过的部署配置、公开 URL、三项发布检查结果和 ch02-homepage-live tag。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"gate\" data-reveal=\"0\"><h3>看清历史</h3><p>提交、文件、作者</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>审查配置</h3><p>base、权限、分支</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><h3>人来推送</h3><p>设置交给 Codex，人批准</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><h3>证明可用</h3><p>三项检查与 tag</p></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:18px\">推送前先看历史 · <b>发布后检查访问、资源与刷新</b></div>",
      "steps": [
        "本节做了什么",
        "两个认识"
      ],
      "script": [
        "【操作提示｜停留课件 p52 第 1 步，不切工具窗口】\n\n回看这一节：推送之前，先列出即将公开的提交、文件和作者，由人判断能不能公开；Codex 写的部署配置逐项审过再提交；Pages 来源交给 Codex 设置，每条命令由我们批准、在网页上确认，再由我们自己推送；最后用三项检查证明页面可用，只推送 ch02-homepage-live 这一个 tag。个人主页现在有了一个公开 URL。",
        "【操作提示｜推进第 2 步，留在课件；本节到此结束，不预告 2.5】\n\n推送之前，检查即将公开的文件和整段历史。部署完成后，再用未登录窗口访问、资源加载和停用缓存后刷新这三项检查确认发布结果。"
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
      "seconds": 390
    }
  ]
};

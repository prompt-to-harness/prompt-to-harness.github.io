window.lesson = {
  "title": "接手大项目，还能边聊边改吗",
  "chapter": "第 4 章 · SDD",
  "section": "04.01",
  "summary": "核对固定基线，用新人简报和最小用例认识已有工程，再由新增需求引出五层规格。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "接手大项目，还能边聊边改吗",
      "title": "大项目，还能边聊边改吗？",
      "lead": "本章接手开源工程 JSON Crack，为新增的 JSON 对比功能准备规格",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>4.1</b>接手工程</li><li><b>4.2</b>形成 Brief</li><li><b>4.3</b>批准 Spec</li><li><b>4.4</b>写验收</li><li><b>4.5</b>拆任务</li><li><b>4.6</b>MCP 工具</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">前三章</span><h3>从想法出发</h3><p>个人主页与小游戏，边做边补要求</p></div><div class=\"p-join\" data-reveal=\"1\"><span>这一章</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">第 4 章</span><h3>接手已有工程</h3><p>JSON Crack：正在维护的开源项目</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\" data-reveal=\"2\"><div class=\"p-box is-soft\" data-role=\"ink\"><h3>现有能力</h3><p>把 JSON 转成交互图，浏览结构</p></div><div class=\"p-join\"><span>在它上面加</span><i class=\"p-arrow\"></i></div><div class=\"p-box is-dashed\" data-role=\"ink\"><h3>要加的功能</h3><p>JSON Diff：比较两份 JSON，高亮不同</p></div></div>",
      "steps": [
        "本章位置",
        "换一种情境",
        "现有能力与要加的功能"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向章节地图上的 4.1；不切窗口】\n\n第三章结束时，我们的个人主页上已经有了两个小游戏。从这一章开始，我们换一个项目，也换一种工作方式。",
        "【操作提示｜推进第 2 步，先指左边“从想法出发”，再指右边“接手已有工程”】\n\n前面几章，项目都是从一个想法开始，我们边做边补要求。这一次不一样：我们要接手一个正在维护的开源工程，在它现有的能力上加功能。",
        "【操作提示｜推进第 3 步，先指“现有能力”，再指虚线框“要加的功能”；讲完进入 p02】\n\n这个工程叫 JSON Crack，它能把 JSON 数据转成交互图，帮我们浏览结构。我们要在它上面加的，是 JSON Diff：比较两份 JSON，把不同的地方高亮出来。注意分清这两样东西：交互图是它现在就有的，对比功能还没有，要我们来做。那么，接手这样一个大项目，还能像以前那样边聊边改吗？先从拿到代码开始。"
      ],
      "teaching": [],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "固定起点",
      "label": "取得并核对基线",
      "title": "先拿到同一份起点",
      "lead": "课件给出上游仓库、Release 和完整 commit。依据它们取得副本，再核对手里的这一份是不是这一版。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;align-items:start\"><div class=\"p-matrix\" data-reveal=\"0\" style=\"grid-template-columns:minmax(0,.55fr) minmax(0,1.45fr)\"><div class=\"is-head\"><span>课件给出</span><span>内容</span></div><div><span>上游仓库</span><span>AykutSarac/jsoncrack.com</span></div><div><span>Release</span><span>v5.0.0</span></div><div class=\"is-key\"><span>完整 commit</span><span style=\"font-family:var(--p-mono);font-size:17px;overflow-wrap:anywhere\">e99288b4eff060dcd53428f2a3a5c2f28eecffa6</span></div></div><div class=\"p-matrix\" data-reveal=\"1\" style=\"grid-template-columns:minmax(0,.6fr) minmax(0,1.4fr)\"><div class=\"is-head\"><span>本地核对</span><span>应该是</span></div><div><span>HEAD</span><span>等于完整 commit</span></div><div><span>分支</span><span>course/ch04-baseline</span></div><div><span>工作区</span><span>干净，没有未提交的改动</span></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:22px\">Release 帮助识别版本，<b>完整 commit</b> 固定实际使用的代码；后面的结论都对应这一版</div>",
      "steps": [
        "课件给出的三项信息",
        "取得副本并核对",
        "为什么固定这一版"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，依次指向上游仓库、Release 和完整 commit；不切窗口】\n\n要接手 JSON Crack，先拿到和课件同一版的代码。课件给出三项信息：上游仓库、Release v5.0.0，以及一串完整的 commit。Release 帮我们认出版本，完整 commit 才把实际使用的代码固定下来。",
        "【操作提示｜切到终端，在已有项目之外的空目录里现场执行本页“实验说明”第 1–4 步；逐条读出 HEAD、标签、分支和 status 的实际输出，再切回课件】\n\n现在取得副本。克隆之后，先确认 v5.0.0 指向的就是这串 commit，再从这串 commit 创建课程分支。接着核对三件事：HEAD 是不是这串 commit，分支是不是刚建的课程分支，工作区是不是干净。如果你本地早就有这个仓库，还做过修改，保留原来的目录，另外克隆一份练习副本。",
        "【操作提示｜推进课件第 3 步，指向底部横条】\n\n为什么要这么较真？因为后面的启动方式、目录介绍和调查结论，都要对应这一版。版本对不上，同一句结论就可能找不到依据。这个项目要求 Node.js 24 以上、pnpm 10 以上；如果你本地环境暂时不满足，先以看懂演示和掌握规格思路为主，这不影响后面对规格和架构的理解。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "基线",
          "text": "JSON Crack 上游仓库",
          "url": "https://github.com/AykutSarac/jsoncrack.com"
        },
        {
          "kind": "live",
          "group": "基线",
          "text": "Release v5.0.0",
          "url": "https://github.com/AykutSarac/jsoncrack.com/releases/tag/v5.0.0"
        },
        {
          "kind": "live",
          "group": "基线",
          "text": "完整 commit",
          "url": "https://github.com/AykutSarac/jsoncrack.com/commit/e99288b4eff060dcd53428f2a3a5c2f28eecffa6"
        }
      ],
      "repro": {
        "label": "实验说明：取得并核对固定基线",
        "steps": [
          {
            "text": "在已有项目之外准备一个空目录，在这里克隆上游仓库并进入仓库目录。",
            "code": "git clone https://github.com/AykutSarac/jsoncrack.com.git\ncd jsoncrack.com"
          },
          {
            "text": "确认 Release 标签指向课件给出的完整 commit。输出应为 e99288b4eff060dcd53428f2a3a5c2f28eecffa6。",
            "code": "git rev-parse 'v5.0.0^{commit}'"
          },
          {
            "text": "从完整 commit 创建本地课程分支。main 会继续前进，标签也可能被移动；完整 commit 指向的代码不会变，所以分支从它创建。",
            "code": "git checkout -b course/ch04-baseline e99288b4eff060dcd53428f2a3a5c2f28eecffa6"
          },
          {
            "text": "逐项核对：第一行等于完整 commit；第二行是 v5.0.0，说明当前提交正好是这个 Release；第三行是刚建的课程分支；最后一条没有输出，表示工作区干净。",
            "code": "git rev-parse HEAD\ngit describe --tags --exact-match\ngit branch --show-current\ngit status --short"
          },
          {
            "text": "把核对结果记下来：上游地址、Release、完整 commit、课程分支、工作区状态和核对日期。后面的启动方式、目录介绍和调查结论都对应这份记录。",
            "code": ""
          },
          {
            "text": "本地已有这个仓库且做过修改时，保留原目录，不要 reset 或丢弃改动；换一个目录另克隆一份练习副本，再从第 2 步做起。",
            "code": "git clone https://github.com/AykutSarac/jsoncrack.com.git jsoncrack-ch04\ncd jsoncrack-ch04"
          }
        ],
        "note": "本流程只取得并核对代码，不安装依赖、不启动；环境要求与启动在后面说明。"
      },
      "teaching": [],
      "source": "index.html#p02",
      "seconds": 90
    },
    {
      "id": "p03",
      "segment": "认识工程",
      "layout": "prompt-scene",
      "prompt": "我刚接手这个项目。先看 README、项目文档、目录和启动配置，简要介绍它做什么、主要目录各做什么、怎样启动 Web 应用。关键结论给出处，不确定的直接说明。仅通过阅读文档与配置回答，暂时不要执行安装或启动命令，先不深入实现代码，也不修改文件。",
      "label": "先要一份新人简报",
      "title": "陌生工程，先要一份带出处的简报",
      "lead": "基线核对后，眼前仍是陌生工程。先让 Agent 读 README、项目文档、目录和启动配置，给出能核对的简报；运行留到下一步。",
      "html": "<style>#p03 .prompt{height:290px}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>读什么</b><small>README、项目文档、目录和启动配置</small></span></li><li data-reveal=\"1\"><span><b>要什么</b><small>做什么、主要目录、怎样启动 Web 应用</small></span></li><li data-reveal=\"2\"><span><b>给出处</b><small>关键结论能打开核对，不确定的直接说</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>先不动手</b><small>不安装、不启动、不改文件</small></span></li></ol></div>",
      "steps": [
        "读什么",
        "要什么",
        "给出处",
        "先不动手"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，指向“读什么”；不切窗口】\n\n版本对上了，可眼前还是一个陌生的工程。第一件事，我们让 Agent 先给一份新人简报。这条请求先说清读什么：README、项目文档、目录和启动配置。",
        "【操作提示｜推进第 2 步，指向“要什么”】\n\n再说清要什么：这个项目做什么，主要目录各做什么，Web 应用怎样启动。只要一份简短的导航，不要它把整个仓库讲一遍。",
        "【操作提示｜推进第 3 步，指向“给出处”】\n\n关键的一句是：每个重要结论都要给出处，不确定的地方直接说明。有了出处，我们才能打开原文核对，而不是只能相信它的说法。GitHub 和 Claude Code 的官方文档也建议先要这样一份带依据的概览，链接在页面下方。",
        "【操作提示｜推进第 4 步，指向“先不动手”；随后切到终端，在基线副本根目录启动 codex 新会话，从课件复制请求原文发送，等它回复完再切回课件】\n\n最后一条是边界：这一轮只读文档和配置，先不安装、不启动，也不修改文件，运行留到下一步。现在把这条请求发出去。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "方法依据",
          "text": "GitHub：探索代码库",
          "url": "https://docs.github.com/en/copilot/tutorials/explore-a-codebase#example-prompts"
        },
        {
          "kind": "live",
          "group": "方法依据",
          "text": "Claude Code：代码库概览",
          "url": "https://code.claude.com/docs/en/common-workflows#get-a-quick-codebase-overview"
        }
      ],
      "teaching": [],
      "source": "index.html#p03",
      "seconds": 120
    },
    {
      "id": "p04",
      "segment": "认识工程",
      "label": "抽查简报的一条依据",
      "title": "简报里说的，能对上原文吗？",
      "lead": "从现场回复里挑一条和启动有关的结论，打开它给的出处，再和这一版仓库里的原文对照。目录用途以文档能支持的为限，函数入口留到 4.2。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div><div class=\"p-src\" data-reveal=\"1\" style=\"--lh:30px\"><div class=\"p-fn\">README.md（固定版本，第 108–119 行）</div><div class=\"p-ln\"><i>108</i><code>3. Install packages</code></div><div class=\"p-ln\"><i>111</i><code>   pnpm install</code></div><div class=\"p-ln\"><i>114</i><code>4. Run the web app</code></div><div class=\"p-ln\"><i>117</i><code>   pnpm dev:www</code></div><div class=\"p-ln\"><i>119</i><code><span class=\"c\">   # Running on http://localhost:3000/</span></code></div></div><div class=\"p-src\" data-reveal=\"2\" style=\"--lh:30px;margin-top:12px\"><div class=\"p-fn\">package.json（固定版本，第 15、31–35 行）</div><div class=\"p-ln\"><i>15</i><code>\"dev:www\": \"turbo run dev --filter=www\",</code></div><div class=\"p-ln\"><i>32</i><code>\"node\": \"&gt;=24\",</code></div><div class=\"p-ln\"><i>33</i><code>\"pnpm\": \"&gt;=10\"</code></div><div class=\"p-ln\"><i>35</i><code>\"packageManager\": \"pnpm@10.20.0\",</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>挑一条启动结论</b><small>来自现场回复</small></span></li><li data-reveal=\"1\"><span><b>打开它给的出处</b><small>README 的 Development 段</small></span></li><li data-reveal=\"2\"><span><b>命令定义在哪</b><small>根 package.json 的脚本和环境要求</small></span></li></ol></div>",
      "steps": [
        "挑一条结论",
        "对上 README",
        "对上 package.json"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步；切到 Codex 回复，选一条和启动有关的结论读出来，再切回课件】\n\n简报回来了。我们不逐条核对，只挑一条和接下来启动有关的结论，看它给的出处。",
        "【操作提示｜推进第 2 步，指向 README 片段的第 111 和 117 行；需要时点开底部链接对照原文】\n\n出处指向 README 的 Development 这一段。这一版的说明是：先 pnpm install 装依赖，再用 pnpm dev:www 启动 Web 应用，地址是 localhost 的 3000 端口。把回复里的说法和这几行对一下，看是否一致。",
        "【操作提示｜推进第 3 步，指向 package.json 片段的第 15 和 35 行；讲完进入 p05】\n\n那 dev:www 这条命令是在哪里定义的？在根目录的 package.json。这里还写着环境要求，Node.js 24 以上、pnpm 10 以上，并锁定了 pnpm 的具体版本。简报帮我们知道先看什么、怎样开始；目录各自的用途，我们只信到文档能支持的范围。函数从哪里进、JSON 怎样变成图，留到 4.2 带着需求再查。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "固定版本原文",
          "text": "README.md 第 92–119 行",
          "url": "https://github.com/AykutSarac/jsoncrack.com/blob/e99288b4eff060dcd53428f2a3a5c2f28eecffa6/README.md#L92-L119"
        },
        {
          "kind": "live",
          "group": "固定版本原文",
          "text": "package.json",
          "url": "https://github.com/AykutSarac/jsoncrack.com/blob/e99288b4eff060dcd53428f2a3a5c2f28eecffa6/package.json#L13-L35"
        }
      ],
      "teaching": [],
      "source": "index.html#p04",
      "seconds": 90
    },
    {
      "id": "p05",
      "segment": "认识工程",
      "layout": "prompt-scene",
      "prompt": "按当前版本仓库里的说明，带我启动 Web 应用，用一段简单 JSON 体验现有功能。告诉我怎样操作、看什么，区分建议步骤和实际验证到的结果。遇到阻塞先说明，暂时不修改源码或升级依赖。",
      "label": "带跑一个最小用例",
      "title": "让 Agent 带我们用起来一次",
      "lead": "有了启动依据，再让 Agent 按这一版仓库的说明带跑 Web 应用，用一段简单 JSON 体验现有功能。依赖安装在录制前完成，步骤见实验说明。",
      "html": "<style>#p05 .prompt{height:290px}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>按这一版的说明</b><small>启动 Web 应用</small></span></li><li data-reveal=\"1\"><span><b>一段简单 JSON</b><small>告诉我怎样操作、看什么</small></span></li><li data-reveal=\"2\"><span><b>分清两类结果</b><small>建议的步骤 · 实际验证到的</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>遇到阻塞先说明</b><small>不改源码，不升级依赖</small></span></li></ol></div>",
      "steps": [
        "按这一版的说明",
        "一段简单 JSON",
        "分清两类结果",
        "遇到阻塞先说明"
      ],
      "script": [
        "【操作提示｜停留课件 p05 第 1 步，指向“按这一版的说明”；不切窗口。依赖已在录制前按本页实验说明装好】\n\n有了启动依据，第二件事是真正用起来一次。这条请求让 Agent 按这一版仓库的说明，带我们启动 Web 应用。",
        "【操作提示｜推进第 2 步，指向“一段简单 JSON”】\n\n然后用一段简单的 JSON 体验现有功能，告诉我们怎样操作、看什么。",
        "【操作提示｜推进第 3 步，指向“分清两类结果”】\n\n这里要它分清两类结果：哪些是它建议的步骤，哪些是实际验证到的。OpenAI 和 Claude Code 的官方建议都强调，要拿到实际运行的命令和输出来核对，链接在页面下方。",
        "【操作提示｜推进第 4 步，指向“遇到阻塞先说明”；随后切到 Codex，在同一会话发送请求原文；启动命令按它给出的步骤，由讲师在另一个终端执行，按实际执行者记录】\n\n如果遇到阻塞，先说明，不要通过修改源码或升级依赖来绕过。依赖安装需要联网，也比较耗时，我们已经提前装好了，步骤在右上角的实验说明里，你可以跟着做。现在发请求。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "方法依据",
          "text": "OpenAI：测试与审查",
          "url": "https://learn.chatgpt.com/guides/best-practices#improve-reliability-with-testing-and-review"
        },
        {
          "kind": "live",
          "group": "方法依据",
          "text": "Claude Code：可运行的检查",
          "url": "https://code.claude.com/docs/en/best-practices#give-claude-a-check-to-run"
        }
      ],
      "repro": {
        "label": "实验说明：安装 pnpm 与项目依赖",
        "steps": [
          {
            "text": "确认 Node.js 版本不低于 24。",
            "code": "node -v"
          },
          {
            "text": "安装 pnpm。这个仓库在 package.json 里锁定了 pnpm@10.20.0，安装时指定同一个版本；不写版本会装上最新的大版本。",
            "code": "npm install -g pnpm@10.20.0"
          },
          {
            "text": "如果你习惯用 Node.js 自带的 corepack 管理 pnpm，可以用下面这条代替上一步；下一步同样要核对版本。",
            "code": "corepack enable pnpm"
          },
          {
            "text": "进入基线副本的根目录，确认 pnpm 版本是 10.20.0。",
            "code": "cd jsoncrack.com\npnpm -v"
          },
          {
            "text": "安装项目依赖。需要联网，耗时取决于网络；装完后工作区应仍然干净。",
            "code": "pnpm install\ngit status --short"
          },
          {
            "text": "启动 Web 应用。终端出现 Ready 和 http://localhost:3000 后，在浏览器打开编辑器页面；这个终端保持运行。",
            "code": "pnpm dev:www"
          },
          {
            "text": "打开编辑器页面。第一次打开可能先弹出一个说明对话框，关掉后再把示例 JSON 粘进左侧编辑器。",
            "code": "http://localhost:3000/editor"
          }
        ],
        "note": "本流程只准备运行环境，不修改源码，也不升级依赖。启动受阻时的处理见下一页的实验说明。"
      },
      "teaching": [],
      "source": "index.html#p05",
      "seconds": 120
    },
    {
      "id": "p06",
      "segment": "认识工程",
      "label": "这次实际走到了哪一步",
      "title": "这次实际走到了哪一步？",
      "lead": "Agent 建议运行某条命令，说明它提出了一个步骤；命令输出和浏览器画面，才说明这次走到了哪里。浏览器里的输入与观察由讲师完成，按实际执行者记录。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:26px;align-items:start\"><div class=\"p-code\" data-reveal=\"1\"><div class=\"p-code-head\"><span>示例 JSON</span><span>粘进左侧编辑器</span></div><pre style=\"padding:10px 14px\">{\n  &quot;name&quot;: &quot;Alice&quot;,\n  &quot;skills&quot;: [&quot;JavaScript&quot;, &quot;Python&quot;],\n  &quot;profile&quot;: { &quot;city&quot;: &quot;Hangzhou&quot; }\n}</pre></div><ol class=\"p-watch\"><li data-reveal=\"0\">命令与输出<small>哪个副本 · 出现 Ready · 地址</small></li><li data-reveal=\"1\">输入<small>普通字段、数组、嵌套对象</small></li><li data-reveal=\"2\">画面<small>每个字段在图里的哪个节点</small></li></ol></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:20px\">命令输出和画面，才说明<b>这次走到了哪里</b></div>",
      "steps": [
        "命令与输出",
        "输入",
        "画面"
      ],
      "script": [
        "【操作提示｜停留课件 p06 第 1 步；切到运行 pnpm dev:www 的终端，读出所在目录、Ready 和地址，再切回课件】\n\n先看命令和输出：服务是从哪个目录启动的，是不是我们刚核对过的那个副本，终端里有没有出现 Ready，地址是什么。",
        "【操作提示｜推进第 2 步，指向示例 JSON；随后切到浏览器打开编辑器页面，有说明对话框先关掉，把示例 JSON 粘进左侧编辑器】\n\n再看输入。这段 JSON 里有普通字段 name，有数组 skills，还有嵌套对象 profile。我们把它粘进编辑器。",
        "【操作提示｜推进第 3 步；在浏览器里依次指出 name、skills 的两个元素和 profile 下的 city 各在哪个节点，再切回课件指向底部横条；讲完进入 p07】\n\n最后看画面：每个字段出现在交互图的哪个节点上，数组的两个元素和嵌套的 city 又在哪里。Agent 建议运行某条命令，只说明它提出了一个步骤；命令输出和这张图，才说明这次实际走到了哪里。如果你那边启动受阻，右上角的实验说明写了先查什么。"
      ],
      "repro": {
        "label": "实验说明：启动受阻时怎么做",
        "steps": [
          {
            "text": "保留完整的错误输出，记下执行的命令和所在目录，先不要急着换命令重试。",
            "code": ""
          },
          {
            "text": "核对环境：Node.js 与 pnpm 的版本，是否在基线副本的根目录，工作区是否干净。",
            "code": "node -v\npnpm -v\npwd\ngit status --short"
          },
          {
            "text": "提示 3000 端口被占用时，先查是哪个进程在用，关掉它或换一个空闲端口再试。",
            "code": "lsof -i :3000"
          },
          {
            "text": "Next.js 提示“inferred your workspace root”时，通常是上级目录里另有 lockfile；只要后面出现 Ready，就可以继续。",
            "code": ""
          },
          {
            "text": "不要通过修改锁文件、升降依赖或改源码来绕过问题；这一节的任务是认识固定基线。",
            "code": ""
          },
          {
            "text": "暂时跑不起来时，先跟着课件画面看懂演示；后面的规格内容不依赖本地运行。",
            "code": ""
          }
        ],
        "note": ""
      },
      "teaching": [],
      "source": "index.html#p06",
      "seconds": 90
    },
    {
      "id": "p07",
      "segment": "新增需求",
      "label": "初始需求",
      "title": "要加的功能，说清楚了吗？",
      "lead": "看过现有能力，再看本章唯一的初始需求。它指向了具体产品和改动方向，下面四个问题还没有答案。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:18px 24px\"><span class=\"p-tag\" data-role=\"us\">初始需求</span><h3 style=\"font-size:32px;margin:10px 0 0\">“为 JSON Crack 增加 JSON 对比功能，把不同的地方高亮出来”</h3></div><div class=\"p-grid\" style=\"--n:4;margin-top:20px\" data-reveal=\"1\"><div class=\"p-box is-dashed\" data-role=\"ink\"><h3>谁在用？</h3><p>什么场景下比较两份 JSON</p></div><div class=\"p-box is-dashed\" data-role=\"ink\"><h3>什么算不同？</h3><p>换顺序、换类型、删字段</p></div><div class=\"p-box is-dashed\" data-role=\"ink\"><h3>怎样检查？</h3><p>给定输入，结果对不对</p></div><div class=\"p-box is-dashed\" data-role=\"ink\"><h3>怎么改？</h3><p>在现有工程里选什么改法</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:20px\">方向已经明确，还不足以<b>直接动手</b></div>",
      "steps": [
        "一句需求",
        "四个还不知道的问题",
        "还不能直接动手"
      ],
      "script": [
        "【操作提示｜停留课件 p07 第 1 步，指向需求原文；不切窗口】\n\n看过项目现在能做什么，再来看这一章唯一的初始需求：为 JSON Crack 增加 JSON 对比功能，把不同的地方高亮出来。",
        "【操作提示｜推进第 2 步，从左到右依次指四张虚线卡片】\n\n这句话指向了具体的产品，也指出了改动方向。可要真动手，还有四个问题没有答案。谁在什么场景下要比较两份 JSON？什么算“不同”，比如两份 JSON 只是键的顺序不一样，算不算？结果怎样检查？在现有工程里，又该选什么改法？",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p08】\n\n所以，方向是清楚的，但还不足以直接动手。"
      ],
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 90
    },
    {
      "id": "p08",
      "segment": "新增需求",
      "label": "长 Prompt 能当规格吗",
      "title": "把 Prompt 写到三千字，行不行？",
      "lead": "长 Prompt 做完四件事，也能当规格用。但这类工作往往伴随长上下文，压缩之后，早先写下的约束容易丢失或变淡。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1.1fr\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">可以</span><h3>做完四件事的长 Prompt</h3><ul style=\"margin:8px 0 6px;padding-left:22px;font-size:21px;line-height:1.6\"><li>事实核验</li><li>规则批准</li><li>验收设计</li><li>实施拆分</li></ul><p>字数写长，不会自动完成它们</p></div><div class=\"p-join\" data-reveal=\"1\"><span>多轮补充<br>和执行</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">不推荐</span><h3>长上下文被压缩之后</h3><div style=\"display:flex;flex-direction:column;gap:6px;margin-top:8px;font-size:19px\"><span class=\"p-item\">约束：对象键换序……</span><span class=\"p-item\" style=\"opacity:.45;border-style:dashed\">约束：数组插入……</span><span class=\"p-item\" style=\"opacity:.25;border-style:dashed;text-decoration:line-through\">约束：删除的字段……</span></div><p style=\"margin-top:8px\">少了哪一条，事后不容易发现</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:18px\">把约定写成<b>能单独查阅、按版本维护的文件</b>：SDD，规格驱动开发</div><p class=\"source-note\">右栏为课程自绘示意，不代表某个产品的具体压缩方式</p>",
      "steps": [
        "做完四件事也能用",
        "长上下文里的风险",
        "写成文件：SDD"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，指向左栏四项】\n\n这时候你可能会想：前面几章我们学会了写结构化 Prompt，那我把 Prompt 写到三千字，把能想到的细节全塞进去，让 AI 直接动手，不行吗？可以，但有前提。这个长 Prompt 得真的完成四件事：事实核验、规则批准、验收设计和实施拆分。只是把字数写长，并不会自动替我们做完它们。",
        "【操作提示｜推进第 2 步，指向右栏，从上到下指三条约束，最后一条已划掉】\n\n就算这四件事都做到了，我们也不推荐这样做。这类工作通常是长 Prompt 加上长上下文：任务要经过多轮补充和执行，上下文变长以后可能被压缩，第二章讲过压缩。早先写在 Prompt 里的约束条件，很容易在摘要和后面的轮次里丢掉或变淡。而且少了哪一条，事后不容易发现。右边这张是我们画的示意，用来说明风险，不是某个产品的具体压缩方式。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p09】\n\n所以，面对陌生的大工程，我们把这些约定写成能单独查阅、按版本维护的文件，需要的时候让 Agent 重新读取原文。这就是这一章的主线 SDD，规格驱动开发：先形成可观察、可验收的约定，再据此组织实现。"
      ],
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "五层规格",
      "label": "五层规格",
      "title": "五份文档，各回答一个问题",
      "lead": "围绕同一句 JSON Diff 需求，依次展开 Brief、Spec、Acceptance、Plan、Tasks。各层的具体内容在 4.2–4.5 逐步形成。",
      "html": "<div class=\"p-stairs\" style=\"--n:5;--rise:34px;column-gap:14px\"><div class=\"p-stair\" style=\"--i:0\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:12px 14px;\"><span class=\"p-tag\" data-role=\"ctx\">Brief</span><h3 style=\"font-size:23px;margin:8px 0 6px\">谁在什么场景下用，这次做到哪？</h3><p style=\"font-family:var(--p-mono);font-size:16px;margin:0\">BRIEF.md</p></div></div><div class=\"p-stair\" style=\"--i:1\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:12px 14px;\"><span class=\"p-tag\" data-role=\"ctx\">Spec</span><h3 style=\"font-size:23px;margin:8px 0 6px\">什么算不同，用户看到什么？</h3><p style=\"font-family:var(--p-mono);font-size:16px;margin:0\">SPEC.md</p></div></div><div class=\"p-stair\" style=\"--i:2\" data-reveal=\"2\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:12px 14px;\"><span class=\"p-tag\" data-role=\"ctx\">Acceptance</span><h3 style=\"font-size:23px;margin:8px 0 6px\">给定输入，怎样判对错？</h3><p style=\"font-family:var(--p-mono);font-size:16px;margin:0\">ACCEPTANCE.md</p></div></div><div class=\"p-stair\" style=\"--i:3\" data-reveal=\"3\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:12px 14px;\"><span class=\"p-tag\" data-role=\"ctx\">Plan</span><h3 style=\"font-size:23px;margin:8px 0 6px\">在这个仓库里怎么改？</h3><p style=\"font-family:var(--p-mono);font-size:16px;margin:0\">PLAN.md</p></div></div><div class=\"p-stair\" style=\"--i:4\" data-reveal=\"4\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:12px 14px;\"><span class=\"p-tag\" data-role=\"ctx\">Tasks</span><h3 style=\"font-size:23px;margin:8px 0 6px\">按什么顺序做，怎样算完成？</h3><p style=\"font-family:var(--p-mono);font-size:16px;margin:0\">TASKS.md</p></div></div><div class=\"p-base\" data-reveal=\"5\" style=\"display:flex;gap:28px;font-size:20px\"><span>↺ 规则没定 → 回 Spec</span><span>↺ 改法要调 → 回 Plan</span></div></div>",
      "steps": [
        "Brief",
        "Spec",
        "Acceptance",
        "Plan",
        "Tasks",
        "两条返回回路"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向 Brief】\n\n我们还是围绕刚才那句 JSON Diff 需求，一层一层展开。第一个问题：谁在什么场景下要比较两份 JSON，这次做到哪里？回答它的文档叫 Brief，里面写目标、范围、不做什么、约束、成功信号，还有没解决的问题。",
        "【操作提示｜推进第 2 步，指向 Spec】\n\n第二个问题：什么算不同，用户应该看到什么？这要由人来确认，写成带编号的行为规则，放在 Spec 里。",
        "【操作提示｜推进第 3 步，指向 Acceptance】\n\n规则写好了，还要能判对错：给定一组输入和操作，怎样判断符合规则？这是 Acceptance，里面是能核算的案例和检查标准。",
        "【操作提示｜推进第 4 步，指向 Plan】\n\n接下来才轮到实现：现有工程怎样承接这些行为，选什么改法？这要依据代码调查来定，写进 Plan，包括方案、取舍、影响范围和风险。",
        "【操作提示｜推进第 5 步，指向 Tasks】\n\n最后是 Tasks：按什么顺序实施，每一步怎样确认完成。每个小任务都写清范围、依赖、验证方法和完成标准。",
        "【操作提示｜推进第 6 步，指向阶梯下方两行回路，先左后右；讲完进入 p10】\n\n这五层不只是先后顺序，中间还有返回的路。键换顺序算不算变、数组怎么匹配，这些在这一节先留作问题，后面几节由人来决定。这张图会陪着我们走完 4.1 到 4.5，每一节点亮其中一层。"
      ],
      "teaching": [],
      "source": "index.html#p09",
      "seconds": 180
    },
    {
      "id": "p10",
      "segment": "五层规格",
      "label": "对应与返回",
      "title": "写好以后，怎么对上？",
      "lead": "验收案例对应需求，实现任务指向相关需求和验收。发现问题时，先判断它在决定什么，再回到对应的层。",
      "html": "<div class=\"p-flow\" style=\"--n:3;column-gap:60px\" data-reveal=\"0\"><div class=\"p-node\" data-role=\"ctx\"><h3>实现任务</h3><p>Tasks</p></div><div class=\"p-node\" data-role=\"ctx\"><h3>验收案例</h3><p>Acceptance</p></div><div class=\"p-node\" data-role=\"ctx\"><h3>需求规则</h3><p>Spec</p></div></div><p style=\"font-size:19px;color:var(--p-muted);margin:6px 0 0\" data-reveal=\"0\">箭头表示“对应到”：改一条需求时，能找到要复核的案例和任务</p><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:16px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"us\"><h3>案例暴露规则没定</h3><p>回 Spec，由人决定，再同步验收</p></div><div class=\"p-join\"><b>或</b></div><div class=\"p-box\" data-role=\"ink\"><h3>只是改法要调</h3><p>回 Plan，核对相关任务</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:16px\">Spec 写<b>用户能观察到的行为</b>，Plan 写<b>代码怎么改</b></div>",
      "steps": [
        "对应关系",
        "两种返回",
        "行为与改法分开"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，从左到右指三个节点】\n\n五份文档写好以后，它们之间要能对上。验收案例对应需求规则，实现任务指向相关的需求和验收。这样改动一条需求时，就能顺着找到要复核的案例和任务。",
        "【操作提示｜推进第 2 步，先指左卡，再指右卡】\n\n发现问题的时候，回哪一层？如果是验收案例暴露出某条规则根本没定，先回到 Spec，由人来决定，再同步验收。如果规则没问题，只是实现方案要调整，就回到 Plan，核对相关的任务。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p11】\n\n这里有一条分工原则：Spec 写用户能观察到的行为，尽量不写具体的文件名或组件名；代码改哪里、函数怎么调，留给 Plan 决定。这样换实现方案时，通常不必重写需求；调整一条规则，也不必连带改写方案。"
      ],
      "teaching": [],
      "source": "index.html#p10",
      "seconds": 90
    },
    {
      "id": "p11",
      "segment": "自检与交接",
      "label": "三个问题放哪一层",
      "title": "这三个问题，各放哪一层？",
      "lead": "先判断每句话正在决定什么，再放进对应的层。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>“谁需要这个功能？”</h3><div data-reveal=\"1\"><p>Brief：说明使用者、场景和目标</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>“键换顺序算不算变？”</h3><div data-reveal=\"2\"><p>Spec：由人决定可观察行为，随后再配验收案例</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>“先改哪里？”</h3><div data-reveal=\"3\"><p>Plan：结合现有代码选择方案<br><a href=\"#p09\">回看五层规格</a></p></div></div></div></div>",
      "steps": [
        "三个问题",
        "谁需要",
        "键换顺序",
        "先改哪里"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，指向暂停标记和三个问题；可以停顿几秒】\n\n来检查一下。这里有三个问题：谁需要这个功能？键换顺序算不算变？先改哪里？你先判断它们分别该放在哪一层，可以暂停视频想一想。",
        "【操作提示｜推进第 2 步，揭示第 1 题答案】\n\n第一个，谁需要这个功能，属于 Brief。它在说明使用者、场景和目标。",
        "【操作提示｜推进第 3 步，揭示第 2 题答案】\n\n第二个，键换顺序算不算变，属于 Spec。这是一条用户能观察到的行为，需要人来决定，随后再给它配上验收案例。",
        "【操作提示｜推进第 4 步，揭示第 3 题答案；讲完进入 p12】\n\n第三个，先改哪里，属于 Plan。它要结合现有代码来选方案。判断的时候，先说清这句话正在决定什么，再把它放进对应的层。"
      ],
      "teaching": [],
      "source": "index.html#p11",
      "seconds": 120
    },
    {
      "id": "p12",
      "segment": "自检与交接",
      "label": "小结",
      "title": "这一节留下什么",
      "lead": "固定起点、认识工程，再把新增需求的问题放回五层。下一节从需求原文开始，形成 Brief。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:250px;font-size:24px\">先问在决定什么<br>再放进对应层</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">固定基线记录</li><li class=\"is-pass\">带出处的新人简报</li><li class=\"is-pass\">运行或阻塞记录</li><li class=\"is-pass\">五层关系图</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>4.2 贴上需求原文，就能直接写吗？</h3><p>从飞书里的需求笔记开始</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向星形】\n\n这一节最后留下一个判断：遇到一个问题，先问它在决定什么，再把它放进对应的层。",
        "【操作提示｜推进第 2 步，依次指四项】\n\n这一节我们留下了四样东西：一份固定基线的记录，一份带出处的新人简报，一份运行或阻塞的记录，还有这张五层关系图。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节，我们从飞书里的一份需求笔记出发，读取原文，再进入源码调查，形成第一份文档 Brief。"
      ],
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "固定起点",
      "seconds": 90
    },
    {
      "label": "认识工程",
      "seconds": 420
    },
    {
      "label": "新增需求",
      "seconds": 180
    },
    {
      "label": "五层规格",
      "seconds": 270
    },
    {
      "label": "自检与交接",
      "seconds": 210
    }
  ]
};

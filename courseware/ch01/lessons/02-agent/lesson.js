window.lesson = {
  "title": "Agent 执行机制与 AI 协作基础",
  "chapter": "第 1 章 · Prompt",
  "section": "01.02",
  "summary": "复盘 1.1 欢迎语任务；五段主线，先证据后概念。",
  "segments": [
    {
      "label": "执行循环",
      "seconds": 180
    },
    {
      "label": "信息与术语",
      "seconds": 145
    },
    {
      "label": "判断信息",
      "seconds": 180
    },
    {
      "label": "失败与纠正",
      "seconds": 120
    },
    {
      "label": "路标与收尾",
      "seconds": 160
    }
  ],
  "scenes": [
    {
      "id": "p09",
      "label": "把小改动拆开看",
      "title": "把一次小改动拆开看",
      "lead": "上一节改了欢迎语，这一节回看 Codex 怎样读文件、改文字",
      "html": "<ol class=\"p-map\" data-reveal=\"0\"><li class=\"is-done\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"is-now\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"\"><b>1.3</b>工具使用与权限</li><li class=\"\"><b>1.4</b>写清个人主页的需求</li><li class=\"\"><b>1.5</b>生成并检查个人主页</li><li class=\"\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div class=\"opening\"><div><div class=\"p-src\" style=\"--lh:44px\"><div class=\"p-fn\">setup-check/index.html <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>你好，欢迎来到我的练习页面</code></div><div class=\"p-ln add\"><i>+</i><code>你好，欢迎来到 Vibe Coding 课堂！</code></div></div><p class=\"source-note\" style=\"margin-top:8px\">1.1 欢迎语改动示意，不是运行截图</p></div><div class=\"opening-question\"><div data-reveal=\"0\" class=\"\"><p class=\"hand\">你发出一句话，<br>谁真正改了文件？</p></div><div data-reveal=\"1\" class=\"\"><p>今天只追三件事：<br><b>拿到什么 → 做了什么 → 凭什么相信</b></p></div></div></div>",
      "steps": [
        "回看 1.1 的改动，抛出“谁改了文件”",
        "圈定目标，说明本节只复盘已有任务"
      ],
      "script": [
        "【操作提示｜课件 p09 第 1 步；保留课件 Chrome 标签页，暂不切窗口】\n\nhello，大家好，上一节，我们请 AI 改了一句欢迎语。从“你好，欢迎来到我的练习页面”，改成“你好，欢迎来到 Vibe Coding 课堂！”操作做完了，我们回头来看一个问题：你发出一句话，谁真正改了文件？\n\n修改过程中发生了哪些动作？哪些只是准备动作，哪些产生了实际结果？把这几件事分清楚，后面看 AI 的执行记录，我们就知道应该看哪里。",
        "【操作提示｜推进第 2 步 → 切 Terminal，回看上一节的 Codex 对话，定位请求、工具返回和检查结果；可结合讲师自己的笔记或截图。缺少实际过程时明确使用教学示意，不重发修改任务。完成后回课件】\n\n我们沿用上一节的欢迎语任务。请把注意力放在三件事上：AI 拿到了什么信息，AI 实际做了什么，以及我们凭什么接受结果。\n\n占位符"
      ],
      "segment": "执行循环",
      "seconds": 20,
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 回看 1.1 的改动，抛出“谁改了文件”\n\n2. 圈定目标，说明本节只复盘已有任务"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        },
        {
          "title": "回看历史改动",
          "text": "若欢迎语修改已提交或工作区已有新变化，回看当时留存的完整 git diff 输出和初始状态；缺少记录时如实说明。当前 git diff 输出为空不能代替当时的检查结果。"
        }
      ],
      "notes": "",
      "source": "index.html#p09",
      "closing": "上一节用 Codex 修改了一句欢迎语。这节沿用那次任务的请求、工具返回和改动记录，回头看文件怎样发生变化：它拿到了什么信息，实际做了什么，我们又凭什么接受结果。这里复盘已有任务，不重新修改欢迎语。先从一次读取开始，区分准备做的动作和实际得到的结果。"
    },
    {
      "id": "p09-request",
      "label": "请求与结果",
      "title": "“准备读取”，还不是“已经读到”",
      "lead": "看到“准备读取文件”，还不能确认欢迎语已经读到。要继续找工具返回，核对目标路径和内容；如果返回“找不到文件”，说明这次读取失败。图中请求与返回是教学示意。",
      "html": "<div class=\"evidence-pair\"><div data-reveal=\"0\" class=\"evidence-panel agent\"><h3>Agent · 提出动作</h3><pre><code>准备读取\nsetup-check/index.html</code></pre><span class=\"stamp\">只说了要读，还没有结果</span></div><div data-reveal=\"1\" class=\"evidence-panel ctx\"><h3>工具返回 · 文件内容</h3><pre><code>&lt;h1 id=\"welcome-message\"&gt;\n  你好，欢迎来到我的练习页面。\n&lt;/h1&gt;</code></pre><span class=\"stamp\">有了返回，才能核对读到了什么</span></div></div><div data-reveal=\"2\" class=\"conclusion \"><p>提出动作 ≠ 执行成功；下一步要看返回</p></div><p class=\"source-note\">请求与返回为教学示意，实际读取结果以工具记录为准</p>",
      "steps": [
        "只看请求，停顿 5 秒",
        "展示返回，圈出实际欢迎语",
        "比较请求与结果，归纳证据边界"
      ],
      "script": [
        "【操作提示｜课件 p09-request 第 1 步；只展示左侧请求，提问后停约 5 秒】\n\n我们切到终端 ，从昨天第一条对话开始拆解，先看这句话：“ Read index.html”读到这里，我们能确定它已经知道文件里的欢迎语了吗？\n\n我们停一下。这里表达的是准备做什么。要判断有没有读到，还得往下找实际返回。",
        "【操作提示｜推进第 2 步 → 切 Terminal 中保留的 1.1 执行记录，定位读取请求和对应返回；记录已另存时在 VS Code 展示。只回看，不重新运行 Codex；若返回折叠，按实际界面展开】\n\n点开 details ，这里把请求和返回放在一起看。先认路径，再看返回的内容。如果里面确实有 welcome-message 和当时的欢迎语，我们就有了这次读取的具体依据。\n\n当然了，如果返回的是“找不到文件” 的报错，那看到的就是一次读取失败。真实环境下，要以实际看到的返回为准。",
        "【操作提示｜回课件第 3 步，指向底部结论】\n\n以后看到类似的“Explored”“Ran ” 之类的提示，也可以这样看：先找到后面的执行结果，再判断事情做到哪一步。刚刚看了 Explored 的结果，这里也可以看到具体的 Ran 执行结果\n\n我们回到课件，现在我们已经区分了请求和返回。接下来，把它们放回整个任务，看看下一步动作是怎么接上来的。"
      ],
      "segment": "执行循环",
      "seconds": 50,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 只看请求，停顿 5 秒\n\n2. 展示返回，圈出实际欢迎语\n\n3. 比较请求与结果，归纳证据边界"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p09-request",
      "closing": "回看首次欢迎语修改记录时，把读取请求和对应返回放在一起核对。提出动作与执行结果分清后，再看下一步怎样接上来。"
    },
    {
      "id": "p09-loop",
      "label": "五节点循环",
      "title": "下一步，从上一步的返回里来",
      "lead": "欢迎语任务从目标和范围开始。Agent 提出读取动作，工具执行并返回文件内容或报错，Agent 再根据这个返回决定修改、补读或停止。图中的回线表示还要继续处理，完成或受阻时退出。",
      "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1168 370\" role=\"img\" aria-labelledby=\"title-agent-loop\" style=\"--rough:url(#rough-agent-loop)\"><title id=\"title-agent-loop\">五节点执行循环：继续回到提出动作，完成或停止退出</title><style>.diagram-arrow{fill:none;stroke:#243042;stroke-width:2.5}.sketch{filter:var(--rough)}text{font-family:Course Sans,Noto Sans SC,sans-serif}.diagram-title{font-family:Course Title,Noto Sans SC,sans-serif}</style><defs><filter id=\"rough-agent-loop\" filterUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"1228\" height=\"430\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".035\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"2.3\"/></filter><marker id=\"arrow-agent-loop\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10Z\" fill=\"#243042\"/></marker></defs><g data-reveal=\"0\" class=\"\"><g data-node=\"input\"><rect x=\"10\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"28\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#243042\" class=\"\"><tspan x=\"28\" dy=\"0\">01</tspan></text><text x=\"115\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"115\" dy=\"0\">任务输入</tspan></text><text x=\"115\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"115\" dy=\"0\">只改指定欢迎语</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><g data-node=\"action\"><rect x=\"242\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" class=\"sketch\"/><text x=\"260\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#5A51D1\" class=\"\"><tspan x=\"260\" dy=\"0\">02</tspan></text><text x=\"347\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#5A51D1\" class=\"diagram-title\"><tspan x=\"347\" dy=\"0\">提出动作</tspan></text><text x=\"347\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"347\" dy=\"0\">请求读取目标文件</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><path data-edge=\"input:action\" d=\"M220 91H236\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"1\" class=\"\"><g data-node=\"tool\"><rect x=\"474\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2\" class=\"sketch\"/><text x=\"492\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#0B6B5F\" class=\"\"><tspan x=\"492\" dy=\"0\">03</tspan></text><text x=\"579\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#0B6B5F\" class=\"diagram-title\"><tspan x=\"579\" dy=\"0\">工具执行</tspan></text><text x=\"579\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"579\" dy=\"0\">执行文件读取</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><path data-edge=\"action:tool\" d=\"M452 91H468\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"2\" class=\"\"><g data-node=\"result\"><rect x=\"706\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" class=\"sketch\"/><text x=\"724\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#6E6043\" class=\"\"><tspan x=\"724\" dy=\"0\">04</tspan></text><text x=\"811\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#6E6043\" class=\"diagram-title\"><tspan x=\"811\" dy=\"0\">结果返回</tspan></text><text x=\"811\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"811\" dy=\"0\">文件内容或报错</tspan></text></g></g><g data-reveal=\"2\" class=\"\"><path data-edge=\"tool:result\" d=\"M684 91H700\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"3\" class=\"\"><g data-node=\"next\"><rect x=\"938\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" class=\"sketch\"/><text x=\"956\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#5A51D1\" class=\"\"><tspan x=\"956\" dy=\"0\">05</tspan></text><text x=\"1043\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#5A51D1\" class=\"diagram-title\"><tspan x=\"1043\" dy=\"0\">下一步</tspan></text><text x=\"1043\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"1043\" dy=\"0\">修改、再读或停止</tspan></text></g></g><g data-reveal=\"3\" class=\"\"><path data-edge=\"result:next\" d=\"M916 91H932\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"4\" class=\"\"><path data-edge=\"next:action\" d=\"M1043 147V205H347V154\" class=\"diagram-arrow sketch\" marker-end=\"url(#arrow-agent-loop)\"/><text x=\"657\" y=\"238\" text-anchor=\"middle\" font-size=\"22\" fill=\"#5A51D1\" class=\"\"><tspan x=\"657\" dy=\"0\">继续：依据结果提出新动作</tspan></text><path data-edge=\"next:end\" d=\"M1043 205V276\" class=\"diagram-arrow sketch\" marker-end=\"url(#arrow-agent-loop)\"/><text x=\"1030\" y=\"258\" text-anchor=\"end\" font-size=\"18\" fill=\"#243042\" class=\"\"><tspan x=\"1030\" dy=\"0\">完成或停止</tspan></text><g data-node=\"end\"><rect x=\"936\" y=\"285\" width=\"214\" height=\"60\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"1043\" y=\"325\" text-anchor=\"middle\" font-size=\"25\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"1043\" dy=\"0\">退出循环</tspan></text></g><text x=\"20\" y=\"305\" text-anchor=\"start\" font-size=\"22\" fill=\"#243042\" class=\"\"><tspan x=\"20\" dy=\"0\">你来定：改什么、能改哪里</tspan><tspan x=\"20\" dy=\"31.9\">需要时做决定，做完检查结果</tspan></text></g></svg>",
      "steps": [
        "先看目标与范围",
        "展开提出动作和工具执行",
        "检查返回：内容或报错",
        "依据返回决定下一步",
        "显示继续回路、退出条件与人的位置"
      ],
      "script": [
        "【操作提示｜课件 p09-loop 第 1 步，指向任务输入】\n\n执行循环从我们交出去的任务开始。在上一节指定了修改任务，也限定了任务范围。这些要求给后面的动作定了方向。",
        "【操作提示｜推进第 2 步，沿“提出动作 → 工具执行”指示；这里留在课件，不重复切终端】\n\n接着，模型根据已有信息提出动作。比如，要改欢迎语，先 请求 读取目标文件。真正去读取文件的是工具。\n\n我们可以把这步连起来看：前一步 模型 说要做什么，后步 工具 负责把这个动作具体执行。",
        "【操作提示｜推进第 3 步，指向结果返回；对应刚才展示过的真实记录】\n\n工具执行后，把结果交回来。读成功了，返回文件内容；读失败了，返回相关报错。\n\n这两种结果会把任务带向不同的下一步。所以我们看执行记录时，不能只数它调用了几次工具，还要看每次返回了什么。",
        "【操作提示｜推进第 4 步，指向下一步】\n\n如果已经读到了原文，就依据原文继续修改。如果读不到，就先核对路径，必要时向人提问。修改后，还要根据新的返回和检查结果继续判断。\n\n看见第五格，并不表示任务自动结束。这一格要回答的是：现在的信息够不够，还需要做什么？",
        "【操作提示｜推进第 5 步，先沿回线指回“提出动作”，再指退出分支和人的位置】\n\n如果继续，就再提出动作。完成或者需要停止的情况，就从下面退出。比如需要的授权没有拿到、文件路径无法读取，就不能照原计划继续。\n\n人的工作也在这里：开始时说清目标和范围，执行中按需要作决定，最后拿结果来验收。具体动作是否要弹出确认，取决于当前权限设置；下一节我们专门看这个问题。"
      ],
      "segment": "执行循环",
      "seconds": 80,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 先看目标与范围\n\n2. 展开提出动作和工具执行\n\n3. 检查返回：内容或报错\n\n4. 依据返回决定下一步\n\n5. 显示继续回路、退出条件与人的位置"
        },
        {
          "title": "教学边界与材料",
          "text": "原 P09 五节点、继续回路、完成或停止出口均保留。Model 内部推理不可见，不为其补画隐藏步骤。"
        }
      ],
      "notes": "",
      "source": "index.html#p09-loop",
      "closing": "人先确认目标和范围，执行中按需要作决定，最后检查结果。是否弹出授权提示取决于实际权限设置；走到“下一步”这格不表示任务已经完成。"
    },
    {
      "id": "p09-agent",
      "label": "Model 与 Agent",
      "title": "模型提供能力，Agent 组织任务",
      "lead": "刚才的循环里，模型提供生成解释、判断和动作建议的能力。Agent 把模型、当前信息和工具组织起来，根据每次返回继续推进任务。可以用已有记录中的读取、返回和后续动作来对照这两个名字。",
      "html": "<div class=\"agent-rings\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram agent-rings-diagram\" viewBox=\"0 0 540 500\" role=\"img\" aria-labelledby=\"title-agent-rings\"><title id=\"title-agent-rings\">同心圆：Model 在中心；Agent 把模型、上下文和工具放进“提出动作、工具执行、结果返回、下一步”的执行循环</title><defs><marker id=\"arrow-agent-rings\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5A51D1\"/></marker></defs><g data-reveal=\"1\"><circle cx=\"270\" cy=\"250\" r=\"200\" fill=\"#F6F5FD\" stroke=\"none\"/><path d=\"M338.4 62.1A200 200 0 0 1 457.9 181.6\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"3\" marker-end=\"url(#arrow-agent-rings)\"/><path d=\"M457.9 318.4A200 200 0 0 1 338.4 437.9\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"3\" marker-end=\"url(#arrow-agent-rings)\"/><path d=\"M201.6 437.9A200 200 0 0 1 82.1 318.4\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"3\" marker-end=\"url(#arrow-agent-rings)\"/><path d=\"M82.1 181.6A200 200 0 0 1 201.6 62.1\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"3\" marker-end=\"url(#arrow-agent-rings)\"/><circle cx=\"270\" cy=\"250\" r=\"138\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" stroke-dasharray=\"7 6\"/><text x=\"270\" y=\"150\" text-anchor=\"middle\" font-size=\"24\" fill=\"#3E369F\">上下文</text><text x=\"270\" y=\"366\" text-anchor=\"middle\" font-size=\"24\" fill=\"#3E369F\">工具</text><rect x=\"208\" y=\"28\" width=\"124\" height=\"44\" rx=\"22\" fill=\"#FFFFFF\" stroke=\"#5A51D1\" stroke-width=\"2\"/><text x=\"270\" y=\"58\" text-anchor=\"middle\" font-size=\"22\" fill=\"#243042\">提出动作</text><rect x=\"408\" y=\"228\" width=\"124\" height=\"44\" rx=\"22\" fill=\"#FFFFFF\" stroke=\"#5A51D1\" stroke-width=\"2\"/><text x=\"470\" y=\"258\" text-anchor=\"middle\" font-size=\"22\" fill=\"#243042\">工具执行</text><rect x=\"208\" y=\"428\" width=\"124\" height=\"44\" rx=\"22\" fill=\"#FFFFFF\" stroke=\"#5A51D1\" stroke-width=\"2\"/><text x=\"270\" y=\"458\" text-anchor=\"middle\" font-size=\"22\" fill=\"#243042\">结果返回</text><rect x=\"8\" y=\"228\" width=\"124\" height=\"44\" rx=\"22\" fill=\"#FFFFFF\" stroke=\"#5A51D1\" stroke-width=\"2\"/><text x=\"70\" y=\"258\" text-anchor=\"middle\" font-size=\"22\" fill=\"#243042\">下一步</text></g><g data-reveal=\"0\"><circle cx=\"270\" cy=\"250\" r=\"74\" fill=\"#243042\"/><text class=\"diagram-title\" x=\"270\" y=\"246\" text-anchor=\"middle\" font-size=\"30\" fill=\"#FFFFFF\">Model</text><text x=\"270\" y=\"278\" text-anchor=\"middle\" font-size=\"22\" fill=\"#FFFFFF\">模型</text></g></svg><div class=\"agent-rings-notes\"><div data-reveal=\"0\" class=\"agent-rings-note model\"><h3>中心 · Model 模型</h3><p class=\"large-copy\">生成内容，作出判断</p><p>提出文字或动作建议</p></div><div data-reveal=\"1\" class=\"agent-rings-note agent\"><h3>外圈 · Agent 智能体</h3><p class=\"large-copy\">模型 + 上下文 + 工具<br>放进执行循环</p><p>依据返回，继续推进任务</p></div><div data-reveal=\"2\" class=\"conclusion \"><p><a href=\"../../../ch00/index.html#p05a\">模型输出有不确定性</a>，需要用证据验证</p></div></div></div>",
      "steps": [
        "说明模型的能力",
        "用刚才循环解释 Agent",
        "一句话说明不确定性"
      ],
      "script": [
        "【操作提示｜课件 p09-agent 第 1 步，指向 Model】\n\n现在再给刚才的过程起名字。Model 就是模型，它提供生成内容、作出判断的能力。比如读到一段代码后，生成解释，或者提出下一步的动作建议。model 由 API 服务商提供，比如 Qwen、Minimax、DeepSeek 等等",
        "【操作提示｜推进第 2 步，指向 Agent，并回指卡片里的上下文、工具和循环】\n\nAgent，中文常说智能体，是把模型、工具和当前可用的信息组织起来，让任务能够一轮一轮往前推进。在本次课程中，模型使用 Minimax M3 ，Agent 使用 codex\n\n刚才的“读取、返回、修改”，就是一个具体例子。如果把 agent 看作一个人，那么模型就是大脑，agent 就是手脚",
        "【操作提示｜推进第 3 步】\n\n正如我们在课前访谈章节提到的，因为模型输出有不确定性，所以我们要用实际证据核对它的判断，用具体条件约束 Agent 的行为。\n\n接下来再介绍几个高频词，在未来的工作中我们会经常接触"
      ],
      "segment": "执行循环",
      "seconds": 30,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 说明模型的能力\n\n2. 用刚才循环解释 Agent\n\n3. 一句话说明不确定性"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p09-agent",
      "closing": "模型给出的解释或建议仍需核对实际文件和结果。下面给任务说明、工具动作和供判断的信息分别标出名字。"
    },
    {
      "id": "p10",
      "label": "给记录贴标签",
      "title": "四个常用词，刚才的任务里都有",
      "lead": "用欢迎语任务认识四个词：Prompt 是任务说明，Tool 执行读取等动作，Context 是当时供判断使用的信息，Context Window 是一次处理信息的容量边界。先对照具体要求和工具返回，再理解名字。",
      "html": "<div class=\"labelled-records\"><div data-reveal=\"0\" class=\"record ink\"><div class=\"record-label\">Prompt<br><span>提示词</span></div><div class=\"record-body\">“只改指定欢迎语，其他内容和布局保留。”<small>你给 AI 的任务说明：目标、约束、完成标准</small></div></div><div data-reveal=\"1\" class=\"record tool\"><div class=\"record-label\">Tool<br><span>工具</span></div><div class=\"record-body\">读取文件、编辑代码、运行命令的入口。<small>动作是否成功，要继续看返回</small></div></div><div data-reveal=\"2\" class=\"record ctx\"><div class=\"record-label\">Context<br><span>上下文</span></div><div class=\"record-body\">要求 + 已读取内容 + 工具返回 + 反馈。<small>当前任务中供判断使用的信息；Prompt 也是其中一部分</small></div></div><div data-reveal=\"3\" class=\"record ctx\"><div class=\"record-label\">Context Window<br><span>上下文窗口</span></div><div class=\"record-body\">模型一次能够处理的信息容量边界。<small>Context 是信息；Context Window 限制一次能处理多少信息</small></div></div></div>",
      "steps": [
        "把用户要求标为 Prompt",
        "把动作入口标为 Tool",
        "把供判断的信息标为 Context",
        "单独解释 Context Window：一次处理的容量边界"
      ],
      "script": [
        "【操作提示｜课件 p10 第 1 步，指向用户要求】\n\n先看这句要求：“只改指定欢迎语，其他内容和布局保留。”这就是 Prompt，也就是我们给 AI 的任务说明。\n\nprompt 不一定很长，关键是把这次要做的任务说清楚。 怎样在 prompt 当中补齐目标、约束和完成标准，我们在一点四小节详细介绍。",
        "【操作提示｜推进第 2 步，指向 Tool】\n\nTool 就是工具。读取文件、编辑代码、运行命令，都需要具体的执行入口。\n\n刚才记录里的读取动作，就是通过工具完成的。看工具时，要把动作和返回连起来，才知道实际发生了什么。",
        "【操作提示｜推进第 3 步，指向 Context】\n\nContext 是上下文，也就是当前提供给模型判断使用的信息。我们输入的 prompt 、已读的文件、工具的返回，还有我们补充的反馈，都是 context 的一部分。\n\n占位符",
        "【操作提示｜推进第 4 步，指向 Context Window】\n\nContext Window 是上下文窗口，说的是模型一次能处理多少信息的容量边界。先记住这个区别：Context 说的是信息本身，Context Window 说的是一次处理这些信息的容量。\n\n接下来我们分别来看“信息有没有拿到”和“信息能放下多少”。"
      ],
      "segment": "信息与术语",
      "seconds": 55,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 把用户要求标为 Prompt\n\n2. 把动作入口标为 Tool\n\n3. 把供判断的信息标为 Context\n\n4. 单独解释 Context Window：一次处理的容量边界"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p10",
      "closing": "任务要求也属于上下文。接下来分别检查：项目里的文件有没有真的读到，以及一次能处理的信息有什么边界。"
    },
    {
      "id": "p10-context",
      "label": "可访问与已读取",
      "title": "Context：文件在项目里，不等于已经读过",
      "lead": "前面把一次小改动拆成了请求、动作、执行和结果。现在换个角度看同一次任务：项目里有很多文件，哪些真正成了这一轮的依据？编辑器里看得见一个文件，不代表这一轮已经读过它。",
      "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1168 370\" role=\"img\" aria-labelledby=\"title-context\" style=\"--rough:url(#rough-context)\"><title id=\"title-context\">项目文件通过工具读取，成功返回并纳入上下文；用户要求也是上下文的一部分</title><style>.diagram-arrow{fill:none;stroke:#243042;stroke-width:2.5}.sketch{filter:var(--rough)}text{font-family:Course Sans,Noto Sans SC,sans-serif}.diagram-title{font-family:Course Title,Noto Sans SC,sans-serif}</style><defs><filter id=\"rough-context\" filterUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"1228\" height=\"430\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".035\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"2.3\"/></filter><marker id=\"arrow-context\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10Z\" fill=\"#243042\"/></marker></defs><g data-reveal=\"0\" class=\"\"><g data-node=\"repo\"><rect x=\"10\" y=\"30\" width=\"335\" height=\"225\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"32\" y=\"70\" text-anchor=\"start\" font-size=\"28\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"32\" dy=\"0\">项目中可访问</tspan></text><text x=\"32\" y=\"117\" text-anchor=\"start\" font-size=\"23\" fill=\"#243042\" class=\"\"><tspan x=\"32\" dy=\"0\">setup-check/index.html</tspan><tspan x=\"32\" dy=\"33.35\">README.md</tspan><tspan x=\"32\" dy=\"33.35\">其他页面与样式</tspan></text><text x=\"32\" y=\"229\" text-anchor=\"start\" font-size=\"20\" fill=\"#D9481C\" class=\"\"><tspan x=\"32\" dy=\"0\">文件存在 ≠ 有读取证据</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><path data-edge=\"repo:read\" d=\"M347 135H439\" class=\"diagram-arrow\" marker-end=\"url(#arrow-context)\"/><text x=\"394\" y=\"105\" text-anchor=\"middle\" font-size=\"20\" fill=\"#243042\" class=\"\"><tspan x=\"394\" dy=\"0\">选择</tspan></text><g data-node=\"read\"><rect x=\"450\" y=\"91\" width=\"245\" height=\"88\" rx=\"12\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2\" class=\"sketch\"/><text x=\"572\" y=\"129\" text-anchor=\"middle\" font-size=\"27\" fill=\"#0B6B5F\" class=\"diagram-title\"><tspan x=\"572\" dy=\"0\">工具读取</tspan></text><text x=\"572\" y=\"157\" text-anchor=\"middle\" font-size=\"20\" fill=\"#0B6B5F\" class=\"\"><tspan x=\"572\" dy=\"0\">先检查成功返回</tspan></text></g><path data-edge=\"read:context\" d=\"M698 135H796\" class=\"diagram-arrow\" marker-end=\"url(#arrow-context)\"/><text x=\"746\" y=\"105\" text-anchor=\"middle\" font-size=\"20\" fill=\"#243042\" class=\"\"><tspan x=\"746\" dy=\"0\">纳入</tspan></text></g><g data-reveal=\"2\" class=\"\"><g data-node=\"context\"><rect x=\"807\" y=\"30\" width=\"350\" height=\"225\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" class=\"sketch\"/><text x=\"829\" y=\"70\" text-anchor=\"start\" font-size=\"27\" fill=\"#6E6043\" class=\"diagram-title\"><tspan x=\"829\" dy=\"0\">当前有依据的信息</tspan></text><text x=\"829\" y=\"116\" text-anchor=\"start\" font-size=\"23\" fill=\"#6E6043\" class=\"\"><tspan x=\"829\" dy=\"0\">你的目标与约束</tspan><tspan x=\"829\" dy=\"33.35\">已读取的欢迎语</tspan><tspan x=\"829\" dy=\"33.35\">工具返回与反馈</tspan></text></g><text x=\"20\" y=\"322\" text-anchor=\"start\" font-size=\"26\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"20\" dy=\"0\">判断一条结论前，先问：它依据哪段要求、哪次返回？</tspan></text></g></svg>",
      "closing": "判断一条结论之前，先找它依据的是哪段要求、哪次工具返回；找不到，就记成“依据不足，需要补充读取或核对”。读进来的信息越多，越会碰到另一个问题：一次能处理的信息有上限。下一页看这个容量边界。",
      "steps": [
        "列出可访问的项目文件",
        "只让有读取动作的文件经过工具",
        "检查纳入的信息，不替缺失证据补事实"
      ],
      "script": [
        "【操作提示｜课件 p10-context 第 1 步 → 切 VS Code 文件树，展示上一节练习副本中的 setup-check/index.html 和 README.md；只展开目录，不编辑】\n\n先看左边的文件列表。项目里有环境页、有 README，也可能还有其他页面。我们在 IDE 里能看见这些文件，说明它们本身是存在的。\n\n第二步：就像我们在前文提到的，如果要证明 AI 成功读取 README，需要在返回中找到证据。不能因为文件放在项目里，就脑补 AI 已经读过了",
        "【操作提示｜回课件第 2 步；指向“工具读取”，如需对照只复用先前的读取记录】\n\n工具读取目标文件之后，要确认我们之前的检查项：路径对不对，返回是否成功，是否有指定内容。检查指定内容很关键：一段无效的内容，即使读到了也不能指导后续修改\n\n第三步：看到一条结论时，我们可以继续追问：它依据的是哪段要求，或者哪次返回？将这些信息整合起来，就组成了完整的上下文；",
        "【操作提示｜推进第 3 步，指向右侧信息；不演示隐藏请求或内部推理】\n\n占位符\n\n占位符"
      ],
      "segment": "信息与术语",
      "seconds": 55,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 列出可访问的项目文件\n\n2. 只让有读取动作的文件经过工具\n\n3. 检查纳入的信息，不替缺失证据补事实"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p10-context"
    },
    {
      "id": "p10-window",
      "label": "上下文窗口",
      "title": "Context Window：一次能处理的信息有上限",
      "lead": "信息会越积越多，但一次能处理的容量有限。图只帮助理解，不代表产品界面或固定 token 数。",
      "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1168 300\" role=\"img\" aria-labelledby=\"title-window\"><title id=\"title-window\">信息越积越多，Context Window 框住最近的一段，框外较早的内容放不下</title><style>.diagram-arrow{fill:none;stroke:#243042;stroke-width:2.5}text{font-family:Course Sans,Noto Sans SC,sans-serif}.diagram-title{font-family:Course Title,Noto Sans SC,sans-serif}</style><defs><marker id=\"arrow-window\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10Z\" fill=\"#243042\"/></marker></defs><g data-reveal=\"0\"><rect x=\"60\" y=\"104\" width=\"150\" height=\"94\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\"/><text x=\"135\" y=\"161\" text-anchor=\"middle\" font-size=\"24\" fill=\"#243042\" class=\"diagram-title\">项目文件</text><rect x=\"230\" y=\"104\" width=\"150\" height=\"94\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\"/><text x=\"305\" y=\"161\" text-anchor=\"middle\" font-size=\"24\" fill=\"#243042\" class=\"diagram-title\">历史对话</text><rect x=\"400\" y=\"104\" width=\"150\" height=\"94\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\"/><text x=\"475\" y=\"161\" text-anchor=\"middle\" font-size=\"24\" fill=\"#243042\" class=\"diagram-title\">工具返回</text><rect x=\"570\" y=\"104\" width=\"150\" height=\"94\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\"/><text x=\"645\" y=\"161\" text-anchor=\"middle\" font-size=\"24\" fill=\"#243042\" class=\"diagram-title\">历史对话</text><rect x=\"740\" y=\"104\" width=\"150\" height=\"94\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\"/><text x=\"815\" y=\"161\" text-anchor=\"middle\" font-size=\"24\" fill=\"#243042\" class=\"diagram-title\">工具返回</text><rect x=\"910\" y=\"104\" width=\"150\" height=\"94\" rx=\"12\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2\"/><text x=\"985\" y=\"161\" text-anchor=\"middle\" font-size=\"24\" fill=\"#0B6B5F\" class=\"diagram-title\">本次要求</text><path class=\"diagram-arrow\" d=\"M60 262H1076\" marker-end=\"url(#arrow-window)\"/><text x=\"60\" y=\"294\" font-size=\"22\" fill=\"#243042\">越积越多</text></g><g data-reveal=\"1\"><rect x=\"384\" y=\"76\" width=\"692\" height=\"150\" rx=\"14\" fill=\"none\" stroke=\"#9C8B66\" stroke-width=\"3\" stroke-dasharray=\"10 7\"/><text x=\"384\" y=\"62\" font-size=\"26\" fill=\"#6E6043\" class=\"diagram-title\">Context Window</text><rect x=\"40\" y=\"70\" width=\"344\" height=\"162\" rx=\"10\" fill=\"#F4F2EB\" opacity=\".72\"/><text x=\"212\" y=\"62\" text-anchor=\"middle\" font-size=\"28\" fill=\"#D9481C\" class=\"diagram-title\">放不下</text></g></svg><div data-reveal=\"2\" class=\"conclusion \"><p>不是资料越多越好，而是完成任务所需的信息有没有到位</p></div><p class=\"source-note\">容量示意，不代表具体产品的界面、比例或固定 token 数</p>",
      "steps": [
        "看信息来源，提出“会话很长就全记住了吗”",
        "显示有限窗口，区分信息与容量",
        "回到相关性和准确性"
      ],
      "script": [
        "【操作提示｜课件 p10-window 第 1 步，逐项指向信息来源；本页不新开浏览器，不做长会话实验】\n\n刚才解决了有没有读到的问题。现在再想一步：如果项目很大，对话又很长，是不是把所有材料都读进上下文就OK了？\n\n就像图上显示的那样，随着任务推进，文件、历史对话、工具返回、本次要求，会越积越多。",
        "【操作提示｜推进第 2 步，指向 Context Window 框与框外的灰色部分】\n\n这个框就是 Context Window，表示一次能处理信息的范围。框外灰色的较早内容放不下，不能假定它们仍能够参与判断。这是帮助理解的示意图，不是产品界面，也没有固定数字。\n\n所以，不能只凭“以前聊过”，就认定现在每个细节都还在参与判断。具体保留了什么，需要结合当前记录来看。",
        "【操作提示｜推进第 3 步，回到欢迎语任务】\n\n回到我们的小任务，最有用的是哪几项？目标文字、指定文件里的原文，还有允许修改的范围。\n\n把相关且准确的信息给到位，比不断塞进无关材料更能帮助我们完成任务。信息选出来以后，还要分清哪些已有证据支持、哪些需要确认。接下来，就用前文欢迎与任务中的几句话来判断。"
      ],
      "segment": "信息与术语",
      "seconds": 35,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 看信息来源，提出“会话很长就全记住了吗”\n\n2. 显示有限窗口，区分信息与容量\n\n3. 回到相关性和准确性"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p10-window",
      "closing": "欢迎语任务优先提供目标文字、相关原文和允许修改的范围。检查信息是否相关、准确、足够，比不断添加无关材料更有用。信息选出来以后，还要分清哪些已有观察支持，哪些需要确认。"
    },
    {
      "id": "p11",
      "label": "四类信息",
      "title": "Agent 给的信息，如何判定？",
      "lead": "同样一句“改好了”，信息的性质可能不同：实际观察可以支持事实，未确认的偏好是假设，可选做法是建议，人的明确确认是决定。先看来源和依据，再判断这句话可以怎样用于当前任务。",
      "html": "<div class=\"classification\"><div data-reveal=\"0\" class=\"class-row ok\"><span class=\"class-name\">事实</span><blockquote>刷新正确页面，看到了目标文案</blockquote><p>有对应观察支持；仍需 git diff 输出查范围</p></div><div data-reveal=\"1\" class=\"class-row ctx\"><span class=\"class-name\">假设</span><blockquote>“用户可能更喜欢活泼的文案。”</blockquote><p>尚未确认，向用户核实</p></div><div data-reveal=\"2\" class=\"class-row agent\"><span class=\"class-name\">建议</span><blockquote>“可以顺便加个动画。”</blockquote><p>是可选做法，由人决定是否采纳</p></div><div data-reveal=\"3\" class=\"class-row ink\"><span class=\"class-name\">决定</span><blockquote>用户明确说：“只改文字，不加动画。”</blockquote><p>已确认，约束本次任务范围</p></div></div>",
      "steps": [
        "先看事实及它能支持的范围",
        "把未经确认的偏好识别为假设",
        "把可选做法识别为建议",
        "用人的明确决定约束范围"
      ],
      "script": [
        "【操作提示｜课件 p11 第 1 步，指向事实卡片】\n\n先来看一个例子。刷新了正确页面，确实看到指定的新文案，这项观察可以记为事实。\n\n但结论要说准确：它支持“文案已经显示”。但你不能说本次修改正确，因为还没有确定修改范围是否符合预期",
        "【操作提示｜推进第 2 步，指向假设】\n\n另外，假设 AI 输出：“用户可能更喜欢活泼一点的文案”。这个偏好有没有确认？如果没有，它就是一个假设。\n\n它可以提醒我们去做文案优化，却不能直接成为修改要求。否则本来只改欢迎语，做着做着就变成全面重构了。",
        "【操作提示｜推进第 3 步，指向建议】\n\n接着，假设 AI 输出：“可以顺便加个动画”，这是建议。它提出了一种可选做法，接下来还需要单独决定要不要做。\n\n读 AI 的回复时，可以把这种句子先单独放出来。不要因为建议写得具体，就默认已经同意它执行。",
        "【操作提示｜推进第 4 步，指向决定】\n\n如果你明确说“这次只改文字，不加动画”，后续动作要遵守这个范围，这就是已经确认的决定。\n\n我们针对现有信息区分出事实、假设、建议和决定。下面用八句话试一试，重点看理由，不用背标签。"
      ],
      "segment": "判断信息",
      "seconds": 55,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 先看事实及它能支持的范围\n\n2. 把未经确认的偏好识别为假设\n\n3. 把可选做法识别为建议\n\n4. 用人的明确决定约束范围"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p11",
      "closing": "例如页面观察支持“目标文字已经显示”，是否多改文件还要查 git diff 输出。未确认的偏好和建议不能自行变成修改要求。"
    },
    {
      "id": "p11-judge",
      "label": "先判断，再看证据",
      "title": "“它说过”，不等于“它说的成立”",
      "lead": "先比较第二条的页面观察与第三条 AI 的保证：它们分别能支持什么结论？第一条也要核对真实读取记录；第四条只是尚未确认的偏好。先写理由，再对照解析，不因句子出自 AI 就认定成立。",
      "html": "<div class=\"statement-grid\"><article class=\"statement\"><span class=\"card-quote\">① 记录中有一次目标文件读取</span><div data-reveal=\"1\" class=\"card-answer ctx\"><b>还要核对</b><p>核对真实日志中的路径和返回；有对应证据才成立</p></div></article><article class=\"statement\"><span class=\"card-quote\">② 刷新正确页面，显示了目标文案</span><div data-reveal=\"1\" class=\"card-answer ok\"><b>事实</b><p>有对应观察支持“文案已显示”；不能单独证明改动范围</p></div></article><article class=\"statement\"><span class=\"card-quote\">③ AI 说：“没有多改文件。”尚无 git diff 输出。</span><div data-reveal=\"1\" class=\"card-answer risk\"><b>尚未证实</b><p>不能直接当事实；缺少实际 git diff 输出和文件范围检查</p></div></article><article class=\"statement\"><span class=\"card-quote\">④ “学员大概喜欢深色背景。”</span><div data-reveal=\"1\" class=\"card-answer ctx\"><b>假设</b><p>偏好未确认，先向用户核实</p></div></article></div><div data-reveal=\"2\" class=\"conclusion \"><p>③还缺完整 git diff 输出，暂时不能确认改动范围</p></div>",
      "steps": [
        "停顿，让学员判断②③，其余对照",
        "揭晓四条，重点解释证据边界",
        "收拢：AI 的保证也要核对"
      ],
      "script": [
        "【操作提示｜课件 p11-judge 第 1 步；答案保持隐藏，停约 5 秒，提示学员可暂停】\n\n先比较第二条和第三条。第二条说刷新页面后看到了目标文案；第三条是 AI 说“没有多改文件”，但还没看 git diff 输出。\n\n这两句话，我们分别敢确认到哪一步？可以暂停一下，思考现有证据，再看后面的解析。其他两条也一起判断。",
        "【操作提示｜推进第 2 步，按②③①④的顺序讲解】\n\n第二条，如果有对应的页面观察，就能支持文案已经显示。第三条目前只有一句保证，还没有证据确认改动范围。\n\n第一条同样要对应真实日志和返回。第四条说“学员大概喜欢深色背景”，这是还没确认的偏好。",
        "【操作提示｜推进第 3 步，指向“尚未证实”】\n\n第三条先记成“尚未证实”就可以，没必要硬套刚刚的分类。我们能确认的是 AI 说过这句话，至于它说的是否成立，需要证据验证。\n\n记录时可以写得很具体：“缺少完整 git diff 输出，暂时不能确认改动范围。”这样下一步要补什么就清楚了。"
      ],
      "segment": "判断信息",
      "seconds": 65,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 停顿，让学员判断②③，其余对照\n\n2. 揭晓四条，重点解释证据边界\n\n3. 收拢：AI 的保证也要核对，不能直接当成事实"
        },
        {
          "title": "教学边界与材料",
          "text": "请学员用本人任务片段补证据。"
        }
      ],
      "notes": "",
      "source": "index.html#p11-judge",
      "closing": "第三条可以记成“缺少完整 git diff 输出，暂时不能确认改动范围”。AI 确实说过这句话，与它说的内容已经得到验证，是两个判断。"
    },
    {
      "id": "p11-more",
      "label": "建议与决定",
      "title": "一句建议，什么时候变成任务？",
      "lead": "“建议先看 git diff 输出”和“可以扩大字号”只是可选做法；“只改欢迎语”“不新增依赖”在有人明确确认的前提下，才是本次任务的决定。对应自己的任务时，要能找到实际确认记录。",
      "html": "<div class=\"statement-grid\"><article class=\"statement\"><span class=\"card-quote\">⑤ “建议先看 git diff 输出。”</span><div data-reveal=\"1\" class=\"card-answer agent\"><b>建议</b><p>提出验证做法；还不表示已经执行</p></div></article><article class=\"statement\"><span class=\"card-quote\">⑥ “可以考虑扩大标题字号。”</span><div data-reveal=\"1\" class=\"card-answer agent\"><b>建议</b><p>可选改动，需要人决定，不能擅自扩范围</p></div></article><article class=\"statement\"><span class=\"card-quote\">⑦ 人工批准：“只改欢迎语。”</span><div data-reveal=\"1\" class=\"card-answer ink\"><b>决定</b><p>需有明确确认记录；它约束可修改范围</p></div></article><article class=\"statement\"><span class=\"card-quote\">⑧ 人工决定：“这次不新增依赖。”</span><div data-reveal=\"1\" class=\"card-answer ink\"><b>决定</b><p>需有明确确认记录；后续执行遵守这一边界</p></div></article></div><div data-reveal=\"2\" class=\"conclusion \"><p>还缺什么？目标文案 / 指定文件 / 完成标准 —— 任选一项写清</p></div>",
      "steps": [
        "先区分建议与已确认决定",
        "揭晓四条，指出确认记录",
        "指出一条缺失信息，留给 1.4"
      ],
      "script": [
        "【操作提示｜课件 p11-more 第 1 步，先不揭晓答案】\n\n再看后四条。“建议先看 git diff 输出”，说明已经看过了吗？“可以考虑扩大标题字号”，说明已经允许修改字号了吗？\n\n这两句都在提出可选做法。先分清它们和下面两句明确批准的范围有什么不同。",
        "【操作提示｜推进第 2 步，指向⑤⑥和⑦⑧】\n\n第五、第六条是建议。第七、第八条是你明确批准或决定的前提，所以可以作为这次任务的边界。\n\n对应实际工作的时候，要找到实际确认的边界。比如“不新增依赖”，就不能因为实际干起来觉得方便，直接放任 AI 说啥是啥，想干嘛干嘛。",
        "【操作提示｜推进第 3 步 → 切 VS Code，打开练习副本 docs/evidence/CH01_PROMPT_EXPERIMENT.md，在已有记录后补“缺失信息、依据、准备补充的要求”；无缺项时用课件变式示范并标明，不虚构本人经历。完成后回课件】\n\n现在切到 course-starter ，打开 PROJECT_BRIEF.md ，找一项应该补清楚的信息。比如只说“改得友好一点”，却没给目标文字；或者说“改个人主页”，却没指定文件。\n\n需要补充的信息单独记下来，想清楚准备怎样说明。把自己的任务想清楚了，一点四我们会接着用这条记录。"
      ],
      "segment": "判断信息",
      "seconds": 60,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 先区分建议与已确认决定\n\n2. 揭晓四条，指出确认记录\n\n3. 指出一条缺失信息，留给 1.4"
        },
        {
          "title": "教学边界与材料",
          "text": "八张陈述全部保留，重点主动判断两条易混项，其余对照解析；不要求背术语定义。"
        }
      ],
      "notes": "",
      "source": "index.html#p11-more",
      "closing": "再检查自己的任务说明，选一项缺少的目标文字、指定文件或完成标准补清楚。已经写清楚时可用课件变式练习，但标明是练习例子。"
    },
    {
      "id": "p12",
      "label": "三个常见缺口",
      "title": "出错了，先找缺的是哪一环",
      "lead": "这里列出三种可能的失败：任务信息不足，改动超出范围，只收到完成说明却没有检查结果。先选一种，写出具体纠正动作，再写怎样重新检查；这些情况不表示首次任务已经全部发生过。",
      "html": "<div class=\"failure-grid\"><article class=\"failure-case\"><div class=\"failure-head\"><span>01 · 任务输入</span><h3>AI 自己编了文案</h3></div><div data-reveal=\"1\" class=\"\"><div class=\"repair\"><b>纠正</b><p>补目标文字、位置、完成标准</p><b>复验</b><p>对照要求重新核对页面与 git diff 输出</p></div></div></article><article class=\"failure-case\"><div class=\"failure-head\"><span>02 · 执行范围</span><h3>文字改了，样式也改了</h3></div><div data-reveal=\"2\" class=\"\"><div class=\"repair\"><b>纠正</b><p>识别并撤销本次越界改动，保留原有工作</p><b>复验</b><p>重看完整 git diff 输出，确认只留允许改动</p></div></div></article><article class=\"failure-case\"><div class=\"failure-head\"><span>03 · 结果检查</span><h3>只有一句“已完成”</h3></div><div data-reveal=\"3\" class=\"\"><div class=\"repair\"><b>纠正</b><p>打开正确页面，并查看完整 git diff 输出</p><b>复验</b><p>同时核对显示结果和改动范围</p></div></div></article></div><p class=\"source-note\">三种可能场景，不表示 1.1 已经全部发生；纠正后必须复验</p>",
      "steps": [
        "只给三个现象，请先选一个判断",
        "揭晓信息缺失的纠正与复验",
        "揭晓范围失控的纠正与复验",
        "揭晓验证缺失，并口头复述三种失败"
      ],
      "script": [
        "【操作提示｜课件 p12 第 1 步；本页为教学变式，不故意修改练习项目制造故障】\n\n知道该看什么证据之后，出错时就更容易找方向。这里有三种可能的情况：文案是 AI 自己编的，文字改了但样式也改了，或者只收到一句“已完成”。\n\n先选一种，想一想：我下一步具体要做什么？做完以后，又用什么证据确认问题解决了？",
        "【操作提示｜推进第 2 步，指向信息缺失的纠正和复验】\n\n第一种，先检查任务有没有给足信息。如果没提供准确文案，就补上目标文字、位置和完成标准。\n\n补完以后再核对页面和 git diff 输出。不能只发一句“你理解错了”，然后让 AI 接着去猜你的想法",
        "【操作提示｜推进第 3 步，指向范围失控；此处不运行恢复或覆盖命令】\n\n第二种，先查 git diff 输出，把多改的样式和原来就有的工作分开。只改本次越界的部分，再确认剩下都是正确修改的内容。\n\n这里尤其不要图快，直接 revert 所有修改。那这可能连之前的正确修改也一起丢掉。",
        "【操作提示｜推进第 4 步，指向验证缺失】\n\n第三种，缺的是检查。就用上一节的方法检查：打开正确页面，核对实际显示；再看完整 git diff & git status 输出，核对修改内容和范围。\n\n占位符"
      ],
      "segment": "失败与纠正",
      "seconds": 80,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 只给三个现象，请先选一个判断\n\n2. 揭晓信息缺失的纠正与复验\n\n3. 揭晓范围失控的纠正与复验\n\n4. 揭晓验证缺失，并口头复述三种失败"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p12",
      "closing": "撤销额外修改前，要分清本次变化与原有工作。修正后仍需重新核对页面和完整 git diff 输出，不能只凭“修好了”结束。"
    },
    {
      "id": "p12-trace",
      "label": "路径与引用",
      "title": "读不到，和改错地方，是两种问题",
      "lead": "“找不到文件”卡在读取阶段；“改了另一个页面的同名文字”是修改对象找错。前者先查当前目录和路径，后者先确认正在看的页面实际对应哪个文件，再根据结果处理。",
      "html": "<div class=\"evidence-pair\"><div data-reveal=\"0\" class=\"evidence-panel risk\"><h3>工具执行失败</h3><pre><code>读取结果：找不到文件</code></pre><div data-reveal=\"1\" class=\"\"><p>核对当前目录与文件路径</p><p class=\"verification\">复验：重新读取，检查返回内容</p></div></div><div data-reveal=\"0\" class=\"evidence-panel risk\"><h3>误判代码逻辑</h3><p class=\"large-copy\">同名欢迎语，<br>却属于另一个页面</p><div data-reveal=\"2\" class=\"\"><p>沿当前页面入口确认实际引用</p><p class=\"verification\">复验：改对位置，再查页面与 git diff 输出</p></div></div></div><p class=\"source-note\">教学变式；不在本节展开环境排障或代码架构</p>",
      "steps": [
        "对比两种现象，不急着给答案",
        "读不到：查目录与路径",
        "改错位置：查页面实际引用并复验"
      ],
      "script": [
        "【操作提示｜课件 p12-trace 第 1 步；留在课件比较两个假设场景】\n\n另外两种情况也容易混。左边是读取时就报“找不到文件”。右边是文件改成功了，但改的是另一个页面的同名欢迎语。\n\n一个卡在读取，一个找错了修改对象，处理方向就不一样。",
        "【操作提示｜推进第 2 步，指向路径核对；不现场伪造报错】\n\n读不到时，先看当前目录和目标路径。比如codex 是否在正确的 course-starter 路径下执行，还是用了另外的路径？\n\n路径纠正后重新读取，还要看到目标内容确实返回了，才能继续往下改。",
        "【操作提示｜推进第 3 步，指向页面入口与实际引用】\n\n改错地方时，先从正在改的页面入口查起，确认它对应哪个文件，讲清楚实际要修改的文件路径\n\n找到正确位置后，修改并重新查页面和 git diff 输出。这样我们就能把问题说具体：是读不到，还是对象找错了。下一步也就有方向了。"
      ],
      "segment": "失败与纠正",
      "seconds": 40,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 对比两种现象，不急着给答案\n\n2. 读不到：查目录与路径\n\n3. 改错位置：查页面实际引用并复验"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "",
      "source": "index.html#p12-trace",
      "closing": "路径纠正后重新读取，位置纠正后重新检查页面和 git diff 输出。把现象和下一步对应起来，这里不展开环境排障或项目架构。"
    },
    {
      "id": "p14",
      "label": "行业路标",
      "title": "补代码、查资料、动手、看图",
      "lead": "下面四种能力只作行业路标：补全局部代码、检索资料后回答、通过工具执行动作、理解截图等输入。它们可以组合使用，本节不要求练习或考核；具体可用性仍要看模型与工具环境。",
      "html": "<div class=\"industry-strip\"><div data-reveal=\"0\" class=\"industry-item\"><span class=\"industry-verb\">补</span><h3>代码补全</h3><p>补一行或一个函数</p><p class=\"small-copy\">局部续写代码</p><a href=\"https://docs.github.com/zh/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub 官方入门 ↗</a></div><div data-reveal=\"1\" class=\"industry-item\"><span class=\"industry-verb\">查</span><h3>RAG · 检索增强生成</h3><p>查资料后解释接口</p><p class=\"small-copy\">先检索相关资料，再生成回答</p><a href=\"https://aws.amazon.com/cn/what-is/retrieval-augmented-generation/\" target=\"_blank\" rel=\"noopener noreferrer\">RAG 公开入门 ↗</a></div><div data-reveal=\"2\" class=\"industry-item\"><span class=\"industry-verb\">做</span><h3>工具调用</h3><p>读文件、改代码、跑测试</p><p class=\"small-copy\">回到刚才的动作与返回</p><a href=\"index.html#p09-loop\">回看本节循环 ↗</a></div><div data-reveal=\"3\" class=\"industry-item\"><span class=\"industry-verb\">看</span><h3>多模态理解</h3><p>根据截图指出布局问题</p><p class=\"small-copy\">后续页面反馈仍需运行验证</p><a href=\"https://ai.google.dev/gemini-api/docs/image-understanding?hl=zh-cn\" target=\"_blank\" rel=\"noopener noreferrer\">图片理解参考 ↗</a></div></div><p class=\"source-note\">只作路标，不练习、不考核；具体可用性取决于模型与工具环境</p>",
      "steps": [
        "代码补全：解决局部续写",
        "RAG：检索资料，提供依据",
        "工具调用：执行动作并检查返回",
        "多模态：截图反馈；归纳能力组合的脉络"
      ],
      "script": [
        "【操作提示｜课件 p14 第 1 步；保持口播定位，不打开外部链接演示；延伸阅读留给课后】\n\n这次欢迎语任务，练的是把任务说清楚，再看结果做检查。这就是开场访谈里讲过的第一层能力 Prompt，后面的项目会在它上面继续叠加。\n\n最后用一小段时间，认几个行业里常见的名字。这部分只作路标，不练习，也不考核。\n\n首先是代码补全，是最早的 AI coding 工具，适合续写一行代码或一个函数，比如 github copilot 之类的工具。当然我们课上会做更完整的 Agent 协作，对此不做更多介绍；想了解代码补全工具，可以从课件给出的官方入门继续看。",
        "【操作提示｜推进第 2 步，指向 RAG 和已有阅读入口】\n\n下一个是 RAG，叫检索增强生成。比如解释一个接口前，先检索相关资料，再根据资料生成回答。目前是当前比较热门的大模型相关领域\n\n本课会给任务提供必要上下文，但不搭建检索库。想深挖这个方法，课件中给出了公开入门链接。感兴趣可以自行了解一下。",
        "【操作提示｜推进第 3 步，指向工具调用；不重复打开循环图】\n\n下一个是工具调用，就是刚才反复看到的读取文件、编辑代码、运行命令。它是 agent 的组成部分之一，帮助模型执行具体动作。\n\n需要回顾时，就看本节的执行循环图。",
        "【操作提示｜推进第 4 步，指向多模态理解和图片参考入口；不新增截图识别实操】\n\n多模态理解，是把图片等输入也纳入任务。比如后面给页面截图，请 AI 帮忙分析布局问题，再运行页面验证修改。想继续了解，可以看图片理解的参考入口。\n\n从局部补全，到问答和资料辅助，再到工具协作、图片反馈，我们可以看到能力逐步扩展的方向。这些能力可以组合使用。现在回到本节真正要掌握的判断。"
      ],
      "segment": "路标与收尾",
      "seconds": 100,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 代码补全：解决局部续写\n\n2. RAG：检索资料，提供依据\n\n3. 工具调用：执行动作并检查返回\n\n4. 多模态：截图反馈；归纳能力组合的脉络"
        },
        {
          "title": "教学边界与材料",
          "text": "行业四问：解决什么、何时用、本课关系、延伸去哪。沿用原课件资料方向，本次未重新核验外链或产品操作，不新增考核。"
        }
      ],
      "notes": "",
      "source": "index.html#p14",
      "closing": "想继续了解可以使用卡片上的公开参考链接。自检只检查前面讲过的执行循环、信息判断和失败处理，不考这些行业名词。"
    },
    {
      "id": "p14-check",
      "label": "暂停自检",
      "title": "回看欢迎语修改记录，回答这三问",
      "lead": "暂停视频，对照首次欢迎语修改的对话、页面和自己的观察，回答下面三问。解释 Agent、Tool、Context 时，结合任务要求、读取动作和返回；上下文窗口只需解释容量边界，不从日志猜数字。",
      "html": "<div class=\"self-check\"><article><span class=\"check-number\">1</span><h3>Agent、Tool、Context、Window 各指什么？</h3><div data-reveal=\"1\" class=\"\"><p>前三项结合任务要求、读取动作和返回解释；窗口只需说明容量边界</p></div></article><article><span class=\"check-number\">2</span><h3>一句“完成了”，还缺哪些证据？</h3><div data-reveal=\"2\" class=\"\"><p>页面核对结果，git diff 输出核对范围；分类理由要解释得通</p></div></article><article><span class=\"check-number\">3</span><h3>至少三种失败，怎样纠正和复验？</h3><div data-reveal=\"3\" class=\"\"><p>补信息、撤销本次越界改动、补结果检查；纠正后重新验证</p></div></article></div>",
      "steps": [
        "暂停，先独立作答",
        "揭晓概念自检依据",
        "揭晓证据边界",
        "揭晓失败自检依据"
      ],
      "script": [
        "【操作提示｜课件 p14-check 第 1 步；保持答案隐藏，留暂停点】\n\n请暂停一下，对照首次欢迎语修改的对话、页面和自己的观察，回答这三问。四个词分别指什么？一句“完成了”还需要哪些证据？能不能列出至少三种失败情况，并说明怎样纠正和复验？\n\n不用逐字背定义。能把概念和刚才的任务连起来，就有了自检的依据。",
        "【操作提示｜推进第 2 步，指向第一问；不要求从运行日志读出上下文窗口大小】\n\n大家可以自行对照前文的课件，对比一下自己对这几个问题的理解\n\n占位符",
        "【操作提示｜推进第 3 步，指向第二问】\n\n占位符\n\n占位符",
        "【操作提示｜推进第 4 步 → 切 VS Code，展示同一份证据记录，将概念地图、分类理由、缺失信息与已有证据关联；未完成项明确留空或标待补，不代填成功结果】\n\n占位符\n\n占位符"
      ],
      "segment": "路标与收尾",
      "seconds": 40,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 暂停，先独立作答\n\n2. 揭晓概念自检依据\n\n3. 揭晓证据边界\n\n4. 揭晓失败自检依据"
        },
        {
          "title": "教学边界与材料",
          "text": "初稿写入练习仓库 docs/evidence/CH01_PROMPT_EXPERIMENT.md；尚无本人实操证据不能记为通过。"
        }
      ],
      "notes": "",
      "source": "index.html#p14-check",
      "closing": "还没实际完成欢迎语修改时，先回到<a href=\"../01-environment/index.html#p07\">首次欢迎语修改练习</a>补做。概念地图和分类理由写入 docs/evidence/CH01_PROMPT_EXPERIMENT.md，尚未核对的内容单列。"
    },
    {
      "id": "p14-summary",
      "label": "带走一个习惯",
      "title": "每到一个结论，追问一次依据",
      "lead": "回看执行记录时，沿着输入、动作、执行、返回和下一步，逐项找出对应内容。留下循环与概念地图、写明理由的信息分类，以及尚需补清的任务信息；下一节再判断哪些动作可以允许执行。",
      "html": "<div class=\"recap\"><p class=\"hand recap-main\">它拿到了什么？<br>它实际做了什么？<br>结果支持什么结论？</p><div class=\"recap-notes\"><div data-reveal=\"0\" class=\"\"><p><b>四个词</b><br>Agent · Tool · Context · Window</p><p><b>三种缺口</b><br>信息不全 · 范围失控 · 没有验证</p></div><div data-reveal=\"1\" class=\"\"><p class=\"deliverable\"><b>留下两份记录</b><br>循环与概念地图 + 有理由的信息分类</p></div></div></div>",
      "steps": [
        "用三句追问收拢本节",
        "说明产出与下一节权限衔接"
      ],
      "script": [
        "【操作提示｜回课件 p14-summary 第 1 步，依次指向三个追问】\n\nok 我们总结一下这一小节的内容，这一节我们把一句欢迎语的修改，拆成了输入、动作、执行、返回和下一步。以后看一段 AI 工作记录，就沿着这条线追：它拿到了什么，实际做了什么，结果能支持什么结论。",
        "【操作提示｜推进第 2 步，指向两份记录与下一节入口；本节结束，不提前演示权限设置】\n\n希望大家在脑海中下这一节的 循环与概念 图，以及信息分类的依据。我们的个人主页构建任务还缺哪些信息，也一并记录一下。\n\n下一节，我们沿用这个项目，继续关注一下权限问题，比如：哪些动作可以允许 AI 执行，哪些情况需要停下来由人决定。"
      ],
      "segment": "路标与收尾",
      "seconds": 20,
      "layout": "lesson-summary",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 用三句追问收拢本节\n\n2. 说明产出与下一节权限衔接"
        },
        {
          "title": "教学边界与材料",
          "text": "小结不引入新概念。初稿与概念地图用于 1.3/1.4 后续练习。"
        }
      ],
      "notes": "",
      "source": "index.html#p14-summary",
      "closing": "先把结论对应到实际要求和返回，再讨论权限。当前缺少的记录明确标出，补做以后再完善。"
    }
  ]
};

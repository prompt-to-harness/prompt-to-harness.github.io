window.lesson = {
  "title": "Agent 执行机制与 AI 协作基础",
  "chapter": "第 1 章 · Prompt",
  "section": "01.02",
  "summary": "复盘 1.1 欢迎语任务；六段主线，先证据后概念，15 分钟编排预算。",
  "segments": [
    {
      "label": "执行循环",
      "seconds": 180
    },
    {
      "label": "信息与术语",
      "seconds": 180
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
      "label": "课程路线",
      "seconds": 90
    },
    {
      "label": "路标与收尾",
      "seconds": 150
    }
  ],
  "scenes": [
    {
      "id": "p09",
      "label": "把小改动拆开看",
      "title": "把一次小改动拆开看",
      "lead": "1.1 做过一次 → 1.2 拆开看 → 1.3 理解权限",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<div class=\"opening\"><div class=\"welcome-sheet\"><span class=\"eyebrow\">环境检查页 · 原文</span><p class=\"welcome-old\">你好，欢迎来到我的练习页面</p><div data-reveal=\"1\" class=\"\"><span class=\"pencil-mark\">这次只改这一句</span><p class=\"welcome-new\">你好，欢迎来到<br>Vibe Coding 课堂！</p></div></div><div class=\"opening-question\"><div data-reveal=\"0\" class=\"\"><p class=\"hand\">你发出一句话，<br>谁真正改了文件？</p></div><div data-reveal=\"1\" class=\"\"><p>今天只追三件事：<br><b>拿到什么 → 做了什么 → 凭什么相信</b></p></div></div></div><p class=\"source-note\">原文来自 Starter；目标沿用 1.1。此处为任务对照，不是运行结果。</p>",
      "steps": [
        "回看原欢迎语，抛出“谁改了文件”",
        "圈定目标，说明本节只复盘已有任务"
      ],
      "script": [
        "【操作提示｜课件 p09 第 1 步；保留课件 Chrome 标签页，暂不切窗口】\n\n上一节，我们请 AI 改了一句欢迎语。从“你好，欢迎来到我的练习页面”，改成“你好，欢迎来到 Vibe Coding 课堂！”操作做完了，今天我们再回头看一个问题：我在对话里发了一句话，电脑上的文件到底是怎么变的？\n\n中间发生了哪些动作？哪些只是它准备做，哪些已经有了结果？把这几件事分清楚，后面看 AI 的执行记录，你就知道应该看哪里。",
        "【操作提示｜推进第 2 步 → 切 VS Code，打开上一节练习副本中的 docs/evidence/CH01_PROMPT_EXPERIMENT.md，定位已有请求和检查记录，再回课件；录前准备好 1.1 的原始记录，缺失时明确使用教学示意，不重发修改任务】\n\n我们沿用上一节的欢迎语任务。请把注意力放在三件事上：它拿到了什么信息，实际做了什么，以及我们凭什么接受结果。\n\n如果你已经跟做过，可以拿自己的记录来对照。还没做过，也可以先看懂这次拆解，之后补做上一节，再把真实证据填进记录里。"
      ],
      "segment": "执行循环",
      "seconds": 20,
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 回看原欢迎语，抛出“谁改了文件”\n\n2. 圈定目标，说明本节只复盘已有任务"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 20 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09"
    },
    {
      "id": "p09-request",
      "label": "请求与结果",
      "title": "“准备读取”，还不是“已经读到”",
      "lead": "先停在请求这一刻：它已经知道文件内容了吗？",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<div class=\"evidence-pair\"><div data-reveal=\"0\" class=\"evidence-panel agent\"><h3>Agent · 提出动作</h3><blockquote>准备读取<br><code>setup-check/index.html</code></blockquote><span class=\"stamp\">请求</span></div><div data-reveal=\"1\" class=\"evidence-panel ctx\"><h3>工具返回 · 文件内容</h3><pre><code>&lt;h1 id=\"welcome-message\"&gt;\n  你好，欢迎来到我的练习页面。\n&lt;/h1&gt;</code></pre><span class=\"stamp\">有了返回，才能核对读到了什么</span></div></div><div data-reveal=\"2\" class=\"conclusion \"><p>提出动作 ≠ 执行成功；下一步要看返回</p></div><p class=\"source-note\">请求与返回为教学示意；请对应 1.1 中真实的两条记录</p>",
      "steps": [
        "只看请求，停顿 5 秒",
        "展示返回，圈出实际欢迎语",
        "比较请求与结果，归纳证据边界"
      ],
      "script": [
        "【操作提示｜课件 p09-request 第 1 步；只展示左侧请求，提问后停约 5 秒】\n\n先看左边这句话：“准备读取 setup-check/index.html。”读到这里，你能确定它已经知道文件里的欢迎语了吗？\n\n我们停一下。这里表达的是准备做什么。要判断有没有读到，还得往下找实际返回。",
        "【操作提示｜推进第 2 步 → 切 Terminal 中保留的 1.1 执行记录，定位读取请求和对应返回；记录已另存时在 VS Code 展示。只回看，不重新运行 Codex；若返回折叠，按实际界面展开】\n\n我现在切到上一节的记录，把请求和返回放在一起看。先认路径，再看返回的内容。如果里面确实有 welcome-message 和当时的欢迎语，我们就有了这次读取的具体依据。\n\n如果返回的是“找不到文件”，那看到的就是一次读取失败。课件右边这段 HTML 是教学示意，真实运行要以我们刚才找到的记录为准。",
        "【操作提示｜回课件第 3 步，指向底部结论】\n\n以后看到“准备修改”“准备测试”，也可以这样看：先找到后面的执行结果，再判断事情做到哪一步。\n\n现在我们已经分开了请求和返回。接下来，把它们放回整个任务，看看下一步动作是怎么接上来的。"
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
      "notes": "<p>预算 50 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09-request"
    },
    {
      "id": "p09-loop",
      "label": "五节点循环",
      "title": "下一步，从上一步的返回里来",
      "lead": "沿同一次任务，逐步连起输入、动作、执行与结果。",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1168 370\" role=\"img\" aria-labelledby=\"title-agent-loop\" style=\"--rough:url(#rough-agent-loop)\"><title id=\"title-agent-loop\">五节点执行循环：继续回到提出动作，完成或停止退出</title><style>.diagram-arrow{fill:none;stroke:#243042;stroke-width:2.5}.sketch{filter:var(--rough)}text{font-family:Course Sans,Noto Sans SC,sans-serif}.diagram-title{font-family:Course Title,Noto Sans SC,sans-serif}</style><defs><filter id=\"rough-agent-loop\" filterUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"1228\" height=\"430\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".035\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"2.3\"/></filter><marker id=\"arrow-agent-loop\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10Z\" fill=\"#243042\"/></marker></defs><g data-reveal=\"0\" class=\"\"><g data-node=\"input\"><rect x=\"10\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"28\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#243042\" class=\"\"><tspan x=\"28\" dy=\"0\">01</tspan></text><text x=\"115\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"115\" dy=\"0\">任务输入</tspan></text><text x=\"115\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"115\" dy=\"0\">只改指定欢迎语</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><g data-node=\"action\"><rect x=\"242\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" class=\"sketch\"/><text x=\"260\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#5A51D1\" class=\"\"><tspan x=\"260\" dy=\"0\">02</tspan></text><text x=\"347\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#5A51D1\" class=\"diagram-title\"><tspan x=\"347\" dy=\"0\">提出动作</tspan></text><text x=\"347\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"347\" dy=\"0\">请求读取目标文件</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><path data-edge=\"input:action\" d=\"M220 91H236\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"1\" class=\"\"><g data-node=\"tool\"><rect x=\"474\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2\" class=\"sketch\"/><text x=\"492\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#0B6B5F\" class=\"\"><tspan x=\"492\" dy=\"0\">03</tspan></text><text x=\"579\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#0B6B5F\" class=\"diagram-title\"><tspan x=\"579\" dy=\"0\">工具执行</tspan></text><text x=\"579\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"579\" dy=\"0\">执行文件读取</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><path data-edge=\"action:tool\" d=\"M452 91H468\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"2\" class=\"\"><g data-node=\"result\"><rect x=\"706\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" class=\"sketch\"/><text x=\"724\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#6E6043\" class=\"\"><tspan x=\"724\" dy=\"0\">04</tspan></text><text x=\"811\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#6E6043\" class=\"diagram-title\"><tspan x=\"811\" dy=\"0\">结果返回</tspan></text><text x=\"811\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"811\" dy=\"0\">文件内容或报错</tspan></text></g></g><g data-reveal=\"2\" class=\"\"><path data-edge=\"tool:result\" d=\"M684 91H700\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"3\" class=\"\"><g data-node=\"next\"><rect x=\"938\" y=\"35\" width=\"210\" height=\"112\" rx=\"12\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" class=\"sketch\"/><text x=\"956\" y=\"65\" text-anchor=\"start\" font-size=\"18\" fill=\"#5A51D1\" class=\"\"><tspan x=\"956\" dy=\"0\">05</tspan></text><text x=\"1043\" y=\"99\" text-anchor=\"middle\" font-size=\"27\" fill=\"#5A51D1\" class=\"diagram-title\"><tspan x=\"1043\" dy=\"0\">下一步</tspan></text><text x=\"1043\" y=\"128\" text-anchor=\"middle\" font-size=\"18\" fill=\"#5B6573\" class=\"\"><tspan x=\"1043\" dy=\"0\">修改、再读或停止</tspan></text></g></g><g data-reveal=\"3\" class=\"\"><path data-edge=\"result:next\" d=\"M916 91H932\" class=\"diagram-arrow\" marker-end=\"url(#arrow-agent-loop)\"/></g><g data-reveal=\"4\" class=\"\"><path data-edge=\"next:action\" d=\"M1043 147V205H347V154\" class=\"diagram-arrow sketch\" marker-end=\"url(#arrow-agent-loop)\"/><text x=\"657\" y=\"238\" text-anchor=\"middle\" font-size=\"22\" fill=\"#5A51D1\" class=\"\"><tspan x=\"657\" dy=\"0\">继续：依据结果提出新动作</tspan></text><path data-edge=\"next:end\" d=\"M1043 205V276\" class=\"diagram-arrow sketch\" marker-end=\"url(#arrow-agent-loop)\"/><text x=\"1030\" y=\"258\" text-anchor=\"end\" font-size=\"18\" fill=\"#243042\" class=\"\"><tspan x=\"1030\" dy=\"0\">完成或停止</tspan></text><g data-node=\"end\"><rect x=\"936\" y=\"285\" width=\"214\" height=\"60\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"1043\" y=\"325\" text-anchor=\"middle\" font-size=\"25\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"1043\" dy=\"0\">退出循环</tspan></text></g><text x=\"20\" y=\"305\" text-anchor=\"start\" font-size=\"22\" fill=\"#243042\" class=\"\"><tspan x=\"20\" dy=\"0\">人的位置：确认目标与范围</tspan><tspan x=\"20\" dy=\"31.9\">按授权执行，依据结果验收</tspan></text></g></svg>",
      "steps": [
        "先看目标与范围",
        "展开提出动作和工具执行",
        "检查返回：内容或报错",
        "依据返回决定下一步",
        "显示继续回路、退出条件与人的位置"
      ],
      "script": [
        "【操作提示｜课件 p09-loop 第 1 步，指向任务输入】\n\n循环从我们交出去的任务开始。上一节指定了新欢迎语，也限定了只改哪个文件、其他内容和布局要保留。这些要求给后面的动作定了方向。",
        "【操作提示｜推进第 2 步，沿“提出动作 → 工具执行”指示；这里留在课件，不重复切终端】\n\n接着，Agent 根据已有信息提出动作。比如，要改欢迎语，先请求读取目标文件。真正去读取文件的是工具。\n\n你可以把这两格连起来看：前一格说要做什么，后一格负责把这个动作执行出去。",
        "【操作提示｜推进第 3 步，指向结果返回；对应刚才展示过的真实记录】\n\n工具执行后，把结果交回来。读成功了，返回里有文件内容；读失败了，可能是路径或权限相关的报错。\n\n这两种结果会把任务带向不同的下一步。所以我们看执行记录时，不能只数它调用了几次工具，还要看每次返回了什么。",
        "【操作提示｜推进第 4 步，指向下一步】\n\n如果已经读到了原文，就可以依据原文继续修改。如果读不到，就先核对路径，必要时向人提问。修改后，还要根据新的返回和检查结果继续判断。\n\n看见第五格，并不表示任务自动结束。这一格要回答的是：现在的信息够不够，还需要做什么？",
        "【操作提示｜推进第 5 步，先沿回线指回“提出动作”，再指退出分支和人的位置】\n\n需要继续，就沿这条回线再提出动作。完成了，或者遇到需要停止的情况，就从下面退出。比如需要的授权没有拿到，就不能照原计划继续。\n\n人的工作也在这里：开始时说清目标和范围，执行中按需要作决定，最后拿结果来验收。具体动作是否要弹出确认，取决于当前权限设置；下一节我们专门看这个问题。"
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
      "notes": "<p>预算 80 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09-loop"
    },
    {
      "id": "p09-agent",
      "label": "Model 与 Agent",
      "title": "模型提供能力，Agent 组织任务",
      "lead": "把刚才的动作串起来，才有一轮协作过程。",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<div class=\"model-comparison\"><div data-reveal=\"0\" class=\"evidence-panel agent\"><h3>Model · 模型</h3><p class=\"large-copy\">生成内容<br>作出判断</p><p>提出文字或动作建议</p></div><div data-reveal=\"1\" class=\"evidence-panel agent\"><h3>Agent · 智能体</h3><p class=\"large-copy\">模型 + 上下文 + 工具<br>放进执行循环</p><p>依据返回，继续推进任务</p></div></div><div data-reveal=\"2\" class=\"conclusion \"><p>模型输出有不确定性，需要用证据验证</p></div>",
      "steps": [
        "说明模型的能力",
        "用刚才循环解释 Agent",
        "一句话说明不确定性"
      ],
      "script": [
        "【操作提示｜课件 p09-agent 第 1 步，指向 Model】\n\n现在再给刚才的过程起名字。Model 就是模型，它提供生成内容、作出判断的能力。比如读到一段代码后，生成解释，或者提出下一步的动作建议。",
        "【操作提示｜推进第 2 步，指向 Agent，并回指卡片里的上下文、工具和循环】\n\nAgent，中文常说智能体，是把模型、当前可用的信息和工具组织起来，让任务能够一轮一轮往前推进。\n\n刚才的“读取、拿到返回、继续修改”，就是一个具体例子。以后说 Agent 在工作，你就可以去找它用了什么信息、提出什么动作、拿到了什么返回。",
        "【操作提示｜推进第 3 步】\n\n模型输出有不确定性，所以我们要用实际证据核对它的判断。\n\n接下来再认几个词。它们都能在上一节的记录里找到对应的东西。"
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
      "notes": "<p>预算 30 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09-agent"
    },
    {
      "id": "p10",
      "label": "给记录贴标签",
      "title": "术语，就贴在刚才的记录上",
      "lead": "先找到具体片段，再记它的名字。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<div class=\"labelled-records\"><div data-reveal=\"0\" class=\"record ink\"><div class=\"record-label\">Prompt<br><span>提示词</span></div><div class=\"record-body\">“只改指定欢迎语，其他内容和布局保留。”<small>你给 AI 的任务说明：目标、约束、完成标准</small></div></div><div data-reveal=\"1\" class=\"record tool\"><div class=\"record-label\">Tool<br><span>工具</span></div><div class=\"record-body\">读取文件、编辑代码、运行命令的入口。<small>动作是否成功，要继续看返回</small></div></div><div data-reveal=\"2\" class=\"record ctx\"><div class=\"record-label\">Context<br><span>上下文</span></div><div class=\"record-body\">要求 + 已读取内容 + 工具返回 + 反馈。<small>当前任务中供判断使用的信息；Prompt 也是其中一部分</small></div></div><div data-reveal=\"3\" class=\"record ctx\"><div class=\"record-label\">Context Window<br><span>上下文窗口</span></div><div class=\"record-body\">模型一次能够处理的信息容量边界。<small>Context 是信息；Context Window 限制一次能处理多少信息</small></div></div></div>",
      "steps": [
        "把用户要求标为 Prompt",
        "把动作入口标为 Tool",
        "把供判断的信息标为 Context",
        "单独解释 Context Window：一次处理的容量边界"
      ],
      "script": [
        "【操作提示｜课件 p10 第 1 步，指向用户要求】\n\n先看这句要求：“只改指定欢迎语，其他内容和布局保留。”这就是 Prompt，也就是我们给 AI 的任务说明。\n\n它不一定很长，关键是把这次要做的事说清楚。怎样补齐目标、约束和完成标准，我们在一点四继续练。",
        "【操作提示｜推进第 2 步，指向 Tool】\n\nTool 就是工具。读取文件、编辑代码、运行命令，都需要具体的执行入口。\n\n刚才记录里的读取动作，就是通过工具完成的。看工具时，要把动作和返回连起来，才知道实际发生了什么。",
        "【操作提示｜推进第 3 步，指向 Context】\n\nContext 是上下文，也就是当前供判断使用的信息。我们的任务要求、已经读到的文件内容、工具返回，还有我们补充的反馈，都可以成为其中的一部分。\n\n比如我补充一句“这次不要改布局”，后面的判断就需要考虑这个约束。Prompt 也在上下文里面。",
        "【操作提示｜推进第 4 步，指向 Context Window】\n\nContext Window 是上下文窗口，说的是模型一次能处理多少信息的容量边界。\n\n先记住这个区别：Context 说的是信息本身，Window 说的是一次处理这些信息的容量。接下来两张图，我们分别看“信息有没有拿到”和“信息能放下多少”。"
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
      "notes": "<p>预算 55 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10"
    },
    {
      "id": "p10-context",
      "label": "可访问与已读取",
      "title": "文件在项目里，不等于已经读过",
      "lead": "先问“有哪条读取证据”，再判断结论的依据。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1168 370\" role=\"img\" aria-labelledby=\"title-context\" style=\"--rough:url(#rough-context)\"><title id=\"title-context\">项目文件通过工具读取，成功返回并纳入上下文；用户要求也是上下文的一部分</title><style>.diagram-arrow{fill:none;stroke:#243042;stroke-width:2.5}.sketch{filter:var(--rough)}text{font-family:Course Sans,Noto Sans SC,sans-serif}.diagram-title{font-family:Course Title,Noto Sans SC,sans-serif}</style><defs><filter id=\"rough-context\" filterUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"1228\" height=\"430\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".035\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"2.3\"/></filter><marker id=\"arrow-context\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10Z\" fill=\"#243042\"/></marker></defs><g data-reveal=\"0\" class=\"\"><g data-node=\"repo\"><rect x=\"10\" y=\"30\" width=\"335\" height=\"225\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"32\" y=\"70\" text-anchor=\"start\" font-size=\"28\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"32\" dy=\"0\">项目中可访问</tspan></text><text x=\"32\" y=\"117\" text-anchor=\"start\" font-size=\"23\" fill=\"#243042\" class=\"\"><tspan x=\"32\" dy=\"0\">setup-check/index.html</tspan><tspan x=\"32\" dy=\"33.35\">README.md</tspan><tspan x=\"32\" dy=\"33.35\">其他页面与样式</tspan></text><text x=\"32\" y=\"229\" text-anchor=\"start\" font-size=\"20\" fill=\"#D9481C\" class=\"\"><tspan x=\"32\" dy=\"0\">文件存在 ≠ 有读取证据</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><path data-edge=\"repo:read\" d=\"M347 135H439\" class=\"diagram-arrow\" marker-end=\"url(#arrow-context)\"/><text x=\"394\" y=\"105\" text-anchor=\"middle\" font-size=\"20\" fill=\"#243042\" class=\"\"><tspan x=\"394\" dy=\"0\">选择</tspan></text><g data-node=\"read\"><rect x=\"450\" y=\"91\" width=\"245\" height=\"88\" rx=\"12\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2\" class=\"sketch\"/><text x=\"572\" y=\"129\" text-anchor=\"middle\" font-size=\"27\" fill=\"#0B6B5F\" class=\"diagram-title\"><tspan x=\"572\" dy=\"0\">工具读取</tspan></text><text x=\"572\" y=\"157\" text-anchor=\"middle\" font-size=\"20\" fill=\"#0B6B5F\" class=\"\"><tspan x=\"572\" dy=\"0\">先检查成功返回</tspan></text></g><path data-edge=\"read:context\" d=\"M698 135H796\" class=\"diagram-arrow\" marker-end=\"url(#arrow-context)\"/><text x=\"746\" y=\"105\" text-anchor=\"middle\" font-size=\"20\" fill=\"#243042\" class=\"\"><tspan x=\"746\" dy=\"0\">纳入</tspan></text></g><g data-reveal=\"2\" class=\"\"><g data-node=\"context\"><rect x=\"807\" y=\"30\" width=\"350\" height=\"225\" rx=\"12\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" class=\"sketch\"/><text x=\"829\" y=\"70\" text-anchor=\"start\" font-size=\"27\" fill=\"#6E6043\" class=\"diagram-title\"><tspan x=\"829\" dy=\"0\">当前有依据的信息</tspan></text><text x=\"829\" y=\"116\" text-anchor=\"start\" font-size=\"23\" fill=\"#6E6043\" class=\"\"><tspan x=\"829\" dy=\"0\">你的目标与约束</tspan><tspan x=\"829\" dy=\"33.35\">已读取的欢迎语</tspan><tspan x=\"829\" dy=\"33.35\">工具返回与反馈</tspan></text></g><text x=\"20\" y=\"322\" text-anchor=\"start\" font-size=\"26\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"20\" dy=\"0\">判断一条结论前，先问：它依据哪段要求、哪次返回？</tspan></text></g></svg>",
      "steps": [
        "列出可访问的项目文件",
        "只让有读取动作的文件经过工具",
        "检查纳入的信息，不替缺失证据补事实"
      ],
      "script": [
        "【操作提示｜课件 p10-context 第 1 步 → 切 VS Code 文件树，展示上一节练习副本中的 setup-check/index.html 和 README.md；只展开目录，不编辑】\n\n看左边的文件列表。项目里有环境页、有 README，也可能还有其他页面。我们在编辑器里能看见这些文件，说明它们存在。\n\n但如果要说 AI 这一次读过 README，就还需要找到对应依据。不能因为文件放在项目里，就替它补上“已经读过”这一步。",
        "【操作提示｜回课件第 2 步；指向“工具读取”，如需对照只复用先前的读取记录】\n\n现在让目标文件经过工具读取这一格。要检查的是：路径对不对，返回有没有成功，内容是不是当前任务需要的。\n\n上一节改欢迎语，指定文件里的相关内容就很关键。一个无关页面的文字，即使成功读到了，也不能拿来证明目标页面应该怎么改。",
        "【操作提示｜推进第 3 步，指向右侧信息；不演示隐藏请求或内部推理】\n\n所以，看到一条结论时，我们可以追问：它依据的是哪段要求，或者哪次返回？\n\n找得到，就把依据指出来。暂时找不到，就写“依据不足，需要补充读取或核对”。我们先把能看见的证据整理清楚。"
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
      "notes": "<p>预算 55 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10-context"
    },
    {
      "id": "p10-window",
      "label": "上下文窗口",
      "title": "一次能处理的信息，有容量边界",
      "lead": "Context 是信息；Context Window 是一次处理的容量边界。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<div class=\"window-metaphor\"><div class=\"information-stack\"><span>项目文件</span><span>历史对话</span><span>工具返回</span><span>本次要求</span></div><div data-reveal=\"1\" class=\"\"><div class=\"window-frame\"><h3>当前处理的信息</h3><p>保留相关、准确的内容</p><div class=\"capacity-line\" aria-hidden=\"true\"></div><p class=\"small-copy\">容量有限，不等于记住整个项目</p></div></div></div><div data-reveal=\"2\" class=\"conclusion \"><p>不是资料越多越好，而是完成任务所需的信息有没有到位</p></div><p class=\"source-note\">容量示意，不代表具体产品的界面、比例或固定 token 数</p>",
      "steps": [
        "看信息来源，提出“会话很长就全记住了吗”",
        "显示有限窗口，区分信息与容量",
        "回到相关性和准确性"
      ],
      "script": [
        "【操作提示｜课件 p10-window 第 1 步，逐项指向信息来源；本页不新开浏览器，不做长会话实验】\n\n刚才解决了有没有读到的问题。现在再想一步：如果项目很大，对话又很长，是不是把所有资料都放进去，就一定更好？\n\n先看这些来源：文件、历史对话、工具返回、本次要求。信息会越积越多，而一次处理的信息有容量边界。",
        "【操作提示｜推进第 2 步，指向窗口边框】\n\n这个框表示一次处理的容量。它是帮助理解的示意图，不是产品里的真实界面，也没有表示某个固定数字。\n\n所以，不能只凭“以前聊过”，就认定现在每个细节都还在参与判断。具体保留了什么，需要结合当前记录来看。",
        "【操作提示｜推进第 3 步，回到欢迎语任务】\n\n回到我们的小任务，最有用的是哪几项？目标文字、指定文件里的原文，还有允许修改的范围。\n\n把这些相关、准确的信息给到位，比不断塞进无关材料更能帮助我们检查任务。后面项目变大，我们还会继续练习怎样管理这些信息。"
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
      "notes": "<p>预算 35 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10-window"
    },
    {
      "id": "p10-diff",
      "label": "差异与页面",
      "title": "两份证据，回答两个问题",
      "lead": "Diff 看改动；页面看结果。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<div class=\"evidence-pair\"><div data-reveal=\"0\" class=\"evidence-panel ink\"><h3>Diff · 改了什么</h3><div class=\"diff-lines\"><p class=\"minus\">− 你好，欢迎来到我的练习页面</p><p class=\"plus\">+ 你好，欢迎来到 Vibe Coding 课堂！</p></div><p class=\"small-copy\">核对改动内容与范围</p></div><div data-reveal=\"1\" class=\"evidence-panel ink\"><h3>页面 · 显示什么</h3><div class=\"page-evidence\"><span>环境检查页</span><b>你好，欢迎来到<br>Vibe Coding 课堂！</b></div><p class=\"small-copy\">打开正确页面，刷新并核对结果</p></div></div><div data-reveal=\"2\" class=\"conclusion \"><p>“看到了新文案”，还不能单独证明“没有多改文件”</p></div><p class=\"source-note\">差异与页面均为教学示意，非真实执行截图；正式检查需查看完整 Diff</p>",
      "steps": [
        "解释 Diff 的作用",
        "展示页面结果的作用",
        "问“页面能证明没多改文件吗”"
      ],
      "script": [
        "【操作提示｜课件 p10-diff 第 1 步 → 切 Terminal“仓库检查”，在同一练习副本运行 git status --short、git diff；有暂存改动补看 git diff --cached。若上一节已提交或又有新改动，展示当时保存的完整 Diff 和初始状态，不把当前差异冒充上一节结果】\n\n现在看两份检查证据。第一份是 Diff，就是修改前后的差异。\n\n我先看文件列表，再看每个改动块：欢迎语是否按要求替换了，有没有动到样式或者其他文件。课件只截了两行文字，实际检查要看完整差异，并和开始前的状态对照。\n\n如果现在没有差异输出，先确认改动是不是已经提交。回看一次旧任务，要找到那次任务留下的记录。",
        "【操作提示｜推进课件第 2 步 → 在 Chrome 新开标签页“1.1 欢迎语结果”，打开 http://localhost:4174/setup-check/。录前确认服务来自同一练习副本；服务未启动时，在该副本的独立 Terminal 标签页运行 python3 -m http.server 4174 --bind 127.0.0.1。保留课件页，核对地址、刷新，检查文案与布局；若结果不符，描述实际现象，不念成功结论】\n\n第二份是浏览器里的页面。我现在新开一个标签页，打开同一份练习项目的环境页，再刷新一次。\n\n我们核对两件事：显示的文字是否是要求的那一句，原来的布局有没有变化。结果对得上，才能记录对应检查通过；对不上，就把实际现象记下来，继续定位原因。",
        "【操作提示｜回课件第 3 步，指向两份证据；保留结果标签页供后面回看】\n\n假如页面显示了新欢迎语，能不能就此认定没有多改文件？还不能。别的文件即使被改了，也不一定会在这个页面上显示出来。\n\n所以，页面帮我们核对看见的结果，完整 Diff 帮我们核对改动内容和范围。接下来，我们用这个区别判断几句话。"
      ],
      "segment": "信息与术语",
      "seconds": 35,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 解释 Diff 的作用\n\n2. 展示页面结果的作用\n\n3. 问“页面能证明没多改文件吗”"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 35 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10-diff"
    },
    {
      "id": "p11",
      "label": "四类信息",
      "title": "同一句“改好了”，你凭什么相信？",
      "lead": "先分清信息的性质，再决定怎样处理。",
      "kicker": "第 1 章 · 1.2 · 判断信息",
      "html": "<div class=\"classification\"><div data-reveal=\"0\" class=\"class-row ok\"><span class=\"class-name\">事实</span><blockquote>刷新正确页面，看到了目标文案</blockquote><p>有对应观察支持；仍需 Diff 查范围</p></div><div data-reveal=\"1\" class=\"class-row ctx\"><span class=\"class-name\">假设</span><blockquote>“用户可能更喜欢活泼的文案。”</blockquote><p>尚未确认，向用户核实</p></div><div data-reveal=\"2\" class=\"class-row agent\"><span class=\"class-name\">建议</span><blockquote>“可以顺便加个动画。”</blockquote><p>是可选做法，由人决定是否采纳</p></div><div data-reveal=\"3\" class=\"class-row ink\"><span class=\"class-name\">决定</span><blockquote>用户明确说：“只改文字，不加动画。”</blockquote><p>已确认，约束本次任务范围</p></div></div>",
      "steps": [
        "先看事实及它能支持的范围",
        "把未经确认的偏好识别为假设",
        "把可选做法识别为建议",
        "用人的明确决定约束范围"
      ],
      "script": [
        "【操作提示｜课件 p11 第 1 步，指向事实卡片】\n\n先带你看一个例子。刷新了正确页面，确实看到了指定的新文案，这项观察可以记为事实。\n\n但结论要说准确：它支持“文案已经显示”。如果要再说“其他文件都没改”，就还得补上差异检查的证据。",
        "【操作提示｜推进第 2 步，指向假设】\n\n再看“用户可能更喜欢活泼一点的文案”。这个偏好有没有确认？如果没有，它就是一个假设。\n\n它可以提醒我们去问用户，却不能直接成为修改要求。否则本来只要替换一句话，做着做着就变成了重新设计。",
        "【操作提示｜推进第 3 步，指向建议】\n\n“可以顺便加个动画”，这是建议。它提出了一种可选做法，接下来还需要决定要不要做。\n\n读 AI 的回复时，可以把这种句子先单独放出来。不要因为建议写得具体，就默认已经同意它执行。",
        "【操作提示｜推进第 4 步，指向决定】\n\n用户明确说“这次只改文字，不加动画”，这是已经确认的决定。后续动作要遵守这个范围。\n\n我们刚才分出了事实、假设、建议和决定。下面用八句话试一试，重点看理由，不用背标签。"
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
      "notes": "<p>预算 55 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p11"
    },
    {
      "id": "p11-judge",
      "label": "先判断，再看证据",
      "title": "“它说过”，不等于“它说的成立”",
      "lead": "先判断②和③：分别能支持什么结论？缺什么证据？",
      "kicker": "第 1 章 · 1.2 · 判断信息",
      "html": "<div class=\"statement-grid\"><article class=\"statement\"><span class=\"card-quote\">① 记录中有一次目标文件读取</span><div data-reveal=\"1\" class=\"card-answer ctx\"><b>事实候选</b><p>核对真实日志中的路径和返回；有对应证据才成立</p></div></article><article class=\"statement\"><span class=\"card-quote\">② 刷新正确页面，显示了目标文案</span><div data-reveal=\"1\" class=\"card-answer ok\"><b>事实</b><p>有对应观察支持“文案已显示”；不能单独证明改动范围</p></div></article><article class=\"statement\"><span class=\"card-quote\">③ AI 说：“没有多改文件。”尚无 Diff。</span><div data-reveal=\"1\" class=\"card-answer risk\"><b>待验证主张</b><p>不能直接当事实；缺少实际 Diff 和文件范围检查</p></div></article><article class=\"statement\"><span class=\"card-quote\">④ “学员大概喜欢深色背景。”</span><div data-reveal=\"1\" class=\"card-answer ctx\"><b>假设</b><p>偏好未确认，先向用户核实</p></div></article></div><div data-reveal=\"2\" class=\"conclusion \"><p>③保留为“待验证主张”，不强行归入四类</p></div><p class=\"source-note\">八卡练习 · 前四张。依据原 P11 教学草案，待与 M06 原题核对。</p>",
      "steps": [
        "停顿，让学员判断②③，其余对照",
        "揭晓四条，重点解释证据边界",
        "收拢：待验证主张不能因出自 AI 就成为事实"
      ],
      "script": [
        "【操作提示｜课件 p11-judge 第 1 步；答案保持隐藏，停约 5 秒，提示学员可暂停】\n\n先比较第二条和第三条。第二条说刷新页面后看到了目标文案；第三条是 AI 说“没有多改文件”，但还没看 Diff。\n\n这两句话，你分别敢确认到哪一步？可以暂停一下，先说出自己的理由，再看后面的解析。其他两条也一起判断。",
        "【操作提示｜推进第 2 步，按②③①④的顺序讲解】\n\n第二条，如果有对应的页面观察，就能支持文案已经显示。第三条目前只有一句保证，还缺改动范围的证据。\n\n第一条同样要对应真实日志和返回。第四条说“学员大概喜欢深色背景”，其中“大概”提示我们，这是还没确认的偏好。",
        "【操作提示｜推进第 3 步，指向“待验证主张”】\n\n第三条先记成“待验证主张”就可以，不必硬塞进刚才的四类。我们能确认的是 AI 说过这句话，至于它说的是否成立，还要继续查。\n\n记录时可以写得很具体：“缺少完整 Diff，暂时不能确认改动范围。”这样下一步要补什么就清楚了。"
      ],
      "segment": "判断信息",
      "seconds": 65,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 停顿，让学员判断②③，其余对照\n\n2. 揭晓四条，重点解释证据边界\n\n3. 收拢：待验证主张不能因出自 AI 就成为事实"
        },
        {
          "title": "教学边界与材料",
          "text": "此为原 P11 八条草案的前四条，未冒称已核验的 M06 原题。请学员用本人任务片段补证据。"
        }
      ],
      "notes": "<p>预算 65 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p11-judge"
    },
    {
      "id": "p11-more",
      "label": "建议与决定",
      "title": "一句建议，什么时候变成任务？",
      "lead": "先分⑤⑥与⑦⑧，再为自己的任务补一条信息。",
      "kicker": "第 1 章 · 1.2 · 判断信息",
      "html": "<div class=\"statement-grid\"><article class=\"statement\"><span class=\"card-quote\">⑤ “建议先看 Diff。”</span><div data-reveal=\"1\" class=\"card-answer agent\"><b>建议</b><p>提出验证做法；还不表示已经执行</p></div></article><article class=\"statement\"><span class=\"card-quote\">⑥ “可以考虑扩大标题字号。”</span><div data-reveal=\"1\" class=\"card-answer agent\"><b>建议</b><p>可选改动，需要人决定，不能擅自扩范围</p></div></article><article class=\"statement\"><span class=\"card-quote\">⑦ 教师已批准：“只改欢迎语。”</span><div data-reveal=\"1\" class=\"card-answer ink\"><b>决定</b><p>需有明确确认记录；它约束可修改范围</p></div></article><article class=\"statement\"><span class=\"card-quote\">⑧ 教师决定：“这次不新增依赖。”</span><div data-reveal=\"1\" class=\"card-answer ink\"><b>决定</b><p>需有明确确认记录；后续执行遵守这一边界</p></div></article></div><div data-reveal=\"2\" class=\"conclusion \"><p>还缺什么？目标文案 / 指定文件 / 完成标准 —— 任选一项写清</p></div><p class=\"source-note\">八卡练习 · 后四张。与前页共同构成草案八卡，不替代本人记录。</p>",
      "steps": [
        "先区分建议与已确认决定",
        "揭晓四条，指出确认记录",
        "指出一条缺失信息，留给 1.4"
      ],
      "script": [
        "【操作提示｜课件 p11-more 第 1 步，先不揭晓答案】\n\n再看后四条。“建议先看 Diff”，说明已经看过了吗？“可以考虑扩大标题字号”，说明已经允许修改字号了吗？\n\n这两句都在提出可选做法。先分清它们和下面两句明确批准的范围有什么不同。",
        "【操作提示｜推进第 2 步，指向⑤⑥和⑦⑧】\n\n第五、第六条是建议。第七、第八条有教师明确批准或决定的前提，所以可以作为这次任务的边界。\n\n对应自己的任务时，要找到实际确认记录。比如“不新增依赖”，就不能因为实现过程中觉得方便，直接装一个新的库。",
        "【操作提示｜推进第 3 步 → 切 VS Code，打开练习副本 docs/evidence/CH01_PROMPT_EXPERIMENT.md，在已有记录后补“缺失信息、依据、准备补充的要求”；无缺项时用课件变式示范并标明，不虚构本人经历。完成后回课件】\n\n现在回到自己的任务说明，找一项应该补清楚的信息。比如只说“改得友好一点”，却没给目标文字；或者说“改首页”，却没指定文件。\n\n把缺的那一项写下来，再补一句你准备怎样说明。自己的任务已经写清楚了，也可以用课件里的变式练习，但要标明是练习例子。一点四我们会接着用这条记录。"
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
      "notes": "<p>预算 60 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p11-more"
    },
    {
      "id": "p12",
      "label": "三个常见缺口",
      "title": "出错了，先找缺的是哪一环",
      "lead": "任选一种现象，先说纠正动作，再说怎样复验。",
      "kicker": "第 1 章 · 1.2 · 失败与纠正",
      "html": "<div class=\"failure-grid\"><article class=\"failure-case\"><div class=\"failure-head\"><span>01 · 任务输入</span><h3>AI 自己编了文案</h3></div><div data-reveal=\"1\" class=\"\"><div class=\"repair\"><b>纠正</b><p>补目标文字、位置、完成标准</p><b>复验</b><p>对照要求重新核对页面与 Diff</p></div></div></article><article class=\"failure-case\"><div class=\"failure-head\"><span>02 · 执行范围</span><h3>文字改了，样式也改了</h3></div><div data-reveal=\"2\" class=\"\"><div class=\"repair\"><b>纠正</b><p>识别并撤销本次越界改动，保留原有工作</p><b>复验</b><p>重看完整 Diff，确认只留允许改动</p></div></div></article><article class=\"failure-case\"><div class=\"failure-head\"><span>03 · 结果检查</span><h3>只有一句“已完成”</h3></div><div data-reveal=\"3\" class=\"\"><div class=\"repair\"><b>纠正</b><p>打开正确页面，并查看完整 Diff</p><b>复验</b><p>同时核对显示结果和改动范围</p></div></div></article></div><p class=\"source-note\">三种可能场景，不表示 1.1 已经全部发生；纠正后必须复验</p>",
      "steps": [
        "只给三个现象，请先选一个判断",
        "揭晓信息缺失的纠正与复验",
        "揭晓范围失控的纠正与复验",
        "揭晓验证缺失，并口头复述三种失败"
      ],
      "script": [
        "【操作提示｜课件 p12 第 1 步；本页为教学变式，不故意修改练习项目制造故障】\n\n知道该看什么证据之后，出错时就更容易找方向。这里有三种可能的情况：文案是 AI 自己编的，文字改了但样式也改了，或者只收到一句“已完成”。\n\n先选一种，想一想：我下一步具体要做什么？做完以后，又用什么确认问题解决了？",
        "【操作提示｜推进第 2 步，指向信息缺失的纠正和复验】\n\n第一种，先检查任务有没有给足信息。如果没提供准确文案，就补上目标文字、位置和完成标准。\n\n补完以后再核对页面和 Diff。不能只发一句“你理解错了”，因为它仍然不知道应该改成什么。",
        "【操作提示｜推进第 3 步，指向范围失控；此处不运行恢复或覆盖命令】\n\n第二种，先查 Diff，把这次多改的样式和原来就有的工作分开。只处理本次越界的部分，再确认剩下的都是允许修改的内容。\n\n这里尤其不要图快，把整个文件覆盖回去。那样可能连用户之前的修改也一起丢掉。",
        "【操作提示｜推进第 4 步，指向验证缺失】\n\n第三种，缺的是检查。就回到刚才那两份证据：打开正确页面，核对实际显示；再看完整 Diff，核对内容和范围。\n\n你可以用自己的话复述这三种情况。关键是说出一个能执行的纠正动作，再接上复验方法，而不只是“让它再试一次”。"
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
      "notes": "<p>预算 80 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p12"
    },
    {
      "id": "p12-trace",
      "label": "路径与引用",
      "title": "读不到，和改错地方，是两种问题",
      "lead": "先辨认现象，纠正动作才有方向。",
      "kicker": "第 1 章 · 1.2 · 失败与纠正",
      "html": "<div class=\"evidence-pair\"><div data-reveal=\"0\" class=\"evidence-panel risk\"><h3>工具执行失败</h3><pre><code>读取结果：找不到文件</code></pre><div data-reveal=\"1\" class=\"\"><p>核对当前目录与文件路径</p><p class=\"verification\">复验：重新读取，检查返回内容</p></div></div><div data-reveal=\"0\" class=\"evidence-panel risk\"><h3>误判代码逻辑</h3><p class=\"large-copy\">同名欢迎语，<br>却属于另一个页面</p><div data-reveal=\"2\" class=\"\"><p>沿当前页面入口确认实际引用</p><p class=\"verification\">复验：改对位置，再查页面与 Diff</p></div></div></div><p class=\"source-note\">教学变式；不在本节展开环境排障或代码架构</p>",
      "steps": [
        "对比两种现象，不急着给答案",
        "读不到：查目录与路径",
        "改错位置：查页面实际引用并复验"
      ],
      "script": [
        "【操作提示｜课件 p12-trace 第 1 步；留在课件比较两个假设场景】\n\n另外两种情况也容易混。左边是读取时就报“找不到文件”。右边是文件改成功了，但改的是另一个页面的同名欢迎语。\n\n一个卡在读取，一个找错了修改对象，处理方向就不一样。",
        "【操作提示｜推进第 2 步，指向路径核对；不现场伪造报错】\n\n读不到时，先看当前目录和目标路径。比如命令是在练习项目根目录运行，还是误进了另一个文件夹？\n\n路径纠正后重新读取，还要看到目标内容确实返回了，才能继续往下改。",
        "【操作提示｜推进第 3 步，指向页面入口与实际引用】\n\n改错地方时，先从正在看的页面入口查起，确认它对应哪个文件，必要时再追实际引用。\n\n找到正确位置后，修改并重新查页面和 Diff。这样我们就能把问题说具体：是读不到，还是对象找错了。下一步也就有方向了。"
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
      "notes": "<p>预算 40 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p12-trace"
    },
    {
      "id": "p13",
      "label": "能力逐层叠加",
      "title": "项目变复杂，协作能力逐层叠加",
      "lead": "从欢迎语的小闭环，走向可维护的项目。",
      "kicker": "第 1 章 · 1.2 · 课程路线",
      "html": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1168 370\" role=\"img\" aria-labelledby=\"title-course-route\" style=\"--rough:url(#rough-course-route)\"><title id=\"title-course-route\">Prompt、Vibe Coding、SDD、Harness 逐层叠加，始终保留验证和人工判断</title><style>.diagram-arrow{fill:none;stroke:#243042;stroke-width:2.5}.sketch{filter:var(--rough)}text{font-family:Course Sans,Noto Sans SC,sans-serif}.diagram-title{font-family:Course Title,Noto Sans SC,sans-serif}</style><defs><filter id=\"rough-course-route\" filterUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"1228\" height=\"430\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".035\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"2.3\"/></filter><marker id=\"arrow-course-route\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10Z\" fill=\"#243042\"/></marker></defs><g data-reveal=\"0\" class=\"\"><g data-node=\"prompt\"><rect x=\"12\" y=\"146\" width=\"272\" height=\"150\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"32\" y=\"186\" text-anchor=\"start\" font-size=\"30\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"32\" dy=\"0\">Prompt</tspan></text><text x=\"32\" y=\"227\" text-anchor=\"start\" font-size=\"23\" fill=\"#243042\" class=\"\"><tspan x=\"32\" dy=\"0\">说清当前任务</tspan></text><text x=\"32\" y=\"265\" text-anchor=\"start\" font-size=\"19\" fill=\"#5B6573\" class=\"\"><tspan x=\"32\" dy=\"0\">任务说明</tspan></text></g></g><g data-reveal=\"1\" class=\"\"><g data-node=\"vibe\"><rect x=\"302\" y=\"108\" width=\"272\" height=\"150\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"322\" y=\"148\" text-anchor=\"start\" font-size=\"30\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"322\" dy=\"0\">Vibe Coding</tspan></text><text x=\"322\" y=\"189\" text-anchor=\"start\" font-size=\"23\" fill=\"#243042\" class=\"\"><tspan x=\"322\" dy=\"0\">看结果再迭代</tspan></text><text x=\"322\" y=\"227\" text-anchor=\"start\" font-size=\"19\" fill=\"#5B6573\" class=\"\"><tspan x=\"322\" dy=\"0\">页面与检查记录</tspan></text></g><path data-edge=\"prompt:vibe\" d=\"M286 188H297\" class=\"diagram-arrow\" marker-end=\"url(#arrow-course-route)\"/></g><g data-reveal=\"2\" class=\"\"><g data-node=\"sdd\"><rect x=\"592\" y=\"70\" width=\"272\" height=\"150\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"612\" y=\"110\" text-anchor=\"start\" font-size=\"30\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"612\" dy=\"0\">SDD</tspan></text><text x=\"612\" y=\"151\" text-anchor=\"start\" font-size=\"23\" fill=\"#243042\" class=\"\"><tspan x=\"612\" dy=\"0\">固定需求与验收</tspan></text><text x=\"612\" y=\"189\" text-anchor=\"start\" font-size=\"19\" fill=\"#5B6573\" class=\"\"><tspan x=\"612\" dy=\"0\">规格与验收条目</tspan></text></g><path data-edge=\"vibe:sdd\" d=\"M576 150H587\" class=\"diagram-arrow\" marker-end=\"url(#arrow-course-route)\"/></g><g data-reveal=\"3\" class=\"\"><g data-node=\"harness\"><rect x=\"882\" y=\"32\" width=\"272\" height=\"150\" rx=\"12\" fill=\"#F4F2EB\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"902\" y=\"72\" text-anchor=\"start\" font-size=\"30\" fill=\"#243042\" class=\"diagram-title\"><tspan x=\"902\" dy=\"0\">Harness</tspan></text><text x=\"902\" y=\"113\" text-anchor=\"start\" font-size=\"23\" fill=\"#243042\" class=\"\"><tspan x=\"902\" dy=\"0\">复用规则与检查</tspan></text><text x=\"902\" y=\"151\" text-anchor=\"start\" font-size=\"19\" fill=\"#5B6573\" class=\"\"><tspan x=\"902\" dy=\"0\">规则与检查入口</tspan></text></g><path data-edge=\"sdd:harness\" d=\"M866 112H877\" class=\"diagram-arrow\" marker-end=\"url(#arrow-course-route)\"/></g><g data-reveal=\"3\" class=\"\"><rect x=\"12\" y=\"315\" width=\"1142\" height=\"48\" rx=\"12\" fill=\"#243042\" stroke=\"#243042\" stroke-width=\"2\" class=\"sketch\"/><text x=\"583\" y=\"347\" text-anchor=\"middle\" font-size=\"24\" fill=\"#FFFFFF\" class=\"\"><tspan x=\"583\" dy=\"0\">每一层都保留：看证据、作判断、再验证</tspan></text></g></svg>",
      "steps": [
        "Prompt：说清任务",
        "Vibe Coding：根据结果持续迭代",
        "SDD：维护需求和验收",
        "Harness：复用规则、检查与人工确认点"
      ],
      "script": [
        "【操作提示｜课件 p13 第 1 步；本页只讲路线，不新开项目或网页】\n\n把这次小任务放回课程路线。第一层是 Prompt，先把当前任务说明白。刚才我们补目标文字、指定文件、完成标准，就是在练这个能力。\n\n本章后面会做出个人主页的首页初稿，先让一个明确任务有可以检查的结果。",
        "【操作提示｜推进第 2 步，指向 Vibe Coding】\n\n页面做出来以后，你可能发现标题挤了，或者按钮的行为不符合预期。接下来就要看实际结果，给出具体反馈，再修改、再验证。\n\n这就是后面要重点实践的 Vibe Coding 协作过程。人的观察、判断和检查会一直在场。",
        "【操作提示｜推进第 3 步，指向 SDD】\n\n等需求更多、版本更多，仅靠对话里说过几句，就不方便维护了。SDD，也就是规格驱动开发，会把需求和验收写成可以持续维护的规格。\n\n例如，哪些行为必须保留，什么结果算通过，都有明确条目可以对照。前面练过的运行检查仍然继续做。",
        "【操作提示｜推进第 4 步，指向 Harness 以及共同底座】\n\n再往后是 Harness。我们会把协作规则、需要提供的上下文、检查入口和人工确认点组织起来，方便在后续任务里复用。\n\n课程依次用个人主页、JSON Crack 和 dependency-cruiser 三个独立项目。换项目时，带过去的是协作方法。现在先把欢迎语这次小循环看明白，就有了后面继续增加能力的起点。"
      ],
      "segment": "课程路线",
      "seconds": 90,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. Prompt：说清任务\n\n2. Vibe Coding：根据结果持续迭代\n\n3. SDD：维护需求和验收\n\n4. Harness：复用规则、检查与人工确认点"
        },
        {
          "title": "教学边界与材料",
          "text": "首页 v0 在 1.5 创建；这里是路线定位，不声称学员在 1.2 已完成首页。三个独立项目保持大纲规定。"
        }
      ],
      "notes": "<p>预算 90 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p13"
    },
    {
      "id": "p14",
      "label": "行业路标",
      "title": "补代码、查资料、动手、看图",
      "lead": "用 90 秒建立印象：可以组合，不是互相替代。",
      "kicker": "第 1 章 · 1.2 · 路标与收尾",
      "html": "<div class=\"industry-strip\"><div data-reveal=\"0\" class=\"industry-item\"><span class=\"industry-verb\">补</span><h3>代码补全</h3><p>补一行或一个函数</p><p class=\"small-copy\">局部续写代码</p><a href=\"https://docs.github.com/zh/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub 官方入门 ↗</a></div><div data-reveal=\"1\" class=\"industry-item\"><span class=\"industry-verb\">查</span><h3>RAG · 检索增强生成</h3><p>查资料后解释接口</p><p class=\"small-copy\">先检索相关资料，再生成回答</p><a href=\"https://aws.amazon.com/cn/what-is/retrieval-augmented-generation/\" target=\"_blank\" rel=\"noopener noreferrer\">RAG 公开入门 ↗</a></div><div data-reveal=\"2\" class=\"industry-item\"><span class=\"industry-verb\">做</span><h3>工具调用</h3><p>读文件、改代码、跑测试</p><p class=\"small-copy\">回到刚才的动作与返回</p><a href=\"index.html#p09-loop\">回看本节循环 ↗</a></div><div data-reveal=\"3\" class=\"industry-item\"><span class=\"industry-verb\">看</span><h3>多模态理解</h3><p>根据截图指出布局问题</p><p class=\"small-copy\">后续页面反馈仍需运行验证</p><a href=\"https://ai.google.dev/gemini-api/docs/image-understanding?hl=zh-cn\" target=\"_blank\" rel=\"noopener noreferrer\">图片理解参考 ↗</a></div></div><p class=\"source-note\">只作路标，不练习、不考核；具体可用性取决于模型与工具环境</p>",
      "steps": [
        "代码补全：解决局部续写",
        "RAG：检索资料，提供依据",
        "工具调用：执行动作并检查返回",
        "多模态：截图反馈；归纳能力组合的脉络"
      ],
      "script": [
        "【操作提示｜课件 p14 第 1 步；本页四步合计预算 90 秒，保持口播定位，不打开外部链接演示；延伸阅读留给课后】\n\n最后用一小段时间，认几个行业里常见的名字。这部分只作路标，不练习，也不考核。\n\n代码补全，适合续写一行代码或一个函数。我们课上会做更完整的 Agent 协作；想了解局部补全，可以从卡片上的官方入门继续看。",
        "【操作提示｜推进第 2 步，指向 RAG 和已有阅读入口】\n\nRAG，叫检索增强生成。比如解释一个接口前，先检索相关资料，再根据资料生成回答。\n\n本课会给任务提供必要上下文，但不搭建检索库。想深挖这个方法，页面上留了公开入门链接。",
        "【操作提示｜推进第 3 步，指向工具调用；不重复打开循环图】\n\n工具调用就是刚才反复看到的读取文件、编辑代码、运行命令。它让任务能够执行具体动作。\n\n要判断动作是否成功，继续看返回和实际结果；需要回顾时，就看本节的执行循环图。",
        "【操作提示｜推进第 4 步，指向多模态理解和图片参考入口；不新增截图识别实操】\n\n多模态理解，是把图片等输入也纳入任务。比如后面给页面截图，请 AI 帮忙分析布局问题，再运行页面验证修改。想继续了解，可以看图片理解的参考入口。\n\n从局部补全，到问答和资料辅助，再到工具协作、图片反馈，我们可以看到能力逐步扩展的方向。这些能力可以组合使用。现在回到本节真正要掌握的判断。"
      ],
      "segment": "路标与收尾",
      "seconds": 90,
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
      "notes": "<p>预算 90 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p14"
    },
    {
      "id": "p14-check",
      "label": "暂停自检",
      "title": "回到你的记录，能讲清这三件事吗？",
      "lead": "暂停自检只检查本节核心能力，不考行业名词。",
      "kicker": "第 1 章 · 1.2 · 路标与收尾",
      "html": "<div class=\"self-check\"><article><span class=\"check-number\">1</span><h3>Agent、Tool、Context、Window 各指什么？</h3><div data-reveal=\"1\" class=\"\"><p>用自己的话各说一句，再从本人记录中指一条对应证据</p></div></article><article><span class=\"check-number\">2</span><h3>一句“完成了”，还缺哪些证据？</h3><div data-reveal=\"2\" class=\"\"><p>页面核对结果，Diff 核对范围；分类理由要解释得通</p></div></article><article><span class=\"check-number\">3</span><h3>至少三种失败，怎样纠正和复验？</h3><div data-reveal=\"3\" class=\"\"><p>补信息、撤销本次越界改动、补结果检查；纠正后重新验证</p></div></article></div>",
      "steps": [
        "暂停，先独立作答",
        "揭晓概念自检依据",
        "揭晓证据边界",
        "揭晓失败自检依据"
      ],
      "script": [
        "【操作提示｜课件 p14-check 第 1 步；保持答案隐藏，留暂停点】\n\n请暂停视频，拿自己的记录回答这三问。四个词分别指什么？一句“完成了”还需要哪些证据？能不能列出至少三种失败，并说明怎样纠正和复验？\n\n不用逐字背定义。能把概念和刚才的任务连起来，就有了自检的依据。",
        "【操作提示｜推进第 2 步，指向第一问；不要求从运行日志读出上下文窗口大小】\n\n第一问，你可以这样说：Agent 组织任务循环，Tool 执行具体动作，Context 是供判断使用的信息，Window 是一次处理信息的容量边界。\n\n再从记录里指出一次读取动作、对应的返回，以及当时的任务要求。窗口这一项能解释容量的意思即可，不用从日志里猜一个数字。",
        "【操作提示｜推进第 3 步，指向第二问】\n\n第二问，要把“完成了”对应到可检查的东西。页面是否显示目标文字，完整 Diff 是否只包含允许的改动？\n\n分类记录里也要写理由。没有找到对应证据，就先保留为待验证，后面补上再判断。",
        "【操作提示｜推进第 4 步 → 切 VS Code，展示同一份证据记录，将概念地图、分类理由、缺失信息与已有证据关联；未完成项明确留空或标待补，不代填成功结果】\n\n第三问，可以从信息不全、范围失控、没有验证、读取失败、找错修改位置中选三种。每一种都说清“先做什么，再看什么结果”。\n\n把概念地图和分类理由保存到这份记录里。还缺实际操作证据的地方标出来，补做以后再完善。"
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
          "text": "视频中的暂停跟做另计；解析计入预算。初稿写入练习仓库 docs/evidence/CH01_PROMPT_EXPERIMENT.md；尚无本人实操证据不能记为通过。"
        }
      ],
      "notes": "<p>预算 40 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p14-check"
    },
    {
      "id": "p14-summary",
      "label": "带走一个习惯",
      "title": "每到一个结论，追问一次依据",
      "lead": "下一节 1.3：当前项目，应该允许 Agent 做到哪一步？",
      "kicker": "第 1 章 · 1.2 · 路标与收尾",
      "html": "<div class=\"recap\"><p class=\"hand recap-main\">它拿到了什么？<br>它实际做了什么？<br>结果支持什么结论？</p><div class=\"recap-notes\"><div data-reveal=\"0\" class=\"\"><p><b>四个词</b><br>Agent · Tool · Context · Window</p><p><b>三种缺口</b><br>信息不全 · 范围失控 · 没有验证</p></div><div data-reveal=\"1\" class=\"\"><p class=\"deliverable\"><b>留下两份记录</b><br>循环与概念地图 + 有理由的信息分类</p></div></div></div>",
      "steps": [
        "用三句追问收拢本节",
        "说明产出与下一节权限衔接"
      ],
      "script": [
        "【操作提示｜回课件 p14-summary 第 1 步，依次指向三个追问】\n\n今天我们把一句欢迎语的修改，拆成了输入、动作、执行、返回和下一步。以后看一段 AI 工作记录，就沿着这条线追：它拿到了什么，实际做了什么，结果能支持什么结论。",
        "【操作提示｜推进第 2 步，指向两份记录与下一节入口；本节结束，不提前演示权限设置】\n\n留下循环与概念地图，以及写明理由的分类记录。还缺哪条任务信息，也一并记下来。\n\n下一节，我们沿用这个项目，继续看一个实际问题：哪些动作可以允许它执行，哪些情况需要停下来由人决定。"
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
      "notes": "<p>预算 20 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p14-summary"
    }
  ]
};

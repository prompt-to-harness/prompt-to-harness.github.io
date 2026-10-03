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
        "上一节改了一句欢迎语。你发出一句话，谁真正改了文件？今天把过程拆开看。",
        "请对照自己的记录，找信息、动作和结果。没有记录时先观察教学示意，实操仍需补做。"
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
        "现在只看左边：“准备读取文件”。先停五秒。能不能凭这句话判断，它已经知道文件内容？不能，这只说明它提出了动作。",
        "右边展示的是返回内容的教学示意。只有检查实际工具返回，我们才知道读到了什么，或者读取是否报错。请在自己的记录里找到请求和返回，不要把它们当成同一件事。",
        "同样的区别也适用于修改和测试。准备修改不等于已经改对，准备测试不等于测试通过。接下来把请求、执行和返回放回整个任务。"
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
        "起点是任务输入。我们指定目标欢迎语、文件范围和完成标准。这些要求决定了任务要往哪里走。",
        "Agent 根据已有信息提出动作，例如请求读文件。工具负责执行具体读取。这里不能跳过执行，直接把请求当成结果。",
        "执行后会返回文件内容，也可能返回报错。请对应自己记录中的一次返回。报错也是信息，但不能被当成读取成功。",
        "有了返回，Agent 才继续提出修改、补充读取或提问。修改之后还要看新的返回与检查结果，不是走到第五格就自动完成。",
        "现在看回线：需要继续就回到提出动作；完成或需要停止时退出。人确认目标、范围和授权，并依据结果决定能否接受。这里不表示每个工具动作都会逐次弹出确认框。"
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
        "Model 是模型，提供生成内容和作出判断的能力。这里不展开模型结构。",
        "Agent 把模型、上下文、工具组织进执行循环。读文件、拿到返回、继续修改，就是具体例子。",
        "模型输出有不确定性，需要证据验证。任务完成要看结果和范围是否满足要求。"
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
        "不要先背定义。先找到你发给 AI 的任务说明，这就是 Prompt。我们在 1.4 才练习怎样写好目标、约束和完成标准，这里先认出它。",
        "再找到读取或编辑动作使用的入口，这叫 Tool，也就是工具。Agent 提出动作，工具执行动作，返回告诉我们具体发生了什么。",
        "Context 是当前供判断使用的信息，包括要求、已读取内容、工具返回和反馈；Prompt 也是其中一部分。",
        "Context Window 是模型一次能够处理的信息容量边界。简单区分：前者是信息，后者限制一次能处理多少信息。后面用图示继续解释。"
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
        "项目里可能有许多文件。文件存在、工具可以访问，并不等于这次任务已经读取了它。左边列的是可能访问的范围。",
        "从范围里选出相关文件，通过工具读取。这个动作也可能失败，所以要检查返回内容、路径以及是否与任务对应。",
        "当前能指认的依据包括任务要求和已经返回的信息。现在请指一条 AI 结论，说出它依据哪段要求或哪次返回。没有找到对应证据时，就先记录“依据不足”，不要代替它猜测。"
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
        "Context Window 是上下文窗口。会话很长、文件很多，能保证所有内容都进入当前判断吗？",
        "它描述一次处理的信息容量边界。框只是容量示意，不代表产品界面、固定数字或特定信息一定会丢失。",
        "要关心信息是否相关、准确。请区分：Context 是信息，Context Window 限制一次处理的容量。"
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
        "Diff 是修改前后的差异。这里省略标签，只看文字变化；真实任务要查完整 Diff 和文件列表。",
        "右边示意页面结果。实际要打开正确页面、刷新，核对文字和布局，Diff 不能代替这一步。",
        "看到了新文案，能证明没有多改文件吗？不能，两份证据回答不同问题。接下来判断一句结论有多少依据。"
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
        "先带做一个例子：刷新正确页面，看到了指定新文案。观察支持“文案已显示”，但不能单独证明“没有多改文件”。事实也要说清楚它支持哪一条结论。",
        "“用户可能更喜欢活泼一点的文案”是尚未确认的假设。它听起来合理，也不能直接变成任务要求，需要向用户核实。",
        "“可以顺便加个动画”是在提出建议。建议提供可选做法，但提出建议和决定执行是两件事。",
        "用户明确说“这次只改文字，不加动画”，这是已经确认的决定，用于约束任务。接下来请你判断几个容易混淆的句子，先想理由，再看解析。"
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
        "请先暂停。重点比较第二条和第三条：你会怎样判断，理由是什么？其他两条先尝试，随后对照解析。我们判断的是句子里的结论，而不只是这句话是否出现过。",
        "第二条有真实页面观察时，可以支持文案已经显示。第三条只有 AI 的保证，改动范围还没有证据。第一条也需要核对日志和返回，第四条是未确认的偏好假设。",
        "第三条保留为待验证主张，不强塞进四类。我们可以确认 AI 说过这句话，但没有实际 Diff，不能确认它真的没有多改。把你的分类理由和缺少的证据记下来。"
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
        "继续看后四条。建议先看 Diff，和“已经看过 Diff”是同一回事吗？建议扩大字号，和允许它修改字号又是同一回事吗？先用自己的话区分建议和决定。",
        "第五、第六条是在提出可选做法。第七、第八条如果有教师的明确确认记录，就属于已确认的决定。确认后的范围与边界，后续执行必须遵守。",
        "现在回到你的首次任务，指出一条应该补充的信息。例如目标文案没有说清、文件位置没指定，或者完成标准太笼统。将它写进分类记录，留给 1.4 的 Prompt 练习补全。"
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
        "先看三种可能的现象：文案是 AI 自己编的，样式也被改了，或者只有一句“已完成”。请选择一种，说出缺的是哪一环，以及你准备怎样验证。",
        "第一种是信息缺失。补清目标文字、修改位置和完成标准，再检查页面与 Diff 是否匹配要求。不要让 AI 继续猜偏好。",
        "第二种是范围失控。先用 Diff 区分本次越界改动与用户原有工作，只撤销本次不该发生的修改。然后重新检查范围，不能用整体覆盖制造新问题。",
        "第三种是验证缺失。打开正确页面核对文字和布局，再看完整 Diff。请用自己的话复述这三种失败，以及各自的一项纠正动作；只有“再试一次”还不够具体。"
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
        "再看两个变式。一个是工具读取就报“找不到文件”，另一个是修改成功，却改了另一页面的同名文案。它们需要不同的纠正。",
        "读取失败时，先看报错，核对当前目录和目标路径；修正后重新读取，检查返回内容。不能把一次失败调用当成已了解文件。",
        "改错地方时，沿当前页面入口确认实际引用，改对位置后重新验证页面和 Diff。不要把所有失败都归为模型不够聪明，要说明问题发生在哪里。"
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
        "把这次小任务放进整门课程。Prompt 先训练说清任务，留下有范围和完成标准的说明。本章后面做出的首页 v0，仍然是 Prompt 原型。",
        "页面做出来以后，发现布局或行为问题，需要依据真实结果持续反馈和迭代，这就是我们接下来重点实践的 Vibe Coding。它始终包含理解、检查和人工判断。",
        "规则更多、版本更多时，口头说过不容易维护。SDD 把需求和验收写成可以维护的规格。进入这一层，前面的运行检查仍然保留。",
        "Harness 再把协作规则、上下文、检查入口和人工确认点组织成可复用的环境。课程依次使用个人主页、JSON Crack、dependency-cruiser 三个独立项目，迁移的是协作方法，不是继承前一仓库的代码与会话。"
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
        "最后用九十秒认识行业里的几种能力与机制，不练习，也不考核。代码补全适合局部续写一行或一个函数；本课重点是更完整的 Agent 协作，延伸可看页面的官方入门。",
        "RAG 是检索增强生成：先查相关资料，再据此回答，例如解释项目接口。它是一种方法，不是与所有工具严格并列的产品分类。本课提供必要上下文，不搭建检索库；阅读入口留在页面。",
        "工具调用对应刚才的执行循环：读取文件、修改代码、运行测试。提出调用不等于成功，要检查返回和实际结果。延伸先回看本节循环图。",
        "多模态理解把图片等输入纳入任务，例如根据截图指出布局问题。后面会用截图反馈，实际效果仍需运行验证。把行业脉络理解为从局部补全，扩展到问答与资料辅助，再到工具协作和多模态反馈；这些能力可以组合，并非互相取代。"
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
        "请暂停，用自己的记录回答三问。能解释、指证据、说明下一步即可，不要求背定义。",
        "第一问：Agent 组织循环，Tool 执行动作，Context 是信息，Window 是容量边界。各指一条证据。",
        "第二问：页面核对结果，Diff 核对范围。不能把 AI 的完成说明直接当事实。",
        "第三问：至少列三种失败，各给纠正和复验。保存概念地图与分类记录。"
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
        "带走一个习惯：追问它拿到了什么、做了什么、结果支持什么。",
        "保存概念地图、分类理由和一条缺失信息。下一节：当前项目应该允许 Agent 做到哪一步？"
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

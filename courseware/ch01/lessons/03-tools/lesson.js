window.lesson = {
  "title": "工具使用与权限",
  "chapter": "第 1 章 · Prompt",
  "section": "01.03",
  "summary": "认识工具入口与动作影响，区分权限、完成授权，再依据执行记录与结果作出判断。",
  "scenes": [
    {
      "id": "p15",
      "label": "换入口，还要核对什么？",
      "title": "换入口，还要核对什么？",
      "kicker": "第 1 章 · 1.3 · 入口与动作",
      "lead": "1.2 看懂执行 → 1.3 辨认动作与权限 → 1.4 写清任务",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-now\"><b>1.3</b>工具与权限</li><li class=\"\"><b>1.4</b>写清任务</li><li class=\"\"><b>1.5</b>完成首页</li><li class=\"\"><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ink\" style=\"padding:12px 20px\"><h3 style=\"font-size:24px\">图形入口 · ChatGPT App</h3><div data-reveal=\"0\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">资料</span><span style=\"font-size:21px\">核对项目接入</span></div><div data-reveal=\"1\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">动作</span><span style=\"font-size:21px\">确认工具与改动查看</span></div><div data-reveal=\"2\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">边界</span><span style=\"font-size:21px\">核验后临时用</span></div></div><div class=\"p-join\"><b>vs</b></div><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 20px\"><h3 style=\"font-size:24px\">终端入口 · Codex CLI</h3><div data-reveal=\"0\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">资料</span><span style=\"font-size:21px\">从练习目录启动</span></div><div data-reveal=\"1\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">动作</span><span style=\"font-size:21px\">看工具返回与 Diff</span></div><div data-reveal=\"2\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">边界</span><span style=\"font-size:21px\"><b>主路径 · 完整验收</b></span></div></div></div>",
      "steps": [
        "比较入口",
        "找到证据",
        "决定路径"
      ],
      "script": [
        "上一节我们看懂了 Agent 怎样一步步执行。这一节换个问题：同一个任务，换一个入口，还要核对什么？左边是图形入口 ChatGPT App，右边是终端入口 Codex CLI。两边都能表达任务，但不能假定界面背后的能力相同。第一行看资料从哪来：图形入口要按授课版本核对项目接入，终端从练习目录启动。",
        "第二行看动作和结果在哪里查：图形入口要确认可用的工具和改动的查看方式；CLI 里能直接看到工具返回和实际 Diff。具体都以你的版本、账号和配置为准。",
        "第三行是课程边界：CLI 是主要的教学和完整验收路径，图形入口只有核验过，才作为临时入口。1.1 的记录继续用：只用桌面起步的同学补 CLI 只读基线，环境变了的只复核变化项。入口定了，再看这个任务会做哪些动作。"
      ],
      "segment": "入口与动作",
      "seconds": 100,
      "source": "index.html#p15",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 比较入口\n\n2. 找到证据\n\n3. 决定路径"
        },
        {
          "title": "追问与预期判断",
          "text": "换了入口，哪些事情仍要核对？；复用 1.1 记录。仅桌面起步者补 CLI 只读基线，环境变化者复核变化项，不重做全套检查。"
        },
        {
          "title": "演示分支",
          "text": "桌面端未核验时明确只介绍交互入口。不得声称 ChatGPT App 只能聊天，也不得声称所有桌面版本均可直接修改本地项目；不作能力排名。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M05]；[核验 V01、V02]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n两个入口都能表达任务，但不能假定可见界面背后的能力相同。\n\n先问在哪里看动作、权限和结果；以实际版本、账号和配置为准。\n\n复用 1.1 记录。仅桌面起步者补 CLI 只读基线，环境变化者复核变化项，不重做全套检查。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p16",
      "label": "同一个欢迎语任务，会做哪些动作？",
      "title": "同一个欢迎语任务，会做哪些动作？",
      "kicker": "第 1 章 · 1.3 · 入口与动作",
      "lead": "同样是改欢迎语，会涉及四类动作：读取、修改、执行命令、对外操作，影响范围依次变大。读取要和任务有关，修改要看实际 Diff，命令要看会不会写入、联网，欢迎语任务则根本不需要发布。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:14px 18px\"><h3>读取</h3><p style=\"font-size:22px;font-weight:700\">查看目标 HTML</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">是否与任务有关？</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:14px 18px\"><h3>修改</h3><p style=\"font-size:22px;font-weight:700\">替换欢迎语</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">是否只改目标？</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:14px 18px\"><h3>执行命令</h3><p style=\"font-size:22px;font-weight:700\">Git 差异 / 检查脚本</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">是否写入、启动进程或联网？</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"3\" style=\"padding:14px 18px\"><h3>对外操作</h3><p style=\"font-size:22px;font-weight:700\">发布公开站点</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">当前任务是否需要发布？</p></div></div><div class=\"p-scale\" data-reveal=\"3\"><span>影响范围小</span><span>影响范围大</span></div>",
      "steps": [
        "读",
        "写",
        "执行",
        "对外"
      ],
      "script": [
        "同样是改欢迎语，会做四类动作。先是读取，比如查看目标 HTML。要判断的是，读的东西和任务有没有关系；不写文件，也不能顺手去读私人目录。",
        "然后是修改，替换欢迎语。要判断是不是只改了目标，看实际 Diff。",
        "第三类是执行命令，比如看 Git 差异、跑检查脚本。命令只是动作入口，要看它会不会写入、启动进程或联网，不能凭名字判断安全。",
        "最后是对外操作，比如发布公开站点。欢迎语任务根本不需要发布；内容一旦对外可见，影响和本地检查完全不同。从读取到对外，影响范围越来越大。那么，在 Prompt 里写一句“不许越界”，能管住这些动作吗？"
      ],
      "segment": "入口与动作",
      "seconds": 120,
      "source": "index.html#p16",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 读\n\n2. 写\n\n3. 执行\n\n4. 对外"
        },
        {
          "title": "追问与预期判断",
          "text": "同一个欢迎语任务，会做哪些动作？；欢迎语任务不需要发布。内容一旦对外可见，影响与本地检查不同。"
        },
        {
          "title": "演示分支",
          "text": "不要把命令执行一概等同于只读或危险动作，也不要把四行解释为互斥分类。真实工具记录缺失时明确使用教学示例。"
        },
        {
          "title": "备课标记",
          "text": "复用欢迎语任务记录；缺失的日志与画面待补，本页示例不计作实测。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n读取也要看范围，不能因为不写文件就读取私人目录。\n\n文字修改有具体对象，检查实际 Diff。\n\n命令只是动作入口。检查脚本内容和副作用，不能按名字判断安全。\n\n欢迎语任务不需要发布。内容一旦对外可见，影响与本地检查不同。"
        }
      ],
      "notes": "<p>预算 120 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p17",
      "label": "一句“不许越界”，限制住了吗？",
      "title": "一句“不许越界”，限制住了吗？",
      "kicker": "第 1 章 · 1.3 · 权限三层",
      "lead": "每个动作要经过三层：Prompt 里写的任务约束像一块告示牌，只说明意图、挡不住动作；Sandbox 的技术限制像围栏，要看真实配置；人工批准像这一次盖的章。三者是不同的证据，批准也不会改变配置。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:5;column-gap:36px;--node-h:250px\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>Agent 动作</h3><p>读 · 写 · 执行</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"0\"><svg viewBox=\"0 0 120 80\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"color:var(--c);filter:url(#p-rough);display:block;margin:0 auto 6px\"><path d=\"M60 30 V78\"/><rect x=\"18\" y=\"6\" width=\"84\" height=\"32\" rx=\"4\" transform=\"rotate(-5 60 22)\" fill=\"#FFFDF7\" stroke-dasharray=\"7 6\"/><text x=\"60\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-family=\"Noto Sans SC,sans-serif\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\" transform=\"rotate(-5 60 22)\">不许越界</text></svg><h3><span class=\"p-num\">1</span>任务约束</h3><p>告示牌<br>写下的意图</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><svg viewBox=\"0 0 120 80\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"color:var(--c);filter:url(#p-rough);display:block;margin:0 auto 6px\"><path d=\"M14 26 L22 14 L30 26 V76 H14 Z M46 26 L54 14 L62 26 V76 H46 Z M78 26 L86 14 L94 26 V76 H78 Z\" fill=\"var(--cl)\"/><path d=\"M6 38 H112 M6 62 H112\"/></svg><h3><span class=\"p-num\">2</span>技术限制</h3><p>围栏 · Sandbox<br>实际挡住什么</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><svg viewBox=\"0 0 120 80\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"color:var(--c);filter:url(#p-rough);display:block;margin:0 auto 6px\"><path d=\"M50 8 h20 v10 c0 8 8 10 8 20 h-36 c0-10 8-12 8-20 Z\" fill=\"var(--cl)\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"3\" fill=\"var(--cl)\"/><path d=\"M26 64 h68\" stroke-dasharray=\"2 0\"/><path d=\"M40 72 h40\"/></svg><h3><span class=\"p-num\">3</span>人工批准</h3><p>盖章 · Approval<br>批准这一次</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><h3>执行</h3><p>之后仍要验收</p></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:22px\">告示牌挡不住动作 · 围栏和盖章也各管各的：<b>三份不同的证据</b></div>",
      "steps": [
        "先看意图",
        "再看限制",
        "核对批准",
        "归纳三层"
      ],
      "script": [
        "Agent 的每个动作，要经过三层。第一层是任务约束，也就是 Prompt 里写的：只改指定欢迎语，不改样式，不发布。它像路边的一块告示牌，说明了意图，但本身挡不住动作，不是已经生效的技术隔离。",
        "第二层是技术限制，也就是 Sandbox，像一圈围栏：实际环境允许读什么、写什么、能不能联网。要看真实配置和核验过的行为；课程里写的文件范围，不会自动变成系统级的单文件隔离。",
        "第三层是人工批准，也就是 Approval，像给这一次动作盖的章：按实际策略出现的授权，要核对动作、对象和影响。同意计划和环境的授权提示也不是一回事，提示会不会出现取决于配置。批准之后执行，结果仍然要验收。",
        "所以告示牌、围栏、盖章，也就是说明意图、实际限制、人工批准，是三份不同的证据，各管各的；人工批准也不会自动改变技术配置。请记下这次的实际权限和停止入口。接着看一次批准，究竟批准了什么。"
      ],
      "segment": "权限三层",
      "seconds": 180,
      "source": "index.html#p17",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先看意图\n\n2. 再看限制\n\n3. 核对批准\n\n4. 归纳三层"
        },
        {
          "title": "追问与预期判断",
          "text": "一句“不许越界”，限制住了吗？；人工批准也不自动改变技术配置。所有学员记录本次权限与停止入口。"
        },
        {
          "title": "演示分支",
          "text": "不得按界面名称推断限制，不保证每次都弹相同确认框。不演示 bypass 或危险全权限配置；当前限制不明就先暂停写入。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M05]；[核验 V03]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\nPrompt 是任务约束，但它本身不是已生效的技术隔离。\n\n展示实际配置和核验行为。不宣称课程的文件范围自动变成系统级单文件隔离。\n\n同意计划与环境授权提示不是同一件事，实际提示取决于配置。\n\n人工批准也不自动改变技术配置。所有学员记录本次权限与停止入口。"
        }
      ],
      "notes": "<p>预算 180 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p18",
      "label": "这次同意，究竟批准了什么？",
      "title": "这次同意，究竟批准了什么？",
      "kicker": "第 1 章 · 1.3 · 授权与返回",
      "lead": "一次批准分三步看：请求的对象、目标文字和影响是否明确；计划是否保留布局和已有改动、实际权限是否核对过；最后只批准按当前计划修改指定文字。批准动作不等于接受结果。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3;--node-h:190px\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-num\">01</span><h3>提出请求</h3><p>只改欢迎语</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-num\">02</span><h3>核对计划</h3><p>布局与权限已核对</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-num\">03</span><h3>明确批准</h3><p>范围一变就停</p></div></div>",
      "steps": [
        "读取请求",
        "核对计划",
        "限定批准"
      ],
      "script": [
        "第一步，Agent 提出请求：只改 setup-check/index.html 的欢迎语。先看对象、目标文字和影响是否明确。",
        "第二步，核对计划：保留布局和已有改动，本次的实际权限也已经核对。如果它提出改别的文件、装依赖或者发布，就停在这里，先说明原因和影响。",
        "第三步，明确批准：同意按当前计划修改指定文字，范围一变就先停。注意，批准这次动作，不等于接受最终结果。批准之后，也可能没改成。"
      ],
      "segment": "授权与返回",
      "seconds": 150,
      "source": "index.html#p18",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 读取请求\n\n2. 核对计划\n\n3. 限定批准"
        },
        {
          "title": "追问与预期判断",
          "text": "这次同意，究竟批准了什么？；批准这次动作，并不等于接受最终结果。执行后还要检查。"
        },
        {
          "title": "演示分支",
          "text": "如果技术配置不允许写入，先处理真实限制，不能把聊天确认当作技术权限已改变。工具失败时保存返回信息，不填成功记录。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M01、M05]；[核验 V01、V03]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先看对象、目标文字和影响是否明确。讲师切到真实授权记录，示意不能当实操证据。\n\n如果提出修改其他文件、安装依赖或发布，停在这里说明原因与影响。\n\n批准这次动作，并不等于接受最终结果。执行后还要检查。"
        }
      ],
      "notes": "<p>预算 150 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p18a",
      "label": "已经批准，为什么仍可能没改成？",
      "title": "已经批准，为什么仍可能没改成？",
      "kicker": "第 1 章 · 1.3 · 授权与返回",
      "lead": "批准之后，工具可能返回“找不到目标文件”，也可能返回“写入成功”，这是互斥的两个分支。即使写入成功，也只是工具的报告，文字、布局和范围都还没检查，不能写“任务完成”。",
      "html": "<div class=\"p-chain\" data-reveal=\"0\" style=\"font-size:20px\"><span>请求</span><i>→</i><span>批准</span><i>→</i><span>工具返回</span></div><div class=\"p-pair\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">工具失败分支</span><div class=\"p-term\"><span class=\"err\">找不到目标文件</span></div></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">工具成功分支</span><div class=\"p-term\">写入成功</div><p style=\"margin-top:8px\"><b>结果仍待检查</b></p></div></div><div class=\"p-bar\" data-reveal=\"2\">还不能写“<b>任务完成</b>”</div>",
      "steps": [
        "看失败",
        "看成功",
        "等待证据"
      ],
      "script": [
        "请求、批准，然后工具执行，给出返回。一种返回是“找不到目标文件”：批准了也可能失败，这时先定位路径和返回信息，再决定要不要重试。",
        "另一种返回是“写入成功”。它只说明工具报告成功；文字对不对、布局动没动、范围有没有越界，都还没检查。这两种返回是互斥的分支，不是一次执行先后出现的两条。",
        "所以到这里，还不能写“任务完成”。刷新同一个页面，检查完整 Diff，都符合才接受。检查之后，会有三个去向。"
      ],
      "segment": "授权与返回",
      "seconds": 110,
      "source": "index.html#p18a",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 看失败\n\n2. 看成功\n\n3. 等待证据"
        },
        {
          "title": "追问与预期判断",
          "text": "已经批准，为什么仍可能没改成？；刷新同一页面、检查完整 Diff。都符合任务才接受。"
        },
        {
          "title": "演示分支",
          "text": "本页训练阅读具体记录，不重复 1.2 的概念分类。示例中的返回文字是便于教学的概括，并非特定产品的原始日志格式。"
        },
        {
          "title": "备课标记",
          "text": "复用欢迎语任务记录；缺失的日志与画面待补，本页示例不计作实测。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n批准后也可能失败。不能把同意当作工具已经执行成功。\n\n成功分支与失败分支互斥，不要讲成一次连续执行的两条返回。\n\n刷新同一页面、检查完整 Diff。都符合任务才接受。"
        }
      ],
      "notes": "<p>预算 110 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p18-check",
      "label": "结果检查以后，才决定下一步",
      "title": "结果检查以后，才决定下一步",
      "kicker": "第 1 章 · 1.3 · 授权与返回",
      "lead": "检查页面和完整 Diff 之后有三个去向：符合就接受并记录证据；不符就在当前范围内修正，再检查；路径不明、缺材料或需要扩大权限，就记录并停下，不靠扩大权限掩盖问题。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"ink\" style=\"grid-column:2\"><h3>检查结果</h3><p>页面 + 完整 Diff</p></div><div class=\"p-fork\" style=\"grid-column:1/4\"><div class=\"l\" data-reveal=\"0\"><span>符合</span></div><div class=\"m\" data-reveal=\"1\"><span>不符</span></div><div class=\"r\" data-reveal=\"2\"><span>无法验证</span></div></div><div class=\"p-box is-row2\" data-role=\"ok\" data-reveal=\"0\" style=\"grid-row:3;grid-column:1\"><h3>接受并记录</h3></div><div class=\"p-box is-row2\" data-role=\"agent\" data-reveal=\"1\" style=\"grid-row:3;grid-column:2\"><h3>限定修正，再检查</h3></div><div class=\"p-box is-row2\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-row:3;grid-column:3\"><h3>记录并停</h3></div></div>",
      "steps": [
        "看通过",
        "看修正",
        "看停止"
      ],
      "script": [
        "第一个去向是符合：页面和 Diff 都满足任务，就接受并记录。请指出支持你接受的页面证据和差异证据。",
        "第二个去向是不符，比如文字遗漏，或者本次越界。只要能在当前范围内修正，就按证据反馈，修完再检查。",
        "第三个去向是无法验证：路径不明、材料缺失，或者需要扩大权限，就记录并停下来，不靠扩大权限来掩盖问题。下面用四个场景练一练。"
      ],
      "segment": "授权与返回",
      "seconds": 40,
      "source": "index.html#p18-check",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 看通过\n\n2. 看修正\n\n3. 看停止"
        },
        {
          "title": "追问与预期判断",
          "text": "结果检查以后，才决定下一步；不能验证或影响扩大时暂停，不靠扩大权限掩盖问题。"
        },
        {
          "title": "演示分支",
          "text": "本页训练阅读具体记录，不重复 1.2 的概念分类。示例中的返回文字是便于教学的概括，并非特定产品的原始日志格式。"
        },
        {
          "title": "备课标记",
          "text": "复用欢迎语任务记录；缺失的日志与画面待补，本页示例不计作实测。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n请指出支持接受的页面证据和差异证据。\n\n能够在当前范围内修正，就按证据反馈并复验。\n\n不能验证或影响扩大时暂停，不靠扩大权限掩盖问题。"
        }
      ],
      "notes": "<p>预算 40 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p19",
      "label": "四个场景，你会允许哪种动作？",
      "title": "四个场景，你会允许哪种动作？",
      "kicker": "第 1 章 · 1.3 · 判断与交付",
      "lead": "练习：为四个场景各选一种处理。核对分支与 Diff 只需只读；计划已确认的欢迎语修改允许写入目标文件；为纯文字修改安装依赖应拒绝；未获授权的公开发布要停下，另行说明影响并由人确认。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立判断四个场景</span><div class=\"p-quiz\"><div class=\"p-q\"><p class=\"p-say\">A · 核对分支与 Diff</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"ok\">只读</span><p class=\"p-why\">只读检查，不为查看状态开放写入</p></div></div><div class=\"p-q\"><p class=\"p-say\">B · 已确认计划，只改欢迎语</p><div data-reveal=\"2\"><span class=\"p-stamp\" data-role=\"tool\">允许写入</span><p class=\"p-why\">允许本次目标文件写入，并核对实际权限</p></div></div><div class=\"p-q\"><p class=\"p-say\">C · 为纯文字修改安装依赖</p><div data-reveal=\"3\"><span class=\"p-stamp\" data-role=\"gate\">拒绝</span><p class=\"p-why\">当前任务不需要新依赖</p></div></div><div class=\"p-q\"><p class=\"p-say\">D · 未获授权就公开发布</p><div data-reveal=\"4\"><span class=\"p-stamp\" data-role=\"gate\">停止</span><p class=\"p-why\">确需发布时另行说明影响并人工确认</p></div></div></div>",
      "steps": [
        "先独立判断",
        "解析 A",
        "解析 B",
        "解析 C",
        "解析 D"
      ],
      "script": [
        "请暂停，四个场景逐个判断：只读、允许写入、拒绝，还是停止？先写下理由，再继续。",
        "A，核对分支和 Diff：只读就够了，不需要为了查看状态开放写入。",
        "B，计划已经确认，只改欢迎语：允许本次目标文件写入，并核对实际权限。",
        "C，为了纯文字修改去安装依赖：拒绝，当前任务不需要新依赖。",
        "D，没有授权就公开发布：停止。确实需要发布时，另外说明影响，再由人确认。最后把这一节收一下。"
      ],
      "segment": "判断与交付",
      "seconds": 150,
      "source": "index.html#p19",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先独立判断\n\n2. 解析 A\n\n3. 解析 B\n\n4. 解析 C\n\n5. 解析 D"
        },
        {
          "title": "追问与预期判断",
          "text": "四个场景，你会允许哪种动作？；停止；确需发布时另行说明影响并人工确认。"
        },
        {
          "title": "演示分支",
          "text": "场景为教学题卡；若学员补充了合理前提，先写清前提再判断。实际 CLI 未完成者标待补做，不把观察回放计为实操。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M05、M08]；[核验 V01、V03]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先暂停，逐题写只读、允许范围、拒绝或停止，并说明理由。\n\n只读检查，不为查看状态开放写入。\n\n允许本次目标文件写入，并核对实际权限。\n\n拒绝：当前任务不需要新依赖。\n\n停止；确需发布时另行说明影响并人工确认。"
        }
      ],
      "notes": "<p>预算 150 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p19-recap",
      "label": "授权管动作，验收看结果",
      "title": "授权管动作，验收看结果",
      "kicker": "第 1 章 · 1.3 · 判断与交付",
      "lead": "把选择理由补进已有的环境与权限记录：工具路径、CLI 基线、实际权限、停止条件和四题理由；缺项如实标为待补做。一句话：授权管动作，验收看结果。下一节把这些边界写进首页任务。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h4>保留记录</h4><div class=\"p-words\" style=\"grid-template-columns:1fr\"><div class=\"p-box\" data-role=\"ctx\"><p>实际权限 · 停止条件</p></div><div class=\"p-box\" data-role=\"ctx\"><p>四题理由</p></div></div></div><div data-reveal=\"1\"><h4>如实标记</h4><ul class=\"p-warns\"><li>缺项待补做</li><li>未补 CLI 不验收</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h4>一句话</h4><div class=\"p-star\" style=\"width:200px;font-size:22px\">授权管动作<br>验收看结果</div><div class=\"p-box\" data-role=\"us\" style=\"margin-top:12px\"><h3>下一节 1.4 写清任务</h3></div></div></div>",
      "steps": [
        "交付",
        "核对状态",
        "衔接任务"
      ],
      "script": [
        "把刚才的选择理由补进已有的环境和权限记录：工具路径、CLI 基线、实际权限、停止条件，还有四道题的理由，不用另造一套材料。",
        "如实标记状态：缺项写待补做；桌面起步还没补 CLI 的，暂时不进入 CLI 专属验收。不要配置危险的全权限，也不要用改源码或替代工具来冒充环境通过。",
        "一句话带走：授权管动作，验收看结果。下一节，我们把目标、上下文、范围和完成标准，写进首页任务。"
      ],
      "segment": "判断与交付",
      "seconds": 50,
      "source": "index.html#p19-recap",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 交付\n\n2. 核对状态\n\n3. 衔接任务"
        },
        {
          "title": "追问与预期判断",
          "text": "授权管动作，验收看结果；我们接下来把这些边界变成可执行的任务说明。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n把选择理由补入已有环境和权限记录，不另造一套材料。\n\n没有危险的全权限配置；没有用修改源码或替代工具伪装环境通过。\n\n我们接下来把这些边界变成可执行的任务说明。"
        }
      ],
      "notes": "<p>预算 50 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    }
  ],
  "segments": [
    {
      "label": "入口与动作",
      "seconds": 220
    },
    {
      "label": "权限三层",
      "seconds": 180
    },
    {
      "label": "授权与返回",
      "seconds": 300
    },
    {
      "label": "判断与交付",
      "seconds": 200
    }
  ]
};

window.lesson = {
  "title": "工具使用与权限",
  "chapter": "第 1 章 · Prompt",
  "section": "01.03",
  "summary": "认识工具入口与动作影响，区分权限、完成授权，再依据执行记录与结果作出判断。",
  "scenes": [
    {
      "id": "p15",
      "label": "认准项目",
      "title": "CLI or App，先认准同一个项目",
      "lead": "Codex CLI 必备，Codex App 可选；换入口时核对项目、权限与结果",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"is-done\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"is-now\"><b>1.3</b>工具使用与权限</li><li class=\"\"><b>1.4</b>写清个人主页的需求</li><li class=\"\"><b>1.5</b>生成并检查个人主页</li><li class=\"\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div style=\"display:grid;grid-template-columns:3fr 2fr;gap:28px;margin-top:14px;align-items:start\"><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 20px\"><h3 style=\"font-size:24px\">Codex CLI · 本课统一使用</h3><div data-reveal=\"0\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">资料</span><span style=\"font-size:21px\">从练习项目根目录启动</span></div><div data-reveal=\"1\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">动作</span><span style=\"font-size:21px\">看工具返回与 git diff 输出</span></div><div data-reveal=\"2\" style=\"display:grid;grid-template-columns:70px 1fr;gap:10px;padding:8px 0;border-top:1px dashed #CFCAC0\"><span class=\"p-sub\">边界</span><span style=\"font-size:21px\"><b>本课实操与检查都用 CLI</b></span></div></div><div class=\"p-box is-dashed\" data-role=\"ink\" data-reveal=\"2\" style=\"padding:12px 20px\"><h3 style=\"font-size:20px\">也可以用图形界面</h3><p style=\"font-size:18px;line-height:1.55;margin-top:8px\">Codex App · 可选。项目操作与模型接入按实际版本、账号和配置核对，本节不演示</p></div></div>",
      "steps": [
        "认准入口",
        "找到证据",
        "决定路径"
      ],
      "script": [
        "【操作提示｜课件 p15 第 1 步。录制前准备同一 Starter Repo、1.1 的真实请求与授权记录、修改前截图和完整差异；终端记录先脱敏。本节复用首次任务，不重置已完成的欢迎语。】\n\n上一节，我们看了 Agent 怎样调用工具读文件、改文件。这一节只问一件事：Agent 准备动手的时候，它被允许做什么，又是谁说了算？\n\n先交代 agent 入口。课程统一用终端里的 Codex CLI；当然 ChatGPT App 也是可选的图形界面。不管用哪个，都要确认打开的是同一个项目。",
        "【操作提示｜停留课件 p15 第 2 步，不切工具窗口；图形界面不现场演示。】\n\n如果想切换 cli 或 app，有三个位置要重新确认：在哪里看它执行的命令，在哪里看它改过的文件，权限提示又出现在哪里。图形界面的具体能力，以实际版本和配置为准。",
        "【操作提示｜停留课件 p15 第 3 步，不在本页补做 CLI 检查；CLI 检查缺项时按 0.2 课前准备处理。】\n\n第一节已经用 CLI 跑通过，这里直接沿用；还没跑通的，按 0.2 课前准备补上。Agent 入口认准了，我们来看这个欢迎语任务里，Agent 会做哪几类动作。"
      ],
      "segment": "入口与动作",
      "seconds": 100,
      "source": "index.html#p15",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "换了入口，哪些事情仍要核对？\n\n复用 1.1 记录。CLI 检查缺项者补做只读请求，环境变化者复核变化项，不重做全套检查。"
        },
        {
          "title": "演示分支",
          "text": "可选 App 未核验时明确只介绍交互入口。不得声称 Codex App 只能聊天，也不得声称所有桌面版本均可直接修改本地项目；不作能力排名。"
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
          "text": "两个入口都能表达任务，但不能假定可见界面背后的能力相同。\n\n先问在哪里看动作、权限和结果；以实际版本、账号和配置为准。\n\n复用 1.1 记录。CLI 检查缺项者补做只读请求，环境变化者复核变化项，不重做全套检查。"
        }
      ],
      "closing": "本课实操统一使用 Codex CLI。Codex App 是可选图形界面，使用时也要核对项目、权限与结果；App 的完成状态不替代 CLI 的准备检查。"
    },
    {
      "id": "p16",
      "label": "同一个欢迎语任务，会做哪些动作？",
      "title": "同一个欢迎语任务，会做哪些动作？",
      "lead": "欢迎语任务可能涉及读取、修改和执行命令，当前不需要对外发布。每种动作都要看具体对象和影响：读什么、改哪里、命令会不会写入或联网，不能只按动作名称判断风险大小。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:14px 18px\"><h3>读取</h3><p style=\"font-size:22px;font-weight:700\">查看目标 HTML</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">是否与任务有关？</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:14px 18px\"><h3>修改</h3><p style=\"font-size:22px;font-weight:700\">替换欢迎语</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">是否只改目标？</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:14px 18px\"><h3>执行命令</h3><p style=\"font-size:22px;font-weight:700\">Git 差异 / 检查脚本</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">是否写入、启动进程或联网？</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"3\" style=\"padding:14px 18px\"><h3>对外操作</h3><p style=\"font-size:22px;font-weight:700\">发布公开站点</p><p style=\"font-size:20px;margin-top:10px;color:var(--ct)\">当前任务是否需要发布？</p></div></div><div class=\"p-scale\" data-reveal=\"3\"><span>看具体对象</span><span>查实际影响</span></div>",
      "steps": [
        "读",
        "写",
        "执行",
        "对外"
      ],
      "script": [
        "【操作提示｜课件 p16 第 1 步 → 切 VS Code，展示 setup-check/index.html 的欢迎语及相邻几行；随后回课件。】\n\n第一类是读取。改欢迎语，要先读目标 HTML，这和任务直接相关。但读取也要看对象：就算没有写入任务，读取任务也需要有合理范围。比如本次 course-starter 以外的私人目录和这次任务没有关系，agent 就不应该去读。",
        "【操作提示｜课件 p16 第 2 步 → 切 VS Code，打开 1.1 留存的完整 git diff 输出，指出欢迎语的删除行和新增行；随后回课件。】\n\n第二类是修改。这次任务只需要写入一处：把原来的欢迎语换成目标文字。顺手改样式、动其他文件，都超出了这次需要的写入范围。",
        "【操作提示｜停留课件 p16 第 3 步，不切工具窗口。】\n\n第三类是执行命令。命令可以只读信息，也可以改文件、启动服务，或者把数据发出去。所以看到“执行命令”，要接着问：在哪个目录跑？会产生什么变化？不能因为脚本名字叫检查，就当成只读。",
        "【操作提示｜留在课件 p16 第 4 步，只展示“发布公开站点”卡片；这里不打开发布网站、不执行推送或部署。】\n\n第四类是对外操作，比如发布公开站点。本地改好，和让别人在公网上看到，是两件需要分别决定的事。这次任务没有要求发布，工具有这个能力，也不该顺手去做。\n\n那问题来了：如果我在请求里写上“只改欢迎语，不要发布”，这些边界就已经被系统锁住了吗？"
      ],
      "segment": "入口与动作",
      "seconds": 120,
      "source": "index.html#p16",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "同一个欢迎语任务，会做哪些动作？\n\n欢迎语任务不需要发布。内容一旦对外可见，影响与本地检查不同。"
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
          "text": "读取也要看范围，不能因为不写文件就读取私人目录。\n\n文字修改有具体对象，检查实际 git diff 输出。\n\n命令只是动作入口。检查脚本内容和副作用，不能按名字判断安全。\n\n欢迎语任务不需要发布。内容一旦对外可见，影响与本地检查不同。"
        }
      ]
    },
    {
      "id": "p17",
      "label": "一句“不许越界”，限制住了吗？",
      "title": "一句“不许越界”，限制住了吗？",
      "lead": "核对动作时，分清三项内容：Prompt 写下的任务范围、Sandbox 实际设置的限制、人的批准记录。任务要求不会自动变成技术隔离，批准也不自动改变配置；是否需要授权提示，要看当前策略。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:5;column-gap:36px;--node-h:250px\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>Agent 动作</h3><p>读 · 写 · 执行</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"0\"><svg viewBox=\"0 0 120 80\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"color:var(--c);filter:url(#p-rough);display:block;margin:0 auto 6px\"><path d=\"M60 30 V78\"/><rect x=\"18\" y=\"6\" width=\"84\" height=\"32\" rx=\"4\" transform=\"rotate(-5 60 22)\" fill=\"#FFFDF7\" stroke-dasharray=\"7 6\"/><text x=\"60\" y=\"28\" text-anchor=\"middle\" font-size=\"16\" font-family=\"Noto Sans SC,sans-serif\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\" transform=\"rotate(-5 60 22)\">不许越界</text></svg><h3><span class=\"p-num\">1</span>任务约束</h3><p>告示牌<br>写下的意图</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><svg viewBox=\"0 0 120 80\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"color:var(--c);filter:url(#p-rough);display:block;margin:0 auto 6px\"><path d=\"M14 26 L22 14 L30 26 V76 H14 Z M46 26 L54 14 L62 26 V76 H46 Z M78 26 L86 14 L94 26 V76 H78 Z\" fill=\"var(--cl)\"/><path d=\"M6 38 H112 M6 62 H112\"/></svg><h3><span class=\"p-num\">2</span>技术限制</h3><p>围栏 · Sandbox<br>实际挡住什么</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><svg viewBox=\"0 0 120 80\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"color:var(--c);filter:url(#p-rough);display:block;margin:0 auto 6px\"><path d=\"M50 8 h20 v10 c0 8 8 10 8 20 h-36 c0-10 8-12 8-20 Z\" fill=\"var(--cl)\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"3\" fill=\"var(--cl)\"/><path d=\"M26 64 h68\" stroke-dasharray=\"2 0\"/><path d=\"M40 72 h40\"/></svg><h3><span class=\"p-num\">3</span>人工批准</h3><p>盖章 · Approval<br>批准这一次</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><h3>执行</h3><p>之后仍要验收</p></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:22px\">任务约束、技术限制、人工批准三项限制需<b>分别核对</b></div>",
      "steps": [
        "先看意图",
        "再看限制",
        "核对批准",
        "归纳三层"
      ],
      "script": [
        "【操作提示｜课件 p17 第 1 步，指向“告示牌”；切 Terminal 或 VS Code 展示 1.1 的原始请求中指定文件、不改样式、不发布的句子，再回课件。】\n\n先看第一层，任务约束。就是我们告诉 agent：只修改指定文件里的欢迎语，样式保留，也不要发布。这些约束条件讲清楚了 我要它做什么、不做什么。\n\n但写了这句话，并没有自动改掉系统的文件权限。\n\n也就是说，任务只允许改一行，和环境在技术上只能改这一行，是两码事。",
        "【操作提示｜课件 p17 第 2 步 → 切 Terminal，展示录制版本中已核验的实际权限或状态界面，逐项指出可写范围、网络限制；入口按该版本帮助定位，不展示含密钥的完整配置。限制不明时停止写入，先核验。随后回课件。】\n\n第二层是技术限制，也就是 Sandbox，沙箱。图里这圈围栏，表示环境实际设置的边界。哪些位置允许写入，哪些操作受到限制，要到真实配置里找依据。\n\n打比方，任务里只允许改欢迎语，但环境可能允许写入整个项目。我们就应该认识到：任务范围是一处文字，技术上的可写范围是项目目录。不要把这两个范围当成一回事。\n\n占位符",
        "【操作提示｜课件 p17 第 3 步 → 切 Terminal 回看本次或 1.1 的真实审批记录，指出动作、对象与授权范围。没有出现提示则说明实际策略，不伪造弹窗、不人为扩大权限来触发弹窗。随后回课件。】\n\n第三层是人工批准，也就是 Approval。出现授权请求时，我们要搞清楚要 agent 要做什么动作：改哪里，运行什么，会影响什么。\n\n这里还要区分两种“同意”。我在对话里说“这个计划可以执行”，是在确认任务方案；agnet 弹出的授权提示，是权限策略要求的批准。两者要分别看。\n\n占位符",
        "【操作提示｜课件 p17 第 4 步 → 切 VS Code 的 docs/setup/ENVIRONMENT.md，记录实际权限、核验依据和停止入口。停止入口按录制版本已核验的取消方式填写，不把退出会话写成撤销文件修改。随后回课件。】\n\n现在把三份约束摆在一起：原始请求说明任务范围，环境配置说明技术限制，授权记录说明这次同意了什么。\n\n批准某个动作，也要看批准的具体范围。不要为了省一次确认，顺手同意一个自己还没看清的更大范围。\n\n另外，把停止入口找好。发现动作超出任务时，要知道怎样取消当前执行。停止以后仍然要检查文件，因为已经发生的改动不会随着停止自动消失。接下来，我们沿着一条真实记录，看批准是怎样作出的。"
      ],
      "segment": "权限三层",
      "seconds": 180,
      "source": "index.html#p17",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "一句“不许越界”，限制住了吗？\n\n人工批准也不自动改变技术配置。所有学员记录本次权限与停止入口。"
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
          "text": "Prompt 是任务约束，但它本身不是已生效的技术隔离。\n\n展示实际配置和核验行为。不宣称课程的文件范围自动变成系统级单文件隔离。\n\n同意计划与环境授权提示不是同一件事，实际提示取决于配置。\n\n人工批准也不自动改变技术配置。所有学员记录本次权限与停止入口。"
        }
      ]
    },
    {
      "id": "p18",
      "label": "同意之前，看清范围",
      "title": "同意之前，看清范围",
      "lead": "三步依次核对，哪一步不清楚，就先停下来问清楚",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3;--node-h:190px\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-num\">01</span><h3>提出请求</h3><p>改哪个文件、改成什么<br>影响多大，都说清</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-num\">02</span><h3>核对计划</h3><p>保留布局和已有改动<br>实际权限已核对</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-num\">03</span><h3>明确批准</h3><p>只批准这次修改<br>不等于接受结果</p></div></div>",
      "steps": [
        "读取请求",
        "核对计划",
        "限定批准"
      ],
      "script": [
        "【操作提示｜课件 p18 第 1 步 → 切 Terminal 展示 1.1 的原始请求与 Agent 计划；本页回看真实授权过程，不再次发送已完成的修改请求。若无真实记录，按教学示例讲，并在证据单标记待补实操。】\n\n回到欢迎语任务。批准之前，先把请求和它的计划放在一起看：找的是不是 setup-check 目录里的 index.html？准备改的是不是欢迎语？目标文字有没有漏掉？这些明确了，我们才知道接下来那句“同意”指的是什么。\n\n占位符",
        "【操作提示｜回课件 p18 第 2 步，再切真实计划记录，指出保留布局、保留已有改动和不安装、不发布的对应内容。若记录有偏差，如实指出，不念成全部符合。】\n\n再看计划有没有夹带别的动作。我们只换一句文字，原来的布局保留，原来已有的改动也保留。它如果提出先安装依赖、改另一个文件，或者直接发布，就需要在这里停一下。\n\n这时就需要和 agent 沟通说明这一步超出了当前欢迎语任务范围，让 agent 先说明必要性和影响，暂时不要执行。先解决这个分歧，再决定是否调整计划。\n\n占位符",
        "【操作提示｜课件 p18 第 3 步 → 切真实记录中的人工确认句及其后的第一条工具动作，按时间顺序展示。下文确认句只作为讲解范例，不重复发送；之后回课件 p18a。】\n\n范围和权限核对清楚，才轮到明确批准。比如直接和 agent 说：“同意按当前计划执行。”\n\n占位符\n\n到这里，我们批准的是执行动作。至于有没有改成，改得对不对，还得继续看工具返回和最终结果。就像我们之前那样做的"
      ],
      "segment": "授权与返回",
      "seconds": 150,
      "source": "index.html#p18",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "同意之前，看清范围\n\n批准这次动作，并不等于接受最终结果。执行后还要检查。"
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
          "text": "先看对象、目标文字和影响是否明确。讲师切到真实授权记录，示意不能当实操证据。\n\n如果提出修改其他文件、安装依赖或发布，停在这里说明原因与影响。\n\n批准这次动作，并不等于接受最终结果。执行后还要检查。"
        }
      ]
    },
    {
      "id": "p18a",
      "label": "同意之后，看清结果",
      "title": "同意之后，看清结果",
      "lead": "批准之后，工具可能返回失败，也可能返回成功。两种返回都只是工具的报告，不等于任务完成；要亲自检查文字、布局和范围，才能判断",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:320px auto minmax(0,1fr);align-items:center\"><div style=\"display:grid;gap:10px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"gate\">失败返回</span><div class=\"p-term\" style=\"font-size:18px\"><span class=\"err\">找不到目标文件</span></div><p style=\"font-size:19px;margin-top:6px\">改动还没发生，先查路径</p></div><p data-reveal=\"1\" style=\"text-align:center;font-size:20px;font-weight:700\">或</p><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"tool\">成功返回</span><div class=\"p-term\" style=\"font-size:18px\">写入成功</div><p style=\"font-size:19px;margin-top:6px\">只是工具自己的报告</p></div></div><div class=\"p-join\" data-reveal=\"2\"><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:28px 32px\"><span class=\"p-tag\" data-role=\"us\">人来判断</span><p style=\"font-size:28px;font-weight:700;margin-top:6px\">工具返回了，任务完成了吗？</p><div data-reveal=\"2\" style=\"margin-top:22px\"><p class=\"p-big\" style=\"font-size:38px;line-height:1.3\">两种返回，都<b>不等于</b>任务完成</p><p style=\"font-size:24px;margin-top:12px\">亲自检查文字、布局和范围，才能判断</p></div></div></div>",
      "steps": [
        "失败返回：先查原因",
        "成功返回：还没检查",
        "两种都要亲自检查"
      ],
      "script": [
        "【操作提示｜课件 p18a 第 1 步，先声明这是失败分支示例；留在课件，不故意改坏路径。】\n\n批准之后，工具也可能失败。比如返回“找不到目标文件”，那就先查当前目录和路径。这时候直接开放更大的权限，解决不了找错路径的问题。",
        "【操作提示｜停留课件 p18a 第 2 步，不切工具窗口。】\n\n另一种可能是工具报告写入成功。这两种是不同的分支，不是先失败再成功。而且成功也只是工具的报告。",
        "【操作提示｜停留课件 p18a 第 3 步；不重启页面服务、不重跑检查命令。】\n\n不管哪种返回，结果都要我们自己看页面和完整差异。具体怎么查，第一节已经做过，这里不再重复。"
      ],
      "segment": "授权与返回",
      "seconds": 80,
      "source": "index.html#p18a",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "同意之后，看清结果\n\n刷新同一页面、检查完整 git diff 输出。都符合任务才接受。"
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
          "text": "批准后也可能失败。不能把同意当作工具已经执行成功。\n\n成功分支与失败分支互斥，不要讲成一次连续执行的两条返回。\n\n刷新同一页面、检查完整 git diff 输出。都符合任务才接受。"
        }
      ]
    },
    {
      "id": "p18-check",
      "label": "检查之后，决定下一步",
      "title": "检查之后，决定下一步",
      "lead": "检查页面和完整 git diff 输出之后有三个去向：符合就接受并记录证据；不符就在当前范围内修正，再检查；路径不明、缺材料或需要扩大权限，就记录并停下，不靠扩大权限掩盖问题。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"ink\" style=\"grid-column:2\"><h3>检查结果</h3><p>页面 + 完整 git diff 输出</p></div><div class=\"p-fork\" style=\"grid-column:1/4\"><div class=\"l\" data-reveal=\"0\"><span>符合</span></div><div class=\"m\" data-reveal=\"1\"><span>不符</span></div><div class=\"r\" data-reveal=\"2\"><span>无法验证</span></div></div><div class=\"p-box is-row2\" data-role=\"ok\" data-reveal=\"0\" style=\"grid-row:3;grid-column:1\"><h3>接受并记录</h3></div><div class=\"p-box is-row2\" data-role=\"agent\" data-reveal=\"1\" style=\"grid-row:3;grid-column:2\"><h3>限定修正，再检查</h3></div><div class=\"p-box is-row2\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-row:3;grid-column:3\"><h3>记录并停</h3></div></div>",
      "steps": [
        "看通过",
        "看修正",
        "看停止"
      ],
      "script": [
        "【操作提示｜停留课件 p18-check 第 1 步，不切工具窗口。】\n\n检查之后有三个去向。第一种，文字、布局和改动范围都符合，就接受，并留下页面和差异作为依据。",
        "【操作提示｜停留课件 p18-check 第 2 步，只讲下文假设，不制造错误。】\n\n第二种，发现具体问题，就在原来的范围内让 agent 只修那一处，改完再检查。",
        "【操作提示｜停留课件 p18-check 第 3 步，不切工具窗口。】\n\n第三种，眼下无法验证，或者要扩大权限才能继续。那就先停下来，说清需要什么权限、为什么需要，再由我们决定。不要为了赶到“完成”，顺手把权限放大。下面换成四个场景，练习怎样作出选择。"
      ],
      "segment": "授权与返回",
      "seconds": 40,
      "source": "index.html#p18-check",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "检查之后，决定下一步；不能验证或影响扩大时暂停，不靠扩大权限掩盖问题。"
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
          "text": "请指出支持接受的页面证据和差异证据。\n\n能够在当前范围内修正，就按证据反馈并复验。\n\n不能验证或影响扩大时暂停，不靠扩大权限掩盖问题。"
        }
      ]
    },
    {
      "id": "p19",
      "label": "四个场景，你会允许哪种动作？",
      "title": "四个场景，你会允许哪种动作？",
      "lead": "练习：为四个场景各选一种处理。核对分支与 git diff 输出只需只读；计划已确认的欢迎语修改允许写入目标文件；为纯文字修改安装依赖应拒绝；未获授权的公开发布要停下，另行说明影响并由人确认。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立判断四个场景</span><div class=\"p-quiz\"><div class=\"p-q\"><p class=\"p-say\">A · 核对分支与 git diff 输出</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"ok\">只读</span><p class=\"p-why\">只读检查，不为查看状态开放写入</p></div></div><div class=\"p-q\"><p class=\"p-say\">B · 已确认计划，只改欢迎语</p><div data-reveal=\"2\"><span class=\"p-stamp\" data-role=\"tool\">允许写入</span><p class=\"p-why\">允许本次目标文件写入，并核对实际权限</p></div></div><div class=\"p-q\"><p class=\"p-say\">C · 为纯文字修改安装依赖</p><div data-reveal=\"3\"><span class=\"p-stamp\" data-role=\"gate\">拒绝</span><p class=\"p-why\">当前任务不需要新依赖</p></div></div><div class=\"p-q\"><p class=\"p-say\">D · 未获授权就公开发布</p><div data-reveal=\"4\"><span class=\"p-stamp\" data-role=\"gate\">停止</span><p class=\"p-why\">确需发布时另行说明影响并人工确认</p></div></div></div>",
      "steps": [
        "先独立判断",
        "解析 A",
        "解析 B",
        "解析 C",
        "解析 D"
      ],
      "script": [
        "【操作提示｜课件 p19 第 1 步，停在四道题的题面，暂不揭示解析。留出暂停视频的提示；此页不执行安装、写入或发布。】\n\n现在请暂停一下视频，逐个看这四个场景。每一题写两样东西：允许或拒绝，以及为什么这么做。\n\n占位符",
        "【操作提示｜课件 p19 第 2 步，揭示 A 的答案，指出“核对分支和 git diff 输出”。】\n\n问题 A，要核对当前分支和差异。我们需要的是读取这些信息，因此只读就够了。\n\n占位符",
        "【操作提示｜课件 p19 第 3 步，揭示 B 的答案，联系 p18 已核对的具体计划。】\n\n问题 B，计划已经确认，只改指定欢迎语。这里确实需要写入，可以批准这次明确的修改。\n\n占位符",
        "【操作提示｜课件 p19 第 4 步，揭示 C 的答案；安装请求仅作场景判断，不发送安装命令。】\n\n问题 C，为了纯文字修改，要先安装依赖。我们拒绝这个安装请求。因为一份独立 HTML，文字修改不需要新增依赖。\n\n占位符",
        "【操作提示｜课件 p19 第 5 步，揭示 D 的答案；不打开新的发布页面。】\n\n问题 D，没有授权就要公开发布。这里应该停止发布动作。发布会让内容对外可见，已经超出了本次本地修改的范围。\n\n占位符\n\n占位符"
      ],
      "segment": "判断与交付",
      "seconds": 150,
      "source": "index.html#p19",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "四个场景，你会允许哪种动作？\n\n停止；确需发布时另行说明影响并人工确认。"
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
          "text": "先暂停，逐题写只读、允许范围、拒绝或停止，并说明理由。\n\n只读检查，不为查看状态开放写入。\n\n允许本次目标文件写入，并核对实际权限。\n\n拒绝：当前任务不需要新依赖。\n\n停止；确需发布时另行说明影响并人工确认。"
        }
      ]
    },
    {
      "id": "p19-recap",
      "label": "授权管动作，验收看结果",
      "title": "授权管动作，验收看结果",
      "lead": "回顾四题的选择理由，按自己的习惯记下工具入口、实际权限和停止条件。CLI 还有缺项就记下待补步骤；下一节把这些已核对的边界写进个人主页任务。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3>保留记录</h3><div class=\"p-words\" style=\"grid-template-columns:1fr\"><div class=\"p-box\" data-role=\"ctx\"><p>实际权限 · 停止条件</p></div><div class=\"p-box\" data-role=\"ctx\"><p>四题理由</p></div></div></div><div data-reveal=\"1\"><h3>如实标记</h3><ul class=\"p-warns\"><li>缺项待补做</li><li>CLI 未就绪，先补做</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>一句话</h3><div class=\"p-star\" style=\"width:200px;font-size:22px\">授权管动作<br>验收看结果</div><div class=\"p-box\" data-role=\"us\" style=\"margin-top:12px\"><h3>下一节 1.4 写清任务</h3></div></div></div>",
      "steps": [
        "回顾判断",
        "核对状态",
        "衔接任务"
      ],
      "script": [
        "【操作提示｜停留课件 p19-recap 第 1 步，不切工具窗口。】\n\n回顾这四个场景：只读就够的，不附带写入；需要写入的，只批准这一次明确的修改；用不上的动作，直接拒绝；对外的动作，先停下来由人确认。各自的理由，了解逻辑就行了",
        "【操作提示｜课件 p19-recap 第 2 步，对照实际记录标记已完成、失败或待补做；CLI 缺项指向 0.2 课前准备，不修改状态来凑通过。】\n\n如果 CLI 工具还没跑通，或者说不清当前权限，就先暂停一下，前置工作按 0.2 课前准备补齐。不要靠放开所有权限，让检查看起来全部通过。",
        "【操作提示｜回 Chrome 课件 p19-recap 第 3 步；讲完后进入下一节。保留需要的练习页面与记录，不在收尾临时增加新操作。】\n\nok 总结一下，这一节，我们分清了三件事：Prompt 写下的任务范围，环境实际设置的限制，以及我们每一次给出的批准。\n\n授权管动作，验收看结果。下一节，我们把这些判断用到个人主页任务里，把目标、上下文、允许修改的范围和完成标准写清楚，让 Agent 有具体依据开始工作。"
      ],
      "segment": "判断与交付",
      "seconds": 50,
      "source": "index.html#p19-recap",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "授权管动作，验收看结果；我们接下来把这些边界变成可执行的任务说明。"
        },
        {
          "title": "讲师提示",
          "text": "学员按自己的习惯记录工具与权限的判断，不指定记录文件。\n\n没有危险的全权限配置；没有用修改源码或替代工具伪装环境通过。\n\n我们接下来把这些边界变成可执行的任务说明。"
        }
      ]
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
      "seconds": 270
    },
    {
      "label": "判断与交付",
      "seconds": 200
    }
  ]
};

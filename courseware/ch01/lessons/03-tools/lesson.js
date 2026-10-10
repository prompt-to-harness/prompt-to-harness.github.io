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
        "【操作提示｜课件 p15 第 1 步。录制前准备同一 Starter Repo、1.1 的真实请求与授权记录、修改前截图和完整差异；终端记录先脱敏。本节复用首次任务，不重置已完成的欢迎语。】\n\n上一节，我们沿着欢迎语任务，看了 Agent 怎样读取文件、执行动作，再根据返回继续往下做。这一节，我们站到使用者这一边：它准备做一个动作的时候，我该看什么，又该在什么地方停下来？\n\n先看两个入口。左边是图形入口，右边是终端里的 Codex CLI。换个窗口，任务还是那个任务：修改我们练习项目里的欢迎语。我们先核对，它接触到的是不是同一个项目。\n\n图形入口要看实际接入的项目和文件。终端入口要看从哪个目录启动。要是两边打开了不同的副本，后面看到的修改和结果就对不上。",
        "【操作提示｜切 Terminal，在独立练习项目根目录运行 git branch --show-current、git status --short、git diff。切 VS Code 打开同一目录的 setup-check/index.html，定位 h1#welcome-message；再展示已保存的 CLI 工具返回。已核验桌面入口时，切其项目、变更与权限视图作对照；未核验时只讲课件中的待核对项，不现场尝试接入。随后回课件 p15 第 2 步。】\n\n我先在终端里看当前分支和文件状态，再打开这份 HTML，找到欢迎语。这里有两个观察位置：工具记录告诉我们它做了什么，文件和差异告诉我们实际留下了什么。\n\n比较入口的时候，也沿着这两个位置找。在哪里看它执行的命令？在哪里看它改过的文件？权限提示又在哪里？图形入口的具体能力，要按实际版本、账号和配置核对，不能只看窗口长什么样。\n\n后面课程统一用 CLI，操作记录和检查方式就能连起来。",
        "【操作提示｜课件 p15 第 3 步 → VS Code 打开 docs/setup/ENVIRONMENT.md。仅桌面起步或环境发生变化时，补对应检查：Terminal 运行 codex --version、codex --help，再从练习根目录启动 codex，核对当前权限后发送只读请求：“只检查当前项目目录、分支、Git 状态和差异，报告结果；不要修改文件、安装依赖或发布。”已完成者复用真实记录。失败转本章 preparation.html 的“失败与继续条件”；完成后回课件。】\n\n如果你从第一节开始就在用 CLI，而且环境没有变化，原来的记录可以继续用。如果之前用的是临时桌面入口，现在要补一次 CLI 的只读检查。\n\n所谓只读检查，就是先让它报告目录、分支、状态和差异，把项目认对，不要求它写文件。我们要留下实际返回，确认这条操作路径能走通。\n\n这一项卡住，就把错误和待补项记下来，按准备页排查。看过演示与自己完成检查，要分别记录。入口核对清楚以后，再看这个欢迎语任务究竟涉及哪些动作。"
      ],
      "segment": "入口与动作",
      "seconds": 100,
      "source": "index.html#p15",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "换了入口，哪些事情仍要核对？\n\n复用 1.1 记录。仅桌面起步者补 CLI 只读基线，环境变化者复核变化项，不重做全套检查。"
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
          "text": "两个入口都能表达任务，但不能假定可见界面背后的能力相同。\n\n先问在哪里看动作、权限和结果；以实际版本、账号和配置为准。\n\n复用 1.1 记录。仅桌面起步者补 CLI 只读基线，环境变化者复核变化项，不重做全套检查。"
        }
      ]
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
        "【操作提示｜课件 p16 第 1 步 → 切 VS Code，展示 setup-check/index.html 的欢迎语及相邻几行；切 Terminal 回看 1.1 中读取该文件的真实记录。缺少记录时留在课件，明确按示例讲解。随后回课件。】\n\n第一类是读取。要改欢迎语，先读目标 HTML，找到现在的文字和对应位置，这个读取和任务直接有关。\n\n如果它要读取别的内容，就继续问：这份资料能帮助完成哪一步？例如，读取项目说明，是为了确认项目约定；但私人目录里的文件，和这次改欢迎语没有关系。\n\n所以，看到“读取”两个字，我们仍然要看对象。没有写入，也需要有合理的读取范围。",
        "【操作提示｜课件 p16 第 2 步 → 切 VS Code，打开 1.1 留存的完整差异，指出欢迎语的删除行和新增行。若修改已提交，使用对应任务的已保存差异，不把当前空 diff 解释成没有改动。随后回课件。】\n\n第二类是修改。现在看这段差异：原来的欢迎语被删掉，目标文字加进来。这才是“改欢迎语”对应的具体变化。\n\n接下来还要往下看，有没有顺手改样式，或者动到其他文件。任务只要求换一句文字，我们核对范围时，就以这句话和这个位置为依据。\n\n已有的其他改动也要和开工前的记录对照，先分清哪些原来就在，哪些是本次新增的。",
        "【操作提示｜课件 p16 第 3 步 → 切 Terminal 的普通 shell，展示 git diff --stat 与 git diff 的实际输出；不要把 shell 命令输入 Codex 对话，也不要为演示临时安装检查工具。随后回课件。】\n\n第三类是执行命令。我们刚才查看差异，也是通过命令完成的。命令可以用来读信息，也可以用来改文件、启动服务，或者把数据发出去。\n\n所以，“执行了一个命令”还不够具体。要接着看：命令针对哪个目录？会产生什么变化？如果是检查脚本，还得知道它里面实际做了什么，不能因为名字叫检查，就当成完全只读。\n\n这几类动作会有交叉。用命令修改文件，同时涉及命令执行和写入，我们按实际影响来判断。",
        "【操作提示｜留在课件 p16 第 4 步，只展示“发布公开站点”卡片；这里不打开发布网站、不执行推送或部署。】\n\n第四类是对外操作，比如发布公开站点。欢迎语在本地改好，和让别人通过公网地址看到它，是两件需要分别决定的事。\n\n这次任务只检查本地页面，没有提出发布要求。因此，即使工具具备发布能力，也没有理由在这里顺手发布。\n\n图上的箭头提醒我们关注影响范围。具体风险还得看内容和对象，读取敏感资料也可能产生很大影响。那如果我在请求里写上“只改欢迎语，不要发布”，这些边界就已经被系统锁住了吗？"
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
          "text": "读取也要看范围，不能因为不写文件就读取私人目录。\n\n文字修改有具体对象，检查实际 Diff。\n\n命令只是动作入口。检查脚本内容和副作用，不能按名字判断安全。\n\n欢迎语任务不需要发布。内容一旦对外可见，影响与本地检查不同。"
        }
      ]
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
        "【操作提示｜课件 p17 第 1 步，指向“告示牌”；切 Terminal 或 VS Code 展示 1.1 的原始请求中指定文件、不改样式、不发布的句子，再回课件。】\n\n先看第一层，任务约束。我们告诉 Codex：只修改指定文件里的欢迎语，样式保留，也不要发布。这些话把我要它做什么、不做什么讲清楚了。\n\n课件把它画成一块告示牌。告示牌写得清楚，行动就有了依据；出了偏差，我们也有明确要求可以对照。但写了这句话，并没有自动改掉系统的文件权限。\n\n也就是说，任务只允许改一行，和环境在技术上只能改这一行，是不同的事情。",
        "【操作提示｜课件 p17 第 2 步 → 切 Terminal，展示录制版本中已核验的实际权限或状态界面，逐项指出可写范围、网络限制；入口按该版本帮助定位，不展示含密钥的完整配置。限制不明时停止写入，先核验。随后回课件。】\n\n第二层是技术限制，也就是 Sandbox，沙箱。图里这圈围栏，表示环境实际设置的边界。哪些位置允许写入，哪些操作受到限制，要到真实配置里找依据。\n\n例如，任务里只允许改欢迎语，但环境可能允许写入整个项目。我们就应该如实记录：任务范围是一处文字，技术上的可写范围是项目目录。不要把这两个范围写成同一个。\n\n如果现在还说不清实际限制，就先停在读取和核对这一步。把限制弄清楚，再决定是否开始写入。",
        "【操作提示｜课件 p17 第 3 步 → 切 Terminal 回看本次或 1.1 的真实审批记录，指出动作、对象与授权范围。没有出现提示则说明实际策略，不伪造弹窗、不人为扩大权限来触发弹窗。随后回课件。】\n\n第三层是人工批准，也就是 Approval。出现授权请求时，我们要读的是它准备做的那个动作：改哪里，运行什么，会影响什么。\n\n这里还要区分两种“同意”。我在对话里说“这个计划可以执行”，是在确认任务方案；环境弹出的授权提示，是权限策略要求的批准。两者要分别看。\n\n是否出现提示，取决于当前策略。有些动作可以直接执行，有些需要批准，有些会被限制挡住。不要用有没有弹窗，代替对实际权限的检查。",
        "【操作提示｜课件 p17 第 4 步 → 切 VS Code 的 docs/setup/ENVIRONMENT.md，记录实际权限、核验依据和停止入口。停止入口按录制版本已核验的取消方式填写，不把退出会话写成撤销文件修改。随后回课件。】\n\n现在把三份证据摆在一起：原始请求说明任务范围，环境配置说明技术限制，授权记录说明这次同意了什么。\n\n批准某个动作，也要看批准的具体范围。一次动作授权与保存后续适用的规则，影响并不一样。不要为了省一次确认，顺手同意一个自己还没看清的更大范围。\n\n另外，把停止入口找好。发现动作超出任务时，要知道怎样取消当前执行。停止以后仍然要检查文件，因为已经发生的改动不会随着停止自动消失。接下来，我们沿着一条真实记录，看批准是怎样作出的。"
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
        "【操作提示｜课件 p18 第 1 步 → 切 Terminal 展示 1.1 的原始请求与 Agent 计划；本页回看真实授权过程，不再次发送已完成的修改请求。若无真实记录，按教学示例讲，并在证据单标记待补实操。】\n\n回到欢迎语任务。这里要核对的对象，是 setup-check 目录里的 index.html，目标是把欢迎语改成“你好，欢迎来到 Vibe Coding 课堂！”\n\n我们先把请求和它的计划放在一起看。它找的是不是这个文件？准备改的是不是欢迎语？目标文字有没有漏掉？这些内容明确了，我们才知道接下来那句“同意”指的是什么。\n\n如果计划只说“优化一下页面”，范围就还不清楚。先让它说清改动位置，再往下走。",
        "【操作提示｜回课件 p18 第 2 步，再切真实计划记录，指出保留布局、保留已有改动和不安装、不发布的对应内容。若记录有偏差，如实指出，不念成全部符合。】\n\n再看计划有没有夹带别的动作。我们只换一句文字，原来的布局保留，原来已有的改动也保留。它如果提出先安装依赖、改另一个文件，或者直接发布，就在这里停一下。\n\n这时可以明确地说：“这一步超出了当前欢迎语任务，请先说明必要性和影响，暂时不要执行。”先解决这个分歧，再决定是否调整计划。\n\n同时回看实际权限。如果环境不允许写入，在聊天里回复同意，也不能据此认定写入权限已经具备。",
        "【操作提示｜课件 p18 第 3 步 → 切真实记录中的人工确认句及其后的第一条工具动作，按时间顺序展示。下文确认句只作为讲解范例，不重复发送；之后回课件 p18a。】\n\n范围和权限核对清楚，才轮到明确批准。比如：“同意按当前计划修改指定欢迎语，保留其他内容；如果需要改别的文件、安装依赖或发布，先停下来说明。”\n\n这句确认把允许做的动作说清楚，也把范围变化时的处理说清楚。我们还要从记录里看，它是不是在确认之后才开始修改。\n\n到这里，我们批准的是执行动作。至于有没有改成，改得对不对，还得继续看工具返回和最终结果。"
      ],
      "segment": "授权与返回",
      "seconds": 150,
      "source": "index.html#p18",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "这次同意，究竟批准了什么？\n\n批准这次动作，并不等于接受最终结果。执行后还要检查。"
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
        "【操作提示｜课件 p18a 第 1 步，先声明这是失败分支示例。若真实记录含失败，切 Terminal 指出对应错误；没有失败就留在课件，不故意改坏路径。】\n\n先看左边这个教学示例：已经批准了，工具却返回“找不到目标文件”。这说明有执行尝试，但还没有得到我们要的修改。\n\n下一步该查的是路径：当前目录对不对？目标文件存不存在？请求里的路径有没有写错？先根据这条返回定位原因，再决定要不要重试。\n\n遇到找不到文件，直接开放更大的权限，并不能说明找错路径的问题解决了。",
        "【操作提示｜课件 p18a 第 2 步 → 切 Terminal 回看真实写入返回，再切 VS Code 查看目标行。实际失败时保留失败结论，右侧仅作为另一种可能讲解。随后回课件。】\n\n再看右边，工具报告写入成功。这和左边是两个可能的分支，课件不是说每次执行都先失败、再成功。\n\n如果实际拿到的是成功返回，我们可以继续检查文件。但现在只知道工具报告完成了写入，还没核对欢迎语是否完整，也没检查有没有多余改动。\n\n接下来，把工具报告放到一边，直接看页面和文件差异。",
        "【操作提示｜此处打开新的 Chrome 标签页“欢迎语验收”，访问 http://localhost:4174/setup-check/。先核对服务来自同一练习根目录；已有服务则复用，未启动则另开 Terminal“页面服务”，运行 python3 -m http.server 4174 --bind 127.0.0.1 并保持运行，不重复占用端口。刷新页面，对照 1.1 修改前截图。切“仓库检查”Terminal 运行 git status --short、git diff --stat、git diff、git diff --cached；未跟踪文件在 VS Code 查看。若任务已提交，用已保存的任务差异补足历史范围证据。检查后回 Chrome 课件 p18-check，保留结果标签页。】\n\n我现在另外打开一个浏览器标签页，专门检查这份练习页面。先核对地址和服务目录，再刷新，对照任务卡看完整文字，和修改前的画面比较布局。\n\n然后回到终端，查看全部文件状态和完整差异。普通 diff 之外，暂存区和未跟踪文件也要看，才能把本次变化检查完整。\n\n如果任务早已提交，当前 diff 可能是空的。这时要结合首次任务留下的差异记录，核对当时究竟改了什么。当前状态和历史证据各自回答自己的问题。"
      ],
      "segment": "授权与返回",
      "seconds": 110,
      "source": "index.html#p18a",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "已经批准，为什么仍可能没改成？\n\n刷新同一页面、检查完整 Diff。都符合任务才接受。"
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
          "text": "批准后也可能失败。不能把同意当作工具已经执行成功。\n\n成功分支与失败分支互斥，不要讲成一次连续执行的两条返回。\n\n刷新同一页面、检查完整 Diff。都符合任务才接受。"
        }
      ]
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
        "【操作提示｜课件 p18-check 第 1 步；可短暂切回 Chrome 已有“欢迎语验收”标签页与真实差异，指出支持结论的位置。没有齐全证据时，不选择通过。】\n\n检查以后，才决定下一步。第一种情况，文字、布局和改动范围都符合要求，那就接受这次结果。\n\n记录时可以写得具体一点：欢迎语与任务卡一致，布局与修改前一致，差异中没有本次额外改动。把对应截图和差异留下，别人回看时也知道判断从哪里来。",
        "【操作提示｜课件 p18-check 第 2 步；若真实结果有问题，切 VS Code 定位并在 Terminal 发送限定修正请求，完成后复用“欢迎语验收”标签页刷新、复查完整差异。全部符合时只讲下文假设，不制造错误。】\n\n第二种情况，检查到了具体问题。比如，假设目标文字漏了一个字，我们就指出漏在哪里、完整文字应该是什么，让它只修这一处，然后重新检查。\n\n如果发现额外改动，先分清来源，再处理本次越界的部分。不要一句“全部恢复”把你原来做的修改也覆盖掉。修正完成后，仍然回到页面和差异来判断。",
        "【操作提示｜留在课件 p18-check 第 3 步；实际无法验证时，在 VS Code 既有证据单记录错误、缺项和下一步，暂停相关写入。】\n\n第三种情况，眼下无法验证。比如不知道浏览器对应哪份文件，或者缺少关键记录，没法确定改动范围。那就先把缺什么记下来，停在这里补证据。\n\n需要扩大权限才能继续时，也要重新说明动作和影响。不要为了赶到一个“完成”的结论，跳过当前还没弄清的问题。下面换成四个场景，练习怎样作出选择。"
      ],
      "segment": "授权与返回",
      "seconds": 40,
      "source": "index.html#p18-check",
      "teaching": [
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
          "text": "请指出支持接受的页面证据和差异证据。\n\n能够在当前范围内修正，就按证据反馈并复验。\n\n不能验证或影响扩大时暂停，不靠扩大权限掩盖问题。"
        }
      ]
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
        "【操作提示｜课件 p19 第 1 步，停在四道题的题面，暂不揭示解析。留出暂停视频的提示；此页不执行安装、写入或发布。】\n\n现在请你暂停一下视频，逐个看这四个场景。每一题写两样东西：你允许或拒绝什么，以及为什么。\n\n判断时回到具体动作。为了完成眼前任务，它需要读什么、改什么，会不会把影响带到外部？不用背一套权限术语，把理由说清楚就可以。写好以后，我们再看解析。",
        "【操作提示｜课件 p19 第 2 步，揭示 A 的答案，指出“核对分支和 Diff”。】\n\nA，要核对当前分支和差异。我们需要的是读取这些信息，因此只读就够了。\n\n如果为了查看差异，它提出先修改文件，你就应该追问这一步的必要性。当前任务没有写入需求，没必要附带批准写入。",
        "【操作提示｜课件 p19 第 3 步，揭示 B 的答案，联系 p18 已核对的具体计划。】\n\nB，计划已经确认，只改指定欢迎语。这里确实需要写入，可以批准这次明确的修改。\n\n但允许范围还是那份文件里的目标文字。实际环境能写多大范围，要另外核对和记录。做完以后，仍然按页面和差异检查，不能把“我同意了”当作验收结果。",
        "【操作提示｜课件 p19 第 4 步，揭示 C 的答案；安装请求仅作场景判断，不发送安装命令。】\n\nC，为了这次纯文字修改，要先安装依赖。我们拒绝这次安装请求。眼前是一份独立 HTML，换欢迎语不需要新增依赖。\n\n拒绝的时候，可以直接说：“先按当前文件完成文字修改；如果你认为必须安装，请先解释是哪一步需要。”这样的反馈既说明了决定，也给出了继续讨论的依据。",
        "【操作提示｜课件 p19 第 5 步，揭示 D 的答案；不打开新的发布页面。】\n\nD，没有授权就要公开发布。这里应该停止发布动作。发布会让内容对外可见，已经超出了本次本地修改的范围。\n\n以后确实要发布时，先把发布内容、目标位置和影响说明白，再由人确认。如果动作已经发生，还要记录实际影响并处理，不能只停下后续命令就当作没发生。\n\n四道题的理由写完，我们把它们补进已有记录。"
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
      "kicker": "第 1 章 · 1.3 · 判断与交付",
      "lead": "把选择理由补进已有的环境与权限记录：工具路径、CLI 基线、实际权限、停止条件和四题理由；缺项如实标为待补做。一句话：授权管动作，验收看结果。下一节把这些边界写进首页任务。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3>保留记录</h3><div class=\"p-words\" style=\"grid-template-columns:1fr\"><div class=\"p-box\" data-role=\"ctx\"><p>实际权限 · 停止条件</p></div><div class=\"p-box\" data-role=\"ctx\"><p>四题理由</p></div></div></div><div data-reveal=\"1\"><h3>如实标记</h3><ul class=\"p-warns\"><li>缺项待补做</li><li>未补 CLI 不验收</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>一句话</h3><div class=\"p-star\" style=\"width:200px;font-size:22px\">授权管动作<br>验收看结果</div><div class=\"p-box\" data-role=\"us\" style=\"margin-top:12px\"><h3>下一节 1.4 写清任务</h3></div></div></div>",
      "steps": [
        "交付",
        "核对状态",
        "衔接任务"
      ],
      "script": [
        "【操作提示｜课件 p19-recap 第 1 步 → 切 VS Code，打开 docs/setup/ENVIRONMENT.md 和 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md，由讲师整理工具路径、CLI 基线、实际权限与停止入口，并补入四题理由；不让 Agent 把证据文件混入原欢迎语单文件授权。】\n\n这一节的结果，继续放在原来的环境和证据记录里。环境单说明你用哪个入口、CLI 检查到了哪一步、当前权限是什么；证据单保留授权、返回、结果和四个场景的判断理由。\n\n写清这些，以后换机器或者换配置时，就能知道哪些需要重新核对。记录不要求写成长报告，但每个通过结论要找得到依据。",
        "【操作提示｜课件 p19-recap 第 2 步，对照实际记录标记已完成、失败或待补做；CLI 缺项指向本章 preparation.html，不修改状态来凑通过。】\n\n最后看有没有缺项。桌面入口完成过任务，但 CLI 还没有实际跑通，就把 CLI 标记为待补做。可以继续理解后面的任务讨论，依赖 CLI 的操作要等这项补齐。\n\n权限不清楚、工具执行失败，也按实际情况记。先定位缺的是哪一步，再按准备页补齐，不要靠放开所有权限或者修改别处源码，让检查表看起来全部通过。",
        "【操作提示｜回 Chrome 课件 p19-recap 第 3 步；讲完后进入下一节。保留需要的练习页面与记录，不在收尾临时增加新操作。】\n\n这一节，我们从同一个欢迎语任务里，分清了三个问题：它准备做什么，我同意它做什么，最后实际得到了什么。\n\n授权管动作，验收看结果。下一节，我们把这些判断用到首页任务里，把目标、上下文、允许修改的范围和完成标准写清楚，让 Codex 有具体依据开始工作。"
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
          "text": "把选择理由补入已有环境和权限记录，不另造一套材料。\n\n没有危险的全权限配置；没有用修改源码或替代工具伪装环境通过。\n\n我们接下来把这些边界变成可执行的任务说明。"
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
      "seconds": 300
    },
    {
      "label": "判断与交付",
      "seconds": 200
    }
  ]
};

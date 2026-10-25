window.lesson = {
  "title": "写清个人主页的需求",
  "chapter": "第 1 章 · Prompt",
  "section": "01.04",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 个人主页。",
  "scenes": [
    {
      "id": "p20",
      "label": "“做一个好看的主页”还缺什么？",
      "title": "“做一个好看的主页”<span class=\"p20-title-tail\">还缺什么？</span>",
      "lead": "“好看”还没说明显示什么、哪些文件能动、怎样检查",
      "html": "<style>body[data-mode='slides'] #p20 h2{top:82px}body[data-mode='slides'] #p20 .p20-title-tail{display:block}body[data-mode='slides'] #p20 .lede{top:242px}body[data-mode='slides'] #p20 .step-status{top:282px}body[data-mode='slides'] #p20 .scene-content{top:322px;height:340px}.x-g{display:grid;grid-template-columns:1.1fr 1fr;gap:30px;align-items:start;margin-top:12px}.x-g-l{display:grid;gap:10px}.x-g-page{position:relative;transform:rotate(-1deg)}.x-g-page .p-page-body{display:grid;grid-template-columns:1fr auto;gap:8px 12px;padding:14px 18px 18px;background:linear-gradient(135deg,#2A1E5C,#7A2D7E);color:#fff}.x-g-page .hero{font:400 26px/1.2 var(--p-title)}.x-g-page .sub{grid-column:1;font-size:15px;font-weight:400;opacity:.85}.x-g-page .btn{grid-row:1;grid-column:2;align-self:start;font-size:15px;border:2px solid #fff;border-radius:6px;padding:2px 10px}.x-g-page .cards{grid-column:1/3;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.x-g-page .cards i{height:44px;border-radius:6px;background:rgba(255,255,255,.18);font:normal 400 14px/38px sans-serif;text-align:center}.x-g-pin{position:absolute;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font:400 20px/1 var(--p-title);color:#fff;background:var(--c);box-shadow:0 0 0 3px #fff,2px 3px 0 rgba(36,48,66,.25)}.x-g-guess{font:400 20px/1.2 var(--p-title);color:#5A51D1}</style><ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"is-done\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"is-done\"><b>1.3</b>工具使用与权限</li><li class=\"is-now\"><b>1.4</b>写清个人主页的需求</li><li class=\"\"><b>1.5</b>生成并检查个人主页</li><li class=\"\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div class=\"x-g\"><div class=\"x-g-l\"><div data-reveal=\"0\" style=\"display:flex;gap:12px;align-items:center\"><span class=\"p-avatar\">我们</span><p class=\"p-bubble\" style=\"font-size:24px;padding:12px 18px;margin:0\">帮我做一个好看的个人主页</p></div><div class=\"p-replies\" style=\"gap:12px;--rf:21px;margin-top:4px\"><div class=\"p-reply is-missing\" data-key=\"ctx\" data-reveal=\"1\"><span class=\"p-chip\" data-key=\"ctx\">1 目标</span><span>给谁看？显示什么？</span></div><div class=\"p-reply is-missing\" data-key=\"limit\" data-reveal=\"2\"><span class=\"p-chip\" data-key=\"limit\">2 范围</span><span>改哪里？什么时候停？</span></div><div class=\"p-reply is-missing\" data-key=\"done\" data-reveal=\"3\"><span class=\"p-chip\" data-key=\"done\">3 标准</span><span>怎样算可以接受？</span></div></div></div><div class=\"x-g-l\"><span class=\"x-g-guess\" data-reveal=\"0\">AI 只能自己猜，于是……</span><div style=\"position:relative\" data-reveal=\"0\"><div class=\"x-g-page p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>localhost</span></div><div class=\"p-page-body\"><span class=\"hero\">Hi, I'm Alex</span><span class=\"btn\">登录 · 发布</span><span class=\"sub\">Full-stack · Blog · Shop</span><div class=\"cards\"><i>Project 1</i><i>Project 2</i><i>Project 3</i></div></div></div><span class=\"x-g-pin\" data-key=\"ctx\" data-reveal=\"1\" style=\"left:-14px;top:48px\">1</span><span class=\"x-g-pin\" data-key=\"limit\" data-reveal=\"2\" style=\"right:6px;top:-10px\">2</span><span class=\"x-g-pin\" data-key=\"done\" data-reveal=\"3\" style=\"left:46%;bottom:-16px\">3</span></div></div></div>",
      "steps": [
        "先判断",
        "目标",
        "范围",
        "标准"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步；指向左侧请求和右侧示意图，不发送这条模糊请求】\n\n上一节讲了工具能做什么。这一节回到更直接的问题：我到底要它做什么？\n\n看左边这句：“帮我做一个好看的个人主页。”右边是课件画的示意图：名字写成了 Alex，放了三个项目，右上角还有登录和发布。这里哪些地方，本该由我们自己决定？",
        "【操作提示｜推进第 2 步，指向姓名、简介与项目内容】\n\n先看姓名和项目。首屏介绍谁、项目区放什么，只有我们知道。项目说明里写了的照着用，没写的由我们补；个人经历不能用模型编出来的。",
        "【操作提示｜推进第 3 步，指向示意图右上角的“登录 · 发布”】\n\n再看右上角。我们只想展示自己，页面却多了登录和发布，后面就会牵出账号和数据保存。说一句“简单一点”不够，要直接划边界：这次只做首屏和项目区，账号、后端、发布都不做。",
        "【操作提示｜推进第 4 步，指向标准卡；随后转 p21】\n\n最后是“好看”。我们脑子里的样子，对方看不到。至少要说清：显示哪些文字，按钮点了去哪，哪些文件能改，怎么检查。\n\n刚才找到的是目标、范围和标准三处缺口，再加上这些信息从哪来，就是 Prompt 的四个要素。"
      ],
      "segment": "找出缺口",
      "seconds": 100,
      "source": "index.html#p20",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "“做一个好看的主页”还缺什么？\n\n把评价变成可以逐项核对的内容与行为，再进入任务编写。"
        },
        {
          "title": "演示分支",
          "text": "若学员直接给出设计方案，回应：“这可以作为建议，先标出来。没有得到确认之前，不把建议写成已经决定的事实。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09]。"
        },
        {
          "title": "讲师提示",
          "text": "这句话能直接开工吗？请先说一个会改变实现方向的未知项。\n\n给谁看、显示什么内容？这些会影响实现，先依据 Brief 明确，不能私自补假设。\n\n即使画面好看，也可能多做登录、后端或发布；这些没有被批准。\n\n把评价变成可以逐项核对的内容与行为，再进入任务编写。"
        }
      ],
      "closing": "“好看”还没有说明主页给谁看、显示什么、哪些文件可以动、怎样检查。先用这句话找出缺口，再让 Codex 读取项目说明，把会改变实现的决定问清楚。"
    },
    {
      "id": "p21",
      "label": "把刚才的任务拆成四个问题",
      "title": "把刚才的任务拆成四个问题",
      "lead": "一个能执行的任务要回答四个问题：目标（做成什么）、上下文（当前任务必需的信息）、约束（范围、非目标和停止条件）、完成标准（每条都对应一个检查动作）。以欢迎语任务为例，四项都能写得很具体。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"goal\">目标</span><h3 style=\"margin-top:10px;font-size:25px\">Goal</h3><p style=\"font-size:21px;font-weight:700\">指定的课程欢迎语</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"ctx\">上下文</span><h3 style=\"margin-top:10px;font-size:25px\">Context</h3><p style=\"font-size:21px;font-weight:700\">目标 HTML · 仓库状态</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"limit\">约束</span><h3 style=\"margin-top:10px;font-size:25px\">Constraints</h3><p style=\"font-size:21px;font-weight:700\">只改文字 · 越界停</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"3\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"done\">完成标准</span><h3 style=\"margin-top:10px;font-size:25px\">Done when</h3><p style=\"font-size:21px;font-weight:700\">页面一致<br>git diff 输出：<br>仅改欢迎语</p></div></div>",
      "steps": [
        "目标",
        "上下文",
        "约束",
        "完成标准"
      ],
      "script": [
        "【操作提示｜停留课件 p21 第 1 步，借欢迎语任务解释 Goal；不重做 1.1 的修改】\n\n第一个要素是 Goal，目标：这次要做成什么。拿第一节的欢迎语修改对照：把欢迎语换成“你好，欢迎来到 Vibe Coding 课堂！”目标写到了修改后的样子，执行的人知道改成什么，检查的人知道拿什么比。",
        "【操作提示｜推进第 2 步，指向 Context 卡】\n\n第二个是 Context，上下文：完成任务需要知道什么。欢迎语任务里，就是目标 HTML 在哪、原来写了什么、工作区有没有已有改动。\n\n只给当前任务需要的。答案在文件里，就告诉它读哪份文件，不用把整个项目都贴进来。",
        "【操作提示｜推进第 3 步，指向 Constraints 卡】\n\n第三个是 Constraints，约束：能做到哪里，什么情况要停。欢迎语任务只改指定文字，不动结构和样式，不装依赖、不发布；目标文件不存在，或者必须改别的文件，就先停下来问我们。\n\n这是写给 Agent 的要求；实际能访问哪些目录、执行哪些操作，仍由上一节的权限设置控制。",
        "【操作提示｜推进第 4 步，指向 Done when；随后转 p22】\n\n第四个是 Done when，完成标准：看到什么才算交付。欢迎语任务里，是刷新页面逐字核对，再看差异，确认只改了这一处。判断标准写得够不够，就看后面能不能接上一句“我会这样检查”。\n\n四个要素是检查遗漏的清单，不是非写长不可的模板。下面把它用到个人主页上。"
      ],
      "segment": "找出缺口",
      "seconds": 180,
      "source": "index.html#p21",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "把刚才的任务拆成四个问题；每一条都要接到可观察或可执行的检查动作。"
        },
        {
          "title": "演示分支",
          "text": "如果同一条可归多类，回应：“结构是帮助检查遗漏的，不是文字分类考试。重点是执行者能找到要求，验收者能找到依据。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "先问做成什么，不是先选一个酷炫功能。\n\n给当前任务必需的信息，不倾倒无关材料。\n\n写明范围、非目标与停止条件。\n\n每一条都要接到可观察或可执行的检查动作。"
        }
      ]
    },
    {
      "id": "p22",
      "label": "先读材料，只问会改变方案的问题",
      "title": "先读材料，只问会改变方案的问题",
      "lead": "澄清这一轮只规划、不实现。观察三件事：Agent 是否读了 PROJECT_BRIEF.md、占位内容和仓库状态；材料已写明的是否直接引用，只追问缺失且影响方案的问题；有没有越界开始写代码。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>读取</b><small>Brief · 占位内容 · 仓库状态</small></span></li><li data-reveal=\"1\"><span><b>提出问题</b><small>写明的引用，缺的才问</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>保持边界</b><small>只规划，不实现</small></span></li></ol></div>",
      "steps": [
        "交代观察点",
        "区分已知未知",
        "制止越界"
      ],
      "script": [
        "【操作提示｜课件 p22 第 1 步 → VS Code 打开个人主页练习副本的 PROJECT_BRIEF.md 和配套占位内容。切 Terminal 的普通 shell，在同一副本运行 pwd、git status --short，记录现有状态；已有改动先辨明来源，不清空。随后进入已核验的 Codex CLI，发送本页完整澄清请求一次】\n\n左边是第一轮请求：先让它读材料、提问题、给小计划，不实现页面。\n\n我先打开项目说明和占位内容，再在终端确认目录和仓库状态，然后把请求发给 Codex。看三件事：它读了什么，问了什么，有没有动文件。读没读，以工具记录为准。",
        "【操作提示｜回课件推进第 2 步，再切 Terminal 查看实际返回；用 VS Code 对照其引用的材料。只讲真实出现的问题，不要求数量或措辞与课件一致】\n\n看它提的问题。拿项目说明逐条对照：已经有答案的，指给它；材料没写、又会改变实现的，才需要我们决定，比如“查看项目”是跳到本页下面，还是打开外部网站。账号这类本轮不做的，不必讨论。",
        "【操作提示｜回课件推进第 3 步；切 Terminal 检查是否只读。若出现写入，使用当前 CLI 已核验的停止入口，核对 git status --short、git diff 及新增文件，不自动回退。随后回课件 p22-answers】\n\n请求写了本轮不实现。如果它开始建组件、装依赖，就让它停下，说明改了哪些文件，我们再核对实际变化。\n\n它停在问题清单，就轮到我们回答。下一页是课件准备的示例回答。"
      ],
      "segment": "澄清与作答",
      "seconds": 100,
      "source": "index.html#p22",
      "prompt": "Goal · 目标：\n澄清个人主页首屏与项目区的需求，形成供我确认的小计划。\n\nContext · 上下文：\n阅读 PROJECT_BRIEF.md、提供的占位内容和必要的仓库状态。\n材料中已有的答案直接引用，并说明来源。\n\nConstraints · 约束：\n本轮不实现页面；只读检查，不修改文件、不安装依赖。\n只讨论首屏与项目区，不扩展账号、后端或发布。\n影响实现的未知项先向我提问，不自行决定；\n缺少必要材料或关键问题未回答时，列出待确认项并等待补充。\n\nDone when · 完成标准：\n关键未知项已得到我的回答，并整理为明确的需求；\n已提交小计划、预计文件清单和建议的验收方法，供我确认。",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先读材料，只问会改变方案的问题；若直接写代码，停止写入并核对已经变化的文件。缺材料时停在问题清单。"
        },
        {
          "title": "演示分支",
          "text": "如果直接实现，口播：“当前只授权规划，请停止写入，说明已经修改的文件。”如果关键材料缺失，口播：“这个决定尚未完成，我们先停在问题清单。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09、M10]；[核验 V01]。M10 须预备不同提问分支，不要求输出逐字相同。"
        },
        {
          "title": "左右对读",
          "text": "左侧黑底完整请求，右侧逐步讲解。长请求在面板内滚动；复制保留全文，阅读模式展开。"
        },
        {
          "title": "讲师提示",
          "text": "切到 Codex 前先看：读了什么、问题是否必要、有没有偷偷实现。\n\n材料已经回答的无需再问；不要让演示成为无限设计访谈。\n\n若直接写代码，停止写入并核对已经变化的文件。缺材料时停在问题清单。"
        }
      ],
      "layout": "prompt-scene"
    },
    {
      "id": "p22-answers",
      "label": "回答问题，并记下每个决定",
      "title": "回答问题，并记下每个决定",
      "lead": "这是合成案例：Agent 提出四个问题——姓名与简介、项目展示什么、按钮去哪、哪些文件可改，人逐一回答并记录决定。你的项目要记录自己的决定和来源，不照抄示例。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,.75fr) minmax(0,1.5fr) 120px;row-gap:16px;--rf:22px\"><div class=\"is-head\" data-reveal=\"0\"><span>Agent 的问题</span><span>人的回答</span><span>记录决定</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>姓名与简介？</span><span class=\"p-cell\" data-reveal=\"1\">示例同学 · 正在学习 AI 协作开发</span><span class=\"p-why\" data-reveal=\"1\" style=\"color:#11652F\">✓ 已记录</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>项目展示什么？</span><span class=\"p-cell\" data-reveal=\"2\">学习笔记：记录课程练习</span><span class=\"p-why\" data-reveal=\"2\" style=\"color:#11652F\">✓ 已记录</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>按钮去哪？</span><span class=\"p-cell\" data-reveal=\"3\">跳到本页项目区 · 卡片不跳转</span><span class=\"p-why\" data-reveal=\"3\" style=\"color:#11652F\">✓ 已记录</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>哪些文件可改？</span><span class=\"p-cell\" data-reveal=\"4\">React + TS + Vite 必需文件 · 清单须确认</span><span class=\"p-why\" data-reveal=\"4\" style=\"color:#11652F\">✓ 已记录</span></div></div>",
      "steps": [
        "先读问题",
        "姓名与简介？",
        "项目展示什么？",
        "按钮去哪？",
        "哪些文件可改？"
      ],
      "script": [
        "【操作提示｜停留课件 p22-answers 第 1 步，只展示问题；此页案例与 CLI 实际输出分开讲】\n\n左边四个问题：姓名和简介、项目展示什么、按钮去哪、哪些文件能改，分别对应内容、交互和范围。我用“示例同学”这组公开占位内容，演示怎么答得具体。",
        "【操作提示｜推进第 2 步，展示姓名和简介；如采用该案例，在 VS Code 的 PROMPT_V1.md 草稿中记录，保存由讲师手动完成】\n\n姓名答“示例同学”，简介答“正在学习 AI 协作开发”。直接给最终显示的文字，后面检查时能逐字对照。",
        "【操作提示｜回课件推进第 3 步，指向一个合成项目；在草稿中记录名称和描述】\n\n项目只放一项：“学习笔记”，描述是“记录课程练习”。数量一定要说。只说“展示我的项目”，对方可能排出三张卡片，还配好看起来很真的介绍。",
        "【操作提示｜回课件推进第 4 步，指向按钮与项目卡的不同要求；此处没有已生成个人主页，不打开本地应用冒充演示】\n\n按钮叫“查看项目”，还要说点了去哪：本例跳到本页项目区；项目卡只展示，不跳转。两句都要写，否则卡片可能被加上一个我们没给的链接。",
        "【操作提示｜推进第 5 步；切 Terminal，仅将与实际缺项对应的已确认答案发送到原澄清会话，并要求整理小计划、预计文件清单和验收建议，仍不修改文件。回 VS Code 留存决定及来源，再回课件 p23】\n\n最后是文件范围。个人主页用 React、TypeScript 和 Vite，会涉及源码、包清单和配置，先让它列出预计文件，我们逐项确认。\n\n我把这些答案回给刚才的对话，请它整理需求、小计划、预计文件和验收建议，仍然不改文件。返回后核对：有没有漏掉按钮行为，有没有多加功能。"
      ],
      "segment": "澄清与作答",
      "seconds": 140,
      "source": "index.html#p22-answers",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "回答问题，并记下每个决定；教学示例的人工作答是：允许创建 React + TypeScript + Vite 必需文件；清单须确认。 实际项目必须记录自己的决定及来源。"
        },
        {
          "title": "演示分支",
          "text": "如果直接实现，口播：“当前只授权规划，请停止写入，说明已经修改的文件。”如果关键材料缺失，口播：“这个决定尚未完成，我们先停在问题清单。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09、M10]；[核验 V01]。M10 须预备不同提问分支，不要求输出逐字相同。"
        },
        {
          "title": "讲师提示",
          "text": "这是合成案例。先判断四个问题是否已经在自己的 Brief 中有答案。\n\n教学示例的人工作答是：“示例同学”；“正在学习 AI 协作开发。” 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：一个合成项目：“学习笔记：记录课程练习”。 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：“查看项目”跳到本页项目区；项目卡不跳转。 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：允许创建 React + TypeScript + Vite 必需文件；清单须确认。 实际项目必须记录自己的决定及来源。"
        }
      ]
    },
    {
      "id": "p23",
      "label": "先把“做什么”和“依据什么”写清",
      "title": "先把“做什么”和“依据什么”写清",
      "lead": "把问答落进任务：目标写到具体内容（首屏的示例同学与简介、项目区的学习笔记），上下文写明决定来源和交互（按钮跳到项目区，卡片不跳转）。完整稿是教学示例，使用前换成自己的材料再确认。",
      "html": "<div class=\"demo-notes\"><div style=\"display:grid;gap:12px\"><div class=\"p-segs\"><div class=\"p-seg\" data-reveal=\"0\"><span class=\"p-chip\" data-key=\"goal\">Goal</span><span>首屏：示例同学 + 简介 · 项目区：学习笔记</span></div><div class=\"p-seg\" data-reveal=\"1\"><span class=\"p-chip\" data-key=\"ctx\">Context</span><span>来自已确认问答 · 按钮到项目区</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"font-size:20px\"><b>示例同学、项目等示例内容，换成你自己的再确认</b></div></div></div>",
      "steps": [
        "目标落到内容",
        "上下文落到决定",
        "查看完整稿"
      ],
      "script": [
        "【操作提示｜停留课件 p23 第 1 步，指向左侧 Goal；本页完整实现请求先讲解，不发送执行】\n\n现在把答案按四个要素整理成完整任务。先看 Goal：首屏显示“示例同学”和简介，项目区显示“学习笔记：记录课程练习”，每一项都来自刚才的回答。冒出“资深开发者”或新项目，就是整理时多加了内容。",
        "【操作提示｜推进第 2 步，指向 Context；对照已保存的人工决定】\n\n再看 Context：写明依据哪份项目说明，哪些是我们补的决定，比如按钮跳到项目区、项目卡不跳转。一条要求放在目标还是上下文都行，关键是信息不丢、前后不冲突。",
        "【操作提示｜推进第 3 步 → Chrome 新开“完整 Prompt 对照”标签页：复制当前课件地址，将末尾 index.html 后的查询与锚点改为 ?mode=scroll#p23。保留原演示标签页；在新页阅读并复制完整请求到 VS Code 的 PROMPT_V1.md 草稿，已有文件则编辑原稿，不覆盖已有决定。随后回原课件标签页 p23-scope】\n\n完整请求比较长，我另开一个阅读页展开，复制到 PROMPT_V1.md 草稿，再换成自己的材料。没决定的地方，标成待确认。\n\n接下来两页看约束和完成标准，这两项最容易写空。"
      ],
      "segment": "拼成任务",
      "seconds": 90,
      "source": "index.html#p23",
      "prompt": "Goal：生成个人主页首屏与项目区；首屏显示“示例同学”、\n“正在学习 AI 协作开发。”；项目区显示“学习笔记：记录课程练习”。\nContext：沿用上页合成问答；“查看项目”跳到本页项目区，项目卡不跳转。\nConstraints：React + TypeScript + Vite；示例写入范围为根目录 index.html、\npackage.json、package-lock.json、vite.config.ts、tsconfig*.json、src/。\n依赖版本按已核验工具链；不改 setup-check/，不加账号、后端或发布。\n先复述并列计划，等人确认；缺材料、版本未核验或需越界时先停。\nDone when：文字逐项一致，按钮跳转正确；npm run build 成功；\n无明显控制台错误，git diff 输出和新增文件内容均无越界改动，正式产物无环境页与私人资料。",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先把“做什么”和“依据什么”写清；本页保留完整可复制请求。先逐段理解，实际使用前用自己的材料替换并确认。"
        },
        {
          "title": "演示分支",
          "text": "还有未决项时说：“这一行仍是待确认，不能标成批准。先完成决定，再把它写入执行版本。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09、M10]；[核验 V04]。屏幕短版不能直接代替完整执行任务。"
        },
        {
          "title": "左右对读",
          "text": "左侧黑底完整请求，右侧逐步讲解。长请求在面板内滚动；复制保留全文，阅读模式展开。"
        },
        {
          "title": "讲师提示",
          "text": "沿用上一页问答，把内容写进目标，不能只写一个好看的主页。\n\n把决定来源和交互行为一起写入。不要让 Agent 再猜项目卡要去哪。\n\n本页保留完整可复制请求。先逐段理解，实际使用前用自己的材料替换并确认。"
        }
      ],
      "layout": "prompt-scene"
    },
    {
      "id": "p23-scope",
      "label": "这次允许创建哪些文件？",
      "title": "这次允许创建哪些文件？",
      "lead": "个人主页生成已不是单文件任务：允许创建根目录 index.html、包清单与锁文件、Vite 和 TypeScript 配置以及 src 目录，都要经人确认。setup-check 不改，不加账号、后端或发布，缺材料或越界就先停。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.2fr 1fr;gap:28px\"><ul class=\"p-tree\" data-reveal=\"0\" style=\"font-size:22px\"><li class=\"is-open\"><span class=\"p-path\">练习仓库根目录/</span><ul><li class=\"is-allow\"><span class=\"p-path\">index.html</span></li><li class=\"is-allow\"><span class=\"p-path\">package.json · package-lock.json</span></li><li class=\"is-allow\"><span class=\"p-path\">vite.config.ts · tsconfig*.json</span></li><li class=\"is-allow\"><span class=\"p-path\">src/</span></li><li class=\"is-block\" data-reveal=\"1\"><span class=\"p-path\">setup-check/</span><span class=\"p-note\">不改</span></li></ul></li></ul><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><h3>停止条件</h3><ul class=\"p-warns\"><li>不加账号、后端、发布</li><li>缺材料或越界先停</li></ul></div></div>",
      "steps": [
        "核对文件清单",
        "标出停止条件"
      ],
      "script": [
        "【操作提示｜课件 p23-scope 第 1 步 → VS Code 查看练习副本文件树和 PROMPT_V1.md 中的预计文件清单，只核对，不创建应用文件】\n\n约束先写文件范围。根目录 index.html 是应用入口，package.json 和 package-lock.json 管脚本和依赖，Vite、TypeScript 各有配置，源码在 src。不用记住怎么写，知道它们为什么在清单里，后面拿来对照计划就行。已有同名文件，要写明是修改，不是覆盖。",
        "【操作提示｜回课件推进第 2 步，指向 setup-check/ 与停止条件；在草稿标出尚未核验项，不现场安装依赖】\n\n再写不动什么：setup-check 保留，账号、后端、发布不做。还有停止条件：依赖版本没核验，或者必须改清单以外的文件，就先停下来说明原因。"
      ],
      "segment": "拼成任务",
      "seconds": 45,
      "source": "index.html#p23-scope",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "这次允许创建哪些文件？\n\n版本按已核验工具链；未核验或还缺关键决定，就先停，不让 AI 自行补假设。"
        },
        {
          "title": "演示分支",
          "text": "还有未决项时说：“这一行仍是待确认，不能标成批准。先完成决定，再把它写入执行版本。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09、M10]；[核验 V04]。屏幕短版不能直接代替完整执行任务。"
        },
        {
          "title": "讲师提示",
          "text": "个人主页生成不再是单文件任务。必须把包清单、锁文件、配置与源码纳入人工确认范围。\n\n版本按已核验工具链；未核验或还缺关键决定，就先停，不让 AI 自行补假设。"
        }
      ]
    },
    {
      "id": "p23-done",
      "label": "每条完成标准，都有检查动作",
      "title": "每条完成标准，都有检查动作",
      "lead": "完成标准先写具体，再给每条配一个检查动作：文字与确认稿逐项一致、按钮跳到项目区，靠逐字核对和实际点击；构建靠运行 npm run build 看输出和控制台；改动范围靠文件状态、完整 git diff 输出及新增文件内容；构建产物另行检查，确认没有环境页、secret 或私人资料。",
      "html": "<div style=\"display:grid;gap:14px\"><div style=\"display:grid;grid-template-columns:1fr 60px 1fr;font-size:18px;color:#5B6573\"><span>完成标准</span><span></span><span>检查动作</span></div><div data-reveal=\"0\" style=\"display:grid;grid-template-columns:1fr 60px 1fr;align-items:center\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:12px 18px\"><p class=\"p-big\" style=\"font-size:22px\">文字与确认稿逐项一致；按钮跳到项目区</p></div><i class=\"p-arrow\" style=\"display:block;width:60px;height:22px;background:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 22'%3E%3Cpath d='M2 11C20 10 34 12 48 11' fill='none' stroke='%23243042' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M44 4l14 7-14 7z' fill='%23243042'/%3E%3C/svg%3E&quot;) no-repeat center/contain\"></i><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><p style=\"font-size:21px\">逐字核对 · 点击观察</p></div></div><div data-reveal=\"1\" style=\"display:grid;grid-template-columns:1fr 60px 1fr;align-items:center\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:12px 18px\"><p class=\"p-big\" style=\"font-size:22px\">npm run build 成功；控制台无明显错误</p></div><i class=\"p-arrow\" style=\"display:block;width:60px;height:22px;background:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 22'%3E%3Cpath d='M2 11C20 10 34 12 48 11' fill='none' stroke='%23243042' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M44 4l14 7-14 7z' fill='%23243042'/%3E%3C/svg%3E&quot;) no-repeat center/contain\"></i><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><p style=\"font-size:21px\">build 输出 · 控制台</p></div></div><div data-reveal=\"2\" style=\"display:grid;grid-template-columns:1fr 60px 1fr;align-items:center\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:12px 18px\"><p class=\"p-big\" style=\"font-size:22px\">改动不超出文件清单；产物无环境页与私人资料</p></div><i class=\"p-arrow\" style=\"display:block;width:60px;height:22px;background:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 22'%3E%3Cpath d='M2 11C20 10 34 12 48 11' fill='none' stroke='%23243042' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M44 4l14 7-14 7z' fill='%23243042'/%3E%3C/svg%3E&quot;) no-repeat center/contain\"></i><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><p style=\"font-size:21px\">检查全部改动 · 查看构建产物</p></div></div></div>",
      "steps": [
        "行为",
        "构建",
        "范围"
      ],
      "script": [
        "【操作提示｜停留课件 p23-done 第 1 步，讲解下一节的浏览器检查方案；本节不启动开发服务器、不新开 localhost 页面】\n\n完成标准第一条：文字与确认稿逐项一致，按钮跳到项目区。检查动作直接跟着出来：逐项对照姓名、简介和项目文字，点一次按钮看到了哪里，再确认项目卡没被加链接。只写“文字和按钮符合要求”，就没法检查。",
        "【操作提示｜推进第 2 步，指向 npm run build 与控制台；这里只说明后续 Terminal、Chrome 检查位置，不执行构建】\n\n第二条是构建：运行 npm run build，看构建流程是否成功完成；再看浏览器控制台有没有运行错误。构建通过不等于页面内容对，文字和按钮还要单独核对。",
        "【操作提示｜推进第 3 步，指向全部改动和构建产物检查；回看草稿标准，不展示伪造的通过记录】\n\n第三条是改动范围：看完整 git diff；未跟踪的新文件，git diff 不显示内容，要单独打开。确认没混进环境检查页、密钥或私人资料。\n\n每条标准都对应一个动作：看文字、点按钮、跑构建、查差异。这些检查等下一节页面生成后再做。"
      ],
      "segment": "拼成任务",
      "seconds": 45,
      "source": "index.html#p23-done",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "每条完成标准，都有检查动作；查产物和改动范围。写进 Prompt 的每条标准都要能指出检查动作。"
        },
        {
          "title": "演示分支",
          "text": "还有未决项时说：“这一行仍是待确认，不能标成批准。先完成决定，再把它写入执行版本。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09、M10]；[核验 V04]。屏幕短版不能直接代替完整执行任务。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "内容与交互不能由 build 代替。\n\n实际执行 npm run build，不能引用 Agent 说已通过。\n\n查产物和改动范围。写进 Prompt 的每条标准都要能指出检查动作。"
        }
      ]
    },
    {
      "id": "p24",
      "label": "明确 “Done when” 标准",
      "title": "明确 “Done when” 标准",
      "lead": "练习：在练习项目根目录用编辑器新建 PROMPT_V1.md（前面已复制示例的，就改那份草稿），照完整示例的结构写，内容换成 PROJECT_BRIEF.md 里的材料和自己的决定；没定的事列为待确认。这一节 Codex 只读，文件由自己保存。重点改完成标准：“项目区正确”没说几项、显示什么、点击后怎样。挑一条标准，写出打开哪个页面、对照什么文字、点击哪里、应该看到什么；写不出来就继续改。",
      "html": "<div class=\"p-prompt\" style=\"grid-template-columns:1.1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:12px 18px\"><h3 style=\"margin-bottom:6px\">我的 PROMPT_V1.md</h3><div class=\"p-replies\" style=\"gap:8px;--rf:19px\"><div class=\"p-reply\" data-key=\"goal\" style=\"--cl:#E8EAEE;--ct:#243042;opacity:.6\"><span class=\"p-chip\" data-key=\"goal\">Goal</span><span>照示例结构，换成自己的内容</span></div><div class=\"p-reply\" data-key=\"ctx\" style=\"opacity:.6\"><span class=\"p-chip\" data-key=\"ctx\">Context</span><span>PROJECT_BRIEF.md + 自己的决定</span></div><div class=\"p-reply\" data-key=\"limit\" style=\"opacity:.6\"><span class=\"p-chip\" data-key=\"limit\">Constraints</span><span>没定的事列为待确认</span></div><div class=\"p-reply is-missing\" data-key=\"done\"><span class=\"p-chip\" data-key=\"done\">Done when</span><span class=\"p-ask\">几项？显示什么？点了怎样？</span></div></div></div><div style=\"display:grid;gap:14px;align-content:start\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>写出具体检查项</h3><p>打开哪个页面 → 对照什么文字 → 点击哪里 → 应该看到什么</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ok\">参考示例</span><p>标准：项目区 1 张卡片（学习笔记），文字与确认稿一致，点击不跳转</p><p style=\"margin-top:6px\">检查：打开主页 → 逐字对照 → 点卡片，页面不动</p></div></div></div>",
      "steps": [
        "找出缺口",
        "写检查动作",
        "对照参考"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，不提前揭晓；VS Code 打开练习项目根目录的 PROMPT_V1.md 草稿（p23 已复制完整示例；没有则新建），指向 Done when 一行。录播留短暂停顿，提示学员自行暂停】\n\n现在自己写。在练习项目根目录新建 PROMPT_V1.md，已经复制过示例的就在那份上改，把四个要素换成自己的材料和决定。\n\n最容易写空的是完成标准。看左边：“项目区正确”。放几项、显示什么字、点了怎么样，都没说。请暂停视频，花两分钟改自己的完成标准；没答案的列成待确认。",
        "【操作提示｜推进第 2 步 → VS Code 在 PROMPT_V1.md 草稿里挑一条 Done when，写出对应检查动作，手动保存；随后回课件】\n\n改完换个角度：假设我们要验收，挑一条标准，说出具体动作：打开哪个页面，对照哪段文字，点哪里，应该看到什么。说不出来，就继续补。",
        "【操作提示｜推进第 3 步，展示参考解析；必要时切回草稿修改，再回课件 p25】\n\n参考写法：项目区只展示一项“学习笔记”，名称和描述与确认稿一致；点击项目卡，页面不跳转。检查动作是逐字对照卡片文字，再点一下卡片，看页面有没有跳走。数量、内容、行为都有了。"
      ],
      "segment": "练习与确认",
      "seconds": 240,
      "source": "index.html#p24",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "把“项目区正确”改到能验收；数量、内容、行为不明确时先问，不得填猜测。草稿可以保存，不能标成已批准。"
        },
        {
          "title": "演示分支",
          "text": "材料缺失时说：“先记录缺项和需要谁决定。带着占位符的草稿可以保存，但不能当作已经批准的执行任务。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M09、M10]。"
        },
        {
          "title": "讲师提示",
          "text": "先暂停两分钟起草，不先看参考解析。结构照示例，内容不照抄教师的决定。\n\n重点是完成标准：选一条 Done when，自己写出实际检查动作；写不出来就继续改写。同伴复述可选。\n\nPROMPT_V1.md 由学员在练习项目根目录用编辑器保存，不交给 Codex 写。数量、内容、行为不明确时先问，不得填猜测。草稿可以保存，不能标成已批准。"
        }
      ]
    },
    {
      "id": "p25",
      "label": "现在可以开工了吗？",
      "title": "现在可以开工了吗？",
      "lead": "四要素都写了，但“查看项目”按钮点了去哪，还写着“待定”。这个决定会改变实现，先确认再开工。最后在 PROMPT_V1.md 里写下状态：哪些决定已确认，还缺哪一项；执行计划留到下一节核对后再授权",
      "html": "<div class=\"p-claim\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">候选状态</span><ul class=\"p-checks\" style=\"margin-top:10px\"><li>四要素已写</li><li class=\"is-no\">“查看项目”按钮去向：待定</li></ul></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:30px\">暂不开工</span><p style=\"margin-top:12px\">关键决定确认后再开工</p></div></div><div class=\"p-q\" data-reveal=\"2\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">在 PROMPT_V1.md 写下状态：已确认什么，还缺什么</p></div>",
      "steps": [
        "先判断",
        "再解释",
        "记录状态"
      ],
      "script": [
        "【操作提示｜停留课件 p25 第 1 步，展示“查看项目按钮去向待定”的候选状态；停顿后继续讲解】\n\n这份任务四个要素都填了，但“查看项目”按钮点了去哪，还写着“待定”。现在让它实现，它就得自己选：跳到项目区、打开新页面，还是做个点了没反应的按钮。能开工吗？先暂停想一想。",
        "【操作提示｜推进第 2 步，说明暂不开工；停留课件，不切窗口，不在 CLI 发送批准】\n\n我的判断是不开工。这个未知项直接改变实现，四个标题填满也替代不了它。决定补齐后，下一节还要先核对计划，再授权执行。",
        "【操作提示｜推进第 3 步 → VS Code 在 PROMPT_V1.md 末尾写状态：演示项目记“需求已确认：‘查看项目’跳到项目区；执行确认留到 1.5”。本节不向 CLI 发送实现授权。回课件 p25-recap】\n\n最后在 PROMPT_V1.md 末尾写状态。示例项目的按钮去向已经定了，写“需求已确认”；你的还没定，就写“待确认：按钮点了去哪”。"
      ],
      "segment": "练习与确认",
      "seconds": 100,
      "source": "index.html#p25",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "现在可以开工了吗？\n\n不能。“查看项目”按钮的去向会改变实现，先确认；本节只记录状态，不授权执行。"
        },
        {
          "title": "演示分支",
          "text": "演示项目在 p22-answers 已决定“查看项目”跳到项目区，第 3 步只读“需求已确认”这一支；“待定”是本页的候选状态，不在演示项目里制造。学员按自己的实际情况二选一记录，不把两条分支都讲成已发生。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M10]。"
        },
        {
          "title": "讲师提示",
          "text": "请学员暂停视频，先写下接受或继续澄清的结论，并说明依据。\n\n关键未知会改变实现，不因 Prompt 格式完整就开工。执行确认留到下一节，再对照具体版本的计划。"
        }
      ]
    },
    {
      "id": "p25-recap",
      "label": "对照四项，检查你的 PROMPT_V1.md",
      "title": "对照四项，检查你的 PROMPT_V1.md",
      "lead": "自己对照四项：目标可观察、上下文有来源、范围有边界、标准能检查。保存 PROMPT_V1.md 和人工决定，未决定的事也留在记录里。这一节先确认任务，下一节再生成个人主页。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start;--big:1\"><div data-reveal=\"0\"><h3>自查四项</h3><div class=\"p-words\"><div class=\"p-box\" data-role=\"ink\"><p>目标可观察</p></div><div class=\"p-box\" data-role=\"ctx\"><p>上下文有来源</p></div><div class=\"p-box\" data-role=\"gate\"><p>范围有边界</p></div><div class=\"p-box\" data-role=\"ok\"><p>标准能检查</p></div></div></div><div data-reveal=\"1\"><h3>交付</h3><div class=\"p-box\" data-role=\"tool\"><h3 style=\"font-size:22px\">PROMPT_V1.md</h3><p>+ 人工决定</p></div><ul class=\"p-warns\" style=\"margin-top:12px\"><li>还没定的事，也写进记录</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>1.5 完成个人主页</h3></div></div></div>",
      "steps": [
        "独立自查",
        "核对交付",
        "收束"
      ],
      "script": [
        "【操作提示｜停留课件 p25-recap 第 1 步；可切回 Chrome 已有“完整 Prompt 对照”标签页，不重复新开。对照后返回原演示标签页】\n\n用四个要素把自己的草稿读一遍。目标：能不能说出页面上出现什么？上下文：要求来自哪份材料、哪次决定？约束：哪些文件能动，什么不做，什么时候停？完成标准：每条能不能接上检查动作？暂停视频对照，缺了就补。",
        "【操作提示｜推进第 2 步 → VS Code 确认 PROMPT_V1.md 已保存，人工决定、待确认项与状态可找到。Terminal 普通 shell 运行 git status --short、git diff，核对本节变化；新增文档直接打开检查，不应出现未经授权的应用实现。回课件】\n\n这一节的交付是 PROMPT_V1.md 和里面的决定。用 git status 和 git diff 核对一下：只有文档改动，没有提前生成的应用文件。",
        "【操作提示｜推进第 3 步，停留课件收束；保留文档与会话，下一节再生成、运行和验收个人主页】\n\n回看开头那句“帮我做一个好看的个人主页”，现在已经展开成目标、上下文、约束、完成标准四部分，能执行，也能检查。下一节，我们用这份任务生成个人主页第一版。"
      ],
      "segment": "练习与确认",
      "seconds": 160,
      "source": "index.html#p25-recap",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "对照四项检查自己的 PROMPT_V1.md；这一节没有提前实现。下一节才进入生成、运行与验收。"
        },
        {
          "title": "讲师提示",
          "text": "用一分钟自己对照完整稿检查。指出一条标准、一处边界和一个停止条件。\n\n解释为什么这份任务可以执行，或者明确卡在哪里。实践时间包含在本节二十分钟内。\n\n这一节没有提前实现。下一节才进入生成、运行与验收。"
        }
      ]
    }
  ],
  "segments": [
    {
      "label": "找出缺口",
      "seconds": 280
    },
    {
      "label": "澄清与作答",
      "seconds": 240
    },
    {
      "label": "拼成任务",
      "seconds": 180
    },
    {
      "label": "练习与确认",
      "seconds": 500
    }
  ]
};

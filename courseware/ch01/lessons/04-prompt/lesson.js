window.lesson = {
  "title": "写清首页任务：从模糊需求到可执行 Prompt",
  "chapter": "第 1 章 · Prompt",
  "section": "01.04",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p20",
      "label": "“做一个好看的主页”还缺什么？",
      "title": "“做一个好看的主页”还缺什么？",
      "kicker": "第 1 章 · 1.4 · 找出缺口",
      "lead": "1.3 权限边界 → 1.4 可执行 Prompt → 1.5 首页 v0",
      "html": "<style>.x-g{display:grid;grid-template-columns:1.1fr 1fr;gap:30px;align-items:start;margin-top:12px}.x-g-l{display:grid;gap:10px}.x-g-page{position:relative;transform:rotate(-1deg)}.x-g-page .p-page-body{display:grid;grid-template-columns:1fr auto;gap:8px 12px;padding:14px 18px 18px;background:linear-gradient(135deg,#2A1E5C,#7A2D7E);color:#fff}.x-g-page .hero{font:400 26px/1.2 var(--p-title)}.x-g-page .sub{grid-column:1;font-size:15px;font-weight:400;opacity:.85}.x-g-page .btn{grid-row:1;grid-column:2;align-self:start;font-size:15px;border:2px solid #fff;border-radius:6px;padding:2px 10px}.x-g-page .cards{grid-column:1/3;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.x-g-page .cards i{height:44px;border-radius:6px;background:rgba(255,255,255,.18);font:normal 400 14px/38px sans-serif;text-align:center}.x-g-pin{position:absolute;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font:400 20px/1 var(--p-title);color:#fff;background:var(--c);box-shadow:0 0 0 3px #fff,2px 3px 0 rgba(36,48,66,.25)}.x-g-guess{font:400 20px/1.2 var(--p-title);color:#5A51D1}</style><ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-done\"><b>1.3</b>工具与权限</li><li class=\"is-now\"><b>1.4</b>写清任务</li><li class=\"\"><b>1.5</b>完成首页</li><li class=\"\"><b>1.6</b>最小权限</li></ol><div class=\"x-g\"><div class=\"x-g-l\"><div data-reveal=\"0\" style=\"display:flex;gap:12px;align-items:center\"><span class=\"p-avatar\">我们</span><p class=\"p-bubble\" style=\"font-size:24px;padding:12px 18px;margin:0\">帮我做一个好看的个人主页。</p></div><div class=\"p-replies\" style=\"gap:12px;--rf:21px;margin-top:4px\"><div class=\"p-reply is-missing\" data-key=\"ctx\" data-reveal=\"1\"><span class=\"p-chip\" data-key=\"ctx\">1 目标</span><span>给谁看？显示什么？</span></div><div class=\"p-reply is-missing\" data-key=\"limit\" data-reveal=\"2\"><span class=\"p-chip\" data-key=\"limit\">2 范围</span><span>改哪里？什么时候停？</span></div><div class=\"p-reply is-missing\" data-key=\"done\" data-reveal=\"3\"><span class=\"p-chip\" data-key=\"done\">3 标准</span><span>怎样算可以接受？</span></div></div></div><div class=\"x-g-l\"><span class=\"x-g-guess\" data-reveal=\"0\">AI 只能自己猜，于是……</span><div style=\"position:relative\" data-reveal=\"0\"><div class=\"x-g-page p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>localhost</span></div><div class=\"p-page-body\"><span class=\"hero\">Hi, I'm Alex</span><span class=\"btn\">登录 · 发布</span><span class=\"sub\">Full-stack · Blog · Shop</span><div class=\"cards\"><i>Project 1</i><i>Project 2</i><i>Project 3</i></div></div></div><span class=\"x-g-pin\" data-key=\"ctx\" data-reveal=\"1\" style=\"left:-14px;top:48px\">1</span><span class=\"x-g-pin\" data-key=\"limit\" data-reveal=\"2\" style=\"right:6px;top:-10px\">2</span><span class=\"x-g-pin\" data-key=\"done\" data-reveal=\"3\" style=\"left:46%;bottom:-16px\">3</span></div></div></div>",
      "steps": [
        "先判断",
        "目标",
        "范围",
        "标准"
      ],
      "script": [
        "上一节我们把权限边界理清了，这一节来写任务。先看这句话：“帮我做一个好看的个人主页。”它能直接开工吗？如果直接开工，AI 只能自己猜，比如猜出右边这样一个页面：名字、技术栈、项目全是它编的，还顺手加了登录和发布。请先说出一个会改变实现方向的未知项。",
        "第一个缺口是目标：给谁看？首屏和项目区显示什么？页面上的名字和项目都是 AI 猜的。这些会直接影响实现，要先依据 Brief 说清，不能让 AI 自己补假设。",
        "第二个缺口是范围：允许改哪里，哪些不做，什么时候停。画面再好看，也可能顺手多做了登录、后端或者发布，就像这个页面右上角，这些都没有被批准。",
        "第三个缺口是标准：怎样检查，才知道可以接受？这个页面好不好看，没有标准就没法判断。要把“好看”变成能逐项核对的内容和行为。把这三个缺口整理一下，就是写任务的四个问题。"
      ],
      "segment": "找出缺口",
      "seconds": 100,
      "source": "index.html#p20",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先判断\n\n2. 范围\n\n3. 标准"
        },
        {
          "title": "追问与预期判断",
          "text": "“做一个好看的主页”还缺什么？；把评价变成可以逐项核对的内容与行为，再进入任务编写。"
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n这句话能直接开工吗？请先说一个会改变实现方向的未知项。\n\n给谁看、显示什么内容？这些会影响实现，先依据 Brief 明确，不能私自补假设。\n\n即使画面好看，也可能多做登录、后端或发布；这些没有被批准。\n\n把评价变成可以逐项核对的内容与行为，再进入任务编写。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p21",
      "label": "把刚才的任务拆成四个问题",
      "title": "把刚才的任务拆成四个问题",
      "kicker": "第 1 章 · 1.4 · 找出缺口",
      "lead": "一个能执行的任务要回答四个问题：目标（做成什么）、上下文（当前任务必需的信息）、约束（范围、非目标和停止条件）、完成标准（每条都对应一个检查动作）。以欢迎语任务为例，四项都能写得很具体。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"goal\">目标</span><h3 style=\"margin-top:10px;font-size:25px\">Goal</h3><p style=\"font-size:21px;font-weight:700\">指定的课程欢迎语</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"ctx\">上下文</span><h3 style=\"margin-top:10px;font-size:25px\">Context</h3><p style=\"font-size:21px;font-weight:700\">目标 HTML · 仓库状态</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"limit\">约束</span><h3 style=\"margin-top:10px;font-size:25px\">Constraints</h3><p style=\"font-size:21px;font-weight:700\">只改文字 · 越界停</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"3\" style=\"padding:14px 18px\"><span class=\"p-chip\" data-key=\"done\">完成标准</span><h3 style=\"margin-top:10px;font-size:25px\">Done when</h3><p style=\"font-size:21px;font-weight:700\">页面一致 · Diff 仅一处</p></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">能执行 · <b>能检查</b></div>",
      "steps": [
        "目标",
        "上下文",
        "约束",
        "完成标准"
      ],
      "script": [
        "第一个问题是目标：做成什么。拿欢迎语任务来说，目标就是改成指定的课程欢迎语，而不是先挑一个酷炫功能。",
        "第二个是上下文：给当前任务必需的信息，比如目标 HTML 和已有的仓库状态，不要把无关材料一股脑倒进去。",
        "第三个是约束：写明范围、非目标和停止条件。欢迎语任务里，就是只改文字，不装依赖、不发布，越界就停。",
        "第四个是完成标准：每一条都接到一个能观察、能执行的检查，比如页面逐字一致，完整 Diff 里只有指定的修改。四个问题都回答了，任务才能执行、能检查。接下来，用它来澄清首页需求。"
      ],
      "segment": "找出缺口",
      "seconds": 180,
      "source": "index.html#p21",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 目标\n\n2. 上下文\n\n3. 约束\n\n4. 完成标准"
        },
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先问做成什么，不是先选一个酷炫功能。\n\n给当前任务必需的信息，不倾倒无关材料。\n\n写明范围、非目标与停止条件。\n\n每一条都要接到可观察或可执行的检查动作。"
        }
      ],
      "notes": "<p>预算 180 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p22",
      "label": "先读材料，只问会改变方案的问题",
      "title": "先读材料，只问会改变方案的问题",
      "kicker": "第 1 章 · 1.4 · 澄清与作答",
      "lead": "澄清这一轮只规划、不实现。观察三件事：Agent 是否读了 PROJECT_BRIEF.md、占位内容和仓库状态；材料已写明的是否直接引用，只追问缺失且影响方案的问题；有没有越界开始写代码。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>读取</b><small>Brief · 占位内容 · 仓库状态</small></span></li><li data-reveal=\"1\"><span><b>提出问题</b><small>写明的引用，缺的才问</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>保持边界</b><small>只规划，不实现</small></span></li></ol></div>",
      "steps": [
        "交代观察点",
        "区分已知未知",
        "制止越界"
      ],
      "script": [
        "左边是这一轮的请求：先澄清，不实现。切到 Codex 之前，先记住三件事：它读了哪些材料，提的问题是否必要，有没有偷偷动手实现。第一件，它应该读 PROJECT_BRIEF.md、占位内容和必要的仓库状态。",
        "第二件，材料里已经写明的，直接引用并说明来源；只有缺失、而且会影响方案的，才提问。不要让演示变成没完没了的设计访谈。",
        "第三件，保持边界：这一轮只规划，不写实现，关键的未知项由人来决定。如果它直接开始写代码，就停止写入，核对已经变化的文件；缺材料就停在问题清单。它提出了四个问题，我们逐个回答。"
      ],
      "segment": "澄清与作答",
      "seconds": 100,
      "source": "index.html#p22",
      "prompt": "Goal · 目标：\n澄清个人主页首屏与项目区的需求，形成供我确认的小计划。\n\nContext · 上下文：\n阅读 PROJECT_BRIEF.md、提供的占位内容和必要的仓库状态。\n材料中已有的答案直接引用，并说明来源。\n\nConstraints · 约束：\n本轮不实现页面；只读检查，不修改文件、不安装依赖。\n只讨论首屏与项目区，不扩展账号、后端或发布。\n影响实现的未知项先向我提问，不自行决定；\n缺少必要材料或关键问题未回答时，列出待确认项并等待补充。\n\nDone when · 完成标准：\n关键未知项已得到我的回答，并整理为明确的需求；\n已提交小计划、预计文件清单和建议的验收方法，供我确认。",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 交代观察点\n\n2. 区分已知未知\n\n3. 制止越界"
        },
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n切到 Codex 前先看：读了什么、问题是否必要、有没有偷偷实现。\n\n材料已经回答的无需再问；不要让演示成为无限设计访谈。\n\n若直接写代码，停止写入并核对已经变化的文件。缺材料时停在问题清单。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>",
      "layout": "prompt-scene"
    },
    {
      "id": "p22-answers",
      "label": "问题逐个回答，决定逐项留痕",
      "title": "问题逐个回答，决定逐项留痕",
      "kicker": "第 1 章 · 1.4 · 澄清与作答",
      "lead": "这是合成案例：Agent 提出四个问题——姓名与简介、项目展示什么、按钮去哪、哪些文件可改，人逐一回答并留痕。你的项目要记录自己的决定和来源，不照抄示例。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,.75fr) minmax(0,1.5fr) 120px;row-gap:16px;--rf:22px\"><div class=\"is-head\" data-reveal=\"0\"><span>Agent 的问题</span><span>人的回答</span><span>留痕</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>姓名与简介？</span><span class=\"p-cell\" data-reveal=\"1\">示例同学 · 正在学习 AI 协作开发</span><span class=\"p-why\" data-reveal=\"1\" style=\"color:#11652F\">✓ 已记录</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>项目展示什么？</span><span class=\"p-cell\" data-reveal=\"2\">学习笔记：记录课程练习</span><span class=\"p-why\" data-reveal=\"2\" style=\"color:#11652F\">✓ 已记录</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>按钮去哪？</span><span class=\"p-cell\" data-reveal=\"3\">跳到本页项目区 · 卡片不跳转</span><span class=\"p-why\" data-reveal=\"3\" style=\"color:#11652F\">✓ 已记录</span></div><div><span class=\"p-cell\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"agent\">问</span>哪些文件可改？</span><span class=\"p-cell\" data-reveal=\"4\">React + TS + Vite 必需文件 · 清单须确认</span><span class=\"p-why\" data-reveal=\"4\" style=\"color:#11652F\">✓ 已记录</span></div></div>",
      "steps": [
        "先读问题",
        "姓名与简介？",
        "项目展示什么？",
        "按钮去哪？",
        "哪些文件可改？"
      ],
      "script": [
        "这是一个合成案例。先看左边的四个问题，想一想：在你自己的 Brief 里，它们是不是已经有答案？",
        "第一个，姓名和简介。示例里的回答是：“示例同学”，“正在学习 AI 协作开发”。",
        "第二个，项目区展示什么。示例只放一个合成项目：“学习笔记：记录课程练习”。",
        "第三个，按钮去哪。“查看项目”跳到本页的项目区，项目卡本身不跳转。",
        "第四个，哪些文件可以改。允许创建 React、TypeScript、Vite 的必需文件，清单要经过确认。每一条都记录下来；你的实际项目，记录的是你自己的决定和来源。有了这些答案，就可以拼成任务了。"
      ],
      "segment": "澄清与作答",
      "seconds": 140,
      "source": "index.html#p22-answers",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先读问题\n\n2. 姓名与简介？\n\n3. 项目展示什么？\n\n4. 按钮去哪？\n\n5. 哪些文件可改？"
        },
        {
          "title": "追问与预期判断",
          "text": "问题逐个回答，决定逐项留痕；教学示例的人工作答是：允许创建 React + TypeScript + Vite 必需文件；清单须确认。 实际项目必须记录自己的决定及来源。"
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n这是合成案例。先判断四个问题是否已经在自己的 Brief 中有答案。\n\n教学示例的人工作答是：“示例同学”；“正在学习 AI 协作开发。” 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：一个合成项目：“学习笔记：记录课程练习”。 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：“查看项目”跳到本页项目区；项目卡不跳转。 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：允许创建 React + TypeScript + Vite 必需文件；清单须确认。 实际项目必须记录自己的决定及来源。"
        }
      ],
      "notes": "<p>预算 140 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p23",
      "label": "先把“做什么”和“依据什么”写清",
      "title": "先把“做什么”和“依据什么”写清",
      "kicker": "第 1 章 · 1.4 · 拼成任务",
      "lead": "把问答落进任务：目标写到具体内容（首屏的示例同学与简介、项目区的学习笔记），上下文写明决定来源和交互（按钮跳到项目区，卡片不跳转）。完整稿是教学示例，使用前换成自己的材料再确认。",
      "html": "<div class=\"demo-notes\"><div style=\"display:grid;gap:12px\"><div class=\"p-segs\"><div class=\"p-seg\" data-reveal=\"0\"><span class=\"p-chip\" data-key=\"goal\">Goal</span><span>首屏：示例同学 + 简介 · 项目区：学习笔记</span></div><div class=\"p-seg\" data-reveal=\"1\"><span class=\"p-chip\" data-key=\"ctx\">Context</span><span>来自已确认问答 · 按钮到项目区</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"font-size:20px\"><b>示例 ≠ 你的项目已批准</b></div></div></div>",
      "steps": [
        "目标落到内容",
        "上下文落到决定",
        "查看完整稿"
      ],
      "script": [
        "左边是拼好的完整任务。先看目标：把刚才的问答落到具体内容上，首屏显示示例同学和指定简介，项目区显示学习笔记，而不是只写“一个好看的主页”。",
        "再看上下文：把决定的来源和交互行为一起写进去，按钮跳到本页项目区，项目卡不跳转。不要让 Agent 再去猜。",
        "完整稿可以复制。不过它是教学示例，不等于你的项目已经批准；实际使用前，换成你自己的材料，再确认。约束里最关键的，是这次允许创建哪些文件。"
      ],
      "segment": "拼成任务",
      "seconds": 90,
      "source": "index.html#p23",
      "prompt": "Goal：生成首页首屏与项目区；首屏显示“示例同学”、\n“正在学习 AI 协作开发。”；项目区显示“学习笔记：记录课程练习”。\nContext：沿用上页合成问答；“查看项目”跳到本页项目区，项目卡不跳转。\nConstraints：React + TypeScript + Vite；示例写入范围为根目录 index.html、\npackage.json、package-lock.json、vite.config.ts、tsconfig*.json、src/。\n依赖版本按已核验工具链；不改 setup-check/，不加账号、后端或发布。\n先复述并列计划，等人确认；缺材料、版本未核验或需越界时先停。\nDone when：文字逐项一致，按钮跳转正确；npm run build 成功；\n无明显控制台错误，Diff 无越界，正式产物无环境页与私人资料。",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 目标落到内容\n\n2. 上下文落到决定\n\n3. 查看完整稿"
        },
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n沿用上一页问答，把内容写进目标，不能只写一个好看的主页。\n\n把决定来源和交互行为一起写入。不要让 Agent 再猜项目卡要去哪。\n\n本页保留完整可复制请求。先逐段理解，实际使用前用自己的材料替换并确认。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>",
      "layout": "prompt-scene"
    },
    {
      "id": "p23-scope",
      "label": "这次允许创建哪些文件？",
      "title": "这次允许创建哪些文件？",
      "kicker": "第 1 章 · 1.4 · 拼成任务",
      "lead": "首页生成已不是单文件任务：允许创建根目录 index.html、包清单与锁文件、Vite 和 TypeScript 配置以及 src 目录，都要经人确认。setup-check 不改，不加账号、后端或发布，缺材料或越界就先停。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.2fr 1fr;gap:28px\"><ul class=\"p-tree\" data-reveal=\"0\" style=\"font-size:22px\"><li class=\"is-open\"><span class=\"p-path\">练习仓库根目录/</span><ul><li class=\"is-allow\"><span class=\"p-path\">index.html</span></li><li class=\"is-allow\"><span class=\"p-path\">package.json · package-lock.json</span></li><li class=\"is-allow\"><span class=\"p-path\">vite.config.ts · tsconfig*.json</span></li><li class=\"is-allow\"><span class=\"p-path\">src/</span></li><li class=\"is-block\" data-reveal=\"1\"><span class=\"p-path\">setup-check/</span><span class=\"p-note\">不改</span></li></ul></li></ul><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><h3>停止条件</h3><ul class=\"p-warns\"><li>不加账号、后端、发布</li><li>缺材料或越界先停</li></ul></div></div>",
      "steps": [
        "核对文件清单",
        "标出停止条件"
      ],
      "script": [
        "生成首页已经不是单文件任务了。允许创建的是根目录的 index.html、包清单和锁文件、Vite 和 TypeScript 的配置，以及 src 目录，这些都要纳入人工确认的范围。",
        "setup-check 目录不改，也不加账号、后端或发布；版本按已核验的工具链，缺材料或需要越界，就先停。范围定了，再把完成标准接到检查动作上。"
      ],
      "segment": "拼成任务",
      "seconds": 45,
      "source": "index.html#p23-scope",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 核对文件清单\n\n2. 标出停止条件"
        },
        {
          "title": "追问与预期判断",
          "text": "这次允许创建哪些文件？；版本按已核验工具链；未核验或还缺关键决定，就先停，不让 AI 自行补假设。"
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n首页生成不再是单文件任务。必须把包清单、锁文件、配置与源码纳入人工确认范围。\n\n版本按已核验工具链；未核验或还缺关键决定，就先停，不让 AI 自行补假设。"
        }
      ],
      "notes": "<p>预算 45 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p23-done",
      "label": "每条完成标准，都有检查动作",
      "title": "每条完成标准，都有检查动作",
      "kicker": "第 1 章 · 1.4 · 拼成任务",
      "lead": "每条完成标准都配一个检查动作：文字与按钮靠逐字核对和实际点击；构建靠亲自运行 npm run build 看输出和控制台；范围与产物靠完整 Diff，确认没有环境页、secret 或私人资料。",
      "html": "<div style=\"display:grid;gap:14px\"><div style=\"display:grid;grid-template-columns:1fr 60px 1fr;font-size:18px;color:#5B6573\"><span>完成标准</span><span></span><span>检查动作</span></div><div data-reveal=\"0\" style=\"display:grid;grid-template-columns:1fr 60px 1fr;align-items:center\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:12px 18px\"><p class=\"p-big\" style=\"font-size:22px\">文字与按钮符合要求</p></div><i class=\"p-arrow\" style=\"display:block;width:60px;height:22px;background:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 22'%3E%3Cpath d='M2 11C20 10 34 12 48 11' fill='none' stroke='%23243042' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M44 4l14 7-14 7z' fill='%23243042'/%3E%3C/svg%3E&quot;) no-repeat center/contain\"></i><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><p style=\"font-size:21px\">逐字核对 · 点击观察</p></div></div><div data-reveal=\"1\" style=\"display:grid;grid-template-columns:1fr 60px 1fr;align-items:center\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:12px 18px\"><p class=\"p-big\" style=\"font-size:22px\">构建成功、无明显错误</p></div><i class=\"p-arrow\" style=\"display:block;width:60px;height:22px;background:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 22'%3E%3Cpath d='M2 11C20 10 34 12 48 11' fill='none' stroke='%23243042' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M44 4l14 7-14 7z' fill='%23243042'/%3E%3C/svg%3E&quot;) no-repeat center/contain\"></i><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><p style=\"font-size:21px\">build 输出 · 控制台</p></div></div><div data-reveal=\"2\" style=\"display:grid;grid-template-columns:1fr 60px 1fr;align-items:center\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:12px 18px\"><p class=\"p-big\" style=\"font-size:22px\">范围与产物合规</p></div><i class=\"p-arrow\" style=\"display:block;width:60px;height:22px;background:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 22'%3E%3Cpath d='M2 11C20 10 34 12 48 11' fill='none' stroke='%23243042' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M44 4l14 7-14 7z' fill='%23243042'/%3E%3C/svg%3E&quot;) no-repeat center/contain\"></i><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><p style=\"font-size:21px\">完整 Diff · 产物无私人资料</p></div></div></div>",
      "steps": [
        "行为",
        "构建",
        "范围"
      ],
      "script": [
        "第一条标准：文字和按钮符合要求。对应的检查是逐字核对，再真的点一下。内容和交互，不能用 build 代替。",
        "第二条：构建成功、没有明显错误。对应的检查是亲自运行 npm run build，看实际输出和控制台，而不是引用 Agent 说已经通过。",
        "第三条：范围和产物合规。对应的检查是看完整 Diff，确认应用和产物里没有环境页、secret 或私人资料。写进 Prompt 的每一条标准，都要能指出检查动作。现在轮到你来改写一个任务。"
      ],
      "segment": "拼成任务",
      "seconds": 45,
      "source": "index.html#p23-done",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 行为\n\n2. 构建\n\n3. 范围"
        },
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n内容与交互不能由 build 代替。\n\n实际执行 npm run build，不能引用 Agent 说已通过。\n\n查产物和改动范围。写进 Prompt 的每条标准都要能指出检查动作。"
        }
      ],
      "notes": "<p>预算 45 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p24",
      "label": "把“项目区正确”改到能验收",
      "title": "把“项目区正确”改到能验收",
      "kicker": "第 1 章 · 1.4 · 练习与确认",
      "lead": "练习：补全一个只写了“做一个好看的主页”和“项目区正确”的 Prompt。依据自己的 Brief 补齐四要素，未知项单列，保存为 PROMPT_V1.md；再请同伴为一条完成标准说出检查动作，说不出就继续改。",
      "html": "<div class=\"p-prompt\" style=\"grid-template-columns:1.1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:12px 18px\"><h3 style=\"margin-bottom:6px\">待补全 Prompt</h3><div class=\"p-replies\" style=\"gap:8px;--rf:19px\"><div class=\"p-reply is-missing\" data-key=\"goal\" style=\"--cl:#E8EAEE;--ct:#243042\"><span class=\"p-chip\" data-key=\"goal\">Goal</span><span>做一个好看的主页。</span><span class=\"p-ask\">做给谁、显示什么？</span></div><div class=\"p-reply is-missing\" data-key=\"ctx\"><span class=\"p-chip\" data-key=\"ctx\">Context</span><span>〔材料〕</span></div><div class=\"p-reply is-missing\" data-key=\"limit\"><span class=\"p-chip\" data-key=\"limit\">Constraints</span><span>〔边界〕</span></div><div class=\"p-reply is-missing\" data-key=\"done\"><span class=\"p-chip\" data-key=\"done\">Done when</span><span>项目区正确。</span><span class=\"p-ask\">怎样算正确？</span></div></div></div><div style=\"display:grid;gap:14px;align-content:start\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>你的交付</h3><p>补齐四要素 · 未知项单列</p><p style=\"margin-top:6px\"><code class=\"p-mono\">PROMPT_V1.md</code></p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ok\">参考</span><p>逐项显示已确认内容 · 链接按确认行为</p></div></div></div>",
      "steps": [
        "独立补写",
        "互查标准",
        "揭晓解析"
      ],
      "script": [
        "左边是一个没写完的 Prompt：目标只有“做一个好看的主页”，上下文和约束是空的，完成标准只写了“项目区正确”。请暂停两分钟，自己补写，先不要看参考。",
        "你的交付是：依据自己的 Brief 补齐四个要素，未知项单独列出来，保存为 PROMPT_V1.md。写完后选一条 Done when，请同伴说出实际的检查动作；说不出来，就继续改。",
        "参考写法是：逐项显示已经确认的名称和描述，链接按已确认的行为执行。数量、内容、行为不明确的，先问，不要填猜测。草稿可以保存，但不能标成已批准。写完了，就能开工吗？"
      ],
      "segment": "练习与确认",
      "seconds": 240,
      "source": "index.html#p24",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 独立补写\n\n2. 互查标准\n\n3. 揭晓解析"
        },
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
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先暂停两分钟起草，不先看参考解析。不要照抄教师的内容决定。\n\n选一条 Done when，请同伴说出实际检查动作；说不出来就继续改写。\n\n数量、内容、行为不明确时先问，不得填猜测。草稿可以保存，不能标成已批准。"
        }
      ],
      "notes": "<p>预算 240 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p25",
      "label": "现在可以开工了吗？",
      "title": "现在可以开工了吗？",
      "kicker": "第 1 章 · 1.4 · 练习与确认",
      "lead": "四要素都写了，但按钮行为还是“待定”——这时不开工。关键未知项会改变实现，格式完整不等于可以执行；确认关键决定后，核对任务版本、范围和计划，再由人确认具体版本。",
      "html": "<div class=\"p-claim\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">候选状态</span><ul class=\"p-checks\" style=\"margin-top:10px\"><li>四要素已写</li><li class=\"is-no\">按钮行为仍为“待定”</li></ul></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:30px\">暂不开工</span><p style=\"margin-top:12px\">关键决定确认后再开工</p></div></div><div class=\"p-q\" data-reveal=\"2\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">说出你批准的范围，以及一个必须停止的条件。</p></div>",
      "steps": [
        "先判断",
        "再解释",
        "记录交接"
      ],
      "script": [
        "看这个候选状态：四个要素都写了，但按钮行为还是“待定”。你会接受，还是继续澄清？先给出结论和依据。",
        "暂不开工。关键的未知项会改变实现，不能因为格式完整就开始。完成关键决定之后，核对任务版本、范围和计划，再由人确认，而且确认要指向具体的版本。",
        "请说出你批准的范围，以及一个必须停止的条件。任务已经明确的，记录批准；还没明确的，记录待确认。最后收一下这一节。"
      ],
      "segment": "练习与确认",
      "seconds": 100,
      "source": "index.html#p25",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先判断\n\n2. 再解释\n\n3. 记录交接"
        },
        {
          "title": "追问与预期判断",
          "text": "现在可以开工了吗？；实际任务已明确时记录批准；尚未明确就记录待确认，不能把两条分支都讲成已发生。"
        },
        {
          "title": "演示分支",
          "text": "不满足条件时只读待确认分支，不同时读成已经批准。确认记录必须对应具体版本，而非笼统的“都同意”。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M10]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n让学员先给接受或继续澄清的结论，并说明依据。\n\n关键未知会改变实现，不因 Prompt 格式完整就开工。确认必须指向具体版本。\n\n实际任务已明确时记录批准；尚未明确就记录待确认，不能把两条分支都讲成已发生。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p25-recap",
      "label": "四个问题，换来一个可检查的任务",
      "title": "四个问题，换来一个可检查的任务",
      "kicker": "第 1 章 · 1.4 · 练习与确认",
      "lead": "互查四项：目标可观察、上下文有来源、范围有边界、标准能检查。交付 PROMPT_V1.md 和人工决定，未决项要留在记录里。这一节没有提前实现，下一节拿着已确认的任务生成首页 v0。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start;--big:1\"><div data-reveal=\"0\"><h4>互查四项</h4><div class=\"p-words\"><div class=\"p-box\" data-role=\"ink\"><p>目标可观察</p></div><div class=\"p-box\" data-role=\"ctx\"><p>上下文有来源</p></div><div class=\"p-box\" data-role=\"gate\"><p>范围有边界</p></div><div class=\"p-box\" data-role=\"ok\"><p>标准能检查</p></div></div></div><div data-reveal=\"1\"><h4>交付</h4><div class=\"p-box\" data-role=\"tool\"><h3 style=\"font-size:22px\">PROMPT_V1.md</h3><p>+ 人工决定</p></div><ul class=\"p-warns\" style=\"margin-top:12px\"><li>未决项不能悄悄消失</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h4>下一节</h4><div class=\"p-box\" data-role=\"us\"><h3>1.5 完成首页</h3></div></div></div>",
      "steps": [
        "留出互查",
        "核对交付",
        "收束"
      ],
      "script": [
        "用一分钟对照完整稿互查四项：目标能不能观察，上下文有没有来源，范围有没有边界，标准能不能检查。",
        "交付物是 PROMPT_V1.md 和人工决定。还没决定的项，要明明白白留在记录里，不能悄悄消失。",
        "这一节我们没有提前实现。下一节，拿着已确认的任务和 CLI 基线，开始生成首页 v0。"
      ],
      "segment": "练习与确认",
      "seconds": 160,
      "source": "index.html#p25-recap",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 留出互查\n\n2. 核对交付\n\n3. 收束"
        },
        {
          "title": "追问与预期判断",
          "text": "四个问题，换来一个可检查的任务；这一节没有提前实现。下一节才进入生成、运行与验收。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n用一分钟对照完整稿互查。指出一条标准、一处边界和一个停止条件。\n\n解释为什么这份任务可以执行，或者明确卡在哪里。实践时间包含在本节二十分钟内。\n\n这一节没有提前实现。下一节才进入生成、运行与验收。"
        }
      ],
      "notes": "<p>预算 160 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
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

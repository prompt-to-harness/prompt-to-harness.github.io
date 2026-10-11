window.lesson = {
  "title": "写清首页任务：从模糊需求到可执行 Prompt",
  "chapter": "第 1 章 · Prompt",
  "section": "01.04",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p20",
      "label": "“做一个好看的主页”还缺什么？",
      "title": "“做一个好看的主页”<span class=\"p20-title-tail\">还缺什么？</span>",
      "kicker": "第 1 章 · 1.4 · 找出缺口",
      "lead": "1.3 权限边界 → 1.4 可执行 Prompt → 1.5 首页 v0",
      "html": "<style>body[data-mode='slides'] #p20 h2{top:82px}body[data-mode='slides'] #p20 .p20-title-tail{display:block}body[data-mode='slides'] #p20 .lede{top:242px}body[data-mode='slides'] #p20 .step-status{top:282px}body[data-mode='slides'] #p20 .scene-content{top:322px;height:340px}.x-g{display:grid;grid-template-columns:1.1fr 1fr;gap:30px;align-items:start;margin-top:12px}.x-g-l{display:grid;gap:10px}.x-g-page{position:relative;transform:rotate(-1deg)}.x-g-page .p-page-body{display:grid;grid-template-columns:1fr auto;gap:8px 12px;padding:14px 18px 18px;background:linear-gradient(135deg,#2A1E5C,#7A2D7E);color:#fff}.x-g-page .hero{font:400 26px/1.2 var(--p-title)}.x-g-page .sub{grid-column:1;font-size:15px;font-weight:400;opacity:.85}.x-g-page .btn{grid-row:1;grid-column:2;align-self:start;font-size:15px;border:2px solid #fff;border-radius:6px;padding:2px 10px}.x-g-page .cards{grid-column:1/3;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.x-g-page .cards i{height:44px;border-radius:6px;background:rgba(255,255,255,.18);font:normal 400 14px/38px sans-serif;text-align:center}.x-g-pin{position:absolute;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font:400 20px/1 var(--p-title);color:#fff;background:var(--c);box-shadow:0 0 0 3px #fff,2px 3px 0 rgba(36,48,66,.25)}.x-g-guess{font:400 20px/1.2 var(--p-title);color:#5A51D1}</style><ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-done\"><b>1.3</b>工具与权限</li><li class=\"is-now\"><b>1.4</b>写清任务</li><li class=\"\"><b>1.5</b>完成首页</li><li class=\"\"><b>1.6</b>最小权限</li></ol><div class=\"x-g\"><div class=\"x-g-l\"><div data-reveal=\"0\" style=\"display:flex;gap:12px;align-items:center\"><span class=\"p-avatar\">我们</span><p class=\"p-bubble\" style=\"font-size:24px;padding:12px 18px;margin:0\">帮我做一个好看的个人主页</p></div><div class=\"p-replies\" style=\"gap:12px;--rf:21px;margin-top:4px\"><div class=\"p-reply is-missing\" data-key=\"ctx\" data-reveal=\"1\"><span class=\"p-chip\" data-key=\"ctx\">1 目标</span><span>给谁看？显示什么？</span></div><div class=\"p-reply is-missing\" data-key=\"limit\" data-reveal=\"2\"><span class=\"p-chip\" data-key=\"limit\">2 范围</span><span>改哪里？什么时候停？</span></div><div class=\"p-reply is-missing\" data-key=\"done\" data-reveal=\"3\"><span class=\"p-chip\" data-key=\"done\">3 标准</span><span>怎样算可以接受？</span></div></div></div><div class=\"x-g-l\"><span class=\"x-g-guess\" data-reveal=\"0\">AI 只能自己猜，于是……</span><div style=\"position:relative\" data-reveal=\"0\"><div class=\"x-g-page p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>localhost</span></div><div class=\"p-page-body\"><span class=\"hero\">Hi, I'm Alex</span><span class=\"btn\">登录 · 发布</span><span class=\"sub\">Full-stack · Blog · Shop</span><div class=\"cards\"><i>Project 1</i><i>Project 2</i><i>Project 3</i></div></div></div><span class=\"x-g-pin\" data-key=\"ctx\" data-reveal=\"1\" style=\"left:-14px;top:48px\">1</span><span class=\"x-g-pin\" data-key=\"limit\" data-reveal=\"2\" style=\"right:6px;top:-10px\">2</span><span class=\"x-g-pin\" data-key=\"done\" data-reveal=\"3\" style=\"left:46%;bottom:-16px\">3</span></div></div></div>",
      "steps": [
        "先判断",
        "目标",
        "范围",
        "标准"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步；指向左侧请求和右侧示意图，不发送这条模糊请求】\n\n上一节，我们已经讨论过工具能做什么，以及哪些操作需要授权。现在回到一个更直接的问题：我到底要请它做什么？\n\n比如左边这句话：“帮我做一个好看的个人主页。”听起来很自然，我们自己找人帮忙时，也可能这么说。可是，接到这句话的人，真的知道要做出什么吗？\n\n看右边这张示意图，名字写成了 Alex，下面放了三个项目，右上角还有登录和发布。这是课件画出来的例子，不是刚刚运行得到的结果。先想一想：这里哪一项，应该由主页的主人决定？",
        "【操作提示｜推进第 2 步，指向姓名、简介与项目内容】\n\n先看姓名和项目。这个主页是给同学看，还是作为自己的作品展示？首屏介绍谁，项目区放哪些内容？这些信息不一样，页面要突出什么也会跟着变。\n\n所以，我会先拿出项目说明，也就是后面要用到的 Brief。里面已经确定的内容，就作为依据；没有写的关键内容，再补充回答。尤其是个人经历和项目介绍，要由我们提供，不能把模型补出来的故事当成自己的经历。",
        "【操作提示｜推进第 3 步，指向示意图右上角的“登录 · 发布”】\n\n再看右上角。我们原本只是想展示一下自己，页面却多出了登录和发布。要把这些功能做完整，就会带出账号、数据保存等更多事情。\n\n这时候，你再说一句“简单一点”，它还是不知道该删到哪里。更直接的说法是：这次只做首屏和项目展示区，账号、后端和发布都不做。先把这一轮的边界写清楚，后面看计划和改动时，才有依据。",
        "【操作提示｜推进第 4 步，指向标准卡；随后转 p21】\n\n最后看“好看”这两个字。你脑子里可能有一个样子，但对方看不到。页面出来以后，如果我们只有“感觉还差点”，下一轮也很难改得准确。\n\n这一版可以先把几件事说实：显示哪些文字，按钮点下去到哪里，哪些文件可以变化，以及用什么动作检查。视觉偏好也可以继续补充，但眼前这些内容和行为，至少要有可核对的答案。\n\n刚才我们找到了目标、范围和标准上的缺口。要把缺口补进请求，还需要交代决定的来源和当前项目情况。接下来，用四个问题把它们整理起来。"
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
      ]
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
        "【操作提示｜停留课件 p21 第 1 步，借欢迎语任务解释 Goal；不重做 1.1 的修改】\n\n先看 Goal，也就是目标：这次要做成什么。我们拿第一节做过的欢迎语修改来对照。那次目标很具体，把页面上的欢迎语换成“你好，欢迎来到 Vibe Coding 课堂！”\n\n这句话给出了修改后的样子。执行的人知道要替换成什么，检查的人也知道拿什么来比。换到个人主页上，我们同样要说清楚首屏和项目区要显示的内容。",
        "【操作提示｜推进第 2 步，指向 Context 卡】\n\n第二个问题是 Context，上下文：为了完成眼前这个任务，需要知道什么？欢迎语任务里，至少要知道目标 HTML 在哪里、原来写了什么，以及工作区有没有已有改动。\n\n这些信息帮助它找到正确的位置，也帮助我们区分这次任务和之前的修改。到了首页任务，上下文还会包括项目说明、可公开的占位内容，以及我们刚刚作出的决定。\n\n只提供当前任务需要的材料就好。如果相关答案就在文件里，可以告诉它去读哪份文件，不必把整个项目的所有资料都粘进来。",
        "【操作提示｜推进第 3 步，指向 Constraints 卡】\n\n第三个问题是 Constraints，约束：这一轮允许做到哪里，遇到什么情况要停下来？欢迎语任务只改指定文字，结构和样式都保留，不装依赖、不发布。\n\n假如它发现目标文件不存在，或者觉得必须改另一个文件才能完成，就先说明情况，等我们判断。这里写的“停止条件”，就是把这种分叉提前讲清楚。\n\n这些是我们向 Agent 表达的任务要求。实际能访问哪些目录、执行哪些操作，还要结合上一节讲的权限设置来控制。",
        "【操作提示｜推进第 4 步，指向 Done when；随后转 p22】\n\n第四个问题是 Done when，完成标准：看到什么结果，我们才接受这次交付？欢迎语任务里，我们刷新页面，逐字核对文字，再看完整差异，确认只有指定的地方发生了变化。\n\n所以，完成标准后面应该能接上一句：“我会这样检查。”如果只能接上“我觉得应该不错”，就还需要写具体一些。\n\n这四个标题可以帮我们检查遗漏。小任务用几句话就能说清，不用为了填模板写成长篇。现在把这套检查方法用到首页上，先让它读材料，把真正缺的决定找出来。"
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
      "kicker": "第 1 章 · 1.4 · 澄清与作答",
      "lead": "澄清这一轮只规划、不实现。观察三件事：Agent 是否读了 PROJECT_BRIEF.md、占位内容和仓库状态；材料已写明的是否直接引用，只追问缺失且影响方案的问题；有没有越界开始写代码。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>读取</b><small>Brief · 占位内容 · 仓库状态</small></span></li><li data-reveal=\"1\"><span><b>提出问题</b><small>写明的引用，缺的才问</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>保持边界</b><small>只规划，不实现</small></span></li></ol></div>",
      "steps": [
        "交代观察点",
        "区分已知未知",
        "制止越界"
      ],
      "script": [
        "【操作提示｜课件 p22 第 1 步 → VS Code 打开个人主页练习副本的 PROJECT_BRIEF.md 和配套占位内容。切 Terminal 的普通 shell，在同一副本运行 pwd、git status --short，记录现有状态；已有改动先辨明来源，不清空。随后进入已核验的 Codex CLI，发送本页完整澄清请求一次】\n\n先看左边这份请求。它这一轮要交付的是问题和小计划，页面实现还没有开始。\n\n我先切到编辑器，打开项目说明和占位内容。我们要知道自己提供了什么，等会儿才能判断它的问题是不是必要。再到终端确认所在目录和仓库状态，保证它读的是这一份练习副本。\n\n现在把本页的完整请求发给 Codex。观察时先抓住三件事：它读了什么，问了什么，有没有开始修改文件。第一件，看实际工具记录有没有读取项目说明和相关内容。若文件缺失，就先补材料，不能把“准备读取”当成已经读过。",
        "【操作提示｜回课件推进第 2 步，再切 Terminal 查看实际返回；用 VS Code 对照其引用的材料。只讲真实出现的问题，不要求数量或措辞与课件一致】\n\n接下来，看它提出的问题。我们可以拿着项目说明一条条对照：这一条，文件里是不是已经回答了？如果已经有答案，就指出对应位置，让它直接采用。\n\n如果材料确实没写，再判断这个答案会不会改变实现。比如，“查看项目”是跳到本页下面，还是打开一个外部网站？这会影响按钮行为，需要先决定。\n\n至于当前用不到的账号功能，就不必继续讨论了。我们这轮只做首屏和项目区，提问也围绕这个范围。它实际可能问两条，也可能问更多条，我们按内容判断，不凑固定数量。",
        "【操作提示｜回课件推进第 3 步；切 Terminal 检查是否只读。若出现写入，使用当前 CLI 已核验的停止入口，核对 git status --short、git diff 及新增文件，不自动回退。随后回课件 p22-answers】\n\n还有一件事要留意：请求已经写了“本轮不实现页面”。如果它开始创建组件、安装依赖，就先把流程停下来，说明：“当前只授权规划，请停止写入，说明已经修改的文件。”再核对实际变化。\n\n如果它停在问题清单，接下来就由我们补上答案；如果材料已经足够，也可以直接核对它整理出来的需求和计划。关键决定仍缺着时，就保留待确认状态。\n\n下一页用四组问答展示怎样作决定。那是课件准备的合成案例，我们用它说明回答的写法，再把方法用到眼前的真实问题上。"
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
        "【操作提示｜停留课件 p22-answers 第 1 步，只展示问题；此页案例与 CLI 实际输出分开讲】\n\n先看左边这四个问题：姓名和简介是什么，项目展示什么，按钮去哪，哪些文件可以改。它们分别影响内容、交互和实现范围。\n\n你可以先想一想，自己的项目说明里，哪几项已经有答案？有答案的就引用，没有答案的由自己决定。下面我用“示例同学”这组公开占位内容，演示怎样回答得足够具体。",
        "【操作提示｜推进第 2 步，展示姓名和简介；如采用该案例，在 VS Code 的 PROMPT_V1.md 草稿中记录，保存由讲师手动完成】\n\n姓名，我就回答：“示例同学。”简介写：“正在学习 AI 协作开发。”两段文字直接给到最终要显示的版本。\n\n这样，后面检查页面时，我们就能拿这两句逐字对照。如果换成你自己的主页，就填你愿意公开的内容。暂时还没整理好真实介绍，也可以明确使用占位文字，先把这个决定记下来。",
        "【操作提示｜回课件推进第 3 步，指向一个合成项目；在草稿中记录名称和描述】\n\n项目区这次只放一个合成项目，名字是“学习笔记”，描述是“记录课程练习”。数量和内容都明确了。\n\n这里很容易漏掉数量。你只说“展示我的项目”，对方可能排出三张卡片，再补几段看起来很像真的介绍。我们现在把“一项”和这段内容说清，后面就不用再猜哪些文字是我们提供的。",
        "【操作提示｜回课件推进第 4 步，指向按钮与项目卡的不同要求；此处没有已生成首页，不打开本地应用冒充演示】\n\n再看按钮。“查看项目”这四个字，告诉了我们按钮叫什么，但还没告诉我们点击以后发生什么。\n\n本例的决定是，点它以后跳到本页的项目区。项目卡本身只负责展示内容，不跳转。这两句话要一起留下来。否则按钮可能做对了，卡片却被加上了一个我们没提供的链接。\n\n现在还没有实现页面，我们先记录期望行为。下一节生成以后，再真的点击检查。",
        "【操作提示｜推进第 5 步；切 Terminal，仅将与实际缺项对应的已确认答案发送到原澄清会话，并要求整理小计划、预计文件清单和验收建议，仍不修改文件。回 VS Code 留存决定及来源，再回课件 p23】\n\n最后是文件范围。欢迎语任务只改一个 HTML；正式首页要用 React、TypeScript 和 Vite，就会涉及源码、包清单和配置文件。我们让它先列出预计文件，再逐项确认。\n\n我把已决定的答案回复到刚才那轮对话里，同时说明：“请据此整理需求、小计划、预计文件清单和验收建议，本轮仍不修改文件。”\n\n返回以后，核对它有没有遗漏刚才的按钮行为，有没有多加功能。如果还有会影响实现的问题，就继续保留待确认项。我们自己把答案和来源保存到草稿里，接下来再整理成完整任务。"
      ],
      "segment": "澄清与作答",
      "seconds": 140,
      "source": "index.html#p22-answers",
      "teaching": [
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
          "text": "这是合成案例。先判断四个问题是否已经在自己的 Brief 中有答案。\n\n教学示例的人工作答是：“示例同学”；“正在学习 AI 协作开发。” 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：一个合成项目：“学习笔记：记录课程练习”。 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：“查看项目”跳到本页项目区；项目卡不跳转。 实际项目必须记录自己的决定及来源。\n\n教学示例的人工作答是：允许创建 React + TypeScript + Vite 必需文件；清单须确认。 实际项目必须记录自己的决定及来源。"
        }
      ]
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
        "【操作提示｜停留课件 p23 第 1 步，指向左侧 Goal；本页完整实现请求先讲解，不发送执行】\n\n现在看左边这份完整任务。它和前面的澄清请求有一个变化：前面是请它找出未知项，这里是在整理下一节准备执行的首页任务。\n\n先读目标。首屏显示“示例同学”和指定简介，项目区显示“学习笔记：记录课程练习”。这些都是从上一页的答案整理过来的。\n\n你可以顺着检查一遍：每项内容能不能找到依据？如果忽然出现了“资深开发者”或者三个新项目，就要退回去核对，不能在整理文字时悄悄增加经历。",
        "【操作提示｜推进第 2 步，指向 Context；对照已保存的人工决定】\n\n接着看上下文。这里沿用刚才的合成问答，把“查看项目”跳到本页项目区、项目卡不跳转，也写了进去。\n\n在自己的版本里，可以注明依据的是哪份项目说明，以及哪些内容是这次由自己补充决定的。这样再打开这份任务时，就能知道要求从哪里来。\n\n同一个要求放在目标还是上下文里，有时都说得通。我们主要检查的是信息有没有丢，前后有没有冲突，以及执行的人能不能找到它。",
        "【操作提示｜推进第 3 步 → Chrome 新开“完整 Prompt 对照”标签页：复制当前课件地址，将末尾 index.html 后的查询与锚点改为 ?mode=scroll#p23。保留原演示标签页；在新页阅读并复制完整请求到 VS Code 的 PROMPT_V1.md 草稿，已有文件则编辑原稿，不覆盖已有决定。随后回原课件标签页 p23-scope】\n\n这份请求比较长，我另开一个阅读页，把全文展开，方便从头到尾对照。原来的演示页保留着，等会儿还要回去。\n\n我们把完整请求复制到草稿里，逐项换成自己的材料。复制以后先读一遍，尤其检查里面有没有还没决定的内容。没有答案的地方，明确标成待确认。\n\n这一节先把任务整理好，等下一节核对计划后再批准执行。下面两页，我们重点看文件范围和完成标准，这两部分最容易写得笼统。"
      ],
      "segment": "拼成任务",
      "seconds": 90,
      "source": "index.html#p23",
      "prompt": "Goal：生成首页首屏与项目区；首屏显示“示例同学”、\n“正在学习 AI 协作开发。”；项目区显示“学习笔记：记录课程练习”。\nContext：沿用上页合成问答；“查看项目”跳到本页项目区，项目卡不跳转。\nConstraints：React + TypeScript + Vite；示例写入范围为根目录 index.html、\npackage.json、package-lock.json、vite.config.ts、tsconfig*.json、src/。\n依赖版本按已核验工具链；不改 setup-check/，不加账号、后端或发布。\n先复述并列计划，等人确认；缺材料、版本未核验或需越界时先停。\nDone when：文字逐项一致，按钮跳转正确；npm run build 成功；\n无明显控制台错误，Diff 无越界，正式产物无环境页与私人资料。",
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
      "kicker": "第 1 章 · 1.4 · 拼成任务",
      "lead": "首页生成已不是单文件任务：允许创建根目录 index.html、包清单与锁文件、Vite 和 TypeScript 配置以及 src 目录，都要经人确认。setup-check 不改，不加账号、后端或发布，缺材料或越界就先停。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.2fr 1fr;gap:28px\"><ul class=\"p-tree\" data-reveal=\"0\" style=\"font-size:22px\"><li class=\"is-open\"><span class=\"p-path\">练习仓库根目录/</span><ul><li class=\"is-allow\"><span class=\"p-path\">index.html</span></li><li class=\"is-allow\"><span class=\"p-path\">package.json · package-lock.json</span></li><li class=\"is-allow\"><span class=\"p-path\">vite.config.ts · tsconfig*.json</span></li><li class=\"is-allow\"><span class=\"p-path\">src/</span></li><li class=\"is-block\" data-reveal=\"1\"><span class=\"p-path\">setup-check/</span><span class=\"p-note\">不改</span></li></ul></li></ul><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><h3>停止条件</h3><ul class=\"p-warns\"><li>不加账号、后端、发布</li><li>缺材料或越界先停</li></ul></div></div>",
      "steps": [
        "核对文件清单",
        "标出停止条件"
      ],
      "script": [
        "【操作提示｜课件 p23-scope 第 1 步 → VS Code 查看练习副本文件树和 PROMPT_V1.md 中的预计文件清单，只核对，不创建应用文件】\n\n我们先看文件清单。根目录的 index.html 是正式应用的入口；package.json 记录项目脚本和依赖，package-lock.json 记录锁定的依赖信息；Vite 和 TypeScript 有各自的配置，源码放在 src 目录里。\n\n你现在不需要记住每份配置怎么写。先知道为什么清单里会有它们，再对照 Agent 给出的计划，看这次预计创建或修改的文件是不是都在范围里。\n\n如果练习副本里已经有同名文件，还要说明是在现有内容上修改，不能当成一片空白直接覆盖。",
        "【操作提示｜回课件推进第 2 步，指向 setup-check/ 与停止条件；在草稿标出尚未核验项，不现场安装依赖】\n\n再看不动的部分：setup-check 是前面做环境检查用的，这轮保留；账号、后端和发布也不在范围里。\n\n依赖版本要沿用已核验的工具链。如果版本还没核验，或者计划必须改到清单以外，就先停下来，把原因说清楚。我们再决定是否调整范围。\n\n这份清单给出了检查边界，后面看到实际改动时，就能逐项对照。接下来还要写清楚：首页做出来以后，怎样判断它符合要求。"
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
          "text": "首页生成不再是单文件任务。必须把包清单、锁文件、配置与源码纳入人工确认范围。\n\n版本按已核验工具链；未核验或还缺关键决定，就先停，不让 AI 自行补假设。"
        }
      ]
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
        "【操作提示｜停留课件 p23-done 第 1 步，讲解下一节的浏览器检查方案；本节不启动开发服务器、不新开 localhost 页面】\n\n先看内容和行为。文字要符合要求，我们就拿确认稿逐项对照姓名、简介、项目名称和描述。按钮要跳到项目区，就实际点一次，看页面到了哪里。项目卡不跳转，也要检查有没有被加上链接。\n\n这些操作等下一节页面生成以后，在 Chrome 里做。现在把它们写下来，是让我们在开工前就知道怎样验收，而不是看到成品后临时改标准。",
        "【操作提示｜推进第 2 步，指向 npm run build 与控制台；这里只说明后续 Terminal、Chrome 检查位置，不执行构建】\n\n再看构建。下一节会在项目目录运行 npm run build，查看实际输出，确认构建流程有没有成功完成。浏览器里的控制台，则用来观察页面运行时有没有明显错误。\n\n这两处看的对象不同。终端构建通过以后，我们仍然要打开页面核对文字和按钮。把这几个动作分别写出来，检查时就不容易漏掉。\n\n如果某项还没执行，就记成未检查；如果报错，就保留实际报错，先处理问题。",
        "【操作提示｜推进第 3 步，指向 Diff 和产物检查；回看草稿标准，不展示伪造的通过记录】\n\n最后检查改动范围和产物。下一节要看完整差异，也要留意新增文件。Git 状态里出现的未跟踪文件，普通 diff 不会展示它们的内容，需要另行打开核对。\n\n同时检查正式应用和构建产物里，有没有混进环境检查页、密钥或私人资料。我们做的是将来可以公开的个人主页，哪些内容会被带出去，要由自己看清楚。\n\n到这里，每条标准都能接上一个动作：看文字、点按钮、运行构建、查差异和产物。下面用一个不完整的任务，练习把标准补清楚。"
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
      "label": "把“项目区正确”改到能验收",
      "title": "把“项目区正确”改到能验收",
      "kicker": "第 1 章 · 1.4 · 练习与确认",
      "lead": "练习：补全一个只写了“做一个好看的主页”和“项目区正确”的 Prompt。依据自己的 Brief 补齐四要素，未知项单列，保存为 PROMPT_V1.md；再请同伴为一条完成标准说出检查动作，说不出就继续改。",
      "html": "<div class=\"p-prompt\" style=\"grid-template-columns:1.1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:12px 18px\"><h3 style=\"margin-bottom:6px\">待补全 Prompt</h3><div class=\"p-replies\" style=\"gap:8px;--rf:19px\"><div class=\"p-reply is-missing\" data-key=\"goal\" style=\"--cl:#E8EAEE;--ct:#243042\"><span class=\"p-chip\" data-key=\"goal\">Goal</span><span>做一个好看的主页</span><span class=\"p-ask\">做给谁、显示什么？</span></div><div class=\"p-reply is-missing\" data-key=\"ctx\"><span class=\"p-chip\" data-key=\"ctx\">Context</span><span>〔材料〕</span></div><div class=\"p-reply is-missing\" data-key=\"limit\"><span class=\"p-chip\" data-key=\"limit\">Constraints</span><span>〔边界〕</span></div><div class=\"p-reply is-missing\" data-key=\"done\"><span class=\"p-chip\" data-key=\"done\">Done when</span><span>项目区正确</span><span class=\"p-ask\">怎样算正确？</span></div></div></div><div style=\"display:grid;gap:14px;align-content:start\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>你的交付</h3><p>补齐四要素 · 未知项单列</p><p style=\"margin-top:6px\"><code class=\"p-mono\">PROMPT_V1.md</code></p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ok\">参考</span><p>逐项显示已确认内容 · 链接按确认行为</p></div></div></div>",
      "steps": [
        "独立补写",
        "互查标准",
        "揭晓解析"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，不提前揭晓；录播留短暂停顿，提示学员自行暂停。讲师准备 VS Code 草稿，不要求现场互动】\n\n看左边这个没写完的请求：目标是“做一个好看的主页”，上下文和约束空着，完成标准只有“项目区正确”。\n\n请先暂停视频，用你自己的项目说明补一下。尤其想一想，“项目区正确”要检查什么？有几项内容，每项显示什么，点击以后怎么表现？\n\n两分钟可以先写一个草稿。材料没有答案的地方，单独列出问题，不急着填满。写好以后再继续看下面的对照。",
        "【操作提示｜推进第 2 步 → VS Code 展示 PROMPT_V1.md 草稿；挑一条 Done when 写出对应检查动作，手动保存；随后回课件】\n\n写完以后，我们换一个角度，假设自己现在要验收这份页面。先挑一条标准，试着说出具体动作：我打开哪个页面，对照哪段文字，点击哪里，应该看到什么？\n\n如果读到“项目区正确”就停住了，说明标准还缺内容。把它补到另一个人只拿着这份文档，也知道该怎么检查。\n\n独立学习时，你自己隔一会儿再读一遍就可以；如果有人帮你看，也可以请他复述检查动作。最终保存为 PROMPT_V1.md，待确认的问题和已经作出的决定都留下。",
        "【操作提示｜推进第 3 步，展示参考解析；必要时切回草稿修改，再回课件 p25】\n\n参考写法可以是：项目区只展示已经确认的一项学习笔记，名称和描述与确认稿一致；“查看项目”跳到本页项目区，项目卡不跳转。\n\n这一版同时给出了数量、内容和行为。要是你自己的项目有两项，就按自己的决定写两项；要是链接去哪还没定，就把它作为问题保留。\n\n参考答案帮助我们找到缺口，具体内容仍然来自自己的材料。现在四个部分都有了，是不是就可以开工？我们再看一个候选状态。"
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
          "text": "先暂停两分钟起草，不先看参考解析。不要照抄教师的内容决定。\n\n选一条 Done when，请同伴说出实际检查动作；说不出来就继续改写。\n\n数量、内容、行为不明确时先问，不得填猜测。草稿可以保存，不能标成已批准。"
        }
      ]
    },
    {
      "id": "p25",
      "label": "现在可以开工了吗？",
      "title": "现在可以开工了吗？",
      "kicker": "第 1 章 · 1.4 · 练习与确认",
      "lead": "四要素都写了，但按钮行为还是“待定”——这时不开工。关键未知项会改变实现，格式完整不等于可以执行；确认关键决定后，核对任务版本、范围和计划，再由人确认具体版本。",
      "html": "<div class=\"p-claim\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">候选状态</span><ul class=\"p-checks\" style=\"margin-top:10px\"><li>四要素已写</li><li class=\"is-no\">按钮行为仍为“待定”</li></ul></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:30px\">暂不开工</span><p style=\"margin-top:12px\">关键决定确认后再开工</p></div></div><div class=\"p-q\" data-reveal=\"2\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">说出你批准的范围，以及一个必须停止的条件</p></div>",
      "steps": [
        "先判断",
        "再解释",
        "记录交接"
      ],
      "script": [
        "【操作提示｜停留课件 p25 第 1 步，展示“按钮行为待定”的候选状态；停顿后继续讲解】\n\n这份任务的四个标题都填上了，目标有了，范围也有了，但按钮行为还写着“待定”。\n\n如果现在让它实现，它就得自己选择：跳到项目区，打开新页面，还是先做一个点了没反应的按钮。三个结果差别很大。\n\n所以你会怎么处理这份任务？可以先暂停一下，给出自己的判断，再看下一步。",
        "【操作提示｜推进第 2 步，说明暂不开工；如真实任务仍缺决定，在 VS Code 标“待确认”，不要在 CLI 发送批准】\n\n我的判断是，先把按钮行为确认下来，再开工。这个未知项会直接改变实现，四个标题写全了，也不能替代这个决定。\n\n决定补齐以后，再核对完整任务、文件范围和小计划。它是不是准备按我们确认的内容做？有没有额外加入功能？这些都对上，才有明确的执行依据。\n\n如果计划更新了，我们也要看更新后的版本。不能前面同意的是一版，后面执行的却多出了别的事情。",
        "【操作提示｜推进第 3 步 → VS Code 在 PROMPT_V1.md 记录当前版本、人工决定和状态；已明确者记“需求已确认，执行确认留到 1.5”，未明确者列待确认项。本节不向 CLI 发送实现授权。回课件 p25-recap】\n\n交接时，把状态也写清楚。需求已经明确，就记录哪些内容已确认，下一节再核对执行计划并授权；还缺决定，就明确写出缺哪一项。\n\n比如，我们可以说：“这次只做首屏和项目区，文件范围按当前清单；需要改到清单以外时，先停下来说明。”这句话把允许的动作和停止条件都指了出来。\n\n保存之后，下一次继续工作就有一份能对照的依据，不必只靠回忆刚才聊过什么。"
      ],
      "segment": "练习与确认",
      "seconds": 100,
      "source": "index.html#p25",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "现在可以开工了吗？\n\n实际任务已明确时记录批准；尚未明确就记录待确认，不能把两条分支都讲成已发生。"
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
          "text": "请学员暂停视频，先写下接受或继续澄清的结论，并说明依据。\n\n关键未知会改变实现，不因 Prompt 格式完整就开工。确认必须指向具体版本。\n\n实际任务已明确时记录批准；尚未明确就记录待确认，不能把两条分支都讲成已发生。"
        }
      ]
    },
    {
      "id": "p25-recap",
      "label": "四个问题，换来一个可检查的任务",
      "title": "四个问题，换来一个可检查的任务",
      "kicker": "第 1 章 · 1.4 · 练习与确认",
      "lead": "互查四项：目标可观察、上下文有来源、范围有边界、标准能检查。交付 PROMPT_V1.md 和人工决定，未决项要留在记录里。这一节没有提前实现，下一节拿着已确认的任务生成首页 v0。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start;--big:1\"><div data-reveal=\"0\"><h3>互查四项</h3><div class=\"p-words\"><div class=\"p-box\" data-role=\"ink\"><p>目标可观察</p></div><div class=\"p-box\" data-role=\"ctx\"><p>上下文有来源</p></div><div class=\"p-box\" data-role=\"gate\"><p>范围有边界</p></div><div class=\"p-box\" data-role=\"ok\"><p>标准能检查</p></div></div></div><div data-reveal=\"1\"><h3>交付</h3><div class=\"p-box\" data-role=\"tool\"><h3 style=\"font-size:22px\">PROMPT_V1.md</h3><p>+ 人工决定</p></div><ul class=\"p-warns\" style=\"margin-top:12px\"><li>未决项不能悄悄消失</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>1.5 完成首页</h3></div></div></div>",
      "steps": [
        "留出互查",
        "核对交付",
        "收束"
      ],
      "script": [
        "【操作提示｜停留课件 p25-recap 第 1 步；可切回 Chrome 已有“完整 Prompt 对照”标签页，不重复新开。对照后返回原演示标签页】\n\n最后，用一分钟把自己的任务从头到尾读一遍。先看目标：能不能说出首页上要出现什么？再看上下文：这些要求来自哪份材料、哪次决定？\n\n接着看范围：哪些文件可以动，哪些功能这次不做，遇到什么情况要停？最后看标准：每一条后面能不能接上一个检查动作？\n\n你可以暂停视频，拿自己的草稿对照。发现缺项，就回到那一行补充。",
        "【操作提示｜推进第 2 步 → VS Code 确认 PROMPT_V1.md 已保存，人工决定、待确认项与状态可找到。Terminal 普通 shell 运行 git status --short、git diff，核对本节变化；新增文档直接打开检查，不应出现未经授权的应用实现。回课件】\n\n这一节要留下来的，是首页任务 Prompt 和人工决定。我们自己整理文档，会留下文档改动；Agent 的这轮任务仍然是只读澄清。最后检查一下，别把提前生成的应用文件混进来。\n\n还有未决定的事项，就继续列在文档里。把它记下来，下一次才知道从哪里接着做。对于已经确认的内容，也把依据和状态留下，避免后面又回到模糊的一句话。",
        "【操作提示｜推进第 3 步，停留课件收束；保留文档与会话，下一节再生成、运行和验收首页】\n\n回看开头那句“帮我做一个好看的个人主页”，现在我们已经把它展开成了可以执行、也可以检查的任务。内容由谁提供，按钮怎么表现，哪些文件可以变化，最后怎样检查，都有了落点。\n\n以后写请求时，你也可以从一个很朴素的问题开始：如果我要亲自验收，眼前这句话够不够用？不够的部分，就补材料、补决定、补检查动作。\n\n下一节，我们拿着确认好的任务和 CLI 基线，开始生成首页第一版。到时候再一起看实际页面、构建输出和文件差异，判断这一轮交付能不能接受。"
      ],
      "segment": "练习与确认",
      "seconds": 160,
      "source": "index.html#p25-recap",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "四个问题，换来一个可检查的任务；这一节没有提前实现。下一节才进入生成、运行与验收。"
        },
        {
          "title": "讲师提示",
          "text": "用一分钟对照完整稿互查。指出一条标准、一处边界和一个停止条件。\n\n解释为什么这份任务可以执行，或者明确卡在哪里。实践时间包含在本节二十分钟内。\n\n这一节没有提前实现。下一节才进入生成、运行与验收。"
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

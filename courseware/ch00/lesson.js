window.lesson = {
  "title": "开场访谈：我们为什么这样学 Vibe Coding",
  "chapter": "第 0 章 · 开场访谈",
  "section": "00",
  "summary": "两位讲师、八个问题、三个递进式真实项目。",
  "scenes": [
    {
      "id": "p01",
      "label": "这节课怎么聊",
      "title": "我们为什么这样学<br>Vibe Coding",
      "lead": "两位讲师，八个问题。先聊真实经历，再看这门课怎么学。",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>第 0 章</b>开场访谈</li><li><b>第 1–3 章</b>个人主页与小游戏</li><li><b>第 4–6 章</b>JSON Crack · JSON Diff</li><li><b>第 7–9 章</b>dependency-cruiser</li></ol><div class=\"p-chain\" style=\"margin-top:26px\"><span>从 Prompt 到 Harness</span><i>·</i><span>三个递进式真实项目</span></div>",
      "script": [
        "【操作提示｜演示模式打开课件 p01（index.html?mode=slides#p01），本页只有一步，整页已显示，不切工具窗口；演示设置里的人像辅助框只作构图参考，不开摄像头】\n\n欢迎来到课程。在动手之前，我们先用八个问题，聊聊各自怎样开始使用 Vibe Coding、踩过什么坑，以及为什么把这些经历组织成现在这门课。",
        "【操作提示｜停留 p01，指向页面上方第 0–9 章路线条；讲完按方向键推进到 p02】\n\n页面上方这条路线就是整门课的顺序：今天是第 0 章，之后做三个项目。每个项目都要做出能运行的结果，并说清自己是怎么检查的。"
      ],
      "teaching": [
        {
          "title": "备课边界",
          "text": "讲师 A 为缪东旭，讲师 B 为李阳。履历依据讲师提供的信息；具体案例仍须由本人补充并核对。"
        }
      ],
      "notes": "",
      "seconds": 30,
      "segment": "认识讲师",
      "steps": [
        "访谈要点"
      ],
      "layout": "lesson-cover"
    },
    {
      "id": "p02",
      "label": "认识两位讲师",
      "title": "认识两位讲师",
      "lead": "现在做什么工作，又是从什么时候开始与 AI 协作编程的？",
      "html": "<div class=\"instructor-layout\"><div class=\"instructor-profiles\"><article class=\"p-box\" data-role=\"ink\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3 style=\"font-size:32px\">缪东旭</h3><span class=\"p-tag\" data-role=\"us\">讲师 A</span></div><p class=\"p-big\" style=\"font-size:22px;margin-bottom:10px\">自动驾驶与机器人研发</p><p class=\"p-sub\" style=\"margin-bottom:2px\">开始接触</p><p style=\"font-size:20px\"><span class=\"profile-full\">2024 年尝试基于 AI 模型做代码审查；2025 年 6 月开始逐渐深度使用 Coding Agent 完成编程任务</span><span class=\"profile-short\">2024 年 · AI 代码审查<br>2025 年 6 月 · 深度使用 Coding Agent</span></p><p class=\"p-sub profile-full\" style=\"margin:8px 0 2px\">常用场景</p><p class=\"profile-full\" style=\"font-size:20px\">机器人仿真场景搭建、VLA 等操作模型后训练、机器人系统研发</p></article><article class=\"p-box\" data-role=\"ink\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3 style=\"font-size:32px\">李阳</h3><span class=\"p-tag\" data-role=\"us\">讲师 B</span></div><p class=\"p-big\" style=\"font-size:22px;margin-bottom:10px\">异构计算与模型部署</p><p class=\"p-sub\" style=\"margin-bottom:2px\">开始接触</p><p style=\"font-size:20px\"><span class=\"profile-full\">2023 年接触开源模型本地部署；2024 年搭建本地对话机器人、代码审查机器人；2025 年初接触 Claude Code、Codex 等 Vibe Coding Agent</span><span class=\"profile-short\">2023 年 · 开源模型本地部署<br>2024 年 · 对话与代码审查机器人<br>2025 年初 · Claude Code / Codex</span></p><p class=\"p-sub profile-full\" style=\"margin:8px 0 2px\">常用场景</p><p class=\"profile-full\" style=\"font-size:20px\">边缘计算设备的模型部署与加速、算子库搭建等 AI 基础设施工作</p></article></div><figure class=\"instructor-photo\"><img src=\"assets/instructors.jpg\" width=\"900\" height=\"1000\" alt=\"两位讲师的工作合照\"><figcaption>两位讲师的工作合照</figcaption></figure></div>",
      "script": [
        "【操作提示｜课件 p02，整页显示两人履历与合照；讲师 A 先讲，不切窗口。演示画面只显示时间要点，完整履历在阅读模式，不必念全】\n\n我是缪东旭，目前主要从事自动驾驶与机器人研发。2024 年我开始尝试基于 AI 模型做代码审查；2025 年 6 月开始逐渐深度使用 Coding Agent 完成编程任务。常用场景包括机器人仿真场景搭建、VLA 等操作模型后训练、机器人系统研发。",
        "【操作提示｜仍停 p02，交给讲师 B 自我介绍；只讲本人提供的履历，不指认合照中人物的左右位置】\n\n我是李阳，目前主要从事异构计算与模型部署。2023 年我开始接触开源模型本地部署；2024 年搭建本地对话机器人、代码审查机器人；2025 年初接触 Claude Code、Codex 等 Vibe Coding Agent。常用场景包括边缘计算设备的模型部署与加速、算子库搭建等 AI 基础设施工作。",
        "【操作提示｜仍停 p02，由串场讲师说这句过渡；说完推进到 p03（访谈 01）】\n\n下面进入八个问题，先从一个具体的瞬间说起。"
      ],
      "teaching": [
        {
          "title": "履历与合照",
          "text": "姓名、方向、时间与场景依据讲师提供的信息填写。合照使用 assets/instructors.jpg 裁剪版，保留两位主体；不标注未经确认的人物左右对应关系。"
        }
      ],
      "notes": "",
      "seconds": 150,
      "segment": "认识讲师",
      "steps": [
        "认识两位讲师"
      ],
      "layout": "profile-scene"
    },
    {
      "id": "p03",
      "label": "01 · 值得认真用的时刻",
      "title": "哪一次经历，让你觉得<br>Vibe Coding 值得认真用起来？",
      "lead": "从一个真实任务说起。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3\"><div class=\"p-node\" data-role=\"ctx\"><span class=\"p-num\">当时</span><h3>想解决什么问题</h3></div><div class=\"p-node\" data-role=\"agent\"><span class=\"p-num\">过程</span><h3>怎样与 AI 协作</h3></div><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">结果</span><h3>实际做到了什么</h3></div></div><div class=\"p-bar is-light\" style=\"margin-top:28px\">那个让你改变看法的<b>具体瞬间</b></div>",
      "script": [
        "【操作提示｜课件 p03（访谈 01，奇数题 A 先答），整页一次显示；串场讲师提问，不切窗口】\n\n哪一次经历，让你觉得 Vibe Coding 值得认真用起来？请从一个具体任务说起。",
        "【操作提示｜仍停 p03，讲师 A 作答，可依次指向“当时—过程—结果”三格。〔〕内为待填，录前须换成本人真实案例，括号内容不念；没有可公开截图就不放图】\n\n讲师 A 回答提纲：〔真实任务待填〕，原本卡在〔问题待填〕，尝试用〔协作方式待填〕，实际结果是〔结果与证据待填〕。重点讲首次认可它的瞬间。",
        "【操作提示｜仍停 p03，交给讲师 B 补充另一案例；同样替换〔〕待填项，不重复 A 的任务】\n\n讲师 B 回答提纲：选择自己的另一项真实任务，说明 AI 帮到了哪一步，以及自己做了哪些判断和检查。〔个人案例待填〕",
        "【操作提示｜可选：时间宽裕时由串场讲师追问，答者用一两句说明当时的检查方式；超时可剪掉这一段】\n\n这个结果，你当时是怎么确认的？",
        "【操作提示｜仍停 p03 说转场；说完推进到 p04】\n\n一次惊喜之后，如果持续使用，它到底改变了我们日常工作的哪一部分？"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "A 先答，B 补充自己的案例。"
        },
        {
          "title": "案例与画面",
          "text": "待两位讲师提供可公开截图或结果记录。没有素材时保留当前任务线索，不用生成画面冒充真实项目。"
        }
      ],
      "notes": "",
      "seconds": 160,
      "segment": "真实经历",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p04",
      "label": "02 · 工作发生的变化",
      "title": "用了一段时间后，它给你的<br>工作带来最大的变化是什么？",
      "lead": "",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"ink\"><span class=\"p-tag\" data-role=\"ctx\">以前如何完成任务</span><h3>以前怎样完成</h3><p class=\"p-big\" style=\"font-weight:500\">哪些步骤需要自己从头推进？</p></div><div class=\"p-join\"><span>用了一段时间后</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\"><span class=\"p-tag\" data-role=\"agent\">现在如何完成任务</span><h3>现在怎样协作</h3><p class=\"p-big\" style=\"font-weight:500\">哪些步骤交给 AI，自己的精力移到了哪里？</p></div></div><div class=\"p-bar\" style=\"margin-top:22px\">基于具体工作过程，有哪些<b>收益与代价</b></div>",
      "script": [
        "【操作提示｜课件 p04（访谈 02，偶数题 B 先答），整页一次显示；串场讲师提问，不切窗口】\n\n用了一段时间后，它给你的工作带来最大的变化是什么？",
        "【操作提示｜仍停 p04，讲师 B 先答，可对照左右“以前 / 现在”两栏。〔〕待填项录前替换为本人经历，括号不念；没有基线记录不说倍数】\n\n讲师 B 先答：从〔真实工作待填〕说明使用前后的变化。可以围绕尝试想法、调试或读陌生代码，选择自己最有感受的一项；说明仍需投入的理解、检查和返工。",
        "【操作提示｜仍停 p04，交给讲师 A 补充与 B 不同的变化；替换〔〕待填项】\n\n讲师 A 回答：选择与 B 不同的变化，补充自己的实际感受。〔个人经历待填〕。如果感受并不一致，说明任务条件有什么不同。",
        "【操作提示｜可选追问；只有手里有可比记录时才报数字，否则只描述感受，可剪掉】\n\n省下的时间，后来花在了什么地方？",
        "【操作提示｜仍停 p04 说转场；说完推进到 p05】\n\n这些变化里也有代价。接下来聊一次不那么顺利的经历。"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "B 先答，A 补充。"
        },
        {
          "title": "事实边界",
          "text": "区分个人感受与实测效率。没有基线和记录，不说“效率提升数倍”。"
        }
      ],
      "notes": "",
      "seconds": 160,
      "segment": "真实经历",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p05",
      "label": "03 · 踩坑与调整",
      "title": "你踩过什么坑，<br>后来是怎么调整做法的？",
      "lead": "两位讲师各讲一次失败或返工：怎样发现不对，后来多做了哪步检查。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3\"><div class=\"p-node\" data-role=\"gate\"><span class=\"p-num\">起点</span><h3>当时相信了什么</h3></div><div class=\"p-node\" data-role=\"ctx\"><span class=\"p-num\">证据</span><h3>怎样发现不对</h3></div><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">调整</span><h3>现在多做哪步检查</h3></div></div><div class=\"p-bar is-light\" style=\"margin-top:28px\">从一次具体失误，找到一条<b>可复用的做法</b></div>",
      "script": [
        "【操作提示｜课件 p05（访谈 03，A 先答），整页一次显示；串场讲师提问，不切窗口】\n\n你踩过什么坑，后来是怎么调整做法的？",
        "【操作提示｜仍停 p05，讲师 A 作答，可依次指向“起点—证据—调整”。〔〕待填项录前替换为真实失败案例，括号不念；不现场制造故障，无证据时说明是个人回忆】\n\n讲师 A 回答提纲：〔真实失败待填〕。当时以为〔判断待填〕，后来从〔报错、测试、页面或 diff 等真实证据待填〕发现问题，之后增加了〔具体检查待填〕。",
        "【操作提示｜仍停 p05，交给讲师 B 讲另一类失败；替换〔个人案例待填〕】\n\n讲师 B 回答自己的另一类失败，说明何时停止、缩小任务或回退。〔个人案例待填〕",
        "【操作提示｜可选追问，可剪掉；答者一句话说明更早发现问题的检查点】\n\n如果重来一次，你会在哪一步更早发现问题？",
        "【操作提示｜仍停 p05 说转场；说完推进到 p06】\n\n有过这些经验后，我们会怎样安排自己和 AI 的分工？"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "A 先答，B 补充。"
        },
        {
          "title": "录制前待填",
          "text": "每人准备一个真实失败或返工案例，核对发生条件与修正结果。找不到证据时明确是个人回忆，不伪装现场故障。"
        }
      ],
      "notes": "",
      "seconds": 160,
      "segment": "真实经历",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p06",
      "label": "04 · 人与 AI 的分工",
      "title": "人与 AI 如何合作？",
      "lead": "",
      "html": "<div class=\"p-flow\" style=\"--n:5;column-gap:34px\"><div class=\"p-node\" data-role=\"us\"><span class=\"p-num\">01</span><h3>澄清需求</h3><p>确认未知项</p></div><div class=\"p-node\" data-role=\"agent\"><span class=\"p-num\">02</span><h3>讨论计划</h3><p>拆成小任务</p></div><div class=\"p-node\" data-role=\"tool\"><span class=\"p-num\">03</span><h3>执行修改</h3><p>核对范围与权限</p></div><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">04</span><h3>检查结果</h3><p>运行、测试、看改动</p></div><div class=\"p-node\" data-role=\"us\"><span class=\"p-num\">05</span><h3>评审与修正</h3><p>接受、继续或回退</p></div><div class=\"p-back\" data-role=\"agent\" style=\"grid-column:3/6;--span:3;--gap:34px\"><span class=\"p-back-label\">继续或回退</span></div></div><div class=\"p-bar\" style=\"margin-top:40px\">目标、关键取舍和发布决定，<b>由人负责</b></div>",
      "script": [
        "【操作提示｜课件 p06（访谈 04，B 先答），整页显示五个环节与“继续或回退”回路；串场讲师提问，不切窗口、不现场执行命令】\n\n人与 AI 如何合作？两位都请指出一个必须自己决定的节点。",
        "【操作提示｜仍停 p06，讲师 B 沿 01–05 五个环节讲自己的流程；替换〔实际分工待填〕，括号不念】\n\n讲师 B 回答提纲：结合前面案例，描述自己的真实流程。〔实际分工待填〕。可沿页面的五个环节说明，由谁补充上下文、谁确认计划、怎样核对结果。",
        "【操作提示｜仍停 p06，交给讲师 A 补充一个自己决定的取舍；替换〔真实决定待填〕。不展开权限、Prompt 写法等第 1 章内容】\n\n讲师 A 回答提纲：补充一个自己不会直接交给 AI 决定的取舍，以及依据什么作出判断。〔真实决定待填〕。",
        "【操作提示｜仍停 p06，指向底部“由人负责”和回退回路，由串场讲师说明课程口径】\n\n这张图怎么读：五个环节不是走一遍就结束。检查结果不对，就回到前面重新讨论，或者回退改动。不管走到哪一步，目标、关键取舍和发布决定，都由人来做。",
        "【操作提示｜仍停 p06 说转场；说完推进到 p07】\n\n这套协作过程，会在课程的三个项目中逐步练起来。"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "B 先答，A 补充。"
        },
        {
          "title": "范围",
          "text": "只建立协作框架。术语机制、权限与 Prompt 写法留到第 1 章；不现场执行命令。"
        }
      ],
      "notes": "",
      "seconds": 180,
      "segment": "协作分工",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p07",
      "label": "05 · 三个项目与路线",
      "title": "这门课会带大家做哪些项目，<br>为什么这样安排？",
      "lead": "三个独立仓库，逐步增加协作能力。",
      "html": "<div class=\"p-grid project-cards\" style=\"--n:3\"><figure class=\"p-box project-card\" data-role=\"us\"><span class=\"p-here\">第一个项目</span><img src=\"assets/project-homepage.jpg\" width=\"640\" height=\"400\" alt=\"课程实测做出的示例个人主页，右下角是躲避小游戏\"><h3>个人主页与小游戏</h3><p class=\"project-meta\">第 1–3 章 · <b>Prompt · Vibe Coding</b></p><figcaption>课程实测成品：个人主页 + 小游戏</figcaption></figure><figure class=\"p-box project-card\" data-role=\"agent\"><span class=\"p-here\">第二个项目</span><img src=\"assets/project-jsoncrack.jpg\" width=\"640\" height=\"400\" alt=\"JSON Crack 编辑器的现有界面：左边是 JSON，右边是对应的节点图\"><h3>JSON Crack · JSON Diff</h3><p class=\"project-meta\">第 4–6 章 · <b>SDD</b></p><figcaption>JSON Crack 现在的样子；本课为它加上 JSON 对比功能</figcaption></figure><figure class=\"p-box project-card\" data-role=\"agent\"><span class=\"p-here\">第三个项目</span><img src=\"assets/project-dependency-cruiser.jpg\" width=\"640\" height=\"400\" alt=\"dependency-cruiser 生成的模块依赖图\"><h3>dependency-cruiser</h3><p class=\"project-meta\">第 7–9 章 · <b>Harness</b></p><figcaption>它生成的依赖图；本课判断这张图的快照是否过期</figcaption></figure></div>",
      "script": [
        "【操作提示｜课件 p07（访谈 05，A 先答），整页显示三个项目阶梯；串场讲师提问，不切窗口】\n\n这门课会带大家做哪些项目，为什么这样安排？",
        "【操作提示｜仍停 p07，讲师 A 指向第一个项目（个人主页与小游戏）；不打开项目网站或仓库】\n\n第 1–3 章从个人主页起步，发布到 GitHub Pages，再做记忆翻牌和“60 秒躲避与收集”小游戏，体验反馈、调试与插件实践。",
        "【操作提示｜仍停 p07，讲师 A 依次指向 JSON Crack 与 dependency-cruiser 两格及其画面说明；不现场打开这两个仓库】\n\n第 4–6 章在 JSON Crack 中做 JSON Diff，比较两份 JSON 并显示差异。第 7–9 章在 dependency-cruiser 中做一个核心功能：判断之前生成的依赖图快照，和现在的代码还对不对得上、能不能继续用。",
        "【操作提示｜仍停 p07，交给讲师 B 讲递进理由，可指向各项目下方的 Prompt · Vibe Coding / SDD / Harness 标签】\n\n为什么这样排：项目从小到大。先做一个自己看得见的小产品，再到已有的代码库里按明确的规则加功能，最后为一个更大的仓库搭一套能反复使用的协作环境。对应四层能力：Prompt 是把任务写清楚；Vibe Coding 是看着实际结果一轮轮改；SDD，也就是规格驱动开发，先把规格和验收标准写进仓库，再按它开发；Harness 是把上下文、工具、检查和需要人做的决定组织起来。后面的项目会继续用到前面学的能力。",
        "【操作提示｜仍停 p07，讲师 B 说范围边界；不承诺页面以外的功能】\n\n范围上，三个项目是三个独立的仓库，后一个项目不接着用前一个的代码或会话。第三个项目只做刚才说的快照判断这一个核心功能，不开发完整的新 CLI 或可视化平台。",
        "【操作提示｜仍停 p07 说转场；说完推进到 p08】\n\n看完路线，我们再具体回答，课程结束时大家能带走什么。"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "A 讲三个项目，B 讲递进与范围。两人可补充各自最看重的一个阶段。"
        },
        {
          "title": "课程依据",
          "text": "深蓝平台交付版与共同内部大纲的三个项目、四层能力与最低门禁；本页不展示尚未完成的项目截图。"
        }
      ],
      "notes": "",
      "seconds": 240,
      "segment": "项目与成果",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p08",
      "label": "06 · 成果与独立能力",
      "title": "学完以后，大家能带走什么，<br>又能独立完成什么？",
      "lead": "三份项目成果，加上一套能即插即用的方法论",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" style=\"padding:14px 18px\"><h3 style=\"font-size:25px\">个人主页成果包</h3><p style=\"font-size:21px\">写清任务 · 依据反馈修正 · 发布</p></div><div class=\"p-box\" data-role=\"agent\" style=\"padding:14px 18px\"><h3 style=\"font-size:25px\">JSON Diff 成果包</h3><p style=\"font-size:21px\">澄清规则 · 拆分任务 · 测试与 Review</p></div><div class=\"p-box\" data-role=\"agent\" style=\"padding:14px 18px\"><h3 style=\"font-size:25px\">Harness 评测成果包</h3><p style=\"font-size:21px\">新会话接手 · 可比证据评估</p></div></div><div class=\"p-bar\" style=\"margin-top:22px\">说得清怎么改、怎么确认边界、<b>怎么验证</b></div>",
      "script": [
        "【操作提示｜课件 p08（访谈 06，B 先答），整页显示三个成果包；串场讲师提问，不切窗口】\n\n学完以后，大家能带走什么，又能独立完成什么？",
        "【操作提示｜仍停 p08，讲师 B 依次指向三个成果包；不展示尚未完成的成品截图】\n\n先说成果。个人主页成果包，是能访问的个人主页和小游戏，以及交付时的检查记录；JSON Diff 成果包，是规格、功能实现、测试和变更记录；Harness 评测成果包，是快照判断功能、为项目搭的 Harness，以及加 Harness 前后、用同一个任务各做一次的对比记录。三份成果分别验收。",
        "【操作提示｜仍停 p08，交给讲师 A 从能力角度回答；可指向底部一句“说得清改了什么、怎么验证、哪里还没确认”】\n\n再说能力。收到模糊需求时，能指出需要人决定的问题；能把目标拆成可验证的小任务；能读懂关键修改、运行相关检查，并判断接受、修正还是回退。",
        "【操作提示｜仍停 p08，讲师 A 继续说明结课挑战；不作就业或效率承诺】\n\n课程结束后还有一次迁移挑战：从课程固定的项目版本开一个新会话，接一个正课里没做过的小需求，完成澄清和拆分，再实现并验证其中一个任务。评价看做法和检查结果，不要求和讲师的聊天记录一样。",
        "【操作提示｜仍停 p08 说转场；说完推进到 p09】\n\n这些目标对初学者有什么要求，遇到看不懂的地方又该怎么办？"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "B 先答成果，A 补充可独立完成的任务。"
        },
        {
          "title": "承诺边界",
          "text": "作品与能力都是课程目标，需实际完成验收。避免就业保证、效率倍数或看完视频就能独立开发任意项目的承诺。"
        }
      ],
      "notes": "",
      "seconds": 180,
      "segment": "项目与成果",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p09",
      "label": "07 · 基础与卡点",
      "title": "什么基础、什么电脑适合学？<br>看不懂代码或报错怎么办？",
      "lead": "适合有基础编程与 Git 能力、希望积累项目经验的同学。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:20px\"><div class=\"p-set is-solid\" data-role=\"ok\"><h3>开始前 · 已有基础</h3><div class=\"p-items\"><div class=\"p-item\">✓ 能读简单函数、条件和循环</div><div class=\"p-item\">✓ 能使用 Git 的基本操作</div><div class=\"p-item\">不要求 React 与 TypeScript 基础</div></div></div><div class=\"p-set is-solid\" data-role=\"ctx\"><h3>电脑与环境</h3><div class=\"p-items\"><div class=\"p-item\">Windows 10/11、macOS 或 Linux</div><div class=\"p-item\">不需要 GPU：模型在云端运行</div><div class=\"p-item\">GitHub 账号 · 稳定网络</div></div></div><div class=\"p-set is-solid\" data-role=\"tool\"><h3>遇到困难时 · 把问题缩小</h3><div class=\"p-items\"><div class=\"p-item\"><b>1</b>&ensp;保留报错与复现步骤</div><div class=\"p-item\"><b>2</b>&ensp;沿入口读一小段相关代码</div><div class=\"p-item\"><b>3</b>&ensp;修正后，重新运行并检查</div></div></div></div><p class=\"source-note\" style=\"margin-top:14px\">课程以 Codex CLI 为主要实操入口。<a href=\"lessons/02-preparation/index.html\">课前准备参见 0.2 小节</a></p>",
      "script": [
        "【操作提示｜课件 p09（访谈 07，A 先答），整页显示三栏；串场讲师提问，不切窗口】\n\n什么基础的同学适合学？需要什么样的电脑？遇到看不懂的代码或报错怎么办？",
        "【操作提示｜仍停 p09，讲师 A 指向左栏“开始前 · 已有基础”；不把本课说成零基础课】\n\n适合在校大学生，以及工作 1–2 年、具备基础编程能力但项目经验有限的初级开发者。需要能阅读简单函数、条件、循环和错误信息，会用基本 Git；不要求 React 与 TypeScript 基础，也不预设前端工程化经验；看不懂的代码，课程会示范怎样缩小范围去读。",
        "【操作提示｜仍停 p09，讲师 A 先补〔建议待填〕（录前替换，括号不念），再指向中栏“电脑与环境”。不点开页底“0.2 小节”链接，不现场演示安装】\n\n〔建议待填〕。电脑方面：Windows 10/11、macOS 或 Linux 都可以；不需要 GPU，模型在云端运行，本机只装 Codex CLI、Git、Node.js 这些工具；另外要有 GitHub 账号和稳定的网络。具体怎么装、怎么接入，看 0.2 课前准备。",
        "【操作提示｜仍停 p09，交给讲师 B，沿右栏 1–3 步讲卡点处理】\n\n先保留完整报错与复现条件，把任务缩小到相关文件或函数。可以让 AI 解释，但要回到源码、运行结果和测试核对。无法解释或验证的改动，先暂停、拆小或回退。",
        "【操作提示｜仍停 p09，讲师 B 补〔建议待填〕（录前替换，括号不念），再引出最后一问；说完推进到 p10】\n\n〔建议待填〕。最后一个问题：跟课时怎样练，才会把这些方法变成自己的能力？"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "A 先答基础与电脑环境，B 补充卡点处理。"
        },
        {
          "title": "范围",
          "text": "不把本课介绍为零编程基础课，也不现场展开安装排障。系统要求与基础要求以平台交付版大纲为准；产品版本和账号差异遵循 0.2 课前准备。"
        }
      ],
      "notes": "",
      "seconds": 150,
      "segment": "怎样学习",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p10",
      "label": "08 · 怎样真正学会",
      "title": "如果想真正学会，而不只是看完，<br>你最建议怎样跟这门课？",
      "lead": "两位讲师，各给一条能马上执行的学习建议。",
      "html": "<div class=\"p-grid\" style=\"--n:2\"><div class=\"p-box\" data-role=\"us\" style=\"display:grid;grid-template-columns:70px 1fr;column-gap:14px;align-items:center\"><span style=\"font:400 64px/1 var(--p-title);color:#243042;grid-row:span 2\">1</span><h3 style=\"margin:0\">暂停后，自己做一次</h3><p style=\"font-size:21px\">先独立完成一个小任务，再对照课程检查</p></div><div class=\"p-box\" data-role=\"ok\" style=\"display:grid;grid-template-columns:70px 1fr;column-gap:14px;align-items:center\"><span style=\"font:400 64px/1 var(--p-title);color:#11652F;grid-row:span 2\">2</span><h3 style=\"margin:0\">留下判断和验证记录</h3><p style=\"font-size:21px\">写明问题、修改、结果，以及仍未确认的地方</p></div></div><div class=\"p-q\" style=\"margin-top:22px\"><p class=\"p-say\" style=\"padding-right:0;font-size:24px\">换一个小需求，我还能独立完成，并说明验证结果吗？</p></div>",
      "script": [
        "【操作提示｜课件 p10（访谈 08，偶数题 B 先答），整页显示两条建议；串场讲师提问，不切窗口】\n\n如果想真正学会，而不只是看完视频，你最建议怎样跟这门课？",
        "【操作提示｜仍停 p10，讲师 B 指向建议 1“暂停后，自己做一次”；这是课程建议，以本人经历补理由，不要说成本人原话，替换〔个人补充待填〕，括号不念】\n\n页面上第一条建议是：暂停后，自己做一次。〔个人补充待填：结合自己的学习经历说理由〕",
        "【操作提示｜仍停 p10，交给讲师 A 指向建议 2“留下判断和验证记录”；同样替换〔个人补充待填〕】\n\n第二条建议是：留下判断和验证记录，比如保存报错、diff、截图或测试结果。〔个人补充待填〕",
        "【操作提示｜仍停 p10，指向底部问题句；念完邀请后留约 30 秒静默给学员写目标（剪辑可保留或加暂停提示）】\n\n现在写一句话——我希望用 AI 独立完成什么，我会用什么结果证明完成。这句话留给自己，无需统一提交。",
        "【操作提示｜仍停 p10 说收束；说完推进到 p11】\n\n写好了，我们看第 1 章的第一个任务。"
      ],
      "teaching": [
        {
          "title": "回答顺序",
          "text": "B 先答，A 补充；留 30 秒给学员写目标。"
        },
        {
          "title": "轻量自检",
          "text": "学员能说出三个项目、一个个人目标和下一页的首次任务即可。本章不新增代码交付、名词考试或计分作业。"
        }
      ],
      "notes": "",
      "seconds": 150,
      "segment": "怎样学习",
      "steps": [
        "访谈要点"
      ]
    },
    {
      "id": "p11",
      "label": "进入课前准备",
      "title": "先准备，再开始第一次协作",
      "lead": "先在 0.2 准备环境，再进入 1.1 完成欢迎语修改与检查",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3;margin-top:24px;--node-h:118px\"><div class=\"p-node\" data-role=\"ctx\"><span class=\"p-num\">准备</span><h3>核对环境与目录</h3></div><div class=\"p-node\" data-role=\"tool\"><span class=\"p-num\">执行</span><h3>修改指定欢迎语</h3></div><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">验证</span><h3>查看页面与 diff</h3></div></div><p class=\"next-chapter p-links\" style=\"margin-top:22px\"><a href=\"lessons/02-preparation/index.html?mode=slides\">进入 0.2 课前准备 →</a></p>",
      "script": [
        "【操作提示｜课件 p11，整页显示“准备—执行—验证”三格；串场讲师说结束串词，不切窗口、不提前演示安装或修改】\n\n我们已经认识了两位讲师，也看到了三个项目的路线。接下来先从一个很小的任务开始：核对环境和目录，修改指定的欢迎语，再打开页面看效果，并查看 diff，也就是这次改动前后的差异。",
        "【操作提示｜仍停 p11，提问后稍作停顿，不揭示答案】\n\n开始前，请在心里确认：课程有哪三个项目？自己希望练成什么能力？接下来要验证什么结果？",
        "【操作提示｜仍停 p11，指向页底“进入 0.2 课前准备 →”，但不点开；本节录制到此结束，0.2 单独录制】\n\n下一节是 0.2 课前准备：安装工具、接入模型、取得练习项目。环境已经就绪的同学可以按清单自检，再进入 1.1 完成第一次修改。"
      ],
      "teaching": [
        {
          "title": "节奏",
          "text": "随后切入第一章。不在访谈中提前重复安装演示。"
        }
      ],
      "notes": "",
      "seconds": 60,
      "segment": "怎样学习",
      "steps": [
        "访谈要点"
      ]
    }
  ],
  "navNumbers": false,
  "segments": [
    {
      "label": "认识讲师",
      "seconds": 180
    },
    {
      "label": "真实经历",
      "seconds": 480
    },
    {
      "label": "协作分工",
      "seconds": 180
    },
    {
      "label": "项目与成果",
      "seconds": 420
    },
    {
      "label": "怎样学习",
      "seconds": 360
    }
  ]
};

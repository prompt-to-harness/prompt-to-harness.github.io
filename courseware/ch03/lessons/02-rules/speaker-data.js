window.screenPlan = {
  "scope": "3.2 第一部分：主动调用、语言触发与描述调整",
  "frames": [
    {
      "id": "f01",
      "scene": "p07",
      "step": 0,
      "start": 0,
      "end": 1,
      "title": "下一次任务怎样用上检查方法",
      "surface": "PPT · p07 第 1 步",
      "visible": "上一节风格指导初稿 → 本节学习调用、阅读与组织 → 学完内容组织后回看；下方以游戏检查为具体案例。",
      "explain": "接住 3.1 初稿，说明本节用检查案例学习方法，学完内容组织后审阅风格指导；3.3 才展开紫色案例的实际开发。",
      "action": "停留问题画面，再推进一次。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "从开发经历引入",
      "materials": [
        "p07"
      ]
    },
    {
      "id": "f02",
      "scene": "p07",
      "step": 1,
      "start": 0,
      "end": 1,
      "title": "经验成为可选用的指导",
      "surface": "PPT · p07 第 2 步",
      "visible": "原有检查问题保留，第二步出现 Skill 和可复用方法，标注供 AI 下次选用。",
      "explain": "把可复用的检查方法组织成 Skill，下一次同类任务可以选用；本次游戏的计步和重开规则仍由请求给定。这里先认识用途，再找一份负责试玩的现成指导。",
      "action": "讲完后转到 p07a。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "从开发经历引入",
      "materials": [
        "p07"
      ]
    },
    {
      "id": "f03",
      "scene": "p07a",
      "step": 0,
      "start": 0,
      "end": 2,
      "title": "整套插件与一份试玩指导",
      "surface": "PPT · p07a 第 1 步",
      "visible": "文件夹标明 Game Studio Plugin，内有 game-studio、game-playtest、phaser-2d-game，圈出 game-playtest。沿“展开这份”连到同一份 SKILL.md。任务条、文件头区和虚线“下面是正文”可见；name 与 description 尚未展开。",
      "explain": "先用 Game Studio 的外边界说明整套 Plugin 的范围，再看边界内并列的规划、试玩、实现等多份 Skill：它们各自提供一类任务的指导。当前任务是整理翻牌试玩清单，所以突出其中的 game-playtest；从这一项连到它自己的 SKILL.md，展开后仍保留整套与其他 Skill。学员应能直接指出“Game Studio 是这个包，game-playtest 是包里本次选用的一份”，而不是从目录缩进自行推断关系。",
      "action": "先指 Plugin 外边界，再看内部并列的多份 Skill，最后沿 game-playtest 的连线指到它自己的 SKILL.md。推进后只增加文件头，整套与选中项保持可见。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "认识 Plugin 与 Skill",
      "materials": [
        "p07a"
      ]
    },
    {
      "id": "f04",
      "scene": "p07a",
      "step": 1,
      "start": 0,
      "end": 3,
      "title": "在真实文件头里认识名称与描述",
      "surface": "PPT p07a 第 2 步 → GitHub 原文件",
      "visible": "保留插件、任务条和文件分区。文件头区增加 name: game-playtest，以及两行 description 节选。正文区仍只标位置。从页底入口另开真实文件读完整描述。",
      "explain": "在已经定位的 game-playtest 上展开同一份 SKILL.md 的文件头，再到原文件看完整描述。name 确认这份指导的身份；description 中的浏览器游戏试玩、前端质量检查等范围，是判断试玩清单任务是否适合它的依据。文件头属于刚才选中的 Skill，其他正文和引用留到后续讲，不能把它误认成整个 Plugin 的描述。",
      "action": "在 p07a 第 2 步打开原文，依次指认 name 与 description，解释清单任务为何适合它。保留原文标签，回 PPT 进入 p07install；不提前讲自然语言选用的完整机制。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "读名称与描述",
      "materials": [
        "p07a",
        "skill"
      ]
    },
    {
      "id": "f05",
      "scene": "p07a",
      "step": 1,
      "start": 4,
      "end": 5,
      "title": "确认用途后进入安装",
      "surface": "PPT p07a 第 2 步 → p07install",
      "visible": "p07a 文件头与选中项仍在，讲完转入安装页。",
      "explain": "已通过描述确认用途，接下来取得文件并让当前项目发现它；主动选择在安装后进行。",
      "action": "从原文返回 p07a，讲完安装承接，进入 p07install；复制请求留到安装完成后的 p07b。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "读名称与描述",
      "materials": [
        "p07b",
        "explicit"
      ]
    },
    {
      "id": "f-install-0",
      "scene": "p07install",
      "step": 0,
      "start": 0,
      "end": 1,
      "title": "来源与完整文件",
      "surface": "PPT 第 3 页 p07install · 第 1 步",
      "visible": "来源、固定版本与配套文件；安装器只作补充入口。",
      "explain": "先确认取得的是准备使用的那份指导，并保留它引用的资料。文件内容完整，后面实际读取才有依据；本段不展开目录操作。",
      "action": "指认来源和配套文件后展开安装范围。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "安装 Skill",
      "materials": [
        "p07install"
      ]
    },
    {
      "id": "f-install-1",
      "scene": "p07install",
      "step": 1,
      "start": 0,
      "end": 1,
      "title": "项目与个人安装范围",
      "surface": "PPT 第 3 页 p07install · 第 2 步",
      "visible": "项目 .agents/skills/ 与个人 ~/.agents/skills/；本次项目范围突出。",
      "explain": "本次项目范围准备试玩和界面两份主要指导，以及它们引用的 web-game-foundations、react-three-fiber-game，共四份 Skill 和 13 份 Reference。后两份作为配套，不展开架构与 3D 开发。完整 Plugin 留在 3.2.4；个人范围的原解释保持。",
      "action": "讲清本次安装位置，再展开确认发现；暂不操作安装器。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "安装 Skill",
      "materials": [
        "p07install"
      ]
    },
    {
      "id": "f-install-2",
      "scene": "p07install",
      "step": 2,
      "start": 0,
      "end": 7,
      "title": "实际安装并确认发现",
      "surface": "PPT 第 3 步 → 安装操作页 → 终端目录与 Skill 列表",
      "visible": "四份 Skill、13 份 Reference 与准备结果；在列表指认前两份和两份配套指导，随后按原安排调用 game-playtest。",
      "explain": "沿取得文件、在项目中发现、核对来源依次判断。下载成功只确认文件取得，列表中出现且来源正确才确认当前会话能找到本次版本；后面再实际调用。",
      "action": "操作页执行带 --scope 3.2.1 的四份版准备命令，再按原顺序核对取得文件、项目发现与来源。交互发现和调用需用新版环境预跑；旧九份版实测不能替代。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "安装 Skill",
      "materials": [
        "p07install",
        "install"
      ]
    },
    {
      "id": "f06",
      "scene": "p07b",
      "step": 0,
      "start": 0,
      "end": 1,
      "title": "在终端选择 Skill",
      "surface": "Codex CLI · 现场",
      "visible": "/skills 菜单；List skills；Game Playtest 列表项；选中后输入框中的 $game-playtest。",
      "explain": "沿实际菜单选择 Game Playtest，选中后用输入框里的 $game-playtest 确认引用已经加入请求。选择的对象是刚才那份 Skill；此时尚未交代本次游戏规则，也没有产生检查结果。由这个可见引用接到下一段输入具体任务。",
      "action": "依次输入 /skills、回车、进入 List skills、选中 Game Playtest。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "主动调用",
      "materials": [
        "p07b"
      ]
    },
    {
      "id": "f07",
      "scene": "p07b",
      "step": 0,
      "start": 2,
      "end": 3,
      "title": "把当前规则交给它",
      "surface": "Codex CLI · 现场，发送前",
      "visible": "$game-playtest 后面的请求，包含翻牌规则、重点检查项和本轮范围。",
      "explain": "把已有的 Skill 引用与后面粘贴的项目规则分开辨认：Skill 提供试玩方法，请求补充每翻两张算一步、重开后哪些状态归零，以及只给清单的范围。学员应能说明为什么选完 Skill 还要给任务信息，并能用这些明确规则检查稍后的返回。",
      "action": "在 Skill 引用后粘贴已复制的请求；停在发送前读清规则、范围，讲完再发送，不再切回 PPT 取文本。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "主动调用",
      "materials": [
        "p07b"
      ]
    },
    {
      "id": "f08",
      "scene": "p07b",
      "step": 0,
      "start": 4,
      "end": 5,
      "title": "等待时看历史请求",
      "surface": "Inspect · 主动调用请求",
      "visible": "同轮带 Skill 引用的请求与返回重开条目：所有牌面关闭（含已保留配对牌），配对计数归 0。",
      "explain": "先确认历史请求中的显式引用与重开规则，再看同轮返回。",
      "action": "定位原始请求；下一条记录为 Skill 正文，再下一条为回复。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "主动调用",
      "materials": [
        "explicitRequest"
      ]
    },
    {
      "id": "f08-result",
      "scene": "p07b",
      "step": 0,
      "start": 8,
      "end": 9,
      "title": "用重开条目核对回答",
      "surface": "Inspect · 主动调用回复",
      "visible": "对照请求与所有牌面关闭（含配对牌），解释清单如何展开规则；尚未实际试玩。",
      "explain": "对照请求与所有牌面关闭（含配对牌），解释清单如何展开规则；尚未实际试玩。",
      "action": "按对应口播提示定位本段，讲完进入下一画面。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "主动调用",
      "materials": [
        "explicitResult"
      ]
    },
    {
      "id": "f09",
      "scene": "p07b",
      "step": 0,
      "start": 6,
      "end": 7,
      "title": "回来检查现场返回",
      "surface": "Codex CLI · 现场回看",
      "visible": "本次实际选中的 Skill 与返回清单。",
      "explain": "现场返回要做两项不同核对：引用是不是 game-playtest，清单预期是不是符合请求。具体对照“两张一步”和“重开后牌面关闭、配对进度及步数归零”；引用正确不能代替内容正确。结果按现场说明，不能借预存回放替现场宣布成功。",
      "action": "按现场事实核对引用、计步与重开；未返回就剪去等待，取得实际结果再继续。回到保留的 p07b，推进到 p07c 第 1 步。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "主动调用",
      "materials": [
        "p07b"
      ]
    },
    {
      "id": "f10",
      "scene": "p07c",
      "step": 0,
      "start": 0,
      "end": 1,
      "title": "不点名，直接提出任务",
      "surface": "PPT · p07c 第 1 步",
      "visible": "左侧只有本次请求：为浏览器翻牌游戏、整理人工试玩清单、重点检查计步和重开，并标明未指定 Skill。描述与读取事实尚未出现。",
      "explain": "与刚才包含 $game-playtest 的请求相比，这次保留试玩清单任务，去掉对 Skill 的指定。学员先识别这项差别，随后才有理由追问：用户没有点名时，模型从哪里获得可选指导的信息？本段进入的是已有实录。",
      "action": "本段用预跑实录，不再发一轮现场任务。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "p07c"
      ]
    },
    {
      "id": "f11",
      "scene": "p07c",
      "step": 1,
      "start": 0,
      "end": 2,
      "title": "把需求和可用描述对在一起",
      "surface": "PPT · p07c 第 2 步",
      "visible": "左侧请求与右侧 description 同屏。浏览器游戏对应 browser-game，试玩清单对应 playtests and frontend QA。计步和重开标为“本次规则，不是选用依据”。说明对应的是任务与情境，不是关键词相等。随后切真实回放。",
      "explain": "把请求中的“浏览器翻牌游戏”与描述中的 browser-game、把“人工试玩清单”与 playtests 的任务含义对应起来。这些可见内容说明为何这份指导与请求相关；不是按字面关键词相等就必然触发。描述给出选用依据，是否实际读取还要看下一段同次运行记录。",
      "action": "在第 2 步指认任务与描述的对应；暂不推进读取行，接着切到已有回放。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "p07c"
      ]
    },
    {
      "id": "f12",
      "scene": "p07c",
      "step": 2,
      "start": 0,
      "end": 1,
      "title": "按本次记录看输入",
      "surface": "自然语言回放 · 完整请求",
      "visible": "自然语言调用的完整请求，没有指定 Skill。",
      "explain": "先确认这轮没有点名，与刚才主动指定的请求区分；接下来核对会话可用说明。",
      "action": "停在完整请求，确认没有 Skill 名称，讲完再进入可用说明。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "request",
        "metadata"
      ]
    },
    {
      "id": "f12-metadata",
      "scene": "p07c",
      "step": 2,
      "start": 8,
      "end": 9,
      "title": "确认该轮可用说明",
      "surface": "自然语言回放 · 可用说明",
      "visible": "会话提供的 game-playtest 名称、描述与文件位置。",
      "explain": "该轮可用列表提供候选信息，是否读到正文还要看下一段实际读取。",
      "action": "定位 game-playtest 名称、描述与文件位置，讲完切实际读取。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "metadata"
      ]
    },
    {
      "id": "f13",
      "scene": "p07c",
      "step": 2,
      "start": 2,
      "end": 3,
      "title": "用工具返回确认实际读取",
      "surface": "Inspect · 原始读取事件和返回",
      "visible": "实际读取命令、退出状态与工具返回文件内容。",
      "explain": "从工具返回确认本次取得了 game-playtest 正文，区别于仅在可用说明里出现；回答是否符合规则留下一段核对。",
      "action": "停在实际读取命令与工具返回，讲完切同轮返回清单。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "read",
        "result"
      ]
    },
    {
      "id": "f13-result",
      "scene": "p07c",
      "step": 2,
      "start": 6,
      "end": 7,
      "title": "用两张一步核对清单",
      "surface": "自然语言回放 · A2/A3",
      "visible": "第一张 0、第二张 1，把两张一步展开为操作与预期；实际读取与回答正确分别核对。",
      "explain": "第一张 0、第二张 1，把两张一步展开为操作与预期；实际读取与回答正确分别核对。",
      "action": "按对应口播提示定位本段，讲完进入下一画面。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "result"
      ]
    },
    {
      "id": "f14",
      "scene": "p07c",
      "step": 2,
      "start": 4,
      "end": 5,
      "title": "从本次成功匹配转向描述检查",
      "surface": "PPT · 回到 p07c 第 3 步",
      "visible": "保留请求、描述与对应线。下方新增本次可见事实：cat …/game-playtest/SKILL.md，退出 0，工具返回正文，并标明不展示模型内部判断。",
      "explain": "回到同屏保留的需求、描述与实际读取摘要，收住这次已经成功选用的事实。下一页讨论的是以后漏选或误选时如何检查描述，而不是修复本次已经出现的失败；先确认 Skill 可用，再讨论描述是否准确表达适用范围。",
      "action": "从回放返回保留的 PPT，推进到 p07c 第 3 步，讲本次原描述已匹配；再翻到 p07d 第 1 步。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "语言触发与读取",
      "materials": [
        "p07c"
      ]
    },
    {
      "id": "f15",
      "scene": "p07d",
      "step": 0,
      "start": 0,
      "end": 1,
      "title": "先说清负责哪项工作",
      "surface": "PPT · p07d 第 1 步",
      "visible": "划去“帮助开发游戏”，旁注范围太宽。description 纸页内第一条写职责原句，色带右侧标注“负责什么”。",
      "explain": "用“帮助开发游戏”可能同时包含规划、实现、画图，与当前明确的“浏览器游戏试玩与前端质量检查”对比，解释对象和工作都要写清。学员要能判断描述是否足以区分任务，而不只是记住“任务范围”这个字段名称。这个过宽说法是讲解用的假设，不是本次原描述。",
      "action": "保持范围行可见，再推进补情境。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "描述写法与复核",
      "materials": [
        "p07d"
      ]
    },
    {
      "id": "f16",
      "scene": "p07d",
      "step": 1,
      "start": 0,
      "end": 2,
      "title": "补充情境和不适用边界",
      "surface": "PPT · p07d 第 2 步",
      "visible": "同一描述纸页增加两条色带：准备人工试玩清单等情境，标注“什么时候用”；仅润色按钮文案，标注“什么情况不用”。",
      "explain": "在已说明的任务范围上，增加“准备人工试玩清单”作为适用情境，再用“只润色按钮文案、不检查游戏”说明不适用边界。两条共同帮助决定什么时候选这份 Skill；选中以后怎样检查由正文提供。本页讲的是课程改写示例，实际改动与原文到复核材料里对照。",
      "action": "指认新增情境和边界；保留课程改写标识。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "描述写法与复核",
      "materials": [
        "p07d"
      ]
    },
    {
      "id": "f17",
      "scene": "p07d",
      "step": 2,
      "start": 0,
      "end": 1,
      "title": "先在 PPT 讲复核方法",
      "surface": "PPT · p07d 第 3 步",
      "visible": "保留描述。下方出现“修改后复核”和“① 新会话已载入新版”。两张请求卡分别指向应选用·查漏选、不应选用·查误选。",
      "explain": "先确认会话收到的是新版 description，再把两个请求分别连到预期：整理试玩清单应选用 game-playtest；只润色按钮提示不应选用它。前者检查漏选，后者检查误选，随后用实际选用、读取和返回逐项核对。方法在 PPT 讲，观察结果到下一段材料中看。",
      "action": "停留 PPT 讲完这一段，再切回放；此时不让画面提前落在材料顶部的原描述。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "描述写法与复核",
      "materials": [
        "p07d",
        "description"
      ]
    },
    {
      "id": "f18",
      "scene": "p07d",
      "step": 2,
      "start": 2,
      "end": 5,
      "title": "读出四轮结果，再解释改写效果",
      "surface": "Inspect · 四轮原始记录 → PPT p07d 第 3 步",
      "visible": "四轮各自的可用说明、原始请求与回复，保留读取动作上下文。",
      "explain": "先读观察：原版、改写版在清单任务均读取，在按钮文案任务均未见读取。这两条请求没有表现出两版效果差别，因此本例展示范围表达和复核方法。以后具体发生漏选或误选，保留该请求，改完再检查同一任务。回 PPT 只收束这一判断，随后以“选用之后正文怎样指导工作”进入 3.2.2。",
      "action": "按“下一条记录”核对四轮原文；改写示例在 PPT。回 p07d 第 3 步收束，再进入 3.2.2。",
      "reuse": "口播已按讲述线同步，沿用 script.json 与既有评论坐标。",
      "group": "描述写法与复核",
      "materials": [
        "description",
        "p07d"
      ]
    }
  ],
  "authoring": {
    "scope": "3.2 第二部分：读懂、修改与从零编写 Skill",
    "intro": "按六个环节展开：左侧是具体讲法与承接，右侧按画面切换排列操作、材料链接和连续逐字稿。正文可直接编辑并保存；复用来源与核验说明在各段备课区。",
    "status": "2026-11-09 按讲师指出的全稿可理解性问题修订：补齐对象介绍、历史任务身份、版本沿革与段间承接，先具体说明再归纳。旧稿和评论坐标保留。界面实录仍缺，未出声试读、试讲或新增模型调用。",
    "materials": {
      "history": {
        "label": "11 月 6 日规划回放 S01–S03",
        "url": "skill-reading-trial.html#s01"
      },
      "entry": {
        "label": "game-studio 原文件",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-studio/SKILL.md"
      },
      "playtest": {
        "label": "game-playtest 原文件",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
      },
      "foundations": {
        "label": "web-game-foundations 原文件",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/web-game-foundations/SKILL.md"
      },
      "engine": {
        "label": "共享 engine-selection.md",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/engine-selection.md"
      },
      "change": {
        "label": "单项修改与相同请求",
        "url": "authoring-evidence.html#change"
      },
      "reads": {
        "label": "两版实际读取",
        "url": "authoring-evidence.html#reads"
      },
      "compare": {
        "label": "原版与修改版检查段",
        "url": "authoring-evidence.html#compare"
      },
      "limits": {
        "label": "修改版原始表述与核对意见",
        "url": "authoring-evidence.html#limits"
      },
      "routing": {
        "label": "修改版实际读取顺序",
        "url": "authoring-evidence.html#routing"
      },
      "sharing": {
        "label": "两个入口引用同一份资料",
        "url": "authoring-evidence.html#sharing"
      },
      "core": {
        "label": "PPT 第 6 页 · 正文取舍",
        "url": "index.html?mode=slides#p07e"
      },
      "split": {
        "label": "PPT 第 7 页 · 资料与专项工作",
        "url": "index.html?mode=slides#p07f"
      },
      "create": {
        "label": "单文件编写顺序演示",
        "url": "authoring-evidence.html#create"
      },
      "memory": {
        "label": "v3 翻牌请求、读取与完整返回",
        "url": "authoring-evidence.html#memory"
      },
      "memory-review": {
        "label": "翻牌 C2、C5 核对意见",
        "url": "authoring-evidence.html#memory-review"
      },
      "missing": {
        "label": "缺失输入：v2 → v3 修订与返回",
        "url": "authoring-evidence.html#missing"
      },
      "transfer": {
        "label": "v3 躲避请求、读取与完整返回",
        "url": "authoring-evidence.html#transfer"
      },
      "check": {
        "label": "PPT 第 8 页 · 两个迁移情境",
        "url": "index.html?mode=slides#p07g"
      },
      "handoff": {
        "label": "PPT 第 9 页 · 产物与下一轮开发",
        "url": "index.html?mode=slides#p07h"
      },
      "example": {
        "label": "当前最小 SKILL.md",
        "url": "../../materials/skill-authoring-20261107/example/game-check-plan/SKILL.md"
      },
      "materials": {
        "label": "版本、运行条件与本地准备",
        "url": "../../materials/skill-authoring-20261107/README.md"
      },
      "official": {
        "label": "官方写法与验证说明",
        "url": "https://developers.openai.com/plugins/build/skills"
      },
      "discovery": {
        "label": "官方本地发现位置",
        "url": "https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills"
      },
      "ui": {
        "label": "game-ui-frontend 原文件 · 界面指导",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards"
      },
      "history-result": {
        "label": "规划回放 · S02 方案",
        "url": "skill-reading-trial.html#s02"
      },
      "core-notes": {
        "label": "正文取舍的归纳样稿",
        "url": "authoring-evidence.html#core"
      },
      "split-notes": {
        "label": "按需要拆分的归纳样稿",
        "url": "authoring-evidence.html#split"
      },
      "check-notes": {
        "label": "两个迁移情境与解析样稿",
        "url": "authoring-evidence.html#check"
      },
      "handoff-notes": {
        "label": "收尾归纳样稿",
        "url": "authoring-evidence.html#handoff"
      },
      "history-load": {
        "label": "规划同次入口读取 · S04",
        "url": "skill-reading-trial.html#s04"
      },
      "practice": {
        "label": "现场编辑与调用准备",
        "url": "authoring-evidence.html#practice"
      }
    },
    "frames": [
      {
        "id": "b01",
        "group": "从结果读懂正文",
        "title": "先看这次要求它做什么",
        "status": "已有去敏请求与方案节选；本轮回读来源，不发新任务。",
        "reuse": [
          {
            "scene": "b01",
            "step": 2,
            "part": 1,
            "text": "刚才我们看的是 Skill 的名称和描述，AI 可以据此判断要不要选用一份指导。选中以后，具体怎样做事，还要看 SKILL.md 的正文。接下来，我们打开一份正文，看看里面的要求怎样用到实际任务中。\n这里换用 Game Studio 中的 game-studio。Game Studio 是整套插件的名字，game-studio 则是其中负责游戏前期规划的一份 Skill。还没开始写游戏时，这份指导会帮助 AI 考虑玩法、技术、界面和检查安排。\n备课时，我曾让 Codex 使用这份 Skill，为翻牌游戏写一份开发方案。现在打开的是那次任务的记录。请求只要求先给方案，不写代码；玩法是每次翻两张牌，配对成功的保留，全部配对后结束，并且能够重新开始。我们先看 Codex 给了什么方案，再回到正文，找出这些安排和指导之间的联系。"
          }
        ],
        "screens": [
          {
            "surface": "规划回放 · S01 完整请求",
            "action": "从第一部分末尾另开规划回放，停在请求；讲完向下滚到 S02。",
            "materials": [
              "history"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "boundary": "这是 11 月 6 日保存的独立规划任务，与上一节开发和第一部分的试玩清单不同轮；本轮未实现游戏。",
        "previousReuse": [
          {
            "scene": "p08",
            "step": 2,
            "part": 28,
            "text": "这次请求指定使用 game-studio，要求翻两张牌、配对后保留、全部配对后结束，还能重新开始。先给方案，不写代码。"
          },
          {
            "scene": "b01",
            "step": 0,
            "part": 1,
            "text": "同样是翻牌游戏，为什么用了这份 Skill，方案就推荐 Phaser？还有，方案里的哪些决定是我们要求的，哪些来自这份指导，哪些只是 AI 自己补的？我们用这次保存的规划把它们分清楚。分清以后，想改变方案时，才知道该补项目要求，还是改指导。这里先要方案，不写代码。\n"
          },
          {
            "scene": "b01",
            "step": 1,
            "part": 1,
            "text": "上一部分，我们已经知道怎样找到并调用一份 Skill。接下来要解决的是：它给出的方案如果和我们想的不一样，该补任务要求，还是改 Skill？要作这个决定，先得分清方案里的决定从哪里来。这次保存的请求指定 game-studio，为翻牌游戏先做规划，不写代码。请求规定了每次翻两张、配对保留、全部配对结束和重新开始。我们带着这些要求看方案，先找一项请求里没有规定的选择。"
          }
        ]
      },
      {
        "id": "b02",
        "group": "从结果读懂正文",
        "title": "方案里的决定来自哪里",
        "status": "S02 为模型原话节选；未执行方案中的实现与检查。",
        "reuse": [
          {
            "scene": "b02",
            "step": 4,
            "part": 1,
            "text": "Codex 在方案里选择了 Phaser。这是一个游戏框架，可以提供游戏开发中常用的能力。我们刚才的请求只说了翻牌规则，没有指定框架，Codex 为什么会选它？\n方案中写着“按 game-studio 默认走 Phaser 路径”，还说明这个体量的游戏用普通网页技术也能实现。也就是说，Codex 给出的选型理由，是采用这份 Skill 推荐的默认方案。我们回到这次任务的读取记录，再核对原文。"
          },
          {
            "scene": "b02",
            "step": 5,
            "part": 1,
            "text": "这次任务中，Codex 读取了 game-studio 的 SKILL.md，工具返回了文件正文。这说明 Codex 确实取得了这份指导，而不只是最后在回答中提到了名字。\n接下来打开同一版本的 SKILL.md，看看正文是否真的推荐 Phaser。这样就能把方案中的选择和它采用的依据对起来。"
          }
        ],
        "screens": [
          {
            "surface": "规划回放 · S02 技术选择原话",
            "action": "停在“按 game-studio 默认走 Phaser 路径”及纯 DOM/CSS 的说明，先解释选择理由；再看同页 S04。",
            "materials": [
              "history-result"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "同次回放 · S04 点名、入口读取与正文核对",
            "action": "指认本次请求已点名 game-studio，以及 events 第 5 行的入口读取；再另开固定版本 SKILL.md。",
            "materials": [
              "history-load",
              "entry"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b02",
            "step": 0,
            "part": 1,
            "text": "方案选了 Phaser，但请求只给了翻牌规则，没有指定框架。返回自己解释说，“按 game-studio 默认走 Phaser 路径”，同时也承认这个体量用纯 DOM、CSS 可以实现。也就是说，翻牌规则并没有唯一推出 Phaser；这次选型采用了 Skill 提供的默认路线。"
          },
          {
            "scene": "b02",
            "step": 0,
            "part": 2,
            "text": "不过，返回说自己遵循了指导，还不足以让我们确认依据。接着查同次读取，再到原文件看有没有这条建议。以后遇到一个不合适的默认选择，也要这样找到它从哪里来，才知道改哪一处。\n"
          },
          {
            "scene": "b02",
            "step": 1,
            "part": 1,
            "text": "这次用户点名了 game-studio，工具记录也显示，它读取了这份 SKILL.md，返回中包含正文。结合刚才的选型解释，我们有了两方面依据：它实际取得了这份指导，方案也明确把选择归于其中的默认路线。名称负责选中对象，具体采用什么做法，要看正文。单凭读过文件，还不能认定每条指导都已经落实，后面仍要对照方案。\n"
          },
          {
            "scene": "b02",
            "step": 2,
            "part": 1,
            "text": "方案采用了 Phaser，但翻牌规则本身并没有规定框架。为什么选它？返回写的是“按 game-studio 默认走 Phaser 路径”，同时也说明，这个体量用纯 DOM、CSS 也能实现。这里值得追的不是 Phaser 好不好，而是这项默认选择的依据。找到依据，之后才知道怎样调整。"
          },
          {
            "scene": "b02",
            "step": 3,
            "part": 1,
            "text": "返回说遵循了 Skill，我们还要核对它实际取得了什么。这次请求点名 game-studio，工具记录也显示读出了这份 SKILL.md 的正文。接下来到同版原文件核对有没有这条默认建议。读取记录证明内容进来了，方案中的解释说明它把选择归于哪条指导；不能只凭“读过”，就认定所有要求都照做了。"
          }
        ]
      },
      {
        "id": "b03",
        "group": "从结果读懂正文",
        "title": "正文给默认方案，也给适用条件",
        "status": "已回读同一固定提交；产品通用机制与本例默认偏好分开。",
        "reuse": [
          {
            "scene": "b03",
            "step": 3,
            "part": 1,
            "text": "SKILL.md 开头的 Overview，也就是概述，确实推荐二维浏览器游戏默认采用 Phaser。Phaser 提供场景、图片和动画等常用能力。方案中的那句话，对应的就是这里。\n但“默认推荐”还不是“所有项目必须这样做”。我们继续看正文给出的适用条件。"
          },
          {
            "scene": "b03",
            "step": 4,
            "part": 1,
            "text": "Use This Skill When 说明什么时候适合使用这份指导：比如还没确定技术，或者需要一起规划架构、界面和素材。这次从头规划翻牌游戏，就属于这样的任务。\n如果我们是在已有项目里加游戏，项目已经规定了技术，就应该把这些约束告诉 Codex，让 Codex 结合项目作决定。不能因为 Skill 有一套默认建议，就忽略项目原来的要求。\n再往下，Do Not Stay Here When 说明哪些工作不应继续停留在这份规划指导中。Routing Rules，也就是转交规则，则给出了实现、界面和试玩等专项 Skill 的路径。先记住：game-studio 负责整体规划，更具体的工作还有其他指导。稍后我们会打开其中一份看。"
          }
        ],
        "screens": [
          {
            "surface": "game-studio · Overview 的二维游戏默认路线",
            "action": "从 Overview 的默认路线开始读；Default Workflow 第 3 项稍后顺读时再次核对，此处不跳到后文。",
            "materials": [
              "entry"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "同一文件 · Use This Skill When → Do Not Stay Here When → Routing Rules",
            "action": "读适用与转交条件，再指认专项路径；继续向下到 Default Workflow。",
            "materials": [
              "entry"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "p08",
            "step": 2,
            "part": 1,
            "text": "Overview 这里明确写着，默认采用二维 Phaser 路线。Phaser 是游戏框架，提供场景、图片和动画等常用能力。刚才返回说采用默认方案，对应的就是这项要求。"
          },
          {
            "scene": "p08",
            "step": 2,
            "part": 7,
            "text": "技术方向确定后，实现和试玩还各有具体做法，Routing Rules 给出了对应 Skill 的路径。入口把这些工作联系起来，不在一个文件里写完所有细节。"
          },
          {
            "scene": "p08",
            "step": 2,
            "part": 8,
            "text": "所以，用之前要看当前缺什么。还没想清整个游戏怎么做，就先规划；如果游戏已有实现，只剩试玩，就直接选试玩指导。已有项目规定了技术，也应把要求交代清楚，不能只照默认建议另选一套。"
          },
          {
            "scene": "b03",
            "step": 0,
            "part": 1,
            "text": "这份 Skill 适用于还没确定技术，或者需要一起安排架构、界面、素材的任务。这次是从头规划翻牌游戏，符合它的适用条件。默认方案也有前提：如果我们已有项目和技术要求，要把这些要求一起交给它，不能把这份默认建议当成所有项目都必须采用的技术。"
          },
          {
            "scene": "b03",
            "step": 1,
            "part": 1,
            "text": "Overview 确实把二维 Phaser 路线作为默认建议。Phaser 提供场景、图片和动画等游戏能力。这样，方案采用它就有了可指认的正文依据。默认建议能帮助尚未确定技术的任务开始规划，但是否适合当前项目，还要继续看适用条件。"
          },
          {
            "scene": "b03",
            "step": 2,
            "part": 1,
            "text": "这里适用于技术尚未确定，或需要一起考虑架构、界面、素材的任务。这次从头规划翻牌游戏，符合这个范围。如果已有项目要求继续用原来的技术，就应把项目约束一起提供，不能因为正文推荐 Phaser 就重选一套。\n后面的 Routing Rules 又把实现、界面、试玩分给专项指导。一份正文既要告诉 AI 在什么条件下采用某种做法，也要说明什么时候转给别的指导。我们读它，是为了理解这些决定，接下来再看它怎样把一个简短需求展开成方案。"
          }
        ]
      },
      {
        "id": "b04",
        "group": "从结果读懂正文",
        "title": "把通用步骤落实为本次玩法",
        "status": "按真实文件排列讲；不沿用旧稿中未对应最新 3.1 的 E06 与独立项目事实。",
        "reuse": [
          {
            "scene": "b04",
            "step": 5,
            "part": 1,
            "text": "现在读到 Default Workflow，也就是默认工作流程。前两项先要求明确玩家能做哪些动作、游戏怎样反复进行，以及什么时候结束。\n为什么先确定这些？因为程序要记录什么，页面要显示什么，都得从玩法推出来。我们用刚才的翻牌请求来理解这两条。"
          },
          {
            "scene": "b04",
            "step": 6,
            "part": 1,
            "text": "玩家先翻一张，再翻一张。两张相同就保留，不同就盖回去，所有图案配齐后结束。程序因此要记住当前翻开的两张牌、已经配好的牌，以及这一局有没有结束。\nSkill 提供了“先把玩法想清楚”的做法，这次请求则提供了翻牌的具体规则。还有一些细节没说，比如两张不匹配的牌隔多久盖回去。方案采用了八百毫秒，这是 Codex 补出的选择，需要我们确认。和前面的 Phaser 不同，这个数既没有写在请求里，也不是这份 game-studio 规定的默认值。"
          },
          {
            "scene": "b04",
            "step": 7,
            "part": 1,
            "text": "回到工作流程，后面依次考虑技术、界面、素材和试玩。它们都要和刚才的玩法配合：有结算状态，界面就要安排结算提示；能够重新开始，检查时就要核对重开后的状态。\n这份指导并没有把所有游戏写成同一种玩法。换一个游戏，仍然先明确玩家动作和结束条件，再据此安排技术与检查；具体要记录哪些状态、检查哪些操作，则要重新确定。"
          }
        ],
        "screens": [
          {
            "surface": "game-studio · Default Workflow 第 1、2 项",
            "action": "停在玩家动作、游戏循环两项；讲完切回请求标签。",
            "materials": [
              "entry"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "规划回放 · S01 的翻牌规则",
            "action": "指认翻两张、配对保留、全部配对结束和重开；然后返回原文件的同一流程。",
            "materials": [
              "history"
            ],
            "reuse": [
              1
            ]
          },
          {
            "surface": "game-studio · Default Workflow 第 1–6 项",
            "action": "回到流程前两项，再依次向下看技术、界面、素材与试玩，讲完进入 Output Expectations。",
            "materials": [
              "entry"
            ],
            "reuse": [
              2
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "p08",
            "step": 2,
            "part": 10,
            "text": "Default Workflow 先要求明确玩家动作、游戏怎样循环，以及什么时候结束。程序要记录什么、界面要显示什么，都得由这些规则决定。"
          },
          {
            "scene": "p08",
            "step": 2,
            "part": 12,
            "text": "正文保留的是“先明确玩家动作和结束条件”这个做法。翻牌怎样配对、用几张牌，则由当前任务决定。换成别的游戏，仍用这套思考方法，具体规则要重新确定。"
          },
          {
            "scene": "b04",
            "step": 0,
            "part": 1,
            "text": "这次请求给出了翻两张、配对保留、不匹配盖回、全部配对结束。按正文“先明确玩家动作和游戏循环”的做法展开，就能推出程序要记住当前翻开的两张牌、已经配好的牌，以及是否结束。指导提供思考顺序，当前规则提供具体答案。"
          },
          {
            "scene": "b04",
            "step": 0,
            "part": 2,
            "text": "但规则没有给出不匹配后等待多久。方案补出的八百毫秒，需要我们确认。它和 Phaser 不同：一个是这次模型补的参数，一个在正文里有默认依据。读方案时不能把这两类决定都当成用户已经确定的要求。\n"
          },
          {
            "scene": "b04",
            "step": 1,
            "part": 1,
            "text": "第 3 项又明确了二维浏览器游戏默认用 Phaser，后面再安排界面、素材和试玩。比如结算时要显示步数，规划界面时就得安排；要检查重开，就得先说清重开后哪些状态恢复。"
          },
          {
            "scene": "b04",
            "step": 2,
            "part": 1,
            "text": "Default Workflow 先要求明确玩家动作、游戏循环和结束条件。为什么从这里开始？因为程序需要记录什么、界面要显示什么，都得由玩法决定。只说“做一个翻牌游戏”，还不足以直接确定这些内容。"
          },
          {
            "scene": "b04",
            "step": 3,
            "part": 1,
            "text": "按这次请求，玩家翻两张，配对后保留，没配对再盖回，直到全部配对结束。把这个过程展开，才知道需要记录当前翻开的牌、已经配好的牌和是否结束。这是把通用方法用到当前规则上。\n不过，配错以后等多久，请求没有给出。方案里的八百毫秒是模型补的选择，需要我们确认。它与 Phaser 的区别在于：Phaser 有正文默认建议，等待时间则没有。两者都不能直接当成用户已经规定的要求。"
          },
          {
            "scene": "b04",
            "step": 4,
            "part": 1,
            "text": "沿流程继续，技术、界面、素材和试玩都要围绕玩法安排。比如规则需要结算，界面就要安排结算状态；要检查重开，就要明确重开后恢复什么。\n所以正文写的是可反复使用的思考方法，当前请求提供具体游戏规则。换一个游戏，仍要明确动作和结束条件，但程序状态、素材和检查项应随之改变。"
          }
        ]
      },
      {
        "id": "b05",
        "group": "从结果读懂正文",
        "title": "输出要求让方案可核对",
        "status": "此时尚未读 game-playtest 的关键状态要求，因此原 p08 第 3 步段 30 的“刚才指导”暂不复用；两组规划有独立日期和请求，不混接。",
        "reuse": [
          {
            "scene": "b05",
            "step": 3,
            "part": 1,
            "text": "流程说明怎样推进，接下来的 Output Expectations，也就是输出要求，说明最后要交出什么。规划任务要交代玩法、技术、界面、素材和检查安排；进入实现后，还要有对应的代码和文件。\n我们这次只要方案，所以先核对方案有没有把这些事情交代清楚。"
          },
          {
            "scene": "b05",
            "step": 4,
            "part": 1,
            "text": "回到 Codex 的方案，技术选择有了，素材安排了简单牌背和图案，检查部分也列了初始、翻开和结算等状态的截图。这些安排都能对应到正文要求考虑的内容。\n不过，“要检查结算画面”还不等于别人可以直接照着检查。操作人得知道怎样进入结算、看到什么才算正确。接下来，我们把 Skill 中关于检查计划的要求写得更具体，再调用一次，看输出会怎样变化。"
          }
        ],
        "screens": [
          {
            "surface": "game-studio · Output Expectations",
            "action": "先看 planning 与 implementation 两类输出条件；讲完切回 S02。",
            "materials": [
              "entry"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "规划回放 · S02 的技术、素材与检查段",
            "action": "按原回复核对技术、素材和检查安排；讲完另开另一组结果对照，先看原版的一条检查。",
            "materials": [
              "history-result",
              "change"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "p08",
            "step": 2,
            "part": 25,
            "text": "Output Expectations 约定最后交什么。做规划，要交代玩法、技术、界面、素材和检查安排；进入实现，文件分工和代码也要符合选定的方案。"
          },
          {
            "scene": "p08",
            "step": 2,
            "part": 26,
            "text": "这次只要方案，所以先检查这些安排是否足够让我们作决定。"
          },
          {
            "scene": "p08",
            "step": 2,
            "part": 29,
            "text": "回到返回，Phaser 对应了入口的默认建议。素材用了简单牌背和图案，没有安排动画条带。通用指导提供了考虑方向，具体需要什么，还要按静态卡牌的特点选择。"
          },
          {
            "scene": "b05",
            "step": 0,
            "part": 1,
            "text": "方案已经安排初始、翻开和结算等截图，说明它考虑了检查。但假如把这份方案交给另一个人，他知道要看结算画面，却还得自己决定怎么进入结算、看到什么才算正确。“安排了检查”和“别人能照着检查”之间，还差一步。\n我们希望以后每次生成规划都补上这一步，所以接下来改 Skill 的规划输出要求。若只是这一个游戏的牌数没说清，应补当前任务；这里缺的是可以反复使用的写法。\n"
          },
          {
            "scene": "p08",
            "step": 2,
            "part": 31,
            "text": "它还补了八对牌和八百毫秒的等待时间。这两个数在请求和入口 Skill 里都没有，需要我们确认。"
          },
          {
            "scene": "b05",
            "step": 1,
            "part": 1,
            "text": "Output Expectations 把这些考虑落实到交付物：规划时交玩法、技术、界面、素材和检查安排，实现时再交相应代码。这让我们知道收到方案后应该核对什么，而不只是判断它写得长不长、栏目全不全。"
          },
          {
            "scene": "b05",
            "step": 2,
            "part": 1,
            "text": "回到方案，素材用了简单牌背和图案，检查安排了初始、翻开和结算等截图。这里已有检查意识，但交给另一个人，他还得自己补充怎样进入这些状态、看到什么才算正确。\n另外，八对牌和八百毫秒都不是原请求规定的，需要另行确认。补这些参数解决的是本次游戏信息；把检查安排写到别人能照着做，解决的是生成计划的方法。接下来我们就改后面这一项。"
          }
        ]
      },
      {
        "id": "b06",
        "group": "修改并验证",
        "title": "在负责输出的原位置改一项要求",
        "status": "讲述线已恢复现场编辑、保存、同请求新会话调用；命令准备见本节 README。11 月 7 日历史材料已核对，本轮未重新调用模型。",
        "reuse": [
          {
            "scene": "b06",
            "step": 5,
            "part": 1,
            "text": "为了比较修改前后的差别，我在备课时另外做过一组调用，仍然是让 Codex 为翻牌游戏做规划。这组调用对原版和修改版使用同一条请求。这里先打开使用原版 Skill 生成的方案。它写的是“结算 → 重开 → 可正常再玩”。\n假如让你照着这一条检查，你还要自己补充：从结算面板开始，点击重开以后，哪些东西应该消失，哪些数字应该归零，怎样才算正常再玩？这条清单还不够具体。\n如果游戏没有规定重开后要恢复什么，我们应先补充本次游戏规则。而我们现在要改善的是清单的写法：让 Codex 把规则展开成别人能操作、能判断的步骤。以后写其他游戏的检查计划也需要这种做法，所以我们把它加到 Skill 里。"
          },
          {
            "scene": "b06",
            "step": 6,
            "part": 1,
            "text": "现在在演示副本中修改 game-studio 的 SKILL.md。我们找到 Output Expectations 下负责规划输出的条目，在这里增加要求。\n每一项检查都写前置状态，也就是从什么情况开始；写用户操作，也就是要做什么；再写预期可见结果，也就是做完以后应该看到什么。还要求至少覆盖游戏结束和重新开始，并注明这只是计划、尚未执行。\n保存后核对差异，确认只增加了这句话。之所以改这里，是因为 Codex 已经选用了正确的 Skill，现在需要细化的是方案怎样写。description 负责让 AI 判断要不要用这份指导，正文中的输出要求才负责这件事。"
          },
          {
            "scene": "b06",
            "step": 7,
            "part": 1,
            "text": "文件改好后，在修改版项目里开一个新会话，仍然发出刚才那条翻牌规划请求。我们不把新增的检查要求再写进请求，想观察的是 Codex 读到新版 Skill 后，会不会采用其中的新要求。\nCodex 处理期间，我们先看备课时保存的两次调用，比较原版和修改版。讲完这组历史记录，再回来检查现在提交的任务。"
          }
        ],
        "screens": [
          {
            "surface": "历史对照 · 原版的浏览器 QA 检查",
            "action": "另开结果对照，停在原版“结算 → 重开 → 可正常再玩”；讲完切编辑器。",
            "materials": [
              "compare"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "编辑器 · 演示副本的 Output Expectations",
            "action": "打开已准备的原版副本，实际增加一条要求并保存；查看单文件差异。此时不预先应用补丁。",
            "materials": [
              "change",
              "practice"
            ],
            "reuse": [
              1
            ]
          },
          {
            "surface": "Codex · 修改版项目的新会话，粘贴并发送原规划请求",
            "action": "从“单项修改与相同请求”复制 planning Prompt；在修改版项目启动新会话并发送，随后切历史读取材料。",
            "materials": [
              "change",
              "reads"
            ],
            "reuse": [
              2
            ]
          }
        ],
        "boundary": "这里先看 11 月 7 日的历史原版，再在独立副本中现场修改并调用；历史返回与现场返回分开核对。",
        "prepMaterials": [
          "materials"
        ],
        "previousReuse": [
          {
            "scene": "b08",
            "step": 0,
            "part": 1,
            "text": "这里换到十一月七日保存的对照。原版写了“结算 → 重开 → 可正常再玩”，结束和重开本来就有。不过，操作人还得自己补：从结算面板开始，点击哪个按钮，重开后看哪些变化。“正常”还没有展开。"
          },
          {
            "scene": "b06",
            "step": 0,
            "part": 1,
            "text": "我们把刚才需要由操作人补的内容写进输出要求：前置状态说明从哪里开始，用户操作说明怎样触发，可见结果说明怎样判断。再要求覆盖结束和重开，避免清单只有正常游玩；注明尚未执行，避免把检查安排写成测试结论。"
          },
          {
            "scene": "b06",
            "step": 0,
            "part": 2,
            "text": "这些都细化原有的规划要求，所以改在 Output Expectations 的 planning 条目下，保存后核对差异。这次不是选错了 Skill，而是选对以后交出的计划还不够具体，改 description 解决不了这个问题。\n"
          },
          {
            "scene": "b06",
            "step": 1,
            "part": 1,
            "text": "现在在这个演示项目里开一个新会话，发出材料里同一条规划请求。三个字段只写在 Skill 正文里，请求仍然只说翻牌规则和先给方案。这样回来可以核对，它有没有把正文新增的要求用到方案里。"
          },
          {
            "scene": "b06",
            "step": 1,
            "part": 2,
            "text": "等待时先看保存的两版读取和返回，随后再回来检查刚提交的这一轮。"
          },
          {
            "scene": "b06",
            "step": 2,
            "part": 1,
            "text": "先看另一组保存的规划对照。原版写着“结算 → 重开 → 可正常再玩”。这已经考虑了重开，问题不在有没有提到，而在“正常”还需要操作人解释：从哪种状态开始，点什么，之后看哪些变化？\n如果游戏根本没有规定重开后怎么办，我们应该先问清规则；这里要补的则是把已有规则写成检查步骤的方法。以后生成同类计划都需要这套方法，因此把它写进 Skill，比每次重新提醒更合适。"
          },
          {
            "scene": "b06",
            "step": 3,
            "part": 1,
            "text": "我在演示副本的 Output Expectations 中找到规划输出条目。它本来就负责规定方案交什么，我们在这里细化检查计划：写前置状态，让人知道起点；写用户操作，让人知道怎样触发；写预期可见结果，让人知道怎样判断。\n再要求覆盖结束和重开，并明确只是计划、尚未执行。保存以后看差异，确认没有改其他要求。这次已选对 Skill，缺的是选用以后的做法，因此改正文；修改负责选用的 description，不能补上计划里的执行细节。"
          },
          {
            "scene": "b06",
            "step": 4,
            "part": 1,
            "text": "接着在修改版项目开新会话，发出同一条规划请求。请求里仍然只给游戏规则和先做方案，不把刚新增的结构要求再说一遍。否则，即使输出符合要求，我们也难以分清它采用的是正文还是这次提醒。\n等待时看预先保存的对照，随后再回来核对本次实际读取和返回。这里要验证的只是新增要求，不把牌数、素材等其他变化归因于这条修改。"
          }
        ]
      },
      {
        "id": "b07",
        "group": "修改并验证",
        "title": "先确认这轮读到的是新版",
        "status": "本轮回查原始 events、输入文件和 manifest 哈希；未重新运行模型。",
        "reuse": [
          {
            "scene": "b07",
            "step": 2,
            "part": 1,
            "text": "先看保存的两次调用分别读到了什么。原版的工具返回中，没有我们刚增加的那句话；修改版的工具返回中，能找到这条完整要求。\n为什么要先查这一步？假如我们已经改了文件，Codex 却仍读到旧版本，输出没有变化，问题首先在版本或读取上，不能马上断定新增要求写得不好。\n现在这组记录已经确认，使用修改版 Skill 的那次调用读到了新要求。接下来才看方案是否照着写了。"
          }
        ],
        "screens": [
          {
            "surface": "等待期间 · 11 月 7 日两版实际读取",
            "action": "切历史材料，明确是 original-verified 与 modified；核对新增句，讲完看保存的结果对照。",
            "materials": [
              "reads",
              "compare"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b07",
            "step": 0,
            "part": 1,
            "text": "为什么先查读取，不直接看新表格？因为我们要核对的是这条正文修改有没有被用上。如果仍读到旧版，即使返回碰巧出现三列，也不能据此说新版要求已经生效。保存的记录里，原版没有新增句，修改版工具返回有这句话。确认了输入版本，才有依据继续检查输出。\n"
          },
          {
            "scene": "b07",
            "step": 1,
            "part": 1,
            "text": "先确认版本，是为了避免改错方向。如果它仍读到旧版，返回没变化就不能说明新写法无效；如果没读新版却碰巧写出三列，也不能说我们的修改已经用上了。\n保存的两轮记录中，原版没有新增句，修改版工具返回包含新增句。这解决的是“新要求有没有进入这轮任务”。接下来才检查它有没有体现在输出中。"
          }
        ]
      },
      {
        "id": "b08",
        "group": "修改并验证",
        "title": "原版已有检查，新版采用了三项结构",
        "status": "直接从两份公开完整回复提取段落，原文和顺序保留；无新增游戏执行。",
        "reuse": [
          {
            "scene": "b08",
            "step": 5,
            "part": 1,
            "text": "看采用修改版 Skill 生成的方案，其中有一项“结算后重开”。前置状态是结算面板可见，操作是点击重新开始，预期结果是面板关闭、牌面重新洗牌、步数和配对数归零。\n和原版的“可正常再玩”相比，这次把操作人原来要自行补充的内容展开了。表格标题也注明待执行，避免把写好的检查计划误当成已经通过的检查。\n因此，在这次保存的调用中，新增要求确实用到了输出里。不过，我们现在检查的是计划怎样写，还没有打开游戏执行这些步骤。"
          },
          {
            "scene": "b08",
            "step": 6,
            "part": 1,
            "text": "现在回到刚才提交任务的 Codex 会话。我们先核对读取的正文里有没有新增句，再找一项结束或重开的检查，看是否交代了起点、操作和可见结果。\n如果读的还是旧版，先处理版本；如果读到新版却漏了要求，就对照新增句找出缺少的内容，再修改、重新调用。\n即使起点、操作、结果都写了，也还要判断内容能不能照着做。接下来回到那份保存的修改版方案，看一个具体问题。"
          }
        ],
        "screens": [
          {
            "surface": "结果对照 · 修改版 12 行检查表，重点第 9 项",
            "action": "回到结果对照，直接定位修改版第 9 项“结算后重开”；按前置状态、操作、可见结果三列核对，再看待执行标题。",
            "materials": [
              "compare",
              "limits"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "Codex · 返回现场读取与检查计划",
            "action": "回到刚才提交的会话。结果按实际说明；不把历史的 12 项当作现场固定结果。若未读新版，先处理版本；若未落实要求，调整后重发，取得本轮结果再继续。",
            "materials": [
              "compare",
              "limits"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "boundary": "前一画面是 11 月 7 日历史返回，后一画面回到现场；本次只核对新增要求，不将历史版与现场版当成受控效果对照。",
        "previousReuse": [
          {
            "scene": "b08",
            "step": 1,
            "part": 1,
            "text": "看结束后重开这一项，就能判断这次修改解决了什么。原版的“可正常再玩”需要操作人自行解释；修改版写出了结算面板可见时点击重新开始，并检查面板关闭、牌面重新洗牌和计数归零。另一个人接手时，就有了起点、动作和判断依据。十二项这个数量不是我们要验证的重点。"
          },
          {
            "scene": "b08",
            "step": 1,
            "part": 2,
            "text": "这份返回采用了新增的三项结构，也注明待执行，支持这次细化要求得到了落实。但还不能因此说整份计划都正确，更不能说游戏已经通过测试。我们先回刚才提交的任务，按同样的方法核对。\n"
          },
          {
            "scene": "b08",
            "step": 2,
            "part": 1,
            "text": "这次先确认它读到的正文里有新增句，再找结束或重开的一项，对照前置状态、用户操作和可见结果。少了哪一项，就指着这一项说明；如果没有按要求写，回到实际读取和原句查原因，再调整并重新调用。"
          },
          {
            "scene": "b08",
            "step": 2,
            "part": 2,
            "text": "同样有三列，也还要看步骤能不能执行。我们用保存的返回里一条具体问题来看。"
          },
          {
            "scene": "b08",
            "step": 3,
            "part": 1,
            "text": "拿结算后重开这一项比较就够了。原版的“可正常再玩”，在修改版里展开成了：结算面板可见时，点击重新开始，检查面板关闭、牌面重新洗牌和计数归零。起点、动作和通过条件都能找到，操作人需要自行补充的内容减少了。\n返回也标明待执行。这支持这次新增的输出要求得到了采用。我们还没有真的执行这些检查，也没有因此审定整份方案，不能把它说成游戏已通过测试。"
          },
          {
            "scene": "b08",
            "step": 4,
            "part": 1,
            "text": "现在回到刚提交的会话，按本轮实际结果核对。先找读取正文里的新增句，再选结束或重开的一项，看它是否写清起点、操作和可见结果。没有读到新版，就先处理版本；读到了却没落实，再对照原句找遗漏，修改后重新调用。\n即使三项齐全，还要想一遍别人能不能照做。下面用保存的返回看一个结构符合、内容却仍需修改的例子。"
          }
        ]
      },
      {
        "id": "b09",
        "group": "修改并验证",
        "title": "格式符合，还要检查内容能否观察",
        "status": "核对意见已在原材料登记；未把建议另包装为修复后已调用的结果。",
        "reuse": [
          {
            "scene": "b09",
            "step": 2,
            "part": 1,
            "text": "这份修改版方案的第十项检查进行中重开，预期结果中写着“无残留计时器、动画回调”。这句话关心的是：重开以后，上一局尚未完成的延迟动作，会不会继续影响新的一局。\n但人看着游戏画面，无法直接判断程序内部还剩几个计时器。把这句话放进“可见结果”一列，也没有说明该怎样检查。\n可以把要查的问题改成玩家能观察的步骤。例如，游戏正在等待两张牌盖回时点击重开，然后继续等待、翻牌，检查新的一局是否被旧局的延迟动作干扰。具体预期还要符合游戏规则。这是我们对这条检查的修改建议，尚未重新验证。\n所以，刚才的修改让清单写得更具体了，但不代表每一项都已经正确。我们仍然要对照规则，判断写出的动作能否执行、结果能否观察。"
          }
        ],
        "screens": [
          {
            "surface": "核对意见 · 原句与讲师分析对照表",
            "action": "只指第 10 项“无残留计时器/动画回调”及旁边核对意见，解释怎样改为可观察的检查；其他意见保留供查阅，不逐条讲。",
            "materials": [
              "limits",
              "routing"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b09",
            "step": 0,
            "part": 1,
            "text": "再看一处能帮助我们审查内容的问题。第十项写“无残留计时器、动画回调”，这是想防止上一局的动作干扰新局。但手动检查的人只看游戏画面，不能直接看到内部回调有没有残留。三列都填了，仍可能照着做不了。"
          },
          {
            "scene": "b09",
            "step": 0,
            "part": 2,
            "text": "可以把风险落到玩家能观察的现象上：重开以后，继续等待并翻牌，检查新局有没有被上一局的延迟动作干扰。具体步骤和预期还要按游戏规则确定。这是审阅建议，尚未重新调用验证。"
          },
          {
            "scene": "b09",
            "step": 0,
            "part": 3,
            "text": "所以我们核对修改时要分两步：先看新增要求有没有采用，再看采用以后是否真的解决了原来的问题。这里结构已经用上，内容仍有需要修订的地方。\n"
          },
          {
            "scene": "b09",
            "step": 1,
            "part": 1,
            "text": "第十项写“无残留计时器、动画回调”。它想检查的是上一局的动作会不会干扰新局，但手动检查的人看不到内部回调。把内部条件填进“可见结果”这一列，并没有让它变成可见结果。\n要检查这个风险，可以安排重开后继续等待和翻牌，观察新局是否被旧局的延迟动作干扰；具体步骤和预期仍须按游戏规则确定。这是我们的修订建议，还没重新调用验证。\n因此，验证修改有两件事：确认要求被采用，确认采用后真的改善了原问题。刚才的对照支持结构变具体了；这里说明内容仍要人审。以后输出不够好时，也要先分清是输入缺失、要求不清、版本不对，还是这次输出没有落实，再决定改哪里。"
          }
        ]
      },
      {
        "id": "b10",
        "group": "理解引用与复用",
        "title": "这次还读取了哪些指导",
        "status": "本次读取已核对；读取专项指导没有发生对应的游戏实现或试玩。",
        "reuse": [
          {
            "scene": "b10",
            "step": 2,
            "part": 1,
            "text": "我们已经改过 game-studio 的一项输出要求。再看这份规划指导怎样使用其他文件。\n规划游戏时既要考虑技术，也要考虑界面和试玩。如果把每一项的详细做法都写进同一份 SKILL.md，文件会很长，也不方便单独使用其中一种方法。game-studio 的做法，是在正文中引用其他专项 Skill。\n刚才那次修改版调用里，Codex 除了读取规划指导，也读取了游戏界面指导 game-ui-frontend。我们打开这份文件，看看两份 Skill 怎样分工。"
          }
        ],
        "screens": [
          {
            "surface": "modified · 按完成事件排列的实际读取表",
            "action": "在同轮实际读取表中定位专项 Skill，重点指认 game-ui-frontend；随后另开该文件，目录查找失败保留在材料中供查阅。",
            "materials": [
              "routing",
              "ui"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b10",
            "step": 0,
            "part": 1,
            "text": "刚才我们能改一条输出要求，是因为知道它负责什么。现在再看：规划涉及技术、界面和试玩，这些具体方法都要塞进同一份正文吗？"
          },
          {
            "scene": "b10",
            "step": 0,
            "part": 2,
            "text": "这次记录里，入口之外还读取了试玩、项目基础结构、Phaser 实现和界面指导。Routing Rules 提供了通向专项指导的路径。我们用界面这一项来看这种分工：入口决定什么时候需要界面工作，专项 Skill 负责怎样安排和检查界面。\n"
          },
          {
            "scene": "b10",
            "step": 1,
            "part": 1,
            "text": "正文越写越具体，是否就应该把技术、界面、试玩的全部方法都塞进去？先想这些内容各自解决什么。规划要知道需要安排界面，但怎样让状态清楚、操作方便，是一项可以单独展开的工作。\n这轮记录确实读取了界面等专项 Skill。我们只取界面这一项，看看入口为什么把工作转给它，不逐项介绍所有读取。"
          }
        ]
      },
      {
        "id": "b11",
        "group": "理解引用与复用",
        "title": "另一份 Skill 负责一项完整工作",
        "status": "固定版本正文及原规划中的读取有依据。界面调整的独立调用、同状态前后画面和效果核验尚待补齐；不把原规划读取当成实现效果。",
        "reuse": [
          {
            "scene": "b11",
            "step": 6,
            "part": 1,
            "text": "game-ui-frontend 负责游戏界面设计。比如 Frontend Standards，也就是界面标准，其中要求把玩家经常要看的状态放在容易找到的位置，把低频设置和长说明收进菜单或抽屉，并为游戏操作区留出空间。\n拿翻牌来说，步数和时间是游玩时要看的，不应该埋在一大段说明里；帮助说明可以收起，但需要时仍要找得到。这份 Skill 把“界面要清楚”展开成了信息放哪里、什么时候显示、怎样避免挡住操作的具体做法。"
          },
          {
            "scene": "b11",
            "step": 7,
            "part": 1,
            "text": "如果按照这条指导收起长说明，怎样判断调整是否合适？需要在同一个游戏、相同窗口大小和状态下比较：牌阵是否更方便操作，步数和时间是否仍容易看到。\n还要打开和收起帮助，确认说明能够找到，也不会挡住操作。只看页面变得更空，还不足以判断界面变好了。"
          },
          {
            "scene": "b11",
            "step": 8,
            "part": 1,
            "text": "回到 game-studio 的 Routing Rules，其中 HUD and menu direction，也就是状态显示和菜单设计，指向刚才的 game-ui-frontend。规划指导负责提醒要考虑这项工作，界面 Skill 则提供更具体的做法。\n如果游戏已经做好，只想调整界面，也可以单独选用 game-ui-frontend。它能承担一项完整工作，不必每次都从整体规划开始。下面再看另一种引用：两份 Skill 共用一份参考资料。"
          }
        ],
        "screens": [
          {
            "surface": "game-ui-frontend · Frontend Standards 第 3、4 项",
            "action": "另开原文件，按顺序定位信息层次和保护游戏区域的要求；读完切到界面前后对照。",
            "materials": [
              "ui"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "独立界面调整 · 同一游戏、同尺寸、同状态的前后画面（待补）",
            "action": "录制前补齐同状态实录；讲述时围绕一处真实变化来回指认，再打开和收起说明区域，核对帮助入口是否仍可找到。当前口播只讲观察方法。",
            "materials": [],
            "reuse": [
              1
            ]
          },
          {
            "surface": "game-studio · Routing Rules 的 HUD and menu direction",
            "action": "返回入口，指认通向 game-ui-frontend 的路径；讲完打开“两个入口引用同一份资料”。",
            "materials": [
              "entry",
              "sharing"
            ],
            "reuse": [
              2
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "p08",
            "step": 2,
            "part": 18,
            "text": "game-playtest 要求先把游戏运行起来，试一遍主要操作，再把几种关键状态截下来，检查画面有没有问题，最后报告发现的问题。"
          },
          {
            "scene": "b11",
            "step": 0,
            "part": 1,
            "text": "game-ui-frontend 先要求把关键状态放在容易看到的位置，把低频设置和长说明收进菜单或抽屉。比如玩游戏时要看分数，不应该先在一大段说明里找。"
          },
          {
            "scene": "b11",
            "step": 0,
            "part": 2,
            "text": "接着要求给游戏区域留出空间，别让常驻说明挡住操作。帮助可以收起，但要留下能找到的入口。这里把“界面清楚”变成了信息放哪里、何时显示的具体做法。"
          },
          {
            "scene": "b11",
            "step": 1,
            "part": 1,
            "text": "如果按这条指导把长说明收起来，要在同一游戏、相同窗口大小和状态下比较：操作区是不是更清楚，分数、时间等关键状态还在不在。"
          },
          {
            "scene": "b11",
            "step": 1,
            "part": 2,
            "text": "还要实际打开、收起帮助。画面简洁以后，需要的信息仍得找得到，操作也不能被遮住。"
          },
          {
            "scene": "b11",
            "step": 2,
            "part": 1,
            "text": "入口的 HUD and menu direction 就指向这份 Skill。它有自己能承担的工作：根据当前游戏安排界面，再检查信息和操作。即使不做整套规划，只调整界面，也能选用这份指导。"
          },
          {
            "scene": "b11",
            "step": 2,
            "part": 2,
            "text": "这些引用里也有只提供判断资料的文件。接着看两份 Skill 共用的技术选型资料。"
          },
          {
            "scene": "b11",
            "step": 3,
            "part": 1,
            "text": "game-ui-frontend 要求关键状态容易看到，低频设置和长说明可以收进菜单或抽屉，并保护游戏操作区。它把“界面清楚”展开成了具体选择：什么需要一直显示，什么可以按需打开，什么不能挡住操作。\n这已经是一套完成界面工作的做法，而不是一张供人查询的知识表。要用它，需要提供当前游戏、现有界面和调整目标；之后还要检查状态是否看得见、操作是否受阻。"
          },
          {
            "scene": "b11",
            "step": 4,
            "part": 1,
            "text": "如果按这条要求收起长说明，判断改善不能只看页面是不是更空。要在同一游戏、相同窗口和状态下比较，确认操作区更清楚，同时分数、时间等关键状态仍容易找到。还要打开、收起帮助，检查入口能找到、内容能使用。"
          },
          {
            "scene": "b11",
            "step": 5,
            "part": 1,
            "text": "入口的 HUD and menu direction 指向这份 Skill，需要界面工作时可以继续读取它。即使不做整套规划，只调整已有游戏的界面，也能单独提出这项任务。\n这就是独立 Skill 的理由：它能接到明确输入，按一套方法完成一项工作。接着看另一种引用，目标是供多项工作查阅同一份知识。"
          }
        ],
        "prep": "专项示例沿用 game-ui-frontend。旧 game-playtest 口播继续按原坐标保留，供历史取材。界面前后实录尚待补；当前已写可照读的观察方法，录制前须据真实变化核对画面和讲述，不预写改善结果。",
        "boundary": "界面前后画面与独立调用待补；当前按有效性假设安排对照，不预填具体变化。"
      },
      {
        "id": "b12",
        "group": "理解引用与复用",
        "title": "两份 Skill 可以共用同一份资料",
        "status": "两份固定文件与相对路径已回读；原文在外部页，公开仓库只保存关系和定位。",
        "reuse": [
          {
            "scene": "b12",
            "step": 9,
            "part": 1,
            "text": "刚才引用另一份 Skill，是为了使用一套完成界面工作的方法。接下来共用的则是一份技术选型说明。\n整体规划需要选择技术，安排项目基础结构时也需要参考同样的条件。如果两边各抄一份，更新条件时就得改两处，还可能改得不一致。因此可以把选型说明单独保存，让两份 Skill 都引用它。"
          },
          {
            "scene": "b12",
            "step": 10,
            "part": 1,
            "text": "在 game-studio 的 References，也就是参考资料部分，有一条路径指向 engine-selection.md。这份文件保存较详细的技术选型条件。\ngame-studio 自己保留默认建议，遇到需要进一步判断的任务，再让 Codex 沿这条路径读取说明。"
          },
          {
            "scene": "b12",
            "step": 11,
            "part": 1,
            "text": "这里再打开另一份 Skill，叫 web-game-foundations，负责浏览器游戏的项目基础结构。它也需要用到技术选型的知识。\n这份文件的 References 中，同样指向 engine-selection.md。两个路径解析后是同一份文件，不是两份内容相似的副本。以后修改选型说明，就能只维护这一处。"
          },
          {
            "scene": "b12",
            "step": 12,
            "part": 1,
            "text": "打开 engine-selection.md，可以看到选择 Phaser 时要考虑的条件，例如游戏以二维图片或地图为主，需要相机和场景管理等现成能力。Codex 可以据此结合项目判断，而不是只记住一个框架名称。\n这样我们就分清了两种引用：参考资料提供作决定需要的知识；另一份 Skill 提供完成一项工作的指导。"
          },
          {
            "scene": "b12",
            "step": 13,
            "part": 1,
            "text": "在刚才那次修改版调用中，也能找到 Codex 读取 engine-selection.md 的记录，说明这份资料在那次任务里确实被读到了。\n以后我们自己引用资料，不能只把文件放在旁边，还要在正文写清什么时候读、读哪份、用来解决什么问题。调用以后，再检查相关任务是否真的读到了它。"
          }
        ],
        "screens": [
          {
            "surface": "引用对应表 · 共享资料与专项 Skill 路径",
            "action": "先指共享资料与专项工作两类目标，承接界面示例；随后在入口 References 核对选型资料引用。",
            "materials": [
              "sharing"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "game-studio · References",
            "action": "回到已打开的入口文件，在 References 找到 ../../references/engine-selection.md。",
            "materials": [
              "entry"
            ],
            "reuse": [
              1
            ]
          },
          {
            "surface": "web-game-foundations · References",
            "action": "另开 web-game-foundations，在 References 核对同一相对路径；再打开 engine-selection.md。",
            "materials": [
              "foundations",
              "engine"
            ],
            "reuse": [
              2
            ]
          },
          {
            "surface": "engine-selection.md · 二维游戏选型条件",
            "action": "在共享资料中看二维选型条件；随后回到 modified 的实际读取表。",
            "materials": [
              "engine",
              "routing"
            ],
            "reuse": [
              3
            ]
          },
          {
            "surface": "modified · 共享资料的实际读取记录",
            "action": "回到实际读取表，指认 engine-selection.md 所在记录；随后返回 PPT 第 6 页“正文留下会影响行动的指导”。",
            "materials": [
              "routing",
              "core"
            ],
            "reuse": [
              4
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "p08",
            "step": 0,
            "part": 12,
            "text": "刚才的界面 Skill，指导完成一项界面工作；选型资料则提供作技术决定时要查的条件。复用一项工作和共用一份知识，解决的是两种需要。"
          },
          {
            "scene": "p08",
            "step": 1,
            "part": 5,
            "text": "这次先读入口，再读相关专项指导和资料，就是按任务需要逐步取得内容。完整规划涉及几方面工作，一次可能读好几份；只处理一项任务，就不必把整套资料全读一遍。"
          },
          {
            "scene": "b12",
            "step": 0,
            "part": 1,
            "text": "game-studio 的 References 指向 engine-selection.md。详细选型条件放在这个文件里，入口不再重复写一遍。"
          },
          {
            "scene": "b12",
            "step": 1,
            "part": 1,
            "text": "web-game-foundations 也指向同一个文件。它安排项目基础结构时，同样需要技术依据。以后选型条件更新，改这份共同资料就够了。"
          },
          {
            "scene": "b12",
            "step": 2,
            "part": 1,
            "text": "比如这里建议，俯视或侧视的二维游戏，需要现成相机和场景管理时，可以考虑 Phaser。查到这些条件，才能结合自己的项目理解入口的默认建议。"
          },
          {
            "scene": "b12",
            "step": 2,
            "part": 2,
            "text": "所以，要复用的是一组选型依据，就共用资料；要让 AI 按一套方法完成界面调整，就引用对应 Skill，并交代这次的游戏和调整要求。"
          },
          {
            "scene": "b12",
            "step": 3,
            "part": 1,
            "text": "这次记录也能找到 engine-selection.md 的读取，说明共同资料在这一轮确实被取得了。不过，文件有引用、实际读到、根据条件作出合适选择，仍是不同的判断，不能互相代替。\n以后自己组织文件时，可以先看需要复用什么：两项工作都要查同一组选型条件，就维护一份资料；希望另一份指导接手完成界面调整，就引用职责清楚的 Skill。这样拆，是按工作和知识的用途拆。\n"
          },
          {
            "scene": "b12",
            "step": 4,
            "part": 1,
            "text": "如果两项工作都需要技术选型条件，各自在正文里抄一份，更新时就可能一份改了、一份没改。需要统一维护的是知识，因此可以让它们引用同一份资料。它和刚才转交界面工作，目的不同。"
          },
          {
            "scene": "b12",
            "step": 5,
            "part": 1,
            "text": "game-studio 的 References 把详细选型条件指向 engine-selection.md。入口保留默认建议，需要进一步判断时再查具体条件，正文不必重复整份说明。"
          },
          {
            "scene": "b12",
            "step": 6,
            "part": 1,
            "text": "web-game-foundations 也引用同一个文件。项目规划和基础结构两项工作需要共同依据，共用资料就能让依据只维护一处。这里看两个路径，是为了核对它们是否真的指向同一个对象。"
          },
          {
            "scene": "b12",
            "step": 7,
            "part": 1,
            "text": "资料说到二维图片或地图，以及相机、场景管理等需求，可以据此考虑 Phaser。我们使用的是这些判断条件，再结合当前项目作选择；不是因为文件推荐某框架，就忽略已有技术约束。\n所以，要共用一组选型条件，可以引用资料；要让 AI 完成一次界面调整，则需要职责和做法完整的 Skill。"
          },
          {
            "scene": "b12",
            "step": 8,
            "part": 1,
            "text": "同轮记录也能找到这份资料的读取。这只能说明它在本轮被取得，是否恰当地用于选型，还要回到方案里的理由核对。\n自己写引用时，也要交代什么时候读、读哪份、解决什么问题。仅把文件放在旁边，模型未必知道何时需要；只写了路径，也不能代替实际调用后的核对。"
          }
        ]
      },
      {
        "id": "b13",
        "group": "归纳写法",
        "title": "正文留下会影响每次行动的指导",
        "status": "这是可审阅的上屏内容样稿，正式 PPT 未制作；原 p08 的三大块布局不恢复。",
        "reuse": [
          {
            "scene": "b13",
            "step": 2,
            "part": 1,
            "text": "回到 PPT，把刚才的几种写法放在一起。以后自己写 Skill，哪些内容应留在正文，哪些可以放到参考资料里？\n像“每项检查写清起点、操作和可见结果”，是每次生成检查计划都需要的要求，应留在正文。技术选型的长说明，或者只针对某类游戏的长例子，可以单独放进 Reference，也就是参考资料文件；正文留下读取条件和路径。\n还有一类话可以删：比如反复写“认真检查、保证质量”，却没有补充检查对象和做法。删掉这样的重复，不会损失具体要求。\n因此，正文并不是越短越好。要先保留完成任务必需的指导，再把只在特定情况需要的长资料移出去，而不是为了凑某个行数删掉关键要求。"
          }
        ],
        "screens": [
          {
            "surface": "PPT 第 6 页 · 正文与 Reference 的取舍图",
            "action": "第 1 步看正文中始终需要的输入、输出要求；第 2 步看长例子移入 Reference，正文留下读取条件与入口，并划去重复口号；第 3 步收束长度判断。随后翻到第 7 页。",
            "materials": [
              "core"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "prepMaterials": [
          "official"
        ],
        "previousReuse": [
          {
            "scene": "b13",
            "step": 0,
            "part": 1,
            "text": "回头看正文取舍。像刚才“每项检查写出前置状态、操作和可见结果”，每次写计划都需要，应留在正文。输入不足时怎么办，也会改变它接下来的动作，不能藏在没有读取入口的资料里。"
          },
          {
            "scene": "b13",
            "step": 0,
            "part": 2,
            "text": "只有翻牌才需要的长例子，可以放进 Reference，在正文说明什么时候读。反复写“认真检查、保证质量”，却没补检查对象和做法，就可以删去。"
          },
          {
            "scene": "b13",
            "step": 0,
            "part": 3,
            "text": "正文不设统一行数。比如删掉输入不足时的处理，文件是短了，模型却不知道何时该停下来。先保住这些必要做法，再考虑压缩和引用。"
          },
          {
            "scene": "b13",
            "step": 1,
            "part": 1,
            "text": "现在可以据用途决定正文留下什么。像刚才“每项检查写起点、操作、可见结果”，每次生成计划都需要，留在正文；缺核心规则时先问，也会改变任务下一步，不能为了缩短而删掉。\n很长的翻牌案例只在翻牌任务中有用，可以移到 Reference，但正文保留什么时候读和从哪里读。“认真检查、保证质量”若没有增加具体对象和做法，就可以删去。\n因此长度取舍看的是内容是否影响行动、是否每次需要，而不是统一压到多少行。否则文件虽然变短，必要条件却可能丢了。"
          }
        ]
      },
      {
        "id": "b14",
        "group": "归纳写法",
        "title": "先判断需要资料、另一项工作还是工具处理",
        "status": "课程写法示例与上游原句分开；本轮不新增脚本任务或伪造资源运行。",
        "reuse": [
          {
            "scene": "b14",
            "step": 2,
            "part": 1,
            "text": "再回顾文件之间的分工。技术选型条件属于知识，多份 Skill 可以共用一份资料；界面设计能够单独成为一项任务，所以适合有自己的 Skill。\n除了资料和其他 Skill，有些任务还会配脚本和素材。例如反复整理图片，可以由脚本执行固定处理；已经做好的模板、待处理的图片，可以作为配套素材。正文要说明这些文件什么时候用、输入什么、会得到什么，以及怎样检查结果。\n不过，没有这类需要就不必增加文件。下面我们自己写一份小 Skill，专门把游戏规则整理成手动检查计划。先用一个 SKILL.md，就能开始。"
          }
        ],
        "screens": [
          {
            "surface": "PPT 第 7 页 · 资料与独立工作怎样分工",
            "action": "先沿两个文件的连线确认共用 engine-selection，再对照独立界面工作需要的输入与提供的指导；第 2 步增加脚本、素材职责，第 3 步回到单文件起步。随后打开编写演示。",
            "materials": [
              "split",
              "create"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "prepMaterials": [
          "official"
        ],
        "previousReuse": [
          {
            "scene": "b14",
            "step": 0,
            "part": 1,
            "text": "再看拆分。两份 Skill 需要同一组选型条件，就像刚才一样共用资料；要承担一次完整的界面调整或试玩，有自己的输入和交付物，才适合另写 Skill。不是内容一长，就一律拆成新的 Skill。"
          },
          {
            "scene": "b14",
            "step": 0,
            "part": 2,
            "text": "重复计算或固定的文件处理，可以配脚本交给工具执行；已有模板、待处理图片则作为素材。入口要交代用途、条件和输入输出，有这项需要再配这些文件。"
          },
          {
            "scene": "b14",
            "step": 0,
            "part": 3,
            "text": "我们自己写一份时，先选一项明确任务：把小游戏规则整理成人能照着做的手动检查计划。这件事先用一个 SKILL.md，就可以开始。"
          },
          {
            "scene": "b14",
            "step": 1,
            "part": 1,
            "text": "拆文件也按用途决定。共同知识用一份资料；有自己输入、做法和交付物的工作，才适合独立 Skill。正文长，不是另建 Skill 的充分理由。\n如果有重复计算或确定的文件处理，可以配脚本；需要套用的模板、待处理的图片可以作为素材。入口仍要交代用途、输入输出和检查方法。有具体需要再增加这些资源。\n我们现在只做一件事：把小游戏规则整理成人能照着做的手动检查计划。先用一个 SKILL.md，把这件事讲明白。"
          }
        ]
      },
      {
        "id": "b15",
        "group": "从零写出最小 Skill",
        "title": "从任务边界写名称和描述",
        "status": "已恢复真实编辑器的新建、输入与保存操作；完整 v3 有历史调用，本轮未进行新的录制或模型调用。",
        "reuse": [
          {
            "scene": "b15",
            "step": 4,
            "part": 1,
            "text": "刚才我们修改的是别人写好的规划指导。现在从空文件开始，写一份自己的 Skill：用户给出小游戏规则，Codex 根据规则生成一份人能照着做的检查计划。\n我们希望计划里的动作能执行，结果能观察，而且预期来自游戏规则。这份 Skill 只负责指导 Codex 写计划，实际打开游戏检查是另一项工作。这次也不让它修改代码。\n下面采用的是备课时已经试用过的写法。我先把文件写出来，再通过几次保存的调用，说明这种写法为什么需要，以及还有什么问题。"
          },
          {
            "scene": "b15",
            "step": 5,
            "part": 1,
            "text": "文件叫 SKILL.md，放在项目的 .agents/skills/game-check-plan/ 目录下。先写文件头：name 是 game-check-plan；description 说明根据小游戏规则编写手动检查计划，适合准备验收步骤、结束和重开清单，不负责实际试玩。\n这和前面学过的一样：让 AI 先从描述知道这份 Skill 适合什么任务。接下来写正文，说明选用以后怎样生成计划。"
          }
        ],
        "screens": [
          {
            "surface": "编辑器 · 空目录中新建空白 SKILL.md",
            "action": "在独立 created 项目中打开空目录，实际新建 SKILL.md；本段说清输入与交付物，随后填写文件头。",
            "materials": [
              "practice"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "同一编辑器 · 实际填写 name 与 description",
            "action": "输入示例文件前四行并保存。备查文件仅用于取文字，不切到网页四态代替写入；随后继续在此文件写正文。",
            "materials": [
              "example",
              "create"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "boundary": "现场从空文件重建已试用的课程示例，不把它讲成未经准备的一次写作成功。",
        "prepMaterials": [
          "discovery"
        ],
        "previousReuse": [
          {
            "scene": "b15",
            "step": 0,
            "part": 1,
            "text": "现在自己写一份。输入是游戏规则，输出是人能照着做的手动检查计划。步骤要能执行，结果要能观察，预期则依据游戏规则来写。"
          },
          {
            "scene": "b15",
            "step": 0,
            "part": 2,
            "text": "这份 Skill 只写计划，不打开游戏，也不修改代码。我们先用一个文件完成这项任务。"
          },
          {
            "scene": "b15",
            "step": 1,
            "part": 1,
            "text": "name 写 game-check-plan。description 写明根据小游戏规则编写手动检查计划，适用于验收步骤、结束或重开清单，并说明不负责实际试玩。这样，选用时就能从描述判断它负责什么。"
          },
          {
            "scene": "b15",
            "step": 1,
            "part": 2,
            "text": "文件放在项目的 .agents/skills/game-check-plan/SKILL.md。这里先保存名称和描述，接着写完成任务需要的方法。本例采用备课时已经试过并修订的写法，后面会看其中一条是怎样根据失败返回改出来的。"
          },
          {
            "scene": "b15",
            "step": 2,
            "part": 1,
            "text": "从空文件开始之前，先定怎样才算完成：拿到游戏规则，交出能执行的检查步骤，预期有规则依据，结果能观察。这三个要求决定正文该写什么。\n本例只生成计划，不负责打开游戏执行，也不修改代码。边界越清楚，之后越容易判断它缺了什么、是否越出了任务。我们按备课时已经试用并修订的版本来写，不把它讲成临时一次就写对了。"
          },
          {
            "scene": "b15",
            "step": 3,
            "part": 1,
            "text": "name 写 game-check-plan。description 说明根据小游戏规则编写手动检查计划，适用于验收步骤和结束、重开清单，并说明不负责实际试玩。先让选用者知道它能接什么任务。\n文件保存在项目的 .agents/skills/game-check-plan/SKILL.md，接下来把刚才的成功标准变成正文中的做法。"
          }
        ]
      },
      {
        "id": "b16",
        "group": "从零写出最小 Skill",
        "title": "把输入分支和输出要求写成可执行说明",
        "status": "当前 v3 的来由在“根据失败返回，把提醒改成明确分支”中回看；不把三版试跑假装成一次即时写作成功。",
        "reuse": [
          {
            "scene": "b16",
            "step": 4,
            "part": 1,
            "text": "首先要解决的是：用户给的信息够不够？例如只说游戏有一个重新开始按钮，却没说点完以后恢复哪些状态，Codex 就没有依据写预期结果。\n所以正文先检查三件事：玩家怎么操作，什么时候结束，重开后怎么办。缺少其中任何一项，就只提出需要补充的问题，然后结束，本次不生成计划，也不用假定玩法填空。这里把问题数限制为最多五个，是这份示例控制提问数量的安排。\n把这个条件写清楚，是为了让 Codex 在信息不足时先停下来。稍后我们会看一次早期版本没有停下来的真实返回。"
          },
          {
            "scene": "b16",
            "step": 5,
            "part": 1,
            "text": "规则足够以后，再写计划。我们要求先选六到十项关键检查，覆盖正常游玩、游戏结束和重新开始；每项都写起点、操作、可见结果。项数是这份短计划的安排，可以按任务调整。\n操作还要足以看见预期。比如要判断盖住的牌有哪些图案，就得先翻开或记录，不能只看牌背就判断配对组成。预期也不能凭空补：规则没规定的文案、计数时点，应列为待确认。\n遇到随机结果，要查规则约束。比如重新洗牌可能碰巧和上一局同序，不能把“每次顺序必须不同”当成要求。\n最后写明：只交付计划，步骤尚未执行。正文写到这里，已经说清输入不够怎么办、输入足够怎样做，以及最后交什么。我们保存文件，用一条具体请求试一试。"
          }
        ],
        "screens": [
          {
            "surface": "编辑器 · 写入任务边界和输入分支",
            "action": "从示例取任务范围及输入不足分支，实际输入到刚建的文件并保存；继续在同一文件编写方法。",
            "materials": [
              "create"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "同一编辑器 · 写完正文并保存",
            "action": "逐段输入检查范围、三项结构、可观察动作、未知与随机结果处理、待执行声明。保存后核对完整文件；先不打开历史调用，下一段到项目中启动新会话。",
            "materials": [
              "example",
              "practice"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b16",
            "step": 0,
            "part": 1,
            "text": "先检查玩家怎么操作、怎样结束、重开后怎么办。没有这些规则，就无法写出可靠的预期。比如只知道有重开按钮，还不知道点击后哪些状态该恢复，不能替用户编一套规则来验收。"
          },
          {
            "scene": "b16",
            "step": 0,
            "part": 2,
            "text": "所以缺少其中任何一项，就先提问，本次不生成计划。这里限定最多五问，是为了先问关键缺口。只写“缺规则时注意补充”，它仍可能先假定玩法继续写；这一条要求它停在提问。"
          },
          {
            "scene": "b16",
            "step": 1,
            "part": 1,
            "text": "规则够了，再选检查项。先覆盖正常玩一轮、结束和重开，每项用刚才的三项结构。这里选六到十项，是这份小计划的规模安排，可以随任务调整。动作还得足以看见结果：要核对盖住的牌是什么图案，就先写翻开或记录的步骤。"
          },
          {
            "scene": "b16",
            "step": 1,
            "part": 2,
            "text": "预期依据用户规则写，没规定的文案、计数时点留作待确认。随机结果也不能随意判错：重新洗牌可能恰好同序，所以检查牌数、配对组成等规则是否满足，不要求每次顺序一定改变。"
          },
          {
            "scene": "b16",
            "step": 1,
            "part": 3,
            "text": "最后标明计划尚未执行。自己写第一版时，先把任务、必要输入、做法和输出说清楚，再用返回找遗漏，不需要一开始就想齐所有边界。"
          },
          {
            "scene": "b16",
            "step": 2,
            "part": 1,
            "text": "计划要有规则依据，所以先检查输入是否给出玩家操作、结束条件和重开规则。只知道有重开按钮，却不知道重开后恢复什么，就不能替用户编一个“正确结果”。\n因此缺少其中任何一项时，只提最多五个关键问题并结束，本次不生成计划，也不用假定玩法填空。这里的“五个”是示例的规模安排；关键是把缺少什么、该做什么、到哪里停写清楚。"
          },
          {
            "scene": "b16",
            "step": 3,
            "part": 1,
            "text": "规则足够时，再生成六到十项检查，覆盖正常游玩、结束和重开。每项写起点、操作、可见结果，这是为了让另一个人照着做。项数可按任务调整。\n预期必须来自当前规则，动作也要足以看见预期。比如要核对隐藏牌面，就要先安排揭示或记录，不能让人只看牌背就判断配对组成。没规定的文案、计数时点列为待确认；重新洗牌可能碰巧同序，不能把每次顺序不同当成必过条件。\n最后声明计划尚未执行。写第一版时，把任务、必要输入、关键做法和输出说清楚，再用实际返回找缺口；不必一开始就加满资料和脚本。"
          }
        ]
      },
      {
        "id": "b17",
        "group": "从零写出最小 Skill",
        "title": "文件写好以后，用一条完整规则调用",
        "status": "讲述线已恢复保存后在项目中启动新会话、发送任务、等待回放及返回现场核对；本轮未新增调用。",
        "reuse": [
          {
            "scene": "b17",
            "step": 6,
            "part": 1,
            "text": "这次请求指定使用刚写好的 game-check-plan，并提供完整的翻牌规则：十二张牌、六对图案，每翻两张算一步；不匹配约等一秒，期间不能翻第三张；全部配对结束，重开洗牌，步数和配对进度归零。\n牌数、时间和计步方式都在这次请求里。Skill 正文写的是生成检查计划的方法，不应该把某个游戏的数值写成通用要求。\n现在在这个项目的新会话中发送请求，看看 Codex 能否根据这些规则写计划。"
          },
          {
            "scene": "b17",
            "step": 7,
            "part": 1,
            "text": "等待期间，先打开备课时用同一份 Skill 和这条翻牌请求得到的记录。这是之前的调用，不是刚刚提交任务的结果。\n当时的会话能够找到 game-check-plan，工具记录也显示读取了正文。这样就确认了那次任务不只是看到了名称，还取得了文件里的具体要求。接下来回到现在的会话。"
          },
          {
            "scene": "b17",
            "step": 8,
            "part": 1,
            "text": "本次会话也先核对 Codex 是否读到了刚保存的 game-check-plan，再用请求中的规则检查实际计划：正常翻牌、结束、重开有没有覆盖？动作能不能执行，预期结果是否有规则依据？\n发现缺项时，先指出具体问题。如果任务规则没说清，就补规则；如果方法没写清或输出没有照做，再查正文并修订、重新调用。\n接下来我们看刚才打开的历史计划。里面有两条具体问题，能帮助我们练习怎样审查。"
          }
        ],
        "screens": [
          {
            "surface": "Codex · 刚创建项目的新会话，粘贴完整翻牌请求并发送",
            "action": "从完整翻牌材料复制请求，在 created 项目新会话发送；请求中的名称、规则和范围读清后发送，等待时看历史。",
            "materials": [
              "memory",
              "practice"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "等待期间 · 历史 v3 翻牌调用的发现与读取",
            "action": "另开已保存调用，看可用说明与实际读取；明确历史身份，讲完返回刚才的现场会话。",
            "materials": [
              "memory"
            ],
            "reuse": [
              1
            ]
          },
          {
            "surface": "Codex · 返回本次完整规则调用",
            "action": "核对本次选用与完整正文，再对照游戏规则检查返回。发现遗漏先说明具体项、修改并复核；完成后切历史返回，讲 C2/C5 两个已有问题。",
            "materials": [
              "memory-review"
            ],
            "reuse": [
              2
            ]
          }
        ],
        "boundary": "现场调用与 11 月 7 日 v3 预备回放分开；等待时看历史，随后回现场核对，不预填现场项数或成功结论。",
        "prepMaterials": [
          "materials"
        ],
        "previousReuse": [
          {
            "scene": "b17",
            "step": 0,
            "part": 1,
            "text": "文件保存好了，在这个项目中开一个新会话，用 game-check-plan 处理这条完整翻牌规则。请求给了十二张牌、六对图案，每翻两张算一步；不匹配约等一秒，期间不能翻第三张；全部配对结束，重开洗牌并把计步归零。"
          },
          {
            "scene": "b17",
            "step": 0,
            "part": 2,
            "text": "牌数和等待时间都放在本次请求里。正文写的是编计划的方法，换一个游戏时就换规则，不必先改 Skill。"
          },
          {
            "scene": "b17",
            "step": 1,
            "part": 1,
            "text": "等待时看一次保存的调用。会话可用说明里有 game-check-plan，工具记录随后读取了它的正文。文件放进项目后，要在会话中确认能找到它，也要确认具体指导已经读进来。"
          },
          {
            "scene": "b17",
            "step": 2,
            "part": 1,
            "text": "回到这次任务，先核对选用的是刚写的 game-check-plan，读到的内容也与保存的文件一致。再看计划有没有覆盖正常翻牌、结束和重开，每项是否写出了起始状态、操作和能观察的结果。读到文件以后，还要逐项对照游戏规则。"
          },
          {
            "scene": "b17",
            "step": 3,
            "part": 1,
            "text": "现在用完整翻牌规则调用。请求给出十二张牌、六对图案，每翻两张算一步，不匹配约等一秒，期间不能翻第三张；全部配对结束，重开洗牌并把计步归零。\n这些具体数值和规则放在本次任务里，正文保留生成计划的方法。换游戏时应该能替换规则继续使用。保存文件后在项目新会话发送请求，先检查它能不能按完整输入完成这项工作。"
          },
          {
            "scene": "b17",
            "step": 4,
            "part": 1,
            "text": "等待时看保存的调用。可用说明中有 game-check-plan，工具也读取了正文。这分别确认会话能找到它，以及具体指导已进入任务。文件保存好了还需要这一步，避免把“文件在磁盘上”当成“这一轮已经用上”。随后回本次会话看输出。"
          },
          {
            "scene": "b17",
            "step": 5,
            "part": 1,
            "text": "回到本次结果，按实际情况核对选用对象和正文版本，再拿游戏规则对照检查项。有没有正常循环、结束、重开？动作能否做到，结果是否看得见，预期是否有规则依据？\n缺了哪一项就定位那一项，分清该补输入还是改正文，修订后再调用。下面的两个问题来自保存的历史返回，不预设这次也有相同错误。"
          }
        ]
      },
      {
        "id": "b18",
        "group": "从零写出最小 Skill",
        "title": "照着返回想一遍，步骤能不能执行",
        "status": "本轮未实际试玩，也未对这两条建议另跑模型；已有材料中的瑕疵如实保留。",
        "reuse": [
          {
            "scene": "b18",
            "step": 4,
            "part": 1,
            "text": "这份备课时生成的翻牌计划共有十项，注明了尚未执行。现在先看第二项和第五项。\n可以暂停，按计划设定的起点，在脑中执行一遍操作：照这些步骤做，是否一定能出现写出的结果？想过以后再看核对意见。"
          },
          {
            "scene": "b18",
            "step": 5,
            "part": 1,
            "text": "第二项的标题要检查翻开两张不匹配的牌，但操作写的是“任意两张”。如果恰好翻到一对，就进不了不匹配状态，也无法接着检查等待和锁牌。应先找到图案不同的一对，盖回后再用它检查。这里需要改的是操作步骤，不是补充游戏规则。\n第五项允许从任意进行中的状态开始，却把配对后的进度固定写成一。假如原来已经配好两对，再配一对应是三。预期应写成原进度加一，才和起点一致。\n这两条是我们对历史返回的修改建议，还没有重新验证。它们说明，计划有了起点、动作、结果以后，仍要检查三者是否对得上。下面再看输入信息本来就不足的情况。"
          }
        ],
        "screens": [
          {
            "surface": "历史 v3 翻牌调用 · 完整返回 C1–C10",
            "action": "看完整返回中的 C2、C5，留出暂停判断时间，再打开对应核对意见；不提前展开解析。",
            "materials": [
              "memory",
              "memory-review"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "翻牌核对意见 · C2 与 C5 原句",
            "action": "指 C2 的“任意两张”和 C5 的“变为 1”，对照旁边的讲师意见；随后切到历史修订案例。",
            "materials": [
              "memory-review",
              "missing"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "boundary": "C2、C5 属于保存的历史返回；现场没有相同问题时，也不把这两条套到本次输出。",
        "previousReuse": [
          {
            "scene": "b18",
            "step": 0,
            "part": 1,
            "text": "保存的返回列了十项，也注明尚未执行。我们先不按项数判断质量，而是试着在脑中照做：给定这个起点，按它的操作，真的会出现预期结果吗？可以暂停看第二项和第五项，判断问题出在游戏规则没给够，还是检查步骤本身没写对。\n"
          },
          {
            "scene": "b18",
            "step": 1,
            "part": 1,
            "text": "第二项要检查不匹配，却让人翻“任意两张”。任意两张也可能正好配对。游戏规则并不缺，这里缺的是进入不匹配状态的办法：先观察牌面，找出不匹配的一对，盖回后再用它检查后续行为。"
          },
          {
            "scene": "b18",
            "step": 1,
            "part": 2,
            "text": "第五项允许从任意已有进度开始，却说配对后进度“变为一”。已经配好两对，再配一对应该是三。这项应核对原进度加一，而不是固定为一。"
          },
          {
            "scene": "b18",
            "step": 1,
            "part": 3,
            "text": "这两条是对保存返回的修订建议，还没有另行验证。接着回看一个已经修改并重新调用的案例：缺少核心玩法时，它曾经继续编检查表。"
          },
          {
            "scene": "b18",
            "step": 2,
            "part": 1,
            "text": "这份历史返回共有十项，也声明尚未执行。我们先试着照步骤走一遍，而不按项数判断质量。可以暂停看第二项和第五项：从它给的起点，执行它写的动作，预期是否一定成立？"
          },
          {
            "scene": "b18",
            "step": 3,
            "part": 1,
            "text": "第二项要检查不匹配，却让人翻任意两张，恰好配对就进不了目标状态。这不是规则缺失，而是步骤没保证前提。应先找到不匹配的一对，盖回后再用它检查。\n第五项允许从任意已有进度开始，却预期配对数变为一。已经有两对，再成功一对应是三；这里应检查原进度加一。起点变了，预期也要随之计算。\n这两条说明，即使正文写了三项结构，仍要审查前提、动作和结果之间是否成立。这是对历史返回的修订建议，尚未重新验证。接下来换看输入不足时应怎样处理。"
          }
        ]
      },
      {
        "id": "b19",
        "group": "从零写出最小 Skill",
        "title": "根据失败返回，把提醒改成明确分支",
        "status": "v2、v3 请求一致，版本与读取均留证；前后返回未被润色。",
        "reuse": [
          {
            "scene": "b19",
            "step": 4,
            "part": 1,
            "text": "刚才我们给了完整规则。备课时我还试过只告诉 Codex：游戏有开始和重新开始按钮，具体玩法和结束条件尚未确定。想检查的是，这种情况下 Codex 会先问清楚，还是继续编计划。\n现在看到的是这份 Skill 较早的第二版，以及当时的返回。第二版已经提醒缺规则要先问，但没有明确要求停止生成计划。Codex 仍然列出了假定的游戏状态和检查表。玩法还没确定，这些预期就缺少依据。\n因此我们回到正文，把信息不足时该怎样处理写得更明确。"
          },
          {
            "scene": "b19",
            "step": 5,
            "part": 1,
            "text": "我们把修订后的文件记作第三版，也就是刚才示范编写的版本。正文明确规定：玩家操作、结束条件、重开规则缺任何一项，就只提问并结束，不生成计划，也不用假定玩法填空。\n然后用同一条缺失规则的请求再次调用。记录显示 Codex 读到了第三版，返回提出五个补充问题，没有再生成检查表。这次修改在这条请求上达到了目的。\n和前面的翻牌步骤问题不同，这里修订的是信息不足时的处理方式。用完整规则调用，看计划能否写好；用缺失规则调用，看 Codex 是否会先停下来提问，两种情况都需要检查。"
          }
        ],
        "screens": [
          {
            "surface": "历史修订 · 缺失规则的相同请求与 v2 返回",
            "action": "先看只给“开始／重新开始”按钮的请求，再看 v2 仍生成的检查表；随后看文件差异。",
            "materials": [
              "missing"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "历史修订 · v2 → v3 差异与 v3 返回",
            "action": "指条件、动作、停止点的改动；再核对 v3 读取以及同请求的五个问题，最后打开躲避调用。",
            "materials": [
              "missing",
              "transfer"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "boundary": "这里回看当前 v3 之前的修订过程；两版使用同一条缺失规则请求。",
        "previousReuse": [
          {
            "scene": "b19",
            "step": 0,
            "part": 1,
            "text": "刚才两条问题，规则已经足够，应改检查步骤。这里换一种失败：请求只说有开始和重新开始按钮，没有核心玩法和结束条件。第二版却用假定状态填出了检查表。表格再完整，也没有依据判断游戏对不对。"
          },
          {
            "scene": "b19",
            "step": 0,
            "part": 2,
            "text": "正文原本提醒缺规则要问，但没有把停止条件约束清楚。我们要改的是面对这类缺失输入时的处理方法；随便给本次请求补一套玩法，虽然能继续生成，却检验不了这个缺口有没有修好。\n"
          },
          {
            "scene": "b19",
            "step": 1,
            "part": 1,
            "text": "第三版把“缺规则要问”展开成了可以核对的分支：玩家操作、结束条件、重开规则缺任何一项，就只提问题并结束，不生成计划，也不用假定玩法填空。关键变化是明确了什么时候停、停下来做什么，以及不能继续做什么。"
          },
          {
            "scene": "b19",
            "step": 1,
            "part": 2,
            "text": "同一个缺失规则请求再次调用，确认读到第三版后，返回提出五个补充问题，没有再列检查表。这支持本次修订在这条输入上起了作用。我们还要换一种玩法看，因为一份可复用的方法，不能只会应对刚才的翻牌例子。\n"
          },
          {
            "scene": "b19",
            "step": 2,
            "part": 1,
            "text": "请求只说有开始和重新开始按钮，没有玩法和结束条件。和刚才不同，这里没有足够规则写预期。第二版虽然提醒缺规则先问，返回仍按假定状态填出了计划。\n我们要修的是遇到这类输入时不要继续编。随意补一套玩法能让当前任务继续，却不能解决这个处理问题，所以要回到正文，把停止分支写明确。"
          },
          {
            "scene": "b19",
            "step": 3,
            "part": 1,
            "text": "第三版规定，玩家操作、结束条件、重开规则缺任何一项，就只提问并结束，不生成计划，不用假定玩法填空。它把泛泛提醒变成了条件、动作和停止点。\n同一个缺失输入请求再次调用，核对读到第三版后，返回只提出五个问题，没有生成检查表。这支持修订在这条输入上改变了行为，不能由此宣布所有输入都正确。完整规则还要查步骤，换玩法还要查复用。"
          }
        ]
      },
      {
        "id": "b20",
        "group": "从零写出最小 Skill",
        "title": "换成躲避，规则和预期也要跟着换",
        "status": "这只是检查计划任务，与 3.3 完整游戏开发分开；未执行游戏检查。",
        "reuse": [
          {
            "scene": "b20",
            "step": 4,
            "part": 1,
            "text": "还有一种情况要试：换了游戏，这份 Skill 能不能继续用？所以备课时，我保留第三版正文不变，把输入换成躲避收集游戏。\n请求规定方向键移动，碰到金币加分，碰到障碍或六十秒用完就结束；重开后恢复初始位置，分数归零，时间回到六十秒。仍然只让 Codex 写计划。\n这样能检查正文提供的是生成计划的方法，还是把翻牌的答案写死了。"
          },
          {
            "scene": "b20",
            "step": 5,
            "part": 1,
            "text": "这次计划围绕移动、得分、碰撞、倒计时和重开展开，没有继续写牌数和配对。说明在这个例子里，同一份指导能够根据不同玩法生成相应的检查。\n不过，移动检查中又补了“一次移动一格”。请求只规定方向键移动，并没有规定按格走。碰撞结束的检查还要求倒计时冻结，请求也没有明确结束后的时间显示。这些细节要先确认，不能直接拿来判断游戏对错。\n现在三类调用各自查了一个方面：规则完整时能否写出可用计划，规则缺失时能否先问，换一种玩法时能否跟着规则变化。写好文件以后，可以用这样的不同请求寻找遗漏，再逐项修订。"
          }
        ],
        "screens": [
          {
            "surface": "v3 躲避调用 · 请求与正文读取",
            "action": "先看方向键、金币、障碍、60 秒、结束与重开规则，再核对同轮读取，向下看返回。",
            "materials": [
              "transfer"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "v3 躲避调用 · 完整返回及核对意见",
            "action": "按移动、得分、结束、重开查看返回；停在“一次移动一格”和时间冻结的假定，讲完返回 PPT 第 8 页的迁移情境。",
            "materials": [
              "transfer",
              "check"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b20",
            "step": 0,
            "part": 1,
            "text": "再换成躲避游戏：方向键移动，吃金币加分，碰到障碍或六十秒用完就结束；重开恢复位置、分数和时间。仍然只让它写计划。"
          },
          {
            "scene": "b20",
            "step": 0,
            "part": 2,
            "text": "正文保持不变，只替换任务规则。这样可以检查我们写的是能换任务使用的方法，还是把翻牌的具体答案写死了。"
          },
          {
            "scene": "b20",
            "step": 1,
            "part": 1,
            "text": "返回改成了移动、得分、碰撞、倒计时和重开，没有沿用牌数与翻牌等待时间。这说明在这次躲避任务中，同一份正文能按新的规则组织检查；我们没有为了换游戏重写整份方法。"
          },
          {
            "scene": "b20",
            "step": 1,
            "part": 2,
            "text": "但它又补了“一次移动一格”和撞障碍后倒计时冻结。方向键移动不等于按格移动，提前结束后的时间显示也没有规定。检查项变得符合躲避游戏，还不等于每个预期都有规则依据。这些细节仍要列为待确认。"
          },
          {
            "scene": "b20",
            "step": 1,
            "part": 3,
            "text": "完整规则用来看能不能写出可执行的计划，缺失规则用来看会不会及时停下，另一玩法用来看有没有把答案写死。三类输入分别查不同问题；这几次运行给我们修改依据，不能保证以后每次输出都正确。\n"
          },
          {
            "scene": "b20",
            "step": 2,
            "part": 1,
            "text": "因此再给一组完整但不同的规则：方向键移动，吃金币加分，碰障碍或六十秒用完结束，重开恢复位置、分数和时间。正文不变，只换任务输入。\n如果指导写的是通用方法，应该能围绕这组规则组织计划；如果把翻牌答案写进了正文，就可能继续给出牌数和配对检查。"
          },
          {
            "scene": "b20",
            "step": 3,
            "part": 1,
            "text": "这次返回换成移动、得分、碰撞、倒计时和重开，没有沿用翻牌答案，说明本例中方法能够随规则复用。\n但它又补了“一次移动一格”和碰撞后倒计时冻结。方向键不等于按格移动，结束后时间怎样显示也没规定。这些不能直接成为验收标准，应先确认。\n这样三类输入各有用途：完整规则查能否完成，缺失规则查是否停下，另一玩法查是否写死答案。返回暴露的新问题仍要继续修；几次调用提供修改依据，不是以后每次都正确的保证。"
          }
        ]
      },
      {
        "id": "b21",
        "group": "检查与交接",
        "title": "例子变长、多人共用时怎样调整",
        "status": "归纳样稿可检查；正式 PPT 待制作，扩展路径是课程假设。",
        "reuse": [
          {
            "scene": "b21",
            "step": 4,
            "part": 1,
            "text": "假设以后我们继续完善这份 Skill，翻牌例子越积越多，正文变得很长；另一个 Skill 也想用其中的检查标准。该怎样安排这些内容？\n可以暂停，结合刚才见过的正文、参考资料和专项 Skill，先作一个选择，再说说理由。"
          },
          {
            "scene": "b21",
            "step": 5,
            "part": 1,
            "text": "长的翻牌例子只在翻牌任务中用得上，可以放进单独的参考文件，比如 references/memory-cases.md。正文保留生成计划的方法，再写明遇到翻牌任务时去读这份资料，并按当前规则使用。这个路径只是这里的写法示例，尚未创建文件。\n如果另一份 Skill 也要用同一套检查标准，就维护一份标准，让两边引用，避免以后各改各的。只有要单独完成另一项工作时，才考虑新写一份 Skill，说明那项工作的输入、方法和输出。"
          }
        ],
        "screens": [
          {
            "surface": "PPT 第 8 页 · 两个情境，尚未展开解析",
            "action": "第 1 步只显示两个问题与待安排的文件，留出暂停判断时间；再展开第 2 步。",
            "materials": [
              "check"
            ],
            "reuse": [
              0
            ]
          },
          {
            "surface": "同一 PPT 第 8 页 · 逐项展开解析",
            "action": "第 2 步显示长例子移入 Reference 的联系与正文入口，第 3 步将 Skill A、B 连到同一份共享标准；拟写路径未创建、未实跑。随后翻到第 9 页。",
            "materials": [
              "check",
              "check-notes"
            ],
            "reuse": [
              1
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b21",
            "step": 0,
            "part": 1,
            "text": "最后想两个扩展情境：翻牌例子越积越多，哪些移出去，哪些仍留正文？另一份 Skill 也要用相同检查标准，是复制还是共用？可以暂停，先说出安排和理由。"
          },
          {
            "scene": "b21",
            "step": 1,
            "part": 1,
            "text": "长的翻牌例子可以放进 references/memory-cases.md，正文留下通用方法，并注明遇到翻牌任务时读取、按当前规则选用。这个路径是拟写示例，还没有创建和实跑。"
          },
          {
            "scene": "b21",
            "step": 1,
            "part": 2,
            "text": "共用标准就维护一份，各自引用，更新时不用改两处。只有要独立承担另一项工作，才另写 Skill，说明它的输入和交付物。"
          },
          {
            "scene": "b21",
            "step": 2,
            "part": 1,
            "text": "换一个组织材料的情境：以后翻牌案例越来越长，另一份 Skill 又要用同一套检查标准，该怎样安排？可以暂停，先想哪些每次需要，哪些只在某类任务需要，哪些应只维护一处，再决定文件放哪里。"
          },
          {
            "scene": "b21",
            "step": 3,
            "part": 1,
            "text": "长翻牌例子只在相应任务中需要，可以放到 references/memory-cases.md；正文留下通用方法，并说明遇到翻牌任务时读取、按当前规则选用。这个路径是拟写示例，尚未创建和试跑。\n另一份 Skill 也需要相同标准，就引用同一份资料，更新时只改一处。如果需要独立完成另一项工作，才另外写 Skill，交代它接收什么、怎样做、交什么。选择的依据是用途，不是文件长度。"
          }
        ]
      },
      {
        "id": "b22",
        "group": "检查与交接",
        "title": "把读、改、写接到下一轮开发",
        "status": "本部分逐字稿已按当前画面与讲述线补齐；界面前后实录、正式 PPT 与讲师试讲仍待后续完成。",
        "reuse": [
          {
            "scene": "b22",
            "step": 2,
            "part": 1,
            "text": "今天我们先从翻牌规划读懂了正文：Skill 给出可复用的方法和默认建议，当前任务提供具体规则，Codex 补出的细节还要我们确认。\n接着，我们细化了检查计划的输出要求，重新调用时先核对读到的版本，再检查内容是否更具体、能不能执行。最后自己写了一份 game-check-plan，并用规则完整、信息缺失和另一种玩法的请求检查它。\n以后写改 Skill，也可以这样从实际问题开始：缺任务信息就补信息，缺通用做法就改正文，修改以后检查实际读取和对应结果。需要较长资料或另一项完整工作时，再按用途拆分。\n这些案例目前交付的是指导和计划，还没有执行游戏检查。下一节回到游戏开发，用这些指导做躲避游戏，再看代码和实际游戏行为。"
          }
        ],
        "screens": [
          {
            "surface": "PPT 第 9 页 · 两项产物及其核对方法",
            "action": "第 1 步指已有输出要求修改和自写单文件，分别对应同请求核对与三类输入；说明计划未执行。第 2 步承接下一轮躲避游戏的代码与检查。",
            "materials": [
              "handoff"
            ],
            "reuse": [
              0
            ]
          }
        ],
        "previousReuse": [
          {
            "scene": "b22",
            "step": 0,
            "part": 1,
            "text": "以后拿到一份 Skill，可以像今天这样，从一项实际决定追到正文，分清通用做法、当前需求和模型补充。要修改时，先找到负责这项行为的要求，改完确认实际读到了新版，再看结果是否解决原来的问题。"
          },
          {
            "scene": "b22",
            "step": 0,
            "part": 2,
            "text": "自己写一份，也从明确任务和成功标准开始，用完整、缺失和另一玩法的输入检查。需要共用知识时引用资料，需要另一项完整工作时再复用专项 Skill。今天形成的是规划要求的修改和一份手动检查计划 Skill；计划还没有实际执行。下一节把这些指导放回游戏开发，看它们怎样落实到代码和实际检查。\n"
          },
          {
            "scene": "b22",
            "step": 1,
            "part": 1,
            "text": "回到开始的问题：输出不够好，先判断缺的是当前任务信息、可复用的方法，还是实际读到的版本。明确缺口以后，再补规则、改负责该行为的正文，或处理读取问题；用对应结果检查是否解决。\n自己写一份时，也从任务和成功标准推出输入条件、做法和输出，再用不同输入查问题。换游戏换规则，通用方法保留；资料和专项工作按用途组织。今天形成的仍是指导和计划，计划尚未执行。下一节回到游戏开发，看这些要求怎样落实到代码和实际检查。"
          }
        ]
      }
    ],
    "units": [
      {
        "group": "从结果读懂正文",
        "explanation": "接着第一部分，从名称描述转到正文；先介绍规划 Skill 与历史翻牌任务，再对照方案和正文解释默认建议、玩法、流程和输出。",
        "transition": "从原版“正常再玩”仍需补细节的问题进入现场编辑，修改输出要求后实际调用。"
      },
      {
        "group": "修改并验证",
        "explanation": "先说明原版清单哪里需要操作人补充，再修改规划输出要求；历史调用与现场调用分别交代，核对读取版本、计划变化与仍需审阅的内容。",
        "transition": "现场核对结束后，明确切回 11 月 7 日规划记录，解释专项工作和共享资料。"
      },
      {
        "group": "理解引用与复用",
        "explanation": "先说明为什么需要其他文件，再介绍界面 Skill 与共同选型资料；逐一说明各自负责什么、为什么这样分工。",
        "transition": "把已看到的用途与依赖关系带回 PPT，归纳正文、资料和独立工作的取舍。"
      },
      {
        "group": "归纳写法",
        "explanation": "从已看过的输出要求和选型资料归纳正文取舍，再用具体用途解释 Skill、脚本和素材；不提前引用尚未讲到的失败案例。",
        "transition": "从一项只写手动计划的任务开始，说明最小文件里的要求怎样产生。"
      },
      {
        "group": "从零写出最小 Skill",
        "explanation": "先明确自写 Skill 要完成的任务，再编写名称描述、输入不足与足够时的做法；先查完整翻牌计划，再交代早期版本修订和换玩法调用。",
        "transition": "把通用方法与任务规则的区分用于长例子和共用标准两种新情境。"
      },
      {
        "group": "检查与交接",
        "explanation": "用长例子和共用标准两个情境检查文件安排；回顾实际讲过的读、改、写方法，承接游戏开发。",
        "transition": "进入 3.3，将指导与计划用于躲避游戏的实际开发和检查。"
      }
    ],
    "scriptComplete": true,
    "pptScenes": [
      {
        "id": "p07e",
        "frame": "b13",
        "page": 6
      },
      {
        "id": "p07f",
        "frame": "b14",
        "page": 7
      },
      {
        "id": "p07g",
        "frame": "b21",
        "page": 8
      },
      {
        "id": "p07h",
        "frame": "b22",
        "page": 9
      }
    ],
    "contentDesign": {
      "title": "内容目录 · 讲什么与为什么讲",
      "status": "2026-11-10 内容设计工作稿，待讲师审阅。本层先确定各段内容及其必要性，尚未据此调整画面或逐字稿。",
      "units": [
        {
          "title": "1 · 从一次结果读懂正文",
          "items": [
            {
              "frame": "b01",
              "title": "01 · 先看这次要求它做什么",
              "content": "接住第一部分已讲的名称与描述，明确此处转向正文。介绍 game-studio 的规划职责，以及这次翻牌规划的输入、交付范围：给方案，不实现。交代历史任务身份",
              "reason": "先建立学生能理解的对象与任务，后面才能判断方案是否响应请求。这里承担引入，不把“改任务还是改 Skill”这类尚未出现的问题塞进开场；不重复展开 Plugin 和选用机制"
            },
            {
              "frame": "b02",
              "title": "02 · 方案里的决定来自哪里",
              "content": "选方案中的一项明确决定——采用 Phaser；区分请求有没有要求、返回给了什么理由，再结合实际读取与正文核对。说明用户规则、Skill 默认建议、模型自行补充是不同来源",
              "reason": "学生需要知道正文与输出怎样联系，才有理由读原文件。重点是能追到具体要求；读取仅说明取得内容，不能据此断言全部执行。一个决定的对应关系讲清即可，不追完整日志"
            },
            {
              "frame": "b03",
              "title": "03 · 正文给默认方案，也给适用条件",
              "content": "默认建议为什么存在，适用条件和例外怎样限制它；已有技术约束时如何判断。转交条件说明规划指导到哪里为止，具体工作还有相应专项指导",
              "reason": "避免学生把“正文这样写”理解为不管项目都必须照做。学会把条件和动作一起读；这里只解释转交关系，专项文件的具体做法留到第 3 环节"
            },
            {
              "frame": "b04",
              "title": "04 · 把通用步骤落实为本次玩法",
              "content": "从“先明确动作、循环与结束条件”展开翻牌规则，说明它们如何决定需要记录的状态，以及后续界面、素材、试玩安排。对照等待时间等尚未指定的选择",
              "reason": "解释正文怎样提供工作方法，而非预写所有游戏的答案。学生应能分清通用步骤与当前规则，并知道未规定的参数需要确认。不展开框架实现或游戏架构教程"
            },
            {
              "frame": "b05",
              "title": "05 · 输出要求让方案可核对",
              "content": "说明工作流程与输出要求的区别：前者规定如何推进，后者规定应交什么。把方案里的技术、素材、检查安排对应回来，再指出检查安排距“别人可直接执行”还有哪些信息缺口",
              "reason": "让学生能读懂完整正文的职责，而非停在某个选型例子；由交付要求自然进入下一环节的修改。此处只建立具体缺口，修改位置和验证留给下一环节"
            }
          ]
        },
        {
          "title": "2 · 修改一项要求并验真",
          "items": [
            {
              "frame": "b06",
              "title": "06 · 在负责输出的原位置改一项要求",
              "content": "从“重开后可正常再玩”需要操作人自行解释的问题，推出起点、动作、通过条件。区分缺游戏规则与缺计划写法，说明本例为何改 planning 输出条目、为何不改 description；新增要求与原要求相容。实际修改后同请求调用",
              "reason": "这是本环节的核心推导，不能由“输出不好”直接跳到三个字段。学生要能解释为什么改这里，而非照抄补丁；只改一项，避免其他变化干扰判断"
            },
            {
              "frame": "b07",
              "title": "07 · 先确认这轮读到的是新版",
              "content": "修改后的磁盘文件与本轮 AI 实际读到的内容可能不同；用实际读取核对新增句，发现旧版先查版本和读取",
              "reason": "排除“根本没用上改动”这一类原因，避免不断改写其实未被读取的要求。这是修改验证中的必要一步，不另讲一遍加载机制或工具日志语法"
            },
            {
              "frame": "b08",
              "title": "08 · 原版已有检查，新版采用了三项结构",
              "content": "用同一类重开检查比较修改前后：原版已有主题，新版把起点、操作和结果展开。分别核对现场返回。说明本例解决了什么，还没有验证什么",
              "reason": "检查变化是否对应原来的缺口，避免只数表格列数、检查项数量；也避免把一次采用要求推成普遍稳定，或把计划当成已执行结果"
            },
            {
              "frame": "b09",
              "title": "09 · 格式符合，还要检查内容能否观察",
              "content": "用“无残留计时器／动画回调”说明内部条件并非手动可见结果；把风险转成可操作、可观察的检查，审查前提与预期是否成立",
              "reason": "补上“要求采用”之后的内容审阅，否则学生会把模板填全当成质量合格。形成核对方法即可；本例修订建议未复测，不讲成验证成功"
            }
          ]
        },
        {
          "title": "3 · 看懂多份指导怎样复用",
          "items": [
            {
              "frame": "b10",
              "title": "10 · 这次还读取了哪些指导",
              "content": "从规划涉及多项工作引出分工问题，再用同次读取指向界面指导；说明规划入口不必包办所有详细做法",
              "reason": "建立阅读关联文件的理由，不是增加一段文件清点。这里是引入，不能把“读了几份”当作学习结果；常规读取和查找绕路不主讲"
            },
            {
              "frame": "b11",
              "title": "11 · 另一份 Skill 负责一项完整工作",
              "content": "game-ui-frontend 接收当前游戏和界面目标，指导信息层次、操作区与帮助呈现，再检查调整结果；说明它能单独用于已有游戏，也能被规划入口引用",
              "reason": "让学生认识什么样的工作值得独立成 Skill，复用的是一套工作方法。深入一处具体指导及其结果判断，不泛讲全部界面标准。独立界面前后实录尚缺，只能说明方法，不能证明效果"
            },
            {
              "frame": "b12",
              "title": "12 · 两份 Skill 可以共用同一份资料",
              "content": "介绍 web-game-foundations 的职责；与规划入口共同需要选型条件，因此引用同一个 engine-selection.md。解释共享维护、读取条件、相对路径及实际读取的不同作用",
              "reason": "与 11 形成有内容的比较：复用知识与复用完整工作解决不同需要。学生要能为另一组同类内容选组织方式；不只记住两个文件名或目录结构"
            }
          ]
        },
        {
          "title": "4 · 系统归纳怎样写、拆与复用",
          "items": [
            {
              "frame": "b13",
              "title": "13 · 正文留下会影响每次行动的指导",
              "content": "每次任务需要的目的、必要输入、关键做法、条件与输出留正文；只在特定情况下需要的长资料按需引用，正文留读取入口；删除重复口号和不增加指导的信息",
              "reason": "把具体文件的观察转成学生自己的取舍依据。以作用而非统一字数判断长度，不能为缩短删关键要求；举已讲过的例子，不提前引用后文失败"
            },
            {
              "frame": "b14",
              "title": "14 · 先判断需要资料、另一项工作还是工具处理",
              "content": "共用知识用 Reference，独立任务可用另一份 Skill，确定的重复处理可配脚本，模板和待处理输入可作为素材；入口交代用途、使用条件、输入输出和核对方法",
              "reason": "防止将所有内容都当正文，或一长就拆 Skill，也避免为了形式建立复杂目录。讲清资源职责即可，不展开脚本开发与工具配置；由此确定下一环节从单文件起步"
            }
          ]
        },
        {
          "title": "5 · 从空目录写最小 Skill 并调用",
          "items": [
            {
              "frame": "b15",
              "title": "15 · 从任务边界写名称和描述",
              "content": "先确定任务：根据规则生成手动检查计划，成功要求是有规则依据、能执行、能观察；明确不试玩、不改代码。再据此写文件头并放入项目可发现的位置",
              "reason": "让学生从任务推出文件内容，不从空模板猜该填什么。name、description 已讲过，此处只示范如何为新任务填写，不重新讲发现机制"
            },
            {
              "frame": "b16",
              "title": "16 · 把输入分支和输出要求写成可执行说明",
              "content": "从“预期需要规则依据”推出必要输入与不足时的提问、停止分支；从“计划可执行”推出覆盖范围、起点／操作／结果、隐藏内容的观察步骤；未知与随机结果如何处理，交付物如何标明",
              "reason": "这是从零编写的核心，解释每条指导为何需要，而非逐条念成稿。具体数量是本例安排，不升级为通用格式；文件保存与后续调用实际发生"
            },
            {
              "frame": "b17",
              "title": "17 · 文件写好以后，用一条完整规则调用",
              "content": "提供完整翻牌规则和本轮范围，区分正文方法与当前玩法数值；确认发现、正文读取和实际输出，再对照成功标准",
              "reason": "把“写了一个文件”推进到“本次任务能使用它”。这是编写后的应用步骤，不作为新概念重讲调用；历史与现场身份分开，不预填现场成功"
            },
            {
              "frame": "b18",
              "title": "18 · 照着返回想一遍，步骤能不能执行",
              "content": "用 C2 的任意两张与不匹配目标、C5 的任意进度与固定为一，解释起点、操作和预期之间的矛盾；判断问题是步骤写法而非规则缺失",
              "reason": "训练内容审阅，避免生成成功就结束。沿实际动作推演，不靠主观评价好坏；修订建议没有复测，不把本例当作已闭环的成功修改"
            },
            {
              "frame": "b19",
              "title": "19 · 根据失败返回，把提醒改成明确分支",
              "content": "先介绍缺规则请求和早期第二版；说明为什么仍列计划不合适，再对照修订后的条件、动作和停止点，以及同请求的第三版返回",
              "reason": "与 18 区分失败类型，并给出一次确有修订与再次调用的案例。学生要理解如何把模糊提醒变成明确指导；版本沿革需交代，只对本次输入下结论"
            },
            {
              "frame": "b20",
              "title": "20 · 换成躲避，规则和预期也要跟着换",
              "content": "正文保持不变，用另一玩法检查输出是否随规则改变；再查“一次一格”“时间冻结”等无输入依据的预期。说明完整、缺失、不同玩法分别暴露什么问题",
              "reason": "检查写下的是可复用方法，还是翻牌答案；也说明能迁移不等于全部正确。讲清怎样选测试输入，不要求学生照搬本例每个版本或调用次数"
            }
          ]
        },
        {
          "title": "6 · 用新情境检查与交接",
          "items": [
            {
              "frame": "b21",
              "title": "21 · 例子变长、多人共用时怎样调整",
              "content": "给长翻牌例子、另一份 Skill 共用标准两个情境，要求作安排并说明依据，再提供解析：通用方法留正文、长例子按需引用、共同标准只维护一处；独立工作才拆 Skill",
              "reason": "检查能否使用第 3、4 环节的依据，而不是再听一次分类总结。拟写路径明确为示例，不当作已经创建、读过的资料"
            },
            {
              "frame": "b22",
              "title": "22 · 把读、改、写接到下一轮开发",
              "content": "对照已经形成的正文修改、最小 Skill 与调用结果，收束读要求、定位修改、检查读取和内容的联系；说明计划尚未执行，下一节进入游戏开发与实际检查",
              "reason": "说明这些认识接下来如何用于项目，同时保持计划与执行的边界。只收束，不在结尾新增判断框架或未经前文解释的概念"
            }
          ]
        }
      ],
      "note": "22 个标题不是 22 个同级知识点。01 是对象与任务引入；07 是验证中的一个必要步骤；10 是分工问题的引入；17 是编写后的调用步骤；22 是交接。它们可保留为定位与操作段，但讲解分量应服务所在环节。核心展开应放在 03–05 的正文作用、06–09 的修改判断、11–12 的两类复用、15–20 的独立编写与检查。03 的转交关系与 11 的专项指导、12 的实例与 14 的归纳分别承担铺垫／展开、实例／迁移依据，不能各自重复全套内容。暂不据此增删小标题、安排新画面或修改逐字稿，先审本层内容及其必要性。"
    }
  },
  "intro": "按 Discussion 的七个讲解环节组织 3.2.1，六页 PPT 与真实材料按实际展示顺序对应；口播仍从唯一源编辑保存。",
  "status": "2026-11-11：3.2.1 六页 PPT 与对应口播已按讲述线同步；历史回放与现场结果分别处理。页面与操作检查见本轮交付；现场安装、模型调用与试讲未重跑。",
  "units": [
    {
      "group": "从开发经历引入",
      "frames": [
        "f01",
        "f02"
      ],
      "explanation": "从翻牌检查引出“下一次任务怎样用上已有方法”，说明 Skill 的可复用用途；不把调用成功当成可靠性改善。",
      "transition": "用 Game Studio 中的试玩指导看一份真实 Skill。"
    },
    {
      "group": "认识 Plugin 与 Skill",
      "frames": [
        "f03"
      ],
      "explanation": "先看 Game Studio Plugin 的整体边界与多份 Skill，再定位本次整理试玩清单选用的 game-playtest。",
      "transition": "从选中的 Skill 打开它自己的文件头。"
    },
    {
      "group": "读名称与描述",
      "frames": [
        "f04",
        "f05"
      ],
      "explanation": "打开固定版本 SKILL.md，以 name 确认身份，以 description 的任务范围判断是否适合翻牌试玩清单。",
      "transition": "回到 PPT，先安装并确认当前项目可发现这份指导。"
    },
    {
      "group": "安装 Skill",
      "explanation": "按文件位置、当前会话发现、来源正确三个判断推进；真实安装与发现留现场，准备脚本的特殊细节留操作页。",
      "transition": "安装与发现确认后，回到当前任务指定并调用 Skill。",
      "frames": [
        "f-install-0",
        "f-install-1",
        "f-install-2"
      ]
    },
    {
      "group": "主动调用",
      "frames": [
        "f06",
        "f07",
        "f08",
        "f08-result",
        "f09"
      ],
      "explanation": "主动选择并提交规则；等待时用历史重开条目解释怎样核对回答，随后回现场检查本次结果。",
      "transition": "去掉显式指定，用同类任务观察模型怎样选用指导。"
    },
    {
      "group": "语言触发与读取",
      "frames": [
        "f10",
        "f11",
        "f12",
        "f12-metadata",
        "f13",
        "f13-result",
        "f14"
      ],
      "explanation": "用描述解释任务匹配，用同轮记录确认读取，再用 A2/A3 解释“两张一步”怎样成为清单预期。",
      "transition": "本次原描述已匹配；接着讨论漏选或误选时怎样检查描述。"
    },
    {
      "group": "描述写法与复核",
      "frames": [
        "f15",
        "f16",
        "f17",
        "f18"
      ],
      "explanation": "先明确范围与两类请求的预期，再读四轮观察，依据实际结果解释改写的效果边界。",
      "transition": "带着调用与选用的认识，进入第二部分，读懂正文怎样提供具体指导。"
    }
  ],
  "materials": {
    "p07": {
      "label": "PPT · 从开发经历进入 Skill",
      "url": "index.html?mode=slides#p07"
    },
    "p07a": {
      "label": "PPT · Plugin 与 Skill",
      "url": "index.html?mode=slides#p07a"
    },
    "p07b": {
      "label": "PPT · 主动调用",
      "url": "index.html?mode=slides#p07b"
    },
    "p07c": {
      "label": "PPT · 语言触发与读取",
      "url": "index.html?mode=slides#p07c"
    },
    "p07d": {
      "label": "PPT · 描述写法与复核",
      "url": "index.html?mode=slides#p07d"
    },
    "skill": {
      "label": "game-playtest / SKILL.md · 固定版本",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
    },
    "explicit": {
      "label": "主动调用回放 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-explicit"
    },
    "request": {
      "label": "自然语言请求 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-request"
    },
    "metadata": {
      "label": "可用说明 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-metadata"
    },
    "read": {
      "label": "实际读取 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-read"
    },
    "result": {
      "label": "返回清单 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-result"
    },
    "description": {
      "label": "描述复核 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-description"
    },
    "p07install": {
      "label": "PPT · 安装 Skill",
      "url": "index.html?mode=slides&step=0#p07install"
    },
    "install": {
      "label": "固定版本与安装操作",
      "url": "install-skill.html"
    },
    "explicitRequest": {
      "label": "主动调用原始请求 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-explicit&position=3"
    },
    "explicitResult": {
      "label": "主动调用原始回复 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-explicit&position=5"
    }
  },
  "visualRevision": {
    "date": "2026-11-09",
    "source": "tools/skill-visuals.py",
    "references": [
      "p03: 人物、原话与动作",
      "pfind: 原话到具体原文的对应",
      "pdata: 稳定对象与局部展开",
      "p02: 同屏比较"
    ],
    "scope": "九页主画面重做，讲述主线与 script.json 保持；本机对照截图不发布"
  },
  "reading": {
    "scope": "3.2.2–3.2.3 读懂简单 Skill 与游戏试玩 Skill",
    "intro": "先读简单示例，再沿游戏试玩 Skill 看正文和配套资源。",
    "status": "2026-11-11：三个任务各接入一页三态 PPT，知识、实例与证据对应；后两段小结保持。",
    "scriptComplete": true,
    "sourcePlanning": {
      "content": "认识 SKILL.md 的文件头和正文，结合 setup-demo-app 看适用场景、交付要求、执行步骤和完成标准。",
      "purpose": "能说明一份简短 Skill 正文各部分的作用。"
    },
    "units": [
      {
        "section": "3.2.2",
        "group": "读懂简单 Skill",
        "explanation": "用结构图和 setup-demo-app 认识正文。",
        "transition": "接着看 game-playtest。"
      },
      {
        "section": "3.2.3",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "explanation": "沿翻牌试玩看正文、调用与配套资源。",
        "transition": "接着看 Plugin 如何组织多份 Skill。"
      },
      {
        "section": "3.2.4",
        "group": "通过 Plugin 组织和分发能力",
        "explanation": "Game Studio 引出 Plugin → 简介 MCP 与 Hook → 安装调用。",
        "transition": "完成 3.2；紫色风格由 3.3 展开。"
      }
    ],
    "materials": {
      "official": {
        "label": "setup-demo-app 官方原文",
        "url": "https://developers.openai.com/blog/eval-skills#a-sample-skill"
      },
      "playtest": {
        "label": "game-playtest 固定版本",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
      },
      "memory": {
        "label": "05 号 · 检查后继续看截图（原始记录）",
        "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=86"
      },
      "checks": {
        "label": "05 号 · 浏览器检查原始输出",
        "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=85"
      },
      "structurePpt": {
        "label": "PPT · 结构与职责",
        "url": "index.html?mode=slides&part=2&step=0#p07i"
      },
      "purposePpt": {
        "label": "PPT · 官方示例用途",
        "url": "index.html?mode=slides&part=2&step=0#p07j"
      },
      "contentsPpt": {
        "label": "PPT · 具体指导与作用",
        "url": "index.html?mode=slides&part=2&step=0#p07k"
      },
      "examplesPpt": {
        "label": "PPT · 模板与示例",
        "url": "index.html?mode=slides&part=2&step=0#p07l"
      },
      "organizationPpt": {
        "label": "PPT · 正文组织比较",
        "url": "index.html?mode=slides&part=2&step=0#p07m"
      },
      "lengthPpt": {
        "label": "PPT · 篇幅取舍",
        "url": "index.html?mode=slides&part=2&step=0#p07n"
      },
      "exampleFilled": {
        "label": "PPT · 填好的报告示例",
        "url": "index.html?mode=slides&part=2&step=1#p07l"
      },
      "exampleCondition": {
        "label": "PPT · 同句中的条件与要求",
        "url": "index.html?mode=slides&part=2&step=2#p07l"
      },
      "resourceTransition": {
        "label": "PPT · 进入配套资源",
        "url": "index.html?mode=slides&part=2&step=0#p07n"
      },
      "overview": {
        "label": "game-playtest · 工作视角",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#overview"
      },
      "workflow": {
        "label": "game-playtest · 推荐流程",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#preferred-workflow"
      },
      "tooling": {
        "label": "game-playtest · 工具与条件",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#tooling-guidance"
      },
      "common": {
        "label": "game-playtest · 检查范围",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#common-checks"
      },
      "reporting": {
        "label": "game-playtest · 报告要求",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#reporting-standard"
      },
      "references": {
        "label": "game-playtest · 资料入口",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references"
      },
      "faceEvidence": {
        "label": "第一节 · 朝向检查证据",
        "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=86"
      },
      "countEvidence": {
        "label": "补充案例 · 步数刷新问题",
        "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=79&mark=step-count&find=%E2%9C%98%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E5%90%8C%E6%A0%B7%E8%AE%A1%201%20%E6%AD%A5%20-%3E%201"
      },
      "responsive": {
        "label": "game-playtest · 浏览器与视口检查",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#responsive-and-browser-checks"
      },
      "workflowSummaryPpt": {
        "label": "PPT · 完整任务指导小结",
        "url": "index.html?mode=slides&part=2&step=0#p07j1"
      },
      "bodySpec": {
        "label": "正文与篇幅建议",
        "url": "https://agentskills.io/specification#body-content"
      },
      "old5": {
        "label": "04 号游戏（历史 ID：old5）",
        "url": "http://127.0.0.1:4397/game-only.html?run=old5"
      },
      "trialA": {
        "label": "任务 1 · 请求、输出与报告 · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-a"
      },
      "earlyClear": {
        "label": "任务 1 · 第三对后的实际画面",
        "url": "../../materials/playtest-old5-20261111/early-clear.png"
      },
      "trialB": {
        "label": "任务 2 · 请求与读取 · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b"
      },
      "restartResult": {
        "label": "任务 2 · 重开复验 · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b-verify"
      },
      "restartScript": {
        "label": "任务 2 · 实际脚本原文 · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b-script"
      },
      "trialC": {
        "label": "任务 3 · 请求与读取 · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-c"
      },
      "narrowResult": {
        "label": "任务 3 · 视口检查 · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-c-verify"
      },
      "desktopPair": {
        "label": "任务 3 · 桌面画面",
        "url": "../../materials/playtest-old5-20261111/desktop-first-pair.png"
      },
      "mobileBottom": {
        "label": "任务 3 · 窄屏底部",
        "url": "../../materials/playtest-old5-20261111/mobile-bottom.png"
      },
      "checklist": {
        "label": "试玩清单 · 恢复检查",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/playtest-checklist.md#universal-checks"
      },
      "frontend": {
        "label": "前端 Skill · 判断标准",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards"
      },
      "splitCore": {
        "label": "PPT · 正文与 Reference",
        "url": "index.html?mode=slides&step=0#p07o"
      },
      "splitFiles": {
        "label": "PPT · 脚本与素材",
        "url": "index.html?mode=slides&step=1#p07o"
      },
      "connectScript": {
        "label": "PPT · 脚本怎样接入正文",
        "url": "index.html?mode=slides&step=0#p07p"
      },
      "connectAsset": {
        "label": "PPT · 素材怎样接入正文",
        "url": "index.html?mode=slides&step=1#p07p"
      },
      "compareBodies": {
        "label": "PPT · 两份正文的组织",
        "url": "index.html?mode=slides&step=0#p07m"
      },
      "template": {
        "label": "PPT · 报告模板",
        "url": "index.html?mode=slides&step=0#p07l"
      },
      "filledTemplate": {
        "label": "PPT · 填写示例",
        "url": "index.html?mode=slides&step=1#p07l"
      },
      "conditional": {
        "label": "PPT · 条件与要求",
        "url": "index.html?mode=slides&step=2#p07l"
      },
      "usageA": {
        "label": "PPT · 任务 1 的读取",
        "url": "index.html?mode=slides&step=0#p07q"
      },
      "usageB": {
        "label": "PPT · 任务 2 的读取",
        "url": "index.html?mode=slides&step=1#p07q"
      },
      "usageC": {
        "label": "PPT · 任务 3 的读取",
        "url": "index.html?mode=slides&step=2#p07q"
      },
      "usageSummary": {
        "label": "PPT · 渐进披露与篇幅",
        "url": "index.html?mode=slides&step=3#p07q"
      },
      "readB": {
        "label": "预跑材料 · run-b-read · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b-read"
      },
      "readC": {
        "label": "预跑材料 · run-c-read · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-c-read"
      },
      "reportA": {
        "label": "预跑材料 · run-a-report · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-a-report"
      },
      "outputA": {
        "label": "预跑材料 · run-a-output · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=playtest-a-output"
      },
      "supportGuide": {
        "label": "OpenAI · 配套文件指南",
        "url": "https://developers.openai.com/plugins/build/skills#add-supporting-resources"
      },
      "disclosure": {
        "label": "Agent Skills · 渐进披露",
        "url": "https://agentskills.io/specification#progressive-disclosure"
      },
      "mapEntry": {
        "label": "PPT · Skill 全局：入口与核心指导",
        "url": "index.html?mode=slides&step=0#p07o"
      },
      "mapSupport": {
        "label": "PPT · Skill 全局：三类配套文件",
        "url": "index.html?mode=slides&step=1#p07o"
      },
      "mapOther": {
        "label": "PPT · Skill 全局：专项指导边界",
        "url": "index.html?mode=slides&step=2#p07o"
      },
      "connectAll": {
        "label": "PPT · 条件与入口连接配套文件",
        "url": "index.html?mode=slides&step=0#p07p"
      },
      "connectUse": {
        "label": "PPT · 输入、使用方式与结果",
        "url": "index.html?mode=slides&step=1#p07p"
      },
      "bodyRoles": {
        "label": "PPT · 正文组织工作知识",
        "url": "index.html?mode=slides&step=0#p07m"
      },
      "bodyExamples": {
        "label": "PPT · 两份正文的不同组织",
        "url": "index.html?mode=slides&step=1#p07m"
      },
      "progressMeta": {
        "label": "PPT · 识别与选用",
        "url": "index.html?mode=slides&step=0#p07q"
      },
      "progressBody": {
        "label": "PPT · 读取核心指导",
        "url": "index.html?mode=slides&step=1#p07q"
      },
      "progressMore": {
        "label": "PPT · 按任务展开细节",
        "url": "index.html?mode=slides&step=2#p07q"
      },
      "task1Map0": {
        "label": "PPT · 共同方法怎样用于当前任务（第 1 步）",
        "url": "index.html?mode=slides&step=0#p07t1"
      },
      "task1Map1": {
        "label": "PPT · 共同方法怎样用于当前任务（第 2 步）",
        "url": "index.html?mode=slides&step=1#p07t1"
      },
      "task1Map2": {
        "label": "PPT · 共同方法怎样用于当前任务（第 3 步）",
        "url": "index.html?mode=slides&step=2#p07t1"
      },
      "task2Map0": {
        "label": "PPT · Reference 怎样变成具体检查（第 1 步）",
        "url": "index.html?mode=slides&step=0#p07t2"
      },
      "task2Map1": {
        "label": "PPT · Reference 怎样变成具体检查（第 2 步）",
        "url": "index.html?mode=slides&step=1#p07t2"
      },
      "task2Map2": {
        "label": "PPT · Reference 怎样变成具体检查（第 3 步）",
        "url": "index.html?mode=slides&step=2#p07t2"
      },
      "task3Map0": {
        "label": "PPT · 专项 Skill 怎样补充判断依据（第 1 步）",
        "url": "index.html?mode=slides&step=0#p07t3"
      },
      "task3Map1": {
        "label": "PPT · 专项 Skill 怎样补充判断依据（第 2 步）",
        "url": "index.html?mode=slides&step=1#p07t3"
      },
      "task3Map2": {
        "label": "PPT · 专项 Skill 怎样补充判断依据（第 3 步）",
        "url": "index.html?mode=slides&step=2#p07t3"
      },
      "referencesBackup": {
        "label": "备用原文节选 · References",
        "url": "task-originals.html#references"
      },
      "toolingBackup": {
        "label": "备用原文节选 · Tooling Guidance",
        "url": "task-originals.html#tooling"
      },
      "frontendBackup": {
        "label": "备用原文节选 · Frontend Standards",
        "url": "task-originals.html#frontend"
      },
      "checklistBackup": {
        "label": "备用原文节选 · Universal checks",
        "url": "task-originals.html#checklist"
      },
      "reportingBackup": {
        "label": "备用原文节选 · Reporting Standard",
        "url": "task-originals.html#reporting"
      },
      "workflowBackup": {
        "label": "备用原文节选 · Preferred Workflow",
        "url": "task-originals.html#workflow"
      },
      "plugin-tree": {
        "label": "Game Studio 固定版本目录",
        "url": "https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio"
      },
      "plugin-concept": {
        "label": "官方 Plugin 架构（备查）",
        "url": "https://developers.openai.com/plugins/concepts/plugins"
      },
      "plugin-hooks": {
        "label": "官方原文 · Hook 事件与支持条件",
        "url": "https://developers.openai.com/plugins/build/plugins#bundled-mcp-servers-and-lifecycle-hooks"
      },
      "p324a-0": {
        "label": "PPT · p324a · 状态 1",
        "url": "index.html?mode=slides&step=0#p324a"
      },
      "p324a-1": {
        "label": "PPT · p324a · 状态 2",
        "url": "index.html?mode=slides&step=1#p324a"
      },
      "p324a-2": {
        "label": "PPT · p324a · 状态 3",
        "url": "index.html?mode=slides&step=2#p324a"
      },
      "p324b-0": {
        "label": "PPT · p324b · 状态 1",
        "url": "index.html?mode=slides&step=0#p324b"
      },
      "p324b-1": {
        "label": "PPT · p324b · 状态 2",
        "url": "index.html?mode=slides&step=1#p324b"
      },
      "p324b-2": {
        "label": "PPT · p324b · 状态 3",
        "url": "index.html?mode=slides&step=2#p324b"
      },
      "plugin-run-source": {
        "label": "完整 Plugin 预跑 · source",
        "url": "../../materials/plugin-install-20261112/evidence.html#source"
      },
      "plugin-run-install": {
        "label": "完整 Plugin 预跑 · install · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=plugin-install"
      },
      "plugin-run-request": {
        "label": "完整 Plugin 预跑 · request（请求留存；独立原件未找到）",
        "url": "../../materials/plugin-install-20261112/evidence.html#request"
      },
      "plugin-run-read": {
        "label": "完整 Plugin 预跑 · read · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=plugin-read"
      },
      "plugin-run-result": {
        "label": "完整 Plugin 预跑 · result · Inspect",
        "url": "http://127.0.0.1:4397/inspect/?topic=plugin-result"
      },
      "plugin-manifest": {
        "label": "Game Studio · 插件声明",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/.codex-plugin/plugin.json"
      },
      "plugin-skill-mcp": {
        "label": "官方原文 · Skill 与 MCP 的分工",
        "url": "https://developers.openai.com/plugins/concepts/skills#how-skills-complement-an-mcp-server"
      },
      "plugin-shapes": {
        "label": "课后回查 · Plugin 组成选择",
        "url": "https://developers.openai.com/plugins/concepts/plugins#choose-a-plugin-shape"
      },
      "plugin-skill-router": {
        "label": "game-studio · 适用任务",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-studio/SKILL.md#use-this-skill-when"
      },
      "plugin-skill-sprite": {
        "label": "sprite-pipeline · 用途",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/sprite-pipeline/SKILL.md#overview"
      },
      "plugin-skill-playtest": {
        "label": "game-playtest · 试玩指导",
        "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
      },
      "plugin-skills-tree": {
        "label": "Game Studio · 完整 Skill 目录",
        "url": "https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills"
      },
      "plugin-four-preparation": {
        "label": "录前准备 · 四份独立 Skill",
        "url": "install-skill.html"
      },
      "p324c": {
        "label": "PPT · 再看第一版风格指导",
        "url": "index.html?mode=slides#p324c"
      }
    },
    "purposeSlide": {
      "title": "setup-demo-app：搭建最小演示应用",
      "content": "画面呈现“界面实验／问题复现 → 搭建最小 React 演示应用”，浏览器框只标 Header 与两张 Card，并注明交付结构示意。技术栈、目录和步骤不放在这页，到官方原文里读。",
      "position": "结构介绍后、打开官方原文前；与用途介绍一句对应",
      "status": "已制作：index.html?mode=slides&part=2#p07j"
    },
    "routes": {
      "r322-1": [
        {
          "step": 0,
          "parts": [
            1,
            2
          ],
          "surface": "PPT · 从“是否选用”读到“具体怎样工作”",
          "materials": [
            "structurePpt"
          ]
        },
        {
          "step": 1,
          "parts": [
            1
          ],
          "surface": "PPT · setup-demo-app 用来搭建什么",
          "materials": [
            "purposePpt",
            "official"
          ]
        }
      ],
      "r322-2": [
        {
          "step": 0,
          "surface": "OpenAI 原文 · 适用场景",
          "materials": [
            "official"
          ]
        },
        {
          "step": 1,
          "surface": "OpenAI 原文 · 技术、目录与写法要求",
          "materials": [
            "official"
          ]
        },
        {
          "step": 2,
          "surface": "OpenAI 原文 · 执行步骤",
          "materials": [
            "official"
          ]
        },
        {
          "step": 3,
          "surface": "OpenAI 原文 · 完成标准",
          "materials": [
            "official"
          ]
        },
        {
          "step": 4,
          "surface": "PPT · 把执行、自检与修正接起来",
          "materials": [
            "workflowSummaryPpt"
          ]
        }
      ],
      "r322-3": [
        {
          "step": 0,
          "surface": "GitHub 固定版本 · game-playtest 全貌",
          "materials": [
            "playtest"
          ]
        }
      ],
      "r322-4": [
        {
          "step": 0,
          "surface": "GitHub 原文 · Overview",
          "materials": [
            "overview",
            "faceEvidence"
          ]
        },
        {
          "step": 1,
          "surface": "GitHub 原文 · Preferred Workflow",
          "materials": [
            "workflow",
            "checks",
            "countEvidence"
          ]
        },
        {
          "step": 2,
          "surface": "GitHub 原文 · Tooling Guidance",
          "materials": [
            "tooling"
          ]
        },
        {
          "step": 3,
          "surface": "GitHub 原文 · Common Checks 与视口检查",
          "materials": [
            "common",
            "responsive"
          ]
        },
        {
          "step": 4,
          "surface": "GitHub 原文 · Reporting Standard",
          "materials": [
            "reporting",
            "countEvidence"
          ]
        },
        {
          "step": 5,
          "surface": "GitHub 原文 · References",
          "materials": [
            "references"
          ]
        }
      ],
      "r322-5": [
        {
          "step": 0,
          "parts": [
            1
          ],
          "surface": "PPT · 按作用读懂正文里的具体指导",
          "materials": [
            "contentsPpt"
          ]
        },
        {
          "step": 0,
          "parts": [
            2
          ],
          "surface": "PPT · 模板和示例怎样交代输出要求",
          "materials": [
            "examplesPpt"
          ]
        },
        {
          "step": 0,
          "parts": [
            3
          ],
          "surface": "PPT · 模板和示例怎样交代输出要求",
          "materials": [
            "exampleFilled"
          ]
        },
        {
          "step": 0,
          "parts": [
            4
          ],
          "surface": "PPT · 模板和示例怎样交代输出要求",
          "materials": [
            "exampleCondition"
          ]
        }
      ],
      "r322-6": [
        {
          "step": 0,
          "parts": [
            1
          ],
          "surface": "PPT · 工作不同，需要交代的内容也不同",
          "materials": [
            "organizationPpt"
          ]
        },
        {
          "step": 0,
          "parts": [
            2
          ],
          "surface": "PPT · 按作用取舍内容，控制正文篇幅",
          "materials": [
            "lengthPpt"
          ]
        },
        {
          "step": 0,
          "parts": [
            3
          ],
          "surface": "PPT · 按作用取舍内容，控制正文篇幅",
          "materials": [
            "resourceTransition"
          ]
        }
      ]
    },
    "placements": {
      "3.2.2.1": [
        "r322-1"
      ],
      "3.2.2.2": [
        "r322-2"
      ],
      "3.2.3.1": [
        "r322-3"
      ],
      "3.2.3.2": [
        "r322-4"
      ],
      "3.2.3.6": [
        "r322-5",
        "r322-6"
      ]
    },
    "recordingLabels": {
      "r322-1": "3.2.2.1 PPT：SKILL.md 结构示意图",
      "r322-2": "3.2.2.2 OpenAI 示例原文：认识正文的基本内容",
      "r322-3": "3.2.3.1 交代案例",
      "r322-4": "3.2.3.2 正文怎样把任务要求变成工作方法",
      "r322-5": "正文常见内容、模板与示例",
      "r322-6": "正文组织方式与篇幅"
    },
    "plannedFrames": [
      {
        "id": "plan323-1",
        "number": "3.2.3.1",
        "title": "交代案例：同一工作为什么需要不同层次的指导",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "从简单正文到配套指导 · 早期 05 预览",
            "action": "打开归档游戏，指认十二张牌；说明六对通关和三轮独立副本。",
            "materials": [
              "old5"
            ],
            "scriptStep": 0
          }
        ],
        "reuse": [],
        "scriptSource": "r323-1",
        "status": "2026-11-11：按知识点重组任务讲述，正式口播同步；材料沿用独立预跑，未新增运行或试讲。",
        "boundary": "用三轮独立任务解释正文、Reference 与专项 Skill 的分工；本段不安排 PPT，使用归档游戏和实际材料。"
      },
      {
        "id": "plan323-2",
        "number": "3.2.3.2",
        "title": "正文怎样把任务要求变成工作方法",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "本次输入与可复用方法的分工 · 任务 1 请求",
            "action": "在任务 1 请求中指认六对通关、检查前三对、保留源码；随后切 PPT p07t1 第 1 步。",
            "materials": [
              "trialA"
            ],
            "scriptStep": 0
          },
          {
            "surface": "PPT · 任务信息与共同方法",
            "action": "打开 PPT p07t1 第 1 步：任务信息与共同方法；讲完从本页材料入口打开原文。",
            "materials": [
              "task1Map0"
            ],
            "scriptStep": 6,
            "ppt": {
              "id": "p07t1",
              "step": 0
            }
          },
          {
            "surface": "流程把目标展开为行动 · Preferred Workflow",
            "action": "在已打开的 game-playtest 原文定位 Preferred Workflow；讲完在同一文件向下定位 Tooling Guidance。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "workflow",
              "workflowBackup"
            ],
            "scriptStep": 1
          },
          {
            "surface": "条件决定怎样执行 · Tooling Guidance",
            "action": "定位已有自动化工具、canvas/WebGL 截图要求、自动化不稳定时的备选做法。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "tooling",
              "toolingBackup"
            ],
            "scriptStep": 2
          },
          {
            "surface": "交付要求规定要留下什么证据 · Reporting Standard",
            "action": "在同一原文定位 Reporting Standard；讲完切回已打开的 PPT p07t1，从第 1 步推进到第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "reporting",
              "reportingBackup"
            ],
            "scriptStep": 3
          },
          {
            "surface": "PPT · 正文指导对应具体检查",
            "action": "返回 PPT p07t1，停在第 2 步：正文指导对应具体检查。",
            "materials": [
              "task1Map1"
            ],
            "scriptStep": 7,
            "ppt": {
              "id": "p07t1",
              "step": 1
            }
          },
          {
            "surface": "预期来自任务，实际来自观察 · 第三对截图",
            "action": "从 PPT p07t1 第 2 步的截图入口打开 early-clear.png；讲完切任务 1 的 run-a-output。",
            "materials": [
              "earlyClear"
            ],
            "scriptStep": 4
          },
          {
            "surface": "从指导到交付的对应 · 浏览器输出与报告",
            "action": "在任务 1 材料定位 pair-3、AFTER3，再向下看报告；讲完返回 PPT p07t1 并推进到第 3 步。",
            "materials": [
              "outputA",
              "reportA"
            ],
            "scriptStep": 5
          },
          {
            "surface": "PPT · 用结果核对方法的落实",
            "action": "返回已打开的 PPT p07t1，从第 2 步推进到第 3 步；讲完打开任务 2 请求。",
            "materials": [
              "task1Map2"
            ],
            "scriptStep": 8,
            "ppt": {
              "id": "p07t1",
              "step": 2
            }
          }
        ],
        "reuse": [],
        "scriptSource": "r323-2",
        "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
        "boundary": "本任务使用 1 页 PPT（p07t1），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
      },
      {
        "id": "plan323-3",
        "number": "3.2.3.3",
        "title": "Reference 怎样把通用指导补充为具体检查",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "为什么需要配套细则 · 任务 2 请求",
            "action": "在任务 2 请求中指认修复、通关后恢复检查和查阅清单；随后切 PPT p07t2 第 1 步。",
            "materials": [
              "trialB"
            ],
            "scriptStep": 0
          },
          {
            "surface": "PPT · 正文连接配套细则",
            "action": "打开 PPT p07t2 第 1 步：正文连接配套细则；讲完从本页材料入口打开原文。",
            "materials": [
              "task2Map0"
            ],
            "scriptStep": 5,
            "ppt": {
              "id": "p07t2",
              "step": 0
            }
          },
          {
            "surface": "正文保留入口，资料承载细节 · References",
            "action": "从 PPT p07t2 第 1 步打开 References，在原文指认 Full checklist；沿该链接进入清单，定位 Universal checks。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "references",
              "referencesBackup"
            ],
            "scriptStep": 1
          },
          {
            "surface": "把通用条目落到动作与预期 · Universal checks",
            "action": "停在 Universal checks 的 pause、failure、recovery 条目，读完返回 PPT p07t2 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "checklist",
              "checklistBackup"
            ],
            "scriptStep": 2
          },
          {
            "surface": "PPT · 通用条目对应动作与预期",
            "action": "返回 PPT p07t2，停在第 2 步：通用条目对应动作与预期。",
            "materials": [
              "task2Map1"
            ],
            "scriptStep": 6,
            "ppt": {
              "id": "p07t2",
              "step": 1
            }
          },
          {
            "surface": "查阅证据说明知识是否取得 · 清单读取记录",
            "action": "从 PPT p07t2 第 2 步打开 run-b-read，指认正文与清单读取；在同一材料页继续到 run-b-verify。",
            "materials": [
              "readB"
            ],
            "scriptStep": 3
          },
          {
            "surface": "执行结果检验条目是否落实 · 修后重开记录",
            "action": "在 run-b-verify 带过三对与六对结果，指认重开后计数、横幅、牌面与再次翻牌；讲完返回 PPT p07t2 第 3 步。",
            "materials": [
              "restartResult"
            ],
            "scriptStep": 4
          },
          {
            "surface": "PPT · 实际结果对应两层预期",
            "action": "返回 PPT p07t2，停在第 3 步：实际结果对应两层预期。",
            "materials": [
              "task2Map2"
            ],
            "scriptStep": 7,
            "ppt": {
              "id": "p07t2",
              "step": 2
            }
          }
        ],
        "reuse": [],
        "scriptSource": "r323-3",
        "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
        "boundary": "本任务使用 1 页 PPT（p07t2），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
      },
      {
        "id": "plan323-4",
        "number": "3.2.3.4",
        "title": "专项 Skill 怎样补充另一类工作的判断",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "检查目标决定需要什么指导 · 任务 3 请求",
            "action": "在任务 3 请求中指认桌面与窄屏检查、查阅前端指导；随后切 PPT p07t3 第 1 步。",
            "materials": [
              "trialC"
            ],
            "scriptStep": 0
          },
          {
            "surface": "PPT · 共同流程与专项判断的分工",
            "action": "打开 PPT p07t3 第 1 步：共同流程与专项判断的分工；讲完从本页材料入口打开原文。",
            "materials": [
              "task3Map0"
            ],
            "scriptStep": 7,
            "ppt": {
              "id": "p07t3",
              "step": 0
            }
          },
          {
            "surface": "配套资料与专项工作的区别 · Frontend review cues",
            "action": "从 PPT p07t3 第 1 步打开 References，指认 ../game-ui-frontend/SKILL.md；沿链接进入该文件。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "references",
              "referencesBackup"
            ],
            "scriptStep": 1
          },
          {
            "surface": "按任务选用专项标准 · Frontend Standards",
            "action": "定位信息层级、保护游戏区、桌面和手机设计；随后返回 PPT p07t3 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
            "materials": [
              "frontend",
              "frontendBackup"
            ],
            "scriptStep": 2
          },
          {
            "surface": "PPT · 专项标准对应两个检查问题",
            "action": "返回 PPT p07t3，停在第 2 步：专项标准对应两个检查问题。",
            "materials": [
              "task3Map1"
            ],
            "scriptStep": 8,
            "ppt": {
              "id": "p07t3",
              "step": 1
            }
          },
          {
            "surface": "沿引用查阅的实际范围 · 文件读取记录",
            "action": "从 PPT p07t3 第 2 步打开 run-c-read，核对前端 SKILL.md 的读取；随后打开 desktop-first-pair.png。",
            "materials": [
              "readC"
            ],
            "scriptStep": 3
          },
          {
            "surface": "标准要结合使用条件 · 桌面游戏区截图",
            "action": "打开 desktop-first-pair.png，观察状态信息与牌阵；讲完打开 mobile-bottom.png 的完整视口截图。",
            "materials": [
              "desktopPair"
            ],
            "scriptStep": 4
          },
          {
            "surface": "专项标准怎样改变判断 · 窄屏底部视口",
            "action": "打开 mobile-bottom.png，保持完整 375×667 视口可见，指认底部牌与画面中没有出现的计数；随后定位 run-c-verify。",
            "materials": [
              "mobileBottom"
            ],
            "scriptStep": 5
          },
          {
            "surface": "共同流程与专项判断怎样配合 · 视口输出",
            "action": "在 run-c-verify 指认 overlap area=0 与 metaVisible=False；返回 PPT p07t3 第 3 步，不直接跳到全局小结。",
            "materials": [
              "narrowResult"
            ],
            "scriptStep": 6
          },
          {
            "surface": "PPT · 不同问题对应不同证据",
            "action": "返回 PPT p07t3，停在第 3 步：不同问题对应不同证据。",
            "materials": [
              "task3Map2"
            ],
            "scriptStep": 9,
            "ppt": {
              "id": "p07t3",
              "step": 2
            }
          }
        ],
        "reuse": [],
        "scriptSource": "r323-4",
        "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
        "boundary": "本任务使用 1 页 PPT（p07t3），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
      },
      {
        "id": "plan323-5",
        "number": "3.2.3.5",
        "title": "复杂 Skill 怎么拆、怎么接",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "PPT p07o",
            "action": "打开 p07o 第 1 步，指认 Skill 边界、SKILL.md、文件头与正文。",
            "materials": [
              "mapEntry"
            ],
            "scriptStep": 0,
            "ppt": {
              "id": "p07o",
              "step": 0
            }
          },
          {
            "surface": "PPT p07o",
            "action": "推进 p07o 第 2 步，从正文的引用沿线观察三类配套文件。",
            "materials": [
              "mapSupport"
            ],
            "scriptStep": 1,
            "ppt": {
              "id": "p07o",
              "step": 1
            }
          },
          {
            "surface": "PPT p07o",
            "action": "推进 p07o 第 3 步，指认 Skill 边界外的另一份 SKILL.md，再回看两类连接。",
            "materials": [
              "mapOther"
            ],
            "scriptStep": 2,
            "ppt": {
              "id": "p07o",
              "step": 2
            }
          },
          {
            "surface": "PPT p07p",
            "action": "打开 p07p 第 1 步，先看核心指导与四项取用信息，再读 Reference 一行。",
            "materials": [
              "connectAll"
            ],
            "scriptStep": 3,
            "ppt": {
              "id": "p07p",
              "step": 0
            }
          },
          {
            "surface": "实际重开脚本",
            "action": "打开任务 2 的 Inspect 原始脚本写入命令，指认点击、状态读取和预期检查。",
            "materials": [
              "restartScript"
            ],
            "scriptStep": 4
          },
          {
            "surface": "PPT p07p",
            "action": "返回 p07p 第 2 步，展开脚本和素材两行，对照输入与结果。",
            "materials": [
              "connectUse"
            ],
            "scriptStep": 5,
            "ppt": {
              "id": "p07p",
              "step": 1
            }
          }
        ],
        "reuse": [],
        "scriptSource": "r323-5",
        "status": "2026-11-11：正式口播接入唯一 script.json；PPT 与材料按画面映射。作者核对状态见本节 README，未讲师试讲。"
      },
      {
        "id": "plan323-6",
        "number": "3.2.3.6",
        "title": "两份示例的系统小结",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "PPT p07m",
            "action": "打开 p07m 第 1 步，看任务边界、工作方法、判断依据与交付要求四项关系。",
            "materials": [
              "bodyRoles"
            ],
            "scriptStep": 0,
            "ppt": {
              "id": "p07m",
              "step": 0
            }
          },
          {
            "surface": "PPT p07m",
            "action": "推进 p07m 第 2 步，用下方两份已读示例对应四种作用。",
            "materials": [
              "bodyExamples"
            ],
            "scriptStep": 1,
            "ppt": {
              "id": "p07m",
              "step": 1
            }
          },
          {
            "surface": "PPT p07l",
            "action": "打开 p07l 第 1 步，显示空报告结构。",
            "materials": [
              "template"
            ],
            "scriptStep": 2,
            "ppt": {
              "id": "p07l",
              "step": 0
            }
          },
          {
            "surface": "PPT p07l",
            "action": "推进 p07l 第 2 步，展开填写示意。",
            "materials": [
              "filledTemplate"
            ],
            "scriptStep": 3,
            "ppt": {
              "id": "p07l",
              "step": 1
            }
          },
          {
            "surface": "PPT p07l",
            "action": "推进 p07l 第 3 步，观察条件与要求，再收束表达方式。",
            "materials": [
              "conditional"
            ],
            "scriptStep": 4,
            "ppt": {
              "id": "p07l",
              "step": 2
            }
          },
          {
            "surface": "PPT p07q",
            "action": "打开 p07q 第 1 步，回到与 p07o 同构的全局图，突出文件头。",
            "materials": [
              "progressMeta"
            ],
            "scriptStep": 5,
            "ppt": {
              "id": "p07q",
              "step": 0
            }
          },
          {
            "surface": "PPT p07q",
            "action": "推进 p07q 第 2 步，突出正文，保留文件头与配套资源的位置。",
            "materials": [
              "progressBody"
            ],
            "scriptStep": 6,
            "ppt": {
              "id": "p07q",
              "step": 1
            }
          },
          {
            "surface": "PPT p07q",
            "action": "推进 p07q 第 3 步，突出从正文展开的路径，显示渐进披露与篇幅建议。",
            "materials": [
              "progressMore"
            ],
            "scriptStep": 7,
            "ppt": {
              "id": "p07q",
              "step": 2
            }
          }
        ],
        "reuse": [],
        "scriptSource": "r323-6",
        "status": "2026-11-11：正式口播接入唯一 script.json；PPT 与材料按画面映射。作者核对状态见本节 README，未讲师试讲。"
      },
      {
        "id": "plan323-review",
        "number": "3.2.3.7",
        "title": "再看第一版风格指导",
        "group": "认识复杂 Skill 的资料、脚本与资源",
        "screens": [
          {
            "surface": "PPT p324c · 回看初稿",
            "action": "讲完渐进披露后切到回看页，依次指四项问题；邀请修改并保存两版，再转向 Plugin 的整包提供。",
            "visible": "使用时机、具体要求、资料入口、实际读取与结果；下方指向新玩法验证。",
            "points": [],
            "materials": [
              "p324c"
            ],
            "scriptSource": "r324-review",
            "scriptStep": 0,
            "ppt": {
              "id": "p324c",
              "step": 0
            }
          }
        ]
      },
      {
        "id": "plan324-1",
        "number": "3.2.4.1",
        "title": "Plugin 怎样组织和分发能力",
        "group": "通过 Plugin 组织和分发能力",
        "screens": [
          {
            "surface": "已有项目目录 · 四份独立 Skill",
            "action": "在编辑器中打开 3.2.1 演示项目的 .agents/skills，指认四个目录；本段先保持项目目录，下一段再切来源。录前若目录不存在，按就近准备页创建四份 Skill 的隔离演示副本。",
            "visible": "game-playtest、game-ui-frontend、web-game-foundations、react-three-fiber-game 四个目录。",
            "points": [],
            "materials": [
              "plugin-four-preparation"
            ],
            "scriptStep": 0,
            "scriptSource": "r324-1"
          },
          {
            "surface": "来源目录 · Game Studio 固定版本",
            "action": "打开固定版本 Game Studio 的 skills 目录，指认四份熟悉指导和 game-studio、phaser-2d-game；随后按切换提示查看插件声明。",
            "visible": "固定版本、完整 skills 目录与共同的 Plugin 位置；不把本地 .agents 目录叫作已安装 Plugin。",
            "points": [],
            "materials": [
              "plugin-skills-tree",
              "plugin-manifest"
            ],
            "scriptStep": 1,
            "scriptSource": "r324-1"
          },
          {
            "surface": "PPT P324-1 · 状态 1：熟悉的指导",
            "action": "从目录切到图，展示前面已准备的四份 Skill；试玩、界面突出，两份依赖弱化。",
            "visible": "四份名称与主要/配套关系；标明“前面：按任务准备的指导文件”。",
            "points": [],
            "materials": [
              "p324a-0"
            ],
            "scriptStep": 0,
            "ppt": {
              "id": "p324a",
              "step": 0
            },
            "scriptSource": "r324-2"
          },
          {
            "surface": "PPT P324-1 · 状态 2：外层包",
            "action": "在来源的完整能力集合中增加其他代表 Skill，展开 Game Studio Plugin 的统一身份与组成声明。",
            "visible": "已有四份与其他代表指导同属完整包；外层写身份与组成声明，不画成仅给本地四份目录改名。",
            "points": [],
            "materials": [
              "p324a-1"
            ],
            "scriptStep": 1,
            "ppt": {
              "id": "p324a",
              "step": 1
            },
            "scriptSource": "r324-2"
          },
          {
            "surface": "PPT P324-1 · 状态 3：提供与使用",
            "action": "展开提供者 → 整包安装 → 使用者 → 按任务选用 Skill 的关系；用鼠标指认包内已有的 game-playtest，不等待额外高亮动画。",
            "visible": "完整包保持可见；提供者、整包安装、使用者、按任务选用之间的箭头出现，鼠标指认 game-playtest。",
            "points": [],
            "materials": [
              "p324a-2",
              "plugin-concept"
            ],
            "scriptStep": 2,
            "ppt": {
              "id": "p324a",
              "step": 2
            },
            "scriptSource": "r324-2"
          }
        ],
        "reuse": [],
        "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
        "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
        "legacyAliases": [
          "plan324-2"
        ]
      },
      {
        "id": "plan324-3",
        "number": "3.2.4.2",
        "title": "Skill、MCP 与 Hook 各有什么作用",
        "group": "通过 Plugin 组织和分发能力",
        "screens": [
          {
            "surface": "PPT P324-2 · 状态 1：团队试玩方法",
            "action": "换页；先指出“教学示意”，再指试玩 Skill。",
            "visible": "新标题“团队游戏开发 Plugin · 教学示意”；试玩 Skill 写检查方法与报告要求。",
            "points": [],
            "materials": [
              "p324b-0"
            ],
            "scriptStep": 0,
            "ppt": {
              "id": "p324b",
              "step": 0
            },
            "scriptSource": "r324-3"
          },
          {
            "surface": "PPT P324-2 · 状态 2：查询工具与外部服务",
            "action": "增加 MCP 分支及边界外缺陷库，沿查询关系指认。",
            "visible": "Plugin 内显示服务连接，外部显示缺陷库；查询工具标为示意。",
            "points": [],
            "materials": [
              "p324b-1",
              "plugin-concept"
            ],
            "scriptStep": 1,
            "ppt": {
              "id": "p324b",
              "step": 1
            },
            "scriptSource": "r324-3"
          },
          {
            "surface": "PPT P324-2 · 状态 3：事件触发",
            "action": "保留原图，增加 Hook 分支；先指会话开始，再指环境检查脚本。",
            "visible": "Skill、MCP、Hook 三个可选组成并列；Hook 单独用“会话开始 → 检查脚本”；页下注支持环境与信任条件。",
            "points": [],
            "materials": [
              "p324b-2",
              "plugin-hooks"
            ],
            "scriptStep": 0,
            "ppt": {
              "id": "p324b",
              "step": 2
            },
            "scriptSource": "r324-4"
          },
          {
            "surface": "官方原文 · Skill 与 MCP 的分工",
            "action": "打开 Skills 文档的 How skills complement an MCP server，停在首段与该节末尾的职责说明。",
            "visible": "MCP 提供信息与操作；Skill 说明何时调用、怎样组织工作及输出。",
            "points": [],
            "materials": [
              "plugin-skill-mcp"
            ],
            "scriptSource": "r324-7",
            "scriptStep": 0
          },
          {
            "surface": "官方原文 · Hook 的事件与命令",
            "action": "打开 Hook 章节，先停在开头的宿主与安装方式说明；讲完首段后按切换提示定位代码示例。",
            "visible": "事件发生 → 宿主执行配置命令；脚本必须能在执行环境中运行。",
            "points": [],
            "materials": [
              "plugin-hooks",
              "plugin-shapes"
            ],
            "scriptSource": "r324-7",
            "scriptStep": 1
          },
          {
            "surface": "来源目录 · Game Studio 的实际声明",
            "action": "打开固定版本插件声明，指 name、version，再滚到 skills 字段；说明未声明 MCP 或 Hook 后按切换提示回到包目录。",
            "visible": "Game Studio 指向 skills；本版本未声明 MCP 或 Hook。",
            "points": [],
            "materials": [
              "plugin-manifest",
              "plugin-tree"
            ],
            "scriptSource": "r324-7",
            "scriptStep": 2
          }
        ],
        "reuse": [],
        "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
        "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
        "legacyAliases": [
          "plan324-4"
        ]
      },
      {
        "id": "plan324-5",
        "number": "3.2.4.3",
        "title": "安装 Game Studio，并按任务选用指导",
        "group": "通过 Plugin 组织和分发能力",
        "screens": [
          {
            "surface": "真实预跑回放 · 完整 Plugin 安装",
            "action": "打开真实安装回放的“来源与实际组成”，指安装对象与九份 Skill 清单；讲完首段后按切换提示进入“安装”。",
            "visible": "已配置官方来源；本次通过 CLI 安装完整包，记录日期与版本可查。",
            "points": [],
            "materials": [
              "plugin-run-source",
              "plugin-run-install"
            ],
            "scriptSource": "r324-5",
            "scriptStep": 1
          },
          {
            "surface": "真实目录与正文 · 按任务选择指导",
            "action": "打开固定版本 game-studio/SKILL.md，停在 Use This Skill When；随后按切换提示打开 sprite-pipeline 和 game-playtest 的职责说明。",
            "visible": "Game Studio Plugin 的包边界与 game-studio Skill 的文件层级；三个任务各自对应一份指导。",
            "points": [],
            "materials": [
              "plugin-tree",
              "plugin-skill-router",
              "plugin-skill-sprite",
              "plugin-skill-playtest"
            ],
            "scriptSource": "r324-7",
            "scriptStep": 3
          },
          {
            "surface": "真实预跑回放 · 明确选用与具体规则",
            "action": "打开同次请求，指 game-playtest、六对通关、重开归零，以及只生成清单的范围。",
            "visible": "选择的指导与本次具体规则同时可见。",
            "points": [],
            "materials": [
              "plugin-run-request"
            ],
            "scriptSource": "r324-6",
            "scriptStep": 0
          },
          {
            "surface": "真实预跑回放 · 返回清单与衔接",
            "action": "定位清单中的通关边界和重开条目，展示到可以看出已针对本次规则作答即止。",
            "visible": "5/6 不通关、6/6 才通关；重开计数归零后继续翻牌。",
            "points": [],
            "materials": [
              "plugin-run-result"
            ],
            "scriptSource": "r324-6",
            "scriptStep": 2
          }
        ],
        "reuse": [],
        "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
        "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
        "legacyAliases": [
          "plan324-6"
        ],
        "previousReuse": [
          {
            "scene": "r324-5",
            "step": 0,
            "part": 1
          },
          {
            "scene": "r324-6",
            "step": 1,
            "part": 1
          }
        ]
      }
    ],
    "pluginSlidePlan": {
      "total": 2,
      "status": "复用两页 PPT、各三个状态；原文带读、任务选用及转场逐字稿已补齐，安装调用采用真实回放。",
      "pages": [
        {
          "id": "P324-1",
          "frames": [
            "3.2.4.1"
          ],
          "states": 3,
          "content": "前面按任务准备四份指导 → 来源处完整 Plugin 的统一身份与组成声明 → 整包安装与按需选用；数量不是 Plugin 的定义。",
          "actualId": "p324a",
          "scene": "p324a",
          "page": 1,
          "progression": "目录 → 熟悉的指导 → 完整包 → 提供与选用"
        },
        {
          "id": "P324-2",
          "frames": [
            "3.2.4.2"
          ],
          "states": 3,
          "content": "教学假设：Skill 的方法、MCP 的工具、Hook 的事件触发；三个可选组成并列。",
          "actualId": "p324b",
          "scene": "p324b",
          "page": 2,
          "progression": "方法 → 工具接入 → 事件触发 → 官方原文 → 真实组成"
        }
      ]
    }
  },
  "pptPlan": {
    "total": 6,
    "status": "六页 PPT 与对应口播已同步；现场结果按实际核对。",
    "pages": [
      {
        "page": 1,
        "scene": "p07",
        "frames": "f01–f02",
        "content": "接住风格指导初稿，以检查案例学习 Skill 的使用方法",
        "progression": "问题 → 可复用指导；转向真实 Skill",
        "status": "已同步"
      },
      {
        "page": 2,
        "scene": "p07a",
        "frames": "f03–f05",
        "content": "Game Studio 中为什么选择 game-playtest",
        "progression": "整体与选中项 → 文件头；打开原文后转安装",
        "status": "已同步"
      },
      {
        "page": 3,
        "scene": "p07install",
        "frames": "f-install-0–f-install-2",
        "content": "文件放在哪里、能否发现、来源是否正确",
        "progression": "来源 → 范围 → 发现；切操作页和终端安装",
        "status": "已同步"
      },
      {
        "page": 4,
        "scene": "p07b",
        "frames": "f06–f09（含 f08-result）",
        "content": "主动指定与本次规则的分工，怎样核对清单",
        "progression": "复制请求 → 终端提交 → 历史重开条目 → 现场结果",
        "status": "已同步"
      },
      {
        "page": 5,
        "scene": "p07c",
        "frames": "f10–f14（含 f12-metadata、f13-result）",
        "content": "描述提供匹配依据，记录证明读取，规则用于核对回答",
        "progression": "请求 → 描述 → 回放读取与 A2/A3 → 读取摘要",
        "status": "已同步"
      },
      {
        "page": 6,
        "scene": "p07d",
        "frames": "f15–f18",
        "content": "表达适用范围，用两类请求复核并解释四轮结果",
        "progression": "任务范围 → 情境边界 → 两类预期 → 四轮观察 → 正文阅读",
        "status": "已同步"
      }
    ]
  }
};
if (new URLSearchParams(location.search).get('part') === '2' || new URLSearchParams(location.search).has('legacy')) {
  window.lesson.scenes.push(...[
  {
    "id": "b01",
    "label": "先看这次要求它做什么",
    "script": [
      "【操作提示｜规划回放 · S01 完整请求；从第一部分末尾另开规划回放，停在请求；讲完向下滚到 S02。】\n\n同样是翻牌游戏，为什么用了这份 Skill，方案就推荐 Phaser？还有，方案里的哪些决定是我们要求的，哪些来自这份指导，哪些只是 AI 自己补的？我们用这次保存的规划把它们分清楚。分清以后，想改变方案时，才知道该补项目要求，还是改指导。这里先要方案，不写代码。\n",
      "【操作提示｜规划回放 · S01 完整请求；从第一部分末尾另开规划回放，停在请求；讲完向下滚到 S02。】\n\n上一部分，我们已经知道怎样找到并调用一份 Skill。接下来要解决的是：它给出的方案如果和我们想的不一样，该补任务要求，还是改 Skill？要作这个决定，先得分清方案里的决定从哪里来。这次保存的请求指定 game-studio，为翻牌游戏先做规划，不写代码。请求规定了每次翻两张、配对保留、全部配对结束和重新开始。我们带着这些要求看方案，先找一项请求里没有规定的选择。",
      "【操作提示｜规划回放 · S01 完整请求；从第一部分末尾另开规划回放，停在请求；讲完向下滚到 S02。】\n\n刚才我们看的是 Skill 的名称和描述，AI 可以据此判断要不要选用一份指导。选中以后，具体怎样做事，还要看 SKILL.md 的正文。接下来，我们打开一份正文，看看里面的要求怎样用到实际任务中。\n这里换用 Game Studio 中的 game-studio。Game Studio 是整套插件的名字，game-studio 则是其中负责游戏前期规划的一份 Skill。还没开始写游戏时，这份指导会帮助 AI 考虑玩法、技术、界面和检查安排。\n备课时，我曾让 Codex 使用这份 Skill，为翻牌游戏写一份开发方案。现在打开的是那次任务的记录。请求只要求先给方案，不写代码；玩法是每次翻两张牌，配对成功的保留，全部配对后结束，并且能够重新开始。我们先看 Codex 给了什么方案，再回到正文，找出这些安排和指导之间的联系。"
    ]
  },
  {
    "id": "b02",
    "label": "方案里的决定来自哪里",
    "script": [
      "【操作提示｜同一回放 · S02 技术、玩法、素材与检查安排；按原回复顺序向下看；讲牌数和等待时间时停在玩法段。看完另开 game-studio 原文件。】\n\n方案选了 Phaser，但请求只给了翻牌规则，没有指定框架。返回自己解释说，“按 game-studio 默认走 Phaser 路径”，同时也承认这个体量用纯 DOM、CSS 可以实现。也就是说，翻牌规则并没有唯一推出 Phaser；这次选型采用了 Skill 提供的默认路线。\n\n不过，返回说自己遵循了指导，还不足以让我们确认依据。接着查同次读取，再到原文件看有没有这条建议。以后遇到一个不合适的默认选择，也要这样找到它从哪里来，才知道改哪一处。\n",
      "【操作提示｜规划回放 · S04 同次入口读取；指认用户点名、入口读取和工具返回核对，再打开同版原文件。】\n\n这次用户点名了 game-studio，工具记录也显示，它读取了这份 SKILL.md，返回中包含正文。结合刚才的选型解释，我们有了两方面依据：它实际取得了这份指导，方案也明确把选择归于其中的默认路线。名称负责选中对象，具体采用什么做法，要看正文。单凭读过文件，还不能认定每条指导都已经落实，后面仍要对照方案。\n",
      "【操作提示｜规划回放 · S02 技术选择原话；停在“按 game-studio 默认走 Phaser 路径”及纯 DOM/CSS 的说明，先解释选择理由；再看同页 S04。】\n\n方案采用了 Phaser，但翻牌规则本身并没有规定框架。为什么选它？返回写的是“按 game-studio 默认走 Phaser 路径”，同时也说明，这个体量用纯 DOM、CSS 也能实现。这里值得追的不是 Phaser 好不好，而是这项默认选择的依据。找到依据，之后才知道怎样调整。",
      "【操作提示｜同次回放 · S04 点名、入口读取与正文核对；指认本次请求已点名 game-studio，以及 events 第 5 行的入口读取；再另开固定版本 SKILL.md。】\n\n返回说遵循了 Skill，我们还要核对它实际取得了什么。这次请求点名 game-studio，工具记录也显示读出了这份 SKILL.md 的正文。接下来到同版原文件核对有没有这条默认建议。读取记录证明内容进来了，方案中的解释说明它把选择归于哪条指导；不能只凭“读过”，就认定所有要求都照做了。",
      "【操作提示｜规划回放 · S02 技术选择原话；停在“按 game-studio 默认走 Phaser 路径”及纯 DOM/CSS 的说明，先解释选择理由；再看同页 S04。】\n\nCodex 在方案里选择了 Phaser。这是一个游戏框架，可以提供游戏开发中常用的能力。我们刚才的请求只说了翻牌规则，没有指定框架，Codex 为什么会选它？\n方案中写着“按 game-studio 默认走 Phaser 路径”，还说明这个体量的游戏用普通网页技术也能实现。也就是说，Codex 给出的选型理由，是采用这份 Skill 推荐的默认方案。我们回到这次任务的读取记录，再核对原文。",
      "【操作提示｜同次回放 · S04 点名、入口读取与正文核对；指认本次请求已点名 game-studio，以及 events 第 5 行的入口读取；再另开固定版本 SKILL.md。】\n\n这次任务中，Codex 读取了 game-studio 的 SKILL.md，工具返回了文件正文。这说明 Codex 确实取得了这份指导，而不只是最后在回答中提到了名字。\n接下来打开同一版本的 SKILL.md，看看正文是否真的推荐 Phaser。这样就能把方案中的选择和它采用的依据对起来。"
    ]
  },
  {
    "id": "b03",
    "label": "正文给默认方案，也给适用条件",
    "script": [
      "【操作提示｜同一文件 · Use This Skill When → Do Not Stay Here When → Routing Rules；读适用与转交条件，再指认专项路径；继续向下到 Default Workflow。】\n\n这份 Skill 适用于还没确定技术，或者需要一起安排架构、界面、素材的任务。这次是从头规划翻牌游戏，符合它的适用条件。默认方案也有前提：如果我们已有项目和技术要求，要把这些要求一起交给它，不能把这份默认建议当成所有项目都必须采用的技术。",
      "【操作提示｜game-studio · Overview 的二维游戏默认路线；从 Overview 的默认路线开始读；Default Workflow 第 3 项稍后顺读时再次核对，此处不跳到后文。】\n\nOverview 确实把二维 Phaser 路线作为默认建议。Phaser 提供场景、图片和动画等游戏能力。这样，方案采用它就有了可指认的正文依据。默认建议能帮助尚未确定技术的任务开始规划，但是否适合当前项目，还要继续看适用条件。",
      "【操作提示｜同一文件 · Use This Skill When → Do Not Stay Here When → Routing Rules；读适用与转交条件，再指认专项路径；继续向下到 Default Workflow。】\n\n这里适用于技术尚未确定，或需要一起考虑架构、界面、素材的任务。这次从头规划翻牌游戏，符合这个范围。如果已有项目要求继续用原来的技术，就应把项目约束一起提供，不能因为正文推荐 Phaser 就重选一套。\n后面的 Routing Rules 又把实现、界面、试玩分给专项指导。一份正文既要告诉 AI 在什么条件下采用某种做法，也要说明什么时候转给别的指导。我们读它，是为了理解这些决定，接下来再看它怎样把一个简短需求展开成方案。",
      "【操作提示｜game-studio · Overview 的二维游戏默认路线；从 Overview 的默认路线开始读；Default Workflow 第 3 项稍后顺读时再次核对，此处不跳到后文。】\n\nSKILL.md 开头的 Overview，也就是概述，确实推荐二维浏览器游戏默认采用 Phaser。Phaser 提供场景、图片和动画等常用能力。方案中的那句话，对应的就是这里。\n但“默认推荐”还不是“所有项目必须这样做”。我们继续看正文给出的适用条件。",
      "【操作提示｜同一文件 · Use This Skill When → Do Not Stay Here When → Routing Rules；读适用与转交条件，再指认专项路径；继续向下到 Default Workflow。】\n\nUse This Skill When 说明什么时候适合使用这份指导：比如还没确定技术，或者需要一起规划架构、界面和素材。这次从头规划翻牌游戏，就属于这样的任务。\n如果我们是在已有项目里加游戏，项目已经规定了技术，就应该把这些约束告诉 Codex，让 Codex 结合项目作决定。不能因为 Skill 有一套默认建议，就忽略项目原来的要求。\n再往下，Do Not Stay Here When 说明哪些工作不应继续停留在这份规划指导中。Routing Rules，也就是转交规则，则给出了实现、界面和试玩等专项 Skill 的路径。先记住：game-studio 负责整体规划，更具体的工作还有其他指导。稍后我们会打开其中一份看。"
    ]
  },
  {
    "id": "b04",
    "label": "把通用步骤落实为本次玩法",
    "script": [
      "【操作提示｜规划回放 · S01 的翻牌规则；指认翻两张、配对保留、全部配对结束和重开；然后返回原文件的同一流程。】\n\n这次请求给出了翻两张、配对保留、不匹配盖回、全部配对结束。按正文“先明确玩家动作和游戏循环”的做法展开，就能推出程序要记住当前翻开的两张牌、已经配好的牌，以及是否结束。指导提供思考顺序，当前规则提供具体答案。\n\n但规则没有给出不匹配后等待多久。方案补出的八百毫秒，需要我们确认。它和 Phaser 不同：一个是这次模型补的参数，一个在正文里有默认依据。读方案时不能把这两类决定都当成用户已经确定的要求。\n",
      "【操作提示｜game-studio · Default Workflow 第 1–6 项；回到流程前两项，再依次向下看技术、界面、素材与试玩，讲完进入 Output Expectations。】\n\n第 3 项又明确了二维浏览器游戏默认用 Phaser，后面再安排界面、素材和试玩。比如结算时要显示步数，规划界面时就得安排；要检查重开，就得先说清重开后哪些状态恢复。",
      "【操作提示｜game-studio · Default Workflow 第 1、2 项；停在玩家动作、游戏循环两项；讲完切回请求标签。】\n\nDefault Workflow 先要求明确玩家动作、游戏循环和结束条件。为什么从这里开始？因为程序需要记录什么、界面要显示什么，都得由玩法决定。只说“做一个翻牌游戏”，还不足以直接确定这些内容。",
      "【操作提示｜规划回放 · S01 的翻牌规则；指认翻两张、配对保留、全部配对结束和重开；然后返回原文件的同一流程。】\n\n按这次请求，玩家翻两张，配对后保留，没配对再盖回，直到全部配对结束。把这个过程展开，才知道需要记录当前翻开的牌、已经配好的牌和是否结束。这是把通用方法用到当前规则上。\n不过，配错以后等多久，请求没有给出。方案里的八百毫秒是模型补的选择，需要我们确认。它与 Phaser 的区别在于：Phaser 有正文默认建议，等待时间则没有。两者都不能直接当成用户已经规定的要求。",
      "【操作提示｜game-studio · Default Workflow 第 1–6 项；回到流程前两项，再依次向下看技术、界面、素材与试玩，讲完进入 Output Expectations。】\n\n沿流程继续，技术、界面、素材和试玩都要围绕玩法安排。比如规则需要结算，界面就要安排结算状态；要检查重开，就要明确重开后恢复什么。\n所以正文写的是可反复使用的思考方法，当前请求提供具体游戏规则。换一个游戏，仍要明确动作和结束条件，但程序状态、素材和检查项应随之改变。",
      "【操作提示｜game-studio · Default Workflow 第 1、2 项；停在玩家动作、游戏循环两项；讲完切回请求标签。】\n\n现在读到 Default Workflow，也就是默认工作流程。前两项先要求明确玩家能做哪些动作、游戏怎样反复进行，以及什么时候结束。\n为什么先确定这些？因为程序要记录什么，页面要显示什么，都得从玩法推出来。我们用刚才的翻牌请求来理解这两条。",
      "【操作提示｜规划回放 · S01 的翻牌规则；指认翻两张、配对保留、全部配对结束和重开；然后返回原文件的同一流程。】\n\n玩家先翻一张，再翻一张。两张相同就保留，不同就盖回去，所有图案配齐后结束。程序因此要记住当前翻开的两张牌、已经配好的牌，以及这一局有没有结束。\nSkill 提供了“先把玩法想清楚”的做法，这次请求则提供了翻牌的具体规则。还有一些细节没说，比如两张不匹配的牌隔多久盖回去。方案采用了八百毫秒，这是 Codex 补出的选择，需要我们确认。和前面的 Phaser 不同，这个数既没有写在请求里，也不是这份 game-studio 规定的默认值。",
      "【操作提示｜game-studio · Default Workflow 第 1–6 项；回到流程前两项，再依次向下看技术、界面、素材与试玩，讲完进入 Output Expectations。】\n\n回到工作流程，后面依次考虑技术、界面、素材和试玩。它们都要和刚才的玩法配合：有结算状态，界面就要安排结算提示；能够重新开始，检查时就要核对重开后的状态。\n这份指导并没有把所有游戏写成同一种玩法。换一个游戏，仍然先明确玩家动作和结束条件，再据此安排技术与检查；具体要记录哪些状态、检查哪些操作，则要重新确定。"
    ]
  },
  {
    "id": "b05",
    "label": "输出要求让方案可核对",
    "script": [
      "【操作提示｜规划回放 · S02 的技术、素材与检查段；按原回复指认技术和素材取舍，再看到检查安排；随后打开下一组单项修改材料。】\n\n方案已经安排初始、翻开和结算等截图，说明它考虑了检查。但假如把这份方案交给另一个人，他知道要看结算画面，却还得自己决定怎么进入结算、看到什么才算正确。“安排了检查”和“别人能照着检查”之间，还差一步。\n我们希望以后每次生成规划都补上这一步，所以接下来改 Skill 的规划输出要求。若只是这一个游戏的牌数没说清，应补当前任务；这里缺的是可以反复使用的写法。\n",
      "【操作提示｜game-studio · Output Expectations；先看 planning 与 implementation 两类输出条件；讲完切回 S02。】\n\nOutput Expectations 把这些考虑落实到交付物：规划时交玩法、技术、界面、素材和检查安排，实现时再交相应代码。这让我们知道收到方案后应该核对什么，而不只是判断它写得长不长、栏目全不全。",
      "【操作提示｜规划回放 · S02 的技术、素材与检查段；按原回复核对技术、素材和检查安排；讲完另开另一组结果对照，先看原版的一条检查。】\n\n回到方案，素材用了简单牌背和图案，检查安排了初始、翻开和结算等截图。这里已有检查意识，但交给另一个人，他还得自己补充怎样进入这些状态、看到什么才算正确。\n另外，八对牌和八百毫秒都不是原请求规定的，需要另行确认。补这些参数解决的是本次游戏信息；把检查安排写到别人能照着做，解决的是生成计划的方法。接下来我们就改后面这一项。",
      "【操作提示｜game-studio · Output Expectations；先看 planning 与 implementation 两类输出条件；讲完切回 S02。】\n\n流程说明怎样推进，接下来的 Output Expectations，也就是输出要求，说明最后要交出什么。规划任务要交代玩法、技术、界面、素材和检查安排；进入实现后，还要有对应的代码和文件。\n我们这次只要方案，所以先核对方案有没有把这些事情交代清楚。",
      "【操作提示｜规划回放 · S02 的技术、素材与检查段；按原回复核对技术、素材和检查安排；讲完另开另一组结果对照，先看原版的一条检查。】\n\n回到 Codex 的方案，技术选择有了，素材安排了简单牌背和图案，检查部分也列了初始、翻开和结算等状态的截图。这些安排都能对应到正文要求考虑的内容。\n不过，“要检查结算画面”还不等于别人可以直接照着检查。操作人得知道怎样进入结算、看到什么才算正确。接下来，我们把 Skill 中关于检查计划的要求写得更具体，再调用一次，看输出会怎样变化。"
    ]
  },
  {
    "id": "b06",
    "label": "在负责输出的原位置改一项要求",
    "script": [
      "【操作提示｜编辑器 · 独立演示副本 .agents/skills/game-studio/SKILL.md；找到 Output Expectations 的 planning 条目，实际新增材料中的一句要求并保存，查看差异。】\n\n我们把刚才需要由操作人补的内容写进输出要求：前置状态说明从哪里开始，用户操作说明怎样触发，可见结果说明怎样判断。再要求覆盖结束和重开，避免清单只有正常游玩；注明尚未执行，避免把检查安排写成测试结论。\n\n这些都细化原有的规划要求，所以改在 Output Expectations 的 planning 条目下，保存后核对差异。这次不是选错了 Skill，而是选对以后交出的计划还不够具体，改 description 解决不了这个问题。\n",
      "【操作提示｜Codex · 进入修改后的演示项目，启动新会话；复制“相同规划请求”，发送前确认其中没有三项结构要求，随后发送。】\n\n现在在这个演示项目里开一个新会话，发出材料里同一条规划请求。三个字段只写在 Skill 正文里，请求仍然只说翻牌规则和先给方案。这样回来可以核对，它有没有把正文新增的要求用到方案里。\n\n等待时先看保存的两版读取和返回，随后再回来检查刚提交的这一轮。",
      "【操作提示｜历史对照 · 原版的浏览器 QA 检查；另开结果对照，停在原版“结算 → 重开 → 可正常再玩”；讲完切编辑器。】\n\n先看另一组保存的规划对照。原版写着“结算 → 重开 → 可正常再玩”。这已经考虑了重开，问题不在有没有提到，而在“正常”还需要操作人解释：从哪种状态开始，点什么，之后看哪些变化？\n如果游戏根本没有规定重开后怎么办，我们应该先问清规则；这里要补的则是把已有规则写成检查步骤的方法。以后生成同类计划都需要这套方法，因此把它写进 Skill，比每次重新提醒更合适。",
      "【操作提示｜编辑器 · 演示副本的 Output Expectations；打开已准备的原版副本，实际增加一条要求并保存；查看单文件差异。此时不预先应用补丁。】\n\n我在演示副本的 Output Expectations 中找到规划输出条目。它本来就负责规定方案交什么，我们在这里细化检查计划：写前置状态，让人知道起点；写用户操作，让人知道怎样触发；写预期可见结果，让人知道怎样判断。\n再要求覆盖结束和重开，并明确只是计划、尚未执行。保存以后看差异，确认没有改其他要求。这次已选对 Skill，缺的是选用以后的做法，因此改正文；修改负责选用的 description，不能补上计划里的执行细节。",
      "【操作提示｜Codex · 修改版项目的新会话，粘贴并发送原规划请求；从“单项修改与相同请求”复制 planning Prompt；在修改版项目启动新会话并发送，随后切历史读取材料。】\n\n接着在修改版项目开新会话，发出同一条规划请求。请求里仍然只给游戏规则和先做方案，不把刚新增的结构要求再说一遍。否则，即使输出符合要求，我们也难以分清它采用的是正文还是这次提醒。\n等待时看预先保存的对照，随后再回来核对本次实际读取和返回。这里要验证的只是新增要求，不把牌数、素材等其他变化归因于这条修改。",
      "【操作提示｜历史对照 · 原版的浏览器 QA 检查；另开结果对照，停在原版“结算 → 重开 → 可正常再玩”；讲完切编辑器。】\n\n为了比较修改前后的差别，我在备课时另外做过一组调用，仍然是让 Codex 为翻牌游戏做规划。这组调用对原版和修改版使用同一条请求。这里先打开使用原版 Skill 生成的方案。它写的是“结算 → 重开 → 可正常再玩”。\n假如让你照着这一条检查，你还要自己补充：从结算面板开始，点击重开以后，哪些东西应该消失，哪些数字应该归零，怎样才算正常再玩？这条清单还不够具体。\n如果游戏没有规定重开后要恢复什么，我们应先补充本次游戏规则。而我们现在要改善的是清单的写法：让 Codex 把规则展开成别人能操作、能判断的步骤。以后写其他游戏的检查计划也需要这种做法，所以我们把它加到 Skill 里。",
      "【操作提示｜编辑器 · 演示副本的 Output Expectations；打开已准备的原版副本，实际增加一条要求并保存；查看单文件差异。此时不预先应用补丁。】\n\n现在在演示副本中修改 game-studio 的 SKILL.md。我们找到 Output Expectations 下负责规划输出的条目，在这里增加要求。\n每一项检查都写前置状态，也就是从什么情况开始；写用户操作，也就是要做什么；再写预期可见结果，也就是做完以后应该看到什么。还要求至少覆盖游戏结束和重新开始，并注明这只是计划、尚未执行。\n保存后核对差异，确认只增加了这句话。之所以改这里，是因为 Codex 已经选用了正确的 Skill，现在需要细化的是方案怎样写。description 负责让 AI 判断要不要用这份指导，正文中的输出要求才负责这件事。",
      "【操作提示｜Codex · 修改版项目的新会话，粘贴并发送原规划请求；从“单项修改与相同请求”复制 planning Prompt；在修改版项目启动新会话并发送，随后切历史读取材料。】\n\n文件改好后，在修改版项目里开一个新会话，仍然发出刚才那条翻牌规划请求。我们不把新增的检查要求再写进请求，想观察的是 Codex 读到新版 Skill 后，会不会采用其中的新要求。\nCodex 处理期间，我们先看备课时保存的两次调用，比较原版和修改版。讲完这组历史记录，再回来检查现在提交的任务。"
    ]
  },
  {
    "id": "b07",
    "label": "先确认这轮读到的是新版",
    "script": [
      "【操作提示｜两版实际读取 · original-verified 与 modified；依次看两轮入口读取，核对修改版工具返回包含新增句；版本与哈希按需展开，再转到结果对照。】\n\n为什么先查读取，不直接看新表格？因为我们要核对的是这条正文修改有没有被用上。如果仍读到旧版，即使返回碰巧出现三列，也不能据此说新版要求已经生效。保存的记录里，原版没有新增句，修改版工具返回有这句话。确认了输入版本，才有依据继续检查输出。\n",
      "【操作提示｜等待期间 · 11 月 7 日两版实际读取；切历史材料，明确是 original-verified 与 modified；核对新增句，讲完看保存的结果对照。】\n\n先确认版本，是为了避免改错方向。如果它仍读到旧版，返回没变化就不能说明新写法无效；如果没读新版却碰巧写出三列，也不能说我们的修改已经用上了。\n保存的两轮记录中，原版没有新增句，修改版工具返回包含新增句。这解决的是“新要求有没有进入这轮任务”。接下来才检查它有没有体现在输出中。",
      "【操作提示｜等待期间 · 11 月 7 日两版实际读取；切历史材料，明确是 original-verified 与 modified；核对新增句，讲完看保存的结果对照。】\n\n先看保存的两次调用分别读到了什么。原版的工具返回中，没有我们刚增加的那句话；修改版的工具返回中，能找到这条完整要求。\n为什么要先查这一步？假如我们已经改了文件，Codex 却仍读到旧版本，输出没有变化，问题首先在版本或读取上，不能马上断定新增要求写得不好。\n现在这组记录已经确认，使用修改版 Skill 的那次调用读到了新要求。接下来才看方案是否照着写了。"
    ]
  },
  {
    "id": "b08",
    "label": "原版已有检查，新版采用了三项结构",
    "script": [
      "【操作提示｜结果对照 · 原版的测试方案；先在原版指出结束与重开要点，再向下看修改版检查表。】\n\n这里换到十一月七日保存的对照。原版写了“结算 → 重开 → 可正常再玩”，结束和重开本来就有。不过，操作人还得自己补：从结算面板开始，点击哪个按钮，重开后看哪些变化。“正常”还没有展开。",
      "【操作提示｜结果对照 · 修改版 12 行检查表，重点第 8–10 项；先看三列列头和“待执行”标题，再沿结算后重开的一行逐列指认。】\n\n看结束后重开这一项，就能判断这次修改解决了什么。原版的“可正常再玩”需要操作人自行解释；修改版写出了结算面板可见时点击重新开始，并检查面板关闭、牌面重新洗牌和计数归零。另一个人接手时，就有了起点、动作和判断依据。十二项这个数量不是我们要验证的重点。\n\n这份返回采用了新增的三项结构，也注明待执行，支持这次细化要求得到了落实。但还不能因此说整份计划都正确，更不能说游戏已经通过测试。我们先回刚才提交的任务，按同样的方法核对。\n",
      "【操作提示｜回 Codex · 现场修改版的实际读取与返回；未完成时剪去等待；先找新增句，再按本轮实际输出核对三项结构、结束、重开和待执行声明。】\n\n这次先确认它读到的正文里有新增句，再找结束或重开的一项，对照前置状态、用户操作和可见结果。少了哪一项，就指着这一项说明；如果没有按要求写，回到实际读取和原句查原因，再调整并重新调用。\n\n同样有三列，也还要看步骤能不能执行。我们用保存的返回里一条具体问题来看。",
      "【操作提示｜结果对照 · 修改版 12 行检查表，重点第 9 项；回到结果对照，直接定位修改版第 9 项“结算后重开”；按前置状态、操作、可见结果三列核对，再看待执行标题。】\n\n拿结算后重开这一项比较就够了。原版的“可正常再玩”，在修改版里展开成了：结算面板可见时，点击重新开始，检查面板关闭、牌面重新洗牌和计数归零。起点、动作和通过条件都能找到，操作人需要自行补充的内容减少了。\n返回也标明待执行。这支持这次新增的输出要求得到了采用。我们还没有真的执行这些检查，也没有因此审定整份方案，不能把它说成游戏已通过测试。",
      "【操作提示｜Codex · 返回现场读取与检查计划；回到刚才提交的会话。结果按实际说明；不把历史的 12 项当作现场固定结果。若未读新版，先处理版本；若未落实要求，调整后重发，取得本轮结果再继续。】\n\n现在回到刚提交的会话，按本轮实际结果核对。先找读取正文里的新增句，再选结束或重开的一项，看它是否写清起点、操作和可见结果。没有读到新版，就先处理版本；读到了却没落实，再对照原句找遗漏，修改后重新调用。\n即使三项齐全，还要想一遍别人能不能照做。下面用保存的返回看一个结构符合、内容却仍需修改的例子。",
      "【操作提示｜结果对照 · 修改版 12 行检查表，重点第 9 项；回到结果对照，直接定位修改版第 9 项“结算后重开”；按前置状态、操作、可见结果三列核对，再看待执行标题。】\n\n看采用修改版 Skill 生成的方案，其中有一项“结算后重开”。前置状态是结算面板可见，操作是点击重新开始，预期结果是面板关闭、牌面重新洗牌、步数和配对数归零。\n和原版的“可正常再玩”相比，这次把操作人原来要自行补充的内容展开了。表格标题也注明待执行，避免把写好的检查计划误当成已经通过的检查。\n因此，在这次保存的调用中，新增要求确实用到了输出里。不过，我们现在检查的是计划怎样写，还没有打开游戏执行这些步骤。",
      "【操作提示｜Codex · 返回现场读取与检查计划；回到刚才提交的会话。结果按实际说明；不把历史的 12 项当作现场固定结果。若未读新版，先处理版本；若未落实要求，调整后重发，取得本轮结果再继续。】\n\n现在回到刚才提交任务的 Codex 会话。我们先核对读取的正文里有没有新增句，再找一项结束或重开的检查，看是否交代了起点、操作和可见结果。\n如果读的还是旧版，先处理版本；如果读到新版却漏了要求，就对照新增句找出缺少的内容，再修改、重新调用。\n即使起点、操作、结果都写了，也还要判断内容能不能照着做。接下来回到那份保存的修改版方案，看一个具体问题。"
    ]
  },
  {
    "id": "b09",
    "label": "格式符合，还要检查内容能否观察",
    "script": [
      "【操作提示｜核对意见 · 原句与讲师分析对照表；先看第 10 项“无残留计时器/动画回调”，再看锁定时机和窄屏牌阵两处原句。随后进入“实际读取顺序”。】\n\n再看一处能帮助我们审查内容的问题。第十项写“无残留计时器、动画回调”，这是想防止上一局的动作干扰新局。但手动检查的人只看游戏画面，不能直接看到内部回调有没有残留。三列都填了，仍可能照着做不了。\n\n可以把风险落到玩家能观察的现象上：重开以后，继续等待并翻牌，检查新局有没有被上一局的延迟动作干扰。具体步骤和预期还要按游戏规则确定。这是审阅建议，尚未重新调用验证。\n\n所以我们核对修改时要分两步：先看新增要求有没有采用，再看采用以后是否真的解决了原来的问题。这里结构已经用上，内容仍有需要修订的地方。\n",
      "【操作提示｜核对意见 · 原句与讲师分析对照表；只指第 10 项“无残留计时器/动画回调”及旁边核对意见，解释怎样改为可观察的检查；其他意见保留供查阅，不逐条讲。】\n\n第十项写“无残留计时器、动画回调”。它想检查的是上一局的动作会不会干扰新局，但手动检查的人看不到内部回调。把内部条件填进“可见结果”这一列，并没有让它变成可见结果。\n要检查这个风险，可以安排重开后继续等待和翻牌，观察新局是否被旧局的延迟动作干扰；具体步骤和预期仍须按游戏规则确定。这是我们的修订建议，还没重新调用验证。\n因此，验证修改有两件事：确认要求被采用，确认采用后真的改善了原问题。刚才的对照支持结构变具体了；这里说明内容仍要人审。以后输出不够好时，也要先分清是输入缺失、要求不清、版本不对，还是这次输出没有落实，再决定改哪里。",
      "【操作提示｜核对意见 · 原句与讲师分析对照表；只指第 10 项“无残留计时器/动画回调”及旁边核对意见，解释怎样改为可观察的检查；其他意见保留供查阅，不逐条讲。】\n\n这份修改版方案的第十项检查进行中重开，预期结果中写着“无残留计时器、动画回调”。这句话关心的是：重开以后，上一局尚未完成的延迟动作，会不会继续影响新的一局。\n但人看着游戏画面，无法直接判断程序内部还剩几个计时器。把这句话放进“可见结果”一列，也没有说明该怎样检查。\n可以把要查的问题改成玩家能观察的步骤。例如，游戏正在等待两张牌盖回时点击重开，然后继续等待、翻牌，检查新的一局是否被旧局的延迟动作干扰。具体预期还要符合游戏规则。这是我们对这条检查的修改建议，尚未重新验证。\n所以，刚才的修改让清单写得更具体了，但不代表每一项都已经正确。我们仍然要对照规则，判断写出的动作能否执行、结果能否观察。"
    ]
  },
  {
    "id": "b10",
    "label": "这次还读取了哪些指导",
    "script": [
      "【操作提示｜modified · 按完成事件排列的实际读取表；从入口向下看到专项指导、错误目录退出 1、查找目录和共享资料读取。随后另开 game-ui-frontend。】\n\n刚才我们能改一条输出要求，是因为知道它负责什么。现在再看：规划涉及技术、界面和试玩，这些具体方法都要塞进同一份正文吗？\n\n这次记录里，入口之外还读取了试玩、项目基础结构、Phaser 实现和界面指导。Routing Rules 提供了通向专项指导的路径。我们用界面这一项来看这种分工：入口决定什么时候需要界面工作，专项 Skill 负责怎样安排和检查界面。\n",
      "【操作提示｜modified · 按完成事件排列的实际读取表；在同轮实际读取表中定位专项 Skill，重点指认 game-ui-frontend；随后另开该文件，目录查找失败保留在材料中供查阅。】\n\n正文越写越具体，是否就应该把技术、界面、试玩的全部方法都塞进去？先想这些内容各自解决什么。规划要知道需要安排界面，但怎样让状态清楚、操作方便，是一项可以单独展开的工作。\n这轮记录确实读取了界面等专项 Skill。我们只取界面这一项，看看入口为什么把工作转给它，不逐项介绍所有读取。",
      "【操作提示｜modified · 按完成事件排列的实际读取表；在同轮实际读取表中定位专项 Skill，重点指认 game-ui-frontend；随后另开该文件，目录查找失败保留在材料中供查阅。】\n\n我们已经改过 game-studio 的一项输出要求。再看这份规划指导怎样使用其他文件。\n规划游戏时既要考虑技术，也要考虑界面和试玩。如果把每一项的详细做法都写进同一份 SKILL.md，文件会很长，也不方便单独使用其中一种方法。game-studio 的做法，是在正文中引用其他专项 Skill。\n刚才那次修改版调用里，Codex 除了读取规划指导，也读取了游戏界面指导 game-ui-frontend。我们打开这份文件，看看两份 Skill 怎样分工。"
    ]
  },
  {
    "id": "b11",
    "label": "另一份 Skill 负责一项完整工作",
    "script": [
      "【操作提示｜game-ui-frontend · Frontend Standards 第 3、4 项；另开原文件，按顺序定位信息层次和保护游戏区域的要求；读完切到界面前后对照。】\n\ngame-ui-frontend 先要求把关键状态放在容易看到的位置，把低频设置和长说明收进菜单或抽屉。比如玩游戏时要看分数，不应该先在一大段说明里找。\n\n接着要求给游戏区域留出空间，别让常驻说明挡住操作。帮助可以收起，但要留下能找到的入口。这里把“界面清楚”变成了信息放哪里、何时显示的具体做法。",
      "【操作提示｜独立界面调整 · 同一游戏、同尺寸、同状态的前后画面（待补）；录制前补齐同状态实录；讲述时围绕一处真实变化来回指认，再打开和收起说明区域，核对帮助入口是否仍可找到。当前口播只讲观察方法。】\n\n如果按这条指导把长说明收起来，要在同一游戏、相同窗口大小和状态下比较：操作区是不是更清楚，分数、时间等关键状态还在不在。\n\n还要实际打开、收起帮助。画面简洁以后，需要的信息仍得找得到，操作也不能被遮住。",
      "【操作提示｜game-studio · Routing Rules 的 HUD and menu direction；返回入口，指认通向 game-ui-frontend 的路径；讲完打开“两个入口引用同一份资料”。】\n\n入口的 HUD and menu direction 就指向这份 Skill。它有自己能承担的工作：根据当前游戏安排界面，再检查信息和操作。即使不做整套规划，只调整界面，也能选用这份指导。\n\n这些引用里也有只提供判断资料的文件。接着看两份 Skill 共用的技术选型资料。",
      "【操作提示｜game-ui-frontend · Frontend Standards 第 3、4 项；另开原文件，按顺序定位信息层次和保护游戏区域的要求；读完切到界面前后对照。】\n\ngame-ui-frontend 要求关键状态容易看到，低频设置和长说明可以收进菜单或抽屉，并保护游戏操作区。它把“界面清楚”展开成了具体选择：什么需要一直显示，什么可以按需打开，什么不能挡住操作。\n这已经是一套完成界面工作的做法，而不是一张供人查询的知识表。要用它，需要提供当前游戏、现有界面和调整目标；之后还要检查状态是否看得见、操作是否受阻。",
      "【操作提示｜独立界面调整 · 同一游戏、同尺寸、同状态的前后画面（待补）；录制前补齐同状态实录；讲述时围绕一处真实变化来回指认，再打开和收起说明区域，核对帮助入口是否仍可找到。当前口播只讲观察方法。】\n\n如果按这条要求收起长说明，判断改善不能只看页面是不是更空。要在同一游戏、相同窗口和状态下比较，确认操作区更清楚，同时分数、时间等关键状态仍容易找到。还要打开、收起帮助，检查入口能找到、内容能使用。",
      "【操作提示｜game-studio · Routing Rules 的 HUD and menu direction；返回入口，指认通向 game-ui-frontend 的路径；讲完打开“两个入口引用同一份资料”。】\n\n入口的 HUD and menu direction 指向这份 Skill，需要界面工作时可以继续读取它。即使不做整套规划，只调整已有游戏的界面，也能单独提出这项任务。\n这就是独立 Skill 的理由：它能接到明确输入，按一套方法完成一项工作。接着看另一种引用，目标是供多项工作查阅同一份知识。",
      "【操作提示｜game-ui-frontend · Frontend Standards 第 3、4 项；另开原文件，按顺序定位信息层次和保护游戏区域的要求；读完切到界面前后对照。】\n\ngame-ui-frontend 负责游戏界面设计。比如 Frontend Standards，也就是界面标准，其中要求把玩家经常要看的状态放在容易找到的位置，把低频设置和长说明收进菜单或抽屉，并为游戏操作区留出空间。\n拿翻牌来说，步数和时间是游玩时要看的，不应该埋在一大段说明里；帮助说明可以收起，但需要时仍要找得到。这份 Skill 把“界面要清楚”展开成了信息放哪里、什么时候显示、怎样避免挡住操作的具体做法。",
      "【操作提示｜独立界面调整 · 同一游戏、同尺寸、同状态的前后画面（待补）；录制前补齐同状态实录；讲述时围绕一处真实变化来回指认，再打开和收起说明区域，核对帮助入口是否仍可找到。当前口播只讲观察方法。】\n\n如果按照这条指导收起长说明，怎样判断调整是否合适？需要在同一个游戏、相同窗口大小和状态下比较：牌阵是否更方便操作，步数和时间是否仍容易看到。\n还要打开和收起帮助，确认说明能够找到，也不会挡住操作。只看页面变得更空，还不足以判断界面变好了。",
      "【操作提示｜game-studio · Routing Rules 的 HUD and menu direction；返回入口，指认通向 game-ui-frontend 的路径；讲完打开“两个入口引用同一份资料”。】\n\n回到 game-studio 的 Routing Rules，其中 HUD and menu direction，也就是状态显示和菜单设计，指向刚才的 game-ui-frontend。规划指导负责提醒要考虑这项工作，界面 Skill 则提供更具体的做法。\n如果游戏已经做好，只想调整界面，也可以单独选用 game-ui-frontend。它能承担一项完整工作，不必每次都从整体规划开始。下面再看另一种引用：两份 Skill 共用一份参考资料。"
    ]
  },
  {
    "id": "b12",
    "label": "两份 Skill 可以共用同一份资料",
    "script": [
      "【操作提示｜game-studio · References；回到已打开的入口文件，在 References 找到 ../../references/engine-selection.md。】\n\ngame-studio 的 References 指向 engine-selection.md。详细选型条件放在这个文件里，入口不再重复写一遍。",
      "【操作提示｜web-game-foundations · References；另开 web-game-foundations，在 References 核对同一相对路径；再打开 engine-selection.md。】\n\nweb-game-foundations 也指向同一个文件。它安排项目基础结构时，同样需要技术依据。以后选型条件更新，改这份共同资料就够了。",
      "【操作提示｜engine-selection.md · 二维游戏选型条件；在共享资料中看二维选型条件；随后回到 modified 的实际读取表。】\n\n比如这里建议，俯视或侧视的二维游戏，需要现成相机和场景管理时，可以考虑 Phaser。查到这些条件，才能结合自己的项目理解入口的默认建议。\n\n所以，要复用的是一组选型依据，就共用资料；要让 AI 按一套方法完成界面调整，就引用对应 Skill，并交代这次的游戏和调整要求。",
      "【操作提示｜modified · 共享资料的实际读取记录；回到实际读取表，指认 engine-selection.md 所在记录；随后打开“正文取舍”归纳样稿。】\n\n这次记录也能找到 engine-selection.md 的读取，说明共同资料在这一轮确实被取得了。不过，文件有引用、实际读到、根据条件作出合适选择，仍是不同的判断，不能互相代替。\n以后自己组织文件时，可以先看需要复用什么：两项工作都要查同一组选型条件，就维护一份资料；希望另一份指导接手完成界面调整，就引用职责清楚的 Skill。这样拆，是按工作和知识的用途拆。\n",
      "【操作提示｜引用对应表 · 共享资料与专项 Skill 路径；先指共享资料与专项工作两类目标，承接界面示例；随后在入口 References 核对选型资料引用。】\n\n如果两项工作都需要技术选型条件，各自在正文里抄一份，更新时就可能一份改了、一份没改。需要统一维护的是知识，因此可以让它们引用同一份资料。它和刚才转交界面工作，目的不同。",
      "【操作提示｜game-studio · References；回到已打开的入口文件，在 References 找到 ../../references/engine-selection.md。】\n\ngame-studio 的 References 把详细选型条件指向 engine-selection.md。入口保留默认建议，需要进一步判断时再查具体条件，正文不必重复整份说明。",
      "【操作提示｜web-game-foundations · References；另开 web-game-foundations，在 References 核对同一相对路径；再打开 engine-selection.md。】\n\nweb-game-foundations 也引用同一个文件。项目规划和基础结构两项工作需要共同依据，共用资料就能让依据只维护一处。这里看两个路径，是为了核对它们是否真的指向同一个对象。",
      "【操作提示｜engine-selection.md · 二维游戏选型条件；在共享资料中看二维选型条件；随后回到 modified 的实际读取表。】\n\n资料说到二维图片或地图，以及相机、场景管理等需求，可以据此考虑 Phaser。我们使用的是这些判断条件，再结合当前项目作选择；不是因为文件推荐某框架，就忽略已有技术约束。\n所以，要共用一组选型条件，可以引用资料；要让 AI 完成一次界面调整，则需要职责和做法完整的 Skill。",
      "【操作提示｜modified · 共享资料的实际读取记录；回到实际读取表，指认 engine-selection.md 所在记录；随后返回 PPT 第 6 页“正文留下会影响行动的指导”。】\n\n同轮记录也能找到这份资料的读取。这只能说明它在本轮被取得，是否恰当地用于选型，还要回到方案里的理由核对。\n自己写引用时，也要交代什么时候读、读哪份、解决什么问题。仅把文件放在旁边，模型未必知道何时需要；只写了路径，也不能代替实际调用后的核对。",
      "【操作提示｜引用对应表 · 共享资料与专项 Skill 路径；先指共享资料与专项工作两类目标，承接界面示例；随后在入口 References 核对选型资料引用。】\n\n刚才引用另一份 Skill，是为了使用一套完成界面工作的方法。接下来共用的则是一份技术选型说明。\n整体规划需要选择技术，安排项目基础结构时也需要参考同样的条件。如果两边各抄一份，更新条件时就得改两处，还可能改得不一致。因此可以把选型说明单独保存，让两份 Skill 都引用它。",
      "【操作提示｜game-studio · References；回到已打开的入口文件，在 References 找到 ../../references/engine-selection.md。】\n\n在 game-studio 的 References，也就是参考资料部分，有一条路径指向 engine-selection.md。这份文件保存较详细的技术选型条件。\ngame-studio 自己保留默认建议，遇到需要进一步判断的任务，再让 Codex 沿这条路径读取说明。",
      "【操作提示｜web-game-foundations · References；另开 web-game-foundations，在 References 核对同一相对路径；再打开 engine-selection.md。】\n\n这里再打开另一份 Skill，叫 web-game-foundations，负责浏览器游戏的项目基础结构。它也需要用到技术选型的知识。\n这份文件的 References 中，同样指向 engine-selection.md。两个路径解析后是同一份文件，不是两份内容相似的副本。以后修改选型说明，就能只维护这一处。",
      "【操作提示｜engine-selection.md · 二维游戏选型条件；在共享资料中看二维选型条件；随后回到 modified 的实际读取表。】\n\n打开 engine-selection.md，可以看到选择 Phaser 时要考虑的条件，例如游戏以二维图片或地图为主，需要相机和场景管理等现成能力。Codex 可以据此结合项目判断，而不是只记住一个框架名称。\n这样我们就分清了两种引用：参考资料提供作决定需要的知识；另一份 Skill 提供完成一项工作的指导。",
      "【操作提示｜modified · 共享资料的实际读取记录；回到实际读取表，指认 engine-selection.md 所在记录；随后返回 PPT 第 6 页“正文留下会影响行动的指导”。】\n\n在刚才那次修改版调用中，也能找到 Codex 读取 engine-selection.md 的记录，说明这份资料在那次任务里确实被读到了。\n以后我们自己引用资料，不能只把文件放在旁边，还要在正文写清什么时候读、读哪份、用来解决什么问题。调用以后，再检查相关任务是否真的读到了它。"
    ]
  },
  {
    "id": "b13",
    "label": "正文留下会影响每次行动的指导",
    "script": [
      "【操作提示｜归纳样稿 · 正文取舍表；按“保留正文、按需引用、删除重复”三行对应具体内容与理由，随后进入“拆分与复用”。】\n\n回头看正文取舍。像刚才“每项检查写出前置状态、操作和可见结果”，每次写计划都需要，应留在正文。输入不足时怎么办，也会改变它接下来的动作，不能藏在没有读取入口的资料里。\n\n只有翻牌才需要的长例子，可以放进 Reference，在正文说明什么时候读。反复写“认真检查、保证质量”，却没补检查对象和做法，就可以删去。\n\n正文不设统一行数。比如删掉输入不足时的处理，文件是短了，模型却不知道何时该停下来。先保住这些必要做法，再考虑压缩和引用。",
      "【操作提示｜PPT 第 6 页 · 正文与 Reference 的取舍图；第 1 步看正文中始终需要的输入、输出要求；第 2 步看长例子移入 Reference，正文留下读取条件与入口，并划去重复口号；第 3 步收束长度判断。随后翻到第 7 页。】\n\n现在可以据用途决定正文留下什么。像刚才“每项检查写起点、操作、可见结果”，每次生成计划都需要，留在正文；缺核心规则时先问，也会改变任务下一步，不能为了缩短而删掉。\n很长的翻牌案例只在翻牌任务中有用，可以移到 Reference，但正文保留什么时候读和从哪里读。“认真检查、保证质量”若没有增加具体对象和做法，就可以删去。\n因此长度取舍看的是内容是否影响行动、是否每次需要，而不是统一压到多少行。否则文件虽然变短，必要条件却可能丢了。",
      "【操作提示｜PPT 第 6 页 · 正文与 Reference 的取舍图；第 1 步看正文中始终需要的输入、输出要求；第 2 步看长例子移入 Reference，正文留下读取条件与入口，并划去重复口号；第 3 步收束长度判断。随后翻到第 7 页。】\n\n回到 PPT，把刚才的几种写法放在一起。以后自己写 Skill，哪些内容应留在正文，哪些可以放到参考资料里？\n像“每项检查写清起点、操作和可见结果”，是每次生成检查计划都需要的要求，应留在正文。技术选型的长说明，或者只针对某类游戏的长例子，可以单独放进 Reference，也就是参考资料文件；正文留下读取条件和路径。\n还有一类话可以删：比如反复写“认真检查、保证质量”，却没有补充检查对象和做法。删掉这样的重复，不会损失具体要求。\n因此，正文并不是越短越好。要先保留完成任务必需的指导，再把只在特定情况需要的长资料移出去，而不是为了凑某个行数删掉关键要求。"
    ]
  },
  {
    "id": "b14",
    "label": "先判断需要资料、另一项工作还是工具处理",
    "script": [
      "【操作提示｜归纳样稿 · 条件与拆分选择表；逐行对照长例子、独立工作、文件处理、模板素材；最后停在“手动检查计划：先用单文件”，打开编写演示。】\n\n再看拆分。两份 Skill 需要同一组选型条件，就像刚才一样共用资料；要承担一次完整的界面调整或试玩，有自己的输入和交付物，才适合另写 Skill。不是内容一长，就一律拆成新的 Skill。\n\n重复计算或固定的文件处理，可以配脚本交给工具执行；已有模板、待处理图片则作为素材。入口要交代用途、条件和输入输出，有这项需要再配这些文件。\n\n我们自己写一份时，先选一项明确任务：把小游戏规则整理成人能照着做的手动检查计划。这件事先用一个 SKILL.md，就可以开始。",
      "【操作提示｜PPT 第 7 页 · 资料与独立工作怎样分工；先沿两个文件的连线确认共用 engine-selection，再对照独立界面工作需要的输入与提供的指导；第 2 步增加脚本、素材职责，第 3 步回到单文件起步。随后打开编写演示。】\n\n拆文件也按用途决定。共同知识用一份资料；有自己输入、做法和交付物的工作，才适合独立 Skill。正文长，不是另建 Skill 的充分理由。\n如果有重复计算或确定的文件处理，可以配脚本；需要套用的模板、待处理的图片可以作为素材。入口仍要交代用途、输入输出和检查方法。有具体需要再增加这些资源。\n我们现在只做一件事：把小游戏规则整理成人能照着做的手动检查计划。先用一个 SKILL.md，把这件事讲明白。",
      "【操作提示｜PPT 第 7 页 · 资料与独立工作怎样分工；先沿两个文件的连线确认共用 engine-selection，再对照独立界面工作需要的输入与提供的指导；第 2 步增加脚本、素材职责，第 3 步回到单文件起步。随后打开编写演示。】\n\n再回顾文件之间的分工。技术选型条件属于知识，多份 Skill 可以共用一份资料；界面设计能够单独成为一项任务，所以适合有自己的 Skill。\n除了资料和其他 Skill，有些任务还会配脚本和素材。例如反复整理图片，可以由脚本执行固定处理；已经做好的模板、待处理的图片，可以作为配套素材。正文要说明这些文件什么时候用、输入什么、会得到什么，以及怎样检查结果。\n不过，没有这类需要就不必增加文件。下面我们自己写一份小 Skill，专门把游戏规则整理成手动检查计划。先用一个 SKILL.md，就能开始。"
    ]
  },
  {
    "id": "b15",
    "label": "从任务边界写名称和描述",
    "script": [
      "【操作提示｜编辑器 · created 演示项目；.agents/skills/game-check-plan/ 为空，现场新建空白 SKILL.md，不从完整文件开始。】\n\n现在自己写一份。输入是游戏规则，输出是人能照着做的手动检查计划。步骤要能执行，结果要能观察，预期则依据游戏规则来写。\n\n这份 Skill 只写计划，不打开游戏，也不修改代码。我们先用一个文件完成这项任务。",
      "【操作提示｜同一编辑器 · 在空白 SKILL.md 中实际输入 YAML 文件头，包含开头和结尾的 ---、name、description；先保存。】\n\nname 写 game-check-plan。description 写明根据小游戏规则编写手动检查计划，适用于验收步骤、结束或重开清单，并说明不负责实际试玩。这样，选用时就能从描述判断它负责什么。\n\n文件放在项目的 .agents/skills/game-check-plan/SKILL.md。这里先保存名称和描述，接着写完成任务需要的方法。本例采用备课时已经试过并修订的写法，后面会看其中一条是怎样根据失败返回改出来的。",
      "【操作提示｜编辑器 · 空目录中新建空白 SKILL.md；在独立 created 项目中打开空目录，实际新建 SKILL.md；本段说清输入与交付物，随后填写文件头。】\n\n从空文件开始之前，先定怎样才算完成：拿到游戏规则，交出能执行的检查步骤，预期有规则依据，结果能观察。这三个要求决定正文该写什么。\n本例只生成计划，不负责打开游戏执行，也不修改代码。边界越清楚，之后越容易判断它缺了什么、是否越出了任务。我们按备课时已经试用并修订的版本来写，不把它讲成临时一次就写对了。",
      "【操作提示｜同一编辑器 · 实际填写 name 与 description；输入示例文件前四行并保存。备查文件仅用于取文字，不切到网页四态代替写入；随后继续在此文件写正文。】\n\nname 写 game-check-plan。description 说明根据小游戏规则编写手动检查计划，适用于验收步骤和结束、重开清单，并说明不负责实际试玩。先让选用者知道它能接什么任务。\n文件保存在项目的 .agents/skills/game-check-plan/SKILL.md，接下来把刚才的成功标准变成正文中的做法。",
      "【操作提示｜编辑器 · 空目录中新建空白 SKILL.md；在独立 created 项目中打开空目录，实际新建 SKILL.md；本段说清输入与交付物，随后填写文件头。】\n\n刚才我们修改的是别人写好的规划指导。现在从空文件开始，写一份自己的 Skill：用户给出小游戏规则，Codex 根据规则生成一份人能照着做的检查计划。\n我们希望计划里的动作能执行，结果能观察，而且预期来自游戏规则。这份 Skill 只负责指导 Codex 写计划，实际打开游戏检查是另一项工作。这次也不让它修改代码。\n下面采用的是备课时已经试用过的写法。我先把文件写出来，再通过几次保存的调用，说明这种写法为什么需要，以及还有什么问题。",
      "【操作提示｜同一编辑器 · 实际填写 name 与 description；输入示例文件前四行并保存。备查文件仅用于取文字，不切到网页四态代替写入；随后继续在此文件写正文。】\n\n文件叫 SKILL.md，放在项目的 .agents/skills/game-check-plan/ 目录下。先写文件头：name 是 game-check-plan；description 说明根据小游戏规则编写手动检查计划，适合准备验收步骤、结束和重开清单，不负责实际试玩。\n这和前面学过的一样：让 AI 先从描述知道这份 Skill 适合什么任务。接下来写正文，说明选用以后怎样生成计划。"
    ]
  },
  {
    "id": "b16",
    "label": "把输入分支和输出要求写成可执行说明",
    "script": [
      "【操作提示｜同一编辑器 · 在文件头下面输入任务边界与“先判断输入是否足够”一段，实际保存。】\n\n先检查玩家怎么操作、怎样结束、重开后怎么办。没有这些规则，就无法写出可靠的预期。比如只知道有重开按钮，还不知道点击后哪些状态该恢复，不能替用户编一套规则来验收。\n\n所以缺少其中任何一项，就先提问，本次不生成计划。这里限定最多五问，是为了先问关键缺口。只写“缺规则时注意补充”，它仍可能先假定玩法继续写；这一条要求它停在提问。",
      "【操作提示｜同一编辑器 · 继续填写“规则足够时生成计划”的各项要求；按讲到的位置输入，完成后保存并检查文件头与完整正文。】\n\n规则够了，再选检查项。先覆盖正常玩一轮、结束和重开，每项用刚才的三项结构。这里选六到十项，是这份小计划的规模安排，可以随任务调整。动作还得足以看见结果：要核对盖住的牌是什么图案，就先写翻开或记录的步骤。\n\n预期依据用户规则写，没规定的文案、计数时点留作待确认。随机结果也不能随意判错：重新洗牌可能恰好同序，所以检查牌数、配对组成等规则是否满足，不要求每次顺序一定改变。\n\n最后标明计划尚未执行。自己写第一版时，先把任务、必要输入、做法和输出说清楚，再用返回找遗漏，不需要一开始就想齐所有边界。",
      "【操作提示｜编辑器 · 写入任务边界和输入分支；从示例取任务范围及输入不足分支，实际输入到刚建的文件并保存；继续在同一文件编写方法。】\n\n计划要有规则依据，所以先检查输入是否给出玩家操作、结束条件和重开规则。只知道有重开按钮，却不知道重开后恢复什么，就不能替用户编一个“正确结果”。\n因此缺少其中任何一项时，只提最多五个关键问题并结束，本次不生成计划，也不用假定玩法填空。这里的“五个”是示例的规模安排；关键是把缺少什么、该做什么、到哪里停写清楚。",
      "【操作提示｜同一编辑器 · 写完正文并保存；逐段输入检查范围、三项结构、可观察动作、未知与随机结果处理、待执行声明。保存后核对完整文件；先不打开历史调用，下一段到项目中启动新会话。】\n\n规则足够时，再生成六到十项检查，覆盖正常游玩、结束和重开。每项写起点、操作、可见结果，这是为了让另一个人照着做。项数可按任务调整。\n预期必须来自当前规则，动作也要足以看见预期。比如要核对隐藏牌面，就要先安排揭示或记录，不能让人只看牌背就判断配对组成。没规定的文案、计数时点列为待确认；重新洗牌可能碰巧同序，不能把每次顺序不同当成必过条件。\n最后声明计划尚未执行。写第一版时，把任务、必要输入、关键做法和输出说清楚，再用实际返回找缺口；不必一开始就加满资料和脚本。",
      "【操作提示｜编辑器 · 写入任务边界和输入分支；从示例取任务范围及输入不足分支，实际输入到刚建的文件并保存；继续在同一文件编写方法。】\n\n首先要解决的是：用户给的信息够不够？例如只说游戏有一个重新开始按钮，却没说点完以后恢复哪些状态，Codex 就没有依据写预期结果。\n所以正文先检查三件事：玩家怎么操作，什么时候结束，重开后怎么办。缺少其中任何一项，就只提出需要补充的问题，然后结束，本次不生成计划，也不用假定玩法填空。这里把问题数限制为最多五个，是这份示例控制提问数量的安排。\n把这个条件写清楚，是为了让 Codex 在信息不足时先停下来。稍后我们会看一次早期版本没有停下来的真实返回。",
      "【操作提示｜同一编辑器 · 写完正文并保存；逐段输入检查范围、三项结构、可观察动作、未知与随机结果处理、待执行声明。保存后核对完整文件；先不打开历史调用，下一段到项目中启动新会话。】\n\n规则足够以后，再写计划。我们要求先选六到十项关键检查，覆盖正常游玩、游戏结束和重新开始；每项都写起点、操作、可见结果。项数是这份短计划的安排，可以按任务调整。\n操作还要足以看见预期。比如要判断盖住的牌有哪些图案，就得先翻开或记录，不能只看牌背就判断配对组成。预期也不能凭空补：规则没规定的文案、计数时点，应列为待确认。\n遇到随机结果，要查规则约束。比如重新洗牌可能碰巧和上一局同序，不能把“每次顺序必须不同”当成要求。\n最后写明：只交付计划，步骤尚未执行。正文写到这里，已经说清输入不够怎么办、输入足够怎样做，以及最后交什么。我们保存文件，用一条具体请求试一试。"
    ]
  },
  {
    "id": "b17",
    "label": "文件写好以后，用一条完整规则调用",
    "script": [
      "【操作提示｜Codex · 进入刚写好文件的 created 项目，保存后启动新会话；复制完整翻牌请求并发送，等待时打开 v3 翻牌历史调用。】\n\n文件保存好了，在这个项目中开一个新会话，用 game-check-plan 处理这条完整翻牌规则。请求给了十二张牌、六对图案，每翻两张算一步；不匹配约等一秒，期间不能翻第三张；全部配对结束，重开洗牌并把计步归零。\n\n牌数和等待时间都放在本次请求里。正文写的是编计划的方法，换一个游戏时就换规则，不必先改 Skill。",
      "【操作提示｜等待期间 · 保存的 v3 翻牌调用；看同轮请求、可用说明与正文读取，明确历史身份；随后回现场。】\n\n等待时看一次保存的调用。会话可用说明里有 game-check-plan，工具记录随后读取了它的正文。文件放进项目后，要在会话中确认能找到它，也要确认具体指导已经读进来。",
      "【操作提示｜Codex · 回到刚提交的完整规则任务；查看本次 Skill 选用、正文内容与实际返回；无结果时剪去等待，完成核对再继续。】\n\n回到这次任务，先核对选用的是刚写的 game-check-plan，读到的内容也与保存的文件一致。再看计划有没有覆盖正常翻牌、结束和重开，每项是否写出了起始状态、操作和能观察的结果。读到文件以后，还要逐项对照游戏规则。",
      "【操作提示｜Codex · 刚创建项目的新会话，粘贴完整翻牌请求并发送；从完整翻牌材料复制请求，在 created 项目新会话发送；请求中的名称、规则和范围读清后发送，等待时看历史。】\n\n现在用完整翻牌规则调用。请求给出十二张牌、六对图案，每翻两张算一步，不匹配约等一秒，期间不能翻第三张；全部配对结束，重开洗牌并把计步归零。\n这些具体数值和规则放在本次任务里，正文保留生成计划的方法。换游戏时应该能替换规则继续使用。保存文件后在项目新会话发送请求，先检查它能不能按完整输入完成这项工作。",
      "【操作提示｜等待期间 · 历史 v3 翻牌调用的发现与读取；另开已保存调用，看可用说明与实际读取；明确历史身份，讲完返回刚才的现场会话。】\n\n等待时看保存的调用。可用说明中有 game-check-plan，工具也读取了正文。这分别确认会话能找到它，以及具体指导已进入任务。文件保存好了还需要这一步，避免把“文件在磁盘上”当成“这一轮已经用上”。随后回本次会话看输出。",
      "【操作提示｜Codex · 返回本次完整规则调用；核对本次选用与完整正文，再对照游戏规则检查返回。发现遗漏先说明具体项、修改并复核；完成后切历史返回，讲 C2/C5 两个已有问题。】\n\n回到本次结果，按实际情况核对选用对象和正文版本，再拿游戏规则对照检查项。有没有正常循环、结束、重开？动作能否做到，结果是否看得见，预期是否有规则依据？\n缺了哪一项就定位那一项，分清该补输入还是改正文，修订后再调用。下面的两个问题来自保存的历史返回，不预设这次也有相同错误。",
      "【操作提示｜Codex · 刚创建项目的新会话，粘贴完整翻牌请求并发送；从完整翻牌材料复制请求，在 created 项目新会话发送；请求中的名称、规则和范围读清后发送，等待时看历史。】\n\n这次请求指定使用刚写好的 game-check-plan，并提供完整的翻牌规则：十二张牌、六对图案，每翻两张算一步；不匹配约等一秒，期间不能翻第三张；全部配对结束，重开洗牌，步数和配对进度归零。\n牌数、时间和计步方式都在这次请求里。Skill 正文写的是生成检查计划的方法，不应该把某个游戏的数值写成通用要求。\n现在在这个项目的新会话中发送请求，看看 Codex 能否根据这些规则写计划。",
      "【操作提示｜等待期间 · 历史 v3 翻牌调用的发现与读取；另开已保存调用，看可用说明与实际读取；明确历史身份，讲完返回刚才的现场会话。】\n\n等待期间，先打开备课时用同一份 Skill 和这条翻牌请求得到的记录。这是之前的调用，不是刚刚提交任务的结果。\n当时的会话能够找到 game-check-plan，工具记录也显示读取了正文。这样就确认了那次任务不只是看到了名称，还取得了文件里的具体要求。接下来回到现在的会话。",
      "【操作提示｜Codex · 返回本次完整规则调用；核对本次选用与完整正文，再对照游戏规则检查返回。发现遗漏先说明具体项、修改并复核；完成后切历史返回，讲 C2/C5 两个已有问题。】\n\n本次会话也先核对 Codex 是否读到了刚保存的 game-check-plan，再用请求中的规则检查实际计划：正常翻牌、结束、重开有没有覆盖？动作能不能执行，预期结果是否有规则依据？\n发现缺项时，先指出具体问题。如果任务规则没说清，就补规则；如果方法没写清或输出没有照做，再查正文并修订、重新调用。\n接下来我们看刚才打开的历史计划。里面有两条具体问题，能帮助我们练习怎样审查。"
    ]
  },
  {
    "id": "b18",
    "label": "照着返回想一遍，步骤能不能执行",
    "script": [
      "【操作提示｜v3 翻牌调用 · 完整返回 C1–C10；顺着原回复看正常循环、结束、重开与待执行声明，再打开 C2、C5 核对意见。】\n\n保存的返回列了十项，也注明尚未执行。我们先不按项数判断质量，而是试着在脑中照做：给定这个起点，按它的操作，真的会出现预期结果吗？可以暂停看第二项和第五项，判断问题出在游戏规则没给够，还是检查步骤本身没写对。\n",
      "【操作提示｜翻牌核对意见 · C2 与 C5 原句；指 C2 的“任意两张”和 C5 的“变为 1”，对照旁边的讲师意见；随后切到历史修订案例。】\n\n第二项要检查不匹配，却让人翻“任意两张”。任意两张也可能正好配对。游戏规则并不缺，这里缺的是进入不匹配状态的办法：先观察牌面，找出不匹配的一对，盖回后再用它检查后续行为。\n\n第五项允许从任意已有进度开始，却说配对后进度“变为一”。已经配好两对，再配一对应该是三。这项应核对原进度加一，而不是固定为一。\n\n这两条是对保存返回的修订建议，还没有另行验证。接着回看一个已经修改并重新调用的案例：缺少核心玩法时，它曾经继续编检查表。",
      "【操作提示｜历史 v3 翻牌调用 · 完整返回 C1–C10；看完整返回中的 C2、C5，留出暂停判断时间，再打开对应核对意见；不提前展开解析。】\n\n这份历史返回共有十项，也声明尚未执行。我们先试着照步骤走一遍，而不按项数判断质量。可以暂停看第二项和第五项：从它给的起点，执行它写的动作，预期是否一定成立？",
      "【操作提示｜翻牌核对意见 · C2 与 C5 原句；指 C2 的“任意两张”和 C5 的“变为 1”，对照旁边的讲师意见；随后切到历史修订案例。】\n\n第二项要检查不匹配，却让人翻任意两张，恰好配对就进不了目标状态。这不是规则缺失，而是步骤没保证前提。应先找到不匹配的一对，盖回后再用它检查。\n第五项允许从任意已有进度开始，却预期配对数变为一。已经有两对，再成功一对应是三；这里应检查原进度加一。起点变了，预期也要随之计算。\n这两条说明，即使正文写了三项结构，仍要审查前提、动作和结果之间是否成立。这是对历史返回的修订建议，尚未重新验证。接下来换看输入不足时应怎样处理。",
      "【操作提示｜历史 v3 翻牌调用 · 完整返回 C1–C10；看完整返回中的 C2、C5，留出暂停判断时间，再打开对应核对意见；不提前展开解析。】\n\n这份备课时生成的翻牌计划共有十项，注明了尚未执行。现在先看第二项和第五项。\n可以暂停，按计划设定的起点，在脑中执行一遍操作：照这些步骤做，是否一定能出现写出的结果？想过以后再看核对意见。",
      "【操作提示｜翻牌核对意见 · C2 与 C5 原句；指 C2 的“任意两张”和 C5 的“变为 1”，对照旁边的讲师意见；随后切到历史修订案例。】\n\n第二项的标题要检查翻开两张不匹配的牌，但操作写的是“任意两张”。如果恰好翻到一对，就进不了不匹配状态，也无法接着检查等待和锁牌。应先找到图案不同的一对，盖回后再用它检查。这里需要改的是操作步骤，不是补充游戏规则。\n第五项允许从任意进行中的状态开始，却把配对后的进度固定写成一。假如原来已经配好两对，再配一对应是三。预期应写成原进度加一，才和起点一致。\n这两条是我们对历史返回的修改建议，还没有重新验证。它们说明，计划有了起点、动作、结果以后，仍要检查三者是否对得上。下面再看输入信息本来就不足的情况。"
    ]
  },
  {
    "id": "b19",
    "label": "根据失败返回，把提醒改成明确分支",
    "script": [
      "【操作提示｜历史修订 · 缺失规则的相同请求与 v2 返回；先看只给“开始／重新开始”按钮的请求，再看 v2 仍生成的检查表；随后看文件差异。】\n\n刚才两条问题，规则已经足够，应改检查步骤。这里换一种失败：请求只说有开始和重新开始按钮，没有核心玩法和结束条件。第二版却用假定状态填出了检查表。表格再完整，也没有依据判断游戏对不对。\n\n正文原本提醒缺规则要问，但没有把停止条件约束清楚。我们要改的是面对这类缺失输入时的处理方法；随便给本次请求补一套玩法，虽然能继续生成，却检验不了这个缺口有没有修好。\n",
      "【操作提示｜历史修订 · v2 → v3 差异与 v3 返回；指条件、动作、停止点的改动；再核对 v3 读取以及同请求的五个问题，最后打开躲避调用。】\n\n第三版把“缺规则要问”展开成了可以核对的分支：玩家操作、结束条件、重开规则缺任何一项，就只提问题并结束，不生成计划，也不用假定玩法填空。关键变化是明确了什么时候停、停下来做什么，以及不能继续做什么。\n\n同一个缺失规则请求再次调用，确认读到第三版后，返回提出五个补充问题，没有再列检查表。这支持本次修订在这条输入上起了作用。我们还要换一种玩法看，因为一份可复用的方法，不能只会应对刚才的翻牌例子。\n",
      "【操作提示｜历史修订 · 缺失规则的相同请求与 v2 返回；先看只给“开始／重新开始”按钮的请求，再看 v2 仍生成的检查表；随后看文件差异。】\n\n请求只说有开始和重新开始按钮，没有玩法和结束条件。和刚才不同，这里没有足够规则写预期。第二版虽然提醒缺规则先问，返回仍按假定状态填出了计划。\n我们要修的是遇到这类输入时不要继续编。随意补一套玩法能让当前任务继续，却不能解决这个处理问题，所以要回到正文，把停止分支写明确。",
      "【操作提示｜历史修订 · v2 → v3 差异与 v3 返回；指条件、动作、停止点的改动；再核对 v3 读取以及同请求的五个问题，最后打开躲避调用。】\n\n第三版规定，玩家操作、结束条件、重开规则缺任何一项，就只提问并结束，不生成计划，不用假定玩法填空。它把泛泛提醒变成了条件、动作和停止点。\n同一个缺失输入请求再次调用，核对读到第三版后，返回只提出五个问题，没有生成检查表。这支持修订在这条输入上改变了行为，不能由此宣布所有输入都正确。完整规则还要查步骤，换玩法还要查复用。",
      "【操作提示｜历史修订 · 缺失规则的相同请求与 v2 返回；先看只给“开始／重新开始”按钮的请求，再看 v2 仍生成的检查表；随后看文件差异。】\n\n刚才我们给了完整规则。备课时我还试过只告诉 Codex：游戏有开始和重新开始按钮，具体玩法和结束条件尚未确定。想检查的是，这种情况下 Codex 会先问清楚，还是继续编计划。\n现在看到的是这份 Skill 较早的第二版，以及当时的返回。第二版已经提醒缺规则要先问，但没有明确要求停止生成计划。Codex 仍然列出了假定的游戏状态和检查表。玩法还没确定，这些预期就缺少依据。\n因此我们回到正文，把信息不足时该怎样处理写得更明确。",
      "【操作提示｜历史修订 · v2 → v3 差异与 v3 返回；指条件、动作、停止点的改动；再核对 v3 读取以及同请求的五个问题，最后打开躲避调用。】\n\n我们把修订后的文件记作第三版，也就是刚才示范编写的版本。正文明确规定：玩家操作、结束条件、重开规则缺任何一项，就只提问并结束，不生成计划，也不用假定玩法填空。\n然后用同一条缺失规则的请求再次调用。记录显示 Codex 读到了第三版，返回提出五个补充问题，没有再生成检查表。这次修改在这条请求上达到了目的。\n和前面的翻牌步骤问题不同，这里修订的是信息不足时的处理方式。用完整规则调用，看计划能否写好；用缺失规则调用，看 Codex 是否会先停下来提问，两种情况都需要检查。"
    ]
  },
  {
    "id": "b20",
    "label": "换成躲避，规则和预期也要跟着换",
    "script": [
      "【操作提示｜v3 躲避调用 · 请求与正文读取；先看方向键、金币、障碍、60 秒、结束与重开规则，再核对同轮读取，向下看返回。】\n\n再换成躲避游戏：方向键移动，吃金币加分，碰到障碍或六十秒用完就结束；重开恢复位置、分数和时间。仍然只让它写计划。\n\n正文保持不变，只替换任务规则。这样可以检查我们写的是能换任务使用的方法，还是把翻牌的具体答案写死了。",
      "【操作提示｜v3 躲避调用 · 完整返回及核对意见；按移动、得分、结束、重开查看返回；停在“一次移动一格”和时间冻结的假定，讲完进入迁移情境。】\n\n返回改成了移动、得分、碰撞、倒计时和重开，没有沿用牌数与翻牌等待时间。这说明在这次躲避任务中，同一份正文能按新的规则组织检查；我们没有为了换游戏重写整份方法。\n\n但它又补了“一次移动一格”和撞障碍后倒计时冻结。方向键移动不等于按格移动，提前结束后的时间显示也没有规定。检查项变得符合躲避游戏，还不等于每个预期都有规则依据。这些细节仍要列为待确认。\n\n完整规则用来看能不能写出可执行的计划，缺失规则用来看会不会及时停下，另一玩法用来看有没有把答案写死。三类输入分别查不同问题；这几次运行给我们修改依据，不能保证以后每次输出都正确。\n",
      "【操作提示｜v3 躲避调用 · 请求与正文读取；先看方向键、金币、障碍、60 秒、结束与重开规则，再核对同轮读取，向下看返回。】\n\n因此再给一组完整但不同的规则：方向键移动，吃金币加分，碰障碍或六十秒用完结束，重开恢复位置、分数和时间。正文不变，只换任务输入。\n如果指导写的是通用方法，应该能围绕这组规则组织计划；如果把翻牌答案写进了正文，就可能继续给出牌数和配对检查。",
      "【操作提示｜v3 躲避调用 · 完整返回及核对意见；按移动、得分、结束、重开查看返回；停在“一次移动一格”和时间冻结的假定，讲完返回 PPT 第 8 页的迁移情境。】\n\n这次返回换成移动、得分、碰撞、倒计时和重开，没有沿用翻牌答案，说明本例中方法能够随规则复用。\n但它又补了“一次移动一格”和碰撞后倒计时冻结。方向键不等于按格移动，结束后时间怎样显示也没规定。这些不能直接成为验收标准，应先确认。\n这样三类输入各有用途：完整规则查能否完成，缺失规则查是否停下，另一玩法查是否写死答案。返回暴露的新问题仍要继续修；几次调用提供修改依据，不是以后每次都正确的保证。",
      "【操作提示｜v3 躲避调用 · 请求与正文读取；先看方向键、金币、障碍、60 秒、结束与重开规则，再核对同轮读取，向下看返回。】\n\n还有一种情况要试：换了游戏，这份 Skill 能不能继续用？所以备课时，我保留第三版正文不变，把输入换成躲避收集游戏。\n请求规定方向键移动，碰到金币加分，碰到障碍或六十秒用完就结束；重开后恢复初始位置，分数归零，时间回到六十秒。仍然只让 Codex 写计划。\n这样能检查正文提供的是生成计划的方法，还是把翻牌的答案写死了。",
      "【操作提示｜v3 躲避调用 · 完整返回及核对意见；按移动、得分、结束、重开查看返回；停在“一次移动一格”和时间冻结的假定，讲完返回 PPT 第 8 页的迁移情境。】\n\n这次计划围绕移动、得分、碰撞、倒计时和重开展开，没有继续写牌数和配对。说明在这个例子里，同一份指导能够根据不同玩法生成相应的检查。\n不过，移动检查中又补了“一次移动一格”。请求只规定方向键移动，并没有规定按格走。碰撞结束的检查还要求倒计时冻结，请求也没有明确结束后的时间显示。这些细节要先确认，不能直接拿来判断游戏对错。\n现在三类调用各自查了一个方面：规则完整时能否写出可用计划，规则缺失时能否先问，换一种玩法时能否跟着规则变化。写好文件以后，可以用这样的不同请求寻找遗漏，再逐项修订。"
    ]
  },
  {
    "id": "b21",
    "label": "例子变长、多人共用时怎样调整",
    "script": [
      "【操作提示｜迁移情境 · 两个问题，解析收起；先显示“翻牌例子变长”和“另一份 Skill 也要用同一标准”，留出暂停判断的时间；再逐项展开解析。】\n\n最后想两个扩展情境：翻牌例子越积越多，哪些移出去，哪些仍留正文？另一份 Skill 也要用相同检查标准，是复制还是共用？可以暂停，先说出安排和理由。",
      "【操作提示｜同一归纳样稿 · 两项解析展开；展开正文保留内容与共用标准的解析，指认条件和拟写路径；然后进入产物收尾。】\n\n长的翻牌例子可以放进 references/memory-cases.md，正文留下通用方法，并注明遇到翻牌任务时读取、按当前规则选用。这个路径是拟写示例，还没有创建和实跑。\n\n共用标准就维护一份，各自引用，更新时不用改两处。只有要独立承担另一项工作，才另写 Skill，说明它的输入和交付物。",
      "【操作提示｜PPT 第 8 页 · 两个情境，尚未展开解析；第 1 步只显示两个问题与待安排的文件，留出暂停判断时间；再展开第 2 步。】\n\n换一个组织材料的情境：以后翻牌案例越来越长，另一份 Skill 又要用同一套检查标准，该怎样安排？可以暂停，先想哪些每次需要，哪些只在某类任务需要，哪些应只维护一处，再决定文件放哪里。",
      "【操作提示｜同一 PPT 第 8 页 · 逐项展开解析；第 2 步显示长例子移入 Reference 的联系与正文入口，第 3 步将 Skill A、B 连到同一份共享标准；拟写路径未创建、未实跑。随后翻到第 9 页。】\n\n长翻牌例子只在相应任务中需要，可以放到 references/memory-cases.md；正文留下通用方法，并说明遇到翻牌任务时读取、按当前规则选用。这个路径是拟写示例，尚未创建和试跑。\n另一份 Skill 也需要相同标准，就引用同一份资料，更新时只改一处。如果需要独立完成另一项工作，才另外写 Skill，交代它接收什么、怎样做、交什么。选择的依据是用途，不是文件长度。",
      "【操作提示｜PPT 第 8 页 · 两个情境，尚未展开解析；第 1 步只显示两个问题与待安排的文件，留出暂停判断时间；再展开第 2 步。】\n\n假设以后我们继续完善这份 Skill，翻牌例子越积越多，正文变得很长；另一个 Skill 也想用其中的检查标准。该怎样安排这些内容？\n可以暂停，结合刚才见过的正文、参考资料和专项 Skill，先作一个选择，再说说理由。",
      "【操作提示｜同一 PPT 第 8 页 · 逐项展开解析；第 2 步显示长例子移入 Reference 的联系与正文入口，第 3 步将 Skill A、B 连到同一份共享标准；拟写路径未创建、未实跑。随后翻到第 9 页。】\n\n长的翻牌例子只在翻牌任务中用得上，可以放进单独的参考文件，比如 references/memory-cases.md。正文保留生成计划的方法，再写明遇到翻牌任务时去读这份资料，并按当前规则使用。这个路径只是这里的写法示例，尚未创建文件。\n如果另一份 Skill 也要用同一套检查标准，就维护一份标准，让两边引用，避免以后各改各的。只有要单独完成另一项工作时，才考虑新写一份 Skill，说明那项工作的输入、方法和输出。"
    ]
  },
  {
    "id": "b22",
    "label": "把读、改、写接到下一轮开发",
    "script": [
      "【操作提示｜收尾归纳 · 三项产物与下一轮任务；按正文修改、最小文件、拆分判断三项指认依据；停在下一轮开发任务，由此接 3.3。】\n\n以后拿到一份 Skill，可以像今天这样，从一项实际决定追到正文，分清通用做法、当前需求和模型补充。要修改时，先找到负责这项行为的要求，改完确认实际读到了新版，再看结果是否解决原来的问题。\n\n自己写一份，也从明确任务和成功标准开始，用完整、缺失和另一玩法的输入检查。需要共用知识时引用资料，需要另一项完整工作时再复用专项 Skill。今天形成的是规划要求的修改和一份手动检查计划 Skill；计划还没有实际执行。下一节把这些指导放回游戏开发，看它们怎样落实到代码和实际检查。\n",
      "【操作提示｜PPT 第 9 页 · 两项产物及其核对方法；第 1 步指已有输出要求修改和自写单文件，分别对应同请求核对与三类输入；说明计划未执行。第 2 步承接下一轮躲避游戏的代码与检查。】\n\n回到开始的问题：输出不够好，先判断缺的是当前任务信息、可复用的方法，还是实际读到的版本。明确缺口以后，再补规则、改负责该行为的正文，或处理读取问题；用对应结果检查是否解决。\n自己写一份时，也从任务和成功标准推出输入条件、做法和输出，再用不同输入查问题。换游戏换规则，通用方法保留；资料和专项工作按用途组织。今天形成的仍是指导和计划，计划尚未执行。下一节回到游戏开发，看这些要求怎样落实到代码和实际检查。",
      "【操作提示｜PPT 第 9 页 · 两项产物及其核对方法；第 1 步指已有输出要求修改和自写单文件，分别对应同请求核对与三类输入；说明计划未执行。第 2 步承接下一轮躲避游戏的代码与检查。】\n\n今天我们先从翻牌规划读懂了正文：Skill 给出可复用的方法和默认建议，当前任务提供具体规则，Codex 补出的细节还要我们确认。\n接着，我们细化了检查计划的输出要求，重新调用时先核对读到的版本，再检查内容是否更具体、能不能执行。最后自己写了一份 game-check-plan，并用规则完整、信息缺失和另一种玩法的请求检查它。\n以后写改 Skill，也可以这样从实际问题开始：缺任务信息就补信息，缺通用做法就改正文，修改以后检查实际读取和对应结果。需要较长资料或另一项完整工作时，再按用途拆分。\n这些案例目前交付的是指导和计划，还没有执行游戏检查。下一节回到游戏开发，用这些指导做躲避游戏，再看代码和实际游戏行为。"
    ]
  }
]);
}

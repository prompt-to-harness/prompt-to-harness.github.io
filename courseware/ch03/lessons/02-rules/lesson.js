window.lesson = {
  "title": "读懂一份完整的游戏开发 Skill",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.02",
  "summary": "调用并匹配 Skill，读懂正文与按需引用的资料、脚本和资源，用真实记录核对实际使用。",
  "scenes": [
    {
      "id": "p07",
      "segment": "调用与选用",
      "title": "下一次任务怎样用上检查方法",
      "lead": "开发者反复遇到计步、重开和再次交代。把检查要求和经验方法整理成 Skill，供 AI 在后续同类任务中选用。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#review-p07-rough)\" viewBox=\"0 0 1168 414\" role=\"img\" aria-label=\"每次重新交代的检查方法，保存为 Skill 后供 AI 在同类任务中按需选用\"><defs><filter id=\"review-p07-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"454\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"review-p07-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"164\" y=\"54\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">同类检查，反复交代</text><g transform=\"translate(44 120) scale(0.95)\"><path d=\"M4 116 V93 Q4 70 32 70 Q60 70 60 93 V116 Z\" fill=\"#243042\"/><path d=\"M24 72 L32 91 L41 72\" fill=\"#fffdf7\"/><ellipse cx=\"32\" cy=\"36\" rx=\"22\" ry=\"27\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"3\"/><path d=\"M10 32 Q8 4 34 7 Q56 8 55 30 Q40 31 28 17 Q20 30 10 32\" fill=\"#243042\"/><circle cx=\"25\" cy=\"38\" r=\"1.6\" fill=\"#243042\"/><circle cx=\"41\" cy=\"38\" r=\"1.6\" fill=\"#243042\"/><path d=\"M26 51 Q32 56 39 50\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\"/></g><path class=\"sv-sketch\" d=\"M176 82 H576 Q588 82 588 94 V222 Q588 234 576 234 H220 L192 259 L198 234 H176 Q164 234 164 222 V94 Q164 82 176 82\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2.5\"/><text x=\"192\" y=\"137\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"\">计步怎么算？</text><text x=\"192\" y=\"189\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"\">重开要检查什么？</text><g data-reveal=\"0\"><path class=\"sv-sketch\" d=\"M610 158 H676\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-p07-arrow)\"/><path class=\"sv-sketch\" d=\"M702 82 L1098 82 L1126 110 L1126 234 L700 234 Z M1098 82 V110 H1126\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"728\" y=\"124\" fill=\"#243042\" font-size=\"32\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">Skill</text><text x=\"728\" y=\"171\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">保存检查方法与要求</text><path class=\"sv-sketch\" d=\"M914 246 V280\" fill=\"none\" stroke=\"#5a51d1\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-p07-arrow)\"/><text x=\"914\" y=\"316\" fill=\"#5a51d1\" font-size=\"27\" text-anchor=\"middle\" font-weight=\"400\" class=\"sv-hand\">同类任务，AI 按需选用</text></g><text x=\"24\" y=\"382\" fill=\"#6e6043\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"\">风格指导初稿 → 学习调用与组织 → 回看并修改</text></svg><div class=\"selection-operations\"></div>",
      "steps": [
        "把可复用的方法组织成 Skill"
      ],
      "script": [
        "【操作提示｜课件 p07；出现经验、方法、检查要求和 Skill，停留本画面】\n\n上一节我们讲到，当我们可以把一些固定的做法、可以复用的知识整理成一份 Skill，下一次遇到类似任务， AI 可以在后续任务中反复使用skill 。\n并且让大家尝试去写一个 Skill。"
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 30
    },
    {
      "id": "p07a",
      "segment": "调用与选用",
      "title": "Game Studio 中的多份 Skill",
      "lead": "Game Studio Plugin 里并列着多份 Skill。本次圈出 game-playtest，沿“展开这份”看到同一份 SKILL.md。文件头放名称和描述，下面的正文区只标出位置。description 的英文是原文节选，完整描述到原文件里读。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#review-p07a-rough)\" viewBox=\"0 0 1168 338\" role=\"img\" aria-label=\"Game Studio 中选出 game-playtest，再查看文件头的名称和适用描述\"><defs><filter id=\"review-p07a-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"378\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"review-p07a-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><path class=\"sv-sketch\" d=\"M24 48 V20 H174 L202 48 H458 V318 H24 Z\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"46\" y=\"88\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">Game Studio Plugin</text><path class=\"sv-sketch\" d=\"M46 108 H69 L78 117 V142 H46 Z M69 108 V117 H78\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><path class=\"sv-clean\" d=\"M52 126 H72 M52 133 H72\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"100\" y=\"132\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-studio</text><rect class=\"sv-sketch\" x=\"42\" y=\"147\" width=\"398\" height=\"64\" rx=\"7\" fill=\"#fff1bf\" stroke=\"#243042\" stroke-width=\"2\"/><path class=\"sv-sketch\" d=\"M58 158 H77 L86 167 V194 H58 Z M77 158 V167 H86\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><path class=\"sv-clean\" d=\"M64 176 H80 M64 183 H80\" fill=\"none\" stroke=\"#243042\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"100\" y=\"171\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-playtest</text><text x=\"100\" y=\"204\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">试玩检查 · 本次选用</text><path class=\"sv-sketch\" d=\"M46 228 H69 L78 237 V262 H46 Z M69 228 V237 H78\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><path class=\"sv-clean\" d=\"M52 246 H72 M52 253 H72\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"100\" y=\"253\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">phaser-2d-game</text><text x=\"46\" y=\"292\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">… 其他 Skill 与配套资料</text><path class=\"sv-sketch\" d=\"M472 180 H562\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-p07a-arrow)\"/><text x=\"517\" y=\"156\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">展开</text><path class=\"sv-sketch\" d=\"M584 48 L1104 48 L1132 76 L1132 318 L582 318 Z M1104 48 V76 H1132\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"608\" y=\"86\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">SKILL.md</text><rect class=\"sv-clean\" x=\"604\" y=\"104\" width=\"504\" height=\"140\" rx=\"7\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><g data-reveal=\"1\"><text x=\"620\" y=\"132\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">name: game-playtest</text><text x=\"620\" y=\"168\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">description:</text><text x=\"640\" y=\"200\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Run browser-game playtests</text><text x=\"640\" y=\"232\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">and frontend QA. …</text></g><rect class=\"sv-sketch\" x=\"604\" y=\"262\" width=\"504\" height=\"42\" rx=\"7\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-dasharray=\"7 6\"/><text x=\"620\" y=\"292\" fill=\"#243042\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">正文</text><text x=\"704\" y=\"292\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">具体做法</text></svg><div class=\"selection-operations\"><div class=\"selection-actions\"><a href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#L1-L4\" target=\"_blank\" rel=\"noopener\">打开真实 SKILL.md 文件头 ↗</a><a href=\"https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/\" target=\"_blank\" rel=\"noopener\">插件目录 ↗</a></div></div>",
      "steps": [
        "Plugin 与其中的 Skill",
        "名称与描述，切到真实文件"
      ],
      "script": [
        "【操作提示｜课件 p07a 第 1 步；先指 Game Studio Plugin 的外边界，再指框内并列的多份 Skill；突出 game-playtest，沿“展开这份”指到它自己的 SKILL.md 与本次任务】\n\n这一节课，我们会结合 GameStudio 里面的 Skill，通过实操来学习 Skill 怎样被发现、怎么样发挥作用的。\n这一小节学完，大家可以看一下上一小节给大家留的课后的 skill 的练习是否有值得修改的部分。\n简单介绍一下 Game Studio。它把游戏开发用到的多份 Skill 和配套资料，比如前期规划、游戏实现或试玩检查，以 Plugin的形式打包在一起，方便安装和使用。\n我们后面会讲 Plug in，我们先从里面的game-playtest 这个 Skill 开始讲起。\n\n",
        "【操作提示｜课件 p07a 第 2 步；保留 Plugin 与多份 Skill 的关系，指认 game-playtest 展开区中的文件头节选；从本页入口另开真实 SKILL.md，看顶部的 name 与 description，按需要滚动并用鼠标指认】\n\n一个 Skill 通常包括 Name 和 Description。 Name 很容易理解，就是它的名称。\nDescription是用来描述这个 Skill 具体是做什么事情的，当 AI 它去做任务的时候，它会去看，遍历所有的 Skill 的 Name 和 Description。来判断哪个 Skill 符合它当前的任务需求。\n\n我们去 github 看一下Gameplay Tests 的源文件，了解它具体是做什么的？。\n从名字上看是一个帮助游戏做测试的 Skill。\n描述里面详细讲到它包含测试有代码测试，还包括截图验证、浏览器自动化测试等。\n\n如果我们让它实际试玩我们前面翻牌游戏，这份 Skill 会指导它大概率会用浏览器自动化和截图来做验证。\n\n\n\n【操作提示｜保留原文标签页，回 p07a 第 2 步；讲完进入 p07install 第 1 步】\n\n我们接下来会以它为例来做实操的讲解"
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07a",
      "seconds": 60
    },
    {
      "id": "p07install",
      "segment": "调用与选用",
      "title": "先安装，再确认可以选用",
      "lead": "先核对来源、版本和配套文件。本次采用项目安装，保留引用关系，再在 Codex CLI 中确认可发现；下一页才调用并核对结果。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#review-install-rough)\" viewBox=\"0 0 1168 372\" role=\"img\" aria-label=\"取得完整文件，放到项目目录，再在 Codex 中确认能发现当前项目的 Skill\"><defs><filter id=\"review-install-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"412\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"review-install-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><rect class=\"sv-sketch\" x=\"24\" y=\"22\" width=\"326\" height=\"264\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"60\" r=\"17\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"60\" y=\"67\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">1</text><text x=\"92\" y=\"69\" fill=\"#6e6043\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">取得文件</text><text x=\"46\" y=\"120\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">核对来源与版本</text><text x=\"46\" y=\"162\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">保留引用资料及相对位置</text><foreignObject x=\"42\" y=\"200\" width=\"300\" height=\"66\"><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"install-demo-entries\"><a href=\"install-demo.html?demo=github\">GitHub</a><a href=\"install-demo.html?demo=skillsmp\">SkillsMP</a><a href=\"install-demo.html?demo=installer\">安装器</a></div></foreignObject><g data-reveal=\"1\"><path class=\"sv-sketch\" d=\"M360 150 H388\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-install-arrow)\"/><rect class=\"sv-sketch\" x=\"400\" y=\"22\" width=\"352\" height=\"330\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><circle cx=\"436\" cy=\"60\" r=\"17\" fill=\"#fffdf7\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"436\" y=\"67\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">2</text><text x=\"468\" y=\"69\" fill=\"#0b6b5f\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">放入项目</text><rect class=\"sv-sketch\" x=\"422\" y=\"94\" width=\"308\" height=\"58\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"438\" y=\"132\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">.agents/skills/</text><text x=\"424\" y=\"204\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">个人跨项目使用时</text><text x=\"424\" y=\"245\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">~/.agents/skills/</text></g><g data-reveal=\"2\"><path class=\"sv-sketch\" d=\"M764 150 H790\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-install-arrow)\"/><rect class=\"sv-sketch\" x=\"802\" y=\"22\" width=\"338\" height=\"264\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><circle cx=\"838\" cy=\"60\" r=\"17\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><text x=\"838\" y=\"67\" fill=\"#243042\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">3</text><text x=\"870\" y=\"69\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">确认发现</text><text x=\"824\" y=\"120\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">项目内启动 Codex</text><rect class=\"sv-sketch\" x=\"824\" y=\"140\" width=\"144\" height=\"44\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"840\" y=\"171\" fill=\"#0b6b5f\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">/skills</text><text x=\"824\" y=\"223\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">找到 Game Playtest</text><text x=\"824\" y=\"257\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">核对当前项目来源</text></g><g data-reveal=\"1\"><foreignObject x=\"424\" y=\"275\" width=\"304\" height=\"52\"><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"prompt install-inline-prompt\"><button type=\"button\" data-install-preview>安装 Prompt ↗</button><pre hidden>请从以下固定版本安装 game-playtest、game-ui-frontend、web-game-foundations、react-three-fiber-game，共四份 Skill：\nhttps://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio\n\n只安装到当前项目的 .agents/skills/，不要安装到个人全局目录。保留这四份 Skill 的完整目录及其引用的配套资料；包级 references 放到 .agents/references/，保持相对路径有效。不要安装整个 Plugin，不覆盖已有的同名文件；如有冲突，先告诉我。\n\n完成后列出安装位置，检查文件引用是否有效，并说明在 Codex 中如何确认这些 Skill 已可用。</pre></div></foreignObject></g></svg><div class=\"selection-operations\"><div class=\"selection-actions\"><a href=\"https://skillsmp.com/\" target=\"_blank\" rel=\"noopener\">SkillsMP · 查找安装入口 ↗</a><a href=\"install-skill.html\" target=\"_blank\" rel=\"noopener\">本课安装操作与固定版本 ↗</a><a href=\"https://learn.chatgpt.com/docs/build-skills\" target=\"_blank\" rel=\"noopener\">官方安装说明 ↗</a></div></div>",
      "steps": [
        "来源与完整文件",
        "项目与个人范围",
        "切终端安装并检查发现"
      ],
      "script": [
        "【操作提示｜p07install 第 1 步；从本页打开 SkillsMP】\n\n安装一个 skill，我们需要Skill 获得的链接。\n\ngithub 上面的 skill， 我们只可以直接拷贝 GitHub 上面的链接后把链接给到 AI，让 AI 帮我们安装就可以。\n\n如果这个 Skill 是在一些 Skill 商店或者是一些其他的地方，我们可以找一下它的安装的说明在哪里。\n\n我们这里以 skill MP 为例，这是一个 Skill 的汇集的网站。\nSkill creactor 是 Anthropic 官方的一个帮助大家用 AI 建立 Skill 的 Skill，如果我们想要安转这个 skill，我们可以点进到这个 skill 的详情页。\n\n一般在详情页里面会有 Install 相关的按钮，平台会提供一键安装的的 Prompt，就可以。",
        "【操作提示｜p07install 第 2 步；点击第二框的“安装 Prompt”，展开核对后点击“复制 Prompt”，到演示项目的 Codex 会话发送】\n\n我们直接拷贝这个 Prompt ，粘贴到 Codex，进行发送消息就可以。\nCodex 自带的 skill-installer ，我们也可以通过斜杠调用这个 Skill，直接粘贴链接，也可以完成安装\n\nSkill 可以安装全局或者某一个项目下面。前面展示的默认安装逻辑，一般都是安装在全局。\n如果 game-playtest 这个 Skill 只有当前这个项目需要的话，那我们可以在安装的时候跟 AI 说，只要安装在当前项目就可以。\n这次只在演示项目里使用，所以我们放到当前项目。\n课程演示会用到 game-playtest，以及它引用的 game-ui-frontend 等 Skill，我们在这里一起安装到当前项目。\n大家可以直接复制这里的 Prompt，让 AI 帮我们完成安装。\n后面我们会给大家讲解多种 skill 互相引用。",
        "【操作提示｜等待第二步安装完成，再回 p07install 第 3 步，点击第三框的“复制命令”；切回演示项目的 Codex，输入 /skills，进入 List skills，搜索 Game Playtest，核对来源为当前项目。若未出现，核对安装路径和文件头，重启会话后再查；确认后回 PPT，进入 p07b】\n\n安装完成后，我们可以在 Skill 列表里找一下 game-playtest，确认它来自当前项目。"
      ],
      "refs": [
        {
          "text": "SkillsMP",
          "url": "https://skillsmp.com/",
          "kind": "live"
        }
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07install",
      "seconds": 90
    },
    {
      "id": "p07b",
      "segment": "调用与选用",
      "title": "主动指定 game-playtest",
      "lead": "三条选择入口收成一条任务请求：指定的指导是 $game-playtest，本次规则写计步、重开和只给清单。画面不是终端仿画。选中后仍要核对返回是否符合本次规则。完整请求可以复制。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#review-call-rough)\" viewBox=\"0 0 1168 374\" role=\"img\" aria-label=\"终端依次选择 /skills、List skills、Game Playtest；选中的引用与本次任务、规则和范围共同组成请求\"><defs><filter id=\"review-call-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"414\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"review-call-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"24\" y=\"24\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">终端选择入口</text><rect class=\"sv-sketch\" x=\"24\" y=\"36\" width=\"148\" height=\"46\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"98.0\" y=\"66\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"400\" class=\"sv-code\">/skills</text><path class=\"sv-sketch\" d=\"M180 59 H212\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-call-arrow)\"/><rect class=\"sv-sketch\" x=\"220\" y=\"36\" width=\"196\" height=\"46\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"318.0\" y=\"66\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"400\" class=\"sv-code\">List skills</text><path class=\"sv-sketch\" d=\"M424 59 H460\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#review-call-arrow)\"/><rect class=\"sv-sketch\" x=\"468\" y=\"36\" width=\"228\" height=\"46\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"582.0\" y=\"66\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"400\" class=\"sv-code\">Game Playtest</text><rect class=\"sv-sketch\" x=\"24\" y=\"100\" width=\"1116\" height=\"212\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><rect class=\"sv-sketch\" x=\"44\" y=\"112\" width=\"278\" height=\"38\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"60\" y=\"140\" fill=\"#0b6b5f\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">$game-playtest</text><text x=\"342\" y=\"139\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">＋  本次任务</text><path class=\"sv-clean\" d=\"M48 158 H1112\" fill=\"none\" stroke=\"#c8c3b6\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"48\" y=\"188\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">任务</text><text x=\"138\" y=\"188\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"\">实际试玩翻牌游戏，找出问题</text><rect class=\"sv-clean\" x=\"40\" y=\"200\" width=\"1084\" height=\"68\" rx=\"7\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"48\" y=\"225\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">背景</text><text x=\"138\" y=\"221\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">准备放在个人主页上的游戏初版</text><text x=\"138\" y=\"257\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">运行环境见 ENVIRONMENT.md</text><text x=\"48\" y=\"298\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">范围</text><text x=\"138\" y=\"298\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">先检查，暂时不修改游戏代码</text><rect class=\"sv-clean\" x=\"24\" y=\"332\" width=\"1116\" height=\"42\" rx=\"7\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"44\" y=\"362\" fill=\"#243042\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">交付试玩报告：是否适合上线，哪些问题优先处理</text></svg><div class=\"selection-operations\"><div class=\"selection-actions\"><a href=\"http://127.0.0.1:4397/inspect/?topic=selection-explicit-lesson&amp;position=0\" target=\"_blank\" rel=\"noopener\">调用演示与原始屏幕文字 ↗</a></div><div class=\"prompt sv-copy\"><span>完整请求</span><button type=\"button\" class=\"copy-button\" data-selection-copy>复制请求</button><pre hidden><code>## Goal\n实际试玩当前的翻牌游戏，看看还有哪些问题。\n\n## Context\n这是准备放在个人主页上的游戏初版。运行环境见 ENVIRONMENT.md。\n\n## Constraints\n先检查，暂时不要修改游戏代码。\n\n## Done when\n给我一份试玩报告，说明是否适合上线，以及需要优先处理的问题。</code></pre></div></div>",
      "steps": [
        "选择、提交，并核对读取与清单"
      ],
      "script": [
        "【操作提示｜先保留项目路径与 Skill 列表的对比演示，再回到 04 号游戏项目；展示 PPT 中完整请求，讲清任务后复制。终端选择 Game Playtest，在 $game-playtest 后粘贴并发送。】\n\n我们可以对比看一下安装在不同的项目路径下的 skill ，实际使用会有什么需要注意的\n我们在终端输入，会看到一个 Skill 的列表，里面有 game-ui-frontend的 Skill。\n但如果我们切换到最外层的路径，输入 /skills，会发现这个 skill 找不到了，，\b因为这个 Skill 我们只是安装在了指定的项目路径下，像这样在当前项目的 Skill，我们只有在当前项目路径下才能够触发调用。\n这里稍微要注意一下。\n\n这一次，我们拿上一节的 04 号翻牌游戏初版来做检查。它准备放到个人主页上，但现在玩起来还有没有问题，我们想请 Codex 实际玩一遍，帮我们找出来。运行环境已经写在 ENVIRONMENT.md 里，它可以按里面的说明启动游戏。我们要求它先检查，暂时不要修改游戏代码，最后交一份试玩报告，说明发现了什么问题、哪些需要优先处理。\n\n我们还是回到当前的项目\n通过 game playtest 这个 skill 来验让模型检查 04 版本的翻牌游的问题是出现在什么环节\n这里我们选择 Game Playtest，和它说先检查，暂时不要修改游戏代码，最后给我们一份试玩报告，说明发现了什么问题、哪些需要优先处理。\nSkill 给模型提供试玩的方法，和要检查的项目\n它执行需要一点时间，我们先来看提前保存的调用日志。\n\n【操作提示｜Inspect AI 第一步。定位第 3 行，指完整的可用 Skill 列表。】\n\n首先，Codex 客户端会加载当前会话可用的 Skill 目录。这里列了每份 Skill 的名称、描述和文件位置。客户端用这份目录确认这个会话能用哪些 Skill，也知道到哪里找它们的正文。\n\n【操作提示｜Inspect AI 第二步。留在第 3 行，指 Game Playtest 条目的名称和文件位置。】\n\n这里面就包含了我们这一次调用的 Game Playtest。\n因为我在请求里明确指定了 Game Playtest，客户端拿到的是一个明确的引用。\n客户端按这个引用在目录里找到 Game Playtest，确认当前会话能用这份 Skill，然后到对应的位置读取 SKILL.md。\n\n【操作提示｜Inspect AI 第三步和第四步。先在第 10 行指原始任务，再到第 12 行展开 <skill> 消息，指名称、路径和文件头。】\n\n接下来，客户端把这份 Skill 放到我们原始发送的 User Prompt 后面，单独加了一条消息。\n这条消息里有 Skill 的名称、本地路径，还有 SKILL.md 的完整内容。\n\n【操作提示｜Inspect AI 第五步。留在第 12 行，指 Preferred Workflow 的高亮；讲完转到同轮最终回答。】\n\n上面这些事情都是 Codex 客户端做的。\n它把我们的任务和这份正文一起交给模型，正文里已经写了试玩应该怎么开始、怎么操作、怎么记录发现。\n模型拿到这些消息后，就可以参考skill 里面的方法来完成我们给它的任务。\n我们可以看一下快速最后给出的试玩报告。\n\n【操作提示｜在手动调用的同一组 Inspect 导航中进入第六步，定位 E 版原生日志第 404 行：http://127.0.0.1:4397/inspect/?topic=selection-explicit-lesson&position=5。直接定位第一项通关判定问题。】\n\n报告里最前面这一项是通关判定出了错：把配好的卡片张数当成了配对数，所以六对牌只配好三对，就显示全部完成，剩下的牌也不能继续翻开。下面还报告了配对计数显示、页面定位和界面布局等问题。\n\n【操作提示｜留在 E 版第 404 行最终回答，向下展示“2 个阻断问题”“3 个高优先问题”的表格、“试玩下来没问题的”和“建议顺序”；不切截图，不逐条讲问题。】\n\n能够看到回答的格式是很明显是按照 skill 指定的格式来回答的\n发现的问题按优先级分组。\n通关问题附了代码位置、实际现象和截图路径；后面有些问题用“问题、现象”两列表格来整理。\n最后还列了试玩中没有发现问题的部分，以及建议先修什么。\n后面我们会讲怎么样让 AI 以指定的模板进行回答。\n\n【操作提示｜回到刚才现场发出的任务，核对实际读取、报告及发现；尚未完成时等待并剪去等待，不套用 E 版结果。讲完进入下一种调用方式。】\n\n刚才我在请求里明确指定了 Game Playtest，客户端就能按引用去找。\n接下来我们试一下任务，不指定 Skill，我们看看模型是怎么拿到正文的，以及它最后生成的报告是什么样的。"
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07b",
      "seconds": 30
    },
    {
      "id": "p07c",
      "segment": "调用与选用",
      "title": "一次自然语言选用的依据与记录",
      "lead": "请求没有写 Skill 名称。浏览器游戏对应描述里的 browser-game，试玩清单对应 playtests and frontend QA。计步和重开是本次规则，不是选用依据，也不画成关键词相等。读取事实只展示 cat 命令、退出 0 和工具返回正文，不展示模型内部判断。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#review-match-rough)\" viewBox=\"0 0 1168 344\" role=\"img\" aria-label=\"请求与可用描述同屏对应，下面独立展示读取命令与文件返回事实\"><defs><filter id=\"review-match-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"384\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"review-match-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><rect class=\"sv-sketch\" x=\"8\" y=\"24\" width=\"532\" height=\"208\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><text x=\"24\" y=\"61\" fill=\"#243042\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">本次请求</text><text x=\"182\" y=\"61\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">未指定 Skill</text><text x=\"24\" y=\"114\" fill=\"#243042\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"\">为浏览器翻牌游戏</text><text x=\"24\" y=\"160\" fill=\"#243042\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"\">实际试玩并报告问题</text><text x=\"24\" y=\"204\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">本次目标：评估是否适合上线</text><rect class=\"sv-sketch\" x=\"660\" y=\"24\" width=\"480\" height=\"208\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"682\" y=\"61\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-playtest</text><text x=\"682\" y=\"114\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Run browser-game</text><text x=\"682\" y=\"160\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">playtests and frontend QA. …</text><path class=\"sv-sketch\" d=\"M24 124 H264\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-sketch\" d=\"M682 124 H942\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-sketch\" d=\"M24 170 H264\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-sketch\" d=\"M682 170 H1030\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-clean\" d=\"M552 112 H646\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><path class=\"sv-clean\" d=\"M552 158 H646\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><text x=\"682\" y=\"204\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">描述节选；语义对应不保证触发</text><rect class=\"sv-clean\" x=\"8\" y=\"252\" width=\"1132\" height=\"92\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"24\" y=\"290\" fill=\"#0b6b5f\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">本次读取证据</text><text x=\"286\" y=\"290\" fill=\"#0b6b5f\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">cat …/game-playtest/SKILL.md</text><text x=\"286\" y=\"328\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">退出 0，工具返回文件正文</text></svg><div class=\"selection-operations\"><div class=\"selection-actions\"><a href=\"http://127.0.0.1:4397/inspect/?topic=selection-auto-lesson&amp;position=0\" target=\"_blank\" rel=\"noopener\">打开同次运行：请求、说明与读取 ↗</a></div></div>",
      "steps": [
        "从读取回放过渡到调用路径回顾"
      ],
      "script": [
        "【操作提示｜同一项目开新会话，从 PPT 复制同一段 Prompt，直接发送。回放打开 Inspect AI 第一步，指第 10 行的消息开头。】\n\n接下来我们换一种发法。同样检查 04 号翻牌游戏初版，还是刚才那段任务，暂不改代码，最后给出试玩报告。\n这次新开一个会话，然后提示词还是和上个任务用同样的提示词，但是我们手动选中 skill\n我们看下提前跑的运行日志\n\n消息开头没有 $game-playtest\n\n【操作提示｜Inspect AI 第二步和第三步。先指第 3 行的完整列表，再切到同一行的 Game Playtest 高亮，指名称和描述。】\n\n客户端没有收到一个明确的 Skill 引用，所以它把任务和当前会话可用的 Skill 目录交给模型，由模型根据任务判断哪份指导适用。\n\n我们的任务是实际试玩浏览器翻牌游戏，找出问题并给出试玩报告。\n这里 Game Playtest 的描述说，它适用于浏览器游戏试玩和前端质量检查。这就是模型可以用来判断的线索。\n客户端同时给了模型 skill 文件位置，后面模型能根据知道去哪里看正文。\n\n【操作提示｜Inspect AI 第四步。定位 F 版原生日志第 43 行的 reasoning 记录，高亮从“Also I should read the game-playtest skill”到“This matches. Let me read the skill.”的选用理由；讲完进入第五步，查看同条记录对另一份 Skill 的比较。】\n\n模型在拿到上面的这些内容后，执行任务的过程当中，我们看到他说他还应该去阅读一下 Game Playtest skill。\n因为与 Game Playtest 描述中的检查任务匹配，依据主要是 Description 里的一些描述，譬如截图、浏览器自动化等等和我们当前的任务相符合。。\n可以看到本次任务，模型在判断采用哪个 Skill 的时候，是通过name 和 description 里面的内容决定的，没有读到 skill MD 里面的正文。\n它是先根据任务和描述判断这份 Skill 适用，再去读取里面具体的方法。\n\n【操作提示｜Inspect AI 第五步。仍停在 F 版原生日志第 43 行，高亮“Also `web-game-foundations` might be relevant but the task is a playtest, so game-playtest is the key one.”；讲完进入第六步读取调用。】\n\n模型下面还提到了我们之前安装的另一份 Skill，叫 web-game-foundations。它觉得这份 skill 也可能相关，但这次主要是试玩，所以 Game Playtest 更适合当前任务。\n所以，如果当我们确定这次要用哪份 Skill，就可以直接指定，这样对于模型来说也会简单一些。\n以及 Description 一定要写清楚这份 Skill 负责什么、适合什么情况，让模型有依据把它和其他 Skill 区分开。\n\n【操作提示｜Inspect AI 第六步。打开第 46 行的工具调用，指命令末尾的 game-playtest/SKILL.md。】\n\n继续往下看，当模型确定要去继续看 Gameplay Test Skill 的内容之后，它会调用本地工具去打开 Game Playtest 的文件。\n\n【操作提示｜Inspect AI 第七步。打开第 50 行的工具返回，指 Preferred Workflow 的高亮；讲完看 F 版同轮最终回答。】\n\n本地工具读完文件，把正文交回模型。这里就是刚才显式调用时看到的那段试玩流程。\n\n\n\n【操作提示｜在同一组 Inspect 导航中进入第八步，定位 F 版第 344 行的最终回答，查看第一项提前通关问题。此处只展示 F 的回复，不借用 E 的截图。】\n\n再看这次自己的试玩报告，它也发现了同样的问题：只配好三对就出现完成提示，剩下的牌不能继续翻开。两种调用方式，在我们保存的这两次运行里，都接到了实际试玩和问题报告。\n\n【操作提示｜回到本次自然语言任务，按实际读取和报告核对；等待可剪去，发现不同则据实说明。随后切到 PPT 过渡页，回顾两条调用路径。】"
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07c",
      "seconds": 30
    },
    {
      "id": "p07d",
      "segment": "调用与选用",
      "title": "手动指定：用户选中 Skill",
      "lead": "回顾同一翻牌清单任务的显式调用。用户指定 Skill，客户端按引用找到文件并将正文随任务交给模型。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#explicit-flow-rough)\" viewBox=\"0 0 1168 316\" role=\"img\" aria-label=\"用户选中 game-playtest 并发送任务和引用，客户端定位 Skill 文件、取得正文并随任务交给模型\"><defs><filter id=\"explicit-flow-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"356\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"explicit-flow-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><rect class=\"sv-clean\" x=\"10\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><text x=\"95\" y=\"33\" fill=\"#243042\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">用户</text><path class=\"sv-clean\" d=\"M95 46 V301\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"238\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"323\" y=\"33\" fill=\"#6e6043\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">Codex 客户端</text><path class=\"sv-clean\" d=\"M323 46 V301\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"468\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#5a51d1\" stroke-width=\"2\"/><text x=\"553\" y=\"33\" fill=\"#5a51d1\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">模型</text><path class=\"sv-clean\" d=\"M553 46 V301\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"956\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"1041\" y=\"33\" fill=\"#6e6043\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">SKILL.md</text><path class=\"sv-clean\" d=\"M1041 46 V301\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><text x=\"209.0\" y=\"85\" fill=\"#243042\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">选中 Game Playtest</text><path class=\"sv-sketch\" d=\"M95 94 H323\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#explicit-flow-arrow)\"/><rect class=\"sv-clean\" x=\"26\" y=\"111\" width=\"206\" height=\"62\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"129\" y=\"136\" fill=\"#6e6043\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">同一个任务</text><text x=\"129\" y=\"160\" fill=\"#243042\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">整理翻牌试玩清单</text><text x=\"209.0\" y=\"194\" fill=\"#243042\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">发送任务和引用</text><path class=\"sv-sketch\" d=\"M95 203 H323\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#explicit-flow-arrow)\"/><text x=\"682.0\" y=\"225\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">根据引用定位文件</text><path class=\"sv-sketch\" d=\"M323 234 H1041\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#explicit-flow-arrow)\"/><text x=\"682.0\" y=\"255\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">取得 Skill 正文</text><path class=\"sv-sketch\" d=\"M1041 264 H323\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\" marker-end=\"url(#explicit-flow-arrow)\"/><text x=\"438.0\" y=\"290\" fill=\"#5a51d1\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">任务与 Skill 正文</text><path class=\"sv-sketch\" d=\"M323 299 H553\" fill=\"none\" stroke=\"#5a51d1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#explicit-flow-arrow)\"/></svg><div class=\"selection-operations\"></div>",
      "steps": [
        "用户选中，客户端带入正文"
      ],
      "script": [
        "【操作提示｜沿手动指定图，从用户指到 Codex 客户端，再沿箭头指文件和模型】\n\n刚才两次发的都是为翻牌游戏整理人工试玩清单的任务。\n第一次，我们在列表里认出并选中了 game-playtest。Codex 客户端根据引用找到文件，取出正文之后，把任务和正文一起带给模型。"
      ],
      "refs": [
        {
          "text": "OpenAI · Build skills",
          "url": "https://learn.chatgpt.com/docs/build-skills#how-chatgpt-and-codex-use-skills",
          "kind": "live"
        }
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07d",
      "seconds": 30
    },
    {
      "id": "p07d-implicit",
      "segment": "调用与选用",
      "title": "自然语言触发：模型匹配任务",
      "lead": "回顾同一翻牌清单任务的自然语言选用。客户端提供任务和目录，模型匹配描述并请求本地工具读取，工具返回正文。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#implicit-flow-rough)\" viewBox=\"0 0 1168 350\" role=\"img\" aria-label=\"用户只发送任务，客户端给模型任务和可用目录，模型依据描述选中 Skill 并请求本地工具读取，工具从文件取得正文并返回给模型\"><defs><filter id=\"implicit-flow-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"390\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"implicit-flow-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><rect class=\"sv-clean\" x=\"10\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><text x=\"95\" y=\"33\" fill=\"#243042\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">用户</text><path class=\"sv-clean\" d=\"M95 46 V337\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"238\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"323\" y=\"33\" fill=\"#6e6043\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">Codex 客户端</text><path class=\"sv-clean\" d=\"M323 46 V337\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"468\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#5a51d1\" stroke-width=\"2\"/><text x=\"553\" y=\"33\" fill=\"#5a51d1\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">模型</text><path class=\"sv-clean\" d=\"M553 46 V337\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"698\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"783\" y=\"33\" fill=\"#0b6b5f\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">本地工具</text><path class=\"sv-clean\" d=\"M783 46 V337\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><rect class=\"sv-clean\" x=\"956\" y=\"4\" width=\"170\" height=\"42\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"1041\" y=\"33\" fill=\"#6e6043\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"600\" class=\"\">SKILL.md</text><path class=\"sv-clean\" d=\"M1041 46 V337\" fill=\"none\" stroke=\"#b9bcb5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><text x=\"209.0\" y=\"77\" fill=\"#243042\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">只发送任务</text><path class=\"sv-sketch\" d=\"M95 86 H323\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#implicit-flow-arrow)\"/><text x=\"438.0\" y=\"120\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">任务与可用目录</text><path class=\"sv-sketch\" d=\"M323 129 H553\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#implicit-flow-arrow)\"/><rect class=\"sv-clean\" x=\"565\" y=\"143\" width=\"410\" height=\"34\" rx=\"7\" fill=\"#edebfb\" stroke=\"#5a51d1\" stroke-width=\"2\"/><text x=\"580\" y=\"167\" fill=\"#5a51d1\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">目录中的名称和描述提供匹配依据</text><text x=\"668.0\" y=\"199\" fill=\"#5a51d1\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">请求读取</text><path class=\"sv-sketch\" d=\"M553 208 H783\" fill=\"none\" stroke=\"#5a51d1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#implicit-flow-arrow)\"/><text x=\"912.0\" y=\"242\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">打开 SKILL.md</text><path class=\"sv-sketch\" d=\"M783 251 H1041\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#implicit-flow-arrow)\"/><text x=\"912.0\" y=\"285\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">文件正文</text><path class=\"sv-sketch\" d=\"M1041 294 H783\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\" marker-end=\"url(#implicit-flow-arrow)\"/><text x=\"668.0\" y=\"328\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">返回正文</text><path class=\"sv-sketch\" d=\"M783 337 H553\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\" marker-end=\"url(#implicit-flow-arrow)\"/></svg><div class=\"selection-operations\"></div>",
      "steps": [
        "模型匹配，工具读取正文"
      ],
      "script": [
        "【操作提示｜沿自然语言触发图，先指目录和模型，再指本地工具和正文返回】\n\n第二次我们只发了任务。\nCodex 客户端把任务和可用 Skill 目录交给模型。目录里列了名称、描述和文件路径。\n模型会找更加收到的名称和描述，找到匹配的 Skill。\n\n并发出读取请求，Codex 调用本地工具打开 SKILL.md。\n工具读到文件正文，再把结果交回模型。模型基于拿到的 skill 的内容，继续执行任务。"
      ],
      "refs": [
        {
          "text": "OpenAI · Build skills",
          "url": "https://learn.chatgpt.com/docs/build-skills#how-chatgpt-and-codex-use-skills",
          "kind": "live"
        }
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07d-implicit",
      "seconds": 30
    },
    {
      "id": "p07d-writing",
      "segment": "调用与选用",
      "title": "Skill 的名称和描述怎么写",
      "lead": "以 game-playtest 为例，说明名称怎样方便查找和引用、描述怎样帮助模型判断任务是否匹配。写作建议与规范上限分别标明。",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#skill-frontmatter-rough)\" viewBox=\"0 0 1168 351\" role=\"img\" aria-label=\"课程示例。name 让人在列表里辨认，建议两三个词。description 供模型匹配，建议用一到两句写清用途和情境。规范上限分别为 64 与 1,024 个字符。\"><defs><filter id=\"skill-frontmatter-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"391\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"skill-frontmatter-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><path class=\"sv-sketch\" d=\"M14 4 L712 4 L740 32 L740 276 L12 276 Z M712 4 V32 H740\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"41\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"600\" class=\"sv-code\">SKILL.md</text><text x=\"206\" y=\"41\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">课程示例 · 文件头</text><rect class=\"sv-clean\" x=\"35\" y=\"60\" width=\"679\" height=\"51\" rx=\"7\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"53\" y=\"93\" fill=\"#6e6043\" font-size=\"25\" text-anchor=\"start\" font-weight=\"600\" class=\"sv-code\">name: game-playtest</text><rect class=\"sv-clean\" x=\"35\" y=\"127\" width=\"679\" height=\"126\" rx=\"7\" fill=\"#edebfb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"53\" y=\"157\" fill=\"#5a51d1\" font-size=\"23\" text-anchor=\"start\" font-weight=\"600\" class=\"sv-code\">description: &gt;-</text><text x=\"77\" y=\"191\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">对浏览器游戏做试玩和前端质量检查。</text><text x=\"77\" y=\"221\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">适用于整理人工试玩清单、验证操作后的</text><text x=\"77\" y=\"248\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">游戏状态，或用截图检查画面。</text><text x=\"806\" y=\"40\" fill=\"#6e6043\" font-size=\"19\" text-anchor=\"start\" font-weight=\"400\" class=\"\">课程写法</text><path class=\"sv-sketch\" d=\"M725 86 H790\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#skill-frontmatter-arrow)\"/><text x=\"806\" y=\"80\" fill=\"#6e6043\" font-size=\"25\" text-anchor=\"start\" font-weight=\"600\" class=\"\">人在列表里辨认</text><text x=\"806\" y=\"109\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">用两三个词说清工作</text><path class=\"sv-sketch\" d=\"M725 181 H790\" fill=\"none\" stroke=\"#5a51d1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#skill-frontmatter-arrow)\"/><text x=\"806\" y=\"175\" fill=\"#5a51d1\" font-size=\"25\" text-anchor=\"start\" font-weight=\"600\" class=\"\">模型据此匹配任务</text><text x=\"806\" y=\"207\" fill=\"#243042\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">先写用途，再写适用情境</text><text x=\"806\" y=\"237\" fill=\"#243042\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">一到两句，包含任务关键词</text><path class=\"sv-clean\" d=\"M12 305 H1140\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"14\" y=\"337\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"600\" class=\"\">Agent Skills 规范上限</text><text x=\"284\" y=\"337\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">name  64 个字符</text><text x=\"566\" y=\"337\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">description  1,024 个字符</text></svg><div class=\"selection-operations\"></div>",
      "steps": [
        "命名、描述与长度"
      ],
      "script": [
        "【操作提示｜PPT 第三屏；指 game-playtest 的文件头示例】\n\n我们写 Skill 时，要重视名称和描述。\n写完以后一定要拿真实任务测一下，看看在没有点名的情况下，模型能不能准确选中这份 Skill。\n\n我们看一下 Anthropic 关于 Skill 的 name 和 description 怎么写，有哪些建议。\n它在文章里提到，给 Skill 取名时，可以考虑用动名词来写出它负责的动作。比如 testing-code，两个词用连字符连接。它也给了其他命名方式，像 game-playtest 这种能看出具体工作的短词组就可以。尽量避免 helper、tools 这种太笼统的名字。\n再往下，description 要交代两件事：这份 Skill 做什么，哪些任务适合用它。文章里给了具体例子，比如处理 PDF 的 Skill，可以写提取文本和表格、填写表单，再说明在遇到 PDF 或文档提取任务时可以用它。Anthropic 还建议用第三人称直接描述能力，比如写「提取 PDF 的文字和表格」。\n\n【操作提示｜打开 Agent Skills 规范，指 name 和 description 的字符上限】\n\nAgent Skills 推荐 name 最多六十四个字符，大约十个英文单词。\ndescription 最多一千零二十四个字符，大约一百七十个英文单词。\n这里大家可以作为一个参考。\n\n实际写的时候，描述可以先用一到两句，把用途放在前面，补上用户在真实请求里会用的词。这两份资料大家可以课后再看。"
      ],
      "refs": [
        {
          "text": "Anthropic · Skill authoring best practices",
          "url": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#naming-conventions",
          "kind": "live"
        },
        {
          "text": "Agent Skills · 字段规范",
          "url": "https://agentskills.io/specification#frontmatter",
          "kind": "live"
        }
      ],
      "layout": "selection-slide skill-visual-slide",
      "teaching": [],
      "source": "index.html#p07d-writing",
      "seconds": 30
    },
    {
      "id": "p07i",
      "segment": "读懂简单 Skill",
      "title": "从“是否选用”读到“具体怎样工作”",
      "label": "从“是否选用”读到“具体怎样工作”",
      "lead": "文件头的名称与描述帮助识别和选用，Markdown 正文用标题、列表和代码块交代具体工作方法。图内为结构示意，description 的中文是概括；正文写哪些内容、用什么标题，按任务组织。",
      "layout": "selection-slide reading-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07i-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"从“是否选用”读到“具体怎样工作”\"><defs><filter id=\"p07i-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07i-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><path class=\"sv-sketch\" d=\"M2 4 L620 4 L648 32 L648 358 L0 358 Z M620 4 V32 H648\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"28\" y=\"38\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">SKILL.md</text><text x=\"196\" y=\"38\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">同一份文件</text><rect class=\"sv-clean\" x=\"24\" y=\"54\" width=\"600\" height=\"112\" rx=\"6\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"40\" y=\"82\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">文件头</text><text x=\"40\" y=\"114\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">name: game-playtest</text><text x=\"40\" y=\"146\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">description: 浏览器游戏试玩与前端检查</text><text x=\"604\" y=\"146\" fill=\"#6e6043\" font-size=\"18\" text-anchor=\"end\" font-weight=\"400\" class=\"\">概括</text><rect class=\"sv-clean\" x=\"24\" y=\"178\" width=\"600\" height=\"164\" rx=\"6\" fill=\"#e0f3ef\" stroke=\"none\" stroke-width=\"2\"/><text x=\"40\" y=\"206\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">下面是正文</text><text x=\"40\" y=\"238\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">## 标题</text><text x=\"196\" y=\"238\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">按任务命名</text><text x=\"40\" y=\"268\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">- 列表</text><text x=\"196\" y=\"268\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">要点、条件、检查项</text><text x=\"40\" y=\"298\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">``` 代码</text><text x=\"196\" y=\"298\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">命令或配置片段</text><path class=\"sv-clean\" d=\"M40 312 H604\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"40\" y=\"332\" fill=\"#6e6043\" font-size=\"19\" text-anchor=\"start\" font-weight=\"400\" class=\"\">内容块不是固定栏目</text><path class=\"sv-sketch\" d=\"M652 110 H710\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07i-arrow)\"/><rect class=\"sv-sketch\" x=\"722\" y=\"54\" width=\"430\" height=\"112\" rx=\"8\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"746\" y=\"98\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">识别与选用</text><text x=\"746\" y=\"136\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">这份指导适合当前任务吗？</text><path class=\"sv-sketch\" d=\"M652 260 H710\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07i-arrow)\"/><rect class=\"sv-sketch\" x=\"722\" y=\"196\" width=\"430\" height=\"126\" rx=\"8\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"746\" y=\"244\" fill=\"#0b6b5f\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">选用后的详细指导</text><text x=\"746\" y=\"284\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">怎样做、看什么、交出什么</text></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"index.html?mode=slides&amp;part=2&amp;step=0#p07j\">下一页：认识官方示例 ↗</a></div>",
      "steps": [
        "文件头与正文的职责"
      ],
      "script": [
        "前面，我们通过名称和描述，判断一份 Skill 适不适合当前任务，也看过怎样选用它。选用之后，AI 还需要知道具体怎么做。这些详细的指导，就写在 SKILL.md 下面的正文里。\n\n正文也是 Markdown，可以用标题、列表和代码块组织内容。这里的内容块怎么分，要看这份 Skill 指导什么工作。我们先看 OpenAI 提供的一份简短示例，看看它怎样把一项工作交代清楚。"
      ],
      "source": "index.html#p07i",
      "seconds": 35
    },
    {
      "id": "p07j",
      "segment": "读懂简单 Skill",
      "title": "setup-demo-app 用来搭建什么",
      "label": "setup-demo-app 用来搭建什么",
      "lead": "这份官方示例为界面实验或问题复现搭建简单 React 网页，包含标题区和两张卡片。画面为交付结构示意，后续在真实原文中阅读技术、目录、步骤和完成标准。",
      "layout": "selection-slide reading-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07j-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"setup-demo-app 用来搭建什么\"><defs><filter id=\"p07j-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07j-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"0\" y=\"34\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"700\" class=\"\">界面实验／问题复现</text><path class=\"sv-sketch\" d=\"M292 26 H348\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07j-arrow)\"/><text x=\"364\" y=\"34\" fill=\"#0b6b5f\" font-size=\"26\" text-anchor=\"start\" font-weight=\"700\" class=\"\">搭建最小 React 演示应用</text><rect class=\"sv-clean\" x=\"148\" y=\"58\" width=\"872\" height=\"250\" rx=\"12\" fill=\"#fffdf7\" stroke=\"#8e95a2\" stroke-width=\"2\"/><rect class=\"sv-clean\" x=\"148\" y=\"58\" width=\"872\" height=\"40\" rx=\"12\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><circle class=\"sv-clean\" cx=\"172\" cy=\"78\" r=\"6\" fill=\"#8e95a2\"/><circle class=\"sv-clean\" cx=\"196\" cy=\"78\" r=\"6\" fill=\"#8e95a2\"/><circle class=\"sv-clean\" cx=\"220\" cy=\"78\" r=\"6\" fill=\"#8e95a2\"/><text x=\"584\" y=\"84\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">交付结构示意</text><rect class=\"sv-clean\" x=\"172\" y=\"114\" width=\"824\" height=\"56\" rx=\"6\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"584\" y=\"150\" fill=\"#0b6b5f\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"700\" class=\"\">Header · 标题区</text><rect class=\"sv-sketch\" x=\"172\" y=\"186\" width=\"396\" height=\"102\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"370\" y=\"224\" fill=\"#243042\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"700\" class=\"\">Card · 卡片</text><rect class=\"sv-clean\" x=\"212\" y=\"242\" width=\"316\" height=\"12\" rx=\"4\" fill=\"#dfd8c6\" stroke=\"none\" stroke-width=\"2\"/><rect class=\"sv-clean\" x=\"248\" y=\"262\" width=\"244\" height=\"10\" rx=\"4\" fill=\"#dfd8c6\" stroke=\"none\" stroke-width=\"2\"/><rect class=\"sv-sketch\" x=\"600\" y=\"186\" width=\"396\" height=\"102\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"798\" y=\"224\" fill=\"#243042\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"700\" class=\"\">Card · 卡片</text><rect class=\"sv-clean\" x=\"640\" y=\"242\" width=\"316\" height=\"12\" rx=\"4\" fill=\"#dfd8c6\" stroke=\"none\" stroke-width=\"2\"/><rect class=\"sv-clean\" x=\"676\" y=\"262\" width=\"244\" height=\"10\" rx=\"4\" fill=\"#dfd8c6\" stroke=\"none\" stroke-width=\"2\"/><rect class=\"sv-clean\" x=\"0\" y=\"322\" width=\"1152\" height=\"38\" rx=\"6\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"24\" y=\"348\" fill=\"#243042\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">setup-demo-app：把这项工作的要求与做法交给 AI</text></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://developers.openai.com/blog/eval-skills#a-sample-skill\">打开 setup-demo-app 原文 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"index.html?mode=slides&amp;part=2&amp;step=0#p07j1\">示例读完，返回任务小结 ↗</a></div>",
      "steps": [
        "用途与交付对象"
      ],
      "script": [
        "这份 Skill 叫 setup-demo-app，用来搭建一个用 React 编写的简单网页项目，里面有标题区和两张卡片，方便我们在这个基础上做界面实验或复现问题。"
      ],
      "source": "index.html#p07j",
      "seconds": 35
    },
    {
      "id": "p07j1",
      "segment": "读懂简单 Skill",
      "title": "把执行、自检与修正接起来",
      "label": "把执行、自检与修正接起来",
      "lead": "正文可以把工作要求、执行方法和检查连接起来。完成标准和前面的明确要求共同作为自检依据；发现不符合后继续修正。图为工作关系示意，未表示官方示例曾实际运行。具体内容仍按任务取舍。",
      "layout": "selection-slide reading-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07j1-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"把执行、自检与修正接起来\"><defs><filter id=\"p07j1-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07j1-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><path class=\"sv-sketch\" d=\"M2 22 L297 22 L325 50 L325 286 L0 286 Z M297 22 V50 H325\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"22\" y=\"56\" fill=\"#6e6043\" font-size=\"30\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">工作要求</text><text x=\"22\" y=\"84\" fill=\"#6e6043\" font-size=\"19\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">When to use / What to build</text><text x=\"22\" y=\"126\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">情境：新建演示项目</text><text x=\"22\" y=\"162\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">目标：简单 React 网页</text><text x=\"22\" y=\"198\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">组成：标题区、两张卡片</text><text x=\"22\" y=\"234\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">规范：只用函数组件</text><path class=\"sv-sketch\" d=\"M343 116 C378 116 394 88 432 88\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07j1-arrow)\"/><text x=\"387\" y=\"64\" fill=\"#243042\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">据此执行</text><rect class=\"sv-sketch\" x=\"450\" y=\"28\" width=\"274\" height=\"116\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"472\" y=\"64\" fill=\"#0b6b5f\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">执行方法</text><text x=\"704\" y=\"63\" fill=\"#0b6b5f\" font-size=\"20\" text-anchor=\"end\" font-weight=\"400\" class=\"sv-code\">Steps</text><text x=\"472\" y=\"102\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">建项目、安装与配置</text><text x=\"472\" y=\"134\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">实现要求的界面</text><path class=\"sv-sketch\" d=\"M587 152 V214\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07j1-arrow)\"/><rect class=\"sv-sketch\" x=\"450\" y=\"226\" width=\"274\" height=\"94\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><text x=\"472\" y=\"262\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">产出</text><text x=\"472\" y=\"298\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">项目文件与运行结果</text><path class=\"sv-sketch\" d=\"M736 273 H844\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07j1-arrow)\"/><text x=\"790\" y=\"256\" fill=\"#243042\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">核对</text><rect class=\"sv-sketch\" x=\"858\" y=\"226\" width=\"294\" height=\"94\" rx=\"7\" fill=\"#e3f2e6\" stroke=\"#15803d\" stroke-width=\"2\"/><path class=\"sv-sketch\" d=\"M882 254 L892 264 L910 244\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"926\" y=\"264\" fill=\"#15803d\" font-size=\"30\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">自检</text><text x=\"882\" y=\"298\" fill=\"#243042\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">文件、启动、其他要求</text><text x=\"1134\" y=\"262\" fill=\"#15803d\" font-size=\"19\" text-anchor=\"end\" font-weight=\"400\" class=\"sv-code\">DoD</text><path class=\"sv-sketch\" d=\"M1005 216 C1038 88 852 12 738 72\" fill=\"none\" stroke=\"#ac3615\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07j1-arrow)\"/><text x=\"800\" y=\"138\" fill=\"#ac3615\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">不符合要求</text><text x=\"800\" y=\"170\" fill=\"#ac3615\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">继续修正</text><path class=\"sv-sketch\" d=\"M162 296 V344 Q162 356 180 356 H988 Q1005 356 1005 340 V328\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\" marker-end=\"url(#p07j1-arrow)\"/><rect class=\"sv-clean\" x=\"522\" y=\"338\" width=\"124\" height=\"28\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"584\" y=\"358\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">判断依据</text></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/game-only.html?run=old5\">继续：早期 05 翻牌游戏 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://developers.openai.com/blog/eval-skills#a-sample-skill\">回看官方示例 ↗</a><details class=\"reading-menu\"><summary>原文定位与案例</summary><nav><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md\">game-playtest：全貌 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#overview\">Overview：工作视角 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#preferred-workflow\">Preferred Workflow：步骤 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#tooling-guidance\">Tooling Guidance：条件 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#common-checks\">Common Checks：检查点 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#reporting-standard\">Reporting：输出要求 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references\">References：资料入口 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?run=mm-memory&amp;sample=cli&amp;line=86\">第一节朝向检查证据 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?run=mm-memory&amp;sample=cli&amp;line=79&amp;mark=step-count&amp;find=%E2%9C%98%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E5%90%8C%E6%A0%B7%E8%AE%A1%201%20%E6%AD%A5%20-%3E%201\">补充案例：步数刷新 ↗</a></nav></details></div>",
      "steps": [
        "要求、执行、产出与自检的关系"
      ],
      "script": [
        "Skill 把一项工作的要求和方法组织起来：什么时候用、要完成什么、怎样做，以及怎样检查结果，都可以在正文中交代清楚。刚才的目录和写法要求规定了要交付什么，步骤提供做法，完成标准则把检查接到了执行之后。\n\n有了这些依据，AI 做完以后就可以对照产出，发现不符合要求的地方，再继续修正。我们自己查看结果时，也可以沿着同样的要求核对它做到了哪些。\n\n正文具体写哪些内容，要按任务取舍。搭建这个简单网页，可以这样组织；换成游戏试玩，还会涉及工具怎么选、哪些地方要检查、发现问题以后怎样报告。我们接着看游戏试玩的例子。"
      ],
      "source": "index.html#p07j1",
      "seconds": 35
    },
    {
      "id": "p07t1",
      "title": "共同方法怎样用于当前任务",
      "label": "共同方法怎样用于当前任务",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "任务规则与正文方法共同形成检查；实际证据支持本轮结论。",
      "layout": "reading-slide task-slide",
      "html": "<div class=\"task-board\"><div class=\"task-pair\"><section><h3>本次任务 · 规则与边界</h3><p>六对才通关 · 检查前三对 · 保留源码</p></section><section><h3>Skill 正文 · 可复用方法</h3><p>试玩流程 · 工具条件 · 报告要求</p></section></div><div data-reveal=\"1\"><table class=\"task-table\"><thead><tr><th>共同方法</th><th>结合本次任务，形成具体检查</th></tr></thead><tbody><tr><td>尝试主要操作</td><td>翻牌、配对，检查第三对完成后的状态</td></tr><tr><td>留下可核对的证据</td><td>对照实际牌面、进度与通关提示</td></tr><tr><td>报告复现与差异</td><td>预期 3/6 且能继续；记录实际结果与影响</td></tr></tbody></table></div><p class=\"task-result is-risk\" data-reveal=\"2\"><strong>本轮观察</strong>　只完成三对，却显示 6/6 并通关 → 提前通关</p></div><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#preferred-workflow\">game-playtest · 推荐流程 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#tooling-guidance\">game-playtest · 工具与条件 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#reporting-standard\">game-playtest · 报告要求 ↗</a><details class=\"reading-menu\"><summary>实录与备用原文</summary><nav><a target=\"_blank\" rel=\"noopener\" href=\"../../materials/playtest-old5-20261111/early-clear.png\">任务 1 · 第三对后的实际画面 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-a-output\">预跑材料 · run-a-output · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-a-report\">预跑材料 · run-a-report · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#workflow\">备用原文节选 · Preferred Workflow ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#tooling\">备用原文节选 · Tooling Guidance ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#reporting\">备用原文节选 · Reporting Standard ↗</a></nav></details></div>",
      "steps": [
        "建立知识关系",
        "对应当前任务",
        "用实际结果核对"
      ],
      "script": [
        "这里有两类信息。左边来自这次请求：六对才通关，检查前三对，保留源码。右边来自 Skill：怎样安排试玩，怎样选择检查手段，怎样留下报告。前者给出当前任务的规则和边界，后者提供同类任务可以复用的方法。\n\n我们带着右边这三个位置去读正文，看看它们分别怎样影响工作。",
        "把刚读过的指导放回这次游戏。流程中的主要操作，对应翻牌和配对；取证要抓住本次关注的第三对完成状态；报告要说明怎样复现、预期与实际有什么差别。\n\n页面左侧给出方法，右侧是它在这次任务中的具体用法。六对规则让我们预期第三对完成后应显示三比六并能继续；截图与操作记录则用来核对实际是否如此。现在看本轮实际结果。",
        "把本轮结果填回这里，检查过程就完整了：本次规则给出预期，正文提供操作、取证和报告的方法，实际观察支持问题判断。拿到这份报告的人可以沿复现步骤继续核对。\n\n共同方法可以复用，具体规则和结论随任务变化。下一轮仍沿用试玩流程，但增加了通关后的恢复检查。这时就要找到更细的检查内容。"
      ],
      "source": "index.html#p07t1",
      "seconds": 120
    },
    {
      "id": "p07t2",
      "title": "Reference 怎样变成具体检查",
      "label": "Reference 怎样变成具体检查",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "正文提供入口，清单提供条目；结合当前游戏形成动作、预期与可核对的结果。",
      "layout": "reading-slide task-slide",
      "html": "<div class=\"task-board\"><div class=\"task-pair\"><section><h3>正文 · 共同流程与入口</h3><p>试玩、取证、报告 → Full checklist</p></section><section><h3>Reference · 补充检查细则</h3><p>通用条目：恢复状态能否正常工作</p></section></div><div data-reveal=\"1\"><p class=\"task-action\">本例动作：通关后点击「再来一次」</p><table class=\"task-table\"><thead><tr><th>要判断什么</th><th>本游戏的具体预期</th></tr></thead><tbody><tr><td>状态恢复到新一局</td><td>计数归零 · 通关提示消失 · 牌面重新扣下</td></tr><tr><td>新一局可以继续操作</td><td>再次翻开一张牌</td></tr></tbody></table></div><p class=\"task-result is-ok\" data-reveal=\"2\"><strong>本轮结果</strong>　状态已重置；再次翻牌成功 → 分别支持两层预期</p></div><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references\">game-playtest · 资料入口 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/playtest-checklist.md#universal-checks\">试玩清单 · 恢复检查 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-b-read\">预跑材料 · run-b-read · Inspect ↗</a><details class=\"reading-menu\"><summary>实录与备用原文</summary><nav><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-b-verify\">任务 2 · 重开复验 · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#references\">备用原文节选 · References ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#checklist\">备用原文节选 · Universal checks ↗</a></nav></details></div>",
      "steps": [
        "建立知识关系",
        "对应当前任务",
        "用实际结果核对"
      ],
      "script": [
        "正文给出共同试玩流程，并用 Full checklist 连接完整清单。流程回答怎样推进，清单补充哪些情形值得检查。分开保存以后，正文仍保留找到细则的入口。\n\n这次关心通关后的恢复，我们就沿引用寻找相关条目，看看它提供了什么，还需要结合游戏补充什么。",
        "清单中的“恢复状态能否正常工作”，放到这里，具体动作就是通关后点击“再来一次”。要判断恢复成功，可以分成两层：状态回到新一局，以及新一局能够继续操作。\n\n第一层要看计数归零、通关提示消失、牌面重新扣下；第二层要实际再翻一张牌。Reference 提供检查方向，当前游戏让我们把方向展开为动作和可观察的预期。下面核对本轮有没有查阅、有没有执行。",
        "记录中的计数归零、横幅消失和牌面复位，对应状态恢复；再次翻牌成功，对应操作恢复。两层预期都有各自的实际结果，才支持这一轮的恢复验收。\n\n因此，使用 Reference 可以沿着这三层来读：通用条目说什么，在当前对象上怎样操作和判断，结果有没有支持预期。下一轮要判断游戏界面，还会用到另一类工作的专项指导。"
      ],
      "source": "index.html#p07t2",
      "seconds": 120
    },
    {
      "id": "p07t3",
      "title": "专项 Skill 怎样补充判断依据",
      "label": "专项 Skill 怎样补充判断依据",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "共同流程与专项判断配合使用；按当前任务选用标准，分别核对不同检查问题。",
      "layout": "reading-slide task-slide",
      "html": "<div class=\"task-board\"><div class=\"task-pair\"><section><h3>game-playtest · 共同流程</h3><p>怎样试玩、取证和报告</p></section><section><h3>game-ui-frontend · 专项指导</h3><p>信息层级 · 保护游戏区 · 桌面与手机</p></section></div><div data-reveal=\"1\"><table class=\"task-table\"><thead><tr><th>专项知识在本例中的用法</th><th>对应的检查问题</th></tr></thead><tbody><tr><td>保护游戏区域</td><td>信息区有没有遮挡牌阵？</td></tr><tr><td>操作时获得所需信息</td><td>窄屏底部翻牌时，还看得到计数吗？</td></tr></tbody></table></div><div class=\"task-results\" data-reveal=\"2\"><p class=\"is-ok\"><strong>遮挡</strong>　重叠面积为 0</p><p class=\"is-risk\"><strong>可见性</strong>　计数已不在视口</p></div></div><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references\">game-playtest · 资料入口 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards\">前端 Skill · 判断标准 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-c-read\">预跑材料 · run-c-read · Inspect ↗</a><details class=\"reading-menu\"><summary>实录与备用原文</summary><nav><a target=\"_blank\" rel=\"noopener\" href=\"../../materials/playtest-old5-20261111/desktop-first-pair.png\">任务 3 · 桌面画面 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"../../materials/playtest-old5-20261111/mobile-bottom.png\">任务 3 · 窄屏底部 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-c-verify\">任务 3 · 视口检查 · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#references\">备用原文节选 · References ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"task-originals.html#frontend\">备用原文节选 · Frontend Standards ↗</a></nav></details></div>",
      "steps": [
        "建立知识关系",
        "对应当前任务",
        "用实际结果核对"
      ],
      "script": [
        "game-playtest 提供试玩、取证和报告的方法。现在检查的是界面上的信息与牌阵关系，还需要判断什么布局会影响玩家操作；这部分可以查阅 game-ui-frontend 的专项指导。\n\n两份 Skill 在这里贡献不同的知识。我们沿引用读前端正文，挑出与本次桌面、窄屏检查有关的标准。",
        "保护游戏区域，在本次任务中对应“信息区有没有挡住牌阵”；信息层级与手机使用条件，则提醒我们看“操作底部牌时，还能否看到计数”。\n\n这两个问题要分别观察。没有遮挡，只回答区域之间是否重叠；操作时能否获得信息，还取决于当前视口和玩家所在的位置。我们用本轮的截图与测量分别核对。",
        "这轮在窄屏底部观察到两个不同结果：区域重叠面积为零，但计数不在视口里。它们分别回答了刚才的两个问题，所以不能用“没有遮挡”代替对状态可见性的判断。\n\n共同流程帮助我们操作、取证和报告；专项指导帮助确定界面上要判断哪些关系；当前任务决定选用哪些标准。回到后面的全局图，就能把正文、配套资料与另一份 Skill 的分工连起来。"
      ],
      "source": "index.html#p07t3",
      "seconds": 120
    },
    {
      "id": "p07o",
      "title": "Skill 把可复用的工作知识组织起来",
      "label": "Skill 把可复用的工作知识组织起来",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "SKILL.md 是入口，文件头帮助识别与选用，正文提供核心工作指导。配套 Reference 供查阅，脚本供运行，素材供使用。另一份专项 Skill 有独立适用范围，引用它不会改变其边界。图为组织示意，配套文件可选，也可引用共享目录中的资料。",
      "layout": "reading-slide resource-slide selection-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07o-rough)\" viewBox=\"0 0 1168 410\" role=\"img\" aria-label=\"Skill 把可复用的工作知识组织起来\"><defs><filter id=\"p07o-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"450\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07o-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"0\" y=\"22\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">一份 Skill · 组织示意</text><rect class=\"sv-sketch\" x=\"0\" y=\"34\" width=\"850\" height=\"266\" rx=\"9\" fill=\"none\" stroke=\"#9c8b66\" stroke-width=\"2\" stroke-dasharray=\"7 6\"/><path class=\"sv-sketch\" d=\"M22 66 L302 66 L330 94 L330 284 L20 284 Z M302 66 V94 H330\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"94\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">SKILL.md</text><g class=\"map-meta\"><rect class=\"sv-clean\" x=\"36\" y=\"106\" width=\"278\" height=\"62\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"50\" y=\"127\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">name / description</text><text x=\"50\" y=\"158\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">识别身份与适用情境</text></g><g class=\"map-body\"><rect class=\"sv-clean\" x=\"36\" y=\"181\" width=\"278\" height=\"86\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"50\" y=\"202\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"700\" class=\"\">正文 · 核心工作指导</text><text x=\"50\" y=\"233\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">流程、规则与判断依据</text><text x=\"50\" y=\"264\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">按需取用的条件和入口</text></g><g data-reveal=\"1\" class=\"map-resources\"><text x=\"480\" y=\"57\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">配套文件 · 按需提供</text><rect class=\"sv-sketch\" x=\"480\" y=\"70\" width=\"350\" height=\"60\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"498\" y=\"90\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">references/</text><text x=\"498\" y=\"122\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">细则、背景、长示例</text><path class=\"sv-sketch\" d=\"M330 224 H365 Q386 224 386 100 H469\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07o-arrow)\"/><rect class=\"sv-clean\" x=\"398\" y=\"84\" width=\"60\" height=\"29\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"428\" y=\"106\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">查阅</text><rect class=\"sv-sketch\" x=\"480\" y=\"148\" width=\"350\" height=\"60\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"498\" y=\"168\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">scripts/</text><text x=\"498\" y=\"200\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">可执行的处理过程</text><path class=\"sv-sketch\" d=\"M330 224 H365 Q386 224 386 178 H469\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07o-arrow)\"/><rect class=\"sv-clean\" x=\"398\" y=\"162\" width=\"60\" height=\"29\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"428\" y=\"184\" fill=\"#0b6b5f\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">运行</text><rect class=\"sv-sketch\" x=\"480\" y=\"226\" width=\"350\" height=\"60\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"498\" y=\"246\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">assets/</text><text x=\"498\" y=\"278\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">模板、图片、数据</text><path class=\"sv-sketch\" d=\"M330 224 H365 Q386 224 386 256 H469\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07o-arrow)\"/><rect class=\"sv-clean\" x=\"398\" y=\"240\" width=\"60\" height=\"29\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"428\" y=\"262\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">使用</text></g><g data-reveal=\"2\" class=\"map-external\"><text x=\"934\" y=\"142\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">边界之外</text><path class=\"sv-sketch\" d=\"M932 158 L1128 158 L1156 186 L1156 270 L930 270 Z M1128 158 V186 H1156\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"948\" y=\"191\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">另一份 Skill</text><text x=\"948\" y=\"223\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">自己的适用范围</text><text x=\"948\" y=\"250\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">与专项工作指导</text><path class=\"sv-sketch\" d=\"M175 284 V310 Q175 324 194 324 H1024 Q1043 324 1043 305 V278\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\" marker-end=\"url(#p07o-arrow)\"/><rect class=\"sv-clean\" x=\"512\" y=\"308\" width=\"180\" height=\"30\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"602\" y=\"330\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">引用专项指导</text></g><text x=\"0\" y=\"382\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">入口与核心方法先清楚，细节、程序与材料按需配套</text></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md\">game-playtest 固定版本 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://developers.openai.com/plugins/build/skills#add-supporting-resources\">OpenAI · 配套文件指南 ↗</a></div>",
      "steps": [
        "入口文件与核心指导",
        "三类配套文件及使用方式",
        "另一份 Skill 的边界与引用"
      ],
      "source": "index.html#p07o",
      "seconds": 120,
      "script": [
        "把刚才的试玩细节放到一边，我们现在看一份 Skill 的整体。Skill 把同类任务中可以反复使用的工作知识保存下来，让 AI 在需要时找到并使用。这里的知识既包括怎么做，也包括怎样判断、满足什么条件才这样做。\n\n入口是 SKILL.md。同一份文件里，name 和 description 帮助识别它、判断什么时候选用；下面的正文提供选用后的核心指导。比如试玩的共同流程、工具选择依据和报告要求，就属于正文要交代的工作方法。",
        "一份 Skill 可以只有这个入口文件；内容增加后，还可以按用途配上其他文件。注意图里的三条线，使用方式并不相同。\n\nReference 是要查阅的知识，补充细则、背景或长示例。脚本是要运行的程序，把明确的处理过程交给代码。素材是任务中要直接使用的对象，例如模板、图片和数据。它们分别回答“还需要知道什么”“哪些处理可以执行”“手上需要哪些材料”。\n\n这些文件配合正文完成同一类工作。拆出去的是细节或可复用的实现，正文仍要保留共同的方法，以及什么时候、从哪里取用它们。",
        "还有一种连接跨出了这份 Skill 的边界：引用另一份专项 Skill。刚才的前端指导就属于这种情况，它有自己的适用范围和工作方法。\n\n因此，补充本项工作的细则，可以放 Reference；形成了另一类工作的完整指导，可以单独组织成 Skill，再从需要它的地方引用。图中表示的是查阅关系，真正做了什么仍要看执行记录。\n\n这是一种组织示意。配套资料也可以放在共享目录中，关键是入口能找到它，且职责和使用条件清楚；并不是要求把所有文件都复制进同一个文件夹。"
      ]
    },
    {
      "id": "p07p",
      "title": "分开保存，也要把使用关系接清楚",
      "label": "分开保存，也要把使用关系接清楚",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "正文交代条件、入口、输入与使用方式、预期结果。Reference 补充知识，脚本完成明确处理，素材提供具体对象。表中基准图是组织示意；实际脚本来自任务 2，整理为可复用文件仍需保留运行条件。",
      "layout": "reading-slide resource-slide",
      "html": "<div class=\"resource-board\"><p class=\"connection-thesis\">正文保留核心方法，并交代配套文件的取用关系</p>\n<table class=\"resource-table contract-table\"><thead><tr><th>使用条件</th><th>文件入口</th><th>输入与使用方式</th><th>预期得到什么</th></tr></thead><tbody>\n<tr><td>需要检查恢复状态</td><td>试玩清单</td><td><span class=\"res-verb is-ctx\">查阅</span> 恢复细则</td><td>本次验收项目</td></tr>\n<tr data-reveal=\"1\"><td>反复执行重开验收</td><td>验收脚本</td><td><span class=\"res-verb is-tool\">运行</span> 游戏地址、依赖</td><td>预期与实际结果</td></tr>\n<tr data-reveal=\"1\"><td>核对界面改动</td><td>已确认的基准图</td><td><span class=\"res-verb is-ctx\">对照</span> 对应状态、视口</td><td>需要判断的视觉差异</td></tr>\n</tbody></table><p class=\"resource-caption\" data-reveal=\"1\">组织方式示意：本轮脚本已执行；基准图仍是拟议资源</p></div><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-b-script\">任务 2 · 实际脚本原文 · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://developers.openai.com/plugins/build/skills#add-supporting-resources\">OpenAI · 配套文件指南 ↗</a></div>",
      "steps": [
        "正文怎样连接配套文件",
        "查阅、运行与使用的区别"
      ],
      "source": "index.html#p07p",
      "seconds": 80,
      "script": [
        "所以，把文件拆开只是第一步，正文还要把它们接成可用的方法。每个重要入口都要让 AI 知道：遇到什么条件，去哪里找，怎样使用，以及希望得到什么。\n\n例如需要检查恢复状态时，沿正文找到试玩清单，查阅相应细则，再把它转成当前游戏的验收项目。只有路径而没有使用条件，AI 就缺少判断何时需要它的依据；只有“检查一下”而没有入口，又找不到具体做法。",
        "运行脚本，要给它可用的游戏页面和运行环境，得到的是检查结果；使用基准图，要先确认目标状态、视口和版本，得到的是一份可用于对照的具体材料。\n\n因此，正文、资料、脚本和素材可以各自保存，但使用关系不能断。正文保留决策与入口，配套文件承担细节、处理和材料。这样组织以后，核心方法容易读清，复杂任务也有继续展开的位置。"
      ]
    },
    {
      "id": "p07m",
      "title": "正文组织一项工作的判断与行动",
      "label": "正文组织一项工作的判断与行动",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "任务边界、工作方法、判断依据与交付要求是阅读工作指导的分析视角，不是强制栏目。setup-demo-app 围绕项目交付组织，game-playtest 还需处理不同游戏、工具条件和检查情形；结构由工作需要决定。",
      "layout": "reading-slide resource-slide",
      "html": "<div class=\"resource-board\"><div class=\"body-knowledge\"><section><h3>任务边界</h3><p>负责什么<br>需要哪些输入</p></section><section><h3>工作方法</h3><p>怎样推进<br>条件改变时怎样选</p></section><section><h3>判断依据</h3><p>怎样检查<br>何时需要修正</p></section><section><h3>交付要求</h3><p>要交出什么<br>以什么形式交付</p></section></div>\n<div class=\"body-examples\" data-reveal=\"1\"><p><code>setup-demo-app</code><span>交付规格、建项步骤、完成标准</span></p><p><code>game-playtest</code><span>试玩流程、工具条件、检查与报告</span></p></div>\n<p class=\"resource-caption\">围绕工作组织；不是要求每份正文设置四个固定栏目</p></div><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://developers.openai.com/blog/eval-skills#a-sample-skill\">setup-demo-app 官方原文 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md\">game-playtest 固定版本 ↗</a></div>",
      "steps": [
        "正文承担的四种作用",
        "两份示例怎样围绕工作组织"
      ],
      "source": "index.html#p07m",
      "seconds": 80,
      "script": [
        "回到正文内部，我们也可以用同一个问题来读：这些内容怎样帮助 AI 完成一类工作？\n\n任务边界说明这份指导负责什么、需要哪些输入。工作方法说明怎么推进，遇到什么条件怎样选择。判断依据让 AI 知道怎样检查和修正。交付要求说明最后应当把什么交给人。\n\n它们共同组织了一项工作的知识。具体标题可以不同，一段文字也可以同时承担几种作用，不必把这些名称都写成固定栏目。",
        "setup-demo-app 用交付要求、步骤和完成标准，组织了搭建演示项目这项工作。game-playtest 面对不同的游戏和检查条件，所以还需要交代工具选择、检查关注点、报告和补充入口。\n\n两份正文的结构不同，原因是工作需要不同。读懂 Skill，要看这些内容怎样支持任务中的判断和行动；写 Skill，也从这项工作需要的知识出发组织。"
      ]
    },
    {
      "id": "p07l",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "title": "不同写法，表达不同的工作知识",
      "label": "不同写法，表达不同的工作知识",
      "lead": "模板约定输出结构，示例展示具体程度，条件句限定何时采取行动。正文的表达方式按要支持的判断选择，内容较长时也可以单独引用。",
      "layout": "selection-slide reading-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07l-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"模板和示例怎样交代输出要求\"><defs><filter id=\"p07l-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07l-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"0\" y=\"28\" fill=\"#0b6b5f\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"\">模板</text><path class=\"sv-sketch\" d=\"M2 44 L484 44 L512 72 L512 294 L0 294 Z M484 44 V72 H512\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"24\" y=\"96\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">现象</text><path class=\"sv-clean\" d=\"M156 94 H472\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><text x=\"24\" y=\"144\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">复现步骤</text><path class=\"sv-clean\" d=\"M156 142 H472\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><text x=\"24\" y=\"192\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">影响</text><path class=\"sv-clean\" d=\"M156 190 H472\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><text x=\"24\" y=\"240\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">排查方向</text><path class=\"sv-clean\" d=\"M156 238 H472\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\"/><g data-reveal=\"1\"><text x=\"548\" y=\"28\" fill=\"#6e6043\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"\">示例 · 课程示意</text><path class=\"sv-sketch\" d=\"M550 44 L1132 44 L1160 72 L1160 294 L548 294 Z M1132 44 V72 H1160\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"572\" y=\"96\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">现象</text><text x=\"696\" y=\"96\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">页面步数没有增加</text><text x=\"572\" y=\"144\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">复现步骤</text><text x=\"696\" y=\"144\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">新开一局，翻开两张不配对的牌</text><text x=\"572\" y=\"192\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">影响</text><text x=\"696\" y=\"192\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">玩家看不到已用步数</text><text x=\"572\" y=\"240\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">排查方向</text><text x=\"696\" y=\"240\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">不配对时步数没有刷新</text></g><g data-reveal=\"2\"><rect class=\"sv-sketch\" x=\"0\" y=\"312\" width=\"1152\" height=\"44\" rx=\"6\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"24\" y=\"340\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">条件</text><text x=\"96\" y=\"340\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">canvas / WebGL</text><text x=\"360\" y=\"340\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">→</text><text x=\"396\" y=\"340\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">必须查看截图</text><text x=\"1132\" y=\"340\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"end\" font-weight=\"400\" class=\"\">条件 + 检查要求</text></g></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#reporting-standard\">报告要求原文 ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?run=mm-memory&amp;sample=cli&amp;line=79&amp;mark=step-count&amp;find=%E2%9C%98%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E5%90%8C%E6%A0%B7%E8%AE%A1%201%20%E6%AD%A5%20-%3E%201\">补充案例：步数刷新记录 ↗</a></div>",
      "steps": [
        "报告的空结构",
        "同一结构填入具体内容",
        "一句指导中的条件与要求"
      ],
      "script": [
        "同一项知识，还可以选择不同的表达方式。比如交付要求只写“报告要具体”，执行时仍然很模糊。用模板列出“现象、复现步骤、影响、排查方向”，就把需要交付的结构固定下来了。",
        "示例进一步说明填写到什么程度。这里把复现写成“新开一局，翻开两张不配对的牌”，把现象写成“页面步数没有增加”。下一次遇到别的问题，参考的是这种具体程度，实际内容仍要根据本次结果填写。\n\n模板提供结构，示例帮助理解标准。它们可以写在正文，也可以在内容较长时单独引用，放在哪里取决于什么时候需要读它。",
        "而“canvas 游戏必须看截图”这种写法，是用条件限定行动：遇到这类渲染方式，就采用相应的检查手段。\n\n步骤安排动作，条件表达选择，模板约定输出结构，示例说明具体程度。选哪种写法，要看希望让 AI 更清楚地做出哪项判断。"
      ],
      "source": "index.html#p07l",
      "seconds": 105
    },
    {
      "id": "p07q",
      "title": "同一套知识，按任务需要逐层取用",
      "label": "同一套知识，按任务需要逐层取用",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "在同一张结构图上观察识别与选用、核心指导、按需展开细节三个层次。本次请求提供具体目标与环境，Skill 提供可复用方法。三轮读取记录为不同任务路径提供证据，不证明任何任务都会自动打开全部文件。渐进披露服务于核心清楚与细节可取，500 行是篇幅建议。",
      "layout": "reading-slide resource-slide selection-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07q-rough)\" viewBox=\"0 0 1168 410\" role=\"img\" aria-label=\"同一套知识，按任务需要逐层取用\"><defs><filter id=\"p07q-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"450\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07q-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"0\" y=\"22\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">一份 Skill · 组织示意</text><rect class=\"sv-sketch\" x=\"0\" y=\"34\" width=\"850\" height=\"266\" rx=\"9\" fill=\"none\" stroke=\"#9c8b66\" stroke-width=\"2\" stroke-dasharray=\"7 6\"/><path class=\"sv-sketch\" d=\"M22 66 L302 66 L330 94 L330 284 L20 284 Z M302 66 V94 H330\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"94\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">SKILL.md</text><g class=\"map-meta\"><rect class=\"sv-clean\" x=\"36\" y=\"106\" width=\"278\" height=\"62\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"50\" y=\"127\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">name / description</text><text x=\"50\" y=\"158\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">识别身份与适用情境</text></g><g class=\"map-body\"><rect class=\"sv-clean\" x=\"36\" y=\"181\" width=\"278\" height=\"86\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"50\" y=\"202\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"700\" class=\"\">正文 · 核心工作指导</text><text x=\"50\" y=\"233\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">流程、规则与判断依据</text><text x=\"50\" y=\"264\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">按需取用的条件和入口</text></g><g class=\"map-resources\"><text x=\"480\" y=\"57\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">配套文件 · 按需提供</text><rect class=\"sv-sketch\" x=\"480\" y=\"70\" width=\"350\" height=\"60\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"498\" y=\"90\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">references/</text><text x=\"498\" y=\"122\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">细则、背景、长示例</text><path class=\"sv-sketch\" d=\"M330 224 H365 Q386 224 386 100 H469\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07q-arrow)\"/><rect class=\"sv-clean\" x=\"398\" y=\"84\" width=\"60\" height=\"29\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"428\" y=\"106\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">查阅</text><rect class=\"sv-sketch\" x=\"480\" y=\"148\" width=\"350\" height=\"60\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"498\" y=\"168\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">scripts/</text><text x=\"498\" y=\"200\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">可执行的处理过程</text><path class=\"sv-sketch\" d=\"M330 224 H365 Q386 224 386 178 H469\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07q-arrow)\"/><rect class=\"sv-clean\" x=\"398\" y=\"162\" width=\"60\" height=\"29\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"428\" y=\"184\" fill=\"#0b6b5f\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">运行</text><rect class=\"sv-sketch\" x=\"480\" y=\"226\" width=\"350\" height=\"60\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"498\" y=\"246\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">assets/</text><text x=\"498\" y=\"278\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">模板、图片、数据</text><path class=\"sv-sketch\" d=\"M330 224 H365 Q386 224 386 256 H469\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07q-arrow)\"/><rect class=\"sv-clean\" x=\"398\" y=\"240\" width=\"60\" height=\"29\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"428\" y=\"262\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">使用</text></g><g class=\"map-external\"><text x=\"934\" y=\"142\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">边界之外</text><path class=\"sv-sketch\" d=\"M932 158 L1128 158 L1156 186 L1156 270 L930 270 Z M1128 158 V186 H1156\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"948\" y=\"191\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">另一份 Skill</text><text x=\"948\" y=\"223\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">自己的适用范围</text><text x=\"948\" y=\"250\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">与专项工作指导</text><path class=\"sv-sketch\" d=\"M175 284 V310 Q175 324 194 324 H1024 Q1043 324 1043 305 V278\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"7 6\" marker-end=\"url(#p07q-arrow)\"/><rect class=\"sv-clean\" x=\"512\" y=\"308\" width=\"180\" height=\"30\" rx=\"7\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"602\" y=\"330\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">引用专项指导</text></g><g data-reveal=\"1\" class=\"phase-1\"></g><g data-reveal=\"2\" class=\"phase-2\"></g><g class=\"map-note-0\"><text x=\"0\" y=\"382\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">① 识别与选用：当前任务适合哪份指导？</text></g><g data-reveal=\"1\" class=\"map-note-1\"><text x=\"0\" y=\"382\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">② 核心指导 + 本次输入：决定这一次怎样做</text></g><g data-reveal=\"2\" class=\"map-note-2\"><text x=\"0\" y=\"382\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">③ 按任务展开细节 · 渐进披露</text><text x=\"1150\" y=\"382\" fill=\"#6e6043\" font-size=\"19\" text-anchor=\"end\" font-weight=\"400\" class=\"\">正文建议控制在 500 行以内</text></g></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-a\">任务 1 · 请求、输出与报告 · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-b\">任务 2 · 请求与读取 · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"http://127.0.0.1:4397/inspect/?topic=playtest-c\">任务 3 · 请求与读取 · Inspect ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://agentskills.io/specification#progressive-disclosure\">Agent Skills · 渐进披露 ↗</a></div>",
      "steps": [
        "识别身份与适用情境",
        "读取核心指导，结合本次输入",
        "按需展开资料、程序与材料"
      ],
      "source": "index.html#p07q",
      "seconds": 120,
      "script": [
        "现在把这些知识放回整张图，就能理解为什么要分层组织。第一层是名称和描述，让系统有机会识别这份指导，并判断它是否适合当前任务。此时并不需要把所有详细资料都放在面前。",
        "选用以后，读取正文，拿到这类工作的核心方法。本次请求仍然负责提供当前目标、规则和环境；正文提供可反复使用的流程与判断依据。二者结合，才能决定这一次具体怎样做。\n\n第一轮的提前通关检查，用到了正文的试玩和报告方法。它说明核心指导本身就能支持一项具体任务，不是每次都必须读完整套配套文件。",
        "任务需要更细的信息时，再沿入口展开。恢复验收需要清单细则，窄屏检查又补读了前端指导。脚本和素材则在适用时运行或使用。后两轮请求明确要求了这些查阅，记录告诉我们本次实际走了哪些路径。\n\n这种从识别、核心指导到按需细节的组织，就是渐进披露。它让核心方法保持清楚，同时给复杂任务留下深入的位置。规范建议正文控制在五百行以内，目的也是便于使用；判断是否拆分，仍要看知识的用途和使用时机。\n\n读懂一份 Skill，最终要能说清：它负责哪类工作，核心方法是什么，还会在什么条件下取用哪些知识、程序或材料。现在用这些方法，回看上一节留下的风格指导初稿。"
      ]
    },
    {
      "id": "p324c",
      "title": "再看你在 3.1 写下的指导",
      "label": "再看你在 3.1 写下的指导",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "lead": "从第一版想法，到可以使用和核对的指导。",
      "layout": "selection-slide reading-slide plugin-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p324c-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"再看你在 3.1 写下的指导\"><defs><filter id=\"p324c-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p324c-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"24\" y=\"54\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"\">什么时候用？</text><text x=\"580\" y=\"54\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"\">要求够具体吗？</text><text x=\"24\" y=\"102\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">说明适用任务与条件</text><text x=\"580\" y=\"102\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">把风格拆成可执行的要求</text><text x=\"24\" y=\"184\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"\">需要哪些参考？</text><text x=\"580\" y=\"184\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"\">怎样核对？</text><text x=\"24\" y=\"232\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">正文留入口，连接参考图与资源</text><text x=\"580\" y=\"232\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">确认实际读取，再检查游戏结果</text><path class=\"sv-sketch\" d=\"M24 270 H1144\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"24\" y=\"312\" fill=\"#0b6b5f\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"\">暂停修改初稿，保留前后两版</text><text x=\"24\" y=\"354\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">接下来：相关指导与资源，怎样一起提供给别人？</text></svg><div class=\"reading-actions\"></div>",
      "steps": [
        "审阅初稿，接到整包提供"
      ],
      "script": [
        "现在，请再打开上一节保存的初稿。没有写也没关系，可以从当时那三个问题开始：保留哪些特点，怎样写成指导，怎样检查。\n\n先看看它有没有说明什么时候用；“保持这种风格”有没有展开成具体要求；需要参考图、样式或其他文件的地方，有没有提供入口。最后想一想：你准备怎样确认 AI 用上了它，又怎样判断生成的游戏符合要求？\n\n可以暂停，修改一次，并保留前后两个版本。写完以后，先留住这个版本。我们接着看另一个问题：如果要把几份相关指导和配套资源一起提供给别人，又该怎样做？这就接到了 Plugin 的整包组织与分发。后面开发新游戏时，我们再检查风格要求实际保留了什么。"
      ],
      "source": "index.html#p324c",
      "seconds": 150
    },
    {
      "id": "p324a",
      "title": "Plugin 把相关能力作为一包提供",
      "label": "Plugin 把相关能力作为一包提供",
      "segment": "Plugin 组织与分发",
      "lead": "从按任务准备指导文件，到通过统一入口安装扩展包。",
      "layout": "selection-slide reading-slide plugin-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p324a-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"Plugin 把相关能力作为一包提供\"><defs><filter id=\"p324a-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p324a-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><g data-reveal=\"1\"><rect class=\"sv-sketch\" x=\"4\" y=\"6\" width=\"1152\" height=\"248\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"24\" y=\"38\" fill=\"#6e6043\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">Game Studio Plugin</text><text x=\"1132\" y=\"38\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"end\" font-weight=\"400\" class=\"\">统一身份 · 版本 · 组成声明</text></g><text x=\"28\" y=\"76\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">前面按任务准备的四份指导</text><rect class=\"sv-sketch\" x=\"28\" y=\"94\" width=\"318\" height=\"58\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"44\" y=\"129\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-playtest</text><rect class=\"sv-sketch\" x=\"370\" y=\"94\" width=\"318\" height=\"58\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"386\" y=\"129\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-ui-frontend</text><rect class=\"sv-sketch\" x=\"28\" y=\"166\" width=\"318\" height=\"58\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#b7ad97\" stroke-width=\"2\"/><text x=\"44\" y=\"201\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">web-game-foundations</text><rect class=\"sv-sketch\" x=\"370\" y=\"166\" width=\"318\" height=\"58\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#b7ad97\" stroke-width=\"2\"/><text x=\"386\" y=\"201\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">react-three-fiber-game</text><g data-reveal=\"1\"><path class=\"sv-clean\" d=\"M720 65 V232\" fill=\"none\" stroke=\"#b7ad97\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"752\" y=\"76\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">包内的其他代表指导</text><text x=\"752\" y=\"126\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-studio</text><text x=\"752\" y=\"170\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">phaser-2d-game</text><text x=\"752\" y=\"216\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">…及配套资料、脚本</text></g><g data-reveal=\"2\"><rect class=\"sv-sketch\" x=\"28\" y=\"274\" width=\"154\" height=\"48\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"105\" y=\"306\" fill=\"#243042\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">提供者</text><path class=\"sv-sketch\" d=\"M192 298 H258\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p324a-arrow)\"/><rect class=\"sv-sketch\" x=\"270\" y=\"274\" width=\"170\" height=\"48\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"355\" y=\"306\" fill=\"#0b6b5f\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">整包安装</text><path class=\"sv-sketch\" d=\"M450 298 H516\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p324a-arrow)\"/><rect class=\"sv-sketch\" x=\"528\" y=\"274\" width=\"154\" height=\"48\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#243042\" stroke-width=\"2\"/><text x=\"605\" y=\"306\" fill=\"#243042\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">使用者</text><path class=\"sv-sketch\" d=\"M692 298 H758\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p324a-arrow)\"/><rect class=\"sv-sketch\" x=\"770\" y=\"274\" width=\"256\" height=\"48\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"898\" y=\"306\" fill=\"#0b6b5f\" font-size=\"23\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">按任务选用 Skill</text><text x=\"28\" y=\"356\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">一份 Skill 也能打包；安装不代表包内所有指导都执行</text></g></svg><div class=\"reading-actions\"><a href=\"https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio\" target=\"_blank\" rel=\"noopener\">Game Studio 固定版本目录 ↗</a><a href=\"https://developers.openai.com/plugins/concepts/plugins\" target=\"_blank\" rel=\"noopener\">Plugin 架构 ↗</a></div>",
      "steps": [
        "已有四份指导",
        "完整包的身份与组成",
        "整包安装，按需选用"
      ],
      "script": [
        "先保留刚才的四份指导。试玩和界面是我们主要使用的，两份配套指导在需要时引用。一次准备多份文件，解决的是当前任务需要哪些指导的问题。要把一整组能力持续提供给别人，还需要让使用环境知道：这组东西是什么，包含什么，怎样安装。",
        "Game Studio 用 Plugin 来承担这一层。包里除了熟悉的指导，还有其他游戏开发 Skill；包的声明交代统一的名称、版本和组成。因此，Plugin 可以理解为一个可安装的扩展包，用来组织和分发相关能力。这里展示的是部分代表名称，并不是完整目录。",
        "沿这条关系看，提供者整理扩展包，使用者通过 Plugin 入口安装，再按当前任务选用其中的能力。例如，这次只要生成试玩清单，就使用 game-playtest。安装整包，并不意味着所有 Skill 都要执行；也不要求一定有很多份 Skill，一份指导同样可以打包。Game Studio 是以 Skill 为主的例子。为了理解 Plugin 还能提供什么，我们换一个假设的团队场景。"
      ],
      "source": "index.html#p324a",
      "seconds": 150
    },
    {
      "id": "p324b",
      "title": "Plugin 还可以提供工具接入与事件触发",
      "label": "Plugin 还可以提供工具接入与事件触发",
      "segment": "Plugin 组织与分发",
      "lead": "这是教学示意，不代表 Game Studio 包含 MCP 或 Hook。",
      "layout": "selection-slide reading-slide plugin-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p324b-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"Plugin 还可以提供工具接入与事件触发\"><defs><filter id=\"p324b-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p324b-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><rect class=\"sv-sketch\" x=\"4\" y=\"8\" width=\"812\" height=\"292\" rx=\"7\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"28\" y=\"43\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">团队游戏开发 Plugin</text><text x=\"790\" y=\"42\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"end\" font-weight=\"400\" class=\"\">教学假设 · 按用途选配</text><rect class=\"sv-sketch\" x=\"28\" y=\"65\" width=\"764\" height=\"58\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"48\" y=\"102\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"700\" class=\"\">Skill</text><text x=\"192\" y=\"102\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">试玩方法、报告要求</text><g data-reveal=\"1\"><rect class=\"sv-sketch\" x=\"28\" y=\"143\" width=\"764\" height=\"58\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"48\" y=\"180\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"700\" class=\"\">MCP</text><text x=\"192\" y=\"180\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">接入查询已有缺陷的工具</text><path class=\"sv-sketch\" d=\"M816 172 H888\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p324b-arrow)\"/><rect class=\"sv-sketch\" x=\"904\" y=\"132\" width=\"244\" height=\"80\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"1026\" y=\"165\" fill=\"#243042\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">团队缺陷库</text><text x=\"1026\" y=\"196\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">远端服务 · 包外</text></g><g data-reveal=\"2\"><rect class=\"sv-sketch\" x=\"28\" y=\"221\" width=\"764\" height=\"58\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"48\" y=\"258\" fill=\"#6e6043\" font-size=\"25\" text-anchor=\"start\" font-weight=\"700\" class=\"\">Hook</text><text x=\"192\" y=\"258\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">会话开始</text><path class=\"sv-sketch\" d=\"M308 250 H352\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p324b-arrow)\"/><text x=\"376\" y=\"258\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">环境检查脚本</text><text x=\"772\" y=\"258\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"end\" font-weight=\"400\" class=\"\">SessionStart</text><text x=\"28\" y=\"340\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">Hook：需宿主支持、脚本可用，并完成信任确认</text></g></svg><div class=\"reading-actions\"><a href=\"https://developers.openai.com/plugins/concepts/skills\" target=\"_blank\" rel=\"noopener\">Skill 与 MCP ↗</a><a href=\"https://developers.openai.com/plugins/build/plugins#bundled-mcp-servers-and-lifecycle-hooks\" target=\"_blank\" rel=\"noopener\">Hook 支持条件 ↗</a></div>",
      "steps": [
        "Skill 提供工作方法",
        "MCP 接入工具与服务",
        "Hook 按事件触发命令"
      ],
      "script": [
        "假设团队维护一个游戏开发 Plugin，其中的试玩 Skill 约定怎样检查游戏、怎样报告问题。现在写报告前，我们想查一下：团队的缺陷库里是不是已经有相同问题？指导可以告诉 AI 应该查什么，但要真正查询，还需要能访问缺陷库的工具。",
        "这里可以通过 MCP 服务把查询工具接进来。MCP 是连接工具和数据服务的一种标准方式。在这个例子里，Skill 交代工作方法，MCP 服务提供查询已有缺陷的操作。Plugin 可以把这两部分一起组织好，供使用者接入。图里的缺陷库仍然运行在包外；安装连接配置不等于把远端服务下载到本地，访问也仍需要相应的授权。",
        "还有一种需要：每次会话开始时，先检查游戏运行环境是否准备好。在支持的宿主中，可以为会话开始这个事件配置 Hook，由它触发环境检查脚本。这里画的 SessionStart 就是会话开始事件。\n\n如果只是把“先检查环境”写进 Skill，那是交给 AI 的工作指导；Hook 则根据事件配置触发命令。它能不能运行，要看宿主是否支持、脚本是否可用，以及定义是否经过信任确认。图中的三项分别提供工作方法、工具接入和事件触发，按用途选配，不需要每个 Plugin 都有。这三种作用在官方文档里也有对应说明。我们带着刚才的例子读一小段，以后遇到类似需求，就知道去哪里查。"
      ],
      "source": "index.html#p324b",
      "seconds": 150
    },
    {
      "id": "p07k",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "title": "按作用读懂正文里的具体指导",
      "label": "按作用读懂正文里的具体指导",
      "lead": "说明、要求、步骤、条件、检查点、输出要求与资料入口，分别解决工作中的问题。每项与已读的具体例子对应；按任务取舍，各类内容可以交叉出现。",
      "layout": "selection-slide reading-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07k-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"按作用读懂正文里的具体指导\"><defs><filter id=\"p07k-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07k-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"16\" y=\"28\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">正文里的作用</text><text x=\"188\" y=\"28\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">已读到的例子</text><text x=\"776\" y=\"28\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">原文位置</text><rect class=\"sv-clean\" x=\"0\" y=\"44\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#fffdf7\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"71\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">工作说明</text><text x=\"188\" y=\"71\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">从玩家实际体验出发</text><rect class=\"sv-clean\" x=\"696\" y=\"50\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"70\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">试玩</text><text x=\"776\" y=\"71\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Overview</text><rect class=\"sv-clean\" x=\"0\" y=\"88\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"115\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">具体要求</text><text x=\"188\" y=\"115\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">只用函数组件</text><rect class=\"sv-clean\" x=\"696\" y=\"94\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"114\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">建项</text><text x=\"776\" y=\"115\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">What to build</text><rect class=\"sv-clean\" x=\"0\" y=\"132\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#fffdf7\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"159\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">步骤</text><text x=\"188\" y=\"159\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">建项目 → 配置 → 实现界面</text><rect class=\"sv-clean\" x=\"696\" y=\"138\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"158\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">建项</text><text x=\"776\" y=\"159\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Steps</text><rect class=\"sv-clean\" x=\"0\" y=\"176\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"203\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">条件</text><text x=\"188\" y=\"203\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">canvas / WebGL → 查看截图</text><rect class=\"sv-clean\" x=\"696\" y=\"182\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"202\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">试玩</text><text x=\"776\" y=\"203\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Tooling Guidance</text><rect class=\"sv-clean\" x=\"0\" y=\"220\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#fffdf7\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"247\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">检查点</text><text x=\"188\" y=\"247\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">操作反馈、可见状态、不同视口</text><rect class=\"sv-clean\" x=\"696\" y=\"226\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"246\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">试玩</text><text x=\"776\" y=\"247\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Common Checks</text><rect class=\"sv-clean\" x=\"0\" y=\"264\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#f4f2eb\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"291\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">输出要求</text><text x=\"188\" y=\"291\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">现象、复现、影响、可能涉及的部分</text><rect class=\"sv-clean\" x=\"696\" y=\"270\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"290\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">试玩</text><text x=\"776\" y=\"291\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Reporting Standard</text><rect class=\"sv-clean\" x=\"0\" y=\"308\" width=\"1152\" height=\"40\" rx=\"0\" fill=\"#fffdf7\" stroke=\"none\" stroke-width=\"2\"/><text x=\"16\" y=\"335\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"700\" class=\"\">补充资料</text><text x=\"188\" y=\"335\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">正文给入口，详细资料另存</text><rect class=\"sv-clean\" x=\"696\" y=\"314\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#f2ede1\" stroke=\"none\" stroke-width=\"2\"/><text x=\"728\" y=\"334\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"400\" class=\"\">试玩</text><text x=\"776\" y=\"335\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">References</text></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://developers.openai.com/blog/eval-skills#a-sample-skill\">回看 setup-demo-app ↗</a><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md\">回看 game-playtest ↗</a></div>",
      "steps": [
        "按作用对应具体指导"
      ],
      "script": [
        "正文既可以安排工作步骤，也可以提供选择依据、检查要点和输出要求，帮助 AI 处理任务中的具体问题。内容按工作需要选择，可以交叉出现，不必凑齐固定栏目。"
      ],
      "source": "index.html#p07k",
      "seconds": 35
    },
    {
      "id": "p07n",
      "segment": "认识复杂 Skill 的资料、脚本与资源",
      "title": "按作用取舍内容，控制正文篇幅",
      "label": "按作用取舍内容，控制正文篇幅",
      "lead": "具体要求、条件和检查点有用就保留。重复口号没有检查对象和做法，画面上划去。大量专项资料按需引用，正文保留条件与入口。500 行以内是篇幅建议，不是失效界限。这里用前文读过的要求作取舍示意，没有修改上游 Skill。",
      "layout": "selection-slide reading-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07n-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"按作用取舍内容，控制正文篇幅\"><defs><filter id=\"p07n-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07n-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><rect class=\"sv-sketch\" x=\"0\" y=\"28\" width=\"360\" height=\"188\" rx=\"7\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"24\" y=\"64\" fill=\"#0b6b5f\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">具体有用</text><text x=\"24\" y=\"100\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">保留</text><text x=\"24\" y=\"144\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">canvas / WebGL 时查看截图</text><text x=\"24\" y=\"180\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">报告写明现象、复现、影响</text><rect class=\"sv-sketch\" x=\"388\" y=\"28\" width=\"360\" height=\"188\" rx=\"7\" fill=\"#fce6dd\" stroke=\"#ac3615\" stroke-width=\"2\"/><text x=\"412\" y=\"64\" fill=\"#ac3615\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">避免重复</text><text x=\"412\" y=\"100\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">精简</text><text x=\"412\" y=\"144\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">认真检查，保证质量</text><path class=\"sv-sketch\" d=\"M408 130 L624 148\" fill=\"none\" stroke=\"#ac3615\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"412\" y=\"180\" fill=\"#ac3615\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">没有检查对象和做法</text><rect class=\"sv-sketch\" x=\"776\" y=\"28\" width=\"360\" height=\"188\" rx=\"7\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"800\" y=\"64\" fill=\"#6e6043\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">详细资料按需引用</text><text x=\"800\" y=\"100\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">正文留条件和入口</text><text x=\"800\" y=\"144\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">完整检查清单</text><text x=\"800\" y=\"180\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">专项调试知识</text><text x=\"0\" y=\"264\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"\">500 行：篇幅建议</text><text x=\"292\" y=\"264\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">不是失效界限</text><text x=\"0\" y=\"304\" fill=\"#6e6043\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">未改上游 Skill</text></svg><div class=\"reading-actions\"><a target=\"_blank\" rel=\"noopener\" href=\"https://agentskills.io/specification#body-content\">正文与篇幅建议 ↗</a></div>",
      "steps": [
        "具体内容的保留、精简与引用"
      ],
      "script": [
        "篇幅取舍也看内容是否有用：保留具体做法和判断依据，精简重复和泛泛建议，较长资料可以另外引用。正文一般建议控制在 500 行以内，这是篇幅建议，不是失效界限。\n\n接下来看看正文引用的资料，以及脚本和资源，怎样配合这份指导使用。"
      ],
      "source": "index.html#p07n",
      "seconds": 35
    },
    {
      "id": "p07e",
      "segment": "正文与复用",
      "title": "正文留下会影响行动的指导",
      "label": "正文留下会影响行动的指导",
      "lead": "正文保留每次开展任务都需要的目的、输入、关键做法、条件与例外、输出和检查要求。刚才的默认技术路线、工作步骤和检查计划结构都属于会改变行动的指导。只在特定情况需要的长例子或详细规则可以放入 Reference，但正文必须交代读取条件与路径。没有增加具体要求的重复口号可以删除。长度取决于任务需要，不把行数说成产品硬上限，也不为缩短而删掉关键条件。",
      "layout": "authoring-slide skill-visual-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07e-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"正文保留输入输出指导，长例子移至 Reference 并保留读取入口，删除重复口号\"><defs><filter id=\"p07e-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07e-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><path class=\"sv-sketch\" d=\"M282 4 L732 4 L760 32 L760 325 L280 325 Z M732 4 V32 H760\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"309\" y=\"45\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">SKILL.md</text><path class=\"sv-clean\" d=\"M310 61 H728\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect class=\"sv-sketch\" x=\"304\" y=\"80\" width=\"431\" height=\"99\" rx=\"5\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\"/><text x=\"319\" y=\"114\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">输入不足时，先询问规则</text><text x=\"319\" y=\"151\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">每项检查：状态、操作、可见结果</text><text x=\"0\" y=\"112\" fill=\"#0b6b5f\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">每次都需要</text><path class=\"sv-sketch\" d=\"M170 105 H260\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07e-arrow)\"/><text x=\"0\" y=\"151\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">会改变下一步行动</text><g data-reveal=\"1\"><path class=\"sv-sketch\" d=\"M870 4 L1124 4 L1152 32 L1152 189 L868 189 Z M1124 4 V32 H1152\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"889\" y=\"43\" fill=\"#6e6043\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Reference</text><text x=\"889\" y=\"91\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">只在特定情境读</text><path class=\"sv-sketch\" d=\"M774 221 H828 V112 H856\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07e-arrow)\"/><text x=\"307\" y=\"228\" fill=\"#0b6b5f\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">遇到翻牌任务时，读取指定资料</text><path class=\"sv-sketch\" d=\"M323 267 H690\" fill=\"none\" stroke=\"#ac3615\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"320\" y=\"277\" fill=\"#6e6043\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">认真检查，保证质量</text><text x=\"884\" y=\"288\" fill=\"#ac3615\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">删除重复口号</text><path class=\"sv-sketch\" d=\"M737 268 H854\" fill=\"none\" stroke=\"#ac3615\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07e-arrow)\"/></g><g class=\"sv-moving-example\"><rect class=\"sv-sketch\" x=\"305\" y=\"199\" width=\"244\" height=\"43\" rx=\"3\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\"/><text x=\"319\" y=\"228\" fill=\"#6e6043\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">较长的翻牌例子</text></g><g data-reveal=\"2\"><text x=\"0\" y=\"361\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"700\" class=\"\">长度由任务需要决定；输入分支等关键条件始终保留</text></g></svg><div class=\"authoring-actions\"><a href=\"authoring-evidence.html#core\" target=\"_blank\" rel=\"noopener\">正文取舍的归纳样稿 ↗</a><a href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-studio/SKILL.md\" target=\"_blank\" rel=\"noopener\">game-studio 原文件 ↗</a></div>",
      "steps": [
        "保留必要指导",
        "按需引用，删除重复",
        "按用途控制长度"
      ],
      "script": [
        "【操作提示｜第 6 页第 1 步；先看正文中的输入与输出要求。】\n\n回头看正文取舍。像刚才“每项检查写出前置状态、操作和可见结果”，每次写计划都需要，应留在正文。输入不足时怎么办，也会改变它接下来的动作，不能藏在没有读取入口的资料里。",
        "【操作提示｜第 6 页第 2 步；展开可移入资料的内容与删除项。】\n\n只有翻牌才需要的长例子，可以放进 Reference，在正文说明什么时候读。反复写“认真检查、保证质量”，却没补检查对象和做法，就可以删去。",
        "【操作提示｜第 6 页第 3 步；收束正文长度的判断，再进入下一页。】\n\n正文不设统一行数。比如删掉输入不足时的处理，文件是短了，模型却不知道何时该停下来。先保住这些必要做法，再考虑压缩和引用。"
      ],
      "source": "index.html#p07e",
      "seconds": 90
    },
    {
      "id": "p07f",
      "segment": "正文与复用",
      "title": "资料与独立工作怎样分工",
      "label": "资料与独立工作怎样分工",
      "lead": "详细例子和选型条件作为 Reference，多个 Skill 可以共同引用一份资料。能独立交代输入和产出的界面调整或试玩工作，可以组织为另一份 Skill。脚本承担重复计算和确定的文件处理，素材提供模板或待处理输入；入口需要说明使用条件、路径和输入输出，实际执行仍依赖工具与环境。引用关系不等于必然调用，也不表示启动子 Agent。下一个检查计划示例从单个 SKILL.md 开始，有实际需要时再增加资源。",
      "layout": "authoring-slide skill-visual-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07f-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"两份 Skill 共用一个选型文件；独立界面工作有自己的输入、方法和交付要求\"><defs><filter id=\"p07f-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07f-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"0\" y=\"32\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">共享知识</text><path class=\"sv-sketch\" d=\"M185 1 L441 1 L469 29 L469 69 L183 69 Z M441 1 V29 H469\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"201\" y=\"44\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-studio</text><path class=\"sv-sketch\" d=\"M185 91 L441 91 L469 119 L469 159 L183 159 Z M441 91 V119 H469\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"201\" y=\"134\" fill=\"#243042\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">web-game-foundations</text><path class=\"sv-sketch\" d=\"M481 35 H543 V80 H641\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07f-arrow)\"/><path class=\"sv-sketch\" d=\"M481 125 H543 V80\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-sketch\" d=\"M661 1 L1126 1 L1154 29 L1154 156 L659 156 Z M1126 1 V29 H1154\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"680\" y=\"45\" fill=\"#6e6043\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">engine-selection.md</text><text x=\"680\" y=\"88\" fill=\"#243042\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"\">同一份选型依据</text><text x=\"680\" y=\"127\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">更新时，只维护这一个文件</text><path class=\"sv-clean\" d=\"M0 184 H1160\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"0\" y=\"225\" fill=\"#243042\" font-size=\"29\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">独立工作</text><text x=\"183\" y=\"224\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">当前游戏与需求</text><text x=\"183\" y=\"257\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">需要做界面设计</text><path class=\"sv-sketch\" d=\"M401 235 H477\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07f-arrow)\"/><path class=\"sv-sketch\" d=\"M497 201 L787 201 L815 229 L815 297 L495 297 Z M787 201 V229 H815\" fill=\"#edebfb\" stroke=\"#5a51d1\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"516\" y=\"240\" fill=\"#5a51d1\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-ui-frontend</text><text x=\"516\" y=\"278\" fill=\"#5a51d1\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">一项完整工作的指导</text><path class=\"sv-sketch\" d=\"M831 248 H904\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07f-arrow)\"/><text x=\"930\" y=\"233\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">布局、交互</text><text x=\"930\" y=\"265\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">与检查标准</text><g data-reveal=\"1\"><text x=\"0\" y=\"350\" fill=\"#0b6b5f\" font-size=\"23\" text-anchor=\"start\" font-weight=\"700\" class=\"\">配套脚本</text><text x=\"126\" y=\"350\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">重复计算、确定的文件处理</text><text x=\"650\" y=\"350\" fill=\"#6e6043\" font-size=\"23\" text-anchor=\"start\" font-weight=\"700\" class=\"\">素材</text><text x=\"720\" y=\"350\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">模板、待处理图片</text></g></svg><p class=\"sv-boundary\" data-reveal=\"2\">手动检查计划先从一个 SKILL.md 开始，有具体需要再增加资源</p><div class=\"authoring-actions\"><a href=\"authoring-evidence.html#sharing\" target=\"_blank\" rel=\"noopener\">两个入口引用同一份资料 ↗</a><a href=\"authoring-evidence.html#create\" target=\"_blank\" rel=\"noopener\">单文件编写顺序演示 ↗</a></div>",
      "steps": [
        "共享资料与专项工作",
        "配套脚本与素材",
        "从单文件开始"
      ],
      "script": [
        "【操作提示｜第 7 页第 1 步；对照共享一个文件与复用一项独立工作。】\n\n再看拆分。两份 Skill 需要同一组选型条件，就像刚才一样共用资料；要承担一次完整的界面调整或试玩，有自己的输入和交付物，才适合另写 Skill。不是内容一长，就一律拆成新的 Skill。",
        "【操作提示｜第 7 页第 2 步；展开脚本和素材的职责。】\n\n重复计算或固定的文件处理，可以配脚本交给工具执行；已有模板、待处理图片则作为素材。入口要交代用途、条件和输入输出，有这项需要再配这些文件。",
        "【操作提示｜第 7 页第 3 步；讲完另开“单文件编写顺序演示”，从空目录开始。】\n\n我们自己写一份时，先选一项明确任务：把小游戏规则整理成人能照着做的手动检查计划。这件事先用一个 SKILL.md，就可以开始。"
      ],
      "source": "index.html#p07f",
      "seconds": 90
    },
    {
      "id": "p07g",
      "segment": "学习检查",
      "title": "例子变长、标准共用时怎样安排",
      "label": "例子变长、标准共用时怎样安排",
      "lead": "先暂停判断两种情况：翻牌例子变长，哪些内容仍留在正文；另一份 Skill 也需要相同标准，是否复制一份。通用检查方法继续留在正文，较长案例可以移入按需引用的文件，并交代何时读取及如何按当前规则调整。共享标准维护一份、分别引用。只有出现可独立开展的任务时，才考虑拆成另一份 Skill。画面中的扩展路径是课程拟写示例，当前最小 Skill 仍只有一个文件，未实测扩展后的读取。",
      "layout": "authoring-slide skill-visual-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07g-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"长例子放入按需资料并保留引用；两个 Skill 共用一份标准，拟写路径未创建\"><defs><filter id=\"p07g-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07g-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><text x=\"0\" y=\"30\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">翻牌例子变长了，怎样安排？</text><text x=\"615\" y=\"30\" fill=\"#243042\" font-size=\"28\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">另一份 Skill 也要用同一标准？</text><path class=\"sv-clean\" d=\"M580 0 V351\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-sketch\" d=\"M2 74 L193 74 L221 102 L221 274 L0 274 Z M193 74 V102 H221\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"20\" y=\"112\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">SKILL.md</text><text x=\"20\" y=\"153\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">输入分支</text><text x=\"20\" y=\"191\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">通用检查方法</text><g class=\"sv-question-example\"><text x=\"20\" y=\"229\" fill=\"#243042\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">越来越长的例子…</text></g><g data-reveal=\"1\"><text x=\"20\" y=\"229\" fill=\"#0b6b5f\" font-size=\"20\" text-anchor=\"start\" font-weight=\"400\" class=\"\">翻牌时读取资料</text></g><g data-reveal=\"1\"><path class=\"sv-sketch\" d=\"M236 197 H292\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07g-arrow)\"/><path class=\"sv-sketch\" d=\"M310 132 L516 132 L544 160 L544 276 L308 276 Z M516 132 V160 H544\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"326\" y=\"171\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">Reference</text><text x=\"326\" y=\"208\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">翻牌的长例子</text><text x=\"0\" y=\"318\" fill=\"#0b6b5f\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">正文留下条件和路径</text><text x=\"0\" y=\"352\" fill=\"#6e6043\" font-size=\"19\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">拟写 references/memory-cases.md</text></g><path class=\"sv-sketch\" d=\"M618 74 L798 74 L826 102 L826 146 L616 146 Z M798 74 V102 H826\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"635\" y=\"119\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Skill A</text><path class=\"sv-sketch\" d=\"M618 210 L798 210 L826 238 L826 282 L616 282 Z M798 210 V238 H826\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"635\" y=\"255\" fill=\"#243042\" font-size=\"26\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Skill B</text><g data-reveal=\"2\"><path class=\"sv-sketch\" d=\"M841 110 H873 V179 H908\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07g-arrow)\"/><path class=\"sv-sketch\" d=\"M841 245 H873 V179\" fill=\"none\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path class=\"sv-sketch\" d=\"M928 114 L1124 114 L1152 142 L1152 256 L926 256 Z M1124 114 V142 H1152\" fill=\"#f2ede1\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"945\" y=\"158\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">同一份标准</text><text x=\"945\" y=\"200\" fill=\"#243042\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">维护一处</text><text x=\"616\" y=\"318\" fill=\"#0b6b5f\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">各自引用，避免复制后分别修改</text><text x=\"616\" y=\"352\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"\">独立工作才另写 Skill</text></g></svg><div class=\"authoring-actions\"><a href=\"authoring-evidence.html#check\" target=\"_blank\" rel=\"noopener\">两个迁移情境与解析样稿 ↗</a><a href=\"../../materials/skill-authoring-20261107/example/game-check-plan/SKILL.md\" target=\"_blank\" rel=\"noopener\">当前最小 SKILL.md ↗</a></div>",
      "steps": [
        "暂停判断两个情境",
        "展开长例子的处理",
        "展开共用标准的处理"
      ],
      "script": [
        "【操作提示｜第 8 页第 1 步；先显示两个问题，留出暂停判断的时间。】\n\n最后想两个扩展情境：翻牌例子越积越多，哪些移出去，哪些仍留正文？另一份 Skill 也要用相同检查标准，是复制还是共用？可以暂停，先说出安排和理由。",
        "【操作提示｜第 8 页第 2 步；展开长例子与正文的分工，说明路径为拟写。】\n\n长的翻牌例子可以放进 references/memory-cases.md，正文留下通用方法，并注明遇到翻牌任务时读取、按当前规则选用。这个路径是拟写示例，还没有创建和实跑。",
        "【操作提示｜第 8 页第 3 步；展开共享标准，再进入收尾页。】\n\n共用标准就维护一份，各自引用，更新时不用改两处。只有要独立承担另一项工作，才另写 Skill，说明它的输入和交付物。"
      ],
      "source": "index.html#p07g",
      "seconds": 90
    },
    {
      "id": "p07h",
      "segment": "学习检查",
      "title": "把读、改、写接到下一轮开发",
      "label": "把读、改、写接到下一轮开发",
      "lead": "本节留下两项具体产物：已有 game-studio 的一处输出要求修改，以及课程自写的单文件 game-check-plan。修改项用相同请求核对读取与返回；最小文件用完整翻牌规则、缺失规则和躲避规则三类输入检查，并据实际问题修订。发现、读取、按要求输出和内容正确需要分别核对，检查计划还需实际执行。内容扩展时按用途判断留在正文、作为资料或拆成独立工作。下一节回到躲避游戏开发，观察指导怎样落实到方案、代码与检查。",
      "layout": "authoring-slide skill-visual-slide",
      "html": "<svg class=\"skill-visual\" style=\"--sv-rough:url(#p07h-rough)\" viewBox=\"0 0 1168 370\" role=\"img\" aria-label=\"已有输出要求修改与自写单文件，两项产物的实际调用核对及下一节开发任务\"><defs><filter id=\"p07h-rough\" filterUnits=\"userSpaceOnUse\" x=\"-20\" y=\"-20\" width=\"1208\" height=\"410\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".03\" numOctaves=\"2\" seed=\"7\"/><feDisplacementMap in=\"SourceGraphic\" scale=\"3\"/></filter><marker id=\"p07h-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0 0 L8 4 L0 8 Z\" fill=\"context-stroke\"/></marker></defs><path class=\"sv-sketch\" d=\"M2 0 L507 0 L535 28 L535 227 L0 227 Z M507 0 V28 H535\" fill=\"#fffdf7\" stroke=\"#6e6043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"26\" y=\"43\" fill=\"#243042\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">game-studio · 一处输出要求修改</text><text x=\"26\" y=\"83\" fill=\"#6e6043\" font-size=\"22\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">Output Expectations</text><text x=\"26\" y=\"125\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"\">+ 前置状态</text><text x=\"196\" y=\"125\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"\">用户操作</text><text x=\"350\" y=\"125\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"\">可见结果</text><path class=\"sv-sketch\" d=\"M26 146 H506\" fill=\"none\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"26\" y=\"183\" fill=\"#243042\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">同一个请求，核对新版读取与返回</text><text x=\"26\" y=\"214\" fill=\"#243042\" font-size=\"21\" text-anchor=\"start\" font-weight=\"400\" class=\"\">新增要求采用了，方案内容仍需审阅</text><path class=\"sv-sketch\" d=\"M598 0 L1128 0 L1156 28 L1156 227 L596 227 Z M1128 0 V28 H1156\" fill=\"#e0f3ef\" stroke=\"#0b6b5f\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"621\" y=\"43\" fill=\"#0b6b5f\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-code\">game-check-plan / SKILL.md</text><text x=\"621\" y=\"84\" fill=\"#243042\" font-size=\"25\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">从零写出的最小文件</text><text x=\"621\" y=\"125\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">完整规则：生成计划</text><text x=\"621\" y=\"160\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">缺少规则：只提问</text><text x=\"621\" y=\"195\" fill=\"#243042\" font-size=\"23\" text-anchor=\"start\" font-weight=\"400\" class=\"\">换成躲避：按本次玩法写</text><text x=\"0\" y=\"274\" fill=\"#6e6043\" font-size=\"24\" text-anchor=\"start\" font-weight=\"400\" class=\"\">两项产物都已调用核对；计划中的游戏检查尚未执行</text><g data-reveal=\"1\"><path class=\"sv-sketch\" d=\"M0 311 H1160\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"0\" y=\"353\" fill=\"#243042\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"sv-hand\">下一节</text><text x=\"155\" y=\"353\" fill=\"#243042\" font-size=\"31\" text-anchor=\"start\" font-weight=\"400\" class=\"\">用指导开发躲避游戏</text><path class=\"sv-sketch\" d=\"M496 343 H577\" fill=\"none\" stroke=\"#243042\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-end=\"url(#p07h-arrow)\"/><text x=\"609\" y=\"353\" fill=\"#243042\" font-size=\"27\" text-anchor=\"start\" font-weight=\"400\" class=\"\">方案怎样落实为代码与检查？</text></g></svg><div class=\"authoring-actions\"><a href=\"authoring-evidence.html#change\" target=\"_blank\" rel=\"noopener\">单项修改与相同请求 ↗</a><a href=\"../../materials/skill-authoring-20261107/example/game-check-plan/SKILL.md\" target=\"_blank\" rel=\"noopener\">当前最小 SKILL.md ↗</a><a href=\"authoring-evidence.html#transfer\" target=\"_blank\" rel=\"noopener\">v3 躲避请求、读取与完整返回 ↗</a></div>",
      "steps": [
        "回看修改与最小文件",
        "承接下一轮开发"
      ],
      "script": [
        "【操作提示｜第 9 页第 1 步；回看两项产物及其核对方法。】\n\n以后拿到一份 Skill，可以像今天这样，从一项实际决定追到正文，分清通用做法、当前需求和模型补充。要修改时，先找到负责这项行为的要求，改完确认实际读到了新版，再看结果是否解决原来的问题。",
        "【操作提示｜第 9 页第 2 步；收束拆分判断，进入 3.3。】\n\n自己写一份，也从明确任务和成功标准开始，用完整、缺失和另一玩法的输入检查。需要共用知识时引用资料，需要另一项完整工作时再复用专项 Skill。今天形成的是规划要求的修改和一份手动检查计划 Skill；计划还没有实际执行。下一节把这些指导放回游戏开发，看它们怎样落实到代码和实际检查。\n"
      ],
      "source": "index.html#p07h",
      "seconds": 60
    },
    {
      "id": "p08",
      "segment": "认识 Skill",
      "title": "读懂一份 Skill",
      "lead": "一份 Skill 以 SKILL.md 为入口：名称与描述帮助判断用途，正文提供具体方法，引用连接配套资源或其他专项 Skill。使用时，模型先取得可用 Skill 的名称与描述，选用后加载完整指导，相关资料按需要继续读取；引用存在不等于已经读取。本例的技术选择包含默认路线与例外，工作流程从玩家动作和游戏循环推进到技术、界面、素材与试玩，输出要求把这些考虑落实为当前游戏的方案。通过选型资料、专项试玩指导、第一节截图发现牌面错误的记录，以及一次保存的规划回复，理解通用指导怎样与具体任务结合。规划实录采用项目内文件显式读取，不能证明自动发现或安装，也未执行方案中的开发和检查。",
      "label": "读懂一份 Skill",
      "html": "<style>#p08 .p-box{padding:8px 16px}#p08 .p-box h3{font-size:24px;margin:0 0 4px}#p08 .p-box p{font-size:21px;line-height:1.4;margin:0}#p08 .source-entries{font-size:19px;line-height:1.5;margin:8px 0 0}</style><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>1 · 一份 Skill 由什么组成？</h3><p>名称与描述：任务范围与适用情境<br>正文：选择依据、工作步骤、输出要求<br>引用：配套资料与独立的专项 Skill</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>2 · Agent 什么时候读到这些内容？</h3><p>名称与描述先供选择<br>选用后加载完整指导<br>相关资源按需读取（渐进加载）</p></div></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><h3>3 · 正文里的指导具体怎样起作用？</h3><p>技术选择：默认路线与例外条件<br>开发流程：玩家动作与循环 → 技术、界面、素材 → 试玩与交付</p></div><p class=\"source-entries\">原文：<a href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-studio/SKILL.md\" target=\"_blank\" rel=\"noopener\">game-studio / SKILL.md</a> · <a href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/engine-selection.md\" target=\"_blank\" rel=\"noopener\">技术选型</a> · <a href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md\" target=\"_blank\" rel=\"noopener\">game-playtest</a><br>实际材料：<a href=\"http://127.0.0.1:4397/inspect/?run=mm-memory&amp;sample=cli&amp;line=86\" target=\"_blank\" rel=\"noopener\">05 号截图检查原始记录</a> · <a href=\"skill-reading-trial.html#s01\" target=\"_blank\" rel=\"noopener\">规划小任务</a></p>",
      "steps": [
        "一份 Skill 由什么组成",
        "Agent 什么时候读到内容",
        "正文指导怎样用于具体任务"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步；先指认 Game Studio 插件中包含多份 Skill 的关系，再从入口打开 game-studio/SKILL.md 原文】\n\n第一节的翻牌游戏做下来，我们已经见过几类事情：用什么技术实现，规则和页面怎样配合，做完以后怎样检查。比如，步数在规则模块里已经增加了，页面却没有刷新；检查说牌是关着的，实际画面却把图案露了出来。这些具体问题，正好可以帮助我们理解别人写下的开发指导。\n\n我们来看 Game Studio。它把游戏开发用到的多份 Skill 和配套资料，以 Plugin的形式打包在一起，方便安装和使用。每份 Skill 提供一类任务的指导，比如前期规划、游戏实现或试玩检查。\n\n这里先看负责前期规划的 game-studio 这份 Skill。它和插件同名，只是插件中的一份。我们用它来学习一份 Skill 应该写哪些内容、为什么这样组织；遇到它引用的具体做法，再拿第一节的经历来理解。\n\n【操作提示｜p08 第 1 步：一份 Skill 由什么组成；打开 game-studio/SKILL.md，先看文件头，再滚动总览正文与 References，不逐行讲解】\n\n一份 Skill 通常会把简短的介绍和具体做法分开写。最上面的 name 和 description 是名称和描述，让 AI 先知道它叫什么、适合做什么。下面的正文才详细说明怎么做，需要其他资料时，再给出对应的文件路径。\n\n这份 Skill 叫 game-studio。描述里说，它负责浏览器游戏前期的技术选择和工作规划，要一起考虑实现、界面、素材和试玩。方向确定以后，再使用更专门的 Skill。\n\n第一节刚开始，我们只说要做翻牌游戏，还没确定用什么技术、界面怎么做、做完怎么检查，就适合用这份规划指导。如果游戏已经做完，只想检查一个按钮，直接用试玩指导更合适。描述里把这些情况写清楚，AI 才好判断要不要选用它。只写“帮助开发游戏”，范围就太宽了。\n\n【操作提示｜在原文件中按顺序指认 Overview、适用与转交条件、Routing Rules、Default Workflow、Output Expectations，最后停留 References】\n\n正文先推荐了一套默认的技术方案，再说明什么情况下用这份 Skill、什么时候改用其他 Skill。后面写了工作流程，以及最后要交出什么。\n\n比如，工作流程要求先明确玩家能做什么、游戏怎样反复进行，再考虑技术、界面、素材与试玩。我们只说“做一个翻牌游戏”，AI 还需要作这些决定，这份 Skill 就给它提供了一套做法。\n\nReferences 里列着配套资料。比如技术选型的详细说明在 engine-selection.md，顺着这个相对路径就能找到。正文也引用了 game-playtest 等专项 Skill。它们各有自己的 SKILL.md，里面写的是试玩等具体任务该怎么做。\n\n刚才的界面 Skill，指导完成一项界面工作；选型资料则提供作技术决定时要查的条件。复用一项工作和共用一份知识，解决的是两种需要。\n\n这些内容都放在文件里，Agent 会一开始就把它们全部读进去吗？",
        "【操作提示｜回课件 p08 第 2 步：Agent 什么时候读到这些内容；指认名称与描述、完整指导、相关资源三层关系，再返回原文文件头与引用位置】\n\n假如我们装了很多份 Skill，每次都把所有正文和资料放进上下文，就会带进大量用不到的内容。所以，Skill 会按需要逐步加载。\n\n模型先看到可用 Skill 的名称和描述，根据当前任务判断要不要用。我们也可以在请求里直接指定。比如，模型从描述里知道 game-studio 适合游戏前期规划，但这时还没读到它具体推荐什么技术、怎么安排开发。\n\n选用之后，才加载 SKILL.md 的完整指导，读到默认路线、工作流程、转交条件和输出要求。这也解释了为什么适用情境要放在描述里：模型先看描述，才决定要不要继续读正文。\n\n读到正文中的引用，也不需要把列出的资料全读一遍。比如这里默认推荐二维游戏用 Phaser。如果还要判断它为什么适合当前游戏，就沿路径读取技术选型资料。引用除了给出路径，也要说清楚那份资料是做什么的，AI 才知道什么时候需要读。\n\n这次先读入口，再读相关专项指导和资料，就是按任务需要逐步取得内容。完整规划涉及几方面工作，一次可能读好几份；只处理一项任务，就不必把整套资料全读一遍。\n\n备课时，我们让 AI 用这份 Skill 做过一次翻牌规划。记录里，它先读 SKILL.md，再分批读选型、架构、界面和试玩等文件。那次文件预先放在项目里，请求也明确指定了 Skill，展示的是指定以后怎样继续读取资料。\n\n【操作提示｜保持原文标签页，回到 Overview；切入 p08 第 3 步：正文里的指导具体怎样起作用】\n\n完整指导读进来以后，会给 AI 提供哪些具体做法？我们从技术选择开始看。",
        "【操作提示｜p08 第 3 步；浏览器定位 Overview 中二维默认路线，继续沿原文件进入适用与转交条件；技术选型处按提示选读】\n\nOverview 这里明确写着，默认采用二维 Phaser 路线。Phaser 是游戏框架，提供场景、图片和动画等常用能力。刚才返回说采用默认方案，对应的就是这项要求。\n\n第一节的翻牌用原生 HTML、CSS 和 JavaScript，也做出了翻牌、配对和重开。这里推荐 Phaser，是作者为这套游戏开发指导选定的默认方案。如果我们是在已有项目上继续开发，还得把项目原来的技术要求告诉 AI。\n\n那什么情况下适合用 Phaser？入口引用的选型资料里，给了更详细的条件。\n\n【操作提示｜在入口文件的 References 指认 ../../references/engine-selection.md；回课件 p08，打开“技术选型资料”，定位 Phaser is the best fit when，只读与二维小游戏有关的条件】\n\n这里提到，游戏以二维图片或地图为主，需要场景、摄像机等现成能力时，比较适合用 Phaser。入口先给默认建议，资料再解释选择条件，我们就可以结合自己的项目判断。\n\n【切换｜浏览器 · 返回 game-studio/SKILL.md 的 Use This Skill When、Do Not Stay Here When 和 Routing Rules】\n\n技术方向确定后，实现和试玩还各有具体做法，Routing Rules 给出了对应 Skill 的路径。入口把这些工作联系起来，不在一个文件里写完所有细节。\n\n所以，用之前要看当前缺什么。还没想清整个游戏怎么做，就先规划；如果游戏已有实现，只剩试玩，就直接选试玩指导。已有项目规定了技术，也应把要求交代清楚，不能只照默认建议另选一套。\n\n【操作提示｜在同一文件定位 Default Workflow，依次指认玩家动作、游戏循环与结束条件两项】\n\nDefault Workflow 先要求明确玩家动作、游戏怎样循环，以及什么时候结束。程序要记录什么、界面要显示什么，都得由这些规则决定。\n\n拿第一节的翻牌来说，玩家先翻一张，再翻一张；相同就保留，不同就等一会儿盖回去；所有图案配对完成，这一局结束。把这些说清楚，后面才知道程序要记住哪两张牌已经翻开，什么时候允许继续点击，什么时候出现完成提示。\n\n正文保留的是“先明确玩家动作和结束条件”这个做法。翻牌怎样配对、用几张牌，则由当前任务决定。换成别的游戏，仍用这套思考方法，具体规则要重新确定。\n\n【操作提示｜继续阅读 Default Workflow 中的技术、界面、素材和试玩要求】\n\n后面继续考虑技术、界面和素材。第一节除了牌，还要显示步数、时间和完成结果。界面要显示什么，得和游戏规则一起考虑，否则规则变了，画面可能还没跟着变。\n\n素材也一样。第一节用图案字符和代码合成的音效，就已经能玩了。规划时先看这个游戏需要哪些素材，再决定怎么制作。像这种简单翻牌，用字符画出牌面、用代码合成音效，就不用另外制作图片和音频文件了。\n\n流程最后要求在交付前完成试玩。具体要怎么试，入口引用了 game-playtest。\n\n【操作提示｜返回 game-studio/SKILL.md 的 Routing Rules，指认 Browser QA and visual review 的引用；回课件 p08，打开 game-playtest，定位 Preferred Workflow】\n\ngame-playtest 要求先把游戏运行起来，试一遍主要操作，再把几种关键状态截下来，检查画面有没有问题，最后报告发现的问题。\n\n第一节的检查过程，就能帮助我们理解为什么还要看截图：六十一项浏览器检查都通过了，看截图时，却发现没翻开的牌也露着图案。\n\n【操作提示｜切回已打开的第一节开发记录，定位 E06；对照通过输出、发现牌面朝向问题的消息，以及检查 is-open 的那一行代码】\n\n原来的检查只确认卡片没有 is-open 这个类，程序就把它算作关闭了。但 CSS 最后把哪一面显示给玩家，这条检查没看。截图里能直接看见牌面，所以又发现了这个问题。所以，既要检查操作后状态有没有变化，也要看玩家实际看到的画面。\n\n如果把这次经验写成指导，可以这样写：“检查初始状态时，核对卡片的关闭标记，并查看截图，确认玩家看不到牌面图案。”这是我们根据翻牌经历整理的写法。如果只写“检查牌面”，AI 可能查完状态标记就结束了。加上“看截图，确认图案没有露出来”，才把这次漏掉的检查说清楚。\n\n这些是我们根据第一节经历整理的解释。第一节开发时，没有使用这些游戏 Skill。\n\n【切换｜浏览器 · 返回 game-studio/SKILL.md 的 Output Expectations】\n\nOutput Expectations 约定最后交什么。做规划，要交代玩法、技术、界面、素材和检查安排；进入实现，文件分工和代码也要符合选定的方案。\n\n这次只要方案，所以先检查这些安排是否足够让我们作决定。\n\n【操作提示｜回课件 p08 第 3 步，打开“小任务实录”；先看 S01 的请求，再看 S02 的技术、素材与检查节选。这是保存的规划回放，保留原文标签页】\n\n这次请求指定使用 game-studio，要求翻两张牌、配对后保留、全部配对后结束，还能重新开始。先给方案，不写代码。\n\n回到返回，Phaser 对应了入口的默认建议。素材用了简单牌背和图案，没有安排动画条带。通用指导提供了考虑方向，具体需要什么，还要按静态卡牌的特点选择。\n\n检查部分安排了初始、翻开和结算等状态的截图。刚才指导里说的“关键状态”，在翻牌游戏中就变成了这些画面。这次只是生成方案，里面安排的检查还没有执行。\n\n它还补了八对牌和八百毫秒的等待时间。这两个数在请求和入口 Skill 里都没有，需要我们确认。\n\n【操作提示｜返回 game-studio/SKILL.md，定位 Output Expectations，再回课件 p08 第 3 步】\n\n有了这份方案，我们就能具体讨论：Phaser 要不要换成原生实现，八对牌合不合适，等待时间要不要调整。Skill 帮助 AI 把开发要考虑的事情列出来，这个游戏最后做成什么样，还得由我们确认。\n\n以后拿到另一份 Skill，也可以先看描述，判断适不适合当前任务；再读正文，看它具体怎么做，需要时沿引用找资料。真正用起来以后，再对照实际操作和检查结果，看它有没有按指导完成任务。"
      ],
      "refs": [
        {
          "kind": "read",
          "group": "概念",
          "text": "Skill 的结构与使用",
          "url": "https://developers.openai.com/plugins/concepts/skills"
        }
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "认识 Skill",
      "title": "把方法用到这次任务里",
      "lead": "下面是教学假设：每翻两张算一步，重开后步数与计时归零。用它说明通用方法怎样与具体规则、项目材料和当前范围结合。",
      "label": "把方法用到这次任务里",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:repeat(2,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>Skill 提供的方法</h3><p>检查操作、状态变化与界面反馈</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><h3>这次采用的规则</h3><p>每翻两张算一步<br>重开后步数、计时归零</p></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>任务信息</h3><p>项目：当前仓库的记忆翻牌<br>重点：计步与重开<br>范围：先给人工试玩清单，不改代码</p></div>",
      "steps": [
        "方法与具体标准",
        "项目与范围"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，展示“通用方法／本次任务”两列；右列明确标为教学假设，不称为上一节实际需求】\n\n同样是检查计步和重开，不同游戏也可能采用不同规则。\n\n假设这次的要求是：每翻两张算一步，点击重开以后，步数和计时都归零。Skill 可以提醒 AI 检查计步和重开。但每翻几张算一步，重开后哪些数字归零，得由我们告诉它，或者让它读取项目里已经写好的规则。\n\n知道怎么检查，还得知道这个游戏怎样才算正确。调用 Skill 时，项目的规则也要一起给它。",
        "【操作提示｜推进 p09 第 2 步，出现项目、重点、范围；这一段说明调用前的信息准备，不发送请求】\n\n这些信息怎么交给 Codex？如果规则已经写在项目说明里，就让它读取那份说明；如果是我们刚做出的决定，可以直接在对话里补充。还没确定的规则，就先和它讨论清楚。\n\n这次让它做什么，也要说清楚。比如检查当前仓库里的记忆翻牌，重点看计步和重开，先给人工试玩清单，不改代码。\n\n这样，它既知道检查方法，也知道这个游戏的规则，还知道这轮只需要给清单。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "原文",
          "text": "game-playtest/SKILL.md · 固定版本",
          "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
        }
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p09",
      "seconds": 60
    },
    {
      "id": "p10",
      "segment": "认识 Plugin",
      "title": "Skill 与 Plugin 怎样对应",
      "lead": "Game Studio 插件包含多份 Skill，其中有一份同名的入口 Skill。打开目录与声明，可以把整套内容和其中的任务指导对应起来。",
      "label": "Skill 与 Plugin 怎样对应",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:repeat(2,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3><a href=\"https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/\" target=\"_blank\" rel=\"noopener\">Game Studio · 插件目录</a></h3><p><code>skills/</code>：任务指导<br><code>references/</code>：参考资料<br><code>scripts/</code>：配套脚本<br><code>assets/</code>：插件图标</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3><a href=\"https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/.codex-plugin/plugin.json\" target=\"_blank\" rel=\"noopener\">plugin.json · 声明文件</a></h3><p><code>&quot;name&quot;: &quot;game-studio&quot;,</code><br><code>&quot;version&quot;: &quot;0.1.2&quot;,</code><br><code>&quot;skills&quot;: &quot;./skills/&quot;</code><br>同文件还有用途描述与仓库来源</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\"><b>Skill</b>：任务指导与资源　<b>Plugin</b>：组织、分发和管理能力</div>",
      "steps": [
        "整套与单份",
        "声明与内容",
        "归纳关系"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，从原文入口打开 Game Studio 插件目录；先总览目录，再定位 skills 下的 game-studio 与其他 Skill】\n\n刚才这些 Skill 都放在 Game Studio 插件里。我们安装这个插件，就可以取得这一组游戏开发指导和配套资料。\n\n【切换｜浏览器 · Game Studio 插件目录】\n\n它把规划、实现、试玩等 Skill 放在一起，还配有参考资料和脚本。\n\nGame Studio 是整套插件的名字。其中负责前期规划的 Skill 也叫 game-studio，我们刚才读的是这一份。",
        "【操作提示｜在插件目录中打开 .codex-plugin/plugin.json；定位名称、版本与用途，再指向 repository 和 skills 路径；课件对应 p10 第 2 步】\n\n【切换｜浏览器 · Game Studio plugin.json 原文】\n\nplugin.json 是插件的声明文件，写着名称、版本、用途和仓库来源。skills 这一项指向刚才那个 Skill 目录，安装时就能找到它提供的指导。\n\n以后看其他插件，也可以先读声明，了解来源和用途，再去看对应目录里的实际内容，判断自己用不用得上。",
        "【操作提示｜推进 p10 第 3 步，展示“Skill：任务指导与资源；Plugin：组织、分发和管理能力”；其他插件的工具接入只作概念定位】\n\n【切换｜回课件 p10 第 3 步】\n\nSkill 说明一类任务怎么做，可以带上需要的资料。Plugin 则把相关内容打包，方便我们安装和管理。\n\nGame Studio 主要提供的是游戏开发指导和配套资源。其他插件也可能只有一份 Skill，或者带有连接外部服务的工具。因此，看见一个插件时，我们要接着看它装进来的到底是什么，才能判断它能帮到哪一步。"
      ],
      "refs": [
        {
          "kind": "read",
          "group": "概念",
          "text": "Plugin architecture",
          "url": "https://developers.openai.com/plugins/concepts/plugins"
        }
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p10",
      "seconds": 90
    },
    {
      "id": "p11",
      "segment": "认识 Plugin",
      "title": "按需要判断选用方式",
      "lead": "把游戏例子里的认识用于其他情境。先判断缺少什么，再看实际内容及提供方式；一份 Skill 也可以通过插件提供。",
      "label": "按需要判断选用方式",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>需要一份做事的方法</h3><p>已有项目工具，希望按团队标准审查代码<br>检查是否有适用的 Skill</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>需要一组相关能力</h3><p>规划、实现、素材与试玩连续使用<br>检查插件提供的内容是否匹配</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><h3>需要尚未接入的工具</h3><p>要读文档服务中的资料，当前没有访问工具<br>检查服务连接、工具与授权</p></div></div>",
      "steps": [
        "独立指导",
        "相关能力",
        "工具接入"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，展示情境“已有一个项目，只想按固定标准做代码审查”；这是迁移用的假设情境，不引入第三份必学 Skill】\n\n如果换成其他任务，该怎么选呢？\n\n假设 Codex 已经能读取项目、运行检查，我们希望它按团队约定的顺序审查代码，并把发现的问题按固定格式写出来。这时，缺的是这套审查方法。一份写清楚检查范围、步骤和报告格式的 Skill，就可能满足需要。\n\n这份 Skill 可以独立提供，也可以放在插件里。选用前，先读里面的做法，看适不适合自己的项目。",
        "【操作提示｜推进 p11 第 2 步，展示情境“需要规划、实现、素材与试玩的一组指导”；回指 Game Studio 组成，不推导提效结论】\n\n如果我们接下来要连续做游戏规划、实现和试玩，Game Studio 把这些相关指导放在一起，就方便我们一起安装和管理。任务推进到哪一步，再选用适合的部分。\n\n如果只需要其中的试玩指导，也可以只用 game-playtest，不必把整组 Skill 都用一遍。",
        "【操作提示｜推进 p11 第 3 步，展示情境“需要读取一个尚未接入的文档服务”；只解释判断依据，不演示账号连接或 MCP 配置】\n\n再换一种情况。项目资料放在某个文档服务里，我们希望 Codex 读到它，但当前环境没有访问这个服务的工具。这里缺的就是连接和读取资料的能力。\n\n找插件时，就要确认它是否提供对应服务的工具、能读取哪些内容，以及需要怎样授权。只写一份“请去读文档”的指导，访问问题还没有解决。\n\n所以，找之前先想清楚：是想让 AI 按一套方法做事，还是缺少访问某个服务的工具？再看 Skill 或插件能不能满足这个需要。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "概念",
          "text": "Plugin architecture · 组成与选用",
          "url": "https://developers.openai.com/plugins/concepts/plugins#choose-a-plugin-shape"
        }
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "认识 Plugin",
      "title": "根据实际组成判断能力",
      "lead": "采用前核对来源、版本、组成和任务范围。再用“装上试玩指导是否就能操作浏览器”检查我们对指导与工具的理解。",
      "label": "根据实际组成判断能力",
      "html": "<div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>采用依据</h3><p>来源与版本可追溯 · 内容符合任务<br>脚本按需要核对 · 执行访问另看环境</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>暂停判断</h3><p>装了带试玩 Skill 的插件，就一定能让 Codex 打开浏览器吗？还要核对什么？</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><h3>解析</h3><p>需要核对实际浏览器工具和运行条件<br>game-playtest 提供方法，实际动作需要可用工具</p></div>",
      "steps": [
        "采用依据",
        "自主判断",
        "解析"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，展示 Game Studio 来源、固定版本、目录组成和当前任务范围；不把 interface.capabilities 标签解释成权限控制】\n\n回到 Game Studio，我们准备用里面的试玩指导，为记忆翻牌整理检查清单。安装前要确认来源和版本，看准备安装的是不是刚才读过的这一份。\n\n目录里还有图片处理脚本。这次整理清单用不到它，等任务确实需要处理图片时，再看脚本怎么用，以及它会读写哪些文件，需要安装什么依赖、访问什么内容。",
        "【操作提示｜推进 p12 第 2 步，展示判断题；保持解析隐藏，口播邀请自主判断后再推进】\n\n这里可以暂停一下，想一个问题：如果有人说，“我装了一个带试玩 Skill 的插件，所以 Codex 现在一定能打开浏览器替我玩游戏”，我们还需要核对什么？",
        "【操作提示｜推进 p12 第 3 步，显示解析；指向 game-playtest 的 Tooling Guidance 中文概括，不运行浏览器】\n\n还需要核对：当前环境里有没有可用的浏览器工具，它能不能打开这个游戏并完成操作。\n\n看 game-playtest 的 Tooling Guidance，也就是工具使用建议，它会建议使用项目里已有的浏览器自动化工具。这里提供的是怎样试玩、怎样检查的指导；真正打开页面、点击卡牌，需要相应的工具来执行。\n\n所以，装了试玩 Skill，还要看当前有没有浏览器工具。指导写了怎样试玩，工具才负责打开页面、点击卡牌。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "原文",
          "text": "game-playtest · Tooling Guidance",
          "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#tooling-guidance"
        }
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "安装与调用",
      "title": "装好后，先做一个小任务",
      "lead": "沿课程预检的安装路径安装 Game Studio，核对会话可用性，再显式选用 game-playtest。安装后的状态、读取记录与任务输出分别核对。",
      "label": "装好后，先做一个小任务",
      "html": "<div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>安装与确认</h3><p>核对来源 → 安装 → 确认会话可用</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>一次简短调用</h3><p style=\"font-size:22px\">请使用 Game Studio 中的 game-playtest，根据当前仓库里的记忆翻牌实现，给我一份简短的人工试玩清单，重点检查计步和重开。先给清单，不改代码，也不启动浏览器。</p></div><div class=\"p-bar is-light\" data-reveal=\"1\">看读取记录，再把清单中的预期行为与游戏规则核对</div>",
      "steps": [
        "安装",
        "调用与核对"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p13 第 1 步；切换后打开 Codex 插件列表，定位 Game Studio，核对来源与版本，执行安装并查看可用状态和文件位置】\n\n接下来，我带大家装好 Game Studio，再用刚才选定的 game-playtest 做一次小任务。\n\n【切换｜Codex · 插件列表】\n\n找到 Game Studio，核对来源和版本，再安装。安装后，我们看一下它的可用状态和文件位置。刚才读过的指导和资源就在插件目录里，记忆翻牌的代码则在我们的项目里。\n\n【操作提示｜安装完成后，在记忆翻牌项目中按核验过的方式进入可用会话，定位 game-playtest；不可用时按配套说明处理，不继续发送任务】\n\n这个会话能找到 game-playtest 以后，我们就可以给它任务了。",
        "【操作提示｜现场｜推进 p13 第 2 步，在记忆翻牌项目中用录前核验过的显式选择方式选中 game-playtest；复制页面请求，停在发送前】\n\n【切换｜Codex · 记忆翻牌项目会话】\n\n我这次选用 game-playtest，请它根据当前仓库里的记忆翻牌实现，给我一份简短的人工试玩清单，重点检查计步和重开。先给清单，不改代码，也不启动浏览器。\n\n【操作提示｜发送请求；完成后查看实际读取记录，再展开生成的清单。没有读取证据时明确指定并补查，不把模型自述当作读取证据】\n\n先看读取记录，确认它读过这份 Skill。再看清单里打算怎样检查计步和重开：每翻几张算一步，重开后哪些数字归零，有没有和项目里的规则一致。如果清单里多出了一条项目没写过的规则，就需要先确认，不能直接拿它判断游戏对不对。\n\n大家可以暂停视频，跟着完成安装和这次调用。遇到安装问题，可以按配套说明核对环境和来源，也可以先看这段操作，之后再补做。"
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p13",
      "seconds": 60
    },
    {
      "id": "p14",
      "segment": "安装与调用",
      "title": "把现成方法用于自己的任务",
      "lead": "看懂内容与提供方式之后，下一节从第二个游戏的需求开始，完整经历选用、规划和实现，并观察指导怎样参与执行。",
      "label": "把现成方法用于自己的任务",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><h3>遇到新的 Skill 或 Plugin</h3><p>按任务看用途 · 根据组成判断能力 · 补充项目具体信息</p></div><div class=\"p-bar is-light\" data-reveal=\"0\">下一节：提出第二个游戏，再用这些能力推进开发</div>",
      "steps": [
        "迁移与衔接"
      ],
      "script": [
        "【操作提示｜停留课件 p14，回指三个部分；本节不展开第二个游戏的玩法，不预告具体依赖或运行结果】\n\n【切换｜回课件 p14】\n\n以后拿到一份新的 Skill，就可以先看它适合什么任务、提供什么方法，再把当前项目的规则和这次的要求交代清楚。遇到一个 Plugin，则去看它实际包含哪些指导、资源或工具，判断能不能满足自己的需要。\n\n刚才用试玩 Skill 整理的是已有游戏的检查清单。接下来要做第二个游戏，我们就从新的需求出发，用相应的指导讨论方案，再开始开发。"
      ],
      "layout": "content",
      "teaching": [],
      "source": "index.html#p14",
      "seconds": 30
    }
  ],
  "segments": [
    {
      "label": "调用与选用",
      "seconds": 330
    },
    {
      "label": "认识 Skill",
      "seconds": 150
    },
    {
      "label": "认识 Plugin",
      "seconds": 270
    },
    {
      "label": "安装与调用",
      "seconds": 90
    }
  ],
  "activeSceneIds": [
    "p07",
    "p07a",
    "p07install",
    "p07b",
    "p07c",
    "p07d",
    "p07d-implicit",
    "p07d-writing"
  ],
  "authoringSceneIds": [
    "p07i",
    "p07j",
    "p07j1",
    "p07t1",
    "p07t2",
    "p07t3",
    "p07o",
    "p07p",
    "p07m",
    "p07l",
    "p07q",
    "p324c",
    "p324a",
    "p324b"
  ],
  "pptSceneIds": [
    "p07",
    "p07a",
    "p07install",
    "p07b",
    "p07c",
    "p07d",
    "p07d-implicit",
    "p07d-writing",
    "p07i",
    "p07j",
    "p07j1",
    "p07t1",
    "p07t2",
    "p07t3",
    "p07o",
    "p07p",
    "p07m",
    "p07l",
    "p07q",
    "p324c",
    "p324a",
    "p324b"
  ],
  "readingSceneIds": [
    "p07i",
    "p07j",
    "p07j1",
    "p07t1",
    "p07t2",
    "p07t3",
    "p07o",
    "p07p",
    "p07m",
    "p07l",
    "p07q",
    "p324c",
    "p324a",
    "p324b"
  ]
};

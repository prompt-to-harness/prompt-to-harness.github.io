window.lesson = {
  "title": "修改 Skill，并用它开发躲避游戏",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.03",
  "summary": "从同一个参考游戏生成两份 Skill，再用同一个开发任务核对实际复用了什么。",
  "scenes": [
    {
      "id": "skill-inputs",
      "segment": "生成与审阅",
      "label": "两种复用要求",
      "title": "同一款翻牌游戏，两种复用要求",
      "lead": "共用截图、源码和可见开发对话，在独立会话中生成",
      "html": "<div class=\"skill-slide\"><div class=\"skill-inputs\"><figure class=\"skill-reference\"><img src=\"evidence/reference.png\" alt=\"紫色翻牌游戏，数据栏位于卡片上方\"><figcaption>同一作品：截图、源码、开发对话</figcaption></figure><div class=\"skill-requests\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"agent\"><h3>整页模板组</h3><p>标题、横排 HUD、居中场地、结算浮层</p><strong>换玩法时，默认保留页面布局</strong></div><div class=\"p-box\" data-role=\"agent\"><h3>按需组件组</h3><p>主题、数据卡、结算浮层可单独用</p><strong>实时读数靠近场地，位置按玩法安排</strong></div></div></div><nav class=\"skill-evidence\" aria-label=\"本页材料\"><a href=\"evidence/index.html#reference\" target=\"_blank\" rel=\"noopener\">参考作品原图 ↗</a></nav></div>",
      "steps": [
        "参考作品",
        "并行生成"
      ],
      "script": [
        "【操作提示｜停在第 1 页第 1 步，指翻牌游戏截图里的数据栏和紫色卡片】\n\n上一节学完内容组织后，我们用使用时机、具体要求、资料入口和核对方法，重新审视了第一版风格指导。现在继续回答一个问题：这些要求放进 Skill 后，换一种玩法，实际能保留什么？这一节，我们从这款紫色翻牌游戏出发，请 AI 新写两份 Skill，再用它们开发躲避游戏，看哪些设计真正被带了过去。后面还会根据游戏的实际体验，修改其中一份。\n\n我们想把翻牌游戏的紫色风格用到躲避游戏里。拿数据栏来说，可以让 AI 沿用整页的横排布局，也可以把数据卡单独交给它，让它按新玩法决定摆在哪儿。",
        "【操作提示｜展开第 1 页右侧两条要求】\n\n这里先准备两个独立工作区，放入同一份翻牌游戏源码和开发对话，再附上相同的开局、结算截图。我们从这些参考材料开始，请 AI 各新写一份 Skill，输出到各自工作区的 purple-game-ui 文件夹。两个会话只换提示词的最后一段。一个要求提供整页模板，默认保留布局。另一个要求拆出可单独使用的部件，再补一条实时游戏的布局建议。\n\n【操作提示｜切到讲述页本步的实验上下文和两条完整 Prompt，指共同输入与各自末段；展示已保存请求，随后进入实际输出文件】\n\n这里展示的是已经完成的两次实验，我们沿保存的请求和输出往下看。我们给它们的参考相同，但对资源组织和布局都提出了不同要求：整页组默认保留，组件组按玩法安排。下面看这些要求怎样写进 Skill，再看开发时实际用了什么。组件组这次会话结束前超时了，但文件已经写出；下面看的是这份落盘结果。"
      ],
      "teaching": [],
      "source": "index.html#skill-inputs",
      "seconds": 60
    },
    {
      "id": "skill-files",
      "segment": "生成与审阅",
      "label": "正文与配套文件",
      "title": "沿正文找到开发要用的文件",
      "lead": "正文交代起点，也交代配套文件怎样使用",
      "html": "<div class=\"skill-slide\"><div class=\"skill-files\"><div class=\"skill-route\"><h3>整页模板组</h3><div class=\"p-box\"><b>SKILL.md</b><p>从整页模板起步，保留布局</p></div><div class=\"skill-connector\">↓ 作为项目起点</div><div class=\"p-box\" data-role=\"context\"><code>templates/index.html</code><p>页面结构与配套交互</p></div></div><div class=\"skill-route\" data-reveal=\"1\"><h3>按需组件组</h3><div class=\"p-box\"><b>SKILL.md</b><p>正文给布局规则，再取用部件</p></div><div class=\"skill-resources\"><div><div class=\"skill-connector\">↓ 查阅具体方案</div><div class=\"p-box\" data-role=\"context\"><code>references/layout.md</code><p>玩法、布局形式与类名</p></div></div><div data-reveal=\"2\"><div class=\"skill-connector\">↓ 采用实现</div><div class=\"p-box\" data-role=\"context\"><code>stat-cards.css</code><p>可直接用的数据卡样式</p></div></div></div></div></div><nav class=\"skill-evidence\" aria-label=\"本页材料\"><a href=\"evidence/index.html#layout-template-skill\" target=\"_blank\" rel=\"noopener\">正文与模板 ↗</a><a href=\"evidence/index.html#layout-component-reference\" target=\"_blank\" rel=\"noopener\">布局 Reference ↗</a><a href=\"evidence/index.html#layout-component-resource\" target=\"_blank\" rel=\"noopener\">数据卡 CSS ↗</a></nav></div>",
      "steps": [
        "整页模板",
        "布局 Reference",
        "可用资源"
      ],
      "script": [
        "【操作提示｜先到 PPT 第 2 页第 1 步，点“正文与模板”；在材料页扫过 name 和 description，再定位布局原则】\n\n生成以后，怎么知道这两份 Skill 会让 AI 从哪儿起步？名称和描述说明它适合什么任务，具体怎么做得看正文。整页组的正文把「默认保留布局」写成了「只允许动场地」，约束比我们交代的更严。\n\n【操作提示｜在同一材料页向下滚动到“快速上手”，再到“templates/index.html · 页面结构摘录”，指标题、数据栏、场地和浮层】\n\n整页组还附了一份完整页面，数据栏已经排在场地上方。完整页面可以作为案例，给 AI 看成品长什么样。这里正文明确要求从这份页面开始改，所以它起的是模板的作用。",
        "【操作提示｜回 PPT 第 2 页展开第 2 步，点“布局 Reference”；先指 SKILL.md 的布局规则，再下移到 Reference 的实时动作一行】\n\n生成组件 Skill 时，我们主动给了一条建议：玩家需要持续观察场地和读数，就让读数靠近场地，具体位置按玩法安排。现在看它怎样落实这条要求。\n\n正文把实时游戏的布局展开成左右侧栏或底部横条，并指向布局 Reference。Reference 又列出了实时动作游戏可以用的侧栏形式和对应类名。这样，下一次开发既有选择方向，也有具体方案可查。",
        "【操作提示｜回 PPT 第 2 页展开第 3 步，点“数据卡 CSS”，指侧栏单列规则】\n\n选了侧栏，就有现成的 CSS 可以用。正文和 Reference 给出布局建议，CSS 提供选好以后能直接用的样式。\n\n【操作提示｜回本步讲述页，停在共用开发 Prompt，指 Skill 路径与三项 HUD】\n\n为了看这两份 Skill 用起来有什么区别，我们让 AI 分别用它们做同一个任务。先新建两个没有游戏代码的项目，把刚生成的两份完整 Skill 分别复制到各自项目的 .agents/skills/purple-game-ui 目录，正文和配套资源一起带过去。两份 Skill 名字相同，内容不同，所以要分开放。\n\n这就是请求里说的“从空项目开始”：起点只有本组 Skill，还没有躲避游戏。两次都做六十秒躲避游戏，玩家移动、躲障碍、收集得分，碰撞扣生命，时间到或生命耗尽时结算，还可以重开。游玩时显示时间、得分和生命；Prompt 里的 HUD 指的就是这些游戏读数。请求没有指定这三项的位置，正好可以看两份 Skill 各自给了什么布局依据。\n\n【操作提示｜展示本步“实验上下文与 Codex 操作”，确认两个工作区各自的 Skill；从已保存请求切到“本次历史整页游戏”和“本次历史组件游戏”，再返回第 3 页比较截图】\n\n生成 Skill 的会话到这里结束。实际开发使用新的会话，请求直接指定项目内的 Skill 路径，并要求保留 Skill 文件不变。每组只带自己的 Skill，不再附翻牌源码、开发对话，也不带生成 Skill 时的会话历史。这样才能看出这些文件本身给开发提供了什么。"
      ],
      "teaching": [],
      "source": "index.html#skill-files",
      "seconds": 90
    },
    {
      "id": "skill-games",
      "segment": "开发与试玩",
      "label": "同任务的两款游戏",
      "title": "同样三项数据，两种场地布局",
      "lead": "任务规定时间、得分、生命；截图均取开局约 3 秒",
      "html": "<div class=\"skill-slide\"><div class=\"skill-games\"><figure><figcaption><b>整页模板组</b>　场地上方横排（截图上部）</figcaption><a href=\"evidence/layout-template.png\" target=\"_blank\" rel=\"noopener\"><img src=\"evidence/layout-template.png\" alt=\"整页组：时间、得分和生命横排在场地上方\"></a></figure><figure><figcaption><b>按需组件组</b>　场地右侧竖排（截图上部）</figcaption><a href=\"evidence/layout-components.png\" target=\"_blank\" rel=\"noopener\"><img src=\"evidence/layout-components.png\" alt=\"组件组：时间、得分和生命竖排在场地右侧\"></a></figure></div><div class=\"skill-trace\" data-reveal=\"1\"><span>正文与 Reference：布局建议</span><span>读取记录 + 成品侧栏类名</span><b>核对查阅与实际采用</b></div><nav class=\"skill-evidence\" aria-label=\"本页材料\"><a href=\"evidence/index.html#layout-run-hud\" target=\"_blank\" rel=\"noopener\">读取记录与侧栏类名 ↗</a></nav></div>",
      "steps": [
        "同状态画面",
        "回查布局依据"
      ],
      "script": [
        "【操作提示｜打开第 3 页并排截图，先指两边的时间、得分和生命，再指数据栏位置】\n\n两款游戏都做出了任务要求的三项读数。整页组把模板里的四格改成三格，保留上方横排。组件组把同样三项竖着放在场地右侧。",
        "【操作提示｜第 3 页展开第 2 步，打开“读取记录与侧栏类名”的 Inspect 入口，先指读取命令，再点“下一条记录”看原始补丁中的类名】\n\n组件组的日志里有读取布局 Reference 的命令，成品也用了 Skill 里的侧栏样式。显示哪三项是这次开发任务定的；布局方向则来自我们生成 Skill 时给的要求，经过正文和 Reference 展开，再配上现成样式。这次开发选用了右侧竖排，和我们刚才看到的指导与资源对应起来了。"
      ],
      "teaching": [],
      "source": "index.html#skill-games",
      "seconds": 60
    },
    {
      "id": "skill-reuse",
      "segment": "开发与试玩",
      "label": "实际复用的交互",
      "title": "结算时看见实际复用了什么",
      "lead": "回到同次运行的画面与代码，核对这次带进项目的内容",
      "html": "<div class=\"skill-slide\"><div class=\"skill-reuse\"><div data-reveal=\"1\"><h3>整页模板组：页面与已有交互</h3><div class=\"skill-result-pair\"><div class=\"p-box\"><b>第一局结算</b><p>得分 10 · 切到静音</p></div><span>刷新<br>再玩 →</span><div class=\"p-box\"><b>第二局结算</b><p>得分 0 · 最佳 10</p><p>仍为静音</p></div></div><p class=\"skill-proof\">模板的保存逻辑接到了新游戏</p><div class=\"skill-local-links\"><a href=\"evidence/layout-first-result.jpg\" target=\"_blank\" rel=\"noopener\">第一局 ↗</a><a href=\"evidence/layout-second-result.jpg\" target=\"_blank\" rel=\"noopener\">刷新后 ↗</a><a href=\"evidence/index.html#layout-run-storage\" target=\"_blank\" rel=\"noopener\">模板与项目代码 ↗</a></div></div><div><h3>按需组件组：同一个浮层，两次使用</h3><div class=\"p-box skill-overlay\"><code>ResultOverlay</code><p>同一个实例，各自提供内容和按钮</p></div><div class=\"skill-result-pair\"><div class=\"p-box\"><b>开场</b><p>规则 + 开始按钮</p></div><div class=\"p-box\"><b>结算</b><p>成绩 + 重开按钮</p></div></div><div class=\"skill-local-links\"><a href=\"evidence/layout-components-opening.jpg\" target=\"_blank\" rel=\"noopener\">开场 ↗</a><a href=\"evidence/layout-components-ending.jpg\" target=\"_blank\" rel=\"noopener\">结算 ↗</a><a href=\"evidence/index.html#layout-run-overlay\" target=\"_blank\" rel=\"noopener\">两处调用 ↗</a></div></div></div><div class=\"skill-takeaway\" data-reveal=\"2\">以组件组为基础，保留布局选择，再补事件音效</div><nav class=\"skill-evidence\" aria-label=\"本页材料\"></nav></div>",
      "steps": [
        "开场与结算",
        "刷新复验",
        "回看两份 Skill"
      ],
      "script": [
        "【操作提示｜进入第 4 页第 1 步，点“开场”，停在规则和开始按钮】\n\n数据栏说的是页面怎么排。再看交互，组件组一开始用浮层放游戏规则和开始按钮。\n\n【操作提示｜回到保留的 PPT，点“结算”，停在成绩和重开按钮】\n\n玩到结算，又出现了样式相同的浮层，内容换成了成绩和重开按钮。\n\n【操作提示｜回到保留的 PPT，点“两处调用”，指同一个实例】\n\n代码里用的是同一个浮层。两处各传入自己的内容和按钮，一份实现就用在了开场和结算。Skill 提供的是浮层能力，这次开发再决定用它展示规则还是成绩。",
        "【操作提示｜回第 4 页展开第 2 步，点“第一局”，指 10 分和静音】\n\n整页组的模板原来就会保存成绩和音效设置。换成躲避游戏以后还会保存吗？复测的第一局得了十分，我在结算时切到静音，再刷新玩第二局。\n\n【操作提示｜回 PPT 点“刷新后”，指 0 分、历史最佳 10 和静音】\n\n第二局没得分，历史最佳还是十分，音效也保持静音。\n\n【操作提示｜回 PPT 点“模板与项目代码”，对照模板目录、复制记录和最终保存代码】\n\n项目代码里，AI 沿用了模板的保存逻辑，把纪录改成躲避游戏的最高分，音效开关也接到了结算里。",
        "【操作提示｜回第 4 页第 3 步，保留左右两组复用结果】\n\n这次两份 Skill 给了 AI 不同的起点。整页模板带来了页面和已经接好的交互，组件包把我们提出的布局建议写成规则，配上能单独使用的部件。审阅时，既要看正文怎么组织文件，也要用成品和记录核对实际采用。\n\n我们不必在两份 Skill 里选一个赢家。我这次想继续用组件组，但希望它也有整页组的声音反馈。这个选择就给出了一个具体的迭代方向：保留哪些体验，再补哪项能力。"
      ],
      "teaching": [],
      "source": "index.html#skill-reuse",
      "seconds": 90
    },
    {
      "id": "audio-goal",
      "segment": "音效迭代",
      "label": "新增与保留",
      "title": "保留组件的自由，补上事件音效",
      "lead": "以组件组为基础，先说清这次想改变什么",
      "html": "<div class=\"skill-slide\"><div class=\"audio-goal\"><figure><img src=\"evidence/layout-components.png\" alt=\"历史组件游戏：场地与侧边读数\"><figcaption>组件组 · 按玩法组织界面</figcaption></figure><div class=\"audio-intent\"><section><h3>继续保留</h3><p>侧边读数 · 开场确认</p><p>限时收集进度 · 可见反馈 · 结算重开</p></section><section class=\"audio-add\"><h3>这次增加</h3><p>收集、受伤时有声音</p><p>玩家可以关闭音效</p></section></div></div><div class=\"skill-takeaway\">检查新增能力，也检查原来想保留的体验</div><nav class=\"skill-evidence\" aria-label=\"本页材料\"><a href=\"evidence/audio-iteration/index.html#versions\" target=\"_blank\" rel=\"noopener\">两组历史游戏 ↗</a><a href=\"evidence/audio-iteration/index.html#origin\" target=\"_blank\" rel=\"noopener\">声音来源 ↗</a></nav></div>",
      "steps": [
        "新增与保留"
      ],
      "script": [
        "【操作提示｜回到 PPT 第 5 页“保留组件的自由，补上事件音效”，先指保留项，再指新增项】\n\n改之前，先说清楚怎样才算满足这次需求。我要加的是收集、受伤时的声音，而且玩家可以关掉它。我要保留的是开场确认、限时收集的进度提示、原来的可见反馈，以及结算后重开。\n\n布局也有一个判断标准：数据栏仍然可以按玩法安排，窄屏时不挡住场地。所以，之后即使侧栏从右边换到左边，只要符合这个要求，就可以接受。我们不是要求新游戏每个像素都和旧游戏一样。\n\n有了这两组检查点，才知道改完要看什么。现在先查声音从哪里来，看看有没有可以单独拿出来的实现。"
      ],
      "teaching": [],
      "source": "index.html#audio-goal",
      "seconds": 30
    },
    {
      "id": "audio-package",
      "segment": "音效迭代",
      "label": "指导与资源",
      "title": "指导说明怎么用，资源提供实现",
      "lead": "实际修改：正文追加接入要求，组件包新增一个声音文件",
      "html": "<div class=\"skill-slide\"><div class=\"audio-package\"><section class=\"audio-file\"><header>SKILL.md · 新增指导</header><p>复制、导入声音资源</p><p>收集与受伤各调用一次</p><p>接入静音，保留可见反馈</p><p>复查声音与原有体验</p></section><div class=\"audio-join\">指向<br>→</div><section class=\"audio-file\"><header>purple-sound.js · 独立资源</header><code>sfx.pickup()<br>sfx.hurt()<br>setSoundEnabled(value)</code><p>来自历史整页游戏的声音实现</p><p>不依赖 HUD 的位置</p></section></div><div class=\"audio-unchanged\">原有三个 CSS 与 UI kit 未改　→　还要用新游戏检查结果</div><nav class=\"skill-evidence\" aria-label=\"本页材料\"><a href=\"evidence/audio-iteration/index.html#change\" target=\"_blank\" rel=\"noopener\">实际修改差异 ↗</a><a href=\"evidence/audio-iteration/index.html#generate\" target=\"_blank\" rel=\"noopener\">共同请求与采用记录 ↗</a></nav></div>",
      "steps": [
        "审阅修改范围"
      ],
      "script": [
        "【操作提示｜从讲述页打开“声音资源”原文查看页，查看导出与 pickup、hurt；用浏览器后退回讲述页，再点 P3.3-06-01 返回 PPT 第 6 页“指导说明怎么用，资源提供实现”】\n\n正文指到的这份文件，实际就是历史整页游戏采用的声音实现。这次没有重写三个 CSS，也没有重写浮层组件，只追加了正文和一个声音文件。\n\n资源负责提供可以调用的实现，正文负责告诉 AI 什么时候取用、接到哪些事件、怎样检查。两者配在一起，下一次开发才有明确的使用依据。\n\n不过，改动范围小，只能说明我们没有直接重写布局。新的游戏究竟会做成什么样，还得让另一个开发会话实际使用这份 Skill。"
      ],
      "teaching": [],
      "source": "index.html#audio-package",
      "seconds": 30
    },
    {
      "id": "audio-result",
      "segment": "音效迭代",
      "label": "按结果取舍",
      "title": "按需求验收，再决定是否保留",
      "lead": "本轮对照：原组件版与音效修复版，使用同一条开发请求",
      "html": "<div class=\"skill-slide\"><div class=\"audio-verdict\"><section><h3>新增能力</h3><p>收集、受伤有声音</p><p>静音后停止播放</p><b>本轮已接入</b></section><section><h3>请求明确的保留项</h3><p>开场确认、侧栏布局</p><p>限时进度、视觉反馈、重开</p><b>主要约定体验仍在</b></section><section class=\"audio-remaining\"><h3>继续处理</h3><p>结算显示了文字标签</p><p>若交付触屏操作，须补实现</p><b>回到游戏继续修</b></section></div><div class=\"skill-takeaway\">保留这次 Skill 修改；换玩法后继续实际验证</div><nav class=\"skill-evidence\" aria-label=\"本页材料\"><a href=\"evidence/audio-iteration/before/index.html\" target=\"_blank\" rel=\"noopener\">原组件版 ↗</a><a href=\"evidence/audio-iteration/after/index.html\" target=\"_blank\" rel=\"noopener\">音效修复版 ↗</a><a href=\"evidence/audio-iteration/index.html#compare\" target=\"_blank\" rel=\"noopener\">前后实拍与结果 ↗</a></nav></div>",
      "steps": [
        "对照需求取舍"
      ],
      "script": [
        "【操作提示｜回到 PPT 第 7 页“按需求验收，再决定是否保留”，逐项对应刚才的试玩与截图】\n\n按这次确定的要求，我会保留这次 Skill 修改：新增指导和声音资源已经接到收集、受伤与静音上；开发请求里明确要求保留的开场、限时收集和主要视觉反馈，也在这次成品里逐项检查到了。结算标签的问题继续在游戏里修；如果交付范围包括触屏操作，再补对应的实现和检查。\n\n这次迭代的起点，是作品里一个具体的体验缺口。我们先查实际用了哪些指导和资源，再决定改哪里；修改后用同一个请求重新生成，检查新增能力，也检查要保留的体验。结果满足要求，就保留；还有缺口，就根据证据继续调整，必要时回退。\n\n这里的一次结果说明，这个声音能力在本例里迁入成功。以后换玩法，仍然要实际使用和验证。下一节我们再把视野打开，看看去哪里寻找值得体验的 Skill，以及怎样持续关注它们的变化。"
      ],
      "teaching": [],
      "source": "index.html#audio-result",
      "seconds": 30
    }
  ],
  "segments": [
    {
      "label": "生成与审阅",
      "seconds": 150
    },
    {
      "label": "开发与试玩",
      "seconds": 150
    },
    {
      "label": "音效迭代",
      "seconds": 90
    }
  ]
};

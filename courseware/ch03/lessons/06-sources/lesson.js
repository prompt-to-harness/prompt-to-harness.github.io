window.lesson = {
  "title": "那条规则，下次 Codex 从哪里知道",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.06",
  "summary": "对照对话、Skill、Memory、仓库四处说明；没落档的就是需求债务。",
  "scenes": [
    {
      "id": "p38",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "新会话还知道吗",
      "title": "新会话还知道规则吗？",
      "kicker": "第 3 章 · 3.6 · 开篇",
      "lead": "对话会结束，规则从哪里来",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>3.1</b>加个游戏</li><li class=\"is-done\"><b>3.2</b>谁定的规则</li><li class=\"is-done\"><b>3.3</b>按证据修</li><li class=\"is-done\"><b>3.4</b>审插件</li><li class=\"is-done\"><b>3.5</b>插件的主张</li><li class=\"is-now\"><b>3.6</b>说明在哪</li><li><b>3.7</b>重开清理</li></ol><div class=\"p-grid\" style=\"grid-template-columns:repeat(3,minmax(0,1fr));margin-top:16px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">AI 定的</span><p>等待翻回期间锁住点击</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">我们定的</span><p>6 对词；两张算一步</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">插件带来的</span><p>2D 默认 Phaser；计时器属于状态</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">新会话里问：<b>步数怎么算？</b></div>",
      "steps": [
        "地图",
        "本章的规则",
        "新会话的问题"
      ],
      "script": [
        "两个游戏都做完了。回头数一数这一章定下的规则。",
        "有 AI 替我们定的：等待翻回期间锁住点击。有我们自己定的：6 对词，两张算一步。还有插件带来的：2D 默认 Phaser，计时器属于游戏状态。",
        "现在新开一个会话，问 Codex：步数怎么算？它会从哪里知道？这一节就回答这个问题。"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    },
    {
      "id": "p39",
      "segment": "四个来源",
      "label": "说明有哪几个来源",
      "title": "给 AI 的说明，有四个来源",
      "kicker": "第 3 章 · 3.6 · 四个来源",
      "lead": "对话历史、Skill、Memory、仓库：谁写的、放在哪、什么时候进请求、会不会过期都不一样。Skill 和 Memory 是同一种结构：平时只放一段摘要，需要时才展开。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,.8fr) repeat(4,minmax(0,1fr));font-size:19px\"><div class=\"is-head\" data-reveal=\"0\"><span></span><span>谁写的</span><span>放在哪</span><span>何时进请求</span><span>换机器、换人</span></div><div data-reveal=\"0\"><span>对话历史</span><span>你和 AI</span><span>当前会话</span><span>本会话每次</span><span>开新会话就没了</span></div><div data-reveal=\"1\"><span>Skill</span><span>别人</span><span>插件或 Skill 目录</span><span>平时名称+描述，用到读全文</span><span>看装在哪</span></div><div data-reveal=\"1\"><span>Memory</span><span>AI 自己整理</span><span>本机 Codex home</span><span>平时摘要，需要时读细节</span><span>不一样</span></div><div data-reveal=\"2\" class=\"is-key\"><span>仓库</span><span>你和团队</span><span>代码、测试、文档</span><span>按需读；AGENTS.md 每次</span><span>一样</span></div></div>",
      "steps": [
        "对话历史",
        "Skill 与 Memory",
        "仓库"
      ],
      "script": [
        "给 AI 的说明有四个来源。对话历史：你和 AI 一起写的，只在当前会话里，开新会话就没了。3.3 里我们定规则就是在对话里定的。",
        "Skill：别人写的，3.4 看过，平时请求里只有名称和描述，用到才读全文。Memory：AI 自己整理的笔记，放在本机的 Codex home 里，平时只放一段摘要，需要时才去读细节。它们是同一种结构：先放摘要，需要时展开。",
        "仓库：你和团队写的代码、测试和文档。Codex 按需去读，AGENTS.md 每次都会放进请求。只有这一行，换一台机器、换一个人，内容都一样。"
      ],
      "teaching": [],
      "source": "index.html#p39",
      "seconds": 90
    },
    {
      "id": "p40",
      "segment": "请求里的样子",
      "label": "三处在请求里",
      "title": "同一条规则，放在三处，请求里分别是什么样",
      "kicker": "第 3 章 · 3.6 · 请求里的样子",
      "lead": "同一个仓库：AGENTS.md 写规则 A，docs/RULES.md 写规则 B，Memory 里有规则 C。看一次真实请求：Memory 是第 1 条 developer 消息；AGENTS.md 是第 2 条 user 消息，全文；docs/RULES.md 不在请求里。",
      "html": "<div class=\"p-set\" style=\"display:grid;gap:10px\"><div class=\"p-item\" data-reveal=\"0\"><span class=\"p-chip\" data-role=\"ctx\">developer</span> <b>Memory</b>：怎样使用记忆目录的说明 + 记忆摘要 · 12,384 字</div><div class=\"p-item\" data-reveal=\"1\"><span class=\"p-chip\" data-role=\"us\">user</span> <b>AGENTS.md</b>：“# AGENTS.md instructions for …” + 全文 · 691 字</div><div class=\"p-item is-unread\" data-reveal=\"2\"><b>docs/RULES.md</b>：不在请求里，模型自己决定读不读</div><div class=\"p-item\" data-reveal=\"2\"><span class=\"p-chip\" data-role=\"us\">user</span> 我们这次的问题 · 20 字</div></div><p class=\"source-note\">课程基线下的一次 codex exec 请求（2026-10-06），结构见 courseware/ch03/materials/memory/reference/compare-request-outline.json；子模块 ext/memories/src/prompts.rs（摘要截断到 2500 token）、core/src/config/mod.rs（AGENTS.md 上限 32 KiB）</p>",
      "steps": [
        "Memory",
        "AGENTS.md",
        "自定义文件"
      ],
      "script": [
        "做一个对照。同一个仓库里，AGENTS.md 写一条规则，docs 下面的 RULES.md 写一条，Memory 里也有一条。发一次请求，用请求查看工具看它。第一条是 developer 消息：Memory。一段一万多字的“怎样使用记忆目录”的说明，加上记忆摘要。",
        "第二条是 user 消息：AGENTS.md，标题写着 AGENTS.md instructions，后面是全文。",
        "docs/RULES.md 呢？不在请求里。它要等模型自己决定去读。然后才是我们这次的问题。所以“写进一个文件”不等于“Codex 知道了”：写在 AGENTS.md 里，每次都在；写在别的文件里，要看它读不读；交给 Memory，在本机，而且是 AI 整理过的版本。"
      ],
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录，按配套说明搭一个带三处规则的仓库，用开启记忆的配置发一次请求并查看结构",
            "code": "less courseware/ch03/materials/memory/README.md   # “Memory 和 AGENTS.md、自定义文件有什么不同”一节"
          }
        ],
        "note": "需要 MINIMAX_API_KEY、uv；Memory 需要先有一份记忆摘要。"
      },
      "teaching": [],
      "source": "index.html#p40",
      "seconds": 90
    },
    {
      "id": "p41",
      "segment": "让它自己记",
      "label": "让 Codex 自己记住",
      "title": "让 Codex 自己记住，会怎样",
      "kicker": "第 3 章 · 3.6 · 让它自己记",
      "lead": "参考记录（讲师 9 轮中的一轮）：说“记住”→ Codex 申请在沙箱外写一份笔记，人同意 → 整理进记忆摘要 → 新会话复述规则时，多出了“落地要求”和“长期契约，不重新讨论”。这些都不是人说的。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,.9fr) minmax(0,1.6fr);row-gap:10px;--rf:19px\"><div class=\"is-head\" data-reveal=\"0\"><span>步骤</span><span>看到的</span></div><div data-reveal=\"0\"><span class=\"p-cell\">人说</span><span class=\"p-cell\">记住：两张牌不匹配、等待翻回期间的点击一律忽略</span></div><div data-reveal=\"1\"><span class=\"p-cell\">写笔记</span><span class=\"p-cell\">申请在沙箱外写入记忆目录 · 笔记里多了一条“落地要求”</span></div><div data-reveal=\"2\"><span class=\"p-cell\">整理后</span><span class=\"p-cell\">摘要把这条“落地要求”当成用户规则</span></div><div data-reveal=\"3\" class=\"is-fail\"><span class=\"p-cell\">新会话复述</span><span class=\"p-cell\">“定性：这是长期行为契约……不重新讨论”</span></div></div><p class=\"source-note\">Memory 实验在课程基线（tools/clean-codex.sh，MiniMax）下运行，2026-10-06 共 9 轮，参考记录见 courseware/ch03/materials/memory/reference/。整理阶段约三分之一以 failed_agent 结束；画面中的为成功的那几轮。</p>",
      "steps": [
        "人说",
        "写笔记",
        "整理",
        "复述"
      ],
      "script": [
        "Memory 的写入要等后台整理，现场等不及，我们看讲师的参考记录。人说：记住，两张牌不匹配、等待翻回期间的点击一律忽略。",
        "Codex 申请在沙箱外写一份笔记，因为记忆目录不在工作区里，这和 1.3 的权限申请一样。人同意。打开笔记看：除了人说的规则，它还加了一条“落地要求”：用显式的锁定标志，不要靠延时回调推断状态。",
        "下一次新会话启动时后台整理。整理后的记忆摘要，把这条落地要求当成了用户的规则。",
        "再开一个会话，问同一个问题。它复述规则，还说：这是长期行为契约，后续不重新讨论。人从来没说过这句。讲师跑了 9 轮，4 份笔记都加了人没说过的内容，只有 1 份标明“非用户原话”。记忆会长出东西，而且会被当成规则。这又回到了本章的问题：这条规则是谁定的？"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "原文见 materials/memory/reference/run1-note.md、run1-memory_summary.md、run1-s3.answer.md；标明“非用户原话”的一份见 run7-note.md。整理成功后 6 小时内不再整理，录制用提前准备好的 Codex home，或在画面上明说“这里人工把整理时间改早了”。"
        }
      ],
      "source": "index.html#p41",
      "seconds": 120
    },
    {
      "id": "p42",
      "segment": "让它自己记",
      "label": "关掉记忆就看不到了吗",
      "title": "关掉记忆，它就看不到了吗？",
      "kicker": "第 3 章 · 3.6 · 让它自己记",
      "lead": "关掉记忆只是不把它放进请求。Codex 有整盘的读权限：有两轮对照会话自己去上级目录，翻到了笔记文件。再用权限配置禁止读取记忆目录，它才回答“不会猜一个答案”。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">只关掉记忆</span><p style=\"margin-top:8px\">请求里没有记忆说明 → 它逐级翻上级目录 → 读到笔记文件</p><p class=\"p-sub\">“这不是记忆告诉我的……我是靠翻文件查到的”</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">再禁止读取记忆目录</span><p style=\"margin-top:8px\">查遍仓库，没找到这条决定</p><p class=\"p-sub\">“我不会猜一个答案给你——那只会变成编造的规则”</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">关掉的是<b>注入</b>，不是<b>读权限</b></div>",
      "steps": [
        "只关掉记忆",
        "禁止读取",
        "区别"
      ],
      "script": [
        "做对照组时，讲师先只关掉记忆。请求里确实没有记忆说明了，可是 Codex 用了十一分钟，一层一层往上级目录翻，翻到了笔记文件。它自己说：这不是记忆告诉我的，我是靠翻文件查到的。",
        "再加一个权限配置，禁止读取记忆目录和实验目录。这一次它查遍仓库，没找到，回答：我不会猜一个答案给你，那只会变成编造的规则。并且建议由我们确认口径。",
        "这是 1.3 的沙箱知识：默认限制的是写，不是读。关掉记忆，关掉的是注入；要让它真的看不到，得限制读权限。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "权限配置写法与两轮被污染的对照见 materials/memory/README.md“关闭记忆的对照会话怎样才不被污染”；回答原文见 reference/run8-deny.answer.md。"
        }
      ],
      "source": "index.html#p42",
      "seconds": 90
    },
    {
      "id": "p43",
      "segment": "信息来源表",
      "label": "规则都在哪",
      "title": "本章的规则，都在哪里？",
      "kicker": "第 3 章 · 3.6 · 信息来源表",
      "lead": "把本章每条规则和决定列出来，标出它现在在哪里。只在对话里、只在记忆里、只在插件里的，都是需求债务；落进仓库但只有结论、没有原因或验收方法的，也标出来。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1.5fr) repeat(4,minmax(0,.7fr));font-size:19px\"><div class=\"is-head\" data-reveal=\"0\"><span>规则 / 决定</span><span>仓库</span><span>只在对话</span><span>插件</span><span>记忆</span></div><div data-reveal=\"0\"><span>等待期锁住点击（AI 定）</span><span>代码有，原因没有</span><span>✓</span><span></span><span>可能</span></div><div data-reveal=\"1\"><span>6 对词、两张算一步（我们定）</span><span>代码 + 记录</span><span></span><span></span><span></span></div><div data-reveal=\"1\"><span>第二个游戏用不用引擎（3.5）</span><span>记录</span><span>✓</span><span>默认 Phaser</span><span></span></div><div data-reveal=\"2\" class=\"is-key\"><span>躲避游戏的难度（AI 定）</span><span>代码有，原因没有</span><span></span><span></span><span></span></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">只在对话、记忆、插件里的，就是<b>需求债务</b></div>",
      "steps": [
        "AI 定的",
        "我们定的",
        "试玩发现的",
        "练习"
      ],
      "script": [
        "把本章的规则列成一张表，每条标出它现在在哪里。等待期锁住点击：代码里有这个行为，可是为什么这样定、谁同意的，只在 3.1 的对话里。",
        "我们定的 6 对词和步数：代码里有，3.3 的记录里也写了原因。第二个游戏用不用引擎：3.5 的记录里写了，插件那边的默认是 Phaser。",
        "还有 3.5 试玩时发现的：躲避游戏开局站着不动，4 秒就掉两条命。难度是 AI 定的，代码里有具体数值，可没有人说过为什么是这个数。",
        "可信度从高到低：当前的代码和测试，仓库里的文档，最后才是记忆。只在对话里、只在记忆里、只在插件里的规则，就是需求债务；进了仓库但只有结论、没写原因或验收方法的，也标出来。请暂停视频，做出你的信息来源表，写进 CH03_REQUIREMENTS_DEBT.md。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "信息来源表与 CH03_REQUIREMENTS_DEBT.md：每条规则或决定的所在（仓库证据 / 只在对话 / 插件 Skill / 记忆 / 模型猜测）与证据。"
        }
      ],
      "source": "index.html#p43",
      "seconds": 120
    },
    {
      "id": "p44",
      "segment": "小结",
      "label": "本节小结",
      "title": "没落档的，就是需求债务",
      "kicker": "第 3 章 · 3.6 · 小结",
      "lead": "记忆是辅助回忆，不是团队规则的来源，也不跟着仓库走。第 4 章用规格把这些决定写成持久契约：规格能留住决定，但不能替人做决定。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">可信度</h3><ol class=\"p-notes\"><li><span><b>当前代码与测试</b></span></li><li><span><b>仓库文档</b></span></li><li><span><b>记忆</b><small>辅助回忆</small></span></li></ol></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">信息来源表</li><li class=\"is-pass\">需求债务清单</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>第 4 章</h3><div class=\"p-box\" data-role=\"us\"><h3>SDD</h3><p>把决定写成持久契约</p></div></div></div>",
      "steps": [
        "可信度",
        "留下的",
        "第 4 章"
      ],
      "script": [
        "可信度的顺序：当前的代码和测试最高，然后是仓库里的文档，最后是记忆。记忆是辅助回忆，可能过期，可能长出人没说过的内容，也不跟着仓库走。",
        "这一节留下信息来源表和需求债务清单。",
        "第 4 章换一个项目，用规格驱动开发，把这类决定写成持久的契约。但请记住：规格能留住决定，不能替人做决定。“步数怎么算”这种问题，到了第 4 章还是要人来定。"
      ],
      "teaching": [],
      "source": "index.html#p44",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "四个来源",
      "seconds": 90
    },
    {
      "label": "请求里的样子",
      "seconds": 90
    },
    {
      "label": "让它自己记",
      "seconds": 210
    },
    {
      "label": "信息来源表",
      "seconds": 120
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};

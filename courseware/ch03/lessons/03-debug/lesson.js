window.lesson = {
  "title": "修改 Skill，并用它开发躲避游戏",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.03",
  "summary": "从已有材料演示三种 Skill 生成请求，再沿组件版完成声音迭代。",
  "scenes": [
    {
      "id": "creation-evidence",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "creation-methods"
      },
      "segment": "生成方式",
      "label": "材料与创建方式",
      "title": "先把已有对话和成品交给 AI",
      "lead": "Prompt 说明任务与读取位置，文件承载具体上下文",
      "html": "<div class=\"creation-overview\"><div class=\"creation-project\"><img src=\"evidence/reference.png\" alt=\"已完成的紫色翻牌游戏\"><span>已完成的翻牌游戏</span></div><div class=\"creation-bundle\"><h3>把经验带进新会话</h3><div><b>开发对话</b><code>source-dialogue.md</code></div><div><b>最终源码</b><code>source-game/</code></div><div><b>成品截图</b><code>source-game/docs/</code></div></div><div class=\"creation-guide p-box\" data-role=\"ctx\"><span class=\"creation-eyebrow\">PROMPT</span><h3>告诉 AI<br>要提炼什么</h3><p>复用目标 · 材料位置<br>提炼边界 · 完成标准</p><strong>先读材料，再生成</strong></div></div><div class=\"creation-route\"><span><i>01</i>直接提炼</span><span><i>02</i>调用 skill-creator</span><span><i>03</i>补充 Reference</span></div>",
      "steps": [
        "材料进入新会话"
      ],
      "script": [
        "【操作提示｜对应讲述页 creation-methods：指旧对话、源码、截图的文件位置及 Prompt 的四项要求。】"
      ],
      "teaching": [],
      "source": "index.html#creation-evidence",
      "seconds": 30
    },
    {
      "id": "create-direct",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "demo-direct"
      },
      "segment": "生成方式",
      "label": "从已有上下文直接生成",
      "title": "从已有上下文直接生成",
      "lead": "依据已有对话、最终源码与截图，提炼可复用经验",
      "html": "<div class=\"creation-method\"><figure class=\"creation-source\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>Agent Skills · 从实际任务提炼</div><a class=\"creation-capture\" href=\"external/creation-direct-context.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大原文截图\"><img src=\"external/creation-direct-context.png\" alt=\"Agent Skills · 从实际任务提炼：保留上下文的原页截图\"><svg viewBox=\"0 0 1152 508\" aria-hidden=\"true\"><rect x=\"70\" y=\"314\" width=\"300\" height=\"44\"/><rect x=\"70\" y=\"386\" width=\"360\" height=\"44\"/></svg></a></div><figcaption>留意：成功步骤与纠正意见</figcaption></figure><div class=\"creation-practice\"><div class=\"creation-flow\"><div class=\"creation-materials\"><span class=\"creation-eyebrow\">同一份作品材料</span><div class=\"creation-paper p-box\" data-role=\"us\"><b>对话 · 源码 · 截图</b><span>最终源码 · 成品截图</span></div></div><svg class=\"creation-arrow\" viewBox=\"0 0 72 42\" aria-hidden=\"true\"><path d=\"M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34\"/></svg><div class=\"creation-transform\"><span class=\"creation-eyebrow\">直接提炼</span><strong>提取可复用经验</strong><p>区分通用视觉与翻牌规则</p></div><svg class=\"creation-arrow\" viewBox=\"0 0 72 42\" aria-hidden=\"true\"><path d=\"M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34\"/></svg><div class=\"creation-output\"><span class=\"creation-eyebrow\">生成后审阅</span><b>Skill 初稿</b><code>SKILL.md</code><span>正文 + 配套文件</span></div></div><div class=\"creation-bottom\"><span>读取对话、源码与截图，再整理经验</span><div class=\"creation-actions\"><details class=\"p-pop\"><summary>查看完整 Prompt</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>完整生成 Prompt</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-direct\"><pre>目标：根据这款翻牌游戏的实际材料，创建一个以后开发其他小游戏时可以复用的紫色界面 Skill。\n上下文：source-game/ 是已完成的源码，source-game/docs/ 有截图，source-dialogue.md 是原始开发对话。\n约束：先读取材料，再提炼实际存在的视觉规则和开发要求。输出到当前项目 purple-game-ui/，包含 SKILL.md 及确有必要的配套文件；区分可复用视觉与翻牌专属规则，不把翻牌布局固定到所有游戏。不要修改输入材料，也不要开发新游戏。现有输入足够时直接完成；缺少关键信息时明确指出。直接从上述材料整理，不调用 skill-creator 或其他 Skill。\n完成标准：检查 Skill 的 name、description、文件引用和内容依据；最终说明提炼了哪些可复用内容、哪些只适用于翻牌，以及尚未通过新任务验证的部分。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><button type=\"button\" data-creation-copy=\"direct\">复制完整 Prompt</button><span role=\"status\"></span></div></div></div></div>",
      "steps": [
        "官方说明与完整请求"
      ],
      "script": [
        "【操作提示｜完整口播与逐段动作见讲述页 demo-direct；按当前画面定位执行。】"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "",
          "text": "原文出处",
          "url": "https://agentskills.io/skill-creation/best-practices#start-from-real-expertise"
        }
      ],
      "teaching": [],
      "source": "index.html#create-direct",
      "seconds": 30
    },
    {
      "id": "create-creator",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "demo-creator"
      },
      "segment": "生成方式",
      "label": "调用内置 skill-creator 生成",
      "title": "调用内置 skill-creator 生成",
      "lead": "同一份材料，在请求开头加入 $skill-creator",
      "html": "<div class=\"creation-method\"><figure class=\"creation-source\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>OpenAI · Codex 内置创建工具</div><a class=\"creation-capture\" href=\"external/creation-creator-context.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大原文截图\"><img src=\"external/creation-creator-context.png\" alt=\"OpenAI · Codex 内置创建工具：保留上下文的原页截图\"><svg viewBox=\"0 0 1072 492\" aria-hidden=\"true\"><rect x=\"54\" y=\"201\" width=\"280\" height=\"43\"/></svg></a></div><figcaption>留意：Codex 的调用写法与创建时的提问</figcaption></figure><div class=\"creation-practice\"><div class=\"creation-flow\"><div class=\"creation-materials\"><span class=\"creation-eyebrow\">同一份作品材料</span><div class=\"creation-paper p-box\" data-role=\"us\"><b>对话 · 源码 · 截图</b><span>最终源码 · 成品截图</span></div></div><svg class=\"creation-arrow\" viewBox=\"0 0 72 42\" aria-hidden=\"true\"><path d=\"M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34\"/></svg><div class=\"creation-transform\"><span class=\"creation-eyebrow\">调用创建工具</span><strong>$skill-creator</strong><p>提供目标，由工具组织创建过程</p></div><svg class=\"creation-arrow\" viewBox=\"0 0 72 42\" aria-hidden=\"true\"><path d=\"M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34\"/></svg><div class=\"creation-output\"><span class=\"creation-eyebrow\">生成后审阅</span><b>Skill 初稿</b><code>SKILL.md</code><span>正文 + 配套文件</span></div></div><div class=\"creation-bottom\"><span>创建工具不替代项目材料与复用目标</span><div class=\"creation-actions\"><details class=\"p-pop\"><summary>查看完整 Prompt</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>完整生成 Prompt</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-creator\"><pre>$skill-creator\n\n目标：根据这款翻牌游戏的实际材料，创建一个以后开发其他小游戏时可以复用的紫色界面 Skill。\n上下文：source-game/ 是已完成的源码，source-game/docs/ 有截图，source-dialogue.md 是原始开发对话。\n约束：先读取材料，再提炼实际存在的视觉规则和开发要求。输出到当前项目 purple-game-ui/，包含 SKILL.md 及确有必要的配套文件；区分可复用视觉与翻牌专属规则，不把翻牌布局固定到所有游戏。不要修改输入材料，也不要开发新游戏。现有输入足够时直接完成；缺少关键信息时明确指出。使用 Codex 内置 skill-creator 辅助创建。\n完成标准：检查 Skill 的 name、description、文件引用和内容依据；最终说明提炼了哪些可复用内容、哪些只适用于翻牌，以及尚未通过新任务验证的部分。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><button type=\"button\" data-creation-copy=\"creator\">复制完整 Prompt</button><span role=\"status\"></span></div></div></div></div>",
      "steps": [
        "官方说明与完整请求"
      ],
      "script": [
        "【操作提示｜完整口播与逐段动作见讲述页 demo-creator；按当前画面定位执行。】"
      ],
      "refs": [
        {
          "kind": "read",
          "group": "",
          "text": "原文出处",
          "url": "https://learn.chatgpt.com/docs/build-skills#create-a-skill"
        }
      ],
      "teaching": [],
      "source": "index.html#create-creator",
      "seconds": 30
    },
    {
      "id": "create-reference",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "demo-reference"
      },
      "segment": "生成方式",
      "label": "补充 Reference 后生成",
      "title": "补充 Reference 后生成",
      "lead": "同一份材料，再提供参考文件并说明采用范围",
      "html": "<div class=\"creation-method\"><figure class=\"creation-source\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>Agent Skills · 综合已有项目资料</div><a class=\"creation-capture\" href=\"external/creation-reference-context.png\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大原文截图\"><img src=\"external/creation-reference-context.png\" alt=\"Agent Skills · 综合已有项目资料：保留上下文的原页截图\"><svg viewBox=\"0 0 1152 452\" aria-hidden=\"true\"><rect x=\"199\" y=\"386\" width=\"934\" height=\"43\"/></svg></a></div><figcaption>留意：资料要贴合具体项目</figcaption></figure><div class=\"creation-practice\"><div class=\"creation-flow\"><div class=\"creation-materials\"><span class=\"creation-eyebrow\">同一份作品材料</span><div class=\"creation-paper p-box\" data-role=\"us\"><b>对话 · 源码 · 截图</b><span>最终源码 · 成品截图</span></div></div><svg class=\"creation-arrow\" viewBox=\"0 0 72 42\" aria-hidden=\"true\"><path d=\"M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34\"/></svg><div class=\"creation-transform\"><span class=\"creation-eyebrow\">补充参考</span><strong>材料 + Reference</strong><p>指定借鉴原则与不适用范围</p></div><svg class=\"creation-arrow\" viewBox=\"0 0 72 42\" aria-hidden=\"true\"><path d=\"M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34\"/></svg><div class=\"creation-output\"><span class=\"creation-eyebrow\">生成后审阅</span><b>Skill 初稿</b><code>SKILL.md</code><span>正文 + 配套文件</span></div></div><div class=\"creation-bottom\"><span>保护场地 · 按玩法安排 HUD · 排除 3D 专属要求</span><div class=\"creation-actions\"><details class=\"p-pop\"><summary>查看完整 Prompt</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>完整生成 Prompt</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-reference\"><pre>目标：根据这款翻牌游戏的实际材料，创建一个以后开发其他小游戏时可以复用的紫色界面 Skill。\n上下文：source-game/ 是已完成的源码，source-game/docs/ 有截图，source-dialogue.md 是原始开发对话。reference/game-ui-frontend.md 是补充的界面参考。\n约束：先读取材料，再提炼实际存在的视觉规则和开发要求。输出到当前项目 purple-game-ui/，包含 SKILL.md 及确有必要的配套文件；区分可复用视觉与翻牌专属规则，不把翻牌布局固定到所有游戏。不要修改输入材料，也不要开发新游戏。现有输入足够时直接完成；缺少关键信息时明确指出。本次不调用 skill-creator。阅读补充参考，借鉴保护游戏场地、按玩法组织 HUD 和渐进展示信息的原则，不照搬 3D 专属要求。\n完成标准：检查 Skill 的 name、description、文件引用和内容依据；最终说明提炼了哪些可复用内容、哪些只适用于翻牌，以及尚未通过新任务验证的部分。说明采用了哪些参考建议，哪些不适用。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><button type=\"button\" data-creation-copy=\"reference\">复制完整 Prompt</button><span role=\"status\"></span></div></div></div></div>",
      "steps": [
        "官方说明与完整请求"
      ],
      "script": [
        "【操作提示｜完整口播与逐段动作见讲述页 demo-reference；按当前画面定位执行。】"
      ],
      "refs": [
        {
          "kind": "read",
          "group": "",
          "text": "原文出处",
          "url": "https://agentskills.io/skill-creation/best-practices#start-from-real-expertise"
        }
      ],
      "teaching": [],
      "source": "index.html#create-reference",
      "seconds": 30
    },
    {
      "id": "skill-inputs",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "review-defaults"
      },
      "segment": "简短对比",
      "label": "三份实际产物",
      "title": "安装并调用 Skill，看看游戏效果",
      "lead": "同一开发请求 · 各自只带对应 Skill · 比较实际结果",
      "html": "<div class=\"creation-compare\"><div class=\"comparison-cards\"><figure><figcaption>方案一</figcaption><a href=\"evidence/creation-comparison/direct/index.html\" target=\"_blank\" rel=\"noopener\"><img src=\"evidence/creation-comparison/direct/playing.png\" alt=\"方案一实际游戏\"></a><strong>方案一的历史结果</strong></figure><figure><figcaption>方案二</figcaption><a href=\"evidence/creation-comparison/creator/index.html\" target=\"_blank\" rel=\"noopener\"><img src=\"evidence/creation-comparison/creator/playing.png\" alt=\"方案二实际游戏\"></a><strong>用 skill-creator 辅助创建</strong></figure><figure><figcaption>方案三</figcaption><a href=\"evidence/creation-comparison/reference/index.html\" target=\"_blank\" rel=\"noopener\"><img src=\"evidence/creation-comparison/reference/playing.png\" alt=\"方案三实际游戏\"></a><strong>方案三的修改前结果</strong></figure></div><p class=\"comparison-boundary\">提前准备的游戏结果 · 现场任务仍在生成</p><nav class=\"creation-actions\"><a href=\"evidence/creation-comparison/index.html#skills\" target=\"_blank\" rel=\"noopener\">三种方案的游戏效果 ↗</a><details class=\"p-pop\"><summary>共用开发 Prompt</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>共用开发 Prompt</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-comparison\"><pre>使用当前工作区 .agents/skills/purple-game-ui/SKILL.md，从空项目做一个「60 秒躲避与收集」网页小游戏，沿用 Skill 的紫色界面风格。玩家用方向键或 WASD 移动，躲避障碍，收集物品得分；碰撞扣生命，时间到或生命耗尽时结算，可以重开。只做单一难度，界面不提供难度选择。游玩时界面只显示时间、得分和生命，重开按钮只出现在结算画面。用原生 HTML/CSS/JS，入口放在根目录 index.html。保持 Skill 文件不变，完成后告诉我用了哪些 Skill 文件。浏览器试玩留给我。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><button type=\"button\" data-creation-copy=\"comparison\">复制开发请求</button><span role=\"status\"></span></nav></div>",
      "steps": [
        "三份实际产物",
        "同题游戏结果"
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
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "size-problem"
      },
      "segment": "方案一迭代",
      "label": "方案一：风格保留了，场地却太小",
      "title": "方案一：风格保留了，场地却太小",
      "lead": "",
      "html": "<div class=\"size-case\"><div class=\"size-problem-layout\"><figure class=\"size-shot\"><img src=\"evidence/creation-comparison/direct/playing.png\" alt=\"方案一实际游戏截图：大页面中场地只占很小一块\"><svg viewBox=\"0 0 1280 920\" aria-hidden=\"true\"><rect x=\"417\" y=\"208\" width=\"115\" height=\"90\" rx=\"8\"/><path d=\"M535 250 H770\"/><text x=\"780\" y=\"260\">场地挤在这里</text></svg></figure><section><h3>先说清楚问题</h3><p>整体紫色风格已带过来</p><p>需要操作的场地却太小</p><strong>为什么会这样？</strong><nav class=\"size-nav\"><a href=\"evidence/creation-comparison/direct/index.html\" target=\"_blank\" rel=\"noopener\">打开游戏 ↗</a><a href=\"evidence/creation-comparison/direct/playing.png\" target=\"_blank\" rel=\"noopener\">查看完整截图 ↗</a></nav></section></div></div>",
      "steps": [
        "方案一：风格保留了，场地却太小"
      ],
      "script": [
        "【操作提示｜讲述页：本页口播读取 screen-plan.js 中对应的讲述段，使用页面上的“讲解全文”入口】"
      ],
      "teaching": [],
      "source": "index.html#skill-files",
      "seconds": 30
    },
    {
      "id": "size-request",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "size-diagnosis"
      },
      "segment": "方案一迭代",
      "label": "把问题交给 AI，先找主要原因",
      "title": "把问题交给 AI，先找主要原因",
      "lead": "",
      "html": "<div class=\"size-case\"><nav class=\"size-progress\" aria-label=\"方案一迭代步骤\"><a href=\"index.html?mode=slides#size-request\" aria-current=\"step\"><span>1</span>让 AI 找原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-cause\"><span>2</span>核对原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-revision\"><span>3</span>确定改法</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-check\"><span>4</span>重新验证</a></nav><div class=\"size-focus\"><p class=\"size-premise\">场地太小：结合截图、代码、Skill 和生成日志排查</p><div class=\"size-contrast\"><section><span class=\"size-label\">检查本次实现</span><h3>代码哪里出了错？</h3></section><span class=\"size-join\">＋</span><section><span class=\"size-label\">追查上游指导</span><h3>Skill 是否引导错了？</h3></section></div><p class=\"size-takeaway\">先定位主要原因，再决定改哪里</p><nav class=\"size-nav\"><details class=\"p-pop\"><summary>查看排查 Prompt · 可复制</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>查看排查 Prompt · 可复制</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-size-diagnosis\"><pre>目标：\n这款游戏的场地显示异常。请先分析主要问题出在哪里、为什么会出现，再提出修改建议。\n\n上下文：\n我们希望把已有小游戏的紫色视觉风格整理成 Skill，供后续不同玩法的小游戏复用，场地布局随玩法调整。这款游戏是使用该 Skill 生成的。\n异常截图已附上：&lt;实验目录&gt;/dodge-compare-layout-template-game/browser-review/playing.png\n完整游戏源码：&lt;实验目录&gt;/dodge-compare-layout-template-game/workspace/\n当时使用的完整 Skill：&lt;实验目录&gt;/dodge-compare-layout-template-game/workspace/.agents/skills/purple-game-ui/\n原始开发请求：&lt;实验目录&gt;/dodge-compare-layout-template-game/prompt.txt\n生成过程记录：&lt;实验目录&gt;/dodge-compare-layout-template-game/logs/events.jsonl\n\n约束：\n请独立检查材料，不预设问题属于哪一方。不要停留在能消除当前画面异常的代码修补：结合复用目标、Skill 的指导与模板、AI 的实际使用过程，判断主要问题及其依据；区分直接触发异常的原因和造成这类问题的上游原因，也不要为了寻找上游原因强行归因。\n本轮只分析，不修改游戏或 Skill，不重新生成游戏，不调用其他 agent。无法确认的地方明确说明。\n\n完成标准：\n先说明主要问题在哪里、为什么这样判断，用具体文件位置和生成记录支持结论，并区分已证实的事实与推断。\n再提出与主要原因对应的修改建议：哪些应在游戏实现中解决，哪些需要调整 Skill，优先改什么、为什么。我们的后续重点是迭代 Skill，并在新对话里用它重新生成游戏，因此 Skill 建议应适用于不同小游戏，避免只针对当前游戏打补丁；如无须改 Skill，也请说明。\n最后给出验证方法，检查新生成的游戏是否解决问题，以及 Skill 原有能力是否保留。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><a href=\"http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=0\" target=\"_blank\" rel=\"noopener\">打开排查日志 ↗</a></nav></div></div>",
      "steps": [
        "把问题交给 AI，先找主要原因"
      ],
      "script": [
        "【操作提示｜讲述页：本页口播读取 screen-plan.js 中对应的讲述段，使用页面上的“讲解全文”入口】"
      ],
      "teaching": [],
      "source": "index.html#size-request",
      "seconds": 30
    },
    {
      "id": "size-cause",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "size-diagnosis-source"
      },
      "segment": "方案一迭代",
      "label": "为什么这次要改 Skill",
      "title": "为什么这次要改 Skill",
      "lead": "",
      "html": "<div class=\"size-case\"><nav class=\"size-progress\" aria-label=\"方案一迭代步骤\"><a href=\"index.html?mode=slides#size-request\"><span>1</span>让 AI 找原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-cause\" aria-current=\"step\"><span>2</span>核对原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-revision\"><span>3</span>确定改法</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-check\"><span>4</span>重新验证</a></nav><div class=\"size-focus\"><div class=\"size-contrast\"><section><span class=\"size-label\">Skill 的通用要求</span><h3>所有玩法保留网格容器</h3><p>要求保留 <code>.board-wrap + .board</code></p></section><span class=\"size-join\" aria-hidden=\"true\"><svg viewBox=\"0 0 60 36\"><path d=\"M4 20 Q27 15 53 18 M43 7 L54 18 L42 29\"/></svg></span><section><span class=\"size-label\">本次生成的实现</span><h3>画布被挤进网格一列</h3><p><code>.board</code> 的四列网格样式<br>覆盖了本次新增的场地样式</p></section></div><p class=\"size-takeaway\">AI 的分析要回到实际材料中核对</p><nav class=\"size-nav\"><a href=\"evidence/creation-comparison/direct-skill.html#stage-contract\" target=\"_blank\" rel=\"noopener\">原 Skill 场地要求 ↗</a><a href=\"http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=1\" target=\"_blank\" rel=\"noopener\">排查回复 · 逐处查看 ↗</a><a href=\"evidence/creation-comparison/direct/styles.css\" target=\"_blank\" rel=\"noopener\">游戏样式 ↗</a></nav></div></div>",
      "steps": [
        "为什么这次要改 Skill"
      ],
      "script": [
        "【操作提示｜讲述页：本页口播读取 screen-plan.js 中对应的讲述段，使用页面上的“讲解全文”入口】"
      ],
      "teaching": [],
      "source": "index.html#size-cause",
      "seconds": 30
    },
    {
      "id": "size-revision",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "size-change"
      },
      "segment": "方案一迭代",
      "label": "保留视觉风格，布局随玩法调整",
      "title": "保留视觉风格，布局随玩法调整",
      "lead": "",
      "html": "<div class=\"size-case\"><nav class=\"size-progress\" aria-label=\"方案一迭代步骤\"><a href=\"index.html?mode=slides#size-request\"><span>1</span>让 AI 找原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-cause\"><span>2</span>核对原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-revision\" aria-current=\"step\"><span>3</span>确定改法</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-check\"><span>4</span>重新验证</a></nav><div class=\"size-focus\"><div class=\"size-contrast\"><section><span class=\"size-label\">原来的要求</span><h3>所有玩法沿用同一容器</h3><p>躲避游戏也要沿用<br>翻牌游戏的 <code>.board</code></p></section><span class=\"size-join\" aria-hidden=\"true\"><svg viewBox=\"0 0 60 36\"><path d=\"M4 20 Q27 15 53 18 M43 7 L54 18 L42 29\"/></svg></span><section class=\"size-choice p-box\"><span class=\"size-label\">修改后的要求</span><h3>按玩法选择场地布局</h3><p>网格玩法用 <code>.board</code><br>其他玩法用 <code>.stage</code>，尺寸按需确定</p></section></div><p class=\"size-takeaway\">修改 Skill，要考虑后续复用的场景</p><nav class=\"size-nav\"><details class=\"p-pop\"><summary>查看修改 Prompt · 可复制</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>查看修改 Prompt · 可复制</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-size-change\"><pre>目标：\n根据刚才的排查结果，修改 Skill，减少不同玩法复用时的布局问题。\n\n上下文：\n我们要复用的是紫色视觉风格，布局应随玩法调整。请重点解决 Skill 把网格场地当作通用结构的问题，并同步检查正文、模板和参考资料。\n原版已复制并提交为可回退基线：6a0163c8258b2b535a8e12e6794e9cd6aeb7738e。\n本轮唯一可修改的 Skill 副本目录：&lt;实验目录&gt;/iterate-scheme1-minimax-20261119-231343/workspace/purple-game-ui\n请修改这个副本，不要修改之前排查的原始实验目录。\n\n约束：\n只修改上述 Skill 副本，不修改已有游戏。不要把当前游戏的宽度、比例写成通用要求，也不要为这一个问题增加不必要的规则。保留原有网格玩法和其他无关能力。不调用其他 agent，不修改 Git 配置，不执行提交。\n\n完成标准：\n完成修改后，说明改了什么、为什么能减少同类问题，以及做了哪些检查。后续我们会另开对话，用原请求重新生成游戏，再验证其他玩法；本轮先不生成游戏。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><a href=\"evidence/size-iteration/revised-skill.html#stage-contract\" target=\"_blank\" rel=\"noopener\">修订后的 Skill ↗</a><a href=\"evidence/size-iteration/diff.html#L35\" target=\"_blank\" rel=\"noopener\">查看改动 ↗</a><a href=\"http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=3\" target=\"_blank\" rel=\"noopener\">AI 五条建议 ↗</a></nav></div></div>",
      "steps": [
        "保留视觉风格，布局随玩法调整"
      ],
      "script": [
        "【操作提示｜讲述页：本页口播读取 screen-plan.js 中对应的讲述段，使用页面上的“讲解全文”入口】"
      ],
      "teaching": [],
      "source": "index.html#size-revision",
      "seconds": 30
    },
    {
      "id": "size-check",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "size-revalidate"
      },
      "segment": "方案一迭代",
      "label": "用新对话验证修改后的 Skill",
      "title": "用新对话验证修改后的 Skill",
      "lead": "",
      "html": "<div class=\"size-case\"><nav class=\"size-progress\" aria-label=\"方案一迭代步骤\"><a href=\"index.html?mode=slides#size-request\"><span>1</span>让 AI 找原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-cause\"><span>2</span>核对原因</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-revision\"><span>3</span>确定改法</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#size-check\" aria-current=\"step\"><span>4</span>重新验证</a></nav><div class=\"size-focus\"><div class=\"size-contrast\"><section><span class=\"size-label\">验证条件</span><h3>相同需求，重新生成</h3><p>新对话只调用修订后的 Skill<br>不带入上一轮修复讨论</p></section><span class=\"size-join\" aria-hidden=\"true\"><svg viewBox=\"0 0 60 36\"><path d=\"M4 20 Q27 15 53 18 M43 7 L54 18 L42 29\"/></svg></span><section><span class=\"size-label\">本轮结果</span><h3>场地恢复正常</h3><p>同一窗口下，场地由约 99 × 74<br>变为 760 × 475（16∶10）</p></section></div><p class=\"size-takeaway\">Skill 改得有没有用，要通过实际调用来验证</p><nav class=\"size-nav\"><details class=\"p-pop\"><summary>查看开发 Prompt · 可复制</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>查看开发 Prompt · 可复制</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\" id=\"creation-prompt-size-validation\"><pre>使用当前工作区 .agents/skills/purple-game-ui/SKILL.md，从空项目做一个「60 秒躲避与收集」网页小游戏，沿用 Skill 的紫色界面风格。玩家用方向键或 WASD 移动，躲避障碍，收集物品得分；碰撞扣生命，时间到或生命耗尽时结算，可以重开。只做单一难度，界面不提供难度选择。游玩时界面只显示时间、得分和生命，重开按钮只出现在结算画面。用原生 HTML/CSS/JS，入口放在根目录 index.html。保持 Skill 文件不变，完成后告诉我用了哪些 Skill 文件。浏览器试玩留给我。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><a href=\"evidence/creation-comparison/direct/playing.png\" target=\"_blank\" rel=\"noopener\">修改前画面 ↗</a><a href=\"evidence/size-iteration/playing.png\" target=\"_blank\" rel=\"noopener\">修改后画面 ↗</a><a href=\"evidence/size-iteration/game/index.html\" target=\"_blank\" rel=\"noopener\">试玩新游戏 ↗</a><a href=\"http://127.0.0.1:4397/inspect/?topic=size-validation&position=0\" target=\"_blank\" rel=\"noopener\">验证请求 ↗</a><a href=\"evidence/size-iteration/game-styles.html#L472\" target=\"_blank\" rel=\"noopener\">本轮尺寸设置 ↗</a></nav></div></div>",
      "steps": [
        "用新对话验证修改后的 Skill"
      ],
      "script": [
        "【操作提示｜讲述页：本页口播读取 screen-plan.js 中对应的讲述段，使用页面上的“讲解全文”入口】"
      ],
      "teaching": [],
      "source": "index.html#size-check",
      "seconds": 30
    },
    {
      "id": "audio-goal",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "iteration-criteria"
      },
      "segment": "音效迭代",
      "label": "让后续游戏也带上声音反馈",
      "title": "让后续游戏也带上声音反馈",
      "lead": "",
      "html": "<div class=\"size-case audio-case\"><nav class=\"size-progress\" aria-label=\"声音优化步骤\"><a href=\"index.html?mode=slides#audio-goal\" aria-current=\"step\"><span>1</span>明确目标与请求</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#audio-result\"><span>2</span>新对话验证</a></nav><div class=\"size-focus\"><div class=\"size-contrast\"><section><span class=\"size-label\">这次增加</span><h3>收集、受伤有不同声音</h3><p>玩家可以关闭音效</p></section><span class=\"size-join\" aria-hidden=\"true\">＋</span><section class=\"size-choice p-box\"><span class=\"size-label\">继续保留</span><h3>原有布局与玩法</h3><p>开场确认 · 画面反馈<br>限时收集 · 结算重开</p></section></div><p class=\"size-takeaway\">先说清希望增加什么，以及怎样算做好</p><nav class=\"size-nav\"><details class=\"p-pop\"><summary>查看优化 Prompt · 四要素稿</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>查看优化 Prompt · 四要素稿</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p>四要素整理稿，尚未重新执行；本轮结果对应实际发送原文</p><div class=\"creation-prompt\"><pre>Goal｜目标\n继续优化刚才的 purple-game-ui Skill，让以后用它生成的小游戏也能带上最初紫色翻牌游戏的声音反馈。\n\nContext｜上下文\n沿用这段对话里的 Skill、参考游戏源码 source-game 和开发对话 source-dialogue.md。请检查原游戏的声音实现和用法，提取适合复用的部分。\n\nConstraints｜约束\n只修改当前工作区的 purple-game-ui，补充声音资源和使用说明。不同玩法按事件选择或适配音效，并提供声音开关；保留原有紫色视觉、布局建议、数据卡和结算浮层，不把翻牌玩法的事件和布局设成通用规则。这一步先不生成游戏，之后在新对话里调用验证。\n\nDone when｜完成标准\n声音资源和对应的使用说明已补进 Skill，并检查文件、接口与说明是否一致。说明从原游戏提取了什么、修改了哪些指导，以及检查结果和未验证的部分。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><details class=\"p-pop\"><summary>本轮实际发送 Prompt</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>本轮实际发送 Prompt · 可复制</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\"><pre>我们继续优化刚才这份 purple-game-ui Skill。我希望以后用它做小游戏时，也能带上最初紫色翻牌游戏里的声音反馈，而不只是视觉风格。\n\n请从之前提供的 source-game 和 source-dialogue.md 中检查声音的实现和用法，把适合复用的声音资源及使用说明补进当前 Skill。不同玩法可以按事件选择或适配音效，要能关闭声音；保留原有紫色视觉、布局建议、数据卡和结算浮层，不把翻牌玩法的事件和布局变成所有游戏的固定要求。\n\n只修改当前工作区的 purple-game-ui，完成后说明提取了什么、修改了哪些指导，并检查资源和说明是否对应。先不生成游戏，下一步我们会在新对话里调用它验证。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><a href=\"http://127.0.0.1:4397/inspect/?topic=audio-reference-author\" target=\"_blank\" rel=\"noopener\">打开优化日志 ↗</a></nav></div></div>",
      "steps": [
        "让后续游戏也带上声音反馈"
      ],
      "script": [
        "【操作提示｜完整口播与逐段动作见讲述页 iteration-criteria；按当前画面定位执行。】"
      ],
      "teaching": [],
      "source": "index.html#audio-goal",
      "seconds": 30
    },
    {
      "id": "audio-result",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "audio-regenerate"
      },
      "segment": "音效迭代",
      "label": "新增能力要生效，原有能力也要保留",
      "title": "新增能力要生效，原有能力也要保留",
      "lead": "",
      "html": "<div class=\"size-case audio-case\"><nav class=\"size-progress\" aria-label=\"声音优化步骤\"><a href=\"index.html?mode=slides#audio-goal\"><span>1</span>明确目标与请求</a><i aria-hidden=\"true\">→</i><a href=\"index.html?mode=slides#audio-result\" aria-current=\"step\"><span>2</span>新对话验证</a></nav><div class=\"size-focus\"><div class=\"audio-checks\"><section><h3>新对话调用</h3><p>修改后的 Skill<br>空项目生成游戏</p></section><section><h3>实际试听</h3><p>触发收集、受伤<br>关闭声音后再试</p></section><section><h3>检查原有体验</h3><p>开场、反馈、结算、重开<br>剩余问题继续修</p></section></div><p class=\"size-takeaway\">用真实任务检验新增能力，也检查原有功能</p><nav class=\"size-nav\"><details class=\"p-pop\"><summary>开发请求 · 可复制</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>开发请求 · 可复制</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"creation-prompt\"><pre>使用当前工作区 .agents/skills/purple-game-ui/SKILL.md，从空项目做一个「60 秒躲避与收集」网页小游戏，沿用 Skill 的紫色界面风格。玩家用方向键或 WASD 移动，躲避障碍，收集物品得分；碰撞扣生命，时间到或生命耗尽时结算，可以重开。只做单一难度，界面不提供难度选择。游玩时游戏读数只显示时间、得分和生命，重开按钮只出现在结算画面。\n\n同时保留这些体验：HUD 在桌面端靠场地侧边，窄屏合理排列且不遮挡场地；进入游戏先显示可确认的规则提醒，确认后开始计时；收集物品显示剩余存在时间的进度条或进度环，9 秒未收集会消失；收集、受伤有可见反馈。保留按钮按压与开场、结算浮层的视觉效果。\n\n用原生 HTML/CSS/JS，入口放在根目录 index.html。保持 Skill 文件不变，完成后告诉我用了哪些 Skill 文件。浏览器试玩留给我。\n</pre><button type=\"button\" data-creation-copy>复制完整 Prompt</button><span role=\"status\"></span></div></div></details><a href=\"evidence/audio-reference-iteration/with-audio/index.html\" target=\"_blank\" rel=\"noopener\">修改版游戏 ↗</a></nav></div></div>",
      "steps": [
        "新增能力要生效，原有能力也要保留"
      ],
      "script": [
        "【操作提示｜完整口播与逐段动作见讲述页 audio-verdict；按当前画面定位执行。】"
      ],
      "teaching": [],
      "source": "index.html#audio-result",
      "seconds": 30
    },
    {
      "id": "size-summary",
      "narration_source": {
        "file": "screen-plan.js",
        "screen": "size-summary"
      },
      "segment": "优化总结",
      "label": "一轮 Skill 优化怎么做",
      "title": "一轮 Skill 优化怎么做",
      "lead": "",
      "html": "<div class=\"size-case\"><div class=\"summary-layout\"><div class=\"summary-prep\">\n<section><h3>1　发现问题</h3><p>真实任务中观察，明确预期与差异</p></section><div class=\"summary-down\">↓</div>\n<section><h3>2　核对原因</h3><p>结合日志和产物，回查 Skill 指导</p></section><div class=\"summary-down\">↓</div>\n<section><h3>3　针对性修改</h3><p>筛选建议，修改相关指导与资源</p></section>\n</div><div class=\"size-join\" aria-hidden=\"true\"><svg viewBox=\"0 0 60 36\"><path d=\"M4 20 Q27 15 53 18 M43 7 L54 18 L42 29\"/></svg></div>\n<section class=\"summary-verify p-box\"><h3>4　独立验证</h3><p class=\"summary-condition\">新对话执行同一任务，对照修改前后</p>\n<div class=\"summary-check\"><b>问题有没有解决</b><p>重新执行原任务，检查原来的问题</p></div>\n<div class=\"summary-check\"><b>换个任务是否适用</b><p>用其他同类任务检验复用效果</p></div>\n<div class=\"summary-check\"><b>原有功能是否正常</b><p>检查之前的能力有没有受到影响</p></div>\n<p class=\"summary-return\">发现问题 → 回到原因与修改</p></section></div>\n<p class=\"summary-source\">参考方法，结合本案例归纳：<a href=\"https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#evaluation-and-iteration\" target=\"_blank\" rel=\"noopener\">Anthropic ↗</a> · <a href=\"https://agentskills.io/skill-creation/evaluating-skills\" target=\"_blank\" rel=\"noopener\">Agent Skills ↗</a></p></div>",
      "steps": [
        "一轮 Skill 优化怎么做"
      ],
      "script": [
        "【操作提示｜总结口播见讲述页 size-summary。】"
      ],
      "teaching": [],
      "source": "index.html#size-summary",
      "seconds": 30
    }
  ],
  "segments": [
    {
      "label": "生成方式",
      "seconds": 120
    },
    {
      "label": "简短对比",
      "seconds": 60
    },
    {
      "label": "方案一迭代",
      "seconds": 150
    },
    {
      "label": "音效迭代",
      "seconds": 60
    },
    {
      "label": "优化总结",
      "seconds": 30
    }
  ]
};

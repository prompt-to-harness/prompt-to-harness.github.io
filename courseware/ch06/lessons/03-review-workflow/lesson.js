window.lesson = {
  "title": "怎样判断这条 GSD 流程符合预期",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.03",
  "summary": "先立住验收标准，再讲钻牛角尖、X-Y problem 与四步排障；对照 6.2 留下的计划列出现场检查表，不预写结果，不改生产代码。",
  "prep": [
    "保持 6.2 建流后的工作区状态，准备好 .planning/ 与 docs/specs/ 供 p24 现场对照；开录前确认生产源码无改动。",
    "本节不发起新的代码修改请求，聚焦工作流人工验收标准与排障判断。"
  ],
  "scenes": [
    {
      "id": "p21",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "怎样判断这条 GSD 流程符合预期",
      "title": "怎样判断这条 GSD 流程符合预期？",
      "lead": "6.2 已生成工作流与计划；动手改代码前先踩一脚刹车，立一道人工验收闸门",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>6.1</b>定位 SDD 与 GSD</li><li class=\"is-done\"><b>6.2</b>构建工作流</li><li class=\"is-now\"><b>6.3</b>验收流程</li><li><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-flow\" style=\"--n:3;column-gap:38px;margin-top:18px\" data-reveal=\"1\"><div class=\"p-node\" data-role=\"ctx\"><span class=\"p-num\">6.2 已交出</span><h3>工作流与计划</h3><p>映射、验证矩阵与任务草稿</p></div><div class=\"p-node\" data-role=\"gate\"><span class=\"p-num\">6.3 · 当前闸门</span><h3>先验收流程本身</h3><p>不重做建流，也不急着改代码</p></div><div class=\"p-node\" data-role=\"us\" style=\"opacity:.72\"><span class=\"p-num\">6.4 合格后再进</span><h3>红绿实现与 UAT</h3><p>用验过的流程改产品</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">本节问题：怎样判断这条 GSD 流程符合预期？先验流程，再去实施</div>",
      "steps": [
        "本章位置",
        "建流与实施之间的人工闸门",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p21 第 1 步，指向章节地图上的 6.3；不切窗口】\n\n上一节我们把 CR-01 追加进了规格，也在当前仓库里建起了 GSD 工作流。看章节地图，这一节进入 6.3：验收流程。",
        "【操作提示｜推进第 2 步，指向流程中间的红色验收闸门；不切窗口】\n\n拿到刚生成的计划之后，人最容易犯的错，就是顺手直接去改生产代码。这一节我们踩一脚刹车，在 6.2 建流和 6.4 实施之间立一道人工闸门——不改代码，也不重新建一遍流。",
        "【操作提示｜推进第 3 步，指向下方本节问题；讲完进入 p22】\n\n我们要回答的问题是：怎样判断这条 GSD 流程符合预期？先从最常见的一个假象说起：框架提示阶段完成了，是不是就代表流程过关了？"
      ],
      "teaching": [],
      "source": "index.html#p21",
      "seconds": 90
    },
    {
      "id": "p22",
      "segment": "验收标准",
      "label": "框架标记完成了，是不是就等于流程通过了",
      "title": "框架标了完成，就等于流程通过吗？",
      "lead": "框架打出的完成标记只说明命令步骤走完，不能代替人对规格依据、验证去向和停止条件的实际观察。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"gap:32px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"agent\" style=\"margin-bottom:6px\">框架状态输出</span><q style=\"font-size:24px;margin-top:6px\">Phase 1 planning complete ✓<br><em>ready to execute</em></q><p style=\"margin-top:8px;font-size:18px;color:var(--p-muted)\">只证明命令步骤跑完了，不证明计划内容没跑偏</p></div><ul class=\"p-checks\"><li data-reveal=\"0\"><div><b>命令步骤已跑完</b><small>工作区里生成了阶段计划文件</small></div></li><li class=\"is-no\" data-reveal=\"1\"><div><b>原规格还是不是依据？</b><small>有没有偷偷另起一套需求，待人打开核对</small></div></li><li class=\"is-no\" data-reveal=\"1\"><div><b>四个案例都有验证去向吗？</b><small>断言落在可见行为还是私有细节，待人核对</small></div></li><li class=\"is-no\" data-reveal=\"1\"><div><b>停止条件与介入点清楚吗？</b><small>越界时能否当场停下，待人核对</small></div></li></ul></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:4px;padding:7px 18px;font-size:20px\">框架完成状态 ≠ 人工验收通过；不能拿一句绿字直接放行进入实施</div>",
      "steps": [
        "看框架的完成提示",
        "三件框架替不了的核对",
        "完成标记不等于放行"
      ],
      "script": [
        "【操作提示｜停留课件 p22 第 1 步，指向左侧紫色框中框架给出的完成提示与右侧第一条绿勾；不切窗口】\n\n看左边的提示框。当我们跑完规划命令，框架常常会打出一行很让人放心的绿字：Phase 1 planning complete。它能证明什么？只证明命令按步骤走完了。",
        "【操作提示｜推进第 2 步，指向右侧三条标红叉的待人工核对项；不切窗口】\n\n再看右边真正决定成败的三件事：docs/specs/ 还是不是需求依据？四个新增案例和原验收有没有落到具体的验证方式上？每一步的允许修改范围和停止条件清不清楚？这些，框架的完成标记一个都替不了。",
        "【操作提示｜推进第 3 步，指向底部结论条与官方链接；讲完进入 p23】\n\nOpenAI 官方最佳实践也反复强调：不能听智能体自称完成就放行，必须核对可验证的产出。所以完成标记绝不能单独当作进入实施或发布的批准。那人工验收这条流程时，具体要盯紧哪四件事？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方依据",
          "text": "Codex 官方文档：Best practices（验证与审查）",
          "url": "https://learn.chatgpt.com/guides/best-practices"
        }
      ],
      "teaching": [],
      "source": "index.html#p22",
      "seconds": 90
    },
    {
      "id": "p23",
      "segment": "验收标准",
      "label": "验收时到底要看哪几件事",
      "title": "验收工作流时，盯紧哪四件事？",
      "lead": "把验收标准收成四个象限：规格依据、验证去向、范围与停止条件、人工介入点。缺任何一项都不能进入 6.4。",
      "html": "<div class=\"p-quad\" style=\"--h:158px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><h3>01</h3><div class=\"p-quote\">规格依据未变</div><div class=\"p-then\"><code>docs/specs/</code> 仍是唯一源，CR-01 是追加而非替换</div></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><h3>02</h3><div class=\"p-quote\">验证去向齐全</div><div class=\"p-then\">原验收与四新案例全有落点，视觉体验明确归人工</div></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><h3>03</h3><div class=\"p-quote\">范围与停止条件</div><div class=\"p-then\">标明来源、允许文件与断言，生产代码修改保持串行</div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"3\"><h3>04</h3><div class=\"p-quote\">人工检查点可介入</div><div class=\"p-then\">任务间可停下抽查，绝不用「文档变长」冒充已核验</div></div></div>",
      "steps": [
        "01 规格依据未变",
        "02 验证去向齐全",
        "03 范围与停止条件",
        "04 人工检查点可介入"
      ],
      "script": [
        "【操作提示｜停留课件 p23 第 1 步，指向左上象限“01 依据”；不切窗口】\n\n我们把验收标准收成四个象限。第一看依据：已有五层规格必须仍是唯一需求源，CR-01 是追加上去的增量规则，没有被偷换成另一套新需求。",
        "【操作提示｜推进第 2 步，指向右上象限“02 去向”；不切窗口】\n\n第二看验证去向：第 4、5 章的原验收和四个新增案例都找得到去处；像排版、可读性这类单靠自动脚本判不准的体验，明确留给人工观察。",
        "【操作提示｜推进第 3 步，指向左下象限“03 边界”；不切窗口】\n\n第三看边界：每个任务都写清了需求来源、允许改动的文件、断言目标和停止条件，并且对生产代码的修改保持串行，不搞多路并发写文件。",
        "【操作提示｜推进第 4 步，指向右下象限“04 介入”；讲完进入 p24】\n\n第四看人工介入点：任务和任务之间人能停下来抽查，绝不用「生成的计划文档很长」来冒充已经核验。四条标准齐了，放到刚才 6.2 留下的工作流产物上，具体怎么逐项对照？"
      ],
      "teaching": [],
      "source": "index.html#p23",
      "seconds": 120
    },
    {
      "id": "p24",
      "segment": "验收标准",
      "label": "对照刚才建好的工作流，这些检查点能对上吗",
      "title": "对照 6.2 产物，现场逐项怎么查？",
      "lead": "打开 6.2 留下的映射、验证矩阵和阶段计划，按四行检查表逐项核对；本页只列检查动作与拦截信号，不预写某一次现场结果。",
      "html": "<div class=\"p-rec\" style=\"--rf:18px\"><div class=\"is-head\"><span>打开哪份产物</span><span>现场核对什么具体对象</span><span>出现什么信号就拦下</span></div><div class=\"is-fail\" data-reveal=\"0\"><div class=\"p-cell\"><code>.planning/</code> 映射与阶段文档</div><div class=\"p-cell\"><code>REQ-CR01</code> 与原编号能否逐条指回 <code>docs/specs/</code></div><div class=\"p-why\">脱离原规格另编一套新需求</div></div><div class=\"is-fail\" data-reveal=\"0\"><div class=\"p-cell\">验证去向矩阵</div><div class=\"p-cell\"><code>AC-CR01-1~4</code> 与原验收是否落到 <code>node:test</code> / 浏览器 / 人工</div><div class=\"p-why\">漏掉案例，或只靠覆盖率充数</div></div><div class=\"is-fail\" data-reveal=\"1\"><div class=\"p-cell\">Phase 1 任务计划</div><div class=\"p-cell\">是否 ≤ 3 个串行任务，允许文件与停止条件是否明确</div><div class=\"p-why\">夹带未批准依赖或跨端重构</div></div><div class=\"is-fail\" data-reveal=\"1\"><div class=\"p-cell\">工作区 <code>git status</code></div><div class=\"p-cell\">6.2 建流阶段是否守住了零生产代码改动</div><div class=\"p-why\">还没验流程就提前改了源码</div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px;font-size:19px\">只列通用核对单，不预写现场表格结果；全部过关后才放行到 6.4</div>",
      "steps": [
        "查规格映射与验证矩阵",
        "查任务边界与工作区状态",
        "过关后才放行到 6.4"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，指向核对表前两行：映射文件与验证矩阵；不切窗口】\n\n我们打开 6.2 留下的工作区文件逐行对表。先打开需求映射与阶段文档，看 REQ-CR01 和原有编号能不能一一对回 docs/specs/；一旦发现脱离原规格自造需求，当场拦下。再看验证矩阵，查 AC-CR01-1 到 4 以及原验收是不是分别落到了内置 node:test、浏览器回归和人工检查上。",
        "【操作提示｜推进第 2 步，指向核对表后两行：阶段计划与 git status；不切窗口】\n\n接着打开阶段计划，检查任务是不是控制在三个以内、有没有混入改写锁文件或跨客户端的越界动作；最后跑一眼 git status，确认到目前为止生产源码一行都没被提前改动。",
        "【操作提示｜推进第 3 步，指向底部说明条；讲完进入 p25】\n\n如果 6.2 的实跑尚未完成，我们就先把这张四行核对表立住，等拿到现场产物逐格打勾，绝不提前编造对照结果。不过，就算起点流程验过了，后面用 AI 推进时还是常会掉进几个典型大坑。先看课堂上最容易犯的第一个坑：钻牛角尖。"
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p25",
      "segment": "使用中的坑",
      "label": "什么是钻牛角尖，课堂上怎么认出它",
      "title": "什么是钻牛角尖，怎么当场认出它？",
      "lead": "第一种高频陷阱：方向一开始就偏了，却在同一条无效路径上连续追加指令硬推，导致上下文越滚越长、问题还在原地。",
      "html": "<div class=\"p-comic\" style=\"height:292px\"><div class=\"p-panel\" data-reveal=\"0\" style=\"padding:48px 16px 14px\"><span class=\"p-cap\">1 · 起点走偏</span><div class=\"p-bubble is-ai\" style=\"font-size:19px\">我已帮你重新规划了一套 12 步的新产品需求！</div><div class=\"p-avatar is-ai\" style=\"width:62px;height:62px\">AI</div></div><div class=\"p-panel\" data-reveal=\"1\" style=\"padding:48px 16px 14px\"><span class=\"p-cap\">2 · 连续打补丁硬推</span><div class=\"p-bubble\" style=\"font-size:19px\">别改第 3 条，再补两条限制重试一次！</div><div class=\"p-row\"><div class=\"p-avatar\" style=\"width:62px;height:62px\">我们</div><div class=\"p-bubble is-ai\" style=\"font-size:17px\">收到，又加了 4 个新文件…</div></div></div><div class=\"p-panel\" data-reveal=\"2\" style=\"padding:48px 16px 14px\"><span class=\"p-cap\">3 · 第 6 轮仍在原地</span><div class=\"p-term\" style=\"font-size:15.5px;margin-bottom:4px;padding:6px 12px\">context: 78%<br><span class=\"bad\">规格被冲乱 · 原问题未解</span></div><div class=\"p-row\"><div class=\"p-avatar\" style=\"width:62px;height:62px\">我们</div><div class=\"p-bubble\" style=\"font-size:18px\">路错了！停下换问题！</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:6px;padding:7px 18px;font-size:19.5px\">识别信号：上下文越来越长、补丁越打越多、核心偏离没变 → <b>立刻喊停，回原规格重开</b></div>",
      "steps": [
        "第 1 格：起点已经偏离原规格",
        "第 2 格：顺着错路连续补指令",
        "第 3 格：上下文膨胀，果断喊停"
      ],
      "script": [
        "【操作提示｜停留课件 p25 第 1 步，指向三格漫画的第一格；不切窗口】\n\n看这组三格漫画。第一格，假设一开始方向就偏了——智能体没有接手原规格，反而重起炉灶写了一套十二步的新需求。",
        "【操作提示｜推进第 2 步，指向第二格；不切窗口】\n\n到了第二格，人没有喊停重来，而是在这条错路上连续打补丁：「别改第三条，再加两条限制重试一次！」结果它顺着错路又补出四个新文件。",
        "【操作提示｜推进第 3 步，指向第三格终端状态与底部结论；讲完进入 p26】\n\n等到第三格，对话到了第六轮，上下文占了快八成，规格越改越乱，最初的问题却还在原地。这就是钻牛角尖。一旦发现方向本身错了，正确的判断是立刻停下来换问题或重开分支——6.5 我们还会看到工具里的对话分支按钮，但比按钮更重要是人先认出「该停了」。再看第二个高频坑：什么是 X-Y problem？"
      ],
      "teaching": [],
      "source": "index.html#p25",
      "seconds": 90
    },
    {
      "id": "p26",
      "segment": "使用中的坑",
      "label": "什么是 X-Y problem，它和 CR-01 有什么关系",
      "title": "什么是 X-Y problem，和 CR-01 有何关系？",
      "lead": "第二种高频陷阱：把自己临时猜想的实现手段 Y 当成需求去追问 AI，忘了真正要交付给用户的产品行为 X。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;gap:18px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>真正要解决的问题 X</h3><span class=\"p-tag\" data-role=\"ok\">产品目标</span></div><p class=\"p-big\" style=\"font-size:23px\">输入变非法时，用户一眼认出当前图是「上次有效结果」</p><p class=\"p-sub\" style=\"margin-top:8px\">属于可观察行为，由 <code>AC-CR01-1~4</code> 直接验收</p></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b><span>别拿手段<br>代替目标</span></div><div class=\"p-box is-dashed\" data-role=\"agent\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>预先想好的手段 Y</h3><span class=\"p-tag\" data-role=\"agent\">局部猜想</span></div><p class=\"p-big\" style=\"font-size:23px\">追问「怎么在 store 里加 <code>isStaleBanner</code> 字段或新类名」</p><p class=\"p-sub\" style=\"margin-top:8px\">手段也许有用，但写成需求就会绑死实现、漏测真实体验</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">验收计划时重点看：断言在测<b>用户看得见的行为 X</b>，还是在测某个<b>预设手段 Y</b></div>",
      "steps": [
        "真正要解决的产品问题 X",
        "预先想好的实现手段 Y",
        "验收断言必须锚定 X"
      ],
      "script": [
        "【操作提示｜停留课件 p26 第 1 步，指向左侧“真正要解决的问题 X”；不切窗口】\n\n拿本章的 CR-01 来说，真正要解决的产品问题 X 很清楚：当输入变非法时，用户一眼能看出眼前的图是上次有效结果，不被报错误导。",
        "【操作提示｜推进第 2 步，指向右侧“预先想好的手段 Y”；不切窗口】\n\n但很多人一开口提要求，就把自己脑子里临时想到的实现手段 Y 当成了目标——比如追着智能体问：「怎么在状态仓库里加一个 isStaleBanner 字段，或者怎么写某个样式类名？」",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p26a】\n\n加字段也许是个可用手段，但它绝不是需求本身。验收工作流时一定要看清楚：计划里的断言是在验证用户看得见的行为 X，还是被锁死在了某个预设手段 Y 上？为什么工程社区这么警惕 X-Y problem？我们看一眼它的经典定义。"
      ],
      "teaching": [],
      "source": "index.html#p26",
      "seconds": 90
    },
    {
      "id": "p26a",
      "segment": "使用中的坑",
      "layout": "evidence-scene",
      "label": "X-Y problem：为什么别拿手段代替问题",
      "title": "X-Y problem：为什么别拿手段代替问题？",
      "lead": "打开 xyproblem.info 的经典定义：当你只拿着预设手段 Y 去提问时，AI 会顺从地把 Y 越写越复杂，却没人替你守住真正的目标 X。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:340px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>xyproblem.info · The XY Problem — What is it?</div><a href=\"external/xyproblem-definition.png\"><img src=\"external/xyproblem-definition.png\" alt=\"xyproblem.info 网站对 The XY Problem 的定义与六步过程截图\"></a></div><p class=\"p-shot-note\" style=\"font-size:19px\" data-reveal=\"1\">向 AI 提问或审计划时先把最终可观察目标 X 摆在最前面，别让 AI 顺着预设手段 Y 盲目写到底</p></div>",
      "steps": [
        "看 xyproblem.info 六步拆解",
        "对 AI 更要先亮明目标 X"
      ],
      "script": [
        "【操作提示｜停留课件 p26a 第 1 步，指向 xyproblem.info 截图中的定义与六步列表；不切窗口】\n\n这是 xyproblem.info 上的原文定义。你看那六步拆解得多准：用户本来想解决 X，自己猜了一个生涩的绕弯手段 Y，却跑去问别人怎么实现 Y；帮忙的人绕了半天才发现，Y 连 X 的合适解法都算不上。",
        "【操作提示｜推进第 2 步，指向下方说明条与页底原文链接；讲完进入 p27】\n\n放在人类协作里，对方还会反问你一句「你到底想干什么」；但放在 AI 编程里，模型往往特别顺从——你问 Y，它就闷头帮你把 Y 写得严丝合缝，根本没人替你回头核对 X。那工作流或执行真出了问题时，不硬推、不绕弯，正确的排障顺序该怎么走？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "社区共识",
          "text": "The XY Problem 原文说明",
          "url": "https://xyproblem.info/"
        }
      ],
      "teaching": [],
      "source": "index.html#p26a",
      "seconds": 60
    },
    {
      "id": "p27",
      "segment": "使用中的坑",
      "label": "遇到问题，应该先做什么",
      "title": "遇到问题时，硬推和排障差在哪？",
      "lead": "出问题时不要连续加指令硬推，也不要先改代码再倒改规格凑数；按「先复现 → 缩小范围 → 对照已有规格 → 分流修改」四步走。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:336px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 336\" width=\"1118\" height=\"336\"><defs><marker id=\"rd-arrow-troubleshoot-loop\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"12\" width=\"1102\" height=\"126\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"26\" y=\"42\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"22\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"start\">错误路径：在无效方向连续硬推</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"58\" width=\"210\" height=\"56\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"131\" y=\"92\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">看到报错或偏离</text></g><g data-reveal=\"0\"><path d=\"M240 86L286 86\" stroke=\"#D9481C\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"0\"><rect x=\"290\" y=\"58\" width=\"240\" height=\"56\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"410\" y=\"92\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">连续加指令硬推</text></g><g data-reveal=\"0\"><path d=\"M534 86L580 86\" stroke=\"#D9481C\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"0\"><rect x=\"584\" y=\"58\" width=\"250\" height=\"56\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"709\" y=\"92\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">先改代码再改规格凑数</text></g><g data-reveal=\"0\"><path d=\"M838 86L882 86\" stroke=\"#D9481C\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"0\"><rect x=\"886\" y=\"58\" width=\"206\" height=\"56\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"989\" y=\"84\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">上下文膨胀</text></g><g data-reveal=\"0\"><text x=\"989\" y=\"105\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">↺ 仍在原地打转</text></g><g data-reveal=\"1\"><rect x=\"8\" y=\"158\" width=\"1102\" height=\"168\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"26\" y=\"190\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"22\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">正确顺序：先看清差距，再决定动哪一层</text></g><g data-reveal=\"1\"><rect x=\"26\" y=\"210\" width=\"196\" height=\"88\" rx=\"10\" fill=\"#E8EAEE\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"42\" y=\"240\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">1. 先复现</text></g><g data-reveal=\"1\"><text x=\"42\" y=\"268\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">固定输入与现象</text></g><g data-reveal=\"1\"><path d=\"M226 254L266 254\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"1\"><rect x=\"270\" y=\"210\" width=\"210\" height=\"88\" rx=\"10\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"286\" y=\"240\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#0B6B5F\" text-anchor=\"start\">2. 缩小范围</text></g><g data-reveal=\"1\"><text x=\"286\" y=\"268\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">定位哪一步偏离</text></g><g data-reveal=\"1\"><path d=\"M484 254L524 254\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"1\"><rect x=\"528\" y=\"210\" width=\"232\" height=\"88\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"544\" y=\"240\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">3. 对照已有规格</text></g><g data-reveal=\"1\"><text x=\"544\" y=\"268\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">查 docs/specs/ 已批准项</text></g><g data-reveal=\"2\"><path d=\"M764 232L822 212\" stroke=\"#5A51D1\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"2\"><path d=\"M764 276L822 290\" stroke=\"#15803D\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-troubleshoot-loop)\"/></g><g data-reveal=\"2\"><rect x=\"826\" y=\"178\" width=\"266\" height=\"62\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"842\" y=\"204\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#2A2380\" text-anchor=\"start\">4a. 计划漏检或越界</text></g><g data-reveal=\"2\"><text x=\"842\" y=\"228\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">→ 修 .planning/ 工作流</text></g><g data-reveal=\"2\"><rect x=\"826\" y=\"252\" width=\"266\" height=\"62\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"842\" y=\"278\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#15803D\" text-anchor=\"start\">4b. 实现偏离已定规则</text></g><g data-reveal=\"2\"><text x=\"842\" y=\"302\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">→ 6.4 做最小串行修改</text></g></svg><p class=\"source-note\">课程自绘：对照原地连续硬推死循环与先复现、缩小范围、对照规格再分流修改的四步法</p></div>",
      "steps": [
        "上排：连续硬推的死循环",
        "下排：复现、缩范围、对规格",
        "右侧分流：修工作流还是修实现"
      ],
      "script": [
        "【操作提示｜停留课件 p27 第 1 步，指向示意图上排红色虚线死循环；不切窗口】\n\n看这张上下对比图。上面红色虚线框就是我们要避开的死循环：一看到报错或结果不对，凭感觉连续加指令硬推，甚至先顺手改了生产代码，再倒回去改规格凑数，最后上下文膨胀，还在原地打转。",
        "【操作提示｜推进第 2 步，指向下排实线前三个节点：先复现、缩小范围、对照已有规格；不切窗口】\n\n下面才是稳当的四步顺序：第一步先用固定输入稳定复现差距；第二步缩小范围，定位到底是哪一环偏了；第三步打开 docs/specs/，对照已经批准的规则看清真差距。",
        "【操作提示｜推进第 3 步，指向右下角 4a 与 4b 两条分流出口；讲完进入 p28】\n\n看清差距之后再分流：如果是工作流漏了检查项或者任务越了界，就走上面那支修 .planning/ 计划；如果计划没问题、是实现偏离了既定规则，才留到 6.4 做最小串行修改。除了硬推和绕弯，还有哪几种做法表面看着挺热闹，骨子里已经走偏了？"
      ],
      "teaching": [],
      "source": "index.html#p27",
      "seconds": 90
    },
    {
      "id": "p28",
      "segment": "使用中的坑",
      "label": "哪些做法看似有进展，实则已经走偏",
      "title": "哪些做法看似有进展，实则已走偏？",
      "lead": "这四类做法表面上都在往前跑，但都会掏空后续验证的可靠性；在进入 6.4 实施前一次拦住。",
      "html": "<div class=\"p-rec\" style=\"--rf:18px\"><div class=\"is-head\"><span>表面看起来像进展</span><span>背后漏掉了什么</span><span>在 6.3 怎么拦住</span></div><div class=\"is-fail\" data-reveal=\"0\"><div class=\"p-cell\">还没核对映射就往下派发</div><div class=\"p-cell\">输入依据可能已偏离原五层规格</div><div class=\"p-why\">先逐条核完编号映射再放行</div></div><div class=\"is-fail\" data-reveal=\"1\"><div class=\"p-cell\">先改实现，再补必过的测试</div><div class=\"p-cell\">断言没见过失败，测不出真差距</div><div class=\"p-why\">强制 6.4 失败测试先行</div></div><div class=\"is-fail\" data-reveal=\"2\"><div class=\"p-cell\">把「流程跑完」当成「结果对了」</div><div class=\"p-cell\">命令退出码为 0 不代表提示可读</div><div class=\"p-why\">保留任务间检查与人工 UAT</div></div><div class=\"is-fail\" data-reveal=\"3\"><div class=\"p-cell\">拿测试个数或覆盖率当证据</div><div class=\"p-cell\">数字好看仍可能漏掉双错恢复边界</div><div class=\"p-why\">只认四个固定案例与原验收</div></div></div>",
      "steps": [
        "没核映射就派发",
        "先改代码再补测试",
        "把跑完当成结果对",
        "拿数量或覆盖率充数"
      ],
      "script": [
        "【操作提示｜停留课件 p28 第 1 步，指向警示表第一行“还没核验映射就派发”；不切窗口】\n\n这四条大纲里的常见反模式，我们在进 6.4 之前集中立住，后面实施时不再重讲定义。第一条：还没核对规格映射，就急着往下派发任务——起点偏一寸，后面全白跑。",
        "【操作提示｜推进第 2 步，指向第二行“先改实现再补必过测试”；不切窗口】\n\n第二条：先把代码改完，再顺着刚写好的代码补一条永远能绿的测试——这就彻底废掉了下一节「失败测试先行」的校验能力。",
        "【操作提示｜推进第 3 步，指向第三行“把流程跑完当成结果对了”；不切窗口】\n\n第三条：把「工作流步骤跑完」直接等同于「产品结果做对了」。",
        "【操作提示｜推进第 4 步，指向第四行“拿测试个数或覆盖率充当证据”；讲完进入 p29】\n\n第四条：拿测试数量变多、或者覆盖率百分比好看，去代替对四个具体案例的行为验证。把这四条挡在门外，我们再来做本节的学员判断。"
      ],
      "teaching": [],
      "source": "index.html#p28",
      "seconds": 120
    },
    {
      "id": "p29",
      "segment": "判断与自检",
      "label": "计划写全了、框架也显示完成了，是不是就可以直接发布",
      "title": "计划核完了、状态也绿了，能直接发布吗？",
      "lead": "计划写全了、框架也显示规划完成了，请对比「已拿到的」与「6.4 才要做的」，判断现在能不能直接发布。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:10px 18px\"><div class=\"p-head\"><h3 style=\"font-size:23px\">学员判断：计划核对通过、框架状态也显示完成，现在能直接发布吗？</h3><span class=\"p-tag\" data-role=\"us\">先想一步</span></div></div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:10px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ok\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3 style=\"font-size:23px\">6.3 已经拿到的</h3><span class=\"p-tag\" data-role=\"ok\">施工通行证</span></div><p style=\"font-size:19px\">确认工作流仍以 <code>docs/specs/</code> 为依据、验证去向齐全、排障顺序清楚</p></div><div class=\"p-box is-dashed\" data-role=\"gate\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3 style=\"font-size:23px\">6.4 还没发生的</h3><span class=\"p-tag\" data-role=\"gate\">交付硬证据</span></div><p style=\"font-size:19px\">失败测试尚未报红、最小实现尚未落盘、人工 UAT 尚未走过真实界面</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\"><b>不可以发布</b>：本节发出的是进入 6.4 实施的通行证，尚未实施的计划不等于 CR-01 已完成</div>",
      "steps": [
        "先做判断",
        "对比施工通行证与交付硬证据",
        "不可直接发布"
      ],
      "script": [
        "【操作提示｜停留课件 p29 第 1 步，指向判断问题框；停顿数秒；不切窗口】\n\n现在请大家判断：计划写全了，我们也按四项标准核对过了，框架状态也显示规划完成——是不是现在就可以直接宣布通过、准备发布了？",
        "【操作提示｜推进第 2 步，指向左右两栏“本节已拿到”与“6.4 才补齐”；不切窗口】\n\n左右一对比就一目了然：当然不可以。左边是我们刚拿到的：一条经过人工核对的工作流和一套避坑准则；而右边真正证明产品改对的三样硬证据——因正确原因失败的测试、最小串行实现、人在真实界面上的 UAT——到现在一件都还没发生。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p30】\n\n所以 6.3 发出的只是进入 6.4 施工的通行证，绝不是产品发布章。接下来暂停几秒，做一道排障反应自检。"
      ],
      "teaching": [],
      "source": "index.html#p29",
      "seconds": 90
    },
    {
      "id": "p30",
      "segment": "判断与自检",
      "label": "工作流跑到一半失败了，这两种做法哪样对",
      "title": "工作流跑到一半报错了，怎么应对？",
      "lead": "工作流执行中途遇到报错或偏离时，请先暂停比较下面两种应对方式，再看盖章结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先比较两种做法，自己选定再往下看</span><div class=\"p-quiz\" style=\"margin-top:12px\"><div class=\"p-q\" data-role=\"gate\"><div class=\"p-say\">做法 A：留在原长对话里继续追加更细的指令，硬逼它给出一个完成标记</div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 钻牛角尖</span><div style=\"margin-top:8px;font-size:19px;color:#A8350F\" data-reveal=\"1\">在错误路径上连续打补丁只会污染上下文，拿到的完成标记也不可信</div></div><div class=\"p-q\" data-role=\"ok\"><div class=\"p-say\">做法 B：先复现并缩小范围，打开 <code>docs/specs/</code> 对清差距，再决定修流程还是修代码</div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 四步排障</span><div style=\"margin-top:8px;font-size:19px;color:#11652F\" data-reveal=\"2\">先锚定已批准规格看清真差距，改哪一层都有明确依据</div></div></div>",
      "steps": [
        "暂停比较两种做法",
        "做法 A：钻牛角尖",
        "做法 B：四步排障"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步，指向暂停标签与两张自检题卡；停顿数秒；不切窗口】\n\n假如工作流跑到一半报错停住了，眼前有两种应对方式。请先暂停几秒，自己选出合理的那一种。",
        "【操作提示｜推进第 2 步，指向左侧题卡的红色印章与解析；不切窗口】\n\n做法 A 是趁热打铁，在同一段长对话里继续追加更碎的指令，硬逼它吐出一个完成标记。这就掉进了刚才漫画里的钻牛角尖陷阱。",
        "【操作提示｜推进第 3 步，指向右侧题卡的绿色印章与解析；讲完进入 p31】\n\n做法 B 是先停下来复现现象、缩小范围，打开已有规格对清楚差距，再决定是修工作流计划还是修代码实现。这才是可控的工程动作。最后我们收束 6.3，迈进 6.4。"
      ],
      "teaching": [],
      "source": "index.html#p30",
      "seconds": 90
    },
    {
      "id": "p31",
      "segment": "小结",
      "label": "带着什么进入 6.4",
      "title": "带着什么进入 6.4？",
      "lead": "本节不产出生产代码。收住已验收的工作流、四项观察点与排障避坑共识，进入 6.4 用失败测试先行与人工 UAT 完成 CR-01。",
      "html": "<div class=\"p-sketch\"><div class=\"p-ribbon\" data-reveal=\"0\">6.3 小结 · 流程先过人工关，排障不往死胡同推</div><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个核心判断</h3><div class=\"p-star\" style=\"width:220px;font-size:22px\">框架显示完成<br>只是走完步骤<br>不能代替观察</div></div><div data-reveal=\"1\"><h3>本节留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\" style=\"font-size:21px\">经四象限核对的工作流</li><li class=\"is-pass\" style=\"font-size:21px\">钻牛角尖与 X-Y 避坑判断</li><li class=\"is-pass\" style=\"font-size:21px\">复现→缩范围→对规格排障法</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.4 完成 CR-01</h3><p>先写失败测试，再做最小实现与回归，最后走一遍人工 UAT</p></div></div></div>",
      "steps": [
        "一个核心判断",
        "本节留下的",
        "下一节 6.4"
      ],
      "script": [
        "【操作提示｜停留课件 p31 第 1 步，指向彩带标题与左侧五角星核心判断；不切窗口】\n\n回到本节开头的问题：框架显示完成，绝不等于可以直接发布；工作流必须经过人对规格依据、验证去向和停止条件的实际观察才算合格。",
        "【操作提示｜推进第 2 步，指向中间“本节留下的”三项清单；不切窗口】\n\n离开 6.3，我们手里握着三条东西：经过验收的工作流、四项必查的观察点，以及钻牛角尖、X-Y problem 和四步排障的避坑共识。",
        "【操作提示｜推进第 3 步，指向右侧下一节卡片】\n\n下一节 6.4，我们就带着这条已验收的工作流真刀真枪干活：先写一条因正确原因失败的测试，再做最小实现与回归，最后由人亲自走一遍 UAT。"
      ],
      "teaching": [],
      "source": "index.html#p31",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "验收标准",
      "seconds": 300
    },
    {
      "label": "使用中的坑",
      "seconds": 450
    },
    {
      "label": "判断与自检",
      "seconds": 180
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};

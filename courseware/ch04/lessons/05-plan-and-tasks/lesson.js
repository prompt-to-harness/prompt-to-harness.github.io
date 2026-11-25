window.lesson = {
  "title": "都定清楚了，为什么不一次写完",
  "chapter": "第 4 章 · SDD",
  "section": "04.05",
  "summary": "比较两种改法并写下计划，按依赖拆成可检查的任务，留下 Plan、Tasks 和完整追踪，提交规格基线，交给第 5 章。",
  "scenes": [
    {
      "id": "p49",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "都定清楚了，为什么不一次写完",
      "title": "为什么不一次写完？",
      "lead": "上一节留下 Spec、Acceptance 和固定素材；本节写 Plan 与 Tasks 并提交基线",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>4.1</b>接手工程</li><li class=\"is-done\"><b>4.2</b>形成 Brief</li><li class=\"is-done\"><b>4.3</b>批准 Spec</li><li class=\"is-done\"><b>4.4</b>写验收</li><li class=\"is-now\"><b>4.5</b>拆任务</li><li><b>4.6</b>MCP 工具</li></ol><div class=\"ch4-layers\" data-reveal=\"1\"><div class=\"ch4-layer is-done\"><div class=\"ch4-layer-top\"><h3>Brief</h3><span class=\"ch4-layer-state\">✓</span></div><code>BRIEF.md</code></div><div class=\"ch4-layer is-done\"><div class=\"ch4-layer-top\"><h3>Spec</h3><span class=\"ch4-layer-state\">✓</span></div><code>SPEC.md</code></div><div class=\"ch4-layer is-done\"><div class=\"ch4-layer-top\"><h3>Acceptance</h3><span class=\"ch4-layer-state\">✓</span></div><code>ACCEPTANCE.md</code></div><div class=\"ch4-layer is-lit\"><div class=\"ch4-layer-top\"><h3>Plan</h3><span class=\"ch4-layer-state\">本节</span></div><code>PLAN.md</code></div><div class=\"ch4-layer is-todo\"><div class=\"ch4-layer-top\"><h3>Tasks</h3><span class=\"ch4-layer-state\">后续</span></div><code>TASKS.md</code></div></div><div class=\"ch4-handoff\" data-reveal=\"2\"><div class=\"p-box is-soft\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">上一节已就位</span><h3>规则、验收与固定素材</h3><p>打开自己的 <code>SPEC.md</code>、<code>ACCEPTANCE.md</code> 与 <code>docs/specs/fixtures/</code></p></div><div class=\"ch4-arrow\" aria-hidden=\"true\"><i>→</i></div><div class=\"p-box\" data-role=\"us\"><span class=\"p-tag\" data-role=\"us\">本节留下</span><ul class=\"ch4-mini-list\"><li>有源码依据的 <code>PLAN.md</code> 与拆好边界的 <code>TASKS.md</code></li><li>集中维护的 <code>REQ ↔ AC ↔ TASK</code> 对应关系</li><li>单独提交规格基线，不改生产代码</li></ul></div></div>",
      "steps": [
        "本章位置",
        "这一节补哪一层",
        "从自己的规格和验收开始"
      ],
      "script": [
        "【操作提示｜停留课件 p49 第 1 步，指向章节地图上的 4.5；不切窗口】\n\n前面几节，我们留下了已经审过的 SPEC.md、ACCEPTANCE.md，以及固定素材。",
        "【操作提示｜推进第 2 步，指向锚点图里实心的 Plan】\n\n这一节补最后两层：Plan、Task。它回答的是，在这个仓库里怎么改。Tasks 这一层，拆任务时再点亮。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p50】\n\n每个人的编号和案例条数可能不同，请打开自己的 Spec、Acceptance 和固定素材。这一节要留下 PLAN.md、TASKS.md，并把规格和素材作为基线提交。都定清楚了，为什么不一次写完？我们从大家常会想到的做法看起。"
      ],
      "teaching": [],
      "source": "index.html#p49",
      "seconds": 90
    },
    {
      "id": "p50",
      "segment": "为什么写计划",
      "label": "为什么不能拼成一个长请求",
      "title": "为什么不能拼成一个长请求？",
      "lead": "不是不能发请求，而是单靠一个很长的请求不够稳：改动面大、约束易被冲淡，事后也不好定位回退",
      "html": "<div class=\"ch4-split\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>拼成一个长请求</h3><span class=\"p-tag\" data-role=\"gate\">改动面太大</span></div><div class=\"ch4-tangle\"><span>差异计算</span><span>合并图数据</span><span>双输入状态</span><span>筛选与摘要</span></div><div class=\"ch4-risk-pill\" data-reveal=\"1\">任务一长，上下文可能被压缩——写在请求里的约束容易丢失或冲淡，一处跑偏难以定位检查</div></div><div class=\"ch4-arrow\" data-reveal=\"2\"><span>改用</span><i>→</i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>先定方案，再拆任务</h3><span class=\"p-tag\" data-role=\"us\">可核对</span></div><ol class=\"ch4-step-list\"><li><span><b>看清改哪里</b>：先核对本次会碰到的入口与影响面</span></li><li><span><b>分段验对错</b>：每完成一块，就拿对应验收核对</span></li><li><span><b>留下检查点</b>：单次改动范围小，局部不对随时回退</span></li></ol></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">以 <b>Brief 里已核实的仓库事实</b>为起点，不重复走一遍从输入到渲染的源码导览</div>",
      "steps": [
        "一个长请求",
        "约束可能被冲淡",
        "还要看清改哪里"
      ],
      "script": [
        "【操作提示｜停留课件 p50 第 1 步，指向左侧“拼成一个长请求”及四个耦合模块】\n\n规则和案例都齐了，最容易想到的做法，是把它们拼成一个长请求，一次把实现做完。",
        "【操作提示｜推进第 2 步，指向左侧底部的红色风险提示条】\n\n不是不能发请求，而是单靠一个很长的请求不够稳。任务一长，过程中就可能自动压缩上下文，写在请求里的约束有可能丢失或被冲淡。后面的行为会变得不稳定，事后也不容易检查。这是可能出现的情况，不是每次都会发生。",
        "【操作提示｜推进第 3 步，指向右侧“先定方案，再拆任务”三条和底部横条；讲完进入 p51】\n\n实现也不是把规则和案例再抄一遍。这次改动会碰到差异计算、图数据、输入状态和筛选摘要，还要看清改哪里、怎样验证、怎样留下检查点。起点是已经写进 Brief 的仓库事实，不再重复走一遍从输入到渲染的链路。"
      ],
      "teaching": [],
      "source": "index.html#p50",
      "seconds": 90
    },
    {
      "id": "p51",
      "segment": "为什么写计划",
      "label": "两种改法，该怎么选",
      "title": "两种改法，该怎么选？",
      "lead": "结合已有调用关系比较两种改法，再写下计划；没有源码依据，就不要把路径和命令写进计划",
      "html": "<div class=\"ch4-2col\" data-reveal=\"0\"><div class=\"p-box is-dashed ch4-opt\" data-role=\"gate\"><div class=\"p-head\"><h3>改法一 · 界面里直比直画</h3><span class=\"p-tag\" data-role=\"gate\">算与画绑死</span></div><div class=\"ch4-pipe\"><span class=\"ch4-pipe-node\">Before / After</span><span class=\"ch4-pipe-arr\">→</span><span class=\"ch4-pipe-node is-bad\">UI 内直接比较 ＋ 生成图</span></div><div class=\"ch4-opt-meta\"><span><b>验证</b> 须起界面</span><span><b>风险</b> 改规则或换展示互相牵连</span></div></div><div class=\"p-box ch4-opt\" data-role=\"tool\"><div class=\"p-head\"><h3>改法二 · 先模型再映射</h3><span class=\"p-tag\" data-role=\"tool\">算与画分开</span></div><div class=\"ch4-pipe\"><span class=\"ch4-pipe-node\">双输入</span><span class=\"ch4-pipe-arr\">→</span><span class=\"ch4-pipe-node is-good\">差异模型</span><span class=\"ch4-pipe-arr\">→</span><span class=\"ch4-pipe-node is-good\">合并图映射</span><span class=\"ch4-pipe-arr\">→</span><span class=\"ch4-pipe-node\">现有图</span></div><div class=\"ch4-opt-meta\"><span><b>验证</b> 纯函数先跑素材</span><span><b>隔离</b> 算对逻辑再接图</span></div></div></div><div class=\"p-box is-soft ch4-verdict-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">课程倾向</span><p><b>先核对「算得对不对」，再接到现有图上</b>——这是对照源码依据后的选择，路径与命令须有源码依据再进计划</p></div><div class=\"p-bar\" data-reveal=\"2\"><code>PLAN.md</code> 记方案、取舍、影响范围、风险与回退：换适配改 <b>Plan</b>；改已批准行为回 <b>Spec</b>；未决细则留给人</div>",
      "steps": [
        "两种改法",
        "课程倾向",
        "Plan 写什么"
      ],
      "script": [
        "【操作提示｜停留课件 p51 第 1 步，指向并排的两种改法】\n\n先看两种改法。一种是在界面里直接比较两份输入，并生成展示，计算和展示绑在一起。另一种是先形成差异模型，再映射到现有图，计算和展示分开。对照它们会改到哪里、怎样验证、会不会缠在一起。",
        "【操作提示｜推进第 2 步，指向课程倾向】\n\n课程倾向把差异模型和图映射分开：先单独核对算得对不对，再接到现有图上。这是有代码依据之后的选择，不是一开始就只能这样写。没有源码依据，就不要把路径和命令写进计划。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p52】\n\n选定之后，Plan 记录所选方案、取舍原因、影响范围、风险和回退安排。后续如果只是换一个适配位置，更新 Plan 和相关任务即可。如果要改变已经批准的行为，例如数组怎么匹配，就回到 Spec，由人决定，并同步修改 acceptance。"
      ],
      "teaching": [],
      "source": "index.html#p51",
      "seconds": 90
    },
    {
      "id": "p52",
      "segment": "拆成四项任务",
      "label": "怎样拆成可检查的任务",
      "title": "怎样把方案拆成可检查的任务？",
      "lead": "方案有了边界，再按依赖拆成四项任务写进 TASKS.md；正式编号等实际文件确定后再定",
      "html": "<div class=\"ch4-layers is-compact\" data-reveal=\"0\"><div class=\"ch4-layer is-done\"><h3>Brief</h3><span class=\"ch4-layer-state\">✓</span></div><div class=\"ch4-layer is-done\"><h3>Spec</h3><span class=\"ch4-layer-state\">✓</span></div><div class=\"ch4-layer is-done\"><h3>Acceptance</h3><span class=\"ch4-layer-state\">✓</span></div><div class=\"ch4-layer is-done\"><h3>Plan</h3><span class=\"ch4-layer-state\">✓</span></div><div class=\"ch4-layer is-lit\"><h3>Tasks</h3><span class=\"ch4-layer-state\">本节</span></div></div><div class=\"ch4-task-chain\" data-reveal=\"1\"><div class=\"ch4-task-card\" data-role=\"us\"><div><span class=\"ch4-task-num\">TASK-01</span><h3>差异模型</h3><p class=\"ch4-task-scope\">按路径对齐，算状态、计数与派生标记</p></div><div class=\"ch4-task-verify\"><b>主要验证：</b>固定素材核对纯逻辑</div></div><div class=\"ch4-task-card\" data-role=\"ctx\"><div><span class=\"ch4-task-num\">TASK-02</span><h3>合并图映射</h3><p class=\"ch4-task-scope\">映射到现有图，保留 removed 与必要祖先</p></div><div class=\"ch4-task-verify\"><b>主要验证：</b>图数据表达状态与筛选上下文</div></div><div class=\"ch4-task-card\" data-role=\"tool\"><div><span class=\"ch4-task-num\">TASK-03</span><h3>双输入与错误</h3><p class=\"ch4-task-scope\">Before/After、单侧错误、上次有效结果</p></div><div class=\"ch4-task-verify\"><b>主要验证：</b>正常比较、报错与恢复路径</div></div><div class=\"ch4-task-card\" data-role=\"ok\"><div><span class=\"ch4-task-num\">TASK-04</span><h3>摘要筛选验收</h3><p class=\"ch4-task-scope\">摘要、只看变化、非纯颜色、整体验收</p></div><div class=\"ch4-task-verify\"><b>主要验证：</b>当前验收项 + 单输入回归</div></div></div><div class=\"p-bar\" data-reveal=\"2\">后一项承接前一项结果；每项写清<b>输入、范围、依赖、对应 REQ/AC、验证与完成定义</b>（不纳入扩展）</div>",
      "steps": [
        "点亮 Tasks",
        "范围和验证",
        "依赖与写法"
      ],
      "script": [
        "【操作提示｜停留课件 p52 第 1 步，指向锚点图里实心的 Tasks，以及四项任务名称】\n\n确定了 plan 的边界，再按依赖拆开，写进 TASKS.md。先看这四项任务：差异模型、合并图映射、双输入与错误状态、摘要筛选验收。正式编号等实际文件确定后再写。",
        "【操作提示｜推进第 2 步，从上到下指这张表】\n\n差异模型先验证纯逻辑，用固定输入核对我们期望的差异。合并图映射把模型接到现有图上，要保留 removed 节点和必要祖先。双输入与错误状态，要接入 Before 和 After，处理单侧错误，并保留上次有效结果。最后一项接入摘要、筛选和整体验收，还要回归原有的单输入路径。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p53】\n\n任务按顺序验证，后一项承接前一项已经确认的结果。每一项还要写清输入、允许范围、依赖、对应的需求和验收案例、验证方法，以及怎样才算做完。VS Code、浏览器扩展和其他数据格式，不纳入这次的任务。"
      ],
      "teaching": [],
      "source": "index.html#p52",
      "seconds": 90
    },
    {
      "id": "p53",
      "segment": "拆成四项任务",
      "label": "一条规则怎样走到任务",
      "title": "一条规则怎样走到任务？",
      "lead": "用同一条「忽略对象键顺序」走一遍，看需求、验收和任务怎样用编号对上",
      "html": "<div class=\"ch4-rule-banner\" data-reveal=\"0\"><span>示例追踪规则：<b>忽略对象键顺序</b></span><code>{\"a\":1,\"b\":2} ↔ {\"b\":2,\"a\":1} → 0 差异</code></div><div class=\"ch4-trace-chain\"><div class=\"ch4-trace-step\" data-role=\"ctx\" data-reveal=\"0\"><div><div class=\"ch4-trace-head\"><span class=\"ch4-trace-id\">1 · REQ-*</span></div><h3>Spec 写规则</h3><p>批准行为：键换序不算差异</p></div><span class=\"ch4-trace-file\">SPEC.md</span></div><div class=\"ch4-trace-step\" data-role=\"tool\" data-reveal=\"0\"><div><div class=\"ch4-trace-head\"><span class=\"ch4-trace-id\">2 · AC-*</span></div><h3>验收固定样例</h3><p>配换序固定素材与 0 差异期望</p></div><span class=\"ch4-trace-file\">ACCEPTANCE.md + fixtures/</span></div><div class=\"ch4-trace-step\" data-role=\"us\" data-reveal=\"1\"><div><div class=\"ch4-trace-head\"><span class=\"ch4-trace-id\">3 · TASK-01</span></div><h3>差异模型引用</h3><p>纯逻辑任务引用并跑通样例</p></div><span class=\"ch4-trace-file\">TASKS.md · 模型任务</span></div><div class=\"ch4-trace-step\" data-role=\"ok\" data-reveal=\"1\"><div><div class=\"ch4-trace-head\"><span class=\"ch4-trace-id\">4 · TASK-04</span></div><h3>整体验收确认</h3><p>界面计数与展示遵守同规则</p></div><span class=\"ch4-trace-file\">TASKS.md · 整体验收</span></div></div><div class=\"p-bar\" data-reveal=\"2\">完整对应关系集中写在 <b>TASKS.md</b>：各文档按编号指向正文，改规则可直接定位下游案例与任务</div>",
      "steps": [
        "Spec 到 Acceptance",
        "再走到任务和验收",
        "对应关系写在 TASKS.md"
      ],
      "script": [
        "【操作提示｜停留课件 p53 第 1 步，指向规则名称，以及前两步】\n\n用同一条规则走一遍：忽略对象键顺序。Spec 先写下这条规则。Acceptance 再固定换序样例，并写明期望差异数是0。",
        "【操作提示｜推进第 2 步，指向后两步】\n\n差异模型任务要引用这条规则和对应案例。整体验收时，再确认界面的计数与展示也遵守同一条规则。以后改这条需求，就能沿着对应关系找到要recheck的案例和任务。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p54】\n\n需求、验收和任务的完整对应关系，集中写在 TASKS.md。各文档用编号指向规则和案例，靠映射关系来保持一致，而不是直接复制正文。每个人的编号可能不同，判断依据是自己文档里已经批准的内容和对应关系。"
      ],
      "teaching": [],
      "source": "index.html#p53",
      "seconds": 90
    },
    {
      "id": "p54",
      "segment": "拆成四项任务",
      "label": "模型案例通过了就算完成吗",
      "title": "模型案例通过了，能不能标记整个功能完成？",
      "lead": "请先判断，再看参考结论；这是本节的学员判断",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch4-judge-grid\"><div class=\"p-box ch4-judge-q\" data-role=\"us\" data-reveal=\"0\"><div><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3>差异模型的几个案例都通过了，能不能把 JSON Diff 整个功能标记完成？</h3></div><div class=\"ch4-mini-progress\"><span class=\"ch4-mp-item is-pass\">✓ 差异模型</span><span class=\"ch4-mp-item is-wait\">○ 合并图映射</span><span class=\"ch4-mp-item is-wait\">○ 双输入与错误</span><span class=\"ch4-mp-item is-wait\">○ 摘要筛选验收</span></div></div><div class=\"ch4-judge-right\"><div class=\"p-box ch4-judge-verdict\" data-role=\"gate\" data-reveal=\"1\"><div class=\"p-head\"><h3>✗ 不能标记整个功能完成</h3><span class=\"p-tag\" data-role=\"gate\">结论</span></div><p>这只支持当前<b>差异模型任务</b>的结论，不等于整个功能已完成</p></div><div class=\"p-box is-soft ch4-judge-verdict\" data-role=\"ctx\" data-reveal=\"2\"><div class=\"p-head\"><h3>还要继续完成其余三段</h3><span class=\"p-tag\" data-role=\"ctx\">剩余验证</span></div><p>合并图映射、双输入与错误恢复、摘要筛选及原有单输入回归，须逐项按各自任务与 AC 核对</p></div></div></div>",
      "steps": [
        "先判断",
        "不能只算模型完成",
        "其余任务还要验证"
      ],
      "script": [
        "【操作提示｜停留课件 p54 第 1 步，指向左侧判断问题和四格进度；停顿数秒】\n\n现在请判断：差异模型的几个案例通过了，能不能把 JSON Diff 整个功能标记完成？",
        "【操作提示｜推进第 2 步，指向右上结论卡】\n\n不能。这只支持当前差异模型任务已经完成。",
        "【操作提示｜推进第 3 步，指向右下剩余验证卡；讲完进入 p55】\n\n图映射、界面接入、错误恢复和整体验收，还有各自的任务和验证。差异模型任务通过了，不等于整个功能做完了。"
      ],
      "teaching": [],
      "source": "index.html#p54",
      "seconds": 90
    },
    {
      "id": "p55",
      "segment": "起草与审查",
      "label": "让 Agent 起草计划和任务",
      "title": "怎样让 Agent 起草计划和任务？",
      "lead": "结合已审过的 Spec、Acceptance 与 Brief 仓库事实组织请求：先核对影响面、再比较两种改法，然后起草 Plan 和 Tasks 并补全追踪",
      "html": "<div class=\"ch4-delegation\"><div class=\"ch4-del-col\" data-reveal=\"0\"><div class=\"p-box ch4-del-card\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:2px;align-self:flex-start\">读哪些依据</span><div class=\"ch4-file-stack\"><div class=\"ch4-file-chip\" data-role=\"ctx\"><code>SPEC.md</code><span>已批准的行为规则</span></div><div class=\"ch4-file-chip\" data-role=\"ctx\"><code>ACCEPTANCE.md + fixtures/</code><span>已核算的案例与固定素材</span></div><div class=\"ch4-file-chip\" data-role=\"ctx\"><code>BRIEF.md · 已核实约束</code><span>4.2 查实的仓库事实</span></div></div><p class=\"ch4-del-note\">不重复走一遍 4.2 的源码导览</p></div></div><div class=\"ch4-contract\"><div class=\"ch4-contract-row\" data-key=\"ctx\" data-reveal=\"1\"><span class=\"ch4-contract-key\">先核影响</span><span>薄核对本次改动位置、入口与验证方式；无源码依据不写入计划</span></div><div class=\"ch4-contract-row\" data-key=\"goal\" data-reveal=\"1\"><span class=\"ch4-contract-key\">比对改法</span><span>比较界面直比 vs 先模型再映射并说明取舍，不预先锁定结论</span></div><div class=\"ch4-contract-row\" data-key=\"limit\" data-reveal=\"2\"><span class=\"ch4-contract-key\">立住边界</span><span>只写规格资产，<b>不改生产代码</b>，不动已审的 Brief / Spec / Acceptance</span></div><div class=\"ch4-contract-row\" data-key=\"done\" data-reveal=\"2\"><span class=\"ch4-contract-key\">留出未决</span><span>剩余 Draft 细则（如 <code>1</code> 与 <code>1.0</code>）交给人；扩展与其他格式不入任务</span></div></div><div class=\"ch4-del-col\"><div class=\"p-box ch4-del-card\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\" style=\"margin-bottom:2px;align-self:flex-start\">起草两份文件</span><div class=\"ch4-file-stack\"><div class=\"ch4-file-chip\" data-role=\"agent\"><code>PLAN.md</code><span>所选方案、取舍、影响范围、风险与回退</span></div><div class=\"ch4-file-chip\" data-role=\"agent\"><code>TASKS.md</code><span>四项有边界任务 ＋ 完整 REQ↔AC↔TASK 追踪表</span></div></div></div><div class=\"ch4-pop-dock\" data-reveal=\"3\"><span class=\"ch4-pop-dock-hint\">按自己文档组织措辞，点击可看完整表达示例</span><details class=\"p-pop\"><summary>查看组织示例</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>组织请求表达示例（按自己的文档调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px;font-size:17px\">按你自己的文档与编号改写，下面先给简版表达方式，再附课堂演练时教师使用的完整 Prompt 供参考</p><div class=\"p-code\"><div class=\"p-code-head\"><span>发给 Agent 的组织参考（简版）</span><span>按实际文档与编号调整</span></div><pre style=\"padding:12px 14px;white-space:pre-wrap;font-size:17px;line-height:1.55\">请先阅读已审过的 docs/specs/SPEC.md、docs/specs/ACCEPTANCE.md，以及 docs/specs/BRIEF.md 里已核实的仓库事实（不要再走一遍从输入到渲染的导览）。\n\n先针对这次实施做一轮很薄的影响面核对，再比较「界面直接比较」与「独立差异模型再映射」两种改法并说明取舍；没有源码依据，不要把路径和命令写进计划。\n\n随后起草 docs/specs/PLAN.md 与 docs/specs/TASKS.md，补全已批准需求、验收案例与任务的对应关系（至少把「忽略对象键顺序」串通）。只写规格，不改生产代码，不动既有文档与素材；剩余未决细则列出交给我。写完运行 git status --short --untracked-files=all。</pre></div><p style=\"margin:12px 0 6px;font-size:17px\"><b>课堂演练时教师 Prompt（供参考）</b>：按自己的 Spec / Acceptance 编号与实际内容调整，不必逐字照抄</p><div class=\"p-code\"><div class=\"p-code-head\"><span>课堂演练时教师 Prompt（供参考）</span></div><pre style=\"padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55\">请先阅读已经审过的 docs/specs/SPEC.md（32 条 Approved：REQ-001~REQ-031 与 REQ-038）、docs/specs/ACCEPTANCE.md（23 条验收案例 AC-01~AC-23）、docs/specs/fixtures/README.md，以及 docs/specs/BRIEF.md 里「已核实约束」中的仓库事实。不要再重复走一遍从输入到渲染的源码导览。\n\n请先针对这次实施做一轮很薄的影响面核对：这次方案会改到哪些具体位置、入口落在哪里（同时守住 REQ-038 不破坏现有单份 JSON 查看链路）、用什么命令和方式验证。没有源码依据，就不要把文件路径和命令写进计划。\n\n然后比较两种改法：一种是在界面里直接比较两份 JSON 并生成展示；另一种是先形成独立的差异模型，再映射到现有图数据。请根据刚才核对到的依据做出选择，说明取舍，不要在没有依据时预先认定只能选哪一种。\n\n在此之后，起草 docs/specs/PLAN.md 和 docs/specs/TASKS.md，并补全已批准需求、验收案例与任务的完整对应关系。\n\n这一步只新建 docs/specs/PLAN.md 和 docs/specs/TASKS.md，不要修改生产代码，不要修改 BRIEF.md、SPEC.md、ACCEPTANCE.md 和 docs/specs/fixtures/，也不要执行 git commit。\n\n要求：\n1. PLAN.md 写清所选方案、取舍原因、影响范围（附源码依据）、验证入口、风险和回退安排，以及入口改造落点（回应 SPEC §13 OQ-10 留给 Plan 的部分）。只换适配位置就更新 Plan 和相关任务即可；不要在计划里改变已经批准的产品行为。\n2. 按依赖把实施拆成 4 项可检查的任务，写进 TASKS.md（正式编号可按 TASK-01~TASK-04）：\n   - 差异模型（含键序忽略、数组按索引、类型变化、REQ-003 的 null 规则、直接状态、派生标记与计数，用固定素材核对纯逻辑）；\n   - 合并图映射（将差异模型映射到现有图数据，保留 removed 节点与必要祖先，并按 2000 上限含 removed 节点核对超限）；\n   - 双输入与错误状态（接入 Before / After 两侧输入、单侧出错指明哪一侧、保留上次有效结果、首次即错空状态与本地处理验证）；\n   - 摘要、筛选与整体验收（接入差异摘要、「只看变化」、非纯颜色文字或符号、360px 窄屏，完成当前整体验收并回归 REQ-038 / AC-23 原有单输入路径）。\n   后一项承接前一项已确认的结果。每项任务写清：输入、允许改动范围、依赖、对应的 REQ-* 与 AC-*（引用实际编号）、验证方法与完成标准。\n3. 完整的 REQ-* ↔ AC-* ↔ TASK-* 对应追踪表集中写在 TASKS.md，确保全部 32 条 Approved 需求与 23 条 AC 都有落点，尤其把「忽略对象键顺序」（REQ-001 → AC-02 → c02-key-order）从规则一路串通到相关任务。各文档用编号引用，不靠复制大段正文保持一致。\n4. 尚未决定的 6 条 Draft（REQ-032~REQ-037，如 1 与 1.0 数值字面量、浏览器本地存储、节点点击详情、独立差异清单、摘要扩展内容、大输入验收规模）在文档中单独列出交给我决定，不要写成实现决定；5 条 Deferred（REQ-039~REQ-043，VS Code 插件、其他数据格式、写回导出分享、元素对齐与移动检测、字段顺序敏感场景）与浏览器扩展不纳入本次任务。\n5. 写完后检查追踪表一致性，并运行 git status --short --untracked-files=all 给我看。</pre></div></div></details></div></div></div>",
      "steps": [
        "依据与产出",
        "先核对，再选择",
        "范围与未决事项",
        "按实际组织请求"
      ],
      "script": [
        "【操作提示｜停留课件 p55 第 1 步，指向左栏输入依据和右栏产出两份文件；不切窗口】\n\n现在让 Agent 起草计划和任务。请求先说清依据：自己已经审过的 SPEC.md、ACCEPTANCE.md 文档，以及 Brief 里已核实的仓库现状。还要说明这次要起草 PLAN.md 和 TASKS.md，并补全对应关系。不要再重复实现一遍从输入到渲染的pipeline 了。",
        "【操作提示｜推进第 2 步，指向中栏上方两条“先核影响”和“比对改法”】\n\n我们需要先核对具体影响：这次方案会改到哪些地方，入口在哪，用什么方式验证。再比较两种改法，根据核对到的依据 做出选择并说明取舍，不要预先认定只能选哪一种。",
        "【操作提示｜推进第 3 步，指向中栏下方的边界与未决条】\n\n范围要写清楚：只写plan & task 文档，不要改生产代码，也不要改已经审过的 Brief、Spec、Acceptance 和固定素材。剩余尚未决定的细则，比如 1 和 1.0 的数值写法，列出来交给人，不要写成实现决定。",
        "【操作提示｜推进第 4 步，指向右侧“查看组织示例”按钮；切到 Codex，在前面几节一直在用的同一会话中结合当前文档组织起草请求；从基线副本根目录发送，保留已有的 docs/specs/；等待回复后切回课件进入 p56】\n\n请求的具体措辞，按照你自己的文档来组织。右侧按钮点开有一段完整表达示例，帮助你看清组织方式。Plan 要写清所选方案、取舍原因、影响范围、风险和回退安排；任务按依赖拆开，正式编号按实际文件来定。完整对应关系集中写在 TASKS.md，至少把「忽略对象键顺序」从规则 走到 案例，再走到相关规划、实现任务。写完后运行 git status --short --untracked-files=all。确认依据和要求之后，在同一会话发给 Agent。"
      ],
      "repro": {
        "label": "跟做：起草计划和任务",
        "steps": [
          {
            "text": "在基线副本根目录发送，保留已有的 docs/specs/（不要清空）。打开已审过的 Spec、Acceptance，以及 Brief 里已核实的仓库事实，组织起草请求。",
            "code": ""
          },
          {
            "text": "先核对该实施的影响面，再比较两种改法，然后起草 PLAN.md 和 TASKS.md，并补全对应关系。只写规格，不改生产代码，也不要改已经审过的 Brief、Spec、Acceptance 和固定素材。",
            "code": ""
          },
          {
            "text": "打开得到的 PLAN.md 和 TASKS.md，按下一页的观察点抽查。",
            "code": ""
          }
        ],
        "note": "请求措辞和编号会因自己的文档不同而变化；剩余未决行为仍需人决定。"
      },
      "teaching": [],
      "source": "index.html#p55",
      "seconds": 120
    },
    {
      "id": "p56",
      "segment": "起草与审查",
      "label": "计划和任务审什么",
      "title": "计划和任务审什么？提交什么？",
      "lead": "打开实际生成的 PLAN.md 和 TASKS.md 对照抽查，不要只看「已完成」；确认后由人单独提交规格基线，不改生产代码",
      "html": "<div class=\"ch4-review-grid\"><div class=\"p-box ch4-doc-outline\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:0;align-self:flex-start\">打开实际文件对照</span><div class=\"ch4-doc-card\"><code>docs/specs/PLAN.md</code><p>方案取舍 · 影响范围 · 验证入口 · 风险与回退</p></div><div class=\"ch4-doc-card\"><code>docs/specs/TASKS.md</code><p>四项任务 · 依赖与验证 · REQ↔AC↔TASK 追踪</p></div><p class=\"ch4-del-note\">不只看对话里的「已完成」，逐项回查实际正文</p></div><ol class=\"ch4-review-list\"><li data-reveal=\"0\"><span><b>抽查方案</b><small>取舍和影响范围说清了吗？路径和命令有没有源码依据</small></span></li><li data-reveal=\"1\"><span><b>抽查任务</b><small>四项任务的依赖、验证与完成标准足以检查吗？后一项是否承接前一项</small></span></li><li data-reveal=\"2\"><span><b>抽查对应关系</b><small>挑一条已批准需求（如忽略键序），看能否走到案例与任务；未决留给人</small></span></li></ol></div><div class=\"ch4-review-foot\" data-reveal=\"3\"><div class=\"p-bar is-light\">审完看 <code>git status</code>：新增与修改只在 <b>docs/specs/</b>；确认后<b>由人提交规格基线</b>，本节不写生产代码</div><details class=\"p-pop\"><summary>示例：备课实跑</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>一次实跑：审查与修改示例</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px;font-size:17px\">以下为教师演示时的审查修改 Prompt（仅供参考；每次生成的编号和内容可能不同，请按自己的实际抽查结果调整，没有审出问题时也不必编造修改）</p><div class=\"p-code\"><div class=\"p-code-head\"><span>课堂演练时教师修正 Prompt（供参考）</span></div><pre style=\"padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55\">请按以下 3 条审查意见修改 docs/specs/PLAN.md 和 docs/specs/TASKS.md，只改这两个文件，不要修改生产代码，不要修改 BRIEF.md、SPEC.md、ACCEPTANCE.md 和 docs/specs/fixtures/，也不要执行 git commit：\n1. 修正 REQ-032 写串笔误：docs/specs/TASKS.md 第 85 行（TASK-01 完成标准）写成“键序忽略的判定集中在一个可单独替换的函数里（因为 REQ-032 仍是 Draft，见 §5）”，把已批准的 REQ-001（键序忽略）和未决定的 REQ-032（1 与 1.0 数值字面量）写串了；第 372 行（§7.3）也顺带把 REQ-001 写成了“落到单个可替换函数”。请修正这两处：REQ-001 是已批准规则，按 SPEC 执行即可；需要留出可替换判定点的是 REQ-032（数值字面量比较）。\n2. 不要替 REQ-032 预设“字面量不同算变化”的实现决定：docs/specs/PLAN.md 第 157 行（风险 R-5）和 docs/specs/TASKS.md 第 273 行（§5 REQ-032）都写了“临时默认按字面量不同即算变化”。请删去这一预设：REQ-032 尚未决定，且标准 JSON 解析中 1 与 1.0 本就是数值相等，不要在本轮强行按字面量拆成变化；改为注明“在 TASK-01 留出数值比较的单一判定点，待需求负责人决定后再补对应行为与验收，本轮不写死 1 与 1.0 的字面量断言”。\n3. 收清 TASK-02 上限参数的跨包口径：docs/specs/TASKS.md 第 145 行（TASK-02 完成标准）写“上限数值取自 apps/www/src/constants/graph.ts:6 的同一个 SUPPORTED_LIMIT”，但 TASK-02 位于共享包 packages/jsoncrack-react 且禁止改动 apps/**。请改为明确“共享包映射与 DiffGraph 通过参数接收上限数值，不另定硬编码默认值；由 TASK-03 在 apps/www 接入时传入 apps/www/src/constants/graph.ts:6 的 SUPPORTED_LIMIT”。\n另外确认 PLAN §3 末尾的待确认项：新页面 /diff 的搜索索引策略保持默认（按 /editor 模式可索引）即可，可注明已确认。\n改完后汇总改动点，并运行 git status --short --untracked-files=all 给我看。</pre></div></div></details></div>",
      "steps": [
        "抽查方案",
        "抽查任务",
        "抽查对应关系",
        "检查工作区并提交"
      ],
      "script": [
        "【操作提示｜停留课件 p56 第 1 步；切到编辑器打开 docs/specs/PLAN.md 和 TASKS.md，对照自己的 Spec、Acceptance 和已核实的仓库事实，再切回课件】\n\n计划和任务起草好了，先打开实际文件，不要只看“已完成”。先抽查方案：所选方案有没有说清取舍和影响范围；路径和命令有没有源码依据。",
        "【操作提示｜推进第 2 步；切到 TASKS.md 核对这些任务，再切回课件】\n\n再抽查任务。四项任务的依赖、验证和完成标准，内容是否足够支撑后续检查核对；后一项是否承接前一项已经确认的结果。",
        "【操作提示｜推进第 3 步；对照自己的文档和 TASKS.md 里的对应关系，再切回课件】\n\n再抽查对应关系。完整对应关系应集中写在 TASKS.md。选一条已批准需求，例如「忽略对象键顺序」，看能不能从规则走到对应的案例和任务。尚未决定的行为应列出来交给人，不要写成实现决定。",
        "【操作提示｜推进第 4 步；切到现场 PLAN.md 和 TASKS.md，对照本次审查结果；在 Codex 中发送下方审查修改 Prompt、核对改后的文件并运行 git status；确认后由人手动提交规格基线，不要让 Agent 先提交；切回课件进入 p57】\n\n审出问题，就指出具体哪句话不对、依据是什么，请 Agent 修改后再回看。拿我们这次生成的 PLAN.md 和 TASKS.md 来说，刚才抽查出三处要一起修掉：第一，TASKS.md 里把未决定的 REQ-032 写串成了“键序忽略”，实际“键序忽略”是已经批准的 REQ-001，REQ-032 是 1 和 1.0 的数值问题；刚才长会话中途压缩过一次上下文，这种笔误不打开原文核对很容易漏掉。第二，PLAN.md 和 TASKS.md 里替 REQ-032 预设了“字面量不同即算变化”的临时默认，既越界替 Draft 拍了板，又和常规 JSON 解析相反，改成留待需求负责人决定、本轮不写死字面量比较。这种就是笔误之后常见的第二类问题，agent 偷偷做了你不知道的决定；第三，这是一个很难发现的问题，属于代码逻辑问题；TASK-02 写着直接去网页应用里取节点上限，但这一步只改共享包，不该反过来依赖网页代码；我们改成由组件通过参数接收上限，等 TASK-03 接入网页时再传进去。另外确认一下，新页面 /diff 的索引策略保持默认即可。我们把这条修改请求发给 Codex。\n\n【切换｜Codex】\n\n【操作提示｜以下整段为本次审查修改 Prompt，不照念，直接复制发送给 Codex】\n\n请按以下 3 条审查意见修改 docs/specs/PLAN.md 和 docs/specs/TASKS.md，只改这两个文件，不要修改生产代码，不要修改 BRIEF.md、SPEC.md、ACCEPTANCE.md 和 docs/specs/fixtures/，也不要执行 git commit：\n1. 修正 REQ-032 写串笔误：docs/specs/TASKS.md 第 85 行（TASK-01 完成标准）写成“键序忽略的判定集中在一个可单独替换的函数里（因为 REQ-032 仍是 Draft，见 §5）”，把已批准的 REQ-001（键序忽略）和未决定的 REQ-032（1 与 1.0 数值字面量）写串了；第 372 行（§7.3）也顺带把 REQ-001 写成了“落到单个可替换函数”。请修正这两处：REQ-001 是已批准规则，按 SPEC 执行即可；需要留出可替换判定点的是 REQ-032（数值字面量比较）。\n2. 不要替 REQ-032 预设“字面量不同算变化”的实现决定：docs/specs/PLAN.md 第 157 行（风险 R-5）和 docs/specs/TASKS.md 第 273 行（§5 REQ-032）都写了“临时默认按字面量不同即算变化”。请删去这一预设：REQ-032 尚未决定，且标准 JSON 解析中 1 与 1.0 本就是数值相等，不要在本轮强行按字面量拆成变化；改为注明“在 TASK-01 留出数值比较的单一判定点，待需求负责人决定后再补对应行为与验收，本轮不写死 1 与 1.0 的字面量断言”。\n3. 收清 TASK-02 上限参数的跨包口径：docs/specs/TASKS.md 第 145 行（TASK-02 完成标准）写“上限数值取自 apps/www/src/constants/graph.ts:6 的同一个 SUPPORTED_LIMIT”，但 TASK-02 位于共享包 packages/jsoncrack-react 且禁止改动 apps/**。请改为明确“共享包映射与 DiffGraph 通过参数接收上限数值，不另定硬编码默认值；由 TASK-03 在 apps/www 接入时传入 apps/www/src/constants/graph.ts:6 的 SUPPORTED_LIMIT”。\n另外确认 PLAN §3 末尾的待确认项：新页面 /diff 的搜索索引策略保持默认（按 /editor 模式可索引）即可，可注明已确认。\n改完后汇总改动点，并运行 git status --short --untracked-files=all 给我看。\n\n【切换｜回课件 p56】\n\n改完后，打开修改处回看一遍，再检查工作区。运行 git status --short --untracked-files=all，新增和修改只应出现在 docs/specs/，不能出现生产代码改动。确认之后，由人把 Brief、Spec、Acceptance、Plan、Tasks 和固定素材作为规格基线提交，不要让 Agent 先提交。本节仍然不实现 JSON Diff。页面里的示例弹窗放了这次演示用的审查修改 Prompt 供参考；你自己的编号和内容可能不同，没有发现问题，也不必为了演示编造修改。"
      ],
      "repro": {
        "label": "跟做：审查并提交规格基线",
        "steps": [
          {
            "text": "打开自己的 PLAN.md 和 TASKS.md，先抽查所选方案的取舍、影响范围，以及路径和命令有没有源码依据。",
            "code": ""
          },
          {
            "text": "再抽查四项任务的依赖、验证和完成标准，并抽一条已批准需求，看能不能走到对应的案例和任务。",
            "code": ""
          },
          {
            "text": "审出问题时，指出实际内容和依据，请 Agent 修改后再回看。没有问题时继续核对，不必编造修改。审完运行 git status，确认后由人提交规格基线，不要让 Agent 先提交。",
            "code": "git status --short --untracked-files=all"
          }
        ],
        "note": "实际问题和编号可能不同；没有审出问题时也不必编造修改。本节提交只含规格和素材，不改生产代码。"
      },
      "teaching": [],
      "source": "index.html#p56",
      "seconds": 120
    },
    {
      "id": "p57",
      "segment": "自检与交接",
      "label": "哪段能当实施计划",
      "title": "这两段文字，哪段能当实施计划？",
      "lead": "能检查、能留下检查点的，才是实施计划",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch4-quiz-grid\"><div class=\"ch4-qcard\"><div class=\"ch4-qcard-top\"><div class=\"ch4-qcard-id\"><span class=\"ch4-qcard-num\">1</span><span class=\"ch4-qcard-label\">候选一</span></div><span class=\"ch4-qcard-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 不能当计划</span></div><p class=\"ch4-qcard-say\">“把 JSON Diff 全部实现完，对照验收就行。”</p><div class=\"ch4-qcard-ans\" data-role=\"gate\" data-reveal=\"1\">没写清怎么改、改哪里、怎样分段验证与回退，无法按任务检查</div></div><div class=\"ch4-qcard\"><div class=\"ch4-qcard-top\"><div class=\"ch4-qcard-id\"><span class=\"ch4-qcard-num\">2</span><span class=\"ch4-qcard-label\">候选二</span></div><span class=\"ch4-qcard-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 能当计划</span></div><p class=\"ch4-qcard-say\">“先做差异模型，再映射到现有图；四项任务按依赖验证：模型核对固定输入；映射保留 removed 与必要祖先；双输入处理单侧错误并保留上次结果；摘要、筛选与原有单输入通过整体验收。”</p><div class=\"ch4-qcard-ans\" data-role=\"ok\" data-reveal=\"2\">方案、范围、任务边界与验证都清楚，能检查也能留检查点 · <a href=\"#p51\">回看改法</a> · <a href=\"#p52\">回看拆任务</a></div></div></div><p class=\"source-note\">教学对照文字，不是某一份实际计划</p>",
      "steps": [
        "两段文字",
        "第一段",
        "第二段"
      ],
      "script": [
        "【操作提示｜停留课件 p57 第 1 步，指向暂停标记和两段文字；停顿数秒】\n\n停下来看这两段文字，哪一段能当实施计划？",
        "【操作提示｜推进第 2 步，指向第 1 段的参考判断】\n\n第一段只说把 JSON Diff 全部实现完，对照验收就行。它没写清怎么改、改哪里、怎样分段验证，不能当实施计划。",
        "【操作提示｜推进第 3 步，指向第 2 段的参考判断】\n\n第二段写清了先做差异模型、再映射到现有图，以及四项有边界的任务和验证方法。可以检查，也可以留下检查点，这一段能当。"
      ],
      "teaching": [],
      "source": "index.html#p57",
      "seconds": 90
    },
    {
      "id": "p58",
      "segment": "自检与交接",
      "label": "小结",
      "title": "这一节留下什么",
      "lead": "规格基线已经提交，生产代码保持不变，交给第 5 章按任务实现",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">核心判断</h3><div class=\"ch4-takeaway-card\"><span class=\"ch4-takeaway-pin\">回答章首问题</span><p>仍用 Prompt 发起<br>但实现依据换成<br>可查阅、按版本维护的约定</p></div></div><div data-reveal=\"1\"><h3>本节留下</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span><code>PLAN.md</code> 与 <code>TASKS.md</code></span></li><li class=\"is-pass\"><span>需求、验收与任务的完整追踪表</span></li><li class=\"is-pass\"><span>规格基线已提交（生产代码未改）</span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一章</h3><div class=\"p-box\" data-role=\"us\"><h3>第 5 章 · 按任务实现</h3><p>拿着已提交的规格基线从 TASK-01 动手；4.6 工具经验不打断这次交接</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "交给第 5 章"
      ],
      "script": [
        "【操作提示｜停留课件 p58 第 1 步，指向左侧重点贴纸卡】\n\n回到开头的问题。就算所有事情都定清楚了，也不推荐一个 prompt 写完所有任务。今后仍用 Prompt 发起工作、讨论决策，但实现依据必须是这些可以查阅、按版本维护的约定。",
        "【操作提示｜推进第 2 步，指向“留下的”】\n\n这一节留下 PLAN.md、TASKS.md，以及需求、验收与任务的完整对应关系。规格基线已经提交。还没决定的规则，仍然由人来定。生产代码保持不变。",
        "【操作提示｜推进第 3 步，指向下一章卡片】\n\n规格主线交给第 5 章，按任务实现。下一节是工具经验，不打断这次交接。"
      ],
      "teaching": [],
      "source": "index.html#p58",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "为什么写计划",
      "seconds": 180
    },
    {
      "label": "拆成四项任务",
      "seconds": 270
    },
    {
      "label": "起草与审查",
      "seconds": 240
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};

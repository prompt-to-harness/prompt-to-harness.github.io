window.lesson = {
  "title": "光靠文字规则，拿什么判对错",
  "chapter": "第 4 章 · SDD",
  "section": "04.04",
  "summary": "用一对嵌套 JSON 手工核算路径、状态和计数，写成可重复核对的验收案例，扩展到一组覆盖，再交给 Agent 起草第三份规格 Acceptance。",
  "scenes": [
    {
      "id": "p39",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "光靠文字规则，拿什么判对错",
      "title": "光靠文字，拿什么判对错？",
      "lead": "上一节留下了经过审查的 Spec。这一节用固定输入、动作和可核算结果，写成第三份规格 Acceptance",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>4.1</b>接手工程</li><li class=\"is-done\"><b>4.2</b>形成 Brief</li><li class=\"is-done\"><b>4.3</b>批准 Spec</li><li class=\"is-now\"><b>4.4</b>写验收</li><li><b>4.5</b>拆任务</li><li><b>4.6</b>MCP 工具</li></ol><div class=\"ch4-layers\" data-reveal=\"1\"><div class=\"ch4-layer is-done\"><div class=\"ch4-layer-top\"><h3>Brief</h3><span class=\"ch4-layer-state\">✓</span></div><code>BRIEF.md</code></div><div class=\"ch4-layer is-done\"><div class=\"ch4-layer-top\"><h3>Spec</h3><span class=\"ch4-layer-state\">✓</span></div><code>SPEC.md</code></div><div class=\"ch4-layer is-lit\"><div class=\"ch4-layer-top\"><h3>Acceptance</h3><span class=\"ch4-layer-state\">本节</span></div><code>ACCEPTANCE.md</code></div><div class=\"ch4-layer is-todo\"><div class=\"ch4-layer-top\"><h3>Plan</h3><span class=\"ch4-layer-state\">后续</span></div><code>PLAN.md</code></div><div class=\"ch4-layer is-todo\"><div class=\"ch4-layer-top\"><h3>Tasks</h3><span class=\"ch4-layer-state\">后续</span></div><code>TASKS.md</code></div></div><div class=\"ch4-handoff\" data-reveal=\"2\"><div class=\"p-box is-soft\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">4.3 承接</span><h3>经过审查的 SPEC.md</h3><p>核心规则 · 代价范围 · Open 问题去向</p></div><div class=\"ch4-arrow\" aria-hidden=\"true\"><i>→</i></div><div class=\"p-box\" data-role=\"us\"><span class=\"p-tag\" data-role=\"us\">4.4 产出</span><ul class=\"ch4-mini-list\"><li>按规则手算过的嵌套样例</li><li><code>ACCEPTANCE.md</code>（Given–When–Then）</li><li>固定素材 <code>docs/specs/fixtures/</code></li></ul></div></div>",
      "steps": [
        "本章位置",
        "这一节补哪一层",
        "从自己的 Spec 开始"
      ],
      "script": [
        "【操作提示｜停留课件 p39 第 1 步，指向章节地图上的 4.4；不切窗口】\n\n上一节，我们把人决定的行为写进了 SPEC.md",
        "【操作提示｜推进第 2 步，指向五层条里实心的 Acceptance】\n\n这一节补五层里的第三层：Acceptance。它回答的是，给定输入，怎样判对错。",
        "【操作提示｜推进第 3 步，指向右下方本节产出卡片；讲完进入 p40】\n\n每个人的规则编号和文档内容可能不同，请打开自己那一份 Spec。这一节我们要产出 ACCEPTANCE.md 和固定素材。光靠文字规则，拿什么判对错？我们从一句看似明确的规则开始看。"
      ],
      "teaching": [],
      "source": "index.html#p39",
      "seconds": 90
    },
    {
      "id": "p40",
      "segment": "手工核算",
      "label": "这句话够不够",
      "title": "只显示变化，并统计差异数量",
      "lead": "这句规则看似明确。光靠它，还不够判断做对了。下面是合成样例，先按已确认的规则自己判断，不是产品跑出来的结果。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:10px 18px\"><span class=\"p-tag\" data-role=\"us\">一句规则</span><h3 style=\"font-size:22px;margin:6px 0 0\">“只显示变化，并统计差异数量”</h3></div><style>#p40 .p40-trees{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch;min-width:0}#p40 .p40-trees>div{display:flex;flex-direction:column;min-width:0}#p40 .p40-trees .p-tree{flex:1;padding:8px 12px;font-size:17.5px;line-height:1.4}#p40 .p-tree li{padding:1px 0}#p40 .p-tree ul{padding-left:22px;margin-left:8px}@media(max-width:760px){body[data-mode=\"scroll\"] #p40 .p40-trees{grid-template-columns:minmax(0,1fr)}}</style><div class=\"ch4-split\" style=\"--cols:minmax(0,1.25fr) minmax(0,0.75fr);gap:18px;margin-top:12px\"><div class=\"p40-trees\" data-reveal=\"1\"><div><h3 style=\"font-size:18px;margin:0 0 6px\">Before</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 20</span></li></ul></li><li><span class=\"p-path\">active: true</span></li></ul></div><div><h3 style=\"font-size:18px;margin:0 0 6px\">After</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 21</span></li></ul></li><li><span class=\"p-path\">role: student</span></li></ul></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"display:flex;flex-direction:column;justify-content:center;padding:14px 18px\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3 style=\"font-size:22px;margin:8px 0 0;line-height:1.38\">哪些地方变了，各是什么状态？</h3><p style=\"margin:8px 0 0;font-size:18px;color:var(--p-muted)\">这页先不公布答案</p></div></div><p class=\"source-note\" style=\"margin-top:6px\">合成教学样例，按已确认规则手算；JSON Diff 尚未实现</p>",
      "steps": [
        "一句规则",
        "一对结构树",
        "先自己判断"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步，指向这句规则】\n\n只显示变化，并统计差异数量。这句听起来很清楚。",
        "【操作提示｜推进第 2 步，指向左侧两棵结构树】\n\n我们先看这对嵌套数据的案例，Before 在左，After 在右。请对照两边的字段，看哪里不一样。",
        "【操作提示｜推进第 3 步，指向右侧判断卡片；留出时间让学员判断，再进入 p41】\n\n先暂停一下，尝试自己判断：哪些地方变了，各是什么状态。"
      ],
      "teaching": [],
      "source": "index.html#p40",
      "seconds": 90
    },
    {
      "id": "p41",
      "segment": "手工核算",
      "label": "哪些地方变了",
      "title": "这组 JSON 里，哪些地方变了？",
      "lead": "按已经确认的规则，把路径和状态核对出来。这是手算结果，不是产品跑出来的。",
      "html": "<style>#p41 .p41-trees{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:stretch;min-width:0}#p41 .p41-trees>div{display:flex;flex-direction:column;min-width:0}#p41 .p41-trees .p-tree{flex:1;padding:6px 10px;font-size:17px;line-height:1.35}#p41 .p-tree li{padding:1px 0}#p41 .p-tree ul{padding-left:20px;margin-left:6px}#p41 .p-matrix span{padding:5px 10px}@media(max-width:760px){body[data-mode=\"scroll\"] #p41 .p41-trees{grid-template-columns:minmax(0,1fr)}}</style><div class=\"ch4-split\" style=\"--cols:minmax(0,0.88fr) minmax(0,1.12fr);gap:16px;align-items:start\"><div class=\"p41-trees\" data-reveal=\"0\"><div><h3 style=\"font-size:18px;margin:0 0 6px\">Before</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 20</span></li></ul></li><li><span class=\"p-path\">active: true</span></li></ul></div><div><h3 style=\"font-size:18px;margin:0 0 6px\">After</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 21</span></li></ul></li><li><span class=\"p-path\">role: student</span></li></ul></div></div><div><div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,0.9fr) minmax(0,1.15fr) minmax(0,1.1fr)\" data-reveal=\"0\"><div class=\"is-head\"><span>路径</span><span>直接状态</span><span>理由</span></div><div><span style=\"font-family:var(--p-mono);font-size:17px\">/user/age</span><span><span class=\"ch4-sym is-chg\">~ changed</span></span><span style=\"font-size:17.5px\">数值由 20 变成 21</span></div><div><span style=\"font-family:var(--p-mono);font-size:17px\">/active</span><span><span class=\"ch4-sym is-rem\">− removed</span></span><span style=\"font-size:17.5px\">只存在于 Before</span></div><div><span style=\"font-family:var(--p-mono);font-size:17px\">/role</span><span><span class=\"ch4-sym is-add\">+ added</span></span><span style=\"font-size:17.5px\">只存在于 After</span></div></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:8px 12px;margin-top:8px\"><div style=\"display:flex;align-items:center;gap:8px;flex-wrap:wrap\"><span class=\"p-tag\" data-role=\"ctx\">/user</span><span class=\"ch4-sym is-anc\">▽ hasDiffDescendant</span><span class=\"ch4-sym is-nocnt\">不计入</span></div><p style=\"margin:5px 0 0;font-size:17.5px\">对象本身是 <code>unchanged</code>，靠派生标记带路</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:8px\">直接差异共 <b>3 处</b>；还没有打开“只看变化”</div><p class=\"source-note\" style=\"margin-top:4px\">按已确认规则手算；JSON Diff 尚未实现</p>",
      "steps": [
        "三条路径",
        "/user 怎么计",
        "共 3 处"
      ],
      "script": [
        "【操作提示｜停留课件 p41 第 1 步，从上到下指三行路径】\n\n按已经确认的规则核对。/user/age 从 20 变成 21，是 changed；/active 只在 Before 里，是 removed；/role 只在 After 里，是 added。",
        "【操作提示｜推进第 2 步，指向 /user 的说明】\n\n/user 在两边都属于是对象，本身没有改，状态是 unchanged，但下面有变化，带 hasDiffDescendant。它不增加差异数。",
        "【操作提示｜推进第 3 步，指向底部横条】\n\n直接差异一共 3 处。这是还没有打开“只看变化”时的结果。"
      ],
      "teaching": [],
      "source": "index.html#p41",
      "seconds": 90
    },
    {
      "id": "p42",
      "segment": "手工核算",
      "label": "筛选后计数变不变",
      "title": "筛选后留下了 /user，差异数要不要变成 4？",
      "lead": "打开“只看变化”后，图上会留下什么？请先判断差异数变不变。",
      "html": "<style>#p42 .p-tree{padding:8px 14px;font-size:17px;line-height:1.38}</style><div class=\"ch4-split\" style=\"--cols:minmax(0,1.16fr) minmax(0,0.84fr)\"><div class=\"ch4-stack\"><div data-reveal=\"0\"><h3 style=\"font-size:19px;margin:0 0 8px\">只看变化（示意）</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch4-sym is-anc\">▽ 下面有变化</span><span class=\"ch4-sym is-nocnt\">保留定位</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"ch4-sym is-nocnt\">隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch4-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch4-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch4-sym is-add\">+ added</span></li></ul></div></div><div class=\"ch4-stack\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:21px;margin:8px 0 0\">留下了 <code>/user</code>，差异数要不要从 3 变成 4？</h3></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"ok\">✓ 不要，仍为 3 处</span><p style=\"font-size:18px;margin:8px 0 0\">保留 <code>/user</code> 祖先只为了定位差异，筛选前后计数规则不变</p></div></div></div><p class=\"source-note\" style=\"margin-top:8px\">合并图为课程自绘示意，JSON Diff 尚未实现</p>",
      "steps": [
        "筛选后留下什么",
        "先判断计数",
        "仍为 3"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，依次指合并图里留下的节点，以及被隐藏的 /user/name】\n\n打开“只看变化”之后，三条差异还在图上；/user 是定位 /user/age 需要的祖先，也留下；没有变化的 /user/name 藏起来。这张图是示意，JSON Diff 还没有实现。",
        "【操作提示｜推进第 2 步，指向判断问题；停顿数秒】\n\n现在请判断：筛选后的图留下了 /user，差异数要不要从 3 变成 4？",
        "【操作提示｜推进第 3 步，指向右下角参考结论卡；讲完进入 p43】\n\n不要，仍然是 3。留下 祖先节点 是为了定位，计数规则不变。筛选前后，差异数都是 3。"
      ],
      "teaching": [],
      "source": "index.html#p42",
      "seconds": 90
    },
    {
      "id": "p43",
      "segment": "写成验收",
      "label": "写成可核对的案例",
      "title": "怎样把刚才的判断写成可重复核对的案例？",
      "lead": "刚才的判断不能只留在讲述里。写成输入、动作和预期，以后每次都能按同样条件检查。这就是 Acceptance。",
      "html": "<div class=\"ch4-2col-wide\" style=\"--cols:minmax(0,1.32fr) minmax(0,0.88fr);gap:14px;align-items:start\"><div class=\"ch4-gwt\" data-reveal=\"0\"><div class=\"ch4-gwt-row\"><span class=\"p-tag\" data-role=\"ctx\">Given · 给定</span><span style=\"font-size:18px\">上面固定的 Before 和 After，筛选设为关闭</span></div><div class=\"ch4-gwt-row\"><span class=\"p-tag\" data-role=\"tool\">When · 操作</span><span style=\"font-size:18px\">比较两份输入，再开启“只看变化”</span></div><div class=\"ch4-gwt-row\"><span class=\"p-tag\" data-role=\"ok\">Then · 预期</span><span style=\"font-size:17.5px\"><code>/user/age</code> 为 <code>changed</code>、<code>/active</code> 为 <code>removed</code>、<code>/role</code> 为 <code>added</code>；差异数为 3，筛选前后不变；<code>/user</code> 保留，<code>/user/name</code> 隐藏</span></div></div><div class=\"ch4-stack\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">写入哪里</span><h3 style=\"font-size:21px;margin:6px 0 4px\"><code>ACCEPTANCE.md</code></h3><p style=\"font-size:18px;margin:0\">给 <code>AC-*</code> 编号，关联自己 Spec 里的 <code>REQ-*</code></p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ctx\">固定素材</span><h3 style=\"font-size:21px;margin:6px 0 4px\"><code>docs/specs/fixtures/</code></h3><p style=\"font-size:18px;margin:0\">和其它规格资产放在一起，不能只写“应该正确”</p></div></div></div>",
      "steps": [
        "Given–When–Then",
        "编号和关联",
        "固定素材放哪里"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向左侧 Given–When–Then 三段】\n\n刚才的判断不能只留在讲述里。把输入、动作和预期写成一条案例，以后每次都能按同样条件检查。这就是 Acceptance。",
        "【操作提示｜推进第 2 步，指向编号和关联】\n\n这条案例要写进 ACCEPTANCE.md，给一个 AC 编号，并关联自己 Spec 里关于状态、计数和筛选的 REQ。",
        "【操作提示｜推进第 3 步，指向固定素材路径】\n\n固定的输入和期望叫做 fixture，放在项目根目录的指定路径下，和规格文件放在一起。不能只写“比较应该正确”。判对错，靠的就是这些固定输入、动作和可核算的结果。"
      ],
      "teaching": [],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "写成验收",
      "label": "一条案例够不够",
      "title": "一条案例够不够覆盖全部规则？",
      "lead": "一个嵌套案例盖不住全部已批准规则。回到 Spec，优先复用上一节已经用过的小例子，再补错误和使用条件。",
      "html": "<style>#p44 .p-matrix span{padding:4px 10px;font-size:17.5px;line-height:1.28}</style><div class=\"p-matrix\" style=\"grid-template-columns:195px minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>案例或检查组</span><span>需要核对什么</span></div><div data-reveal=\"0\"><span style=\"font-weight:700\">相同输入、键换序</span><span>差异数都为 0</span></div><div data-reveal=\"0\"><span style=\"font-weight:700\">增删改、嵌套</span><span>核对状态、计数和筛选；整棵增删时根计 1 处</span></div><div data-reveal=\"0\"><span style=\"font-weight:700\">数组按索引</span><span><code>[10,20]</code> → <code>[5,10,20]</code>，两处 changed、一处 added，共 3 处，不报告移动</span></div><div data-reveal=\"1\"><span style=\"font-weight:700\">类型、空值</span><span>类型变化按已批准规则核算；<code>null</code> 与字段缺失按同样规则处理，并有对应验收案例</span></div><div data-reveal=\"1\"><span style=\"font-weight:700\">非法输入</span><span>指明是 Before 还是 After 出错，保留上次有效结果</span></div><div data-reveal=\"1\"><span style=\"font-weight:700\">节点上限</span><span>按 dev:www 环境的 2000 核算，removed 计入；超限不画图，只提示图太大</span></div><div data-reveal=\"2\"><span style=\"font-weight:700\">窄屏、可辨认</span><span>360px 宽窗口可操作、可查看；状态不单靠颜色；键盘不是必做组</span></div><div data-reveal=\"2\"><span style=\"font-weight:700\">本地处理</span><span>只查这次比较有没有把 JSON 发出去</span></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:8px\">这几组通过了，还<b>不能</b>宣布整功能验收完成：错误、上限、窄屏、可辨认、本地处理仍要核对</div>",
      "steps": [
        "常见案例",
        "类型、错误与上限",
        "窄屏与本地处理",
        "几个案例通过就算完成吗"
      ],
      "script": [
        "【操作提示｜停留课件 p44 第 1 步，指向前三行】\n\n一条嵌套案例没发 cover 所有的规则。先看这几组：相同输入，以及只改对象当中的键序，差异数都是 0；增删改和嵌套，要核对状态、计数和筛选；整棵对象树或数组增删时，只在根节点上计 1 处修改。数组按索引比较，10、20 变成 5、10、20，是两处 changed、一处 added，共 3 处，不报告移动。",
        "【操作提示｜推进第 2 步，指向中间三行】\n\n类型变化按我们之前批准的规则来算。null 和字段缺失按同样规则处理，验收里要有对应案例。输入出错要分清是 Before 还是 After，并检查是否保留了上次有效结果。节点上限按 pnpm dev:www 环境的 2000 核算，删掉的节点也计入；超过上限只提示图太大，不画合并图。",
        "【操作提示｜推进第 3 步，指向最后两行】\n\n在 360 像素宽的窗口里，两侧输入要能操作，错误和结果要能看见；每种状态除了颜色，还要有文字或符号。本地处理只查这次比较有没有把 JSON 发出去；页面上出现别的网络请求，不等于违反这条规则。",
        "【操作提示｜推进第 4 步，指向底部横条】\n\n如果后面实现时，相同输入、键换序和数组案例都通过了，能不能宣布整个功能验收完成？还不能。错误恢复、上限、窄屏、可辨认和本地处理，还要按各自的案例核对。"
      ],
      "teaching": [],
      "source": "index.html#p44",
      "seconds": 120
    },
    {
      "id": "p45",
      "segment": "写成验收",
      "label": "让 Agent 起草验收",
      "title": "怎样让 Agent 起草验收？",
      "lead": "结合自己已经审过的 Spec 组织请求：说明依据和目标文件，要求每条案例写清固定输入、动作和预期，并关联实际存在的 REQ",
      "html": "<div class=\"ch4-delegation\"><div class=\"ch4-del-col\" data-reveal=\"0\"><div class=\"p-box ch4-del-card\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:2px;align-self:flex-start\">读哪些依据</span><div class=\"ch4-file-stack\"><div class=\"ch4-file-chip\" data-role=\"ctx\"><code>docs/specs/SPEC.md</code><span>已审过且已批准的 REQ-*</span></div><div class=\"ch4-file-chip\" data-role=\"ctx\"><code>p41–p44 手算</code><span>路径、状态、计数与 8 组边界</span></div></div><p class=\"ch4-del-note\">若发现规则冲突，先回 4.3 把 Spec 审清楚</p></div></div><div class=\"ch4-contract\"><div class=\"ch4-contract-row\" data-key=\"依据与目标\" data-reveal=\"0\"><span class=\"ch4-contract-key\">依据与产出</span><span>按已审过的 <code>SPEC.md</code> 起草验收和固定素材</span></div><div class=\"ch4-contract-row\" data-key=\"案例写法\" data-reveal=\"1\"><span class=\"ch4-contract-key\">每条案例</span><span>Given / When / Then 固定，关联实际存在的 <code>REQ-*</code></span></div><div class=\"ch4-contract-row\" data-key=\"改动范围\" data-reveal=\"2\"><span class=\"ch4-contract-key\">范围与未决</span><span>只写规格和验收素材，不改生产代码；未决交给人</span></div><div class=\"ch4-contract-row\" data-key=\"请求参考\" data-reveal=\"3\"><span class=\"ch4-contract-key\">按实际调整</span><span>打开真实文件抽查，不只看“已完成”</span></div></div><div class=\"ch4-del-col\"><div class=\"p-box ch4-del-card\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\" style=\"margin-bottom:2px;align-self:flex-start\">请 Agent 起草</span><div class=\"ch4-file-stack\"><div class=\"ch4-file-chip\" data-role=\"agent\"><code>docs/specs/ACCEPTANCE.md</code><span>含 AC-* 与预期</span></div><div class=\"ch4-file-chip\" data-role=\"agent\"><code>docs/specs/fixtures/</code><span>固定测试 JSON 输入</span></div></div></div><div class=\"ch4-pop-dock\" data-reveal=\"3\"><span class=\"ch4-pop-dock-hint\">把 Spec 依据与范围写进请求，示例仅供参考</span><details class=\"p-pop\"><summary>示例：按实际 Spec 调整</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>请求表达示例</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px;font-size:17px\">按你自己的 Spec 与规则编号改写，下面先给简版表达方式，再附课堂演练时教师使用的完整 Prompt 供参考</p><div class=\"p-code\"><div class=\"p-code-head\"><span>请求示例（简版）</span></div><pre style=\"padding:12px 14px;white-space:pre-wrap;font-size:17px;line-height:1.55\">依据已审过的 docs/specs/SPEC.md 起草 docs/specs/ACCEPTANCE.md 和 docs/specs/fixtures/。\n每条案例写清固定输入、动作和预期，并关联实际存在的 REQ-*。\n只写规格和验收素材，不修改生产代码；尚未决定的行为留给人决定。</pre></div><p style=\"margin:12px 0 6px;font-size:17px\"><b>课堂演练时教师 Prompt（供参考）</b>：按自己的 Spec 编号与实际规则调整，不必逐字照抄</p><div class=\"p-code\"><div class=\"p-code-head\"><span>课堂演练时教师 Prompt（供参考）</span></div><pre style=\"padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55\">请先阅读已经审过的 docs/specs/SPEC.md，根据其中已批准（Approved）的 32 条规则（REQ-001~REQ-031 与 REQ-038），起草 docs/specs/ACCEPTANCE.md，并在 docs/specs/fixtures/ 下保存固定素材与素材索引。同时建立实际存在的 REQ-* 与 AC-* 的对应关系。\n\n这一步只新建 docs/specs/ACCEPTANCE.md 和 docs/specs/fixtures/ 下的文件，不要修改生产代码，也不要修改 docs/specs/BRIEF.md、docs/specs/SPEC.md 或 docs/specs/sources/requirement-note.md。\n\n要求：\n1. 每条验收案例使用 Given–When–Then 写清固定输入、操作步骤和可核算的预期；JSON 路径统一用斜杠形式（例如 /user/age、/active、/role，根路径写成 /），不要混用点号写法。\n2. 每条案例关联 SPEC.md 中实际存在的 REQ-*，不要编造编号。一个案例可以同时核对多条规则。\n3. 只为 32 条 Approved 规则固定验收标准。6 条 Draft（REQ-032~REQ-037，如 1 与 1.0、本地存储、节点点击详情等）与 5 条 Deferred（REQ-039~REQ-043）单独列出留给人决定，不要自行补成标准答案，也不要改动状态。\n4. 纳入下面这对已经手算过的嵌套案例，并保存对应 fixture：\n   Before：{&quot;user&quot;:{&quot;name&quot;:&quot;Lin&quot;,&quot;age&quot;:20},&quot;active&quot;:true}\n   After：{&quot;user&quot;:{&quot;name&quot;:&quot;Lin&quot;,&quot;age&quot;:21},&quot;role&quot;:&quot;student&quot;}\n   预期按已批准规则核算：/user/age 为 changed、/active 为 removed、/role 为 added，/user 为 unchanged 且带 hasDiffDescendant 不计入差异数；直接差异共 3 处；开启“只看变化”后保留 /user、隐藏 /user/name、差异数仍为 3。\n5. 扩展到一组验收，覆盖全部 Approved 规则：\n   - 相同输入与只改对象键顺序（差异数都为 0）；\n   - 增删改与整棵对象或数组增删（只在根计 1 处，内部子节点仍逐个标为 added / removed）；\n   - 数组按索引比较：[10,20] → [5,10,20]（两处 changed、一处 added，共 3 处，不报告移动）；\n   - 类型变化（如 1 变成 &quot;1&quot; 统一记为 changed）与字段值为 null 等同于路径不存在（REQ-003），固定对应案例；\n   - 非法输入：分别验证 Before 出错、After 出错（保留上次有效结果），以及首次比较即出错（显示空状态和错误提示），改回合法输入后恢复正常比较；\n   - 窄屏与可辨认：360px 宽窗口中两侧输入、错误提示和结果都能操作与查看；每种状态除颜色外还有文字或符号（键盘操作未在 SPEC 批准，不写为必做组）；\n   - 本地处理：只核对本次比较和切换“只看变化”时，两份 JSON 内容没有因比较功能被发送到网络（页面上其他无关请求不视为违反）；\n   - 原有单输入链路兼容（REQ-038）：核对新增 JSON Diff 功能后，原有单份 JSON 输入与可视化查看保持可用。\n6. 节点上限案例按 pnpm dev:www 环境的 2000 核算，removed 节点也计入上限；准备低于上限与超过上限的可重现对照素材（写清节点数估算口径，不把行数直接当节点数），超过上限时只提示图太大、不渲染合并图，且不出现指向外部产品的升级链接。\n7. 在 ACCEPTANCE.md 中附上 REQ-* 与 AC-* 的覆盖对应表，检查全部 32 条 Approved 规则至少各有 1 条对应 AC-*，且每条 AC-* 都能指回需求并真正在核对那条行为。完成后运行 git status --short --untracked-files=all 给我看。</pre></div></div></details></div></div></div>",
      "steps": [
        "依据与产出",
        "案例怎么写",
        "范围与未决事项",
        "按实际组织请求"
      ],
      "script": [
        "【操作提示｜停留课件 p45 第 1 步，指向左栏“读哪些依据”与右上产出卡；不切窗口】\n\n讲到这里我们其实已经很清晰了，就是需要针对我们的决策，给出一系列案例，帮助 agent 验收；现在让 Agent 把验收案例写成 Acceptance。我们的 prompt 当中要先说清依据：已经审过的 SPEC.md；还要说明这次要起草 ACCEPTANCE.md，并准备固定素材。",
        "【操作提示｜推进第 2 步，指向中间第二行“每条案例”】\n\n再说清每条案例怎么写：给定输入、动作和预期都要固定下来，并关联自己 Spec 里实际存在的 REQ。",
        "【操作提示｜推进第 3 步，指向中间第三行“范围与未决”】\n\n范围要写清楚：只写规格和验收素材，不要改生产代码。还没决定的行为交给人，不要让 Agent 写成标准答案。如果已经批准的规则互相冲突，先回到上一节把规则审清楚。",
        "【操作提示｜推进第 4 步，必要时点开右侧“请求表达示例”；切到 Codex，在 4.2 到 4.3 的同一会话中结合当前 Spec 组织起草请求；等待回复后切回课件进入 p46】\n\n请求的具体措辞，按照你自己的 Spec 来组织。页面右侧有一个示例弹窗，帮助你看清表达方式；确认依据和要求之后，在同一会话发给 Agent。"
      ],
      "repro": {
        "label": "跟做：起草验收",
        "steps": [
          {
            "text": "打开自己在上一节审过的 SPEC.md，对照怎样写成案例、以及案例组那两页，整理要覆盖的已批准规则和仍未决定的问题。",
            "code": ""
          },
          {
            "text": "向 Agent 说明依据、目标文件和案例要求，按本次实际内容组织起草请求。只写规格和验收素材，不改生产代码。",
            "code": ""
          },
          {
            "text": "打开得到的 ACCEPTANCE.md 和 fixtures，按下一页的观察点抽查。",
            "code": ""
          }
        ],
        "note": "请求措辞和编号会因 Spec 不同而变化；未决行为仍需人决定。"
      },
      "teaching": [],
      "source": "index.html#p45",
      "seconds": 120
    },
    {
      "id": "p46",
      "segment": "写成验收",
      "label": "验收文档审什么",
      "title": "验收文档审什么？",
      "lead": "打开 Agent 生成的 ACCEPTANCE.md 和固定素材，对照手算和自己的 Spec 抽查。打开实际文件核对，不要只看“已完成”。",
      "html": "<div class=\"ch4-review-grid\"><div class=\"p-box ch4-doc-outline\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:0;align-self:flex-start\">ACCEPTANCE.md + fixtures/</span><div class=\"ch4-doc-card\"><code>docs/specs/ACCEPTANCE.md</code><p>Given/When/Then 清楚，关联实际的 REQ-*</p></div><div class=\"ch4-doc-card\"><code>docs/specs/fixtures/</code><p>输入输出固定可重现，与路径口径一致</p></div><p class=\"ch4-del-note\">发现与规则冲突时，先回 4.3 把 Spec 审清楚</p></div><ol class=\"ch4-review-list\"><li data-reveal=\"0\"><span><b>嵌套案例</b><small>路径、状态、计数、筛选是否和手算一致</small></span></li><li data-reveal=\"1\"><span><b>错误或边界</b><small>前置、动作、预期是否足以按同步骤重做</small></span></li><li data-reveal=\"2\"><span><b>覆盖检查</b><small>已批准规则都有对应 AC，并且真正在核对那条行为</small></span></li></ol></div><div class=\"ch4-review-foot\" data-reveal=\"3\"><div class=\"p-bar is-light\">审完看 <b>git status</b>：新增只在 docs/specs/；本节不提交</div><details class=\"p-pop\"><summary>示例：路径与口径</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>一次实跑：路径写法和本地处理口径</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 10px;font-size:17px\">2026-11-10 备课实跑；以下是初稿和修改稿的摘录。每次生成的编号和内容可能不同</p><div class=\"ch4-2col\"><div class=\"p-box\" data-role=\"gate\"><span class=\"p-tag\" data-role=\"gate\">初稿</span><h3 style=\"font-size:20px\">路径和口径</h3><p>路径写成 <code>user.age</code></p><p>本地处理写成“没有因比较产生的请求”</p></div><div class=\"p-box\" data-role=\"us\"><span class=\"p-tag\" data-role=\"us\">修改后</span><h3 style=\"font-size:20px\">统一写法，收紧核对范围</h3><p>路径统一成 <code>/user/age</code>，根为 <code>/</code></p><p>只核对此次比较有没有把 JSON 内容发出去</p></div></div></div></details></div>",
      "steps": [
        "嵌套案例",
        "错误或边界",
        "覆盖检查",
        "修改并检查"
      ],
      "script": [
        "【操作提示｜停留课件 p46 第 1 步；切到编辑器打开 docs/specs/ACCEPTANCE.md 和对应的嵌套素材，对照前面的手算，再切回课件】\n\n验收起草好了，先打开实际文件，不要只看“已完成”。抽查嵌套案例：路径、状态、计数和筛选，是否和前面的手算一致。每个人的编号和条数都可能不同。",
        "【操作提示｜推进第 2 步；切到一个错误或边界案例，核对前置、动作和预期，再切回课件】\n\n再抽一个错误或边界案例。",
        "【操作提示｜推进第 3 步；对照自己的 Spec 和 ACCEPTANCE.md 的覆盖关系，再切回课件】\n\n再检查覆盖：每条已批准的规则有没有对应的验收案例，每条案例能不能指回需求，并且是在真正核对那条行为。",
        "【操作提示｜推进第 4 步；切到现场 ACCEPTANCE.md 和 fixtures/README.md，对照本次审查结果；在 Codex 中发送下方审查修改 Prompt、核对改后的文件并运行 git status；切回课件进入 p47】\n\n审出问题，就指出具体哪句话不对、依据是什么、希望怎样修改和改动的范围。拿我们这次生成的验收文件来说，刚才抽查出三处要一起修掉：第一，ACCEPTANCE.md 开头写着不验收的内容“见第 4 节”，实际正文里是第 3 节，这是节号笔误；第二，AC-17 的预期里多加了一句“提示中可读出实际节点数或上限值”，但 SPEC 里只要求超限时提示图太大、不带外部升级链接，没强制显示具体数字，验收不能替 Spec 多加要求，这条要删掉；第三，fixtures/README.md 里写 c17、c18 有 4000 行上下，实际这两个文件只有 2000 行左右，按真实行数核实修正。我们把这三条修改意见发给 Codex。\n\n【切换｜Codex】\n\n【操作提示｜以下整段为本次审查修改 Prompt，不照念，直接复制发送给 Codex】\n\n请按以下 3 条审查意见修改 docs/specs/ACCEPTANCE.md 和 docs/specs/fixtures/README.md，只改这两个文件，不要修改 BRIEF.md、SPEC.md、其他素材文件或任何生产代码：\n1. 修正节号笔误：docs/specs/ACCEPTANCE.md 第 3 行写了“见第 4 节”，实际文末对应章节是“## 3. 本次不验收的范围”，请改为“见第 3 节”。\n2. 收紧 AC-17 的预期边界：docs/specs/ACCEPTANCE.md 中 AC-17 的 Then 第 4 条写了“提示中可读出实际节点数或上限值”，但 SPEC.md 的 REQ-026、REQ-027 只要求超限时“不渲染合并图、只提示图太大、不出现外部产品升级链接”，没有强制要求展示具体数字。请删去这条多出来的断言，不要在验收里替 Spec 加要求。\n3. 修正素材行数说明：docs/specs/fixtures/README.md 第 29 行写“c17 / c18 的 JSON 文件有 4000 行上下”，实际这几个文件只有 2000 行左右。请按文件实际行数核实后改成准确表述，保留“节点数 ≠ 行数”的说明。\n改完后汇总改动点，并运行 git status --short --untracked-files=all 给我看。\n\n【切换｜回课件 p46】\n\n改完后，回头对照修改处和相关案例。页面里有一次备课时的路径写法和本地处理口径作例子，你自己的结果和编号可能不同；没有发现问题，也不必为了演示编造修改。最后看 git status：新增内容只在 docs/specs 下。如果验收和已经批准的规则冲突，先回到上一节把规则审清楚。本节先不提交。"
      ],
      "repro": {
        "label": "跟做：审查与修改",
        "steps": [
          {
            "text": "打开自己的 ACCEPTANCE.md 和固定素材，先抽查嵌套案例的路径、状态、计数和筛选，对照前面的手算。",
            "code": ""
          },
          {
            "text": "再抽一个错误或边界案例，看前置、动作和预期是否足以重做；再检查已批准规则是否都有对应案例。",
            "code": ""
          },
          {
            "text": "审出问题时，指出具体内容、对照依据、修改要求和范围，按实际情况交给 Agent 修改。回看修改处，再检查工作区。",
            "code": "git status --short --untracked-files=all"
          }
        ],
        "note": "实际问题和编号可能不同；没有审出问题时继续核对，不必编造修改。有冲突先回到上一节把规则审清楚。本节不提交。"
      },
      "teaching": [],
      "source": "index.html#p46",
      "seconds": 120
    },
    {
      "id": "p47",
      "segment": "自检与交接",
      "label": "哪段能当验收案例",
      "title": "这两段文字，哪段能当验收案例？",
      "lead": "能重复核对的，才能当验收案例。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch4-quiz-grid\"><div class=\"ch4-qcard\"><div class=\"ch4-qcard-top\"><div class=\"ch4-qcard-id\"><span class=\"ch4-qcard-num\">1</span><span class=\"ch4-qcard-label\">第一段</span></div><span class=\"ch4-qcard-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 不能当</span></div><p class=\"ch4-qcard-say\">“比较这两份 JSON，筛选后结果应该正确。”</p><div class=\"ch4-qcard-ans\" data-role=\"gate\" data-reveal=\"1\"><b>不能当</b>：没写清是哪些路径、什么状态、差异数是多少</div></div><div class=\"ch4-qcard\"><div class=\"ch4-qcard-top\"><div class=\"ch4-qcard-id\"><span class=\"ch4-qcard-num\">2</span><span class=\"ch4-qcard-label\">第二段</span></div><span class=\"ch4-qcard-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 能当</span></div><p class=\"ch4-qcard-say\">“<code>/user/age</code> 为 <code>changed</code>，<code>/active</code> 为 <code>removed</code>，<code>/role</code> 为 <code>added</code>；差异数为 3，筛选前后不变；<code>/user</code> 保留，<code>/user/name</code> 隐藏。”</p><div class=\"ch4-qcard-ans\" data-role=\"ok\" data-reveal=\"2\"><b>能当</b>：输入、动作对上后，可以按同样条件再检查一遍<br><a href=\"#p43\">回看怎样写成案例</a></div></div></div>",
      "steps": [
        "两段文字",
        "第一段",
        "第二段"
      ],
      "script": [
        "【操作提示｜停留课件 p47 第 1 步，指向暂停标记和两段文字；停顿数秒】\n\n停下来看这两段文字，哪一段能当验收案例？",
        "【操作提示｜推进第 2 步，指向第 1 段的参考判断】\n\n第一段只说比较这两份 JSON，筛选后结果应该正确。它没写清是哪些路径、什么状态、差异数是多少，不能当验收案例。",
        "【操作提示｜推进第 3 步，指向第 2 段的参考判断】\n\n第二段写清了三条路径和状态，差异数是 3，筛选前后不变，/user 留下、/user/name 隐藏。输入和动作对上以后，可以按同样条件再检查一遍，这一段能当。"
      ],
      "teaching": [],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "自检与交接",
      "label": "小结",
      "title": "这一节留下什么",
      "lead": "已批准的规则被写成可核算的案例。未决规则仍由人决定。下一节再决定怎么实施。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"ch4-takeaway-card\"><span class=\"ch4-takeaway-pin\">KEY</span><p>固定输入<br>动作和预期<br>能重复核对</p></div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>经过核算的 ACCEPTANCE.md</span></li><li class=\"is-pass\"><span>docs/specs/fixtures/</span></li><li class=\"is-pass\"><span>REQ-* 与 AC-* 的对应关系</span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>4.5 都定清楚了，为什么不一次写完？</h3><p>决定怎样实施；规格到 4.5 一起提交</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p48 第 1 步，指向左侧重点贴纸卡】\n\n回到开头的问题。光靠文字规则还不够，要把判断写成固定输入、动作和可验证的结果，才能重复核对。",
        "【操作提示｜推进第 2 步，指向“留下的”】\n\n这一节留下经过核算的 ACCEPTANCE.md，docs/specs/fixtures/ 下的固定素材，以及 REQ 和 AC 的对应关系。还没决定的规则，仍然由人来定。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 4.5，我们拿着 Spec、Acceptance 和已经做过的源码调查，决定在这个仓库里如何规划并实施我们的计划。当前的文档、素材可以先不提交，我们到 4.5 一起提交。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "手工核算",
      "seconds": 270
    },
    {
      "label": "写成验收",
      "seconds": 450
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};

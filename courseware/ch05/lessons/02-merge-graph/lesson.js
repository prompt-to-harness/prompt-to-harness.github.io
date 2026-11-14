window.lesson = {
  "title": "字段删掉了，结果图上怎样看见它",
  "chapter": "第 5 章 · SDD",
  "section": "05.02",
  "summary": "从同一组嵌套素材里被删掉的字段出发，看清只按 After 构图为什么看不见它，再把两侧映射到现有图数据上并核对照射结果。",
  "scenes": [
    {
      "id": "p11",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "字段删掉了，结果图上怎样看见它",
      "title": "图上怎样看见被删掉的字段？",
      "lead": "上一节留下了已验证的差异模型，生产代码里还没有合并图。这一节要回答：字段删掉了，结果图上怎样看见它？",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-now\"><b>5.2</b>合并图</li><li><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">5.1 留下：<b>已验证的差异模型</b>；生产代码里还没有合并图</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节要留下：可被现有图消费的映射、工作区外的一次性脚本和实际检查结果，并更新 <code>CH05_IMPLEMENTATION.md</code></div>",
      "steps": [
        "本章位置",
        "5.1 留下什么",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，指向章节地图上的 5.2；不切窗口】\n\n上一节，我们留下了已验证的差异模型，生产代码里还没有合并图。地图上，这一节是 5.2。",
        "【操作提示｜推进第 2 步，指向 5.1 留下的差异模型；不切窗口】\n\n先确认当前副本仍在 5.1 的功能分支上，差异模型任务已经完成。然后打开自己的映射任务，以及它关联的规则和案例。讲师演示用的是当前基线上的 TASK-02，以及关联的 REQ 和 AC；每个人的编号不必相同，但都要能在自己的文件里找到对应内容。",
        "【操作提示｜推进第 3 步，指向本节要留下的内容；讲完进入 p12】\n\n这一节要留下可被现有图消费的映射，工作区外的一次性脚本和实际检查结果，并更新 CH05_IMPLEMENTATION.md。字段删掉了，结果图上怎样看见它？我们先不要从映射步骤讲起，先回到 4.4 用过、5.1 也核对过的那组嵌套素材。"
      ],
      "teaching": [],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "被删掉的字段",
      "label": "只拿 After 来构图，被删掉的字段在哪里",
      "title": "只拿 After 来构图，被删掉的字段在哪里？",
      "lead": "规格已经要求删除字段作为 removed 留在结果里。先不要从映射步骤讲起。下面是实际的 fixtures/nested，请先判断：只拿 After 来构图，被删掉的字段在哪里？",
      "html": "<style>#p12 .p12-row{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:20px;margin-top:14px;align-items:stretch}#p12 .p52-trees{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:stretch;min-width:0}#p12 .p52-trees>div{display:flex;flex-direction:column;min-width:0}#p12 .p52-trees .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}#p12 .p-tree li{padding:1px 0}#p12 .p-tree ul{padding-left:24px;margin-left:8px}#p12 .p12-ask{display:flex;flex-direction:column;justify-content:center;height:100%;box-sizing:border-box;padding:16px 20px}#p12 .p12-ask h3{font-size:24px;margin:10px 0 0;line-height:1.4}</style><div class=\"p12-row\"><div class=\"p52-trees\" data-reveal=\"0\"><div><h3 style=\"font-size:18px;margin:0 0 6px\">Before</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 20</span></li></ul></li><li><span class=\"p-path\">active: true</span></li></ul></div><div><h3 style=\"font-size:18px;margin:0 0 6px\">After</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 21</span></li></ul></li><li><span class=\"p-path\">role: student</span></li></ul></div></div><div class=\"p-box p12-ask\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3>只拿 After 来构图，这个字段在哪里？</h3></div></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:12px\"><code>/active</code> 只存在于 <b>Before</b></div><p class=\"source-note\">实际素材：docs/specs/fixtures/nested/；按已批准规则判断，不是产品跑出来的结果</p>",
      "steps": [
        "Before 和 After",
        "/active 只在 Before",
        "先自己判断"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左侧 Before 和右侧 After；不切窗口】\n\n打开 docs/specs/fixtures/nested/。左边是 Before，右边是 After。这是规格里已经固定的输入，不是产品跑出来的结果。",
        "【操作提示｜推进第 2 步，指出 /active 只在 Before；不切窗口】\n\n请对照两边。/active 只出现在 Before 里。After 里没有这个字段，多了 /role，/user/age 从 20 变成了 21。",
        "【操作提示｜推进第 3 步，指向判断卡片；留出时间让学员判断；不切窗口；讲完进入 p13】\n\n请先判断：如果只拿 After 来构造图，这条被删掉的字段在哪里？4.3、4.4 已经要求，删除字段要作为 removed 留在结果里。当前基线上是 REQ-004、AC-010，以实际文件为准。这页先看见问题，先不谈映射步骤。"
      ],
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "被删掉的字段",
      "label": "怎样才能在一张图上看见它",
      "title": "怎样才能在一张图上看见它？",
      "lead": "只按 After 构图时，被删掉的字段不会出现。请对照「只画 After」和一张能表达状态的合并图，看 /active 怎样被看见。这一页把现象讲清，不展开实现细节。",
      "html": "<style>#p13 .p13-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}#p13 .p13-col{display:flex;flex-direction:column;min-width:0}#p13 .p13-col .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}#p13 .p-tree li{padding:1px 0}#p13 .p-tree ul{padding-left:24px;margin-left:8px}#p13 .p13-col h3{font-size:20px;margin:0 0 8px}</style><div class=\"p13-row\"><div class=\"p13-col\" data-reveal=\"0\"><h3>只画 After</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 21</span></li></ul></li><li><span class=\"p-path\">role: student</span></li></ul><div class=\"p-bar is-light\" style=\"margin-top:10px\"><code>/active</code> 消失</div></div><div class=\"p13-col\" data-reveal=\"1\"><h3>同一张合并图</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span></li></ul></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">删除信息来自 <b>Before</b>，必须把两侧映到同一张能表达状态的图上</div><p class=\"source-note\">合并图为课程自绘示意，用来对照映射后的图数据，不是产品界面</p>",
      "steps": [
        "只画 After",
        "同一张合并图",
        "必须映射两侧"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向左侧「只画 After」；不切窗口】\n\n如果只拿 After 来构图，/active 不在 After 里，图上也就不会出现它。",
        "【操作提示｜推进第 2 步，指向右侧合并图里的状态和祖先；不切窗口】\n\n再看同一张能够表达状态的合并图。/active 作为 removed 留下，/role 是 added，/user/age 是 changed；/user 本身是 unchanged，但作为通向 /user/age 的祖先，必须还能找到。",
        "【操作提示｜推进第 3 步，指向结论；讲完进入 p14】\n\n删除节点的原始信息来自 Before。必须把两侧信息映射到同一张能表达这些状态的图上，/active 才可能被看见。这不是并排两张图，也不是另做一套渲染引擎，而是把差异模型投影到现有图数据上。这一页把现象讲清，不展开实现细节。"
      ],
      "teaching": [],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "被删掉的字段",
      "label": "本节要检查到哪一步，才算映射做完",
      "title": "本节要检查到哪一步，才算映射做完？",
      "lead": "现有只按一份 JSON 构图的路径不够用。这一页先说明本节检查图数据的范围，先不下完成结论，也不把筛选界面算进这一节。",
      "html": "<style>#p14 .p14-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;align-items:start}#p14 .p14-tree .p-tree{padding:8px 14px;font-size:18px;line-height:1.4}#p14 .p-tree li{padding:1px 0}#p14 .p-tree ul{padding-left:24px;margin-left:8px}</style><div class=\"p14-row\"><div class=\"p14-tree\" data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 8px\">按「只看变化」算出的可见集合</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"p-note\">隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span></li></ul></div><div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"ctx\">本节核对图数据</span><p style=\"font-size:20px;margin:10px 0 0\">路径、状态、父子关系，以及筛选所需的可见集合</p></div><div class=\"p-bar is-light\" data-reveal=\"0\" style=\"margin-top:12px\">可见：<code>/</code>、<code>/user</code>、<code>/user/age</code>、<code>/active</code>、<code>/role</code>；<code>/user/name</code> 隐藏；差异数仍为 <b>3</b></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:10px\"><code>subtree</code> 中 <code>/gone</code>、<code>/gone/a</code>、<code>/gone/b</code> 均为 <code>removed</code>，且仍在图数据里</div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">「只看变化」开关、摘要和网页走查属于 <b>5.4</b>；期望表放到看完检查之后再完整对照</div><p class=\"source-note\">可见集合是图数据里的核对，不是界面走查</p>",
      "steps": [
        "图数据与可见集合",
        "被删子树仍保留",
        "筛选界面留给 5.4"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，指向图数据要核对的内容和可见集合；不切窗口】\n\n现有只按一份 JSON 构图的路径不够用。本节检查的是映射后的图数据：路径、状态、父子关系，以及按「只看变化」算出的可见集合。以 nested 为例，可见的是 /、/user、/user/age、/active、/role，/user/name 不在其中，差异数仍为 3。",
        "【操作提示｜推进第 2 步，指向被删子树仍留在图数据里；不切窗口】\n\n还要用 subtree 核对：整棵被删子树的节点仍留在图数据里。相同输入和键换序映射后仍是零差异，不能把节点 id 或建图顺序当成差异。",
        "【操作提示｜推进第 3 步，指向留给 5.4 的部分；讲完进入 p15】\n\n「只看变化」开关、摘要和网页里的走查，属于 5.4。不要以为第二节就已经验收了「只看变化」。完整的期望表，放到看完检查之后再对照。现在先看，怎样让 Agent 只完成映射，不顺手做界面。"
      ],
      "teaching": [],
      "source": "index.html#p14",
      "seconds": 90
    },
    {
      "id": "p15",
      "segment": "怎样发出请求",
      "label": "怎样让 Agent 只完成映射，不顺手做界面",
      "title": "怎样让 Agent 只完成映射，不顺手做界面？",
      "lead": "有了要核对的图数据范围，再确定这次怎么让 Agent 只完成映射。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">起点</span><h3 style=\"font-size:22px;margin:8px 0 0\">接着 5.1 的功能分支</h3><p>核对差异模型仍在，工作区可继续</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">验证</span><h3 style=\"font-size:22px;margin:8px 0 0\">一次性脚本，不入库</h3><p>核对照射后的图数据，再跑共享包 lint / build 和 <code>vscode</code> lint；不引入测试框架</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"agent\">请求要素</span><h3 style=\"font-size:22px;margin:8px 0 0\">任务、案例和允许范围</h3><p>输入是已验证的差异模型；产出可被现有图消费的数据</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">允许在共享包 <code>diff/</code> 新增映射，给 <code>types.ts</code> 与共享组件增加可选入口；不改既有 <code>json</code> 入口、<code>parser.ts</code> 和超限判定逻辑，不另做一套图。不要把启动网页、打开筛选当作本节完成条件</div><div style=\"margin-top:12px\" data-reveal=\"2\"><details class=\"p-pop\"><summary>一份请求草案</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>演示请求草案（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p><p style=\"margin:0 0 8px\">要写清：只完成当前映射任务；输入是已验证的差异模型；用 <code>nested</code>、<code>subtree</code>、<code>identical</code> 和 <code>key-order</code> 核对照射后的图数据，不要用待验证的映射生成期望；一次性脚本留在工作区外，不要提交；然后再运行共享包 <code>lint</code> / <code>build</code> 和 <code>vscode</code> lint。不要把启动网页或打开「只看变化」作为这次的完成条件。</p><p style=\"margin:0\"><code>null</code> 与字段缺失沿用 4.3 已确认的规则：值为 <code>null</code> 等同于该路径不存在。双输入、筛选开关和摘要留给后续任务。</p></div></details></div>",
      "steps": [
        "确定起点",
        "怎样验证",
        "请求里要写清什么"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，指向起点；不切窗口】\n\n先确定起点。接着 5.1 的功能分支，核对差异模型还在，工作区可以继续。已有改动或检查受阻时，保留现场并先处理起点；不能把未运行或失败的检查记为通过。",
        "【操作提示｜推进第 2 步，指向验证方式；不切窗口】\n\n这个仓库没有测试框架。验证方式是：用一次性脚本，不入库，把映射跑在刚才说的素材上，对照已经核算过的期望，检查图数据；再运行 pnpm --filter jsoncrack-react run lint、pnpm --filter jsoncrack-react run build，以及 pnpm --filter vscode run lint，确认既有 json 入口未受影响。不要引入测试框架，也不要把启动网页、打开筛选当作本节的完成条件。",
        "【操作提示｜推进第 3 步，指向请求要素和允许范围；讲完进入 p16】\n\n请求里要让 Agent 读到当前的映射任务、关联的 Spec 和 Acceptance、固定素材，以及全局约束和非目标。还要写清：输入是已经验证的差异模型，本次产出可被现有图消费的 NodeData 和 EdgeData，用哪些案例核对照射后的图数据，允许改到哪里。当前基线上，允许在共享包的 diff/ 新增映射，给 types.ts 与共享组件增加可选入口，节点组件可带状态文字或符号，并更新导出；不改既有 json 入口、parser.ts 和超限判定逻辑，也不另做一套图，不顺手改网页版 Diff 视图。双输入、筛选开关和摘要留给后续任务。null 与字段缺失沿用 4.3 已确认的规则：值为 null 等同于该路径不存在。用自己已经审过的规格组织请求。分镜里有一份演示请求草案，供备课实跑使用，不是固定的复制模板。当前副本对得上起点吗？请求该怎么发出？接下来会切到现场去做。"
      ],
      "teaching": [],
      "source": "index.html#p15",
      "seconds": 90
    },
    {
      "id": "p16",
      "segment": "怎样发出请求",
      "label": "当前副本对得上起点吗？请求该怎么发出",
      "title": "当前副本对得上起点吗？请求该怎么发出？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写 Agent 回答</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p16 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p16",
      "seconds": 30
    },
    {
      "id": "p17",
      "segment": "完成边界",
      "label": "怎样判断映射做到了完成边界",
      "title": "怎样判断映射做到了完成边界？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写运行结果</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p17 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p17",
      "seconds": 30
    },
    {
      "id": "p18",
      "segment": "完成边界",
      "label": "只在 After 中找节点，为什么无法核对删除",
      "title": "只在 After 中找节点，为什么无法核对删除？",
      "lead": "映射做完后，只在 After 中找节点，为什么无法核对删除？请先判断，再看原因。这是本节的学员判断，先不要下结论。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:24px;margin:8px 0 0\">只在 After 中找节点，为什么无法核对删除？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:14px\">删除信息来自 <b>Before</b>，要看映射后的实际节点和关系，才能判断 <code>/active</code> 是否作为 <code>removed</code> 被保留</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px\">图数据里已经能算出筛选可见集合，也不等于「只看变化」已经验收通过；筛选界面留给 5.4</div><p class=\"source-note\">期望以当前规格基线的实际文件为准</p>",
      "steps": [
        "先判断",
        "删除信息来自 Before",
        "可见集合还不等于验收"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：只在 After 中找节点，为什么无法核对删除？",
        "【操作提示｜推进第 2 步，指向删除信息来自 Before；不切窗口】\n\n因为删除节点的原始信息来自 Before。要看映射后的实际节点和关系，才能判断 /active 是否作为 removed 被保留。不能只在 After 里找节点，找不到就把「删除不必保留」写成新规则。",
        "【操作提示｜推进第 3 步，指向可见集合还不等于界面验收；讲完进入 p19】\n\n还要补一句：图数据里已经能算出筛选后的可见集合，也不等于「只看变化」已经验收通过。筛选界面还要等到 5.4 才接上。检查结果和期望不一致时怎么处理，上一节已经判断过，这里不再重讲。图数据已经能算出筛选后的可见集合，这两种做法哪样对？"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p19",
      "segment": "自检与交接",
      "label": "图数据已经能算出筛选后的可见集合，这两种做法哪样对",
      "title": "图数据已经能算出筛选后的可见集合，这两种做法哪样对？",
      "lead": "图数据里已经能算出筛选后的可见集合。这一问和上一页「为什么无法核对删除」不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>宣布「只看变化」已经验收通过</h3><div data-reveal=\"1\"><p>不对。不能把本节的数据核对，当成后面任务的界面验收</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>这只说明图数据具备筛选所需的信息，开关和界面走查还要等到 5.4</h3><div data-reveal=\"2\"><p>对。可见集合可以在图数据里核对，界面验收仍留给 5.4</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际运行</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p19 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。图数据里已经能算出筛选后的可见集合时，哪样对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，宣布「只看变化」已经验收通过。这样不对。本节核对的是图数据，不能当成后面任务的界面验收。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p20】\n\n第二种做法是，这只说明图数据具备筛选所需的信息，开关和界面走查还要等到 5.4。这样对。带着什么进入 5.3？我们把这一节要留下的东西收住。"
      ],
      "teaching": [],
      "source": "index.html#p19",
      "seconds": 90
    },
    {
      "id": "p20",
      "segment": "自检与交接",
      "label": "带着什么进入 5.3",
      "title": "带着什么进入 5.3？",
      "lead": "实现可以与讲师不同，但要能解释固定输入、预期、实际图数据和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.3。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:280px;font-size:22px\">只按 After 构图<br>看不见被删掉的字段</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">可被现有图消费的映射</li><li class=\"is-pass\">工作区外的一次性脚本和实际检查结果</li><li class=\"is-pass\">更新后的 CH05_IMPLEMENTATION.md</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>5.3 双输入</h3><p>拿着已验证的逻辑和图数据，去看一边输入错了时，已经得到的结果怎么办</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。字段删掉了，要在结果图上看见它，不能只按 After 构图。要把两侧映射到同一张能表达状态的图上，并核对照射后的图数据。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下可被现有图消费的映射，工作区外的一次性脚本和实际检查结果，以及更新后的 CH05_IMPLEMENTATION.md。实现可以与讲师不同，但要能解释固定输入、预期、实际图数据和代码改动。运行或环境受阻时，记录实际进展与错误，从已有的本地提交和课程提供的排障材料继续；不能承诺章节级恢复点。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 5.3，我们拿着已验证的逻辑和图数据，去看一边输入错了时，已经得到的结果怎么办。"
      ],
      "teaching": [],
      "source": "index.html#p20",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "被删掉的字段",
      "seconds": 270
    },
    {
      "label": "怎样发出请求",
      "seconds": 120
    },
    {
      "label": "完成边界",
      "seconds": 120
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};

window.lesson = {
  "title": "规格写好了，怎么知道第一个任务做对了",
  "chapter": "第 5 章 · SDD",
  "section": "05.01",
  "summary": "从一组能当场核对的输入看清差异模型，立住本章工作方式，再用六组已核算期望判断第一个任务的完成边界。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "规格写好了，怎么知道第一个任务做对了",
      "title": "怎么知道第一个任务做对了？",
      "lead": "上一章留下了已经提交的规格基线，生产代码里还没有 JSON Diff。这一章按规格把 JSON Diff 分片实现。这一节先回答：规格写好了，怎么知道第一个任务做对了？",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>5.1</b>差异模型</li><li><b>5.2</b>合并图</li><li><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">第 4 章留下：<b>已提交的规格基线</b>；生产代码里还没有 JSON Diff</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节要留下：已验证的差异模型、工作区外的一次性核对脚本和实际检查结果，以及 <code>CH05_IMPLEMENTATION.md</code> 初稿</div>",
      "steps": [
        "本章位置",
        "第 4 章留下什么",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向章节地图上的 5.1；不切窗口】\n\n上一章，我们提交了规格基线，生产代码里还没有 JSON Diff。从这一章开始，我们按已经提交的规格，把 JSON Diff 一块一块做出来。地图上，这一节是 5.1。",
        "【操作提示｜推进第 2 步，指向第 4 章留下的规格基线；不切窗口】\n\n先核对当前副本处在规格提交上，工作区干净。然后打开自己的差异模型任务，以及它关联的规则和案例。讲师演示用的是当前基线上的 TASK-01，以及关联的 REQ 和 AC；每个人的编号不必相同，但都要能在自己的文件里找到对应内容。",
        "【操作提示｜推进第 3 步，指向本节要留下的内容；讲完进入 p02】\n\n这一节要留下已验证的差异模型，工作区外的一次性核对脚本和实际检查结果，以及 CH05_IMPLEMENTATION.md 初稿。规格写好了，怎么知道第一个任务做对了？我们先不要从任务步骤讲起，先看一组很小、但能当场核对的输入。"
      ],
      "teaching": [],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "可核对的输入",
      "label": "这组输入，差异该是多少",
      "title": "这组输入，差异该是多少？",
      "lead": "规格已经写好，先不要从任务步骤讲起。下面是实际的 fixtures/key-order，请先按已经批准的规则判断：这组输入，差异该是多少？",
      "html": "<style>#p02 .p02-row{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:20px;margin-top:14px;align-items:stretch}#p02 .p02-trees{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:stretch;min-width:0}#p02 .p02-trees>div{display:flex;flex-direction:column;min-width:0}#p02 .p02-trees .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}#p02 .p-tree li{padding:1px 0}#p02 .p-tree ul{padding-left:24px;margin-left:8px}#p02 .p02-ask{display:flex;flex-direction:column;justify-content:center;height:100%;box-sizing:border-box;padding:16px 20px}#p02 .p02-ask h3{font-size:24px;margin:10px 0 0;line-height:1.4}</style><div class=\"p02-row\"><div class=\"p02-trees\" data-reveal=\"0\"><div><h3 style=\"font-size:18px;margin:0 0 6px\">Before</h3><ul class=\"p-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 20</span></li></ul></li><li><span class=\"p-path\">active: true</span></li></ul></div><div><h3 style=\"font-size:18px;margin:0 0 6px\">After</h3><ul class=\"p-tree\"><li><span class=\"p-path\">active: true</span></li><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">age: 20</span></li><li><span class=\"p-path\">name: Lin</span></li></ul></li></ul></div></div><div class=\"p-box p02-ask\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3>这组输入，差异该是多少？</h3></div></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:12px\">字段与值相同，只是顶层和嵌套对象的<b>键顺序</b>不同</div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:10px\">差异数 <b>0</b>，全部 <code>unchanged</code>，不该出现「字段顺序变化」</div><p class=\"source-note\">实际素材：docs/specs/fixtures/key-order/；按已批准规则判断，不是产品跑出来的结果</p>",
      "steps": [
        "Before 和 After",
        "键顺序不同",
        "先自己判断",
        "差异数是 0"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，指向左侧 Before 和右侧 After；不切窗口】\n\n打开 docs/specs/fixtures/key-order/。左边是 Before，右边是 After。这是规格里已经固定的输入，不是产品跑出来的结果。",
        "【操作提示｜推进第 2 步，对照两侧的字段和键顺序；不切窗口】\n\n请对照两边。字段和值是相同的，只是顶层和嵌套对象的键顺序不同。Before 里先是 user 再是 active，user 里先是 name 再是 age；After 里先是 active 再是 user，user 里先是 age 再是 name。",
        "【操作提示｜推进第 3 步，指向判断卡片；留出时间让学员判断；不切窗口】\n\n请先按已经批准的规则判断：这组输入，差异该是多少？4.3已经由人决定，对象键顺序忽略。",
        "【操作提示｜推进第 4 步，指向结论；讲完进入 p03】\n\n差异数应为 0，所有路径都是 unchanged，也不该出现「字段顺序变化」这类条目。4.4已经把这条规则写成了固定输入和零差异的期望，当前基线上是 REQ-007、AC-006，以实际文件为准。这页先看见可核对的结果，先不谈任务步骤。检查的是键顺序，还是对调两侧？这两件事要先分清。"
      ],
      "teaching": [],
      "source": "index.html#p02",
      "seconds": 120
    },
    {
      "id": "p03",
      "segment": "可核对的输入",
      "label": "检查的是键顺序，还是对调两侧",
      "title": "检查的是键顺序，还是对调两侧？",
      "lead": "上一页的零差异，检查的是对象键顺序。请分清这件事和对调 Before 与 After 有什么不同，以及比较时该怎样对齐两侧。先看对照，再看对齐方式。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:24px\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">键换序</span><h3 style=\"margin:10px 0 0\">字段与值相同，只是键顺序不同</h3><p>差异数是 0</p></div><div class=\"p-box\" data-role=\"gate\"><span class=\"p-tag\" data-role=\"gate\">对调两侧</span><h3 style=\"margin:10px 0 0\">把 Before 和 After 对调</h3><p>新增和删除会反向</p></div></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 18px;margin-top:16px\"><span class=\"p-tag\" data-role=\"ctx\">现有解析器</span><h3 style=\"font-size:22px;margin:8px 0 0\">按出现顺序发放节点 id；若复用，键换序会被误报</h3></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:16px\">差异模型要<b>按路径对齐</b>两侧，不复用那套 id</div>",
      "steps": [
        "两种不是同一件事",
        "不要复用节点 id",
        "按路径对齐"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，指向并排的两种情况；不切窗口】\n\n左边是刚才那组换序输入：字段与值相同，只是键顺序不同，差异数是 0。右边是对调 Before 和 After。两侧对调时，新增和删除本身就会反向。这不是同一件事，不能写成「输入顺序不能改变确定结果」。",
        "【操作提示｜推进第 2 步，指向解析器节点 id 的说明；不切窗口】\n\n还有一个容易混在一起的点。现有解析器按出现顺序发放节点 id。如果比较时复用这些 id，键换序会被误报成差异。",
        "【操作提示｜推进第 3 步，指向对齐方式；讲完进入 p04】\n\n差异模型要按路径对齐两侧，不复用那套 id。这一页只把对齐方式讲清，不展开实现细节。键换序让人立刻看见第一项工作的一部分结果，但它还不能覆盖任务要求的全部案例。除了键换序，第一个任务还要看什么？"
      ],
      "teaching": [],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p04",
      "segment": "可核对的输入",
      "label": "除了键换序，第一个任务还要看什么",
      "title": "除了键换序，第一个任务还要看什么？",
      "lead": "键换序让人看见第一项工作的一部分结果，但还不能覆盖任务要求的全部案例。这一页先列出范围，先不下完成结论。除了键换序，第一个任务还要看什么？",
      "html": "<div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 20px\"><span class=\"p-tag\" data-role=\"ctx\"><code>TASK-01</code> 还要覆盖</span><p style=\"font-size:22px;margin:10px 0 0\"><code>identical</code> · <code>nested</code> · <code>array-index</code> · <code>type-change</code> · <code>subtree</code></p></div><div class=\"p-bar is-light\" data-reveal=\"0\" style=\"margin-top:12px\">对应 <code>AC-002</code>、<code>AC-003</code>、<code>AC-005</code> 至 <code>AC-009</code>、<code>AC-011</code>，以实际文件为准</div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:10px\">筛选界面属于后续任务。本节只核对状态、差异数，以及「下层有变化」标记</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px\">期望表和「是否已经完成」，放到看完检查之后再判断</div>",
      "steps": [
        "还要覆盖的素材",
        "本节核对什么",
        "完成与否稍后判断"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，指向还要覆盖的素材；不切窗口】\n\n当前基线上，TASK-01 还要在 identical、nested、array-index、type-change、subtree 上给出与已核算期望一致的结果。对应验收是 AC-002、AC-003、AC-005 到 AC-009，以及 AC-011。编号以实际文件为准。",
        "【操作提示｜推进第 2 步，指向本节核对的范围；不切窗口】\n\n筛选界面属于后面的任务。这一节只核对模型是否给出状态、差异数，以及供后续筛选使用的「下层有变化」标记。",
        "【操作提示｜推进第 3 步，指向稍后判断的说明；讲完进入 p05】\n\n完整的期望表，以及「这一个任务是否已经完成」，放到看完检查之后再判断。现在先看，怎样让 Agent 只完成这一个任务。"
      ],
      "teaching": [],
      "source": "index.html#p04",
      "seconds": 90
    },
    {
      "id": "p05",
      "segment": "本章怎么干活",
      "label": "怎样让 Agent 只完成这一个任务",
      "title": "怎样让 Agent 只完成这一个任务？",
      "lead": "有了可核对的范围，再确定这次怎么让 Agent 只完成这一个任务。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">起点</span><h3 style=\"font-size:22px;margin:8px 0 0\">从规格提交创建功能分支</h3><p>核对版本和工作区</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">验证</span><h3 style=\"font-size:22px;margin:8px 0 0\">一次性脚本，不入库</h3><p>对照六组已核算期望，再跑共享包 lint；不引入测试框架</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"agent\">请求要素</span><h3 style=\"font-size:22px;margin:8px 0 0\">任务、案例和允许范围</h3><p>带上关联规则、素材、全局约束和非目标</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">允许新增 <code>packages/jsoncrack-react/src/diff/</code> 并更新导出；不改共享组件、渲染、网页版和现有 <code>parser.ts</code></div><div style=\"margin-top:12px\" data-reveal=\"2\"><details class=\"p-pop\"><summary>一份请求草案</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>演示请求草案（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p><p style=\"margin:0 0 8px\">要写清：只完成当前差异模型任务；用六组已核算期望核对，不要用待验证的比较逻辑生成期望；一次性脚本留在工作区外，不要提交；然后再运行 <code>pnpm --filter jsoncrack-react run lint</code></p><p style=\"margin:0\"><code>null</code> 与字段缺失仍是未决项，不要写成实现决定。值等价判定收敛到一个可替换的函数，除此之外不预设语义。</p></div></details></div>",
      "steps": [
        "确定起点",
        "怎样验证",
        "请求里要写清什么"
      ],
      "script": [
        "【操作提示｜停留课件 p05 第 1 步，指向起点；不切窗口】\n\n先确定起点。从规格提交创建本地功能分支，核对版本和工作区是否干净。已有改动或检查受阻时，保留现场并先处理起点；不能把未运行或失败的检查记为通过。",
        "【操作提示｜推进第 2 步，指向验证方式；不切窗口】\n\n这个仓库没有测试框架。验证方式是：用一次性脚本，不入库，把模型跑在刚才说的六组素材上，对照已经核算过的期望；再运行 pnpm --filter jsoncrack-react run lint。不要引入测试框架，也不要在仓库里留下测试套件。",
        "【操作提示｜推进第 3 步，指向请求要素和允许范围；讲完进入 p06】\n\n请求里要让 Agent 读到当前的差异模型任务、关联的 Spec 和 Acceptance、固定素材，以及全局约束和非目标。还要写清本次做什么、用哪些案例核对、允许改到哪里。当前基线上，允许范围是新增 packages/jsoncrack-react/src/diff/ 下的差异模型，并更新共享包导出；不改共享组件、不改渲染、不改网页版、不改现有 parser.ts。null 与字段缺失仍是未决项，不要写成实现决定；值等价判定要收敛到一个可替换的函数。用自己已经审过的规格组织请求。分镜里有一份演示请求草案，供备课实跑使用，不是固定的复制模板。这段只讲一次，当作本章的工作方式，后面不再重讲。当前副本对得上起点吗？请求该怎么发出？接下来会切到现场去做。"
      ],
      "teaching": [],
      "source": "index.html#p05",
      "seconds": 90
    },
    {
      "id": "p06",
      "segment": "本章怎么干活",
      "label": "当前副本对得上起点吗？请求该怎么发出",
      "title": "当前副本对得上起点吗？请求该怎么发出？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写 Agent 回答</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p06 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p06",
      "seconds": 30
    },
    {
      "id": "p07",
      "segment": "完成边界",
      "label": "怎样判断这一次做到了完成边界",
      "title": "怎样判断这一次做到了完成边界？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写运行结果</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p07 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 30
    },
    {
      "id": "p08",
      "segment": "完成边界",
      "label": "相同输入和键换序都通过了，差异模型任务就完成了吗",
      "title": "相同输入和键换序都通过了，差异模型任务就完成了吗？",
      "lead": "如果相同输入和对象键换序都通过了，差异模型任务就一定完成了吗？请先判断，再看六组已核算的期望。这是本节的学员判断，先不要下结论。",
      "html": "<style>body[data-mode=slides] #p08 .scene-content{top:220px;gap:8px}#p08 .p-matrix span{padding:4px 10px;font-size:17px;line-height:1.35}#p08 .p08-ask{padding:10px 20px}#p08 .p08-ask h3{font-size:24px;margin:8px 0 0;line-height:1.4}</style><div class=\"p-box p08-ask\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3>相同输入和键换序都通过了，差异模型任务就完成了吗？</h3></div><div class=\"p-matrix\" style=\"grid-template-columns:200px minmax(0,1fr);margin-top:8px\" data-reveal=\"1\"><div class=\"is-head\"><span>素材</span><span>已核算的期望</span></div><div><span><code>fixtures/key-order</code></span><span>差异数 0，无任何状态或「下层有变化」标记</span></div><div><span><code>fixtures/identical</code></span><span>差异数 0，无任何标记</span></div><div><span><code>fixtures/nested</code></span><span>差异数 3；<code>/user/age</code> 为 <code>changed</code>，<code>/active</code> 为 <code>removed</code>，<code>/role</code> 为 <code>added</code>；<code>/</code> 与 <code>/user</code> 带「下层有变化」标记，不计入差异数</span></div><div><span><code>fixtures/array-index</code></span><span><code>[10,20]</code> 变为 <code>[5,10,20]</code>，差异数 3：下标 0、1 为 <code>changed</code>，下标 2 为 <code>added</code>，不报告移动或元素配对</span></div><div><span><code>fixtures/type-change</code></span><span><code>/v</code> 由数字 <code>1</code> 变为字符串 <code>\"1\"</code>，记为 <code>changed</code>，差异数 1</span></div><div><span><code>fixtures/subtree</code></span><span>差异数 2：<code>/gone</code> 与 <code>/extra</code> 各计 1 处；其子路径各自带状态，但不单独计处</span></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:8px\"><b>没有</b>，数组、类型变化、嵌套路径和子树计数若属于该任务，仍要按各自要求检查；还要回看允许范围和可解释的 diff</div><p class=\"source-note\">期望以当前规格基线的实际文件为准</p>",
      "steps": [
        "先判断",
        "六组已核算期望",
        "还不算完成"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：如果相同输入和对象键换序两个案例都通过了，差异模型任务就一定完成了吗？",
        "【操作提示｜推进第 2 步，指向六组已核算期望表；不切窗口】\n\n先看这六组已经核算过的期望。key-order 和 identical，差异数都是 0，没有任何状态或「下层有变化」标记。nested 差异数是 3：/user/age 为 changed，/active 为 removed，/role 为 added；根路径和 /user 带「下层有变化」标记，不计入差异数。array-index 是 10、20 变成 5、10、20，差异数 3，下标 0、1 为 changed，下标 2 为 added，不报告移动或元素配对。type-change 是 /v 由数字 1 变成字符串「1」，记为 changed，差异数 1。subtree 差异数是 2：/gone 与 /extra 各计 1 处，子路径各自带状态，但不单独计处。这些期望以实际文件为准。",
        "【操作提示｜推进第 3 步，指向结论；讲完进入 p09】\n\n没有。这两个结果只覆盖对应案例。数组、类型变化、嵌套路径和整棵子树计数如果属于该任务，仍要按各自的要求检查。检查通过后，还要回看允许修改的范围和可解释的 diff，才有依据标记这个任务完成。其他任务的验收仍留给后续步骤。错误输入和节点上限不在这一节用来判断差异模型是否完成。检查结果和期望不一致时，这两种做法哪样对？"
      ],
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "自检与交接",
      "label": "检查结果和期望不一致时，这两种做法哪样对",
      "title": "检查结果和期望不一致时，这两种做法哪样对？",
      "lead": "跑完检查后，结果有可能和已经核算过的期望对不上。这一问和上一页的完成边界不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>把预期改成当前实现的结果，让检查通过</h3><div data-reveal=\"1\"><p>不对。不能为了让检查通过，改已经核算过的期望</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>先确认输入、期望与 Spec，再看实现和核对脚本哪里偏离</h3><div data-reveal=\"2\"><p>对。先核对依据，再看实现和脚本各自哪里偏离</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际运行</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。检查结果和已经核算过的期望不一致时，哪样对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，把预期改成当前实现的结果，让检查通过。这样不对。期望来自已经批准的行为和人工核算，不能为了让检查通过，改已经核算过的期望，也不能调用同一套待验证的比较逻辑来生成自己的期望。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p10】\n\n第二种做法是，先确认输入、期望与 Spec，再看实现和核对脚本各自哪里偏离。这样对。带着什么进入 5.2？我们把这一节要留下的东西收住。"
      ],
      "teaching": [],
      "source": "index.html#p09",
      "seconds": 90
    },
    {
      "id": "p10",
      "segment": "自检与交接",
      "label": "带着什么进入 5.2",
      "title": "带着什么进入 5.2？",
      "lead": "实现可以与讲师不同，但要能解释固定输入、预期、实际结果和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.2。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:280px;font-size:22px\">两个案例通过了<br>还不等于任务完成</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">已验证的差异模型</li><li class=\"is-pass\">工作区外的一次性脚本和实际检查结果</li><li class=\"is-pass\">CH05_IMPLEMENTATION.md 初稿</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>5.2 合并图</h3><p>拿着已验证的模型，去看被删除的字段怎样出现在合并图里</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。规格写好了，要知道第一个任务做对了，不能只看相同输入和键换序有没有通过。要对照任务要求的全部已核算期望，还要回看允许修改的范围和可解释的 diff。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下已验证的差异模型，工作区外的一次性核对脚本和实际检查结果，以及 CH05_IMPLEMENTATION.md 初稿，记录本次任务、关联依据、实际检查结果和未解决的问题。实现可以与讲师不同，但要能解释固定输入、预期、实际结果和代码改动。运行或环境受阻时，记录实际进展与错误，从已有的本地提交和课程提供的排障材料继续；不能承诺章节级恢复点。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 5.2，我们拿着已验证的模型，去看被删除的字段怎样出现在合并图里。"
      ],
      "teaching": [],
      "source": "index.html#p10",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "可核对的输入",
      "seconds": 300
    },
    {
      "label": "本章怎么干活",
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

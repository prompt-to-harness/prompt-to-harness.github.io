window.lesson = {
  "title": "各部分都做了，能说整个功能完成了吗",
  "chapter": "第 5 章 · SDD",
  "section": "05.04",
  "summary": "先把摘要和「只看变化」接到界面上并做局部检查，再按整组验收和 Review 判断整个功能有没有做完。",
  "scenes": [
    {
      "id": "p31",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "各部分都做了，能说整个功能完成了吗",
      "title": "能说整个功能完成了吗？",
      "lead": "5.1 至 5.3 留下了已验证的模型、映射和双输入，界面上还没有摘要与「只看变化」。这一节要回答：各部分都做了，能说整个功能完成了吗？先不要立刻做整功能验收。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-done\"><b>5.3</b>双输入</li><li class=\"is-now\"><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">5.1 至 5.3 留下：<b>已验证的模型、映射和双输入</b>；界面上还没有摘要与「只看变化」</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节要留下：通过本章验收的 JSON Diff、Review 结果和本地检查点，并更新 <code>CH05_IMPLEMENTATION.md</code></div>",
      "steps": [
        "本章位置",
        "5.1 至 5.3 留下什么",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p31 第 1 步，指向章节地图上的 5.4；不切窗口】\n\n前三节，我们留下了已验证的差异模型、合并图映射，以及可操作的双输入和错误路径。地图上，这一节是 5.4。",
        "【操作提示｜推进第 2 步，指向 5.1 至 5.3 留下的模型、映射和双输入；不切窗口】\n\n先确认当前副本仍在同一条功能分支上，前三个任务已经完成。然后打开自己的摘要、筛选与整体验收任务，以及它关联的规则和案例。讲师演示用的是当前基线上的 TASK-04，以及关联的 REQ 和 AC；每个人的编号不必相同，但都要能在自己的文件里找到对应内容。生产代码里已经有模型、映射和两侧输入，但差异摘要、「只看变化」、超限提示和状态可辨认还没有接到界面上。",
        "【操作提示｜推进第 3 步，指向本节要留下的内容；讲完进入 p32】\n\n这一节要留下通过本章验收的 JSON Diff、Review 结果、本地检查点，并更新 CH05_IMPLEMENTATION.md。各部分都做了，能说整个功能完成了吗？先不要立刻做整功能验收——摘要和筛选还没做出来，这个问题还问不完整。我们先用 4.4、5.1、5.2、5.3 同一组嵌套素材，把还没看见的部分接到界面上。"
      ],
      "teaching": [],
      "source": "index.html#p31",
      "seconds": 90
    },
    {
      "id": "p32",
      "segment": "还没看见的部分",
      "label": "同一组嵌套案例，摘要里的差异数该是多少",
      "title": "同一组嵌套案例，摘要里的差异数该是多少？",
      "lead": "先不要做整功能验收。用同一组 fixtures/nested，把还没看见的摘要立住。5.3 出错后仍能读到差异数，不等于摘要区已经完成。请先判断摘要里的数字，再看结论。",
      "html": "<style>#p32 .p32-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;margin-top:8px;align-items:stretch}#p32 .p32-inputs{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:stretch;min-width:0}#p32 .p53-field,#p32 .p32-result{display:flex;flex-direction:column;min-width:0;height:100%;box-sizing:border-box}#p32 .p53-field{border:1px solid var(--p-rule);border-radius:12px;padding:10px 12px;background:var(--p-card)}#p32 .p53-field-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px}#p32 .p53-field h3,#p32 .p32-result h3{font-size:18px;margin:0}#p32 .p53-field pre{margin:0;flex:1;font-family:var(--p-mono);font-size:15px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}#p32 .p32-result .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.35}#p32 .p-tree li{padding:1px 0}#p32 .p-tree ul{padding-left:22px;margin-left:8px}#p32 .p32-count{margin-left:8px;font-size:16px;color:var(--p-muted);white-space:nowrap}#p32 .p32-count.is-yes{color:var(--c);font-weight:700}</style><div class=\"p32-row\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 8px\">同一组嵌套输入</h3><div class=\"p32-inputs\"><div class=\"p53-field\" data-role=\"ink\"><div class=\"p53-field-head\"><h3>Before</h3></div><pre>{\"user\":{\"name\":\"Lin\",\"age\":20},\"active\":true}</pre></div><div class=\"p53-field\" data-role=\"ink\"><div class=\"p53-field-head\"><h3>After</h3></div><pre>{\"user\":{\"name\":\"Lin\",\"age\":21},\"role\":\"student\"}</pre></div></div></div><div class=\"p32-result\" data-reveal=\"1\"><h3 style=\"font-size:20px;margin:0 0 8px\">哪些计入摘要</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">/</span><span class=\"p-note\">unchanged · 下面有变化</span><span class=\"p32-count\" data-reveal=\"2\">不计</span><ul><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"p-note\">unchanged · 下面有变化</span><span class=\"p32-count\" data-reveal=\"2\">不计</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span><span class=\"p32-count is-yes\" data-reveal=\"2\">计 1</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span><span class=\"p32-count is-yes\" data-reveal=\"2\">计 1</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span><span class=\"p32-count is-yes\" data-reveal=\"2\">计 1</span></li></ul></li></ul><div class=\"p-bar is-light\" style=\"margin-top:10px\">请先判断：摘要里的数字是多少？</div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">摘要里的差异数为 <b>3</b>，不是 5；<code>/</code> 与 <code>/user</code> 不计入</div><p class=\"source-note\">输入来自 docs/specs/fixtures/nested/；计入规则按已批准规格判断，不是产品跑出来的结果</p>",
      "steps": [
        "Before 和 After",
        "三处直接差异，祖先不计",
        "差异数是 3，不是 5"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指向 Before 和 After；不切窗口】\n\n打开 docs/specs/fixtures/nested/。先不要做整功能验收。把还没看见的摘要立住。",
        "【操作提示｜推进第 2 步，指向三处直接差异，以及 / 与 /user 不计；不切窗口】\n\n标出三处直接差异：/user/age、/active、/role。/ 与 /user 只带「下层有变化」标记，不计入差异数。请先判断：摘要里的差异数该是多少？",
        "【操作提示｜推进第 3 步，指向结论「3，不是 5」；讲完进入 p33】\n\n差异数为 3，不是 5。当前基线上是 REQ-015、REQ-013、AC-003，以实际文件为准。5.3 出错后仍能读到差异数，不等于摘要区已经完成。同一组里，subtree 的摘要差异数为 2，只在 /gone 与 /extra 的根计处。"
      ],
      "teaching": [],
      "source": "index.html#p32",
      "seconds": 90
    },
    {
      "id": "p33",
      "segment": "还没看见的部分",
      "label": "打开「只看变化」之后，图上该留下什么",
      "title": "打开「只看变化」之后，图上该留下什么？",
      "lead": "5.2 留下的是图数据里的祖先信息，这一节才把筛选用到界面上。请对照「把未变化的都藏掉」和「保留必要上下文」。这一页把现象讲清，不展开实现细节。",
      "html": "<style>#p33 .p33-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}#p33 .p33-col{display:flex;flex-direction:column;min-width:0}#p33 .p33-col .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.35}#p33 .p-tree li{padding:1px 0}#p33 .p-tree ul{padding-left:22px;margin-left:8px}#p33 .p33-col h3{font-size:20px;margin:0 0 8px}</style><div class=\"p33-row\"><div class=\"p33-col\" data-reveal=\"0\"><h3>把未变化的都藏掉</h3><ul class=\"p-tree\"><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span></li></ul><div class=\"p-bar is-light\" style=\"margin-top:10px\">通向 <code>/user/age</code> 的 <code>/user</code> 也消失</div></div><div class=\"p33-col\" data-reveal=\"1\"><h3>保留必要上下文</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">/</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"p-note\">隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span></li></ul></li></ul><div class=\"p-bar is-light\" style=\"margin-top:10px\">可见 5 条，<code>/user/name</code> 隐藏，差异数仍为 <b>3</b></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\"><code>/user</code> 出现是为了保留上下文，不是多出来的一处差异；关闭后 <code>/user/name</code> 重新出现</div><p class=\"source-note\">对照为课程自绘示意，用来说明筛选后的可见集合，不是产品界面</p>",
      "steps": [
        "把未变化的都藏掉",
        "保留必要上下文",
        "/user 不是多出来的差异"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，指向「把未变化的都藏掉」；不切窗口】\n\n然后打开「只看变化」。先看一种做法：把未变化的都藏掉。通向 /user/age 的 /user 也消失了，上下文没了。",
        "【操作提示｜推进第 2 步，指向「保留必要上下文」；不切窗口】\n\n再看应有的对照：打开后，图上可见 /、/user、/user/age、/active、/role 共 5 条，/user/name 被隐藏；差异数开关前后都仍为 3。关闭后，/user/name 重新出现。",
        "【操作提示｜推进第 3 步，指向结论；讲完进入 p34】\n\n5.2 留下的是图数据里的祖先信息，这一节才把筛选用到界面上。/user 出现是为了保留上下文，不是多出来的一处差异。当前基线上是 AC-004，以实际文件为准。这一页把现象讲清，不展开实现细节。"
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 90
    },
    {
      "id": "p34",
      "segment": "还没看见的部分",
      "label": "本节要检查到哪一步，才算整个功能做完",
      "title": "本节要检查到哪一步，才算整个功能做完？",
      "lead": "这一页先说明本节还要局部检查的项目，以及后半段的整组验收，先不下完成结论。前三节的局部核对不能代替整组验收。",
      "html": "<div class=\"p-grid\" style=\"--n:2\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">灰度可辨认</span><h3 style=\"font-size:22px;margin:8px 0 0\">四种状态不依赖颜色</h3><p>转为灰度后，仍能凭文字或符号区分 added、removed、changed、unchanged</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">节点上限</span><h3 style=\"font-size:22px;margin:8px 0 0\">超限只提示图太大</h3><p>不渲染合并图，提示中没有外部升级链接；removed 计入上限</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:14px\">后半段按 <b>AC-001 到 AC-019</b> 整组走查，含 360px、切换「只看变化」时的网络面板、单输入回归和 Review</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">若计数、祖先保留或节点上限与已批准规则冲突，先更新 Spec / Acceptance / Tasks，再改代码；没有缺口就直接验证，不虚构缺失的需求</div><p class=\"source-note\">期望表放到看完检查之后再完整对照；「是否已经完成整功能验收」不在这页判断</p>",
      "steps": [
        "灰度可辨认和节点上限",
        "再做整组验收和 Review",
        "冲突时先改规格再改代码"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步，指向灰度可辨认和节点上限；不切窗口】\n\n局部检查还要覆盖另外两件规格已经要求、但前三节还没有在网页里核对的事。一是把结果转为灰度后，仍能凭文字或符号区分 added、removed、changed、unchanged，不依赖颜色。当前基线上是 REQ-026、AC-017。二是节点上限：开发环境上限为 2000，用 over.json 做比较时，不渲染合并图，只提示图太大，提示中没有指向外部产品的升级链接；removed 节点计入上限。当前基线上是 REQ-023、REQ-024、AC-015、AC-016。",
        "【操作提示｜推进第 2 步，指向整组走查；不切窗口】\n\n后半段才真正回答开篇那个问题。按当前 Acceptance 把整组案例走查一遍，包括 360px 窄屏、切换「只看变化」时的网络面板、Graph、Tree、导入弹窗、?json= 和 widget 的单输入回归，以及 Review。这些是 5.2、5.3 明确留给本节的，现在要把它们做完。前三节的局部核对不能代替整组验收。",
        "【操作提示｜推进第 3 步，指向规则冲突时怎么处理；讲完进入 p35】\n\n若检查发现计数、祖先保留或节点上限与已批准规则冲突，先更新 Spec、Acceptance 和相关任务，再改代码。没有缺口就直接验证，不要虚构一条缺失的需求。期望表放到看完检查之后再完整对照；「是否已经完成整功能验收」不在这页判断。现在先看，怎样让 Agent 做完摘要和筛选，并对照整组验收来收口。"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 90
    },
    {
      "id": "p35",
      "segment": "怎样发出请求",
      "label": "怎样让 Agent 做完摘要和筛选，并对照整组验收来收口，而不是只停在开关能用",
      "title": "怎样让 Agent 做完摘要和筛选，并对照整组验收来收口，而不是只停在开关能用？",
      "lead": "有了要核对的界面范围，再确定这次怎么让 Agent 做完摘要和筛选，并对照整组验收来收口。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">起点</span><h3 style=\"font-size:22px;margin:8px 0 0\">接着 5.3 的功能分支</h3><p>核对模型、映射与双输入仍在，工作区可继续</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">验证</span><h3 style=\"font-size:22px;margin:8px 0 0\">lint 与 build，再走查网页</h3><p>按 <code>AC-001</code> 到 <code>AC-019</code> 走查，并做 360px、灰度、网络面板和单输入回归；不引入测试框架</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"agent\">请求要素</span><h3 style=\"font-size:22px;margin:8px 0 0\">任务、案例和允许范围</h3><p>输入是已验证的模型、映射和双输入；一次请求覆盖两段</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">允许在 Diff 视图内新增摘要区、「只看变化」开关和无外链的超限提示；不决定 <code>REQ-032</code> 到 <code>REQ-037</code>，不改单输入超限组件。不要把 CR-01 或 5.5 的招数当作本节完成条件</div><div style=\"margin-top:12px\" data-reveal=\"2\"><details class=\"p-pop\"><summary>一份请求草案</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>演示请求草案（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p><p style=\"margin:0 0 8px\">要写清：只完成当前的摘要、筛选与整体验收任务；输入是已验证的模型、映射和双输入；先把差异摘要、「只看变化」和无外链的超限提示接到 Diff 视图上，并在界面上局部检查状态可辨认和节点上限；再按当前 Acceptance 走查全部案例，对照整组验收和 Review，判断整个功能有没有做完。用 <code>nested</code>、<code>subtree</code> 和 <code>limit</code> 素材核对摘要差异数、「只看变化」的可见集合、灰度可辨认和超限提示，不要用正在实现的界面逻辑生成期望；然后运行 <code>pnpm --filter www run lint</code> 和 <code>pnpm build:www</code>，再启动 <code>pnpm dev:www</code>，按 <code>AC-001</code> 到 <code>AC-019</code> 走查，并做 360px、灰度、网络面板和单输入回归，不要引入测试框架</p><p style=\"margin:0\">摘要只需能读到与模型口径一致的差异数，不要固化形态，也不要做分类计数。「只看变化」只实现开和关两种状态。第 6 章才会批准「明确提示当前图是上次有效结果」，不要把该提示设为必做，也不要刻意移除已经有的等价行为。可以使用 <code>/review</code> 检查未提交改动，但不把命令用法展开成这次的主要工作。若计数、祖先保留或节点上限与已批准规则冲突，先更新 Spec、Acceptance 和相关任务，再改代码；不要虚构一条缺失的需求。</p></div></details></div>",
      "steps": [
        "确定起点",
        "怎样验证",
        "请求里要写清什么"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步，指向起点；不切窗口】\n\n先确定起点。接着 5.3 的功能分支，核对模型、映射与双输入仍在，工作区可以继续。已有改动或检查受阻时，保留现场并先处理起点；不能把未运行或失败的检查记为通过。",
        "【操作提示｜推进第 2 步，指向验证方式；不切窗口】\n\n这个仓库没有测试框架。验证方式是：运行 pnpm --filter www run lint 与 pnpm build:www；若前序任务刚改过共享包，需先构建共享包。再启动 pnpm dev:www，开发环境上限是 2000，按 AC-001 到 AC-019 走查，并做 360px、灰度、网络面板和单输入回归。不要引入测试框架，也不要把 CR-01 或 5.5 的招数当作本节完成条件。",
        "【操作提示｜推进第 3 步，指向请求要素和允许范围；讲完进入 p36】\n\n请求里要让 Agent 读到当前的摘要、筛选与整体验收任务、关联的 Spec 和 Acceptance、固定素材，以及全局约束和非目标。还要写清：输入是已经验证的模型、映射和双输入；本次先做出摘要与「只看变化」，并在界面上局部检查状态可辨认和节点上限；再按整组验收和 Review 判断整个功能有没有做完；允许改到哪里。当前基线上，允许在 Diff 视图内新增差异摘要区、「只看变化」开关，以及无外链的超限提示组件；不决定 REQ-032 到 REQ-037，不改单输入路径现有的超限提示组件。摘要只需能读到与模型口径一致的差异数，不要固化形态，也不要做分类计数；「只看变化」只实现开和关两种状态。第 6 章才会批准「明确提示当前图是上次有效结果」，这次不要把该提示设为必做。可以使用产品自带的 /review 作为检查入口，但不把命令用法展开成教学内容。一次请求覆盖两段，对应当前基线上的 TASK-04。用自己已经审过的规格组织请求。分镜里有一份演示请求草案，供备课实跑使用，不是固定的复制模板。当前副本对得上起点吗？请求该怎么发出？接下来会切到现场去做。"
      ],
      "teaching": [],
      "source": "index.html#p35",
      "seconds": 90
    },
    {
      "id": "p36",
      "segment": "怎样发出请求",
      "label": "当前副本对得上起点吗？请求该怎么发出",
      "title": "当前副本对得上起点吗？请求该怎么发出？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写 Agent 回答</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p36 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p36",
      "seconds": 30
    },
    {
      "id": "p37",
      "segment": "完成边界",
      "label": "怎样判断摘要、筛选和整个功能做到了完成边界",
      "title": "怎样判断摘要、筛选和整个功能做到了完成边界？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写运行结果</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p37 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p37",
      "seconds": 30
    },
    {
      "id": "p38",
      "segment": "完成边界",
      "label": "摘要和「只看变化」在嵌套案例上做完了，就能说整个功能完成了吗",
      "title": "摘要和「只看变化」在嵌套案例上做完了，就能说整个功能完成了吗？",
      "lead": "摘要和「只看变化」在嵌套案例上做完了，就能说整个功能完成了吗？请先判断，再看还要核对的范围。这是本节的学员判断，先不要下结论。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:24px;margin:8px 0 0\">摘要和「只看变化」在嵌套案例上做完了，就能说整个功能完成了吗？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:14px\">不能。这一段只说明还没看见的部分已经接到界面上；整组验收还要走完，包括超限、灰度、360px、筛选时的网络面板、单输入回归和 Review</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px\">前三节的模型、映射和错误恢复结果，只支持它们各自覆盖的行为，不能互相替代</div><p class=\"source-note\">期望以当前规格基线的实际文件为准</p>",
      "steps": [
        "先判断",
        "还要走完整组验收",
        "前三节不能互相替代"
      ],
      "script": [
        "【操作提示｜停留课件 p38 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：摘要和「只看变化」在嵌套案例上做完了，就能说整个功能完成了吗？",
        "【操作提示｜推进第 2 步，指向「不能」和还要走完的验收；不切窗口】\n\n不能。这一段只说明还没看见的部分已经接到界面上，并且局部核对过；整组验收还要对照当前 AC 与任务完成定义走完，包括超限、灰度可辨认、360px、筛选时的网络面板、单输入回归，以及 Review。",
        "【操作提示｜推进第 3 步，指向前三节不能互相替代；讲完进入 p39】\n\n前三节的模型、映射和错误恢复结果，只支持它们各自覆盖的行为，不能互相替代。不要把「剩余界面做完」当成整功能通过验收。期望以实际文件为准。走查时发现计数、祖先保留或节点上限和已批准规则对不上，这两种做法哪样对？"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    },
    {
      "id": "p39",
      "segment": "自检与交接",
      "label": "走查时发现计数、祖先保留或节点上限和已批准规则对不上，这两种做法哪样对",
      "title": "走查时发现计数、祖先保留或节点上限和已批准规则对不上，这两种做法哪样对？",
      "lead": "走查时发现计数、祖先保留或节点上限和已批准规则对不上。这一问和上一页「摘要和筛选做完是否等于整组验收」不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>按当前实现改规则，或先补一条看起来缺的需求再改代码</h3><div data-reveal=\"1\"><p>不对。不能为了让检查通过而改已经核算过的期望，也不能虚构一条缺失的需求</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>先对照已批准规则；规则已定但案例确有遗漏，先补可核算验收并同步任务；真正要改产品行为，必须另行批准。没有缺口就直接验证，不能虚构缺失的需求</h3><div data-reveal=\"2\"><p>对。4.4 已为嵌套筛选安排案例，不能预设它一定缺失；已批准规则不能重新说成 Open</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际运行</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p39 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。走查时发现计数、祖先保留或节点上限和已批准规则对不上，哪样对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，按当前实现改规则，或先补一条看起来缺的需求再改代码。这样不对。不能为了让检查通过而改已经核算过的期望，也不能虚构一条缺失的需求。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p40】\n\n第二种做法是，先对照已批准规则；规则已定但案例确有遗漏，先补可核算验收并同步任务；真正要改产品行为，必须另行批准。没有缺口就直接验证。这样对。4.4 已经为嵌套筛选安排了案例，不能预设它一定缺失。已批准规则不能重新说成 Open。带着什么进入 5.5？我们把这一节要留下的东西收住。"
      ],
      "teaching": [],
      "source": "index.html#p39",
      "seconds": 90
    },
    {
      "id": "p40",
      "segment": "自检与交接",
      "label": "带着什么进入 5.5",
      "title": "带着什么进入 5.5？",
      "lead": "实现可以与讲师不同，但要能解释固定输入、预期、实际界面和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.5。5.5 不是进入第 6 章的判断门禁。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:300px;font-size:22px\">摘要和筛选做完<br>还不等于整个功能完成</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">通过本章验收的 JSON Diff、Review 结果和可解释的 diff</li><li class=\"is-pass\">本地检查点及已知缺口</li><li class=\"is-pass\">更新后的 CH05_IMPLEMENTATION.md</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>5.5 可带走的招数</h3><p>不再写新功能，只看一组可带走的招数</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。各部分都做了，能说整个功能完成了吗？摘要和「只看变化」做完，还不等于整个功能通过验收。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下通过本章验收的 JSON Diff、Review 结果、可解释的 diff、本地检查点及已知缺口，并更新 CH05_IMPLEMENTATION.md。实现可以与讲师不同，但要能解释固定输入、预期、实际界面和代码改动。运行或环境受阻时，记录实际进展与错误，从已有的本地提交和课程提供的排障材料继续；不能承诺章节级恢复点。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 5.5，不再写新功能，只看一组可带走的 Vibe Coding 招数。CR-01 留给第 6 章。5.5 不是进入第 6 章的判断门禁。"
      ],
      "teaching": [],
      "source": "index.html#p40",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "还没看见的部分",
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

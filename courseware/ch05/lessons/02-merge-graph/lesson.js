window.lesson = {
  "title": "字段删掉了，结果图上怎样看见它",
  "chapter": "第 5 章 · SDD",
  "section": "05.02",
  "summary": "从同一组嵌套素材里被删掉的字段出发，看清只按 After 构图为什么看不见它，再把两侧映射到独立合并图组件并核对结构与上限判定。",
  "prep": [
    "确认教学副本处于 5.1 功能分支，TASK-01 差异模型与 check-diff.ts（c01–c13）已通过且工作区干净",
    "编辑器定位 docs/specs/TASKS.md（TASK-02）、PLAN.md §2.1 及 fixtures/c03-nested、c05~c08、c17~c19",
    "核对开发环境节点上限 2000（c17=2102、c18=2051 含 150 removed、c19=101）均由参数传入共享包"
  ],
  "scenes": [
    {
      "id": "p11",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "字段删掉了，结果图上怎样看见它",
      "title": "图上怎样看见被删掉的字段？",
      "lead": "5.1 已验证纯函数差异模型；这一节把两侧差异映射到图数据，并建立独立合并图外壳",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-now\"><b>5.2</b>合并图</li><li><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">5.1 已就位</span><h3>按路径对齐的纯函数差异模型</h3><p>已能算出直接状态、差异数与祖先标记，但尚未生成合并图与 <code>DiffGraph</code></p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.2 完成后留下</span><ul class=\"ch5-mini-list\"><li>合并图映射、可见集计算与含 <code>removed</code> 上限判定</li><li>不动 <code>JSONCrackComponent</code> 的独立 <code>DiffGraph.tsx</code></li><li>扩展后的 <code>check-diff.ts</code> 与共享包 <code>lint / build</code></li></ul></div></div>",
      "steps": [
        "本章位置",
        "5.1 已就位",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，指向五节路线图的 5.2；不切窗口】\n\n上一节我们做好了差异模型，能按路径算出新增、删除和修改。但这些状态还只是纯数据，没有变成 JSON Crack 能渲染的图数据。",
        "【操作提示｜推进第 2 步，指向左侧“5.1 已就位”卡片；不切窗口】\n\n确认当前仍在同一条功能分支上、check-diff.ts 13 组素材检查全部通过后，打开合并图映射任务和 Plan 第 2.1 节的共享包设计。讲师演示对应基线上的 TASK-02。",
        "【操作提示｜推进第 3 步，指向右侧“本节交付”卡片；讲完进入 p12】\n\n这一节要把差异模型映射成合并图节点和连边，搭出独立的 DiffGraph 外壳，并把节点上限判定接在数据层。字段删掉了，结果图上怎样看见它？我们直接来看规格里的嵌套基准素材 c03-nested。"
      ],
      "teaching": [],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "被删掉的字段",
      "label": "只拿 After 构图，被删字段去哪了",
      "title": "只拿 After 构图，被删字段去哪了？",
      "lead": "打开 docs/specs/fixtures/c03-nested.*，先看只存在于 Before 的 /active 在单侧构图下会怎样。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch\"><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch\" data-reveal=\"0\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span><span>c03-nested.before.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 20 },</span><span class=\"del\">  &quot;active&quot;: true</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span><span>c03-nested.after.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 21 },</span><span class=\"add\">  &quot;role&quot;: &quot;student&quot;</span><span style=\"display:block\">}</span></pre></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"display:flex;flex-direction:column;justify-content:center;padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3 style=\"font-size:24px;margin:4px 0 8px\">只拿 After 解析构图，图上找得到 <code>/active</code> 吗？</h3><p style=\"font-size:19px;color:var(--p-muted)\">找不到——它不在 After 里，单侧解析会直接丢失删除项</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\"><code>/active</code> 只存在于 <b>Before</b>；已批准规则要求它作为 <code>removed</code> 保留在合并图上（<code>REQ-008</code> · <code>AC-03</code>）</div><p class=\"source-note\">实际素材：docs/specs/fixtures/c03-nested.before.json / after.json</p>",
      "steps": [
        "嵌套素材 Before 与 After",
        "/active 只存在于 Before",
        "单侧构图会丢失删除项"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左侧 Before 与 After 嵌套输入；不切窗口】\n\n打开 c03-nested 的两份输入：Before 里有 user 和 active，After 里改了 age、加了 role，删掉了 active。",
        "【操作提示｜推进第 2 步，指向底部 /active 说明条；不切窗口】\n\n注意 /active 这个字段：它只存在于改动前的 Before 里，改动后的 After 里根本没有它。",
        "【操作提示｜推进第 3 步，指向右侧判断框，停顿两秒；讲完进入 p13】\n\n先判断一下：JSON Crack 原本只解析一份 JSON 来构图，如果直接拿 After 去构图，这个被删掉的 /active 在图上哪里？答案很直接——它根本不会出现。而 REQ-008 要求删除节点必须标为 removed 留在合并图上。"
      ],
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "被删掉的字段",
      "label": "怎样在一张图上同时看见增删改",
      "title": "怎样在一张图上同时看见增删改？",
      "lead": "对照现有单侧构图与合并图映射，看 Before 独有节点与祖先路径怎样投影到同一份图数据。",
      "html": "<div class=\"p-pair\"><div data-reveal=\"0\"><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">现有单输入构图（只看 After）</h3><span class=\"p-chip\" data-role=\"gate\">/active 消失</span></div><ul class=\"p-tree ch5-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 21</span></li></ul></li><li><span class=\"p-path\">role: student</span></li></ul></div><div class=\"p-join\" data-reveal=\"1\"><span>投影两侧</span><i class=\"p-arrow\"></i></div><div data-reveal=\"1\"><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">合并图数据（DiffGraph 消费）</h3><span class=\"p-chip\" data-role=\"ok\">保留四状态</span></div><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div></div><div class=\"p-bar\" data-reveal=\"2\">不改 <code>JSONCrackComponent</code> 原外壳，新建 <code>DiffGraph.tsx</code> 复用同一套节点与连边组件渲染合并图</div><p class=\"source-note\">NodeData 新增可选差异状态与 hasDiffDescendant 字段，缺省不传时单输入与 VS Code 端保持原样</p>",
      "steps": [
        "只看 After 会丢节点",
        "投影两侧生成合并图数据",
        "新建 DiffGraph 复用节点组件"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向左侧“只按 After 构图”；不切窗口】\n\n看左边的单侧构图：因为现有解析只为输入里存在的路径生成节点，即便差异模型算出了 /active 是 removed，只从 After 构图也一定会丢失这个节点。",
        "【操作提示｜推进第 2 步，指向中间箭头与右侧合并图结构树；不切窗口】\n\n再看右边我们要构造的合并图数据：把两侧投影成同一套节点和连边，/active 从 Before 补回并标上 removed，/role 标为 added，/user/age 标为 changed，/user 容器保持 unchanged 并带上 hasDiffDescendant 标记。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p14】\n\n工程落点上按 Plan 的设计：不改既有的 JSONCrackComponent.tsx 外壳，而是新建独立的 DiffGraph 组件，内部继续复用同一套 CustomNode 和 CustomEdge，在 NodeData 上新增可选状态字段并向下透传。"
      ],
      "teaching": [],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "被删掉的字段",
      "label": "本节检查到哪一步，才算映射做完",
      "title": "本节检查到哪一步，才算映射做完？",
      "lead": "明确合并图节点、可见集合与上限判定的核对口径，并与网页界面交互划清边界。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:20px;align-items:stretch\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 6px\">图数据算出的「只看变化」可见集合</h3><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"p-note\">筛选隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div><div style=\"display:flex;flex-direction:column;gap:10px;justify-content:center\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"ctx\">1 · 子树保留与可见集合</span><p style=\"font-size:18.5px\"><code>c06 / c08</code> 被删子树全节点仍在图中；<code>c03</code> 筛选可见集保留必要祖先与 <code>removed</code>，排除 <code>/user/name</code></p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"tool\">2 · 上限判定（参数传入 2000）</span><p style=\"font-size:18.5px\"><code>c19</code>（101 节点）正常构图；<code>c17</code>（2102）与 <code>c18</code>（含 150 个 <code>removed</code> 共 2051）必须判超限（<code>REQ-025</code>）</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\">本节只验<b>数据映射、可见集与超限判定</b>；状态符号定稿、网页开关与超限提示框留给后续任务</div>",
      "steps": [
        "子树节点与筛选可见集合",
        "removed 计入上限判定",
        "界面提示与交互留后续任务"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，指向左侧可见集合树与右侧第一条核对项；不切窗口】\n\n映射做完后，我们在图数据层核对两件事。第一是合并图结构与「只看变化」的可见集合：c06 和 c08 里被删整棵子树的子节点全部保留在图中，c03 筛选态保留必要祖先和 removed，只排除未变化的 /user/name。",
        "【操作提示｜推进第 2 步，指向右侧第二条核对项；不切窗口】\n\n第二是在数据层核对节点上限判定。把上限数值 2000 作为参数传给映射和 DiffGraph：c19 只有 101 个节点可以正常构图；c17 合并后 2102 个节点判超限；最关键是 c18，After 一侧只有 1901 个节点看似没超限，但算上 150 个 removed 节点一共 2051 个，必须判为超限。",
        "【操作提示｜推进第 3 步，指向底部任务边界条；讲完进入 p15】\n\n注意本节的边界：这里核对的是数据映射、可见集合和超限判定逻辑，状态符号的最终视觉样式、网页筛选开关和无外链超限提示框，留给后面两节完成。"
      ],
      "teaching": [],
      "source": "index.html#p14",
      "seconds": 90
    },
    {
      "id": "p15",
      "segment": "怎样发出请求",
      "label": "怎样只做图数据映射，不顺手改界面",
      "title": "怎样只做图数据映射，不顺手改界面？",
      "lead": "在架构图上锁定 DiffGraph 与可选字段改动，不碰原画布外壳与网页端。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>src/diff/ · 无 React</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.1 差异模型</h3></div><p>路径比较、null 视同缺失与 check-diff</p></div><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>DiffGraph + NodeData</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed、可见集与上限</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>pages/diff + useDiff</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.3 双输入与错误</h3></div><p>独立路由、内存态与报错保留</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>符号定稿 · AC-01~23</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完三端 lint/build</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全程不动）：</b><span><code>parser.ts</code></span> · <span><code>JSONCrackComponent</code></span> · <span><code>pages/editor</code></span> · <span><code>features/editor</code></span> · <span><code>useFile / useJson</code></span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">扩展脚本 + 共享包构建</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:18.5px\">扩展 <code>scripts/check-diff.ts</code> 断言 <code>c05</code>–<code>c08</code>、可见集与 <code>c17</code>–<code>c19</code>；跑共享包 <code>lint / build</code></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">新增 DiffGraph，不动原组件外壳</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:18.5px\"><code>NodeData</code> 增可选状态并在节点组件透传；上限由调用方传参，共享包不写死默认值（待 <b>5.4</b> 定稿符号形态）</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-02 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-02</code> 及关联 Spec、Acceptance、Plan 与素材（<code>c05</code>–<code>c08</code>、<code>c17</code>–<code>c19</code>），基于 5.1 已验证的差异模型完成合并图映射与 <code>DiffGraph</code></p><p style=\"margin:0 0 8px\">允许范围：在 <code>packages/jsoncrack-react/src/diff/**</code> 实现节点/边映射、可见集计算与含 <code>removed</code> 的上限判定；新增独立画布外壳 <code>DiffGraph.tsx</code> 复用同一套节点/边与布局；<code>types.ts</code> 为 <code>NodeData</code> 增可选状态字段并在 <code>CustomNode</code> / <code>ObjectNode</code> / <code>TextNode</code> 透传。上限数值一律由参数接收，不在共享包写死默认值或读环境变量</p><p style=\"margin:0\">禁止改动：<code>parser.ts</code>、<code>JSONCrackComponent.tsx</code>、已有 <code>NodeData</code> 字段语义与 <code>apps/**</code>。扩展 <code>scripts/check-diff.ts</code>（参数传入上限 2000）跑过全量断言，再跑通 <code>pnpm --filter jsoncrack-react lint</code> 与 <code>build</code></p></div></details></div></div></div>",
      "steps": [
        "锁定 DiffGraph 与可选字段边界",
        "扩展 check-diff 与共享包构建",
        "委托要素与参数化上限"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，指向架构图中点亮的 5.2 节点与底部六文件禁区；不切窗口】\n\n对照架构图锁定改动范围：我们在共享包 diff 目录新增映射和 DiffGraph.tsx，给 NodeData 加上可选的状态字段并在节点组件透传，状态符号的最终排版留待 5.4 定稿；既有 JSONCrackComponent.tsx 和 parser.ts 一律不动，网页端 apps/www 也暂不改动。",
        "【操作提示｜推进第 2 步，指向左下角验证卡片；不切窗口】\n\n验证直接扩展 scripts/check-diff.ts：参数传入 2000 断言 c05 到 c08、可见集合以及 c17 到 c19 三组上限素材，再跑通共享包的 lint 和 build。",
        "【操作提示｜推进第 3 步，指向右下角请求要素与参考弹窗；讲完进入 p16】\n\n发请求时明确要求上限必须由参数接收，共享包不硬编码默认值、不直接读环境变量，以免影响未来复用。确认好边界，就可以切到终端执行。"
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
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在 5.1 功能分支上发出 TASK-02 合并图映射请求</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p16 第 1 步】\n\n本页待正式录制演练后补充。"
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
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时展示映射改动范围、c17–c19 上限断言与共享包构建输出</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p17 第 1 步】\n\n本页待正式录制演练后补充。"
      ],
      "teaching": [],
      "source": "index.html#p17",
      "seconds": 30
    },
    {
      "id": "p18",
      "segment": "完成边界",
      "label": "只在 After 里找节点，为何验不出删除",
      "title": "只在 After 里找节点，为何验不出删除？",
      "lead": "对照错误的单侧核对与正确的合并图数据核对，守住本节的验收边界。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>只查 After 输入或单侧树</h3><span class=\"p-tag\" data-role=\"gate\">✗ 查不到删除</span></div><p style=\"font-size:19.5px\">被删字段的原始键值只来自 <b>Before</b>；在 After 里找不到节点，绝不能反推「删除项不必保留」</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>查映射产出的 NodeData / EdgeData</h3><span class=\"p-tag\" data-role=\"ok\">✓ 证据成立</span></div><p style=\"font-size:19.5px\">直接核实 <code>/active</code> 与被删子树节点存在、标为 <code>removed</code>，连边正确，且 <code>c18</code>（2051 节点）判为超限</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">另一条边界：图数据能算出可见集合与超限结果 <b>不等于</b>「只看变化」界面和超限提示框已验收</div>",
      "steps": [
        "只查 After 为何失效",
        "核对映射节点、连边与上限",
        "数据就绪不等于界面已验收"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，指向左侧错误核对方式；停顿两秒】\n\n映射写完后，先做一个判断：如果只在 After 那份 JSON 里找节点，为什么永远没法核对删除规则？",
        "【操作提示｜推进第 2 步，指向右侧正确核对方式；不切窗口】\n\n因为被删节点的原始键值只存在于 Before。核对删除必须直接检查映射产出的 NodeData 和 EdgeData，确认 /active 和被删子树都在节点列表里、状态标为 removed，而且 c18 这类包含大量删除节点的案例确实被计入了上限。",
        "【操作提示｜推进第 3 步，指向底部提示条；讲完进入 p19】\n\n同时记住另一条边界：哪怕脚本里已经算对了可见集合和超限判定，也只证明底层数据达标，不能提前把网页端界面交互标成已验收。"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p19",
      "segment": "自检与交接",
      "label": "图数据算出了可见集合，哪种判断对",
      "title": "图数据算出了可见集合，哪种判断对？",
      "lead": "脚本已经确认映射数据能算出「只看变化」的可见节点集合，先判断该怎样记录验收状态。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch5-quiz-grid\"><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">1</span><p class=\"ch5-qcard-say\">直接把「只看变化」标记为验收通过，后面不用再查</p></div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 做法不对</span><div class=\"ch5-qcard-ans\" data-role=\"gate\" data-reveal=\"1\">不对。本节只验证了底层图数据结构，不能替代后续任务的开关交互与界面渲染走查</div></div><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">2</span><p class=\"ch5-qcard-say\">只确认图数据已具备筛选所需的祖先与状态信息，开关与网页走查留到 5.4</p></div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 做法正确</span><div class=\"ch5-qcard-ans\" data-role=\"ok\" data-reveal=\"2\">对。数据层核对只证明映射达标，端到端筛选体验要等 5.4 接上界面后再验收</div></div></div>",
      "steps": [
        "暂停比较两种判断",
        "判断一为什么错",
        "判断二为什么对"
      ],
      "script": [
        "【操作提示｜停留课件 p19 第 1 步，指向暂停提示与两张做法卡；停顿三秒】\n\n脚本已经验证图数据能算出筛选后的可见集合了。面对这个结果，下面两种做法哪一种对？先自己判断。",
        "【操作提示｜推进第 2 步，指向左侧卡片盖章与解析；不切窗口】\n\n做法一直接宣布「只看变化」验收通过。这把底层数据核对当成了用户界面验收，跳过开关交互和页面渲染检查，属于越界签收。",
        "【操作提示｜推进第 3 步，指向右侧卡片盖章与解析；讲完进入 p20】\n\n做法二只确认当前图数据已具备筛选所需的祖先和状态信息，把开关交互与端到端走查留到 5.4 界面接通后再验。每一层测试只为它实际覆盖的对象背书。"
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
      "lead": "共享包已经能产出带四种状态的合并图与 DiffGraph 组件，且原画布组件零改动。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>删除节点来自 Before<br>两侧投影进同一份合并图<br>removed 节点必须计入上限</p></div></div><div data-reveal=\"1\"><h3>本节留下</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>合并图映射、可见集计算与 <code>c17</code>–<code>c19</code> 上限断言</span></li><li class=\"is-pass\"><span>独立的 <code>DiffGraph.tsx</code> 与 <code>NodeData</code> 可选状态</span></li><li class=\"is-pass\"><span>原 <code>JSONCrackComponent</code> 零改动的构建结果</span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.3</h3><div class=\"p-box\" data-role=\"us\"><h3>独立路由双输入与报错</h3><p>在 apps/www 新增 /diff 页面接入双输入，看一边出错时已有结果该怎么办</p></div></div></div>",
      "steps": [
        "核心判断",
        "本节留下的成果",
        "进入 5.3 双输入"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，指向左侧重点贴纸；不切窗口】\n\n小结一下 5.2：被删除的节点来自 Before，必须把两侧投影进同一份合并图数据，并且把 removed 节点计入节点数量上限。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n本节完成后，共享包里已经有了合并图映射、可见集计算、含 removed 上限断言的 check-diff.ts，以及对原画布组件零改动的独立 DiffGraph.tsx。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\n现在核心计算、映射和合并图组件都准备好了，但网页端还只有单输入编辑器。下一节 5.3，我们在网页版新建独立的 /diff 路由接入双输入，看看一边输入写错时，已经算出来的结果该怎么办。"
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

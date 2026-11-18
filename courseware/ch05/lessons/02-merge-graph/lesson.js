window.lesson = {
  "title": "字段删掉了，结果图上怎样看见它",
  "chapter": "第 5 章 · SDD",
  "section": "05.02",
  "summary": "从同一组嵌套素材里被删掉的字段出发，看清只按 After 构图为什么看不见它，再把两侧映射到现有图数据上并核对照射结果。",
  "prep": [
    "确认教学副本处于 5.1 功能分支，TASK-01 差异模型已通过七组素材核对且工作区干净",
    "编辑器定位 docs/specs/TASKS.md（TASK-02）及 docs/specs/fixtures/nested/、subtree/",
    "准备好运行共享包构建与插件端回归检查命令（pnpm --filter jsoncrack-react / vscode）"
  ],
  "scenes": [
    {
      "id": "p11",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "字段删掉了，结果图上怎样看见它",
      "title": "图上怎样看见被删掉的字段？",
      "lead": "5.1 已验证纯函数差异模型；这一节把两侧差异投影到 JSON Crack 现有图数据上",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-now\"><b>5.2</b>合并图</li><li><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">5.1 已就位</span><h3>按路径对齐的纯函数差异模型</h3><p>已能算出直接状态、差异数与祖先标记，但尚未生成画布图数据</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.2 完成后留下</span><ul class=\"ch5-mini-list\"><li>产出 <code>NodeData / EdgeData</code> 的合并图映射</li><li>一次性图数据核对脚本与 <code>lint / build</code> 结果</li><li>更新后的 <code>CH05_IMPLEMENTATION.md</code></li></ul></div></div>",
      "steps": [
        "本章位置",
        "5.1 已就位",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，指向五节路线图的 5.2；不切窗口】\n\n上一节我们做好了差异模型，能按路径算出新增、删除和修改。但这些状态还只是纯数据，没有接到 JSON Crack 的图上。",
        "【操作提示｜推进第 2 步，指向左侧“5.1 已就位”卡片；不切窗口】\n\n确认当前仍在同一条功能分支上、模型检查全部通过后，打开合并图映射任务和关联的验收案例。讲师演示对应基线上的 TASK-02。",
        "【操作提示｜推进第 3 步，指向右侧“本节交付”卡片；讲完进入 p12】\n\n这一节要把差异模型映射成现有画布能直接消费的图数据，并核对结果。字段删掉了，结果图上怎样看见它？我们直接回到那组熟悉的嵌套素材。"
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
      "lead": "打开 docs/specs/fixtures/nested/，先看只存在于 Before 的 /active 在单侧构图下会怎样。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch\"><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch\" data-reveal=\"0\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span><span>nested/before.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 20 },</span><span class=\"del\">  &quot;active&quot;: true</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span><span>nested/after.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 21 },</span><span class=\"add\">  &quot;role&quot;: &quot;student&quot;</span><span style=\"display:block\">}</span></pre></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"display:flex;flex-direction:column;justify-content:center;padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3 style=\"font-size:24px;margin:4px 0 8px\">只拿 After 解析构图，图上找得到 <code>/active</code> 吗？</h3><p style=\"font-size:19px;color:var(--p-muted)\">找不到——它不在 After 里，单侧解析会直接丢失删除项</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\"><code>/active</code> 只存在于 <b>Before</b>；已批准规则要求它作为 <code>removed</code> 保留在结果图上（<code>REQ-004</code> · <code>AC-010</code>）</div><p class=\"source-note\">实际素材：docs/specs/fixtures/nested/</p>",
      "steps": [
        "嵌套素材 Before 与 After",
        "/active 只存在于 Before",
        "单侧构图会丢失删除项"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左侧 Before 与 After 嵌套输入；不切窗口】\n\n打开 fixtures/nested 的两份输入：Before 里有 user 和 active，After 里改了 age、加了 role，删掉了 active。",
        "【操作提示｜推进第 2 步，指向底部 /active 说明条；不切窗口】\n\n注意 /active 这个字段：它只存在于改动前的 Before 里，改动后的 After 里根本没有它。",
        "【操作提示｜推进第 3 步，指向右侧判断框，停顿两秒；讲完进入 p13】\n\n先判断一下：JSON Crack 原本是拿一份 JSON 去解析构图的，如果直接拿 After 去构图，这个被删掉的 /active 在图上哪里？答案很直接——它根本不会出现。而规格要求删除字段必须作为 removed 留在结果图上。"
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
      "lead": "对照现有单侧构图与合并图映射，看 Before 独有节点与祖先路径怎样落进同一份图数据。",
      "html": "<div class=\"p-pair\"><div data-reveal=\"0\"><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">现有单输入构图（只看 After）</h3><span class=\"p-chip\" data-role=\"gate\">/active 消失</span></div><ul class=\"p-tree ch5-tree\"><li><span class=\"p-path\">user</span><ul><li><span class=\"p-path\">name: Lin</span></li><li><span class=\"p-path\">age: 21</span></li></ul></li><li><span class=\"p-path\">role: student</span></li></ul></div><div class=\"p-join\" data-reveal=\"1\"><span>投影两侧</span><i class=\"p-arrow\"></i></div><div data-reveal=\"1\"><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">合并图数据（NodeData / EdgeData）</h3><span class=\"p-chip\" data-role=\"ok\">保留四状态</span></div><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div></div><div class=\"p-bar\" data-reveal=\"2\">不并排画两张图，也不另写渲染引擎——把两侧差异投影为现有画布可消费的<b>同一套节点与连边</b></div><p class=\"source-note\">合并图示意用于核对映射产出的图数据结构与符号标记</p>",
      "steps": [
        "只看 After 会丢节点",
        "投影为同一份合并图数据",
        "复用现有画布渲染"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向左侧“只按 After 构图”；不切窗口】\n\n看左边的单侧构图：因为输入只有 After，即便差异模型在前面算出了 /active 是 removed，只要构图数据没把它写进去，渲染出来就会丢字段。",
        "【操作提示｜推进第 2 步，指向中间箭头与右侧合并图结构树；不切窗口】\n\n再看右边我们要构造的合并图数据：/active 从 Before 取回并标上减号 removed，/role 标上加号 added，/user/age 标上波浪号 changed，通向它的容器 /user 保留为 unchanged 并带上“下层有变化”标记。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p14】\n\n合并图既不是并排摆两张图，也不是重写一套画布引擎，而是把两侧差异投影成同一份 NodeData 和 EdgeData 交给现有画布渲染。"
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
      "lead": "明确图数据层的三项核对内容，并与 5.4 的筛选界面走查划清边界。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:20px;align-items:stretch\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 6px\">图数据算出的「只看变化」可见集合</h3><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"p-note\">筛选隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div><div style=\"display:flex;flex-direction:column;gap:10px;justify-content:center\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"ctx\">1 · nested 图数据与可见集合</span><p style=\"font-size:18.5px\"><code>/</code>、<code>/user</code> 与三处差异保留，<code>/user/name</code> 排除，差异数仍为 <b>3</b></p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"tool\">2 · subtree 与零差异素材</span><p style=\"font-size:18.5px\">被删子树全部节点仍在图数据中且只计根 <b>2</b> 处；<code>identical</code>、<code>key-order</code>、<code>null-equiv</code> 不因节点 id 误报</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\">本节只验<b>底层图数据与插件端无回归</b>；网页上的「只看变化」开关、摘要与超限提示留给 <b>5.4</b></div>",
      "steps": [
        "nested 节点关系与可见集合",
        "被删子树与零差异核对",
        "界面开关留给 5.4"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，指向左侧可见集合树与右侧第一条核对项；不切窗口】\n\n映射做完后，我们在图数据层核对三件事。第一，用 nested 素材确认状态、父子边，以及供后续「只看变化」使用的可见集合——/、/user 和三处差异保留，未变化的 /user/name 被排除，差异数仍为 3。",
        "【操作提示｜推进第 2 步，指向右侧第二条核对项；不切窗口】\n\n第二，用 subtree、identical、key-order 和 null-equiv 素材核对：整棵被删子树的全部节点都留在图数据里且差异数只在根计 2 处；零差异输入映射后依然是零差异，没有被节点 id 干扰。",
        "【操作提示｜推进第 3 步，指向底部任务边界条；讲完进入 p15】\n\n注意本节的边界：这里核对的是图数据结构已经算准，至于网页上的「只看变化」开关、摘要面板和超限提示界面，要留到 5.4 再做端到端走查。"
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
      "lead": "在架构图上锁定共享包的可选入口改动，保证既有 json 入口与 VS Code 插件端零回归。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>packages/jsoncrack-react/src/diff/</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.1 差异模型</h3></div><p>按路径对齐两侧，算状态、计数与祖先标记</p></div><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>NodeData / EdgeData + 可选入口</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed 与必要祖先，赋予状态符号</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>apps/www DiffView + 独立状态</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.3 双输入与错误</h3></div><p>接入 Before / After，出错保留上次结果</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>只看变化 + 无外链超限 + 全量走查</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完 AC-001~021 与回归</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全章不动）：</b><span><code>parser.ts</code> 顺序节点 id</span> · <span><code>useJson</code> 单输入状态链路</span> · <span><code>NotSupported</code> 原超限组件</span> · <span><code>apps/vscode</code> 插件端</span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">脚本 + 跨包静态验证</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:18.5px\">一次性脚本验图数据；再跑 <code>jsoncrack-react</code> 的 <code>lint / build</code> 与 <code>vscode</code> 的 <code>lint</code></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">只增可选入口，不碰网页视图</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:18.5px\">给 <code>types.ts</code> 与 <code>JSONCrackComponent</code> 增可选图数据入口并渲染状态符号；双输入与筛选开关留后续任务</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-02 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-02</code> 及关联 Spec、Acceptance 与固定素材，基于上一任务已验证的差异模型实现合并图映射</p><p style=\"margin:0 0 8px\">允许范围：在共享包 <code>diff/</code> 新增映射；在 <code>types.ts</code> 新增可选状态字段；在 <code>JSONCrackComponent.tsx</code> 新增可选 <code>nodes / edges</code> 入口；在节点组件渲染非纯颜色的状态符号并更新导出。不改既有 <code>json</code> 入口、<code>parser.ts</code>、超限判定逻辑与网页版视图</p><p style=\"margin:0\">用工作区外一次性脚本核对 <code>nested</code>、<code>subtree</code>、<code>identical</code>、<code>key-order</code>、<code>null-equiv</code> 的图数据；再运行共享包 <code>lint</code>、<code>build</code> 与 <code>pnpm --filter vscode run lint</code></p></div></details></div></div></div>",
      "steps": [
        "锁定共享包增量边界",
        "图数据脚本与跨包检查",
        "委托要素与请求参考"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，指向架构图中点亮的 5.2 节点与底部隔离带；不切窗口】\n\n对照架构图看修改范围：我们在共享包新增映射模块，给 NodeData 加可选状态字段，给 JSONCrackComponent 增加可选的外部 nodes 和 edges 入口，并在节点组件上补好非纯颜色的状态符号；原有的 json 入口、parser.ts 和超限判定逻辑一律不动。",
        "【操作提示｜推进第 2 步，指向左下角验证卡片；不切窗口】\n\n验证同样分两层：先用工作区外的一次性脚本跑上述素材核对图数据，再运行共享包的 lint 与 build，并跑一遍 vscode 插件端的 lint，确认新增可选参数没有破坏插件端。",
        "【操作提示｜推进第 3 步，指向右下角请求要素与参考弹窗；讲完进入 p16】\n\n发请求时明确输入是 5.1 已验证的差异模型，不允许顺手去写网页版双输入或筛选开关；null 与字段缺失继续沿用 REQ-038 的等价规则。确认好边界，就可以切到终端执行。"
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在 5.1 功能分支上发出 TASK-02 映射请求</div>",
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时展示映射改动范围、图数据脚本核对与构建输出</div>",
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
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>只查 After 输入或单侧树</h3><span class=\"p-tag\" data-role=\"gate\">✗ 查不到删除</span></div><p style=\"font-size:19.5px\">被删字段的原始键值只来自 <b>Before</b>；在 After 里找不到节点，绝不能反推「删除项不必保留」</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>查映射产出的 NodeData / EdgeData</h3><span class=\"p-tag\" data-role=\"ok\">✓ 证据成立</span></div><p style=\"font-size:19.5px\">直接核实 <code>/active</code> 节点存在、状态标为 <code>removed</code>，且父子连边挂在正确容器路径下</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">另一条边界：图数据能算出筛选可见集合 <b>不等于</b>「只看变化」界面已通过验收；界面交互留给 5.4</div>",
      "steps": [
        "只查 After 为何失效",
        "核对映射后的节点与连边",
        "数据就绪不等于界面已验收"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，指向左侧错误核对方式；停顿两秒】\n\n映射写完后，先做一个判断：如果只在 After 那份 JSON 里找节点，为什么永远没法核对删除规则？",
        "【操作提示｜推进第 2 步，指向右侧正确核对方式；不切窗口】\n\n因为被删节点的原始键值只存在于 Before。核对删除必须直接检查映射产出的 NodeData 和 EdgeData，确认 /active 不仅出现在节点列表里、状态标为 removed，而且父子连边也挂在正确路径下。",
        "【操作提示｜推进第 3 步，指向底部提示条；讲完进入 p19】\n\n同时记住另一条完成边界：哪怕图数据里已经能算出筛选后的可见节点集合，也只证明数据准备好了，不能提前把 5.4 的筛选界面标成已验收。"
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
      "lead": "共享包已经能产出带四种状态的合并图数据，并且没有破坏既有单输入入口。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>删除节点来自 Before<br>必须投影两侧成合并图<br>按产出节点与连边核对</p></div></div><div data-reveal=\"1\"><h3>本节留下</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>产出 <code>NodeData / EdgeData</code> 的合并图映射</span></li><li class=\"is-pass\"><span>通过共享包 <code>build</code> 与 <code>vscode lint</code> 的可选入口</span></li><li class=\"is-pass\"><span>更新后的 <code>CH05_IMPLEMENTATION.md</code></span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.3</h3><div class=\"p-box\" data-role=\"us\"><h3>双输入与错误恢复</h3><p>把两侧输入接到网页视图，看一边输入出错时已有结果该怎么办</p></div></div></div>",
      "steps": [
        "核心判断",
        "本节留下的成果",
        "进入 5.3 双输入"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，指向左侧重点贴纸；不切窗口】\n\n小结一下 5.2：只按单侧输入构图必然漏掉删除字段，必须把两侧信息投影到同一份图数据里，并按实际节点和连边核对。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n本节完成后，共享包里就有了能被现有画布消费的合并图映射、通过构建与插件端回归检查的增量入口，以及更新后的实施记录。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\n现在核心计算和图数据都准备好了，但网页上还只能填一份 JSON。下一节 5.3，我们把双输入接到界面上，看看一边输入写错时，已经算出来的结果该怎么办。"
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

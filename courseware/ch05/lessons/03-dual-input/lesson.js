window.lesson = {
  "title": "一边输入错了，已经得到的结果怎么办",
  "chapter": "第 5 章 · SDD",
  "section": "05.03",
  "summary": "先用同一组嵌套素材做一次正常比较，立住两侧输入和一张结果图，再看一侧输入出错时，错误状态和上次成功结果是两件事，错误不能把已有结果冲掉。",
  "prep": [
    "确认教学副本处于同一功能分支，TASK-01 模型与 TASK-02 合并图映射已完成且共享包已 build",
    "准备启动 pnpm dev:www 本地服务，编辑器定位 docs/specs/TASKS.md（TASK-03）与 fixtures/error/"
  ],
  "scenes": [
    {
      "id": "p21",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "一边输入错了，已经得到的结果怎么办",
      "title": "已经得到的结果怎么办？",
      "lead": "模型与合并图数据已就绪；这一节在网页接入双输入，处理单侧输入报错",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-now\"><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">5.1–5.2 已就位</span><h3>共享包已有差异模型与合并图映射</h3><p>底层比较与图数据已打通，但网页版尚无双输入视图</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.3 完成后留下</span><ul class=\"ch5-mini-list\"><li>可编辑的 Before / After 双输入视图</li><li>独立 Diff 状态与单侧报错保留结果路径</li><li>更新后的 <code>CH05_IMPLEMENTATION.md</code></li></ul></div></div>",
      "steps": [
        "本章位置",
        "5.1–5.2 已就位",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p21 第 1 步，指向五节路线图的 5.3；不切窗口】\n\n前两节我们在共享包里做好了差异模型和合并图映射，但打开网页版编辑器，用户依然只能填一份 JSON。",
        "【操作提示｜推进第 2 步，指向左侧“5.1–5.2 已就位”卡片；不切窗口】\n\n确认当前仍在同一条功能分支上、共享包已经构建通过后，打开双输入与错误状态任务和关联的验收案例。讲师演示对应基线上的 TASK-03。",
        "【操作提示｜推进第 3 步，指向右侧“本节交付”卡片；讲完进入 p22】\n\n这一节要把 Before 和 After 两个输入区接到网页视图里，并重点解决一个交互问题：一边输入改错了，已经算出来的结果该怎么办？我们先从一次正常比较立住参照基准。"
      ],
      "teaching": [],
      "source": "index.html#p21",
      "seconds": 90
    },
    {
      "id": "p22",
      "segment": "已经得到的结果",
      "label": "一次正常比较，界面上要看见什么",
      "title": "一次正常比较，界面上要看见什么？",
      "lead": "先用 fixtures/nested 完成一次成功比较，立住后续错误对照时要保护的「上次有效结果」。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:20px;align-items:stretch\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 6px\">两个可编辑输入位置（REQ-001）</h3><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span><span>可编辑</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 20 },</span><span style=\"display:block\">  &quot;active&quot;: true</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span><span>可编辑</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 21 },</span><span style=\"display:block\">  &quot;role&quot;: &quot;student&quot;</span><span style=\"display:block\">}</span></pre></div></div></div><div data-reveal=\"1\" style=\"display:flex;flex-direction:column;justify-content:space-between\"><div><h3 style=\"font-size:20px;margin:0 0 6px\">唯一一张结果合并图（AC-001）</h3><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div><div class=\"p-bar is-light\" style=\"margin-top:8px;padding:7px 14px;font-size:19px\">当前有效结果：差异数 <b>3</b> · <code>/active</code>、<code>/role</code>、<code>/user/age</code></div></div></div><div class=\"p-bar\" data-reveal=\"2\">两侧文本 → 既有 <code>jsonc-parser</code> 解析 → 共享包模型与映射 → 更新画布（UI 不复制比较算法）</div><p class=\"source-note\">输入区布局属未决项 REQ-032，此处仅示意两个输入位置与单张合并图的关系</p>",
      "steps": [
        "Before 与 After 双输入",
        "唯一一张合并结果图",
        "UI 调用共享包逻辑"
      ],
      "script": [
        "【操作提示｜停留课件 p22 第 1 步，指向左侧 Before 与 After 两个输入块；不切窗口】\n\n用同一组 nested 素材做一次正常比较：界面上同时有两个可编辑输入区，分别标明 Before 和 After。",
        "【操作提示｜推进第 2 步，指向右侧唯一合并图与差异数；不切窗口】\n\n比较完成后，屏幕上只渲染一张合并图，差异数为 3，/active、/role 和 /user/age 都在这张图上。这就是我们要守住的“上次成功比较结果”。",
        "【操作提示｜推进第 3 步，指向底部数据流长条；讲完进入 p23】\n\n顺着调用链看一眼：两侧文本先经网页版既有的解析器检查合法性，通过后直接调用共享包的差异模型和合并图映射更新画布，UI 层绝不自己再写一套比较算法。有了这张有效结果图，现在把其中一侧故意改坏。"
      ],
      "teaching": [],
      "source": "index.html#p22",
      "seconds": 90
    },
    {
      "id": "p23",
      "segment": "已经得到的结果",
      "label": "一边输入错了，已有结果该怎么办",
      "title": "一边输入错了，已有结果该怎么办？",
      "lead": "成功比较一次后，把 Before 改成非法 JSON，对照两种处理方式。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1.1fr .9fr;gap:14px;align-items:center\" data-reveal=\"0\"><div class=\"p-code ch5-code is-err\"><div class=\"p-code-head\"><span>Before · invalid-before.json</span><span>语法错误</span></div><pre><span class=\"del\">{&quot;user&quot;: }</span></pre></div><div class=\"p-bar is-light\" style=\"padding:10px 16px;font-size:19px\">After 仍为合法 <code>nested/after.json</code>；此时上一轮已有 3 处差异结果</div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:20px;align-items:stretch\"><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:14px 18px;display:flex;flex-direction:column;justify-content:center\"><div class=\"p-head\"><h3>冲掉已有结果</h3><span class=\"p-tag\" data-role=\"gate\">✗ 违反规格</span></div><p style=\"font-size:19.5px;color:#A8350F\">画布被清空成空白状态，上一轮算出的合并图与差异数全部丢失</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">错误提示与上次结果分开</h3><span class=\"p-tag\" data-role=\"ok\">✓ REQ-020 / 021</span></div><p style=\"font-size:18.5px;margin-bottom:6px\">1. 错误提示明确指向 <b>Before</b>（不连坐 After）</p><p style=\"font-size:18.5px\">2. 上次成功的<b>合并图与差异数 3</b> 原样保留在界面上</p></div></div><p class=\"source-note\">非法输入素材：docs/specs/fixtures/error/invalid-before.json</p>",
      "steps": [
        "把 Before 改成非法 JSON",
        "错误做法：清空已有结果",
        "规格要求：报错与保留结果分开"
      ],
      "script": [
        "【操作提示｜停留课件 p23 第 1 步，指向顶部出错的 Before 输入框；停顿两秒】\n\n现在把 Before 改成 {\"user\": } 这段非法 JSON，After 保持合法。想一想，刚才已经画出来的那张合并图该怎么处理？",
        "【操作提示｜推进第 2 步，指向左下角错误做法卡片；不切窗口】\n\n如果一遇到解析报错就把画布清空成空白态，用户刚看了一半的对比结果瞬间就没了，想对照着修输入都没法看。",
        "【操作提示｜推进第 3 步，指向右下角规格要求卡片；讲完进入 p24】\n\n按已批准的 REQ-020 和 REQ-021，错误提示要明确指向出错的 Before，同时上一次成功比较的合并图与差异数 3 必须继续保留在界面上。错误状态和上次有效结果是两份独立状态，报错不能冲掉已有结果。"
      ],
      "teaching": [],
      "source": "index.html#p23",
      "seconds": 90
    },
    {
      "id": "p24",
      "segment": "已经得到的结果",
      "label": "双输入与错误恢复，还要核对哪些场景",
      "title": "双输入与错误恢复，还要核对哪些场景？",
      "lead": "除「成功后再改坏 Before」外，TASK-03 还要走通其余三类状态转换与隔离检查。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:12px 18px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">首次打开即输入非法 JSON</h3><span class=\"p-tag\" data-role=\"ctx\">AC-012</span></div><p style=\"font-size:18.5px\">尚无历史结果可留，必须显示<b>空状态</b>与指向出错侧的提示，不能出现比较图</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">After 侧单独出错</h3><span class=\"p-tag\" data-role=\"ctx\">AC-013</span></div><p style=\"font-size:18.5px\">错误提示精准指向 <b>After</b>，绝不能同时把合法的 Before 也标成出错方</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">非法输入恢复为合法</h3><span class=\"p-tag\" data-role=\"tool\">状态恢复</span></div><p style=\"font-size:18.5px\">按当前两侧最新内容重新比较并刷新结果图，不卡在旧错误或旧图上</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">隔离初查与 5.4 分工</h3><span class=\"p-tag\" data-role=\"us\">阶段边界</span></div><p style=\"font-size:18.5px\">核对 <code>?json=</code>、导入弹窗与比对零外发；摘要、筛选、超限与 360px 留给 <b>5.4</b></p></div></div>",
      "steps": [
        "首次即错与 After 出错",
        "恢复合法输入后刷新",
        "单输入隔离与阶段边界"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，指向左上和右上两张错误场景卡；不切窗口】\n\n除了成功后改坏 Before，还要核对另外两条错误路径：刚打开页面、从未成功比较过就输入非法 JSON 时，没有任何历史结果可留，必须显示空状态并标明出错侧；反过来只把 After 改坏时，错误提示只能指向 After，不能连带把 Before 也标错。",
        "【操作提示｜推进第 2 步，指向左下角恢复更新卡片；不切窗口】\n\n接着把非法输入改回合法 JSON，确认合并图与差异数随之重新计算刷新，不会卡在旧结果或旧报错上。",
        "【操作提示｜推进第 3 步，指向右下角隔离与阶段边界卡；讲完进入 p25】\n\n最后用 ?json= 参数和导入弹窗抽查原有单输入链路未被污染，并打开网络面板确认比对请求没有外发 JSON 内容。至于「只看变化」开关、摘要面板、超限提示和 360px 窄窗走查，统一留给 5.4。"
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p25",
      "segment": "怎样发出请求",
      "label": "怎样接入双输入，又不污染单输入链路",
      "title": "怎样接入双输入，又不污染单输入链路？",
      "lead": "在 apps/www 独立建立 DiffView 与 Diff 状态，严禁改写共用的 useJson。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>packages/jsoncrack-react/src/diff/</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.1 差异模型</h3></div><p>按路径对齐两侧，算状态、计数与祖先标记</p></div><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>NodeData / EdgeData + 可选入口</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed 与必要祖先，赋予状态符号</p></div><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>apps/www DiffView + 独立状态</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.3 双输入与错误</h3></div><p>接入 Before / After，出错保留上次结果</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>只看变化 + 无外链超限 + 全量走查</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完 AC-001~021 与回归</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全章不动）：</b><span><code>parser.ts</code> 顺序节点 id</span> · <span><code>useJson</code> 单输入状态链路</span> · <span><code>NotSupported</code> 原超限组件</span> · <span><code>apps/vscode</code> 插件端</span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">lint + 网页实操走查</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:18.5px\">跑通 <code>pnpm --filter www run lint</code>，起 <code>pnpm dev:www</code> 走查四类错误恢复及 <code>?json=</code> / 导入弹窗回归</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">未决布局与 CR-01 边界</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:18.5px\">输入布局 <code>REQ-032</code> 保持可调整不固化；旧结果可见提示文案属第 6 章 <code>CR-01</code>，本节不设必做</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-03 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-03</code> 及关联 Spec、Acceptance 与固定素材，基于已验证的模型与合并图映射接入网页双输入与错误状态</p><p style=\"margin:0 0 8px\">允许范围：在 <code>apps/www</code> 新增 <code>DiffView</code> 两份输入区、独立 Diff store（第二份输入、最后一次有效结果、错误信息）及编辑器视图分支。不改 <code>useJson</code>、不改单输入链路与插件端，不在 UI 复制比较算法，布局保持可调</p><p style=\"margin:0\">运行 <code>pnpm --filter www run lint</code>，启动 <code>pnpm dev:www</code> 核对正常比较、单侧出错保留结果、首次即错空状态、恢复刷新及 <code>?json=</code> 与导入弹窗无污染</p></div></details></div></div></div>",
      "steps": [
        "独立状态隔离 useJson",
        "网页走查与单输入回归",
        "未决项与第 6 章边界"
      ],
      "script": [
        "【操作提示｜停留课件 p25 第 1 步，指向架构图点亮的 5.3 节点与底部 useJson 隔离带；不切窗口】\n\n看架构图里的隔离关键点：网页版原有的 useJson 被 GraphView、TreeView、导入弹窗和 widget 多处共用。所以我们在 apps/www 新增 DiffView 视图分支和独立的 Diff store，专门存第二份输入、错误信息和上次有效结果，绝不往 useJson 里混写 Diff 状态。",
        "【操作提示｜推进第 2 步，指向左下角网页验证卡片；不切窗口】\n\n验证时先跑通网页包 www 的 lint，再启动 pnpm dev:www，把刚才四类正常、报错、恢复与单输入回归场景逐一在浏览器里亲手试一遍。",
        "【操作提示｜推进第 3 步，指向右下角未决与下章边界卡片；讲完进入 p26】\n\n还要交代两条规格边界：两份输入区最终摆成什么布局属于未决项 REQ-032，实现保持简洁可调；至于在结果区额外印一行“当前为上次有效结果”的可见提示，那是第 6 章才会批准的 CR-01，本节不强制要求。"
      ],
      "teaching": [],
      "source": "index.html#p25",
      "seconds": 90
    },
    {
      "id": "p26",
      "segment": "怎样发出请求",
      "label": "当前副本对得上起点吗？请求该怎么发出",
      "title": "当前副本对得上起点吗？请求该怎么发出？",
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在 5.2 分支基础上发出 TASK-03 双输入请求</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p26 第 1 步】\n\n本页待正式录制演练后补充。"
      ],
      "teaching": [],
      "source": "index.html#p26",
      "seconds": 30
    },
    {
      "id": "p27",
      "segment": "完成边界",
      "label": "怎样判断双输入和错误路径做到了完成边界",
      "title": "怎样判断双输入和错误路径做到了完成边界？",
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在浏览器走查正常比较、报错保留与单输入回归</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p27 第 1 步】\n\n本页待正式录制演练后补充。"
      ],
      "teaching": [],
      "source": "index.html#p27",
      "seconds": 30
    },
    {
      "id": "p28",
      "segment": "完成边界",
      "label": "出错保留结果，要看哪两项页面证据",
      "title": "出错保留结果，要看哪两项页面证据？",
      "lead": "单侧输入非法时，必须同时在页面上亲眼核实错误归属与历史结果保留。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:20px 22px\"><div class=\"p-head\"><h3>证据一：错误归属准确</h3><span class=\"p-tag\" data-role=\"gate\">看报错框</span></div><p style=\"font-size:19.5px\">分别改坏 Before 与 After，确认提示只指向出错的那一侧，不误报对侧</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:20px 22px\"><div class=\"p-head\"><h3>证据二：上次结果仍在</h3><span class=\"p-tag\" data-role=\"ok\">看结果图</span></div><p style=\"font-size:19.5px\">成功比出 3 处差异后再改坏输入，确认合并图与差异数 <b>3</b> 依然显示在画面上</p></div></div><div class=\"p-bar\" data-reveal=\"2\">只看 Agent 回复或只跑一次合法输入，不足以证明错误恢复符合验收</div>",
      "steps": [
        "核对错误提示归属",
        "核对上次合并图未丢失",
        "拒绝只看口头完成汇报"
      ],
      "script": [
        "【操作提示｜停留课件 p28 第 1 步，指向左侧错误归属证据卡；停顿两秒】\n\n双输入接好后，判断一下：单侧输入非法时，究竟要看哪两项页面证据才能确认错误恢复达标？第一项是错误归属——分别改坏 Before 和 After，亲眼看到报错精准指向出错的那一侧。",
        "【操作提示｜推进第 2 步，指向右侧历史结果保留证据卡；不切窗口】\n\n第二项是历史结果保留——必须先完成一次成功比较，再改坏一侧输入，确认刚才那张合并图和差异数 3 依然稳稳停在画面上，没有退回空状态。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p29】\n\n如果只听 Agent 口头汇报“已处理错误”，或者只在网页上测了一次合法输入，都不足以签收这个任务。"
      ],
      "teaching": [],
      "source": "index.html#p28",
      "seconds": 90
    },
    {
      "id": "p29",
      "segment": "自检与交接",
      "label": "首次打开就输入非法 JSON，哪种做法对",
      "title": "首次打开就输入非法 JSON，哪种做法对？",
      "lead": "刚打开页面、从未成功比较过，一侧输入就是非法 JSON，先判断界面该如何表现。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch5-quiz-grid\"><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">1</span><p class=\"ch5-qcard-say\">界面上展示一份默认示例图或之前残留的旧比较结果</p></div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 做法不对</span><div class=\"ch5-qcard-ans\" data-role=\"gate\" data-reveal=\"1\">不对。从未成功比较过就没有历史结果，摆出任何比较图都会误导用户</div></div><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">2</span><p class=\"ch5-qcard-say\">界面显示空状态，并给出明确指向出错侧的错误提示</p></div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 做法正确</span><div class=\"ch5-qcard-ans\" data-role=\"ok\" data-reveal=\"2\">对。「首次即错」与「成功后再出错」前提不同，无历史结果时必须显示空状态（AC-012）</div></div></div>",
      "steps": [
        "暂停比较两种表现",
        "表现一为什么错",
        "表现二为什么对"
      ],
      "script": [
        "【操作提示｜停留课件 p29 第 1 步，指向暂停提示与两张做法卡；停顿三秒】\n\n换一个边界情境：刚刷新打开页面、一次成功比较都还没有过，用户一上来就在 Before 填了非法 JSON。下面两种界面表现哪一种对？",
        "【操作提示｜推进第 2 步，指向左侧卡片盖章与解析；不切窗口】\n\n做法一在画布上展示一份默认示例或上次残留的旧图。从未成功比较过却摆出一张比较结果，会直接误导用户以为当前输入比出了这张图。",
        "【操作提示｜推进第 3 步，指向右侧卡片盖章与解析；讲完进入 p30】\n\n做法二展示空状态，同时给出指向 Before 的错误提示。“首次即错”没有历史结果可留，必须和“成功后再出错”严格区分开。"
      ],
      "teaching": [],
      "source": "index.html#p29",
      "seconds": 90
    },
    {
      "id": "p30",
      "segment": "自检与交接",
      "label": "带着什么进入 5.4",
      "title": "带着什么进入 5.4？",
      "lead": "网页端已能输入两份 JSON 并妥善处理报错，且没有污染原有单输入链路。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>报错与上次结果分开<br>改坏一侧不冲掉旧图<br>首次即错才显示空状态</p></div></div><div data-reveal=\"1\"><h3>本节留下</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>独立于 <code>useJson</code> 的双输入视图</span></li><li class=\"is-pass\"><span>通过走查的单侧报错与恢复路径</span></li><li class=\"is-pass\"><span>更新后的 <code>CH05_IMPLEMENTATION.md</code></span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.4</h3><div class=\"p-box\" data-role=\"us\"><h3>收尾与整体验收</h3><p>补齐差异摘要与「只看变化」，对照全套验收和 Review 收口整章功能</p></div></div></div>",
      "steps": [
        "核心判断",
        "本节留下的成果",
        "进入 5.4 整体验收"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步，指向左侧重点贴纸；不切窗口】\n\n总结 5.3 的核心认识：错误提示和上次成功结果是两件独立的状态，一侧写错不能把已经算好的结果图冲掉。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n完成本节后，网页版已经具备独立于 useJson 的双输入视图与完整的报错恢复路径，实施记录也同步更新。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\n走到这里，模型、映射和双输入都通了。下一节 5.4，我们补齐差异摘要和「只看变化」筛选，再回答：各部分都做了，能说整个功能完成了吗？"
      ],
      "teaching": [],
      "source": "index.html#p30",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "已经得到的结果",
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

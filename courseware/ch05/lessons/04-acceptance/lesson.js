window.lesson = {
  "title": "各部分都做了，能说整个功能完成了吗",
  "chapter": "第 5 章 · SDD",
  "section": "05.04",
  "summary": "先把摘要和「只看变化」接到界面上并做局部检查，再按整组验收和 Review 判断整个功能有没有做完。",
  "prep": [
    "确认教学副本处于同一功能分支，前三个任务已完成且共享包已最新构建",
    "启动 pnpm dev:www（开发环境上限 2000），准备浏览器 360px 尺寸、网络面板与灰度显示检查",
    "编辑器打开 docs/specs/ACCEPTANCE.md（AC-001～AC-021）与 TASKS.md（TASK-04）"
  ],
  "scenes": [
    {
      "id": "p31",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "各部分都做了，能说整个功能完成了吗",
      "title": "能说整个功能完成了吗？",
      "lead": "模型、映射与双输入已接通；本节先补齐摘要与筛选，再做全量验收和 Review",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-done\"><b>5.3</b>双输入</li><li class=\"is-now\"><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">5.1–5.3 已就位</span><h3>模型、合并图与双输入错误恢复已通</h3><p>界面尚缺差异摘要、「只看变化」开关与无外链超限提示</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.4 分两段收口</span><ul class=\"ch5-mini-list\"><li>前半段：补齐摘要、筛选、灰度可辨认与超限提示</li><li>后半段：走完 <code>AC-001~021</code>、单输入回归与 Review</li></ul></div></div>",
      "steps": [
        "本章位置",
        "5.1–5.3 已就位",
        "两段收口安排"
      ],
      "script": [
        "【操作提示｜停留课件 p31 第 1 步，指向五节路线图的 5.4；不切窗口】\n\n前三节把差异模型、合并图映射和双输入错误恢复一层层搭了起来。走到这里，能说整个 JSON Diff 已经做完了吗？",
        "【操作提示｜推进第 2 步，指向左侧“5.1–5.3 已就位”卡片；不切窗口】\n\n还不能立刻进整体验收——规格要求的差异摘要、「只看变化」筛选开关和无外链超限提示还没接到界面上。打开摘要、筛选与整体验收任务，讲师演示对应基线上的 TASK-04。",
        "【操作提示｜推进第 3 步，指向右侧两段收口安排卡片；讲完进入 p32】\n\n所以这一节分两段走：前半段先把用户还没看见的摘要、筛选、灰度可辨认和超限提示补齐并局部核对；后半段再拉通 AC-001 到 AC-021、单输入回归与代码 Review，回答整个功能是否真正完成。"
      ],
      "teaching": [],
      "source": "index.html#p31",
      "seconds": 90
    },
    {
      "id": "p32",
      "segment": "还没看见的部分",
      "label": "同一组嵌套案例，摘要差异数是几",
      "title": "同一组嵌套案例，摘要差异数是几？",
      "lead": "先补齐界面上的差异摘要区，用 fixtures/nested 核对摘要数字为什么是 3 而不是 5。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;align-items:stretch\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 6px\">同一组嵌套输入（nested）</h3><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 20 },</span><span style=\"display:block\">  &quot;active&quot;: true</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 21 },</span><span style=\"display:block\">  &quot;role&quot;: &quot;student&quot;</span><span style=\"display:block\">}</span></pre></div></div><div class=\"p-bar is-light\" style=\"margin-top:10px;padding:7px 14px;font-size:18.5px\">同理：<code>subtree</code> 整棵子树增删只在根部计 <b>2</b> 处（<code>AC-009</code>）</div></div><div data-reveal=\"1\"><h3 style=\"font-size:20px;margin:0 0 6px\">逐节点核对是否计入摘要（AC-003）</h3><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">/</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><span class=\"ch5-sym is-nocnt\">不计</span><ul><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><span class=\"ch5-sym is-nocnt\">不计</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span><span class=\"ch5-sym is-cnt\">计 1</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span><span class=\"ch5-sym is-cnt\">计 1</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span><span class=\"ch5-sym is-cnt\">计 1</span></li></ul></li></ul></div></div><div class=\"p-bar\" data-reveal=\"2\">摘要差异数为 <b>3</b>，不是 5——只统计直接差异处，<code>/</code> 与 <code>/user</code> 祖先标记不重复计入</div>",
      "steps": [
        "嵌套输入与子树规则",
        "祖先标记不计入差异数",
        "摘要差异数为 3"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指向左侧 nested 两份输入；不切窗口】\n\n先看前半段要接上的差异摘要。继续用同一组 nested 素材比较，树上既有直接发生变化的字段，也有外层容器。",
        "【操作提示｜推进第 2 步，指向右侧树节点后的计数标签，停顿两秒；不切窗口】\n\n看右边树上的标记：/user/age、/active、/role 是三处直接差异，而根路径 / 和 /user 也带着“下层有变化”标记。那摘要区显示的差异数应该是 5 还是 3？",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p33】\n\n答案是 3，不是 5。规格明确差异数只统计直接差异处，带标记的祖先不重复计入；同样地，subtree 整棵子树增删也只在子树根部计 2 处。摘要数字立住了，接着打开「只看变化」。"
      ],
      "teaching": [],
      "source": "index.html#p32",
      "seconds": 90
    },
    {
      "id": "p33",
      "segment": "还没看见的部分",
      "label": "打开「只看变化」，图上该留下什么",
      "title": "打开「只看变化」，图上该留下什么？",
      "lead": "把 5.2 图数据里的祖先信息接到界面开关上，对照两种筛选效果。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.1fr;gap:20px;align-items:stretch\"><div data-reveal=\"0\" style=\"display:flex;flex-direction:column;justify-content:space-between\"><div><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">藏掉全部未变化节点</h3><span class=\"p-chip\" data-role=\"gate\">✗ 上下文丢失</span></div><ul class=\"p-tree ch5-tree\"><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div><div class=\"p-bar is-light\" style=\"margin-top:8px;padding:7px 14px;font-size:18.5px\"><code>/user</code> 容器消失，看不出 <code>age</code> 属于哪个对象</div></div><div data-reveal=\"1\" style=\"display:flex;flex-direction:column;justify-content:space-between\"><div><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">保留通向差异的必要祖先</h3><span class=\"p-chip\" data-role=\"ok\">✓ AC-004</span></div><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">/</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"p-note\">隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></li></ul></div><div class=\"p-bar is-light\" style=\"margin-top:8px;padding:7px 14px;font-size:18.5px\">可见 <b>5</b> 条路径，<code>/user/name</code> 隐藏，差异数保持 <b>3</b></div></div></div><div class=\"p-bar\" data-reveal=\"2\"><code>/user</code> 留下是为了保留路径上下文，不增加差异数；关闭开关后 <code>/user/name</code> 重新显示</div>",
      "steps": [
        "全藏会丢失路径上下文",
        "保留必要祖先与 removed",
        "切换开关不改变差异数"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，指向左侧“藏掉全部 unchanged”反例；不切窗口】\n\n5.2 已经在图数据里准备好了祖先标记，本节把它接到界面的「只看变化」开关上。如果简单粗暴地把所有 unchanged 节点全藏掉，通向 age 的 /user 容器也会一起消失，用户根本看不出改的是谁的 age。",
        "【操作提示｜推进第 2 步，指向右侧“保留必要上下文”合并图；不切窗口】\n\n按已批准规则，打开开关后要保留通向差异的必要祖先 / 和 /user，以及被删除的 /active，只把无关的 /user/name 隐藏，图上共 5 个可见路径。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p34】\n\n同时核对两个动作：开关打开前后，摘要里的差异数始终保持为 3，不会因为保留了 /user 就多算一处；关掉开关后，/user/name 立刻恢复显示。"
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 90
    },
    {
      "id": "p34",
      "segment": "还没看见的部分",
      "label": "收尾验收查什么？对不上时回哪一层",
      "title": "收尾验收查什么？对不上时回哪一层？",
      "lead": "前半段补齐灰度与超限局部检查，后半段全量走查并按三类情况处理规格回环。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:11px 16px\"><div class=\"p-head\"><h3 style=\"font-size:21px\">前半段：剩余两项局部检查</h3><span class=\"p-tag\" data-role=\"ctx\">AC-015~017</span></div><p style=\"font-size:18px\">1. <b>灰度可辨认</b>：去色后凭符号/文字区分四状态<br>2. <b>上限 2000</b>：超限不画图只提示太大、无外链，removed 计入</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\" style=\"padding:11px 16px\"><div class=\"p-head\"><h3 style=\"font-size:21px\">后半段：全量验收与回归</h3><span class=\"p-tag\" data-role=\"us\">整组收口</span></div><p style=\"font-size:18px\">走完 <b>AC-001～AC-021</b>（含 <code>null</code> 等价）+ <code>360px</code> 窄窗 + 筛选态网络零外发 + 单输入五路回归 + Review</p></div></div><div class=\"p-grid\" style=\"--n:3;gap:14px\" data-reveal=\"2\"><div class=\"p-box is-soft\" data-role=\"tool\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"tool\" style=\"margin-bottom:6px\">规则清楚 · 结果偏离</span><p style=\"font-size:18px\">修代码或核对步骤，<b>绝不改期望</b></p></div><div class=\"p-box is-soft\" data-role=\"ctx\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:6px\">规则已定 · 漏了案例</span><p style=\"font-size:18px\">先补 <code>ACCEPTANCE</code> 与 <code>TASKS</code> 再回归</p></div><div class=\"p-box is-soft\" data-role=\"gate\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"gate\" style=\"margin-bottom:6px\">产品行为本身要改</span><p style=\"font-size:18px\"><b>由人批准</b>后同步 <code>SPEC → AC → TASKS</code></p></div></div>",
      "steps": [
        "灰度与节点上限局部检查",
        "AC-001~021 全量走查与回归",
        "结果对不上时的三条回环路径"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步，指向左上角“前半段局部补齐”卡片；不切窗口】\n\n前半段还要在网页上核对两项规格要求：一是把画面调成灰度，确认不靠颜色也能凭符号或文字分辨四种状态；二是用 2100 个元素的 over.json 和被删节点超限素材验证，超过开发环境 2000 上限时只提示图太大、不渲染画布，且不含外部产品升级链接。",
        "【操作提示｜推进第 2 步，指向右上角“后半段整组收口”卡片；不切窗口】\n\n前半段局部看清后，后半段正式拉通全量验收：逐条走查 AC-001 到 AC-021（含 null 等价案例），补齐 360px 窄窗操作、切换筛选时的网络面板本地性核对、Graph / Tree / 导入弹窗 / ?json= / widget 五条单输入路径回归，以及代码 Review。",
        "【操作提示｜推进第 3 步，指向下方规格回环三分支决策图；讲完进入 p35】\n\n走查中如果发现结果对不上，按底下的三条回环路径分流处理：规则清楚但结果偏离，修实现或核对步骤；规则已定但漏了验收案例，先补 Acceptance 和 Tasks 再回归；真正要改动产品行为，必须由人批准并同步 Spec，绝不私自改期望或虚构缺口。"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 90
    },
    {
      "id": "p35",
      "segment": "怎样发出请求",
      "label": "怎样发一次请求，完成收尾与整体验收",
      "title": "怎样发一次请求，完成收尾与整体验收？",
      "lead": "接上最后一块视图拼图，跑通构建、全套验收与单输入五路回归。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>packages/jsoncrack-react/src/diff/</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.1 差异模型</h3></div><p>按路径对齐两侧，算状态、计数与祖先标记</p></div><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>NodeData / EdgeData + 可选入口</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed 与必要祖先，赋予状态符号</p></div><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>apps/www DiffView + 独立状态</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.3 双输入与错误</h3></div><p>接入 Before / After，出错保留上次结果</p></div><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>只看变化 + 无外链超限 + 全量走查</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完 AC-001~021 与回归</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全章不动）：</b><span><code>parser.ts</code> 顺序节点 id</span> · <span><code>useJson</code> 单输入状态链路</span> · <span><code>NotSupported</code> 原超限组件</span> · <span><code>apps/vscode</code> 插件端</span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">构建 + 全量走查 + 五路回归</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:18.5px\">跑 <code>www lint</code> 与 <code>build:www</code>；在 <code>dev:www</code> 走完 <code>AC-001~021</code>、三项专项及 Graph / Tree / 导入 / <code>?json=</code> / widget</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">守住未决边界与人工 Review</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:18.5px\">不固化 <code>REQ-032~037</code>，不做第 6 章 <code>CR-01</code>；可用 <code>/review</code> 辅助查 diff，最终由人按证据裁决</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-04 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-04</code> 及关联 Spec、Acceptance 与固定素材，基于前三个任务的成果完成摘要、筛选与整体验收</p><p style=\"margin:0 0 8px\">允许范围：在 Diff 视图新增差异摘要区、「只看变化」开关与无外链的专用超限提示组件；不改单输入原 <code>NotSupported</code> 组件，不固化 <code>REQ-032~037</code>，不做第 6 章 <code>CR-01</code></p><p style=\"margin:0\">运行 <code>pnpm --filter www run lint</code> 与 <code>pnpm build:www</code>，启动 <code>pnpm dev:www</code> 按 <code>AC-001～AC-021</code> 逐条走查，完成 360px、灰度、网络面板核对与单输入五路回归</p></div></details></div></div></div>",
      "steps": [
        "接齐最后一块视图切片",
        "构建与全套验收回归",
        "未决边界与 Review 要求"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步，指向架构图中全部接通的四个切片与底部隔离带；不切窗口】\n\n在全章架构图上，这是最后一块拼图：在 DiffView 内补齐摘要区、「只看变化」开关和 Diff 专用无外链超限组件，单输入原有的 NotSupported 超限组件和其余隔离区继续保持不动。",
        "【操作提示｜推进第 2 步，指向左下角构建与全量走查卡片；不切窗口】\n\n验证时先跑通 www 的 lint 与完整构建 build:www（若前序刚改过共享包先构建共享包），再起 dev:www 完成全套 AC 走查、三项专项检查和单输入五路回归。",
        "【操作提示｜推进第 3 步，指向右下角边界约束与请求参考；讲完进入 p36】\n\n请求里继续守住未决边界：摘要只保证读出准确差异数，不固化分类计数或点击弹窗等 REQ-032 到 037 未决项，也不提前做第 6 章的 CR-01。做代码审查时可以用自带的 /review 辅助检查未提交改动，但最终结论由人对照证据拍板。"
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
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在 5.3 分支基础上发出 TASK-04 收尾与验收请求</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p36 第 1 步】\n\n本页待正式录制演练后补充。"
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
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时展示摘要筛选、超限灰度、360px、单输入回归与 Review 结果</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p37 第 1 步】\n\n本页待正式录制演练后补充。"
      ],
      "teaching": [],
      "source": "index.html#p37",
      "seconds": 30
    },
    {
      "id": "p38",
      "segment": "完成边界",
      "label": "摘要和筛选能用了，就算功能做完了吗",
      "title": "摘要和筛选能用了，就算功能做完了吗？",
      "lead": "对照四层验证各自的覆盖面，看清为什么局部接通不能代替整体验收。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:14px\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"ctx\">5.1 模型脚本</span><h3 style=\"font-size:21px;margin:4px 0\">只保纯函数</h3><p style=\"font-size:18px\">证明路径比较与计数规则，不保画布与页面</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"ctx\">5.2 映射脚本</span><h3 style=\"font-size:21px;margin:4px 0\">只保图数据</h3><p style=\"font-size:18px\">证明节点与连边结构，不保网页开关交互</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"ctx\">5.3 + 5.4 前半</span><h3 style=\"font-size:21px;margin:4px 0\">只保局部交互</h3><p style=\"font-size:18px\">nested 上能读摘要和切开关，尚未覆盖全量边界</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"gate\">5.4 后半必查</span><h3 style=\"font-size:21px;margin:4px 0\">整体验收收口</h3><p style=\"font-size:18px\">超限、灰度、360px、网络面板、五路回归与 Review</p></div></div><div class=\"p-bar\" data-reveal=\"2\">四层证据各司其职、<b>不能互相替代</b>；全套 <code>AC-001~021</code>、单输入回归与 Review 全部过关才算完成</div>",
      "steps": [
        "前两节离线脚本边界",
        "界面局部接通 vs 全量收口",
        "四层证据不可互相替代"
      ],
      "script": [
        "【操作提示｜停留课件 p38 第 1 步，指向前两张局部证据卡片；停顿两秒】\n\n现在摘要数字对了，「只看变化」在嵌套案例上也能正常开关了，能不能就此宣布整个 JSON Diff 功能验收完成？",
        "【操作提示｜推进第 2 步，指向后两张证据边界与待收口卡片；不切窗口】\n\n不能。回看四层证据分工就清楚了：5.1 脚本只保纯函数，5.2 只保图数据结构，5.3 只保双输入与报错保留；嵌套案例上的摘要和筛选跑通，也只说明最后一块界面接上了。",
        "【操作提示｜推进第 3 步，指向底部整体验收结论条；讲完进入 p39】\n\n只有把超限、灰度、360px 窄窗、筛选态网络零外发、单输入五路回归全部走完，且代码 Review 没有未处理的越界或阻塞项，整个功能才算真正通过本章验收。"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    },
    {
      "id": "p39",
      "segment": "自检与交接",
      "label": "走查结果与规则冲突，哪种做法对",
      "title": "走查结果与规则冲突，哪种做法对？",
      "lead": "整体验收走查时，如果发现计数、祖先保留或超限行为与已批准规则不符，先判断怎么处理。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch5-quiz-grid\"><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">1</span><p class=\"ch5-qcard-say\">顺着当前代码表现去改规则，或虚构一条「漏掉的需求」替代码圆场</p></div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 做法不对</span><div class=\"ch5-qcard-ans\" data-role=\"gate\" data-reveal=\"1\">不对。不能篡改已批准规则迁就错误实现，也不能把已确认的规则重新说成未决</div></div><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">2</span><p class=\"ch5-qcard-say\">以已批准规则为准：实现偏离修代码，漏案例补 Acceptance 与 Tasks，改行为须由人批准更新 Spec</p></div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 做法正确</span><div class=\"ch5-qcard-ans\" data-role=\"ok\" data-reveal=\"2\">对。按真实原因分流回到对应层；若原本没有规格缺口就直接验证，绝不生造问题</div></div></div>",
      "steps": [
        "暂停比较两种处理",
        "做法一为什么错",
        "做法二为什么对"
      ],
      "script": [
        "【操作提示｜停留课件 p39 第 1 步，指向暂停提示与两张做法卡；停顿三秒】\n\n假如在整体验收走查时，发现差异计数、祖先保留或节点上限的表现和已批准规则对不上，下面两种做法哪一种对？先暂停判断。",
        "【操作提示｜推进第 2 步，指向左侧卡片盖章与解析；不切窗口】\n\n做法一顺着当前代码表现去改规则，或者硬编一条所谓“漏掉的需求”来替错误代码圆场。这等于把已批准的契约推翻重写成糊涂账。",
        "【操作提示｜推进第 3 步，指向右侧卡片盖章与解析；讲完进入 p40】\n\n做法二先拿已批准规则做标尺：代码偏离就修代码；确实漏了边界案例就先补可核算的 Acceptance 并同步 Tasks；确需调整产品行为则交由人批准更新 Spec；没有规格缺口就直接验证，绝不生造问题。"
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
      "lead": "JSON Diff 在第 5 章的开发与验收至此全部收口，成果将交接给第 6 章。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>界面拼齐不等于做完<br>全套 AC + 回归 + Review<br>冲突按层级回溯规格</p></div></div><div data-reveal=\"1\"><h3>交接给第 6 章</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>通过本章验收的 JSON Diff 与本地检查点</span></li><li class=\"is-pass\"><span>代码 Review 结论与可解释的 <code>git diff</code></span></li><li class=\"is-pass\"><span>完整的 <code>CH05_IMPLEMENTATION.md</code></span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.5</h3><div class=\"p-box\" data-role=\"us\"><h3>可带走的招数</h3><p>不再写新功能、不设门禁，轻松看一组随手能用的 Vibe Coding 招数</p></div></div></div>",
      "steps": [
        "核心判断",
        "交接给第 6 章的成果",
        "进入 5.5 经验分享"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步，指向左侧重点贴纸；不切窗口】\n\n收束 5.4：各层局部测试不能互相替代，界面拼齐也不等于整体验收通过，全量案例、回归与 Review 都过关才算收口。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n到这里，我们留下了通过本章验收的 JSON Diff、代码 Review 结论、可解释的提交检查点与完整的实施记录。这些成果将原样交接给第 6 章。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\nJSON Diff 在本章的开发任务圆满收官。最后一节 5.5 换个轻松节奏，不写新功能、不设门禁，带走一组日常做项目马上能用上的 Vibe Coding 招数。"
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

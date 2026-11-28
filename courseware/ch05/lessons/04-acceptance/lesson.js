window.lesson = {
  "title": "各部分都做了，能说整个功能完成了吗",
  "chapter": "第 5 章 · SDD",
  "section": "05.04",
  "summary": "先把摘要、「只看变化」与状态符号定稿接到界面，再按 AC-01~AC-23、三端 lint/build 与单输入回归判断整个功能是否完成。",
  "prep": [
    "确认教学副本处于同一功能分支，TASK-01~TASK-03 已完成且共享包已最新 build",
    "启动 pnpm dev:www（开发环境上限 2000），准备浏览器 360px 窄窗、Network 面板与灰度检查",
    "编辑器打开 ACCEPTANCE.md（AC-01~AC-23）、TASKS.md（TASK-04）与全部 20 组素材（含 c23-single-input）"
  ],
  "scenes": [
    {
      "id": "p31",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "各部分都做了，能说整个功能完成了吗",
      "title": "能说整个功能完成了吗？",
      "lead": "模型、DiffGraph 与 /diff 已通；本节补齐摘要筛选、定稿符号并全量验收",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-done\"><b>5.3</b>双输入</li><li class=\"is-now\"><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">5.1–5.3 已就位</span><h3>模型、合并图与 /diff 报错保留已通</h3><p>界面尚缺差异摘要、「只看变化」开关与四状态文字/符号定稿</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.4 分两段收口</span><ul class=\"ch5-mini-list\"><li>前半段：补齐摘要、筛选、定稿状态符号（<code>AC-21</code>）</li><li>后半段：全量 <code>AC-01~23</code>、三端 <code>lint/build</code> 与 Review</li></ul></div></div>",
      "steps": [
        "本章位置",
        "5.1–5.3 已就位",
        "两段收口安排"
      ],
      "script": [
        "【操作提示｜停留课件 p31 第 1 步，指向五节路线图的 5.4；不切窗口】\n\n前三节把差异模型、合并图映射、DiffGraph 和独立 /diff 路由的双输入报错一层层搭了起来。走到这里，能说整个 JSON Diff 已经做完了吗？",
        "【操作提示｜推进第 2 步，指向左侧“5.1–5.3 已就位”卡片；不切窗口】\n\n还不能立刻进整体验收——规格要求的差异摘要、「只看变化」筛选开关以及四种状态的文字或符号最终样式，还没有在界面上接齐定稿。打开摘要、筛选与整体验收任务，讲师演示对应基线上的 TASK-04。",
        "【操作提示｜推进第 3 步，指向右侧两段收口安排卡片；讲完进入 p32】\n\n所以这一节分两段走：前半段先把用户还没看见的摘要、筛选和状态符号定稿补齐；后半段再拉通 AC-01 到 AC-23 全部 20 组素材、三端构建与单输入回归，加上代码 Review，回答整个功能是否真正完成。"
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
      "lead": "先补齐界面上的差异摘要区，用 c03-nested 核对摘要数字为什么是 3 而不是 5。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;align-items:stretch\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 6px\">同一组嵌套输入（c03-nested）</h3><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 20 },</span><span style=\"display:block\">  &quot;active&quot;: true</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 21 },</span><span style=\"display:block\">  &quot;role&quot;: &quot;student&quot;</span><span style=\"display:block\">}</span></pre></div></div><div class=\"p-bar is-light\" style=\"margin-top:10px;padding:7px 14px;font-size:18.5px\">同理：<code>c05~c08</code> 整棵对象或数组增删只在根部计 <b>1</b> 处（<code>AC-05~08</code>）</div></div><div data-reveal=\"1\"><h3 style=\"font-size:20px;margin:0 0 6px\">逐节点核对是否计入摘要（AC-03）</h3><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">/</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><span class=\"ch5-sym is-nocnt\">不计</span><ul><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><span class=\"ch5-sym is-nocnt\">不计</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span><span class=\"ch5-sym is-cnt\">计 1</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span><span class=\"ch5-sym is-cnt\">计 1</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span><span class=\"ch5-sym is-cnt\">计 1</span></li></ul></li></ul></div></div><div class=\"p-bar\" data-reveal=\"2\">摘要差异数为 <b>3</b>，不是 5——只统计直接差异处，<code>/</code> 与 <code>/user</code> 祖先标记不重复计入</div>",
      "steps": [
        "嵌套输入与子树规则",
        "祖先标记不计入差异数",
        "摘要差异数为 3"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指向左侧 c03-nested 两份输入；不切窗口】\n\n先看前半段要接上的差异摘要。继续用熟悉的 c03-nested 比较，树上既有直接发生变化的字段，也有外层容器。",
        "【操作提示｜推进第 2 步，指向右侧树节点后的计数标签，停顿两秒；不切窗口】\n\n看右边树上的标记：/user/age、/active、/role 是三处直接差异，而根路径 / 和 /user 也带着 hasDiffDescendant 派生标记。那摘要区显示的差异数应该是 5 还是 3？",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p33】\n\n答案是 3，不是 5。规格明确差异数只统计直接差异处，带标记的祖先不重复计入；同样地，c05 到 c08 整棵对象或数组增删也只在子树根部计 1 处。摘要数字立住了，接着打开「只看变化」。"
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
      "lead": "把 5.2 图数据里的可见集合接到「只看变化」开关上，对照两种筛选效果。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.1fr;gap:20px;align-items:stretch\"><div data-reveal=\"0\" style=\"display:flex;flex-direction:column;justify-content:space-between\"><div><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">藏掉全部未变化节点</h3><span class=\"p-chip\" data-role=\"gate\">✗ 上下文丢失</span></div><ul class=\"p-tree ch5-tree\"><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></div><div class=\"p-bar is-light\" style=\"margin-top:8px;padding:7px 14px;font-size:18.5px\"><code>/user</code> 容器消失，看不出 <code>age</code> 属于哪个对象</div></div><div data-reveal=\"1\" style=\"display:flex;flex-direction:column;justify-content:space-between\"><div><div class=\"p-head\" style=\"margin-bottom:6px\"><h3 style=\"font-size:21px;margin:0\">保留通向差异的必要祖先</h3><span class=\"p-chip\" data-role=\"ok\">✓ AC-03 · REQ-016~19</span></div><ul class=\"p-tree ch5-tree\"><li class=\"is-open\"><span class=\"p-path\">/</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"ch5-sym is-anc\">= unchanged · 下层有变化</span><ul><li class=\"is-dim\"><span class=\"p-path\">name: Lin</span><span class=\"p-note\">隐藏</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"ch5-sym is-chg\">~ changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"ch5-sym is-rem\">− removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"ch5-sym is-add\">+ added</span></li></ul></li></ul></div><div class=\"p-bar is-light\" style=\"margin-top:8px;padding:7px 14px;font-size:18.5px\">保留 <code>/user</code> 与 <code>removed</code>，隐藏 <code>/user/name</code>，差异数仍为 <b>3</b></div></div></div><div class=\"p-bar\" data-reveal=\"2\"><code>c06</code> 整棵被删子树在「只看变化」下同样保留显示；关闭开关后 <code>/user/name</code> 恢复</div>",
      "steps": [
        "全藏会丢失路径上下文",
        "保留必要祖先与 removed",
        "切换开关不改变差异数"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，指向左侧“藏掉全部 unchanged”反例；不切窗口】\n\n5.2 已经在映射层算好了筛选可见集合，本节把它接到界面的「只看变化」开关上。如果简单粗暴地把所有 unchanged 节点全藏掉，通向 age 的 /user 容器也会一起消失，用户根本看不出改的是谁的 age。",
        "【操作提示｜推进第 2 步，指向右侧“保留必要上下文”合并图；不切窗口】\n\n按已批准规则，打开开关后要保留通向差异的必要祖先 / 和 /user，以及被删除的 /active，只把无关的 /user/name 隐藏。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p34】\n\n同时核对三个动作：开关打开前后，摘要里的差异数始终保持为 3；像 c06 那样的整棵被删子树在「只看变化」下依然保留显示；关掉开关后，/user/name 立刻恢复。"
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
      "lead": "前半段定稿符号并局部核对，后半段跑通全套 23 条验收、三端构建与单输入回归。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:11px 16px\"><div class=\"p-head\"><h3 style=\"font-size:21px\">前半段：符号定稿与局部检查</h3><span class=\"p-tag\" data-role=\"ctx\">AC-21</span></div><p style=\"font-size:18px\">1. <b>非纯颜色可辨认</b>：定稿节点文字/符号，去色下分辨四状态<br>2. <b>摘要与筛选</b>：仅显示直接差异数，不提前固化 <code>REQ-036</code></p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\" style=\"padding:11px 16px\"><div class=\"p-head\"><h3 style=\"font-size:21px\">后半段：全量验收与三端回归</h3><span class=\"p-tag\" data-role=\"us\">AC-01~23</span></div><p style=\"font-size:18px\">走完 <b>20 组素材 AC-01~23</b> + <code>360px</code>（<code>AC-22</code>）+ 单输入（<code>AC-23</code>）+ <code>www/react/vscode</code> 六命令 + Review</p></div></div><div class=\"p-grid\" style=\"--n:3;gap:14px\" data-reveal=\"2\"><div class=\"p-box is-soft\" data-role=\"tool\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"tool\" style=\"margin-bottom:6px\">规则清楚 · 结果偏离</span><p style=\"font-size:18px\">修代码或核对步骤，<b>绝不改期望</b></p></div><div class=\"p-box is-soft\" data-role=\"ctx\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:6px\">规则已定 · 漏了案例</span><p style=\"font-size:18px\">先补 <code>ACCEPTANCE</code> 与 <code>TASKS</code> 再回归</p></div><div class=\"p-box is-soft\" data-role=\"gate\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"gate\" style=\"margin-bottom:6px\">产品行为本身要改</span><p style=\"font-size:18px\"><b>由人批准</b>后同步 <code>SPEC → AC → TASKS</code></p></div></div>",
      "steps": [
        "状态符号定稿与局部核对",
        "AC-01~23 与三端六命令回归",
        "结果对不上时的三条回环路径"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步，指向左上角“前半段符号定稿与局部核对”卡片；不切窗口】\n\n前半段还要在共享包节点组件里把四状态的文字或符号最终样式定稿，放到灰度显示下确认不靠颜色就能分辨（AC-21）；同时摘要只展示直接差异数，不把分类计数或清单列表等 REQ-036 未决项偷偷做进去。",
        "【操作提示｜推进第 2 步，指向右上角“后半段全量验收与三端回归”卡片；不切窗口】\n\n前半段定稿之后，后半段正式拉通全量验收：逐条走查 AC-01 到 AC-23 全部 20 组固定素材，核对 360px 窄窗可操作、网络面板零外发，用 c23-single-input 回归原有单输入入口确实渲染出 2 个节点（AC-23），跑通 www、jsoncrack-react 和 vscode 三个包的 lint 与 build，并完成代码 Review。",
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
      "lead": "接上摘要与筛选并定稿符号，跑通 23 条验收、三端 lint/build 与单输入回归。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>src/diff/ · 无 React</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.1 差异模型</h3></div><p>路径比较、null 视同缺失与 check-diff</p></div><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>DiffGraph + NodeData</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed、可见集与上限</p></div><div class=\"ch5-arch-node is-done\" data-role=\"ok\"><div><div class=\"ch5-arch-top\"><span><code>pages/diff + useDiff</code></span><span class=\"ch5-arch-badge\">✓ 已验证</span></div><h3>5.3 双输入与错误</h3></div><p>独立路由、内存态与报错保留</p></div><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>符号定稿 · AC-01~23</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完三端 lint/build</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全程不动）：</b><span><code>parser.ts</code></span> · <span><code>JSONCrackComponent</code></span> · <span><code>pages/editor</code></span> · <span><code>features/editor</code></span> · <span><code>useFile / useJson</code></span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">AC-01~23 + 三端六命令回归</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:18.5px\"><code>dev:www</code> 走完 20 组素材（含 360px、灰度与 <code>c23</code> 单输入）；跑通 <code>www / react / vscode</code> 各自 <code>lint + build</code></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">守住未决边界与人工 Review</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:18.5px\">不加 <code>REQ-032~037</code> 扩展能力，不做第 6 章 <code>CR-01</code>；可用 <code>/review</code> 查 diff，由人按证据裁决</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-04 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-04</code> 及关联 Spec、<code>ACCEPTANCE.md</code>（AC-01~23）与全套 20 组素材，完成摘要、筛选、状态符号定稿与整体验收</p><p style=\"margin:0 0 8px\">允许范围：完善 <code>features/diff/**</code>、<code>useDiff.ts</code>（仅内存，不持久化）、<code>pages/diff.tsx</code> 与 <code>Navbar.tsx</code>，在 <code>CustomNode</code> / <code>ObjectNode</code> / <code>TextNode</code> 定稿非纯颜色状态文字或符号（AC-21）；如有映射缺陷可修 <code>src/diff/**</code></p><p style=\"margin:0 0 8px\">禁止改动：<code>§0</code> 六个禁止修改文件，且摘要仅展示直接差异数（不做 REQ-035 清单 / REQ-036 分类计数，不写 REQ-033 持久化，不做第 6 章 <code>CR-01</code>）</p><p style=\"margin:0\">走完 <code>AC-01</code>~<code>AC-23</code>（含 360px、灰度、Network、<code>c23-single-input</code>），跑通 <code>www</code> / <code>jsoncrack-react</code> / <code>vscode</code> 的 <code>lint</code> 与 <code>build</code> 并核查 <code>git diff --stat</code></p></div></details></div></div></div>",
      "steps": [
        "接入摘要、筛选与符号定稿",
        "AC-01~23 与三端六命令回归",
        "未决边界与 Review 要求"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步，指向架构图中全部接通的四个切片与底部隔离带；不切窗口】\n\n在全章架构图上，这是最后一块拼图：在 features/diff 补齐摘要区和「只看变化」开关，在共享包节点组件定稿状态文字或符号；底部六项禁止修改文件和 NotSupported.tsx 继续一行不改。",
        "【操作提示｜推进第 2 步，指向左下角回归验证卡片；不切窗口】\n\n验证时先在 dev:www 下把 AC-01 到 AC-23 全部 20 组素材走一遍，重点核对 AC-21 灰度、AC-22 360px 窄窗、AC-20 网络本地性和 AC-23 单输入回归，再跑通 www、jsoncrack-react、vscode 六条 lint 和 build 命令，确认共享包改动没有波及插件端。",
        "【操作提示｜推进第 3 步，指向右下角边界约束与请求参考；讲完进入 p36】\n\n请求里继续守住未决边界：Draft 条目 REQ-032 到 037 仍不扩展实现，第 6 章的 CR-01 提示文案也不提前做。代码审查时可以用自带的 /review 辅助检查未提交改动，最终由人对照 git diff 和验收证据拍板。"
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在 5.3 分支基础上发出 TASK-04 收尾与整体验收请求</div>",
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时展示 AC-01~23、三端 lint/build、禁区零改动与 Review 结果</div>",
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
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:14px\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"ctx\">5.1 check-diff</span><h3 style=\"font-size:21px;margin:4px 0\">只保纯函数</h3><p style=\"font-size:18px\">证明 c01–c13 模型逻辑，不保画布与页面</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"ctx\">5.2 映射脚本</span><h3 style=\"font-size:21px;margin:4px 0\">只保图数据与上限</h3><p style=\"font-size:18px\">证明节点结构与 c18 超限，不保网页交互</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"ctx\">5.3 + 5.4 前半</span><h3 style=\"font-size:21px;margin:4px 0\">只保局部界面</h3><p style=\"font-size:18px\">nested 上能读摘要和切开关，未覆全量边界</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:12px 14px\"><span class=\"p-tag\" data-role=\"gate\">5.4 后半必查</span><h3 style=\"font-size:21px;margin:4px 0\">整体验收收口</h3><p style=\"font-size:18px\">AC-01~23、360px、AC-23、三端构建与 Review</p></div></div><div class=\"p-bar\" data-reveal=\"2\">四层证据各司其职、<b>不能互相替代</b>；全套 <code>AC-01~23</code>、三端 <code>lint/build</code> 与 Review 全过才算完成</div>",
      "steps": [
        "前两节离线脚本边界",
        "界面局部接通 vs 全量收口",
        "四层证据不可互相替代"
      ],
      "script": [
        "【操作提示｜停留课件 p38 第 1 步，指向前两张局部证据卡片；停顿两秒】\n\n现在摘要数字对了，「只看变化」在嵌套案例上也能正常开关了，能不能就此宣布整个 JSON Diff 功能验收完成？",
        "【操作提示｜推进第 2 步，指向后两张证据边界与待收口卡片；不切窗口】\n\n不能。回看四层证据分工就清楚了：5.1 check-diff.ts 只保纯函数逻辑，5.2 只保映射结构与数据层上限，5.3 只保双输入与报错保留；嵌套案例上的摘要和筛选跑通，也只说明界面局部接上了。",
        "【操作提示｜推进第 3 步，指向底部整体验收结论条；讲完进入 p39】\n\n只有把 AC-01 到 AC-23、360px 窄窗、灰度可辨认、AC-23 单输入回归、www 与 jsoncrack-react 和 vscode 六条构建检查全部跑通，并且代码 Review 没有未处理的阻塞项，整个功能才算真正通过本章验收。"
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
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>界面拼齐不等于做完<br>AC-01~23 + 三端回归<br>冲突按层级回溯规格</p></div></div><div data-reveal=\"1\"><h3>交接给第 6 章</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>通过 <code>AC-01~23</code> 的 JSON Diff 与本地检查点</span></li><li class=\"is-pass\"><span>三端 <code>lint/build</code>、Review 结论与可解释 diff</span></li><li class=\"is-pass\"><span>完整的 <code>CH05_IMPLEMENTATION.md</code></span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.5</h3><div class=\"p-box\" data-role=\"us\"><h3>可带走的招数</h3><p>不再写新功能、不设门禁，轻松看一组随手能用的 Vibe Coding 招数</p></div></div></div>",
      "steps": [
        "核心判断",
        "交接给第 6 章的成果",
        "进入 5.5 经验分享"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步，指向左侧重点贴纸；不切窗口】\n\n收束 5.4：各层局部测试不能互相替代，界面拼齐也不等于整体验收通过，AC-01 到 AC-23、三端回归与 Review 都过关才算收口。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n到这里，我们留下了通过 AC-01 到 AC-23 验收的 JSON Diff、三端 lint 与 build 证据、代码 Review 结论以及完整的实施记录。这些成果将原样交接给第 6 章。",
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

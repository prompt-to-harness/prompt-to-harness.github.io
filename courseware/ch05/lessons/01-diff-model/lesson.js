window.lesson = {
  "title": "规格写好了，怎么知道第一个任务做对了",
  "chapter": "第 5 章 · SDD",
  "section": "05.01",
  "summary": "从一组能当场核对的输入看清差异模型，立住本章工作方式，再用 13 组固定素材期望判断第一个任务的完成边界。",
  "prep": [
    "在教学副本 jsoncrack.com 核对当前位于第 4 章提交的规格基线（course/ch04-baseline），git status --short 工作区干净",
    "编辑器预先打开 docs/specs/TASKS.md（TASK-01）、SPEC.md、ACCEPTANCE.md、PLAN.md 与 docs/specs/fixtures/index.json",
    "确认终端 Node.js 版本可直接执行 packages/jsoncrack-react/scripts/check-diff.ts（Node 22.6+，推荐 Node 24+）"
  ],
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "规格写好了，怎么知道第一个任务做对了",
      "title": "怎么知道第一个任务做对了？",
      "lead": "上一章提交了规格基线，生产代码还没有 JSON Diff；这一节先完成并核对第一个任务",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>5.1</b>差异模型</li><li><b>5.2</b>合并图</li><li><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">第 4 章已就位</span><h3>已提交的五层规格与 20 组固定素材</h3><p><code>docs/specs/</code> 与 <code>fixtures/</code> 已入库，生产代码尚未改动</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.1 完成后留下</span><ul class=\"ch5-mini-list\"><li>纯函数差异模型与不引入 React 的包导出入口</li><li>零依赖 <code>scripts/check-diff.ts</code> 核对 <b>13 组</b>素材通过</li><li>共享包 <code>lint / build</code> 通过与实施记录初稿</li></ul></div></div>",
      "steps": [
        "本章位置",
        "第 4 章已就位",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向五节路线图的首节；不切窗口】\n\n上一章我们定下了五层规格并提交了基线，但生产代码里还没有一行 JSON Diff。从这一章开始，我们按拆好的任务，把 JSON Diff 一层一层做出来。",
        "【操作提示｜推进第 2 步，指向左侧“第 4 章已就位”卡片；不切窗口】\n\n动手前先核对仓库状态：当前处于第 4 章提交的规格基线，工作区干净。打开自己的差异模型任务以及关联的 Spec、Acceptance、Plan 和固定素材。讲师演示用的是 TASK-01；每个人的编号不必相同，只要能在自己的文档里找到对应规则就行。",
        "【操作提示｜推进第 3 步，指向右侧“本节交付”卡片；讲完进入 p02】\n\n这一节做完，我们要留下经过 13 组固定素材验证的纯函数差异模型、不引入 React 的包导出入口、零依赖校验脚本 check-diff.ts，以及一份实施记录初稿。规格写好了，怎么知道第一个任务做对了？我们先不讲步骤，先看一组一眼能算清楚的输入。"
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
      "lead": "先不讲任务步骤，打开 docs/specs/fixtures/c02-key-order.*，按已批准规则判断比较结果。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch\"><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch\" data-reveal=\"0\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span><span>c02-key-order.before.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;name&quot;: &quot;Lin&quot;,</span><span style=\"display:block\">  &quot;age&quot;: 20,</span><span style=\"display:block\">  &quot;tags&quot;: [&quot;a&quot;, &quot;b&quot;]</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span><span>c02-key-order.after.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;tags&quot;: [&quot;a&quot;, &quot;b&quot;],</span><span style=\"display:block\">  &quot;age&quot;: 20,</span><span style=\"display:block\">  &quot;name&quot;: &quot;Lin&quot;</span><span style=\"display:block\">}</span></pre></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"display:flex;flex-direction:column;justify-content:center;padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3 style=\"font-size:25px;margin:4px 0 8px\">按已批准的 Spec，差异数是几？</h3><p style=\"font-size:19px;color:var(--p-muted)\">提示：回想 4.3 对字段顺序的决定</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">两份 JSON 的字段集合与值完全一致，只是 <code>name</code>、<code>age</code>、<code>tags</code> 的<b>键顺序</b>调换了</div><div class=\"p-bar\" data-reveal=\"3\">差异数为 <b>0</b>，全部节点为 <code>unchanged</code>，不产生任何增删改（<code>REQ-001</code> · <code>AC-02</code>）</div><p class=\"source-note\">实际素材：docs/specs/fixtures/c02-key-order.before.json / after.json</p>",
      "steps": [
        "固定输入 Before 与 After",
        "只是键顺序不同",
        "先自己判断",
        "差异数为 0"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，指向左侧 Before 与 After 两份 JSON；不切窗口】\n\n这是规格素材里的 c02-key-order。左边是 Before，右边是 After，它们都是已经写进仓库 fixtures 目录下的固定测试数据。",
        "【操作提示｜推进第 2 步，指向底部键顺序说明条；不切窗口】\n\n对比两边的内容：name、age 和 tags 三个字段的值都一模一样，唯一的变化是它们的键排列顺序调换了。",
        "【操作提示｜推进第 3 步，指向右侧判断框，停顿两秒；不切窗口】\n\n先按上一章批准的规则判断一下：这两份 JSON 比较下来，差异数应该是多少？",
        "【操作提示｜推进第 4 步，指向“0 处差异”结论；讲完进入 p03】\n\n答案是 0 处差异。SPEC 的 REQ-001 已经明确忽略对象键顺序，AC-02 也把零差异和全部节点 unchanged 写成了固定期望。不过，忽略键顺序和把左右两份输入对调完全是两码事，这层边界要先分清。"
      ],
      "teaching": [],
      "source": "index.html#p02",
      "seconds": 120
    },
    {
      "id": "p03",
      "segment": "可核对的输入",
      "label": "检查键顺序，还是对调两侧",
      "title": "检查键顺序，还是对调两侧？",
      "lead": "分清对象内部键换序与对调 Before / After 的区别，并看清为什么不能复用现有解析器的节点 id。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>对象内部键换序</h3><span class=\"p-tag\" data-role=\"ctx\">结果不变</span></div><p style=\"font-family:var(--p-mono);font-size:18px\">{\"a\":1,\"b\":2} ↔ {\"b\":2,\"a\":1}</p><p style=\"margin-top:6px\">两侧同路径取值相同，差异数恒为 <b>0</b></p></div><div class=\"p-box\" data-role=\"gate\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>对调 Before 与 After</h3><span class=\"p-tag\" data-role=\"gate\">方向反转</span></div><p style=\"font-family:var(--p-mono);font-size:18px\">{\"x\":1} → {} 为 removed；反过来是 added</p><p style=\"margin-top:6px\">不能笼统写成「输入顺序不影响结果」</p></div></div><div class=\"p-pair\" style=\"margin-top:4px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"gate\">现有 parser.ts 的风险</span><p style=\"font-size:19.5px\">用自增序号发放节点 <code>id</code>（<code>nodeId++</code>），两次解析同路径也会拿到不同编号</p></div><div class=\"p-join\" data-reveal=\"2\"><span>改用</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"tool\">差异模型做法</span><p style=\"font-size:19.5px\">绕开节点 <code>id</code>，统一按 <code>/user/name</code> 这样的 <b>JSON 路径</b>对齐两侧</p></div></div>",
      "steps": [
        "键换序 vs 对调两侧",
        "parser.ts 自增 id 风险",
        "按 JSON 路径对齐"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，对照上方左右两张卡片；不切窗口】\n\n同一种顺序变化不能混为一谈。对象内部键换序时，两侧键值集合完全一致，差异数是 0；但如果把 Before 和 After 两侧对调，原本删掉的 x 就会反过来变成新增的 x，结果方向截然相反。",
        "【操作提示｜推进第 2 步，指向下方左侧 parser.ts 风险框；不切窗口】\n\n落到 JSON Crack 源码里还有一个风险：现有的 parser.ts 用自增序号 nodeId++ 发放节点 id，两次解析同一路径也会拿到不同编号。如果直接拿这套节点 id 去比对，键一换序就会产生大量假差异。",
        "【操作提示｜推进第 3 步，指向下方右侧路径对齐结论；讲完进入 p04】\n\n所以差异模型必须绕开节点 id，改按 /user/name 这样的 JSON 路径对齐两侧。看清了键换序，我们再看第一个任务一共要覆盖哪些情况。"
      ],
      "teaching": [],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p04",
      "segment": "可核对的输入",
      "label": "除了键换序，模型还要覆盖哪些情况",
      "title": "除了键换序，模型还要覆盖哪些情况？",
      "lead": "键换序只验证了一条规则；当前基线上 TASK-01 要用 13 组固定素材核对七类比较规则。",
      "html": "<div class=\"ch5-fx-grid\" data-reveal=\"0\"><div class=\"ch5-fx-card\" data-role=\"ctx\"><code>c01-identical</code><span>完全一致 → 0 处差异</span></div><div class=\"ch5-fx-card\" data-role=\"ctx\"><code>c02-key-order</code><span>对象键换序 → 0 处差异</span></div><div class=\"ch5-fx-card\" data-role=\"us\"><code>c03 · c04 嵌套与混合</code><span>nested / crud 增删改 → 3 处</span></div><div class=\"ch5-fx-card\" data-role=\"us\"><code>c09-array-index</code><span>[10,20] → [5,10,20] → 3 处</span></div></div><div class=\"ch5-fx-grid\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\" data-reveal=\"1\"><div class=\"ch5-fx-card\" data-role=\"tool\"><code>c10-type-change</code><span>1 → \"1\" 记 changed → 1 处</span></div><div class=\"ch5-fx-card\" data-role=\"tool\"><code>c05~c08 子树整增删</code><span>对象 / 数组子树仅根计 → 1 处</span></div><div class=\"ch5-fx-card\" data-role=\"ok\"><code>c11~c13 null 等价</code><span>null 视同路径不存在（REQ-003）</span></div></div><div class=\"p-bar\" data-reveal=\"2\">TASK-01 共 <b>13 组素材（c01–c13）</b>，只核对纯函数与无 React 入口；合并图、双输入、超限留后续任务</div><p class=\"source-note\">对应 AC-02、AC-04～AC-13（含 AC-01、AC-03 模型侧），预期直接取自 fixtures/index.json</p>",
      "steps": [
        "四类基础与数组比较规则",
        "三类类型、子树与 null 规则",
        "13 组素材核对边界"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，扫过上方四张基础与数组素材卡；不切窗口】\n\n除了 c01 完全相同和 c02 键换序，TASK-01 还要用 c03、c04 覆盖嵌套和增删改混合及变化祖先标记，并用 c09 覆盖数组按索引逐项对齐——中间插入元素后，后面的下标按错位记为 changed，不做元素移动配对。",
        "【操作提示｜推进第 2 步，指向第二排三张类型、子树与 null 素材卡；不切窗口】\n\n再往下还有三类边界规则：数字 1 变成字符串 \"1\" 用 c10 验证，统一记为 changed；整棵对象或数组子树新增、删除用 c05 到 c08 验证，子节点各自带状态，但差异数只在子树根部计 1 处；另外按已批准的 REQ-003，字段值为 null 视同路径不存在，也要用 c11 到 c13 三组素材核对。",
        "【操作提示｜推进第 3 步，指向底部 13 组素材边界条；讲完进入 p05】\n\n这 13 组素材 c01 到 c13 共同构成了纯函数差异模型的验收面，预期全部写在 fixtures/index.json 里。至于合并图节点、双输入界面和超限提示，都属于后续任务。范围清楚了，该怎么把这一个任务稳稳交给 Agent？"
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
      "lead": "先在全章架构图里锁死修改边界，再明确零依赖校验入口与委托请求要素。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>src/diff/ · 无 React</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.1 差异模型</h3></div><p>路径比较、null 视同缺失与 check-diff</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>DiffGraph + NodeData</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed、可见集与上限</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>pages/diff + useDiff</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.3 双输入与错误</h3></div><p>独立路由、内存态与报错保留</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>符号定稿 · AC-01~23</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完三端 lint/build</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全程不动）：</b><span><code>parser.ts</code></span> · <span><code>JSONCrackComponent</code></span> · <span><code>pages/editor</code></span> · <span><code>features/editor</code></span> · <span><code>useFile / useJson</code></span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">无 React 入口 + 零依赖脚本</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:19px\">Node 下跑 <code>scripts/check-diff.ts</code> 对照 <code>index.json</code> 断言 <b>13 组素材</b>，再跑共享包 <code>lint / build</code></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">请求要素与未决收敛</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:19px\">带齐 <code>TASK-01</code>、禁止改动表与 <code>c01</code>–<code>c13</code>；<code>null</code> 按 <code>REQ-003</code> 视同缺失，<code>REQ-032</code>（<code>1</code> vs <code>1.0</code>）留单一比较点</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-01 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-01</code> 及关联的 <code>SPEC.md</code>（REQ-001~014）、<code>ACCEPTANCE.md</code>、<code>PLAN.md</code> 与 <code>docs/specs/fixtures/index.json</code>，只完成纯逻辑差异模型任务</p><p style=\"margin:0 0 8px\">允许范围：新增 <code>packages/jsoncrack-react/src/diff/**</code>、更新 <code>index.ts</code> 与 <code>types.ts</code>（不改 <code>NodeData</code>）、在 <code>vite.config.ts</code> 与 <code>package.json</code> 增开不引入 React 的子入口，并新增零依赖脚本 <code>packages/jsoncrack-react/scripts/check-diff.ts</code></p><p style=\"margin:0 0 8px\">禁止改动：<code>parser.ts</code>、<code>JSONCrackComponent.tsx</code>、<code>components/**</code>、<code>apps/**</code> 与原主入口行为；不得引入测试框架，<code>REQ-032</code>（<code>1</code> 与 <code>1.0</code>）留出单一可替换数值比较点而不写死断言</p><p style=\"margin:0\">运行 <code>node packages/jsoncrack-react/scripts/check-diff.ts</code> 断言 <code>c01</code>–<code>c13</code> 全过，并跑通 <code>pnpm --filter jsoncrack-react lint</code> 与 <code>build</code></p></div></details></div></div></div>",
      "steps": [
        "锁死架构与六文件禁区",
        "无 React 子入口与零依赖脚本",
        "委托要素与 REQ-032 边界"
      ],
      "script": [
        "【操作提示｜停留课件 p05 第 1 步，指向全章架构图里的 5.1 高亮模块与底部六文件隔离带；不切窗口】\n\n从第 4 章规格基线切出本地功能分支后，先看清这次改动在工程里的位置：我们在共享包新增 src/diff/ 并增开一个不引入 React 的子入口，下面列出的 parser.ts、JSONCrackComponent.tsx、editor.tsx 和单输入状态一行都不碰。",
        "【操作提示｜推进第 2 步，指向左下角零依赖验证卡片；不切窗口】\n\n第 4 章源码调查已经查实：原仓库没有内置测试框架，直接导入共享包原入口又会在 Node 下因为依赖浏览器环境而报错。所以这一步要把纯逻辑导出入口拆出来，配合零依赖的 scripts/check-diff.ts 直接读取 index.json 断言 13 组素材，再跑通共享包的 lint 和 build。",
        "【操作提示｜推进第 3 步，指向右下角委托要素与请求参考弹窗；讲完进入 p06】\n\n发给 Codex 的请求要把 TASK-01、关联 Spec、Acceptance、Plan、c01 到 c13 素材和禁止改动清单一起带齐。null 视同路径不存在按 REQ-003 实现，而 REQ-032 的 1 和 1.0 字面量比较仍属 Draft，在模型里留出单一可替换比较点，不写死断言。这段任务级工作方式只在这一节立一次，后面各节直接沿用。"
      ],
      "teaching": [
        {
          "title": "工作方式只立一次",
          "text": "5.1 用这一页把“定范围 → 委托 → 零依赖预期核对 → 查 diff”立住，5.2–5.4 直接沿用，不再重复讲流程定义。"
        }
      ],
      "source": "index.html#p05",
      "seconds": 90
    },
    {
      "id": "p06",
      "segment": "本章怎么干活",
      "label": "当前副本对得上起点吗？请求该怎么发出",
      "title": "当前副本对得上起点吗？请求该怎么发出？",
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在 course/ch04-baseline 核对起点并发出 TASK-01 请求</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p06 第 1 步】\n\n本页待正式录制演练后补充。"
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
      "lead": "本页在正式录制演练后按真实运行结果补充",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时展示 git diff --stat、check-diff.ts 13 组断言与 build 输出</div>",
      "steps": [
        "待录制演练后补充"
      ],
      "script": [
        "【操作提示｜停留课件 p07 第 1 步】\n\n本页待正式录制演练后补充。"
      ],
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 30
    },
    {
      "id": "p08",
      "segment": "完成边界",
      "label": "只过两组案例，模型任务算完成了吗",
      "title": "只过两组案例，模型任务算完成了吗？",
      "lead": "相同输入和对象键换序都通过了，先对照完整 13 组期望表判断还差什么。",
      "html": "<div class=\"ch5-table\"><div class=\"is-head\"><span>固定素材（c01–c13）</span><span>当前状态</span><span>独立核算期望（取自 index.json 与 AC-01~13）</span></div><div data-reveal=\"0\"><span><code>c02-key-order</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"ok\">已抽查 ✓</em></span><span>对象键换序：差异数 0，全部 unchanged，无顺序变化条目</span></div><div data-reveal=\"0\"><span><code>c01-identical</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"ok\">已抽查 ✓</em></span><span>相同输入：差异数 0，全部节点 unchanged</span></div><div data-reveal=\"1\"><span><code>c03-nested / c04-crud</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>差异数 3；c03 的 / 与 /user 带 hasDiffDescendant 不计处</span></div><div data-reveal=\"1\"><span><code>c09-array-index</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>[10,20] → [5,10,20] 差异数 3（0、1 改，2 增），无移动标记</span></div><div data-reveal=\"1\"><span><code>c10-type-change</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>/count 由 1 变为 \"1\" 记 changed，差异数 1，不单分类型分类</span></div><div data-reveal=\"1\"><span><code>c05~c08 子树整增删</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>新增或删除 /cfg（5 节点）、/list（4 节点）均只在根计 1 处</span></div><div data-reveal=\"1\"><span><code>c11~c13 null 等价</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>null 视同缺失：null↔1 记 added/removed（1 处）；双 null 记 0</span></div></div><div class=\"p-bar\" data-reveal=\"2\">还不算完成：<b>13 组素材</b>全过、无 React 入口能在 Node 下导入、<code>lint / build</code> 通过且禁区零改动才算完成</div>",
      "steps": [
        "已抽查的两组零差异案例",
        "其余十一组必查规则",
        "回看入口与 diff 边界"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，指向表格前两行“已抽查”；停顿两秒让学员思考】\n\n假设现在 c02 对象键换序和 c01 相同输入两组案例都已经跑通了，能不能就此宣布差异模型任务已经完成？",
        "【操作提示｜推进第 2 步，指向下方其余素材“仍须核对”的期望；不切窗口】\n\n对照完整期望表就能看出来：前两组只验证了零差异路径。嵌套增删改及祖先不计处、数组按索引错位、类型变化不另分类、四组整棵对象或数组子树只在根计 1 处，以及三组 null 视同缺失案例，这十一组规则一个都不能少，而且预期必须来自 index.json 与人工核算。",
        "【操作提示｜推进第 3 步，指向底部完成边界结论条；讲完进入 p09】\n\n只有 13 组固定素材断言全过、不引入 React 的子入口能在 Node 下直接导入、共享包 lint 与 build 通过，并且回看 git diff --stat 确认禁止改动的文件一行没碰，才有依据标记 TASK-01 完成。"
      ],
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "自检与交接",
      "label": "核对结果与期望不符，哪种做法对",
      "title": "核对结果与期望不符，哪种做法对？",
      "lead": "跑完 check-diff.ts 后，如果某组输出和 fixtures/index.json 的预期对不上，先自己判断该怎么处理。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch5-quiz-grid\"><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">1</span><p class=\"ch5-qcard-say\">把脚本里的预期改成当前实现跑出来的结果，让检查先通过</p></div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 做法不对</span><div class=\"ch5-qcard-ans\" data-role=\"gate\" data-reveal=\"1\">不对。期望来自已批准的 Spec 与人工核算，改期望迁就实现会让检查彻底失效</div></div><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">2</span><p class=\"ch5-qcard-say\">先核对固定输入、预期基准与 Spec，再排查模型实现或脚本哪里写偏了</p></div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 做法正确</span><div class=\"ch5-qcard-ans\" data-role=\"ok\" data-reveal=\"2\">对。先确认判断基准无误，再定位代码或脚本偏离，绝不拿错误逻辑自证正确</div></div></div>",
      "steps": [
        "暂停比较两种做法",
        "做法一为什么错",
        "做法二为什么对"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向暂停提示与左右两张做法卡；停顿三秒】\n\n跑 check-diff.ts 核对时，如果发现某组输出和 fixtures/index.json 的预期不一致，这里有两种处理做法。请先暂停判断一下，哪一种才对？",
        "【操作提示｜推进第 2 步，指向左侧卡片盖章与解析；不切窗口】\n\n做法一是把脚本里的预期改成当前代码跑出来的结果，让检查先通过。这相当于拿实现去篡改规格，检查立刻失去意义。",
        "【操作提示｜推进第 3 步，指向右侧卡片盖章与解析；讲完进入 p10】\n\n做法二是先核对固定输入、预期基准与已批准的 Spec，确认基准无误后，再排查模型实现或校验脚本哪里写偏了。守住独立期望，检查才真能拦住问题。"
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
      "lead": "实现写法可以与讲师不同，但必须能解释固定输入、预期、实际结果与代码改动。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>跑通两个例子<br>不等于任务完成<br>13 组素材 + 禁区边界都要过</p></div></div><div data-reveal=\"1\"><h3>本节留下</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>通过 <code>c01</code>–<code>c13</code> 验证的差异模型与无 React 入口</span></li><li class=\"is-pass\"><span>零依赖校验脚本 <code>scripts/check-diff.ts</code></span></li><li class=\"is-pass\"><span>共享包 <code>lint / build</code> 结果与实施记录</span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.2</h3><div class=\"p-box\" data-role=\"us\"><h3>合并图映射（DiffGraph）</h3><p>拿着已验证的模型，解决被删除的字段怎样画到结果图上</p></div></div></div>",
      "steps": [
        "核心判断",
        "本节留下的成果",
        "进入 5.2 合并图"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向左侧重点贴纸；不切窗口】\n\n收束一下 5.1：一两个样例跑通不代表任务完成，必须跑齐 13 组关联素材并守住允许修改的边界。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n完成本节后，分支上留下通过 c01 到 c13 核对的差异模型、不引入 React 的导出入口、零依赖校验脚本 scripts/check-diff.ts，以及共享包构建产物和实施记录初稿。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\n现在模型已经能算出哪个字段被删掉了，但 JSON Crack 原本只接收一份 JSON 构图。下一节 5.2，我们解决被删掉的字段怎样画到结果图上。"
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

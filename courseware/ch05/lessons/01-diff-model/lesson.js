window.lesson = {
  "title": "规格写好了，怎么知道第一个任务做对了",
  "chapter": "第 5 章 · SDD",
  "section": "05.01",
  "summary": "从一组能当场核对的输入看清差异模型，立住本章工作方式，再用七组已核算期望判断第一个任务的完成边界。",
  "prep": [
    "在教学副本 jsoncrack.com 核对当前位于 course/ch05-baseline 规格提交，git status --short 工作区干净",
    "编辑器预先打开 docs/specs/TASKS.md（TASK-01）、SPEC.md、ACCEPTANCE.md 与 docs/specs/fixtures/",
    "准备一个位于仓库外的工作目录（如 /tmp/ch05-check）存放不入库的一次性核对脚本"
  ],
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "规格写好了，怎么知道第一个任务做对了",
      "title": "怎么知道第一个任务做对了？",
      "lead": "上一章提交了规格基线，生产代码还没有 JSON Diff；这一节先完成并核对第一个任务",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>5.1</b>差异模型</li><li><b>5.2</b>合并图</li><li><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">第 4 章已就位</span><h3>已提交的五层规格与固定素材</h3><p><code>docs/specs/</code> 与 <code>fixtures/</code> 已入库，生产代码尚未改动</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.1 完成后留下</span><ul class=\"ch5-mini-list\"><li>通过七组固定素材验证的纯函数差异模型</li><li>工作区外的一次性核对脚本与检查结果</li><li><code>CH05_IMPLEMENTATION.md</code> 实施记录初稿</li></ul></div></div>",
      "steps": [
        "本章位置",
        "第 4 章已就位",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向五节路线图的首节；不切窗口】\n\n上一章我们定下了五层规格并提交了基线，但生产代码里还没有一行 JSON Diff。从这一章开始，我们按拆好的任务，把 JSON Diff 一层一层做出来。",
        "【操作提示｜推进第 2 步，指向左侧“第 4 章已就位”卡片；不切窗口】\n\n动手前先核对仓库状态：当前处于规格基线提交上，工作区干净。打开自己的差异模型任务以及关联的 Spec、Acceptance 和固定素材。讲师演示用的是 TASK-01；每个人的编号不必相同，只要能在自己的文档里找到对应规则就行。",
        "【操作提示｜推进第 3 步，指向右侧“本节交付”卡片；讲完进入 p02】\n\n这一节做完，我们要留下经过验证的纯函数差异模型、工作区外的一次性核对脚本和检查结果，以及一份实施记录初稿。规格写好了，怎么知道第一个任务做对了？我们先不讲步骤，先看一组一眼能算清楚的输入。"
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
      "lead": "先不讲任务步骤，打开 docs/specs/fixtures/key-order/，按已批准规则判断比较结果。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch\"><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch\" data-reveal=\"0\"><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>Before</span><span>key-order/before.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;user&quot;: { &quot;name&quot;: &quot;Lin&quot;, &quot;age&quot;: 20 },</span><span style=\"display:block\">  &quot;active&quot;: true</span><span style=\"display:block\">}</span></pre></div><div class=\"p-code ch5-code\"><div class=\"p-code-head\"><span>After</span><span>key-order/after.json</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  &quot;active&quot;: true,</span><span style=\"display:block\">  &quot;user&quot;: { &quot;age&quot;: 20, &quot;name&quot;: &quot;Lin&quot; }</span><span style=\"display:block\">}</span></pre></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"display:flex;flex-direction:column;justify-content:center;padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">请先判断</span><h3 style=\"font-size:25px;margin:4px 0 8px\">按已批准的 Spec，差异数是几？</h3><p style=\"font-size:19px;color:var(--p-muted)\">提示：回想 4.3 对字段顺序的决定</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">两份 JSON 的字段集合与值完全一致，只是顶层与 <code>user</code> 内部的<b>键顺序</b>调换了</div><div class=\"p-bar\" data-reveal=\"3\">差异数为 <b>0</b>，所有路径均为 <code>unchanged</code>，不出现「字段顺序变化」条目（<code>REQ-007</code> · <code>AC-006</code>）</div><p class=\"source-note\">实际素材：docs/specs/fixtures/key-order/；按已批准规则核算</p>",
      "steps": [
        "固定输入 Before 与 After",
        "只是键顺序不同",
        "先自己判断",
        "差异数为 0"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，指向左侧 Before 与 After 两份 JSON；不切窗口】\n\n这是规格素材里的 key-order 输入。左边是 Before，右边是 After，它们都是已经写进仓库的固定测试数据。",
        "【操作提示｜推进第 2 步，指向底部键顺序说明条；不切窗口】\n\n对比两边的内容：所有字段名和值都一模一样，唯一的变化是顶层对象和 user 内部字段的排列顺序调换了。",
        "【操作提示｜推进第 3 步，指向右侧判断框，停顿两秒；不切窗口】\n\n先按上一章批准的规则判断一下：这两份 JSON 比较下来，差异数应该是多少？",
        "【操作提示｜推进第 4 步，指向“0 处差异”结论；讲完进入 p03】\n\n答案是 0 处差异。4.3 已经明确忽略对象键顺序，4.4 也把零差异和全部路径 unchanged 写成了固定期望。不过，忽略键顺序和把左右两份输入对调完全是两码事，这层边界要先分清。"
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
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>对象内部键换序</h3><span class=\"p-tag\" data-role=\"ctx\">结果不变</span></div><p style=\"font-family:var(--p-mono);font-size:18px\">{\"a\":1,\"b\":2} ↔ {\"b\":2,\"a\":1}</p><p style=\"margin-top:6px\">两侧同路径取值相同，差异数恒为 <b>0</b></p></div><div class=\"p-box\" data-role=\"gate\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>对调 Before 与 After</h3><span class=\"p-tag\" data-role=\"gate\">方向反转</span></div><p style=\"font-family:var(--p-mono);font-size:18px\">{\"x\":1} → {} 为 removed；反过来是 added</p><p style=\"margin-top:6px\">不能笼统写成「输入顺序不影响结果」</p></div></div><div class=\"p-pair\" style=\"margin-top:4px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"gate\">现有 parser.ts 的风险</span><p style=\"font-size:19.5px\">按字段<b>出现顺序</b>发放节点 id，直接复用会把键换序误报成差异</p></div><div class=\"p-join\" data-reveal=\"2\"><span>改用</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:12px 16px\"><span class=\"p-tag\" data-role=\"tool\">差异模型做法</span><p style=\"font-size:19.5px\">绕开节点 id，统一按 <code>/user/name</code> 这样的 <b>JSON 路径</b>对齐两侧</p></div></div>",
      "steps": [
        "键换序 vs 对调两侧",
        "parser.ts 顺序 id 风险",
        "按 JSON 路径对齐"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，对照上方左右两张卡片；不切窗口】\n\n同一种顺序变化不能混为一谈。对象内部键换序时，两侧键值集合完全一致，差异数是 0；但如果把 Before 和 After 两侧对调，原本删掉的 x 就会反过来变成新增的 x，结果方向截然相反。",
        "【操作提示｜推进第 2 步，指向下方左侧 parser.ts 风险框；不切窗口】\n\n落到 JSON Crack 源码里还有一个风险：现有的 parser.ts 是按字段出现的先后顺序发放节点 id 的。如果直接拿这套节点 id 去比对，键一换序就会产生大量假差异。",
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
      "lead": "键换序只验证了一条规则；当前基线上 TASK-01 一共要跑通七组固定素材。",
      "html": "<div class=\"ch5-fx-grid\" data-reveal=\"0\"><div class=\"ch5-fx-card\" data-role=\"ctx\"><code>key-order</code><span>对象键换序 → 0 处差异</span></div><div class=\"ch5-fx-card\" data-role=\"ctx\"><code>identical</code><span>字节完全一致 → 0 处差异</span></div><div class=\"ch5-fx-card\" data-role=\"us\"><code>nested</code><span>增 / 删 / 改各 1，祖先不计 → 3 处</span></div><div class=\"ch5-fx-card\" data-role=\"us\"><code>array-index</code><span>[10,20] → [5,10,20] 按下标 → 3 处</span></div></div><div class=\"ch5-fx-grid\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\" data-reveal=\"1\"><div class=\"ch5-fx-card\" data-role=\"tool\"><code>type-change</code><span>1 → \"1\" 记 changed → 1 处</span></div><div class=\"ch5-fx-card\" data-role=\"tool\"><code>subtree</code><span>整棵子树增删只计根 → 2 处</span></div><div class=\"ch5-fx-card\" data-role=\"ok\"><code>null-equiv</code><span>null 等同路径不存在（REQ-038）</span></div></div><div class=\"p-bar\" data-reveal=\"2\">本节只核对纯函数输出的<b>状态、差异数与下层变化标记</b>；合并图、双输入、筛选与超限留给后续任务</div><p class=\"source-note\">对应 AC-002、AC-003、AC-005～AC-009、AC-011、AC-020、AC-021（编号以各自规格为准）</p>",
      "steps": [
        "四组基础比较规则",
        "三组类型、子树与空值规则",
        "本节纯函数核对边界"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，扫过上方四张基础素材卡；不切窗口】\n\n除了键换序和完全相同的零差异输入，TASK-01 还要覆盖嵌套对象的增删改与变化祖先标记，以及数组按索引逐项对齐——中间插入元素后，后面的下标按错位记为 changed，不做元素移动配对。",
        "【操作提示｜推进第 2 步，指向第二排三张边界素材卡；不切窗口】\n\n再往下还有三类边界规则：数字 1 变成字符串 \"1\" 统一记为 changed；整棵子树新增或删除时，子节点虽然各自带状态，但差异数只在子树根部记 1 处；另外按已批准的 REQ-038，字段值为 null 等同于该路径不存在，也要用 null-equiv 素材核对。",
        "【操作提示｜推进第 3 步，指向底部任务范围边界条；讲完进入 p05】\n\n这七组素材共同构成了纯函数差异模型的验收面。至于合并图节点、双输入界面、筛选开关和超限提示，都属于后续任务。范围清楚了，该怎么把这一个任务稳稳交给 Agent？"
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
      "lead": "先在全章架构图里锁死修改边界，再明确离线核对方式与委托请求要素。",
      "html": "<div class=\"ch5-arch\" data-reveal=\"0\"><div class=\"ch5-arch-chain\"><div class=\"ch5-arch-node is-active\" data-role=\"us\"><div><div class=\"ch5-arch-top\"><span><code>packages/jsoncrack-react/src/diff/</code></span><span class=\"ch5-arch-badge\">本节实现</span></div><h3>5.1 差异模型</h3></div><p>按路径对齐两侧，算状态、计数与祖先标记</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>NodeData / EdgeData + 可选入口</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.2 合并图映射</h3></div><p>保留 removed 与必要祖先，赋予状态符号</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>apps/www DiffView + 独立状态</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.3 双输入与错误</h3></div><p>接入 Before / After，出错保留上次结果</p></div><div class=\"ch5-arch-node is-todo\" data-role=\"ctx\"><div><div class=\"ch5-arch-top\"><span><code>只看变化 + 无外链超限 + 全量走查</code></span><span class=\"ch5-arch-badge\">后续任务</span></div><h3>5.4 摘要 · 筛选 · 验收</h3></div><p>补齐摘要与筛选，走完 AC-001~021 与回归</p></div></div><div class=\"ch5-arch-guard\"><b>隔离保护（全章不动）：</b><span><code>parser.ts</code> 顺序节点 id</span> · <span><code>useJson</code> 单输入状态链路</span> · <span><code>NotSupported</code> 原超限组件</span> · <span><code>apps/vscode</code> 插件端</span></div></div><div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">离线验证（不引测试框架）</h3><span class=\"p-tag\" data-role=\"ctx\">怎么验</span></div><p style=\"font-size:19px\">工作区外一次性脚本跑齐 <b>7 组固定素材</b>对照手算期望，再跑 <code>pnpm --filter jsoncrack-react run lint</code></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">请求要素与未决收敛</h3><span class=\"p-tag\" data-role=\"agent\">怎么派</span></div><p style=\"font-size:19px\">带齐 <code>TASK-01</code>、关联规则与全局非目标；<code>null</code> 按 <code>REQ-038</code> 等同缺失，其余未决细则收敛进单一值比较函数</p><div style=\"margin-top:8px\"><details class=\"p-pop\"><summary>查看请求要素参考</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>TASK-01 委托请求要素参考（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">请阅读 <code>TASK-01</code> 及关联的已批准 Spec、Acceptance、<code>docs/specs/fixtures/</code> 固定素材与全局非目标，只完成差异模型任务</p><p style=\"margin:0 0 8px\">允许范围：新增 <code>packages/jsoncrack-react/src/diff/</code> 并更新共享包导出；不改共享组件、渲染、网页版与 <code>parser.ts</code>。按路径对齐两侧；<code>null</code> 与字段缺失按 <code>REQ-038</code> 同等处理，<code>1</code> 与 <code>1.0</code> 等未决细则收敛到可替换函数</p><p style=\"margin:0\">用留在工作区外的一次性脚本跑齐 <code>key-order</code>、<code>identical</code>、<code>nested</code>、<code>array-index</code>、<code>type-change</code>、<code>subtree</code>、<code>null-equiv</code> 七组已核算期望（不调用待测逻辑自产期望），并运行 <code>pnpm --filter jsoncrack-react run lint</code></p></div></details></div></div></div>",
      "steps": [
        "锁死架构修改边界",
        "工作区外脚本与 lint 验证",
        "委托要素与请求参考"
      ],
      "script": [
        "【操作提示｜停留课件 p05 第 1 步，指向全章架构图里的 5.1 高亮模块与底部隔离带；不切窗口】\n\n从规格提交切出本地功能分支后，先看清这次改动在工程里的位置：我们只在共享包新增独立的 diff 目录并补充导出，底下列出的 parser.ts、单输入状态和插件端一行都不碰。",
        "【操作提示｜推进第 2 步，指向左下角离线验证卡片；不切窗口】\n\n因为原仓库没有内置单元测试框架，这一章统一采用轻量离线核对：写一份留在工作区外、不入库的一次性脚本，把模型跑在刚才那七组固定素材上比对期望，再跑通共享包的 lint 检查。",
        "【操作提示｜推进第 3 步，指向右下角委托要素与请求参考弹窗；讲完进入 p06】\n\n发给 Codex 的请求要把当前任务、关联 Spec 与 Acceptance、固定素材和全局非目标一起带齐。null 与字段缺失按已批准的等价规则实现，其余像 1 和 1.0 这类未决细则收敛到一个可替换的值比较函数里，不在本节擅自拍板。这段任务级工作方式只在这一节立一次，后面各节直接沿用。"
      ],
      "teaching": [
        {
          "title": "工作方式只立一次",
          "text": "5.1 用这一页把“定范围 → 委托 → 独立期望核对 → 查 diff”立住，5.2–5.4 直接沿用，不再重复讲流程定义。"
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时在教学副本核对分支起点并发出 TASK-01 请求</div>",
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">实操页占位：正式录制时展示 git status、diff 范围与七组素材核对输出</div>",
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
      "lead": "相同输入和对象键换序都通过了，先对照完整期望表判断还差什么。",
      "html": "<div class=\"ch5-table\"><div class=\"is-head\"><span>固定素材</span><span>当前状态</span><span>独立核算期望（不能由待测逻辑生成）</span></div><div data-reveal=\"0\"><span><code>fixtures/key-order</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"ok\">已抽查 ✓</em></span><span>差异数 0，全部 unchanged，无下层变化标记</span></div><div data-reveal=\"0\"><span><code>fixtures/identical</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"ok\">已抽查 ✓</em></span><span>差异数 0，无任何标记</span></div><div data-reveal=\"1\"><span><code>fixtures/nested</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>差异数 3（age 改 · active 删 · role 增）；/ 与 /user 标下层有变化但不计处</span></div><div data-reveal=\"1\"><span><code>fixtures/array-index</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>[10,20] → [5,10,20] 差异数 3（下标 0、1 改，下标 2 增），不做移动配对</span></div><div data-reveal=\"1\"><span><code>fixtures/type-change</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>/v 由 1 变为 \"1\" 记 changed，差异数 1</span></div><div data-reveal=\"1\"><span><code>fixtures/subtree</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>差异数 2（只在 /gone 与 /extra 根计处，子节点带状态不单计）</span></div><div data-reveal=\"1\"><span><code>fixtures/null-equiv</code></span><span><em style=\"font-style:normal\" class=\"p-chip\" data-role=\"gate\">仍须核对</em></span><span>{\"a\":null} 与 {} 差异数 0；{\"a\":1} 变 {\"a\":null} 记 /a removed、差异数 1</span></div></div><div class=\"p-bar\" data-reveal=\"2\">还不算完成：<b>7 组期望全部对上</b>、<code>lint</code> 通过，且 <code>git diff</code> 只落在允许范围内，才能标记任务完成</div>",
      "steps": [
        "已抽查的两组零差异案例",
        "其余五组必查规则",
        "回看 diff 边界才算完成"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，指向表格前两行“已抽查”；停顿两秒让学员思考】\n\n假设现在相同输入和对象键换序两组案例都已经跑通了，能不能就此宣布差异模型任务已经完成？",
        "【操作提示｜推进第 2 步，指向下方五组“仍须核对”的素材期望；不切窗口】\n\n对照完整期望表就能看出来：前两组只验证了零差异路径。嵌套增删改及祖先不计处、数组按索引错位、类型变化、整棵子树只在根计处，以及 null 与字段缺失等价，这五组规则一个都不能少，而且期望值必须来自人工核算，绝不能调用待测代码自己生成。",
        "【操作提示｜推进第 3 步，指向底部完成边界结论条；讲完进入 p09】\n\n只有七组固定素材全部对上，共享包 lint 通过，并且回看 git diff 确认改动严格落在允许目录内、工作区没有遗留临时脚本，才有依据标记 TASK-01 完成。"
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
      "lead": "跑完一次性脚本后，如果某组输出和手算期望对不上，先自己判断该怎么处理。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再看参考结论</span><div class=\"ch5-quiz-grid\"><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">1</span><p class=\"ch5-qcard-say\">把脚本里的预期改成当前实现跑出来的结果，让检查先通过</p></div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 做法不对</span><div class=\"ch5-qcard-ans\" data-role=\"gate\" data-reveal=\"1\">不对。期望来自已批准的规则与人工核算，改期望迁就实现会让检查彻底失效</div></div><div class=\"ch5-qcard\"><div class=\"ch5-qcard-head\"><span class=\"ch5-qcard-num\">2</span><p class=\"ch5-qcard-say\">先核对固定输入、手算期望与 Spec，再排查模型实现或脚本哪里写偏了</p></div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 做法正确</span><div class=\"ch5-qcard-ans\" data-role=\"ok\" data-reveal=\"2\">对。先确认判断基准无误，再定位代码或脚本偏离，绝不拿错误逻辑自证正确</div></div></div>",
      "steps": [
        "暂停比较两种做法",
        "做法一为什么错",
        "做法二为什么对"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向暂停提示与左右两张做法卡；停顿三秒】\n\n跑脚本核对时，如果发现某组输出和手算期望不一致，这里有两种处理做法。请先暂停判断一下，哪一种才对？",
        "【操作提示｜推进第 2 步，指向左侧卡片盖章与解析；不切窗口】\n\n做法一是把脚本里的预期改成当前代码跑出来的结果，让检查先绿。这相当于拿实现去篡改规格，检查立刻失去意义。",
        "【操作提示｜推进第 3 步，指向右侧卡片盖章与解析；讲完进入 p10】\n\n做法二是先核对固定输入、手算期望与已批准的 Spec，确认基准无误后，再排查模型实现或核对脚本哪里写偏了。守住独立期望，检查才真能拦住问题。"
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
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本节核心判断</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>跑通两个例子<br>不等于任务完成<br>全量期望 + diff 边界都要过</p></div></div><div data-reveal=\"1\"><h3>本节留下</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span>通过七组素材验证的差异模型</span></li><li class=\"is-pass\"><span>工作区外的一次性核对脚本与结果</span></li><li class=\"is-pass\"><span><code>CH05_IMPLEMENTATION.md</code> 初稿</span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节 5.2</h3><div class=\"p-box\" data-role=\"us\"><h3>合并图映射</h3><p>拿着已验证的模型，解决被删除的字段怎样画到结果图上</p></div></div></div>",
      "steps": [
        "核心判断",
        "本节留下的成果",
        "进入 5.2 合并图"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向左侧重点贴纸；不切窗口】\n\n收束一下 5.1：一两个样例跑通不代表任务完成，必须跑齐关联案例并守住允许修改的文件边界。",
        "【操作提示｜推进第 2 步，指向中间“本节留下”清单；不切窗口】\n\n完成本节后，分支上留下通过七组素材核对的纯函数差异模型、工作区外的一次性核对脚本，以及记录了任务依据与检查结果的 CH05_IMPLEMENTATION.md 初稿。",
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

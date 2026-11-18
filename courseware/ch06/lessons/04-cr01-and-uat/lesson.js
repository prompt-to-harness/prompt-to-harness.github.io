window.lesson = {
  "title": "用已验收的流程，怎样把 CR-01 做完并让人认可",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.04",
  "summary": "先讲清失败测试先行与两条现场分流检查点，再按已验收流程做最小串行修改与回归，最后走一遍五步恢复路径人工 UAT；收口于「测试全绿不等于用户已经认可」。",
  "prep": [
    "承接 6.3 已核验通过的 .planning/ 工作流与 docs/specs/；实操前先核对第 5 章交接提交是否已包含等价提示，按事实选择检查点 A（补提示）或检查点 B（受控变异）。",
    "自动检查优先使用 Node.js 24+ 内置 node:test 与仓库既有检查，不修改 JSON Crack 依赖锁文件；UAT 在真实浏览器按五步连续路径与 360×800 屏幕尺寸核验。",
    "p34、p35、p37 为实操占位页，完成第 5 章交接与本章实跑后再填入真实日志、git diff 输出与界面截图。"
  ],
  "scenes": [
    {
      "id": "p32",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "用已验收的流程，怎样把 CR-01 做完并让人认可",
      "title": "用已验收的流程，怎样把 CR-01 做完并让人认可？",
      "lead": "6.3 已经核验了指向 CR-01 的工作流与避坑；本节按流程走完失败测试先行、最小修改与真人 UAT",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>6.1</b>定位 SDD 与 GSD</li><li class=\"is-done\"><b>6.2</b>构建工作流</li><li class=\"is-done\"><b>6.3</b>验收流程</li><li class=\"is-now\"><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-flow\" style=\"--n:3;column-gap:38px;margin-top:18px\" data-reveal=\"1\"><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">6.3 已放行</span><h3>已验收的工作流</h3><p>规格依据、验证去向与停止条件已齐</p></div><div class=\"p-node\" data-role=\"agent\"><span class=\"p-num\">前半程 · 实施</span><h3>先见红再最小修改</h3><p>内置 <code>node:test</code> 跑通四案例与回归</p></div><div class=\"p-node\" data-role=\"us\"><span class=\"p-num\">后半程 · 验收</span><h3>真人走查恢复路径</h3><p>亲眼确认提示、错误侧与空状态</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">本节主线：开场不直接改产品源码，先让测试因正确原因失败，最后由人实际操作收口</div>",
      "steps": [
        "本章位置",
        "从已验流程到实施与 UAT",
        "本节主线"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指向章节地图上的 6.4；不切窗口】\n\n上一节我们把指向 CR-01 的工作流逐项过了一遍人工关，也立住了排障避坑。地图走到 6.4，这一节终于要把变更真正落进代码，再由人亲自验收。",
        "【操作提示｜推进第 2 步，指向三段主线流程；不切窗口】\n\n6.3 已经发出了施工通行证，本节不再回头讨论要不要建流，也不重讲避坑定义。前半程按流程跑完失败测试先行与最小串行修改，后半程切回浏览器走一遍人工 UAT。",
        "【操作提示｜推进第 3 步，指向底部主线问题；讲完进入 p33】\n\n用已验收的流程，怎样把 CR-01 做完并让人认可？记住开场第一条纪律：先别直接动手改产品代码，先看测试能不能因正确原因失败。"
      ],
      "teaching": [],
      "source": "index.html#p32",
      "seconds": 90
    },
    {
      "id": "p33",
      "segment": "失败测试先行",
      "label": "为什么要先看到测试失败，再去改提示",
      "title": "为什么要先看到测试失败，再去改提示？",
      "lead": "先写针对可见提示的断言，按第 5 章现场事实分流到标准补提示或受控变异检查点；绝不先改实现再补必过测试，也不靠跳测或吞异常制造假绿。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:318px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 336\" width=\"1118\" height=\"336\"><defs><marker id=\"rd-arrow-cr01-red-green-branches\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"52\" width=\"226\" height=\"224\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"24\" y=\"88\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"22\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">先写可见行为断言</text></g><g data-reveal=\"0\"><text x=\"24\" y=\"120\" style=\"font-family:'Course Mono',monospace\" font-size=\"16.5\" font-weight=\"700\" fill=\"#0B6B5F\" text-anchor=\"start\">node:test / 交互检查</text></g><g data-reveal=\"0\"><text x=\"24\" y=\"152\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">锚定旧图保留与可见提示</text></g><g data-reveal=\"0\"><text x=\"24\" y=\"178\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">不绑 store 私有字段</text></g><g data-reveal=\"0\"><rect x=\"24\" y=\"202\" width=\"194\" height=\"52\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"121\" y=\"234\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"700\" fill=\"#6E6043\" text-anchor=\"middle\">按第 5 章现场事实分流</text></g><g data-reveal=\"0\"><path d=\"M238 122L272 92\" stroke=\"#D9481C\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"0\"><rect x=\"276\" y=\"12\" width=\"558\" height=\"144\" rx=\"10\" fill=\"none\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"294\" y=\"39\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"start\">检查点 A：现场缺提示 → 标准失败测试先行</text></g><g data-reveal=\"0\"><rect x=\"294\" y=\"54\" width=\"162\" height=\"84\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"375\" y=\"84\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">1. 先见红</text></g><g data-reveal=\"0\"><text x=\"375\" y=\"112\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">因缺提示而失败</text></g><g data-reveal=\"0\"><path d=\"M460 96L486 96\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"0\"><rect x=\"490\" y=\"54\" width=\"162\" height=\"84\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"571\" y=\"84\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#2A2380\" text-anchor=\"middle\">2. 最小修改</text></g><g data-reveal=\"0\"><text x=\"571\" y=\"112\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">串行补状态与文案</text></g><g data-reveal=\"0\"><path d=\"M656 96L682 96\" stroke=\"#15803D\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"0\"><rect x=\"686\" y=\"54\" width=\"132\" height=\"84\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"752\" y=\"84\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"middle\">3. 变绿</text></g><g data-reveal=\"0\"><text x=\"752\" y=\"112\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"middle\">同断言通过</text></g><g data-reveal=\"1\"><path d=\"M238 208L272 238\" stroke=\"#6E6043\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"1\"><rect x=\"276\" y=\"174\" width=\"558\" height=\"148\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"294\" y=\"202\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#6E6043\" text-anchor=\"start\">检查点 B：第 5 章已有提示 → 受控变异（不装旧缺陷）</text></g><g data-reveal=\"1\"><rect x=\"294\" y=\"218\" width=\"162\" height=\"86\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"375\" y=\"248\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"19\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"middle\">1. 纳入契约</text></g><g data-reveal=\"1\"><text x=\"375\" y=\"276\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">如实记行为已有</text></g><g data-reveal=\"1\"><path d=\"M460 261L486 261\" stroke=\"#D9481C\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"1\"><rect x=\"490\" y=\"218\" width=\"162\" height=\"86\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"571\" y=\"248\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"19\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">2. 受控移除</text></g><g data-reveal=\"1\"><text x=\"571\" y=\"276\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">隔离检查点见红</text></g><g data-reveal=\"1\"><path d=\"M656 261L682 261\" stroke=\"#15803D\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"1\"><rect x=\"686\" y=\"218\" width=\"132\" height=\"86\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"752\" y=\"248\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"19\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"middle\">3. 恢复原码</text></g><g data-reveal=\"1\"><text x=\"752\" y=\"276\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"middle\">证断言真有效</text></g><g data-reveal=\"2\"><path d=\"M838 96L868 126\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"2\"><path d=\"M838 250L868 212\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-cr01-red-green-branches)\"/></g><g data-reveal=\"2\"><rect x=\"872\" y=\"16\" width=\"238\" height=\"304\" rx=\"10\" fill=\"#E8EAEE\" stroke=\"#243042\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"890\" y=\"50\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"23\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">我们把守三件事</text></g><g data-reveal=\"2\"><rect x=\"888\" y=\"66\" width=\"206\" height=\"64\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"902\" y=\"92\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">断言独立于实现</text></g><g data-reveal=\"2\"><text x=\"902\" y=\"116\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">失败确因规则差距</text></g><g data-reveal=\"2\"><rect x=\"888\" y=\"140\" width=\"206\" height=\"64\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"902\" y=\"166\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">修复范围不越界</text></g><g data-reveal=\"2\"><text x=\"902\" y=\"190\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">不动算法统计与筛选</text></g><g data-reveal=\"2\"><rect x=\"888\" y=\"214\" width=\"206\" height=\"88\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"902\" y=\"241\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"start\">拒绝人造假绿</text></g><g data-reveal=\"2\"><text x=\"902\" y=\"265\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"start\">不跳测 · 不改期望</text></g><g data-reveal=\"2\"><text x=\"902\" y=\"287\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"start\">不吞异常凑通过</text></g></svg><p class=\"source-note\">课程自绘：CR-01 失败测试先行与两条现场检查点（不预选分支，按第 5 章交接事实选择）</p></div>",
      "steps": [
        "检查点 A：现场缺提示时先红后绿",
        "检查点 B：行为已有时做受控变异",
        "人工把守三件事：独立、不越界、无假绿"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，指向左侧断言框与上排检查点 A；不切窗口】\n\n动手前先把针对可见行为的断言写出来，用内置的 node:test 或交互检查盯住旧图保留和可见提示，不绑私有字段。如果第 5 章交接过来的版本还没有这条提示，就走上排检查点 A：先看见断言因缺少提示而报红，再串行做最小状态与文案修改，让同一条断言变绿。",
        "【操作提示｜推进第 2 步，指向下排检查点 B；不切窗口】\n\n万一第 5 章跑出来的结果恰好已经带有等价提示呢？那也不能把原代码故意改坏、伪装成一直就有的缺陷。这时走下排检查点 B：如实记录「行为已有、现纳入正式契约」，补齐断言后，在隔离的本地检查点受控移除提示，确认断言真的会报红，再恢复原实现。现场走 A 还是走 B，等实跑时完全按事实分流。",
        "【操作提示｜推进第 3 步，指向右侧“我们把守三件事”与底部参考链接；讲完进入 p34】\n\n不管走哪条分支，人都要把守右边这三件事：断言独立于实现且失败确因规则差距；修复范围不越界，不动差异算法、统计和筛选；严禁靠跳过测试、改期望或吞异常制造假绿。接下来切到现场核对失败测试。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "框架参考",
          "text": "GSD Core 固定提交：仓库与阶段执行说明",
          "url": "https://github.com/open-gsd/gsd-core/tree/b5b9814f033b6d32810562fd4068e1f107da29ec"
        }
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 90
    },
    {
      "id": "p34",
      "segment": "失败测试先行",
      "label": "失败测试有没有因正确原因失败",
      "title": "失败测试有没有因正确原因失败？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待第 5 章交接与备课实跑后补齐：现场核对走检查点 A 或 B，观察失败是否确因缺少约定提示，不预选分支、不预写日志</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步】\n\n本页为实操占位，待第 5 章交接与备课实跑后补齐；现场核对走检查点 A 或 B，观察失败是否确因缺少约定提示。"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 30
    },
    {
      "id": "p35",
      "segment": "最小实现与回归",
      "label": "最小实现和回归，怎样才算没有越界",
      "title": "最小实现和回归，怎样才算没有越界？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后补齐：核对 git diff 输出是否只围绕提示状态与文案，跑通四个案例与原路径回归，不预写通过结果或文件名单</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步】\n\n本页为实操占位，待备课实跑后补齐；核对 git diff 输出是否只围绕提示状态与文案，并跑通四个案例与原路径回归。"
      ],
      "teaching": [],
      "source": "index.html#p35",
      "seconds": 30
    },
    {
      "id": "p36",
      "segment": "人工验收",
      "label": "自动检查都绿了以后，人还要看什么",
      "title": "自动检查都绿了以后，人还要看什么？",
      "lead": "自动检查可以汇总 lint、类型检查、node:test、构建与浏览器回归，但不能代替人在真实界面上的恢复路径操作，框架完成状态也不是发布批准。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:336px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 336\" width=\"1118\" height=\"336\"><defs><marker id=\"rd-arrow-uat-recovery-chain\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"10\" width=\"1102\" height=\"68\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"28\" y=\"38\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#6E6043\" text-anchor=\"start\">自动检查汇总：lint · typecheck · node:test · build · 浏览器回归</text></g><g data-reveal=\"0\"><text x=\"28\" y=\"63\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">能证明：约定命令全部跑过    |    不能代替：人在真实界面上的恢复路径操作与发布批准</text></g><g data-reveal=\"1\"><rect x=\"8\" y=\"92\" width=\"1102\" height=\"138\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"26\" y=\"120\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"19\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">人工 UAT 连续五步路径（按自己亲眼所见作答，不复述框架完成文案）</text></g><g data-reveal=\"1\"><rect x=\"24\" y=\"134\" width=\"186\" height=\"82\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"117\" y=\"165\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"middle\">1. 有效比较</text></g><g data-reveal=\"1\"><text x=\"117\" y=\"195\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">出新图 · 无提示</text></g><g data-reveal=\"1\"><path d=\"M214 175L238 175\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-uat-recovery-chain)\"/></g><g data-reveal=\"1\"><rect x=\"242\" y=\"134\" width=\"186\" height=\"82\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"335\" y=\"165\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">2. After 改 {</text></g><g data-reveal=\"1\"><text x=\"335\" y=\"195\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">留旧图 · 提示亮</text></g><g data-reveal=\"1\"><path d=\"M432 175L456 175\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-uat-recovery-chain)\"/></g><g data-reveal=\"1\"><rect x=\"460\" y=\"134\" width=\"186\" height=\"82\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"553\" y=\"165\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">3. Before 也改 {</text></g><g data-reveal=\"1\"><text x=\"553\" y=\"195\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">双侧错 · 提示在</text></g><g data-reveal=\"1\"><path d=\"M650 175L674 175\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-uat-recovery-chain)\"/></g><g data-reveal=\"1\"><rect x=\"678\" y=\"134\" width=\"186\" height=\"82\" rx=\"10\" fill=\"#FAD7C8\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"771\" y=\"165\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">4. 仅恢复 After</text></g><g data-reveal=\"1\"><text x=\"771\" y=\"195\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">提示不消失！</text></g><g data-reveal=\"1\"><path d=\"M868 175L892 175\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-uat-recovery-chain)\"/></g><g data-reveal=\"1\"><rect x=\"896\" y=\"134\" width=\"186\" height=\"82\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"989\" y=\"165\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"middle\">5. 恢复 Before</text></g><g data-reveal=\"1\"><text x=\"989\" y=\"195\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">提示收 · 0 差异</text></g><g data-reveal=\"2\"><rect x=\"8\" y=\"244\" width=\"514\" height=\"80\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"26\" y=\"273\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"start\">单独必查空状态：从未成功比较就非法</text></g><g data-reveal=\"2\"><text x=\"26\" y=\"303\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">只显示当前输入错误，绝不谎称存在「上次有效结果」</text></g><g data-reveal=\"2\"><rect x=\"540\" y=\"244\" width=\"570\" height=\"80\" rx=\"10\" fill=\"#E8EAEE\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"558\" y=\"273\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"18.5\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">计划留给人工的现场观察项</text></g><g data-reveal=\"2\"><text x=\"558\" y=\"303\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">提示可读与位置 · 键盘操作 · 360px 窄屏 · 控制台与网络</text></g></svg><p class=\"source-note\">课程自绘：自动检查边界、五步连续恢复路径与空状态人工观察单</p></div>",
      "steps": [
        "自动检查能证明与不能代替的边界",
        "人工必走的五步连续恢复路径",
        "单独必查空状态与现场观察项"
      ],
      "script": [
        "【操作提示｜停留课件 p36 第 1 步，指向顶部自动检查汇总框；不切窗口】\n\n当最小修改做完，lint、类型检查、node:test、构建和浏览器回归都能汇总出一排绿字。这些自动检查很有价值，但它们只证明写进脚本的检查跑过了，代替不了人在真实界面上的操作，框架标出的完成状态更不是发布批准。",
        "【操作提示｜推进第 2 步，指向中排五步连续恢复路径；不切窗口】\n\n做对话式 UAT 时，至少要亲手走完中间这条连续五步路径：先做一次有效比较拿到新图；把 After 改成非法左花括号，看旧图保留且提示亮起；再把 Before 也改坏，确认双侧标错且提示还在；接着只恢复 After，盯紧提示绝不能提前消失；最后恢复 Before，确认提示收起、回到 0 差异。",
        "【操作提示｜推进第 3 步，指向下排左右两个观察框；讲完进入 p37】\n\n左下角还要单独看一眼「从未成功比较过就直接非法」的空状态：这时只能报当前输入错，绝不能谎称存在上次有效结果。右下角那些提示好不好找、键盘能不能操作、360×800 屏幕尺寸下挤不挤、控制台和网络干不干净，全都按自己亲眼看到的作答，不复述框架的完成说明。接下来切到界面实操。"
      ],
      "teaching": [],
      "source": "index.html#p36",
      "seconds": 90
    },
    {
      "id": "p37",
      "segment": "人工验收",
      "label": "人在界面上实际看到了什么",
      "title": "人在界面上实际看到了什么？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后补齐：沿五步恢复路径与首次非法空状态实际操作，如实记录亲眼所见，不未操作就答通过</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p37 第 1 步】\n\n本页为实操占位，待备课实跑后补齐；按五步恢复路径与首次非法空状态实际操作，记录界面观察结果。"
      ],
      "teaching": [],
      "source": "index.html#p37",
      "seconds": 30
    },
    {
      "id": "p38",
      "segment": "判断与自检",
      "label": "组件测试已经全绿，是不是就可以宣布用户已经认可",
      "title": "测试全绿了，能宣布用户已经认可吗？",
      "lead": "组件与状态测试已经全绿，是不是就可以宣布用户已经认可这条提示？请先判断，再拆开已证明与未证明的两面。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"gap:32px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\" style=\"padding:14px 18px\"><span class=\"p-tag\" data-role=\"ok\" style=\"margin-bottom:6px\">自动测试汇总示意</span><q style=\"font-size:24px;margin-top:6px;color:#11652F\">node:test · 4 cases PASS ✓<br><em>0 failed · exit code 0</em></q><p style=\"margin-top:10px;font-size:18.5px;color:var(--p-ink)\">学员判断：看到全绿，能直接宣布用户已经认可吗？</p></div><ul class=\"p-checks\"><li data-reveal=\"1\"><div><b>已经证明：约定的检查过了</b><small>失败断言曾因规则差距报红，修改后通过且原路径无明显回归</small></div></li><li class=\"is-no\" data-reveal=\"1\"><div><b>还没证明：提示一眼找得到、读得懂</b><small>字号、摆放位置与错误侧归属是否清楚，脚本不会替用户判断</small></div></li><li class=\"is-no\" data-reveal=\"1\"><div><b>还没证明：双错恢复过程不让人困惑</b><small>仅修好一侧时界面是否让人误判已全好，必须由人亲手走过</small></div></li></ul></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px;padding:8px 20px;font-size:21px\"><b>不可以</b>：测试全绿，只证明约定的检查过了，<b>不等于用户已经认可</b></div>",
      "steps": [
        "先做判断：全绿能代表用户认可吗",
        "拆开已证明与未证明的两面",
        "带走这句话：全绿不等于用户认可"
      ],
      "script": [
        "【操作提示｜停留课件 p38 第 1 步，指向左侧终端全绿输出；停顿数秒；不切窗口】\n\n现在来做本节的核心判断：终端里组件与状态测试已经全部变绿、退出码也是 0，是不是就可以直接宣布用户已经认可这条提示了？先自己想两秒。",
        "【操作提示｜推进第 2 步，指向右侧已证明与未证明清单；不切窗口】\n\n拆开看就清楚了。全绿确实证明了约定的检查跑过了：失败断言曾经报红、修改后通过，原路径也没有回归。但它证明不了提示摆在界面哪里最顺眼、文案读起来明不明白，更证明不了双侧报错只修好一侧时用户会不会误判。",
        "【操作提示｜推进第 3 步，指向底部深色结论条；讲完进入 p38a】\n\n所以答案是不可以。这正是本章要带走的那句话：测试全绿，只证明约定的检查过了，不等于用户已经认可。这句话在 6.4 收口，不再留给下一节。"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    },
    {
      "id": "p38a",
      "segment": "判断与自检",
      "layout": "evidence-scene",
      "label": "为什么自动测试兜不住全部体验",
      "title": "为什么自动测试兜不住全部体验？",
      "lead": "对照 Martin Fowler 的「测试细网」隐喻与 Dijkstra 的经典论断：脚本测试只能检验写进脚本的已知条件，网眼之外的真实体验必须靠人去探。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:332px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>martinfowler.com · Martin Fowler · Exploratory Testing (2019-11-18)</div><a href=\"external/fowler-testing-net.png\"><img src=\"external/fowler-testing-net.png\" alt=\"Martin Fowler 文章 Exploratory Testing 中关于脚本化自动测试细网局限性的正文与配图截图\"></a></div><p class=\"p-shot-note\" style=\"font-size:19px\" data-reveal=\"1\">细网只抓得住写进脚本的已知条件；提示好不好懂、恢复顺不顺手，必须靠真人验收</p></div>",
      "steps": [
        "看 Fowler 的「测试细网」边界图",
        "网外体验必须由人亲自走查"
      ],
      "script": [
        "【操作提示｜停留课件 p38a 第 1 步，指向 Fowler 文章截图与细网配图；可点开图片放大】\n\n为什么全绿永远不等于用户认可？早在 1970 年 Dijkstra 就提醒过，测试能证明缺陷存在，却证明不了缺陷不存在。Martin Fowler 在这篇讨论探索性测试的文章里画了一张很直观的「细网」图：哪怕再扎实的自动测试套件，也只能验证写进脚本的已知条件。",
        "【操作提示｜推进第 2 步，指向图下批注与底部原文链接；讲完进入 p39】\n\n脚本编织的细网能拦住已知回归，却没法自己回答「这张网是不是盖住了所有真实情况」。网眼之外那些视觉可读性、恢复顺手程度和意外交互，只能靠人走出脚本去亲自试出来。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "经典视角",
          "text": "Martin Fowler：Exploratory Testing",
          "url": "https://martinfowler.com/bliki/ExploratoryTesting.html#:~:text=Scripted%20testing%20can%20only%20verify%20what%20is%20in%20the%20script"
        }
      ],
      "teaching": [],
      "source": "index.html#p38a",
      "seconds": 60
    },
    {
      "id": "p39",
      "segment": "判断与自检",
      "label": "测试失败让人不舒服时，这两种做法哪样对",
      "title": "测试报红碍眼时，这两种做法哪样对？",
      "lead": "测试失败让人不舒服时最容易手滑走捷径；请先暂停比较下面两种做法，再看盖章结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先比较两种做法，自己选定再往下看</span><div class=\"p-quiz\" style=\"margin-top:12px\"><div class=\"p-q\" data-role=\"gate\"><div class=\"p-say\">做法 A：顺手改掉断言期望，或者先跳过这条失败测试，让终端面板先变绿</div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 人造假绿</span><div style=\"margin-top:8px;font-size:19px;color:#A8350F\" data-reveal=\"1\">靠改期望、跳测或吞异常拿到的绿色只是拔掉了警报，规则差距还在原地</div></div><div class=\"p-q\" data-role=\"ok\"><div class=\"p-say\">做法 B：先核对失败是否确因已定规格差距引起，再做最小串行修改让同一断言通过</div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 真实变绿</span><div style=\"margin-top:8px;font-size:19px;color:#11652F\" data-reveal=\"2\">绿色必须来自正确原因；断言先见证差距，再见证最小修复</div></div></div><p class=\"source-note\">教学对照，不是某一次实际失败记录</p>",
      "steps": [
        "暂停比较两种做法",
        "做法 A：人造假绿",
        "做法 B：真实变绿"
      ],
      "script": [
        "【操作提示｜停留课件 p39 第 1 步，指向暂停徽章与两张做法卡；停顿数秒；不切窗口】\n\n进入小结前做一次暂停自检。面对一条刺眼的失败测试，下面 A、B 两种做法哪样对？先自己选定，再往下看。",
        "【操作提示｜推进第 2 步，揭示做法 A 红色印章；不切窗口】\n\n做法 A 顺手改掉期望值，或者把这条测试跳过，让面板先变绿。这属于人造假绿：警报器被拔掉了，规则差距还原封不动留在产品里。",
        "【操作提示｜推进第 3 步，揭示做法 B 绿色印章；讲完进入 p40】\n\n做法 B 先核对失败是不是来自已批准规格的真实差距，确认原因对了，再做最小修改让它变绿。只有来自正确原因的绿色才算数。"
      ],
      "teaching": [],
      "source": "index.html#p39",
      "seconds": 90
    },
    {
      "id": "p40",
      "segment": "小结",
      "label": "带着什么进入 6.5",
      "title": "带着什么进入 6.5？",
      "lead": "第 4–6 章的 JSON Diff 项目交付在本节正式收官；第 7 章从独立仓库冷启动，6.5 改为分享 ChatGPT 应用技巧。",
      "html": "<div class=\"p-sketch\"><div class=\"p-ribbon\" data-reveal=\"0\">6.4 小结 · 全绿只证约定检查已过，用户认可要靠真人走查</div><div data-reveal=\"0\"><h3 style=\"text-align:center\">本章带走的那句话</h3><div class=\"p-star\" style=\"width:228px;font-size:21px\">测试全绿<br>只证明约定的检查过了<br>不等于用户已经认可</div></div><div data-reveal=\"1\"><h3>项目收官交付</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\" style=\"font-size:21px\">完成 CR-01 的最小串行修改</li><li class=\"is-pass\" style=\"font-size:21px\">失败与通过记录 + 真人 UAT</li><li class=\"is-pass\" style=\"font-size:21px\">可追溯计划与最终交付说明</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.5 应用招数</h3><p>改为分享 ChatGPT 应用技巧，不再复用测试记录做判断；第 7 章不带走本工作区</p></div></div></div>",
      "steps": [
        "本章带走的那句话",
        "项目收官交付",
        "下一节 6.5"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步，指向顶部缎带与星形核心判断；不切窗口】\n\n我们把 6.4 收住。这一节最核心的判断就是中间这颗星：测试全绿，只证明约定的检查过了，不等于用户已经认可。",
        "【操作提示｜推进第 2 步，指向中间交付清单；不切窗口】\n\n到这里，第 4 到第 6 章的 JSON Crack JSON Diff 主线项目就全部收官了：留下完成 CR-01 的最小修改、失败与通过记录、真人操作过的 UAT，以及可追溯的计划与交付说明。第 7 章会从另一个独立仓库冷启动，不带走这里的 `.planning/` 工作区。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\n下一节 6.5 不再做另一轮验收，也不再拿这些测试记录做判断，而是轻松看一组网页、桌面和手机端 ChatGPT 应用里的实用招数。"
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
      "label": "失败测试先行",
      "seconds": 120
    },
    {
      "label": "最小实现与回归",
      "seconds": 30
    },
    {
      "label": "人工验收",
      "seconds": 120
    },
    {
      "label": "判断与自检",
      "seconds": 240
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};

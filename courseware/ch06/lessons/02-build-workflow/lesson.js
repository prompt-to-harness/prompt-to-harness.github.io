window.lesson = {
  "title": "怎样在当前仓库把 GSD 工作流建起来",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.02",
  "summary": "先说清 CR-01 改什么、不改什么及四个验收案例，再核对接手检查点，采用零新增依赖方案把已有规格接进工作流；本节不改生产代码。",
  "prep": [
    "在已完成 6.1 onboard 与 mapper 摸底的 JSON Crack 课程副本上继续；确认 git diff 对生产源码仍为空。",
    "提前打开 docs/specs/SPEC.md 与 docs/specs/ACCEPTANCE.md，便于演示追加 REQ-CR01 与四个 AC-CR01-* 案例。",
    "确认 node --test 在当前 Node.js 24+ 环境下可直接运行，本节只写入验证去向与计划，不提前修改生产实现。"
  ],
  "scenes": [
    {
      "id": "p11",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "怎样在当前仓库把 GSD 工作流建起来",
      "title": "怎样在当前仓库把 GSD 工作流建起来？",
      "lead": "6.1 已立住边界并完成只读摸底；这一节先明确靶子 CR-01，再把已有规格接进工作流，不改生产代码",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>6.1</b>定位 SDD 与 GSD</li><li class=\"is-now\"><b>6.2</b>构建工作流</li><li><b>6.3</b>验收流程</li><li><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>6.1 已完成</h3><span class=\"p-tag\" data-role=\"ctx\">只读摸底</span></div><p>立住不覆盖 <code>docs/specs/</code> 的边界，留下代码库调查文档</p></div><div class=\"p-join\"><span>6.2 建流</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"tool\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>指向 CR-01 建工作流</h3><span class=\"p-tag\" data-role=\"tool\">只排计划</span></div><p>追加规则与四个案例，导入规格并确定零新增依赖验证矩阵</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">本节问题：怎样在当前仓库把 GSD 工作流建起来？先定清靶子 CR-01，再动手建流</div>",
      "steps": [
        "本章位置",
        "从摸底到建流",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，指向章节地图上的 6.2；不切窗口】\n\n上一节我们认清了 SDD 与 GSD 的边界，也做了一次只读摸底。看章节地图，这一节进入 6.2：构建工作流。",
        "【操作提示｜推进第 2 步，指向左侧 6.1 已留下的基础与右侧 6.2 要做的动作；不切窗口】\n\n6.1 留下的是角色定位、不覆盖已有文档的红线，以及 .planning/codebase/ 里的摸底文档。到了 6.2，我们要明确本章的规则变更靶子 CR-01，再把 docs/specs/ 接进 GSD 工作流——注意，这一节只建流、立计划，还不改生产代码。",
        "【操作提示｜推进第 3 步，指向下方本节问题；讲完进入 p12】\n\n怎样在当前仓库把 GSD 工作流建起来？建工作流不能空转，心里必须先有具体的靶子。所以我们先用两页把 CR-01 说透：它到底改什么、不改什么？"
      ],
      "teaching": [],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "本章目标",
      "label": "CR-01 到底改的是什么，不改什么",
      "title": "CR-01 到底改什么，不改什么？",
      "lead": "本章目标仍是 CR-01：不动底层比较算法，只在输入变非法、界面仍保留上次有效结果时，给用户补一句明确可见的提示。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;gap:18px;align-items:stretch\"><div class=\"p-page\" data-reveal=\"0\"><div class=\"p-page-bar\"><i></i><i></i><i></i>第 5 章原规则 · After 改为非法 {</div><div style=\"padding:14px 16px;display:grid;gap:10px\"><div style=\"padding:6px 10px;background:#FCE6DD;border-left:4px solid #D9481C;font-size:18px;color:#A8350F\">After 输入错误：JSON 语法无效</div><div style=\"padding:12px;border:1.5px dashed #B9B3A6;border-radius:6px;background:#F9F7F1;font-size:19px\"><b>结果图：</b>保留上次有效比较（<code>n: 1 → 2</code> · 1 处 changed）<br><span style=\"color:#5B6573;font-size:17px\">结果区静默无提示，容易误认成当前输入的新结果</span></div></div></div><div class=\"p-join\" data-reveal=\"1\"><span>CR-01</span><i class=\"p-arrow\"></i></div><div class=\"p-page\" data-reveal=\"1\"><div class=\"p-page-bar\"><i></i><i></i><i></i>CR-01 新增规则 · 明确告知旧结果</div><div style=\"padding:14px 16px;display:grid;gap:10px\"><div style=\"padding:6px 10px;background:#FCE6DD;border-left:4px solid #D9481C;font-size:18px;color:#A8350F\">After 输入错误：JSON 语法无效</div><div style=\"padding:7px 12px;background:#FFF1BF;border:2px solid #243042;border-radius:6px;font-size:18px;font-weight:700;color:#243042\">上次有效结果（当前输入无效）</div><div style=\"padding:10px 12px;border:1.5px solid #15803D;border-radius:6px;background:#E3F2E6;font-size:18px;color:#11652F\">保留原图与差异摘要；两侧恢复有效后移除提示并更新</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">非目标锁死：不改差异算法、四种状态、计数、筛选与上限；不加历史列表、自动保存或上传</div>",
      "steps": [
        "第 5 章原规则的静默区",
        "CR-01 新增可见提示",
        "非目标锁死"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左侧“第 5 章原规则”界面模拟框；不切窗口】\n\n看左边这张界面示意。第 5 章已经定下规则：当 Before 或 After 输入非法 JSON 时，标明哪一侧出错，同时保留最后一次成功的比较图。但当时并没有要求结果区域开口解释——用户看到报错的同时还看着一张完好的图，很容易误以为这张图就是刚刚算出来的新结果。",
        "【操作提示｜推进第 2 步，指向右侧“CR-01 新增规则”界面模拟框中的提示横幅；不切窗口】\n\n再看右边。CR-01 不动底层的差异算法，只补一句对用户直接可见的说明：只要当前展示的是历史结果、而任一侧输入正处于非法状态，结果区就必须挂出「上次有效结果（当前输入无效）」。等两侧都恢复合法、重新比较完成，这句提示才收起。",
        "【操作提示｜推进第 3 步，指向底部非目标结论条；讲完进入 p13】\n\n非目标也锁死：不改对象和数组比较逻辑，不改计数口径、筛选语义和节点上限，也不加历史版本列表、自动保存或网络上传。那怎样才算把这一句提示的边界全覆盖了？看四个固定验收案例。"
      ],
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "本章目标",
      "label": "怎样才算这条规则被说清楚了",
      "title": "怎样才算把这条规则说清楚了？",
      "lead": "沿用大纲里的四个固定验收案例，全部落在用户看得见的行为与提示显隐上；规格追加进原五层文档，不把新规则说成第五章的旧缺陷。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:138px minmax(0,1.08fr) minmax(0,1.25fr)\" data-reveal=\"0\"><div class=\"is-head\"><span>验收编号</span><span>输入与连续动作</span><span>用户可见期望</span></div><div><span><code>AC-CR01-1</code></span><span>比较成功后，把 After 改为 <code>{</code></span><span>保留 <code>n</code> 的 changed 与原摘要；<b>显示旧结果提示</b>与 After 错误</span></div><div><span><code>AC-CR01-2</code></span><span>把 Before 也改为 <code>{</code>，再只恢复 After</span><span>双错分别标明；仅恢复一侧后仍标 Before 错，<b>旧结果提示不消失</b></span></div><div><span><code>AC-CR01-3</code></span><span>接着把 Before 恢复为 <code>{\"n\":2}</code></span><span>两侧有效并完成比较，<b>移除旧结果提示</b>，摘要更新为零差异</span></div><div class=\"is-key\"><span><code>AC-CR01-4</code></span><span>全新页面尚未成功比较，直接输入非法 JSON</span><span>只显示错误或空状态，<b>绝不声称存在上次有效结果</b></span></div></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:10px;font-size:20px\">四条期望全写在<b>用户可见行为</b>上，不绑死私有状态字段或 CSS 类名</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:8px;font-size:20px\">在原 <code>SPEC.md</code> / <code>ACCEPTANCE.md</code> 上追加，不追溯成旧缺陷；若已有等价提示只先记下检查点</div>",
      "steps": [
        "四个固定验收案例",
        "期望落在可见行为",
        "追加规格，不追溯旧缺陷"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向验收矩阵中的四个固定案例；不切窗口】\n\n这四个案例直接沿用大纲，不临时编造。第一个案例 AC-CR01-1：先比较成功，再把 After 改成左花括号这样的非法输入，期望保留原差异图和摘要，同时亮出旧结果提示与 After 报错。第二个案例 AC-CR01-2：把 Before 也改成非法，接着只恢复 After——注意，这时 Before 还是错的，旧结果提示绝不能提前消失。第三个案例 AC-CR01-3：把 Before 也恢复合法，比较完成后提示消失，摘要更新为零差异。第四个案例 AC-CR01-4：全新页面还没成功比较过就直接输入非法 JSON，这时根本没有历史结果，只报错误或空状态，绝不能谎称存在上次有效结果。",
        "【操作提示｜推进第 2 步，指向下方浅色提示条；不切窗口】\n\n留意这四条期望的共同点：全写在用户在页面上看得见的行为上，不绑死某个私有变量名或样式类名。",
        "【操作提示｜推进第 3 步，指向底部深色结论条；讲完进入 p14】\n\n规格处理上，我们是在原有的 SPEC.md 和 ACCEPTANCE.md 里追加 REQ-CR01 与这四个案例，不把新需求倒推成第五章的旧缺陷。假如第五章生成的代码里碰巧已经写了类似提示，这一节也只如实记下「行为已有」，具体怎么测留到 6.4。靶子清楚了，下一步先认准：我们说的「当前仓库」到底是哪一份目录？"
      ],
      "teaching": [],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "当前仓库",
      "label": "「当前仓库」指的是哪一份工作，建流前要核对什么",
      "title": "「当前仓库」指哪份，建流前查什么？",
      "lead": "所谓当前仓库，不是课件仓库，而是学员自己的 JSON Crack 课程副本。建流前逐项核对真实检查点，缺哪项就当场记下。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:24px;align-items:start\"><ul class=\"p-tree\" data-reveal=\"0\" style=\"font-size:19px\"><li class=\"is-dim\"><span class=\"p-path\">prompt-to-harness/</span><span class=\"p-note\">课件仓库（不是操作对象）</span></li><li class=\"is-open\"><span class=\"p-path\">jsoncrack.com/</span><span class=\"p-note\">本地课程副本</span><ul><li class=\"is-target\"><span class=\"p-path\">docs/specs/</span><span class=\"p-note\">权威五层规格</span></li><li class=\"is-allow\"><span class=\"p-path\">packages/ · apps/www/</span><span class=\"p-note\">第 5 章实现</span></li><li><span class=\"p-path\">.planning/</span><span class=\"p-note\">GSD 工作区</span></li></ul></li></ul><ol class=\"p-notes\"><li class=\"is-ok\" data-reveal=\"1\"><span><b>本地实现检查点可定位</b><small>通过第 5 章验收的提交与干净工作区</small></span></li><li class=\"is-ok\" data-reveal=\"1\"><span><b>五层规格仍是唯一依据</b><small><code>docs/specs/</code> 未被初始化改写</small></span></li><li data-reveal=\"1\"><span><b>原验收状态与已知缺口清楚</b><small>哪些案例已核对、哪些待补自动检查</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>只认现场事实，不预写数字</b><small>缺哪一项就如实登记，不拿假设充当交接</small></span></li></ol></div>",
      "steps": [
        "认准 JSON Crack 课程副本",
        "核对建流前检查点",
        "缺项如实登记"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，指向左侧目录树中的 JSON Crack 课程副本与被划掉的课件仓库；不切窗口】\n\n看左边的目录树。「当前仓库」不是放讲义的课件仓库，而是每位同学从 JSON Crack 固定提交检出后自己维护的课程副本。里面已经有 apps/www 和共享包里的 JSON Diff 代码，有 docs/specs/ 五层规格，还有 6.1 刚建起的 .planning/ 目录。",
        "【操作提示｜推进第 2 步，指向右侧四条建流前检查点；不切窗口】\n\n导入建流之前，先按右边这四条逐项核对：本地实现检查点能不能定位、docs/specs/ 还是不是权威依据、原来的验收哪些过了哪些留有缺口、从双输入到图更新的关键代码路径能不能讲清。",
        "【操作提示｜推进第 3 步，指向右侧末条风险提示；讲完进入 p15】\n\n因为每位同学第五章跑出来的提交号和细节不同，这里只核对真实检查点，不拿没发生过的数字充数；现场缺哪项就如实记下。起点核清之后，怎样把已有规格接进 GSD，又保证它不另起炉灶？"
      ],
      "teaching": [],
      "source": "index.html#p14",
      "seconds": 90
    },
    {
      "id": "p15",
      "segment": "怎样建流",
      "label": "怎样把已有规格接进工作流，而不另起一套规划",
      "title": "已有规格怎样单向接进工作流？",
      "lead": "通过 ingest-docs、discuss-phase 与 plan-phase 把 docs/specs/ 接入 .planning/：权威需求留在原处，计划压缩为不超过三个串行任务，本节不改生产代码。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:308px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 332\" width=\"1118\" height=\"332\"><defs><marker id=\"rd-arrow-gsd-specs-handoff\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"14\" width=\"344\" height=\"304\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"28\" y=\"48\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"24\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">docs/specs/（权威需求）</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"66\" width=\"308\" height=\"46\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"38\" y=\"95\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">BRIEF.md · 记 CR-01 变更原因</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"122\" width=\"308\" height=\"48\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"38\" y=\"152\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"700\" fill=\"#15803D\" text-anchor=\"start\">SPEC.md · 追加 REQ-CR01</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"180\" width=\"308\" height=\"48\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"38\" y=\"210\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"700\" fill=\"#15803D\" text-anchor=\"start\">ACCEPTANCE.md · 加 AC-CR01-1~4</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"238\" width=\"308\" height=\"44\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"38\" y=\"266\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">PLAN / TASKS · 追加链接与状态</text></g><g data-reveal=\"0\"><text x=\"28\" y=\"304\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#6E6043\" text-anchor=\"start\">原五层规格保留，不把新规则说成旧缺陷</text></g><g data-reveal=\"1\"><path d=\"M356 134L412 134\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-specs-handoff)\"/></g><g data-reveal=\"1\"><rect x=\"416\" y=\"44\" width=\"276\" height=\"184\" rx=\"10\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"434\" y=\"78\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"23\" font-weight=\"400\" fill=\"#0B6B5F\" text-anchor=\"start\">GSD 建流三步</text></g><g data-reveal=\"1\"><text x=\"434\" y=\"112\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">1. ingest-docs 读五份规格</text></g><g data-reveal=\"1\"><text x=\"434\" y=\"146\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">2. discuss-phase 1 锁范围</text></g><g data-reveal=\"1\"><text x=\"434\" y=\"180\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">3. plan-phase 1 排串行任务</text></g><g data-reveal=\"1\"><text x=\"434\" y=\"210\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"700\" fill=\"#0B6B5F\" text-anchor=\"start\">零新增依赖：内置 node:test</text></g><g data-reveal=\"1\"><path d=\"M696 134L752 134\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-specs-handoff)\"/></g><g data-reveal=\"1\"><rect x=\"416\" y=\"248\" width=\"276\" height=\"64\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"554\" y=\"275\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">✕ 禁止另起产品需求</text></g><g data-reveal=\"1\"><text x=\"554\" y=\"299\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"middle\">✕ 禁止反向覆盖 docs/specs/</text></g><g data-reveal=\"2\"><rect x=\"756\" y=\"14\" width=\"354\" height=\"304\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"776\" y=\"48\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"24\" font-weight=\"400\" fill=\"#2A2380\" text-anchor=\"start\">.planning/（进度与计划）</text></g><g data-reveal=\"2\"><rect x=\"774\" y=\"68\" width=\"318\" height=\"56\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"790\" y=\"94\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">需求映射与单阶段 Roadmap</text></g><g data-reveal=\"2\"><text x=\"790\" y=\"115\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">每条都能回指 docs/specs/ 编号</text></g><g data-reveal=\"2\"><rect x=\"774\" y=\"136\" width=\"318\" height=\"56\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"790\" y=\"162\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">AC → 验证方式矩阵</text></g><g data-reveal=\"2\"><text x=\"790\" y=\"183\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">单元 / 状态交互 / 浏览器回归 / 人工</text></g><g data-reveal=\"2\"><rect x=\"774\" y=\"204\" width=\"318\" height=\"68\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"788\" y=\"230\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">≤ 3 个串行任务（本节不改生产码）</text></g><g data-reveal=\"2\"><text x=\"788\" y=\"255\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">补缺口测 → CR-01 红绿 → 回归交付</text></g><g data-reveal=\"2\"><text x=\"776\" y=\"302\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"700\" fill=\"#2A2380\" text-anchor=\"start\">建好流 ≠ 做完 CR-01（6.3 先验流程）</text></g></svg><p class=\"source-note\">课程自绘：对应大纲 6.2 将已有 docs/specs/ 接入 GSD .planning/ 的单向依赖与三任务上限约定</p></div>",
      "steps": [
        "左：权威规格只追加",
        "中：GSD 建流三步与禁令",
        "右：进度区与三个串行任务"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，指向示意图左侧 docs/specs/ 权威需求框；不切窗口】\n\n看这张单向接入图。左边是 docs/specs/，我们的权威需求大本营：BRIEF 记变更原因，SPEC 追加 REQ-CR01，ACCEPTANCE 追加四个新案例，PLAN 和 TASKS 追加本轮链接。五层规格一个都不丢。",
        "【操作提示｜推进第 2 步，指向中间 GSD 建流三步与下方红色禁止框；不切窗口】\n\n中间是 GSD 建流的三步动作：先用 ingest-docs 读入这五份规格，再用 discuss-phase 锁定范围与人工决定，最后用 plan-phase 生成执行计划。注意底下的红色禁令——箭头只能从左往右走，绝不允许框架另编一套产品需求，反向覆盖 docs/specs/。",
        "【操作提示｜推进第 3 步，指向右侧 .planning/ 工作区框；讲完进入 p15a】\n\n右边 .planning/ 只负责管执行进度：核对需求编号映射、排好每个案例的验证去向，并把实施压缩在不超过三个串行任务里——补原验收缺口、CR-01 失败测试与最小实现、浏览器回归与交付。这儿还有一个很现实的工程问题：第 5 章我们约定了不在 JSON Crack 里乱装第三方测试框架，那第 6 章的自动验证靠什么跑？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "框架源码",
          "text": "GSD Core v1.13.0 固定源码",
          "url": "https://github.com/open-gsd/gsd-core/tree/b5b9814f033b6d32810562fd4068e1f107da29ec"
        }
      ],
      "teaching": [],
      "source": "index.html#p15",
      "seconds": 90
    },
    {
      "id": "p15a",
      "segment": "怎样建流",
      "layout": "evidence-scene",
      "label": "不往仓库装新包，靠什么跑自动验证",
      "title": "不往仓库装新包，靠什么跑自动验证？",
      "lead": "衔接第 5 章不在上游仓库预装第三方测试框架的基线，采用零新增依赖方案：用 Node.js 24+ 内置的 node:test 与 node:assert 编写自动断言，不污染 pnpm-lock.yaml。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:340px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>nodejs.org · Node.js Documentation · Test runner (node:test)</div><a href=\"external/nodejs-builtin-test-runner.png\"><img src=\"external/nodejs-builtin-test-runner.png\" alt=\"Node.js 官方文档内置 node:test 测试运行器与同步断言示例截图\"></a></div><p class=\"p-shot-note\" style=\"font-size:19px\" data-reveal=\"1\">零新增依赖分流：逻辑/状态契约走 node:test · 恢复路径走浏览器回归 · 视觉可读性归人工观察</p></div>",
      "steps": [
        "看 Node.js 内置测试运行器",
        "零新增依赖四层分流"
      ],
      "script": [
        "【操作提示｜停留课件 p15a 第 1 步，指向 Node.js 官方文档 node:test 截图；不切窗口】\n\n答案就在我们现成的运行环境里。JSON Crack 固定版本和 GSD 都要求 Node.js 二十四以上，而 Node.js 官方自带了内置测试运行器 node:test 和严格断言模块 node:assert。看截图里的官方说明：不需要往仓库的 package.json 里装任何第三方测试包，也不必改动 pnpm-lock.yaml，直接写标准测试函数，抛异常就判红、不抛异常就判绿。",
        "【操作提示｜推进第 2 步，指向下方零新增依赖四层验证分流条与页底原文链接；讲完进入 p16】\n\n这样第 5 章和第 6 章就彻底接上了，我们采用零新增依赖方案做四层分流：纯逻辑和提示状态契约用内置 node:test 跑自动断言，关键恢复路径在浏览器里走真实交互回归，排版与可读性留给人工观察。工具链干净、锁文件零污染。方法都定齐了，接下来切去现场核对规格并发出建流请求。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方依据",
          "text": "Node.js 官方文档：node:test",
          "url": "https://nodejs.org/api/test.html"
        }
      ],
      "teaching": [],
      "source": "index.html#p15a",
      "seconds": 60
    },
    {
      "id": "p16",
      "segment": "怎样建流",
      "label": "当前规格对得上吗？建流请求该怎么发出",
      "title": "当前规格对得上吗？建流请求该怎么发出？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写请求原文实例或 Agent 回答</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p16 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p16",
      "seconds": 30
    },
    {
      "id": "p17",
      "segment": "怎样建流",
      "label": "怎样判断这条工作流真的指向 CR-01",
      "title": "怎样判断这条工作流真的指向 CR-01？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写本次映射表、任务名或截图</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p17 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p17",
      "seconds": 30
    },
    {
      "id": "p18",
      "segment": "判断与自检",
      "label": "工作流已经跑起来了，本章目标是不是就完成了",
      "title": "工作流跑起来了，目标就算完成了吗？",
      "lead": "GSD 工作流和计划生成完毕后，请先对照三道关卡判断本章目标是否已经完成。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 18px\"><div class=\"p-head\"><h3 style=\"font-size:24px\">学员判断：计划和映射都生成好了，CR-01 是不是就算做完了？</h3><span class=\"p-tag\" data-role=\"us\">先想一步</span></div></div><div class=\"p-flow\" style=\"--n:3;column-gap:40px;margin-top:12px\" data-reveal=\"1\"><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">6.2 · 本节完成</span><h3>工作流与计划就位</h3><p>CR-01 已追加，验证矩阵已排好</p></div><div class=\"p-node\" data-role=\"gate\"><span class=\"p-num\">6.3 · 还没核对</span><h3>流程本身合不合格</h3><p>停止条件与验证去向待人工验收</p></div><div class=\"p-node\" data-role=\"ctx\" style=\"opacity:.7\"><span class=\"p-num\">6.4 · 还没实施</span><h3>提示行为做没做对</h3><p>待跑失败测试、最小修改与 UAT</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\"><b>还没有</b>：建好工作流只是排好路线；6.3 先验流程，6.4 再用红绿测试与人工 UAT 证明结果</div>",
      "steps": [
        "先做判断",
        "对照三道关卡",
        "建好流不等于做完变更"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，指向判断问题框；停顿数秒；不切窗口】\n\n建流操作走完，先停下来判断一件事：现在 GSD 工作流已经在仓库里跑起来、计划文件也写好了，本章的目标是不是就算大功告成了？",
        "【操作提示｜推进第 2 步，指向三步流程中的 6.2 已就位与 6.3、6.4 待完成节点；不切窗口】\n\n看这三格状态：还没有。6.2 只把 CR-01 写进了工作流，把映射和计划排了出来；但这套计划本身有没有跑偏、停止条件管不管用，要到 6.3 先做流程验收；而页面上的提示到底做没做对，要到 6.4 用失败测试和人工 UAT 才能证明。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p19】\n\n千万别把「计划生成完毕」当成「产品变更完成」。接下来暂停几秒，做一道导入规格时的边界自检。"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p19",
      "segment": "判断与自检",
      "label": "导入后框架生成了一份新的产品需求，哪种做法对",
      "title": "导入后多出一份新产品需求，怎么选？",
      "lead": "导入规格后，如果框架在工作区生成了一份新的产品需求文档，请先暂停判断下面两种做法哪一种正确。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先比较两种做法，自己选定再往下看</span><div class=\"p-quiz\" style=\"margin-top:12px\"><div class=\"p-q\" data-role=\"gate\"><div class=\"p-say\">做法 A：用新生成的产品需求替换原来的五层规格，后面直接按新需求规划</div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 偷换依据</span><div style=\"margin-top:8px;font-size:19px;color:#A8350F\" data-reveal=\"1\">另起一套无关联的 GSD 需求，会让非目标、节点上限和错误恢复约束悄悄脱钩</div></div><div class=\"p-q\" data-role=\"ok\"><div class=\"p-say\">做法 B：把它当作待核对材料，仍以 <code>docs/specs/</code> 为需求依据，只追加批准的 CR-01</div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 单向接入</span><div style=\"margin-top:8px;font-size:19px;color:#11652F\" data-reveal=\"2\">权威需求留在 <code>docs/specs/</code>，框架工作区只承载映射与进度</div></div></div>",
      "steps": [
        "暂停比较两种做法",
        "做法 A：偷换依据",
        "做法 B：单向接入"
      ],
      "script": [
        "【操作提示｜停留课件 p19 第 1 步，指向暂停标签与两张自检题卡；停顿数秒；不切窗口】\n\n假设执行完规格导入之后，框架在工作区里生成了一份新的产品需求摘要。请暂停几秒，比较这两种处理方式，选出你的答案。",
        "【操作提示｜推进第 2 步，指向左侧题卡的红色印章与解析；不切窗口】\n\n做法 A 是拿这份新生成的需求摘要替换掉原来的五层规格，往后全按新文件规划。这样不对——一旦替换，前面确认过的非目标、节点上限和错误侧规则就可能悄悄丢失。",
        "【操作提示｜推进第 3 步，指向右侧题卡的绿色印章与解析；讲完进入 p20】\n\n做法 B 是只把框架生成的摘要当作待核对的工作材料，权威需求依然留在 docs/specs/，只追加这次经人批准的 CR-01。这样才守住了单向依赖。我们把 6.2 收拢一下，准备进入 6.3。"
      ],
      "teaching": [],
      "source": "index.html#p19",
      "seconds": 90
    },
    {
      "id": "p20",
      "segment": "小结",
      "label": "带着什么进入 6.3",
      "title": "带着什么进入 6.3？",
      "lead": "本节还没有修改生产代码。收住 6.2 留下的规格变更、零新增依赖验证矩阵和计划初稿，进入 6.3 验收这条流程。",
      "html": "<div class=\"p-sketch\"><div class=\"p-ribbon\" data-reveal=\"0\">6.2 小结 · 靶子写进规格，进度交给工作流</div><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个核心判断</h3><div class=\"p-star\" style=\"width:220px;font-size:22px\">工作流跑起来<br>只是排好路线<br>还不等于做完</div></div><div data-reveal=\"1\"><h3>本节留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\" style=\"font-size:21px\">追加进原规格的 CR-01 与四案例</li><li class=\"is-pass\" style=\"font-size:21px\">零新增依赖验证分流矩阵</li><li class=\"is-pass\" style=\"font-size:21px\">≤ 3 个串行任务计划（未改生产码）</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.3 验收流程</h3><p>先别急着写代码：怎样判断这条 GSD 流程符合预期？</p></div></div></div>",
      "steps": [
        "一个核心判断",
        "本节留下的",
        "下一节 6.3"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，指向彩带标题与左侧五角星判断；不切窗口】\n\n收住这一节的核心判断：工作流在仓库里建起来了，只代表靶子和计划就了位，还不等于变更目标已经完成。",
        "【操作提示｜推进第 2 步，指向中间“本节留下的”三项清单；不切窗口】\n\n离开 6.2 时，我们手里有经人批准的 CR-01 规格、零新增依赖的验证分流矩阵，以及不超过三个串行任务的计划初稿；原规格完好无损，生产代码一行没动。",
        "【操作提示｜推进第 3 步，指向右侧下一节卡片】\n\n下一节 6.3，我们还不急着写代码，先停下来问一个关键问题：怎样判断这条刚刚建好的 GSD 流程真的符合预期？"
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
      "label": "本章目标",
      "seconds": 180
    },
    {
      "label": "当前仓库",
      "seconds": 90
    },
    {
      "label": "怎样建流",
      "seconds": 210
    },
    {
      "label": "判断与自检",
      "seconds": 180
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};

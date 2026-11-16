window.lesson = {
  "title": "怎样在当前仓库把 GSD 工作流建起来",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.02",
  "summary": "先说清 CR-01 改什么、不改什么及四个验收案例，再核对接手检查点，把已有规格接进工作流；本节不改生产代码。",
  "scenes": [
    {
      "id": "p11",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "怎样在当前仓库把 GSD 工作流建起来",
      "title": "怎样在当前仓库把 GSD 工作流建起来？",
      "lead": "6.1 已经留下定位、边界和第一次上手。这一节先问怎样把工作流建起来；本章目标仍是 CR-01，随后用一两页说清。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>6.1</b>定位 SDD 与 GSD</li><li class=\"is-now\"><b>6.2</b>构建工作流</li><li><b>6.3</b>验收流程</li><li><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">6.1 留下：<b>SDD 与 GSD 的定位</b>、不能覆盖已有文档的边界，以及一次经抽查的上手</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节问题：怎样在当前仓库把 GSD 工作流建起来？先问怎么建流，目标在随后说清</div>",
      "steps": [
        "本章位置",
        "6.1 留下什么",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，指向章节地图上的 6.2；不切窗口】\n\n上一节我们认清了 SDD 和 GSD，也做了第一次上手。地图上，这一节是 6.2。",
        "【操作提示｜推进第 2 步，指向 6.1 留下的定位和边界；不切窗口】\n\n6.1 留下的是定位、不能覆盖已有文档的边界，以及一次经抽查的上手。指向 CR-01 的工作流，还没有建起来。",
        "【操作提示｜推进第 3 步，指向本节问题；讲完进入 p12】\n\n怎样在当前仓库把 GSD 工作流建起来？开场先问怎么建流，不把规则细节抢到第一句。本章目标仍是 CR-01，接下来用一两页说清它改什么、不改什么。"
      ],
      "teaching": [],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "本章目标",
      "label": "CR-01 到底改的是什么，不改什么",
      "title": "CR-01 到底改的是什么，不改什么？",
      "lead": "本章目标仍是 CR-01：给「上次有效结果」补一句对用户可见的说明。这不是比较逻辑的重写，而是把「现在看见的是旧结果」说清楚。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:24px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">原规则</span><h3 style=\"margin:10px 0 0\">输入非法时保留上次有效结果</h3><p>结果区不必解释「这是旧结果」</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">新增</span><h3 style=\"margin:10px 0 0\">补一句可见提示</h3><p>「上次有效结果（当前输入无效）」</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:16px\">非目标：不改比较算法，不增加历史列表、自动保存或上传</div>",
      "steps": [
        "原规则",
        "新增的可见提示",
        "不改什么"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向原规则；不切窗口】\n\n第五章已经要求：输入非法时，标明错误侧，并保留最后一次有效比较结果。但当时并不强制结果区域解释「这是旧结果」。",
        "【操作提示｜推进第 2 步，指向新增的可见提示；不切窗口】\n\nCR-01 要补的，就是一句对用户可见的说明：「上次有效结果（当前输入无效）」。它不改比较逻辑，只把现在看见的是旧结果说清楚。",
        "【操作提示｜推进第 3 步，指向非目标；讲完进入 p13】\n\n非目标也不变：不改比较算法，不增加历史列表、自动保存或上传。怎样才算这条规则被说清楚了？看四个固定验收。"
      ],
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "本章目标",
      "label": "怎样才算这条规则被说清楚了",
      "title": "怎样才算这条规则被说清楚了？",
      "lead": "四个固定验收已经写在大纲里，本节直接采用，不另发明一组。期望都写在可见行为和提示是否出现上。规格追加到原五层文档，不把新规则说成第五章的旧缺陷。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:120px minmax(0,1.1fr) minmax(0,1.2fr);margin-top:4px\" data-reveal=\"0\"><div class=\"is-head\"><span>验收</span><span>输入与动作</span><span>期望</span></div><div><span><code>AC-CR01-1</code></span><span>比较成功后，把 After 改成 <code>{</code></span><span>保留原结果与摘要，显示旧结果提示和 After 错误</span></div><div><span><code>AC-CR01-2</code></span><span>再把 Before 也改成 <code>{</code>，随后只恢复 After</span><span>两侧分别报错；只恢复一侧后，旧结果提示不消失</span></div><div><span><code>AC-CR01-3</code></span><span>再把 Before 恢复并完成比较</span><span>两侧有效，提示消失，摘要变为零差异</span></div><div><span><code>AC-CR01-4</code></span><span>全新页面尚未成功比较，就输入非法 JSON</span><span>只显示错误或空状态，不声称存在上次结果</span></div></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:12px\">期望都写在<b>可见行为</b>和提示是否出现上，不另发明一组案例</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">规格追加到原五层文档，不把新规则说成第五章的旧缺陷。若已有等价提示，只先记下「行为已有」，实施分支留到 6.4</div><p class=\"source-note\">案例沿用内部大纲；不写死尚未存在的路径或运行结果</p>",
      "steps": [
        "四个固定验收",
        "期望写在可见行为上",
        "追加规格，不追溯成旧缺陷"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向四个验收案例；不切窗口】\n\n四个固定验收沿用大纲，不另发明一组。AC-CR01-1 是比较成功后把 After 改成非法，要保留原结果，并显示旧结果提示和 After 错误。AC-CR01-2 是两侧都非法后只恢复 After，旧结果提示不消失。AC-CR01-3 是两侧都恢复并完成比较，提示消失，摘要变为零差异。AC-CR01-4 是从未成功比较过就输入非法 JSON，不能声称存在上次结果。",
        "【操作提示｜推进第 2 步，指向期望写在可见行为上；不切窗口】\n\n这些期望都写在可见行为和提示是否出现上，而不是写在某个内部字段或样式类名上。",
        "【操作提示｜推进第 3 步，指向规格追加方式；讲完进入 p14】\n\n规格是追加到原五层文档，不把这条新规则说成第五章的旧缺陷。如果第五章已经有等价提示，这一节只先记下「行为已有」，实施分支留到 6.4。接下来先分清：所谓当前仓库，指的是哪一份工作？"
      ],
      "teaching": [],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "当前仓库",
      "label": "「当前仓库」指的是哪一份工作，建流前要核对什么",
      "title": "「当前仓库」指的是哪一份工作，建流前要核对什么？",
      "lead": "所谓当前仓库，不是课件仓库，而是学员自己的 JSON Crack 课程副本。建流前要核对接手检查点；缺哪一项，就在现场记下，不把检查点伪装成已完成的交接。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">当前仓库</span><h3 style=\"font-size:24px;margin:10px 0 0\">不是课件仓库，而是学员自己的 JSON Crack 课程副本</h3><p>第 4、5 章已经在这份副本里写出 <code>docs/specs/</code>，并实现过通过第五章验收的 JSON Diff</p></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:14px\">检查点：可定位的实现提交、<code>docs/specs/</code> 仍是需求依据、原验收状态、已有测试与已知缺口、能解释的关键路径</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px\">不写死尚未存在的路径、测试名单、commit 或运行数字。缺哪一项，就在现场记下</div>",
      "steps": [
        "不是课件仓库",
        "建流前的检查点",
        "不把检查点写成已完成的交接"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，指向当前仓库的定义；不切窗口】\n\n当前仓库不是课件仓库，而是学员自己的 JSON Crack 课程副本。第 4、5 章已经在这份副本里写出 docs/specs/，并实现过通过第五章验收的 JSON Diff。",
        "【操作提示｜推进第 2 步，指向建流前的检查点；不切窗口】\n\n建流前要核对这些检查点：可定位的实现提交、docs/specs/ 仍是需求依据、原验收状态、已有测试与已知缺口，以及能解释的关键路径。",
        "【操作提示｜推进第 3 步，指向不要把检查点写成既成事实；讲完进入 p15】\n\n这些只是检查点。不要写死尚未存在的路径、测试名单、commit 或运行数字。缺哪一项，就在现场记下，不把检查点伪装成已经完成的交接。怎样把已有规格接进工作流，而不另起一套规划？"
      ],
      "teaching": [],
      "source": "index.html#p14",
      "seconds": 90
    },
    {
      "id": "p15",
      "segment": "怎样建流",
      "label": "怎样把已有规格接进工作流，而不另起一套规划",
      "title": "怎样把已有规格接进工作流，而不另起一套规划？",
      "lead": "导入已有 docs/specs/，权威需求仍留在原处。选定验证方式并写入工作流，计划不超过三个串行任务。本节不改生产实现。",
      "html": "<div class=\"p-bar\" data-reveal=\"0\">导入已有 <code>docs/specs/</code>，权威需求仍留在原处；框架工作区只管理执行进度</div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:12px\">验证方式：纯逻辑走单元，界面状态走组件或交互，关键恢复路径走 E2E，视觉体验留给人工</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">计划不超过三个串行任务，并标出允许范围、断言和停止条件。原验收仍要有验证去向，不按覆盖率验收</div><div class=\"p-bar is-light\" data-reveal=\"3\" style=\"margin-top:12px\">本节以建流为主，还不改生产实现。工作流跑起来，不等于 CR-01 已经做完</div>",
      "steps": [
        "导入已有规格",
        "选定验证方式",
        "计划不超过三个任务",
        "本节不改生产实现"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，指向导入已有规格；不切窗口】\n\n导入已有的 docs/specs/，权威需求仍留在原处。框架工作区只管理执行进度，不另写一套产品需求。",
        "【操作提示｜推进第 2 步，指向验证方式；不切窗口】\n\n验证方式在这里选定并写入工作流：纯逻辑走单元，界面状态走组件或交互，关键恢复路径走 E2E，视觉体验留给人工。原验收仍然要有验证去向。",
        "【操作提示｜推进第 3 步，指向计划任务上限；不切窗口】\n\n计划建议不超过三个串行任务，并标出允许范围、断言和停止条件。不按覆盖率或测试数量验收。",
        "【操作提示｜推进第 4 步，指向本节不改生产实现；讲完进入 p16】\n\n这一节以建流为主，还不改生产实现。工作流跑起来，不等于 CR-01 已经做完。当前规格对得上吗？建流请求该怎么发出？接下来会切到现场去做。"
      ],
      "teaching": [],
      "source": "index.html#p15",
      "seconds": 120
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
      "title": "工作流已经跑起来了，本章目标是不是就完成了？",
      "lead": "GSD 已经按计划跑起来了，是不是就等于本章目标完成了？请先判断，再看本节实际证明了什么。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:24px;margin:10px 0 0\">工作流已经跑起来了，本章目标是不是就完成了？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:16px\"><b>没有</b>。本节只把目标写进工作流，验证去向和停止条件也能对上看</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:12px\">流程是否符合预期，要到 6.3 验收；提示有没有做对，要到 6.4 用失败测试和人工 UAT 证明</div>",
      "steps": [
        "先判断",
        "还没有完成",
        "6.3 验收流程，6.4 证明提示"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：工作流已经跑起来了，本章目标是不是就完成了？",
        "【操作提示｜推进第 2 步，指向参考判断；不切窗口】\n\n没有。本节只把目标写进工作流，验证去向和停止条件也能对上看。这还不是目标已经完成。",
        "【操作提示｜推进第 3 步，指向 6.3 与 6.4 的分工；讲完进入 p19】\n\n流程是否符合预期，要到 6.3 验收；提示有没有做对，要到 6.4 用失败测试和人工 UAT 证明。导入后如果框架生成了一份新的产品需求，哪种做法对？"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p19",
      "segment": "判断与自检",
      "label": "导入后框架生成了一份新的产品需求，哪种做法对",
      "title": "导入后框架生成了一份新的产品需求，哪种做法对？",
      "lead": "导入之后，框架有可能生成一份新的产品需求。请先自己判断这两种做法哪样对，再看参考结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>用它替换原来的五层规格，按新需求继续规划</h3><div data-reveal=\"1\"><p>不对。不能另写一套无关联的 GSD 产品需求，去覆盖已经批准的规格</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>把它当作待核对材料，仍以已有规格为需求依据，只追加本次批准的 CR-01</h3><div data-reveal=\"2\"><p>对。权威需求仍留在 <code>docs/specs/</code>，只追加这次批准的变更</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际导入结果</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p19 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。导入后框架生成了一份新的产品需求，哪种做法对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，用它替换原来的五层规格，按新需求继续规划。这样不对。不能另写一套无关联的 GSD 产品需求，去覆盖已经批准的规格。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p20】\n\n第二种做法是，把它当作待核对材料，仍以已有规格为需求依据，只追加本次批准的 CR-01。这样对。带着什么进入 6.3？我们把这一节要留下的东西收住。"
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
      "lead": "本节还没有改生产代码。请看这一节留下什么，以及 6.3 要问的问题。不要把下一节预告成开始实现。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:300px;font-size:22px\">工作流跑起来了<br>还不等于目标完成</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">经人批准的 CR-01 规格</li><li class=\"is-pass\">指向它的工作流和验证矩阵</li><li class=\"is-pass\">计划初稿；原规格没有被覆盖</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.3 验收流程</h3><p>怎样判断这条 GSD 流程符合预期？</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。工作流跑起来了，还不等于本章目标完成。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下经人批准的 CR-01 规格、指向它的工作流和验证矩阵，以及计划初稿。原规格没有被覆盖，本节也还没有改生产实现。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 6.3，我们问：怎样判断这条 GSD 流程符合预期？不要把下一节理解成开始改提示。"
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
      "seconds": 180
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

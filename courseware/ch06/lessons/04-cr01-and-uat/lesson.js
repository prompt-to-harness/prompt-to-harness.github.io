window.lesson = {
  "title": "用已验收的流程，怎样把 CR-01 做完并让人认可",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.04",
  "summary": "先讲清失败测试先行，再按已验收流程做最小实现和回归，然后用人沿四个案例做 UAT；测试全绿不等于用户已经认可。",
  "scenes": [
    {
      "id": "p32",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "用已验收的流程，怎样把 CR-01 做完并让人认可",
      "title": "用已验收的流程，怎样把 CR-01 做完并让人认可？",
      "lead": "6.3 已经留下可进入实施的工作流和避坑。本节不再讨论要不要建这条流程，而是用它把变更真正做完，再由人实际操作一遍。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>6.1</b>定位 SDD 与 GSD</li><li class=\"is-done\"><b>6.2</b>构建工作流</li><li class=\"is-done\"><b>6.3</b>验收流程</li><li class=\"is-now\"><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">6.3 留下：<b>已验收的工作流</b>和避坑。本节不再重讲这些定义</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节问题：先失败测试，再最小实现与回归，最后由人实际操作验收</div>",
      "steps": [
        "本章位置",
        "6.3 留下什么",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指向章节地图上的 6.4；不切窗口】\n\n上一节已经验收了指向 CR-01 的工作流，也立住了避坑。地图上，这一节是 6.4。",
        "【操作提示｜推进第 2 步，指向 6.3 留下的工作流；不切窗口】\n\n6.3 留下的是可进入实施的工作流和避坑。本节不再讨论要不要建这条流程，也不再重讲那些定义。开场不要直接改产品代码。",
        "【操作提示｜推进第 3 步，指向本节问题；讲完进入 p33】\n\n用已验收的流程，怎样把 CR-01 做完并让人认可？先失败测试，再最小实现与回归，最后由人实际操作验收。"
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
      "lead": "先写针对可见提示的测试，确认它因缺少旧结果提示、而以正确原因失败，再做最小实现，让同一条断言通过。不能先改实现再补永远能通过的测试。",
      "html": "<div class=\"p-qlist\"><div class=\"p-bar\" data-reveal=\"0\">先写针对可见提示的测试。它应当因缺少旧结果提示，以正确原因失败</div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:12px\">再做最小提示状态与文本，让同一条断言通过</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">人要检查：断言是否独立于实现、失败是否来自规则差距、修复有没有越界</div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">若现场发现行为已有，改走受控变异检查点，不伪装成原始缺陷。不能靠跳过测试、改期望或吞异常制造绿色</div>",
      "steps": [
        "先写会失败的测试",
        "再做最小实现",
        "人检查失败原因和范围"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，指向先写会失败的测试；不切窗口】\n\n先写针对可见提示的测试。它应当因缺少旧结果提示，而以正确原因失败。",
        "【操作提示｜推进第 2 步，指向再做最小实现；不切窗口】\n\n然后再做最小提示状态与文本，让同一条断言通过。不能先改实现，再补永远能通过的测试。",
        "【操作提示｜推进第 3 步，指向人要检查的事项；讲完进入 p34】\n\n人要检查：断言是否独立于实现，失败是否来自规则差距，修复有没有越界。不能靠跳过测试、改期望或吞异常制造绿色。如果现场发现第五章已经有等价提示，就改走受控变异检查点，不把它伪装成原始缺陷。现在还不知道会走哪一条，只按现场事实选择。失败测试有没有因正确原因失败？接下来会切到现场去做。"
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预选分支，不预写失败日志或截图</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步】\n\n本页待演练后再写。"
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写本次通过结果或文件名单</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步】\n\n本页待演练后再写。"
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
      "lead": "自动检查可以汇总 lint、类型检查、测试、构建和 E2E，但它们不能代替用户路径。框架完成状态不是发布批准。用户回答必须来自实际观察。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:24px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">自动检查</span><h3 style=\"margin:10px 0 0\">证明约定的检查过了</h3><p>不能代替人在真实界面上的操作</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">UAT 路径</span><h3 style=\"margin:10px 0 0\">有效比较 → After 非法 → 两侧非法 → 仅一侧恢复 → 全部恢复</h3><p>并单独看：从未成功比较过就非法</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:16px\">人要看提示、错误侧、结果是否更新，以及计划里留给人工的键盘、窄屏、控制台和网络</div>",
      "steps": [
        "自动检查证明什么",
        "人要走的路径",
        "还要实际看哪些"
      ],
      "script": [
        "【操作提示｜停留课件 p36 第 1 步，指向自动检查能证明什么；不切窗口】\n\n自动检查可以汇总 lint、类型检查、单元或交互测试、构建和 E2E。它们很有用，但只能证明约定的检查过了，不能代替人在真实界面上的操作。框架完成状态也不是发布批准。",
        "【操作提示｜推进第 2 步，指向人要走的 UAT 路径；不切窗口】\n\nUAT 至少走一条可见路径：有效比较，After 非法，两侧非法，仅一侧恢复，全部恢复；并单独看从未成功比较过就非法的空状态。",
        "【操作提示｜推进第 3 步，指向还要实际看的项目；讲完进入 p37】\n\n人要报告自己看见的提示、错误侧和结果是否更新，而不是复述框架的完成说明。计划里留给人工的键盘、窄屏、控制台和网络，都要实际看一眼。人在界面上实际看到了什么？接下来会切到现场去做。"
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
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写本次界面结果或截图，不能未操作就回答通过</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p37 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p37",
      "seconds": 30
    },
    {
      "id": "p38",
      "segment": "判断与自检",
      "label": "组件测试已经全绿，是不是就可以宣布用户已经认可",
      "title": "组件测试已经全绿，是不是就可以宣布用户已经认可？",
      "lead": "组件测试已经全绿，是不是就可以宣布用户已经认可这条提示？请先判断。这是本节学员判断，也是本章要带走的那句话。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:24px;margin:10px 0 0\">组件测试已经全绿，是不是就可以宣布用户已经认可？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:16px\"><b>不可以</b></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:12px\">测试全绿，只证明约定的检查过了，<b>不等于用户已经认可</b></div>",
      "steps": [
        "先判断",
        "不可以",
        "全绿不等于用户已经认可"
      ],
      "script": [
        "【操作提示｜停留课件 p38 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：组件测试已经全绿，是不是就可以宣布用户已经认可这条提示？",
        "【操作提示｜推进第 2 步，指向参考判断；不切窗口】\n\n不可以。",
        "【操作提示｜推进第 3 步，指向本章要带走的那句话；讲完进入 p39】\n\n测试全绿，只证明约定的检查过了，不等于用户已经认可。全绿可以证明失败测试曾经失败、后来按正确原因通过，原路径也没有明显回归；但它不能证明提示写得清楚、位置找得到、恢复过程中没有让人困惑。这些只能由人在真实界面上说出来。这句话在本节带走，不再留给 6.5。测试失败让人不舒服时，这两种做法哪样对？"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    },
    {
      "id": "p39",
      "segment": "判断与自检",
      "label": "测试失败让人不舒服时，这两种做法哪样对",
      "title": "测试失败让人不舒服时，这两种做法哪样对？",
      "lead": "测试失败让人不舒服时，请先自己判断这两种做法哪样对，再看参考结论。绿色必须来自正确原因。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>改期望或跳过这条测试，让结果先变绿</h3><div data-reveal=\"1\"><p>不对。不能靠改期望、跳过测试或吞异常制造绿色</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>先确认失败是否来自规则差距，再决定最小修复</h3><div data-reveal=\"2\"><p>对。绿色必须来自正确原因</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际失败记录</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p39 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。测试失败让人不舒服时，哪样对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，改期望或跳过这条测试，让结果先变绿。这样不对。不能靠改期望、跳过测试或吞异常制造绿色。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p40】\n\n第二种做法是，先确认失败是否来自规则差距，再决定最小修复。这样对。绿色必须来自正确原因。带着什么进入 6.5？我们把这一节要留下的东西收住。"
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
      "lead": "第 7 章从独立仓库开始，不带走这份工作区。不要把 6.5 预告成另一轮验收。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:320px;font-size:22px\">测试全绿<br>只证明约定的检查过了<br>不等于用户已经认可</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">完成 CR-01 的实现</li><li class=\"is-pass\">失败与通过证据、人工 UAT</li><li class=\"is-pass\">可追溯的计划和交付记录</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.5 应用招数</h3><p>改为分享 ChatGPT 应用技巧，不再复用这些证据做判断</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。测试全绿，只证明约定的检查过了，不等于用户已经认可。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下完成 CR-01 的实现、失败与通过证据、一次真实操作的 UAT，以及可追溯的计划和交付记录。第 7 章从独立仓库开始，不带走这份工作区。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 6.5，改为分享 ChatGPT 应用技巧，不再复用这些证据做判断。不要把 6.5 理解成另一轮验收。"
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
      "seconds": 180
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};

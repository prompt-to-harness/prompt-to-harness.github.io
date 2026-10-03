window.lesson = {
  "title": "完成首页任务：从已确认 Prompt 到可验收的首页 v0",
  "chapter": "第 1 章 · Prompt",
  "section": "01.05",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p26",
      "label": "从已确认任务，走到首页 v0",
      "title": "从已确认任务，走到首页 v0",
      "kicker": "第 1 章 · 1.5 · 核对与生成",
      "lead": "1.4 已确认 Prompt → 1.5 本地首页 v0 → 第 2 章迭代",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-done\"><b>1.3</b>工具与权限</li><li class=\"is-done\"><b>1.4</b>写清任务</li><li class=\"is-now\"><b>1.5</b>完成首页</li><li class=\"\"><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">任务输入</span><p>已确认 Prompt + 文件范围</p></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">执行条件</span><p>CLI 基线 + 工具链就绪</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">只到<b>本地首页</b>，不发布</div>",
      "steps": [
        "核对任务",
        "核对环境",
        "明确终点"
      ],
      "script": [
        "上一节我们写好并确认了首页任务，这一节把它变成一个能运行的首页 v0。先核对任务输入：已确认的 Prompt、人工批准的小计划和文件范围，都以上一节的最终版本为准，不从模糊需求重新开始。",
        "再核对执行条件：CLI 基线已经通过，Node.js、npm 和固定工具链都已就绪。Node 没准备好、版本没核验，就不能进入生成，也不要靠改源码去掩盖环境问题。",
        "今天的终点很明确：一个能启动、能构建、能审阅的本地 v0，不发布，也不追求无限美化。缺哪一项，先补齐。接下来切到实际生成，看它按什么顺序做。"
      ],
      "segment": "核对与生成",
      "seconds": 100,
      "source": "index.html#p26",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 核对任务\n\n2. 核对环境\n\n3. 明确终点"
        },
        {
          "title": "追问与预期判断",
          "text": "从已确认任务，走到首页 v0；今天交付可启动、可构建、可审阅的本地 v0，不追求无限美化。"
        },
        {
          "title": "演示分支",
          "text": "未通过时说：“目前先保留 Prompt，记录环境阻塞。接下来可以观察演示，但自己的实操不计为通过。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M01、M10、M11]；[核验 V04]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先对照上一节的最终版本，不从模糊需求重新开始。\n\nNode 未就绪、版本未核验就不能进入生成，不通过改源码掩盖环境失败。\n\n今天交付可启动、可构建、可审阅的本地 v0，不追求无限美化。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p27",
      "label": "生成顺序要能对应到文件职责",
      "title": "生成顺序要能对应到文件职责",
      "kicker": "第 1 章 · 1.5 · 核对与生成",
      "lead": "生成分三步：先建骨架（包清单、锁文件、构建配置，版本与核验一致），再写页面（index.html 与 src，实现首屏、项目区和交互），最后启动开发服务器复盘。文件分工只是示意，出现新依赖或越界就先停。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3;column-gap:52px;--node-h:250px\"><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">01</span><h3>建骨架</h3><p style=\"color:#18202B;font-weight:700\">包清单 · 锁文件 · 构建配置</p><p style=\"margin-top:8px\">版本已核验</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">02</span><h3>写页面</h3><p style=\"color:#18202B;font-weight:700\">index.html · src/</p><p style=\"margin-top:8px\">首屏 · 项目区 · 交互</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">03</span><h3>运行复盘</h3><p style=\"color:#18202B;font-weight:700\">开发服务器</p><p style=\"margin-top:8px\">越界先停</p></div></div>",
      "steps": [
        "观察骨架",
        "观察实现",
        "回到清单"
      ],
      "script": [
        "生成大致分三步。第一步建骨架：包清单、锁文件和构建配置，技术栈是 React、TypeScript 和 Vite，版本要和核验过的一致。",
        "第二步写页面：index.html 和 src 目录，实现首屏、项目区和已确认的交互。生成时请指认入口、组件和样式分别在哪个文件；这里的分工只是示意，不代表 Starter 里已经有这些文件。",
        "第三步运行复盘：启动开发服务器，看实际文件。出现新依赖或者越界，先停下来；setup-check 要保持独立，不能进入正式应用。生成完成，我们切到页面去看。"
      ],
      "segment": "核对与生成",
      "seconds": 320,
      "source": "index.html#p27",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 观察骨架\n\n2. 观察实现\n\n3. 回到清单"
        },
        {
          "title": "追问与预期判断",
          "text": "生成顺序要能对应到文件职责；生成后按同一清单复盘；setup-check 不能进入正式应用或发布产物。"
        },
        {
          "title": "演示分支",
          "text": "等待太久时说：“这里有实际等待，后续画面将跳到完成时刻。”若转回放明确标来源。失败时说：“当前失败在这一步，先保留日志并定位，不让它无限改配置重试。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M10、M11]；[核验 V01、V04]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先给观察清单：技术栈和范围是否匹配、内容是否对应、额外动作是否停止。再切到实际生成。\n\n指认入口、组件和样式文件，别把职责示意当作 Starter 已有文件。\n\n生成后按同一清单复盘；setup-check 不能进入正式应用或发布产物。"
        }
      ],
      "notes": "<p>预算 320 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p28",
      "label": "切到页面：看内容、点交互、查错误",
      "title": "切到页面：看内容、点交互、查错误",
      "kicker": "第 1 章 · 1.5 · 运行与检查",
      "lead": "切到真实开发页面前，先拿好三项清单：内容逐项对照自己的 Prompt；真的点一下“查看项目”，确认跳到本页项目区；打开控制台看有没有明显报错。页面能打开不等于全部通过。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到页面</h3><p>PPT 暂停，打开本地首页</p><span class=\"p-env\">浏览器：首页 v0</span><span class=\"p-env\">控制台</span></div><ol class=\"p-watch\"><li data-reveal=\"0\">内容<small>对照 Prompt</small></li><li data-reveal=\"1\">行为<small>点“查看项目”</small></li><li data-reveal=\"2\">错误<small>看控制台</small></li></ol></div>",
      "steps": [
        "先找内容",
        "操作交互",
        "查看错误"
      ],
      "script": [
        "切到页面之前，先给一张清单。第一项是内容：示例同学、指定简介、学习笔记和描述，逐项对照你自己的 Prompt。",
        "第二项是行为：真的点一下“查看项目”，确认它跳到本页项目区，项目卡不跳转。光看外观，验收不了行为。",
        "第三项是错误：打开控制台，看有没有明显报错，记下期望、实际和截图。页面能打开，不等于全部通过。好，切到真实的开发页面。"
      ],
      "segment": "运行与检查",
      "seconds": 150,
      "source": "index.html#p28",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先找内容\n\n2. 操作交互\n\n3. 查看错误"
        },
        {
          "title": "追问与预期判断",
          "text": "切到页面：看内容、点交互、查错误；保留实际控制台记录；有错误先定位，不把页面能打开当作全部通过。"
        },
        {
          "title": "演示分支",
          "text": "启动失败时口播：“浏览器检查还没开始，当前是运行阻塞。”页面符合标准时直接记录，不为制造调试戏剧性追加故障。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n给观察清单后切到真实开发页面，逐项对照，不把这页示意当运行结果。\n\n真的点一次已要求的按钮和链接，光看外观不能验收行为。\n\n保留实际控制台记录；有错误先定位，不把页面能打开当作全部通过。"
        }
      ],
      "notes": "<p>预算 150 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p28-review",
      "label": "切回来，用同一张清单复盘",
      "title": "切回来，用同一张清单复盘",
      "kicker": "第 1 章 · 1.5 · 运行与检查",
      "lead": "切回来，用同一张清单复盘：内容要有对应 Prompt 的运行截图，行为要有实际点击结果，错误要有控制台记录。找不到证据的项不打勾，单独列出。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1.1fr;gap:36px\"><ol class=\"p-watch\"><li class=\"is-done\" data-reveal=\"0\">内容<small>运行截图</small></li><li class=\"is-done\" data-reveal=\"1\">行为<small>点击结果</small></li><li class=\"is-done\" data-reveal=\"2\">错误<small>控制台记录</small></li></ol><div class=\"p-box is-dashed\" data-role=\"ink\" data-reveal=\"0\" style=\"align-self:start\"><span class=\"p-tag\" data-role=\"us\">同一张清单</span><p>没证据的项<b>不打勾</b></p></div></div>",
      "steps": [
        "内容复盘",
        "行为复盘",
        "错误复盘"
      ],
      "script": [
        "切回来，用同一张清单复盘。内容这一项，现在手里应该有逐项对应 Prompt 的运行截图，请指认一条标准和它的截图。",
        "行为这一项，要有实际点击的结果，和期望对照。缺操作证据，就回去补查。",
        "错误这一项，留下控制台记录，没解决的问题单独列出。找不到证据的项不打勾，单列说明。页面看完了，接下来做工程上的检查。"
      ],
      "segment": "运行与检查",
      "seconds": 70,
      "source": "index.html#p28-review",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 内容复盘\n\n2. 行为复盘\n\n3. 错误复盘"
        },
        {
          "title": "追问与预期判断",
          "text": "切回来，用同一张清单复盘；记录实际结果，再进入工程检查。此处没有预填通过状态。"
        },
        {
          "title": "演示分支",
          "text": "启动失败时口播：“浏览器检查还没开始，当前是运行阻塞。”页面符合标准时直接记录，不为制造调试戏剧性追加故障。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n请指认一条内容标准和对应截图。\n\n把真实点击结果写清楚，缺少操作证据就补查。\n\n记录实际结果，再进入工程检查。此处没有预填通过状态。"
        }
      ],
      "notes": "<p>预算 70 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p29",
      "label": "页面能打开，构建也能通过吗？",
      "title": "页面能打开，构建也能通过吗？",
      "kicker": "第 1 章 · 1.5 · 工程证据",
      "lead": "工程检查从构建开始：在真实项目里运行 npm run build。通过就记下退出状态和完整输出；失败就保留报错，分清环境问题还是实现问题，修复后重建。构建通过不能替代浏览器里的行为验证。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" style=\"grid-column:2;padding:10px\"><div class=\"p-term\" data-copy=\"npm run build\" style=\"text-align:left\">$ npm run build</div></div><div class=\"p-fork\" style=\"grid-column:1/4\"><div class=\"l\" data-reveal=\"1\"><span>通过</span></div><div class=\"r\" data-reveal=\"2\"><span>失败</span></div></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-row:3;grid-column:1\"><h3>通过证据</h3><p>退出状态 + 完整输出</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-row:3;grid-column:3\"><h3>失败去向</h3><p>保留报错 · 修复后重建</p></div></div>",
      "steps": [
        "执行检查",
        "保存通过记录",
        "处理失败"
      ],
      "script": [
        "第一项工程检查：在真实项目里运行 npm run build。教学页面上不会伪造终端的成功输出，要看你自己的结果。",
        "通过的话，记下实际的退出状态和完整输出，以及版本和执行位置。构建成功只说明这一项通过，不能替代浏览器里的行为验证。",
        "失败的话，保留报错，判断是环境问题还是实现问题，修复后重新构建；范围不明就先停，不能为了赶进度跳过构建。构建通过了，还要看懂代码。"
      ],
      "segment": "工程证据",
      "seconds": 80,
      "source": "index.html#p29",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 执行检查\n\n2. 保存通过记录\n\n3. 处理失败"
        },
        {
          "title": "追问与预期判断",
          "text": "页面能打开，构建也能通过吗？；失败就保留输出，范围不明时停下。不能为了赶进度跳过构建。"
        },
        {
          "title": "演示分支",
          "text": "构建失败则先记录失败；发现无法解释的候选代码时说：“这部分还不能接受，先缩小或解释清楚，再验证。”不把一次人工隐私检查说成全面安全证明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。上述检查均待实操，不预填“通过”。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n在真实项目运行构建，不在教学幻灯片伪造终端成功输出。\n\n构建成功只说明这条检查通过，不能替代浏览器行为验证。\n\n失败就保留输出，范围不明时停下。不能为了赶进度跳过构建。"
        }
      ],
      "notes": "<p>预算 80 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p29-code",
      "label": "你能指出这些代码分别做什么吗？",
      "title": "你能指出这些代码分别做什么吗？",
      "kicker": "第 1 章 · 1.5 · 工程证据",
      "lead": "每个人生成的代码不同，所以这里不放固定代码，而是回到自己的源码回答三个问题：index.html 怎样接到应用入口、首屏和项目区由哪些组件渲染、样式从哪里加载。每题写下文件、行号和一句话。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到你的源码</h3><p>每个人生成的代码不同，看自己的那一份</p><span class=\"p-env\">编辑器：首页 v0 项目</span><span class=\"p-env\">可以请 Agent 解释</span></div><div style=\"display:grid;gap:14px;align-content:start\"><ol class=\"p-watch\"><li data-reveal=\"0\">页面入口<small>index.html 怎样接到应用入口？</small></li><li data-reveal=\"1\">主要组件<small>首屏和项目区由哪些组件渲染？</small></li><li data-reveal=\"2\">样式入口<small>样式从哪里加载？影响了非目标内容吗？</small></li></ol><div class=\"p-bar is-light\" data-reveal=\"2\">每题写下：<b>文件 · 行号 · 一句话</b><br>看不懂先要求解释或拆小</div></div></div>",
      "steps": [
        "指认入口",
        "解释组件",
        "追问影响"
      ],
      "script": [
        "切到你自己的源码，回答三个问题。每个人生成的代码都不一样，所以不看老师的，看自己的那一份。第一，实际的 index.html 是怎样接到应用入口的？请自己指认调用关系，而不是背老师的文件名。",
        "第二，首屏和项目区是由哪些组件渲染的？可以让 Agent 解释，但解释完要回到代码里核对，自己说清主要结构。",
        "第三，样式从哪里加载，有没有影响非目标内容？每个问题都写下文件、行号和一句话说明。看不懂的改动，先要求解释或者拆小，不能只复述 AI 的结论。代码看懂了，再查范围和产物。"
      ],
      "segment": "工程证据",
      "seconds": 80,
      "source": "index.html#p29-code",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 指认入口\n\n2. 解释组件\n\n3. 追问影响"
        },
        {
          "title": "追问与预期判断",
          "text": "你能指出这些代码分别做什么吗？；不理解改动就先要求解释或拆小，不能只复述 AI 的结论。"
        },
        {
          "title": "演示分支",
          "text": "构建失败则先记录失败；发现无法解释的候选代码时说：“这部分还不能接受，先缩小或解释清楚，再验证。”不把一次人工隐私检查说成全面安全证明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。上述检查均待实操，不预填“通过”。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n切到实际源码，由学员指认调用关系，不背教师文件名。\n\n让 Agent 解释后仍要对照代码，学员说清主要结构。\n\n不理解改动就先要求解释或拆小，不能只复述 AI 的结论。"
        }
      ],
      "notes": "<p>预算 80 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p29-diff",
      "label": "范围和产物，要单独检查",
      "title": "范围和产物，要单独检查",
      "kicker": "第 1 章 · 1.5 · 工程证据",
      "lead": "范围和产物要单独检查：完整改动对照批准清单和初始状态，包括未跟踪的新文件，不覆盖已有工作；构建产物里不能有 setup-check、secret 或私人资料。页面、build、代码理解、Diff、产物五类证据互不替代。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">完整改动</span><p>对照批准清单 · <b>不覆盖已有工作</b></p></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">实际产物</span><p>无 setup-check · 无 secret 与私人资料</p></div></div><div data-reveal=\"2\"><p class=\"p-sub\" style=\"margin:0 0 8px\">不能互相替代</p><div class=\"p-chain\" style=\"font-size:21px\"><span>页面</span><i>·</i><span>build</span><i>·</i><span>代码理解</span><i>·</i><span>Diff</span><i>·</i><span>产物</span></div></div>",
      "steps": [
        "检查范围",
        "检查产物",
        "汇总证据"
      ],
      "script": [
        "先查完整改动：对照批准的文件清单和初始状态，看所有变更文件，包括还没被 Git 跟踪的新文件。多出来的文件要说明原因，也不能覆盖用户已有的工作。",
        "再查实际产物：应用和构建产物里不能有 setup-check，源码、产物和待提交的内容里也不能有 secret 和私人资料。要查实际输出和引用关系，不能看目录名就判通过。",
        "到这里我们有五类证据：页面、build、代码理解、Diff 和产物。它们互相不能替代，每一份都要接到对应的完成标准上。证据齐了，来判断几种结果。"
      ],
      "segment": "工程证据",
      "seconds": 100,
      "source": "index.html#p29-diff",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 检查范围\n\n2. 检查产物\n\n3. 汇总证据"
        },
        {
          "title": "追问与预期判断",
          "text": "范围和产物，要单独检查；把每份证据接到完成标准，再判断是否可接受。"
        },
        {
          "title": "演示分支",
          "text": "构建失败则先记录失败；发现无法解释的候选代码时说：“这部分还不能接受，先缩小或解释清楚，再验证。”不把一次人工隐私检查说成全面安全证明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。上述检查均待实操，不预填“通过”。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n同时检查已跟踪与未跟踪文件。多出的文件要解释，不能只挑一段好看的 Diff。\n\n查实际构建输出和引用关系，不能因为目录名看起来独立就直接判通过。\n\n把每份证据接到完成标准，再判断是否可接受。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p30",
      "label": "先判断结果，再保存检查点",
      "title": "先判断结果，再保存检查点",
      "kicker": "第 1 章 · 1.5 · 判断与交付",
      "lead": "练习：判断三种候选结果。页面正确但没有构建记录，暂不接受，先补跑构建；构建通过但改了无关文件，修正越界、保留原有工作再复验；各类证据都符合标准，核对提交范围后保存检查点。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 三种结果，各怎么处理？</span><div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">A · 页面正确，没有构建记录</p><div data-reveal=\"1\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">暂不接受</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">补跑构建，失败则记录并处理</p></div></div><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">B · 构建通过，改了无关文件</p><div data-reveal=\"2\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"agent\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">修正越界</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">修正本次越界，保留原有工作，再复验</p></div></div><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">C · 各类证据都符合标准</p><div data-reveal=\"3\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"ok\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">可以接受</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">核对提交范围后保存检查点</p></div></div></div>",
      "steps": [
        "暂停判断",
        "A · 页面正确，没有构建记录",
        "B · 构建通过，改了无关文件",
        "C · 各类证据都符合标准"
      ],
      "script": [
        "请暂停，下面三个都是候选的教学结果。逐个给出结论，并指出缺什么证据。",
        "A，页面正确，但没有构建记录：暂不接受。补跑构建，失败就记录并处理。",
        "B，构建通过，但改了无关文件：修正本次越界，保留原有工作，再复验。",
        "C，各类证据都符合标准：可以接受，核对提交范围之后，保存检查点。"
      ],
      "segment": "判断与交付",
      "seconds": 90,
      "source": "index.html#p30",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 暂停判断\n\n2. A · 页面正确，没有构建记录\n\n3. B · 构建通过，改了无关文件\n\n4. C · 各类证据都符合标准"
        },
        {
          "title": "追问与预期判断",
          "text": "先判断结果，再保存检查点；可以接受；核对提交范围后保存检查点。"
        },
        {
          "title": "演示分支",
          "text": "使用参考快照时口播：“这是参考恢复状态，我实际完成的部分记录在这里。”不能把参考作者的构建结果记为本人实测。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M11]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n三个都是候选教学结果。逐个给结论并指出缺什么证据。\n\n暂不接受；补跑构建，失败则记录并处理。\n\n修正本次越界，保留原有工作，再复验。\n\n可以接受；核对提交范围后保存检查点。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p30-save",
      "label": "检查通过，才保存本地基线",
      "title": "检查通过，才保存本地基线",
      "kicker": "第 1 章 · 1.5 · 判断与交付",
      "lead": "所有检查通过、待提交内容与批准范围一致，才保存本地提交并创建 ch01-prompt-baseline 这个 tag。提交和 tag 只用来定位版本，不证明质量；本节不推送、不发布，证据不全就停在待补做。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-num\">01</span><h3>检查全部通过</h3><p>范围一致</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-num\">02</span><h3>保存本地提交</h3></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-num\">03</span><h3>创建 tag</h3><p class=\"p-mono\" style=\"font-size:18px\">ch01-prompt-baseline</p></div></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:12px\"><span class=\"p-tag\" data-role=\"gate\">停止条件</span><p>无法验证 · 无法理解 · 需越界 → <b>不标通过</b></p></div>",
      "steps": [
        "确认范围",
        "保存定位",
        "保留阻塞"
      ],
      "script": [
        "保存检查点的前提，是所有检查都通过，而且待提交的内容和批准范围一致。先审阅待提交的文件，不要全选暂存，把无关变化一起混进去。",
        "然后保存本地提交，再创建 ch01-prompt-baseline 这个 tag。提交和 tag 只是给版本定位，不能自动证明质量；这一节也不推送、不发布。",
        "如果无法验证、无法理解，或者需要越界，就记录阻塞，停在待补做，不能为了拿到 tag 假装通过。最后看一下，这一节到底交付了什么。"
      ],
      "segment": "判断与交付",
      "seconds": 90,
      "source": "index.html#p30-save",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 确认范围\n\n2. 保存定位\n\n3. 保留阻塞"
        },
        {
          "title": "追问与预期判断",
          "text": "检查通过，才保存本地基线；证据不全就停在待补做，不能为了得到 tag 假装通过。"
        },
        {
          "title": "演示分支",
          "text": "使用参考快照时口播：“这是参考恢复状态，我实际完成的部分记录在这里。”不能把参考作者的构建结果记为本人实测。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M11]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先审阅待提交文件，不用全选暂存掩盖无关变化。\n\n提交和 tag 只定位版本，不能自动证明质量通过；本节不推送和发布。\n\n证据不全就停在待补做，不能为了得到 tag 假装通过。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p31",
      "label": "交付的是源码，也是一条证据链",
      "title": "交付的是源码，也是一条证据链",
      "kicker": "第 1 章 · 1.5 · 判断与交付",
      "lead": "交付的是三环相扣的证据链：任务与实现（Prompt、源码、组件说明），验证与决定（截图、build、Diff、Review），版本与后续（提交、tag、未决事项）。任一环断开，交付就说不清。v0 仍是原型，第 2 章继续迭代。",
      "html": "<style>.x-ch{display:flex;justify-content:center;align-items:center;margin:14px 0 6px}.x-ch-l{position:relative;width:380px;height:190px;margin:0 -34px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.x-ch-ring{position:absolute;inset:0;border:16px solid var(--c);border-radius:95px;filter:url(#p-rough);box-shadow:inset 0 0 0 3px rgba(255,255,255,.35)}.x-ch-l:nth-child(2) .x-ch-ring{border-width:16px;transform:translateY(0)}.x-ch-l h3{position:relative;font:400 28px/1.2 var(--p-title);color:var(--ct);margin:0 0 6px}.x-ch-l p{position:relative;margin:0;font-size:19px;color:#18202B;max-width:280px}.x-ch-break{display:flex;align-items:center;gap:14px;justify-content:center;margin-top:18px}.x-ch-break .bk{display:flex;align-items:center}.x-ch-break .bk i{display:block;width:54px;height:30px;border:7px solid #D9481C;border-radius:16px}.x-ch-break .bk i:first-child{transform:rotate(-14deg) translateX(4px)}.x-ch-break .bk i:last-child{transform:rotate(18deg) translateX(-4px)}.x-ch-break .bk b{font:400 26px/1 var(--p-title);color:#D9481C;margin:0 6px}</style><div class=\"x-ch\"><div class=\"x-ch-l\" data-role=\"agent\" data-reveal=\"0\" style=\"z-index:3\"><div class=\"x-ch-ring\"></div><h3>任务与实现</h3><p>Prompt · 源码 · 组件说明</p></div><div class=\"x-ch-l\" data-role=\"ok\" data-reveal=\"1\" style=\"z-index:2\"><div class=\"x-ch-ring\"></div><h3>验证与决定</h3><p>截图 · build · Diff · Review</p></div><div class=\"x-ch-l\" data-role=\"tool\" data-reveal=\"2\" style=\"z-index:1\"><div class=\"x-ch-ring\"></div><h3>版本与后续</h3><p>提交 · tag · 未决事项</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:20px;display:flex;align-items:center;gap:16px\"><span class=\"x-ch-break\" style=\"margin:0\"><span class=\"bk\"><i></i><b>⁄</b><i></i></span></span><span>任何一环断开，交付就<b>说不清</b></span></div>",
      "steps": [
        "交接任务",
        "交接证据",
        "下一章"
      ],
      "script": [
        "交付的不只是源码，还是一条证据链。第一环是任务与实现：最终的 Prompt、源码、入口和主要组件说明，请说明它们怎样一一对应。",
        "第二环是验证与决定：截图、构建输出、Diff 和 Review 结论。请同伴抽查一条完成标准，看能不能沿着证据找到实际结果。",
        "第三环是版本与后续：本地提交、ch01-prompt-baseline，还有没解决的事项。任何一环断开，这份交付就说不清。v0 还只是原型，第 2 章会从真实页面出发继续迭代；在那之前，下一节先总结一下权限的取舍。"
      ],
      "segment": "判断与交付",
      "seconds": 120,
      "source": "index.html#p31",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 交接任务\n\n2. 交接证据\n\n3. 下一章"
        },
        {
          "title": "追问与预期判断",
          "text": "交付的是源码，也是一条证据链；v0 仍是原型。第 2 章将从真实页面发现问题、建立反馈基线；下一节先总结权限取舍。"
        },
        {
          "title": "演示分支",
          "text": "未完成 v0 时读：“接下来可以参加权限判断，但首页交接仍标待补做。”不跳过缺失门禁。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M11]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n请拿出最终任务和实现，说明二者如何对应。\n\n让同伴抽查一条完成标准，能否沿证据看到实际结果。\n\nv0 仍是原型。第 2 章将从真实页面发现问题、建立反馈基线；下一节先总结权限取舍。"
        }
      ],
      "notes": "<p>预算 120 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    }
  ],
  "segments": [
    {
      "label": "核对与生成",
      "seconds": 420
    },
    {
      "label": "运行与检查",
      "seconds": 220
    },
    {
      "label": "工程证据",
      "seconds": 260
    },
    {
      "label": "判断与交付",
      "seconds": 300
    }
  ]
};

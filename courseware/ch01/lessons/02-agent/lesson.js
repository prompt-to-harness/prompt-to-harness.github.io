window.lesson = {
  "title": "Agent 执行机制与 AI 协作基础",
  "chapter": "第 1 章 · Prompt",
  "section": "01.02",
  "summary": "复盘 1.1 欢迎语任务；六段主线，先证据后概念，15 分钟编排预算。",
  "segments": [
    {
      "label": "执行循环",
      "seconds": 180
    },
    {
      "label": "信息与术语",
      "seconds": 180
    },
    {
      "label": "判断信息",
      "seconds": 180
    },
    {
      "label": "失败与纠正",
      "seconds": 120
    },
    {
      "label": "课程路线",
      "seconds": 90
    },
    {
      "label": "路标与收尾",
      "seconds": 150
    }
  ],
  "scenes": [
    {
      "id": "p09",
      "label": "把小改动拆开看",
      "title": "把一次小改动拆开看",
      "lead": "1.1 做过一次 → 1.2 拆开看 → 1.3 理解权限",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<ol class=\"p-map\" data-reveal=\"0\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-now\"><b>1.2</b>拆开执行过程</li><li><b>1.3</b>工具与权限</li><li><b>1.4</b>写清任务</li><li><b>1.5</b>完成首页</li><li><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1.05fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">原文</span><p class=\"p-big\" style=\"font-weight:500\">你好，欢迎来到我的练习页面。</p><div data-reveal=\"1\" style=\"margin-top:10px\"><span class=\"p-pencil\">这次只改这一句 ↓</span><p class=\"p-big\" style=\"color:#2A2380\">你好，欢迎来到 Vibe Coding 课堂！</p></div></div><div class=\"p-join\" data-reveal=\"1\"><i class=\"p-arrow\"></i></div><div style=\"display:grid;gap:14px;align-content:center\" data-reveal=\"1\"><div class=\"p-chain\" style=\"flex-direction:column;align-items:flex-start;font-size:24px\"><span>拿到什么</span><span>做了什么</span><span>凭什么相信</span></div></div></div><p class=\"source-note\">原文来自 Starter；目标沿用 1.1。此处为任务对照，不是运行结果。</p>",
      "steps": [
        "回看原欢迎语，抛出“谁改了文件”",
        "圈定目标，说明本节只复盘已有任务"
      ],
      "script": [
        "上一节改了一句欢迎语。你发出一句话，谁真正改了文件？今天把过程拆开看。",
        "请对照自己的记录，找信息、动作和结果。没有记录时先观察教学示意，实操仍需补做。"
      ],
      "segment": "执行循环",
      "seconds": 20,
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 回看原欢迎语，抛出“谁改了文件”\n\n2. 圈定目标，说明本节只复盘已有任务"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 20 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09"
    },
    {
      "id": "p09-request",
      "label": "请求与结果",
      "title": "“准备读取”，还不是“已经读到”",
      "lead": "“准备读取文件”只说明 Agent 提出了动作，不代表已经知道文件内容；只有检查实际的工具返回，才知道读到了什么，或者是否报错。修改和测试同理：准备做不等于已做成。",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><div class=\"p-head\"><h3>Agent · 提出动作</h3><span class=\"p-tag\" data-role=\"agent\">请求</span></div><p class=\"p-big\">准备读取</p><p class=\"p-mono\" style=\"font-size:21px\">setup-check/index.html</p></div><div class=\"p-join\" data-reveal=\"1\"><span>工具执行</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><div class=\"p-head\"><h3>工具返回 · 文件内容</h3><span class=\"p-tag\" data-role=\"ctx\">返回</span></div><div class=\"p-code\"><div class=\"p-lines\">&lt;h1 id=\"welcome-message\"&gt;<span class=\"hl\">  你好，欢迎来到我的练习页面。</span>&lt;/h1&gt;</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:4px\">提出动作 ≠ 执行成功；下一步要看<b>返回</b>。</div><p class=\"source-note\">请求与返回为教学示意；请对应 1.1 中真实的两条记录。</p>",
      "steps": [
        "只看请求，停顿 5 秒",
        "展示返回，圈出实际欢迎语",
        "比较请求与结果，归纳证据边界"
      ],
      "script": [
        "现在只看左边：“准备读取文件”。先停五秒。能不能凭这句话判断，它已经知道文件内容？不能，这只说明它提出了动作。",
        "右边展示的是返回内容的教学示意。只有检查实际工具返回，我们才知道读到了什么，或者读取是否报错。请在自己的记录里找到请求和返回，不要把它们当成同一件事。",
        "同样的区别也适用于修改和测试。准备修改不等于已经改对，准备测试不等于测试通过。接下来把请求、执行和返回放回整个任务。"
      ],
      "segment": "执行循环",
      "seconds": 50,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 只看请求，停顿 5 秒\n\n2. 展示返回，圈出实际欢迎语\n\n3. 比较请求与结果，归纳证据边界"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 50 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09-request"
    },
    {
      "id": "p09-loop",
      "label": "五节点循环",
      "title": "下一步，从上一步的返回里来",
      "lead": "一次任务是一个循环：人给出任务输入，Agent 提出动作，工具执行，返回文件内容或报错，Agent 再依据返回决定下一步——修改、再读或停止。人负责定目标、给授权、验结果。",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<div class=\"p-flow\" style=\"--n:5\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\" data-node=\"input\"><span class=\"p-num\">01</span><h3>任务输入</h3><p>只改指定欢迎语</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\" data-node=\"action\" data-edge=\"input:action\"><span class=\"p-num\">02</span><h3>提出动作</h3><p>请求读取目标文件</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\" data-node=\"tool\" data-edge=\"action:tool\"><span class=\"p-num\">03</span><h3>工具执行</h3><p>执行文件读取</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"2\" data-node=\"result\" data-edge=\"tool:result\"><span class=\"p-num\">04</span><h3>结果返回</h3><p>文件内容或报错</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"3\" data-node=\"next\" data-edge=\"result:next\"><span class=\"p-num\">05</span><h3>下一步</h3><p>修改、再读或停止</p></div><div class=\"p-back\" data-role=\"agent\" data-reveal=\"4\" data-edge=\"next:action\" style=\"grid-column:2/6\"><span class=\"p-back-label\">继续：依据返回，提出新动作</span></div><div class=\"p-exit\" data-role=\"us\" data-reveal=\"4\" data-edge=\"next:end\" style=\"grid-column:5;grid-row:2/4\"><div class=\"p-node\" data-role=\"us\" data-node=\"end\" style=\"padding:8px 10px\"><h3 style=\"margin:0;font-size:23px\">退出循环</h3><p style=\"font-size:18px\">完成或停止</p></div></div><div class=\"p-bar is-light\" data-reveal=\"4\" style=\"grid-column:1/4;grid-row:3;margin-top:54px\">人：定目标 · 给授权 · 验结果</div></div>",
      "steps": [
        "先看目标与范围",
        "展开提出动作和工具执行",
        "检查返回：内容或报错",
        "依据返回决定下一步",
        "显示继续回路、退出条件与人的位置"
      ],
      "script": [
        "起点是任务输入。我们指定目标欢迎语、文件范围和完成标准。这些要求决定了任务要往哪里走。",
        "Agent 根据已有信息提出动作，例如请求读文件。工具负责执行具体读取。这里不能跳过执行，直接把请求当成结果。",
        "执行后会返回文件内容，也可能返回报错。请对应自己记录中的一次返回。报错也是信息，但不能被当成读取成功。",
        "有了返回，Agent 才继续提出修改、补充读取或提问。修改之后还要看新的返回与检查结果，不是走到第五格就自动完成。",
        "现在看回线：需要继续就回到提出动作；完成或需要停止时退出。人确认目标、范围和授权，并依据结果决定能否接受。这里不表示每个工具动作都会逐次弹出确认框。"
      ],
      "segment": "执行循环",
      "seconds": 80,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 先看目标与范围\n\n2. 展开提出动作和工具执行\n\n3. 检查返回：内容或报错\n\n4. 依据返回决定下一步\n\n5. 显示继续回路、退出条件与人的位置"
        },
        {
          "title": "教学边界与材料",
          "text": "原 P09 五节点、继续回路、完成或停止出口均保留。Model 内部推理不可见，不为其补画隐藏步骤。"
        }
      ],
      "notes": "<p>预算 80 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09-loop"
    },
    {
      "id": "p09-agent",
      "label": "Model 与 Agent",
      "title": "模型提供能力，Agent 组织任务",
      "lead": "Model 提供生成内容和作出判断的能力；Agent 把模型、上下文和工具组织进执行循环，读文件、拿返回、继续修改就是例子。模型输出有不确定性，任务是否完成要看结果和范围。",
      "kicker": "第 1 章 · 1.2 · 执行循环",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.8fr auto 1.35fr\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">Model · 模型</span><p class=\"p-big\">生成内容<br>作出判断</p></div><div class=\"p-join\" data-reveal=\"1\"><span>放进循环</span><i class=\"p-arrow\"></i></div><div class=\"p-set is-solid\" data-role=\"agent\" data-reveal=\"1\"><h3>Agent · 智能体</h3><div class=\"p-grid\" style=\"--n:3;gap:10px\"><div class=\"p-box is-soft\" data-role=\"agent\" style=\"padding:10px 12px;text-align:center\"><h3 style=\"font-size:23px;margin:0\">模型</h3></div><div class=\"p-box is-soft\" data-role=\"ctx\" style=\"padding:10px 12px;text-align:center\"><h3 style=\"font-size:23px;margin:0\">上下文</h3></div><div class=\"p-box is-soft\" data-role=\"tool\" style=\"padding:10px 12px;text-align:center\"><h3 style=\"font-size:23px;margin:0\">工具</h3></div></div><p style=\"margin:12px 0 0;font-size:21px;color:#2A2380\">↻ 依据返回，继续推进任务</p></div></div><div class=\"p-bar\" data-reveal=\"2\">模型输出有<b>不确定性</b>，需要用证据验证。</div>",
      "steps": [
        "说明模型的能力",
        "用刚才循环解释 Agent",
        "一句话说明不确定性"
      ],
      "script": [
        "Model 是模型，提供生成内容和作出判断的能力。这里不展开模型结构。",
        "Agent 把模型、上下文、工具组织进执行循环。读文件、拿到返回、继续修改，就是具体例子。",
        "模型输出有不确定性，需要证据验证。任务完成要看结果和范围是否满足要求。"
      ],
      "segment": "执行循环",
      "seconds": 30,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 说明模型的能力\n\n2. 用刚才循环解释 Agent\n\n3. 一句话说明不确定性"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 30 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p09-agent"
    },
    {
      "id": "p10",
      "label": "给记录贴标签",
      "title": "术语，就贴在刚才的记录上",
      "lead": "术语贴在具体片段上记：你发出的任务说明是 Prompt；读取、编辑、运行的入口是 Tool；当前供判断的全部信息——要求、已读内容、工具返回和反馈——是 Context，Prompt 也在其中；Context Window 是一次能处理的容量边界。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<div class=\"p-log is-tagged\" data-reveal=\"0\" style=\"grid-template-columns:96px minmax(0,1fr) 270px 260px;grid-template-rows:repeat(3,76px);margin-top:4px\"><span class=\"p-who\" data-role=\"us\" style=\"grid-area:1/1\">你</span><div class=\"p-said\" data-role=\"us\" style=\"grid-area:1/2\">“只改指定欢迎语，其他内容和布局保留。”</div><div class=\"p-sticker\" data-role=\"us\" data-reveal=\"0\" style=\"grid-area:1/3\"><b>Prompt</b><span>目标、约束、完成标准</span></div><span class=\"p-who\" data-role=\"agent\" style=\"grid-area:2/1\">Agent</span><div class=\"p-said\" data-role=\"tool\" style=\"grid-area:2/2\">调用读取：<code>setup-check/index.html</code></div><div class=\"p-sticker\" data-role=\"tool\" data-reveal=\"1\" style=\"grid-area:2/3\"><b>Tool</b><span>读取、编辑、运行的入口</span></div><span class=\"p-who\" data-role=\"ctx\" style=\"grid-area:3/1\">返回</span><div class=\"p-said\" data-role=\"ctx\" style=\"grid-area:3/2\"><code>&lt;h1&gt;你好，欢迎来到我的练习页面。&lt;/h1&gt;</code></div><div class=\"p-sticker is-brace\" data-role=\"ctx\" data-reveal=\"2\" style=\"grid-area:1/4/4/5\"><b>Context</b><span>本轮供判断的全部信息<br>（含 Prompt）</span></div><div class=\"p-frame\" data-role=\"ctx\" data-reveal=\"3\"><span>Context Window · 一次能处理的容量边界</span></div></div><p class=\"source-note\" style=\"margin-top:22px\">记录为教学示意，请对照 1.1 中本人的真实记录。</p>",
      "steps": [
        "把用户要求标为 Prompt",
        "把动作入口标为 Tool",
        "把供判断的信息标为 Context",
        "单独解释 Context Window：一次处理的容量边界"
      ],
      "script": [
        "不要先背定义。先找到你发给 AI 的任务说明，这就是 Prompt。我们在 1.4 才练习怎样写好目标、约束和完成标准，这里先认出它。",
        "再找到读取或编辑动作使用的入口，这叫 Tool，也就是工具。Agent 提出动作，工具执行动作，返回告诉我们具体发生了什么。",
        "Context 是当前供判断使用的信息，包括要求、已读取内容、工具返回和反馈；Prompt 也是其中一部分。",
        "Context Window 是模型一次能够处理的信息容量边界。简单区分：前者是信息，后者限制一次能处理多少信息。后面用图示继续解释。"
      ],
      "segment": "信息与术语",
      "seconds": 55,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 把用户要求标为 Prompt\n\n2. 把动作入口标为 Tool\n\n3. 把供判断的信息标为 Context\n\n4. 单独解释 Context Window：一次处理的容量边界"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 55 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10"
    },
    {
      "id": "p10-context",
      "label": "可访问与已读取",
      "title": "文件在项目里，不等于已经读过",
      "lead": "文件存在、工具能访问，不等于这次任务读过它。只有经工具读取、返回内容核对过的信息，才算当前结论的依据。指认一条 AI 结论时，要说出它依据哪段要求或哪次返回，找不到就记为“依据不足”。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto .9fr auto 1fr\"><div class=\"p-set\" data-role=\"ink\" data-reveal=\"0\" data-node=\"repo\"><h3>项目中可访问</h3><div class=\"p-items\"><div class=\"p-item is-mono\">setup-check/index.html<span class=\"p-mark\" data-role=\"tool\" data-reveal=\"1\">已读取</span></div><div class=\"p-item is-mono\">README.md</div><div class=\"p-item\">其他页面与样式</div></div><p class=\"p-foot\" style=\"color:#A8350F\">文件存在 ≠ 有读取证据</p></div><div class=\"p-join\" data-reveal=\"1\" data-edge=\"repo:read\"><span>选择</span><i class=\"p-arrow\"></i></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\" data-node=\"read\" style=\"align-self:center;grid-row:auto\"><h3>工具读取</h3></div><div class=\"p-join\" data-reveal=\"1\" data-edge=\"read:context\"><span>纳入</span><i class=\"p-arrow\"></i></div><div class=\"p-set is-solid\" data-role=\"ctx\" data-reveal=\"2\" data-node=\"context\"><h3>当前有依据的信息</h3><div class=\"p-items\"><div class=\"p-item\">你的目标与约束</div><div class=\"p-item is-picked\" data-role=\"tool\">已读取的欢迎语</div><div class=\"p-item\">工具返回与反馈</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\">结论依据<b>哪次返回</b>？</div>",
      "steps": [
        "列出可访问的项目文件",
        "只让有读取动作的文件经过工具",
        "检查纳入的信息，不替缺失证据补事实"
      ],
      "script": [
        "项目里可能有许多文件。文件存在、工具可以访问，并不等于这次任务已经读取了它。左边列的是可能访问的范围。",
        "从范围里选出相关文件，通过工具读取。这个动作也可能失败，所以要检查返回内容、路径以及是否与任务对应。",
        "当前能指认的依据包括任务要求和已经返回的信息。现在请指一条 AI 结论，说出它依据哪段要求或哪次返回。没有找到对应证据时，就先记录“依据不足”，不要代替它猜测。"
      ],
      "segment": "信息与术语",
      "seconds": 55,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 列出可访问的项目文件\n\n2. 只让有读取动作的文件经过工具\n\n3. 检查纳入的信息，不替缺失证据补事实"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 55 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10-context"
    },
    {
      "id": "p10-window",
      "label": "上下文窗口",
      "title": "一次能处理的信息，有容量边界",
      "lead": "会话越长，可能提供的信息越多，但一次能处理的范围有边界，这就是 Context Window。图中的框只是示意，不代表具体产品的界面或 token 数。要关心的是信息是否相关、准确，而不是给得越多越好。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<style>.x-w{position:relative;margin:24px 0 8px;padding:20px 0}.x-w-strip{display:grid;grid-template-columns:repeat(9,1fr);gap:12px}.x-w-it{position:relative;isolation:isolate;height:96px;display:grid;place-items:center;text-align:center;font-size:19px;font-weight:700;color:var(--ct);padding:6px}.x-w-it::before{content:'';position:absolute;inset:0;z-index:-1;background:var(--cl);border:2px solid var(--c);border-radius:8px 11px 7px 10px;filter:url(#p-rough)}.x-w:has(.x-w-frame:not(.step-hidden)) .x-w-it:not(.in){opacity:.32}.x-w-frame{position:absolute;top:0;bottom:0;left:calc(33.33% - 8px);width:calc(44.44% + 4px);border:5px solid #243042;border-radius:16px;filter:url(#p-rough);pointer-events:none}.x-w-frame b{position:absolute;left:50%;top:-34px;transform:translateX(-50%);white-space:nowrap;background:var(--p-paper,#F5F2EB);padding:0 12px;font:400 25px/1.2 var(--p-title);color:#243042}.x-w-frame em{position:absolute;left:50%;bottom:-32px;transform:translateX(-50%);white-space:nowrap;font:normal 400 19px/1.2 var(--p-title);color:#4A5260}.x-w-out{display:flex;justify-content:space-between;margin-top:30px;font:400 20px/1 var(--p-title);color:#6B7280}</style><p class=\"p-sub\" data-reveal=\"0\" style=\"margin:0\">会话越长，可能提供的信息越多……</p><div class=\"x-w\"><div class=\"x-w-strip\"><div class=\"x-w-it\" data-role=\"ctx\"><span>项目文件 A</span></div><div class=\"x-w-it\" data-role=\"ink\"><span>早先的对话</span></div><div class=\"x-w-it\" data-role=\"tool\"><span>工具返回 1</span></div><div class=\"x-w-it in\" data-role=\"ctx\"><span>项目文件 B</span></div><div class=\"x-w-it in\" data-role=\"us\"><span>本次要求</span></div><div class=\"x-w-it in\" data-role=\"tool\"><span>工具返回 2</span></div><div class=\"x-w-it in\" data-role=\"ctx\"><span>相关文件</span></div><div class=\"x-w-it\" data-role=\"ink\"><span>更早的对话</span></div><div class=\"x-w-it\" data-role=\"ctx\"><span>项目文件 C</span></div></div><div class=\"x-w-frame\" data-reveal=\"1\"><b>Context Window · 一次能处理的范围</b><em>框的大小只是示意</em></div></div><div class=\"x-w-out\" data-reveal=\"1\"><span>← 框外：这次没在处理</span><span>框外 →</span></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">资料不在多，在于<b>相关、准确、在框里</b></div>",
      "steps": [
        "看信息来源，提出“会话很长就全记住了吗”",
        "显示有限窗口，区分信息与容量",
        "回到相关性和准确性"
      ],
      "script": [
        "Context Window 是上下文窗口。会话很长、文件很多，能保证所有内容都进入当前判断吗？",
        "它描述一次处理的信息容量边界。框只是容量示意，不代表产品界面、固定数字或特定信息一定会丢失。",
        "要关心信息是否相关、准确。请区分：Context 是信息，Context Window 限制一次处理的容量。"
      ],
      "segment": "信息与术语",
      "seconds": 35,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 看信息来源，提出“会话很长就全记住了吗”\n\n2. 显示有限窗口，区分信息与容量\n\n3. 回到相关性和准确性"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 35 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10-window"
    },
    {
      "id": "p10-diff",
      "label": "差异与页面",
      "title": "两份证据，回答两个问题",
      "lead": "Diff 和页面回答两个不同的问题：Diff 看改了什么、有没有多改，页面看显示得对不对。看到新文案证明不了没有多改文件，真实任务要查完整 Diff 和文件列表，并打开正确页面核对。",
      "kicker": "第 1 章 · 1.2 · 信息与术语",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><div class=\"p-head\"><h3>Diff · 改了什么</h3><span class=\"p-tag\" data-role=\"gate\">回答：多改了吗？</span></div><div class=\"p-code\"><div class=\"p-code-head\"><span>setup-check/index.html</span><span>+1 −1</span></div><div class=\"p-lines\"><span class=\"del\">− 你好，欢迎来到我的练习页面。</span><span class=\"add\">+ 你好，欢迎来到 Vibe Coding 课堂！</span></div></div></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><div class=\"p-head\"><h3>页面 · 显示什么</h3><span class=\"p-tag\" data-role=\"ok\">回答：对不对？</span></div><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>环境检查页</span></div><div class=\"p-page-body\">你好，欢迎来到<br>Vibe Coding 课堂！</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\">新文案 ≠ <b>没有多改文件</b></div><p class=\"source-note\">差异与页面均为教学示意，非真实执行截图；正式检查需查看完整 Diff。</p>",
      "steps": [
        "解释 Diff 的作用",
        "展示页面结果的作用",
        "问“页面能证明没多改文件吗”"
      ],
      "script": [
        "Diff 是修改前后的差异。这里省略标签，只看文字变化；真实任务要查完整 Diff 和文件列表。",
        "右边示意页面结果。实际要打开正确页面、刷新，核对文字和布局，Diff 不能代替这一步。",
        "看到了新文案，能证明没有多改文件吗？不能，两份证据回答不同问题。接下来判断一句结论有多少依据。"
      ],
      "segment": "信息与术语",
      "seconds": 35,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 解释 Diff 的作用\n\n2. 展示页面结果的作用\n\n3. 问“页面能证明没多改文件吗”"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 35 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p10-diff"
    },
    {
      "id": "p11",
      "label": "四类信息",
      "title": "同一句“改好了”，你凭什么相信？",
      "lead": "同一句“改好了”，先分清它属于哪类信息：事实要说明支持哪条结论，假设需要向用户核实，建议要由人决定是否采纳，决定则约束本次范围。分清性质，才知道下一步怎样处理。",
      "kicker": "第 1 章 · 1.2 · 判断信息",
      "html": "<div class=\"p-quad\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><h3>事实</h3><p class=\"p-quote\">刷新页面，看到目标文案</p><p class=\"p-then\">仍需 Diff 查范围</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>假设</h3><p class=\"p-quote\">“用户可能喜欢活泼文案”</p><p class=\"p-then\">向用户核实</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\"><h3>建议</h3><p class=\"p-quote\">“可以顺便加个动画”</p><p class=\"p-then\">由人决定是否采纳</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"3\"><h3>决定</h3><p class=\"p-quote\">“只改文字，不加动画”</p><p class=\"p-then\">约束本次范围</p></div></div>",
      "steps": [
        "先看事实及它能支持的范围",
        "把未经确认的偏好识别为假设",
        "把可选做法识别为建议",
        "用人的明确决定约束范围"
      ],
      "script": [
        "先带做一个例子：刷新正确页面，看到了指定新文案。观察支持“文案已显示”，但不能单独证明“没有多改文件”。事实也要说清楚它支持哪一条结论。",
        "“用户可能更喜欢活泼一点的文案”是尚未确认的假设。它听起来合理，也不能直接变成任务要求，需要向用户核实。",
        "“可以顺便加个动画”是在提出建议。建议提供可选做法，但提出建议和决定执行是两件事。",
        "用户明确说“这次只改文字，不加动画”，这是已经确认的决定，用于约束任务。接下来请你判断几个容易混淆的句子，先想理由，再看解析。"
      ],
      "segment": "判断信息",
      "seconds": 55,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 先看事实及它能支持的范围\n\n2. 把未经确认的偏好识别为假设\n\n3. 把可选做法识别为建议\n\n4. 用人的明确决定约束范围"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 55 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p11"
    },
    {
      "id": "p11-judge",
      "label": "先判断，再看证据",
      "title": "“它说过”，不等于“它说的成立”",
      "lead": "判断的是句子里的结论，而不是这句话是否出现过。刷新页面看到新文案，是支持“文案已显示”的事实；AI 说“没有多改文件”而没有 Diff，只能算待验证主张；未确认的偏好是假设。",
      "kicker": "第 1 章 · 1.2 · 判断信息",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先判断②和③</span><div class=\"p-quiz\"><div class=\"p-q\"><p class=\"p-say\">① 记录中有一次目标文件读取。</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"ctx\">事实候选</span><p class=\"p-why\">核对真实日志中的路径和返回；有对应证据才成立。</p></div></div><div class=\"p-q\"><p class=\"p-say\">② 刷新正确页面，显示了目标文案。</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"ok\">事实</span><p class=\"p-why\">支持“文案已显示”；不能单独证明改动范围。</p></div></div><div class=\"p-q\"><p class=\"p-say\">③ AI 说：“没有多改文件。”尚无 Diff。</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"gate\">待验证主张</span><p class=\"p-why\">不能直接当事实；缺少实际 Diff 和文件范围检查。</p></div></div><div class=\"p-q\"><p class=\"p-say\">④ “学员大概喜欢深色背景。”</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"ctx\">假设</span><p class=\"p-why\">偏好未确认，先向用户核实。</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\">③ 是<b>待验证主张</b>，不硬归四类</div><p class=\"source-note\">八卡练习 · 前四张。依据原 P11 教学草案，待与 M06 原题核对。</p>",
      "steps": [
        "停顿，让学员判断②③，其余对照",
        "揭晓四条，重点解释证据边界",
        "收拢：待验证主张不能因出自 AI 就成为事实"
      ],
      "script": [
        "请先暂停。重点比较第二条和第三条：你会怎样判断，理由是什么？其他两条先尝试，随后对照解析。我们判断的是句子里的结论，而不只是这句话是否出现过。",
        "第二条有真实页面观察时，可以支持文案已经显示。第三条只有 AI 的保证，改动范围还没有证据。第一条也需要核对日志和返回，第四条是未确认的偏好假设。",
        "第三条保留为待验证主张，不强塞进四类。我们可以确认 AI 说过这句话，但没有实际 Diff，不能确认它真的没有多改。把你的分类理由和缺少的证据记下来。"
      ],
      "segment": "判断信息",
      "seconds": 65,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 停顿，让学员判断②③，其余对照\n\n2. 揭晓四条，重点解释证据边界\n\n3. 收拢：待验证主张不能因出自 AI 就成为事实"
        },
        {
          "title": "教学边界与材料",
          "text": "此为原 P11 八条草案的前四条，未冒称已核验的 M06 原题。请学员用本人任务片段补证据。"
        }
      ],
      "notes": "<p>预算 65 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p11-judge"
    },
    {
      "id": "p11-more",
      "label": "建议与决定",
      "title": "一句建议，什么时候变成任务？",
      "lead": "“建议先看 Diff”不等于已经看过，“可以扩大字号”也不等于允许修改。建议提供可选做法，有明确确认记录的才是决定，后续执行必须遵守。最后为自己的首次任务补一条缺失的信息。",
      "kicker": "第 1 章 · 1.2 · 判断信息",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先分⑤⑥与⑦⑧</span><div class=\"p-quiz\"><div class=\"p-q\"><p class=\"p-say\">⑤ “建议先看 Diff。”</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"agent\">建议</span><p class=\"p-why\">提出验证做法；还不表示已经执行。</p></div></div><div class=\"p-q\"><p class=\"p-say\">⑥ “可以考虑扩大标题字号。”</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"agent\">建议</span><p class=\"p-why\">可选改动，需要人决定，不能擅自扩范围。</p></div></div><div class=\"p-q\"><p class=\"p-say\">⑦ 教师已批准：“只改欢迎语。”</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"us\">决定</span><p class=\"p-why\">需有明确确认记录；它约束可修改范围。</p></div></div><div class=\"p-q\"><p class=\"p-say\">⑧ 教师决定：“这次不新增依赖。”</p><div data-reveal=\"1\"><span class=\"p-stamp\" data-role=\"us\">决定</span><p class=\"p-why\">需有明确确认记录；后续执行遵守这一边界。</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\">给自己的任务补一项：<b>目标文案 / 指定文件 / 完成标准</b></div><p class=\"source-note\">八卡练习 · 后四张。与前页共同构成草案八卡，不替代本人记录。</p>",
      "steps": [
        "先区分建议与已确认决定",
        "揭晓四条，指出确认记录",
        "指出一条缺失信息，留给 1.4"
      ],
      "script": [
        "继续看后四条。建议先看 Diff，和“已经看过 Diff”是同一回事吗？建议扩大字号，和允许它修改字号又是同一回事吗？先用自己的话区分建议和决定。",
        "第五、第六条是在提出可选做法。第七、第八条如果有教师的明确确认记录，就属于已确认的决定。确认后的范围与边界，后续执行必须遵守。",
        "现在回到你的首次任务，指出一条应该补充的信息。例如目标文案没有说清、文件位置没指定，或者完成标准太笼统。将它写进分类记录，留给 1.4 的 Prompt 练习补全。"
      ],
      "segment": "判断信息",
      "seconds": 60,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 先区分建议与已确认决定\n\n2. 揭晓四条，指出确认记录\n\n3. 指出一条缺失信息，留给 1.4"
        },
        {
          "title": "教学边界与材料",
          "text": "八张陈述全部保留，重点主动判断两条易混项，其余对照解析；不要求背术语定义。"
        }
      ],
      "notes": "<p>预算 60 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p11-more"
    },
    {
      "id": "p12",
      "label": "三个常见缺口",
      "title": "出错了，先找缺的是哪一环",
      "lead": "出错时先找缺的是哪一环：AI 自己编文案，是任务信息缺失，要补目标、位置和标准；样式也被改了，是范围失控，只撤销本次越界；只有一句“已完成”，是缺少检查。每种纠正之后都要复验。",
      "kicker": "第 1 章 · 1.2 · 失败与纠正",
      "html": "<div class=\"p-flow\" style=\"--n:3\" data-reveal=\"0\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-num\">01</span><h3>任务输入</h3><p></p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-num\">02</span><h3>执行范围</h3><p></p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-num\">03</span><h3>结果检查</h3><p></p></div><div class=\"p-hang\" data-role=\"gate\" style=\"grid-column:1\"><div class=\"p-box\" data-role=\"gate\" style=\"padding:12px 16px\"><p class=\"p-big\" style=\"font-size:23px\">“AI 自己编了文案”</p><div data-reveal=\"1\" style=\"margin-top:8px;display:grid;grid-template-columns:auto 1fr;gap:4px 10px;font-size:19px;line-height:1.4\"><b style=\"color:#0B6B5F\">纠正</b><span>补目标、位置、标准</span><b style=\"color:#0B6B5F\">复验</b><span>页面 + Diff</span></div></div></div><div class=\"p-hang\" data-role=\"gate\" style=\"grid-column:2\"><div class=\"p-box\" data-role=\"gate\" style=\"padding:12px 16px\"><p class=\"p-big\" style=\"font-size:23px\">“文字改了，样式也改了”</p><div data-reveal=\"2\" style=\"margin-top:8px;display:grid;grid-template-columns:auto 1fr;gap:4px 10px;font-size:19px;line-height:1.4\"><b style=\"color:#0B6B5F\">纠正</b><span>只撤销本次越界</span><b style=\"color:#0B6B5F\">复验</b><span>完整 Diff</span></div></div></div><div class=\"p-hang\" data-role=\"gate\" style=\"grid-column:3\"><div class=\"p-box\" data-role=\"gate\" style=\"padding:12px 16px\"><p class=\"p-big\" style=\"font-size:23px\">“只有一句‘已完成’”</p><div data-reveal=\"3\" style=\"margin-top:8px;display:grid;grid-template-columns:auto 1fr;gap:4px 10px;font-size:19px;line-height:1.4\"><b style=\"color:#0B6B5F\">纠正</b><span>看页面 + 完整 Diff</span><b style=\"color:#0B6B5F\">复验</b><span>两项都对上</span></div></div></div></div><p class=\"source-note\">三种可能场景，不表示 1.1 已经全部发生；纠正后必须复验。</p>",
      "steps": [
        "只给三个现象，请先选一个判断",
        "揭晓信息缺失的纠正与复验",
        "揭晓范围失控的纠正与复验",
        "揭晓验证缺失，并口头复述三种失败"
      ],
      "script": [
        "先看三种可能的现象：文案是 AI 自己编的，样式也被改了，或者只有一句“已完成”。请选择一种，说出缺的是哪一环，以及你准备怎样验证。",
        "第一种是信息缺失。补清目标文字、修改位置和完成标准，再检查页面与 Diff 是否匹配要求。不要让 AI 继续猜偏好。",
        "第二种是范围失控。先用 Diff 区分本次越界改动与用户原有工作，只撤销本次不该发生的修改。然后重新检查范围，不能用整体覆盖制造新问题。",
        "第三种是验证缺失。打开正确页面核对文字和布局，再看完整 Diff。请用自己的话复述这三种失败，以及各自的一项纠正动作；只有“再试一次”还不够具体。"
      ],
      "segment": "失败与纠正",
      "seconds": 80,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 只给三个现象，请先选一个判断\n\n2. 揭晓信息缺失的纠正与复验\n\n3. 揭晓范围失控的纠正与复验\n\n4. 揭晓验证缺失，并口头复述三种失败"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 80 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p12"
    },
    {
      "id": "p12-trace",
      "label": "路径与引用",
      "title": "读不到，和改错地方，是两种问题",
      "lead": "读不到和改错地方是两种问题：工具报“找不到文件”，先核对目录和路径，再重新读取；改到另一页面的同名文案，要沿页面入口找到实际引用，改对后复查页面和 Diff。不要都归咎于模型不够聪明。",
      "kicker": "第 1 章 · 1.2 · 失败与纠正",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">工具执行失败</span><div class=\"p-term\">读取 setup-check/index.html<br><span class=\"err\">结果：找不到文件</span></div><div data-reveal=\"1\" style=\"margin-top:10px\"><p><b style=\"color:#0B6B5F\">纠正</b>　核对目录与路径</p><p><b style=\"color:#0B6B5F\">复验</b>　重新读取</p></div></div><div class=\"p-join\" data-reveal=\"0\"><b>≠</b><span>两种问题</span></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">误判代码逻辑</span><p class=\"p-big\">同名欢迎语，<br>却属于另一个页面。</p><div data-reveal=\"2\" style=\"margin-top:10px\"><p><b style=\"color:#0B6B5F\">纠正</b>　沿页面入口找实际引用</p><p><b style=\"color:#0B6B5F\">复验</b>　页面 + Diff</p></div></div></div><p class=\"source-note\">教学变式；不在本节展开环境排障或代码架构。</p>",
      "steps": [
        "对比两种现象，不急着给答案",
        "读不到：查目录与路径",
        "改错位置：查页面实际引用并复验"
      ],
      "script": [
        "再看两个变式。一个是工具读取就报“找不到文件”，另一个是修改成功，却改了另一页面的同名文案。它们需要不同的纠正。",
        "读取失败时，先看报错，核对当前目录和目标路径；修正后重新读取，检查返回内容。不能把一次失败调用当成已了解文件。",
        "改错地方时，沿当前页面入口确认实际引用，改对位置后重新验证页面和 Diff。不要把所有失败都归为模型不够聪明，要说明问题发生在哪里。"
      ],
      "segment": "失败与纠正",
      "seconds": 40,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 对比两种现象，不急着给答案\n\n2. 读不到：查目录与路径\n\n3. 改错位置：查页面实际引用并复验"
        },
        {
          "title": "教学边界与材料",
          "text": "对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。"
        }
      ],
      "notes": "<p>预算 40 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p12-trace"
    },
    {
      "id": "p13",
      "label": "能力逐层叠加",
      "title": "项目变复杂，协作能力逐层叠加",
      "lead": "把这次小任务放进整门课：Prompt 说清当前任务，Vibe Coding 看真实结果持续迭代，SDD 把需求和验收写成可维护的规格，Harness 复用规则与检查。每一层都保留看证据、作判断、再验证。",
      "kicker": "第 1 章 · 1.2 · 课程路线",
      "html": "<div class=\"p-stairs\" style=\"--n:4;height:auto\"><div class=\"p-stair\" style=\"--i:0\" data-reveal=\"0\" data-node=\"prompt\"><span class=\"p-here\">本章在这里</span><div class=\"p-box\" data-role=\"us\" style=\"padding:14px 18px\"><h3>Prompt</h3><p style=\"font-weight:700\">说清当前任务</p></div></div><div class=\"p-stair\" style=\"--i:1\" data-reveal=\"1\" data-node=\"vibe\" data-edge=\"prompt:vibe\"><div class=\"p-box\" data-role=\"agent\" style=\"padding:14px 18px\"><h3>Vibe Coding</h3><p style=\"font-weight:700\">看结果再迭代</p></div></div><div class=\"p-stair\" style=\"--i:2\" data-reveal=\"2\" data-node=\"sdd\" data-edge=\"vibe:sdd\"><div class=\"p-box\" data-role=\"agent\" style=\"padding:14px 18px\"><h3>SDD</h3><p style=\"font-weight:700\">固定需求与验收</p></div></div><div class=\"p-stair\" style=\"--i:3\" data-reveal=\"3\" data-node=\"harness\" data-edge=\"sdd:harness\"><div class=\"p-box\" data-role=\"agent\" style=\"padding:14px 18px\"><h3>Harness</h3><p style=\"font-weight:700\">复用规则与检查</p></div></div><div class=\"p-bar p-base\" data-reveal=\"3\">每一层都保留：<b>看证据、作判断、再验证</b></div></div>",
      "steps": [
        "Prompt：说清任务",
        "Vibe Coding：根据结果持续迭代",
        "SDD：维护需求和验收",
        "Harness：复用规则、检查与人工确认点"
      ],
      "script": [
        "把这次小任务放进整门课程。Prompt 先训练说清任务，留下有范围和完成标准的说明。本章后面做出的首页 v0，仍然是 Prompt 原型。",
        "页面做出来以后，发现布局或行为问题，需要依据真实结果持续反馈和迭代，这就是我们接下来重点实践的 Vibe Coding。它始终包含理解、检查和人工判断。",
        "规则更多、版本更多时，口头说过不容易维护。SDD 把需求和验收写成可以维护的规格。进入这一层，前面的运行检查仍然保留。",
        "Harness 再把协作规则、上下文、检查入口和人工确认点组织成可复用的环境。课程依次使用个人主页、JSON Crack、dependency-cruiser 三个独立项目，迁移的是协作方法，不是继承前一仓库的代码与会话。"
      ],
      "segment": "课程路线",
      "seconds": 90,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. Prompt：说清任务\n\n2. Vibe Coding：根据结果持续迭代\n\n3. SDD：维护需求和验收\n\n4. Harness：复用规则、检查与人工确认点"
        },
        {
          "title": "教学边界与材料",
          "text": "首页 v0 在 1.5 创建；这里是路线定位，不声称学员在 1.2 已完成首页。三个独立项目保持大纲规定。"
        }
      ],
      "notes": "<p>预算 90 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p13"
    },
    {
      "id": "p14",
      "label": "行业路标",
      "title": "补代码、查资料、动手、看图",
      "lead": "行业里常见的几种能力只作路标，不练习、不考核：代码补全续写一行或一个函数，RAG 先检索资料再回答，工具调用读文件、改代码、跑测试，多模态理解根据截图指出问题。它们可以组合使用。",
      "kicker": "第 1 章 · 1.2 · 路标与收尾",
      "html": "<div class=\"p-grid\" style=\"--n:4\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:14px 18px\"><span style=\"display:block;font:400 56px/1 var(--p-title);color:var(--ct)\">补</span><h3 style=\"margin:8px 0 0;font-size:24px\">代码补全</h3><p class=\"p-big\" style=\"font-size:21px;margin-top:10px\">补一行或一个函数</p><p style=\"margin-top:8px;font-size:17px\"><a href=\"https://docs.github.com/zh/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub 官方入门 ↗</a></p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:14px 18px\"><span style=\"display:block;font:400 56px/1 var(--p-title);color:var(--ct)\">查</span><h3 style=\"margin:8px 0 0;font-size:24px\">RAG 检索增强</h3><p class=\"p-big\" style=\"font-size:21px;margin-top:10px\">查资料后解释接口</p><p style=\"margin-top:8px;font-size:17px\"><a href=\"https://aws.amazon.com/cn/what-is/retrieval-augmented-generation/\" target=\"_blank\" rel=\"noopener noreferrer\">RAG 公开入门 ↗</a></p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:14px 18px\"><span style=\"display:block;font:400 56px/1 var(--p-title);color:var(--ct)\">做</span><h3 style=\"margin:8px 0 0;font-size:24px\">工具调用</h3><p class=\"p-big\" style=\"font-size:21px;margin-top:10px\">读文件、改代码、跑测试</p><p style=\"margin-top:8px;font-size:17px\"><a href=\"index.html#p09-loop\">回看本节循环 ↗</a></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"3\" style=\"padding:14px 18px\"><span style=\"display:block;font:400 56px/1 var(--p-title);color:var(--ct)\">看</span><h3 style=\"margin:8px 0 0;font-size:24px\">多模态理解</h3><p class=\"p-big\" style=\"font-size:21px;margin-top:10px\">根据截图指出布局问题</p><p style=\"margin-top:8px;font-size:17px\"><a href=\"https://ai.google.dev/gemini-api/docs/image-understanding?hl=zh-cn\" target=\"_blank\" rel=\"noopener noreferrer\">图片理解参考 ↗</a></p></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">四种能力可以组合使用，不是互相替代。</div><p class=\"source-note\">只作路标，不练习、不考核；具体可用性取决于模型与工具环境。</p>",
      "steps": [
        "代码补全：解决局部续写",
        "RAG：检索资料，提供依据",
        "工具调用：执行动作并检查返回",
        "多模态：截图反馈；归纳能力组合的脉络"
      ],
      "script": [
        "最后用九十秒认识行业里的几种能力与机制，不练习，也不考核。代码补全适合局部续写一行或一个函数；本课重点是更完整的 Agent 协作，延伸可看页面的官方入门。",
        "RAG 是检索增强生成：先查相关资料，再据此回答，例如解释项目接口。它是一种方法，不是与所有工具严格并列的产品分类。本课提供必要上下文，不搭建检索库；阅读入口留在页面。",
        "工具调用对应刚才的执行循环：读取文件、修改代码、运行测试。提出调用不等于成功，要检查返回和实际结果。延伸先回看本节循环图。",
        "多模态理解把图片等输入纳入任务，例如根据截图指出布局问题。后面会用截图反馈，实际效果仍需运行验证。把行业脉络理解为从局部补全，扩展到问答与资料辅助，再到工具协作和多模态反馈；这些能力可以组合，并非互相取代。"
      ],
      "segment": "路标与收尾",
      "seconds": 90,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 代码补全：解决局部续写\n\n2. RAG：检索资料，提供依据\n\n3. 工具调用：执行动作并检查返回\n\n4. 多模态：截图反馈；归纳能力组合的脉络"
        },
        {
          "title": "教学边界与材料",
          "text": "行业四问：解决什么、何时用、本课关系、延伸去哪。沿用原课件资料方向，本次未重新核验外链或产品操作，不新增考核。"
        }
      ],
      "notes": "<p>预算 90 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p14"
    },
    {
      "id": "p14-check",
      "label": "暂停自检",
      "title": "回到你的记录，能讲清这三件事吗？",
      "lead": "用自己的记录回答三问：Agent、Tool、Context、Window 各指什么并各指一条证据；一句“完成了”还缺哪些证据（页面看结果，Diff 看范围）；至少三种失败各怎样纠正和复验。",
      "kicker": "第 1 章 · 1.2 · 路标与收尾",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>Agent、Tool、Context、Window 各指什么？</h3><div data-reveal=\"1\"><p>组织 · 执行 · 信息 · 容量<span class=\"p-back-to\" data-role=\"agent\">回到 术语贴标签</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>一句“完成了”，还缺哪些证据？</h3><div data-reveal=\"2\"><p>页面看结果 · Diff 看范围<span class=\"p-back-to\" data-role=\"agent\">回到 两份证据</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>至少三种失败，怎样纠正和复验？</h3><div data-reveal=\"3\"><p>补信息 · 撤越界 · 补检查 → 复验<span class=\"p-back-to\" data-role=\"agent\">回到 先找缺的一环</span></p></div></div></div></div>",
      "steps": [
        "暂停，先独立作答",
        "揭晓概念自检依据",
        "揭晓证据边界",
        "揭晓失败自检依据"
      ],
      "script": [
        "请暂停，用自己的记录回答三问。能解释、指证据、说明下一步即可，不要求背定义。",
        "第一问：Agent 组织循环，Tool 执行动作，Context 是信息，Window 是容量边界。各指一条证据。",
        "第二问：页面核对结果，Diff 核对范围。不能把 AI 的完成说明直接当事实。",
        "第三问：至少列三种失败，各给纠正和复验。保存概念地图与分类记录。"
      ],
      "segment": "路标与收尾",
      "seconds": 40,
      "layout": "",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 暂停，先独立作答\n\n2. 揭晓概念自检依据\n\n3. 揭晓证据边界\n\n4. 揭晓失败自检依据"
        },
        {
          "title": "教学边界与材料",
          "text": "视频中的暂停跟做另计；解析计入预算。初稿写入练习仓库 docs/evidence/CH01_PROMPT_EXPERIMENT.md；尚无本人实操证据不能记为通过。"
        }
      ],
      "notes": "<p>预算 40 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p14-check"
    },
    {
      "id": "p14-summary",
      "label": "带走一个习惯",
      "title": "每到一个结论，追问一次依据",
      "lead": "带走一个习惯：每到一个结论，追问它拿到了什么、做了什么、结果支持什么。保存概念地图和信息分类记录。下一节换个角度：当前这个项目，应该允许 Agent 做到哪一步？",
      "kicker": "第 1 章 · 1.2 · 路标与收尾",
      "html": "<div class=\"p-sketch\"><div data-reveal=\"0\"><h4>四个词</h4><div class=\"p-words\"><div class=\"p-box\" data-role=\"agent\"><h3>Agent</h3></div><div class=\"p-box\" data-role=\"tool\"><h3>Tool</h3></div><div class=\"p-box\" data-role=\"ctx\"><h3>Context</h3></div><div class=\"p-box\" data-role=\"ctx\"><h3>Window</h3></div></div></div><div data-reveal=\"0\"><h4 style=\"text-align:center\">三句追问</h4><div class=\"p-star\" style=\"width:220px\">它拿到了什么？<br>它做了什么？<br>结果支持什么？</div></div><div><div data-reveal=\"0\"><h4>三种缺口</h4><ul class=\"p-warns\"><li>信息不全</li><li>范围失控</li><li>没有验证</li></ul></div><div class=\"p-next\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"agent\"><h3>留下两份记录</h3><p>概念地图 · 信息分类</p></div><div class=\"p-box\" data-role=\"us\" style=\"margin-top:10px\"><h3>下一节 1.3</h3><p>该允许 Agent 做到哪一步？</p></div></div></div></div>",
      "steps": [
        "用三句追问收拢本节",
        "说明产出与下一节权限衔接"
      ],
      "script": [
        "带走一个习惯：追问它拿到了什么、做了什么、结果支持什么。",
        "保存概念地图、分类理由和一条缺失信息。下一节我们换个角度：当前这个项目，应该允许 Agent 做到哪一步？"
      ],
      "segment": "路标与收尾",
      "seconds": 20,
      "layout": "lesson-summary",
      "teaching": [
        {
          "title": "逐步呈现与提问",
          "text": "1. 用三句追问收拢本节\n\n2. 说明产出与下一节权限衔接"
        },
        {
          "title": "教学边界与材料",
          "text": "小结不引入新概念。初稿与概念地图用于 1.3/1.4 后续练习。"
        }
      ],
      "notes": "<p>预算 20 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>",
      "source": "index.html#p14-summary"
    }
  ]
};

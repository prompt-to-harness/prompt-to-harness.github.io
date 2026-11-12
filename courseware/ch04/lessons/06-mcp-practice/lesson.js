window.lesson = {
  "title": "除了读一份需求，MCP 日常还能怎么帮我们干活",
  "chapter": "第 4 章 · SDD",
  "section": "04.06",
  "summary": "用独立的“开发者分享会”材料做演示，看懂工具用途、实际结果和选用条件；JSON Diff 仍从 4.5 规格基线进入第 5 章。",
  "scenes": [
    {
      "id": "p59",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "除了读一份需求，MCP 日常还能怎么帮我们干活",
      "title": "还能怎么帮我们干活？",
      "lead": "上一节已经提交规格基线。这一节不再改 JSON Diff，用独立材料做演示",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>4.1</b>接手工程</li><li class=\"is-done\"><b>4.2</b>形成 Brief</li><li class=\"is-done\"><b>4.3</b>批准 Spec</li><li class=\"is-done\"><b>4.4</b>写验收</li><li class=\"is-done\"><b>4.5</b>拆任务</li><li class=\"is-now\"><b>4.6</b>MCP 工具</li></ol><div style=\"margin-top:26px\"><div class=\"p-stairs\" data-reveal=\"1\" style=\"--n:5;--rise:14px;column-gap:12px;height:auto\"><div class=\"p-stair\" style=\"--i:0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Brief</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">BRIEF.md</p></div></div><div class=\"p-stair\" style=\"--i:1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Spec</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">SPEC.md</p></div></div><div class=\"p-stair\" style=\"--i:2\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Acceptance</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">ACCEPTANCE.md</p></div></div><div class=\"p-stair\" style=\"--i:3\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Plan</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">PLAN.md</p></div></div><div class=\"p-stair\" style=\"--i:4\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Tasks</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">TASKS.md</p></div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:18px\">本节用独立的“开发者分享会”材料，<b>偏重演示</b>；以看懂为主，按需要选做即可</div>",
      "steps": [
        "本章位置",
        "规格主线交给第 5 章",
        "用独立材料做演示"
      ],
      "script": [
        "【操作提示｜停留课件 p59 第 1 步，指向章节地图上的 4.6；不切窗口】\n\n上一节，我们提交了规格基线。地图上，这一节是工具经验。",
        "【操作提示｜推进第 2 步，指向五层规格，此时都已完成】\n\n五层规格到这里告一段落，实现交给第 5 章。这一节不再改 JSON Diff，也不接着写规格。",
        "【操作提示｜推进第 3 步，指向底部说明；讲完进入 p60】\n\n4.2 只用飞书 MCP 读过一份需求。日常要把真实工具交给 Agent，MCP 是一种方式；飞书官方目前给个人用户的推荐，是命令行工具。这一节飞书主案例用官方命令行，其他短演示仍用 MCP。我们用一套独立的教学材料来演示，题目是“开发者分享会”。以看懂为主，按需要选做即可。先补上飞书的接入步骤，再进入演示。"
      ],
      "teaching": [],
      "source": "index.html#p59",
      "seconds": 90
    },
    {
      "id": "p60",
      "segment": "接入飞书",
      "label": "怎样把飞书接到这次要用的工具上",
      "title": "怎样把飞书接到这次要用的工具上？",
      "lead": "4.2 用 MCP 读过需求。飞书这边，官方目前给个人用户的推荐是命令行工具。没接上也可以看后面的演示",
      "html": "<div class=\"p-qlist\" data-reveal=\"0\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>按官方文档安装飞书命令行工具</h3></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>重启 Codex，让对应技能加载</h3></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>用本人身份登录一次</h3></div></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:10px\">这不是 MCP。Agent 通过技能调用命令行，<b>不需要启动 MCP 服务</b></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:8px\">凭证和密钥不进公开材料和画面。能力以演练时的实际结果为准</div>",
      "steps": [
        "接入时要做的事",
        "这不是 MCP",
        "凭证不进画面"
      ],
      "script": [
        "【操作提示｜停留课件 p60 第 1 步，指向接入步骤；不切窗口】\n\n把飞书接到这次要用的工具上，按官方目前给个人用户的推荐来做：按官方文档安装飞书命令行工具，重启 Codex 让对应技能加载，再用本人身份登录一次，命令是 lark-cli auth login。安装后要重启，技能才会加载。这一节要读讲师准备的文档，需要以本人身份登录。配置时默认会新建应用，也可以选用已有的。",
        "【操作提示｜推进第 2 步，指向“这不是 MCP”】\n\n这不是 MCP。Agent 通过技能调用命令行，不需要启动 MCP 服务。不必再给 lark-mcp 配重定向地址，也不再有和 3000 端口冲突的那一步。4.2 读需求时用的是 MCP，这一节飞书改走官方推荐方式，两种不要混为一谈。",
        "【操作提示｜推进第 3 步，指向底部说明；讲完进入后面的演示】\n\n凭证和密钥不进公开材料，也不出现在画面上。公开说明里的能力，覆盖这次飞书演示要用的事，但仍以演练时的实际结果为准。没接上的同学，也可以看后面的演示。接好之后，就进入演示。"
      ],
      "teaching": [],
      "source": "index.html#p60",
      "seconds": 90
    },
    {
      "id": "p61",
      "segment": "云文档主案例",
      "label": "怎样把一组云文档整理成可核对的结果",
      "title": "怎样把一组云文档整理成可核对的结果？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p61 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p61",
      "seconds": 30
    },
    {
      "id": "p62",
      "segment": "云文档主案例",
      "label": "整理结果对得上原文和评论吗",
      "title": "整理结果对得上原文和评论吗？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p62 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p62",
      "seconds": 30
    },
    {
      "id": "p63",
      "segment": "云文档主案例",
      "label": "整理稿怎样创建，又怎样改一处",
      "title": "整理稿怎样创建，又怎样改一处？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p63 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p63",
      "seconds": 30
    },
    {
      "id": "p64",
      "segment": "短演示",
      "label": "电子表格和云文档里的表是一回事吗",
      "title": "电子表格和云文档里的表是一回事吗？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p64 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p64",
      "seconds": 30
    },
    {
      "id": "p65",
      "segment": "短演示",
      "label": "多维表格这一次做什么、怎样核对",
      "title": "多维表格这一次做什么、怎样核对？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p65 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p65",
      "seconds": 30
    },
    {
      "id": "p66",
      "segment": "短演示",
      "label": "同一份数据怎样变成图",
      "title": "同一份数据怎样变成图？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p66 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p66",
      "seconds": 30
    },
    {
      "id": "p67",
      "segment": "短演示",
      "label": "出行约束怎样落到地点和路线",
      "title": "出行约束怎样落到地点和路线？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p67 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p67",
      "seconds": 30
    },
    {
      "id": "p68",
      "segment": "短演示",
      "label": "这几个常用 MCP 各能看见什么结果",
      "title": "这几个常用 MCP 各能看见什么结果？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">教学材料和演示还没有实跑，本页待演练后制作</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p68 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p68",
      "seconds": 30
    },
    {
      "id": "p69",
      "segment": "选用条件",
      "label": "怎样按要做的事选工具",
      "title": "怎样按要做的事选工具？",
      "lead": "选工具时先看要完成的动作，再看来源、范围和条件。不要求装齐这些工具",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 20px\"><span class=\"p-tag\" data-role=\"us\">选择顺序</span><h3 style=\"font-size:24px;margin:8px 0 0\">先看要完成的动作，再看来源、范围、账号、网络和数据条件</h3><p style=\"margin:6px 0 0\">整理文档、改表格、画图、查路线，要做的事不同，该看的工具也不同</p></div><div class=\"p-grid\" style=\"--n:3;margin-top:10px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:10px 12px\"><span class=\"p-tag\" data-role=\"ctx\">来源</span><h3 style=\"font-size:20px;margin:6px 0 0\">分清官方和社区</h3><p style=\"margin:4px 0 0\">12306-mcp 是社区实现<br>不是购票工具</p></div><div class=\"p-box\" data-role=\"ctx\" style=\"padding:10px 12px\"><span class=\"p-tag\" data-role=\"ctx\">数据条件</span><h3 style=\"font-size:20px;margin:6px 0 0\">本机有服务，不等于数据只留在本机</h3><p style=\"margin:4px 0 0\">AntV 默认远程渲染</p></div><div class=\"p-box\" data-role=\"ctx\" style=\"padding:10px 12px\"><span class=\"p-tag\" data-role=\"ctx\">接入形式</span><h3 style=\"font-size:20px;margin:6px 0 0\">飞书用官方命令行，不是 MCP</h3><p style=\"margin:4px 0 0\">其他短演示仍用 MCP</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:8px\">不要求装齐。百度地图只作高德的替代说明；来源和能力录制前再复核</div>",
      "steps": [
        "选择顺序",
        "要分清的界限",
        "不要求装齐"
      ],
      "script": [
        "【操作提示｜停留课件 p69 第 1 步，指向选择顺序】\n\n演示做完了，用很短的一段收住：选工具时，先看要完成的动作，再看来源、范围、账号、网络和数据条件。整理文档、改表格、画图、查路线，要做的事不同，该看的工具也不同。",
        "【操作提示｜推进第 2 步，指向两组界限和接入形式】\n\n要分清官方实现和社区实现。也要分清：本机启动了服务，并不等于数据只留在本机，也不等于完全离线。还要分清接入形式：飞书主案例用的是官方命令行工具，不是 MCP；AntV、高德等仍是 MCP，两种不要混为一谈。比如，12306-mcp 是社区实现，不是购票工具；AntV 默认远程渲染，本机有服务也不等于数据不出本机。",
        "【操作提示｜推进第 3 步，指向底部说明；讲完进入 p70】\n\n不要求装齐这些工具。百度地图只作为高德的替代候选，不再单独演示。清单里的来源和能力，录制前再复核一遍。"
      ],
      "teaching": [],
      "source": "index.html#p69",
      "seconds": 90
    },
    {
      "id": "p70",
      "segment": "自检与交接",
      "label": "整理稿已创建，接下来检查什么",
      "title": "整理稿已创建，接下来检查什么？",
      "lead": "请先判断，再看参考结论。这是本节的学员判断",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:26px;margin:10px 0 0\">如果对话里出现“整理稿已创建”，下一步该做什么？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:16px\">打开实际文档，核对<b>位置、标题、正文、来源和待决定事项</b>。不能只看对话里的“已完成”</div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:12px 18px;margin-top:14px\"><span class=\"p-tag\" data-role=\"ctx\">同样适用于后面的演示</span><p style=\"font-size:20px;margin:8px 0 0\">定点更新之后，也要回到实际文档看变化。对话说明和可见结果，各有要核对的对象</p></div>",
      "steps": [
        "先判断",
        "打开实际文档核对",
        "更新后也要再看"
      ],
      "script": [
        "【操作提示｜停留课件 p70 第 1 步，指向情境，先不要往下翻】\n\n回到飞书主案例。如果对话里出现“整理稿已创建”，下一步该做什么？先停在这里，自己想一想。",
        "【操作提示｜推进第 2 步，指向应检查的几项】\n\n打开实际文档，核对位置、标题、正文、来源和待决定事项。不能只看对话里的“已完成”。",
        "【操作提示｜推进第 3 步，指向补充判断；讲完进入 p71】\n\n定点更新之后，也要回到实际文档看变化。这个判断同样适用于后面的表格、图表和地图：对话说明和可见结果，各有要核对的对象。"
      ],
      "teaching": [],
      "source": "index.html#p70",
      "seconds": 90
    },
    {
      "id": "p71",
      "segment": "自检与交接",
      "label": "小结",
      "title": "这一节留下什么",
      "lead": "看懂即可。选做的成果和规格主线分开，不打断这次交接",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"font-size:22px\">对照来源<br>和实际结果<br>不能只看对话</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">带来源与结果核对的材料</li><li class=\"is-pass\">附使用条件的工具清单</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一章</h3><div class=\"p-box\" data-role=\"us\"><h3>第 5 章按任务实现</h3><p>JSON Diff 仍从 4.5 已提交的规格基线进入第 5 章</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "交给第 5 章"
      ],
      "script": [
        "【操作提示｜停留课件 p71 第 1 步，指向中间的判断】\n\n回到开头的问题。除了读一份需求，日常还能用工具帮忙找资料、整理、写回，也能把同一份数据接到图、路线和其他常用工具上。飞书这一段用官方命令行工具，其他短演示用 MCP。每次都要对照来源和实际结果，不能只看对话。",
        "【操作提示｜推进第 2 步，指向“留下的”】\n\n这一节留下两样东西：带来源与结果核对的演示材料，以及附使用条件的工具清单。",
        "【操作提示｜推进第 3 步，指向第 5 章卡片】\n\nJSON Diff 的实施，仍从 4.5 已经提交的规格基线进入第 5 章。看懂即可；选做的成果和规格主线分开，不打断这次交接。"
      ],
      "teaching": [],
      "source": "index.html#p71",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "接入飞书",
      "seconds": 90
    },
    {
      "label": "云文档主案例",
      "seconds": 90
    },
    {
      "label": "短演示",
      "seconds": 150
    },
    {
      "label": "选用条件",
      "seconds": 90
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};

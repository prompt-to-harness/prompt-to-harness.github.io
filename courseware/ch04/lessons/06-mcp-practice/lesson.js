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
        "【操作提示｜推进第 3 步，指向底部说明；讲完进入 p60】\n\n4.2 只用飞书 MCP 读过一份需求。日常要把真实工具交给 Agent，MCP 是一种方式；飞书官方目前给个人用户的推荐，是命令行工具。这一节飞书主案例用官方命令行，其他短演示仍用 MCP。我们用一套独立的教学材料来演示，题目是“开发者分享会”。以看懂为主，按需要选做即可。先看清飞书的两种接入方式，再进入演示。"
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
      "lead": "接入飞书有两种方式。后面演示用更适合个人使用的飞书 CLI",
      "html": "<style>#p60 .scene-content{gap:10px}#p60 .p-grid{gap:14px}#p60 .p-grid .p-box{padding:14px 18px}#p60 .p-grid h3{font-size:24px;margin:8px 0 0}#p60 .p-grid p{margin:6px 0 0;font-size:20px;line-height:1.45}#p60 .p-bar{margin-top:4px;padding:10px 18px}</style><div class=\"p-grid\" style=\"--n:2\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"us\"><span class=\"p-tag\" data-role=\"us\">个人使用</span><h3>推荐飞书 CLI</h3><p>本质上是一组技能。Agent 通过技能调用，<br>适合个人使用</p></div><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">团队环境</span><h3>推荐飞书 MCP</h3><p>在团队里要搭建 Agent 工作流时<br>更适合</p></div></div><div class=\"p-bar\" data-reveal=\"1\">主要区别：CLI 本质上是一组技能，适合个人使用；团队里搭建 Agent 工作流时，MCP 更适合</div><div class=\"p-bar is-light\" data-reveal=\"2\">后面用更适合个人使用的飞书 CLI 作演示。没接上也可以看</div>",
      "steps": [
        "两种接入方式",
        "两者的区别",
        "后面用飞书 CLI 演示"
      ],
      "script": [
        "【操作提示｜停留课件 p60 第 1 步，指向两种接入方式；不切窗口】\n\n接入飞书有两种方式。飞书 CLI 本质上是一组技能，也就是 Skill，适合个人使用。在团队环境里，需要搭建 Agent 工作流时，飞书 MCP 更适合。4.2 读需求时用的是 MCP；这一节先把这个区别说清楚，再进入后面的演示。",
        "【操作提示｜推进第 2 步，指向两者的区别】\n\n按官方文档的用法：安装飞书 CLI 之后，要重启所用的 AI 工具，让技能加载。Agent 是通过这组技能去调用命令行，不需要启动 MCP 服务。飞书 MCP 则是按 MCP 协议，把飞书能力接到 Agent 里，更适合在团队里搭建可协作的 Agent 工作流。两种不要混为一谈，也不要把命令行工具说成 MCP。",
        "【操作提示｜推进第 3 步，指向后面的演示方式；讲完进入后面的演示】\n\n这一节是个人使用的场景，所以后面用飞书 CLI 作演示。接入时按官方文档安装，重启 Codex 让对应技能加载，再用本人身份登录一次，命令是 lark-cli auth login。配置时默认会新建应用，也可以选用已有的。凭证和密钥不进公开材料，也不出现在画面上。没接上的同学，也可以看后面的演示。接好之后，就进入演示。"
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
      "segment": "其他推荐",
      "label": "还可以再看这三个",
      "title": "还可以再看这三个？",
      "lead": "画面来自项目公开演示，不是这一节已经实跑的结果。不要求装齐",
      "html": "<style>body[data-mode=\"slides\"] #p69 .scene-content{top:236px;height:432px;gap:10px}body[data-mode=\"slides\"] #p69 .lede{width:1168px}#p69 .p-grid{gap:14px;height:100%;align-items:stretch}#p69 .p-grid .p-box{padding:10px 12px;display:flex;flex-direction:column;min-height:0}#p69 .p-tag{margin-bottom:6px;font-size:16px;padding:4px 8px}#p69 .p-grid h3{font-size:22px;margin:0;line-height:1.3}#p69 .p-grid .hint{margin:4px 0 8px;font-size:16px;line-height:1.35}#p69 .shot{flex:1;min-height:0;overflow:hidden;border-radius:6px;background:#111}#p69 .shot a,#p69 .shot img{display:block;width:100%;height:100%}#p69 .shot img{object-fit:contain}#p69 .src{font-size:13px;color:var(--p-muted);margin:6px 0 0;line-height:1.3}</style><div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">官方</span><h3>GitHub MCP</h3><p class=\"hint\">在仓库里列出 Issue、再开新 Issue。写操作要确认</p><div class=\"shot\"><a href=\"assets/github-mcp-open-issue-official.gif\"><img src=\"assets/github-mcp-open-issue-official.gif\" alt=\"VS Code Copilot 调用 GitHub MCP：已列出 Issue，创建新 Issue 前出现 Continue 确认\"></a></div><p class=\"src\">官方 v0.3.0 发布页演示</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">官方</span><h3>MiniMax MCP</h3><p class=\"hint\">生成图、语音或视频后，打开文件来看</p><div class=\"shot\"><a href=\"assets/minimax-mcp-video-result-official.jpg\"><img src=\"assets/minimax-mcp-video-result-official.jpg\" alt=\"系统播放器正在播放 MiniMax 生成的冲浪视频 video_25659_20250409_195209.mp4\"></a></div><p class=\"src\">官方说明里打开生成视频后的画面</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ctx\">社区</span><h3>FreeCAD MCP</h3><p class=\"hint\">建模过程要在 FreeCAD 窗口里看见</p><div class=\"shot\"><a href=\"assets/freecad-mcp-flange-official.gif\"><img src=\"assets/freecad-mcp-flange-official.gif\" alt=\"对话里调用 FreeCAD MCP，右侧窗口逐步出现法兰盘三维模型\"></a></div><p class=\"src\">项目仓库里的法兰盘建模演示</p></div></div>",
      "steps": [
        "GitHub 官方 MCP",
        "MiniMax 官方 MCP",
        "FreeCAD 社区 MCP"
      ],
      "script": [
        "【操作提示｜停留课件 p69 第 1 步，指向 GitHub 卡片和动图】\n\n前面演示过的工具以外，再看三个能看见结果的 MCP。不要求装齐。先看 GitHub 官方 MCP：在仓库里列出 Issue、再开新 Issue。这是官方发布页里的演示，列出时不用确认，创建前要确认。画面来自公开演示，不是这一节已经实跑的结果。",
        "【操作提示｜推进第 2 步，指向 MiniMax 卡片和截图】\n\n第二个是 MiniMax 官方 MCP，用来生成图、语音或视频。核对方式是打开生成的文件来看。这张截图是官方说明里打开生成视频后的画面。",
        "【操作提示｜推进第 3 步，指向 FreeCAD 卡片和动图；讲完进入 p70】\n\n第三个是 FreeCAD 的社区 MCP。建模过程要在 FreeCAD 窗口里看见，不能只看对话。这是项目仓库里的法兰盘演示。GitHub 和 MiniMax 是官方实现，FreeCAD 是社区实现，账号、网络和本机软件条件都要看清。不要求装齐。"
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
      "label": "其他推荐",
      "seconds": 90
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};

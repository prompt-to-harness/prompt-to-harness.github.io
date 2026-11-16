window.lesson = {
  "title": "除了读一份需求，MCP 日常还能怎么帮我们干活",
  "chapter": "第 4 章 · SDD",
  "section": "04.06",
  "summary": "先做飞书 CLI 主演示，再做实用 MCP 工具推荐；看懂工具用途、实际结果和选用条件；JSON Diff 仍从 4.5 规格基线进入第 5 章。",
  "scenes": [
    {
      "id": "p59",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "除了读一份需求，MCP 日常还能怎么帮我们干活",
      "title": "还能怎么帮我们干活？",
      "lead": "上一节已经提交规格基线。这一节不再改 JSON Diff，先做飞书 CLI 主演示，再做实用 MCP 工具推荐",
      "html": "<style>body[data-mode=\"slides\"] .segment:nth-child(4){min-width:190px}</style><ol class=\"p-map\"><li class=\"is-done\"><b>4.1</b>接手工程</li><li class=\"is-done\"><b>4.2</b>形成 Brief</li><li class=\"is-done\"><b>4.3</b>批准 Spec</li><li class=\"is-done\"><b>4.4</b>写验收</li><li class=\"is-done\"><b>4.5</b>拆任务</li><li class=\"is-now\"><b>4.6</b>MCP 工具</li></ol><div style=\"margin-top:26px\"><div class=\"p-stairs\" data-reveal=\"1\" style=\"--n:5;--rise:14px;column-gap:12px;height:auto\"><div class=\"p-stair\" style=\"--i:0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Brief</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">BRIEF.md</p></div></div><div class=\"p-stair\" style=\"--i:1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Spec</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">SPEC.md</p></div></div><div class=\"p-stair\" style=\"--i:2\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Acceptance</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">ACCEPTANCE.md</p></div></div><div class=\"p-stair\" style=\"--i:3\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Plan</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">PLAN.md</p></div></div><div class=\"p-stair\" style=\"--i:4\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Tasks</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">TASKS.md</p></div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:18px\">本节先做<b>飞书 CLI 主演示</b>，再做<b>实用 MCP 工具推荐</b>；以看懂为主，按需要选做即可</div>",
      "steps": [
        "本章位置",
        "规格主线交给第 5 章",
        "先飞书主演示，再推荐短演示"
      ],
      "script": [
        "【操作提示｜停留课件 p59 第 1 步，指向章节地图上的 4.6；不切窗口】\n\n上一节，我们提交了规格基线。地图上，这一节是工具经验。",
        "【操作提示｜推进第 2 步，指向五层规格，此时都已完成】\n\n五层规格到这里告一段落，实现交给第 5 章。这一节不再改 JSON Diff，也不接着写规格。",
        "【操作提示｜推进第 3 步，指向底部说明；讲完进入 p60】\n\n4.2 只用飞书 MCP 读过一份需求。日常要把真实工具交给 Agent，MCP 是一种方式；飞书官方目前给个人用户的推荐，是命令行工具。这一节先做飞书 CLI 主演示，再做实用 MCP 工具推荐。飞书主演示用官方命令行，后面的推荐短演示仍用 MCP。以看懂为主，按需要选做即可。先看清飞书的两种接入方式，再进入演示。"
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
      "lead": "接入飞书有两种方式。下一页把两套都接上，后面的读写演示用飞书 CLI",
      "html": "<style>#p60 .scene-content{gap:10px}#p60 .p-grid{gap:14px}#p60 .p-grid .p-box{padding:14px 18px}#p60 .p-grid h3{font-size:24px;margin:8px 0 0}#p60 .p-grid p{margin:6px 0 0;font-size:20px;line-height:1.45}#p60 .p-bar{margin-top:4px;padding:10px 18px}</style><div class=\"p-grid\" style=\"--n:2\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"us\"><span class=\"p-tag\" data-role=\"us\">个人使用</span><h3>推荐飞书 CLI</h3><p>本质上是一组技能。Agent 通过技能调用，<br>适合个人使用</p></div><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">团队环境</span><h3>推荐飞书 MCP</h3><p>在团队里要搭建 Agent 工作流时<br>更适合</p></div></div><div class=\"p-bar\" data-reveal=\"1\">主要区别：CLI 本质上是一组技能，适合个人使用；团队里搭建 Agent 工作流时，MCP 更适合</div><div class=\"p-bar is-light\" data-reveal=\"2\">下一页把两套都接上；后面的读写演示用飞书 CLI。没接上也可以看</div>",
      "steps": [
        "两种接入方式",
        "两者的区别",
        "下一页接入，后面用 CLI 演示"
      ],
      "script": [
        "【操作提示｜停留课件 p60 第 1 步，指向两种接入方式；不切窗口】\n\n接入飞书有两种方式。飞书 CLI 本质上是一组技能，也就是 Skill，适合个人使用。在团队环境里，需要搭建 Agent 工作流时，飞书 MCP 更适合。4.2 读需求时用的是 MCP；这一节先把这个区别说清楚。",
        "【操作提示｜推进第 2 步，指向两者的区别】\n\n按官方文档的用法：安装飞书 CLI 之后，要重启所用的 AI 工具，让技能加载。Agent 是通过这组技能去调用命令行，不需要启动 MCP 服务。飞书 MCP 则是按 MCP 协议，把飞书能力接到 Agent 里，更适合在团队里搭建可协作的 Agent 工作流。两种不要混为一谈，也不要把命令行工具说成 MCP。",
        "【操作提示｜推进第 3 步，指向下一页接入和后面的演示方式；讲完进入 p61】\n\n具体怎么创建应用、怎么授权，放到下一页看。后面的读写演示仍用更适合个人使用的飞书 CLI。凭证和密钥不进公开材料，也不出现在画面上。没接上的同学，也可以看后面的演示。"
      ],
      "teaching": [],
      "source": "index.html#p60",
      "seconds": 90
    },
    {
      "id": "p61",
      "segment": "飞书 CLI 主演示",
      "label": "怎样登录并接上飞书 MCP 和飞书 CLI",
      "title": "怎样登录并接上飞书 MCP 和飞书 CLI？",
      "lead": "这一页要把两套都接上。接好之后，后面的读写演示用飞书 CLI。不要把密钥或授权详情贴进对话。",
      "html": "<style>#p61 .scene-content{gap:10px}body[data-mode=\"slides\"] #p61 .scene-content{grid-template-columns:1fr 1fr;gap:14px}body[data-mode=\"slides\"] #p61 .scene-content>.p-bar{grid-column:1/-1}#p61 .p-box{padding:14px 18px}#p61 .p-box h3{font-size:24px;margin:8px 0 0}#p61 .p-box p{margin:6px 0 0;font-size:20px;line-height:1.45}#p61 .p-bar{margin-top:4px;padding:10px 18px}#p61 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}#p61 .p-repro .p-jumps{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 14px}#p61 .p-repro .p-jumps a{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border:1.5px solid #243042;border-radius:8px;background:#FFFDF7;color:#243042;font-weight:700;text-decoration:none}#p61 .p-repro .p-jumps a::after{content:\"↗\";color:#5B6573;font-weight:400}#p61 .p-repro .p-jumps a:hover,#p61 .p-repro .p-jumps a:focus-visible{background:#F1EEE4}#p61 .p-repro .p-jumps a:focus-visible{outline:2px solid #243042;outline-offset:2px}</style><div class=\"p-bar is-light\" data-reveal=\"0\">一套是飞书 MCP，一套是飞书官方 CLI。以看懂为主，按需要选做；没接上也可以看后面的演示</div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">飞书 MCP</span><h3>从创建应用讲到配置</h3><p>创建应用 → 安装并配置 lark-mcp</p><p>完成标志：应用已创建，本地已配置，Agent 能调用飞书工具</p><p class=\"p-go\"><a href=\"https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/mcp_installation\" target=\"_blank\" rel=\"noopener\">打开官方接入文档</a></p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">飞书 CLI</span><h3>把文档链接交给 Agent</h3><p>交给官方文档链接 → 自助安装 Skill → 返回授权链接，由人完成授权</p><p class=\"p-go\"><a href=\"https://open.feishu.cn/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu\" target=\"_blank\" rel=\"noopener\">打开官方说明</a></p></div>",
      "steps": [
        "两套都要接上",
        "接上飞书 MCP",
        "接上飞书 CLI"
      ],
      "script": [
        "【操作提示｜停留课件 p61 第 1 步，指向两套接入；先不切到 Agent 窗口】\n\n这一页要把两套都接上。一套是飞书 MCP，一套是飞书官方 CLI。以看懂为主，按需要选做；没接上也可以看后面的演示。",
        "【操作提示｜推进第 2 步，指向飞书 MCP 卡片上的「打开官方接入文档」按钮和接入步骤；现场演示创建应用并配置 lark-mcp。需要更细的建应用步骤时，在「接入指引」里打开《创建企业自建应用》。不要把密钥或授权详情投到课件上】\n\n先看飞书 MCP：从创建应用开始，讲到安装并配置 lark-mcp。我们只看步骤和完成标志：应用已创建、本地已配置、Agent 能调用飞书工具。密钥、令牌和权限范围清单不要出现在画面或录屏里。",
        "【操作提示｜推进第 3 步，指向飞书 CLI 卡片上的「打开官方说明」按钮和接入步骤；把「接入指引」里的请求发给 Agent，授权页面由人完成。不要把授权详情投到课件上】\n\n再看飞书官方 CLI：把官方文档链接交给本地 Agent，让它自助安装 Skill，再返回授权链接，由我们手动完成授权。主要看这一下交接，不要把安装过程讲成手工逐步敲命令。后面的读写演示，用已经接上的飞书 CLI。哪一步做不到，就按实际完成范围讲。"
      ],
      "repro": {
        "label": "接入指引",
        "note": "飞书 CLI 是一组技能，不要把它说成 MCP。不要把密钥或授权详情发给别人，也不要贴进对话。",
        "steps": [
          {
            "jump": true,
            "text": "本地调用 OpenAPI MCP",
            "links": [
              {
                "text": "本地调用 OpenAPI MCP",
                "url": "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/mcp_installation"
              }
            ]
          },
          {
            "jump": true,
            "text": "创建企业自建应用",
            "links": [
              {
                "text": "创建企业自建应用",
                "url": "https://open.feishu.cn/document/uQjL04CN/ukzM04SOzQjL5MDN"
              }
            ]
          },
          {
            "jump": true,
            "text": "飞书 CLI 官方说明",
            "links": [
              {
                "text": "飞书 CLI 官方说明",
                "url": "https://open.feishu.cn/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu"
              }
            ]
          },
          {
            "text": "飞书 MCP：按官方文档《本地调用 OpenAPI MCP》操作，从在开放者后台创建企业自建应用，讲到安装并配置 lark-mcp。文档里有逐步说明和授权截图。创建应用的更细说明见《创建企业自建应用》。完成后，应能在 Agent 里调用飞书工具。不要把应用密钥贴进对话。",
            "links": [
              {
                "text": "《本地调用 OpenAPI MCP》",
                "url": "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/mcp_installation"
              },
              {
                "text": "《创建企业自建应用》",
                "url": "https://open.feishu.cn/document/uQjL04CN/ukzM04SOzQjL5MDN"
              }
            ]
          },
          {
            "text": "飞书 CLI：把下面这段请求发给本地 Agent，让它按官方文档自助安装 Skill。官方说明见《飞书 CLI 官方说明》。",
            "code": "请阅读 https://open.feishu.cn/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu，按文档在本机自助安装飞书 CLI 对应的 Skill。安装完成后，给出授权链接，由我手动完成授权。",
            "links": [
              {
                "text": "《飞书 CLI 官方说明》",
                "url": "https://open.feishu.cn/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu"
              }
            ]
          },
          {
            "text": "打开 Agent 返回的授权链接，在浏览器里完成授权。之后可以用这套 CLI 读写飞书文档。"
          }
        ]
      },
      "teaching": [],
      "source": "index.html#p61",
      "seconds": 90
    },
    {
      "id": "p62",
      "segment": "飞书 CLI 主演示",
      "layout": "prompt-scene",
      "prompt": "请阅读 <活动方案链接> 这个飞书文档，告诉我这个文档中写了什么。",
      "label": "怎样用一句话加一个链接，让 Agent 读出飞书云文档",
      "title": "怎样用一句话加一个链接，让 Agent 读出飞书云文档？",
      "lead": "将占位符换成你有权访问的活动方案链接，再发给本地 Agent。不要改写这篇用于阅读的文档",
      "html": "<style>#p62 .prompt{height:220px}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>先看清这句请求</b><small>只要一句话和一个链接</small></span></li><li data-reveal=\"1\"><span><b>发给本地 Agent</b><small>看它有没有去读这份文档</small></span></li><li data-reveal=\"2\"><span><b>打开原文核对</b><small>转述要对得上原文，不能只看对话</small></span></li></ol></div>",
      "steps": [
        "先看清这句请求",
        "发给本地 Agent",
        "打开原文核对"
      ],
      "script": [
        "【操作提示｜停留课件 p62 第 1 步，指向发给 Agent 的请求；先不切到 Agent 窗口。请求里的链接是本节的活动方案。不要改写这篇用于阅读的文档，也不要改 4.2 的需求笔记】\n\n这一页做一个短演示：怎样用一句话加一个链接，让已经接上的飞书 CLI 读出一份云文档。先看清这句请求，只要一句话和一个链接。",
        "【操作提示｜推进第 2 步，指向“发给本地 Agent”；把这句请求发给已经接上飞书 CLI 的本地 Agent，等它读完并转述后切回课件】\n\n把请求发出去，看它有没有去读这份文档。如果当时读不到，就按实际完成范围讲，不换别的工具顶上。",
        "【操作提示｜推进第 3 步，打开实际文档，对照 Agent 的转述抽查原文。不要改写这篇文档。讲完进入 p63】\n\n打开实际文档，核对转述是否对得上原文。不能只看对话。"
      ],
      "teaching": [],
      "source": "index.html#p62",
      "seconds": 90
    },
    {
      "id": "p63",
      "segment": "飞书 CLI 主演示",
      "label": "除了读取，怎样让 Agent 更新、上传飞书云文档",
      "title": "除了读取，怎样让 Agent 更新、上传飞书云文档？",
      "lead": "要写清改哪一份、改什么，不要覆盖无关内容。更新和上传是两件事，都要回到实际位置核对。不要改活动方案，也不要改 4.2 的需求笔记",
      "html": "<style>#p63 .scene-content{gap:10px}#p63 .p-box{padding:14px 18px}#p63 .p-box h3{font-size:24px;margin:8px 0 0}#p63 .p-box p{margin:6px 0 0;font-size:20px;line-height:1.45}#p63 .p-bar{margin-top:4px;padding:10px 18px}#p63 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}#p63 .p-repro .p-jumps{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 14px}#p63 .p-repro .p-jumps a{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border:1.5px solid #243042;border-radius:8px;background:#FFFDF7;color:#243042;font-weight:700;text-decoration:none}#p63 .p-repro .p-jumps a::after{content:\"↗\";color:#5B6573;font-weight:400}#p63 .p-repro .p-jumps a:hover,#p63 .p-repro .p-jumps a:focus-visible{background:#F1EEE4}#p63 .p-repro .p-jumps a:focus-visible{outline:2px solid #243042;outline-offset:2px}</style><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">更新</span><h3>只改评审补充的第 2 条</h3><p>把第 2 条改成“每个主题结束后安排 10 分钟答疑”。不要改其他条目，也不要改活动方案</p></div><div class=\"p-bar is-light\" data-reveal=\"1\">打开实际文档，核对第 2 条是否写成了 10 分钟答疑。对话里说“已更新”还不够</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">新建</span><h3>在演示目录新建签到说明</h3><p>新建「开发者分享会 · 签到和入场说明」。更新和上传是两件事，都要回到实际位置核对</p></div>",
      "steps": [
        "指定文档和改动范围",
        "打开实际文档核对",
        "新建后再核对位置和内容"
      ],
      "script": [
        "【操作提示｜停留课件 p63 第 1 步，指向更新评审补充的范围；先不切到 Agent 窗口。更新请求在「发给 Agent 的请求」里，目标是评审补充，只改第 2 条。不要改活动方案，也不要改 4.2 的需求笔记，不要向群聊发消息】\n\n除了读取，还可以让 Agent 更新和上传云文档。先看清这一处更新：只改评审补充的第 2 条，把“把答疑安排写得更明确”改成“每个主题结束后安排 10 分钟答疑”。要写清改哪一份、改什么，不要覆盖无关内容。",
        "【操作提示｜推进第 2 步；把「发给 Agent 的请求」里的更新请求发给已经接上飞书 CLI 的本地 Agent，等它回复后，打开评审补充，核对第 2 条。不要改活动方案】\n\n把更新请求发出去。对话里说“已更新”还不够，要打开实际文档，确认第 2 条是不是写成了 10 分钟答疑。",
        "【操作提示｜推进第 3 步，指向新建签到说明；把「发给 Agent 的请求」里的新建请求发给同一会话。完成后打开演示目录，检查新文档的位置、标题和正文。不要修改目录里的其他文档。讲完进入 p64。哪一步做不到，就按实际完成范围讲】\n\n更新和上传是两件事。再请 Agent 在这个演示目录里，新建一篇「开发者分享会 · 签到和入场说明」。建好之后，打开目录，核对位置、标题和正文。如果当时做不到，就按实际完成范围讲，不换别的工具顶上。"
      ],
      "repro": {
        "label": "发给 Agent 的请求",
        "note": "将占位符换成你有权访问的教学文档和目录链接。只改指定的教学文档，不要改活动方案，也不要改 4.2 的需求笔记。不要向群聊发消息。",
        "steps": [
          {
            "text": "先发出下面这段更新请求。只改评审补充的第 2 条。",
            "code": "请使用飞书官方 CLI，以本人身份，更新这份飞书云文档：\n<评审补充链接>\n\n只改「补充建议」里的第 2 条，把它改成：建议每个主题结束后安排 10 分钟答疑，方便现场控制节奏。\n不要改其他条目，不要改活动方案，也不要向群聊发送消息。改完后告诉我改了哪一处。"
          },
          {
            "text": "打开实际文档，确认第 2 条已经改成 10 分钟答疑，再发出下面这段新建请求。",
            "code": "请使用飞书官方 CLI，以本人身份，在知识库目录\n<演示目录链接>\n下新建一篇云文档，标题为「开发者分享会 · 签到和入场说明」。\n\n正文只写三项，都标明是教学演示、不是正式通知：\n1. 入场时间：活动开始前 15 分钟\n2. 签到方式：现场扫码签到\n3. 请随身携带学生证\n\n不要修改该目录里的其他文档。创建完成后，给出文档链接。"
          },
          {
            "text": "打开演示目录，确认新文档的位置、标题和正文。哪一步做不到，就按实际完成范围讲，不换别的工具顶上。"
          }
        ]
      },
      "teaching": [],
      "source": "index.html#p63",
      "seconds": 90
    },
    {
      "id": "p64",
      "segment": "飞书 CLI 主演示",
      "layout": "prompt-scene",
      "prompt": "请使用飞书官方 CLI，以本人身份，修改这份飞书电子表格：\n<分场次报名统计链接>\n\n只改工作表「报名统计」里场次 C · 开源协作 的「已报名」，改成 <当场给出的人数>。\n不要改其他格子，不要改名额，也不要新增列。改完后告诉我改了哪一格。",
      "label": "怎样用一段 prompt 修改飞书电子表格",
      "title": "怎样用一段 prompt 修改飞书电子表格？",
      "lead": "先分清这是单独的电子表格，不要用云文档里的普通表格代替。只改一个格子，再打开实际表格核对",
      "html": "<style>#p64 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>先看清这是电子表格</b><small>不要用云文档里的普通表格代替</small></span></li><li data-reveal=\"1\"><span><b>发给本地 Agent</b><small>只改场次 C 的已报名，人数由讲师当场给出</small></span></li><li data-reveal=\"2\"><span><b>打开实际表格核对</b><small>看刚才改的那一格，不能只看对话</small></span></li></ol><p>将占位符换成你有权访问的报名统计链接，再填写人数</p></div>",
      "steps": [
        "先看清这是电子表格",
        "发给本地 Agent",
        "打开实际表格核对"
      ],
      "script": [
        "【操作提示｜停留课件 p64 第 1 步，指向画面上的请求和“这是电子表格”这一条；先不切到 Agent 窗口。这是「分场次报名统计」电子表格，工作表是「报名统计」，不是活动方案里那张 40 / 25 / 15 的普通表格。可先打开表格出示给学员。当前场次 C 的已报名是 11。不要改其他格子，也不要新增列】\n\n这一次要用单独的电子表格，不要用云文档里的普通表格代替。先看清请求：只改场次 C「开源协作」的已报名，人数由讲师当场给出。",
        "【操作提示｜推进第 2 步；先把画面请求里的 <当场给出的人数> 改成当场给出的数字，再发给已经接上飞书 CLI 的本地 Agent。只改这一格，不要改名额，不要新增列。等它回复后再进入第 3 步】\n\n先给出要改成的人数，再把请求发出去。只改这一个格子。",
        "【操作提示｜推进第 3 步；打开分场次报名统计，核对场次 C「开源协作」的已报名是否改成了当场给出的数字。不要改用活动方案里的普通表格来顶上。讲完进入 p65。哪一步做不到，就按实际完成范围讲】\n\n打开实际电子表格，看刚才改的那一格。不能只看对话。如果当时做不到，就按实际完成范围讲，不改用云文档里的表来顶上。"
      ],
      "teaching": [],
      "source": "index.html#p64",
      "seconds": 90
    },
    {
      "id": "p65",
      "segment": "飞书 CLI 主演示",
      "layout": "prompt-scene",
      "prompt": "请使用飞书官方 CLI，以本人身份，在知识库目录\n<演示目录链接>\n下新建一个多维表格，标题为「开发者分享会 · 任务追踪」。\n\n用于追踪分摊到各个团队成员的任务，字段为：成员任务、创建时间、优先级、当前进度。\n不要改该目录里的其他文档或表格，也不要用已有表格顶替。如需放入示例记录，请标明是教学演示。创建完成后，给出表格链接。",
      "label": "怎样用一段 prompt 创建任务追踪多维表格",
      "title": "怎样用一段 prompt 创建任务追踪多维表格？",
      "lead": "用一段 prompt 新建多维表格，用来追踪团队任务。这一页是创建，不要用已有表顶替。建好后打开实际表格核对",
      "html": "<style>#p65 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>先看清要建什么</b><small>成员任务、创建时间、优先级、当前进度</small></span></li><li data-reveal=\"1\"><span><b>发给本地 Agent</b><small>建在演示目录，不要用已有表顶替</small></span></li><li data-reveal=\"2\"><span><b>打开实际多维表格核对</b><small>看位置、字段和记录，不能只看对话</small></span></li></ol><p>将占位符换成你有权访问的演示目录链接</p></div>",
      "steps": [
        "先看清要建什么",
        "发给本地 Agent",
        "打开实际多维表格核对"
      ],
      "script": [
        "【操作提示｜停留课件 p65 第 1 步，指向画面上的请求和字段说明；先不切到 Agent 窗口。要建的是新的任务追踪多维表格，字段是成员任务、创建时间、优先级、当前进度。建在本节演示目录。不要改用已有的「主题与跟进」（那是活动主题跟进，字段不同），也不要用电子表格或云文档来顶上】\n\n这一页要新建一张多维表格，用来追踪分摊到各个团队成员的任务。先看清字段：成员任务、创建时间、优先级、当前进度。它和刚才的电子表格不是同一类工具。",
        "【操作提示｜推进第 2 步；把画面上的请求发给已经接上飞书 CLI 的本地 Agent。建在演示目录，标题是「开发者分享会 · 任务追踪」。不要改该目录里的其他文档或表格。等它回复后再进入第 3 步。不预写创建结果或示例记录】\n\n把请求发出去。只说清建在哪里、建什么，先不要在课件上预写结果。",
        "【操作提示｜推进第 3 步；打开演示目录，进入新建的「开发者分享会 · 任务追踪」，核对位置、标题、字段；如有示例记录，看是否标明是教学演示。不要改用「主题与跟进」或电子表格来顶上。讲完进入 p66。哪一步做不到，就按实际完成范围讲】\n\n打开实际多维表格，看位置、字段和记录。不能只看对话。如果当时做不到，就按实际完成范围讲，不改用电子表格或云文档来顶上。"
      ],
      "teaching": [],
      "source": "index.html#p65",
      "seconds": 90
    },
    {
      "id": "p66",
      "segment": "实用 MCP 工具推荐",
      "layout": "prompt-scene",
      "prompt": "请使用 AntV Chart MCP，根据下面这组教学数据生成柱状图。\n\n- AI 编程入门：40\n- 前端项目实践：25\n- 开源协作：15\n\n请使用中文类别标签，并给图表加上能说明含义的标题。生成后，把图片文件保存在当前项目根目录，不要把图表写回飞书。",
      "label": "同一份数据怎样变成图",
      "title": "同一份数据怎样变成图？",
      "lead": "先核对照入的三个教学数据，再用 AntV Chart MCP 生成柱状图。生成后打开项目根目录里的图片核对，不能只看对话。默认会把图表交到远程服务去渲染，本机启动了 MCP，并不等于数据只留在本机。不要把图表回写到飞书当作必须完成的环节",
      "html": "<style>#p66 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}#p66 .p-risk{padding:10px 14px;border:2px solid #D9481C;border-radius:10px 8px 11px 9px;background:#FCE6DD;font-size:16px;line-height:1.45;color:#243042}#p66 .p-risk a{color:inherit;overflow-wrap:anywhere}#p66 .p-pop .p-guide{display:grid;gap:10px;font-size:16px;line-height:1.5}#p66 .p-pop .p-guide p,#p66 .p-pop .p-guide h3{margin:0}#p66 .p-pop .p-guide h3{font-size:18px}#p66 .p-pops{display:flex;flex-wrap:nowrap;gap:8px;align-items:flex-start;min-width:0;width:100%;max-width:100%}#p66 .p-pop{flex:0 0 auto;min-width:0}#p66 .p-preview,#p66 .p-guide{min-width:0;max-width:100%}#p66 .p-preview{display:block}#p66 .p-preview img{display:block;width:100%;max-width:100%;height:auto;background:#fff}#p66 .p-preview-cap{margin:0;font-size:16px;color:var(--p-muted)}body[data-mode='slides'] #p66 .p-preview img{max-height:390px;width:auto;margin-inline:auto}body[data-mode='scroll'] #p66 .p-pops{position:relative}body[data-mode='scroll'] #p66 .p-pop-body{position:absolute;left:0;right:0;width:auto;max-width:100%;min-width:0;box-sizing:border-box;z-index:2}body[data-mode='scroll'] #p66 .p-pops:has(.p-pop[open] .p-preview){padding-bottom:calc((100% - 32px) * 1260 / 2160 + 140px)}body[data-mode='scroll'] #p66 .p-pops:has(.p-pop[open] .p-guide){padding-bottom:calc(min(70vh,640px) + 8px)}body[data-mode='scroll'] #p66 .p-pops:has(.p-pop[open] .p-guide) .p-pop[open] .p-pop-body{max-height:min(70vh,640px);overflow:auto}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>先核对照入数据</b><small>教学数据，不是实测人数</small></span></li><li data-reveal=\"1\"><span><b>发给本地 Agent</b><small>用 AntV 生成柱状图</small></span></li><li data-reveal=\"2\"><span><b>打开结果核对</b><small>打开项目根目录里的图片，不能只看对话</small></span></li></ol><div class=\"p-risk\">默认会把图表交到远程服务 <a href=\"https://antv-studio.alipay.com/api/gpt-vis\" target=\"_blank\" rel=\"noopener\">https://antv-studio.alipay.com/api/gpt-vis</a> 去渲染。本机启动了 MCP，并不等于数据只留在本机</div><div class=\"p-pops\"><details class=\"p-pop\"><summary>安装指引</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>AntV Chart MCP 安装指引</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-guide\"><p>这一页用的是官方 AntV Chart MCP，npm 包是 <code>@antv/mcp-server-chart</code>。本机先要有 Node.js 和 <code>npx</code>。默认不用申请密钥</p><p class=\"p-go\"><a href=\"https://github.com/antvis/mcp-server-chart\" target=\"_blank\" rel=\"noopener\">打开 GitHub 仓库</a><a href=\"https://learn.chatgpt.com/docs/extend/mcp.md\" target=\"_blank\" rel=\"noopener\">打开 Codex 的 MCP 说明</a></p><h3>在 Codex 里安装</h3><p>可以执行下面这条命令。也可以把配置写进 <code>~/.codex/config.toml</code>，保存后重新打开 Codex</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add mcp-server-chart -- npx -y @antv/mcp-server-chart</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.mcp-server-chart]</span><span style=\"display:block\">command = \"npx\"</span><span style=\"display:block\">args = [\"-y\", \"@antv/mcp-server-chart\"]</span></pre></div><h3>在其他桌面应用里配置</h3><p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p><div class=\"p-code\"><div class=\"p-code-head\"><span>MCP 配置</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  \"mcpServers\": {</span><span style=\"display:block\">    \"mcp-server-chart\": {</span><span style=\"display:block\">      \"command\": \"npx\",</span><span style=\"display:block\">      \"args\": [\"-y\", \"@antv/mcp-server-chart\"]</span><span style=\"display:block\">    }</span><span style=\"display:block\">  }</span><span style=\"display:block\">}</span></pre></div><p>接上后，在 Agent 里应能看到绘图工具，例如 <code>generate_column_chart</code></p><h3>数据安全</h3><p>默认会把图表交到远程服务 <a href=\"https://antv-studio.alipay.com/api/gpt-vis\" target=\"_blank\" rel=\"noopener\">https://antv-studio.alipay.com/api/gpt-vis</a> 去渲染。本机启动了 MCP，并不等于数据只留在本机。课上按默认配置即可，不必改渲染地址。如果数据不能离开本机，不要把真实数据交给默认配置</p></div></div></details><details class=\"p-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>柱状图效果示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><a class=\"p-preview\" href=\"assets/antv-column-chart-20261115.png\"><img src=\"assets/antv-column-chart-20261115.png\" alt=\"柱状图标题为各课程模块参与人数对比，横轴是课程模块，纵轴是人数（人）；AI 编程入门为 40，前端项目实践为 25，开源协作为 15\"></a><p class=\"p-preview-cap\">一次实跑生成的柱状图，用来对照类别、数值、中文标签和标题。课上仍要打开项目根目录里当场保存的图片核对</p></div></details></div></div>",
      "steps": [
        "先核对照入数据",
        "发给本地 Agent",
        "打开结果核对"
      ],
      "script": [
        "【操作提示｜停留课件 p66 第 1 步，指向画面上的请求和三个教学数据；先不切到 Agent 窗口。数据来自活动方案里的普通表格：AI 编程入门 40、前端项目实践 25、开源协作 15，不是电子表格。尚未安装的学员，可先点「安装指引」自行安装。需要对照预期效果时，可点「效果示意」。不要把图表回写到飞书】\n\n本页起是实用 MCP 工具推荐。先把同一份数据变成图。先核对照入的三个教学数据：AI 编程入门 40、前端项目实践 25、开源协作 15。这些只是教学数据，不是实测人数。确认类别和数字之后，再交给绘图工具。",
        "【操作提示｜推进第 2 步；把画面上的请求发给已经接上 AntV Chart MCP 的本地 Agent。主画面不放图表；如需对照，可点「效果示意」。等它把图片保存到当前项目根目录后再进入第 3 步】\n\n把请求发出去。这一步是把已经核对过的输入，交给另一个工具来画柱状图。主画面不放图表；如需对照预期效果，可点「效果示意」。课上仍以当场保存的图片为准。",
        "【操作提示｜推进第 3 步；打开当前项目根目录里保存的图片，对照源表检查类别、数值、中文标签和标题。「效果示意」只作对照。如果对话里只有链接或文字说明，仍以根目录里当场保存的文件为准。指向画面上的数据安全说明：默认会把图表交到页面所列的远程服务去渲染。不要把图表回写到飞书当作必须完成的环节。讲完进入 p67。哪一步做不到，就按实际完成范围讲】\n\n打开项目根目录里的图片来看，不能只看对话。再看类别、数值、中文标签和标题是不是对得上源表。还要讲清楚数据安全：默认会把图表交到远程服务去渲染。本机启动了 MCP，并不等于数据只留在本机。课上可以用这组教学数据按默认配置来做；如果是不能离开本机的数据，就不要用默认配置发送。"
      ],
      "teaching": [],
      "source": "index.html#p66",
      "seconds": 90
    },
    {
      "id": "p67",
      "segment": "实用 MCP 工具推荐",
      "layout": "prompt-scene",
      "prompt": "请使用高德地图 MCP，根据下面这些约束安排一次出行。\n\n- 周末从杭州东站出发\n- 安排两个适合步行串联的景点\n- 要区分车站到景点的交通段，以及景点之间的步行段\n\n请按真实查询来选地点和路线。生成后，为交通段和步行段分别给出能在电脑浏览器里直接打开并看到路线的高德路径规划链接（https://uri.amap.com/navigation，并带上起终点坐标、出行方式和 callnative=0；交通段用 mode=bus，步行段用 mode=walk）。不要只用专属地图的 https 等价链接代替。如果还能生成可在高德 App 打开的专属地图，可以一并给出。",
      "label": "出行约束怎样落到地点和路线",
      "title": "出行约束怎样落到地点和路线？",
      "lead": "先看清这几条出行约束，再用高德地图 MCP 做一次真实查询。生成后分别核对文字行程、电脑浏览器里的路线，以及能否在 APP 里打开专属地图。专属地图的 https 等价链接常常只打开官网首页，不等于已经看到路线；返回一个链接，也不等于手机已经打开",
      "html": "<style>#p67 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}#p67 .p-pop .p-guide{display:grid;gap:10px;font-size:16px;line-height:1.5}#p67 .p-pop .p-guide p,#p67 .p-pop .p-guide h3{margin:0}#p67 .p-pop .p-guide h3{font-size:18px}#p67 .p-pops{display:flex;flex-wrap:nowrap;gap:8px;align-items:flex-start;min-width:0;width:100%;max-width:100%}#p67 .p-pop{flex:0 0 auto;min-width:0}#p67 .p-preview,#p67 .p-guide,#p67 .p-preview-stack{min-width:0;max-width:100%}#p67 .p-preview-stack{display:grid;gap:10px}#p67 .p-preview{display:block}#p67 .p-preview img{display:block;width:100%;max-width:100%;height:auto;background:#fff}#p67 .p-preview-cap{margin:0;font-size:16px;color:var(--p-muted)}body[data-mode='slides'] #p67 .p-pop[open] .p-pop-body{max-height:100%;overflow:auto}body[data-mode='scroll'] #p67 .p-pops{position:relative}body[data-mode='scroll'] #p67 .p-pop-body{position:absolute;left:0;right:0;width:auto;max-width:100%;min-width:0;box-sizing:border-box;z-index:2}body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-preview-stack),body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-guide){padding-bottom:calc(min(70vh,640px) + 8px)}body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-preview-stack) .p-pop[open] .p-pop-body,body[data-mode='scroll'] #p67 .p-pops:has(.p-pop[open] .p-guide) .p-pop[open] .p-pop-body{max-height:min(70vh,640px);overflow:auto}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>先看清约束</b><small>不预先指定哪两个景点</small></span></li><li data-reveal=\"1\"><span><b>发给本地 Agent</b><small>用高德做真实查询</small></span></li><li data-reveal=\"2\"><span><b>分别核对结果</b><small>文字行程、浏览器路线和 APP 要分开看</small></span></li></ol><div class=\"p-pops\"><details class=\"p-pop\"><summary>安装指引</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>高德地图 MCP 安装指引</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-guide\"><p>这一页用的是官方高德地图 MCP Server。先要在高德开放平台申请「Web服务」Key。官方推荐用 Streamable HTTP 接入。Key 不要写进公开仓库，也不要出现在课件或录屏里</p><p class=\"p-go\"><a href=\"https://developer.amap.com/api/mcp-server/gettingstarted\" target=\"_blank\" rel=\"noopener\">打开快速接入</a><a href=\"https://developer.amap.com/api/mcp-server/create-project-and-key\" target=\"_blank\" rel=\"noopener\">打开创建应用和 Key</a><a href=\"https://learn.chatgpt.com/docs/extend/mcp.md\" target=\"_blank\" rel=\"noopener\">打开 Codex 的 MCP 说明</a></p><h3>申请 Key</h3><p>登录高德开放平台控制台。在「应用管理」里创建应用，再添加 Key。表单里的「服务平台」必须选「Web服务」，不要选「Web端(JS API)」。创建后妥善保管 Key</p><a class=\"p-preview\" href=\"assets/amap-key-web-service-20261115.png\"><img src=\"assets/amap-key-web-service-20261115.png\" alt=\"添加 Key 时的服务平台选项，箭头指向 Web服务，不要选 Web端(JS API)\"></a><p class=\"p-preview-cap\">「服务平台」要选「Web服务」，不要选「Web端(JS API)」</p><h3>在 Codex 里安装（推荐）</h3><p>可以执行下面这条命令。也可以把配置写进 <code>~/.codex/config.toml</code>，把其中的 Key 换成你自己的，保存后重新打开 Codex</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add amap-maps-streamableHTTP --url \"https://mcp.amap.com/mcp?key=你的Key\"</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.amap-maps-streamableHTTP]</span><span style=\"display:block\">url = \"https://mcp.amap.com/mcp?key=你的Key\"</span></pre></div><h3>在其他桌面应用里配置</h3><p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置，并把 Key 换成你自己的</p><div class=\"p-code\"><div class=\"p-code-head\"><span>MCP 配置</span></div><pre><span style=\"display:block\">{</span><span style=\"display:block\">  \"mcpServers\": {</span><span style=\"display:block\">    \"amap-maps-streamableHTTP\": {</span><span style=\"display:block\">      \"url\": \"https://mcp.amap.com/mcp?key=你的Key\"</span><span style=\"display:block\">    }</span><span style=\"display:block\">  }</span><span style=\"display:block\">}</span></pre></div><h3>如果客户端只支持本地 stdio</h3><p>可以用官方 npm 包 <code>@amap/amap-maps-mcp-server</code>，并把 Key 放在环境变量 <code>AMAP_MAPS_API_KEY</code> 里。这条路径需要 Node.js v22.14.0 或更高版本</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add amap-maps --env AMAP_MAPS_API_KEY=你的Key -- npx -y @amap/amap-maps-mcp-server</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.amap-maps]</span><span style=\"display:block\">command = \"npx\"</span><span style=\"display:block\">args = [\"-y\", \"@amap/amap-maps-mcp-server\"]</span><span style=\"display:block\"></span><span style=\"display:block\">[mcp_servers.amap-maps.env]</span><span style=\"display:block\">AMAP_MAPS_API_KEY = \"你的Key\"</span></pre></div><p>接上后，用 <code>/mcp</code> 或设置页确认已经能看到地点搜索、路径规划等工具。这一页还要用到生成专属地图，建议按官方推荐走 Streamable HTTP</p></div></div></details><details class=\"p-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>浏览器路线效果示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-preview-stack\"><a class=\"p-preview\" href=\"assets/amap-nav-bus-20261115.jpg\"><img src=\"assets/amap-nav-bus-20261115.jpg\" alt=\"电脑浏览器打开交通段路径规划后，起点是杭州东站，终点是杭州博物馆（吴山馆区），左侧列出公交和地铁方案，地图上画出路线\"></a><p class=\"p-preview-cap\">一次实跑在电脑浏览器里打开后的交通段路线</p><a class=\"p-preview\" href=\"assets/amap-nav-walk-20261115.jpg\"><img src=\"assets/amap-nav-walk-20261115.jpg\" alt=\"电脑浏览器打开步行段路径规划后，起点是杭州博物馆（吴山馆区），终点是鼓楼，左侧是步行指引，地图上画出步行路线\"></a><p class=\"p-preview-cap\">一次实跑在电脑浏览器里打开后的步行段路线。课上仍要打开当场给出的链接核对</p></div></div></details></div></div>",
      "steps": [
        "先看清约束",
        "发给本地 Agent",
        "分别核对结果"
      ],
      "script": [
        "【操作提示｜停留课件 p67 第 1 步，指向画面上的请求和三条约束；先不切到 Agent 窗口。不预先指定哪两个景点。尚未安装的学员，可先点「安装指引」自行安装。需要对照预期效果时，可点「效果示意」。不要在画面上展示 Key】\n\n先看清这几条出行约束：周末从杭州东站出发，安排两个适合步行串联的景点；要区分车站到景点的交通段，以及景点之间的步行段。地点和路线以当场查询为准，不要预先写好成功结果。",
        "【操作提示｜推进第 2 步；把画面上的请求发给已经接上高德地图 MCP 的本地 Agent。主画面不放路线图；如需对照，可点「效果示意」。等它给出可在电脑浏览器打开的路径规划链接后再进入第 3 步】\n\n把请求发出去。这一步是把已经看清的约束，交给高德做一次真实查询，并分别给出交通段和步行段、能在电脑浏览器里直接看到路线的路径规划链接。",
        "【操作提示｜推进第 3 步；分别核对文字行程、电脑浏览器里的路线，以及能否在 APP 里打开专属地图。「效果示意」只作对照，仍以当场打开的链接为准。指出常见误判：专属地图的 https 等价链接常常只打开官网首页，不等于已经看到路线；返回一个链接，也不等于手机已经打开。百度地图只作为替代说明，不在这一页再做一遍。讲完进入 p68。哪一步做不到，就按实际完成范围讲】\n\n这三样要分开看：文字行程、电脑浏览器里的路线，以及能不能在 APP 里打开专属地图。专属地图的 https 等价链接常常只打开官网首页，不等于已经看到路线；返回一个链接，也不等于手机已经打开。哪一步当时做不到，就按实际完成范围讲，不要改用别的地图工具在这一页再做一遍。"
      ],
      "teaching": [],
      "source": "index.html#p67",
      "seconds": 90
    },
    {
      "id": "p68",
      "segment": "实用 MCP 工具推荐",
      "label": "这几个常用 MCP 各能看见什么结果",
      "title": "这几个常用 MCP 各能看见什么结果？",
      "lead": "四个常用 MCP 排成田字。各格内的安装指引、测试请求和效果示意可按需要展开。课上仍以当场看见的结果为准",
      "html": "<style>body[data-mode='slides'] #p68 .scene-content{top:236px;height:432px;gap:10px}body[data-mode='slides'] #p68 .lede{width:1168px}#p68 .p-wrap{display:flex;flex-direction:column;gap:10px;height:100%;min-width:0}#p68 .p-grid{flex:1;gap:12px;align-items:stretch;min-height:0;grid-template-columns:1fr 1fr}body[data-mode='scroll'] #p68 .p-grid{grid-template-columns:1fr 1fr!important}@media(max-width:700px){body[data-mode='scroll'] #p68 .p-grid{grid-template-columns:1fr!important}}#p68 .p-mcp{display:flex;flex-direction:column;min-height:0;padding:12px 16px;position:static;isolation:auto;border:2px solid var(--c,#243042);border-radius:14px 10px 15px 11px;background:var(--cl,#FFFDF7)}#p68 .p-mcp::before{content:none;display:none}#p68 .p-mcp .p-tag{margin-bottom:6px;font-size:16px;padding:4px 8px}#p68 .p-mcp h3{font-size:22px;margin:0 0 4px;line-height:1.3}#p68 .p-mcp .hint{margin:0;font-size:16px;line-height:1.4;flex:1;color:var(--p-ink)}#p68 .p-acts{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}#p68 .p-foot{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center}#p68 .p-foot .p-note{margin:0;font-size:16px;line-height:1.35;color:var(--p-muted);flex:1;min-width:0}#p68 .p-go{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}#p68 .p-pop .p-guide{display:grid;gap:10px;font-size:16px;line-height:1.5}#p68 .p-pop .p-guide p,#p68 .p-pop .p-guide h3{margin:0}#p68 .p-pop .p-guide h3{font-size:18px}#p68 .p-pop .p-guide .p-code pre{white-space:pre-wrap;overflow-wrap:anywhere}#p68 .p-preview,#p68 .p-guide{min-width:0;max-width:100%}#p68 .p-preview{display:block}#p68 .p-preview img{display:block;width:100%;max-width:100%;height:auto;background:#fff}#p68 .p-preview-cap{margin:0;font-size:16px;color:var(--p-muted)}#p68 .p-pop .prompt{margin:0;padding:0;background:#000;color:#FAFAF7;border:1px solid #000;border-radius:8px;overflow:hidden}#p68 .p-pop .prompt-label{background:#000;color:#FAFAF7;border-bottom:1px solid #545454;display:flex;align-items:center;justify-content:space-between;padding:12px 18px;gap:12px}#p68 .p-pop .copy-button{background:#000;color:#FFF;border:1px solid #AAA;font-size:18px;padding:5px 12px;white-space:nowrap}#p68 .p-pop .copy-button:hover{background:#303030}#p68 .p-pop .prompt pre{display:block;margin:0;padding:18px;background:#000;color:#FAFAF7;border:0;border-radius:0;font:20px/1.6 var(--font-code,var(--p-mono,monospace));white-space:pre-wrap;overflow-wrap:anywhere}#p68 .p-pop .prompt code{background:none;color:inherit;font:inherit;padding:0;border:0}body[data-mode='slides'] #p68 .p-preview img{max-height:360px;width:auto;margin-inline:auto}body[data-mode='slides'] #p68 .p-pop[open] .p-pop-body{overflow:auto}body[data-mode='scroll'] #p68 .p-wrap{position:relative;height:auto;margin-bottom:var(--p-pop-space,0px)}body[data-mode='scroll'] #p68 .p-pop-body{position:absolute;left:0;right:0;top:100%;width:auto;max-width:100%;min-width:0;box-sizing:border-box;margin-top:8px;max-height:min(70vh,640px);overflow:auto;z-index:2}</style><div class=\"p-wrap\"><div class=\"p-grid\" style=\"--n:2\"><div class=\"p-box p-mcp\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">社区</span><h3>12306-mcp</h3><p class=\"hint\">查询 12306 的列车时刻、余票和中转，只查不买</p><div class=\"p-acts\"><details class=\"p-pop\" name=\"p68-pop\"><summary>安装指引</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>12306-mcp 安装指引</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-guide\"><p class=\"p-go\"><a href=\"https://github.com/Joooook/12306-mcp\" target=\"_blank\" rel=\"noopener\">打开 12306-mcp 说明</a><a href=\"https://learn.chatgpt.com/docs/extend/mcp.md\" target=\"_blank\" rel=\"noopener\">打开 Codex 的 MCP 说明</a></p><p>本机先准备符合项目版本要求的 Node.js 和 <code>npx</code></p><p>只查询车次和中转，依赖上游接口，不是购票或抢票工具，也不需要 Key。启动时会请求 12306 官网；若在 <code>/mcp</code> 里显示 failed，可先在终端运行一次 <code>npx -y 12306-mcp@latest</code>，并在配置里加上 <code>startup_timeout_sec = 60</code>。查询结果里有时会混进同城其他车站，要核对应出发站和到达站</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add 12306-mcp -- npx -y 12306-mcp</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.12306-mcp]</span><span style=\"display:block\">command = \"npx\"</span><span style=\"display:block\">args = [\"-y\", \"12306-mcp\"]</span><span style=\"display:block\">startup_timeout_sec = 60</span></pre></div><p>接上后可用 <code>codex mcp list</code> 确认</p><h3>在其他桌面应用里配置</h3><p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p><div class=\"p-code\"><div class=\"p-code-head\"><span>MCP 配置</span></div><pre>{\n  &quot;mcpServers&quot;: {\n    &quot;12306-mcp&quot;: {\n      &quot;command&quot;: &quot;npx&quot;,\n      &quot;args&quot;: [\n        &quot;-y&quot;,\n        &quot;12306-mcp&quot;\n      ]\n    }\n  }\n}</pre></div></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>测试请求</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>发给 Codex 的请求 · 12306</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"prompt\"><div class=\"prompt-label\"><span>发给 Codex 的请求 · 12306</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.prompt').querySelector('code').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制请求'},1600)}).catch(function(){b.textContent='复制失败'})\">复制请求</button></div><pre><code class=\"language-text\">请使用 12306-mcp，查询明天从杭州东到上海虹桥的高铁或动车车次。\n\n请列出 2 到 3 趟可选车次，每趟写清车次号、出发和到达时刻、历时。请核对出发站和到达站是否就是杭州东和上海虹桥。不要购票，也不要改签。</code></pre></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>12306-mcp 效果示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><a class=\"p-preview\" href=\"assets/12306-trains-20261116.jpg\"><img src=\"assets/12306-trains-20261116.jpg\" alt=\"一次实跑查出明天从杭州东到上海虹桥的 3 趟车次：D942、G7344、G256，并写清了出发、到达时刻和历时\"></a><p class=\"p-preview-cap\">一次实跑查出的车次。课上仍以当场查询为准，余票和票价会变动</p></div></details></div></div><div class=\"p-box p-mcp\" data-role=\"tool\"><span class=\"p-tag\" data-role=\"tool\">官方</span><h3>Playwright MCP</h3><p class=\"hint\">控制本机浏览器，打开网页并查看或操作页面内容</p><div class=\"p-acts\"><details class=\"p-pop\" name=\"p68-pop\"><summary>安装指引</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>Playwright MCP 安装指引</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-guide\"><p class=\"p-go\"><a href=\"https://github.com/microsoft/playwright-mcp\" target=\"_blank\" rel=\"noopener\">打开 Playwright MCP 说明</a><a href=\"https://learn.chatgpt.com/docs/extend/mcp.md\" target=\"_blank\" rel=\"noopener\">打开 Codex 的 MCP 说明</a></p><p>本机先准备符合项目版本要求的 Node.js 和 <code>npx</code></p><p>官方文档也可看 <a href=\"https://playwright.dev/docs/getting-started-mcp\" target=\"_blank\" rel=\"noopener\">Playwright 入门</a>。默认会弹出可见的浏览器窗口，适合课上核对；不要加 <code>--headless</code>。第一次启动可能会下载浏览器，稍等即可</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add playwright npx \"@playwright/mcp@latest\"</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.playwright]</span><span style=\"display:block\">command = \"npx\"</span><span style=\"display:block\">args = [\"@playwright/mcp@latest\"]</span></pre></div><p>接上后可用 <code>codex mcp list</code> 确认</p><h3>在其他桌面应用里配置</h3><p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p><div class=\"p-code\"><div class=\"p-code-head\"><span>MCP 配置</span></div><pre>{\n  &quot;mcpServers&quot;: {\n    &quot;playwright&quot;: {\n      &quot;command&quot;: &quot;npx&quot;,\n      &quot;args&quot;: [\n        &quot;@playwright/mcp@latest&quot;\n      ]\n    }\n  }\n}</pre></div></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>测试请求</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>发给 Codex 的请求 · Playwright</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"prompt\"><div class=\"prompt-label\"><span>发给 Codex 的请求 · Playwright</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.prompt').querySelector('code').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制请求'},1600)}).catch(function(){b.textContent='复制失败'})\">复制请求</button></div><pre><code class=\"language-text\">请使用 Playwright MCP，在本机弹出可见的浏览器窗口（不要使用无头模式），打开 https://playwright.dev/docs/intro ，核对页面中是否出现 Installation 或安装相关标题，并把你在页面上实际看到的这一项原文告诉我。不要登录，也不要修改页面。</code></pre></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>Playwright MCP 效果示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><a class=\"p-preview\" href=\"assets/playwright-docs-intro-20261116.jpg\"><img src=\"assets/playwright-docs-intro-20261116.jpg\" alt=\"可见浏览器窗口打开 Playwright 入门文档后，页面主标题是 Installation\"></a><p class=\"p-preview-cap\">一次实跑在可见浏览器窗口里打开后的页面。课上仍要在当场弹出的窗口里核对</p></div></details></div></div><div class=\"p-box p-mcp\" data-role=\"tool\"><span class=\"p-tag\" data-role=\"tool\">官方</span><h3>Context7</h3><p class=\"hint\">查阅指定库的最新文档。查询会发到线上服务。</p><div class=\"p-acts\"><details class=\"p-pop\" name=\"p68-pop\"><summary>安装指引</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>Context7 安装指引</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-guide\"><p class=\"p-go\"><a href=\"https://context7.com/docs/clients/codex\" target=\"_blank\" rel=\"noopener\">打开 Context7 说明</a><a href=\"https://learn.chatgpt.com/docs/extend/mcp.md\" target=\"_blank\" rel=\"noopener\">打开 Codex 的 MCP 说明</a></p><p>本机先准备符合项目版本要求的 Node.js 和 <code>npx</code></p><p>文档检索会发到 Context7 的在线服务。本机启动了 MCP，并不等于查询只留在本机。可以先不加 Key；需要更高额度时，到 <a href=\"https://context7.com/dashboard\" target=\"_blank\" rel=\"noopener\">Context7 后台</a> 申请免费 Key，只放进本机配置，不要发到对话或公开材料里。官方还有一键命令 <code>npx ctx7 setup --codex</code>，它可能改本机 <code>AGENTS.md</code>，课堂演示更建议只用下面这种手动接入</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add context7 -- npx -y @upstash/context7-mcp</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.context7]</span><span style=\"display:block\">command = \"npx\"</span><span style=\"display:block\">args = [\"-y\", \"@upstash/context7-mcp\"]</span><span style=\"display:block\">startup_timeout_sec = 20</span></pre></div><p>接上后可用 <code>codex mcp list</code> 确认</p><h3>在其他桌面应用里配置</h3><p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p><div class=\"p-code\"><div class=\"p-code-head\"><span>MCP 配置</span></div><pre>{\n  &quot;mcpServers&quot;: {\n    &quot;context7&quot;: {\n      &quot;command&quot;: &quot;npx&quot;,\n      &quot;args&quot;: [\n        &quot;-y&quot;,\n        &quot;@upstash/context7-mcp&quot;\n      ]\n    }\n  }\n}</pre></div></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>测试请求</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>发给 Codex 的请求 · Context7</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"prompt\"><div class=\"prompt-label\"><span>发给 Codex 的请求 · Context7</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.prompt').querySelector('code').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制请求'},1600)}).catch(function(){b.textContent='复制失败'})\">复制请求</button></div><pre><code class=\"language-text\">请使用 Context7，查阅 Playwright 中 page.goto 的用法。\n\n请先解析对应的库 ID，再查询文档，核对返回内容是否针对 Playwright 的 page.goto，而不是其他同名 API。请摘录文档中关于该 API 的关键说明（例如参数或默认行为），并注明库名和版本。如果返回了文档链接，请打开链接核对。不要把任何 API Key 写进对话。</code></pre></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>Context7 效果示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p>一次实跑查到的是 Playwright 的 page.goto，并打开了返回的官方文档链接做核对。课上仍要打开当场返回的链接，检查库名、版本和内容是否对得上当前问题</p></div></details></div></div><div class=\"p-box p-mcp\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">社区</span><h3>MCP for Blender</h3><p class=\"hint\">操作本机已打开的 Blender，在 3D 视窗里创建或修改场景</p><div class=\"p-acts\"><details class=\"p-pop\" name=\"p68-pop\"><summary>安装指引</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>MCP for Blender 安装指引</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-guide\"><p class=\"p-go\"><a href=\"https://github.com/ahujasid/mcp-for-blender\" target=\"_blank\" rel=\"noopener\">打开 MCP for Blender 说明</a><a href=\"https://learn.chatgpt.com/docs/extend/mcp.md\" target=\"_blank\" rel=\"noopener\">打开 Codex 的 MCP 说明</a></p><p>这次短演示用社区插件 MCP for Blender，不要和 Blender Lab 的<a href=\"https://www.blender.org/lab/mcp-server/\" target=\"_blank\" rel=\"noopener\">官方 MCP</a> 搞混，官方那套需要 Blender 5.1 或更高。本机先安装 Blender 3.0 或更高版本，可到 <a href=\"https://www.blender.org/download/\" target=\"_blank\" rel=\"noopener\">官方下载页</a>，或用 <code>brew install --cask blender</code>。再安装 <code>uv</code>（macOS 可用 <code>brew install uv</code>，不要用 <code>pip install uv</code>），然后执行：</p><div class=\"p-code\"><div class=\"p-code-head\"><span>Codex 命令</span></div><pre><span style=\"display:block\">codex mcp add blender -- uvx mcp-for-blender</span><span style=\"display:block\">uvx mcp-for-blender install-addon</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>~/.codex/config.toml</span></div><pre><span style=\"display:block\">[mcp_servers.blender]</span><span style=\"display:block\">command = \"uvx\"</span><span style=\"display:block\">args = [\"mcp-for-blender\"]</span></pre></div><p>然后在 Blender 里打开 Edit → Preferences → Add-ons，启用 Interface: MCP for Blender。演示时要先打开 Blender，在 3D 视窗按 <code>N</code>，确认 MCP for Blender 面板里的服务已启动。结果必须在 Blender 窗口里看见，不能只看对话。操作前先保存 Blender 文件，因为它可以在软件里执行 Python 代码。这个插件默认会记一条匿名使用记录（工具名、是否成功、版本等），提示词和场景内容默认不采集；不想记的话，可在配置的 <code>env</code> 里加上 <code>DISABLE_TELEMETRY = \"true\"</code></p><p>接上后可用 <code>codex mcp list</code> 确认</p><h3>在其他桌面应用里配置</h3><p>如果用 Cursor、Claude Desktop 等桌面应用，把下面这段加进该应用的 MCP 配置。以下按 macOS 来写</p><div class=\"p-code\"><div class=\"p-code-head\"><span>MCP 配置</span></div><pre>{\n  &quot;mcpServers&quot;: {\n    &quot;blender&quot;: {\n      &quot;command&quot;: &quot;uvx&quot;,\n      &quot;args&quot;: [\n        &quot;mcp-for-blender&quot;\n      ]\n    }\n  }\n}</pre></div></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>测试请求</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>发给 Codex 的请求 · Blender</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"prompt\"><div class=\"prompt-label\"><span>发给 Codex 的请求 · Blender</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.prompt').querySelector('code').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制请求'},1600)}).catch(function(){b.textContent='复制失败'})\">复制请求</button></div><pre><code class=\"language-text\">请先确认本机 Blender 已经打开，并且 MCP for Blender 服务已启动。操作前请先保存当前 Blender 文件。\n\n请使用 MCP for Blender，在当前场景里创建一个圆环（Torus），放在默认立方体旁边，并确保能在 Blender 窗口的 3D 视窗中看见它。创建后告诉我这个物体的名称和位置。不要删除现有场景里的其他内容，也不要执行与这次演示无关的 Python 代码。</code></pre></div></div></details><details class=\"p-pop\" name=\"p68-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>MCP for Blender 效果示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><a class=\"p-preview\" href=\"assets/blender-torus-20261116.jpg\"><img src=\"assets/blender-torus-20261116.jpg\" alt=\"Blender 的 3D 视窗里，默认立方体旁边有一个圆环 Torus\"></a><p class=\"p-preview-cap\">一次实跑在 Blender 窗口里看到的圆环。课上仍要在本机 Blender 窗口里核对</p></div></details></div></div></div><div class=\"p-foot\"><p class=\"p-note\">四个都要看见实际结果，不能只看对话。哪一个当时做不到，就按实际范围讲，不换别的工具顶上</p></div></div>",
      "steps": [
        "12306 查车次或中转",
        "Playwright 打开页面核对",
        "Context7 查接口文档",
        "Blender 在本机看到圆环"
      ],
      "script": [
        "【操作提示｜停留课件 p68 第 1 步，指向左上角 12306 这一格。尚未安装的学员，可先点这一格里的「安装指引」。需要对照时，点这一格里的「效果示意」。不要把查到的车次预写到主画面】\n\n这一页四个常用 MCP 排成田字，每格只介绍一个。先看 12306：查一次具体车次或中转。这是社区实现，依赖上游接口，不是购票或抢票工具。点开这一格的「测试请求」发给已经接上 12306-mcp 的本地 Agent。列出的车次要核对应出发站和到达站，因为结果里有时会混进同城其他车站。",
        "【操作提示｜推进第 2 步，指向右上角 Playwright 这一格。点开「测试请求」。确认本机弹出了可见的浏览器窗口，不要使用无头模式。主画面不放页面内容；如需对照，点这一格里的「效果示意」】\n\n第二个是 Playwright。打开指定页面，核对页面上的一项内容。要在可见的浏览器窗口里看见操作和结果，不能只看对话。",
        "【操作提示｜推进第 3 步，指向左下角 Context7 这一格。不要在画面或对话里展示 API Key。提醒：查询会发到线上服务；打开返回的文档链接核对版本和内容】\n\n第三个是 Context7。针对一个具体的库或接口查文档，打开返回结果，看版本和内容是否对得上当前问题。文档检索会发到线上服务，本机启动了 MCP，并不等于查询只留在本机。摘录也可能有出入，要以打开的官方文档为准。",
        "【操作提示｜推进第 4 步，指向右下角 Blender 这一格。演示前确认本机 Blender 已打开，MCP for Blender 服务已启动，并已保存文件。结果必须在 Blender 窗口里看见。「效果示意」只作对照。讲完进入 p69。哪一个做不到，就按实际范围讲，不换别的工具顶上】\n\n最后一个是 MCP for Blender。在当前场景里创建一个圆环，放在默认立方体旁边。要在本机 Blender 窗口里看见结果，不能只看对话。先打开 Blender 并确认服务已启动，操作前先保存文件。哪一个当时做不到，就按实际范围讲，不要换别的工具顶上。"
      ],
      "teaching": [],
      "source": "index.html#p68",
      "seconds": 120
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
        "【操作提示｜停留课件 p69 第 1 步，指向 GitHub 卡片和动图】\n\n实用 MCP 工具推荐之外，再看三个能看见结果的 MCP。不要求装齐。先看 GitHub 官方 MCP：在仓库里列出 Issue、再开新 Issue。这是官方发布页里的演示，列出时不用确认，创建前要确认。画面来自公开演示，不是这一节已经实跑的结果。",
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
      "label": "文档已经改好了，接下来检查什么",
      "title": "文档已经改好了，接下来检查什么？",
      "lead": "请先判断，再看参考结论。这是本节的学员判断",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:26px;margin:10px 0 0\">如果对话里出现“文档已经改好了”或“多维表格已创建”，下一步该做什么？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:16px\">打开实际文档或多维表格，核对<b>位置、标题或字段、正文或记录</b>是否符合刚才的请求。不能只看对话里的“已完成”</div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:12px 18px;margin-top:14px\"><span class=\"p-tag\" data-role=\"ctx\">同样适用于后面的演示</span><p style=\"font-size:20px;margin:8px 0 0\">更新或创建之后，也要回到实际结果看变化。对话说明和可见结果，各有要核对的对象</p></div>",
      "steps": [
        "先判断",
        "打开实际结果核对",
        "更新或创建后也要再看"
      ],
      "script": [
        "【操作提示｜停留课件 p70 第 1 步，指向情境，先不要往下翻】\n\n回到飞书主演示。如果对话里出现“文档已经改好了”或“多维表格已创建”，下一步该做什么？先停在这里，自己想一想。",
        "【操作提示｜推进第 2 步，指向应检查的几项】\n\n打开实际文档或多维表格，核对位置、标题或字段、正文或记录是否符合刚才的请求。不能只看对话里的“已完成”。",
        "【操作提示｜推进第 3 步，指向补充判断；讲完进入 p71】\n\n更新或创建之后，也要回到实际结果看变化。这个判断同样适用于后面的图表和地图：对话说明和可见结果，各有要核对的对象。"
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
        "【操作提示｜停留课件 p71 第 1 步，指向中间的判断】\n\n回到开头的问题。除了读一份需求，日常还能把飞书接到 Agent 上，用来读、改、上传资料，也能新建表格来追踪任务，还能把同一份数据接到图、路线和其他常用工具上。飞书这一段用官方命令行工具，实用推荐短演示用 MCP。每次都要对照来源和实际结果，不能只看对话。",
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
      "label": "飞书 CLI 主演示",
      "seconds": 450
    },
    {
      "label": "实用 MCP 工具推荐",
      "seconds": 300
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

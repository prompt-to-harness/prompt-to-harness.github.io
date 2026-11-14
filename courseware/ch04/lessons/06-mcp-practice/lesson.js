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
      "segment": "实用 MCP 工具推荐",
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
      "segment": "实用 MCP 工具推荐",
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
      "seconds": 90
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

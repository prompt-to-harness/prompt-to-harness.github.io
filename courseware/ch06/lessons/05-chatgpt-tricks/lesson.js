window.lesson = {
  "title": "ChatGPT app 有哪些 trick 值得带走",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.05",
  "summary": "先与 5.5 的 Codex CLI 招数分清边界，只讲网页、桌面和手机上的 ChatGPT 应用本身；七条招数只看不跟做，课上只演示核验过的项。",
  "prep": [
    "录制前按当前账号套餐、所在地区与客户端版本逐项核验七条能力；不可用或与 5.5 预留演示重叠的项直接留官方说明，不临场改用未证实操作。",
    "如需切真实应用窗口演示，先开启临时或演示专用空项目，遮盖个人历史对话标题、邮箱与私人文件。",
    "全程严守术语表：终端主入口称 Codex CLI，可选编码图形界面称 Codex App，不用「ChatGPT App」泛指后者。"
  ],
  "scenes": [
    {
      "id": "p41",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "ChatGPT app 有哪些 trick 值得带走",
      "title": "ChatGPT app 有哪些 trick 值得带走？",
      "lead": "6.4 已完成 CR-01 与真人 UAT；本节不改产品、不作第 7 章门禁，轻松看一组 ChatGPT 应用技巧",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>6.1</b>定位 SDD 与 GSD</li><li class=\"is-done\"><b>6.2</b>构建工作流</li><li class=\"is-done\"><b>6.3</b>验收流程</li><li class=\"is-done\"><b>6.4</b>完成 CR-01</li><li class=\"is-now\"><b>6.5</b>应用招数</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;gap:18px;margin-top:16px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:12px 18px\"><div class=\"p-head\"><h3 style=\"font-size:24px\">5.5 已经讲过</h3><span class=\"p-tag\" data-role=\"ctx\">终端主入口</span></div><p style=\"font-size:19px\"><b>Codex CLI</b> 里的编码招数（<code>/side</code>、<code>/fork</code>、按截图改界面等）</p></div><div class=\"p-join\"><b style=\"font-size:34px\">⇄</b><span>职责<br>分开</span></div><div class=\"p-box\" data-role=\"tool\" style=\"padding:12px 18px\"><div class=\"p-head\"><h3 style=\"font-size:24px\">6.5 本节来看</h3><span class=\"p-tag\" data-role=\"tool\">只看不跟做</span></div><p style=\"font-size:19px\"><b>ChatGPT 应用</b>（网页 · 桌面 · 手机）；可选编码图形界面仍称 <b>Codex App</b></p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px;font-size:20px\">七条招数按录制版本核验挑选：核验过的看现象，未核验的只留官方说明，不作第 7 章门禁</div>",
      "steps": [
        "本章位置",
        "与 5.5 及 Codex App 分清边界",
        "只看不跟做的挑选用规"
      ],
      "script": [
        "【操作提示｜停留课件 p41 第 1 步，指向章节地图上的 6.5；不切窗口】\n\n上一节我们已经把 CR-01 落进代码，也走完了人工 UAT。地图来到本章最后一节 6.5：这一节不再改动任何产品文件，也不再拿刚才的测试记录做判断。",
        "【操作提示｜推进第 2 步，指向左右两张分工卡；不切窗口】\n\n先把边界和 5.5 分清楚。5.5 聊的是终端主入口 Codex CLI 里的招数；6.5 聊的是网页、桌面和手机上的 ChatGPT 应用本身。顺手再提醒一次课程术语：可选的编码图形界面统一叫 Codex App，不要用「ChatGPT App」去代指它。",
        "【操作提示｜推进第 3 步，指向底部挑选用规条；讲完进入 p42】\n\n这一节全程只看不跟做，更不是进入第 7 章的门禁。七条日常招数先列在清单里，录制时按套餐、地区和实际版本核验：核验过的现场看一眼，没核验的只留官方说明，绝不临场瞎猜。先看第一招：怎么把一件事单独装起来。"
      ],
      "teaching": [],
      "source": "index.html#p41",
      "seconds": 90
    },
    {
      "id": "p42",
      "segment": "可以带走的招数",
      "label": "怎样把一件事单独放在一起，避免和别的聊天串掉",
      "title": "怎样把一件事单独装好、不串掉？",
      "lead": "把文件、指令和对话放进同一个「项目」里；需要隔离时打开「仅项目记忆」，避免和别的聊天串在一起。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.28fr auto 1fr;gap:18px;align-items:stretch\"><div class=\"p-set is-solid\" data-role=\"tool\" data-reveal=\"0\" style=\"padding:12px 18px 14px\"><h3 style=\"font-size:23px;margin-bottom:8px\">项目（Project）独立空间 <span class=\"p-chip\" data-role=\"ok\" data-reveal=\"1\" style=\"margin-left:8px;font-size:16px\">开启：仅项目记忆</span></h3><div class=\"p-items\" style=\"gap:6px\"><div class=\"p-item\" style=\"font-size:18.5px;padding:5px 12px\"><b>专属指令</b> · 只对这一件事生效的口吻与输出约定</div><div class=\"p-item\" style=\"font-size:18.5px;padding:5px 12px\"><b>项目文件</b> · 背景文档、表格与参考资料集中存放</div><div class=\"p-item is-picked\" style=\"font-size:18.5px;padding:5px 12px\"><b>内部对话</b> · 同项目内多轮聊天可彼此引用上下文</div></div></div><div class=\"p-join\" data-reveal=\"1\"><b style=\"font-size:36px;color:#D9481C\">╫</b><span>记忆<br>隔离墙</span></div><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:14px 18px;display:flex;flex-direction:column;justify-content:center\"><span class=\"p-tag\" data-role=\"ctx\" style=\"align-self:flex-start\">项目外的其他聊天</span><h3 style=\"font-size:23px\">互不串味</h3><p style=\"font-size:18.5px\">外部日常闲聊习惯不带进来，项目内的阶段讨论也不外溢</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:8px;padding:7px 18px;font-size:19.5px\">这是<b>项目内的定向隔离</b>，不是把整个账号的记忆一刀切关掉</div><p class=\"source-note\">结构示意；课上只演示核验过的项，未核验则只留官方说明，不预写本次项目里的文件清单</p>",
      "steps": [
        "把文件、指令与对话收进项目",
        "打开「仅项目记忆」立起隔离墙",
        "定向隔离不等于关掉全部记忆"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，指向左侧项目容器框；不切窗口】\n\n平时聊天一多，最烦的就是两件事的上下文互相串味。在 ChatGPT 应用里，可以把同一件事相关的指令、上传文件和多轮对话全都收进同一个「项目」空间里。",
        "【操作提示｜推进第 2 步，指向中间隔离墙与右侧日常聊天框；不切窗口】\n\n如果这件事不想带入平时的闲聊习惯，创建或配置项目时打开「仅项目记忆」。立起这道墙之后，项目里面的多轮对话照样能互相引用，但项目外的偏好不会串进来，项目里的内容也不会往外漏。",
        "【操作提示｜推进第 3 步，指向底部深色条与官方说明链接；讲完进入 p43】\n\n注意分寸：这是项目内的定向隔离，不是把整个账号的记忆全部关掉。如果录制环境尚未核验这一项，就只看官方说明，不预写项目文件清单。再看第二招：想试另一条路时，怎么保住主线？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "ChatGPT 中的项目（Projects）",
          "url": "https://help.openai.com/zh-hans-cn/articles/10169521-projects-in-chatgpt"
        }
      ],
      "teaching": [],
      "source": "index.html#p42",
      "seconds": 90
    },
    {
      "id": "p43",
      "segment": "可以带走的招数",
      "label": "想另试一条路时，怎样不把主线带跑",
      "title": "想另试一条路时，怎样不把主线带跑？",
      "lead": "从一条回复点「在新对话中分支」：原主线还在，分出去的新对话用来试另一条路，正好呼应 6.3 的防止钻牛角尖。",
      "html": "<div class=\"p-flow\" style=\"--n:3;column-gap:36px;row-gap:6px\"><div class=\"p-node\" data-role=\"ink\" data-reveal=\"0\" style=\"grid-column:2;padding:10px 14px\"><span class=\"p-num\">分岔起点</span><h3 style=\"font-size:23px;margin:2px 0 4px\">主线第 3 轮回复</h3><p style=\"font-size:17.5px\">前文结论可用，想额外试另一种方案</p></div><div class=\"p-fork\" style=\"grid-column:1/4;--gap:36px;height:48px\"><div class=\"l\" data-reveal=\"1\"><span>原对话继续</span></div><div class=\"r\" data-reveal=\"1\"><span>在新对话中分支</span></div></div><div class=\"p-node is-row2\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-column:1;padding:10px 14px\"><h3 style=\"font-size:22px;margin:0 0 4px\">主线稳在原地</h3><p style=\"font-size:17.5px\">不被试错指令污染，随时接着往下推</p></div><div class=\"p-node is-row2\" data-role=\"agent\" data-reveal=\"1\" style=\"grid-column:3;padding:10px 14px\"><h3 style=\"font-size:22px;margin:0 0 4px\">新对话独立试探</h3><p style=\"font-size:17.5px\">带齐前文另试一路，走不通直接关掉</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px;padding:7px 18px;font-size:19.5px\">呼应 6.3 避坑：与其在无效路径上连续加指令硬推，不如从干净节点分出新对话</div><p class=\"source-note\">只看主线保留与分支独立现象，不预写分出去之后的回答，也不重复讲 6.3 避坑定义</p>",
      "steps": [
        "选定主线里的一条关键回复",
        "分出新对话：主线留稳、支线试错",
        "呼应 6.3：用分支代替原地硬推"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向顶部第 3 轮主线节点；不切窗口】\n\n聊到第三四轮时，我们常会冒出一个念头：当前主线还算稳，但我想顺便试另一种问法或另一个方案，又怕一追问就把原本干净的上下文带偏了。",
        "【操作提示｜推进第 2 步，指向左右两条分叉卡片；不切窗口】\n\n这时直接在刚才那条回复下点「在新对话中分支」。左边的原主线原封不动留着；右边拉出一条带好前文的新对话专门用来试错，试不通随手关掉就行。",
        "【操作提示｜推进第 3 步，指向底部呼应条；讲完进入 p44】\n\n这跟我们在 6.3 讲的防止钻牛角尖是同一个工程直觉：与其在一条走偏的路里连续打补丁硬推，不如回到干净的分岔口另开一支。接下来看桌面端怎么省掉切窗口。"
      ],
      "teaching": [],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "可以带走的招数",
      "label": "不必打开完整窗口时，怎样把眼前的画面问出去",
      "title": "不切完整窗口，怎样把眼前画面问出去？",
      "lead": "桌面版按 Option+Space 打开 Chat Bar，可直接截图提问；快捷键与入口以录制版本为准，不可用时只留官方说明。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\" style=\"grid-template-columns:1.2fr 1fr;gap:24px;align-items:center\"><div class=\"p-page\" data-reveal=\"0\"><div class=\"p-page-bar\"><i></i><i></i><i></i>当前正在阅读的文档或报错窗口（交互示意）</div><div class=\"p-page-body\" style=\"padding:16px 18px;background:#F8F6F0;font-weight:400\"><div style=\"border:2px dashed #0F8A7A;background:#E0F3EF;border-radius:8px;padding:12px 14px;font-size:18.5px;color:#0B6B5F;font-weight:700\">┌ 框选眼前这一块局部画面 ┐<span style=\"display:block;font-size:16px;font-weight:400;margin-top:4px;color:#243042\">不必先切走当前工作窗口，也不用手动存图再上传</span></div><div data-reveal=\"1\" style=\"margin-top:12px;background:#243042;color:#fff;border-radius:999px;padding:9px 16px;display:flex;align-items:center;justify-content:space-between;font-size:18px\"><span><code style=\"background:rgba(255,255,255,.16);padding:2px 8px;border-radius:6px;font-family:var(--p-mono)\">Option + Space</code> 呼出 Chat Bar · 附图直问</span><span style=\"background:#0F8A7A;padding:2px 10px;border-radius:999px;font-size:15px\">发送 ↑</span></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><div><b>快捷键随叫随到</b><small>macOS 默认 <code>Option+Space</code>，Windows 以录制版为准</small></div></li><li class=\"is-ok\" data-reveal=\"1\"><div><b>视线不离开当前屏幕</b><small>不必先切出完整主窗口，顺手把眼前画面问出去</small></div></li><li class=\"is-risk\" data-reveal=\"2\"><div><b>不可用时只留官方说明</b><small>绝不临场改用未证实的替代手势，也不预写回答</small></div></li></ol></div><p class=\"source-note\">桌面浮窗交互结构示意，不是某一次真实运行截图</p>",
      "steps": [
        "按快捷键呼出桌面 Chat Bar",
        "直接框选眼前画面发问",
        "守住核验边界：不可用只留官方说明"
      ],
      "script": [
        "【操作提示｜停留课件 p44 第 1 步，指向左侧局部截图示意与右侧第 1 条；不切窗口】\n\n在电脑上看文档或盯报错时，来回切全屏窗口很容易打断思路。桌面版在 macOS 上默认按 Option 加 Space 就能呼出轻量的 Chat Bar；Windows 上的对应快捷键以录制版本为准。",
        "【操作提示｜推进第 2 步，指向左侧底部浮窗条与右侧第 2 条；不切窗口】\n\n呼出浮窗后，直接框选眼前屏幕的一块区域就能截图发问，视线不用离开当前正在处理的工作画面。",
        "【操作提示｜推进第 3 步，指向右侧第 3 条风险提示与底部官方说明；讲完进入 p45】\n\n同样守住诚实边界：如果录制机器没装桌面版或者入口随版本调整了，课上就只留官方说明，绝不临场编造没核验过的替代手势。再看应用里三个入口怎么选。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "How to launch the Chat Bar",
          "url": "https://help.openai.com/en/articles/9295241-how-to-launch-the-chat-bar"
        }
      ],
      "teaching": [],
      "source": "index.html#p44",
      "seconds": 90
    },
    {
      "id": "p45",
      "segment": "可以带走的招数",
      "label": "Chat、Work 和 Codex，各适合干什么",
      "title": "Chat、Work 和 Codex，各适合干什么？",
      "lead": "问答用 Chat，长任务和成品用 Work，写代码用 Codex。只有桌面版 Work 才能用本地文件；应用内 Codex 要与 Codex CLI、Codex App 分清。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:16px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3 style=\"font-size:25px\">Chat</h3><span class=\"p-tag\" data-role=\"us\">日常问答</span></div><p style=\"font-size:19px\">短平快检索、概念追问与头脑风暴</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3 style=\"font-size:25px\">Work</h3><span class=\"p-tag\" data-role=\"ctx\">长任务与成品</span></div><p style=\"font-size:19px\">打磨文档、表格与多步材料；<b>只有桌面版 Work 才能用本地文件</b></p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3 style=\"font-size:25px\">Codex</h3><span class=\"p-tag\" data-role=\"agent\">应用内编码</span></div><p style=\"font-size:19px\">ChatGPT 应用里的写代码入口，不是终端 <code>Codex CLI</code></p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px;padding:7px 18px;font-size:19px\">云端与本机别选错；课程可选编码图形界面统一称 <b>Codex App</b>，与 5.5 重叠项不进本节正片</div><p class=\"source-note\">课上只演示核验过的项；不把名称混称为「ChatGPT App」</p>",
      "steps": [
        "日常问答用 Chat",
        "长任务与本机文件认准桌面版 Work",
        "写代码用 Codex，同时分清三套名字"
      ],
      "script": [
        "【操作提示｜停留课件 p45 第 1 步，指向左侧 Chat 卡片；不切窗口】\n\n打开现在的 ChatGPT 应用，常见有 Chat、Work 和 Codex 三个入口。短平快的日常检索和问答，直接用 Chat。",
        "【操作提示｜推进第 2 步，指向中间 Work 卡片；不切窗口】\n\n需要整理长文档、表格或打磨多步成品时切到 Work。这里有个很容易踩错的细节：只有桌面版 Work 才能直接处理本地文件，选云端还是选本机一定要看清。",
        "【操作提示｜推进第 3 步，指向右侧 Codex 卡片与底部提示条；讲完进入 p45a】\n\n写代码则进应用里的 Codex 入口。把它和我们主线用的终端工具 Codex CLI 分清；和 5.5 预留内容有重叠的演示也不重复放进本节。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "ChatGPT Work and Codex",
          "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex"
        }
      ],
      "teaching": [],
      "source": "index.html#p45",
      "seconds": 90
    },
    {
      "id": "p45a",
      "segment": "可以带走的招数",
      "layout": "evidence-scene",
      "label": "为什么桌面端名字这么容易叫混",
      "title": "为什么桌面端名字这么容易叫混？",
      "lead": "打开 OpenAI 官方桌面工作台页面：Projects、Codex 与文档成品已被合进同一个桌面窗口，更需要把课程里的名称叫准。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:332px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>learn.chatgpt.com/codex/app · OpenAI — ChatGPT desktop app</div><a href=\"external/openai-chatgpt-desktop-workspace.png\"><img src=\"external/openai-chatgpt-desktop-workspace.png\" alt=\"OpenAI 官方文档展示 ChatGPT 桌面端在同一工作台整合 Projects、Codex 与文档成品的界面截图\"></a></div><p class=\"p-shot-note\" style=\"font-size:19px\" data-reveal=\"1\">官方桌面端合流了项目、文档与 Codex；课程主线用 Codex CLI，可选界面叫 Codex App</p></div>",
      "steps": [
        "看官方桌面工作台的合流界面",
        "合并之后更要把课程术语叫准"
      ],
      "script": [
        "【操作提示｜停留课件 p45a 第 1 步，指向 OpenAI 官方桌面工作台截图；可点开图片放大】\n\n为什么大家在社区里聊起来经常把名字叫混？看一眼 OpenAI 官方文档里的这张桌面端页面就明白了：现在的桌面工作台已经把左侧的 Projects、中间的 Codex 会话和右侧的文档成品合进了同一个窗口。",
        "【操作提示｜推进第 2 步，指向图下批注与底部产品页面链接；讲完进入 p46】\n\n产品界面越融合，我们讨论工程问题时越要把名字叫准：课程主线操作和验收一律认终端里的 Codex CLI；提到可选编码图形界面时统一叫 Codex App，不用 ChatGPT App 笼统代指。接着看本节最有趣的一个「坑」。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "产品页面",
          "text": "OpenAI 官方文档：ChatGPT desktop app",
          "url": "https://learn.chatgpt.com/codex/app"
        }
      ],
      "teaching": [],
      "source": "index.html#p45a",
      "seconds": 60
    },
    {
      "id": "p46",
      "segment": "可以带走的招数",
      "label": "定时任务看起来安排好了，它一定能用到项目里的文件吗",
      "title": "定时任务建在项目里，能读项目文件吗？",
      "lead": "定时任务可以按时间运行，也可以按 Gmail、Slack、GitHub 等事件运行；但在项目里创建的任务，访问不到该项目里的文件。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:306px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 312\" width=\"1118\" height=\"312\"><defs><marker id=\"rd-arrow-scheduled-task-wall\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"20\" width=\"294\" height=\"272\" rx=\"10\" fill=\"#E0F3EF\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"26\" y=\"54\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"22\" font-weight=\"400\" fill=\"#0B6B5F\" text-anchor=\"start\">定时任务的两类触发</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"74\" width=\"258\" height=\"86\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#0B6B5F\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"42\" y=\"104\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">按时间运行</text></g><g data-reveal=\"0\"><text x=\"42\" y=\"134\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">每日 / 每周定时自动触发</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"176\" width=\"258\" height=\"94\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#0B6B5F\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"42\" y=\"206\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">按外部事件运行</text></g><g data-reveal=\"0\"><text x=\"42\" y=\"234\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">Gmail · Slack · GitHub 等</text></g><g data-reveal=\"0\"><text x=\"42\" y=\"256\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"15\" font-weight=\"400\" fill=\"#0B6B5F\" text-anchor=\"start\">事件源依套餐与版本而定</text></g><g data-reveal=\"1\"><path d=\"M306 152L352 152\" stroke=\"#0B6B5F\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-scheduled-task-wall)\"/></g><g data-reveal=\"1\"><rect x=\"356\" y=\"12\" width=\"754\" height=\"288\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2.5\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"378\" y=\"44\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">同一个「项目（Project）」内部 —— 课堂最容易忽略的限制</text></g><g data-reveal=\"1\"><rect x=\"378\" y=\"64\" width=\"272\" height=\"162\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"514\" y=\"102\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#2A2380\" text-anchor=\"middle\">在项目里建的定时任务</text></g><g data-reveal=\"1\"><text x=\"514\" y=\"138\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">入口看似挂在该项目下</text></g><g data-reveal=\"1\"><text x=\"514\" y=\"168\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">到点自动启动新运行</text></g><g data-reveal=\"1\"><rect x=\"674\" y=\"58\" width=\"82\" height=\"174\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2.5\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"715\" y=\"114\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">✕</text></g><g data-reveal=\"1\"><text x=\"715\" y=\"150\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">访问</text></g><g data-reveal=\"1\"><text x=\"715\" y=\"176\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">不到</text></g><g data-reveal=\"1\"><rect x=\"780\" y=\"64\" width=\"308\" height=\"162\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"934\" y=\"102\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"middle\">该项目里存放的文件</text></g><g data-reveal=\"1\"><text x=\"934\" y=\"138\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">上传文档 · 表格 · 参考资料</text></g><g data-reveal=\"1\"><text x=\"934\" y=\"170\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">普通项目对话可读，定时任务不可读</text></g><g data-reveal=\"2\"><rect x=\"378\" y=\"240\" width=\"710\" height=\"44\" rx=\"10\" fill=\"#E8EAEE\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"733\" y=\"269\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16.5\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">提醒：看起来安排好了 ≠ 够得到材料；别把依赖项目文件的分析交给定时任务盲跑</text></g></svg><p class=\"source-note\">课程自绘：定时任务触发方式与同项目上传文件的访问隔离墙示意</p></div>",
      "steps": [
        "按时间或外部事件自动触发",
        "课堂避坑：读不到同项目里的文件",
        "安排好了不等于运行时够得到材料"
      ],
      "script": [
        "【操作提示｜停留课件 p46 第 1 步，指向左侧两类触发源；不切窗口】\n\n第五招是定时任务。它可以按每天、每周的固定时间跑，也可以按 Gmail、Slack、GitHub 这类外部事件触发，具体事件源跟账号套餐和版本有关。",
        "【操作提示｜推进第 2 步，指向右侧项目容器中间的红色隔离墙；不切窗口】\n\n但这里藏着一个特别典型的课堂「坑」：就算你是在某个项目里面新建了这条定时任务，等它到点自动跑起来的时候，它也访问不到这个项目里上传的文件。",
        "【操作提示｜推进第 3 步，指向右下角提醒条与官方说明链接；讲完进入 p47】\n\n换句话说，入口看起来挂在项目底下，运行时却够不到你以为它能读的材料。凡是依赖项目文档的分析，别交给定时任务盲跑。再看第六招：只想问一句就走怎么办？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "ChatGPT 中的定时任务",
          "url": "https://help.openai.com/zh-hans-cn/articles/10291617-scheduled-tasks-in-chatgpt"
        }
      ],
      "teaching": [],
      "source": "index.html#p46",
      "seconds": 90
    },
    {
      "id": "p47",
      "segment": "可以带走的招数",
      "label": "这次只想问完就走，怎样不留下、也不带进习惯设定",
      "title": "只想问完就走，怎样不留痕也不串习惯？",
      "lead": "打开临时对话（Temporary Chat）：默认不进历史，处于临时状态时不用于改进模型，开始前还可以选择不带个性化。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"gap:30px;align-items:center\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:18px 20px\"><span class=\"p-tag\" data-role=\"ink\">Temporary Chat</span><h3 style=\"font-size:26px;margin:8px 0 8px\">问完即走的单次空白对话</h3><p style=\"font-size:19px;color:var(--p-muted)\">适合做零散格式核对、独立小实验，或不想污染长期记忆的一次性发问</p></div><ul class=\"p-checks\" style=\"gap:9px\"><li data-reveal=\"0\" style=\"padding:9px 15px;font-size:20px\"><div><b>默认不进入历史列表</b><small>关掉即收尾，不混进日常项目会话记录</small></div></li><li data-reveal=\"1\" style=\"padding:9px 15px;font-size:20px\"><div><b>临时状态下不用于改进模型</b><small>适合边界清楚的单次排查与对照提问</small></div></li><li data-reveal=\"2\" style=\"padding:9px 15px;font-size:20px\"><div><b>开始前可选「不带个性化」</b><small>把平时积累的口吻偏好与习惯设定一并摘干净</small></div></li></ul></div><p class=\"source-note\">只看三层隐私与记忆边界，不预写本次临时对话内容</p>",
      "steps": [
        "打开临时对话：默认不进历史",
        "临时状态下不用于改进模型",
        "开聊前可选不带个性化"
      ],
      "script": [
        "【操作提示｜停留课件 p47 第 1 步，指向左侧卡片与右侧第 1 条；不切窗口】\n\n有时候我们只想临时核对一段敏感格式，或者做个干净的单次小实验，不想让它留在左侧长长的历史列表里。这时直接打开 Temporary Chat 临时对话。",
        "【操作提示｜推进第 2 步，指向右侧第 2 条；不切窗口】\n\n处于临时对话状态时，对话内容默认不进入历史记录，也不会被拿去改进模型。",
        "【操作提示｜推进第 3 步，指向右侧第 3 条与底部官方说明链接；讲完进入 p48】\n\n开始提问前还可以顺手勾上「不带个性化」，把平时积累的口吻和背景设定也一并摘干净，真正做到问完即走、不留痕迹。最后看一眼手机端怎么看桌面任务。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Temporary Chat 官方说明",
          "url": "https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt"
        }
      ],
      "teaching": [],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "可以带走的招数",
      "label": "手机里怎样接着看桌面上的任务？它和云端是同一条路吗",
      "title": "手机里接着看桌面任务，和云端同路吗？",
      "lead": "手机里的 Remote 页可以接着看桌面上的 Codex 任务，但它和云端任务不是同一条通路；课上只认清通路，不做成另一套编码课。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:334px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 336\" width=\"1118\" height=\"336\"><defs><marker id=\"rd-arrow-mobile-remote-paths\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"12\" width=\"1102\" height=\"128\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"28\" y=\"42\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#15803D\" text-anchor=\"start\">通路 A：手机 Remote 页 ── 接着看桌面上的 Codex 任务</text></g><g data-reveal=\"0\"><rect x=\"28\" y=\"56\" width=\"356\" height=\"68\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"206\" y=\"85\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">桌面端 Codex 任务</text></g><g data-reveal=\"0\"><text x=\"206\" y=\"110\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">正在桌面环境里运行的那条会话</text></g><g data-reveal=\"0\"><path d=\"M390 90L566 90\" stroke=\"#15803D\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-mobile-remote-paths)\"/></g><g data-reveal=\"0\"><text x=\"478\" y=\"78\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#15803D\" text-anchor=\"middle\">同一条通路 · 接着看</text></g><g data-reveal=\"0\"><rect x=\"572\" y=\"56\" width=\"516\" height=\"68\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"830\" y=\"85\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#15803D\" text-anchor=\"middle\">手机 ChatGPT 应用 · Remote 页</text></g><g data-reveal=\"0\"><text x=\"830\" y=\"110\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">离开电脑桌也能随时看进度，不必守在屏幕前</text></g><g data-reveal=\"1\"><rect x=\"8\" y=\"156\" width=\"1102\" height=\"112\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"28\" y=\"185\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"20\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">通路 B：云端任务 ── 另一条独立执行通路（不要和桌面本机混为一谈）</text></g><g data-reveal=\"1\"><rect x=\"28\" y=\"198\" width=\"356\" height=\"54\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"206\" y=\"231\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#6E6043\" text-anchor=\"middle\">云端托管运行环境</text></g><g data-reveal=\"1\"><rect x=\"416\" y=\"198\" width=\"124\" height=\"54\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"478\" y=\"231\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">≠ 不同通路</text></g><g data-reveal=\"1\"><rect x=\"572\" y=\"198\" width=\"516\" height=\"54\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"830\" y=\"231\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">云端任务列表（与桌面本机任务分属两条路）</text></g><g data-reveal=\"2\"><rect x=\"8\" y=\"282\" width=\"1102\" height=\"44\" rx=\"10\" fill=\"#E8EAEE\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"559\" y=\"310\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"17\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"middle\">课堂边界：只点明「看的是哪一条任务通路」，不扩展成手机远程编码课；未核验时只留说明</text></g></svg><p class=\"source-note\">课程自绘：手机 Remote 页承接桌面本地任务与云端独立任务通路对照</p></div>",
      "steps": [
        "通路 A：手机 Remote 页接着看桌面任务",
        "通路 B：与云端任务分属两条不同通路",
        "课堂边界：认清通路即可，不做成编码课"
      ],
      "script": [
        "【操作提示｜停留课件 p48 第 1 步，指向上排绿色通路 A；不切窗口】\n\n第七招留给离开电脑桌的时候：桌面上正跑着一条 Codex 任务，人走到路上打开手机端 ChatGPT 的 Remote 页，就能顺着同一条通路接着看刚才那条桌面任务的进展。",
        "【操作提示｜推进第 2 步，指向中排虚线通路 B；不切窗口】\n\n这里只要认准一件事：手机 Remote 页看的是你桌面上那条本机任务，它和云端托管环境里跑的异步任务分属两条完全不同的通路，别把两边混成一回事。",
        "【操作提示｜推进第 3 步，指向底部课堂边界条；讲完进入 p49】\n\n这一页点到「能接着看哪条路」就够了，不把它展开成手机远程编码课；如果录制版本尚未核验，同样只留说明，不猜界面细节。来做最后一次边界自检。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 90
    },
    {
      "id": "p49",
      "segment": "自检与收束",
      "label": "下面哪种说法是对的",
      "title": "产品边界自检：下面哪种说法是对的？",
      "lead": "这是产品与术语边界自检，不是项目验收：不要把 ChatGPT 应用和 Codex App 混叫，也不要把未核验的能力讲成已经会用。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先比较两种说法，自己选定再往下看</span><div class=\"p-quiz\" style=\"margin-top:12px\"><div class=\"p-q\" data-role=\"gate\"><div class=\"p-say\">说法 A：ChatGPT 应用和课程里的 Codex App 是同一个东西，平时混着叫也没关系</div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 名称混用</span><div style=\"margin-top:8px;font-size:19px;color:#A8350F\" data-reveal=\"1\">不要用「ChatGPT App」代指 Codex App；未核验的能力也不能说成已经会用</div></div><div class=\"p-q\" data-role=\"ok\"><div class=\"p-say\">说法 B：ChatGPT 应用指网页、桌面和手机端产品；Codex App 指课程可选编码图形界面，名字与边界都要分开</div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 边界清楚</span><div style=\"margin-top:8px;font-size:19px;color:#11652F\" data-reveal=\"2\">分清终端主入口、可选编码图形界面与日常应用入口，选工具才不踩空</div></div></div><p class=\"source-note\">产品边界自检，不作为本章退出门禁</p>",
      "steps": [
        "暂停比较两种说法",
        "说法 A：名称混用",
        "说法 B：边界清楚"
      ],
      "script": [
        "【操作提示｜停留课件 p49 第 1 步，指向暂停徽章与两张说法卡；停顿数秒；不切窗口】\n\n离开本章前停下来判断一下：下面关于产品名称和能力边界的 A、B 两种说法，哪一种是对的？",
        "【操作提示｜推进第 2 步，揭示说法 A 红色印章；不切窗口】\n\n说法 A 认为 ChatGPT 应用和课程里的 Codex App 是一码事，随便混着叫就行。这样不对：名字混掉之后，连到底是在网页提问、桌面改本地文件还是终端跑验收都说不清了；没核验过的能力更不能讲成已经会用。",
        "【操作提示｜推进第 3 步，揭示说法 B 绿色印章；讲完进入 p50】\n\n说法 B 把网页、桌面和手机上的 ChatGPT 应用，与课程里可选的编码图形界面 Codex App 明确分开。名字清、边界清，用工具才不会踩空。"
      ],
      "teaching": [],
      "source": "index.html#p49",
      "seconds": 90
    },
    {
      "id": "p50",
      "segment": "自检与收束",
      "label": "带着什么离开第 6 章",
      "title": "带着什么离开第 6 章？",
      "lead": "本章项目成果定格在 6.4 的 CR-01、验证记录与真人 UAT；第 7 章从 dependency-cruiser 独立仓库冷启动，6.5 不作门禁。",
      "html": "<div class=\"p-sketch\"><div class=\"p-ribbon\" data-reveal=\"0\">第 6 章收官 · 社区 SDD 跑通闭环，应用招数看清边界</div><div data-reveal=\"0\"><h3 style=\"text-align:center\">6.5 带走的</h3><div class=\"p-star\" style=\"width:224px;font-size:21px\">看懂七招的<br>隔离墙与通路边界<br>不必今天全配齐</div></div><div data-reveal=\"1\"><h3>本章项目定格在 6.4</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\" style=\"font-size:21px\">完成 CR-01 的 JSON Diff</li><li class=\"is-pass\" style=\"font-size:21px\">失败与通过记录 + 真人 UAT</li><li class=\"is-pass\" style=\"font-size:21px\">不把 <code>.planning/</code> 带去第 7 章</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一章</h3><div class=\"p-box\" data-role=\"us\"><h3>第 7 章 · 项目的 Harness</h3><p>从 dependency-cruiser 独立仓库冷启动，建立可复用的上下文与检查入口</p></div></div></div>",
      "steps": [
        "看清边界带走招数",
        "本章项目定格在 6.4",
        "第 7 章独立仓库冷启动"
      ],
      "script": [
        "【操作提示｜停留课件 p50 第 1 步，指向顶部缎带与左侧星标；不切窗口】\n\n到这里，第 6 章就全部讲完了。6.5 这些日常招数只要看懂各自的隔离墙和通路边界就能带走，完全不必今天把所有开关都配齐。",
        "【操作提示｜推进第 2 步，指向中间本章项目定格清单；不切窗口】\n\n回顾整章主线：我们认清了 SDD 与社区框架 GSD 的关系，把已有五层规格单向接进工作流，先做人工流程验收，再用失败测试先行与真人 UAT 完成了 CR-01。JSON Crack JSON Diff 项目就在 6.4 圆满定格。",
        "【操作提示｜推进第 3 步，指向右侧第 7 章预告卡】\n\n下一章我们将跨入课程第四层能力 Harness，从 dependency-cruiser 的独立仓库冷启动，亲手为项目搭建可复用的上下文与检查门禁。第 7 章见。"
      ],
      "teaching": [],
      "source": "index.html#p50",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "可以带走的招数",
      "seconds": 690
    },
    {
      "label": "自检与收束",
      "seconds": 180
    }
  ]
};

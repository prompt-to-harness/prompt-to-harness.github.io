window.lesson = {
  "title": "做着做着，还有哪些招数可以带走",
  "chapter": "第 5 章 · SDD",
  "section": "05.05",
  "summary": "前四节把 JSON Diff 做完并验收后，轻松看一组随手能用的 Vibe Coding 招数；只看不跟做，不必安装插件，也不作为进入第 6 章的门禁。",
  "prep": [
    "使用独立小副本或课前准备的短片段 / 截图演示，严禁改动第 5 章 JSON Diff 教学工作区。",
    "按录制版本的 Codex CLI 与可选 Codex App 逐项核验 /side（或 /btw）、/fork、截图贴入对话改界面、/compact、/init、/project；缺失项从现场演示拿掉，改用口播加官方说明，不临场换未证实的替代操作。",
    "录前按第三方能力清单审查 Remotion 官方 Codex 插件（来源、许可证、Skill 名称、脚本与网络权限）；若教学账号不可用，备选改用 openai/plugins 中 Build Web Apps 的界面设计部分（避开 4.6 已提过的浏览器测试），Figma 因需额外账号不作首选。",
    "/memories、语音输入、CLI /app 接桌面版及桌面版 /pet（最多约 10 秒趣味收尾）仅在录制版本核验通过后按需补充，不占正片、不单开页。"
  ],
  "scenes": [
    {
      "id": "p41",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "做着做着，还有哪些招数可以带走",
      "title": "还有哪些招数可以带走？",
      "lead": "前四节已完成 JSON Diff 开发与验收；本节只看不跟做，轻松带走一组随手能用的招数",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-done\"><b>5.3</b>双输入</li><li class=\"is-done\"><b>5.4</b>整体验收</li><li class=\"is-now\"><b>5.5</b>可带走的招数</li></ol><div class=\"ch5-cover-grid\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">5.1–5.4 已收口</span><h3>JSON Diff 实现与整章验收</h3><p>已留下通过验收的功能、Review 结论与本地检查点；CR-01 留第 6 章，本节不再写新功能</p></div><div class=\"ch5-cover-arrow\" data-reveal=\"2\" aria-hidden=\"true\">→</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">5.5 只看不跟做（非门禁）</span><ul class=\"ch5-mini-list\"><li>旁问局部问题不冲乱主会话、换写法时把对话分出去</li><li>实现做到一半时，直接截当前界面按画面改</li><li>长对话压缩上下文继续推、先生成项目脚手架再改</li><li>打开官方插件目录，深看一个用代码做视频的插件</li></ul></div></div>",
      "steps": [
        "本章位置",
        "5.1–5.4 留下的验收起点",
        "本节分享清单与非门禁约定"
      ],
      "script": [
        "【操作提示｜停留课件 p41 第 1 步，指向章节地图上的 5.5；不切窗口】\n\n前四节，我们按规格一步步把 JSON Diff 做完并走完了整章验收。地图上，这一节来到最后一站 5.5。",
        "【操作提示｜推进第 2 步，指向左侧 5.1–5.4 已完成交接卡；不切窗口】\n\nJSON Diff 的实现和验收到 5.4 就已经收口，留下了通过验收的功能、Review 结论和本地检查点；CR-01 留给第 6 章。这一节不再写新功能，也不回头重讲前四节的模块结构。",
        "【操作提示｜推进第 3 步，指向右侧本节分享清单；讲完进入 p42】\n\n这一节换个轻松的话题：平时做开发做着做着，还有哪些随手就能用的招数可以带走？全节只看不跟做，也不作为进入第 6 章的判断门禁。我们先看五个马上能用上的技巧：旁问局部问题不冲乱主会话、换写法时把对话分出去、做到一半按画面改界面、对话变长时压缩上下文继续推、先生成项目脚手架再人工改；最后再深看一个用代码做视频的官方插件。先看最实用的一招：正在写功能的时候想问个局部问题，怎样不冲乱主会话？"
      ],
      "teaching": [
        {
          "title": "节奏与定位",
          "text": "本节围着 Vibe Coding 做工程经验分享，先实用后有趣；总预算约 10–15 分钟，不设练习、自检题或第 6 章门禁。"
        }
      ],
      "source": "index.html#p41",
      "seconds": 90
    },
    {
      "id": "p42",
      "segment": "侧聊",
      "label": "想问局部问题，怎样不冲乱主会话",
      "title": "想问局部问题，怎样不冲乱主会话？",
      "lead": "主会话正在推进实现时，把临时报错或 API 疑问放到侧聊解决，保持主线上下文干净连续。",
      "html": "<div class=\"ch5-timeline\"><div class=\"ch5-tl-spine\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\" style=\"align-self:flex-start\">主会话记录 · 保持连续</span><div class=\"ch5-tl-step\"><b>1. 正在实现当前任务</b> · 已铺好规格目标与允许修改范围</div><div class=\"ch5-tl-step\"><b>2. 不把局部问题写进主线</b> · 避免报错排查冲乱实现脉络</div><div class=\"ch5-tl-step\" data-reveal=\"2\"><b>3. 拿到答案继续往下写</b> · 主对话历史始终干净连贯</div></div><div class=\"ch5-tl-bridge\" data-reveal=\"1\" aria-hidden=\"true\">↔</div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>侧聊窗口</h3><span class=\"p-tag\" data-role=\"tool\">/side · CLI /btw</span></div><p style=\"font-size:19px\">临时问一句报错含义、API 参数或语法细节，就地获得局部解答，<b>不写入主会话历史</b></p></div></div><div class=\"p-bar\" data-reveal=\"2\">本节最实用、最先看的内置机关：<b>主会话不断线，局部问题旁边解</b>，无需额外安装</div>",
      "steps": [
        "主会话正在推进实现",
        "用 /side 或 /btw 旁问",
        "主记录保持连续"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，指向左侧主会话连续时间线；不切窗口】\n\n写功能写到一半时，主会话里已经铺好了任务目标、允许改动的文件范围和前序上下文。这时候如果突然冒出一个局部报错，或者想顺手查某个 API 参数，直接问进主对话很容易把正在推进的脉络打岔。",
        "【操作提示｜推进第 2 步，指向右侧侧聊窗口 /side 与 /btw；不切窗口】\n\n遇到这种局部问题，可以用 /side，在 CLI 里也写作 /btw。它相当于在主线旁边开一个轻量侧聊窗口：把报错信息或 API 疑问丢过去，拿到局部解答就够了，不会写进主对话历史。",
        "【操作提示｜推进第 3 步，指向主会话第 3 步与底部提示条；讲完进入 p43】\n\n查清楚之后回到主会话接着往下写，主记录始终干净连贯。这是日常开发里最实用、也无需额外安装的内置机关。那如果这次不是问一句小问题，而是想换一种实现写法试试看，原来的对话怎么办？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        },
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Developer commands",
          "url": "https://learn.chatgpt.com/docs/developer-commands"
        }
      ],
      "teaching": [
        {
          "title": "录制核验提示",
          "text": "只看「主会话还在、局部问题问到旁边」这一现象，不展开命令百科；演示短片段在独立小副本核验后嵌入。"
        }
      ],
      "source": "index.html#p42",
      "seconds": 90
    },
    {
      "id": "p43",
      "segment": "把对话分出去",
      "label": "想换一种写法试试，原对话怎么办",
      "title": "想换一种写法试试，原对话怎么办？",
      "lead": "用 /fork 把当前对话连同已有背景复制到新会话试另一种方案，原记录完好留在原处。",
      "html": "<div class=\"ch5-fork-wrap\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">当前对话主干</span><h3 style=\"margin:8px 0 6px\">已有上下文与进展</h3><p style=\"font-size:19px\">做到中途想「不如换个写法看看」，又不想推翻已经铺好的对话记录</p></div><div class=\"ch5-tl-bridge\" data-reveal=\"1\" aria-hidden=\"true\">→</div><div class=\"ch5-fork-branches\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">分出新会话：试另一种实现</h3><span class=\"p-tag\" data-role=\"agent\">/fork 复制</span></div><p style=\"font-size:18.5px\">继承当前上下文，在新会话或新工作副本入口里放手尝试替代写法</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\" style=\"padding:12px 16px\"><div class=\"p-head\"><h3 style=\"font-size:22px\">原对话记录：完好留在原处</h3><span class=\"p-tag\" data-role=\"ok\">随时退回</span></div><p style=\"font-size:18.5px\">新方案不理想也不必回滚长串历史，原主线记录分毫不乱</p></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">桌面版说明：<code>/fork</code> 可复制到新本地对话或 worktree；<code>/worktree</code> 在新 Git worktree 跑对话（隔离实验留第 7 章）</div>",
      "steps": [
        "当前对话已有进展",
        "用 /fork 复制到新会话尝试",
        "原记录保留与 worktree 边界"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向左侧当前对话主干；不切窗口】\n\n有时候做到中途，你会想「不如换个写法试试看」，但又舍不得推翻当前已经聊了十几轮的上下文。",
        "【操作提示｜推进第 2 步，指向分叉箭头与右上 /fork 新会话卡；不切窗口】\n\n这时可以用 /fork，把当前对话连同已有背景复制到一条新会话，或者一个新的工作副本入口里，放手去试另一种实现方案。",
        "【操作提示｜推进第 3 步，指向右下原对话保留卡与底部 worktree 说明；讲完进入 p44】\n\n哪怕新写法试下来不理想，原来的对话记录也完好留在原处，随时能退回来。顺带按官方桌面版说明补一句：/fork 可以把本地对话复制到新的本地对话或 worktree，而 /worktree 则是在新的 Git worktree 里跑对话；多工作区隔离实验我们留到第 7 章专门展开。再往下看：实现做到一半时，怎样直接对着眼前的画面改界面？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        }
      ],
      "teaching": [
        {
          "title": "课程边界",
          "text": "不在本节演示 /worktree 或展开多工作区隔离实验，该主题留给第 7 章正课。"
        }
      ],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "按画面改",
      "label": "做到一半，怎样按眼前的画面改界面",
      "title": "做到一半，怎样按眼前的画面改界面？",
      "lead": "不再重复第 1 章的起步识图，而是聚焦开发到中途时截下当前半成品界面直接校准样式。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:0.84fr 1.16fr;gap:20px;align-items:stretch\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"ctx\">第 1 章已讲过 · 入门用法</span><h3 style=\"margin:8px 0 6px\">拿外部素材给 AI 初识</h3><p style=\"font-size:19px\">生活或起步场景下，把现成参考图、报错截图交给 AI 理解信息；门槛更低，本节不再重复</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>做到一半：截当前半成品按画面改</h3><span class=\"p-tag\" data-role=\"us\">本节用法</span></div><div class=\"ch5-stack-list\"><div class=\"ch5-stack-item\"><b>1. 截当前界面</b> · 浏览器里跑起半成品，截下眼前的真实画面</div><div class=\"ch5-stack-item\"><b>2. 贴入原对话</b> · 直接放进正在推进该功能的同一条会话</div><div class=\"ch5-stack-item\"><b>3. 指位置直改</b> · 点明错位、拥挤或配色问题，按画面校准代码</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\">面对对齐、留白与视觉层次问题，<b>一张半成品截图比写三大段位置描述更准</b></div>",
      "steps": [
        "对照第 1 章入门识图",
        "半成品截图贴入对话三步法",
        "按画面校准界面细节"
      ],
      "script": [
        "【操作提示｜停留课件 p44 第 1 步，指向左侧第 1 章入门用法；不切窗口】\n\n第 1 章我们已经见过把图片交给 AI 的入门用法：拿一张现成截图或外部素材给它看，帮我们识别信息。那种起步阶段的用法留在第 1 章，这里不再重复。",
        "【操作提示｜推进第 2 步，指向右侧本节半成品按画面改三步流程；不切窗口】\n\n这一节关注的是功能做到一半时的配合方式：直接对着浏览器里跑起来的半成品截一张图，贴进当前正在实现的对话，指明哪块留白挤了、哪个标签错位了，让它照着眼前的画面调样式。",
        "【操作提示｜推进第 3 步，指向底部时机与目的对比条；讲完进入 p45】\n\n面对视觉和布局细节，一张当前界面截图往往比写三大段位置描述更准、更省力气。接着看第四招：如果一条实现对话越聊越长，还要接着往下推，该怎么处理上下文？"
      ],
      "teaching": [
        {
          "title": "录制降级预案",
          "text": "若录制环境无法把图片贴进对话并按画面修改，将该项从现场演示拿掉，改为口播加官方说明，不临场换未证实的替代操作。"
        }
      ],
      "source": "index.html#p44",
      "seconds": 90
    },
    {
      "id": "p45",
      "segment": "压缩上下文",
      "label": "对话已经很长了，怎样压缩后继续做",
      "title": "对话已经很长了，怎样压缩后继续做？",
      "lead": "任务还没做完但上下文已越来越重时，用 /compact 压缩历史记录，留在原对话继续推进。",
      "html": "<div class=\"ch5-compact-grid\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>长对话上下文渐满</h3><span class=\"p-tag\" data-role=\"gate\">压缩前</span></div><div class=\"ch5-stack-list\"><div class=\"ch5-stack-item\">多轮读取文件与历史代码片段</div><div class=\"ch5-stack-item\">中途报错排查与命令行长输出</div><div class=\"ch5-stack-item\">窗口越来越重，但当前任务尚未收尾</div></div></div><div class=\"ch5-compact-mid\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\" style=\"font-size:18px;padding:6px 12px\">/compact</span><span style=\"font:700 30px/1 var(--p-title);color:#0F8A7A\" aria-hidden=\"true\">→</span></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>折叠摘要后轻装续做</h3><span class=\"p-tag\" data-role=\"ok\">压缩后</span></div><div class=\"ch5-stack-list\"><div class=\"ch5-stack-item\"><b>保留前序关键进展摘要</b></div><div class=\"ch5-stack-item\" style=\"border-style:dashed;color:#11652F\">留出充足上下文窗口空间</div><div class=\"ch5-stack-item\">不必另开新会话重讲背景，<b>原对话接着做</b></div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">官方说明：Compact the current chat's context（压缩当前对话的上下文）</div>",
      "steps": [
        "长对话占满上下文窗口",
        "执行 /compact 压缩上下文",
        "留在原对话继续推进任务"
      ],
      "script": [
        "【操作提示｜停留课件 p45 第 1 步，指向左侧长对话上下文渐满卡片；不切窗口】\n\n推进稍微复杂一点的任务时，几轮读文件、查报错、跑命令下来，单条对话会越来越长，上下文窗口也越来越重；但手头这件事还没做完，并不想另起炉灶重头交代一遍背景。",
        "【操作提示｜推进第 2 步，指向中间 /compact 压缩箭头；不切窗口】\n\n这时可以使用 /compact。它的官方作用很直接：压缩当前对话的上下文。",
        "【操作提示｜推进第 3 步，指向右侧压缩后继续推进卡片与底部说明；讲完进入 p46】\n\n把前序长串的过程记录折叠成精简摘要之后，就能留在同一条对话里轻装继续往下做。再看第五个顺手招数：接手一个还没有 AGENTS.md 的项目时，怎样不用从空白文件手敲起？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        }
      ],
      "teaching": [],
      "source": "index.html#p45",
      "seconds": 90
    },
    {
      "id": "p46",
      "segment": "生成脚手架",
      "label": "怎样先生成 AGENTS.md 脚手架再改",
      "title": "怎样先生成 AGENTS.md 脚手架再改？",
      "lead": "用 /init 自动搭出初版项目说明骨架，再按第 2 章原则由人核实删改定稿。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:16px 18px\"><span class=\"p-tag\" data-role=\"ctx\">1 · 面对当前仓库</span><h3 style=\"margin:8px 0 6px\">已有目录与构建配置</h3><p style=\"font-size:18.5px\">接手项目时不必对着空白文档从零手敲说明骨架</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\" style=\"padding:16px 18px\"><span class=\"p-tag\" data-role=\"agent\">2 · 执行 /init</span><h3 style=\"margin:8px 0 6px\">生成 AGENTS.md 初稿</h3><p style=\"font-size:18.5px\">自动扫描当前项目生成一份 <code>AGENTS.md</code> 脚手架草稿</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\" style=\"padding:16px 18px\"><span class=\"p-tag\" data-role=\"us\">3 · 先生成，再人工改</span><h3 style=\"margin:8px 0 6px\">按第 2 章原则审校定稿</h3><p style=\"font-size:18.5px\">删掉未证实猜测与套话，只留真实命令与协作边界</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">顺带记一个配套入口：<code>/project</code> 用于给新对话选择项目目录（Choose a project for new chats）</div>",
      "steps": [
        "执行 /init 生成脚手架初稿",
        "人工核实删改后再落盘",
        "配套入口 /project"
      ],
      "script": [
        "【操作提示｜停留课件 p46 第 1 步，指向流程第 1、2 步 /init 生成脚手架；不切窗口】\n\n面对一个已有目录结构和构建脚本的仓库，可以先执行 /init，让工具根据当前项目自动生成一份初版 AGENTS.md 脚手架。",
        "【操作提示｜推进第 2 步，指向流程第 3 步先生成再人工改；不切窗口】\n\n第 2 章我们已经讲透了 AGENTS.md 该写什么、不该写什么。这里的重点只有四个字——「先生成，再改」：拿脚手架省掉搭骨架的体力活，再由人删掉猜测和套话，补齐真正经过验证的命令与边界。",
        "【操作提示｜推进第 3 步，指向底部 /project 提示条；讲完进入 p47】\n\n同一页顺带记一个配套小入口：/project 用来给新对话选择项目目录。五个内置招数看完，我们打开官方插件目录，看一个和改网页截然不同的有趣玩法。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        }
      ],
      "teaching": [],
      "source": "index.html#p46",
      "seconds": 90
    },
    {
      "id": "p47",
      "segment": "官方插件",
      "label": "官方插件里有什么不一样的有趣玩法",
      "title": "官方插件里有什么不一样的有趣玩法？",
      "lead": "打开 /plugins 官方目录，只深看一个用代码做视频的 Remotion 官方插件。",
      "html": "<div class=\"ch5-2col\" style=\"display:grid;grid-template-columns:0.86fr 1.14fr;gap:20px;align-items:stretch\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>官方目录入口</h3><span class=\"p-tag\" data-role=\"ctx\">/plugins</span></div><p style=\"font-size:19px\">在官方目录浏览已收录插件；本节<b>只看不要求安装</b>，也不在课上新建视频项目</p><div class=\"p-bar is-light\" style=\"margin-top:12px;padding:8px 12px;font-size:18px\" data-reveal=\"2\">启用任何外部插件前，先核对<b>来源与权限边界</b></div></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>Remotion 官方 Codex 插件</h3><span class=\"p-tag\" data-role=\"tool\">用代码做视频</span></div><p style=\"font-size:19px\">用 React / TypeScript 组件编排画面、时间轴与动画并渲染成片，体验与改网页截然不同</p><p style=\"font-size:18.5px;margin-top:10px\">调用方式：针对预先看清的示例，用 <code>$技能名</code> 显式点名调用，点到为止</p></div></div><div class=\"p-bar\" data-reveal=\"2\">插件负责打开全新场景，安全审查沿用第 3 章原则：看清来源与权限，按需取用</div>",
      "steps": [
        "用 /plugins 打开官方目录",
        "深看 Remotion 代码做视频",
        "先核对来源与权限再使用"
      ],
      "script": [
        "【操作提示｜停留课件 p47 第 1 步，指向左侧 /plugins 官方目录入口；不切窗口】\n\n用 /plugins 可以打开官方插件目录浏览扩展能力。今天这一页只带你看一眼开开眼界，不要求安装任何插件，也不在课上新建项目。",
        "【操作提示｜推进第 2 步，指向右侧 Remotion 官方 Codex 插件卡片；不切窗口】\n\n我们只挑一个好玩的插件深看：Remotion 的官方 Codex 插件。它用 React 和 TypeScript 组件代码来编排时间轴与动画、渲染出视频，和前几节改网页、改开源仓库的体感完全不同。使用时对着预先看清的示例，用美元符加技能名显式点名调用，点到为止即可。",
        "【操作提示｜推进第 3 步，指向左侧来源与权限提醒及底部总结条；讲完进入 p48】\n\n第 3 章讲过的安全习惯在这里照样适用：任何外部插件启用前，先看清来源与权限边界，再决定用不用。最后，我们把整个第 5 章收个尾。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Plugins",
          "url": "https://learn.chatgpt.com/docs/plugins"
        },
        {
          "kind": "live",
          "group": "插件说明",
          "text": "Remotion 的官方 Codex 插件",
          "url": "https://www.remotion.dev/docs/ai/codex-plugin"
        }
      ],
      "teaching": [
        {
          "title": "录前审查与备选插件",
          "text": "具体技能名与插件输出以录前审查为准；若教学账号中 Remotion 插件不可用，改用官方目录 Build Web Apps 的界面设计部分（避开 4.6 已提过的浏览器测试），Figma 因需额外账号不作首选。"
        }
      ],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "小结",
      "label": "带着什么离开第 5 章",
      "title": "带着什么离开第 5 章？",
      "lead": "这组招数随用随取，不必今天安装插件；第 5 章至此收官，带着 5.4 的验收成果进入第 6 章。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">怎么带走</h3><div class=\"ch5-takeaway-card\"><span class=\"ch5-takeaway-pin\">记住这件事</span><p>随用随取的工具箱<br>不必今天安装插件<br>5.5 不设第 6 章门禁</p></div></div><div data-reveal=\"1\"><h3>本节看过的招数</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\"><span><code>/side</code>（CLI <code>/btw</code>）旁问不乱主线</span></li><li class=\"is-pass\"><span><code>/fork</code> 复制对话试新写法</span></li><li class=\"is-pass\"><span>实现中途截当前界面按画面改</span></li><li class=\"is-pass\"><span><code>/compact</code> 压缩长对话上下文</span></li><li class=\"is-pass\"><span><code>/init</code> 生成脚手架再改（附 <code>/project</code>）</span></li><li class=\"is-pass\"><span><code>/plugins</code> 看 Remotion 代码做视频</span></li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>本章到此结束</h3><div class=\"p-box\" data-role=\"us\"><h3>交接给第 6 章的成果</h3><p>沿用 5.4 已验收的 JSON Diff、Review 结论与本地检查点；CR-01 留在第 6 章处理</p></div></div></div>",
      "steps": [
        "随用随取不必今天安装",
        "本节招数清单与补充命令",
        "第 5 章收官与第 6 章交接"
      ],
      "script": [
        "【操作提示｜停留课件 p48 第 1 步，指向左侧随用随取贴纸；不切窗口】\n\n这一节看过的招数就像手边的随身工具箱：觉得哪一招趁手，往后写项目遇到对应场景拿出来用就行，今天不需要安装任何插件。",
        "【操作提示｜推进第 2 步，指向中间本节招数清单；不切窗口】\n\n我们一共顺手带走了侧聊 /side 或 /btw、分出对话 /fork、实现中途截图按画面改、/compact 压缩上下文、/init 先生成脚手架再改外加一句 /project，以及用代码做视频的 Remotion 官方插件。另外顺带提两个官方命令：一是自带的 /review，配合 /diff 可以快速扫一眼未提交改动的行为风险与缺测，不改工作区，适合自查但不能代替规格验收；二是 /memories，在 Memories 功能可用时用来配置当前对话能否使用或生成记忆，具体可用情况以你手头的版本和账号为准。",
        "【操作提示｜推进第 3 步，指向右侧第 6 章交接卡；不切窗口】\n\n第 5 章到这里正式结束。5.5 不是进入下一章的门禁；真正交接给第 6 章的，是我们在 5.4 完成整体验收的 JSON Diff、Review 结论与本地检查点，而保留旧结果时的提示文案变更 CR-01，我们留到第 6 章继续推进。"
      ],
      "teaching": [
        {
          "title": "收尾口播补充边界",
          "text": "口播顺带提一句 /review（配 /diff 查未提交改动，不能代替规格验收）与 /memories（按环境可用性配置记忆）；语音、/app 与 /pet 仅在录制版本核验通过后按需作简短收尾。"
        }
      ],
      "source": "index.html#p48",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "侧聊",
      "seconds": 90
    },
    {
      "label": "把对话分出去",
      "seconds": 90
    },
    {
      "label": "按画面改",
      "seconds": 90
    },
    {
      "label": "压缩上下文",
      "seconds": 90
    },
    {
      "label": "生成脚手架",
      "seconds": 90
    },
    {
      "label": "官方插件",
      "seconds": 90
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};

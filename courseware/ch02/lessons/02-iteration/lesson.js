window.lesson = {
  "title": "补上个人经历，看对话怎么变长",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.02",
  "summary": "对话每多一轮，前面的内容都会被重发；清空和压缩之后还剩什么，在请求记录里看得到。项目上，把自己写在 profile.md 里的个人信息、经历和项目加进个人主页，看过页面、跑过构建，证明没弄坏别的。",
  "scenes": [
    {
      "id": "p20",
      "segment": "会话里存了什么",
      "layout": "lesson-cover",
      "label": "这一节做什么",
      "title": "对话多几轮，context 会怎样",
      "lead": "补上个人经历，同时看对话怎么变长、怎么清空",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-now\"><b>2.2</b>补经历</li><li><b>2.3</b>改风格</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-grid\" style=\"--n:2;gap:16px;margin-top:22px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>补上个人经历</h3><p>内容写在 profile.md 里，Codex 只负责放进页面</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>看对话怎么变长</h3><p>多聊几轮、清空、压缩，请求里各剩什么</p></div></div><p class=\"p-hand\" data-reveal=\"2\">上一节看了一次请求，这一节看多次请求之间</p><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">环境</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">规则</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">工具返回</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">这一句</div></div><div class=\"p-foot\">这三块会变长、被清空、被压缩</div></div>",
      "steps": [
        "回到地图",
        "本节两件事",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，章节地图上 2.1 已标完成；指向 2.2，不切工具窗口】\n\n上一节我们查看了问候和项目问答的请求，也看了配置对照。接下来继续做个人主页，看看连续几次请求之间会发生什么。",
        "【操作提示｜推进第 2 步，两张卡同时出现；依次指“补上个人经历”和“看对话怎么变长”，不切窗口】\n\n这一节做两件事。项目上，把自己的个人信息、经历和项目补进主页，内容先写进一个文件，Codex 只负责放进页面。看请求这边，对话多聊几轮，context 会怎样变长；清空、压缩以后，请求里还剩什么。",
        "【操作提示｜推进第 3 步，指向手写句，再从上到下指锚点图里高亮的三块；随后进入 p21】\n\n上一节看的是一次请求。这一节看多次请求之间发生了什么。回到上一节那一列方块：这一节要看的是规则、对话历史和工具返回这三块，它们会变长，会被清空，也会被压缩。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "开篇地图沿用本章五节，2.1 标为已完成。"
        }
      ],
      "source": "index.html#p20",
      "seconds": 90
    },
    {
      "id": "p21",
      "segment": "会话里存了什么",
      "label": "三种状态",
      "title": "关掉终端再回来，什么还在，什么没了",
      "lead": "模型本身不保存任何状态；会话由 Harness 保存，每次请求时重发；文件和运行中的程序独立存在于电脑上。上一节开头要重启开发服务器，就是第三栏的事。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:16px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">模型</span><p class=\"p-big\">什么都不记，只看这一次请求</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">会话</span><p class=\"p-big\">Harness 保存，下次重发</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">文件与进程</span><p class=\"p-big\">在电脑上，与会话无关</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>上一节开头</h3><p>关掉终端 → 开发服务器停了 → 代码文件还在</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\"><h3>换个目录恢复会话</h3><p>它答得出上轮读的是 index.html 和第一行<br>可新目录里没有这个文件，服务器也已关掉</p></div></div><div class=\"p-bar\" data-reveal=\"2\">恢复对话，<b>不等于恢复文件或服务</b></div>",
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录建目录 A，放一个文件；目录要有自己的 .git",
            "code": "mkdir -p lab-runs/resume-a && cd lab-runs/resume-a && git init -q && echo '<h1>hello</h1>' > index.html"
          },
          {
            "text": "另开一个终端，在目录 A 启动一个本地服务器（相当于 npm run dev），浏览器打开 localhost:8765 能看到页面",
            "code": "cd lab-runs/resume-a && python3 -m http.server 8765"
          },
          {
            "text": "回到第一个终端，用固定的 HOME 让 Codex 读文件，并告诉它服务器开着；固定 HOME 才能在后面找到这次会话。需要 MINIMAX_API_KEY",
            "code": "CLEAN_CODEX_HOME=~/.cache/clean-codex/resume ../../tools/clean-codex.sh -- exec \"只读：读一下 index.html，告诉我它的第一行。另外记住：这个页面我已经用 python3 -m http.server 在 8765 端口打开了。\" < /dev/null"
          },
          {
            "text": "到第二个终端按 Ctrl-C 关掉服务器，相当于关掉终端或第二天重新开机",
            "code": ""
          },
          {
            "text": "换到空目录 B，恢复刚才的会话再问；--all 取消“只找当前目录的会话”",
            "code": "mkdir -p ../resume-b && cd ../resume-b && git init -q\nCLEAN_CODEX_HOME=~/.cache/clean-codex/resume ../../tools/clean-codex.sh -- exec resume --last --all \"不要运行命令，只凭记忆回答：刚才你读的是哪个文件？它的第一行是什么？8765 端口上的那个页面现在还能打开吗？\" < /dev/null"
          },
          {
            "text": "核对：目录 B 里有没有这个文件，页面还能不能打开（000 表示打不开）",
            "code": "ls -A; curl -s -o /dev/null -w \"%{http_code}\\n\" localhost:8765 || true"
          }
        ],
        "note": "讲师 2026-10-20 实测（2026-10-05 在旧版本上也测过，结果一致）：模型答出 index.html 和它的第一行；目录 B 里没有这个文件，服务器关掉后页面打不开。问到端口时，模型说无法确认、只是推测还开着；其他运行也可能直接说还开着。会话、文件、进程三者各自存在。"
      },
      "refs": [
        {
          "kind": "read",
          "group": "OpenAI 文档",
          "text": "Conversation state：每次请求独立、无状态，历史要再发一遍",
          "url": "https://developers.openai.com/api/docs/guides/conversation-state"
        }
      ],
      "steps": [
        "三栏",
        "上一节开头那一幕",
        "恢复会话的实验"
      ],
      "script": [
        "【操作提示｜停留课件 p21 第 1 步，三栏同时出现；依次指模型、会话、文件与进程，不切工具窗口】\n\n先把三样东西分开。第一，模型：它什么都不记，每次只看这一次请求里的内容。第二，会话：由 Harness 保存，也就是 Codex 把我们说过的话、它做过的事存下来，下一次请求时再发出去。第三，文件和运行中的程序：它们在我们的电脑上，和会话没有关系。",
        "【操作提示｜推进第 2 步，指向“上一节开头”方框；不现场关终端或重启开发服务器】\n\n回想上一节开头：隔了一天，本地地址打不开，重新运行 npm run dev 才好。现在可以给它归类了：开发服务器是一个运行中的程序，属于第三栏。关掉终端它就停了，代码文件还在硬盘上。",
        "【操作提示｜推进第 3 步，指向“换个目录恢复会话”和底部结论条。这是讲师 2026-10-20 的实验记录，不现场重跑；复现命令在页面“复现这个实验”里，若展示终端截图先检查路径与密钥】\n\n讲师做过一个实验：在一个目录里让 Codex 读 index.html，还告诉它页面已经在 8765 端口开着；然后关掉服务器，换到另一个空目录，用 codex exec resume 恢复这个会话，再问它。它答得出来：读的是 index.html，第一行是什么。问到端口，它说不能确认，只是推测还开着。可实际上，新目录里根本没有这个文件，服务器也早关了。会话被恢复了，但文件和服务不会跟着回来。所以恢复对话，不等于恢复文件或服务。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-20 课程基线（能力目录开、推理档位 max，codex exec）按本页复现步骤实测：目录 A 读 index.html 并告诉它 8765 端口开着，关掉服务器后在空目录 B 用 exec resume --last --all 恢复。恢复后的请求 21 项，带着目录 A 那一轮的全部历史，末尾追加了新的环境信息（cwd 已是目录 B）和新问题。模型答出 index.html 和第一行 <h1>hello</h1>；问到端口，它说不能确认、只是推测还开着；实际上服务器已关（curl 返回 000），目录 B 里也没有这个文件。--last 默认只在当前目录的会话中挑选，--all 取消过滤。2026-10-05 在 0.160.0 上的结果一致。"
        },
        {
          "title": "讲师提示",
          "text": "这一页只建立三栏。会话里“存了什么、怎么发”，等本轮改完，在“第二句话带上了什么”那页用请求对比展示。"
        }
      ],
      "source": "index.html#p21",
      "seconds": 90
    },
    {
      "id": "p27a",
      "segment": "选哪个会话",
      "label": "/clear 之后还剩什么",
      "title": "执行 /clear 之后，还剩什么",
      "lead": "本轮修改从一个清空的对话开始。动手前，讲师先在项目根目录写一份两三行的 AGENTS.md，把这个项目的规则写进文件；然后在上一节的会话里执行 /clear，再发一句话。Codex 对这条命令的说明是“清屏并开始新对话”；另一条 /new 是“开始新对话”，不清屏。清空后的请求只剩初始内容和刚发的这句话，前面的问答、工具调用和返回都没了；AGENTS.md 的内容出现在环境信息那一条里。对话清空了，文件里的规则还在，新对话一开始就读到它；会话中途才写的文件，同一个对话里看不到。为什么这样选、你该怎么选，下一页讲。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:28px\"><div class=\"p-fn\">AGENTS.md（项目根目录）</div><div class=\"p-ln\"><i>1</i><code># 项目规则</code></div><div class=\"p-ln\"><i>2</i><code>- 改完代码后运行 npm run build，在回复里给出结果</code></div><div class=\"p-ln\"><i>3</i><code>- 不新增依赖</code></div></div></div><div data-reveal=\"1\"><div class=\"p-term\">› /clear<br><span style=\"color:#8A93A0\">（屏幕清空，开始新对话）</span><br>› 再发一句话</div></div><div data-reveal=\"2\"><div class=\"p-src\" style=\"--lh:28px\"><div class=\"p-fn\">/clear 之后的请求：6 项</div><div class=\"p-ln\"><i>1–4</i><code>developer · 初始内容 4 条</code></div><div class=\"p-ln add\"><i>5</i><code>user · AGENTS.md 的规则 + 环境信息</code></div><div class=\"p-ln\"><i>6</i><code>user · 刚发的这一句</code></div></div></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:8px\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"2\"><h3>对话</h3><p>前面的提问、工具调用和返回，不再随请求发出</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"3\"><h3>文件与开发服务器</h3><p>都还在；AGENTS.md 也是文件，新对话一开始就读它</p></div></div><p class=\"source-note\">命令说明见 openai/codex main 的 codex-rs/tui/src/slash_command.rs（2026-10-19 核对）。数字来自讲师按新流程重录的一次运行（2026-10-21，先写 AGENTS.md 再 /clear；课程基线、交互界面，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "写一份规则文件",
        "执行 /clear",
        "清空后的请求",
        "文件和服务器"
      ],
      "script": [
        "【操作提示｜停留课件 p27a 第 1 步 → 切 VS Code，在项目根目录新建 AGENTS.md，写下画面上的三行并保存；回课件】\n\n分清了会话和文件，就开始本轮修改。动手之前，先在项目根目录写一个文件，叫 AGENTS.md，里面写这个项目的规则。我们只写两三行：改完代码后运行 npm run build，在回复里给出结果；不新增依赖。Codex 每次开始新对话，都会读这个文件，放进请求里。怎样把规则写好，第 7 章再讲，这里只看它在请求里的位置。",
        "【操作提示｜推进第 2 步 → 切 Terminal，回到 2.1 的 Codex 会话，输入 /clear 回车，再发上一节第一步那句问候（你好，用一句话介绍你能帮我做什么。）；回课件】\n\n上一节那个会话还开着，里面是看请求的两步问答，和这一轮要做的事无关。讲师这一轮从一个清空的对话开始：在那个会话里输入 /clear。Codex 对这条命令的说明是：清屏，并开始新对话。还有一条 /new，只开始新对话，不清屏。清完以后，再发一句和项目无关的话，就用上一节那句问候。为什么这样选、你该怎么选，下一页再说。",
        "【操作提示｜推进第 3 步 → 切 Chrome 的 claude-tap 查看器，打开 /clear 之后那次请求，指出第 5 项里以“AGENTS.md instructions”开头的那段；按实际记录讲，与画面不同就如实说】\n\n看这次请求。只有 6 项：前面是系统指令、Skills 和权限、团队说明这些初始内容，最后一项是刚发的这一句；前面的问答、工具调用和返回，都不在了。再看第 5 项，环境信息前面多了一段，就是刚才写的 AGENTS.md，原样放在里面。讲师另外试过：在同一个对话里中途写好这个文件，接着再问，请求里并没有它；要等开始新对话，Codex 才会去读。",
        "【操作提示｜推进第 4 步 → 切 Chrome 个人主页标签页刷新，页面照常打开；回课件】\n\n那文件呢？切到浏览器刷新个人主页，页面照常打开，开发服务器还在跑，项目文件也一个没少。/clear 清的是对话，不是文件。AGENTS.md 也是文件，所以对话清空了，规则还在，新对话一开始就读到它。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-19 在 openai/codex main 的 codex-rs/tui/src/slash_command.rs 中核对：/clear 的描述为“clear the terminal and start a new chat”，/new 为“start a new chat during a conversation”。录制所用版本再确认一次。2026-10-20 交互界面实测（能力目录开）：/clear 前最后一次请求 27 项、约 2.42 万 token；/clear 后再发第一句那句话，请求 6 项、约 8.9 千 token，前 5 项（系统指令、Skills 与权限、团队说明、多代理开关说明、环境信息）与会话最开始那次请求逐字相同；请求元数据里 history_initialization 由 new 变为 cleared。2026-10-21 按新流程重录（lab-runs/ch02-context/2.2-agents-20261021-162241，不提交）：/clear 前最后一次请求 29 项、约 2.32 万 token；/clear 后再发第一句，请求 6 项、约 9.0 千 token，前 4 项与会话第一次请求逐字相同，第 5 项环境信息从 1397 字符变成 1607 字符，多出来的就是 AGENTS.md。另一次单独实测（lab-runs/ch02-context/agents-clear-20261021-132320）：会话中途从外面写入三行 AGENTS.md，同一对话里再问，请求里没有它；/clear 之后再问，请求第 5 项以“# AGENTS.md instructions for 项目目录”开头，规则包在 INSTRUCTIONS 标签里，和环境信息在同一条 user 消息里，请求仍是 6 项。源码依据：/clear 新开一个会话（tui/src/app/event_dispatch.rs 的 ClearUi 调用 start_fresh_session），新会话启动时读取 AGENTS.md（core/src/session/session.rs）。"
        },
        {
          "title": "切到实操",
          "text": "先在 VS Code 里新建项目根目录的 AGENTS.md，写下画面上的三行并保存（顺序不能反：先写文件，再 /clear）。然后在 2.1 的会话里执行 /clear，再发一句与项目无关的话；切 claude-tap 查看器看这次请求，指出第 5 项里的 AGENTS.md；结果和画面不同就按实际讲。最后切浏览器刷新个人主页，说明开发服务器和文件都不受影响。"
        },
        {
          "title": "讲师提示",
          "text": "这里只讲 AGENTS.md 在请求里的位置和“它是文件，对话清空了还在”这一点；怎样写好规则、全局与项目的区别，留到第 7 章。学员可以照着写同样两三行，选做，不计入验收。"
        }
      ],
      "source": "index.html#p27a",
      "seconds": 120
    },
    {
      "id": "p28",
      "segment": "选哪个会话",
      "label": "这次该怎么选",
      "title": "四种做法，这一次选哪个",
      "lead": "继续、/clear、压缩后继续、新建并交接，各有适用的情况。讲师刚才选了 /clear：上一节的会话里只有看请求的两步问答，Codex 读过几个项目文件、没有改过文件，和本轮修改无关，所以 /clear 或新建都合理。你的会话不一定一样：先在 Codex 界面里往回翻，看这个会话已经读过哪些文件、做过哪些事，再据此选。不需要看 token 或请求项数。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.4fr) minmax(0,1.4fr) minmax(0,1.2fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>做法</span><span>适合</span><span>风险</span><span>讲师这次</span></div><div data-reveal=\"0\"><span>继续</span><span>刚做完、内容集中</span><span>无关历史越积越多</span><span>不选：里面全是看请求</span></div><div data-reveal=\"0\" class=\"is-key\"><span>/clear</span><span>换一件事，前面用不上</span><span>需要的信息得重新给</span><span>选它</span></div><div data-reveal=\"1\"><span>压缩后继续</span><span>历史长，还在做同一件事</span><span>原始内容变成摘要</span><span>不需要：本轮换了一件事</span></div><div data-reveal=\"1\"><span>新建 + 交接</span><span>换一件事，要带上部分结论</span><span>交接内容要写清</span><span>也合理</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">讲师这次：<b>/clear</b>，上一节的会话和本轮修改无关</div>",
      "steps": [
        "继续与 /clear",
        "压缩与新建",
        "这一次"
      ],
      "script": [
        "【操作提示｜停留课件 p28 第 1 步，指继续、/clear 两行；不切窗口】\n\n刚才讲师直接用 /clear 开始了本轮。为什么这样选？把四种做法放在一起看。继续，适合刚做完、内容还集中的时候，风险是无关历史越积越多。/clear，适合换一件事、前面的对话用不上的时候，代价是需要的信息得重新告诉它。",
        "【操作提示｜推进第 2 步，指压缩后继续、新建 + 交接两行；不切窗口】\n\n压缩后继续，适合历史很长、但还在做同一件事的时候，代价是原始内容变成摘要，这个等本轮改完，我们在真实会话上看。新建加交接，适合换一件事、又要带上前面部分结论的时候，前提是交接内容写清楚。",
        "【操作提示｜推进第 3 步，指底部“讲师这次：/clear”。可短暂切 Terminal，在 /clear 之前的屏幕记录里回看 2.1 会话做过的事作为理由（看不到就只口述）；留出暂停】\n\n讲师上一节的会话里，只有看请求的两步问答：Codex 为了回答读过几个项目文件，没有改过任何文件，和“往项目区加内容”没关系。所以 /clear 或者新建都合理，讲师选了 /clear。你的会话不一定一样，如果很短、很集中，继续也可以。请暂停视频，在 Codex 界面里往回翻一翻：这个会话已经读过哪些文件、做过哪些事？据此选继续、/clear、压缩还是新建，把选择和理由写在笔记里，比如“上一节的会话里只读过几个项目文件、没改过文件，和本轮修改无关”。不需要去看 token 或请求的项数。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "不预设唯一正确答案；看理由是否落在 Codex 界面里看得到的东西上（这个会话读过哪些文件、跑过哪些命令、改过什么，和本轮修改有没有关系），不看选了哪一种，也不要求引用 token 或请求项数（学员不装 claude-tap，2026-10-20 讲师决定）。压缩在本轮修改之后用真实会话演示，这里只列出。"
        },
        {
          "title": "跟做",
          "text": "学员暂停，在 Codex 界面里往回翻自己的会话，说出它已经读过哪些文件、做过哪些事，据此写下选择和理由，答在自己的笔记里（自检第 4 题回到这一页）。"
        }
      ],
      "source": "index.html#p28",
      "seconds": 90
    },
    {
      "id": "p29a",
      "segment": "补上个人经历",
      "label": "先写 profile.md",
      "title": "页面上的内容，先写进一个文件",
      "lead": "动手之前，先在项目根目录新建 profile.md，把要放进主页的内容写下来：基本信息、教育、工作经历、项目与开源，每条一行。内容由我们自己写，AI 不知道这些事实，也不该替我们编。讲师这份取自自己已经公开的主页，不放联系方式。这个文件到 2.4 会和页面一起公开，只写愿意公开的；不想用真实信息，也可以写一个虚构人物。下一步的 Prompt 只点名这个文件，不把内容贴进去，让 Codex 自己去读。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:26px\"><div class=\"p-fn\">profile.md（项目根目录，节选）</div><div class=\"p-ln\"><i>1</i><code># 个人信息</code></div><div class=\"p-ln\"><i>2</i><code> </code></div><div class=\"p-ln\"><i>3</i><code>## 基本信息</code></div><div class=\"p-ln\"><i>4</i><code>- 姓名：缪东旭（MiaoDX）</code></div><div class=\"p-ln\"><i>5</i><code>- 一句话简介：机器人系统技术负责人……</code></div><div class=\"p-ln\"><i>6</i><code> </code></div><div class=\"p-ln\"><i>7</i><code>## 教育</code></div><div class=\"p-ln\"><i>8</i><code>- 2016–2018　天津大学　软件工程硕士……</code></div><div class=\"p-ln\"><i>9</i><code> </code></div><div class=\"p-ln\"><i>10</i><code>## 工作经历</code></div><div class=\"p-ln\"><i>11</i><code>- 2025.03–2026.10　小米汽车机器人实验室……</code></div><div class=\"p-ln\"><i>12</i><code> </code></div><div class=\"p-ln\"><i>13</i><code>## 项目与开源</code></div><div class=\"p-ln\"><i>14</i><code>- RoboHarness：面向机器人研发 Agent 的……</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"1\"><span><b>四块，每条一行</b><small>基本信息 · 教育 · 工作经历 · 项目与开源</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>只写愿意公开的</b><small>2.4 推送后，文件和页面所有人都看得到</small></span></li><li class=\"is-ok\" data-reveal=\"3\"><span><b>Prompt 只点名文件</b><small>它要自己去读：请求里会多一次读文件的调用和返回</small></span></li></ol></div>",
      "steps": [
        "写下内容",
        "四块",
        "只写愿意公开的",
        "让它自己读"
      ],
      "script": [
        "【操作提示｜停留课件 p29a 第 1 步；切 VS Code，打开项目根目录里提前放好的 profile.md（courseware/ch02/materials/profile/），从上往下扫一遍，再回课件】\n\n动手之前，先把要放进主页的内容写下来。我在项目根目录建了一个 profile.md，这是我的一份。",
        "【操作提示｜推进第 2 步，指四块的标题】\n\n分四块：基本信息、教育、工作经历、项目与开源，每条一行。我这份取自自己已经公开的主页，联系方式没有放进来。",
        "【操作提示｜推进第 3 步，指“只写愿意公开的”】\n\n写自己的时候多想一步：到 2.4，这个文件会和页面一起推到 GitHub 上，所有人都看得到。只写自己愿意公开的内容；不想用真实信息，也可以写一个虚构的人物。",
        "【操作提示｜推进第 4 步，指最后一条；留在课件，进入 p29】\n\n下一步的 Prompt 里，我们只点名这个文件，不把内容贴进去。Codex 要自己去读它。回头看请求的时候，你会看到那一次读文件的调用，和读回来的内容，就是上一节看过的工具返回。请暂停视频，写好你自己的 profile.md。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "讲师的 profile.md 在 courseware/ch02/materials/profile/，录制前复制到个人主页项目的根目录，在 VS Code 里打开给学员看，不在镜头前现写。内容取自 miaodx.com 的公开内容（2026-10-22 查阅），不放联系方式。"
        },
        {
          "title": "讲师提示",
          "text": "这一页把“内容由人提供”落到一个文件上：2.3 审 diff 时可以逐句对照页面和这个文件；2.4 看历史时它也在里面。点名文件让 2.1 看过的“工具返回也进 context”在这里再出现一次，回看请求时指出读它的那次调用。"
        }
      ],
      "source": "index.html#p29a",
      "seconds": 120
    },
    {
      "id": "p29",
      "segment": "补上个人经历",
      "layout": "prompt-scene",
      "prompt": "Goal：把 profile.md 里的个人信息放进个人主页。\nContext：profile.md 在项目根目录，是我写的，分四块；\n页面现在只有首屏和占位的项目区；项目卡不跳转，本轮不改。\nConstraints：只用 profile.md 里的文字，不补写；\n不加链接、依赖；先说计划，等我确认再改。\nDone when：我在浏览器里看过页面正常；你跑 build 成功；\n页面上的每一句都能在 profile.md 里找到。",
      "label": "写本轮 Prompt",
      "title": "让 Codex 只放这些内容",
      "lead": "在 /clear 之后的新对话里提交本轮 Prompt。Context 点名 profile.md、写出页面的现状；内容只用这个文件里的文字；完成标准写成可以检查的三件事，最后一件是页面上的每一句都能在 profile.md 里找到。讲师演示用自己的公开信息。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>点名文件，写清现状</b><small>profile.md 在根目录；页面只有首屏和占位</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>只用文件里的文字</b><small>不补写，不润色事实</small></span></li><li data-reveal=\"2\"><span><b>只写愿意公开的</b><small>2.4 之后所有人都看得到</small></span></li><li class=\"is-ok\" data-reveal=\"3\"><span><b>可检查的完成标准</b><small>看页面 · build · 每一句都找得到出处</small></span></li></ol></div>",
      "steps": [
        "写清现状",
        "内容由人提供",
        "只写愿意公开的",
        "完成标准"
      ],
      "script": [
        "【操作提示｜停留课件 p29 第 1 步，指 Prompt 的 Goal 和 Context。Prompt 提前写好，不在镜头前现写】\n\n在 /clear 之后的新对话里，提交这段 Prompt。先看 Goal 和 Context：目标是把 profile.md 里的个人信息放进主页。新对话里什么历史都没有，所以 Context 直接点名这个文件，再写出页面的现状：只有首屏和一个占位的项目区。项目卡不跳转，这一轮不改。",
        "【操作提示｜推进第 2 步，指 Constraints；不切窗口】\n\n内容我们已经写在 profile.md 里了，这里不再贴一遍，让 Codex 自己去读。这些是关于我们自己的事实，AI 不知道，也不该替我们编。所以 Constraints 里写死：只用 profile.md 里的文字，不补写，不润色事实。",
        "【操作提示｜推进第 3 步，指向“只写愿意公开的”；不切窗口】\n\n写自己的内容时多想一步：到 2.4，这个仓库和页面会公开，所有人都能看到。只写自己愿意公开的内容，不写别人的姓名和联系方式。",
        "【操作提示｜推进第 4 步，指 Done when。随后切 Terminal，在 /clear 之后的 Codex 对话里（可写权限，权限设置按录制版本核对），粘贴写好的 Prompt 提交；等它回复计划后回课件 p30，这里不确认执行】\n\n最后是 Done when，三件可以检查的事：我在浏览器里看过页面正常；npm run build 成功；页面上的每一句都能在 profile.md 里找到。第一件写明由我们自己来看，后两件交给 Codex。我们还要求它先说计划、等确认再改。请暂停视频，写好自己的 profile.md，提交 Prompt。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "讲师在 /clear 之后的新对话中提交本 Prompt，原样粘贴，不改字。profile.md 已在项目根目录（上一页）。2026-10-22 起改为读 profile.md（章文件 C2-55、C2-56），取代原来贴三条讲师经历的做法；新 Prompt 还没重录，录制前先跑一次，看它是否先读 profile.md、计划是否只动页面结构不改文字。"
        },
        {
          "title": "讲师提示",
          "text": "“项目卡不跳转，本轮不改”只是约束，不展开讲这条决定（2.5 再就地复述）。学员项目区已完整时，按分镜“内容已完整时的跟做分支”：Goal 改为呈现一条新确认的补充；没有补充需求时在独立练习副本使用课程合成示例。"
        }
      ],
      "source": "index.html#p29",
      "seconds": 120
    },
    {
      "id": "p30",
      "segment": "补上个人经历",
      "label": "确认计划再执行",
      "title": "先看计划，再让它动手",
      "lead": "Codex 先回复计划。确认三件事再放行：计划只涉及项目区；要放进页面的内容和我们给的原文一致；没有新依赖、没有链接。讲师这次的计划说：只改 src/App.tsx 顶部的 projects 数组，把 1 条占位换成 3 条，按原文的“名称：描述”拆成标题和描述，文字逐字照用；JSX 结构、index.css、首屏和 index.html 都不动；不加链接、依赖，不新增文件。三件事都对得上。计划里还有两处要留意：验证步骤里它打算自己起一个本地服务给我们地址，Prompt 没要求，确认计划就等于同意了；它还提醒首屏的“示例同学”和真实项目对不上，但按“只改项目区”不动。小改动的计划可能只有一两句，这也正常。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>Codex 的计划</h3><p style=\"font-size:19px;line-height:1.6;margin-bottom:14px\">只改 src/App.tsx 的 projects 数组：1 条占位换成 3 条<br>按“名称：描述”拆开，文字逐字照用<br>JSX 结构、CSS、首屏、index.html 都不动<br>不加链接、依赖，不新增文件</p><span class=\"p-env\">/clear 之后的新对话</span></div><ol class=\"p-watch\"><li class=\"is-done\" data-reveal=\"1\">只涉及项目区<small>只动 App.tsx 里的项目数据</small></li><li class=\"is-done\" data-reveal=\"2\">内容与原文一致<small>计划里列出的三条，逐字对过</small></li><li class=\"is-done\" data-reveal=\"3\">没有新依赖、没有链接<small>计划写明不加；有的话先停，问清楚</small></li></ol></div><p class=\"source-note\">计划节选并压缩自讲师用课程基线在交互界面里的一次运行（2026-10-21 20:30，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max），2.3 审的就是这一次；你的计划以自己收到的回复为准</p>",
      "steps": [
        "看计划",
        "范围",
        "内容",
        "依赖与链接"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步 → 切 Terminal 的 Codex 对话，展示它实际回复的计划；计划很短也照实展示】\n\n提交以后，Codex 先回复计划：要改哪些文件、怎么改。讲师这次的计划不长：只改 src/App.tsx 顶部的 projects 数组，把 1 条占位换成 3 条，结构、样式、首屏都不动。我们按三件事来核对。",
        "【操作提示｜回课件推进第 2 步，再切回计划核对改动文件；计划越界就当场让它收窄，保留原始回复给 2.3 用，不事先准备越界计划】\n\n第一看范围。讲师的个人主页里，项目数据就在 src/App.tsx 顶部的一个数组里，计划也只动这一处。计划里要是出现了样式重写、新组件，先问它为什么。",
        "【操作提示｜推进第 3 步，对照计划里列出的三条和 courseware/ch02/materials/README.md 的原文逐字核对；有改写就如实指出，要求原文照用】\n\n第二看内容。计划里把三条原文都列了出来，按“名称：描述”拆成标题和描述，文字逐字照用。逐字对过，和我们给的一致，没有被改写成更漂亮的说法。",
        "【操作提示｜推进第 4 步，核对有无新依赖或链接，再指计划里的验证步骤和末尾的提醒。三项都通过才在 Codex 会话回复确认（这次用的是“确认，按你的计划改。”）；执行中 Codex 申请运行命令时，看清整条命令再决定；执行结束后回课件 p22】\n\n第三看有没有新依赖、有没有链接。计划里写明了：不加链接、不加依赖，也不新增文件。有的话，先停下来问清楚，不放行。还有两处值得看一眼。验证步骤里，它打算自己起一个本地服务，把地址给我们看页面；Prompt 没要求这一步，我们确认计划，就等于同意了。它还提醒：首屏的“示例同学”和真实项目对不上，但这一轮只改项目区，它不动。三项都对得上，再让它动手。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "Codex 的计划以录制实际为准。若计划越界，就地让它收窄并保留原始回复，2.3 可作为“范围扩大”的真实素材；不准备越界的计划。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-21 20:30 重录（lab-runs/ch02-context/2.2-simple-20261021-203050，logs/step05.screen.txt，Done when 已简化）：计划前 7 次调用读了 9 个文件（含 PROMPT_V1.md，这次没提它）；计划只改 projects 数组；验证步骤写了 npm run build、起本地服务（npm run preview 或 dev）给地址由人看页面、贴 git diff；另提醒首屏姓名和简介仍是占位，本轮不动。更早的 16:22 重录：计划前 Codex 调用 10 次工具读仓库、跑了一次基线 build；计划只改 src/App.tsx 的 projects 数组，三条原文照列；另说明 AGENTS.md 是改动前就存在的未跟踪文件、Node 版本与 .nvmrc 不一致、PROMPT_V1.md 第 10、19 行仍是旧文字但本轮不动、没有可用的无头浏览器所以浏览器检查由人做。实际 diff 只改 src/App.tsx（+10 −2），与 materials/homepage-v1.diff 逐行相同。此前的画面用 2026-10-20 15:58 那次运行（能力目录开）：计划前 Codex 调用 6 次工具读仓库，计划正文列出三条原文并写明只改 src/App.tsx 的 projects 数组；它还写了“两个不打算自作主张的点”：默认不改 CSS、不更新 PROMPT_V1.md / CHECKPOINTS.md。计划的“验收怎么做”里，它打算自己起 npm run preview、用无头 Chrome 截三档宽度、用 DOM 快照核对焦点顺序，超出了 Prompt 里“浏览器由人查”的分工；讲师照常回复“确认，按你的计划改。”，之后的弯路见本节“走过的弯路”那页。实际 diff 只改 src/App.tsx（+10 −2），与 materials/homepage-v1.diff 逐字相同。"
        },
        {
          "title": "讲师提示",
          "text": "录制时若计划里也出现“自己开浏览器验收”，可以指一句它和 Prompt 的分工不一致，再决定是否让它去掉；不展开。"
        }
      ],
      "source": "index.html#p30",
      "seconds": 120
    },
    {
      "id": "p22",
      "segment": "回看这一轮的请求",
      "label": "第二句话带上了什么",
      "title": "第二句话发出去，带上了第一句的全部内容",
      "lead": "/clear 之后，同一个会话里先后发了两句话：那句问候和本轮 Prompt。把这两次请求放在一起比：第二次请求的开头，和第一次一模一样；第一句话和 Codex 的回答也原样带上，最后才是第二句话。模型“接得上话”，是因为 Harness 每次都把历史重新发给它。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">第一句 → 第二句请求的 input <span class=\"add\">+2</span></div><div class=\"p-ln\"><i>1–4</i><code>developer · 系统指令、Skills 与权限、团队说明…</code></div><div class=\"p-ln\"><i>5</i><code>user · 环境信息</code></div><div class=\"p-ln\"><i>6</i><code>user · 第一句：你好，用一句话介绍…</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>7</i><code>assistant · Codex 对第一句的回答</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>8</i><code>user · 第二句：Goal：在项目区呈现…</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>前 6 项逐字相同</b><small>不是“接着上次”，而是从头再发</small></span></li><li data-reveal=\"1\"><span><b>新增在末尾</b><small>上一轮的回答和这一句</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>在讲师的配置下看到</b><small>MiniMax 自定义 provider，store 为 false；换服务可能不同</small></span></li></ol></div><p class=\"source-note\">条目名为中文概括。数字来自讲师按新流程重录的一次运行（2026-10-21，先写 AGENTS.md 再 /clear；课程基线、交互界面，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "第一步的请求",
        "第二步多了什么",
        "适用范围"
      ],
      "script": [
        "【操作提示｜停留课件 p22 第 1 步，指向 input 前 6 项；要现场看就切 Chrome 打开 claude-tap 查看器（地址以启动输出为准），截图前检查本机路径和个人 Skills 名称】\n\nCodex 说改完了。检查之前，先打开这一轮的请求记录，看看刚才这几句话发出去时，请求是怎么变的。先看 /clear 之后相邻的两句话：第一句是那句问候，第二句是本轮 Prompt。第一次请求：系统指令，Skills 和权限说明，团队说明这些，环境信息，最后是我们第一句话，一共 6 项。",
        "【操作提示｜推进第 2 步，第 7、8 行（+2）出现；在查看器里时指认第二次请求末尾新增的项，与画面不一致就按实际所见讲】\n\n第二次请求，前 6 项逐字没变，第一句话也还在。末尾多了两项：Codex 对第一句的回答，然后才是我们的第二句话。模型并没有“记得”刚才聊过什么，是 Harness 把整段历史重新发了一遍。",
        "【操作提示｜推进第 3 步，指向“在讲师的配置下看到”一项；回到课件，不打开 config.toml，不让密钥入画】\n\n有一个范围要说清：这是我们在讲师的配置下看到的。讲师用的是 MiniMax 自定义 provider，请求里 store 是 false，也没有引用上一次响应的编号，所以每次都带上完整输入。换别的服务或登录方式，细节可能不同。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-21 重录（先写 AGENTS.md 再 /clear）：/clear 之后的第一句“你好”请求 6 项（约 9.0 千 token，第 5 项环境信息里带着 AGENTS.md）；接着发本轮 Prompt，请求 8 项（约 9.2 千 token），前 6 项与上一次逐字相同，末尾多了 assistant 回答和新的一句。2026-10-20 那次：6 项约 8.9 千 → 8 项约 9.1 千，结构相同。旧记录：2026-10-20 交互界面实测（能力目录开）：/clear 之后的第一句“你好”请求 6 项（约 8.9 千 token）；接着发本轮 Prompt，请求 8 项（约 9.1 千 token），前 6 项与上一次逐字相同，末尾多了 assistant 回答和新的一句。能力目录开时 Skills 与权限说明那条 developer 消息约 7500 字符，比 codex exec 长，所以 token 数和 2.1 p08 不同。界面另发的“给会话起标题”请求，在能力目录开时也会自己调用工具、越涨越长，看记录时一律跳过。MiniMax 配置下请求体 store 为 false、没有 previous_response_id。"
        },
        {
          "title": "讲师提示",
          "text": "录制时用 claude-tap 选 /clear 之后第一句和本轮 Prompt 这两次相邻请求做 diff 截图；截图前检查路径和个人 Skills 名称。条目和本页不同就按实际改。带工具调用的轮次里，模型的推理摘要（reasoning）也会被重发，可以在 p23 指一下。"
        }
      ],
      "source": "index.html#p22",
      "seconds": 90
    },
    {
      "id": "p23",
      "segment": "回看这一轮的请求",
      "label": "每次都重发，贵不贵",
      "title": "每次都重发，代价是 token 和注意力",
      "lead": "提交本轮 Prompt 之后、Codex 回复计划之前，它读了几次仓库里的文件，一共发了 5 次请求：输入从约 9.3 千 token 涨到约 1.57 万，每次的缓存命中正好是上一次的全部输入。重复的开头部分可以被缓存，算起来更便宜；但模型每次仍要读完整段历史，这份注意力上的负担，缓存帮不上。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>请求</span><span>输入 token</span><span>缓存命中</span></div><div data-reveal=\"0\"><span>第 1 次</span><span>约 9.3 千</span><span>约 8.9 千 token</span></div><div data-reveal=\"0\"><span>第 3 次</span><span>约 1.31 万</span><span>约 1.06 万 token</span></div><div data-reveal=\"0\" class=\"is-key\"><span>第 5 次</span><span>约 1.57 万</span><span>约 1.46 万 token</span></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>token</h3><p>重复的前缀能被缓存，按更低的价格算</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\"><h3>注意力</h3><p>历史越长，早先的需求越容易被淹没</p></div></div><p class=\"source-note\">数字来自讲师按本节 Prompt 重录的一次运行（2026-10-21，先写 AGENTS.md 再 /clear；课程基线、交互界面，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "5 次请求",
        "token 与缓存",
        "注意力"
      ],
      "script": [
        "【操作提示｜停留课件 p23 第 1 步，指表格第 1、3、5 次三行；数字来自讲师这一轮的记录，不现场重跑】\n\n既然每次都重发，那贵不贵？就看本轮 Prompt 提交以后、Codex 回复计划之前这一段：只发了一句，它读了几次仓库里的文件，一共发了 5 次请求。输入 token 从九千三，涨到一万五千多。再看缓存命中：每一次都正好命中了上一次的全部输入。",
        "【操作提示｜推进第 2 步，指向“token”方框；计费细节不展开，不切窗口】\n\n代价有两种。第一种是 token。好在重复的开头部分可以被缓存：服务端认出“这一段上次发过”，就按更低的价格算。所以历史变长，账单不一定同比例变高。具体怎么计费，看各自用的服务，这里不展开。",
        "【操作提示｜推进第 3 步，指向“注意力”方框；不切窗口，接 p24】\n\n第二种代价是注意力，缓存帮不上忙。模型每次都得把整段历史读一遍，历史越长，早先说过的需求越容易被淹没在大量工具输出里。刚才挑会话时说的“无关历史越积越多”，代价就在这里。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "2026-10-21 20:30 重录（Codex 会话记录的 token_count，lab-runs/ch02-context/2.2-simple-20261021-203050）：本轮 Prompt 提交后到 Codex 回复计划 5 次请求、7 次工具调用（有两次一回合并行发两个调用）；输入 9305、10645、13063、14561、15652 token，缓存命中 8948、9305、10645、13063、14561，每次正好等于上一次的输入。画面取第 1、3、5 次。更早的 2026-10-21 16:22 重录：本轮 Prompt 提交后到 Codex 回复计划的 11 次请求（10 次工具调用）：input 8、12、14、17、20、22、25、28、31、34、37 项；input_tokens 9241 起，第 6 次 14675，第 11 次 21090；缓存命中接近上一次的输入（第 11 次 19840），不再每次正好相等。画面取第 1、6、11 次。旧记录：2026-10-20 15:58 交互界面实测（能力目录开），本轮 Prompt 提交后到 Codex 回复计划的 7 次请求（6 次工具调用）：input 8、11、14、16、19、22、25 项；input_tokens 9087、9999、10622、11690、14423、15880、17280；缓存命中 8863、9087、9999、10622、11690、14423、15880——每次都正好命中上一次的全部输入（第 1 次命中的是 /clear 后那句话的请求）。画面取第 1、4、7 次。2026-10-20 讲师决定改为边做边看，这页改用本轮的请求，原来 2.1 第二步那一问的数字不再上屏。录制版本定下后复测。"
        },
        {
          "title": "讲师提示",
          "text": "前缀缓存的计费细节放配套页，主课只讲“重复部分更便宜，注意力不变”。不要据此断言每次费用一定增加。"
        }
      ],
      "source": "index.html#p23",
      "seconds": 90
    },
    {
      "id": "p23a",
      "segment": "回看这一轮的请求",
      "layout": "evidence-scene",
      "label": "越长越不稳",
      "title": "越长越不稳：Context Rot",
      "lead": "Chroma 在 2025 年 7 月的报告《Context Rot》里，让 18 个模型做同一个很简单的任务：把一段重复的词照抄出来。输入从几十个 token 加到上万，几个主流模型的得分都一路往下。这就是上一页说的注意力代价：缓存让重复部分便宜，但模型还是要读完整段，越长越容易出错。",
      "html": "<div class=\"p-shot\" data-reveal=\"0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:440px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 840 444\" width=\"840\" height=\"444\"><defs><marker id=\"rd-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><text x=\"0\" y=\"22\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"25\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">同一个简单任务，输入越长越做不好</text><line x1=\"70\" y1=\"334.66666666666663\" x2=\"630\" y2=\"334.66666666666663\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"340.66666666666663\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.5</text><line x1=\"70\" y1=\"278.0\" x2=\"630\" y2=\"278.0\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"284.0\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.6</text><line x1=\"70\" y1=\"221.33333333333334\" x2=\"630\" y2=\"221.33333333333334\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"227.33333333333334\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.7</text><line x1=\"70\" y1=\"164.66666666666663\" x2=\"630\" y2=\"164.66666666666663\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"170.66666666666663\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.8</text><line x1=\"70\" y1=\"107.99999999999999\" x2=\"630\" y2=\"107.99999999999999\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"113.99999999999999\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.9</text><line x1=\"70\" y1=\"51.33333333333334\" x2=\"630\" y2=\"51.33333333333334\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"57.33333333333334\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">1.0</text><line x1=\"170.25000591384298\" y1=\"40\" x2=\"170.25000591384298\" y2=\"380\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"170.25000591384298\" y=\"404\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">100</text><line x1=\"361.9770684856725\" y1=\"40\" x2=\"361.9770684856725\" y2=\"380\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"361.9770684856725\" y=\"404\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">1 千</text><line x1=\"553.7041310575019\" y1=\"40\" x2=\"553.7041310575019\" y2=\"380\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"553.7041310575019\" y=\"404\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">1 万</text><line x1=\"70\" y1=\"380\" x2=\"630\" y2=\"380\" stroke=\"#243042\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"432\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">输入长度（token，对数刻度）</text><text x=\"18\" y=\"210.0\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\" transform=\"rotate(-90 18 210.0)\">得分（1 = 完全对）</text><polyline points=\"94.0,51.3 166.0,51.3 239.6,51.3 313.7,76.8 387.0,85.3 461.4,279.7 535.1,334.7 607.1,334.7\" fill=\"none\" stroke=\"#C2410C\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"70\" x2=\"686\" y2=\"70\" stroke=\"#C2410C\" stroke-width=\"4\"/><text x=\"696\" y=\"76\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">Claude Sonnet 4</text><polyline points=\"94.0,54.2 166.0,63.8 239.6,96.7 313.7,197.5 387.0,245.1 461.4,303.5 535.1,334.7\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"104\" x2=\"686\" y2=\"104\" stroke=\"#5A51D1\" stroke-width=\"4\"/><text x=\"696\" y=\"110\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">Qwen3-32B</text><polyline points=\"94.0,92.7 166.0,236.6 239.6,211.1 313.7,284.8 387.0,310.3 461.4,334.7 535.1,334.7 607.1,334.7\" fill=\"none\" stroke=\"#0B6B5F\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"138\" x2=\"686\" y2=\"138\" stroke=\"#0B6B5F\" stroke-width=\"4\"/><text x=\"696\" y=\"144\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">GPT-4.1</text><polyline points=\"94.0,80.8 166.0,233.8 239.6,228.7 313.7,310.9 387.0,323.9 461.4,330.1 535.1,359.0 607.1,334.1\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"172\" x2=\"686\" y2=\"172\" stroke=\"#2563EB\" stroke-width=\"4\"/><text x=\"696\" y=\"178\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">Gemini 2.5 Flash</text><text x=\"656\" y=\"240\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">0.5 附近 ≈ 基本做不对</text></svg><p class=\"p-shot-note\" style=\"font-size:18px\">数据点为读图近似</p><p class=\"source-note\">据 Chroma《Context Rot》（2025-07-14）重复词任务重画</p></div>",
      "refs": [
        {
          "kind": "live",
          "group": "Chroma，2025-07-14",
          "text": "Context Rot",
          "url": "https://www.trychroma.com/research/context-rot"
        }
      ],
      "steps": [
        "看趋势"
      ],
      "script": [
        "【操作提示｜停留课件 p23a，沿着最上面那条线从左往右指，再指 0.5 那条横线】\n\n注意力的代价有多大？Chroma 做过一个实验：让模型把一段重复的词照抄出来，任务简单到几乎不会错。可输入从几十个 token 加到上万，几个主流模型的得分都一路往下，最后掉到 0.5 附近，基本就是做不对了。缓存能让重复的开头算得便宜，但模型每次还是要把整段读一遍。对话越长，前面的需求越容易被淹没。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "曲线据报告里 Repeated Words 任务的图重画（课程手绘风格，courseware/tools/redraw.py 生成，图元在 materials/external/context-rot/figures.py），四个模型的数据点是读图近似，只讲趋势，不读具体数值。2026-10-22 核对原文：报告测了 18 个模型，任务刻意做得简单，只为看输入长度本身的影响。"
        }
      ],
      "source": "index.html#p23a",
      "seconds": 30
    },
    {
      "id": "p24",
      "segment": "回看这一轮的请求",
      "label": "弯路也会被重发",
      "title": "走过的弯路，也留在历史里",
      "lead": "开场访谈里看过，同一个 Prompt，结果会变；过程也一样，每次走的弯路不同。讲师这一轮，Codex 一共调用了 16 次工具，其中有两次弯路：起预览服务器在沙箱里被拒（EPERM，退出码 1）；curl 取页面在沙箱里返回 000。两次它都改为申请到沙箱外运行。这些失败的返回和成功的一样，留在之后每一次请求里，对完成任务没有用，却一直占着 context。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">这一轮的几次弯路</span><div class=\"p-term\" style=\"margin-top:10px\"><div style=\"color:#8A93A0\">npm run preview --port 4173</div><div class=\"err\">listen EPERM · 退出码 1</div><div style=\"color:#8A93A0\">curl 127.0.0.1:4173</div><div class=\"err\">HTTP 000</div></div></div><div class=\"p-join\" data-reveal=\"1\"><span>之后每次请求</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">最后一次请求</span><p class=\"p-big\" style=\"margin-top:10px\">约 2.05 万 token</p><p class=\"p-sub\">前面 16 次调用（含出计划前的 7 次）的返回都在里面，失败的也在</p></div></div><div class=\"p-bar\" data-reveal=\"2\">返回有没有用，<b>之后每次请求都带着</b></div><p class=\"source-note\">数字来自讲师按本节 Prompt 重录的一次运行（2026-10-21，先写 AGENTS.md 再 /clear；课程基线、交互界面，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构。弯路的次数只是这一次运行的观察；返回会一直留在后面的请求里，是每次都一样的规则</p>",
      "steps": [
        "这一轮的弯路",
        "之后每次都带着",
        "弯路也被重发"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，指左卡的两次失败；画面是讲师这一轮的记录，不现场重跑】\n\n开场访谈里，我们看过鹈鹕骑自行车的例子：同一个 Prompt，结果每次不一样。过程也一样，每次走的弯路不同。讲师这一轮，Codex 一共调用了 16 次工具，中间有两次弯路：改完以后它去起预览服务器，沙箱里不让监听端口，退出码 1；又用 curl 取页面，沙箱里返回 000。两次它都改为申请到沙箱外运行。",
        "【操作提示｜推进第 2 步，箭头和右卡出现；指向“约 2.05 万 token”】\n\n这些失败的返回去哪了？看这一轮最后一次请求：大约两万零五百 token。前面 16 次调用的返回都在里面，包括出计划之前读文件的那 7 次，失败的也在。",
        "【操作提示｜推进第 3 步，指向底部结论条；录制时弯路不同就按当次记录指认；随后进入 p31】\n\n返回有没有用，之后每一次请求都带着。弯路的次数每次不一样，但这条规则每次都一样。对完成任务没用的东西，也一直占着 context；对话越长，这样的东西就越多。回到项目上：Codex 说改完了，改得对不对、有没有弄坏别的，我们自己来查。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "本页素材来自 2026-10-21 20:30 重录（和 2.3 同一次）：出计划前 7 次调用；确认之后 9 次，npm run preview 在沙箱里 listen EPERM（退出码 1）、curl 返回 000，之后各申请一次沙箱外运行并获批准；最后一次请求输入 20462 token（缓存命中 20000）。更早的 16:22 重录：出计划前 10 次调用，第 4 次是空的 exec，返回“exec expects raw JavaScript source text”；确认之后 8 次，npm run dev 两次 listen EPERM、curl 一次 000，之后各申请一次沙箱外运行并获批准；最后一次请求 63 项、25844 token（缓存命中 24832）。同日另外几次没跑完的重录里，Codex 又自己开无头 Chrome 去查屏幕尺寸，十几次尝试，和 2026-10-20 一样。弯路有没有、有多少，每次不同。2026-10-20 交互界面实测（能力目录开、推理档位 max），2.2 本轮“确认”之后：33 次工具调用（加上出计划那一轮的 6 次，会话里累计 39 次），其中至少 9 次失败或白跑（npm run preview 两次退出码 1、shell 脚本被当成 JavaScript 报 SyntaxError、截图文件不存在、CDP 脚本解析错等），全部是 Codex 自己为了查屏幕尺寸而做的，Prompt 写明了浏览器由人检查。每次请求都带着之前全部调用和返回，最后一次请求 135 项、59271 token。原来的 read_file 例子来自 2026-10-02 能力目录关的运行，已不再上屏。"
        },
        {
          "title": "讲师提示",
          "text": "不重讲随机性，只回指开场访谈的鹈鹕例子。录制时弯路不一定一样：按当次记录指认就行，没有弯路也没关系，要讲的是“返回会一直留着”这条规则。“它为什么自己去查浏览器”可以留给 2.3 看范围时就地用。"
        }
      ],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p31",
      "segment": "检查",
      "label": "改好了吗",
      "title": "改好了吗？有没有弄坏别的？",
      "lead": "改完自己看一眼：在浏览器里打开个人主页，三条经历都在、文字完整、别的地方没被挤乱；再运行 npm run build，构建成功。讲师这次页面正常，构建通过。新发现的问题记下来，不在这一轮顺手修。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.3fr) minmax(0,1.1fr);row-gap:12px;--rf:21px\"><div class=\"is-head\" data-reveal=\"0\"><span>检查</span><span>讲师这次的结果</span><span>能说明什么</span></div><div data-reveal=\"0\"><span class=\"p-cell\">打开页面看一眼</span><span class=\"p-cell\">三条经历都在，文字完整</span><span class=\"p-why\">内容放对了，没挤坏别的</span></div><div data-reveal=\"1\"><span class=\"p-cell p-mono\">npm run build</span><span class=\"p-cell\">tsc 与 vite 都通过：✓ built in 283ms</span><span class=\"p-why\">构建流程成功完成</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">新出现的问题：<b>记下来，不顺手修</b></div><p class=\"source-note\">build 结果来自讲师用课程基线在交互界面里的一次运行（2026-10-21 20:30，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max），2.3 审的就是这一次；页面一行按讲师录制时实际看到的讲</p>",
      "steps": [
        "看一眼页面",
        "构建",
        "新问题"
      ],
      "script": [
        "【操作提示｜推进课件 p31 第 1 步 → 切 Chrome 个人主页标签页刷新，看项目区；想看手机上的样子可在开发者工具的设备工具栏切到 360×800，一句带过】\n\n改完了，自己看一眼。在浏览器里刷新个人主页：三条经历都在，文字完整，别的地方没被挤乱。",
        "【操作提示｜推进第 2 步 → Terminal 另开“构建检查”标签页，在个人主页项目根目录运行 npm run build；失败就展示首个报错，不念“成功”】\n\n再在终端运行 npm run build，类型检查和打包都通过，最后一行是 built。",
        "【操作提示｜推进第 3 步，留出暂停后回课件】\n\n如果看到了新的问题，记下来，留到下一轮，这一轮只解决一个结果。请暂停视频，看一眼自己的页面，再跑一次 build。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "页面由人看；想看手机上的样子，可以在 Chrome 开发者工具的设备工具栏里切到 360×800，一句带过，不单独教。Codex 自己开无头 Chrome 去查页面的事，留到 2.3“它看不见什么”再讲。"
        }
      ],
      "source": "index.html#p31",
      "seconds": 90
    },
    {
      "id": "p27",
      "segment": "压缩",
      "label": "压缩一下继续",
      "title": "压缩以后，模型看到的是摘要",
      "lead": "本轮会话已经有了计划、读文件、改文件、构建输出。对它执行 /compact：Codex 先把整段历史连同一段“写交接摘要”的要求发给模型，再用这份摘要换掉历史。讲师这一轮的结果：压缩前最后一次请求约 2.05 万 token；压缩后约 1.02 万 token。我们发过的消息原文都在，AGENTS.md 也重新放了进来，16 次工具调用和返回都没了。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">压缩前</span><p style=\"line-height:1.7\">我们的提问 · 16 次工具调用<br><b>工具返回的原文</b>（文件内容、build 输出）<br>模型的回答 · 约 2.05 万 token</p></div><div class=\"p-join\" data-reveal=\"1\"><span>/compact</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">压缩后</span><p style=\"line-height:1.7\">我们发过的 3 条消息（原文）<br><b>一份交接摘要</b>（约 3400 字符）<br>初始内容与 AGENTS.md（重新插入）· 约 1.02 万 token</p></div></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:14px\"><h3>追问：npm run build 的最后一行是什么？</h3><p>它写出了“✓ built in 283ms”，但标明这行来自摘要、没有复核；三条项目经历是我们的消息，它标为确定看到的原文</p></div><p class=\"source-note\">压缩后保留什么由源码决定（core/src/compact.rs）。数字来自讲师按本节 Prompt 重录的一次运行（2026-10-21，先写 AGENTS.md 再 /clear；课程基线、交互界面，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
      "refs": [
        {
          "kind": "live",
          "group": "0.160.0 源码",
          "text": "压缩逻辑 compact.rs",
          "url": "https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/core/src/compact.rs"
        },
        {
          "kind": "live",
          "group": "0.160.0 源码",
          "text": "压缩提示 prompt.md",
          "url": "https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/prompts/templates/compact/prompt.md"
        }
      ],
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "下载课程仓库，以下命令都在仓库根目录运行",
            "code": "git clone --depth 1 https://github.com/prompt-to-harness/prompt-to-harness.github.io.git && cd prompt-to-harness.github.io"
          },
          {
            "text": "建一个独立的实验目录（在 lab-runs/ 下，不会提交）",
            "code": "courseware/ch02/materials/compact/setup.sh"
          },
          {
            "text": "用课程基线启动 Codex；需要 MINIMAX_API_KEY，浏览器会打开请求面板",
            "code": "cd lab-runs/compact-lab && ../../tools/clean-codex.sh --tap"
          },
          {
            "text": "依次输入 steps.txt 的五行，每条等回答结束再发；第 4 行是 /compact",
            "code": "cat courseware/ch02/materials/compact/steps.txt"
          },
          {
            "text": "或者自动跑一轮，另开终端只读旁观",
            "code": "LAB_SESSION=compact-demo LAB_HOLD=60 courseware/ch02/materials/compact/run-tmux.sh\ntmux attach -r -t compact-demo"
          },
          {
            "text": "不跑也能看：用浏览器打开讲师运行的前后对照",
            "code": "courseware/ch02/materials/compact/compare.html"
          }
        ],
        "note": "这是独立实验的复现步骤。完整说明、5 次运行的汇总和超时处理见 courseware/ch02/materials/compact/README.md。界面停在 Working 时，Codex 会在 5 分钟后自动重试。"
      },
      "steps": [
        "压缩前",
        "压缩后",
        "被换成摘要的内容"
      ],
      "script": [
        "【操作提示｜停留课件 p27 第 1 步，指左侧“压缩前”。切 Terminal 的本轮 Codex 对话，先在 claude-tap 查看器里指出压缩前最后一次请求里的工具调用和返回。上游卡住时改用 materials/compact/ 的独立实验，口播改说“讲师另做了一个专门的实验”】\n\n本轮改完，会话里已经有不少东西了：有计划，有读到的文件，有改动，有构建输出，还有刚才那些弯路。压缩前最后一次请求大约两万零五百 token，工具调用有 16 次。如果还想在这个会话里接着做，可以输入 /compact，压缩一下再继续。",
        "【操作提示｜推进第 2 步 → 在本轮对话里输入 /compact，等它完成；切 Chrome 的 claude-tap 查看器，依次指压缩前、压缩请求、压缩后三次请求；看完回课件。卡在 Working 超过 5 分钟就打开 courseware/ch02/materials/compact/compare.html，并说明那是独立实验的记录】\n\n输入 /compact。Codex 先把整段历史连同一段固定的要求发给模型：给“下一个接手的模型”写一份交接摘要，写进度、关键决定、约束、下一步。然后用这份摘要换掉历史。看压缩后的请求，只剩大约一万 token：系统指令、团队说明这些初始内容，我们发过的 3 条消息原文，再加这份摘要。AGENTS.md 也重新放了进来。16 次工具调用和返回，一个都没留下。",
        "【操作提示｜推进第 3 步，先在压缩后的请求里指出哪些具体内容被换成了摘要（如 build 输出），再在本轮对话里追问“不读文件、不跑命令，build 输出最后一行是什么”，按实际回答讲】\n\n那原始内容还剩多少？要看摘要怎么写。讲师压缩完追问了一句：不读文件、不跑命令，npm run build 输出的最后一行是什么？这次摘要里正好记下了那一行，它写了出来，但特意说明：这行是从摘要里引用的，不是这一轮亲眼看到的。另一次运行里，摘要没记，它就直接说给不出来。三条项目经历是我们自己发的消息，它标为确定看到的原文。所以压缩后模型看到的是摘要，不是原始内容；摘要留下什么每次不同，需要原文，就让它重新读。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "压缩提示位于 codex-rs/prompts/templates/compact/prompt.md（要求写进度与决定、约束、下一步、关键数据）；本地压缩保留最近用户消息（上限约 2 万 token）、摘要和重新插入的初始上下文；OpenAI 与 Azure provider 走远程压缩（model-provider/src/provider.rs）。"
        },
        {
          "title": "切到实操",
          "text": "在本轮修改的会话里执行 /compact，切 claude-tap 查看器对比压缩前、压缩请求、压缩后三次请求，指出本轮哪些具体内容（如读到的 src/App.tsx、build 输出）被换成了摘要；再问一句“不读文件、不跑命令，build 输出最后一行是什么”。结果和画面不同就按实际讲。上游卡住或压缩失败时，改用 materials/compact/ 的独立实验（复现按钮第 1–5 步，或第 6 步的 compare.html），画面和口播如实说明“这是另一次专门做的实验”。"
        },
        {
          "title": "实测记录（画面）",
          "text": "2026-10-21 20:30 重录（和 2.3 同一次）：压缩前最后一次请求输入 20462 token；压缩请求 15451 token；压缩后的追问请求 10164 token；交接摘要约 3400 字符。追问 build 最后一行时，它写出“✓ built in 283ms”，并说明“这行是我从摘要里引用的，并非本轮实跑所得”，把回答分成 A（你的消息原文、AGENTS.md）、B（摘要推断）、C（未发生）三类。和 16:22 那次对比：那次摘要没记最后一行，它说给不出来；摘要留下什么每次不同，“分清原文和摘要”两次都做到了。更早的 16:22 重录：压缩前最后一次请求 63 项、25844 token；压缩请求 66 项、20923 token；压缩后 10 项、10343 token，交接摘要约 2550 字符；AGENTS.md 在压缩后作为单独一项重新插入。追问 build 最后一行时，它说“这一行我给不出来”，摘要只记了退出码 0、tsc -b && vite build、29 modules、284ms；它把回答分成“你的消息原文”（A）和“来自摘要的转述”（B）两类，三条项目经历归 A。"
        },
        {
          "title": "实测记录（此前画面）",
          "text": "2026-10-20 交互界面，一次更长的会话（能力目录开、推理档位 max），2026-10-21 之前的画面用它：确认之后 Codex 调用 33 次工具（会话累计 39 次），除了改 src/App.tsx、跑 build，还自己起预览服务器、驱动无头 Chrome 去查三种屏幕尺寸（Prompt 写明了浏览器由人检查）。压缩前最后一次请求 135 项、59271 token；压缩请求 request_kind 为 compaction，带全部 138 项加一段 CONTEXT CHECKPOINT COMPACTION 提示；压缩后的请求 10 项、10635 token：系统指令、3 条用户消息原文（/clear 后的第一句、本轮 Prompt、“确认”）、Skills 与权限说明、团队说明、多代理开关说明、环境信息、交接摘要（约 3400 字符，作为 user 消息，开头说明“另一个模型已经开始解决这个问题”）和新问题。追问 build 输出最后一行时，模型说摘要里只记了 build 成功，没有编造；它还把答案分成“亲眼看到的原文”“只来自摘要的”“不知道的”三类。/clear 之前的问答不在压缩后的历史里。"
        },
        {
          "title": "备用画面",
          "text": "上游卡住（界面停在 Working 超过 5 分钟）时，打开复现按钮第 6 步的 compare.html：用独立实验第 1 次运行的真实记录并排列出压缩前 25 条和压缩后 7 条，标出保留、移走、新增、重新注入，不调用模型。"
        },
        {
          "title": "实验记录",
          "text": "独立实验 2026-10-05 压缩 5 次、不压缩对照 2 次（另有 2 次因上游超时或脚本出错不计入）。5 次压缩后都是 7 条 input：3 条用户消息、摘要、权限说明与 Skills、环境信息、新问题，没有工具调用和返回，与 compact.rs 一致。摘要：4 次只留行号或计数，1 次抄下 grep 原文；5 次追问都没有编造。对照组 2 次都答出了 grep 原文。汇总表与参考记录见 materials/compact/。"
        }
      ],
      "source": "index.html#p27",
      "seconds": 90
    },
    {
      "id": "p27b",
      "segment": "压缩",
      "label": "还剩多少，满了会怎样",
      "title": "还剩多少？满了会怎样？",
      "lead": "不装请求查看工具，也能看 context 的状态：在 Codex 里输入 /status，“Context window” 一行写着现在用了多少、窗口一共多大；“Token usage” 是整个会话累计用掉的，两者不是一回事。窗口快满时，Codex 会自己压缩：默认在用到窗口的 90% 时触发，讲师的配置下窗口约 50 万 token。为了看清楚，讲师把触发线调低到 1 万再跑：读到第二个文件时它就自动压缩了，任务照样做完；之后问它 README.md 第一行的原文，它说只看到摘要，没见过原文，要原文得重新读。",
      "html": "<div class=\"p-term\" data-reveal=\"0\"><div class=\"dim\">› /status</div><div>Token usage:      24.6K total (22.3K input + 2.36K output)</div><div class=\"ok\">Context window:   100% left (10.5K used / 498K)</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:12px\"><div class=\"p-box is-soft\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>Context window</h3><p>现在 context 里有多少</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>到 90% 自动压缩</h3><p>中途压缩，任务接着做</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\" style=\"padding:8px 14px\"><h3>压缩之后</h3><p>“我只看到摘要，没见过原文”</p></div></div><p class=\"source-note\">数字来自讲师的两次运行（2026-10-21，课程基线，交互界面，只读沙箱）；自动压缩那次把触发线调低到 1 万（-c model_auto_compact_token_limit=10000），只为演示；默认规则见 Codex 源码 protocol/src/openai_models.rs</p>",
      "steps": [
        "/status 看还剩多少",
        "满了自动压缩",
        "压缩之后"
      ],
      "script": [
        "【操作提示｜停留课件 p27b 第 1 步 → 切 Terminal 的 Codex 会话输入 /status，指“Context window”一行；按实际输出讲】\n\n不装请求查看工具，也能看 context 的状态。在 Codex 里输入 /status。看“Context window”这一行：现在 context 里用了多少，窗口一共多大，讲师这里大约五十万。上面那行“Token usage”是整个会话累计用掉的，压缩以后还会接着涨，两个数不是一回事。",
        "【操作提示｜推进第 2 步，指中间的卡；本页的自动压缩是调低触发线后的另一次运行，按画面讲】\n\n那 context 满了会怎样？Codex 会自己压缩，默认在用到窗口的 90% 时触发。为了在课上看清楚，我把触发线调低到一万，再让它依次读 8 个文件。读到第二个，它就在任务中途压缩了一次，界面上提示“Context compacted”，然后带着摘要接着把 8 个文件都读完了。",
        "【操作提示｜推进第 3 步，指右边的卡】\n\n压缩完，我问它 README.md 的第一行原文是什么，不许读文件。它说：我没亲眼看到过，只有上一位留下的摘要，要原文得让我重新读一次。自动压缩和手动压缩一样，原文换成了摘要。"
      ],
      "teaching": [
        {
          "title": "实测记录",
          "text": "2026-10-21 交互界面，只读沙箱，起点第 1 章参考快照（lab-runs/ch02-context/status-compact-20261021-194853 与 -195134）。/status 在会话开头显示“Context window: 100% left (8.56K used / 498K)”；窗口显示 498K（能力目录写的是 512K）。百分比按整数显示，用得少时一直是 100%，看“used”那个数。调低触发线到 1 万后，让它依次 cat 8 个文件：读到第 2 个时（那次请求约 9.1 千 token）它在任务中途发出压缩请求，界面显示“Context compacted”，接着带着交接摘要读完了全部文件；/status 此时 Token usage 24.6K total，Context window 10.5K used。之后不读文件追问 README.md 第一行，它回答没亲眼看到、只有摘要，要原文请允许它 head -1。源码：自动压缩线取配置值与窗口 90% 中较小的一个（Codex 0.163.0）。"
        },
        {
          "title": "讲师提示",
          "text": "调低触发线只是为了在课上看到自动压缩，学员不用改这个配置。重点讲两件事：/status 看的是 Context window 那一行；自动压缩和手动压缩一样，原文换成了摘要。"
        }
      ],
      "source": "index.html#p27b",
      "seconds": 90
    },
    {
      "id": "p33",
      "segment": "小结",
      "label": "暂停自检",
      "title": "暂停自检",
      "lead": "先独立作答，再看解析。答案后面标出回到哪一页。第 4 题答在自己的笔记里。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>关掉终端再恢复会话，页面会自动回来吗？</h3><div data-reveal=\"1\"><p>不会。会话由 Harness 保存，开发服务器是另一个程序，要重新 npm run dev<span class=\"p-back-to\" data-role=\"ctx\">回到 三种状态</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>改完个人经历再 /clear，改过的文件还在吗？会话中途写的 AGENTS.md 呢？</h3><div data-reveal=\"2\"><p>都还在，/clear 清的是对话；但中途写的 AGENTS.md 要等新对话才读到<span class=\"p-back-to\" data-role=\"tool\">回到 /clear 之后还剩什么</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>压缩以后，模型看不到哪些原始信息？</h3><div data-reveal=\"3\"><p>工具调用和返回的原文，比如读到的文件内容、命令输出；留下的是用户消息、一份摘要和初始内容<span class=\"p-back-to\" data-role=\"gate\">回到 压缩一下继续</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">4</span><div><h3>这一轮你选了继续、/clear、压缩还是新建？依据是什么？</h3><div data-reveal=\"4\"><p>没有唯一答案。依据是 Codex 界面里看得到的：这个会话已经读过哪些文件、做过哪些事，和本轮修改有没有关系；不需要 token 或请求项数<span class=\"p-back-to\" data-role=\"ok\">回到 这次该怎么选</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题",
        "第 3 题",
        "第 4 题"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，只露四道题面，不揭示答案；留出暂停，不切窗口】\n\n暂停一下，回答四个问题。第一，关掉终端再恢复会话，页面会自动回来吗？第二，改完项目经历以后再执行 /clear，改过的文件还在吗？会话进行到一半写好的 AGENTS.md 呢？第三，压缩以后，模型看不到哪些原始信息？第四，这一轮你选了继续、/clear、压缩还是新建？依据是什么？第四题答在自己的笔记里。",
        "【操作提示｜推进第 2 步，揭示第 1 题，指“回到 三种状态”】\n\n第一题，不会。会话由 Harness 保存，开发服务器是另一个程序，关掉终端就停了，要重新运行 npm run dev。恢复对话，不等于恢复文件或服务。",
        "【操作提示｜推进第 3 步，揭示第 2 题，指“回到 /clear 之后还剩什么”】\n\n第二题，还在。/clear 清的是对话，文件在硬盘上，开发服务器也照常跑。本轮开头那次 /clear 之后，个人主页照常打开，就是这个道理。AGENTS.md 也是文件，同样还在；不过 Codex 只在新对话开始时读它，会话中途写好的，要等 /clear 或开新会话之后才进请求。",
        "【操作提示｜推进第 4 步，揭示第 3 题，指“回到 压缩一下继续”】\n\n第三题，工具调用和工具返回都会被移走，比如读到的文件内容、命令的输出，这是 Codex 源码写定的。剩下的是用户消息、一份交接摘要和重新插入的初始内容；原始内容还能留下多少，要看摘要有没有抄进去。",
        "【操作提示｜推进第 5 步，揭示第 4 题，指“回到 这次该怎么选”】\n\n第四题没有唯一答案。对照你刚才写下的理由：它有没有说出 Codex 界面里看得到的东西，比如这个会话已经读过哪些文件、做过哪些事，和本轮修改有没有关系？不需要 token 或请求项数这些数字。"
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 150
    },
    {
      "id": "p34",
      "segment": "小结",
      "label": "本节小结",
      "title": "对话会变长，文件不跟着变",
      "lead": "本节留下一轮内容迭代和三项检查结果。对话每多一轮，前面的内容连同弯路都会重发；/clear 清的是对话、不是文件，写在 AGENTS.md 里的规则还在；压缩后，工具调用和返回换成了一份摘要。下一节：参考一个主页改风格，它看到了什么？课后可以再做 0–2 轮，不计分。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div><div data-reveal=\"0\"><h3>三种状态</h3><ul class=\"p-exits\" style=\"gap:8px\"><li class=\"is-point\">模型不记</li><li class=\"is-point\">会话由 Harness 重发</li><li class=\"is-point\">文件与进程各自存在</li></ul></div><div data-reveal=\"1\" style=\"margin-top:14px\"><h3>context 怎么变</h3><ul class=\"p-exits\" style=\"gap:8px\"><li class=\"is-point\">每轮都重发，弯路也在</li><li class=\"is-point\">/clear 清对话，不清文件，AGENTS.md 还在</li><li class=\"is-point\">压缩后看到的是摘要</li></ul></div></div><div data-reveal=\"2\"><h3 style=\"text-align:center\">一个习惯</h3><div class=\"p-star\" style=\"width:260px;font-size:23px\">一轮一个结果<br>Prompt 写清<br>现状</div></div><div class=\"p-next\" data-reveal=\"3\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.3 参考主页改风格</h3><p>它看到了什么？</p></div></div></div>",
      "steps": [
        "三种状态",
        "context 怎么变",
        "一个习惯",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步，指“三种状态”三条；不切窗口】\n\n回顾一下。模型什么都不记；会话由 Harness 保存，在我们看到的那次运行里，每次请求都重发了完整历史；文件和运行中的程序各自存在。",
        "【操作提示｜推进第 2 步，指“context 怎么变”三条】\n\n所以对话每多一轮，前面的内容都会重发，走过的弯路也在里面。/clear 清掉的是对话，文件不受影响；AGENTS.md 也是文件，新对话一开始就读它。压缩以后，模型看到的是摘要，不是原始内容。",
        "【操作提示｜推进第 3 步，指中间星形】\n\n项目上，我们完成了一轮修改：Prompt 写清项目区的现状，内容由人提供，只改项目区，再看一眼页面、跑一次构建，确认没弄坏别的。一轮只解决一个结果，新发现的问题记下来留给下一轮。课后想再做一两轮可以，不计分。",
        "【操作提示｜推进第 4 步，指“下一节 2.3 参考主页改风格”；结束本节，不在收尾新增操作】\n\n现在 Codex 说改完了，我们手上是一份还没提交的改动。下一节的问题是：它看到了什么，才这样改？"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 120
    }
  ],
  "segments": [
    {
      "label": "会话里存了什么",
      "seconds": 180
    },
    {
      "label": "选哪个会话",
      "seconds": 210
    },
    {
      "label": "补上个人经历",
      "seconds": 360
    },
    {
      "label": "回看这一轮的请求",
      "seconds": 300
    },
    {
      "label": "检查",
      "seconds": 90
    },
    {
      "label": "压缩",
      "seconds": 180
    },
    {
      "label": "小结",
      "seconds": 270
    }
  ]
};

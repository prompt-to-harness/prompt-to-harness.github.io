window.lesson = {
  "title": "补上项目经历，看对话怎么变长",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.02",
  "summary": "对话每多一轮，前面的内容都会被重发；清空和压缩之后还剩什么，在请求记录里看得到。项目上，把自己的项目经历加进个人主页，并用三种屏幕尺寸、键盘和构建证明没弄坏别的。",
  "scenes": [
    {
      "id": "p20",
      "segment": "会话里存了什么",
      "layout": "lesson-cover",
      "label": "这一节做什么",
      "title": "对话多几轮，context 会怎样",
      "lead": "补上项目经历，同时看对话怎么变长、怎么清空",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-now\"><b>2.2</b>补经历</li><li><b>2.3</b>审改动</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-grid\" style=\"--n:2;gap:16px;margin-top:22px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>补上项目经历</h3><p>内容由我们提供，Codex 只负责放进项目区</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>看对话怎么变长</h3><p>多聊几轮、清空、压缩，请求里各剩什么</p></div></div><p class=\"p-hand\" data-reveal=\"2\">上一节看了一次请求，这一节看多次请求之间</p>",
      "steps": [
        "回到地图",
        "本节两件事",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p20 第 1 步，章节地图上 2.1 已标完成；指向 2.2，不切工具窗口】\n\n上一节我们只发了两句话，打开请求看到，模型收到的远不止这两句。这一节接着往下走。",
        "【操作提示｜推进第 2 步，两张卡同时出现；依次指“补上项目经历”和“看对话怎么变长”，不切窗口】\n\n这一节做两件事。项目上，把自己的项目经历加进个人主页的项目区，内容由我们提供，Codex 只负责放进去。看请求这边，对话多聊几轮，context 会怎样变长；清空、压缩以后，请求里还剩什么。",
        "【操作提示｜推进第 3 步，指向手写句；随后进入 p21】\n\n上一节看的是一次请求。这一节看多次请求之间发生了什么。"
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
      "id": "p29",
      "segment": "补上项目经历",
      "layout": "prompt-scene",
      "prompt": "Goal：在项目区呈现我的项目经历。\nContext：个人主页的项目区目前只有占位内容；\n项目卡不跳转，本轮不改。\n项目内容（原文照用）：<每行一条：项目名称：一句描述>\nConstraints：只用上面的文字，不补写；不加链接、依赖；\n只改项目区；先说计划，等我确认再改。\nDone when：我在浏览器查 360/768/1440 宽可读、\nTab 顺序不变；你跑 build 成功；diff 只含项目区。",
      "label": "写本轮 Prompt",
      "title": "让 Codex 只改这一处",
      "lead": "在 /clear 之后的新对话里提交本轮 Prompt。Context 直接写出项目区的现状；项目内容由人提供，要求原文照用；范围只到项目区；完成标准写成可以检查的四件事。讲师演示的项目区借用两位讲师的真实经历；首屏沿用第 1 章的示例，本轮不改。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>写清现状</b><small>项目区目前只有占位内容</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>内容由人提供</b><small>讲师演示借用两位讲师的经历</small></span></li><li data-reveal=\"2\"><span><b>只写愿意公开的</b><small>2.4 之后所有人都看得到</small></span></li><li class=\"is-ok\" data-reveal=\"3\"><span><b>可检查的完成标准</b><small>屏幕尺寸 · 键盘 · build · diff 范围</small></span></li></ol></div>",
      "steps": [
        "写清现状",
        "内容由人提供",
        "只写愿意公开的",
        "完成标准"
      ],
      "script": [
        "【操作提示｜停留课件 p29 第 1 步，指 Prompt 的 Goal 和 Context。提前写好把尖括号一行换成三条讲师经历的 Prompt（courseware/ch02/materials/README.md），不在镜头前现写】\n\n在 /clear 之后的新对话里，提交这段 Prompt。先看 Goal 和 Context：目标是在项目区呈现我的项目经历。新对话里什么历史都没有，所以 Context 直接写出现状：项目区目前只有占位内容。项目卡不跳转，这一轮不改。",
        "【操作提示｜推进第 2 步，指“项目内容”一行和 Constraints；画面仍是尖括号模板，讲师用的三条在讲师提示里，不在课件上改】\n\n中间是项目内容，尖括号那一行换成自己的项目经历，每行一条，要求原文照用。讲师这里填的是我们两位讲师自己的三条经历，合在第 1 章那个“示例同学”的页面上。首屏还是示例同学，这一轮只改项目区，所以先不动它。项目经历是关于我们自己的事实，AI 不知道，也不该替我们编。所以 Constraints 里写死：只用上面的文字，不补写、不润色事实。",
        "【操作提示｜推进第 3 步，指向“只写愿意公开的”；不切窗口】\n\n写自己的内容时多想一步：到 2.4，这个仓库和页面会公开，所有人都能看到。只写自己愿意公开的内容，不写别人的姓名和联系方式。",
        "【操作提示｜推进第 4 步，指 Done when。随后切 Terminal，在 /clear 之后的 Codex 对话里（可写权限，权限设置按录制版本核对），粘贴写好的 Prompt 提交；等它回复计划后回课件 p30，这里不确认执行】\n\n最后是 Done when，四件可以检查的事：三种屏幕尺寸内容完整可读；Tab 焦点顺序和改前一样；npm run build 成功；diff 只含项目区的改动。前两件写明由我们自己在浏览器里查，后两件交给 Codex。不写清楚的话，它会自己想办法验证屏幕尺寸；讲师试跑时，它没有浏览器工具，绕了十几分钟。我们还要求它先说计划、等确认再改。请暂停视频，换上自己的内容，提交 Prompt。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "讲师在 /clear 之后的新对话中提交本 Prompt，尖括号一行替换为两位讲师经历聚合的三条（courseware/ch02/materials/README.md，取自已公开的讲师简介，2026-10-05 讲师确认），提前写好，不在镜头前现写：\n\n- 红绿灯感知量产：城市 NOA 红绿灯感知模块的量产方案设计、部署与加速\n- 端侧多模态推理引擎：在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产\n- RoboHarness：把自然语言需求转成可执行、可验证、可持续迭代的研发流程"
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
      "segment": "补上项目经历",
      "label": "确认计划再执行",
      "title": "先看计划，再让它动手",
      "lead": "Codex 先回复计划。确认三件事再放行：计划只涉及项目区；要放进页面的内容和我们给的原文一致；没有新依赖、没有链接。讲师这次的计划说：只改 src/App.tsx 里的 projects 数组，把 1 条占位换成 3 条；按原文第一个冒号拆成标题和描述，其余一字不改；卡片结构不变，不加链接、按钮和依赖；首屏、index.html 和样式都不动。三件事都对得上。小改动的计划可能只有一两句，这也正常。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>Codex 的计划</h3><p style=\"font-size:19px;line-height:1.6;margin-bottom:14px\">只改 src/App.tsx 的 projects 数组：1 条占位换成 3 条<br>按原文第一个“：”拆成标题和描述，其余一字不改<br>卡片沿用 h3 + p，不加链接、按钮、依赖<br>首屏、index.html、CSS 都不动</p><span class=\"p-env\">/clear 之后的新对话</span></div><ol class=\"p-watch\"><li class=\"is-done\" data-reveal=\"1\">只涉及项目区<small>只动 App.tsx 里的项目数据</small></li><li class=\"is-done\" data-reveal=\"2\">内容与原文一致<small>计划里列出的三条，逐字对过</small></li><li class=\"is-done\" data-reveal=\"3\">没有新依赖、没有链接<small>计划写明不加；有的话先停，问清楚</small></li></ol></div><p class=\"source-note\">计划节选并压缩自讲师用课程基线在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；你的计划以自己收到的回复为准</p>",
      "steps": [
        "看计划",
        "范围",
        "内容",
        "依赖与链接"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步 → 切 Terminal 的 Codex 对话，展示它实际回复的计划；计划很短也照实展示】\n\n提交以后，Codex 先回复计划：要改哪些文件、怎么改。讲师这次的计划不长：只改 src/App.tsx 里的 projects 数组，把 1 条占位换成 3 条，首屏、index.html 和样式都不动。我们按三件事来核对。",
        "【操作提示｜回课件推进第 2 步，再切回计划核对改动文件；计划越界就当场让它收窄，保留原始回复给 2.3 用，不事先准备越界计划】\n\n第一看范围。讲师的个人主页里，项目数据就在 src/App.tsx 顶部的一个数组里，计划也只动这一处。计划里要是出现了样式重写、新组件，先问它为什么。",
        "【操作提示｜推进第 3 步，对照计划里列出的三条和 courseware/ch02/materials/README.md 的原文逐字核对；有改写就如实指出，要求原文照用】\n\n第二看内容。计划里把三条原文都列了出来，按第一个冒号拆成标题和描述，说其余一字不改。逐字对过，和我们给的一致，没有被改写成更漂亮的说法。",
        "【操作提示｜推进第 4 步，核对有无新依赖或链接。三项都通过才在 Codex 会话回复确认（这次用的是“确认，按你的计划改。”）；执行中 Codex 申请运行命令时，看清整条命令再决定；执行结束后回课件 p22】\n\n第三看有没有新依赖、有没有链接。计划里写明了：卡片结构不变，不加链接、按钮和依赖。有的话，先停下来问清楚，不放行。三项都对得上，再让它动手。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "Codex 的计划以录制实际为准。若计划越界，就地让它收窄并保留原始回复，2.3 可作为“范围扩大”的真实素材；不准备越界的计划。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-20 15:58 那次运行（能力目录开）：计划前 Codex 调用 6 次工具读仓库，计划正文列出三条原文并写明只改 src/App.tsx 的 projects 数组；它还写了“两个不打算自作主张的点”：默认不改 CSS、不更新 PROMPT_V1.md / CHECKPOINTS.md。计划的“验收怎么做”里，它打算自己起 npm run preview、用无头 Chrome 截三档宽度、用 DOM 快照核对焦点顺序，超出了 Prompt 里“浏览器由人查”的分工；讲师照常回复“确认，按你的计划改。”，之后的弯路见本节“走过的弯路”那页。实际 diff 只改 src/App.tsx（+10 −2），与 materials/homepage-v1.diff 逐字相同。"
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
      "lead": "提交本轮 Prompt 之后、Codex 回复计划之前，它读了几次仓库里的文件，一共发了 11 次请求：input 从 8 项涨到 37 项，输入 token 涨到 2 倍多。重复的开头部分可以被缓存，算起来更便宜；但模型每次仍要读完整段历史，这份注意力上的负担，缓存帮不上。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>请求</span><span>input 项数 · token</span><span>缓存命中</span></div><div data-reveal=\"0\"><span>第 1 次</span><span>8 项 · 约 9.2 千</span><span>约 8.8 千 token</span></div><div data-reveal=\"0\"><span>第 6 次</span><span>22 项 · 约 1.47 万</span><span>约 1.28 万 token</span></div><div data-reveal=\"0\" class=\"is-key\"><span>第 11 次</span><span>37 项 · 约 2.11 万</span><span>约 1.98 万 token</span></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>token</h3><p>重复的前缀能被缓存，按更低的价格算</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\"><h3>注意力</h3><p>历史越长，早先的需求越容易被淹没</p></div></div><p class=\"source-note\">数字来自讲师按新流程重录的一次运行（2026-10-21，先写 AGENTS.md 再 /clear；课程基线、交互界面，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "11 次请求",
        "token 与缓存",
        "注意力"
      ],
      "script": [
        "【操作提示｜停留课件 p23 第 1 步，指表格第 1、4、7 次三行；数字来自 2026-10-20 讲师的一次运行，不现场重跑】\n\n既然每次都重发，那贵不贵？就看本轮 Prompt 提交以后、Codex 回复计划之前这一段：只发了一句，它读了几次仓库里的文件，一共发了 11 次请求。input 从第一次的 8 项，涨到第十一次的 37 项；输入 token 从九千二，涨到两万一千多。再看缓存命中：每一次都差不多命中了上一次的全部输入。",
        "【操作提示｜推进第 2 步，指向“token”方框；计费细节不展开，不切窗口】\n\n代价有两种。第一种是 token。好在重复的开头部分可以被缓存：服务端认出“这一段上次发过”，就按更低的价格算。所以历史变长，账单不一定同比例变高。具体怎么计费，看各自用的服务，这里不展开。",
        "【操作提示｜推进第 3 步，指向“注意力”方框；不切窗口，接 p24】\n\n第二种代价是注意力，缓存帮不上忙。模型每次都得把整段历史读一遍，历史越长，早先说过的需求越容易被淹没在大量工具输出里。刚才挑会话时说的“无关历史越积越多”，代价就在这里。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "2026-10-21 重录：本轮 Prompt 提交后到 Codex 回复计划的 11 次请求（10 次工具调用）：input 8、12、14、17、20、22、25、28、31、34、37 项；input_tokens 9241 起，第 6 次 14675，第 11 次 21090；缓存命中接近上一次的输入（第 11 次 19840），不再每次正好相等。画面取第 1、6、11 次。旧记录：2026-10-20 15:58 交互界面实测（能力目录开），本轮 Prompt 提交后到 Codex 回复计划的 7 次请求（6 次工具调用）：input 8、11、14、16、19、22、25 项；input_tokens 9087、9999、10622、11690、14423、15880、17280；缓存命中 8863、9087、9999、10622、11690、14423、15880——每次都正好命中上一次的全部输入（第 1 次命中的是 /clear 后那句话的请求）。画面取第 1、4、7 次。2026-10-20 讲师决定改为边做边看，这页改用本轮的请求，原来 2.1 第二步那一问的数字不再上屏。录制版本定下后复测。"
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
      "id": "p24",
      "segment": "回看这一轮的请求",
      "label": "弯路也会被重发",
      "title": "走过的弯路，也留在历史里",
      "lead": "开场访谈里看过，同一个 Prompt，结果会变；过程也一样，每次走的弯路不同。讲师有一次加项目经历（另一次运行），Codex 在确认之后调用了 33 次工具，其中有不少弯路：自己起预览服务器失败、写的截图脚本有语法错、截图文件没生成。这些失败的返回和成功的一样，留在之后每一次请求里，对完成任务没有用，却一直占着 context。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">这一轮的几次弯路</span><div class=\"p-term\" style=\"margin-top:10px\"><div style=\"color:#8A93A0\">npm run preview --port 4173</div><div class=\"err\">退出码 1</div><div style=\"color:#8A93A0\">截图脚本</div><div class=\"err\">SyntaxError</div><div style=\"color:#8A93A0\">ls /tmp/shot-360.png</div><div class=\"err\">No such file</div></div></div><div class=\"p-join\" data-reveal=\"1\"><span>之后每次请求</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">最后一次请求</span><p class=\"p-big\" style=\"margin-top:10px\">135 项 · 约 5.9 万 token</p><p class=\"p-sub\">前面 39 次调用（含出计划前的 6 次）的返回都在里面，失败的也在</p></div></div><div class=\"p-bar\" data-reveal=\"2\">返回有没有用，<b>之后每次请求都带着</b></div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构。弯路的次数只是这一次运行的观察；返回会一直留在后面的请求里，是每次都一样的规则</p>",
      "steps": [
        "这一轮的弯路",
        "之后每次都带着",
        "弯路也被重发"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，指左卡的三次失败；画面是 2026-10-20 讲师的一次运行，不现场重跑】\n\n开场访谈里，我们看过鹈鹕骑自行车的例子：同一个 Prompt，结果每次不一样。过程也一样，每次走的弯路不同。讲师有一次加项目经历，这是另一次运行：确认之后 Codex 调用了 33 次工具。Prompt 里写明了浏览器由我们来查，它还是自己去起预览服务器、写脚本截图，失败了好几次：端口起不来、脚本有语法错、截图没生成。",
        "【操作提示｜推进第 2 步，箭头和右卡出现；指向“135 项”】\n\n这些失败的返回去哪了？看这一轮最后一次请求：135 项，大约五万九千 token。前面 39 次调用的返回都在里面，包括出计划之前读文件的那 6 次，失败的也在。",
        "【操作提示｜推进第 3 步，指向底部结论条；录制时弯路不同就按当次记录指认；随后进入 p30a】\n\n返回有没有用，之后每一次请求都带着。弯路的次数每次不一样，但这条规则每次都一样。对完成任务没用的东西，也一直占着 context；对话越长，这样的东西就越多。回到项目上：Codex 说改完了，改得对不对、有没有弄坏别的，我们自己来查。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "本页素材来自 2026-10-20 那次运行，画面标明是另一次运行。2026-10-21 按新流程重录时，确认之后只有 8 次工具调用（起开发服务器、curl 核对、改文件、build），没有明显弯路，最后一次请求 63 项、约 2.58 万 token；同日另外几次没跑完的重录里，Codex 又自己开无头 Chrome 去查屏幕尺寸，十几次尝试，和 2026-10-20 一样。弯路有没有、有多少，每次不同。2026-10-20 交互界面实测（能力目录开、推理档位 max），2.2 本轮“确认”之后：33 次工具调用（加上出计划那一轮的 6 次，会话里累计 39 次），其中至少 9 次失败或白跑（npm run preview 两次退出码 1、shell 脚本被当成 JavaScript 报 SyntaxError、截图文件不存在、CDP 脚本解析错等），全部是 Codex 自己为了查屏幕尺寸而做的，Prompt 写明了浏览器由人检查。每次请求都带着之前全部调用和返回，最后一次请求 135 项、59271 token。原来的 read_file 例子来自 2026-10-02 能力目录关的运行，已不再上屏。"
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
      "id": "p30a",
      "segment": "检查有没有弄坏别的",
      "label": "三种屏幕尺寸",
      "title": "三种屏幕尺寸：在电脑上模拟手机和平板",
      "lead": "屏幕尺寸指浏览器里网页实际能显示的区域，浏览器里也叫视口（viewport）。不用找真机，Chrome 开发者工具的设备工具栏可以把它改成指定宽高。尺寸用的是 CSS 像素，不是屏幕的物理像素。自带机型的尺寸和这三种不一致，所以选 Responsive 手填宽高；常用的话可以加成自定义设备，选做。设备模拟只作用于当前标签页，要在自己个人主页的标签页里打开。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:28px;align-items:start\"><div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>尺寸</span><span>模拟</span></div><div data-reveal=\"0\"><span class=\"p-mono\">360×800</span><span>手机竖屏</span></div><div data-reveal=\"0\"><span class=\"p-mono\">768×1024</span><span>平板竖屏</span></div><div data-reveal=\"0\"><span class=\"p-mono\">1440×900</span><span>笔记本</span></div></div><div class=\"p-handoff-card\" data-reveal=\"1\" style=\"padding:20px 26px\"><h3>在自己的页面上切</h3><p style=\"font-size:20px;line-height:1.6\">① 新标签页打开 npm run dev 给出的本地地址<br>② 就在这个标签页按 ⌥⌘I，再按 ⇧⌘M<br>③ 顶部选 Responsive，手填宽高<br>④ 页面没变化就 ⌘R 刷新一次</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">只模拟<b>当前标签页</b>：在课件页里开，模拟的就是课件</div>",
      "steps": [
        "三种尺寸",
        "怎么切",
        "在自己的页面上演示"
      ],
      "script": [
        "【操作提示｜停留课件 p30a 第 1 步，按行指向三种尺寸；不切窗口】\n\n先在三种屏幕尺寸下看页面。先说清楚什么是屏幕尺寸：浏览器里网页实际能显示的那块区域，开发者工具里也叫视口，英文是 viewport。我们用三种尺寸：360 乘 800，模拟手机竖屏，也是最容易挤的；768 乘 1024，是平板竖屏；1440 乘 900，是常见的笔记本屏幕。这里的尺寸是 CSS 像素，不是屏幕的物理像素。这三种尺寸在电脑的浏览器里就能模拟，不用真的找一部手机。",
        "【操作提示｜推进第 2 步，指右侧四步；不切窗口，快捷键以录制时 Chrome 版本为准】\n\n怎么切？用 Chrome 开发者工具的设备工具栏。顶部下拉菜单里有不少自带机型，可它们的尺寸和这三种不一样，所以直接选 Responsive，手填宽高。经常用的话，可以把三种尺寸加成自定义设备，这是选做。",
        "【操作提示｜推进第 3 步 → 切 Chrome 新开标签页，粘贴 npm run dev 实际打印的 Local 地址；就在该标签页按 ⌥⌘I、⇧⌘M，选 Responsive 填 360×800，页面不变就 ⌘R 刷新，再改填 1440×900。让地址栏与设备工具栏同时入画，页面缩放保持 100%；回课件 p31】\n\n切到浏览器演示一遍。新开一个标签页，打开 npm run dev 给出的本地地址，确认是自己的个人主页。就在这个标签页里按 Option、Command、I 打开开发者工具，再按 Shift、Command、M 打开设备工具栏。选 Responsive，填 360 乘 800。页面没跟着变，就按 Command、R 刷新一次。注意，设备模拟只作用于当前标签页，在课件页里开，模拟的就是课件，不是我们的个人主页。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在讲师的个人主页上完整演示一遍：新开标签页打开本地地址 → ⌥⌘I → ⇧⌘M → 选 Responsive 填 360×800 → 观察 → 改填 1440×900。镜头要让标签页地址栏和设备工具栏同时入画。设置入口与快捷键按录制时 Chrome 版本核对。"
        },
        {
          "title": "讲师提示",
          "text": "常见卡点：在别的标签页里开了设备工具栏；缩放比例不是 100% 误以为页面变小；页面缺少 viewport meta 时手机浏览器会按约 980px 排版再缩小，看起来“挤”。自定义设备在开发者工具设置 → Devices → Add custom device，选做。原 2.1 p05、p05-live 合并移来。"
        }
      ],
      "source": "index.html#p30a",
      "seconds": 90
    },
    {
      "id": "p31",
      "segment": "检查有没有弄坏别的",
      "label": "改好了吗",
      "title": "改好了吗？有没有弄坏别的？",
      "lead": "改完要检查，不只看新内容：三种屏幕尺寸下内容完整可读；Tab 焦点顺序与改前一致；npm run build 成功。讲师这次三项都通过：三种宽度都没有横向滚动，360 宽时每条描述折成两行；能用 Tab 停下的仍只有“查看项目”；构建完成。其中屏幕尺寸和 Tab 的结果是 Codex 自己用无头 Chrome 查的，Prompt 里这两项写的是由人查，前面看到的那些弯路就出在这里；自己的页面要在浏览器里亲手查。内容变多后出现的新问题，比如手机上出现横向滚动，记为剩余问题，不在这一轮顺手修。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.3fr) minmax(0,1.1fr);row-gap:12px;--rf:21px\"><div class=\"is-head\" data-reveal=\"0\"><span>检查</span><span>讲师这次的结果</span><span>能说明什么</span></div><div data-reveal=\"0\"><span class=\"p-cell\">360 · 768 · 1440</span><span class=\"p-cell\">都没有横向滚动；360 宽时描述折成两行</span><span class=\"p-why\">文字和排版没被挤坏</span></div><div data-reveal=\"1\"><span class=\"p-cell\">Tab 键</span><span class=\"p-cell\">能停下的仍只有“查看项目”</span><span class=\"p-why\">键盘行为与改前一致</span></div><div data-reveal=\"2\"><span class=\"p-cell p-mono\">npm run build</span><span class=\"p-cell\">tsc 与 vite 都通过：✓ built</span><span class=\"p-why\">构建流程成功完成</span></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">新出现的问题：<b>记下来，不顺手修</b></div><p class=\"source-note\">结果来自讲师用课程基线在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；屏幕尺寸和 Tab 这两项是 Codex 自己查的，Prompt 里写的是由人查</p>",
      "steps": [
        "三种屏幕尺寸",
        "键盘",
        "构建",
        "新问题"
      ],
      "script": [
        "【操作提示｜推进课件 p31 第 1 步 → 切 Chrome 个人主页标签页（设备工具栏已开），Responsive 依次填 360×800、768×1024、1440×900 并刷新，看项目区。按实际显示讲，截断或挤坏如实说】\n\n尺寸会切了，开始检查。不只看新内容有没有出来，还要看别的地方有没有被弄坏。在刚才那个标签页里依次切三种屏幕尺寸：360、768、1440。三种宽度都没有横向滚动，360 宽时每条描述折成了两行，文字都完整。",
        "【操作提示｜推进第 2 步 → 同一标签页从页面开头按 Tab，必要时放大，让焦点框看得清；结果和“只停在查看项目”不同就如实记录】\n\n再按 Tab。改之前，焦点只会停在“查看项目”按钮上，现在还是一样。新加的项目卡没有可以聚焦的东西，键盘行为没有变，这正是我们要的。",
        "【操作提示｜推进第 3 步 → Terminal 另开“构建检查”标签页，在个人主页项目根目录运行 npm run build，再用 echo $? 看退出码（PowerShell 用 $LASTEXITCODE），保留开发服务器终端。失败就展示首个报错，不念“成功”】\n\n最后在终端运行 npm run build，类型检查和打包都通过，构建流程成功完成。三项检查各有对象：屏幕尺寸检查文字和排版，Tab 检查焦点顺序，build 检查项目能否生成构建产物。顺带说一句，这次屏幕尺寸和 Tab 的结果，Codex 自己也查了一遍，用的是无头 Chrome，前面看到的那些弯路就是这么来的。Prompt 里这两项写的是由我们查，所以还是要自己在浏览器里看。",
        "【操作提示｜推进第 4 步 → 回 Chrome 用 360×800 看有无横向滚动（这次运行没有）；出现就记为剩余问题，不在本轮修。留出暂停后回课件】\n\n内容变多了，手机上会不会挤出横向滚动？讲师的页面在 360 下没有。如果自己的页面出现了，记成剩余问题，留到下一轮。这一轮只解决一个结果。三项结果都记下来，下一节审改动时还要用。请暂停视频，按这三项检查自己的页面。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-20 15:58 那次运行（能力目录开）：npm run build（tsc -b && vite build）输出“✓ built in 265ms”。屏幕尺寸：Codex 发现 macOS 无头 Chrome 的 --window-size=360 实际得到 500px 宽，改用同源 iframe 测，360 / 768 / 1440 下 scrollWidth 等于可显示区域的宽度、无横向溢出，卡片宽 320 / 720 / 860，描述 2 / 1 / 1 行。Tab：渲染后全页只有 1 个可聚焦元素（首屏“查看项目”链接），项目卡内 0 个。截图存在临时目录，未保留。"
        },
        {
          "title": "讲师提示",
          "text": "录制时屏幕尺寸和 Tab 由讲师在 Chrome 里亲手查，结果列按实际显示讲；让 AI 打开浏览器自己检查留到第 3 章讲 Skill 时。Codex 这次自己查了，只点一句，不展开。"
        }
      ],
      "source": "index.html#p31",
      "seconds": 120
    },
    {
      "id": "p27",
      "segment": "压缩",
      "label": "压缩一下继续",
      "title": "压缩以后，模型看到的是摘要",
      "lead": "本轮会话已经有了计划、读文件、改文件、构建输出。对它执行 /compact：Codex 先把整段历史连同一段“写交接摘要”的要求发给模型，再用这份摘要换掉历史。讲师一次长会话的结果（另一次运行）：压缩前最后一次请求 135 项、约 5.9 万 token；压缩后只剩 10 项、约 1.06 万 token。我们发过的消息原文都在，39 次工具调用和返回都没了。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">压缩前</span><p style=\"line-height:1.7\">我们的提问 · 39 次工具调用<br><b>工具返回的原文</b>（文件内容、build 输出）<br>模型的回答 · 135 项</p></div><div class=\"p-join\" data-reveal=\"1\"><span>/compact</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">压缩后</span><p style=\"line-height:1.7\">我们发过的 3 条消息（原文）<br><b>一份交接摘要</b>（约 3400 字符）<br>初始内容（重新插入）· 10 项</p></div></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:14px\"><h3>追问：npm run build 的最后一行是什么？</h3><p>它答不出原文：摘要里只记了“build 成功”，它说要重跑才能确认；三条项目经历是我们的消息，原文都答对了</p></div><p class=\"source-note\">压缩后保留什么由源码决定（core/src/compact.rs）。数字来自讲师用课程基线（隔离 HOME）在交互界面里的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
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
        "【操作提示｜停留课件 p27 第 1 步，指左侧“压缩前”。切 Terminal 的本轮 Codex 对话，先在 claude-tap 查看器里指出压缩前最后一次请求里的工具调用和返回。上游卡住时改用 materials/compact/ 的独立实验，口播改说“讲师另做了一个专门的实验”】\n\n本轮改完，会话已经很长了：有计划，有读到的文件，有改动，有构建输出，还有刚才那些弯路。讲师有一次会话比较长（另一次运行），压缩前最后一次请求有 135 项，大约五万九千 token，光工具调用就有 39 次。如果还想在这个会话里接着做，可以输入 /compact，压缩一下再继续。",
        "【操作提示｜推进第 2 步 → 在本轮对话里输入 /compact，等它完成；切 Chrome 的 claude-tap 查看器，依次指压缩前、压缩请求、压缩后三次请求；看完回课件。卡在 Working 超过 5 分钟就打开 courseware/ch02/materials/compact/compare.html，并说明那是独立实验的记录】\n\n输入 /compact。Codex 先把整段历史连同一段固定的要求发给模型：给“下一个接手的模型”写一份交接摘要，写进度、关键决定、约束、下一步。然后用这份摘要换掉历史。看压缩后的请求，只剩 10 项、大约一万零六百 token：系统指令、团队说明这些初始内容，我们发过的 3 条消息原文，再加这份摘要。39 次工具调用和返回，一个都没留下。",
        "【操作提示｜推进第 3 步，先在压缩后的请求里指出哪些具体内容被换成了摘要（如 build 输出），再在本轮对话里追问“不读文件、不跑命令，build 输出最后一行是什么”，按实际回答讲】\n\n那原始内容还剩多少？要看摘要怎么写。讲师压缩完追问了一句：不读文件、不跑命令，npm run build 输出的最后一行是什么？它答不出原文，说摘要里只记了“build 成功”，要确认得重跑一次。三条项目经历是我们自己发的消息，原文都答对了。所以压缩后模型看到的是摘要，不是原始内容；需要原文，就让它重新读。摘要每次写得不一样，好不好，我们得自己读一遍才知道。"
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
          "title": "实测记录（重录）",
          "text": "2026-10-21 按新流程重录：会话短得多，压缩前 66 项、约 2.09 万 token，压缩后 10 项、约 1.03 万 token，交接摘要约 2550 字符；AGENTS.md 在压缩后作为单独一项重新插入。追问 build 最后一行时，它把回答分成“亲眼看到的原文”和“只来自摘要的”两类。画面仍用 2026-10-20 那次长会话，标明是另一次运行。"
        },
        {
          "title": "实测记录",
          "text": "2026-10-20 交互界面，本节真实会话（能力目录开、推理档位 max）：确认之后 Codex 调用 33 次工具（会话累计 39 次），除了改 src/App.tsx、跑 build，还自己起预览服务器、驱动无头 Chrome 去查三种屏幕尺寸（Prompt 写明了浏览器由人检查）。压缩前最后一次请求 135 项、59271 token；压缩请求 request_kind 为 compaction，带全部 138 项加一段 CONTEXT CHECKPOINT COMPACTION 提示；压缩后的请求 10 项、10635 token：系统指令、3 条用户消息原文（/clear 后的第一句、本轮 Prompt、“确认”）、Skills 与权限说明、团队说明、多代理开关说明、环境信息、交接摘要（约 3400 字符，作为 user 消息，开头说明“另一个模型已经开始解决这个问题”）和新问题。追问 build 输出最后一行时，模型说摘要里只记了 build 成功，没有编造；它还把答案分成“亲眼看到的原文”“只来自摘要的”“不知道的”三类。/clear 之前的问答不在压缩后的历史里。"
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
      "id": "p32",
      "segment": "小结",
      "label": "记下本轮",
      "title": "想下次接得上，可以记下这几项",
      "lead": "这是一页建议，不计入验收。用笔记还是截图，按自己的习惯。本轮目标和改动文件，2.3 提交时写进提交说明。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:20px;align-items:start\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">可以记</span><ol class=\"p-notes\" style=\"margin-top:10px\"><li><span><b>本轮目标</b><small>这一轮只解决的那一个结果</small></span></li><li><span><b>会话选择与理由</b><small>继续、/clear、压缩还是新建，为什么</small></span></li><li><span><b>验证结果</b><small>三种屏幕尺寸、Tab、build</small></span></li><li><span><b>剩余问题</b><small>发现了、但这一轮没修的</small></span></li></ol></div><div style=\"display:grid;gap:12px\"><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>2.3 的提交说明</h3><p>写进本轮目标和改动文件</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>不计入验收</h3><p>笔记或截图都行</p></div></div></div>",
      "steps": [
        "可以记哪几项",
        "提交说明"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指左侧四项；不切窗口，不建文件】\n\n想下次接得上，可以记几样东西：本轮目标，会话选择和理由，验证结果，还有剩余问题。用笔记还是截图，按你自己的习惯，这一页只是建议，不计入验收。",
        "【操作提示｜推进第 2 步，指右侧两张卡；本轮改动保持未提交，留给 2.3】\n\n其中本轮目标和改动文件，下一节提交时会写进提交说明，不用另外存一份。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "第 2 章不设固定记录文件（2026-10-19）。不要求学员建文件或按格式填写；这一页只给建议。"
        }
      ],
      "source": "index.html#p32",
      "seconds": 60
    },
    {
      "id": "p33",
      "segment": "小结",
      "label": "暂停自检",
      "title": "暂停自检",
      "lead": "先独立作答，再看解析。答案后面标出回到哪一页。第 4 题答在自己的笔记里。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>关掉终端再恢复会话，页面会自动回来吗？</h3><div data-reveal=\"1\"><p>不会。会话由 Harness 保存，开发服务器是另一个程序，要重新 npm run dev<span class=\"p-back-to\" data-role=\"ctx\">回到 三种状态</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>改完项目经历再 /clear，改过的文件还在吗？会话中途写的 AGENTS.md 呢？</h3><div data-reveal=\"2\"><p>都还在，/clear 清的是对话；但中途写的 AGENTS.md 要等新对话才读到<span class=\"p-back-to\" data-role=\"tool\">回到 /clear 之后还剩什么</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>压缩以后，模型看不到哪些原始信息？</h3><div data-reveal=\"3\"><p>工具调用和返回的原文，比如读到的文件内容、命令输出；留下的是用户消息、一份摘要和初始内容<span class=\"p-back-to\" data-role=\"gate\">回到 压缩一下继续</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">4</span><div><h3>这一轮你选了继续、/clear、压缩还是新建？依据是什么？</h3><div data-reveal=\"4\"><p>没有唯一答案。依据是 Codex 界面里看得到的：这个会话已经读过哪些文件、做过哪些事，和本轮修改有没有关系；不需要 token 或请求项数<span class=\"p-back-to\" data-role=\"ok\">回到 这次该怎么选</span></p></div></div></div></div>",
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
      "lead": "本节留下一轮内容迭代和三项检查结果。对话每多一轮，前面的内容连同弯路都会重发；/clear 清的是对话、不是文件，写在 AGENTS.md 里的规则还在；压缩后，工具调用和返回换成了一份摘要。下一节：AI 交回的改动，要不要接受？课后可以再做 0–2 轮，不计分。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div><div data-reveal=\"0\"><h3>三种状态</h3><ul class=\"p-exits\" style=\"gap:8px\"><li class=\"is-point\">模型不记</li><li class=\"is-point\">会话由 Harness 重发</li><li class=\"is-point\">文件与进程各自存在</li></ul></div><div data-reveal=\"1\" style=\"margin-top:14px\"><h3>context 怎么变</h3><ul class=\"p-exits\" style=\"gap:8px\"><li class=\"is-point\">每轮都重发，弯路也在</li><li class=\"is-point\">/clear 清对话，不清文件，AGENTS.md 还在</li><li class=\"is-point\">压缩后看到的是摘要</li></ul></div></div><div data-reveal=\"2\"><h3 style=\"text-align:center\">一个习惯</h3><div class=\"p-star\" style=\"width:260px;font-size:23px\">一轮一个结果<br>Prompt 写清<br>现状</div></div><div class=\"p-next\" data-reveal=\"3\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.3 审改动</h3><p>AI 交回的改动，要不要接受？</p></div></div></div>",
      "steps": [
        "三种状态",
        "context 怎么变",
        "一个习惯",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步，指“三种状态”三条；不切窗口】\n\n回顾一下。模型什么都不记；会话由 Harness 保存，在我们看到的那次运行里，每次请求都重发了完整历史；文件和运行中的程序各自存在。",
        "【操作提示｜推进第 2 步，指“context 怎么变”三条】\n\n所以对话每多一轮，前面的内容都会重发，走过的弯路也在里面。/clear 清掉的是对话，文件不受影响；AGENTS.md 也是文件，新对话一开始就读它。压缩以后，模型看到的是摘要，不是原始内容。",
        "【操作提示｜推进第 3 步，指中间星形】\n\n项目上，我们完成了一轮修改：Prompt 写清项目区的现状，内容由人提供，只改项目区，再用三种屏幕尺寸、键盘和构建证明没弄坏别的。一轮只解决一个结果，新发现的问题记下来留给下一轮。课后想再做一两轮可以，不计分。",
        "【操作提示｜推进第 4 步，指“下一节 2.3 审改动”；结束本节，不在收尾新增操作】\n\n现在 Codex 说改完了，我们手上是一份还没提交的改动。下一节的问题是：AI 交回的改动，要不要接受？"
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
      "label": "补上项目经历",
      "seconds": 240
    },
    {
      "label": "回看这一轮的请求",
      "seconds": 270
    },
    {
      "label": "检查有没有弄坏别的",
      "seconds": 210
    },
    {
      "label": "压缩",
      "seconds": 90
    },
    {
      "label": "小结",
      "seconds": 330
    }
  ]
};

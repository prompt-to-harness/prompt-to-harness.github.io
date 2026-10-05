window.lesson = {
  "title": "只改一处，并证明改好了",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.02",
  "summary": "先弄清模型、会话、文件与进程各记住什么，再选会话；用当前证据让 Codex 只改项目区，并用三种视口、键盘和构建证明没弄坏别的。",
  "scenes": [
    {
      "id": "p20",
      "segment": "三种状态",
      "layout": "lesson-cover",
      "label": "开始改之前",
      "title": "开始改之前，先决定在哪个会话里改",
      "kicker": "第 2 章 · 2.2 · 开篇",
      "lead": "2.1 选定了第 3 条反馈。动手之前有一个选择：继续 2.1 的会话、恢复它，还是新建一个？2.1 看了一次请求里有什么，这一节看多次请求之间发生了什么。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>听反馈</li><li class=\"is-now\"><b>2.2</b>改一处</li><li><b>2.3</b>审改动</li><li><b>2.4</b>公开发布</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-grid\" style=\"--n:3;gap:16px;margin-top:22px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><h3>继续</h3><p>接着 2.1 那个会话往下说</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>恢复</h3><p>关掉以后再把它找回来</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><h3>新建</h3><p>开一个干净的会话</p></div></div><p class=\"p-hand\" data-reveal=\"2\">要选对，先弄清：会话里到底存了什么？</p>",
      "steps": [
        "回到地图",
        "三个选项",
        "本节问题"
      ],
      "script": [
        "2.1 我们没改一行代码，留下了一份反馈清单，选定了第 3 条：看不出你做过什么。这一节就来改它，而且只改它。",
        "动手之前，先面对一个很日常的选择。2.1 那个 Codex 会话还开着，我们可以继续在里面说；也可以关掉以后再恢复；或者干脆新建一个。",
        "怎么选？凭感觉不行。得先弄清楚，一个会话里到底保存了什么，多次请求之间又发生了什么。2.1 我们拆开看了一次请求，这一节看多次。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "开篇地图沿用 2.1 的五节，2.1 标为已完成。"
        }
      ],
      "source": "index.html#p20",
      "seconds": 90
    },
    {
      "id": "p21",
      "segment": "三种状态",
      "label": "三种状态",
      "title": "模型、会话、文件与进程，各记住什么",
      "kicker": "第 2 章 · 2.2 · 三种状态",
      "lead": "模型本身不保存任何状态；会话由 Harness 保存，每次请求时重发；文件和运行中的程序独立存在于电脑上。2.1 开场要重启开发服务器，就是第三栏的事。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:16px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">模型</span><p class=\"p-big\">什么都不记，只看这一次请求</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">会话</span><p class=\"p-big\">Harness 保存，下次重发</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">文件与进程</span><p class=\"p-big\">在电脑上，与会话无关</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>2.1 开场</h3><p>关掉终端 → 开发服务器停了 → 代码文件还在</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\"><h3>换个目录恢复会话</h3><p>它仍答得出上轮读的是 index.html<br>可新目录里没有这个文件</p></div></div><div class=\"p-bar\" data-reveal=\"2\">恢复对话，<b>不等于恢复文件或服务</b></div>",
      "steps": [
        "三栏",
        "开场那一幕",
        "恢复会话的实验"
      ],
      "script": [
        "先把三样东西分开。第一，模型：它什么都不记，每次只看这一次请求里的内容。第二，会话：由 Harness 保存，也就是 Codex 把我们说过的话、它做过的事存下来，下一次请求时再发出去。第三，文件和运行中的程序：它们在我们的电脑上，和会话没有关系。",
        "回想 2.1 开场：隔了一天，本地地址打不开，重新运行 npm run dev 才好。现在可以给它归类了：开发服务器是一个运行中的程序，属于第三栏。关掉终端它就停了，代码文件还在硬盘上。",
        "讲师做过一个实验：在另一个目录里，用 codex exec resume 恢复 2.1 那种只读任务的会话，再问它上一轮读的是什么文件。它答得出来：index.html。可新目录里根本没有这个文件。会话被恢复了，但文件和服务不会跟着回来。所以恢复对话，不等于恢复文件或服务。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "Codex 0.160.0，MiniMax 自定义 provider：在另一目录 codex exec resume <会话 id>，模型仍答出 index.html；Harness 追加了新的权限说明和新的环境信息，cwd 已是新目录。--last 默认只在当前目录的会话中挑选，--all 取消过滤。见提案“第二轮实测”。"
        },
        {
          "title": "讲师提示",
          "text": "这一页只建立三栏。会话里“存了什么、怎么发”下一页用请求对比展示。"
        }
      ],
      "source": "index.html#p21",
      "seconds": 90
    },
    {
      "id": "p22",
      "segment": "三种状态",
      "label": "会话保存了什么",
      "title": "下一次请求，带上了前面的全部历史",
      "kicker": "第 2 章 · 2.2 · 三种状态",
      "lead": "把同一次任务里相邻两次请求放在一起比：后一次把前一次的内容原样带上，再接上模型的工具调用和工具返回。模型之所以“接得上话”，是因为 Harness 每次都把历史重新发给它。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">第 1 次 → 第 2 次请求的 input <span class=\"add\">+2</span></div><div class=\"p-ln\"><i>1</i><code>developer · 权限说明、Skills 列表</code></div><div class=\"p-ln\"><i>2</i><code>user · 环境信息</code></div><div class=\"p-ln\"><i>3</i><code>user · 我们的那句话</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>4</i><code>模型 · 调用 exec_command: cat index.html</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>5</i><code>工具返回 · index.html 的内容</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>前 3 项原样重发</b><small>不是“接着上次”，而是从头再发</small></span></li><li data-reveal=\"1\"><span><b>新增在末尾</b><small>调用和返回都进了历史</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>只在这次运行里看到</b><small>MiniMax 配置下 store 为 false</small></span></li></ol></div><p class=\"source-note\">示意图按记录结构整理，条目名为中文概括。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "第 1 次请求",
        "第 2 次多了什么",
        "适用范围"
      ],
      "script": [
        "打开 claude-tap 的查看器，选同一次任务里相邻的两次请求做对比。左边是第一次请求的 input，一共三项：权限说明和 Skills 列表，环境信息，还有我们那句话。",
        "第二次请求，前三项原样都在，末尾多了两项：模型上一次提出的工具调用，cat index.html；还有工具返回的文件内容。模型并没有“记得”刚才做了什么，是 Harness 把整段历史重新发了一遍。",
        "有一个范围要说清：这是我们在这一次运行里看到的。讲师用的是 MiniMax 自定义 provider，请求里 store 是 false，也没有引用上一次响应的编号，所以每次都带上完整输入。换别的服务或登录方式，细节可能不同。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "MiniMax 配置下请求体 store 为 false、没有 previous_response_id；OpenAI 官方 provider 与 ChatGPT 登录未核实（决定 28 不作为本章核实项）。前 3 项的角色划分见 2.1 p13 的核对记录。"
        },
        {
          "title": "讲师提示",
          "text": "画面用 claude-tap 的相邻请求 diff 视图截图替换示意图；截图前检查路径和个人 Skills 名称。"
        }
      ],
      "source": "index.html#p22",
      "seconds": 90
    },
    {
      "id": "p23",
      "segment": "代价与不确定",
      "label": "每次都重发，贵不贵",
      "title": "每次都重发，代价是 token 和注意力",
      "kicker": "第 2 章 · 2.2 · 三种状态",
      "lead": "一次提问产生了 4 次请求，input 从 3 项涨到 10 项。重复的开头部分可以被缓存，算起来更便宜；但模型每次仍要读完整段历史，注意力不会因为缓存而变多。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>请求</span><span>input 项数</span><span>缓存命中</span></div><div data-reveal=\"0\"><span>第 1 次</span><span>3 项</span><span>约 1 千 token</span></div><div data-reveal=\"0\"><span class=\"p-sub\">第 2、3 次</span><span>逐次增加</span><span>逐次增加</span></div><div data-reveal=\"0\" class=\"is-key\"><span>第 4 次</span><span>10 项</span><span>约 1.18 万 token</span></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>token</h3><p>重复的前缀能被缓存，按更低的价格算</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\"><h3>注意力</h3><p>历史越长，早先的需求越容易被淹没</p></div></div><p class=\"source-note\">数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "4 次请求",
        "token 与缓存",
        "注意力"
      ],
      "script": [
        "既然每次都重发，那贵不贵？看那次只读提问的记录：我们问了一句，Codex 一共发了 4 次请求。input 从第一次的 3 项，涨到第四次的 10 项。缓存命中从大约 1 千 token，涨到大约 1.18 万。",
        "代价有两种。第一种是 token。好在重复的开头部分可以被缓存：服务端认出“这一段上次发过”，就按更低的价格算。所以历史变长，账单不一定同比例变高。具体怎么计费，看你用的服务，这里不展开。",
        "第二种代价是注意力，缓存帮不上忙。模型每次都得把整段历史读一遍，历史越长，早先说过的需求越容易被淹没在大量工具输出里。这是我们挑会话时真正要考虑的。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。 中间两次请求的数字未在提案中记录，画面只写“逐次增加”。"
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
      "segment": "代价与不确定",
      "label": "再问一次，一样吗",
      "title": "同一个问题再问一次，过程不一样",
      "kicker": "第 2 章 · 2.2 · 三种状态",
      "lead": "同一句只读提问跑了两次：第一次 4 次请求，中途还调用了一个不存在的工具；第二次只用了 2 次请求。模型的输出有不确定性，所以判断要看这一次的证据，而不是“上次是这样”。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">第一次运行</span><p class=\"p-big\">4 次请求</p><p class=\"p-sub\">先调用 read_file 报错，再改用 cat</p></div><div class=\"p-join\" data-reveal=\"1\"><span>同一句话</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">第二次运行</span><p class=\"p-big\">2 次请求</p><p class=\"p-sub\">直接读到文件，没有报错</p></div></div><div class=\"p-bar\" data-reveal=\"2\">看这一次的证据，<b>不靠“上次是这样”</b></div><p class=\"source-note\">数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "第一次",
        "第二次",
        "结论"
      ],
      "script": [
        "还有一件事。2.1 里我们看到，模型调用了一个不存在的 read_file 工具，报错以后才改用 cat。那一次，一句提问产生了 4 次请求。",
        "同一句话，讲师又跑了一次。这次只用了 2 次请求，直接读到了文件，没有报错。",
        "模型的输出有不确定性，过程也会不一样。所以 2.1 我们说数字只说明结构；改代码也一样，“上次它这么做没问题”不能当证据，每一轮都要看这一轮的 diff 和检查结果。"
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p25",
      "segment": "请求会变",
      "label": "Codex 自己也在变",
      "title": "不只输出会变，系统指令也在变",
      "kicker": "第 2 章 · 2.2 · 请求会变",
      "lead": "Codex 的通用系统指令在开源仓库里有完整历史。它没有一路变短：2025 年 8 月一次重写后变成原来的两倍多，此后在 21–24 KB 间波动；权限说明后来拆成按配置拼装的模板。数据来自 openai/codex 仓库（Apache-2.0）的提交历史，2026-10-02 核对、10-03 复核；大小为文件字节数。",
      "html": "<div class=\"p-flow\" style=\"--n:4\"><div class=\"p-node\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-num\">2025-04</span><h3>≈5.7 KB</h3><p>首版</p></div><div class=\"p-node\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-num\">2025-08-05</span><h3>≈9.8 KB</h3><p>逐步补充</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">2025-08-07</span><h3>≈23.6 KB</h3><p>重写：工作方式、性格、汇报格式</p></div><div class=\"p-node\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-num\">之后</span><h3>21–24 KB</h3><p>2026-01 约 20.9 KB</p></div></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:18px\"><h3>2026-01-12 · 权限说明拆出去</h3><p>从固定段落改为按沙箱模式、审批策略分别放模板，运行时拼装（2.1 p16 看过的那段文字）</p></div><p class=\"source-note\">数据来自 openai/codex 仓库（Apache-2.0）的提交历史，2026-10-02 核对、10-03 复核；大小为文件字节数</p>",
      "steps": [
        "早期",
        "一次重写",
        "权限说明拆出"
      ],
      "script": [
        "不只是模型的输出会变，Codex 自己也在变。它是开源的，系统指令的每一次修改都留在仓库历史里。我们看通用指令文件的大小：2025 年 4 月首版大约 5.7 KB，到 8 月 5 日补到大约 9.8 KB。",
        "两天后，8 月 7 日，有一次提交把它整个重写，一下变成大约 23.6 KB，新增了工作方式、性格、计划示例、汇报格式这些章节。此后一直在 21 到 24 KB 之间来回，到 2026 年 1 月大约 20.9 KB。所以它不是越写越短，也不是越写越长。",
        "2026 年 1 月还有一次结构变化：权限说明从固定段落里拆出去，按沙箱模式和审批策略分别放模板，运行时再拼。2.1 我们对比只读和可写时看到的那段文字，就是这么来的。我们只陈述仓库里看得到的变化，不猜 OpenAI 为什么这么改。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "首版到 2025-08-05 的大小、重写提交 81b148bda2（“update system prompt”）、按模型分文件提交 916fdc2a37、权限模板化提交 87f7226cca，见提案“Codex 开源仓库中的系统指令”。通用指令当前位于 codex-rs/protocol/src/prompts/base_instructions/default.md；2026-10-03 复核 main（b741e48）大小为 20903 字节。"
        },
        {
          "title": "讲师提示",
          "text": "这一页与下一页是“版本线”示例，看懂即可，不要求学员背数字，也不要求去翻仓库。"
        }
      ],
      "source": "index.html#p25",
      "seconds": 90
    },
    {
      "id": "p26",
      "segment": "请求会变",
      "label": "两份指令差在哪",
      "title": "通用模型和专用模型，配的指令差三倍",
      "kicker": "第 2 章 · 2.2 · 请求会变",
      "lead": "仓库按模型放了不同的指令：给通用模型的约 21–24 KB，给为 Codex 专门训练的模型的只有约 6.6–7.6 KB。对比章节目录，能看到短的那份省掉了哪些内容；但不能凭长度判断哪个模型更好。数据来自 openai/codex 仓库（Apache-2.0）的提交历史，2026-10-02 核对、10-03 复核；大小为文件字节数。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">通用模型 · ≈21–24 KB</span><p style=\"margin-top:8px;line-height:1.7\">工作方式 · <b>性格</b> · <b>AGENTS.md 规范</b><br>自主与坚持 · 响应 · 计划及示例<br><b>执行任务</b> · <b>验证工作</b> · 汇报 · 工具指南</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">Codex 专用模型 · ≈6.6–7.6 KB</span><p style=\"margin-top:8px;line-height:1.7\">通用 · 编辑约束 · 计划工具<br>特殊请求 · 汇报</p><p class=\"p-sub\">没有性格、AGENTS.md、验证这几节</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">能看到<b>内容差异</b> · 不能据此判断模型能力或设计原因</div><p class=\"source-note\">章节名为中文意译。通用：gpt_5_1_prompt.md、gpt_5_2_prompt.md；专用：gpt_5_codex_prompt.md、gpt-5.2-codex_prompt.md，均在 codex-rs/core/。数据来自 openai/codex 仓库（Apache-2.0）的提交历史，2026-10-02 核对、10-03 复核；大小为文件字节数。</p>",
      "steps": [
        "通用模型的指令",
        "专用模型的指令",
        "能说什么、不能说什么"
      ],
      "script": [
        "仓库里还按模型放了不同的指令。左边是给通用模型的，大约 21 到 24 KB。章节目录我们在 2.1 见过一部分：工作方式、性格、AGENTS.md 规范、计划和示例、执行任务、验证工作、汇报，还有工具指南。",
        "右边是给专门为 Codex 训练的模型的，只有大约 6.6 到 7.6 KB，三分之一左右。目录很短：通用说明、编辑约束、计划工具、特殊请求、汇报。性格、AGENTS.md 规范、验证工作这几节，都没有出现。",
        "我们能说的，只是两份文字的内容不一样。不能凭长度说哪个模型更聪明，也不该猜为什么这样设计。对我们这一节有用的结论是：Codex 发给模型的东西会随版本和模型变化，所以交接任务时，靠的是项目里的事实和文件，而不是指望某一版指令替我们记住什么。回到我们的选择：压缩一下继续，够不够？"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-03 复核 main（b741e48）：gpt_5_1_prompt.md 24204 字节、gpt_5_2_prompt.md 21652、gpt_5_codex_prompt.md 6647、gpt-5.2-codex_prompt.md 7589，位于 codex-rs/core/（提案记录的路径有误，已在验证记录中更正）。专用指令全文没有 AGENTS.md 一词，审查请求一节提到测试缺口。"
        },
        {
          "title": "讲师提示",
          "text": "分镜旧稿“模型越擅长，指令写得越少”已在 10-03 审校中删去；口播保持只陈述可见差异。"
        }
      ],
      "source": "index.html#p26",
      "seconds": 90
    },
    {
      "id": "p27",
      "segment": "压缩与交接",
      "label": "压缩一下继续",
      "title": "压缩以后，模型看到的是摘要",
      "kicker": "第 2 章 · 2.2 · 压缩与交接",
      "lead": "在讲师的配置下，/compact 让模型自己写一份“交接摘要”。压缩后的历史只剩最近的用户消息、这份摘要和重新插入的初始上下文；工具返回的原文不在了。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">压缩前</span><p style=\"line-height:1.7\">我们的提问 · 模型的工具调用<br><b>工具返回的原文</b>（文件内容、命令输出）<br>模型的回答</p></div><div class=\"p-join\" data-reveal=\"1\"><span>/compact</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">压缩后</span><p style=\"line-height:1.7\">初始上下文（重新插入）<br>最近的用户消息<br><b>一份交接摘要</b></p></div></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:14px\"><h3>摘要里可能丢掉的</h3><p>“项目卡是 li，不在 Tab 顺序里”这类具体证据，只剩一句“已核对三条反馈”</p></div><p class=\"source-note\">Codex 0.160.0 源码与本机运行核对（2026-10-02），自定义 provider 走本地压缩；右下方框为示意，以录制时实际摘要为准</p>",
      "steps": [
        "压缩前",
        "压缩后",
        "丢掉了什么"
      ],
      "script": [
        "2.1 的会话里有不少东西：我们的提问，模型的工具调用，工具返回的原文，比如文件内容和命令输出，还有模型的回答。如果不想新建，可以在 Codex 里输入 /compact 压缩一下再继续。",
        "压缩做了什么？在讲师的配置下，Codex 让模型按一段固定提示，写一份给“下一个接手的模型”的交接摘要：进度、关键决定、约束、下一步。压缩后的历史只剩三样：重新插入的初始上下文，最近的用户消息，和这份摘要。",
        "问题在于，工具返回的原文不在了。比如我们核对时看到的“项目卡是 li，不在 Tab 顺序里”，摘要里可能只剩一句“已核对三条反馈”。压缩后模型看到的是摘要，不是原始证据。摘要写得好不好，我们得自己读一遍才知道。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "压缩提示位于 codex-rs/prompts/templates/compact/prompt.md（要求写进度与决定、约束、下一步、关键数据）；本地压缩保留最近用户消息（上限约 2 万 token）、摘要和重新插入的初始上下文；OpenAI 与 Azure provider 走远程压缩（model-provider/src/provider.rs）。"
        },
        {
          "title": "切到实操",
          "text": "录制时对 2.1 的会话执行 /compact，截取压缩前后的请求对比；右下方框换成实际摘要中缺失的具体证据。若摘要恰好保留了这些证据，如实说明，改讲“需要自己读一遍才知道”。"
        },
        {
          "title": "讲师提示",
          "text": "本页是试讲过满时第一个移到配套页的内容；移走时同步移走 p33 第 2 题，并在 p28 给出配套页入口。"
        }
      ],
      "source": "index.html#p27",
      "seconds": 90
    },
    {
      "id": "p28",
      "segment": "压缩与交接",
      "label": "这次该怎么选",
      "title": "四种做法，这一次选哪个",
      "kicker": "第 2 章 · 2.2 · 压缩与交接",
      "lead": "继续、恢复、压缩后继续、新建并交接，各有适用情境。先看 2.1 的实际会话再决定：与修改无关的探索很多，就新建，用反馈清单交接；上下文仍然集中，继续也合理。把选择和理由写进本轮记录。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.5fr) minmax(0,1.5fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>做法</span><span>适合</span><span>风险</span></div><div data-reveal=\"0\"><span>继续</span><span>刚做完、上下文集中</span><span>无关历史越积越多</span></div><div data-reveal=\"0\"><span>恢复</span><span>中断后接着同一件事</span><span>文件和服务不会跟着回来</span></div><div data-reveal=\"1\"><span>压缩后继续</span><span>历史长、但方向没变</span><span>原始证据变成摘要</span></div><div data-reveal=\"1\" class=\"is-key\"><span>新建 + 交接</span><span>换了一件事、前面多是探索</span><span>交接文件要写清</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">讲师这次：<b>新建</b>，用 CH02_VIBE_ITERATIONS.md 交接</div>",
      "steps": [
        "继续与恢复",
        "压缩与新建",
        "这一次"
      ],
      "script": [
        "把四种做法放在一起。继续，适合刚做完、上下文还集中的时候，风险是无关历史越积越多。恢复，适合中断以后接着做同一件事，但记住，文件和服务不会跟着回来。",
        "压缩后继续，适合历史很长、方向没变的时候，代价是原始证据变成摘要。新建加交接，适合换了一件事，前面的历史大多是探索的时候，前提是交接文件写清楚。",
        "讲师这次的 2.1 会话，主要是只读核对和看请求，和“往项目区加内容”关系不大，所以选新建，用 CH02_VIBE_ITERATIONS.md 交接。反馈清单本身就是一份对账单：新会话从当前证据出发，不靠旧会话里的记忆。你的会话如果很短、很集中，继续也合理。请暂停视频，在记录里写下你的选择，理由要指向具体状态，比如“2.1 会话里大多是请求查看，与本轮修改无关”。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "不预设唯一正确答案；验收看理由是否引用具体状态（会话内容、历史长度、文件是否已更新），不看选了哪一种。"
        },
        {
          "title": "跟做产出",
          "text": "本轮记录的“会话选择与理由”一项。"
        }
      ],
      "source": "index.html#p28",
      "seconds": 90
    },
    {
      "id": "p29",
      "segment": "本轮迭代",
      "layout": "prompt-scene",
      "prompt": "Goal：在项目区呈现我的项目经历，解决反馈第 3 条。\nContext：见 docs/evidence/CH02_VIBE_ITERATIONS.md；\n项目卡不跳转（1.4 已定），本轮不改。\n项目内容（原文照用）：<每行一条：项目名称：一句描述>\nConstraints：只用上面的文字，不补写；不加链接、依赖；\n只改项目区；先说计划，等我确认再改。\nDone when：三种视口可读；Tab 顺序不变；\nbuild 成功；diff 只含项目区。",
      "label": "写本轮 Prompt",
      "title": "让 Codex 只改这一处",
      "kicker": "第 2 章 · 2.2 · 本轮迭代",
      "lead": "在新会话里提交本轮 Prompt。它引用反馈清单这份当前证据，项目内容由人提供并要求原文照用，范围只到项目区，完成标准写成可以检查的四件事。讲师演示的项目区借用两位讲师的真实经历；首屏沿用第 1 章的示例，本轮不改。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>引用当前证据</b><small>反馈清单第 3 条</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>内容由人提供</b><small>讲师演示借用两位讲师的经历</small></span></li><li data-reveal=\"2\"><span><b>只写愿意公开的</b><small>2.4 之后所有人都看得到</small></span></li><li class=\"is-ok\" data-reveal=\"3\"><span><b>可检查的完成标准</b><small>视口 · 键盘 · build · diff 范围</small></span></li></ol></div>",
      "steps": [
        "引用证据",
        "内容由人提供",
        "只写愿意公开的",
        "完成标准"
      ],
      "script": [
        "新建会话，提交这段 Prompt。先看 Goal 和 Context：目标写的是解决反馈第 3 条，Context 点名反馈清单的位置。新会话没有 2.1 的历史，它要从这份文件里拿到当前证据。我们还顺手写明：项目卡点了不跳转，是第 1 章做首页时定下的，这一轮不改。",
        "中间是项目内容，尖括号那一行换成你自己的项目经历，每行一条，要求原文照用。讲师这里填的是我们两位讲师自己的三条经历，合在第 1 章那个“示例同学”的页面上。首屏还是示例同学，这一轮只改项目区，所以先不动它。项目经历是关于你自己的事实，AI 不知道，也不该替你编。所以 Constraints 里写死：只用上面的文字，不补写、不润色事实。",
        "写自己的内容时多想一步：到 2.4，这个仓库和页面会公开，所有人都能看到。只写你愿意公开的内容，不写别人的姓名和联系方式。",
        "最后是 Done when，四件可以检查的事：三种视口内容完整可读；Tab 焦点顺序和改前一样；npm run build 成功；diff 只含项目区的改动。我们还要求它先说计划、等确认再改。请暂停视频，换上你自己的内容，提交 Prompt。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "讲师在新会话中提交本 Prompt，尖括号一行替换为两位讲师经历聚合的三条（courseware/ch02/materials/README.md，取自已公开的讲师简介，2026-10-05 讲师确认），提前写好，不在镜头前现写：\n\n- 红绿灯感知量产：城市 NOA 红绿灯感知模块的量产方案设计、部署与加速\n- 端侧多模态推理引擎：在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产\n- RoboHarness：把自然语言需求转成可执行、可验证、可持续迭代的研发流程"
        },
        {
          "title": "讲师提示",
          "text": "学员项目区已完整时，按分镜“内容已完整时的跟做分支”：Goal 改为呈现一条新批准的补充，不追认原页面有缺陷；没有补充需求时在独立练习副本使用课程合成示例。"
        }
      ],
      "source": "index.html#p29",
      "seconds": 120
    },
    {
      "id": "p30",
      "segment": "本轮迭代",
      "label": "确认计划再执行",
      "title": "先看计划，再让它动手",
      "kicker": "第 2 章 · 2.2 · 本轮迭代",
      "lead": "Codex 先回复计划。确认三件事再放行：计划只涉及项目区；要放进页面的内容和我们给的原文一致；没有新依赖、没有链接。小改动的计划可能只有一两句，这正常。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>看 Codex 的计划</h3><p>它说要改哪些文件、怎么改</p><span class=\"p-env\">新会话</span><span class=\"p-env\">workspace-write</span></div><ol class=\"p-watch\"><li data-reveal=\"1\">只涉及项目区<small>预期只改 src/App.tsx 的项目数据</small></li><li data-reveal=\"2\">内容与原文一致<small>一个字一个字对</small></li><li data-reveal=\"3\">没有新依赖、没有链接<small>有就先停，问清楚</small></li></ol></div>",
      "steps": [
        "看计划",
        "范围",
        "内容",
        "依赖与链接"
      ],
      "script": [
        "提交以后，Codex 会先回复计划：要改哪些文件、怎么改。这一轮改动很小，计划可能只有一两句话，这很正常，不必为了走流程写一大段。",
        "第一看范围。讲师的首页里，项目数据就在 src/App.tsx 顶部的一个数组里，预期只改这一处。计划里要是出现了样式重写、新组件，先问它为什么。",
        "第二看内容。它准备放进页面的文字，和我们给的原文一致吗？有没有被改写成更漂亮的说法？",
        "第三看有没有新依赖、有没有链接。我们明确说了不加。有的话，先停下来问清楚，不放行。三项都没问题，再让它动手。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "Codex 的计划以录制实际为准。若计划越界，就地让它收窄并保留原始回复，2.3 可作为“范围扩大”的真实素材；不准备越界的计划。"
        },
        {
          "title": "备课参考",
          "text": "按排练快照预估，内容迭代只改 src/App.tsx：10 行新增、2 行删除（materials/homepage-v1.diff）。真实 diff 以录制为准。"
        }
      ],
      "source": "index.html#p30",
      "seconds": 120
    },
    {
      "id": "p31",
      "segment": "本轮迭代",
      "label": "改好了吗",
      "title": "改好了吗？有没有弄坏别的？",
      "kicker": "第 2 章 · 2.2 · 本轮迭代",
      "lead": "改完由人检查，不只看新内容：三种视口下内容完整可读；Tab 焦点顺序与改前一致；npm run build 成功。内容变多后第 1 条“手机上挤”若出现，记为剩余问题，不在这一轮顺手修。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) minmax(0,1.3fr);row-gap:12px;--rf:21px\"><div class=\"is-head\" data-reveal=\"0\"><span>检查</span><span>结果</span><span>能说明什么</span></div><div data-reveal=\"0\"><span class=\"p-cell\">360 · 768 · 1440</span><span class=\"p-cell\">三条经历都完整显示</span><span class=\"p-why\">第 3 条已解决；布局没被挤坏</span></div><div data-reveal=\"1\"><span class=\"p-cell\">Tab 键</span><span class=\"p-cell\">仍只停在“查看项目”</span><span class=\"p-why\">键盘行为与改前一致</span></div><div data-reveal=\"2\"><span class=\"p-cell p-mono\">npm run build</span><span class=\"p-cell\">退出码 0</span><span class=\"p-why\">能构建，不等于页面对</span></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">新出现的问题：<b>记下来，不顺手修</b></div>",
      "steps": [
        "三种视口",
        "键盘",
        "构建",
        "新问题"
      ],
      "script": [
        "Codex 说改完了。我们自己检查，不只看新内容有没有出来。先切三种视口：360、768、1440，三条经历都完整显示，没有被截断或挤坏。这说明第 3 条反馈解决了。",
        "再按 Tab。改之前，焦点只会停在“查看项目”按钮上，现在还是一样。键盘行为没有变，这正是我们要的。",
        "最后在终端运行 npm run build，退出码是 0。注意它只说明能构建，不说明页面是对的，所以前两项不能省。",
        "内容变多了，第 1 条“手机上挤”会不会出现？讲师的页面在 360 下没有横向滚动，仍然没复现。如果你的页面出现了，记成剩余问题，留到下一轮。这一轮只解决一个结果。请暂停视频，按这三项检查你自己的页面。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "排练版 homepage-v1（materials/homepage-v1.diff）2026-10-03 核对：360×800 下页面高 827px、无横向滚动；Tab 只停在“查看项目”；build 成功。"
        },
        {
          "title": "讲师提示",
          "text": "检查由人完成；让 AI 打开浏览器自验证留到 Harness 章节（决定 10）。结果列以录制实际为准。"
        }
      ],
      "source": "index.html#p31",
      "seconds": 120
    },
    {
      "id": "p32",
      "segment": "本轮迭代",
      "label": "记录本轮",
      "title": "写下本轮，下一次才接得上",
      "kicker": "第 2 章 · 2.2 · 本轮迭代",
      "lead": "在 CH02_VIBE_ITERATIONS.md 末尾追加本轮记录。它是下一轮的交接，也是 2.3 审查 diff 时要对照的目标。回退点此时是本轮开始前的最后一次提交，2.3 提交后更新。",
      "html": "<div class=\"p-code\" data-reveal=\"0\"><div class=\"p-code-head\"><span>docs/evidence/CH02_VIBE_ITERATIONS.md</span><span>追加</span></div><pre style=\"color:inherit\">## 第 1 轮\n- 问题证据：反馈第 3 条；项目区只有一句\n- 本轮目标：呈现我提供的三条项目经历\n<span class=\"hl\">- 会话选择与理由：新建；2.1 会话多为请求查看</span>\n- 改动文件：src/App.tsx\n- 验证结果：视口完整 / Tab 不变 / build 成功\n<span class=\"hl\">- 剩余问题：第 1 条在 360 下仍未复现</span>\n- 回退点：本轮开始前的提交</pre></div><div class=\"p-grid\" style=\"--n:2;gap:12px;margin-top:8px\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><p><b>下一轮</b> · 新会话的交接文件</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><p><b>2.3</b> · 审查 diff 的对照目标</p></div></div>",
      "steps": [
        "逐项填写",
        "它用来做什么"
      ],
      "script": [
        "最后把这一轮记下来。在 CH02_VIBE_ITERATIONS.md 末尾追加一段“第 1 轮”。问题证据、本轮目标、改动文件、验证结果，刚才都做过，照实填。其中两项是这一章新加的：会话选择与理由，还有剩余问题，画面上标黄了。回退点写本轮开始前的最后一次提交，运行 git log --oneline -1 就能看到它的短哈希；这一轮还没提交，所以回退点还是它。",
        "这份记录有两个用处。下一次新建会话时，它就是交接文件；下一节 2.3 审查 diff 时，它就是对照的目标。请暂停视频，把你的第 1 轮写完。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "本轮记录七项：问题证据、本轮目标、会话选择与理由、改动文件、验证结果、剩余问题、回退点。空白模板：\n\n## 第 1 轮\n\n- 问题证据：反馈第 3 条；1440×900 下项目区只有一句“记录课程练习”\n- 本轮目标：在项目区呈现我提供的三条项目经历\n- 会话选择与理由：\n- 改动文件：\n- 验证结果（三种视口 / 键盘 / build）：\n- 剩余问题：\n- 回退点：本轮开始前的最后一次提交（git log --oneline -1；2.3 提交后更新）"
        },
        {
          "title": "讲师提示",
          "text": "画面上的记录是讲师示例，各项以录制实际为准。"
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
      "kicker": "第 2 章 · 2.2 · 小结",
      "lead": "先独立作答，再看解析。答案后面标出回到哪一页。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>关掉终端，第二天恢复 Codex 会话，页面会自动回来吗？</h3><div data-reveal=\"1\"><p>不会。会话由 Harness 保存，开发服务器是另一个程序，要重新 npm run dev<span class=\"p-back-to\" data-role=\"ctx\">回到 三种状态</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>压缩以后，模型不再看到哪些原始信息？</h3><div data-reveal=\"2\"><p>工具返回的原文和中间过程，只剩最近的用户消息和一份摘要<span class=\"p-back-to\" data-role=\"gate\">回到 压缩</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>对话越来越长，每次花的钱一定越来越多吗？</h3><div data-reveal=\"3\"><p>不一定。input 在变长，但重复前缀可被缓存；费用要看服务的计费，不能只凭对话长度断言<span class=\"p-back-to\" data-role=\"ok\">回到 代价</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题",
        "第 3 题"
      ],
      "script": [
        "暂停一下，回答三个问题。第一，关掉终端，第二天恢复 Codex 会话，页面会自动回来吗？第二，压缩以后，模型不再看到哪些原始信息？第三，对话越来越长，每次花的钱一定越来越多吗？",
        "第一题，不会。会话由 Harness 保存，开发服务器是另一个程序，关掉终端就停了，要重新运行 npm run dev。恢复对话，不等于恢复文件或服务。",
        "第二题，工具返回的原文和中间过程都不在了，比如读到的文件内容、命令输出。剩下的是最近的用户消息和一份交接摘要。",
        "第三题，不一定。每次请求的 input 确实在变长，但重复的前缀可以被缓存，按更低的价格算。具体花多少，要看你用的服务怎么计费，不能只凭对话长度下结论。"
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 120
    },
    {
      "id": "p34",
      "segment": "小结",
      "label": "本节小结",
      "title": "一轮，一个结果，一份证据",
      "kicker": "第 2 章 · 2.2 · 小结",
      "lead": "本节留下一轮内容迭代、三项检查结果和一份本轮记录。下一节：Codex 说完成了，手上是一份 diff，收不收？课后可以再做 0–2 轮，不计分。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h4>三种状态</h4><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">模型不记</li><li class=\"is-fix\">会话由 Harness 重发</li><li class=\"is-stop\">文件与进程各自存在</li></ul></div><div data-reveal=\"1\"><h4 style=\"text-align:center\">一个习惯</h4><div class=\"p-star\" style=\"width:260px;font-size:24px\">一轮一个结果<br>引用当前证据</div></div><div class=\"p-next\" data-reveal=\"2\"><h4>下一节</h4><div class=\"p-box\" data-role=\"us\"><h3>2.3 审改动</h3><p>Codex 说完成了，收不收？</p></div></div></div>",
      "steps": [
        "三种状态",
        "一个习惯",
        "下一节"
      ],
      "script": [
        "这一节先回答了一个看似简单的问题：在哪个会话里改。模型什么都不记；会话由 Harness 保存，每次请求重发；文件和运行中的程序各自存在。所以选会话，看的是历史里有什么，而交接靠的是文件里的证据。",
        "然后我们完成了一轮完整的迭代：Prompt 引用当前证据，内容由人提供，只改项目区，再用三种视口、键盘和构建证明没弄坏别的。一轮只解决一个结果，新发现的问题记下来留给下一轮。课后想再做一两轮可以，不计分。",
        "现在 Codex 说完成了，我们手上是一份还没提交的改动。下一节的问题是：这份 diff，收不收？"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "三种状态",
      "seconds": 270
    },
    {
      "label": "代价与不确定",
      "seconds": 180
    },
    {
      "label": "请求会变",
      "seconds": 180
    },
    {
      "label": "压缩与交接",
      "seconds": 180
    },
    {
      "label": "本轮迭代",
      "seconds": 420
    },
    {
      "label": "小结",
      "seconds": 210
    }
  ]
};

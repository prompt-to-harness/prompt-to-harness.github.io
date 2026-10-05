# 2.2 只改一处，并证明改好了

> 由 tools/build-lesson.py 生成。

## P20 开始改之前

[对应课件](index.html#p20)

### 口播

**第 1 步 · 回到地图**（[演示](index.html?mode=slides&step=0#p20)）

2.1 我们没改一行代码，留下了一份反馈清单，选定了第 3 条：看不出你做过什么。这一节就来改它，而且只改它。

**第 2 步 · 三个选项**（[演示](index.html?mode=slides&step=1#p20)）

动手之前，先面对一个很日常的选择。2.1 那个 Codex 会话还开着，我们可以继续在里面说；也可以关掉以后再恢复；或者干脆新建一个。

**第 3 步 · 本节问题**（[演示](index.html?mode=slides&step=2#p20)）

怎么选？凭感觉不行。得先弄清楚，一个会话里到底保存了什么，多次请求之间又发生了什么。2.1 我们拆开看了一次请求，这一节看多次。

### 讲师提示

开篇地图沿用 2.1 的五节，2.1 标为已完成。

## P21 三种状态

[对应课件](index.html#p21)

### 口播

**第 1 步 · 三栏**（[演示](index.html?mode=slides&step=0#p21)）

先把三样东西分开。第一，模型：它什么都不记，每次只看这一次请求里的内容。第二，会话：由 Harness 保存，也就是 Codex 把我们说过的话、它做过的事存下来，下一次请求时再发出去。第三，文件和运行中的程序：它们在我们的电脑上，和会话没有关系。

**第 2 步 · 开场那一幕**（[演示](index.html?mode=slides&step=1#p21)）

回想 2.1 开场：隔了一天，本地地址打不开，重新运行 npm run dev 才好。现在可以给它归类了：开发服务器是一个运行中的程序，属于第三栏。关掉终端它就停了，代码文件还在硬盘上。

**第 3 步 · 恢复会话的实验**（[演示](index.html?mode=slides&step=2#p21)）

讲师做过一个实验：在另一个目录里，用 codex exec resume 恢复 2.1 那种只读任务的会话，再问它上一轮读的是什么文件。它答得出来：index.html。可新目录里根本没有这个文件。会话被恢复了，但文件和服务不会跟着回来。所以恢复对话，不等于恢复文件或服务。

### 核对记录

Codex 0.160.0，MiniMax 自定义 provider：在另一目录 codex exec resume <会话 id>，模型仍答出 index.html；Harness 追加了新的权限说明和新的环境信息，cwd 已是新目录。--last 默认只在当前目录的会话中挑选，--all 取消过滤。见提案“第二轮实测”。

### 讲师提示

这一页只建立三栏。会话里“存了什么、怎么发”下一页用请求对比展示。

## P22 会话保存了什么

[对应课件](index.html#p22)

### 口播

**第 1 步 · 第 1 次请求**（[演示](index.html?mode=slides&step=0#p22)）

打开 claude-tap 的查看器，选同一次任务里相邻的两次请求做对比。左边是第一次请求的 input，一共三项：权限说明和 Skills 列表，环境信息，还有我们那句话。

**第 2 步 · 第 2 次多了什么**（[演示](index.html?mode=slides&step=1#p22)）

第二次请求，前三项原样都在，末尾多了两项：模型上一次提出的工具调用，cat index.html；还有工具返回的文件内容。模型并没有“记得”刚才做了什么，是 Harness 把整段历史重新发了一遍。

**第 3 步 · 适用范围**（[演示](index.html?mode=slides&step=2#p22)）

有一个范围要说清：这是我们在这一次运行里看到的。讲师用的是 MiniMax 自定义 provider，请求里 store 是 false，也没有引用上一次响应的编号，所以每次都带上完整输入。换别的服务或登录方式，细节可能不同。

### 核对记录

MiniMax 配置下请求体 store 为 false、没有 previous_response_id；OpenAI 官方 provider 与 ChatGPT 登录未核实（决定 28 不作为本章核实项）。前 3 项的角色划分见 2.1 p13 的核对记录。

### 讲师提示

画面用 claude-tap 的相邻请求 diff 视图截图替换示意图；截图前检查路径和个人 Skills 名称。

## P23 每次都重发，贵不贵

[对应课件](index.html#p23)

### 口播

**第 1 步 · 4 次请求**（[演示](index.html?mode=slides&step=0#p23)）

既然每次都重发，那贵不贵？看那次只读提问的记录：我们问了一句，Codex 一共发了 4 次请求。input 从第一次的 3 项，涨到第四次的 10 项。缓存命中从大约 1 千 token，涨到大约 1.18 万。

**第 2 步 · token 与缓存**（[演示](index.html?mode=slides&step=1#p23)）

代价有两种。第一种是 token。好在重复的开头部分可以被缓存：服务端认出“这一段上次发过”，就按更低的价格算。所以历史变长，账单不一定同比例变高。具体怎么计费，看你用的服务，这里不展开。

**第 3 步 · 注意力**（[演示](index.html?mode=slides&step=2#p23)）

第二种代价是注意力，缓存帮不上忙。模型每次都得把整段历史读一遍，历史越长，早先说过的需求越容易被淹没在大量工具输出里。这是我们挑会话时真正要考虑的。

### 数字来源

数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。 中间两次请求的数字未在提案中记录，画面写“未记录”，不推断它们的走势；录制时可从 claude-tap 记录补齐。

### 讲师提示

前缀缓存的计费细节放配套页，主课只讲“重复部分更便宜，注意力不变”。不要据此断言每次费用一定增加。

## P24 再问一次，一样吗

[对应课件](index.html#p24)

### 口播

**第 1 步 · 第一次**（[演示](index.html?mode=slides&step=0#p24)）

还有一件事。2.1 里我们看到，模型调用了一个不存在的 read_file 工具，报错以后才改用 cat。那一次，一句提问产生了 4 次请求。

**第 2 步 · 第二次**（[演示](index.html?mode=slides&step=1#p24)）

同一句话，讲师又跑了一次。这次只用了 2 次请求，直接读到了文件，没有报错。

**第 3 步 · 结论**（[演示](index.html?mode=slides&step=2#p24)）

模型的输出有不确定性，过程也会不一样。所以 2.1 我们说数字只说明结构；改代码也一样，“上次它这么做没问题”不能当证据，每一轮都要看这一轮的 diff 和检查结果。

## P25 Codex 自己也在变

[对应课件](index.html#p25)

### 口播

**第 1 步 · 早期**（[演示](index.html?mode=slides&step=0#p25)）

不只是模型的输出会变，Codex 自己也在变。它是开源的，系统指令的每一次修改都留在仓库历史里。我们看通用指令文件的大小：2025 年 4 月首版大约 5.7 KB，到 8 月 5 日补到大约 9.8 KB。

**第 2 步 · 一次重写**（[演示](index.html?mode=slides&step=1#p25)）

两天后，8 月 7 日，有一次提交把它整个重写，一下变成大约 23.6 KB，新增了工作方式、性格、计划示例、汇报格式这些章节。此后一直在 21 到 24 KB 之间来回，到 2026 年 1 月大约 20.9 KB。所以它不是越写越短，也不是越写越长。

**第 3 步 · 权限说明拆出**（[演示](index.html?mode=slides&step=2#p25)）

2026 年 1 月还有一次结构变化：权限说明从固定段落里拆出去，按沙箱模式和审批策略分别放模板，运行时再拼。2.1 我们对比只读和可写时看到的那段文字，就是这么来的。同样是权限说明，版本变化后，组装进请求的方式也变了。

### 原文与链接

- 画面上 · 原文 · [2025-04 首版](https://github.com/openai/codex/blob/31d0d7a305305ad557035a2edcab60b6be5018d8/codex-rs/core/prompt.md)
- 画面上 · 原文 · [2025-08-05](https://github.com/openai/codex/blob/d31e149cb1b4439f47393115d7a85b3c8ab8c90d/codex-rs/core/prompt.md)
- 画面上 · 原文 · [2025-08-07 重写后](https://github.com/openai/codex/blob/81b148bda271615b37f7e04b3135e9d552df8111/codex-rs/core/prompt.md)
- 画面上 · 原文 · [2026-10-03 当前](https://github.com/openai/codex/blob/b741e480e203f037ca726bc2a76d99a8e8668e66/codex-rs/protocol/src/prompts/base_instructions/default.md)
- 画面上 · diff · [重写](https://github.com/openai/codex/commit/81b148bda271615b37f7e04b3135e9d552df8111)
- 画面上 · diff · [权限拆出](https://github.com/openai/codex/commit/87f7226cca12df04596938f58625de84e976309a)

### 核对记录

首版到 2025-08-05 的大小、重写提交 81b148bda2（“update system prompt”）、按模型分文件提交 916fdc2a37、权限模板化提交 87f7226cca，见提案“Codex 开源仓库中的系统指令”。通用指令当前位于 codex-rs/protocol/src/prompts/base_instructions/default.md；2026-10-03 复核 main（b741e48）大小为 20903 字节。

### 原文与 diff

每个版本的原文和两次关键提交的 diff，在画面底部有直达链接（固定到完整提交哈希）。重写那次提交 81b148bda2 只改了 prompt.md 一个文件（+270 −80），GitHub 的提交页就是“重写前 vs 重写后”的文件 diff。

本仓库把 openai/codex 作为子模块放在 third_party/codex（固定在 b741e48），可以离线对比：git submodule update --init --filter=blob:none third_party/codex 取下子模块，再运行 git -C third_party/codex diff 31d0d7a305:codex-rs/core/prompt.md b741e48:codex-rs/protocol/src/prompts/base_instructions/default.md 看首版到当前的全部变化。文件在 2026-01-19 从 codex-rs/core/prompt.md 搬到现在的位置，所以早期版本要用旧路径。

### 切到实操

可在录制时打开重写那次提交的 GitHub 页面，滚动展示新增的章节标题；不逐行读。

### 讲师提示

这一页与下一页是“版本线”示例，看懂即可，不要求学员背数字；想看原文的学员从画面底部的链接打开。

## P26 换个模型名

[对应课件](index.html#p26)

### 口播

**第 1 步 · 不在目录的模型**（[演示](index.html?mode=slides&step=0#p26)）

Codex 还有一份模型目录，叫 models.json，它按模型名在里面查该发哪份指令。讲师用 claude-tap 抓了两次请求，配置完全一样，只改了模型名。左边写的是 MiniMax-M3，目录里没有，Codex 就发通用指令，开头一句是“You are a coding agent running in the Codex CLI”，大约 1.7 万字符。章节有工作方式、性格、AGENTS.md 规范、验证工作、工具指南这些，2.1 我们见过。

**第 2 步 · 目录里的 gpt-5.5**（[演示](index.html?mode=slides&step=1#p26)）

右边只把模型名改成 gpt-5.5，目录里有它，Codex 就换成为它单独写的一份，开头变成“You are Codex, a coding agent based on GPT-5”，大约 2.1 万字符。章节也不一样：多了工程判断、前端指南、与用户协作；AGENTS.md 规范、验证工作和工具指南这几节，没有单独出现。

**第 3 步 · 模型与指令配置**（[演示](index.html?mode=slides&step=2#p26)）

两次请求只差一个模型名，指令就换了一份。结合上一页的版本历史，我们看到，版本和模型配置都会影响 Codex 发出的请求。接下来回到本轮修改：旧会话里已经积累了反馈和检查结果，压缩一下继续，够不够？

### 原文与链接

- 画面上 · 0.160.0 源码 · [通用指令 prompt.md](https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/models-manager/prompt.md)
- 画面上 · 0.160.0 源码 · [模型目录 models.json](https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/models-manager/models.json)
- 延伸 · 2026-01 前按文件分模型（已不使用） · [GPT-5.2](https://github.com/openai/codex/blob/b741e480e203f037ca726bc2a76d99a8e8668e66/codex-rs/core/gpt_5_2_prompt.md)
- 延伸 · 2026-01 前按文件分模型（已不使用） · [GPT-5.2-Codex](https://github.com/openai/codex/blob/b741e480e203f037ca726bc2a76d99a8e8668e66/codex-rs/core/gpt-5.2-codex_prompt.md)

### 核对记录

2026-10-05 本机 codex-cli 0.160.0，隔离 HOME，自定义 provider 写法与 MiniMax 相同、密钥为假值，claude-tap 0.1.145 以 --tap-export-prompt 本地应答，不访问上游；codex exec -s read-only，各 1 次请求。MiniMax-M3：instructions 16979 字符，与 2.1 的记录一致，等于 rust-v0.160.0 的 models-manager/prompt.md 删去 Planning、Examples、update_plan 三段（逐字相同）。gpt-5.5：21299 字符，等于 models.json 中 gpt-5.5 的 instructions_template 删去一行更新清单状态的说明。删段落的规则见 codex-rs/prompts/src/update_plan_instructions.rs。按模型名查目录的逻辑见 models-manager/src/manager.rs 的 construct_model_info_from_candidates（最长前缀匹配，与 provider 无关）。

### 原文与 diff

源码链接在画面底部，固定在 rust-v0.160.0（a956835d02）。复现：建临时 HOME，在 .codex/config.toml 写 model 与自定义 provider，运行 HOME=<临时目录> uvx claude-tap --tap-client codex --tap-target <provider 地址> --tap-export-prompt <输出.md> -- exec --skip-git-repo-check -s read-only "Reply with OK only." < /dev/null，只改 model 再跑一次，对比两份导出的 instructions。把模型名写成目录里的名字只用于查看请求：真实发给 MiniMax 时，它不认识这个模型名。2026-01 之前 Codex 按文件给模型配指令（codex-rs/core/gpt_*_prompt.md），这些文件仍留在仓库里但已无代码引用，链接放在延伸阅读。

### 切到实操

录制时现场跑这两次，或打开 claude-tap 导出的两份 Markdown 并排展示 instructions 开头和章节；画面截图前检查路径与用户名。

### 讲师提示

只讲两份指令可见的差异。文件长度和目录没有提供模型能力评测或设计动机的证据；如另讲这些问题，应补相应证据。

## P27 压缩一下继续

[对应课件](index.html#p27)

### 口播

**第 1 步 · 压缩前**（[演示](index.html?mode=slides&step=0#p27)）

如果不想新建会话，可以在 Codex 里输入 /compact 压缩一下再继续。我们的主线会话通常不够长，所以单独做一个小实验：先让 Codex 读两个文件，再跑一次 grep、把输出原样贴出来，最后写下一条我们自己的决定。这时历史里有我们的提问、模型的工具调用、工具返回的原文，还有模型的回答。

**第 2 步 · 压缩后**（[演示](index.html?mode=slides&step=1#p27)）

然后输入 /compact。压缩做了什么？在讲师的配置下，Codex 让模型按一段固定提示，写一份给“下一个接手的模型”的交接摘要：进度、关键决定、约束、下一步。压缩后的历史只剩三样：我们发过的用户消息，这份摘要，和重新插入的初始上下文。这一步每次都一样，是 Codex 源码写定的：工具调用、工具返回和模型的回答，都不会留下。

**第 3 步 · 丢掉了什么**（[演示](index.html?mode=slides&step=2#p27)）

那原始证据还剩多少？要看摘要怎么写。讲师用同样的步骤跑了 5 次：grep 输出了 10 行，其中 4 次摘要只留下行号或“共 10 处匹配”，我们追问第 1 行是什么，模型说手里没有原文，写不出来；只有 1 次，摘要把 10 行整段抄了下来。我们自己写下的决定是用户消息，5 次原文都在。所以压缩后模型看到的是摘要，不是原始证据；需要原始证据，就让它重新读。摘要每次写得不一样，好不好，我们得自己读一遍才知道。想自己重复这个实验，步骤放在本页的阅读模式里，选做。

### 原文与链接

- 画面上 · 0.160.0 源码 · [压缩逻辑 compact.rs](https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/core/src/compact.rs)
- 画面上 · 0.160.0 源码 · [压缩提示 prompt.md](https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/prompts/templates/compact/prompt.md)

### 核对记录

压缩提示位于 codex-rs/prompts/templates/compact/prompt.md（要求写进度与决定、约束、下一步、关键数据）；本地压缩保留最近用户消息（上限约 2 万 token）、摘要和重新插入的初始上下文；OpenAI 与 Azure provider 走远程压缩（model-provider/src/provider.rs）。

### 切到实操

不在 2.1 的主线会话上执行，所有材料在 courseware/ch02/materials/compact/（说明见 README.md）。现场演示用自动运行脚本：在仓库根目录运行 LAB_SESSION=compact-demo LAB_HOLD=60 courseware/ch02/materials/compact/run-tmux.sh，另开终端运行 tmux attach -r -t compact-demo 只读旁观，浏览器打开本机 19527 端口的 claude-tap 面板看请求；整轮 3–5 分钟，只在运行期间有面板。想手动输入时，用 setup.sh 建目录、clean-codex.sh --tap 启动，依次输入 steps.txt 的五行。重点截取三次请求：压缩前、压缩请求、压缩后。摘要每次不同；若本次保留了 grep 原文或模型编出了原文，如实改写右下方框和口播。

### 备用画面

不想现场跑，或上游卡住（界面停在 Working 超过 5 分钟）时，浏览器打开 courseware/ch02/materials/compact/compare.html：用第 1 次运行的真实记录并排列出压缩前 25 条和压缩后 7 条，标出保留、移走、新增、重新注入，不调用模型。参考记录更新后运行同目录的 compare.py 重新生成。

### 实验记录

2026-10-05 压缩 5 次、不压缩对照 2 次（另有 2 次因上游超时或脚本出错不计入）。5 次压缩后都是 7 条 input：3 条用户消息、摘要、权限说明与 Skills、环境信息、新问题，没有工具调用和返回，与 compact.rs 一致（手动压缩用 DoNotInject，下一轮再注入初始上下文；用户消息从新往旧最多保留约 2 万 token）。摘要：4 次只留行号或计数，1 次抄下 grep 原文；5 次追问都没有编造。对照组 2 次都答出了 grep 原文。汇总表与参考记录见 materials/compact/。

### 讲师提示

本页是试讲过满时第一个移到配套页的内容；移走时同步移走 p33 第 2 题，并在 p28 给出配套页入口。

## P28 这次该怎么选

[对应课件](index.html#p28)

### 口播

**第 1 步 · 继续与恢复**（[演示](index.html?mode=slides&step=0#p28)）

把四种做法放在一起。继续，适合刚做完、上下文还集中的时候，风险是无关历史越积越多。恢复，适合中断以后接着做同一件事，但记住，文件和服务不会跟着回来。

**第 2 步 · 压缩与新建**（[演示](index.html?mode=slides&step=1#p28)）

压缩后继续，适合历史很长、方向没变的时候，代价是原始证据变成摘要。新建加交接，适合换了一件事，前面的历史大多是探索的时候，前提是交接文件写清楚。

**第 3 步 · 这一次**（[演示](index.html?mode=slides&step=2#p28)）

讲师这次的 2.1 会话，主要是只读核对和看请求，和“往项目区加内容”关系不大，所以选新建，用 CH02_VIBE_ITERATIONS.md 交接。反馈清单本身就是一份对账单：新会话从当前证据出发，不靠旧会话里的记忆。你的会话如果很短、很集中，继续也合理。请暂停视频，在记录里写下你的选择，理由要指向具体状态，比如“2.1 会话里大多是请求查看，与本轮修改无关”。

### 讲师提示

不预设唯一正确答案；验收看理由是否引用具体状态（会话内容、历史长度、文件是否已更新），不看选了哪一种。

### 跟做产出

本轮记录的“会话选择与理由”一项。

## P29 写本轮 Prompt

[对应课件](index.html#p29)

### 口播

**第 1 步 · 引用证据**（[演示](index.html?mode=slides&step=0#p29)）

新建会话，提交这段 Prompt。先看 Goal 和 Context：目标写的是解决反馈第 3 条，Context 点名反馈清单的位置。新会话没有 2.1 的历史，它要从这份文件里拿到当前证据。我们还顺手写明：项目卡点了不跳转，是第 1 章做首页时定下的，这一轮不改。

**第 2 步 · 内容由人提供**（[演示](index.html?mode=slides&step=1#p29)）

中间是项目内容，尖括号那一行换成你自己的项目经历，每行一条，要求原文照用。讲师这里填的是我们两位讲师自己的三条经历，合在第 1 章那个“示例同学”的页面上。首屏还是示例同学，这一轮只改项目区，所以先不动它。项目经历是关于你自己的事实，AI 不知道，也不该替你编。所以 Constraints 里写死：只用上面的文字，不补写、不润色事实。

**第 3 步 · 只写愿意公开的**（[演示](index.html?mode=slides&step=2#p29)）

写自己的内容时多想一步：到 2.4，这个仓库和页面会公开，所有人都能看到。只写你愿意公开的内容，不写别人的姓名和联系方式。

**第 4 步 · 完成标准**（[演示](index.html?mode=slides&step=3#p29)）

最后是 Done when，四件可以检查的事：三种视口内容完整可读；Tab 焦点顺序和改前一样；npm run build 成功；diff 只含项目区的改动。我们还要求它先说计划、等确认再改。请暂停视频，换上你自己的内容，提交 Prompt。

### 请求

```text
Goal：在项目区呈现我的项目经历，解决反馈第 3 条。
Context：见 docs/evidence/CH02_VIBE_ITERATIONS.md；
项目卡不跳转是既有决定，本轮不改。
项目内容（原文照用）：<每行一条：项目名称：一句描述>
Constraints：只用上面的文字，不补写；不加链接、依赖；
只改项目区；先说计划，等我确认再改。
Done when：360/768/1440 宽可读；Tab 顺序不变；
build 成功；diff 只含项目区。
```

### 切到实操

讲师在新会话中提交本 Prompt，尖括号一行替换为两位讲师经历聚合的三条（courseware/ch02/materials/README.md，取自已公开的讲师简介，2026-10-05 讲师确认），提前写好，不在镜头前现写：

- 红绿灯感知量产：城市 NOA 红绿灯感知模块的量产方案设计、部署与加速
- 端侧多模态推理引擎：在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产
- RoboHarness：把自然语言需求转成可执行、可验证、可持续迭代的研发流程

### 讲师提示

学员项目区已完整时，按分镜“内容已完整时的跟做分支”：Goal 改为呈现一条新批准的补充，不追认原页面有缺陷；没有补充需求时在独立练习副本使用课程合成示例。

## P30 确认计划再执行

[对应课件](index.html#p30)

### 口播

**第 1 步 · 看计划**（[演示](index.html?mode=slides&step=0#p30)）

提交以后，Codex 会先回复计划：要改哪些文件、怎么改。这一轮改动很小，计划可能只有一两句话，这很正常，不必为了走流程写一大段。

**第 2 步 · 范围**（[演示](index.html?mode=slides&step=1#p30)）

第一看范围。讲师的首页里，项目数据就在 src/App.tsx 顶部的一个数组里，预期只改这一处。计划里要是出现了样式重写、新组件，先问它为什么。

**第 3 步 · 内容**（[演示](index.html?mode=slides&step=2#p30)）

第二看内容。它准备放进页面的文字，和我们给的原文一致吗？有没有被改写成更漂亮的说法？

**第 4 步 · 依赖与链接**（[演示](index.html?mode=slides&step=3#p30)）

第三看有没有新依赖、有没有链接。我们明确说了不加。有的话，先停下来问清楚，不放行。三项都没问题，再让它动手。

### 切到实操

Codex 的计划以录制实际为准。若计划越界，就地让它收窄并保留原始回复，2.3 可作为“范围扩大”的真实素材；不准备越界的计划。

### 备课参考

按排练快照预估，内容迭代只改 src/App.tsx：10 行新增、2 行删除（materials/homepage-v1.diff）。真实 diff 以录制为准。

## P31 改好了吗

[对应课件](index.html#p31)

### 口播

**第 1 步 · 三种视口**（[演示](index.html?mode=slides&step=0#p31)）

Codex 说改完了。我们自己检查，不只看新内容有没有出来。先切三种视口：360、768、1440，三条经历都完整显示，没有被截断或挤坏。这说明第 3 条反馈解决了。

**第 2 步 · 键盘**（[演示](index.html?mode=slides&step=1#p31)）

再按 Tab。改之前，焦点只会停在“查看项目”按钮上，现在还是一样。键盘行为没有变，这正是我们要的。

**第 3 步 · 构建**（[演示](index.html?mode=slides&step=2#p31)）

最后在终端运行 npm run build，退出码是 0，构建流程成功完成。三项检查各有对象：视口检查文字和排版，Tab 检查焦点顺序，build 检查项目能否生成构建产物。把三项结果一起记进本轮记录。

**第 4 步 · 新问题**（[演示](index.html?mode=slides&step=3#p31)）

内容变多了，第 1 条“手机上挤”会不会出现？讲师的页面在 360 下没有横向滚动，仍然没复现。如果你的页面出现了，记成剩余问题，留到下一轮。这一轮只解决一个结果。请暂停视频，按这三项检查你自己的页面。

### 备课参考

排练版 homepage-v1（materials/homepage-v1.diff）2026-10-03 核对：360×800 下页面高 827px、无横向滚动；Tab 只停在“查看项目”；build 成功。

### 讲师提示

检查由人完成；让 AI 打开浏览器自验证留到 Harness 章节（决定 10）。结果列以录制实际为准。

## P32 记录本轮

[对应课件](index.html#p32)

### 口播

**第 1 步 · 逐项填写**（[演示](index.html?mode=slides&step=0#p32)）

最后把这一轮记下来。在 CH02_VIBE_ITERATIONS.md 末尾追加一段“第 1 轮”。问题证据、本轮目标、改动文件、验证结果，刚才都做过，照实填。其中两项是这一章新加的：会话选择与理由，还有剩余问题，画面上标黄了。回退点写本轮开始前的最后一次提交，运行 git log --oneline -1 就能看到它的短哈希；这一轮还没提交，所以回退点还是它。

**第 2 步 · 它用来做什么**（[演示](index.html?mode=slides&step=1#p32)）

这份记录有两个用处。下一次新建会话时，它就是交接文件；下一节 2.3 审查 diff 时，它就是对照的目标。请暂停视频，把你的第 1 轮写完。

### 跟做产出

本轮记录七项：问题证据、本轮目标、会话选择与理由、改动文件、验证结果、剩余问题、回退点。模板（前两项为讲师示例）：

```markdown
## 第 1 轮

- 问题证据：反馈第 3 条；1440×900 下项目区只有一句“记录课程练习”
- 本轮目标：在项目区呈现我提供的三条项目经历
- 会话选择与理由：
- 改动文件：
- 验证结果（三种视口 / 键盘 / build）：
- 剩余问题：
- 回退点：本轮开始前的最后一次提交（git log --oneline -1；2.3 提交后更新）
```

### 讲师提示

画面上的记录是讲师示例，各项以录制实际为准。

## P33 暂停自检

[对应课件](index.html#p33)

### 口播

**第 1 步 · 暂停**（[演示](index.html?mode=slides&step=0#p33)）

暂停一下，回答三个问题。第一，关掉终端，第二天恢复 Codex 会话，页面会自动回来吗？第二，压缩以后，模型不再看到哪些原始信息？第三，对话越来越长，每次花的钱一定越来越多吗？

**第 2 步 · 第 1 题**（[演示](index.html?mode=slides&step=1#p33)）

第一题，不会。会话由 Harness 保存，开发服务器是另一个程序，关掉终端就停了，要重新运行 npm run dev。恢复对话，不等于恢复文件或服务。

**第 3 步 · 第 2 题**（[演示](index.html?mode=slides&step=2#p33)）

第二题，工具调用和工具返回都会被移走，比如读到的文件内容、grep 的输出，这是 Codex 源码写定的。剩下的是用户消息和一份交接摘要；原始内容还能留下多少，要看摘要有没有抄进去。换别的服务或版本，细节可能不同，但摘要都替代不了原始证据。

**第 4 步 · 第 3 题**（[演示](index.html?mode=slides&step=3#p33)）

第三题，不一定。每次请求的 input 确实在变长，但重复的前缀可以被缓存，按更低的价格算。具体花多少，要看你用的服务怎么计费，不能只凭对话长度下结论。

## P34 本节小结

[对应课件](index.html#p34)

### 口播

**第 1 步 · 三种状态**（[演示](index.html?mode=slides&step=0#p34)）

这一节先回答了一个看似简单的问题：在哪个会话里改。模型什么都不记；会话由 Harness 保存，在我们看到的那次运行里，每次请求都重发了完整历史；文件和运行中的程序各自存在。所以选会话，看的是历史里有什么，而交接靠的是文件里的证据。

**第 2 步 · 一个习惯**（[演示](index.html?mode=slides&step=1#p34)）

然后我们完成了一轮完整的迭代：Prompt 引用当前证据，内容由人提供，只改项目区，再用三种视口、键盘和构建证明没弄坏别的。一轮只解决一个结果，新发现的问题记下来留给下一轮。课后想再做一两轮可以，不计分。

**第 3 步 · 下一节**（[演示](index.html?mode=slides&step=2#p34)）

现在 Codex 说完成了，我们手上是一份还没提交的改动。下一节的问题是：这份 diff，收不收？

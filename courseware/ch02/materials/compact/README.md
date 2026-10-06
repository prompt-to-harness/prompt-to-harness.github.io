# 2.2 压缩实验：`/compact` 之后模型还看得到什么

> 状态：2026-10-05 讲师机器上按本文步骤从新目录运行，压缩 5 次、不压缩对照 2 次，并与 Codex 0.160.0 源码对照。尚未由另一位讲师复现，也未在其他系统或 provider 上运行。定位为选做，能复现最好；看不了运行时，用 `reference/` 的记录对照观察。

## 问题与位置

对应第 2 章 p27（压缩与交接）和 p33 第 2 题。要回答的问题是：压缩后，模型手里剩下的是原始证据，还是一份摘要？

这个实验独立于主线：主线 2.1 的会话未必够长，也不一定包含适合对照的工具返回。为了演示压缩而在主线里堆对话不值得。实验借用首页的文件和“项目卡不跳转”这个决定作背景，做完回到主线，不合入任何改动。

## 起点与操作

需要：Codex CLI（已测 0.160.0）、`MINIMAX_API_KEY`、`uv`（`--tap` 查看请求用，不看请求可省）。

```bash
git clone --depth 1 https://github.com/prompt-to-harness/prompt-to-harness.github.io.git
cd prompt-to-harness.github.io
courseware/ch02/materials/compact/setup.sh          # 建在 lab-runs/compact-lab，已被 git 忽略
cd lab-runs/compact-lab
../../tools/clean-codex.sh --tap
```

`setup.sh` 从第 1 章参考快照复制 `src/App.tsx`、`src/index.css`、`PROMPT_V1.md`、`package.json`，在新目录里建一个 Git 仓库；不需要 `npm install`。`clean-codex.sh` 使用全新 HOME 和只含 MiniMax 的配置，这个配置走本地压缩。如果改用 OpenAI 账号登录，Codex 会走远程压缩，看到的请求会不同，本实验的观察表不适用。

如果界面长时间停在“Working”：Codex 在 300 秒内收不到任何回复数据才判定超时，然后自动重试，最多 5 次（源码 `codex-rs/model-provider-info/src/lib.rs` 的 `DEFAULT_STREAM_IDLE_TIMEOUT_MS`、`DEFAULT_STREAM_MAX_RETRIES`）。所以可以先等 5 分钟左右；多次重试仍不行，就按 Ctrl-C 退出，删掉实验目录重新开始，或者直接看 `reference/` 的记录。讲师测试时（2026-10-05，网络位于东京，连接国内的 `api.minimax.cn`）遇到过请求变慢、连接断开和读取超时，可能与跨境网络有关，未核实；国内网络下的情况尚未测试。

首次进入时选择信任该目录，然后依次输入 [`steps.txt`](steps.txt) 的五行（每条等回答结束再发）：

1. `只读，不要修改文件：阅读 src/App.tsx 和 PROMPT_V1.md，告诉我项目卡用的是什么元素、在第几行、能不能用 Tab 聚焦，以及 PROMPT_V1.md 里关于项目卡的决定原文。`
2. `只读：运行 grep -n 'className' src/App.tsx，把输出原样贴给我，不要概括。`
3. `记录一个人工决定：本轮项目卡保持不跳转，只补充项目描述，验收时要用 360px 宽度检查一次。不要改文件，回复“已记录”即可。`
4. `/compact`
5. `不要读取任何文件，也不要运行命令，只凭你现在掌握的信息回答：1) 项目卡是什么元素，在 src/App.tsx 第几行？2) 刚才 grep 的输出一共几行？原样写出第 1 行和最后 1 行。3) 本轮关于项目卡的人工决定是什么，验收要检查什么宽度？4) 逐条说明哪些是你确定看到过的原文，哪些是根据摘要推断的。`

第 1–3 步构造了三种信息：工具返回（文件内容、grep 输出）、模型的结论、人写下的决定。第 5 步禁止重新读取，只看模型手里还剩什么。

## 观察与产出

在 claude-tap 页面对照三次请求：第 3 步的请求（压缩前）、`/compact` 发出的请求、第 5 步的请求（压缩后）。观察分两类：一类由 Codex 的代码决定，每次相同，可以直接对照源码；一类由模型决定，每次不同，只能看多次运行。

### 由代码决定：对照源码

源码固定在 rust-v0.160.0（`a956835d02`），主要在 [`core/src/compact.rs`](https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/core/src/compact.rs)。

| 看什么 | 源码 | 5 次运行 |
| --- | --- | --- |
| 压缩请求怎样构成 | 完整历史末尾追加一条压缩提示（[`prompts/templates/compact/prompt.md`](https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs/prompts/templates/compact/prompt.md)）：“You are performing a CONTEXT CHECKPOINT COMPACTION…”，让模型写交接摘要 | 5 次相同 |
| 压缩后保留什么 | `build_compacted_history` 只放入 `collect_user_messages` 收集的用户消息和摘要；工具调用、工具返回和模型回答都不收 | 5 次压缩后都是 7 条，工具返回 0 份（压缩前 3–6 份） |
| 用户消息保留多少 | 从新往旧保留，合计最多约 2 万 token（`COMPACT_USER_MESSAGE_MAX_TOKENS`），超出时截断，非文字内容丢弃 | 本实验消息很短，3 条全部原文保留 |
| 摘要放在哪 | 以“Another language model started to solve this problem…”（`SUMMARY_PREFIX`）开头，作为一条 user 消息 | 5 次相同 |
| 初始上下文 | 手动 `/compact` 用 `DoNotInject`：压缩时不放，下一轮请求再完整注入 | 5 次都是：用户消息 → 摘要 → 权限说明与 Skills → 环境信息 → 新问题 |

所以“压缩后请求里没有工具返回”不是某次运行的结果，而是这一版本本地压缩的规则。版本更新后要重新对照源码。

### 由模型决定：5 次运行

| 轮次 | 摘要里的 grep 信息 | 第 5 步追问 grep 首末行 |
| --- | --- | --- |
| 1 | 只写“共 10 处匹配” | 说写不出原文，拒绝凭数字编造 |
| 2 | 10 个行号 | 说出行号，说写不出原文 |
| 3 | 只写“已原样执行并粘贴” | 说行数、首末行都无从确认 |
| 4 | **整段抄下 10 行原文** | 按摘要写出首末行原文，并说明缩进等细节无法保证 |
| 5 | 10 个行号 | 说出行号，说写不出原文 |
| 对照 1、2（不执行 `/compact`） | — | 都直接写出首末行原文 |

5 次摘要都保留了“项目卡在 `App.tsx:25`、不能 Tab 聚焦”和人工决定；人工决定同时作为用户消息原文保留，5 次回答都答对了。5 次都没有编造 grep 原文，也没有违反指令重新读取文件。这些只说明这 5 次的情况，不代表每次都如此；重跑时模型完全可能编造或违反指令，这本身就是值得记录的现象。

另外，压缩前的工具调用次数每次不同（3–6 次），有的运行还出现过 `unsupported call: read`；按参考记录统计，第 1 次 input 文字从约 1.78 万字符降到约 1.03 万字符（不含约 1.7 万字符、前后相同的系统指令），压缩后重新注入的权限说明和 Skills 列表占了其中不少。这些数字只说明规模，不作为重跑要达到的结果。

可以得出的结论：压缩后模型看到的是用户消息和摘要，工具返回的条目全部移走（代码决定）；原始证据还剩多少取决于摘要怎么写，多数时候只剩行号、计数或结论的转述（5 次运行所见）。需要原始证据时，应重新读取或运行命令。

学员不需要提交产出。做了的话，记下自己那次的“摘要里留下了什么 / 第 5 步怎么回答”，和上表对照。

## 讲师工具

- [`run-tmux.sh`](run-tmux.sh)：在 tmux 里按 `steps.txt` 自动跑一轮，结束时打印 claude-tap 会话 id；`SKIP_COMPACT=1` 跑不压缩的对照组。旁观时用 `LAB_SESSION=compact-demo LAB_HOLD=60` 固定会话名并在结束后停留，另开终端 `tmux attach -r -t compact-demo` 只读观看，请求面板在 `http://127.0.0.1:19527`。它同时看屏幕和 claude-tap 记录里是否还有未返回的请求，`/compact` 之后没看到 “Context compacted” 就判这一轮无效。学员不需要。
- [`compare.html`](compare.html)：压缩前后对照页，由 [`compare.py`](compare.py) 用参考记录生成，不调用模型，可直接用浏览器打开；适合录制时切换展示，或现场跑不通时代替。
- [`extract.py`](extract.py)：`python3 extract.py <会话 id>` 打印压缩前后的条目数、工具返回数、摘要和第 5 步回答；加 `--out <文件>` 写出脱敏的参考记录。原始记录留在本机的 `lab-runs/` 和 claude-tap 数据库，不提交。

## 验证与继续

- 已做：2026-10-05 在 macOS（网络位于东京）、Codex CLI 0.160.0、MiniMax-M3.1-Flash-Preview 上运行，每次从新目录开始、串行执行；压缩 5 次、不压缩对照 2 次，请求通过 claude-tap 记录，并与上述源码对照。`/compact` 本身约 12 秒。
- 不计入的运行：2 次。一次是上游请求超过 5 分钟没有回应；一次是驱动脚本误判回答已结束，`/compact` 实际没有执行。后者的请求记录完整，作为对照 1 使用。另有 2 次运行的第 5 步回答被提前中断，脚本修正后重跑，不计入。
- 未做：另一位讲师按本文复现；OpenAI 登录下的远程压缩；国内网络；Windows/Linux。
- 参考记录：[`reference/2026-10-05-requests.json`](reference/2026-10-05-requests.json)，是第 1 次运行三次请求的 input 条目（只留类型、角色和文字）和第 5 步的完整回答。系统指令、工具定义、请求头、条目 id 和推理内容已省略，本机路径改为 `~/`。
- 回到主线：实验目录可以直接删除。回到 2.2 p28，带着“压缩后需要哪些原始证据、要不要重新核对”去选择继续、恢复、压缩还是新建。

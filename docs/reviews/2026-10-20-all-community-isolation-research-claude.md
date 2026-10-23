# 社区方案调研：没有现成方案能替换 clean-claude / clean-codex

- 日期：2026-10-20
- 审查者：Claude（claude-sonnet-5-5；多路网络调研后精简，非 lesson-polish 审查）
- 范围：`tools/clean-claude.sh`、`tools/clean-codex.sh`、`courseware/ch02/materials/model-config/run-ab.sh` 与 `summarize.py` 对应的社区同类方案
- 基于提交：cd0a0b5（工作区有未提交改动）
- 已参考：无前序调研记录
- 检查方式：已查文档与 GitHub 页面（星数、更新日期为 2026-10-20 当日快照）；**未在讲师机器上实测任何工具**；不涉及课件页面

本文是调研者的观察和推断，不是讲师确认，也不是试讲结论。标“未核实”的条目是待办，不是结论。

## 总体判断

没有找到同时满足“临时 HOME、单一第三方 provider、Claude 与 Codex 同条件、抓请求、A/B 汇总”的现成项目。社区投入集中在安全隔离、provider 切换、基准评分三件事，“复现学员第一天的干净环境并证明两次运行的请求为何不同”基本是空白。建议保留现有四个脚本，补三件小事：claude-tap 锁版本、`.traces/` 加入 `.gitignore`、本机实测并记录隔离泄漏面。

## 四个方向的要点

### 1. 隔离 HOME、配置与沙箱

- 官方开关各只管一类：`CLAUDE_CONFIG_DIR` 把配置与凭据换目录，但官方写明部分凭据（如 `~/.config/anthropic` 的 profile）在配置目录之外；macOS 的 managed settings 优先级最高，换 HOME 也盖不掉。Codex 的 `--ignore-user-config` 只跳过 `config.toml`，认证仍读 `CODEX_HOME`，项目级配置仍加载。来源：[认证文档](https://code.claude.com/docs/en/authentication)、[managed-settings](https://code.claude.com/docs/en/managed-settings)、[Codex CLI reference](https://learn.chatgpt.com/docs/cli/reference)。
- `--bare` 会去掉 system reminders 等内容、改变请求，不适合作学员基线；`--safe-mode` 保留认证与模型选择，更接近“干净但完整”（[CLI 参考](https://code.claude.com/docs/en/cli-reference)）。
- 沙箱和容器解决另一个问题：官方明说隔离“does not change what is sent to the model”（[sandbox-environments](https://code.claude.com/docs/en/sandbox-environments)）。官方 [sandbox-runtime](https://github.com/anthropics/sandbox-runtime)（约 5.6k 星，beta）约束“能访问什么”；官方 devcontainer 是示例而非维护的基础镜像。社区安全向方案（[coop](https://github.com/trailofbits/coop)、[claudebox](https://github.com/RchGrav/claudebox) 等）都不面向教学。
- 与“干净 HOME”思路最近的是一批 `CLAUDE_CONFIG_DIR` 系 profile 启动器（星数 0–114，均为小项目，未试用），不处理 Codex，也不做请求对照。
- **推断**：官方开关是“关掉某一类东西”，临时 HOME 是“整体回到出厂状态”，要靠开关拼出同样效果需要十几项。
- **未覆盖**：中文社区讨论、Nix/direnv 方案。

### 2. 多 provider 路由与切换

- 工具成熟、体量大，但都是全局切换或网关：[cc-switch](https://github.com/farion1231/cc-switch)（约 146k 星，其星数真实性未核实）、[claude-code-router](https://github.com/musistudio/claude-code-router)（约 37.8k 星）、[LiteLLM](https://github.com/BerriAI/litellm)（约 61.6k 星）、[new-api](https://github.com/QuantumNous/new-api)（约 50.3k 星）。
- 厂商官方做法与我们的脚本一致：MiniMax 的 [Claude Code 文档](https://platform.minimax.cn/docs/token-plan/claude-code)和 [Codex 文档](https://platform.minimax.cn/docs/token-plan/codex-cli)都是环境变量/`config.toml` 直配，各档模型映射到同一模型，Codex 用 `wire_api = "responses"`、512K 窗口和可选 `model_catalog_json`。
- Codex 已废弃 `wire_api="chat"`（确切移除版本与官方 release note 未核实）。只有 Chat/Anthropic 端点的厂商在 Codex 上才需要翻译层。
- 厂商向导 `mmx-cli` 支持 `--dry-run` 与写前备份，但写入用户全局配置，不隔离。
- **推断**：这类工具的目标（长期使用、黑盒一键）与教学演示（逐项展示、不污染学员机器、可录播）相反。

### 3. 请求抓取与观测

- [claude-tap](https://github.com/liaohch3/claude-tap) 是最合适的选择：约 3.3k 星，MIT，2026-10-19 仍有推送，单一维护者，PyPI 0.1.x 发版很勤；对 Claude Code 与 Codex 默认走反向代理，不需要证书；输出到当前目录 `./.traces/`，仅对常见 auth header 脱敏，prompt、代码和路径都会进 trace。注意名字相近的 `claw-tap` 包（关系未核实），别装错。
- 无第三方依赖的备选：Claude Code 官方 OTel 的 `OTEL_LOG_RAW_API_BODIES=file:<dir>` 可把完整请求体写盘（仅 Claude，[文档](https://code.claude.com/docs/en/monitoring-usage)）。Codex 的 `[otel]` 默认不含完整请求体。
- 其他：mitmproxy 需要证书，学员门槛高；claude-trace 疑似停更（未核实）；Langfuse、Phoenix、OpenLIT 记录事件级会话，不是原始请求体（据文档描述推断，未实测）。
- **A/B 请求 diff 没有现成工具。** claude-tap 只文档化了同一次运行内相邻请求的 diff。最现实的做法是各用独立 `--tap-output-dir`，用 jq 抽出首个请求的 system、tools、首条 user 再 diff（字段结构未验证，需先看一份实际 JSONL）。

### 4. 评测与对照框架

- [Harbor](https://github.com/harbor-framework/harbor)（约 6.3k 星，Terminal-Bench 2.0 官方 harness）和 [inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) + inspect_swe 能驱动 Claude Code/Codex CLI，但都以容器为单位、重评分、不看请求体。
- [promptfoo](https://promptfoo.dev/docs/guides/evaluate-coding-agents/) 最轻，提供 `--repeat`、每次独立工作区、轨迹断言，但驱动的是 SDK 而非裸 CLI，且文档明说工作区拷贝不是沙箱。
- [agent-belt](https://github.com/jfrog/agent-belt)（19 星）明说 agent 以当前用户运行、不重置 HOME。
- 配置消融有学术证据，可作课上素材，但结论互相冲突，不宜当定论：[arXiv 2602.11988](https://arxiv.org/abs/2602.11988)（仓库级 context 文件总体不提升成功率、成本上升）；[arXiv 2601.20404](https://arxiv.org/pdf/2601.20404)（反方，搜索摘要转述，二手）；[SkillsBench](https://arxiv.org/html/2602.12670v1)（精选 skill 在软件工程类仅小幅提升）。未找到 MCP 有无的系统性消融，也未找到“临时 HOME + 代理抓包”做对照的公开做法。

## 对我们脚本的取舍

| 对象 | 判断 | 做法 |
| --- | --- | --- |
| claude-tap | 沿用 | 录课锁版本（如 `uvx claude-tap==0.1.146`）；`.traces/` 加入 `.gitignore`；公开 trace 前自查 |
| 官方 `CLAUDE_CONFIG_DIR`、`--ignore-user-config` | 作对照讲解，不可替换 | 讲“一行等价写法”的同时讲清泄漏面 |
| `clean-claude.sh` / `clean-codex.sh` | 我们的方案更合适 | 重置最完整、可读、可录播；managed settings 的缺口已在注释声明 |
| cc-switch / CCR / LiteLLM / new-api | 我们的方案更合适 | 仅换到无 Responses 接口的厂商时才引入翻译层 |
| mmx-cli | 借鉴 | `--dry-run` 与写前备份 |
| 容器、sandbox-runtime | 目的不同 | 另开安全隔离小节，勿与“干净环境”混讲 |
| Harbor / inspect_ai / agent-belt | 不引入 | 重、容器化、重评分 |
| `run-ab.sh` + `summarize.py` | 保留并借鉴 promptfoo | 每条件报告范围而非单次结果；指标以 token、请求数、步数、工具调用序列为主；声明“演示级，非 benchmark” |
| 请求体级 A/B | 自建小脚本 | 见上文 jq 方案 |

## 待讲师本机实测（均为未核实项）

1. 临时 HOME 下 `claude auth status` 与 `/status` 是否仍读到 managed settings、`~/.claude.json`、`~/.config/anthropic`。
2. `--bare`、`--safe-mode` 是否接受 `ANTHROPIC_AUTH_TOKEN`；`--safe-mode` 的系统提示是否与默认一致。
3. Codex 交互式模式对 `--ignore-user-config` 的支持（文档把它列在 `codex exec` 下）。
4. 用 `codex debug models` 验证 catalog 生效（来源为第三方文章）。
5. 脚本默认模型名 `MiniMax-M3.1-Flash` 与 Codex 版本（MiniMax 文档要求 ≥0.146.0）是否与官方文档当前一致。
6. claude-tap 能否代理 ChatGPT 登录下的 Codex；Codex OAuth 下 token 是否脱敏。

## 给后续审查者

- 星数与更新日期是单日快照，个位数不可信；多个仓库的最近提交日期未显示。
- 各厂商文档变化快，引用前重新核对。
- 本记录只读过脚本头部注释，对脚本能力的描述以脚本为准。

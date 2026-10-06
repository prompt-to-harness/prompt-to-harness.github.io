# 第 3 章预检 C：Game Studio 的安装、生效、停用与卸载

> 状态：2026-10-06 讲师机器上运行一次，环境是课程基线 `tools/clean-codex.sh`（API key 登录，MiniMax）。只验证安装链路和请求里的 Skill，没有用插件生成游戏（那是第二批预检 E）。未经另一位讲师复现，未试讲；ChatGPT 账号登录下的情况没有测。

## 结论

| 步骤 | 结果 | 依据 |
| --- | --- | --- |
| 官方目录同步 | 交互界面启动后，Codex 把 `openai/plugins` 克隆到 `~/.codex/.tmp/plugins`（本次 `82fd64b`），其中有 `plugins/game-studio` | 实测；子模块 `core-plugins/src/startup_sync.rs` |
| 浏览官方目录 | **API key 登录下为空**：`/plugins` 显示 “No OpenAI Curated plugins available”，`codex plugin list` 显示 “No marketplace plugins found.” | 实测 |
| 原因 | API key 登录时 Codex 读的是 `.agents/plugins/api_marketplace.json`（市场名 `openai-api-curated`），该提交里只有 `marketplace.json` | 子模块 `core-plugins/src/manager.rs` 的 `target_curated_marketplace`、`startup_sync.rs` 的 `curated_plugins_api_marketplace_path` |
| `codex plugin add game-studio@openai-curated` | 报 “plugin `game-studio` was not found” | 实测 |
| 本地市场安装 | 用 [`setup-marketplace.sh`](setup-marketplace.sh) 准备只含 Game Studio 的本地市场，`plugin marketplace add` + `plugin add game-studio@course-lab` 成功 | 实测 |
| 新会话里的请求 | 9 个 Skill 只出现名称、描述和文件位置（如 `game-studio:phaser-2d-game: Implement 2D browser games with Phaser…`），`SKILL.md` 正文不在请求里 | 实测，claude-tap 记录 |
| 停用 | `config.toml` 里 `[plugins."game-studio@course-lab"] enabled = false`；新会话请求里不再有 `game-studio`；`plugin list` 显示 “installed, disabled” | 实测 |
| 卸载 | `codex plugin remove game-studio@course-lab` 成功，缓存目录删除；市场配置保留 | 实测 |

Game Studio 目录最后一次改动是 `openai/plugins` 的 `27651a4`（2026-04-21）；提案第三版引用的 `5fd93af` 与本次 `82fd64b` 中的 Game Studio 内容相同（按目录历史推断，未逐文件对比 `5fd93af`）。

## 不用 OpenAI 账号，怎样用官方仓库里的东西（2026-10-06 补测）

讲师追问：能不能先添加市场、再从市场装 Plugin 或 Skill？分别测了三条路，环境同上。

| 路径 | 做法 | 结果 |
| --- | --- | --- |
| 直接把官方仓库加为市场 | `codex plugin marketplace add openai/plugins`（不加 `--sparse` 时完整克隆十几分钟未完成；加 `--sparse .agents --sparse plugins/game-studio` 约 40 秒） | **被拒绝**：“marketplace `openai-curated` is reserved and cannot be added from this source”。官方仓库的市场名是保留名，只能由 Codex 自己同步（子模块 `core-plugins/src/marketplace_policy.rs` 的 `is_reserved_marketplace_name`） |
| 本地市场（换一个市场名） | [`setup-marketplace.sh`](setup-marketplace.sh)：从官方仓库固定提交取出 `plugins/game-studio`，配一个名为 `course-lab` 的 `marketplace.json` | 可以，安装、停用、卸载都通（见上文） |
| 用内置的 `skill-installer` 只装 Skill | 在交互界面说“用 skill-installer 从 GitHub 仓库 openai/plugins 安装 plugins/game-studio/skills/phaser-2d-game 和 …/web-game-foundations”；Codex 申请联网运行安装脚本，人同意 | 可以，装进 `~/.codex/skills/`，内容与插件里的同名 Skill 逐字相同，新会话请求里出现。脚本默认下载整个仓库的 zip，本机卡了约 7 分钟，Codex 自己中断后改用 `--method git` 稀疏检出，10 秒完成；整轮 30 分钟 |
| 把 Skill 目录放进仓库 | 复制到仓库的 `.agents/skills/<名字>/` 或 `.codex/skills/<名字>/` | 可以，新会话请求里出现，来源标为仓库路径；**会随 git 提交**，换机器、换人都一样 |

结论：**官方仓库里的 Skill 不需要 OpenAI 账号**，有三种装法；需要账号（或绕一步）的只是“从官方目录里一键装插件”这一个入口。三种装法的差别正好可以讲：

| | 插件（本地市场） | `skill-installer` | 仓库 `.agents/skills/` |
| --- | --- | --- | --- |
| 装在哪 | 本机 Codex home 的插件缓存 | 本机 `~/.codex/skills/` | 项目仓库里 |
| 进不进 git | 不进 | 不进 | 进 |
| 停用 / 卸载 | 一个开关管 9 个 Skill | 手动删目录 | 改仓库、提交 |
| 其他工具能不能读 | 只有 Codex | 只有 Codex | `SKILL.md` 是开放格式，其他 Agent 也能读（各工具发现路径不同，未测） |

## 对课程设计的含义

- **课程基线下学员不能“在官方目录里找到 Game Studio”**，但能用官方仓库的内容（见上节）。3.4 的主路径待讲师决定；ChatGPT 账号登录下的官方目录仍未测。
- 渐进披露可以在请求记录里直接指认，停用后同样可以指认“Skill 不在了”。
- 本地市场的 `marketplace.json` 是课程自己写的（名称、策略字段照抄官方条目），录制时要说明这一点。

## 工具改动

`tools/clean-codex.sh` 原来每次启动都重写 `config.toml`，`plugin marketplace add` 写入的市场和插件开关在下次启动时丢失。新增 `CLEAN_CODEX_KEEP_CONFIG=1`：配合 `CLEAN_CODEX_HOME`，已有配置时不重写。

## 怎么复现

```bash
courseware/ch03/materials/plugin/setup-marketplace.sh lab-runs/ch03-plugin/mkt
H=lab-runs/ch03-plugin/home
CLEAN_CODEX_HOME=$H tools/clean-codex.sh -- plugin list                       # 先建配置
CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=$H tools/clean-codex.sh -- plugin marketplace add "$PWD/lab-runs/ch03-plugin/mkt"
CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=$H tools/clean-codex.sh -- plugin add game-studio@course-lab
CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=$H tools/clean-codex.sh --tap -- exec --skip-git-repo-check -s read-only "只读：列出你现在能用的 skill 名称，不要读取任何文件。" < /dev/null
python3 courseware/ch03/materials/tools/reqscan.py <claude-tap 会话 id> game-studio phaser-2d-game
```

停用：把配置里该插件的 `enabled` 改为 `false` 后重复最后两步；卸载：`plugin remove game-studio@course-lab`。

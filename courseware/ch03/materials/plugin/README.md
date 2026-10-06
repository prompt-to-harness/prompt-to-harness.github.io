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

## 对课程设计的含义

- **课程基线下学员不能“在官方目录里找到 Game Studio”**。3.4 的“发现 → 审查 → 安装”要按登录方式分两条路：ChatGPT 账号登录（待测）走官方目录；API key 登录（含课程基线）走本目录的本地市场，等于学员亲手把一个插件来源加进配置——审查来源本身就成了 3.4 的一部分。需要讲师决定主路径。
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

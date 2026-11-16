# 3.2.4 完整 Plugin 安装与短调用实录

2026-11-12，Codex CLI 0.163.0。本文是预跑回放，不是游戏试玩结果。

## 来源与实际组成

安装对象 `game-studio@openai-curated`，公开来源 [openai/plugins](https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio)。安装清单版本 `0.1.2`，CLI 返回的缓存版本 `0722921d`。两者分别是作者版本号和来源提交标识。安装缓存与来源目录逐文件比较，40 个共同文件全部一致；逐文件 SHA256 见 [verification.json](verification.json)。

包含 9 份 Skill：`game-playtest`, `game-studio`, `game-ui-frontend`, `phaser-2d-game`, `react-three-fiber-game`, `sprite-pipeline`, `three-webgl-game`, `web-3d-asset-pipeline`, `web-game-foundations`。包中还有 `references/`、`scripts/`、`assets/` 和 `.codex-plugin/`。清单声明 `skills: ./skills/`，没有声明 MCP 服务或 Hook；有脚本目录不等于配置了 Hook。

## 安装

本机已有官方 marketplace `openai-curated`，本轮执行：

```sh
codex plugin add game-studio@openai-curated --json
```

真实返回（个人目录已替换为 `~`）：

```json
{
  "pluginId": "game-studio@openai-curated",
  "name": "game-studio",
  "marketplaceName": "openai-curated",
  "version": "0722921d",
  "installedPath": "~/.codex/plugins/cache/openai-curated/game-studio/0722921d",
  "authPolicy": "ON_INSTALL"
}
```

录制使用该 CLI 版本的真实终端入口。安装后新开会话；本次在空的 Git 演示项目中调用，没有项目级 `.agents/skills` 副本。未验证桌面商店按钮或 `/skills` 交互列表。已安装后重录应明确是核对已有安装，不能把重复命令伪装成首次安装。

## 同一轮请求

```text
请使用已安装的 Game Studio Plugin 中的 game-playtest Skill，为六对牌的记忆翻牌游戏列出人工试玩清单。规则：全部六对配齐才通关；重开后计数归零并可继续翻牌。本轮只生成清单，不运行游戏、不修改代码。请先读取该 Skill，并在回答末尾说明实际读取的 Skill 文件来源。
```

通过 `codex exec --sandbox read-only --ephemeral --json` 在空项目运行；请求明确指定已安装的 Plugin 与 Skill。原始 JSONL 留在本机忽略目录 lab-runs/plugin-install-20261112，公开记录只保留必要的命令、结果和校验值。

## 实际读取

```json
[
  {
    "command": "/bin/zsh -lc \"rg --files --hidden ~/.codex/plugins ~/.codex/skills /tmp/ch0324-plugin-run -g '*SKILL.md' -g '*game-playtest*' -g '*manifest*'\"",
    "exit_code": 0,
    "returned_bytes": 8255,
    "output_sha256": "1ae615fef86f5b644c71995984973069fdc82f9a04bfe25a97ca2272edd6db1a"
  },
  {
    "command": "/bin/zsh -lc 'cat ~/.codex/plugins/cache/openai-curated/game-studio/0722921d/skills/game-playtest/SKILL.md'",
    "exit_code": 0,
    "returned_bytes": 2912,
    "output_sha256": "413f2453c602678962fab62446144f2929fcd5b9239f209c7889cc592d2b5be8"
  },
  {
    "command": "/bin/zsh -lc 'cat ~/.codex/plugins/cache/openai-curated/game-studio/0722921d/references/playtest-checklist.md'",
    "exit_code": 0,
    "returned_bytes": 1599,
    "output_sha256": "d8a4119f3912064c1328f7c537ff5fa94004f3aa81acba33d518758bf7fb8a3c"
  }
]
```

读取命令成功，返回了 Skill 正文及同包 `references/playtest-checklist.md`。文件路径明确位于 Plugin 安装缓存；校验值可与安装文件核对。此处不重复发布第三方正文。模型自述仅为辅助证据，来源判断以工具执行记录为准。

## 返回结果回放

已读取并采用 **game-playtest Skill**。以下仅为人工试玩清单，全部待执行；本轮未运行游戏、未修改代码。

| 检查项 | 人工操作 | 预期结果 |
|---|---|---|
| 初始状态 | 打开游戏，检查牌面与计数 | 共 12 张牌、6 对；初始背面朝上，计数为 0，可开始翻牌 |
| 单张翻牌 | 点击一张未配对的牌 | 仅该牌翻开，反馈清楚，无误触邻牌 |
| 重复点击 | 连续点击同一张已翻开的牌 | 不会与自身配对，不重复结算或异常计数 |
| 配对失败 | 翻开两张不同的牌 | 可看清两张牌，随后恢复背面；配对数不增加，可继续翻牌 |
| 配对成功 | 翻开两张相同的牌 | 标记为已配对，配对数只增加 1；再次点击不重复计数 |
| 快速输入 | 快速连续点击三张牌；在翻回动画中继续点击 | 不出现第三张牌干扰本轮判定、错误配对或卡死 |
| 计数一致性 | 混合进行成功、失败和无效点击 | 计数遵循界面说明，不漏计、不重复；配对数与实际一致 |
| 通关边界 | 依次完成第 1～5 对，尤其停在 5/6 时检查 | **均不通关**，剩余牌仍能翻开 |
| 完整通关 | 完成第 6 对 | **仅全部六对配齐后通关**；提示清楚，只触发一次，最终计数正确 |
| 中途重开 | 已有翻牌和配对记录时点击重开 | 计数全部归零，配对与选牌状态清空，12 张牌恢复可玩状态 |
| 动画中重开 | 两张不同牌等待翻回时重开，立即翻新牌 | 计数归零；上一局的延迟动作不影响新局，新牌可正常配对 |
| 通关后重开 | 通关后点击重开，再连续翻牌、配对 | 通关提示消失，计数归零，输入恢复，能够再次完成六对 |
| 连续重开 | 快速多次重开，再进行一轮配对 | 不重复初始化、不异常计数、不锁死输入 |
| 视觉与布局 | 检查桌面、手机及窗口缩放后的布局 | 牌面易辨认，计数清晰，按钮不遮挡牌区，所有牌都可操作 |
| 输入与恢复 | 检查鼠标、触屏；切换窗口后返回；如支持键盘则测试焦点与操作 | 不重复触发、不残留选中状态，返回后可继续玩；键盘焦点可见 |

计数若指“步数”或“翻牌次数”，按游戏已声明的口径检查；**重开归零**为必验项。

执行时建议保留初始、配对失败、5/6、通关、重开后的截图。问题按严重程度记录：**操作步骤、预期结果、实际现象、截图、疑似所属模块**。

实际读取的 Skill 来源：Game Studio Plugin / game-playtest / SKILL.md（`~/.codex/plugins/cache/openai-curated/game-studio/0722921d/skills/game-playtest/SKILL.md`）。同时读取了其引用的 playtest-checklist.md（`~/.codex/plugins/cache/openai-curated/game-studio/0722921d/references/playtest-checklist.md`）。

## 录制准备

- 已完成：完整安装、同源文件核对、空项目短调用、实际读取定位、清单两项规则核对。
- 未完成：讲师出声试读与课堂试讲。若改用桌面安装或交互选择入口，需要针对该入口另行预跑。
- 录制前确认 CLI 版本及当前插件来源，关闭无关窗口；版本改变时重新核对组成。已有独立四份 Skill 的旧项目不作为本段调用工作目录。

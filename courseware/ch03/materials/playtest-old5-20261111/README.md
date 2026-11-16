# 3.2.3 早期 05 的三轮预跑记录

2026-11-11。三个演示任务各有一轮独立的 Codex 预跑，每轮从 3.1 早期 05 的源码副本开始。用原项目基线和公开归档 `r1007-5` 的 diff 重建。任务 3 使用未修复的独立副本，截图中的配对读数仍有原缺陷。窄屏检查关注玩家翻牌时能否看到这些信息。 [早期 05 来源](../../lessons/01-memory-game/evidence.html#early-win) · [第三章讨论稿](../../../../docs/outline/ch03-discussion.md)

| 材料 | 用途 | 规模 | 状态 |
| --- | --- | --- | --- |
| [任务 1 · 复现提前通关](#run-a) | 核对实际牌对、显示进度与通关提示。 | 一轮日志摘录、一张图。 | 已浏览器实测。 |
| [任务 2 · 修复并验收](#run-b) | 核对清单读取、规则复验和重开状态。 | 一轮日志摘录、一段脚本。 | 已浏览器实测。 |
| [任务 3 · 检查桌面和手机窄屏体验](#run-c) | 核对专项文件读取、状态区和牌阵的同屏表现。 | 一轮日志摘录、两张图。 | 已用浏览器窗口尺寸实测。 |

三轮使用 Codex CLI 0.163.0、MiniMax-M3.1-Flash 和 Playwright。三个请求都显式使用 `$game-playtest`。各自的原生 `rollout.jsonl` 第 10 行是请求，第 12 行是 `game-playtest` 正文消息。工作副本的三份指导文件与固定版本公开原文核对一致。 [game-playtest 正文](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md) · [完整试玩清单](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/playtest-checklist.md) · [game-ui-frontend 正文](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md)

本页保存请求、工具记录的公开摘录和游戏画面。请求中的本机路径用方括号替换，文件读取记录只保留必要字段，浏览器输出按原样选录。每轮完整请求、初次和续跑 CLI 事件、原生会话、最终回复及证据在本机私有归档 `lab-runs/ch0323-old5-20261111/`，用归档内 `sha256.json` 核对。浏览器会话在部分阶段掉线，续跑曾使用本地无头浏览器重新取证。

<a name="run-a"></a>

## 任务 1 · 复现提前通关

请求原文，已替换本机路径。

```text
$game-playtest
这是 3.1 早期 05 的独立源码副本，只在当前项目工作。可运行 npm run dev，页面游戏区为 /#memory。浏览器使用 Playwright，可通过 [本机 Python 路径] 运行 Python，Chrome executable_path 为 [本机 Chrome 路径]。可以从页面 DOM 获取配对定位以保证操作可重现，报告中说明。无需联网安装工具。请做单项试玩并报告。游戏有六对牌，必须配齐六对才可通关。实际配好前三对后核对页面进度和通关状态，附复现步骤、预期和实际结果。只检查和取证，保留游戏源文件。
```

`a-discover/continued-events.jsonl` 第 148 行，浏览器工具输出摘录。

```text
pair-1 0,8 🛠️🛠️ -> pairs=2/6 moves=1 matched_cards=2 result=False
pair-2 1,9 🔬🔬 -> pairs=4/6 moves=2 matched_cards=4 result=False
pair-3 2,5 🧭🧭 -> pairs=6/6 moves=3 matched_cards=6 result=True
AFTER3: {"moves": "3", "time": "0:02", "pairs": "6/6", "moves_label": "步数 3", "pairs_label": "配对 6/6"} result: 全部配对完成，用时 0:02，翻了 3 步。再来一次
CONTINUE_AFTER_BANNER: {"attempted_cards": [3, 4], "their_symbols": ["🧩", "🧩"], "same_symbol": true, "stats_before": {"moves": "3", "time": "0:02", "pairs": "6/6", "moves_label": "步数 3", "pairs_label": "配对 6/6"}, "stats_after": {"moves": "3", "time": "0:02", "pairs": "6/6", "moves_label": "步数 3", "pairs_label": "配对 6/6"}, "matched_cards_before": 6, "matched_cards_after": 6, "face_down_before": 6, "face_down_after": 6, "aria_of_attempted": ["第 4 张卡片，未翻开", "第 5 张卡片，未翻开"], "state_changed": false}
```

本轮会话载入了主 Skill 正文，日志未见打开配套 Reference 或前端 Skill。运行还做了重开、错配和基本窗口检查。 [实际画面：6 张牌仍扣着，界面显示 6/6 并宣布通关](early-clear.png)

以下是 `a-discover/continued-reply.md` 第 3 行的结论摘录。

> **结论先说：游戏在只配好 3 对牌时就判定通关**（要求是 6 对），并且此后剩余 3 对完全无法继续，是一局走不完的"假通关"。

<a name="run-b"></a>

## 任务 2 · 修复并验收

请求原文，已替换本机路径。

```text
$game-playtest
这是 3.1 早期 05 的独立源码副本，只在当前项目工作。可运行 npm run dev，页面游戏区为 /#memory。浏览器使用 Playwright，可通过 [本机 Python 路径] 运行 Python，Chrome executable_path 为 [本机 Chrome 路径]。可以从页面 DOM 获取配对定位以保证操作可重现，报告中说明。无需联网安装工具。请修复“三对就提前通关”的缺陷。先复现，再在本副本中修复。修后用浏览器验证三对时 3/6 且仍可翻牌，六对时 6/6 且通关。验收时沿 Skill 正文引用读完整试玩清单，再从中选一项与通关后的恢复有关的检查并实际执行。报告每个实际结果及其依据。
```

<a name="run-b-read"></a>

`b-repair/events.jsonl` 第 7 行显示读取 `game-playtest/SKILL.md` 和 `playtest-checklist.md`，工具退出码为 `0`。请求明确要求沿链接查清单。Codex 在开头查阅，修复后的浏览器验收用到了清单的恢复检查。 [正文引用](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references) · [清单恢复项](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/playtest-checklist.md#universal-checks)

<a name="run-b-verify"></a>

`b-repair/continued-events.jsonl` 第 19 行，浏览器工具输出摘录。

```text
PASS  三对时 HUD 显示 3/6  | expected=3/6 | actual=3/6
PASS  三对时不出现通关横幅  | expected=无 banner | actual=None
PASS  三对后仍可翻牌（未配对卡片可翻开）  | expected=图案 开头 | actual=第 5 张卡片，图案 🛠️  | 点击第 5 张
PASS  六对时出现通关横幅  | expected=包含 全部配对完成 | actual=全部配对完成，用时 0:03，翻了 6 步。 再来一次
PASS  通关后点击“再来一次”恢复：计数清零  | expected=配对 0/6，步数 0，用时 0:00 | actual=配对 0/6，步数 0，用时 0:00  | 通关时为 {'pairs': '6/6', 'banner': '全部配对完成，用时 0:03，翻了 6 步。 再来一次'}
PASS  通关后点击“再来一次”恢复：通关横幅消失  | expected=无 banner | actual=None
PASS  恢复后 12 张卡片全部回到未翻开  | expected=12 张 未翻开 且无 is-matched | actual=未翻开 12 张 / is-matched 0 张
PASS  恢复后牌局可继续游玩（可翻牌）  | expected=图案 开头 | actual=第 1 张卡片，图案 🔬
SUMMARY: 20/20 checks passed
```

<a name="run-b-script"></a>

### 本轮生成并执行的脚本

`b-repair/evidence/memory_verify.py` 第 183–195 行摘录，片段中的辅助函数定义在原脚本里。代码把通关后的恢复转成一次点击和可检查的预期。

```python
# playtest-checklist.md -> "Do pause, failure, and recovery states work?"
before = {"pairs": pair_stat(page), "banner": banner(page)}
page.click(".memory__restart")
page.wait_for_timeout(300)
lab = labels(page)
cls = classes(page)
note("通关后点击“再来一次”恢复：计数清零", "配对 0/6，步数 0，用时 0:00",
     "配对 %s，步数 %s，用时 %s" % (pair_stat(page), stat_value(page, "步数"),
                                  stat_value(page, "用时")),
     pair_stat(page) == "0/6" and stat_value(page, "步数") == "0"
     and stat_value(page, "用时") == "0:00", "通关时为 " + str(before))
note("通关后点击“再来一次”恢复：通关横幅消失", "无 banner", str(banner(page)),
     banner(page) is None)
```

<a name="run-c"></a>

## 任务 3 · 检查桌面和手机窄屏体验

请求原文，已替换本机路径。

```text
$game-playtest
这是 3.1 早期 05 的独立源码副本，只在当前项目工作。可运行 npm run dev，页面游戏区为 /#memory。浏览器使用 Playwright，可通过 [本机 Python 路径] 运行 Python，Chrome executable_path 为 [本机 Chrome 路径]。可以从页面 DOM 获取配对定位以保证操作可重现，报告中说明。无需联网安装工具。请对同一游戏的开局和完成第一对后的状态做桌面与手机窄屏审查。沿正文引用的试玩清单和前端审查指导，分别检查操作反馈与计步、配对信息在窄屏的可读性，以及信息区是否遮挡或挤压牌阵。取证并给一个最小的界面调整建议。保留游戏源码。
```

<a name="run-c-read"></a>

`c-responsive/events.jsonl` 第 17、19 行，文件读取命令均成功，退出码均为 `0`。

```bash
cat .agents/references/playtest-checklist.md
cat .agents/skills/game-ui-frontend/SKILL.md
```

这轮显式调用了 `game-playtest`。Codex 随后沿正文引用打开前端 `SKILL.md`。两处记录分别对应 Skill 调用和文件读取。 [正文引用入口](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references) · [前端标准](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards)

<a name="run-c-verify"></a>

用 1440×900、375×667、360×800 的浏览器视口检查反馈、状态区位置和牌阵，未使用实体手机。`c-responsive/continued-events.jsonl` 第 21 行显示三个视口的状态区与牌阵重叠面积均为 `0`。第 168 行记录了 375×667 下滚到牌阵底部时，状态区已经滚出屏幕。

```text
current                -> {'scrollY': 1565, 'metaTop': -645, 'metaBottom': -622, 'metaVisible': False, 'boardTop': -602, 'boardBottom': 672, 'cardsFullyVisible': 4, 'cardsPartlyVisible': 8, 'vh': 667}
```

浏览器中还临时试验了三列布局，游戏源码保持原状。 [桌面配对后游戏区截图](desktop-first-pair.png) · [375×667 手机视口滚到牌阵底部截图](mobile-bottom.png)

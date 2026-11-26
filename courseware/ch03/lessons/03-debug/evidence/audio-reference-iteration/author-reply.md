全部完成并通过检查。下面是这次改动的说明。

## 一、从 source-game 提取了什么

`source-game/src/sound.js` 的实现要点被完整保留并泛化：

| 原实现 | 新资源里的对应 |
|---|---|
| 惰性创建 `AudioContext`（浏览器要求先有用户交互） | `getContext()` 保留；新增 `unlockAudio()` 在首次 pointerdown/keydown 时恢复被挂起的上下文 |
| `tone()` 音量包络：0.0001 → 峰值 → 0.0001（防爆音） | 原样保留为合成内核 |
| 用 `audio.currentTime + delay` 排期而非 `setTimeout` | 原样保留（琶音不会因主线程卡顿错拍） |
| `suspended` 自动 `resume()` | 原样保留 |
| `localStorage` 隐私模式写入抛异常的降级 | 从 `storage.js` 一并提取：`bindSoundToggle` 捕获异常后降级为「当前会话有效、不持久化」 |
| 四个玩法专属音 `flip / match / mismatch / win` | **重写为通用事件表**：`tap / move / select / pickup / success / error / tick / complete / fail`，另加 `defineCue()` 让各玩法覆盖或新增 |

## 二、新增/修改的文件（只动 purple-game-ui，source-game 未改）

**新增**
- `assets/js/purple-sound.js` — 音效引擎：事件表、静音开关 `bindSoundToggle()`、主音量、`defineCue()`、12 声部上限、`play(name, {delay, gain})`
- `references/sound.md` — 事件→玩法对照表（回合制/实时动作/消除/策略/竞速）、接入步骤、硬性要求、验收清单
- `scripts/verify-resources.mjs` — 资源与说明的一致性自检（112 项）

**修改**
- `SKILL.md` — 资源表加入「音效」；工作流加第 5 步「接声音」；新增「声音规则（核心）」；明确写明翻牌的顶部排布与 `flip/match` 事件**只是回合制的一种选择，不是固定要求**
- `assets/html/components.html` — 新增第 5 段音效开关标记
- `assets/preview.html` — 新增 D 段「音效开关与事件试听」，9 个事件各一个试听按钮
- `assets/css/result-overlay.css` — 补 `.pg-overlay__row-label`（自检发现该类被 HTML 用了却没定义）
- `agents/openai.yaml` — 简介与默认提示词补上声音

保留未动：紫色主题令牌、数据卡三种形态、结算浮层与焦点管理、`references/layout.md` 的「HUD 靠近场地边缘」规则（并补了一句把翻牌排法降级为「回合制之一」）。

## 三、检查结果（实跑）

- `scripts/verify-resources.mjs` → **112 项通过**：文档引用的路径都存在、HTML 用到的 `.pg-` 类名都有 CSS 定义、示例 import 的函数都真实导出、音效事件名在「模块 / 文档 / 预览页」三方一致、布局规则两处措辞一致
- `purple-ui-kit.js` → 最小 DOM 模拟下 **40 项通过**
- `purple-sound.js` → 最小 AudioContext 模拟下 **57 项通过**（静音拦截、事件表、覆盖自定义、音量夹取、`gain: 0` 静音、延迟排期、开关持久化与 localStorage 拒绝时降级）
- 三个 CSS 括号/注释/字符串配平 + `var(--pg-*)` 引用全部有定义

修掉的两个真实缺陷：`play(name, {gain: 0})` 原会回退成满音量（应为静音）；声部计数只靠 `onended` 回收，现补了按结束时间兜底清理。

**未验证**：当前环境 Chrome 起不来（SIGABRT），所以视觉效果没有截图核对、音效也没有人耳试听——SKILL.md 的「验证」一节已如实写明这点，`assets/preview.html` 就是留给下一步开浏览器目检/试听的回归基线。

下一步可以在新对话里直接 `$purple-game-ui` 调用验证。
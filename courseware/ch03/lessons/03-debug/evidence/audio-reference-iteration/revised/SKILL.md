---
name: purple-game-ui
description: Build or restyle browser mini-games with the shared "purple dusk" visual language — deep indigo-violet gradient surfaces, glass panels, indigo-to-violet accent buttons, stat cards, a settlement/result overlay, and a WebAudio sound-feedback engine. Use when creating a new small web game, porting an existing game's look to this purple theme, or when several games with different gameplay types must share one visual and audio system (reusable theme tokens, HUD/data-card components, result overlay, generic event-based sound cues, and HUD-placement rules).
---

# Purple Game UI

一套可复用的紫色小游戏视觉 + 声音系统。四个资源各自独立，也可以单独取用：

| 资源 | 文件 | 作用 |
|---|---|---|
| **主题** | `assets/css/purple-theme.css` | 令牌（`--pg-*`）、背景、标题、按钮、分段控件、焦点环、动效降级 |
| **数据卡** | `assets/css/stat-cards.css` | HUD 读数卡（顶部横排 / 侧边 rail / 底部横条 / 紧凑 chip） |
| **结算浮层** | `assets/css/result-overlay.css` | 结算面板：遮罩、图标、标题、明细行、按钮区 |
| **音效** | `assets/js/purple-sound.js` | WebAudio 现场合成（零音频文件）：通用事件音效表、静音开关、音量与持久化 |

附加：`assets/js/purple-ui-kit.js`（数据卡渲染 + 浮层焦点管理）、`assets/html/components.html`（静态标记片段）、`assets/preview.html`（可视化预览）、`references/`（令牌表、布局建议、音效选型）、`scripts/verify-resources.mjs`（资源与说明的一致性自检）。

## 工作流

1. **复制资源**：把 `assets/css/` 下需要的文件拷进项目（三个 css 可独立引入；`stat-cards.css` 与 `result-overlay.css` 依赖 `purple-theme.css` 的令牌）。需要数据卡渲染/浮层行为时再拷 `assets/js/purple-ui-kit.js`；需要声音反馈时拷 `assets/js/purple-sound.js`。
2. **上主题**：`<body class="pg-body">`（或给容器加 `.pg-surface`）。标题用 `.pg-title`，副标题 `.pg-subtitle`。
3. **摆 HUD**：按下面的布局规则选容器形态——`.pg-stats--row`（回合制顶部横排）、`.pg-stats--rail`（实时侧边竖排）、`.pg-stats--inline`（实时底部横条）、`.pg-chip`（高频刷新的浮动读数）。
4. **接结算**：用 `ResultOverlay` 或静态 `.pg-overlay` 结构，`open({ emoji, title, text, rows, actions })`。
5. **接声音**：`bindSoundToggle(按钮)` 挂上静音开关，事件处调 `play('success')` 之类的通用事件名。**按玩法挑事件，不要照搬翻牌游戏的 `flip/match/mismatch/win`**——见下面的声音规则。
6. **核对令牌**：颜色/圆角/阴影一律引用 `--pg-*`，不要写死十六进制。令牌表与用法见 `references/tokens.md`。

## 布局规则（核心）

**如果玩法要求玩家持续观察场地和读数，就让 HUD 靠近场地边缘——具体贴哪条边，按玩法的自然视线落点和操作手决定。**

- 回合制、读数只在操作后变化 → HUD 在场地上方一条横排（视线切换成本被回合节奏摊薄）。
- 实时、读数持续变化 → HUD 贴场地左/右竖向 rail 或底部横条，别单独占据屏幕一端。
- 只有一两个数值需要真盯着（血量、剩余时间）→ 做成 `.pg-chip` 贴在场边缘，其余统计退到边栏。
- HUD 不得覆盖场地的可交互元素；数值变化用 `tabular-nums`，每秒刷新也不能让布局抖。

初版翻牌游戏采用的「顶部工具栏 + 顶部数据卡 + 场地」只是**回合制的一种排法**，不是所有玩法的固定要求；实时玩法应改用贴边排布。

按玩法选边、网格实现示例、验收清单见 `references/layout.md`。

## 声音规则（核心）

**音效用通用事件表达，不绑定具体玩法。** 内置事件表：

`tap`（操作）、`move`（移动/焦点，很轻）、`select`（选中）、`pickup`（拾取/得分）、`success`（达成一次目标）、`error`（失误）、`tick`（倒计时/节拍）、`complete`（通关）、`fail`（失败）。

- 各玩法从表里挑自己用得上的，按需用 `defineCue()` 覆盖或新增；没有某个事件就干脆不用，不要为了凑齐而加。
- **必须能关闭声音**：界面上有开关（`bindSoundToggle` 已处理文案、`aria-pressed` 与持久化），关掉后游戏逻辑完全不受影响。
- **不要自动播放**：浏览器要求先有用户交互，调用 `unlockAudio()` 在首次交互时恢复 AudioContext。
- 音频只做补充：关掉声音后游戏必须仍然完全可玩（结算浮层里要有文字数值）。
- 选型建议、事件→玩法对照、实现要点见 `references/sound.md`。

## 用法片段

HTML（数据卡 + 音效开关）：

```html
<link rel="stylesheet" href="css/purple-theme.css">
<link rel="stylesheet" href="css/stat-cards.css">
<link rel="stylesheet" href="css/result-overlay.css">

<div class="pg-stats pg-stats--rail">
  <div class="pg-stat">
    <span class="pg-stat__label">生命</span>
    <span class="pg-stat__value">3</span>
  </div>
</div>

<button class="pg-btn pg-btn--ghost" id="sound-toggle" type="button">🔊 音效</button>
```

JS（渲染 + 浮层 + 声音）：

```js
import { renderStats, updateStats, ResultOverlay } from './purple-ui-kit.js';
import { play, bindSoundToggle, unlockAudio } from './purple-sound.js';

const stats = renderStats(document.getElementById('hud'), [
  { key: 'hp',   label: '生命', value: 3,  state: 'good' },
  { key: 'time', label: '用时', value: '0:00' },
]);
updateStats(stats, { hp: 2, time: '0:12' });   // 值变化时自动播放一次高亮脉冲

const overlay = new ResultOverlay(document.getElementById('overlay'));
overlay.open({
  emoji: '🎉',
  title: '全部配对完成！',
  text: '本局用时 0:03，共 9 步。',
  rows: [{ label: '用时', value: '0:03' }, { label: '最佳成绩', value: '9 步 · 0:01', state: 'good' }],
  actions: [{ label: '再玩一局', primary: true, onClick: () => overlay.close() }],
});

bindSoundToggle(document.getElementById('sound-toggle'));  // 静音开关（持久化）
unlockAudio();                                            // 首次交互时解锁
play('tap');              // 操作反馈
play('success');          // 达成一次目标
play('complete');         // 通关（可配合结算浮层弹出）
```

## 约束

- 类名与变量一律 `--pg-` / `.pg-` 前缀，避免与宿主项目冲突。
- 焦点环（3px `--pg-accent-3`）不要删；结算浮层必须能 `Esc` 关闭、Tab 焦点循环、关闭后焦点归位（`ResultOverlay` 已实现）。
- 颜色不能单独传达含义，配上文字或形状变化；声音同理，不能只靠听觉传达信息。
- 不要给宿主页面全局加 `backdrop-filter` / 重置样式，除非项目本身就是新页面。
- 想先看效果：起一个静态服务器打开 `assets/preview.html`（ES Modules 需要 http，`file://` 会被 CORS 拦截）。

## 验证

- `node scripts/verify-resources.mjs` → 112 项通过：文件齐全、文档引用的路径真实存在、HTML 用到的 `.pg-` 类名都在 CSS 中定义、示例 import 的函数都真实导出、音效事件名在「模块 / 文档 / 预览页」三方一致、布局规则在 SKILL.md 与 layout.md 中一致。**改动资源后跑一遍这个脚本。**
- `assets/css/` 三个样式表：括号/注释/字符串配平通过，`var(--pg-*)` 引用的变量全部在 `purple-theme.css` 中有定义。
- `assets/js/purple-ui-kit.js`：在最小 DOM 模拟下跑通 40 项断言（格式化、数据卡渲染与更新、浮层骨架/明细/按钮、Esc 关闭、Tab 焦点循环、关闭后焦点归位）。
- `assets/js/purple-sound.js`：在最小 AudioContext 模拟下跑通 57 项断言（静音拦截、事件表、`defineCue` 覆盖、音量与延迟、开关持久化与降级）。
- **未做真实浏览器渲染核对**：当前环境无法启动 Chrome，所以视觉效果（渐变背景、玻璃面板、浮层动画）尚未截图确认；`assets/preview.html` 就是为此准备的回归基线，换环境后应先打开它目检一次。
- **音效未实际听辨**：只验证了合成调用不抛异常、参数正确，人耳效果需在浏览器里试听。

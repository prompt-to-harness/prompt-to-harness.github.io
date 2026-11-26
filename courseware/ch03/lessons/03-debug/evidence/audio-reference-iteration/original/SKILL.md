---
name: purple-game-ui
description: Build or restyle browser mini-games with the shared "purple dusk" visual language — deep indigo-violet gradient surfaces, glass panels, indigo-to-violet accent buttons, stat cards, and a settlement/result overlay. Use when creating a new small web game, porting an existing game's look to this purple theme, or when several games with different gameplay types must share one visual system (reusable theme tokens, HUD/data-card components, result overlay, and HUD-placement rules).
---

# Purple Game UI

一套可复用的紫色小游戏视觉系统。三个资源各自独立，也可以单独取用：

| 资源 | 文件 | 作用 |
|---|---|---|
| **主题** | `assets/css/purple-theme.css` | 令牌（`--pg-*`）、背景、标题、按钮、分段控件、焦点环、动效降级 |
| **数据卡** | `assets/css/stat-cards.css` | HUD 读数卡（顶部横排 / 侧边 rail / 底部横条 / 紧凑 chip） |
| **结算浮层** | `assets/css/result-overlay.css` | 结算面板：遮罩、图标、标题、明细行、按钮区 |

附加：`assets/js/purple-ui-kit.js`（数据卡渲染 + 浮层焦点管理）、`assets/html/components.html`（静态标记片段）、`assets/preview.html`（可视化预览）。

## 工作流

1. **复制资源**：把 `assets/css/` 下需要的文件拷进项目（三个 css 可独立引入；`stat-cards.css` 与 `result-overlay.css` 依赖 `purple-theme.css` 的令牌）。需要数据卡渲染/浮层行为时再拷 `assets/js/purple-ui-kit.js`。
2. **上主题**：`<body class="pg-body">`（或给容器加 `.pg-surface`）。标题用 `.pg-title`，副标题 `.pg-subtitle`。
3. **摆 HUD**：按下面的布局规则选容器形态——`.pg-stats--row`（回合制顶部横排）、`.pg-stats--rail`（实时侧边竖排）、`.pg-stats--inline`（实时底部横条）、`.pg-chip`（高频刷新的浮动读数）。
4. **接结算**：用 `ResultOverlay` 或静态 `.pg-overlay` 结构，`open({ emoji, title, text, rows, actions })`。
5. **核对令牌**：颜色/圆角/阴影一律引用 `--pg-*`，不要写死十六进制。令牌表与用法见 `references/tokens.md`。

## 布局规则（核心）

**如果玩法要求玩家持续观察场地和读数，就让 HUD 靠近场地边缘——具体贴哪条边，按玩法的自然视线落点和操作手决定。**

- 回合制、读数只在操作后变化 → HUD 在场地上方一条横排（视线切换成本被回合节奏摊薄）。
- 实时、读数持续变化 → HUD 贴场地左/右竖向 rail 或底部横条，别单独占据屏幕一端。
- 只有一两个数值需要真盯着（血量、剩余时间）→ 做成 `.pg-chip` 贴在场边缘，其余统计退到边栏。
- HUD 不得覆盖场地的可交互元素；数值变化用 `tabular-nums`，每秒刷新也不能让布局抖。

按玩法选边、网格实现示例、验收清单见 `references/layout.md`。

## 用法片段

HTML（数据卡 + 浮层）：

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
```

JS（渲染 + 浮层）：

```js
import { renderStats, updateStats, ResultOverlay } from './purple-ui-kit.js';

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
```

## 约束

- 类名与变量一律 `--pg-` / `.pg-` 前缀，避免与宿主项目冲突。
- 焦点环（3px `--pg-accent-3`）不要删；结算浮层必须能 `Esc` 关闭、Tab 焦点循环、关闭后焦点归位（`ResultOverlay` 已实现）。
- 颜色不能单独传达含义，配上文字或形状变化。
- 不要给宿主页面全局加 `backdrop-filter` / 重置样式，除非项目本身就是新页面。
- 想先看效果：起一个静态服务器打开 `assets/preview.html`（ES Modules 需要 http，`file://` 会被 CORS 拦截）。

## 验证

本 Skill 自带的资源已在 headless Chrome 中渲染核对：深靛渐变背景、玻璃面板、顶部横排 / 侧边 rail / 底部横条三种 HUD 形态、结算浮层（遮罩 + 明细行 + 按钮）、窄屏断点。`assets/preview.html` 可作为回归基线，改动样式后重截对比。

# 主题令牌与用法

所有令牌定义在 `assets/css/purple-theme.css` 的 `:root` 里，统一以 `--pg-` 前缀命名。
**规则：项目里的颜色、圆角、阴影一律引用这些变量，不要写死十六进制值。**

## 色板

| 变量 | 值 | 用途 |
|---|---|---|
| `--pg-bg-0` | `#0c1022` | 页面底色（深靛） |
| `--pg-bg-1` | `#171e3d` | 页面底色渐变末端 |
| `--pg-glow-a` / `--pg-glow-b` | `#2a3170` / `#3b2a63` | 左上冷光晕 / 右上紫光晕 |
| `--pg-panel` | `rgba(255,255,255,.07)` | 玻璃面板底 |
| `--pg-panel-strong` | `rgba(255,255,255,.12)` | 次级面板、ghost 按钮 |
| `--pg-border` | `rgba(255,255,255,.14)` | 常规描边 |
| `--pg-border-strong` | `rgba(255,255,255,.22)` | 强调描边 |
| `--pg-text` | `#eef1ff` | 主文本 |
| `--pg-text-dim` | `#a3abcf` | 次要文本、标签 |
| `--pg-accent` | `#7c8cff` | 主强调（靛蓝） |
| `--pg-accent-2` | `#9a6bff` | 主强调（紫），渐变另一端 |
| `--pg-accent-3` | `#56d6c6` | 焦点环、次要强调（青） |
| `--pg-good` / `--pg-bad` / `--pg-warn` | 绿 / 玫红 / 琥珀 | 成功 / 失败 / 警告 |

渐变别名：`--pg-grad`（靛→紫，用于主按钮、选中态）、`--pg-grad-text`（白→浅紫→青，用于大标题）。

## 形状与动效

| 变量 | 值 | 用途 |
|---|---|---|
| `--pg-radius` | `16px` | 面板、数据卡容器 |
| `--pg-radius-sm` | `11px` | 按钮、分段控件、紧凑容器 |
| `--pg-radius-lg` | `22px` | 结算浮层面板 |
| `--pg-shadow` | `0 18px 40px rgba(0,0,0,.35)` | 浮层投影 |
| `--pg-shadow-accent` | `0 8px 20px rgba(124,140,255,.32)` | 主按钮投影 |

动效节奏：微交互 0.18s、按钮按下 0.12s、卡片翻转 0.45s、浮层淡入 0.22s / 浮起 0.3s。
全局已开启 `prefers-reduced-motion` 降级（动画时长压到 0.001ms）。

## 语义色用法

- 绿色 `--pg-good`：完成、配对成功、正向反馈。
- 玫红 `--pg-bad`：错误、危险、失败反馈。
- 琥珀 `--pg-warn`：需要注意但不算失败（能量低、剩余时间少）。
- 颜色**不能单独**传达信息，必须同时有文字或形状变化（色觉障碍 + 单色打印）。

## 类名约定

统一 `--pg-` / `.pg-` 前缀，避免与宿主项目已有的 `.btn`、`.card`、`.stat` 冲突。

| 类 | 作用 |
|---|---|
| `.pg-body` / `.pg-surface` | 应用紫色背景与字体 |
| `.pg-title` / `.pg-subtitle` / `.pg-hint` | 标题 / 副标题 / 提示文字 |
| `.pg-panel` | 通用玻璃面板 |
| `.pg-btn` + `--primary` / `--ghost` | 按钮 |
| `.pg-segmented` + `.pg-segmented__btn` | 分段选择器（难度、模式） |
| `.pg-kbd` | 键盘按键提示 |
| `.pg-stats` + `--row` / `--rail` / `--inline` | 数据卡容器形态 |
| `.pg-stat` + `--accent` / `--good` / `--bad` / `--warn` | 数据卡与状态变体 |
| `.pg-chip` + `--accent` / `--good` / `--bad` | 紧凑读数片 |
| `.pg-overlay` + `__panel` / `__emoji` / `__title` / `__text` / `__summary` / `__actions` | 结算浮层 |

## 常见做法

- 大标题用 `.pg-title`（渐变文字）；正文层级靠 `--pg-text` / `--pg-text-dim` 区分，不要靠字号硬拉。
- 主操作一个 `.pg-btn--primary`，次要操作 `.pg-btn--ghost`；同一屏最多一个主按钮。
- 焦点环统一 `--pg-accent-3` 3px + 2px offset，别删。
- 数值（分数、步数、时间）一律 `tabular-nums`。
- 玻璃面板的 `backdrop-filter` 在低端设备上可能失效，底色已经是半透明白，可读性不依赖模糊效果。

## 不要做

- 不要在页面底色上再叠第三种紫色渐变光晕，会显脏。
- 不要把 `--pg-grad` 用在大段正文上，可读性会下降。
- 不要给数据卡加过重阴影，密集排布时会糊成一片。
- 不要把 HUD 做成浮在场地上的透明条，会遮挡可交互元素（见 `layout.md`）。

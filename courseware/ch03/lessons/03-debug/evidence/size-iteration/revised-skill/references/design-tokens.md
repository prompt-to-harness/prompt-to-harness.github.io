# 设计令牌（Design Tokens）

所有颜色、圆角、阴影集中在 `styles.css` 顶部的 `:root` 里。新游戏只改这里，不要在组件样式里写死颜色。

## 颜色

| 令牌 | 值 | 用途 |
|---|---|---|
| `--bg-0` | `#0c1022` | 背景渐变起点（深蓝紫） |
| `--bg-1` | `#171e3d` | 背景渐变终点 |
| `--panel` | `rgba(255,255,255,.07)` | 面板底色（工具条 / 数据格） |
| `--panel-strong` | `rgba(255,255,255,.12)` | ghost 按钮底色 |
| `--border` | `rgba(255,255,255,.14)` | 面板描边 |
| `--text` | `#eef1ff` | 主文字 |
| `--text-dim` | `#a3abcf` | 次要文字（标签、说明） |
| `--accent` | `#7c8cff` | 主强调色（蓝紫） |
| `--accent-2` | `#56d6c6` | 次强调色（青绿），专用于焦点环与高亮 |
| `--accent-3` | `#9a6bff` | 主按钮渐变的第二色（亮紫） |
| `--good` | `#4ade80` | 成功 / 已完成 |
| `--bad` | `#fb7185` | 失败 / 错误 |
| `--card-back-a/b` | `#4b5bd6` → `#8b5cf6` | 牌背渐变 |

背景公式（不要改结构）：

```css
background:
  radial-gradient(1100px 620px at 15% -10%, #2a3170 0%, transparent 55%),
  radial-gradient(900px 600px at 100% 0%, #3b2a63 0%, transparent 50%),
  linear-gradient(160deg, var(--bg-0), var(--bg-1));
background-attachment: fixed;
```

## 尺寸

| 令牌 | 值 | 说明 |
|---|---|---|
| `--radius` | `16px` | 工具条 / 数据格容器圆角 |
| 面板圆角 | `13px` | 数据格、卡片 |
| 浮层圆角 | `22px` | 结算面板 |
| 按钮圆角 | `11px` | 所有 `.btn` |
| `--shadow` | `0 18px 40px rgba(0,0,0,.35)` | 浮层投影 |

## 字号与间距（都用 clamp 做流式缩放）

| 元素 | 尺寸 |
|---|---|
| `.title` | `clamp(1.7rem, 4.5vw, 2.4rem)`，渐变文字 |
| `.subtitle` | `clamp(.85rem, 2vw, .95rem)` |
| `.stat__value` | `clamp(1rem, 2.6vw, 1.25rem)`，`tabular-nums` |
| `.stat__label` | `0.74rem`，字距 `0.5px` |
| `.btn` | `0.9rem`，内边距 `9px 16px` |
| `.segmented__btn` | `0.86rem`，内边距 `7px 14px` |
| `.overlay__title` | `1.45rem` |
| `.overlay__emoji` | `3.2rem` |

页面宽度 `max-width: 960px`；页面内边距 `clamp(16px,3vw,32px) clamp(12px,3vw,24px) 40px`；
区块间距 `clamp(12px,2vw,20px)`；场地间距 `clamp(6px,1.4vw,12px)`。

场地尺寸用变量表达，**具体数值属于某一款游戏就写在它自己的 CSS 里**：

| 变量 | 默认值 | 作用 |
|---|---|---|
| `--cols` / `--rows` | `4` | `.board`（网格场地）的列数 / 行数 |
| `--cell` | `108px` | `.board` 每列的宽度基准（场地宽度上限 = `--cols × --cell`） |
| `--stage-max` | `100%` | `.stage` / `.stage-canvas` 的宽度上限 |
| `--stage-ratio` | `4 / 3` | `.stage-canvas` 的长宽比 |

## 动效

| 名称 | 时长 / 曲线 | 用途 |
|---|---|---|
| `fade-in` | 0.22s ease | 浮层淡入 |
| `rise` | 0.3s cubic-bezier(.2,.9,.3,1.2) | 浮层面板弹起（轻微过冲） |
| `pop` | 0.45s ease | 配对成功时卡片弹一下 |
| `shake` | 0.42s ease | 配错时左右抖动 |
| 卡片翻转 | 0.45s cubic-bezier(.4,.15,.2,1) | 3D 翻牌 |

全局 `prefers-reduced-motion: reduce` 时所有动画压到 0.001ms。

## 焦点

统一 `outline: 3px solid var(--accent-2); outline-offset: 2px;`，颜色是青绿，与紫色主色区分，一眼可见。

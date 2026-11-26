# 落地模式与坑位

## 一、换玩法的标准流程

1. `cp -r purple-game-ui/templates <new-game>`
2. 改 `index.html`：标题、subtitle、四个 `.stat__label`、场地内容。
3. 改 `src/storage.js` 的 `STORAGE_KEY`（必须，否则多款游戏共用存档）。
4. 删掉 `src/main.js`，写你自己的玩法脚本；用 `shell.init({ modes, onRestart, onModeChange })` 接管 HUD。
5. `python3 -m http.server 8000`，浏览器里点一遍。

## 二、HUD 与玩法的边界

`shell` 负责：**分段控件 / 音效开关 / 重新开始 / 四个数据格 / 计时 / 浮层 / 最佳成绩 / 焦点管理**。
你的脚本负责：**场地 DOM、玩法状态、胜负判定**。

两边唯一的耦合点是：

| 你的脚本调用 | 效果 |
|---|---|
| `shell.setStat('moves', '3')` | 更新数据格 |
| `shell.startTimer()` / `shell.stopTimer()` | 计时开始 / 结束 |
| `shell.resetTimer()` | 重开一局时归零 |
| `shell.recordResult(score, timeMs)` | 记录并显示最佳成绩 |
| `shell.showResult({...})` | 弹结算浮层 |
| `shell.sfx.match()` 等 | 播放音效 |

## 三、可复用的场地件

`styles.css` 第 8 区提供三套现成的场地件，按需取用：

- **`.card`**（翻牌类）：3D 翻牌，状态类 `is-open` / `is-matched` / `is-wrong` / `just-matched`。
- **`.tile`**（格子类）：消除、2048、扫雷。`is-hint` 高亮、`is-bad` 错误态。
- **`.stage-canvas`**（画布类）：弹球、贪吃蛇等需要 `<canvas>` 的玩法。

不用的那套可以直接删掉，不影响其它区块。

## 四、坑位清单

1. **transform 被动画覆盖**：任何在 `rotateY(180deg)` 元素上跑的动画，关键帧里必须重复写全 transform，
   例如 `transform: rotateY(180deg) translateX(-7px)`。少了就会在动画中翻回背面。
2. **`file://` 打不开**：ES Modules 有 CORS，必须用 http 服务器。
3. **浮层焦点**：用 `hidden` 属性切换（CSS 里 `.overlay[hidden]{display:none}`），
   不要用内联 `display:none`；关闭浮层后要把焦点交还给触发按钮。
4. **数据格与逻辑脱节**：不匹配、判负、超时这些「没有正向进度」的事件也要刷新数据格，
   否则计数器会停在旧值（参考项目里真实踩过的 bug）。
5. **localStorage 隐私模式**：写入会抛异常，`storage.js` 已做降级；
   若玩法需要存更复杂的数据，同样在 `loadSettings` 里做 try/catch。
6. **emoji 跨平台观感**：emoji 外观依赖系统字体，Windows / macOS / Android 不一致。
   想要稳定视觉就换成内联 SVG 图标。
7. **窄屏**：≤520px 时工具条竖排、数据条变 2×2 网格。改了工具条结构要重新检查。

## 五、常见玩法的字段映射

| 玩法 | 数据条建议 | 主指标 |
|---|---|---|
| 翻牌配对 | 步数 / 用时 / 配对 / 最佳 | 步数 |
| 打地鼠 | 命中 / 用时 / 漏掉 / 最高分 | 分数 |
| 贪吃蛇 | 得分 / 用时 / 长度 / 最高分 | 长度 |
| 2048 | 分数 / 用时 / 最大数 / 最高分 | 分数 |
| 扫雷 | 用时 / 剩余雷 / 最佳用时 / 难度 | 时间 |

无论哪种玩法，**四格结构保持不变**，这样整站看起来是同一个模板。

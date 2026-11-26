做好了。项目在根目录 `index.html`（原生 HTML/CSS/JS，无构建步骤）。

## 使用的 Skill 文件（Skill 目录本身未改动，`verify-resources.mjs` 仍 112/112 通过）
- `.agents/skills/purple-game-ui/SKILL.md`（主说明）
- `.agents/skills/purple-game-ui/assets/css/purple-theme.css` → `css/purple-theme.css`
- `.agents/skills/purple-game-ui/assets/css/stat-cards.css` → `css/stat-cards.css`
- `.agents/skills/purple-game-ui/assets/css/result-overlay.css` → `css/result-overlay.css`
- `.agents/skills/purple-game-ui/assets/js/purple-ui-kit.js` → `js/purple-ui-kit.js`
- `.agents/skills/purple-game-ui/assets/js/purple-sound.js` → `js/purple-sound.js`
- 参考阅读：`references/layout.md`、`references/sound.md`
- 自写：`css/game.css`、`js/game.js`、`index.html`

## 玩法与体验
- 单难度：60 秒一局，3 条生命；方向键 / WASD（触屏另有方向键）。
- 障碍为来回巡逻的暗色块，撞到扣 1 血 + 1.3 秒无敌（闪烁、护盾环、屏幕红闪与震动）。
- 水晶 +10 分，每颗**只存在 9 秒**：晶体外圈有剩余时间**进度环**、下方有**进度条**和剩余秒数，剩 30% 内变琥珀色提示。
- 收集有粒子爆开 + `pickup` 音效 + 得分卡脉冲；受伤有 `error` 音效 + 震动红闪；最后 10 秒每秒 `tick`。
- HUD 只有**剩余时间 / 得分 / 生命**三项：桌面端贴场地左侧竖排 rail，窄屏（≤760px）自动落到场地下方三列横条，不遮挡场地；数值用 `tabular-nums`，布局不抖。
- 进入先弹**规则提醒浮层**，点「开始游戏」后才起算 60 秒计时。
- 结算浮层（`ResultOverlay`）显示得分、收集数、剩余生命、用时，**「再玩一局」按钮只出现在结算画面**；Esc 关掉浮层后会自动重新弹出，保证重开按钮始终可达。
- 顶栏保留音效开关（`bindSoundToggle`，持久化），关闭声音后游戏完全可玩。

浏览器试玩按你要求留给你；本地打开需要 http（ES Modules），例如 `python3 -m http.server` 后访问 `http://localhost:8000/index.html`。
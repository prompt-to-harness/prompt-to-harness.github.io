修好了。

**根因**
`js/purple-ui-kit.js` 作为经典脚本在**全局作用域**声明了 `function renderStats / updateStats / formatDuration / class ResultOverlay`；`js/game.js` 也在全局用 `const { renderStats, updateStats, formatDuration, ResultOverlay } = window.PurpleUI;` 解构出同名绑定。`const` 属于全局词法声明，不能与已有的全局绑定同名 → 浏览器在解析 `game.js` 时直接抛 `Identifier 'renderStats' has already been declared`，于是规则浮层和游戏都没能启动。

**改了什么**（只动了 `js/game.js`，Skill 目录 `.agents/skills/purple-game-ui/` 一字未改）
- 把 `game.js` 整体包进一个 IIFE：`(function () { … })();`，把 `canvas / stats / state / update / draw` 等所有绑定收进局部作用域，与 UI 组件的全局声明彻底隔离（顶部加了注释说明原因）。
- 逻辑、玩法、样式均未改动；`js/purple-ui-kit.js` 仍是之前那份「经典脚本 + `window.PurpleUI`」的本地适配版。

**验证方式**（浏览器试玩仍留给你）
用 Node 的 `vm` 把两个脚本放进**同一个全局作用域**加载，复现浏览器的经典脚本环境：
- 两个脚本加载成功，不再有重复声明报错；
- 规则浮层正常显示（`hidden = false`）；
- 点「确认并开始」后连续跑满 4000 帧（≈60 秒一整局），无异常，结算浮层正常打开。

改动文件：`js/game.js`（仅新增 IIFE 包裹 + 注释）。
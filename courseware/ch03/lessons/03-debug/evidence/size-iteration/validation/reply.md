做完了。游戏在根目录，原生 HTML/CSS/JS，无依赖无构建。

## 产物

```
index.html          页面骨架（标题 → 数据条 → .stage 画布场地 → 提示 → 结算浮层）
styles.css          由 Skill 模板 styles.css 复制并追加本游戏专属样式
src/main.js         玩法逻辑（画布渲染、移动、碰撞、计时、结算）
src/shell.js        HUD 控制器（改造版：时间/得分/生命三格、无难度、无工具条重开）
src/storage.js      localStorage 封装（独立 key：dodge-collect-60s.v1）
src/sound.js        WebAudio 合成音效（原样复制）
```

## 玩法与规则

- 方向键 / WASD 移动（也支持按住鼠标拖动），60 秒一局；时间显示为剩余秒数。
- 收集青色宝石 +10 分（同时记录收集数）；8 个自转尖刺障碍在场地内漂移，后半程略微加速。
- 撞到障碍扣 1 条命并获得 1.4 秒无敌 + 震屏/粒子特效；初始 3 条命，扣光即结束。
- 时间到或生命耗尽 → 弹出结算浮层（分数、收集数、新纪录、历史最佳）。
- **界面无难度选择**（单一难度）；**重开按钮只出现在结算浮层**（「↻ 再玩一局」），游玩界面只显示时间、得分、生命三格数据。

## 验证方式（浏览器试玩留给你）

沙箱里不能绑定端口，我用 Node 做了无头模拟：加载模块无异常、模拟 60 秒触发结算浮层（文案/标题/纪录行正确）、点击「再玩一局」后浮层关闭并重置为 60 秒 / 3 命 / 0 分、再按方向键能正常续玩。

试玩请起静态服务器（ES Modules 不能用 `file://` 打开）：

```bash
cd <workspace> && python3 -m http.server 8000   # → http://127.0.0.1:8000/
```

## 用到的 Skill 文件

- `.agents/skills/purple-game-ui/SKILL.md`（主规范）
- `.agents/skills/purple-game-ui/templates/index.html`（骨架 → index.html）
- `.agents/skills/purple-game-ui/templates/styles.css`（全部样式 → styles.css）
- `.agents/skills/purple-game-ui/templates/src/shell.js`（→ src/shell.js，按本游戏改造）
- `.agents/skills/purple-game-ui/templates/src/storage.js`（→ src/storage.js，改了 STORAGE_KEY 与「高分优先」比较）
- `.agents/skills/purple-game-ui/templates/src/sound.js`（→ src/sound.js，未改动）

`.agents/skills/` 下的文件全部保持原样未修改。
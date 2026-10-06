# 第 3 章试玩材料

课件里“试玩”按钮打开的静态页面，随站点发布。三份都是讲师排练中的真实实现，用 `npx vite build --base ./` 构建；页面是整张个人首页，记忆翻牌在项目区下方。

| 目录 | 是什么 | 来源 |
| --- | --- | --- |
| `memory-v0/` | 3.1 交回的记忆翻牌（带缺陷：12 张牌互不相同，一局打不完；步数只在配对时加） | 排练第 8 轮，`courseware/ch03/materials/mainline/` |
| `memory-v1/` | 3.3 人定规则后修好的版本 | `materials/mainline/reference/3.3-fix.diff` |
| `memory-stale-timer/` | 3.7 的**教学预备版本**：在 v1 上删掉一行计时器清理 | `materials/prepared/stale-timer.diff` |

源码不在本目录；重建时先按对应材料还原源码，再运行上面的构建命令覆盖这里。

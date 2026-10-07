# 3.7 预备版本：重开时不清理计时器

> 状态：2026-10-06 讲师机器上构造并核对一次。**这是教学预备材料，不是自然出现的缺陷**：预检 A 的 6 份排练实现都在重开时清理了计时器（`../mainline/README.md`）。课件 3.7 必须标明“教学预备”。

## 做法

在 3.3 修复后的记忆翻牌 v1（排练第 8 轮 + `../mainline/reference/3.3-fix.diff`）上应用 [`stale-timer.diff`](stale-timer.diff)：删掉等待翻回那个 effect 的清理函数 `return () => window.clearTimeout(timer)`，一行。

```bash
cp -R <记忆翻牌 v1 目录> lab-runs/ch03-prepared && cd lab-runs/ch03-prepared
git apply ../../courseware/ch03/materials/prepared/stale-timer.diff && npm ci && npm run build
cd ../.. && uv run courseware/ch03/materials/prepared/stale-timer-check.py lab-runs/ch03-prepared
```

## 2026-10-06 结果

步骤：翻开两张不同的牌 → 立刻点“重新开始” → 新一局翻开第 1 张 → 等 1.2 秒（旧计时器 900ms 已到点）→ 翻开第 2 张 → 再等 1.5 秒。

| 时刻 | v1（有清理） | 预备版本（无清理） |
| --- | --- | --- |
| 新一局翻开第 1 张 | 1 张朝上 | 1 张朝上 |
| 旧计时器到点后 | 1 张朝上 | 1 张朝上（看不出变化） |
| 翻开第 2 张 | 2 张朝上 | 2 张朝上 |
| 再等 1.5 秒 | 不是一对，**两张翻回** | **两张一直朝上**，提示不变，游戏不再比较它们 |

原因：旧计时器的回调把“当前翻开的牌”清空了，它清的是新一局的记录；新一局第 1 张牌还朝上，但游戏已经忘了它。界面上看重开成功了，运行中的计时器却还属于上一局。

旧回调同时会把“上一局那两张牌的 id”翻回背面；因为每局重新洗牌，这两个 id 在新一局里通常落在别的位置上，所以不容易直接看到。

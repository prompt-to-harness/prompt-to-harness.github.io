# 参考记录

讲师机器上的真实运行输出（2026-10-06，Codex 0.160.1 + MiniMax，`codex exec`），课件 3.1、3.3 引用。本机路径已替换为 `<课程仓库>` 或 `~`，其余原样。

| 文件 | 来自 |
| --- | --- |
| `3.1-plan.run8.answer.md` | `run-v2.sh` 第 8 轮：3.1 的计划与三个问题 |
| `3.3-investigate.run1.answer.md`、`3.3-investigate.run2.answer.md` | `debug-3.3.sh` 两次运行：只读调查的回答（两次都指出牌组配不成对，并反问报告里的推断） |
| `3.3-fix.answer.md`、`3.3-fix.diff`、`3.3-fix.diffstat` | 第 2 次运行：人定规则后的修复（第一次回合因上游错误中断，按脚本续跑一次后完成） |
| `3.3-fix.probe2.json` | 修复后的扩展探查：一局能打完、每翻两张计一步、通关后计时停住、最佳成绩不被覆盖 |
| `3.5-plan.run3.answer.md`、`3.5-plan.run2.answer.md` | `run-v3.sh` 两轮：Game Studio 在场时的计划（基线分别为修复后的 v1、第 2 轮实现），两轮都建议偏离插件的 Phaser 默认、零依赖，并把选型交给人 |

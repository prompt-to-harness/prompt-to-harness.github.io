# 3.5 对比材料：2D 还是 3D，要不要引擎

> 状态：2026-10-06 讲师机器上运行一次（Node 24.15.0，Vite 构建；phaser 3.90.0、three 0.186.1、@react-three/fiber 9.8.1）。只测“引入引擎本身”的体积，两个场景各只画一个方块，不是完整游戏，也没有测运行性能。

## 做什么

Game Studio 对 2D 默认推荐 Phaser，3D 推荐 React Three Fiber 或 Three.js（见插件 Skill 原文）。在同一个首页（记忆翻牌 v1）上分别懒加载一个最小场景，看构建产物多了什么：

```bash
courseware/ch03/materials/bundle/compare.sh lab-runs/ch03-mainline/v2-run2/repo
```

## 2026-10-06 结果

| 方案 | 首页主包 | 游戏分包 | 新增依赖 |
| --- | --- | --- | --- |
| 不用引擎（基线） | 190.93 kB，gzip 60.95 kB | — | 无 |
| Phaser 最小场景 | 192.19 kB，gzip 61.48 kB | **1,208.41 kB，gzip 332.41 kB** | `phaser` |
| React Three Fiber 最小场景 | 192.33 kB，gzip 61.56 kB | **926.14 kB，gzip 249.35 kB** | `three`、`@react-three/fiber` |

- **2D 不等于更轻**：Phaser 是完整的游戏引擎（渲染、物理、输入、场景、音频……），最小场景的分包比 3D 方案还大约 30%。
- 懒加载让首页主包基本不变（多约 1.3 kB），引擎只在进入游戏时下载。
- “60 秒躲避与收集”只需要矩形、键盘和碰撞判断，不用引擎、只用 Canvas 也能写；是否值得多下载 300 多 kB，是 3.5 要由人做的判断，不是插件替你定的。

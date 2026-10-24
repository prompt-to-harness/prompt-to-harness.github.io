# 2.2 静态记录与本节适配

> viewer.html 是生成物，不提交；新检出后运行 `make viewers` 生成。

- `build-viewer.py`：从 [`materials/iteration/run-20261024/trace.json`](../../../materials/iteration/run-20261024/README.md) 和本目录 `selection.json` 生成自包含的 `viewer.html`（claude-tap 0.1.146 渲染，适配层沿用 2.1 已核验的 `demos/ch02-static-trace/viewer-bridge.js`）。每个定位点都要在指定记录里找到原文，记录指纹变化时停下，不自动沿用。
- `selection.json`：p22、p24、p27 各步对应的定位点。
- `lesson-embed.js`、`lesson-embed.css`：本节适配，交互与 2.1 p07 相同：左侧按钮与播放器步骤一一对应，可放大（顶部同样有定位按钮，Esc 收起）或单独打开。不读 iframe 的 DOM，只用 postMessage，file:// 下也能用。

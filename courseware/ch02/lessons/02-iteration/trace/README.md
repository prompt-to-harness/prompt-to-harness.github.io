# 2.2 静态记录

> viewer.html 是生成物，不提交；新检出后运行 `make viewers` 生成。

- `evidence.json`：p22、p24、p27 各步对应的观察点、按钮文字和阅读节选。公开数据在 [`materials/iteration/run-20261024/`](../../../materials/iteration/run-20261024/README.md)；指纹不符、观察点或节选找不到时，构建停下，不自动沿用。
- 生成：`uv run courseware/tools/tracekit.py courseware/ch02/lessons/02-iteration/trace/evidence.json`，claude-tap 0.1.146 渲染，不调用模型。
- 页面上的交互是全课共用零件 `.p-evidence`（`courseware/shared/parts/evidence-trace.*`、`trace-bridge.js`），说明见[零件库](../../../../../docs/production/parts.md)。

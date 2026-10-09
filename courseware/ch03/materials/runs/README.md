# 第 3 章运行对比页：数据与生成

> 状态：原型（2026-10-09），见[提案](../../../../docs/outline/proposals/2026-10-09-ch03-run-gallery.md)。页面在 [`courseware/ch03/runs/`](../../runs/index.html)，未经讲师审阅，未试讲。

| 文件 | 作用 |
| --- | --- |
| `annotations.json` | 人工标注：不变的条件、对比矩阵的每一格、每轮的发现与证据位置（`where` 可为数组）、共性卡片 |
| `build-gallery.py` | 读标注与 `lab-runs/ch03-mainline/<dir>/`，写出 `courseware/ch03/runs/data.js` 与 `builds/<id>/index.html` |

```bash
uv run courseware/ch03/materials/runs/build-gallery.py              # 生成数据并重新构建试玩页
uv run courseware/ch03/materials/runs/build-gallery.py --skip-build # 只改了标注时
```

- 需要跑过实验的机器：`lab-runs/` 不随仓库同步。
- 导出内容只包括计划与回答原文、命令首行与退出码、diff、证据代码片段；不导出命令输出、请求记录和 Codex home。写出前统一把本机路径替换成占位符，残留本机路径或疑似密钥时脚本直接失败。
- 试玩页是单文件构建，JS 与 CSS 都内联，由对比页取回后放进 `sandbox="allow-scripts"` 的 `srcdoc` 运行。
- 加新一批运行时：先在 `annotations.json` 里补条目（结论要先对照代码人工核对，`probe2.py` 的误报见 mainline README），再运行脚本，最后重建字体子集（见 `docs/production/fonts.md`）。

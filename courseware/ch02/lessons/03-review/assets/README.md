# 2.3 采用的实际截图

Chromium、DPR 1、reduced motion。主对照视口 1440×800，手机补充图 360×800；整页图在同宽度采集。图片未经人工修补，文件指纹见 sources.json。

- before：homepage-v1（2026-10-24 截取，文件树与快照分支 `ch02/2.2-done-20261024` 相同）。
- round1：2026-10-25 第一轮（首屏是平滑渐变）；experience 为导航高亮核对。
- round2：同会话收到两张图和反馈后的结果（首屏多了交叉细线）；full 用于核对内容和页脚，mobile 用于窄屏检查。
- reference：HTML5 UP 的 [Hyperspace](https://html5up.net/uploads/demos/hyperspace/) 首屏（2026-10-25 截取）。模板作者 HTML5 UP，许可 [CC BY 3.0](https://html5up.net/license)。只引用必要的视口截图作教学对照，不复制完整模板或源码。

round1.png 与 reference.png 就是第二轮按顺序贴进请求的两张 PNG，公开记录里的图片字节与它们一致（`tools/build-lesson.py` 构建时核对）。

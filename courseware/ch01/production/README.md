# 第一章渐进式改造制作记录

## 范围与保护

仅改造 1.1、1.3、1.4、1.5、1.6。1.2 当时是未提交的工作成果，改造期间用文件哈希避免误改；它已提交，该哈希基线已于 2026-10-03 移除，改由 Git 历史兜底。

2026-09-30 起，第 1 章各节改用[课件零件库](../../../docs/production/parts.md)重刷画面（只改各页 `html`，讲稿、步骤、锚点不变）。1.2 已按零件库重做；`check-progressive.py` 的 diff 颜色检查同时接受 `.p-ln.del/.add`，并核对 1.1 页面上的节点与连线与逻辑源一致。共享全站播放器 app.js / speaker.js 未由本次修改。

深蓝平台交付版与共同内部大纲未改。沿用原受众、欢迎语与首页案例、交付文件和验收边界。五节预算分别为 28、15、20、20、10 分钟，预算含操作、暂停与独立练习，未试讲。

## 分镜与播放

| 小节 | 分镜 |
| --- | --- |
| 1.1 | [分镜](../lessons/01-environment/STORYBOARD.md) |
| 1.3 | [分镜](../lessons/03-tools/STORYBOARD.md) |
| 1.4 | [分镜](../lessons/04-prompt/STORYBOARD.md) |
| 1.5 | [分镜](../lessons/05-homepage/STORYBOARD.md) |
| 1.6 | [分镜](../lessons/06-permissions/STORYBOARD.md) |

所有原页面 ID 保留；新增页使用后缀。演示由现有 steps / data-reveal 推进，末步恢复总览；阅读模式展开全部内容。长请求完整保留在内容源，可复制，阅读模式显示全文。1.1、1.3–1.6 加载 `shared/presentation.css`、`shared/evidence.css`、`shared/presentation.js` 与本地字体；1.2 只加载 `presentation.css` 和 `presentation.js`（不加载 `evidence.css`），再叠加自带的 `lesson.css`（仅 P10 的补充规则）。这三个文件被各章共用，改动时要回看第 0、1、2 章。

## 图示来源

使用 idstack-course-builder 组织问题、证据、判断与归纳；frontend-slides / frontend-design 用于分步呈现和视觉检查，仓库 1280×720 规范优先。pretty-mermaid 渲染 first-loop.mmd 的 zinc-light 逻辑稿，archscribe 以同源节点/边生成 paper 手绘 PNG 与可编辑 Excalidraw；正式页面使用可逐节点揭示的内联 SVG。

Mermaid、Archscribe JSON、Excalidraw、PNG、SVG 位于 `../lessons/01-environment/diagrams/`。检查包含 8 节点、8 连线，确认前无修改、检查通过到记录、不符到修正再检查、无法继续到停止。Archscribe doctor 与 --check 通过；未请求视频输出，不需要 ffmpeg。

## 导出与复验

```sh
python3 courseware/ch01/tools/export-chapter-scripts.py --lessons 1 3 4 5 6
python3 courseware/tools/check-courseware.py
python3 courseware/ch01/tools/check-progressive.py --output /tmp/ch01-progressive-qa
```

浏览器检查脚本需要 Playwright 与 Chromium。字体已统一到 `courseware/shared/fonts/`，见[字体说明](../../../docs/production/fonts.md)。所有播放资源本地加载。

## 验证边界

- 浏览器：实际 Chromium 渲染；每状态截图与几何检查，所有终态画面目视复核。测试结论见 [VALIDATION.md](VALIDATION.md)。
- 复制：注入成功和拒绝的 Clipboard API，检查完整文字与失败提示；不声称已测所有浏览器的系统剪贴板权限。
- 练习副本：连接、刷新、独立打开使用 localhost:4174 测试夹具；没有替学员完成真实 Codex 修改。默认 Starter 只作原始预览，跨域副本保留滚动与独立打开。
- 口播：逐步文稿与预算完成；未做有声试读或真人计时，节奏尚待讲师复核。
- 课堂：未试讲，不以渲染通过宣称教学效果。
- 产品与环境：沿用原有未核验标记；M3 教学接入、Claude 名称与定位、安装/账号/工具版本仍待录制前核验。本次没有新增产品能力断言或实操成功记录。

## 后续视觉调整

HTML 预览与 Prompt 采用左侧证据、右侧解读；Prompt 黑底高对比度，长文本可在演示模式内滚动，阅读模式全文展开。原 13 处表格已转换为手绘卡片式呈现，Diff 统一采用 1.2 的红底删除、绿底新增。课时、页码、揭示顺序与教学边界保持不变。详见验证记录的“本轮左右布局与手绘卡片复验”。

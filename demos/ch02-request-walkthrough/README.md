# 连续查看请求：独立样稿

[打开样稿](index.html) · [逐步分镜](STORYBOARD.md)

本页为正式 p08a 的素材源，也可独立预览。承接 p08 找到问候原句，按请求的实际顺序依次查看身份指令、Skills 列表与文件对照、权限、环境、工具定义和这一次的返回，再进入 p09 归纳。原 p10–p13 合入这一页，完整工具调用链由后面的 p07 承担。

## 数据与边界

使用前半组已有问候的同一份初始主请求，不重新调用模型。提取时将保存的 JSON 与只读日志中对应请求逐字段核对；原始请求与公开数据指纹见 `source-manifest.json`。

- 六条消息正文、所有文本块、五个顶层工具定义及完整描述均保留，不做教学删节。阅读视图渲染 Markdown、按需折叠；完整原文用原版静态查看器自由核对，JSON 另有入口。
- API Key 等凭据不得进入公开导出：不导出鉴权请求头，核对正文是否出现凭据。本机项目和 HOME 路径用占位符；排除缓存/会话标识、客户端元数据和响应推理。正常课程指令、工具参数、审批及权限说明均保留。
- `skill-file-excerpt.json` 来自同一课程 HOME 的实际 skill-creator 文件，绑定 SHA256，保留章节原文片段用于比较。它不是请求的一部分，也不是这次问候已经读取的内容。
- 初始响应的真实 exec 读文件调用保留；本页讲解工具定义，完整调用链在 p07 使用另一组真实项目问答记录追踪，不混成同一会话。
- 原始 input_tokens=8651、output_tokens=231，原版侧栏合计 8882；路径替换后的文字不用于重新计算用量。
- 现有素材早于手动命名约定，正式重录仍按本节复现说明核对。

## 源文件与生成

- `STORYBOARD.md`：本样稿的观察顺序与前后衔接。
- `script.json`：样稿口播与操作提示。
- `index.template.html`、`page.js`：讲解外壳与导航；生成 `index.html`。
- `trace.json`：正文完整、路径占位的真实记录。
- `reader.template.html`、`build-reader.py`：用禁用 HTML 的 Markdown 渲染生成阅读视图；不执行原文里的 HTML。
- `viewer-bridge.js`：给原版静态查看器加入教学定位、角色提示和放大通信；不改变原始记录内容。
- `build-viewer.py`：调用固定 claude-tap 0.1.146 导出静态查看器，生成 `viewer.html` 和 `viewer-manifest.json`，附带 MIT 许可。
- `extract-private.py`：维护者从仓库外既有记录生成公开数据；只读数据库，不调用模型。源文件参数由维护者在本机提供。

重新生成页面（不需要模型服务）：

```sh
uv run --with claude-tap==0.1.146 --with markdown-it-py==4.0.0 python demos/ch02-request-walkthrough/build-viewer.py
```

可以直接打开 `index.html`，或从仓库根目录运行 HTTP 静态服务。定位入口之外仍可自由展开原版查看器；放大后按 Esc 返回。正式构建校验素材源及生成物指纹后复制到本节 request/，不修改站点构建规则。

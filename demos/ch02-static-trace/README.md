# 静态 claude-tap 嵌入样稿

2026-10-23，讲师授权的一张独立样稿，未替换正式课件或改变页数。用于评估“少量观察提示＋可放大的真实请求查看器”。

直接打开本目录 `index.html` 即可；需要同时保留 `trace.html` 和仓库的 `courseware/shared/` 字体、logo 资源。观看不需要 Python、uv、本地 HTTP 服务、claude-tap 后台或 API Key。也可以通过本仓库已有的静态服务器访问 `/demos/ch02-static-trace/index.html`。本目录未纳入现有 Pages 发布范围，不能把本地预览链接当作已上线网址。

## 使用

左侧三个入口依次定位本次真实记录的最终回答、读取源码的调用、带回代码的后续请求。右上角“放大记录”在页面内展开查看器并增大文字；按钮或 Esc 收起。仍可在原生查看器内自由选择记录、查看完整 JSON 和搜索。

父子页面通过 postMessage 传递观察位置与放大状态；检查发送窗口身份，兼容 file:// 的不透明 origin，不读取 iframe 的跨源 DOM。依赖的查看器代码和记录数据都嵌入 trace.html，界面不调用本地 /api 服务。外层样稿没有复制代码片段或请求编号。

## 数据与改动

来源是 2026-10-24 重跑的交互会话（`courseware/ch02/materials/request/run-20261024/interactive.json`，9 条：问候 1 条、项目问题 8 条）。依据链 A、C、D 由讲师选定，见 `selection.json`。

`trace.json` 与 run-20261024 的 `interactive.json` 相同：只去掉鉴权请求头、缓存与会话标识、推理的加密部分和本机路径，没有教学删节；可读的推理文字保留。

查看器原生界面与数据呈现来自 claude-tap 0.1.146（MIT，版权见 `LICENSE-claude-tap.txt`）。课程适配仅增加：默认中文、观察定位、文本换行展开、嵌入和放大。为便于阅读，把核心工具输出中的 input_text 原文按换行显示；原结构仍可在“完整 JSON”里查看，没有修改代码或行号。最终回复中的模型判断保留原话，不能默认全部正确。

文件职责：

- `index.html`：外层一页样稿和放大交互。
- `trace.json`：脱敏的真实输入数据。
- `viewer-bridge.js`：薄适配层；不保存整份 viewer 源码的人工修改。
- `build-viewer.py`：从固定版本包及脱敏数据生成 `trace.html`；按内容及 call_id 列出候选，再读取讲师确认的 selection.json；不默认选择第一条。
- `trace.html`：包含依赖和数据的生成物，约 0.47 MB。

只在需要重新生成查看器时运行：

```sh
uv run --with claude-tap==0.1.146 python demos/ch02-static-trace/build-viewer.py
```

新运行会使记录指纹变化，构建先打印候选并停止，不覆盖当前查看器。先运行下面的命令列出调用、返回位置及回答候选，供讲师确认：

```sh
uv run --with claude-tap==0.1.146 python demos/ch02-static-trace/build-viewer.py --list-candidates
```

收到讲师明确确认后才更新 selection.json 中的记录指纹、调用、返回位置和回答；不能由 agent 为让构建通过而擅自确认或沿用第一条。viewer-manifest.json 绑定生成物与已确认的选择，正式课件构建也检查它，防止新数据配上旧查看器。新运行若找不到目标源码读取及其返回，构建失败，不能默默复用上次定位点。本样稿仍以当前项目的 src/App.tsx 为观察目标；推广成通用机制前需要明确每次运行的讲述目标。升级 claude-tap 时需重新核验适配层，不声称版本无关。

## 本轮验证

Chromium 实际验证：file:// 直接打开、内嵌查看器、三个观察位置、核心代码原文、放大/收起、iframe 焦点下 Esc、HTTP 预览、手机 390 宽无页面级横向滚动。file:// 测试阻断所有 HTTP/HTTPS，交互仍可用，未产生网络请求或浏览器脚本错误。make check 通过。未验证 Safari/Firefox、实际录屏观感、讲师小窗叠加与学生学习效果。

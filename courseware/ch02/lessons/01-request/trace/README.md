# 2.1 静态记录

> viewer.html、compare-*.html（plain/named）、config-*.html（model/perm 四份）是生成物，不提交；新检出后运行 `make viewers` 生成，输出与输入固定，重复生成逐字节一致。

- `evidence.json`：p08a（问候那一份请求的六处）和 p07（三条依据链 A/C/D，各看回答、读取调用、后续请求）的观察点、按钮文字和说明。两页共用 [`materials/request/run-20261024/interactive.json`](../../../materials/request/run-20261024/README.md) 一份记录、一个 `viewer.html`。记录指纹变化或观察点找不到时构建停下；重跑后先列候选，经讲师确认再改：

  ```sh
  uv run courseware/tools/tracekit.py courseware/ch02/lessons/01-request/trace/evidence.json --list-candidates
  ```

- 页面上的交互是全课共用零件 `.p-evidence`（`courseware/shared/parts/evidence-trace.*`、`trace-bridge.js`，说明见[零件库](../../../../../docs/production/parts.md)）：左侧观察点与播放器步骤一一对应，p07 的 C、D 回答与调用由分组标签切到；p08a 的阅读视图由 `../tools/request_reading.py` 渲染（禁用 HTML 的 Markdown，长段落折叠，不删内容）。可放大、单独打开，Esc 收起；file:// 下通过 postMessage 通信并验证发送窗口，不读 iframe 的 DOM。
- 原 p14 不再注册为独立页；本节 index.html 把旧 #p14 转到 p07 的调用步骤。其余稳定 id 不重排。

p14a 的 compare-plain.html、compare-named.html 及对应 JSONL 是另一组独立会话的完整记录，仅通过普通链接单独打开，没有嵌入适配。来源、条件和重建命令见 [run-20261024](../../../materials/request/run-20261024/README.md)。这两份记录未挑选某一次调用；侧栏保留所有请求。

p16/p15b 的 config-*.html 为 2026-10-23 新跑的权限/模型适配记录。两个 *-compare.html 是独立对照页，定位差异并汇总从同一捕获生成的数字；四份原生查看器保留消息顺序、实际参数和回复，作明确教学删节。来源、变量、统计口径及重建见 [配置对照说明](../../../materials/request/config-pairs-20261023/README.md)。单独打开的记录和嵌入查看器都由 `courseware/tools/tracekit.py` 的 `render_viewer` 渲染。

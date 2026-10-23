# 来源核验

核验日：2026-10-23。均为项目自身的一手资料，已核实文档说法；本次没有安装和实测各工具。作者按项目维护方登记，未标日期的文档不猜发布日期。

## claude-tap

- 作者：liaohch3/claude-tap 维护者；版本 v0.1.146，未核版本发布日期。
- [固定版本 README](https://github.com/liaohch3/claude-tap/blob/v0.1.146/README.md#architecture)；[原始正文](https://raw.githubusercontent.com/liaohch3/claude-tap/v0.1.146/README.md)。GitHub 网页正文抓取失败，原始 README 已用 curl 读取，核对 Architecture / How it works 和 Codex CLI auth modes。
- 已核实：启动代理及子进程；能设置 base URL 的客户端指向反向代理；请求返回写本地 trace；默认开启实时查看；流式数据边到边转发。Codex 默认反向代理使用临时 provider 并关闭 WebSocket，以 HTTP/SSE 记录请求；README 称不修改持久 config.toml。
- 不能推导：所有客户端都同一种接法；代理看到服务内部全部处理；所有鉴权内容都自动安全。本图只画本章路径，鉴权经过代理，不绘制真实密钥。
- [架构图原件](https://raw.githubusercontent.com/liaohch3/claude-tap/v0.1.146/docs/architecture.png)已由 capture-source.py 截图并打开检查。原图主题是 Claude Code，包含旧格式文件名，中文图用文字说明校准，不照搬这些细节。

## mitmproxy

- 作者：mitmproxy 项目；文档未标发布日期。
- [Proxy Modes](https://docs.mitmproxy.org/stable/concepts/modes/) 已打开核对 Reverse Proxy 和 Regular Proxy。
- 已核实：reverse 模式作为服务端接受请求，发往预配置目标，响应再回给客户端；常规代理指引涉及安装 CA。不能混写成反向代理一定要给 Codex 安装 CA。

## LiteLLM

- 作者：BerriAI / LiteLLM 项目；文档未标发布日期。
- [UI Logs](https://docs.litellm.ai/docs/proxy/ui_logs) 已打开核对。
- 已核实：request/response 正文默认不存储；可用 store_prompts_in_spend_logs 或 UI 开关启用。这里只建议为已有网关的项目备选，未验证与本章 Codex 配置兼容。

## Langfuse

- 作者：Langfuse 项目；文档未标发布日期。
- [Observability overview](https://langfuse.com/docs/observability/overview) 已打开核对。
- 已核实：tracing 记录 LLM 调用、工具执行、输入输出等；通过 SDK / 集成采集，上报异步进行。推论：不能把一般 tracing 直接画成任意 CLI 的无接入网络抓包，需要先确认集成范围。

## 样稿复现

图元和输出在 courseware/ch02/materials/external/。预览脚本 preview.py 打开本地真实课件后只改浏览器 DOM，不写课件源文件。运行：

```bash
uv run courseware/tools/redraw.py courseware/ch02/materials/external/tap_proxy_figures.py
uv run 'docs/research/notes/第 2 章请求查看方案/preview.py'
```

本机边界覆盖 Codex、代理和本地记录，远端单独放模型服务。两对箭头均核对方向；未在图里承诺请求字节完全不变，也未画代理能看见服务端检索。

## 仓库检查

2026-10-23：make check 通过（退出码 0）。课件、站点构建、渐进式展示、20 个课件页展示检查与外链检查均无错误；保留 7 条既有编辑提示。两版候选样稿另经浏览器打开和目视检查，内容区无溢出。

# 权限与模型适配：2026-10-23 真实对照

两组各两个独立新会话，每边仅运行一次，使用相同问候“你好，用一句话介绍你能帮我做什么。”。全部请求成功，每个会话只有一个 API 请求、没有工具调用，项目文件均无改动。本材料比较请求的组成，不比较编程质量或执行效率。

## 直接展示

- [权限说明与可写目录](../../../lessons/01-request/trace/config-permissions-compare.html#permissions)
- [模型基础指令](../../../lessons/01-request/trace/config-model-compare.html#base)
- [工具与数量](../../../lessons/01-request/trace/config-model-compare.html#tools)
- [实际推理参数](../../../lessons/01-request/trace/config-model-compare.html#reasoning)

每个对照页由本目录 summary.json 和脱敏记录生成，含真实摘录、数量与原生 claude-tap 静态记录入口。原生查看器保留原回复和消息顺序，系统说明及工具定义作教学删节，路径与身份信息脱敏。直接打开本地 HTML 即可；无 iframe、后台服务、模型调用或新增 PPT 嵌入组件。

## 固定条件与唯一变量

源码起点是 course-starter ch02-start-v1 的 `8e9a323174411a011f87e230450b9115d09b7dea` 快照，同一个干净项目目录串行运行。Codex CLI 0.163.0、MiniMax-M3.1-Flash、claude-tap 0.1.146。使用固定来源 Agent Lab `691d15c58a3b89abc36bfcf90bc6b7072423ad4c` 的 prepare_environment 生成隔离 HOME，再直接启动同依赖环境中的 claude-tap / Codex；实验所需的删除目录引用不会被启动器再次写回。每边一个新 HOME，无前置会话，--no-daemon，exec，审批均显式 never。没有使用个人登录。密钥只用于 API 鉴权，不传入模型运行命令的环境。

- 权限组：只改变 read-only / workspace-write，模型目录均开启。
- 模型组：沙箱均 read-only，仅删除 model_catalog_json 引用；保留相同的显式 model_reasoning_effort=max、524288 上下文窗口及其他配置。这与旧 clean-codex 关闭目录时同时移除窗口配置的实验不同，不能混用旧数据或旧结论。

## 结果（从捕获请求生成）

| 权限组 | 只读 | 工作区可写 |
| --- | --- | --- |
| 权限段字符 | 286 | 602 |
| 环境消息字符 | 604 | 1495 |
| API 输入 token | 7528 | 7889 |

| 模型组 | 有目录 | 缺少目录 |
| --- | --- | --- |
| 第一条基础指令字符 | 145 | 16979 |
| 顶层工具项数 | 5 | 9 |
| API 输入 token | 7527 | 8926 |
| reasoning | effort=max | effort=max, summary=auto |

本次缺少目录时仍发送 max，因为显式设置保持不变；不再使用旧稿“没有发送推理档位”的说法。第一条基础指令不是全部系统说明。工具项数按顶层 tools 数组计，含 namespace 和 web_search，不按嵌套工具逐个累计；更多不等于更好。

字符统计在脱敏前按 Unicode 字符计数，权限段去首尾空白；摘录脱敏后长度不能反算原长度。输入 token 为 API 原始 usage，包含缓存。各一次，不推固定比例、费用或质量结论；没有模拟交互审批或得出审批代价结论。

## 生成与校验

原始 SQLite、配置、stdout/stderr、完整展开请求留在被忽略的 lab-runs/ch02-context/config-pairs-20261023/。logs/run.py、extract.py、export.py 记录启动、展开和脱敏统计过程。两组执行完毕后统一运行 lab-collect.mjs，四份 run.json、diff.patch 和 dist 留在各组 collected/；均构建成功、零文件改动。依赖安装及构建是收尾验证，不是问候任务中的模型行为。

公开 JSON 删除请求头、账号及会话身份、加密推理，保留差异片段、实际 reasoning 参数、工具名和原 API usage。工具定义全文与无关说明删节。claude-tap 原生查看器固定 0.1.146，MIT 许可沿用本节 trace/LICENSE-claude-tap.txt。

```sh
uv run --with claude-tap==0.1.146 python courseware/ch02/materials/request/config-pairs-20261023/build-records.py
uv run python courseware/ch02/lessons/01-request/tools/build-lesson.py
```

第一步生成四份原生记录、两份独立对照页及指纹清单；第二步读取同一 summary.json 的数字，核对输入和生成页面哈希，更新课件。若更换捕获记录，需先重新核对条件与实际差异，再更新数据和口播；不能默认沿用旧结论。

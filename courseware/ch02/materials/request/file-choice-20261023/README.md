# 点名相关文件：2026-10-23 独立对照

> 2026-10-24 起课件改用 [run-20261024](../run-20261024/README.md) 的重跑数据（C2-90）；本目录只存档，不再构建。

本目录是当前 p14a 的主用记录。两份记录来自两个无前置问候的全新 read-only 会话，真实执行各一次。另一次问候后 fork、workspace-write 的实验只作补充，详见[复现说明](../../../lessons/01-request/tools/README-demo.md)；其 84,879/46,084 输入统计不用于本页。PPT 只保留条件、观察顺序与入口，完整调用过程在独立静态查看器中浏览。可以直接用浏览器打开本地文件，无需服务或 API。

- [不点名完整记录](../../../lessons/01-request/trace/compare-plain.html)
- [点名完整记录](../../../lessons/01-request/trace/compare-named.html)
- [运行配置、完整 Prompt、原回复与汇总](summary.json)

## 条件与观察

起点为 course-starter 的 ch02-start-v1 源码快照 `8e9a323174411a011f87e230450b9115d09b7dea`。同一干净工作目录，串行运行两个全新 codex exec 会话，使用独立隔离 HOME，无前置问候。两次结束后工作区均无改动。配置相同：Codex 0.163.0、MiniMax-M3.1-Flash、能力目录开、max、read-only、claude-tap 0.1.146；Agent Lab 来源固定为 `691d15c58a3b89abc36bfcf90bc6b7072423ad4c`。

问题一致：项目区显示什么、数据在哪、文件行号依据、不确定不猜。点名组仅在末尾增加“相关文件：src/App.tsx。”，没有限制只能读该文件。

先核对回答与依据，再看遗漏和读取范围，最后比较代价：

| 本次观察 | 不点名 | 点名 |
| --- | --- | --- |
| 核心事实 | 与源码相符 | 与源码相符 |
| 请求数 | 7 | 4 |
| 外层 exec 调用数 | 6 | 3 |
| 累计输入 token | 66,315 | 34,894 |
| 其中缓存输入 | 55,388 | 25,984 |
| 输出 token | 1,584 | 801 |

两边均找到“学习笔记／记录课程练习”，数据在 App.tsx 第 1–6 行，渲染第 19–31 行、字段输出第 26–27 行。已逐行验证工具返回的完整 App.tsx 与起点源码一致。点名组仍读取 main.tsx、占位素材、CSS 等；不点名组还查询了 PROMPT_V1.md 等过程材料。完整原回复保留，模型额外的“唯一数据源”“未发现不确定项”等断言不能自动视为已核实；不点名回复末尾关于文档的表述还有笔误。未运行项目浏览器验收，核心事实结论基于源码核对。

输入量是逐次请求累计（含重复历史和缓存输入），不是单次 Context 长度，也不等于费用。查看器耗时是记录的 API 时长合计，summary 的 seconds 是进程总耗时，两者不同。各一次且缓存命中不同，不据此推断普遍倍率、速度或计费结果。

## 数据与维护

原始数据库与配置留在被忽略的 `lab-runs/ch02-context/p14a-pair-20261023/`。公开的 plain.json、named.json 保留全部调用及返回和最终回复；删除请求头、安装与会话身份、加密推理，删节系统说明、环境说明及工具定义全文，替换本机路径、用户和邮件信息。token 统计沿用原 API usage，删节后的文本长度不用于反算 token。

使用 claude-tap 0.1.146 原生查看器（MIT；许可见本节 trace/LICENSE-claude-tap.txt），没有新增 PPT 嵌入组件。初始显示最后回复，侧栏可查看所有请求。重建：

```sh
uv run --with claude-tap==0.1.146 python courseware/ch02/materials/request/file-choice-20261023/build-records.py
```

生成两份自包含 HTML 及 JSONL，viewer-manifest.json 记录源数据及 HTML 哈希。本轮没有挑选单条依据链；以后若要挑选，必须先列候选交讲师确认，不默认取第一条。

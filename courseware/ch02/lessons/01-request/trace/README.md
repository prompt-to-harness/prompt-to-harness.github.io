# p07 静态记录与本节适配

> viewer.html、compare-*.html（plain/named）、config-*.html（model/perm 四份）是生成物，不提交；新检出后运行 `make viewers` 生成，输出与输入固定，重复生成逐字节一致。

p07 将原 p14 的依据追踪合入一页，p16a 继续归纳 Context；没有修改其他页面的知识范围。

- viewer.html、trace.json、LICENSE-claude-tap.txt：本节 build-lesson.py 从已核验的 demos/ch02-static-trace/ 生成或复制，不手改。
- lesson-embed.css、lesson-embed.js：本节独立适配源，连接三个讲述步骤与静态查看器、管理放大窗口。没有改共享播放器。

直接打开上级 index.html 可用。数据与查看器都在本目录，不需要 fetch、claude-tap 进程或本地 HTTP 服务；也不依赖 demos/ 在观看时存在。file:// 下通过 postMessage 通信并验证发送窗口；不读取 iframe 的跨源 DOM。发布时 tools/build-site.py 按既有规则复制本目录。

查看器按固定 claude-tap 0.1.146 生成。记录来自 2026-10-23 真实排练，经过教学删节；系统说明、工具定义全文及非核心工具输出省略处有标记，核心 34 行源码返回与最终回答保留。Unicode 在生成的供应商脚本中使用等价转义序列，运行时文本不变；供应商界面沿用自身字体，不改课程共享字体。

页面及放大窗口的“单独打开”入口会新开本组静态记录，并定位当前观察位置。

更新步骤：先更新样稿的教学脱敏输入，列出候选，收到讲师明确确认后再更新 selection.json 并生成 trace.html；最后运行本节 tools/build-lesson.py。本节构建会核对数据指纹与已确认选择，防止发布过期查看器。构建不需要启动代理或调用模型。上游数据和查看器的适配说明见仓库 demos/ch02-static-trace/README.md。

p14 不再注册为独立页；本节 index.html 在首次打开旧 #p14 时定位至 p07 调用步骤，本节适配脚本也处理页内旧 hash。其余稳定 id 不重排。

p14a 的 compare-plain.html、compare-named.html 及对应 JSONL 是另一组独立会话的完整记录，仅通过普通链接单独打开，没有嵌入适配。来源、条件、局限和重建命令见 [对照说明](../../../materials/request/file-choice-20261023/README.md)。这两份记录未挑选某一次调用；侧栏保留所有请求。

p16/p15b 的 config-*.html 为 2026-10-23 新跑的权限/模型适配记录。两个 *-compare.html 是独立对照页，定位差异并汇总从同一捕获生成的数字；四份原生查看器保留消息顺序、实际参数和回复，作明确教学删节。权限、基础指令和工具入口展开对应区块；reasoning 入口展开并定位实际请求 JSON 字段。来源、变量、统计口径及重建见 [配置对照说明](../../../materials/request/config-pairs-20261023/README.md)。本节构建校验指纹，页面数字读取同一 summary.json；无嵌入组件。

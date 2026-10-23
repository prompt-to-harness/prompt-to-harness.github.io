# p16a → p14a → p16 衔接与权限建议

2026-10-23；基于当前工作区，继承他人改动未重置。讲师已确认页级讲法与权限建议，按 lesson-polish 从分镜同步页面源、阅读说明、script.json 和生成物；18 页 53 步不变。

## 讲法

p16a 用“代码先查找、再进入 Context”提出主动提供相关信息的问题。p14a 用讲师指定标题“已经知道文件在哪，要不要告诉它？”，先核对依据，再看本次请求轮次、累计输入和整次耗时，最后独立打开完整记录。输入含缓存及重复历史，不是单次 Context 长度；两组各一次，不推固定比例。结尾从主动提供信息转向配置加入说明，接 p16。

p16 区分沙箱范围和审批策略：配置会影响模型收到的权限说明，本地机制落实边界；获准执行后的工具返回进入后续请求。改可信项目建议 workspace-write + on-request（Auto），检查可只读，不建议日常 YOLO。Auto-review 是另一个概念，仅更换审批审核者。没有声称批准弹窗本身一定作为单独消息入 Context，也不声称更大权限必然减少轮次或费用。

## 核实依据

- 2026-10-23 实查本机 Codex CLI 0.163.0 --help：read-only / workspace-write / danger-full-access；on-request / never；绕过审批与沙箱的参数另列。未执行该绕过参数。
- [OpenAI Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)：Auto 预设是 workspace-write + on-request；YOLO 绕过沙箱和审批。实际边界受环境、网络配置、规则及管理策略影响，不教“工作区内一切都无条件放行”。
- [OpenAI Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review)：更换审核者不扩大沙箱权限。仅用于讲师术语核对，页面不展开此功能。
- p16 原有 2026-10-20 exec 实测只比较只读/可写，审批为 never。保留旧记录事实与复现入口，不伪装成本次 Auto 审批流程实验，不重新引用旧字符数为推荐依据。

## 检查范围

已实际检查 Chromium file:// 和 HTTP 连续导航 p16a → p14a → p16；p14a 两个记录入口能独立打开完整 7/4 请求。390/320px 阅读模式无横向溢出，无脚本错误。桌面截图检查时发现记录入口接近页脚，已缩小本页表格行间距；查看修正后的截图。make check 完整复检结果见本轮汇报。

未做录制当天重录、真人试读或学员试讲。章 LOG/README 的整合项记入后半组 handoff，不改章范围、大纲或共享播放器。

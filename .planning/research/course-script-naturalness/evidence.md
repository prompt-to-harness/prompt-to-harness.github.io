# 证据账本

研究日期：2026-09-22。Verified 仅表示来源直接支持相应事实，不表示该方法对本课程效果已验证。

| ID | 主张 | 来源 | 来源类别 | 日期 | 证据 | 关系 | 置信度 | 限制 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| L01 | 本课程已有针对信息取舍、口语、画面及同步的明确原则 | [课程共识](../../../docs/design/course-design-principles.md#讲述与改稿原则) | 本地一手 | 2026-09-21 | 第 55–69 行规定先具体后归纳、重复需新增信息、对照画面读一遍 | 支持 | Verified | 原则存在不证明每节完成验收 |
| L02 | 1.5 的口播包含制作状态和编写模型回答的说明 | [1.5 逐字稿](../../../courseware/ch01/lessons/05-homepage/script.md) | 本地一手 | 2026-09-21 | “不为录课预写一个永远正确的模型回答”；“实际 Starter Repo 没选定前，不能据此宣称构建路径已经验证” | 支持 | Verified | 属于面向谁说、放在哪里的问题，不是这些提醒本身不正确 |
| L03 | 1.4–1.6 的逐字稿从浏览器相同内容源导出 | [导出脚本](../../../courseware/ch01/tools/export-chapter-scripts.py) | 本地一手 | 访问 2026-09-22 | scenes[].script 同时作为口播导出；脚本执行的是格式转换 | 支持 | Verified | 同步可以避免版本漂移，不能据此判断内容自然度 |
| L04 | 录制共识已经明确公开材料和内部制作说明分离 | [录制共识](../../../discuss/2026-09-21-recording-consensus.md#展示方式与公开内容) | 本地一手 | 2026-09-21 | 页面与讲解全文面向学员，用自然课程口吻；时长、画面切点和剪辑说明独立留备课文档 | 支持 | Verified | 因而主要是执行缺口，无需再建同义规范 |
| L05 | 2026-09-22 小试点只改三节内容源的口播字段，并已重新导出逐字稿 | [小试点记录](pilot.md) | 本地一手 | 2026-09-22 | 1.4、1.5、1.6 各选一个讲述点；页面对象、请求、练习和画面保持不变；静态检查通过，真人试读待做 | 支持 | Verified | “自然”仍未通过音频和目标学员盲听验证 |
| C01 | 课程视频应管理认知负荷：分段、去掉无助于目标的信息、让声音和画面互补，并加入主动学习 | [Brame, Effective Educational Videos](https://doi.org/10.1187/cbe.16-03-0125) | 原始综述/开放论文 | 2016 | 表 1 给出 signaling、segmenting、weeding、matching modality、conversational language 与 guiding questions；正文提醒冗余视觉/听觉会增加负荷 | 支持 | Verified | 综述基于既有研究；“≤6 分钟”是该文汇总的经验建议，不应直接变成本课程硬阈值 |
| C02 | 写给耳朵要从写给眼睛的习惯中分离出来：短而有变化的句子、主动语态、清楚转场、停顿、朗读检查是常见制作建议 | [The eLearning Coach: The Art of Writing Great Voice Over Scripts](https://theelearningcoach.com/elearning_design/the-art-of-writing-great-voice-over-scripts/) | 教学制作实践 | 访问 2026-09-22 | 建议尽快进入重点、每句一个意思但避免全是短句、用 silence、读出全文、分阶段编辑 | 支持 | Supported | 从业者方法文章，非受控实验；适合转为工作检查项，不当作学习效果因果证明 |
| C03 | 录音脚本需要和 storyboard 分开承担职责，并提前处理发音、强调、停顿、分页和文件命名，减少录音现场摩擦 | [The eLearning Coach: 8 Tips to Prepare Audio Scripts](https://theelearningcoach.com/media/audio/audio-recording-scripting-conventions/) | 教学制作实践 | 访问 2026-09-22 | 建议单独整理 voiceover script，清除拗口/长句；标注 emphasis、pronunciation、pause，并让录音者预先看到脚本 | 支持 | Supported | 适用于制作管线；不要求公开课把制作标记全部念给学员 |
| C04 | 对着稿子读会改变自然语流，朗读者可用少量停顿、重音、换行、语气和读音标记辅助回到自然表达 | [NPR Training: Marking scripts](https://www.npr.org/sections/npr-training/2025/09/29/g-s1-90460/how-marking-scripts-can-help-you-sound-more-natural) | 专业媒体一手实践 | 2025-09-29 | 提议只在有用处时用斜线，给承载含义的词加重音，按思路换行，标注难读姓名，并明确“读出再调整” | 支持 | Supported | 广播场景；本课应借用复听流程，不照搬符号体系 |
| C05 | 口播反馈应定义目标质量并通过回听讨论内容和声音；目标是帮助讲述者保持自己的可信声音，而不是模仿一个机构声线 | [NPR Training: The aircheck](https://www.npr.org/sections/npr-training/2025/05/28/g-s1-64237/the-aircheck-how-to-use-it-in-vocal-coaching) | 专业媒体一手实践 | 2024-08-22 | 质量项包括 welcoming、authentic、engaged、appropriate tone；建议询问删掉哪些词、哪里需要呼吸、是否像在读稿 | 支持 | Supported | 属于播音教练方法；本课程可把“aircheck”缩为作者与一名听者的短回听 |
| C06 | Google 的开发文档风格建议直接、友好、简单、少术语；建议朗读或默读检查拗口处，同时提醒文档不必逐字模仿口语 | [Google Developer Documentation Style Guide: Voice and tone](https://developers.google.com/style/tone) | 一手风格指南 | 更新 2026-05-27 | 建议 conversational/friendly/respectful、clear/direct；“try reading parts ... out loud”；同时强调首要目标是清晰有用 | 支持 | Verified | 面向英文开发文档；语言层面的例子需按中文重写 |
| C07 | AI 输出的风格控制更可靠的做法是给清楚的目标、上下文和贴近任务的示例，并按需要分开 instructions/context/input；“不要”类规则不应取代正向示例 | [Anthropic prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) | 一手产品文档 | 访问 2026-09-22 | 文档建议 clear/direct、给 context、3–5 个相关多样示例、结构化标签；并建议说明要做什么而非只列禁止项 | 支持 | Verified | 供应商文档不是独立效果比较；需用本课程小样例校准 |
| C08 | LLM 评审可处理开放文本，但非确定且需要和人工判断校准；人类评审适合做 gold standard，代码检查适合确定性条件 | [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | 一手工程实践 | 2026-01-09 | 对 code/model/human graders 列出优缺点，明确 model grader 需 human calibration；区分 capability 与 regression eval | 支持 | Verified | AI Agent 评测场景；本报告只借其评审分层，不声称课程脚本等同 Agent eval |
| C09 | 社区 humanizer skill 将 AI 味归因于结构性模式，如无对象的反驳、空洞收束、机械三元组、过度破折号和制作残留，并要求保留事实后朗读复查 | [blader/humanizer](https://github.com/blader/humanizer/blob/main/SKILL.md) | 社区开源实践 | 访问 2026-09-22 | “mark tells → rewrite while preserving claims → read aloud → check lost/added facts”；明确单个弱特征不能机械触发修改 | 支持 | Tentative | 维护者实践，不是语言学或教学效果研究；可作为启发式扫描，不可当自动判定器 |
| C10 | AI 评测社区常用“领域专家二元判断 + 具体 critique”先明确什么算通过，再逐步建立更复杂评估 | [Hamel Husain: Using LLM-as-a-Judge](https://hamel.dev/blog/posts/llm-judge/) | 可信二手工程实践 | 2024-10-29（页面 2026-09-01 更新） | 建议由 principal domain expert 判断 pass/fail 并写 critique，避免未经校准的 1–5 分数；强调把审核材料放在同一屏 | 支持 | Supported | 这是 AI 产品输出评审方法；类推到讲稿时应缩小为少量样稿和人工回听 |

## 访问记录

| ID | 主张 | 来源 | 来源类别 | 日期 | 证据 | 关系 | 置信度 | 限制 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C11 | 中文 Humanizer-zh 包含与入门教学存在冲突的启发式 | [Humanizer-zh](https://github.com/op7418/Humanizer-zh/blob/b4b4fe5c9bc4f14f1be0614f8c2c234161734a6e/SKILL.md) | 社区开源一手文本 | 访问 2026-09-22 | 建议“跳过……手把手引导”“三段式列举改为两项或四项”，用 45–50 分宣称去除 AI 痕迹；完整示例新增原文没有的功能及用户反馈 | 限定/反证 | Verified | Verified 仅指文件确有这些指引；不认可阈值或改写的事实可靠性；源自英文 humanizer，不算独立验证 |
| C12 | Anthropic 文档共创 skill 包含无历史上下文的读者测试，要求找模糊、错误假设和矛盾 | [doc-coauthoring](https://github.com/anthropics/skills/blob/00756142ab04c82a447693cf373c4e0c554d1005/skills/doc-coauthoring/SKILL.md) | 一手公开工作流 | 访问 2026-09-22 | Stage 3 给 fresh Claude 仅文档和读者问题，然后修正缺口；最后仍建议人类复核事实和效果 | 支持 | Verified | 是一般文档工作流，非中文授课研究；本次仅研究其方法，未调用该 skill 或子代理 |

- Google 搜索：HTTP 429，未用搜索页作事实依据。
- DuckDuckGo 返回 202 人机验证；Bing 虽返回 200，但多个精确查询结果偏离主题，未用于证明社区共识。
- Brame 的 PMC 网页是验证页；实际阅读全文通过 [Europe PMC XML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5132380/fullTextXML)。这是综述，不是本课程的新实验。
- Cathy Moore 页面 403；Christy Tucker 站内搜索可用、两篇正文 403；ERIC 请求超时。均未据摘要提取结论。
- 可变 GitHub 来源固定版本：blader/humanizer `9862685f575c65a8247f90369951df1b3416e3d6`；Humanizer-zh 和 doc-coauthoring 版本见上表。完整原文临时缓存在 `/tmp/course-script-research/`，仓库只保留独立摘要和链接。

# 内容依据：以哪份文档为准

> 从 `AGENTS.md` 拆出，按需阅读。规则本身没有改动。

课程设计在多台机器、多个 agent 和多位讲师之间协作。讨论得出的决定、偏好和核验记录写进本仓库（或私有仓库）的对应文件，不只存在于某个 agent 的本地记忆中。

- `docs/course-outline.md`：平台交付版，约束对外承诺（详情页、讲师信息、定价与宣传填写项），相对稳定。
- `docs/outline/course-outline-internal.md`：两位讲师共同维护的教学细节（目标、演示、练习、产出、验收）。
- `docs/outline/proposals/`：未合并的个人补充或冲突方案，共同确认后才并入内部大纲。
- 课次、知识点、演示、练习、产出与验收以这两份大纲为准，不另起结构。两份大纲冲突时，先让讲师确认并修订大纲，再改课件。
- 每章有一位负责讲师（2026-10-21 讲师确认）。只涉及本章的故事线、分镜、课件和章内安排，由负责讲师确认即可；章末一节若由另一位讲师讲，该节由讲它的讲师确认。跨章安排（概念在哪几章出现、章间交接）、全课原则和平台交付版仍需两位讲师确认。文档里写着“待两位讲师确认”、但只涉及单章的事项，按本条理解。
- 章节名、节标题不要求与大纲逐字一致：大方向和范围对得上即可，写故事线、分镜和细化内容时可以微调措辞。审查时不把标题措辞差异报成问题，只有范围或顺序变了才提（2026-10-11 讲师确认）。
- `docs/design/` 是早期内部讨论与指引，不是第二份已确认基线；采纳前对照当前大纲重新评估。旧版方案与演示草稿已清理，需要追溯时查 Git 历史。
- 软件工程 0.5：`docs/software-engineering/software-engineering-thread.md` 是原则文档，`software-engineering-problem-pool.md` 是候选池；试点卡片不是正式课次。
- 每节的口播以该节目录下的 `courseware/**/script.json` 为准（按页面 id 存每页口播数组）；`lesson.js` 里的 `script` 是由它生成的，不要只改生成物。改口播可直接在 `speaker.html` 里逐句改（运行 `sh tools/edit-courseware.sh` 起本地服务打开），或编辑 `script.json` 后运行 `courseware/tools/rebuild-lesson.py`。
- 视觉参考以 `demos/visual-system/` 和 `docs/production/visual-design-system.md` 为准。

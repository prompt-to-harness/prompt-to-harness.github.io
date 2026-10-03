---
name: lesson-polish
description: 写、改或审查课件某一节（页面文案、口播稿、讲解全文）时使用。先跑机器检查，再逐页对照 docs/production/editorial-checklist.md 的编辑规则，输出带规则编号的问题清单并修改。
---

规则的唯一来源是 `docs/production/editorial-checklist.md`。本 skill 不复制规则正文，只规定顺序。

1. 读 `docs/production/editorial-checklist.md`，以及要改那一节在 `docs/outline/course-outline-internal.md` 里的范围。
2. 找内容源再改：页面看 `lesson.js` 是否由 `tools/build-lesson.py` 或 `build-content.py` 生成（ED-011）。改源文件，再重新生成。
3. 跑 `python3 courseware/tools/check-editorial.py`。error 必须清零；hint 逐条判断是否增加信息，不机械删除。
4. 逐页人工对照 ED-002 至 ED-010，只看屏幕文字、口播、讲解全文各自该承担的内容。输出格式：`页面或段落 · ED-编号 · 卡住的原句 · 建议`。ED-002 需要“复述对象、依据、下一步”，做不到就标出缺的那个连接。
5. 修改后重新生成，跑 `python3 courseware/tools/check-courseware.py` 和 `python3 tools/build-site.py`。
6. 报告时区分：已机器检查、已人工对照、未检查（如试讲、非作者复述）。不要写教学效果已验证。

发现新的、可迁移到多节课的问题时，把它登记到 `editorial-checklist.md`，不要写进本文件。

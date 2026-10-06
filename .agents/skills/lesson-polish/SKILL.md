---
name: lesson-polish
description: 写、改或审查课件某一节（页面文案、口播稿、讲解全文、展示效果）时使用。先读已有审查记录，再跑机器检查，逐页对照 docs/production/editorial-checklist.md 的编辑规则，输出带规则编号的问题清单并修改；每次审查都在 docs/reviews/ 留一份记录。
---

规则的唯一来源是 `docs/production/editorial-checklist.md`，审查记录的格式见 `docs/reviews/README.md`。本 skill 不复制规则正文，只规定顺序。

1. 读 `docs/production/editorial-checklist.md`，以及要改那一节在 `docs/outline/course-outline-internal.md` 里的范围。
2. 读已有记录：`docs/reviews/<章>/` 里覆盖这一节的审查文件，以及该节的 `VALIDATION.md`。状态是“待处理”的问题，本次先复核；已经登记过的问题不重复展开，写“同 <文件> R<n>”。
3. 找内容源再改：页面看 `lesson.js` 是否由 `tools/build-lesson.py` 或 `build-content.py` 生成（ED-011）。改源文件，再重新生成。
4. 跑 `python3 courseware/tools/check-editorial.py`。error 必须清零；hint 逐条判断是否增加信息，不机械删除。
5. 逐页人工对照 ED-002 至 ED-010，只看屏幕文字、口播、讲解全文各自该承担的内容。输出格式：`页面或段落 · ED-编号 · 卡住的原句 · 建议`。ED-002 需要“复述对象、依据、下一步”，做不到就标出缺的那个连接。展示效果的文字重叠和内容裁切由 `courseware/tools/check-presentation.py` 逐页展开到末步检查；截图仍要看，脚本不判断美观和阅读顺序。
6. 修改后重新生成，跑 `make check`（含 `check-courseware.py`、`build-site.py` 和 `check-presentation.py`）。
7. 留存记录：按 `docs/reviews/README.md` 新建 `docs/reviews/<章>/<日期>-<范围>-<审查者>.md`，写下基于的提交、发现的问题、本次已修复的问题和未检查的项目。只审查不修改时也要写。本次修好了之前记录里的问题，在原文件里把状态改成 `已修复（<日期>）`；对已有记录只改状态，不改别人的结论。
8. 报告时区分：已机器检查、已人工对照、未检查（如试讲、非作者复述）。不要写教学效果已验证。报告里给出记录文件路径。

发现新的、可迁移到多节课的问题时，把它登记到 `editorial-checklist.md`，不要写进本文件。

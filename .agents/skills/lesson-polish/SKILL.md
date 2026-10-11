---
name: lesson-polish
description: 写、改或审查课件某一节（页面文案、阅读模式、口播稿、展示效果）时使用；也用于跨章的定期巡检（屏幕短文字的别扭说法、README 的完成状态、学员页面上的状态句）。先读已有审查记录，再跑机器检查，逐页对照 docs/production/editorial-checklist.md 的编辑规则，输出带规则编号的问题清单并修改；每次审查都在 docs/reviews/ 留一份记录。
---

规则的唯一来源是 `docs/production/editorial-checklist.md`，审查记录的格式见 `docs/reviews/README.md`。本 skill 不复制规则正文，只规定顺序。

1. 读 `docs/production/editorial-checklist.md`，以及要改那一节在 `docs/outline/course-outline-internal.md` 里的范围。
2. 读已有记录：`docs/reviews/<章>/` 里覆盖这一节的审查文件，以及该节的 `VALIDATION.md`。状态是“待处理”的问题，本次先复核；已经登记过的问题不重复展开，写“同 <文件> R<n>”。
3. 找内容源再改：页面看 `lesson.js` 是否由 `tools/build-lesson.py` 生成，口播一律在本节 `script.json`（ED-011）。改源文件，再重新生成。只改本次范围内登记的问题；范围外的页面、事实性文案和实验数据不顺手改，确需改动时先列出来问讲师。
4. 跑 `python3 courseware/tools/check-editorial.py`。error 必须清零；hint 逐条判断是否增加信息，不机械删除。
5. 逐页人工对照 ED-002 至 ED-010、ED-012、ED-014，只看屏幕文字、阅读模式（`lead`、`closing`）、口播各自该承担的内容；ED-014 按 `docs/production/wording-patterns.md` 的 W 编号记。输出格式：`页面或段落 · ED-编号 · 卡住的原句 · 建议`。ED-002 需要“复述对象、依据、下一步”，做不到就标出缺的那个连接。展示效果的文字重叠和内容裁切由 `courseware/tools/check-presentation.py` 逐页展开到末步检查；截图仍要看，脚本不判断美观和阅读顺序。截图分轮次看：一轮看完所有页面并列出全部问题，一次改完，最多再截一轮确认；仍未解决的问题写进记录，不反复打磨。
6. 修改后重新生成，跑 `make check`（含 `check-courseware.py`、`build-site.py` 和 `check-presentation.py`）。
7. 留存记录：按 `docs/reviews/README.md` 新建 `docs/reviews/<章>/<日期>-<范围>-<审查者>.md`，写下基于的提交、发现的问题、本次已修复的问题和未检查的项目。只审查不修改时也要写。本次修好了之前记录里的问题，在原文件里把状态改成 `已修复（<日期>）`；对已有记录只改状态，不改别人的结论。
8. 报告时区分：已机器检查、已人工对照、未检查（如试讲、非作者复述）。不要写教学效果已验证。报告里给出记录文件路径。

## 定期巡检（跨章）

单节审查容易漏掉跨章的问题。每改完一章、录制一章之前，或讲师要求时，跑一次跨章巡检，范围是全部已有课件：

1. ED-014：按 `docs/production/wording-patterns.md` 过一遍节标题、章首页与课程首页卡片、kicker、label、页标题、`lead`、`closing`。先看上次巡检记录里“待处理”的条目；高频词顺手重数一次，更新该文件“高频词”表的数字和日期。
2. ED-015：列出各章与各节 `README.md` 里的完成状态句，逐章比对，不一致的按章 README 改；章 README 本身过时的列出来问讲师。
3. ED-016：在 `courseware/index.html` 和各章 `index.html` 里找制作进度和审阅状态（“制作中”“待制作”“首版”“草稿”“未试讲”等），删掉，不要改写成新的状态。
4. ED-013 的演示形态提示（`check-editorial.py` 的 hint）：列出还没定形态的页，录制前要清零。
5. 记录写成 `docs/reviews/<日期>-all-sweep-<审查者>.md`。只改登记的问题；节标题、术语这类改动牵涉多节的，先列建议给讲师。新模式或好例子补进 `wording-patterns.md`。

发现新的、可迁移到多节课的问题时，把它登记到 `editorial-checklist.md`，不要写进本文件。

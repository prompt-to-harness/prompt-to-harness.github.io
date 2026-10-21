# 2.1 只说了一句话，模型收到了什么

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md) · [验证记录](VALIDATION.md)

用 claude-tap 启动 Codex，分两步发 Prompt：先发一句与项目无关的话，看 Codex 实际发给模型的请求由哪几块组成；再问一个与项目相关的只读问题，看工具调用和返回怎样进入 context。最后对比同一句话在不同权限、不同模型配置（能力目录开 / 关）下的请求，归纳“这些加在一起就是 context”。16 页。依据[第 2 章文件](../../../../docs/chapters/ch02.md) 2.1。2026-10-20 按重写后的分镜重做，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源：页面 HTML、分步、阅读模式导语和讲师提示都写在里面，口播写在 `script.json`，两者生成 `lesson.js`。不要直接改生成物。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/01-feedback/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

- 页面零件来自 `courseware/shared/parts/`；字体来自 `courseware/shared/fonts/`；播放器画布和章节条使用各章共用的 `courseware/shared/presentation.css`、`evidence.css` 与 `presentation.js`（改动这些文件时要回看第 0、1、2 章）。
- 每页的 `seconds` 只用于章节条的宽度比例，按步骤数计算，不是时长估算；讲述节奏由讲师录制时调整。
- 本节没有练习页，也不写记录文件（第 2 章不设固定记录文件）；跟做只有 p02 重启开发服务器。

## 素材状态

- p07–p16 与 p15b 的数字来自 2026-10-20 15:16 课程基线（隔离 HOME，能力目录开、推理档位 max，Codex 0.163.0 + MiniMax-M3.1-Flash，`codex exec`）的一次运行，标注“一次运行”；p15b 的对照组是同一句话在能力目录关时的记录。较早那次能力目录关的数字不再用于画面。录制时按冻结记录核对。
- p07 的 Codex 回复与 p14 的工具调用以录制实际为准，p14 讲师提示里写了分支；画面不预写回复。
- p16a 的官方 context 解释取自 Anthropic 2025-09-29 的文章（中文意译，2026-10-20 核对原文）；最后一行是概念地图的保底版本，地图定稿后替换。
- p10 展示这次真实系统指令的中文意译；内置基础指令只在 p15b 列章节名的中文意译，不大段引用原文。
- 2026-10-20 讲师决定：全章说“同一套配置下的请求记录”，不要求同一份记录；p06-tap 与 p16 的命令固定为 `uvx claude-tap@0.1.146`（`tools/clean-codex.sh` 另行同步）；p18 第 2 题改为不需要学员自己看请求，新增第 3 题（工具调用和返回的位置，回到 p14）。
- 原 p15（隔离 HOME 与三层来源）换成 p15b（能力目录开 / 关对比），“自己对比一次”用 `CLEAN_CODEX_CATALOG=0` 与 `tools/clean-codex.sh`；三层来源与隔离 HOME 对比移到配套页。

# 3.5 插件有自己的主张

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

本节是待同步的旧版课件。当前设计与同步状态见[章入口](../../README.md)，本节不另维护章级范围与审阅状态。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。播放页外壳（`index.html`、`speaker.html`）直接维护，侧栏上下节链接的约定见 [`docs/agents/courseware-workflow.md`](../../../../docs/agents/courseware-workflow.md)。

```sh
python3 courseware/ch03/lessons/05-game-studio/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

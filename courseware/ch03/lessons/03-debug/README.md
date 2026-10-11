# 3.3 挑一个缺陷，按证据修

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

先复现，再让 Codex 只调查，由人定规则，最后最小修改。依据[第 3 章故事线提案](../../../../docs/outline/proposals/2026-10-05-ch03-storyline.md)第五版与本节分镜。首版（2026-10-06），未经讲师审阅，未试讲、未录制；画面中的输出来自排练运行，见 [materials](../../materials/README.md)。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。播放页外壳（`index.html`、`speaker.html`）直接维护，侧栏上下节链接的约定见 [`docs/agents/courseware-workflow.md`](../../../../docs/agents/courseware-workflow.md)。

```sh
python3 courseware/ch03/lessons/03-debug/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

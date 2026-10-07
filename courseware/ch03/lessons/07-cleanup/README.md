# 3.7 重开时，还有什么要清理

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

界面重置不等于资源重置；谁创建计时器和实例，谁负责清理。依据[第 3 章故事线提案](../../../../docs/outline/proposals/2026-10-05-ch03-storyline.md)第五版与本节分镜。首版（2026-10-06），未经讲师审阅，未试讲、未录制；画面中的输出来自排练运行，见 [materials](../../materials/README.md)。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。播放页外壳由 [`../../tools/make-shells.py`](../../tools/make-shells.py) 生成。

```sh
python3 courseware/ch03/lessons/07-cleanup/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

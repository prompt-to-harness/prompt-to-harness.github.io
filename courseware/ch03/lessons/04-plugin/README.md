# 3.4 做游戏的经验，有人打包好了吗

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

分清 Plugin 与 Skill，装之前先审；看懂 Skill 怎样按需进入请求。依据[第 3 章故事线提案](../../../../docs/outline/proposals/2026-10-05-ch03-storyline.md)第五版与本节分镜。首版（2026-10-06），未经讲师审阅，未试讲、未录制；画面中的输出来自排练运行，见 [materials](../../materials/README.md)。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。播放页外壳由 [`../../tools/make-shells.py`](../../tools/make-shells.py) 生成。

```sh
python3 courseware/ch03/lessons/04-plugin/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

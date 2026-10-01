# 第 0 章：开场访谈

两位讲师在正式实操前，通过自我介绍与一组访谈问题介绍课程。整章建议控制在 25–30 分钟，尚未计时试讲。

## 打开

- [阅读课件](index.html)
- [演示课件](index.html?mode=slides#p01)
- [双讲师访谈提纲](speaker.html)
- [Markdown 提纲](script.md)

在仓库根目录运行 `python3 tools/serve-courseware.py`，从 <http://127.0.0.1:8841/courseware/> 进入，或直接打开 <http://127.0.0.1:8841/courseware/ch00/?mode=slides>。播放器复用 `courseware/shared/`，演示画布复用 `courseware/ch01/shared/`，本章字体与合照位于 `assets/`，均为本地资源。

方向键翻页，`T` 切换阅读/演示，`R` 切换专注演示。演示设置提供全屏与人像辅助框；辅助框只用于画面布局参考，不会打开摄像头。每题两人分别回答，奇数题 A 先答、偶数题 B 先答；讲师 A 为缪东旭，讲师 B 为李阳。

## 页面与节奏

页面顺序、每页问题、回答线索与逐页预算都以 `lesson.js` 为准，在[访谈提纲](speaker.html)中查看；本文件不再重复列出，避免两处不一致。

## 文件与视觉复用

- `index.html`：阅读与演示入口。
- `lesson.js`：正文、串场、双讲师回答提纲与备注的唯一内容源。
- `speaker.html`：从同一内容源展示讲稿；`script.md` 为导出副本。
- `../shared/`：播放器、阅读导航与访谈基础布局；`navNumbers: false` 关闭本章目录额外的页序号。
- `../ch01/shared/`：第一章的 1280×720 演示画布与底部分段进度。
- `interview.css`：访谈布局适配；演示履历显示时间要点，阅读模式显示完整资料。
- `assets/instructors.jpg`：已裁剪的双人合照，直接作为课件资源维护；原图已按要求删除。
- `tools/build-assets.py`：生成字体子集。
- `tools/build-content.py`：导出提纲。

进入第 1 章的链接依赖完整 `ch01/`。本章为现有 HTML 课件体系的一部分，未另行导出 PPTX。

## 内容维护

修改 `lesson.js` 后，在仓库根目录运行：

```bash
python3 courseware/ch00/tools/build-content.py
python3 courseware/tools/check-courseware.py
```

新增文字后，用与第一章相同的源字体重建本章子集。需要 `fontTools` 与 `Brotli`：

```bash
python3 courseware/ch00/tools/build-assets.py --title /path/ZCOOLKuaiLe-Regular.ttf --cover /path/LongCang-Regular.ttf --body /path/NotoSansCJKsc-Regular.otf --body-bold /path/NotoSansCJKsc-Bold.otf
```

字体与 OFL 许可输出到本章 `assets/`；构建会检查中文覆盖，不再处理照片。现有合照由方向校正后的 4032×3024 原图按 `(920, 824, 2900, 3024)` 裁剪并缩放到 900×1000；原图已删除，保留此记录说明裁剪来源。

## P02 分镜

先通过合照和姓名认识两位讲师，再分别介绍工作方向、接触经历与常用场景，最后转入第一问的具体经历。画面中的时间要点用于定位讲述，完整履历见阅读模式与提纲。不推断照片中人物与姓名的左右对应关系。其余访谈保留原问题、回答线索与顺序。

## 录制前待填

1. P02 履历与合照已按提供资料填入，录制前复核口播。
2. Q1–Q3 每人自己的真实案例、感受与失败经历，核对可公开证据。
3. Q4、Q7、Q8 的个人分工、入门与学习建议。课件中的课程建议不能冒称本人原话。
4. Q1–Q3 的可公开案例截图仍待提供；P02 已使用提供的合照。

课程路线和学习成果已经按深蓝平台交付版与共同内部大纲写入。第 0 章不新增代码考核；结尾让学员说出三个项目、一个个人目标和首次任务即可。详细检查与未测边界见 [verification.md](verification.md)。

# 第 0 章：课程导入与课前准备

两位讲师在正式实操前，通过自我介绍与九个访谈问题介绍课程。0.1 共 12 页，加入鹈鹕随机性案例后预算 29–34 分钟；0.2 准备逐页预算 14 分 15 秒（约 15 分钟），均未计时试讲。

## 打开

- [阅读课件](index.html)
- [演示课件](index.html?mode=slides#p01)
- [讲解全文（双讲师访谈）](speaker.html)
- [0.2 课前准备](lessons/02-preparation/index.html) · [讲解全文](lessons/02-preparation/speaker.html)：安装 App 与 CLI 并接入模型，取得练习项目、练习 git status/diff，启动欢迎页；0.1 末页引导学员进入 0.2

在仓库根目录运行 `python3 tools/serve-courseware.py`，从 <http://127.0.0.1:8841/courseware/> 进入，或直接打开 <http://127.0.0.1:8841/courseware/ch00/?mode=slides>。播放器复用 `courseware/shared/`，演示画布复用 `courseware/shared/presentation.css` 与 `presentation.js`，本章字体与合照位于 `assets/`，均为本地资源。

方向键翻页，`T` 切换阅读/演示，`R` 切换专注演示。演示设置提供全屏与人像辅助框；辅助框只用于画面布局参考，不会打开摄像头。每题两人分别回答，奇数题 A 先答、偶数题 B 先答；讲师 A 为缪东旭，讲师 B 为李阳。

## 页面与节奏

页面顺序、每页问题、回答线索与逐页预算都以 `lesson.js` 为准，在[讲解全文](speaker.html)中查看；本文件不再重复列出，避免两处不一致。

## 文件与视觉复用

- `index.html`：阅读与演示入口。
- `lesson.js`：正文、双讲师回答线索与备注的内容源。
- `script.json`：串场与回答提纲（口播）的唯一来源，由 `courseware/tools/rebuild-lesson.py` 合并进 `lesson.js`。
- `speaker.html`：从同一内容源展示讲稿，本地服务下可逐句改口播。
- `../shared/`：播放器、阅读导航与访谈基础布局；`navNumbers: false` 关闭本章目录额外的页序号。
- `../shared/presentation.css`、`../shared/presentation.js`、`../shared/evidence.css`：各章共用的 1280×720 演示画布、底部分段进度与证据版式。
- `interview.css`：访谈布局适配；演示履历显示时间要点，阅读模式显示完整资料。
- `assets/instructors.jpg`：已裁剪的双人合照，直接作为课件资源维护；原图已按要求删除。
- `assets/pelican/`：讲师提供的四份鹈鹕杯 HTML 原始结果；p05a 只呈现“怎样利用模型随机性，又怎样克制它？”和四份并排动画；李阳讲如何利用、缪东旭讲如何克制，回答留在讲稿与阅读说明中，来源与原 Prompt 见[案例说明](assets/pelican/README.md)。

进入第 1 章的链接依赖完整 `ch01/`。本章为现有 HTML 课件体系的一部分，未另行导出 PPTX。

## 内容维护

修改 `script.json` 或 `lesson.js` 后，在仓库根目录运行（0.2 同理，目录换成 `courseware/ch00/lessons/02-preparation`）：

```bash
python3 courseware/tools/rebuild-lesson.py courseware/ch00
python3 courseware/tools/check-courseware.py
```

新增文字后，按[字体说明](../../docs/production/fonts.md)重建全课字体子集；本章不再自带字体文件。

字体与 OFL 许可输出到本章 `assets/`；构建会检查中文覆盖，不再处理照片。现有合照由方向校正后的 4032×3024 原图按 `(920, 824, 2900, 3024)` 裁剪并缩放到 900×1000；原图已删除，保留此记录说明裁剪来源。

## P02 分镜

先通过合照和姓名认识两位讲师，再分别介绍工作方向、接触经历与常用场景，最后转入第一问的具体经历。画面中的时间要点用于定位讲述，完整履历见阅读模式与提纲。不推断照片中人物与姓名的左右对应关系。其余访谈保留原问题、回答线索与顺序。

## 录制前待填

逐字稿已按两位讲师 2026-10-21 的讨论写入 `script.json`：每题一人提问、一人先答、另一人补充，说话人写在每步操作提示里。录前还需补充：

1. Q1 李阳的补充仍缺一个具体任务，稿中以〔〕标出。
2. Q1–Q3 的可公开案例截图仍待提供；没有截图就不放图。

课程路线和学习成果已经按深蓝平台交付版与共同内部大纲写入。第 0 章不新增代码考核；0.1 结尾自检三个项目、个人目标和首次任务，0.2 安装工具、练习 Git 并启动欢迎页。详细检查与未测边界见 [verification.md](verification.md)。

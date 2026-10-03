# 课程课件

正式课件按章存放，每章按小节归组。当前内容依据[深蓝平台交付版大纲](../docs/course-outline.md)与[共同内部大纲](../docs/outline/course-outline-internal.md)。

从[课程首页](index.html)选择章节和小节。第 1 章仍保留[章节首页](ch01/index.html)。

| 章节 | 阅读与演示 | 维护说明 |
| --- | --- | --- |
| 第 0 章：开场访谈 | [打开课件](ch00/index.html) | [访谈提纲与维护](ch00/README.md) |
| 第 1 章：从环境启动到首页原型 | [打开首页](ch01/index.html) | [文件组织、导出与验证](ch01/README.md) |
| 第 2 章：迭代首页并发布 GitHub Pages（制作中） | [打开首页](ch02/index.html) | [分镜与状态](ch02/README.md) |

可直接打开 HTML，或在仓库根目录运行：

```bash
python3 tools/serve-courseware.py
```

然后访问 <http://127.0.0.1:8841/courseware/>。课件的脚本、字体和样式均为本地资源。

播放器、设计令牌和全课字体在 [`shared/`](shared/)。各章只放内容、讲稿和练习；新增文字后，在 `courseware/` 运行 `python3 tools/subset-fonts.py`，用同一套 Noto CJK 源字体重建 `shared/` 里的三份子集。

## 课件与练习项目

[course-starter](https://github.com/prompt-to-harness/course-starter) 是统一维护的练习起点。按[工作目录约定](../WORKSPACE.md)创建自己的独立仓库，课堂在该仓库内操作；`projects/personal-homepage/` 是示例目录名。课程仓库中的 `starters/personal-homepage/` 只保留环境页的离线预览。

课件嵌入模板页面用于预览；实际练习页面由独立项目中的 4174 服务提供。8841 课件服务以课程仓库为根，因此课件与模板之间的相对链接可用。后续 JSON Crack、dependency-cruiser 仓库按需放入同级 `projects/`，临时试验放入 `experiments/`，不在本课程仓库嵌套 Git 项目。

## 维护约定

- 各小节的演示入口、内容源、讲稿和练习放在同一目录。
- 全课样式、播放器、字体和许可放在 `shared/`；链接与锚点检查、字体子集放在 `tools/`。
- 教学附件放在 `materials/`；旧截图与模板记录归档，不作为当前验证证据。
- 调整目录时同步 HTML、内容源中的链接、导出工具及仓库内引用，保留页码锚点。
- 正式目录不等于实操验收通过；未测、待准备和参考示例继续明确标注。

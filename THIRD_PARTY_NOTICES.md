# 第三方内容说明

本仓库自有的代码、课件和文档按 [MIT License](LICENSE) 发布。下列第三方内容保留各自的许可，不属于 MIT 授权范围。

## 历史游戏

第 3.1 节的历史游戏产物 01、02、03、04、06 内嵌 React、React DOM 和 Scheduler，按其 [MIT 许可](starters/ch03-memory-cases/LICENSE-react.txt)分发。

## 字体

课件内嵌了以下字体的子集文件（`.woff2`），均采用 SIL Open Font License 1.1。各字体的版权声明和许可全文与子集放在同一目录：

| 字体 | 许可文件 |
| --- | --- |
| ZCOOL KuaiLe（站酷快乐体） | [`courseware/shared/fonts/LICENSE-title.txt`](courseware/shared/fonts/LICENSE-title.txt) |
| Long Cang（长仓体） | [`courseware/shared/fonts/LICENSE-cover.txt`](courseware/shared/fonts/LICENSE-cover.txt) |
| Noto Sans SC（思源黑体） | [`courseware/shared/fonts/LICENSE-sans.txt`](courseware/shared/fonts/LICENSE-sans.txt) |
| JetBrains Mono | [`courseware/shared/fonts/LICENSE-mono.txt`](courseware/shared/fonts/LICENSE-mono.txt) |

字体来源与选择理由见 [`docs/production/fonts.md`](docs/production/fonts.md)。

## 截图与商标

`courseware/promo/` 中的截图展示了 JSON Crack、dependency-cruiser 等第三方工具的界面，仅用于课程说明。相关名称、标识和界面归各自权利人所有。

`.agents/skills/course-prep/assets/course-reference/`随备课 Skill 保留了一张 RoboCOIN 数据集公开网页的历史截图，用于说明数据层级关系；原出处见包内样例与 `manifest.json`。截图内容和标识归各自权利人所有。随包字体的许可全文保留在该目录的 `shared/fonts/`，不纳入 MIT 授权范围。

## 工具与项目名称

课程中提到的 Codex、Claude Code、GitHub、Vite、React 等产品和项目名称归各自权利人所有，本仓库与它们的权利人没有隶属或背书关系。

## Game Studio 原文节选

`courseware/ch03/lessons/02-rules/assets/skill-excerpts/` 包含 [openai/plugins 的 Game Studio](https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio) 少量文件节选的重排截图，用于解释 Skill 的写法。原文归其权利人所有，不将其声明为本课程 MIT 授权内容。截图标明了省略，中文讲解与课程排版由本课程编写；未复制完整第三方文件。

同节 `selection-evidence.json` 及生成的回放页保留该版本 game-playtest 的名称与描述首句节选，用于对照实际选用记录；完整描述和正文通过固定版本链接查看。课程改写的 description 单独标识，不冒充上游原文。

同节 `assets/task-originals.json` 和生成的 `task-originals.html` 引用上述固定版本的少量英文条目，用于原站无法访问时的课堂备用。课程转述单独标出，各段链接到上游原文。

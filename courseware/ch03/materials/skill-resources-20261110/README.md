# 3.2.3：Skill 的资料、脚本与资源

日期：2026-11-10。
本轮为内容设计选材与最小预跑，讲解安排见[讨论稿 3.2.3](../../../../docs/outline/ch03-discussion.md#323-认识复杂-skill-的资料脚本与资源)。
案例是 OpenAI Game Studio 的 `sprite-pipeline`，不展开动画制作教程。

| 材料 | 做什么用 | 大小 | 状态与入口 |
| --- | --- | --- | --- |
| [输入图片](input/raw-strip.png) | 已有四帧条带，角色在各帧槽中的位置不同。 | 512×128 | 课程自绘合成输入，非模型生成的游戏美术。 |
| [处理前后对照](comparison.png) | 看图片文件实际怎样变化。 | 720×420 | 已目视核对；输出按两倍显示，图上注明实际尺寸。 |
| [预览](preview.png)及[四帧](frames/01.png) | 看脚本产物，再检查尺寸、透明与对齐。 | 预览 280×64；每帧 64×64 | 四帧完整，见[核验数据](checks.json)；未接入游戏。 |
| [完整请求](prompt.txt)、[最终回复原文](response.md) | 核对本次任务范围和模型所作说明。 | 单次调用 | Codex CLI 0.163.0、MiniMax-M3.1-Flash；最终回复按原文保留，模型判断与独立检查分开。 |
| [执行定位索引](execution-index.json) | 找到读取资料、运行规范化与预览脚本的真实命令及退出码。 | 同次调用 | 是索引，不是完整原始日志。 |
| [来源与证据指纹](manifest.json)、[重建工具](prepare.py) | 固定第三方原文版本，重建同样输入。 | 六个源文件及课程输入 | 官方全文与完整日志保留在仓库外；本目录不存第三方全文。 |

## 选这个案例要讲清什么

承接 3.2.2：正文已经能写步骤与要求，但有些知识适合单独查阅，有些处理适合交给已有程序，有些工作还必须提供实际输入。

| 对象 | 原文定位与作用 | 为什么需要 |
| --- | --- | --- |
| [SKILL.md](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/sprite-pipeline/SKILL.md) | Core Workflow、Script Recipes、References。 | 交代何时需要整理条带、用哪些脚本、怎样提供输入和检查输出。<br>不逐行讲完整生成流程。 |
| [Reference](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/sprite-pipeline.md) | 按原文依次指出原则、理由、提示词模板、规范化说明；重点看最后的共享缩放与底部对齐。 | 可把专门解释和长示例单独维护，在相关任务中查阅。<br>这个文件不长，作用在于内容分工，不是凑到某个行数才允许拆分。 |
| [规范化脚本](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/scripts/normalize_sprite_strip.py) | 命令行输入与输出参数，配合同次执行及四张实际产物。 | 具体切分、缩放与对齐由程序处理；仅阅读使用说明不会生成这些文件。<br>不要求学生学习图像算法或实现 Python 脚本。 |
| [预览脚本](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/scripts/render_sprite_preview_sheet.py) | 用四张输出帧生成一张预览图。 | 文件生成后还要查看结果，不能用退出码替代画面和实际使用检查。 |
| 本次输入 PNG | 是传入脚本的任务素材，预览是处理后的输出。 | 输入图片与指导文件承担不同职责。<br>不能把本次 PNG 说成官方 Skill 自带的 assets，也不能把所有输出统称为 Skill 配套资源。 |

规范依据：[Agent Skills 可选目录](https://agentskills.io/specification#optional-directories)与[按需加载](https://agentskills.io/specification#progressive-disclosure)。
`references/`、`scripts/`、`assets/` 是常见组织方式，均非必填目录。
官方规范还列出模板、图片与数据等静态资源；本例没有随附模板文件，不为凑齐种类另造一个“官方资源”。
本例脚本和资料位于 Plugin 公共目录，正文通过相对路径引用；本部分只沿链接使用，跨 Skill 共用留到 3.2.4。

备选取舍：继续用 `game-playtest` 能讲补充清单，但缺少它直接配套执行的处理脚本；以总入口 `game-studio` 为主又容易提前展开路由与整组组织。
`sprite-pipeline` 的输入和输出可见，比较适合说明资料、程序和素材的分工。
这是本轮推荐，未经过讲师审阅或试讲。

## 本次实际观察及限制

隔离目录中的官方 Skill、Reference 和脚本保持原文，运行后逐份比对，均未修改。
请求明确指定 Skill 并要求遵循配套详细流程；因此不能用本次证明它会自然选中或自动按需读取。
正文已由原生 Skill 展开进入上下文，定位为原生 rollout 第 12 行 user 消息；同时包含 Overview 与 Script Recipes。
模型另行尝试用 shell 读正文时，前面的 `echo ===` 触发 zsh 展开错误，命令退出码为 1，实际没有执行到 cat 正文，不能据此声称工具读取成功。
详细流程、试玩清单和三份脚本均有成功的工具读取；其中参考画布脚本只读未运行，调用没有做到“只读最必要文件”。
已运行规范化和预览脚本，两条命令退出码均为 0，具体命令见执行定位索引。

独立检查确认：四张 64×64 RGBA 图片有透明区域，内容底边均为 y=64、水平中心均为 x=32，预览为 280×64。
自绘输入中四帧的位置差异被消除，第 3 帧较高的造型被保留；已目视检查处理前后对照与预览。
这不证明任意素材都能正确整理，也不证明实际播放效果或游戏尺度下的可读性。

本次没有执行图片生成、创建参考画布、锁定基准首帧、浏览器动画播放或引擎接入。
最终回复中“后续更高姿势会被裁切”等提醒是模型推测，不作为已验证事实；脚本重新运行时会依据新输入重新计算共享缩放。
完整执行记录与原生会话留在私有实验目录，本机定位文件为被忽略的 `lab-runs/ch0323-resources-20261110/trial-location.json`。
曾因依赖下载连接超时改用已缓存的 Pillow 13.0.0；此为环境准备，不作为课堂剧情。

## 重建和预跑

以下在课程仓库根目录执行，目标目录必须尚不存在，并位于公开仓库之外。
重建工具下载固定版本原文、核对哈希并生成相同的自绘输入，不调用模型、不安装日常 Skill。

```bash
uv run --no-project --python 3.12 --with pillow==13.0.0 python courseware/ch03/materials/skill-resources-20261110/prepare.py /tmp/ch0323-sprite-demo
uv venv --python 3.12 /tmp/ch0323-sprite-demo/.venv
uv pip install --python /tmp/ch0323-sprite-demo/.venv/bin/python pillow==13.0.0
```

在新目录打开独立 Codex 会话，使用本目录保存的完整请求；课程基线启动方式沿用 `tools/clean-codex.sh`，密钥按既有环境配置。
不要续接已有会话，也不要把处理结果预填给模型。
现场从实际读取、命令和产物据实解释，不预写必然读取或成功。

只重建脚本产物时，在实验目录执行以下命令；这条路线是人工直接运行程序，不能冒充新的 Skill 调用。

```bash
.venv/bin/python game-studio/scripts/normalize_sprite_strip.py --input input/raw-strip.png --out-dir output/sprites/strip --frames 4 --frame-size 64
.venv/bin/python game-studio/scripts/render_sprite_preview_sheet.py --frames-dir output/sprites/strip --out output/sprites/strip-preview.png --columns 4
```

核验结果应包括实际文件、图片内容与本次未完成的环节，不以模型最终回复单独判定通过。
本轮只完成选材、局部实跑与作者检查，未制作本部分 PPT、HTML 讲述线或逐字稿。
重建工具已在新目录重新下载六份源文件、核对来源哈希和输入图片哈希，结果通过。
讨论稿四行编号、表格列数、逐句换行和本地材料链接已检查，`git diff --check` 通过。
全库课件检查仍被既有紫色风格产物的六处 ED-001 文案问题及 cover 字体缺“炼绑革”阻挡；本轮没有修改这些范围外文件。

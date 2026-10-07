# 课程生图试验：章首章末、主页视觉对照与情景漫画

> 状态：2026-10-06，独立试验版，待讲师比较。正式课件未替换，未验证教学效果。`demos/` 不在当前 Pages 发布范围内。

2026-10-07 新增 [角色试验](characters.html)：三只猫的细节版与简化版设定、协作场景，以及简化人物／小海狸的同场景对照。猫角色以讲师提供的照片为外形参考；四张照片的缩小参考已保存到 references/，讲师明确要求进入 Git。名字、性格、分工待讨论。

同日讲师明确偏好细节版画风，橘白和狸花沿用原造型；蓝猫按补充照片收窄身体与腮部，修订稿另存为 detailed-v2。画廊默认展示该修订稿，原版与简化版仍保留对照。此前协作场景尚未同步此造型修订。

同日新增 [跨章节状态试验](chapter-states.html)：按现有大纲选取第 2 章反馈、第 4 章规则对照、第 8 章失败交接。三张新图均使用细节版 v2 设定作为身份与画法参考，精确文字独立放在 HTML。

2026-10-07 后续反馈：讲师指出第 4 章自然猫爪稿仍不自然，姿态未通过确认。新增 [姿态研究对照](pose-research.html)：从真实四足站姿重建场景，以及透明角色与页面内容分别制作。研究来源与取舍见 [姿态研究](../../docs/production/cat-pose-research.md)。

2026-10-07 最新澄清：讲师批评的是特定图的诡异扭头，并未否定适度拟人；希望猫能用动画片式圆猫爪简单抓握，与章节内容互动。真实站姿与无互动贴图仅作历史探索。新增 [章节互动对照](interaction.html)：同一“比较两张输入卡”动作的细节版与卡通版，为两种画法对照。最新约定见 [CONTINUE.md](CONTINUE.md)。

2026-10-07 最新比较：讲师明确认为上一组卡通版更好，细节版像有“六条腿”，后续优先卡通互动。新增 [三组卡通动作试验](cartoon-tests.html)：2.1 解释反馈、6.5 核对证据、8.2 递交记录；反馈初稿的手机抓握有拇指感，另做双爪托手机的局部修订，旧稿保留。新动作仍待讲师比较。

## 看效果

从仓库根目录启动本地预览：

```bash
python3 tools/serve-courseware.py --port 8841
```

打开 `http://127.0.0.1:8841/demos/imagegen-pilot/`，选择页面、现版或生图版，以及完整画面或逐步揭示。也可以直接打开本目录的 `index.html` 离线比较。

- 第 1 章 p20：同一句模糊请求下的两个主页设计示意。保留目标、范围、标准的三个问题，但不再用原页面的登录／发布按钮示例演示功能越界。正式采用时需要对应改写口播，不能直接沿用原稿。
- 第 2 章 p03：保留三格原台词和揭示顺序，加入同一作者与熟人的动作、视线、表情。熟人仍是人；未用 Agent 的紫色表示熟人。
- 第 1 章 p01／p36-recap：同一幅任务工作台场景，章首提出“怎样证明改对”，章末回收任务、证据与权限的判断。
- 第 2 章 p01／p58：同一幅反馈工作台场景，章首引出真实反馈，章末回收迭代、检查成本与版本依据。

章首章末示例用于比较固定位置与复用节奏，右侧文案重新组织，尚未配套改写正式口播。第 2 章 p58 仍指出手工重查的成本，但未逐项展示原页的五阶段图；正式采用前须再次核对学习判断与口播。

`render.html` 复用正式课件播放器与样式；`build-preview.py` 从对应正式 `lesson.js` 提取六个所选页面，生成 `render.html` 和试验 `lesson.js`。修改试验结构请改生成脚本，修改局部样式请改 `pilot.css`。

```bash
python3 demos/imagegen-pilot/build-preview.py
```

正式源发生变化后重跑此命令，更新对照样本。生成版仍须单独判断是否保留了原页要完成的学习判断。

## 素材与 Prompt

使用 `imagegen` skill 的内置 `image_gen` 工具。前三幅图没有输入参考图；两幅章主题图以本试验的 `feedback-comic.jpg` 为角色和笔触参考。没有使用 CLI/API fallback，也没有输入第三方参考素材。

| 素材 | 最终 Prompt | 用途 |
| --- | --- | --- |
| [portfolio.jpg](assets/portfolio.jpg) | [portfolio.txt](prompts/portfolio.txt) | 克制、留白充分的作品集概念 |
| [game-gallery.jpg](assets/game-gallery.jpg) | [game-gallery.txt](prompts/game-gallery.txt) | 活泼的小游戏展厅概念 |
| [feedback-comic.jpg](assets/feedback-comic.jpg) | [feedback-comic.txt](prompts/feedback-comic.txt) | 同一组人物的三格情景漫画 |
| [ch01-workbench.jpg](assets/ch01-workbench.jpg) | [ch01-workbench.txt](prompts/ch01-workbench.txt) | 第 1 章首尾复用的任务场景 |
| [ch02-workbench.jpg](assets/ch02-workbench.jpg) | [ch02-workbench.txt](prompts/ch02-workbench.txt) | 第 2 章首尾复用的反馈场景 |
| [cat-trio-sheet-detailed.jpg](assets/cat-trio-sheet-detailed.jpg) | [cat-trio-sheet-detailed.txt](prompts/cat-trio-sheet-detailed.txt) | 三只猫的第一版外形与表情，细节较多 |
| [cat-trio-sheet-detailed-v2.jpg](assets/cat-trio-sheet-detailed-v2.jpg) | [cat-trio-sheet-detailed-v2.txt](prompts/cat-trio-sheet-detailed-v2.txt) | 沿用细节版画风，按补充照片修正蓝猫的身体与腮部 |
| [cat-trio-sheet.jpg](assets/cat-trio-sheet.jpg) | [cat-trio-sheet.txt](prompts/cat-trio-sheet.txt) | 简化毛发与轮廓后的三猫角色草案 |
| [cat-trio-workbench.jpg](assets/cat-trio-workbench.jpg) | [cat-trio-workbench.txt](prompts/cat-trio-workbench.txt) | 三猫核对页面的协作场景 |
| [human-beaver-comparison.jpg](assets/human-beaver-comparison.jpg) | [human-beaver-comparison.txt](prompts/human-beaver-comparison.txt) | 相同任务与构图下的人物／海狸对照 |
| [cat-ch02-feedback-detailed.jpg](assets/cat-ch02-feedback-detailed.jpg) | [cat-ch02-feedback-detailed.txt](prompts/cat-ch02-feedback-detailed.txt) | 2.1 橘白倾听反馈，狸花对照手机页面 |
| [cat-ch04-spec-detailed.jpg](assets/cat-ch04-spec-detailed.jpg) | [cat-ch04-spec-detailed.txt](prompts/cat-ch04-spec-detailed.txt) | 4.3 蓝猫对照输入并记录规则 |
| [cat-ch04-spec-detailed-v2.jpg](assets/cat-ch04-spec-detailed-v2.jpg) | [cat-ch04-spec-detailed-v2.txt](prompts/cat-ch04-spec-detailed-v2.txt) | 同一场景局部改为指向输入卡，保留修改前作对照 |
| [cat-ch08-handoff-detailed.jpg](assets/cat-ch08-handoff-detailed.jpg) | [cat-ch08-handoff-detailed.txt](prompts/cat-ch08-handoff-detailed.txt) | 8.2 蓝猫暂停操作，向狸花交接问题 |

| [cat-ch02-feedback-natural.jpg](assets/cat-ch02-feedback-natural.jpg) | [cat-ch02-feedback-natural.txt](prompts/cat-ch02-feedback-natural.txt) | 2.1 自然猫爪，手机放在支架上 |
| [cat-ch04-spec-natural.jpg](assets/cat-ch04-spec-natural.jpg) | [cat-ch04-spec-natural.txt](prompts/cat-ch04-spec-natural.txt) | 4.3 自然猫爪，铅笔平放，目光转向输入 |
| [cat-ch08-handoff-natural.jpg](assets/cat-ch08-handoff-natural.jpg) | [cat-ch08-handoff-natural.txt](prompts/cat-ch08-handoff-natural.txt) | 8.2 自然猫爪，共同关注桌面记录 |

| [cat-ch04-pose-reference.jpg](assets/cat-ch04-pose-reference.jpg) | [cat-ch04-pose-reference.txt](prompts/cat-ch04-pose-reference.txt) | 从真实站姿重建场景，待比较 |
| [blue-gray-standing-cutout.png](assets/blue-gray-standing-cutout.png) | [blue-gray-standing-cutout.txt](prompts/blue-gray-standing-cutout.txt) | 透明角色与可编辑内容组合，待比较 |

| [cat-ch04-interaction-detailed.jpg](assets/cat-ch04-interaction-detailed.jpg) | [cat-ch04-interaction-detailed.txt](prompts/cat-ch04-interaction-detailed.txt) | 第 4 章细节版互动，讲师指出肢体像六条腿，未通过 |
| [cat-ch04-interaction-cartoon.jpg](assets/cat-ch04-interaction-cartoon.jpg) | [cat-ch04-interaction-cartoon.txt](prompts/cat-ch04-interaction-cartoon.txt) | 第 4 章卡通互动，讲师偏好，后续画法参考 |

| [cat-ch02-feedback-cartoon.jpg](assets/cat-ch02-feedback-cartoon.jpg) | [cat-ch02-feedback-cartoon.txt](prompts/cat-ch02-feedback-cartoon.txt) | 2.1 反馈初稿：手机抓握有拇指感，保留对照 |
| [cat-ch02-feedback-cartoon-v2.jpg](assets/cat-ch02-feedback-cartoon-v2.jpg) | [cat-ch02-feedback-cartoon-v2.txt](prompts/cat-ch02-feedback-cartoon-v2.txt) | 局部改为双爪托手机，新稿待比较 |
| [cat-ch06-evidence-cartoon.jpg](assets/cat-ch06-evidence-cartoon.jpg) | [cat-ch06-evidence-cartoon.txt](prompts/cat-ch06-evidence-cartoon.txt) | 6.5 蓝猫用放大镜核对报告，新稿待比较 |
| [cat-ch08-handoff-cartoon.jpg](assets/cat-ch08-handoff-cartoon.jpg) | [cat-ch08-handoff-cartoon.txt](prompts/cat-ch08-handoff-cartoon.txt) | 8.2 蓝猫与狸花递交一个文件夹，新稿待比较 |

## 留存与复用

四张原始照片完整保存到本目录的 private-references/，包括蓝猫两张参考。该目录由本地 .gitignore 忽略；目录内 manifest.json 记录原始尺寸、字节数和 SHA-256，复制前后已核对一致。原尺寸存档仅保存在当前机器。

讲师随后明确要求照片进入 Git。已另存四张最长边 1280 像素的 JPEG 到 [references/](references/README.md)，合计约 1 MB，移除 EXIF、IPTC 和注释元数据。缩小参考、生成效果、最终 Prompt 与清单均纳入 Git，后续重新生成不依赖临时附件或生图缓存。

2026-10-07 按讲师要求压缩 Git 素材：原有 25 张生成图由 55,396,440 字节降至 2,685,423 字节，减少 95.15%；加上本轮 Probe 与一个 1024 对照导出，27 项素材合计 2,860,043 字节。assets/ 保存适合预览与参考的导出版本，26 项非透明导出为 JPEG，1 张透明猫图保留 PNG。各画稿版本仍保留，最终 Prompt 不改写；生成原尺寸、字节数与校验值记录在清单的 generation_original 中。原尺寸 PNG 已逐文件核对后存入本机被 Git 忽略的 generated-originals/，新会话续做使用 Git 中的小图即可。

后续保存标准：普通场景优先最长边 640 像素，三猫设定图最长边 1280 像素；三格漫画条带最长边 1920 像素，保证单格仍有 640 像素。JPEG 使用 sips 的质量 80；透明图保留 alpha，最长边 640 像素。保留长宽比，不放大原本更小的素材。新图先导出、检查画面，再进入 Git，避免把完整生成 PNG 反复提交。generated-assets-manifest.json 记录当前文件的尺寸、字节数、SHA-256、参考关系与导出参数。

普通场景的 macOS 导出示例（输出到新文件，不覆盖生成原稿）：

```bash
sips -Z 640 -s format jpeg -s formatOptions 80 source.png --out assets/new-scene.jpg
```

讲师随后明确要求清理这组生图相关历史。本地已按原始 25 个 PNG 的 blob ID 清理，保留压缩导出、Prompt、参考照片和其他课程文件，并保存完整备份。相关分支和 6 个目录快照已更新，当前完整文件树保持一致；旧图及其关联不可达元数据移至本地备份，其他对象与恢复记录保留。根仓库对象目录从约 115 MiB 降至 49 MiB；第三方子模块约 118 MiB 的 Git 数据不属于本次清理。远端尚未改写，仍保留旧历史，待确认后用 force-with-lease 同步。详见本轮审查。

生成速度与保存体积分别处理：当前内置 image_gen 接口没有显式 size、quality、output_format 参数，本次使用 sips 导出，没有重新生成。OpenAI 官方 API 支持这些参数，文档建议草稿使用 low 质量，并说明直接输出 JPEG 比 PNG 更快；这是 API 能力，不能假定当前工具已暴露，也没有在本项目测量延迟。来源：[OpenAI Image generation](https://developers.openai.com/api/docs/guides/image-generation)（2026-10-07）。

换状态时，画法优先参考第 4 章互动卡通稿，外形保留细节版 v2 的已修正特征；旧简化设定只补充橘白与狸花，不能恢复旧蓝猫的胖腮。先写角色身份与画法不变量，再描述动作、表情和道具。最新澄清允许适度拟人和动画式简单抓握，角色须与章节内容互动；重点限制人手般灵活的分指与精细捏取，检查头颈连贯与肢体数量。无互动的真实站姿仅作历史探索，不作为当前模板。技术文字、输入、规则、结果和流程继续由页面提供。局部换表情与新建完整协作场景是不同程度的变更，均须逐图检查身份与肢体动作。

同机新会话选用本项目后可读取 [CONTINUE.md](CONTINUE.md) 接续，重新加载设定图、参考照片和已确认偏好。

三格漫画是一个完整生成条带，CSS 按三等份显示；没有把台词烧进图片。素材均保存在本目录，不依赖生成工具的本机缓存。

角色试验仍使用内置 `image_gen`。三猫第一版用三张照片作外形参考；简化版与协作场景使用本试验的角色设定图作参考。人物／海狸对照用 `ch01-workbench.jpg` 作角色、场景与画法参考。页面上的角色标识和说明独立可编辑。

## 判断与检查

漫画主要增加场景叙事，最接近局部素材替换。主页对照增加了审美判断的可见对象，也改变了原页的例证组织方式，采用成本高于漫画。

本轮检查详见 [试验审查记录](../../docs/reviews/2026-10-06-imagegen-pilot-codex.md)。两处均未试录或请非作者复述；是否更容易理解仍待比较。

章首章末的使用标准与参考观察见 [制作提案](../../docs/production/imagegen-pilot-proposal.md)，新增四页的检查见 [首尾样式审查记录](../../docs/reviews/2026-10-06-imagegen-chapter-pairs-codex.md)。提案尚未确认，正式视觉规范未改。

2026-10-07 的角色素材与画廊检查见 [角色试验记录](../../docs/reviews/2026-10-07-all-character-pilot-codex.md)。设定与场景图仍待讲师选择，未合成到正式课件。

跨章节状态、自然猫爪修订与留存检查见 [本轮审查](../../docs/reviews/2026-10-07-all-cat-state-pilot-codex.md)。

新增卡通动作与局部修订的检查见 [本轮审查](../../docs/reviews/2026-10-07-all-cartoon-state-tests-codex.md)。

2026-10-07 新增 [分辨率对照与 Probe](resolution.html)：同一图的 1024×682（141.4 KB）和 640×426（68.5 KB）JPEG，以及一张 640×480（33.3 KB）导出。内置工具在 Prompt 明确请求 640×480 时，实际返回 1448×1086 PNG，调用耗时 16.8 秒，没有返回模型或 Token 用量。只观察到 4:3 比例生效，不能把导出的小图视为原生低分辨率生成，也不能据此声称降低了生成 Token。官方当前自定义尺寸指南最少 655,360 像素，640×480 为 307,200；模型实际能力与工具暴露参数须分别核对。

本轮压缩、Probe 与历史清理审查见 [记录](../../docs/reviews/2026-10-07-all-imagegen-size-history-codex.md)。

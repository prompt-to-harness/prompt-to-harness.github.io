# 课程生图试验：章首章末、主页视觉对照与情景漫画

> 状态：2026-10-06，独立试验版，待讲师比较。正式课件未替换，未验证教学效果。`demos/` 不在当前 Pages 发布范围内。

2026-10-07 新增 [角色试验](characters.html)：三只猫的细节版与简化版设定、协作场景，以及简化人物／小海狸的同场景对照。猫角色以讲师提供的照片为外形参考；四张照片的缩小参考已保存到 references/，讲师明确要求进入 Git。名字、性格、分工待讨论。

同日讲师明确偏好细节版画风，橘白和狸花沿用原造型；蓝猫按补充照片收窄身体与腮部，修订稿另存为 detailed-v2。画廊默认展示该修订稿，原版与简化版仍保留对照。此前协作场景尚未同步此造型修订。

同日新增 [跨章节状态试验](chapter-states.html)：按现有大纲选取第 2 章反馈、第 4 章规则对照、第 8 章失败交接。三张新图均使用细节版 v2 设定作为身份与画法参考，精确文字独立放在 HTML。

2026-10-07 后续反馈：讲师指出第 4 章自然猫爪稿仍不自然，姿态未通过确认。新增 [姿态研究对照](pose-research.html)：从真实四足站姿重建场景，以及透明角色与页面内容分别制作。研究来源与取舍见 [姿态研究](../../docs/production/cat-pose-research.md)。

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

使用 `imagegen` skill 的内置 `image_gen` 工具。前三幅图没有输入参考图；两幅章主题图以本试验的 `feedback-comic.png` 为角色和笔触参考。没有使用 CLI/API fallback，也没有输入第三方参考素材。

| 素材 | 最终 Prompt | 用途 |
| --- | --- | --- |
| [portfolio.png](assets/portfolio.png) | [portfolio.txt](prompts/portfolio.txt) | 克制、留白充分的作品集概念 |
| [game-gallery.png](assets/game-gallery.png) | [game-gallery.txt](prompts/game-gallery.txt) | 活泼的小游戏展厅概念 |
| [feedback-comic.png](assets/feedback-comic.png) | [feedback-comic.txt](prompts/feedback-comic.txt) | 同一组人物的三格情景漫画 |
| [ch01-workbench.png](assets/ch01-workbench.png) | [ch01-workbench.txt](prompts/ch01-workbench.txt) | 第 1 章首尾复用的任务场景 |
| [ch02-workbench.png](assets/ch02-workbench.png) | [ch02-workbench.txt](prompts/ch02-workbench.txt) | 第 2 章首尾复用的反馈场景 |
| [cat-trio-sheet-detailed.png](assets/cat-trio-sheet-detailed.png) | [cat-trio-sheet-detailed.txt](prompts/cat-trio-sheet-detailed.txt) | 三只猫的第一版外形与表情，细节较多 |
| [cat-trio-sheet-detailed-v2.png](assets/cat-trio-sheet-detailed-v2.png) | [cat-trio-sheet-detailed-v2.txt](prompts/cat-trio-sheet-detailed-v2.txt) | 沿用细节版画风，按补充照片修正蓝猫的身体与腮部 |
| [cat-trio-sheet.png](assets/cat-trio-sheet.png) | [cat-trio-sheet.txt](prompts/cat-trio-sheet.txt) | 简化毛发与轮廓后的三猫角色草案 |
| [cat-trio-workbench.png](assets/cat-trio-workbench.png) | [cat-trio-workbench.txt](prompts/cat-trio-workbench.txt) | 三猫核对页面的协作场景 |
| [human-beaver-comparison.png](assets/human-beaver-comparison.png) | [human-beaver-comparison.txt](prompts/human-beaver-comparison.txt) | 相同任务与构图下的人物／海狸对照 |
| [cat-ch02-feedback-detailed.png](assets/cat-ch02-feedback-detailed.png) | [cat-ch02-feedback-detailed.txt](prompts/cat-ch02-feedback-detailed.txt) | 2.1 橘白倾听反馈，狸花对照手机页面 |
| [cat-ch04-spec-detailed.png](assets/cat-ch04-spec-detailed.png) | [cat-ch04-spec-detailed.txt](prompts/cat-ch04-spec-detailed.txt) | 4.3 蓝猫对照输入并记录规则 |
| [cat-ch04-spec-detailed-v2.png](assets/cat-ch04-spec-detailed-v2.png) | [cat-ch04-spec-detailed-v2.txt](prompts/cat-ch04-spec-detailed-v2.txt) | 同一场景局部改为指向输入卡，保留修改前作对照 |
| [cat-ch08-handoff-detailed.png](assets/cat-ch08-handoff-detailed.png) | [cat-ch08-handoff-detailed.txt](prompts/cat-ch08-handoff-detailed.txt) | 8.2 蓝猫暂停操作，向狸花交接问题 |

| [cat-ch02-feedback-natural.png](assets/cat-ch02-feedback-natural.png) | [cat-ch02-feedback-natural.txt](prompts/cat-ch02-feedback-natural.txt) | 2.1 自然猫爪，手机放在支架上 |
| [cat-ch04-spec-natural.png](assets/cat-ch04-spec-natural.png) | [cat-ch04-spec-natural.txt](prompts/cat-ch04-spec-natural.txt) | 4.3 自然猫爪，铅笔平放，目光转向输入 |
| [cat-ch08-handoff-natural.png](assets/cat-ch08-handoff-natural.png) | [cat-ch08-handoff-natural.txt](prompts/cat-ch08-handoff-natural.txt) | 8.2 自然猫爪，共同关注桌面记录 |

| [cat-ch04-pose-reference.png](assets/cat-ch04-pose-reference.png) | [cat-ch04-pose-reference.txt](prompts/cat-ch04-pose-reference.txt) | 从真实站姿重建场景，待比较 |
| [blue-gray-standing-cutout.png](assets/blue-gray-standing-cutout.png) | [blue-gray-standing-cutout.txt](prompts/blue-gray-standing-cutout.txt) | 透明角色与可编辑内容组合，待比较 |

## 留存与复用

四张原始照片完整保存到本目录的 private-references/，包括蓝猫两张参考。该目录由本地 .gitignore 忽略；目录内 manifest.json 记录原始尺寸、字节数和 SHA-256，复制前后已核对一致。原尺寸存档仅保存在当前机器。

讲师随后明确要求照片进入 Git。已另存四张最长边 1280 像素的 JPEG 到 [references/](references/README.md)，合计约 1 MB，移除 EXIF、IPTC 和注释元数据。缩小参考、生成效果、最终 Prompt 与清单均纳入 Git，后续重新生成不依赖临时附件或生图缓存。

生成图完整保存到 assets/，最终 Prompt 保存到 prompts/，各版本另存，原稿不覆盖。generated-assets-manifest.json 是本轮素材留存快照，记录文件、尺寸、字节数与 SHA-256，后续新增素材时需更新。

换状态时使用细节版 v2 作为固定参考：先写角色身份与画法不变量，再描述动作、表情和道具。讲师指出持笔、伸指与递纸过于拟人；后续固定采用真实猫爪与自然姿态，道具放在桌上，通过视线与头部朝向表达状态。旧拟人动作稿保留作对照，不继续作为动作模板。技术文字、输入、规则、结果和流程继续由页面提供。局部换表情与新建完整协作场景是不同程度的变更，均须逐图检查身份与肢体动作。

同机新会话选用本项目后可读取 [CONTINUE.md](CONTINUE.md) 接续，重新加载设定图、参考照片和已确认偏好。

三格漫画是一个完整生成条带，CSS 按三等份显示；没有把台词烧进图片。素材均保存在本目录，不依赖生成工具的本机缓存。

角色试验仍使用内置 `image_gen`。三猫第一版用三张照片作外形参考；简化版与协作场景使用本试验的角色设定图作参考。人物／海狸对照用 `ch01-workbench.png` 作角色、场景与画法参考。页面上的角色标识和说明独立可编辑。

## 判断与检查

漫画主要增加场景叙事，最接近局部素材替换。主页对照增加了审美判断的可见对象，也改变了原页的例证组织方式，采用成本高于漫画。

本轮检查详见 [试验审查记录](../../docs/reviews/2026-10-06-imagegen-pilot-codex.md)。两处均未试录或请非作者复述；是否更容易理解仍待比较。

章首章末的使用标准与参考观察见 [制作提案](../../docs/production/imagegen-pilot-proposal.md)，新增四页的检查见 [首尾样式审查记录](../../docs/reviews/2026-10-06-imagegen-chapter-pairs-codex.md)。提案尚未确认，正式视觉规范未改。

2026-10-07 的角色素材与画廊检查见 [角色试验记录](../../docs/reviews/2026-10-07-all-character-pilot-codex.md)。设定与场景图仍待讲师选择，未合成到正式课件。

跨章节状态、自然猫爪修订与留存检查见 [本轮审查](../../docs/reviews/2026-10-07-all-cat-state-pilot-codex.md)。

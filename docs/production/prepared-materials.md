# 提前准备材料：来源、展示与复用

2026-11-15，按讲师确认的材料逻辑整理。本文记录材料分工与 3.1 入口迁移，供后续小节查找和复用；备课流程仍以 [course-prep](../../.agents/skills/course-prep/SKILL.md)为入口，教学取舍写入 Discussion，具体展示位置写入讲述线。本文不新增阶段审批，也不要求每节制作固定数量的页面。

## 1. 从真实任务保存材料

最底层是一份真实任务的留存：实际请求、对话与工具执行记录，以及对应的代码、可运行产物、截图和检查结果。一个任务可能跨会话，也可能有多个产物版本，不强制按“一个聊天窗口对应一个 HTML”组织。

应能回答：这是什么任务、从什么项目和版本开始、哪份记录对应哪个结果、哪些内容没有保存。来源关系在已有材料索引中维护，讲述线引用，不另复制一份登记表。原始记录缺失时明确说明，不能重新运行后冒充原记录。

后来整合、裁切展示或另行修改的产物要与历史产物区分。尤其不能把历史运行日志当成后来整合工作的过程证明。完整原文、私有内容及大文件留在本机或私有材料目录；公开仓库保存允许公开的入口、映射和重建工具。

## 2. 展示是分支，辅助层按需增加

```text
真实任务及其留存
├── 产物：代码、游戏、主页、截图
│   └── 直接打开产物
└── 过程：请求、回复、调用、返回、检查与修正
    └── 用原生查看器展示原始记录（3.1 使用 Inspect）

按具体障碍选择辅助方式
├── 聚合／索引：解决“选哪个”
├── 定位／高亮：解决“看哪里”
└── 口播／PPT：解释“这说明什么”
```

| 层次或方式 | 默认处理 | 增加它的必要条件 |
| --- | --- | --- |
| 原始材料 | 保留来源、版本与产物对应关系 | 是展示和结论的依据，不以加工摘要替代 |
| 产物展示 | 能直接打开就直接打开 | 原页面含无关区域、妨碍比较时，可以增加纯游戏展示入口，保留原归档 |
| 过程展示 | 直接用 Inspect 展示原始记录和前后上下文 | 只为查看器适配做必要转换，不能改写为另一份执行故事 |
| 聚合展示 | 不默认制作 | 要同时比较多个结果，或反复选择、切换多个案例；只保留一套承担该任务的入口 |
| 阅读辅助 | 优先使用原生导航、展开和滚动 | 内容较长、难以找到依据时，增加精确定位与文字高亮；不为此新建摘录页 |
| 教学提炼 | 放在讲述线、口播和 PPT | 解释因果、比较与结论；关系确实难以看清时才增加表或图，并能回到原文 |

聚合页不是必经层。只展示一个产物时直接打开即可；讲述线已经提供合适的材料入口时，也不必再建索引页。过程能在 Inspect 中看清，就不再做一套提取、摘要或分阶段重排的日志页面。

必要脱敏、格式转换、编号、来源标识、定位和标记属于展示辅助。提炼结论属于教学解释；不得让解释后的摘要替代原始证据。高亮只覆盖与当前口播相对应的原句、代码或输出文字，不给整个消息和空白区域着色。

新增页面前依次判断：

1. 直接打开原材料，具体哪里妨碍讲解？
2. 原生查看器的搜索、跳转、展开或高亮能否解决？
3. 新页面是否承担现有页面没有的任务？
4. 是否因此产生第二份需要同步、可能偏离原文的内容？

没有明确障碍就不增加；原生工具能解决就使用原生工具。页面数量由讲解需要决定，不为填满层级而制作。

## 3. 3.1 当前材料入口

以下地址用于本机备课。游戏与 Inspect 使用 4397 服务，课程页使用 8876 服务；其他机器需要取得归档并启动相应服务。

站点构建从 [六份历史游戏的静态文件](../../starters/ch03-memory-cases/) 和本节聚合页生成公开试玩入口。在 3.1 课件点「试玩六个游戏」进入聚合页，原始运行记录通过下方本机入口查阅。

### 3.1 产物与聚合

| 展示编号 | 历史 ID | 正式纯游戏入口 | 原始完整产物（4397 下的路径） |
| --- | --- | --- | --- |
| 01 | a1 | [01 号游戏](http://127.0.0.1:4397/game-only.html?run=a1) | `games/a1/index.html` |
| 02 | a2 | [02 号游戏](http://127.0.0.1:4397/game-only.html?run=a2) | `games/a2/index.html` |
| 03 | b2 | [03 号游戏](http://127.0.0.1:4397/game-only.html?run=b2) | `games/b2/index.html` |
| 04 | old5 | [04 号游戏](http://127.0.0.1:4397/game-only.html?run=old5) | `games/old5/index.html` |
| 05 | mm-memory | [05 号游戏](http://127.0.0.1:4397/game-only.html?run=mm-memory) | `games/mm-memory/index.html` |
| 06 | f1 | [06 号游戏](http://127.0.0.1:4397/game-only.html?run=f1) | `games/f1/index.html` |

- [唯一六例聚合页](http://localhost:8876/courseware/ch03/lessons/01-memory-game/cases.html#overview)：只保留截图、试玩、运行记录与必要比较条件。六例不是严格同条件重复。
- [第二章实际主页＋翻牌游戏](http://127.0.0.1:4397/homepage/index.html)：后续整合示例，基于第二章发布主页接入 A2 游戏，与六份历史产物并列。A2 日志不对应这次整合过程。
- [案例映射源](../../tools/ch03-showcase/case-map.json)：维护展示编号、历史 ID、原产物、展示入口及整合示例身份。后续小节沿用编号，不另编一套。

纯游戏页通过同源 iframe 隐藏历史主页的无关区域，保留游戏交互；没有为展示重写历史游戏。21 例总画廊保留为备课档案，不进入 3.1 正常授课路径。

### 3.2 过程与精确证据

各案例原文入口为 `http://127.0.0.1:4397/inspect/?run=<历史 ID>`。讲具体事实时，复用已有精确入口，不停在日志首页：

| 所需材料 | 可直接使用的入口 |
| --- | --- |
| 04 号提前通关的计数与判断 | [历史 diff 原文](http://127.0.0.1:4397/inspect/?run=old5&sample=archive&message=diff&find=matchedCount) |
| 04 号验证与试玩分工 | [计划原文](http://127.0.0.1:4397/inspect/?run=old5&sample=archive&message=plan) |
| 05 号难度、成绩与结束选择规划 | [实现前规划](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=session&line=34) |
| 05 号视觉规划 | [视觉方向原文](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=session&line=65) |
| 05 号配对、通关与重开断言 | [原始测试命令](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=31) |
| 05 号浏览器完整一局与重开结果 | [原始输出](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=85) |

完整入口映射见 [inspect-topics.json](../../courseware/ch03/lessons/01-memory-game/tools/inspect-topics.json)和 [screen-plan.json](../../courseware/ch03/lessons/01-memory-game/screen-plan.json)。文字选择规则在 [inspect-focus.json](../../tools/ch03-showcase/inspect-focus.json)，运行时来源与定位映射在本机 `lab-runs/ch03-showcase/inspect/course-manifest.json`。

04 号仅有历史导出的计划、交付、步骤节选与 diff，完整日志缺失。05 号同时保留 CLI 原始事件和同一会话的补档。格式适配不能扩大原材料的证据范围，也不能把导入成功当成游戏验收通过。

## 4. 3.1 已实施的入口调整

| 原入口或组织 | 当前处理 | 后续小节如何引用 |
| --- | --- | --- |
| 讲述线 f13、f14、f15 直接打开带主页的游戏归档或独立游戏 | 统一为 `game-only.html?run=…` | 演示游戏时使用上方纯游戏入口；核对历史完整作品才看归档 |
| `games/a2/index.html` 曾用于主页整合版 | 此地址已恢复 A2 历史作品；整合版移到 `homepage/index.html` | 不能再把旧 A2 地址当作第二章实际主页整合版 |
| f06、f21 的主页／作品参照 | 改为独立主页地址，名称注明后续整合示例 | 需要主页延续示例时复用该入口；不能与 A2 历史过程混同 |
| `cases.html#overview` | 保留为唯一六例聚合页 | 需要整体比较时打开；不再经它转读案例讲稿 |
| `cases.html#request` | 跳到讲述线 f02 | 当前开发请求从讲述线及 PPT p01b 获取，历史两行请求仍在原始记录中 |
| `cases.html#old5`、`#old5-checks` | 跳到讲述线 f14 | 直接演示用 04 号纯游戏；查过程用 Inspect |
| `cases.html#purple`、`#checks` | 跳到讲述线 f15 | 直接演示用 05 号纯游戏；查检查或修正用对应 Inspect 深链接 |
| `cases.html#handoff` | 跳到讲述线 f19 | 使用讲述线中的现场操作安排，不另维护发布路线页 |
| `lecture.html?only=…` | 跳到唯一六例聚合页，不再维护第二套聚合 UI | 新引用直接链接 `cases.html#overview`；旧入口仍兼容 |
| `lecture.html?run=…&event=…` | 保留查询参数，跳到 Inspect | 新引用直接使用 Inspect |
| `evidence.html#…` | 保留证据锚点，转到 Inspect 原始记录 | 已有旧引用可继续使用；新引用优先复用精确原文地址 |
| f07 重复的聚合及 PPT 链接 | 去重，并同步段落材料引用序号 | 修改 `frames[].links` 时必须同步 `script_blocks[].materials` |

案例页移除了请求、案例讲解、检查与发布步骤这些重复组织。讲述线、口播和 PPT 承担教学解释；已有原始截图和归档没有因此删除。章级材料分工已写回 [第三章 Discussion](../outline/ch03-discussion.md)。本轮调整没有改写口播正文和 PPT。

## 5. 后续小节的复用方式

先明确要展示结果还是解释过程，再从上面的同一份材料进入。需要的依据已有时，不重新生成游戏、不复制日志、不另做摘要页。

例如 3.2 再使用 04 号案例：展示缺陷用 04 号纯游戏入口；解释当时如何检查用 Inspect 的计划或 diff；本节关于 Skill 的解释写在本节讲述线和 PPT，不再复制一套“04 号案例介绍页”。

新讲述位置需要不同证据时，可以增加原文定位和高亮规则，保留前后上下文。不同观点即使引用同一条消息，也应定位到各自对应的文字。需要比较多个产物才使用聚合页；只看一个游戏就直接进入。

复用时核对：编号与历史 ID、产物版本、记录完整性、是否后续整合、链接打开后的具体文字，以及该证据是否真正支撑当前口播。历史最终截图不能冒充未留存的错误画面。

### 本机准备与生成入口

在仓库根目录运行，所需私有归档必须已取得：

```bash
# 游戏及本机展示服务
python3 tools/ch03-showcase/serve.py --no-build
# 原始日志适配与原生查看器静态构建
uv run --with 'inspect-ai==0.3.282' python tools/ch03-showcase/build-inspect.py
# 第二章实际主页与游戏的后续整合示例
uv run python tools/ch03-showcase/build-homepage.py --source <第二章录制项目路径>
# 修改讲述入口后生成数据；修改旧证据映射后生成跳转
uv run python courseware/ch03/lessons/01-memory-game/tools/build-lesson.py --speaker-only
uv run python courseware/ch03/lessons/01-memory-game/tools/build-evidence.py
# 生成旧 lecture 地址的兼容入口
uv run python courseware/ch03/lessons/01-memory-game/tools/prepare-review.py
```

课程页服务使用仓库现有入口 `sh tools/edit-courseware.sh --local`。完整来源与归档重建要求见 [展示工具说明](../../tools/ch03-showcase/README.md)；缺少归档不能用重新生成的作品替代。直接修改生成 HTML 会在重建时丢失，应修改对应源或生成工具。

本轮已检查六个纯游戏的展示、独立主页嵌入、聚合页宽窄屏、旧链接跳转、讲述数据映射及一个 Inspect 原文高亮入口。没有重新验收全部游戏玩法，也没有进行课堂试讲。

## 6. 3.2、3.3 的材料跳转

3.2 复用 3.1 的材料时，讲述线直接打开原材料：

| 用途 | 当前入口 |
| --- | --- |
| 展示 04 号提前通关的游戏 | [04 号纯游戏](http://127.0.0.1:4397/game-only.html?run=old5)，`old5` 是历史 ID |
| 查看 05 号步数显示检查失败 | [Inspect 原始输出，第 79 行](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=79&mark=step-count&find=%E2%9C%98%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E5%90%8C%E6%A0%B7%E8%AE%A1%201%20%E6%AD%A5%20-%3E%201)；后续分析、修正和复验保留在相邻消息 |
| 查看 05 号浏览器检查结果 | [Inspect 原始输出，第 85 行](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=85) |
| 查看检查后继续看截图的判断 | [Inspect 原始消息，第 86 行](http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=86) |

上述入口由 3.2 `screen-plan.json` 维护，再生成讲述页数据。旧 `cases.html#checks`、`#old5` 已承担返回讲述线的兼容跳转，不能用作检查记录或试玩入口。GitHub 的固定版本文件使用 `blob` 地址，目录使用 `tree`，保留实验所用版本。

3.3 当前从讲述线直接打开各份历史游戏、截图和保存源码；[音效版本入口](../../courseware/ch03/lessons/03-debug/evidence/audio-iteration/index.html#versions)用于区分 D 历史两组及 E1、E2、E3，[源码查看](../../courseware/ch03/lessons/03-debug/evidence/audio-iteration/source-view.html)显示保存文件原文。E2 `first-failure/index.html` 保留 `Cannot access 'canvas' before initialization`，展示失败时使用；正常试玩使用对应历史游戏、E1 或 E3，不能把 E2 的链接替换成修复版。

3.2 的主动调用、自然语言选用与描述复核、三轮试玩、Plugin 读取和返回，以及 3.3 的两组作者请求、游戏采用、声音读取、E1/E2 生成和 E3 修复，现已接入 Inspect。讲述入口用 `?topic=<讲述位置>&position=<从 0 开始的记录序号>` 定位，按钮“上一条记录／下一条记录”沿该处讲述顺序切换；高亮仅覆盖对应原句。全部消息及工具上下文仍在原生查看器中。

映射与来源边界维护在 [inspect-process.json](../../tools/ch03-showcase/inspect-process.json)，适配器为 [inspect_process.py](../../tools/ch03-showcase/inspect_process.py)。旧过程节选锚点由 [sync-process-links.py](../../tools/ch03-showcase/sync-process-links.py) 生成兼容跳转；游戏、源码、文件差异和结果比较保留各自产物入口。两节构建讲述页时会同步跳转。

明确保留以下缺口：

- 3.2.4 首次安装只保留安装返回 JSON，未找到同轮终端命令执行日志。Inspect 展示文件原件，并标明不是会话消息。
- 3.2.4 短调用未找到独立请求原件。请求文字来自预跑文档，页面标作“请求留存”；CLI 不包含用户输入，不能补成会话轮次。
- 3.3 E0 修改 Skill 的执行原记录未找到。保留实际文件和补丁，不能用 E2 游戏生成日志替代。

组件组作者运行保留超时边界，没有最终回复，不补造成功结论。3.2 选用实验是当时的九份 Skill 环境，不能当作后续安装四份 Skill 的实测。CLI 初次运行与续跑独立保留，单独保存的请求文件明确注明来源。

# 提案：起点快照与跟做方式的方案比较

> 状态：讨论稿（2026-10-22）。在社区调研（讲师本机 `lab-runs/research/reports/课程起点快照最佳实践.md`，不提交；主要来源列在文末）的基础上，把能想到的方案都摆出来逐一比较，给出推荐。涉及第 0–3 章和 course-starter，属于跨章安排，需要两位讲师确认；未试做，未试讲。
> 2026-10-22 讨论结论（讲师 MiaoDX）：先按第六节“最小可行版本”做，并给每章写一份**前提清单**；起点快照由讲师手工整理、冻结，不靠重跑上一章生成，上一章改动后只要前提清单不变就不用重做。方案 F 的个人内容文件化、`npm run check` 检查脚本、课程文字移出学员仓库这三项要改第 1 章，暂不推进，作为后续候选（前提清单将来可以变成检查脚本）。跨章部分仍需两位讲师确认。
> 范围：项目一（个人主页，第 1–3 章）。项目二、三本来就用外部仓库的固定基线，命名规则照搬即可；项目三的形态未定。

## 结论先行（调研时的推荐，现按状态说明只做最小版本）

推荐**方案 F：单源快照 + 前提检查脚本 + 个人内容文件化**。一句话给学员：

> 一直跟着做的，每章开头跑一次 `npm run check`；要从某一章开始的，下载那一章的起点，把自己的 `src/content.ts` 拷进去，再跑 `npm run check`。

和此前的初步方案（方案 B）相比，改了四处：课程文字移出学员仓库；个人内容集中到一个文件；多一个前提检查脚本；命名补上项目终点。理由见第三、四节。

## 一、评价标准

| 编号 | 标准 | 为什么重要 |
| --- | --- | --- |
| C1 | 学员一句话能懂，步骤少 | 录播课没人现场答疑 |
| C2 | 视频和学员屏幕一致 | 跟做的前提 |
| C3 | 保留学员自己的内容 | 个人主页是学员的作品，2.4 要公开 |
| C4 | Agent 的 context 干净 | 第 2 章就在讲这件事；课程文件被读进去会带出支线 |
| C5 | 讲师维护成本低 | 每次重录、改课都要重做快照 |
| C6 | 录播后工具变化也能跟做 | Codex、依赖都会变 |
| C7 | 掉队、跳章的追赶成本低 | 学员不一定按顺序学 |
| C8 | 和课程主题协同 | 最好本身就能当教学素材，而不是额外负担 |

## 二、能想到的方案

按“快照放在哪、怎样拿到、个人内容怎么办、课程文字放在哪”四个维度组合，有下面八种：

| 方案 | 做法 | 社区里谁这样做 |
| --- | --- | --- |
| A 现状 | 快照散在 course-starter 的 tag、课件仓库 `starters/`、计划中的“课程仓库”三处；追赶靠 Codex 联网克隆参考起点逐条对照，或下载 ZIP 手工对照 | — |
| B 初步方案 | 快照都放 course-starter，用 `chNN-start` tag；一直跟做，或下载某章 ZIP 重新开始；课程材料放学员仓库的 `course/` 目录 | — |
| C 分支式 | 每章一个分支 `ch02-start`，学员 `git checkout` | LinkedIn Learning |
| D 工作坊式 | 一个仓库里放每一步的完整副本目录，学员在 `playground/` 里做，一键复制某一步进来 | Epic Web（epicshop）、Brian Holt |
| E 双项目 | 跟做用一个固定的示范主页；学员自己的主页另做，按同一份验收清单检查 | Full Stack Open（示范 notes 应用，练习做 phonebook） |
| F 推荐 | 单源快照 + 前提检查脚本 + 个人内容集中到一个文件；课程文字只在课件站点 | 组合了 Full Stack Open、Crafting Interpreters（按测试验收）、DeepLearning.AI（课程文字在仓库外）的做法 |
| G 云端环境 | 每章一个 Codespaces / devcontainer，一键打开 | GitHub Skills |
| H Agent 追赶 | 只发布起点，掉队时让 Codex 对照参考起点补齐（现有 `materials/catchup/` 的做法） | 没有找到先例 |

## 三、逐项比较

✓ 好，△ 一般，✗ 差。

| 方案 | C1 好懂 | C2 视频一致 | C3 保留内容 | C4 context 干净 | C5 维护 | C6 抗漂移 | C7 追赶 | C8 主题协同 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A 现状 | ✗ | ✗ | ✓ | ✗ | ✗ | △ | ✗ | △ |
| B 初步方案 | ✓ | ✓ | ✗ | △ | ✓ | △ | △ | △ |
| C 分支式 | △ | ✓ | ✗ | △ | △ | △ | △ | ✗ |
| D 工作坊式 | △ | ✓ | ✗ | ✗ | △ | △ | ✓ | ✗ |
| E 双项目 | △ | ✓ | ✓ | ✓ | ✗ | △ | ✓ | △ |
| F 推荐 | ✓ | ✓ | ✓ | ✓ | △ | ✓ | ✓ | ✓ |
| G 云端环境 | ✓ | ✓ | ✗ | △ | ✗ | ✓ | ✓ | ✗ |
| H Agent 追赶 | ✗ | ✗ | ✓ | ✗ | △ | ✗ | △ | ✓ |

不选的理由：

- **A 现状**：三个地方、五种名字、追赶要五步，这是要解决的问题本身。
- **B 初步方案**：方向对，但两处不成立。`course/` 目录挡不住 Agent：Codex 和 Claude Code 都不把 `.gitignore` 当作读取屏障，Agent 用 `grep`、`rg` 照样搜得到（Codex 的 `.codexignore` 提议 issue #2847 已关闭）。ZIP 追赶会把学员的个人内容整份换成讲师的。
- **C 分支式**：Template 只复制默认分支，学员仓库里没有这些分支；切分支要求工作区干净，对新手门槛高；没有解决个人内容。
- **D 工作坊式**：对普通课程很好，**对 Agent 课程最差**：每一步的完整副本都在同一个工作区里，Agent 一搜就会读到别的步骤的代码，正是第 2 章要避免的事。
- **E 双项目**：最干净，但学员要做两个主页，第 2 章“补我自己的经历并发布”的动机变弱，时长也撑不住。可以作为 F 的退路：如果试做发现个人内容文件化做不到，再考虑。
- **G 云端环境**：环境一致性最好，但 Codex CLI 要登录、要配 MiniMax 密钥，国内访问 Codespaces 也不稳定；不保留个人内容。可作为选做。
- **H Agent 追赶**：步骤多、结果每次不同，还会把参考代码和 diff 读进 context。它是一个很好的 context 例子，适合放在第 2 章深入层或配套页演示，不适合当新手入口。

## 四、推荐方案 F 的具体内容

### 1. 只有一个来源，一个命名规则

- 所有快照都在 course-starter。`main` 就是第 1 章起点（Template 从它创建）。之后各章的起点是同一条参考历史上的 tag，由讲师录制时冻结的状态生成。
- 名字只有两种：`chNN-start`（这一章从这里开始，即上一章的参考终点）和 `pN-end`（项目 N 的终点）。项目一是 `ch02-start`、`ch03-start`、`p1-end`；项目一的第 1 章起点就是 `main`，不另打 tag。
- 已发布的 tag 不改写；要修复就发 `ch02-start-r2`，并在课件站点的勘误里写明。不改代码的章节不打 tag。
- 课件仓库的 `starters/` 不再作为第二个来源：要么删掉，要么改成从 course-starter 同步的讲师实验副本。现有的 `ch01-prompt-baseline`、`ch02-start-v1`、`ch02-complete`、`ch02-candidate`、`ch01-complete` 都标为废弃。

### 2. 学员仓库里只放三样东西

| 放什么 | 例子 | 为什么 |
| --- | --- | --- |
| 产品代码 | `src/`、`index.html`、`package.json` 等 | — |
| 个人内容文件 | `src/content.ts`：姓名、简介、项目经历 | 追赶时只需拷回这一个文件；2.2 的改动也只落在这个文件里，diff 更干净 |
| 前提检查脚本 | `npm run check`（如 `scripts/check.mjs`） | 见下一条 |

外加一个短小的 `AGENTS.md`，只写 Agent 从代码推断不出来的硬约束（第 2 章 2.2 正好让学员写这个）。

**课程文字一律不进学员仓库**：任务卡、检查点说明、环境说明都放在课件站点。course-starter 里现有的 `PROJECT_BRIEF.md`、`TASK_01_01.md`、`CHECKPOINTS.md`、`PLACEHOLDER_CONTENT.md`、`docs/setup/` 移到站点；`setup-check/` 是第 1 章 1.1 的练习对象，第 1 章结束后的快照里不再带。

### 3. 前提检查脚本

`npm run check` 按当前所在章检查进入本章需要的前提，全部是确定性的：能安装、能 build、`src/content.ts` 存在且格式对、工作区已提交。缺什么就打印一句该怎么补，不改任何文件。

- 一直跟做的学员：每章开头跑一次，全过就开始，不用和讲师代码对照。
- 从某章开始的学员：拷完内容文件后跑一次，确认拿到的起点可用。
- 和课程主线的关系：它是全课第一个“Codex 也能自己跑、结果能回到 context 的检查”。第 3 章讲 Skill 时把它扩展成页面检查，第 7 章讲统一检查入口时重访。这条线原本就在计划里（C2-40、一页全课表的“检查与验证”一行），检查脚本让它从第 1 章就有落点。

### 4. 学员只有两条路

| 路 | 适合谁 | 步骤 |
| --- | --- | --- |
| 一直跟做 | 从第 1 章开始的大多数人 | 用 Template 建自己的仓库，一个项目内一直在里面做；每章开头 `npm run check` |
| 从某一章开始 | 跳着学、掉队、想重来 | 1. 打开该章 `chNN-start` 的 tag 页面下载 ZIP，解压；2. 有自己的 `src/content.ts` 就拷进去；3. `git init` 并提交；4. `npm install`，`npm run check` |

第二条路会丢掉学员在内容文件之外的改动，这是有意的取舍：掉队的学员更需要简单。

### 5. 讲师和录制

- 讲师演示从同一个 tag 开始，录制前冻结；所有实验也从它开始。
- `package-lock.json` 锁定依赖。每段视频在课件里记录录制日期、Codex CLI 版本和模型；课件站点维护一份带日期的行为变化记录，只在步骤做不下去时才重录。
- 学员项目和讲师录制目录都不放在课件仓库里面：Claude Code 会沿上级目录读到课件仓库的 `CLAUDE.md`，2.5 的实测里已经碰到过。

### 6. 每章第一页固定成“从哪开始”

两条路各一句话，加 `npm run check`，不涉及上一章的过程文件。

## 五、对各章的影响

| 章 | 要改什么 | 谁定 |
| --- | --- | --- |
| 第 0 章 | Template 说明改成两条路；课程材料从仓库移到站点 | 两位讲师 |
| 第 1 章 | 1.4、1.5 的 Prompt 写明个人内容放在 `src/content.ts`（现在 Codex 把它写在 `App.tsx` 的数组和 JSX 里，各人结构不同）；1.4 的 `PROMPT_V1.md` 改写在站点或提交说明里，或者保留但不进第 2 章快照；1.5 结束时第一次跑 `npm run check` | 第 1 章负责讲师 |
| 第 2 章 | 第一页“从哪开始”；2.1 第二问的答案落在 `src/content.ts`；2.2 的改动只在内容文件里；“Agent 对照参考起点”降为深入层示例 | 第 2 章负责讲师 |
| 第 3 章 | 检查脚本扩展成页面检查（和 Skill 的安排一起定，D2） | 第 3 章负责讲师 |
| course-starter | 结构调整、脚本、tag；发布基线目前待发布，现在改成本最低 | 两位讲师 |

## 六、最小可行版本

如果暂时只想做最少的改动，先做这三件，其余等第 1 章重录时一起做：

1. 统一命名：只用 `chNN-start` 和 `pN-end`，旧名字标废弃；快照只放 course-starter。
2. 删掉“Codex 联网对照”这条正式路径，追赶只用 ZIP。
3. 讲师演示和实验都从冻结的 tag 开始。

个人内容文件化、检查脚本、课程文字移出仓库，都要改第 1 章，放在第二步。

## 七、写进课件前要核实

1. 用 Template 创建仓库时会不会带上 tag（GitHub 文档只说默认复制默认分支）。
2. Claude Code 沿上级目录查找 `CLAUDE.md` 时，碰到内层 `.git` 会不会停下。
3. 让第 1 章的 Codex 把个人内容稳定地放进 `src/content.ts`，要跑几次确认是“机制”还是“常见”。
4. 找一位非讲师试做者，按“从某一章开始”的步骤走一遍，记下用时和出错的地方。

## 主要来源

- Epic Web workshop 结构：https://github.com/epicweb-dev/epicshop/blob/main/docs/workshop-structure.md
- Brian Holt 每课一个完整目录：https://github.com/btholt/citr-v9-project
- Wes Bos 的 starter 与分步答案：https://github.com/wesbos/Advanced-React
- Full Stack Open 每个检查点一个分支：https://github.com/fullstack-hy2020/part3-notes-backend/tree/part3-1
- Crafting Interpreters 按章生成代码并跑测试：https://github.com/munificent/craftinginterpreters
- DeepLearning.AI 的 Claude Code 课程，课程文字和练习仓库分开：https://github.com/https-deeplearning-ai/sc-claude-code-files 、https://github.com/https-deeplearning-ai/starting-ragchatbot-codebase
- Keycard 工作坊的检查点与恢复：https://workshop.keycard.ai/reference/checkpoints/
- GitHub Template 只复制默认分支：https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
- Claude Code 的指令文件查找：https://code.claude.com/docs/en/memory
- Codex `.codexignore` 提议已关闭：https://github.com/openai/codex/issues/2847

# 第 0、2、3 章补写操作提示，去掉 script.md

- 日期：2026-10-11
- 审查者：Claude（claude-opus-5-5），操作提示由 8 个并行 agent 按节起草
- 范围：第 0 章、2.1–2.5、3.1–3.7 的 `script.json`；全课 `script.md` 的删除与相关工具、说明
- 基于提交：903a55c（工作区另有未跟踪的 reports/、research_notes/，与本次无关）
- 已参考：第 1 章 1.1–1.6 的逐字稿审查记录（操作提示写法的来源）；docs/production/lesson-authoring-playbook.md“讲稿与转场”；编辑规范 ED-013
- 检查方式：已机器检查（make check 通过，含新加的 ED-013）；已核对 417 步原口播与 HEAD 逐字一致；已抽查约 20 条提示与 build-lesson.py、STORYBOARD 的对应；已在浏览器看 1.3、2.3 讲稿页的排版与编辑。未出声试读，未按提示实际录制，提示里的窗口、命令和地址没有逐条在录制环境复跑

## 总体判断

讲师确认以第 1 章的“操作提示 + 口播”为全课逐字稿写法（决策见 docs/design/course-design-principles.md §7）。第 0、2、3 章 417 步都补上了一条操作提示，口播正文没有改动。命令、文件和地址都取自仓库，仓库里没有的细节写成“按录制版本核实”或“以实际输出为准”，见下方“未核实”。录制前讲师需要按节过一遍提示，尤其是交互式 Codex 会话怎么切权限、claude-tap 查看器地址、GitHub Pages 设置界面这几类随版本变化的地方。

同时按讲师决定去掉了 `script.md`：讲稿页 speaker.html 本来就不读它，连读和改稿都在讲稿页做，口头禅检查改读 `script.json`（跳过操作提示）。

## 问题

起草提示时发现的口播问题。按任务范围没有改口播，留给讲师决定。

| ID | 优先级 | 页面 | 规则 | 问题与证据 | 建议 | 状态 |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | P2 | 第 0 章 p02 起各页 | ED-013 | 口播里有舞台标注：“讲师 A（缪东旭）自我介绍：”“串场提问：”“讲师 B 先答：”“转场：”，照稿念会念出来 | 挪进这一步的操作提示，口播只留要说的话 | 待处理 |
| R2 | P2 | 第 0 章 p03–p06、p09、p10 | ED-003 | “〔真实任务待填〕”等占位仍在口播里 | 录前由本人填写；操作提示已写明括号不念 | 待处理 |
| R3 | P2 | 第 0 章 p10 第 2 步 | ED-013 | “不得当作本人已经说过的话”是备课说明，留在口播里会被念出来 | 移到操作提示或 `teaching` | 待处理 |
| R4 | P2 | 2.1 p04 第 3 步 | ED-002 | 口播说“下一页我们切到浏览器”，但下一页 p05 仍在讲视口，到 p05-live 才切 Chrome | 改成“再下一页”或调整说法；操作提示已写明实际顺序 | 待处理 |
| R5 | P3 | 2.3 p39、2.4 p49、3.5 p34 | ED-002 | 口播预设或复述了排练结果（“这次的 diff 很干净”“讲师预检那一次”“讲师试玩时还注意到”），录制当天可能不同 | 操作提示已要求按实际改口；也可把口播改成不依赖结果的说法 | 待处理 |
| R6 | P3 | 3.6 p43、3.7 p47 | 制作手册“人称” | 暂停跟做指令用了“你”（“做出你的信息来源表”“先写下你的预测”） | 按“我/我们”视角另行审阅 | 待处理 |

## 未核实

提示里写到、但仓库文件不能完全证实的细节（agent 自报，已按保守写法处理）：

- ch00：p01 第 1 步：人像辅助框“只作构图参考、不开摄像头”取自 README，未在录制环境实测
- ch00：p02–p11：双讲师的站位、机位以及由谁担任串场讲师，仓库没有写明。提示里统一写“串场讲师”，没有指定是 A 还是 B
- ch00：p10 第 4 步：留约 30 秒给学员写目标，依据是 teaching 里的时长建议；剪辑时是否加暂停提示，还没有定
- 05-refactor + 01-memory-game：ch03 p05 第 2 步：现场演示时用 npm run dev 起本地服务、打开终端打印的 Local 地址。npm run dev 来自 ch02 2.1 的画面；第 3 章本节没有写启动命令，所以提示里写成“地址以终端实际打印为准”，已在运行就复用
- 05-refactor + 01-memory-game：ch03 p04 第 2–3 步：执行中可能出现安装依赖或越出仓库的审批请求、等待段可剪辑。这是按第 1 章的提示写法给的中性处理，本节材料里没有记录审批界面的具体样子
- 05-refactor + 01-memory-game：ch03 p02 第 4 步、p04 第 1 步：现场演示时在练习仓库根目录开新会话、在同一会话里发确认语。同一会话的依据是 run-v2.sh 用 resume --last 续接；交互式 CLI 里具体怎么续接，没有在仓库里核实
- 05-refactor + 01-memory-game：ch02 p55-3、p55-4、p55-5 的“如改为现场演示”分支：要提前在 Chrome 两个标签页打开改前、改后的构建产物。依据是 p55-4 teaching 的“切到实操”和 shoot.py 的做法（用静态服务器打开 dist）；产物怎么起服务、用哪个端口，提示里没有写死
- 02-iteration：p29 第 4 步：怎样以可写权限（workspace-write）启动新的 Codex 会话，仓库里没有交互式启动的确切写法。提示只写“启动方式按录制版本核对”，没有写具体命令或参数。
- 02-iteration：p22 第 1 步：仓库里没有 claude-tap 查看器的具体地址（2.1 写的是“以工具输出为准”），提示照此写成“地址以启动输出为准”。录制版是否已把示意图换成 diff 截图，也还没定。
- 02-iteration：p31 第 1–2 步：设备工具栏的入口和快捷键沿用 2.1 的做法，但 2.1 也注明要按录制时的 Chrome 版本核对。Tab 的结果“只停在查看项目”来自排练版 homepage-v1，以录制实际为准。
- 02-iteration：p30 第 2 步：“只改 src/App.tsx”是排练预估（materials/homepage-v1.diff），不是录制结果。
- 02-iteration：p27 第 2 步：claude-tap 面板的 19527 端口只出现在 build-lesson.py 的讲师提示里，属于单机记录，没有另行复核。
- 01-feedback：p02：画面上的 http://localhost:5173/ 只是常见默认值（build-lesson.py 讲师提示），提示里已写“以第 1 章实际 Vite 输出为准”；Terminal 标签页名“首页开发服务”是新起的名字，仓库里没有约定
- 01-feedback：p05-live：⌥⌘I、⇧⌘M 等快捷键和设备工具栏入口待按录制时的 Chrome 版本核对（STORYBOARD/讲师提示原本就这样写），提示没有写死具体菜单
- 01-feedback：p06-tap：隔离 HOME 和 claude-tap 一起用还没实测过（p15-home 命令说明写明“尚未实测”）；claude-tap 是否打印查看器地址、是否自动打开浏览器，只按讲师提示写成“以工具实际输出为准”
- 01-feedback：p07：“若出现写入类审批，不批准”是按只读任务写的通用处理；Codex 在这一步会不会弹出审批没有核实
- 01-feedback：p08：读标题任务那份记录怎样在 claude-tap 查看器里和本次反馈核对记录并列打开，仓库里没有说明；提示只要求切换时讲清楚两份记录不是同一次
- 01-feedback：p19：“2.2 要回看这次会话”的依据是 02-iteration/STORYBOARD.md p28 的“先查看 2.1 的实际会话”；2.2 录制时是复用这次会话，还是只回看记录，还没定
- 03-review + 04-publish：04-publish p45 第 3 步：提示里写的“按 q 退出分页”是 git 默认分页器（less）的通用行为，仓库文件里没有记录
- 03-review + 04-publish：04-publish p49 第 2 步：“只批本次、不选以后不再询问”来自 materials/pages-source/README.md 的预检记录（当时选的是“Yes, proceed”）；录制时批准框的选项文字以当天 Codex 版本为准，提示里没有写具体按钮名
- 03-review + 04-publish：04-publish p49 第 2 步、p50 第 1 步：Settings → Pages 的界面、Source 显示，以及在该页读取公开 URL 的位置，都按录制时的 GitHub 版本核对（分镜里本来就标了待核）
- 03-review + 04-publish：04-publish p47 第 3 步：Codex 生成部署文件时会不会弹出推送、改设置或安装依赖的请求，仓库里没有记录；提示只写了“出现就不批准”，没有断言一定会出现
- 03-review + 04-publish：04-publish p48 第 3 步：工作流文件名以实际生成为准；课件里的 deploy.yml 只是示意
- 03-review + 04-publish：03-review p37 第 2/4 步、p38、p39：在 VS Code 里打开 src/App.tsx 和记录文件属于通用操作；2.2 Prompt 原文在练习仓库里放在哪里（是不是写在记录文件里），仓库没有明确写，提示只写了“2.2 Prompt 里给出的项目经历原文”
- 02-rules + 03-debug：03-debug p17 第 1 步：仓库里只有 debug-3.3.sh 用的 `codex exec -s read-only`；交互式 Codex 会话怎么设成只读，仓库里查不到，提示里写成“按录制版本核实，权限不明时不发送”
- 02-rules + 03-debug：03-debug p20 第 3 步：同一会话怎么换成可写权限，仓库里只有 `exec resume --last -c sandbox_mode="workspace-write"`；交互会话的切换方式没有核实，提示里写成“按录制版本核实”
- 02-rules + 03-debug：02-rules p11 与 03-debug p16、p21：讲师练习项目 dev 服务的端口和地址没有固定写法，提示里写成“npm run dev 实际打印的 Local 地址”；“3.1 的游戏标签页”默认 3.1 会开这个标签页，但 3.1 的 script.json 目前还没有操作提示，标签页名称未约定
- 02-rules + 03-debug：02-rules p12 第 1 步与 03-debug p15、p19、p22：问题清单、缺陷报告和两次提交记在 docs/evidence/CH03_MEMORY_GAME.md，依据是章 README 的“本章记录文件（3.1–3.3、3.7）”；清单在这个文件里的具体位置和格式，仓库没写
- 02-rules + 03-debug：03-debug p18：行号 4、43、107、116、121 和 createDeck 都取自排练回答 reference/3.3-investigate.run1.answer.md 和课件画面；录制当天的实现以实际为准
- 06-sources + 07-cleanup：07-cleanup p46 第 1 步：提示里写 v1 源码文件为 src/components/MemoryGame.tsx。路径取自 materials/prepared/stale-timer.diff 和 3.3-fix.diff，但 v1 源码不在仓库里（practice/memory-v1 只有构建产物），录制时要先确认本地 v1 目录里确实有这个文件
- 06-sources + 07-cleanup：07-cleanup p48 第 3 步：提示里写“3.5 排练成品的 DodgeGame.tsx”，并说 3.5 没有引入 Phaser。这两点依据 05-game-studio 的 diffstat（无新依赖）和 3.5-summary.json，源码本身不在仓库里
- 06-sources + 07-cleanup：07-cleanup p47 第 4 步：现场对照时打开 practice/memory-v1 和 practice/memory-stale-timer 两个试玩页，手动操作能否复现，取决于手速是否赶在 900ms 之内。仓库里只有 stale-timer-check.py 的脚本核对记录，没有手动操作的记录，所以提示写成“现象不同就如实说明，以脚本核对记录为准”
- 06-sources + 07-cleanup：06-sources p42 第 2 步：提示写“不展示含本机路径的权限配置”，这是根据 README 中配置使用的 <运行目录>/<记忆目录> 占位符推断的录制注意事项，不是仓库里写明的要求
- 04-plugin + 05-game-studio：04-plugin p25 第 2 步：提示讲师打开 plugin.json 参考链接指认 Interactive、Write。仓库里没有 manifest 原文，这一点依据的是课件页面和口播的说法
- 04-plugin + 05-game-studio：04-plugin p28 第 1 步：用交互式 tools/clean-codex.sh --tap（不带 exec）开新会话，并在“浏览器自动打开的请求面板”里查看。依据是 clean-codex.sh 的注释和 CLEAN_CODEX_NO_OPEN 的说明；预检里实际跑的是 --tap -- exec
- 04-plugin + 05-game-studio：05-game-studio p34 第 4 步：“记进问题清单”没有写具体文件，仓库里找不到问题清单放在哪个文件
- 04-plugin + 05-game-studio：05-game-studio p35 第 2 步：git diff -- package.json package-lock.json 默认练习仓库有 package-lock.json（推断依据是 run-v3.sh 用了 npm ci），未逐一核实
- 04-plugin + 05-game-studio：05-game-studio p36 第 1 步：config.toml 路径写成 lab-runs/ch03-plugin/home/.codex/config.toml，依据是 clean-codex.sh 第 71 行的 $SIM_HOME/.codex/config.toml 和预检用的 home；学员自己的环境路径可能不同
- 04-plugin + 05-game-studio：05-game-studio p36 第 1 步、04-plugin p28 第 2 步：“remove 只口头带过”“插件保持启用到 3.5”是录制安排上的建议，课程文档里没有明确决定
- 04-plugin + 05-game-studio：05-game-studio p32 第 1 步：在练习仓库根目录通过 --tap 用同一个隔离 home 开新会话，这样做是参照 run-v3.sh 的 cc() 函数推出来的，排练用的是 exec 而不是交互会话

## 未检查

- 没有出声试读，也没有按提示走一遍录制；提示是否够用、是否太长，要在第一次实录后回看。
- 第 0 章每页只有一步，提示按讲师轮次写在各段之前，没有对应课件分步；双讲师的站位和机位仓库里没有约定。

window.readingPlan = {
  "scope": "3.2.2–3.2.3 完整 Skill 的组成与实际使用",
  "intro": "先解读官方文章，再用 PPT 归纳完整 Skill 的组成；随后接续 3.2.1 的 E 版显式调用日志，核对正文、Reference、实际试玩与报告。F 版自然语言触发保留独立对照。",
  "status": "2026-11-18：3.2.3 已接入 E 版主讲与 F 版备用，逐字稿、15 处日志停留、截图与回看 PPT 对应；待讲师审阅，两部分融合仍待讨论。",
  "scriptComplete": true,
  "sourcePlanning": {
    "content": "沿 Anthropic 文章解释核心指导、引用、工作流程、模板、示例和脚本，用 OpenAI 指南补齐工作边界及配套文件分工；五页 PPT 总结组成、连接、正文写法与渐进披露。",
    "purpose": "拿到一份 Skill，能解释正文与配套文件分别支持什么工作、怎样取用，并知道需要从运行记录核对实际采用情况。"
  },
  "units": [
    {
      "section": "3.2.2",
      "group": "认识完整 Skill 的组成与组织",
      "explanation": "Anthropic 原文主讲至报告模板，随后直接回 PPT 总结；其余 Anthropic 解读及 OpenAI 原文解读作为可选内容保留。",
      "transition": "带着正文职责与引用关系，接着看 3.2.1 的 E 版显式调用如何继续完成试玩。"
    },
    {
      "section": "3.2.3",
      "group": "从日志看 Skill 怎样被使用",
      "explanation": "正文提供方法 → Reference 经工具读入 → 生成并运行试玩脚本、核对状态和截图 → 报告要求对应实际交付；主讲沿 E 版同一轮记录，F 版独立备用。",
      "transition": "主讲在此收束，接 3.3 将已有作品经验整理成 Skill；Plugin 保留为可选讲解。"
    },
    {
      "section": "3.2.4",
      "group": "通过 Plugin 组织和分发能力",
      "explanation": "可选讲解，默认折叠；保留全部原稿、材料和定位。主讲可以在 3.2.3 结束后直接进入 3.3。",
      "transition": "完成 3.2；紫色风格由 3.3 展开。"
    }
  ],
  "materials": {
    "official": {
      "label": "setup-demo-app 官方原文",
      "url": "https://developers.openai.com/blog/eval-skills#a-sample-skill"
    },
    "playtest": {
      "label": "game-playtest 固定版本",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
    },
    "memory": {
      "label": "05 号 · 检查后继续看截图（原始记录）",
      "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=86"
    },
    "checks": {
      "label": "05 号 · 浏览器检查原始输出",
      "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=85"
    },
    "structurePpt": {
      "label": "PPT · 结构与职责",
      "url": "index.html?mode=slides&part=2&step=0#p07i"
    },
    "purposePpt": {
      "label": "PPT · 官方示例用途",
      "url": "index.html?mode=slides&part=2&step=0#p07j"
    },
    "contentsPpt": {
      "label": "PPT · 具体指导与作用",
      "url": "index.html?mode=slides&part=2&step=0#p07k"
    },
    "examplesPpt": {
      "label": "PPT · 模板与示例",
      "url": "index.html?mode=slides&part=2&step=0#p07l"
    },
    "organizationPpt": {
      "label": "PPT · 正文组织比较",
      "url": "index.html?mode=slides&part=2&step=0#p07m"
    },
    "lengthPpt": {
      "label": "PPT · 篇幅取舍",
      "url": "index.html?mode=slides&part=2&step=0#p07n"
    },
    "exampleFilled": {
      "label": "PPT · 填好的报告示例",
      "url": "index.html?mode=slides&part=2&step=1#p07l"
    },
    "exampleCondition": {
      "label": "PPT · 同句中的条件与要求",
      "url": "index.html?mode=slides&part=2&step=2#p07l"
    },
    "resourceTransition": {
      "label": "PPT · 进入配套资源",
      "url": "index.html?mode=slides&part=2&step=0#p07n"
    },
    "overview": {
      "label": "game-playtest · 工作视角",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#overview"
    },
    "workflow": {
      "label": "game-playtest · 推荐流程",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#preferred-workflow"
    },
    "tooling": {
      "label": "game-playtest · 工具与条件",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#tooling-guidance"
    },
    "common": {
      "label": "game-playtest · 检查范围",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#common-checks"
    },
    "reporting": {
      "label": "game-playtest · 报告要求",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#reporting-standard"
    },
    "references": {
      "label": "game-playtest · 资料入口",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references"
    },
    "faceEvidence": {
      "label": "第一节 · 朝向检查证据",
      "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=86"
    },
    "countEvidence": {
      "label": "补充案例 · 步数刷新问题",
      "url": "http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=79&mark=step-count&find=%E2%9C%98%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E5%90%8C%E6%A0%B7%E8%AE%A1%201%20%E6%AD%A5%20-%3E%201"
    },
    "responsive": {
      "label": "game-playtest · 浏览器与视口检查",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#responsive-and-browser-checks"
    },
    "workflowSummaryPpt": {
      "label": "PPT · 完整任务指导小结",
      "url": "index.html?mode=slides&part=2&step=0#p07j1"
    },
    "bodySpec": {
      "label": "Agent Skills · 正文格式规范",
      "url": "https://agentskills.io/specification#body-content",
      "purpose": "核实正文没有固定格式要求。"
    },
    "old5": {
      "label": "04 号游戏（历史 ID：old5）",
      "url": "http://127.0.0.1:4397/game-only.html?run=old5"
    },
    "trialA": {
      "label": "任务 1 · 请求、输出与报告 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-a"
    },
    "earlyClear": {
      "label": "任务 1 · 第三对后的实际画面",
      "url": "../../materials/playtest-old5-20261111/early-clear.png"
    },
    "trialB": {
      "label": "任务 2 · 请求与读取 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b"
    },
    "restartResult": {
      "label": "任务 2 · 重开复验 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b-verify"
    },
    "restartScript": {
      "label": "任务 2 · 实际脚本原文 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b-script"
    },
    "trialC": {
      "label": "任务 3 · 请求与读取 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-c"
    },
    "narrowResult": {
      "label": "任务 3 · 视口检查 · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-c-verify"
    },
    "desktopPair": {
      "label": "任务 3 · 桌面画面",
      "url": "../../materials/playtest-old5-20261111/desktop-first-pair.png"
    },
    "mobileBottom": {
      "label": "任务 3 · 窄屏底部",
      "url": "../../materials/playtest-old5-20261111/mobile-bottom.png"
    },
    "checklist": {
      "label": "试玩清单 · 恢复检查",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/playtest-checklist.md#universal-checks"
    },
    "frontend": {
      "label": "前端 Skill · 判断标准",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards"
    },
    "splitCore": {
      "label": "PPT · 正文与 Reference",
      "url": "index.html?mode=slides&step=0#p07o"
    },
    "splitFiles": {
      "label": "PPT · 脚本与素材",
      "url": "index.html?mode=slides&step=1#p07o"
    },
    "connectScript": {
      "label": "PPT · 脚本怎样接入正文",
      "url": "index.html?mode=slides&step=0#p07p"
    },
    "connectAsset": {
      "label": "PPT · 素材怎样接入正文",
      "url": "index.html?mode=slides&step=0#p07p"
    },
    "compareBodies": {
      "label": "PPT · 两份正文的组织",
      "url": "index.html?mode=slides&step=0#p07m"
    },
    "template": {
      "label": "PPT · 报告模板",
      "url": "index.html?mode=slides&step=0#p07l"
    },
    "filledTemplate": {
      "label": "PPT · 填写示例",
      "url": "index.html?mode=slides&step=1#p07l"
    },
    "conditional": {
      "label": "PPT · 条件与要求",
      "url": "index.html?mode=slides&step=2#p07l"
    },
    "usageA": {
      "label": "PPT · 任务 1 的读取",
      "url": "index.html?mode=slides&step=0#p07q"
    },
    "usageB": {
      "label": "PPT · 任务 2 的读取",
      "url": "index.html?mode=slides&step=1#p07q"
    },
    "usageC": {
      "label": "PPT · 任务 3 的读取",
      "url": "index.html?mode=slides&step=2#p07q"
    },
    "usageSummary": {
      "label": "PPT · 渐进披露与篇幅",
      "url": "index.html?mode=slides&step=3#p07q"
    },
    "readB": {
      "label": "预跑材料 · run-b-read · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-b-read"
    },
    "readC": {
      "label": "预跑材料 · run-c-read · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-c-read"
    },
    "reportA": {
      "label": "预跑材料 · run-a-report · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-a-report"
    },
    "outputA": {
      "label": "预跑材料 · run-a-output · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=playtest-a-output"
    },
    "supportGuide": {
      "label": "OpenAI · 配套资料、脚本与素材",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/openai.html#resources",
      "originalUrl": "https://developers.openai.com/plugins/build/skills#add-supporting-resources",
      "purpose": "对照 references、assets、scripts 的使用方式。"
    },
    "disclosure": {
      "label": "Agent Skills · 渐进披露",
      "url": "https://agentskills.io/specification#progressive-disclosure"
    },
    "mapEntry": {
      "label": "PPT · Skill 全局：入口与核心指导",
      "url": "index.html?mode=slides&step=0#p07o"
    },
    "mapSupport": {
      "label": "PPT · Skill 全局：三类配套文件",
      "url": "index.html?mode=slides&step=0#p07os"
    },
    "mapOther": {
      "label": "PPT · Skill 全局：专项指导边界",
      "url": "index.html?mode=slides&step=0#p07ox"
    },
    "connectAll": {
      "label": "PPT · 条件与入口连接配套文件",
      "url": "index.html?mode=slides&step=0#p07p"
    },
    "connectUse": {
      "label": "PPT · 配套文件引用小结",
      "url": "index.html?mode=slides&step=0#p07p"
    },
    "bodyRoles": {
      "label": "PPT · 正文组织工作知识",
      "url": "index.html?mode=slides&step=0#p07m"
    },
    "bodyExamples": {
      "label": "PPT · 正文的具体写法",
      "url": "index.html?mode=slides&step=1#p07m"
    },
    "progressMeta": {
      "label": "PPT · 识别与选用",
      "url": "index.html?mode=slides&step=0#p07q"
    },
    "progressBody": {
      "label": "PPT · 读取核心指导",
      "url": "index.html?mode=slides&step=1#p07q"
    },
    "progressMore": {
      "label": "PPT · 按任务展开细节",
      "url": "index.html?mode=slides&step=2#p07q"
    },
    "task1Map0": {
      "label": "PPT · 共同方法怎样用于当前任务（第 1 步）",
      "url": "index.html?mode=slides&step=0#p07t1"
    },
    "task1Map1": {
      "label": "PPT · 共同方法怎样用于当前任务（第 2 步）",
      "url": "index.html?mode=slides&step=1#p07t1"
    },
    "task1Map2": {
      "label": "PPT · 共同方法怎样用于当前任务（第 3 步）",
      "url": "index.html?mode=slides&step=2#p07t1"
    },
    "task2Map0": {
      "label": "PPT · Reference 怎样变成具体检查（第 1 步）",
      "url": "index.html?mode=slides&step=0#p07t2"
    },
    "task2Map1": {
      "label": "PPT · Reference 怎样变成具体检查（第 2 步）",
      "url": "index.html?mode=slides&step=1#p07t2"
    },
    "task2Map2": {
      "label": "PPT · Reference 怎样变成具体检查（第 3 步）",
      "url": "index.html?mode=slides&step=2#p07t2"
    },
    "task3Map0": {
      "label": "PPT · 专项 Skill 怎样补充判断依据（第 1 步）",
      "url": "index.html?mode=slides&step=0#p07t3"
    },
    "task3Map1": {
      "label": "PPT · 专项 Skill 怎样补充判断依据（第 2 步）",
      "url": "index.html?mode=slides&step=1#p07t3"
    },
    "task3Map2": {
      "label": "PPT · 专项 Skill 怎样补充判断依据（第 3 步）",
      "url": "index.html?mode=slides&step=2#p07t3"
    },
    "referencesBackup": {
      "label": "备用原文节选 · References",
      "url": "task-originals.html#references"
    },
    "toolingBackup": {
      "label": "备用原文节选 · Tooling Guidance",
      "url": "task-originals.html#tooling"
    },
    "frontendBackup": {
      "label": "备用原文节选 · Frontend Standards",
      "url": "task-originals.html#frontend"
    },
    "checklistBackup": {
      "label": "备用原文节选 · Universal checks",
      "url": "task-originals.html#checklist"
    },
    "reportingBackup": {
      "label": "备用原文节选 · Reporting Standard",
      "url": "task-originals.html#reporting"
    },
    "workflowBackup": {
      "label": "备用原文节选 · Preferred Workflow",
      "url": "task-originals.html#workflow"
    },
    "plugin-tree": {
      "label": "Game Studio 固定版本目录",
      "url": "https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio"
    },
    "plugin-concept": {
      "label": "官方 Plugin 架构（备查）",
      "url": "https://developers.openai.com/plugins/concepts/plugins"
    },
    "plugin-hooks": {
      "label": "官方原文 · Hook 事件与支持条件",
      "url": "https://developers.openai.com/plugins/build/plugins#bundled-mcp-servers-and-lifecycle-hooks"
    },
    "p324a-0": {
      "label": "PPT · p324a · 状态 1",
      "url": "index.html?mode=slides&step=0#p324a"
    },
    "p324a-1": {
      "label": "PPT · p324a · 状态 2",
      "url": "index.html?mode=slides&step=1#p324a"
    },
    "p324a-2": {
      "label": "PPT · Plugin 整包与资源关系（旧入口）",
      "url": "index.html?mode=slides&step=1#p324a"
    },
    "p324b-0": {
      "label": "PPT · Plugin 整包与资源关系（旧入口）",
      "url": "index.html?mode=slides&step=1#p324a"
    },
    "p324b-1": {
      "label": "PPT · Plugin 整包与资源关系（旧入口）",
      "url": "index.html?mode=slides&step=1#p324a"
    },
    "p324b-2": {
      "label": "PPT · Plugin 整包与资源关系（旧入口）",
      "url": "index.html?mode=slides&step=1#p324a"
    },
    "plugin-run-source": {
      "label": "完整 Plugin 预跑 · source",
      "url": "../../materials/plugin-install-20261112/evidence.html#source"
    },
    "plugin-run-install": {
      "label": "完整 Plugin 预跑 · install · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=plugin-install"
    },
    "plugin-run-request": {
      "label": "完整 Plugin 预跑 · request（请求留存；独立原件未找到）",
      "url": "../../materials/plugin-install-20261112/evidence.html#request"
    },
    "plugin-run-read": {
      "label": "完整 Plugin 预跑 · read · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=plugin-read"
    },
    "plugin-run-result": {
      "label": "完整 Plugin 预跑 · result · Inspect",
      "url": "http://127.0.0.1:4397/inspect/?topic=plugin-result"
    },
    "plugin-manifest": {
      "label": "Game Studio · 插件声明",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/.codex-plugin/plugin.json"
    },
    "plugin-skill-mcp": {
      "label": "官方原文 · Skill 与 MCP 的分工",
      "url": "https://developers.openai.com/plugins/concepts/skills#how-skills-complement-an-mcp-server"
    },
    "plugin-shapes": {
      "label": "课后回查 · Plugin 组成选择",
      "url": "https://developers.openai.com/plugins/concepts/plugins#choose-a-plugin-shape"
    },
    "plugin-skill-router": {
      "label": "game-studio · 适用任务",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-studio/SKILL.md#use-this-skill-when"
    },
    "plugin-skill-sprite": {
      "label": "sprite-pipeline · 用途",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/sprite-pipeline/SKILL.md#overview"
    },
    "plugin-skill-playtest": {
      "label": "game-playtest · 试玩指导",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md"
    },
    "plugin-skills-tree": {
      "label": "Game Studio · 完整 Skill 目录",
      "url": "https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills"
    },
    "plugin-four-preparation": {
      "label": "录前准备 · 四份独立 Skill",
      "url": "install-skill.html"
    },
    "authoringStructure": {
      "label": "Anthropic · 单文件 Skill 图",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#structure",
      "originalUrl": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#visual-overview-from-simple-to-complex",
      "purpose": "指认同一份文件中的名称、描述和 PDF 处理正文。"
    },
    "authoringReferences": {
      "label": "Anthropic · 附带参考资料的 Skill 图",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#references",
      "originalUrl": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#visual-overview-from-simple-to-complex",
      "purpose": "对照 Overview 引用和 PDF Processing Advanced Reference、forms.md 的实际内容。"
    },
    "authoringWorkflow": {
      "label": "Anthropic · 工作流程与检查",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#workflow",
      "originalUrl": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#use-workflows-for-complex-tasks",
      "purpose": "完整的 PDF 填写流程，包含中间校验和失败返回。"
    },
    "authoringPatterns": {
      "label": "Anthropic · 报告模板",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#template",
      "originalUrl": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#common-patterns",
      "purpose": "看报告模板如何约定输出结构。"
    },
    "authoringScripts": {
      "label": "Anthropic · 配套脚本",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#script-example",
      "originalUrl": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#provide-utility-scripts",
      "purpose": "看脚本的运行输入、命令与输出格式。"
    },
    "workflowBoundary": {
      "label": "OpenAI · 工作边界",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/openai.html#boundary",
      "originalUrl": "https://developers.openai.com/plugins/build/skills#define-the-workflow-boundary",
      "purpose": "核对正文要交代的输入、步骤、输出及条件。"
    },
    "authoringExamples": {
      "label": "Anthropic · 输入输出示例",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#examples",
      "purpose": "看具体输入对应什么样的输出。"
    },
    "authoringConditions": {
      "label": "Anthropic · 条件流程",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#conditions",
      "purpose": "对照创建新文档和修改已有文档的分支。"
    },
    "authoringScriptUse": {
      "label": "Anthropic · 运行或查阅脚本",
      "url": "http://127.0.0.1:4397/sources/skill-authoring/anthropic.html#script-use",
      "purpose": "连续对照 Run the script 与 Read it as reference。"
    },
    "anthropicArticle": {
      "label": "Anthropic · Skill 编写指南",
      "url": "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices",
      "purpose": "讲稿提到的完整官方文章，供课后继续阅读。"
    },
    "openaiArticle": {
      "label": "OpenAI · Skill 编写指南",
      "url": "https://developers.openai.com/plugins/build/skills",
      "purpose": "讲稿提到的完整官方文章，供课后继续阅读。"
    },
    "log323-1-0": {
      "label": "Inspect · 请求与任务边界",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-1&position=0",
      "purpose": "E 版 e-short 原生记录第 10 行；对应本段第 1 次停留。"
    },
    "log323-1-1": {
      "label": "Inspect · 模型确认清单位置",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-1&position=1",
      "purpose": "E 版 e-short 原生记录第 24 行；对应本段第 2 次停留。"
    },
    "log323-1-2": {
      "label": "Inspect · 模型发出读取请求",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-1&position=2",
      "purpose": "E 版 e-short 原生记录第 37 行；对应本段第 3 次停留。"
    },
    "log323-1-3": {
      "label": "Inspect · 工具返回配套内容",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-1&position=3",
      "purpose": "E 版 e-short 原生记录第 41 行；对应本段第 4 次停留。"
    },
    "log323-2-0": {
      "label": "Inspect · 结合代码决定实际验证",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-2&position=0",
      "purpose": "E 版 e-short 原生记录第 52 行；对应本段第 1 次停留。"
    },
    "log323-2-1": {
      "label": "Inspect · 模型安排本次试玩",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-2&position=1",
      "purpose": "E 版 e-short 原生记录第 64 行；对应本段第 2 次停留。"
    },
    "log323-2-2": {
      "label": "Inspect · 将配对检查展开成具体动作",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-2&position=2",
      "purpose": "E 版 e-short 原生记录第 64 行；对应本段第 3 次停留。"
    },
    "log323-3-0": {
      "label": "Inspect · 启动后取得游戏状态",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=0",
      "purpose": "E 版 e-short 原生记录第 113 行；对应本段第 1 次停留。"
    },
    "log323-3-1": {
      "label": "Inspect · 模型编写试玩脚本",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=1",
      "purpose": "E 版 e-short 原生记录第 164 行；对应本段第 2 次停留。"
    },
    "log323-4-0": {
      "label": "Inspect · 模型按报告标准组织内容",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-4&position=0",
      "purpose": "E 版 e-short 原生记录第 388 行；对应本段第 1 次停留。"
    },
    "log323-4-1": {
      "label": "Inspect · 模型写入报告的第一项问题",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-4&position=1",
      "purpose": "E 版 e-short 原生记录第 391 行；对应本段第 2 次停留。"
    },
    "log323-3-2": {
      "label": "Inspect · 工具运行试玩脚本",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=2",
      "purpose": "E 版 e-short 原生记录第 169 行；对应本段第 3 次停留。"
    },
    "log323-3-3": {
      "label": "Inspect · 工具返回试玩结果",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=3",
      "purpose": "E 版 e-short 原生记录第 172 行；对应本段第 4 次停留。"
    },
    "log323-3-4": {
      "label": "Inspect · 模型打开截图核对",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=5",
      "purpose": "E 版 e-short 原生记录第 178 行；对应本段第 5 次停留。"
    },
    "log323-4-2": {
      "label": "Inspect · 最终回答中的结论与依据",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-4&position=2",
      "purpose": "E 版 e-short 原生记录第 404 行；对应本段第 3 次停留。"
    },
    "log323-e-shot": {
      "label": "E 版原始截图 · 三对即通关",
      "url": "../../materials/playtest-prompts-20261118/e-premature-win.png",
      "purpose": "与 E 版第 178 行 view_image 指向同一文件；原图未裁改。"
    },
    "log323-f-backup": {
      "label": "备用 · F 独立运行的对应证据",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-f-backup&position=0",
      "purpose": "按需核对 F 版正文、Reference、实际结果与最终回答。主讲不切入，不与 E 的截图或结果混用。"
    },
    "plugin-routing": {
      "label": "game-studio · 任务分流",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-studio/SKILL.md#routing-rules"
    },
    "plugin-ui": {
      "label": "game-ui-frontend · 界面方法",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards"
    },
    "plugin-ui-refs": {
      "label": "界面指导 · 资料引用",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-ui-frontend/SKILL.md#references"
    },
    "plugin-playtest-refs": {
      "label": "试玩指导 · 资料引用",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#references"
    },
    "plugin-checklist": {
      "label": "共同的试玩清单",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/references/playtest-checklist.md#universal-checks"
    },
    "plugin-sprite-flow": {
      "label": "sprite-pipeline · 工作流程",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/sprite-pipeline/SKILL.md#core-workflow"
    },
    "plugin-script": {
      "label": "动画条归一化脚本",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/scripts/normalize_sprite_strip.py"
    },
    "log323-3-5": {
      "label": "Inspect · 模型根据运行结果确认问题",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=4",
      "purpose": "E 版原生记录第 175 行；显示模型本身的判断。"
    },
    "log323-3-6": {
      "label": "Inspect · 模型根据截图核对异常画面",
      "url": "http://127.0.0.1:4397/inspect/?topic=selection-use-3&position=6",
      "purpose": "E 版原生记录第 184 行；显示模型本身的判断。"
    },
    "log323-return-workflow": {
      "label": "回看 Skill · 试玩步骤",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#preferred-workflow"
    },
    "log323-return-report": {
      "label": "回看 Skill · 报告要求",
      "url": "https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#reporting-standard"
    },
    "useSummary": {
      "label": "PPT · Skill 的指导怎样落实到任务中",
      "url": "index.html?mode=slides#p323-summary"
    }
  },
  "purposeSlide": {
    "title": "setup-demo-app：搭建最小演示应用",
    "content": "画面呈现“界面实验／问题复现 → 搭建最小 React 演示应用”，浏览器框只标 Header 与两张 Card，并注明交付结构示意。技术栈、目录和步骤不放在这页，到官方原文里读。",
    "position": "结构介绍后、打开官方原文前；与用途介绍一句对应",
    "status": "历史取材，不在当前正式页序；setup-demo-app 用途页保留原深链。"
  },
  "routes": {
    "r322-1": [
      {
        "step": 0,
        "surface": "Anthropic 文章 · 单文件 Skill 的文件头与正文",
        "materials": [
          "authoringStructure"
        ],
        "kind": "browser"
      },
      {
        "step": 1,
        "surface": "Anthropic 文章 · 扩展 Skill 的正文与参考资料",
        "materials": [
          "authoringReferences"
        ],
        "kind": "browser"
      },
      {
        "step": 2,
        "surface": "Anthropic 文章 · PDF 填写流程与检查",
        "materials": [
          "authoringWorkflow"
        ],
        "kind": "browser"
      },
      {
        "step": 3,
        "surface": "Anthropic 文章 · 模板、示例与条件流程",
        "materials": [
          "authoringPatterns",
          "authoringExamples",
          "authoringConditions"
        ],
        "kind": "browser",
        "beats": [
          {
            "kind": "browser",
            "materials": [
              "authoringPatterns"
            ],
            "text": "定位 「报告模板」，指摘要、发现和建议的结构。"
          },
          {
            "paragraphs": [
              0,
              1
            ]
          },
          {
            "kind": "ppt",
            "text": "主讲到报告模板为止，跳过下方可选解读，直接进入总结。",
            "jumpTo": "cue-mapEntry",
            "jumpLabel": "继续主讲：完整 Skill 的总结"
          },
          {
            "kind": "browser",
            "materials": [
              "authoringExamples"
            ],
            "text": "点“下一处”到 「输入输出示例」，对照输入与期望输出。",
            "optional": "可选解读 · 输入输出示例与条件流程"
          },
          {
            "paragraphs": [
              2
            ]
          },
          {
            "kind": "browser",
            "materials": [
              "authoringConditions"
            ],
            "text": "点“下一处”到 「条件流程」，对照创建与修改文档的分支。",
            "optional": "可选解读 · 输入输出示例与条件流程"
          },
          {
            "paragraphs": [
              3
            ]
          }
        ]
      },
      {
        "step": 4,
        "surface": "Anthropic 文章 · 脚本的运行与查阅",
        "materials": [
          "authoringScripts",
          "authoringScriptUse"
        ],
        "kind": "browser",
        "beats": [
          {
            "kind": "browser",
            "materials": [
              "authoringScripts"
            ],
            "text": "指运行命令和 Output format。"
          },
          {
            "paragraphs": [
              0
            ]
          },
          {
            "kind": "browser",
            "materials": [
              "authoringScriptUse"
            ],
            "text": "点“下一处”，对照运行与查阅两种用法。"
          },
          {
            "paragraphs": [
              1
            ]
          }
        ],
        "optional": "可选解读 · 脚本的运行与查阅"
      }
    ],
    "r322-2": [
      {
        "step": 0,
        "surface": "OpenAI 指南 · 工作边界",
        "materials": [
          "workflowBoundary",
          "bodySpec"
        ],
        "kind": "browser",
        "optional": "可选解读 · OpenAI 工作边界与配套文件"
      },
      {
        "step": 1,
        "surface": "OpenAI 指南 · 配套文件及取用要求",
        "materials": [
          "supportGuide"
        ],
        "kind": "browser",
        "optional": "可选解读 · OpenAI 工作边界与配套文件"
      }
    ]
  },
  "placements": {
    "3.2.2.1": [
      "r322-1"
    ],
    "3.2.2.2": [
      "r322-2"
    ]
  },
  "recordingLabels": {
    "r322-1": "3.2.2.1 沿官方文章认识完整 Skill",
    "r322-2": "3.2.2.2 可选解读：工作边界与配套文件的分工"
  },
  "plannedFrames": [
    {
      "id": "plan323-5",
      "number": "3.2.2.3",
      "title": "总结：完整 Skill 的组成、正文与连接",
      "group": "认识完整 Skill 的组成与组织",
      "screens": [
        {
          "surface": "PPT p07o · 同一套知识，按任务需要逐层取用 · 第 1 步：正文提供核心工作指导；下面展开它怎样组织一项工作",
          "action": "打开 p07o，完整结构图常显，突出 SKILL.md 文件头与正文；提到两篇文章时指页底 Anthropic、OpenAI 原文入口；讲完进入 p07m 展开正文。",
          "materials": [
            "mapEntry"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p07o",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p07m · Skill 正文通常要写清什么 · 第 1 步：任务边界",
          "action": "打开 p07m 第 1 步，依次指任务边界、工作方法、检查依据和交付要求。",
          "materials": [
            "bodyRoles"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07m",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "PPT p07m · Skill 正文通常要写清什么 · 第 2 步：工作方法",
          "action": "推进 p07m 第 2 步，逐项指下方写法：范围与输入、Step by step、检查说明或脚本、要求或模板；讲完进入 p07os。",
          "materials": [
            "bodyExamples"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07m",
            "step": 1
          },
          "kind": "ppt",
          "reuse": [
            3,
            4,
            5,
            6
          ]
        },
        {
          "surface": "PPT p07os · 同一套知识，按任务需要逐层取用 · 第 1 步：正文保留核心指导，资料、程序与素材按需取用",
          "action": "打开 p07os，回到同一张完整结构图，突出 references/、scripts/、assets/ 及查阅、运行、使用连线；其余内容淡显。",
          "materials": [
            "mapSupport"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p07os",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            7,
            8
          ]
        },
        {
          "surface": "PPT p07p · 从正文的一句引用，找到需要的文件 · 第 1 步：引用句怎样连接配套文件",
          "action": "打开 p07p 第 1 步，说明链接给出文件入口、描述交代使用场景；先读正文引用句，再沿箭头指 forms.md 中的用途与方法。",
          "materials": [
            "connectAll"
          ],
          "scriptStep": 3,
          "ppt": {
            "id": "p07p",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            9,
            10
          ]
        },
        {
          "surface": "PPT p07p · 从正文的一句引用，找到需要的文件 · 第 1 步：引用句怎样连接配套文件",
          "action": "停留 P3.2-12-01（p07p 第 1 步），用一句话总结脚本、模板和素材的引用；讲完进入 p07ox。",
          "materials": [
            "connectUse"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07p",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            11
          ]
        },
        {
          "surface": "PPT p07ox · 同一套知识，按任务需要逐层取用 · 第 1 步：同样通过引用，查阅另一份 Skill 的专项工作指导",
          "action": "打开 p07ox，回到完整结构图，突出另一份 Skill 与引用连线；讲完进入 3.2.3.1 的同轮调用记录。",
          "materials": [
            "mapOther"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p07ox",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            12,
            13
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-5",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 3
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 4
        },
        {
          "scene": "r323-5",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 2,
          "part": 2
        }
      ],
      "scriptSource": "r323-5",
      "status": "2026-11-18：按讲师手改稿合并原两段总结，已同步操作与画面；待讲师复看。",
      "explanation": "完整结构图作锚点；正文详情说明边界、步骤、检查与交付具体怎样写，引用详情用正文引用句指向文件，再比较运行脚本与使用模板。两张详情页采用流程与文件示意，不使用表格。",
      "boundary": "主讲五页、七个状态：完整图突出正文 → 正文详情两步 → 完整图突出配套文件 → 链接与描述详情两步 → 完整图突出另一份 Skill。所有锚点图的节点始终可见、位置一致。",
      "presentation": "sequence",
      "arrangement": [
        "完整结构图突出正文，进入正文写法详情：先交代边界、方法、检查与交付，再说明分别用范围与输入、逐步指导、检查说明或脚本、要求或模板来写。",
        "回到完整图突出 references、scripts、assets，再进入链接与描述详情；最后回到完整图突出另一份 Skill，说明同样可以沿引用查阅专项指导。"
      ],
      "transition": "接续 3.2.1 的 E 版显式调用日志，核对正文、Reference、工具执行与最终报告。",
      "legacyAliases": [
        "plan323-6"
      ]
    },
    {
      "id": "plan323-log1",
      "number": "3.2.3.1",
      "title": "模型怎样沿引用找到资料",
      "group": "从日志看 Skill 怎样被使用",
      "scriptSource": "r323-log1",
      "screens": [
        {
          "surface": "Inspect · 请求与任务边界",
          "materials": [
            "log323-1-0"
          ],
          "scriptStep": 0,
          "kind": "inspect",
          "action": "打开连续日志第 1 处「请求与任务边界」；指实际试玩、不改代码与报告要求",
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "Inspect · 模型确认清单位置",
          "materials": [
            "log323-1-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "action": "Inspect 第 2 条；指模型根据 Skill 路径确认 playtest-checklist.md 的位置。",
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "Inspect · 模型发出读取请求",
          "materials": [
            "log323-1-2"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "action": "Inspect 第 3 条；指 cat 命令中的清单路径。",
          "reuse": [
            4
          ]
        },
        {
          "surface": "Inspect · 工具返回配套内容",
          "materials": [
            "log323-1-3"
          ],
          "scriptStep": 3,
          "kind": "inspect",
          "action": "Inspect 第 4 条；指工具返回的 Universal checks，不逐条讲解清单。",
          "reuse": [
            5,
            6
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-log1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-log1",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-log1",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 3,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "从本次请求没有逐条交代的试玩方法，引出 Skill 保存可复用方法的作用；先用资料入口、实际读取和返回解释详细清单怎样供任务使用。 路径与命令只讲到支持理解取用过程，不逐行讲路径计算；清单用来提醒检查范围，随后进入实际采用方法的例子。",
      "arrangement": [
        "从本次请求没有逐条交代的试玩方法，引出 Skill 保存可复用方法的作用；先用资料入口、实际读取和返回解释详细清单怎样供任务使用。",
        "路径与命令只讲到支持理解取用过程，不逐行讲路径计算；清单用来提醒检查范围，随后进入实际采用方法的例子。"
      ],
      "boundary": "主讲 E 版显式调用的同一轮记录；F 版自然语言触发为独立对照，不拼接成一次运行。",
      "status": "2026-11-18：保留讲师手改开场，按模型寻找资料、形成计划、执行与组织报告调整口播和日志；待讲师审阅。",
      "legacyAliases": [
        "plan323-1",
        "plan323-2"
      ]
    },
    {
      "id": "plan323-log2",
      "number": "3.2.3.2",
      "title": "模型怎样用 Skill 完成这次试玩",
      "group": "从日志看 Skill 怎样被使用",
      "scriptSource": "r323-log2",
      "screens": [
        {
          "surface": "Inspect · 结合代码决定实际验证",
          "materials": [
            "log323-2-0"
          ],
          "scriptStep": 0,
          "kind": "inspect",
          "scriptSource": "r323-log2",
          "action": "连续日志第 5 处；只指三处高亮：Playwright、Does the game boot correctly、Mobile viewport，分别对应工具建议与检查清单。",
          "reuse": [
            0
          ]
        },
        {
          "surface": "Inspect · 模型安排本次试玩",
          "materials": [
            "log323-2-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "scriptSource": "r323-log2",
          "action": "连续日志第 6 处；指写 Playwright 脚本及验证通关问题的计划。",
          "reuse": [
            1
          ]
        },
        {
          "surface": "Inspect · 将配对检查展开成具体动作",
          "materials": [
            "log323-2-2"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "scriptSource": "r323-log2",
          "action": "连续日志第 7 处；先指 as a player would 与 deterministic is better，再指 Script 2 的配对和通关检查。",
          "reuse": [
            2
          ]
        },
        {
          "surface": "Inspect · 模型编写试玩脚本",
          "materials": [
            "log323-3-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 8 处；快速指两次 click、snapshot 和 screenshot，不展开代码。",
          "reuse": [
            3
          ]
        },
        {
          "surface": "Inspect · 工具运行试玩脚本",
          "materials": [
            "log323-3-2"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 9 处；指执行命令中的 p02_play.py",
          "reuse": [
            4
          ]
        },
        {
          "surface": "Inspect · 工具返回试玩结果",
          "materials": [
            "log323-3-3"
          ],
          "scriptStep": 3,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 10 处；指 after pair 3 与尝试点击剩余牌后的结果。",
          "reuse": [
            5
          ]
        },
        {
          "surface": "Inspect · 模型根据运行结果确认问题",
          "materials": [
            "log323-3-5"
          ],
          "scriptSource": "r323-log3",
          "scriptStep": 5,
          "kind": "inspect",
          "action": "连续日志第 11 处；指第 175 行 CONFIRMED、三对即通关与点击剩余牌无效的判断，最后指 Let me view the screenshots。",
          "reuse": [
            6
          ]
        },
        {
          "surface": "Inspect · 模型打开截图核对",
          "materials": [
            "log323-3-4",
            "log323-e-shot"
          ],
          "scriptStep": 4,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 12 处；指第 178 行截图路径，再点击「查看本步截图」；看完关闭图片继续下一处。",
          "reuse": [
            7
          ]
        },
        {
          "surface": "Inspect · 模型根据截图核对异常画面",
          "materials": [
            "log323-3-6"
          ],
          "scriptSource": "r323-log3",
          "scriptStep": 6,
          "kind": "inspect",
          "action": "连续日志第 13 处；指第 184 行第一段，仅讲截图对提前通关问题的核对，不展开后面的界面评价。",
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "Inspect · 模型按报告标准组织内容",
          "materials": [
            "log323-4-0"
          ],
          "scriptStep": 0,
          "kind": "inspect",
          "scriptSource": "r323-log4",
          "action": "连续日志第 14 处；定位第 388 行 per the reporting standard 所在句。",
          "reuse": [
            10,
            11
          ]
        },
        {
          "surface": "Inspect · 模型写入报告的第一项问题",
          "materials": [
            "log323-4-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "scriptSource": "r323-log4",
          "action": "连续日志第 15 处；停在写入 playtest-report.md 的第一个问题，依次指玩家看到、复现、证据、为什么重要、归属",
          "reuse": [
            12,
            13
          ]
        },
        {
          "surface": "Inspect · 最终回答中的结论与依据",
          "materials": [
            "log323-4-2",
            "log323-f-backup"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "scriptSource": "r323-log4",
          "action": "连续日志第 16 处；指最终回复开头与提前通关问题，不展开其余结论。讲完切回 Game Playtest 的 SKILL.md。",
          "reuse": [
            14
          ]
        },
        {
          "surface": "GitHub · 回看 Skill 的试玩步骤与报告要求",
          "materials": [
            "log323-return-workflow",
            "log323-return-report"
          ],
          "scriptSource": "r323-log4",
          "scriptStep": 3,
          "kind": "browser",
          "action": "打开「回看 Skill · 试玩步骤」，指 Preferred Workflow 的主要操作与关键截图要求，以及 Tooling Guidance 的 Playwright 建议。",
          "beats": [
            {
              "kind": "browser",
              "materials": [
                "log323-return-workflow"
              ],
              "text": "回看主要操作、关键截图和 Playwright 建议。"
            },
            {
              "paragraphs": [
                0
              ]
            },
            {
              "paragraphs": [
                1
              ],
              "hidden": true
            },
            {
              "kind": "browser",
              "materials": [
                "log323-return-report"
              ],
              "text": "回看报告要求，随后返回总结 PPT。"
            },
            {
              "paragraphs": [
                2
              ]
            }
          ],
          "reuse": [
            15,
            16,
            17
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-log2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-log2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log2",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 3,
          "part": 3
        }
      ],
      "presentation": "sequence",
      "explanation": "核心收获：将希望复用的工具选择、检查方法和交付要求写进 Skill，为模型提供明确的工作方法；用本次实际采用的记录解释其作用，不只逐项证明动作与原文对应。 前面保留工具选择、启动和手机视口对检查范围的说明；从写脚本的计划起，沿提前通关疑点推进，不再逐项展开初始截图、窗口变化、随机点击和重开。 配对计划 → 快速带过脚本与执行 → 工具结果（172）→ 模型明确确认问题（175）→ 打开截图（178）→ 模型读图后的核对（184）→ 报告。严格区分工具观察与模型判断；截图前已确认问题，不能讲成看截图才首次发现。 保留原稿的 scriptSource、scriptStep 编辑坐标；各项检查分成不同脚本，当前没有修改游戏代码，不称修改后的回归测试。",
      "arrangement": [
        "核心收获：将希望复用的工具选择、检查方法和交付要求写进 Skill，为模型提供明确的工作方法；用本次实际采用的记录解释其作用，不只逐项证明动作与原文对应。",
        "前面保留工具选择、启动和手机视口对检查范围的说明；从写脚本的计划起，沿提前通关疑点推进，不再逐项展开初始截图、窗口变化、随机点击和重开。",
        "配对计划 → 快速带过脚本与执行 → 工具结果（172）→ 模型明确确认问题（175）→ 打开截图（178）→ 模型读图后的核对（184）→ 报告。严格区分工具观察与模型判断；截图前已确认问题，不能讲成看截图才首次发现。",
        "保留原稿的 scriptSource、scriptStep 编辑坐标；各项检查分成不同脚本，当前没有修改游戏代码，不称修改后的回归测试。",
        "结尾简短回看试玩与报告要求，具体对应与写作启示统一在下一页 PPT 总结，不重复展开。"
      ],
      "boundary": "主讲 E 版显式调用的同一轮记录；F 版自然语言触发为独立对照，不拼接成一次运行。",
      "status": "已合并计划、执行与报告为一次试玩的连续讲述；待讲师审阅。",
      "legacyAliases": [
        "plan323-3",
        "plan323-log3",
        "plan323-log4",
        "plan323-4"
      ]
    },
    {
      "id": "plan323-summary",
      "number": "3.2.3.3",
      "title": "总结：从运行日志看 Skill 的指导怎样被使用",
      "group": "从日志看 Skill 怎样被使用",
      "scriptSource": "r323-summary",
      "screens": [
        {
          "surface": "PPT p323-summary · 从运行日志看 Skill 的指导怎样被使用 · 第 1 步：指导与本次操作、报告的对应",
          "materials": [
            "useSummary"
          ],
          "scriptSource": "r323-summary",
          "scriptStep": 0,
          "kind": "ppt",
          "ppt": {
            "id": "p323-summary",
            "step": 0
          },
          "action": "打开总结 PPT p323-summary，保持三组对应关系同屏。先指主要操作与配对检查，再指清单、脚本和报告的对应；最后指底部“对照关键要求与后续操作”。本版结尾接 Plugin 补充讲解，随后打开 Game Studio 根目录；跳过 Plugin 时，改用讲述安排中保留的直接进入 3.3 的过渡句。",
          "reuse": [
            0,
            1,
            2,
            3,
            4
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 4
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 5
        }
      ],
      "presentation": "sequence",
      "explanation": "连接前面读过的 Skill 与刚才的同轮运行日志：通用指导需要模型结合游戏规则展开成具体检查；用三组对应关系说明怎样对照关键要求与后续操作，看指导用在了哪里，再衔接 3.3 自己写 Skill。",
      "boundary": "只总结 E 版同一轮已有证据，不推断使用 Skill 必然发现问题。",
      "arrangement": [
        "保留三组对应关系同屏，不增加逐行点击；重点解释主要操作如何结合游戏规则展开为配对和通关检查。",
        "以清单、工具建议与报告要求的实际用法补足对应，归纳对照关键要求与后续操作的观察方法。",
        "不扩展为 Skill 失效诊断教程，不把读到指导等同于全部要求已经落实。",
        "跳过 Plugin 时，将最后一段替换为：接下来，我们也试着把自己的项目经验整理成一份 Skill，再通过实际使用，看看这些经验能不能指导模型完成新的任务。"
      ],
      "transition": "本版先补充讲解 Plugin，打开 Game Studio 根目录；补充结束后回到 3.3 整理自己的项目经验。跳过 Plugin 的录制路线保留。",
      "status": "讲师已确认本轮讲述思路；逐字稿与 PPT 已同步修改，待讲师审阅成稿。"
    },
    {
      "id": "plan324-1",
      "number": "3.2.4.1",
      "title": "可选｜从已用 Skill 认识完整 Plugin",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-package",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "打开 Game Studio 固定版本根目录，指认 skills、references 和 scripts。",
          "materials": [
            "plugin-tree"
          ],
          "scriptSource": "r324-package",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "停留在 Game Studio 根目录，依次指认 skills/、references/、scripts/，暂不打开插件声明。",
          "materials": [
            "plugin-tree"
          ],
          "scriptSource": "r324-package",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            1,
            2
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-package",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-package",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-package",
          "step": 2,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "保留讲师过渡原文，从已用 game-playtest 拉远到 Game Studio 根目录；停留指认 skills、references、scripts 的并列位置，再进入各份指导。开头不打开插件声明，后续沿正文引用解释目录之间的关系。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [],
      "arrangement": [
        "接住 3.2.3 对单个 Skill 及配套资料的认识，使用讲师已修改的过渡原文，从熟悉的 game-playtest 拉远到它所属的 Game Studio Plugin。过渡口播保持原文，不另写一版。",
        "停在 Game Studio 根目录，依次指认 skills、references 和 scripts：这个包中有多份指导，资料与脚本也可以放在包级目录。先让学员看清整体组成与目录位置，不打开 plugin.json，也不逐个解释配置字段。",
        "目录只说明文件放在哪里，不能据此断定哪些 Skill 共用资源。把“各份指导负责什么、怎样联系、引用哪些材料”留给后面的实际文件逐步回答。"
      ],
      "transition": "从根目录进入 skills：先看有哪些指导，再读代表 Skill 的正文，解释它们各自的职责与联系。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-roles",
      "number": "3.2.4.2",
      "title": "可选｜看懂包内指导的职责与联系",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-roles",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "打开 Game Studio 的 skills 目录，快速指认 game-studio、game-ui-frontend、sprite-pipeline、game-playtest。",
          "materials": [
            "plugin-skills-tree"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 game-studio/SKILL.md，定位 Use This Skill When 与 Do Not Stay Here When。",
          "materials": [
            "plugin-skill-router"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 1,
          "points": [],
          "kind": "browser",
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "在同一文件向下定位 Routing Rules，指分类后的专项 Skill 相对路径。",
          "materials": [
            "plugin-routing"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            3,
            4
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 game-ui-frontend 的 Frontend Standards，依次指视觉方向、信息层级、Protect the playfield。",
          "materials": [
            "plugin-ui"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 3,
          "points": [],
          "kind": "browser",
          "reuse": [
            5,
            6
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-roles",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-roles",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-roles",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 3,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "用总入口的适用条件与分流规则解释专项联系，再读界面方法并接到共同依据。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [
        "plan324-2"
      ],
      "arrangement": [
        "先浏览 skills 目录，指认 game-studio、game-ui-frontend、sprite-pipeline 和已用过的 game-playtest，把名称对应到任务判断、界面、素材、试玩等工作；不逐一讲九份 Skill。",
        "打开 game-studio/SKILL.md，先区分整个 Plugin 与包内同名 Skill。读适用条件，再看 Routing Rules：技术路线未定或任务跨领域时先判断任务，明确专项后转向相应指导。用正文中的相对路径说明联系来自明确规则，不能把打包理解成自动依次执行全部 Skill。",
        "再读 game-ui-frontend 的 Frontend Standards，选视觉方向、信息层级和保护游戏区域说明专项指导有自己的方法；与熟悉的 game-playtest 的检查职责对应。"
      ],
      "transition": "做界面和检查界面各有职责，却可能使用共同依据。停在界面 Skill 的 References，沿引用查看它需要的资料。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-3",
      "number": "3.2.4.3",
      "title": "可选｜沿引用看共同资料与配套脚本",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-resources",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "定位 game-ui-frontend 的 References，指 Playtest review 的 ../../references/playtest-checklist.md。",
          "materials": [
            "plugin-ui-refs"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 game-playtest 的 References，指 Full checklist 的相同路径。",
          "materials": [
            "plugin-playtest-refs"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 1,
          "points": [],
          "kind": "browser",
          "reuse": [
            1
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 playtest-checklist.md 的 Universal checks，指 HUD 可读性、优先游戏画面、中央区域保持清晰等条目。",
          "materials": [
            "plugin-checklist"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 sprite-pipeline 的 Core Workflow，指第 4 步及 normalize_sprite_strip.py 引用。",
          "materials": [
            "plugin-sprite-flow"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 3,
          "points": [],
          "kind": "browser",
          "reuse": [
            4,
            5
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 normalize_sprite_strip.py，确认文件路径与文件开头用途；不展开函数实现。",
          "materials": [
            "plugin-script"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 4,
          "points": [],
          "kind": "browser",
          "reuse": [
            6,
            7
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-resources",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-resources",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r324-resources",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 4,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "先比较共同清单的引用，再沿专项步骤找到脚本；区分共同资源和配套资源。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [],
      "arrangement": [
        "先看 game-ui-frontend 的 References，再看 game-playtest 的 References，比较两处 ../../references/playtest-checklist.md。沿路径回到包级 references，打开同一份清单，以可读性和游戏区域等条目解释两份指导怎样使用共同检查依据。",
        "再打开 sprite-pipeline 的 Core Workflow，简短交代二维动画素材用途，沿归一化步骤找到 scripts/normalize_sprite_strip.py。只看文件位置与用途：Skill 说明何时使用和要求，脚本负责具体处理，不展开参数、算法或素材生成。",
        "把两条关系区分清楚：清单有两份 Skill 的实际引用，脚本是所看专项指导的配套资源。放在包级目录不等于所有 Skill 共用，也不能据此推断这些文件由重复内容抽取而来。"
      ],
      "transition": "至此三个 GitHub 环节全部完成。回到同一张 PPT，把目录、职责和刚看过的引用关系放在一起总结。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-summary",
      "number": "3.2.4.4",
      "title": "可选｜统一总结：整包、分工与引用",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-summary",
      "screens": [
        {
          "surface": "PPT p324a · 一套能力，怎样组织在一起 · 第 1 步：整包提供，指导各有职责",
          "action": "打开 PPT p324a 第 1 步，指 Game Studio 包边界及其中的代表 Skill。",
          "materials": [
            "p324a-0"
          ],
          "scriptSource": "r324-summary",
          "scriptStep": 0,
          "points": [],
          "kind": "ppt",
          "ppt": {
            "id": "p324a",
            "step": 0
          },
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p324a · 一套能力，怎样组织在一起 · 第 2 步：共同资料与配套脚本",
          "action": "推进到第 2 步，沿两份 Skill 指向同一清单的箭头，再指素材指导与脚本。",
          "materials": [
            "p324a-1"
          ],
          "scriptSource": "r324-summary",
          "scriptStep": 1,
          "points": [],
          "kind": "ppt",
          "ppt": {
            "id": "p324a",
            "step": 1
          },
          "reuse": [
            1
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-summary",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-summary",
          "step": 1,
          "part": 1
        }
      ],
      "presentation": "sequence",
      "explanation": "三个 GitHub 环节完成后，用同一张图收拢整体边界、代表职责和已核对的引用。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [
        "plan324-4"
      ],
      "arrangement": [
        "这是前三个 GitHub 环节之后的唯一一次 PPT 总结，使用 p324a 一页、两个展示状态；前面各环节不插入总结页。",
        "第一状态先指 Game Studio 的包边界，再看其中的代表 Skill，收拢“整包提供相关指导与资源、各份 Skill 有各自职责”的关系。",
        "第二状态展示两份 Skill 指向同一清单、素材 Skill 指向脚本的关系，回扣刚才的原文证据：资料按需引用，具体使用关系由指导决定。只归纳已经看过的内容，不新增 MCP 或 Hook 分支。"
      ],
      "transition": "整体组成和引用关系已经看清，接着看怎样安装这个包，并在当前任务中选用其中的指导。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-5",
      "number": "3.2.4.5",
      "title": "可选｜安装整包，按任务选用",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-use",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "打开 .codex-plugin/plugin.json，只指名称 game-studio 和 skills 入口。",
          "materials": [
            "plugin-manifest"
          ],
          "scriptSource": "r324-package",
          "scriptStep": 1,
          "points": [],
          "kind": "browser",
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开完整 Plugin 预跑的来源与实际组成；明确这是历史回放。",
          "materials": [
            "plugin-run-source"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            2
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开安装返回的 Inspect 原件，指插件名称、来源和安装路径。安装命令见原预跑文档；同轮终端执行日志缺失，不模拟执行。",
          "materials": [
            "plugin-run-install"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 1,
          "points": [],
          "kind": "inspect",
          "reuse": [
            3
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开同次请求留存，指 game-playtest、六对通关、重开归零和只生成清单的范围。",
          "materials": [
            "plugin-run-request"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            4,
            5
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开同轮返回清单的 Inspect 原件，定位通关边界与重开条目。",
          "materials": [
            "plugin-run-result"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 3,
          "points": [],
          "kind": "inspect",
          "reuse": [
            6,
            7
          ]
        },
        {
          "surface": "真实回放",
          "action": "保持清单结果画面；拓展阅读链接留在讲述页材料区，不打开新案例。",
          "materials": [
            "plugin-concept",
            "plugin-skill-mcp",
            "plugin-hooks"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 4,
          "points": [],
          "kind": "browser",
          "reuse": [
            8,
            9
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-package",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-package",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-use",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-use",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r324-use",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 4,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "先简短看插件声明中的名称与 Skill 入口，承接整包安装；再使用原同轮回放核对安装对象、任务和结果。结尾仅提供 MCP／Hook 拓展阅读，再接下一节。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [
        "plan324-6"
      ],
      "arrangement": [
        "安装环节开头才打开 .codex-plugin/plugin.json，简短指认 name 与 skills 入口，不逐字段讲解。说明单份 Skill 也能独立使用和分享；这里通过 Plugin 将相关指导和资源作为整体安装、分发。",
        "切到已有真实安装回放，核对安装对象、来源和返回位置，明确这是历史记录。沿用同次安装与调用材料；终端执行日志缺失的部分不模拟执行，也不把已有安装冒充首次安装。",
        "看明确选用 game-playtest 的原始请求，再看返回清单里的六对通关与重开归零条目。解释安装取得整套能力，当前任务决定用哪部分，还需要补充项目规则；本次只生成清单，没有运行游戏或修改代码。"
      ],
      "transition": "保持结果画面结束 3.2，只简短提及其他 Plugin 可有 MCP、Hook 并提供拓展阅读链接，不展开新案例。随后接 3.3 对 Skill 的生成、审阅、修改与实际应用。",
      "optional": "可选讲解 · Plugin"
    }
  ],
  "pluginSlidePlan": {
    "total": 1,
    "status": "前三环节后统一总结；1 页、2 状态。",
    "pages": [
      {
        "id": "P324-1",
        "frames": [
          "3.2.4.4"
        ],
        "states": 2,
        "content": "整包身份与代表职责 → 共同清单与配套脚本的引用",
        "actualId": "p324a",
        "scene": "p324a",
        "page": 1,
        "progression": "完整包与分工 → 资源引用"
      }
    ]
  },
  "routeDesign": {
    "r322-1": {
      "content": "主讲在同一篇 Anthropic 文章观察单文件、参考资料、工作流程和报告模板；输入输出示例、条件流程与脚本细读保留为可选解读。",
      "reason": "先从真实文件关系与具体写法建立完整 Skill 的认识；文章阶段不插入同义 PPT。",
      "presentation": "sequence",
      "arrangement": [
        "主讲依次看单文件图、配套资料图、表单填写流程和报告模板。讲完模板直接跳到总结，不要求继续逐项读文章。",
        "输入输出示例、条件流程与脚本细读保留原稿、定位及编辑坐标，默认折叠；需要时展开录制。"
      ],
      "transition": "主讲直接进入 3.2.2.3 的总结；OpenAI 原文解读也作为可选内容保留。"
    },
    "r322-2": {
      "content": "在 OpenAI 指南核对工作边界，再看 references/、assets/、scripts/ 的分工；用读规范、填模板、运行程序区分使用方式，指出正文需提供条件与入口。",
      "reason": "可选录制与课后备查：保留原稿和原文定位，主讲不依赖本段。",
      "presentation": "sequence",
      "arrangement": [
        "先对照输入、步骤、输出和提问／停止条件，说明正文要把一项工作交代清楚。正文格式规范只用于回答标题是否固定，不展开一套必填栏目。",
        "再看 references、assets、scripts 的官方说明，用读规范、填模板和运行程序区分使用方式；指认正文需要链接这些文件，并说明何时取用。"
      ],
      "transition": "原文解读在这里收束，以完整结构图为锚点，进入正文和链接详情，再回到结构图讲另一份 Skill。"
    }
  },
  "summarySlidePlan": {
    "total": 7,
    "status": "主讲五页、六个状态，另两页深链备查；锚点图全部内容常显，只改变高亮。",
    "pages": [
      {
        "page": 1,
        "scene": "p07o",
        "frames": "3.2.2.3",
        "content": "完整图高亮正文",
        "progression": "整体关系常显，进入正文详情",
        "status": "主讲"
      },
      {
        "page": 2,
        "scene": "p07m",
        "frames": "3.2.2.3",
        "content": "Skill 正文通常要写清什么",
        "progression": "四类内容 → 具体写法",
        "status": "主讲"
      },
      {
        "page": 3,
        "scene": "p07os",
        "frames": "3.2.2.3",
        "content": "完整图高亮配套文件",
        "progression": "查阅、运行、使用，进入链接详情",
        "status": "主讲"
      },
      {
        "page": 4,
        "scene": "p07p",
        "frames": "3.2.2.3",
        "content": "正文怎样连接配套文件",
        "progression": "查阅条件与入口；脚本、模板和素材以一句话带过，不再单独展开",
        "status": "主讲"
      },
      {
        "scene": "p07ox",
        "frames": "3.2.2.3",
        "content": "完整图高亮另一份 Skill",
        "progression": "引用专项指导，进入日志",
        "status": "主讲",
        "page": 5
      },
      {
        "page": 6,
        "scene": "p07l",
        "frames": "3.2.2.3",
        "content": "模板、示例和条件各做什么",
        "progression": "空结构 → 填写示意 → 条件分支",
        "status": "补充备查，录制跳过"
      },
      {
        "page": 7,
        "scene": "p07q",
        "frames": "3.2.2.3",
        "content": "沿使用顺序理解渐进披露",
        "progression": "识别选用 → 核心指导与本次输入 → 按需取用，进入日志",
        "status": "补充备查，录制跳过"
      }
    ]
  },
  "excludedScriptSteps": {
    "r323-5": [
      4
    ],
    "r323-log3": [
      0
    ]
  },
  "historicalFrames": [
    {
      "id": "plan323-1",
      "number": "3.2.3.1",
      "title": "交代案例：同一工作为什么需要不同层次的指导",
      "group": "从日志看 Skill 怎样被使用",
      "screens": [
        {
          "surface": "浏览器 · 三轮试玩的共同游戏起点",
          "materials": [
            "old5"
          ],
          "scriptStep": 0
        }
      ],
      "reuse": [],
      "scriptSource": "r323-1",
      "status": "2026-11-11：按知识点重组任务讲述，正式口播同步；材料沿用独立预跑，未新增运行或试讲。",
      "boundary": "用三轮独立任务解释正文、Reference 与专项 Skill 的分工；本段不安排 PPT，使用归档游戏和实际材料。"
    },
    {
      "id": "plan323-2",
      "number": "3.2.3.2",
      "title": "正文怎样把任务要求变成工作方法",
      "group": "从日志看 Skill 怎样被使用",
      "screens": [
        {
          "surface": "本次输入与可复用方法的分工 · 任务 1 请求",
          "action": "在任务 1 请求中指认六对通关、检查前三对、保留源码；随后切 PPT p07t1 第 1 步。",
          "materials": [
            "trialA"
          ],
          "scriptStep": 0
        },
        {
          "surface": "PPT · 任务信息与共同方法",
          "action": "打开 PPT p07t1 第 1 步：任务信息与共同方法；讲完从本页材料入口打开原文。",
          "materials": [
            "task1Map0"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07t1",
            "step": 0
          }
        },
        {
          "surface": "流程把目标展开为行动 · Preferred Workflow",
          "action": "在已打开的 game-playtest 原文定位 Preferred Workflow；讲完在同一文件向下定位 Tooling Guidance。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "workflow",
            "workflowBackup"
          ],
          "scriptStep": 1
        },
        {
          "surface": "条件决定怎样执行 · Tooling Guidance",
          "action": "定位已有自动化工具、canvas/WebGL 截图要求、自动化不稳定时的备选做法。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "tooling",
            "toolingBackup"
          ],
          "scriptStep": 2
        },
        {
          "surface": "交付要求规定要留下什么证据 · Reporting Standard",
          "action": "在同一原文定位 Reporting Standard；讲完切回已打开的 PPT p07t1，从第 1 步推进到第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "reporting",
            "reportingBackup"
          ],
          "scriptStep": 3
        },
        {
          "surface": "PPT · 正文指导对应具体检查",
          "action": "返回 PPT p07t1，停在第 2 步：正文指导对应具体检查。",
          "materials": [
            "task1Map1"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t1",
            "step": 1
          }
        },
        {
          "surface": "预期来自任务，实际来自观察 · 第三对截图",
          "action": "从 PPT p07t1 第 2 步的截图入口打开 early-clear.png；讲完切任务 1 的 run-a-output。",
          "materials": [
            "earlyClear"
          ],
          "scriptStep": 4
        },
        {
          "surface": "从指导到交付的对应 · 浏览器输出与报告",
          "action": "在任务 1 材料定位 pair-3、AFTER3，再向下看报告；讲完返回 PPT p07t1 并推进到第 3 步。",
          "materials": [
            "outputA",
            "reportA"
          ],
          "scriptStep": 5
        },
        {
          "surface": "PPT · 用结果核对方法的落实",
          "action": "返回已打开的 PPT p07t1，从第 2 步推进到第 3 步；讲完打开任务 2 请求。",
          "materials": [
            "task1Map2"
          ],
          "scriptStep": 8,
          "ppt": {
            "id": "p07t1",
            "step": 2
          }
        }
      ],
      "reuse": [],
      "scriptSource": "r323-2",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t1），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-3",
      "number": "3.2.3.3",
      "title": "Reference 怎样把通用指导补充为具体检查",
      "group": "从日志看 Skill 怎样被使用",
      "screens": [
        {
          "surface": "为什么需要配套细则 · 任务 2 请求",
          "action": "在任务 2 请求中指认修复、通关后恢复检查和查阅清单；随后切 PPT p07t2 第 1 步。",
          "materials": [
            "trialB"
          ],
          "scriptStep": 0
        },
        {
          "surface": "PPT · 正文连接配套细则",
          "action": "打开 PPT p07t2 第 1 步：正文连接配套细则；讲完从本页材料入口打开原文。",
          "materials": [
            "task2Map0"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07t2",
            "step": 0
          }
        },
        {
          "surface": "正文保留入口，资料承载细节 · References",
          "action": "从 PPT p07t2 第 1 步打开 References，在原文指认 Full checklist；沿该链接进入清单，定位 Universal checks。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "references",
            "referencesBackup"
          ],
          "scriptStep": 1
        },
        {
          "surface": "把通用条目落到动作与预期 · Universal checks",
          "action": "停在 Universal checks 的 pause、failure、recovery 条目，读完返回 PPT p07t2 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "checklist",
            "checklistBackup"
          ],
          "scriptStep": 2
        },
        {
          "surface": "PPT · 通用条目对应动作与预期",
          "action": "返回 PPT p07t2，停在第 2 步：通用条目对应动作与预期。",
          "materials": [
            "task2Map1"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07t2",
            "step": 1
          }
        },
        {
          "surface": "查阅证据说明知识是否取得 · 清单读取记录",
          "action": "从 PPT p07t2 第 2 步打开 run-b-read，指认正文与清单读取；在同一材料页继续到 run-b-verify。",
          "materials": [
            "readB"
          ],
          "scriptStep": 3
        },
        {
          "surface": "执行结果检验条目是否落实 · 修后重开记录",
          "action": "在 run-b-verify 带过三对与六对结果，指认重开后计数、横幅、牌面与再次翻牌；讲完返回 PPT p07t2 第 3 步。",
          "materials": [
            "restartResult"
          ],
          "scriptStep": 4
        },
        {
          "surface": "Inspect · 本次生成并运行的重开检查脚本",
          "action": "打开任务 2 的 Inspect 原始脚本写入命令，指认点击、状态读取和预期检查。",
          "materials": [
            "restartScript"
          ],
          "scriptStep": 4,
          "scriptSource": "r323-5"
        },
        {
          "surface": "PPT · 实际结果对应两层预期",
          "action": "返回 PPT p07t2，停在第 3 步：实际结果对应两层预期。",
          "materials": [
            "task2Map2"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t2",
            "step": 2
          }
        }
      ],
      "reuse": [],
      "scriptSource": "r323-3",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t2），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。 重开结果后补看本次生成的脚本，明确它不是 Skill 随包脚本。"
    },
    {
      "id": "plan323-4",
      "number": "3.2.3.4",
      "title": "专项 Skill 怎样补充另一类工作的判断",
      "group": "从日志看 Skill 怎样被使用",
      "screens": [
        {
          "surface": "检查目标决定需要什么指导 · 任务 3 请求",
          "action": "在任务 3 请求中指认桌面与窄屏检查、查阅前端指导；随后切 PPT p07t3 第 1 步。",
          "materials": [
            "trialC"
          ],
          "scriptStep": 0
        },
        {
          "surface": "PPT · 共同流程与专项判断的分工",
          "action": "打开 PPT p07t3 第 1 步：共同流程与专项判断的分工；讲完从本页材料入口打开原文。",
          "materials": [
            "task3Map0"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t3",
            "step": 0
          }
        },
        {
          "surface": "配套资料与专项工作的区别 · Frontend review cues",
          "action": "从 PPT p07t3 第 1 步打开 References，指认 ../game-ui-frontend/SKILL.md；沿链接进入该文件。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "references",
            "referencesBackup"
          ],
          "scriptStep": 1
        },
        {
          "surface": "按任务选用专项标准 · Frontend Standards",
          "action": "定位信息层级、保护游戏区、桌面和手机设计；随后返回 PPT p07t3 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "frontend",
            "frontendBackup"
          ],
          "scriptStep": 2
        },
        {
          "surface": "PPT · 专项标准对应两个检查问题",
          "action": "返回 PPT p07t3，停在第 2 步：专项标准对应两个检查问题。",
          "materials": [
            "task3Map1"
          ],
          "scriptStep": 8,
          "ppt": {
            "id": "p07t3",
            "step": 1
          }
        },
        {
          "surface": "沿引用查阅的实际范围 · 文件读取记录",
          "action": "从 PPT p07t3 第 2 步打开 run-c-read，核对前端 SKILL.md 的读取；随后打开 desktop-first-pair.png。",
          "materials": [
            "readC"
          ],
          "scriptStep": 3
        },
        {
          "surface": "标准要结合使用条件 · 桌面游戏区截图",
          "action": "打开 desktop-first-pair.png，观察状态信息与牌阵；讲完打开 mobile-bottom.png 的完整视口截图。",
          "materials": [
            "desktopPair"
          ],
          "scriptStep": 4
        },
        {
          "surface": "专项标准怎样改变判断 · 窄屏底部视口",
          "action": "打开 mobile-bottom.png，保持完整 375×667 视口可见，指认底部牌与画面中没有出现的计数；随后定位 run-c-verify。",
          "materials": [
            "mobileBottom"
          ],
          "scriptStep": 5
        },
        {
          "surface": "共同流程与专项判断怎样配合 · 视口输出",
          "action": "在 run-c-verify 指认 overlap area=0 与 metaVisible=False；返回 PPT p07t3 第 3 步，不直接跳到全局小结。",
          "materials": [
            "narrowResult"
          ],
          "scriptStep": 6
        },
        {
          "surface": "PPT · 不同问题对应不同证据",
          "action": "返回 PPT p07t3，停在第 3 步：不同问题对应不同证据。",
          "materials": [
            "task3Map2"
          ],
          "scriptStep": 9,
          "ppt": {
            "id": "p07t3",
            "step": 2
          }
        }
      ],
      "reuse": [],
      "scriptSource": "r323-4",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t3），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    }
  ],
  "spokenStyle": "3.2.3 接续讲师前文手改稿：先指着原文说明它让 AI 做什么，再用本例解释帮助；避免把教学分类和审查说明直接念进口播。每行表达一句话或一个连续意思，用单换行保留段落编辑坐标。",
  "useSlidePlan": {
    "total": 1,
    "status": "E 版日志与原文讲解后回到一页总结 PPT，随后直接进入 3.3；Plugin 可选，F 版独立备用。",
    "pages": [
      {
        "page": 1,
        "scene": "p323-summary",
        "frames": "3.2.3.3",
        "content": "对照 Skill 关键要求与日志中的具体操作，理解通用指导怎样用于当前任务",
        "progression": "一页一个状态，三组关系同屏，口播依次说明",
        "status": "主讲"
      }
    ]
  },
  "recordingFrames": {
    "3.2.2.1": [
      "b31"
    ],
    "3.2.2.2": [
      "b32"
    ],
    "3.2.2.3": [
      "plan323-5"
    ],
    "3.2.3.1": [
      "plan323-log1"
    ],
    "3.2.3.2": [
      "plan323-log2"
    ],
    "3.2.3.3": [
      "plan323-summary"
    ],
    "3.2.4.1": [
      "plan324-1"
    ],
    "3.2.4.2": [
      "plan324-roles"
    ],
    "3.2.4.3": [
      "plan324-3"
    ],
    "3.2.4.4": [
      "plan324-summary"
    ],
    "3.2.4.5": [
      "plan324-5"
    ]
  },
  "frames": [
    {
      "id": "b31",
      "title": "3.2.2.1 沿官方文章认识完整 Skill",
      "group": "认识完整 Skill 的组成与组织",
      "screens": [
        {
          "surface": "Anthropic 文章 · 单文件 Skill 的文件头与正文",
          "action": "网页 · 打开文章定位页的“单文件 Skill 图”；停在高亮框出的第一张图，指 Name、Description 和 Quick Start。",
          "materials": [
            "authoringStructure"
          ],
          "reuse": [
            0,
            1
          ],
          "kind": "browser"
        },
        {
          "surface": "Anthropic 文章 · 扩展 Skill 的正文与参考资料",
          "action": "网页 · 点“下一处”到“附带参考资料的 Skill 图”；停在第二张图，指 Overview 的引用、PDF Processing Advanced Reference 和 forms.md。",
          "materials": [
            "authoringReferences"
          ],
          "reuse": [
            2,
            3
          ],
          "kind": "browser"
        },
        {
          "surface": "Anthropic 文章 · PDF 填写流程与检查",
          "action": "网页 · 点“下一处”到 PDF 填写流程；沿高亮继续滚动，指五步清单、映射校验和失败后的返回。",
          "materials": [
            "authoringWorkflow"
          ],
          "reuse": [
            4,
            5
          ],
          "kind": "browser"
        },
        {
          "surface": "Anthropic 文章 · 模板、示例与条件流程",
          "action": "依次定位 Common patterns 下的 Template pattern、Examples pattern、Conditional workflow pattern；每处只看一个例子，不展开工具教程。",
          "materials": [
            "authoringPatterns",
            "authoringExamples",
            "authoringConditions"
          ],
          "reuse": [
            6,
            7,
            8,
            9
          ],
          "kind": "browser",
          "beats": [
            {
              "kind": "browser",
              "materials": [
                "authoringPatterns"
              ],
              "text": "定位 「报告模板」，指摘要、发现和建议的结构。"
            },
            {
              "paragraphs": [
                0,
                1
              ]
            },
            {
              "kind": "ppt",
              "text": "主讲到报告模板为止，跳过下方可选解读，直接进入总结。",
              "jumpTo": "cue-mapEntry",
              "jumpLabel": "继续主讲：完整 Skill 的总结"
            },
            {
              "kind": "browser",
              "materials": [
                "authoringExamples"
              ],
              "text": "点“下一处”到 「输入输出示例」，对照输入与期望输出。",
              "optional": "可选解读 · 输入输出示例与条件流程"
            },
            {
              "paragraphs": [
                2
              ]
            },
            {
              "kind": "browser",
              "materials": [
                "authoringConditions"
              ],
              "text": "点“下一处”到 「条件流程」，对照创建与修改文档的分支。",
              "optional": "可选解读 · 输入输出示例与条件流程"
            },
            {
              "paragraphs": [
                3
              ]
            }
          ]
        },
        {
          "surface": "Anthropic 文章 · 脚本的运行与查阅",
          "action": "定位 Provide utility scripts；指 analyze_form.py 的运行命令与输出格式，再指 Run the script 和 Read it as reference 的区别。",
          "materials": [
            "authoringScripts",
            "authoringScriptUse"
          ],
          "reuse": [
            10,
            11
          ],
          "kind": "browser",
          "beats": [
            {
              "kind": "browser",
              "materials": [
                "authoringScripts"
              ],
              "text": "指运行命令和 Output format。"
            },
            {
              "paragraphs": [
                0
              ]
            },
            {
              "kind": "browser",
              "materials": [
                "authoringScriptUse"
              ],
              "text": "点“下一处”，对照运行与查阅两种用法。"
            },
            {
              "paragraphs": [
                1
              ]
            }
          ],
          "optional": "可选解读 · 脚本的运行与查阅"
        }
      ],
      "reuse": [
        {
          "scene": "r322-1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r322-1",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r322-1",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r322-1",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r322-1",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r322-1",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r322-1",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r322-1",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r322-1",
          "step": 3,
          "part": 3
        },
        {
          "scene": "r322-1",
          "step": 3,
          "part": 4
        },
        {
          "scene": "r322-1",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r322-1",
          "step": 4,
          "part": 2
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。",
      "presentation": "sequence"
    },
    {
      "id": "b32",
      "title": "3.2.2.2 可选解读：工作边界与配套文件的分工",
      "group": "认识完整 Skill 的组成与组织",
      "screens": [
        {
          "surface": "OpenAI 指南 · 工作边界",
          "action": "网页 · 打开 OpenAI 指南的“工作边界”，对照输入、步骤、输出及提问／停止条件；正文标题的依据见格式规范。",
          "materials": [
            "workflowBoundary",
            "bodySpec"
          ],
          "reuse": [
            0,
            1
          ],
          "kind": "browser",
          "optional": "可选解读 · OpenAI 工作边界与配套文件"
        },
        {
          "surface": "OpenAI 指南 · 配套文件及取用要求",
          "action": "网页 · 点“下一处”到配套文件，指三类目录及正文引用要求。",
          "materials": [
            "supportGuide"
          ],
          "reuse": [
            2,
            3,
            4
          ],
          "kind": "browser",
          "optional": "可选解读 · OpenAI 工作边界与配套文件"
        }
      ],
      "reuse": [
        {
          "scene": "r322-2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r322-2",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r322-2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r322-2",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r322-2",
          "step": 1,
          "part": 3
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。",
      "presentation": "sequence"
    },
    {
      "id": "plan323-5",
      "number": "3.2.2.3",
      "title": "总结：完整 Skill 的组成、正文与连接",
      "group": "认识完整 Skill 的组成与组织",
      "screens": [
        {
          "surface": "PPT p07o · 同一套知识，按任务需要逐层取用 · 第 1 步：正文提供核心工作指导；下面展开它怎样组织一项工作",
          "action": "打开 p07o，完整结构图常显，突出 SKILL.md 文件头与正文；提到两篇文章时指页底 Anthropic、OpenAI 原文入口；讲完进入 p07m 展开正文。",
          "materials": [
            "mapEntry"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p07o",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p07m · Skill 正文通常要写清什么 · 第 1 步：任务边界",
          "action": "打开 p07m 第 1 步，依次指任务边界、工作方法、检查依据和交付要求。",
          "materials": [
            "bodyRoles"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07m",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "PPT p07m · Skill 正文通常要写清什么 · 第 2 步：工作方法",
          "action": "推进 p07m 第 2 步，逐项指下方写法：范围与输入、Step by step、检查说明或脚本、要求或模板；讲完进入 p07os。",
          "materials": [
            "bodyExamples"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07m",
            "step": 1
          },
          "kind": "ppt",
          "reuse": [
            3,
            4,
            5,
            6
          ]
        },
        {
          "surface": "PPT p07os · 同一套知识，按任务需要逐层取用 · 第 1 步：正文保留核心指导，资料、程序与素材按需取用",
          "action": "打开 p07os，回到同一张完整结构图，突出 references/、scripts/、assets/ 及查阅、运行、使用连线；其余内容淡显。",
          "materials": [
            "mapSupport"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p07os",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            7,
            8
          ]
        },
        {
          "surface": "PPT p07p · 从正文的一句引用，找到需要的文件 · 第 1 步：引用句怎样连接配套文件",
          "action": "打开 p07p 第 1 步，说明链接给出文件入口、描述交代使用场景；先读正文引用句，再沿箭头指 forms.md 中的用途与方法。",
          "materials": [
            "connectAll"
          ],
          "scriptStep": 3,
          "ppt": {
            "id": "p07p",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            9,
            10
          ]
        },
        {
          "surface": "PPT p07p · 从正文的一句引用，找到需要的文件 · 第 1 步：引用句怎样连接配套文件",
          "action": "停留 P3.2-12-01（p07p 第 1 步），用一句话总结脚本、模板和素材的引用；讲完进入 p07ox。",
          "materials": [
            "connectUse"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07p",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            11
          ]
        },
        {
          "surface": "PPT p07ox · 同一套知识，按任务需要逐层取用 · 第 1 步：同样通过引用，查阅另一份 Skill 的专项工作指导",
          "action": "打开 p07ox，回到完整结构图，突出另一份 Skill 与引用连线；讲完进入 3.2.3.1 的同轮调用记录。",
          "materials": [
            "mapOther"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p07ox",
            "step": 0
          },
          "kind": "ppt",
          "reuse": [
            12,
            13
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-5",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 3
        },
        {
          "scene": "r323-5",
          "step": 7,
          "part": 4
        },
        {
          "scene": "r323-5",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 2,
          "part": 2
        }
      ],
      "scriptSource": "r323-5",
      "status": "2026-11-18：按讲师手改稿合并原两段总结，已同步操作与画面；待讲师复看。",
      "explanation": "完整结构图作锚点；正文详情说明边界、步骤、检查与交付具体怎样写，引用详情用正文引用句指向文件，再比较运行脚本与使用模板。两张详情页采用流程与文件示意，不使用表格。",
      "boundary": "主讲五页、七个状态：完整图突出正文 → 正文详情两步 → 完整图突出配套文件 → 链接与描述详情两步 → 完整图突出另一份 Skill。所有锚点图的节点始终可见、位置一致。",
      "presentation": "sequence",
      "arrangement": [
        "完整结构图突出正文，进入正文写法详情：先交代边界、方法、检查与交付，再说明分别用范围与输入、逐步指导、检查说明或脚本、要求或模板来写。",
        "回到完整图突出 references、scripts、assets，再进入链接与描述详情；最后回到完整图突出另一份 Skill，说明同样可以沿引用查阅专项指导。"
      ],
      "transition": "接续 3.2.1 的 E 版显式调用日志，核对正文、Reference、工具执行与最终报告。",
      "legacyAliases": [
        "plan323-6"
      ]
    },
    {
      "id": "plan323-log1",
      "number": "3.2.3.1",
      "title": "模型怎样沿引用找到资料",
      "group": "从日志看 Skill 怎样被使用",
      "scriptSource": "r323-log1",
      "screens": [
        {
          "surface": "Inspect · 请求与任务边界",
          "materials": [
            "log323-1-0"
          ],
          "scriptStep": 0,
          "kind": "inspect",
          "action": "打开连续日志第 1 处「请求与任务边界」；指实际试玩、不改代码与报告要求",
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "Inspect · 模型确认清单位置",
          "materials": [
            "log323-1-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "action": "Inspect 第 2 条；指模型根据 Skill 路径确认 playtest-checklist.md 的位置。",
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "Inspect · 模型发出读取请求",
          "materials": [
            "log323-1-2"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "action": "Inspect 第 3 条；指 cat 命令中的清单路径。",
          "reuse": [
            4
          ]
        },
        {
          "surface": "Inspect · 工具返回配套内容",
          "materials": [
            "log323-1-3"
          ],
          "scriptStep": 3,
          "kind": "inspect",
          "action": "Inspect 第 4 条；指工具返回的 Universal checks，不逐条讲解清单。",
          "reuse": [
            5,
            6
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-log1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-log1",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-log1",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-log1",
          "step": 3,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "从本次请求没有逐条交代的试玩方法，引出 Skill 保存可复用方法的作用；先用资料入口、实际读取和返回解释详细清单怎样供任务使用。 路径与命令只讲到支持理解取用过程，不逐行讲路径计算；清单用来提醒检查范围，随后进入实际采用方法的例子。",
      "arrangement": [
        "从本次请求没有逐条交代的试玩方法，引出 Skill 保存可复用方法的作用；先用资料入口、实际读取和返回解释详细清单怎样供任务使用。",
        "路径与命令只讲到支持理解取用过程，不逐行讲路径计算；清单用来提醒检查范围，随后进入实际采用方法的例子。"
      ],
      "boundary": "主讲 E 版显式调用的同一轮记录；F 版自然语言触发为独立对照，不拼接成一次运行。",
      "status": "2026-11-18：保留讲师手改开场，按模型寻找资料、形成计划、执行与组织报告调整口播和日志；待讲师审阅。",
      "legacyAliases": [
        "plan323-1",
        "plan323-2"
      ]
    },
    {
      "id": "plan323-log2",
      "number": "3.2.3.2",
      "title": "模型怎样用 Skill 完成这次试玩",
      "group": "从日志看 Skill 怎样被使用",
      "scriptSource": "r323-log2",
      "screens": [
        {
          "surface": "Inspect · 结合代码决定实际验证",
          "materials": [
            "log323-2-0"
          ],
          "scriptStep": 0,
          "kind": "inspect",
          "scriptSource": "r323-log2",
          "action": "连续日志第 5 处；只指三处高亮：Playwright、Does the game boot correctly、Mobile viewport，分别对应工具建议与检查清单。",
          "reuse": [
            0
          ]
        },
        {
          "surface": "Inspect · 模型安排本次试玩",
          "materials": [
            "log323-2-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "scriptSource": "r323-log2",
          "action": "连续日志第 6 处；指写 Playwright 脚本及验证通关问题的计划。",
          "reuse": [
            1
          ]
        },
        {
          "surface": "Inspect · 将配对检查展开成具体动作",
          "materials": [
            "log323-2-2"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "scriptSource": "r323-log2",
          "action": "连续日志第 7 处；先指 as a player would 与 deterministic is better，再指 Script 2 的配对和通关检查。",
          "reuse": [
            2
          ]
        },
        {
          "surface": "Inspect · 模型编写试玩脚本",
          "materials": [
            "log323-3-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 8 处；快速指两次 click、snapshot 和 screenshot，不展开代码。",
          "reuse": [
            3
          ]
        },
        {
          "surface": "Inspect · 工具运行试玩脚本",
          "materials": [
            "log323-3-2"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 9 处；指执行命令中的 p02_play.py",
          "reuse": [
            4
          ]
        },
        {
          "surface": "Inspect · 工具返回试玩结果",
          "materials": [
            "log323-3-3"
          ],
          "scriptStep": 3,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 10 处；指 after pair 3 与尝试点击剩余牌后的结果。",
          "reuse": [
            5
          ]
        },
        {
          "surface": "Inspect · 模型根据运行结果确认问题",
          "materials": [
            "log323-3-5"
          ],
          "scriptSource": "r323-log3",
          "scriptStep": 5,
          "kind": "inspect",
          "action": "连续日志第 11 处；指第 175 行 CONFIRMED、三对即通关与点击剩余牌无效的判断，最后指 Let me view the screenshots。",
          "reuse": [
            6
          ]
        },
        {
          "surface": "Inspect · 模型打开截图核对",
          "materials": [
            "log323-3-4",
            "log323-e-shot"
          ],
          "scriptStep": 4,
          "kind": "inspect",
          "scriptSource": "r323-log3",
          "action": "连续日志第 12 处；指第 178 行截图路径，再点击「查看本步截图」；看完关闭图片继续下一处。",
          "reuse": [
            7
          ]
        },
        {
          "surface": "Inspect · 模型根据截图核对异常画面",
          "materials": [
            "log323-3-6"
          ],
          "scriptSource": "r323-log3",
          "scriptStep": 6,
          "kind": "inspect",
          "action": "连续日志第 13 处；指第 184 行第一段，仅讲截图对提前通关问题的核对，不展开后面的界面评价。",
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "Inspect · 模型按报告标准组织内容",
          "materials": [
            "log323-4-0"
          ],
          "scriptStep": 0,
          "kind": "inspect",
          "scriptSource": "r323-log4",
          "action": "连续日志第 14 处；定位第 388 行 per the reporting standard 所在句。",
          "reuse": [
            10,
            11
          ]
        },
        {
          "surface": "Inspect · 模型写入报告的第一项问题",
          "materials": [
            "log323-4-1"
          ],
          "scriptStep": 1,
          "kind": "inspect",
          "scriptSource": "r323-log4",
          "action": "连续日志第 15 处；停在写入 playtest-report.md 的第一个问题，依次指玩家看到、复现、证据、为什么重要、归属",
          "reuse": [
            12,
            13
          ]
        },
        {
          "surface": "Inspect · 最终回答中的结论与依据",
          "materials": [
            "log323-4-2",
            "log323-f-backup"
          ],
          "scriptStep": 2,
          "kind": "inspect",
          "scriptSource": "r323-log4",
          "action": "连续日志第 16 处；指最终回复开头与提前通关问题，不展开其余结论。讲完切回 Game Playtest 的 SKILL.md。",
          "reuse": [
            14
          ]
        },
        {
          "surface": "GitHub · 回看 Skill 的试玩步骤与报告要求",
          "materials": [
            "log323-return-workflow",
            "log323-return-report"
          ],
          "scriptSource": "r323-log4",
          "scriptStep": 3,
          "kind": "browser",
          "action": "打开「回看 Skill · 试玩步骤」，指 Preferred Workflow 的主要操作与关键截图要求，以及 Tooling Guidance 的 Playwright 建议。",
          "beats": [
            {
              "kind": "browser",
              "materials": [
                "log323-return-workflow"
              ],
              "text": "回看主要操作、关键截图和 Playwright 建议。"
            },
            {
              "paragraphs": [
                0
              ]
            },
            {
              "paragraphs": [
                1
              ],
              "hidden": true
            },
            {
              "kind": "browser",
              "materials": [
                "log323-return-report"
              ],
              "text": "回看报告要求，随后返回总结 PPT。"
            },
            {
              "paragraphs": [
                2
              ]
            }
          ],
          "reuse": [
            15,
            16,
            17
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-log2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-log2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log2",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-log3",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-log4",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-log4",
          "step": 3,
          "part": 3
        }
      ],
      "presentation": "sequence",
      "explanation": "核心收获：将希望复用的工具选择、检查方法和交付要求写进 Skill，为模型提供明确的工作方法；用本次实际采用的记录解释其作用，不只逐项证明动作与原文对应。 前面保留工具选择、启动和手机视口对检查范围的说明；从写脚本的计划起，沿提前通关疑点推进，不再逐项展开初始截图、窗口变化、随机点击和重开。 配对计划 → 快速带过脚本与执行 → 工具结果（172）→ 模型明确确认问题（175）→ 打开截图（178）→ 模型读图后的核对（184）→ 报告。严格区分工具观察与模型判断；截图前已确认问题，不能讲成看截图才首次发现。 保留原稿的 scriptSource、scriptStep 编辑坐标；各项检查分成不同脚本，当前没有修改游戏代码，不称修改后的回归测试。",
      "arrangement": [
        "核心收获：将希望复用的工具选择、检查方法和交付要求写进 Skill，为模型提供明确的工作方法；用本次实际采用的记录解释其作用，不只逐项证明动作与原文对应。",
        "前面保留工具选择、启动和手机视口对检查范围的说明；从写脚本的计划起，沿提前通关疑点推进，不再逐项展开初始截图、窗口变化、随机点击和重开。",
        "配对计划 → 快速带过脚本与执行 → 工具结果（172）→ 模型明确确认问题（175）→ 打开截图（178）→ 模型读图后的核对（184）→ 报告。严格区分工具观察与模型判断；截图前已确认问题，不能讲成看截图才首次发现。",
        "保留原稿的 scriptSource、scriptStep 编辑坐标；各项检查分成不同脚本，当前没有修改游戏代码，不称修改后的回归测试。",
        "结尾简短回看试玩与报告要求，具体对应与写作启示统一在下一页 PPT 总结，不重复展开。"
      ],
      "boundary": "主讲 E 版显式调用的同一轮记录；F 版自然语言触发为独立对照，不拼接成一次运行。",
      "status": "已合并计划、执行与报告为一次试玩的连续讲述；待讲师审阅。",
      "legacyAliases": [
        "plan323-3",
        "plan323-log3",
        "plan323-log4",
        "plan323-4"
      ]
    },
    {
      "id": "plan323-summary",
      "number": "3.2.3.3",
      "title": "总结：从运行日志看 Skill 的指导怎样被使用",
      "group": "从日志看 Skill 怎样被使用",
      "scriptSource": "r323-summary",
      "screens": [
        {
          "surface": "PPT p323-summary · 从运行日志看 Skill 的指导怎样被使用 · 第 1 步：指导与本次操作、报告的对应",
          "materials": [
            "useSummary"
          ],
          "scriptSource": "r323-summary",
          "scriptStep": 0,
          "kind": "ppt",
          "ppt": {
            "id": "p323-summary",
            "step": 0
          },
          "action": "打开总结 PPT p323-summary，保持三组对应关系同屏。先指主要操作与配对检查，再指清单、脚本和报告的对应；最后指底部“对照关键要求与后续操作”。本版结尾接 Plugin 补充讲解，随后打开 Game Studio 根目录；跳过 Plugin 时，改用讲述安排中保留的直接进入 3.3 的过渡句。",
          "reuse": [
            0,
            1,
            2,
            3,
            4
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 4
        },
        {
          "scene": "r323-summary",
          "step": 0,
          "part": 5
        }
      ],
      "presentation": "sequence",
      "explanation": "连接前面读过的 Skill 与刚才的同轮运行日志：通用指导需要模型结合游戏规则展开成具体检查；用三组对应关系说明怎样对照关键要求与后续操作，看指导用在了哪里，再衔接 3.3 自己写 Skill。",
      "boundary": "只总结 E 版同一轮已有证据，不推断使用 Skill 必然发现问题。",
      "arrangement": [
        "保留三组对应关系同屏，不增加逐行点击；重点解释主要操作如何结合游戏规则展开为配对和通关检查。",
        "以清单、工具建议与报告要求的实际用法补足对应，归纳对照关键要求与后续操作的观察方法。",
        "不扩展为 Skill 失效诊断教程，不把读到指导等同于全部要求已经落实。",
        "跳过 Plugin 时，将最后一段替换为：接下来，我们也试着把自己的项目经验整理成一份 Skill，再通过实际使用，看看这些经验能不能指导模型完成新的任务。"
      ],
      "transition": "本版先补充讲解 Plugin，打开 Game Studio 根目录；补充结束后回到 3.3 整理自己的项目经验。跳过 Plugin 的录制路线保留。",
      "status": "讲师已确认本轮讲述思路；逐字稿与 PPT 已同步修改，待讲师审阅成稿。"
    },
    {
      "id": "plan324-1",
      "number": "3.2.4.1",
      "title": "可选｜从已用 Skill 认识完整 Plugin",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-package",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "打开 Game Studio 固定版本根目录，指认 skills、references 和 scripts。",
          "materials": [
            "plugin-tree"
          ],
          "scriptSource": "r324-package",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "停留在 Game Studio 根目录，依次指认 skills/、references/、scripts/，暂不打开插件声明。",
          "materials": [
            "plugin-tree"
          ],
          "scriptSource": "r324-package",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            1,
            2
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-package",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-package",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-package",
          "step": 2,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "保留讲师过渡原文，从已用 game-playtest 拉远到 Game Studio 根目录；停留指认 skills、references、scripts 的并列位置，再进入各份指导。开头不打开插件声明，后续沿正文引用解释目录之间的关系。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [],
      "arrangement": [
        "接住 3.2.3 对单个 Skill 及配套资料的认识，使用讲师已修改的过渡原文，从熟悉的 game-playtest 拉远到它所属的 Game Studio Plugin。过渡口播保持原文，不另写一版。",
        "停在 Game Studio 根目录，依次指认 skills、references 和 scripts：这个包中有多份指导，资料与脚本也可以放在包级目录。先让学员看清整体组成与目录位置，不打开 plugin.json，也不逐个解释配置字段。",
        "目录只说明文件放在哪里，不能据此断定哪些 Skill 共用资源。把“各份指导负责什么、怎样联系、引用哪些材料”留给后面的实际文件逐步回答。"
      ],
      "transition": "从根目录进入 skills：先看有哪些指导，再读代表 Skill 的正文，解释它们各自的职责与联系。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-roles",
      "number": "3.2.4.2",
      "title": "可选｜看懂包内指导的职责与联系",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-roles",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "打开 Game Studio 的 skills 目录，快速指认 game-studio、game-ui-frontend、sprite-pipeline、game-playtest。",
          "materials": [
            "plugin-skills-tree"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 game-studio/SKILL.md，定位 Use This Skill When 与 Do Not Stay Here When。",
          "materials": [
            "plugin-skill-router"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 1,
          "points": [],
          "kind": "browser",
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "在同一文件向下定位 Routing Rules，指分类后的专项 Skill 相对路径。",
          "materials": [
            "plugin-routing"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            3,
            4
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 game-ui-frontend 的 Frontend Standards，依次指视觉方向、信息层级、Protect the playfield。",
          "materials": [
            "plugin-ui"
          ],
          "scriptSource": "r324-roles",
          "scriptStep": 3,
          "points": [],
          "kind": "browser",
          "reuse": [
            5,
            6
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-roles",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-roles",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-roles",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-roles",
          "step": 3,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "用总入口的适用条件与分流规则解释专项联系，再读界面方法并接到共同依据。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [
        "plan324-2"
      ],
      "arrangement": [
        "先浏览 skills 目录，指认 game-studio、game-ui-frontend、sprite-pipeline 和已用过的 game-playtest，把名称对应到任务判断、界面、素材、试玩等工作；不逐一讲九份 Skill。",
        "打开 game-studio/SKILL.md，先区分整个 Plugin 与包内同名 Skill。读适用条件，再看 Routing Rules：技术路线未定或任务跨领域时先判断任务，明确专项后转向相应指导。用正文中的相对路径说明联系来自明确规则，不能把打包理解成自动依次执行全部 Skill。",
        "再读 game-ui-frontend 的 Frontend Standards，选视觉方向、信息层级和保护游戏区域说明专项指导有自己的方法；与熟悉的 game-playtest 的检查职责对应。"
      ],
      "transition": "做界面和检查界面各有职责，却可能使用共同依据。停在界面 Skill 的 References，沿引用查看它需要的资料。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-3",
      "number": "3.2.4.3",
      "title": "可选｜沿引用看共同资料与配套脚本",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-resources",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "定位 game-ui-frontend 的 References，指 Playtest review 的 ../../references/playtest-checklist.md。",
          "materials": [
            "plugin-ui-refs"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 game-playtest 的 References，指 Full checklist 的相同路径。",
          "materials": [
            "plugin-playtest-refs"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 1,
          "points": [],
          "kind": "browser",
          "reuse": [
            1
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 playtest-checklist.md 的 Universal checks，指 HUD 可读性、优先游戏画面、中央区域保持清晰等条目。",
          "materials": [
            "plugin-checklist"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 sprite-pipeline 的 Core Workflow，指第 4 步及 normalize_sprite_strip.py 引用。",
          "materials": [
            "plugin-sprite-flow"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 3,
          "points": [],
          "kind": "browser",
          "reuse": [
            4,
            5
          ]
        },
        {
          "surface": "GitHub 原件",
          "action": "打开 normalize_sprite_strip.py，确认文件路径与文件开头用途；不展开函数实现。",
          "materials": [
            "plugin-script"
          ],
          "scriptSource": "r324-resources",
          "scriptStep": 4,
          "points": [],
          "kind": "browser",
          "reuse": [
            6,
            7
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-resources",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-resources",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r324-resources",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r324-resources",
          "step": 4,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "先比较共同清单的引用，再沿专项步骤找到脚本；区分共同资源和配套资源。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [],
      "arrangement": [
        "先看 game-ui-frontend 的 References，再看 game-playtest 的 References，比较两处 ../../references/playtest-checklist.md。沿路径回到包级 references，打开同一份清单，以可读性和游戏区域等条目解释两份指导怎样使用共同检查依据。",
        "再打开 sprite-pipeline 的 Core Workflow，简短交代二维动画素材用途，沿归一化步骤找到 scripts/normalize_sprite_strip.py。只看文件位置与用途：Skill 说明何时使用和要求，脚本负责具体处理，不展开参数、算法或素材生成。",
        "把两条关系区分清楚：清单有两份 Skill 的实际引用，脚本是所看专项指导的配套资源。放在包级目录不等于所有 Skill 共用，也不能据此推断这些文件由重复内容抽取而来。"
      ],
      "transition": "至此三个 GitHub 环节全部完成。回到同一张 PPT，把目录、职责和刚看过的引用关系放在一起总结。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-summary",
      "number": "3.2.4.4",
      "title": "可选｜统一总结：整包、分工与引用",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-summary",
      "screens": [
        {
          "surface": "PPT p324a · 一套能力，怎样组织在一起 · 第 1 步：整包提供，指导各有职责",
          "action": "打开 PPT p324a 第 1 步，指 Game Studio 包边界及其中的代表 Skill。",
          "materials": [
            "p324a-0"
          ],
          "scriptSource": "r324-summary",
          "scriptStep": 0,
          "points": [],
          "kind": "ppt",
          "ppt": {
            "id": "p324a",
            "step": 0
          },
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p324a · 一套能力，怎样组织在一起 · 第 2 步：共同资料与配套脚本",
          "action": "推进到第 2 步，沿两份 Skill 指向同一清单的箭头，再指素材指导与脚本。",
          "materials": [
            "p324a-1"
          ],
          "scriptSource": "r324-summary",
          "scriptStep": 1,
          "points": [],
          "kind": "ppt",
          "ppt": {
            "id": "p324a",
            "step": 1
          },
          "reuse": [
            1
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-summary",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-summary",
          "step": 1,
          "part": 1
        }
      ],
      "presentation": "sequence",
      "explanation": "三个 GitHub 环节完成后，用同一张图收拢整体边界、代表职责和已核对的引用。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [
        "plan324-4"
      ],
      "arrangement": [
        "这是前三个 GitHub 环节之后的唯一一次 PPT 总结，使用 p324a 一页、两个展示状态；前面各环节不插入总结页。",
        "第一状态先指 Game Studio 的包边界，再看其中的代表 Skill，收拢“整包提供相关指导与资源、各份 Skill 有各自职责”的关系。",
        "第二状态展示两份 Skill 指向同一清单、素材 Skill 指向脚本的关系，回扣刚才的原文证据：资料按需引用，具体使用关系由指导决定。只归纳已经看过的内容，不新增 MCP 或 Hook 分支。"
      ],
      "transition": "整体组成和引用关系已经看清，接着看怎样安装这个包，并在当前任务中选用其中的指导。",
      "optional": "可选讲解 · Plugin"
    },
    {
      "id": "plan324-5",
      "number": "3.2.4.5",
      "title": "可选｜安装整包，按任务选用",
      "group": "通过 Plugin 组织和分发能力",
      "scriptSource": "r324-use",
      "screens": [
        {
          "surface": "GitHub 原件",
          "action": "打开 .codex-plugin/plugin.json，只指名称 game-studio 和 skills 入口。",
          "materials": [
            "plugin-manifest"
          ],
          "scriptSource": "r324-package",
          "scriptStep": 1,
          "points": [],
          "kind": "browser",
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开完整 Plugin 预跑的来源与实际组成；明确这是历史回放。",
          "materials": [
            "plugin-run-source"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 0,
          "points": [],
          "kind": "browser",
          "reuse": [
            2
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开安装返回的 Inspect 原件，指插件名称、来源和安装路径。安装命令见原预跑文档；同轮终端执行日志缺失，不模拟执行。",
          "materials": [
            "plugin-run-install"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 1,
          "points": [],
          "kind": "inspect",
          "reuse": [
            3
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开同次请求留存，指 game-playtest、六对通关、重开归零和只生成清单的范围。",
          "materials": [
            "plugin-run-request"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 2,
          "points": [],
          "kind": "browser",
          "reuse": [
            4,
            5
          ]
        },
        {
          "surface": "真实回放",
          "action": "打开同轮返回清单的 Inspect 原件，定位通关边界与重开条目。",
          "materials": [
            "plugin-run-result"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 3,
          "points": [],
          "kind": "inspect",
          "reuse": [
            6,
            7
          ]
        },
        {
          "surface": "真实回放",
          "action": "保持清单结果画面；拓展阅读链接留在讲述页材料区，不打开新案例。",
          "materials": [
            "plugin-concept",
            "plugin-skill-mcp",
            "plugin-hooks"
          ],
          "scriptSource": "r324-use",
          "scriptStep": 4,
          "points": [],
          "kind": "browser",
          "reuse": [
            8,
            9
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-package",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-package",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-use",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-use",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r324-use",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r324-use",
          "step": 4,
          "part": 2
        }
      ],
      "presentation": "sequence",
      "explanation": "先简短看插件声明中的名称与 Skill 入口，承接整包安装；再使用原同轮回放核对安装对象、任务和结果。结尾仅提供 MCP／Hook 拓展阅读，再接下一节。",
      "boundary": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
      "status": "已按确认路线制作，待讲师审阅与试读。",
      "legacyAliases": [
        "plan324-6"
      ],
      "arrangement": [
        "安装环节开头才打开 .codex-plugin/plugin.json，简短指认 name 与 skills 入口，不逐字段讲解。说明单份 Skill 也能独立使用和分享；这里通过 Plugin 将相关指导和资源作为整体安装、分发。",
        "切到已有真实安装回放，核对安装对象、来源和返回位置，明确这是历史记录。沿用同次安装与调用材料；终端执行日志缺失的部分不模拟执行，也不把已有安装冒充首次安装。",
        "看明确选用 game-playtest 的原始请求，再看返回清单里的六对通关与重开归零条目。解释安装取得整套能力，当前任务决定用哪部分，还需要补充项目规则；本次只生成清单，没有运行游戏或修改代码。"
      ],
      "transition": "保持结果画面结束 3.2，只简短提及其他 Plugin 可有 MCP、Hook 并提供拓展阅读链接，不展开新案例。随后接 3.3 对 Skill 的生成、审阅、修改与实际应用。",
      "optional": "可选讲解 · Plugin"
    }
  ],
  "contentDesign": {
    "units": [
      {
        "title": "3.2.2 认识完整 Skill 的组成与组织",
        "section": "3.2.2",
        "discussion": "../../../../docs/outline/ch03-discussion.md#:~:text=3.2.2%20%E8%AE%A4%E8%AF%86%E5%AE%8C%E6%95%B4%20Skill%20%E7%9A%84%E7%BB%84%E6%88%90%E4%B8%8E%E7%BB%84%E7%BB%87",
        "items": [
          {
            "frame": "b31",
            "title": "3.2.2.1 沿官方文章认识完整 Skill",
            "screens": [
              {
                "surface": "Anthropic 文章 · 单文件 Skill 的文件头与正文",
                "action": "网页 · 打开文章定位页的“单文件 Skill 图”；停在高亮框出的第一张图，指 Name、Description 和 Quick Start。",
                "materials": [
                  "authoringStructure"
                ],
                "reuse": [
                  0,
                  1
                ],
                "kind": "browser"
              },
              {
                "surface": "Anthropic 文章 · 扩展 Skill 的正文与参考资料",
                "action": "网页 · 点“下一处”到“附带参考资料的 Skill 图”；停在第二张图，指 Overview 的引用、PDF Processing Advanced Reference 和 forms.md。",
                "materials": [
                  "authoringReferences"
                ],
                "reuse": [
                  2,
                  3
                ],
                "kind": "browser"
              },
              {
                "surface": "Anthropic 文章 · PDF 填写流程与检查",
                "action": "网页 · 点“下一处”到 PDF 填写流程；沿高亮继续滚动，指五步清单、映射校验和失败后的返回。",
                "materials": [
                  "authoringWorkflow"
                ],
                "reuse": [
                  4,
                  5
                ],
                "kind": "browser"
              },
              {
                "surface": "Anthropic 文章 · 模板、示例与条件流程",
                "action": "依次定位 Common patterns 下的 Template pattern、Examples pattern、Conditional workflow pattern；每处只看一个例子，不展开工具教程。",
                "materials": [
                  "authoringPatterns",
                  "authoringExamples",
                  "authoringConditions"
                ],
                "reuse": [
                  6,
                  7,
                  8,
                  9
                ],
                "kind": "browser",
                "beats": [
                  {
                    "kind": "browser",
                    "materials": [
                      "authoringPatterns"
                    ],
                    "text": "定位 「报告模板」，指摘要、发现和建议的结构。"
                  },
                  {
                    "paragraphs": [
                      0,
                      1
                    ]
                  },
                  {
                    "kind": "ppt",
                    "text": "主讲到报告模板为止，跳过下方可选解读，直接进入总结。",
                    "jumpTo": "cue-mapEntry",
                    "jumpLabel": "继续主讲：完整 Skill 的总结"
                  },
                  {
                    "kind": "browser",
                    "materials": [
                      "authoringExamples"
                    ],
                    "text": "点“下一处”到 「输入输出示例」，对照输入与期望输出。",
                    "optional": "可选解读 · 输入输出示例与条件流程"
                  },
                  {
                    "paragraphs": [
                      2
                    ]
                  },
                  {
                    "kind": "browser",
                    "materials": [
                      "authoringConditions"
                    ],
                    "text": "点“下一处”到 「条件流程」，对照创建与修改文档的分支。",
                    "optional": "可选解读 · 输入输出示例与条件流程"
                  },
                  {
                    "paragraphs": [
                      3
                    ]
                  }
                ]
              },
              {
                "surface": "Anthropic 文章 · 脚本的运行与查阅",
                "action": "定位 Provide utility scripts；指 analyze_form.py 的运行命令与输出格式，再指 Run the script 和 Read it as reference 的区别。",
                "materials": [
                  "authoringScripts",
                  "authoringScriptUse"
                ],
                "reuse": [
                  10,
                  11
                ],
                "kind": "browser",
                "beats": [
                  {
                    "kind": "browser",
                    "materials": [
                      "authoringScripts"
                    ],
                    "text": "指运行命令和 Output format。"
                  },
                  {
                    "paragraphs": [
                      0
                    ]
                  },
                  {
                    "kind": "browser",
                    "materials": [
                      "authoringScriptUse"
                    ],
                    "text": "点“下一处”，对照运行与查阅两种用法。"
                  },
                  {
                    "paragraphs": [
                      1
                    ]
                  }
                ],
                "optional": "可选解读 · 脚本的运行与查阅"
              }
            ],
            "content": "主讲在同一篇 Anthropic 文章观察单文件、参考资料、工作流程和报告模板；输入输出示例、条件流程与脚本细读保留为可选解读。",
            "reason": "先从真实文件关系与具体写法建立完整 Skill 的认识；文章阶段不插入同义 PPT。",
            "presentation": "sequence",
            "arrangement": [
              "主讲依次看单文件图、配套资料图、表单填写流程和报告模板。讲完模板直接跳到总结，不要求继续逐项读文章。",
              "输入输出示例、条件流程与脚本细读保留原稿、定位及编辑坐标，默认折叠；需要时展开录制。"
            ],
            "transition": "主讲直接进入 3.2.2.3 的总结；OpenAI 原文解读也作为可选内容保留。"
          },
          {
            "frame": "b32",
            "title": "3.2.2.2 可选解读：工作边界与配套文件的分工",
            "screens": [
              {
                "surface": "OpenAI 指南 · 工作边界",
                "action": "网页 · 打开 OpenAI 指南的“工作边界”，对照输入、步骤、输出及提问／停止条件；正文标题的依据见格式规范。",
                "materials": [
                  "workflowBoundary",
                  "bodySpec"
                ],
                "reuse": [
                  0,
                  1
                ],
                "kind": "browser",
                "optional": "可选解读 · OpenAI 工作边界与配套文件"
              },
              {
                "surface": "OpenAI 指南 · 配套文件及取用要求",
                "action": "网页 · 点“下一处”到配套文件，指三类目录及正文引用要求。",
                "materials": [
                  "supportGuide"
                ],
                "reuse": [
                  2,
                  3,
                  4
                ],
                "kind": "browser",
                "optional": "可选解读 · OpenAI 工作边界与配套文件"
              }
            ],
            "content": "在 OpenAI 指南核对工作边界，再看 references/、assets/、scripts/ 的分工；用读规范、填模板、运行程序区分使用方式，指出正文需提供条件与入口。",
            "reason": "可选录制与课后备查：保留原稿和原文定位，主讲不依赖本段。",
            "presentation": "sequence",
            "arrangement": [
              "先对照输入、步骤、输出和提问／停止条件，说明正文要把一项工作交代清楚。正文格式规范只用于回答标题是否固定，不展开一套必填栏目。",
              "再看 references、assets、scripts 的官方说明，用读规范、填模板和运行程序区分使用方式；指认正文需要链接这些文件，并说明何时取用。"
            ],
            "transition": "原文解读在这里收束，以完整结构图为锚点，进入正文和链接详情，再回到结构图讲另一份 Skill。"
          },
          {
            "frame": "3.2.2.3",
            "title": "3.2.2.3 总结：完整 Skill 的组成、正文与连接",
            "screens": [
              {
                "surface": "PPT p07o · 同一套知识，按任务需要逐层取用 · 第 1 步：正文提供核心工作指导；下面展开它怎样组织一项工作",
                "action": "打开 p07o，完整结构图常显，突出 SKILL.md 文件头与正文；提到两篇文章时指页底 Anthropic、OpenAI 原文入口；讲完进入 p07m 展开正文。",
                "materials": [
                  "mapEntry"
                ],
                "scriptStep": 0,
                "ppt": {
                  "id": "p07o",
                  "step": 0
                },
                "kind": "ppt",
                "reuse": [
                  0
                ]
              },
              {
                "surface": "PPT p07m · Skill 正文通常要写清什么 · 第 1 步：任务边界",
                "action": "打开 p07m 第 1 步，依次指任务边界、工作方法、检查依据和交付要求。",
                "materials": [
                  "bodyRoles"
                ],
                "scriptStep": 6,
                "ppt": {
                  "id": "p07m",
                  "step": 0
                },
                "kind": "ppt",
                "reuse": [
                  1,
                  2
                ]
              },
              {
                "surface": "PPT p07m · Skill 正文通常要写清什么 · 第 2 步：工作方法",
                "action": "推进 p07m 第 2 步，逐项指下方写法：范围与输入、Step by step、检查说明或脚本、要求或模板；讲完进入 p07os。",
                "materials": [
                  "bodyExamples"
                ],
                "scriptStep": 7,
                "ppt": {
                  "id": "p07m",
                  "step": 1
                },
                "kind": "ppt",
                "reuse": [
                  3,
                  4,
                  5,
                  6
                ]
              },
              {
                "surface": "PPT p07os · 同一套知识，按任务需要逐层取用 · 第 1 步：正文保留核心指导，资料、程序与素材按需取用",
                "action": "打开 p07os，回到同一张完整结构图，突出 references/、scripts/、assets/ 及查阅、运行、使用连线；其余内容淡显。",
                "materials": [
                  "mapSupport"
                ],
                "scriptStep": 1,
                "ppt": {
                  "id": "p07os",
                  "step": 0
                },
                "kind": "ppt",
                "reuse": [
                  7,
                  8
                ]
              },
              {
                "surface": "PPT p07p · 从正文的一句引用，找到需要的文件 · 第 1 步：引用句怎样连接配套文件",
                "action": "打开 p07p 第 1 步，说明链接给出文件入口、描述交代使用场景；先读正文引用句，再沿箭头指 forms.md 中的用途与方法。",
                "materials": [
                  "connectAll"
                ],
                "scriptStep": 3,
                "ppt": {
                  "id": "p07p",
                  "step": 0
                },
                "kind": "ppt",
                "reuse": [
                  9,
                  10
                ]
              },
              {
                "surface": "PPT p07p · 从正文的一句引用，找到需要的文件 · 第 1 步：引用句怎样连接配套文件",
                "action": "停留 P3.2-12-01（p07p 第 1 步），用一句话总结脚本、模板和素材的引用；讲完进入 p07ox。",
                "materials": [
                  "connectUse"
                ],
                "scriptStep": 5,
                "ppt": {
                  "id": "p07p",
                  "step": 0
                },
                "kind": "ppt",
                "reuse": [
                  11
                ]
              },
              {
                "surface": "PPT p07ox · 同一套知识，按任务需要逐层取用 · 第 1 步：同样通过引用，查阅另一份 Skill 的专项工作指导",
                "action": "打开 p07ox，回到完整结构图，突出另一份 Skill 与引用连线；讲完进入 3.2.3.1 的同轮调用记录。",
                "materials": [
                  "mapOther"
                ],
                "scriptStep": 2,
                "ppt": {
                  "id": "p07ox",
                  "step": 0
                },
                "kind": "ppt",
                "reuse": [
                  12,
                  13
                ]
              }
            ],
            "recordingFrames": [
              "plan323-5"
            ],
            "content": "完整结构图作锚点；正文详情说明边界、步骤、检查与交付具体怎样写，引用详情用正文引用句指向文件，再比较运行脚本与使用模板。两张详情页采用流程与文件示意，不使用表格。",
            "reason": "主讲五页、七个状态：完整图突出正文 → 正文详情两步 → 完整图突出配套文件 → 链接与描述详情两步 → 完整图突出另一份 Skill。所有锚点图的节点始终可见、位置一致。",
            "presentation": "sequence",
            "arrangement": [
              "完整结构图突出正文，进入正文写法详情：先交代边界、方法、检查与交付，再说明分别用范围与输入、逐步指导、检查说明或脚本、要求或模板来写。",
              "回到完整图突出 references、scripts、assets，再进入链接与描述详情；最后回到完整图突出另一份 Skill，说明同样可以沿引用查阅专项指导。"
            ],
            "transition": "接续 3.2.1 的 E 版显式调用日志，核对正文、Reference、工具执行与最终报告。",
            "legacyAliases": [
              "plan323-6"
            ]
          }
        ],
        "pptPlan": {
          "total": 7,
          "status": "主讲五页、六个状态，另两页深链备查；锚点图全部内容常显，只改变高亮。",
          "pages": [
            {
              "page": 1,
              "scene": "p07o",
              "frames": "3.2.2.3",
              "content": "完整图高亮正文",
              "progression": "整体关系常显，进入正文详情",
              "status": "主讲"
            },
            {
              "page": 2,
              "scene": "p07m",
              "frames": "3.2.2.3",
              "content": "Skill 正文通常要写清什么",
              "progression": "四类内容 → 具体写法",
              "status": "主讲"
            },
            {
              "page": 3,
              "scene": "p07os",
              "frames": "3.2.2.3",
              "content": "完整图高亮配套文件",
              "progression": "查阅、运行、使用，进入链接详情",
              "status": "主讲"
            },
            {
              "page": 4,
              "scene": "p07p",
              "frames": "3.2.2.3",
              "content": "正文怎样连接配套文件",
              "progression": "查阅条件与入口；脚本、模板和素材以一句话带过，不再单独展开",
              "status": "主讲"
            },
            {
              "scene": "p07ox",
              "frames": "3.2.2.3",
              "content": "完整图高亮另一份 Skill",
              "progression": "引用专项指导，进入日志",
              "status": "主讲",
              "page": 5
            },
            {
              "page": 6,
              "scene": "p07l",
              "frames": "3.2.2.3",
              "content": "模板、示例和条件各做什么",
              "progression": "空结构 → 填写示意 → 条件分支",
              "status": "补充备查，录制跳过"
            },
            {
              "page": 7,
              "scene": "p07q",
              "frames": "3.2.2.3",
              "content": "沿使用顺序理解渐进披露",
              "progression": "识别选用 → 核心指导与本次输入 → 按需取用，进入日志",
              "status": "补充备查，录制跳过"
            }
          ]
        }
      },
      {
        "title": "3.2.3 从日志看 Skill 怎样被使用",
        "section": "3.2.3",
        "discussion": "../../../../docs/outline/ch03-discussion.md#:~:text=3.2.3%20%E4%BB%8E%E6%97%A5%E5%BF%97%E7%9C%8B%20Skill%20%E6%80%8E%E6%A0%B7%E8%A2%AB%E4%BD%BF%E7%94%A8",
        "items": [
          {
            "frame": "3.2.3.1",
            "title": "3.2.3.1 模型怎样沿引用找到资料",
            "screens": [
              {
                "surface": "Inspect · 请求与任务边界",
                "materials": [
                  "log323-1-0"
                ],
                "scriptStep": 0,
                "kind": "inspect",
                "action": "打开连续日志第 1 处「请求与任务边界」；指实际试玩、不改代码与报告要求",
                "reuse": [
                  0,
                  1
                ]
              },
              {
                "surface": "Inspect · 模型确认清单位置",
                "materials": [
                  "log323-1-1"
                ],
                "scriptStep": 1,
                "kind": "inspect",
                "action": "Inspect 第 2 条；指模型根据 Skill 路径确认 playtest-checklist.md 的位置。",
                "reuse": [
                  2,
                  3
                ]
              },
              {
                "surface": "Inspect · 模型发出读取请求",
                "materials": [
                  "log323-1-2"
                ],
                "scriptStep": 2,
                "kind": "inspect",
                "action": "Inspect 第 3 条；指 cat 命令中的清单路径。",
                "reuse": [
                  4
                ]
              },
              {
                "surface": "Inspect · 工具返回配套内容",
                "materials": [
                  "log323-1-3"
                ],
                "scriptStep": 3,
                "kind": "inspect",
                "action": "Inspect 第 4 条；指工具返回的 Universal checks，不逐条讲解清单。",
                "reuse": [
                  5,
                  6
                ]
              }
            ],
            "recordingFrames": [
              "plan323-log1"
            ],
            "content": "从本次请求没有逐条交代的试玩方法，引出 Skill 保存可复用方法的作用；先用资料入口、实际读取和返回解释详细清单怎样供任务使用。 路径与命令只讲到支持理解取用过程，不逐行讲路径计算；清单用来提醒检查范围，随后进入实际采用方法的例子。",
            "reason": "主讲 E 版显式调用的同一轮记录；F 版自然语言触发为独立对照，不拼接成一次运行。",
            "presentation": "sequence",
            "arrangement": [
              "从本次请求没有逐条交代的试玩方法，引出 Skill 保存可复用方法的作用；先用资料入口、实际读取和返回解释详细清单怎样供任务使用。",
              "路径与命令只讲到支持理解取用过程，不逐行讲路径计算；清单用来提醒检查范围，随后进入实际采用方法的例子。"
            ],
            "legacyAliases": [
              "plan323-1",
              "plan323-2"
            ]
          },
          {
            "frame": "3.2.3.2",
            "title": "3.2.3.2 模型怎样用 Skill 完成这次试玩",
            "screens": [
              {
                "surface": "Inspect · 结合代码决定实际验证",
                "materials": [
                  "log323-2-0"
                ],
                "scriptStep": 0,
                "kind": "inspect",
                "scriptSource": "r323-log2",
                "action": "连续日志第 5 处；只指三处高亮：Playwright、Does the game boot correctly、Mobile viewport，分别对应工具建议与检查清单。",
                "reuse": [
                  0
                ]
              },
              {
                "surface": "Inspect · 模型安排本次试玩",
                "materials": [
                  "log323-2-1"
                ],
                "scriptStep": 1,
                "kind": "inspect",
                "scriptSource": "r323-log2",
                "action": "连续日志第 6 处；指写 Playwright 脚本及验证通关问题的计划。",
                "reuse": [
                  1
                ]
              },
              {
                "surface": "Inspect · 将配对检查展开成具体动作",
                "materials": [
                  "log323-2-2"
                ],
                "scriptStep": 2,
                "kind": "inspect",
                "scriptSource": "r323-log2",
                "action": "连续日志第 7 处；先指 as a player would 与 deterministic is better，再指 Script 2 的配对和通关检查。",
                "reuse": [
                  2
                ]
              },
              {
                "surface": "Inspect · 模型编写试玩脚本",
                "materials": [
                  "log323-3-1"
                ],
                "scriptStep": 1,
                "kind": "inspect",
                "scriptSource": "r323-log3",
                "action": "连续日志第 8 处；快速指两次 click、snapshot 和 screenshot，不展开代码。",
                "reuse": [
                  3
                ]
              },
              {
                "surface": "Inspect · 工具运行试玩脚本",
                "materials": [
                  "log323-3-2"
                ],
                "scriptStep": 2,
                "kind": "inspect",
                "scriptSource": "r323-log3",
                "action": "连续日志第 9 处；指执行命令中的 p02_play.py",
                "reuse": [
                  4
                ]
              },
              {
                "surface": "Inspect · 工具返回试玩结果",
                "materials": [
                  "log323-3-3"
                ],
                "scriptStep": 3,
                "kind": "inspect",
                "scriptSource": "r323-log3",
                "action": "连续日志第 10 处；指 after pair 3 与尝试点击剩余牌后的结果。",
                "reuse": [
                  5
                ]
              },
              {
                "surface": "Inspect · 模型根据运行结果确认问题",
                "materials": [
                  "log323-3-5"
                ],
                "scriptSource": "r323-log3",
                "scriptStep": 5,
                "kind": "inspect",
                "action": "连续日志第 11 处；指第 175 行 CONFIRMED、三对即通关与点击剩余牌无效的判断，最后指 Let me view the screenshots。",
                "reuse": [
                  6
                ]
              },
              {
                "surface": "Inspect · 模型打开截图核对",
                "materials": [
                  "log323-3-4",
                  "log323-e-shot"
                ],
                "scriptStep": 4,
                "kind": "inspect",
                "scriptSource": "r323-log3",
                "action": "连续日志第 12 处；指第 178 行截图路径，再点击「查看本步截图」；看完关闭图片继续下一处。",
                "reuse": [
                  7
                ]
              },
              {
                "surface": "Inspect · 模型根据截图核对异常画面",
                "materials": [
                  "log323-3-6"
                ],
                "scriptSource": "r323-log3",
                "scriptStep": 6,
                "kind": "inspect",
                "action": "连续日志第 13 处；指第 184 行第一段，仅讲截图对提前通关问题的核对，不展开后面的界面评价。",
                "reuse": [
                  8,
                  9
                ]
              },
              {
                "surface": "Inspect · 模型按报告标准组织内容",
                "materials": [
                  "log323-4-0"
                ],
                "scriptStep": 0,
                "kind": "inspect",
                "scriptSource": "r323-log4",
                "action": "连续日志第 14 处；定位第 388 行 per the reporting standard 所在句。",
                "reuse": [
                  10,
                  11
                ]
              },
              {
                "surface": "Inspect · 模型写入报告的第一项问题",
                "materials": [
                  "log323-4-1"
                ],
                "scriptStep": 1,
                "kind": "inspect",
                "scriptSource": "r323-log4",
                "action": "连续日志第 15 处；停在写入 playtest-report.md 的第一个问题，依次指玩家看到、复现、证据、为什么重要、归属",
                "reuse": [
                  12,
                  13
                ]
              },
              {
                "surface": "Inspect · 最终回答中的结论与依据",
                "materials": [
                  "log323-4-2",
                  "log323-f-backup"
                ],
                "scriptStep": 2,
                "kind": "inspect",
                "scriptSource": "r323-log4",
                "action": "连续日志第 16 处；指最终回复开头与提前通关问题，不展开其余结论。讲完切回 Game Playtest 的 SKILL.md。",
                "reuse": [
                  14
                ]
              },
              {
                "surface": "GitHub · 回看 Skill 的试玩步骤与报告要求",
                "materials": [
                  "log323-return-workflow",
                  "log323-return-report"
                ],
                "scriptSource": "r323-log4",
                "scriptStep": 3,
                "kind": "browser",
                "action": "打开「回看 Skill · 试玩步骤」，指 Preferred Workflow 的主要操作与关键截图要求，以及 Tooling Guidance 的 Playwright 建议。",
                "beats": [
                  {
                    "kind": "browser",
                    "materials": [
                      "log323-return-workflow"
                    ],
                    "text": "回看主要操作、关键截图和 Playwright 建议。"
                  },
                  {
                    "paragraphs": [
                      0
                    ]
                  },
                  {
                    "paragraphs": [
                      1
                    ],
                    "hidden": true
                  },
                  {
                    "kind": "browser",
                    "materials": [
                      "log323-return-report"
                    ],
                    "text": "回看报告要求，随后返回总结 PPT。"
                  },
                  {
                    "paragraphs": [
                      2
                    ]
                  }
                ],
                "reuse": [
                  15,
                  16,
                  17
                ]
              }
            ],
            "recordingFrames": [
              "plan323-log2"
            ],
            "content": "核心收获：将希望复用的工具选择、检查方法和交付要求写进 Skill，为模型提供明确的工作方法；用本次实际采用的记录解释其作用，不只逐项证明动作与原文对应。 前面保留工具选择、启动和手机视口对检查范围的说明；从写脚本的计划起，沿提前通关疑点推进，不再逐项展开初始截图、窗口变化、随机点击和重开。 配对计划 → 快速带过脚本与执行 → 工具结果（172）→ 模型明确确认问题（175）→ 打开截图（178）→ 模型读图后的核对（184）→ 报告。严格区分工具观察与模型判断；截图前已确认问题，不能讲成看截图才首次发现。 保留原稿的 scriptSource、scriptStep 编辑坐标；各项检查分成不同脚本，当前没有修改游戏代码，不称修改后的回归测试。",
            "reason": "主讲 E 版显式调用的同一轮记录；F 版自然语言触发为独立对照，不拼接成一次运行。",
            "presentation": "sequence",
            "arrangement": [
              "核心收获：将希望复用的工具选择、检查方法和交付要求写进 Skill，为模型提供明确的工作方法；用本次实际采用的记录解释其作用，不只逐项证明动作与原文对应。",
              "前面保留工具选择、启动和手机视口对检查范围的说明；从写脚本的计划起，沿提前通关疑点推进，不再逐项展开初始截图、窗口变化、随机点击和重开。",
              "配对计划 → 快速带过脚本与执行 → 工具结果（172）→ 模型明确确认问题（175）→ 打开截图（178）→ 模型读图后的核对（184）→ 报告。严格区分工具观察与模型判断；截图前已确认问题，不能讲成看截图才首次发现。",
              "保留原稿的 scriptSource、scriptStep 编辑坐标；各项检查分成不同脚本，当前没有修改游戏代码，不称修改后的回归测试。",
              "结尾简短回看试玩与报告要求，具体对应与写作启示统一在下一页 PPT 总结，不重复展开。"
            ],
            "legacyAliases": [
              "plan323-3",
              "plan323-log3",
              "plan323-log4",
              "plan323-4"
            ]
          },
          {
            "frame": "3.2.3.3",
            "title": "3.2.3.3 总结：从运行日志看 Skill 的指导怎样被使用",
            "screens": [
              {
                "surface": "PPT p323-summary · 从运行日志看 Skill 的指导怎样被使用 · 第 1 步：指导与本次操作、报告的对应",
                "materials": [
                  "useSummary"
                ],
                "scriptSource": "r323-summary",
                "scriptStep": 0,
                "kind": "ppt",
                "ppt": {
                  "id": "p323-summary",
                  "step": 0
                },
                "action": "打开总结 PPT p323-summary，保持三组对应关系同屏。先指主要操作与配对检查，再指清单、脚本和报告的对应；最后指底部“对照关键要求与后续操作”。本版结尾接 Plugin 补充讲解，随后打开 Game Studio 根目录；跳过 Plugin 时，改用讲述安排中保留的直接进入 3.3 的过渡句。",
                "reuse": [
                  0,
                  1,
                  2,
                  3,
                  4
                ]
              }
            ],
            "recordingFrames": [
              "plan323-summary"
            ],
            "content": "连接前面读过的 Skill 与刚才的同轮运行日志：通用指导需要模型结合游戏规则展开成具体检查；用三组对应关系说明怎样对照关键要求与后续操作，看指导用在了哪里，再衔接 3.3 自己写 Skill。",
            "reason": "只总结 E 版同一轮已有证据，不推断使用 Skill 必然发现问题。",
            "presentation": "sequence",
            "arrangement": [
              "保留三组对应关系同屏，不增加逐行点击；重点解释主要操作如何结合游戏规则展开为配对和通关检查。",
              "以清单、工具建议与报告要求的实际用法补足对应，归纳对照关键要求与后续操作的观察方法。",
              "不扩展为 Skill 失效诊断教程，不把读到指导等同于全部要求已经落实。",
              "跳过 Plugin 时，将最后一段替换为：接下来，我们也试着把自己的项目经验整理成一份 Skill，再通过实际使用，看看这些经验能不能指导模型完成新的任务。"
            ],
            "transition": "本版先补充讲解 Plugin，打开 Game Studio 根目录；补充结束后回到 3.3 整理自己的项目经验。跳过 Plugin 的录制路线保留。"
          }
        ],
        "pptPlan": {
          "total": 1,
          "status": "E 版日志与原文讲解后回到一页总结 PPT，随后直接进入 3.3；Plugin 可选，F 版独立备用。",
          "pages": [
            {
              "page": 1,
              "scene": "p323-summary",
              "frames": "3.2.3.3",
              "content": "对照 Skill 关键要求与日志中的具体操作，理解通用指导怎样用于当前任务",
              "progression": "一页一个状态，三组关系同屏，口播依次说明",
              "status": "主讲"
            }
          ]
        }
      },
      {
        "title": "3.2.4 通过 Plugin 组织和分发能力",
        "section": "3.2.4",
        "discussion": "../../../../docs/outline/ch03-discussion.md#:~:text=3.2.4%20%E9%80%9A%E8%BF%87%20Plugin%20%E7%BB%84%E7%BB%87%E5%92%8C%E5%88%86%E5%8F%91%E8%83%BD%E5%8A%9B",
        "items": [
          {
            "frame": "3.2.4.1",
            "title": "3.2.4.1 可选｜从已用 Skill 认识完整 Plugin",
            "screens": [
              {
                "surface": "GitHub 原件",
                "action": "打开 Game Studio 固定版本根目录，指认 skills、references 和 scripts。",
                "materials": [
                  "plugin-tree"
                ],
                "scriptSource": "r324-package",
                "scriptStep": 0,
                "points": [],
                "kind": "browser",
                "reuse": [
                  0
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "停留在 Game Studio 根目录，依次指认 skills/、references/、scripts/，暂不打开插件声明。",
                "materials": [
                  "plugin-tree"
                ],
                "scriptSource": "r324-package",
                "scriptStep": 2,
                "points": [],
                "kind": "browser",
                "reuse": [
                  1,
                  2
                ]
              }
            ],
            "recordingFrames": [
              "plan324-1"
            ],
            "content": "保留讲师过渡原文，从已用 game-playtest 拉远到 Game Studio 根目录；停留指认 skills、references、scripts 的并列位置，再进入各份指导。开头不打开插件声明，后续沿正文引用解释目录之间的关系。",
            "reason": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
            "presentation": "sequence",
            "arrangement": [
              "接住 3.2.3 对单个 Skill 及配套资料的认识，使用讲师已修改的过渡原文，从熟悉的 game-playtest 拉远到它所属的 Game Studio Plugin。过渡口播保持原文，不另写一版。",
              "停在 Game Studio 根目录，依次指认 skills、references 和 scripts：这个包中有多份指导，资料与脚本也可以放在包级目录。先让学员看清整体组成与目录位置，不打开 plugin.json，也不逐个解释配置字段。",
              "目录只说明文件放在哪里，不能据此断定哪些 Skill 共用资源。把“各份指导负责什么、怎样联系、引用哪些材料”留给后面的实际文件逐步回答。"
            ],
            "transition": "从根目录进入 skills：先看有哪些指导，再读代表 Skill 的正文，解释它们各自的职责与联系。"
          },
          {
            "frame": "3.2.4.2",
            "title": "3.2.4.2 可选｜看懂包内指导的职责与联系",
            "screens": [
              {
                "surface": "GitHub 原件",
                "action": "打开 Game Studio 的 skills 目录，快速指认 game-studio、game-ui-frontend、sprite-pipeline、game-playtest。",
                "materials": [
                  "plugin-skills-tree"
                ],
                "scriptSource": "r324-roles",
                "scriptStep": 0,
                "points": [],
                "kind": "browser",
                "reuse": [
                  0
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "打开 game-studio/SKILL.md，定位 Use This Skill When 与 Do Not Stay Here When。",
                "materials": [
                  "plugin-skill-router"
                ],
                "scriptSource": "r324-roles",
                "scriptStep": 1,
                "points": [],
                "kind": "browser",
                "reuse": [
                  1,
                  2
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "在同一文件向下定位 Routing Rules，指分类后的专项 Skill 相对路径。",
                "materials": [
                  "plugin-routing"
                ],
                "scriptSource": "r324-roles",
                "scriptStep": 2,
                "points": [],
                "kind": "browser",
                "reuse": [
                  3,
                  4
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "打开 game-ui-frontend 的 Frontend Standards，依次指视觉方向、信息层级、Protect the playfield。",
                "materials": [
                  "plugin-ui"
                ],
                "scriptSource": "r324-roles",
                "scriptStep": 3,
                "points": [],
                "kind": "browser",
                "reuse": [
                  5,
                  6
                ]
              }
            ],
            "recordingFrames": [
              "plan324-roles"
            ],
            "content": "用总入口的适用条件与分流规则解释专项联系，再读界面方法并接到共同依据。",
            "reason": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
            "presentation": "sequence",
            "arrangement": [
              "先浏览 skills 目录，指认 game-studio、game-ui-frontend、sprite-pipeline 和已用过的 game-playtest，把名称对应到任务判断、界面、素材、试玩等工作；不逐一讲九份 Skill。",
              "打开 game-studio/SKILL.md，先区分整个 Plugin 与包内同名 Skill。读适用条件，再看 Routing Rules：技术路线未定或任务跨领域时先判断任务，明确专项后转向相应指导。用正文中的相对路径说明联系来自明确规则，不能把打包理解成自动依次执行全部 Skill。",
              "再读 game-ui-frontend 的 Frontend Standards，选视觉方向、信息层级和保护游戏区域说明专项指导有自己的方法；与熟悉的 game-playtest 的检查职责对应。"
            ],
            "transition": "做界面和检查界面各有职责，却可能使用共同依据。停在界面 Skill 的 References，沿引用查看它需要的资料。",
            "legacyAliases": [
              "plan324-2"
            ]
          },
          {
            "frame": "3.2.4.3",
            "title": "3.2.4.3 可选｜沿引用看共同资料与配套脚本",
            "screens": [
              {
                "surface": "GitHub 原件",
                "action": "定位 game-ui-frontend 的 References，指 Playtest review 的 ../../references/playtest-checklist.md。",
                "materials": [
                  "plugin-ui-refs"
                ],
                "scriptSource": "r324-resources",
                "scriptStep": 0,
                "points": [],
                "kind": "browser",
                "reuse": [
                  0
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "打开 game-playtest 的 References，指 Full checklist 的相同路径。",
                "materials": [
                  "plugin-playtest-refs"
                ],
                "scriptSource": "r324-resources",
                "scriptStep": 1,
                "points": [],
                "kind": "browser",
                "reuse": [
                  1
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "打开 playtest-checklist.md 的 Universal checks，指 HUD 可读性、优先游戏画面、中央区域保持清晰等条目。",
                "materials": [
                  "plugin-checklist"
                ],
                "scriptSource": "r324-resources",
                "scriptStep": 2,
                "points": [],
                "kind": "browser",
                "reuse": [
                  2,
                  3
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "打开 sprite-pipeline 的 Core Workflow，指第 4 步及 normalize_sprite_strip.py 引用。",
                "materials": [
                  "plugin-sprite-flow"
                ],
                "scriptSource": "r324-resources",
                "scriptStep": 3,
                "points": [],
                "kind": "browser",
                "reuse": [
                  4,
                  5
                ]
              },
              {
                "surface": "GitHub 原件",
                "action": "打开 normalize_sprite_strip.py，确认文件路径与文件开头用途；不展开函数实现。",
                "materials": [
                  "plugin-script"
                ],
                "scriptSource": "r324-resources",
                "scriptStep": 4,
                "points": [],
                "kind": "browser",
                "reuse": [
                  6,
                  7
                ]
              }
            ],
            "recordingFrames": [
              "plan324-3"
            ],
            "content": "先比较共同清单的引用，再沿专项步骤找到脚本；区分共同资源和配套资源。",
            "reason": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
            "presentation": "sequence",
            "arrangement": [
              "先看 game-ui-frontend 的 References，再看 game-playtest 的 References，比较两处 ../../references/playtest-checklist.md。沿路径回到包级 references，打开同一份清单，以可读性和游戏区域等条目解释两份指导怎样使用共同检查依据。",
              "再打开 sprite-pipeline 的 Core Workflow，简短交代二维动画素材用途，沿归一化步骤找到 scripts/normalize_sprite_strip.py。只看文件位置与用途：Skill 说明何时使用和要求，脚本负责具体处理，不展开参数、算法或素材生成。",
              "把两条关系区分清楚：清单有两份 Skill 的实际引用，脚本是所看专项指导的配套资源。放在包级目录不等于所有 Skill 共用，也不能据此推断这些文件由重复内容抽取而来。"
            ],
            "transition": "至此三个 GitHub 环节全部完成。回到同一张 PPT，把目录、职责和刚看过的引用关系放在一起总结。"
          },
          {
            "frame": "3.2.4.4",
            "title": "3.2.4.4 可选｜统一总结：整包、分工与引用",
            "screens": [
              {
                "surface": "PPT p324a · 一套能力，怎样组织在一起 · 第 1 步：整包提供，指导各有职责",
                "action": "打开 PPT p324a 第 1 步，指 Game Studio 包边界及其中的代表 Skill。",
                "materials": [
                  "p324a-0"
                ],
                "scriptSource": "r324-summary",
                "scriptStep": 0,
                "points": [],
                "kind": "ppt",
                "ppt": {
                  "id": "p324a",
                  "step": 0
                },
                "reuse": [
                  0
                ]
              },
              {
                "surface": "PPT p324a · 一套能力，怎样组织在一起 · 第 2 步：共同资料与配套脚本",
                "action": "推进到第 2 步，沿两份 Skill 指向同一清单的箭头，再指素材指导与脚本。",
                "materials": [
                  "p324a-1"
                ],
                "scriptSource": "r324-summary",
                "scriptStep": 1,
                "points": [],
                "kind": "ppt",
                "ppt": {
                  "id": "p324a",
                  "step": 1
                },
                "reuse": [
                  1
                ]
              }
            ],
            "recordingFrames": [
              "plan324-summary"
            ],
            "content": "三个 GitHub 环节完成后，用同一张图收拢整体边界、代表职责和已核对的引用。",
            "reason": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
            "presentation": "sequence",
            "arrangement": [
              "这是前三个 GitHub 环节之后的唯一一次 PPT 总结，使用 p324a 一页、两个展示状态；前面各环节不插入总结页。",
              "第一状态先指 Game Studio 的包边界，再看其中的代表 Skill，收拢“整包提供相关指导与资源、各份 Skill 有各自职责”的关系。",
              "第二状态展示两份 Skill 指向同一清单、素材 Skill 指向脚本的关系，回扣刚才的原文证据：资料按需引用，具体使用关系由指导决定。只归纳已经看过的内容，不新增 MCP 或 Hook 分支。"
            ],
            "transition": "整体组成和引用关系已经看清，接着看怎样安装这个包，并在当前任务中选用其中的指导。",
            "legacyAliases": [
              "plan324-4"
            ]
          },
          {
            "frame": "3.2.4.5",
            "title": "3.2.4.5 可选｜安装整包，按任务选用",
            "screens": [
              {
                "surface": "GitHub 原件",
                "action": "打开 .codex-plugin/plugin.json，只指名称 game-studio 和 skills 入口。",
                "materials": [
                  "plugin-manifest"
                ],
                "scriptSource": "r324-package",
                "scriptStep": 1,
                "points": [],
                "kind": "browser",
                "reuse": [
                  0,
                  1
                ]
              },
              {
                "surface": "真实回放",
                "action": "打开完整 Plugin 预跑的来源与实际组成；明确这是历史回放。",
                "materials": [
                  "plugin-run-source"
                ],
                "scriptSource": "r324-use",
                "scriptStep": 0,
                "points": [],
                "kind": "browser",
                "reuse": [
                  2
                ]
              },
              {
                "surface": "真实回放",
                "action": "打开安装返回的 Inspect 原件，指插件名称、来源和安装路径。安装命令见原预跑文档；同轮终端执行日志缺失，不模拟执行。",
                "materials": [
                  "plugin-run-install"
                ],
                "scriptSource": "r324-use",
                "scriptStep": 1,
                "points": [],
                "kind": "inspect",
                "reuse": [
                  3
                ]
              },
              {
                "surface": "真实回放",
                "action": "打开同次请求留存，指 game-playtest、六对通关、重开归零和只生成清单的范围。",
                "materials": [
                  "plugin-run-request"
                ],
                "scriptSource": "r324-use",
                "scriptStep": 2,
                "points": [],
                "kind": "browser",
                "reuse": [
                  4,
                  5
                ]
              },
              {
                "surface": "真实回放",
                "action": "打开同轮返回清单的 Inspect 原件，定位通关边界与重开条目。",
                "materials": [
                  "plugin-run-result"
                ],
                "scriptSource": "r324-use",
                "scriptStep": 3,
                "points": [],
                "kind": "inspect",
                "reuse": [
                  6,
                  7
                ]
              },
              {
                "surface": "真实回放",
                "action": "保持清单结果画面；拓展阅读链接留在讲述页材料区，不打开新案例。",
                "materials": [
                  "plugin-concept",
                  "plugin-skill-mcp",
                  "plugin-hooks"
                ],
                "scriptSource": "r324-use",
                "scriptStep": 4,
                "points": [],
                "kind": "browser",
                "reuse": [
                  8,
                  9
                ]
              }
            ],
            "recordingFrames": [
              "plan324-5"
            ],
            "content": "先简短看插件声明中的名称与 Skill 入口，承接整包安装；再使用原同轮回放核对安装对象、任务和结果。结尾仅提供 MCP／Hook 拓展阅读，再接下一节。",
            "reason": "前三环节连续使用 GitHub；3.2.4.4 统一总结，收录 1 页 PPT、2 个状态；随后接真实安装与调用回放。",
            "presentation": "sequence",
            "arrangement": [
              "安装环节开头才打开 .codex-plugin/plugin.json，简短指认 name 与 skills 入口，不逐字段讲解。说明单份 Skill 也能独立使用和分享；这里通过 Plugin 将相关指导和资源作为整体安装、分发。",
              "切到已有真实安装回放，核对安装对象、来源和返回位置，明确这是历史记录。沿用同次安装与调用材料；终端执行日志缺失的部分不模拟执行，也不把已有安装冒充首次安装。",
              "看明确选用 game-playtest 的原始请求，再看返回清单里的六对通关与重开归零条目。解释安装取得整套能力，当前任务决定用哪部分，还需要补充项目规则；本次只生成清单，没有运行游戏或修改代码。"
            ],
            "transition": "保持结果画面结束 3.2，只简短提及其他 Plugin 可有 MCP、Hook 并提供拓展阅读链接，不展开新案例。随后接 3.3 对 Skill 的生成、审阅、修改与实际应用。",
            "legacyAliases": [
              "plan324-6"
            ]
          }
        ],
        "pptPlan": {
          "total": 1,
          "status": "前三环节后统一总结；1 页、2 状态。",
          "pages": [
            {
              "id": "P324-1",
              "frames": [
                "3.2.4.4"
              ],
              "states": 2,
              "content": "整包身份与代表职责 → 共同清单与配套脚本的引用",
              "actualId": "p324a",
              "scene": "p324a",
              "page": 1,
              "progression": "完整包与分工 → 资源引用"
            }
          ]
        }
      }
    ]
  }
};
(() => {
 const p = new URLSearchParams(location.search);
 if (p.has('archive') || p.has('legacy') || location.pathname.endsWith('/speaker-archive.html')) return;

 window.lesson.scenes.push(...[{"id": "r322-1", "label": "3.2.2.1 沿官方文章认识完整 Skill", "script": ["【操作提示｜网页 · 打开文章定位页的“单文件 Skill 图”；停在高亮框出的第一张图，指 Name、Description 和 Quick Start。】\n\n前面我们看了名称和描述怎么写。\n沿着这篇文章继续继续学习一份 Skill 是怎么组成的，我们再通过实验来进一步了解 Skill 是怎么样用的。\n\n最简单的 Skill 可以只有一份Markdown 文件。\n文件\b\b上面是我们刚刚学过的 Name 和 Description，然后在它们的下面就是Skill 的具体的指导内容。\n在正文里面会有很多的细节。\n这里先写了概述。交代了这份 skill主要是用 Python 库和命令行工具处理 PDF。\n再往下是 Quick Start。再往下是 Quick Start。这里直接给模型提供了读取 PDF、提取文字的代码示例。", "【操作提示｜网页 · 点“下一处”到“附带参考资料的 Skill 图”；停在第二张图，指 Overview 的引用、PDF Processing Advanced Reference 和 forms.md。】\n\n随着我们的 Skill 不断地扩展，我们还可以在这个 MD 文件的基础之上，额外去绑定一些内容。\n接下来的示例在 Overview 新增了额外的参考，当模型需要去使用一些更高级的功能的时候，比如有关 Java Script，还有一些详细的示例，我们可以去里面去看 PDF Processing Advanced Reference 文件，\n然后当我们需要去处理 PDF 表格的时候，我们可以去看 forms 文件\n\n这样，AI 先读核心指导，任务需要更细的信息时，根据文件路径再去查。\n我们需要的就是在正文里面说清楚。什么时候看哪份文件。\n这种按需要逐层展开的方式叫作渐进披露。", "【操作提示｜网页 · 点“下一处”到 PDF 填写流程；沿高亮继续滚动，指五步清单、映射校验和失败后的返回。】\n\n文章里面还提到了一些写正文的小技巧\n在前几年我们在学习 Prompt 的时候，大家应该听说过我们在写提示词的时候，要告诉 AI，一步一步去完成这个事情。\n我们也可以在 Skill 里面告诉 AI，它按照什么样的步骤去完成事情是最佳的。\n示例里面是先给了 AI 五个步骤。先分析表单，然后整理字段对应关系，检查之后再填写，最后核对输出。\n每个步骤后面，还简要提示了这一步要执行什么操作，比如运行哪个脚本，或者编辑哪个文件。\n\n在 5 个步骤下面，还详细地描述具体的执行操作，以及执行之后的结果。\n例如第一步分析表格，就需要运行这个 Python 的代码。然后他在下面也做了文字的说明，就是你运行的这个代码之后，会提取这个表的字段以及它的位置，并且会储存为一个 json 文件，\n我们也可以在我们自己的 skill 里面运用这种技巧，先梳理清楚有哪些步骤，然后说清楚每一个步骤里面要做的事情以及要注意的事项。", "【操作提示｜依次定位 Common patterns 下的 Template pattern、Examples pattern、Conditional workflow pattern；每处只看一个例子，不展开工具教程。】\n\n刚才我们讲的是，怎么在 Skill 里面把做事的步骤写清楚。\n常见的诉求还有规范模型的输出格式，\n\n如果，我们希望 AI 最后交一份指定格式的报告，就可以在 Skill 里放一个模板，规定报告要有摘要、发现和建议。\n如果我们不希望特别的严格，也可以只规范大的条目\n\n如果还想让 AI 看懂具体应该怎么写，就可以给它一组输入输出示例：收到这样的输入，我们希望得到这样的结果。AI 可以从例子里看到，内容应该怎样组织、写到什么程度。\n\n除了步骤和输出要求，有些任务还需要根据情况选择不同的做法。这时，就可以把条件写进 Skill。比如这里先区分创建新文档和修改已有文档，再分别给出做法。写步骤、给模板、举例子、说明条件，都是把工作要求说清楚的方式。", "【操作提示｜定位 Provide utility scripts；指 analyze_form.py 的运行命令与输出格式，再指 Run the script 和 Read it as reference 的区别。】\n\n再看脚本。这里把提取表单字段的处理写成 analyze_form.py，指导里给出怎样运行，以及会得到什么结果。以后遇到同类任务，就可以使用已有程序。\n\n文章特别提醒，引用脚本时要说明是运行它，还是读取代码来理解做法。脚本的内容不一定要先完整读进对话才能执行；实际能否运行，还要看依赖和输入是否齐全。"]}, {"id": "r322-2", "label": "3.2.2.2 可选解读：工作边界与配套文件的分工", "script": ["【操作提示｜网页 · 打开 OpenAI 指南的“工作边界”，对照输入、步骤、输出及提问／停止条件；正文标题的依据见格式规范。】\n\nOpenAI 的编写指南也列出了正文需要交代的事情：需要什么输入，按什么步骤做，给用户什么结果，哪些信息不能自行猜测，什么时候需要提问或停止，以及要查阅哪些配套文件。\n\n这些条目帮助我们检查工作有没有交代清楚。Agent Skills 规范说，正文没有固定的格式要求。像 When to use 这样的栏目，可以有，也可以没有；使用时机仍要在 description 里说清楚。", "【操作提示｜网页 · 点“下一处”到配套文件，指三类目录及正文引用要求。】\n\n下面把配套内容分成了三类。references 放供查阅的资料，例如规范、背景和较长的示例；assets 放任务会使用的模板和其他素材；scripts 放需要运行的程序。\n\n例如，一份报告规范是拿来读的，报告模板是拿来填内容的，生成报告的程序是拿来运行的。它们都能帮助完成任务，但使用方式不同。需要哪一种，就配哪一种，不要求每份 Skill 都把三个目录建齐。\n\n这些文件还需要从正文中接起来：给出入口，说明何时读取或运行。我们回到 PPT，把正文和这些配套文件放在一起看。"]}, {"id": "r323-5", "label": "总结：完整 Skill 的组成、正文与连接", "script": ["【操作提示｜打开 p07o，完整结构图常显，突出 SKILL.md 文件头与正文；提到两篇文章时指页底 Anthropic、OpenAI 原文入口；讲完进入 p07m 展开正文。】\n\n我们刚才挑了几种常见写法：交代这份指导负责什么，说明什么时候查参考资料，把工作步骤写清楚，再用模板约定最后交出什么。\n写自己的 Skill 时，可以根据任务需要选择这些写法。这篇文章还有输入输出示例、条件流程和配套脚本的建议，OpenAI 的文章也介绍了怎样组织正文和配套文件。大家有时间可以继续看。\n总的来说，一份 Skill 的入口是 SKILL.md：文件头里的名称和描述帮助识别与选用，紧接着的正文负责提供具体的工作指导。", "【操作提示｜打开 p07os，回到同一张完整结构图，突出 references/、scripts/、assets/ 及查阅、运行、使用连线；其余内容淡显。】\n\n简单的 Skill，我们只需要 Skill.md 的内容就够了。但是随着Skill内容增加以后，我们需要尽量控制住 Skill.MD 的长度，所以我们会把 Skill 拆分为多个文件，我们可以把一些 reference 的参考，还有脚本以及一些模板拆分出来，变成新的文件，通过链接的方式给到 Skill MD。\n参考资料是指文字的指导，脚本是可运行的代码……\n\n一般来说，正文控制在五百行以内，保留核心指导即可，较长的细节可以按需要拆出去。", "【操作提示｜打开 p07ox，回到完整结构图，突出另一份 Skill 与引用连线；讲完进入 3.2.3.1 的同轮调用记录。】\n\n同样的链接的方式，我们还可以在一个 Skill 里面引用另一份 Skill。\n\n接下来接着看前面那次自然语言调用。我们已经看到模型拿到正文，再沿同一轮记录核对：正文怎样提供方法，配套清单怎样读进来，最后的回答怎样体现这些要求。", "【操作提示｜打开 p07p 第 1 步，说明链接给出文件入口、描述交代使用场景；先读正文引用句，再沿箭头指 forms.md 中的用途与方法。】\n\n当我们需要希望引用其他文件的时候，我们需要把使用关系交代清楚，这决定了模型是不是能够按照我们预期找到相应的指导文件\n我们可以在 Skill MD 里面说明什么时候需要看哪份资料。\n每个资料里面也可以有关于这个文件是什么使用场景的说明。\n\n", "【操作提示｜打开任务 2 的 Inspect 原始脚本写入命令，指认点击、状态读取和预期检查。】\n\n脚本体现了另一种分工。正文说明要做哪项检查，代码负责执行已经明确的操作和比较。这个片段点击重开按钮，读取状态，再核对计数和横幅。\n\n它是这轮任务生成并执行的脚本。以后要复用，还需要保留辅助函数、浏览器依赖以及对页面结构的要求，不能只拿这一小段就假定能够独立运行。", "【操作提示｜停留 P3.2-12-01（p07p 第 1 步），用一句话总结脚本、模板和素材的引用；讲完进入 p07ox。】\n\n脚本、模板和其他素材也是一样，在正文里给出文件位置，说明什么时候用、怎么用就可以了。", "【操作提示｜打开 p07m 第 1 步，依次指任务边界、工作方法、检查依据和交付要求。】\n\n我们在写 Skill 正文的时候，通常需要把这几件事情交代清楚。\n\n首先是任务边界：这份 Skill 负责什么工作，需要哪些输入。然后是工作方法：AI 应该怎样一步一步完成这项工作。执行过程中或者完成之后，还要有检查依据，告诉它应该检查什么、怎样判断是否符合要求。最后，要说清楚交付什么内容，以及采用什么格式。", "【操作提示｜推进 p07m 第 2 步，逐项指下方写法：范围与输入、Step by step、检查说明或脚本、要求或模板；讲完进入 p07os。】\n\n具体写的时候，任务边界可以直接说明。比如这份 Skill 负责填写 PDF 表单，需要提供表单和要填写的内容。\n\n工作方法可以用 step by step 的方式，先列出步骤，再在每个步骤里面说明具体做什么、怎么做，以及有哪些注意事项。前面看到的分析、映射和填写，就是这样的写法。\n\n检查依据可以用文字说明，要核对哪些内容，什么样的结果才符合要求。如果有适合用程序检查的内容，也可以提供检查脚本，并说明什么时候运行、怎样运行，以及怎样看检查结果。\n\n最后，交付内容和格式可以直接写成要求，也可以给一个模板，让 AI 按照模板组织结果。比如报告需要哪些部分，每一部分应该填写什么，都可以在这里交代。"]}, {"id": "r323-log1", "label": "模型怎样沿引用找到资料", "script": ["【操作提示｜打开连续日志第 1 处「请求与任务边界」；指实际试玩、不改代码与报告要求】\n\n我们接着看前面调用的 Skill 的日志。\n刚才我们看的是，Skill 是如何被找到，并且加载到当前对话里的。\n接下来我们看，把试玩的方法写进 Skill，能给它做任务带来哪些帮助。\n\n先回顾一下，我们发给它的请求。\n我们让它实际试玩这个翻牌游戏，给出一份报告，暂时不要改游戏代码。\n应该怎么试玩、要用什么工具、报告里的问题要怎么写,这些方法写在 Skill 都有。\n这次它会怎样采用这些方法，我们沿着日志看几个具体的地方。", "【操作提示｜Inspect 第 2 条；指模型根据 Skill 路径确认 playtest-checklist.md 的位置。】\n\n正文把详细的检查项放在另一份清单里，并给出了文件路径。\n模型沿着这个路径找到了 .agents/references，不过对前面列目录的结果还有疑问，准备再确认一下。\n\n所以我们一定要把把资料入口写清楚，它在需要这些检查项时，就知道去哪里找。", "【操作提示｜Inspect 第 3 条；指 cat 命令中的清单路径。】\n\n路径确认以后，它调用工具，用 cat 读取 playtest-checklist.md。", "【操作提示｜Inspect 第 4 条；指工具返回的 Universal checks，不逐条讲解清单。】\n\n工具把 checklist 返回到对话里，模型就能参考里面的检查项。\n比如游戏能不能正常开始，主要操作有没有响应，改变窗口大小以后还能不能正常使用。\n\n这些检查方向提前列下来，就能提醒模型在试玩时考虑哪些情况。\n下面看它怎样把这些要求用到这次游戏里。"]}, {"id": "r323-log2", "label": "模型怎样用 Skill 完成这次试玩", "script": ["【操作提示｜连续日志第 5 处；只指三处高亮：Playwright、Does the game boot correctly、Mobile viewport，分别对应工具建议与检查清单。】\n\n这里，它准备使用 Playwright 来操作游戏，采用了正文里推荐的浏览器自动化工具。\n它还列出了启动和手机视口检查，这些在 checklist 里都有提醒，帮助它考虑不同的使用情况。", "【操作提示｜连续日志第 6 处；指写 Playwright 脚本及验证通关问题的计划。】\n\n正文要求测试游戏的主要操作，放到这里，就是翻牌、配对、检查通关。\n它准备把这些操作写成检查的脚本，并按 Skill 的要求，这个脚本会包含下面的这些内容，比如说不同端的显示，在关键状态留下截图等等", "【操作提示｜连续日志第 7 处；先指 as a player would 与 deterministic is better，再指 Script 2 的配对和通关检查。】\n\n它从代码里发现，第三对配好以后，游戏可能就会提前通关。\n随机点牌可以观察玩家体验，但要验证这个问题，它决定找到相同的牌，逐对点击，检查每次配对后的状态。"]}, {"id": "r323-log3", "label": "模型怎样用 Skill 完成这次试玩", "script": ["【操作提示｜连续日志第 8 处；指初始状态和 12 张牌】\n\n游戏打开了：十二张牌，步数是零，配对也是零。\n这是它取得的初始状态，接下来开始配对。", "【操作提示｜连续日志第 8 处；快速指两次 click、snapshot 和 screenshot，不展开代码。】\n\n它把这个检查过程写成了脚本：配好一对就读取状态，出现通关提示就截图。", "【操作提示｜连续日志第 9 处；指执行命令中的 p02_play.py】\n\n然后调用工具，运行这个脚本。", "【操作提示｜连续日志第 10 处；指 after pair 3 与尝试点击剩余牌后的结果。】\n\n实际运行以后，第三对刚配好，游戏就显示六比六，出现了通关提示。\n但是 12 张卡里面，其实只选中了 6 张，于是\n它又尝试点击一张没翻开的牌，状态也没有继续变化。", "【操作提示｜连续日志第 12 处；指第 178 行截图路径，再点击「查看本步截图」；看完关闭图片继续下一处。】\n\n它打开了刚才保存的截图。", "【操作提示｜连续日志第 11 处；指第 175 行 CONFIRMED、三对即通关与点击剩余牌无效的判断，最后指 Let me view the screenshots。】\n\n他通过这一次检查已经确认这里有个 bug。\n确认以后，他决定打开截图再看一下。", "【操作提示｜连续日志第 13 处；指第 184 行第一段，仅讲截图对提前通关问题的核对，不展开后面的界面评价。】\n\n看完截图，它再次指出：画面上写着全部配对完成、配对六比六，但还有六张牌是背面朝上的。\n\n运行结果已经让它确认了问题，截图又把玩家看到的异常画面留下来了。\nSkill 里面我们要求他先实际操作、并且关键状态截图，这里他实际的操作也是按照这个链路来的。"]}, {"id": "r323-log4", "label": "模型怎样用 Skill 完成这次试玩", "script": ["【操作提示｜连续日志第 14 处；定位第 388 行 per the reporting standard 所在句。】\n\n问题找到之后，他就开始写报告。\n他在这里提到，他提到他要确认一下，他是在按照我们的报告规范，也就是我们在 Skill 里面提到的输出的格式的规范来进行撰写。\n保证每个问题都要列出复现步骤，以及可能负责的部分。\n\n", "【操作提示｜连续日志第 15 处；停在写入 playtest-report.md 的第一个问题，依次指玩家看到、复现、证据、为什么重要、归属】\n\n最后生成的报告也基本上是按照这个格式，在报告的顶部会有一个本次检查的本情况，以及结论，再往下是一些具体的问题。\n每个问题它都会分为这几个部分：玩家看到什么、如何复现、证据是什么、然后这个为什么重要、然后它的归属是什么、怎么样修复\n下面的这个问题也是按照这样的格式进行的回答。\n\n", "【操作提示｜连续日志第 16 处；指最终回复开头与提前通关问题，不展开其余结论。讲完切回 Game Playtest 的 SKILL.md。】\n\n最后，它在回复里给出了报告位置，并把主要问题概括了一遍。\n", "【操作提示｜打开「回看 Skill · 试玩步骤」，指 Preferred Workflow 的主要操作与关键截图要求，以及 Tooling Guidance 的 Playwright 建议。】\n\n我们回到 Skill 里核对一下。这里要求实际操作游戏、检查主要操作，并在关键状态截图；下面还推荐了 Playwright。\n\n【切换｜定位同一份 SKILL.md 的 Reporting Standard，指报告要求。】\n\n这里又列出了报告需要包含的内容。刚才的操作和报告，都能在这些指导里找到对应的要求。接下来回到 PPT，把它们放在一起看。"]}, {"id": "r323-summary", "label": "总结：从运行日志看 Skill 的指导怎样被使用", "script": ["【操作提示｜打开总结 PPT p323-summary，保持三组对应关系同屏。先指主要操作与配对检查，再指清单、脚本和报告的对应；最后指底部“对照关键要求与后续操作”。本版结尾接 Plugin 补充讲解，随后打开 Game Studio 根目录；跳过 Plugin 时，改用讲述安排中保留的直接进入 3.3 的过渡句。】\n\n我们做个小结，把前面读过的 Skill 和刚才的运行日志联系起来，看看这些指导具体用在了哪里。\n\n比如，Skill 要求检查主要操作、保留关键截图。\n具体到这个翻牌游戏，哪些操作需要检查、怎样判断通关，就要结合游戏规则来安排。刚才我们看到，模型逐对配牌，检查通关状态，并留下截图。\n\nSkill 还提供了检查清单和工具建议。模型读取这些指导以后，再针对这个游戏编写并运行试玩脚本。这里的脚本，就是模型结合本次任务写出来的。最后，它按照 Skill 的报告要求，把问题现象、复现步骤和证据整理出来。\n\n这样我们能够理解，Skill 提供了哪些通用指导，模型又怎样把它们变成这次任务的具体做法。以后我们自己写了 Skill，也可以这样看运行日志：找到里面的关键要求，再看后续有哪些操作和结果与它对应。\n接下来，我们也试着把自己的项目经验整理成一份 Skill，再通过实际使用，看看这些经验能不能指导模型完成新的任务。\n————\n\n在这之前，我们先补充看一下 Plugin，了解它怎样把相关的 Skill 和配套资源组织在一起，方便安装和使用。"]}, {"id": "r324-package", "label": "可选｜从已用 Skill 认识完整 Plugin", "script": ["【操作提示｜打开 Game Studio 固定版本根目录，指认 skills、references 和 scripts。】\n\n前面我们有提到过，Skill 可以引用 Skill，这里我们看一下当多个 Skill 被打包在一起，用来完成某一个任务的时候，这些 Skill 是如何组织的？以及它们相互之间都有什么样的关系？\n前面学习用到的 Gameplay Test 这个 Skill，就是 Game Studio  Plug in 里面的一个 skill\n Game Studio 是一个用于游戏开发的。 里面包含了前期规划、游戏实现或试玩检查等多个 skill \nOpenAI 将这些 Skill以 Plugin的形式打包在一起，可以一键进行安装。", "【操作提示｜打开 .codex-plugin/plugin.json，只指名称 game-studio 和 skills 入口。】\n\n安装之前，我们简单看一下这个包的声明。name 给出插件名称 game-studio，skills 指向刚才看过的指导目录。\n\n单份 Skill 本来就可以独立使用和分享；这里打包成 Plugin，就可以把这些指导和配套资源作为一个整体安装和分发。接下来看看实际安装和使用的记录。", "【操作提示｜停留在 Game Studio 根目录，依次指认 skills/、references/、scripts/，暂不打开插件声明。】\n\n先看这个包的目录。skills 里面放着不同的 Skill，前面用过的 game-playtest 就在这里。references 和 scripts 则放在包的这一层，和 skills 并列。\n\n也就是说，我们看到的不只有一份指导，还有其他指导，以及配套的资料和脚本。至于哪些 Skill 会用到它们，要进入正文看具体的引用。我们先打开 skills，看看这些指导分别负责什么。"]}, {"id": "r324-roles", "label": "可选｜看懂包内指导的职责与联系", "script": ["【操作提示｜打开 Game Studio 的 skills 目录，快速指认 game-studio、game-ui-frontend、sprite-pipeline、game-playtest。】\n\n这些名称对应游戏开发里的不同工作：有负责判断任务和选择路线的，有负责实现、界面、素材的，也有我们已经用过的试玩检查。需要什么工作，就去看相应指导的适用范围。", "【操作提示｜打开 game-studio/SKILL.md，定位 Use This Skill When 与 Do Not Stay Here When。】\n\n这里有一份 Skill 也叫 game-studio。外面的 Game Studio 是整个 Plugin，这个文件则是包内的一份指导。\n\n它适合技术路线还没确定，或者任务同时涉及实现、界面、素材和检查的情况。下面又交代，当任务已经明确属于某个专项时，就转向更具体的指导。", "【操作提示｜在同一文件向下定位 Routing Rules，指分类后的专项 Skill 相对路径。】\n\n这段先要求判断任务，再列出对应的专项指导。比如界面工作指向 game-ui-frontend，二维动画素材指向 sprite-pipeline，浏览器试玩指向 game-playtest。最后还要求这些工作保持一份连贯的计划。\n\n这些联系是写在正文里的。Plugin 把指导一起提供，具体什么时候转向哪一份，要看当前任务和这里的规则。", "【操作提示｜打开 game-ui-frontend 的 Frontend Standards，依次指视觉方向、信息层级、Protect the playfield。】\n\n再看负责界面的这份指导。它要求先确定视觉方向，再安排信息层级，并且强调保护游戏区域：重要状态要看得清，菜单和说明也不能一直挡住玩家操作。\n\n这就是这份 Skill 自己的工作方法。前面用的 game-playtest 则关注怎样操作游戏、截图和报告问题。两份指导各有职责，但做界面和检查界面也会用到共同的依据。我们沿它们的引用看一下。"]}, {"id": "r324-resources", "label": "可选｜沿引用看共同资料与配套脚本", "script": ["【操作提示｜定位 game-ui-frontend 的 References，指 Playtest review 的 ../../references/playtest-checklist.md。】\n\n界面指导这里引用了一份试玩清单。路径先从当前 Skill 目录回到包的根目录，再进入 references，找到 playtest-checklist.md。做界面时，也可以用这份清单核对玩家看到的效果。", "【操作提示｜打开 game-playtest 的 References，指 Full checklist 的相同路径。】\n\n试玩指导的 Full checklist 指向的也是这一个文件。两份 Skill 没有各自放一份清单，而是都引用包里的共同资料。", "【操作提示｜打开 playtest-checklist.md 的 Universal checks，指 HUD 可读性、优先游戏画面、中央区域保持清晰等条目。】\n\n清单里要求界面在游戏运行时仍然可读，第一屏优先呈现可玩的游戏，正常游玩时中央区域保持清晰。\n\n做界面的人可以用这些要求检查自己的设计，试玩时也可以依据同一份要求观察结果。不同指导有各自的方法，共同的检查依据可以维护一份，再由需要它的指导引用。", "【操作提示｜打开 sprite-pipeline 的 Core Workflow，指第 4 步及 normalize_sprite_strip.py 引用。】\n\n资源也可以是执行具体处理的脚本。sprite-pipeline 负责二维角色动画素材：从认可的角色画面出发，生成动画条，再把结果整理成固定大小的游戏帧。\n\n这里的归一化步骤要求使用同一个缩放比例和对齐位置，并指向包里 scripts 目录下的 normalize_sprite_strip.py。", "【操作提示｜打开 normalize_sprite_strip.py，确认文件路径与文件开头用途；不展开函数实现。】\n\n这就是对应的处理脚本。Skill 交代什么时候使用、要满足哪些要求，脚本完成具体处理。它放在包级 scripts 目录，随整个 Plugin 一起提供。\n\n刚才的清单有两份 Skill 共同引用；这个脚本是我们看到的素材指导的配套资源。是否共用，要看谁实际引用它。现在回到一张图，把刚才几个文件里的关系放在一起。"]}, {"id": "r324-summary", "label": "可选｜统一总结：整包、分工与引用", "script": ["【操作提示｜打开 PPT p324a 第 1 步，指 Game Studio 包边界及其中的代表 Skill。】\n\nGame Studio 把相关指导和资源作为一个 Plugin 提供。包内的 Skill 各有职责：总入口判断任务，具体的界面、素材和试玩工作交给对应指导。", "【操作提示｜推进到第 2 步，沿两份 Skill 指向同一清单的箭头，再指素材指导与脚本。】\n\n这些指导通过引用连接需要的资源。界面和试玩可以使用同一份检查清单，素材指导可以使用配套脚本。把它们放在同一个包里，使用者取得的是这一整套内容；这次用哪部分，仍然由当前任务决定。下面看一次已经保存的安装和使用记录。"]}, {"id": "r324-use", "label": "可选｜安装整包，按任务选用", "script": ["【操作提示｜打开完整 Plugin 预跑的来源与实际组成；明确这是历史回放。】\n\n这里看的是之前保存的真实安装回放。本机已经配置了官方来源 openai-curated，这次安装的对象是其中的完整 Game Studio Plugin。", "【操作提示｜打开安装返回的 Inspect 原件，指插件名称、来源和安装路径。安装命令见原预跑文档；同轮终端执行日志缺失，不模拟执行。】\n\n安装器返回了插件名称、来源和安装路径。这次包里有九份 Skill，相关资料、脚本和素材也一起取得。我们已经看过其中几份指导的职责。现在要为已有的翻牌游戏准备试玩清单，所以选择 game-playtest。", "【操作提示｜打开同次请求留存，指 game-playtest、六对通关、重开归零和只生成清单的范围。】\n\n这次请求明确使用已安装 Plugin 中的 game-playtest，并补上当前游戏的具体规则：全部六对配齐才通关，重开后计数归零，并且还能继续翻牌。\n\nSkill 提供试玩方法，本次请求说明这个游戏要检查什么。这轮只生成清单，不运行游戏、不修改代码。", "【操作提示｜打开同轮返回清单的 Inspect 原件，定位通关边界与重开条目。】\n\n返回清单把通关条件展开成两个检查：完成前五对时不通关，第六对完成后才通关。重开条目也要求计数归零以后，仍然能够继续翻牌和配对。这轮已经针对游戏规则安排了检查，实际试玩还没有执行。\n\n到这里，我们取得了完整 Plugin，再按任务选用其中一份指导。安装整包以后，依然要交代这次的项目要求。", "【操作提示｜保持清单结果画面；拓展阅读链接留在讲述页材料区，不打开新案例。】\n\n我们看到的 Game Studio 主要由 Skills 和配套资料、脚本、素材组成。其他 Plugin 还可以提供 MCP 工具接入，或者在支持的环境中配置 Hook。这里留了官方拓展阅读，有需要时可以继续查。\n\n前面已经看过怎样调用、阅读和组织指导。下一节，我们接着自己的游戏案例，看看怎样生成和审阅一份 Skill，再把它用到新游戏里，根据实际体验继续修改。"]}]);
})();

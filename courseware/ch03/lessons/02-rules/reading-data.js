window.readingPlan = {
  "scope": "3.2.2–3.2.3 读懂简单 Skill 与游戏试玩 Skill",
  "intro": "先读简单示例，再沿游戏试玩 Skill 看正文和配套资源。",
  "status": "2026-11-11：三个任务各接入一页三态 PPT，知识、实例与证据对应；后两段小结保持。",
  "scriptComplete": true,
  "sourcePlanning": {
    "content": "认识 SKILL.md 的文件头和正文，结合 setup-demo-app 看适用场景、交付要求、执行步骤和完成标准。",
    "purpose": "能说明一份简短 Skill 正文各部分的作用。"
  },
  "units": [
    {
      "section": "3.2.2",
      "group": "读懂简单 Skill",
      "explanation": "用结构图和 setup-demo-app 认识正文。",
      "transition": "接着看 game-playtest。"
    },
    {
      "section": "3.2.3",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "explanation": "沿翻牌试玩看正文、调用与配套资源。",
      "transition": "接着看 Plugin 如何组织多份 Skill。"
    },
    {
      "section": "3.2.4",
      "group": "通过 Plugin 组织和分发能力",
      "explanation": "Game Studio 引出 Plugin → 简介 MCP 与 Hook → 安装调用。",
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
      "label": "PPT 1 · 从“是否选用”读到“具体怎样工作”",
      "url": "index.html?mode=slides&part=2&step=0#p07i"
    },
    "purposePpt": {
      "label": "PPT 2 · setup-demo-app 用来搭建什么",
      "url": "index.html?mode=slides&part=2&step=0#p07j"
    },
    "contentsPpt": {
      "label": "PPT · 具体指导与作用",
      "url": "index.html?mode=slides&part=2&step=0#p07k"
    },
    "examplesPpt": {
      "label": "PPT 10 · 不同写法，表达不同的工作知识（第 1 步）",
      "url": "index.html?mode=slides&part=2&step=0#p07l"
    },
    "organizationPpt": {
      "label": "PPT 9 · 正文组织一项工作的判断与行动（第 1 步）",
      "url": "index.html?mode=slides&part=2&step=0#p07m"
    },
    "lengthPpt": {
      "label": "PPT · 篇幅取舍",
      "url": "index.html?mode=slides&part=2&step=0#p07n"
    },
    "exampleFilled": {
      "label": "PPT 10 · 不同写法，表达不同的工作知识（第 2 步）",
      "url": "index.html?mode=slides&part=2&step=1#p07l"
    },
    "exampleCondition": {
      "label": "PPT 10 · 不同写法，表达不同的工作知识（第 3 步）",
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
      "label": "PPT 3 · 把执行、自检与修正接起来",
      "url": "index.html?mode=slides&part=2&step=0#p07j1"
    },
    "bodySpec": {
      "label": "正文与篇幅建议",
      "url": "https://agentskills.io/specification#body-content"
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
      "url": "index.html?mode=slides&step=1#p07p"
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
      "label": "OpenAI · 配套文件指南",
      "url": "https://developers.openai.com/plugins/build/skills#add-supporting-resources"
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
      "url": "index.html?mode=slides&step=1#p07o"
    },
    "mapOther": {
      "label": "PPT · Skill 全局：专项指导边界",
      "url": "index.html?mode=slides&step=2#p07o"
    },
    "connectAll": {
      "label": "PPT · 条件与入口连接配套文件",
      "url": "index.html?mode=slides&step=0#p07p"
    },
    "connectUse": {
      "label": "PPT · 输入、使用方式与结果",
      "url": "index.html?mode=slides&step=1#p07p"
    },
    "bodyRoles": {
      "label": "PPT · 正文组织工作知识",
      "url": "index.html?mode=slides&step=0#p07m"
    },
    "bodyExamples": {
      "label": "PPT · 两份正文的不同组织",
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
      "label": "PPT · p324a · 状态 3",
      "url": "index.html?mode=slides&step=2#p324a"
    },
    "p324b-0": {
      "label": "PPT · p324b · 状态 1",
      "url": "index.html?mode=slides&step=0#p324b"
    },
    "p324b-1": {
      "label": "PPT · p324b · 状态 2",
      "url": "index.html?mode=slides&step=1#p324b"
    },
    "p324b-2": {
      "label": "PPT · p324b · 状态 3",
      "url": "index.html?mode=slides&step=2#p324b"
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
    "p324c": {
      "label": "PPT · 再看第一版风格指导",
      "url": "index.html?mode=slides#p324c"
    }
  },
  "purposeSlide": {
    "title": "setup-demo-app：搭建最小演示应用",
    "content": "画面呈现“界面实验／问题复现 → 搭建最小 React 演示应用”，浏览器框只标 Header 与两张 Card，并注明交付结构示意。技术栈、目录和步骤不放在这页，到官方原文里读。",
    "position": "结构介绍后、打开官方原文前；与用途介绍一句对应",
    "status": "已制作：index.html?mode=slides&part=2#p07j"
  },
  "routes": {
    "r322-1": [
      {
        "step": 0,
        "parts": [
          1,
          2
        ],
        "surface": "PPT · 从“是否选用”读到“具体怎样工作”",
        "materials": [
          "structurePpt"
        ]
      },
      {
        "step": 1,
        "parts": [
          1
        ],
        "surface": "PPT · setup-demo-app 用来搭建什么",
        "materials": [
          "purposePpt",
          "official"
        ]
      }
    ],
    "r322-2": [
      {
        "step": 0,
        "surface": "OpenAI 原文 · 适用场景",
        "materials": [
          "official"
        ]
      },
      {
        "step": 1,
        "surface": "OpenAI 原文 · 技术、目录与写法要求",
        "materials": [
          "official"
        ]
      },
      {
        "step": 2,
        "surface": "OpenAI 原文 · 执行步骤",
        "materials": [
          "official"
        ]
      },
      {
        "step": 3,
        "surface": "OpenAI 原文 · 完成标准",
        "materials": [
          "official"
        ]
      },
      {
        "step": 4,
        "surface": "PPT · 把执行、自检与修正接起来",
        "materials": [
          "workflowSummaryPpt"
        ]
      }
    ],
    "r322-3": [
      {
        "step": 0,
        "surface": "GitHub 固定版本 · game-playtest 全貌",
        "materials": [
          "playtest"
        ]
      }
    ],
    "r322-4": [
      {
        "step": 0,
        "surface": "GitHub 原文 · Overview",
        "materials": [
          "overview",
          "faceEvidence"
        ]
      },
      {
        "step": 1,
        "surface": "GitHub 原文 · Preferred Workflow",
        "materials": [
          "workflow",
          "checks",
          "countEvidence"
        ]
      },
      {
        "step": 2,
        "surface": "GitHub 原文 · Tooling Guidance",
        "materials": [
          "tooling"
        ]
      },
      {
        "step": 3,
        "surface": "GitHub 原文 · Common Checks 与视口检查",
        "materials": [
          "common",
          "responsive"
        ]
      },
      {
        "step": 4,
        "surface": "GitHub 原文 · Reporting Standard",
        "materials": [
          "reporting",
          "countEvidence"
        ]
      },
      {
        "step": 5,
        "surface": "GitHub 原文 · References",
        "materials": [
          "references"
        ]
      }
    ],
    "r322-5": [
      {
        "step": 0,
        "parts": [
          1
        ],
        "surface": "PPT · 按作用读懂正文里的具体指导",
        "materials": [
          "contentsPpt"
        ]
      },
      {
        "step": 0,
        "parts": [
          2
        ],
        "surface": "PPT · 模板和示例怎样交代输出要求",
        "materials": [
          "examplesPpt"
        ]
      },
      {
        "step": 0,
        "parts": [
          3
        ],
        "surface": "PPT · 模板和示例怎样交代输出要求",
        "materials": [
          "exampleFilled"
        ]
      },
      {
        "step": 0,
        "parts": [
          4
        ],
        "surface": "PPT · 模板和示例怎样交代输出要求",
        "materials": [
          "exampleCondition"
        ]
      }
    ],
    "r322-6": [
      {
        "step": 0,
        "parts": [
          1
        ],
        "surface": "PPT · 工作不同，需要交代的内容也不同",
        "materials": [
          "organizationPpt"
        ]
      },
      {
        "step": 0,
        "parts": [
          2
        ],
        "surface": "PPT · 按作用取舍内容，控制正文篇幅",
        "materials": [
          "lengthPpt"
        ]
      },
      {
        "step": 0,
        "parts": [
          3
        ],
        "surface": "PPT · 按作用取舍内容，控制正文篇幅",
        "materials": [
          "resourceTransition"
        ]
      }
    ]
  },
  "placements": {
    "3.2.2.1": [
      "r322-1"
    ],
    "3.2.2.2": [
      "r322-2"
    ],
    "3.2.3.1": [
      "r322-3"
    ],
    "3.2.3.2": [
      "r322-4"
    ],
    "3.2.3.6": [
      "r322-5",
      "r322-6"
    ]
  },
  "recordingLabels": {
    "r322-1": "3.2.2.1 PPT：SKILL.md 结构示意图",
    "r322-2": "3.2.2.2 OpenAI 示例原文：认识正文的基本内容",
    "r322-3": "3.2.3.1 交代案例",
    "r322-4": "3.2.3.2 正文怎样把任务要求变成工作方法",
    "r322-5": "正文常见内容、模板与示例",
    "r322-6": "正文组织方式与篇幅"
  },
  "plannedFrames": [
    {
      "id": "plan323-1",
      "number": "3.2.3.1",
      "title": "交代案例：同一工作为什么需要不同层次的指导",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "从简单正文到配套指导 · 早期 05 预览",
          "action": "打开归档游戏，指认十二张牌；说明六对通关和三轮独立副本。",
          "materials": [
            "old5"
          ],
          "scriptStep": 0,
          "reuse": [
            0,
            1
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-1",
          "step": 0,
          "part": 2
        }
      ],
      "scriptSource": "r323-1",
      "status": "2026-11-11：按知识点重组任务讲述，正式口播同步；材料沿用独立预跑，未新增运行或试讲。",
      "boundary": "用三轮独立任务解释正文、Reference 与专项 Skill 的分工；本段不安排 PPT，使用归档游戏和实际材料。"
    },
    {
      "id": "plan323-2",
      "number": "3.2.3.2",
      "title": "正文怎样把任务要求变成工作方法",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "本次输入与可复用方法的分工 · 任务 1 请求",
          "action": "在任务 1 请求中指认六对通关、检查前三对、保留源码；随后切 PPT p07t1 第 1 步。",
          "materials": [
            "trialA"
          ],
          "scriptStep": 0,
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p07t1 · 共同方法怎样用于当前任务 · 第 1 步：建立知识关系",
          "action": "打开 PPT p07t1 第 1 步：任务信息与共同方法；讲完从本页材料入口打开原文。",
          "materials": [
            "task1Map0"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07t1",
            "step": 0
          },
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "流程把目标展开为行动 · Preferred Workflow",
          "action": "在已打开的 game-playtest 原文定位 Preferred Workflow；讲完在同一文件向下定位 Tooling Guidance。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "workflow",
            "workflowBackup"
          ],
          "scriptStep": 1,
          "reuse": [
            3,
            4
          ]
        },
        {
          "surface": "条件决定怎样执行 · Tooling Guidance",
          "action": "定位已有自动化工具、canvas/WebGL 截图要求、自动化不稳定时的备选做法。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "tooling",
            "toolingBackup"
          ],
          "scriptStep": 2,
          "reuse": [
            5,
            6
          ]
        },
        {
          "surface": "交付要求规定要留下什么证据 · Reporting Standard",
          "action": "在同一原文定位 Reporting Standard；讲完切回已打开的 PPT p07t1，从第 1 步推进到第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "reporting",
            "reportingBackup"
          ],
          "scriptStep": 3,
          "reuse": [
            7,
            8
          ]
        },
        {
          "surface": "PPT p07t1 · 共同方法怎样用于当前任务 · 第 2 步：对应当前任务",
          "action": "返回 PPT p07t1，停在第 2 步：正文指导对应具体检查。",
          "materials": [
            "task1Map1"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t1",
            "step": 1
          },
          "reuse": [
            9,
            10
          ]
        },
        {
          "surface": "预期来自任务，实际来自观察 · 第三对截图",
          "action": "从 PPT p07t1 第 2 步的截图入口打开 early-clear.png；讲完切任务 1 的 run-a-output。",
          "materials": [
            "earlyClear"
          ],
          "scriptStep": 4,
          "reuse": [
            11
          ]
        },
        {
          "surface": "从指导到交付的对应 · 浏览器输出与报告",
          "action": "在任务 1 材料定位 pair-3、AFTER3，再向下看报告；讲完返回 PPT p07t1 并推进到第 3 步。",
          "materials": [
            "outputA",
            "reportA"
          ],
          "scriptStep": 5,
          "reuse": [
            12
          ]
        },
        {
          "surface": "PPT p07t1 · 共同方法怎样用于当前任务 · 第 3 步：用实际结果核对",
          "action": "返回已打开的 PPT p07t1，从第 2 步推进到第 3 步；讲完打开任务 2 请求。",
          "materials": [
            "task1Map2"
          ],
          "scriptStep": 8,
          "ppt": {
            "id": "p07t1",
            "step": 2
          },
          "reuse": [
            13,
            14
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 8,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 8,
          "part": 2
        }
      ],
      "scriptSource": "r323-2",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t1），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-3",
      "number": "3.2.3.3",
      "title": "Reference 怎样把通用指导补充为具体检查",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "为什么需要配套细则 · 任务 2 请求",
          "action": "在任务 2 请求中指认修复、通关后恢复检查和查阅清单；随后切 PPT p07t2 第 1 步。",
          "materials": [
            "trialB"
          ],
          "scriptStep": 0,
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p07t2 · Reference 怎样变成具体检查 · 第 1 步：建立知识关系",
          "action": "打开 PPT p07t2 第 1 步：正文连接配套细则；讲完从本页材料入口打开原文。",
          "materials": [
            "task2Map0"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07t2",
            "step": 0
          },
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "正文保留入口，资料承载细节 · References",
          "action": "从 PPT p07t2 第 1 步打开 References，在原文指认 Full checklist；沿该链接进入清单，定位 Universal checks。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "references",
            "referencesBackup"
          ],
          "scriptStep": 1,
          "reuse": [
            3
          ]
        },
        {
          "surface": "把通用条目落到动作与预期 · Universal checks",
          "action": "停在 Universal checks 的 pause、failure、recovery 条目，读完返回 PPT p07t2 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "checklist",
            "checklistBackup"
          ],
          "scriptStep": 2,
          "reuse": [
            4
          ]
        },
        {
          "surface": "PPT p07t2 · Reference 怎样变成具体检查 · 第 2 步：对应当前任务",
          "action": "返回 PPT p07t2，停在第 2 步：通用条目对应动作与预期。",
          "materials": [
            "task2Map1"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07t2",
            "step": 1
          },
          "reuse": [
            5,
            6
          ]
        },
        {
          "surface": "查阅证据说明知识是否取得 · 清单读取记录",
          "action": "从 PPT p07t2 第 2 步打开“任务 2 · 正文与清单读取”的 Inspect 记录；回讲述页打开“任务 2 · 重开复验”，看高亮输出。",
          "materials": [
            "readB"
          ],
          "scriptStep": 3,
          "reuse": [
            7
          ]
        },
        {
          "surface": "执行结果检验条目是否落实 · 修后重开记录",
          "action": "在 run-b-verify 带过三对与六对结果，指认重开后计数、横幅、牌面与再次翻牌；讲完返回 PPT p07t2 第 3 步。",
          "materials": [
            "restartResult"
          ],
          "scriptStep": 4,
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "PPT p07t2 · Reference 怎样变成具体检查 · 第 3 步：用实际结果核对",
          "action": "返回 PPT p07t2，停在第 3 步：实际结果对应两层预期。",
          "materials": [
            "task2Map2"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t2",
            "step": 2
          },
          "reuse": [
            10,
            11
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-3",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 5,
          "part": 2
        },
        {
          "scene": "r323-3",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-3",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r323-3",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 7,
          "part": 2
        }
      ],
      "scriptSource": "r323-3",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t2），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-4",
      "number": "3.2.3.4",
      "title": "专项 Skill 怎样补充另一类工作的判断",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "检查目标决定需要什么指导 · 任务 3 请求",
          "action": "在任务 3 请求中指认桌面与窄屏检查、查阅前端指导；随后切 PPT p07t3 第 1 步。",
          "materials": [
            "trialC"
          ],
          "scriptStep": 0,
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "PPT p07t3 · 专项 Skill 怎样补充判断依据 · 第 1 步：建立知识关系",
          "action": "打开 PPT p07t3 第 1 步：共同流程与专项判断的分工；讲完从本页材料入口打开原文。",
          "materials": [
            "task3Map0"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t3",
            "step": 0
          },
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "配套资料与专项工作的区别 · Frontend review cues",
          "action": "从 PPT p07t3 第 1 步打开 References，指认 ../game-ui-frontend/SKILL.md；沿链接进入该文件。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "references",
            "referencesBackup"
          ],
          "scriptStep": 1,
          "reuse": [
            4
          ]
        },
        {
          "surface": "按任务选用专项标准 · Frontend Standards",
          "action": "定位信息层级、保护游戏区、桌面和手机设计；随后返回 PPT p07t3 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "frontend",
            "frontendBackup"
          ],
          "scriptStep": 2,
          "reuse": [
            5,
            6
          ]
        },
        {
          "surface": "PPT p07t3 · 专项 Skill 怎样补充判断依据 · 第 2 步：对应当前任务",
          "action": "返回 PPT p07t3，停在第 2 步：专项标准对应两个检查问题。",
          "materials": [
            "task3Map1"
          ],
          "scriptStep": 8,
          "ppt": {
            "id": "p07t3",
            "step": 1
          },
          "reuse": [
            7,
            8
          ]
        },
        {
          "surface": "沿引用查阅的实际范围 · 文件读取记录",
          "action": "从 PPT p07t3 第 2 步打开 run-c-read，核对前端 SKILL.md 的读取；随后打开 desktop-first-pair.png。",
          "materials": [
            "readC"
          ],
          "scriptStep": 3,
          "reuse": [
            9
          ]
        },
        {
          "surface": "标准要结合使用条件 · 桌面游戏区截图",
          "action": "打开 desktop-first-pair.png，观察状态信息与牌阵；讲完打开 mobile-bottom.png 的完整视口截图。",
          "materials": [
            "desktopPair"
          ],
          "scriptStep": 4,
          "reuse": [
            10
          ]
        },
        {
          "surface": "专项标准怎样改变判断 · 窄屏底部视口",
          "action": "打开 mobile-bottom.png，保持完整 375×667 视口可见，指认底部牌与画面中没有出现的计数；随后定位 run-c-verify。",
          "materials": [
            "mobileBottom"
          ],
          "scriptStep": 5,
          "reuse": [
            11
          ]
        },
        {
          "surface": "共同流程与专项判断怎样配合 · 视口输出",
          "action": "在 run-c-verify 指认 overlap area=0 与 metaVisible=False；返回 PPT p07t3 第 3 步，不直接跳到全局小结。",
          "materials": [
            "narrowResult"
          ],
          "scriptStep": 6,
          "reuse": [
            12
          ]
        },
        {
          "surface": "PPT p07t3 · 专项 Skill 怎样补充判断依据 · 第 3 步：用实际结果核对",
          "action": "返回 PPT p07t3，停在第 3 步：不同问题对应不同证据。",
          "materials": [
            "task3Map2"
          ],
          "scriptStep": 9,
          "ppt": {
            "id": "p07t3",
            "step": 2
          },
          "reuse": [
            13,
            14
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 8,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 8,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 9,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 9,
          "part": 2
        }
      ],
      "scriptSource": "r323-4",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t3），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-5",
      "number": "3.2.3.5",
      "title": "复杂 Skill 怎么拆、怎么接",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT p07o · Skill 把可复用的工作知识组织起来 · 第 1 步：入口文件与核心指导",
          "action": "打开 p07o 第 1 步，指认 Skill 边界、SKILL.md、文件头与正文。",
          "materials": [
            "mapEntry"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p07o",
            "step": 0
          },
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "PPT p07o · Skill 把可复用的工作知识组织起来 · 第 2 步：三类配套文件及使用方式",
          "action": "推进 p07o 第 2 步，从正文的引用沿线观察三类配套文件。",
          "materials": [
            "mapSupport"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p07o",
            "step": 1
          },
          "reuse": [
            2,
            3,
            4
          ]
        },
        {
          "surface": "PPT p07o · Skill 把可复用的工作知识组织起来 · 第 3 步：另一份 Skill 的边界与引用",
          "action": "推进 p07o 第 3 步，指认 Skill 边界外的另一份 SKILL.md，再回看两类连接。",
          "materials": [
            "mapOther"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p07o",
            "step": 2
          },
          "reuse": [
            5,
            6,
            7
          ]
        },
        {
          "surface": "PPT p07p · 分开保存，也要把使用关系接清楚 · 第 1 步：正文怎样连接配套文件",
          "action": "打开 p07p 第 1 步，先看核心指导与四项取用信息，再读 Reference 一行。",
          "materials": [
            "connectAll"
          ],
          "scriptStep": 3,
          "ppt": {
            "id": "p07p",
            "step": 0
          },
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "实际重开脚本",
          "action": "打开任务 2 的 Inspect 原始脚本写入命令，指认点击、状态读取和预期检查。",
          "materials": [
            "restartScript"
          ],
          "scriptStep": 4,
          "reuse": [
            10,
            11
          ]
        },
        {
          "surface": "PPT p07p · 分开保存，也要把使用关系接清楚 · 第 2 步：查阅、运行与使用的区别",
          "action": "返回 p07p 第 2 步，展开脚本和素材两行，对照输入与结果。",
          "materials": [
            "connectUse"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07p",
            "step": 1
          },
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
          "step": 0,
          "part": 2
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
          "step": 1,
          "part": 3
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
        },
        {
          "scene": "r323-5",
          "step": 2,
          "part": 3
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
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 5,
          "part": 2
        }
      ],
      "scriptSource": "r323-5",
      "status": "2026-11-11：正式口播接入唯一 script.json；PPT 与材料按画面映射。作者核对状态见本节 README，未讲师试讲。"
    },
    {
      "id": "plan323-6",
      "number": "3.2.3.6",
      "title": "两份示例的系统小结",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT p07m · 正文组织一项工作的判断与行动 · 第 1 步：正文承担的四种作用",
          "action": "打开 p07m 第 1 步，看任务边界、工作方法、判断依据与交付要求四项关系。",
          "materials": [
            "bodyRoles"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p07m",
            "step": 0
          },
          "reuse": [
            0,
            1,
            2
          ]
        },
        {
          "surface": "PPT p07m · 正文组织一项工作的判断与行动 · 第 2 步：两份示例怎样围绕工作组织",
          "action": "推进 p07m 第 2 步，用下方两份已读示例对应四种作用。",
          "materials": [
            "bodyExamples"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p07m",
            "step": 1
          },
          "reuse": [
            3,
            4
          ]
        },
        {
          "surface": "PPT p07l · 不同写法，表达不同的工作知识 · 第 1 步：报告的空结构",
          "action": "打开 p07l 第 1 步，显示空报告结构。",
          "materials": [
            "template"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p07l",
            "step": 0
          },
          "reuse": [
            5
          ]
        },
        {
          "surface": "PPT p07l · 不同写法，表达不同的工作知识 · 第 2 步：同一结构填入具体内容",
          "action": "推进 p07l 第 2 步，展开填写示意。",
          "materials": [
            "filledTemplate"
          ],
          "scriptStep": 3,
          "ppt": {
            "id": "p07l",
            "step": 1
          },
          "reuse": [
            6,
            7
          ]
        },
        {
          "surface": "PPT p07l · 不同写法，表达不同的工作知识 · 第 3 步：一句指导中的条件与要求",
          "action": "推进 p07l 第 3 步，观察条件与要求，再收束表达方式。",
          "materials": [
            "conditional"
          ],
          "scriptStep": 4,
          "ppt": {
            "id": "p07l",
            "step": 2
          },
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "PPT p07q · 同一套知识，按任务需要逐层取用 · 第 1 步：识别身份与适用情境",
          "action": "打开 p07q 第 1 步，回到与 p07o 同构的全局图，突出文件头。",
          "materials": [
            "progressMeta"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07q",
            "step": 0
          },
          "reuse": [
            10
          ]
        },
        {
          "surface": "PPT p07q · 同一套知识，按任务需要逐层取用 · 第 2 步：读取核心指导，结合本次输入",
          "action": "推进 p07q 第 2 步，突出正文，保留文件头与配套资源的位置。",
          "materials": [
            "progressBody"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07q",
            "step": 1
          },
          "reuse": [
            11,
            12
          ]
        },
        {
          "surface": "PPT p07q · 同一套知识，按任务需要逐层取用 · 第 3 步：按需展开资料、程序与材料",
          "action": "推进 p07q 第 3 步，突出从正文展开的路径，显示渐进披露与篇幅建议。",
          "materials": [
            "progressMore"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07q",
            "step": 2
          },
          "reuse": [
            13,
            14,
            15
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-6",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r323-6",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 7,
          "part": 3
        }
      ],
      "scriptSource": "r323-6",
      "status": "2026-11-11：正式口播接入唯一 script.json；PPT 与材料按画面映射。作者核对状态见本节 README，未讲师试讲。"
    },
    {
      "id": "plan323-review",
      "number": "3.2.3.7",
      "title": "再看第一版风格指导",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT p324c · 再看你在 3.1 写下的指导 · 第 1 步：审阅初稿，接到整包提供",
          "action": "PPT p324c；依次指使用时机、具体要求、资料入口和核对方法，邀请暂停修改初稿并保存前后两版",
          "visible": "使用时机、具体要求、资料入口、实际读取与结果；下方指向新玩法验证。",
          "points": [],
          "materials": [
            "p324c"
          ],
          "scriptSource": "r324-review",
          "scriptStep": 0,
          "ppt": {
            "id": "p324c",
            "step": 0
          },
          "reuse": [
            0,
            1,
            2
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-review",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-review",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-review",
          "step": 0,
          "part": 3
        }
      ]
    },
    {
      "id": "plan324-1",
      "number": "3.2.4.1",
      "title": "Plugin 怎样组织和分发能力",
      "group": "通过 Plugin 组织和分发能力",
      "screens": [
        {
          "surface": "已有项目目录 · 四份独立 Skill",
          "action": "在编辑器中打开 3.2.1 演示项目的 .agents/skills，指认四个目录；本段先保持项目目录，下一段再切来源。录前若目录不存在，按就近准备页创建四份 Skill 的隔离演示副本。",
          "visible": "game-playtest、game-ui-frontend、web-game-foundations、react-three-fiber-game 四个目录。",
          "points": [],
          "materials": [
            "plugin-four-preparation"
          ],
          "scriptStep": 0,
          "scriptSource": "r324-1",
          "reuse": [
            0
          ]
        },
        {
          "surface": "来源目录 · Game Studio 固定版本",
          "action": "打开固定版本 Game Studio 的 skills 目录，指认四份熟悉指导和 game-studio、phaser-2d-game；随后按切换提示查看插件声明。",
          "visible": "固定版本、完整 skills 目录与共同的 Plugin 位置；不把本地 .agents 目录叫作已安装 Plugin。",
          "points": [],
          "materials": [
            "plugin-skills-tree",
            "plugin-manifest"
          ],
          "scriptStep": 1,
          "scriptSource": "r324-1",
          "reuse": [
            1,
            2,
            3
          ]
        },
        {
          "surface": "PPT p324a · Plugin 把相关能力作为一包提供 · 第 1 步：已有四份指导",
          "action": "从目录切到图，展示前面已准备的四份 Skill；试玩、界面突出，两份依赖弱化。",
          "visible": "四份名称与主要/配套关系；标明“前面：按任务准备的指导文件”。",
          "points": [],
          "materials": [
            "p324a-0"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p324a",
            "step": 0
          },
          "scriptSource": "r324-2",
          "reuse": [
            4
          ]
        },
        {
          "surface": "PPT p324a · Plugin 把相关能力作为一包提供 · 第 2 步：完整包的身份与组成",
          "action": "在来源的完整能力集合中增加其他代表 Skill，展开 Game Studio Plugin 的统一身份与组成声明。",
          "visible": "已有四份与其他代表指导同属完整包；外层写身份与组成声明，不画成仅给本地四份目录改名。",
          "points": [],
          "materials": [
            "p324a-1"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p324a",
            "step": 1
          },
          "scriptSource": "r324-2",
          "reuse": [
            5
          ]
        },
        {
          "surface": "PPT p324a · Plugin 把相关能力作为一包提供 · 第 3 步：整包安装，按需选用",
          "action": "展开提供者 → 整包安装 → 使用者 → 按任务选用 Skill 的关系；用鼠标指认包内已有的 game-playtest，不等待额外高亮动画。",
          "visible": "完整包保持可见；提供者、整包安装、使用者、按任务选用之间的箭头出现，鼠标指认 game-playtest。",
          "points": [],
          "materials": [
            "p324a-2",
            "plugin-concept"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p324a",
            "step": 2
          },
          "scriptSource": "r324-2",
          "reuse": [
            6
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-1",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-1",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-1",
          "step": 1,
          "part": 3
        },
        {
          "scene": "r324-2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-2",
          "step": 2,
          "part": 1
        }
      ],
      "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
      "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
      "legacyAliases": [
        "plan324-2"
      ]
    },
    {
      "id": "plan324-3",
      "number": "3.2.4.2",
      "title": "Skill、MCP 与 Hook 各有什么作用",
      "group": "通过 Plugin 组织和分发能力",
      "screens": [
        {
          "surface": "PPT p324b · Plugin 还可以提供工具接入与事件触发 · 第 1 步：Skill 提供工作方法",
          "action": "换页；先指出“教学示意”，再指试玩 Skill。",
          "visible": "新标题“团队游戏开发 Plugin · 教学示意”；试玩 Skill 写检查方法与报告要求。",
          "points": [],
          "materials": [
            "p324b-0"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p324b",
            "step": 0
          },
          "scriptSource": "r324-3",
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p324b · Plugin 还可以提供工具接入与事件触发 · 第 2 步：MCP 接入工具与服务",
          "action": "增加 MCP 分支及边界外缺陷库，沿查询关系指认。",
          "visible": "Plugin 内显示服务连接，外部显示缺陷库；查询工具标为示意。",
          "points": [],
          "materials": [
            "p324b-1",
            "plugin-concept"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p324b",
            "step": 1
          },
          "scriptSource": "r324-3",
          "reuse": [
            1
          ]
        },
        {
          "surface": "PPT p324b · Plugin 还可以提供工具接入与事件触发 · 第 3 步：Hook 按事件触发命令",
          "action": "保留原图，增加 Hook 分支；先指会话开始，再指环境检查脚本。",
          "visible": "Skill、MCP、Hook 三个可选组成并列；Hook 单独用“会话开始 → 检查脚本”；页下注支持环境与信任条件。",
          "points": [],
          "materials": [
            "p324b-2",
            "plugin-hooks"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p324b",
            "step": 2
          },
          "scriptSource": "r324-4",
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "官方原文 · Skill 与 MCP 的分工",
          "action": "打开 Skills 文档的 How skills complement an MCP server，停在首段与该节末尾的职责说明。",
          "visible": "MCP 提供信息与操作；Skill 说明何时调用、怎样组织工作及输出。",
          "points": [],
          "materials": [
            "plugin-skill-mcp"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 0,
          "reuse": [
            4,
            5,
            6
          ]
        },
        {
          "surface": "官方原文 · Hook 的事件与命令",
          "action": "打开 Hook 章节，先停在开头的宿主与安装方式说明；讲完首段后按切换提示定位代码示例。",
          "visible": "事件发生 → 宿主执行配置命令；脚本必须能在执行环境中运行。",
          "points": [],
          "materials": [
            "plugin-hooks",
            "plugin-shapes"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 1,
          "reuse": [
            7,
            8,
            9,
            10
          ]
        },
        {
          "surface": "来源目录 · Game Studio 的实际声明",
          "action": "打开固定版本插件声明，指 name、version，再滚到 skills 字段；说明未声明 MCP 或 Hook 后按切换提示回到包目录。",
          "visible": "Game Studio 指向 skills；本版本未声明 MCP 或 Hook。",
          "points": [],
          "materials": [
            "plugin-manifest",
            "plugin-tree"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 2,
          "reuse": [
            11,
            12,
            13
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-3",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-3",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-4",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 4
        },
        {
          "scene": "r324-7",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 2,
          "part": 3
        }
      ],
      "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
      "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
      "legacyAliases": [
        "plan324-4"
      ]
    },
    {
      "id": "plan324-5",
      "number": "3.2.4.3",
      "title": "安装 Game Studio，并按任务选用指导",
      "group": "通过 Plugin 组织和分发能力",
      "screens": [
        {
          "surface": "真实预跑回放 · 完整 Plugin 安装",
          "action": "打开真实安装回放的“来源与实际组成”，指安装对象与九份 Skill 清单；讲完首段后按切换提示进入“安装”。",
          "visible": "已配置官方来源；本次通过 CLI 安装完整包，记录日期与版本可查。",
          "points": [],
          "materials": [
            "plugin-run-source",
            "plugin-run-install"
          ],
          "scriptSource": "r324-5",
          "scriptStep": 1,
          "reuse": [
            0,
            1,
            2
          ]
        },
        {
          "surface": "真实目录与正文 · 按任务选择指导",
          "action": "打开固定版本 game-studio/SKILL.md，停在 Use This Skill When；随后按切换提示打开 sprite-pipeline 和 game-playtest 的职责说明。",
          "visible": "Game Studio Plugin 的包边界与 game-studio Skill 的文件层级；三个任务各自对应一份指导。",
          "points": [],
          "materials": [
            "plugin-tree",
            "plugin-skill-router",
            "plugin-skill-sprite",
            "plugin-skill-playtest"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 3,
          "reuse": [
            3,
            4,
            5,
            6,
            7,
            8
          ]
        },
        {
          "surface": "真实预跑回放 · 明确选用与具体规则",
          "action": "打开同次请求，指 game-playtest、六对通关、重开归零，以及只生成清单的范围。",
          "visible": "选择的指导与本次具体规则同时可见。",
          "points": [],
          "materials": [
            "plugin-run-request"
          ],
          "scriptSource": "r324-6",
          "scriptStep": 0,
          "reuse": [
            9,
            10
          ]
        },
        {
          "surface": "真实预跑回放 · 返回清单与衔接",
          "action": "定位清单中的通关边界和重开条目，展示到可以看出已针对本次规则作答即止。",
          "visible": "5/6 不通关、6/6 才通关；重开计数归零后继续翻牌。",
          "points": [],
          "materials": [
            "plugin-run-result"
          ],
          "scriptSource": "r324-6",
          "scriptStep": 2,
          "reuse": [
            11,
            12
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-5",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-5",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-5",
          "step": 1,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 4
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 5
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 6
        },
        {
          "scene": "r324-6",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-6",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-6",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-6",
          "step": 2,
          "part": 2
        }
      ],
      "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
      "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
      "legacyAliases": [
        "plan324-6"
      ],
      "previousReuse": [
        {
          "scene": "r324-5",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-6",
          "step": 1,
          "part": 1
        }
      ]
    }
  ],
  "pluginSlidePlan": {
    "total": 2,
    "status": "复用两页 PPT、各三个状态；原文带读、任务选用及转场逐字稿已补齐，安装调用采用真实回放。",
    "pages": [
      {
        "id": "P324-1",
        "frames": [
          "3.2.4.1"
        ],
        "states": 3,
        "content": "前面按任务准备四份指导 → 来源处完整 Plugin 的统一身份与组成声明 → 整包安装与按需选用；数量不是 Plugin 的定义。",
        "actualId": "p324a",
        "scene": "p324a",
        "page": 1,
        "progression": "目录 → 熟悉的指导 → 完整包 → 提供与选用"
      },
      {
        "id": "P324-2",
        "frames": [
          "3.2.4.2"
        ],
        "states": 3,
        "content": "教学假设：Skill 的方法、MCP 的工具、Hook 的事件触发；三个可选组成并列。",
        "actualId": "p324b",
        "scene": "p324b",
        "page": 2,
        "progression": "方法 → 工具接入 → 事件触发 → 官方原文 → 真实组成"
      }
    ]
  },
  "recordingFrames": {
    "3.2.3.1": [
      "plan323-1",
      "b33"
    ],
    "3.2.3.2": [
      "plan323-2",
      "b34"
    ],
    "3.2.3.6": [
      "plan323-6",
      "b35",
      "b36"
    ],
    "3.2.3.3": [
      "plan323-3"
    ],
    "3.2.3.4": [
      "plan323-4"
    ],
    "3.2.3.5": [
      "plan323-5"
    ],
    "3.2.3.7": [
      "plan323-review"
    ],
    "3.2.4.1": [
      "plan324-1"
    ],
    "3.2.4.2": [
      "plan324-3"
    ],
    "3.2.4.3": [
      "plan324-5"
    ]
  },
  "frames": [
    {
      "id": "b31",
      "title": "3.2.2.1 PPT：SKILL.md 结构示意图",
      "group": "读懂简单 Skill",
      "screens": [
        {
          "surface": "PPT 第 1 页 · 从“是否选用”读到“具体怎样工作”",
          "action": "打开此页，展示当前画面",
          "materials": [
            "structurePpt"
          ],
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "PPT 第 2 页 · setup-demo-app 用来搭建什么",
          "action": "打开此页，展示当前画面",
          "materials": [
            "purposePpt",
            "official"
          ],
          "reuse": [
            2
          ]
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
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。"
    },
    {
      "id": "b32",
      "title": "3.2.2.2 OpenAI 示例原文：认识正文的基本内容",
      "group": "读懂简单 Skill",
      "screens": [
        {
          "surface": "OpenAI 原文 · 适用场景",
          "action": "打开 https://developers.openai.com/blog/eval-skills#a-sample-skill，定位 setup-demo-app 的完整代码块；停留 When to use this",
          "materials": [
            "official"
          ],
          "reuse": [
            0
          ]
        },
        {
          "surface": "OpenAI 原文 · 技术、目录与写法要求",
          "action": "保持 What to build 原文；简要指认技术组合、项目目录，再以 Functional components only 解释实现要求，不逐条展开技术细节",
          "materials": [
            "official"
          ],
          "reuse": [
            1
          ]
        },
        {
          "surface": "OpenAI 原文 · 执行步骤",
          "action": "浏览 Steps 四步；指认一处命令和一处配置片段，说明步骤提供执行方法，不讲安装教程",
          "materials": [
            "official"
          ],
          "reuse": [
            2
          ]
        },
        {
          "surface": "OpenAI 原文 · 完成标准",
          "action": "定位 Definition of done，并保持前面的步骤可回看",
          "materials": [
            "official"
          ],
          "reuse": [
            3
          ]
        },
        {
          "surface": "PPT 第 3 页 · 把执行、自检与修正接起来",
          "action": "打开此页，展示当前画面",
          "materials": [
            "workflowSummaryPpt"
          ],
          "reuse": [
            4,
            5,
            6
          ]
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
          "step": 1,
          "part": 1
        },
        {
          "scene": "r322-2",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r322-2",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r322-2",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r322-2",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r322-2",
          "step": 4,
          "part": 3
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。"
    },
    {
      "id": "b33",
      "title": "已有口播取材 · 3.2.3.1 交代案例",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "GitHub 固定版本 · game-playtest 全貌",
          "action": "打开 https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md；从文件头向下浏览到 References，再回 Overview",
          "materials": [
            "playtest"
          ],
          "reuse": [
            0
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r322-3",
          "step": 0,
          "part": 1
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。",
      "historical": true,
      "boundary": "历史取材：原稿及编辑坐标保留。当前录制采用上方三轮讲述线。"
    },
    {
      "id": "b34",
      "title": "已有口播取材 · 3.2.3.2 正文怎样把任务要求变成工作方法",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "GitHub 原文 · Overview",
          "action": "停在 Overview；备查第一节 evidence.html 的 face-check 朝向检查片段，不重新运行游戏",
          "materials": [
            "overview",
            "faceEvidence"
          ],
          "reuse": [
            0
          ]
        },
        {
          "surface": "GitHub 原文 · Preferred Workflow",
          "action": "定位 Preferred Workflow，沿五步指认试玩路线，说明它如何帮助 AI 组织检查；不展开翻牌规则或具体验收标准",
          "materials": [
            "workflow",
            "checks",
            "countEvidence"
          ],
          "reuse": [
            1
          ]
        },
        {
          "surface": "GitHub 原文 · Tooling Guidance",
          "action": "定位 Tooling Guidance，只读 canvas／WebGL 的截图条件，解释条件与检查手段的关系；其余工具条目保留原文，不逐项展开",
          "materials": [
            "tooling"
          ],
          "reuse": [
            2
          ]
        },
        {
          "surface": "GitHub 原文 · Common Checks 与视口检查",
          "action": "依次看 Common Checks 的 2D、3D 分组，再到 Responsive and Browser Checks；只指认输入反馈、视口、键盘与指针等片段",
          "materials": [
            "common",
            "responsive"
          ],
          "reuse": [
            3
          ]
        },
        {
          "surface": "GitHub 原文 · Reporting Standard",
          "action": "定位 Reporting Standard；以另一份翻牌记录中的步数刷新问题作课程示意，不显示为本次新调用结果",
          "materials": [
            "reporting",
            "countEvidence"
          ],
          "reuse": [
            4
          ]
        },
        {
          "surface": "GitHub 原文 · References",
          "action": "滚到 References，指认相对路径，不逐份展开",
          "materials": [
            "references"
          ],
          "reuse": [
            5
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r322-4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r322-4",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r322-4",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r322-4",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r322-4",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r322-4",
          "step": 5,
          "part": 1
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。",
      "historical": true,
      "boundary": "历史取材：原稿及编辑坐标保留。当前录制采用上方三轮讲述线。"
    },
    {
      "id": "b35",
      "title": "已有口播取材 · 正文常见内容、模板与示例",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT · 按作用读懂正文里的具体指导",
          "action": "回 PPT p07k 归纳正文的作用，再切 p07l：先看空报告模板，再展开填写示意，最后展开条件句；短例为课程示意，口播与各展开状态对应",
          "materials": [
            "contentsPpt"
          ],
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT 第 10 页 · 不同写法，表达不同的工作知识 · 第 1 步：报告的空结构",
          "action": "打开此页，停在对应展开状态",
          "materials": [
            "examplesPpt"
          ],
          "reuse": [
            1
          ]
        },
        {
          "surface": "PPT 第 10 页 · 不同写法，表达不同的工作知识 · 第 2 步：同一结构填入具体内容",
          "action": "打开此页，停在对应展开状态",
          "materials": [
            "exampleFilled"
          ],
          "reuse": [
            2
          ]
        },
        {
          "surface": "PPT 第 10 页 · 不同写法，表达不同的工作知识 · 第 3 步：一句指导中的条件与要求",
          "action": "打开此页，停在对应展开状态",
          "materials": [
            "exampleCondition"
          ],
          "reuse": [
            3
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r322-5",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r322-5",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r322-5",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r322-5",
          "step": 0,
          "part": 4
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。",
      "historical": true,
      "boundary": "历史取材：原稿及编辑坐标保留。当前录制采用上方三轮讲述线。"
    },
    {
      "id": "b36",
      "title": "已有口播取材 · 正文组织方式与篇幅",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT 第 9 页 · 正文组织一项工作的判断与行动 · 第 1 步：正文承担的四种作用",
          "action": "打开此页，停在对应展开状态",
          "materials": [
            "organizationPpt"
          ],
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT · 按作用取舍内容，控制正文篇幅",
          "action": "PPT 并列两份文件的标题结构，只展示组织差异；随后呈现“具体有用、避免重复、详细资料按需引用”和“500 行：篇幅建议”",
          "materials": [
            "lengthPpt"
          ],
          "reuse": [
            1
          ]
        },
        {
          "surface": "PPT · 按作用取舍内容，控制正文篇幅",
          "action": "PPT 并列两份文件的标题结构，只展示组织差异；随后呈现“具体有用、避免重复、详细资料按需引用”和“500 行：篇幅建议”",
          "materials": [
            "resourceTransition"
          ],
          "reuse": [
            2
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r322-6",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r322-6",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r322-6",
          "step": 0,
          "part": 3
        }
      ],
      "status": "按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。",
      "historical": true,
      "boundary": "历史取材：原稿及编辑坐标保留。当前录制采用上方三轮讲述线。"
    },
    {
      "id": "plan323-1",
      "number": "3.2.3.1",
      "title": "交代案例：同一工作为什么需要不同层次的指导",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "从简单正文到配套指导 · 早期 05 预览",
          "action": "打开归档游戏，指认十二张牌；说明六对通关和三轮独立副本。",
          "materials": [
            "old5"
          ],
          "scriptStep": 0,
          "reuse": [
            0,
            1
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-1",
          "step": 0,
          "part": 2
        }
      ],
      "scriptSource": "r323-1",
      "status": "2026-11-11：按知识点重组任务讲述，正式口播同步；材料沿用独立预跑，未新增运行或试讲。",
      "boundary": "用三轮独立任务解释正文、Reference 与专项 Skill 的分工；本段不安排 PPT，使用归档游戏和实际材料。"
    },
    {
      "id": "plan323-2",
      "number": "3.2.3.2",
      "title": "正文怎样把任务要求变成工作方法",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "本次输入与可复用方法的分工 · 任务 1 请求",
          "action": "在任务 1 请求中指认六对通关、检查前三对、保留源码；随后切 PPT p07t1 第 1 步。",
          "materials": [
            "trialA"
          ],
          "scriptStep": 0,
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p07t1 · 共同方法怎样用于当前任务 · 第 1 步：建立知识关系",
          "action": "打开 PPT p07t1 第 1 步：任务信息与共同方法；讲完从本页材料入口打开原文。",
          "materials": [
            "task1Map0"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07t1",
            "step": 0
          },
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "流程把目标展开为行动 · Preferred Workflow",
          "action": "在已打开的 game-playtest 原文定位 Preferred Workflow；讲完在同一文件向下定位 Tooling Guidance。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "workflow",
            "workflowBackup"
          ],
          "scriptStep": 1,
          "reuse": [
            3,
            4
          ]
        },
        {
          "surface": "条件决定怎样执行 · Tooling Guidance",
          "action": "定位已有自动化工具、canvas/WebGL 截图要求、自动化不稳定时的备选做法。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "tooling",
            "toolingBackup"
          ],
          "scriptStep": 2,
          "reuse": [
            5,
            6
          ]
        },
        {
          "surface": "交付要求规定要留下什么证据 · Reporting Standard",
          "action": "在同一原文定位 Reporting Standard；讲完切回已打开的 PPT p07t1，从第 1 步推进到第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "reporting",
            "reportingBackup"
          ],
          "scriptStep": 3,
          "reuse": [
            7,
            8
          ]
        },
        {
          "surface": "PPT p07t1 · 共同方法怎样用于当前任务 · 第 2 步：对应当前任务",
          "action": "返回 PPT p07t1，停在第 2 步：正文指导对应具体检查。",
          "materials": [
            "task1Map1"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t1",
            "step": 1
          },
          "reuse": [
            9,
            10
          ]
        },
        {
          "surface": "预期来自任务，实际来自观察 · 第三对截图",
          "action": "从 PPT p07t1 第 2 步的截图入口打开 early-clear.png；讲完切任务 1 的 run-a-output。",
          "materials": [
            "earlyClear"
          ],
          "scriptStep": 4,
          "reuse": [
            11
          ]
        },
        {
          "surface": "从指导到交付的对应 · 浏览器输出与报告",
          "action": "在任务 1 材料定位 pair-3、AFTER3，再向下看报告；讲完返回 PPT p07t1 并推进到第 3 步。",
          "materials": [
            "outputA",
            "reportA"
          ],
          "scriptStep": 5,
          "reuse": [
            12
          ]
        },
        {
          "surface": "PPT p07t1 · 共同方法怎样用于当前任务 · 第 3 步：用实际结果核对",
          "action": "返回已打开的 PPT p07t1，从第 2 步推进到第 3 步；讲完打开任务 2 请求。",
          "materials": [
            "task1Map2"
          ],
          "scriptStep": 8,
          "ppt": {
            "id": "p07t1",
            "step": 2
          },
          "reuse": [
            13,
            14
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-2",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 8,
          "part": 1
        },
        {
          "scene": "r323-2",
          "step": 8,
          "part": 2
        }
      ],
      "scriptSource": "r323-2",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t1），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-3",
      "number": "3.2.3.3",
      "title": "Reference 怎样把通用指导补充为具体检查",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "为什么需要配套细则 · 任务 2 请求",
          "action": "在任务 2 请求中指认修复、通关后恢复检查和查阅清单；随后切 PPT p07t2 第 1 步。",
          "materials": [
            "trialB"
          ],
          "scriptStep": 0,
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p07t2 · Reference 怎样变成具体检查 · 第 1 步：建立知识关系",
          "action": "打开 PPT p07t2 第 1 步：正文连接配套细则；讲完从本页材料入口打开原文。",
          "materials": [
            "task2Map0"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07t2",
            "step": 0
          },
          "reuse": [
            1,
            2
          ]
        },
        {
          "surface": "正文保留入口，资料承载细节 · References",
          "action": "从 PPT p07t2 第 1 步打开 References，在原文指认 Full checklist；沿该链接进入清单，定位 Universal checks。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "references",
            "referencesBackup"
          ],
          "scriptStep": 1,
          "reuse": [
            3
          ]
        },
        {
          "surface": "把通用条目落到动作与预期 · Universal checks",
          "action": "停在 Universal checks 的 pause、failure、recovery 条目，读完返回 PPT p07t2 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "checklist",
            "checklistBackup"
          ],
          "scriptStep": 2,
          "reuse": [
            4
          ]
        },
        {
          "surface": "PPT p07t2 · Reference 怎样变成具体检查 · 第 2 步：对应当前任务",
          "action": "返回 PPT p07t2，停在第 2 步：通用条目对应动作与预期。",
          "materials": [
            "task2Map1"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07t2",
            "step": 1
          },
          "reuse": [
            5,
            6
          ]
        },
        {
          "surface": "查阅证据说明知识是否取得 · 清单读取记录",
          "action": "从 PPT p07t2 第 2 步打开“任务 2 · 正文与清单读取”的 Inspect 记录；回讲述页打开“任务 2 · 重开复验”，看高亮输出。",
          "materials": [
            "readB"
          ],
          "scriptStep": 3,
          "reuse": [
            7
          ]
        },
        {
          "surface": "执行结果检验条目是否落实 · 修后重开记录",
          "action": "在 run-b-verify 带过三对与六对结果，指认重开后计数、横幅、牌面与再次翻牌；讲完返回 PPT p07t2 第 3 步。",
          "materials": [
            "restartResult"
          ],
          "scriptStep": 4,
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "PPT p07t2 · Reference 怎样变成具体检查 · 第 3 步：用实际结果核对",
          "action": "返回 PPT p07t2，停在第 3 步：实际结果对应两层预期。",
          "materials": [
            "task2Map2"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t2",
            "step": 2
          },
          "reuse": [
            10,
            11
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-3",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 5,
          "part": 2
        },
        {
          "scene": "r323-3",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-3",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r323-3",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-3",
          "step": 7,
          "part": 2
        }
      ],
      "scriptSource": "r323-3",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t2），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-4",
      "number": "3.2.3.4",
      "title": "专项 Skill 怎样补充另一类工作的判断",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "检查目标决定需要什么指导 · 任务 3 请求",
          "action": "在任务 3 请求中指认桌面与窄屏检查、查阅前端指导；随后切 PPT p07t3 第 1 步。",
          "materials": [
            "trialC"
          ],
          "scriptStep": 0,
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "PPT p07t3 · 专项 Skill 怎样补充判断依据 · 第 1 步：建立知识关系",
          "action": "打开 PPT p07t3 第 1 步：共同流程与专项判断的分工；讲完从本页材料入口打开原文。",
          "materials": [
            "task3Map0"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07t3",
            "step": 0
          },
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "配套资料与专项工作的区别 · Frontend review cues",
          "action": "从 PPT p07t3 第 1 步打开 References，指认 ../game-ui-frontend/SKILL.md；沿链接进入该文件。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "references",
            "referencesBackup"
          ],
          "scriptStep": 1,
          "reuse": [
            4
          ]
        },
        {
          "surface": "按任务选用专项标准 · Frontend Standards",
          "action": "定位信息层级、保护游戏区、桌面和手机设计；随后返回 PPT p07t3 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。",
          "materials": [
            "frontend",
            "frontendBackup"
          ],
          "scriptStep": 2,
          "reuse": [
            5,
            6
          ]
        },
        {
          "surface": "PPT p07t3 · 专项 Skill 怎样补充判断依据 · 第 2 步：对应当前任务",
          "action": "返回 PPT p07t3，停在第 2 步：专项标准对应两个检查问题。",
          "materials": [
            "task3Map1"
          ],
          "scriptStep": 8,
          "ppt": {
            "id": "p07t3",
            "step": 1
          },
          "reuse": [
            7,
            8
          ]
        },
        {
          "surface": "沿引用查阅的实际范围 · 文件读取记录",
          "action": "从 PPT p07t3 第 2 步打开 run-c-read，核对前端 SKILL.md 的读取；随后打开 desktop-first-pair.png。",
          "materials": [
            "readC"
          ],
          "scriptStep": 3,
          "reuse": [
            9
          ]
        },
        {
          "surface": "标准要结合使用条件 · 桌面游戏区截图",
          "action": "打开 desktop-first-pair.png，观察状态信息与牌阵；讲完打开 mobile-bottom.png 的完整视口截图。",
          "materials": [
            "desktopPair"
          ],
          "scriptStep": 4,
          "reuse": [
            10
          ]
        },
        {
          "surface": "专项标准怎样改变判断 · 窄屏底部视口",
          "action": "打开 mobile-bottom.png，保持完整 375×667 视口可见，指认底部牌与画面中没有出现的计数；随后定位 run-c-verify。",
          "materials": [
            "mobileBottom"
          ],
          "scriptStep": 5,
          "reuse": [
            11
          ]
        },
        {
          "surface": "共同流程与专项判断怎样配合 · 视口输出",
          "action": "在 run-c-verify 指认 overlap area=0 与 metaVisible=False；返回 PPT p07t3 第 3 步，不直接跳到全局小结。",
          "materials": [
            "narrowResult"
          ],
          "scriptStep": 6,
          "reuse": [
            12
          ]
        },
        {
          "surface": "PPT p07t3 · 专项 Skill 怎样补充判断依据 · 第 3 步：用实际结果核对",
          "action": "返回 PPT p07t3，停在第 3 步：不同问题对应不同证据。",
          "materials": [
            "task3Map2"
          ],
          "scriptStep": 9,
          "ppt": {
            "id": "p07t3",
            "step": 2
          },
          "reuse": [
            13,
            14
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 8,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 8,
          "part": 2
        },
        {
          "scene": "r323-4",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 9,
          "part": 1
        },
        {
          "scene": "r323-4",
          "step": 9,
          "part": 2
        }
      ],
      "scriptSource": "r323-4",
      "status": "2026-11-11：按录制顺序走查并去除重复，明确原文、实录与 PPT 返回状态；检查见 README。",
      "boundary": "本任务使用 1 页 PPT（p07t3），依次建立知识关系、对应本例、核对结果；原文连续阅读、实录连续核验后返回同一页。"
    },
    {
      "id": "plan323-5",
      "number": "3.2.3.5",
      "title": "复杂 Skill 怎么拆、怎么接",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT p07o · Skill 把可复用的工作知识组织起来 · 第 1 步：入口文件与核心指导",
          "action": "打开 p07o 第 1 步，指认 Skill 边界、SKILL.md、文件头与正文。",
          "materials": [
            "mapEntry"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p07o",
            "step": 0
          },
          "reuse": [
            0,
            1
          ]
        },
        {
          "surface": "PPT p07o · Skill 把可复用的工作知识组织起来 · 第 2 步：三类配套文件及使用方式",
          "action": "推进 p07o 第 2 步，从正文的引用沿线观察三类配套文件。",
          "materials": [
            "mapSupport"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p07o",
            "step": 1
          },
          "reuse": [
            2,
            3,
            4
          ]
        },
        {
          "surface": "PPT p07o · Skill 把可复用的工作知识组织起来 · 第 3 步：另一份 Skill 的边界与引用",
          "action": "推进 p07o 第 3 步，指认 Skill 边界外的另一份 SKILL.md，再回看两类连接。",
          "materials": [
            "mapOther"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p07o",
            "step": 2
          },
          "reuse": [
            5,
            6,
            7
          ]
        },
        {
          "surface": "PPT p07p · 分开保存，也要把使用关系接清楚 · 第 1 步：正文怎样连接配套文件",
          "action": "打开 p07p 第 1 步，先看核心指导与四项取用信息，再读 Reference 一行。",
          "materials": [
            "connectAll"
          ],
          "scriptStep": 3,
          "ppt": {
            "id": "p07p",
            "step": 0
          },
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "实际重开脚本",
          "action": "打开任务 2 的 Inspect 原始脚本写入命令，指认点击、状态读取和预期检查。",
          "materials": [
            "restartScript"
          ],
          "scriptStep": 4,
          "reuse": [
            10,
            11
          ]
        },
        {
          "surface": "PPT p07p · 分开保存，也要把使用关系接清楚 · 第 2 步：查阅、运行与使用的区别",
          "action": "返回 p07p 第 2 步，展开脚本和素材两行，对照输入与结果。",
          "materials": [
            "connectUse"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07p",
            "step": 1
          },
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
          "step": 0,
          "part": 2
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
          "step": 1,
          "part": 3
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
        },
        {
          "scene": "r323-5",
          "step": 2,
          "part": 3
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
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r323-5",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-5",
          "step": 5,
          "part": 2
        }
      ],
      "scriptSource": "r323-5",
      "status": "2026-11-11：正式口播接入唯一 script.json；PPT 与材料按画面映射。作者核对状态见本节 README，未讲师试讲。"
    },
    {
      "id": "plan323-6",
      "number": "3.2.3.6",
      "title": "两份示例的系统小结",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT p07m · 正文组织一项工作的判断与行动 · 第 1 步：正文承担的四种作用",
          "action": "打开 p07m 第 1 步，看任务边界、工作方法、判断依据与交付要求四项关系。",
          "materials": [
            "bodyRoles"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p07m",
            "step": 0
          },
          "reuse": [
            0,
            1,
            2
          ]
        },
        {
          "surface": "PPT p07m · 正文组织一项工作的判断与行动 · 第 2 步：两份示例怎样围绕工作组织",
          "action": "推进 p07m 第 2 步，用下方两份已读示例对应四种作用。",
          "materials": [
            "bodyExamples"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p07m",
            "step": 1
          },
          "reuse": [
            3,
            4
          ]
        },
        {
          "surface": "PPT p07l · 不同写法，表达不同的工作知识 · 第 1 步：报告的空结构",
          "action": "打开 p07l 第 1 步，显示空报告结构。",
          "materials": [
            "template"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p07l",
            "step": 0
          },
          "reuse": [
            5
          ]
        },
        {
          "surface": "PPT p07l · 不同写法，表达不同的工作知识 · 第 2 步：同一结构填入具体内容",
          "action": "推进 p07l 第 2 步，展开填写示意。",
          "materials": [
            "filledTemplate"
          ],
          "scriptStep": 3,
          "ppt": {
            "id": "p07l",
            "step": 1
          },
          "reuse": [
            6,
            7
          ]
        },
        {
          "surface": "PPT p07l · 不同写法，表达不同的工作知识 · 第 3 步：一句指导中的条件与要求",
          "action": "推进 p07l 第 3 步，观察条件与要求，再收束表达方式。",
          "materials": [
            "conditional"
          ],
          "scriptStep": 4,
          "ppt": {
            "id": "p07l",
            "step": 2
          },
          "reuse": [
            8,
            9
          ]
        },
        {
          "surface": "PPT p07q · 同一套知识，按任务需要逐层取用 · 第 1 步：识别身份与适用情境",
          "action": "打开 p07q 第 1 步，回到与 p07o 同构的全局图，突出文件头。",
          "materials": [
            "progressMeta"
          ],
          "scriptStep": 5,
          "ppt": {
            "id": "p07q",
            "step": 0
          },
          "reuse": [
            10
          ]
        },
        {
          "surface": "PPT p07q · 同一套知识，按任务需要逐层取用 · 第 2 步：读取核心指导，结合本次输入",
          "action": "推进 p07q 第 2 步，突出正文，保留文件头与配套资源的位置。",
          "materials": [
            "progressBody"
          ],
          "scriptStep": 6,
          "ppt": {
            "id": "p07q",
            "step": 1
          },
          "reuse": [
            11,
            12
          ]
        },
        {
          "surface": "PPT p07q · 同一套知识，按任务需要逐层取用 · 第 3 步：按需展开资料、程序与材料",
          "action": "推进 p07q 第 3 步，突出从正文展开的路径，显示渐进披露与篇幅建议。",
          "materials": [
            "progressMore"
          ],
          "scriptStep": 7,
          "ppt": {
            "id": "p07q",
            "step": 2
          },
          "reuse": [
            13,
            14,
            15
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r323-6",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r323-6",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 4,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 4,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 5,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 6,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 6,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 7,
          "part": 1
        },
        {
          "scene": "r323-6",
          "step": 7,
          "part": 2
        },
        {
          "scene": "r323-6",
          "step": 7,
          "part": 3
        }
      ],
      "scriptSource": "r323-6",
      "status": "2026-11-11：正式口播接入唯一 script.json；PPT 与材料按画面映射。作者核对状态见本节 README，未讲师试讲。"
    },
    {
      "id": "plan323-review",
      "number": "3.2.3.7",
      "title": "再看第一版风格指导",
      "group": "认识复杂 Skill 的资料、脚本与资源",
      "screens": [
        {
          "surface": "PPT p324c · 再看你在 3.1 写下的指导 · 第 1 步：审阅初稿，接到整包提供",
          "action": "PPT p324c；依次指使用时机、具体要求、资料入口和核对方法，邀请暂停修改初稿并保存前后两版",
          "visible": "使用时机、具体要求、资料入口、实际读取与结果；下方指向新玩法验证。",
          "points": [],
          "materials": [
            "p324c"
          ],
          "scriptSource": "r324-review",
          "scriptStep": 0,
          "ppt": {
            "id": "p324c",
            "step": 0
          },
          "reuse": [
            0,
            1,
            2
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-review",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-review",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-review",
          "step": 0,
          "part": 3
        }
      ]
    },
    {
      "id": "plan324-1",
      "number": "3.2.4.1",
      "title": "Plugin 怎样组织和分发能力",
      "group": "通过 Plugin 组织和分发能力",
      "screens": [
        {
          "surface": "已有项目目录 · 四份独立 Skill",
          "action": "在编辑器中打开 3.2.1 演示项目的 .agents/skills，指认四个目录；本段先保持项目目录，下一段再切来源。录前若目录不存在，按就近准备页创建四份 Skill 的隔离演示副本。",
          "visible": "game-playtest、game-ui-frontend、web-game-foundations、react-three-fiber-game 四个目录。",
          "points": [],
          "materials": [
            "plugin-four-preparation"
          ],
          "scriptStep": 0,
          "scriptSource": "r324-1",
          "reuse": [
            0
          ]
        },
        {
          "surface": "来源目录 · Game Studio 固定版本",
          "action": "打开固定版本 Game Studio 的 skills 目录，指认四份熟悉指导和 game-studio、phaser-2d-game；随后按切换提示查看插件声明。",
          "visible": "固定版本、完整 skills 目录与共同的 Plugin 位置；不把本地 .agents 目录叫作已安装 Plugin。",
          "points": [],
          "materials": [
            "plugin-skills-tree",
            "plugin-manifest"
          ],
          "scriptStep": 1,
          "scriptSource": "r324-1",
          "reuse": [
            1,
            2,
            3
          ]
        },
        {
          "surface": "PPT p324a · Plugin 把相关能力作为一包提供 · 第 1 步：已有四份指导",
          "action": "从目录切到图，展示前面已准备的四份 Skill；试玩、界面突出，两份依赖弱化。",
          "visible": "四份名称与主要/配套关系；标明“前面：按任务准备的指导文件”。",
          "points": [],
          "materials": [
            "p324a-0"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p324a",
            "step": 0
          },
          "scriptSource": "r324-2",
          "reuse": [
            4
          ]
        },
        {
          "surface": "PPT p324a · Plugin 把相关能力作为一包提供 · 第 2 步：完整包的身份与组成",
          "action": "在来源的完整能力集合中增加其他代表 Skill，展开 Game Studio Plugin 的统一身份与组成声明。",
          "visible": "已有四份与其他代表指导同属完整包；外层写身份与组成声明，不画成仅给本地四份目录改名。",
          "points": [],
          "materials": [
            "p324a-1"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p324a",
            "step": 1
          },
          "scriptSource": "r324-2",
          "reuse": [
            5
          ]
        },
        {
          "surface": "PPT p324a · Plugin 把相关能力作为一包提供 · 第 3 步：整包安装，按需选用",
          "action": "展开提供者 → 整包安装 → 使用者 → 按任务选用 Skill 的关系；用鼠标指认包内已有的 game-playtest，不等待额外高亮动画。",
          "visible": "完整包保持可见；提供者、整包安装、使用者、按任务选用之间的箭头出现，鼠标指认 game-playtest。",
          "points": [],
          "materials": [
            "p324a-2",
            "plugin-concept"
          ],
          "scriptStep": 2,
          "ppt": {
            "id": "p324a",
            "step": 2
          },
          "scriptSource": "r324-2",
          "reuse": [
            6
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-1",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-1",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-1",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-1",
          "step": 1,
          "part": 3
        },
        {
          "scene": "r324-2",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-2",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-2",
          "step": 2,
          "part": 1
        }
      ],
      "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
      "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
      "legacyAliases": [
        "plan324-2"
      ]
    },
    {
      "id": "plan324-3",
      "number": "3.2.4.2",
      "title": "Skill、MCP 与 Hook 各有什么作用",
      "group": "通过 Plugin 组织和分发能力",
      "screens": [
        {
          "surface": "PPT p324b · Plugin 还可以提供工具接入与事件触发 · 第 1 步：Skill 提供工作方法",
          "action": "换页；先指出“教学示意”，再指试玩 Skill。",
          "visible": "新标题“团队游戏开发 Plugin · 教学示意”；试玩 Skill 写检查方法与报告要求。",
          "points": [],
          "materials": [
            "p324b-0"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p324b",
            "step": 0
          },
          "scriptSource": "r324-3",
          "reuse": [
            0
          ]
        },
        {
          "surface": "PPT p324b · Plugin 还可以提供工具接入与事件触发 · 第 2 步：MCP 接入工具与服务",
          "action": "增加 MCP 分支及边界外缺陷库，沿查询关系指认。",
          "visible": "Plugin 内显示服务连接，外部显示缺陷库；查询工具标为示意。",
          "points": [],
          "materials": [
            "p324b-1",
            "plugin-concept"
          ],
          "scriptStep": 1,
          "ppt": {
            "id": "p324b",
            "step": 1
          },
          "scriptSource": "r324-3",
          "reuse": [
            1
          ]
        },
        {
          "surface": "PPT p324b · Plugin 还可以提供工具接入与事件触发 · 第 3 步：Hook 按事件触发命令",
          "action": "保留原图，增加 Hook 分支；先指会话开始，再指环境检查脚本。",
          "visible": "Skill、MCP、Hook 三个可选组成并列；Hook 单独用“会话开始 → 检查脚本”；页下注支持环境与信任条件。",
          "points": [],
          "materials": [
            "p324b-2",
            "plugin-hooks"
          ],
          "scriptStep": 0,
          "ppt": {
            "id": "p324b",
            "step": 2
          },
          "scriptSource": "r324-4",
          "reuse": [
            2,
            3
          ]
        },
        {
          "surface": "官方原文 · Skill 与 MCP 的分工",
          "action": "打开 Skills 文档的 How skills complement an MCP server，停在首段与该节末尾的职责说明。",
          "visible": "MCP 提供信息与操作；Skill 说明何时调用、怎样组织工作及输出。",
          "points": [],
          "materials": [
            "plugin-skill-mcp"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 0,
          "reuse": [
            4,
            5,
            6
          ]
        },
        {
          "surface": "官方原文 · Hook 的事件与命令",
          "action": "打开 Hook 章节，先停在开头的宿主与安装方式说明；讲完首段后按切换提示定位代码示例。",
          "visible": "事件发生 → 宿主执行配置命令；脚本必须能在执行环境中运行。",
          "points": [],
          "materials": [
            "plugin-hooks",
            "plugin-shapes"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 1,
          "reuse": [
            7,
            8,
            9,
            10
          ]
        },
        {
          "surface": "来源目录 · Game Studio 的实际声明",
          "action": "打开固定版本插件声明，指 name、version，再滚到 skills 字段；说明未声明 MCP 或 Hook 后按切换提示回到包目录。",
          "visible": "Game Studio 指向 skills；本版本未声明 MCP 或 Hook。",
          "points": [],
          "materials": [
            "plugin-manifest",
            "plugin-tree"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 2,
          "reuse": [
            11,
            12,
            13
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-3",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-3",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-4",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-4",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 0,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 1,
          "part": 4
        },
        {
          "scene": "r324-7",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 2,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 2,
          "part": 3
        }
      ],
      "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
      "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
      "legacyAliases": [
        "plan324-4"
      ]
    },
    {
      "id": "plan324-5",
      "number": "3.2.4.3",
      "title": "安装 Game Studio，并按任务选用指导",
      "group": "通过 Plugin 组织和分发能力",
      "screens": [
        {
          "surface": "真实预跑回放 · 完整 Plugin 安装",
          "action": "打开真实安装回放的“来源与实际组成”，指安装对象与九份 Skill 清单；讲完首段后按切换提示进入“安装”。",
          "visible": "已配置官方来源；本次通过 CLI 安装完整包，记录日期与版本可查。",
          "points": [],
          "materials": [
            "plugin-run-source",
            "plugin-run-install"
          ],
          "scriptSource": "r324-5",
          "scriptStep": 1,
          "reuse": [
            0,
            1,
            2
          ]
        },
        {
          "surface": "真实目录与正文 · 按任务选择指导",
          "action": "打开固定版本 game-studio/SKILL.md，停在 Use This Skill When；随后按切换提示打开 sprite-pipeline 和 game-playtest 的职责说明。",
          "visible": "Game Studio Plugin 的包边界与 game-studio Skill 的文件层级；三个任务各自对应一份指导。",
          "points": [],
          "materials": [
            "plugin-tree",
            "plugin-skill-router",
            "plugin-skill-sprite",
            "plugin-skill-playtest"
          ],
          "scriptSource": "r324-7",
          "scriptStep": 3,
          "reuse": [
            3,
            4,
            5,
            6,
            7,
            8
          ]
        },
        {
          "surface": "真实预跑回放 · 明确选用与具体规则",
          "action": "打开同次请求，指 game-playtest、六对通关、重开归零，以及只生成清单的范围。",
          "visible": "选择的指导与本次具体规则同时可见。",
          "points": [],
          "materials": [
            "plugin-run-request"
          ],
          "scriptSource": "r324-6",
          "scriptStep": 0,
          "reuse": [
            9,
            10
          ]
        },
        {
          "surface": "真实预跑回放 · 返回清单与衔接",
          "action": "定位清单中的通关边界和重开条目，展示到可以看出已针对本次规则作答即止。",
          "visible": "5/6 不通关、6/6 才通关；重开计数归零后继续翻牌。",
          "points": [],
          "materials": [
            "plugin-run-result"
          ],
          "scriptSource": "r324-6",
          "scriptStep": 2,
          "reuse": [
            11,
            12
          ]
        }
      ],
      "reuse": [
        {
          "scene": "r324-5",
          "step": 1,
          "part": 1
        },
        {
          "scene": "r324-5",
          "step": 1,
          "part": 2
        },
        {
          "scene": "r324-5",
          "step": 1,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 1
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 2
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 3
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 4
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 5
        },
        {
          "scene": "r324-7",
          "step": 3,
          "part": 6
        },
        {
          "scene": "r324-6",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-6",
          "step": 0,
          "part": 2
        },
        {
          "scene": "r324-6",
          "step": 2,
          "part": 1
        },
        {
          "scene": "r324-6",
          "step": 2,
          "part": 2
        }
      ],
      "status": "阶段 4：按当前逐字稿与实际画面走查，定位与切换修正已复验；安装采用已有真实回放。未进行讲师出声试读、试讲或本轮重新安装。",
      "boundary": "3.2.4 共复用 2 页 PPT：P324-1（p324a）对应第一环节，P324-2（p324b）对应第二环节，各 3 个状态；第三环节使用目录与真实安装调用回放。",
      "legacyAliases": [
        "plan324-6"
      ],
      "previousReuse": [
        {
          "scene": "r324-5",
          "step": 0,
          "part": 1
        },
        {
          "scene": "r324-6",
          "step": 1,
          "part": 1
        }
      ]
    }
  ],
  "contentDesign": {
    "units": [
      {
        "title": "3.2.2 读懂简单 Skill",
        "section": "3.2.2",
        "discussion": "../../../../docs/outline/ch03-discussion.md#:~:text=3.2.2%20%E8%AF%BB%E6%87%82%E7%AE%80%E5%8D%95%20Skill",
        "items": [
          {
            "frame": "b31",
            "title": "3.2.2.1 PPT：SKILL.md 结构示意图",
            "screens": [
              {
                "surface": "PPT 第 1 页 · 从“是否选用”读到“具体怎样工作”",
                "action": "打开此页，展示当前画面",
                "materials": [
                  "structurePpt"
                ],
                "reuse": [
                  0,
                  1
                ]
              },
              {
                "surface": "PPT 第 2 页 · setup-demo-app 用来搭建什么",
                "action": "打开此页，展示当前画面",
                "materials": [
                  "purposePpt",
                  "official"
                ],
                "reuse": [
                  2
                ]
              }
            ]
          },
          {
            "frame": "b32",
            "title": "3.2.2.2 OpenAI 示例原文：认识正文的基本内容",
            "screens": [
              {
                "surface": "OpenAI 原文 · 适用场景",
                "action": "打开 https://developers.openai.com/blog/eval-skills#a-sample-skill，定位 setup-demo-app 的完整代码块；停留 When to use this",
                "materials": [
                  "official"
                ],
                "reuse": [
                  0
                ]
              },
              {
                "surface": "OpenAI 原文 · 技术、目录与写法要求",
                "action": "保持 What to build 原文；简要指认技术组合、项目目录，再以 Functional components only 解释实现要求，不逐条展开技术细节",
                "materials": [
                  "official"
                ],
                "reuse": [
                  1
                ]
              },
              {
                "surface": "OpenAI 原文 · 执行步骤",
                "action": "浏览 Steps 四步；指认一处命令和一处配置片段，说明步骤提供执行方法，不讲安装教程",
                "materials": [
                  "official"
                ],
                "reuse": [
                  2
                ]
              },
              {
                "surface": "OpenAI 原文 · 完成标准",
                "action": "定位 Definition of done，并保持前面的步骤可回看",
                "materials": [
                  "official"
                ],
                "reuse": [
                  3
                ]
              },
              {
                "surface": "PPT 第 3 页 · 把执行、自检与修正接起来",
                "action": "打开此页，展示当前画面",
                "materials": [
                  "workflowSummaryPpt"
                ],
                "reuse": [
                  4,
                  5,
                  6
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "3.2.3 认识复杂 Skill 的资料、脚本与资源",
        "section": "3.2.3",
        "discussion": "../../../../docs/outline/ch03-discussion.md#:~:text=3.2.3%20%E8%AE%A4%E8%AF%86%E5%A4%8D%E6%9D%82%20Skill%20%E7%9A%84%E8%B5%84%E6%96%99%E3%80%81%E8%84%9A%E6%9C%AC%E4%B8%8E%E8%B5%84%E6%BA%90",
        "items": [
          {
            "frame": "3.2.3.1",
            "title": "3.2.3.1 交代案例：同一工作为什么需要不同层次的指导",
            "screens": [
              {
                "surface": "从简单正文到配套指导 · 早期 05 预览",
                "action": "打开归档游戏，指认十二张牌；说明六对通关和三轮独立副本。",
                "materials": [
                  "old5"
                ],
                "scriptStep": 0
              }
            ],
            "recordingFrames": [
              "plan323-1",
              "b33"
            ]
          },
          {
            "frame": "3.2.3.2",
            "title": "3.2.3.2 正文怎样把任务要求变成工作方法",
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
            "recordingFrames": [
              "plan323-2",
              "b34"
            ]
          },
          {
            "frame": "3.2.3.3",
            "title": "3.2.3.3 Reference 怎样把通用指导补充为具体检查",
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
            "recordingFrames": [
              "plan323-3"
            ]
          },
          {
            "frame": "3.2.3.4",
            "title": "3.2.3.4 专项 Skill 怎样补充另一类工作的判断",
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
            "recordingFrames": [
              "plan323-4"
            ]
          },
          {
            "frame": "3.2.3.5",
            "title": "3.2.3.5 复杂 Skill 怎么拆、怎么接",
            "screens": [
              {
                "surface": "PPT p07o",
                "action": "打开 p07o 第 1 步，指认 Skill 边界、SKILL.md、文件头与正文。",
                "materials": [
                  "mapEntry"
                ],
                "scriptStep": 0,
                "ppt": {
                  "id": "p07o",
                  "step": 0
                }
              },
              {
                "surface": "PPT p07o",
                "action": "推进 p07o 第 2 步，从正文的引用沿线观察三类配套文件。",
                "materials": [
                  "mapSupport"
                ],
                "scriptStep": 1,
                "ppt": {
                  "id": "p07o",
                  "step": 1
                }
              },
              {
                "surface": "PPT p07o",
                "action": "推进 p07o 第 3 步，指认 Skill 边界外的另一份 SKILL.md，再回看两类连接。",
                "materials": [
                  "mapOther"
                ],
                "scriptStep": 2,
                "ppt": {
                  "id": "p07o",
                  "step": 2
                }
              },
              {
                "surface": "PPT p07p",
                "action": "打开 p07p 第 1 步，先看核心指导与四项取用信息，再读 Reference 一行。",
                "materials": [
                  "connectAll"
                ],
                "scriptStep": 3,
                "ppt": {
                  "id": "p07p",
                  "step": 0
                }
              },
              {
                "surface": "实际重开脚本",
                "action": "打开任务 2 的实际脚本节选，指认点击、状态读取和预期检查。",
                "materials": [
                  "restartScript"
                ],
                "scriptStep": 4
              },
              {
                "surface": "PPT p07p",
                "action": "返回 p07p 第 2 步，展开脚本和素材两行，对照输入与结果。",
                "materials": [
                  "connectUse"
                ],
                "scriptStep": 5,
                "ppt": {
                  "id": "p07p",
                  "step": 1
                }
              }
            ],
            "recordingFrames": [
              "plan323-5"
            ]
          },
          {
            "frame": "3.2.3.6",
            "title": "3.2.3.6 两份示例的系统小结",
            "screens": [
              {
                "surface": "PPT p07m",
                "action": "打开 p07m 第 1 步，看任务边界、工作方法、判断依据与交付要求四项关系。",
                "materials": [
                  "bodyRoles"
                ],
                "scriptStep": 0,
                "ppt": {
                  "id": "p07m",
                  "step": 0
                }
              },
              {
                "surface": "PPT p07m",
                "action": "推进 p07m 第 2 步，用下方两份已读示例对应四种作用。",
                "materials": [
                  "bodyExamples"
                ],
                "scriptStep": 1,
                "ppt": {
                  "id": "p07m",
                  "step": 1
                }
              },
              {
                "surface": "PPT p07l",
                "action": "打开 p07l 第 1 步，显示空报告结构。",
                "materials": [
                  "template"
                ],
                "scriptStep": 2,
                "ppt": {
                  "id": "p07l",
                  "step": 0
                }
              },
              {
                "surface": "PPT p07l",
                "action": "推进 p07l 第 2 步，展开填写示意。",
                "materials": [
                  "filledTemplate"
                ],
                "scriptStep": 3,
                "ppt": {
                  "id": "p07l",
                  "step": 1
                }
              },
              {
                "surface": "PPT p07l",
                "action": "推进 p07l 第 3 步，观察条件与要求，再收束表达方式。",
                "materials": [
                  "conditional"
                ],
                "scriptStep": 4,
                "ppt": {
                  "id": "p07l",
                  "step": 2
                }
              },
              {
                "surface": "PPT p07q",
                "action": "打开 p07q 第 1 步，回到与 p07o 同构的全局图，突出文件头。",
                "materials": [
                  "progressMeta"
                ],
                "scriptStep": 5,
                "ppt": {
                  "id": "p07q",
                  "step": 0
                }
              },
              {
                "surface": "PPT p07q",
                "action": "推进 p07q 第 2 步，突出正文，保留文件头与配套资源的位置。",
                "materials": [
                  "progressBody"
                ],
                "scriptStep": 6,
                "ppt": {
                  "id": "p07q",
                  "step": 1
                }
              },
              {
                "surface": "PPT p07q",
                "action": "推进 p07q 第 3 步，突出从正文展开的路径，显示渐进披露与篇幅建议。",
                "materials": [
                  "progressMore"
                ],
                "scriptStep": 7,
                "ppt": {
                  "id": "p07q",
                  "step": 2
                }
              }
            ],
            "recordingFrames": [
              "plan323-6",
              "b35",
              "b36"
            ]
          },
          {
            "frame": "3.2.3.7",
            "title": "3.2.3.7 再看第一版风格指导",
            "screens": [
              {
                "surface": "PPT p324c · 回看初稿",
                "action": "讲完渐进披露后切到回看页，依次指四项问题；邀请修改并保存两版，再转向 Plugin 的整包提供。",
                "visible": "使用时机、具体要求、资料入口、实际读取与结果；下方指向新玩法验证。",
                "points": [],
                "materials": [
                  "p324c"
                ],
                "scriptSource": "r324-review",
                "scriptStep": 0,
                "ppt": {
                  "id": "p324c",
                  "step": 0
                }
              }
            ],
            "recordingFrames": [
              "plan323-review"
            ]
          }
        ]
      },
      {
        "title": "3.2.4 通过 Plugin 组织和分发能力",
        "section": "3.2.4",
        "discussion": "../../../../docs/outline/ch03-discussion.md#:~:text=3.2.4%20%E9%80%9A%E8%BF%87%20Plugin%20%E7%BB%84%E7%BB%87%E5%92%8C%E5%88%86%E5%8F%91%E8%83%BD%E5%8A%9B",
        "items": [
          {
            "frame": "3.2.4.1",
            "title": "3.2.4.1 Plugin 怎样组织和分发能力",
            "screens": [
              {
                "surface": "已有项目目录 · 四份独立 Skill",
                "action": "在编辑器中打开 3.2.1 演示项目的 .agents/skills，指认四个目录；本段先保持项目目录，下一段再切来源。录前若目录不存在，按就近准备页创建四份 Skill 的隔离演示副本。",
                "visible": "game-playtest、game-ui-frontend、web-game-foundations、react-three-fiber-game 四个目录。",
                "points": [],
                "materials": [
                  "plugin-four-preparation"
                ],
                "scriptStep": 0,
                "scriptSource": "r324-1"
              },
              {
                "surface": "来源目录 · Game Studio 固定版本",
                "action": "打开固定版本 Game Studio 的 skills 目录，指认四份熟悉指导和 game-studio、phaser-2d-game；随后按切换提示查看插件声明。",
                "visible": "固定版本、完整 skills 目录与共同的 Plugin 位置；不把本地 .agents 目录叫作已安装 Plugin。",
                "points": [],
                "materials": [
                  "plugin-skills-tree",
                  "plugin-manifest"
                ],
                "scriptStep": 1,
                "scriptSource": "r324-1"
              },
              {
                "surface": "PPT P324-1 · 状态 1：熟悉的指导",
                "action": "从目录切到图，展示前面已准备的四份 Skill；试玩、界面突出，两份依赖弱化。",
                "visible": "四份名称与主要/配套关系；标明“前面：按任务准备的指导文件”。",
                "points": [],
                "materials": [
                  "p324a-0"
                ],
                "scriptStep": 0,
                "ppt": {
                  "id": "p324a",
                  "step": 0
                },
                "scriptSource": "r324-2"
              },
              {
                "surface": "PPT P324-1 · 状态 2：外层包",
                "action": "在来源的完整能力集合中增加其他代表 Skill，展开 Game Studio Plugin 的统一身份与组成声明。",
                "visible": "已有四份与其他代表指导同属完整包；外层写身份与组成声明，不画成仅给本地四份目录改名。",
                "points": [],
                "materials": [
                  "p324a-1"
                ],
                "scriptStep": 1,
                "ppt": {
                  "id": "p324a",
                  "step": 1
                },
                "scriptSource": "r324-2"
              },
              {
                "surface": "PPT P324-1 · 状态 3：提供与使用",
                "action": "展开提供者 → 整包安装 → 使用者 → 按任务选用 Skill 的关系；用鼠标指认包内已有的 game-playtest，不等待额外高亮动画。",
                "visible": "完整包保持可见；提供者、整包安装、使用者、按任务选用之间的箭头出现，鼠标指认 game-playtest。",
                "points": [],
                "materials": [
                  "p324a-2",
                  "plugin-concept"
                ],
                "scriptStep": 2,
                "ppt": {
                  "id": "p324a",
                  "step": 2
                },
                "scriptSource": "r324-2"
              }
            ],
            "recordingFrames": [
              "plan324-1"
            ],
            "legacyAliases": [
              "plan324-2"
            ]
          },
          {
            "frame": "3.2.4.2",
            "title": "3.2.4.2 Skill、MCP 与 Hook 各有什么作用",
            "screens": [
              {
                "surface": "PPT P324-2 · 状态 1：团队试玩方法",
                "action": "换页；先指出“教学示意”，再指试玩 Skill。",
                "visible": "新标题“团队游戏开发 Plugin · 教学示意”；试玩 Skill 写检查方法与报告要求。",
                "points": [],
                "materials": [
                  "p324b-0"
                ],
                "scriptStep": 0,
                "ppt": {
                  "id": "p324b",
                  "step": 0
                },
                "scriptSource": "r324-3"
              },
              {
                "surface": "PPT P324-2 · 状态 2：查询工具与外部服务",
                "action": "增加 MCP 分支及边界外缺陷库，沿查询关系指认。",
                "visible": "Plugin 内显示服务连接，外部显示缺陷库；查询工具标为示意。",
                "points": [],
                "materials": [
                  "p324b-1",
                  "plugin-concept"
                ],
                "scriptStep": 1,
                "ppt": {
                  "id": "p324b",
                  "step": 1
                },
                "scriptSource": "r324-3"
              },
              {
                "surface": "PPT P324-2 · 状态 3：事件触发",
                "action": "保留原图，增加 Hook 分支；先指会话开始，再指环境检查脚本。",
                "visible": "Skill、MCP、Hook 三个可选组成并列；Hook 单独用“会话开始 → 检查脚本”；页下注支持环境与信任条件。",
                "points": [],
                "materials": [
                  "p324b-2",
                  "plugin-hooks"
                ],
                "scriptStep": 0,
                "ppt": {
                  "id": "p324b",
                  "step": 2
                },
                "scriptSource": "r324-4"
              },
              {
                "surface": "官方原文 · Skill 与 MCP 的分工",
                "action": "打开 Skills 文档的 How skills complement an MCP server，停在首段与该节末尾的职责说明。",
                "visible": "MCP 提供信息与操作；Skill 说明何时调用、怎样组织工作及输出。",
                "points": [],
                "materials": [
                  "plugin-skill-mcp"
                ],
                "scriptSource": "r324-7",
                "scriptStep": 0
              },
              {
                "surface": "官方原文 · Hook 的事件与命令",
                "action": "打开 Hook 章节，先停在开头的宿主与安装方式说明；讲完首段后按切换提示定位代码示例。",
                "visible": "事件发生 → 宿主执行配置命令；脚本必须能在执行环境中运行。",
                "points": [],
                "materials": [
                  "plugin-hooks",
                  "plugin-shapes"
                ],
                "scriptSource": "r324-7",
                "scriptStep": 1
              },
              {
                "surface": "来源目录 · Game Studio 的实际声明",
                "action": "打开固定版本插件声明，指 name、version，再滚到 skills 字段；说明未声明 MCP 或 Hook 后按切换提示回到包目录。",
                "visible": "Game Studio 指向 skills；本版本未声明 MCP 或 Hook。",
                "points": [],
                "materials": [
                  "plugin-manifest",
                  "plugin-tree"
                ],
                "scriptSource": "r324-7",
                "scriptStep": 2
              }
            ],
            "recordingFrames": [
              "plan324-3"
            ],
            "legacyAliases": [
              "plan324-4"
            ]
          },
          {
            "frame": "3.2.4.3",
            "title": "3.2.4.3 安装 Game Studio，并按任务选用指导",
            "screens": [
              {
                "surface": "真实预跑回放 · 完整 Plugin 安装",
                "action": "打开真实安装回放的“来源与实际组成”，指安装对象与九份 Skill 清单；讲完首段后按切换提示进入“安装”。",
                "visible": "已配置官方来源；本次通过 CLI 安装完整包，记录日期与版本可查。",
                "points": [],
                "materials": [
                  "plugin-run-source",
                  "plugin-run-install"
                ],
                "scriptSource": "r324-5",
                "scriptStep": 1
              },
              {
                "surface": "真实目录与正文 · 按任务选择指导",
                "action": "打开固定版本 game-studio/SKILL.md，停在 Use This Skill When；随后按切换提示打开 sprite-pipeline 和 game-playtest 的职责说明。",
                "visible": "Game Studio Plugin 的包边界与 game-studio Skill 的文件层级；三个任务各自对应一份指导。",
                "points": [],
                "materials": [
                  "plugin-tree",
                  "plugin-skill-router",
                  "plugin-skill-sprite",
                  "plugin-skill-playtest"
                ],
                "scriptSource": "r324-7",
                "scriptStep": 3
              },
              {
                "surface": "真实预跑回放 · 明确选用与具体规则",
                "action": "打开同次请求，指 game-playtest、六对通关、重开归零，以及只生成清单的范围。",
                "visible": "选择的指导与本次具体规则同时可见。",
                "points": [],
                "materials": [
                  "plugin-run-request"
                ],
                "scriptSource": "r324-6",
                "scriptStep": 0
              },
              {
                "surface": "真实预跑回放 · 返回清单与衔接",
                "action": "定位清单中的通关边界和重开条目，展示到可以看出已针对本次规则作答即止。",
                "visible": "5/6 不通关、6/6 才通关；重开计数归零后继续翻牌。",
                "points": [],
                "materials": [
                  "plugin-run-result"
                ],
                "scriptSource": "r324-6",
                "scriptStep": 2
              }
            ],
            "recordingFrames": [
              "plan324-5"
            ],
            "legacyAliases": [
              "plan324-6"
            ]
          }
        ],
        "pptPlan": {
          "total": 2,
          "status": "复用两页 PPT、各三个状态；原文带读、任务选用及转场逐字稿已补齐，安装调用采用真实回放。",
          "pages": [
            {
              "id": "P324-1",
              "frames": [
                "3.2.4.1"
              ],
              "states": 3,
              "content": "前面按任务准备四份指导 → 来源处完整 Plugin 的统一身份与组成声明 → 整包安装与按需选用；数量不是 Plugin 的定义。",
              "actualId": "p324a",
              "scene": "p324a",
              "page": 1,
              "progression": "目录 → 熟悉的指导 → 完整包 → 提供与选用"
            },
            {
              "id": "P324-2",
              "frames": [
                "3.2.4.2"
              ],
              "states": 3,
              "content": "教学假设：Skill 的方法、MCP 的工具、Hook 的事件触发；三个可选组成并列。",
              "actualId": "p324b",
              "scene": "p324b",
              "page": 2,
              "progression": "方法 → 工具接入 → 事件触发 → 官方原文 → 真实组成"
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

 window.lesson.scenes.push(...[{"id": "r322-1", "label": "3.2.2.1 PPT：SKILL.md 结构示意图", "script": ["【操作提示｜展示 SKILL.md 结构示意：文件头 name、description，下面是 Markdown 正文；正文内容块不标为必填栏目】\n\n前面，我们通过名称和描述，判断一份 Skill 适不适合当前任务，也看过怎样选用它。选用之后，AI 还需要知道具体怎么做。这些详细的指导，就写在 SKILL.md 下面的正文里。\n\n正文也是 Markdown，可以用标题、列表和代码块组织内容。这里的内容块怎么分，要看这份 Skill 指导什么工作。我们先看 OpenAI 提供的一份简短示例，看看它怎样把一项工作交代清楚。", "【操作提示｜切到用途介绍 PPT：标题 setup-demo-app；呈现“界面实验／问题复现 → 搭建最小 React 演示应用”，讲完再打开官方原文】\n\n这份 Skill 叫 setup-demo-app，用来搭建一个用 React 编写的简单网页项目，里面有标题区和两张卡片，方便我们在这个基础上做界面实验或复现问题。"]}, {"id": "r322-2", "label": "3.2.2.2 OpenAI 示例原文：认识正文的基本内容", "script": ["【操作提示｜打开 https://developers.openai.com/blog/eval-skills#a-sample-skill，定位 setup-demo-app 的完整代码块；停留 When to use this】\n\n前面的名称和描述我们已经认识了，从这里的 When to use this 开始读，也就是“什么时候用”。它说的是：需要新建一个演示应用，做界面实验或复现问题时，使用这份指导。比如想单独试一下卡片的布局，就可以先搭一个这样的小项目。这里交代了后面这些要求适用于什么工作，我们带着这个用途继续往下看。", "【操作提示｜保持 What to build 原文；简要指认技术组合、项目目录，再以 Functional components only 解释实现要求，不逐条展开技术细节】\n\nWhat to build 说的是“要做出什么”。它先选定技术组合，再列出项目目录，说明入口、页面和组件分别放在哪里。这样，AI 拿到的就不只是“做个简单网页”这个目标，还有具体的交付规格。再看下面的写法要求：即使用 React，组件仍然有不同的写法，所以这里进一步要求只用函数组件。它还规定样式采用 Tailwind，不额外引入 UI 库。这些要求把实现时需要遵守的规范也交代清楚了。", "【操作提示｜浏览 Steps 四步；指认一处命令和一处配置片段，说明步骤提供执行方法，不讲安装教程】\n\n要求有了，Steps 就把它们展开成执行步骤。先创建项目，再安装依赖，接着配置样式，最后实现界面。这里既给了创建项目的命令，也写明样式配置要改哪个文件、放入什么内容。AI 因而有具体做法可以遵循。最后一步又接回前面的交付要求：做出标题区和可复用的卡片，再在页面里放上两张卡片。这样，前面规定要交付的东西，就落到了具体的工作里。", "【操作提示｜定位 Definition of done，并保持前面的步骤可回看】\n\nDefinition of done 就是“完成标准”。写完以后，要检查开发服务能否启动，以及列出的项目文件和组件文件是否存在。前面的步骤交代怎么做，这里则给出了做完以后可以核对的结果。如果组件文件缺了，就需要补齐；如果服务启动报错，就需要继续排查。同时，前面写过的函数组件等要求也仍然有效，检查时要一起对照。正文把这些依据留下来，AI 才能据此检查自己的产出。", "【操作提示｜从官方原文返回 PPT p07j1：任务指导小结；按适用场景、目标要求、执行方法、完成检查归纳，讲完切到早期 05 翻牌游戏，进入 3.2.3】\n\nSkill 把一项工作的要求和方法组织起来：什么时候用、要完成什么、怎样做，以及怎样检查结果，都可以在正文中交代清楚。刚才的目录和写法要求规定了要交付什么，步骤提供做法，完成标准则把检查接到了执行之后。\n\n有了这些依据，AI 做完以后就可以对照产出，发现不符合要求的地方，再继续修正。我们自己查看结果时，也可以沿着同样的要求核对它做到了哪些。\n\n正文具体写哪些内容，要按任务取舍。搭建这个简单网页，可以这样组织；换成游戏试玩，还会涉及工具怎么选、哪些地方要检查、发现问题以后怎样报告。我们接着看游戏试玩的例子。"]}, {"id": "r322-3", "label": "3.2.3.1 交代案例", "script": ["【操作提示｜打开 https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md；从文件头向下浏览到 References，再回 Overview】\n\n再看 game-playtest。除了推荐流程，它还写了工具指导、检查项、报告要求和资料入口。我们结合前面翻牌游戏的经历，看看这些内容各补充了什么。"]}, {"id": "r322-4", "label": "3.2.3.2 正文怎样把任务要求变成工作方法", "script": ["【操作提示｜停在 Overview；备查第一节 evidence.html 的 face-check 朝向检查片段，不重新运行游戏】\n\nOverview 要求从玩家体验出发检查游戏。第一节里，内部状态说牌关着，画面却露出了图案。这段说明提醒 AI 把玩家实际看到的画面也纳入检查。", "【操作提示｜定位 Preferred Workflow，沿五步指认试玩路线，说明它如何帮助 AI 组织检查；不展开翻牌规则或具体验收标准】\n\nPreferred Workflow 给出从启动、操作、截图检查到报告问题的试玩路线。AI 可以沿着这条路线安排检查，再把发现的问题按严重程度报告出来。", "【操作提示｜定位 Tooling Guidance，只读 canvas／WebGL 的截图条件，解释条件与检查手段的关系；其余工具条目保留原文，不逐项展开】\n\nTooling Guidance 把检查手段和适用条件联系起来。例如，大量使用 canvas 或 WebGL 时要求看截图，因为只查 DOM 容易漏掉画布里的视觉问题。这样的指导帮助 AI 根据项目情况选择检查方式。", "【操作提示｜依次看 Common Checks 的 2D、3D 分组，再到 Responsive and Browser Checks；只指认输入反馈、视口、键盘与指针等片段】\n\nCommon Checks 补充检查时容易遗漏的事项，比如操作后有没有反馈、界面是否遮挡游戏区，后面还列了不同视口等检查。流程告诉 AI 怎样推进，检查项则提醒它重点看什么。", "【操作提示｜定位 Reporting Standard；以另一份翻牌记录中的步数刷新问题作课程示意，不显示为本次新调用结果】\n\nReporting Standard 要求报告交代现象、复现方式、影响和可能涉及的部分。比如“翻开两张不配对的牌后，页面步数没有增加”，就比“计数有 bug”更容易复现。规定输出要求，能让 AI 的检查结果便于后续排查和修复。", "【操作提示｜滚到 References，指认相对路径，不逐份展开】\n\nReferences 把详细资料接到正文上。例如，正文给出试玩路线，完整检查清单另存，需要逐项走查时再打开。这样既保留主要指导，也能提供更细的依据。"]}, {"id": "r322-5", "label": "正文常见内容、模板与示例", "script": ["【操作提示｜回 PPT p07k 归纳正文的作用，再切 p07l：先看空报告模板，再展开填写示意，最后展开条件句；短例为课程示意，口播与各展开状态对应】\n\n正文既可以安排工作步骤，也可以提供选择依据、检查要点和输出要求，帮助 AI 处理任务中的具体问题。内容按工作需要选择，可以交叉出现，不必凑齐固定栏目。\n\n模板和示例还能把输出要求交代得更具体。比如报告模板列出“现象、复现步骤、影响、排查方向”，约定要填写的结构。\n\n示例则把内容填进去：“复现：新开一局，翻开两张不配对的牌；现象：页面步数没有增加。”它示范复现步骤要具体到什么程度。\n\n同一句指导也可以承担不同作用。例如“canvas 游戏必须看截图”，既交代了适用条件，也给出了检查要求。"]}, {"id": "r322-6", "label": "正文组织方式与篇幅", "script": ["【操作提示｜PPT 并列两份文件的标题结构，只展示组织差异；随后呈现“具体有用、避免重复、详细资料按需引用”和“500 行：篇幅建议”】\n\n建项目的指导围绕交付物和步骤展开；试玩指导还要交代检查手段、关注点和报告要求。任务不同，正文的标题和顺序也可以不同。\n\n篇幅取舍也看内容是否有用：保留具体做法和判断依据，精简重复和泛泛建议，较长资料可以另外引用。正文一般建议控制在 500 行以内，这是篇幅建议，不是失效界限。\n\n接下来看看正文引用的资料，以及脚本和资源，怎样配合这份指导使用。"]}, {"id": "r323-1", "label": "交代案例：同一工作为什么需要不同层次的指导", "script": ["【操作提示｜打开归档游戏，指认十二张牌；说明六对通关和三轮独立副本。】\n\n刚才的 setup-demo-app，用一份正文交代了建项目的要求和做法。游戏试玩还会遇到不同规则、工具条件和界面问题。一份 Skill 怎样提供共同方法，又让当前任务找到需要的具体指导？\n我们用同一版翻牌游戏看这几层分工。\n\n这里有十二张牌，也就是六对，配齐六对才应该通关。三轮记录各自从这版游戏的独立副本开始。先看正文怎样把本次规则和试玩方法接起来，再看清单怎样补充检查情形，最后看界面判断为什么还会用到另一份 Skill。"]}, {"id": "r323-2", "label": "正文怎样把任务要求变成工作方法", "script": ["【操作提示｜在任务 1 请求中指认六对通关、检查前三对、保留源码；随后切 PPT p07t1 第 1 步。】\n\n这次请求要求实际配好前三对，检查进度和通关状态，留下复现步骤、预期与实际结果，并保留源码。六对才通关是这局游戏的规则。任务和规则给定以后，game-playtest 的正文还提供什么？我们把这两类内容放在一起看。", "【操作提示｜在已打开的 game-playtest 原文定位 Preferred Workflow；讲完在同一文件向下定位 Tooling Guidance。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n推荐流程安排了先确认能启动，再尝试主要操作，保存代表性截图，检查界面层，最后报告问题。这个顺序把“检查游戏”展开成可以推进的工作，也提醒执行者及时留下后面报告要用的证据。\n\n这里用的是“主要操作”“代表性截图”这样的通用表达，所以不同游戏都能采用这条路线。具体检查什么动作、保留哪个状态，还要结合本次任务。", "【操作提示｜定位已有自动化工具、canvas/WebGL 截图要求、自动化不稳定时的备选做法。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n只有动作顺序还不够，执行条件也会改变做法。正文优先采用项目已有的 Playwright 或同类工具；对于大量使用 canvas 或 WebGL 的游戏，还要求查看截图，因为 DOM 信息可能没有反映实际游戏画面。这里说明了什么情况下需要补一种观察手段，以及为什么要补。\n\n如果自动化难以稳定复现，正文还给出有结构的手动检查和留证做法。读这类指导，要把默认做法、触发条件和对应动作连起来。本次请求给了可用的 Playwright 环境，记录采用了浏览器自动化；这不能推成所有游戏都必须走同一条工具路线。", "【操作提示｜在同一原文定位 Reporting Standard；讲完切回已打开的 PPT p07t1，从第 1 步推进到第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n报告要求让试玩的结果能够交给别人继续处理。正文要求说明发现了什么、玩家看到了什么、怎样复现、为什么有影响，以及可能涉及哪部分实现。要写出这样的报告，前面的试玩就得留下相应的动作和结果。\n\n只写“游戏有问题”，别人无法复核。读完这些要求，我们回到对应页，把流程、取证和报告落实到这次检查，实际结果稍后再看。", "【操作提示｜从 PPT p07t1 第 2 步的截图入口打开 early-clear.png；讲完切任务 1 的 run-a-output。】\n\n画面中已有六张牌配好，还有六张扣着，也就是只完成了三对。进度却显示六比六，并出现通关提示。和刚才的预期相比，这时本应还能继续配对，实际却已经结束。", "【操作提示｜在任务 1 材料定位 pair-3、AFTER3，再向下看报告；讲完返回 PPT p07t1 并推进到第 3 步。】\n\n操作记录确认，这是第三次配对之后的状态；报告还写明了剩余牌无法继续翻的影响。这样，刚才截图中的异常有了对应的复现步骤和玩家影响。我们回到对应页，将这些证据与正文的交付要求连起来。", "【操作提示｜打开 PPT p07t1 第 1 步：任务信息与共同方法；讲完从本页材料入口打开原文。】\n\n这里有两类信息。左边来自这次请求：六对才通关，检查前三对，保留源码。右边来自 Skill：怎样安排试玩，怎样选择检查手段，怎样留下报告。前者给出当前任务的规则和边界，后者提供同类任务可以复用的方法。\n\n我们带着右边这三个位置去读正文，看看它们分别怎样影响工作。", "【操作提示｜返回 PPT p07t1，停在第 2 步：正文指导对应具体检查。】\n\n把刚读过的指导放回这次游戏。流程中的主要操作，对应翻牌和配对；取证要抓住本次关注的第三对完成状态；报告要说明怎样复现、预期与实际有什么差别。\n\n页面左侧给出方法，右侧是它在这次任务中的具体用法。六对规则让我们预期第三对完成后应显示三比六并能继续；截图与操作记录则用来核对实际是否如此。现在看本轮实际结果。", "【操作提示｜返回已打开的 PPT p07t1，从第 2 步推进到第 3 步；讲完打开任务 2 请求。】\n\n把本轮结果填回这里，检查过程就完整了：本次规则给出预期，正文提供操作、取证和报告的方法，实际观察支持问题判断。拿到这份报告的人可以沿复现步骤继续核对。\n\n共同方法可以复用，具体规则和结论随任务变化。下一轮仍沿用试玩流程，但增加了通关后的恢复检查。这时就要找到更细的检查内容。"]}, {"id": "r323-3", "label": "Reference 怎样把通用指导补充为具体检查", "script": ["【操作提示｜在任务 2 请求中指认修复、通关后恢复检查和查阅清单；随后切 PPT p07t2 第 1 步。】\n\n第二轮从有缺陷的独立副本开始，要求先修复提前通关，再检查通关后的恢复。这次请求还明确要求沿正文引用查阅完整试玩清单，从中选择恢复相关的一项执行。我们重点看新增检查的依据怎样找到、怎样使用。", "【操作提示｜从 PPT p07t2 第 1 步打开 References，在原文指认 Full checklist；沿该链接进入清单，定位 Universal checks。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n这里的 Full checklist 指向单独保存的试玩清单。正文保留的是相对路径，沿这个入口就能找到配套细则。我们打开它，寻找与通关后恢复有关的条目。", "【操作提示｜停在 Universal checks 的 pause、failure、recovery 条目，读完返回 PPT p07t2 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n清单问暂停、失败和恢复状态能否正常工作。这条内容面向不同游戏，所以没有替每个游戏写好具体操作。我们已经找到与本轮目标相关的恢复条目，回到对应页，把它展开成翻牌游戏里的动作和预期。", "【操作提示｜从 PPT p07t2 第 2 步打开“任务 2 · 正文与清单读取”的 Inspect 记录；回讲述页打开“任务 2 · 重开复验”，看高亮输出。】\n\n运行开头的记录显示，Codex 读取了正文和试玩清单。这确认了它查阅过这份细则；接着看修复后的浏览器操作，核对恢复检查是否执行。", "【操作提示｜在 run-b-verify 带过三对与六对结果，指认重开后计数、横幅、牌面与再次翻牌；讲完返回 PPT p07t2 第 3 步。】\n\n修后记录里，三对时还能继续，六对时才通关。点击“再来一次”后，配对数、步数和用时归零，通关横幅消失，十二张牌回到未翻开状态。记录还显示，它再次翻开了一张牌。\n\n这些是实际操作和结果。回到刚才的两层预期，看每项结果分别支持什么判断。", "【操作提示｜打开 PPT p07t2 第 1 步：正文连接配套细则；讲完从本页材料入口打开原文。】\n\n正文给出共同试玩流程，并用 Full checklist 连接完整清单。流程回答怎样推进，清单补充哪些情形值得检查。分开保存以后，正文仍保留找到细则的入口。\n\n这次关心通关后的恢复，我们就沿引用寻找相关条目，看看它提供了什么，还需要结合游戏补充什么。", "【操作提示｜返回 PPT p07t2，停在第 2 步：通用条目对应动作与预期。】\n\n清单中的“恢复状态能否正常工作”，放到这里，具体动作就是通关后点击“再来一次”。要判断恢复成功，可以分成两层：状态回到新一局，以及新一局能够继续操作。\n\n第一层要看计数归零、通关提示消失、牌面重新扣下；第二层要实际再翻一张牌。Reference 提供检查方向，当前游戏让我们把方向展开为动作和可观察的预期。下面核对本轮有没有查阅、有没有执行。", "【操作提示｜返回 PPT p07t2，停在第 3 步：实际结果对应两层预期。】\n\n记录中的计数归零、横幅消失和牌面复位，对应状态恢复；再次翻牌成功，对应操作恢复。两层预期都有各自的实际结果，才支持这一轮的恢复验收。\n\n因此，使用 Reference 可以沿着这三层来读：通用条目说什么，在当前对象上怎样操作和判断，结果有没有支持预期。下一轮要判断游戏界面，还会用到另一类工作的专项指导。"]}, {"id": "r323-4", "label": "专项 Skill 怎样补充另一类工作的判断", "script": ["【操作提示｜在任务 3 请求中指认桌面与窄屏检查、查阅前端指导；随后切 PPT p07t3 第 1 步。】\n\n第三轮要求检查：翻牌时能不能看清步数和配对信息，信息区会不会挡住牌阵。请求调用 game-playtest，同时要求沿引用查阅前端指导。\n\n这轮也从早期版本的独立副本开始，配对计数仍带着原缺陷。这里关注的是信息的位置和可见性。要作这些界面判断，两份 Skill 各自提供什么？", "【操作提示｜从 PPT p07t3 第 1 步打开 References，指认 ../game-ui-frontend/SKILL.md；沿链接进入该文件。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n上一轮链接的目标是检查清单，这次目标文件是另一份 SKILL.md，属于 game-ui-frontend。它围绕游戏界面这项工作提供指导。我们继续读与本次检查相关的部分。", "【操作提示｜定位信息层级、保护游戏区、桌面和手机设计；随后返回 PPT p07t3 第 2 步。 GitHub 不可用时打开同名备用节选；已在备用页则按页内阅读顺序继续，讲法不变。】\n\n前端指导提出清楚的信息层级、保护游戏区域，并同时考虑桌面和手机。这些内容与本次信息可见性、牌阵遮挡的检查有关。同一份指导里的 3D 专属内容，本次二维翻牌没有对应对象，就不逐条展开。\n\n专项 Skill 有自己的工作范围，我们仍要按当前任务选择相关标准。回到 PPT，把刚才读到的标准对应成两个具体观察问题。", "【操作提示｜从 PPT p07t3 第 2 步打开 run-c-read，核对前端 SKILL.md 的读取；随后打开 desktop-first-pair.png。】\n\n这轮记录中确实打开了前端 Skill 的正文。请求中点名的是 game-playtest，这里核对的是沿引用查阅另一份指导。接着看本轮实际画面。", "【操作提示｜打开 desktop-first-pair.png，观察状态信息与牌阵；讲完打开 mobile-bottom.png 的完整视口截图。】\n\n这张桌面游戏区截图中，状态信息在牌阵上方，没有压在牌上。它呈现的是整个游戏区域；要检查操作时是否看得到计数，还需要看具体视口。我们切到窄屏滚至牌阵底部的画面。", "【操作提示｜打开 mobile-bottom.png，保持完整 375×667 视口可见，指认底部牌与画面中没有出现的计数；随后定位 run-c-verify。】\n\n玩家已经滚到牌阵底部，可以操作下面这些牌。画面里没有信息区挡牌，但上方计数也已经不在视口内。我们用测量输出再核对这两个观察。", "【操作提示｜在 run-c-verify 指认 overlap area=0 与 metaVisible=False；返回 PPT p07t3 第 3 步，不直接跳到全局小结。】\n\n输出中的重叠面积为零，对应信息区没有挡住牌阵；metaVisible 为 false，对应计数已不在当前视口。现在回到两个检查问题，把这两个结果分别放回去。", "【操作提示｜打开 PPT p07t3 第 1 步：共同流程与专项判断的分工；讲完从本页材料入口打开原文。】\n\ngame-playtest 提供试玩、取证和报告的方法。现在检查的是界面上的信息与牌阵关系，还需要判断什么布局会影响玩家操作；这部分可以查阅 game-ui-frontend 的专项指导。\n\n两份 Skill 在这里贡献不同的知识。我们沿引用读前端正文，挑出与本次桌面、窄屏检查有关的标准。", "【操作提示｜返回 PPT p07t3，停在第 2 步：专项标准对应两个检查问题。】\n\n保护游戏区域，在本次任务中对应“信息区有没有挡住牌阵”；信息层级与手机使用条件，则提醒我们看“操作底部牌时，还能否看到计数”。\n\n这两个问题要分别观察。没有遮挡，只回答区域之间是否重叠；操作时能否获得信息，还取决于当前视口和玩家所在的位置。我们用本轮的截图与测量分别核对。", "【操作提示｜返回 PPT p07t3，停在第 3 步：不同问题对应不同证据。】\n\n这轮在窄屏底部观察到两个不同结果：区域重叠面积为零，但计数不在视口里。它们分别回答了刚才的两个问题，所以不能用“没有遮挡”代替对状态可见性的判断。\n\n共同流程帮助我们操作、取证和报告；专项指导帮助确定界面上要判断哪些关系；当前任务决定选用哪些标准。回到后面的全局图，就能把正文、配套资料与另一份 Skill 的分工连起来。"]}, {"id": "r323-5", "label": "复杂 Skill 怎么拆、怎么接", "script": ["【操作提示｜打开 p07o 第 1 步，指认 Skill 边界、SKILL.md、文件头与正文。】\n\n把刚才的试玩细节放到一边，我们现在看一份 Skill 的整体。Skill 把同类任务中可以反复使用的工作知识保存下来，让 AI 在需要时找到并使用。这里的知识既包括怎么做，也包括怎样判断、满足什么条件才这样做。\n\n入口是 SKILL.md。同一份文件里，name 和 description 帮助识别它、判断什么时候选用；下面的正文提供选用后的核心指导。比如试玩的共同流程、工具选择依据和报告要求，就属于正文要交代的工作方法。", "【操作提示｜推进 p07o 第 2 步，从正文的引用沿线观察三类配套文件。】\n\n一份 Skill 可以只有这个入口文件；内容增加后，还可以按用途配上其他文件。注意图里的三条线，使用方式并不相同。\n\nReference 是要查阅的知识，补充细则、背景或长示例。脚本是要运行的程序，把明确的处理过程交给代码。素材是任务中要直接使用的对象，例如模板、图片和数据。它们分别回答“还需要知道什么”“哪些处理可以执行”“手上需要哪些材料”。\n\n这些文件配合正文完成同一类工作。拆出去的是细节或可复用的实现，正文仍要保留共同的方法，以及什么时候、从哪里取用它们。", "【操作提示｜推进 p07o 第 3 步，指认 Skill 边界外的另一份 SKILL.md，再回看两类连接。】\n\n还有一种连接跨出了这份 Skill 的边界：引用另一份专项 Skill。刚才的前端指导就属于这种情况，它有自己的适用范围和工作方法。\n\n因此，补充本项工作的细则，可以放 Reference；形成了另一类工作的完整指导，可以单独组织成 Skill，再从需要它的地方引用。图中表示的是查阅关系，真正做了什么仍要看执行记录。\n\n这是一种组织示意。配套资料也可以放在共享目录中，关键是入口能找到它，且职责和使用条件清楚；并不是要求把所有文件都复制进同一个文件夹。", "【操作提示｜打开 p07p 第 1 步，先看核心指导与四项取用信息，再读 Reference 一行。】\n\n所以，把文件拆开只是第一步，正文还要把它们接成可用的方法。每个重要入口都要让 AI 知道：遇到什么条件，去哪里找，怎样使用，以及希望得到什么。\n\n例如需要检查恢复状态时，沿正文找到试玩清单，查阅相应细则，再把它转成当前游戏的验收项目。只有路径而没有使用条件，AI 就缺少判断何时需要它的依据；只有“检查一下”而没有入口，又找不到具体做法。", "【操作提示｜打开任务 2 的 Inspect 原始脚本写入命令，指认点击、状态读取和预期检查。】\n\n脚本体现了另一种分工。正文说明要做哪项检查，代码负责执行已经明确的操作和比较。这个片段点击重开按钮，读取状态，再核对计数和横幅。\n\n它是这轮任务生成并执行的脚本。以后要复用，还需要保留辅助函数、浏览器依赖以及对页面结构的要求，不能只拿这一小段就假定能够独立运行。", "【操作提示｜返回 p07p 第 2 步，展开脚本和素材两行，对照输入与结果。】\n\n运行脚本，要给它可用的游戏页面和运行环境，得到的是检查结果；使用基准图，要先确认目标状态、视口和版本，得到的是一份可用于对照的具体材料。\n\n因此，正文、资料、脚本和素材可以各自保存，但使用关系不能断。正文保留决策与入口，配套文件承担细节、处理和材料。这样组织以后，核心方法容易读清，复杂任务也有继续展开的位置。"]}, {"id": "r323-6", "label": "两份示例的系统小结", "script": ["【操作提示｜打开 p07m 第 1 步，看任务边界、工作方法、判断依据与交付要求四项关系。】\n\n回到正文内部，我们也可以用同一个问题来读：这些内容怎样帮助 AI 完成一类工作？\n\n任务边界说明这份指导负责什么、需要哪些输入。工作方法说明怎么推进，遇到什么条件怎样选择。判断依据让 AI 知道怎样检查和修正。交付要求说明最后应当把什么交给人。\n\n它们共同组织了一项工作的知识。具体标题可以不同，一段文字也可以同时承担几种作用，不必把这些名称都写成固定栏目。", "【操作提示｜推进 p07m 第 2 步，用下方两份已读示例对应四种作用。】\n\nsetup-demo-app 用交付要求、步骤和完成标准，组织了搭建演示项目这项工作。game-playtest 面对不同的游戏和检查条件，所以还需要交代工具选择、检查关注点、报告和补充入口。\n\n两份正文的结构不同，原因是工作需要不同。读懂 Skill，要看这些内容怎样支持任务中的判断和行动；写 Skill，也从这项工作需要的知识出发组织。", "【操作提示｜打开 p07l 第 1 步，显示空报告结构。】\n\n同一项知识，还可以选择不同的表达方式。比如交付要求只写“报告要具体”，执行时仍然很模糊。用模板列出“现象、复现步骤、影响、排查方向”，就把需要交付的结构固定下来了。", "【操作提示｜推进 p07l 第 2 步，展开填写示意。】\n\n示例进一步说明填写到什么程度。这里把复现写成“新开一局，翻开两张不配对的牌”，把现象写成“页面步数没有增加”。下一次遇到别的问题，参考的是这种具体程度，实际内容仍要根据本次结果填写。\n\n模板提供结构，示例帮助理解标准。它们可以写在正文，也可以在内容较长时单独引用，放在哪里取决于什么时候需要读它。", "【操作提示｜推进 p07l 第 3 步，观察条件与要求，再收束表达方式。】\n\n而“canvas 游戏必须看截图”这种写法，是用条件限定行动：遇到这类渲染方式，就采用相应的检查手段。\n\n步骤安排动作，条件表达选择，模板约定输出结构，示例说明具体程度。选哪种写法，要看希望让 AI 更清楚地做出哪项判断。", "【操作提示｜打开 p07q 第 1 步，回到与 p07o 同构的全局图，突出文件头。】\n\n现在把这些知识放回整张图，就能理解为什么要分层组织。第一层是名称和描述，让系统有机会识别这份指导，并判断它是否适合当前任务。此时并不需要把所有详细资料都放在面前。", "【操作提示｜推进 p07q 第 2 步，突出正文，保留文件头与配套资源的位置。】\n\n选用以后，读取正文，拿到这类工作的核心方法。本次请求仍然负责提供当前目标、规则和环境；正文提供可反复使用的流程与判断依据。二者结合，才能决定这一次具体怎样做。\n\n第一轮的提前通关检查，用到了正文的试玩和报告方法。它说明核心指导本身就能支持一项具体任务，不是每次都必须读完整套配套文件。", "【操作提示｜推进 p07q 第 3 步，突出从正文展开的路径，显示渐进披露与篇幅建议。】\n\n任务需要更细的信息时，再沿入口展开。恢复验收需要清单细则，窄屏检查又补读了前端指导。脚本和素材则在适用时运行或使用。后两轮请求明确要求了这些查阅，记录告诉我们本次实际走了哪些路径。\n\n这种从识别、核心指导到按需细节的组织，就是渐进披露。它让核心方法保持清楚，同时给复杂任务留下深入的位置。规范建议正文控制在五百行以内，目的也是便于使用；判断是否拆分，仍要看知识的用途和使用时机。\n\n读懂一份 Skill，最终要能说清：它负责哪类工作，核心方法是什么，还会在什么条件下取用哪些知识、程序或材料。现在用这些方法，回看上一节留下的风格指导初稿。"]}, {"id": "r324-review", "label": "再看第一版风格指导", "script": ["【操作提示｜PPT p324c；依次指使用时机、具体要求、资料入口和核对方法，邀请暂停修改初稿并保存前后两版】\n\n现在，请再打开上一节保存的初稿。没有写也没关系，可以从当时那三个问题开始：保留哪些特点，怎样写成指导，怎样检查。\n\n先看看它有没有说明什么时候用；“保持这种风格”有没有展开成具体要求；需要参考图、样式或其他文件的地方，有没有提供入口。最后想一想：你准备怎样确认 AI 用上了它，又怎样判断生成的游戏符合要求？\n\n可以暂停，修改一次，并保留前后两个版本。写完以后，先留住这个版本。我们接着看另一个问题：如果要把几份相关指导和配套资源一起提供给别人，又该怎样做？这就接到了 Plugin 的整包组织与分发。后面开发新游戏时，我们再检查风格要求实际保留了什么。"]}, {"id": "r324-1", "label": "Plugin 怎样组织和分发能力", "script": ["【操作提示｜在编辑器中打开 3.2.1 演示项目的 .agents/skills，指认四个目录；本段先保持项目目录，下一段再切来源。录前若目录不存在，按就近准备页创建四份 Skill 的隔离演示副本。】\n\n前面我们为翻牌游戏准备了四份 Skill。game-playtest 负责试玩，game-ui-frontend 负责界面；另外两份是它们引用到的配套指导。那一次，我们按任务需要把文件准备在项目里。现在回到这些文件的来源，看看作者是怎样把它们提供出来的。", "【操作提示｜打开固定版本 Game Studio 的 skills 目录，指认四份熟悉指导和 game-studio、phaser-2d-game；随后按切换提示查看插件声明。】\n\n在 Game Studio 的完整目录里，除了这四份，还有 game-studio、phaser-2d-game 等指导，覆盖规划、不同技术路线的实现和试玩。\n\n【切换｜打开同一固定版本的 .codex-plugin/plugin.json，指认 name、author 和 skills 字段】\n\n外面还有一份 Plugin 声明，说明这个扩展叫什么、由谁提供，以及从哪里找到其中的 Skill。这就给我们多了一层组织方式：把相关能力作为一个扩展提供。"]}, {"id": "r324-2", "label": "Plugin 怎样组织和分发能力", "script": ["【操作提示｜从目录切到图，展示前面已准备的四份 Skill；试玩、界面突出，两份依赖弱化。】\n\n先保留刚才的四份指导。试玩和界面是我们主要使用的，两份配套指导在需要时引用。一次准备多份文件，解决的是当前任务需要哪些指导的问题。要把一整组能力持续提供给别人，还需要让使用环境知道：这组东西是什么，包含什么，怎样安装。", "【操作提示｜在来源的完整能力集合中增加其他代表 Skill，展开 Game Studio Plugin 的统一身份与组成声明。】\n\nGame Studio 用 Plugin 来承担这一层。包里除了熟悉的指导，还有其他游戏开发 Skill；包的声明交代统一的名称、版本和组成。因此，Plugin 可以理解为一个可安装的扩展包，用来组织和分发相关能力。这里展示的是部分代表名称，并不是完整目录。", "【操作提示｜展开提供者 → 整包安装 → 使用者 → 按任务选用 Skill 的关系；用鼠标指认包内已有的 game-playtest，不等待额外高亮动画。】\n\n沿这条关系看，提供者整理扩展包，使用者通过 Plugin 入口安装，再按当前任务选用其中的能力。例如，这次只要生成试玩清单，就使用 game-playtest。安装整包，并不意味着所有 Skill 都要执行；也不要求一定有很多份 Skill，一份指导同样可以打包。Game Studio 是以 Skill 为主的例子。为了理解 Plugin 还能提供什么，我们换一个假设的团队场景。"]}, {"id": "r324-3", "label": "Skill、MCP 与 Hook 各有什么作用", "script": ["【操作提示｜换页；先指出“教学示意”，再指试玩 Skill。】\n\n假设团队维护一个游戏开发 Plugin，其中的试玩 Skill 约定怎样检查游戏、怎样报告问题。现在写报告前，我们想查一下：团队的缺陷库里是不是已经有相同问题？指导可以告诉 AI 应该查什么，但要真正查询，还需要能访问缺陷库的工具。", "【操作提示｜增加 MCP 分支及边界外缺陷库，沿查询关系指认。】\n\n这里可以通过 MCP 服务把查询工具接进来。MCP 是连接工具和数据服务的一种标准方式。在这个例子里，Skill 交代工作方法，MCP 服务提供查询已有缺陷的操作。Plugin 可以把这两部分一起组织好，供使用者接入。图里的缺陷库仍然运行在包外；安装连接配置不等于把远端服务下载到本地，访问也仍需要相应的授权。"]}, {"id": "r324-4", "label": "Skill、MCP 与 Hook 各有什么作用", "script": ["【操作提示｜保留原图，增加 Hook 分支；先指会话开始，再指环境检查脚本。】\n\n还有一种需要：每次会话开始时，先检查游戏运行环境是否准备好。在支持的宿主中，可以为会话开始这个事件配置 Hook，由它触发环境检查脚本。这里画的 SessionStart 就是会话开始事件。\n\n如果只是把“先检查环境”写进 Skill，那是交给 AI 的工作指导；Hook 则根据事件配置触发命令。它能不能运行，要看宿主是否支持、脚本是否可用，以及定义是否经过信任确认。图中的三项分别提供工作方法、工具接入和事件触发，按用途选配，不需要每个 Plugin 都有。这三种作用在官方文档里也有对应说明。我们带着刚才的例子读一小段，以后遇到类似需求，就知道去哪里查。"]}, {"id": "r324-7", "label": "Skill、MCP 与 Hook 各有什么作用", "script": ["【操作提示｜打开 Skills 文档的 How skills complement an MCP server，停在首段与该节末尾的职责说明。】\n\n这里打开的是 OpenAI 的 Skills 文档。我们直接找“Skill 怎样配合 MCP 服务”这一节。首段把两者放在一起说明：MCP 服务提供信息和可执行的操作，Skill 则说明围绕这些工具怎样完成工作，包括什么时候调用、怎样处理不完整的结果，以及最后应该交付什么。\n\n对应刚才的团队试玩，查询工具让 AI 能访问缺陷库；试玩指导则可以规定什么时候查、怎样整理发现的问题、报告里要写什么。一个提供工具，一个组织工作方法。往下这段还说明，如果任务只需要已有指导和资源，Skill 也可以独立使用。\n\n以后查这类文档，可以先带着自己的需求找职责说明，再决定要不要继续读构建教程。我们现在只需要讲清分工，就停在这里。Hook 的查阅位置在插件打包文档中。", "【操作提示｜打开 Hook 章节，先停在开头的宿主与安装方式说明；讲完首段后按切换提示定位代码示例。】\n\n这份打包文档在 Hook 部分先交代了支持条件。自己准备使用时，要先核对所用环境和安装方式是否支持，再看具体配置。\n\n【切换｜在同页查找 SessionStart，定位包含它的代码块，使 SessionStart 与 command 同屏；需要时向上少量滚动查看脚本可用与信任说明】\n\n看这个例子，SessionStart 表示会话开始，下面的 command 指向要运行的脚本。我们刚才图里的“会话开始时检查环境”，就是把需要执行的检查放进这样的事件配置。这里的官方示例只展示触发脚本的写法，环境检查是我们课程里的假设用途。脚本必须在运行环境里可用，Hook 定义也需要经过信任确认。\n\n这一页我们先看到事件和命令的对应关系。以后确实要用 Hook，再从这里继续查支持范围和配置要求。资料里也留了 Plugin 组成选择表，方便大家课后按自己的需求回查。现在回到 Game Studio，看看这个真实包提供了哪些组成。", "【操作提示｜打开固定版本插件声明，指 name、version，再滚到 skills 字段；说明未声明 MCP 或 Hook 后按切换提示回到包目录。】\n\n回到 Game Studio 的这份声明，名称和版本说明我们正在看哪个包，skills 指向包里的指导目录。这个固定版本没有声明 MCP 或 Hook。\n\n【切换｜返回固定版本 Game Studio 根目录，使 skills、references、scripts 同屏】\n\n所以，刚才的团队图展示的是 Plugin 可以怎样组合能力；我们实际安装的 Game Studio，提供的是这些游戏开发 Skill，以及它们需要的资料和脚本。目录里有脚本，并不说明配置了事件触发。下面用保存的安装记录，看怎样把这个完整包取得过来。", "【操作提示｜打开固定版本 game-studio/SKILL.md，停在 Use This Skill When；随后按切换提示打开 sprite-pipeline 和 game-playtest 的职责说明。】\n\n装好以后，先根据当前任务选择指导。这里的 game-studio 是包里的一份 Skill，外面的 Game Studio 是整个 Plugin。它们名称相近，承担的层次不同。\n\n这份总入口指导适合技术路线还没定，或者工作同时涉及实现、界面、素材和检查的情况。它先判断任务，再把工作交给更具体的专项指导。\n\n【切换｜打开 sprite-pipeline/SKILL.md 的 Overview，停在二维精灵动画的用途说明】\n\n如果现在要处理二维角色的动画素材，比如生成一组动作帧、统一大小和对齐方式，就可以用 sprite-pipeline。我们这里只看它负责什么，不展开素材制作。\n\n【切换｜打开 game-playtest/SKILL.md，定位开头的试玩职责说明】\n\n而我们已经有了翻牌游戏，现在需要准备试玩清单，所以选的是 game-playtest。选择的依据就是当前要完成什么工作。包里其他指导以后有需要时再用，这次把六对通关和重开要求交代清楚就可以了。"]}, {"id": "r324-5", "label": "安装 Game Studio，并按任务选用指导", "script": ["【操作提示｜打开安装实录的“来源与实际组成”，对照公开来源、清单版本与提交；本段采用真实预跑回放。】\n\n现在回到 Game Studio。这次预跑使用 Codex CLI 的 Plugin 安装入口。本机已经配置了官方插件来源 openai-curated，我们先核对安装对象是其中的 game-studio。这里的来源链接指向 OpenAI 的公开仓库；清单版本是 0.1.2，安装缓存对应提交 0722921d，与前面阅读的版本一致。", "【操作提示｜打开真实安装回放的“来源与实际组成”，指安装对象与九份 Skill 清单；讲完首段后按切换提示进入“安装”。】\n\n这里看的是之前保存的真实安装回放。本机已经配置了官方来源 openai-curated，命令中的 game-studio 就是这次要安装的完整 Plugin。\n\n【切换｜从讲述页打开“安装返回”的 Inspect 原件，指 pluginId、marketplaceName 和 installedPath；安装命令仍见预跑文档，同轮终端执行日志未找到】\n\n安装器返回了插件名称、来源和安装路径。这次包里有九份 Skill，前面准备的四份都在其中，相关资料和脚本也随包取得。安装完成之后，具体用哪一份，要看当前任务。我们先用几份指导的职责作个对照。"]}, {"id": "r324-6", "label": "安装 Game Studio，并按任务选用指导", "script": ["【操作提示｜打开同次请求，指 game-playtest、六对通关、重开归零，以及只生成清单的范围。】\n\n选定 game-playtest 后，回到这次预跑的请求。当时新开了一个没有项目级独立 Skill 副本的空项目会话，明确使用已安装 Plugin 中的指导。\n\n我们要的是六对牌游戏的人工试玩清单，所以补上两项具体规则：全部六对配齐才通关，重开后计数归零并能继续翻牌。这份 Skill 提供试玩方法，本次请求说明这个游戏要检查什么。这里还限定了只生成清单，不运行游戏、不修改代码。我们直接看同一轮保存的回复。", "【操作提示｜切到实际读取段，指 game-playtest 的 cat 命令、安装缓存路径和 exit_code 0。】\n\n先看实际读取记录。这个成功执行的命令打开了 Plugin 安装缓存里的 game-playtest，而不是前面项目内的独立副本；随后读取的检查资料也来自同一个包。这就把安装来源与本次实际使用对上了。不能只凭回答里说“我使用了某个 Skill”来判断，读取对象也要对应得上。", "【操作提示｜定位清单中的通关边界和重开条目，展示到可以看出已针对本次规则作答即止。】\n\n返回清单把通关条件展开成两个检查：完成前五对时不通关，第六对完成后才通关。重开条目也要求计数归零以后，仍然能够继续翻牌和配对。可以看到，这份清单已经针对本次游戏规则作了安排。这轮只生成清单，实际试玩还没有执行。\n\n到这里，我们通过 Plugin 取得一组相关能力，再按当前任务选用了其中一份指导。前面我们也回看并修改了自己的风格指导初稿。下一节，就用紫色游戏这个具体案例，把指导用到新的玩法上，检查哪些要求能沿用、哪些需要调整，以及实际结果是否符合要求。"]}, {"id": "r324-7", "label": "安装 Game Studio，并按任务选用指导", "script": ["【操作提示｜打开 Skills 文档的 How skills complement an MCP server，停在首段与该节末尾的职责说明。】\n\n这里打开的是 OpenAI 的 Skills 文档。我们直接找“Skill 怎样配合 MCP 服务”这一节。首段把两者放在一起说明：MCP 服务提供信息和可执行的操作，Skill 则说明围绕这些工具怎样完成工作，包括什么时候调用、怎样处理不完整的结果，以及最后应该交付什么。\n\n对应刚才的团队试玩，查询工具让 AI 能访问缺陷库；试玩指导则可以规定什么时候查、怎样整理发现的问题、报告里要写什么。一个提供工具，一个组织工作方法。往下这段还说明，如果任务只需要已有指导和资源，Skill 也可以独立使用。\n\n以后查这类文档，可以先带着自己的需求找职责说明，再决定要不要继续读构建教程。我们现在只需要讲清分工，就停在这里。Hook 的查阅位置在插件打包文档中。", "【操作提示｜打开 Hook 章节，先停在开头的宿主与安装方式说明；讲完首段后按切换提示定位代码示例。】\n\n这份打包文档在 Hook 部分先交代了支持条件。自己准备使用时，要先核对所用环境和安装方式是否支持，再看具体配置。\n\n【切换｜在同页查找 SessionStart，定位包含它的代码块，使 SessionStart 与 command 同屏；需要时向上少量滚动查看脚本可用与信任说明】\n\n看这个例子，SessionStart 表示会话开始，下面的 command 指向要运行的脚本。我们刚才图里的“会话开始时检查环境”，就是把需要执行的检查放进这样的事件配置。这里的官方示例只展示触发脚本的写法，环境检查是我们课程里的假设用途。脚本必须在运行环境里可用，Hook 定义也需要经过信任确认。\n\n这一页我们先看到事件和命令的对应关系。以后确实要用 Hook，再从这里继续查支持范围和配置要求。资料里也留了 Plugin 组成选择表，方便大家课后按自己的需求回查。现在回到 Game Studio，看看这个真实包提供了哪些组成。", "【操作提示｜打开固定版本插件声明，指 name、version，再滚到 skills 字段；说明未声明 MCP 或 Hook 后按切换提示回到包目录。】\n\n回到 Game Studio 的这份声明，名称和版本说明我们正在看哪个包，skills 指向包里的指导目录。这个固定版本没有声明 MCP 或 Hook。\n\n【切换｜返回固定版本 Game Studio 根目录，使 skills、references、scripts 同屏】\n\n所以，刚才的团队图展示的是 Plugin 可以怎样组合能力；我们实际安装的 Game Studio，提供的是这些游戏开发 Skill，以及它们需要的资料和脚本。目录里有脚本，并不说明配置了事件触发。下面用保存的安装记录，看怎样把这个完整包取得过来。", "【操作提示｜打开固定版本 game-studio/SKILL.md，停在 Use This Skill When；随后按切换提示打开 sprite-pipeline 和 game-playtest 的职责说明。】\n\n装好以后，先根据当前任务选择指导。这里的 game-studio 是包里的一份 Skill，外面的 Game Studio 是整个 Plugin。它们名称相近，承担的层次不同。\n\n这份总入口指导适合技术路线还没定，或者工作同时涉及实现、界面、素材和检查的情况。它先判断任务，再把工作交给更具体的专项指导。\n\n【切换｜打开 sprite-pipeline/SKILL.md 的 Overview，停在二维精灵动画的用途说明】\n\n如果现在要处理二维角色的动画素材，比如生成一组动作帧、统一大小和对齐方式，就可以用 sprite-pipeline。我们这里只看它负责什么，不展开素材制作。\n\n【切换｜打开 game-playtest/SKILL.md，定位开头的试玩职责说明】\n\n而我们已经有了翻牌游戏，现在需要准备试玩清单，所以选的是 game-playtest。选择的依据就是当前要完成什么工作。包里其他指导以后有需要时再用，这次把六对通关和重开要求交代清楚就可以了。"]}]);
})();

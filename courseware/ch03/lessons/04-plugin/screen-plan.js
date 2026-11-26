window.narrationData = {
  "section": "3.4",
  "title": "3.4 寻找值得体验的 Skill，持续追踪 AI Coding",
  "pptPlan": {
    "status": "阶段 3 · 7 页课件与对应口播已制作，讲述设计保留。SkillsMP 作为条件补充，录前须复查搜索结果；其余按主线使用 PPT 与现成网页。尚未经讲师试讲定稿。",
    "pages": [
      {
        "frames": "3.4.1.1.1 · 社区里已经有很多现成的 Skill",
        "content": "现成 Skill 的四组用途与代表",
        "progression": "第 1 步展示设计案例，短切 Impeccable Gallery 后回第 2 步展开其他用途。",
        "id": "ui-opening"
      },
      {
        "frames": "3.4.1.1.2 · 找 Skill 的三个入口",
        "content": "聚合平台、GitHub、提供者：沿用讲师的三种找法",
        "progression": "只讲三种找法，不提前列品牌或演示按钮；迅速切具体推荐。",
        "id": "platform-map"
      },
      {
        "frames": "3.4.1.1.3 · 先收藏这几个入口",
        "content": "三组八个推荐入口及各自看点",
        "progression": "Codex、Claude Code、Cursor 同列官方插件目录；后二者简要给操作入口，Codex 主演示后置。",
        "id": "recommended-entries"
      },
      {
        "frames": "3.4.2.1.1 · 从更新记录判断是否适用",
        "content": "Skill 可能更新或不再需要：实际作者案例",
        "progression": "直接讲模型能力提升会让部分 Skill 过时或被淘汰，再引出关注社区最近的调整与讨论趋势。案例由 PPT 提供证据，口播不展开人物、出处和事件经过。第二步画面有一句：跟自己的任务有关，再拿来试。",
        "id": "lifecycle-slide"
      },
      {
        "frames": "3.4.2.2.1 · 官方渠道：看变化，也看怎么用",
        "content": "官方渠道：先看正在用的工具，换工具也看更新和用法",
        "progression": "Codex 为主例，指更新记录和 Skill 文档；Claude Code 与 Cursor 说明换工具也一样，活动录像只在 Claude 侧。网页按需。",
        "id": "official-slide"
      },
      {
        "frames": "3.4.2.2.2 · 作者推荐：具体做法、实验和维护经验",
        "content": "Karpathy：X 动态与 YouTube 讲解；其他人选待讲师补充",
        "progression": "第一步以 Karpathy 为例看 X 上的动态与社区讨论；第二步展开 YouTube，并指关注清单的人物、频道与链接。其他人选不预填。",
        "id": "authors-slide"
      },
      {
        "frames": "3.4.3.1.1 · 反向找作者、辨认同名、留意归档",
        "content": "反向追踪、同名看来源、看维护状态",
        "progression": "第一条之后短切网页，回同页补后两条并结束。",
        "id": "tips-slide"
      }
    ]
  },
  "parts": [
    {
      "id": "find",
      "number": "3.4.1",
      "title": "从哪里找到值得体验的 Skill",
      "content": "先用 Impeccable 的界面作品引出社区现成 Skill，短看作者 Gallery 与说明入口，再回 PPT 扩展到审查、规划与测试。寻找入口统一为聚合平台、作者与团队的集合、工具官方插件目录；第 2 页讲三种找法，第 3 页给八个推荐入口。Claude Code 与 Cursor 只介绍已核实的入口，Codex 保留平台浏览末尾的主演示。浏览路线为 skills.sh 搜索与详情、榜单与主题、SkillsMP 条件补充、Vercel 原仓库、Codex 插件与技能目录；随后回第 4 页接持续追踪。",
      "materials": [
        {
          "label": "Discussion 3.4.1",
          "url": "../../../../docs/outline/ch03-discussion.md#341-从哪里找到值得体验的-skill",
          "location": "3.4.1",
          "purpose": "目标与范围"
        }
      ],
      "groups": [
        {
          "id": "recommend",
          "number": "3.4.1.1",
          "title": "社区有哪些 Skill，去哪里找",
          "screens": [
            {
              "id": "ui-opening",
              "number": "3.4.1.1.1",
              "title": "社区里已经有很多现成的 Skill",
              "segments": [
                {
                  "id": "ui-opening-design",
                  "title": "社区里已经有很多现成的 Skill",
                  "design": "从前面自己整理、修改 Skill 的经历接入，PPT 第 1 步展示 Impeccable 作者的酒店作品，保留讲师对作者作品的原有介绍。随即打开 Gallery，补充 Impeccable 的具体用途， 看其他作品主题，指 Docs 和 GitHub 的说明入口；回同页第 2 步，扩展到前端审查、规划与测试。Impeccable 在此承担具体资源案例，不再与插件目录并列。",
                  "limits": "这些是用途推荐，不代表本课已实测全部项目；Superpowers 是一套工作流集合，不暗示各项都可无条件独立安装。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "ui-opening",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "ui-opening:0"
                    },
                    {
                      "type": "script",
                      "ref": "web-gallery:0"
                    },
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "ui-opening",
                        "step": 1
                      }
                    },
                    {
                      "type": "script",
                      "ref": "ui-opening:1"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Anthropic Skills",
                          "url": "https://github.com/anthropics/skills",
                          "location": "README 与 skills 目录；frontend-design",
                          "purpose": "Coding Agent 官方提供的集合"
                        },
                        {
                          "label": "Impeccable",
                          "url": "https://impeccable.style/",
                          "location": "Gallery 与设计说明",
                          "purpose": "独立设计项目；先看作品与用途"
                        },
                        {
                          "label": "Vercel agent-skills",
                          "url": "https://github.com/vercel-labs/agent-skills",
                          "location": "Available Skills → react-best-practices / web-design-guidelines",
                          "purpose": "前端技术团队提供的指导"
                        },
                        {
                          "label": "Superpowers",
                          "url": "https://github.com/obra/superpowers",
                          "location": "README 的 Skills 列表：brainstorming、writing-plans、test-driven-development、systematic-debugging",
                          "purpose": "个人作者发起的开发工作流集合"
                        },
                        {
                          "label": "Impeccable 作品",
                          "url": "https://impeccable.style/gallery/",
                          "location": "Boutique hotel → With Impeccable 的作品",
                          "purpose": "只选一张作者展示截图，不作提效对照"
                        },
                        {
                          "label": "Gallery",
                          "url": "https://impeccable.style/gallery/",
                          "location": "作品列表",
                          "purpose": "展示继续浏览作品的入口，不重讲开篇样例"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#ui-opening"
                    }
                  ]
                }
              ]
            },
            {
              "id": "platform-map",
              "number": "3.4.1.1.2",
              "title": "找 Skill 的三个入口",
              "segments": [
                {
                  "id": "platform-map-design",
                  "title": "找 Skill 的三个入口",
                  "design": "沿用讲师手改的讲述：聚合平台汇集不同作者的资源，并可看社区数据，帮助判断是否受认可；GitHub 阅读说明和原文；也可直接找 Coding Agent 官方、团队或个人作者。几种找法会重叠。下一页按已确认的三组推荐列具体入口。",
                  "limits": "",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "platform-map",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "platform-map:0"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "skills.sh",
                          "url": "https://www.skills.sh/",
                          "location": "搜索、Trending、Topics",
                          "purpose": "广泛发现候选"
                        },
                        {
                          "label": "Anthropic Skills",
                          "url": "https://github.com/anthropics/skills",
                          "location": "README 与 skills 目录；frontend-design",
                          "purpose": "Coding Agent 官方提供的集合"
                        },
                        {
                          "label": "Vercel agent-skills",
                          "url": "https://github.com/vercel-labs/agent-skills",
                          "location": "Available Skills → react-best-practices / web-design-guidelines",
                          "purpose": "前端技术团队提供的指导"
                        },
                        {
                          "label": "Impeccable",
                          "url": "https://impeccable.style/",
                          "location": "Gallery 与设计说明",
                          "purpose": "独立设计项目；先看作品与用途"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#platform-map"
                    }
                  ]
                }
              ]
            },
            {
              "id": "recommended-entries",
              "number": "3.4.1.1.3",
              "title": "先收藏这几个入口",
              "segments": [
                {
                  "id": "recommended-entries-design",
                  "title": "先收藏这几个入口",
                  "design": "三个文件夹分别放聚合平台（skills.sh、SkillsMP）、作者与团队的集合（Anthropic Skills、Vercel agent-skills、Superpowers）、工具官方插件目录（Codex、Claude Code、Cursor）。Impeccable 已在开场案例展示，不列入目录。Claude Code 指 /plugin → Discover；Cursor 指 Marketplace 与 Customize；二者只介绍入口，不另开完整演示。说明官方维护目录不代表所有插件均为官方开发。随后进入 skills.sh，Codex 主演示仍放平台浏览末尾。 口播以讲师手改推荐段为底稿，保留搜索与 GitHub 集合的原句，仅在末尾补充 Claude Code、Cursor 和转场；只规范资源名称拼写。",
                  "limits": "",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "recommended-entries",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "recommended-entries:0"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "skills.sh",
                          "url": "https://www.skills.sh/",
                          "location": "搜索、Trending、Topics",
                          "purpose": "广泛发现候选"
                        },
                        {
                          "label": "SkillsMP",
                          "url": "https://skillsmp.com/search",
                          "location": "Filters / Sort by",
                          "purpose": "按条件缩小范围"
                        },
                        {
                          "label": "Anthropic Skills",
                          "url": "https://github.com/anthropics/skills",
                          "location": "README 与 skills 目录；frontend-design",
                          "purpose": "Coding Agent 官方提供的集合"
                        },
                        {
                          "label": "Vercel agent-skills",
                          "url": "https://github.com/vercel-labs/agent-skills",
                          "location": "Available Skills → react-best-practices / web-design-guidelines",
                          "purpose": "前端技术团队提供的指导"
                        },
                        {
                          "label": "Superpowers",
                          "url": "https://github.com/obra/superpowers",
                          "location": "README 的 Skills 列表：brainstorming、writing-plans、test-driven-development、systematic-debugging",
                          "purpose": "个人作者发起的开发工作流集合"
                        },
                        {
                          "label": "Codex 插件目录",
                          "url": "https://chatgpt.com/plugins",
                          "location": "Codex 侧栏 → Plugins → 插件详情",
                          "purpose": "按用途发现插件及随附 Skill，查看发布者"
                        },
                        {
                          "label": "Claude Code 插件目录",
                          "url": "https://code.claude.com/docs/en/discover-plugins",
                          "location": "Install a plugin → /plugin → Discover",
                          "purpose": "官方文档确认搜索与查看详情入口"
                        },
                        {
                          "label": "Cursor Marketplace",
                          "url": "https://cursor.com/marketplace",
                          "location": "插件目录；工具内 Customize",
                          "purpose": "官方插件发现入口"
                        },
                        {
                          "label": "Cursor 插件文档",
                          "url": "https://cursor.com/docs/plugins",
                          "location": "The marketplace",
                          "purpose": "核对目录与工具内搜索方式"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#recommended-entries"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "browse",
          "number": "3.4.1.2",
          "title": "到真实平台看怎么找",
          "screens": [
            {
              "id": "search-detail",
              "number": "3.4.1.2.1",
              "title": "搜索 UI Skill，打开候选详情",
              "segments": [
                {
                  "id": "search-detail-design",
                  "title": "搜索 UI Skill，打开候选详情",
                  "design": "搜索 frontend-design，先认作者和仓库，再打开 anthropics/skills 的详情。依次看用途、SKILL.md 与来源、安装命令和相关条目；只说明如何继续了解与安装，不执行命令。随后看不知道名称时怎么逛。 查看完整项目时使用安装命令内的 GitHub 地址，讲述页提供直达链接；Repository 的可见位置尚未核实，不作为必需操作入口。",
                  "limits": "已核对网页文本中的安装命令和 GitHub 地址；当前浏览器界面的 Repository 位置未核实，录制使用源仓库直达链接。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "浏览器 · skills.sh 首页 → 搜索结果 → frontend-design 详情"
                    },
                    {
                      "type": "script",
                      "ref": "web-search:0"
                    },
                    {
                      "type": "script",
                      "ref": "web-search:1"
                    },
                    {
                      "type": "operation",
                      "text": "讲完切 Trending",
                      "timing": "讲完后"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "搜索入口",
                          "url": "https://www.skills.sh/?q=frontend-design",
                          "location": "结果的作者与仓库列",
                          "purpose": "检索对象"
                        },
                        {
                          "label": "候选详情",
                          "url": "https://www.skills.sh/anthropics/skills/frontend-design",
                          "location": "Summary / SKILL.md / 安装命令 / Related Skills",
                          "purpose": "读取用途及来源"
                        },
                        {
                          "label": "Anthropic 源仓库",
                          "url": "https://github.com/anthropics/skills",
                          "location": "安装命令中的 GitHub 地址",
                          "purpose": "直接打开作者维护的完整项目"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "browse-topic",
              "number": "3.4.1.2.2",
              "title": "不知道名字时，看榜单与主题",
              "segments": [
                {
                  "id": "browse-topic-design",
                  "title": "不知道名字时，看榜单与主题",
                  "design": "切到 Trending，说明这里可以发现近期热门，热度不等于适合自己；再打开 Topics → Design & UI，看同类资源。搜索适合知道名字时用，主题适合还不知道选什么时逛。到这里结束 skills.sh，不逐个解释所有标签。",
                  "limits": "Trending 与 Topics → Design & UI 已在前轮走查。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "浏览器 · Trending → Topics → Design & UI"
                    },
                    {
                      "type": "script",
                      "ref": "web-topic:0"
                    },
                    {
                      "type": "script",
                      "ref": "web-topic:1"
                    },
                    {
                      "type": "operation",
                      "text": "讲完转 SkillsMP；不可用时直接去 Vercel 仓库",
                      "timing": "讲完后"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Trending",
                          "url": "https://www.skills.sh/trending",
                          "location": "榜单与安装列",
                          "purpose": "近期热门入口"
                        },
                        {
                          "label": "Design & UI",
                          "url": "https://www.skills.sh/topic/design",
                          "location": "Skills in this category",
                          "purpose": "按用途寻找"
                        },
                        {
                          "label": "榜单依据",
                          "url": "https://www.skills.sh/docs",
                          "location": "How skills are ranked",
                          "purpose": "备课依据，课堂一句说明"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "mp-filters",
              "number": "3.4.1.2.3",
              "title": "SkillsMP 只讲新增的筛选方式",
              "segments": [
                {
                  "id": "mp-filters-design",
                  "title": "SkillsMP 只讲新增的筛选方式",
                  "design": "SkillsMP 只补充筛选：搜索 frontend-design → 勾选 Name is exactly → 切 Recently updated。说明前者找完整同名条目，后者优先看最近维护的候选；语言、类别只指位置，不再逐项操作。结果正常时看一眼来源，即转 Vercel 仓库。若搜索服务仍报错，跳过这站，PPT 第 3 页仍保留入口。",
                  "limits": "2026-11-13 浏览器已正常加载；输入 frontend-design、勾选 Name is exactly、切换 Recently updated 后 URL 与选中状态正确，但结果区显示 Failed to load skills / Search is unavailable。只确认控件动作，未确认结果。",
                  "status": "可选补充 · 搜索结果服务待复查；当前主线直接进入 Vercel 仓库",
                  "preparation": "录前复查搜索服务与一条有结果的筛选路径；若仍不可用，按本段省略路线处理。",
                  "blocks": [
                    {
                      "type": "branch",
                      "condition": "录前搜索结果恢复，并确认筛选路径有实际结果",
                      "label": "SkillsMP 补充讲解与口播",
                      "blocks": [
                        {
                          "type": "location",
                          "text": "浏览器 · SkillsMP Search 的 Filters / Sort by"
                        },
                        {
                          "type": "script",
                          "ref": "web-mp:0"
                        },
                        {
                          "type": "operation",
                          "text": "讲完转 Vercel 仓库",
                          "timing": "讲完后"
                        },
                        {
                          "type": "materials",
                          "items": [
                            {
                              "label": "SkillsMP 搜索",
                              "url": "https://skillsmp.com/search",
                              "location": "Filters / Sort by",
                              "purpose": "展示区别于 skills.sh 的筛选方式"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "source-repository",
              "number": "3.4.1.2.4",
              "title": "到 GitHub 看提供者原文",
              "segments": [
                {
                  "id": "source-repository-design",
                  "title": "到 GitHub 看提供者原文",
                  "design": "从 Vercel README 的 web-design-guidelines 适用场景切入，以键盘操作说明可访问性检查的需要；进入 skills/web-design-guidelines/SKILL.md 简看指导，再回 README 指安装说明。只介绍阅读和安装入口，不完整带读或执行安装。 讲完直接切 Codex 插件目录。",
                  "limits": "已核对 README 的适用场景和目录入口；本段只看一种具体用途。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "浏览器 · vercel-labs/agent-skills"
                    },
                    {
                      "type": "script",
                      "ref": "web-repo:0"
                    },
                    {
                      "type": "script",
                      "ref": "web-repo:1"
                    },
                    {
                      "type": "operation",
                      "text": "讲完切 Codex 桌面端的插件入口",
                      "timing": "讲完后"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Vercel agent-skills",
                          "url": "https://github.com/vercel-labs/agent-skills",
                          "location": "Available Skills → react-best-practices / web-design-guidelines",
                          "purpose": "前端技术团队提供的指导"
                        },
                        {
                          "label": "Anthropic Skills",
                          "url": "https://github.com/anthropics/skills",
                          "location": "README 与 skills 目录；frontend-design",
                          "purpose": "Coding Agent 官方提供的集合"
                        },
                        {
                          "label": "Superpowers",
                          "url": "https://github.com/obra/superpowers",
                          "location": "README 的 Skills 列表：brainstorming、writing-plans、test-driven-development、systematic-debugging",
                          "purpose": "个人作者发起的开发工作流集合"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "codex-directory",
              "number": "3.4.1.2.6",
              "title": "在 Codex 里找插件与单个 Skill",
              "segments": [
                {
                  "id": "codex-directory-design",
                  "title": "在 Codex 里找插件与单个 Skill",
                  "design": "网站浏览结束后切 Codex 桌面端。先展示插件与技能两个选项；以 Game Studio 和 Gameplay Test 回扣前节，讲清插件可包含多份 Skill。搜索插件、打开详情看随附 Skill 与发布者，指出加号安装入口；再切技能，说明按单个 Skill 寻找与安装。保留讲师按需安装的提醒。讲完回 PPT 第 4 页，以找到的资源仍会变化接持续追踪。",
                  "limits": "沿用讲师本轮提供的桌面端观察；插件还可能提供工具，不将其定义为只有 Skill 的集合。本节只浏览和介绍安装入口，不实际安装。",
                  "status": "",
                  "preparation": "录前确认当前版本的插件／技能选项、Game Studio 搜索结果、随附 Skill 和加号位置。",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "Codex 桌面端 · 插件与技能目录"
                    },
                    {
                      "type": "script",
                      "ref": "app-codex:0"
                    },
                    {
                      "type": "script",
                      "ref": "app-codex:1"
                    },
                    {
                      "type": "script",
                      "ref": "app-codex:2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "follow",
      "number": "3.4.2",
      "title": "怎样持续追踪 AI Coding 的进展",
      "content": "整体讲述逻辑：承接前面已经找到的 Skill，直接说明模型能力提升会让部分 Skill 过时或被淘汰，再引出关注社区最近的调整与讨论趋势；作者案例留在 PPT 作为证据，不逐个讲经过。这段只负责引出“还要持续关注”，不展开生命周期理论。随后直接给信息源推荐：第 5 页讲官方渠道，帮助学员知道工具发布了什么、当前怎么用；第 6 页以 Karpathy 为例，介绍通过 X 关注动态、通过 YouTube 深入了解；其他推荐人选待讲师补充。两页按各自看点介绍，不重复前面的资源清单，也不要求来源只谈 Skill。需要让推荐更具体时，才短开活动或视频目录，看内容范围后回到 PPT。收在“所用工具的官方渠道，加一两位看得进去的作者即可”，然后转入整节的小技巧，不继续扩展订阅或信息管理流程。",
      "materials": [
        {
          "label": "Discussion 3.4.2",
          "url": "../../../../docs/outline/ch03-discussion.md#342-怎样持续追踪-ai-coding-的进展",
          "location": "3.4.2",
          "purpose": "分工与范围"
        }
      ],
      "groups": [
        {
          "id": "lifecycle",
          "number": "3.4.2.1",
          "title": "Skill 也会更新或淘汰",
          "screens": [
            {
              "id": "lifecycle-slide",
              "number": "3.4.2.1.1",
              "title": "从更新记录判断是否适用",
              "segments": [
                {
                  "id": "lifecycle-slide-design",
                  "title": "从更新记录判断是否适用",
                  "design": "PPT 保留 Matt 移除指导和 Superpowers 修改指导的两条证据及来源。第一步直接讲模型能力提升会让部分 Skill 过时或被淘汰；第二步引出社区会分享 Skill 的更新与取舍，可以看看近期的讨论趋势，再挑与自己任务相关的方法尝试。口播不完整复述谁在什么地方做了什么。后续官方、作者推荐和 tips 也直接表达观点与建议，人物资料和案例细节留在画面；网页讲解只保留帮助当前操作的说明。",
                  "limits": "不能推出模型变强必然淘汰全部 Skill，也不能把分发入口迁移等同能力淘汰。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "lifecycle-slide",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "lifecycle-slide:0"
                    },
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "lifecycle-slide",
                        "step": 1
                      }
                    },
                    {
                      "type": "script",
                      "ref": "lifecycle-slide:1"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Matt v1.3",
                          "url": "https://www.aihero.dev/skills-changelog-v13-implement-spec-pr-retro-and-glossary-md",
                          "location": "Removed: /resolving-merge-conflicts",
                          "purpose": "删除案例，2026-10-05；以中文转述为主"
                        },
                        {
                          "label": "Superpowers v6.4.2",
                          "url": "https://github.com/obra/superpowers/blob/main/RELEASE-NOTES.md#v642-2026-09-25",
                          "location": "Writing Plans",
                          "purpose": "更新案例，2026-09-25；不引用自报提效数字"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#lifecycle-slide"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "sources",
          "number": "3.4.2.2",
          "title": "直接推荐值得关注的官方与博主",
          "screens": [
            {
              "id": "official-slide",
              "number": "3.4.2.2.1",
              "title": "官方渠道：看变化，也看怎么用",
              "segments": [
                {
                  "id": "official-slide-design",
                  "title": "官方渠道：看变化，也看怎么用",
                  "design": "PPT 以正在用的 Codex 为主例，放更新记录和 Skill 文档；右侧用 Claude Code 的更新与活动录像、Cursor 的更新说明换工具也一样。先讲自己所用工具发布了什么、现在怎么用，再指活动和录像里的方法。Cursor 不逐条读版本日志。对视频只推荐主题目录，不宣称已观看整场。讲完可用官方活动目录短看一次内容范围，然后回 PPT 作者页。",
                  "limits": "活动介绍已核验，未观看完整视频；录制时核对官方重定向落点。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "official-slide",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "official-slide:0"
                    },
                    {
                      "type": "branch",
                      "condition": "仅需展示目录时选用；官方活动目录与 Karpathy 的 YouTube 频道二选一，默认均跳过，直接继续下一页 PPT",
                      "label": "可选网页补充",
                      "blocks": [
                        {
                          "type": "script",
                          "ref": "web-official:0"
                        }
                      ]
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Codex 更新",
                          "url": "https://developers.openai.com/codex/changelog/",
                          "location": "当前更新页（可能重定向）",
                          "purpose": "官方入口"
                        },
                        {
                          "label": "Codex Skill 文档",
                          "url": "https://developers.openai.com/codex/skills/",
                          "location": "当前支持说明",
                          "purpose": "查用法"
                        },
                        {
                          "label": "Claude Code 更新",
                          "url": "https://code.claude.com/docs/en/changelog",
                          "location": "版本条目",
                          "purpose": "官方更新"
                        },
                        {
                          "label": "Code with Claude",
                          "url": "https://claude.com/code-with-claude/san-francisco",
                          "location": "Claude Code 场次目录",
                          "purpose": "官方长视频入口"
                        },
                        {
                          "label": "Cursor 更新",
                          "url": "https://cursor.com/changelog",
                          "location": "版本列表",
                          "purpose": "按所用工具选读"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#official-slide"
                    }
                  ]
                }
              ]
            },
            {
              "id": "authors-slide",
              "number": "3.4.2.2.2",
              "title": "作者推荐：具体做法、实验和维护经验",
              "segments": [
                {
                  "id": "authors-slide-design",
                  "title": "作者推荐：具体做法、实验和维护经验",
                  "design": "第一步指 Karpathy 和左侧尾部朝向他的 X 气泡，气泡内有近期动态、社区讨论和 @karpathy。第二步在右侧展开 YouTube 卡片，并指下方关注清单。PPT 和口播只介绍关注方式、平台和已确认示例，详细名单另在关注清单人工整理，确认后发给学员。其他人选暂不预填。",
                  "limits": "未逐段观看频道视频，不讲述具体视频中未经核对的结果。",
                  "status": "关注清单已建协作稿；其他推荐与学员领取入口待讲师整理确认",
                  "preparation": "录制前确认关注清单已整理并可交付，再把口播“会整理一份”改为“整理了一份”，补实际领取位置。",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "authors-slide",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "authors-slide:0"
                    },
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "authors-slide",
                        "step": 1
                      }
                    },
                    {
                      "type": "script",
                      "ref": "authors-slide:1"
                    },
                    {
                      "type": "branch",
                      "condition": "仅需展示目录时选用；官方活动目录与 Karpathy 的 YouTube 频道二选一，默认均跳过，直接继续下一页 PPT",
                      "label": "可选网页补充",
                      "blocks": [
                        {
                          "type": "script",
                          "ref": "web-author:0"
                        }
                      ]
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Karpathy 个人网站",
                          "url": "https://karpathy.ai/",
                          "location": "YouTube 与 X 链接",
                          "purpose": "本人发布的账号入口与内容介绍"
                        },
                        {
                          "label": "Karpathy · X",
                          "url": "https://twitter.com/karpathy",
                          "location": "@karpathy",
                          "purpose": "近期动态与想法"
                        },
                        {
                          "label": "Karpathy · YouTube",
                          "url": "https://www.youtube.com/@AndrejKarpathy",
                          "location": "频道视频列表",
                          "purpose": "大模型原理与使用分享"
                        },
                        {
                          "label": "AI 信息源关注清单（协作稿）",
                          "url": "../../../../docs/research/ai-follow-list.md",
                          "location": "已确认人选与待补充表",
                          "purpose": "讲师人工整理；确认后交付学员，当前不发布"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#authors-slide"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tips",
      "number": "3.4.3",
      "title": "实用 tips",
      "content": "整体讲述逻辑：前两部分已经给出寻找入口与持续关注的来源，这里补三条可独立使用的小技巧，覆盖整节，不作为第二部分的延伸流程。先讲反向追踪，用 Matt 的仓库到作者网站这一条实际路径，把“发现一份 Skill”与“找到更多资源和作者”接起来；回到同一页，再用前面看过的搜索结果提醒辨认同名来源，用归档提示提醒留意维护状态。后两条只借熟悉对象点明新的注意处，不重走搜索，也不重复解释淘汰原因。三条讲完停在完整 PPT 上收束，让学员带走可回查的推荐和按需使用的技巧，不增加新的理论总结或作业。",
      "materials": [
        {
          "label": "Discussion 3.4.3",
          "url": "../../../../docs/outline/ch03-discussion.md#343-实用-tips",
          "location": "3.4.3",
          "purpose": "面向整节的补充"
        }
      ],
      "groups": [
        {
          "id": "small-tips",
          "number": "3.4.3.1",
          "title": "三个顺手可用的小技巧",
          "screens": [
            {
              "id": "tips-slide",
              "number": "3.4.3.1.1",
              "title": "反向找作者、辨认同名、留意归档",
              "segments": [
                {
                  "id": "tips-slide-design",
                  "title": "反向找作者、辨认同名、留意归档",
                  "design": "第 7 页依次给三个简短提示。先讲“喜欢一份 Skill，可以顺着作者找更多”：用 Matt 仓库作为眼前对象，找到 AI Hero 链接，说明从资源走到作者内容。回来再展开“同名看 owner/repo”，用前面 frontend-design 搜索结果作回指，不重走检索；最后“有安装按钮也看维护状态”，引用 Matt 归档页的 Archived 提示，不重复删除原因。最后停留三条建议，并提醒前面的推荐入口都可回查；不增设总结理论页或作业。",
                  "limits": "具体维护状态录前复核；这三个技巧互相独立，不作为每次都要执行的流程。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "tips-slide",
                        "step": 0
                      }
                    },
                    {
                      "type": "script",
                      "ref": "tips-slide:0"
                    },
                    {
                      "type": "script",
                      "ref": "web-reverse:0"
                    },
                    {
                      "type": "script",
                      "ref": "web-reverse:1"
                    },
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "tips-slide",
                        "step": 1
                      }
                    },
                    {
                      "type": "script",
                      "ref": "tips-slide:1"
                    },
                    {
                      "type": "location",
                      "text": "PPT",
                      "ppt": {
                        "id": "tips-slide",
                        "step": 2
                      }
                    },
                    {
                      "type": "script",
                      "ref": "tips-slide:2"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Matt 的 Skills 仓库",
                          "url": "https://github.com/mattpocock/skills",
                          "location": "About 的 aihero.dev/skills 与 README 内容入口",
                          "purpose": "反向追踪网页"
                        },
                        {
                          "label": "AI Hero Skills",
                          "url": "https://www.aihero.dev/skills",
                          "location": "作者提供的相关内容",
                          "purpose": "追踪落点"
                        },
                        {
                          "label": "归档 Skill 页面",
                          "url": "https://www.aihero.dev/skills-resolving-merge-conflicts",
                          "location": "Archived 提示与安装区域",
                          "purpose": "PPT 采用短截图或标注位置，不执行安装"
                        }
                      ]
                    },
                    {
                      "type": "preview",
                      "label": "展开本页 PPT 预览",
                      "url": "index.html?mode=slides#tips-slide"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

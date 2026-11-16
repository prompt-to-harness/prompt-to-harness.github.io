window.narrationData = {
  "section": "3.4",
  "title": "3.4 寻找值得体验的 Skill，持续追踪 AI Coding",
  "pptPlan": {
    "status": "阶段 3 · 7 页课件与对应口播已制作，讲述设计保留。SkillsMP 作为条件补充，录前须复查搜索结果；其余按主线使用 PPT 与现成网页。尚未经讲师试讲定稿。",
    "pages": [
      {
        "frames": "3.4.1.1.1 · 社区里已经有很多现成的 Skill",
        "content": "现成 Skill 的四组用途与代表",
        "progression": "先 UI 样例，再展开审查、规划、测试三个用途；具体名字留画面，不逐个介绍。",
        "id": "ui-opening"
      },
      {
        "frames": "3.4.1.1.2 · 找 Skill 的三个入口",
        "content": "聚合平台、GitHub、提供者：三种找法",
        "progression": "只讲三种找法，不提前列品牌或演示按钮；迅速切具体推荐。",
        "id": "platform-map"
      },
      {
        "frames": "3.4.1.1.3 · 先收藏这几个入口",
        "content": "七个推荐入口及各自看点",
        "progression": "具体名字和一句看点；随后网站只演示怎么找、怎么看，不重复推荐理由。",
        "id": "recommended-entries"
      },
      {
        "frames": "3.4.2.1.1 · 用实际删除例子引出持续关注",
        "content": "Skill 可能更新或不再需要：实际作者案例",
        "progression": "先 Matt 删除及条件，再用 Superpowers 更新补一句；引出关注来源。",
        "id": "lifecycle-slide"
      },
      {
        "frames": "3.4.2.2.1 · 官方渠道：看变化，也看怎么用",
        "content": "官方渠道：产品更新、用法、活动录像",
        "progression": "Codex、Claude 为主，Cursor 小型补充；网页按需。",
        "id": "official-slide"
      },
      {
        "frames": "3.4.2.2.2 · 作者推荐：具体做法、实验和维护经验",
        "content": "Matt、Simon 与进阶补充 Jesse",
        "progression": "按看点推荐，不念履历或粉丝数。",
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
      "content": "整体讲述逻辑：从上一节自己整理 UI 风格的经历接入，让学员先看到社区有现成选择，再把范围打开到审查、规划和测试。接着用三种找法组织资源入口，随即给具体推荐，让学员知道先去哪里。前三页 PPT 分别承担“有什么”“去哪找”“推荐哪些”，推荐清单在这里交代清楚，网站不再重讲推荐理由。进入网页后，用 frontend-design 走一次搜索和详情，再展示榜单、主题与条件筛选，解决“知道名字怎么找、不知道名字怎么逛”。随后用 Vercel 的一个适用场景说明找到以后看什么，最后短看设计项目的作品入口。讲到学员知道从哪开始、如何继续找、在哪里看用途与来源就收住；回到第 4 页，用“找到的资源以后也会变化”接入持续追踪。重点放在推荐与网页用法，分类短讲，不把初筛展开成评估课程。",
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
                  "design": "开篇停在 PPT，用一句话承接上一节自己整理 UI 风格的 Skill。先显示 frontend-design、Impeccable 和一张作者作品，说明社区已有现成的视觉设计指导；再展开三个用途卡片：前端审查（Vercel web-design-guidelines）、开发规划（Superpowers writing-plans）、测试（Superpowers test-driven-development）。卡片保留具体名字，口头只讲用途，不逐个读英文名称，也不介绍作者和网站。收在“除了自己做，也可以先找现成的”，切到寻找入口。",
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
                  "design": "这页只给三种找法，每种一句话：聚合平台——集中搜、按主题逛；GitHub——直接看项目与原文；提供者——从 Coding Agent 官方、技术团队或独立作者的发布入口找。画面用三个类别名和通用图标，不提前放下一页的品牌清单，也不讲搜索按钮和具体 Skill。“这些入口会重叠，同一个项目可能几处都能找到”一句带过，立即切具体推荐。",
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
                  "design": "沿用上一页的三个位置，直接放七个入口及一句看点：skills.sh 看主题与热门；SkillsMP 按条件筛选；anthropics/skills 看官方示例；vercel-labs/agent-skills 看前端指导；obra/superpowers 看开发工作流；Codex 插件目录按用途找插件，点到发布者与随附 Skill；Impeccable 看设计作品。对应标明官方团队或独立项目身份，不重复第 1 页的具体 Skill 用途。七个入口都留链接，口头重点点出下面会打开的几站；Anthropic 和 Superpowers 留给自行探索。接着说“先打开 skills.sh，拿刚才的 frontend-design 找一次”，进入浏览器。",
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
                  "design": "输入 frontend-design，选择 anthropics/skills。详情页只停两处：Summary 对照自己要做的事，SKILL.md 与 Repository 定位具体内容和来源，不在这里展开原文。用途第 1 页已经说过，不重新介绍项目。Related Skills 只指一下可以继续找相近资源，不逐项点击。随后看不知道名称时怎么逛。",
                  "limits": "搜索与详情路径已在浏览器走通；结果数量、名次不写进讲稿。",
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
                          "location": "Summary / SKILL.md / Repository / Related Skills",
                          "purpose": "读取用途及来源"
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
                  "design": "先说明从聚合平台发现候选后，可以回源仓库看适用场景，并交代换用前面推荐的 Vercel 作例子。打开 Vercel agent-skills，直接停在 web-design-guidelines 的 Use when，指“Check accessibility”这一项：如果当前需要检查界面可访问性，就有理由进一步看看它。随后指 skills 目录，说明从这里能进入具体指导。这里落实“是否适合我的任务”，不再介绍 Vercel、重列全部 Skill 或讲 GitHub History；维护状态留给后面的 tips。讲完短看设计类项目的另一种入口。",
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
                      "type": "operation",
                      "text": "讲完切 Impeccable Gallery",
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
              "id": "creator-gallery",
              "number": "3.4.1.2.5",
              "title": "到提供者网站看作品与适用方向",
              "segments": [
                {
                  "id": "creator-gallery-design",
                  "title": "到提供者网站看作品与适用方向",
                  "design": "打开 Impeccable Gallery，只指出作品集入口和可继续浏览的作品。开篇已经展示过酒店作品，这里不再放大它、不重讲风格，也不重复指 Docs / GitHub。只讲作品集这条直观找法，不再小结所有入口；回 PPT 第 4 页，再引出 Skill 会变化。",
                  "limits": "作者作品用于了解风格，不作为我们复现过的效果证明。",
                  "status": "",
                  "preparation": "",
                  "blocks": [
                    {
                      "type": "location",
                      "text": "浏览器 · Impeccable Gallery"
                    },
                    {
                      "type": "script",
                      "ref": "web-gallery:0"
                    },
                    {
                      "type": "operation",
                      "text": "讲完回 PPT 第 4 页",
                      "timing": "讲完后"
                    },
                    {
                      "type": "materials",
                      "items": [
                        {
                          "label": "Impeccable",
                          "url": "https://impeccable.style/",
                          "location": "Gallery 与设计说明",
                          "purpose": "独立设计项目；先看作品与用途"
                        },
                        {
                          "label": "Gallery",
                          "url": "https://impeccable.style/gallery/",
                          "location": "作品列表",
                          "purpose": "展示继续浏览作品的入口，不重讲开篇样例"
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
    },
    {
      "id": "follow",
      "number": "3.4.2",
      "title": "怎样持续追踪 AI Coding 的进展",
      "content": "整体讲述逻辑：承接前面已经找到的 Skill，先用作者实际删除和更新指导的例子说明，今天有用的内容以后也可能需要调整。这段只负责引出“还要持续关注”，不展开生命周期理论。随后直接给信息源推荐：第 5 页讲官方渠道，帮助学员知道工具发布了什么、当前怎么用；第 6 页讲实践者，帮助学员看到具体做法、实验和后续修正。两页按各自看点介绍，不重复前面的资源清单，也不要求来源只谈 Skill。需要让推荐更具体时，才短开活动或视频目录，看内容范围后回到 PPT。收在“所用工具的官方渠道，加一两位看得进去的作者即可”，然后转入整节的小技巧，不继续扩展订阅或信息管理流程。",
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
              "title": "用实际删除例子引出持续关注",
              "segments": [
                {
                  "id": "lifecycle-slide-design",
                  "title": "用实际删除例子引出持续关注",
                  "design": "先展示 Matt 的 resolving-merge-conflicts：作者曾提供，后来移除，理由是自己的 agent 已能处理；旁边保留“较弱模型可能仍需要”。讲清这是作者在自己的使用条件下的取舍。再用一条短注说明 Superpowers 也因模型规划行为改变而更新 writing-plans；不展开具体规划方法。收在“今天找到的好东西，后面也值得继续看它怎么变”，顺势给官方和作者推荐。",
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
                  "design": "PPT 并列 Codex 更新与文档、Claude Code 更新与官方活动录像。先给每组“看什么”：功能与当前用法；工程经验与工作流示范。Cursor 更新入口放小型补充，不逐条读版本日志。对视频只推荐主题目录，不宣称已观看整场。讲完可用官方活动目录短看一次内容范围，然后回 PPT 作者页。",
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
                      "condition": "仅需展示目录时选用；官方活动目录与 AI Hero 视频目录二选一，默认均跳过，直接继续下一页 PPT",
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
                  "design": "PPT 重点给 Matt 与 Simon：前者有 Skill、文章、视频及纠偏，后者长期记录实验并提供原始材料。Jesse 放进阶补充，看实际工作流为什么调整。不重复 lifecycle 的两个故事。给一个简单起步建议：所用工具的官方渠道，加一两位自己看得进去的作者即可；无需追完。网页展示选 Matt 的视频目录，看选题而不播放付费内容，随后进入 tips。",
                  "limits": "作者推荐不等于认可其全部理论；目录含付费内容，课堂仅浏览公开介绍。",
                  "status": "",
                  "preparation": "",
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
                      "condition": "仅需展示目录时选用；官方活动目录与 AI Hero 视频目录二选一，默认均跳过，直接继续下一页 PPT",
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
                          "label": "AI Hero 视频与文章",
                          "url": "https://www.aihero.dev/videos",
                          "location": "开发相关选题卡片",
                          "purpose": "Matt 的持续内容入口"
                        },
                        {
                          "label": "Simon Skills 专题",
                          "url": "https://simonwillison.net/tags/skills/",
                          "location": "日期与文章列表",
                          "purpose": "持续实验入口"
                        },
                        {
                          "label": "Jesse 博客",
                          "url": "https://blog.fsck.com/",
                          "location": "文章列表",
                          "purpose": "工作流维护经验"
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

window.narrationData = {
  "section": "3.3",
  "title": "3.3 修改 Skill，并用它开发躲避游戏",
  "parts": [
    {
      "id": "part-1",
      "number": "3.3.1",
      "title": "从已有材料实操生成并审阅 Skill",
      "content": "生成、安装与调用后，依次看方案一、二、三的游戏效果，再进入方案一界面过小的完整迭代例子。",
      "effect": "能对照实际文件说出复用方式的差别，并通过游戏检查风格与布局；不把单次产物差异当作创建方法排名。",
      "materials": [
        {
          "label": "第三章 Discussion",
          "url": "../../../../docs/outline/ch03-discussion.md"
        }
      ],
      "groups": [
        {
          "id": "group-1-1",
          "number": "3.3.1.1",
          "title": "生成方式怎样选择",
          "screens": [
            {
              "id": "reference",
              "number": "3.3.1.1.1",
              "title": "把已有作品里的经验保存下来",
              "screen": "紫色翻牌作品截图",
              "operation": "打开参考作品，指紫色视觉、数据卡和结算画面。",
              "points": "新增开场：先明确想复用什么，再解释创建方式。 全节口播约定（讲师要求）：后面实际操作、展示的细节不在前面复述；要求在 Prompt 展示处讲，结果在实际文件或试玩处讲，转场只留必要承接。",
              "materials": [
                {
                  "label": "参考作品 · 开局截图",
                  "url": "evidence/reference.png"
                },
                {
                  "label": "参考作品 · 结算截图",
                  "url": "evidence/reference-win.png"
                }
              ],
              "transition": "先看创建过程与内容依据这两个选择。",
              "script": "【操作提示｜打开参考作品截图，依次指背景、数据卡和结算浮层】\n\n前面我们用过、也读过 Skill。这一节，试着第一小节紫色的视觉风格整理成 Skill。\n\n让后面的小游戏都能待到类似的视觉效果。",
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜打开参考作品截图，依次指背景、数据卡和结算浮层】",
                  "labels": [
                    "参考作品 · 开局截图"
                  ]
                }
              ],
              "displayCueOverrides": {
                "0": "打开参考作品的开局截图，指背景、数据卡和按钮"
              }
            },
            {
              "id": "creation-methods",
              "title": "先整理上下文，再选择创建方式",
              "screen": "PPT · 材料与创建方式 → 三个方法模块",
              "operation": "展示已有开发对话、源码和截图；用一句话引出三种创建方式，具体路径与要求在对应 Prompt 处讲。",
              "points": "官方建议从任务与项目资料出发；Codex 提供内置创建工具。本课据此安排三次实操，不声称官方规定了三种互斥方法。 讲师要求：开场只用两三句话交代；后面会实际展示并发送 Prompt，文件路径和请求细节留到操作时讲，不提前复述。",
              "transition": "先在终端从同一份作品材料直接提炼。",
              "script": "【操作提示｜打开“先把已有对话和成品交给 AI”PPT，依次指开发对话、源码和截图的对应路径】\n\n我们可以让 AI 来帮我做，当然我们需要把足够的上下文给到他，例如我这里把开发对话、最终源码和截图交给 AI，让它帮我们整理。\n我们给他一些额外的上下文，让他以不同的方式进行整理，这里展示三种常见的方式。",
              "materials": [
                {
                  "label": "PPT · 材料与创建方式",
                  "url": "index.html?mode=slides#creation-evidence"
                },
                {
                  "label": "Agent Skills · 真实经验与项目材料",
                  "url": "https://agentskills.io/skill-creation/best-practices#start-from-real-expertise"
                },
                {
                  "label": "OpenAI · 内置 skill-creator",
                  "url": "https://learn.chatgpt.com/docs/build-skills#create-a-skill"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "number": "3.3.1.1.2",
              "cueMaterials": [
                {
                  "match": "【操作提示｜打开“先把已有对话和成品交给 AI”PPT，依次指开发对话、源码和截图的对应路径】",
                  "labels": [
                    "PPT · 材料与创建方式"
                  ]
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "creation-evidence",
                  "step": 0
                }
              }
            }
          ]
        },
        {
          "id": "group-creation-demos",
          "number": "3.3.1.2",
          "title": "在终端完成三次生成",
          "screens": [
            {
              "id": "demo-direct",
              "number": "3.3.1.2.1",
              "title": "从已有上下文直接生成",
              "screen": "PPT 官方截图 → PPT 完整 Prompt → 复制确认 → 终端发送 → 读取记录与输出",
              "operation": "展示本方法与完整请求，复制并发送；生成后只确认输出目录，再切下一步。",
              "points": "本段只讲请求怎样写、怎样发送。三种方式全部结束后，再统一打开 Skill 和游戏作简短对比；历史 YAML 修复留在备查记录，不进入主讲。",
              "transition": "返回下一张方法 PPT，先读官方截图。",
              "status": "创建演示已有预跑；具体产物比较统一进入后面的三组材料。",
              "materials": [
                {
                  "label": "PPT · 完整请求与复制",
                  "url": "index.html?mode=slides#create-direct"
                },
                {
                  "label": "三次演示准备与检查",
                  "url": "creation-demo-guide.html#direct"
                },
                {
                  "label": "Inspect · 本例实际读取与输出",
                  "url": "http://127.0.0.1:4397/inspect/?topic=create-direct"
                }
              ],
              "script": "【操作提示｜PPT｜打开第 2 页“从已有上下文直接生成”，保持完整 Prompt 关闭；先带读左侧原文截图与圈注，再指右侧手绘流程】\n\n第一种，直接让 AI 从这些材料里提炼经验。\n\n【操作提示｜PPT｜点击“查看完整 Prompt”；先定位“目标”和“上下文”，再向下滚动到“约束”和“完成标准”，此时不复制、不切窗口】\n\n我把材料路径写在请求里，也可以让它自己找。这里特别说明：提炼通用的紫色风格，把翻牌专属的规则分开。\n\n【操作提示｜PPT｜点击弹窗内“复制完整 Prompt”，确认“已复制”；关闭弹窗，停在右侧手绘流程】\n\n【操作提示｜终端｜使用准备入口的 direct 启动命令打开独立录制工作区；先列出 source-game/、source-game/docs/ 和 source-dialogue.md，再粘贴刚复制的请求，检查完整后发送】\n\n【操作提示｜终端｜等待可快进；生成结束后只确认 purple-game-ui 目录已生成，随后切到下一种方式。正文、配套文件和历史修复记录不在这里展开】\n\n【切换｜PPT：返回第 3 页，关闭上例 Prompt；开始下一种创建方式】",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT｜打开第 2 页“从已有上下文直接生成”，保持完整 Prompt 关闭；先带读左侧原文截图与圈注，再指右侧手绘流程】",
                  "labels": [
                    "PPT · 完整请求与复制"
                  ]
                },
                {
                  "match": "【操作提示｜PPT｜点击“查看完整 Prompt”；先定位“目标”和“上下文”，再向下滚动到“约束”和“完成标准”，此时不复制、不切窗口】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜PPT｜点击弹窗内“复制完整 Prompt”，确认“已复制”；关闭弹窗，停在右侧手绘流程】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端｜使用准备入口的 direct 启动命令打开独立录制工作区；先列出 source-game/、source-game/docs/ 和 source-dialogue.md，再粘贴刚复制的请求，检查完整后发送】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端｜等待可快进；生成结束后只确认 purple-game-ui 目录已生成，随后切到下一种方式。正文、配套文件和历史修复记录不在这里展开】",
                  "labels": []
                },
                {
                  "match": "【切换｜PPT：返回第 3 页，关闭上例 Prompt；开始下一种创建方式】",
                  "labels": []
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "create-direct",
                  "step": 0
                },
                "2": {
                  "id": "create-direct",
                  "step": 0
                },
                "4": {
                  "id": "create-direct",
                  "step": 0
                },
                "7": {
                  "id": "create-creator",
                  "step": 0
                }
              },
              "suppressCues": [
                2,
                4,
                7
              ],
              "displayCueOverrides": {
                "0": "PPT：打开“从已有上下文直接生成”，先讲原文截图与流程；讲到请求时打开完整 Prompt，依次指目标、上下文、约束和完成标准；讲完复制并关闭，再切终端发送"
              }
            },
            {
              "id": "demo-creator",
              "number": "3.3.1.2.2",
              "title": "调用内置 skill-creator 生成",
              "screen": "PPT 官方截图 → PPT 完整 Prompt → 复制确认 → 终端发送 → 读取记录与输出",
              "operation": "展示本方法与完整请求，复制并发送；生成后只确认输出目录，再切下一步。",
              "points": "本段只讲请求怎样写、怎样发送。三种方式全部结束后，再统一打开 Skill 和游戏作简短对比；历史 YAML 修复留在备查记录，不进入主讲。",
              "transition": "返回下一张方法 PPT，先读官方截图。",
              "status": "创建演示已有预跑；具体产物比较统一进入后面的三组材料。",
              "materials": [
                {
                  "label": "PPT · 完整请求与复制",
                  "url": "index.html?mode=slides#create-creator"
                },
                {
                  "label": "三次演示准备与检查",
                  "url": "creation-demo-guide.html#creator"
                },
                {
                  "label": "Inspect · 本例实际读取与输出",
                  "url": "http://127.0.0.1:4397/inspect/?topic=create-creator"
                }
              ],
              "script": "【操作提示｜PPT｜从上一例终端返回第 3 页“调用内置 skill-creator 生成”；保持 Prompt 关闭，先指左侧原文截图中的 Codex 和 $skill-creator】\n\n第二种，用 Codex 内置的 skill-creator 帮我们创建。\n\n【操作提示｜PPT｜点击“查看完整 Prompt”，先指第一行 $skill-creator，再带读目标、上下文、约束和完成标准】\n\nprompt 和第一种类似，请求开头加上 $skill-creator\n\n【操作提示｜PPT｜点击“复制完整 Prompt”，确认“已复制”，关闭弹窗；指右侧流程中的 $skill-creator】\n\n换个新会话，发送这条请求。\n\n【操作提示｜终端｜使用准备入口的 creator 启动命令打开独立录制工作区；确认与第一例相同的材料文件，粘贴并发送请求】\n\n【操作提示｜终端｜等待可快进；生成结束后只确认 purple-game-ui 目录已生成，随后切到下一种方式】\n\n【切换｜PPT：返回第 4 页，关闭上例 Prompt；开始下一种创建方式】",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT｜从上一例终端返回第 3 页“调用内置 skill-creator 生成”；保持 Prompt 关闭，先指左侧原文截图中的 Codex 和 $skill-creator】",
                  "labels": [
                    "PPT · 完整请求与复制"
                  ]
                },
                {
                  "match": "【操作提示｜PPT｜点击“查看完整 Prompt”，先指第一行 $skill-creator，再带读目标、上下文、约束和完成标准】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜PPT｜点击“复制完整 Prompt”，确认“已复制”，关闭弹窗；指右侧流程中的 $skill-creator】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端｜使用准备入口的 creator 启动命令打开独立录制工作区；确认与第一例相同的材料文件，粘贴并发送请求】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端｜等待可快进；生成结束后只确认 purple-game-ui 目录已生成，随后切到下一种方式】",
                  "labels": []
                },
                {
                  "match": "【切换｜PPT：返回第 4 页，关闭上例 Prompt；开始下一种创建方式】",
                  "labels": []
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "create-creator",
                  "step": 0
                },
                "2": {
                  "id": "create-creator",
                  "step": 0
                },
                "4": {
                  "id": "create-creator",
                  "step": 0
                },
                "8": {
                  "id": "create-reference",
                  "step": 0
                }
              },
              "suppressCues": [
                2,
                4,
                8
              ],
              "displayCueOverrides": {
                "0": "PPT：打开“调用内置 skill-creator 生成”，先讲原文截图与流程；讲到请求时展开完整 Prompt，指 $skill-creator 和四要素；讲完复制并关闭，再切终端发送"
              }
            },
            {
              "id": "demo-reference",
              "number": "3.3.1.2.3",
              "title": "补充 Reference 后生成",
              "screen": "PPT 官方截图 → PPT 完整 Prompt → 复制确认 → 终端发送 → 读取记录与输出",
              "operation": "展示本方法与完整请求，复制并发送；生成后只确认输出目录，再切下一步。",
              "points": "本段只讲请求怎样写、怎样发送。三种方式全部结束后，再统一打开 Skill 和游戏作简短对比；历史 YAML 修复留在备查记录，不进入主讲。",
              "transition": "留在第三份生成会话，发送安装请求。",
              "status": "创建演示已有预跑；具体产物比较统一进入后面的三组材料。",
              "materials": [
                {
                  "label": "PPT · 完整请求与复制",
                  "url": "index.html?mode=slides#create-reference"
                },
                {
                  "label": "三次演示准备与检查",
                  "url": "creation-demo-guide.html#reference"
                },
                {
                  "label": "Reference 原文 · 固定版本",
                  "url": "https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/skills/game-ui-frontend/SKILL.md#frontend-standards"
                },
                {
                  "label": "Inspect · 本例实际读取与输出",
                  "url": "http://127.0.0.1:4397/inspect/?topic=create-reference"
                }
              ],
              "script": "【操作提示｜PPT｜从上一例终端返回第 4 页“补充 Reference 后生成”；保持 Prompt 关闭，先带读左侧原文截图与圈注，再指右侧“材料 + Reference”】\n\n第三种，给模型一个同类型的 skill 作为参考，这里以 game-ui-frontend 为参考。\n\n【操作提示｜PPT｜点击“查看完整 Prompt”；先指共同的材料路径，再滚动到 reference/game-ui-frontend.md、借鉴原则及排除项】\n\nPrompt 里面和他说明了想要它参考什么，不参考什么，例如希望借鉴按玩法安排读数和逐步展示信息的原则，不要参考三维游戏要求。\n这一例不调用 skill-creator，单独看补充参考的做法；\n当然，我们也可以把两种方式结合起来。\n\n【操作提示｜PPT｜点击“复制完整 Prompt”，确认“已复制”，关闭弹窗；此时再切终端】\n\n【操作提示｜终端｜使用准备入口的 reference 启动命令打开工作区；展示原有材料及 reference/game-ui-frontend.md，粘贴、核对并发送请求】\n\n【操作提示｜终端：等待第三份生成完成，确认 purple-game-ui/SKILL.md 已落盘，停在这个会话。下一步直接让它安装，不先打开保存的对比结果】",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT｜从上一例终端返回第 4 页“补充 Reference 后生成”；保持 Prompt 关闭，先带读左侧原文截图与圈注，再指右侧“材料 + Reference”】",
                  "labels": [
                    "PPT · 完整请求与复制"
                  ]
                },
                {
                  "match": "【操作提示｜PPT｜点击“查看完整 Prompt”；先指共同的材料路径，再滚动到 reference/game-ui-frontend.md、借鉴原则及排除项】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜PPT｜点击“复制完整 Prompt”，确认“已复制”，关闭弹窗；此时再切终端】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端｜使用准备入口的 reference 启动命令打开工作区；展示原有材料及 reference/game-ui-frontend.md，粘贴、核对并发送请求】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端：等待第三份生成完成，确认 purple-game-ui/SKILL.md 已落盘，停在这个会话。下一步直接让它安装，不先打开保存的对比结果】",
                  "labels": []
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "create-reference",
                  "step": 0
                },
                "2": {
                  "id": "create-reference",
                  "step": 0
                },
                "4": {
                  "id": "create-reference",
                  "step": 0
                }
              },
              "suppressCues": [
                2,
                4
              ],
              "displayCueOverrides": {
                "0": "PPT：打开“补充 Reference 后生成”，先讲原文截图与流程；讲到请求时展开完整 Prompt，指材料路径、Reference、借鉴原则与排除项；讲完复制并关闭，再切终端发送"
              }
            }
          ]
        },
        {
          "id": "group-1-3",
          "number": "3.3.1.3",
          "title": "安装调用，再看保存结果",
          "screens": [
            {
              "id": "slide-2",
              "number": "3.3.1.3.1",
              "title": "安装第三份 Skill，再调用它开发游戏",
              "screen": "第三份生成会话 → 安装 → 游戏项目新会话 → 发送开发请求",
              "operation": "在第三份生成会话中，让 AI 把 Skill 安装到旁边的 ../game-reference 游戏项目；确认完整包已安装。从目标项目新开会话发送开发请求，等待时切到保存结果。",
              "points": "本段教安装与调用：在生成原对话委托安装完整 Skill；在游戏项目调用时指定 Skill 和新任务。窗口切换只进操作提示，不把讲解重心放在终端动作。",
              "materials": [
                {
                  "label": "三份 Skill 与游戏对比",
                  "url": "evidence/creation-comparison/index.html#skills"
                },
                {
                  "label": "PPT：三组与共用开发请求",
                  "url": "index.html?mode=slides#skill-inputs"
                }
              ],
              "transition": "等待现场任务时，切到保存案例，先看 Skill 再看游戏。",
              "script": "【操作提示｜终端：留在方案三生成 Skill 的原对话。展开本步安装请求，确认 ../game-reference 是旁边的游戏项目，直接复制并发送；目标已有旧结果时另用空目录并同步修改请求】\n\n我们看一下第一种方式的 skill 是不是生成好了，\n我们让 AI 把它安装到游戏项目，后面做游戏就能调用它。\n让 skill 去安装上了，后面我们有类似需求的时候，我们就可以通过调用这个 Skill 来生成同风格的小游戏。\n\n【操作提示｜终端：等待安装完成，查看 ../game-reference/.agents/skills/purple-game-ui/，确认 SKILL.md 与配套文件齐全。另开终端进入 game-reference，启动 Codex；确认当前工作目录为游戏项目。终端切换只操作，不口述】\n\n【操作提示｜PPT：展开第 5 页的开发请求，指使用 Skill 的路径与游戏玩法，复制请求；切回游戏项目会话粘贴并发送。本步下方提供同一条完整请求】\n\n我提前用这三版 Skill 生成了同一个躲避的小游戏，我们来看一下这三个 skill 的具体效果怎么样\n\n【切换｜浏览器：保留现场任务运行，打开“三种方案的游戏效果”HTML 页面；页面显示“提前准备的结果”，不把保存游戏当作本次现场输出】\n\n",
              "status": "安装与调用操作已写入录制稿；现场新任务尚未执行。保存的三款游戏已检查移动、结算和重开。",
              "prompts": [
                {
                  "label": "安装第三份 Skill · 在生成会话发送",
                  "text": "把刚生成的 Skill 安装到旁边的 ../game-reference 游戏项目，配套文件一起带上，保留原件。"
                },
                {
                  "label": "第三份 Skill · 新项目开发请求（三组共用）",
                  "text": "使用当前工作区 .agents/skills/purple-game-ui/SKILL.md，从空项目做一个「60 秒躲避与收集」网页小游戏，沿用 Skill 的紫色界面风格。玩家用方向键或 WASD 移动，躲避障碍，收集物品得分；碰撞扣生命，时间到或生命耗尽时结算，可以重开。只做单一难度，界面不提供难度选择。游玩时界面只显示时间、得分和生命，重开按钮只出现在结算画面。用原生 HTML/CSS/JS，入口放在根目录 index.html。保持 Skill 文件不变，完成后告诉我用了哪些 Skill 文件。浏览器试玩留给我。\n"
                }
              ],
              "cueMaterials": [
                {
                  "match": "【操作提示｜终端：留在方案三生成 Skill 的原对话。展开本步安装请求，确认 ../game-reference 是旁边的游戏项目，直接复制并发送；目标已有旧结果时另用空目录并同步修改请求】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜终端：等待安装完成，查看 ../game-reference/.agents/skills/purple-game-ui/，确认 SKILL.md 与配套文件齐全。另开终端进入 game-reference，启动 Codex；确认当前工作目录为游戏项目。终端切换只操作，不口述】",
                  "labels": []
                },
                {
                  "match": "【操作提示｜PPT：展开第 5 页的开发请求，指使用 Skill 的路径与游戏玩法，复制请求；切回游戏项目会话粘贴并发送。本步下方提供同一条完整请求】",
                  "labels": [
                    "PPT：三组与共用开发请求"
                  ]
                },
                {
                  "match": "【切换｜浏览器：保留现场任务运行，打开“三种方案的游戏效果”HTML 页面；页面显示“提前准备的结果”，不把保存游戏当作本次现场输出】",
                  "labels": [
                    "三份 Skill 与游戏对比"
                  ]
                }
              ],
              "cuePpt": {
                "3": {
                  "id": "skill-inputs"
                }
              }
            },
            {
              "id": "review-defaults",
              "number": "3.3.1.3.2",
              "title": "依次看三个方案的游戏效果",
              "screen": "三款已保存游戏 → 方案三试玩",
              "operation": "依次试玩方案一、二、三；只观察效果，不提前展开声音迭代。最后返回方案一的问题画面。",
              "points": "使用结果帮助发现值得改进的问题；先看全貌，再一次讲完整一个迭代例子。",
              "materials": [
                {
                  "label": "三份 Skill 与游戏对比",
                  "url": "evidence/creation-comparison/index.html#skills"
                },
                {
                  "label": "PPT：三组与共用开发请求",
                  "url": "index.html?mode=slides#skill-inputs"
                }
              ],
              "transition": "从方案一界面过小进入第一个完整迭代例子。",
              "script": "【操作提示｜浏览器：打开“三种方案的游戏效果”。按方案一、方案二、方案三依次打开试玩；每款观察风格、场地和基本操作后关闭标签，再开下一款，避免声音串入。此处只看效果，不展开原因或修改】\n\n同样是躲避与收集游戏，三份 Skill 基本都符合我们想要紫色风格，但是其他的具体效果还是有差别。\n我们先看方案一，再看方案二和三。\n\n【操作提示｜浏览器：三款看完后回汇总页，再打开方案一，停在实验中界面过小的画面。下一部分沿这个问题完整展开，不先讲方案三的声音需求】",
              "status": "方案一、三的代码与后续历史游戏逐文件一致；方案三 Skill 与音效迭代原稿逐字节一致。录前仍需人工试听与收音确认。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜浏览器：打开“三种方案的游戏效果”。按方案一、方案二、方案三依次打开试玩；每款观察风格、场地和基本操作后关闭标签，再开下一款，避免声音串入。此处只看效果，不展开原因或修改】",
                  "labels": [
                    "三份 Skill 与游戏对比"
                  ]
                },
                {
                  "match": "【操作提示｜浏览器：三款看完后回汇总页，再打开方案一，停在实验中界面过小的画面。下一部分沿这个问题完整展开，不先讲方案三的声音需求】",
                  "labels": []
                }
              ]
            }
          ]
        },
        {
          "id": "group-1-2",
          "number": "3.3.1.4",
          "title": "进入第一个迭代例子",
          "screens": [
            {
              "id": "slide-1",
              "number": "3.3.1.4.1",
              "title": "先处理界面过小的问题",
              "screen": "方案一修改前游戏",
              "operation": "保持方案一画面，进入第一个例子。",
              "points": "先完整讲界面过小，再讲方案三加声音；不在两个例子间往返。",
              "transition": "进入 3.3.2 的原因定位、修改与独立验证。",
              "materials": [
                {
                  "label": "三方案游戏汇总",
                  "url": "evidence/creation-comparison/index.html"
                },
                {
                  "label": "方案一修改前游戏",
                  "url": "evidence/creation-comparison/direct/index.html"
                }
              ],
              "script": "【切换｜浏览器：保持方案一修改前的游戏画面，进入 3.3.2；不切回方案三或声音来源材料】\n\n",
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "cueMaterials": [
                {
                  "match": "【切换｜浏览器：保持方案一修改前的游戏画面，进入 3.3.2；不切回方案三或声音来源材料】",
                  "labels": [
                    "方案一修改前游戏"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "part-2",
      "number": "3.3.2",
      "title": "例一：定位并修复界面过小的问题",
      "content": "围绕方案一连续讲问题、原因、修改和新对话验证。实际请求、回复、Inspect 日志、Skill 差异与新游戏已归档；单轮场地问题未复现，其他玩法待验证。",
      "effect": "能用证据判断该改游戏还是 Skill，并通过新对话检查改进能否复用。",
      "materials": [
        {
          "label": "三方案游戏汇总",
          "url": "evidence/creation-comparison/index.html"
        },
        {
          "label": "方案一修改前游戏",
          "url": "evidence/creation-comparison/direct/index.html"
        }
      ],
      "groups": [
        {
          "id": "group-size-iteration",
          "number": "3.3.2.1",
          "title": "把问题说具体",
          "screens": [
            {
              "id": "size-problem",
              "number": "3.3.2.1.1",
              "title": "例一：界面过小，从效果提出问题",
              "screen": "方案一修改前的实际游戏",
              "operation": "打开修改前截图（1280×920）并试玩方案一，指出场地约 99×74；返回 PPT，转到实际排查请求。",
              "points": "把可观察的问题和想改善的效果交给 AI；此时只确认现象，不预设是 Skill、样式或游戏实现造成。",
              "materials": [
                {
                  "label": "PPT：问题截图与试玩",
                  "url": "index.html?mode=slides#skill-files"
                },
                {
                  "label": "三方案游戏汇总",
                  "url": "evidence/creation-comparison/index.html"
                },
                {
                  "label": "方案一修改前游戏",
                  "url": "evidence/creation-comparison/direct/index.html"
                }
              ],
              "status": "本轮真实材料已归档并接入；场地、窄屏、扣生命、结算和重开已核对。收集得分、人工试听、其他玩法回归与讲师试讲待完成。",
              "script": "【操作提示｜PPT：打开“方案一：风格保留了，场地却太小”，指场地位置；点“打开游戏”试玩，随后回到 PPT】\n\n这里整个视觉风格还可以，还有文字的玩法提示，但是游戏的界面明显有问题，太小了。\n我们试试，看看能不能玩。\n\n粗略看起来除了游戏界面大小外，其他的功能都是正常的。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT：打开“方案一：风格保留了，场地却太小”，指场地位置；点“打开游戏”试玩，随后回到 PPT】",
                  "labels": [
                    "PPT：问题截图与试玩"
                  ]
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "skill-files",
                  "step": 0
                }
              }
            }
          ]
        },
        {
          "id": "group-size-2",
          "number": "3.3.2.2",
          "title": "用证据判断该改哪里",
          "screens": [
            {
              "id": "size-diagnosis",
              "number": "3.3.2.2.1",
              "title": "提出问题，进入实际请求",
              "screen": "实际诊断日志 → 对应游戏代码或 Skill 原句",
              "operation": "PPT 提出问题；说完“我们看一下提前跑的运行日志”就进入 Inspect，按目标、上下文、要求讲实际 Prompt。",
              "points": "如果只是游戏实现的问题，改游戏；如果是 Skill 中的指导或配套资源把问题带到新项目，修改对应源头。不能凭一次解释直接定因。",
              "materials": [
                {
                  "label": "实际 Prompt · Inspect",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=0"
                },
                {
                  "label": "PPT：提出问题",
                  "url": "index.html?mode=slides#size-request"
                }
              ],
              "status": "本轮真实材料已归档并接入；场地、窄屏、扣生命、结算和重开已核对。收集得分、人工试听、其他玩法回归与讲师试讲待完成。",
              "script": "【操作提示｜PPT：打开“把问题交给 AI，先找主要原因”，先停在请求重点；不在 PPT 重复展开讲完整 Prompt】\n\n把这个问题交给 AI，让它查清楚原因。\n关键是查清楚问题从哪里来：看看这次游戏实现哪里出了错，是 Skill 里有没有不合理的指导，还是模型写代码出了问题\n\n我们看一下提前跑的运行日志。\n\n【切换｜Inspect：点击本段“实际 Prompt · Inspect”，进入排查记录的第一条“实际发送请求”。先指目标，再指截图、源码、Skill 和生成记录路径，最后指先分析、找主要原因和给出建议的要求】\n\n我这里是新开了一个对话，把任务目标和必要的上下文一起给到了它。\n\n让它结合截图、代码、Skill 和生成记录，先找主要原因，再给修改建议。",
              "transition": "在同一个 Inspect 页面看 AI 回复，不先回 PPT。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT：打开“把问题交给 AI，先找主要原因”，先停在请求重点；不在 PPT 重复展开讲完整 Prompt】",
                  "labels": [
                    "PPT：提出问题"
                  ]
                },
                {
                  "match": "【切换｜Inspect：点击本段“实际 Prompt · Inspect”，进入排查记录的第一条“实际发送请求”。先指目标，再指截图、源码、Skill 和生成记录路径，最后指先分析、找主要原因和给出建议的要求】",
                  "labels": [
                    "实际 Prompt · Inspect"
                  ]
                }
              ],
              "inspectBefore": [
                {
                  "part": 4,
                  "label": "Inspect AI · 第一步 · 实际发送请求",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=0"
                }
              ],
              "suppressCues": [
                3
              ],
              "cuePpt": {
                "0": {
                  "id": "size-request",
                  "step": 0
                }
              }
            },
            {
              "id": "size-diagnosis-reply",
              "number": "3.3.2.2.2",
              "title": "在 Inspect 里看分析回复",
              "screen": "Inspect：实际最终回复",
              "operation": "在同一个 Inspect 页面依次点击“下一处”，查看第二步“场地变小的直接原因”和第三步“Skill 的上游原因”。",
              "points": "如果只是游戏实现的问题，改游戏；如果是 Skill 中的指导或配套资源把问题带到新项目，修改对应源头。不能凭一次解释直接定因。",
              "materials": [
                {
                  "label": "排查回复 · 连续看原因与建议",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=1"
                }
              ],
              "status": "本轮真实材料已归档并接入；场地、窄屏、扣生命、结算和重开已核对。收集得分、人工试听、其他玩法回归与讲师试讲待完成。",
              "script": "【操作提示｜Inspect：从第一步“实际发送请求”点“下一处”，依次查看第二步“场地变小的直接原因”和第三步“Skill 的上游原因”】\n\n它给出的结论是，游戏里的两条样式发生了冲突，后面的网格样式覆盖了新样式，把画布挤进了网格的第一列。这是场地变小的直接原因。\n\n我们看下面这一条，大概的意思就是，Skill 要求所有玩法都保留这个网格容器。\n我们打开原文看一下，具体是 Skill 的哪个部分有这样的要求？",
              "transition": "带着回复里的判断回到原 Skill 核对。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜Inspect：从第一步“实际发送请求”点“下一处”，依次查看第二步“场地变小的直接原因”和第三步“Skill 的上游原因”】",
                  "labels": [
                    "排查回复 · 连续看原因与建议"
                  ]
                }
              ],
              "inspectBefore": [
                {
                  "part": 1,
                  "label": "Inspect AI · 第二步 · 场地变小的直接原因",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=1"
                },
                {
                  "part": 2,
                  "label": "Inspect AI · 第三步 · Skill 的上游原因",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=2"
                }
              ],
              "suppressCues": [
                0
              ]
            },
            {
              "id": "size-diagnosis-source",
              "number": "3.3.2.2.3",
              "title": "回到 Skill 原文判断修改方向",
              "screen": "PPT 原因页 → 原 Skill 场地要求",
              "operation": "回到原因页，打开原 Skill 的场地要求，核对 .board 的复用要求；随后进入修改段。",
              "points": "如果只是游戏实现的问题，改游戏；如果是 Skill 中的指导或配套资源把问题带到新项目，修改对应源头。不能凭一次解释直接定因。",
              "materials": [
                {
                  "label": "PPT：为什么这次要改 Skill",
                  "url": "index.html?mode=slides#size-cause"
                },
                {
                  "label": "原 Skill：场地要求",
                  "url": "evidence/size-iteration/original-skill.html#stage-contract"
                }
              ],
              "status": "本轮真实材料已归档并接入；场地、窄屏、扣生命、结算和重开已核对。收集得分、人工试听、其他玩法回归与讲师试讲待完成。",
              "script": "【切换｜PPT → Skill：点本段“PPT：为什么这次要改 Skill”，再点“定位原始 Skill”；也可直接用本段原文入口。定位保留 .board-wrap + .board 的要求】\n\n这里确实要求保留同一个网格容器，这个不太合理，我们想要的是一个通用的 Skill，场地具体采用什么容器，应该根据游戏自身的特征来决定。\n初步来看，问题分析是对的，我们看一下他给的建议怎么样？\n\n",
              "transition": "按玩法区分场地容器，同时保留视觉风格。",
              "cueMaterials": [
                {
                  "match": "【切换｜PPT → Skill：点本段“PPT：为什么这次要改 Skill”，再点“定位原始 Skill”；也可直接用本段原文入口。定位保留 .board-wrap + .board 的要求】",
                  "labels": [
                    "原 Skill：场地要求"
                  ]
                }
              ],
              "displayCueOverrides": {
                "0": "打开原 Skill，定位保留 .board-wrap + .board 的要求"
              }
            }
          ]
        },
        {
          "id": "group-size-3",
          "number": "3.3.2.3",
          "title": "对照原因修改并复查",
          "screens": [
            {
              "id": "size-change",
              "number": "3.3.2.3.1",
              "title": "修改原因所在，保留前后对照",
              "screen": "实际修改请求 → 修订 Skill 与 diff",
              "operation": "展开实际修改请求，进入接续会话的 Inspect；打开修订 Skill 与 diff，定位场地容器选择及 templates/styles.css，旧游戏保持不变。",
              "points": "只解释修复原因所需的改动；区分改游戏、改 Skill 及两者都改，保留真实修改范围。",
              "materials": [
                {
                  "label": "AI 的五条修改建议 · Inspect",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=3"
                },
                {
                  "label": "PPT：修改请求与新原文位置",
                  "url": "index.html?mode=slides#size-revision"
                },
                {
                  "label": "修改记录 · Inspect",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-change&position=0"
                },
                {
                  "label": "修订 Skill",
                  "url": "evidence/size-iteration/revised-skill.html#stage-contract"
                },
                {
                  "label": "实际 diff",
                  "url": "evidence/size-iteration/diff.html#L35"
                }
              ],
              "status": "本轮真实材料已归档并接入；场地、窄屏、扣生命、结算和重开已核对。收集得分、人工试听、其他玩法回归与讲师试讲待完成。",
              "script": "【操作提示｜回到同一份排查日志，点击“下一处”进入第四步“按玩法选择场地容器”，继续依次查看第五步“补齐场地样式”、第六步“避免类名冲突”、第七步“检查场地尺寸”和第八步“难度控件建议”；单独进入可点击本段链接】\n\n它建议先修改 Skill，减少后续复用时出现类似问题。\n第一条建议是说不再要求所有游戏都用原来的网格布局，而是按照不同的游戏类型选择容器。\n第二条是提供对应的样式。不过，它在这里也给了具体的宽度，我们需要再做一下筛选。\n第三条是给 AI 加一个类似问题的提醒，因为我们上一轮出现了样式冲突。\n第四条，它给了一些具体的场地宽度和宽高比要求，这些限制不太必要，但实际检查场地尺寸还是需要的。\n第五条和这次的问题没有直接关系，只是它觉得存在风险，所以补充了一下。这一轮先不展开。\n\n【切换｜PPT：进入“保留视觉风格，布局随玩法调整”，展开“查看修改 Prompt · 可复制”，指不要把当前游戏的宽度、比例写成通用要求】\n\n总体来看，这些建议大部分是合理的，但我们不需要全部照着做。按玩法选容器、补上对应样式，还有避免样式冲突的提醒，这些可以保留。实际检查场地也需要，但他在第四条提到的统一规定宽度和比例这个不太需要。\n\n我们看一下让他继续修改 skill的提示词。让它重点修改场地容器的问题，同时不要把当前游戏的宽度和比例设成通用规则。\n\n改完之后，我们还是用同一个需求重新生成，看看场地能不能正常展开，原来的玩法还能不能用。\n\n【切换｜材料：打开“修订 Skill”，定位“场地容器怎么选”；再看“实际 diff”中新增的 .stage 与尺寸参数。此处短暂停留，随后进入新对话验证】",
              "cueMaterials": [
                {
                  "match": "【操作提示｜回到同一份排查日志，点击“下一处”进入第四步“按玩法选择场地容器”，继续依次查看第五步“补齐场地样式”、第六步“避免类名冲突”、第七步“检查场地尺寸”和第八步“难度控件建议”；单独进入可点击本段链接】",
                  "labels": [
                    "AI 的五条修改建议 · Inspect"
                  ]
                },
                {
                  "match": "【切换｜PPT：进入“保留视觉风格，布局随玩法调整”，展开“查看修改 Prompt · 可复制”，指不要把当前游戏的宽度、比例写成通用要求】",
                  "labels": [
                    "PPT：修改请求与新原文位置"
                  ]
                },
                {
                  "match": "【切换｜材料：打开“修订 Skill”，定位“场地容器怎么选”；再看“实际 diff”中新增的 .stage 与尺寸参数。此处短暂停留，随后进入新对话验证】",
                  "labels": [
                    "修订 Skill",
                    "实际 diff"
                  ]
                }
              ],
              "inspectBefore": [
                {
                  "part": 1,
                  "label": "Inspect AI · 第四步 · 五条修改建议",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-diagnosis&position=3",
                  "text": "留在同一段回复中，按顺序查看五条建议"
                }
              ],
              "suppressCues": [
                0,
                6
              ],
              "cuePpt": {
                "2": {
                  "id": "size-revision",
                  "step": 0
                }
              }
            }
          ]
        },
        {
          "id": "group-size-4",
          "number": "3.3.2.4",
          "title": "在新对话里验证改进",
          "screens": [
            {
              "id": "size-revalidate",
              "number": "3.3.2.4.1",
              "title": "新对话验证，改进有没有留在 Skill 里",
              "screen": "独立新对话请求 → 实际读取 → 新生成游戏",
              "operation": "打开原开发请求，展示本轮独立生成的 Inspect 记录；从材料 #validation 看相同窗口下的前后截图，再进入新游戏，按方向键启动、碰撞至结算并重开。未实测的收集与音效不照念通过。",
              "points": "当前对话已有修复上下文；新对话用于检查改进是否由 Skill 带入。一次成功只支持本次结果；问题重现则继续定位，不凑成功结局。",
              "materials": [
                {
                  "label": "修改后 Skill · 容器与尺寸",
                  "url": "evidence/size-iteration/revised-skill.html#stage-contract"
                },
                {
                  "label": "修改前后差异",
                  "url": "evidence/size-iteration/diff.html#L35"
                },
                {
                  "label": "PPT：重新验证与原请求复制",
                  "url": "index.html?mode=slides#size-check"
                },
                {
                  "label": "重新生成 · Inspect",
                  "url": "http://127.0.0.1:4397/inspect/?topic=size-validation&position=0"
                },
                {
                  "label": "本轮最终游戏",
                  "url": "evidence/size-iteration/game/index.html"
                },
                {
                  "label": "本轮游戏 · 16∶10 的实际设置",
                  "url": "evidence/size-iteration/game-styles.html#L472"
                }
              ],
              "status": "本轮真实材料已归档并接入；场地、窄屏、扣生命、结算和重开已核对。收集得分、人工试听、其他玩法回归与讲师试讲待完成。",
              "script": "【操作提示｜PPT：进入“用新对话验证修改后的 Skill”，展开开发请求；打开“重新生成 · Inspect”，核对新会话使用修订 Skill、开发请求与原来一致；随后打开“本轮最终游戏”】\n\n这里我也提前做了实验，就不实际跑了。\n我们来看一下，生成的游戏效果怎么样。\n\n【操作提示｜游戏：按方向键启动，观察场地，再碰撞、结算并重开；需要对比时回看方案一修改前的游戏。观察到场地正常后继续，不把未检查的收集和音效说成通过】\n\n场地过小的问题没有再出现。\n（游戏结束不要点击关闭，点击之后会有 bug😂）\n\n【切换｜材料：打开“修改后 Skill · 容器与尺寸”，先看容器选择；点页内“下一处”看宽度、比例的默认值及覆盖说明。需要对照时打开“修改前后差异”，也可用页内“上一处 / 下一处”查看后续改动】\n\n我们再回头看一下，修改后的 Skill 到底改了什么。\n原来要求所有游戏保留网格容器，现在是网格玩法用 .board，其他玩法用 .stage。宽度和比例也可以根据具体游戏调整。\n\n这里还是有默认值，比如画布默认是四比三，但它不是所有游戏都必须遵守的规则，可以按玩法覆盖。\n\n【切换｜网页：查看本轮游戏样式中设置的十六比十比例】\n\n这次生成的游戏就是正常的比例，说明模型这次确实根据游戏做了调整。\n这里一定还有更好的方案，但是我们课程上主要给大家做一个示例。\n接下来我们再看看方案二和方案三。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT：进入“用新对话验证修改后的 Skill”，展开开发请求；打开“重新生成 · Inspect”，核对新会话使用修订 Skill、开发请求与原来一致；随后打开“本轮最终游戏”】",
                  "labels": [
                    "PPT：重新验证与原请求复制"
                  ]
                },
                {
                  "match": "【操作提示｜游戏：按方向键启动，观察场地，再碰撞、结算并重开；需要对比时回看方案一修改前的游戏。观察到场地正常后继续，不把未检查的收集和音效说成通过】",
                  "labels": [
                    "本轮最终游戏"
                  ]
                },
                {
                  "match": "【切换｜材料：打开“修改后 Skill · 容器与尺寸”，先看容器选择；点页内“下一处”看宽度、比例的默认值及覆盖说明。需要对照时打开“修改前后差异”，也可用页内“上一处 / 下一处”查看后续改动】",
                  "labels": [
                    "修改后 Skill · 容器与尺寸"
                  ]
                },
                {
                  "match": "【切换｜网页：查看本轮游戏样式中设置的十六比十比例】",
                  "labels": [
                    "本轮游戏 · 16∶10 的实际设置"
                  ]
                }
              ],
              "displayCueOverrides": {
                "0": "PPT：进入“用新对话验证修改后的 Skill”，展开开发请求",
                "4": "打开修改后 Skill，依次查看容器选择与宽度、比例的默认值"
              },
              "cuePpt": {
                "0": {
                  "id": "size-check",
                  "step": 0
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "part-3",
      "number": "3.3.3",
      "title": "例二：增加声音，并验证能否复用",
      "content": "方案二快速试玩后进入方案三。按明确优化目标、确定复用方式、修改 Skill、实际调用验证四步增加音效能力。首轮实现错误只在验证环节简短处理。",
      "effect": "能把希望复用的新能力写进 Skill，并检查新增能力和原有行为。",
      "materials": [
        {
          "label": "声音优化 · Inspect 运行记录",
          "url": "http://127.0.0.1:4397/inspect/?topic=audio-reference-author"
        }
      ],
      "groups": [
        {
          "id": "group-2-1",
          "number": "3.3.3.1",
          "title": "快速看方案二，再试玩方案三",
          "screens": [
            {
              "id": "generate",
              "number": "3.3.3.1.1",
              "title": "快速试玩方案二",
              "screen": "方案二游戏",
              "operation": "从“三组游戏”进入方案二，移动、收集、碰撞，快速查看结算和重开；本轮只作简短试玩，未触发或未听到的效果不作成功判断",
              "points": "方案二快速过，不重讲 Skill 或生成日志，不把短暂试玩称为完整验收。",
              "materials": [
                {
                  "label": "三组游戏",
                  "url": "evidence/creation-comparison/index.html"
                },
                {
                  "label": "方案二游戏",
                  "url": "evidence/creation-comparison/creator/index.html"
                }
              ],
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "script": "【操作提示｜打开方案二，简短试玩移动、收集、碰撞及重开；观察后再下判断，不展开生成日志】\n\n我们试玩一下方案二,方案二的效果还挺好的。\n接着我们看一下方案 3",
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜打开方案二，简短试玩移动、收集、碰撞及重开；观察后再下判断，不展开生成日志】",
                  "labels": [
                    "方案二游戏"
                  ]
                }
              ]
            },
            {
              "id": "slide-3",
              "number": "3.3.3.1.2",
              "title": "试玩方案三",
              "screen": "方案三游戏",
              "operation": "关闭方案二游戏，打开方案三，确认规则后开始；收集一次、受伤一次，指分数和生命变化；留出无口播的观察时间",
              "points": "从实际试玩进入优化需求，不重复布局采用记录。",
              "materials": [
                {
                  "label": "方案三游戏",
                  "url": "evidence/audio-iteration/historical-components/index.html"
                }
              ],
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "script": "【操作提示｜关闭方案二，打开方案三；确认开始，触发收集与受伤，指分数和生命变化。留出停口播的时间确认有无声音】\n\n",
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜关闭方案二，打开方案三；确认开始，触发收集与受伤，指分数和生命变化。留出停口播的时间确认有无声音】",
                  "labels": [
                    "方案三游戏"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "group-2-2",
          "number": "3.3.3.2",
          "title": "明确优化目标",
          "screens": [
            {
              "id": "iteration-need",
              "number": "3.3.3.2.1",
              "title": "让后续游戏也带上声音",
              "screen": "方案三游戏 → PPT 优化目标",
              "operation": "从试玩提出声音需求，检查原 Skill 资源与工作流及原开发请求，再明确修改 Skill 的理由。",
              "points": "先核对原任务与 Skill，再决定修改层级；未要求音效不等于模型漏做。跨任务复用目标决定补进 Skill。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "PPT · 当前步骤",
                  "url": "index.html?mode=slides#audio-goal"
                },
                {
                  "label": "方案三游戏",
                  "url": "evidence/audio-iteration/historical-components/index.html"
                },
                {
                  "label": "方案三原开发请求",
                  "url": "http://127.0.0.1:4397/inspect/?topic=layout-game-requests&position=1"
                },
                {
                  "label": "原 Skill · 资源表与工作流",
                  "url": "evidence/audio-reference-iteration/original-skill.html#L8"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜停在方案三游戏提出声音需求；随后打开“原 Skill · 资源与工作流”，先看资源表，再用页内“下一处”看工作流。核对原开发请求没有要求音效，Skill 也没有声音接入要求】\n\n方案三这里，整体的界面和前面两个 Skill 生成的界面不太一致。\n但是我觉得也还不错，唯一的问题就是缺少声音反馈。\n我希望它像前两个一样，收集、受伤的时候也有声音提醒。\n我们先看一下，当前这个 Skill 有没有声音相关的要求。\n\n【操作提示｜保持原 Skill 页面，对照资源与工作流解释判断；不把缺少声音文件本身当成缺陷】\n\n这里可以看到，它提供了界面样式和交互组件，但没有声音资源，也没有要求模型接入声音。\n\n我们可以和让模型把声音能力补进 Skill。\n\n【切换｜PPT：进入“让后续游戏也带上声音反馈”，明确本轮新增与保留项】",
              "cueMaterials": [
                {
                  "match": "【操作提示｜停在方案三游戏提出声音需求；随后打开“原 Skill · 资源与工作流”，先看资源表，再用页内“下一处”看工作流。核对原开发请求没有要求音效，Skill 也没有声音接入要求】",
                  "labels": [
                    "方案三游戏"
                  ]
                },
                {
                  "match": "【操作提示｜保持原 Skill 页面，对照资源与工作流解释判断；不把缺少声音文件本身当成缺陷】",
                  "labels": [
                    "原 Skill · 资源表与工作流"
                  ]
                },
                {
                  "match": "【切换｜PPT：进入“让后续游戏也带上声音反馈”，明确本轮新增与保留项】",
                  "labels": [
                    "PPT · 当前步骤"
                  ]
                }
              ],
              "cuePpt": {
                "5": {
                  "id": "audio-goal",
                  "step": 0
                }
              },
              "displayCueOverrides": {
                "0": "停在方案三游戏，提出缺少声音反馈的需求",
                "2": "打开原 Skill，查看资源表与完整工作流，核对现有组件和资源接入要求"
              },
              "suppressCues": [
                5
              ]
            },
            {
              "id": "iteration-criteria",
              "number": "3.3.3.2.2",
              "title": "明确新增与保留",
              "screen": "PPT · 明确优化目标",
              "operation": "PPT：指收集、受伤及音效开关，再指保留项；不在此展开代码",
              "points": "先定义新增能力与保留项，后面按这些条件验收。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "PPT · 当前步骤",
                  "url": "index.html?mode=slides#audio-goal"
                },
                {
                  "label": "优化请求与回复 · Inspect",
                  "url": "http://127.0.0.1:4397/inspect/?topic=audio-reference-author"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜PPT：先讲新增与保留项，再展开“查看优化 Prompt · 四要素稿”。该稿为整理稿，尚未重跑；回放时展开“本轮实际发送 Prompt”，随后点“打开优化日志”】\n\n让他从原来的参考游戏里提取声音，补进这份 Skill，同时保留现有的视觉和布局能力。\n\n【切换｜Inspect：先看本轮实际请求，用“下一处”看声音来源与保留要求；再用“下一条记录”看模型读取原声音和最终回复】\n\n我们看一下实际运行记录，看看它从原来的材料里提取了什么，又补了哪些使用要求。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT：先讲新增与保留项，再展开“查看优化 Prompt · 四要素稿”。该稿为整理稿，尚未重跑；回放时展开“本轮实际发送 Prompt”，随后点“打开优化日志”】",
                  "labels": [
                    "PPT · 当前步骤"
                  ]
                },
                {
                  "match": "【切换｜Inspect：先看本轮实际请求，用“下一处”看声音来源与保留要求；再用“下一条记录”看模型读取原声音和最终回复】",
                  "labels": [
                    "优化请求与回复 · Inspect"
                  ]
                }
              ],
              "inspectBefore": [
                {
                  "part": 3,
                  "label": "Inspect AI · author · 实际请求",
                  "url": "http://127.0.0.1:4397/inspect/?topic=audio-reference-author&position=0"
                }
              ],
              "suppressCues": [
                2
              ],
              "cuePpt": {
                "0": {
                  "id": "audio-goal",
                  "step": 0
                }
              }
            }
          ]
        },
        {
          "id": "group-3-1",
          "number": "3.3.3.3",
          "title": "确定复用方式",
          "screens": [
            {
              "id": "audio-origin",
              "number": "3.3.3.3.1",
              "title": "从已有游戏找可复用实现",
              "screen": "PPT · 确定复用方式 → 声音源码",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "本例选择复用已有声音实现；不把缺少资源文件等同 Skill 有错，也不宣称所有声音需求都必须附代码。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "原 Skill",
                  "url": "evidence/audio-reference-iteration/original-skill.html#L8"
                },
                {
                  "label": "声音来源",
                  "url": "evidence/audio-reference-iteration/reference-sound.html#L9"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜打开“声音来源”，查看最初参考游戏的声音源文件】\n\n最初给 AI 的紫色翻牌游戏里已经有声音。我们回到创建 Skill 的对话，让它从这份原始材料里提取，不需要再引入其他方案。",
              "preflight": {
                "title": "录前人工试听：历史整页组",
                "summary": "录前可用本步试听入口确认声音来源；正式讲述重点看声音文件和事件调用，必要时短听。场地较小，录屏局部放大场地与读数，不改游戏代码。",
                "steps": [
                  {
                    "action": "关掉其他正在运行的游戏标签页，确认浏览器标签未静音、系统输出设备正确。按方向键或 WASD 启动；玩家是青白色圆点，收集青色宝石，避开紫色方块。",
                    "pass": "时间开始减少，能分清玩家、宝石和障碍；单次收集得分增加10。操作按当局位置移动，不套用固定路线。"
                  },
                  {
                    "action": "如果不确定上次是否静音，先到结算，查看右侧开关；显示“🔇 静音”时点到“🔊 音效”。点“再玩一局”，再按方向键启动。",
                    "pass": "结算开关显示“🔊 音效”。开关只在结算出现；不能在开场找音效按钮。"
                  },
                  {
                    "action": "收集至少一颗宝石，再主动触碰一个障碍。每触发一种事件，先停口播，让声音完整播放后再解释。",
                    "pass": "得分增加10时听到短促的较高音；生命减少时听到较低的受伤音。声音与事件紧接，不连续空响；两种反馈可分辨。"
                  },
                  {
                    "action": "到结算点成“🔇 静音”，重开并按方向键启动；再次收集、受伤，直到结算。",
                    "pass": "得分和生命正常变化，开始、收集、受伤、结算均听不到游戏音；结算仍显示“🔇 静音”。不是仅看按钮变字就判定通过。"
                  },
                  {
                    "action": "需要核对设置保存时，在静音状态刷新，再按键玩到结算；检查后切回“🔊 音效”，为正式录制准备。",
                    "pass": "刷新后的这一局仍无声，结算显示静音；重新开启后下一局的事件能再次发声。"
                  }
                ],
                "status": "已补走：开启和静音两局均收集1颗、得分10，并发生受伤和生命耗尽结算；静音按钮状态正确，刷新后仍保持静音；测试结束已恢复开启。模块开关逻辑测试通过。声音是否可听及音色质量仍需讲师完成本表试听，不能用按钮或代码代替。"
              },
              "cueMaterials": [
                {
                  "match": "【操作提示｜打开“声音来源”，查看最初参考游戏的声音源文件】",
                  "labels": [
                    "声音来源"
                  ]
                }
              ]
            },
            {
              "id": "audio-scope",
              "number": "3.3.3.3.2",
              "title": "确定怎样复用",
              "screen": "声音源码 → PPT · 确定复用方式",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "资源提供实现，指导承担适用条件与事件接入。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "声音文件与接口",
                  "url": "evidence/audio-reference-iteration/reference-sound.html#L50"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜停在原声音文件，查看 flip、match、mismatch 和 win】\n\n原来这些声音对应翻牌、配对和胜利。换一种玩法，声音可以复用，事件要重新对应，不能把翻牌的规则一起照搬过去。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜停在原声音文件，查看 flip、match、mismatch 和 win】",
                  "labels": [
                    "声音文件与接口"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "group-3-2",
          "number": "3.3.3.4",
          "title": "修改 Skill",
          "screens": [
            {
              "id": "audio-guidance",
              "number": "3.3.3.4.1",
              "title": "把需求落实到 Skill",
              "screen": "PPT · 修改 Skill → 实际委托 → Skill diff",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "回放真实委托与结果；解释资源入口、事件接线和检查要求怎样支持复用。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "实际修改差异",
                  "url": "evidence/audio-reference-iteration/skill-diff.html#L1"
                },
                {
                  "label": "修改后的 Skill",
                  "url": "evidence/audio-reference-iteration/revised-skill.html#L41"
                },
                {
                  "label": "实际修改记录 · Inspect",
                  "url": "http://127.0.0.1:4397/inspect/?topic=audio-reference-author"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜继续在 Inspect 看最终回复；然后打开“修改后的 Skill”，定位声音规则，用页内“下一处”查看用法；需要核对修改时打开“实际修改差异”】\n\n它把原来的几种声音整理成事件接口，还新增了收集等音效。哪些来自原作品、哪些是这次新加的，要对着原文件核对。\n\n",
              "prompts": [
                {
                  "label": "E0 · 讲师在已有备课对话中的实际委托",
                  "text": "Goal｜目标\n继续优化刚才的 purple-game-ui Skill，让以后用它生成的小游戏也能带上最初紫色翻牌游戏的声音反馈。\n\nContext｜上下文\n沿用这段对话里的 Skill、参考游戏源码 source-game 和开发对话 source-dialogue.md。请检查原游戏的声音实现和用法，提取适合复用的部分。\n\nConstraints｜约束\n只修改当前工作区的 purple-game-ui，补充声音资源和使用说明。不同玩法按事件选择或适配音效，并提供声音开关；保留原有紫色视觉、布局建议、数据卡和结算浮层，不把翻牌玩法的事件和布局设成通用规则。这一步先不生成游戏，之后在新对话里调用验证。\n\nDone when｜完成标准\n声音资源和对应的使用说明已补进 Skill，并检查文件、接口与说明是否一致。说明从原游戏提取了什么、修改了哪些指导，以及检查结果和未验证的部分。\n"
                }
              ],
              "task": {
                "context": "E0 是当前备课对话中的实际委托，不是另开空白作者会话。发送前已讨论并核实：组件组为基础；原组件包没有声音；整页模板有基础声音，历史整页游戏补出 pickup/hurt/tick；需要保留布局、开场及可见反馈，并支持静音。Codex 可访问原组件包和历史整页游戏 src/sound.js。下面“这个方向”指这些前文。",
                "actions": [
                  "先展示下面真实委托，结合刚才声音来源说明输入依据；此处回放已完成修改，不把这句话当成脱离上下文的独立模板。",
                  "准备原组件 Skill 的实验副本，保留原件；主备课 Codex 在副本追加声音接入指导，并复制已经核实的声音文件。",
                  "收到修改后打开 skill.diff：核对修改位置、资源出处、事件调用与保留项。然后才进入本步逐字稿的正文审阅。"
                ],
                "result": "实际只追加 SKILL.md 并新增 assets/js/purple-sound.js；三份 CSS 与 UI kit 没变。此处的结果是修改后的 Skill，还不是游戏成功发声。",
                "source": "component-audio-20261114/skill.diff；baseline/workspace/.agents/skills/purple-game-ui/ 为原版，with-audio/workspace/.agents/skills/purple-game-ui/ 为修订版；source.json 与 verification/skill-changed-files.json 供备课核对。"
              },
              "cueMaterials": [
                {
                  "match": "【操作提示｜继续在 Inspect 看最终回复；然后打开“修改后的 Skill”，定位声音规则，用页内“下一处”查看用法；需要核对修改时打开“实际修改差异”】",
                  "labels": [
                    "修改后的 Skill"
                  ]
                }
              ],
              "displayCueOverrides": {
                "0": "打开修改后的 Skill，查看声音规则和用法"
              }
            },
            {
              "id": "audio-resource",
              "number": "3.3.3.4.2",
              "title": "对照指导与实现",
              "screen": "新增声音文件 → PPT · 修改 Skill",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "正文与资源对应核对，不逐行讲实现。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "新增声音文件",
                  "url": "evidence/audio-reference-iteration/added-sound.html#L1"
                },
                {
                  "label": "声音使用说明",
                  "url": "evidence/audio-reference-iteration/sound-guide.html#L1"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜打开“新增声音文件”，再打开“声音使用说明”】\n\n接下来换一个新对话，看看模型能不能只靠这份 Skill，把声音带进新游戏。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜打开“新增声音文件”，再打开“声音使用说明”】",
                  "labels": [
                    "新增声音文件",
                    "声音使用说明"
                  ]
                }
              ],
              "suppressCues": [
                0
              ]
            }
          ]
        },
        {
          "id": "group-3-3",
          "number": "3.3.3.5",
          "title": "实际调用验证",
          "screens": [
            {
              "id": "audio-regenerate",
              "number": "3.3.3.5.1",
              "title": "在新对话中调用修改后的 Skill",
              "screen": "PPT · 实际调用验证 → 修改版游戏",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "历史游戏用于发现需求；本轮只展示修改版 Skill 的一次新调用。请求没有要求声音，但明确了其他保留体验，不能将这些体验全部归功于 Skill。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "PPT · 当前步骤",
                  "url": "index.html?mode=slides#audio-result"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜PPT：打开开发请求，说明使用修改后的 Skill；随后打开本轮游戏】\n\n我们开新的对话，调用修改后的 skill 生成一个小游戏。\n我们看下提前跑完的效果",
              "prompts": [
                {
                  "label": "修改版 Skill 的实际开发请求",
                  "text": "使用当前工作区 .agents/skills/purple-game-ui/SKILL.md，从空项目做一个「60 秒躲避与收集」网页小游戏，沿用 Skill 的紫色界面风格。玩家用方向键或 WASD 移动，躲避障碍，收集物品得分；碰撞扣生命，时间到或生命耗尽时结算，可以重开。只做单一难度，界面不提供难度选择。游玩时游戏读数只显示时间、得分和生命，重开按钮只出现在结算画面。\n\n同时保留这些体验：HUD 在桌面端靠场地侧边，窄屏合理排列且不遮挡场地；进入游戏先显示可确认的规则提醒，确认后开始计时；收集物品显示剩余存在时间的进度条或进度环，9 秒未收集会消失；收集、受伤有可见反馈。保留按钮按压与开场、结算浮层的视觉效果。\n\n用原生 HTML/CSS/JS，入口放在根目录 index.html。保持 Skill 文件不变，完成后告诉我用了哪些 Skill 文件。浏览器试玩留给我。\n"
                }
              ],
              "task": {
                "context": "修改版 Skill 放在独立空项目中，在新会话发送实际请求；请求未额外要求声音。",
                "actions": [
                  "展示开发请求，打开修改版游戏，试玩收集、受伤和静音；再检查原有体验。"
                ],
                "result": "本次游戏接入声音；浏览器音频信号检查通过，人工试听与录屏收音待确认。结算文字仍有标签问题。",
                "source": "evidence/audio-reference-iteration/checks-summary.md"
              },
              "cueMaterials": [
                {
                  "match": "【操作提示｜PPT：打开开发请求，说明使用修改后的 Skill；随后打开本轮游戏】",
                  "labels": [
                    "PPT · 当前步骤"
                  ]
                }
              ],
              "displayCueOverrides": {
                "0": "PPT：打开开发请求，随后查看修改版游戏"
              },
              "cuePpt": {
                "0": {
                  "id": "audio-result",
                  "step": 0
                }
              }
            },
            {
              "id": "audio-playtest",
              "number": "3.3.3.5.4",
              "title": "先听声音，再试静音",
              "screen": "修改版游戏，依次操作",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "新增能力必须和实际事件对应，开关必须有效。现有浏览器信号验证支持声音输出和静音结论；录制前仍须人工试听及收音检查。若现场无声，先查静音与播放条件，不能靠源码宣布演示成功。",
              "transition": "声音成立后还不能结束，继续检查之前明确要保留的体验。",
              "materials": [
                {
                  "label": "修改版本轮游戏",
                  "url": "evidence/audio-reference-iteration/with-audio/index.html"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜打开本轮修改版游戏，确认开始后触发收集、受伤，停口播试听；再关闭声音重复操作。自动信号检测已通过，人工试听后再讲听感】\n\n试玩一下，整套效果还不错",
              "preflight": {
                "title": "录前人工试听与录屏收音",
                "summary": "使用本步修改版游戏入口。以下是录前验收，不念出口；完成后再执行下方正式逐字稿。",
                "steps": [
                  {
                    "action": "打开修改版游戏，点“确认并开始”，查看左侧“音效：开”；移动橙色圆点收集青色晶体，并触碰紫色尖刺。",
                    "pass": "收集得分加1时有较高的短音；受伤扣1生命时有较低的声音；每次事件能同时看见数值/画面反馈。"
                  },
                  {
                    "action": "点“音效：开”使其变为“音效：关”；继续收集、受伤、结算并点“再玩一局”。这一轮不要刷新。",
                    "pass": "静音后所有事件都无声，玩法及重开正常；重开仍显示“音效：关”。再开启后收集/受伤能恢复发声。刷新会恢复音效开启，不能用刷新代替静音重开。"
                  },
                  {
                    "action": "用正式录制时的录屏软件、麦克风和输出设备录一个短样片：先说“声音开启”，停口播触发收集和受伤；再说“现在静音”，关闭音效后触发相同事件。所需事件没出现就延长样片，不凑固定时长。",
                    "pass": "录制时能听见只是第一步。停止录制、关闭游戏，再回放保存的样片：开启段能听见两类游戏音，静音段没有游戏音，但麦克风讲解仍在。"
                  },
                  {
                    "action": "检查样片中事件声音与分数/生命变化的对应，再检查音量与杂音；有问题就调整录屏音频来源、系统/标签静音或输出设备，重录同样短片。",
                    "pass": "无明显音画错位、爆音或双重回声；游戏音清晰但不盖过讲解。麦克风有声音、游戏音缺失也算未通过，不能直接录完整段。"
                  }
                ],
                "status": "已实走修改版游戏的收集、受伤、音效按钮切换与静音重开；已有浏览器音频信号记录。此次补测两份原始声音模块：开启收集/受伤安排4次音符，静音后5类事件新增0次，重新开启收集恢复2次。该项使用音频替身，只核对代码开关；人工听感和最终录屏音轨仍待完成。"
              },
              "cueMaterials": [
                {
                  "match": "【操作提示｜打开本轮修改版游戏，确认开始后触发收集、受伤，停口播试听；再关闭声音重复操作。自动信号检测已通过，人工试听后再讲听感】",
                  "labels": [
                    "修改版本轮游戏"
                  ]
                }
              ]
            },
            {
              "id": "audio-regression",
              "number": "3.3.3.5.5",
              "title": "原来的体验还在吗",
              "screen": "修改版游戏的开场、游戏中和结算；窄屏截图",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "对照实际画面：侧栏由右到左仍符合需求；开场、进度、浮层与可见反馈保留。9秒边界已有受控逻辑验证，现场按实际观察讲，不把测试替身称为真人试玩。结算有字面量 strong 标签，明确指出；手机排版通过但音效版没有原版额外触屏拖动。",
              "transition": "回结果材料，对照新增、保留及未解决项作取舍。",
              "materials": [
                {
                  "label": "修改版本轮游戏",
                  "url": "evidence/audio-reference-iteration/with-audio/index.html"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜修改版游戏：检查开场确认、物品存在时间、画面反馈、结算和重开】\n\n",
              "cueMaterials": [
                {
                  "match": "【操作提示｜修改版游戏：检查开场确认、物品存在时间、画面反馈、结算和重开】",
                  "labels": [
                    "修改版本轮游戏"
                  ]
                }
              ]
            },
            {
              "id": "audio-verdict",
              "number": "3.3.3.5.6",
              "title": "按新增与保留项判断效果",
              "screen": "PPT · 实际调用验证",
              "operation": "本轮依据为 2026-11-20 原参考游戏声音实验，操作与材料以本段正文和链接为准。",
              "points": "收束能力优化；不把单轮验证等同所有任务都可靠。",
              "transition": "按本组顺序进入下一步；材料看完回对应 PPT",
              "materials": [
                {
                  "label": "PPT · 当前步骤",
                  "url": "index.html?mode=slides#audio-result"
                }
              ],
              "status": "讲述线与逐字稿已按当前主线接入；人工试听、录屏收音和讲师试讲待完成。",
              "script": "【操作提示｜回到 PPT 验证页；结合本轮实际结果收束，不沿用旧实验的触控或初始化结论】\n\n这轮声音已经带进新游戏了，但还有游戏细节要修。给 Skill 增加能力，既要把能复用的资源和用法整理进去，也要换个对话实际调用，检查新能力和原有功能。",
              "cueMaterials": [
                {
                  "match": "【操作提示｜回到 PPT 验证页；结合本轮实际结果收束，不沿用旧实验的触控或初始化结论】",
                  "labels": [
                    "PPT · 当前步骤"
                  ]
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "audio-result",
                  "step": 0
                }
              }
            },
            {
              "id": "size-summary",
              "number": "3.3.3.5.7",
              "title": "总结一轮 Skill 优化",
              "screen": "PPT · 优化步骤与注意事项",
              "operation": "在方案三验证结束后打开总结页，回顾步骤与独立验证的范围。",
              "points": "参考 Anthropic 与 Agent Skills 的观察、改进、评估循环，按本案例归纳；不称为官方唯一固定流程。",
              "transition": "结束本节。",
              "materials": [
                {
                  "label": "PPT · 一轮 Skill 优化怎么做",
                  "url": "index.html?mode=slides#size-summary"
                }
              ],
              "script": "【切换｜PPT：打开“一轮 Skill 优化怎么做”，沿左侧前三步，再到右侧第四步，回顾刚才的案例】\n\n我们做下总结\n当我们要去优化我们自己的 Skill 的时候，需要通过实际的任务调用，定位到 Skill 的问题具体出在哪里，再针对它做优化。\n\n【操作提示｜PPT：指右侧“独立验证”框，依次对应框内的三个检查项】\n\n优化完成之后，最重要的是新开一个对话，重新执行一遍任务，看看问题是不是还会出现。\n如果继续在之前的对话里测试，模型可能会用到前面讨论过的修复信息，我们就不太好判断是不是 Skill 本身起了作用。\n所以这里用新对话、空项目和同一条请求重新做。\n这样，我们就做完了一轮 Skill 优化。当然，一次通过还不能说明已经稳定解决。这次模型调整了比例，但换一种玩法，它是不是还能选得合适，还需要继续测试。\n如果你的 Skill 是自己用的，可以在使用过程中一边迭代。\n正式一些，可以多做测试\n同一个任务多跑几遍，看结果稳不稳定；换一种玩法，看这条指导能不能复用。\n\n也可以让不同的 AI 帮你一起找问题，最后还是要实际跑一下，看看效果。",
              "cueMaterials": [
                {
                  "match": "【切换｜PPT：打开“一轮 Skill 优化怎么做”，沿左侧前三步，再到右侧第四步，回顾刚才的案例】",
                  "labels": [
                    "PPT · 一轮 Skill 优化怎么做"
                  ]
                },
                {
                  "match": "【操作提示｜PPT：指右侧“独立验证”框，依次对应框内的三个检查项】",
                  "labels": []
                }
              ],
              "cuePpt": {
                "0": {
                  "id": "size-summary",
                  "step": 0
                },
                "2": {
                  "id": "size-summary",
                  "step": 0
                }
              },
              "suppressCues": [
                2
              ],
              "displayCueOverrides": {
                "0": "PPT：打开“一轮 Skill 优化怎么做”，先沿左侧前三步回顾案例；讲到独立验证时指右侧框及其中的三个检查项"
              }
            }
          ]
        }
      ]
    }
  ]
};

# 3.4 做游戏的经验，有人打包好了吗

> 由 tools/build-lesson.py 生成。

## P23 有人打包好了吗

[对应课件](index.html#p23)

### 口播

**第 1 步 · 地图**（[演示](index.html?mode=slides&step=0#p23)）

到这里，记忆翻牌 v1 已经修好。接下来要做第二个游戏：60 秒躲避与收集。

**第 2 步 · 我们摸到的**（[演示](index.html?mode=slides&step=1#p23)）

3.3 我们自己摸到了几条经验：状态要清楚，等待和重开要处理好，成对的东西要真的成对。这些都是一次次踩坑换来的。

**第 3 步 · 找到 Game Studio**（[演示](index.html?mode=slides&step=2#p23)）

有没有人已经把做游戏的经验打包好了？有：OpenAI 官方插件目录里有一个 Game Studio。这一节先弄清它是什么，审一遍，再决定装不装。

## P24 Plugin 和 Skill

[对应课件](index.html#p24)

### 口播

**第 1 步 · manifest**（[演示](index.html?mode=slides&step=0#p24)）

Game Studio 是一个 Plugin。打开它的目录，最上面是 plugin.json，叫 manifest，写着名字、版本、作者、许可证和它声明的能力。

**第 2 步 · Skill**（[演示](index.html?mode=slides&step=1#p24)）

skills 目录里有 9 个 Skill。每个 Skill 就是一个目录，核心是一个 SKILL.md：开头是名称和一句描述，正文写着这类任务的经验和做法。SKILL.md 是开放格式，不只 Codex，别的 Agent 也能读。

**第 3 步 · 脚本与图标**（[演示](index.html?mode=slides&step=2#p24)）

另外还有 3 个 Python 脚本和图标。按 Codex 的定义，Plugin 还可以带 MCP 服务器、应用连接器和 Hook；Game Studio 都没有。

**第 4 步 · 一句话**（[演示](index.html?mode=slides&step=3#p24)）

一句话区分：Skill 是一份经验说明；Plugin 是把它们打包、安装、停用的单位。

### 原文与链接

- 画面上 · 原文 · [Game Studio 目录（固定版本）](https://github.com/openai/plugins/tree/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio)

## P25 装之前审什么

[对应课件](index.html#p25)

### 口播

**第 1 步 · 来源与版本**（[演示](index.html?mode=slides&step=0#p25)）

装之前逐项审。来源：OpenAI 的官方 plugins 仓库，作者 OpenAI。我们固定到一个具体的提交，以后它更新了，我们审的也还是这一版。版本 0.1.0，MIT 许可证。

**第 2 步 · 能力**（[演示](index.html?mode=slides&step=1#p25)）

manifest 里声明的能力是 Interactive 和 Write：它会在我们的仓库里写代码。这和 1.3 讲的一样：会写，就要划范围。

**第 3 步 · 脚本**（[演示](index.html?mode=slides&step=2#p25)）

会运行的脚本：3 个本地图片处理脚本，用来做精灵图，需要 Pillow，代码里没有网络请求。我们用几何图形，不需要它们，记下“不运行”。

**第 4 步 · 其余与范围**（[演示](index.html?mode=slides&step=3#p25)）

没有 MCP、连接器和 Hook。最后一项要我们自己写：允许它改哪里。只改游戏模块、入口和必要的样式。把这些写进 CH03_GAME_STUDIO_PLUGIN_LAB.md。请暂停视频，打开它的目录，逐项核对。

### 原文与链接

- 画面上 · 原文 · [plugin.json](https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/.codex-plugin/plugin.json)
- 画面上 · 原文 · [scripts/](https://github.com/openai/plugins/tree/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/scripts)

## P26 Skill 里写了什么

[对应课件](index.html#p26)

### 口播

**第 1 步 · 状态归属**（[演示](index.html?mode=slides&step=0#p26)）

审查不只看 manifest，也读几段 Skill 原文。web-game-foundations 里有一条架构规则：把模拟和渲染分开；模拟负责实体、回合、计时器、碰撞……

**第 2 步 · 对照 3.3**（[演示](index.html?mode=slides&step=1#p26)）

对照 3.3：等待翻回的那个计时器、步数，都是游戏状态的一部分。我们踩坑摸到的经验，这里写成了一条规则。

**第 3 步 · 默认路线**（[演示](index.html?mode=slides&step=2#p26)）

再看 game-studio 这个总入口的一句：2D 默认走 Phaser，除非用户明确要求别的。先记住这一句。我们的 Brief 会说“接进现有仓库、新依赖先说理由”，两者会在 3.5 碰上。

**第 4 步 · 怎么看待**（[演示](index.html?mode=slides&step=3#p26)）

所以怎么看待 Skill？它是前人的经验，写得很好，但它不是我们的规则。冲突的时候，由我们按证据决定。

### 原文与链接

- 画面上 · 原文 · [web-game-foundations/SKILL.md](https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/skills/web-game-foundations/SKILL.md)
- 画面上 · 原文 · [game-studio/SKILL.md](https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/skills/game-studio/SKILL.md)

## P27 三种装法

[对应课件](index.html#p27)

### 口播

**第 1 步 · 装在哪**（[演示](index.html?mode=slides&step=0#p27)）

怎么装？先说一个实测结果：课程基线用 API key 登录，这时 Codex 的官方插件目录是空的，也不能把官方仓库直接加成市场，它的名字是保留名。但官方仓库里的 Skill 本身不需要账号，有三种装法。

**第 2 步 · git 与停用**（[演示](index.html?mode=slides&step=1#p27)）

第一种，课程准备了一个只含 Game Studio 的本地市场，从里面装插件。第二种，用 Codex 内置的 skill-installer，只把需要的 Skill 装到本机。第三种，把 Skill 目录直接放进仓库的 .agents/skills。区别在于：装在哪，进不进 git。只有第三种跟着仓库走，换台电脑、换个人都一样。

**第 3 步 · 本课的选择**（[演示](index.html?mode=slides&step=2#p27)）

停用也不同：插件一个开关管 9 个 Skill；另外两种要删目录或改仓库。本课用第一种，因为我们要完整走一遍插件的生命周期：审查、安装、使用、停用。另外两种记在审查记录里，3.6 还会用到“进不进 git”这个问题。

### 复现这个实验（页面按钮）

1. 在课程仓库根目录，准备只含 Game Studio 的本地市场（固定到官方仓库的一个提交）：`courseware/ch03/materials/plugin/setup-marketplace.sh lab-runs/ch03-plugin/mkt`
2. 在隔离环境里加入这个市场并安装：`CLEAN_CODEX_HOME=lab-runs/ch03-plugin/home tools/clean-codex.sh -- plugin list
CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=lab-runs/ch03-plugin/home tools/clean-codex.sh -- plugin marketplace add "$PWD/lab-runs/ch03-plugin/mkt"
CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=lab-runs/ch03-plugin/home tools/clean-codex.sh -- plugin add game-studio@course-lab`

需要能访问 GitHub。用 ChatGPT 账号登录的 Codex 可直接在 /plugins 的官方目录里安装（未测）。

## P28 装好了，Codex 看到了什么

[对应课件](index.html#p28)

### 口播

**第 1 步 · 安装**（[演示](index.html?mode=slides&step=0#p28)）

审查通过，安装。装完要开一个新会话，Skill 才生效。

**第 2 步 · 新会话的请求**（[演示](index.html?mode=slides&step=1#p28)）

用 2.1 学过的请求查看工具看新会话的第一次请求：多了 9 行，每行是一个 Skill 的名称、一句描述和文件位置，一共约 2.3 KB。

**第 3 步 · 按需读取**（[演示](index.html?mode=slides&step=2#p28)）

9 份 SKILL.md 的全文合起来约 37.8 KB，并不在请求里。平时只放名称和描述，Codex 判断用得上某个 Skill 时，才去读它的全文。这叫渐进披露。记住这个结构：平时只放摘要，需要时才展开。3.6 讲 Memory 时它还会出现。请暂停视频，安装，开新会话，在请求里找到这 9 行。

### 备课参考

数字来自课程基线下的一次请求（claude-tap 记录，2026-10-06），见 materials/plugin/README.md；安装前同一请求里没有这 9 行。

## P29 本节小结

[对应课件](index.html#p29)

### 口播

**第 1 步 · 一句话**（[演示](index.html?mode=slides&step=0#p29)）

Skill 是经验，Plugin 是打包。

**第 2 步 · 留下的**（[演示](index.html?mode=slides&step=1#p29)）

这一节留下审查记录和安装证据，都写进 CH03_GAME_STUDIO_PLUGIN_LAB.md。如果审查不通过，或者你的环境装不上，就用课程快照继续 3.5 的分析，但要明确记下来：这不算插件实操通过。

**第 3 步 · 下一节**（[演示](index.html?mode=slides&step=2#p29)）

下一节，我们真的调用它做第二个游戏。它说 2D 默认 Phaser，我们的 Brief 会怎么说？

### 跟做产出

CH03_GAME_STUDIO_PLUGIN_LAB.md：审查结论、允许修改的范围、不运行的脚本；安装与新会话请求中 9 个 Skill 的证据。

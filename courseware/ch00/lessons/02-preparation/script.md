# 0.2 课前准备：工具、账号与练习项目

> 从 lesson.js 导出；时长预算 14 分 15 秒，未试录。

## p12 安装 & 接入 agent 工具

[对应课件](index.html#p12)

### 第 1 步：明确起点

这节我们做三件事。先安装 Codex App 和 CLI，完成课程模型接入；再用 Git 把练习项目下载到本地，看懂 status 和 diff；最后把项目里的欢迎页打开。

准备好以后，下一节就可以直接开始第一次 AI 修改。这里不用填写一张新的环境检查单，也不用提交准备作业。

### 录制提示

按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。

## p14 安装 App 与 CLI，再配置模型

[对应课件](index.html#p14)

### 第 1 步：安装 App

【操作提示｜macOS：从 App 官方入口取得安装包，完成安装并打开；不演示未经核验的 M3 设置界面】

先安装 Codex App。我们用 macOS 做主演示，Windows 同学从官方入口选择对应系统版本，按实际安装器提示操作。安装完成后打开应用，后面在里面选择本地项目。

### 第 2 步：安装 CLI

【操作提示｜macOS 终端确认 node 与 npm 版本，展示 npm install -g @openai/codex；安装完成后执行 codex --version】

CLI 这里选 npm 安装路径，所以先准备 Node.js 和 npm。安装命令在本页展开步骤里。安装完成后查看 codex 版本，确认终端能找到命令。Windows 在 PowerShell 中执行同样的 npm 命令。

### 第 3 步：配置 M3

【操作提示｜展开本页步骤，展示不含真实密钥的用户 config.toml；密钥输入过程不录屏】

CLI 的配置沿用课程已有的 MiniMax 接入：服务地址、模型 ID 和密钥环境变量要对应起来。课程使用的具体模型 ID 是 MiniMax-M3。

把配置放进用户目录下的 .codex/config.toml；已经有配置时先备份并合并，不整份覆盖。然后在终端隐藏输入 API 密钥，从同一个终端启动 codex。Windows 的配置位置与密钥输入命令也放在展开步骤里。

App 的 M3 接入需要单独核验，不能假设它会读取这个终端的密钥。当前这部分仍待补齐。

### 详细安装步骤参见

macOS：从本页 App 官方入口下载适配系统的安装包，按安装器完成安装并打开。App 的 M3 配置界面与请求需单独实测，当前不作为已走通的操作。

CLI：本机已安装包的 README 提供 npm 安装方式。[先安装 Node.js LTS（包含 npm）](https://nodejs.org/en/download)，再执行以下命令。新安装过程本轮未测。

```text
node --version
npm --version
npm install -g @openai/codex
codex --version
```

macOS：在终端创建用户配置目录，用编辑器打开 ~/.codex/config.toml。已有配置先备份，再合并相应字段，不覆盖其他设置。

```text
mkdir -p ~/.codex
```

将以下课程 CLI 配置写入用户配置文件。服务配置沿用仓库示例，模型 ID 按课程要求使用 MiniMax-M3。

```text
model = "MiniMax-M3"
model_provider = "minimax"
forced_login_method = "api"

[model_providers.minimax]
name = "MiniMax"
base_url = "https://api.minimax.cn/v1"
env_key = "MINIMAX_API_KEY"
wire_api = "responses"

[shell_environment_policy]
exclude = ["MINIMAX_API_KEY"]
```

macOS 默认 zsh：在终端隐藏输入自己的 MiniMax API 密钥；只对当前终端及其子进程生效，新终端需重新设置。不要把真实密钥粘进命令文本或项目文件。

```text
read -s "MINIMAX_API_KEY?MiniMax API key: "
export MINIMAX_API_KEY
```

Windows 差异：安装 Node.js 后在 PowerShell 执行同样的 npm 命令；用户配置在 %USERPROFILE%\.codex\config.toml。用 PowerShell 隐藏输入密钥。

```text
$minimaxCredential = Read-Host "MiniMax API key" -AsSecureString
$env:MINIMAX_API_KEY = [System.Net.NetworkCredential]::new("", $minimaxCredential).Password
```

取得项目后，在设置密钥的同一个终端进入项目根目录运行 codex，并执行本节只读请求。App 不一定继承终端环境变量；App 的接入路径单独核验。

CLI 配置有仓库既有排练依据；本轮未调用模型。Windows 安装与 App 接入未实测。

### 核验依据与限制

2026-10-10 用户确认 macOS 主演示、附 Windows 差异；CLI 的服务配置参考 tools/clean-codex.sh，模型 ID 按讲师最新要求改为 MiniMax-M3；本轮未调用该模型，App 单独核验。CLI 0.162.1 的本机安装包 README 提供 npm install -g @openai/codex。官方在线页面访问受阻；本轮未重新安装或调用模型，App 与 Windows 路径未实测。

## p14a 安装 Git & 取得 course-starter

[对应课件](index.html#p14a)

### 第 1 步：进入第二部分

接下来进入第二部分：Git 与项目。先用 Git 把 course-starter 下载到本地，再在 README 里加一行，看看 status 和 diff 分别显示什么。

### 转场提示

沿用 p12 的路线页；红圈移到第 2 项，随后进入本部分操作。

## p13 用 Git 取得 course-starter

[对应课件](index.html#p13)

### 第 1 步：确认 Git

【操作提示｜macOS 已有 Homebrew 时运行 brew install git；没有 Homebrew 时使用 Git 官方安装入口。安装后新开终端执行 git --version】

Git 用来记录代码变化。这里展示 macOS 的安装方式；Windows 同学安装 Git for Windows 后重新打开 PowerShell。两边都用 git --version 检查终端能否找到 Git。

### 第 2 步：取得项目

【操作提示｜在选定的工作目录执行克隆命令，再进入 course-starter；用编辑器打开这个目录】

clone 会把课程起点下载到一个新的 course-starter 文件夹，cd 则进入这个文件夹。已有同名目录时换一个新位置，保留原来的内容。后面的命令都从项目根目录运行。

欢迎页在 setup-check 目录里。这个起点还没有正式 React 应用，欢迎页可以直接运行。

### 安装入口与克隆步骤

[Git 官方安装入口](https://git-scm.com/downloads)

[course-starter](https://github.com/prompt-to-harness/course-starter)

macOS 若已有 Homebrew，可运行 brew install git；没有 Homebrew 时打开上方的 Git 官方安装入口。Windows 从同一入口安装 Git for Windows，重新打开 PowerShell。

```text
brew install git
```

安装后重新打开终端，核对 Git 能否被找到。

```text
git --version
```

在自己选定的工作目录克隆 course-starter；如果同名目录已存在，换一个新的工作目录。

```text
git clone https://github.com/prompt-to-harness/course-starter.git
cd course-starter
```

### 录制提示

按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。

## p15 Git status & diff

[对应课件](index.html#p15)

### 第 1 步：查看文件状态

【操作提示｜先执行 git status --short 和 git diff；在编辑器的 README.md 末尾加一行“Git 命令练习：我已经取得本地项目。”并保存，再运行 git status --short】

刚克隆的副本通常没有本地修改。这两个命令如果没有输出，就表示当前没有对应的变化。现在我们自己在 README 末尾加一行，保存后再看。status 显示 README.md，前面的 M 表示这个已跟踪文件被修改了。屏幕是本次加一行练习的输出示例，实际操作以你看到的结果为准。

### 第 2 步：查看行级差异

【操作提示｜运行 git diff -- README.md，指向新增行】

status 告诉我们哪个文件变了，diff 展开具体内容。加号标出新增行，减号标出删除行；这里只增加了一行，所以看到这句练习文字前有加号。git diff 默认看已跟踪文件中尚未暂存的修改。新建但还没有加入 Git 的文件，会出现在 status 里，普通 diff 不会展示它的内容。

### 第 3 步：恢复练习行

【操作提示｜在编辑器只删回刚加的练习行及自己新增的空行，保存；再次运行 git status --short 与 git diff】

这次只是练习命令。把自己刚加的内容删回去，再检查是否恢复到练习前的状态。原来就有的修改要保留。后面 AI 改代码时，我们还会用这两个命令检查它实际做了什么。

### 跟做：加一行，看一次 diff

在刚克隆的项目根目录查看起点。

```text
git status --short
git diff
```

用编辑器在 README.md 末尾加一行并保存。

```text
Git 命令练习：我已经取得本地项目。
```

查看修改文件与具体差异。

```text
git status --short
git diff -- README.md
```

在编辑器仅删回自己刚加的内容，再运行 status 和 diff。保留原有改动。

```text
git status --short
git diff
```

### 已验证的例子

2026-10-10 在 course-starter 的独立临时克隆中执行：初始无改动；README 追加一行后 status 显示 M，diff 显示新增行；恢复原文后两者无输出。未修改原仓库或欢迎语。

## p15a 本地启动 course-starter 验证

[对应课件](index.html#p15a)

### 第 1 步：进入第三部分

现在进入第三部分：启动 course-starter。刚才已经取得项目，也看过文件变化。接下来打开项目里的欢迎页，再让 App 和 CLI 读取同一份项目，检查实际返回。

### 转场提示

沿用 p12 的路线页；红圈移到第 3 项，随后进入本部分操作。

## p16 在本地启动欢迎页

[对应课件](index.html#p16)

### 第 1 步：启动本地服务

【操作提示｜在项目根目录另开终端，运行本页服务命令；确认 Python 可用，终端保持运行】

现在把欢迎页跑起来。这个命令让本机的浏览器能够通过地址访问当前项目文件。服务终端要保持运行，后面操作 Codex 时再用另一个终端。若 Python 不可用，可以直接用浏览器打开 setup-check/index.html，页面本身不需要额外依赖。

### 第 2 步：打开欢迎页

【操作提示｜浏览器打开 http://localhost:4174/setup-check/，刷新并指向原始欢迎语】

看到“你好，欢迎来到我的练习页面”，就找到了下一节要改的对象。核对服务启动目录是刚才的项目，浏览器也在这个地址。端口被占用时，先查是否已有同一个项目的服务，不要重复启动。现在保留这句原文。

### 启动命令与常见问题

[Python 官方下载](https://www.python.org/downloads/)

macOS：确认 Python 3 可用，从项目根目录启动；保持终端运行。缺少 Python 时从 Python 官方下载入口安装，或直接打开 HTML。

```text
python3 --version
python3 -m http.server 4174 --bind 127.0.0.1
```

Windows：安装 Python 3 后，在项目根目录用 PowerShell 启动。

```text
py -3 --version
py -3 -m http.server 4174 --bind 127.0.0.1
```

浏览器打开 http://localhost:4174/setup-check/ 并刷新。

若页面不对，检查服务终端所在目录；端口占用时复用已确认的同项目服务。

没有 Python 时可直接打开项目内 setup-check/index.html；使用课件内嵌预览前再准备本地服务。

### 录制提示

按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。

## p17 在 CLI & APP 各发一次指令

[对应课件](index.html#p17)

### 第 1 步：打开同一项目

【操作提示｜App 打开 course-starter 项目目录；终端在该目录运行 codex。App 接入未经核验时保留待补状态，不展示模拟成功】

安装和配置完成后，让两个入口都处理同一份本地项目。在 App 中打开这个项目目录，CLI 则从这个目录启动。然后分别发出屏幕上的请求，只读欢迎语，不修改文件。

### 第 2 步：对照真实返回

【操作提示｜对照本地 setup-check/index.html 的 welcome-message 原文与两个入口的实际读取和返回】

检查实际读到的文件和欢迎语。收到一句回复还不足以证明读对了文件，要和本地原文对上。如果认证或者模型请求失败，回到对应接入步骤处理。我们只在实际读到原文以后确认这个入口可用。

### 请求原文与启动位置

App 打开本地 course-starter 目录；CLI 在同一目录启动。

```text
codex
```

在两个已配置好的入口分别发送，不修改文件。

```text
只读取 setup-check/index.html，告诉我 h1#welcome-message 当前的完整文字，不修改任何文件。
```

对照文件原文；认证失败查账号或密钥，模型错误查配置，文件不存在查当前目录。不要把密钥放进对话。

### 录制前提

CLI 与 App 需分别完成实际 M3 接入核验；本轮没有执行模型调用。

## p18 Recheck 三个准备项

[对应课件](index.html#p18)

### 第 1 步：检查接入

可以暂停视频，先确认 App 或 CLI 已正常安装，再用这个入口发送一次指令，检查实际返回。有错误就保留脱敏信息，回到对应安装或接入步骤处理。

### 第 2 步：检查 Git

再看 Git：你能从 status 找到修改文件，从 diff 找到刚加的一行吗？练习完成后删回自己加上的内容，不动其他文件。

### 第 3 步：检查页面

最后检查本地 HTTP 服务是否正常运行，再确认浏览器能打开自己的项目欢迎页。暂时卡住也可以先看演示，之后补操作。

### 第 4 步：进入首次任务

准备好后，保留当前项目和浏览器页面。进入第一章 1.1 节，让 AI 修改欢迎语，再检查页面和 diff，并给出反馈。

### 录制提示

按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。

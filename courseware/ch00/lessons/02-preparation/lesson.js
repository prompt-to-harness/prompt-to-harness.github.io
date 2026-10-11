window.lesson = {
  "title": "课前准备：工具、账号与练习项目",
  "chapter": "第 0 章 · 课程导入",
  "section": "00.02",
  "summary": "安装 App 与 CLI 并接入 M3，练习 Git status/diff，启动本地欢迎页。App 接入待单独核验。",
  "scenes": [
    {
      "id": "p12",
      "label": "安装 & 接入 agent 工具",
      "title": "安装 & 接入 agent 工具",
      "kicker": "第 0 章 · 0.2 · 安装 & 接入",
      "lead": "安装 Codex 并接入模型; 用 Git 取得项目; 在浏览器打开欢迎页",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>01</b>安装 &amp; 接入</li><li><b>02</b>Git 与项目</li><li><b>03</b>启动 course-starter</li></ol>",
      "steps": [
        "明确起点"
      ],
      "script": [
        "【操作提示｜课件 p12，第 1 步；停留课件，指向红圈中的“安装 & 接入”，暂不切窗口】\n\n你好，欢迎来到课前准备这一节。下一节，我们就要请 AI 帮忙修改页面了。在开始之前，先把手边的工具和项目准备好。今天结束时，你的电脑上应该有一份自己的练习项目，浏览器能打开里面的欢迎页，AI 也能读到这份项目里的文件。\n\n我们按屏幕上的顺序来。先装好 Codex，配置模型；再用 Git 下载课程的起点项目，亲手改一行文字，看看怎样查出这个变化；最后启动页面，把工具、文件和浏览器连起来。\n\n我会用 macOS 演示。Windows 的命令有差别时，我会指出来，完整命令也放在课件的展开步骤里。你可以先看一遍，再暂停跟做。下载和安装需要一点时间，按自己的进度来就好。现在先看第一部分：安装工具。"
      ],
      "seconds": 25,
      "segment": "安装 & 接入",
      "source": "index.html#p12",
      "teaching": [
        {
          "title": "录制提示",
          "text": "按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。"
        }
      ],
      "layout": "lesson-cover"
    },
    {
      "id": "p14",
      "label": "安装 App 与 CLI，再配置模型",
      "title": "安装 App 与 CLI，再配置模型",
      "kicker": "第 0 章 · 0.2 · 安装 & 接入",
      "lead": "App 提供图形界面，CLI 从终端启动。分别安装后配置课程模型，再通过一次真实请求检查接入。",
      "html": "<div class=\"p-grid\" style=\"--n:2;align-items:start\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>Codex App</h3><p class=\"p-go\"><a href=\"https://developers.openai.com/codex/app/\" target=\"_blank\" rel=\"noopener\">Codex App 官方说明</a></p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>Codex CLI</h3><p class=\"p-go\"><a href=\"https://learn.chatgpt.com/docs/codex/cli\" target=\"_blank\" rel=\"noopener\">Codex CLI 官方说明</a></p></div></div>",
      "steps": [
        "安装 App",
        "安装 CLI",
        "配置 M3"
      ],
      "script": [
        "【操作提示｜课件 p14，第 1 步 → Chrome 新建“Codex App 官方说明”标签页，打开课件“Codex App 官方说明”链接；保留课件标签页。展示适配录制机器的官方安装入口，再切安装器和 Codex App。录制前关闭私人项目；登录、账号资料与密钥画面不入镜。若已安装，展示现有应用并说明，不假装重新安装】\n\n屏幕上有两个入口。左边的 App 是桌面应用，我们在图形界面里选择项目、输入请求。右边的 CLI 是命令行工具，要从终端启动。后面的实操主要用 CLI，这里也把 App 的入口给你看一下。\n\n我先在 Chrome 里打开 App 的官方说明。下载时要看清楚自己的操作系统，按官方页面当前提供的安装方式来。安装包准备好以后，跟着安装器完成安装，再打开应用。\n\n【操作提示｜仅在 App 已实际打开后继续；系统不受支持或安装失败时留在对应步骤处理。完成后切回 Chrome“课件”标签页 p14，推进第 2 步】\n\n应用打开以后，先停在这里。我们还要准备本地项目，稍后再回来选择它。接下来安装终端里使用的 CLI。",
        "【操作提示｜课件 p14，第 2 步；Chrome 新建“Codex CLI 官方说明”标签页，打开课件“Codex CLI 官方说明”链接。随后切 Terminal，依次执行 node --version、npm --version。这里的 Terminal 指系统终端，也可以使用 VS Code 的集成终端；录制时统一用一套界面】\n\n这里我们用 npm 安装 Codex CLI。npm 是随 Node.js 一起安装的包管理工具，等会儿用它下载和安装 CLI。先检查电脑上有没有这两个命令。\n\n我打开 Terminal，分别输入 node 和 npm 的版本检查命令。每条命令执行以后，看有没有返回版本号。如果提示找不到命令，就先补齐 Node.js。\n\n【操作提示｜缺少 Node.js 时：回课件展开“详细安装步骤参见”，在 Chrome 新建“Node.js 下载”标签页，打开课件“先安装 Node.js LTS（包含 npm）”链接，演示安装 LTS 版本；安装后重新打开 Terminal 并重查两条版本命令。已有 Node/npm 时略过这个安装分支。检查通过后执行 npm install -g @openai/codex，再执行 codex --version；等待实际输出】\n\n接着执行课件里的 npm 安装命令。命令执行结束后，再运行 codex 的版本检查。看到版本号，说明这个终端已经能找到 Codex 命令。模型能不能正常响应，还要等配置完成以后发一次请求来检查。\n\nWindows 同学在 PowerShell 里执行同样的 npm 安装命令。安装报错时，先看报错内容，确认这一步完成了，再继续配置。\n\n【操作提示｜切回 Chrome“课件”标签页 p14，推进第 3 步，展开“详细安装步骤参见”】",
        "【操作提示｜课件 p14，第 3 步；指向展开步骤中的配置样例。切 Terminal 执行 mkdir -p ~/.codex；再切 VS Code，通过“打开文件”打开用户目录下的 .codex/config.toml。已有配置先备份并合并；仅展示不含密钥的配置区域，避免暴露私人路径与其他服务配置】\n\n现在配置 CLI 要连接的模型。看课件里的这份样例，model 这一项写的是课程使用的模型 ID：MiniMax-M3。服务地址告诉工具把请求发到哪里，env_key 则告诉它从哪个环境变量里读取 API 密钥。\n\n我们打开用户目录下的 .codex 文件夹，把课程配置放到 config.toml 里。路径开头的 ~ 表示你的用户目录。如果文件里已经有其他配置，先备份，再合并相应字段，别把原来的设置整份覆盖掉。\n\n你可以直接从课件复制配置，逐项核对。尤其留意模型 ID、服务地址，还有 MINIMAX_API_KEY 这个环境变量名。环境变量可以先理解成提供给程序的一项运行设置，这里用它来传入密钥。\n\n【操作提示｜保存配置后切回 Terminal；暂停录屏或遮住输入区域，按课件 macOS zsh 命令隐藏输入密钥并 export。不要回显变量，不展示剪贴板或真实密钥。保留这个终端，后面 p17 从这里进入项目并启动 Codex。Windows 命令展示课件已有 PowerShell 分支，不在 macOS 上执行】\n\n密钥用你自己的，按照展开步骤里的隐藏输入命令填写。真实密钥不要写进项目文件，也不要粘到对话里。这里设置的密钥只对当前终端和它启动的程序生效，所以先留着这个窗口，后面我们还要从这里启动 Codex。\n\nWindows 的配置文件位置和隐藏输入命令也放在同一组步骤里，跟着对应系统的版本操作就可以。\n\n【操作提示｜切回 Chrome“课件”标签页，收起详情。App 的 M3 接入尚待单独实测；不演示猜测的设置入口，不将 CLI 配置成功当成 App 已接入。以下口播保留实际操作所需的提醒】\n\nApp 的接入要另外检查，不能因为终端里填过密钥，就直接认为 App 也配置好了。我们稍后分别检查实际返回。先把练习项目下载下来，这样发请求时就有一个明确的读取对象。"
      ],
      "seconds": 240,
      "segment": "安装 & 接入",
      "source": "index.html#p14",
      "teaching": [
        {
          "title": "核验依据与限制",
          "text": "2026-10-10 用户确认 macOS 主演示、附 Windows 差异；CLI 的服务配置参考 tools/clean-codex.sh，模型 ID 按讲师最新要求改为 MiniMax-M3；本轮未调用该模型，App 单独核验。CLI 0.162.1 的本机安装包 README 提供 npm install -g @openai/codex。官方在线页面访问受阻；本轮未重新安装或调用模型，App 与 Windows 路径未实测。"
        }
      ],
      "repro": {
        "place": "content",
        "label": "详细安装步骤参见",
        "steps": [
          {
            "text": "macOS：从本页 App 官方入口下载适配系统的安装包，按安装器完成安装并打开。App 的 M3 配置界面与请求需单独实测，当前不作为已走通的操作。"
          },
          {
            "text": "CLI：本机已安装包的 README 提供 npm 安装方式。先安装 Node.js LTS（包含 npm），再执行以下命令。新安装过程本轮未测。",
            "links": [
              {
                "text": "先安装 Node.js LTS（包含 npm）",
                "url": "https://nodejs.org/en/download"
              }
            ],
            "code": "node --version\nnpm --version\nnpm install -g @openai/codex\ncodex --version"
          },
          {
            "text": "macOS：在终端创建用户配置目录，用编辑器打开 ~/.codex/config.toml。已有配置先备份，再合并相应字段，不覆盖其他设置。",
            "code": "mkdir -p ~/.codex"
          },
          {
            "text": "将以下课程 CLI 配置写入用户配置文件。服务配置沿用仓库示例，模型 ID 按课程要求使用 MiniMax-M3。",
            "code": "model = \"MiniMax-M3\"\nmodel_provider = \"minimax\"\nforced_login_method = \"api\"\n\n[model_providers.minimax]\nname = \"MiniMax\"\nbase_url = \"https://api.minimax.cn/v1\"\nenv_key = \"MINIMAX_API_KEY\"\nwire_api = \"responses\"\n\n[shell_environment_policy]\nexclude = [\"MINIMAX_API_KEY\"]"
          },
          {
            "text": "macOS 默认 zsh：在终端隐藏输入自己的 MiniMax API 密钥；只对当前终端及其子进程生效，新终端需重新设置。不要把真实密钥粘进命令文本或项目文件。",
            "code": "read -s \"MINIMAX_API_KEY?MiniMax API key: \"\nexport MINIMAX_API_KEY"
          },
          {
            "text": "Windows 差异：安装 Node.js 后在 PowerShell 执行同样的 npm 命令；用户配置在 %USERPROFILE%\\.codex\\config.toml。用 PowerShell 隐藏输入密钥。",
            "code": "$minimaxCredential = Read-Host \"MiniMax API key\" -AsSecureString\n$env:MINIMAX_API_KEY = [System.Net.NetworkCredential]::new(\"\", $minimaxCredential).Password"
          },
          {
            "text": "取得项目后，在设置密钥的同一个终端进入项目根目录运行 codex，并执行本节只读请求。App 不一定继承终端环境变量；App 的接入路径单独核验。"
          }
        ],
        "note": "CLI 配置有仓库既有排练依据；本轮未调用模型。Windows 安装与 App 接入未实测。"
      }
    },
    {
      "id": "p14a",
      "label": "安装 Git & 取得 course-starter",
      "title": "安装 Git & 取得 course-starter",
      "kicker": "第 0 章 · 0.2 · Git 与项目",
      "lead": "安装 Codex 并接入模型; 用 Git 取得项目; 在浏览器打开欢迎页",
      "html": "<ol class=\"p-map\"><li><b>01</b>安装 &amp; 接入</li><li class=\"is-now\"><b>02</b>Git 与项目</li><li><b>03</b>启动 course-starter</li></ol>",
      "steps": [
        "进入第二部分"
      ],
      "script": [
        "【操作提示｜回到课件 p14a，第 1 步；指向移到“Git 与项目”的红圈，暂不切窗口】\n\n接下来准备项目文件。我们先用 Git 把 course-starter 下载到电脑上，再在里面加一行文字。通过这个小变化，你就能看到：哪些文件改过、具体改了什么，分别去哪里查。"
      ],
      "seconds": 10,
      "segment": "Git 与项目",
      "source": "index.html#p14a",
      "teaching": [
        {
          "title": "转场提示",
          "text": "沿用 p12 的路线页；红圈移到第 2 项，随后进入本部分操作。"
        }
      ],
      "layout": "lesson-cover"
    },
    {
      "id": "p13",
      "label": "用 Git 取得 course-starter",
      "title": "用 Git 取得 course-starter",
      "kicker": "第 0 章 · 0.2 · Git 与项目",
      "lead": "安装 Git 后，克隆 course-starter 到新目录。进入项目根目录，后续命令都在这里运行。",
      "html": "<div class=\"p-grid\" style=\"--n:2;align-items:start\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>验证 Git 安装</h3><p><code>git --version</code></p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>下载并进入项目</h3><p><code>git clone https://github.com/prompt-to-harness/course-starter.git</code><br><code>cd course-starter</code></p></div></div>",
      "steps": [
        "确认 Git",
        "取得项目"
      ],
      "script": [
        "【操作提示｜课件 p13，第 1 步 → 切 Terminal，先执行 git --version。已有 Git 时直接核对版本；缺少 Git 时，回课件展开“安装入口与克隆步骤”，Chrome 新建“Git 下载”标签页，打开课件“Git 官方安装入口”链接，展示对应系统入口。macOS 已有 Homebrew 才使用 brew install git；安装后新开终端，再查 git --version。不要关闭 p14 留下的密钥终端】\n\nGit 是用来管理文件版本的工具。这节先用它做两件事：取得课程项目，以及查看文件变化。先在终端运行 git 的版本检查，确认这个命令能用。\n\n如果电脑还没装 Git，就从课件里的官方入口安装。macOS 上已经有 Homebrew 的同学，也可以用展开步骤里的安装命令。Windows 同学从官方入口安装 Git for Windows，完成以后重新打开 PowerShell，再检查一次版本。\n\n版本检查通过后，我们再下载项目。",
        "【操作提示｜切回 Chrome“课件”标签页 p13，推进第 2 步；从展开步骤的 course-starter 链接新建“课程起点仓库”标签页，打开该仓库链接，展示仓库名、README 与 setup-check 目录。随后切 Terminal，在选定的工作目录执行课件中的完整 git clone 命令，完成后执行 cd course-starter、pwd；PowerShell 查看位置用 Get-Location。同名目录存在时换一个新位置，不删除旧目录】\n\n我先打开课程起点仓库。后面使用的 README 和 setup-check 文件夹，都来自这里。我们把它完整下载到本地，作为自己的练习副本。\n\n现在切回终端。先选一个你平时存放项目的位置，再运行屏幕上的 clone 命令。clone 可以理解成把仓库克隆一份到本地。默认会新建一个叫 course-starter 的文件夹；下载完成后，用 cd 进入这个文件夹。\n\n如果这里已经有同名文件夹，就换个新位置操作，保留原来的内容。不要为了让命令运行成功，把自己以前的项目删掉。\n\n【操作提示｜克隆成功后切 VS Code，使用“文件 → 打开文件夹”打开刚克隆的 course-starter；展示左侧根目录，打开 README.md，再展开 setup-check。核对 VS Code 根目录与 Terminal 的路径一致。暂不编辑欢迎语】\n\n接着在 VS Code 里打开刚才这个文件夹。看左边的文件列表，最外层应该就是 course-starter。这个位置就是项目根目录，后面说“在项目根目录运行”，指的就是这里。\n\nREADME 是项目说明，setup-check 里面放着欢迎页。我们先用 README 练习查看修改，欢迎页留到后面启动。这个起点还没有正式的 React 应用，当前欢迎页是一个独立的 HTML 文件。\n\n【操作提示｜切回 Chrome“课件”标签页，进入 p15；保留 VS Code 项目窗口和项目终端】"
      ],
      "seconds": 105,
      "segment": "Git 与项目",
      "source": "index.html#p13",
      "teaching": [
        {
          "title": "录制提示",
          "text": "按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。"
        }
      ],
      "repro": {
        "place": "content",
        "label": "安装入口与克隆步骤",
        "steps": [
          {
            "jump": true,
            "text": "Git 官方安装入口",
            "links": [
              {
                "text": "Git 官方安装入口",
                "url": "https://git-scm.com/downloads"
              }
            ]
          },
          {
            "jump": true,
            "text": "course-starter",
            "links": [
              {
                "text": "course-starter",
                "url": "https://github.com/prompt-to-harness/course-starter"
              }
            ]
          },
          {
            "text": "macOS 若已有 Homebrew，可运行 brew install git；没有 Homebrew 时打开上方的 Git 官方安装入口。Windows 从同一入口安装 Git for Windows，重新打开 PowerShell。",
            "code": "brew install git"
          },
          {
            "text": "安装后重新打开终端，核对 Git 能否被找到。",
            "code": "git --version"
          },
          {
            "text": "在自己选定的工作目录克隆 course-starter；如果同名目录已存在，换一个新的工作目录。",
            "code": "git clone https://github.com/prompt-to-harness/course-starter.git\ncd course-starter"
          }
        ]
      }
    },
    {
      "id": "p15",
      "label": "Git status & diff",
      "title": "Git status & diff",
      "kicker": "第 0 章 · 0.2 · Git 与项目",
      "lead": "在 README.md 末尾加一行练习文字，比较保存前后的 Git 输出。然后尝试恢复",
      "html": "<div class=\"p-grid\" style=\"--n:2\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>Git status</h3><p><code>git status --short</code></p><pre style=\"font-size:22px\"> M README.md</pre></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>Git diff</h3><p><code>git diff -- README.md</code></p><pre style=\"font-size:20px;white-space:pre-wrap\">+Git 命令练习：我已经取得本地项目</pre></div></div>",
      "steps": [
        "查看文件状态",
        "查看行级差异",
        "恢复练习行"
      ],
      "script": [
        "【操作提示｜课件 p15，第 1 步 → 切项目 Terminal，依次运行 git status --short、git diff，展示修改前状态。若出现已有改动，先辨认来源并保留，不预读“没有改动”。再切 VS Code，打开根目录 README.md，在末尾另起一行加入“Git 命令练习：我已经取得本地项目。”，保存；回 Terminal 再运行 git status --short】\n\n现在来看一次真实的文件变化。修改前，我先运行 status 和 diff。刚克隆的副本通常没有本地修改；命令正常执行却没有输出，在这个起点是正常现象。要是已经列出了文件，就先认清这些原有变化，等会儿不要把它们算进这次练习。\n\n我切到 VS Code，在 README 的末尾加上课件里的这句练习文字，然后保存。注意要保存到文件里，再回终端看结果。\n\n【操作提示｜等待实际 status 输出，指向 README.md 及其前面的 M；未出现时检查保存状态和项目路径。课件左侧为示例，只有实际输出一致时才念下面这段】\n\n现在 status 列出了 README.md，前面的 M 表示这个已跟踪文件被修改了。它先告诉我们“哪个文件变了”。至于加的是哪句话，还得继续展开看。",
        "【操作提示｜回课件 p15，推进第 2 步，再切项目 Terminal，运行 git diff -- README.md；指向实际差异正文中的练习行。若进入分页器，查看完成后按 q 退出】\n\n这次我们只看 README，就在 diff 命令后面指定这个文件。两个短横线后面接文件名，表示把查看范围限定到它。\n\n找到刚才加的那句话，前面应该有一个加号。差异正文里，加号表示新增的内容，减号表示删掉的内容。上面带三个加号或三个减号的是文件标记，我们现在关注下面具体变化的行。\n\n这时把两个结果连起来看，就清楚了：status 帮我们找到 README 这个文件，diff 让我们看到里面新增的这一行。以后 AI 改完代码，我们也会这样检查它实际动了哪里。\n\n这里还有一个容易碰到的情况：新建文件可能会出现在 status 里，但普通 diff 不展示还没加入 Git 的新文件内容。我们这次编辑的 README 原本就在仓库里，所以可以直接比较。git diff 默认查看的是已跟踪文件中尚未暂存的修改；今天先按这组命令完成这个例子。",
        "【操作提示｜回课件 p15，推进第 3 步 → 切 VS Code，仅删除刚加的练习行及本次新增的空行，保存；回项目 Terminal 执行 git status --short、git diff。对照本页第 1 步的初始状态；不要使用整仓库丢弃改动的命令】\n\n看完变化，我们把这次练习收回来。我回到编辑器，只删掉自己刚才加的内容，再保存一次。然后回终端，重新运行刚才的两个检查命令。\n\n如果练习前没有改动，恢复以后，这两条命令应该又没有输出。要是 README 还出现在结果里，就打开 diff 看看，是不是多留了一个空行，或者少删、误删了什么。原本就有的改动要保留，我们要回到的是练习前的状态。\n\n到这里，你已经看过同一个文件修改前、修改后和恢复后的结果。接下来，我们去打开项目里的欢迎页。\n\n【操作提示｜确认只恢复了本次练习内容后，切回 Chrome“课件”标签页，进入 p15a】"
      ],
      "seconds": 150,
      "segment": "Git 与项目",
      "source": "index.html#p15",
      "teaching": [
        {
          "title": "已验证的例子",
          "text": "2026-10-10 在 course-starter 的独立临时克隆中执行：初始无改动；README 追加一行后 status 显示 M，diff 显示新增行；恢复原文后两者无输出。未修改原仓库或欢迎语。"
        }
      ],
      "repro": {
        "place": "content",
        "label": "跟做：加一行，看一次 diff",
        "steps": [
          {
            "text": "在刚克隆的项目根目录查看起点。",
            "code": "git status --short\ngit diff"
          },
          {
            "text": "用编辑器在 README.md 末尾加一行并保存。",
            "code": "Git 命令练习：我已经取得本地项目。"
          },
          {
            "text": "查看修改文件与具体差异。",
            "code": "git status --short\ngit diff -- README.md"
          },
          {
            "text": "在编辑器仅删回自己刚加的内容，再运行 status 和 diff。保留原有改动。",
            "code": "git status --short\ngit diff"
          }
        ]
      }
    },
    {
      "id": "p15a",
      "label": "本地启动 course-starter 验证",
      "title": "本地启动 course-starter 验证",
      "kicker": "第 0 章 · 0.2 · 启动 course-starter",
      "lead": "安装 Codex 并接入模型; 用 Git 取得项目; 在浏览器打开欢迎页",
      "html": "<ol class=\"p-map\"><li><b>01</b>安装 &amp; 接入</li><li><b>02</b>Git 与项目</li><li class=\"is-now\"><b>03</b>启动 course-starter</li></ol>",
      "steps": [
        "进入第三部分"
      ],
      "script": [
        "【操作提示｜课件 p15a，第 1 步；指向“启动 course-starter”的红圈，暂不切窗口】\n\n项目已经在本地了，现在来看看它在浏览器里是什么样子。我们先启动一个本地服务，打开欢迎页，再请 Codex 读出页面里的欢迎语，和文件原文核对一下。"
      ],
      "seconds": 10,
      "segment": "启动 course-starter",
      "source": "index.html#p15a",
      "teaching": [
        {
          "title": "转场提示",
          "text": "沿用 p12 的路线页；红圈移到第 3 项，随后进入本部分操作。"
        }
      ],
      "layout": "lesson-cover"
    },
    {
      "id": "p16",
      "label": "在本地启动欢迎页",
      "title": "在本地启动欢迎页",
      "kicker": "第 0 章 · 0.2 · 启动 course-starter",
      "lead": "欢迎页是一个独立 HTML 文件。下面的本地服务从项目根目录提供文件，浏览器打开 /setup-check/，下一节继续使用同一页面。",
      "html": "<div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>启动本地 http server</h3><p><code>python3 -m http.server 4174 --bind 127.0.0.1</code></p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"margin-top:16px\"><h3>浏览器打开</h3><p><a href=\"http://localhost:4174/setup-check/\">http://localhost:4174/setup-check/</a></p><p>你好，欢迎来到我的练习页面</p></div>",
      "steps": [
        "启动本地服务",
        "打开欢迎页"
      ],
      "script": [
        "【操作提示｜课件 p16，第 1 步 → 切 VS Code，展开 setup-check，打开 index.html，指明文件位置；随后在 Terminal 新建“页面服务”标签页，进入同一份 course-starter 根目录。执行 pwd、python3 --version，确认目录与 Python 后执行 python3 -m http.server 4174 --bind 127.0.0.1。Windows 按课件展开步骤使用 py -3。保留原先用于 Codex 的密钥终端】\n\n先看 VS Code 里的文件位置。欢迎页在 setup-check 文件夹里，文件名叫 index.html。我们从项目根目录启动一个本地 HTTP 服务，让浏览器通过地址访问它。\n\n我给服务单独开一个终端窗口。先确认所在目录是刚才的 course-starter，再执行屏幕上的启动命令。这里的四一七四是端口号，等会儿浏览器地址里也会用到它。\n\n【操作提示｜依据实际结果选择分支：缺少 Python 时回课件展开“启动命令与常见问题”，Chrome 新建“Python 下载”标签页，打开课件“Python 官方下载”链接；安装后重查版本。端口被占用时先确认是否已有同一项目的服务，未确认前不结束其他进程。服务正常启动后才继续下面的口播】\n\n启动以后，这个终端要一直留着，让服务继续运行。它暂时没有回到可以输入下一条命令的提示符，是因为服务还在工作。等会儿发 Codex 请求，用另一个终端就好。\n\n如果暂时没有 Python，也可以先用 Chrome 打开本地的 setup-check/index.html 看页面。这个 HTML 本身不需要额外依赖。不过，要通过课件里的本地地址访问，以及使用下一节的内嵌预览，还需要把服务补齐。Python 的下载入口和 Windows 命令都放在本页的展开步骤里。\n\n【操作提示｜切回 Chrome“课件”标签页 p16，推进第 2 步；页面服务终端保持运行】",
        "【操作提示｜Chrome 新建“练习欢迎页”标签页，打开 http://localhost:4174/setup-check/；保留课件标签页，刷新一次。核对地址、实际欢迎语和服务终端的目录。若页面打不开或文字不符，先处理，不预读成功台词；直接打开 HTML 的备用分支应明确展示 file 地址，不能说 HTTP 服务已通过】\n\n现在我在 Chrome 里新开一个标签页，输入课件上的地址。localhost 指的是我们自己这台电脑，后面的四一七四对应刚才启动服务的端口，setup-check 对应项目里的那个文件夹。\n\n【操作提示｜仅在实际显示原始欢迎语后继续，指向标题，不修改文字】\n\n页面打开了。我们要找的就是这句：“你好，欢迎来到我的练习页面。”下一节要修改的对象，现在已经在眼前了。\n\n再核对一下，浏览器用的是刚才这个地址，服务也从自己的练习副本启动。这样后面在编辑器里改文件，才能到对应的页面上看结果。先保留这句原文，也留着这个浏览器标签页。\n\n如果你这里打不开，先回服务终端看有没有报错、进程是不是还在，再核对地址。页面报找不到文件时，重点看看服务是不是从项目根目录启动的，以及地址后面有没有带上 setup-check。\n\n【操作提示｜切回 Chrome“课件”标签页，进入 p17；保留“练习欢迎页”标签页，后续直接切回它，不重复新建】"
      ],
      "seconds": 105,
      "segment": "启动 course-starter",
      "source": "index.html#p16",
      "teaching": [
        {
          "title": "录制提示",
          "text": "按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。"
        }
      ],
      "repro": {
        "place": "content",
        "label": "启动命令与常见问题",
        "steps": [
          {
            "jump": true,
            "text": "Python 官方下载",
            "links": [
              {
                "text": "Python 官方下载",
                "url": "https://www.python.org/downloads/"
              }
            ]
          },
          {
            "text": "macOS：确认 Python 3 可用，从项目根目录启动；保持终端运行。缺少 Python 时从 Python 官方下载入口安装，或直接打开 HTML。",
            "code": "python3 --version\npython3 -m http.server 4174 --bind 127.0.0.1"
          },
          {
            "text": "Windows：安装 Python 3 后，在项目根目录用 PowerShell 启动。",
            "code": "py -3 --version\npy -3 -m http.server 4174 --bind 127.0.0.1"
          },
          {
            "text": "浏览器打开 http://localhost:4174/setup-check/ 并刷新。"
          },
          {
            "text": "若页面不对，检查服务终端所在目录；端口占用时复用已确认的同项目服务。"
          },
          {
            "text": "没有 Python 时可直接打开项目内 setup-check/index.html；使用课件内嵌预览前再准备本地服务。"
          }
        ]
      }
    },
    {
      "id": "p17",
      "label": "在 CLI & APP 各发一次指令",
      "title": "在 CLI & APP 各发一次指令",
      "kicker": "第 0 章 · 0.2 · 启动 course-starter",
      "lead": "App 打开本地项目，CLI 从同一项目根目录启动。配置完成后，分别读取欢迎语并对照原文",
      "html": "<div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><h3>发送请求</h3><p>只读取 setup-check/index.html，告诉我 h1#welcome-message 当前的完整文字，不修改任何文件</p></div>",
      "steps": [
        "打开同一项目",
        "对照真实返回"
      ],
      "script": [
        "【操作提示｜课件 p17，第 1 步；先指向完整只读请求，再切回 p14 设置密钥的 Terminal，进入 VS Code 打开的同一份 course-starter 根目录；用 pwd 核对后运行 codex。若换了终端，按 p14 隐藏输入步骤重新设置密钥，不回显。页面服务终端保持运行】\n\n现在检查 Codex 能不能读到这份项目。我们给它一个很小的任务：只读取 setup-check/index.html，告诉我们欢迎语的完整文字，不修改任何文件。\n\n我先回到刚才配置密钥的终端，进入这份项目的根目录，再启动 codex。这里要注意，浏览器、VS Code 和 Codex，应该指向同一份练习副本。\n\n【操作提示｜在 CLI 发送：“只读取 setup-check/index.html，告诉我 h1#welcome-message 当前的完整文字，不修改任何文件。”等待实际读取和返回；出现确认提示时先核对动作范围，越出本次只读任务就停止。返回内容留到第 2 步核对】\n\n这句请求里，文件路径说明去哪里读，h1#welcome-message 进一步指出我们要找的标题元素。最后一句把这次任务限定为读取。先观察它的实际操作和返回，等会儿再跟文件对照。\n\n【操作提示｜切 Codex App：只有 App 的 M3 接入已单独实测，才选择同一 course-starter 目录并发送同一句请求，等待真实返回。未核验时跳过 App 发送操作，念下方备用口播，不展示模拟成功。正常完成 App 演示时略过备用口播】\n\nApp 这一路还需要完成接入检查。这里先保留待补状态，我们继续看 CLI 的实际结果。\n\n【操作提示｜App 已核验并实际发送请求时，改念：“我在 App 里也选择这份项目，发送同一句请求。两个入口分别检查，各自的读取结果都要和文件原文核对。”随后切回课件 p17，推进第 2 步】",
        "【操作提示｜切 VS Code，在 setup-check/index.html 中搜索 welcome-message，展示 h1 的原文；再切 Terminal 的 CLI 返回，与原文逐字对照。App 本次已执行时，再切 App 核对其返回。按实际读取记录与文字选择成功或失败分支，不把预先写好的答案当成工具输出】\n\n我先打开文件里的原文，再看工具返回的文字。要核对的是：读取路径是不是这个 setup-check/index.html，读出的欢迎语是不是和这里一致。仅仅收到一句“你好”，还没有完成我们刚才指定的任务。\n\n【操作提示｜仅在读取对象和实际返回均核对一致时念下段；否则直接进入后面的错误处理口播】\n\n这一句和文件里的原文对上了，读取的也是我们指定的文件。这个入口已经完成了这次只读请求。我们现在有了一个具体结果，可以确认这一步走通。\n\n【操作提示｜遇到错误时才念下段；正常演示略过。只展示脱敏错误，不展示账号、密钥或私人配置】\n\n这里没有得到预期的读取结果，先停一下。我们看它报的是什么：认证失败就回接入步骤查账号或密钥；模型请求错误就核对模型和服务配置；找不到文件就先查当前项目目录。错误里涉及密钥或个人信息的部分，先遮住再分享。\n\n【操作提示｜无论哪种分支，处理完成后在项目的普通终端执行 git status --short、git diff，确认没有新增文件改动；如有意外写入，先检查并保留，不自动清空。随后回 Chrome“课件”标签页，进入 p18】\n\n这次要求的是只读，所以最后再检查一下仓库里有没有新增改动。读取结果和文件状态都核对清楚以后，再进入下一步。"
      ],
      "seconds": 120,
      "segment": "启动 course-starter",
      "source": "index.html#p17",
      "teaching": [
        {
          "title": "录制前提",
          "text": "CLI 与 App 需分别完成实际 M3 接入核验；本轮没有执行模型调用。"
        }
      ],
      "repro": {
        "place": "content",
        "label": "请求原文与启动位置",
        "steps": [
          {
            "text": "App 打开本地 course-starter 目录；CLI 在同一目录启动。",
            "code": "codex"
          },
          {
            "text": "在两个已配置好的入口分别发送，不修改文件。",
            "code": "只读取 setup-check/index.html，告诉我 h1#welcome-message 当前的完整文字，不修改任何文件。"
          },
          {
            "text": "对照文件原文；认证失败查账号或密钥，模型错误查配置，文件不存在查当前目录。不要把密钥放进对话。"
          }
        ]
      }
    },
    {
      "id": "p18",
      "label": "Recheck 三个准备项",
      "title": "Recheck 三个准备项",
      "kicker": "第 0 章 · 0.2",
      "lead": "最终检查项",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><h3>模型能响应</h3><p>App 或 CLI 正常安装<br>App 或 CLI 正常发送指令</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>Git 能看变化</h3><p>git 命令正常使用<br>git diff &amp; status 均正常查看</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><h3>欢迎页能打开</h3><p>本地正常启动 http serve<br>本地正常打开欢迎页</p></div></div><div class=\"p-bar is-light preparation-next\" data-reveal=\"3\"><h3>第一次修改：VibeCoding 的 \"Hello world!\"</h3><p class=\"preparation-lead\">保留当前准备，进入第一章第一小节(1.1节)完成第一次修改、检查与反馈</p><p><b>第一章：从环境启动到首页原型</b></p></div>",
      "steps": [
        "检查接入",
        "检查 Git",
        "检查页面",
        "进入首次任务"
      ],
      "script": [
        "【操作提示｜课件 p18，第 1 步；留在课件，指向“模型能响应”，不重复发送请求】\n\n最后对照屏幕，把准备情况过一遍。先看工具：App 或 CLI 至少有一个已经正常安装，而且能完成刚才的读取请求。检查时就拿真实返回和文件原文对照。如果还卡在安装或接入，回到前面的对应步骤处理，处理好再开始自己的修改任务。",
        "【操作提示｜推进课件 p18 第 2 步，指向“Git 能看变化”；停留课件，不重新演示加行】\n\n再看 Git。刚才在 README 里加一行以后，你能在 status 里找到它，也能在 diff 里找到那句新增文字。练习结束后，自己加的内容已经删回去了。以后看到 AI 交回修改，我们就有办法打开这些差异，看看它具体做了什么。",
        "【操作提示｜推进课件 p18 第 3 步 → 切回 Chrome 已有“练习欢迎页”标签页，刷新并核对；必要时短暂切“页面服务”终端确认进程仍运行，再回课件。页面未通过时不把准备说成全部完成】\n\n最后看页面。本地服务保持运行，浏览器能打开自己这份项目的欢迎页，而且原来的欢迎语还在。先保留这个状态，下一节就在这份项目上继续。\n\n如果你暂时有一项卡住，可以先看后面的演示，回头再补操作。这一节不用另外提交准备作业，关键是开始实操时，这几项都能用。",
        "【操作提示｜推进课件 p18 第 4 步，揭示首次修改与第一章提示；停留课件，不提前发修改请求。保留项目、服务终端和“练习欢迎页”标签页，供 1.1 接续】\n\n下一节，我们就把第一次修改交给 AI：换掉这句欢迎语，再一起检查页面和 diff，看看它到底改了哪里。这就是我们这门课的 Hello world。我们在第一章见。"
      ],
      "seconds": 90,
      "segment": "启动 course-starter",
      "source": "index.html#p18",
      "teaching": [
        {
          "title": "录制提示",
          "text": "按实际环境演示并记录结果；账号、模型接入与安装路径未在本轮实测，不预读成功台词。"
        }
      ]
    }
  ],
  "segments": [
    {
      "label": "安装 & 接入",
      "seconds": 265
    },
    {
      "label": "Git 与项目",
      "seconds": 265
    },
    {
      "label": "启动 course-starter",
      "seconds": 325
    }
  ]
};

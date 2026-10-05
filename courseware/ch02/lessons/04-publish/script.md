# 2.4 公开的不只是页面

> 由 tools/build-lesson.py 生成。

## P43 推送之后谁能看到

[对应课件](index.html#p43)

### 口播

**第 1 步 · 回到地图**（[演示](index.html?mode=slides&step=0#p43)）

到现在为止，我们所有的提交都只在自己电脑上，tag 也是本地的。这一节要第一次推送到 GitHub，并把页面发布出去。

**第 2 步 · 页面和源码**（[演示](index.html?mode=slides&step=1#p43)）

推送以后，别人能看到什么？最直观的是页面，有了公开 URL，任何人都能打开。仓库是公开的，所以源码也能看到，每个文件都能点开。

**第 3 步 · 还有历史**（[演示](index.html?mode=slides&step=2#p43)）

第三层最容易忘：整段提交历史。每一次提交的内容都会公开，包括某次提交里出现过、后来又删掉的文件。推送和本地提交不一样，它是我们这门课第一个对外的副作用，推出去就收不回来。所以推送之前，先看清即将公开的是什么。

### 讲师提示

主转折在本节：无论历史里有没有问题，“公开的不只是页面”这个认识都成立，不依赖录制时的实际内容。

## P44 仓库是公开的吗

[对应课件](index.html#p44)

### 口播

**第 1 步 · 打开仓库**（[演示](index.html?mode=slides&step=0#p44)）

切到浏览器，打开 GitHub 上自己的仓库首页。这个仓库是课程开始时用 Template 生成的。

**第 2 步 · 看什么**（[演示](index.html?mode=slides&step=1#p44)）

看两样东西。仓库名旁边的标记，是 Public 还是 Private。再看远端现在有什么：应该只有 Template 生成的那个初始提交，我们后来的提交都还没推上来。

**第 3 步 · 先不改**（[演示](index.html?mode=slides&step=2#p44)）

本课用 GitHub Pages 发布，要求仓库是公开的，课前准备页已经提醒过。如果你的仓库现在是私有的，先别急着改成公开。看清楚即将公开的内容，再做决定。

### 讲师提示

GitHub 免费账号的 Pages 需要公开仓库；仓库设置界面按录制时 GitHub 版本核对。若学员仓库是私有的，改成公开前还要检查远端已有的内容与历史，不能只看 origin/main..HEAD。

## P45 即将公开的历史

[对应课件](index.html#p45)

### 口播

**第 1 步 · 列出提交与作者**（[演示](index.html?mode=slides&step=0#p45)）

在项目目录运行这几条命令。git fetch origin，先取回远端的最新状态。git log --stat origin/main..HEAD，意思是：列出本地有、远端 main 还没有的提交，也就是即将公开的提交，每个提交下面列出它动过的文件。某次提交加进来、后来又删掉的文件也会列出来，推上去同样能看到。最后一条只看作者：列出这些提交里出现过的姓名和邮箱。

**第 2 步 · 作者与过程记录**（[演示](index.html?mode=slides&step=1#p45)）

看看列出了什么。第一样很容易被忽略：每个提交都记着作者的姓名和邮箱，那是你本机 Git 配置里写的，推送以后所有人都能看到。第二样是 docs/evidence 下本章的过程记录，这是我们的工作过程，也一起公开。

**第 3 步 · 个人内容**（[演示](index.html?mode=slides&step=2#p45)）

还有 2.2 刚写进去的项目经历，这是关于具体的人的事实。文件列表只能告诉我们“有什么”，不能告诉我们“能不能公开”。所以还要运行第三条，git log -p，把每一处实际改动的文字展开读一遍。截图这类二进制文件，要另外打开看。请暂停视频，在自己的项目里运行这几条命令。

### 命令说明

远端已有 GitHub Template 生成的初始提交；origin/main..HEAD 只列出本地新增提交（Git 2.50.1 实测）。作者命令 2026-10-03 在本地裸仓库实测：只列出本地新增提交的作者，Template 初始提交的作者不在其中。course-starter 默认分支为 main，学员分支名不同时相应替换。

### 讲师提示

本页只依赖本章产生的内容（提交作者、CH02 记录、2.2 的项目经历），不要求学员保留之前各章的证据文件；学员仓库里有更早的记录时，一并按同样方法检查。画面中的作者用占位，不展示讲师真实邮箱。

## P46 能让所有人看到吗

[对应课件](index.html#p46)

### 口播

**第 1 步 · 作者邮箱**（[演示](index.html?mode=slides&step=0#p46)）

先看刚才列出的作者。每个提交里都写着作者的姓名和邮箱，来自你本机的 Git 配置。如果那是你的私人邮箱，推送以后它就挂在公开历史里了。不想公开，就先停下，把 Git 的邮箱换成 GitHub 提供的 noreply 邮箱。注意，改配置只影响之后的提交，已经做过的提交还带着旧邮箱，要换掉它们就得改写历史。改写历史不在本课范围，GitHub 官方文档有说明，链接放在阅读模式这一页的底部。

**第 2 步 · 三项排查**（[演示](index.html?mode=slides&step=1#p46)）

再对照判断清单，前三项要确认“没有”：有没有 secret，比如 API 密钥、令牌，或者整份配置文件；有没有未经同意的他人信息，比如别人的姓名、联系方式、经历和照片；截图里有没有隐私，比如桌面上的文件名、弹出的通知。2.2 的项目经历借用了我们两位讲师的经历，这是本人同意公开的；你如果写了别人的事，要先问过对方。

**第 3 步 · 本人意愿**（[演示](index.html?mode=slides&step=2#p46)）

第四项是本人愿不愿意公开，作者邮箱也算在里面。这是每个人对自己内容的判断，没有标准答案：有人愿意用常用邮箱，有人只用 noreply，都合理。

**第 4 步 · 停止条件**（[演示](index.html?mode=slides&step=3#p46)）

只要有一项不行，就先停下，不推送。推出去就收不回来了。怎样从历史里去掉一个文件、换掉旧邮箱，看 GitHub 官方文档；那些操作会改写历史，不在本课范围，做之前要人工复核。请暂停视频，逐项判断你的内容，把结论写进记录。

### 参考链接

设置提交邮箱与 noreply 邮箱：https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address；从仓库历史中删除敏感数据：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository。两者都会涉及改写历史，主课不演示，做之前人工复核（2026-10-05 讲师确认：不做配套页，口播指向官方文档）。

### 核对记录

GitHub 文档（2026-10-03 查阅）：从命令行推送的提交使用本地 Git 配置的 user.email；修改配置只影响之后的提交；GitHub 为账号提供 noreply 邮箱。noreply 地址的具体格式与相关隐私设置按录制时的 GitHub 设置页核对，画面不写具体格式。

### 讲师提示

2026-10-03 讲师确认：示范例子由“第 1 章环境记录中的系统用户名”（提案决定 18）改为提交作者邮箱，使本节不依赖之前各章的证据文件。录制时按讲师实际情况判断，不预写“可以公开”。

### 跟做产出

推送前检查记录：列出的提交、文件与作者，四项判断结果，结论（推送 / 暂停及原因）。

## P47 让 Codex 写部署工作流

[对应课件](index.html#p47)

### 口播

**第 1 步 · 仓库名**（[演示](index.html?mode=slides&step=0#p47)）

部署需要两样东西。一个是 GitHub Actions 工作流：每次推送后，GitHub 在它自己的机器上安装依赖、构建，再把 dist 发布成页面。另一个是 Vite 的 base 配置：页面放在仓库名这一级路径下，资源路径要跟着改。Context 里写清自己的仓库名和 Pages 地址，不要让它猜，更不要照抄讲师的仓库名。

**第 2 步 · 不推送**（[演示](index.html?mode=slides&step=1#p47)）

Constraints 里最重要的一句：不推送、不修改仓库设置。推送和启用 Pages 是对外的副作用，这类操作由人确认，不交给 Codex。

**第 3 步 · 解释权限**（[演示](index.html?mode=slides&step=2#p47)）

我们还要求它说明每个权限为什么需要，下一页要逐项审查。请暂停视频，把仓库名和地址换成你自己的，提交 Prompt。

### 请求

```text
Goal：用 GitHub Actions 把这个 Vite 项目发布到 GitHub Pages。
Context：仓库名是 <我的仓库名>，
Pages 地址是 https://<用户名>.github.io/<仓库名>/。
Constraints：只新增工作流文件和必要的 Vite 配置；
不推送、不修改仓库设置；说明每个权限为什么需要。
Done when：本地 npm run build 成功；我能逐项解释工作流做了什么。
```

### 切到实操

Codex 生成的文件以录制实际为准；不提供兜底参考工作流（决定 2），出错时让 Codex 再试。

## P48 工作流能直接用吗

[对应课件](index.html#p48)

### 口播

**第 1 步 · base**（[演示](index.html?mode=slides&step=0#p48)）

Codex 生成了两处改动。第一项看 vite.config.ts 里的 base。页面发布后的地址是“用户名点 github 点 io 斜杠仓库名”，所以 base 必须是斜杠、你的仓库名、斜杠。抄错一个字母，页面就会白屏。

**第 2 步 · 资源路径**（[演示](index.html?mode=slides&step=1#p48)）

第二项，资源路径。本地运行 npm run build，打开 dist/index.html，看引用的 CSS 和 JS 路径是不是以斜杠仓库名开头。这是检查 base 有没有生效的直接证据。

**第 3 步 · 权限**（[演示](index.html?mode=slides&step=2#p48)）

第三项，工作流权限。常见的是三项：读取仓库内容；写入 Pages；获取部署用的身份令牌。每一项都应该能说出用途，这就是我们让 Codex 解释权限的原因。多出来的写权限，比如能改仓库内容，要问清楚为什么。

**第 4 步 · 触发分支**（[演示](index.html?mode=slides&step=3#p48)）

第四项，触发分支：推送到哪个分支时运行。要和你仓库的默认分支一致，course-starter 默认是 main。四项有一项不对，就不推送，让 Codex 改，改完再审一遍。工作流和配置也是即将公开的内容，下一页提交以后，还要再看一遍待推送的提交。

### 讲师提示

左侧示意采用 GitHub 官方 Pages 工作流的常见权限组合，录制时换成 Codex 实际生成的文件并逐行讲。Node 版本若与 .nvmrc 不一致，也在这里指出。不准备错误的 base 分支（决定 7）。

### 跟做产出

工作流与 Vite 配置的审查结论，随推送前检查记录一起写。

## P49 推送并启用 Pages

[对应课件](index.html#p49)

### 口播

**第 1 步 · 提交并复查**（[演示](index.html?mode=slides&step=0#p49)）

检查都过了，先提交部署配置。提交以后，再运行一遍推送前检查的那几条命令：这次列出的才是最终要公开的全部提交，包括刚提交的工作流和配置。

**第 2 步 · 先设来源再推送**（[演示](index.html?mode=slides&step=1#p49)）

推送之前先把 GitHub 这边准备好。仓库如果还是私有的，现在才改成公开，因为待公开的内容已经看过了。然后打开仓库的 Settings，找到 Pages，把来源设成 GitHub Actions：工作流要在启用之后才能部署。最后由我们自己在终端执行 git push。切到 Actions 页，能看到工作流正在运行，点进去可以看每一步的日志。

**第 3 步 · 失败时**（[演示](index.html?mode=slides&step=2#p49)）

第一次部署不一定成功。失败了，按顺序找出在哪一环：Actions 日志里哪一步红了；同样的 build 在本地能不能复现；页面打开了，Network 面板里哪个资源是 404。

### 切到实操

顺序是提交 → 复查待推送提交 → 必要时改为公开 → 设置 Pages 来源 → 推送；GitHub 文档要求先为仓库启用自定义工作流（2026-10-05 查阅 Using custom workflows with GitHub Pages）。若录制时先推送了，在 Actions 页对失败的运行点 Re-run，并确认新运行成功。Pages 来源设置界面按录制时 GitHub 版本核对。讲师录制时若真的失败，失败过程保留在本页。首次部署若自然出错，就地从 Actions 日志、build 输出和 Network 定位并保留；没有出错不伪造（决定 7）。

### 讲师提示

推送和启用 Pages 由人执行，不交给 Codex（回扣 1.6）。

## P50 Actions 绿了就行吗

[对应课件](index.html#p50)

### 口播

**第 1 步 · 绿色对勾**（[演示](index.html?mode=slides&step=0#p50)）

Actions 显示绿色对勾，部署成功。但这只说明构建和上传都没报错，不说明页面能用。比如 base 写错，Actions 照样是绿的，页面却是白的。

**第 2 步 · 未登录窗口**（[演示](index.html?mode=slides&step=1#p50)）

第一项，用浏览器的无痕窗口，也就是未登录状态，打开公开 URL。别人第一次访问时看到的就是这个样子。

**第 3 步 · Network**（[演示](index.html?mode=slides&step=2#p50)）

第二项，打开开发者工具的 Network 面板，刷新一次，看有没有状态是 404 的资源。CSS、JS 有一个没加载上，页面就会走样。

**第 4 步 · 停用缓存再刷新**（[演示](index.html?mode=slides&step=3#p50)）

第三项，在 Network 面板勾选 Disable cache，也就是停用缓存，再刷新一次，页面仍然正常。普通刷新可能还在用浏览器缓存里的旧文件，停用缓存以后，看到的才是服务器上现在的版本。三项都过了，才能说发布成功。把结果写进记录。

### 跟做产出

三项发布检查结果与公开 URL；URL 是必做自检项，课程不统一收取。

## P51 标记这个版本

[对应课件](index.html#p51)

### 口播

**第 1 步 · 打 tag**（[演示](index.html?mode=slides&step=0#p51)）

发布检查通过了，给这个版本做个标记。运行 git tag ch02-homepage-live。

**第 2 步 · 只推送这一个**（[演示](index.html?mode=slides&step=1#p51)）

然后只推送这一个 tag：git push origin，后面跟 tag 的名字。远端只会多出这一个 tag。

**第 3 步 · 为什么不用 --tags**（[演示](index.html?mode=slides&step=2#p51)）

为什么不用 git push --tags？它会把所有本地 tag 一起推上去，包括之前各章的检查点，和练习时随手打的。推送 tag 也是公开，一样要知道推的是什么。

### 核对记录

2026-10-02 用本地裸仓库实测：只推送单个 tag 时远端只出现该 tag（Git 2.50.1）。

## P52 本节小结

[对应课件](index.html#p52)

### 口播

**第 1 步 · 本节做了什么**（[演示](index.html?mode=slides&step=0#p52)）

回看这一节：推送之前，先列出即将公开的提交、文件和作者，由人判断能不能公开；Codex 写的部署配置逐项审过再提交；GitHub 这边设好 Pages 来源，再由我们自己推送；最后用三项检查证明页面可用，只推送 ch02-homepage-live 这一个 tag。首页现在有了一个公开 URL。

**第 2 步 · 两个认识**（[演示](index.html?mode=slides&step=1#p52)）

这一节留下两个认识。推送之前，看的不只是页面，还有整段历史。Actions 成功，不等于页面可用。

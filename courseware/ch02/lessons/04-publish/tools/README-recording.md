# 2.4 录制前准备

讲师沿用此前发布排练的 `prompt-to-harness` 组织；学员使用自己的仓库，不需要组织成员资格。本次准备建立可直接开讲的录制起点，不重跑备课实验。下面保留通用准备方法；本次已经完成的项目见状态表，开录前不用再执行建仓和恢复命令。

## 2026-11-01 第 01 场：已准备状态

- 已创建 [公开空仓库](https://github.com/prompt-to-harness/ch02-pages-release-20261101-01)，未初始化文件、未推送，尚未设置 Pages。
- 按讲师纠正，沿用原有 `rec-20261025-1612/personal-homepage` 录制项目。已核对 HEAD 为 `f5a7315`（homepage-v2），分支 `codex/ch02-recording`，工作区干净；无需恢复覆盖。此前另建目录与 5184 预览不作为本次录制起点，安装和 build 的旧检查不能转记到这里。具体本机路径见该录制目录旁的 `START-HERE.md`。
- origin 当前仍是 `https://github.com/prompt-to-harness/course-starter.git`，p44 现场改到新仓库；无部署工作流、无 `ch02-homepage-release` tag。
- gh 2.102.0 已登录，浏览器账号一致，组织成员为管理员；仓库 Actions 已启用。令牌带 repo、workflow scopes；未通过实际推送或修改 Pages 测试权限。
- Codex 0.163.0、Agent Lab 0.1.3 沿用既定基线；此前隔离配置为另建目录所准备，不据此断言讲师原录制目录的会话状态。本轮未启动模型、未验证当日额度。
- Node 26.12.0 / npm 11.20.0 下安装、构建通过；快照 `.nvmrc` 声明 22.19.0，本次没有改动项目或升级工具。
- PPT 和口播继续明确区分今天的现场与 2026-10-25 排练。公开内容与完整历史的人工判断仍留 p44；尚未出声试读或正式录制。

## 本次用哪一个仓库

- 本地代码：沿用讲师实际录制的 homepage-v2（本次 `f5a7315`）；只有缺失起点时才使用旧排练快照 `ch02/2.3-done-20261025`，不覆盖已有录制成果。
- 远端：`prompt-to-harness/ch02-pages-release-<录制日期>-<场次>`，如 `prompt-to-harness/ch02-pages-release-20261101-01`。完整重录换新场次；仅补录讲解不新建仓库。
- Pages 地址：`https://prompt-to-harness.github.io/<本次仓库名>/`，不使用课程站点自身的仓库。
- 发布 tag：`ch02-homepage-release`。它是本次项目里的 Git tag，本节不创建 GitHub Release。旧排练材料中的 `ch02-homepage-live` 是历史实测名，保留不改。

## 用 gh 提前建公开空仓库

先由本人离屏核对 gh 当前账号、组织权限和登录状态。账号要能在课程组织下创建仓库、修改 Pages 设置、推送工作流；组织策略须允许本次 Pages 与 Actions。浏览器、gh 和 Git 推送使用的身份也要核对。

```sh
gh --version
gh auth status --hostname github.com
```

沿用课程的 gh 浏览器登录方式，缺少工作流权限时，由本人补充：

```sh
gh auth refresh --hostname github.com --scopes workflow
```

在同一个终端中确定本次名称并创建：

```sh
CH02_RECORD_DATE="$(TZ=Asia/Shanghai date +%Y%m%d)"
CH02_RECORD_TAKE="01"
CH02_RELEASE_REPO="ch02-pages-release-${CH02_RECORD_DATE}-${CH02_RECORD_TAKE}"
CH02_RELEASE_TARGET="prompt-to-harness/${CH02_RELEASE_REPO}"

gh repo create "$CH02_RELEASE_TARGET" --public
```

只建公开空仓库，不加 README、.gitignore 或许可证，不使用 `--source`、`--push`、`--template`，不提前设置 Pages。若名字已存在，先核对它是否属于本次录制；已用于发布的仓库不清空复用，换场次。仓库可通过浏览器创建，gh 只是省去录前的网页操作；依据见 [gh repo create 官方手册](https://cli.github.com/manual/gh_repo_create)。

公开的是空仓库；项目代码和提交历史仍在本地，检查后才推送。本次不安排 Private → Public 切换。使用公开仓库符合课程的 GitHub Free Pages 路径，见 [GitHub Pages 说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)。

空仓库建好后，准备好它的 HTTPS 地址，**origin 的修改留到 p44 现场演示**。在本次录制项目根目录先看原地址、再修改、最后复查（不是在备课仓库目录执行）：

```sh
git remote -v
git remote set-url origin "https://github.com/${CH02_RELEASE_TARGET}.git"
git remote -v
```

上面的变量来自前面建仓的终端。现场换了终端时，直接把网页复制的 HTTPS 地址填入 set-url 命令。录前保留克隆时的 origin；现场改完核对 fetch、push 都指向本次仓库，不推送。

## 开录前核对

1. **本地起点**：工作区干净，核对当前分支与将要生成的部署触发分支一致，依赖已安装，本地 build 和页面可用；尚未包含本节新写的部署工作流和发布 tag。恢复快照沿用 [demo.sh 的快照准备入口](../../01-request/tools/README-demo.md#从某一节的快照起跑)，不另写恢复工具。
2. **目标信息**：p47 PPT 保留通用占位符；把本次仓库名、组织名 `prompt-to-harness` 和 Pages 地址填进逐字稿第 3 步操作提示里的复制版本。录前只备好目标地址；p44 现场查看、修改和复查 origin，不把它指向课程站点或已经发布过的排练仓库。
3. **工具与权限**：gh 登录与 Git 推送凭据就绪；Agent Lab 按新项目目录启动，使用课程已核验的配置和请求查看器，不在开录时升级版本；未保存本次联网命令的长期批准规则。
4. **画面与隐私**：备好课件、讲稿、编辑器和 GitHub 仓库标签页；离屏看过完整历史、作者邮箱、个人资料和截图。gh 登录输出与网页账号资料上屏前检查，不展示令牌。
5. **已有证据**：PPT 继续使用 2026-10-25 的记录；p49b 是同项目的新会话补跑，当时部署已结束。现场这次可能还在运行，按实际状态处理，不追求同样的 404、警告或批准次数。

## 录制中保留的动作

p44 打开提前建好的公开空仓库，现场查看原 origin、改成目标地址并复查，再让 Codex 做公开前只读检查、由人核对报告与公开范围；p47–p48 生成配置、审查并提交，核对新增提交；p48b–p49a 查询和设置 Pages，结合一次实际批准说明执行边界；p49b 由人推送并发部署查询，再看请求里的实际返回；p50 检查页面；p51 打发布 tag 并只推送它。

首次推送、Pages 设置和部署查询仍留在演示中，不在录前预先完成。PPT 的两处重点是设置与部署结果怎样进入 context；完整历史命令、长调用、日志警告和异常处理只在需要时展开。备用记录沿用已有材料，不为了 Public 或新名字重跑实验。

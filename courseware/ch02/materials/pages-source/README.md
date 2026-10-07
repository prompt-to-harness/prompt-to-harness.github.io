# 预检：让 Codex 用 gh 修改 Pages 部署来源（2026-10-07）

> 状态：讲师机器上的一次预检，未录制、未试讲，未经另一位讲师复现。服务于 2.4 的一个待确认提议（见 [2.4 分镜](../../lessons/04-publish/STORYBOARD.md)末尾）。GitHub 的界面与 API 行为以录制当天为准。

## 要回答的问题

仓库设置（如 Pages 的部署来源）只能在网页上改吗？能不能让 Codex 用命令改，人在网页上刷新确认？

先更正一个常见误解：**Git 改不了仓库设置。** Git 只管仓库里的文件和历史；Pages 来源、环境规则等是 GitHub 平台的设置，命令行要通过 GitHub CLI（`gh`）调用 GitHub 的 REST API。

## 起点与条件

- 临时公开仓库（讲师个人账号，实验后由讲师删除）：`main` 只有 README，没有 workflow；`course-run` 带 2.4 的 Pages workflow 和一个静态页面。Pages 来源为 GitHub Actions，页面由 `course-run` 部署。
- Codex CLI 0.160.1，MiniMax-M3.1-Flash-Preview，`codex exec --json`；`CODEX_HOME` 指向独立目录（配置与 `tools/clean-codex.sh` 相同），**HOME 保持真实**，gh 用讲师机器已有的登录（macOS 钥匙串）。
- 沙箱 `workspace-write`，并打开 `sandbox_workspace_write.network_access=true`。

用到的 API（GitHub REST，`gh api` 调用）：

```bash
gh api repos/<owner>/<repo>/pages --jq '{build_type, source}'          # 查：workflow = GitHub Actions；legacy = 从分支部署
gh api --method PUT repos/<owner>/<repo>/pages -f build_type=legacy -f 'source[branch]=main' -f 'source[path]=/'
gh api --method PUT repos/<owner>/<repo>/pages -f build_type=workflow   # 改回 GitHub Actions
```

## 运行与结果

| 轮次 | 条件 | 结果 |
| --- | --- | --- |
| 1 | 用 `tools/clean-codex.sh`（隔离 HOME），`GH_CONFIG_DIR` 指向真实配置 | 失败：gh 显示“token invalid”。gh 的 token 在 macOS 钥匙串里，钥匙串按 HOME 查找，隔离 HOME 后取不到。Codex 改用匿名 `curl` 拼出现状，没有改任何设置，并反问“切到 main 根目录后线上会变成 README，确定吗” |
| 2 | 同上，沙箱改为 `danger-full-access` | 同样失败，原因相同（不是沙箱）。Codex 检查环境变量时执行了 `echo ${GH_TOKEN:+yes}${GH_TOKEN:-no}`：若 token 放在环境变量里，这条命令会把 token 原文打印进对话、发给模型 |
| 3 | HOME 真实、`CODEX_HOME` 独立，`workspace-write` + 网络 | 成功。Codex 先查（`build_type: workflow`），用 PUT 改成从 `main` 根目录部署，再查一次确认；说明“改设置本身不触发构建，线上内容暂时不变” |
| 3 续 | `resume --last`：“我已经在网页上看到了，请改回 GitHub Actions” | 成功，复查为 `workflow`；指出 PUT 返回 204 无内容，所以一律用单独的 GET 复查 |

预检中另外不经 Codex、直接用 `gh api` 测了改来源的副作用：

- 只改来源、不推送：没有新构建，线上页面不变（观察 2 分钟）。
- 来源停在“从分支部署”时向 `main` 推送：约 1 分钟后 GitHub 自动跑 `pages build and deployment`，线上页面被 `main` 根目录内容替换（这里是 README 渲染的页面；Vite 项目会是未构建的源码入口）。
- 改回 GitHub Actions 后线上**不会自动恢复**，要重新运行一次部署 workflow。

## 交互界面实测（同日）

按 2.4 的建议放法：先把临时仓库切到“从分支部署”，再在交互界面请 Codex 设为 GitHub Actions。条件：`codex`（交互界面，默认权限：`workspace-write`、无网络、按需请求批准），HOME 真实，`CODEX_HOME` 独立，首次进入目录时选“Trust and continue”。人的部分由讲师代答，每次只选“Yes, proceed”，不选“以后不再询问”。Prompt：

```text
请用 GitHub CLI（gh）把这个仓库的 GitHub Pages 部署来源设为 GitHub Actions。先查现在的设置，执行修改前告诉我要运行的命令；改完再查一次，并告诉我在网页哪里确认。不推送，不改仓库里的文件。
```

| 观察 | 结果 |
| --- | --- |
| 沙箱内运行 gh | 读不到钥匙串里的登录（显示 token invalid），连不上 `api.github.com`。Codex 判断“网络在沙箱里被挡住了”，改为请求在沙箱外运行 |
| 权限请求的样子 | 每条都显示完整命令和中文理由，如“读取仓库的 GitHub Pages 当前配置（只读）”“把该仓库的 GitHub Pages 部署来源从分支（legacy）切换为 GitHub Actions（workflow）。要允许执行这条修改命令吗？” |
| 请求次数 | 13 次：9 次只读查询（登录状态、Pages 配置、工作流、分支、运行记录、文件），2 次修改，2 次复查。“以后不再询问”只对完全相同的命令开头生效，几乎用不上 |
| “执行修改前告诉我” | 列出命令后紧接着说“现在执行”，没有等人回复；真正停住它的是权限请求 |
| 修改命令 | 第一次用了 `POST`（新建站点），返回“GitHub Pages is already enabled”；Codex 自己改用 `PUT`，成功（204） |
| 复查与说明 | 复查 `build_type` 为 `workflow`；指出 `source` 字段是残留值；给出 Settings → Pages 的位置，并说明“没有实际打开网页确认” |
| 不准确的判断 | 说“`main` 上没有 workflow，站点不会再自动构建”。实际上 `course-run` 推送时用的是它自己分支上的 workflow，照样能部署（见上文与 course-starter 契约） |

对 2.4 的含义：

- 这次 13 次批准大多来自临时仓库的特殊结构（Codex 在找 workflow 在哪）；学员仓库 `main` 上已有刚提交的 workflow，预计少得多，但录制前要在讲师的录制仓库再跑一次。
- 批准框是本节真正的人机边界：命令和理由都在框里，读一遍再批准；修改类命令（`PUT`、`POST`）要看清方法和对象。Codex 自己写的“先告诉我再执行”不等于会停下来等。
- 网页确认仍由人做：Codex 只用 API 复查，没有看到网页。

## 结论与边界

- 能做：Codex 可以用 `gh` 查询和修改 Pages 来源，人在 Settings → Pages 刷新即可看到变化。
- 前提：学员装了 `gh` 并由本人完成 `gh auth login`（交互式登录，人来做）；课程环境检查单目前没有 gh。Codex 在默认沙箱里没有网络，交互界面中会逐条请求在沙箱外运行，由人批准（见上节）。
- token 不放进环境变量，也不贴进对话；用 gh 自带的登录（钥匙串）。
- 来回切换只在“期间不推送”时无害；忘了改回又推送，线上会被替换，改回后还要重跑部署。
- 未测：首次开启 Pages（仓库还没有 Pages 时用 `POST .../pages -f build_type=workflow`）由 Codex 执行；学员仓库结构下的请求次数；网页设置页的实际显示（本次只用 API 复查）；Windows 与 Linux 上 gh 的凭据存储。

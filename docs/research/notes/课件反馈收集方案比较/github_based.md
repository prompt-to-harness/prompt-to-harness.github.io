# 基于 GitHub 的课件反馈收集方案（giscus / utterances / 预填链接 / Edit this page）

> 调研日期：2026-10-11。标注说明：**已核实** = 有官方文档或源码 URL 支撑；**待实测** = 文档未覆盖或只有社区说法，需要在真实环境（尤其是中国大陆网络）里测一次；**传闻** = 个人博客的经验之谈，没有说明测试方法。

## 1. giscus：映射、懒创建、预填、动态切换、导出

### Takeaway
giscus 是目前最成熟的 GitHub 原生评论挂件：每个页面（或通过 `specific`/`setConfig` 每个 scene）映射到一条 Discussion，第一次有人评论或点 reaction 时才自动创建；数据全部在仓库的 Discussions 里，可用 GraphQL / `gh` 导出。主要代价是评论者必须有 GitHub 账号并 OAuth 授权 giscus App；官方文档里也没有给输入框预填文本的接口。

### Cited Findings
- **工作原理（已核实）**：加载时用 GitHub Discussions 搜索 API 按所选映射找对应 discussion；找不到时，giscus bot 会在第一次有人评论或 reaction 时自动创建 discussion（即“懒创建”，不会预先生成空帖）。— [giscus README](https://raw.githubusercontent.com/giscus/giscus/main/README.md)、[giscus.app/zh-CN](https://giscus.app/zh-CN)
- **评论者门槛（已核实）**：评论者必须走 GitHub OAuth 授权 giscus App 代为发帖，或者直接去 GitHub Discussion 页面评论。没有 GitHub 账号只能看，不能评论。— [giscus README](https://raw.githubusercontent.com/giscus/giscus/main/README.md)
- **站点所有者前置条件（已核实）**：仓库必须公开；仓库要安装 [giscus GitHub App](https://github.com/apps/giscus)；要启用 Discussions。官方推荐用 **Announcements 类型**的分类，这样新 discussion 只能由维护者和 giscus 创建（读者只能在里面回复）。— [giscus.app/zh-CN](https://giscus.app/zh-CN)
- **映射方式（已核实，源码）**：`client.ts` 的 `data-mapping` 支持：
  - `pathname`（默认）：取 `location.pathname` 去掉开头的 `/` 和文件扩展名，根路径记作 `index`；
  - `url`：去掉 `giscus` 参数和 hash 后的完整 URL；
  - `title`：`document.title`；
  - `og:title`：`<meta property="og:title">`；
  - `specific`：用 `data-term` 给定的任意字符串；
  - `number`：用 `data-term` 给定的 discussion 编号，直接绑定已有 discussion。
  — [giscus client.ts](https://raw.githubusercontent.com/giscus/giscus/main/client.ts)
- **strict 匹配（已核实）**：GitHub 搜索是模糊匹配，标题相近时可能映射错。`data-strict="1"` 会改为在 discussion 正文里搜标题的 SHA-1 哈希；giscus 新建 discussion 时会自动在正文写入 `<!-- sha1: ... -->`。— [ADVANCED-USAGE.md#data-strict](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)
- **setConfig 动态切换（已核实）**：父页面可以向 `iframe.giscus-frame` 发 `postMessage({ giscus: { setConfig: {...} } }, 'https://giscus.app')`，不重载 iframe 就能改配置。可改字段：`theme, repo, repoId, category, categoryId, term, description, backLink, number, strict, reactionsEnabled, emitMetadata, inputPosition, lang`。所以切换 scene 时可以改 `term`（例如 `ch03/scene-07`）或 `number`，让每个 scene 对应自己的 discussion。— [ADVANCED-USAGE.md#isetconfigmessage](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)
- **backLink 和 description（已核实）**：页面上的 `<meta name="giscus:backlink">` 会作为新 discussion 正文里的回链，默认用 `location.href`；`og:description` 会写进 description。setConfig 也能动态修改 `backLink`，可以让每个 scene 的 discussion 带上精确到 scene 的回链。— [ADVANCED-USAGE.md](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)、[client.ts](https://raw.githubusercontent.com/giscus/giscus/main/client.ts)
- **容器锚点（已核实，源码）**：如果页面里已经有 `.giscus` 容器并带 `id`，回链 origin 会追加 `#id`。— [client.ts](https://raw.githubusercontent.com/giscus/giscus/main/client.ts)
- **输入框预填（未找到支持）**：`ISetConfigMessage` 的字段列表里没有初始评论文本，ADVANCED-USAGE 也没有相关 data 属性。按现有文档，不能把“第 X 页第 Y 段”预填进评论框。— [ADVANCED-USAGE.md](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)
- **Reactions（已核实）**：`data-reactions-enabled="1"` 会在评论前显示主帖 reaction。第一次 reaction 也会触发懒创建 discussion。— [giscus.app/zh-CN](https://giscus.app/zh-CN)、[README](https://raw.githubusercontent.com/giscus/giscus/main/README.md)
- **主题（已核实）**：有内置主题和 `preferred_color_scheme`；`data-theme` 也可以填一个外部 CSS 的 URL（官方提示外部 CSS 有安全风险）；运行时可以用 setConfig 切换 theme。— [ADVANCED-USAGE.md#data-theme](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)
- **懒加载（已核实，源码）**：`data-loading="lazy"` 会给 iframe 加 `loading="lazy"`。另外 `data-input-position="top"` 可以把输入框放到评论上方。— [client.ts](https://raw.githubusercontent.com/giscus/giscus/main/client.ts)、[giscus.app/zh-CN](https://giscus.app/zh-CN)
- **中文界面（已核实）**：`data-lang="zh-CN"`，官网有简体中文页面。— [giscus.app/zh-CN](https://giscus.app/zh-CN)
- **元数据回传（已核实）**：`data-emit-metadata="1"` 时，giscus 会定期通过 postMessage 把 `discussion` 和 `viewer` 发回父页面（前提是 discussion 已存在），可以用来在 scene 导航上显示评论数。— [ADVANCED-USAGE.md#imetadatamessage](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)
- **限制来源域名（已核实）**：仓库根目录的 `giscus.json` 可以设置 `origins`/`originsRegex`，防止别的网站用我们仓库的 discussions；还能设置 `defaultCommentOrder`。— [ADVANCED-USAGE.md#giscusjson](https://raw.githubusercontent.com/giscus/giscus/main/ADVANCED-USAGE.md)
- **会话存储（已核实，源码）**：登录后 session 存在父页面的 `localStorage['giscus-session']`；遇到 Bad credentials 或 State expired 会自动清掉。— [client.ts](https://raw.githubusercontent.com/giscus/giscus/main/client.ts)
- **giscus 的非公开 API（传闻）**：有博主（2026-01）用 `https://giscus.app/api/discussions?repo=...&term=...` 取评论数和 reaction 数。该端点没有 CORS 头，浏览器直接调用会被拦，作者改用公共 CORS 代理绕过。这个端点没有文档，不建议依赖。— [stuartlau 博客 2026-01-21](https://stuartlau.github.io/blogs/tech/2026/2026-01-21-preload-giscus-stats-on-static-site)
- **导出（已核实）**：GitHub GraphQL API 支持对 Discussions 读、建、改、删：`Repository.discussions(categoryId, orderBy, first/after)`、`Repository.discussion(number)` 等。公开仓库用 `public_repo` scope 的 token 即可。— [Using the GraphQL API for Discussions](https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions)
- **gh CLI（已核实）**：`gh` 现在有 `gh discussion` 子命令，`gh discussion create` 支持 `--title/--body/--body-file/--category/--label/--repo`。— [gh discussion create manual](https://cli.github.com/manual/gh_discussion_create)、[gh discussion](https://cli.github.com/manual/gh_discussion)
- **自托管（已核实）**：需要自己建一个 GitHub App（只需 Discussions 读写权限），生成 private key 和 client secret，再部署 web app；Supabase 缓存 token 是可选项。— [SELF-HOSTING.md](https://raw.githubusercontent.com/giscus/giscus/main/SELF-HOSTING.md)
- **官方提醒（已核实）**：giscus 和 GitHub Discussions API 都还在活跃开发，“一些特性可能随时间损坏或变更”。— [README](https://raw.githubusercontent.com/giscus/giscus/main/README.md)

### Inferences
- **scene 级定位**：最省事的做法是 `data-mapping="specific"`，`data-term` 设为 `lesson-id/scene-id` 这种稳定 ID（不要用标题，标题会改），再开 `strict=1`；切换 scene 时用 setConfig 更新 `term` 和 `backLink`。这样每个 scene 对应一条 discussion，AI 导出时 discussion 标题就是定位键。
- **段落级定位**：giscus 本身给不出段落定位，因为它无法预填评论文本。需要段落定位只能二选一：要么让读者手写，要么另做“预填 Issue 链接”按钮（见第 3 节）。
- **分类划分**：建议给 giscus 单独建一个 Announcements 类型的分类（例如“课件反馈”），和讲师讨论区分开，AI 导出时按 `categoryId` 过滤。
- **嵌入的 ID 不算密钥**：嵌入代码里的 `data-repo-id`、`data-category-id` 是公开的节点 ID，不是密钥，可以提交到公开仓库。只有自托管时的 private key 和 client secret 才是密钥，必须放在部署平台的环境变量里。
- **演示模式**：录屏用的演示模式里应隐藏或不加载 giscus iframe（可以只在阅读模式加载，并加 `data-loading="lazy"`），以免出现在录屏画面里。

### Gaps
- 无法确认 `term` 为中文或带 `/` 时，搜索匹配是否稳定（`strict` 模式按 SHA-1 搜索，理论上不受影响）。**待实测**。
- `setConfig` 修改 `term` 后，能否在同一 iframe 内正确地懒创建新 discussion：文档说能改，但没写边界行为。**待实测**。
- `gh discussion list/view` 是否支持 JSON 输出各条评论：本次只核实了 `create` 页面，导出建议以 `gh api graphql` 为准。

## 2. utterances：机制与维护状态

### Takeaway
utterances 用 GitHub Issues 存评论，映射方式和登录门槛与 giscus 类似，但主仓库最近一次提交停在 2022-02，可视为停止维护；新项目没有理由优先选它，除非确实想让反馈直接成为 Issue。

### Cited Findings
- **机制（已核实）**：用 issue 搜索 API 按 `url`、`pathname` 或 `title` 找对应 issue；找不到时，由 utterances-bot 在第一次评论时创建；评论需要 OAuth 授权 utterances App，或者直接去 issue 下评论。— [utterances README](https://raw.githubusercontent.com/utterance/utterances/master/README.md)
- **维护状态（已核实）**：`utterance/utterances` 最近一次提交是 2022-02-11（“update parcel to 2.3.x”）。— [GitHub API commits](https://api.github.com/repos/utterance/utterances/commits?per_page=3)
- **giscus 官方迁移说明（已核实）**：从 utterances 或 gitalk 迁移时，可以把 issue 转成 discussion，giscus 会自动接管。— [giscus README#migrating](https://raw.githubusercontent.com/giscus/giscus/main/README.md)
- **国内可用性（传闻，较旧）**：云游君的博客称 utterances 需要请求 GitHub API，“不开梯子也很难成功加载”；同一篇文章称 giscus 当时“国内似乎尚未被墙，可正常加载”。文章约写于 2020–2022 年，具体日期未标明。— [云游君：第三方评论系统之我见](https://www.yunyoujun.cn/posts/third-party-comment-system)
- **评论者权限（传闻）**：同一作者认为，giscus 比 utterances 和 gitalk 的“权限划分更好”；gitalk 的 OAuth 会申请所有公开仓库的读写权限。— [云游君](https://www.yunyoujun.cn/posts/third-party-comment-system)

### Inferences
- utterances 的每条评论都直接是 Issue，这一点对“AI 读 Issue → 自动开 PR”的流程更直接。但 giscus 的 discussion 也可以由有 triage 权限的人“Create issue from discussion”（见第 6 节），而且 utterances 已停止维护，所以优先 giscus。

### Gaps
- 没有找到 utterances 在 2025–2026 年于中国大陆可用性的实测资料。

## 3. GitHub 预填链接：Issue（含 Issue Forms）与 Discussion

### Takeaway
`issues/new?title=&body=&labels=&template=` 是官方文档明确支持的，Issue Forms 的字段也能用 URL 参数（按字段 `id`）预填。这是实现“段落级定位 + 结构化字段 + AI 可解析”的最低成本方案。`discussions/new` 的 URL 预填没有官方文档，只有 2020–2021 年的社区说法，必须实测。

### Cited Findings
- **Issue URL 查询参数（已核实，官方）**：支持 `title`、`body`、`labels`、`milestone`、`assignees`、`projects`、`template`。`template` 适用于根目录、`docs/` 或 `.github/` 下 `ISSUE_TEMPLATE` 子目录里的模板。— [Creating an issue › from a URL query](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-a-url-query)
- **权限限制（已核实，官方）**：使用某个参数需要有对应权限，例如用 `labels` 参数需要有给 issue 加 label 的权限。URL 不合法或权限不足时返回 404；URL 超过服务器限制时返回 **414 URI Too Long**。— [同上](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-a-url-query)
- **Issue Forms 字段预填（已核实，官方）**：可以用 URL 参数填充 issue form 里自定义的文本字段，这些参数也可以传给模板选择页。表单元素的 `id` 是 URL 预填时字段的规范标识（只允许字母、数字、`-`、`_`）。— [Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-a-url-query)、[Syntax for GitHub's form schema › Keys](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)
- **表单元素类型（已核实）**：`markdown`、`textarea`、`input`、`dropdown`、`checkboxes`、`upload`；form schema 仍是 public preview。— [form schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)
- **Discussion 分类表单（已核实）**：`.github/DISCUSSION_TEMPLATE/<category-slug>.yml` 可以定义表单，顶层支持 `title`（预填默认标题）、`labels`、`body`；提交后各字段转成 Markdown 写进正文。官方文档**没有**提到用 URL 参数预填这些字段。— [Syntax for discussion category forms](https://docs.github.com/en/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms)
- **`discussions/new?category=&title=&body=`（传闻，2020–2021）**：社区帖子称可接受 `category`（填分类名或 slug）、`title`、`body`；另有人反馈旧的 `category_id` 参数已失效。官方创建 discussion 的文档完全没有提到 URL 参数。— [community discussion #2892](https://github.com/orgs/community/discussions/2892)、[Participating in a discussion](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)
- **第三方工具（已核实存在）**：`sindresorhus/new-github-issue-url` 可以生成预填 issue 链接。— [new-github-issue-url](https://github.com/sindresorhus/new-github-issue-url)

### Inferences
- **推荐的链接形态**：每个 scene 或段落旁放一个“反馈”按钮，生成 `https://github.com/OWNER/REPO/issues/new?template=feedback.yml&lesson=ch03&scene=07&anchor=p3&quote=...&title=[ch03/s07] ...`。其中 `lesson/scene/anchor/quote` 是 issue form 的 `input` 字段 `id`。AI 解析时按表单生成的固定 `### 标题` 段落切分即可，比自由文本可靠。
- **不要依赖 `labels` 参数**：外部读者通常没有加 label 的权限，带上 `labels` 可能导致 404。应改在 issue form YAML 的顶层 `labels` 里写死默认标签（issue form 支持顶层 `labels`，这一点基于同类 discussion form 语法推断，issue form 顶层键**待核对**文档）。
- **URL 长度**：GitHub 没有公布具体字节上限，只说超限返回 414。中文经过 percent-encoding 后每个汉字占 9 个字节，所以引用原文时应截断（例如前 200 字）或只传段落 ID。
- 读者点击链接后，未登录会先跳到 GitHub 登录页，**提交仍需要 GitHub 账号**。

### Gaps
- `discussions/new` 的 URL 预填在 2026 年是否仍然有效、是否支持分类表单字段：**待实测**。
- GitHub 的 URL 长度上限（414 的阈值）没有官方数字。**待实测**。
- 未逐条核对 issue form YAML 顶层键（`name/description/title/labels/assignees/projects/type`）的当前文档。

## 4. “Edit this page” → GitHub 网页编辑器直接提 PR

### Takeaway
技术上可行：非仓库成员在网页上点铅笔编辑，GitHub 会自动 fork 并开 PR。但对本课程不太适用：课件是单个 HTML 文件，每页 10–15 个 scene，非开发者需要在 HTML 源码里找位置；而且仍需要 GitHub 账号。这个方案适合讲师和熟练贡献者，不适合作为面向学员的主渠道。

### Cited Findings
- **自动 fork 加 PR（已核实，官方）**：编辑他人仓库的文件时，GitHub 会自动 fork 仓库，并替用户打开 pull request（流程：点编辑 → Fork this repository → 改 → Commit changes → Propose changes）。— [Editing files › in another user's repository](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-another-users-repository)
- **编辑器形态（已核实）**：默认编辑器是 CodeMirror 文本编辑，可以 Preview（Markdown 渲染），也可以选 github.dev。— [Editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- **受保护分支（已核实）**：受保护分支不能在网页上直接编辑或上传。— [同上](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)

### Inferences
- 链接形态 `https://github.com/OWNER/REPO/edit/main/<path>` 能直接进入编辑页（对非成员会先提示 fork）。这是常见做法，本次未单独找到官方文档说明 `/edit/` 路径。
- 如果课件源文件就是渲染后的 HTML（而不是 Markdown 源），对非开发者几乎不可用；而且读者直接改文案，可能绕过 `docs/production/editorial-checklist.md` 的编辑规则，PR 仍需要讲师或 AI 审。

### Gaps
- 本仓库的课件源文件格式和 `tools/build-site.py` 的映射关系不在本次调研范围内，“Edit this page”应指向哪个源文件需要另行确认。

## 5. 中国大陆可访问性（2025–2026）

### Takeaway
没有找到权威的、近期的中国大陆连通性测量。社区说法是 GitHub 相关服务在大陆“慢、不稳定”，而不是“完全不可用”；giscus.app 部署在 Vercel 上，有博主称 `*.vercel.app` 在大陆被墙，但 giscus.app 是自定义域名。自托管 giscus 只能解决 widget 脚本那一段，评论数据、OAuth 登录、头像仍然要走 github.com、api.github.com 和 avatars.githubusercontent.com。结论：**必须在大陆家宽和校园网环境下实测**，并为不可达的情况准备降级入口。

### Cited Findings
- **giscus.app 的托管（已核实/半核实）**：giscus README 底部有 “Powered by Vercel” 标识；有中文博主称“giscus.app 也是使用 Vercel 部署的”，并写了在 Vercel 上自建 giscus 的教程。— [giscus README](https://raw.githubusercontent.com/giscus/giscus/main/README.md)、[dejavu.moe：使用 Vercel 免费部署 Giscus](https://blog.dejavu.moe/posts/giscus-selfhost/)
- **`.vercel.app` 在大陆被墙（传闻，2025-12）**：一篇 Astro 评论系统对比文章称“Vercel 的 `.vercel.app` 域名在国内被墙了”，建议绑定自定义域名。没有给出测试方法。— [eastondev 2025-12-04](https://eastondev.com/blog/zh/posts/dev/20251204-astro-comment-systems-guide/)
- **giscus 在大陆“正常”（传闻）**：较早的云游君文章称 giscus “国内似乎尚未被墙，可正常加载”；搜索摘要显示，某篇 2026 年初的文章在国内访问表格里给 giscus 标了“正常”，但没有说明测试方法（未能打开原文核对）。— [云游君](https://www.yunyoujun.cn/posts/third-party-comment-system)
- **体验差（传闻）**：有中文博主提醒，giscus 依赖 GitHub 登录，“国内网络环境不佳则可能体验有点炸裂”；也有人称 GitHub 相关 API 从国内访问很慢（来自搜索摘要，未逐篇核对原文）。— [lixueduan.com：Hugo 引入 Giscus](https://www.lixueduan.com/posts/blog/02-add-giscus-comment/)、[博客园：使用 Giscus 从入门到放弃](https://www.cnblogs.com/pc2005/p/21936799)
- **utterances 需要翻墙（传闻，较旧）**：utterances 请求 GitHub API，“不开梯子也很难成功加载”。— [云游君](https://www.yunyoujun.cn/posts/third-party-comment-system)
- **giscus 的运行依赖（已核实）**：搜索 discussion 和 OAuth 都要访问 GitHub，所以自托管不能绕开 GitHub。— [README](https://raw.githubusercontent.com/giscus/giscus/main/README.md)、[SELF-HOSTING.md](https://raw.githubusercontent.com/giscus/giscus/main/SELF-HOSTING.md)
- **Cloudflare 版本（已核实存在）**：社区有把 giscus 类服务部署到 Cloudflare Workers 的项目 `giscusflare`；也有通用的 Workers 反代 GitHub 脚本。这类方案要自己维护，并处理 OAuth 回调和合规问题。— [lumirth/giscusflare](https://github.com/lumirth/giscusflare)、[cmliu/CF-Workers-GitHub](https://github.com/cmliu/CF-Workers-GitHub)
- **国内替代（传闻或对比文）**：面向大众的博客多改用 Waline 或 Twikoo（支持匿名评论，后端可部署到腾讯云、Cloudflare 等）。— [eastondev](https://eastondev.com/blog/zh/posts/dev/20251204-astro-comment-systems-guide/)

### Inferences
- 课程站本身托管在 GitHub Pages（`*.github.io`）。如果学员能打开课件页面，说明 github.io 可达，但这不代表 giscus.app、api.github.com 的 OAuth 流程和 avatars 域名同样稳定，需要分别测。
- 用 Workers 反代 GitHub OAuth 有安全和合规风险，与“近零运维”的目标冲突，不建议采用。

### Gaps
- **没有找到**任何 2025–2026 年由可信机构测量的 github.com、giscus.app、api.github.com、avatars.githubusercontent.com 大陆可达性数据（例如 GreatFire 之类的数据本次未检索到）。**全部待实测**：建议在至少 2 种大陆网络（家宽和校园网，最好加上移动网络）下，用浏览器 Network 面板分别记录这四个域名的状态和耗时，以及完成一次 OAuth 授权并评论的全流程。

## 6. 公开性、审核与反垃圾

### Takeaway
所有内容都公开，挂在评论者真实的 GitHub 身份下；审核工具（锁定、关闭、隐藏/最小化、删除、屏蔽用户、转 issue）都在 GitHub 原生界面完成，不需要额外运维。用 Announcements 分类可以防止外人随意新建帖子。

### Cited Findings
- **必须公开（已核实）**：giscus 要求仓库公开，否则访客看不到 discussion。— [giscus.app/zh-CN](https://giscus.app/zh-CN)
- **锁定（已核实）**：triage 及以上权限可以锁定 discussion，锁定后只有有写权限的人能评论，可选保留 reaction；也可以关闭 discussion。— [Moderating discussions](https://docs.github.com/en/discussions/managing-discussions-for-your-community/moderating-discussions)
- **屏蔽用户（已核实）**：组织 owner 或 moderator 可以在组织层面屏蔽用户（永久或限时），可同时隐藏其全部评论。— [Moderating discussions › Blocking](https://docs.github.com/en/discussions/managing-discussions-for-your-community/moderating-discussions)
- **转换（已核实）**：issue 可以转成 discussion；triage 权限可以从 discussion“Create issue from discussion”，正文和标签会自动带过去，原 discussion 保留。— [Moderating discussions](https://docs.github.com/en/discussions/managing-discussions-for-your-community/moderating-discussions)、[Creating an issue › from discussion](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue#creating-an-issue-from-discussion)
- **用户侧工具（已核实）**：用户可以屏蔽他人、举报不当内容。— [Participating in a discussion](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)
- **Announcements 分类防刷（已核实）**：新帖只能由维护者和 giscus 创建。— [giscus.app/zh-CN](https://giscus.app/zh-CN)
- **匿名系统更易被刷（传闻）**：Valine 这类匿名评论、在前端暴露 APP ID/KEY 的系统曾遭批量刷评论。— [云游君](https://www.yunyoujun.cn/posts/third-party-comment-system)

### Inferences
- **对“AI 分诊 → 自动 PR”有利**：评论都绑定 GitHub 身份，垃圾内容少，且导出数据带作者和时间；可用 GitHub Actions 定时（`schedule`）跑 `gh api graphql` 拉取指定分类的新评论，交给 AI 归类。用的是 Actions 内置的 `GITHUB_TOKEN`，仓库里不需要提交任何密钥。Actions 里 `GITHUB_TOKEN` 读 Discussions 需要在 workflow 中声明 `permissions: discussions: read`，这一点基于 GitHub Actions 权限模型的推断，**待核对**。
- **隐私提示**：评论者的 GitHub 用户名和头像都公开，学员如果不想暴露身份，需要另一个渠道（例如私有表单）。这与“公开仓库边界”规则一致：反馈里如果出现个人信息，讲师需要手动隐藏或删除。

### Gaps
- 未核实个人账号仓库（非组织）能否用“屏蔽用户”隐藏其全部评论（文档描述的是组织层面）。个人账号可以从个人设置里屏蔽用户，具体效果**待核对**。
- 未找到 giscus 场景下垃圾评论频率的数据。

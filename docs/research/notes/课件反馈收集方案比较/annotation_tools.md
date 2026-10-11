# 网页批注与可视化反馈工具调研（课件段落/选区级评审意见收集）

调研日期：2026-10-11。标记约定：**已核实** = 本次读到一手文档或实测（附 URL）；**待实测/传闻** = 二手来源、竞品对比页或推断，需要讲师在自己网络环境下验证。竞品价格多数来自厂商写的“替代品对比”页（有利益冲突），只能当量级参考。

## Hypothesis（hypothes.is）：嵌入方式、私有群组、账号、API、数据格式、锚定稳健性、条件加载、国内访问、价格与中文界面

### Takeaway
Hypothesis 是最贴近需求的“现成方案”：选中文字即可批注，数据是标准 W3C 选择器（TextQuoteSelector + TextPositionSelector + RangeSelector，含 prefix/suffix 上下文），有公开 REST API 可按 `uri` / `group` 拉取，适合交给 AI 分诊；私有群组可以让评审意见不公开。主要代价是**每位评审者都要注册 Hypothesis 账号并通过邀请链接加入群组**，且大陆访问稳定性没有可靠来源，必须实测。

### Cited Findings
- **API 读取公开数据无需授权**；其他请求需要认证（spec 原文 “API requests which only read public data do not require authorization”）。— 已核实 [h API v1 OpenAPI spec](https://raw.githubusercontent.com/hypothesis/h/main/docs/_extra/api-reference/hypothesis-v1.yaml)
- **实测**：`GET https://api.hypothes.is/api/search?limit=1` 返回 HTTP 200，无需 token；返回 JSON 含 `id/created/updated/user/uri/text/tags/group/permissions/target/document/links` 等字段。`target[].selector` 同时包含 `RangeSelector`（XPath 形式的 `startContainer`/`endContainer` + offset）、`TextPositionSelector`（`start`/`end` 字符偏移）、`TextQuoteSelector`（`exact` + `prefix` + `suffix`）。`links.incontext` 给出 `hyp.is/<id>/<url>` 形式的“在原文中定位”链接。— 已核实（2026-10-11 本机 curl 实测，端点 https://api.hypothes.is/api/search）
- `/api/search` 参数：`limit` 默认 20、**最大 200**；`sort` 可选 created/updated/group/id/user；`search_after` 是推荐的无状态翻页方式；支持 `uri`、`url`、`uri.parts`、`wildcard_uri`、`group`（按 group ID，可重复传以查多个群组）、`tag`/`tags`、`user` 等。— 已核实 [h API v1 spec](https://raw.githubusercontent.com/hypothesis/h/main/docs/_extra/api-reference/hypothesis-v1.yaml)
- 个人开发者 token 在登录后的 developer 页面生成，放在 `Authorization` header；这类 token 只代表单个用户发请求。— 二手 [Hypothesis 博客：Introducing developer API tokens](https://web.hypothes.is/blog/introducing-developer-api-tokens/)；[h authorization docs](https://github.com/hypothesis/h/blob/main/docs/api/authorization.rst)
- 读取**私有群组**批注需要使用“属于该群组的用户”的 token。— 二手 [Hypothesis 博客（SciBot 案例）](https://web.hypothes.is/blog/introducing-developer-api-tokens/)
- API 也支持创建私有群组（“Create a new, private group for the currently-authenticated user”）和对批注做隐藏/审核（需要 moderate 权限）。— 已核实 [h API v1 spec](https://raw.githubusercontent.com/hypothesis/h/main/docs/_extra/api-reference/hypothesis-v1.yaml)
- **私有群组**：在 `hypothes.is/groups/new` 或侧边栏 scope 选择器中的 “New Private Group” 创建；创建后跳到群组 activity 页，可复制邀请链接；**只有群组成员能看到群组内批注，加入必须通过邀请**。官方提醒：不要在 Public 频道批注群组 activity 页，以免暴露群组。— 已核实 [How to Create a Private Group](https://web.hypothes.is/help/how-to-create-a-private-group/)
- 加入流程：点击邀请链接 → 未登录则提示登录 → 点按钮加入；批注时需要在侧边栏把 scope 从 Public 切换到群组。— 二手（搜索摘要，官方帮助页）[Annotating with Groups](https://web.hypothes.is/annotating-with-groups/)
- 另有 Open / Restricted 群组：Restricted 群组限定在创建者指定的域名上可见，任何人可读、仅成员可写。— 二手（官方博客，日期较早）[Expanding our groups capabilities](https://web.hypothes.is/blog/expanding-our-groups-capabilities/)
- **嵌入配置**：可在页面里放 `.js-hypothesis-config` JSON 块，或定义 `window.hypothesisConfig()` 函数（回调类配置只能用 JS 设置）。相关选项：`openSidebar`（默认 false）、`showHighlights`（默认 `"always"`；`true/false` 为稳定 API，`"whenSidebarOpen"` 等仍属实验）、`groupsAllowlist`（只显示列出的 group ID，用户仍需是成员）、`commentsMode`（只允许整页评论，隐藏选区 adder——**不适合本需求**）、`theme: "clean"`（更简洁的侧栏）、`services`（接入第三方 authority，实验性）。— 已核实 [hypothesis/client config.rst](https://github.com/hypothesis/client/blob/main/docs/publishers/config.rst)
- 嵌入入口有三种：页面嵌入脚本、浏览器扩展、via 代理（via.hypothes.is）；另有 bookmarklet，但在严格 CSP 的站点上不可用。— 二手 [Embedding Hypothesis in Websites and Platforms](https://web.hypothes.is/help/embedding-hypothesis-in-websites-and-platforms/)；[少数派文章](https://sspai.com/post/63033)
- **锚定稳健性**：Hypothesis 使用 fuzzy anchoring，原文或上下文小幅改动、位置移动仍能找回；整段被删除时锚定失败，称为 orphans（帮助页现称 “unanchored annotations”）。存在已知问题：有的批注锚定失败却没有被标为 orphan。— 二手 [Showing Orphaned Annotations](https://web.hypothes.is/blog/showing-orphaned-annotations/)（较早的博客）；[product-backlog #954](https://github.com/hypothesis/product-backlog/issues/954)
- 官方有锚定测试工具，可对一组 URL 统计成功锚定数和 orphans 数并输出 JSON。— 二手 [hypothesis/anchoring-test-tools](https://github.com/hypothesis/anchoring-test-tools)

### Inferences
- **条件加载**（如 `?review=1`）：Hypothesis 嵌入就是一个 `<script>`，完全可以在课件 JS 里判断 `location.search` 后再动态插入脚本 + 配置，演示/录屏模式不加载即可保持画面干净。这是常规做法，但本次未找到官方示例，**待实测**（尤其是与课件“场景切换/演示模式”的 DOM 变动是否冲突）。
- 课件每课一个 HTML、10–15 个 scene：Hypothesis 按 URL 归档，同一课所有 scene 的批注会落在同一个 `uri` 下；如果 scene 用 hash 路由，需要实测 hash 是否被当成不同文档（Hypothesis 一般会做 URI 归一化，待实测）。隐藏（`display:none`）的 scene 里的文字能否锚定和高亮也需要实测。
- AI 分诊链路可行：定时 job 用一个属于私有群组的“机器人账号” token 调 `/api/search?group=<id>&uri=<课件URL>`，拿到 `TextQuoteSelector.exact` 去仓库源文件里 grep 定位，生成 PR 或议题。token 必须存放在 CI secret（如 GitHub Actions secret），不能进公开仓库。
- 嵌入脚本本身不需要任何密钥（group ID 不是秘密，但写进公开仓库意味着群组 ID 公开；由于读取仍需成员身份，风险可接受）。
- 选择器格式是 W3C Web Annotation 标准，若以后自建方案，可以沿用同一 JSON 结构，便于迁移。

### Gaps
- **大陆访问**：没有找到 hypothes.is / via.hypothes.is / api.hypothes.is / 嵌入脚本 CDN 在大陆的可靠访问报告（[中文搜索结果](https://sspai.com/post/63033)只说明有代理入口，未验证可用性）。必须由大陆网络下的评审者实测：打开页面、登录、加载 embed、发批注。
- **API 速率限制**：官方 spec 中未见具体数值；搜索未找到。
- **价格**：本次未读到官方价格页；普遍认知是个人与公开/私有群组免费、机构/LMS 收费——**传闻，待核实**。
- **中文界面**：未找到 Hypothesis 客户端支持中文界面的来源，暂按“仅英文界面”处理，待实测。
- 评审者是否能用国内邮箱顺利注册（验证邮件到达率）未核实。

## Vercel Toolbar Comments / Netlify Drawer（协作式部署预览）

### Takeaway
两者都与各自托管平台深度绑定，不适合“GitHub Pages 托管 + 评审者零门槛”的场景：Vercel 评论面向团队成员且依赖 Vercel 项目；Netlify Drawer 需要评审者注册 Netlify Reviewer 账号、且只作用于 Netlify Deploy Preview。若要用，等于把站点（或预览站）迁到这两家。

### Cited Findings
- Vercel：团队 owner/member 可在生产环境启用 Toolbar；可用浏览器扩展或在项目中加 `@vercel/toolbar` 包；官方建议**有条件地注入**，否则“所有访客都会被提示登录”；生产环境新评论默认不通知具体用户，建议接 Slack 或 @ 人。— 已核实 [Add the Vercel Toolbar to production](https://vercel.com/docs/vercel-toolbar/in-production-and-localhost/add-to-production)
- `@vercel/toolbar` 的 localhost 用法需要用 `vc link` 关联 Vercel 项目。— 二手 [Vercel changelog](https://vercel.com/changelog/vercel-toolbar-now-available-to-use-collaboration-features-in-production)；[npm @vercel/toolbar](https://www.npmjs.com/package/@vercel/toolbar)
- 自定义域名上 toolbar 不出现、后来自行恢复的社区报告（轶事）。— [vercel/next.js discussion #58551](https://github.com/vercel/next.js/discussions/58551)；[vercel/vercel discussion #10879](https://github.com/vercel/vercel/discussions/10879)
- Vercel 评论可集成 Slack 等。— [Integrations for Comments](https://vercel.com/docs/comments/integrations)
- Netlify Drawer：Deploy Preview 默认开启协作，branch deploy 需单独开启；可邀请**无限量免费 Reviewer**，但 Reviewer 必须经批准并在 Drawer 中登录 Netlify；可从 Drawer 直接注册 Reviewer 账号；Reviewer 只能看到被邀请的 Deploy Preview；反馈会自动同步到对应 PR/MR。— 二手（搜索摘要，指向官方文档）[Netlify Drawer overview](https://docs.netlify.com/deploy/review-deploys/netlify-drawer-for-feedback/overview/)；[Netlify Reviewer Quickstart](https://docs.netlify.com/deploy/review-deploys/netlify-drawer-for-feedback/netlify-reviewer-quickstart/)；[Netlify 论坛更新](https://answers.netlify.com/t/collaborative-deploy-previews-improved-reviewer-signup-user-profile-settings-and-annotation-controls/40503)
- 未找到任何来源表明两者的评论功能可用于非 Vercel/Netlify 托管的站点。— 结论来自上述搜索的负面结果

### Inferences
- Vercel 评论人需要是 Vercel 团队成员（或至少有 Vercel 账号），对外部讲师/学员评审门槛高；Netlify 的“同步到 PR”对 AI 分诊有吸引力，但评论落点是 PR 线程而非结构化选区 JSON。
- 迁移托管会与“发布范围由 `tools/build-site.py` 决定、GitHub Pages 发布”的现有流程冲突，不建议为评论功能迁移。

### Gaps
- 两家的评论导出 API 细节、选区精度（是否记录选中文字还是只记录坐标/截图）未核实。
- 大陆访问 vercel.app / netlify.app 的稳定性未核实（社区普遍反映 vercel.app 域名在大陆不稳定——传闻）。

## 可视化反馈 SaaS：BugHerd、Marker.io、Pastel、Userback、Feedbucket、Ruttl

### Takeaway
这类工具的强项是“点一下页面某处 + 截图 + 浏览器信息”，面向代理商/客户验收；多数按月收费（约 $39–59/月起），部分有免费档。它们能接 GitHub/Jira，但**定位单位通常是元素/坐标 + 截图，不是 W3C 文本选区**，对“精确到选中文字、交给 AI 自动改稿”不如 Hypothesis 或自建方案；大陆访问均未核实。

### Cited Findings（价格均来自 2026 年对比页，多为竞品撰写，需到官方价格页复核）
- **BugHerd**：无永久免费档；最低约 $50/月（年付约 $42/月），最多 5 名成员，项目与访客（guests）不限。— 二手 [Feedbucket：BugHerd alternatives](https://feedbucket.app/alternatives/bugherd-alternatives)；[FasterFixes：BugHerd alternatives](https://www.faster-fixes.com/blog/bugherd-alternatives)
- **Marker.io**：无免费档，仅 15 天试用（限 25 个 issue）；最低约 $59/月（年付 $39/月），3 用户/10 项目/10 guests。关于访客：一说 issue 同步和 guest 账号等需 $199 Team 档，另一说 reporter 模式下客户无需账号——**来源互相矛盾**。— [FasterFixes：Marker.io alternatives](https://www.faster-fixes.com/blog/marker-io-alternatives)；[Feedbucket：Marker.io alternatives](https://www.feedbucket.app/marker-io-alternatives/)；[Featurebase](https://www.featurebase.app/blog/marker-alternatives)
- **Pastel**：有免费档，guest 无需登录是其卖点；付费价格一竞品页称 $119/月（可信度低）。— [Feedbucket：Pastel alternatives](https://feedbucket.app/alternatives/pastel-alternatives)；[Zorko：Pastel alternatives](https://zorko.app/pastel-alternatives?from=snapfeed)
- **Userback**：有免费档（2 个项目，反馈 7 天后过期）；付费按席位，约 $7/席/月（年付）起。未找到 guest 免账号的确认。— [Feedbucket：Userback alternatives](https://feedbucket.app/alternatives/userback-alternatives)
- **Feedbucket**：无免费档；$49/月（年付 $39）含 5 个项目、2 名团队成员，另有 $89 档；宣称客户“无需扩展、无需账号”。— [Feedbucket 博客](https://feedbucket.app/blog/visual-feedback-tools)（厂商自述）
- **Ruttl**：免费档（最多 5 用户、1 个项目、5 个页面、1GB），Pro 约 $18/用户/月；以低门槛 guest 反馈著称。— [Feedbucket：Ruttl alternatives](https://feedbucket.app/alternatives/ruttl-alternatives)
- Markup.io 已取消免费档。— [Squarepaste](https://squarepaste.com/blog/7-best-markupio-alternatives-for-website-feedback-in-2026)
- **开源/免费替代**：
  - BugDrop：一个 script 标签，MIT 许可，可自托管，把反馈、截图、标注和浏览器上下文直接建成 GitHub Issues。— 厂商自述 [bugdrop.dev](https://bugdrop.dev/)；[Product Hunt](https://www.producthunt.com/products/bugdrop-2)
  - Agentation：点击元素/**选中文字**/框选区域批注，输出带 CSS 选择器、位置和上下文的 markdown，可经 MCP server 直接同步给 coding agent；需 React 18+、仅桌面浏览器；**许可是 PolyForm Shield 1.0.0（不是 MIT，属 source-available）**。— 已核实 [benjitaylor/agentation README](https://github.com/benjitaylor/agentation)（注意：某搜索摘要称其为 MIT，与 README 矛盾，以 README 为准）
  - feedback-module、Sendmux website-feedback-widget、feedbackfin：通用反馈小部件，把 JSON POST 到自定义端点/Webhook；未见文本选区功能。— [Kajgit/feedback-module](https://github.com/Kajgit/feedback-module)；[Sendmux/website-feedback-widget](https://github.com/Sendmux/website-feedback-widget)；[rowyio/feedbackfin](https://github.com/rowyio/feedbackfin)（较旧）

### Inferences
- SaaS 通常需要在页面嵌入带项目 key 的脚本；这类 key 一般是“可公开”的项目标识而非秘密，但写进公开仓库意味着任何人都能往项目里提交反馈（垃圾反馈风险），需配合 `?review=1` 条件加载。
- BugDrop 直接建 GitHub Issue，与“AI 读 issue → 自动 PR”契合度高，但需要一个后端/GitHub App 持有写权限（自托管就有运维），且评审者在 Pastel/Feedbucket 式的无账号模式下身份不可追溯。
- Agentation 定位“给 coding agent 的 UI 反馈”，思路与本课程主题契合，但依赖 React（本站是静态 HTML）、PolyForm Shield 许可、仅本机 MCP 端点，更适合讲师自己在本地备课用，不适合外部评审。

### Gaps
- 以上 SaaS 在大陆的可访问性（脚本 CDN、截图上传域名）均无来源，待实测。
- 各家 API/导出格式是否包含被选中文字（vs. 仅元素选择器和坐标）未逐一核实；GitHub 集成是否在最低档可用也有矛盾说法。
- 中文界面支持未核实。

## 自建“评审模式”的开源积木：Recogito Text Annotator、Annotorious、Apache Annotator、rangy 等

### Takeaway
最小可用的“选中文字 → 写评论 → 存 localStorage → 导出 JSON”自建方案代码量很小（估计 150–300 行原生 JS，无依赖），用 `@recogito/text-annotator` 可进一步省掉高亮渲染和选区管理。难点不在采集，而在**提交通道**（静态站没有后端，导出 JSON 后要靠评审者手动发文件或开 GitHub Issue）和**评审者身份/垃圾防护**。

### Cited Findings
- `@recogito/text-annotator`：`npm install @recogito/text-annotator`；`createTextAnnotator(element, options)` 即可让一个 DOM 容器可批注；提供 `on('createAnnotation')` 事件、`getAnnotations()`、`loadAnnotations(url)`、`setAnnotations()`、`scrollIntoView()`、`setAnnotatingEnabled(false)`（可在演示模式关闭）、`destroy()`、撤销/重做；配置项含 `user`（默认匿名 guest）、`style`、`mergeHighlights` 等；另有 React 包装、TEI/XML 扩展和 PDF Annotator。— 已核实 [recogito/text-annotator-js](https://github.com/recogito/text-annotator-js)
- Hypothesis 的批注数据本身就是 W3C 选择器三件套（见第一节实测 JSON），可作为自建方案的数据格式参考。— 已核实 [api.hypothes.is/api/search 实测](https://api.hypothes.is/api/search?limit=1)
- 本次搜索未检索到 Apache Annotator、rangy、Annotorious 的当前维护状态与文档。— 负面结果

### Inferences
- 自建最小实现的主要步骤（估算，未实际编写）：
  1. `?review=1` 时才加载 review.js（演示/录屏模式零影响）；
  2. 监听 `mouseup`/`selectionchange`，用 `window.getSelection().getRangeAt(0)` 取选区，记录 `exact` + 前后各 32 字的 `prefix/suffix`（TextQuoteSelector）+ 所在 scene 的 `data-scene-id`（课件已有 scene 结构，可当天然锚点，比 XPath 稳）；
  3. 弹出小输入框，保存到 `localStorage`（key 带课次 + 页面版本/commit hash）；
  4. “导出”按钮生成 JSON 下载，或生成预填的 GitHub “New issue” 链接（`/issues/new?title=&body=`，注意 URL 长度限制，且需要评审者有 GitHub 账号）；
  5. 重新定位：按 scene 内 `textContent.indexOf(exact)`，多处命中时用 prefix/suffix 消歧——中文文本没有空格分词问题，精确匹配反而简单。
- 对 AI 分诊而言，自建方案的 JSON 可以直接带 `lesson`、`scene`、`exact`、`comment`、`页面版本` 字段，比任何 SaaS 都更“对口”；Hypothesis 的 RangeSelector XPath 在课件改版后容易失效，而 TextQuote + scene id 更稳健。
- 无后端时的提交通道选项：评审者下载 JSON 后发给讲师；预填 GitHub Issue 链接；或用免费表单服务/Cloudflare Worker 等接收（会引入运维和密钥管理，与“近零运维、公开仓库无密钥”目标冲突，需权衡）。
- 注意录屏洁净：review.js 不应在演示模式加载；即使加载，也应避免给正文加持久高亮或改动布局。

### Gaps
- Apache Annotator（`@apache-annotator/dom`）、rangy、Annotorious 的维护状态和体积未核实（rangy 多年未更新——传闻）。
- 未找到“静态站 + 选区评论 + 导出 JSON”的成熟开源先例；Agentation 最接近，但许可与 React 依赖不合适。
- 代码量为估算，未实际实现。

## 其他低摩擦方式：截图 + 飞书/微信标注、打印 PDF 批注

### Takeaway
截图 + 即时通讯工具标注对大陆评审者门槛最低，但输出是图片和聊天记录，**无法程序化定位到源文本**，AI 分诊需要 OCR + 模糊匹配，可靠性差、易丢失上下文；PDF 批注有结构化数据（批注对象含高亮文字），但与 HTML 源文件之间仍要做文本映射，且课件“场景/演示模式”不适合打印。

### Cited Findings
- 本节未检索到专门来源；以下均为推断。

### Inferences
- 截图 + 飞书/微信：零学习成本，国内无访问问题；缺点是定位靠人工描述或截图，导出需人工整理，评论散落在群聊里，与“自动 PR/议题”链路不兼容；还可能把课件截图带入私有群聊之外的渠道。
- 飞书文档评论：若把讲稿文本贴到飞书文档，可获得段落级评论与 API（飞书开放平台有评论接口，**待核实**），但评审对象变成“文档副本”而非真实渲染页面，展示效果类问题（排版、动画、演示模式）看不到。
- PDF 批注：浏览器打印课件为 PDF 后用任意阅读器批注，PDF 批注可用 PyMuPDF 等库提取高亮文字与评论（常识，待核实具体库行为）；但多 scene 页面打印版式可能与真实页面差异大。
- 综合判断（供报告撰写人参考）：精确定位 + 可程序化 + 无密钥 + 零运维几乎互斥。最接近的组合是 **(a) Hypothesis 私有群组 + `?review=1` 条件嵌入 + CI 中用机器人 token 拉 API**（门槛：每人注册账号、大陆访问待测），或 **(b) 自建 review.js 写 localStorage + 导出 JSON/预填 GitHub Issue**（门槛：评审者需手动提交；无身份管理）。截图/飞书适合作为不愿注册的评审者的兜底通道。

### Gaps
- 飞书评论 API、微信无程序化导出能力的具体情况未核实。
- 未做任何真实评审者的可用性测试。

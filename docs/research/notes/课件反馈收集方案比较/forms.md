# 表单服务作为课件“反馈按钮”：URL 预填、隐藏字段、导出与 GitHub 集成（调研笔记，2026-10）

> 标注约定：**已核实** = 本次抓取了官方页面并读到原文；**搜索摘要** = 只看到搜索引擎摘要或第三方页面，未逐字核对；**待实测** = 无可靠来源，或需要在大陆网络或真实账号下验证。
> 本次使用的搜索引擎以美国为主，中文官方帮助中心覆盖不全；腾讯问卷、问卷星、金数据的官方页面已直接抓取。

## 问题 1：URL 参数预填与隐藏字段（语法、文档、能否对填写者隐藏）

### Takeaway
各家都支持“链接带参数”，但真正能在**免费版**把多个任意文本（URL、lesson_id、scene_id、选中文字）写进**隐藏字段**的只有两家：飞书多维表格表单（`prefill_字段名=值&hide_字段名=1`，第三方博客和 Lark 官方英文文档的搜索摘要都这么写，免费版是否可用待实测）和 Tally（Hidden fields，官方写明免费）。腾讯问卷、问卷星、金数据的多字段预填都是付费功能；免费档最多只有一个“来源”参数。

### Cited Findings
**腾讯问卷（wj.qq.com）——已核实**
- 自定义参数（例如 `?from=channel_1&userid=my_user_1`）是付费功能：高级版 1 个/问卷（参数链接 5000 条），商业版 1 个/问卷（2 万条），尊享版 2 个/问卷（50 万条），旗舰版需联系客服；参数值限 128 字符以内，“仅支持数字，大小写英文，中文，中划线，下划线，不支持其他特殊字符”。官方文档还提醒不要放敏感内容。参数值可以通过导出 Excel、数据推送和获取回答接口拿到 — [自定义参数传入](https://wj.qq.com/docs/custom_args/)
  - 推论：完整 URL（含 `/`、`:`、`.`）和选中的文字（含标点）不符合这个字符集，只能传 `lesson-03_scene-07` 这类 ID。
- 预填答案语法为 `?Q1=A1&Q2=A1,A2`（选项题），文本题写 `?Q1=hello`，特殊字符要先 `encodeURIComponent`。这是**商业版**付费功能 — [自定义参数预填答案](https://wj.qq.com/docs/autofill/)
- 文档里没有看到“预填后隐藏题目”的参数；隐藏题目需要配合自定义逻辑（DSL，例如 `if ... then show Q3~5`）— 同上页
- Webhook 推送体里带 `referrer`（进入答题页的来源地址）、`ip`、`ua` 等字段 — [Webhook 答卷数据推送](https://wj.qq.com/docs/webhook/)
  - 推论：理论上可以靠 referrer 反推页面 URL，但 GitHub Pages 的 Referrer-Policy 默认只带 origin 还是带完整路径、新标签页打开时是否保留，都**待实测**。

**问卷星（wjx.cn）——已核实（helpid=456）；sojumpparm 为搜索摘要**
- 预填题目：`https://www.wjx.cn/jq/<id>.aspx?q1=文本&q2=1&q3=1|5`，最多 15 个参数；`hideq=1,2` 可以隐藏第 1、2 题。只支持填空、单选、多选、多级下拉；“带入的内容不得包含特殊符号”。可选签名 `parmsign=sha1(...+密钥)` 防篡改。页面开头写着“该功能接口仅限为尊享版用户提供” — [自定义链接参数控制问卷题目的选择](https://www.wjx.cn/help/help.aspx?helpid=456)
- `sojumpparm`：默认的来源参数，值存进答卷的“来源详情”，需要 UrlEncode，长度上限 100 字符（帮助中心）或 150 字符（API 页），两处说法冲突。搜索摘要称“免费版用户无法使用自定义链接的功能”；企业标准版和尊享版只能用 sojumpparm，旗舰版以上才能加更多参数 — [自定义链接参数API](https://www.wjx.cn/help/help.aspx?helpid=19)、[问卷星API](https://www.wjx.cn/api.aspx)（搜索摘要，未逐字核对）

**金数据（jinshuju.net）——已核实**
- 三种带参方式（官方对比表）：
  1. `x_field_1`（扩展属性追踪）：`https://jinshuju.net/f/{token}?x_field_1=channel_123`，每个表单只有一个，存进后台“扩展属性”列，不在表单里显示，没有签名，**免费版起全版本可用**；
  2. `field_N` 的 URL 传参：可以给任意多个字段赋值，必须带 HMAC-SHA256 签名 `sign`（密钥 `sign_secret` 需向客户成功经理索取），建议把接收字段设为隐藏，**仅企业高级版（23,999 元/年）**可用；
  3. 预填写：企业协作版及以上。
  价目：免费版免费；专业版 599 元/年；专业增强版 2,399 元/年；企业基础版 4,399 元/年；企业协作版 7,399 元/年；企业高级版 23,999 元/年 — [URL 传参 - 金数据帮助中心](https://help.jinshuju.net/v4/articles/api-url)
  - 推论：签名需要密钥。如果在静态站前端计算签名，等于把密钥公开，违背“公开仓库无密钥”的约束，所以方式 2 不适用；免费的 `x_field_1` 只能塞一个值，可以拼成 `lesson-03|scene-07` 这样的字符串（长度与字符限制**待实测**）。

**飞书多维表格表单 / 飞书问卷——搜索摘要 + 第三方博客，待实测**
- 第三方博客（作者自测可用）：飞书表单（问卷和多维表格表单）支持 `[表单分享链接]?prefill_[问题名称]=[预填值]`，多个参数用 `&` 连接 — [大象笔记](https://www.sunzhongwei.com/add-parameters-feishu-form-link-achieve-automatic-field-filling)
- Lark 国际版官方文档（搜索摘要，页面未能抓取成功）：支持文本、单选、多选、关联、人员、复选框、数字、日期等字段；`prefill_` 后面的名称要与问题名逐字一致；加 `&hide_[Question]=1` 可以隐藏已预填的问题，官方举的例子是 `prefill_source platform=Lark&hide_source platform=1`，用来追踪来源；特殊字符需要 URL 编码 — [Prefill default values for Base forms (Lark)](https://www.larksuite.com/hc/en-US/articles/167527675676-prefill-default-values-for-base-forms)
- 改问题名会让旧的预填链接失效（搜索摘要，同上）。

**Tally——已核实**
- Hidden fields：在编辑器里输入 `/hidden` 插入，链接写成 `?name=xxx&ref=yyy`，填写者看不到，“available for free to all Tally users”。嵌入（embed）时也支持隐藏字段 — [Tally Hidden fields](https://tally.so/help/hidden-fields)

**Google Forms——第三方资料，搜索摘要**
- 菜单“Get pre-filled link”（新界面叫“Pre-fill form”）生成 `?usp=pp_url&entry.<ID>=<值>` 形式的链接；删除后重建题目会换 ID。字段**不能隐藏**：预填的题目仍然对填写者可见，可以编辑 — [Alice Keeler](https://alicekeeler.com/2013/07/31/2166/)、[Supademo 教程](https://supademo.com/blog/guides/how-to-prefill-answers-in-a-google-form)（未抓到 Google 官方页面）

### Inferences
- 需求是“URL、lesson、scene、选中文字”这类自由文本，又要隐藏。按免费可用性排序：飞书表单（待实测免费版）≈ Tally > 金数据 `x_field_1`（只有一个值）> 腾讯问卷和问卷星（付费才能用，而且限制字符集）。
- 选中的文字可能很长，带标点和换行。即使服务支持，URL 长度和编码也有风险。更稳的做法是只预填 `lesson_id/scene_id`，让学员自己把选中的文字粘贴到可见的文本题里；也可以在打开前由前端截断，例如只取前 200 字。
- 所有 URL 参数都在客户端，填写者可以篡改。这对课件反馈无害，但分诊时不能把这些值当作可信来源。

### Gaps
- 飞书中文版帮助中心里关于 prefill_/hide_ 的页面没有找到原文；免费版（个人版）飞书能否把表单开放给“互联网上获得链接的人”并使用 hide_，**待实测**。
- 腾讯问卷和问卷星的免费版有没有任何可以带参的方式（除了 referrer），没有找到明确说明。
- Google Forms 官方帮助里的 prefill 章节没有抓取成功。

## 问题 2：填写者是否需要登录 / 能否匿名

### Takeaway
国内服务一般都能设置为无需登录、匿名填写；飞书表单需要把范围设为“互联网上获得链接的人”。Google Forms 只有开启“Limit to 1 response”等选项时才强制登录 Google 账号。

### Cited Findings
- 飞书多维表格表单分享时可以选择填写范围：仅邀请的人、组织内获得链接的人、互联网上获得链接的人；对外开放时人员题会对组织外用户自动隐藏 — [使用多维表格的表单视图（飞书帮助中心，搜索摘要）](https://www.feishu.cn/hc/zh-CN/articles/356120632302)
- Google Forms：开启“Limit to 1 response”后，填写者必须登录 Google 账号；不收集邮箱时用户名不会被记录 — [Google Forms Help](https://support.google.com/docs/answer/2839588?hl=en)（已核实）
- 腾讯问卷的 Webhook 体里有 `respondent_type`（回答者登录类型：微信/QQ/企业微信/手机等），说明答卷可能关联登录身份 — [腾讯问卷 Webhook](https://wj.qq.com/docs/webhook/)（已核实）

### Inferences
- 腾讯问卷、问卷星、金数据默认都可以免登录填写，这是常识层面的判断，**待实测**。在微信内打开时可能会静默获取 openid。
- Tally 匿名填写不需要账号（产品常识，**待实测**）。

### Gaps
- 腾讯问卷“答题需登录”的默认值和免费版设置项，没有找到官方原文。

## 问题 3：中国大陆可访问性

### Takeaway
Google 系服务在大陆被屏蔽，Google Forms 不可行。Tally 能不能在大陆访问没有任何可靠来源，必须实测；参照 Jotform 的经验，海外表单服务的子域名可能被间歇性屏蔽。

### Cited Findings
- Google 服务在大陆被屏蔽，见 Wikipedia 的屏蔽网站列表 — [List of websites blocked in mainland China](https://en.wikipedia.org/wiki/List_of_websites_blocked_in_mainland_China)（搜索结果，未逐条核对 Forms 条目）
- Jotform 的 `form.jotform.com` 子域名曾在大陆被屏蔽，换域名后只维持了几天 — [Jotform 论坛](https://www.jotform.com/answers/1641301-firewall-forms-blocked-in-china)、[另一帖](https://www.jotform.com/answers/1512565-forms-are-blocked-in-china)
- 关于 Tally 在大陆的可达性，没有找到任何来源；Tally 博客只谈到对 CJK 输入法的支持 — [Tally blog](https://blog.tally.so/making-forms-accessible-to-everyone/)

### Inferences
- 面向大陆学员，首选腾讯问卷、问卷星、金数据、飞书这类境内服务。Tally 只能作为海外备选。GitHub Pages 本身在大陆偶尔也不稳定，所以反馈渠道最好不要再依赖一个海外服务。

### Gaps
- Tally 和 Formspree 在大陆的连通性，需要用大陆网络（或拨测服务）**实测**。

## 问题 4：导出、API、Webhook、CSV（凭证与免费版）

### Takeaway
API 最成熟、对免费用户最友好的是**飞书开放平台的多维表格 API**：自建应用、`tenant_access_token`、search records 接口，后两项文档已核实，免费与否待核实。腾讯问卷的 OpenAPI 需要 appid/secret，Webhook 属于商业版付费功能；问卷星的 API 和数据推送属于旗舰版；金数据的 Webhook（数据推送）是否免费未核实。各家都能在后台手动导出 Excel/CSV。

### Cited Findings
- 飞书 search records：`POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search`，单次最多 500 行，支持分页，频率限制 20 次/秒；可以用 `tenant_access_token`（以应用身份调用），需要“根据条件搜索记录”等权限；多维表格开启高级权限时，应用必须有可管理权限，否则返回空 — [查询记录 - 飞书开放平台](https://open.feishu.cn/document/docs/bitable-v1/app-table-record/search?lang=zh-CN)（搜索摘要）
- `tenant_access_token` 由自建应用通过 `auth/v3/tenant_access_token/internal` 获取，有效期最长 2 小时 — [飞书开放平台](https://open.feishu.cn/document/server-docs/authentication-management/access-token/tenant_access_token_internal)（搜索摘要）
- 腾讯问卷 OpenAPI：域名 `open.wj.qq.com`，先用 appid + secret 换 access_token；获取回答列表 `GET /api/surveys/{survey_id}/answers`（per_page、last_answer_id 分页）— [获取回答列表](https://wj.qq.com/docs/openapi/survey/list_answer/)（搜索摘要）。“重要说明”页称多企业场景需联系客服开通平台合作、尊享版或旗舰版 — [重要说明](https://wj.qq.com/docs/openapi/instructions/)（已核实，但页面没有写个人或免费用户能否申请 appid）
- 腾讯问卷 Webhook：每次提交以 POST 推送 JSON（`action: answer.create`，含 answer 详情、referrer、ip、ua），属于商业版付费功能 — [Webhook](https://wj.qq.com/docs/webhook/)（推送格式已核实；“商业版付费”来自搜索摘要）
- 腾讯问卷部分接口（获取问卷详情、聚合数据）标注为尊享版付费功能 — [获取问卷详情](https://wj.qq.com/docs/openapi/survey/get_survey/)（搜索摘要）
- 问卷星：数据推送 API 在“旗舰版服务”目录下 — [数据推送API](https://www.wjx.cn/help/help.aspx?helpid=407)（搜索摘要）
- 金数据开放平台有 URL 参数文档；搜索摘要显示，有案例通过 Webhook 把数据回传到自有系统 — [金数据带参传入自有系统](https://help.jinshuju.net/v4/articles/case30)、[open.jinshuju.net](https://open.jinshuju.net/url_params/)（搜索摘要）

### Inferences
- 要“AI 定期拉取并分诊”，最省事的组合是：飞书表单收集 → 多维表格 → GitHub Actions 定时任务用 `tenant_access_token` 调 search records。App ID/Secret 放在 GitHub Actions secrets 里，不进仓库，符合“公开仓库无密钥”的约束。
- 腾讯问卷和问卷星的 API/推送基本都要付费；免费版只能靠讲师定期手动导出 CSV，再交给 AI。

### Gaps
- 飞书个人版（免费）能不能创建自建应用、调用 bitable API，没有拿到官方定价页确认，**待核实**。
- 金数据 Webhook 和 API 属于哪个套餐，没有抓到套餐对比页（[套餐与价格](https://help.jinshuju.net/v4/articles/plan-price/) 待读）。
- 腾讯问卷个人用户能否申请 appid，未确认。

## 问题 5：免费额度与价格（2025–2026）

### Takeaway
已核实的价目只有金数据（免费到 23,999 元/年，多字段传参必须用最贵档）。腾讯问卷需要“高级版”以上才能带参，具体价格没有核实。Formspree 免费档大约 50 条/月（第三方资料）。

### Cited Findings
- 金数据：免费、599、2,399、4,399、7,399、23,999 元/年，各套餐的带参能力见问题 1 — [金数据 URL 传参](https://help.jinshuju.net/v4/articles/api-url)（已核实，2026 年页面）
- 腾讯问卷的带参功能按高级版、商业版、尊享版、旗舰版分档，价格见 [wj.qq.com/pricing](https://wj.qq.com/pricing)（未抓取）
- Formspree 免费档：50 次提交/月，表单数量不限，保留 30 天历史；付费档价格在不同来源之间冲突（$10/月 1000 条，或 $15/月）— [agentdeals](https://agentdeals.dev/vendor/formspree)、[splitforms（竞品，有偏向）](https://splitforms.com/formspree-free-plan-limits)

### Gaps
- 腾讯问卷、问卷星、飞书的具体价格；Tally Pro 的价格与 Webhook 是否免费。Tally 的 Webhook 通常被认为是免费功能，属于传闻，**待核实**。

## 问题 6：隐私（回复默认私有）与嵌入方式

### Takeaway
表单类方案的回复默认只有表单所有者能看到，适合收集带个人表述的反馈；这一点和 GitHub Issues、giscus 这类公开评论不同。嵌入建议采用“新标签页打开”，不要用 iframe：这样不影响演示模式的画面，也能避开各家 iframe 嵌入的限制。

### Cited Findings
- Google Forms 如果开启“View results summary”，填写者能看到汇总结果；默认关闭 — [Google Forms Help](https://support.google.com/docs/answer/2839588?hl=en)（已核实）
- 腾讯问卷提醒，参数可能随链接外传，不要放敏感信息 — [自定义参数传入](https://wj.qq.com/docs/custom_args/)（已核实）
- 金数据有 `embedded=true` 等嵌入参数，可以用于 iframe 或小程序 WebView — [金数据带参传入自有系统](https://help.jinshuju.net/v4/articles/case30)（搜索摘要）
- Tally 支持在嵌入表单里传隐藏字段 — [Tally Hidden fields](https://tally.so/help/hidden-fields)（已核实）

### Inferences
- 演示模式要保持画面干净：反馈按钮只在阅读模式显示，或者通过 CSS 在 `presentation` 模式下隐藏。点击后用 `window.open(url, '_blank', 'noopener')` 打开，页面本身不加载第三方脚本，没有性能或隐私开销。
- 回复私有意味着学员之间看不到彼此的反馈，也就不能对同一个问题“+1”；需要靠 AI 分诊去重。

### Gaps
- 各家表单在 iframe 内能否正常完成微信等登录、移动端体验如何，**待实测**。

## 问题 7：接入 GitHub 的路径（Webhook → Actions / Issue）及 staticman 类方案

### Takeaway
没有哪家国内表单能直接推送到 GitHub。可行路径有两条：(a) GitHub Actions 定时轮询表单 API（推荐，零服务器，密钥放在 Actions secrets）；(b) 表单 Webhook 先打到一个中转函数（Cloudflare Worker 等），由它带 token 调 `repository_dispatch` 或创建 issue。原因是 GitHub API 需要 `Authorization` 头，而表单 Webhook 一般不能自定义请求头。

### Cited Findings
- 腾讯问卷 Webhook 是固定的 JSON POST，文档没有提到自定义请求头 — [Webhook](https://wj.qq.com/docs/webhook/)（已核实推送格式）
- 飞书 bitable 可以用应用身份按条件查询记录，适合定时拉取 — [查询记录](https://open.feishu.cn/document/docs/bitable-v1/app-table-record/search?lang=zh-CN)（搜索摘要）

### Inferences
- 推荐的最小链路：飞书表单（隐藏字段 lesson/scene/url）→ 多维表格 → GitHub Actions cron（每天 1 次）拉取新记录 → AI 分诊 → 对明确的修正开 PR，对需要讨论的内容开 issue 或 discussion，并标记已处理（回写多维表格的“状态”字段）。
- staticman 和 Formspree 一类方案会把反馈写进仓库或公开渠道，或者依赖海外服务（大陆可达性未知），而且 staticman 需要自建或托管实例。和“回复私有、近零运维、大陆可达”三个约束都有冲突，优先级低。

### Gaps
- staticman 当前的维护状态、公共实例是否可用，以及 Getform、Formspree 的 Webhook 与大陆连通性，本次没有调研。
- 飞书 Webhook 或自动化（多维表格“自动化流程”发送 HTTP 请求）能否自定义请求头、直接调用 GitHub API，没有找到来源，**待实测**。

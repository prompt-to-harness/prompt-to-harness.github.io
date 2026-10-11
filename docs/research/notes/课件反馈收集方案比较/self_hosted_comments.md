# 自托管 / 轻量评论系统用于课程反馈收集（面向中国大陆读者的静态 GitHub Pages 站点）

> 调研日期：2026-10-11。标注说明：**已核实** 表示有来源 URL 并已读原文；**待实测/传闻** 表示仅来自记忆、二手文章或推断，需在落地前核实。仓库活跃度数据来自 2026-10-11 调用 GitHub / GitLab API 的结果。

## 1. 各方案的部署 / 托管选项与中国大陆可用性（含 LeanCloud、CloudBase、Vercel 等平台现状）

### Takeaway
LeanCloud 已正式停服进入倒计时（2026-01-12 起冻结新注册和新建应用，2027-01-12 全部关闭），**任何新方案都不应再依赖 LeanCloud**。腾讯云开发 CloudBase 的免费体验版已不足以跑 Twikoo（无法配置跨域域名、函数超时固定 3 秒），实际要买个人版（19.9 元/月）。`*.vercel.app` 在大陆长期不可靠，必须绑自有域名。国内访问最稳的低运维路线有两条：一是 Netlify 免费函数加 MongoDB Atlas（Twikoo 官方评 4 星），二是一台国内/香港小 VPS 上用 Docker 跑 Waline、Twikoo、Artalk 或 Remark42。

### Cited Findings
**平台状态**
- LeanCloud 官方停服公告：从 **2026 年 1 月 12 日** 起停止新用户注册和新应用创建，存量应用可继续使用到正式停服；正式停服时间为 **2027 年 1 月 12 日**，届时关闭应用访问、数据读写、API 和控制台，之后数据将依《个人信息保护法》永久销毁或匿名化。官方另有“数据导出与迁移”“退款指引”页面。（已核实）— [LeanCloud 停服公告](https://docs.leancloud.cn/sdk/announcements/sunset-announcement/)
- 掘金二手文章给出相同时间线（2026-01-12 发布通知，2027-01-12 关闭）。— [juejin](https://juejin.cn/post/7595232643464724514)
- CloudBase 计费：已改为“资源点”模式（1000 点 = 1 元），覆盖个人版、标准版、企业版和企业高级版。**自 2026-01-16 起**，每个账号可用一次性兑换码创建 1 个免费体验环境，每月 3000 点，单次可续 6 个月，不能自动续费，也不能加购资源包或开启按量付费；官方注明免费环境“存在一些功能使用限制”。（已核实）— [腾讯云 CloudBase 计费文档](https://cloud.tencent.com/document/product/876/127357)
- CloudBase 部分资源单价：云函数调用 0.0133 元/万次；HTTP 网关调用 0.03 元/万次；文档型数据库调用 0.2 元/万次，容量 0.04 元/GB/天；云函数外网出流量 0.8 元/GB。新加坡地域只支持 PostgreSQL。（已核实）— [同上](https://cloud.tencent.com/document/product/876/127357)
- Twikoo 官方文档关于 CloudBase 的说明：**需要付费套餐（个人版及以上，19.9 元/月）**。免费体验版无法在“HTTP 网关 - 跨域设置”里添加跨域域名，所以评论框调不通；云函数超时固定 3 秒、内存固定 256MB。冷启动实测约 1.1 秒，最差 1.9 秒。（已核实）— [Twikoo backend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/backend.md)
- Twikoo 文档对其他平台的评价（2026 版）：
  - Vercel：“在中国大陆访问速度较慢甚至无法访问，绑定自己的域名可以提高访问速度”。
  - Netlify（4 星）：“有充足的免费额度，中国大陆访问速度不错”，免费层每月 125,000 次请求、100 小时函数时长。
  - Railway：免费方案每月只有 1 美元额度，常驻服务约需 5 美元/月，实际需要 Hobby 方案。
  - Hugging Face：2026 年 7 月起免费账号不能再创建 Docker Space，需要 PRO（9 美元/月）。
  - EdgeOne Makers（腾讯）：必须绑自定义域名，功能受限，没有反垃圾。
  - Cloudflare Workers：直连 SMTP 不可用，Akismet 关闭。
  - 宝塔面板 Docker、私有部署 / Docker：适合已有服务器的用户。

  （已核实）— [Twikoo backend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/backend.md)
- Waline 官方快速上手已改为“Vercel + Neon PostgreSQL”（通过 Vercel Marketplace 创建 Neon 数据库并执行 `waline.pgsql` 建表），首个注册用户成为管理员，后台地址是 `<server>/ui`。（已核实）— [Waline Vercel 部署](https://waline.js.org/guide/deploy/vercel.html)
- Waline 服务端支持的存储：MongoDB、MySQL、TiDB、SQLite、PostgreSQL、CloudBase（需 `TCB_ID`/`TCB_KEY` 腾讯云 API 密钥），以及 GitHub 仓库存储（`GITHUB_TOKEN`）。（已核实）— [Waline 服务端环境变量](https://waline.js.org/reference/server/env.html)
- Vercel 在大陆的可达性：2022 年的博客称 `vercel.app` 被 DNS 污染，只能靠自有域名 CNAME 访问；掘金文章（2025 年前后）也说默认域名在国内无法访问。2021 年 Vercel 官方曾建议改用 `cname-china.vercel-dns.com` 或特定 A 记录，但这些值是旧信息。— [wenhaofree 博客](https://blog.wenhaofree.com/posts/technology/vercel-deploy-blog/)，[juejin](https://juejin.cn/post/7567188622845394994)
- Remark42 是单个 Go 二进制或 Docker 镜像，最少只要 `SECRET` 和 `REMARK_URL`，数据用 BoltDB 存在 `./var` 卷里。（已核实）— [Remark42 parameters](https://remark42.com/docs/configuration/parameters/)
- Twikoo 私有部署默认用内置 LokiJS（约 1GB 容量），数据在 `data/` 目录，复制该目录即可备份；也可接 MongoDB。（已核实）— [Twikoo faq.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/faq.md)

### Inferences
- 课程站在 GitHub Pages 上，评论后端必须是另一个域名，因此都要处理 CORS 和安全域名白名单（如 Waline 的 `SECURE_DOMAINS`、Twikoo 在 CloudBase 上的跨域设置）。
- “大陆可达 + 零服务器”目前最现实的组合是 Netlify Functions + MongoDB Atlas（Twikoo 官方支持）。Atlas 免费集群一般在海外，大陆写入延迟偏高，**待实测**。
- 若可以接受一台小 VPS（香港或已备案的国内机），Docker 单容器加 SQLite/BoltDB/LokiJS 是可控性最强的方案，运维量是“定期备份一个目录 + 偶尔拉新镜像”。
- Deta Space 已于 2024 年关停（**传闻/记忆，未在本次核实**）。Zeabur 有 Twikoo 模板仓库 `twikoo-zeabur`，但本次未查到其 2026 年免费额度，**待实测**。

### Gaps
- Netlify、Atlas 在 2026 年的大陆实际延迟和可达性没有一手测量。
- Vercel 当前（2026）推荐的 China CNAME 值没有核实。
- 阿里云函数计算（FC）是否有现成的 Waline/Twikoo 模板、费用多少，本次没有查。

## 2. 匿名评论、反垃圾、审核后台与邮件通知

### Takeaway
Waline、Twikoo、Artalk 默认都允许免注册匿名评论（填昵称或完全匿名），也都有管理后台、Akismet 或验证码、邮件通知。Remark42 要显式开 `AUTH_ANON=true`。对“低门槛 + 防刷”这个需求，三个中文生态项目（Waline、Twikoo、Artalk）都满足。

### Cited Findings
**Waline**（已核实，来源：[Waline 组件属性](https://waline.js.org/reference/client/props.html)、[Waline 服务端环境变量](https://waline.js.org/reference/server/env.html)）
- 匿名与登录：客户端 `requiredMeta` 默认 `[]`（默认匿名）；`login` 可设为 `enable`、`disable` 或 `force`。
- 反垃圾：`AKISMET_KEY` 默认开启；`IPQPS` 默认按 IP 每 60 秒限流；支持 reCAPTCHA v3 和 Turnstile（secret 只放服务端）。
- 审核：`COMMENT_AUDIT` 开启后，评论需管理员审核才显示。
- 通知：SMTP 邮件通知，`AUTHOR_EMAIL` 接收新评论；`WEBHOOK` 在评论成功后 POST 到指定地址；`DISABLE_REGION`/`DISABLE_USERAGENT` 可隐藏归属地和 UA。

**Twikoo**（已核实，来源：[Twikoo faq.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/faq.md)）
- 反垃圾按“腾讯云内容安全 → Akismet → Jev → LLM”顺序，只用第一个已配置的服务。
- 腾讯云文本检测 25 元/万条（试用 1 个月）；Akismet 免费个人版。Akismet 响应约 6 秒，所以采用“先放行，后检测”，垃圾评论会短暂可见。
- 配置在 Twikoo 管理面板“反垃圾”模块里完成，不写进前端代码。

**Artalk**（已核实，来源：[Artalk captcha](https://artalk.js.org/guide/backend/captcha.html)、[Artalk 前端配置](https://artalk.js.org/guide/frontend/config.html)）
- 内置图片验证码，可按频率触发（例如 60 秒内超过 3 次操作）。
- 支持 Turnstile、reCAPTCHA、hCaptcha 和 **Geetest（极验，国内可用）**。
- 有 Dashboard 管理后台，可在后台改 UI 配置。

**Remark42**（已核实，来源：[Remark42 parameters](https://remark42.com/docs/configuration/parameters/)）
- 必须至少开一种认证方式：OAuth、邮箱（`AUTH_EMAIL_ENABLE`）或匿名（`AUTH_ANON=true`）。
- 管理员通过 `ADMIN_SHARED_ID`/`ADMIN_SHARED_EMAIL` 指定。

**待实测/记忆**
- Isso：Python + SQLite，默认匿名，有 moderation 模式（新评论需管理员确认）。
- Comentario：支持匿名评论和审核队列。

### Inferences
- reCAPTCHA 在大陆基本不可用（**传闻**，常见共识）。Turnstile 在大陆可用性一般（**待实测**）。面向大陆用户，Artalk 的内置图片验证码或极验更稳。Waline 只有 IP 限流 + Akismet + 审核，没有国内验证码选项。
- Akismet 对中文垃圾评论的识别效果**待实测**。考虑到课程反馈量小，“全部先审核（`COMMENT_AUDIT`）”可能比依赖反垃圾更简单。

### Gaps
- Artalk 匿名评论的具体开关（是否必须填邮箱）本次没有读到原文。
- Isso 和 Comentario 的文档本次没有抓取。

## 3. 能否用自定义标识（课次 id + 场景 id）定位评论，一页能否放多个评论组件

### Takeaway
三个主流方案都允许用任意字符串代替 URL 作为评论分组键：Waline 用 `path`，Twikoo 用 `path`，Artalk 用 `pageKey`，Remark42 用 `url`。所以 `ch03#scene-07` 这类 scene 级键可行。同一页放 10–15 个实例的可行性和性能**都没有官方明确保证，需实测**。更实际的做法是每页只挂一个评论框，切换场景时调用 `update` 换键。

### Cited Findings
- Waline 的 `path` 默认是 `window.location.pathname`，文档说用它“区分不同的文章页”，并给出自定义改写示例（去尾斜杠、去语言前缀）。（已核实）— [Waline 组件属性](https://waline.js.org/reference/client/props.html)
- Twikoo 前端可传 `path`，注释为“用于区分不同文章的自定义 js 路径”。（已核实）— [Twikoo frontend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/frontend.md)
- Artalk 的 `pageKey` 默认 `location.pathname`，可填任意 permalink；`pageTitle` 用于后台列表和邮件；`site` 字段支持一个后端管多站点隔离；实例有 `artalk.update({...})` 方法可动态改配置。（已核实）— [Artalk 前端配置](https://artalk.js.org/guide/frontend/config.html)
- Remark42 的 `GET /api/v1/find?site=...&url=post-url` 按 `url` 分组；`POST /api/v1/admin/remap` 可以把评论从一个 URL 批量迁移到另一个，支持前缀通配。（已核实）— [Remark42 API](https://raw.githubusercontent.com/umputun/remark42/master/site/content/docs/contributing/api/index.md)

### Inferences
- 推荐的键设计是 `/<lesson-id>/<scene-id>`（保持路径形态，方便各系统的“按路径”统计接口，例如 Twikoo 的 `getCommentsCount({urls:[...]})`）。
- 演示模式要保持干净：评论组件只在阅读模式挂载，演示模式不初始化，或用 CSS 整块隐藏。用懒加载按钮（“对本场景提反馈”）更好，可以避免首屏加载第三方脚本，也能避免录屏时出现网络请求失败的提示。
- 同页多实例：Waline v3 的 `init()` 返回实例并带 `update()`，Artalk 有 `update()`。但多实例共享全局样式和状态，可能冲突（**待实测**）。“单实例 + 切换键”更稳。

### Gaps
- 没有找到任何一个项目对“同页多个实例”的官方说明。
- 段落级（而非场景级）定位要自己生成稳定锚点 id，各系统都不提供划词评论。

## 4. 导出能力（REST API、后台导出、直连数据库）以及管理员令牌如何不进公开仓库

### Takeaway
Remark42 的导出接口最完整：`/api/v1/admin/export` 一次导出全站 JSON 流，另有每日自动 gzip 备份和公开的 `/api/v1/last`。Artalk 的 Artrans JSON 格式字段完整（含 page_key、site、is_pending）。Waline 和 Twikoo 最直接的路径是直连数据库（SQLite/MongoDB/PG）或后台导出。读**公开**评论通常不需要令牌；读**待审核或私有**内容需要管理员凭证，凭证应放在讲师本地或 CI secret，不进仓库。

### Cited Findings
**Remark42**（已核实）
- 管理接口：`GET /api/v1/admin/export?site=...&mode=[stream|file]` 导出全部评论，`import` 导入，`remap` 改键。— [Remark42 API](https://raw.githubusercontent.com/umputun/remark42/master/site/content/docs/contributing/api/index.md)
- 公开接口：`GET /api/v1/last/{max}?site=...&since=ts` 取最新评论，`/api/v1/list` 列出有评论的页面；另有 RSS 和 SSE 流接口。— [同上](https://raw.githubusercontent.com/umputun/remark42/master/site/content/docs/contributing/api/index.md)
- 自动备份：默认每天在 `./var/backup` 生成 gzip 备份，保留 10 份。格式是每行一个 JSON 的 Comment 记录。手动备份命令是 `docker exec -it remark42 backup -s {site}`（需开启 `ADMIN_PASSWD`）。头像和图片要另行备份。— [Remark42 backup](https://raw.githubusercontent.com/umputun/remark42/master/site/content/docs/backup/backup/index.md)

**Artalk**
- Artrans 是 JSON 数组，每条字段含 `id`、`rid`、`content`、`ip`、`created_at`、`is_pending`、`nick`、`email`、`page_key`、`page_title`、`page_admin_only`、`site_name` 等。（已核实）— [Artalk 数据迁移](https://artalk.js.org/guide/transfer.html)
- Dashboard 有 “Migration” 标签页，用于导入；另有命令行导入。（已核实，同上）
- 后台导出、命令行导出（`artalk export`）和 `/api/v2` 的管理员令牌接口：**待实测**（基于记忆）。

**Waline**
- 文档有“迁移工具”页，说明导出文件可在对应存储后台导入。（已核实）— [Waline migration tool.md](https://raw.githubusercontent.com/walinejs/waline/main/docs/src/migration/tool.md)
- 公开的 `GET /api/comment?path=...`（含最新评论接口），以及后台 `/ui` 的导入/导出按钮：**待实测/记忆**。

**Twikoo**
- 前端 SDK 提供 `getCommentsCount` 和 `getRecentComments`（不传 urls 时返回全站最新评论），调用前不需要 `init()`。（已核实）— [Twikoo api.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/api.md)
- 管理面板“导入”功能、评论导出为 JSON：**待实测/记忆**。

**令牌放置**
- Waline 文档明确说 reCAPTCHA/Turnstile secret “服务端使用，不可泄漏”，`JWT_TOKEN`、数据库密码、`TCB_KEY`、`GITHUB_TOKEN` 都是服务端环境变量。（已核实）— [Waline 服务端环境变量](https://waline.js.org/reference/server/env.html)

### Inferences
- 前端嵌入只需要公开的 `serverURL`/`envId`，不含秘密，可以放进公开仓库。注意 Twikoo 在 CloudBase 上的 envId 公开也无妨，因为它依赖匿名登录 + 安全规则。
- 给 AI 分诊的推荐管线：讲师本地脚本或 GitHub Actions（令牌存为 Actions secret，输出不提交到公开仓库，或只提交脱敏摘要）调用 admin export / 直连数据库，产出 JSONL，按 `page_key` 拆成 `lesson/scene` 后交给 AI。
- 如果只读“已公开”的评论，Remark42 的 `/api/v1/last`、Twikoo 的 `getRecentComments`、Waline 的公开评论接口都不需要令牌。但这样拿不到待审核的反馈，所以开了审核模式就必须走管理员通道。

### Gaps
- Waline 和 Artalk 管理 API 的鉴权细节（token 获取方式、有效期）没有读到一手文档。
- Twikoo 管理面板是否支持一键导出 JSON，未核实。

## 5. 数据驻留、隐私、默认公开与“私有反馈”模式

### Takeaway
这些系统本质都是“公开评论区”。实现“私有反馈”的通用手段是开启**全量审核且永不通过**：评论只进后台，不在页面展示。Waline 的 `COMMENT_AUDIT` 已核实可以做到；Artalk 的数据模型里有 `page_admin_only` 字段，暗示支持页面级仅管理员可见（**待实测**）。数据驻留取决于后端放哪：CloudBase 上海或国内 VPS 在境内，Vercel/Neon/Atlas/Netlify 在境外。

### Cited Findings
- Waline 的 `COMMENT_AUDIT` 开启后，评论需管理员审核才显示。文档建议在评论框占位文字里提示读者。（已核实）— [Waline 服务端环境变量](https://waline.js.org/reference/server/env.html)
- Waline 会记录 UA 和 IP 归属地，可用 `DISABLE_USERAGENT`、`DISABLE_REGION` 隐藏显示（只是不显示，服务端是否仍存储**待实测**）。（已核实）— [同上](https://waline.js.org/reference/server/env.html)
- Artrans 记录含 `ip`、`email`、`ua` 和 `page_admin_only` 字段。（已核实）— [Artalk 数据迁移](https://artalk.js.org/guide/transfer.html)
- Remark42 提供 `GET /api/v1/userdata` 让用户导出自己的数据，`POST /api/v1/deleteme` 让用户申请删除，对 GDPR 类请求友好。（已核实）— [Remark42 API](https://raw.githubusercontent.com/umputun/remark42/master/site/content/docs/contributing/api/index.md)
- CloudBase 有上海和新加坡地域，Twikoo 推荐上海。（已核实）— [CloudBase 计费文档](https://cloud.tencent.com/document/product/876/127357)，[Twikoo backend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/backend.md)
- LeanCloud 停服后会依《个人信息保护法》销毁数据。这说明托管型 BaaS 有平台退出风险。（已核实）— [LeanCloud 停服公告](https://docs.leancloud.cn/sdk/announcements/sunset-announcement/)

### Inferences
- 课程反馈若含学员邮箱，属于个人信息。最简单的合规姿态是不收邮箱（Waline 设 `requiredMeta: []`，并把 `meta` 设为只留 nick），并在评论框旁说明“反馈仅讲师可见，不公开展示”。
- 公开评论区对录播课有额外风险：公开答疑会形成“课程承诺”，与 AGENTS.md 中“不把讨论细节升级为对外承诺”的精神有张力。私有模式（审核不放行）更契合“收集反馈给 AI 分诊”的目标。

### Gaps
- Artalk 的 `page_admin_only` 实际效果（是否等于整页评论仅管理员可见）未核实。
- 各系统是否支持“评论者提交后自己可见、他人不可见”，未查到。

## 6. 成本与运维负担（备份、升级）

### Takeaway
已核实的现实成本档位：
- **零元**：Netlify + Atlas 免费层，或 Vercel + Neon 免费层。代价是可达性和延迟不确定，免费层政策会变（Railway、Hugging Face 在 2026 年都收紧了）。
- **约 19.9 元/月**：CloudBase 个人版跑 Twikoo，国内速度好。
- **约 30–60 元/月**：自有小 VPS 跑 Docker（价格为**待实测**的市场常识）。

运维主要是备份和跟版本。Twikoo 要求前端和云函数版本一致，Waline 的 client/server 版本也需匹配。

### Cited Findings
- CloudBase 个人版 19.9 元/月；免费体验版的限制导致跑不了 Twikoo。（已核实）— [Twikoo backend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/backend.md)
- 平台免费层在 2026 年的收紧（已核实）— [Twikoo backend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/backend.md)：
  - Railway 免费方案每月 1 美元，不够常驻服务。
  - Hugging Face 自 2026-07 起，Docker Space 需 PRO（9 美元/月）。
  - Netlify 免费层每月 125k 次请求和 100 小时函数时长。
- Twikoo 部署要求前端和云函数版本一致；Vercel 模板依赖 `twikoo-vercel@latest`，升级只需 Redeploy。（已核实）— [Twikoo 快速上手](https://twikoo.js.org/quick-start.html)，[Twikoo backend.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/backend.md)
- Remark42 自带每日自动备份（保留 10 份）。（已核实）— [Remark42 backup](https://raw.githubusercontent.com/umputun/remark42/master/site/content/docs/backup/backup/index.md)
- Twikoo 私有部署的备份方法是复制 `data/` 目录。（已核实）— [Twikoo faq.md](https://raw.githubusercontent.com/twikoojs/twikoo/main/docs/faq.md)
- 环境变量修改后需重新部署才生效（Waline）。（已核实）— [Waline 服务端环境变量](https://waline.js.org/reference/server/env.html)

### Inferences
- 课程反馈量很小（估计每月几十到几百条），任何方案的资源费都可以忽略。真正的成本是“平台退出风险”和“讲师运维时间”。
- 建议每周跑一次导出脚本，把 JSONL 存进**私有仓库**。这样既做了备份，又是 AI 分诊的输入，一举两得。

### Gaps
- 没有核实 Neon、Atlas 在 2026 年免费层的具体额度和休眠策略。
- 没有一手的 VPS 价格数据。

## 7. 项目维护状态（截至 2026-10-11）

### Takeaway
Waline、Twikoo、Remark42、Artalk、Isso 和 Comentario 都在维护。**Cusdis 仓库已归档（archived），最后一次 release 是 2021 年，应排除**。Twikoo 和 Waline 在 2026 年 9–10 月仍在发版，对新平台变化（CloudBase、HF、Railway）的文档跟进很快。

### Cited Findings（GitHub/GitLab API，2026-10-11 拉取，已核实）

| 项目 | Stars | 最近 push | 最新 release |
| --- | --- | --- | --- |
| [walinejs/waline](https://github.com/walinejs/waline) | 3128 | 2026-10-11 | `@waline/vercel@1.43.4`（2026-09-30） |
| [twikoojs/twikoo](https://github.com/twikoojs/twikoo) | 2295 | 2026-10-09 | `2.0.13`（2026-10-09），同时发布 darwin-arm64 等独立二进制 |
| [ArtalkJS/Artalk](https://github.com/ArtalkJS/Artalk) | 2348 | 2026-10-01 | `v2.10.0`（2026-07-24），open issues 112 |
| [umputun/remark42](https://github.com/umputun/remark42) | 5624 | 2026-10-01 | `v1.17.1`（2026-09-14） |
| [isso-comments/isso](https://github.com/isso-comments/isso) | 5311 | 2026-09-15 | `0.14.0`（2026-03-26） |
| [djyde/cusdis](https://github.com/djyde/cusdis) | 2778 | 2026-07-17 | `v1.3.0`（2021-11-30） |
| [comentario/comentario](https://gitlab.com/comentario/comentario)（GitLab） | — | — | `v3.18.0`（2026-08-14），前一版 `v3.17.0`（2026-03-13） |

补充说明：
- Cusdis 的 `archived=true`，已归档。
- Commento（原版）多年未维护，Comentario 是其活跃分叉（**记忆**，本次只核实了 Comentario 的发版）。

### Inferences
- Remark42 和 Isso 社区最大，但都是英文生态，中文 UI 和国内验证码支持较弱（Remark42 有多语言，**待实测**中文质量）。
- Waline、Twikoo、Artalk 是中文作者维护，中文文档和国内平台适配最好。
- 结合本课程的需求（中文受众、匿名、自定义键、私有模式、导出给 AI），建议优先级：
  1. **Waline**：`COMMENT_AUDIT` 私有模式、`WEBHOOK`、多数据库可直连。
  2. **Artalk**：Go 单二进制或 Docker，极验验证码，Artrans 导出字段完整，`pageKey` 加 `site` 隔离。适合有 VPS 的情况。
  3. **Twikoo**：国内 CloudBase 路线最成熟，但要 19.9 元/月。

  Remark42 适合愿意自己跑 Docker、看重导出 API 的情况。

### Gaps
- 各项目对“只收集、不公开展示”这种非典型用法没有官方案例，需做最小原型实测：私有模式、scene 级键、演示模式隐藏、导出 JSONL 四项。

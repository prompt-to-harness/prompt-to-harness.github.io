# 课件字体：选择、来源与更新

> 2026-10-03 确认。本文是字体选择与维护的唯一记录；以后调整字体先改这里和 `courseware/tools/fonts.json`。

## 当前选择

| 用途 | 字体 | CSS 字体族 | 文件 | 为什么 |
| --- | --- | --- | --- | --- |
| 课件页标题、小标题、图中大标签 | 站酷快乐体 ZCOOL KuaiLe | `Course Title` | `title.woff2` | 手写感，配合手绘框和纸色；系统里没有，必须自带 |
| 每节开篇大标题 | 长仓体 Long Cang | `Course Cover` | `cover.woff2` | 毛笔手写，只在开篇出现，和页标题拉开层次；必须自带 |
| 正文、批注、表格，以及阅读站标题 | 思源黑体 Noto Sans SC（400 / 700） | `Course Sans` | `sans.woff2`、`sans-bold.woff2` | 录制画面和阅读站在任何电脑上一致；阅读站标题用同族粗体，比宋体更利落，也少维护一种字体 |
| 代码、终端、diff、文件名 | JetBrains Mono（400 / 700） | `Course Mono` | `mono.woff2`、`mono-bold.woff2` | 和正文明显区分；0/O、l/I/1 容易分辨；课件与阅读站统一。不含中文，代码里的中文回退到 `Course Sans` |

全部是 SIL Open Font License 1.1，可以放进公开仓库再分发。

## 为什么自带字体，而不是用系统字体或在线字体

- **一致**：录制、讲师预览、学员阅读看到同样的字形。系统字体因操作系统而异（苹方、微软雅黑、Linux 常常没有中文字体）。
- **可达**：Google Fonts 在国内访问不稳定；课件与线上站点不从任何外部服务加载字体。
- **离线**：课件可以离线打开。
- **体积**：只保留需要的字（子集），全套约 1.7 MB；浏览器按页面需要下载并缓存。完整字体全部自带约 12 MB（思源黑体一个字重就有 4 MB），首次打开太慢。

线上站点（GitHub Pages）与本地预览使用同一批文件：`tools/build-site.py` 原样复制 `courseware/shared/fonts/`，页面通过 `courseware/shared/tokens.css` 中的 `@font-face` 从同一站点加载。

## 子集与缺字

网页字体由每个访客现场下载，所以只放需要的字，这是内容固定的中文静态网站的常见做法。浏览器**逐字**选字体：某个字不在子集里，只有这一个字回退到下一个候选（通常是系统的苹方或微软雅黑），页面不会坏，但手写标题里会很显眼。

| 字体 | 收入的字 | 大小（每个字重） |
| --- | --- | ---: |
| 站酷快乐体、长仓体 | 课件实际用到的字 | 约 115 KB、390 KB |
| 思源黑体 | 课件实际用到的字 + GB2312 一级常用字 3755 个（余量） | 约 550 KB |
| JetBrains Mono | 课件用到的西文与符号 | 约 18 KB |

两道保险（2026-10-03 确认）：

1. **检查拦住缺字**：`subset-fonts.py` 生成子集时写出 `courseware/tools/font-coverage.json`；`check-courseware.py`（推送前与 CI 都运行）比对全课文字，任何汉字不在站酷快乐体、长仓体或思源黑体的子集里就报错，部署被拦下。只用标准库，CI 不需要 fonttools。
2. **正文留余量**：思源黑体多收常用字，万一子集没来得及重建，正文也基本不会回退。手写字体不留余量（长仓体加常用字会到 1.5 MB）。

因为手写字体只收已用到的字，检查对任何新字都会要求重建子集；正文余量的作用是兜底显示，不是减少重建次数。

另一种做法是按字符区间把完整字体切成上百片、浏览器只下载用到的片（Google Fonts 对中文的做法），适合内容事先未知的网站；本课内容在构建时全部已知，不采用。

## 考虑过、暂不采用

| 候选 | 用途 | 暂不采用的原因 |
| --- | --- | --- |
| 系统字体（苹方 / 微软雅黑） | 正文 | 零维护，但录制画面与学员所见会因机器不同 |
| 霞鹜文楷 LXGW WenKai（OFL） | 正文、阅读站标题 | 适合长篇阅读，但和代码混排时不够利落；保留为以后阅读站可试的候选 |
| 思源宋体 Noto Serif SC（OFL） | 阅读站标题 | 2026-10-03 之前使用；源文件 25 MB，多维护一种字体；改用思源黑体粗体 |
| Fira Code、Source Code Pro（OFL） | 代码 | 与 JetBrains Mono 差别不大；课件已用 JetBrains Mono |
| HarmonyOS Sans、MiSans、阿里巴巴普惠体 | 正文 | 厂商自定义许可，在公开仓库再分发有风险 |

候选的实际效果见 [`demos/fonts/`](../../demos/fonts/index.html)（选型对照页，在线加载候选字体，不进入站点）。

## 文件与命令

- 清单：[`courseware/tools/fonts.json`](../../courseware/tools/fonts.json)，记录每种用途的源文件路径、许可证、sha256，来源固定在 google/fonts 的一个提交上。
- 输出：`courseware/shared/fonts/`，含子集与各字体的 `LICENSE-*.txt`。
- 唯一的 `@font-face` 定义：`courseware/shared/tokens.css`。各章 CSS 只引用字体族名，不再自带字体文件。

新增或修改课件文字后，重建子集：

```sh
python3 courseware/tools/fetch-fonts.py            # 下载源字体到 .font-sources/（不提交），校验 sha256
python3 -m venv /tmp/fontenv && /tmp/fontenv/bin/pip install fonttools brotli
/tmp/fontenv/bin/python courseware/tools/subset-fonts.py          # 生成子集
/tmp/fontenv/bin/python courseware/tools/subset-fonts.py --check  # 只检查缺字
```

`subset-fonts.py` 扫描 `courseware/`（不含 `archive`）与 `demos/parts/` 的全部文字，并更新 `courseware/tools/font-coverage.json`。`check-courseware.py` 报“字体 … 缺 N 字”时，按上面三步重建并提交子集与覆盖表。

## 更换字体

1. 在本文“当前选择”与“考虑过”两张表里写明改动和理由，注明日期。
2. 改 `fonts.json` 中对应条目的 `path` 和 `license`，运行 `fetch-fonts.py --record` 写入新的 sha256。
3. 运行 `subset-fonts.py`，检查各章页面，提交子集和许可证。

## 历史

- 2026-10-03：思源黑体加入 GB2312 一级常用字余量；`check-courseware.py` 增加缺字检查。
- 2026-10-03：此前第 0 章、第 1 章共享、1.2、全站各自带一套子集（共约 3.7 MB），字形按各自文字生成，第 2 章出现缺字。统一到 `courseware/shared/fonts/`，阅读站标题由思源宋体改为思源黑体粗体，阅读站代码由系统等宽改为 JetBrains Mono。

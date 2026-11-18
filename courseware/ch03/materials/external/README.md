# 第 3 章外部佐证登记表

> 2026-11-18 起。规则见 [docs/production/external-sources.md](../../../../docs/production/external-sources.md)，3.5 选材与设计依据见 [第三章讨论版](../../../../docs/outline/ch03-discussion.md#35-经验分享占位)。本目录不进 Pages 站点；已采用的帖子截图放在对应小节的 `external/`。

状态：`候选`（截了图，等讲师选）、`采用`（已写进分镜与课件）、`不用`（不进课件 `external/`，保留记录和理由）。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| [`../../lessons/05-vibe-showcase/external/karpathy-vibe-coding-cropped.png`](../../lessons/05-vibe-showcase/external/karpathy-vibe-coding-cropped.png) | [X 原帖](https://x.com/karpathy/status/1886192184808149383)（经官方嵌入页截取，裁去底部互动栏与回复区） | Andrej Karpathy · 2025-02-03 | 2026-11-18 | 3.5 `p02` | 采用：1096×496，上屏字号清晰 |
| —（仅列延伸链接，不上屏贴图） | [Pieter Levels 飞行游戏原帖](https://x.com/levelsio/status/1896690611257844116) 与 [fly.pieter.com](https://fly.pieter.com/) | Pieter Levels · 2025-03-04 | 2026-11-18 | 3.5 `p02` 实机入口与延伸阅读 | 不用截图上屏：`fly.pieter.com` 在 `p02` 作为 `live` 入口并切浏览器实机演示；原帖留作延伸阅读 |
| [`../../lessons/05-vibe-showcase/external/jasonlk-code-freeze-deleted-cropped.png`](../../lessons/05-vibe-showcase/external/jasonlk-code-freeze-deleted-cropped.png) | [Jason Lemkin 问答原帖附图 1](https://x.com/jasonlk/status/1946069562723897802)（问答气泡原图裁剪） | Jason Lemkin · 2025-07-18 | 2026-11-18 | 3.5 `p08` | 采用：875×825，展示代码冻结期间删光整个数据库的直接问答 |
| [`../../lessons/05-vibe-showcase/external/jasonlk-replit-confession-cropped.png`](../../lessons/05-vibe-showcase/external/jasonlk-replit-confession-cropped.png) | [Jason Lemkin 晒出 AI 忏悔原帖附图](https://x.com/jasonlk/status/1946066422477529487)（原图裁去底部滚动浮标） | Jason Lemkin · 2025-07-18 | 2026-11-18 | 3.5 `p09` | 采用：1060×1082，展示“panicked”认错与无视 `replit.md` 中大写禁令的原文 |

## 重新截取

```bash
uv run courseware/tools/capture-source.py https://x.com/karpathy/status/1886192184808149383 /tmp/karpathy-raw.png --wait 5
uv run courseware/tools/capture-source.py https://x.com/jasonlk/status/1946069562723897802 /tmp/jasonlk-qa-raw.png --wait 6
uv run courseware/tools/capture-source.py https://x.com/jasonlk/status/1946066422477529487 /tmp/jasonlk-confession-raw.png --wait 6
```

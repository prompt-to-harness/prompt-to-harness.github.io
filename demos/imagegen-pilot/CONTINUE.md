# 三猫角色试验续做说明

> 2026-10-07 · 独立制作试验，尚未应用到正式课件，未验证教学效果。

同机新 Codex 会话选择本课程项目，先读取本文件和 [README.md](README.md)。新会话需要读取文件中的决定；不能假定它已有此前聊天的上下文。项目文件会保留，生成仍需该会话具备可用的生图工具。

## 已确认偏好

- 固定外形与画法参考：[cat-trio-sheet-detailed-v2.png](assets/cat-trio-sheet-detailed-v2.png)。使用细节版的毛发、铅笔轮廓与柔和填色。设定图仅作为外形与画法参考，其中旧托腮、持卡动作已弃用。
- 橘白猫和长毛狸花沿用已认可造型。蓝猫采用 v2 的自然体型与较小腮部，不能恢复第一稿的胖圆脸。
- 使用真实猫的身体与短前腿、圆毛爪。不画人手、手指、握笔、伸指、托腮或递纸；道具放桌上，用视线、头部和身体朝向表达关注点。
- 名字、性格、固定分工仍待讨论，不从照片推断真实性格。
- 技术文字和判断留在 HTML/SVG；插画中的屏幕、纸张不是执行证据。

## 可用文件

- [references/](references/README.md)：四张缩小照片，进入 Git。
- `private-references/`：本机完整原图，Git 忽略；续做不依赖这个目录。
- [chapter-states.html](chapter-states.html)：2.1 反馈、4.3 规格、8.2 失败交接的场景试验。当前默认采用 `*-natural.png`；旧拟人动作稿只作对照。
- [prompts/](prompts/)：每幅图对应的完整 Prompt。
- [generated-assets-manifest.json](generated-assets-manifest.json)：生成文件、Prompt、尺寸和校验值。
- [制作提案](../../docs/production/imagegen-pilot-proposal.md)、[本轮审查](../../docs/reviews/2026-10-07-all-cat-state-pilot-codex.md)：课程使用标准与检查范围。

## 修改方法

先看目标图，使用内置 image_gen 进行参考图编辑。写明目标图与身份参考各自的用途，列出花色、体型、画法等不变量，再描述新状态及自然猫爪约束。结果另存新版本，保存完整 Prompt，更新素材清单；逐图检查身份、视线与肢体，不能只检查生成是否成功。已有参考便于继续调整，但不能保证任意姿态一次生成正确，也不能保证重新生成与旧稿逐像素一致。

本地预览从仓库根目录运行：

```bash
python3 tools/serve-courseware.py --port 8841
```

地址：`http://127.0.0.1:8841/demos/imagegen-pilot/chapter-states.html`。若已有服务占用该端口，直接使用现有预览。

新会话可使用这段请求：

> 读取 demos/imagegen-pilot/CONTINUE.md 和制作提案，继续三猫角色试验。沿用细节版 v2 外形，蓝猫保持较小腮部；采用真实猫爪与自然姿态。按我指定的章节场景制作新版本，保留旧稿、参考图与 Prompt，并更新预览和素材清单。

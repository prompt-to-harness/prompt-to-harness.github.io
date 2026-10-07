# 三猫角色试验续做说明

> 2026-10-07 · 独立制作试验，尚未应用到正式课件，未验证教学效果。

同机新 Codex 会话选择本课程项目，先读取本文件和 [README.md](README.md)。新会话需要读取文件中的决定；不能假定它已有此前聊天的上下文。项目文件会保留，生成仍需该会话具备可用的生图工具。

## 已确认偏好

- 最新画法偏好：讲师比较第 4 章互动两稿后，明确认为卡通版更好，细节版的肢体容易读成“六条腿”。后续互动试验优先使用 [cat-ch04-interaction-cartoon.jpg](assets/cat-ch04-interaction-cartoon.jpg) 的简化轮廓、柔和填色与圆猫爪。
- 外形仍参考 [cat-trio-sheet-detailed-v2.jpg](assets/cat-trio-sheet-detailed-v2.jpg) 已修正的身份特征。旧简化设定图可提供橘白和狸花的参考，不能复制其中未修正的胖蓝猫。
- 橘白猫和长毛狸花沿用已认可造型。蓝猫采用 v2 的自然体型与较小腮部，不能恢复第一稿的胖圆脸。
- 最新澄清：讲师指出的是那张图的诡异扭头，并未否定所有适度拟人动作。角色必须与章节内容互动；允许动画片式简单抓握、持卡与适度夸张，爪子保持短、圆、有毛的猫爪，不画像人手一样灵活的分指、拇指或精细捏取。头、颈和身体朝向连贯，避免身体朝前却头颈急扭。不要把互动角色退化成与内容无关的猫贴图。
- 名字、性格、固定分工仍待讨论，不从照片推断真实性格。
- 技术文字和判断留在 HTML/SVG；插画中的屏幕、纸张不是执行证据。
- Git 中保存小尺寸导出：普通场景优先最长边 640、设定图 1280，非透明图 JPEG 质量 80；三格条带最长边 1920，透明 PNG 最长边 640。新图生成后先压缩与检查，再提交。完整生成原稿在本机 Git 忽略的 generated-originals/，续做不依赖它。

## 可用文件

- [references/](references/README.md)：四张缩小照片，进入 Git。
- `private-references/`：本机完整原图，Git 忽略；续做不依赖这个目录。
- [cartoon-tests.html](cartoon-tests.html)：沿卡通方向新增 2.1 反馈、6.5 核对证据、8.2 问题交接三个动作试验，逐图观察，不保证任意动作一次生成正确。
- [interaction.html](interaction.html)：第 4 章互动画法对照，默认卡通版；细节版保留为肢体未通过的样本。
- [chapter-states.html](chapter-states.html)：旧章节试验。讲师指出第 4 章自然猫爪稿头颈扭转诡异。真实站姿与透明角色试验取消了内容互动，不符合最新方向，仅作历史对照。
- [prompts/](prompts/)：每幅图对应的完整 Prompt。
- [generated-assets-manifest.json](generated-assets-manifest.json)：生成文件、Prompt、尺寸和校验值。
- [制作提案](../../docs/production/imagegen-pilot-proposal.md)、[最新卡通试验审查](../../docs/reviews/2026-10-07-all-cartoon-state-tests-codex.md)：课程使用标准与检查范围。

- [resolution.html](resolution.html)：640 与 1024 导出对照，以及一次原生尺寸请求未生效的 Probe。当前内置工具没有显式 size／quality／format 参数；不要仅在 Prompt 写小尺寸就承诺降低生成 Token 或耗时。
- 本轮大 PNG 历史已在本地清理；压缩图、参考照片与 Prompt 仍在 Git。远端尚未改写，续做时先检查同步状态，避免把旧大图历史再次带回。完整备份及 commit-map 在本机忽略目录 generated-originals/git-backup-20261007/；详情见 [压缩与历史清理记录](../../docs/reviews/2026-10-07-all-imagegen-size-history-codex.md)。

## 修改方法

先写清角色本章在做什么，例如第 4 章拿两张输入卡作比较，第 2 章拿页面反馈给同伴，第 8 章把问题记录交给伙伴。使用内置 image_gen，以角色设定提供身份与画法参考；把头颈朝向、圆猫爪的简单抓握单独写清。构图可为互动调整，不以完全写实姿态为硬约束。

结果另存新版本，保存完整 Prompt，更新素材清单；依次检查章节互动、头颈、猫爪、肢体数量、身份与画法。前爪持物时，不应再在桌上画出额外的一对爪子；躯干、后腿、尾巴的轮廓须可区分。旧稿保留，不因生成完成就标为已确认。参考图有助于接续，但不能保证任意姿态一次正确或重生成逐像素一致。

本地预览从仓库根目录运行：

```bash
python3 tools/serve-courseware.py --port 8841
```

新卡通试验预览：`http://127.0.0.1:8841/demos/imagegen-pilot/cartoon-tests.html`。第 4 章对照：`http://127.0.0.1:8841/demos/imagegen-pilot/interaction.html`。若已有服务占用该端口，直接使用现有预览。

新会话可使用这段请求：

> 读取 demos/imagegen-pilot/CONTINUE.md 和制作提案，继续三猫角色试验。以第 4 章互动卡通版为画法参考，保留细节版 v2 已修正的外形特征，蓝猫保持较小腮部；允许适度拟人和动画片式抓握，保持圆猫爪，避免人手的灵活分指；重点检查头颈连贯和肢体数量，角色必须与章节内容互动。按我指定的章节场景制作新版本，保留旧稿、参考图与 Prompt，并更新预览和素材清单。

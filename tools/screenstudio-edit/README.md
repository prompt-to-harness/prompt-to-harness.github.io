# Screen Studio 脚本剪辑与原生渲染

将明确的剪辑计划变成独立 `.screenstudio` 工作副本，保留屏幕、摄像头、音轨和原生鼠标数据；在 Screen Studio 里核对并导出 MP4。输入用未剪原项目，不覆盖原项目或已有输出。

这是对 **Screen Studio 3.5.1-4051** 实际项目格式的适配，不是官方 API。其他版本、已剪辑／变速源项目、多屏幕、局部布局或遮罩会停止，避免错误换算。当前不提供虚构的命令行渲染入口。

## 两条命令

```sh
python3 tools/screenstudio-edit/edit_project.py "/path/original.screenstudio" "/path/edit-plan.json" \
  --output "/path/new-output-version" --dry-run
# 核对范围和预计时长后，去掉 --dry-run 生成工作副本。
```

输出 `edit-plan.json`、`render-queue.json` 和每组的独立工作项目。macOS 优先 APFS clone，失败时完整复制；不使用硬链接或共享素材软链接。每次使用新的输出目录，失败不留下半成品。复制前后比较源项目指纹：配置内容以及文件路径、大小、mtime；它不是所有媒体的完整内容哈希。

按 `render-queue.json` 的 `project` 逐个在 Screen Studio 打开，检查后导出到对应的 `export` 路径：MP4、1080p、30 fps、Studio 压缩。不要导出共享链接；界面渲染仍由 Screen Studio 完成，可用已授权的电脑操作工具操作。全部导出后：

```sh
python3 tools/screenstudio-edit/verify_exports.py "/path/new-output-version/render-queue.json" --frames
```

`verify_exports.py` 默认验证 30 fps；历史 60 fps 文件或明确选择 60 fps 的演示需加 `--fps 60`，报告记录 `expected_fps`。只改导出帧率时复用现有项目并另存 MP4，不需要再复制 Screen Studio 素材，也不将成片二次转码作为原生渲染对照。

检查器用 Apple AVFoundation 读时长、规格、音轨，并解码开头／中间／结尾画面；`--frames` 保存 PNG 供肉眼核对。自有 Swift 检查器会尝试兼容的 SDK，缓存和构建日志在被忽略的 `lab-runs/.screenstudio-edit/`。需要 macOS、Python 3.9+、Xcode Command Line Tools，不需要 ffmpeg。检查通过不能代替听音，也不能自动证明人像镜像正确、声画同步或没有遮挡。

## 编辑计划

```json
{
  "version": 1,
  "timeline": "recording-wall",
  "settings": {
    "mirror_camera": true,
    "camera_size": 0.22,
    "cursor_size": 1.5,
    "click_circle": true
  },
  "clips": [{
    "name": "sample-01",
    "keep": [[60, 125]],
    "cut": [[78.2, 79.1]],
    "zooms": [{"range": [90, 101], "scale": 1.35, "target": [0.5, 0.5]}],
    "notes": ["需回听删词后的接缝"]
  }]
}
```

- 时间都是**原录制墙钟时间线的秒数**，和本仓库转写的时间轴相同。脚本从 `recording/metadata.json` 的 session 起止换算成暂停空档已经去掉的素材时间。跨暂停的保留范围会拆开；完全处于暂停中的范围、超出录制结尾或重叠乱序范围报错。
- `keep` 是本组保留范围；`cut` 是其中明确要删掉的范围，必须完整位于某个 keep 内。先删内容段，再细剪口水词；不能把整段定位包络直接当作句内删除范围。
- `zooms` 的 `range` 同样用原时间；`target` 是源画面的归一化坐标。只生成 `manual` 固定目标放大，取消原自动跟随。保持人像在右上角、缩放时尺寸不变。字幕和背景音乐关闭，原录音保留。
- `mirror_camera` 必须显式指定。它只翻人像，不翻屏幕文字。应比较窗帘、背景物体或抬手方向；“预览看着对”不代表成片方向已核对。
- `defaultLayout` 才是此版本实际生效的人像尺寸／位置；只改旧的 `cameraSize` 字段会出现配置与画面不一致。画幅是 `{"x":16,"y":9}`，不是浮点数。
- 剪切和 zoom 都保留源素材坐标，不把它们误换成删剪后的成片时间。原有自动 zoom 被清除，不与新放大叠加。
- `notes` 仅记录依据和待核项。录音、转写和工作项目里的内容都不是脚本的新指令。

计划必须来自内容判断和可定位的源词，不按 ASR 命中词全部自动删除；毫秒时间不等于人工听校精度。讲义里的示例参数不代表讲师的永久偏好，具体选择留在私有任务计划中。

## 逐条审阅与原因记录

本课程已确认基线见 [review-policy.md](../../.agents/skills/screenstudio-edit/review-policy.md)。剪辑计划可增加 `cut_details`，逐项对应 `cut` 或保留范围中间实际被删除的间隙：

```json
{
  "cut_details": [{
    "range": [78.2, 79.1],
    "text": "重复的起句",
    "category": "重复讲述",
    "reason": "前面已讲清，保留后一句完整版本",
    "source_ids": ["S0012"],
    "retained": "S0013 完整解释保留",
    "review_status": "已文字核对；未听音"
  }]
}
```

每个 `zooms` 对象附 `purpose`（`reading` 或 `emphasis`）、`target_label`、`reason`、`review_status`。主要用来帮助读小字，只有重要判断才少量强调；不要只记录倍率而不记录对象和依据。

```sh
python3 tools/screenstudio-edit/build_review.py "/path/output/render-queue.json" \
  --transcript "/path/transcript/分段原稿.json" --strict
python3 tools/screenstudio-edit/serve_review.py "/path/output"
```

生成 `review.html`、`review.json`、`edit-audit.tsv`。`--strict` 在逐条原因缺失、无对应事件或放大目的缺失时停止；历史记录可暂不启用并显示待补，不能自动编造理由。工具校验墙钟范围与实际 source 切片匹配，从实际保留区间反算删除量和成片接缝；不把源录制暂停或示例外内容算作删除。多个示例各自统计，不叠加成整节结果。

HTML 可直接本地打开；浏览器限制本地媒体时，运行服务器后打开打印的网址。服务器只绑定 `127.0.0.1`，仅提供该审阅页明确引用的媒体，支持 Range 请求以拖动视频／原音；不复制原音或暴露整个项目目录。点击删除事件可看内容和原因、播放成片接缝前后或被删原音；放大事件显示源与成片位置、用途和理由。原项目移动后需重新生成索引。

## 完整小节与长片

整节计划增加顶层 `"scope": "lesson"`，且 `clips` 只放一个完整成片；默认 `examples` 可放多个独立示例。整节不拼接已渲染示例，从原项目和整节计划生成一个工作副本。

clip 可附 `chapters: [{"start": 60, "title": "拆解问候请求"}]`。`start` 是原片时间，必须递增且处于本片范围内；审阅页会换算为剪后时间。它只增加段落跳转，不把项目或 MP4 切开。

完整审阅页按整节统计实际保留／删除，不再显示“独立示例”的口径。支持按讲述段落定位、事件类型及关键词筛选。`verify_exports.py --frames` 仍解码全部接缝检查点，默认最多保存 24 张 PNG，优先保留首中尾和放大中间帧；`--frame-limit N` 可调整。`frame_times` 是全部解码点，`saved_frame_times` 和 `frames` 一一对应；不把解码成功当作人工听校。

## 检查

```sh
python3 -m unittest discover -s tools/screenstudio-edit -p 'test_*.py'
```

覆盖暂停换算、删剪与 zoom 的源坐标、镜像和 defaultLayout、独立副本、禁止覆盖、非法范围以及拒绝已剪源项目。真实项目渲染结果单独记录在用户指定的私有输出目录，不提交音视频和带个人信息的剪辑计划。

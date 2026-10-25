# Screen Studio 转写与润色

在仓库中用 `$screenstudio-transcript` 调用[项目 skill](../../.agents/skills/screenstudio-transcript/SKILL.md)，例如：

> 处理上午这个 Screen Studio 项目，提取麦克风音轨，用 Apple 转写，再逐段润色，保留每段原时间戳，保存原稿、润色稿和剪辑索引。

Python 负责提取、转写和校验时间；Codex 按 skill 逐段润色。单独运行转写脚本只产生原稿，不会自动完成语言润色。

## 本机依赖

- macOS 26+、Python 3.9+，以及支持 SpeechTranscriber 的 Mac
- Apple Xcode Command Line Tools（提供 Swift 编译器和 macOS 26+ SDK）；缺少时先在本机运行 `xcode-select --install`，完成系统安装提示
- 已有 M4A 时无需 ffmpeg；只有音视频封装或分片需要提取时，使用独立安装的 ffmpeg（PATH、Homebrew 常见路径，或 `--ffmpeg` / `FFMPEG` 指定）

转写使用本仓库的 [apple_transcribe.swift](apple_transcribe.swift)，直接调用 Apple 公开的 SpeechAnalyzer / SpeechTranscriber 和 AssetInventory。不调用 Screen Studio 辅助程序，也不需要运行 Screen Studio。系统语言模型由 Apple 管理，首次可能需要下载，识别在设备上执行。

Python 首次运行会自动编译 Swift 源码，二进制及构建日志缓存在被忽略的 `lab-runs/.apple-transcribe/`；缓存键包含源码、编译器版本、SDK 路径和芯片架构。编译器和默认 SDK 不兼容时，会尝试已安装的 macOS 26 SDK；若全部失败，报告构建日志，不回退到第三方程序。

也可以单独构建，并直接转写普通音频文件：

```sh
python3 tools/screenstudio-transcript/build_apple_transcriber.py
# 上一条命令打印编译后的程序路径，将它作为下方的 /path/to/apple-transcribe
/path/to/apple-transcribe /path/to/audio.m4a --locale zh_CN
/path/to/apple-transcribe --locales
```

程序输出 JSONL 事件，包括词或文本片段、原始时间范围、可用时的置信度和完成标志；错误返回非零退出码。支持 Apple 视为等价的 `zh_CN` / `zh-CN` 语言标识。`--helper` 只作为自编译程序路径覆盖入口，日常无需指定。

实现依据：[Apple SpeechAnalyzer 技术说明](https://developer.apple.com/videos/play/wwdc2025/277/)。原项目与音轨只读取。

## 从仓库根目录运行

```sh
python3 tools/screenstudio-transcript/screenstudio_transcribe.py "/path/to/project.screenstudio"
```

默认输出到 `lab-runs/transcripts/`，已被仓库忽略。每次创建新子目录，包含音轨副本、`转写-带时间戳.txt`、`分段原稿.json`、原始识别事件及运行日志。不要把录音和未剪辑转写提交到公开仓库。

需要选择音轨时：

```sh
python3 tools/screenstudio-transcript/screenstudio_transcribe.py "/path/to/project.screenstudio" --list-tracks
python3 tools/screenstudio-transcript/screenstudio_transcribe.py "/path/to/project.screenstudio" --track channel-2-microphone
```

也支持 `--latest` 选择默认目录下最近完成的项目，或用 `--output` 指定结果父目录。

## 润色与留存

Codex 读取 `分段原稿.json`，按固定 ID 写出完整的 `润色编辑.json` 数组；只包含 `id`、`text`、`review_notes`，不提交新时间戳。按 skill 完成全部段落后运行：

```sh
python3 tools/screenstudio-transcript/save_polished.py "/run/分段原稿.json" "/run/润色编辑.json"
```

生成独立版本目录：

| 文件 | 用途 |
| --- | --- |
| `润色-带时间戳.txt` | 每段前标 `[HH:MM:SS.mmm – HH:MM:SS.mmm]`，便于剪辑定位 |
| `剪辑索引.tsv` | 原文、润色文、时间和备注并列，便于查找与核对 |
| `润色分段.json` | 保留每段精确起止时间、原文及润色文 |
| `校对备注.txt` | 待核词、疑问及可剪建议 |

只修正文句，不跨段挪内容，不用“润色”解决事实疑问。录错、重讲和闲聊保留，写入可剪备注；模糊的人名、路径、数字和技术术语标待核。时间基于源录制，不能直接代表经过剪切、变速后的成片时间。源识别提供的时间精度也不等于逐字人工标注精度。

## 验证

```sh
python3 -m unittest discover -s tools/screenstudio-transcript -p 'test_*.py'
```

2026-10-25 已用本机约 61 分钟的真实项目验证：音轨提取、Apple 全文识别、313 段润色留存及时间戳一致性。未完成逐字听音校对，不将文字整理当作事实核验。真实音轨、中间文件和结果保存在本机忽略目录。

自有转写程序验证：2026-10-25 对同一真实项目全量重跑，约 23 秒、313 段，文字和分段时间戳与此前第三方适配器输出完全一致；这只描述本次同一系统模型下的结果，不保证系统模型升级后逐字相同。无 Screen Studio 程序路径参与该次运行，源音轨哈希不变。

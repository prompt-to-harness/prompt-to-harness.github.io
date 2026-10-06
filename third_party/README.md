# 第三方源码（git 子模块）

课程讲到的开源项目，以子模块固定在具体提交上，用来核对课件里的数字、生成 diff，不用每次重新完整克隆。子模块只是指向上游仓库的提交指针，本仓库不复制它们的内容；构建、检查和 Pages 站点都不读这个目录。

| 路径 | 上游 | 固定在 | 用在 |
| --- | --- | --- | --- |
| `codex/` | [openai/codex](https://github.com/openai/codex)（Apache-2.0） | `b741e48`（2026-10-03，第 2 章复核系统指令时的 main） | 2.1、2.2 的系统指令历史与按模型对比（p25–p26） |

## 取下来

普通克隆不会带上子模块，需要时再取。只拉历史、按需取文件内容（约 100 MB，而不是完整的数百 MB）：

```bash
git submodule update --init --filter=blob:none third_party/codex
```

## 常用核对

```bash
# 某个版本的系统指令大小（2026-01-19 前在 codex-rs/core/prompt.md）
git -C third_party/codex cat-file -s 81b148bda2:codex-rs/core/prompt.md
# 通用指令的修改历史（跨越搬家）
git -C third_party/codex log --follow --format='%h %ad %s' --date=short -- codex-rs/protocol/src/prompts/base_instructions/default.md
```

更多对比命令见 2.2 讲稿 p25、p26 的“原文与 diff”。

## 更新固定版本

固定版本是课件里数字的依据，不随上游自动变化。要换到新提交时：在子模块里 `git fetch` 并 checkout 目标提交，重新核对课件引用的大小与章节，同步改课件里的“当前”版本链接（如 2.2 构建脚本里的 `PINNED`），再一起提交子模块指针和课件。

# 第 2 章 external 目录迁移核验

- 日期：2026-10-23
- 审查者：Codex
- 基于提交：09729b1；工作区有其他备课工作，本次提交只包含 external 主题迁移。
- 范围：已入库的外部素材目录、图元脚本、预览脚本、页面构建路径、调研链接和 external-sources 规则；未调整页面内容与口播。

## 已核验

- 已登记素材分入 request-capture、context-engineering、context-rot；根 README 保留来源、状态、主题索引和复现命令。
- 原混合图元脚本拆成 context-engineering/figures.py 与 context-rot/figures.py；tap_proxy_figures.py 和预览脚本放入 request-capture。
- 运行三个主题的重画命令：8 张 SVG 与迁移前逐字节一致。
- 重新生成 2.1、2.2：所有页面的 HTML、标题、导语、揭示步骤和口播均与 HEAD 一致，仅讲师提示的图元路径更新。
- 新位置的 preview.py 运行成功，两版样稿内容区均为 clientHeight / scrollHeight = 370 / 370。
- external-sources skill 的 quick_validate.py 校验通过；通过 uv 的临时依赖提供 PyYAML，没有改变仓库依赖。
- 旧素材路径检索没有残留；git diff --cached --check 通过。
- 本次暂存快照的 make check：通过（退出码 0）。内容与链接、站点构建、渐进式展示、20 个课件页展示及外链检查均无错误，保留 7 条既有编辑提示。

## 工作区边界

直接对完整工作区运行 make check 时，另一项未完成的改动触发 ED-017：2.3 STORYBOARD.md 中 p40a0 尚无对应页面。没有修改该分镜；将暂存文件导出至临时副本，单独验证本次提交。

四张 ref-*.png 属于其他工作新增且尚未登记的素材，保留原位，没有移动或加入本次提交。没有重新核验外部原文，也没有重截原图或进行试讲；本次是路径迁移与生成结果一致性检查。

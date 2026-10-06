# PROMPT_V1：首页 v0 任务

> 排练记录（2026-10-03）：按 1.4 课件 P22–P23 的合成示例作答。

## 人工决定（1.4 与 Agent 问答）

| 问题 | 决定 | 来源 |
| --- | --- | --- |
| 姓名与简介 | “示例同学”；“正在学习 AI 协作开发。” | PLACEHOLDER_CONTENT.md，本人确认采用 |
| 项目区展示什么 | 1 张卡：“学习笔记：记录课程练习” | 同上 |
| 按钮去哪 | “查看项目”跳到本页项目区；项目卡不跳转，不编造 URL | 本人决定 |
| 视觉 | 无额外要求；沿用 setup-check 的配色与系统字体（Agent 建议，本人同意） | 本人确认 |
| 页面标题与项目区标题 | 标签页标题“示例同学 · 个人主页”；项目区标题“项目”（Agent 建议，本人同意） | 本人确认 |
| 可写范围 | 根目录 index.html、package.json、package-lock.json、vite.config.ts、tsconfig*.json、src/ | PROJECT_BRIEF.md |

## 任务

Goal：生成首页首屏与项目区；首屏显示“示例同学”、
“正在学习 AI 协作开发。”；项目区显示“学习笔记：记录课程练习”。
Context：沿用上页合成问答；“查看项目”跳到本页项目区，项目卡不跳转。
Constraints：React + TypeScript + Vite；示例写入范围为根目录 index.html、
package.json、package-lock.json、vite.config.ts、tsconfig*.json、src/。
依赖版本按已核验工具链；不改 setup-check/，不加账号、后端或发布。
先复述并列计划，等人确认；缺材料、版本未核验或需越界时先停。
Done when：文字逐项一致，按钮跳转正确；npm run build 成功；
无明显控制台错误，Diff 无越界，正式产物无环境页与私人资料。

## 待补做

- 1.1 / 1.2 的证据文件（docs/evidence/）本次排练未写。

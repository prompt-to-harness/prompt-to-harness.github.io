# 第 3 章追赶实验：让 Codex 对照参考起点补齐前提

> 状态：2026-10-06 讲师机器上运行（两种学员起点各一次有效运行）。做法沿用[第 2 章追赶实验](../../../ch02/materials/catchup/README.md)。**参考起点 `ch03-start-v1` 是本地草案**：第 2 章冻结候选（首页 v1）加一份标准的 GitHub Pages 发布配置；真实标签要等第 2 章录制版发布后由讲师制作。未经另一位讲师复现，未试讲。

## 前提清单（与 [`prompt-ch03.txt`](prompt-ch03.txt) 一致）

1. 有能 `npm run build` 的首页 v1：项目区已按第 2 章补充，第 2 章的改动和记录都已提交；
2. 有 GitHub Pages 的发布配置（Vite 的 `base` 与部署工作流），可以再次发布；
3. 工作区干净。

## 怎么跑

```bash
courseware/ch03/materials/catchup/setup-states.sh lab-runs/ch03-catchup/base
courseware/ch03/materials/catchup/run-catchup.sh lab-runs/ch03-catchup/base/student-a-done
courseware/ch03/materials/catchup/run-catchup.sh lab-runs/ch03-catchup/base/student-b-no-pages
```

## 2026-10-06 结果

| 项目 | (a) 做完第 2 章 | (b) 只做到 2.3，没有发布配置 |
| --- | --- | --- |
| 三条前提判断 | 全部“已满足”；姓名、项目、仓库名 `lin-homepage` 判为“与参考不同但不影响” | 1、3 已满足；2 缺少：没有 `base`、没有 `.github/workflows/` |
| 先只读、等确认 | 是（在临时目录里试构建，项目文件没动） | 是 |
| 确认后改了什么 | 什么都没改（只给了可选建议，按确认语不做） | `vite.config.ts` 加 `base`；新增与参考相同的 `deploy.yml` |
| 个人内容与仓库名 | 保留 | 保留，没有照抄参考的 `my-homepage` |
| build | 成功 | 成功 |

(b) 的值得注意之处：Codex 拿不到真实仓库名（实验仓库没有 remote），**自己决定用 `base: './'`**（相对路径），并在回答里解释了原因。这在单页、无路由的首页上可以工作，但和 2.4 教的“斜杠、仓库名、斜杠”不同，也没有先问人。建议课件里的确认语加上一句“我的仓库名是 ……”，让它按 2.4 的写法补。

另有一轮 (b) 作废：模型只回了一句开场白就结束，确认步骤返回乱码；按约定重跑。第一轮 (a) 的检查回合遇到上游中断，续跑后完成。

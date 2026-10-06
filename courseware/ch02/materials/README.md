# 第 2 章教学材料

> 状态：草稿（2026-10-03）。基于[第 1 章排练快照](../../../starters/personal-homepage/ch01-complete/CHECKPOINT.md)生成，**不是录制版**。录制时讲师首页 v0 与 homepage-v1 冻结后，按下文步骤重新生成并复核行为。本目录不进 Pages 站点（`tools/build-site.py` 跳过 `materials/`）。

## 文件

| 文件 | 用在 | 内容 |
| --- | --- | --- |
| `homepage-v1.diff` | 2.2、2.3 备课 | 排练快照 → 换成三条讲师经历后的 homepage-v1；代替 2.2 的真实 Codex 输出，只用于备课预估 diff 大小 |
| `refactor-a.diff` | 2.5 | 教学材料 A：把项目卡提取为 `ProjectCard` 组件，保持行为 |
| `compact/` | 2.2 p27 | 压缩独立实验：起点脚本、操作步骤、观察表和一次真实运行的请求记录（2026-10-05） |
| `refactor-b.diff` | 2.5 | 教学材料 B：同样提取组件，顺带让卡片变成链接并加焦点样式 |

两份重构 diff 都基于 homepage-v1，提交说明相同：“refactor: 把项目卡提取为 ProjectCard 组件”。

## 讲师经历聚合的项目经历（2.2 讲师演示用）

2026-10-03 讲师确认：2.2 演示的项目区内容取自两位讲师的真实经历，合在第 1 章的“示例同学”页面上；讲述时直接说明“项目区借用了两位讲师的经历”，首屏沿用第 1 章示例、不在本轮修改。内容只取自已公开的[讲师简介](../../../docs/course-outline.md)，不另加图片、链接或联系方式。下表三条于 2026-10-05 经讲师确认采用。

| 项目名称 | 项目描述 | 来源 |
| --- | --- | --- |
| 红绿灯感知量产 | 城市 NOA 红绿灯感知模块的量产方案设计、部署与加速 | 李阳 |
| 端侧多模态推理引擎 | 在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产 | 李阳 |
| RoboHarness | 把自然语言需求转成可执行、可验证、可持续迭代的研发流程 | 缪东旭 |

不用公众人物：会让 AI 代找他人经历与图片，违背 2.2“经历由人提供”，并在 2.4 的公开检查中触及他人信息与图片授权。图片不在本轮加入，可作课后选做轮次。

## 已核对的行为（2026-10-03，讲师机器，单次；换成讲师经历后重做）

Node 24.15.0，`npm ci` 后三个版本都能 `npm run build`。分别用静态服务器打开构建产物，在内置浏览器中检查：

| 检查 | homepage-v1 | A | B |
| --- | --- | --- | --- |
| 渲染出的 `#root` DOM | 基准 | 与 v1 逐字相同 | 卡片内容包在 `<a href="#">` 里 |
| Tab 可停留的元素 | 只有“查看项目” | 只有“查看项目” | “查看项目” + 三张卡片 |
| 点击项目卡 | 无反应 | 无反应 | 地址末尾多出 `#` |
| 聚焦 / 悬停样式 | 无 | 无 | 聚焦时出现描边框；悬停或聚焦时边框变绿 |
| `git diff --stat` | App.tsx 10+ 2− | 2 个文件 16+ 4− | 3 个文件 35+ 4− |

其他观察：

- homepage-v1 在 360×800 下页面高 827px，无横向滚动。
- A 让 `App.tsx` 净减 1 行（+3 −4），但新增了 13 行的组件文件，总行数变多。2.5 自检不要说“A 更短”。（2026-10-05 更正：此前误记为减少 3 行。）

## 重新生成

```bash
cp -R starters/personal-homepage/ch01-complete /tmp/hp && cd /tmp/hp
git init -q -b main && git add -A && git commit -qm baseline
git apply /path/to/homepage-v1.diff && git commit -qam homepage-v1 && git tag homepage-v1
git switch -c refactor-a && git apply /path/to/refactor-a.diff
npm ci && npm run build && git add -A && git commit -qm refactor-a
```

B 同理：先提交 A，再 `git switch -c refactor-b homepage-v1` 后应用 `refactor-b.diff`。2026-10-03 在排练快照的新副本上按此步骤应用三份 diff 均成功。录制版要基于讲师冻结的 homepage-v1 重新制作两份 diff，并重做上表的检查。

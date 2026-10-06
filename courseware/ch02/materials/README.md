# 第 2 章教学材料

> 状态：草稿（2026-10-03）。基于[第 1 章排练快照](../../../starters/personal-homepage/ch01-complete-notes.md)生成，**不是录制版**。录制时讲师首页 v0 与 homepage-v1 冻结后，按下文步骤重新生成并复核行为。本目录不进 Pages 站点（`tools/build-site.py` 跳过 `materials/`）。

## 文件

| 文件 | 用在 | 内容 |
| --- | --- | --- |
| `homepage-v1.diff` | 2.2、2.3 备课 | 排练快照 → 换成三条讲师经历后的 homepage-v1；代替 2.2 的真实 Codex 输出，只用于备课预估 diff 大小 |
| `refactor-cards/` | 2.5 | 分拣题的五张卡：每张一份基于 homepage-v1 的 diff，提交说明都是“refactor: …”；`shoot.py` 把五张卡各自构建、核对行为，并拍 2.5 的证据图（写到 `lessons/05-refactor/evidence/`） |
| `compact/` | 2.2 p27 | 压缩独立实验：起点脚本、操作步骤、观察表和一次真实运行的请求记录（2026-10-05） |

2026-10-05 起 2.5 改用五张卡分拣（讲师确认），原来的两份 diff（`refactor-a.diff`、`refactor-b.diff`）已删除；`01-extract-component.diff` 与原 A 逐字相同。

## 讲师经历聚合的项目经历（2.2 讲师演示用）

2026-10-03 讲师确认：2.2 演示的项目区内容取自两位讲师的真实经历，合在第 1 章的“示例同学”页面上；讲述时直接说明“项目区借用了两位讲师的经历”，首屏沿用第 1 章示例、不在本轮修改。内容只取自已公开的[讲师简介](../../../docs/course-outline.md)，不另加图片、链接或联系方式。下表三条于 2026-10-05 经讲师确认采用。

| 项目名称 | 项目描述 | 来源 |
| --- | --- | --- |
| 红绿灯感知量产 | 城市 NOA 红绿灯感知模块的量产方案设计、部署与加速 | 李阳 |
| 端侧多模态推理引擎 | 在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产 | 李阳 |
| RoboHarness | 把自然语言需求转成可执行、可验证、可持续迭代的研发流程 | 缪东旭 |

不用公众人物：会让 AI 代找他人经历与图片，违背 2.2“经历由人提供”，并在 2.4 的公开检查中触及他人信息与图片授权。图片不在本轮加入，可作课后选做轮次。

## 已核对的行为

### homepage-v1（2026-10-03，讲师机器，单次；换成讲师经历后重做）

Node 24.15.0，`npm ci` 后可以 `npm run build`。homepage-v1 在 360×800 下页面高 827px，无横向滚动；1440×900 与 768×1024 下整页不滚动。

### 2.5 证据图与复测（2026-10-06，shoot.py，单次）

`uv run python courseware/ch02/materials/refactor-cards/shoot.py [homepage-v1 目录]`：默认基线是 v1 冻结候选（`starters/personal-homepage/ch02-candidate`），工作目录 `lab-runs/refactor-cards/`。每张卡复制基线、`patch -p1` 应用、`npm ci`、`npm run build`，Playwright Chromium 在 1440×900、DPR 2 下打开构建产物，打印核对结果并截图到 `courseware/ch02/lessons/05-refactor/evidence/`。2026-10-06 的结果与下表一致：①② 的 `#root` 与基线逐字相同；③ 顺序变为端侧、红绿灯、RoboHarness；④ 卡高 127 → 144px；⑤ Tab 依次停在三张卡上（基线按完“查看项目”再按 Tab 焦点离开页面）。录制版换成讲师冻结的 homepage-v1 重跑本脚本，并按输出更新 2.5 口播里的数字。

### 2.5 的五张卡（2026-10-05，讲师机器，单次）

每张卡单独应用在 homepage-v1 上，各自 `npm run build`（都成功），用静态服务器打开构建产物，Playwright 驱动的 Chromium 在 1440×900、768×1024、360×800 下检查。

| 卡 | 文件 | `git diff --stat` | 渲染出的 `#root` | 三种视口 | Tab 停留 | 点击第三张卡 |
| --- | --- | --- | --- | --- | --- | --- |
| v1 | — | — | 基准 | 卡高 127 / 127 / 148px | 只有“查看项目” | 无反应 |
| ① 提取组件 | `01-extract-component.diff` | 2 个文件 16+ 4− | 与 v1 逐字相同 | 同 v1 | 同 v1 | 同 v1 |
| ② 移动数据 | `02-move-data.diff` | 2 个文件 15+ 14− | 与 v1 逐字相同 | 同 v1 | 同 v1 | 同 v1 |
| ③ 按名称排序 | `03-sort-by-name.diff` | 1 个文件 1+ 1− | 卡片顺序不同 | 顺序变为端侧多模态推理引擎、红绿灯感知量产、RoboHarness；尺寸同 v1 | 同 v1 | 同 v1 |
| ④ 缩短类名 | `04-short-class-name.diff` | 1 个文件 1+ 1− | 描述的 class 不同 | 描述颜色 `#626c65` → `#222d29`，行高 28.8 → 24px，外边距 0 → 上下 16px；卡高 144 / 144 / 160px；360 宽页面高 865px | 同 v1 | 同 v1 |
| ⑤ 可聚焦 | `05-tabindex.diff` | 1 个文件 1+ 1− | `li` 多了 `tabindex="0"` | 同 v1 | “查看项目”后依次停在三张卡，Chromium 默认蓝色焦点框 | 同 v1 |

其他观察：

- ③ 用 `localeCompare(…, 'zh-CN')` 按拼音排序。最初没写 `'zh-CN'`，结果随浏览器语言变：英文环境下 RoboHarness 排第一，中文环境下排最后（Node 24 实测）。固定语言后，各环境都是上表顺序。
- ① 让 `App.tsx` 净减 1 行（+3 −4），新增 13 行的组件文件，总行数变多。
- 曾做第六张卡（区块 id `projects` → `work`，按钮链接同步改）：站内点击正常，但 v1 在 1440 与 768 宽下整页不滚动、360 宽只能滚 27px，旧链接 `#projects` 本来就没有可跳的距离，不能拿来讲“链接失效”，没有采用。

## 重新生成

```bash
cp -R starters/personal-homepage/ch01-complete /tmp/hp && cd /tmp/hp
rm -rf node_modules dist
git init -q -b main && git add -A && git commit -qm baseline
git apply /path/to/homepage-v1.diff && git commit -qam homepage-v1 && git tag homepage-v1
npm ci
git switch -c card-03 homepage-v1 && git apply /path/to/refactor-cards/03-sort-by-name.diff
npm run build
```

其他卡同理：每张都从 `homepage-v1` 新建分支后应用，不叠加。2026-10-05 在排练快照的新副本上按此步骤应用 homepage-v1 与五张卡均成功。录制版要基于讲师冻结的 homepage-v1 重新制作五张卡，并重做上表的检查；2.5 p54–p57 里的行数、顺序与尺寸随之更新。

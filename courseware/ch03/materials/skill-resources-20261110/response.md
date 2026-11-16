已完成。以下是本次整理的完整记录。

## 读取了什么

| 文件 | 内容 |
|---|---|
| `game-studio/skills/sprite-pipeline/SKILL.md` |技能主流程（`.agents/skills/sprite-pipeline` 是指向它的符号链接，已确认内容完全一致） |
| `game-studio/references/sprite-pipeline.md` | 详细流程：共享缩放、共享锚点、bottom-align、lockback规则 |
| `game-studio/references/playtest-checklist.md` | QA 清单（2D 项：sprite baseline consistency 等） |
| `game-studio/scripts/normalize_sprite_strip.py` | 条带切分 → 等比缩放 → 定尺归一化 |
| `game-studio/scripts/render_sprite_preview_sheet.py` | 预览拼版（棋盘底） |
| `game-studio/scripts/build_sprite_edit_canvas.py` | 仅用于「有基准帧 + 生成」场景，**本次未运行** |
| `input/raw-strip.png` | 512×128 RGBA，4 个 128×128 槽位 |

源条带实测：4 帧内容 alpha bbox分别为16×24 / 16×24 / 16×32 / 16×24，全部落在各自槽位内（无跨槽断裂）；调色板只有 3 个实体色（紫 `#9B5DE5`、白、深紫 `#241338`）+ 全透明。

## 运行了什么

```
.venv/bin/python game-studio/scripts/normalize_sprite_strip.py \
  --input input/raw-strip.png --out-dir output/sprites/strip \
  --frames 4 --frame-size 64

.venv/bin/python game-studio/scripts/render_sprite_preview_sheet.py \
  --frames-dir output/sprites/strip --out output/sprites/strip-preview.png --columns 4
```

按技能约定 **省略了** `--anchor` / `--lock-frame1`（无基准帧、且本次不锁定首帧），也 **没有** 走 build_sprite_edit_canvas / imagegen（素材已提供，不生成不编辑造型）。

归一化推导：全局最大内容 16×32 → 共享 scale = min(64/16, 64/32) = **2.0**，四帧共用同一缩放，bottom-center 对齐。

## 输出

```
output/sprites/strip/01.png … 04.png  4 张 64×64 透明 PNG
output/sprites/strip-preview.png       280×64 预览图（棋盘底）
```

## 检查了什么- **尺寸/格式**：四帧均 64×64、8-bit RGBA PNG，重新加载无损。
- **共享缩放**：四帧内容宽度全部为 32 px，无逐帧缩放漂移。
- **共享锚点**：四帧底边均在 y=64（同一基线），左边距均为 x=16（水平居中一致）。
- **透明度**：alpha 仅取 0 或 255，无半透明渗色；透明像素2560/2560/2432/2560。
- **像素保真**：NEAREST 缩放，调色板仍为原 3 色，未引入任何新颜色或抗锯齿灰边。
- **无裁切**：第 3 帧 bbox 为 (16,0,48,64)，最高的「耳朵/天线」恰好贴到顶行但未被切掉。
- **视觉复核**：放大查看预览与四帧拼版，眼/口清晰，动画节拍为「站立 → 站立 → 竖耳 → 站立」。
- **画质门（对照 SKILL Quality Gates）**：比例稳定 ✅、尺寸不漂移 ✅、透明保留 ✅、游戏尺度可读 ✅、预览目检 ✅；「frame01 与已发行素材一致」一项因未启用 lockback 而不适用。

## 尚未验证的环节

1. **引擎内实测**：仓库里没有游戏工程，未在浏览器里跑实际播放循环，因此「action 在运行时是否读得清」「sprite baseline 在相机/地面碰撞上是否对齐」尚未验证。
2. **帧率/时长**：技能流程不含时长定义，四帧的播放间隔需后续在引擎侧自行确定。
3. **动画语义确认**：第 3 帧的竖耳是素材原有意图还是绘制误差，我只做了像素级核对，未与作者意图比对；若它实际代表跳跃，则当前 bottom-align 会让该帧显得顶天立地。
4. **尺寸余量**：第 3 帧已占满 64 px 高度，后续若补更高姿势会被裁切，届时需要整体降 scale 重跑。
5. **资产索引 / 接入**：按要求未创建游戏、未接入引擎，也没有更新任何资源索引或 manifest。
6. **未使用的两步**：`build_sprite_edit_canvas.py` 与 imagegen 编辑链路完全跳过；`--lock-frame1` 与 `--anchor` 未启用，因此不存在基准帧一致性保证。

一点提醒：源条带里四帧内容宽高几乎一致（16 px宽，落在128 px 槽中偏一侧），说明原始条带的槽位对齐本身较松散；归一化脚本按内容 bbox 重新居中，所以输出已经是干净对齐的，但如果你手里的 `raw-strip.png` 是从别处导出的、槽位里还有别的隐含约定，值得再确认一下。
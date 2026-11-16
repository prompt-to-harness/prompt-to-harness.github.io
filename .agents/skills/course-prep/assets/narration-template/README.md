# 讲述页起步包

复制本目录，以当前内容源生成 `example-data.js` 的数据后预览 `index.html`；推荐使用本地 HTTP 服务以支持剪贴板，剪贴板不可用时展开只读原文框并全选，供手动复制，保留末尾换行。模板是显示层，不新增一份正式口播。示例为结构示意，不是实际运行或已验证的教学成果。

| 文件 | 职责 |
| --- | --- |
| index.html | 左目录、右侧整节连续内容及加载顺序 |
| speaker.js | 一次渲染、导航、时序模块、旧字段适配及复制 |
| speaker.css | 共用层级、操作与口播区分、折叠前后紧凑布局及窄屏 |
| example-data.js | 分步 PPT、多次定位、动态等待备用、设计/成稿/占位与旧字段样例 |
| ppt-location.js | 按实际播放顺序计算可见编号，保留稳定页面 ID |
| slides.html | 只验证 PPT 定位的示意页，正式课程接入真实播放器 |

## 最小接入

```js
window.narrationData = {
  section:'4.1', title:'4.1 讲述页',
  parts:[{id:'part-a',number:'4.1.1',title:'核对结果',groups:[
    {id:'group-a',number:'4.1.1.1',title:'看证据',screens:[
      {id:'scene-a',number:'4.1.1.1.1',title:'区分两种检查',aliases:['old-scene'],segments:[
        {id:'segment-a',title:'先看生成，再看内容',
          design:'从生成记录能证明什么，推进到内容仍需检查；停在证据范围。',
          limits:'模拟记录，没有实际错误截图。',
          blocks:[
            {type:'location',text:'运行记录 · generated'},
            {type:'operation',text:'定位生成完成行。'},
            {type:'script',ref:'original-source-id-1'},
            {type:'operation',text:'滚动到 sample 记录。'},
            {type:'script',ref:'original-source-id-2'}
          ]}
      ]}
    ]}
  ]}]
};
```

`parts / groups / screens` 保留现有目录容器与稳定 ID；`screens` 是讲解场景，不限定为一个窗口。每个场景可以含多个 `segments`；段内 `blocks` 按真实时间排列。不要按模块数增加导航层级、`script.json` 数组项或 PPT 步骤。`number` 仅为显示编号，不能据标题或页序重新生成 `id`。`aliases` 可保留历史深链，但不能和任何真实 ID 重复。

`design` 就近保留：有正式 script 模块时默认折叠，没有 script 时展开。`status` 表示当前状态，`limits` 表示影响判断的事实边界，均常显。`preparation` 是可折叠录前准备；正常路线当场必做动作放进 operation，不能藏在 preparation 或备用分支。完全占位的场景只写已有标题和 status，不补造设计或稿件。

### 时序模块

| type | 字段与行为 |
| --- | --- |
| location | `text` 为具体画面、文件位置或状态；可附 `ppt:{id,step}`，只定位不虚构动作 |
| operation | `text` 或 `steps:[文字,…]`，可用 `timing` 写明“边做边讲”“讲完后操作”；连续无讲述动作可合组 |
| script | 正式内容用 `ref` 经适配器取得原节点；独立示例可用 `text`。相邻无动作的连续口播在生成数据时合成一个模块，不改底层源坐标 |
| prompt | `label`、`purpose`、`text`；名称/用途/复制常显，原文默认折叠，显示与复制使用同一字符串 |
| materials | `items:[{label,url,purpose,location,text?}]`；材料名、用途、定位与入口就近呈现；可复制输入用 text，长原文折叠 |
| note | `text` 常显，用于当前事实边界，不替代正常动作 |
| preview | `label`、`url`；首次展开才创建 iframe，不预加载整节全部画面；来源页面可另开 |
| branch | `condition` 常显，`label` 与 `blocks` 折叠；只能放条件触发的备用路线 |

所有文字按纯文本显示，不接收 HTML 字符串。需要保留编辑节点时通过适配器接入，不用 innerHTML 克隆。未知模块类型、重复 ID 或重复挂载的同一原节点会报错，应修正数据映射而不是忽略错误。

## 旧字段与唯一源

现有 `screen / ppt / operation / materials / prompt / script / points / content / effect` 继续支持：按旧顺序显示；旧 ID 保留。`points` 明确标为“原讲述要点（待辨别）”，即使有 script 也不隐藏，不自动宣称它是新讲述设计。只有已确认其职责后才迁移到 design。

不要同时维护旧顶层正文和新 segments；若同时提供，模板显示两者并提示核对重复，避免无声丢稿。纯容器的 content/effect 可与子场景共存。旧数据在未知时序处不能自动重排，迁移者须据当前讲法判断。

模板不包含保存、撤销或评论后端。正式课程从既有 `screen-plan.json`、`script.json` 或同等唯一源生成显示数据：

```js
window.narrationAdapters = {
  renderScript(item, block, segment) {
    return editableNodes.get(block.ref || item.id);
  }
};
```

在 speaker.js 之前加载适配器。旧的一参数 `renderScript(item)` 仍可用于旧数据；新分段须按 block.ref 返回对应原节点。稳定映射应在渲染前建立，不依赖“当前页面恰好能查询到的节点”。返回现有 Element/Text 节点，不 cloneNode，不复制 innerHTML，也不返回 DocumentFragment；同一原节点不能挂载两次。多个段落合并显示时由适配器返回包含原子节点的原有容器，保留其坐标与事件。引用没有接入时明确显示“口播源未接入”，不使用另一份副本掩盖缺失。

一次渲染后导航只滚动，不替换正文；适配器节点、输入事件和评论挂载点不会因导航丢失。外部编辑器可继续更新原节点；如果重载整套数据，应由现有应用负责保存和重建，模板不提供热替换 API。完整编辑器不必迁移整页，可只复用目录或定位组件。接入真实课程时仍须验证保存、刷新持久化、撤销和评论，没有后端的测试不能报告这些已通过。

## 连续阅读与导航

整节正文按顺序常驻右侧；目录默认显示部分、环节，画面子目录收起。目录文字点击定位，旁边按钮只折叠子目录；两者都有键盘入口。被动滚动仅更新当前标记，不新增浏览历史、不改 URL，也不强制改变左侧滚动或折叠状态。刷新定位到 URL 中最近一次明确导航的锚点，不承诺恢复之后的被动阅读位置。

点击导航产生历史记录；深链、刷新、前进和后退到达同一内容锚点。段落 ID 和保留的原节点 ID 也可深链定位，导航标记仍按其所属场景显示。设计/原文/备用等折叠状态在同页导航间保留，不承诺跨刷新保存。预览首次展开后保持挂载，避免反复加载；素材很重时按课程实际需要控制预览数量。

目录与正文间的分隔线可左右拖动；聚焦后用左右键每次调整 10 像素，Home／End 到宽度边界，双击恢复默认。宽度按页面路径保存在本机浏览器，刷新后恢复；窗口变窄时自动限制宽度，回到宽屏后恢复偏好，存储不可用不影响当次操作。调宽不会重新挂载正文或重置目录状态。

## PPT 总览与定位

`pptPlan:{status,pages:[{id,frames,content,progression}]}` 展示小节总页数及逐页关系。省略表示待定；`pages:[]` 明确为 0 页。拟制页可无实际 id，显示计划页号，不能链接到历史同号页冒充已制。

`ppt:{section,url,pages}` 的 pages 使用正式播放器的实际数组，排除材料和历史页。共用定位器的 `label(id)` 给整页号，`label(id,step)` 给状态号，`href(id,step)` 给深链；数据 step 从 0 开始，显示从 01 开始。调用 `bindPlayer()` 接入本仓库播放器工具栏与页脚。显示编号不是稳定主键，插页后按真实顺序计算，不另存一套手写编号。

共享算法真源在 `courseware/shared/ppt-location.js`，本目录同名文件是分发副本。只有发现算法问题时修改两处并核对字节一致；本轮模板迁移不要求更换定位器。

## 交付检查

- 目录拖拽、键盘调宽、宽度边界、刷新记忆和双击复位可用；窄屏不横向溢出，回到桌面恢复偏好，原节点与目录状态不变。
- 整节可连续滚动；目录标记跟随，点击与折叠独立，键盘、深链、刷新、前进后退可用；被动滚动不制造历史记录。
- 操作 A—口播 A—操作 B—口播 B 顺序不变；静态定位不造动作，讲完再做不前置；设计与成稿并存。
- 名称、用途、必要动作、材料身份与限制常显；展开原文、备用和预览后仍紧凑；复制包含原换行与标点。
- 旧字段、旧 ID、源坐标、原节点事件及评论挂载点保留；已成稿、仅设计、纯占位共存；未接入稿源可识别。
- PPT 总览的待定、0 页与已有安排不同；按真实页与状态定位；桌面和窄屏均可读，无横向撑破。
- 模板固定数据测试、独立 AI 生成、课程实际后端与教学试讲分别报告；模板通过不能替代后续生成验收。

## 本仓库正式讲述页的编辑接入

独立示例没有保存后端；复制为正式课程页时必须接入公共 `courseware/shared/script-editor.js`。适配器把每段原稿按空行拆成原节点，操作提示与切换提示单独显示，其余节点设置 `data-script-edit`、`data-scene`、`data-step`、`data-part`。不要裁掉操作提示后重新计算段号。在适配器中提供下列挂载钩子，模板会在原节点挂载完成后调用（路径相对本节适配器文件）：

```js
const editorModule = new URL('../../../shared/script-editor.js', document.currentScript.src);
// 合并到已有 window.narrationAdapters，保留 renderScript。
window.narrationAdapters.enableEditing = async article => {
  const {enableScriptEditing} = await import(editorModule.href);
  await enableScriptEditing(article);
};
```

；用 3.3 的独立讲述源时沿用 `data-screen` 与 `data-part`。模块处理保存、撤销、冲突与草稿恢复，导航不得复制或替换节点。

本地用 `make serve` 或 `sh tools/edit-courseware.sh`，不得用普通静态服务器交付。本机已有稿件必须可编辑，公开站点和局域网访问保持只读。交付前运行真实后端检查 `uv run courseware/tools/check-script-editing.py`。独立示例的显示测试不代表正式页已接入编辑。

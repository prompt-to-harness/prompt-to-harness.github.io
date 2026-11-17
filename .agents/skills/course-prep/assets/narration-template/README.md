# 讲述页起步包

复制本目录，以当前内容源生成 `example-data.js` 的数据后预览 `index.html`。顶部切换“讲述安排／画面与口播”；Prompt 全文及复制在 `slides.html`，讲述页提供名称、用途和 PPT 入口。独立示例推荐用本地 HTTP 服务预览；剪贴板不可用时在 PPT 显示只读原文框供手动复制，保留末尾换行。模板是显示层，不新增一份正式口播。示例为结构示意，不是实际运行或已验证的教学成果。

| 文件 | 职责 |
| --- | --- |
| index.html | 左目录、右侧整节连续内容及加载顺序 |
| speaker.js | 一次渲染、双视图、导航、对象提示、材料引用与旧字段适配 |
| speaker.css | 两种视图的层级、对象提示配色、连续口播及窄屏 |
| example-data.js | 环节设计、材料与 Prompt 唯一源、分步 PPT、动态等待、设计/成稿/占位与旧字段样例 |
| ppt-location.js | 按实际播放顺序计算可见编号，保留稳定页面 ID |
| slides.html / slides.js | 展示和复制输入、分步主讲、跳过补充页；正式课程接入真实播放器 |

## 最小接入

```js
window.narrationData = {
  section:'4.1', title:'4.1 讲述页',
  ppt:{section:'4.1',url:'slides.html',pages:[{id:'request-page'}]},
  resources:{request:{kind:'prompt',label:'本次请求',purpose:'提交任务',
    text:'这里来自唯一输入源。\n',ppt:{id:'request-page'}}},
  pptPlan:{pages:[{id:'request-page',role:'操作页',frames:'scene-a',
    content:'展示与复制请求',presentation:'发送前打开',narration:'none'}]},
  parts:[{id:'part-a',number:'4.1.1',title:'核对结果',groups:[
    {id:'group-a',number:'4.1.1.1',title:'从请求到结果',
      arrangement:{explanation:'先明确本次要求，再根据实际返回判断是否落实。',
        transition:'带着尚未解决的问题进入下一环节。',resources:['request']},
      screens:[{id:'scene-a',title:'提交请求',aliases:['old-scene'],segments:[
        {id:'segment-a',limits:'现场结果未知',blocks:[
          {type:'cue',surface:'ppt',text:'复制本次请求',resources:['request']},
          {type:'cue',surface:'terminal',text:'在当前项目粘贴并发送'},
          {type:'script',ref:'original-source-id-1'}
        ]}
      ]}]
    }
  ]}]
};
```


`parts / groups / screens` 保留现有目录容器与稳定 ID；`screens` 是讲解场景，不限定为一个窗口。每个场景可以含多个 `segments`；段内 `blocks` 按真实时间排列。不要按模块数增加导航层级、`script.json` 数组项或 PPT 步骤。`number` 仅为显示编号，不能据标题或页序重新生成 `id`。`aliases` 可保留历史深链，但不能和任何真实 ID 重复。

`arrangement` 放在完整环节（通常为 group）上，承载解释推进、承接和集中材料入口；段内仍需单独说明的 `design` 在讲述安排视图直接呈现。画面与口播视图呈现时序模块，设计不再折叠混排。`status` 表示当前状态，`limits` 表示影响判断的事实边界，均常显。`preparation` 是可折叠录前准备；正常路线当场必做动作放进 cue 或 operation，不能藏在 preparation 或备用分支。完全占位的场景只写已有标题和 status，不补造设计或稿件。

### 资源与两种视图

`resources` 以稳定 key 登记材料与 Prompt，环节的 `arrangement.resources` 集中引用，时序提示的 `resources` 就近引用。字段为 `kind`（prompt/material）、`label`、`purpose`、`location`、`url` 或 `ppt:{id,step?}`。Prompt 必须给 PPT 定位；全文 `text` 由 PPT 显示与复制，讲述页只呈现名称、用途与链接，不从这里另生成全文块。正式课程从既有唯一输入源生成该数据；资源未登记、PPT 定位缺失必须处理，不用失效链接掩盖。

有口播默认 `mode=script`，只有设计默认 `mode=design`；显式 URL 模式优先。模式切换保持当前环节；设计视图中不单列只有口播的细节，细节深链回到所属环节。缺稿、占位和事实边界在两种模式都保留。正文一次挂载，切换仅改变可见性，不复制或重建编辑节点。

### 时序模块

| type | 字段与行为 |
| --- | --- |
| cue | `surface:ppt/browser/terminal/inspect/other`、`text`、可选 `label`、`ppt`、`resources`；轻量对象提示，定位与动作写清实际时机 |
| location | `text` 为具体画面、文件位置或状态；可附 `ppt:{id,step}`，只定位不虚构动作 |
| operation | `text` 或 `steps:[文字,…]`，可用 `timing` 写明“边做边讲”“讲完后操作”；连续无讲述动作可合组 |
| script | 正式内容用 `ref` 经适配器取得原节点；独立示例可用 `text`。相邻无动作的连续口播在生成数据时合成一个模块，不改底层源坐标 |
| prompt | 仅兼容尚未迁移的旧全文块并提示迁移；新数据用 resources 登记、cue 引用，全文与复制放 PPT |
| materials | 兼容旧 `items:[{label,url,purpose,location,text?}]`；新数据优先引用 resources，不用 text 另建输入副本 |
| note | `text` 常显，用于当前事实边界，不替代正常动作 |
| preview | `label`、`url`；首次展开才创建 iframe，不预加载整节全部画面；来源页面可另开 |
| branch | `condition` 常显，`label` 与 `blocks` 折叠；只能放条件触发的备用路线 |

所有文字按纯文本显示，不接收 HTML 字符串。需要保留编辑节点时通过适配器接入，不用 innerHTML 克隆。未知模块类型、重复 ID 或重复挂载的同一原节点会报错，应修正数据映射而不是忽略错误。

## 旧字段与唯一源

现有 `screen / ppt / operation / materials / prompt / script / points / content / effect` 继续支持：按旧顺序显示；旧 ID 保留。`points` 在讲述安排视图明确标为“原讲述要点（待辨别）”，即使有 script 也保留，不自动宣称它是新讲述设计。只有已确认其职责后才迁移到 design。

不要同时维护旧顶层正文和新 segments；若同时提供，模板显示两者并提示核对重复，避免无声丢稿。纯容器的 content/effect 可与子场景共存。旧数据在未知时序处不能自动重排，迁移者须据当前讲法判断。旧 prompt 与带 text 的 materials 保留兼容展示，待 PPT 接好显示与复制后再撤下；新模板不以删除旧块代替迁移。

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

两种视图的正文按顺序常驻右侧；目录默认显示部分、环节，画面子目录收起。目录文字点击定位，旁边按钮只折叠子目录；两者都有键盘入口。被动滚动仅更新当前标记，不新增浏览历史、不改 URL，也不强制改变左侧滚动或折叠状态。刷新定位到 URL 中最近一次明确导航的锚点，不承诺恢复之后的被动阅读位置。

点击导航产生历史记录；深链、刷新、前进和后退到达同一内容锚点。段落 ID 和保留的原节点 ID 也可深链定位，导航标记仍按其所属场景显示。录前准备/旧原文/备用等折叠状态在同页导航和模式切换间保留，不承诺跨刷新保存。预览首次展开后保持挂载，避免反复加载；素材很重时按课程实际需要控制预览数量。

目录与正文间的分隔线可左右拖动；聚焦后用左右键每次调整 10 像素，Home／End 到宽度边界，双击恢复默认。宽度按页面路径保存在本机浏览器，刷新后恢复；窗口变窄时自动限制宽度，回到宽屏后恢复偏好，存储不可用不影响当次操作。调宽不会重新挂载正文或重置目录状态。

## PPT 总览与定位

`pptPlan:{status,pages:[{id,frames,supports,content,role,presentation,progression,narration}]}` 展示收录总页数及逐页关系。`role` 说明主讲、操作或补充用途，`presentation` 说明实际展示／跳过／条件打开；`narration` 使用 required（需要口播）、none（无需口播）、pending（逐字稿待补）。无需口播的页允许省略 frames，以 supports 或 content 说明用途，不给它补造台词。旧数据缺省这些字段时保留已有安排，不猜测状态。省略 pptPlan 表示待定；`pages:[]` 明确为 0 页。拟制页可无实际 id，显示计划页号，不能链接到历史同号页冒充已制。

`ppt:{section,url,pages}` 的 pages 使用正式播放器的实际数组，排除材料和历史页。共用定位器的 `label(id)` 给整页号，`label(id,step)` 给状态号，`href(id,step)` 给深链；数据 step 从 0 开始，显示从 01 开始。调用 `bindPlayer()` 接入本仓库播放器工具栏与页脚。显示编号不是稳定主键，插页后按真实顺序计算，不另存一套手写编号。

示例 PPT 共收录三页：输入操作页无需口播；分步主讲页对应口播；补充页保持解释完整但主讲路线跳过。收录导航可访问全部页，下一步沿主讲路线推进，二者独立。示例中的规则与请求全文来自同一 resources 数据，含末尾换行。

共享算法真源在 `courseware/shared/ppt-location.js`，本目录同名文件是分发副本。只有发现算法问题时修改两处并核对字节一致；本轮模板迁移不要求更换定位器。

## 渐进接入

新建页采用本模板；已有课程在讲师授权深化当前环节时，按[渐进迁移](../../references/narration-implementation.md#随内容深化逐段迁移)适配。先核对原稿、讲师修改、深链、编辑和评论坐标，再整理当前环节；无动作介入的相邻口播合并显示，但原节点与坐标保留。未处理环节维持原结构，可与新结构并存。不直接把本模板 CSS 加到全部旧课，不为模板升级批量重写课程源。

## 交付检查

- 目录拖拽、键盘调宽、宽度边界、刷新记忆和双击复位可用；窄屏不横向溢出，回到桌面恢复偏好，原节点与目录状态不变。
- 整节可连续滚动；目录标记跟随，点击与折叠独立，键盘、深链、刷新、前进后退可用；被动滚动不制造历史记录。
- 两种视图可切换并保持环节；深链、刷新及前进后退恢复模式与位置，只有设计和占位仍可找到。操作 A—口播 A—操作 B—口播 B 顺序不变；静态定位不造动作，讲完再做不前置。
- 材料与 Prompt 集中登记；新结构无 Prompt 全文折叠块，PPT 全文与复制同源且保留换行、标点。必要动作、材料身份与限制常显；展开备用和预览后仍紧凑。
- 旧字段、旧 ID、源坐标、原节点事件及评论挂载点保留；已成稿、仅设计、纯占位共存；未接入稿源可识别。
- PPT 总览区分主讲、操作与补充用途、需要口播／无需口播／待补稿；计入所有收录页，跳过补充页可接续。待定、0 页与已有安排不同；按真实页与状态定位；桌面和窄屏均可读，无横向撑破。
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

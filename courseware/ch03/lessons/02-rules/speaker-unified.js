/* 合并当前各部分的展示映射；口播、操作与材料仍读取原源。 */
(() => {
  const params = new URLSearchParams(location.search);
  const hash = location.hash;
  if (params.has('legacy') || params.has('archive')) return;
  if (/^#(?:content-)?b(?:0[1-9]|1[0-9]|2[0-2])$/.test(hash)) {
    location.replace('speaker-archive.html?archive=1&part=2' + hash);
    return;
  }
  const first = window.screenPlan, reading = window.readingPlan;
  const frames = first.frames.map(frame => ({...frame, selectionFrame:true}));
  const firstItems = frames.map(frame => ({frame:frame.id, title:frame.title,
    content:frame.explain, reason:frame.action,
    screens:[{surface:frame.surface, action:frame.action, points:[frame.visible,frame.explain], materials:frame.materials}]}));
  // 只为目录添加 Discussion 环节；原画面、讲法与口播保持不变。
  const directoryTitles = [
    '3.2.1.1 怎样让下一次任务用上检查方法',
    '3.2.1.2 为什么选 game-playtest',
    '3.2.1.3 名称与描述怎样说明用途',
    '3.2.1.3a 安装后怎样确认可发现',
    '3.2.1.4 主动调用后怎样核对回答',
    '3.2.1.5 不点名时怎样核对选用与读取',
    '3.2.1.6 描述怎样写清范围并复核'
  ];
  const directoryGroups = first.units.map((unit, index) => ({title:directoryTitles[index], frames:unit.frames}));
  window.unifiedSpeakerPlan = {
    ...reading, scope:'3.2 读懂一份完整的游戏开发 Skill', intro:first.intro,
    materials:{...first.materials,...reading.materials},
    units:[...first.units,...reading.units], frames:[...frames,...reading.frames],
    contentDesign:{units:[{directoryTitle:'3.2.1 安装、主动调用、语言触发与描述调整',directoryGroups,title:'3.2.1 安装、调用与描述复核',status:first.status,pptPlan:first.pptPlan,discussion:'../../../../docs/outline/ch03-discussion.md#:~:text=3.2.1%20安装',guides:first.units,items:firstItems},...reading.contentDesign.units]}
  };
  const anchor = hash.slice(1);
  const sceneFrame = frames.find(frame => frame.scene === anchor);
  const target = sceneFrame?.id || (anchor === 'p08' ? 'b31' : anchor) || (params.get('part') === '2' ? 'b31' : frames[0].id);
  const recordingView = first.recordingReady === true && params.get('view') === 'recording';
  const search = recordingView ? '?view=recording' : '';
  history.replaceState(null, '', 'speaker.html' + search + '#' + target);
})();

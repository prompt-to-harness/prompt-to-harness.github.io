/* 60 秒躲避与收集 —— 开始界面交互（原生 JS，无依赖） */
(function () {
  var startBtn = document.getElementById('start-btn');
  var soundBtn = document.getElementById('sound-btn');
  var soundLabel = document.getElementById('sound-label');
  var preview = document.getElementById('preview');
  var live = document.getElementById('live');
  var iconOn = soundBtn.querySelector('.icon--on');
  var iconOff = soundBtn.querySelector('.icon--off');

  function announce(text) {
    live.textContent = '';
    window.setTimeout(function () { live.textContent = text; }, 20);
  }

  /* 开始游戏：按钮进入「预览中」状态，并在页面显示预览占位区 */
  startBtn.addEventListener('click', function () {
    startBtn.textContent = '预览中';
    startBtn.disabled = true;
    preview.hidden = false;
    announce('预览中：完整玩法尚未接入，仅显示开始界面原型。');
    preview.focus();
  });

  /* 音效开关：aria-pressed 承载状态，颜色与图标只是辅助通道 */
  soundBtn.addEventListener('click', function () {
    var on = soundBtn.getAttribute('aria-pressed') === 'true';
    var next = !on;
    soundBtn.setAttribute('aria-pressed', String(next));
    soundBtn.setAttribute('aria-label', next ? '音效已开启，点击关闭' : '音效已关闭，点击开启');
    soundLabel.textContent = next ? '音效 开' : '音效 关';
    iconOn.hidden = !next;
    iconOff.hidden = next;
    announce(next ? '音效已开启' : '音效已关闭');
  });
})();

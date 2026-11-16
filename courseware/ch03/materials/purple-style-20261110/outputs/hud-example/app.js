/* 60 秒躲避与收集 · 界面原型脚本
 * 只负责 HUD 与暂停面板的切换，不含移动、碰撞、计分或倒计时推进逻辑。
 */
(function () {
  'use strict';

  var pauseBtn = document.getElementById('pauseBtn');
  var resumeBtn = document.getElementById('resumeBtn');
  var restartBtn = document.getElementById('restartBtn');
  var overlay = document.getElementById('pauseOverlay');
  var statusChip = document.getElementById('statusChip');
  var statusText = document.getElementById('statusText');
  var stats = document.querySelector('.hud__stats');

  var paused = false;
  var lastFocus = null;
  var statusTimer = null;

  function setPaused(next) {
    paused = next;

    document.body.classList.toggle('is-paused', paused);

    /* 暂停按钮文案在「暂停 / 继续」之间切换 */
    pauseBtn.textContent = paused ? '继续' : '暂停';
    pauseBtn.setAttribute('aria-pressed', String(paused));
    pauseBtn.setAttribute('aria-expanded', String(paused));

    /* 同屏只保留一个主色实心块：暂停时浮层的「继续游戏」是唯一主行动，
       HUD 上的「继续」降级为次级按钮。 */
    pauseBtn.classList.toggle('btn--primary', !paused);
    pauseBtn.classList.toggle('btn--ghost', paused);

    statusChip.setAttribute('data-state', paused ? 'paused' : 'running');
    statusText.textContent = paused ? '已暂停' : '进行中';

    overlay.hidden = !paused;

    if (paused) {
      lastFocus = document.activeElement;
      /* 打开时焦点移到主行动按钮 */
      resumeBtn.focus();
    } else if (lastFocus) {
      /* 关闭时焦点归还触发它的按钮 */
      lastFocus.focus();
      lastFocus = null;
    }
  }

  pauseBtn.addEventListener('click', function () {
    setPaused(!paused);
  });

  resumeBtn.addEventListener('click', function () {
    setPaused(false);
  });

  restartBtn.addEventListener('click', function () {
    setPaused(false);
    /* 原型无游戏逻辑：这里只把 HUD 复位成初始示意值并给一次瞬时反馈 */
    stats.classList.remove('is-reset');
    void stats.offsetWidth;
    stats.classList.add('is-reset');

    statusChip.setAttribute('data-state', 'running');
    statusText.textContent = '已重新开始';
    if (statusTimer) { clearTimeout(statusTimer); }
    statusTimer = setTimeout(function () {
      statusChip.setAttribute('data-state', 'running');
      statusText.textContent = '进行中';
    }, 1600);
  });

  document.addEventListener('keydown', function (event) {
    if (!paused) { return; }

    if (event.key === 'Escape') {
      event.preventDefault();
      setPaused(false);
      return;
    }

    /* Tab 在面板内循环 */
    if (event.key === 'Tab') {
      var focusables = overlay.querySelectorAll('button');
      var first = focusables[0];
      var last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* 预览便利：index.html#paused 可直接进入暂停态，便于截图与走查 */
  if (window.location.hash === '#paused') {
    setPaused(true);
  }
})();

/* 60 秒躲避与收集 · 界面原型
   只做界面示意：暂停 / 继续的状态切换、浮层焦点管理与焦点陷阱。
   不含移动、碰撞、计分等游戏逻辑。 */
(function () {
  'use strict';

  var toggleBtn = document.getElementById('pauseToggle');
  var toggleLabel = document.getElementById('toggleLabel');
  var overlay = document.getElementById('pauseOverlay');
  var panel = document.getElementById('pausePanel');
  var resumeBtn = document.getElementById('resumeBtn');
  var restartBtn = document.getElementById('restartBtn');
  var stage = document.getElementById('stage');

  var statTime = document.getElementById('statTime');
  var statLives = document.getElementById('statLives');
  var statScore = document.getElementById('statScore');
  var panelTime = document.getElementById('panelTime');
  var panelLives = document.getElementById('panelLives');
  var panelScore = document.getElementById('panelScore');

  var paused = false;
  var lastTrigger = null;

  function syncPanelStats() {
    panelTime.textContent = statTime.textContent;
    panelLives.textContent = statLives.textContent;
    panelScore.textContent = statScore.textContent;
  }

  function openPause(trigger) {
    if (paused) { return; }
    paused = true;
    lastTrigger = trigger || toggleBtn;
    syncPanelStats();
    overlay.hidden = false;
    stage.classList.add('is-paused');
    /* 暂停态把主色让给浮层里的「继续游戏」，HUD 按钮降级为次级按钮，
       保证同一屏只有唯一的主行动（SKILL §1 角色规则）。 */
    toggleBtn.classList.remove('btn--primary');
    toggleBtn.classList.add('btn--ghost');
    toggleBtn.classList.add('is-paused');
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleLabel.textContent = '继续';
    requestAnimationFrame(function () { resumeBtn.focus(); });
  }

  function closePause() {
    if (!paused) { return; }
    paused = false;
    overlay.hidden = true;
    stage.classList.remove('is-paused');
    toggleBtn.classList.remove('btn--ghost');
    toggleBtn.classList.add('btn--primary');
    toggleBtn.classList.remove('is-paused');
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleLabel.textContent = '暂停';
    if (lastTrigger) { lastTrigger.focus(); }
    lastTrigger = null;
  }

  function focusables() {
    return panel.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  }

  toggleBtn.addEventListener('click', function () {
    if (paused) { closePause(); } else { openPause(toggleBtn); }
  });

  resumeBtn.addEventListener('click', closePause);

  /* 次级行动：示意版的「重新开始」把示意数值复位后回到游戏。 */
  restartBtn.addEventListener('click', function () {
    statTime.textContent = '01:00';
    statScore.textContent = '0';
    statLives.textContent = '3';
    syncPanelStats();
    closePause();
  });

  document.addEventListener('keydown', function (e) {
    if (!paused) {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        openPause(toggleBtn);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      closePause();
      return;
    }

    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      closePause();
      return;
    }

    /* Tab 在浮层内循环（SKILL §8） */
    if (e.key === 'Tab') {
      var list = Array.prototype.slice.call(focusables());
      if (!list.length) { return; }
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  syncPanelStats();
})();

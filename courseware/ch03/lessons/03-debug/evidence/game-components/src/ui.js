/** ui.js —— 与玩法无关的小工具：时间格式化、焦点陷阱。 */
(function (global) {
  'use strict';

  /** 秒 -> "m:ss" */
  function formatTime(seconds) {
    var total = Math.max(0, Math.floor(seconds));
    var m = Math.floor(total / 60);
    var s = total % 60;
    return m + ':' + String(s).padStart(2, '0');
  }

  /** 把焦点锁在 container 内的可聚焦元素上（模态用）。 */
  function trapFocus(container, event) {
    if (event.key !== 'Tab') return;
    var focusables = container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
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

  global.DodgeUI = { formatTime: formatTime, trapFocus: trapFocus };
})(window);

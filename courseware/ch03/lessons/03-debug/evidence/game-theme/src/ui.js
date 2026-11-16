/** 与具体游戏无关的小工具：时间格式化、浮层焦点陷阱。 */

/** 毫秒 -> "m:ss"（超过一小时为 "h:mm:ss"）。 */
function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? h + ':' + mm + ':' + ss : m + ':' + ss;
}

/** 把焦点锁在 container 内的可聚焦元素上（浮层用）。 */
function trapFocus(container, event) {
  if (event.key !== 'Tab') return;
  const focusables = container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/** 读取状态类按钮上的文案，做「音效开/关」这类切换。 */
function setToggleLabel(btn, on, onLabel, offLabel) {
  btn.textContent = on ? onLabel : offLabel;
  btn.setAttribute('aria-pressed', String(Boolean(on)));
}

/**
 * shell —— 与玩法无关的「紫色游戏站」HUD 控制器（60 秒躲避与收集版）。
 *
 * 本游戏只有单一难度，因此：没有难度分段控件、没有工具条重开按钮；
 * 重开只出现在结算浮层里。HUD 只展示三个数据格：时间 / 得分 / 生命。
 */

import { loadSettings, saveSettings, recordBest } from './storage.js';
import { sfx, setSoundEnabled } from './sound.js';

const CLOCK_INTERVAL_MS = 100;

const $ = (id) => document.getElementById(id);

const STAT_IDS = {
  time: 'stat-time',
  score: 'stat-score',
  lives: 'stat-lives',
};

let settings = loadSettings();
let clockTimer = null;
let startedAt = null;
let endedAt = null;
let onRestart = () => {};

const el = {
  overlay: $('overlay'),
  overlayEmoji: $('overlay-emoji'),
  overlayTitle: $('overlay-title'),
  overlayText: $('overlay-text'),
  overlayAgain: $('overlay-again'),
  overlayClose: $('overlay-close'),
  soundBtn: $('sound-toggle'),
};

/* ---------------- 工具 ---------------- */

/** 毫秒 -> "m:ss"。 */
export function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return m + ':' + String(s).padStart(2, '0');
}

/* ---------------- 数据条 ---------------- */

/** 更新一个数据格。key: time / score / lives */
export function setStat(key, value) {
  const node = $(STAT_IDS[key]);
  if (node) node.textContent = String(value);
}

export function bestText() {
  return settings.best ? settings.best.score + ' 分' : '—';
}

/**
 * 记录本局成绩（得分高者胜，得分相同则用时短者胜）。
 */
export function recordResult(score, timeMs) {
  const result = recordBest(settings.best, { score, timeMs });
  settings.best = result.best;
  saveSettings(settings);
  return result;
}

/* ---------------- 计时器 ---------------- */

/**
 * 开始计时。
 * @param {(ms:number)=>string} [format] 自定义时间显示（默认 m:ss），可传倒计时格式
 */
export function startTimer(format) {
  const render = format || formatTime;
  if (startedAt === null) startedAt = Date.now();
  stopClock();
  clockTimer = setInterval(function () {
    setStat('time', render(elapsedMs()));
  }, CLOCK_INTERVAL_MS);
}

/** 停止计时并定格显示。 */
export function stopTimer(format) {
  const render = format || formatTime;
  if (startedAt !== null && endedAt === null) endedAt = Date.now();
  stopClock();
  setStat('time', render(elapsedMs()));
}

export function resetTimer() {
  stopClock();
  startedAt = null;
  endedAt = null;
  setStat('time', '0:00');
}

export function elapsedMs() {
  if (startedAt === null) return 0;
  const end = endedAt === null ? Date.now() : endedAt;
  return Math.max(0, end - startedAt);
}

function stopClock() {
  if (clockTimer !== null) {
    clearInterval(clockTimer);
    clockTimer = null;
  }
}

/* ---------------- 结算浮层 ---------------- */

export function showResult(options) {
  const opts = options || {};
  const emoji = opts.emoji || '🎉';
  const title = opts.title || '完成！';
  const lines = opts.lines || [];
  const primary = opts.primary;
  const secondary = opts.secondary;

  if (el.overlayEmoji) el.overlayEmoji.textContent = emoji;
  if (el.overlayTitle) el.overlayTitle.textContent = title;
  if (el.overlayText) el.overlayText.innerHTML = lines.join('<br>');

  if (primary && el.overlayAgain) {
    el.overlayAgain.textContent = primary.label;
    el.overlayAgain.onclick = primary.onClick;
    el.overlayAgain.hidden = false;
  } else if (el.overlayAgain) {
    el.overlayAgain.hidden = true;
  }

  if (secondary && el.overlayClose) {
    el.overlayClose.textContent = secondary.label;
    el.overlayClose.onclick = secondary.onClick;
    el.overlayClose.hidden = false;
  } else if (el.overlayClose) {
    el.overlayClose.hidden = true;
  }

  if (el.overlay) {
    el.overlay.hidden = false;
    const focusTarget = el.overlayAgain && !el.overlayAgain.hidden ? el.overlayAgain : el.overlayClose;
    if (focusTarget) focusTarget.focus();
  }
}

export function hideResult() {
  if (!el.overlay) return;
  el.overlay.hidden = true;
  // 焦点不能留在被隐藏的浮层里：交还给场地画布
  const stage = document.getElementById('game');
  if (stage) stage.focus();
}

/** 浮层内焦点循环 + Esc 关闭 */
function bindOverlayKeys() {
  if (!el.overlay) return;
  el.overlay.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      hideResult();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = Array.from(el.overlay.querySelectorAll('button')).filter(function (b) {
      return !b.hidden;
    });
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
  });
}

/* ---------------- 音效开关 ---------------- */

function syncSoundButton() {
  if (!el.soundBtn) return;
  el.soundBtn.textContent = settings.sound ? '🔊 音效' : '🔇 静音';
  el.soundBtn.setAttribute('aria-pressed', String(settings.sound));
}

function toggleSound() {
  settings.sound = !settings.sound;
  setSoundEnabled(settings.sound);
  saveSettings(settings);
  syncSoundButton();
}

/* ---------------- 初始化 ---------------- */

/**
 * @param {object} config
 * @param {()=>void} [config.onRestart]  重开（浮层「再玩一局」触发）
 */
export function init(config) {
  const cfg = config || {};
  onRestart = cfg.onRestart || onRestart;

  if (el.soundBtn) el.soundBtn.addEventListener('click', toggleSound);
  setSoundEnabled(settings.sound);
  syncSoundButton();
  bindOverlayKeys();
}

/** 浮层「再玩一局」：关闭浮层并通知玩法脚本重开。 */
export function newGame() {
  hideResult();
  onRestart();
}

export const shell = {
  init,
  setStat,
  recordResult,
  startTimer,
  stopTimer,
  resetTimer,
  elapsedMs,
  formatTime,
  showResult,
  hideResult,
  newGame,
  bestText,
  sfx,
};

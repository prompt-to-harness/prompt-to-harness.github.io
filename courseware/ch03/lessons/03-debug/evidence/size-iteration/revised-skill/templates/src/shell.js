/**
 * shell —— 与玩法无关的「紫色游戏站」HUD 控制器。
 *
 * 它负责所有与玩法无关的界面行为：
 *   分段控件（难度 / 模式）、音效开关、重新开始、四个数据格、
 *   计时器、结算浮层的开关与焦点管理、最佳成绩持久化。
 *
 * 你的玩法脚本只负责：
 *   1) 渲染场地 DOM
 *   2) 在状态变化时调用 shell.setStat(...) / shell.recordBest(...)
 *   3) 游戏结束时调用 shell.showResult({...})
 *
 * 用法：
 *   import { shell } from './shell.js';
 *   shell.init({
 *     modes: [{ id: 'easy', name: '简单' }, { id: 'normal', name: '普通' }],
 *     onModeChange: (id) => startGame(id),
 *     onRestart: () => startGame(),
 *   });
 */

import { loadSettings, saveSettings, recordBest } from './storage.js';
import { sfx, setSoundEnabled } from './sound.js';

const CLOCK_INTERVAL_MS = 200;

const $ = (id) => document.getElementById(id);

/** 数据格 → DOM id 的映射。换玩法时如需改标签，只改 HTML 里的文字。 */
const STAT_IDS = {
  moves: 'stat-moves',
  time: 'stat-time',
  progress: 'stat-progress',
  best: 'stat-best',
};

let settings = loadSettings();
let modes = [];
let currentMode = 'normal';
let clockTimer = null;
let startedAt = null;
let endedAt = null;
let onRestart = () => {};
let onModeChange = () => {};

const el = {
  modeGroup: $('mode-group'),
  modeLabel: $('mode-label'),
  restartBtn: $('restart-btn'),
  soundBtn: $('sound-toggle'),
  overlay: $('overlay'),
  overlayEmoji: $('overlay-emoji'),
  overlayTitle: $('overlay-title'),
  overlayText: $('overlay-text'),
  overlayAgain: $('overlay-again'),
  overlayClose: $('overlay-close'),
};

/* ------------------------------------------------------------------ */
/* 工具                                                                 */
/* ------------------------------------------------------------------ */

/** 毫秒 → "m:ss"（超过一小时显示 "h:mm:ss"）。 */
export function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? h + ':' + mm + ':' + ss : m + ':' + ss;
}

/* ------------------------------------------------------------------ */
/* 数据条                                                               */
/* ------------------------------------------------------------------ */

/** 更新一个数据格。key: moves / time / progress / best */
export function setStat(key, value) {
  const node = $(STAT_IDS[key]);
  if (node) node.textContent = String(value);
}

/** 更新「最佳」格并返回格式化文本。 */
function bestText() {
  const best = settings.best[currentMode];
  return best ? best.score + ' 步 · ' + formatTime(best.timeMs) : '—';
}

/**
 * 记录本局成绩（步数少者胜，步数相同则用时短者胜）。
 * @returns {{score:number,timeMs:number}|null}
 */
export function recordResult(score, timeMs) {
  const previous = settings.best[currentMode];
  const best = recordBest(settings.best, currentMode, { score, timeMs });
  saveSettings(settings);
  setStat('best', bestText());
  const isRecord = !previous || best.score < previous.score ||
    (best.score === previous.score && best.timeMs < previous.timeMs);
  return { best, isRecord };
}

/* ------------------------------------------------------------------ */
/* 计时器                                                               */
/* ------------------------------------------------------------------ */

export function startTimer() {
  if (startedAt === null) startedAt = Date.now();
  stopClock();
  clockTimer = setInterval(() => setStat('time', formatTime(elapsedMs())), CLOCK_INTERVAL_MS);
}

export function stopTimer() {
  if (startedAt !== null && endedAt === null) endedAt = Date.now();
  stopClock();
  setStat('time', formatTime(elapsedMs()));
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

/* ------------------------------------------------------------------ */
/* 分段控件                                                             */
/* ------------------------------------------------------------------ */

function buildModeButtons() {
  if (!el.modeGroup) return;
  el.modeGroup.textContent = '';
  modes.forEach((mode) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'segmented__btn';
    btn.textContent = mode.name;
    btn.dataset.mode = mode.id;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', String(mode.id === currentMode));
    btn.addEventListener('click', () => selectMode(mode.id));
    el.modeGroup.appendChild(btn);
  });
}

function syncModeButtons() {
  if (!el.modeGroup) return;
  el.modeGroup.querySelectorAll('.segmented__btn').forEach((btn) => {
    btn.setAttribute('aria-checked', String(btn.dataset.mode === currentMode));
  });
}

function selectMode(id) {
  if (id === currentMode) return;
  currentMode = id;
  settings.difficulty = id;
  saveSettings(settings);
  syncModeButtons();
  onModeChange(id);
}

/* ------------------------------------------------------------------ */
/* 结算浮层                                                             */
/* ------------------------------------------------------------------ */

/**
 * 显示结算浮层。
 * @param {object} options
 * @param {string} [options.emoji]
 * @param {string} options.title
 * @param {string[]} [options.lines]  每一行是一句说明，可用 <strong>
 * @param {{label:string,onClick:Function}} [options.primary]
 * @param {{label:string,onClick:Function}} [options.secondary]
 */
export function showResult({ emoji = '🎉', title = '完成！', lines = [], primary, secondary } = {}) {
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
  // 焦点不能留在被隐藏的浮层里，交还给工具栏上的「重新开始」
  if (el.restartBtn) el.restartBtn.focus();
}

/** 浮层内焦点循环 + Esc 关闭 */
function bindOverlayKeys() {
  if (!el.overlay) return;
  el.overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      hideResult();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = Array.from(el.overlay.querySelectorAll('button')).filter((b) => !b.hidden);
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

/* ------------------------------------------------------------------ */
/* 音效开关                                                             */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* 初始化                                                               */
/* ------------------------------------------------------------------ */

/**
 * @param {object} config
 * @param {{id:string,name:string}[]} [config.modes]     分段控件选项，留空则隐藏该组
 * @param {string} [config.modeLabel]                   分段控件左侧标签文字
 * @param {(id:string)=>void} [config.onModeChange]
 * @param {()=>void} [config.onRestart]
 * @param {()=>void} [config.onPrimaryAction]            浮层「再玩一局」的默认行为
 */
export function init(config = {}) {
  modes = config.modes || [];
  currentMode = config.defaultMode || settings.difficulty || (modes[0] && modes[0].id) || 'normal';
  if (modes.length && !modes.some((m) => m.id === currentMode)) currentMode = modes[0].id;
  onModeChange = config.onModeChange || onModeChange;
  onRestart = config.onRestart || onRestart;

  if (el.modeLabel && config.modeLabel) el.modeLabel.textContent = config.modeLabel;
  if (el.modeGroup && el.modeLabel) el.modeGroup.setAttribute('aria-labelledby', 'mode-label');
  buildModeButtons();

  if (el.restartBtn) {
    el.restartBtn.addEventListener('click', () => {
      hideResult();
      onRestart();
    });
  }
  if (el.soundBtn) el.soundBtn.addEventListener('click', toggleSound);

  setSoundEnabled(settings.sound);
  syncSoundButton();
  bindOverlayKeys();

  setStat('best', bestText());
}

/** 浮层「再玩一局」的默认实现：回到工具栏聚焦 + 通知玩法脚本重开。 */
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
  sfx,
  get mode() {
    return currentMode;
  },
  get modes() {
    return modes;
  },
};

/**
 * shell —— 与玩法无关的「紫色游戏站」HUD 控制器（本作适配版）。
 *
 * 与模板版的差异：
 *   · 没有难度/模式分段控件（本作只有单一难度）
 *   · 工具条上没有「重新开始」按钮（重开只在结算浮层里）
 *   · 数据格为 时间 / 得分 / 生命
 */

import { loadSettings, saveSettings } from './storage.js';
import { sfx, setSoundEnabled } from './sound.js';

const $ = (id) => document.getElementById(id);

/** 数据格 → DOM id 的映射。 */
const STAT_IDS = {
  time: 'stat-time',
  score: 'stat-score',
  lives: 'stat-lives',
};

let settings = loadSettings();
let onRestart = () => {};

const el = {
  statusLabel: $('status-label'),
  soundBtn: $('overlay-sound'),
  overlay: $('overlay'),
  overlayEmoji: $('overlay-emoji'),
  overlayTitle: $('overlay-title'),
  overlayText: $('overlay-text'),
  overlayAgain: $('overlay-again'),
};

/** 更新一个数据格。key: time / score / lives */
export function setStat(key, value) {
  const node = $(STAT_IDS[key]);
  if (node) node.textContent = String(value);
}

/** 更新工具条右侧的状态提示。 */
export function setStatus(text) {
  if (el.statusLabel) el.statusLabel.textContent = text;
}

/** 结算浮层里的音效开关（游玩中不显示任何按钮）。 */
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
/* 结算浮层                                                             */
/* ------------------------------------------------------------------ */

export function showResult({ emoji = '🎉', title = '完成！', lines = [], primary } = {}) {
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

  if (el.overlay) {
    el.overlay.hidden = false;
    const focusTarget = el.overlayAgain && !el.overlayAgain.hidden ? el.overlayAgain : null;
    if (focusTarget) focusTarget.focus();
  }
}

export function hideResult() {
  if (!el.overlay) return;
  el.overlay.hidden = true;
}

/** 浮层内焦点循环 + Esc 关闭（关闭后仍停在浮层按钮上，这里只有一个按钮） */
function bindOverlayKeys() {
  if (!el.overlay) return;
  el.overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') return;
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
/* 初始化                                                               */
/* ------------------------------------------------------------------ */

export function init(config = {}) {
  onRestart = config.onRestart || onRestart;
  setSoundEnabled(settings.sound);
  syncSoundButton();
  if (el.soundBtn) el.soundBtn.addEventListener('click', toggleSound);
  bindOverlayKeys();
}

/** 重开一局：关闭浮层并通知玩法脚本。 */
export function newGame() {
  hideResult();
  onRestart();
}

export const shell = {
  init,
  setStat,
  setStatus,
  showResult,
  hideResult,
  newGame,
  sfx,
  get settings() {
    return settings;
  },
};

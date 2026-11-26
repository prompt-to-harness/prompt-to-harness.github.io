/* ==========================================================================
   purple-sound.js — 紫色小游戏音效（可单独使用）
   -------------------------------------------------------------------------
   来源：初版紫色翻牌游戏的 WebAudio 合成器（原 sound.js），已扩展为
   「与玩法无关的事件音效表」——翻牌游戏只是它的一个使用方。

   特性：
     · 零音频文件，纯 WebAudio 现场合成
     · 惰性创建 AudioContext；浏览器要求先有用户交互才允许播放
     · 可全局静音、可调主音量、设置持久化
     · 事件名通用（tap / move / select / success / error / …），各玩法自行取用
     · 可用 defineCue() 覆盖或新增自己的音效

   用法：
     import { play, bindSoundToggle, setSoundEnabled } from './purple-sound.js';
     play('success');
     bindSoundToggle(document.getElementById('sound-toggle'));
   ========================================================================== */

/* ------------------------------------------------------------------ 状态 */

let ctx = null;
let enabled = true;
let masterVolume = 0.6;
let unlockBound = false;
const activeVoices = new Map();   // osc -> 预计结束时间
const MAX_VOICES = 12;

/* ------------------------------------------------------------ 音效事件表 */

/*
  每个 cue 是一组 step，按顺序播放。step 字段：
    type    振荡器波形：sine / triangle / square / sawtooth
    freq    起始频率 Hz（可带 freq2 做滑音）
    freq2   结束频率 Hz（可选）
    duration 时长 秒
    gain    音量 0..1（再乘主音量）
    delay   相对起点的延迟 秒

  事件名刻意保持通用：不要把「翻牌」「配对」这类玩法动作写进表里。
*/
const DEFAULT_CUES = {
  /* 轻点 / 落子 / 按钮：最常用的一次反馈 */
  tap: [
    { type: 'triangle', freq: 520, duration: 0.07, gain: 0.09 },
  ],

  /* 光标移动 / 焦点切换：必须很轻，否则连续触发会吵 */
  move: [
    { type: 'sine', freq: 380, duration: 0.05, gain: 0.045 },
  ],

  /* 选中 / 打开菜单 / 展开面板 */
  select: [
    { type: 'sine', freq: 660, duration: 0.08, gain: 0.10 },
    { type: 'sine', freq: 880, duration: 0.10, gain: 0.08, delay: 0.05 },
  ],

  /* 拿到东西 / 得分 / 资源到账：向上的短滑音 */
  pickup: [
    { type: 'triangle', freq: 523, freq2: 784, duration: 0.12, gain: 0.11 },
  ],

  /* 命中 / 达成一次目标：双音上行 */
  success: [
    { type: 'sine', freq: 660, duration: 0.12, gain: 0.13 },
    { type: 'sine', freq: 990, duration: 0.16, gain: 0.11, delay: 0.08 },
  ],

  /* 失误 / 犯规 / 受到惩罚：单音低沉的锯齿波 */
  error: [
    { type: 'sawtooth', freq: 196, duration: 0.20, gain: 0.07 },
  ],

  /* 倒计时 / 滴答：极短的滴声 */
  tick: [
    { type: 'sine', freq: 1000, duration: 0.03, gain: 0.05 },
  ],

  /* 通关 / 任务完成：四音上行琶音（结算浮层弹出时用） */
  complete: [
    { type: 'triangle', freq: 523, duration: 0.26, gain: 0.13 },
    { type: 'triangle', freq: 659, duration: 0.26, gain: 0.13, delay: 0.11 },
    { type: 'triangle', freq: 784, duration: 0.26, gain: 0.13, delay: 0.22 },
    { type: 'triangle', freq: 1047, duration: 0.26, gain: 0.13, delay: 0.33 },
  ],

  /* 失败 / 结束：三音下行 */
  fail: [
    { type: 'sawtooth', freq: 440, duration: 0.18, gain: 0.08 },
    { type: 'sawtooth', freq: 349, duration: 0.18, gain: 0.08, delay: 0.14 },
    { type: 'sawtooth', freq: 262, duration: 0.30, gain: 0.08, delay: 0.28 },
  ],
};

const cues = { ...DEFAULT_CUES };

/* ------------------------------------------------------------------ 工具 */

function getContext() {
  if (!enabled) return null;
  if (ctx === null) {
    const Ctor = typeof window !== 'undefined'
      ? (window.AudioContext || window.webkitAudioContext)
      : null;
    if (!Ctor) return null;
    try {
      ctx = new Ctor();
    } catch {
      ctx = null;
    }
  }
  if (ctx && ctx.state === 'suspended' && typeof ctx.resume === 'function') {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

function tone(step, startAt) {
  const audio = getContext();
  if (!audio) return;

  const start = startAt + (step.delay || 0);
  const endAt = start + step.duration + 0.02;

  // 清理已经结束的声部（onended 未必在所有环境触发，这里按时间兜底）
  for (const [osc, end] of activeVoices) {
    if (end <= audio.currentTime) activeVoices.delete(osc);
  }
  if (activeVoices.size >= MAX_VOICES) return;

  const osc = audio.createOscillator();
  const vol = audio.createGain();
  const peak = Math.max(0.0001, (step.gain ?? 0.1) * masterVolume);

  osc.type = step.type || 'sine';
  osc.frequency.setValueAtTime(step.freq, start);
  if (step.freq2) osc.frequency.exponentialRampToValueAtTime(step.freq2, start + step.duration);

  vol.gain.setValueAtTime(0.0001, start);
  vol.gain.exponentialRampToValueAtTime(peak, start + 0.015);
  vol.gain.exponentialRampToValueAtTime(0.0001, start + step.duration);

  osc.connect(vol).connect(audio.destination);
  activeVoices.set(osc, endAt);
  osc.onended = () => activeVoices.delete(osc);
  osc.start(start);
  osc.stop(endAt);
}

/* ---------------------------------------------------------------- 公共 API */

/** 全局开关。关闭后所有 play() 静默失败。 */
export function setSoundEnabled(value) {
  enabled = Boolean(value);
  return enabled;
}

export function isSoundEnabled() {
  return enabled;
}

/** 主音量 0..1，默认 0.6。 */
export function setMasterVolume(value) {
  const v = Number(value);
  masterVolume = Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : masterVolume;
  return masterVolume;
}

export function getMasterVolume() {
  return masterVolume;
}

/**
 * 新增或覆盖一个音效事件。
 * @param {string} name 事件名（建议用通用语义，不要用玩法专有名词）
 * @param {Array<{type?:string,freq:number,freq2?:number,duration?:number,gain?:number,delay?:number}>} steps
 */
export function defineCue(name, steps) {
  if (!name || !Array.isArray(steps) || steps.length === 0) return false;
  cues[name] = steps.map((s) => ({
    type: s.type || 'sine',
    freq: Number(s.freq) || 440,
    freq2: s.freq2 == null ? undefined : Number(s.freq2),
    duration: Number(s.duration) || 0.12,
    gain: s.gain == null ? 0.1 : Number(s.gain),
    delay: Number(s.delay) || 0,
  }));
  return true;
}

export function getCueNames() {
  return Object.keys(cues);
}

export function hasCue(name) {
  return Object.prototype.hasOwnProperty.call(cues, name);
}

/**
 * 播放一个音效事件。
 * @param {string} name 事件名；未知事件返回 false（不抛错）
 * @param {{delay?:number, gain?:number}} [opts] 额外延迟 / 音量倍率
 * @returns {boolean} 是否真的播放了
 */
export function play(name, opts = {}) {
  if (!enabled) return false;
  const steps = cues[name];
  if (!steps) return false;
  const audio = getContext();
  if (!audio) return false;

  const base = audio.currentTime + (opts.delay || 0);
  const gainScale = opts.gain == null ? 1 : Math.max(0, Number(opts.gain) || 0);
  for (const step of steps) {
    tone({ ...step, gain: step.gain * gainScale }, base);
  }
  return true;
}

/**
 * 在第一次用户交互时解锁音频（部分浏览器要求）。
 * 可以重复调用，内部只绑定一次。
 */
export function unlockAudio() {
  if (unlockBound) return;
  unlockBound = true;
  if (typeof document === 'undefined') return;
  const unlock = () => {
    const audio = getContext();
    if (audio && audio.state === 'suspended' && typeof audio.resume === 'function') {
      audio.resume().catch(() => {});
    }
  };
  document.addEventListener('pointerdown', unlock, { once: true });
  document.addEventListener('keydown', unlock, { once: true });
  document.addEventListener('touchstart', unlock, { once: true });
}

/* ------------------------------------------------------------ 静音开关 UI */

const STORAGE_KEY = 'purple-game-ui.sound';

function safeStorage() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const probe = '__pg_sound_probe__';
    window.localStorage.setItem(probe, probe);
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch {
    return null;   // 隐私模式等场景：降级为不持久化
  }
}

/**
 * 把一个按钮绑成「音效开关」，并持久化状态。
 *
 * 按钮文案自动切换为 🔊 音效 / 🔇 静音，aria-pressed 同步更新
 *（aria-pressed=true 表示声音开着）。
 *
 * @param {HTMLElement} button
 * @param {{defaultOn?:boolean, onChange?:(on:boolean)=>void}} [opts]
 * @returns {{isOn:()=>boolean, toggle:()=>boolean}}
 */
export function bindSoundToggle(button, opts = {}) {
  const defaultOn = opts.defaultOn !== false;
  const store = safeStorage();

  let on = defaultOn;
  if (store) {
    const saved = store.getItem(STORAGE_KEY);
    if (saved === 'on') on = true;
    else if (saved === 'off') on = false;
  }

  const paint = () => {
    if (!button) return;
    button.textContent = on ? '🔊 音效' : '🔇 静音';
    button.setAttribute('aria-pressed', String(on));
    button.setAttribute('aria-label', on ? '关闭音效' : '开启音效');
  };

  const apply = () => {
    setSoundEnabled(on);
    if (store) {
      try { store.setItem(STORAGE_KEY, on ? 'on' : 'off'); } catch { /* 忽略 */ }
    }
    paint();
    if (typeof opts.onChange === 'function') opts.onChange(on);
  };

  if (button) {
    button.type = 'button';
    button.classList.add('pg-btn', 'pg-btn--ghost');
    button.addEventListener('click', () => {
      on = !on;
      apply();
    });
  }

  apply();
  return {
    isOn: () => on,
    toggle: () => { on = !on; apply(); return on; },
  };
}

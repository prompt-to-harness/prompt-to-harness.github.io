/**
 * 用 WebAudio 现场合成音效，不依赖任何外部音频文件。
 * 浏览器要求用户先有交互才允许播放 AudioContext，这里做惰性创建。
 */

let ctx = null;
let enabled = true;

export function setSoundEnabled(value) {
  enabled = Boolean(value);
}

export function isSoundEnabled() {
  return enabled;
}

function getContext() {
  if (!enabled) return null;
  if (ctx === null) {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return null;
    try {
      ctx = new Ctor();
    } catch {
      ctx = null;
    }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

/** 播放一个音符。 */
function tone(freq, duration, { type = 'sine', delay = 0, gain = 0.15 } = {}) {
  const audio = getContext();
  if (!audio) return;
  const start = audio.currentTime + delay;
  const osc = audio.createOscillator();
  const vol = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  vol.gain.setValueAtTime(0.0001, start);
  vol.gain.exponentialRampToValueAtTime(gain, start + 0.015);
  vol.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(vol).connect(audio.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export const sfx = {
  flip() {
    tone(520, 0.07, { type: 'triangle', gain: 0.09 });
  },
  match() {
    tone(660, 0.12, { type: 'sine', gain: 0.13 });
    tone(990, 0.16, { type: 'sine', delay: 0.08, gain: 0.11 });
  },
  mismatch() {
    tone(196, 0.2, { type: 'sawtooth', gain: 0.07 });
  },
  win() {
    [523, 659, 784, 1047].forEach((freq, i) => {
      tone(freq, 0.26, { type: 'triangle', delay: i * 0.11, gain: 0.13 });
    });
  },
  /** 收集到宝石 */
  pickup() {
    tone(880, 0.08, { type: 'triangle', gain: 0.11 });
    tone(1320, 0.12, { type: 'sine', delay: 0.07, gain: 0.1 });
  },
  /** 撞到障碍，扣血 */
  hurt() {
    tone(150, 0.26, { type: 'sawtooth', gain: 0.11 });
    tone(98, 0.3, { type: 'square', delay: 0.05, gain: 0.08 });
  },
  /** 开局倒数提示 */
  tick() {
    tone(720, 0.05, { type: 'sine', gain: 0.08 });
  },
};

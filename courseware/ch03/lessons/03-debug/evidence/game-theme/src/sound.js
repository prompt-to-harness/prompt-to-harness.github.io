/** 用 WebAudio 现场合成音效，不依赖任何外部音频文件。 */

let audioCtx = null;
let enabled = true;

function setSoundEnabled(value) {
  enabled = Boolean(value);
}

function isSoundEnabled() {
  return enabled;
}

function getContext() {
  if (!enabled) return null;
  if (audioCtx === null) {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return null;
    try {
      audioCtx = new Ctor();
    } catch {
      audioCtx = null;
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
  return audioCtx;
}

function tone(freq, duration, { type = 'sine', delay = 0, gain = 0.15, slideTo = null } = {}) {
  const audio = getContext();
  if (!audio) return;
  const start = audio.currentTime + delay;
  const osc = audio.createOscillator();
  const vol = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, start + duration);
  vol.gain.setValueAtTime(0.0001, start);
  vol.gain.exponentialRampToValueAtTime(gain, start + 0.015);
  vol.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(vol).connect(audio.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

/** 在用户手势里预热音频上下文，避免首个音效被浏览器拦下。 */
function unlockSound() {
  const audio = getContext();
  if (audio && audio.state === 'suspended') audio.resume().catch(() => {});
}

const sfx = {
  /** 收集到水晶 */
  gem() {
    tone(760, 0.1, { type: 'triangle', gain: 0.11 });
    tone(1140, 0.14, { type: 'sine', delay: 0.06, gain: 0.09 });
  },
  /** 被障碍撞到 */
  hit() {
    tone(220, 0.28, { type: 'sawtooth', gain: 0.1, slideTo: 90 });
  },
  /** 时间到，胜利 */
  win() {
    [523, 659, 784, 1047].forEach((freq, i) => {
      tone(freq, 0.26, { type: 'triangle', delay: i * 0.11, gain: 0.13 });
    });
  },
  /** 生命耗尽 */
  lose() {
    [392, 330, 262].forEach((freq, i) => {
      tone(freq, 0.3, { type: 'sine', delay: i * 0.14, gain: 0.12 });
    });
  },
};

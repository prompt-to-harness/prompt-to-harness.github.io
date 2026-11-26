/**
 * localStorage 封装：隐私模式下写入会抛异常，统一降级为「不持久化」。
 * 换新游戏时把 STORAGE_KEY 改成自己的命名空间，避免多款游戏共用同一份存档。
 */

const STORAGE_KEY = 'dodge-collect.v1'; // 本游戏专属 key

const DEFAULTS = {
  sound: true,
  best: { score: 0 },
};

function hasStorage() {
  try {
    const probe = '__dodge_collect_probe__';
    window.localStorage.setItem(probe, probe);
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

export const storageAvailable = hasStorage();

export function loadSettings() {
  if (!storageAvailable) return { ...DEFAULTS, best: { score: 0 } };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS, best: { score: 0 } };
    const parsed = JSON.parse(raw);
    return {
      sound: typeof parsed.sound === 'boolean' ? parsed.sound : DEFAULTS.sound,
      best: parsed.best && typeof parsed.best === 'object' ? parsed.best : { score: 0 },
    };
  } catch {
    return { ...DEFAULTS, best: { score: 0 } };
  }
}

export function saveSettings(settings) {
  if (!storageAvailable) return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    return true;
  } catch {
    return false;
  }
}

/**
 * 记录最高分：本玩法分数越高越好。
 * @returns {{score:number,isRecord:boolean}}
 */
export function recordBestScore(settings, score) {
  const previous = settings.best.score || 0;
  const isRecord = score > previous;
  if (isRecord) {
    settings.best = { score };
    saveSettings(settings);
  }
  return { best: { score: Math.max(previous, score) }, isRecord };
}

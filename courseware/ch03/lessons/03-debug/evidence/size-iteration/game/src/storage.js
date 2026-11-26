/**
 * localStorage 封装（隐私模式下降级为「不持久化」）。
 * 本游戏使用独立命名空间，避免和其他小游戏共用同一份存档。
 */

const STORAGE_KEY = 'dodge-collect-60s.v1';

const DEFAULTS = {
  sound: true,
  best: null, // { score: number, timeMs: number }
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
  if (!storageAvailable) return { ...DEFAULTS };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw);
    return {
      sound: typeof parsed.sound === 'boolean' ? parsed.sound : DEFAULTS.sound,
      best: parsed.best && typeof parsed.best === 'object' ? parsed.best : null,
    };
  } catch {
    return { ...DEFAULTS };
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
 * 记录成绩：得分高者胜；得分相同则用时短者胜。
 */
export function recordBest(best, result) {
  const current = best;
  const isBetter =
    !current ||
    result.score > current.score ||
    (result.score === current.score && result.timeMs < current.timeMs);
  if (!isBetter) return { best: current, isRecord: false };
  return { best: { score: result.score, timeMs: result.timeMs }, isRecord: true };
}

/** localStorage 封装：隐私模式下写入会抛异常，这里统一降级为「不持久化」。 */

const STORAGE_KEY = 'dodge-collect.v1';

const DEFAULTS = {
  difficulty: 'normal',
  sound: true,
  best: {},
};

function hasStorage() {
  try {
    const probe = '__purple_game_probe__';
    window.localStorage.setItem(probe, probe);
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

export const storageAvailable = hasStorage();

export function loadSettings() {
  if (!storageAvailable) return { ...DEFAULTS, best: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS, best: {} };
    const parsed = JSON.parse(raw);
    return {
      difficulty: parsed.difficulty || DEFAULTS.difficulty,
      sound: typeof parsed.sound === 'boolean' ? parsed.sound : DEFAULTS.sound,
      best: parsed.best && typeof parsed.best === 'object' ? parsed.best : {},
    };
  } catch {
    return { ...DEFAULTS, best: {} };
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
 * 记录最高分：分数高者胜；同分则用时短者胜。
 * @returns {{score:number,timeMs:number}|null} 更新后的最佳成绩
 */
export function recordBest(best, difficulty, result) {
  const current = best[difficulty];
  const isBetter =
    !current ||
    result.score > current.score ||
    (result.score === current.score && result.timeMs < current.timeMs);
  if (!isBetter) return current || null;
  const next = { score: result.score, timeMs: result.timeMs };
  best[difficulty] = next;
  return next;
}

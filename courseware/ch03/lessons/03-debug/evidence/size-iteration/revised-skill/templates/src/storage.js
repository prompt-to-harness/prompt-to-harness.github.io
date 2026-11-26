/**
 * localStorage 封装：隐私模式下写入会抛异常，统一降级为「不持久化」。
 * 换新游戏时把 STORAGE_KEY 改成自己的命名空间（例如 'my-game.v1'），
 * 避免多款游戏共用同一份存档。
 */

const STORAGE_KEY = 'purple-game.v1'; // ← 改成你的游戏专属 key

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
 * 记录成绩：主指标小者胜；主指标相同则用次指标（用时）小者胜。
 * @param {object} best      当前最佳成绩表
 * @param {string} key       难度 / 模式 id
 * @param {object} result    {score:number, timeMs:number}
 */
export function recordBest(best, key, result) {
  const current = best[key];
  const isBetter =
    !current ||
    result.score < current.score ||
    (result.score === current.score && result.timeMs < current.timeMs);
  if (!isBetter) return current || null;
  const next = { score: result.score, timeMs: result.timeMs };
  best[key] = next;
  return next;
}

/** 本地存档：设置（音效）与最佳成绩。隐私模式下写入失败时降级为不持久化。 */

const STORAGE_KEY = 'dodge-collect.v1';

const DEFAULTS = {
  sound: true,
  best: { score: 0, gems: 0 },
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

const storageAvailable = hasStorage();

function loadSettings() {
  if (!storageAvailable) return { sound: DEFAULTS.sound, best: { ...DEFAULTS.best } };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { sound: DEFAULTS.sound, best: { ...DEFAULTS.best } };
    const parsed = JSON.parse(raw);
    const best = parsed.best && typeof parsed.best === 'object' ? parsed.best : {};
    return {
      sound: typeof parsed.sound === 'boolean' ? parsed.sound : DEFAULTS.sound,
      best: {
        score: Number(best.score) || 0,
        gems: Number(best.gems) || 0,
      },
    };
  } catch {
    return { sound: DEFAULTS.sound, best: { ...DEFAULTS.best } };
  }
}

function saveSettings(settings) {
  if (!storageAvailable) return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    return true;
  } catch {
    return false;
  }
}

/** 记录最佳成绩：分数高者胜；分数相同则收集数多者胜。 */
function recordBest(best, result) {
  const isBetter =
    result.score > best.score ||
    (result.score === best.score && result.gems > best.gems);
  if (!isBetter) return best;
  best.score = result.score;
  best.gems = result.gems;
  return best;
}

/** 难度配置：牌面数量 = rows * cols，必须为偶数。 */
export const DIFFICULTIES = [
  { id: 'easy', name: '简单', rows: 3, cols: 4 },
  { id: 'normal', name: '普通', rows: 4, cols: 4 },
  { id: 'hard', name: '困难', rows: 4, cols: 6 },
];

export const DEFAULT_DIFFICULTY = 'normal';

export function getDifficulty(id) {
  return DIFFICULTIES.find((d) => d.id === id) || getDifficulty(DEFAULT_DIFFICULTY);
}

export function pairCount(difficulty) {
  return (difficulty.rows * difficulty.cols) / 2;
}

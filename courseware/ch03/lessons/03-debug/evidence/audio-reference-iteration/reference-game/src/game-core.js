/**
 * 游戏核心逻辑（纯状态，不依赖 DOM）。
 * 因此可以在 Node 中直接跑单元测试，UI 层只负责把状态画出来。
 */

/** Fisher-Yates 洗牌（返回新数组，不改动入参）。 */
export function shuffle(items, random = Math.random) {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/**
 * 用一组图案构建牌堆：每个图案生成两张配对牌，然后洗牌。
 * @param {string[]} icons 图案列表，长度需为偶数
 * @returns {{id:string,pairId:number,icon:string}[]}
 */
export function buildDeck(icons, random = Math.random) {
  if (!Array.isArray(icons) || icons.length === 0) {
    throw new Error('icons 必须是非空数组');
  }
  if (icons.length % 2 !== 0) {
    // 注意：这里 icons 的数量 = 对数，奇数对数是合法的（例如 5 对 = 10 张牌）。
    // 每个图案生成两张牌，牌数恒为偶数。
  }
  const deck = [];
  icons.forEach((icon, pairId) => {
    deck.push({ id: pairId + '-a', pairId, icon });
    deck.push({ id: pairId + '-b', pairId, icon });
  });
  return shuffle(deck, random);
}

export const STATUS = {
  PLAYING: 'playing',
  WON: 'won',
};

/** 翻牌结果类型。 */
export const FLIP = {
  FIRST: 'first',
  MATCH: 'match',
  MISMATCH: 'mismatch',
  INVALID: 'invalid',
  ALREADY_OPEN: 'already-open',
  ALREADY_MATCHED: 'already-matched',
  LOCKED: 'locked',
  FINISHED: 'finished',
};

export class MemoryGame {
  /**
   * @param {object} options
   * @param {string[]} options.icons 图案列表
   * @param {() => number} [options.random] 随机源（测试可注入固定随机数）
   * @param {() => number} [options.now] 时间源（测试可注入固定时间）
   */
  constructor({ icons, random = Math.random, now = () => Date.now() }) {
    this.icons = icons.slice();
    this.random = random;
    this.now = now;
    this.reset();
  }

  /** 重开一局：重新洗牌、清空所有计数。 */
  reset() {
    this.cards = buildDeck(this.icons, this.random);
    this.matchedPairIds = new Set();
    this.openIndices = [];      // 当前正面朝上、尚未配对的牌下标
    this.moves = 0;             // 一次「翻开两张」记为一步
    this.status = STATUS.PLAYING;
    this.startedAt = null;      // 第一次翻牌时开始计时
    this.endedAt = null;        // 全部配对完成时停止计时
    this.locked = false;        // 等待不匹配的牌翻回期间锁定输入
    return this;
  }

  get totalPairs() {
    return this.icons.length;
  }

  get matchedPairs() {
    return this.matchedPairIds.size;
  }

  get isFinished() {
    return this.status === STATUS.WON;
  }

  /** 已进行的毫秒数。 */
  get elapsedMs() {
    if (this.startedAt === null) return 0;
    const end = this.endedAt === null ? this.now() : this.endedAt;
    return Math.max(0, end - this.startedAt);
  }

  /**
   * 翻开第 index 张牌。
   * @returns {{type:string, indices?:number[], card?:object, isWin?:boolean}}
   */
  flip(index) {
    if (this.isFinished) return { type: FLIP.FINISHED };
    if (this.locked) return { type: FLIP.LOCKED };
    if (!Number.isInteger(index) || index < 0 || index >= this.cards.length) {
      return { type: FLIP.INVALID };
    }
    if (this.matchedPairIds.has(this.cards[index].pairId)) {
      return { type: FLIP.ALREADY_MATCHED };
    }
    if (this.openIndices.includes(index)) {
      return { type: FLIP.ALREADY_OPEN };
    }

    if (this.startedAt === null) this.startedAt = this.now();
    this.openIndices.push(index);

    if (this.openIndices.length === 1) {
      return { type: FLIP.FIRST, indices: [index], card: this.cards[index] };
    }

    // 翻开第二张 —— 记一步
    this.moves += 1;
    const [a, b] = this.openIndices;
    const cardA = this.cards[a];
    const cardB = this.cards[b];

    if (cardA.pairId === cardB.pairId) {
      this.matchedPairIds.add(cardA.pairId);
      this.openIndices = [];
      const isWin = this.matchedPairIds.size === this.totalPairs;
      if (isWin) {
        this.status = STATUS.WON;
        this.endedAt = this.now();
      }
      return { type: FLIP.MATCH, indices: [a, b], card: cardA, isWin };
    }

    // 不匹配：锁定，等 UI 播完动画后再调用 dismissMismatch()
    this.locked = true;
    return { type: FLIP.MISMATCH, indices: [a, b], card: cardA };
  }

  /**
   * 不匹配的牌翻回背面，由 UI 在动画结束后调用。
   * @returns {number[]} 被翻回的牌下标
   */
  dismissMismatch() {
    const dismissed = this.openIndices.slice();
    this.openIndices = [];
    this.locked = false;
    return dismissed;
  }
}

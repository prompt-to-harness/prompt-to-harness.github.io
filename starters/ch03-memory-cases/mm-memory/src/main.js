/**
 * 入口：把 game-core 的状态渲染成 DOM，并把用户操作翻译成状态变更。
 */
import { DIFFICULTIES, getDifficulty, pairCount } from './difficulty.js';
import { ICONS } from './icons.js';
import { MemoryGame, FLIP } from './game-core.js';
import { loadSettings, saveSettings, recordBest } from './storage.js';
import { sfx, setSoundEnabled } from './sound.js';

const MISMATCH_DELAY_MS = 900;   // 不匹配时两张牌停留多久再翻回
const WIN_DELAY_MS = 420;       // 全部配对后延迟多久弹出结算
const CLOCK_INTERVAL_MS = 200;

const $ = (id) => document.getElementById(id);

const el = {
  board: $('board'),
  difficultyGroup: $('difficulty-group'),
  restartBtn: $('restart-btn'),
  soundBtn: $('sound-toggle'),
  statMoves: $('stat-moves'),
  statTime: $('stat-time'),
  statPairs: $('stat-pairs'),
  statBest: $('stat-best'),
  overlay: $('overlay'),
  overlayEmoji: $('overlay-emoji'),
  overlayTitle: $('overlay-title'),
  overlayText: $('overlay-text'),
  overlayAgain: $('overlay-again'),
  overlayClose: $('overlay-close'),
};

let settings = loadSettings();
let difficulty = getDifficulty(settings.difficulty);
let game = null;
let cardEls = [];
let mismatchTimer = null;
let clockTimer = null;

/* ------------------------------------------------------------------ */
/* 工具                                                                 */
/* ------------------------------------------------------------------ */

function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? h + ':' + mm + ':' + ss : m + ':' + ss;
}

function describeCard(index, state) {
  const n = index + 1;
  if (state === 'closed') return '第 ' + n + ' 张牌，未翻开';
  const icon = game.cards[index].icon;
  if (state === 'matched') return '第 ' + n + ' 张牌，图案 ' + icon + '，已配对';
  return '第 ' + n + ' 张牌，图案 ' + icon;
}

function setCardState(index, state) {
  const btn = cardEls[index];
  if (!btn) return;
  btn.setAttribute('aria-label', describeCard(index, state));
  // aria-pressed 表示「这张牌现在是正面朝上的」：翻开 / 已配对为 true，背面为 false
  btn.setAttribute('aria-pressed', String(state !== 'closed'));
}

/* ------------------------------------------------------------------ */
/* 渲染                                                                 */
/* ------------------------------------------------------------------ */

function buildDifficultyButtons() {
  el.difficultyGroup.textContent = '';
  DIFFICULTIES.forEach((d) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'segmented__btn';
    btn.textContent = d.name;
    btn.dataset.difficulty = d.id;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', String(d.id === difficulty.id));
    btn.addEventListener('click', () => selectDifficulty(d.id));
    el.difficultyGroup.appendChild(btn);
  });
}

function syncDifficultyButtons() {
  el.difficultyGroup.querySelectorAll('.segmented__btn').forEach((btn) => {
    btn.setAttribute('aria-checked', String(btn.dataset.difficulty === difficulty.id));
  });
}

function renderBoard() {
  el.board.textContent = '';
  el.board.style.setProperty('--cols', String(difficulty.cols));
  el.board.style.setProperty('--rows', String(difficulty.rows));
  cardEls = [];

  game.cards.forEach((card, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'card';
    btn.dataset.index = String(index);
    btn.setAttribute('aria-label', describeCard(index, 'closed'));
    btn.setAttribute('aria-pressed', 'false');

    const inner = document.createElement('span');
    inner.className = 'card__inner';

    const back = document.createElement('span');
    back.className = 'card__face card__back';
    back.setAttribute('aria-hidden', 'true');

    const front = document.createElement('span');
    front.className = 'card__face card__front';
    const icon = document.createElement('span');
    icon.className = 'card__icon';
    icon.textContent = card.icon;
    icon.setAttribute('aria-hidden', 'true');
    front.appendChild(icon);

    inner.appendChild(front);
    inner.appendChild(back);
    btn.appendChild(inner);
    el.board.appendChild(btn);
    cardEls.push(btn);
  });
}

function updateStats() {
  el.statMoves.textContent = String(game.moves);
  el.statTime.textContent = formatTime(game.elapsedMs);
  el.statPairs.textContent = game.matchedPairs + '/' + game.totalPairs;

  const best = settings.best[difficulty.id];
  el.statBest.textContent = best ? best.moves + ' 步 · ' + formatTime(best.timeMs) : '—';
}

function startClock() {
  stopClock();
  clockTimer = setInterval(() => {
    el.statTime.textContent = formatTime(game.elapsedMs);
  }, CLOCK_INTERVAL_MS);
}

function stopClock() {
  if (clockTimer !== null) {
    clearInterval(clockTimer);
    clockTimer = null;
  }
}

/* ------------------------------------------------------------------ */
/* 游戏流程                                                             */
/* ------------------------------------------------------------------ */

function startGame() {
  if (mismatchTimer !== null) {
    clearTimeout(mismatchTimer);
    mismatchTimer = null;
  }
  stopClock();
  if (!el.overlay.hidden) {
    el.overlay.hidden = true;
  }

  game = new MemoryGame({ icons: ICONS.slice(0, pairCount(difficulty)) });
  renderBoard();
  updateStats();
}

function selectDifficulty(id) {
  const next = getDifficulty(id);
  if (next.id === difficulty.id) return;
  difficulty = next;
  settings.difficulty = difficulty.id;
  saveSettings(settings);
  syncDifficultyButtons();
  startGame();
}

function handleFlip(index) {
  const result = game.flip(index);

  switch (result.type) {
    case FLIP.FIRST: {
      openCard(index);
      setCardState(index, 'open');
      sfx.flip();
      startClock();
      break;
    }

    case FLIP.MATCH: {
      result.indices.forEach((i) => {
        openCard(i);
        cardEls[i].classList.add('is-matched', 'just-matched');
        setCardState(i, 'matched');
        window.setTimeout(() => cardEls[i].classList.remove('just-matched'), 500);
      });
      sfx.match();
      updateStats();
      if (result.isWin) {
        stopClock();
        sfx.win();
        window.setTimeout(showWinOverlay, WIN_DELAY_MS);
      }
      break;
    }

    case FLIP.MISMATCH: {
      result.indices.forEach((i) => {
        openCard(i);
        cardEls[i].classList.add('is-wrong');
        setCardState(i, 'open');
      });
      sfx.mismatch();
      updateStats();
      mismatchTimer = window.setTimeout(() => {
        mismatchTimer = null;
        const dismissed = game.dismissMismatch();
        dismissed.forEach((i) => {
          cardEls[i].classList.remove('is-open', 'is-wrong');
          setCardState(i, 'closed');
        });
      }, MISMATCH_DELAY_MS);
      break;
    }

    default:
      // ALREADY_OPEN / ALREADY_MATCHED / LOCKED / INVALID / FINISHED —— 忽略
      break;
  }
}

function openCard(index) {
  cardEls[index].classList.add('is-open');
}

function showWinOverlay() {
  const result = { moves: game.moves, timeMs: game.elapsedMs };
  const previous = settings.best[difficulty.id];
  const best = recordBest(settings.best, difficulty.id, result);
  saveSettings(settings);
  updateStats();

  const isRecord = !previous || best.timeMs < previous.timeMs || best.moves < previous.moves;
  const perfect = game.moves === game.totalPairs;

  el.overlayEmoji.textContent = perfect ? '🏆' : '🎉';
  el.overlayTitle.textContent = perfect ? '完美通关！' : '全部配对完成！';
  el.overlayText.innerHTML =
    '本局用时 <strong>' + formatTime(result.timeMs) + '</strong>，共 <strong>' + result.moves +
    '</strong> 步。<br>' +
    (isRecord ? '🎖️ 刷新了「' + difficulty.name + '」难度的最佳成绩！' : '最佳成绩：' + best.moves + ' 步 · ' + formatTime(best.timeMs));

  el.overlay.hidden = false;
  el.overlayAgain.focus();
}

function hideOverlay() {
  el.overlay.hidden = true;
  // 焦点不能留在被隐藏的浮层里，交还给工具栏上的「重新开始」
  el.restartBtn.focus();
}

/* ------------------------------------------------------------------ */
/* 事件绑定                                                             */
/* ------------------------------------------------------------------ */

el.board.addEventListener('click', (event) => {
  const btn = event.target.closest('.card');
  if (!btn || !el.board.contains(btn)) return;
  const index = Number(btn.dataset.index);
  if (!Number.isInteger(index)) return;
  handleFlip(index);
});

// 方向键在牌面之间移动焦点；Enter / 空格由 button 原生处理
el.board.addEventListener('keydown', (event) => {
  const btn = event.target.closest('.card');
  if (!btn) return;
  const index = Number(btn.dataset.index);
  if (!Number.isInteger(index)) return;

  const cols = difficulty.cols;
  let next = null;
  switch (event.key) {
    case 'ArrowLeft':
      next = index % cols > 0 ? index - 1 : null;
      break;
    case 'ArrowRight':
      next = index % cols < cols - 1 ? index + 1 : null;
      break;
    case 'ArrowUp':
      next = index - cols;
      break;
    case 'ArrowDown':
      next = index + cols;
      break;
    default:
      return;
  }

  if (next !== null && next >= 0 && next < game.cards.length) {
    event.preventDefault();
    cardEls[next].focus();
  }
});

el.restartBtn.addEventListener('click', () => {
  startGame();
  const first = cardEls[0];
  if (first) first.focus();
});

el.overlayAgain.addEventListener('click', () => {
  startGame();
  const first = cardEls[0];
  if (first) first.focus();
});

el.overlayClose.addEventListener('click', hideOverlay);

el.soundBtn.addEventListener('click', () => {
  settings.sound = !settings.sound;
  setSoundEnabled(settings.sound);
  saveSettings(settings);
  syncSoundButton();
});

function syncSoundButton() {
  el.soundBtn.textContent = settings.sound ? '🔊 音效' : '🔇 静音';
  el.soundBtn.setAttribute('aria-pressed', String(settings.sound));
}

// 浮层打开时把焦点锁在面板内；Esc 关闭浮层
el.overlay.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    hideOverlay();
    return;
  }
  if (event.key !== 'Tab') return;
  const focusables = el.overlay.querySelectorAll('button');
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !el.overlay.hidden) {
    hideOverlay();
  }
});

/* ------------------------------------------------------------------ */
/* 启动                                                                 */
/* ------------------------------------------------------------------ */

setSoundEnabled(settings.sound);
syncSoundButton();
buildDifficultyButtons();
startGame();

// 方便自动化测试 / 调试：暴露一个只读句柄
window.memoryGame = {
  get state() {
    return {
      difficulty: difficulty.id,
      moves: game.moves,
      matchedPairs: game.matchedPairs,
      totalPairs: game.totalPairs,
      status: game.status,
      elapsedMs: game.elapsedMs,
      icons: game.cards.map((c) => c.icon),
      pairIds: game.cards.map((c) => c.pairId),
    };
  },
  flip: (i) => handleFlip(i),
};

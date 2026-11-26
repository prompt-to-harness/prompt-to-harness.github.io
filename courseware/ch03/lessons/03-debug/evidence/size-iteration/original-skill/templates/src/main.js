/**
 * 演示玩法（占位）—— 换成你自己的玩法时，整个文件可以删掉重写。
 * 这里演示：shell 怎么驱动 HUD，场地怎么渲染，怎么弹结算。
 *
 * 演示内容：翻牌配对（简化版），用于验证模板可用。
 */

import { shell } from './shell.js';

const ICONS = ['🍎', '🐱', '🚗', '🌈', '🎸', '🍕', '⚽', '🚀'];
const COLS = 4;
const ROWS = 4;

const board = document.getElementById('board');
board.style.setProperty('--cols', String(COLS));
board.style.setProperty('--rows', String(ROWS));

let cards = [];
let open = [];
let matched = 0;
let moves = 0;
let locked = false;

function shuffle(items) {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function build() {
  const deck = [];
  ICONS.forEach((icon, pairId) => {
    deck.push({ icon, pairId });
    deck.push({ icon, pairId });
  });
  return shuffle(deck);
}

function render() {
  board.textContent = '';
  cards = build();
  open = [];
  matched = 0;
  moves = 0;
  locked = false;
  shell.resetTimer();
  shell.setStat('moves', '0');
  shell.setStat('progress', '0/' + ICONS.length);

  cards.forEach((card, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'card';
    btn.dataset.index = String(index);
    btn.setAttribute('aria-label', '第 ' + (index + 1) + ' 张牌，未翻开');

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
    board.appendChild(btn);
  });
}

function reveal(index) {
  const btn = board.children[index];
  btn.classList.add('is-open');
  btn.setAttribute('aria-label', '第 ' + (index + 1) + ' 张牌，图案 ' + cards[index].icon);
}

function cover(index) {
  const btn = board.children[index];
  btn.classList.remove('is-open');
  btn.setAttribute('aria-label', '第 ' + (index + 1) + ' 张牌，未翻开');
}

function onPick(index) {
  if (locked) return;
  const btn = board.children[index];
  if (!btn || btn.classList.contains('is-matched')) return;
  if (open.includes(index)) return;

  reveal(index);
  shell.sfx.flip();
  if (open.length === 0) {
    shell.startTimer();
    open.push(index);
    return;
  }

  moves += 1;
  shell.setStat('moves', String(moves));
  const a = open[0];
  open = [];

  if (cards[a].pairId === cards[index].pairId) {
    [a, index].forEach((i) => {
      board.children[i].classList.add('is-matched', 'just-matched');
      setTimeout(() => board.children[i].classList.remove('just-matched'), 500);
    });
    matched += 1;
    shell.setStat('progress', matched + '/' + ICONS.length);
    shell.sfx.match();

    if (matched === ICONS.length) {
      shell.stopTimer();
      shell.sfx.win();
      const { best, isRecord } = shell.recordResult(moves, shell.elapsedMs());
      setTimeout(() => {
        shell.showResult({
          emoji: '🎉',
          title: '全部配对完成！',
          lines: [
            '本局用时 <strong>' + shell.formatTime(shell.elapsedMs()) + '</strong>，共 <strong>' + moves + '</strong> 步。',
            isRecord
              ? '🎖️ 刷新了最佳成绩！'
              : '最佳成绩：' + best.score + ' 步 · ' + shell.formatTime(best.timeMs),
          ],
          primary: { label: '再玩一局', onClick: () => shell.newGame() },
          secondary: { label: '查看牌面', onClick: () => shell.hideResult() },
        });
      }, 420);
    }
    return;
  }

  locked = true;
  shell.sfx.mismatch();
  [a, index].forEach((i) => board.children[i].classList.add('is-wrong'));
  setTimeout(() => {
    [a, index].forEach((i) => {
      board.children[i].classList.remove('is-wrong');
      cover(i);
    });
    locked = false;
  }, 900);
}

board.addEventListener('click', (event) => {
  const btn = event.target.closest('.card');
  if (!btn || !board.contains(btn)) return;
  onPick(Number(btn.dataset.index));
});

shell.init({
  modes: [
    { id: 'easy', name: '简单' },
    { id: 'normal', name: '普通' },
    { id: 'hard', name: '困难' },
  ],
  modeLabel: '难度',
  onRestart: () => render(),
  onModeChange: () => render(),
});

render();

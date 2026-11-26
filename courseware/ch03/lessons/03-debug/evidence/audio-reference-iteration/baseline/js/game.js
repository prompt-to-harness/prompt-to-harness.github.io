/* 60 秒躲避与收集 —— 原生 Canvas + 紫色黄昏主题 */
/*
  说明：整个脚本包在 IIFE 里，避免与 purple-ui-kit.js 在全局作用域的
  函数声明（renderStats / updateStats / ResultOverlay …）发生重复声明冲突。
*/
(function () {
/* 经典脚本形式加载紫色 UI 组件（无需本地服务器） */
const { renderStats, updateStats, formatDuration, ResultOverlay } = window.PurpleUI;

const W = 960, H = 600;
const DURATION = 60;      // 一局 60 秒
const ITEM_LIFE = 9;      // 光球存在 9 秒
const MAX_LIVES = 3;
const PLAYER_R = 15;
const PLAYER_SPEED = 305;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const field = document.querySelector('.pg-field');
const fx = document.getElementById('fx');

/* 主题色：从 CSS 变量读取，避免写死颜色 */
const css = getComputedStyle(document.documentElement);
const C = (name, fallback) => (css.getPropertyValue(name) || fallback).trim();
const COL = {
  accent: C('--pg-accent', '#7c8cff'),
  accent2: C('--pg-accent-2', '#9a6bff'),
  accent3: C('--pg-accent-3', '#56d6c6'),
  good: C('--pg-good', '#4ade80'),
  bad: C('--pg-bad', '#fb7185'),
};

/* ------------------------------------------------------------------ HUD */
const stats = renderStats(document.getElementById('hud'), [
  { key: 'time', label: '剩余时间', value: formatDuration(DURATION * 1000), state: 'accent' },
  { key: 'score', label: '得分', value: 0 },
  { key: 'hp', label: '生命', value: MAX_LIVES, state: 'good' },
]);

/* ---------------------------------------------------------------- 状态 */
let state = 'rules';
let timeLeft = DURATION;
let score = 0;
let lives = MAX_LIVES;
let player;
let obstacles = [];
let items = [];
let invuln = 0;
let spawnItemTimer = 1.2;
let spawnObstacleTimer = 0.9;
let elapsed = 0;
const keys = new Set();

const overlay = new ResultOverlay(document.getElementById('overlay'));
const rulesEl = document.getElementById('rules');

function resetGame() {
  timeLeft = DURATION;
  score = 0;
  lives = MAX_LIVES;
  elapsed = 0;
  invuln = 0;
  spawnItemTimer = 1.0;
  spawnObstacleTimer = 0.8;
  obstacles = [];
  items = [];
  keys.clear();
  player = { x: W / 2, y: H / 2, r: PLAYER_R };
  updateStats(stats, {
    time: { value: formatDuration(DURATION * 1000), state: 'accent' },
    score: 0,
    hp: { value: MAX_LIVES, state: 'good' },
  });
}

/* --------------------------------------------------------------- 生成器 */
function rand(min, max) { return min + Math.random() * (max - min); }

function spawnObstacle() {
  const speed = rand(85, 95 + Math.min(85, elapsed * 2.2));
  const size = rand(16, 27);
  const x = rand(30, W - 30);
  const y = Math.random() < 0.5 ? -size : H + size;
  const vy = y < 0 ? speed : -speed;
  obstacles.push({ x, y, vx: rand(-40, 40), vy, r: size * 0.72, size, rot: rand(0, Math.PI * 2), spin: rand(-1.4, 1.4) });
}

function spawnItem() {
  if (items.length >= 5) return;
  items.push({
    x: rand(40, W - 40),
    y: rand(40, H - 40),
    r: 15,
    life: ITEM_LIFE,
    max: ITEM_LIFE,
    phase: rand(0, Math.PI * 2),
  });
}

/* --------------------------------------------------------------- 输入 */
const MOVE_KEYS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D']);
const norm = (k) => (k.length === 1 ? k.toLowerCase() : k);

window.addEventListener('keydown', (e) => {
  if (state !== 'playing') return;
  if (MOVE_KEYS.has(e.key)) {
    e.preventDefault();
    keys.add(norm(e.key));
  }
});

window.addEventListener('keyup', (e) => {
  if (MOVE_KEYS.has(e.key)) keys.delete(norm(e.key));
});

window.addEventListener('blur', () => keys.clear());

/* --------------------------------------------------------------- 反馈 */
function flash(kind) {
  const el = document.createElement('div');
  el.className = 'pg-fx__flash pg-fx__flash--' + kind;
  fx.appendChild(el);
  setTimeout(() => el.remove(), 450);
}

function pop(text, x, y, kind) {
  const el = document.createElement('div');
  el.className = 'pg-fx__pop pg-fx__pop--' + kind;
  el.textContent = text;
  el.style.left = (x / W) * 100 + '%';
  el.style.top = (y / H) * 100 + '%';
  fx.appendChild(el);
  setTimeout(() => el.remove(), 820);
}

/* -------------------------------------------------------------- 结算 */
function endGame(reason) {
  state = 'over';
  keys.clear();
  const survived = Math.round(DURATION - timeLeft);
  const won = reason === 'time';
  overlay.open({
    emoji: won ? '🏆' : '💥',
    title: won ? '撑满 60 秒！' : '生命耗尽',
    text: won
      ? '你在 60 秒里坚持到最后，最终得分 <strong>' + score + '</strong>。'
      : '你坚持了 <strong>' + survived + ' 秒</strong>，撞上了太多尖刺。',
    rows: [
      { label: '得分', value: String(score), state: 'accent' },
      { label: '收集数量', value: String(Math.round(score / 10)), state: 'good' },
      { label: '存活时间', value: survived + ' 秒' },
      { label: '剩余生命', value: lives + ' / ' + MAX_LIVES, state: lives > 0 ? 'good' : 'bad' },
    ],
    actions: [{ label: '再玩一局', primary: true, onClick: () => { overlay.close(); startGame(); } }],
    dismissible: false,
  });
}

function startGame() {
  resetGame();
  state = 'playing';
  last = performance.now();
  canvas.focus({ preventScroll: true });
}

/* ------------------------------------------------------------ 更新逻辑 */
function update(dt) {
  elapsed += dt;
  timeLeft = Math.max(0, timeLeft - dt);
  if (timeLeft <= 0) {
    updateStats(stats, { time: '0:00' });
    endGame('time');
    return;
  }

  /* 玩家移动 */
  let dx = 0, dy = 0;
  if (keys.has('ArrowLeft') || keys.has('a')) dx -= 1;
  if (keys.has('ArrowRight') || keys.has('d')) dx += 1;
  if (keys.has('ArrowUp') || keys.has('w')) dy -= 1;
  if (keys.has('ArrowDown') || keys.has('s')) dy += 1;
  const len = Math.hypot(dx, dy) || 1;
  player.x += (dx / len) * PLAYER_SPEED * dt;
  player.y += (dy / len) * PLAYER_SPEED * dt;
  player.x = Math.max(player.r, Math.min(W - player.r, player.x));
  player.y = Math.max(player.r, Math.min(H - player.r, player.y));

  if (invuln > 0) invuln -= dt;

  /* 生成 */
  spawnObstacleTimer -= dt;
  if (spawnObstacleTimer <= 0) {
    spawnObstacle();
    spawnObstacleTimer = Math.max(0.42, 1.15 - elapsed * 0.009);
  }
  spawnItemTimer -= dt;
  if (spawnItemTimer <= 0) {
    spawnItem();
    spawnItemTimer = 1.5;
  }

  /* 障碍移动与碰撞 */
  for (const o of obstacles) {
    o.x += o.vx * dt;
    o.y += o.vy * dt;
    o.rot += o.spin * dt;
  }
  obstacles = obstacles.filter((o) => o.y > -80 && o.y < H + 80 && o.x > -80 && o.x < W + 80);

  for (const o of obstacles) {
    if (invuln > 0) break;
    if (Math.hypot(o.x - player.x, o.y - player.y) < o.r + player.r * 0.8) {
      lives -= 1;
      invuln = 1.2;
      o.y = -200;
      flash('bad');
      pop('-1 生命', player.x, player.y, 'bad');
      field.classList.remove('is-hurt');
      void field.offsetWidth;
      field.classList.add('is-hurt');
      updateStats(stats, { hp: { value: lives, state: lives > 0 ? 'warn' : 'bad' } });
      if (lives <= 0) { endGame('hp'); return; }
    }
  }

  /* 光球 */
  for (const it of items) {
    it.life -= dt;
    it.phase += dt * 2.2;
    if (invuln <= 0 && Math.hypot(it.x - player.x, it.y - player.y) < it.r + player.r) {
      it.life = -1;
      score += 10;
      flash('good');
      pop('+10', it.x, it.y, 'good');
      updateStats(stats, { score });
    }
  }
  items = items.filter((it) => it.life > 0);

  /* HUD */
  updateStats(stats, {
    time: { value: formatDuration(Math.ceil(timeLeft) * 1000), state: timeLeft <= 10 ? 'warn' : 'accent' },
  });
}

/* ---------------------------------------------------------------- 渲染 */
function drawBackground() {
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, 'rgba(42,49,112,0.55)');
  g.addColorStop(1, 'rgba(30,24,60,0.55)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 48) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += 48) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
}

function drawObstacle(o) {
  ctx.save();
  ctx.translate(o.x, o.y);
  ctx.rotate(o.rot);
  ctx.fillStyle = COL.bad;
  ctx.shadowColor = COL.bad;
  ctx.shadowBlur = 14;
  const s = o.size;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.86, s * 0.7);
  ctx.lineTo(-s * 0.86, s * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.5);
  ctx.lineTo(s * 0.3, s * 0.1);
  ctx.lineTo(-s * 0.3, s * 0.1);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawItem(it) {
  const ratio = Math.max(0, it.life / it.max);
  const pulse = 1 + Math.sin(it.phase) * 0.07;
  ctx.save();
  ctx.translate(it.x, it.y);
  ctx.scale(pulse, pulse);

  /* 剩余存在时间进度环 */
  ctx.lineWidth = 3.5;
  ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  ctx.beginPath();
  ctx.arc(0, 0, it.r + 8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = COL.accent3;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(0, 0, it.r + 8, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ratio);
  ctx.stroke();

  ctx.fillStyle = COL.accent3;
  ctx.shadowColor = COL.accent3;
  ctx.shadowBlur = 18;
  const r = it.r;
  ctx.beginPath();
  ctx.moveTo(0, -r); ctx.lineTo(r, 0); ctx.lineTo(0, r); ctx.lineTo(-r, 0);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPlayer() {
  const blink = invuln > 0 && Math.floor(invuln * 12) % 2 === 0;
  ctx.save();
  ctx.globalAlpha = blink ? 0.35 : 1;
  const g = ctx.createLinearGradient(player.x - player.r, player.y - player.r, player.x + player.r, player.y + player.r);
  g.addColorStop(0, COL.accent);
  g.addColorStop(1, COL.accent2);
  ctx.fillStyle = g;
  ctx.shadowColor = COL.accent;
  ctx.shadowBlur = 22;
  const r = player.r, k = r * 0.34;
  ctx.beginPath();
  ctx.moveTo(player.x - r + k, player.y - r);
  ctx.arc(player.x - r + k, player.y - r, k, Math.PI, Math.PI * 1.5);
  ctx.arc(player.x + r - k, player.y - r, k, Math.PI * 1.5, 0);
  ctx.arc(player.x + r - k, player.y + r, k, 0, Math.PI * 0.5);
  ctx.arc(player.x - r + k, player.y + r, k, Math.PI * 0.5, Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  drawBackground();
  for (const it of items) drawItem(it);
  for (const o of obstacles) drawObstacle(o);
  if (state === 'playing' || state === 'over') drawPlayer();
}

/* ------------------------------------------------------------- 主循环 */
let last = performance.now();

function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (state === 'playing') update(dt);
  draw();
  requestAnimationFrame(frame);
}

/* --------------------------------------------------------------- 启动 */
resetGame();
draw();
requestAnimationFrame(frame);

const btnStart = document.getElementById('btn-start');

function begin() {
  rulesEl.hidden = true;
  startGame();
}

btnStart.addEventListener('click', begin);

document.addEventListener('keydown', (e) => {
  if (state === 'rules' && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    begin();
  }
});
})();

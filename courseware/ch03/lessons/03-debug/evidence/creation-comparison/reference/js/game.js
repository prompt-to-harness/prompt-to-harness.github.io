/* ==========================================================================
   game.js — 「60 秒躲避与收集」
   原生 HTML/CSS/JS，无依赖；样式与浮层行为复用 purple-game-ui Skill 资产。
   ========================================================================== */

import { renderStats, updateStats, ResultOverlay, formatDuration } from './purple-ui-kit.js';

/* ---------------------------------------------------------------- 常量 */
const W = 720;            // 场地逻辑宽
const H = 480;            // 场地逻辑高
const DURATION = 60;      // 一局 60 秒
const MAX_LIVES = 3;
const PLAYER_R = 13;
const GEM_R = 11;
const PLAYER_SPEED = 250;
const INVULN = 1.4;       // 受击后的无敌时间（秒）
const GEM_TTL = 9;        // 灵晶存在时间（秒）
const GEM_EVERY = 1.1;    // 灵晶生成间隔（秒）
const MAX_GEMS = 5;

const STATE = { INTRO: 'intro', PLAYING: 'playing', OVER: 'over' };

/* ---------------------------------------------------------------- DOM */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const hudEl = document.getElementById('hud');
const flashEl = document.getElementById('flash');
const gameEl = document.querySelector('.pg-game');
const overlay = new ResultOverlay(document.getElementById('overlay'));

/* 高分屏适配：逻辑坐标系固定为 W × H */
const DPR = Math.min(2, window.devicePixelRatio || 1);
canvas.width = W * DPR;
canvas.height = H * DPR;
ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

/* 主题令牌：从 CSS 变量读取，避免在脚本里写死颜色 */
const tokens = (() => {
  const cs = getComputedStyle(document.documentElement);
  const get = (name, fallback) => (cs.getPropertyValue(name) || fallback).trim();
  return {
    accent: get('--pg-accent', '#7c8cff'),
    accent2: get('--pg-accent-2', '#9a6bff'),
    accent3: get('--pg-accent-3', '#56d6c6'),
    good: get('--pg-good', '#4ade80'),
    bad: get('--pg-bad', '#fb7185'),
    warn: get('--pg-warn', '#fbbf24'),
    text: get('--pg-text', '#eef1ff'),
    dim: get('--pg-text-dim', '#a3abcf'),
    panel: get('--pg-panel', 'rgba(255,255,255,.07)'),
    border: get('--pg-border', 'rgba(255,255,255,.14)'),
    bg0: get('--pg-bg-0', '#0c1022'),
    bg1: get('--pg-bg-1', '#171e3d'),
  };
})();

/* ------------------------------------------------------------ 游戏状态 */
let state = STATE.INTRO;
let timeLeft = DURATION;
let score = 0;
let lives = MAX_LIVES;
let gemsCollected = 0;
let invuln = 0;
let gemTimer = 0;
let shake = 0;
let last = performance.now();

const player = { x: W / 2, y: H / 2, r: PLAYER_R, vx: 0, vy: 0 };
let hazards = [];
let gems = [];
const keys = new Set();
let pointerTarget = null;

/* HUD：游玩时只显示时间 / 得分 / 生命 */
const stats = renderStats(hudEl, [
  { key: 'time', label: '时间', value: formatDuration(DURATION * 1000), state: 'accent' },
  { key: 'score', label: '得分', value: 0 },
  { key: 'lives', label: '生命', value: MAX_LIVES, state: 'good' },
]);

function syncHud() {
  updateStats(stats, {
    time: {
      value: formatDuration(timeLeft * 1000),
      state: timeLeft <= 10 ? 'warn' : 'accent',
    },
    score: score,
    lives: {
      value: lives,
      state: lives >= MAX_LIVES ? 'good' : lives === 1 ? 'bad' : 'warn',
    },
  });
}

/* ------------------------------------------------------------ 实体生成 */
function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function makeHazard() {
  const r = randomBetween(14, 22);
  const speed = randomBetween(26, 60);
  const angle = Math.random() * Math.PI * 2;
  let x = randomBetween(r + 6, W - r - 6);
  let y = randomBetween(r + 6, H - r - 6);
  /* 出生点离玩家起点远一些，避免开局就被撞 */
  if (Math.hypot(x - W / 2, y - H / 2) < 110) {
    x = clamp(x + (x < W / 2 ? -140 : 140), r + 6, W - r - 6);
    y = clamp(y + (y < H / 2 ? -120 : 120), r + 6, H - r - 6);
  }
  return {
    x,
    y,
    r,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    spin: randomBetween(-1.2, 1.2),
    rot: Math.random() * Math.PI * 2,
  };
}

function makeGem() {
  return {
    x: randomBetween(GEM_R + 14, W - GEM_R - 14),
    y: randomBetween(GEM_R + 14, H - GEM_R - 14),
    r: GEM_R,
    ttl: GEM_TTL,
    born: performance.now(),
  };
}

function resetWorld() {
  player.x = W / 2;
  player.y = H / 2;
  player.vx = 0;
  player.vy = 0;
  timeLeft = DURATION;
  score = 0;
  lives = MAX_LIVES;
  gemsCollected = 0;
  invuln = 0;
  gemTimer = 0;
  shake = 0;
  pointerTarget = null;
  hazards = Array.from({ length: 7 }, makeHazard);
  gems = [];
  syncHud();
}

/* ---------------------------------------------------------------- 流程 */
function startGame() {
  resetWorld();
  state = STATE.PLAYING;
  gameEl.classList.add('is-playing');
  overlay.close();
  syncHud();
}

function endGame(reason) {
  state = STATE.OVER;
  gameEl.classList.remove('is-playing');
  const survived = reason === 'time';
  const rows = [
    { label: '最终得分', value: String(score), state: 'accent' },
    { label: '收集灵晶', value: String(gemsCollected) },
    { label: '存活时间', value: formatDuration((DURATION - timeLeft) * 1000) },
  ];
  if (survived) {
    rows.push({ label: '剩余生命', value: String(lives), state: lives > 0 ? 'good' : 'bad' });
  } else {
    rows.push({ label: '生命', value: '已耗尽', state: 'bad' });
  }
  overlay.open({
    emoji: survived ? '🏆' : '💥',
    title: survived ? '时间到，挑战完成！' : '生命耗尽',
    text: survived
      ? '你在 60 秒内撑住了全部障碍，一共收集了 ' + gemsCollected + ' 颗灵晶。'
      : '再来一次，这次多注意那些漂移的尖刺障碍。',
    rows,
    actions: [{ label: '重开一局', primary: true, onClick: startGame }],
  });
}

/* --------------------------------------------------------------- 更新 */
function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

function update(dt) {
  timeLeft = Math.max(0, timeLeft - dt);
  if (invuln > 0) invuln -= dt;
  if (shake > 0) shake = Math.max(0, shake - dt * 3);

  /* 玩家移动：键盘优先，其次指针拖拽 */
  let dx = 0;
  let dy = 0;
  if (keys.has('arrowleft') || keys.has('a')) dx -= 1;
  if (keys.has('arrowright') || keys.has('d')) dx += 1;
  if (keys.has('arrowup') || keys.has('w')) dy -= 1;
  if (keys.has('arrowdown') || keys.has('s')) dy += 1;

  if (dx || dy) {
    const len = Math.hypot(dx, dy) || 1;
    player.vx = (dx / len) * PLAYER_SPEED;
    player.vy = (dy / len) * PLAYER_SPEED;
    pointerTarget = null;
  } else if (pointerTarget) {
    const tx = pointerTarget.x - player.x;
    const ty = pointerTarget.y - player.y;
    const dist = Math.hypot(tx, ty);
    if (dist > 3) {
      const speed = Math.min(PLAYER_SPEED, dist * 6);
      player.vx = (tx / dist) * speed;
      player.vy = (ty / dist) * speed;
    } else {
      player.vx = 0;
      player.vy = 0;
    }
  } else {
    player.vx = 0;
    player.vy = 0;
  }

  player.x = clamp(player.x + player.vx * dt, player.r + 4, W - player.r - 4);
  player.y = clamp(player.y + player.vy * dt, player.r + 4, H - player.r - 4);

  /* 障碍：随时间加速，撞墙反弹 */
  const ramp = 1 + ((DURATION - timeLeft) / DURATION) * 0.8;
  for (const h of hazards) {
    h.x += h.vx * ramp * dt;
    h.y += h.vy * ramp * dt;
    h.rot += h.spin * dt;
    if (h.x < h.r) { h.x = h.r; h.vx = Math.abs(h.vx); }
    if (h.x > W - h.r) { h.x = W - h.r; h.vx = -Math.abs(h.vx); }
    if (h.y < h.r) { h.y = h.r; h.vy = Math.abs(h.vy); }
    if (h.y > H - h.r) { h.y = H - h.r; h.vy = -Math.abs(h.vy); }
  }

  /* 灵晶生成 */
  gemTimer -= dt;
  if (gemTimer <= 0) {
    gemTimer = GEM_EVERY;
    if (gems.length < MAX_GEMS) gems.push(makeGem());
  }

  /* 灵晶计时与拾取 */
  for (let i = gems.length - 1; i >= 0; i--) {
    const g = gems[i];
    g.ttl -= dt;
    if (g.ttl <= 0) {
      gems.splice(i, 1);
      continue;
    }
    if (Math.hypot(g.x - player.x, g.y - player.y) < g.r + player.r) {
      gems.splice(i, 1);
      score += 10;
      gemsCollected += 1;
      flash('is-pick');
    }
  }

  /* 障碍碰撞：扣生命 + 无敌帧 */
  if (invuln <= 0) {
    for (const h of hazards) {
      const dxh = h.x - player.x;
      const dyh = h.y - player.y;
      const dist = Math.hypot(dxh, dyh);
      if (dist < h.r + player.r) {
        lives -= 1;
        invuln = INVULN;
        shake = 1;
        flash('is-hit');
        const nx = dist > 0 ? dxh / dist : 1;
        const ny = dist > 0 ? dyh / dist : 0;
        h.x = clamp(h.x + nx * (h.r + player.r + 4), h.r, W - h.r);
        h.y = clamp(h.y + ny * (h.r + player.r + 4), h.r, H - h.r);
        h.vx = -h.vx * 0.9 + nx * 40;
        h.vy = -h.vy * 0.9 + ny * 40;
        break;
      }
    }
  }

  syncHud();

  if (lives <= 0) endGame('lives');
  else if (timeLeft <= 0) endGame('time');
}

/* --------------------------------------------------------------- 绘制 */
function draw(now) {
  const sx = shake > 0 ? (Math.random() - 0.5) * 10 * shake : 0;
  const sy = shake > 0 ? (Math.random() - 0.5) * 10 * shake : 0;

  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.translate(sx, sy);

  /* 场地网格 */
  ctx.strokeStyle = tokens.border;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.35;
  for (let x = 0; x <= W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y <= H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  /* 灵晶：菱形 + 倒计时环 */
  for (const g of gems) {
    const pulse = 1 + Math.sin(now / 220 + g.born) * 0.08;
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = tokens.accent3;
    ctx.globalAlpha = 0.9;
    const s = g.r * pulse;
    ctx.fillRect(-s / 2, -s / 2, s, s);
    ctx.globalAlpha = 0.55;
    ctx.strokeStyle = tokens.text;
    ctx.strokeRect(-s / 2, -s / 2, s, s);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = tokens.accent3;
    ctx.globalAlpha = 0.75;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r + 6, -Math.PI / 2, -Math.PI / 2 + (g.ttl / GEM_TTL) * Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  /* 障碍：带尖刺的方块 */
  for (const h of hazards) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate(h.rot);
    const spikes = 6;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const a = (Math.PI * 2 * i) / (spikes * 2);
      const rad = i % 2 === 0 ? h.r : h.r * 0.72;
      const px = Math.cos(a) * rad;
      const py = Math.sin(a) * rad;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = tokens.bad;
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = tokens.text;
    ctx.stroke();
    ctx.restore();
  }

  /* 玩家 */
  ctx.save();
  ctx.translate(player.x, player.y);
  const blinking = invuln > 0 && Math.floor(now / 90) % 2 === 0;
  ctx.globalAlpha = blinking ? 0.35 : 1;
  ctx.beginPath();
  ctx.arc(0, 0, player.r, 0, Math.PI * 2);
  ctx.fillStyle = tokens.accent;
  ctx.fill();
  ctx.globalAlpha = blinking ? 0.35 : 0.9;
  ctx.strokeStyle = tokens.text;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.globalAlpha = blinking ? 0.35 : 1;
  ctx.fillStyle = tokens.text;
  ctx.beginPath();
  ctx.arc(player.vx * 0.02, player.vy * 0.02, 4.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

/* --------------------------------------------------------------- 特效 */
let flashTimer = 0;
function flash(cls) {
  flashEl.classList.remove('is-hit', 'is-pick');
  void flashEl.offsetWidth;
  flashEl.classList.add(cls);
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => flashEl.classList.remove('is-hit', 'is-pick'), 160);
}

/* ------------------------------------------------------------- 主循环 */
function loop(now) {
  const dt = Math.max(0, Math.min(0.05, (now - last) / 1000));
  last = now;
  if (state === STATE.PLAYING) update(dt);
  draw(now);
  requestAnimationFrame(loop);
}

/* --------------------------------------------------------------- 输入 */
const MOVE_KEYS = new Set([
  'arrowleft', 'arrowright', 'arrowup', 'arrowdown',
  'w', 'a', 's', 'd',
]);

window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (MOVE_KEYS.has(key)) {
    e.preventDefault();
    keys.add(key);
  }
  if (state === STATE.INTRO && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    startGame();
  }
});

window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
window.addEventListener('blur', () => keys.clear());

/* 指针拖拽（触屏 / 鼠标备用操作） */
function pointerPos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((e.clientX - rect.left) / rect.width) * W,
    y: ((e.clientY - rect.top) / rect.height) * H,
  };
}
canvas.addEventListener('pointerdown', (e) => {
  if (state !== STATE.PLAYING) return;
  pointerTarget = pointerPos(e);
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (state !== STATE.PLAYING || !pointerTarget) return;
  pointerTarget = pointerPos(e);
});
canvas.addEventListener('pointerup', () => { pointerTarget = null; });
canvas.addEventListener('pointercancel', () => { pointerTarget = null; });

/* ---------------------------------------------------------------- 启动 */
resetWorld();
syncHud();
if (location.hash === '#play') {
  /* 调试用：#play 直接开局 */
  startGame();
} else {
  overlay.open({
    emoji: '🎮',
    title: '紫夜闪避',
    text: '在 60 秒内躲开漂浮的尖刺障碍，收集发光的灵晶。每次碰撞损失 1 点生命，共 3 点。',
    rows: [
      { label: '移动', value: '方向键 / WASD' },
      { label: '时长', value: '60 秒' },
      { label: '生命', value: '3' },
    ],
    actions: [{ label: '开始游戏', primary: true, onClick: startGame }],
  });
}
requestAnimationFrame(loop);

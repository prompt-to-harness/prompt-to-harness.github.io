/**
 * 60 秒躲避与收集 —— 玩法脚本。
 * 方向键 / WASD 移动，躲避紫色障碍，收集宝石；撞到障碍扣 1 命，
 * 时间耗尽或生命归零时结算，结算浮层里可以重开。
 */

import { shell } from './shell.js';
import { recordBestScore } from './storage.js';

const W = 640;
const H = 480;
const ROUND_TIME = 60;
const START_LIVES = 3;
const PLAYER_R = 13;
const PLAYER_SPEED = 250;
const INVULN_MS = 1400;
const GEM_SCORE = 10;

const canvas = document.getElementById('arena');
const ctx = canvas.getContext('2d');
const tipEl = document.getElementById('board-tip');

/* 高清屏适配：逻辑坐标固定 640x480，按 DPR 放大画布 */
const dpr = Math.min(window.devicePixelRatio || 1, 2);
canvas.width = W * dpr;
canvas.height = H * dpr;
ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

const keys = new Set();
const KEY_MAP = {
  ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down',
  a: 'left', A: 'left', d: 'right', D: 'right', w: 'up', W: 'up', s: 'down', S: 'down',
};

const state = {
  phase: 'ready', // ready | playing | over
  timeLeft: ROUND_TIME,
  score: 0,
  lives: START_LIVES,
  player: { x: W / 2, y: H / 2, vx: 0, vy: 0, invuln: 0 },
  obstacles: [],
  gems: [],
  nextObstacleAt: 0,
  nextGemAt: 0,
  elapsed: 0,
};

const rand = (min, max) => min + Math.random() * (max - min);
const hearts = (n) => ('\u2665'.repeat(Math.max(0, n)) || '\u2014');

/* ------------------------------------------------------------------ */
/* 生成                                                                 */
/* ------------------------------------------------------------------ */

function spawnObstacle() {
  const r = rand(16, 24);
  const angle = rand(0, Math.PI * 2);
  const speed = rand(65, 105);
  let x = rand(r, W - r);
  let y = rand(r, H - r);
  const p = state.player;
  if (Math.hypot(x - p.x, y - p.y) < 120) { x = W - x; y = H - y; }
  state.obstacles.push({
    x, y, r,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    spin: rand(-2, 2),
    rot: rand(0, Math.PI * 2),
  });
}

function spawnGem() {
  const p = state.player;
  let x = rand(24, W - 24);
  let y = rand(24, H - 24);
  if (Math.hypot(x - p.x, y - p.y) < 60) { x = W - x; y = H - y; }
  state.gems.push({ x, y, r: 11, phase: rand(0, Math.PI * 2), value: GEM_SCORE });
}

function resetRound() {
  state.phase = 'ready';
  state.timeLeft = ROUND_TIME;
  state.score = 0;
  state.lives = START_LIVES;
  state.player = { x: W / 2, y: H / 2, vx: 0, vy: 0, invuln: 0 };
  state.obstacles = [];
  state.gems = [];
  state.nextObstacleAt = 0;
  state.nextGemAt = 0;
  state.elapsed = 0;
  for (let i = 0; i < 3; i++) spawnObstacle();
  for (let i = 0; i < 2; i++) spawnGem();
  shell.setStat('time', String(ROUND_TIME));
  shell.setStat('score', '0');
  shell.setStat('lives', hearts(START_LIVES));
  shell.setStatus('等待开始');
  if (tipEl) tipEl.hidden = false;
}

/* ------------------------------------------------------------------ */
/* 更新                                                                 */
/* ------------------------------------------------------------------ */

function update(dt) {
  if (state.phase !== 'playing') return;

  state.elapsed += dt;
  state.timeLeft = Math.max(0, ROUND_TIME - state.elapsed);

  const p = state.player;
  let dx = 0;
  let dy = 0;
  if (keys.has('left')) dx -= 1;
  if (keys.has('right')) dx += 1;
  if (keys.has('up')) dy -= 1;
  if (keys.has('down')) dy += 1;
  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy);
    p.x += (dx / len) * PLAYER_SPEED * dt;
    p.y += (dy / len) * PLAYER_SPEED * dt;
  }
  p.x = Math.min(W - PLAYER_R, Math.max(PLAYER_R, p.x));
  p.y = Math.min(H - PLAYER_R, Math.max(PLAYER_R, p.y));
  if (p.invuln > 0) p.invuln -= dt * 1000;

  const ramp = 1 + Math.min(0.8, state.elapsed / 60);
  if (state.elapsed >= state.nextObstacleAt && state.obstacles.length < 9) {
    spawnObstacle();
    state.nextObstacleAt = state.elapsed + 8;
  }
  for (const o of state.obstacles) {
    o.x += o.vx * ramp * dt;
    o.y += o.vy * ramp * dt;
    o.rot += o.spin * dt;
    if (o.x - o.r < 0) { o.x = o.r; o.vx = Math.abs(o.vx); }
    if (o.x + o.r > W) { o.x = W - o.r; o.vx = -Math.abs(o.vx); }
    if (o.y - o.r < 0) { o.y = o.r; o.vy = Math.abs(o.vy); }
    if (o.y + o.r > H) { o.y = H - o.r; o.vy = -Math.abs(o.vy); }
  }

  if (state.elapsed >= state.nextGemAt && state.gems.length < 6) {
    spawnGem();
    state.nextGemAt = state.elapsed + 1.4;
  }
  for (let i = state.gems.length - 1; i >= 0; i--) {
    const g = state.gems[i];
    g.phase += dt * 3;
    if (Math.hypot(g.x - p.x, g.y - p.y) < g.r + PLAYER_R - 3) {
      state.gems.splice(i, 1);
      state.score += g.value;
      shell.setStat('score', String(state.score));
      shell.sfx.pickup();
    }
  }

  if (p.invuln <= 0) {
    for (const o of state.obstacles) {
      if (Math.hypot(o.x - p.x, o.y - p.y) < o.r + PLAYER_R - 4) {
        state.lives -= 1;
        shell.setStat('lives', hearts(state.lives));
        shell.sfx.hurt();
        p.invuln = INVULN_MS;
        const ax = p.x - o.x;
        const ay = p.y - o.y;
        const len = Math.hypot(ax, ay) || 1;
        p.x = Math.min(W - PLAYER_R, Math.max(PLAYER_R, p.x + (ax / len) * 46));
        p.y = Math.min(H - PLAYER_R, Math.max(PLAYER_R, p.y + (ay / len) * 46));
        if (state.lives <= 0) { endRound('lose'); return; }
        break;
      }
    }
  }

  shell.setStat('time', String(Math.ceil(state.timeLeft)));
  if (state.timeLeft <= 0) endRound('win');
}

/* ------------------------------------------------------------------ */
/* 绘制                                                                 */
/* ------------------------------------------------------------------ */

function draw() {
  ctx.clearRect(0, 0, W, H);

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, 'rgba(124,140,255,0.16)');
  bg.addColorStop(1, 'rgba(154,107,255,0.10)');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 40) {
    ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); ctx.stroke();
  }

  for (const g of state.gems) {
    const s = 1 + Math.sin(g.phase) * 0.12;
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(Math.PI / 4);
    ctx.scale(s, s);
    ctx.shadowColor = 'rgba(86,214,198,0.9)';
    ctx.shadowBlur = 14;
    ctx.fillStyle = '#56d6c6';
    ctx.fillRect(-g.r * 0.7, -g.r * 0.7, g.r * 1.4, g.r * 1.4);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.fillRect(-g.r * 0.35, -g.r * 0.35, g.r * 0.6, g.r * 0.6);
    ctx.restore();
  }

  for (const o of state.obstacles) {
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.rot);
    ctx.shadowColor = 'rgba(154,107,255,0.8)';
    ctx.shadowBlur = 16;
    const g = ctx.createLinearGradient(-o.r, -o.r, o.r, o.r);
    g.addColorStop(0, '#8b5cf6');
    g.addColorStop(1, '#4b5bd6');
    ctx.fillStyle = g;
    ctx.fillRect(-o.r, -o.r, o.r * 2, o.r * 2);
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-o.r, -o.r, o.r * 2, o.r * 2);
    ctx.restore();
  }

  const p = state.player;
  if (p.invuln <= 0 || Math.floor(p.invuln / 100) % 2 === 0) {
    ctx.save();
    ctx.shadowColor = 'rgba(86,214,198,0.95)';
    ctx.shadowBlur = 18;
    const pg = ctx.createRadialGradient(p.x - 4, p.y - 5, 2, p.x, p.y, PLAYER_R);
    pg.addColorStop(0, '#ffffff');
    pg.addColorStop(0.4, '#7ce7d8');
    pg.addColorStop(1, '#3fb8a6');
    ctx.fillStyle = pg;
    ctx.beginPath();
    ctx.arc(p.x, p.y, PLAYER_R, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#14213d';
    ctx.beginPath();
    ctx.arc(p.x - 4.5, p.y - 2, 2.4, 0, Math.PI * 2);
    ctx.arc(p.x + 4.5, p.y - 2, 2.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/* ------------------------------------------------------------------ */
/* 结算                                                                 */
/* ------------------------------------------------------------------ */

function endRound(kind) {
  state.phase = 'over';
  keys.clear();
  shell.setStatus(kind === 'win' ? '时间到' : '生命耗尽');
  const { best, isRecord } = recordBestScore(shell.settings, state.score);
  shell.showResult({
    emoji: kind === 'win' ? '\ud83c\udf89' : '\ud83d\udc94',
    title: kind === 'win' ? '时间到！成功生还' : '生命耗尽',
    lines: [
      `本局得分 <strong>${state.score}</strong>，收集宝石 <strong>${state.score / GEM_SCORE}</strong> 颗。`,
      `历史最佳 <strong>${best.score}</strong>${isRecord ? '（新纪录！）' : ''}。`,
    ],
    primary: { label: '再玩一局', onClick: () => shell.newGame() },
  });
}

/* ------------------------------------------------------------------ */
/* 输入                                                                 */
/* ------------------------------------------------------------------ */

window.addEventListener('keydown', (event) => {
  const dir = KEY_MAP[event.key];
  if (!dir) return;
  event.preventDefault();
  keys.add(dir);
  if (state.phase === 'ready') {
    state.phase = 'playing';
    state.elapsed = 0;
    shell.setStatus('进行中');
    shell.sfx.tick();
    if (tipEl) tipEl.hidden = true;
  }
});

window.addEventListener('keyup', (event) => {
  const dir = KEY_MAP[event.key];
  if (dir) keys.delete(dir);
});

window.addEventListener('blur', () => keys.clear());

/* ------------------------------------------------------------------ */
/* 主循环                                                               */
/* ------------------------------------------------------------------ */

let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

shell.init({
  onRestart: () => {
    resetRound();
    canvas.focus();
  },
});

resetRound();
requestAnimationFrame(loop);

/* ==========================================================================
   game.js — 「60 秒躲避与收集」
   使用 purple-game-ui Skill：主题 CSS + 数据卡 + 结算浮层 + 事件音效表
   ========================================================================== */

import { renderStats, updateStats, ResultOverlay } from './purple-ui-kit.js';
import { play, bindSoundToggle, unlockAudio } from './purple-sound.js';

/* ------------------------------------------------------------------ 常量 */

const W = 800;
const H = 520;
const ROUND_TIME = 60;          // 一局 60 秒
const PICKUP_LIFE = 9;           // 水晶存在 9 秒
const PICKUP_SCORE = 10;
const START_LIVES = 3;
const INVULN_TIME = 1.3;         // 受击后无敌时长
const PLAYER_R = 15;
const PLAYER_SPEED = 285;        // 像素 / 秒
const OBSTACLE_COUNT = 6;
const MAX_PICKUPS = 3;
const PICKUP_SPAWN_INTERVAL = 2.2;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const rand = (a, b) => a + Math.random() * (b - a);

/* ------------------------------------------------------------------ DOM */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fieldEl = document.getElementById('field');
const hudEl = document.getElementById('hud');
const rulesOverlay = document.getElementById('rules-overlay');
const rulesStartBtn = document.getElementById('rules-start');
const dpadEl = document.getElementById('dpad');

const stats = renderStats(hudEl, [
  { key: 'time', label: '剩余时间', value: String(ROUND_TIME), state: 'accent' },
  { key: 'score', label: '得分', value: '0', state: 'accent' },
  { key: 'lives', label: '生命', value: String(START_LIVES), state: 'good' },
]);

const overlay = new ResultOverlay(document.getElementById('overlay'));
bindSoundToggle(document.getElementById('sound-toggle'));
unlockAudio();

/* ------------------------------------------------------------------ 状态 */

let state = 'ready';             // ready | playing | over
let timeLeft = ROUND_TIME;
let score = 0;
let lives = START_LIVES;
let collected = 0;
let elapsed = 0;
let invuln = 0;
let shake = 0;
let spawnTimer = 0;
let lastTickSecond = ROUND_TIME;

const player = { x: W / 2, y: H / 2, r: PLAYER_R, vx: 0, vy: 0 };
let obstacles = [];
let pickups = [];
const keys = { up: false, down: false, left: false, right: false };

/* ------------------------------------------------------------------ 输入 */

const KEYMAP = {
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
};

window.addEventListener('keydown', (e) => {
  const dir = KEYMAP[e.code];
  if (!dir) return;
  e.preventDefault();
  keys[dir] = true;
}, { passive: false });

window.addEventListener('keyup', (e) => {
  const dir = KEYMAP[e.code];
  if (dir) keys[dir] = false;
});

window.addEventListener('blur', () => {
  keys.up = keys.down = keys.left = keys.right = false;
});

// 触屏方向键
dpadEl.addEventListener('pointerdown', (e) => {
  const btn = e.target.closest('.dpad__btn');
  if (!btn) return;
  e.preventDefault();
  keys[btn.dataset.dir] = true;
});

const clearDpad = () => { keys.up = keys.down = keys.left = keys.right = false; };
dpadEl.addEventListener('pointerup', clearDpad);
dpadEl.addEventListener('pointercancel', clearDpad);
dpadEl.addEventListener('pointerleave', clearDpad);

/* ------------------------------------------------------------------ 规则 */

rulesStartBtn.addEventListener('click', () => {
  rulesOverlay.hidden = true;
  unlockAudio();
  play('select');
  startRound();
});

function startRound() {
  state = 'playing';
  timeLeft = ROUND_TIME;
  score = 0;
  lives = START_LIVES;
  collected = 0;
  elapsed = 0;
  invuln = 0;
  shake = 0;
  spawnTimer = 0;
  lastTickSecond = ROUND_TIME;
  player.x = W / 2;
  player.y = H / 2;
  player.vx = player.vy = 0;
  clearDpad();
  obstacles = [];
  pickups = [];
  for (let i = 0; i < OBSTACLE_COUNT; i++) obstacles.push(makeObstacle());
  syncHud(true);
}

function makeObstacle() {
  const horizontal = Math.random() < 0.5;
  const w = horizontal ? rand(70, 130) : rand(34, 48);
  const h = horizontal ? rand(34, 48) : rand(70, 130);
  const speed = rand(70, 130) * (Math.random() < 0.5 ? -1 : 1);
  return {
    x: rand(w, W - w),
    y: rand(h, H - h),
    w,
    h,
    vx: horizontal ? speed : 0,
    vy: horizontal ? 0 : speed,
  };
}

/* ------------------------------------------------------------------ HUD */

function syncHud(force = false) {
  const seconds = Math.max(0, Math.ceil(timeLeft));
  updateStats(stats, {
    time: { value: String(seconds), state: seconds <= 10 ? 'warn' : 'accent' },
    score: { value: String(score), state: 'accent' },
    lives: {
      value: String(lives),
      state: lives <= 1 ? 'bad' : 'good',
    },
  });
  if (force) {
    stats.get('time').classList.remove('is-bump');
    stats.get('score').classList.remove('is-bump');
    stats.get('lives').classList.remove('is-bump');
  }
}

/* ------------------------------------------------------------------ 逻辑 */

function update(dt) {
  if (state !== 'playing') return;

  elapsed += dt;
  timeLeft -= dt;

  // 最后 10 秒的滴答提示
  const second = Math.ceil(timeLeft);
  if (second <= 10 && second !== lastTickSecond && second > 0) {
    play('tick');
  }
  lastTickSecond = second;

  if (invuln > 0) invuln -= dt;
  if (shake > 0) shake = Math.max(0, shake - dt * 60);

  // 移动
  let dx = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
  let dy = (keys.down ? 1 : 0) - (keys.up ? 1 : 0);
  if (dx && dy) { dx *= 0.7071; dy *= 0.7071; }
  player.vx = dx * PLAYER_SPEED;
  player.vy = dy * PLAYER_SPEED;
  player.x = clamp(player.x + player.vx * dt, player.r, W - player.r);
  player.y = clamp(player.y + player.vy * dt, player.r, H - player.r);

  // 障碍巡逻（撞到边界反弹）
  for (const o of obstacles) {
    o.x += o.vx * dt;
    o.y += o.vy * dt;
    if (o.x < 0) { o.x = 0; o.vx = Math.abs(o.vx); }
    if (o.x + o.w > W) { o.x = W - o.w; o.vx = -Math.abs(o.vx); }
    if (o.y < 0) { o.y = 0; o.vy = Math.abs(o.vy); }
    if (o.y + o.h > H) { o.y = H - o.h; o.vy = -Math.abs(o.vy); }
  }

  // 撞障碍
  if (invuln <= 0) {
    for (const o of obstacles) {
      if (circleRectHit(player.x, player.y, player.r, o)) {
        onHit();
        break;
      }
    }
  }

  // 水晶生成
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnTimer = PICKUP_SPAWN_INTERVAL;
    if (pickups.length < MAX_PICKUPS) pickups.push(makePickup());
  }

  // 水晶存活倒计时
  for (const p of pickups) p.age += dt;
  pickups = pickups.filter((p) => p.age < PICKUP_LIFE);

  // 收集
  for (const p of pickups) {
    const dx = p.x - player.x;
    const dy = p.y - player.y;
    if (dx * dx + dy * dy <= (p.r + player.r) ** 2) {
      score += PICKUP_SCORE;
      collected += 1;
      pickups = pickups.filter((q) => q !== p);
      flashPickup(p);
      play('pickup');
      syncHud();
      break;
    }
  }

  syncHud();

  if (lives <= 0) {
    endRound('fail');
  } else if (timeLeft <= 0) {
    timeLeft = 0;
    endRound('complete');
  }
}

function circleRectHit(cx, cy, cr, r) {
  const nx = clamp(cx, r.x, r.x + r.w);
  const ny = clamp(cy, r.y, r.y + r.h);
  const dx = cx - nx;
  const dy = cy - ny;
  return dx * dx + dy * dy <= cr * cr;
}

function onHit() {
  lives -= 1;
  invuln = INVULN_TIME;
  shake = 8;
  fieldEl.classList.add('is-hit');
  setTimeout(() => fieldEl.classList.remove('is-hit'), 120);
  play('error');
  syncHud();
  if (lives <= 0) {
    endRound('fail');
  }
}

function makePickup() {
  for (let attempt = 0; attempt < 40; attempt++) {
    const r = 13;
    const x = rand(r + 8, W - r - 8);
    const y = rand(r + 8, H - r - 8);
    const clash = obstacles.some((o) => {
      const nx = clamp(x, o.x, o.x + o.w);
      const ny = clamp(y, o.y, o.y + o.h);
      return (x - nx) ** 2 + (y - ny) ** 2 < 46 * 46;
    });
    const tooClose = Math.hypot(x - player.x, y - player.y) < 90;
    if (!clash && !tooClose) return { x, y, r, age: 0 };
  }
  return { x: rand(30, W - 30), y: rand(30, H - 30), r: 13, age: 0 };
}

/* 收集时的粒子反馈 */
const particles = [];
function flashPickup(p) {
  for (let i = 0; i < 14; i++) {
    const a = (Math.PI * 2 * i) / 14 + rand(-0.2, 0.2);
    const sp = rand(70, 190);
    particles.push({
      x: p.x, y: p.y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp,
      life: 0.5,
      max: 0.5,
    });
  }
}

function updateParticles(dt) {
  for (const q of particles) {
    q.x += q.vx * dt;
    q.y += q.vy * dt;
    q.vx *= 0.92;
    q.vy *= 0.92;
    q.life -= dt;
  }
  while (particles.length && particles[0].life <= 0) particles.shift();
}

/* ------------------------------------------------------------------ 结算 */

function endRound(kind) {
  if (state === 'over') return;
  state = 'over';
  clearDpad();
  lastKind = kind;
  play(kind === 'complete' ? 'complete' : 'fail', { delay: 0.15 });
  showResult(kind);
}

/* 结算浮层被 Esc 关闭时（本局已结束），稍后自动重新打开，
   保证「重开按钮」始终只在结算画面里可达。 */
let reopenTimer = null;
let lastKind = 'complete';
const overlayRoot = document.getElementById('overlay');
new MutationObserver(() => {
  if (state !== 'over' || !overlayRoot.hidden) return;
  clearTimeout(reopenTimer);
  reopenTimer = setTimeout(() => {
    if (state === 'over' && overlayRoot.hidden) showResult();
  }, 800);
}).observe(overlayRoot, { attributes: true, attributeFilter: ['hidden'] });

function showResult(kind = lastKind) {
  const survived = Math.round(elapsed);
  const win = kind === 'complete';
  overlay.open({
    emoji: win ? '🏁' : '💥',
    title: win ? '时间到，挑战结束！' : '生命耗尽…',
    text: win
      ? '你撑满了 60 秒，一共收集了 <strong>' + collected + '</strong> 颗水晶。'
      : '倒在了第 <strong>' + survived + '</strong> 秒，共收集 <strong>' + collected + '</strong> 颗水晶。',
    rows: [
      { label: '得分', value: String(score), state: 'accent' },
      { label: '收集水晶', value: collected + ' 颗' },
      {
        label: '剩余生命',
        value: Math.max(0, lives) + ' / ' + START_LIVES,
        state: lives > 0 ? 'good' : 'bad',
      },
      { label: '用时', value: survived + ' 秒' },
    ],
    actions: [
      {
        label: '再玩一局',
        primary: true,
        onClick: () => {
          overlay.close();
          startRound();
          play('tap');
        },
      },
    ],
  });
}

/* ------------------------------------------------------------------ 绘制 */

function draw() {
  ctx.clearRect(0, 0, W, H);

  ctx.save();
  if (shake > 0) {
    ctx.translate(rand(-shake, shake), rand(-shake, shake));
  }

  // 网格底纹
  ctx.strokeStyle = 'rgba(255,255,255,0.045)';
  ctx.lineWidth = 1;
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

  // 障碍
  for (const o of obstacles) {
    ctx.save();
    ctx.shadowColor = 'rgba(251, 113, 133, 0.45)';
    ctx.shadowBlur = 14;
    const grad = ctx.createLinearGradient(o.x, o.y, o.x + o.w, o.y + o.h);
    grad.addColorStop(0, '#4a2f63');
    grad.addColorStop(1, '#2a2140');
    ctx.fillStyle = grad;
    ctx.strokeStyle = 'rgba(251, 113, 133, 0.65)';
    ctx.lineWidth = 2;
    roundRect(ctx, o.x, o.y, o.w, o.h, 10);
    ctx.fill();
    ctx.stroke();
    // 斜纹
    ctx.clip();
    ctx.strokeStyle = 'rgba(251, 113, 133, 0.18)';
    ctx.lineWidth = 6;
    for (let d = -o.h; d < o.w + o.h; d += 16) {
      ctx.beginPath();
      ctx.moveTo(o.x + d, o.y);
      ctx.lineTo(o.x + d - o.h, o.y + o.h);
      ctx.stroke();
    }
    ctx.restore();
  }

  // 水晶（含剩余时间进度环 + 进度条）
  for (const p of pickups) {
    const remain = clamp(1 - p.age / PICKUP_LIFE, 0, 1);
    ctx.save();
    ctx.shadowColor = 'rgba(86, 214, 198, 0.6)';
    ctx.shadowBlur = 16;
    const g = ctx.createRadialGradient(p.x - 4, p.y - 5, 2, p.x, p.y, p.r + 4);
    g.addColorStop(0, '#d8fff8');
    g.addColorStop(0.55, '#56d6c6');
    g.addColorStop(1, '#2f8f9a');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 进度环
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r + 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = remain < 0.3 ? '#fbbf24' : '#b9c2ff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r + 6, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * remain);
    ctx.stroke();
    ctx.restore();

    // 底部进度条
    const barW = 34;
    const barY = p.y + p.r + 11;
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    roundRect(ctx, p.x - barW / 2, barY, barW, 5, 2.5);
    ctx.fill();
    ctx.fillStyle = remain < 0.3 ? '#fbbf24' : '#56d6c6';
    roundRect(ctx, p.x - barW / 2, barY, Math.max(2, barW * remain), 5, 2.5);
    ctx.fill();

    // 剩余秒数
    ctx.fillStyle = 'rgba(238,241,255,0.85)';
    ctx.font = '600 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(Math.ceil(PICKUP_LIFE - p.age) + 's', p.x, barY + 16);
  }

  // 粒子
  for (const q of particles) {
    const a = clamp(q.life / q.max, 0, 1);
    ctx.fillStyle = 'rgba(86, 214, 198, ' + (0.85 * a).toFixed(3) + ')';
    ctx.beginPath();
    ctx.arc(q.x, q.y, 3 * a + 1, 0, Math.PI * 2);
    ctx.fill();
  }

  // 玩家
  const blink = invuln > 0 && Math.floor(invuln * 12) % 2 === 0;
  ctx.save();
  ctx.globalAlpha = blink ? 0.35 : 1;
  ctx.shadowColor = 'rgba(255, 182, 227, 0.7)';
  ctx.shadowBlur = 18;
  const pg = ctx.createLinearGradient(player.x - 15, player.y - 15, player.x + 15, player.y + 15);
  pg.addColorStop(0, '#ffc2e3');
  pg.addColorStop(1, '#9a6bff');
  ctx.fillStyle = pg;
  roundRect(ctx, player.x - player.r, player.y - player.r, player.r * 2, player.r * 2, 7);
  ctx.fill();
  ctx.restore();

  // 眼睛（朝向移动方向）
  ctx.fillStyle = '#1a1030';
  const ex = player.vx > 20 ? 3 : player.vx < -20 ? -3 : 0;
  const ey = player.vy > 20 ? 3 : player.vy < -20 ? -3 : 0;
  ctx.beginPath();
  ctx.arc(player.x - 5 + ex, player.y - 3 + ey, 2.2, 0, Math.PI * 2);
  ctx.arc(player.x + 5 + ex, player.y - 3 + ey, 2.2, 0, Math.PI * 2);
  ctx.fill();

  // 无敌护盾
  if (invuln > 0) {
    ctx.strokeStyle = 'rgba(86, 214, 198, ' + (0.35 + 0.4 * (invuln / INVULN_TIME)).toFixed(2) + ')';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.r + 9, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

/* ------------------------------------------------------------------ 主循环 */

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (state === 'playing') {
    update(dt);
  }
  updateParticles(dt);
  draw();
  requestAnimationFrame(frame);
}

// 初始化：静态场景 + 规则提醒
for (let i = 0; i < OBSTACLE_COUNT; i++) obstacles.push(makeObstacle());
syncHud(true);
rulesOverlay.hidden = false;
rulesStartBtn.focus();
requestAnimationFrame(frame);


// 紫夜闪避 · 60 秒躲避与收集
// UI 走 purple-game-ui Skill：主题令牌 + 数据卡 HUD + 结算浮层
import { renderStats, updateStats, ResultOverlay } from './purple-ui-kit.js';

const W = 960;
const H = 600;
const DURATION = 60;      // 一局 60 秒
const ORB_LIFE = 9;       // 光球存在 9 秒
const ORB_VALUE = 10;
const MAX_LIVES = 3;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const field = document.getElementById('field');
const toast = document.getElementById('toast');
const rulesEl = document.getElementById('rules');
const rulesOk = document.getElementById('rules-ok');
const hudEl = document.getElementById('hud');

const overlay = new ResultOverlay(document.getElementById('overlay'));

const stats = renderStats(hudEl, [
  { key: 'time',  label: '剩余时间', value: '60s' },
  { key: 'score', label: '得分',     value: 0 },
  { key: 'lives', label: '生命',     value: MAX_LIVES, state: 'good' },
]);
hudEl.classList.add('pg-stats', 'pg-stats--rail');

const keys = new Set();
let state = 'idle';         // idle | playing | over
let timeLeft = DURATION;
let score = 0;
let lives = MAX_LIVES;
let last = 0;
let orbs = [];
let hazards = [];
let particles = [];
let spawnTimer = 0;
let player;
let lastResult = null;

// ---------------------------------------------------------------- 工具
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function say(text, ms = 1200) {
  toast.textContent = text;
  toast.classList.add('is-on');
  clearTimeout(say._t);
  say._t = setTimeout(() => toast.classList.remove('is-on'), ms);
}

function pulse(cls) {
  field.classList.remove(cls);
  void field.offsetWidth;
  field.classList.add(cls);
}

// ---------------------------------------------------------------- 场地生成
function makeHazards() {
  hazards = [
    { type: 'block', x: 180, y: 150, w: 130, h: 26, vx: 90, vy: 0 },
    { type: 'block', x: 620, y: 430, w: 170, h: 26, vx: -80, vy: 0 },
    { type: 'spike', x: 480, y: 300, r: 26, ang: 0, spin: 1.1, ox: 480, oy: 300, amp: 150, phase: 0 },
    { type: 'spike', x: 260, y: 420, r: 22, ang: 0, spin: -1.5, ox: 260, oy: 420, amp: 120, phase: 1.6 },
    { type: 'spike', x: 760, y: 200, r: 22, ang: 0, spin: 1.8, ox: 760, oy: 200, amp: 130, phase: 3.1 },
  ];
  hazards.forEach((h) => {
    if (h.type === 'block') {
      h.y = rand(60, H - 90);
      h.vy = rand(-30, 30);
    }
  });
}

function spawnOrb() {
  // 光球落在玩家附近（120~320px）的可达位置，方便在倒计时内赶到
  let x = W / 2, y = H / 2;
  for (let i = 0; i < 24; i++) {
    const a = rand(0, Math.PI * 2);
    const d = rand(120, 320);
    x = clamp(player.x + Math.cos(a) * d, 45, W - 45);
    y = clamp(player.y + Math.sin(a) * d, 45, H - 45);
    const insideBlock = hazards.some((h) => h.type === 'block'
      && x > h.x - 20 && x < h.x + h.w + 20 && y > h.y - 20 && y < h.y + h.h + 20);
    const nearSpike = hazards.some((h) => h.type === 'spike' && Math.hypot(x - h.x, y - h.y) < h.r + 40);
    if (!insideBlock && !nearSpike) break;
  }
  orbs.push({ x, y, r: 15, born: performance.now(), phase: rand(0, 6.28) });
}

function reset() {
  timeLeft = DURATION;
  score = 0;
  lives = MAX_LIVES;
  orbs = [];
  particles = [];
  spawnTimer = 0;
  player = { x: W / 2, y: H / 2, r: 16, vx: 0, vy: 0, inv: 0 };
  makeHazards();
  syncHud();
}

function syncHud() {
  updateStats(stats, {
    time: Math.max(0, Math.ceil(timeLeft)) + 's',
    score,
    lives: {
      value: '\u2764'.repeat(Math.max(0, lives)) || '\u2014',
      state: lives > 1 ? 'good' : lives === 1 ? 'warn' : 'bad',
    },
  });
}

// ---------------------------------------------------------------- 输入
const MOVE_KEYS = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  w: 'up', s: 'down', a: 'left', d: 'right',
  W: 'up', S: 'down', A: 'left', D: 'right',
};

window.addEventListener('keydown', (e) => {
  const dir = MOVE_KEYS[e.key];
  if (dir) {
    keys.add(dir);
    e.preventDefault();
  }
});
window.addEventListener('keyup', (e) => {
  const dir = MOVE_KEYS[e.key];
  if (dir) keys.delete(dir);
});
window.addEventListener('blur', () => keys.clear());

// 触屏：按住场地拖动玩家
let dragging = false;
const pointer = { x: 0, y: 0 };
function toField(e) {
  const r = canvas.getBoundingClientRect();
  pointer.x = ((e.clientX - r.left) / r.width) * W;
  pointer.y = ((e.clientY - r.top) / r.height) * H;
}
canvas.addEventListener('pointerdown', (e) => {
  dragging = true;
  toField(e);
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => { if (dragging) toField(e); });
canvas.addEventListener('pointerup', () => { dragging = false; });
canvas.addEventListener('pointercancel', () => { dragging = false; });

// ---------------------------------------------------------------- 逻辑
function update(dt) {
  timeLeft -= dt;
  if (timeLeft <= 0) {
    timeLeft = 0;
    syncHud();
    endGame(false);
    return;
  }

  // 玩家移动
  const speed = 320;
  let dx = 0, dy = 0;
  if (keys.has('left')) dx -= 1;
  if (keys.has('right')) dx += 1;
  if (keys.has('up')) dy -= 1;
  if (keys.has('down')) dy += 1;
  if (dx || dy) {
    const len = Math.hypot(dx, dy);
    player.vx = (dx / len) * speed;
    player.vy = (dy / len) * speed;
  } else {
    player.vx = 0;
    player.vy = 0;
  }
  player.x = clamp(player.x + player.vx * dt, player.r, W - player.r);
  player.y = clamp(player.y + player.vy * dt, player.r, H - player.r);

  if (dragging) {
    const px = clamp(pointer.x, player.r, W - player.r);
    const py = clamp(pointer.y, player.r, H - player.r);
    player.x += (px - player.x) * Math.min(1, dt * 12);
    player.y += (py - player.y) * Math.min(1, dt * 12);
  }

  player.inv = Math.max(0, player.inv - dt);

  // 障碍移动
  const t = performance.now() / 1000;
  for (const h of hazards) {
    if (h.type === 'block') {
      h.x += h.vx * dt;
      h.y += h.vy * dt;
      if (h.x < 20 || h.x + h.w > W - 20) h.vx *= -1;
      if (h.y < 20 || h.y + h.h > H - 20) h.vy *= -1;
    } else {
      h.ang += h.spin * dt;
      h.x = h.ox + Math.cos(t + h.phase) * h.amp;
      h.y = h.oy + Math.sin(t + h.phase) * h.amp;
    }
  }

  // 光球生成
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnTimer = rand(0.9, 1.4);
    spawnOrb();
  }

  // 光球过期（存在 9 秒）
  const now = performance.now();
  for (let i = orbs.length - 1; i >= 0; i--) {
    if ((now - orbs[i].born) / 1000 >= ORB_LIFE) orbs.splice(i, 1);
  }

  // 收集
  for (let i = orbs.length - 1; i >= 0; i--) {
    const o = orbs[i];
    if (Math.hypot(o.x - player.x, o.y - player.y) < o.r + player.r + 4) {
      orbs.splice(i, 1);
      score += ORB_VALUE;
      burst(o.x, o.y, '#fbbf24', 14);
      pulse('is-pick');
      say('+10 分');
      syncHud();
    }
  }

  // 碰撞障碍 → 扣生命
  if (player.inv <= 0) {
    for (const h of hazards) {
      const hit = h.type === 'block'
        ? hitBlock(player, h)
        : Math.hypot(player.x - h.x, player.y - h.y) < h.r + player.r * 0.6;
      if (hit) {
        lives -= 1;
        player.inv = 1.4;
        burst(player.x, player.y, '#fb7185', 20);
        pulse('is-hurt');
        say('被撞到了！生命 -1', 1400);
        syncHud();
        if (lives <= 0) {
          endGame(true);
          return;
        }
        break;
      }
    }
  }

  // 粒子
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 40 * dt;
    if (p.life <= 0) particles.splice(i, 1);
  }

  syncHud();
}

function hitBlock(p, h) {
  const cx = clamp(p.x, h.x, h.x + h.w);
  const cy = clamp(p.y, h.y, h.y + h.h);
  return Math.hypot(p.x - cx, p.y - cy) < p.r;
}

function burst(x, y, color, n) {
  for (let i = 0; i < n; i++) {
    const a = rand(0, Math.PI * 2);
    const s = rand(60, 220);
    particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(0.3, 0.7), color });
  }
}

// ---------------------------------------------------------------- 绘制
function draw() {
  ctx.clearRect(0, 0, W, H);

  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.045)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 48) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += 48) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  ctx.restore();

  for (const h of hazards) {
    if (h.type === 'block') {
      ctx.save();
      ctx.translate(h.x + h.w / 2, h.y + h.h / 2);
      const g = ctx.createLinearGradient(-h.w / 2, -h.h / 2, h.w / 2, h.h / 2);
      g.addColorStop(0, '#9a6bff');
      g.addColorStop(1, '#7c8cff');
      ctx.fillStyle = g;
      roundRect(ctx, -h.w / 2, -h.h / 2, h.w, h.h, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.28)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    } else {
      ctx.save();
      ctx.translate(h.x, h.y);
      ctx.rotate(h.ang);
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
        const px = Math.cos(a) * (h.r + 8);
        const py = Math.sin(a) * (h.r + 8);
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = '#9a6bff';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, h.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(124,140,255,0.45)';
      ctx.fill();
      ctx.restore();
    }
  }

  // 光球 + 剩余存在时间进度环
  const now = performance.now();
  for (const o of orbs) {
    const elapsed = (now - o.born) / 1000;
    const ratio = Math.max(0, Math.min(1, (ORB_LIFE - elapsed) / ORB_LIFE));
    const bob = Math.sin(now / 260 + o.phase) * 3;
    ctx.save();
    ctx.translate(o.x, o.y + bob);
    ctx.beginPath();
    ctx.arc(0, 0, o.r + 8, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, o.r + 8, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ratio);
    ctx.strokeStyle = ratio > 0.35 ? '#56d6c6' : '#fbbf24';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
    const g = ctx.createRadialGradient(-4, -5, 2, 0, 0, o.r);
    g.addColorStop(0, '#fff3c4');
    g.addColorStop(1, '#fbbf24');
    ctx.beginPath();
    ctx.arc(0, 0, o.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.restore();
  }

  // 玩家
  ctx.save();
  ctx.translate(player.x, player.y);
  if (player.inv > 0 && Math.floor(player.inv * 12) % 2 === 0) ctx.globalAlpha = 0.4;
  const pg = ctx.createRadialGradient(-5, -6, 3, 0, 0, player.r);
  pg.addColorStop(0, '#eef1ff');
  pg.addColorStop(1, '#7c8cff');
  ctx.beginPath();
  ctx.arc(0, 0, player.r, 0, Math.PI * 2);
  ctx.fillStyle = pg;
  ctx.fill();
  ctx.strokeStyle = '#56d6c6';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();

  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life / 0.7);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3.4, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
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

// ---------------------------------------------------------------- 主循环
function frame(ts) {
  const dt = Math.min(0.05, (ts - last) / 1000 || 0);
  last = ts;
  if (state === 'playing') update(dt);
  draw();
  requestAnimationFrame(frame);
}

function endGame(died) {
  state = 'over';
  const got = Math.max(0, Math.round(score));
  lastResult = {
    emoji: died ? '\ud83d\udc94' : '\ud83c\udf89',
    title: died ? '生命耗尽' : '时间到！',
    text: died
      ? '你被尖刺击中了，这次收集到的光球没能带回家。'
      : '你撑满了 60 秒，看看这次收进口袋多少光球。',
    rows: [
      { label: '得分', value: String(got), state: 'accent' },
      { label: '收集光球', value: String(got / ORB_VALUE) },
      { label: '剩余时间', value: Math.max(0, Math.ceil(timeLeft)) + 's' },
      { label: '剩余生命', value: '\u2764'.repeat(Math.max(0, lives)) || '0', state: lives > 0 ? 'good' : 'bad' },
    ],
    actions: [
      { label: '再玩一局', primary: true, onClick: () => { overlay.close(); startGame(); } },
    ],
  };
  overlay.open(lastResult);
}

// Esc 可以关掉结算浮层，但关掉后立刻把结算再放回来，
// 这样「重开」按钮不会因为误按 Esc 而消失（重开按钮只在结算画面出现）。
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || state !== 'over' || !overlay.isOpen) return;
  setTimeout(() => {
    if (state === 'over' && !overlay.isOpen && lastResult) overlay.open(lastResult);
  }, 0);
});

function startGame() {
  reset();
  state = 'playing';
  last = performance.now();
}

// ---------------------------------------------------------------- 开场
reset();
state = 'idle';
rulesEl.hidden = false;
rulesOk.addEventListener('click', () => {
  rulesEl.hidden = true;
  startGame();
  rulesOk.blur();
});
requestAnimationFrame(frame);

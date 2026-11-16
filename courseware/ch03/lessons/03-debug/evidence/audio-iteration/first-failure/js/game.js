/* ==========================================================================
   game.js — 「60 秒躲避与收集」
   使用 purple-game-ui 的数据卡 / 结算浮层 / 声音组件。
   ========================================================================== */

import { renderStats, updateStats, ResultOverlay } from './purple-ui-kit.js';
import { sfx, setSoundEnabled, isSoundEnabled } from './purple-sound.js';

/* ------------------------------------------------------------- 常量 */
const ROUND_TIME = 60;      // 一局秒数
const MAX_HP = 3;           // 生命上限
const GEM_LIFE = 9;         // 晶体存在时间（秒）
const PLAYER_R = 18;
const PLAYER_SPEED = 340;   // px / 秒
const INVULN = 1.2;         // 受伤后的无敌时间

const W = 960, H = 600;

/* 高分屏清晰渲染 */
const DPR = Math.min(2, window.devicePixelRatio || 1);
canvas.width = W * DPR;
canvas.height = H * DPR;

/* 从主题令牌读取实际颜色（canvas 不认 var()） */
const CSS = getComputedStyle(document.documentElement);
const C = {
  accent3: CSS.getPropertyValue('--pg-accent-3').trim() || '#56d6c6',
  accent2: CSS.getPropertyValue('--pg-accent-2').trim() || '#9a6bff',
  warn: CSS.getPropertyValue('--pg-warn').trim() || '#fbbf24',
  bad: CSS.getPropertyValue('--pg-bad').trim() || '#fb7185',
};

/* ------------------------------------------------------------- DOM */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const field = document.getElementById('field');
const floaters = document.getElementById('floaters');
const hudEl = document.getElementById('hud');
const introEl = document.getElementById('intro');
const soundBtn = document.getElementById('sound-btn');
const hintEl = document.getElementById('field-hint');

/* ---------------------------------------------------------- HUD 读数 */
const stats = renderStats(hudEl, [
  { key: 'time', label: '剩余时间', value: '1:00', state: 'accent' },
  { key: 'score', label: '得分', value: 0 },
  { key: 'hp', label: '生命', value: MAX_HP, state: 'good' },
]);

/* --------------------------------------------------------- 游戏状态 */
const state = {
  phase: 'intro',      // intro | playing | over
  time: ROUND_TIME,
  score: 0,
  hp: MAX_HP,
  player: { x: W / 2, y: H / 2, r: PLAYER_R, vx: 0, vy: 0, invuln: 0 },
  obstacles: [],
  gems: [],
  particles: [],
  shake: 0,
};

const keys = new Set();
const KEY_MAP = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  w: 'up', a: 'left', s: 'down', d: 'right',
  W: 'up', A: 'left', S: 'down', D: 'right',
};

/* --------------------------------------------------------- 结算浮层 */
const overlay = new ResultOverlay(document.getElementById('overlay'));

/* ============================ 开场规则提醒（自定义，结构已固定） ==== */
const introPanel = introEl.querySelector('.pg-overlay__panel');
const startBtn = document.getElementById('start-btn');
let introLastFocus = null;

introPanel.setAttribute('role', 'dialog');
introPanel.setAttribute('aria-modal', 'true');
introPanel.setAttribute('aria-labelledby', 'intro-title');

function showIntro() {
  introLastFocus = document.activeElement;
  introEl.hidden = false;
  hintEl.hidden = true;
  startBtn.focus();
  document.addEventListener('keydown', introKeydown, true);
}

function showHint(text) {
  hintEl.textContent = text;
  hintEl.hidden = false;
}

function hideHint() {
  hintEl.hidden = true;
  hintEl.textContent = '';
}

function startRound() {
  hideIntro();
  hideHint();
  state.phase = 'playing';
  state.time = ROUND_TIME;
  state.score = 0;
  state.hp = MAX_HP;
  state.player.x = W / 2; state.player.y = H / 2;
  state.player.invuln = 0;
  state.obstacles = [];
  state.gems = [];
  state.particles = [];
  state.shake = 0;
  for (let i = 0; i < 3; i++) spawnObstacle();
  spawnGem();
  updateHud();
  canvas.focus();
  sfx.tick();
}

function closeIntro() {
  hideIntro();
  showHint('规则提醒已关闭 · 按 Enter 重新查看规则');
}

function hideIntro() {
  introEl.hidden = true;
  document.removeEventListener('keydown', introKeydown, true);
  if (introLastFocus && typeof introLastFocus.focus === 'function') introLastFocus.focus();
  introLastFocus = null;
}

function introKeydown(e) {
  if (introEl.hidden) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    closeIntro();
    return;
  }
  if (e.key === 'Enter') { e.preventDefault(); startRound(); return; }
  if (e.key !== 'Tab') return;
  const items = [...introPanel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')]
    .filter((n) => !n.disabled && n.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

startBtn.addEventListener('click', () => startRound());

/* ==================================================== 音效开关 ======= */
function refreshSoundBtn() {
  const on = isSoundEnabled();
  soundBtn.textContent = on ? '音效：开' : '音效：关';
  soundBtn.setAttribute('aria-pressed', String(on));
}
soundBtn.addEventListener('click', () => {
  setSoundEnabled(!isSoundEnabled());
  refreshSoundBtn();
});

/* ==================================================== 回合流程 ======= */
function endRound(reason) {
  state.phase = 'over';
  keys.clear();
  overlay.open({
    emoji: reason === 'hp' ? '💔' : '🎉',
    title: reason === 'hp' ? '生命耗尽' : '时间到！',
    text: reason === 'hp'
      ? `你在第 <strong>${Math.ceil(ROUND_TIME - state.time)}</strong> 秒被击倒，共收集 <strong>${state.score}</strong> 个晶体。`
      : `坚持满 <strong>${ROUND_TIME}</strong> 秒，共收集 <strong>${state.score}</strong> 个晶体。`,
    rows: [
      { label: '最终得分', value: String(state.score), state: 'accent' },
      { label: '剩余生命', value: `${state.hp} / ${MAX_HP}`, state: state.hp > 0 ? 'good' : 'bad' },
      { label: '用时', value: `${Math.min(ROUND_TIME, Math.ceil(ROUND_TIME - state.time))} 秒` },
    ],
    actions: [{ label: '再玩一局', primary: true, onClick: () => { overlay.close(); startRound(); } }],
    dismissible: true,
  });
  if (reason === 'hp') sfx.mismatch(); else sfx.win();
}

/* ==================================================== 元素生成 ======= */
function rand(a, b) { return a + Math.random() * (b - a); }

function spawnObstacle() {
  const size = rand(26, 40);
  const dir = Math.random() < 0.5 ? 1 : -1;
  let x = rand(50, W - 50), y = rand(50, H - 50);
  for (let i = 0; i < 20; i++) {
    if (Math.hypot(x - state.player.x, y - state.player.y) > 140) break;
    x = rand(50, W - 50); y = rand(50, H - 50);
  }
  state.obstacles.push({
    x,
    y,
    r: size,
    angle: rand(0, Math.PI * 2),
    spin: rand(-1.6, 1.6),
    vx: rand(60, 150) * dir,
    vy: rand(60, 150) * (Math.random() < 0.5 ? 1 : -1),
  });
}

function spawnGem() {
 if (state.gems.length >= 4) return;
  const gr = 16;
  for (let tries = 0; tries < 24; tries++) {
    const gx = rand(gr + 20, W - gr - 20);
    const gy = rand(gr + 20, H - gr - 20);
    // 避开玩家出生点附近，避免一开局就贴脸
    if (Math.hypot(gx - state.player.x, gy - state.player.y) < 120) continue;
    state.gems.push({ x: gx, y: gy, r: gr, born: ROUND_TIME - state.time, life: GEM_LIFE, spin: rand(0, Math.PI * 2) });
    return;
  }
}

/* ==================================================== 可见反馈 ======= */
function flashField(kind) {
  const cls = kind === 'hurt' ? 'is-hurt' : 'is-pickup';
  field.classList.remove('is-hurt', 'is-pickup');
  void field.offsetWidth;
  field.classList.add(cls);
  setTimeout(() => field.classList.remove(cls), 500);
}

function floater(text, x, y, kind) {
  const el = document.createElement('div');
  el.className = `floater${kind ? ` floater--${kind}` : ''}`;
  el.textContent = text;
  el.style.left = `${(x / W) * 100}%`;
  el.style.top = `${(y / H) * 100}%`;
  floaters.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function burst(x, y, color, count = 12) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = rand(60, 210);
    state.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: rand(0.3, 0.6), max: 0.6, color, r: rand(2, 4) });
  }
}

/* ==================================================== HUD 更新 ======= */
function updateHud() {
  const secs = Math.max(0, Math.ceil(state.time));
  const m = Math.floor(secs / 60), s = secs % 60;
  updateStats(stats, {
    time: { value: `${m}:${String(s).padStart(2, '0')}`, state: state.time <= 10 ? 'warn' : 'accent' },
    score: state.score,
    hp: { value: state.hp, state: state.hp === 1 ? 'bad' : state.hp > 0 ? 'good' : 'bad' },
  });
}

/* ==================================================== 输入 ========== */
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (state.phase === 'intro' && introEl.hidden) { e.preventDefault(); showIntro(); return; }
    if (state.phase === 'over' && overlay.root.hidden) { e.preventDefault(); startRound(); return; }
  }
  const dir = KEY_MAP[e.key];
  if (!dir) return;
  if (state.phase !== 'playing') return;
  e.preventDefault();
  keys.add(dir);
});

window.addEventListener('keyup', (e) => {
  const dir = KEY_MAP[e.key];
  if (!dir) return;
  keys.delete(dir);
});

window.addEventListener('blur', () => keys.clear());

/* ==================================================== 主循环 ======= */
let last = performance.now();

function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (state.phase === 'playing') update(dt);
  else if (state.phase === 'over' && overlay.root.hidden && hintEl.hidden) {
    showHint('本局结束 · 按 Enter 重新开始');
  }
  draw();
  requestAnimationFrame(loop);
}

function update(dt) {
  state.time -= dt;
  if (state.time <= 0) {
    state.time = 0;
    updateHud();
    endRound('time');
    return;
  }

  const p = state.player;
  let dx = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
  let dy = (keys.has('down') ? 1 : 0) - (keys.has('up') ? 1 : 0);
  if (dx || dy) {
    const len = Math.hypot(dx, dy);
    dx = dx / len; dy = dy / len;
    p.x += dx * PLAYER_SPEED * dt;
    p.y += dy * PLAYER_SPEED * dt;
  }
  p.x = Math.max(p.r, Math.min(W - p.r, p.x));
  p.y = Math.max(p.r, Math.min(H - p.r, p.y));
  if (p.invuln > 0) p.invuln -= dt;

  // 障碍
  for (let i = state.obstacles.length - 1; i >= 0; i--) {
    const o = state.obstacles[i];
    o.x += o.vx * dt; o.y += o.vy * dt; o.angle += o.spin * dt;
    if (o.x < o.r || o.x > W - o.r) { o.vx *= -1; o.x = Math.max(o.r, Math.min(W - o.r, o.x)); }
    if (o.y < o.r || o.y > H - o.r) { o.vy *= -1; o.y = Math.max(o.r, Math.min(H - o.r, o.y)); }

    if (p.invuln <= 0 && Math.hypot(o.x - p.x, o.y - p.y) < o.r * 0.72 + p.r * 0.72) {
      state.hp -= 1;
      p.invuln = INVULN;
      state.shake = 0.35;
      state.obstacles.splice(i, 1);
      burst(p.x, p.y, C.bad, 16);
      floater('-1 生命', p.x, p.y, 'bad');
      flashField('hurt');
      sfx.hurt();
      updateHud();
      if (state.hp <= 0) {
        state.hp = 0;
        updateHud();
        endRound('hp');
        return;
      }
    }
  }

  // 障碍逐渐变多（单一难度、固定节奏）
  const targetObstacles = 3 + Math.floor((ROUND_TIME - state.time) / 10);
  if (state.obstacles.length < targetObstacles && Math.random() < dt * 1.6) spawnObstacle();

  // 晶体
  for (let i = state.gems.length - 1; i >= 0; i--) {
    const g = state.gems[i];
    g.spin += dt * 1.6;
    const age = (ROUND_TIME - state.time) - g.born;
    if (age >= GEM_LIFE) {
      state.gems.splice(i, 1);
      continue;
    }
    if (Math.hypot(g.x - p.x, g.y - p.y) < g.r + p.r * 0.8) {
      state.gems.splice(i, 1);
      state.score += 1;
      burst(g.x, g.y, C.accent3, 14);
      floater('+1', g.x, g.y, 'good');
      flashField('pickup');
      sfx.pickup();
      updateHud();
    }
  }
  if (Math.random() < dt * 0.9) spawnGem();

  // 粒子
  for (let i = state.particles.length - 1; i >= 0; i--) {
    const q = state.particles[i];
    q.x += q.vx * dt; q.y += q.vy * dt;
    q.vx *= 0.94; q.vy *= 0.94;
    q.life -= dt;
    if (q.life <= 0) state.particles.splice(i, 1);
  }

  if (state.shake > 0) state.shake = Math.max(0, state.shake - dt);

  // 时间读数整秒刷新，避免布局抖动
  if (Math.ceil(state.time) !== Math.ceil(state.time + dt)) updateHud();
}

/* ==================================================== 绘制 ========== */
function draw() {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  if (state.shake > 0) {
    const s = state.shake * 12;
    ctx.translate((Math.random() - 0.5) * s, (Math.random() - 0.5) * s);
  }

  // 网格底纹
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  // 晶体：进度环显示剩余存在时间
  const nowAge = ROUND_TIME - state.time;
  for (const g of state.gems) {
    const remain = Math.max(0, 1 - (nowAge - g.born) / GEM_LIFE);
    const pulse = 1 + Math.sin(nowAge * 4 + g.spin) * 0.06;
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.scale(pulse, pulse);
    // 环
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.beginPath(); ctx.arc(0, 0, g.r + 8, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = remain > 0.34 ? C.accent3 : C.warn;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 0, g.r + 8, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * remain);
    ctx.stroke();
    // 菱形本体
    ctx.rotate(g.spin * 0.4);
    const gr = g.r;
    ctx.beginPath();
    ctx.moveTo(0, -gr); ctx.lineTo(gr * 0.72, 0); ctx.lineTo(0, gr); ctx.lineTo(-gr * 0.72, 0);
    ctx.closePath();
    ctx.fillStyle = C.accent3;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.65)';
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.restore();
  }

  // 障碍：紫色尖刺
  for (const o of state.obstacles) {
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.angle);
    ctx.beginPath();
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2 - Math.PI / 2;
      const px = Math.cos(a) * o.r, py = Math.sin(a) * o.r;
      k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = C.accent2;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  // 玩家
  const p = state.player;
  if (p.invuln <= 0 || Math.floor(nowAge * 12) % 2 === 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = C.warn;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    // 朝向指示
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(20,14,40,0.55)';
    ctx.fill();
    ctx.restore();
  }

  // 粒子
  for (const q of state.particles) {
    ctx.globalAlpha = Math.max(0, q.life / q.max);
    ctx.fillStyle = q.color;
    ctx.beginPath();
    ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.restore();
}

/* ==================================================== 启动 ========== */
updateHud();
showIntro();
requestAnimationFrame(loop);

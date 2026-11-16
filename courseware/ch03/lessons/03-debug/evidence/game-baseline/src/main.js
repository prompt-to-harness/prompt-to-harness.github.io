/**
 * 60 秒躲避与收集 —— 渲染与事件层（DOM / 计时器 / 音频 / 存储都在这里）。
 */

import { Game, WORLD } from './game-core.js';
import { loadSettings, saveSettings, recordBest } from './storage.js';
import { setSoundEnabled, sfx } from './sound.js';
import { trapFocus, setToggleLabel } from './ui.js';

const DIFFICULTY = 'normal';

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const el = {
  time: document.getElementById('stat-time'),
  score: document.getElementById('stat-score'),
  lives: document.getElementById('stat-lives'),
  overlay: document.getElementById('overlay'),
  overlayEmoji: document.getElementById('overlay-emoji'),
  overlayTitle: document.getElementById('overlay-title'),
  overlayText: document.getElementById('overlay-text'),
  overlayAgain: document.getElementById('overlay-again'),
  overlayClose: document.getElementById('overlay-close'),
  soundToggle: document.getElementById('sound-toggle'),
  showResult: document.getElementById('show-result'),
};

const settings = loadSettings();
setSoundEnabled(settings.sound);
setToggleLabel(el.soundToggle, settings.sound, '🔊 音效', '🔇 静音');

const game = new Game();
const particles = [];
const held = new Set();

let started = false;
let lastFrame = 0;
let ended = false;

/* ---------------- 存储 ---------------- */

function persist() {
  saveSettings(settings);
}

el.soundToggle.addEventListener('click', () => {
  settings.sound = !settings.sound;
  setSoundEnabled(settings.sound);
  setToggleLabel(el.soundToggle, settings.sound, '🔊 音效', '🔇 静音');
  persist();
  if (settings.sound) sfx.flip();
});

/* ---------------- 画布尺寸 ---------------- */

function resize() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const cssWidth = canvas.clientWidth || WORLD.w;
  const cssHeight = (cssWidth * WORLD.h) / WORLD.w;
  canvas.width = Math.round(cssWidth * dpr);
  canvas.height = Math.round(cssHeight * dpr);
}

if ('ResizeObserver' in window) {
  new ResizeObserver(resize).observe(canvas);
}
window.addEventListener('resize', resize);
resize();

/* ---------------- 输入 ---------------- */

const KEY_MAP = {
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
};

function directionFromKeys() {
  let x = 0;
  let y = 0;
  if (held.has('left')) x -= 1;
  if (held.has('right')) x += 1;
  if (held.has('up')) y -= 1;
  if (held.has('down')) y += 1;
  return { x: x, y: y };
}

window.addEventListener('keydown', (e) => {
  if (!e.metaKey && !e.ctrlKey && !e.altKey) {
    const dir = KEY_MAP[e.code];
    if (dir) {
      e.preventDefault();
      held.add(dir);
      if (!started) beginGame();
      return;
    }
  }
  if (e.key === 'Escape' && !el.overlay.hidden) {
    closeOverlay();
  }
});

window.addEventListener('keyup', (e) => {
  const dir = KEY_MAP[e.code];
  if (dir) {
    e.preventDefault();
    held.delete(dir);
  }
});

window.addEventListener('blur', () => held.clear());

// 触屏/鼠标：按住画布朝指针方向移动
let pointerActive = false;
canvas.addEventListener('pointerdown', (e) => {
  pointerActive = true;
  canvas.setPointerCapture(e.pointerId);
  if (!started) beginGame();
});
canvas.addEventListener('pointerup', () => { pointerActive = false; });
canvas.addEventListener('pointercancel', () => { pointerActive = false; });
canvas.addEventListener('pointermove', (e) => {
  if (!pointerActive || !started) return;
  const rect = canvas.getBoundingClientRect();
  const px = ((e.clientX - rect.left) / rect.width) * WORLD.w;
  const py = ((e.clientY - rect.top) / rect.height) * WORLD.h;
  const p = game.state.player;
  const dx = px - p.x;
  const dy = py - p.y;
  if (Math.hypot(dx, dy) > 6) game.setDirection(dx, dy);
});

/* ---------------- 游戏流程 ---------------- */

function beginGame() {
  game.start();
  started = true;
  ended = false;
  particles.length = 0;
  held.clear();
  el.overlay.hidden = true;
  el.showResult.hidden = true;
  lastFrame = performance.now();
  sfx.flip();
}

function endGame(reason) {
  ended = true;
  const s = game.state;
  const timeMs = s.elapsedMs;
  const best = recordBest(settings.best, DIFFICULTY, { score: s.score, timeMs: timeMs });
  persist();

  const won = reason === 'time';
  el.overlayEmoji.textContent = won ? '🏆' : '💔';
  el.overlayTitle.textContent = won ? '时间到！成功存活' : '生命耗尽';
  const bestLine = best && best.score === s.score
    ? '<strong>新纪录！</strong>'
    : '最佳得分 <strong>' + (settings.best[DIFFICULTY] ? settings.best[DIFFICULTY].score : 0) + '</strong>';
  el.overlayText.innerHTML =
    '本局得分 <strong>' + s.score + '</strong>，收集 <strong>' + s.collected + '</strong> 个宝石，' +
    '存活 <strong>' + (timeMs / 1000).toFixed(1) + '</strong> 秒。<br>' + bestLine;
  el.showResult.hidden = false;
  openOverlay();
  if (won) sfx.win(); else sfx.mismatch();
}

function openOverlay() {
  el.overlay.hidden = false;
  el.overlayAgain.focus();
}

function closeOverlay() {
  el.overlay.hidden = true;
  if (!ended) el.overlayAgain.focus();
  else el.showResult.focus();
}

el.overlayAgain.addEventListener('click', () => {
  beginGame();
  canvas.focus();
});
el.overlayClose.addEventListener('click', closeOverlay);
el.showResult.addEventListener('click', openOverlay);
el.overlay.addEventListener('keydown', (e) => trapFocus(el.overlay, e));

/* ---------------- 渲染 ---------------- */

function drawBackground() {
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let x = 40; x < WORLD.w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, WORLD.h);
    ctx.stroke();
  }
  for (let y = 40; y < WORLD.h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WORLD.w, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawItems(now) {
  for (const it of game.state.items) {
    const pulse = 1 + Math.sin(now / 260 + it.phase) * 0.12;
    const r = it.r * pulse;
    const grad = ctx.createRadialGradient(it.x, it.y, 1, it.x, it.y, r * 2.1);
    grad.addColorStop(0, 'rgba(86,214,198,0.55)');
    grad.addColorStop(1, 'rgba(86,214,198,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(it.x, it.y, r * 2.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#56d6c6';
    ctx.beginPath();
    ctx.arc(it.x, it.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.beginPath();
    ctx.arc(it.x - r * 0.3, it.y - r * 0.3, r * 0.34, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawObstacles(now) {
  for (const o of game.state.obstacles) {
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.spin + now / 1400);
    const grad = ctx.createLinearGradient(-o.r, -o.r, o.r, o.r);
    grad.addColorStop(0, '#8b5cf6');
    grad.addColorStop(1, '#4b5bd6');
    ctx.fillStyle = grad;
    ctx.shadowColor = 'rgba(139,92,246,0.55)';
    ctx.shadowBlur = 16;
    const s = o.r * 1.7;
    const radius = 5;
    ctx.beginPath();
    ctx.moveTo(-s / 2 + radius, -s / 2);
    ctx.arcTo(s / 2, -s / 2, s / 2, s / 2, radius);
    ctx.arcTo(s / 2, s / 2, -s / 2, s / 2, radius);
    ctx.arcTo(-s / 2, s / 2, -s / 2, -s / 2, radius);
    ctx.arcTo(-s / 2, -s / 2, s / 2, -s / 2, radius);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(0, 0, o.r * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawPlayer(now) {
  const p = game.state.player;
  const invuln = game.state.elapsedMs < p.invulnerableUntil;
  if (invuln && Math.floor(now / 90) % 2 === 0) return;

  const grad = ctx.createLinearGradient(p.x - p.r, p.y - p.r, p.x + p.r, p.y + p.r);
  grad.addColorStop(0, '#7c8cff');
  grad.addColorStop(1, '#9a6bff');
  ctx.fillStyle = grad;
  ctx.shadowColor = 'rgba(124,140,255,0.7)';
  ctx.shadowBlur = 18;
  const s = p.r * 1.8;
  const radius = 6;
  ctx.beginPath();
  ctx.moveTo(p.x - s / 2 + radius, p.y - s / 2);
  ctx.arcTo(p.x + s / 2, p.y - s / 2, p.x + s / 2, p.y + s / 2, radius);
  ctx.arcTo(p.x + s / 2, p.y + s / 2, p.x - s / 2, p.y + s / 2, radius);
  ctx.arcTo(p.x - s / 2, p.y + s / 2, p.x - s / 2, p.y - s / 2, radius);
  ctx.arcTo(p.x - s / 2, p.y - s / 2, p.x + s / 2, p.y - s / 2, radius);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.beginPath();
  ctx.arc(p.x - p.r * 0.3, p.y - p.r * 0.35, p.r * 0.26, 0, Math.PI * 2);
  ctx.fill();
}

function spawnParticles(x, y, color, count) {
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 110;
    particles.push({
      x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      color: color,
    });
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.x += p.vx * (dt / 1000);
    p.y += p.vy * (dt / 1000);
    p.life -= dt / 600;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

function drawParticles() {
  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3.2 * p.life + 1, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function render(now) {
  ctx.setTransform(canvas.width / WORLD.w, 0, 0, canvas.height / WORLD.h, 0, 0);
  ctx.clearRect(0, 0, WORLD.w, WORLD.h);
  drawBackground();
  drawItems(now);
  drawObstacles(now);
  drawPlayer(now);
  drawParticles();
}

/* ---------------- HUD ---------------- */

function renderHud() {
  const s = game.state;
  el.time.textContent = String(Math.ceil(s.timeLeftMs / 1000));
  el.score.textContent = String(s.score);
  const hearts = [];
  for (let i = 0; i < 3; i += 1) {
    hearts.push(i < s.lives ? '❤' : '<span class="is-lost">❤</span>');
  }
  el.lives.innerHTML = hearts.join('');
}

/* ---------------- 主循环 ---------------- */

function frame(now) {
  const dt = Math.min(50, now - lastFrame);
  lastFrame = now;

  if (started && !ended) {
    const keys = directionFromKeys();
    if (!pointerActive || keys.x !== 0 || keys.y !== 0) game.setDirection(keys.x, keys.y);
    const result = game.tick(dt);
    for (const ev of game.drainEvents()) {
      if (ev.type === 'PICKUP') {
        spawnParticles(ev.x, ev.y, '#56d6c6', 10);
        sfx.match();
      } else if (ev.type === 'HIT') {
        spawnParticles(ev.x, ev.y, '#fb7185', 14);
        sfx.mismatch();
      }
    }
    if (result.type === 'GAMEOVER') endGame(result.reason);
  }

  updateParticles(dt);
  render(now);
  renderHud();
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

/* 调试句柄 */
window.dodgeCollect = {
  get state() { return game.state; },
  start: beginGame,
  move: (x, y) => game.setDirection(x, y),
};

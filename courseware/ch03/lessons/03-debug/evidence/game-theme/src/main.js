/** 渲染层 + 输入 + 主循环。与 game-core.js 的纯逻辑分离。 */

/* game-core.js / storage.js / sound.js / ui.js 以普通 <script> 先后加载，
   共享全局作用域，这样直接双击 index.html（file:// 协议）也能运行。 */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 旧浏览器没有 roundRect 时的兜底
if (typeof CanvasRenderingContext2D !== 'undefined' &&
    !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };
}

const el = {
  time: document.getElementById('stat-time'),
  score: document.getElementById('stat-score'),
  lives: document.getElementById('stat-lives'),
  overlay: document.getElementById('overlay'),
  overlayEmoji: document.getElementById('overlay-emoji'),
  overlayTitle: document.getElementById('overlay-title'),
  overlayText: document.getElementById('overlay-text'),
  overlayStats: document.getElementById('overlay-stats'),
  overlayBest: document.getElementById('overlay-best'),
  finalScore: document.getElementById('final-score'),
  finalGems: document.getElementById('final-gems'),
  finalTime: document.getElementById('final-time'),
  primaryBtn: document.getElementById('primary-btn'),
  soundToggle: document.getElementById('sound-toggle'),
  footer: document.querySelector('.app__footer'),
  app: document.querySelector('.app'),
};

const settings = loadSettings();
setSoundEnabled(settings.sound);

let state = createState();
let rafId = null;
let lastTs = 0;
let particles = [];
let focusBeforeOverlay = null;

const input = { up: false, down: false, left: false, right: false };

/* ---------------- 音效开关 ---------------- */

function syncSoundToggle() {
  setToggleLabel(el.soundToggle, settings.sound, '🔊 音效', '🔇 静音');
}

function toggleSound() {
  settings.sound = !settings.sound;
  setSoundEnabled(settings.sound);
  saveSettings(settings);
  syncSoundToggle();
  if (settings.sound) sfx.gem();
}

el.soundToggle.addEventListener('click', toggleSound);

/* ---------------- 浮层 ---------------- */

function openOverlay({ emoji, title, text, button, stats, best }) {
  focusBeforeOverlay = document.activeElement;
  el.overlayEmoji.textContent = emoji;
  el.overlayTitle.textContent = title;
  el.overlayText.innerHTML = text;
  el.primaryBtn.textContent = button;
  el.overlayStats.hidden = !stats;
  el.overlayBest.hidden = !best;
  el.overlay.hidden = false;
  el.primaryBtn.focus();
}

function closeOverlay() {
  el.overlay.hidden = true;
  if (focusBeforeOverlay && typeof focusBeforeOverlay.focus === 'function') {
    focusBeforeOverlay.focus();
  }
}

el.overlay.addEventListener('keydown', (e) => {
  trapFocus(el.overlay, e);
  // Esc 关闭结算浮层；按 Enter 或点击场地即可再来一局
  if (e.key === 'Escape') closeOverlay();
});

/* ---------------- 游戏流程 ---------------- */

function startRound() {
  stopLoop();
  state = createState();
  state.phase = 'playing';
  particles = [];
  clearInput();
  closeOverlay();
  el.footer.hidden = true;
  el.app.classList.add('is-playing');
  el.overlay.hidden = true;
  canvas.focus();
  updateHud();
  lastTs = performance.now();
  rafId = requestAnimationFrame(loop);
}

function endRound() {
  stopLoop();
  el.footer.hidden = false;
  el.app.classList.remove('is-playing');
  const won = state.reason === 'time';
  const best = recordBest(settings.best, { score: state.score, gems: state.gems });
  saveSettings(settings);

  el.finalScore.textContent = String(state.score);
  el.finalGems.textContent = String(state.gems);
  el.finalTime.textContent = formatTime(state.elapsed * 1000);

  el.overlayBest.textContent =
    best.score > 0 ? '🏆 最佳得分 ' + best.score + ' 分（收集 ' + best.gems + '）' : '';

  openOverlay({
    emoji: won ? '🏆' : '💔',
    title: won ? '时间到！' : '生命耗尽',
    text: won
      ? '你成功撑过了 60 秒，场上还剩 <strong>' + state.lives + '</strong> 条生命。'
      : '可惜，撞上了太多障碍。再来一次试试手速。',
    button: '再玩一局',
    stats: true,
    best: true,
  });
}

el.primaryBtn.addEventListener('click', () => {
  if (state.phase === 'playing') return;
  unlockSound();
  startRound();
});

/* ---------------- 主循环 ---------------- */

function loop(ts) {
  const dt = Math.min(0.05, (ts - lastTs) / 1000);
  lastTs = ts;

  const events = step(state, dt, input);
  for (const ev of events) {
    if (ev === 'gem') {
      sfx.gem();
      spawnParticles(state.player.x, state.player.y, '#7ce7d8', 8);
    } else if (ev === 'hit') {
      sfx.hit();
      spawnParticles(state.player.x, state.player.y, '#fb7185', 16);
    } else if (ev === 'end') {
      if (state.reason === 'time') sfx.win();
      else sfx.lose();
    }
  }

  updateParticles(dt);
  updateHud();
  render();

  if (state.phase === 'playing') {
    rafId = requestAnimationFrame(loop);
  } else {
    rafId = null;
    endRound();
  }
}

function stopLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

/* ---------------- HUD ---------------- */

function updateHud() {
  const left = Math.max(0, Math.ceil(ROUND_SECONDS - state.elapsed));
  el.time.textContent = String(left);
  el.score.textContent = String(state.score);
  const filled = Math.max(0, state.lives);
  el.lives.textContent = '❤️'.repeat(filled) + '🤍'.repeat(START_LIVES - filled);
  el.lives.setAttribute('aria-label', '生命 ' + filled + ' 点');
}

/* ---------------- 粒子 ---------------- */

function spawnParticles(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 60 + Math.random() * 160;
    particles.push({
      x,
      y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp,
      life: 0.5 + Math.random() * 0.3,
      max: 0.8,
      size: 2 + Math.random() * 3,
      color,
    });
  }
}

function updateParticles(dt) {
  for (const p of particles) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.94;
    p.vy *= 0.94;
    p.life -= dt;
  }
  particles = particles.filter((p) => p.life > 0);
}

/* ---------------- 渲染 ---------------- */

function render() {
  const shake = state.shake;
  const ox = shake > 0 ? (Math.random() - 0.5) * shake * 22 : 0;
  const oy = shake > 0 ? (Math.random() - 0.5) * shake * 22 : 0;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ARENA.w, ARENA.h);
  ctx.save();
  ctx.translate(ox, oy);

  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= ARENA.w; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ARENA.h);
    ctx.stroke();
  }
  for (let y = 0; y <= ARENA.h; y += 60) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(ARENA.w, y);
    ctx.stroke();
  }

  for (const g of state.gemItems) {
    const pulse = 1 + Math.sin(g.phase) * 0.12;
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(Math.PI / 4);
    const r = (g.r * pulse) / 1.4;
    const grad = ctx.createLinearGradient(-r, -r, r, r);
    grad.addColorStop(0, '#7ce7d8');
    grad.addColorStop(1, '#7c8cff');
    ctx.fillStyle = grad;
    ctx.shadowColor = 'rgba(124,231,216,0.6)';
    ctx.shadowBlur = 16;
    ctx.fillRect(-r, -r, r * 2, r * 2);
    ctx.restore();
  }

  for (const h of state.hazards) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate(h.angle);
    const s = h.r * 1.7;
    const grad = ctx.createLinearGradient(-s / 2, -s / 2, s / 2, s / 2);
    grad.addColorStop(0, '#4b5bd6');
    grad.addColorStop(1, '#8b5cf6');
    ctx.fillStyle = grad;
    ctx.shadowColor = 'rgba(139,92,246,0.55)';
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.roundRect(-s / 2, -s / 2, s, s, 8);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  const p = state.player;
  ctx.save();
  ctx.translate(p.x, p.y);
  if (p.invuln > 0 && Math.floor(p.invuln * 12) % 2 === 0) {
    ctx.globalAlpha = 0.45;
  }
  const pgrad = ctx.createRadialGradient(0, 0, 2, 0, 0, p.r * 2.1);
  pgrad.addColorStop(0, '#ffffff');
  pgrad.addColorStop(0.45, '#56d6c6');
  pgrad.addColorStop(1, 'rgba(86,214,198,0.05)');
  ctx.fillStyle = pgrad;
  ctx.shadowColor = 'rgba(86,214,198,0.7)';
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.arc(0, 0, p.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  for (const q of particles) {
    ctx.globalAlpha = Math.max(0, q.life / q.max);
    ctx.fillStyle = q.color;
    ctx.beginPath();
    ctx.arc(q.x, q.y, q.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  if (state.flash > 0) {
    ctx.fillStyle = 'rgba(251,113,133,' + (state.flash * 0.32).toFixed(3) + ')';
    ctx.fillRect(0, 0, ARENA.w, ARENA.h);
  }

  ctx.restore();
}

/* ---------------- 输入 ---------------- */

const KEYMAP = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  w: 'up', s: 'down', a: 'left', d: 'right',
  W: 'up', S: 'down', A: 'left', D: 'right',
};

function clearInput() {
  input.up = input.down = input.left = input.right = false;
}

window.addEventListener('keydown', (e) => {
  const dir = KEYMAP[e.key];
  if (dir) {
    e.preventDefault();
    input[dir] = true;
    return;
  }
  if (e.key === 'Enter' && state.phase !== 'playing') {
    startRound();
  }
  if (e.key === 'm' || e.key === 'M') {
    toggleSound();
  }
});

window.addEventListener('keyup', (e) => {
  const dir = KEYMAP[e.key];
  if (dir) {
    e.preventDefault();
    input[dir] = false;
  }
});

window.addEventListener('blur', clearInput);

let pointerActive = false;
let pointerId = null;

function updatePointer(e) {
  const rect = canvas.getBoundingClientRect();
  const tx = ((e.clientX - rect.left) / rect.width) * ARENA.w;
  const ty = ((e.clientY - rect.top) / rect.height) * ARENA.h;
  const p = state.player;
  const dx = tx - p.x;
  const dy = ty - p.y;
  input.left = dx < -8;
  input.right = dx > 8;
  input.up = dy < -8;
  input.down = dy > 8;
}

canvas.addEventListener('pointerdown', (e) => {
  if (state.phase !== 'playing') {
    startRound();
    return;
  }
  pointerActive = true;
  pointerId = e.pointerId;
  canvas.setPointerCapture(e.pointerId);
  updatePointer(e);
});

canvas.addEventListener('pointermove', (e) => {
  if (!pointerActive || e.pointerId !== pointerId) return;
  updatePointer(e);
});

const endPointer = (e) => {
  if (e.pointerId !== pointerId) return;
  pointerActive = false;
  pointerId = null;
  clearInput();
};

canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener('lostpointercapture', endPointer);

/* ---------------- 初始化 ---------------- */

syncSoundToggle();
// 开场说明浮层：主按钮是「开始游戏」，不是重开按钮；
// 重开（再玩一局）只出现在结算浮层。
openOverlay({
  emoji: '💎',
  title: '闪避收集 · 60 秒',
  text: '方向键或 <strong>WASD</strong> 移动，躲开紫色障碍物，收集水晶 💎 得分。每撞一次扣一条生命，60 秒结束或生命耗尽即结算。',
  button: '开始游戏',
  stats: false,
  best: false,
});
render();

// UI 层：只负责渲染与输入，不直接改游戏状态（状态都在 game.js 里）。
import { createGame, start, reset, update, snapshot, WORLD, RULES } from './game.js';

const state = createGame();

const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
const el = {
  time: document.getElementById('stat-time'),
  score: document.getElementById('stat-score'),
  lives: document.getElementById('stat-lives'),
  tip: document.getElementById('field-tip'),
  overlay: document.getElementById('overlay'),
  overlayTitle: document.getElementById('overlay-title'),
  overlayText: document.getElementById('overlay-text'),
  overlayEmoji: document.getElementById('overlay-emoji'),
  again: document.getElementById('overlay-again'),
};

/* ---------------- 尺寸 / DPR ---------------- */
let scale = 1;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cssW = canvas.clientWidth || WORLD.w;
  const cssH = cssW * (WORLD.h / WORLD.w);
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  canvas.style.height = cssH + 'px';
  scale = canvas.width / WORLD.w;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}
if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
window.addEventListener('resize', resize);

/* ---------------- 输入 ---------------- */
const keys = new Set();
const KEYMAP = {
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
};

function readDirection() {
  let dirX = 0, dirY = 0;
  if (keys.has('left')) dirX -= 1;
  if (keys.has('right')) dirX += 1;
  if (keys.has('up')) dirY -= 1;
  if (keys.has('down')) dirY += 1;
  return { dirX, dirY };
}

let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function beep(freq, dur, type = 'sine', gain = 0.06) {
  const ac = ensureAudio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(gain, ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + dur);
  osc.connect(g).connect(ac.destination);
  osc.start();
  osc.stop(ac.currentTime + dur);
}

window.addEventListener('keydown', (e) => {
  const dir = KEYMAP[e.code];
  if (dir) {
    e.preventDefault();
    ensureAudio();
    keys.add(dir);
    if (state.status === 'ready') handleEvents(start(state));
    return;
  }
  if (e.code === 'Escape' && !el.overlay.hidden) {
    e.preventDefault();
    restart();
  }
});

window.addEventListener('keyup', (e) => {
  const dir = KEYMAP[e.code];
  if (dir) { e.preventDefault(); keys.delete(dir); }
});

window.addEventListener('blur', () => keys.clear());

// 触屏 / 鼠标：按住朝指针方向走
let pointerTarget = null;
function toWorld(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((e.clientX - rect.left) / rect.width) * WORLD.w,
    y: ((e.clientY - rect.top) / rect.height) * WORLD.h,
  };
}
canvas.addEventListener('pointerdown', (e) => {
  ensureAudio();
  pointerTarget = toWorld(e);
  if (state.status === 'ready') handleEvents(start(state));
  canvas.setPointerCapture?.(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (pointerTarget === null) return;
  pointerTarget = toWorld(e);
});
canvas.addEventListener('pointerup', () => { pointerTarget = null; });
canvas.addEventListener('pointercancel', () => { pointerTarget = null; });

/* ---------------- 渲染 ---------------- */
const fx = []; // 纯视觉粒子，不参与游戏状态

function draw() {
  const W = WORLD.w, H = WORLD.h;
  ctx.clearRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(255,255,255,.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  ctx.strokeStyle = 'rgba(154,107,255,.55)';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, W - 2, H - 2);

  // 拾取物：青色菱形
  for (const g of state.pickups) {
    const pulse = 1 + Math.sin(state.elapsed * 4 + g.phase) * 0.12;
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(Math.PI / 4);
    ctx.shadowColor = 'rgba(86,214,198,.85)';
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#56d6c6';
    const s = g.r * pulse;
    ctx.fillRect(-s / 2, -s / 2, s, s);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,.75)';
    ctx.fillRect(-s / 4, -s / 4, s / 2, s / 2);
    ctx.restore();
  }

  // 障碍：紫色六边形
  for (const o of state.obstacles) {
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.angle);
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i;
      const px = Math.cos(a) * o.r;
      const py = Math.sin(a) * o.r;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(154,107,255,.32)';
    ctx.strokeStyle = '#9a6bff';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(154,107,255,.75)';
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // 玩家
  const p = state.player;
  const blink = p.invuln > 0 && Math.floor(state.elapsed * 14) % 2 === 0;
  if (!blink) {
    ctx.save();
    ctx.shadowColor = 'rgba(124,140,255,.9)';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#7c8cff';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#eef1ff';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 0.42, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 视觉特效
  for (let i = fx.length - 1; i >= 0; i--) {
    const f = fx[i];
    f.life -= 1 / 60;
    if (f.life <= 0) { fx.splice(i, 1); continue; }
    const t = 1 - f.life / f.max;
    ctx.save();
    ctx.globalAlpha = Math.max(0, 1 - t);
    ctx.strokeStyle = f.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(f.x, f.y, 8 + t * 46, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

/* ---------------- HUD（每次整体重算） ---------------- */
function renderStats() {
  el.time.textContent = String(Math.ceil(state.timeLeft));
  el.score.textContent = String(state.score);
  const lives = Math.max(0, state.lives);
  el.lives.textContent = '♥'.repeat(lives) + '·'.repeat(Math.max(0, RULES.lives - lives));
  el.lives.classList.toggle('is-low', lives <= 1 && state.status !== 'over');
}

/* ---------------- 事件编排 ---------------- */
function handleEvents(events) {
  for (const ev of events) {
    if (ev.type === 'start') {
      el.tip.hidden = true;
      el.overlay.hidden = true;
    } else if (ev.type === 'pickup') {
      fx.push({ x: ev.x, y: ev.y, life: 0.6, max: 0.6, color: '#56d6c6' });
      beep(760, 0.12, 'triangle', 0.05);
    } else if (ev.type === 'hit') {
      fx.push({ x: state.player.x, y: state.player.y, life: 0.6, max: 0.6, color: '#fb7185' });
      canvas.classList.remove('is-hit');
      void canvas.offsetWidth; // 重启动画
      canvas.classList.add('is-hit');
      beep(180, 0.22, 'sawtooth', 0.06);
    } else if (ev.type === 'end') {
      if (ev.reason === 'time') {
        el.overlayEmoji.textContent = '🎉';
        el.overlayTitle.textContent = '时间到！';
        el.overlayText.textContent = '你撑过了完整的 60 秒。';
        beep(880, 0.3, 'square', 0.05);
      } else {
        el.overlayEmoji.textContent = '💥';
        el.overlayTitle.textContent = '生命耗尽';
        el.overlayText.textContent = '能量风暴吞没了你。';
        beep(140, 0.3, 'square', 0.05);
      }
      el.overlayText.textContent += '\n最终得分 ' + state.score + ' 分';
      el.overlay.hidden = false;
      el.again.focus();
    }
  }
}

function restart() {
  keys.clear();
  pointerTarget = null;
  fx.length = 0;
  canvas.classList.remove('is-hit');
  handleEvents(reset(state));
  renderStats();
}

el.again.addEventListener('click', restart);

// 浮层内焦点循环（Tab / Shift+Tab）
el.overlay.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const focusables = el.overlay.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ---------------- 主循环 ---------------- */
let last = performance.now();
function frame(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;

  let dir = readDirection();
  if (dir.dirX === 0 && dir.dirY === 0 && pointerTarget) {
    const dx = pointerTarget.x - state.player.x;
    const dy = pointerTarget.y - state.player.y;
    const d = Math.hypot(dx, dy);
    if (d > 6) dir = { dirX: dx / d, dirY: dy / d };
  }

  handleEvents(update(state, dt, dir));
  renderStats();
  draw();
  requestAnimationFrame(frame);
}

resize();
renderStats();
requestAnimationFrame(frame);

// 只读调试句柄（供自动化检查读取）
window.dodge = {
  state,
  snapshot: () => snapshot(state),
  restart,
};

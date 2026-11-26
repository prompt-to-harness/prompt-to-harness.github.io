/**
 * 60 秒躲避与收集 —— 玩法脚本。
 *
 * 场地是画布类（非网格），所以用 .stage + .stage-canvas 容器。
 * 玩家用方向键 / WASD 移动，躲开障碍，收集宝石得分；
 * 撞到障碍扣一条命，时间到或生命耗尽时结算，浮层里可以再玩一局。
 */

import { shell } from './shell.js';

const W = 960;          // 逻辑宽度
const H = 600;          // 逻辑高度
const DURATION_MS = 60000; // 一局 60 秒
const START_LIVES = 3;
const PLAYER_R = 15;
const PLAYER_SPEED = 330;   // px / 秒
const GEM_R = 13;
const GEM_SCORE = 10;
const GEM_COUNT = 6;
const INVULN_MS = 1400;     // 撞到障碍后的无敌时间
const RESPAWN_DELAY = 450;  // 宝石重生延迟

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const keys = new Set();
const pointer = { active: false, x: 0, y: 0 };

let player;
let gems = [];
let obstacles = [];
let particles = [];
let score = 0;
let collected = 0;
let lives = START_LIVES;
let running = false;
let over = false;
let started = false;
let endReason = '';
let invulnUntil = 0;
let shake = 0;
let lastFrame = 0;
let rafId = 0;

/* ------------------------------------------------------------------ */
/* 工具                                                                 */
/* ------------------------------------------------------------------ */

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

function circleHit(a, b, radius) {
  return dist(a, b) < radius;
}

/* ------------------------------------------------------------------ */
/* 关卡生成                                                             */
/* ------------------------------------------------------------------ */

function spawnGem() {
  let p = { x: rand(60, W - 60), y: rand(60, H - 60) };
  // 不要贴着玩家出生
  let guard = 0;
  while (player && dist(p, player) < 140 && guard < 30) {
    p = { x: rand(60, W - 60), y: rand(60, H - 60) };
    guard += 1;
  }
  return {
    x: p.x,
    y: p.y,
    r: GEM_R,
    alive: true,
    respawnAt: 0,
    phase: rand(0, Math.PI * 2),
  };
}

function spawnObstacle(index) {
  const fromLeft = index % 2 === 0;
  const x = fromLeft ? -40 : W + 40;
  const y = rand(50, H - 50);
  return {
    x,
    y,
    r: rand(20, 30),
    vx: (fromLeft ? 1 : -1) * rand(70, 120),
    vy: rand(-40, 40),
    spin: rand(-2.2, 2.2),
    angle: rand(0, Math.PI * 2),
    hue: index % 3,
  };
}

function resetWorld() {
  score = 0;
  collected = 0;
  lives = START_LIVES;
  over = false;
  endReason = '';
  invulnUntil = 0;
  shake = 0;
  particles = [];
  obstacles = [];
  for (let i = 0; i < 8; i += 1) obstacles.push(spawnObstacle(i));
  player = { x: W / 2, y: H / 2, r: PLAYER_R, angle: 0 };
  gems = [];
  for (let i = 0; i < GEM_COUNT; i += 1) gems.push(spawnGem());
  shell.setStat('score', '0');
  shell.setStat('lives', String(lives));
}

/* ------------------------------------------------------------------ */
/* 特效                                                                 */
/* ------------------------------------------------------------------ */

function burst(x, y, color, count) {
  for (let i = 0; i < count; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(40, 190);
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      size: rand(2, 5),
      color,
    });
  }
}

/* ------------------------------------------------------------------ */
/* 输入                                                                 */
/* ------------------------------------------------------------------ */

const MOVE_KEYS = {
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
};

window.addEventListener('keydown', (event) => {
  const dir = MOVE_KEYS[event.code];
  if (dir) {
    event.preventDefault();
    keys.add(dir);
    beginIfNeeded();
  }
  if (event.code === 'Space' || event.code === 'Enter') {
    if (over) {
      event.preventDefault();
      shell.newGame();
    } else {
      beginIfNeeded();
    }
  }
});

window.addEventListener('keyup', (event) => {
  const dir = MOVE_KEYS[event.code];
  if (dir) keys.delete(dir);
});

window.addEventListener('blur', () => keys.clear());

// 触摸 / 鼠标：按住场地即可朝指针方向移动
canvas.addEventListener('pointerdown', (event) => {
  pointer.active = true;
  updatePointer(event);
  beginIfNeeded();
  canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener('pointermove', (event) => {
  if (pointer.active) updatePointer(event);
});
canvas.addEventListener('pointerup', () => { pointer.active = false; });
canvas.addEventListener('pointercancel', () => { pointer.active = false; });

function updatePointer(event) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * W;
  pointer.y = ((event.clientY - rect.top) / rect.height) * H;
}

/* ------------------------------------------------------------------ */
/* 游戏流程                                                             */
/* ------------------------------------------------------------------ */

function beginIfNeeded() {
  if (started) return;
  started = true;
  running = true;
  shell.resetTimer();
  shell.setStat('time', formatRemaining(0));
  shell.startTimer(formatRemaining);
}

/** 时间显示为「剩余秒数」。 */
function formatRemaining(elapsed) {
  const left = Math.max(0, DURATION_MS - elapsed);
  return Math.ceil(left / 1000) + ' 秒';
}

function endGame(reason) {
  if (over) return;
  over = true;
  running = false;
  endReason = reason;
  shell.stopTimer(formatRemaining);

  const timeMs = shell.elapsedMs();
  const { best, isRecord } = shell.recordResult(score, timeMs);
  const bestLine = best
    ? '历史最佳：<strong>' + best.score + ' 分</strong>'
    : '';
  const recordLine = isRecord ? '<strong>🏅 新纪录！</strong>' : '';

  if (reason === 'time') {
    shell.sfx.win();
  } else {
    shell.sfx.mismatch();
  }

  shell.showResult({
    emoji: reason === 'time' ? '🎉' : '💔',
    title: reason === 'time' ? '时间到！' : '生命耗尽！',
    lines: [
      '本局得分 <strong>' + score + '</strong>，收集 <strong>' + collected + '</strong> 枚宝石。',
      recordLine,
      bestLine,
    ],
    primary: { label: '↻ 再玩一局', onClick: () => shell.newGame() },
    secondary: { label: '关闭', onClick: () => shell.hideResult() },
  });
}

function loseLife() {
  lives -= 1;
  shell.setStat('lives', String(lives));
  invulnUntil = performance.now() + INVULN_MS;
  shake = 14;
  burst(player.x, player.y, '#fb7185', 22);
  shell.sfx.mismatch();
  if (lives <= 0) {
    endGame('lives');
  }
}

/* ------------------------------------------------------------------ */
/* 更新                                                                 */
/* ------------------------------------------------------------------ */

function update(dt, now) {
  if (!running) {
    updateParticles(dt);
    return;
  }

  // 玩家移动
  let dx = 0;
  let dy = 0;
  if (keys.has('left')) dx -= 1;
  if (keys.has('right')) dx += 1;
  if (keys.has('up')) dy -= 1;
  if (keys.has('down')) dy += 1;

  if (dx === 0 && dy === 0 && pointer.active) {
    const pdx = pointer.x - player.x;
    const pdy = pointer.y - player.y;
    const d = Math.hypot(pdx, pdy);
    if (d > 6) {
      dx = pdx / d;
      dy = pdy / d;
    }
  }

  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy) || 1;
    player.x += (dx / len) * PLAYER_SPEED * dt;
    player.y += (dy / len) * PLAYER_SPEED * dt;
    player.angle = Math.atan2(dy, dx);
  }
  player.x = clamp(player.x, player.r + 6, W - player.r - 6);
  player.y = clamp(player.y, player.r + 6, H - player.r - 6);

  // 障碍：飘移 + 反弹 + 自转
  const speedBoost = 1 + (1 - remainingRatio(now)) * 0.55; // 后半程略微加速
  for (const o of obstacles) {
    o.x += o.vx * speedBoost * dt;
    o.y += o.vy * speedBoost * dt;
    o.angle += o.spin * dt;
    if (o.x < o.r || o.x > W - o.r) {
      o.vx *= -1;
      o.x = clamp(o.x, o.r, W - o.r);
    }
    if (o.y < o.r || o.y > H - o.r) {
      o.vy *= -1;
      o.y = clamp(o.y, o.r, H - o.r);
    }
  }

  // 宝石
  for (const g of gems) {
    g.phase += dt * 2.2;
    if (!g.alive && now >= g.respawnAt) {
      const fresh = spawnGem();
      g.x = fresh.x;
      g.y = fresh.y;
      g.alive = true;
    }
    if (g.alive && circleHit(player, g, player.r + g.r * 0.75)) {
      g.alive = false;
      g.respawnAt = now + RESPAWN_DELAY;
      score += GEM_SCORE;
      collected += 1;
      shell.setStat('score', String(score));
      shell.sfx.match();
      burst(g.x, g.y, '#56d6c6', 16);
    }
  }

  // 碰撞
  if (now >= invulnUntil) {
    for (const o of obstacles) {
      if (circleHit(player, o, player.r * 0.8 + o.r * 0.8)) {
        loseLife();
        break;
      }
    }
  }

  updateParticles(dt);

  if (shake > 0) shake = Math.max(0, shake - dt * 40);

  // 时间到
  if (!over && shell.elapsedMs() >= DURATION_MS) {
    endGame('time');
  }
}

function remainingRatio(now) {
  const left = DURATION_MS - shell.elapsedMs();
  return clamp(left / DURATION_MS, 0, 1);
}

function updateParticles(dt) {
  for (const p of particles) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.94;
    p.vy *= 0.94;
    p.life -= dt * 1.8;
  }
  particles = particles.filter((p) => p.life > 0);
}

/* ------------------------------------------------------------------ */
/* 绘制                                                                 */
/* ------------------------------------------------------------------ */

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.setTransform(canvas.width / W, 0, 0, canvas.height / H, 0, 0);
}

function draw(now) {
  ctx.save();
  if (shake > 0) {
    ctx.translate(rand(-shake, shake) * 0.4, rand(-shake, shake) * 0.4);
  }

  // 场地背景
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, 'rgba(124,140,255,0.16)');
  bg.addColorStop(1, 'rgba(154,107,255,0.05)');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 48) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y <= H; y += 48) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  // 宝石
  for (const g of gems) {
    if (!g.alive) continue;
    const pulse = 1 + Math.sin(g.phase) * 0.12;
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(g.phase * 0.4);
    ctx.shadowColor = 'rgba(86,214,198,0.9)';
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#56d6c6';
    ctx.beginPath();
    const r = g.r * pulse;
    ctx.moveTo(0, -r);
    ctx.lineTo(r, 0);
    ctx.lineTo(0, r);
    ctx.lineTo(-r, 0);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.45);
    ctx.lineTo(r * 0.32, 0);
    ctx.lineTo(0, r * 0.1);
    ctx.lineTo(-r * 0.32, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // 障碍
  for (const o of obstacles) {
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.angle);
    const palette = ['#fb7185', '#f472b6', '#f59e0b'];
    ctx.shadowColor = 'rgba(251,113,133,0.55)';
    ctx.shadowBlur = 16;
    ctx.fillStyle = palette[o.hue];
    ctx.strokeStyle = 'rgba(255,255,255,0.65)';
    ctx.lineWidth = 2;
    const spikes = 3 + (o.hue % 3);
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i += 1) {
      const ang = (Math.PI * 2 * i) / (spikes * 2);
      const rad = i % 2 === 0 ? o.r : o.r * 0.62;
      const px = Math.cos(ang) * rad;
      const py = Math.sin(ang) * rad;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // 玩家
  const invulnerable = now < invulnUntil;
  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.rotate(player.angle);
  if (invulnerable) {
    ctx.globalAlpha = 0.45 + Math.sin(now / 60) * 0.25;
  }
  ctx.shadowColor = 'rgba(124,140,255,0.9)';
  ctx.shadowBlur = 18;
  ctx.fillStyle = 'rgba(124,140,255,0.95)';
  ctx.strokeStyle = '#dfe4ff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(-player.r, -player.r, player.r * 2, player.r * 2, 8);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(player.r * 0.35, 0, 4.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 粒子
  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // 开始前的提示
  if (!started) {
    ctx.fillStyle = 'rgba(10,14,32,0.55)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#eef1ff';
    ctx.font = '600 30px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('按 方向键 / WASD 开始移动', W / 2, H / 2);
    ctx.font = '400 18px system-ui, sans-serif';
    ctx.fillStyle = '#a3abcf';
    ctx.fillText('收集宝石得分，躲开尖刺，60 秒后结算', W / 2, H / 2 + 36);
  }

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/* 主循环                                                               */
/* ------------------------------------------------------------------ */

function frame(now) {
  const dt = Math.min(0.05, (now - lastFrame) / 1000 || 0);
  lastFrame = now;
  update(dt, now);
  draw(now);
  rafId = requestAnimationFrame(frame);
}

/* ------------------------------------------------------------------ */
/* 启动                                                                 */
/* ------------------------------------------------------------------ */

shell.init({
  onRestart: () => {
    resetWorld();
    shell.resetTimer();
    shell.setStat('time', formatRemaining(0));
    shell.hideResult();
    started = false;
    running = false;
    lastFrame = performance.now();
  },
});

resetWorld();
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
lastFrame = performance.now();
rafId = requestAnimationFrame(frame);

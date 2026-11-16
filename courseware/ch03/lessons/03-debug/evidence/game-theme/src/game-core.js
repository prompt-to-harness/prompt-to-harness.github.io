/** 纯逻辑层：状态、规则、碰撞。与渲染分离，方便单独推理。 */

const ARENA = { w: 900, h: 560 };
const ROUND_SECONDS = 60;
const START_LIVES = 3;
const PLAYER_R = 16;
const PLAYER_SPEED = 330;
const INVULN_TIME = 2.2;
const GEM_R = 12;
const HAZARD_MIN_R = 16;
const HAZARD_MAX_R = 34;

function createState() {
  return {
    phase: 'ready',
    elapsed: 0,
    score: 0,
    gems: 0,
    lives: START_LIVES,
    player: { x: ARENA.w / 2, y: ARENA.h / 2, r: PLAYER_R, invuln: 0 },
    hazards: [],
    gemItems: [],
    spawnClock: 1.4,
    gemClock: 0,
    shake: 0,
    flash: 0,
    reason: '',
  };
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function spawnHazard(state) {
  const r = rand(HAZARD_MIN_R, HAZARD_MAX_R);
  const speed = rand(60, 120) * (1 + (state.elapsed / ROUND_SECONDS) * 0.7);
  const fromLeft = Math.random() < 0.5;
  const y = rand(r + 6, ARENA.h - r - 6);
  const x = fromLeft ? -r * 2 : ARENA.w + r * 2;
  state.hazards.push({
    x,
    y,
    r,
    vx: (fromLeft ? 1 : -1) * speed,
    vy: rand(-40, 40),
    spin: rand(-2, 2),
    angle: rand(0, Math.PI * 2),
  });
}

function spawnGem(state) {
  if (state.gemItems.length >= 10) return;
  const x = rand(40, ARENA.w - 40);
  const y = rand(40, ARENA.h - 40);
  state.gemItems.push({ x, y, r: GEM_R, phase: rand(0, Math.PI * 2) });
}

/** 前进一帧。dt 单位为秒。返回本帧发生的事件名，便于渲染层做反馈。 */
function step(state, dt, input) {
  const events = [];
  if (state.phase !== 'playing') return events;

  state.elapsed = Math.min(ROUND_SECONDS, state.elapsed + dt);

  const p = state.player;
  const dx = (input.right ? 1 : 0) - (input.left ? 1 : 0);
  const dy = (input.down ? 1 : 0) - (input.up ? 1 : 0);
  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy) || 1;
    p.x += (dx / len) * PLAYER_SPEED * dt;
    p.y += (dy / len) * PLAYER_SPEED * dt;
  }
  p.x = Math.max(p.r, Math.min(ARENA.w - p.r, p.x));
  p.y = Math.max(p.r, Math.min(ARENA.h - p.r, p.y));
  if (p.invuln > 0) p.invuln = Math.max(0, p.invuln - dt);

  for (const h of state.hazards) {
    h.x += h.vx * dt;
    h.y += h.vy * dt;
    h.angle += h.spin * dt;
    if (h.y - h.r < 0 || h.y + h.r > ARENA.h) {
      h.vy *= -1;
      h.y = Math.max(h.r, Math.min(ARENA.h - h.r, h.y));
    }
    if (h.x - h.r > ARENA.w + 60 || h.x + h.r < -60) h.dead = true;
  }
  state.hazards = state.hazards.filter((h) => !h.dead);

  state.spawnClock -= dt;
  if (state.spawnClock <= 0) {
    spawnHazard(state);
    const t = state.elapsed / ROUND_SECONDS;
    state.spawnClock = Math.max(0.6, 1.8 - t * 0.9) * rand(0.8, 1.25);
  }

  state.gemClock -= dt;
  if (state.gemClock <= 0) {
    spawnGem(state);
    state.gemClock = 0.75;
  }

  for (const g of state.gemItems) {
    g.phase += dt * 3;
    if (Math.hypot(g.x - p.x, g.y - p.y) < g.r + p.r) {
      g.dead = true;
      state.gems += 1;
      state.score += 10;
      events.push('gem');
    }
  }
  state.gemItems = state.gemItems.filter((g) => !g.dead);

  if (p.invuln <= 0) {
    for (const h of state.hazards) {
      if (Math.hypot(h.x - p.x, h.y - p.y) < h.r + p.r) {
        h.dead = true;
        state.lives -= 1;
        p.invuln = INVULN_TIME;
        state.shake = 0.45;
        state.flash = 0.4;
        events.push('hit');
        const ang = Math.atan2(p.y - h.y, p.x - h.x) || 0;
        p.x = Math.max(p.r, Math.min(ARENA.w - p.r, p.x + Math.cos(ang) * 26));
        p.y = Math.max(p.r, Math.min(ARENA.h - p.r, p.y + Math.sin(ang) * 26));
        break;
      }
    }
    state.hazards = state.hazards.filter((h) => !h.dead);
  }

  if (state.shake > 0) state.shake = Math.max(0, state.shake - dt);
  if (state.flash > 0) state.flash = Math.max(0, state.flash - dt);

  if (state.lives <= 0) {
    state.phase = 'over';
    state.reason = 'lives';
    events.push('end');
  } else if (state.elapsed >= ROUND_SECONDS) {
    state.phase = 'over';
    state.reason = 'time';
    // 存活到时间结束：每条剩余生命额外奖励 5 分
    state.score += state.lives * 5;
    events.push('end');
  }

  return events;
}

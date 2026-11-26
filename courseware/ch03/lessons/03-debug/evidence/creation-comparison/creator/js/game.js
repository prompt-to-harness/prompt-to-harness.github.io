// 纯逻辑游戏状态机：不碰 DOM，可在 Node 里直接跑单测。

export const WORLD = { w: 960, h: 540 };

export const RULES = Object.freeze({
  duration: 60,      // 一局时长（秒）
  lives: 3,          // 初始生命
  playerRadius: 15,
  playerSpeed: 330,  // 单位/秒
  obstacleMinR: 18,
  obstacleMaxR: 34,
  obstacleSpeed: 70,
  pickupRadius: 12,
  pickupValue: 10,
  maxPickups: 4,
  invuln: 1.2,       // 碰撞后无敌时长（秒）
});

const rand = (a, b) => a + Math.random() * (b - a);

export function createGame() {
  return {
    status: 'ready', // ready | running | over
    reason: '',      // time | lives
    timeLeft: RULES.duration,
    score: 0,
    lives: RULES.lives,
    player: { x: WORLD.w / 2, y: WORLD.h / 2, r: RULES.playerRadius, invuln: 0 },
    obstacles: [],
    pickups: [],
    nextObstacleIn: 1.2,
    nextPickupIn: 0.4,
    elapsed: 0,
  };
}

export function start(state) {
  if (state.status !== 'ready') return [];
  state.status = 'running';
  return [{ type: 'start' }];
}

export function reset(state) {
  const fresh = createGame();
  Object.assign(state, fresh);
  state.status = 'running';
  return [{ type: 'start' }];
}

function spawnObstacle(state) {
  const r = rand(RULES.obstacleMinR, RULES.obstacleMaxR);
  const edge = Math.floor(Math.random() * 4);
  let x, y, vx, vy;
  if (edge === 0) { x = rand(0, WORLD.w); y = -r; vx = rand(-1, 1) * RULES.obstacleSpeed; vy = RULES.obstacleSpeed * rand(0.4, 1); }
  else if (edge === 1) { x = WORLD.w + r; y = rand(0, WORLD.h); vx = -RULES.obstacleSpeed * rand(0.4, 1); vy = rand(-1, 1) * RULES.obstacleSpeed; }
  else if (edge === 2) { x = rand(0, WORLD.w); y = WORLD.h + r; vx = rand(-1, 1) * RULES.obstacleSpeed; vy = -RULES.obstacleSpeed * rand(0.4, 1); }
  else { x = -r; y = rand(0, WORLD.h); vx = RULES.obstacleSpeed * rand(0.4, 1); vy = rand(-1, 1) * RULES.obstacleSpeed; }
  state.obstacles.push({ x, y, r, vx, vy, spin: rand(-1.6, 1.6), angle: rand(0, Math.PI * 2) });
}

function spawnPickup(state) {
  const margin = 40;
  const p = {
    x: rand(margin, WORLD.w - margin),
    y: rand(margin, WORLD.h - margin),
    r: RULES.pickupRadius,
    value: RULES.pickupValue,
    phase: rand(0, Math.PI * 2),
  };
  state.pickups.push(p);
}

/**
 * 推进一帧。input: { dirX, dirY }（-1..1）。
 * 返回事件数组：'start' | 'hit' | 'pickup' | 'end'
 */
export function update(state, dt, input) {
  const events = [];
  if (state.status !== 'running') return events;

  dt = Math.min(dt, 0.05); // 防止切后台回来后瞬移
  state.elapsed += dt;
  state.timeLeft = Math.max(0, state.timeLeft - dt);

  // 难度随时间上升（单一难度，只做内部曲线）
  const progress = 1 - state.timeLeft / RULES.duration;
  const obstacleInterval = 1.5 - 0.85 * progress;

  // 玩家移动
  const p = state.player;
  const len = Math.hypot(input.dirX, input.dirY) || 1;
  p.x += (input.dirX / len) * RULES.playerSpeed * dt;
  p.y += (input.dirY / len) * RULES.playerSpeed * dt;
  p.x = Math.min(WORLD.w - p.r, Math.max(p.r, p.x));
  p.y = Math.min(WORLD.h - p.r, Math.max(p.r, p.y));
  if (p.invuln > 0) p.invuln = Math.max(0, p.invuln - dt);

  // 障碍生成
  state.nextObstacleIn -= dt;
  if (state.nextObstacleIn <= 0) {
    state.nextObstacleIn = obstacleInterval;
    spawnObstacle(state);
    if (Math.random() < 0.25 + 0.35 * progress) spawnObstacle(state);
  }

  // 障碍移动 + 环绕
  for (const o of state.obstacles) {
    o.x += o.vx * dt;
    o.y += o.vy * dt;
    o.angle += o.spin * dt;
    if (o.x < -o.r * 2) o.x = WORLD.w + o.r;
    if (o.x > WORLD.w + o.r * 2) o.x = -o.r;
    if (o.y < -o.r * 2) o.y = WORLD.h + o.r;
    if (o.y > WORLD.h + o.r * 2) o.y = -o.r;
  }

  // 拾取物生成
  state.nextPickupIn -= dt;
  if (state.nextPickupIn <= 0) {
    state.nextPickupIn = 1.0;
    if (state.pickups.length < RULES.maxPickups) spawnPickup(state);
  }

  // 碰撞：障碍扣生命
  if (p.invuln <= 0) {
    for (let i = state.obstacles.length - 1; i >= 0; i--) {
      const o = state.obstacles[i];
      const dx = o.x - p.x;
      const dy = o.y - p.y;
      if (dx * dx + dy * dy <= (o.r + p.r) ** 2) {
        state.obstacles.splice(i, 1);
        state.lives -= 1;
        p.invuln = RULES.invuln;
        events.push({ type: 'hit', lives: state.lives });
        // 撞击后把玩家推开一点，避免贴脸连续判定
        const d = Math.hypot(dx, dy) || 1;
        p.x = Math.min(WORLD.w - p.r, Math.max(p.r, p.x - (dx / d) * (o.r + p.r)));
        p.y = Math.min(WORLD.h - p.r, Math.max(p.r, p.y - (dy / d) * (o.r + p.r)));
        break;
      }
    }
  }

  // 碰撞：拾取得分
  for (let i = state.pickups.length - 1; i >= 0; i--) {
    const g = state.pickups[i];
    const dx = g.x - p.x;
    const dy = g.y - p.y;
    if (dx * dx + dy * dy <= (g.r + p.r) ** 2) {
      state.pickups.splice(i, 1);
      state.score += g.value;
      events.push({ type: 'pickup', points: g.value, x: g.x, y: g.y });
    }
  }

  if (state.lives <= 0) {
    state.status = 'over';
    state.reason = 'lives';
    events.push({ type: 'end', reason: 'lives', score: state.score });
  } else if (state.timeLeft <= 0) {
    state.status = 'over';
    state.reason = 'time';
    events.push({ type: 'end', reason: 'time', score: state.score });
  }

  return events;
}

/** 只读快照，供调试句柄使用 */
export function snapshot(state) {
  return {
    status: state.status,
    reason: state.reason,
    timeLeft: state.timeLeft,
    score: state.score,
    lives: state.lives,
    obstacles: state.obstacles.length,
    pickups: state.pickups.length,
  };
}

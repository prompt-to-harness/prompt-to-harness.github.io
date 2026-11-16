/**
 * 60 秒躲避与收集 —— 纯逻辑核心（无 DOM、无计时器、无存储）。
 * 坐标使用固定的逻辑世界尺寸，渲染层负责缩放。
 */

export const WORLD = { w: 800, h: 500 };

export const CONFIG = {
  durationMs: 60000,
  startLives: 3,
  playerRadius: 13,
  playerSpeed: 250,
  playerAccel: 12,
  itemRadius: 11,
  itemPoints: 10,
  itemSpawnMs: 1100,
  obstacleRadius: 16,
  obstacleSpeed: 78,
  obstacleSpawnMs: 1400,
  maxObstacles: 7,
  invulnerableMs: 1200,
  hitKnockback: 190,
};

const rand = (min, max) => min + Math.random() * (max - min);

export class Game {
  constructor(config = {}) {
    this.config = Object.assign({}, CONFIG, config);
    this.state = this.createState();
  }

  createState() {
    const playerRadius = this.config.playerRadius;
    return {
      status: 'ready',
      reason: null,
      score: 0,
      lives: this.config.startLives,
      timeLeftMs: this.config.durationMs,
      elapsedMs: 0,
      collected: 0,
      hits: 0,
      player: {
        x: WORLD.w / 2,
        y: WORLD.h / 2,
        vx: 0,
        vy: 0,
        r: playerRadius,
        invulnerableUntil: 0,
      },
      direction: { x: 0, y: 0 },
      obstacles: [],
      items: [],
      nextItemAt: 0,
      nextObstacleAt: 0,
      events: [],
    };
  }

  start() {
    const fresh = this.createState();
    fresh.status = 'playing';
    this.state = fresh;
    this.spawnItem();
    return this.state;
  }

  setDirection(x, y) {
    const len = Math.hypot(x, y);
    if (len === 0) {
      this.state.direction.x = 0;
      this.state.direction.y = 0;
      return;
    }
    this.state.direction.x = x / len;
    this.state.direction.y = y / len;
  }

  /** 推进一帧，dt 单位毫秒。 */
  tick(dt) {
    const s = this.state;
    if (s.status !== 'playing') return { type: 'IDLE' };

    const seconds = dt / 1000;
    s.elapsedMs += dt;
    s.timeLeftMs = Math.max(0, this.config.durationMs - s.elapsedMs);

    this.movePlayer(seconds);
    this.moveObstacles(seconds);
    this.checkCollisions();
    this.handleSpawns();

    if (s.lives <= 0) {
      s.status = 'over';
      s.reason = 'dead';
      return { type: 'GAMEOVER', reason: 'dead' };
    }
    if (s.timeLeftMs <= 0) {
      s.status = 'over';
      s.reason = 'time';
      return { type: 'GAMEOVER', reason: 'time' };
    }
    return { type: 'TICK' };
  }

  movePlayer(seconds) {
    const s = this.state;
    const p = s.player;
    const targetVx = s.direction.x * this.config.playerSpeed;
    const targetVy = s.direction.y * this.config.playerSpeed;
    const k = Math.min(1, this.config.playerAccel * seconds);
    p.vx += (targetVx - p.vx) * k;
    p.vy += (targetVy - p.vy) * k;
    p.x += p.vx * seconds;
    p.y += p.vy * seconds;

    const r = p.r;
    if (p.x < r) { p.x = r; p.vx = 0; }
    if (p.x > WORLD.w - r) { p.x = WORLD.w - r; p.vx = 0; }
    if (p.y < r) { p.y = r; p.vy = 0; }
    if (p.y > WORLD.h - r) { p.y = WORLD.h - r; p.vy = 0; }
  }

  moveObstacles(seconds) {
    for (const o of this.state.obstacles) {
      o.x += o.vx * seconds;
      o.y += o.vy * seconds;
      if (o.x - o.r < 0) { o.x = o.r; o.vx = Math.abs(o.vx); }
      if (o.x + o.r > WORLD.w) { o.x = WORLD.w - o.r; o.vx = -Math.abs(o.vx); }
      if (o.y - o.r < 0) { o.y = o.r; o.vy = Math.abs(o.vy); }
      if (o.y + o.r > WORLD.h) { o.y = WORLD.h - o.r; o.vy = -Math.abs(o.vy); }
    }
  }

  handleSpawns() {
    const s = this.state;
    if (s.elapsedMs >= s.nextItemAt) {
      s.nextItemAt = s.elapsedMs + this.config.itemSpawnMs;
      if (s.items.length < 3) this.spawnItem();
    }
    if (s.elapsedMs >= s.nextObstacleAt) {
      s.nextObstacleAt = s.elapsedMs + this.config.obstacleSpawnMs;
      if (s.obstacles.length < this.config.maxObstacles) this.spawnObstacle();
    }
  }

  spawnItem() {
    const s = this.state;
    const r = this.config.itemRadius;
    for (let i = 0; i < 40; i += 1) {
      const x = rand(r + 12, WORLD.w - r - 12);
      const y = rand(r + 12, WORLD.h - r - 12);
      const farFromPlayer = Math.hypot(x - s.player.x, y - s.player.y) > 120;
      const overlap = s.items.some((it) => Math.hypot(it.x - x, it.y - y) < r * 3);
      if (farFromPlayer && !overlap) {
        s.items.push({ x: x, y: y, r: r, phase: rand(0, Math.PI * 2) });
        return;
      }
    }
    s.items.push({
      x: rand(r + 12, WORLD.w - r - 12),
      y: rand(r + 12, WORLD.h - r - 12),
      r: r,
      phase: rand(0, Math.PI * 2),
    });
  }

  spawnObstacle() {
    const s = this.state;
    const r = this.config.obstacleRadius;
    const angle = rand(0, Math.PI * 2);
    const ramp = 1 + Math.min(0.6, s.elapsedMs / this.config.durationMs);
    const speed = this.config.obstacleSpeed * rand(0.85, 1.25) * ramp;
    s.obstacles.push({
      x: rand(r, WORLD.w - r),
      y: rand(r, WORLD.h - r),
      r: r,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      spin: rand(0, Math.PI),
    });
  }

  checkCollisions() {
    const s = this.state;
    const p = s.player;

    for (let i = s.items.length - 1; i >= 0; i -= 1) {
      const it = s.items[i];
      if (Math.hypot(it.x - p.x, it.y - p.y) <= it.r + p.r) {
        s.items.splice(i, 1);
        s.score += this.config.itemPoints;
        s.collected += 1;
        s.events.push({ type: 'PICKUP', x: it.x, y: it.y });
      }
    }

    if (s.elapsedMs < p.invulnerableUntil) return;

    for (const o of s.obstacles) {
      const dist = Math.hypot(o.x - p.x, o.y - p.y);
      if (dist <= o.r + p.r) {
        s.lives -= 1;
        s.hits += 1;
        p.invulnerableUntil = s.elapsedMs + this.config.invulnerableMs;
        const nx = dist === 0 ? 1 : (p.x - o.x) / dist;
        const ny = dist === 0 ? 0 : (p.y - o.y) / dist;
        p.vx = nx * this.config.hitKnockback;
        p.vy = ny * this.config.hitKnockback;
        s.events.push({ type: 'HIT', x: p.x, y: p.y });
        if (s.lives <= 0) return;
        break;
      }
    }
  }

  drainEvents() {
    const out = this.state.events;
    this.state.events = [];
    return out;
  }
}

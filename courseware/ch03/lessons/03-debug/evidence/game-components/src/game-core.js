/**
 * game-core.js —— 纯规则层：没有 DOM、没有定时器、不碰全局状态。
 * 只负责「一局 60 秒躲避与收集」的数值推进与碰撞判定。
 * 渲染与输入在 main.js 里做。
 */
(function (global) {
  'use strict';

  var CONFIG = {
    width: 800,
    height: 600,
    duration: 60,          // 一局 60 秒
    lives: 3,
    playerSpeed: 345,      // px/s
    playerRadius: 13,
    playerAccel: 12,       // 速度趋近系数（越大越跟手）
    invulnTime: 1.2,       // 受伤后的无敌时间（秒）
    obstacleSpawnStart: 1.25,
    obstacleSpawnEnd: 0.52,
    pickupSpawn: 1.15,
    maxObstacles: 26,
    pickupValue: 10,
    bonusValue: 25,
    bonusChance: 0.18
  };

  /** 可复现的线性同余随机数。 */
  function createRng(seed) {
    var s = (seed >>> 0) || 1;
    return function rng() {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  function clamp(v, lo, hi) {
    return v < lo ? lo : (v > hi ? hi : v);
  }

  function createState(seed) {
    return {
      config: CONFIG,
      rng: createRng(seed || 20261112),
      time: 0,
      score: 0,
      lives: CONFIG.lives,
      collected: 0,
      hits: 0,
      over: false,
      reason: '',            // 'time' | 'lives'
      player: {
        x: CONFIG.width / 2,
        y: CONFIG.height - 90,
        vx: 0,
        vy: 0,
        r: CONFIG.playerRadius,
        invuln: 0
      },
      obstacles: [],
      pickups: [],
      obstacleTimer: 0.6,
      pickupTimer: CONFIG.pickupSpawn,
      events: []             // 供渲染层消费的一次性事件
    };
  }

  function resetState(state) {
    var fresh = createState(Math.floor(Math.random() * 0xffffffff));
    Object.keys(fresh).forEach(function (key) {
      state[key] = fresh[key];
    });
    return state;
  }

  function spawnObstacle(state) {
    var rng = state.rng;
    var cfg = state.config;
    var r = 11 + rng() * 11;
    state.obstacles.push({
      x: r + rng() * (cfg.width - r * 2),
      y: -r - 8,
      vx: (rng() - 0.5) * 90,
      vy: 80 + rng() * 90 + state.time * 1.2,
      r: r,
      spin: (rng() - 0.5) * 3.2,
      angle: rng() * Math.PI * 2,
      kind: rng() < 0.3 ? 'rock' : 'spike'
    });
  }

  function spawnPickup(state) {
    var rng = state.rng;
    var cfg = state.config;
    var bonus = rng() < cfg.bonusChance;
    state.pickups.push({
      x: 20 + rng() * (cfg.width - 40),
      y: -20,
      vx: (rng() - 0.5) * 40,
      vy: 55 + rng() * 40,
      r: bonus ? 13 : 10,
      value: bonus ? cfg.bonusValue : cfg.pickupValue,
      bonus: bonus,
      angle: 0
    });
  }

  function hits(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var rr = a.r + b.r;
    return dx * dx + dy * dy <= rr * rr;
  }

  /**
   * 推进一帧。
   * @param {object} state  createState() 的返回值
   * @param {number} dt    秒（建议 <= 0.05）
   * @param {{x:number,y:number}} dir  输入方向，取值 -1 / 0 / 1
   */
  function update(state, dt, dir) {
    if (state.over) return state;

    var cfg = state.config;
    var p = state.player;

    state.time += dt;
    if (state.time >= cfg.duration) {
      state.time = cfg.duration;
      state.over = true;
      state.reason = 'time';
      state.events.push({ type: 'over', reason: 'time' });
      return state;
    }

    // --- 玩家移动：方向 -> 目标速度 -> 指数逼近 -> 位移 ---
    var tx = dir.x * cfg.playerSpeed;
    var ty = dir.y * cfg.playerSpeed;
    var k = Math.min(1, dt * cfg.playerAccel);
    p.vx += (tx - p.vx) * k;
    p.vy += (ty - p.vy) * k;
    p.x = clamp(p.x + p.vx * dt, p.r, cfg.width - p.r);
    p.y = clamp(p.y + p.vy * dt, p.r, cfg.height - p.r);
    if (p.invuln > 0) p.invuln = Math.max(0, p.invuln - dt);

    // --- 生成节奏随时间加快（单一难度，强度自然上升）---
    var progress = state.time / cfg.duration;
    var spawnGap = cfg.obstacleSpawnStart +
      (cfg.obstacleSpawnEnd - cfg.obstacleSpawnStart) * progress;
    state.obstacleTimer -= dt;
    if (state.obstacleTimer <= 0) {
      state.obstacleTimer = spawnGap;
      if (state.obstacles.length < cfg.maxObstacles) spawnObstacle(state);
    }
    state.pickupTimer -= dt;
    if (state.pickupTimer <= 0) {
      state.pickupTimer = cfg.pickupSpawn;
      spawnPickup(state);
    }

    // --- 障碍推进与撞人 ---
    var i;
    for (i = state.obstacles.length - 1; i >= 0; i -= 1) {
      var o = state.obstacles[i];
      o.x += o.vx * dt;
      o.y += o.vy * dt;
      o.angle += o.spin * dt;
      if (o.x < o.r || o.x > cfg.width - o.r) o.vx *= -1;
      if (o.y > cfg.height + o.r) {
        state.obstacles.splice(i, 1);
        continue;
      }
      if (p.invuln <= 0 && hits(o, p)) {
        state.obstacles.splice(i, 1);
        state.lives -= 1;
        state.hits += 1;
        p.invuln = cfg.invulnTime;
        state.events.push({ type: 'hurt', x: p.x, y: p.y });
        if (state.lives <= 0) {
          state.lives = 0;
          state.over = true;
          state.reason = 'lives';
          state.events.push({ type: 'over', reason: 'lives' });
          return state;
        }
      }
    }

    // --- 拾取物推进与收集 ---
    for (i = state.pickups.length - 1; i >= 0; i -= 1) {
      var it = state.pickups[i];
      it.x += it.vx * dt;
      it.y += it.vy * dt;
      it.angle += dt * 2.2;
      if (it.x < it.r || it.x > cfg.width - it.r) it.vx *= -1;
      if (it.y > cfg.height + it.r) {
        state.pickups.splice(i, 1);
        continue;
      }
      if (hits(it, p)) {
        state.pickups.splice(i, 1);
        state.score += it.value;
        state.collected += 1;
        state.events.push({ type: 'pick', x: it.x, y: it.y, value: it.value, bonus: it.bonus });
      }
    }

    return state;
  }

  /** 取出并清空事件队列。 */
  function drainEvents(state) {
    var events = state.events;
    state.events = [];
    return events;
  }

  global.DodgeCore = {
    CONFIG: CONFIG,
    createState: createState,
    resetState: resetState,
    update: update,
    drainEvents: drainEvents
  };
})(window);

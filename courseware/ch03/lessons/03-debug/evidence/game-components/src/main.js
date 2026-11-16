/**
 * main.js —— 渲染层：canvas 绘制、键盘输入、HUD 与结算面板。
 * 规则全部来自 game-core.js，这里只负责显示与反馈。
 */
(function (global) {
  'use strict';

  var Core = global.DodgeCore;
  var UI = global.DodgeUI;
  var Sound = global.DodgeSound;
  var Store = global.DodgeStorage;

  var $ = function (id) { return document.getElementById(id); };

  var el = {
    canvas: $('game'),
    stage: $('stage'),
    prompt: $('prompt'),
    time: $('stat-time'),
    score: $('stat-score'),
    life: $('stat-life'),
    result: $('result'),
    resultEmoji: $('result-emoji'),
    resultTitle: $('result-title'),
    resultSubtitle: $('result-subtitle'),
    resultScore: $('result-score'),
    resultBadge: $('result-badge'),
    resultCollected: $('result-collected'),
    resultHits: $('result-hits'),
    resultTime: $('result-time'),
    resultBest: $('result-best'),
    resultAgain: $('result-again'),
    flash: $('flash')
  };

  var ctx = el.canvas.getContext('2d');
  var state = Core.createState();
  var rafId = 0;
  var lastTs = 0;
  var started = false;

  // ---------------------------------------------------------------- 输入
  var KEYMAP = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    KeyW: 'up', KeyS: 'down', KeyA: 'left', KeyD: 'right',
    w: 'up', s: 'down', a: 'left', d: 'right'
  };
  var pressed = { up: false, down: false, left: false, right: false };

  function readDir() {
    return {
      x: (pressed.right ? 1 : 0) - (pressed.left ? 1 : 0),
      y: (pressed.down ? 1 : 0) - (pressed.up ? 1 : 0)
    };
  }

  function onKeyDown(e) {
    var key = KEYMAP[e.code] || KEYMAP[e.key];
    if (!key) return;
    if (e.code && e.code.indexOf('Arrow') === 0) e.preventDefault();
    pressed[key] = true;
    if (!started) startGame();
  }

  function onKeyUp(e) {
    var key = KEYMAP[e.code] || KEYMAP[e.key];
    if (!key) return;
    pressed[key] = false;
  }

  function clearKeys() {
    pressed.up = pressed.down = pressed.left = pressed.right = false;
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', clearKeys);

  // ---------------------------------------------------------------- 绘制
  function resizeCanvas() {
    var dpr = Math.min(2, global.devicePixelRatio || 1);
    var cssWidth = el.canvas.clientWidth || Core.CONFIG.width;
    var cssHeight = Math.round(cssWidth * Core.CONFIG.height / Core.CONFIG.width);
    el.canvas.width = Math.round(cssWidth * dpr);
    el.canvas.height = Math.round(cssHeight * dpr);
    el.canvas.style.height = cssHeight + 'px';
    ctx.setTransform(dpr * cssWidth / Core.CONFIG.width, 0, 0, dpr * cssWidth / Core.CONFIG.width, 0, 0);
  }

  function drawBackground(w, h) {
    var g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#141a3a');
    g.addColorStop(1, '#0d1027');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(124, 140, 255, 0.10)';
    ctx.lineWidth = 1;
    var step = 50;
    for (var x = step; x < w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
      ctx.stroke();
    }
    for (var y = step; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
      ctx.stroke();
    }
  }

  function drawObstacle(o) {
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.angle);
    ctx.lineWidth = 2;
    if (o.kind === 'rock') {
      ctx.beginPath();
      var pts = 7;
      for (var i = 0; i < pts; i += 1) {
        var a = (i / pts) * Math.PI * 2;
        var rr = o.r * (0.82 + ((i * 37) % 11) / 40);
        var px = Math.cos(a) * rr;
        var py = Math.sin(a) * rr;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = '#5b5f86';
      ctx.fill();
      ctx.strokeStyle = '#aab0e6';
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(0, -o.r);
      ctx.lineTo(o.r * 0.92, o.r * 0.78);
      ctx.lineTo(-o.r * 0.92, o.r * 0.78);
      ctx.closePath();
      ctx.fillStyle = '#8f6ad6';
      ctx.fill();
      ctx.strokeStyle = '#d8c9ff';
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawPickup(it) {
    ctx.save();
    ctx.translate(it.x, it.y);
    ctx.rotate(it.angle);
    var r = it.r;
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.lineTo(r * 0.78, 0);
    ctx.lineTo(0, r);
    ctx.lineTo(-r * 0.78, 0);
    ctx.closePath();
    ctx.fillStyle = it.bonus ? '#ffd76e' : '#56d6c6';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = it.bonus ? '#fff3c9' : '#d6fff8';
    ctx.stroke();
    if (it.bonus) {
      ctx.beginPath();
      ctx.arc(0, 0, r * 1.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 215, 110, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawPlayer(p) {
    var blink = p.invuln > 0 && Math.floor(p.invuln * 12) % 2 === 0;
    ctx.save();
    ctx.globalAlpha = blink ? 0.35 : 1;
    ctx.translate(p.x, p.y);
    ctx.shadowColor = 'rgba(124, 140, 255, 0.9)';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.moveTo(0, -p.r * 1.25);
    ctx.lineTo(p.r * 1.05, p.r * 0.95);
    ctx.lineTo(0, p.r * 0.5);
    ctx.lineTo(-p.r * 1.05, p.r * 0.95);
    ctx.closePath();
    var g = ctx.createLinearGradient(0, -p.r, 0, p.r);
    g.addColorStop(0, '#7ce7d8');
    g.addColorStop(1, '#7c8cff');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.restore();
  }

  function render() {
    var w = Core.CONFIG.width;
    var h = Core.CONFIG.height;
    drawBackground(w, h);
    for (var i = 0; i < state.pickups.length; i += 1) drawPickup(state.pickups[i]);
    for (var j = 0; j < state.obstacles.length; j += 1) drawObstacle(state.obstacles[j]);
    drawPlayer(state.player);
  }

  // ---------------------------------------------------------------- 反馈
  function stageScale() {
    return (el.canvas.clientWidth || Core.CONFIG.width) / Core.CONFIG.width;
  }

  function floatText(x, y, text, good) {
    var scale = stageScale();
    var node = document.createElement('span');
    node.className = 'float-text ' + (good ? 'float-text--good' : 'float-text--bad');
    node.textContent = text;
    node.style.left = (x * scale) + 'px';
    node.style.top = (y * scale) + 'px';
    el.stage.appendChild(node);
    global.setTimeout(function () { node.remove(); }, 900);
  }

  function flash(kind) {
    el.flash.classList.remove('is-hit', 'is-hurt');
    // 强制重排以重启动画
    void el.flash.offsetWidth;
    el.flash.classList.add(kind);
    global.setTimeout(function () { el.flash.classList.remove('is-hit', 'is-hurt'); }, 400);
  }

  function handleEvents() {
    var events = Core.drainEvents(state);
    for (var i = 0; i < events.length; i += 1) {
      var e = events[i];
      if (e.type === 'pick') {
        floatText(e.x, e.y, '+' + e.value, true);
        flash('is-hit');
        Sound.pick(e.bonus);
      } else if (e.type === 'hurt') {
        floatText(e.x, e.y, '-1', false);
        flash('is-hurt');
        Sound.hurt();
      } else if (e.type === 'over') {
        Sound.over();
        openResult(e.reason);
      }
    }
  }

  // ---------------------------------------------------------------- HUD
  function renderHud() {
    var remaining = Math.max(0, Math.ceil(Core.CONFIG.duration - state.time));
    el.time.textContent = UI.formatTime(remaining);
    el.score.textContent = String(state.score);
    el.life.textContent = state.lives + ' / ' + Core.CONFIG.lives;
    el.life.classList.remove('is-good', 'is-warn', 'is-bad');
    if (state.lives <= 1) el.life.classList.add('is-bad');
    else if (state.lives === 2) el.life.classList.add('is-warn');
    else el.life.classList.add('is-good');
    el.time.classList.remove('is-good', 'is-warn', 'is-bad');
    if (remaining <= 10) el.time.classList.add('is-warn');
    else el.time.classList.add('is-good');
  }

  // ---------------------------------------------------------------- 结算
  function openResult(reason) {
    var best = Store.read();
    var isNewBest = state.score > best;
    if (isNewBest) {
      best = state.score;
      Store.write(best);
    }
    el.resultEmoji.textContent = reason === 'lives' ? '💥' : (isNewBest ? '🏆' : '⏱️');
    el.resultTitle.textContent = reason === 'lives' ? '生命耗尽' : '时间到';
    el.resultSubtitle.textContent = reason === 'lives'
      ? '坚持了 ' + UI.formatTime(state.time) + ' 就结束了'
      : '完整撑过了 60 秒';
    el.resultScore.textContent = String(state.score);
    el.resultBadge.hidden = !isNewBest;
    el.resultCollected.textContent = String(state.collected);
    el.resultHits.textContent = String(state.hits);
    el.resultTime.textContent = UI.formatTime(state.time);
    el.resultBest.textContent = String(best);
    el.result.classList.toggle('result--fail', reason === 'lives');
    el.result.hidden = false;
    el.resultAgain.focus();
  }

  function restart() {
    el.result.hidden = true;
    Core.resetState(state);
    clearKeys();
    lastTs = 0;
    started = true;
    state.player.invuln = 1.5;
    el.prompt.hidden = false;
    global.setTimeout(function () { el.prompt.hidden = true; }, 2600);
    renderHud();
    render();
  }

  el.resultAgain.addEventListener('click', restart);

  el.result.addEventListener('keydown', function (event) {
    UI.trapFocus(el.result, event);
  });

  // ---------------------------------------------------------------- 主循环
  function loop(ts) {
    if (!lastTs) lastTs = ts;
    var dt = Math.min(0.05, (ts - lastTs) / 1000);
    lastTs = ts;

    if (started && !state.over) {
      Core.update(state, dt, readDir());
      handleEvents();
    }
    render();
    renderHud();
    rafId = global.requestAnimationFrame(loop);
  }

  function startGame() {
    if (started) return;
    started = true;
    el.prompt.hidden = false;
    global.setTimeout(function () { el.prompt.hidden = true; }, 2600);
  }

  global.addEventListener('resize', function () {
    resizeCanvas();
    render();
  });

  resizeCanvas();
  // 开局自动开始，并给 2 秒无敌作为起手缓冲
  started = true;
  state.player.invuln = 2;
  global.setTimeout(function () { el.prompt.hidden = true; }, 3200);
  renderHud();
  render();
  rafId = global.requestAnimationFrame(loop);

  // 首次交互解锁音频（浏览器策略）
  global.addEventListener('pointerdown', function once() {
    Sound.pick(false);
    global.removeEventListener('pointerdown', once);
  });
})(window);

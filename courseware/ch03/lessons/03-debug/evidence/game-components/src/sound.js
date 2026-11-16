/** sound.js —— WebAudio 现场合成，不依赖任何外部音频文件。 */
(function (global) {
  'use strict';

  var ctx = null;

  function ensure() {
    if (!ctx) {
      var Ctx = global.AudioContext || global.webkitAudioContext;
      if (!Ctx) return null;
      ctx = new Ctx();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function blip(freq, dur, type, gain) {
    var c = ensure();
    if (!c) return;
    var osc = c.createOscillator();
    var amp = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    amp.gain.value = gain || 0.05;
    amp.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    osc.connect(amp).connect(c.destination);
    osc.start();
    osc.stop(c.currentTime + dur);
  }

  global.DodgeSound = {
    pick: function (bonus) { blip(bonus ? 880 : 660, 0.12, 'triangle', 0.05); },
    hurt: function () { blip(180, 0.28, 'sawtooth', 0.06); },
    over: function () { blip(300, 0.5, 'sine', 0.06); }
  };
})(window);

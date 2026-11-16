/** storage.js —— localStorage 最佳成绩，隐私模式下自动降级。 */
(function (global) {
  'use strict';

  var KEY = 'dodge60.best';

  function read() {
    try {
      var raw = global.localStorage.getItem(KEY);
      var n = Number(raw);
      return Number.isFinite(n) && n > 0 ? n : 0;
    } catch (err) {
      return 0;
    }
  }

  function write(score) {
    try {
      global.localStorage.setItem(KEY, String(score));
    } catch (err) {
      /* 隐私模式：忽略 */
    }
  }

  global.DodgeStorage = { read: read, write: write };
})(window);

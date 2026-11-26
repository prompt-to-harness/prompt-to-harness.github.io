/* ==========================================================================
   purple-ui-kit.js — 紫色主题的 UI 行为件（数据卡 + 结算浮层）
   -------------------------------------------------------------------------
   零依赖 ES Module。复制进项目后：
     import { renderStats, updateStats, ResultOverlay } from './purple-ui-kit.js';

   样式依赖：purple-theme.css + stat-cards.css + result-overlay.css
   ========================================================================== */

/* ------------------------------------------------------------------ 工具 */

/** 毫秒 → “m:ss”（超过一小时 → “h:mm:ss”）。 */
function formatDuration(ms) {
  const total = Math.max(0, Math.floor((Number(ms) || 0) / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

/** 千分位整数。 */
function formatNumber(n) {
  return (Number(n) || 0).toLocaleString('en-US');
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

/* -------------------------------------------------------------- 数据卡 */

/**
 * 创建一个数据卡元素。
 * @param {{key?:string,label:string,value?:string|number,icon?:string,hint?:string,
 *          state?:'accent'|'good'|'bad'|'warn',compact?:boolean}} spec
 */
function createStatCard(spec = {}) {
  const card = el('div', 'pg-stat');
  if (spec.state) card.classList.add(`pg-stat--${spec.state}`);
  if (spec.compact) card.classList.add('pg-stat--compact');
  if (spec.key) card.dataset.key = spec.key;

  if (spec.icon) {
    const icon = el('span', 'pg-stat__icon', spec.icon);
    icon.setAttribute('aria-hidden', 'true');
    card.appendChild(icon);
  }

  const label = el('span', 'pg-stat__label', spec.label ?? '');
  const value = el('span', 'pg-stat__value', spec.value ?? '—');
  card.append(label, value);

  if (spec.hint) card.appendChild(el('span', 'pg-stat__hint', spec.hint));

  card._pg = { label, value };
  return card;
}

/**
 * 渲染一组数据卡。
 * @param {HTMLElement} container
 * @param {Array} items 见 createStatCard
 * @returns {Map<string, HTMLElement>} key → 卡片元素（便于后续更新）
 */
function renderStats(container, items = []) {
  if (!container) throw new Error('renderStats: container 不能为空');
  container.textContent = '';
  const map = new Map();
  for (const spec of items) {
    const card = createStatCard(spec);
    container.appendChild(card);
    if (spec.key) map.set(spec.key, card);
  }
  return map;
}

/**
 * 更新数据卡的值（值变化时自动播放一次高亮脉冲）。
 * @param {Map<string, HTMLElement>} map
 * @param {Record<string, string|number|{value:string|number,state?:string,hint?:string}>} values
 */
function updateStats(map, values = {}) {
  if (!map) return;
  for (const [key, payload] of Object.entries(values)) {
    const card = map.get(key);
    if (!card) continue;
    const spec = payload && typeof payload === 'object' ? payload : { value: payload };
    const next = String(spec.value ?? '—');
    const prev = card._pg.value.textContent;
    if (next !== prev) {
      card._pg.value.textContent = next;
      card.classList.remove('is-bump');
      void card.offsetWidth;          // 强制回流，让动画可以重播
      card.classList.add('is-bump');
    }
    if (spec.state) {
      card.classList.remove('pg-stat--accent', 'pg-stat--good', 'pg-stat--bad', 'pg-stat--warn');
      card.classList.add(`pg-stat--${spec.state}`);
    }
    if (spec.hint != null) {
      let hint = card.querySelector('.pg-stat__hint');
      if (!hint) {
        hint = el('span', 'pg-stat__hint');
        card.appendChild(hint);
      }
      hint.textContent = spec.hint;
    }
  }
}

/* ------------------------------------------------------------ 结算浮层 */

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * 结算浮层控制器：焦点管理 + Esc 关闭 + Tab 焦点循环 + 关闭后焦点归位。
 *
 * 用法一（已有 HTML 结构）：
 *   const overlay = new ResultOverlay(document.getElementById('overlay'));
 *
 * 用法二（只给一个空容器）：组件会自动生成面板骨架。
 */
class ResultOverlay {
  constructor(root) {
    if (!root) throw new Error('ResultOverlay: root 不能为空');
    this.root = root;
    this.root.classList.add('pg-overlay');
    if (!this.root.querySelector('.pg-overlay__panel')) this._buildSkeleton();
    this.panel = this.root.querySelector('.pg-overlay__panel');
    this.panel.setAttribute('role', 'dialog');
    this.panel.setAttribute('aria-modal', 'true');
    this.emojiEl = this.panel.querySelector('.pg-overlay__emoji');
    this.titleEl = this.panel.querySelector('.pg-overlay__title');
    this.textEl = this.panel.querySelector('.pg-overlay__text');
    this.summaryEl = this.panel.querySelector('.pg-overlay__summary');
    this.actionsEl = this.panel.querySelector('.pg-overlay__actions');
    this._lastFocus = null;
    this._onKeydown = this._onKeydown.bind(this);
    this.root.hidden = true;
  }

  _buildSkeleton() {
    this.root.textContent = '';
    const panel = el('div', 'pg-overlay__panel');
    const emoji = el('div', 'pg-overlay__emoji', '🎉');
    emoji.setAttribute('aria-hidden', 'true');
    const title = el('h2', 'pg-overlay__title');
    const text = el('p', 'pg-overlay__text');
    const summary = el('div', 'pg-overlay__summary');
    summary.hidden = true;
    const actions = el('div', 'pg-overlay__actions');
    panel.append(emoji, title, text, summary, actions);
    this.root.appendChild(panel);
  }

  get isOpen() { return !this.root.hidden; }

  /**
   * 打开浮层。
   * @param {{emoji?:string,title?:string,text?:string,
   *          rows?:Array<{label:string,value:string,state?:string}>,
   *          actions?:Array<{label:string,primary?:boolean,onClick?:Function}>,
   *          dismissible?:boolean}} opts
   */
  open(opts = {}) {
    const { emoji = '🎉', title = '', text = '', rows = [], actions = [], dismissible = true } = opts;

    if (this.emojiEl) this.emojiEl.textContent = emoji;
    if (this.titleEl) {
      this.titleEl.textContent = title;
      this.titleEl.id = this.titleEl.id || 'pg-overlay-title';
      this.panel.setAttribute('aria-labelledby', this.titleEl.id);
    }
    if (this.textEl) {
      this.textEl.textContent = text;
      this.textEl.hidden = !text;
    }
    if (this.summaryEl) {
      this.summaryEl.textContent = '';
      this.summaryEl.hidden = rows.length === 0;
      for (const row of rows) {
        const line = el('div', 'pg-overlay__row' + (row.state ? ` pg-overlay__row--${row.state}` : ''));
        line.append(el('span', 'pg-overlay__row-label', row.label), el('span', 'pg-overlay__row-value', row.value));
        this.summaryEl.appendChild(line);
      }
    }
    if (this.actionsEl) {
      this.actionsEl.textContent = '';
      for (const action of actions) {
        const btn = el('button', `pg-btn ${action.primary ? 'pg-btn--primary' : 'pg-btn--ghost'}`, action.label);
        btn.type = 'button';
        btn.addEventListener('click', () => {
          if (typeof action.onClick === 'function') action.onClick();
        });
        this.actionsEl.appendChild(btn);
      }
    }

    this._lastFocus = document.activeElement;
    this.root.hidden = false;
    document.addEventListener('keydown', this._onKeydown);
    const first = this.panel.querySelector('.pg-btn--primary') || this.panel.querySelector(FOCUSABLE);
    if (first) first.focus();
    this.root.dataset.dismissible = String(dismissible);
  }

  close() {
    if (this.root.hidden) return;
    this.root.hidden = true;
    document.removeEventListener('keydown', this._onKeydown);
    if (this._lastFocus && typeof this._lastFocus.focus === 'function') this._lastFocus.focus();
    this._lastFocus = null;
  }

  _onKeydown(event) {
    if (this.root.hidden) return;
    if (event.key === 'Escape' && this.root.dataset.dismissible !== 'false') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = [...this.panel.querySelectorAll(FOCUSABLE)].filter((n) => !n.disabled && n.offsetParent !== null);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

/* ---------------------------------------------------------------------------
   本地适配：改为经典脚本（无需本地服务器，file:// 直接打开 index.html 也能运行）
   --------------------------------------------------------------------------- */
window.PurpleUI = {
  formatDuration,
  formatNumber,
  createStatCard,
  renderStats,
  updateStats,
  ResultOverlay,
};

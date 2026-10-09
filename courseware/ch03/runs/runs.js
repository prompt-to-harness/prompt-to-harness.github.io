// 第 3 章运行对比页（原型）：数据来自 data.js，由 courseware/ch03/materials/runs/build-gallery.py 生成
(() => {
  const D = window.RUN_GALLERY;
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'text') n.textContent = v;
      else if (v !== undefined && v !== null) n.setAttribute(k, v);
    }
    for (const k of kids.flat()) if (k) n.append(k);
    return n;
  };
  const TAG = { 'ai-rule': 'AI 替人定的', defect: '缺陷', leak: '仓库提示', note: '观察' };
  const ok = D.runs.filter((r) => r.status === 'ok');

  // 不变的条件
  for (const [k, v] of D.batch.fixed) $('fixed').append(el('dt', { text: k }), el('dd', { text: v }));
  $('fixed').append(el('dt', { text: '机器' }), el('dd', { text: D.batch.machine }));
  $('prompt').textContent = `需求句：\n${D.prompt}\n\n人的回复（代答）：\n${D.confirm}`;

  // 试玩：点开才加载。AI 写的页面按不可信内容处理：取回单文件构建放进 srcdoc，sandbox 只给脚本权限（不给 allow-same-origin）。
  // 不用 src=：部分内置浏览器里 sandbox 加 src 的页面脚本不执行；srcdoc 在各浏览器表现一致。
  const frame = (r) => {
    const box = el('div', { class: 'runs-frame' });
    const btn = el('button', { type: 'button', class: 'runs-load', text: `加载${r.label}的游戏` });
    btn.onclick = async () => {
      btn.disabled = true;
      btn.textContent = '加载中…';
      const [file, anchor] = r.play.split('#');
      try {
        const html = await fetch(file).then((res) => { if (!res.ok) throw new Error(res.status); return res.text(); });
        const jump = anchor ? `<script>addEventListener('load',()=>setTimeout(()=>{const t=document.getElementById(${JSON.stringify(anchor)});if(t)t.scrollIntoView()},200))<\/script>` : '';
        const f = el('iframe', { title: `${r.label}的记忆翻牌`, sandbox: 'allow-scripts' });
        f.srcdoc = html.replace('</head>', `${jump}</head>`);
        box.replaceChildren(f);
      } catch (e) {
        btn.disabled = false;
        btn.textContent = `加载失败（${e.message}），点此重试`;
      }
    };
    box.append(btn);
    return box;
  };
  for (const r of ok) {
    $('play-grid').append(el('article', { class: 'runs-play' },
      el('h3', { text: r.label }), frame(r),
      el('a', { href: r.play, target: '_blank', rel: 'noopener', text: '在新标签页打开' })));
  }

  // 对比矩阵
  const head = el('tr', {}, el('th', { scope: 'col', text: '规则' }),
    D.runs.map((r) => el('th', { scope: 'col', class: r.status === 'void' ? 'is-void' : '', text: r.label })));
  const body = D.properties.map((p) => el('tr', {}, el('th', { scope: 'row', text: p.label }),
    D.runs.map((r, i) => {
      if (r.status === 'void') return p === D.properties[0] ? el('td', { class: 'is-void', rowspan: D.properties.length, text: '作废：上游中断，没有改动' }) : null;
      const c = r.props[p.key] || { v: '—' };
      return el('td', { 'data-tag': c.tag }, c.v);
    })));
  $('matrix').append(el('thead', {}, head), el('tbody', {}, body));

  // 共性
  for (const p of D.patterns) {
    $('patterns').append(el('article', { class: 'runs-pattern', 'data-tag': p.tag },
      el('p', { class: 'runs-count', text: p.count }), el('h3', { text: p.title }), el('p', { text: p.body })));
  }

  // 逐轮
  const pre = (text, cls) => el('pre', { class: cls }, text);
  const diffView = (diff) => {
    const out = el('pre', { class: 'runs-diff' });
    for (const line of diff.split('\n')) {
      const k = line.startsWith('+++') || line.startsWith('---') || line.startsWith('diff ') ? 'h' : line[0] === '+' ? 'a' : line[0] === '-' ? 'd' : line.startsWith('@@') ? 'h' : '';
      out.append(el('span', { class: k ? `l-${k}` : '' }, line + '\n'));
    }
    return out;
  };
  const snippetView = (s) => {
    if (!s) return null;
    const code = el('pre', { class: 'runs-snippet' });
    s.code.forEach((line, i) => {
      const n = s.start + i;
      code.append(el('span', { class: n === s.line ? 'is-hit' : '' }, el('i', { text: String(n).padStart(3) }), ` ${line}\n`));
    });
    return el('figure', {}, el('figcaption', { text: `${s.file}:${s.line}` }), code);
  };
  const fold = (title, body, open = false) => {
    const d = el('details', { class: 'runs-fold' }, el('summary', { text: title }), body);
    if (open) d.open = true;
    return d;
  };
  const detail = (r) => {
    if (r.status === 'void') return el('div', { class: 'runs-detail' }, el('p', { class: 'runs-note', text: r.void_reason }));
    const secs = r.seconds;
    const meta = el('p', { class: 'runs-meta', text: `计划 ${secs.plan} 秒 · 执行 ${secs.exec} 秒 · ${r.diffstat.split('\n').pop().trim()}` });
    const findings = r.findings.map((f) => el('article', { class: 'runs-finding', 'data-tag': f.tag },
      el('p', { class: 'tag', 'data-tag': f.tag, text: TAG[f.tag] }), el('h4', { text: f.title }), el('p', { text: f.detail }), f.snippets.map(snippetView)));
    const tl = el('ol', { class: 'runs-timeline' }, r.timeline.map((s) =>
      el('li', { 'data-k': s.k, 'data-fail': s.exit ? '1' : null }, el('span', { class: 'k', text: { cmd: '命令', file: '改文件', msg: '说明' }[s.k] }), s.t, s.exit ? el('b', { text: ` 退出码 ${s.exit}` }) : null)));
    return el('div', { class: 'runs-detail' }, meta,
      el('div', { class: 'runs-findings' }, findings),
      fold('Codex 的计划原文（人只回了一句“按你推荐的做”）', pre(r.plan, 'runs-text'), true),
      fold(`执行过程（${r.timeline.length} 步，命令只显示首行，路径已脱敏）`, tl),
      fold('Codex 交回时的说明', pre(r.answer, 'runs-text')),
      fold('全部改动（diff）', diffView(r.diff)),
      fold('试玩', frame(r)));
  };
  const show = (i) => {
    [...$('tabs').children].forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
    $('detail').replaceChildren(detail(D.runs[i]));
  };
  D.runs.forEach((r, i) => {
    const b = el('button', { type: 'button', role: 'tab', class: r.status === 'void' ? 'is-void' : '', text: r.label });
    b.onclick = () => show(i);
    $('tabs').append(b);
  });
  show(0);

  $('provenance').textContent = `${D.batch.date} 讲师一台机器上的 ${D.runs.length} 次运行（${ok.length} 次有效）；不代表 Codex 的普遍行为。原型，未试讲`;
})();

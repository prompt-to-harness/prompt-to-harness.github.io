/**
 * verify-resources.mjs —— 检查 Skill 里的资源与说明是否互相对应
 *
 * 用法：node scripts/verify-resources.mjs
 * 检查项：
 *   1. 关键文件齐全
 *   2. 文档里提到的资源路径真实存在
 *   3. HTML 里用到的 .pg- 类名都在 CSS 中定义
 *   4. 文档示例 import 的函数都真实导出
 *   5. 音效事件名：模块 / 文档 / 预览页 三方一致，且文档不把翻牌专属事件当推荐
 *   6. 布局规则在 SKILL.md 与 references/layout.md 中一致出现
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let pass = 0, fail = 0;
const ok = (cond, msg) => { if (cond) pass++; else { fail++; console.log('FAIL', msg); } };
const read = (f) => fs.readFileSync(path.join(base, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(base, f));

const expected = [
  'SKILL.md', 'agents/openai.yaml',
  'assets/css/purple-theme.css', 'assets/css/stat-cards.css', 'assets/css/result-overlay.css',
  'assets/js/purple-ui-kit.js', 'assets/js/purple-sound.js',
  'assets/html/components.html', 'assets/preview.html',
  'references/tokens.md', 'references/layout.md', 'references/sound.md',
];
for (const f of expected) ok(exists(f), 'file exists: ' + f);

const docs = ['SKILL.md', 'references/tokens.md', 'references/layout.md', 'references/sound.md'];
const pathRe = /(?:assets|references)\/[A-Za-z0-9_./-]+\.[a-z]+/g;
for (const d of docs) {
  for (const m of read(d).match(pathRe) || []) ok(exists(m), d + ' references existing file: ' + m);
}

const css = read('assets/css/purple-theme.css') + read('assets/css/stat-cards.css') + read('assets/css/result-overlay.css');
const html = read('assets/html/components.html') + read('assets/preview.html');
const used = new Set();
for (const m of html.matchAll(/class="([^"]+)"/g)) {
  for (const c of m[1].split(/\s+/)) if (c.startsWith('pg-')) used.add(c);
}
for (const c of used) ok(css.includes('.' + c), 'class defined in css: ' + c);

const kitSrc = read('assets/js/purple-ui-kit.js');
const soundSrc = read('assets/js/purple-sound.js');
const kitExports = [...kitSrc.matchAll(/export (?:function|class|const) (\w+)/g)].map((m) => m[1]);
const soundExports = [...soundSrc.matchAll(/export (?:function|class|const) (\w+)/g)].map((m) => m[1]);
const skillSrc = read('SKILL.md');
for (const name of ['renderStats', 'updateStats', 'ResultOverlay']) ok(kitExports.includes(name), 'kit exports ' + name);
for (const name of ['play', 'bindSoundToggle', 'unlockAudio', 'defineCue', 'setSoundEnabled', 'setMasterVolume']) {
  ok(soundExports.includes(name), 'sound exports ' + name);
}
for (const m of skillSrc.matchAll(/import \{([^}]+)\} from '\.\/([^']+)'/g)) {
  const mod = m[2].includes('sound') ? soundExports : kitExports;
  for (const n of m[1].split(',').map((x) => x.trim()).filter(Boolean)) ok(mod.includes(n), 'SKILL example import exists: ' + n);
}

const cueNames = [...soundSrc.matchAll(/^  (\w+): \[/gm)].map((m) => m[1]);
ok(cueNames.length >= 9, 'default cue table present, got ' + cueNames.length);
const soundDoc = read('references/sound.md');
for (const n of cueNames) ok(soundDoc.includes(n), 'sound.md documents cue: ' + n);
for (const m of read('assets/preview.html').matchAll(/data-cue="(\w+)"/g)) ok(cueNames.includes(m[1]), 'preview cue exists: ' + m[1]);
for (const bad of ['flip', 'mismatch', 'match']) {
  const mentions = soundDoc.split('\n').filter((line) => line.includes(bad) && !line.includes('不要') && !line.includes('初版'));
  ok(mentions.length === 0, 'sound.md does not recommend flip-specific cue: ' + bad);
}

const layoutDoc = read('references/layout.md');
ok(layoutDoc.includes('靠近场地边缘'), 'layout.md states HUD-near-field rule');
ok(skillSrc.includes('靠近场地边缘'), 'SKILL.md states HUD-near-field rule');
for (const cls of ['pg-stats--row', 'pg-stats--rail', 'pg-stats--inline', 'pg-chip']) {
  ok(css.includes('.' + cls), 'css has ' + cls);
  ok(layoutDoc.includes(cls), 'layout.md mentions ' + cls);
}
ok(html.includes('sound-toggle'), 'sound toggle present in html');
ok(read('assets/preview.html').includes('purple-sound.js'), 'preview imports sound module');

console.log('pass=' + pass + ' fail=' + fail);
console.log(fail ? 'RESOURCE CHECK FAILED' : 'RESOURCE CHECK PASSED');
process.exit(fail ? 1 : 0);

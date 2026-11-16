#!/usr/bin/env python3
"""Integrate the archived A2 game into a copy of the chapter 2 release (local only)."""
import argparse
import io
import json
from pathlib import Path
import shutil
import subprocess
import tarfile

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'lab-runs/ch03-showcase'
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source', type=Path, default=Path.home() / 'course-demos/rec-20261025-1612/personal-homepage')
args = parser.parse_args()
commit = subprocess.check_output(['git', '-C', str(args.source), 'rev-parse', 'ch02-homepage-release'], text=True).strip()
work = ROOT / 'lab-runs/ch03-homepage-integration'
work.mkdir(exist_ok=True)
archive = subprocess.check_output(['git', '-C', str(args.source), 'archive', commit])
with tarfile.open(fileobj=io.BytesIO(archive)) as tar:
    tar.extractall(work, filter='data')
app = work / 'src/App.tsx'
text = app.read_text()
text = text.replace("{ id: 'projects', label: '项目与开源' },", "{ id: 'projects', label: '项目与开源' },\n  { id: 'game', label: '翻牌游戏' },")
text = text.replace('</main>', '''<section id="game" data-section="game" className="panel panel--style2">
          <div className="panel__inner">
            <h2 className="panel__title">记忆翻牌</h2>
            <p className="panel__subtitle">休息一下，翻开卡片，找出相同的图案。</p>
            <iframe className="memory-game" title="记忆翻牌小游戏" src="../games/a2/index.html" onLoad={(event) => {
              const frame = event.currentTarget;
              const doc = frame.contentDocument;
              if (!doc) return;
              const mount = () => {
                if (!doc.querySelector('#game')) { window.setTimeout(mount, 50); return; }
                const style = doc.createElement('style');
                style.textContent = 'body{padding:16px!important;gap:0!important}#root{width:100%;margin:0!important;padding:0!important}#root>:not(#game){display:none!important}#game{margin:0 auto!important;padding-top:0!important;border-top:0!important}';
                doc.head.append(style);
                const resize = () => { frame.style.height = Math.ceil(doc.documentElement.scrollHeight) + 'px'; };
                new ResizeObserver(resize).observe(doc.body);
                resize();
              };
              mount();
            }} />
            <p><a className="button" href="#intro"><span className="button__label">返回首页</span></a></p>
          </div>
        </section>
      </main>''')
text = text.replace('<span className="button__label">查看项目</span>\n              </a>', '<span className="button__label">查看项目</span>\n              </a>\n              <a className="button" href="#game"><span className="button__label">玩翻牌游戏</span></a>')
app.write_text(text)
with (work / 'src/index.css').open('a') as f:
    f.write('\n.button:hover,.button:focus-visible,.button:active{color:#5e42a6}\n.memory-game{display:block;width:100%;height:860px;border:0;border-radius:16px;background:#faf9f6;margin:2em 0;color-scheme:light}\n.intro__actions{display:flex;flex-wrap:wrap;gap:1em}\n@media(max-width:736px){.sidebar__nav ul{gap:.7em}.sidebar{letter-spacing:0}.panel__inner{padding-left:1.25em;padding-right:1.25em}}\n')
if not (work / 'node_modules').exists():
    subprocess.run(['npm', 'ci', '--ignore-scripts'], cwd=work, check=True)
subprocess.run(['npm', 'run', 'build', '--', '--base=./'], cwd=work, check=True)
dest = OUT / 'homepage'
shutil.copytree(work / 'dist', dest, dirs_exist_ok=True)
(dest / 'integration.json').write_text(json.dumps({'homepage_commit': commit, 'homepage_tag': 'ch02-homepage-release', 'game_archive': '../games/a2/index.html', 'note': '后续整合示例：第二章发布主页 + A2 历史游戏；A2 原始日志对应 games/a2 中的历史作品，不对应本整合过程。'}, ensure_ascii=False, indent=2))
print('http://127.0.0.1:4397/homepage/index.html')

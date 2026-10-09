#!/usr/bin/env python3
"""从被 git 忽略的 lab-runs/ 生成第 3 章“多次运行对比页”的数据与试玩构建（原型，见 docs/outline/proposals/2026-10-09-ch03-run-gallery.md）。

用法：uv run courseware/ch03/materials/runs/build-gallery.py [--skip-build]
输入：本目录 annotations.json（人工标注）+ lab-runs/ch03-mainline/<dir>/（logs 与 repo）
输出：courseware/ch03/runs/data.js 与 courseware/ch03/runs/builds/<id>/index.html（单文件，JS/CSS 内联）

只导出派生内容：计划与回答原文、命令首行与退出码、diff、证据代码片段。不导出命令输出、请求记录与 Codex home。
写出前统一脱敏（本机路径换成占位符），并检查不得残留本机路径或疑似密钥，残留就失败。
"""
import json, re, subprocess, sys, tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[3]
RUNS = REPO / 'lab-runs' / 'ch03-mainline'
OUT = REPO / 'courseware' / 'ch03' / 'runs'
HOME = str(Path.home())

SECRET = re.compile(r'(sk-[A-Za-z0-9]{16,}|eyJ[A-Za-z0-9_-]{20,}|MINIMAX_API_KEY\s*=\s*\S+|api[_-]?key["\']?\s*[:=]\s*["\'][^"\']{8,})', re.I)


def redact(text, run_dir):
    text = text.replace(str(run_dir / 'repo'), '<练习仓库>').replace(str(run_dir), '<运行目录>')
    text = text.replace(str(REPO), '<课程仓库>').replace(HOME, '~')
    text = re.sub(r'/private/var/folders/\S+|/var/folders/\S+', '<临时目录>', text)
    return text


def check_clean(text, where):
    bad = [m.group(0)[:40] for m in SECRET.finditer(text)]
    if '/Users/' in text or bad:
        sys.exit(f'脱敏失败（{where}）：{bad or "残留 /Users/"}')


def read(p):
    return p.read_text(encoding='utf-8') if p.exists() else ''


def timeline(events_file):
    steps = []
    for line in read(events_file).splitlines():
        try:
            e = json.loads(line)
        except json.JSONDecodeError:
            continue
        if e.get('type') != 'item.completed':
            continue
        it = e['item']
        kind = it.get('type')
        if kind == 'command_execution':
            cmd = re.sub(r"^/bin/zsh -lc ", '', it.get('command', '')).strip('\'"')
            first = cmd.splitlines()[0] if cmd else ''
            more = len(cmd.splitlines()) - 1
            steps.append({'k': 'cmd', 't': first[:160] + (f'  … 另 {more} 行' if more > 0 else ''), 'exit': it.get('exit_code')})
        elif kind == 'file_change':
            steps.append({'k': 'file', 't': ', '.join(f"{c.get('kind')} {Path(c.get('path', '')).name}" for c in it.get('changes', []))})
        elif kind == 'agent_message':
            txt = (it.get('text') or '').strip().replace('\n', ' ')
            steps.append({'k': 'msg', 't': txt[:160] + ('…' if len(txt) > 160 else '')})
    return steps


def snippet(repo, where, around=4):
    path, _, line = where.partition(':')
    f = repo / path
    if not line or not f.exists():
        return None
    n = int(line)
    lines = f.read_text(encoding='utf-8').splitlines()
    lo, hi = max(1, n - around), min(len(lines), n + around)
    return {'file': path, 'line': n, 'start': lo, 'code': lines[lo - 1:hi]}


def build_game(repo, dest):
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['npx', 'vite', 'build', '--base', './', '--outDir', tmp, '--emptyOutDir'],
                       cwd=repo, check=True, capture_output=True)
        html = (Path(tmp) / 'index.html').read_text(encoding='utf-8')

        def inline_js(m):
            js = (Path(tmp) / m.group(1).lstrip('./')).read_text(encoding='utf-8').replace('</script', '<\\/script')
            return f'<script type="module">{js}</script>'

        def inline_css(m):
            return f'<style>{(Path(tmp) / m.group(1).lstrip("./")).read_text(encoding="utf-8")}</style>'

        html = re.sub(r'<script type="module" crossorigin src="([^"]+)"></script>', inline_js, html)
        html = re.sub(r'<link rel="stylesheet" crossorigin href="([^"]+)">', inline_css, html)
        if re.search(r'src="\./assets|href="\./assets', html):
            sys.exit(f'{repo}：构建里还有未内联的资源')
        dest.mkdir(parents=True, exist_ok=True)
        (dest / 'index.html').write_text(html, encoding='utf-8')


def main():
    skip_build = '--skip-build' in sys.argv
    ann = json.loads((HERE / 'annotations.json').read_text(encoding='utf-8'))
    out_runs = []
    for r in ann['runs']:
        run_dir = RUNS / r['dir']
        logs, repo = run_dir / 'logs', run_dir / 'repo'
        if not logs.exists():
            sys.exit(f'找不到运行目录：{run_dir}（lab-runs/ 不随仓库同步，需在跑过实验的机器上生成）')
        rec = dict(r)
        rec.pop('dir')
        secs = lambda n: int(read(logs / f'{n}.seconds') or 0) or None
        rec['seconds'] = {'plan': secs('3.1-plan'), 'exec': secs('3.1-exec')}
        rec['diffstat'] = read(logs / 'diffstat.txt').strip()
        rec['plan'] = read(logs / '3.1-plan.answer.md').strip()
        rec['answer'] = read(logs / '3.1-exec.answer.md').strip()
        rec['timeline'] = timeline(logs / '3.1-exec.events.jsonl')
        rec['diff'] = read(logs / 'memory-v0.diff') if r['status'] == 'ok' else ''
        for f in rec['findings']:
            wheres = f['where'] if isinstance(f['where'], list) else [f['where']]
            f['snippets'] = [s for s in (snippet(repo, w) for w in wheres) if s]
        if r['status'] == 'ok':
            anchor = re.search(r'<section[^>]*id="(memory[^"]*)"', ''.join(read(f) for f in (repo / 'src').glob('*.tsx')))
            rec['play'] = f"builds/{r['id']}/index.html" + (f'#{anchor.group(1)}' if anchor else '')
            if not skip_build:
                build_game(repo, OUT / 'builds' / r['id'])
        blob = redact(json.dumps(rec, ensure_ascii=False), run_dir)
        check_clean(blob, r['id'])
        out_runs.append(json.loads(blob))
    data = {k: v for k, v in ann.items() if k != 'runs'}
    data['runs'] = out_runs
    data['prompt'] = read(REPO / 'courseware/ch03/materials/mainline/fixtures/prompt-3.1.txt').strip()
    data['confirm'] = read(REPO / 'courseware/ch03/materials/mainline/fixtures/confirm-3.1.txt').strip()
    js = '// 由 courseware/ch03/materials/runs/build-gallery.py 生成，不要手改\nwindow.RUN_GALLERY = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n'
    check_clean(js, 'data.js')
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / 'data.js').write_text(js, encoding='utf-8')
    for b in (OUT / 'builds').glob('*/index.html'):
        check_clean(b.read_text(encoding='utf-8'), str(b))
    print(f'写出 {OUT / "data.js"}（{len(js) // 1024} KB），{len(out_runs)} 轮')


if __name__ == '__main__':
    main()

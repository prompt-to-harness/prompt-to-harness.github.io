#!/usr/bin/env python3
"""按每节的 script.json 重建 lesson.js。

口播的唯一来源是各节目录下的 script.json（按页面 id 存每页的口播数组）：
- 有 tools/build-lesson.py 的节：重跑构建脚本，它自己读 script.json。
- 手写 lesson.js 的节（第 0 章与第 1 章）：把 script.json 合并进 lesson.js。

用法：rebuild-lesson.py [节目录 ...]；不带参数时处理全部。--check 只核对不写文件，不一致就退出 1。
"""
import argparse
import json
import subprocess
import sys
from pathlib import Path

COURSEWARE = Path(__file__).resolve().parents[1]
REPO = COURSEWARE.parent
PREFIX = 'window.lesson = '


def load(path):
    return json.loads(path.read_text().removeprefix(PREFIX).strip().removesuffix(';'))


def merged_text(lesson_dir):
    """lesson.js 合并 script.json 之后的文本；id 对不上就抛 ValueError。"""
    lesson = load(lesson_dir / 'lesson.js')
    scripts = json.loads((lesson_dir / 'script.json').read_text())
    ids = [scene['id'] for scene in lesson['scenes']]
    if set(scripts) != set(ids):
        raise ValueError(f'script.json 与 lesson.js 的页面 id 不一致：多 {sorted(set(scripts) - set(ids))}，少 {sorted(set(ids) - set(scripts))}')
    for scene in lesson['scenes']:  # 口播段数与 steps 的对应由 check-progressive.py 与 lessonkit 检查
        scene['script'] = scripts[scene['id']]
    return PREFIX + json.dumps(lesson, ensure_ascii=False, indent=2) + ';\n'


def run(command):
    result = subprocess.run(command, cwd=REPO, capture_output=True, text=True, timeout=120)
    if result.returncode:
        raise RuntimeError((result.stderr or result.stdout).strip()[-600:])


def rebuild(lesson_dir, check=False):
    """返回 True 表示生成物已是最新；check=False 时先更新再返回。"""
    builder = lesson_dir / 'tools' / 'build-lesson.py'
    if builder.exists():
        if check:
            return True  # 构建脚本节由 check-editorial 的 ED-011 重跑比对
        run([sys.executable, str(builder)])
        return True
    text = merged_text(lesson_dir)
    current = (lesson_dir / 'lesson.js').read_text()
    if check:
        return text == current
    if text != current:
        (lesson_dir / 'lesson.js').write_text(text)
    return True


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('dirs', nargs='*', type=Path)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    dirs = [d.resolve() for d in args.dirs] or sorted(p.parent for p in COURSEWARE.glob('**/script.json') if 'archive' not in p.parts)
    stale = []
    for lesson_dir in dirs:
        try:
            if not rebuild(lesson_dir, args.check):
                stale.append(lesson_dir)
        except (ValueError, RuntimeError, OSError) as error:
            print(f'{lesson_dir.relative_to(REPO)}: {error}', file=sys.stderr)
            return 1
    for lesson_dir in stale:
        print(f'{(lesson_dir / "lesson.js").relative_to(REPO)} 与 script.json 不一致：运行 rebuild-lesson.py {lesson_dir.relative_to(REPO)}', file=sys.stderr)
    return 1 if stale else 0


if __name__ == '__main__':
    sys.exit(main())

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Read-only Screen Studio project audio extraction and Apple transcription."""
import argparse
import datetime as dt
import hashlib
import json
import math
import os
from pathlib import Path
import platform
import re
import shutil
import subprocess
import sys
import tempfile
import time

HERE = Path(__file__).resolve().parent


def load_json(path):
    data = json.loads(path.read_text(encoding='utf-8'))
    return data.get('json', data)


def inside(root, name):
    path = (root / name).resolve()
    if not path.is_relative_to(root.resolve()):
        raise ValueError('项目引用了目录外的文件：' + str(name))
    return path


def discover(project, track):
    root = project / 'recording'
    metadata = load_json(root / 'metadata.json')
    if metadata.get('state') != 'complete':
        raise ValueError('项目尚未完成录制，请停止录制并保存后再运行。')
    recorders = metadata.get('recorders', [])
    all_sessions = [s for r in recorders for s in r.get('sessions', [])]
    starts = [s['unixStartMs'] for s in all_sessions if 'unixStartMs' in s]
    if not starts:
        raise ValueError('项目缺少时间基准，无法可靠生成时间戳。')
    origin = min(starts)
    tracks = []
    for r in recorders:
        kind = r.get('type', '').lower()
        ident = r.get('id', '')
        if not any(x in (kind + ' ' + ident).lower() for x in ('microphone', 'audio', 'sound')):
            continue
        sessions = []
        for s in r.get('sessions', []):
            name = s.get('outputFilename')
            if not name:
                continue
            file = inside(root, name)
            if not file.exists():
                file = inside(root, str(Path(name).with_suffix('.m3u8')))
            if not file.is_file():
                raise ValueError('缺少音轨文件：' + str(file))
            if 'unixStartMs' not in s:
                raise ValueError('音轨缺少时间信息：' + ident)
            sessions.append(dict(file=file, offset=(s['unixStartMs'] - origin) / 1000,
                                 duration=s.get('durationMs', 0) / 1000))
        if sessions:
            tracks.append(dict(id=ident, type=kind, sessions=sorted(sessions, key=lambda x: x['offset'])))
    if track == 'list':
        return tracks, None
    if track:
        candidates = [t for t in tracks if t['id'] == track]
    else:
        candidates = [t for t in tracks if t['type'] == 'microphone']
        if not candidates and len(tracks) == 1:
            candidates = tracks
    if len(candidates) != 1:
        names = ', '.join(t['id'] for t in tracks) or '无音轨'
        raise ValueError('无法唯一选择音轨。可用：' + names + '；使用 --list-tracks / --track 指定。')
    return tracks, candidates[0]


def find_ffmpeg(explicit):
    override = explicit or os.environ.get('FFMPEG')
    paths = [override] if override else [shutil.which('ffmpeg'), '/opt/homebrew/bin/ffmpeg', '/usr/local/bin/ffmpeg']
    for path in paths:
        if path and Path(path).is_file() and os.access(path, os.X_OK):
            return str(path)
    raise ValueError('需要 ffmpeg。可使用 --ffmpeg 指定完整路径。')


def validate_manifest(path):
    text = path.read_text(encoding='utf-8')
    if '#EXT-X-ENDLIST' not in text:
        raise ValueError('音轨分片尚未写完：' + str(path))
    refs = []
    for line in text.splitlines():
        if line and not line.startswith('#'):
            refs.append(line.strip())
        refs.extend(re.findall(r'URI="([^"]+)"', line))
    for ref in refs:
        if '://' in ref or ':' in ref or ref.startswith('/'):
            raise ValueError('仅允许本地项目音频分片：' + ref)
        if not inside(path.parent, ref).is_file():
            raise ValueError('缺少音频分片：' + ref)


def sha(path):
    h = hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def parse_words(path, offset):
    words = []
    complete = False
    for line in path.read_text(encoding='utf-8').splitlines():
        if not line.startswith('{'):
            continue
        event = json.loads(line)
        if event.get('type') == 'error':
            raise ValueError('Apple 转写失败：' + event.get('message', str(event)))
        if event.get('type') == 'complete':
            complete = True
        if event.get('type') == 'word':
            start, end = float(event['start']), float(event['end'])
            if not all(math.isfinite(x) for x in (start, end)) or start < 0 or end < start:
                raise ValueError('转写返回了无效时间戳。')
            words.append(dict(start=start + offset, end=end + offset, word=event['word']))
    if not complete:
        raise ValueError('转写没有返回完成标志；请查看原始输出和日志。')
    return words


def stamp(seconds):
    n = max(0, int(seconds))
    return '%02d:%02d:%02d' % (n // 3600, n % 3600 // 60, n % 60)


def group_words(words):
    groups, buf = [], []
    for w in words:
        if buf and (w['start'] - buf[-1]['end'] >= 2 or w['end'] - buf[0]['start'] > 25):
            groups.append(buf)
            buf = []
        buf.append(w)
        if w['word'].strip().endswith(('。', '？', '！', '?', '!')) and w['end'] - buf[0]['start'] >= 5:
            groups.append(buf)
            buf = []
    if buf:
        groups.append(buf)
    return groups


def render(words, title, track, locale):
    groups = group_words(words)
    lines = [title, '音轨：' + track, 'Apple 自动转写，语言：' + locale,
             '时间相对于原项目录制起点；不应用编辑器剪切、变速或静音。',
             '自动识别未经人工校对，英文、专有名词可能有误。', '']
    for g in groups:
        lines.extend(['[' + stamp(g[0]['start']) + ' – ' + stamp(g[-1]['end']) + '] ' +
                      ''.join(x['word'] for x in g).strip(), ''])
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description='从 Screen Studio 项目提取音轨，并用 Apple 转写为带时间戳的 TXT。')
    parser.add_argument('project', nargs='?', type=Path, help='.screenstudio 项目文件夹')
    parser.add_argument('--latest', action='store_true', help='使用 ~/Screen Studio Projects 中最近完成的项目')
    parser.add_argument('--list-tracks', action='store_true', help='只列出音轨，不提取或转写')
    parser.add_argument('--track', help='音轨 ID；默认选择唯一的 microphone')
    parser.add_argument('--locale', default='zh_CN', help='Apple 语言标识，默认 zh_CN')
    parser.add_argument('--output', type=Path, default=HERE.parents[1] / 'lab-runs/transcripts', help='结果目录，每次创建新子目录')
    parser.add_argument('--helper', type=Path, help='可选的自编译 apple-transcribe 路径；默认从仓库 Swift 源码自动构建')
    parser.add_argument('--ffmpeg', help='ffmpeg 路径；M4A 直接复制时无需使用')
    args = parser.parse_args()
    if args.list_tracks and args.track:
        parser.error('--list-tracks 与 --track 不能同时使用')
    if args.latest and args.project:
        parser.error('project 与 --latest 不能同时使用')
    project = args.project
    if args.latest:
        available = []
        for p in (Path.home() / 'Screen Studio Projects').glob('*.screenstudio'):
            try:
                if load_json(p / 'recording/metadata.json').get('state') == 'complete':
                    available.append(p)
            except (OSError, ValueError):
                pass
        if not available:
            raise ValueError('没有找到已完成的项目。请手动指定项目路径。')
        project = max(available, key=lambda p: p.stat().st_mtime)
    if project is None:
        parser.error('请指定项目，或使用 --latest')
    project = project.expanduser().resolve()
    if project.suffix != '.screenstudio' or not project.is_dir():
        raise ValueError('请选择 .screenstudio 项目文件夹。')
    tracks, selected = discover(project, 'list' if args.list_tracks else args.track)
    print('项目：' + str(project), flush=True)
    if args.list_tracks:
        for t in tracks:
            print(t['id'], t['type'], '片段数：', len(t['sessions']))
        if not tracks:
            print('没有录制音轨，无法从无声项目恢复声音。')
        return
    if platform.system() != 'Darwin' or int(platform.mac_ver()[0].split('.')[0]) < 26:
        raise ValueError('Apple 辅助程序需要 macOS 26 或更新版本。')
    if args.helper:
        helper = args.helper.expanduser().resolve()
        if not helper.is_file() or not os.access(helper, os.X_OK):
            raise ValueError('无效的 --helper：' + str(helper))
    else:
        from build_apple_transcriber import build
        print('准备仓库自有 Apple 转写程序（首次编译，之后复用缓存）…', flush=True)
        helper = build()
    outroot = args.output.expanduser().resolve()
    if outroot.is_relative_to(project):
        raise ValueError('输出目录不能放进原项目内。')
    outroot.mkdir(parents=True, exist_ok=True)
    run = Path(tempfile.mkdtemp(prefix=project.stem + '-' + dt.datetime.now().strftime('%Y%m%d-%H%M%S') + '-', dir=outroot))
    print('结果目录：' + str(run), flush=True)
    started = time.monotonic()
    status = dict(project=str(project), track=selected['id'], locale=args.locale,
                  state='running', sessions=[], source_modified=False, helper=str(helper))
    report = run / '运行记录.json'
    words = []
    try:
        for i, session in enumerate(selected['sessions'], 1):
            src = session['file']
            dest = run / ('音轨-%02d.m4a' % i)
            before = sha(src)
            if src.suffix.lower() == '.m4a':
                shutil.copy2(src, dest)
                if sha(dest) != before:
                    raise ValueError('音轨副本校验失败。')
            else:
                if src.suffix.lower() == '.m3u8':
                    validate_manifest(src)
                ffmpeg = find_ffmpeg(args.ffmpeg)
                with (run / ('提取-%02d.log' % i)).open('w') as log:
                    subprocess.run([ffmpeg, '-nostdin', '-hide_banner', '-loglevel', 'error',
                                    '-protocol_whitelist', 'file,crypto,data', '-i', str(src),
                                    '-map', '0:a:0', '-vn', '-c:a', 'copy', str(dest)],
                                   stdout=log, stderr=log, check=True)
            raw = run / ('Apple原始输出-%02d.jsonl' % i)
            print('转写音轨 %d/%d（首次可能需下载语言资源）…' % (i, len(selected['sessions'])), flush=True)
            t = time.monotonic()
            with raw.open('w') as stdout, (run / ('Apple日志-%02d.txt' % i)).open('w') as stderr:
                subprocess.run([str(helper), str(dest), '--locale', args.locale],
                               stdout=stdout, stderr=stderr, check=True)
            part = parse_words(raw, session['offset'])
            words.extend(part)
            if sha(src) != before:
                raise ValueError('运行期间源文件发生变化；请确保录制已结束。')
            status['sessions'].append(dict(source=str(src), sha256=before, offset_seconds=session['offset'],
                                           duration_seconds=session['duration'], words=len(part),
                                           transcribe_seconds=round(time.monotonic() - t, 3)))
        if not words:
            raise ValueError('转写已结束，但未识别到文字；音轨可能无声或语言不匹配。')
        words.sort(key=lambda w: w['start'])
        text = run / '转写-带时间戳.txt'
        text.write_text(render(words, project.stem, selected['id'], args.locale), encoding='utf-8')
        segments = [dict(id='S%04d' % (i + 1), start=g[0]['start'], end=g[-1]['end'],
                         text=''.join(w['word'] for w in g).strip())
                    for i, g in enumerate(group_words(words))]
        (run / '分段原稿.json').write_text(json.dumps(dict(project=str(project), track=selected['id'],
            timeline='source_recording', segments=segments), ensure_ascii=False, indent=2), encoding='utf-8')
        status.update(state='complete', seconds=round(time.monotonic() - started, 3),
                      first_word_seconds=words[0]['start'], last_word_seconds=words[-1]['end'],
                      text_file=str(text), word_events=len(words))
        print('完成：' + str(text), flush=True)
    except BaseException as exc:
        status.update(state='failed', error=str(exc), seconds=round(time.monotonic() - started, 3))
        print('未完成。已保留音轨、日志和原始输出：' + str(run), file=sys.stderr)
        raise
    finally:
        report.write_text(json.dumps(status, ensure_ascii=False, indent=2), encoding='utf-8')


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('已取消。', file=sys.stderr)
        sys.exit(130)
    except Exception as exc:
        print('错误：' + str(exc), file=sys.stderr)
        sys.exit(1)

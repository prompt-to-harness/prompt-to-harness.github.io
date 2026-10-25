#!/usr/bin/env python3
"""Validate native renders against render-queue.json; emit review frames."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import sys

from edit_project import fingerprint, sessions_for, map_ranges

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'screenstudio-transcript'))
from build_apple_transcriber import sdk_candidates


def build():
    source = Path(__file__).with_name('inspect_media.swift')
    compiler = subprocess.run(['xcrun', 'swiftc', '--version'], check=True, capture_output=True).stdout
    cache = Path(__file__).resolve().parents[2] / 'lab-runs/.screenstudio-edit'
    failures = []
    for sdk in sdk_candidates():
        key = hashlib.sha256(source.read_bytes() + compiler + str(sdk).encode()).hexdigest()[:16]
        folder = cache / key
        folder.mkdir(parents=True, exist_ok=True)
        binary = folder / 'inspect-media'
        if binary.is_file():
            return binary
        result = subprocess.run(['xcrun', 'swiftc', '-parse-as-library', '-O', '-sdk', str(sdk),
                                 str(source), '-o', str(binary)], capture_output=True, text=True)
        (folder / 'build.log').write_text(result.stdout + result.stderr)
        if result.returncode == 0:
            return binary
        failures.append(str(folder / 'build.log'))
    raise RuntimeError('无法编译媒体检查器：' + ', '.join(failures))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('queue', type=Path)
    parser.add_argument('--frames', action='store_true')
    parser.add_argument('--fps', type=int, choices=[30, 60], default=30,
                        help='预期帧率，默认 30；复核历史 60 fps 导出时显式传 60')
    parser.add_argument('--frame-limit', type=int, default=24, help='最多保存多少张 PNG；仍解码全部检查位置')
    args = parser.parse_args()
    if args.frame_limit < 3:
        parser.error('--frame-limit 至少为 3')
    queue = json.loads(args.queue.read_text())
    binary = build()
    results = []
    sessions = sessions_for(Path(queue['source']))
    for clip in queue['clips']:
        command = [str(binary), clip['export']]
        duration = clip['expected_duration']
        times = {min(.1, duration / 2), duration / 2, max(0, duration - .15)}
        priority = set(times)
        elapsed = 0
        for index, (start, end) in enumerate(clip['source_ranges']):
            if index:
                times.update((max(0, elapsed - .12), min(duration - .03, elapsed + .12)))
            elapsed += end - start
        for zoom in clip.get('zooms', []):
            spans = map_ranges([zoom['range']], sessions)
            # Pick the middle of retained zoom media, even if a filler cut crosses
            # the original midpoint. Convert that exact point to output time.
            overlaps = [(max(a, c), min(b, d)) for a, b in spans
                        for c, d in clip['source_ranges'] if min(b, d) > max(a, c)]
            remaining = sum(b-a for a, b in overlaps) / 2
            middle = None
            for start, end in overlaps:
                if remaining <= end-start:
                    middle = start + remaining
                    break
                remaining -= end-start
            elapsed = 0
            for start, end in clip['source_ranges']:
                if middle is not None and start <= middle <= end:
                    times.add(elapsed + middle - start)
                    priority.add(elapsed + middle - start)
                    break
                elapsed += end - start
        ordered = sorted(times)
        chosen = {ordered.index(t) for t in priority}
        # Fill remaining review slots with cut samples across the whole lesson.
        if len(chosen) > args.frame_limit:
            chosen = set(sorted(chosen)[round(i*(len(chosen)-1)/(args.frame_limit-1))]
                         for i in range(args.frame_limit))
        for i in range(args.frame_limit):
            if len(chosen) >= args.frame_limit:
                break
            chosen.add(round(i*(len(ordered)-1)/(args.frame_limit-1)))
        command.extend([str(args.queue.parent / 'review-frames' / clip['name']) if args.frames else '',
                        ','.join(f'{t:.6f}' for t in ordered), ','.join(str(i) for i in sorted(chosen))])
        result = subprocess.run(command, capture_output=True, text=True)
        row = dict(name=clip['name'], export=clip['export'], ok=False)
        if result.returncode:
            row['error'] = result.stderr[-2000:]
        else:
            row.update(json.loads(result.stdout))
            row['ok'] = (abs(row['duration'] - clip['expected_duration']) < .12
                         and row['width'] == 1920 and row['height'] == 1080
                         and abs(row['fps'] - args.fps) < .1
                         and row['audio_tracks'] >= 1)
        results.append(row)
    unchanged = fingerprint(Path(queue['source'])) == queue['source_fingerprint']
    report = dict(results=results, expected_fps=args.fps, source_unchanged=unchanged,
                  all_passed=all(x['ok'] for x in results) and unchanged,
                  limitation='只验证可解码画面、规格、时长与音轨存在；不代表已听音或确认接缝、镜像与遮挡')
    path = args.queue.parent / 'export-validation.json'
    path.write_text(json.dumps(report, ensure_ascii=False, indent=2))
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if report['all_passed'] else 1


if __name__ == '__main__':
    sys.exit(main())

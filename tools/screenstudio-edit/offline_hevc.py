#!/usr/bin/env python3
"""Create and validate a separate 1080p30 HEVC delivery copy on macOS."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import uuid
from verify_exports import sdk_candidates, build as build_inspector


def build(source_name):
    source = Path(__file__).with_name(source_name)
    compiler = subprocess.check_output(['xcrun', 'swiftc', '--version'])
    for sdk in sdk_candidates():
        key = hashlib.sha256(source.read_bytes() + compiler + str(sdk).encode()).hexdigest()[:16]
        folder = Path(__file__).resolve().parents[2] / 'lab-runs/.screenstudio-edit' / key
        folder.mkdir(parents=True, exist_ok=True)
        binary = folder / source.stem
        if binary.exists():
            return binary
        result = subprocess.run(['xcrun', 'swiftc', '-parse-as-library', '-O', '-sdk', str(sdk), str(source), '-o', str(binary)], capture_output=True, text=True)
        (folder / 'build.log').write_text(result.stdout + result.stderr)
        if result.returncode == 0:
            return binary
    raise RuntimeError('Swift 编译失败，检查 lab-runs/.screenstudio-edit/*/build.log')


def sha256(path):
    h = hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(8 * 1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def validate_specs(source, output):
    a, b = source['video'], output['video']
    if len(a) != 1 or len(b) != 1:
        raise ValueError('仅支持单视频轨')
    for track in (a[0], b[0]):
        if (track['width'], track['height']) != (1920, 1080) or abs(track['fps'] - 30) >= .1:
            raise ValueError('仅支持已确认的 1080p30 成片')
    if b[0]['codec'] not in ('hvc1', 'hev1') or abs(source['duration'] - output['duration']) >= .12:
        raise ValueError('编码或时长不符')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('output', type=Path)
    parser.add_argument('--bitrate', type=int, default=1500000)
    parser.add_argument('--verify-only', action='store_true', help='核验已有转换结果，不重复编码')
    args = parser.parse_args()
    source, output = args.source.resolve(), args.output.resolve()
    report = output.with_suffix('.hevc-validation.json')
    if source == output or not source.is_file() or report.exists() or args.bitrate <= 0:
        parser.error('源文件无效、路径相同、报告已存在或码率非法')
    if output.exists() != args.verify_only:
        parser.error('转换不可覆盖；--verify-only 要求输出已存在')
    probe = build('probe_video.swift')
    def info(path):
        return json.loads(subprocess.check_output([str(probe), str(path)]))
    original_hash = sha256(source)
    original = info(source)
    # Validate input before starting a long encode.
    if len(original['video']) != 1 or original['audio_tracks'] != 1:
        parser.error('仅支持单视频轨、单音频轨')
    validate_specs(original, dict(original, video=[dict(original['video'][0], codec='hvc1')]))
    output.parent.mkdir(parents=True, exist_ok=True)
    temp = output.with_name('.' + output.stem + '-' + uuid.uuid4().hex + '.mp4')
    target = output if args.verify_only else temp
    try:
        if not args.verify_only:
            subprocess.run([str(build('encode_hevc.swift')), str(source), str(temp), str(args.bitrate)], check=True)
        converted = info(target)
        validate_specs(original, converted)
        audio = json.loads(subprocess.check_output([str(build('hash_audio.swift')), str(source), str(target)]))
        if any(audio[0][k] != audio[1][k] for k in ('sha256', 'packets', 'bytes')):
            raise ValueError('压缩音频 payload 不一致')
        decoded = json.loads(subprocess.check_output([str(build_inspector()), str(target)]))
        if sha256(source) != original_hash:
            raise ValueError('源文件发生变化')
        audio[1]['file'] = str(output)
        converted['file'] = output.name
        converted_hash = sha256(target)
        size = target.stat().st_size
        if not args.verify_only:
            # Hard link fails if another process created the destination; no overwrite.
            import os
            os.link(target, output)
            target.unlink()
        result = dict(source=str(source), output=str(output), source_sha256=original_hash,
                      output_sha256=converted_hash, source_bytes=source.stat().st_size,
                      output_bytes=size, source_specs=original, output_specs=converted,
                      audio_payload_identical=True, audio=audio, decode=decoded, passed=True,
                      limitation='自动检查不能替代小字、动态画面及声画同步的人工抽查')
        report.write_text(json.dumps(result, ensure_ascii=False, indent=2))
        print(json.dumps({'output': str(output), 'bytes': size, 'passed': True}), flush=True)
    finally:
        if temp.exists():
            temp.unlink()
        # AVAssetWriter may leave its own sidecar after network optimization.
        # The UUID prefix belongs exclusively to this invocation.
        for sidecar in temp.parent.glob(temp.name + '.sb-*'):
            if sidecar.is_file() and not sidecar.is_symlink():
                sidecar.unlink()


if __name__ == '__main__':
    main()

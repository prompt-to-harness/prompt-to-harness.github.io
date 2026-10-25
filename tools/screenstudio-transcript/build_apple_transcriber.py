#!/usr/bin/env python3
"""Build our Swift adapter locally, caching by source, SDK and compiler version."""
import hashlib
import os
from pathlib import Path
import platform
import shutil
import subprocess
import tempfile

HERE = Path(__file__).resolve().parent


def sdk_candidates():
    values = []
    if os.environ.get('SDKROOT'):
        values.append(Path(os.environ['SDKROOT']))
    found = subprocess.run(['xcrun', '--sdk', 'macosx', '--show-sdk-path'],
                           capture_output=True, text=True, check=True)
    values.append(Path(found.stdout.strip()))
    # A newer SDK can be installed alongside an older swiftc. Try the 26 SDKs too.
    for parent in [values[-1].parent, Path('/Library/Developer/CommandLineTools/SDKs')]:
        values.extend(sorted(parent.glob('MacOSX26*.sdk'), reverse=True))
    unique = []
    for p in values:
        p = p.resolve()
        if p.is_dir() and p not in unique:
            unique.append(p)
    return unique


def build(cache=None):
    if platform.system() != 'Darwin':
        raise RuntimeError('Apple SpeechTranscriber requires macOS 26+.')
    if not shutil.which('xcrun'):
        raise RuntimeError('缺少 Xcode Command Line Tools；请先安装 Apple 开发工具。')
    source = HERE / 'apple_transcribe.swift'
    cache = cache or HERE.parents[1] / 'lab-runs/.apple-transcribe'
    cache.mkdir(parents=True, exist_ok=True)
    compiler = subprocess.run(['xcrun', 'swiftc', '--version'], capture_output=True,
                              text=True, check=True).stdout
    target = platform.machine() + '-apple-macosx26.0'
    failures = []
    candidates = sdk_candidates()
    for sdk in candidates:
        key = hashlib.sha256(source.read_bytes() + compiler.encode() +
                             str(sdk).encode() + target.encode()).hexdigest()[:20]
        cached = cache / key / "apple-transcribe"
        if cached.is_file() and os.access(cached, os.X_OK):
            return cached
    for sdk in candidates:
        key = hashlib.sha256(source.read_bytes() + compiler.encode() +
                             str(sdk).encode() + target.encode()).hexdigest()[:20]
        folder = cache / key
        folder.mkdir(exist_ok=True)
        binary = folder / 'apple-transcribe'
        if binary.is_file() and os.access(binary, os.X_OK):
            return binary
        with tempfile.TemporaryDirectory(prefix='build-', dir=folder) as temp:
            output = Path(temp) / 'apple-transcribe'
            command = ['xcrun', 'swiftc', '-parse-as-library', '-O', '-sdk', str(sdk),
                       '-target', target, str(source), '-o', str(output)]
            result = subprocess.run(command, capture_output=True, text=True)
            (folder / 'build.log').write_text(result.stdout + result.stderr, encoding='utf-8')
            if result.returncode == 0:
                output.replace(binary)
                return binary
            failures.append(str(folder / 'build.log'))
    raise RuntimeError('Swift 编译失败；请检查编译器与 SDK 是否匹配。日志：' + ', '.join(failures))


if __name__ == '__main__':
    print(build())

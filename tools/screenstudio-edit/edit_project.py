#!/usr/bin/env python3
"""Create independent Screen Studio work copies from an explicit edit plan.

Supports the observed 3.5.1 project schema, not an official Screen Studio API.
Times in plans are seconds on the recording-wall timeline used by our transcript.
"""
import argparse
import copy
import hashlib
import json
import math
from pathlib import Path
import platform
import shutil
import subprocess
import tempfile
import uuid


def read(path):
    return json.loads(Path(path).read_text(encoding='utf-8'))


def number(value):
    if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value):
        raise ValueError('时间和数值必须是有限数字')
    return float(value)


def intervals(values):
    result = []
    for value in values:
        if not isinstance(value, list) or len(value) != 2:
            raise ValueError('时间范围应为 [开始秒数, 结束秒数]')
        start, end = map(number, value)
        if start < 0 or end <= start:
            raise ValueError('时间范围必须非负且结束晚于开始')
        if result and start < result[-1][1]:
            raise ValueError('范围必须按时间递增，不能重叠或重排')
        result.append([start, end])
    return result


def subtract(keeps, cuts):
    """Subtract cuts; caller has validated cuts are fully covered by keeps."""
    result = []
    for start, end in keeps:
        cursor = start
        for left, right in cuts:
            if right <= start or left >= end:
                continue
            if left > cursor:
                result.append([cursor, left])
            cursor = max(cursor, right)
        if cursor < end:
            result.append([cursor, end])
    return result


def sessions_for(project):
    metadata = read(project / 'recording/metadata.json')
    displays = [r for r in metadata['recorders'] if r['type'] == 'display']
    microphones = [r for r in metadata['recorders'] if r['type'] == 'microphone']
    if len(displays) != 1 or len(microphones) != 1:
        raise ValueError('当前仅支持一个屏幕与一个麦克风轨道')
    screen = displays[0]['sessions']
    mic = microphones[0]['sessions']
    if not screen or len(screen) != len(mic):
        raise ValueError('屏幕与麦克风 session 数量不一致')
    origin = min(s['processTimeStartMs'] for s in screen)
    result, joined = [], 0.0
    for display, audio in zip(screen, mic):
        if (abs(display['processTimeStartMs'] - audio['processTimeStartMs']) > 20
                or abs(display['durationMs'] - audio['durationMs']) > 20):
            raise ValueError('屏幕与麦克风不同步，不能直接生成剪辑')
        for track in (display, audio):
            if not (project / 'recording' / track['outputFilename']).is_file():
                raise ValueError('缺少已封装的源素材：' + track['outputFilename'])
        start = (display['processTimeStartMs'] - origin) / 1000
        duration = display['durationMs'] / 1000
        if result and start < result[-1]['end'] - .001:
            raise ValueError('录制 session 重叠或顺序异常')
        result.append(dict(start=start, end=start + duration, joined=joined))
        joined += duration
    return result


def map_ranges(ranges, sessions):
    """Intersect wall ranges with recorded sessions and remove pause gaps."""
    result = []
    for start, end in ranges:
        if end > sessions[-1]['end'] + .001:
            raise ValueError('范围超过录制结尾')
        found = []
        for session in sessions:
            left, right = max(start, session['start']), min(end, session['end'])
            if right > left:
                found.append([session['joined'] + left - session['start'],
                              session['joined'] + right - session['start']])
        if not found:
            raise ValueError('范围完全位于暂停空档')
        result.extend(found)
    return result


def validate_source(project):
    meta = read(project / 'meta.json')
    version = meta['json']['version']
    if version != '3.5.1-4051':
        raise ValueError('未验证的 Screen Studio 版本：' + version)
    document = read(project / 'project.json')
    scenes = document['json']['scenes']
    if (len(scenes) != 1 or scenes[0]['type'] != 'recording'
            or scenes[0]['sessionIndex'] != 0):
        raise ValueError('当前仅支持单一原始 recording 场景')
    scene = scenes[0]
    slices = scene['slices']
    sessions = sessions_for(project)
    duration = sum(s['end'] - s['start'] for s in sessions)
    if (len(slices) != 1 or slices[0]['timeScale'] != 1
            or abs(slices[0]['sourceStartMs']) > .001
            or abs(slices[0]['sourceEndMs'] / 1000 - duration) > .1
            or scene.get('layouts') or scene.get('masks')):
        raise ValueError('源项目已剪辑、变速或有局部布局／遮罩；请使用未剪原项目')
    return document, sessions


def fingerprint(project):
    """Hash configuration and inventory stats without rehashing many GB of video."""
    digest = hashlib.sha256()
    for path in sorted(project.rglob('*')):
        if path.is_symlink():
            raise ValueError('源项目含软链接，不创建可能共享写入的工作副本')
        if path.is_file():
            stat = path.stat()
            digest.update(str(path.relative_to(project)).encode())
            digest.update(f'{stat.st_size}:{stat.st_mtime_ns}'.encode())
            if path.parent == project or path.name == 'metadata.json':
                digest.update(path.read_bytes())
    return digest.hexdigest()


def make_document(source, sessions, clip, settings):
    if set(clip) - {'name', 'keep', 'cut', 'cut_details', 'zooms', 'chapters', 'notes'}:
        raise ValueError('未知 clip 字段')
    name = clip['name']
    if (not isinstance(name, str) or not name or name in {'.', '..'}
            or '/' in name or '\\' in name or name.endswith('.screenstudio')):
        raise ValueError('name 只能是文件名，不含路径或扩展名')
    keeps, cuts = intervals(clip['keep']), intervals(clip.get('cut', []))
    if not keeps:
        raise ValueError('keep 不能为空')
    previous_chapter = -1
    for chapter in clip.get('chapters', []):
        if set(chapter) != {'start', 'title'} or not isinstance(chapter['title'], str) or not chapter['title'].strip():
            raise ValueError('chapters 必须有 start 和非空 title')
        start = number(chapter['start'])
        if not keeps[0][0] <= start <= keeps[-1][1] or start <= previous_chapter:
            raise ValueError('讲述段落起点必须位于剪辑范围内，按时间严格递增')
        previous_chapter = start
    for a, b in cuts:
        if not any(left <= a and b <= right for left, right in keeps):
            raise ValueError('每条 cut 必须完整处于一条 keep 内')
        map_ranges([[a, b]], sessions)
    ranges = map_ranges(subtract(keeps, cuts), sessions)
    if not ranges:
        raise ValueError('剪辑后没有保留内容')
    if set(settings) - {'mirror_camera', 'camera_size', 'cursor_size', 'click_circle'}:
        raise ValueError('未知 settings 字段')
    for key in ('mirror_camera', 'click_circle'):
        if not isinstance(settings.get(key), bool):
            raise ValueError(key + ' 必须显式给出布尔值')
    size = number(settings['camera_size'])
    cursor = number(settings['cursor_size'])
    if not .05 <= size <= .5 or not .5 <= cursor <= 3:
        raise ValueError('人像或鼠标尺寸超出支持范围')
    document = copy.deepcopy(source)
    project = document['json']
    project['id'], project['name'] = uuid.uuid4().hex[:11], name
    config = project['config']
    config.update(mirrorCamera=settings['mirror_camera'], hideCamera=False,
                  cameraSize=size, cameraPosition='top-right',
                  cameraPositionPoint={'x': 1, 'y': 0}, cameraScaleDuringZoom=1,
                  defaultLayout={'type': 'both', 'cameraSize': size,
                                 'cameraPositionPoint': {'x': 1, 'y': 0}},
                  defaultOutputAspectRatio={'x': 16, 'y': 9},
                  cursorSize=cursor, clickEffect={'type': 'circle'} if settings['click_circle'] else None,
                  clickSoundEffect=None, showTranscript=False,
                  backgroundAudioFileName=None, muteBackgroundAudio=True,
                  alwaysKeepZoomedIn=False)
    scene = project['scenes'][0]
    template = scene['slices'][0]
    scene['slices'] = [dict(template, id=uuid.uuid4().hex[:11], sourceStartMs=a * 1000,
                            sourceEndMs=b * 1000) for a, b in ranges]
    scene['zoomRanges'] = []
    for zoom in clip.get('zooms', []):
        if (set(zoom) - {'range', 'scale', 'target', 'purpose', 'reason', 'target_label', 'review_status'}
                or not {'range', 'scale', 'target'} <= set(zoom)):
            raise ValueError('zoom 必须有 range、scale、target，可附 purpose、reason、target_label、review_status')
        mapped = map_ranges(intervals([zoom['range']]), sessions)
        scale = number(zoom['scale'])
        point = zoom['target']
        if (not 1 < scale <= 2 or len(point) != 2
                or any(not 0 <= number(v) <= 1 for v in point)):
            raise ValueError('zoom scale 应在 (1,2]，target 坐标在 [0,1]')
        intersections = [[max(a, left), min(b, right)] for a, b in ranges
                         for left, right in mapped if min(b, right) > max(a, left)]
        if not intersections:
            raise ValueError('zoom 没有覆盖任何保留片段')
        # Source time remains unchanged by cuts. One span can cross removed slices.
        scene['zoomRanges'].append(dict(id=uuid.uuid4().hex[:11], zoom=scale, type='manual',
            snapToEdgesRatio=.25, manualTargetPoint={'x': point[0], 'y': point[1]},
            glideDirection=None, glideSpeed=.5, isDisabled=False,
            startTime=intersections[0][0] * 1000, endTime=intersections[-1][1] * 1000,
            isSystem=False, hasInstantAnimation=False))
    return document, ranges


def clone(source, destination):
    if platform.system() == 'Darwin':
        result = subprocess.run(['cp', '-cR', str(source), str(destination)], capture_output=True)
        if result.returncode == 0:
            return
        if destination.exists():
            shutil.rmtree(destination)
    shutil.copytree(source, destination)  # Never use hard links for mutable project files.


def prepare(project, plan, output, dry_run=False):
    project, output = Path(project).resolve(), Path(output).resolve()
    if output == project or project in output.parents:
        raise ValueError('输出目录不能位于源项目内部')
    if output.exists():
        raise ValueError('输出目录已存在；请使用新的版本目录')
    if set(plan) - {'version', 'timeline', 'scope', 'settings', 'clips', 'notes'}:
        raise ValueError('未知计划字段')
    if plan.get('version') != 1 or plan.get('timeline') != 'recording-wall':
        raise ValueError('仅支持 version=1、timeline=recording-wall')
    if not plan.get('clips'):
        raise ValueError('至少需要一个 clip')
    scope = plan.get('scope', 'examples')
    if scope not in {'examples', 'lesson'} or (scope == 'lesson' and len(plan['clips']) != 1):
        raise ValueError('scope=lesson 必须只有一个完整项目，示例使用 examples')
    source, sessions = validate_source(project)
    before = fingerprint(project)
    prepared, names = [], set()
    for clip in plan['clips']:
        doc, ranges = make_document(source, sessions, clip, plan['settings'])
        name = clip['name']
        if name.casefold() in names:
            raise ValueError('clip 名称重复')
        names.add(name.casefold())
        prepared.append((clip, doc, ranges))
    manifest = dict(version=1, scope=scope, source=str(project), source_fingerprint=before,
                    fingerprint_scope='配置内容及全部文件路径、大小、mtime；非完整媒体哈希',
                    timeline='recording-wall', settings=plan['settings'], clips=[])
    for clip, doc, ranges in prepared:
        manifest['clips'].append(dict(name=clip['name'],
            project=str(output / (clip['name'] + '.screenstudio')),
            export=str(output / (clip['name'] + '.mp4')),
            expected_duration=sum(b - a for a, b in ranges),
            source_ranges=ranges, wall_keep=clip['keep'], wall_cut=clip.get('cut', []),
            cut_details=clip.get('cut_details', []), chapters=clip.get('chapters', []),
            zooms=clip.get('zooms', []), notes=clip.get('notes', [])))
    if dry_run:
        return manifest
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = Path(tempfile.mkdtemp(prefix='.screenstudio-edit-', dir=output.parent))
    try:
        for clip, doc, _ in prepared:
            destination = temporary / (clip['name'] + '.screenstudio')
            clone(project, destination)
            (destination / 'project.json').write_text(json.dumps(doc, ensure_ascii=False, indent=2), encoding='utf-8')
        if fingerprint(project) != before:
            raise RuntimeError('生成期间源项目发生变化，未交付副本；请停止编辑源项目后重试')
        (temporary / 'render-queue.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
        (temporary / 'edit-plan.json').write_text(json.dumps(plan, ensure_ascii=False, indent=2), encoding='utf-8')
        temporary.rename(output)
    except BaseException:
        if temporary.exists():
            shutil.rmtree(temporary)
        raise
    return manifest


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('project', type=Path)
    parser.add_argument('plan', type=Path)
    parser.add_argument('--output', required=True, type=Path)
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()
    try:
        result = prepare(args.project, read(args.plan), args.output, args.dry_run)
    except (ValueError, KeyError, OSError, RuntimeError) as error:
        parser.exit(1, str(error) + '\n')
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()

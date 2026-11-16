#!/usr/bin/env python3
"""逐字稿评论存储与改稿后解决工具；使用 --help 查看命令。"""
import argparse
from contextlib import contextmanager
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import tempfile
import uuid

ROOT = Path(__file__).resolve().parents[1]


class CommentError(ValueError):
    pass


def lesson_for(page, root=ROOT):
    if not isinstance(page, str):
        raise CommentError('页面地址无效')
    path = (root / page.lstrip('/')).resolve()
    courseware = (root / 'courseware').resolve()
    if (courseware not in path.parents or path.name != 'speaker.html'
            or not path.is_file() or not (path.parent / 'script.json').is_file()):
        raise CommentError('找不到对应的逐字稿页面')
    if (path.parent / 'comments.json').is_symlink():
        raise CommentError('评论文件不能是符号链接')
    return path.parent


def load_comments(lesson):
    path = lesson / 'comments.json'
    if not path.exists():
        return {'version': 1, 'comments': []}
    data = json.loads(path.read_text())
    if data.get('version') != 1 or not isinstance(data.get('comments'), list):
        raise CommentError('评论文件格式不正确')
    return data


@contextmanager
def comment_lock(lesson):
    # 服务与命令行共用文件锁；进程退出会自动释放。锁文件不提交。
    with (lesson / '.comments.lock').open('a+b') as lock:
        if os.name == 'nt':
            import msvcrt
            lock.seek(0)
            if not lock.read(1):
                lock.write(b'0'); lock.flush()
            lock.seek(0)
            msvcrt.locking(lock.fileno(), msvcrt.LK_LOCK, 1)
        else:
            import fcntl
            fcntl.flock(lock.fileno(), fcntl.LOCK_EX)
        try:
            yield
        finally:
            if os.name == 'nt':
                lock.seek(0)
                msvcrt.locking(lock.fileno(), msvcrt.LK_UNLCK, 1)
            else:
                fcntl.flock(lock.fileno(), fcntl.LOCK_UN)


def store_comments(lesson, data):
    # 原子替换，轮询读取不会看到写了一半的 JSON。
    name = None
    try:
        with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', dir=lesson,
                                         prefix='.comments-', suffix='.tmp', delete=False) as out:
            name = out.name
            json.dump(data, out, ensure_ascii=False, indent=2)
            out.write('\n')
        os.replace(name, lesson / 'comments.json')
    finally:
        if name and Path(name).exists():
            Path(name).unlink()


def paragraph_text(lesson, anchor):
    try:
        if 'review' in anchor:
            # Review annotations retain their snapshot when the design changes.
            target, snapshot = anchor['review'], anchor.get('snapshot')
            if (not isinstance(target, str) or not target.startswith('review-')
                    or len(target) > 200 or not isinstance(snapshot, str)
                    or not 1 <= len(snapshot) <= 50000):
                raise ValueError()
            return snapshot
        if 'intro' in anchor:
            lesson_data = json.loads((lesson / 'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
            index = anchor['intro']
            if type(index) is not int or index < 0:
                raise ValueError()
            return lesson_data['intro'][index]
        scene, step, part = anchor['scene'], anchor['step'], anchor['part']
        if not isinstance(scene, str) or any(type(i) is not int or i < 0 for i in (step, part)):
            raise ValueError()
        scripts = json.loads((lesson / 'script.json').read_text())
        text = scripts[scene][step].split('\n\n')[part]
        if text.startswith('【切换｜') and text.endswith('】'):
            return '⇄ ' + text[len('【切换｜'):-1]
        return text
    except (KeyError, IndexError, ValueError, TypeError) as error:
        raise CommentError('选中的段落已经变化，请刷新后重新选择') from error


def prune_orphan_comments(lesson):
    """原文已不存在时删除未解决评论；依据完整源稿，不依据当前页面视图。"""
    scripts = json.loads((lesson / 'script.json').read_text())
    intro = None

    def exists(anchor):
        nonlocal intro
        if 'review' in anchor:
            return True
        if 'intro' in anchor:
            if intro is None:
                intro = json.loads((lesson / 'lesson.js').read_text().removeprefix(
                    'window.lesson = ').strip().removesuffix(';')).get('intro', [])
            paragraphs = intro
        else:
            paragraphs = [part for block in scripts.get(anchor.get('scene'), [])
                          for part in block.split('\n\n')]
        quote = anchor.get('quote', '')
        return bool(quote) and any(quote in text for text in paragraphs if text.strip())

    with comment_lock(lesson):
        data = load_comments(lesson)
        kept = [comment for comment in data['comments']
                if comment.get('status') != 'open'
                or any(exists(anchor) for anchor in comment.get('anchors', []))]
        if len(kept) != len(data['comments']):
            data['comments'] = kept
            store_comments(lesson, data)
        return data


def validate_anchors(lesson, anchors):
    if not isinstance(anchors, list) or not 1 <= len(anchors) <= 100:
        raise CommentError('请选择需要评论的文字')
    clean = []
    for anchor in anchors:
        if not isinstance(anchor, dict):
            raise CommentError('文字位置无效')
        text = paragraph_text(lesson, anchor)
        start, end, quote = anchor.get('start'), anchor.get('end'), anchor.get('quote')
        raw = text.encode('utf-16-le')
        if (type(start) is not int or type(end) is not int or not 0 <= start < end <= len(raw) // 2
                or not isinstance(quote, str) or not quote.strip()):
            raise CommentError('文字位置无效')
        # DOM Range 的偏移量为 UTF-16 code units，兼容 emoji 等非 BMP 字符。
        try:
            selected = raw[start * 2:end * 2].decode('utf-16-le')
        except UnicodeDecodeError as error:
            raise CommentError('请选中完整文字') from error
        if selected != quote:
            raise CommentError('原文已经变化，请刷新后重新选择')
        loc = {k: anchor[k] for k in ('intro', 'scene', 'step', 'part', 'review', 'snapshot') if k in anchor}
        before = raw[:start * 2].decode('utf-16-le')
        after = raw[end * 2:].decode('utf-16-le')
        clean.append({**loc, 'start': start, 'end': end, 'quote': quote,
                      'prefix': before[-40:], 'suffix': after[:40]})
    return clean


def mutate_comment(payload, root=ROOT):
    lesson = lesson_for(payload['page'], root)
    action = payload.get('action')
    if action not in ('create', 'edit', 'delete', 'resolve'):
        raise CommentError('未知评论操作')
    now = datetime.now(timezone.utc).isoformat(timespec='microseconds')
    with comment_lock(lesson):
        data = load_comments(lesson)
        comments = data['comments']
        if action in ('create', 'edit'):
            body = payload.get('body')
            if not isinstance(body, str) or not 1 <= len(body.strip()) <= 10000:
                raise CommentError('评论不能为空，且不能超过 10000 个字符')
            body = body.strip()
        if action == 'create':
            anchors = validate_anchors(lesson, payload.get('anchors'))
            comment = {'id': uuid.uuid4().hex, 'body': body, 'anchors': anchors,
                       'quote': '\n\n'.join(a['quote'] for a in anchors),
                       'status': 'open', 'revision': 1, 'createdAt': now, 'updatedAt': now}
            comments.append(comment)
        else:
            comment = next((c for c in comments if c['id'] == payload.get('id')), None)
            if comment is None:
                raise CommentError('评论已删除，请刷新后再试')
            if payload.get('revision') != comment['revision']:
                raise CommentError('评论已在别处更新，请重新打开后再试')
            if comment['status'] != 'open':
                raise CommentError('评论已经解决')
            if action == 'delete':
                comments.remove(comment)
            elif action == 'edit':
                comment.update(body=body, updatedAt=now, revision=comment['revision'] + 1)
            else:
                resolution = payload.get('resolution')
                if not isinstance(resolution, str) or not 1 <= len(resolution.strip()) <= 10000:
                    raise CommentError('请说明对应改动与检查结果')
                comment.update(status='resolved', resolvedAt=now, updatedAt=now,
                               resolution=resolution.strip(), revision=comment['revision'] + 1)
        store_comments(lesson, data)
    return data


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest='action', required=True)
    ls = sub.add_parser('list', help='列出一节未解决评论')
    ls.add_argument('page', help='仓库相对路径，如 courseware/ch03/lessons/02-rules/speaker.html')
    ls.add_argument('--all', action='store_true', help='包含已解决记录')
    resolve = sub.add_parser('resolve', help='完成对应改稿并检查后，标记评论已解决')
    resolve.add_argument('page')
    resolve.add_argument('id')
    resolve.add_argument('--revision', type=int, required=True, help='list 中读到的版本，防止覆盖新反馈')
    resolve.add_argument('--note', required=True, help='对应改动与检查结果')
    args = parser.parse_args()
    try:
        if args.action == 'list':
            data = load_comments(lesson_for(args.page))
            comments = data['comments'] if args.all else [c for c in data['comments'] if c['status'] == 'open']
            print(json.dumps(comments, ensure_ascii=False, indent=2))
        else:
            mutate_comment({'action': 'resolve', 'page': args.page, 'id': args.id,
                            'revision': args.revision, 'resolution': args.note})
            print('已解决：' + args.id)
    except (CommentError, OSError, ValueError) as error:
        parser.exit(1, str(error) + '\n')


if __name__ == '__main__':
    main()

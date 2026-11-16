#!/usr/bin/env python3
"""隔离临时课件中的口播编辑、评论存储、API 与浏览器回归；不写真实课稿。"""
import json
import importlib.util
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest
from urllib.error import HTTPError
from urllib.request import Request, urlopen

from script_comments import CommentError, load_comments, mutate_comment, prune_orphan_comments

REPO = Path(__file__).resolve().parents[1]
PAGE = '/courseware/chtest/lesson/speaker.html'
TEXT = '这一段🙂包含重复词语。我们检查计步和重开，再检查计步和重开。'
SECOND = '第二段用于检查跨段落评论，以及修改后的定位。'


def fixture(root):
    lesson = root / 'courseware/chtest/lesson'
    lesson.mkdir(parents=True, exist_ok=True)
    scripts = {'p01': ['【操作提示｜只看材料】\n\n' + TEXT + '\n\n' + SECOND]}
    (lesson / 'script.json').write_text(json.dumps(scripts, ensure_ascii=False))
    data = {'title': '评论测试', 'intro': ['独立开场白也可以评论。'], 'scenes': [
        {'id': 'p01', 'title': '测试', 'steps': ['第一步'], 'script': scripts['p01']} ]}
    (lesson / 'lesson.js').write_text('window.lesson = ' + json.dumps(data, ensure_ascii=False) + ';\n')
    (lesson / 'speaker.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8">
    <link rel="stylesheet" href="../../shared/tokens.css"><link rel="stylesheet" href="../../shared/styles.css">
    <script src="lesson.js" defer></script><script src="../../shared/speaker.js" defer></script>
    <body><main class="script-page"><header><h1>评论测试</h1></header><div id="script"></div></main></body></html>''')
    return lesson


def anchor(text=TEXT, quote='计步和重开', last=False):
    start = text.rindex(quote) if last else text.index(quote)
    units = lambda value: len(value.encode('utf-16-le')) // 2
    return {'scene': 'p01', 'step': 0, 'part': 1, 'quote': quote,
            'start': units(text[:start]), 'end': units(text[:start + len(quote)])}


class StorageTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        self.lesson = fixture(self.root)

    def tearDown(self):
        self.tmp.cleanup()

    def create(self, **kwargs):
        return mutate_comment({'page': PAGE, 'action': 'create', 'body': '请解释计步规则',
                               'anchors': [anchor()], **kwargs}, self.root)['comments'][0]

    def test_removed_quote_deletes_orphan_comment(self):
        self.create()
        scripts = json.loads((self.lesson / 'script.json').read_text())
        scripts['p01'] = ['【操作提示｜新稿】\n\n完全不同的新段落']
        (self.lesson / 'script.json').write_text(json.dumps(scripts))
        self.assertEqual(prune_orphan_comments(self.lesson)['comments'], [])
        self.assertEqual(load_comments(self.lesson)['comments'], [])

    def test_moved_original_keeps_comment_but_other_scene_does_not(self):
        self.create()
        scripts = {'p01': ['【操作提示｜新位置】\n\n别的段落\n\n' + TEXT]}
        (self.lesson / 'script.json').write_text(json.dumps(scripts))
        self.assertEqual(len(prune_orphan_comments(self.lesson)['comments']), 1)
        scripts = {'other': scripts['p01']}
        (self.lesson / 'script.json').write_text(json.dumps(scripts))
        self.assertEqual(prune_orphan_comments(self.lesson)['comments'], [])

    def test_create_edit_resolve_keeps_original(self):
        original = (self.lesson / 'script.json').read_text()
        comment = self.create()
        self.assertEqual(comment['anchors'][0]['quote'], '计步和重开')
        mutate_comment({'page': PAGE, 'action': 'edit', 'id': comment['id'], 'revision': 1,
                        'body': '更新意见'}, self.root)
        with self.assertRaises(CommentError):
            mutate_comment({'page': PAGE, 'action': 'delete', 'id': comment['id'], 'revision': 1}, self.root)
        resolved = mutate_comment({'page': PAGE, 'action': 'resolve', 'id': comment['id'], 'revision': 2,
                                   'resolution': '已补解释并检查'}, self.root)['comments'][0]
        self.assertEqual(resolved['status'], 'resolved')
        self.assertEqual(resolved['quote'], '计步和重开')
        self.assertEqual(resolved['revision'], 3)
        self.assertEqual((self.lesson / 'script.json').read_text(), original)

    def test_delete_and_multi_paragraph(self):
        second = {'scene': 'p01', 'step': 0, 'part': 2, 'quote': '第二段', 'start': 0, 'end': 3}
        comment = self.create(anchors=[anchor(quote='🙂'), second])
        self.assertEqual(comment['quote'], '🙂\n\n第二段')
        mutate_comment({'page': PAGE, 'action': 'delete', 'id': comment['id'], 'revision': 1}, self.root)
        self.assertEqual(load_comments(self.lesson)['comments'], [])

    def test_reject_stale_text_invalid_path_and_empty_comment(self):
        for payload in ({'anchors': [{**anchor(), 'quote': '已变化'}]}, {'page': '/../../etc/passwd'},
                        {'body': ''}, {'anchors': []}, {'anchors': [{**anchor(), 'start': -1}]}):
            with self.subTest(payload=payload), self.assertRaises(CommentError):
                self.create(**payload)

    def test_comments_are_excluded_from_published_site(self):
        spec = importlib.util.spec_from_file_location('build_site', REPO / 'tools/build-site.py')
        module = importlib.util.module_from_spec(spec); spec.loader.exec_module(module)
        for name in ('comments.json', '.comments.lock', '.comments-123.tmp'):
            path = Path('ch03/lessons/02-rules') / name
            self.assertFalse(module.wanted(path, path))


class BrowserTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        from playwright.sync_api import sync_playwright
        cls.tmp = tempfile.TemporaryDirectory()
        cls.root = Path(cls.tmp.name)
        cls.lesson = fixture(cls.root)
        (cls.root / 'tools').mkdir()
        (cls.root / 'courseware/tools').mkdir()
        (cls.root / 'courseware/shared').symlink_to(REPO / 'courseware/shared', target_is_directory=True)
        for name in ('serve-courseware.py', 'script_comments.py'):
            shutil.copy(REPO / 'tools' / name, cls.root / 'tools' / name)
        shutil.copy(REPO / 'courseware/tools/rebuild-lesson.py', cls.root / 'courseware/tools/rebuild-lesson.py')
        cls.server = subprocess.Popen([sys.executable, str(cls.root / 'tools/serve-courseware.py'), '--port', '0'],
                                      stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True)
        line = cls.server.stdout.readline().strip()
        assert line.startswith('Courseware: http://127.0.0.1:'), line
        cls.base = line.removeprefix('Courseware: ').removesuffix('/courseware/')
        cls.pw = sync_playwright().start()
        cls.browser = cls.pw.chromium.launch()

    @classmethod
    def tearDownClass(cls):
        cls.browser.close(); cls.pw.stop()
        cls.server.terminate(); cls.server.wait(timeout=10)
        cls.server.stdout.close(); cls.tmp.cleanup()

    def setUp(self):
        fixture(self.root)
        path = self.lesson / 'comments.json'
        if path.exists(): path.unlink()
        self.page = self.browser.new_page(viewport={'width': 1280, 'height': 900})
        self.errors = []
        self.page.on('pageerror', lambda error: self.errors.append(str(error)))
        self.page.goto(self.base + PAGE)
        self.page.wait_for_selector('.comment-markers', state='attached')
        self.original = (self.lesson / 'script.json').read_text()

    def tearDown(self):
        self.assertEqual(self.errors, [])
        self.page.close()

    def select(self, cross=False, last=False, quote='计步和重开'):
        self.page.evaluate('''({cross,last,quote}) => {
          const p = document.querySelector('p.narration[data-part="1"]');
          const q = cross ? document.querySelector('p.narration[data-part="2"]') : p;
          const start = last ? p.textContent.lastIndexOf(quote) : p.textContent.indexOf(quote);
          const r = document.createRange(); r.setStart(p.firstChild, start);
          r.setEnd(q.firstChild, cross ? 3 : start + quote.length);
          const s = getSelection(); s.removeAllRanges(); s.addRange(r);
        }''', {'cross': cross, 'last': last, 'quote': quote})
        self.page.get_by_role('button', name='添加评论', exact=True).click()

    def save(self, text):
        self.page.get_by_role('textbox', name='评论内容').fill(text)
        self.page.get_by_role('button', name='保存', exact=True).click()
        self.page.wait_for_selector('.comment-panel', state='detached')

    def api(self, payload, origin=None, endpoint='/__script/comments'):
        req = Request(self.base + endpoint, json.dumps({'page': PAGE, **payload}).encode(),
                      {'Content-Type': 'application/json', 'Origin': origin or self.base})
        with urlopen(req) as response: return json.load(response)

    def test_full_lifecycle_persistence_position_and_external_resolve(self):
        self.select(last=True)
        self.save('请解释这一句\n第二行 <img src=x onerror=alert(1)>')
        self.assertEqual((self.lesson / 'script.json').read_text(), self.original)
        self.assertEqual(self.page.locator('.comment-dot').count(), 1)
        geometry = self.page.evaluate('''() => {
          const p=document.querySelector('p.narration[data-part="1"]');
          const end=p.textContent.lastIndexOf('计步和重开')+'计步和重开'.length;
          const r=document.createRange();r.setStart(p.firstChild,end-1);r.setEnd(p.firstChild,end);
          const a=r.getBoundingClientRect(), b=document.querySelector('.comment-dot').getBoundingClientRect();
          return {x:b.x+12-a.x,y:b.y+12-a.y};
        }''')
        self.assertLess(abs(geometry['x']), 2); self.assertLess(abs(geometry['y']), 2)
        self.page.reload(); self.page.wait_for_selector('.comment-dot')
        self.page.locator('.comment-dot').click()
        self.assertIn('<img src=x', self.page.locator('.comment-body').inner_text())
        self.assertEqual(self.page.locator('.comment-panel img').count(), 0)
        self.page.get_by_role('button', name='编辑', exact=True).click(); self.save('修改后的评论')
        comment = json.loads((self.lesson / 'comments.json').read_text())['comments'][0]
        with self.assertRaises(HTTPError) as error:
            self.api({'action': 'edit', 'id': comment['id'], 'revision': 1, 'body': '过期更新'})
        self.assertEqual(error.exception.code, 409)
        # Agent 通过 CLI 解决，页面轮询后隐藏，不依赖刷新。
        result = subprocess.run([sys.executable, str(self.root/'tools/script_comments.py'), 'resolve', PAGE,
                                 comment['id'], '--revision', str(comment['revision']), '--note', '已改稿并检查'],
                                capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.page.wait_for_selector('.comment-dot', state='detached', timeout=10000)
        self.assertEqual(json.loads((self.lesson/'comments.json').read_text())['comments'][0]['status'], 'resolved')
        self.page.reload(); self.page.wait_for_selector('.comment-markers', state='attached')
        self.assertEqual(self.page.locator('.comment-dot').count(), 0)

    def test_cross_paragraph_delete_and_failed_save(self):
        self.select(cross=True); self.save('跨段落意见')
        comment = json.loads((self.lesson/'comments.json').read_text())['comments'][0]
        self.assertEqual(len(comment['anchors']), 2)
        self.page.locator('.comment-dot').click()
        self.page.get_by_role('button', name='编辑', exact=True).click()
        self.page.get_by_role('textbox', name='评论内容').fill('本地未保存意见')
        self.api({'action': 'edit', 'id': comment['id'], 'revision': 1, 'body': '另一窗口的修改'})
        self.page.get_by_role('button', name='保存', exact=True).click()
        self.page.wait_for_selector('.comment-error:not(:empty)')
        self.assertEqual(self.page.get_by_role('textbox', name='评论内容').input_value(), '本地未保存意见')
        self.page.get_by_role('button', name='取消', exact=True).click()
        self.page.reload(); self.page.wait_for_selector('.comment-dot'); self.page.locator('.comment-dot').click()
        self.page.get_by_role('button', name='删除', exact=True).click()
        self.page.wait_for_selector('.comment-dot', state='detached')
        self.page.reload(); self.page.wait_for_selector('.comment-markers', state='attached')
        self.assertEqual(json.loads((self.lesson/'comments.json').read_text())['comments'], [])

    def test_narration_conflict_review_retry_and_refresh(self):
        p = self.page.locator('p.narration[data-part="1"]')
        self.api({'scene': 'p01', 'step': 0, 'part': 1, 'old': TEXT, 'new': '另一窗口的新稿'},
                 endpoint='/__script/edit')
        p.fill('我的改稿'); p.press('Enter')
        dialog = self.page.locator('.script-conflict')
        dialog.wait_for(state='visible')
        self.assertIn('另一窗口的新稿', dialog.inner_text())
        # 对照窗口打开期间第三次更新，重试必须再次拦住，不能强制覆盖。
        self.api({'scene': 'p01', 'step': 0, 'part': 1, 'old': '另一窗口的新稿', 'new': '更新的稿'},
                 endpoint='/__script/edit')
        dialog.get_by_role('textbox').fill('合并两边的稿')
        dialog.get_by_role('button', name='保存整理后的这一段').click()
        self.page.wait_for_function("document.querySelector('.script-conflict pre')?.textContent === '更新的稿'")
        self.assertEqual(dialog.get_by_role('textbox').input_value(), '合并两边的稿')
        dialog.get_by_role('button', name='保存整理后的这一段').click()
        self.page.wait_for_selector('p.narration[data-part="1"][data-state="saved"]')
        self.page.reload(); self.page.wait_for_selector('.script-editable')
        self.assertEqual(p.inner_text(), '合并两边的稿')
        self.assertEqual(self.page.locator('p.narration[data-part="2"]').inner_text(), SECOND)

    def test_narration_conflict_draft_survives_cancel_and_reload(self):
        self.page.on('dialog', lambda dialog: dialog.accept())
        p = self.page.locator('p.narration[data-part="1"]')
        self.api({'scene': 'p01', 'step': 0, 'part': 1, 'old': TEXT, 'new': '源文件的新稿'},
                 endpoint='/__script/edit')
        p.fill('未保存输入'); p.press('Enter')
        dialog = self.page.locator('.script-conflict')
        dialog.get_by_role('textbox').fill('整理到一半的草稿')
        dialog.get_by_role('button', name='保留草稿，稍后处理').click()
        self.page.wait_for_selector('p.narration[data-part="1"][data-state="error"]')
        self.page.reload(); self.page.wait_for_selector('.script-editable')
        self.assertEqual(p.inner_text(), '整理到一半的草稿')
        p.focus(); p.press('Enter')
        dialog.wait_for(state='visible')
        self.assertIn('源文件的新稿', dialog.inner_text())
        dialog.get_by_role('button', name='保存整理后的这一段').click()
        self.page.wait_for_selector('p.narration[data-part="1"][data-state="saved"]')
        self.page.reload(); self.page.wait_for_selector('.script-editable')
        self.assertEqual(p.inner_text(), '整理到一半的草稿')

    def test_clear_narration_preserves_coordinates_comments_and_can_restore(self):
        # 连续展示的两段中删掉一段，下一段的编辑坐标和评论不能前移。
        self.api({'action': 'create', 'body': '后一段的评论', 'anchors': [
            {'scene': 'p01', 'step': 0, 'part': 2, 'quote': '第二段', 'start': 0, 'end': 3}]})
        comments_before = (self.lesson / 'comments.json').read_bytes()
        p = self.page.locator('p.narration[data-part="1"]')
        p.fill(''); p.press('Enter')
        self.page.wait_for_selector('p.narration[data-part="1"][data-state="saved"]')
        parts = json.loads((self.lesson/'script.json').read_text())['p01'][0].split('\n\n')
        self.assertEqual(parts, ['【操作提示｜只看材料】', '', SECOND])
        self.page.reload(); self.page.wait_for_selector('.comment-dot')
        self.assertEqual(p.inner_text(), '')
        self.assertEqual(self.page.locator('p.narration[data-part="2"]').inner_text(), SECOND)
        self.assertEqual(self.page.locator('.comment-dot').get_attribute('data-changed'), 'false')
        # 老标签页不能用删除前的文字覆盖已清空的段落。
        with self.assertRaises(HTTPError) as error:
            self.api({'scene': 'p01', 'step': 0, 'part': 1, 'old': TEXT, 'new': '过期修改'},
                     endpoint='/__script/edit')
        self.assertEqual(error.exception.code, 409)
        q = self.page.locator('p.narration[data-part="2"]')
        q.fill(SECOND + ' 后续仍可编辑。'); q.press('Enter')
        self.page.wait_for_selector('p.narration[data-part="2"][data-state="saved"]')
        p.fill('撤销这次输入'); p.press('Escape')
        self.assertEqual(p.inner_text(), '')
        p.fill(TEXT); p.press('Enter')
        self.page.wait_for_selector('p.narration[data-part="1"][data-state="saved"]')
        self.page.reload(); self.page.wait_for_selector('.comment-dot')
        self.assertEqual(p.inner_text(), TEXT)
        self.assertEqual(q.inner_text(), SECOND + ' 后续仍可编辑。')
        self.assertEqual((self.lesson/'comments.json').read_bytes(), comments_before)

    def test_shift_enter_preserves_line_break_after_save_and_reload(self):
        p = self.page.locator('p.narration[data-part="1"]')
        p.click(); p.press('End'); p.press('Shift+Enter'); p.press('x')
        self.assertEqual(p.get_attribute('data-state'), 'editing')
        p.press('Enter')
        self.page.wait_for_selector('p.narration[data-part="1"][data-state="saved"]')
        text = p.inner_text()
        self.assertIn('\n', text)
        parts = json.loads((self.lesson/'script.json').read_text())['p01'][0].split('\n\n')
        self.assertEqual(len(parts), 3)
        self.assertEqual(parts[1], text)
        self.assertEqual(parts[2], SECOND)
        self.page.reload()
        self.assertEqual(p.inner_text(), text)
        self.assertEqual(self.page.locator('p.narration[data-part="2"]').inner_text(), SECOND)

    def test_clear_intro_persists_without_changing_scene_script(self):
        intro = self.page.locator('p.narration[data-intro="0"]')
        intro.fill(''); intro.press('Enter')
        self.page.wait_for_selector('p.narration[data-intro="0"][data-state="saved"]')
        self.page.reload(); self.page.wait_for_selector('.comment-markers', state='attached')
        self.assertEqual(intro.inner_text(), '')
        self.assertEqual((self.lesson/'script.json').read_text(), self.original)

    def test_reanchor_after_text_edit_and_mobile_panel(self):
        self.select(); self.save('保持定位')
        p = self.page.locator('p.narration[data-part="1"]')
        p.fill('新增前缀。' + TEXT); p.press('Enter')
        self.page.wait_for_selector('p.narration[data-state="saved"]')
        self.assertEqual(self.page.locator('.comment-dot').get_attribute('data-changed'), 'false')
        self.page.set_viewport_size({'width': 390, 'height': 844})
        self.page.locator('.comment-dot').click()
        box = self.page.locator('.comment-panel').bounding_box()
        self.assertGreaterEqual(box['x'], 0); self.assertLessEqual(box['x']+box['width'], 390)
        self.page.get_by_role('button', name='关闭评论', exact=True).click()
        p.fill('原来那句话已经被重新表述。'); p.press('Enter')
        self.page.wait_for_selector('p.narration[data-state="saved"]')
        self.page.reload()
        self.page.wait_for_selector('.comment-markers', state='attached')
        self.assertEqual(self.page.locator('.comment-dot').count(), 0)
        self.assertEqual(json.loads((self.lesson/'comments.json').read_text())['comments'], [])
        # 恢复隔离夹具，供其余测试使用。
        (self.lesson/'script.json').write_text(self.original)
        subprocess.run([sys.executable, str(self.root/'courseware/tools/rebuild-lesson.py'), str(self.lesson)], check=True)

    def test_api_rejects_foreign_origin_and_path_escape(self):
        with self.assertRaises(HTTPError) as error:
            self.api({'action': 'create', 'anchors': [anchor()], 'body': 'bad'}, origin='https://example.com')
        self.assertEqual(error.exception.code, 403)
        with self.assertRaises(HTTPError) as error:
            self.api({'page': '/../../etc/passwd', 'action': 'create', 'anchors': [anchor()], 'body': 'bad'})
        self.assertEqual(error.exception.code, 409)


if __name__ == '__main__':
    unittest.main(verbosity=2)

import json
from pathlib import Path
import threading
import unittest
from http.server import ThreadingHTTPServer
from urllib.error import HTTPError
from urllib.request import Request, urlopen

import test_edit_project as fixture_module
from edit_project import prepare
from build_review import build_data, write_review
from serve_review import make_handler


class ReviewTests(unittest.TestCase):
    def setUp(self):
        fixture = fixture_module.EditingTests()
        fixture.setUp()
        self.addCleanup(fixture.doCleanups)
        self.fixture = fixture
        self.output = fixture.root / 'review'
        self.queue = prepare(fixture.project, fixture.plan, self.output)
        self.queue['clips'][0]['cut_details'] = [dict(range=[6, 8], text='重复起句',
            reason='保留后面的完整版本', category='重复', review_status='未听校')]
        self.queue_path = self.output / 'render-queue.json'
        self.save()

    def save(self):
        self.queue_path.write_text(json.dumps(self.queue))

    def test_pause_and_unselected_material_are_not_deleted(self):
        result = build_data(self.queue, self.output)
        self.assertEqual(result['pause_seconds'], 10)
        clip = result['clips'][0]
        self.assertEqual(clip['source_seconds'], 10)
        self.assertEqual(clip['cut_seconds'], 2)
        self.assertEqual(clip['kept_seconds'], 8)
        self.assertEqual(clip['cut_percent'], 20)
        self.assertEqual(clip['events'][0]['at'], 1)
        self.assertEqual(result['issues'], [])

    def test_full_lesson_chapter_seek_uses_output_time(self):
        self.queue['scope'] = 'lesson'
        self.queue['clips'][0]['chapters'] = [dict(start=20, title='读取文件')]
        result = build_data(self.queue, self.output)
        self.assertEqual(result['scope'], 'lesson')
        self.assertEqual(result['clips'][0]['chapters'][0]['at'], 3)

    def test_keep_gap_requires_its_own_reason(self):
        fixture = self.fixture
        fixture.plan['clips'] = [dict(name='gaps', keep=[[0, 3], [7, 10]])]
        queue = prepare(fixture.project, fixture.plan, fixture.root / 'gaps')
        result = build_data(queue, self.output)
        self.assertEqual(result['clips'][0]['cut_seconds'], 4)
        self.assertTrue(result['issues'])

    def test_missing_reason_strict_stops(self):
        self.queue['clips'][0]['cut_details'] = []
        self.save()
        with self.assertRaises(ValueError):
            write_review(self.queue_path, strict=True)

    def test_mismatched_actual_slices_stop(self):
        self.queue['clips'][0]['source_ranges'][0][1] += 1
        with self.assertRaises(ValueError):
            build_data(self.queue, self.output)

    def test_manually_changed_work_project_stops(self):
        path = Path(self.queue['clips'][0]['project']) / 'project.json'
        native = json.loads(path.read_text())
        native['json']['scenes'][0]['slices'][0]['sourceEndMs'] += 500
        path.write_text(json.dumps(native))
        with self.assertRaises(ValueError):
            build_data(self.queue, self.output)

    def test_zoom_reason_and_output_coordinates(self):
        clip = self.queue['clips'][0]
        clip['zooms'] = [dict(range=[20, 24], scale=1.35, target=[.5, .5],
                             purpose='reading', target_label='源码行号', reason='小字需读清')]
        event = build_data(self.queue, self.output)['clips'][0]['events'][1]
        self.assertEqual((event['at'], event['output_end'], event['seconds']), (3, 7, 4))
        self.assertEqual(event['category'], '阅读小字')

    def test_html_escapes_untrusted_transcript_and_exports_every_event(self):
        self.queue['clips'][0]['cut_details'][0]['text'] = '</script><script>alert(1)</script>'
        self.save()
        write_review(self.queue_path, strict=True)
        html = (self.output / 'review.html').read_text()
        self.assertNotIn('</script><script>alert(1)</script>', html)
        self.assertIn('\\u003c/script>', html)
        self.assertTrue((self.output / 'edit-audit.tsv').is_file())

    def test_server_seeking_and_no_directory_exposure(self):
        target = Path(self.queue['clips'][0]['export'])
        target.write_bytes(bytes(range(100)))
        write_review(self.queue_path, strict=True)
        server = ThreadingHTTPServer(('127.0.0.1', 0), make_handler(self.output))
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        self.addCleanup(server.server_close)
        self.addCleanup(server.shutdown)
        base = f'http://127.0.0.1:{server.server_port}'
        with urlopen(Request(base + '/media/video-0', headers={'Range': 'bytes=30-39'})) as response:
            self.assertEqual(response.status, 206)
            self.assertEqual(response.read(), bytes(range(30, 40)))
        with self.assertRaises(HTTPError) as error:
            urlopen(base + '/../../../project.json')
        self.assertEqual(error.exception.code, 404)


if __name__ == '__main__':
    unittest.main()

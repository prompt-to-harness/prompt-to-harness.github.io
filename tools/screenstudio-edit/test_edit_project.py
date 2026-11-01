import json
from pathlib import Path
import tempfile
import unittest

from edit_project import intervals, make_document, map_ranges, prepare, subtract


class EditingTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.project = self.root / 'original.screenstudio'
        recording = self.project / 'recording'
        recording.mkdir(parents=True)
        tracks = []
        for kind in ('display', 'microphone'):
            sessions = []
            for i, start in enumerate((1000, 21000)):
                filename = f'{kind}-{i}.media'
                (recording / filename).write_bytes(b'original media')
                sessions.append(dict(processTimeStartMs=start, durationMs=10000,
                                     outputFilename=filename))
            tracks.append(dict(type=kind, sessions=sessions))
        (recording / 'metadata.json').write_text(json.dumps(dict(recorders=tracks)))
        (self.project / 'meta.json').write_text(json.dumps(dict(json=dict(version='3.5.1-4051'))))
        self.source = dict(json=dict(id='original', name='Original', config={}, scenes=[dict(
            type='recording', sessionIndex=0, layouts=[], masks=[], zoomRanges=[],
            slices=[dict(id='original-slice', timeScale=1, sourceStartMs=0, sourceEndMs=20000)])]))
        (self.project / 'project.json').write_text(json.dumps(self.source))
        self.settings = dict(mirror_camera=True, camera_size=.22, cursor_size=1.5, click_circle=True)
        self.plan = dict(version=1, timeline='recording-wall', settings=self.settings,
                         clips=[dict(name='Sample', keep=[[5, 25]], cut=[[6, 8]])])
        self.sessions = [dict(start=0, end=10, joined=0), dict(start=20, end=30, joined=10)]

    def test_pause_gap_is_removed_and_not_counted_as_media(self):
        mapped = map_ranges([[5, 25]], self.sessions)
        self.assertEqual(mapped, [[5, 10], [10, 15]])
        self.assertEqual(map_ranges(subtract([[5, 25]], [[6, 8]]), self.sessions),
                         [[5, 6], [8, 10], [10, 15]])

    def test_reject_invalid_and_silent_gap_ranges(self):
        for ranges in ([[2, 1]], [[1, 3], [2, 4]], [[float('nan'), 2]]):
            with self.assertRaises(ValueError):
                intervals(ranges)
        with self.assertRaises(ValueError):
            map_ranges([[12, 15]], self.sessions)

    def test_config_and_zoom_use_source_not_cut_output_time(self):
        clip = dict(name='Sample', keep=[[20, 30]], cut=[[22, 24]],
                    zooms=[dict(range=[21, 26], scale=1.35, target=[.5, .6])])
        doc, _ = make_document(self.source, self.sessions, clip, self.settings)
        config = doc['json']['config']
        self.assertTrue(config['mirrorCamera'])
        self.assertEqual(config['defaultLayout']['cameraPositionPoint'], dict(x=1, y=0))
        self.assertEqual(config['defaultLayout']['cameraSize'], .22)
        self.assertEqual(config['cameraScaleDuringZoom'], 1)
        zoom = doc['json']['scenes'][0]['zoomRanges'][0]
        self.assertEqual((zoom['startTime'], zoom['endTime']), (11000, 16000))
        self.assertEqual(zoom['type'], 'manual')
        self.assertEqual(self.source['json']['config'], {})

    def test_cut_outside_keep_is_not_silently_ignored(self):
        with self.assertRaises(ValueError):
            make_document(self.source, self.sessions,
                          dict(name='x', keep=[[20, 30]], cut=[[1, 2]]), self.settings)

    def test_independent_copy_manifest_and_source_unchanged(self):
        before = (self.project / 'project.json').read_bytes()
        output = self.root / 'result'
        manifest = prepare(self.project, self.plan, output)
        self.assertEqual(manifest['clips'][0]['expected_duration'], 8)
        clone = output / 'Sample.screenstudio'
        (clone / 'recording/display-0.media').write_bytes(b'changed copy')
        self.assertEqual((self.project / 'recording/display-0.media').read_bytes(), b'original media')
        self.assertEqual((self.project / 'project.json').read_bytes(), before)
        with self.assertRaises(ValueError):
            prepare(self.project, self.plan, output)

    def test_dry_run_does_not_write(self):
        target = self.root / 'dry'
        self.assertEqual(prepare(self.project, self.plan, target, True)['clips'][0]['expected_duration'], 8)
        self.assertFalse(target.exists())

    def test_whole_lesson_is_one_project_with_named_sections(self):
        self.plan['scope'] = 'lesson'
        self.plan['clips'][0]['chapters'] = [dict(start=5, title='开头'), dict(start=20, title='读取文件')]
        result = prepare(self.project, self.plan, self.root / 'whole', True)
        self.assertEqual(result['scope'], 'lesson')
        self.assertEqual(len(result['clips']), 1)
        self.assertEqual(result['clips'][0]['chapters'][1]['title'], '读取文件')
        self.plan['clips'] *= 2
        with self.assertRaises(ValueError):
            prepare(self.project, self.plan, self.root / 'split', True)

    def test_chapters_cannot_be_unordered_or_outside_the_scope(self):
        for chapters in ([dict(start=4, title='范围外')],
                         [dict(start=20, title='后面'), dict(start=5, title='前面')]):
            self.plan['clips'][0]['chapters'] = chapters
            with self.assertRaises(ValueError):
                prepare(self.project, self.plan, self.root / 'bad', True)

    def test_edited_source_and_unknown_schema_stop(self):
        self.source['json']['scenes'][0]['slices'][0]['timeScale'] = 2
        (self.project / 'project.json').write_text(json.dumps(self.source))
        with self.assertRaises(ValueError):
            prepare(self.project, self.plan, self.root / 'bad')

    def test_duplicate_names_path_traversal_and_source_output_stop(self):
        for name in ('../escape', 'same/something', '..'):
            plan = dict(self.plan, clips=[dict(name=name, keep=[[0, 1]])])
            with self.assertRaises(ValueError):
                prepare(self.project, plan, self.root / 'bad')
        self.plan['clips'] *= 2
        with self.assertRaises(ValueError):
            prepare(self.project, self.plan, self.root / 'duplicate')
        with self.assertRaises(ValueError):
            prepare(self.project, self.plan, self.project / 'inside')


if __name__ == '__main__':
    unittest.main()

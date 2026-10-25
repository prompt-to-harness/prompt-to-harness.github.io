import json
from pathlib import Path
import tempfile
import unittest
from screenstudio_transcribe import discover, inside, parse_words, render, validate_manifest

class RegressionTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
    def tearDown(self):
        self.temp.cleanup()
    def test_helper_error_even_with_completion(self):
        f = self.root / 'raw'
        f.write_text('{"type":"error","message":"Locale not supported"}\n{"type":"complete"}')
        with self.assertRaisesRegex(ValueError, 'Locale not supported'):
            parse_words(f, 0)
    def test_truncated_helper_output(self):
        f = self.root / 'raw'
        f.write_text('{"type":"word","start":0,"end":1,"word":"test"}')
        with self.assertRaisesRegex(ValueError, '完成标志'):
            parse_words(f, 0)
    def test_source_path_escape_and_symlink(self):
        folder = self.root / 'recording'; folder.mkdir()
        (folder / 'link').symlink_to(self.root / 'outside')
        for ref in ('../outside', 'link'):
            with self.assertRaises(ValueError): inside(folder, ref)
    def test_remote_manifest_rejected(self):
        f = self.root / 'audio.m3u8'
        f.write_text('#EXTM3U\nhttps://example.com/audio.m4s\n#EXT-X-ENDLIST')
        with self.assertRaises(ValueError): validate_manifest(f)
    def test_session_timestamp_offset(self):
        f = self.root / 'raw'
        f.write_text('{"type":"word","start":1,"end":2,"word":"test"}\n{"type":"complete"}')
        words = parse_words(f, 60)
        self.assertIn('[00:01:01 – 00:01:02]', render(words, 'test', 'mic', 'zh_CN'))
    def test_ambiguous_and_no_audio(self):
        rec = self.root / 'recording'; rec.mkdir()
        meta = dict(state='complete', recorders=[dict(type='display', sessions=[dict(unixStartMs=1)])])
        (rec / 'metadata.json').write_text(json.dumps(meta))
        with self.assertRaisesRegex(ValueError, '无音轨'): discover(self.root, None)
        for n in (1, 2):
            (rec / ('mic%d.m4a' % n)).touch()
            meta['recorders'].append(dict(id='mic%d' % n, type='microphone', sessions=[dict(unixStartMs=1, outputFilename='mic%d.m4a' % n)]))
        (rec / 'metadata.json').write_text(json.dumps(meta))
        with self.assertRaisesRegex(ValueError, '唯一选择'): discover(self.root, None)
        self.assertEqual(discover(self.root, 'mic2')[1]['id'], 'mic2')

if __name__ == '__main__': unittest.main()

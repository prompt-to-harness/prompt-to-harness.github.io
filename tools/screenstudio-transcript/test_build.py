import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch
import build_apple_transcriber as builder

class BuildTests(unittest.TestCase):
    def test_sdk_fallback_cache_and_source_invalidation(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / 'apple_transcribe.swift').write_text('source v1')
            sdks = [root / 'new-sdk', root / 'compatible-sdk']
            for sdk in sdks: sdk.mkdir()
            attempts = []
            def run(args, **kwargs):
                if args[-1] == '--version':
                    return subprocess.CompletedProcess(args, 0, 'Swift test compiler', '')
                attempts.append(args)
                if args[args.index('-sdk') + 1] == str(sdks[0]):
                    return subprocess.CompletedProcess(args, 1, '', 'SDK mismatch')
                target = Path(args[-1]); target.write_text('binary'); target.chmod(0o755)
                return subprocess.CompletedProcess(args, 0, '', '')
            with patch.object(builder, 'HERE', root), patch.object(builder.platform, 'system', return_value='Darwin'), \
                 patch.object(builder.platform, 'machine', return_value='arm64'), \
                 patch.object(builder.shutil, 'which', return_value='/usr/bin/xcrun'), \
                 patch.object(builder, 'sdk_candidates', return_value=sdks), \
                 patch.object(builder.subprocess, 'run', side_effect=run):
                first = builder.build(root / 'cache')
                self.assertTrue(first.is_file())
                self.assertEqual(len(attempts), 2)
                self.assertEqual(builder.build(root / 'cache'), first)
                self.assertEqual(len(attempts), 2)  # Do not retry the incompatible SDK on a cache hit.
                (root / 'apple_transcribe.swift').write_text('source v2')
                self.assertNotEqual(builder.build(root / 'cache'), first)
                self.assertEqual(len(attempts), 4)
    def test_complete_build_failure_retains_log(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder); (root / 'apple_transcribe.swift').write_text('source')
            sdk = root / 'sdk'; sdk.mkdir()
            def run(args, **kwargs):
                return subprocess.CompletedProcess(args, 0 if args[-1] == '--version' else 1, 'compiler', 'diagnostic')
            with patch.object(builder, 'HERE', root), patch.object(builder.platform, 'system', return_value='Darwin'), \
                 patch.object(builder.shutil, 'which', return_value='/usr/bin/xcrun'), \
                 patch.object(builder, 'sdk_candidates', return_value=[sdk]), \
                 patch.object(builder.subprocess, 'run', side_effect=run):
                with self.assertRaisesRegex(RuntimeError, 'build.log'): builder.build(root / 'cache')
                logs = list((root / 'cache').glob('*/build.log'))
                self.assertEqual(len(logs), 1)
                self.assertIn('diagnostic', logs[0].read_text())

if __name__ == '__main__': unittest.main()

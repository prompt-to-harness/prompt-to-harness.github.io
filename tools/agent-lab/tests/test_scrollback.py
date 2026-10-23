"""Exercise actual config loading and retained legacy configurations without API calls."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest


LEGACY = Path(__file__).resolve().parents[2] / "clean-codex.sh"


class ScrollbackTests(unittest.TestCase):
    @unittest.skipUnless(shutil.which("codex"), "requires installed Codex CLI")
    def test_config_loader_accepts_boolean_and_rejects_wrong_type(self):
        with tempfile.TemporaryDirectory() as tmp:
            home = Path(tmp)
            config = home / "config.toml"
            env = dict(os.environ, CODEX_HOME=tmp, HOME=tmp)
            for value, expected in (("false", 0), ('"invalid-type"', 1)):
                config.write_text(f"[tui]\nfullscreen_transcript = {value}\n")
                result = subprocess.run(["codex", "features", "list"], env=env,
                                        capture_output=True, text=True, timeout=30)
                self.assertEqual(result.returncode, expected, result.stderr)
                if expected:
                    self.assertIn("expected a boolean", result.stderr)

    @unittest.skipUnless(LEGACY.exists(), "legacy script is tested in the course repository")
    def test_retained_config_keeps_settings_but_receives_scrollback_override(self):
        for tap in (False, True):
            with self.subTest(tap=tap), tempfile.TemporaryDirectory() as tmp:
                root = Path(tmp)
                config = root / "home/.codex/config.toml"
                config.parent.mkdir(parents=True)
                original = '[tui]\nfullscreen_transcript = true\n[plugins]\n'
                config.write_text(original)
                binary = root / "bin"
                binary.mkdir()
                for name in ("codex", "uvx"):
                    stub = binary / name
                    stub.write_text(f"#!{sys.executable}\nimport json,sys\nfrom pathlib import Path\n"
                                    f"Path({str(root / 'args.json')!r}).write_text(json.dumps(sys.argv[1:]))\n")
                    stub.chmod(0o755)
                env = dict(os.environ, HOME=tmp, PATH=str(binary) + os.pathsep + os.environ["PATH"],
                           MINIMAX_API_KEY="fake-key-for-offline-test", CLEAN_CODEX_AUTH="minimax",
                           CLEAN_CODEX_HOME=str(root / "home"), CLEAN_CODEX_KEEP_CONFIG="1")
                command = ["bash", str(LEGACY), *(["--tap"] if tap else []), "--", "exec", "offline"]
                result = subprocess.run(command, env=env, capture_output=True, text=True, timeout=30)
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertEqual(config.read_text(), original)
                args = json.loads((root / "args.json").read_text())
                self.assertIn("tui.fullscreen_transcript=false", args)
                self.assertLess(args.index("tui.fullscreen_transcript=false"), args.index("exec"))

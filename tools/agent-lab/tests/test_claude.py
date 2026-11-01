"""No-network tests for Claude credential isolation and launch routing."""
import contextlib
import io
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

from agent_lab import claude, codex
from agent_lab.cli import main, parse_args


class ClaudeTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name).resolve()
        self.parent = {"HOME": str(self.root), "MINIMAX_API_KEY": "test-key",
                       "ANTHROPIC_API_KEY": "personal", "CLAUDE_CODE_OAUTH_TOKEN": "personal",
                       "CLAUDE_CODE_USE_BEDROCK": "1", "CLAUDE_CONFIG_DIR": "/personal",
                       "CLAUDECODE": "nested", "OPENAI_API_KEY": "personal", "BASH_ENV": "/personal"}
        self.project = self.root / "project"

    def test_home_command_is_read_only(self):
        output = io.StringIO()
        with patch.dict(os.environ, self.parent, clear=True), patch(
                "sys.argv", ["agent-lab", "home", "--agent", "claude", str(self.project)]), contextlib.redirect_stdout(output):
            self.assertEqual(main(), 0)
        self.assertEqual(Path(output.getvalue().strip()), claude.resolve_home(self.parent, self.project))
        self.assertFalse((self.root / ".local").exists())

    def test_credentials_settings_and_traces_are_isolated(self):
        env, home = claude.prepare_environment(self.parent, self.project)
        self.assertEqual(home.parent, codex.resolve_home(self.parent, self.project).parent)
        self.assertEqual(home.name, "claude")
        self.assertEqual(env["ANTHROPIC_AUTH_TOKEN"], "test-key")
        self.assertEqual(env["ANTHROPIC_BASE_URL"], claude.BASE_URL)
        for key in self.parent.keys() - {"HOME"}:
            self.assertNotIn(key, env)
        self.assertEqual(env["XDG_DATA_HOME"], str(home / ".local/share"))
        settings = (home / ".claude/settings.json").read_text()
        self.assertNotIn("test-key", settings)
        self.assertNotIn(claude.BASE_URL, settings)
        self.assertEqual(json.loads(settings)["env"]["ANTHROPIC_DEFAULT_HAIKU_MODEL"], claude.MODEL)
        self.assertEqual(env["CLAUDE_CODE_SUBPROCESS_ENV_SCRUB"], "1")

    def test_repeat_preserves_sessions_and_onboarding_state(self):
        _, home = claude.prepare_environment(self.parent, self.project)
        state = home / ".claude.json"
        state.write_text('{"hasCompletedOnboarding":true,"theme":"dark"}')
        session = home / ".claude/session.jsonl"
        session.write_text("session")
        claude.prepare_environment(self.parent, self.project)
        self.assertIn("dark", state.read_text())
        self.assertEqual(session.read_text(), "session")

    def test_missing_key_does_not_create_home(self):
        del self.parent["MINIMAX_API_KEY"]
        with self.assertRaisesRegex(ValueError, "MINIMAX_API_KEY"):
            claude.prepare_environment(self.parent, self.project)
        self.assertFalse((self.root / ".local").exists())

    def test_custom_root_and_codex_legacy_override(self):
        self.parent.update(AGENT_LAB_HOME=str(self.root / "lab"), COURSE_CODEX_HOME="/old-codex")
        self.assertEqual(claude.resolve_home(self.parent, self.project), self.root / "lab/claude")

    def test_refuses_nonempty_home(self):
        home = claude.resolve_home(self.parent, self.project)
        home.mkdir(parents=True)
        (home / "personal").write_text("keep")
        with self.assertRaisesRegex(ValueError, "非空"):
            claude.prepare_environment(self.parent, self.project)
        self.assertEqual((home / "personal").read_text(), "keep")

    def test_refuses_credentials_and_settings_symlinks(self):
        for filename in (".credentials.json", "settings.json"):
            with self.subTest(filename=filename):
                _, home = claude.prepare_environment(self.parent, self.project)
                target = home / ".claude" / filename
                target.unlink(missing_ok=True)
                personal = self.root / "personal.json"
                personal.write_text("private")
                target.symlink_to(personal)
                with self.assertRaises(ValueError):
                    claude.prepare_environment(self.parent, self.project)
                self.assertEqual(personal.read_text(), "private")
                target.unlink()

    def test_arguments_allow_print_resume_but_not_routing_changes(self):
        self.assertEqual(parse_args(["claude", "--tap", "--", "-p", "hello"]),
                         ("claude", True, ["-p", "hello"]))
        claude.validate_args(["--resume", "session"])
        claude.validate_args(["-p", "auth"])
        for args in (["--model=other"], ["--settings", "personal.json"],
                     ["--setting-sources=project"], ["auth", "login"], ["--bare"]):
            with self.subTest(args=args), self.assertRaises(ValueError):
                claude.validate_args(args)

    def test_direct_and_tap_launch_forward_args_and_exit_code(self):
        for tap in (False, True):
            with self.subTest(tap=tap), patch.dict(os.environ, self.parent, clear=True), patch(
                    "agent_lab.claude.shutil.which", return_value="/bin/claude"), patch(
                    "agent_lab.claude.subprocess.run", return_value=subprocess.CompletedProcess(
                        [], 0, "2.1.304 (Claude Code)")), patch(
                    "agent_lab.claude.subprocess.call", return_value=7) as call, patch(
                    "agent_lab.codex.dashboard_port", return_value=23456):
                self.assertEqual(claude.launch(tap, ["-p", "hello"]), 7)
                command = call.call_args.args[0]
                self.assertEqual(command[-2:], ["-p", "hello"])
                self.assertIn("--setting-sources", command)
                if tap:
                    self.assertEqual(command[:3], [sys.executable, "-m", "claude_tap"])
                    self.assertEqual(command[command.index("--tap-client") + 1], "claude")
                    self.assertIn(claude.BASE_URL, command)
                else:
                    self.assertEqual(command[0], "/bin/claude")
                self.assertNotIn("cwd", call.call_args.kwargs)
                self.assertNotIn("MINIMAX_API_KEY", call.call_args.kwargs["env"])


if __name__ == "__main__":
    unittest.main()

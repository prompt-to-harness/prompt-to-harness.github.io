import contextlib
import io
import json
import os
from pathlib import Path
import tempfile
import tomllib
import unittest
from unittest.mock import patch

from agent_lab.codex import dashboard_port, prepare_environment, LEGACY_MARKER, MODEL
from agent_lab.cli import main, parse_args


class IsolationTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.real = Path(self.temp.name).resolve()
        personal = self.real / ".codex"
        personal.mkdir()
        (personal / "auth.json").write_text('{"access_token":"personal-sentinel"}')
        (personal / "config.toml").write_text('model_provider="personal"')
        self.parent = {
            "HOME": str(self.real), "PATH": os.environ["PATH"],
            "MINIMAX_API_KEY": "minimax-test-only", "CODEX_HOME": str(personal),
            "CODEX_API_KEY": "personal-exec-key", "CODEX_ACCESS_TOKEN": "personal-token",
            "CODEX_SQLITE_HOME": str(personal), "OPENAI_API_KEY": "personal-openai",
            "CLAUDE_CODE_USER_EMAIL": "private@example.invalid",
            "ANTHROPIC_AUTH_TOKEN": "personal-claude", "ZDOTDIR": str(self.real),
            "BASH_ENV": str(self.real / "startup"), "GH_TOKEN": "gh-test-only",
        }

    def test_personal_auth_and_settings_are_not_adopted(self):
        env, home = prepare_environment(self.parent)
        config = tomllib.loads((home / ".codex/config.toml").read_text())
        self.assertEqual(config["model_provider"], "minimax")
        self.assertEqual(config["cli_auth_credentials_store"], "file")
        self.assertEqual(config["forced_login_method"], "api")
        self.assertFalse(config["allow_login_shell"])
        self.assertIn("MINIMAX_API_KEY", config["shell_environment_policy"]["exclude"])
        self.assertFalse(config["tui"]["fullscreen_transcript"])
        self.assertFalse((home / ".codex/auth.json").exists())
        for name in ("CODEX_API_KEY", "CODEX_ACCESS_TOKEN", "CODEX_SQLITE_HOME",
                     "OPENAI_API_KEY", "CLAUDE_CODE_USER_EMAIL", "ANTHROPIC_AUTH_TOKEN", "BASH_ENV"):
            self.assertNotIn(name, env)
        self.assertEqual(env["ZDOTDIR"], str(home))
        self.assertEqual(env["GH_TOKEN"], "gh-test-only")
        self.assertEqual(env["GH_CONFIG_DIR"], str(self.real / ".config/gh"))
        self.assertNotIn("minimax-test-only", (home / ".codex/config.toml").read_text())
        self.assertIn("personal-sentinel", (self.real / ".codex/auth.json").read_text())
        self.assertEqual((self.real / ".codex/config.toml").read_text(), 'model_provider="personal"')

    def test_repeated_launch_retains_sessions(self):
        _, home = prepare_environment(self.parent)
        sessions = home / ".codex/sessions"
        sessions.mkdir()
        (sessions / "sentinel").write_text("history")
        _, second = prepare_environment(self.parent)
        self.assertEqual(home, second)
        self.assertEqual((sessions / "sentinel").read_text(), "history")

    def test_missing_key_fails_without_creating_home(self):
        del self.parent["MINIMAX_API_KEY"]
        with self.assertRaisesRegex(ValueError, "MINIMAX_API_KEY"):
            prepare_environment(self.parent)
        self.assertFalse((self.real / ".local").exists())

    def test_existing_personal_directory_is_refused(self):
        self.parent["COURSE_CODEX_HOME"] = str(self.real)
        with self.assertRaisesRegex(ValueError, "非空"):
            prepare_environment(self.parent)

    def test_auth_symlink_is_refused_without_touching_personal_auth(self):
        _, home = prepare_environment(self.parent)
        (home / ".codex/auth.json").symlink_to(self.real / ".codex/auth.json")
        with self.assertRaisesRegex(ValueError, "auth.json"):
            prepare_environment(self.parent)
        self.assertIn("personal-sentinel", (self.real / ".codex/auth.json").read_text())

    def test_managed_config_symlink_is_refused(self):
        _, home = prepare_environment(self.parent)
        config = home / ".codex/config.toml"
        config.unlink()
        config.symlink_to(self.real / ".codex/config.toml")
        with self.assertRaisesRegex(ValueError, "软链接"):
            prepare_environment(self.parent)
        self.assertEqual((self.real / ".codex/config.toml").read_text(), 'model_provider="personal"')

    def test_gh_custom_config_and_keychain_are_preserved(self):
        self.parent["GH_CONFIG_DIR"] = str(self.real / "custom-gh")
        keychain = self.real / "Library/Keychains"
        keychain.mkdir(parents=True)
        with patch("agent_lab.codex.sys.platform", "darwin"):
            env, home = prepare_environment(self.parent)
            prepare_environment(self.parent)
        self.assertEqual(env["GH_CONFIG_DIR"], self.parent["GH_CONFIG_DIR"])
        self.assertEqual((home / "Library/Keychains").resolve(), keychain)

    def test_git_identity_points_at_real_global_config(self):
        env, _ = prepare_environment(self.parent)
        self.assertNotIn("GIT_CONFIG_GLOBAL", env)
        (self.real / ".gitconfig").write_text("[user]\n\tname = Test\n")
        env, home = prepare_environment(self.parent)
        self.assertEqual(env["GIT_CONFIG_GLOBAL"], str(self.real / ".gitconfig"))
        self.assertFalse((home / ".gitconfig").exists())
        self.parent["GIT_CONFIG_GLOBAL"] = str(self.real / "custom-git")
        env, _ = prepare_environment(self.parent)
        self.assertEqual(env["GIT_CONFIG_GLOBAL"], self.parent["GIT_CONFIG_GLOBAL"])

    def test_packaged_catalog_supports_fixed_model(self):
        _, home = prepare_environment(self.parent)
        actual = home / ".codex/model-catalogs/minimax.json"
        models = json.loads(actual.read_text())["models"]
        model = next(model for model in models if model["slug"] == MODEL)
        self.assertEqual(model["context_window"], 524288)
        self.assertIn("max", [level["effort"] for level in model["supported_reasoning_levels"]])
        self.assertIn("image", model["input_modalities"])

    def test_agent_specific_home(self):
        self.parent["AGENT_LAB_HOME"] = str(self.real / "lab")
        _, home = prepare_environment(self.parent)
        self.assertEqual(home, self.real / "lab/codex")
        self.assertTrue((home / ".agent-lab-home").exists())

    def test_legacy_sessions_are_preserved(self):
        legacy = self.real / ".local/share/prompt-to-harness/course-codex"
        legacy.mkdir(parents=True)
        (legacy / ".course-codex-home").write_text(LEGACY_MARKER)
        sessions = legacy / ".codex/sessions"
        sessions.mkdir(parents=True)
        (sessions / "sentinel").write_text("old history")
        _, home = prepare_environment(self.parent)
        self.assertEqual(home, legacy)
        self.assertEqual((sessions / "sentinel").read_text(), "old history")

    def test_conflicting_home_variables_are_rejected(self):
        self.parent.update(AGENT_LAB_HOME=str(self.real / "new"), COURSE_CODEX_HOME=str(self.real / "old"))
        with self.assertRaisesRegex(ValueError, "不能同时设置"):
            prepare_environment(self.parent)


class ArgumentTests(unittest.TestCase):
    def test_tap_refuses_an_unrelated_dashboard(self):
        with patch("agent_lab.codex.socket.socket") as socket, patch(
                "agent_lab.codex.build_opener") as opener:
            socket.return_value.__enter__.return_value.connect_ex.return_value = 0
            opener.return_value.open.return_value.__enter__.return_value.read.return_value = (
                b'{"ok":true,"db_path":"/other/traces.sqlite3","version":"0.1.146"}')
            with self.assertRaisesRegex(ValueError, "不关闭现有服务"):
                dashboard_port(Path("/course"))

    def test_tap_and_resume(self):
        self.assertEqual(parse_args(["codex", "--tap", "--", "resume", "--last"]),
                         ("codex", True, ["resume", "--last"]))

    def test_codex_is_dispatched(self):
        with patch("sys.argv", ["agent-lab", "codex", "--tap"]), patch(
                "agent_lab.codex.launch", return_value=0) as launch:
            self.assertEqual(main(), 0)
            launch.assert_called_once_with(True, [])

    def test_claude_placeholder_does_not_start_codex(self):
        for args in (["claude"], ["claude", "--tap"]):
            with self.subTest(args=args), patch("sys.argv", ["agent-lab", *args]), patch(
                    "agent_lab.codex.launch") as launch, contextlib.redirect_stderr(io.StringIO()) as error:
                self.assertEqual(main(), 2)
                self.assertIn("尚未实现", error.getvalue())
                launch.assert_not_called()

    def test_agent_is_required_and_unknown_agent_is_rejected(self):
        for args in ([], ["unknown"], ["--tap"]):
            with self.subTest(args=args), contextlib.redirect_stderr(io.StringIO()):
                with self.assertRaises(SystemExit):
                    parse_args(args)

    def test_routing_overrides_are_refused_before_or_after_exec(self):
        for args in (["-m", "gpt"], ["exec", "--config=model_provider='openai'"],
                     ["exec", "-cmodel_provider='openai'"], ["login"],
                     ["--remote=ws://localhost:1234"], ["--profile=personal"],
                     ["exec", "--ignore-user-config"]):
            with self.subTest(args=args), contextlib.redirect_stderr(io.StringIO()):
                with self.assertRaises(SystemExit):
                    parse_args(["codex", "--", *args])


if __name__ == "__main__":
    unittest.main()

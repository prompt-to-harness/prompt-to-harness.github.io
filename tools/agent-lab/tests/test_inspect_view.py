from pathlib import Path
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import patch

from agent_lab.inspect_view import exit_thread_id, interactive_rollout


class InspectExitTest(unittest.TestCase):
    thread = b"01a1debc-b113-7a43-a205-1201c9903123"
    footer = b"To continue this session, run:\r\n  codex resume " + thread + b"\r\n"

    def test_reads_exit_footer(self):
        for trailer in (b"", b"\nScript done on date [COMMAND_EXIT_CODE=\"0\"]\n"):
            with self.subTest(trailer=trailer):
                output = b"\x1b[?1049l\x1b[0m\r\n" + self.footer + trailer
                self.assertEqual(exit_thread_id(output), self.thread.decode())

    def test_ignores_resume_commands_inside_the_session(self):
        self.assertIsNone(exit_thread_id(self.footer + b"\x1b[?1049l\r\nOther output\r\n"))


class InteractiveRolloutTest(unittest.TestCase):
    def test_uses_own_writable_interactive_log_and_ignores_guardian(self):
        with tempfile.TemporaryDirectory() as directory:
            sessions = Path(directory)
            root = sessions / "rollout-root.jsonl"
            guardian = sessions / "rollout-guardian.jsonl"
            playback = sessions / "rollout-read-only.jsonl"
            root.write_text('{"payload":{"source":"cli"}}\n')
            guardian.write_text('{"payload":{"source":{"subagent":{"other":"guardian"}}}}\n')
            playback.write_text('{"payload":{"source":"cli"}}\n')
            descriptors = f"p120\nf1\nau\nn{root}\nf2\naw\nn{guardian}\nf3\nar\nn{playback}\n"
            with patch("agent_lab.inspect_view.subprocess.check_output", return_value="120 110\n110 100\n"), \
                 patch("agent_lab.inspect_view.subprocess.run", return_value=SimpleNamespace(stdout=descriptors)) as run:
                self.assertEqual(interactive_rollout(100, sessions), root)
                self.assertEqual(set(run.call_args.args[0][3].split(",")), {"100", "110", "120"})

import unittest

from agent_lab.inspect_view import exit_thread_id


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

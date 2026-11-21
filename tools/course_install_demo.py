"""Local, allowlisted launchers for the three 3.2 installation demonstrations."""
import json
import shlex
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CASES = {'github', 'skillsmp', 'installer'}


def launch_install_demo(payload):
    case = payload.get('demo')
    if not isinstance(case, str) or case not in CASES:
        raise ValueError('未知安装演示')
    if sys.platform != 'darwin':
        raise ValueError('一键打开终端目前适用于 macOS')
    base = Path.home() / '.cache/course-install-demos'
    base.mkdir(parents=True, exist_ok=True)
    run = Path(tempfile.mkdtemp(prefix=case + '-', dir=base))
    project = run / 'project'
    project.mkdir()
    (run / 'home').mkdir()
    subprocess.run(['git', '-C', str(project), 'init', '-q'], check=True, capture_output=True)
    # The browser chooses only an allowlisted ID, never a path or shell command.
    command = run / '开始安装演示.command'
    shell = ('cd ' + shlex.quote(str(project)) + '\n'
             + 'CLEAN_CODEX_HOME=' + shlex.quote(str(run / 'home'))
             + ' bash ' + shlex.quote(str(ROOT / 'tools/clean-codex.sh'))
             + ' -- -C ' + shlex.quote(str(project)))
    command.write_text('#!/bin/zsh\nexec /bin/zsh -lc ' + shlex.quote(shell) + '\n')
    command.chmod(0o700)
    (run / 'demo.json').write_text(json.dumps({'demo': case, 'project': str(project)}, indent=2))
    subprocess.run(['open', '-a', 'Terminal', str(command)], check=True, capture_output=True, timeout=10)
    return {'ok': True, 'project': str(project), 'demo': case}

#!/usr/bin/env python3
"""Create a local exercise repo from the sibling course-starter working tree."""
import argparse
import hashlib
import json
import shutil
import subprocess
from pathlib import Path


def main():
    resources = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--workspace-root', type=Path, default=resources.parent,
                        help='Parent directory for projects/ and experiments/; defaults to the parent of this repo')
    parser.add_argument('--starter', type=Path, default=resources.parent / 'course-starter',
                        help='Local course-starter checkout; defaults to the sibling repository')
    args = parser.parse_args()
    workspace = args.workspace_root.expanduser().resolve()
    project = workspace / 'projects' / 'personal-homepage'
    template = args.starter.expanduser().resolve()

    if workspace == resources or resources in workspace.parents:
        parser.error('The workspace must be outside the course resources repository.')
    # Resolve the destination as well, in case an existing projects/ is a symlink.
    if resources == project.resolve() or resources in project.resolve().parents:
        parser.error('The project destination resolves inside the course resources repository.')
    if project.exists() or project.is_symlink():
        parser.error(f'Destination already exists; nothing overwritten: {project}')
    if not template.is_dir():
        parser.error(f'Starter template is missing: {template}')
    if shutil.which('git') is None:
        parser.error('Git is required.')
    try:
        top = Path(subprocess.check_output(['git', '-C', str(template), 'rev-parse', '--show-toplevel'], text=True).strip()).resolve()
        if top != template:
            parser.error('Starter must be the root of a Git checkout.')
        source_commit = subprocess.check_output(['git', '-C', str(template), 'rev-parse', 'HEAD'], text=True).strip()
        source_status = subprocess.check_output(['git', '-C', str(template), 'status', '--porcelain'], text=True)
        tracked = subprocess.check_output(['git', '-C', str(template), 'ls-files', '-z'], text=True).split('\0')
        if source_status:
            parser.error('Starter has uncommitted changes. Review and commit the intended baseline before copying it.')
    except subprocess.CalledProcessError:
        parser.error('Cannot read the course-starter Git baseline.')
    sources = sorted(template / name for name in tracked if name)
    if any(p.is_symlink() or not p.is_file() or
           any((template / parent).is_symlink() for parent in p.relative_to(template).parents)
           for p in sources):
        parser.error('Starter must contain ordinary source files, not symlinks or submodules.')
    for name in ('TASK_01_01.md', 'setup-check/index.html', 'docs/setup/ENVIRONMENT.md',
                 'PROJECT_BRIEF.md', 'PLACEHOLDER_CONTENT.md', 'docs/setup/TOOLCHAIN.md'):
        if template / name not in sources:
            parser.error(f'Starter is missing required tracked file: {name}')
    if (template / 'package.json').exists() or (template / 'src').exists():
        parser.error('Use the chapter 1 starting baseline, before the React application is created.')
    # Read the existing identity without modifying the user\'s Git configuration.
    identity = {}
    for field in ('name', 'email'):
        result = subprocess.run(['git', '-C', str(resources), 'config', '--get', f'user.{field}'],
                                capture_output=True, text=True)
        if result.returncode or not result.stdout.strip():
            parser.error(f'Configure your Git user.{field} before initializing the workspace.')
        identity[field] = result.stdout.strip()
    for directory in ('projects', 'experiments'):
        target = workspace / directory
        target.mkdir(parents=True, exist_ok=True)
    project.mkdir()
    for source in sources:
        target = project / source.relative_to(template)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    provenance = {
        'template': 'https://github.com/prompt-to-harness/course-starter',
        'source_commit': source_commit,
        'status': 'local-initialization-not-recording-release',
        'sha256': {str(p.relative_to(template)): hashlib.sha256(p.read_bytes()).hexdigest() for p in sources},
    }
    (project / 'docs/setup/STARTER_SOURCE.json').write_text(json.dumps(provenance, indent=2) + '\n')
    try:
        subprocess.run(['git', 'init', '-b', 'main', str(project)], check=True, capture_output=True)
        subprocess.run(['git', '-C', str(project), 'add', '--all'], check=True)
        subprocess.run(['git', '-C', str(project), '-c', f'user.name={identity["name"]}',
                        '-c', f'user.email={identity["email"]}', 'commit', '-m',
                        'Initialize personal homepage from course Starter'], check=True, capture_output=True)
    except subprocess.CalledProcessError as error:
        parser.exit(1, f'Git initialization failed; files preserved at {project}.\n{error.stderr or ""}\n')
    commit = subprocess.check_output(['git', '-C', str(project), 'rev-parse', 'HEAD'], text=True).strip()
    print(f'Project: {project}\nInitial commit: {commit}\nExperiments: {workspace / "experiments"}')
    print('Local baseline only. No remote configured; no application generated or course checks marked passed.')


if __name__ == '__main__':
    main()

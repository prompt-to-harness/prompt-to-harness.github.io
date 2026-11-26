"""Prepare fresh instructor recording workspaces; never overwrite retained runs."""
from pathlib import Path
import argparse,json,shutil,subprocess
repo=Path(__file__).resolve().parents[5]
parser=argparse.ArgumentParser();parser.add_argument('--output',default='lab-runs/ch33-create-three-20261118/recording');args=parser.parse_args()
root=repo/args.output
source=Path(json.loads((repo/'lab-runs/ch03-purple-style-20261110/trial-location.json').read_text())['root'])
work=source/'author-layout-components-20261112/workspace'
reference=source/'dodge-reference-game-20261111/home/.codex/.tmp/plugins/plugins/game-studio/skills/game-ui-frontend/SKILL.md'
if root.exists(): raise SystemExit('目标已存在；请用 --output 指定新目录，避免覆盖演示结果。')
assert work.is_dir() and reference.is_file(), '缺少本机历史材料包'
for name in ['direct','creator','reference']:
 target=root/name;target.mkdir(parents=True)
 shutil.copytree(work/'source-game',target/'source-game',ignore=shutil.ignore_patterns('.git','node_modules','.traces'))
 shutil.copy2(work/'source-dialogue.md',target/'source-dialogue.md')
 if name=='reference':
  (target/'reference').mkdir();shutil.copy2(reference,target/'reference/game-ui-frontend.md')
 subprocess.run(['git','init','-q',str(target)],check=True)
 subprocess.run(['git','-C',str(target),'add','.'],check=True)
 subprocess.run(['git','-C',str(target),'commit','-qm','Recording input baseline before skill creation'],check=True)
 commit=subprocess.check_output(['git','-C',str(target),'rev-parse','HEAD'],text=True).strip()
 print(name,commit)

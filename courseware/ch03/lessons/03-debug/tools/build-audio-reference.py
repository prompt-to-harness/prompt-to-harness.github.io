from pathlib import Path
import json,shutil,hashlib,subprocess,difflib,argparse
parser=argparse.ArgumentParser();parser.add_argument('--source',required=True);args=parser.parse_args()
repo=Path(__file__).resolve().parents[5];root=Path(args.source).resolve();out=repo/'courseware/ch03/lessons/03-debug/evidence/audio-reference-iteration';out.mkdir(exist_ok=True)
for item in out.rglob('*'):
 if item.is_file():item.chmod(item.stat().st_mode | 0o200)
shutil.copy2(Path(__file__).resolve().parents[1]/'audio-reference-prompt.txt',out/'author-prompt-four-elements.txt')
for name in ['author','baseline','with-audio']:
 case=root/name
 if (case/'prompt.txt').exists():shutil.copy2(case/'prompt.txt',out/(name+'-prompt.txt'))
 if (case/'logs/final.md').exists():shutil.copy2(case/'logs/final.md',out/(name+'-reply.md'))
 if name!='author' and (case/'workspace/index.html').exists():
  shutil.copytree(case/'workspace',out/name,dirs_exist_ok=True,ignore=shutil.ignore_patterns('.git','.agents','.traces','node_modules'))
for label,src in [('original',root/'baseline/workspace/.agents/skills/purple-game-ui'),('revised',root/'author/workspace/purple-game-ui'),('reference-game',root/'author/workspace/source-game')]:
 shutil.copytree(src,out/label,dirs_exist_ok=True)
diff=''
for rel in sorted({str(p.relative_to(out/label)) for label in ['original','revised'] for p in (out/label).rglob('*') if p.is_file()}):
 a=out/'original'/rel;b=out/'revised'/rel
 diff+=''.join(difflib.unified_diff(a.read_text().splitlines(True) if a.exists() else [],b.read_text().splitlines(True) if b.exists() else [],fromfile='original/'+rel,tofile='revised/'+rel))
(out/'skill.diff').write_text(diff)
for name in ['sound-check.json','baseline-check.json','game-check.json','checks-summary.md','baseline-playing.png','audio-playing.png','audio-mobile.png']:
 if (root/name).exists():shutil.copy2(root/name,out/name)
if (root/'baseline/repair-logs/final.md').exists():
 shutil.copy2(root/'baseline/repair-logs/final.md',out/'baseline-repair-reply.md')
 shutil.copy2(root/'baseline/repair-prompt.txt',out/'baseline-repair-prompt.txt')
# Only archive artifacts here. Requests, execution and replies are viewed in Inspect AI.
subprocess.run(['python3', str(Path(__file__).with_name('build-audio-source-files.py'))], check=True)
manifest={'source':root.name,'baseline_commit':json.loads((root/'experiment.json').read_text())['baseline_commit'],'files':{str(p.relative_to(out)):hashlib.sha256(p.read_bytes()).hexdigest() for p in out.rglob('*') if p.is_file() and p.name!='manifest.json'}};(out/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
print(out)

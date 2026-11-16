#!/usr/bin/env python3
"""创建同版本的独立 Skill 演示目录；不安装到用户目录，不覆盖旧目录。"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
from urllib.request import urlopen

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('directory',type=Path)
parser.add_argument('--scope', choices=['full', '3.2.1'], default='full', help='full 保留历史九份；3.2.1 安装四份及其引用资料')
args=parser.parse_args()
target=args.directory.resolve()
if target.exists():parser.error('目标目录已存在，请使用新的目录')
base='https://raw.githubusercontent.com/openai/plugins/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/'
manifest = 'selection-files-321.json' if args.scope == '3.2.1' else 'selection-files.json'
files=json.loads(Path(__file__).with_name(manifest).read_text())
repo=target/'repo';repo.mkdir(parents=True)
for relative,digest in files.items():
    content=urlopen(base+relative,timeout=45).read()
    if hashlib.sha256(content).hexdigest()!=digest:raise RuntimeError('固定版本校验失败：'+relative)
    dest=repo/'.agents'/relative;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(content)
(target/'original-game-playtest.md').write_bytes((repo/'.agents/skills/game-playtest/SKILL.md').read_bytes())
subprocess.run(['git','init','-q','-b','main',str(repo)],check=True)
print(f'已核对并准备 {len(files)} 个文件；演示目录：{repo}')

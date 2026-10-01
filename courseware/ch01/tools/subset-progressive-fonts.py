# -*- coding: utf-8 -*-
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
import shutil
import argparse
parser=argparse.ArgumentParser(description="Build independent font subsets for five progressive lessons.")
for name in ("title","cover","mono","body","body-bold"):
    parser.add_argument("--"+name,required=True,type=Path)
args=parser.parse_args()
r=Path(__file__).resolve().parents[1];out=r/'shared/assets';out.mkdir(exist_ok=True)
dirs=[p for p in (r/'lessons').iterdir() if p.name!='02-agent']+[r/'shared']
text=''.join(p.read_text() for d in dirs for p in d.rglob('*') if p.suffix in ('.js','.css','.html','.md','.svg') and 'hand-drawn' not in p.parts)+''.join(chr(i) for i in range(32,127))+'第章节步上下页段←→✓'
fonts={key:getattr(args,key.replace('-','_')) for key in ('title','cover','mono','body','body-bold')}
for key,path in fonts.items():
 font=TTFont(path);cmap=font.getBestCmap()
 if key in ('body','body-bold'):assert not [c for c in set(text) if '\u4e00'<=c<='\u9fff' and ord(c) not in cmap]
 opt=subset.Options();opt.flavor='woff2';sub=subset.Subsetter(options=opt);sub.populate(text=text);sub.subset(font);font.flavor='woff2';font.save(out/(key+'.woff2'));font.close()
for p in (r/'lessons/02-agent/assets').glob('LICENSE*'):shutil.copy2(p,out/p.name)
print('Independent font subsets written; CJK body coverage checked.')

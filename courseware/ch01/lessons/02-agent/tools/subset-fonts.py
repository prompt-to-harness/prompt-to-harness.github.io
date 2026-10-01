#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build local font subsets. Pass full upstream fonts explicitly; no network at playback."""
import argparse
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

parser = argparse.ArgumentParser()
for name in ('title','cover','body','body-bold','mono'):
    parser.add_argument('--'+name, required=True, type=Path)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
text=''.join(p.read_text() for p in root.rglob('*') if p.suffix in ('.js','.html','.css','.md','.svg') and 'hand-drawn' not in p.parts)
text+=''.join(chr(i) for i in range(32,127))+'←→↗＋−✓·，。；：！？“”‘’、（）「」《》第章节上下页段步'
for key in ('title','cover','body','body_bold','mono'):
    source=getattr(args,key)
    font=TTFont(source)
    cmap=font.getBestCmap()
    needed={ord(c) for c in text if not c.isspace()}
    # Mono covers Latin; CJK falls through to the locally hosted body face.
    if key in ('body','body_bold'):
        missing={chr(c) for c in needed if c not in cmap}
        # Text contains markup math/arrows covered by system symbol fallback.
        han=[c for c in missing if '\u4e00'<=c<='\u9fff']
        if han: raise ValueError(f'{key} misses CJK: {han}')
    options=subset.Options(); options.flavor='woff2'
    sub=subset.Subsetter(options=options); sub.populate(text=text); sub.subset(font)
    font.flavor='woff2'
    out=root/'assets'/(key.replace('_','-')+'.woff2')
    font.save(out); font.close()
    print(out.name,out.stat().st_size)

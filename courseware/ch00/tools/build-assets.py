#!/usr/bin/env python3
"""Build local interview font subsets; the cropped instructor photo is a maintained asset."""
import argparse
import shutil
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

parser = argparse.ArgumentParser(description=__doc__)
for name in ('title', 'cover', 'body', 'body-bold'):
    parser.add_argument('--' + name, required=True, type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
out = root / 'assets'
out.mkdir(exist_ok=True)
text = ''.join(p.read_text() for p in root.rglob('*') if p.suffix in ('.js', '.css', '.html', '.md'))
text += ''.join(chr(i) for i in range(32, 127)) + '第章节步上下页段←→✓'
for key in ('title', 'cover', 'body', 'body-bold'):
    font = TTFont(getattr(args, key.replace('-', '_')))
    missing = {c for c in text if '\u4e00' <= c <= '\u9fff' and ord(c) not in font.getBestCmap()}
    if missing:
        raise ValueError(f'{key}: missing Chinese glyphs: {sorted(missing)}')
    options = subset.Options()
    options.flavor = 'woff2'
    builder = subset.Subsetter(options=options)
    builder.populate(text=text)
    builder.subset(font)
    font.flavor = 'woff2'
    font.save(out / (key + '.woff2'))
    font.close()
for name in ('LICENSE-longcang.txt', 'LICENSE-zcoolkuaile.txt', 'LICENSE-NotoSansSC.txt'):
    shutil.copy2(root.parent / 'ch01/shared/assets' / name, out / name)
print('Built four font subsets; the existing instructor photo is unchanged.')

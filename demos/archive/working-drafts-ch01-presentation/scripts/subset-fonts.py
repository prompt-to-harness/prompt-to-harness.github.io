#!/usr/bin/env python3
"""Subset locally installed OFL Noto CJK fonts for this offline lesson preview."""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
text = "".join(p.read_text() for p in root.iterdir() if p.suffix in {".js", ".html", ".css"})
text += "".join(chr(i) for i in range(32, 127))
text += "←→↗＋−✓·，。；：！？“”‘’、（）「」《》第章节上下页段"
target = root / "assets"
target.mkdir(exist_ok=True)
for source, output in [
    ("NotoSansCJK-Regular.ttc", "course-sans.woff2"),
    ("NotoSansCJK-Bold.ttc", "course-sans-bold.woff2"),
    ("NotoSerifCJK-Bold.ttc", "course-serif.woff2"),
]:
    font = TTFont(Path("/usr/share/fonts/opentype/noto") / source, fontNumber=2)
    options = subset.Options()
    options.flavor = "woff2"
    sub = subset.Subsetter(options=options)
    sub.populate(text=text)
    sub.subset(font)
    font.flavor = "woff2"
    font.save(target / output)
    font.close()
    print(output, (target / output).stat().st_size)

# Preserve the upstream licence along with the modified font files.
copyright_file = Path("/usr/share/doc/fonts-noto-cjk/copyright")
(target / "LICENSE-NOTO.txt").write_text(copyright_file.read_text())

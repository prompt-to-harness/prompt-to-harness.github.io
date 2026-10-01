#!/usr/bin/env python3
"""Subset OFL Noto CJK fonts once for every current courseware page."""
from pathlib import Path
import argparse
from fontTools import subset
from fontTools.ttLib import TTFont

parser = argparse.ArgumentParser()
parser.add_argument('--sans-regular', type=Path)
parser.add_argument('--sans-bold', type=Path)
parser.add_argument('--serif-bold', type=Path)
args = parser.parse_args()
font_paths = [args.sans_regular, args.sans_bold, args.serif_bold]
courseware = Path(__file__).resolve().parents[1]
text = "".join(p.read_text() for p in sorted(courseware.rglob("*"))
               if p.suffix in {".js", ".html", ".css", ".md"} and "archive" not in p.relative_to(courseware).parts)
text += "".join(chr(i) for i in range(32, 127))
text += "←→↗＋−✓·，。；：！？“”‘’、（）「」《》第章节上下页段"
target = courseware / "shared"
target.mkdir(exist_ok=True)
for index, (source, output) in enumerate([
    ("NotoSansCJK-Regular.ttc", "course-sans.woff2"),
    ("NotoSansCJK-Bold.ttc", "course-sans-bold.woff2"),
    ("NotoSerifCJK-Bold.ttc", "course-serif.woff2"),
]):
    source_path = font_paths[index] or Path("/usr/share/fonts/opentype/noto") / source
    font = TTFont(source_path, **({"fontNumber": 2} if source_path.suffix == ".ttc" else {}))
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
for copyright_file in (
    Path("/usr/share/doc/fonts-noto-cjk/copyright"),
    font_paths[0].parent / "LICENSE" if font_paths[0] else None,
):
    if copyright_file and copyright_file.is_file():
        (target / "LICENSE-NOTO.txt").write_text(copyright_file.read_text())
        break

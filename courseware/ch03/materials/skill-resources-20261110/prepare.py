"""Rebuild the isolated 3.2.3 reading and script demonstration inputs.

Run with Python 3.12 and Pillow 13.0.0. Third-party sources are downloaded to
the requested directory, never copied into the public course repository.
"""

import argparse
import hashlib
import json
from pathlib import Path
from urllib.request import urlopen

from PIL import Image, ImageDraw


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("destination", type=Path, help="A new directory outside the course repo")
    args = parser.parse_args()
    destination = args.destination.resolve()
    course_repo = Path(__file__).resolve().parents[4]
    if destination.is_relative_to(course_repo):
        parser.error("Choose a destination outside the public course repository.")
    destination.mkdir(parents=True, exist_ok=False)
    manifest = json.loads(Path(__file__).with_name("manifest.json").read_text())
    for source in manifest["sources"]:
        data = urlopen(source["url"], timeout=30).read()
        if hashlib.sha256(data).hexdigest() != source["sha256"]:
            raise SystemExit(f"Source hash mismatch: {source['path']}")
        target = destination / "game-studio" / source["path"]
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
    skills = destination / ".agents/skills"
    skills.mkdir(parents=True)
    (skills / "sprite-pipeline").symlink_to(
        "../../game-studio/skills/sprite-pipeline", target_is_directory=True
    )
    inputs = destination / "input"
    inputs.mkdir()
    strip = Image.new("RGBA", (512, 128), (0, 0, 0, 0))
    positions = [(28, 38), (51, 62), (20, 17), (68, 48)]
    for index, (left, top) in enumerate(positions):
        left += index * 128
        draw = ImageDraw.Draw(strip)
        draw.rectangle((left, top, left + 15, top + 23), fill="#9b5de5")
        draw.rectangle((left + 3, top + 5, left + 5, top + 7), fill="white")
        draw.rectangle((left + 10, top + 5, left + 12, top + 7), fill="white")
        draw.rectangle((left + 4, top + 11, left + 11, top + 12), fill="#241338")
        if index == 2:
            draw.rectangle((left + 2, top - 8, left + 5, top - 1), fill="#9b5de5")
    strip.save(inputs / "raw-strip.png")
    if hashlib.sha256((inputs / "raw-strip.png").read_bytes()).hexdigest() != manifest["input_sha256"]:
        raise SystemExit("Input PNG differs; check the Python/Pillow versions.")
    print(destination)


if __name__ == "__main__":
    main()

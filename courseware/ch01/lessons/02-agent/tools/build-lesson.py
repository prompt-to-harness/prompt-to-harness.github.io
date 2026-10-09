#!/usr/bin/env python3
"""Export the speaker script from lesson.js, the source since the parts migration.

Diagram assets are maintained separately; rebuilding the script must not replace
current HTML parts with the historical inline SVG layouts.
"""
import subprocess
import sys
from pathlib import Path

CHAPTER = Path(__file__).resolve().parents[3]
subprocess.run(
    [sys.executable, str(CHAPTER / 'tools/export-chapter-scripts.py'), '--lessons', '2'],
    check=True,
)

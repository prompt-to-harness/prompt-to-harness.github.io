#!/usr/bin/env python3
"""Compatibility entry point: export the current six lessons."""
import runpy
from pathlib import Path
runpy.run_path(str(Path(__file__).with_name("export-chapter-scripts.py")), run_name="__main__")

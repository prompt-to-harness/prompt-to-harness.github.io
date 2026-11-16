#!/bin/zsh
set -e
cd "${0:A:h}/../.."
python3 tools/ch03-showcase/serve.py
open 'http://127.0.0.1:4397/'

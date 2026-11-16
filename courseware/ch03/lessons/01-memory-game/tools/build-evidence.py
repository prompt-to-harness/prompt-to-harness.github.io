#!/usr/bin/env python3
"""Keep evidence deep links, routing to original records in the local Inspect View."""
from pathlib import Path
from html import escape
from urllib.parse import urlencode
import json

HERE = Path(__file__).resolve().parents[1]
BASE = 'http://127.0.0.1:4397/inspect/'


def topic_urls():
    topics = json.loads((HERE/'tools/inspect-topics.json').read_text())
    return {key: (value['title'], BASE+'?'+urlencode({k:v for k,v in value.items() if k!='title'})+'&'+urlencode({'label':value['title']})) for key,value in topics.items()}


def build():
    topics = topic_urls()
    links = ''.join(f'<li id="{escape(key, quote=True)}"><a href="{escape(url, quote=True)}">{escape(title)}</a></li>' for key,(title,url) in topics.items())
    routes = json.dumps({key:url for key,(_,url) in topics.items()}, ensure_ascii=False).replace('</','<\\/')
    (HERE/'evidence.html').write_text('''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>原始开发记录 · Inspect AI</title><style>body{font:18px/1.7 system-ui;max-width:960px;margin:40px auto;padding:20px}li{margin:12px 0}a{color:#17664e}</style></head><body><h1>原始开发记录 · Inspect AI</h1><p>从下面的入口打开本机查看器。消息与工具输出按原始顺序展示，可前后阅读；颜色标记仅用于定位。</p><p>04 号游戏仅有历史导出的计划、交付、步骤节选和代码差异，完整运行日志缺失。</p><ul>'''+links+'''</ul><p>若本机服务未启动，在仓库运行 <code>python3 tools/ch03-showcase/serve.py --no-build</code>。查看器须先按工具说明生成。</p><script>const routes='''+routes+''';function go(){const url=routes[location.hash.slice(1)];if(url)location.replace(url)}addEventListener('hashchange',go);go();</script></body></html>''')

if __name__ == '__main__':
    build()

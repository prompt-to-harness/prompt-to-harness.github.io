#!/usr/bin/env python3
"""Capture public source context without changing source text; annotations live in slide HTML."""
from playwright.sync_api import sync_playwright
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[5]
out=ROOT/'courseware/ch03/lessons/03-debug/external'
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page(viewport={'width':600,'height':1200},device_scale_factor=2,color_scheme='light')
 for key,slug in [('direct','extract-from-a-hands-on-task'),('reference','synthesize-from-existing-project-artifacts')]:
  page.goto('https://agentskills.io/skill-creation/best-practices',wait_until='domcontentloaded');page.locator('#'+slug).wait_for();page.wait_for_timeout(500)
  page.evaluate("""()=>{for(const e of document.querySelectorAll('body *'))if(['fixed','sticky'].includes(getComputedStyle(e).position))e.style.display='none'}""")
  clip=page.evaluate('''slug=>{let a=document.getElementById(slug),z=slug==='extract-from-a-hands-on-task'?a.nextElementSibling.nextElementSibling.children[1]:a.nextElementSibling;let x=a.getBoundingClientRect(),y=z.getBoundingClientRect();return {x:x.left-8,y:x.top+scrollY-8,width:x.width+16,height:y.bottom-x.top+16}}''',slug)
  page.screenshot(path=str(out/('creation-'+key+'-context.png')),clip=clip,full_page=True)
 b.close()

# Reuse the repository capture utility for the creator paragraph, code and follow-up.
import subprocess, sys
subprocess.run([sys.executable, str(ROOT/'courseware/tools/capture-source.py'),
    'https://learn.chatgpt.com/docs/build-skills', str(out/'creation-creator-context.png'),
    '--text', 'If you want to describe the skill instead',
    '--until', 'The creator asks what the skill does', '--width', '600', '--lang', 'en-US'], check=True)

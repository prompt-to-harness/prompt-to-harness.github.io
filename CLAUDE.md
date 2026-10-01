## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming -> invoke /office-hours
- Strategy/scope -> invoke /plan-ceo-review
- Architecture -> invoke /plan-eng-review
- Design system/plan review -> invoke /design-consultation or /plan-design-review
- Full review pipeline -> invoke /autoplan
- Bugs/errors -> invoke /investigate
- QA/testing site behavior -> invoke /qa or /qa-only
- Code review/diff check -> invoke /review
- Visual polish -> invoke /design-review
- Ship/deploy/PR -> invoke /ship or /land-and-deploy
- Save progress -> invoke /context-save
- Resume context -> invoke /context-restore
- Author a backlog-ready spec/issue -> invoke /spec

## Project conventions

This is the **public course repository** (courseware, outlines, design notes, tooling), published at https://prompt-to-harness.github.io/. It is not a product codebase. Prefer small, reversible doc edits over restructuring.

### Public-repo hygiene (do not weaken)

- Everything committed here is public. Never add personal contact details (phone numbers, private email), tokens or secrets, authenticated or internal platform links, unreleased platform details, or paid/confidential third-party material. Those belong in the separate private repository.
- Do not copy long excerpts of third-party material into course content; ideas may be referenced with independent writing.
- Distinguish **confirmed decisions**, **working assumptions**, and **must-not-promise items**. Never upgrade a discussion detail into a public commitment.
- Preserve discussion records under `discuss/`; put decisions in consensus docs under `docs/` instead. The raw 2026-09-03 meeting transcript is private and is not in this repository.
- The GitHub Pages site publishes reading, presentation, practice and preparation pages only. `tools/build-site.py` decides what ships; do not hand-edit published output, and keep `.md` notes, `speaker.html` and production files out of the site unless the maintainers decide otherwise.

### Editing rules

- The current course baseline is `docs/course-outline.md`. The former `docs/archive/course-design-v0.1/` proposal is historical; use its `validation.md` only when checking that archived proposal.
- `docs/design/` contains earlier internal discussions and guidance, not a second confirmed baseline. Reassess suggestions against the current outline before adopting them.
- When drafting or revising course materials, consult `docs/design/course-design-principles.md` → “讲述与改稿原则” as prior working guidance. Keep lesson pages, spoken scripts, preparation/help pages, and recording notes consistent; size the process to the task and explain concrete examples before summarizing the method.
- Software Engineering 0.5: `docs/software-engineering/software-engineering-thread.md` is the principle doc; `docs/software-engineering/software-engineering-problem-pool.md` is the candidate pool; do not treat pilot cards as formal lesson slots.
- `docs/archive/working-drafts-ch01/` and `demos/archive/working-drafts-ch01-presentation/` are experiments, not approved lessons.
- The current visual reference is `demos/visual-system/`; previous demos live under `demos/archive/`.
- Run `python3 courseware/tools/check-courseware.py` and `python3 tools/build-site.py` before pushing courseware changes; CI runs the same checks.
- Avoid adding new top-level docs unless they fill a real gap. Prefer linking existing entries from `README.md`.
- Do not commit large binaries (video, full PPT/ZIP). Prefer external links or out-of-band delivery.
- Status banners in design docs should name a date and say what the doc is *not* (not enrollment promise, not validated outcome).

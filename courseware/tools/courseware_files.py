"""Courseware file discovery shared by the offline checks and font builder."""
from pathlib import Path

COURSEWARE = Path(__file__).resolve().parents[1]
LOCAL_REVIEW = {
    COURSEWARE / 'ch03/lessons/02-rules/layout-review-321',
    COURSEWARE / 'ch03/lessons/02-rules/skill-test-321',
}
DEPENDENCY_DIRS = {'node_modules', 'dist'}


def source_files(directory, pattern):
    for path in directory.rglob(pattern):
        if not path.is_file() or DEPENDENCY_DIRS.intersection(path.relative_to(directory).parts):
            continue
        if not any(review in path.parents for review in LOCAL_REVIEW):
            yield path


def font_source_files(directory):
    return (
        path for path in source_files(directory, '*')
        if path.suffix in {'.js', '.html', '.css', '.svg'}
        and not {'archive', 'fonts', 'materials'}.intersection(path.relative_to(directory).parts)
    )

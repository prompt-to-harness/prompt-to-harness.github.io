// Compatibility only: one six-game gallery, one native log viewer.
const route = new URLSearchParams(location.search);
location.replace(route.has('run') ? 'inspect/?' + route.toString() : 'http://localhost:8876/courseware/ch03/lessons/01-memory-game/cases.html#overview');

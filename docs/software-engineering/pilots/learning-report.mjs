import assert from "node:assert/strict";

const allItems = [
  { title: "Parnas: module boundaries", minutes: 35, completed: true },
  { title: "Naur: theory building", minutes: 20, completed: false },
  { title: "Fowler: refactoring", minutes: 45, completed: true },
];

export function reportA(items) {
  return header(items) + rows(items) + footer(items);
}

function header(items) {
  return `Reading report (${items.length} items)\n`;
}

function rows(items) {
  return items.length === 0 ? "" : `${items.map(row).join("\n")}\n`;
}

function row(item) {
  return line(item.title, item.minutes);
}

function line(title, minutes) {
  return `${title}: ${minutes} min`;
}

function footer(items) {
  const total = items.reduce((sum, item) => sum + item.minutes, 0);
  return `Total: ${total} min`;
}

export function reportB(items) {
  const total = items.reduce((sum, item) => sum + item.minutes, 0);
  const lines = items.map(item => `${item.title}: ${item.minutes} min`);
  return [`Reading report (${items.length} items)`, ...lines, `Total: ${total} min`].join("\n");
}

const cases = [
  {
    name: "all items",
    items: allItems,
    expected: "Reading report (3 items)\nParnas: module boundaries: 35 min\nNaur: theory building: 20 min\nFowler: refactoring: 45 min\nTotal: 100 min",
  },
  {
    name: "completed items",
    items: allItems.filter(item => item.completed),
    expected: "Reading report (2 items)\nParnas: module boundaries: 35 min\nFowler: refactoring: 45 min\nTotal: 80 min",
  },
  {
    name: "empty list",
    items: [],
    expected: "Reading report (0 items)\nTotal: 0 min",
  },
  {
    name: "zero-minute item",
    items: [{ title: "Dijkstra: discipline", minutes: 0, completed: true }],
    expected: "Reading report (1 items)\nDijkstra: discipline: 0 min\nTotal: 0 min",
  },
];

for (const testCase of cases) {
  const outputA = reportA(testCase.items);
  const outputB = reportB(testCase.items);
  assert.equal(outputA, testCase.expected, `reportA: ${testCase.name}`);
  assert.equal(outputB, testCase.expected, `reportB: ${testCase.name}`);
  console.log(`PASS ${testCase.name}`);
}

console.log("\nExample output:\n");
console.log(reportA(allItems));
console.log("Same output for all cases: yes");

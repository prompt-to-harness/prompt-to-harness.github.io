import assert from "node:assert/strict";

export function countsTowardProgress(item) {
  return item.completed === true && item.minutes >= 30;
}

export function totalValidMinutes(items) {
  return items.filter(countsTowardProgress)
    .reduce((total, item) => total + item.minutes, 0);
}

const cases = [
  {
    name: "unfinished item is excluded",
    items: [{ title: "Naur", minutes: 45, completed: false }],
    expected: 0,
  },
  {
    name: "29 minutes is excluded",
    items: [{ title: "Parnas", minutes: 29, completed: true }],
    expected: 0,
  },
  {
    name: "30 minutes is included",
    items: [{ title: "Fowler", minutes: 30, completed: true }],
    expected: 30,
  },
  {
    name: "only eligible items are summed",
    items: [
      { title: "Dijkstra", minutes: 35, completed: true },
      { title: "Brooks", minutes: 45, completed: false },
      { title: "Meyer", minutes: 29, completed: true },
    ],
    expected: 35,
  },
  { name: "empty list is zero", items: [], expected: 0 },
];

for (const testCase of cases) {
  assert.equal(
    totalValidMinutes(testCase.items),
    testCase.expected,
    testCase.name,
  );
  console.log(`PASS ${testCase.name}`);
}

console.log("SDD acceptance cases: all pass");

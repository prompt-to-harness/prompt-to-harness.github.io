import assert from "node:assert/strict";

const ownership = {
  contract: ["docs/spec/", "tests/contract/"],
  domain: ["src/domain/", "tests/domain/"],
  adapter: ["src/api/", "src/ui/", "tests/integration/"],
};

function owns(task, file) {
  return ownership[task].some(prefix => file.startsWith(prefix));
}

export function checkChanges(task, files) {
  return files.filter(file => !owns(task, file));
}

const cases = [
  {
    name: "domain stays in its boundary",
    task: "domain",
    files: ["src/domain/progress.js", "tests/domain/progress.test.js"],
    rejected: [],
  },
  {
    name: "domain cannot edit API",
    task: "domain",
    files: ["src/domain/progress.js", "src/api/report.js"],
    rejected: ["src/api/report.js"],
  },
  {
    name: "contract changes require contract owner",
    task: "adapter",
    files: ["src/api/report.js", "docs/spec/progress.md"],
    rejected: ["docs/spec/progress.md"],
  },
];

for (const testCase of cases) {
  assert.deepEqual(checkChanges(testCase.task, testCase.files), testCase.rejected, testCase.name);
  console.log(`PASS ${testCase.name}`);
}

console.log("Harness ownership checks: all pass");

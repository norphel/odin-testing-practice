const analyzeArray = require("./analyzeArray");

test("average of [0] = 0", () => {
  expect(analyzeArray([0]).average).toBe(0);
});

test("average of [1] = 1", () => {
  expect(analyzeArray([1]).average).toBe(1);
});

test("average of [1, 2, 3] = 2", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test("average of [1, 8, 3, 4, 2, 6] = 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

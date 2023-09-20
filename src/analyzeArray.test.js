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

test("average of [1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1] ≈ 13.259", () => {
  expect(
    analyzeArray([1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1]).average
  ).toBeCloseTo(13.259);
});

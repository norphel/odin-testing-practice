const analyzeArray = require("./analyzeArray");

test("average of [0] = 0", () => {
  expect(analyzeArray([0]).average).toBe(0);
});

test("length of [0] = 1", () => {
  expect(analyzeArray([0]).length).toBe(1);
});

test("min of [0] = 0", () => {
  expect(analyzeArray([0]).min).toBe(0);
});

test("max of [0] = 0", () => {
  expect(analyzeArray([0]).max).toBe(0);
});

test("average of [1] = 1", () => {
  expect(analyzeArray([1]).average).toBe(1);
});

test("length of [] = 0", () => {
  expect(analyzeArray([]).length).toBe(0);
});

test("average of [] = undefined", () => {
  expect(analyzeArray([]).average).toBeUndefined();
});

test("min of [] = undefined", () => {
  expect(analyzeArray([]).min).toBeUndefined();
});

test("max of [] = undefined", () => {
  expect(analyzeArray([]).max).toBeUndefined();
});

test("average of [1, 2, 3] = 2", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test("length of [1, 2, 3] = 3", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test("min of [1, 2, 3] = 1", () => {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
});

test("max of [1, 2, 3] = 3", () => {
  expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

test("average of [1, 8, 3, 4, 2, 6] = 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("length of [1, 8, 3, 4, 2, 6] = 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("min of [1, 8, 3, 4, 2, 6] = 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("max of [1, 8, 3, 4, 2, 6] = 8", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("average of [1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1] ≈ 13.259", () => {
  expect(
    analyzeArray([1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1]).average
  ).toBeCloseTo(13.259);
});

test("length of [1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1] = 7", () => {
  expect(analyzeArray([1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1]).length).toBe(7);
});

test("min of [1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1] = 0.03", () => {
  expect(analyzeArray([1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1]).min).toBe(0.03);
});

test("max of [1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1] = 62.2", () => {
  expect(analyzeArray([1.3, 8.9, 0.03, 4.28, 62.2, 16, 0.1]).max).toBe(62.2);
});

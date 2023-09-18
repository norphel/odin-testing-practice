const calculator = require("./calculator");

test("add(1, 2) = 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract(45, 10) = 35", () => {
  expect(calculator.subtract(45, 10)).toBe(35);
});

test("divide(10, 2) = 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("multiply(11, 3) = 33", () => {
  expect(calculator.multiply(11, 3)).toBe(33);
});

test("add(3.5, 2.08) = 5.58", () => {
  expect(calculator.add(3.5, 2.08)).toBeCloseTo(5.58);
});

test("subtract(11.2, 0.99) = 10.21", () => {
  expect(calculator.subtract(11.2, 0.99)).toBeCloseTo(10.21);
});

test("divide(12.589, 9.56) ≈ 1.32", () => {
  expect(calculator.divide(12.589, 9.56)).toBeCloseTo(1.32);
});

test("mulitply(23.609, 3.25) = 76.72925", () => {
  expect(calculator.multiply(23.609, 3.25)).toBeCloseTo(76.72925);
});

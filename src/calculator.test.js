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

test("add(-10.56, 5.36) = -5.2", () => {
  expect(calculator.add(-10.56, 5.36)).toBeCloseTo(-5.2);
});

test("add(10.56, -5.36) = 5.2", () => {
  expect(calculator.add(10.56, -5.36)).toBeCloseTo(5.2);
});

test("add(-10.56, -5.36) = -15.92", () => {
  expect(calculator.add(-10.56, -5.36)).toBeCloseTo(-15.92);
});

test("subtract(-3.98, 4.309) = -8.289", () => {
  expect(calculator.subtract(-3.98, 4.309)).toBeCloseTo(-8.289);
});

test("subtract(3.98, -4.309) = 8.289", () => {
  expect(calculator.subtract(3.98, -4.309)).toBeCloseTo(8.289);
});

test("subtract(-3.98, -4.309) = 0.329", () => {
  expect(calculator.subtract(-3.98, -4.309)).toBeCloseTo(0.329);
});

test("divide(-3.98, 0.112) ≈ -35.536", () => {
  expect(calculator.divide(-3.98, 0.112)).toBeCloseTo(-35.536);
});

test("divide(3.98, -0.112) ≈ -35.536", () => {
  expect(calculator.divide(3.98, -0.112)).toBeCloseTo(-35.536);
});

test("divide(-3.98, -0.112) ≈ 35.536", () => {
  expect(calculator.divide(-3.98, -0.112)).toBeCloseTo(35.536);
});

test("mulitply(-0.026, 36.28) = -0.94328", () => {
  expect(calculator.multiply(-0.026, 36.28)).toBeCloseTo(-0.94328);
});

test("mulitply(0.026, -36.28) = -0.94328", () => {
  expect(calculator.multiply(0.026, -36.28)).toBeCloseTo(-0.94328);
});

test("mulitply(-0.026, -36.28) = 0.94328", () => {
  expect(calculator.multiply(-0.026, -36.28)).toBeCloseTo(0.94328);
});

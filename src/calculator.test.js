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

const capitalize = require("./capitalize");

test("capitalized version of 'hello' should be 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalized version of 'a' should be 'A'", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalized version of 'HI' should be 'Hi'", () => {
  expect(capitalize("HI")).toBe("Hi");
});

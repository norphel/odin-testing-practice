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

test("capitalized version of 'good, morning!' should be 'Good, morning!'", () => {
  expect(capitalize("good, morning!")).toBe("Good, morning!");
});

test("capitalized version of 'HoW aRE yOu?' should be 'How are you?", () => {
  expect(capitalize("HoW aRE yOu?")).toBe("How are you?");
});

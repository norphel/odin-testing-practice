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

test("capitalized version of '123abc' should be '123abc'", () => {
  expect(capitalize("123abc")).toBe("123abc");
});

test("cannot capitalize non-string data type", () => {
  expect(capitalize(123)).toBe(
    "TypeError: argument to capitalize function must be of String type"
  );
});

test("cannot capitalize non-string data type", () => {
  expect(capitalize([1, 2, 3])).toBe(
    "TypeError: argument to capitalize function must be of String type"
  );
});

test("cannot capitalize non-string data type", () => {
  expect(capitalize({ one: 1, two: 2 })).toBe(
    "TypeError: argument to capitalize function must be of String type"
  );
});

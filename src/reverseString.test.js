const reverseString = require("./reverseString");

test("reverse of 'hello' should be 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse of 'Hi! Good morning!' should be '!gninrom dooG !iH'", () => {
  expect(reverseString("Hi! Good morning!")).toBe("!gninrom dooG !iH");
});

test("reverse of '123aBcD' should be 'DcBa321'", () => {
  expect(reverseString("123aBcD")).toBe("DcBa321");
});

test("reverse of '@babel-core' should be 'eroc-lebab@'", () => {
  expect(reverseString("@babel-core")).toBe("eroc-lebab@");
});

test("cannot reverse non-string arguments", () => {
  expect(reverseString(123)).toBe(
    "TypeError: cannot reverse arguments that are not of type String"
  );
});

test("cannot reverse non-string arguments", () => {
  expect(reverseString([1, 2, 3])).toBe(
    "TypeError: cannot reverse arguments that are not of type String"
  );
});

test("cannot reverse non-string arguments", () => {
  expect(reverseString({ key: "value" })).toBe(
    "TypeError: cannot reverse arguments that are not of type String"
  );
});

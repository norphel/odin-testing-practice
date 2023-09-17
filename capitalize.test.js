const capitalize = require("./capitalize");

test("capitalized version of 'hello' should be 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

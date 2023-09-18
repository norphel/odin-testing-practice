const reverseString = require("./reverseString");

test("reverse of 'hello' should be 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

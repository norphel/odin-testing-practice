const caesarCipher = require("./caesarCipher");

test("'abc' shifted by 0 should be 'abc'", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

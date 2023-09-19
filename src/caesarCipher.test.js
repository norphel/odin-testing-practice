const caesarCipher = require("./caesarCipher");

test("'abc' shifted by 0 should be 'abc'", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("'abcxyz' shifted by 1 should be 'bcdyza'", () => {
  expect(caesarCipher("abcxyz", 1)).toBe("bcdyza");
});

test("'ABCD' shifted by 1 should be 'BCDE'", () => {
  expect(caesarCipher("ABCD", 1)).toBe("BCDE");
});

test("'ABCDEFGHIJKLMNOPQRSTUVWXYZ' shifted by 3 should be 'DEFGHIJKLMNOPQRSTUVWXZYABC'", () => {
  expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3)).toBe(
    "DEFGHIJKLMNOPQRSTUVWXYZABC"
  );
});

test("'TheOdinProject' shifted by 2 should be 'VjgQfkpRtqlgev'", () => {
  expect(caesarCipher("TheOdinProject", 2)).toBe("VjgQfkpRtqlgev");
});

test("'Hello!' shifted by 0 should be 'Hello!'", () => {
  expect(caesarCipher("Hello!", 0)).toBe("Hello!");
});

test("'How are you?' shifted by 1 should be 'Ipx bsf zpv?'", () => {
  expect(caesarCipher("How are you?", 1)).toBe("Ipx bsf zpv?");
});
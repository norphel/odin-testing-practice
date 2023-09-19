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

test("Caesar Cipher shift by 5", () => {
  expect(
    caesarCipher(
      "The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet.",
      5
    )
  ).toBe(
    "Ymj Hfjxfw hnumjw nx tsj tk ymj jfwqnjxy pstbs fsi xnruqjxy hnumjwx. Ny nx f yduj tk xzgxynyzynts hnumjw ns bmnhm jfhm qjyyjw ns ymj uqfnsyjcy nx 'xmnkyji' f hjwyfns szrgjw tk uqfhjx itbs ymj fqumfgjy."
  );
});

test("'Excuse me! Should I also check for negative shift factor?' shifted by 23 should be 'Buzrpb jb! Pelria f xipl zebzh clo kbdxqfsb pefcq cxzqlo?'", () => {
  expect(caesarCipher("How are you?", 1)).toBe("Ipx bsf zpv?");
});

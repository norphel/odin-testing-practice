function getShiftedCharacter(char, shiftFactor) {
  if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return String.fromCharCode(
      ((char.charCodeAt() - 97 + shiftFactor) % 26) + 97
    );
  }
}

function caesarCipher(str, shiftFactor) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = getShiftedCharacter(strArr[i], shiftFactor);
  }
  return strArr.join("");
}
module.exports = caesarCipher;

function reverseString(str) {
  if (typeof str !== "string") {
    return "TypeError: cannot reverse arguments that are not of type String";
  }
  return str.split("").reverse().join("");
}
module.exports = reverseString;

function capitalize(str) {
  if (typeof str !== "string") {
    return "TypeError: argument to capitalize function must be of String type";
  }
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
}
module.exports = capitalize;

function analyzeArray(arr) {
  const average =
    arr.reduce((sum, currArrItem) => {
      return sum + currArrItem;
    }, 0) / arr.length;

  const length = arr.length;
  return { average, length };
}
module.exports = analyzeArray;

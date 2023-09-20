function analyzeArray(arr) {
  const average =
    arr.reduce((sum, currArrItem) => {
      return sum + currArrItem;
    }, 0) / arr.length;

  return { average };
}
module.exports = analyzeArray;

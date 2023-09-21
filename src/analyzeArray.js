function analyzeArray(arr) {
  let average =
    arr.reduce((sum, currArrItem) => {
      return sum + currArrItem;
    }, 0) / arr.length;

  const length = arr.length;
  if (length === 0) {
    average = undefined;
  }
  return {
    average,
    length,
  };
}
module.exports = analyzeArray;

function analyzeArray(arr) {
  let average =
    arr.reduce((sum, currArrItem) => {
      return sum + currArrItem;
    }, 0) / arr.length;

  const length = arr.length;

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (length === 0) {
    average = undefined;
    min = undefined;
    max = undefined;
  }

  return {
    average,
    length,
    min,
    max,
  };
}
module.exports = analyzeArray;

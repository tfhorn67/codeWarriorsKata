// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.


//solution
function findAverage(array) {
  if (array.length > 0) {
    return array.reduce((prev, curr) => prev + curr, 0) / array.length
  }
  return 0
}

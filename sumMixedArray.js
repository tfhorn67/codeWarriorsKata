// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.


//solution
function sumMix(x){
  let ints = x.map(element => Number(element))
  return ints.reduce((previous, current) => previous + current, 0)
}

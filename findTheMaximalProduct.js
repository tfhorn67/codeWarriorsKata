// Given a non-empty array of integers, find the maximum product of elements from all available sequences.
//
// A sequence here is any pattern in which the elements are equally spaced apart in the array.
//
// The sequence should start at its place in the array: for example, the sequence of 3 elements apart should start at the third element.
//
// Example:
//
// Given the array [11, 6, -2, 0, 5, -4, 2]
//
// When the sequence is 1 element apart: Product = 11 × 6 × (-2) × 0 × 5 × (-4) × 2 = 0.
//
// When the sequence is 2 apart: Product = 6 × 0 × (-4) = 0.
//
// When the sequence is 3 apart: Product = (-2) × (-4) = 8.
//
// When the sequence is 4 apart: Product = 0
//
// When the sequence is 5 apart: Product = 5
//
// When the sequence is 6 apart: Product = -4.
//
// When the sequence is 7 apart: Product = 2.
//
// So, the function should return 8.


//solution
function findMaxProduct(arr){
  let max = 0
  for (let i = 1 ; i <= arr.length ; i++) {
    let localMax = 1
    arr.forEach((element, index) => {
      if ((index+1) % i == 0) {
        localMax *= element
      }
    })
    max = Math.max(max, localMax)
  }
  return max
}

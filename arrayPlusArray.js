// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.


//solution
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((prev, curr) => prev + curr, 0 ) + arr2.reduce((prev, curr) => prev + curr, 0 )
}

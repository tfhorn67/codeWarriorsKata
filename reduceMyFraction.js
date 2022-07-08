// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
//
// input:   [numerator, denominator]
// output:  [newNumerator, newDenominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.
//
// Note: This is an introductory Kata for a series... coming soon!


//solution
function reduce(fraction){
  let result = []
  for (let i = fraction[0] ; i > 0 ; i--) {
    if (fraction[0] % i == 0 && fraction[1] % i == 0) {
      result.push(fraction[0] / i)
      result.push(fraction[1] / i)
      return result
    }
  }
}

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


//solution
function digitize(n) {
    let array = []
    if (n === 0) {
      return [0]
    } else {
      while (n > 0) {
        array.push(n % 10)
        n = Math.trunc(n / 10)
      }
    return array
    }
}

//or, the cleaner code warriors solution . . .
function name (n) {
    return String(n).split('').map(Number).reverse()
}

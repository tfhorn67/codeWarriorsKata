// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
//
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


//first solution works but badly ...
// function mygcd(x,y){
//   let max = 0
//   //edge case where x andor y === 0 or one input is divisible by the other
//   if (x === 1 || y ===1) {
//     max = 1
//   } else if (x % y === 0) {
//       max = y
//   } else if (y % x === 0) {
//       max = x
//   } else {
//       //then check the other factors. Probably a better way to do this.
//       //but I just woke up and I have to go in a minute here
//       let a = x < y ? x : y
//       for (let i = 1; i <= a/2; i++) {
//         if (x % i === 0 && y % i === 0) {
//           max = i
//         }
//       }
//     }
//   return max
// }

//second solution much better. Remember you can count downwards and not just upwards
function mygcd(x,y){
  for (let i = Math.max(x,y); i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i
    }
  }
}

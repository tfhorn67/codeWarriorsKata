// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
//
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.


//solution attempt 1 was a hot pile of procedural garbage but at least I learned about array.every() after I finished it. . .
// function bingo(a) {
//   let winningNumbers = [2, 7, 9, 14, 15] //the good numbers
//   let maybeBingo = [] //the hopeful player
//   a.forEach((element) => { //check each num to see if good and not already there
//       if ( winningNumbers.includes(element)
//           && !maybeBingo.includes(element) ) {
//           maybeBingo.push(element) //if good and new, push to maybeBingo
//       }
//   })
//   maybeBingo = maybeBingo.sort((a, b) => {
//       return a - b
//   })
//
//
//   function compareArrays (a, b) {
//       if (a === b) return true
//       if (a === null || b === null) return false
//       if (a.length !== b.length) return false
//       for (let i = 0; i < a.length; i++) {
//           if (a[i] !== b[i]) {
//             return false
//           }
//       }
//       return true
//   }
//
//   if (compareArrays(maybeBingo, winningNumbers)) {
//       return "WIN"
//   }
//   return "LOSE"
// }


//solution attempt 2 was much more elegant
function bingo(a) {
  let winningNumbers = [2, 7, 9, 14, 15]
  return winningNumbers.every(element => a.includes(element)) ? "WIN" : "LOSE"
}

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


//solution
function mxdiflg(a1, a2) {
    //handle empty array edge case
    if (a1.length === 0 || a2.length === 0) {
      return -1
    }
    //sort both arrays by str.length
    a1 = a1.sort((a, b) => a.length - b.length)
    a2 = a2.sort((a, b) => a.length - b.length)
    //compare and return the larger of the difference between their longest and shortest strings
    const first = a2[a2.length - 1].length - a1[0].length //a2.longest - a1.shortest
    const second = a1[a1.length - 1].length - a2[0].length //a1.longest - a2.shortest
    return first > second ? first : second
}

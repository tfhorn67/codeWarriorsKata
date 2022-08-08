// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


//solution
//I just did this one because it took 20 seconds and reinforced str.prototype.repeat() which I recently learned existed.
function repeatStr (n, s) {
  //really nothing to outline. just use str.repeat()
  return s.repeat(n);
}

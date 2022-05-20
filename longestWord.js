// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.
//
// For example:
//
// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.


//solution
function longest(words) {
  return words.reduce((previousVal, currentWord) => {
    return Math.max(previousVal, currentWord.length)
  }, 0)
}

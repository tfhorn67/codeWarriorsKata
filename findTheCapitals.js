// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


//solution
var capitals = function (word) {
  let results = []
  word.split('').forEach((element, index) => {
    if (element !== element.toLowerCase()) {
      results.push(index)
    }
  })
  return results
};

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//
// If they are, change the array value to a string of that vowel.
//
// Return the resulting array.


//solution
function isVow(array){
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return array.map((element, index) => {
    if ( vowels.includes(String.fromCharCode(element)) ) {
      return String.fromCharCode(element)
    } else {return element}
  })
}

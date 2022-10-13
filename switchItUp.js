// When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// If your language supports it, try using a switch statement.
//


//solution
//no
//I don't feel like writing out a switch case and they're ugly
function switchItUp(number){
  const nums = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return nums[number];
}

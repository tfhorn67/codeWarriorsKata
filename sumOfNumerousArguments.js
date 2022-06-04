// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.
//
// Example
// findSum(1,2,3,4); // returns 10
// findSum(1,-2);    // returns -1
// findSum();        // returns 0
// Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript


//solution
function findSum(){
  //return -1 if args contains a negative int, else return sum of arg ints...

  //make an array from the arguments
  let args = Array.from(arguments)
  //check for negative values and return -1 if caught
  if (args.some(element => element < 0)) return -1
  //else return sum of arg ints
  return args.reduce((previous, current) => previous + current, 0)
}

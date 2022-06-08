// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).
//
// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.
//
// function add(num) {
//   return num + 1;
// }
//
// function mult(num) {
//   return num * 30;
// }
//
// chain(2, [add, mult]);
// // returns 90;


//solution 1
//brute forced it at first to gather more info becuase I discovered there were test conditions not stated or implied in the problem description
function chain(input, fs) {
  if (fs.length === 4) {
    return fs[3](fs[2](fs[1](fs[0](input))))
  } else if (fs.length === 3) {
    return fs[2](fs[1](fs[0](input)))
  } else {
    return fs[1](fs[0](input))
  }
}

//solution 2
//though about it a little more, realized the way it was set up I could use a reducer and then wouldn't have to worry about unexpected additional test conditions
function chain(input, fs) {
  return fs.reduce((previousValue, currentFunction) => {
    return currentFunction(previousValue)
  }, input)
}

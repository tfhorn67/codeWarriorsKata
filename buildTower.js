// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)


//solution
function towerBuilder(nFloors) {
  //we know  every floor has two chars less than the one below.
  //maybe start with lowest floor then repl the first and last char and shift it
  //continue repling first and last non whitespace chars and shifting until length = nfloors
  //need an array to hold the resulting pyramid
  let pyramid = []
  let level = nFloors
  //lowest level will have 2 * nfloors - 1 star chars
  let stars = "*".repeat(2 * level - 1)
  //lowest level will have 0 whitespace chars
  let voids = ""
  //loop through unshifting each next level, then modify the stars and voids for next
  while (level > 0) {
    pyramid.unshift(`${voids}${stars}${voids}`)
    level--
    voids += " "
    stars = stars.slice(2)
  }

  return pyramid
}

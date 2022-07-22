// A rectangle is can be defined by two factors: height and width.
//
// Its area is defined as the multiplication of the two: height * width.
//
// Its perimeter is the sum of its four edges: height + height + width + width.
//
// It is possible to create rectangles of the same area but different perimeters. For example, given an area of 45, the possible heights, widths and resultant perimeters would be:
//
// (1, 45) = 92
//
// (9, 5) = 28
//
// (15, 3) = 36
//
// Note that (6, 7.5) has an area of 45 too, but is discarded in this kata because its width is non integral.
//
// The task is to write a function that, given an area as a positive integer, returns the smallest perimeter possible of a rectangle with integral side lengths.
//
// Input range:
// 1 <= area <= 5 x 10 ^ 10

//solution

//original solution. finds solution correctly but takes too long on large inputs. Didn't notice the upper bound on area input the first time through...
// function minimumPerimeter(area) {
//   // So for rectangles the smallest perimeter will always be a square.
//   //unclear if kata allows squares but we can find out
//   //otherwise, find the multiples of the area that are closest to the square.
//   //sides a + b such that a * b == Area and a + b is closer to 2 * sqrt(Area) than other mults
//
//   //find sqrt(area)
//   let squareroot = Math.sqrt(area)
//
//   //find mults
//   let multiples = []
//   for (let i = 1 ; i < area/2 ; i++) {
//     if ( (area/i) % 1 === 0) {
//       multiples.push(area/i + i)
//     }
//   }
//   //find mults closest to square
//   var closest = multiples.reduce(function(prev, curr) {
//     return (Math.abs(curr - squareroot) < Math.abs(prev - squareroot) ? curr : prev);
//   })
//   //return double mults
//   return closest * 2
// }


//2nd attempt skipping lots of math and array traversal.
//need to rethink this so I don't have to find, store and traverse all those multipls for a big input
// . . .
//also works but still timing out for larger inputs.
//maybe problem is actually handling big ints and not about excessive computational load.
//looks like the author updated the input range and tests a couple hours before my attempt
//people are reporting same problems I'm experiencing.
// . . .
function minimumPerimeter(area) {
  let width = Math.round(Math.sqrt(area))
  let height = (area/width)

  while(Number.isInteger(height) === false){
    width = width + 1
    height = (area/width)
  }

  return (2 * height) + (2 * width)
}

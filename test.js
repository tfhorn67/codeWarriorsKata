function squareOrSquareRoot(array) {
  array.forEach((element, index) => {
    let squirt = Math.sqrt(element)
    let floorSquirt = Math.floor(squirt)
    if ( (squirt - floorSquirt) > 0) {
      array[index] *= element
    } else {
      array[index] = Math.sqrt(element)
    }
  })
  return array;
}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))

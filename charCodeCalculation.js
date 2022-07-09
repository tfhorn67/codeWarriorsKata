// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
//
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
//
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:
//
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


//solution
function calc(x){
  let total1 = "",
      total2 = ""

  //create total1
  for (let i = 0; i < x.length; i++) {
    total1 += `${x.charCodeAt(i)}`
  }

  //create total2
  for (let i = 0; i < total1.length; i++) {
    if (total1[i] == "7") {
      total2 += "1"
    } else {
      total2 += total1[i]
    }
  }

  //split into each digit
  total1 = total1.split("")
  total2 = total2.split("")
  //convert chars to ints
  total1.forEach((element, index) => total1[index] = parseInt(element))
  total2.forEach((element, index) => total2[index] = parseInt(element))

  //sum the digits
  let sum1 = total1.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  let sum2 = total2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

  //return the difference
  return sum1 - sum2

}

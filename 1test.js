// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.
//
// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
//
// Return that number, or -1 if it is impossible.
//
// Good Luck!!!



//solution
function solve(n) {
  let total = n
  let billCount = 0
  let billTypes = [500, 200, 100, 50, 20, 10]
  let billPosition = 0
  let dispensing = billTypes[billPosition]
  //make sure exact change can be made
  if (total % 10 !== 0) {
    return -1
  }
  /*in a while loop, start counting bills and subtracting them from total
    while total > 0, subtract largest bill that doesn't put total < 0,
    if bill is larger than remaining total, decrement to next smallest bill and try again
    increment bill count each time succeeds.*/
  while (total > 0) {
    if (total - dispensing >= 0) {
      billCount++
      total -= dispensing
    } else {
      billPosition++
      dispensing = billTypes[billPosition]
    }
  }
  return billCount
}

//short on time here but just a quick time saving measure would be to
//increase bill count by total/dispensing and then reassign total to toal % dispensing
//that way loop would only run once per bill type at most

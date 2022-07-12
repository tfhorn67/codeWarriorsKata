// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.
//
// Their first act in power is absolute wealth equality through coercive redistribution.
//
// Create a function that redistributes all wealth equally among all citizens.
//
// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.
// MUTATE the input array/list, don't return anything.
//
// See example:
//
// wealth = [5, 10, 6]  # This represents:
//                      # citizen 1 has wealth 5
//                      # citizen 2 has wealth 10
//                      # citizen 3 has wealth 6
//
// redistribute_wealt0h(wealth) # mutates wealth list
// wealth => [7, 7, 7] # wealth has now been equally redistributed
// Info:
//
// MUTATE the input array/list, don't return anything
// Input is garantueed to hold at least 1 citizen
// Wealth of citizen will an integer with minimum 0 (negative wealth not possible)
// Handling of floating point error will not be tested


//solution
function redistributeWealth(wealth) {
  let total = wealth.reduce((previous, current) => previous + current, 0)
  let evenDistribution = total / wealth.length
  wealth.forEach((element, index) => {wealth[index] = evenDistribution})
}

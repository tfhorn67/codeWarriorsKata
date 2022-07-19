// Given a number return the closest number to it that is divisible by 10.
//
// Example input:
//
// 22
// 25
// 37
// Expected output:
//
// 20
// 30
// 40


//solution
const closestMultiple10 = num => {
    if (num % 10 >= 5) {
        return num + (10 - (num % 10))
    } else {
        return num - (num % 10)
    }
};

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
//
// Return as a number.


//solution
function divCon(x){
    let stringy = 0
    let inty = 0
    x.forEach(element => {
        if (typeof element === "string") {
            stringy += Number(element)
        } else {
            inty += element
        }
        return inty - stringy
    })
    return inty - stringy
}

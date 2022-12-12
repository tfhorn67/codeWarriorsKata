// A high school has a strange principal. On the first day, he has his students perform an odd opening day ceremony:
//
// There are number of lockers "n" and number of students "n" in the school. The principal asks the first student to go to every locker and open it. Then he has the second student go to every second locker and close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he closes it. The fourth student does this to every fourth locker, and so on. After the process is completed with the "n"th student, how many lockers are open?
//
// The task is to write a function which gets any number as an input and returns the number of open lockers after last sudent complets his activity. So input of the function is just one number which shows number of lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input is 1000 and function returns number of open lockers after 1000th student completes his action.
//
// The given input is always an integer greater than or equal to zero that is why there is no need for validation.



//solution attempt 1 : brute force
/*
function numOfOpenLockers(n){
  let lockers = new Array(n).fill(true) //true == open ; false == closed
  let student = 2
  while (student <= n) {
    //loop through lockers and if n % student === 0 flip the locker open or closed
    lockers.forEach((element, index) => {
      if (((index+1) % student === 0)) {
        lockers[index] = !lockers[index]
      }
    })
    //increment student and repeate while loop
    student++
  }
  return lockers.filter(element => element === true).length
}
*/

/*
the brute force solution works but is very expensive and times out with larger inputs
I can't pretend I understand the math here but I ran this algo on all vals < 100
the output remains constant between perfect squares and then increments at each perfect square
so there's a relationship and yep there I see it now. Its the sqrt of n rounded down.
That is so satisfying.
I assume we were not expected to intuit that  relationship but instead to do what I did
where I wrote a brute force solution, ran it a bunch of small values, saw a pattern and
distilled that pattern into an elegant solution despite the fact I definitely don't understand
why that pattern exists.
*/
function numOfOpenLockers(n) {
  return Math.floor(Math.sqrt(n));
}

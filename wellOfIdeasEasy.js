// For every good kata idea there seem to be quite a few bad ones!
//
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


//solution
function well(x){
  let goodIdeas = 0

  x.forEach(element => {
    if (element === 'good') {
      goodIdeas++
    }
  })

  if (goodIdeas >= 3) {
    return 'I smell a series!'
  }

  return goodIdeas > 0 ? 'Publish!' : 'Fail!'
}

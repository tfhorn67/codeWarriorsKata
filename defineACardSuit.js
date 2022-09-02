// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
//
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



//solution
function defineSuit(card) {
  let suit = ""
  switch (card.charCodeAt(card.length-1)) {
    case 9827:
      suit = 'clubs'
      break
    case 9824:
      suit = 'spades'
      break
    case 9830:
      suit = 'diamonds'
      break
    case 9829:
      suit = 'hearts'
      break
    default:
      suit = 'you done goofed'
      break
  }
  return suit
}

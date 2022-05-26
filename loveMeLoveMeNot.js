// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


//solution
function howMuchILoveYou(nbPetals) {
    const choices = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return nbPetals % 6 > 0 ? choices[nbPetals % 6 - 1] : choices[5]
}

/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/


function howMuchILoveYou(nbPetals) {
  let num = nbPetals%6
  switch(num){
      case 1:
      return "I love you"
      break
      case 2:
      return "a little"
      break
      case 3:
      return "a lot"
      break
      case 4:
      return "passionately"
      break
      case 5: 
      return "madly"
      break
      case 0:
      return "not at all"
      break
      
}
}

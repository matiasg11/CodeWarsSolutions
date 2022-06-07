/*Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.*/
function numberOfPairs(gloves)
{
  //I receive an array with the color of each glove. 
  //I have to count the number of pairs of the same color
  
  //NEW INFO: ONLY RETURN THE TOTAL NUMBER OF PAIRS
  
  //Order the gloves by color (alphabetically or else)
   let guantes = gloves.slice().sort((a,b)=>a.localeCompare(b))
   
   //Start with 0 pairs
   let pairs = 0;
  
  //Check if each second glove is the same than the one before, hence making a pair.
  //If so, skip one glove and the loop will go to the next one. 
  //This way we do not make the mistake of counting the same glove for 2 pairs.
   for (let i = 1; i < guantes.length; i++){
     if (guantes[i-1] === guantes[i]){
       pairs++
       i++
     }
   }
   return pairs
}

function numberOfPairs(gloves) {
  let pairs = 0;
  let count = {}
  for (let color of gloves) {
    if (color in count) {
      count[color]++;
    } else {
      count[color] = 1;
    }
    if (count[color] === 2) {
      pairs++;
      count[color] = 0;
    }
  }
  return pairs;
}

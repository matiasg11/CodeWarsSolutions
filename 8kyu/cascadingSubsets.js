/*Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  */

function eachCons(array, n) {
  let final = [];   //Creo el array final
  
  for(let i = 0; i < array.length; i++){ //Recorro el Array
    final.push(array.slice(i,i + n));  
    //Voy agregando slices desde la posición 1 hasta la 1+n
  }
  
  return final.filter(e => e.length === n);
  //Saco todos los array que sean más cortos que n
}

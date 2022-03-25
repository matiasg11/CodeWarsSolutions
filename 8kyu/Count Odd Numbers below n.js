/*Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]*/


//this code takes too long to process.

function oddCount(n){
  oddArr =0;
  for (let i=0; i<n; i++){
    if (i%2 == 1){
      oddArr++;
    }
  }
  return oddArr
}
//this code should work fine
function oddCount(n){
  return (Math.floor(n/2))
}

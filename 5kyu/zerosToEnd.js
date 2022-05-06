/*Write an algorithm that takes an array and moves all 
of the zeros to the end, preserving the order of the 
other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

function moveZeros(arr) {
  let zeros = 0
    for(let i = arr.length; i>=0 ; i--) {
    if(arr[i]===0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  } return arr;
}
//El truco está en correr el array para atrás.
//Cada vez que encuentro un 0 lo borro y lo agrego al final.

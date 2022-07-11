function findEvenIndex(arr)
{
  //I have to split the array in a determined index where all the elements
  //to the left and all the elements to the right sum the same.
  let left = 0;
  let right = 0;
  for(let i=0; i<arr.length; i++){ //take the array and go step by step. 
    left = 0
    right = 0
    
    //left hand side
    for(let l=0; l<i; l++){
      left += arr[l]
    }
    //right hand side
    for(let r=i+1; r<arr.length; r++){
      right += arr[r]
    }
    
    if (left == right){  //If they are equal, return the position.
      return i
    }
  }
  return -1  //If it didn't return and reached the final loop, there is no solution. Then return -1
}

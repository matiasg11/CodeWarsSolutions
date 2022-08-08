var maxSequence = function(arr){
  if (arr == []){
    return 0
  }
  
  let partial = 0
  let max = 0
  
  for(let i=0; i<arr.length; i++){
    partial = 0
    for (let j=i; j<arr.length; j++){
      partial += arr[j]
      if (partial>max){
        max = partial
    }
  }
  }
  
  return max
}
//Checks for the maximum sequence of continuous numbers.

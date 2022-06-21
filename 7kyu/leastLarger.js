function leastLarger(a,i) {
  //I have to return a number. 
  //The inputs are an array of numbers (integers) and an index.
  //I have to compare to the value placed in the index given
  //The return is the index of the least larger number
  
  //Grab the number
  //LOOP through the numbers to find a larger number than my comparison
  //Save this number in another variable
  //Return the index of this least larger number
  
  let target = a[i]
  let partial = Math.max(...a)
  for(let i=0; i<a.length; i++){
    if (a[i]>target && a[i]<partial){
      partial = a[i]
    }
  }
  
  
  return partial <= target ? -1 : a.indexOf(partial);
}

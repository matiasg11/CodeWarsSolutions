function sortArray(array) {
  //only sort the odd numbers. The even numbers must remain in their original position
  
  let odds = array.filter((a)=> a%2 != 0)
  let oddsSorted = odds.sort((a,b)=>a-b)
  
  let result = []
  let j=0
  
  for (let i=0; i<array.length; i++){
     if (array[i]%2 == 0){
      result.push(array[i])
    } else if (array[i]%2 != 0){
      result.push(oddsSorted[j])
      j++
    }
  }
  
  return result
}

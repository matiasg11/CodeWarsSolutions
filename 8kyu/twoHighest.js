function twoHighest(arr) {
  if (arr.length < 2){
    return arr
  }
  
  arr = arr.sort((a,b)=>b-a)
  let i = 1
  while (arr[0]==arr[i] && i<arr.length){
    i++
  }
  
  return [arr[0],arr[i]]
  
  
}

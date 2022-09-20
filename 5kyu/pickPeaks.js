function pickPeaks(arr){
  let pos = [], peaks = [] 
  
  for(let i=1; i<arr.length-1; i++){
    if (arr[i] > arr[i-1]){
      let m = [i, arr[i]]
      while (arr[i] == arr[i+1]){
        i++
      }
      if(arr[i]>arr[i+1]){
      pos.push(m[0])
      peaks.push(m[1])}
    }
    }
  console.log(arr)
  return {pos,peaks}
}

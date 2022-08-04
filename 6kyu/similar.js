function arraysSimilar(arr1, arr2) {
  let a1 = arr1.sort((a,b)=>a-b)
  let a2 = arr2.sort((a,b)=>a-b)
  let length = Math.max(a1.length, a2.length)
  for(let i=0; i<length; i++){
    if (a1[i]!==a2[i]){
      return false
    }
  }
  return true
}

function ranks(array) {
  let arrSorted = []
  for(let i=0; i<array.length; i++){
    arrSorted[i] = array[i]
  }
  arrSorted = arrSorted.sort((a,b)=>b-a)
  
  let result = array.map((m)=> arrSorted.indexOf(m)+1)
  return result
}

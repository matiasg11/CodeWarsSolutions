function findMissingLetter(array){
  //I have an array of letters in order.
  //They can all be in lower or upper case
  //Can the first one be missing?
  let modified = array.map((a)=>(a.charCodeAt()))
  let code = 0
  
  for(let i=0; i<modified.length-1; i++){
    if (modified[i+1] - modified[i] != 1){
      code = modified[i]+1
    }
  }
  let answer = String.fromCharCode(code)
  return answer
}

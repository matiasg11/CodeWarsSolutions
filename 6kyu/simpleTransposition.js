function simpleTransposition(text) {
  let r1 = []
  let r2 = []
  
  for (let i=0; i<text.length; i++){
    if (i%2 == 0){
      r1.push(text[i])
    }
    else{
      r2.push(text[i])
    }
  }
  let answer = r1.join("")+r2.join("")
  return answer
}

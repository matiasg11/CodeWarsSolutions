function accum(s) {
  let str = s.split("")
  let answer = []
  let partial = []
  for(let i=0; i<str.length; i++){
      for(let j=0; j<=i; j++){
        partial.push(str[i])
      }
       answer.push(partial.join(""))
      partial = []
    }
    let word = []
    for(let m=0; m<answer.length; m++){
      answer[m] = answer[m].toLowerCase()
      word = answer[m].split("")
      word[0]=word[0].toUpperCase()
      answer[m]= word.join("")
    }
   
    return answer.join("-")
  }

function presses(phrase) {
  let one = ["A","D", "G", "J", "M", "P", "T", "W", " ","1"]
  let two = ["B","E", "H", "K", "N", "Q", "U", "X", "0"]
  let thr = ["C","F", "I", "L", "O", "R", "V", "Y"]
  let fou = ["S","Z","2","3","4","5","6","8",]
  let fiv = ["7","9"]
  console.log(phrase)
  let p = phrase.toUpperCase().split("")
  let count = 0
  for (let i=0; i<p.length; i++){
    if (one.includes(p[i])){
      count ++
    } else if(two.includes(p[i])){
      count +=2
    }else if(thr.includes(p[i])){
      count +=3
    }else if(fou.includes(p[i])){
      count +=4
    }else if(fiv.includes(p[i])){
      count +=5
    }
    
  }
  return count
  
}

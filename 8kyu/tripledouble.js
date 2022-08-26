function tripleTrouble(one, two, three){
  let arr = []
  for(let i=0; i<one.length; i++){
    arr.push(one[i])
    arr.push(two[i])
    arr.push(three[i])
  }
  
  return arr.join("")
 }

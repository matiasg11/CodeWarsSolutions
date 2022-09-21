function meeting(s) {
    let str = s.toUpperCase()
    let names = str.split(";")
    let n = []
    for (let i=0; i<names.length; i++){
     let m =  names[i].split(":")
      n.push([m[1], m[0]])
    }

  n = n.sort()
  
  let string = ""
  for(let i=0; i<n.length; i++){
    string += `(${n[i][0]}, ${n[i][1]})`
  }
  return string
}

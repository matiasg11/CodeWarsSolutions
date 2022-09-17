function decode(string) {
  let ar = []
  for (let i=0; i<string.length; i++){
    switch (string[i]){
        case "0":
        ar.push(5)
        break
        case "1":
        ar.push(9)
        break
        case "2":
        ar.push(8)
        break
        case "3":
        ar.push(7)
        break
        case "4":
        ar.push(6)
        break
        case "5":
        ar.push(0)
        break
        case "6":
        ar.push(4)
        break
        case "7":
        ar.push(3)
        break
        case "8":
        ar.push(2)
        break
        case "9":
        ar.push(1)
        break
    }
  }
  return ar.join("")
  
}

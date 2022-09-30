function cleanString(s) {
  let str = s.split("")
  for (let i=0; i<str.length; i++){
    if (i != 0 && str[i] == "#"){
      str.splice(i-1,2)
      i -= 2
    }
    if (str[i] == "#"){
      str.splice(i,1)
    }
    
  }
  return str.join("").replace(/#/gi,"")

}
//Replace the letters following # and then #
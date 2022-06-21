function sevenAte9(str){
let   string = str.split("")
  for (let i=1; i<string.length-1;i++){
    if (string[i]==9 && string[i-1]==7 && string[i+1]==7){
      string.splice(i,1)
      i--
    }
  }
  return string.join("")
}

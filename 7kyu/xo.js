function XO(str) {
  let x = 0, y = 0;
  str = str.toLowerCase()
  for(let i=0; i<str.length;i++){
    if (str[i]=="x"){
      x++
    }
    if (str[i]=="o"){
      y++
    }
  }
  return x==y 
}

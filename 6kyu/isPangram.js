function isPangram(string){
  let text = string.toUpperCase()
  for (let i=65; i<=90; i++){
    if (text.includes(String.fromCharCode(i))){
      continue
    }else{
      return false
    }
  }
  return true
}

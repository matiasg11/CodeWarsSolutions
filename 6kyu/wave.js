function wave(str){
  if (str == ""){
    return []
  }
  let result = []
  str[0] == " " ? result.push() : result.push(str[0].toUpperCase()+str.slice(1))
  for(let i=1; i<str.length-1; i++){
    if (str[i]==" "){
      
      continue
    }
    let s = str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1)
    result.push(s)
  }
  if(str.length>1){
  str[str.length-1] == " " ? "": (result.push(str.slice(0,str.length-1)+str[str.length-1].toUpperCase()))
  }
  return result
}

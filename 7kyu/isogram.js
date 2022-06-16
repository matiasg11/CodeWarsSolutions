function isIsogram(str){
  str = str.toLowerCase()
  let string = new Set(str.split(""))
  
  return string.size == str.length 
}

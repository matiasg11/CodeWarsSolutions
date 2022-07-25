function generateHashtag (str) {
   if (str == "" || str.trim() == ""){
    return false
  }
  
  
  let string = str.split(" ")
  
  for (let i=0; i<string.length; i++){
    if (string[i]!=" "){
    string[i] = string[i].slice(0,1).toUpperCase() + string[i].slice(1).toLowerCase()}
  }
  string.unshift("#")
  
  
 
  
  return string.join("").length > 140 ? false : string.join("")
}

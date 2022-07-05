function toCamelCase(str){
  if (str == ""){
    return ""
  }
  
  let a = /-/
  if (a.test(str)){
    str = str.split("-")
  }else{
    str = str.split("_")
  }
  
  for(let i=1; i<str.length; i++){
   str[i] = str[i].split("")
    str[i][0] = str[i][0].toUpperCase()
    str[i] = str[i].join("")
  }
  return str.join("")
}

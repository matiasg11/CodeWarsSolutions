function remove (string) {  
  let str = string.split("")
  for (let i=str.length-1; i>=0; i--){
    if (str[i]=="!"){
        str.splice(i,1,)
        }else{
          break
        }
  }
  return str.join("");
}

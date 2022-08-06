function count (string) {  
  let obj = {}
  let str = string.split("")
  if (str.length==0){
    return obj
  }
  for(let i=0; i<str.length;i++){
    if (!(str[i] in obj)){
      obj[str[i]] = 1
    }else{
      obj[str[i]]++
    }
  }
   return obj;
}

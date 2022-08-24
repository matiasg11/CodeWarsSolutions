function replace(s){
  let str = s.split("")
 for (let i=0; i<str.length; i++){
   if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(str[i])){
     str[i] = "!"
   }
 }
  
  return str.join("")
}

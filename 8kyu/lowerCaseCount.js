function lowercaseCount(str){
  let s = str.split("")
  let counter = 0
   for (let i=0; i<s.length; i++){
     if (/[a-z]/.test(s[i])){
       counter ++
     }
   }
  return counter
}

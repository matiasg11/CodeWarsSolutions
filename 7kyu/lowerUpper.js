function solve(s){
   let l = 0, u = 0
   for (let i=0; i<s.length; i++){
     if (s[i] === s[i].toLowerCase()){
       l++
     }else{
       u++
     }
   }
  if (u>l){
    return s.toUpperCase()
  }else{
    return s.toLowerCase()
  }
}

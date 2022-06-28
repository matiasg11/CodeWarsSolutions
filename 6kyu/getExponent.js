function getExponent(n,p){
 if (p<=1){
   return null
 }
  let x = 0
  while (n%(p**x) == 0){
    x++
  }
  return x-1
}

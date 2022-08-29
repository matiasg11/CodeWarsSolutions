function isPowerOfTwo(n){
 for(let i = 0; (2 ** i) <= n ; i++){
   if(2 ** i == n){
     return true
   } 
 }
  return false
  
}

// Checks Goldbach's conjecture for the given argument
var checkGoldbach = function(number) {
  // Implement your code here
  if (number<=2 || number%2==1){
    return []
  }
 for(let i=number; i>=2; i--){
   if (isPrime(i)){
     if (isPrime(number-i)){
       return [number-i, i]
     }
   }
 }

  
};

function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}

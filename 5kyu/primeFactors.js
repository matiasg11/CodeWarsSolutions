function primeFactors(n){
  let arr = []
   for (let i=2; i<=(n); i++){
       if (n%i == 0 && isPrime(i) == true){
         arr.push(i)
         n = n/i
         i=1
       }
     }
   
  let str = ""
  for(let m=0; m<arr.length; m++){
    let n = arr.lastIndexOf(arr[m]) - arr.indexOf(arr[m])
    if (n > 0){
      str = str + `(${arr[m]}**${n+1})`
    }else{
      str = str + `(${arr[m]})`
    }
    m = arr.lastIndexOf(arr[m])
  }
  return str
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
//Factorize and check if they are primes. 

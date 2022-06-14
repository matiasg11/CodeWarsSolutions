function going(n) {
  let toZero = 1
  let toInf = 1
  
  for (let i=0; i<n-1; i++){
    toZero *= (1/(n-i))  //Factorial dividends
    toInf += toZero 
  }
  
  return Math.floor(toInf*1000000)/1000000
  }

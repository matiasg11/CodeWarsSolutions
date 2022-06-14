function isCoprime(x, y) {
  let X = factors(x)
  let Y = factors(y)
  
  for(let i=0; i<X.length; i++){
    if (Y.includes( X[i])){
      return false
    }
  }
  return true
}

function factors(num){
  let ans = []
  for (let i=2; i<=num; i++){
    if (num%i == 0){
      ans.push(i)
    }
  }
  return ans
}

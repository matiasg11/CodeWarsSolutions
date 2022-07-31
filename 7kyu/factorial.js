function factorial(n){
  let num=1
  let arr = []
  for(let i=1; i<=n; i++){
    arr.push(i)
  }
  return arr.reduce((a,b)=>a*b,1)
}

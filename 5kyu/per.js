function perimeter(n) {
  let fibo = [1,1]
  for(let i=2; i<=n; i++){
    fibo.push(fibo[i-1]+fibo[i-2])
  }
  fibo = fibo.slice(0,n+1)
    return fibo.reduce((a,b)=>a+b,0)*4 
}
//Calculates the perimeter of each square.
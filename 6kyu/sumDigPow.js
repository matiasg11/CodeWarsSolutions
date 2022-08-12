function sumDigPow(a, b) {
  let result = []
  
  for (let i=a; i<=b; i++){
    if (i == strip(i)){
      result.push(i)
    }
  }
  return result
}

function strip(n){
  let s = String(n).split("")
  let m = s.map((a,i)=> a**(i+1))
  return m.reduce((a,b)=>a+b,0)
}

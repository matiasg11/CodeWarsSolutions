function twistedSum(n) {
  let str = ""
  for (let i=1; i<=n; i++){
    str += `${i}`
  }
  let arr = str.split("").map((a)=>parseInt(a))
  
  return arr.reduce((a,b)=>a+b,0)
}

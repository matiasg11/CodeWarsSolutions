function arrayMadness(a, b) {
  let aResult = a.map((m)=>m**2).reduce((a,b)=>a+b,0)
  let bResult = b.map((m)=>m**3).reduce((a,b)=>a+b,0)
  return aResult > bResult
}

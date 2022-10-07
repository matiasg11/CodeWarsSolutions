function multiply(number){
  let m = String(Math.abs(number)).length
  return m > 0 ? number*5**(m) : number*5
}

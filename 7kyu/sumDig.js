function sumDigits(number) {
  let arr = String(Math.abs(number)).split("")
  return arr.reduce((a,b)=>parseInt(a)+parseInt(b),0)
}

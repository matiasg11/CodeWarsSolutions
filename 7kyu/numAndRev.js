function numberJoy(n) {
   let num = Number(String(n).split("").reduce((a,b)=> Number(a)+Number(b),0))
   let num2 = Number(String(num).split("").reverse().join(""))
   console.log(num, num2, n)
   return num*num2 == n
}

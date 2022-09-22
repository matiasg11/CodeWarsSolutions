function validate(n){
   n = String(n).split("")
  console.log(n)
  let m = n.length % 2 == 0 ? n.map((a,i)=> a = i%2 == 0 ? a*2 : Number(a) ): n.map((a,i)=> a = i%2 == 1 ? a*2 : Number(a))
  console.log(m)
  let g = m.map((a)=> a>9 ? String(a).split("").reduce((a,b)=> a+Number(b),0) : a)
  console.log(g)
  let res = g.reduce((a,b)=> a+b,0)
  console.log(res)
  return res%10 == 0
}

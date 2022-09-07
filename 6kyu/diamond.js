function diamond(n){
  if (n%2 == 0 || n<=0){
    return null
  }
  let spaces 
  let str = ""
  for (let i=1; i<=n; i+=2){
    spaces = (n-i)/2
    let ast = "*".repeat(i)
    ast = " ".repeat(spaces) + ast
    str = str + `${ast}\n`
   
  }
  for (let i=n-2; i>0; i-=2){
    spaces = (n-i)/2
    let ast = "*".repeat(i)
    ast = " ".repeat(spaces) + ast
    str = str + `${ast}\n`
   
  }
   console.log(str)
  return str;
}

function decode  (code, n) {
  let s = String(n).split("")
  let desaltedCode = code.map((item,i) => 
    item = item - s[i%s.length] + 64)
  
  let codigo = desaltedCode.map((item) => String.fromCharCode(item))
  return codigo.join("").toLowerCase()
}

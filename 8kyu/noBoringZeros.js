function noBoringZeros(n) {
  if (n==0){
    return 0
  }
  let m = String(n)
  while (m.endsWith(0)){
   m = m.split("")
      m.pop()
     m =   m.join("")
  }
  return parseInt(m) }

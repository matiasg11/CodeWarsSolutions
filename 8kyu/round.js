function roundIt(n){
  let m = String(n).split(".")
  return m[0].length < m[1].length ? Math.ceil(n) : m[0].length > m[1].length ? Math.floor(n) : Math.round(n)
  
}

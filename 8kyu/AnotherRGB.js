function colorOf(r,g,b){
  r = ("00"+r.toString(16)).substr(-2)
  g = ("00"+g.toString(16)).substr(-2)
  b = ("00"+b.toString(16)).substr(-2)
  return "#"+r+g+b
}

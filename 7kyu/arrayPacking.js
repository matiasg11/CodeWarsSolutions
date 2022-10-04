function arrayPacking(a) {
  let bin = a.map((b)=> ("00000000"+b.toString(2)).substr(-8))
  let str = bin.reverse().join("")
  return parseInt(str,2)
}

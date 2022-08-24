function addLength(str) {
  let arr = str.split(" ")
  let result = arr.map((a)=> `${a} ${a.length}` )
  return result
}

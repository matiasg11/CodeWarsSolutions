function array(arr){
  let m = arr.split(",")
  if (m.length>2){
  m.pop()
  m.shift()
  return m.join(" ")
  }else{
    return null
  }

}

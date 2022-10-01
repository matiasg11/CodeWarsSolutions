function explode(s) {
  let line = s.split("")
  let result = ""
  for (let i=0; i<s.length; i++){
    let str = s[i].repeat(parseInt(s[i]))
    result = result + str
  }
  return result
}

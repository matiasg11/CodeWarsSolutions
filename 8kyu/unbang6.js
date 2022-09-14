function remove(s,n){
  let counter = 0
  let str = s.split("")
  while (str.lastIndexOf("!") != -1 && counter <n){
    str[str.indexOf("!")] = ""
    counter ++
  }
  console.log(counter)
  return str.join("")
}

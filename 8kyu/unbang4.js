function remove (string) {
  let str = string.split("")
  let s = str.filter(a => a != "!")
  return s.join("")+"!";  
}

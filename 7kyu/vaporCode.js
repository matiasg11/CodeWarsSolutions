function vaporcode(string) {
  let str = string.toUpperCase().split("")
  let arr = str.filter((a)=> a!=" ")

  return arr.join("  ")
}

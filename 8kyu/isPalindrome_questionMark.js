function isPalindrome(line) {
  let linea = String(line).split("").reverse().join("")
  return line == linea ;
}

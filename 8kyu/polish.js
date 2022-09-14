function correctPolishLetters (string) {
  string = string.replace(/ą/gi,"a","gi")
  string = string.replace(/ć/gi,"c","gi")
  string = string.replace(/ę/gi,"e","gi")
  string = string.replace(/ł/gi,"l","gi")
  string = string.replace(/ń/gi,"n","gi")
  string = string.replace(/ó/gi,"o","gi")
  string = string.replace(/ś/gi,"s","gi")
  string = string.replace(/ź/gi,"z","gi")
  string = string.replace(/ż/gi,"z","gi")
  return string
}

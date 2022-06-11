function contamination(text, char){
    if (text == "" || char == ""){
      return ""
    }
  let texto = []
  for (let i = 0; i<text.length; i++){
    texto.push(char)
  }
  return texto.join("")
}

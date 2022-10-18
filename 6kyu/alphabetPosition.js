function alphabetPosition(text) {

  text = text.toLowerCase().split("")
  text = text.filter((a)=> a!=" ")
  
  let result = text.map((a) => a.charCodeAt()-96)
  result = result.filter((a)=> a>0 && a< 27)
  return result.join(" ");
}
//IDK what the exercise asked
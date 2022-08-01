function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase().split("")
  for(let i=0; i<str.length; i++){
    console.log(s[i])
      if (str.lastIndexOf(str[i]) == str.indexOf(str[i])){
        
        return s[i]
    }
  }
  return ""
}

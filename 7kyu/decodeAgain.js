function decode(message){
  
  let alphabet = []
  let tebahpla = []
  
  for (let i=65; i<123; i++){
    alphabet.push(String.fromCharCode(i))
  }
  for (let i=122; i>64; i--){
    tebahpla.push(String.fromCharCode(i))
  }
  alphabet.push(" ")
  tebahpla.push(" ")
  
  let result = message.split("")
  for (let i=0; i<result.length; i++){
    result[i] = tebahpla[alphabet.indexOf(result[i])]
  }
  return result.join("").toLowerCase()
}

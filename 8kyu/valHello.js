function validateHello(greetings) {
  greetings = greetings.toLowerCase()
  res =  /h*llo/.test(greetings) ||/hola/.test(greetings,)||/salut/.test(greetings)||/ciao/.test(greetings) ||/czesc/.test(greetings)||/ahoj/.test(greetings)
  return res
}

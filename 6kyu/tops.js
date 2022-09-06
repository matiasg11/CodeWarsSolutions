function tops(msg) {
  let mess = []
  if (msg.length<1){
    return ("")
  }
  for (let i=1, n=1; n<msg.length; i++){
    mess.push(msg[n])
    n = n+(4*i+1)
  }
   return mess.reverse().join("");
}

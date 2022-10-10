function numberToPower(number, power){
  let m = 1
  for(let i=1; i<=power; i++){
    m *= number
  }
  return m
}

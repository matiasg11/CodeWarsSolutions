function startingMark(bodyHeight){
  let x = (2.13-1.22)
  let y = (11.85-8.27)
  return Math.round(100*((bodyHeight-1.22)*y/x + 8.27))/100
}

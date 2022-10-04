function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let count = 0; 
  let height = 0;
  while (height < desiredHeight){
    height += upSpeed
    count ++
    if (height < desiredHeight){
    height -= downSpeed}
  }
  
  return count
}

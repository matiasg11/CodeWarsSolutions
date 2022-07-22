function towerBuilder(nFloors) {
  let tower = []
  let star = 2*nFloors-1
  let space = 0
  
  let partial = ""
  
  while (star>=1){
    partial = " ".repeat(space)+"*".repeat(star)+" ".repeat(space)
    tower.unshift(partial)
    space++
    star -=2
  }
  return tower
}

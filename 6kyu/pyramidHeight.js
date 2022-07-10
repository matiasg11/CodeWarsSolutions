function pyramidHeight(n) {
  let height = 1
  while (n>0){
    height++
    n = n - height**2
  }
  
  return height-1
}

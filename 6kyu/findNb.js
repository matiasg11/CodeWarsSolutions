function findNb(m) {
    let partial = 1
    let b = 0
    
    while (m - partial >= 0){
      b++
      partial += b**3
    }
    return partial != m+1 ? -1 : b
}

Number.prototype.times = function (f) {
  let m = 0
  while (this > m){
    f(m)
    m++
  }
}

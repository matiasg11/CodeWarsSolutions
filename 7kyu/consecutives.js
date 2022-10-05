const consecutiveDucks = (num) => {
  let m = Math.log(num)/Math.log(2)
  return m/(Math.floor(m))%1 != 0
  }

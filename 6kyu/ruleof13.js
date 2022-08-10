function thirt(n) {
  let seq = [1,10,9,12,3,4]
  let number = (n)
  let result = 0
  let index = 0
  while (number > 0.1){
    result += (number%10 * seq[index])
    number = Math.floor(number/10)
    index == 5 ? index=0 : index++
  }
  return (n == result)? n : thirt(result)
}

function howManyPizzas(n) {
 //I have to compare areas
  // Pi/4 * d^2
  //d1^2/d2^2
  
  
  //divide the first pizza by the 8 incher and take the entire part
  //DIVIDE THE REST BY SLICES
  
  let pizzas = Math.floor((n**2) / (8**2))
  let slicesDec = (n**2) / (8**2) - pizzas //in decimals
  let slices = Math.round(slicesDec*8)
  
  return `pizzas: ${pizzas}, slices: ${slices}`
  
  
  
}

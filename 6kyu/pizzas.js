/*How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is: How many 8-inch pizzas "fit" in a 16-incher?

The answer, as it turns out, is exactly four 8-inch pizzas. For sizes that don't correspond to a round number of 8-inchers, you must round the number of slices (one 8-inch pizza = 8 slices), e.g.:

how_many_pizzas(16) -> "pizzas: 4, slices: 0"
how_many_pizzas(12) -> "pizzas: 2, slices: 2"
how_many_pizzas(8) -> "pizzas: 1, slices: 0"
how_many_pizzas(6) -> "pizzas: 0, slices: 5"
how_many_pizzas(0) -> "pizzas: 0, slices: 0"
Get coding quick, so you can choose the ideal size for your next meal!*/


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

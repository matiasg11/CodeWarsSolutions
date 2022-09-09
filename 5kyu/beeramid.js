/*Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16*/


// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  //I recieve two values: the total bonus in $ and the price of the beer in $/beer.
  //Each level has n^2 beers
  //The total amount of beers multiplied by its price should not be greater than the total bonus
  let levels = 1
  let beers = Math.floor(bonus/price)
  let count = 1
  
  while (count <= beers){
    levels++
    count += levels**2 
  }
  
  return levels-1
  
  //I thought about it a few minutes and then it resulted easier than some 6 or 7 kyus
  
  
  
  //beeramid(1500, 2); // should === 12
  //beeramid(5000, 3); // should === 16
}

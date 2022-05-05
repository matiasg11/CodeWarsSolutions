/*#Description

Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.*/

function animals(heads, legs){
  let p = Math.abs((legs-4*heads)/(-2))
  let v = Math.abs(heads-p)
  let total = 2*p+4*v
  if (legs%2 != 0 || heads>legs || total != legs){
    return "No solutions"
  }else{
    return [p,v]
  }

}

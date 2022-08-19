// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let a = ages.sort((a,b)=>b-a)
  return [a[1], a[0]]
}

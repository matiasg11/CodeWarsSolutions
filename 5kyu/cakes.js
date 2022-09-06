function cakes(recipe, available) {

  let arr = []
  
  for (let keys in recipe){
    if (!available[keys]){
      return 0
    }
    arr.push(Math.floor(available[keys]/recipe[keys]))
  }
  return Math.min(...arr)
}
//Calculate if everything needed in the recipe is available
//Calculate the minimum of cakes that can be done

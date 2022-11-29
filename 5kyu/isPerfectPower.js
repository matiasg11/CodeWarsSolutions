var isPP = function(n){
  let firstM = Math.floor(Math.sqrt(n))
  for (let i=firstM; i>0; i--){
    let j = Math.round(Math.log(n)/Math.log(i))
    if (i**j == n){
        return [i,j]
      }
    }
  
  return null; // Y Dale BOOOOOCAAAA, dale BOOOOO
}

var isSquare = function(n){
  if(n==0){
    return true
  }
  return (Math.sqrt(n)%(Math.floor(Math.sqrt(n)))) == 0; // fix me
}

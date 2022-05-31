/*Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.*/
function nearestSq(n){
    let m = n
    while ((Math.sqrt(n)/Math.round(Math.sqrt(n)) != 1) && (Math.sqrt(m)/Math.round(Math.sqrt(m)) != 1)){
      n++
      m--
    }
  
  return ((Math.sqrt(n)/Math.round(Math.sqrt(n)) != 1) ? m : n)
}

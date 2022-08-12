function orderWeight(strng) {
 let arr = strng.split(" ")
 let order = arr.sort((a,b)=> weight(a) - weight(b))
 
 for(let i=0;i<order.length-1; i++){
   if (weight(order[i]) == weight(order[i+1])){
     if (String(order[i]) > String(order[i+1])){
      let m = order[i];
      order[i] = order[i+1]
      order[i+1] = m
      i=i-3
     }
   }
 }
 
 return order.join(" ")
  
}

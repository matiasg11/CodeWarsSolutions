function howManySmaller(arr,n){
 return arr.filter((a)=> Math.round(100*a)/100<n).length
}

function findOdd(A) {
  for(let i=0; i<A.length; i++){
    if ((A.filter((v) => (v === A[i])).length)%2 != 0){
      return A[i]
    }
  } 
}

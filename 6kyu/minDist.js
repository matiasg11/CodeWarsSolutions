function minDistance(n){
  let factors = []  //Initialize the vector that will include the factors
  
  for (let i=1; i<=n/2; i++){
    if (n%i==0){
      factors.push(i)
      //Add each factor to the array
    }
  }
  factors.push(n) //Add the actual value, as it is another factor.
  
  //Now lets calculate the minimum difference between 2 of them.
  let dif = factors[1]-factors[0]  //At least we have 2. 1 and n.
  
  for(let i=2; i<factors.length; i++){
    (factors[i]-factors[i-1])<dif ? dif = factors[i]-factors[i-1]: dif = dif
  }
  
  return dif
}

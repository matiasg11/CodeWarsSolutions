function removeNb (n) {
  let pairs = [];
  let sum = (n**2+n)/2;
  for (let i = n; i > 0; i--){
    let j = (sum - i)/(i +1);
    if (j < n && Number.isInteger(j)){
      pairs.push([j,i]);
    }
  }
  return pairs;
}

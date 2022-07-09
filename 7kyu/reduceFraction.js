function reduce(fraction) {
  for(let i=2; i<=Math.min(fraction[0],fraction[1]);i++){
    if (fraction[0]%i == 0 && fraction[1]%i ==0 ){
      fraction[0]/=i
      fraction[1]/=i
      i--
    }
  }
  return fraction
}

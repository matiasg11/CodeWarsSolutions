function stairsIn20(s){
  let daysSummed = 0
  for (let i=0; i<s.length; i++){
    daysSummed += s[i].reduce((a,b) => a+b)
}
  return daysSummed*20
  }

function distinct(a) {
  let answer = []
  for(let i=0; i<a.length; i++){
    if (!(answer.includes(a[i]))){
      answer.push(a[i])
    }
  }
  return answer;
}
//BEST PRACTICES
function distinct(a) {
  return [...new Set(a)];
}
function distinct(a) {
  return Array.from(new Set(a));
}

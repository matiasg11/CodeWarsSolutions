function differenceInAges(ages){
  let a = ages.sort((a,b) => a-b);
  return [a[0], a[a.length-1], a[a.length-1]-a[0]]
}

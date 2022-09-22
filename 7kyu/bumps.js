function bump(x){
  return x.split('').filter(a => a == 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
}

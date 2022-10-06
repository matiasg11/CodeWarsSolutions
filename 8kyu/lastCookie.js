function cookie(x){
  return `Who ate the last cookie? It was ${ typeof x == 'number' ? 'Monica' : typeof x == 'string' ? 'Zach' : 'the dog' }!`;
}

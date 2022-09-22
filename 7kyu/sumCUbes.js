function sumCubes(n){
  let cubes = 0;
  for ( let i = 1; i <= n; i++) {
    cubes += i ** 3;
  }
  return cubes;
}

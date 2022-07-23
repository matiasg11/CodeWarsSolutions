function oddOrEven(array) {
   return (
     Math.abs((array.reduce((a,b)=> a+b,0)) % 2) == 1 ? 'odd' : 'even'
   )
}

function productFib(prod){
  let fib = [0,1] //preload the first numbers or it wouldn't work

  for (let i=2; i<prod; i++){
    fib.push(fib[i-2]+fib[i-1])
    if (fib[i]*fib[i-1] >= prod){
      return (fib[i]*fib[i-1] == prod) ? [fib[i-1], fib[i], true] : [fib[i-1], fib[i], false]
    }
  }
}

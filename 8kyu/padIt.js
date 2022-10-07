function padIt(str,n){
  let counter = 0;
  while(counter < n) {
    if(counter%2 == 0) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    counter++;
  }
  return(str);
}

function stray(numbers) {
  for(let i = 0;i<numbers.length;i++){
    if(numbers.lastIndexOf(numbers[i])==numbers.indexOf(numbers[i])){
      return numbers[i]
    }
  }
}

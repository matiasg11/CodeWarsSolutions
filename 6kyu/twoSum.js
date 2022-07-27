function twoSum(numbers, target) {
  
  for (let i=0; i<numbers.length; i++){
    if (numbers.lastIndexOf(target-numbers[i]) != -1  && numbers.lastIndexOf(target-numbers[i]) != i){
      return [i,numbers.lastIndexOf(target-numbers[i])]
    }
  }
  
}

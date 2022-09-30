function adjacentElementsProduct(array) {

    let ans = [];
  for (let i = 0; i < array.length -1; i++) {
    ans.push(array[i] * array[i + 1])
  }
  return Math.max(...ans)
  }

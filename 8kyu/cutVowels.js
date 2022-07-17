function shortcut (string) {
  let vowels = ['a','e','i','o','u']
  let newArr = string.split('')
  let newArr2 = newArr.filter( x => !vowels.includes(x))
  return newArr2.join('');
}

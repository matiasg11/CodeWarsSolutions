function describeAge(age) {
  let a=""
  age<13?a="kid":age<18?a="teenager":age<65?a="adult":a="elderly"
  return `You're a(n) ${a}`
}

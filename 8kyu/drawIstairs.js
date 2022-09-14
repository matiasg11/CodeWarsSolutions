function drawStairs(n) {
  let spaces = '';
  let str = '';

  if (n > 1) {
    for (let i = 0; i < n; i++) {
      spaces += ' ';
      str += 'I\n' + spaces;
    }
    console.log(str)
    return str.trim();
  } else {
    return 'I';
  }
}

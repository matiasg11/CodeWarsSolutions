function incrementString (strng) {
  // return incrementedString
   let regex = /[0-9]/g;
  let index = strng.search(regex);
  let arr = [];
  
  //split string at where a number first appears
  if (index === -1 || strng === "") {
    return strng + "1";
  }
  else arr.push( strng.substring(0, index), strng.substring(index, strng.length) );
  
  //loop through element of array with numbers and increment by 1 when necessary
  let secondArr = arr[1].split("");
  for (let i = secondArr.length - 1; i >= 0; i--) {
    if (secondArr[i] < 9) {
      secondArr[i]++;
      break;
    }
    else if (i === 0 && secondArr[i] == 9) {
      secondArr[i] = 10;
    }
    else if (secondArr[i] == 9) {
      secondArr[i] = 0;
    }
  }
  secondArr = secondArr.join("");
  return arr[0] + secondArr;
}

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

//It took me a long time. It just couldn't make it work.
//UNTIL I FOUND I USED > INSTEAD OF <
//https://i.pinimg.com/originals/d4/3f/97/d43f97bff190cae66ccee6a8ec81bb13.jpg

function getCount(str) {
  var vowelsCount = 0;
  str.toUpperCase()
  const vowels = ["a","e","i","o","u"]
  for (let i=0; i<str.length; i++){
    if (vowels.includes(str[i])){
      vowelsCount++
    }
  }
  
  
  return vowelsCount;
}

//Easiest solution:
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

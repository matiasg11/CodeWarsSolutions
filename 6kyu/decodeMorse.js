decodeMorse = function(morseCode){
  morseCode = morseCode.split('   ');
  let answer = '';
  let word = [];
  for (let i=0; i<morseCode.length; i++) {
    word = morseCode[i];
    word = word.split(' ');
    for (let j=0; j<word.length; j++) {
      if (MORSE_CODE[word[j]] !== undefined) {
        answer += (MORSE_CODE[word[j]]);
      }
    }
    answer = answer + ' ';
  }
  answer = answer.trim();
  return answer;
}

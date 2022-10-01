function unluckyDays(year){
  let answer = 0;

  for (let i = 0; i < 12; i++) {
    let yearDate = new Date(year, i, 13)
    if (yearDate.getDay() == 5) answer++;
  }
  return answer;
}

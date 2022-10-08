function changeMe(moneyIn){
  switch (moneyIn) {
    case '£5':
      var change = Array(25).fill('20p');
      return change.join(' ');
    case '£2':
      var change = Array(10).fill('20p');
      return change.join(' ');
    case '£1':
      var change = Array(5).fill('20p');
      return change.join(' ');
    case '50p':
      return '20p 20p 10p';
    case '20p':
      return '10p 10p';
    default:
      return moneyIn;
  }
}

var Ghost = function() {
  let num = Math.ceil(Math.random()*4)
  switch (num){
      case 1:
      this.color = "white"
      break;
      case 2:
      this.color = "yellow"
      break;
      case 3:
      this.color = "purple"
      break;
      case 4:
      this.color = "red"
      break;
  }
};

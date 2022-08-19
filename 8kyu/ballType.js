var Ball = function(ballType) {
  if (ballType == undefined) {
      this.ballType = 'regular';
  } else {
    this.ballType = ballType;
  }
};

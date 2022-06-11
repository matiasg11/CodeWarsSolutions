function whoseMove(lastPlayer, win) {
  if(lastPlayer == "black"){
    return win == true ?  "black" :  "white"
  }
  else {
   return  win == false ?  "black" :  "white"
  }
}

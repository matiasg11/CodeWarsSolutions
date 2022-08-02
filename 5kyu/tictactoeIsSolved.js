//I had problems with one thing and I thought it was from the last part and it was making me a tic tac toe of empty spaces. 
function isSolved(board) {
  
  for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
      //Check horizontals
      if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] !=0){
        return board[i][0]
      }
      //Check verticals
      else if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[1][j] !=0){
        return board[0][j]
      }
      //Check diagonal left-right
      else if (board[0][0] == board[1][1] && board[0][0] == board[2][2]  && board[2][2] !=0){
        return board[0][0]
      }
      //Check diagonal right-left
      else if (board[0][2] == board[1][1] && board[2][0] == board[1][1]  && board[1][1] !=0){
        return board[1][1]
      }
    }
  }
  for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
  //If nobody won and there are empty spots
       if (board[i].includes(0)){
        return -1
      }}}
  if (!(board[0].includes(0) || board[1].includes(0) ||board[2].includes(0))){
  return 0}
}

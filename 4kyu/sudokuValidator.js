function validSolution(board){
  
  //Validate each row
  for (let i=0; i<board.length; i++){
    for (let j=0; j<board.length; j++){
      if (board[i].indexOf(board[i][j]) !== board[i].lastIndexOf(board[i][j])){
        return false
      }
    }
  }
  
  //Validate each column
  for (let j=0; j<board.length; j++){
    for (let i=0; i<board.length; i++){
      if (board[i].indexOf(board[i][j]) !== board[i].lastIndexOf(board[i][j])){
        return false
      }
    }
  }
  
  //Validate each square
  let sq1 = [board[0][0],board[0][1],board[0][2],
             board[1][0],board[1][1],board[1][2],
             board[2][0],board[2][1],board[2][2],]
  let sq2 = [board[0][3],board[0][4],board[0][5],
             board[1][3],board[1][4],board[1][5],
             board[2][3],board[2][4],board[2][5],]
  let sq3 = [board[0][6],board[0][7],board[0][8],
             board[1][6],board[1][7],board[1][8],
             board[2][6],board[2][7],board[2][8],]
  let sq4 = [board[0][3],board[0][4],board[0][5],
             board[1][3],board[1][4],board[1][5],
             board[2][3],board[2][4],board[2][5],]
  let sq5 = [board[3][3],board[3][4],board[3][5],
             board[4][3],board[4][4],board[4][5],
             board[5][3],board[5][4],board[5][5],]
  let sq6 = [board[3][6],board[3][7],board[3][8],
             board[4][6],board[4][7],board[4][8],
             board[5][6],board[5][7],board[5][8],]
  let sq7 = [board[6][0],board[6][1],board[6][2],
             board[7][0],board[7][1],board[7][2],
             board[8][0],board[8][1],board[8][2],]
  let sq8 = [board[6][3],board[6][4],board[6][5],
             board[7][3],board[7][4],board[7][5],
             board[8][3],board[8][4],board[8][5],]
  let sq9 = [board[6][6],board[6][7],board[6][8],
             board[7][6],board[7][7],board[7][8],
             board[8][6],board[8][7],board[8][8],]
  
  let arr = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9]
  
  for (let i=0; i<arr.length; i++){
    for(let j=0; j<arr[0].length; j++){
      if (arr[i].indexOf(arr[i][j]) !== arr[i].lastIndexOf(arr[i][j])){
        return false  //Anything wrong triggers this
      }
    }
  }
  //If everything gets validated
  return true
}

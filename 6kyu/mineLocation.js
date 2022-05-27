/*You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]*/

function mineLocation(field){
  //I have a square field. So i rows and j columns.
  //The mines are represented by the number 1. There is only one mine in the field.
  //I'll use one loop to run through the rows and another to run through the columns.
  //The expected return is the coordinates of the mine, starting in 0,0. 
  //The return is an array in the form of [row, column]

  for(let i = 0; i<field.length; i++){
    for (let j = 0; j<field.length; j++){
      if (field[i][j] == 1){
        return [i,j]
      }
    }
  }
  
}

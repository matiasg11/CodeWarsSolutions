//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const saddlePoints = (matrix) => {
  let answer = []
  for (let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      if (matrix[i][j] == Math.max(...matrix[i])){
        let col = []
        for(let m = 0; m<matrix.length; m++){
          col.push(matrix[m][j])
        }
        if (matrix[i][j] == Math.min(...col)){
          answer.push({column:j+1, row:i+1})
        }
      }
    }
  }
  return answer
  //Return [{row:2, column:3}]
};

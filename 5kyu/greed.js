function score( dice ) {

  let score = 0
  let array = []
  for(let i=1; i<=6; i++){
    array.push(dice.filter((a)=> a==(i)).length)
  }
  if (array[0]==2){
    score+= 200}
  if (array[0]==1){
    score+= 100}
  if (array[0]==3){
    score+= 1000}
  
  if (array[0]==4){
      score+=1100
    }
  if(array[0]==5){
      score+=1200
    }
  
  
  if (array[1]>=3){
    score+= 200}
  if (array[2]>=3){
    score+= 300}
  if (array[3]>=3){
    score+= 400}
  if (array[5]>=3){
    score+= 600} 
  
   if (array[4]==2){
    score+= 100}
  if (array[4]==1){
    score+= 50}
  if (array[4]==3){
    score+= 500}
  
  if (array[4]==4){
      score+=550
    }
  if(array[4]==5){
      score+=600
    }
  return score
  
}

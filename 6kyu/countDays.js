function countDays(d){
  let date = new Date()
  let day = [date.getDate(), date.getMonth(), date.getFullYear()]
  let dday = [d.getDate(), d.getMonth(), d.getFullYear()]
  
  const diffTime = Math.abs(d - date);
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
  console.log(diffDays, diffTime)
  if (dday[2]<day[2] || dday[2]==day[2] && dday[1]<day[1] || dday[2]==day[2] && dday[1] == day[1] && dday[0]<day[0]){
    return "The day is in the past!"
  } else if (dday[2]==day[2] && dday[1]==day[1] && dday[0]==day[0]){
    return "Today is the day!"
  }else {
    return `${diffDays} days`
  }
 
  
}

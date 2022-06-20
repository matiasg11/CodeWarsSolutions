function runningPace(distance, time){
  let timeParsed = time.split(":").map(a=>+a)
  let minutesAbs = (((timeParsed[0])*60+(timeParsed[1]))/distance)
  let hoursAbs = Math.floor(minutesAbs/60)
  let minFinal = Math.floor(minutesAbs%60)
  
  if (minFinal<10){
    minFinal = "0"+minFinal
  }
  
  return `${hoursAbs}:${minFinal}`
  
}

function stat(strg) {
  if (strg == ""){return ""}
  
  let timesAll = strg.split(", ")
  let absTime = timesAll.map(t => parseTime(t))
  
  let med = parseHMS(median(absTime))
  let av  = parseHMS(avg(absTime))
  let ra  = parseHMS(range(absTime))
  
  return `Range: ${ra} Average: ${av} Median: ${med}`
}

function parseTime(time){
  let hms = time.split("|").map(t => parseInt(t))
  return hms[0]*3600+hms[1]*60+hms[2]
}

function range(timesArray){
  return (Math.max(...timesArray)-Math.min(...timesArray))
}

function avg(timesArray){
  return Math.round(timesArray.reduce((acc, val) => acc+val,0)/timesArray.length)
}

function median(timesArray){
  if (timesArray.length %2 == 0){
    let a = timesArray.length/2
    let b = timesArray.length/2-1
    return (timesArray[a]+timesArray[b])/2
  }
  else {
    
    return (timesArray[Math.floor(timesArray.length/2)])
  }
}

function parseHMS(time){
  let h = Math.floor(time/3600)
  let m = Math.floor((time-h*3600)/60)
  let s = Math.trunc(time-h*3600-m*60)
  
  return `${h}|${m}|${s}`
  }

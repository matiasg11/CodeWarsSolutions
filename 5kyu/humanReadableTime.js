function humanReadable (seconds) {
  let hours = Math.floor(seconds/3600)
  let minutes = Math.floor((seconds%3600)/60)
  let sec = (seconds%3600)%60
  
  
  //With a little help for the format. Using the '0' to compute single digits.
  if (hours < 10){
    hours = '0'+hours
  }
  if (minutes<10){
    minutes = '0'+minutes
  }
   if (sec<10){
    sec = '0'+sec
  }
  
  return `${hours}:${minutes}:${sec}`;
}

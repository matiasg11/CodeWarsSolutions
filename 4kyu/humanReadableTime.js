function formatDuration (seconds) {
  if (seconds == 0){
    return "now"
  }
  let y = Math.floor(seconds/(60*60*24*365))
  let d = Math.floor((seconds%(60*60*24*365))/(60*60*24))
  let h = Math.floor((seconds%(60*60*24))/(60*60))
  let m = Math.floor((seconds%(60*60))/(60))
  let s = Math.floor((seconds%(60)))
  
  let str = ""
  let n = [y,d,h,m,s]
  let ans = []
  if (y>0){
    y > 1 ? ans.push(`${y} years`) :ans.push(`${y} year`)
  }
  
  if (d>0){
    d > 1 ? ans.push(`${d} days`) :ans.push(`${d} day`)
  }
  if (h>0){
    h > 1 ? ans.push(`${h} hours`) :ans.push(`${h} hour`)
  }
  if (m>0){
    m > 1 ? ans.push(`${m} minutes`) :ans.push(`${m} minute`)
  }
  if (s>0){
    s > 1 ? ans.push(`${s} seconds`) : ans.push(`${s} second`)
  }
  
  let answer = ans.join(", ")
  if (answer.lastIndexOf(",") != -1){
    answer = answer.split("")
    answer.splice(answer.lastIndexOf(","),1," and")
    answer = answer.join("")
  }
  return answer
}

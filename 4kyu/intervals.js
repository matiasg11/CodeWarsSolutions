function sumIntervals(intervals) {
  intervals.sort((first, sec) => {
    return first[0] - sec[0] || first[1] - sec[1];  //We Order the intervals regarding their start or second element if the start is the same
  })
  let start = intervals[0][0]  //The lowest number of the intervals
  let result = 0
  for(let i=0; i<intervals.length; i++){ 
    result += (Math.max(0, intervals[i][1]-Math.max(intervals[i][0], start)))  //We sum 0 if the max interval is negative or the interval between the right part and the highest number we've had in the intervals.
    start = Math.max(intervals[i][1], start) //If the interval extends our current total interval, we put a new boundary. else, we continue as if nothing happened because the last interval fell within our big one.
  }
  return result
  
}

/*You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"*/




function direction(facing, turn){
  let compass = {"N":0, "NE":45, "E":90, "SE":135, "S":180, "SW":225, "W":270, "NW":315}
  let dir = (compass[facing]+turn)%360
  if (dir<0){
    dir = dir+360
  }
  let point 
  switch(dir){
      case 0:
        point = "N"
        break;
      case 45:
        point ="NE"
      break;
       case 90:
        point = "E"
        break;
      case 135:
        point ="SE"
      break;
      case 180:
        point = "S"
        break;
      case 225:
        point ="SW"
      break;
       case 270:
        point = "W"
        break;
      case 315:
        point ="NW"
      break;
  }
  return point
  
}

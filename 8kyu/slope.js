function slope(points)
{
  console.log(points)
  return (points[2]-points[0]) != 0 ? String(Math.round((points[3]-points[1])/(points[2]-points[0]))) : "undefined"
}

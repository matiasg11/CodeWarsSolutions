/*To introduce the problem think to my neighbor who drives a tanker truck. The level indicator is down and he is worried because he does not know if he will be able to make deliveries. We put the truck on a horizontal ground and measured the height of the liquid in the tank.

Fortunately the tank is a perfect cylinder and the vertical walls on each end are flat. The height of the remaining liquid is h, the diameter of the cylinder base is d, the total volume is vt (h, d, vt are positive or null integers). You can assume that h <= d.

Could you calculate the remaining volume of the liquid? Your function tankvol(h, d, vt) returns an integer which is the truncated result (e.g floor) of your float calculation.

Examples:
tankvol(40,120,3500) should return 1021 (calculation gives about: 1021.26992027)

tankvol(60,120,3500) should return 1750

tankvol(80,120,3500) should return 2478 (calculation gives about: 2478.73007973)*/

function tankvol(h, d, vt) {
    // We have the diameter and the total volume of the tank
  //hence, we can calculate the length of the tank.
  //The result has to be the truncated volume present in the tank
  
  //The volume to be calculated is the entire portion of the circular section minus the triangle from the top
  //If the volume is over the middle, it would be V =totalVol - (0.5 * r**2 * (phi - sin(phi)) * length)
  //while phi = 2*arccos((r-h)/r)
  let r = d/2
  let sectionTotal = Math.PI*(r**2)
  let length = vt/sectionTotal
  let phi = 2*Math.acos(((r)-h)/(r))
  let voidVol = (0.5 * r**2 * (phi - Math.sin(phi)) * length)
  
  return Math.floor(voidVol)
  
}

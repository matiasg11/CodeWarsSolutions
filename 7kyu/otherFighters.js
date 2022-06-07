/*Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  //They will have the same number of attacks unless one wins. 
  //I can calculate the minimum number of attacks by dividing the health by the strength of the opponent
  
  return (fighter1.health/fighter2.damagePerAttack > fighter2.health/fighter1.damagePerAttack ? fighter1.name : (fighter2.health/fighter1.damagePerAttack > fighter1.health/fighter2.damagePerAttack ? fighter2.name : firstAttacker));
}

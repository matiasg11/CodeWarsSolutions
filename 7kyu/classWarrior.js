/*var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70*/

class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
  
  strike(enemy, swings) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }
}

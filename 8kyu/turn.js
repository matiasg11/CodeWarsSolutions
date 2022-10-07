var health = 100
var position = 0
var coins = 0

function doTurn () {
 rollDice()
  move()
      combat()
      getCoins()
  
      buyHealth()
    
     printStatus()
    
    }

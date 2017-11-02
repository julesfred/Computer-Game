function startGame() {
  
  if (playGame === "yes") {
    var character = {
      name: prompt("Name your character"),
      health: 40,
      wins: 0,
      healsRemaining: 2,
      generateAttackDamage: function() {
        return Math.floor(Math.random() * 3) + 1;
      },
      heal: function() {
        this.healsRemaining--;
        return Math.floor(Math.random() * 10) + 1;
      }
    };
    var grant = {
      name: "Grant",
      health: 10,
      generateAttackDamage: function() {
        return Math.floor(Math.random() * 3) + 1;
      }
    };
  }
  startCombat(character, grant, playGame);
}

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

function startCombat(choice) {
  
    if (character.wins >= 5) {
      console.log("You have won the game!");
      return;
    }
    var userChoice = prompt("Would you like to attack, heal, or quit");
    if (userChoice === "attack") {
      grant.health -= character.generateAttackDamage();
      character.health -= grant.generateAttackDamage();
      console.log(character.name + " has " + character.health + " health left.");
      console.log(grant.name + " has " + grant.health + " health left.");
    } else if (userChoice === "quit") {
      return;
    } else if (userChoice === "heal") {
      if (character.healsRemaining > 0) {
        character.health += character.heal();
        console.log(character.name + " has healed and has " + character.health + " health.");
        character.health -= grant.generateAttackDamage();
        console.log(character.name + " gets hit after healing and has " + character.health + " left!");
      } else if (character.healsRemaining <= 0) {
        console.log("You cannot heal!");
        character.health -= grant.generateAttackDamage();
        console.log(character.name + " has " + character.health + " health left.");
        console.log(grant.name + " has " + grant.health + " health left.");
      }
    }
    if (character.health <= 0) {
      console.log("You have been defeated!");
      return;
    }
    if (grant.health <= 0) {
      character.wins++;
      console.log("You have beat " + grant.name + "! You need to win " + (5 - character.wins) + " more round(s).");
      grant.health = 10;
    }
  
}

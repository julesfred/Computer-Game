//function startGame() {
//  var playGame = prompt("Do you want to play?");
//  if (playGame === "yes") {
/*    var character = {
      name: "player",//prompt("Name your character"),
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
    var enemy = {
      name: "Java the Hut",
      health: 10,
      generateAttackDamage: function() {
        return Math.floor(Math.random() * 3) + 1;
      }
    };

    */


    
    var player = {
      name: "Player",//prompt("Name your character"),
      health: 40,
      wins: 0,
      healsRemaining: 2,
      generateAttackDamage: function() {
          return Math.floor(Math.random() * 3) + 1;
      },  
      heal: function(){
          this.healsRemaining --;
          if (this.healsRemaining === -1) {
              console.log("You have no more heals left, attack or quit.");
              startCombat();
          }
          return Math.floor(Math.random() * 10) + 1;
          
      }
  }

  var enemy = {
    name: "Java the Hut",
    health: 10,
      generateAttackDamage: function(){
          return Math.floor(Math.random() * 3) + 1;
      }
  }
  




/*function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}*/

function startCombat(choice) {
  

    /*if (character.wins >= 5) {
      console.log("You have won the game!");
      return;
    }*/
    if (player.wins === 5) {
      console.log("Congratulations! You won the game.");
    } 
  
    /*if (choice === "attack") {
      enemy.health -= character.generateAttackDamage();
      character.health -= enemy.generateAttackDamage();
      console.log(character.name + " has " + character.health + " health left.");
      console.log(enemy.name + " has " + enemy.health + " health left.");*/

      if (choice === "attack") {
        console.log("You attacked " + enemy.name + "!!!");

        player.health -= player.generateAttackDamage();
        enemy.health -= enemy.generateAttackDamage();     

        console.log(player.name + ", your health is " + player.health);
        console.log(enemy.name + "'s health is "+ enemy.health); 

      if (enemy.health <= 0) {
        player.wins++;
        enemy.health = 10;
        console.log(player.name + ", you won a battle!!!");
      }

      if (player.health <=0) {
          console.log("Sorry you lost, the game is over.");
          playing = false;
      }

      } else if (choice === "heal") {
      player.health += player.heal();
      player.health -= enemy.generateAttackDamage();
        //console.log("Your new health is at " + newHealth);
      } 
              
      else {
          prompt("Goodbye, nerd.");
          playing = false;
      } 

    /*} else if (choice === "quit") {
      return;

    } else if (choice === "heal") {
      if (character.healsRemaining > 0) {
        character.health += character.heal();
        console.log(character.name + " has healed and has " + character.health + " health.");
        character.health -= enemy.generateAttackDamage();
        console.log(character.name + " gets hit after healing and has " + character.health + " left!");
      } else if (character.healsRemaining <= 0) {
        console.log("You cannot heal!");
        character.health -= enemy.generateAttackDamage();
        console.log(character.name + " has " + character.health + " health left.");
        console.log(enemy.name + " has " + enemy.health + " health left.");
      }*/

    

      /*if (character.health <= 0) {
        console.log("You have been defeated!");
        return;
      }
      if (enemy.health <= 0) {
        character.wins++;
        console.log("You have beat " + enemy.name + "! You need to win " + (5 - character.wins) + " more round(s).");
        enemy.health = 10;
      }*/
      if (enemy.health <= 0) {
        player.wins++;
        enemy.health = 10;
        console.log(name + ", you won a battle!!!");
      }

      if (player.health <=0) {
          console.log("Sorry you lost, the game is over.");
          playing = false;
      }

      displayInfo ();
      
}




    function displayInfo () {
        var name = document.getElementsByClassName("name")[0];
        var healsR = document.getElementsByClassName("healsR")[0];
        var health = document.getElementsByClassName("health")[0];
        var wins = document.getElementsByClassName("wins")[0];
        var eName = document.getElementsByClassName("eName")[0];
        var eHealth = document.getElementsByClassName("eHealth")[0];
        name.innerText = "Name: " + player.name;
        healsR.innerText ="Heals Remaining: " + player.healsRemaining;
        health.innerText = player.name + "'s Health: " + player.health;
        wins.innerText = "Wins: " + player.wins;
        eName.innerText = "Your Enemy: " + enemy.name;
        eHealth.innerText = "Java the Hut's Health: " + enemy.health;
            
    };

    function statsInfo () {
    var stats 


    };



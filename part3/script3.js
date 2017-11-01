function startGame() { 
    console.log("Game has started!");

    var playing = prompt("Do you want to play a game?").toLowerCase();
   //var name = null;

    if (playing === "yes") {
        this.name = prompt("Enter your name.");
    
        //previous function startCombat() {

            var health = 40;
            var enemyHealth= 10;
            var wins= 0;
            var playing = true;    
        

            var player = {
                wins: 0,
                health: 40, 
                healsRemaining: 2,
                name: name,
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

        startCombat();
        function startCombat(){
            while (playing) {
                
                if (wins === 5) {
                    console.log("Congratulations! You won the game.");
                    break;
                } 
                            
                var aOrQ = prompt("would you like to attack, heal, or quit?");
                if (aOrQ === "attack") {
                    console.log("You attacked " + enemy.name + "!!!");

                    health -= player.generateAttackDamage();
                    enemyHealth -= enemy.generateAttackDamage();     

                    console.log(name + ", your health is " + health);
                    console.log(enemy.name + "'s health is "+ enemyHealth);  
                                

                        /*function getDamage() {
                        return Math.floor(Math.random() * 5) + 1;
                        }*/

                        /*function getDamageEnemy(x) {
                        x -= Math.floor(Math.random() * 2) + 1;
                        return(x);
                        }
                        enemyHealth=getDamageEnemy(enemyHealth);*/
            
                        if (enemyHealth <= 0) {
                            wins++;
                            enemyHealth = 10;
                            console.log(name + ", you won a battle!!!");
                        }

                        if (health <=0) {
                            console.log("Sorry you lost, the game is over.");
                            playing = false;
                        }

                } else if (aOrQ === "heal") {
                    var newHealth = health + player.heal();
                    console.log("Your new health is at " + newHealth);
                } 
                            
                else {
                    prompt("Goodbye, nerd.");
                    playing = false;
                }      
        
            }//while loop end

        }//startCombat(""); end

    }
    else {
        prompt("Goodbye.");
    }

} //end of startGame function


/*update 10.27.17 Moved else statement to the bottom so javascript doesn't run when user says no.*/

/*Lab 1 out of 4*/



function startGame() { 
    console.log("Game has started!");

    var playing = prompt("Do you want to play a game?").toLowerCase();
    var name = null;

    if (playing === "yes") {
        name = prompt("Enter your name.");



        startCombat();



        //function startCombat() {

        function startCombat(){
            var health = 40;
            var enemyHealth= 10;
            var wins= 0;
            var playing = true;    
        
        while (playing) {
                

                    if (wins === 3) {
                    console.log("Congratulations! You won the game.");
                    break;
                    } 
                        
                        var aOrQ = prompt("would you like to attack or quit?");
                        if (aOrQ === "attack") {

                            
                                console.log("You attacked Grant!!!");
                                
                                health -= getDamage();
                                enemyHealth -= getDamage();     

                                console.log(name + ", your health is " + health);
                                console.log("Grant's health is "+ enemyHealth);  
                            

                                function getDamage() {
                                return Math.floor(Math.random() * 5) + 1;
                                }


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

                        

                        } else {
                                prompt("Goodbye, nerd.");
                                break;
                        }      
        
            } 

        }
        //startCombat("");

    }
    else {
        prompt("Goodbye.");
    }

} //end of startGame function





/*update 10.27.17 Moved else statement to the bottom so javascript doesn't run when user says no.*/

/*Lab 1 out of 4*/
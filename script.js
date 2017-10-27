var playing = prompt("Do you want to play a game?");
var name = null;

if (playing === "yes") {
    name = prompt("Enter your name.");
} else {
    prompt("Goodbye.");
}


var wins= 0;
var health = 40;
var enemyHealth= 10;
var playing = true;

while (playing) {
    if (wins === 3) {
    console.log("Congratulations! You won the game.");
    break;
}   

    health -= Math.floor((Math.random() * 2) + 1);
    enemyHealth -= Math.floor((Math.random() * 2) + 1);
    console.log(name + ", your health is " + health);
    console.log("Grant's health is " + enemyHealth);

if (enemyHealth <= 0) {
    wins++;
    enemyHealth = 10;
    console.log(name + ", you won a battle!!!");
    }

if (health <=0 || enemyHealth <=0) {
    console.log("Sorry you lost, the game is over.");
    playing = false;
}

} /*Lab 1 out of 4*/


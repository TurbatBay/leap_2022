/**
 * user should guess a number
 * 
 * 
 * | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
 * | x | x | 0 | 0 | 0 | x | x |
 */

let guesses = 0;
let isSunk = false;
let location1 = 3;
let location2 = 4;
let location3 = 5;
let hit = 0;

console.log("game begins")
while(!isSunk) {
    

    let userGuess = Number(prompt("Give me your position!"));
    guesses= guesses + 1;
    if (guesses > 6) {
        console.log("You lost you lost ur 6 entries");
        break;
    }

    if (userGuess > 0 && userGuess < 7) {
    console.log(userGuess);
    if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
        alert("You hit")
        hit++;
    } else {
        alert("You missed")
    }
    console.log(hit);
    if (hit == 3) {
        isSunk=true;
        console.log("You won!!! Ship has sunked ")
    }
} else {
    alert("Give me numbers between 0 and 6")
}
}
console.log("game ends")
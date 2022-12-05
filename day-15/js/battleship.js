/**
 * user should guess a number
 * 
 * 
 * | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
 * | x | x | 0 | 0 | 0 | x | x |
 */

 let guesses = 0;
 let isSunk = false;
 let hit = 0;
 
let locations = [false , false , true , true , true ,false, false ]

for (let i = 0;i < locations.length;i++) {
    console.log(locations[i]);
}





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
     if (userGuess == 3 && userGuess ==4 && userGuess == 5){
        userGuess == true;

     } 
     if (locations[2] == userGuess || locations[3] == userGuess || locations[4] == userGuess) {
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
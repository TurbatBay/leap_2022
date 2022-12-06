
// 2d array tictactoe game done!

let row1 = ['x', 'o', 'x'];
let row2 = ['o', 'o', 'x'];
let row3 = ['x', 'x', 'o'];
console.log(row1);
console.log(row2);
console.log(row3);


let tictactoe = [['x', 'o', 'x'], ['o', 'o', 'x'], ['x', 'x', 'o']];
//['x', 'o', 'x']
//['o', 'o', 'x']
//['x', 'x', 'o']
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);

console.log("for loop with for loop")



let input1 = Number(prompt("mur  oruulna uu?"));
let input2 = Number(prompt("bagana oruulna uu?"));
let input3 = Number(prompt("solih utga oruulna uu?"));
tictactoe[input1][input2] = [input3];

for (let i = 0; i < tictactoe.length; i++) {
    //double for loops
    let output = ''
    for (let j = 0; j < tictactoe[i].length; j++) {
        output = output + "| " + tictactoe[i][j] +" |";
        // console.log(tictactoe [i] [j]);
    } 
    console.log(output);
}

// Array - date

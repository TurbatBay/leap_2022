let too = Number(prompt("Ehnii toogoo oruulna uu"));
let sum = 0;

while (too > 0) {
    console.log(too);
    sum = (too + sum); //6 + 5 + 4 + 3 + 2 + 1 
    too = too -1;
}
console.log("nemelt " + sum)
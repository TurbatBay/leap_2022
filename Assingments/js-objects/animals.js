function howDoesTheFoxSay(array, animalType) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].type == animalType) {
            console.log(array[i].sound + "-" + array[i].sound + "-" + array[i].sound)
        }
        // console.log(array[i].type);
    }
}




let animals = [
    {
        type: "dog",
        sound: "WOOF"
    },
    {
        type: "cow",
        sound: "MOO"
    },
    {
        type: "cat",
        sound: "MEOW"
    }
]
console.log("Dog Barking")
howDoesTheFoxSay(animals, "dog");

console.log("Cow Mooing")
howDoesTheFoxSay(animals, "cow");


console.log("Cat meowing")
howDoesTheFoxSay(animals, "cat");

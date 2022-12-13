console.log("Lesson Objects")

let rabbit1 = {
    color : "White",
    rName: "Chandaga",
    gender: "Male",
    age: 2,
    jump: function() {
        console.log("Sorry i broke my leg, i cannot jump");
    },
    sayMyName: function(myName) {
        console.log(`Your name is ${myName} ` )
    }
}
console.log("####################")
console.log("Rabbit-1")
console.log("####################")
console.log(rabbit1);
console.log(rabbit1.color);
rabbit1.color = "Shavhai"
rabbit1.jump();
rabbit1.sayMyName('Turuu');


console.log("####################")
console.log("Rabbit-2")
console.log("####################")
let rabbit2 = {
    color : "Brown",
    rName: "Jijig",
    gender: "Female",
    age: 10,
    jump: function() {
        console.log("I can jump")
    }
}
console.log(rabbit2);
rabbit2.jump();
console.log("Rabbits")
let rabbits = [rabbit1, rabbit2]
console.log(rabbits)

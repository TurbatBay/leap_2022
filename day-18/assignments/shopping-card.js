console.log("Adding meat ex:1");
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]
// if (shoppingCart.includes("Meat") == false) {
//     console.log(shoppingCart.unshift("Meat"));
// }
// console.log(shoppingCart);
//ex2
// console.log("Adding sugar ex:2");
// if (shoppingCart.includes("Sugar") == false) {
//     console.log(shoppingCart.push("Sugar"));
// }

console.log(shoppingCart);
//ex3
console.log("Removing Honey ex:3");

console.log(shoppingCart.indexOf("Honey"));
console.log(shoppingCart.splice(3))
console.log(shoppingCart);


//ex4

console.log("modify Tea to Green tea ex:4");

console.log(shoppingCart.indexOf("Tea"));
console.log(shoppingCart.splice(2, 1, "Green Tea"))
console.log(shoppingCart);



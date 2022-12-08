//ex1-1
console.log("ex1-1")
let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ];
array.sort();
console.log(array);

//ex1-2
console.log("ex1-2")
array.reverse();
console.log(array)

//ex1-3
console.log("ex1-3")
array.shift();
console.log(array)


//ex1-4
console.log("ex1-4")

if (array.length % 2==0){
    console.log(array.length/2);
    let first =  array.length/2;
    console.log((array.length/2)-1);
    let second =  array.length/2-1;
    let double = first + second
    array.splice(first, 1);
    array.splice(second, 1);
    console.log(array);
} else {
    console.log(Math.round(array.length/2))
    let dund = Math.round(array.length/2);
    array.splice(dund, 1)
    console.log(array)
}

//ex1-5
console.log("ex1-5");
array.pop();
console.log(array);

//ex1-6
console.log("ex1-6");


for (i = -2; i < array.length; i++) {
    console.log(i)
    array.splice(i, 1);
}
console.log(array);


//DONE 6/6